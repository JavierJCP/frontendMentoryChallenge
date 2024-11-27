const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.currentTarget))
  if(!data.first) {
    document.querySelector(".firtsError").classList.remove("hidden")
  } else {
    document.querySelector(".firtsError").classList.add("hidden")
  }
  if(!data.last) {
    document.querySelector(".lastError").classList.remove("hidden")
  } else {
    document.querySelector(".lastError").classList.add("hidden")
  }
  if(!data.email) {
    document.querySelector(".emailError").classList.remove("hidden")
  } else {
    document.querySelector(".emailError").classList.add("hidden")
  }
  if(!data.query ) {
    document.querySelector(".queryError").classList.remove("hidden")
  } else {
    document.querySelector(".queryError").classList.add("hidden")
  }
  if(!data.message) {
    document.querySelector(".messageError").classList.remove("hidden")
  } else {
    document.querySelector(".messageError").classList.add("hidden")
  }
  if(!data.consent) {
    document.querySelector(".checkError").classList.remove("hidden")
  } else {
    document.querySelector(".checkError").classList.add("hidden")
  }
  if(data.first && data.last && data.email && data.query && data.message && data.consent) {
    const toast = document.querySelector(".toast")
  toast.classList.remove("hidden")
  setTimeout(hideToast, 3000)
  } 
  
})


function hideToast() {
  const toast = document.querySelector(".toast")
  toast.classList.add("hidden")
}