$(document).ready(function() {
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentHour = moment().hour();
console.log('log: currentHour ', currentHour);

//on click of save button store values in Local Storage using LocalStorage.setItem()
$(".saveBtn").on('click', function(){
    //1. grab hour
    var hour = $(this).siblings(".hour").text();
    console.log(hour);
    //2. grab the information from textarea
    var event = $(this).siblings(".event-text").val();
    console.log(event);
    //3. Store it LS in key,value format
    localStorage.setItem(hour, event);
});


 $('.hour').each(function(index){
    var hour = $(this).text()
    console.log(index + ": " + $(this).text())
       
    //grab the stored value from LS and show ininside the textarea
    console.log('log: hour ', hour);
    var text = localStorage.getItem(hour);
    console.log("Grab value from LS", text);
    $(this).siblings(".event-text").val(text)
    /*var loadingBlock ;
    console.log(loadingBlock);
    loadingBlock.siblings(".event-text").text(text);*/

        
      //Background color changed based on the current time whether its is past, prest or future.
     var scheduleTime = hour.split(" ")[0];
     var scheduleId = "#" + scheduleTime;
     console.log('log: scheduleTime ', scheduleTime);
     console.log('log: scheduleId ', scheduleId);

    if(currentHour < scheduleTime ){
        console.log("currentHour > scheduleTime")
          $(scheduleId).addClass("future");  
      }
    
    else if(currentHour > scheduleTime ){
        console.log("currentHour > scheduleTime")
          $(scheduleId).addClass("past");  
      }
    else{
        console.log("currentHour = scheduleTime")
         $(scheduleId).addClass("present");
      }
     
    })

   /* var local = $('#9 .event-text').val();
    console.log('log: local ', local);
    var storage = localStorage.getItem('9 am');
   console.log('log: storage ', storage); */
})