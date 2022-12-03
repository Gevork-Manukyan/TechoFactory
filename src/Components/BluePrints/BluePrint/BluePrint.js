import { useState } from "react"
import BluePrintSelection from "../BluePrintSelection/BluePrintSelection"
import ImageBluePrint from "../ImageBluePrint/ImageBluePrint"
import PlusButton from "../PlusButton/PlusButton"
import "./BluePrint.css"

export default function BluePrint() {

    const [bluePrintQueue, setBluePrintQueue] = useState([<ImageBluePrint />, <ImageBluePrint />,<ImageBluePrint />,<ImageBluePrint />,<ImageBluePrint />,<ImageBluePrint />,<ImageBluePrint />,])
    const [selectionVisible, setSelectionVisible] = useState(false)


    return (
        <div className="BluePrint">
            <BluePrintSelection selectionVisible={selectionVisible} setSelectionVisible={setSelectionVisible} />
            <div className="bluePrintQueue">
                {bluePrintQueue}
            </div>
            <PlusButton setBluePrintQueue={setBluePrintQueue} setSelectionVisible={setSelectionVisible} />
        </div>
    )
}