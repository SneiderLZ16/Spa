import { login } from "../auth.js";

export default function loginView() {
  document.getElementById("app").innerHTML = `
    <h2>Iniciar Sesión</h2>
    <form id="loginForm">
      <input type="text" placeholder="Nombre" required id="nombre">
      <input type="password" placeholder="Contraseña" required id="password">
      <button type="submit">Entrar</button>
      <p>¿No tienes cuenta? <a href="#/register">Regístrate aquí</a></p>
    </form>
  `;

  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;
    login(nombre, password);
  });
}
