function div3() {
    document.getElementById("p3").innerHTML = "Child";


}
function div2() {
    if (document.getElementById("p3").innerHTML !== "Child"){
        document.getElementById("p2").innerHTML = "Parent";
    }
}



function div1() {
    if (document.getElementById("p3").innerHTML !== "Child" && document.getElementById("p2").innerHTML !== "Parent") {
        document.getElementById("p1").innerHTML = "Grand-Parent";
    }


}



