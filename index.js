// write js code here corresponding to index.html
// You should add submit event on the form



document.getElementById("masaiForm").addEventListener("submit",myfun)
var array= [] || JSON.parse(localStorage.getItem("schedule"))

function myfun() {
    event.preventDefault()
    var obj= {
    match:masaiForm.matchNum.value,
    teama:masaiForm.teamA.value,
    teamb:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.value
    }

    array.push(obj)
    localStorage.setItem("schedule",JSON.stringify(array))
}