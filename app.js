// Grade points mapping
const gradePoints = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'F': 0.0
};

// Curriculum data
const curricula = {
  'computer-systems': {
    'Year 1': {
      'Semester 1': [
        { code: 'LNG1301', name: 'Japanese Language I', credits: 3 },
        { code: 'ICT1213', name: 'Communication Skills', credits: 2 },
        { code: 'ICT1205', name: 'Computer Fundamentals', credits: 2 },
        { code: 'ICT1304', name: 'Graphic Design', credits: 3 },
        { code: 'ICT1405', name: 'Programming Methodologies', credits: 4 },
        { code: 'ICT1206', name: 'Database Systems I', credits: 2 },
        { code: 'ICT1207', name: 'Systems Analysis and Design', credits: 2 }
      ],
      'Semester 2': [
        { code: 'LNG1302', name: 'Japanese Language II', credits: 3 },
        { code: 'ICT1217', name: 'Mathematics I for Comp', credits: 2 },
        { code: 'ICT1303', name: 'Database Systems II', credits: 3 },
        { code: 'ICT1411', name: 'Object Oriented Programming', credits: 4 },
        { code: 'ICT1401', name: 'Web Designing', credits: 4 },
        { code: 'ICT1211', name: 'Software Testing', credits: 2 },
        { code: 'ICT1214', name: 'Computer Networks and Security', credits: 2 },
        { code: 'ICT1216', name: 'Technical Writing', credits: 2 }
      ]
    },
    'Year 2': {
      'Semester 3': [
        { code: 'LNG2301', name: 'Japanese Language III', credits: 3 },
        { code: 'ICT2216', name: 'Mathematics II for Comp', credits: 2 },
        { code: 'ICT2203', name: 'Computer Architecture', credits: 2 },
        { code: 'ICT2405', name: 'Software Engineering', credits: 4 },
        { code: 'ICT2308', name: 'Project Management', credits: 3 },
        { code: 'ICT2306', name: 'Data Structures and Algorithms', credits: 3 },
        { code: 'ICT2310', name: 'Business Management I', credits: 3 }
      ],
      'Semester 4': [
        { code: 'LNG2302', name: 'Japanese Language IV', credits: 3 },
        { code: 'ICT2219', name: 'Mathematics III for Comp', credits: 2 },
        { code: 'ICT2410', name: 'Software Development Group Project', credits: 4 },
        { code: 'ICT2202', name: 'Operating Systems', credits: 2 },
        { code: 'ICT2218', name: 'Software Quality Assurance', credits: 2 },
        { code: 'ICT2411', name: 'Web Programming', credits: 4 },
        { code: 'ICT2311', name: 'Business Management II', credits: 3 },
        { code: 'ICT2312', name: 'Embedded Systems', credits: 3 }
      ]
    },
    'Year 3': {
      'Semester 5': [
        { code: 'LNG3301', name: 'Japanese Language V', credits: 3 },
        { code: 'ICT3501', name: 'Industrial Training (Year Long)', credits: 5 },
        { code: 'ICT3216', name: 'Mathematics IV for Comp', credits: 2 },
        { code: 'ICT3310', name: 'Research Methodology', credits: 3 }
      ],
      'Semester 6': [
        { code: 'ICT3501', name: 'Industrial Training (Year Long)', credits: 5 },
        { code: 'LNG3302', name: 'Japanese Language VI', credits: 3 },
        { code: 'ICT3320', name: 'Introduction to Robotics', credits: 3 },
        { code: 'ICT3321', name: 'Game Development and Programming', credits: 3 }
      ]
    },
    'Year 4': {
      'Semester 7': [
        { code: 'ICT4402', name: 'Human Computer Interaction & Design', credits: 4 },
        { code: 'ICT4403', name: 'Information & Content Management', credits: 4 },
        { code: 'ICT4401', name: 'Japanese Industrial Based Project (Year Long)', credits: 4 },
        { code: 'ICT4404', name: 'Core Project (Year Long)', credits: 4 },
        { code: 'LNG4401', name: 'Japanese way of doing business I', credits: 4 }
      ],
      'Semester 8': [
        { code: 'ICT4405', name: 'Requirements Management', credits: 4 },
        { code: 'ICT4407', name: 'Enterprise Web Software Development', credits: 4 },
        { code: 'ICT4401', name: 'Japanese Industrial Based Project (Year Long)', credits: 4 },
        { code: 'ICT4404', name: 'Core Project (Year Long)', credits: 4 },
        { code: 'LNG4402', name: 'Japanese way of doing business II', credits: 4 }
      ]
    }
  },
  'software-engineering': {
    'Year 1': {
      'Semester 1': [
        { code: 'PRF110120', name: 'Japanese Language Level I', credits: 2 },
        { code: 'CMP110121', name: 'Computer Fundamentals', credits: 3 },
        { code: 'PRF110220', name: 'Technical Writing', credits: 2 },
        { code: 'CMP110240', name: 'Programming Fundamentals', credits: 4 },
        { code: 'DES110230', name: 'Technologies for Web development', credits: 3 },
        { code: 'FND110120', name: 'Mathematics I for SE', credits: 2 },
        { code: 'DES110110', name: 'Fundamentals of Multimedia', credits: 1 }
      ],
      'Semester 2': [
        { code: 'PRF120120', name: 'Japanese Language Level II', credits: 2 },
        { code: 'MAA120130', name: 'Database Systems', credits: 3 },
        { code: 'CMP120130', name: 'Object Oriented Modeling and Development', credits: 3 },
        { code: 'CMP120230', name: 'Web Programming', credits: 3 },
        { code: 'REQ120130', name: 'Requirements Engineering', credits: 3 },
        { code: 'FND120120', name: 'Mathematics II for SE', credits: 2 }
      ]
    },
    'Year 2': {
      'Semester 1': [
        { code: 'PRF210120', name: 'Japanese Language Level III', credits: 2 },
        { code: 'CMP210130', name: 'Data Structures and Algorithms', credits: 3 },
        { code: 'SEC210130', name: 'Internetworking', credits: 3 },
        { code: 'PRO210130', name: 'Software Architecture and Design', credits: 3 },
        { code: 'CMP210230', name: 'Visual Application Programming', credits: 3 },
        { code: 'FND210130', name: 'Mathematics III for SE', credits: 2 }
      ],
      'Semester 2': [
        { code: 'PRF220120', name: 'Japanese Language Level IV', credits: 2 },
        { code: 'PRO220130', name: 'System Analysis and Development – Group Project', credits: 3 },
        { code: 'MAA220130', name: 'Advanced Database Systems', credits: 3 },
        { code: 'PRO220230', name: 'Project Management', credits: 3 },
        { code: 'DES220130', name: 'Computer Architecture', credits: 3 },
        { code: 'FND220120', name: 'Statistics I for SE', credits: 2 }
      ]
    },
    'Year 3': {
      'Semester 1': [
        { code: 'PRF310120', name: 'Japanese Language Level V', credits: 2 },
        { code: 'PRO310130', name: 'Industrial Based Software Development Group Project', credits: 3 },
        { code: 'PRO310230', name: 'Software Process Improvements', credits: 3 },
        { code: 'CMP310130', name: 'Operating Systems', credits: 3 },
        { code: 'VAV310130', name: 'Software Testing and Quality Assurance', credits: 3 },
        { code: 'PRF310220', name: 'Professional Practice and Work Based Learning', credits: 2 }
      ],
      'Semester 2': [
        { code: 'PRO320130', name: 'Software Evolution', credits: 3 },
        { code: 'PRF320190', name: 'Industrial Training', credits: 9 },
        { code: 'PRF320220', name: 'Japanese Way of Doing Business', credits: 2 },
        { code: 'PRF320330', name: 'Business Management and Regulatory Studies', credits: 3 }
      ]
    },
    'Year 4': {
      'Semester 1': [
        { code: 'PRF410120', name: 'Japanese Language Level VI', credits: 2 },
        { code: 'PRO430130', name: 'Final Year Software Engineering Research Project – Part I', credits: 4 },
        { code: 'PRF410130', name: 'Research Methodology', credits: 3 },
        { code: 'PRO410230', name: 'Software Measurement Metrics', credits: 3 }
      ],
      'Semester 2': [
        { code: 'PRF420120', name: 'Japanese Language - Level VII', credits: 2 },
        { code: 'PRO430150', name: 'Final Year Software Engineering Research Project – Part II', credits: 4 },
        { code: 'DES420130', name: 'Human Computer Interaction and UX Engineering', credits: 3 },
        { code: 'QUA420130', name: 'Software Safety and Reliability', credits: 3 }
      ]
    }
  }
};

// Populate Years based on Degree
function updateYears() {
  const degreeSelect = document.getElementById('degree');
  const yearSelect = document.getElementById('year');
  const semesterSelect = document.getElementById('semester');

  // reset
  yearSelect.innerHTML = '<option value="">Choose year...</option>';
  semesterSelect.innerHTML = '<option value="">Choose semester...</option>';
  semesterSelect.disabled = true;

  document.getElementById('subjects-container').innerHTML =
    '<div class="no-subjects">Please select your degree, year, and semester to view subjects.</div>';

  if (degreeSelect.value) {
    yearSelect.disabled = false;
    const years = Object.keys(curricula[degreeSelect.value]);
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });
  } else {
    yearSelect.disabled = true;
  }

  updateStats();
}

// Populate Semesters based on Year
function updateSemesters() {
  const degreeSelect = document.getElementById('degree');
  const yearSelect = document.getElementById('year');
  const semesterSelect = document.getElementById('semester');

  semesterSelect.innerHTML = '<option value="">Choose semester...</option>';

  document.getElementById('subjects-container').innerHTML =
    '<div class="no-subjects">Please select your degree, year, and semester to view subjects.</div>';

  if (degreeSelect.value && yearSelect.value) {
    semesterSelect.disabled = false;
    const semesters = Object.keys(curricula[degreeSelect.value][yearSelect.value]);
    semesters.forEach(semester => {
      const option = document.createElement('option');
      option.value = semester;
      option.textContent = semester;
      semesterSelect.appendChild(option);
    });
  } else {
    semesterSelect.disabled = true;
  }

  updateStats();
}

// Load Subjects for selected Semester
function loadSubjects() {
  const degreeSelect = document.getElementById('degree');
  const yearSelect = document.getElementById('year');
  const semesterSelect = document.getElementById('semester');
  const subjectsContainer = document.getElementById('subjects-container');

  if (degreeSelect.value && yearSelect.value && semesterSelect.value) {
    const subjects = curricula[degreeSelect.value][yearSelect.value][semesterSelect.value];

    subjectsContainer.innerHTML = '';

    subjects.forEach((subject) => {
      const subjectDiv = document.createElement('div');
      subjectDiv.className = 'subject-item';
      subjectDiv.innerHTML = `
        <div class="subject-code">${subject.code}</div>
        <div class="subject-name">${subject.name}</div>
        <div class="subject-credits">${subject.credits} Credits</div>
        <select class="grade-select" onchange="calculateGPA()">
          <option value="">Grade</option>
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      `;
      subjectsContainer.appendChild(subjectDiv);
    });

    calculateGPA();
  } else {
    subjectsContainer.innerHTML =
      '<div class="no-subjects">Please select your degree, year, and semester to view subjects.</div>';
    updateStats();
  }
}

// Calculate GPA + Update UI
function calculateGPA() {
  const degreeSelect = document.getElementById('degree');
  const yearSelect = document.getElementById('year');
  const semesterSelect = document.getElementById('semester');

  if (!degreeSelect.value || !yearSelect.value || !semesterSelect.value) {
    updateStats();
    return;
  }

  const subjects = curricula[degreeSelect.value][yearSelect.value][semesterSelect.value];
  const gradeSelects = document.querySelectorAll('.grade-select');

  let totalPoints = 0;
  let totalCredits = 0;
  let completedSubjects = 0;

  subjects.forEach((subject, index) => {
    const gradeSelect = gradeSelects[index];
    if (gradeSelect && gradeSelect.value) {
      const grade = gradeSelect.value;
      const credits = subject.credits;
      const points = gradePoints[grade];

      totalPoints += points * credits;
      totalCredits += credits;
      completedSubjects++;
    }
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';

  document.getElementById('gpa-value').textContent = gpa;
  document.getElementById('total-credits').textContent = totalCredits;
  document.getElementById('total-subjects').textContent = completedSubjects;

  const passFailIndicator = document.getElementById('pass-fail-indicator');
  const statusText = document.getElementById('status-text');

  if (completedSubjects === 0) {
    passFailIndicator.className = 'pass-fail-indicator neutral';
    statusText.textContent = '';
    passFailIndicator.style.display = 'none';
  } else {
    const gpaValue = parseFloat(gpa);
    passFailIndicator.style.display = 'inline-block';
    if (gpaValue >= 2.00) {
      passFailIndicator.className = 'pass-fail-indicator pass';
      statusText.textContent = 'PASS';
    } else {
      passFailIndicator.className = 'pass-fail-indicator fail';
      statusText.textContent = 'FAIL';
    }
  }
}

// Reset summary when nothing selected
function updateStats() {
  document.getElementById('gpa-value').textContent = '0.00';
  document.getElementById('total-credits').textContent = '0';
  document.getElementById('total-subjects').textContent = '0';
  const passFailIndicator = document.getElementById('pass-fail-indicator');
  passFailIndicator.style.display = 'none';
}
