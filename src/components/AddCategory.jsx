import { useState } from "react"

export const AddCategory = ({onNewCategory})=>{
    const [inputvalue, setinputValue] = useState('One piece')

    /*aqui se destructura target del "event" sino hbaria que hacerlo
     event.target.value*/

    const onInputChancge = ({target})=>{
        setinputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        if(inputvalue.trim().length <= 1) return;
        onNewCategory(inputvalue.trim());
        setinputValue('')

    }


    return(
        <form onSubmit={onSubmit}>
            <input
                type = "text"
                placeholder = "Buscar gif"
                value = {inputvalue}
                onChange = {onInputChancge}
            />
        </form>
    )
}

