// write js code here corresponding to favourites.html


var match= JSON.parse(localStorage.getItem("favourites"))

displaydata(match)

function displaydata(data) {

    data.forEach(function(elem,index){
        
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
        td6.innerText="delete"
        td6.addEventListener("click",function(){
            deleteItem(elem,index)
        })
        
        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)

    })
    
}



function deleteItem(el,index) {
    
    match.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(match))
    window.location.reload()

}