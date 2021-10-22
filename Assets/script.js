
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentHour = moment();

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

$('.row').each(function(event){  
    //grab the stored value from LS and show ininside the textarea
        var text = localStorage.getItem(event);
        //console.log("Grab value from LS", text);
      //Background color changed based on the current time whether its is past, prest or future.
      var hour = $(this).siblings(".hour").text();  
      if(currentHour.isAfter(hour)){
          $(".row.event").addClass('.future');
      }
      else if(currentHour.isBefore(hour)){
          $(".row.event").addClass('.past');  
      }
      else{
          $(".row.event").addClass('.present');
        }
    })