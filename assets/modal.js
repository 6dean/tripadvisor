const tripAdivsor = document;

// Document est un nom par convention car D.O.M.

tripAdivsor.addEventListener("DOMContentLoaded", () => {
  const modal = tripAdivsor.querySelector(".modal");
  const body = tripAdivsor.querySelector("body");
  const header = tripAdivsor.querySelector("header");

  // MODAL DISPARAIT
  tripAdivsor.querySelector(".button-connect").addEventListener("click", () => {
    modal.classList.remove("hidden");
    body.classList.add("disable");
  });

  // MODAL DISPARAIT
  tripAdivsor.querySelector(".fa-xmark").addEventListener("click", () => {
    modal.classList.add("hidden");
    body.classList.remove("disable");
  });

  tripAdivsor.getElementById("contactForm");
  tripAdivsor.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: tripAdivsor.getElementById("firstname").value,
      lastname: tripAdivsor.getElementById("lastname").value,
      email: tripAdivsor.getElementById("email").value,
      message: tripAdivsor.getElementById("description").value,
    };

    const response = await axios.post("http://localhost:3000/send-email", data);
    console.log(response.data);
    alert("Merci de votre réponse !");
  });
});
