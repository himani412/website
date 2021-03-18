namearray=[];
function submit(){
    var student1 = document.getElementById("name1").value;
    var student2 = document.getElementById("name2").value;
    var student3 = document.getElementById("name3").value;
    var student4 = document.getElementById("name4").value;

    namearray.push(student1);
    namearray.push(student2);
    namearray.push(student3);
    namearray.push(student4);

    console.log (namearray);
    document.getElementById("displayname").innerHTML = namearray;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}
function sorting(){
    namearray.sort();
    console.log(namearray);
    document.getElementById("displayname").innerHTML = namearray;
}