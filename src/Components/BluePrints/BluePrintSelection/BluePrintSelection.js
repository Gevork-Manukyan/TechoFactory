import "./BluePrintSelection.css"
import ImageBluePrint from "../ImageBluePrint/ImageBluePrint"
import TextBluePrint from "../TextBluePrint/TextBluePrint"
import { useEffect, useRef } from "react"

export default function BluePrintSelection({selectionVisible, setSelectionVisible, setBluePrintQueue}) {
    
    /* VARIABLES */
    const componentRef = useRef(null)
    const BluePrintItemsArr = [<ImageBluePrint key={1} />, <TextBluePrint key={2} />]
    

    useEffect(() => {
        if (selectionVisible) 
            componentRef.current.focus()

    }, [selectionVisible])

    function onBlurHandler() {
        if ((document.activeElement.className).toString().trim() !== "BluePrintSelection"){
            setSelectionVisible((prev) => !prev)
            document.body.style.overflow = "auto"
        }
    }

    
    return (
        <>
        <div id="BluePrintSelection_bg" className={`${selectionVisible ? "" : "hidden"}`}></div>
        <div className={`BluePrintSelection ${selectionVisible ? "" : "hidden"}`} ref={componentRef} tabIndex={-1} onBlur={onBlurHandler}>
            {BluePrintItemsArr}
        </div>
        </>
    )
}