
import { useState } from 'react';
import { parseResume } from '../utils/resumeParser';
import { matchResumeToJobs } from '../utils/jobMatcher';
import { generateCoverLetter } from '../utils/coverLetterGenerator';
import { generatePDF } from '../utils/pdfExporter';
import { fetchJobs } from '../utils/jobFetcher';

export default function ResumeUploader({ user }) {
  const [fileName, setFileName] = useState('');
  const [resumeData, setResumeData] = useState(null);
  const [matches, setMatches] = useState([]);
  const [coverLetter, setCoverLetter] = useState('');

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const text = reader.result as string;
      const parsed = parseResume(text);
      setResumeData(parsed);
      const jobs = await fetchJobs(parsed.skills);
      const matched = matchResumeToJobs(parsed, jobs);
      setMatches(matched);
      if (matched[0]) {
        const letter = generateCoverLetter(parsed.name, matched[0].title, matched[0].company);
        setCoverLetter(letter);
      }
    };
    reader.readAsText(file);
    setFileName(file.name);
  };

  const handleExportPDF = () => {
    generatePDF(resumeData, coverLetter);
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleUpload} />
      {fileName && <p>Uploaded: {fileName}</p>}
      {resumeData && <pre>{JSON.stringify(resumeData, null, 2)}</pre>}
      {matches.length > 0 && (
        <ul>
          {matches.map((job, i) => (
            <li key={i}><b>{job.title}</b> - {job.company} - Match: {job.match}%</li>
          ))}
        </ul>
      )}
      {coverLetter && (
        <>
          <h3>Cover Letter</h3>
          <pre>{coverLetter}</pre>
          <button onClick={handleExportPDF}>Download PDF</button>
        </>
      )}
    </div>
  );
}
