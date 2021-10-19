const arrow = document.querySelector(".card__mail-arrow");

arrow.addEventListener("click", ()=>{
  let email = document.querySelector(".card__email");
  if(email.value.includes(".com", "@") && email.value.length > 10){
    setTimeout(()=>{
      arrow.style.animation = "submit 3s forwards";
      arrow.style.cursor = "auto";
      email.style.animation = "reset2 2s forwards";
    },1000)
    }
    else{
      email.classList.add("error");
      let msg = document.querySelector(".msg");
      msg.style.display = "block";
      let iconError = document.querySelector(".icon-error");
      iconError.style.display = "block";
      email.style.animation = "";
      msg.style.animation = "";
      iconError.style.animation = "";

      setTimeout(()=>{
        email.classList.remove("error");
        email.style.animation = "reset1 2s forwards";
        msg.style.animation = "reset2 2s forwards";
        iconError.style.animation = "reset2 2s forwards";
      },2000);
    }
})

// plus




