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
const major = document.getElementById('major')
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

newBtn.addEventListener('click', (e) => {
  e.preventDefault()
  clearInputs()
  disableNewEditDeleteBtns(true)
  disableNavBtns(true)
  disableSaveCancelBtns(false)
})

editBtn.addEventListener('click', (e) => {
  e.preventDefault()
  disableNavBtns(true)
  disableNewEditDeleteBtns(true)
  disableSaveCancelBtns(false)
  if (logs.value) {
    console.log(logs.value)
  }
})

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault()
})

saveBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (!fname.value || !lname.value || !studentId.value) {
    return alert('Please fill out the fields above.')
  }
  disableNewEditDeleteBtns(false)
  disableNavBtns(false)
  disableSaveCancelBtns(true)
  let student = {}
  student.firstName = fname.value
  student.lastName = lname.value
  student.id = studentId.value
  student.major = major.value
  let option = document.createElement('option')
  if (students.length) {
    let text = `\nAdded: ${student.firstName} ${student.lastName}, ${student.id}, ${student.major}`
    let textNode = document.createTextNode(text)
    option.appendChild(textNode)
    option.value = student.id
    logs.appendChild(option)
  } else {
    let text = `Added: ${student.firstName} ${student.lastName}, ${student.id}, ${student.major}`
    let textNode = document.createTextNode(text)
    option.appendChild(textNode)
    option.value = student.id
    logs.appendChild(option)
  }
  students.push(student)
})

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
  disableNewEditDeleteBtns(false)
  disableNavBtns(false)
})
