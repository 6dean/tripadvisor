const tripAdivsor = document;

// Document est un nom par convention car D.O.M.
// querySelector permet d'appeler le premier élément qui correspond au même nom

tripAdivsor.addEventListener("DOMContentLoaded", () => {
  const modal = tripAdivsor.querySelector(".modal");

  // MODAL DISPARAIT
  tripAdivsor.querySelector(".button-connect").addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // MODAL DISPARAIT
  tripAdivsor.querySelector(".fa-xmark").addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  tripAdivsor.getElementById("formulaire");
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
