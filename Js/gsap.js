gsap.registerPlugin(Flip)

const toggleBtn = document.querySelector(".toggle_view"),
      container = document.querySelector(".gallery"),
      images = document.querySelectorAll(".img")


toggleBtn.addEventListener("click", () => {
    container.classList.toggle("active")

    images.forEach(image =>{
        image.classList.toggle("active")
    })

    const state = Flip.getState(".gallery, .box, .img");


     Flip.from(state, {
    absolute: true,
    duration: 5, 
    stagger: 0.1,
    scale: true,
    ease: "ease"
  });
})      