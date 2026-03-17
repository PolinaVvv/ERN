fetch('/ERN/menu.html')
.then(res => res.text())
.then(data => {
document.getElementById("menu").innerHTML = data
})

fetch('/ERN/logo.html')
.then(res => res.text())
.then(data => {
document.getElementById("logo").innerHTML = data
})

fetch("/ERN/footer.html")
.then(res => res.text())
.then(data => {
const footer = document.getElementById("footer-container")
if(footer){
footer.innerHTML = data
}
})

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
