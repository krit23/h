var array = [];

function submit(){

   var name1 = document.getElementById("1").value;
   var name2 = document.getElementById("2").value;
   var name3 = document.getElementById("3").value;
   var name4 = document.getElementById("4").value;
    
   array.push (name1);
   array.push (name2);
   array.push (name3);
   array.push (name4);
   console.log(array);
   document.getElementById("display_name").innerHTML=array;

   document.getElementById("Submit").style.display="none";
   document.getElementById("Sort").style.display="inline-block";
}

function sort(){
    array.sort();
    console.log(array);

    document.getElementById("display_name").innerHTML=array;
}

