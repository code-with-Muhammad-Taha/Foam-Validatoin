let form = document.querySelector("#userForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let data = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    contactNumber: document.getElementById("contactNumber").value.trim(),
    address: document.getElementById("address").value.trim(),
    city: document.getElementById("city").value.trim(),
  };

  document.querySelectorAll(".messageError").forEach(el => el.textContent = "");

  let isValid = true;

  if (!data.firstName) {
    document.getElementById("firstNameError").textContent = "Required";
    isValid = false;
  }

  if (!data.lastName) {
    document.getElementById("lastNameError").textContent = "Required";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    document.getElementById("emailError").textContent = "Required";
    isValid = false;
  } else if (!emailRegex.test(data.email)) {
    document.getElementById("emailError").textContent = "Invalid email";
    isValid = false;
  }

  const phoneRegex = /^\d{11}$/;
  if (!data.contactNumber) {
    document.getElementById("contactNumberError").textContent = "Required";
    isValid = false;
  } else if (!phoneRegex.test(data.contactNumber)) {
    document.getElementById("contactNumberError").textContent = "Invalid number";
    isValid = false;
  }

  if (!data.address) {
    document.getElementById("addressError").textContent = "Required";
    isValid = false;
  }

  if (!data.city) {
    document.getElementById("cityError").textContent = "Required";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "dashboard.html";
  }
});