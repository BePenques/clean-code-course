function updateUserRoute({body, params}) {
  const {name, email, phoneNumber} = body;
  const { id } =  params ;

  updateUserController({
    body:{ name, email, phoneNumber },
    params: {id} 
  })
}

function updateUserController({data, params}) {
  const {name, email, phoneNumber} = data;
  const { id } =  params ;

  userRepository.update({
    data:{ name, email, phoneNumber },
    params: {id}
  })
}

const userRepository = {
  update: ({data: {name,email,phoneNumber}, params: {id}}) => {},
}