// const heading = document.querySelector("#main-heading")
// console.log(heading)

// const allTags = document.getElementsByTagName("h1")
// console.log(allTags)

// const parent = document.querySelector(".parent")
// console.dir(parent)
// const child = parent.childNodes
// console.log(child)

// const anotherParent = document.querySelector(".another-parent")
// const children = anotherParent.childNodes
// console.log(children)

// const child = document.querySelector("#welcome")
// console.dir(child)
// const parent = child.parentNode
// console.log(parent)

// const contact = document.querySelector("#contact")
// console.dir(contact)
// const previousSibling = contact.previousElementSibling
// console.log(previousSibling)

// const home = document.querySelector("#home")
// console.dir(contact)
// const nextSibling = home.nextElementSibling
// console.log(nextSibling)

// const welcome = document.querySelector("#welcome")
// welcome.innerHTML = "Hello world"
// welcome.style.color = "red"
// welcome.style.fontSize = "100px"

// const parent = document.querySelector(".parent")
// console.dir(parent.classList)
// parent.classList.add("title")
// parent.classList.remove("parent")

// const greeting = document.createElement("h2")
// greeting.innerHTML = "Hello there!"
// const parent = document.querySelector(".parent")
// parent.appendChild(greeting)

// const about = document.createElement("h1")
// about.innerHTML = "about"
// about.classList.add("about")
// const contact = document.querySelector("#contact")
// contact.insertAdjacentElement("beforebegin", about)
// const aboutClass = document.querySelector(".about")
// aboutClass.style.color = "navy"

const form = document.querySelector("form")
const usernameInput = document.querySelector("#username")
const pswd = document.querySelector("#password")
const submitBtn = document.querySelector("#btn")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    const username = usernameInput.value
    const password = pswd.value

    if(username === "Raju" && password === "Lama") {
        alert("Login successfull!")
    } else {
        alert("Invalid credentials!")
    }
} )


