const listaClientes = () => {
  fetch('http://localhost:3000/perfil').then((res) => res.json())
}
export const clientServices = {
  listaClientes
}
