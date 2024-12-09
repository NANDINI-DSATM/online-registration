$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault();

        $.ajax({
            url: 'process.php', // Replace with your PHP file
            type: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                $('#response').html('<div id="printableContent"><p style="color:black;">' + response + '</p></div><button id="printButton">Print</button>');
                $('#registrationForm')[0].reset(); // Reset form after successful submission
            },
            error: function () {
                $('#response').html('<p style="color:red;">An error occurred. Please try again.</p>');
            }
        });
    });
});
$(document).on('click', '#printButton', function () {
        const contentToPrint = document.getElementById('printableContent').innerHTML;

        // Open a new popup window
        const popupWindow = window.open('', '_blank', 'width=800,height=600');
        popupWindow.document.open();

        // Write content into the popup window
        popupWindow.document.write(`
            <html>
            <head>
                <title>Submitted Details</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; padding: 0; }
                    p { font-size: 14px; color: #333; line-height: 1.5; }
                    strong { color: #000; }
                </style>
            </head>
            <body>
                ${contentToPrint}
            </body>
            </html>
        `);
        popupWindow.document.close();

        // Trigger the print dialog and close the popup after printing
        popupWindow.focus();
        popupWindow.print();
        popupWindow.close();
    });