import "./PlusButton.css"
import icon from "../../../assets/blueprint/plus-icon.png"

export default function PlusButton({setBluePrintQueue}) {
    
    function onPlusClick() {
        
    }

    return(
        <div className="PlusButton" onClick={onPlusClick}>
            <img src={icon} />
        </div>
    )
}