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
const selected = document.getElementById('selected')
const logs = document.getElementById('logs')

const students = []

function clearInputs() {
  fname.value = ''
  lname.value = ''
  studentId.value = ''
}

function disableNavBtns(param) {
  firstBtn.disabled = param
  prevBtn.disabled = param
  nextBtn.disabled = param
  lastBtn.disabled = param
  selectBtn.disabled = param
}

function disableNewEditDeleteBtns(param) {
  newBtn.disabled = param
  editBtn.disabled = param
  deleteBtn.disabled = param
}

function disableSaveCancelBtns(param) {
  saveBtn.disabled = param
  cancelBtn.disabled = param
}

function updateLogs(student, action) {
  let pNode = document.createElement('p')
  let text = `${action}: ${student.firstName} ${student.lastName}, ${student.id}, ${student.major}`
  let textNode = document.createTextNode(text)
  pNode.appendChild(textNode)
  logs.appendChild(pNode)
}

function constructStudent() {
  let student = {}
  student.firstName = fname.value
  student.lastName = lname.value
  student.id = studentId.value
  student.major = studentMajor.value
  students.push(student)
  updateLogs(student, 'Added')
  clearInputs()
}

function editStudent(student) {
  fname.value = student.firstName
  lname.value = student.lastName
  studentId.value = student.id
  studentMajor.value = student.major

  students.forEach((studentIteration) => {
    if (studentIteration.id === student.id) {
      studentIteration.firsName = fname.value
      studentIteration.lastName = lname.value
      studentIteration.id = studentId.value
      studentIteration.major = studentMajor.value
    }
  })
}

newBtn.addEventListener('click', (e) => {
  e.preventDefault()
  clearInputs()
  disableNewEditDeleteBtns(true)
  disableNavBtns(true)
  disableSaveCancelBtns(false)
})

editBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (!students.length) {
    return alert('There is no students to edit.')
  }
  disableNavBtns(true)
  disableNewEditDeleteBtns(true)
  disableSaveCancelBtns(false)
  let student = students.pop()
  editStudent(student)
})

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let currentStudent = students.pop()
  let index = students.findIndex((student) => {
    return student.id === currentStudent.id
  })
  updateLogs(currentStudent, 'Removed')
  students.splice(index, 1)
})

saveBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (!fname.value || !lname.value || !studentId.value) {
    return alert('Please fill out the fields above.')
  }
  disableNewEditDeleteBtns(false)
  disableNavBtns(false)
  disableSaveCancelBtns(true)
  if (editBtn.disabled) {
    let student = students.pop()
    editStudent(student)
    updateLogs(student, 'Edited')
  } else {
    constructStudent()
  }
})

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
  disableNewEditDeleteBtns(false)
  disableNavBtns(false)
})

firstBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length >= 1) {
    let student = students[0]
    updateLogs(student, 'First')
  }
})

prevBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length >= 2) {
    let student = students[1]
    updateLogs(student, 'Previous')
  }
})

nextBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length >= 3) {
    let student = students[2]
    updateLogs(student, 'Next')
  }
})

lastBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length >= students.length) {
    let student = students[students.length - 1]
    updateLogs(student, 'Last')
  }
})

selectBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (students.length) {
    let student = students[Math.floor(Math.random() * students.length)]
    updateLogs(student, 'Selected')
    selected.checked = true
  }
})
