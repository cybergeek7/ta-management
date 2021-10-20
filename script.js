const newBtn = document.getElementById('new')
const editBtn = document.getElementById('edit')
const deleteBtn = document.getElementById('delete')
const saveBtn = document.getElementById('save')
const cancelBtn = document.getElementById('cancel')
const firstBtn = document.getElementById('first')
const prevBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const lastBtn = document.getElementById('last')
const selectBtn = document.getElementById('select')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const studentId = document.getElementById('studentId')
const studentMajor = document.getElementById('major')
const studentSelected = document.getElementById('selected')
const logs = document.getElementById('logs')

const students = [
  {
    firstName: 'John',
    id: '3445',
    lastName: 'Doe',
    major: 'Programming',
    selected: false,
  },
  {
    firstName: 'Jane',
    id: '47635',
    lastName: 'Doe',
    major: 'Testing',
    selected: false,
  },
  {
    firstName: 'Sara',
    id: '9873',
    lastName: 'William',
    major: 'Database',
    selected: false,
  },
]

let currentStudentIndex = 0
let currentStudent = students[currentStudentIndex]
let edit = false

// Clear all input fields
function clearInputs() {
  fname.value = ''
  lname.value = ''
  studentId.value = ''
  studentSelected.checked = false
}

// Disable navigation buttons
function disableNavBtns(param) {
  firstBtn.disabled = param
  prevBtn.disabled = param
  nextBtn.disabled = param
  lastBtn.disabled = param
  selectBtn.disabled = param
}

// Disable new, edit and delete buttons
function disableNewEditDeleteBtns(param) {
  newBtn.disabled = param
  editBtn.disabled = param
  deleteBtn.disabled = param
}

// Disable save and cancel buttons
function disableSaveCancelBtns(param) {
  saveBtn.disabled = param
  cancelBtn.disabled = param
}

// Update logs in the text area
function updateLogs(student, action) {
  let text = `\n${action}: ${student.firstName} ${student.lastName}, ${student.id}, ${student.major}`
  logs.value += text
}

// Costruct a new student object
function constructStudent() {
  let student = {}
  student.firstName = fname.value
  student.lastName = lname.value
  student.id = studentId.value
  student.major = studentMajor.value
  student.selected = studentSelected.checked
  currentStudentIndex = students.length - 1
  students.push(student)
  updateLogs(student, 'Added')
}

// Retrieve the current student
function retrieveStudent(student) {
  fname.value = student.firstName
  lname.value = student.lastName
  studentId.value = student.id
  studentMajor.value = student.major
  studentSelected.checked = student.selected
}

// Edit the current student
function editStudent(student) {
  student.firstName = fname.value
  student.lastName = lname.value
  student.id = studentId.value
  student.major = studentMajor.value
  student.selected = studentSelected.checked
}

// Clear inputs and logs on page reload
clearInputs()
logs.value = ''

// Event Listeners for the buttons
newBtn.addEventListener('click', (e) => {
  e.preventDefault()
  clearInputs()
  disableNewEditDeleteBtns(true)
  disableNavBtns(true)
  disableSaveCancelBtns(false)
  studentSelected.checked = false
})

editBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (!students.length) {
    return alert('There is no students to edit.')
  }
  edit = true
  disableNavBtns(true)
  disableNewEditDeleteBtns(true)
  disableSaveCancelBtns(false)
  retrieveStudent(students[currentStudentIndex])
})

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (!students.length) {
    return alert('There is no students to delete.')
  }
  let index = students.findIndex((student) => {
    return student.id === currentStudent.id
  })
  students.splice(index, 1)
  currentStudentIndex -= 1
  currentStudent = students[currentStudentIndex]
  updateLogs(currentStudent, 'Removed')
})

saveBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (!fname.value || !lname.value || !studentId.value) {
    return alert('Please fill out the fields above.')
  }
  disableNavBtns(false)
  disableSaveCancelBtns(true)
  disableNewEditDeleteBtns(false)
  if (edit) {
    editStudent(currentStudent)
    updateLogs(currentStudent, 'Edited')
    edit = false
  } else {
    constructStudent()
  }
  clearInputs()
})

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
  disableNewEditDeleteBtns(false)
  disableNavBtns(false)
  clearInputs()
})

firstBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length) {
    currentStudentIndex = 0
    currentStudent = students[currentStudentIndex]
    updateLogs(currentStudent, 'First')
  }
})

prevBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (currentStudentIndex >= 1) {
    currentStudentIndex -= 1
    currentStudent = students[currentStudentIndex]
    updateLogs(currentStudent, 'Previous')
  }
})

nextBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length >= 2 && currentStudentIndex < students.length - 1) {
    currentStudentIndex += 1
    currentStudent = students[currentStudentIndex]
    updateLogs(currentStudent, 'Next')
  }
})

lastBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length) {
    currentStudentIndex = students.length - 1
    currentStudent = students[currentStudentIndex]
    updateLogs(currentStudent, 'Last')
  }
})

selectBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length) {
    let Selectedstudent = students[Math.floor(Math.random() * students.length)]
    let studentIndex = students.findIndex(
      (student) => student.id === Selectedstudent.id
    )
    students[studentIndex].selected = true
    updateLogs(Selectedstudent, 'Selected')
  }
})
