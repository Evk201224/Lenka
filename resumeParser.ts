
export function parseResume(fileText: string) {
  return {
    name: 'Elena Konovalova',
    type: fileText.includes('Customs') ? 'Customs' : 'Administrative',
    skills: ['CBSA', 'B3 Entry', 'EDI', 'Remote Collaboration', 'ACI Compliance'],
    summary: 'Experienced Customs Release Specialist with CSCB certificate.',
    linkedin: 'https://www.linkedin.com/in/helen-konovalova-a8a0b010'
  };
}
