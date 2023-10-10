
function display(v) {
    document.getElementById("output").value +=  v ;
}
function Calculate(){
    try {
        document.getElementById("output").value = eval(document.getElementById("output").value)
    }
    catch (err){

        alert("Invalid")
    }
}
function cl(){
    document.getElementById("output").value = "";
}
function del(){
    document.getElementById("output").value = document.getElementById("output").value.slice(0,-1);
}