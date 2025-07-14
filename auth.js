export async function login(nombre, password) {
  const res = await fetch("http://localhost:3000/users");
  const users = await res.json();
  const user = users.find(u => u.nombre === nombre && u.password === password);
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    location.hash = "#/dashboard";
  } else {
    alert("Credenciales incorrectas");
  }
}

export async function register(nombre, password, rol) {
  const res = await fetch("http://localhost:3000/users");
  const users = await res.json();
  const exists = users.find(u => u.nombre === nombre);
  if (exists) {
    alert("Usuario ya existe");
    return;
  }
  const nuevo = { nombre, password, rol };
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevo)
  });
  alert("Registrado correctamente, ahora inicia sesión");
  location.hash = "#/login";
}
