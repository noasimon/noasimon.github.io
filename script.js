function exportToPdf() {
    const businessCard = document.getElementById('businessCard');
    const { jsPDF } = window.jspdf;
    const html2canvas = window.html2canvas;
    const pdf = new jsPDF();
    html2canvas(businessCard).then(function(canvas) {
        // Add the screenshot to the PDF
        var imgData = canvas.toDataURL('image/png');
        
        // Calculate the scale factor
        var scaleFactor = 1;
        var desiredWidth = 326;  // The width of the business card in your CSS
        var actualWidth = canvas.width;
        scaleFactor = desiredWidth / actualWidth;

        // Add the screenshot to the PDF with scaling
        pdf.addImage(imgData, 'PNG', 0, 0, actualWidth * scaleFactor, canvas.height * scaleFactor);
        // pdf.addImage(imgData, 'PNG', 0, 0);
        
        // Save the PDF
        pdf.save('BusinessCard.pdf');
    });
}
// function exportToPdf() {
//     var businessCard = document.getElementById('businessCard');
//     html2pdf().from(businessCard).save('BusinessCard.pdf');
// }