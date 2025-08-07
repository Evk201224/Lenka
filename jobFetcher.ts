
export async function fetchJobs(skills) {
  // simulate fetching jobs from LinkedIn, Indeed, Remotive.io
  return [
    { title: 'Remote Customs Specialist', company: 'CustomCo', description: 'CBSA, ACI, B3 Entry', link: '', source: 'Indeed' },
    { title: 'Administrative Coordinator', company: 'AdminHub', description: 'remote, scheduling, coordination', link: '', source: 'Remotive.io' }
  ];
}
