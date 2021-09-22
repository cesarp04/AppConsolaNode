require('colors')

const mostrarMenu = () => {
  console.clear()
  console.log('========================='.green)
  console.log('Seleccione una opcion'.green)
  console.log('=========================\n'.green)

  console.log(`${'1.'.green} Crear tarea`)
  console.log(`${'2.'.green} Listar tareas`)
  console.log(`${'3.'.green} Listar tareas completadas`)
  console.log(`${'4.'.green} Listar tareas pendientes`)
  console.log(`${'5.'.green} Completar tareas`)
  console.log(`${'5.'.green} Borrar tarea`)
  console.log(`${'0.'.green} Salir\n`)

  const leerLinea = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  leerLinea.question('Seleccione una opcion: ', opt => {
    console.log(opt)
    leerLinea.close()
  })
}

const pausa = () => {
  const leerLinea = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  leerLinea.question(`\nPresione ${'Enter'.green} para continuar\n`, opt => {
    leerLinea.close()
  })
}

module.exports = {
  mostrarMenu,
  pausa,
}
