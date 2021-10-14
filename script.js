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
})

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault()
})

saveBtn.addEventListener('click', (e) => {
  e.preventDefault()
  disableNewEditDeleteBtns(false)
  disableNavBtns(false)
  disableSaveCancelBtns(true)
})

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
  disableNewEditDeleteBtns(false)
  disableNavBtns(false)
})

const taCandidates = []
