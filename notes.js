showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e)
{
    let addTitle = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
        }

        let myObj = {
            title : addTitle.value,
            text: addTxt.value
        }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));

    addTxt.value = "";

    showNotes();

});



function showNotes()
{
    let notes = localStorage.getItem("notes");
    
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
        }


    let html = "";
    notesObj.forEach(function(element , index)
    {
        html += `
        <div class="card" style="inline-block;width:90%;">
            <div class="container" style="display:flex; align-items:center;justify-content:center;flex-direction:column;border:2px solid black; margin:20px">
                <h4 style="padding:10px;font-size:20px;font-wieght:bold;"><b>${element.title}</b></h4>
                <p style="font-size:20px;font-weight:bold; margin:10px auto;">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="delbtn" style="border:2px solid red;background: red;color:white;font-size:18px;font-weight:bold; margin: 10px;cursor:pointer;">Delete Note</button>
            </div>
        </div>`;

    });

    let none=`

        <p style="font-size:50px;font-weight:bold;">Nothing to show here yet ! Click on + to create one.</p>
    `
    
    let notesElm = document.getElementById("notes-container");
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML=none;
    }
    
}

// lets delete the note of a particular index


function deleteNote(index)
{

    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}





// searching a note

let search = document.getElementById('search');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "inline-block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
