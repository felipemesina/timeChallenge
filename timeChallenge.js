function time(hour, minute, period){
 
  if (hour===8 && minute<30 && period==="AM"){
    console.log("It's just after 8 in the morning.");
  }
  else if (hour===8 && minute>30 && period==="AM"){
    console.log("It's almost 9 in the morning.");
  }
  else if (hour===7 && minute<30 && period==="PM"){
    console.log("It's just after 7 in the evening.");
  }
  else if (hour===7 && minute>30 && period==="PM"){
    console.log("It's almost 8 in the evening.");
  }
   else{
     console.log("I don't know.");
   }
  
}

time(7,40,"PM");