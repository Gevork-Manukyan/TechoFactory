import { useState } from "react"
import BluePrintSelection from "../BluePrintSelection/BluePrintSelection"
import ImageBluePrint from "../ImageBluePrint/ImageBluePrint"
import PlusButton from "../PlusButton/PlusButton"
import TextBluePrint from "../TextBluePrint/TextBluePrint"
import "./BluePrint.css"

export default function BluePrint() {

    const [bluePrintQueue, setBluePrintQueue] = useState([<ImageBluePrint />, <ImageBluePrint />,<ImageBluePrint />,<ImageBluePrint />,<ImageBluePrint />,<ImageBluePrint />,<ImageBluePrint />,])



    return (
        <div className="BluePrint">
            <BluePrintSelection />
            <div className="bluePrintQueue">
                {bluePrintQueue}
            </div>
            <PlusButton setBluePrintQueue={setBluePrintQueue} />
        </div>
    )
}