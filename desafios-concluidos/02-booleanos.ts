// Boleanos

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeight = 130

const currentHour = new Date().getHours()

const isParkOpen = currentHour > 9 && currentHour < 18

if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

const doesUserHaveTicket = user.hasTicket

if (!doesUserHaveTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const isEnterAllowed = user.height > necessaryHeight

if (!isEnterAllowed) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')