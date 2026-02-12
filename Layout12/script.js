function openDonate(){
    window.location.href="donate.html";
}

function openCheck(){
    const email=document.getElementById("c_email");
    if(!email.checked){
        email.focus();
        return;
    } else{
        window.location.href="volunteer.html";  
    }
    
}

let selectedDonateBtn = null;

function chooseDonate(clickedBtn) {
    const buttons = document.querySelectorAll(".donate-amt");
    const amountInput = document.getElementById("d_amount");

    // reset all buttons
    buttons.forEach(btn => {
        btn.style.backgroundColor = "rgb(217, 222, 226)";
        btn.style.color = "black";
    });

    // highlight selected button
    clickedBtn.style.backgroundColor = "#1F3D8A";
    clickedBtn.style.color = "white";

    // store selected button
    selectedDonateBtn = clickedBtn;

    // Custom logic
    if (clickedBtn.innerText.trim() === "Custom") {
        amountInput.disabled = false;
        amountInput.focus();
    } else {
        amountInput.disabled = true;
        amountInput.value = "";
    }
}


function openThank(){
    const name=document.getElementById("d_name").value.trim();
    const email=document.getElementById("d_email").value.trim();
    const address=document.getElementById("d_address").value.trim();
    const cause=document.getElementById("cause").value;
    const amount=document.getElementById("d_amount").value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if(!selectedDonateBtn){
        alert("Please Select a Donation Amount");
        return;
    }

    if(name=="" || email=="" || address=="" || cause==""){
        alert("Please Fill All Fields");
        return;
    } 
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
    if (selectedDonateBtn.innerText.trim() === "Custom" && amount === "") {
        alert("Please enter donation amount");
        return;
    }
    window.location.href="thank.html";
}

function changeText(){
    const name1=document.getElementById("v_name").value.trim();
    const email1=document.getElementById("v_email").value.trim();
    const phone1=document.getElementById("v_phone").value.trim();
    const area1=document.getElementById("v_area").value;
    const time1=document.getElementById("v_time").value.trim();
    const volBtn=document.getElementById("volBtn1");
    const email1Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    

     if(name1=="" || email1=="" || phone1=="" || area1=="" || time1==""){
        alert("Please Fill All Fields");
        return;
     } 
      if (!email1Pattern.test(email1)) {
        alert("Please enter a valid email address");
        return;
    }

        volBtn.innerText="You Added Our Team";
       volBtn.disabled = true;  
     
    }

    function openVolun(){
        window.location.href="volunteer.html";
    }

    function openLearn(){
        window.location.href="cause.html";
    }