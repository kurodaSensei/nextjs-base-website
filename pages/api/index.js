export async function getOptionsMenu() {
  let req = await fetch(
    "https://my-json-server.typicode.com/kurodaSensei/json-server/menu"
  );
  let menuOptions = await req.json();
  return menuOptions;
}

export async function getServices() {
  let req = await fetch(
    "https://my-json-server.typicode.com/kurodaSensei/json-server/services"
  );
  let services = await req.json();
  return services;
}

export async function getTestimonials() {
  let req = await fetch(
    "https://my-json-server.typicode.com/kurodaSensei/json-server/testimonials"
  );
  let services = await req.json();
  return services;
}
