export default function dashboardView() {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("app").innerHTML = `
    <h2>Bienvenido, ${user.nombre} (${user.rol})</h2>
    <button id="logout">Cerrar sesión</button>
    <p>Aquí irán las funcionalidades según el rol.</p>
  `;

  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("user");
    location.hash = "#/login";
  });
}
