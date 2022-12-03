import { useEffect, useRef } from "react"
import "./BluePrintSelection.css"

export default function BluePrintSelection({selectionVisible, setSelectionVisible}) {
    
    /* VARIABLES */
    const componentRef = useRef(null)

    useEffect(() => {
        if (selectionVisible) 
            componentRef.current.focus()

    }, [selectionVisible])

    function onBlurHandler() {
        setSelectionVisible((prev) => !prev)
    }

    
    return (
        <div className={`BluePrintSelection ${selectionVisible ? "" : "hidden"}`} ref={componentRef} tabIndex={-1} onBlur={onBlurHandler}>

        </div>
    )
}