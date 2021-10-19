const arrow = document.querySelector(".section__mail-arrow");
let submit = false;

arrow.addEventListener("click", ()=>{
  if(submit) location.reload()

  let email = document.querySelector(".section__email");
  if(email.value.includes(".com", "@") && email.value.length > 10){
    arrow.style.animation = "submit 2s forwards";
    email.style.animation = "reset2 1s forwards";
    submit = true;
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