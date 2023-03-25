import { clientServices } from '../service/client-service.js'

const crearNuevaLinea = (nombre, email) => {
  const linea = document.createElement('tr')

  const contenido = `
      <td class="td" data-td>${nombre}</td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button">
              Eliminar
            </button>
          </li>
        </ul>
      </td>`
  linea.innerHTML = contenido
  return linea
}

const tablaPrincipal = document.querySelector('[data-table]')

clientServices
  .listaClientes()
  .then((result) => {
    result.forEach((perfil) => {
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
      tablaPrincipal.appendChild(nuevaLinea)
    })
  })
  .catch((err) => {
    console.log('el error es: ' + err)
  })
