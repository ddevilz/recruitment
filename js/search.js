const candidatesData = [
  { name: "John Doe", location: "New York", jobRole: "Engineer" },
  { name: "Jane Smith", location: "San Francisco", jobRole: "Designer" },
  { name: "Mark Johnson", location: "Chicago", jobRole: "Manager" },
  { name: "Sarah Thompson", location: "Los Angeles", jobRole: "Engineer" },
];

const searchForm = document.getElementById('searchForm');
const candidatesList = document.getElementById('candidatesList');

displayCandidates(candidatesData);

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const locationInput = document.getElementById('location');
  const jobRoleInput = document.getElementById('jobRole');

  const location = locationInput.value.trim().toLowerCase();
  const jobRole = jobRoleInput.value.trim().toLowerCase();

  const filteredCandidates = candidatesData.filter(candidate =>
    (location === '' || candidate.location.toLowerCase().includes(location)) &&
    (jobRole === '' || candidate.jobRole.toLowerCase() === jobRole)
  );

  displayCandidates(filteredCandidates);
});

function displayCandidates(candidates) {
  candidatesList.innerHTML = '';

  if (candidates.length === 0) {
    candidatesList.innerHTML = '<p>No candidates found.</p>';
  } else {
    candidates.forEach(candidate => {
      const candidateElement = document.createElement('div');
      candidateElement.classList.add('candidate');

      const infoElement = document.createElement('div');
      infoElement.classList.add('info');

      const nameElement = document.createElement('h3');
      nameElement.textContent = candidate.name;

      const locationElement = document.createElement('p');
      locationElement.textContent = 'Location: ' + candidate.location;

      const jobRoleElement = document.createElement('p');
      jobRoleElement.textContent = 'Job Role: ' + candidate.jobRole;

      infoElement.appendChild(nameElement);
      infoElement.appendChild(locationElement);
      infoElement.appendChild(jobRoleElement);

      const actionsElement = document.createElement('div');
      actionsElement.classList.add('actions');

      const gradeSelect = document.createElement('select');
      gradeSelect.innerHTML = `
        <option value="">Grade</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      `;

      const evaluateButton = document.createElement('button');
      evaluateButton.textContent = 'Evaluate';
      evaluateButton.addEventListener('click', function () {
        const grade = gradeSelect.value;
        if (grade !== '') {
          evaluateCandidate(candidate, grade);
        } else {
          alert('Please select a grade for evaluation.');
        }
      });

      actionsElement.appendChild(gradeSelect);
      actionsElement.appendChild(evaluateButton);

      candidateElement.appendChild(infoElement);
      candidateElement.appendChild(actionsElement);

      candidatesList.appendChild(candidateElement);
    });
  }
}

function evaluateCandidate(candidate, grade) {
  console.log('Evaluating candidate:', candidate.name);
  console.log('Grade:', grade);
}
