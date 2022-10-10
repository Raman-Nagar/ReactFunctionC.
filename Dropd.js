import React, { useRef } from "react"
export default function Dropd() {
    var a = useRef(null)
    var b = useRef(null)
    var c = useRef(null)
    function Bgcolor(e) {
        if(a.current.selected){
                document.body.style.backgroundImage = `url("https://www.whatsappimages.in/wp-content/uploads/2022/03/Free-HD-HD-Wallpaper-Pics-Download-6.jpg")` 
                document.body.style.backgroundSize="cover"
        }
        else if(b.current.selected){
                document.body.style.backgroundImage = `url("https://wallpapers.com/images/hd/hd-sunset-at-beach-w5ped7x6g3uo2o76.jpg")`
                document.body.style.backgroundSize="cover" 
                 
        }
        else if(c.current.selected){
                document.body.style.backgroundImage = `url("https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg")` 
                document.body.style.backgroundSize="cover"
        }
        else{
            document.body.style.background = "white"
        }

        e.preventDefault()
    }
    return (
        <div>
            <select onClick={Bgcolor} >
                <option>--Select BG image--</option>
                <option value="bg-1" ref={a} > bg-1</option>
                <option value="bg-2" ref={b}>bg-2</option>
                <option value="bg-3" ref={c}>bg-3</option>
            </select>
        </div>
    )
}
