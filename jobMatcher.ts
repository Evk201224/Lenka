
export function matchResumeToJobs(resume, jobs) {
  return jobs.map(job => {
    const matchedSkills = resume.skills.filter(skill =>
      job.description.toLowerCase().includes(skill.toLowerCase())
    );
    const matchPercent = Math.round((matchedSkills.length / resume.skills.length) * 100);
    return { ...job, match: matchPercent };
  });
}
