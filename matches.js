// write js code here corresponding to matches.html


var arr=JSON.parse(localStorage.getItem("schedule"))

displaydata(arr)

var favarray=[]



function displaydata(data) {
    data.forEach(function(elem){
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=elem.match

        var td2=document.createElement("td")
        td2.innerText=elem.teama


        var td3=document.createElement("td")
        td3.innerText=elem.teamb


        var td4=document.createElement("td")
        td4.innerText=elem.date


        var td5=document.createElement("td")
        td5.innerText=elem.venue


        td6=document.createElement("td")
        td6.innerText="favourite"
        td6.style.color="green"
        td6.addEventListener("click",function(){
            yatin(ele)

        })

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)

    })
    

}

function yatin(ele) {
    
    favarray.push(ele)
    localStorage.setItem("favourites",JSON.stringify(favarray))

    
}