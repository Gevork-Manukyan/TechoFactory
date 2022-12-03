import "./PlusButton.css"
import icon from "../../../assets/blueprint/plus-icon.png"

export default function PlusButton({setBluePrintQueue, setSelectionVisible}) {
    
    function onPlusClick() {
        setSelectionVisible((prev) => !prev)
    }

    return(
        <div className="PlusButton" onClick={onPlusClick}>
            <img src={icon} />
        </div>
    )
}