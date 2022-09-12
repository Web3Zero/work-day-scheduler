


function createTimeBlock(time, content="") {

    const timeRow = $("<div class='row align-items-center time-row'>")
    
    const colTime = $("<div class='col-2 d-flex justify-content-center time-col-time'>").text(time + ":00")
    const colTextArea = $("<div class='col-8 time-col-textarea'>")
    const textArea = $("<textarea cols='30' rows='2'>").val(content)

// colours will change depending on whether the time is in the past, present or future


    colTextArea.append(textArea);

    const colButton = $("<div class='col-2 time-col-button'>")
    const button = $('<button type="submit" class="btn btn-primary">').text("save")
    colButton.append(button);

    return timeRow.append(colTime, colTextArea, colButton);
}

// when user lands on this app should see clock ticking
$(function(){
    const currentTime = $("#current-time");
    const container = $(".container")
    
    function startTimer(){

        setInterval(function(){    
        currentTime.text(moment().format("DD-MMM-YYYY hh:mm:ssa"));

    }, 1000);
}



startTimer();





// user can type into any of the boxes and save the entry.
// note should be saved to storage (based on the time of the row)


// when a user lands on the page should see 9am to 5pm blocks with all the previous notes
for (let index = 9; index < 18; index++) {

    const previousNotes = "";
    const timeBlock = createTimeBlock(index, "Hey");
    
    container.append(timeBlock);
}


})