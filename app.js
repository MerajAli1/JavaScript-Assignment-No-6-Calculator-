var display=document.getElementById("getvalue")
function abc(a){
    display.value+=a
}
function forclear(){
    display.value = ""
}
function calculate(){
    var b = eval(display.value)
    display.value =b
}
