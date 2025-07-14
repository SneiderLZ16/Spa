import { register } from "../auth.js";

export default function registerView() {
  document.getElementById("app").innerHTML = `
    <h2>Registro</h2>
    <form id="registerForm">
      <input type="text" placeholder="Nombre" required id="nombre">
      <input type="password" placeholder="Contraseña" required id="password">
      <select id="rol" required>
        <option value="">Selecciona un rol</option>
        <option value="bibliotecario">Bibliotecario</option>
        <option value="visitante">Visitante</option>
      </select>
      <button type="submit">Registrar</button>
      <p>¿Ya tienes cuenta? <a href="#/login">Inicia sesión</a></p>
    </form>
  `;

  document.getElementById("registerForm").addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;
    register(nombre, password, rol);
  });
}
