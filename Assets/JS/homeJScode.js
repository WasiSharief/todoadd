
var option = document.getElementsByClassName('options');

document.getElementById('date-input').min = "10-11-2020";

// script to select checkbox from list of tasks
var checks = document.getElementsByClassName('checkbox');
    for(let i=0;i<checks.length;i++){
        checks[i].addEventListener('click',function(){
        checks[i].classList.toggle('check');
 
    });
}
// script for selecting category from dropdown 

for(let i=0;i<option.length;i++)
{
            option[i].addEventListener('mousedown',function(){
            $('#cat-dropdown').val(option[i].textContent);
            $('#date-input').removeAttr('disabled');
            $('#drop-options').toggleClass('hideclass');
       
            });
}


// hidding the dropdown on click and displaying it 
$('#drop-click').click(function(){
        $('#drop-options').toggleClass('hideclass'); 
});

// script to validate input fields before adding it to database
$('#add-task-btn').click(function(){
    
        if ($('#desc-input-id').val()!=""&&$('#cat-dropdown').val()!=""&&$('#date-input').val()!="")
        {
        console.log("submited");
         }
         else
         {
        alert("Please fill all the fields");
        }
});


