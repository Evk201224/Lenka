
import jsPDF from 'jspdf';

export function generatePDF(resume, coverLetter) {
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text('Resume Summary:', 10, 10);
  doc.text(resume.summary, 10, 20);
  doc.text('Skills:', 10, 30);
  doc.text(resume.skills.join(', '), 10, 40);
  doc.text('Cover Letter:', 10, 60);
  doc.text(coverLetter, 10, 70);
  doc.save('resume_cover.pdf');
}
