const checkbox = document.querySelector("#checkbox");
if (window.matchMedia("(prefers-color-sheme: dark)").matches == true) {
  checkbox.setAttribute("checked", true);
}
if(localStorage.getItem("dark")){
  document.body.classList.add("is-dark-mode");
  document.querySelector('.checkbox').checked = true
}else{
  document.querySelector('.checkbox').checked = false
}
checkbox.addEventListener("change", function () {
  
  if(this.checked && !localStorage.getItem("dark")){
    localStorage.setItem("dark","yes")
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");

  }else{
    localStorage.removeItem("dark")
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
});
