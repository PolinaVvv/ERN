fetch('menu.html')
.then(res => res.text())
.then(data => {
document.getElementById("menu").innerHTML = data
})

fetch('logo.html')
.then(res => res.text())
.then(data => {
document.getElementById("logo").innerHTML = data
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
