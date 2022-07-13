const btns = document.querySelectorAll("level-btn");



// the tab that covers the enter job listing section

const sectionContainer = document.querySelector(".sectioncenter");


// the individual divs/boxes 

const jobBoxes = document.querySelectorAll("boxes");


// e is to access my event object



// I want to run a function that retrieves the iD that I have  // i have added this before creating the IF statement as the if statements 
// needs the ID's to refer to 
sectionContainer.addEventListener("click", function (e) {


    const id = e.target.dataset.id;


    if (id) {


        // remove active from other buttons - "for each button that does not have the ID that matches, remove active". 
        // if the id on the job description boxes do not match the ones on the filter buttons, remove them
        // for each i.e. for every button, run this function 


        btns.forEach(function (btns) {



            btns.classList.remove("active");
            e.target.classList.add("active");

        });


        // hide the other reward tabs

        jobBoxes.forEach(function (jobBoxes) {

            jobBoxes.classList.remove("active");

        });

        // display the boxes with matching id
        const element = document.getElementById(id);

        element.classList.add("active");

    }


});

