
import { AddMusic } from "../components/AddMusic"
import { Link } from "react-router-dom"
export function YourMusic({songs, setSongs}) {
    return (
        <div className="YourMusicpage">
            <AddMusic
                songs={songs}
                setSongs={setSongs}
            />
        </div>
    )
}