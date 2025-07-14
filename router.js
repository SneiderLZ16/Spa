export function router(path) {
  const session = JSON.parse(localStorage.getItem("user"));

  if (!session && path.includes("dashboard")) {
    location.hash = "#/not-found";
    return;
  }

  if (session && (path === "#/login" || path === "#/register")) {
    location.hash = "#/dashboard";
    return;
  }

  if (path === "#/dashboard") {
    import("./views/dashboard.js").then(m => m.default());
  } else if (path === "#/login") {
    import("./views/login.js").then(m => m.default());
  } else if (path === "#/register") {
    import("./views/register.js").then(m => m.default());
  } else {
    document.getElementById("app").innerHTML = "<h2>Página no encontrada</h2>";
  }
}
