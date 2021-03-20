studentArray=[]
function submit(){
var displaystudent =[] 
for (j=1; j<= 4 ; j++){
    var namestudent=document.getElementById("name_of_the_student_"+j).value;
    console.log(namestudent);
    studentArray.push(namestudent);
}
 console.log(studentArray)
 var lengtharray=studentArray.length;
 console.log(lengtharray);
 
 for (k=0; k<lengtharray;k++){
     displaystudent.push("<h4>NAME - "+studentArray[k]+"</h4>");
     console.log(displaystudent);
 }
 console.log(displaystudent); document.getElementById("display_name_with_commas").innerHTML = displaystudent; var remove_commas = displaystudent.join(" "); console.log(remove_commas); document.getElementById("display_name_without_commas").innerHTML = remove_commas; document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";

   
 }
 function sorting() { studentArray.sort(); console.log(studentArray); var display_student_array_sorting = []; var lengtharray = studentArray.length; console.log(lengtharray); for (var k = 0; k < lengtharray; k++) { display_student_array_sorting.push("<h4>NAME - " + studentArray[k] + "</h4>"); console.log(display_student_array_sorting); } var remove_commas = display_student_array_sorting.join(" "); console.log(remove_commas); document.getElementById("display_name_without_commas").innerHTML = remove_commas; }

