const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const colorDiv = `
    <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  `

const info = document.createElement('ul')
details.appendChild(info)
const name = document.createElement('li')
name.innerHTML = `name ${personName}`
info.appendChild(name)
const hair = document.createElement('li')
hair.innerHTML = `hair ${colorDiv}`
info.appendChild
const age = document.createElement('li')
age.innerHTML = `age ${age}`
info.appendChild
const birth = document.createElement('li')
birth.innerHTML = `birth ${birthplace}`
birth.appendChild

//   details.innerHTML = `
//     <ul>
//       <li>Name: ${personName}</li>
//       <li>Hair Color: ${colorDiv}</li>
//       <li>Age: ${age}</li>
//       <li>Birthplace: ${birthplace}</li>
//     </ul>
//   `
// }

personForm.addEventListener('submit', handleSubmit)
}
