const form = document.querySelector("form");
form.addEventListener("submit", function(e){
   e.preventDefault();
   alert("Merci pour votre message ! Nous vous répondrons bientôt.");
   form.reset();
});
