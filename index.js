var peopleEl = document.getElementById("people-entered");
var count = 0;
function increment() {

   count = count + 1;
   
   document.getElementById("people-entered").innerHTML = count;

}

peopleEl.innerHTML = count;
function save() {
   var saveEl = document.getElementById("people-entered").innerHTML;
   document.getElementById("count-el").innerHTML += saveEl + " "+"- ";   
   document.getElementById("people-entered").innerHTML = 0;
   count = 0;
}



   
