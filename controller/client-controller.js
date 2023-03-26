import { clientServices } from '../service/client-service.js'

const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement('tr')

  const contenido = `
      <td class="td" data-td>${nombre}</td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id='${id}'>
              Eliminar
            </button>
          </li>
        </ul>
      </td>`
  linea.innerHTML = contenido
  const btnEliminar = linea.querySelector('button')
  btnEliminar.addEventListener('click', async () => {
    const id = btnEliminar.id
    await clientServices.eliminarCliente(id)
  })
  return linea
}

const tablaPrincipal = document.querySelector('[data-table]')

clientServices
  .listaClientes()
  .then((result) => {
    result.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id)
      tablaPrincipal.appendChild(nuevaLinea)
    })
  })
  .catch((err) => console.log(err))
