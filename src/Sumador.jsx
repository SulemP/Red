import { sumarNumero, restarNumero } from "./Redux/actions"
import { useDispatch, useSelector } from "react-redux"

export default function Sumador() {
    const dispatch = useDispatch()
    const numero = useSelector(state => state.numero)
    return (
        <>
            <button onClick={e=>dispatch(restarNumero(numero))}>-</button>
            <div>{numero}</div>
            <button onClick={e=>dispatch(sumarNumero(numero))}>+</button>
        </>
    )
}