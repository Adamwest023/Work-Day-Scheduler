var displayBtn = document.getElementById("currentDay")
//display current time
var day = moment().format("ddd, hA");
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$('#currentDay').text(day);

 var past
 var current 
 var future
 var taskHour
$(".row").each(function(){
    var divHour = parseInt($(this).attr("value"));
    var divId = $(this).attr("id")
    var textArea = $("#text-"+divId)
    var btn = $("#btn-"+divId)
    
    console.log(btn)
    console.log($(this).children()[1]);
    
    if(moment().format("H") > divHour){
        $(this).children()[1].setAttribute("class", "past col-8 col-md-8");
        // $(this).removeClass()
    } else if (moment().format("H") == divHour)  {
        $(this).children()[1].setAttribute("class",'present col-8 col-md-8');
        
    } else if (moment().format("H") < divHour) { 
        $(this).children()[1].setAttribute("class","future col-8 col-md-8");
    }
    console.log($(this).attr("value"));
    textArea.val(localStorage.getItem($(this).attr("value")))
    btn.on("click", saveToLocal)
});

function saveToLocal(){
    var btnVal = $(this).attr("value")
    var textArea = $("#text-"+btnVal)

    console.log(textArea.val())
    localStorage.setItem(btnVal, textArea.val())
}


displayBtn.addEventListener('click', function(){
    document.getElementById("time-block").style.display = "block"
})