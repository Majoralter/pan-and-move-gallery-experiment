gsap.registerPlugin(Flip)

const toggleBtn = document.querySelector(".toggle_view"),
      container = document.querySelector(".gallery"),
      images = document.querySelectorAll(".img")


toggleBtn.addEventListener("click", () => {
    container.classList.toggle("active")

    images.forEach(image =>{
        image.classList.toggle("active")
    })

    if(container.classList.contains("active")){
        toggleBtn.textContent = "Grid layout"
    } else{
        toggleBtn.textContent = "Flex layout"
    }

    const state = Flip.getState(".gallery, .box");

     Flip.from(state, {
    absolute: true,
    duration: 5, 
    stagger: 0.1,
    scale: true,
    prune: true,
    ease: "back"
  });
})      