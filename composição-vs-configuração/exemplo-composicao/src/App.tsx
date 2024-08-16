
import './App.css'
import { Input } from './configuração'
import * as InputC from './composição'

function App() {


  return (
    <>
    {/* usando o input de configuração */}
    <Input
      label="Nome"
      errorMessage="Digite o nome completo!"
      icon={<div/>}
    />
    {/* se quiser mudar de posição o icon, tem que ter uma nova propriedade
        ,alem disso, se quiser add uma propriedade especifica pra label não consegue
    */}

      {/* usando o pattern de composição */}

      <InputC.Root>
        <InputC.Label htmlFor='name' id="name-label"/>{/* passa quais props quiser */}
        <InputC.ErrorMessage message="Digite seu nome completo"/>
        <InputC.FormField/>

        <InputC.Icon> {/* pode reposicionar o icon entre um lugar e outro */}
          <span/>
        </InputC.Icon>
        
      </InputC.Root>
    
      
    </>
  )
}

export default App
