import { ContadorComponent } from "./components/ContadorComponent"
import { FormularioComponent } from "./components/FormularioComponent"
import { FormularioComponent2 } from "./components/FormularioComponent2"


export const HooksApp = () => {
  return (
    <>
        <h1>Practicando con Hooks</h1>
        <hr />
        <ContadorComponent/>
        {/* <FormularioComponent/> */}
        <FormularioComponent2/>

    </>
  )
}
