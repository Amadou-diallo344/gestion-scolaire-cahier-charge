const STORAGE_KEY = 'school-management-v1';

const defaultState = {
  classes: [
    { id: crypto.randomUUID(), name: '6ème A', level: '6ème' },
    { id: crypto.randomUUID(), name: '5ème B', level: '5ème' },
  ],
  students: [
    { id: crypto.randomUUID(), firstName: 'Amina', lastName: 'Diallo', birthDate: '2012-05-10', classId: null },
    { id: crypto.randomUUID(), firstName: 'Ibrahima', lastName: 'Sow', birthDate: '2011-08-15', classId: null },
  ],
  notes: [
    { id: crypto.randomUUID(), studentId: null, subject: 'Mathématiques', type: 'Devoir', value: 15.5 },
    { id: crypto.randomUUID(), studentId: null, subject: 'Français', type: 'Contrôle', value: 13 },
  ],
};

const state = loadState();

const classForm = document.getElementById('classForm');
const studentForm = document.getElementById('studentForm');
const noteForm = document.getElementById('noteForm');

const classNameInput = document.getElementById('className');
const classLevelInput = document.getElementById('classLevel');
const studentFirstNameInput = document.getElementById('studentFirstName');
const studentLastNameInput = document.getElementById('studentLastName');
const studentBirthDateInput = document.getElementById('studentBirthDate');
const studentClassSelect = document.getElementById('studentClass');
const noteStudentSelect = document.getElementById('noteStudent');
const noteSubjectInput = document.getElementById('noteSubject');
const noteTypeSelect = document.getElementById('noteType');
const noteValueInput = document.getElementById('noteValue');

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    const seeded = JSON.parse(JSON.stringify(defaultState));
    seeded.classes[0].id = crypto.randomUUID();
    seeded.classes[1].id = crypto.randomUUID();
    seeded.students[0].id = crypto.randomUUID();
    seeded.students[1].id = crypto.randomUUID();
    seeded.students[0].classId = seeded.classes[0].id;
    seeded.students[1].classId = seeded.classes[1].id;
    seeded.notes[0].studentId = seeded.students[0].id;
    seeded.notes[1].studentId = seeded.students[1].id;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }

  return JSON.parse(saved);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getClassById(classId) {
  return state.classes.find((item) => item.id === classId);
}

function getStudentById(studentId) {
  return state.students.find((item) => item.id === studentId);
}

function getStudentAverage(studentId) {
  const studentNotes = state.notes.filter((note) => note.studentId === studentId);
  if (!studentNotes.length) return 0;

  const total = studentNotes.reduce((sum, note) => sum + Number(note.value), 0);
  return total / studentNotes.length;
}

function getClassCount(classId) {
  return state.students.filter((student) => student.classId === classId).length;
}

function renderClassOptions() {
  const options = state.classes
    .map((classItem) => `<option value="${classItem.id}">${classItem.name}</option>`)
    .join('');

  studentClassSelect.innerHTML = options || '<option value="">Aucune classe disponible</option>';
  noteStudentSelect.innerHTML = state.students
    .map((student) => `<option value="${student.id}">${student.firstName} ${student.lastName}</option>`)
    .join('') || '<option value="">Aucun élève</option>';
}

function renderStats() {
  const totalClasses = state.classes.length;
  const totalStudents = state.students.length;
  const allNotes = state.notes.map((note) => Number(note.value));
  const average = allNotes.length ? allNotes.reduce((a, b) => a + b, 0) / allNotes.length : 0;

  document.getElementById('totalClasses').textContent = totalClasses;
  document.getElementById('totalStudents').textContent = totalStudents;
  document.getElementById('averageScore').textContent = average.toFixed(2);
}

function renderClassList() {
  const classList = document.getElementById('classList');

  if (!state.classes.length) {
    classList.innerHTML = '<p class="empty-state">Aucune classe enregistrée.</p>';
    return;
  }

  classList.innerHTML = state.classes
    .map((classItem) => {
      const count = getClassCount(classItem.id);
      return `
        <div class="item-box">
          <h3>${classItem.name}</h3>
          <p>Niveau : ${classItem.level}</p>
          <p>Effectif : ${count} élève(s)</p>
        </div>
      `;
    })
    .join('');
}

function renderStudentList() {
  const studentList = document.getElementById('studentList');

  if (!state.students.length) {
    studentList.innerHTML = '<p class="empty-state">Aucun élève inscrit.</p>';
    return;
  }

  studentList.innerHTML = state.students
    .map((student) => {
      const classItem = getClassById(student.classId);
      const average = getStudentAverage(student.id);
      return `
        <div class="item-box">
          <h3>${student.firstName} ${student.lastName}</h3>
          <p>Classe : ${classItem ? classItem.name : 'Non affecté'}</p>
          <p>Moyenne : ${average.toFixed(2)}</p>
        </div>
      `;
    })
    .join('');
}

function renderNotesTable() {
  const container = document.getElementById('notesTableContainer');

  if (!state.students.length) {
    container.innerHTML = '<p class="empty-state">Aucune donnée de note pour le moment.</p>';
    return;
  }

  const rows = state.students
    .map((student) => {
      const studentNotes = state.notes.filter((note) => note.studentId === student.id);
      const average = getStudentAverage(student.id);
      const noteDetails = studentNotes.length
        ? studentNotes.map((note) => `${note.subject} (${note.type}) : ${note.value}`).join('<br>')
        : 'Aucune note';

      return `
        <tr>
          <td>${student.firstName} ${student.lastName}</td>
          <td>${studentNotes.length}</td>
          <td>${noteDetails}</td>
          <td>${average.toFixed(2)}</td>
        </tr>
      `;
    })
    .join('');

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Élève</th>
          <th>Nombre de notes</th>
          <th>Détails</th>
          <th>Moyenne</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

function render() {
  renderClassOptions();
  renderStats();
  renderClassList();
  renderStudentList();
  renderNotesTable();
}

classForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = classNameInput.value.trim();
  const level = classLevelInput.value.trim();

  if (!name || !level) return;

  state.classes.push({
    id: crypto.randomUUID(),
    name,
    level,
  });

  saveState();
  classForm.reset();
  render();
});

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = studentFirstNameInput.value.trim();
  const lastName = studentLastNameInput.value.trim();
  const birthDate = studentBirthDateInput.value;
  const classId = studentClassSelect.value;

  if (!firstName || !lastName || !birthDate || !classId) return;

  state.students.push({
    id: crypto.randomUUID(),
    firstName,
    lastName,
    birthDate,
    classId,
  });

  saveState();
  studentForm.reset();
  render();
});

noteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const studentId = noteStudentSelect.value;
  const subject = noteSubjectInput.value.trim();
  const type = noteTypeSelect.value;
  const value = Number(noteValueInput.value);

  if (!studentId || !subject || !value || value < 0 || value > 20) return;

  state.notes.push({
    id: crypto.randomUUID(),
    studentId,
    subject,
    type,
    value,
  });

  saveState();
  noteForm.reset();
  render();
});

render();

if (state.classes.length && !studentClassSelect.value) {
  studentClassSelect.value = state.classes[0].id;
}

if (state.students.length && !noteStudentSelect.value) {
  noteStudentSelect.value = state.students[0].id;
}