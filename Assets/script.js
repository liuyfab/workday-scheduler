
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentHour = moment().format('h:mm'); 
//on click of save button store values in Local Storage using LocalStorage.setItem()
$(".saveBtn").on('click', function(){
    //1. grab hour 
    var hour = $(this).siblings(".hour").text(); 
    //console.log(hour); 
    //2. grab the information from textarea
    var description = $(this).siblings(".description").val();
    //console.log(description);
    //3. Store it LS in key,value format 
    localStorage.setItem(hour, description);
});

//start loop 
$('.row').each(function(description){  
//Page Loads u want to grab the stored value from LS and show ininside the textarea
    var text = localStorage.getItem(description.val);
    //console.log("Grab value from LS", text); 

    //Background color changed based on the current time whether its is past, prest or future. 
    if(currentHour > hour){ 
        $(".row").addClass('.present')
    }
    else if(currentHour<hour){
        $(".row").addClass('.past')
    }
})
//end loop 
