// function exportToPdf() {
//     const businessCard = document.getElementById('businessCard');
//     const { jsPDF } = window.jspdf;
//     const html2canvas = window.html2canvas;
//     const pdf = new jsPDF();
//     html2canvas(businessCard).then(function(canvas) {
//         // Add the screenshot to the PDF
//         var imgData = canvas.toDataURL('image/png');
//         pdf.addImage(imgData, 'PNG', 0, 0);
        
//         // Save the PDF
//         pdf.save('BusinessCard.pdf');
//     });
// }

// function exportToPdf() {
//     var businessCard = document.getElementById('businessCard');
//     html2pdf().from(businessCard).save('BusinessCard.pdf');
// }
function exportToPdf() {
    const businessCard = document.getElementById('businessCard');
    const { jsPDF } = window.jspdf;
    const html2canvas = window.html2canvas;

    // Define the business card dimensions in inches
    const cardWidthInch = 3.5;
    const cardHeightInch = 2.0;

    // Convert dimensions from inches to pixels (assuming 96 DPI)
    const dpi = 96;
    const cardWidthPx = cardWidthInch * dpi;
    const cardHeightPx = cardHeightInch * dpi +10;

    // Create the canvas with the fixed dimensions
    html2canvas(businessCard, {
        scale: 1,  // Default scale is 1
        width: cardWidthPx,
        height: cardHeightPx
    }).then(function(canvas) {
        const pdf = new jsPDF('portrait', 'in', 'a4');

        // Define the position on A4 paper (left margin 1 inch, top margin 1 inch)
        const leftMargin = 1; // 1 inch from the left
        const topMargin = 1; // 1 inch from the top

        // Add the screenshot to the PDF at the desired position
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', leftMargin, topMargin, cardWidthInch, cardHeightInch);

        // Save the PDF
        pdf.save('BusinessCard.pdf');
    });
}