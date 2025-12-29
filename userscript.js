let users = [];
let id = 1;

const createBtn = document.getElementById("createBtn");
const form = document.getElementById("userForm");
const addBtn = document.getElementById("addUserBtn");
const searchInput = document.getElementById("searchInput");
const tableBody = document.querySelector("#userTable tbody");

// toggle form
createBtn.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

// add users
addBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value.trim();

  if (!name || !email) {
    alert("Name & Email required");
    return;
  }

  users.push({
    id: id++,
    name,
    email,
    phone,
    country,
    status: "Active"
  });

  render();

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("country").value = "";
});

// render + search
function render() {
  tableBody.innerHTML = "";

  const term = searchInput.value.toLowerCase();

  users
    .filter(u =>
      u.name.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term) ||
      u.phone.toLowerCase().includes(term) ||
      u.country.toLowerCase().includes(term)
    )
    .forEach(u => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.phone}</td>
        <td>${u.country}</td>
        <td>${u.status}</td>
      `;

      tableBody.appendChild(tr);
    });
}

searchInput.addEventListener("input", render);
