import "./PlusButton.css"
import icon from "../../../assets/blueprint/plus-icon.png"

export default function PlusButton({setSelectionVisible}) {
    
    function onPlusClickHandler() {
        setSelectionVisible((prev) => !prev)
        document.body.style.overflow = "hidden"
    }

    return(
        <div className="PlusButton" onClick={onPlusClickHandler}>
            <img src={icon} alt="Plus" />
        </div>
    )
}