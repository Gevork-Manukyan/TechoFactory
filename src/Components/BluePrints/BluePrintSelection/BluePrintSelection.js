import { useEffect, useRef } from "react"
import "./BluePrintSelection.css"

export default function BluePrintSelection({selectionVisible, setSelectionVisible}) {
    
    /* VARIABLES */
    const componentRef = useRef(null)

    useEffect(() => {
        if (selectionVisible) 
            componentRef.current.focus()

    }, [selectionVisible])

    function onBlurHandler(e) {
        if ((document.activeElement.className).toString().trim() !== "BluePrintSelection"){
            setSelectionVisible((prev) => !prev)
            document.body.style.overflow = "auto"
        }
    }

    
    return (
        <>
        <div id="BluePrintSelection_bg" className={`${selectionVisible ? "" : "hidden"}`}></div>
        <div className={`BluePrintSelection ${selectionVisible ? "" : "hidden"}`} ref={componentRef} tabIndex={-1} onBlur={onBlurHandler}></div>
        </>
    )
}