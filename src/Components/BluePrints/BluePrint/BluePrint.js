import ImageBluePrint from "../ImageBluePrint/ImageBluePrint"
import TextBluePrint from "../TextBluePrint/TextBluePrint"
import "./BluePrint.css"

export default function BluePrint() {
    return (
        <div className="BluePrint">
            {/* <ImageBluePrint /> */}
            <TextBluePrint />
        </div>
    )
}