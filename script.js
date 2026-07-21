 let form = document.querySelector("form");
 let body = document.querySelector("body");
let inputs = document.querySelectorAll("input")
let h1 = document.querySelector("h1")

form.addEventListener("submit", function(evt){
   evt.preventDefault()
  
   let card = document.createElement('div')
     card.classList = "card"
     
     let profile = document.createElement('div')
     profile.classList = 'profile'

     let img = document.createElement('img')
     img.setAttribute("src", inputs[0].value);

     let h3 = document.createElement("h3")
     h3.textContent =  inputs[1].value;

     let h5 = document.createElement("h5");
     h5.textContent = inputs[2].value;

     let p = document.createElement("p");
     p.textContent = inputs[3].value;

   profile.appendChild(img)
   card.appendChild(profile)
   card.appendChild(h3)
   card.appendChild(h5)
   card.appendChild(p)
  
   body.appendChild(card)
   
   h1.textContent= "YOU'RE ID CARD"
 
  form.style.display = "none"
})