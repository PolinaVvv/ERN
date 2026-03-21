// подключение элементов
fetch('/menu.html')
.then(res => res.text())
.then(data => {
document.getElementById("menu").innerHTML = data
})

// fetch('/ERN/logo.html')
fetch('/logo.html')
.then(res => res.text())
.then(data => {
document.getElementById("logo").innerHTML = data
})

fetch("/footer.html")
.then(res => res.text())
.then(data => {
const footer = document.getElementById("footer-container")
if(footer){
footer.innerHTML = data
}
})


// подтягивание данных с таблицы
const SHEET_URL = "https://opensheet.elk.sh/1wLIEhYto-M752oIoyt2ODI9YmosHIm7uy1sny6az-Tk/Subjects"

fetch(SHEET_URL)
.then(res => res.json())
.then(data => {

const subject = document.body.dataset.subject

const rows = data.filter(row => row.subject === subject)

if(rows.length === 0) return

// заголовок страницы
document.getElementById("subject-title").innerText =
rows[0].subject_title

// контент
const container = document.getElementById("content")

rows.forEach(row => {

container.innerHTML += `

<h2>${row.title}</h2>

<p>
${row.text}
</p>

`
})
})

// подтягивание данных с таблицы (олимпиады)
const SHEET_URL_2 = "https://opensheet.elk.sh/1wLIEhYto-M752oIoyt2ODI9YmosHIm7uy1sny6az-Tk/Olimp"
fetch(SHEET_URL_2)
.then(res => res.json())
.then(data => {

const subject = document.body.dataset.subject

const rows = data.filter(row => row.subject === subject)

if(rows.length === 0) return

// заголовок страницы
document.getElementById("subject-title-olimp").innerText =
rows[0].subject_title

// контент
const container = document.getElementById("content_olimp")

rows.forEach(row => {

container.innerHTML += `

<h2>${row.title}</h2>

<p>
${row.text}
</p>

`
})
})



// форма для записи вопросов 

setTimeout(() => {

const form = document.querySelector(".footer-form")

if(form){

form.addEventListener("submit", () => {

const inputs = form.querySelectorAll("input, textarea")

// показать сообщение
setTimeout(() => {
const msg = document.getElementById("success-msg")
if(msg){
    msg.style.display = "block"
msg.style.opacity = "1"
}
}, 200)

// плавное очищение
setTimeout(() => {inputs.forEach(el => {el.value = ""})}, 1000)

// фокус на первое поле
setTimeout(() => {
form.querySelector("input")?.focus()
}, 500)

})

}

}, 500)

setTimeout(() => {

const form = document.querySelector(".footer-form")
const btn = document.getElementById("submit-btn")

if(form && btn){

form.addEventListener("submit", () => {

// 1. loading
btn.classList.add("loading")
btn.innerText = "Отправка..."
btn.disabled = true

// 2. success
setTimeout(() => {
btn.classList.remove("loading")
btn.classList.add("success")
btn.innerText = "Отправлено ✓"
}, 800)

// 3. возврат назад
setTimeout(() => {
btn.classList.remove("success")
btn.innerText = "Отправить"
btn.disabled = false
}, 2000)

})

}

}, 500)