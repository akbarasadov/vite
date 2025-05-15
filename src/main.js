import User from './components/User'
import reload from './utils/reload'

import './style.css'

const tbody = document.querySelector("tbody")
const form = document.forms.namedItem("add")
const BASEURL = "http://localhost:8080"


form.onsubmit = async (e) => {
  e.preventDefault()

  const user = {
    id: crypto.randomUUID(),
    fullName: new FormData(e.target).get("fullname"),
    createdAt: new Date().toDateString()
  }

  try {
    if (user.fullName.trim() === "") {
      alert("Введите имя!")
      return

    }

    const res = await fetch(BASEURL + "/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json"
      }
    })

    if (res.status !== 201 ) {
      alert(res.statusText)
      return
    }

    const resAgain = await fetch(BASEURL + "/users")
    const users = await resAgain.json()

    reload(users, User, tbody)

    e.target.reset()
  } catch (error) {
    alert(error.message)
  }


}

const res = await fetch(BASEURL + "/users")
const users = await res.json()



reload(users, User, tbody)