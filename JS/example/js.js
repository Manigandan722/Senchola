function convert(){
    let  n = Number(document.getElementById("value").value)
    let odd = n % 2
    let result = document.getElementById("result")

     if (odd == 0){
        result.innerHTML = n + " - this is Even number"
     }
     else{
        result.innerHTML = n + " - this is ODD number"
     }
}



let school = { 
    name: 'Abcd School', 
    location : 'No name area', 
    established : '1971', 
    20 : 1000, 
    displayInfo : function(){ 
        console.log(`the school name ${school.name}`); 
        console.log(`the school name ${school.location}`); 
        console.log(`the school name ${school.established}`); 
    } 
} 
school.displayInfo();