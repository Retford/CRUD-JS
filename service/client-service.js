const listaClientes = () =>
  fetch('http://localhost:3000/perfil').then((res) => res.json())

const crearCliente = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() })
  })
}

const eliminarCliente = (id) => {
  console.log(`eliminar a:  ${id}`)
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'DELETE'
  })
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((res) => res.json())
}

const actualizarCliente = async (nombre, email, id) => {
  try {
    return await fetch(`http://localhost:3000/perfil/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ nombre, email })
    })
  } catch (error) {
    console.log(error)
  }
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
}
