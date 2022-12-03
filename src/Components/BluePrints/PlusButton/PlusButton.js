import "./PlusButton.css"
import icon from "../../../assets/blueprint/plus-icon.png"

export default function PlusButton({setBluePrintQueue, setSelectionVisible}) {
    
    function onPlusClickHandler() {
        setSelectionVisible((prev) => !prev)
    }

    return(
        <div className="PlusButton" onClick={onPlusClickHandler}>
            <img src={icon} alt="Plus" />
        </div>
    )
}