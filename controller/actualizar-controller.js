import { clientServices } from '../service/client-service.js'

const formulario = document.querySelector('[data-form]')

const obtenerInformacion = async () => {
  const url = new URL(window.location)
  const id = url.searchParams.get('id')

  if (id === null) {
    window.location.href = '/screens/error.html'
  }

  const nombre = document.querySelector('[data-nombre]')
  const email = document.querySelector('[data-email]')
  try {
    const { nombre: name, email: correo } = await clientServices.detalleCliente(id)
    if (name && correo) {
      nombre.value = name
      email.value = correo
    } else {
      throw new Error()
    }
  } catch (error) {
    console.log(error)
  }
}

obtenerInformacion()

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  const nombre = document.querySelector('[data-nombre]').value
  const email = document.querySelector('[data-email]').value
  const url = new URL(window.location)
  const id = url.searchParams.get('id')
  clientServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = '/screens/edicion_concluida.html'
  })
})
