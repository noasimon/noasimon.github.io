function exportToPdf() {
    const businessCard = document.getElementById('businessCard');
    const { jsPDF } = window.jspdf;
    const html2canvas = window.html2canvas;
    const pdf = new jsPDF();
    html2canvas(businessCard).then(function(canvas) {
        // Add the screenshot to the PDF
        var imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0);
        
        // Save the PDF
        pdf.save('BusinessCard.pdf');
    });
}
// function exportToPdf() {
//     var businessCard = document.getElementById('businessCard');
//     html2pdf().from(businessCard).save('BusinessCard.pdf');
// }