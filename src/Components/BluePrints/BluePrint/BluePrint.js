import { useState } from "react"
import BluePrintSelection from "../BluePrintSelection/BluePrintSelection"
import PlusButton from "../PlusButton/PlusButton"
import "./BluePrint.css"

export default function BluePrint() {

    const [bluePrintQueue, setBluePrintQueue] = useState([])
    const [selectionVisible, setSelectionVisible] = useState(false)


    return (
        <div className={`BluePrint ${selectionVisible ? "selectionOpen" : ""}`}>
            <BluePrintSelection selectionVisible={selectionVisible} setSelectionVisible={setSelectionVisible} setBluePrintQueue={setBluePrintQueue} />
            <div className="bluePrintQueue">
                {bluePrintQueue}
            </div>
            <PlusButton setSelectionVisible={setSelectionVisible} />
        </div>
    )
}