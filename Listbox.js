import React, { useRef, useState } from "react";
export default function Listbox(){
        const a = useRef(null)
        const b = useRef(null)
        const c = useRef(null)
        const d = useRef(null)
        const [res, setRes] = useState('')
        const [res1, setRes1] = useState('')

        function Language(e){
            var a1 = ""
            var a2 = 0
            var b1 = ""
            var b2 = 0
            var c1 = ""
            var c2 = 0
            var d1 = ""
            var d2 = 0
            // a += +e.target.value
            // setRes(a)
            if(a.current.selected){
                a1 += a.current.title;
                a2 += +a.current.value;
            }
            else{
                a1=""
                a2=0
            }
            if(b.current.selected){
                b1 += b.current.title;
                b2 += +b.current.value;
            }
            else{
                b1=""
                b2=0
            }
            if(c.current.selected){
                c1 += c.current.title;
                c2 += +c.current.value;
            }
            else{
                c1=""
                c2=0
            }
            if(d.current.selected){
                d1 += d.current.title;
                d2 += +d.current.value;
            }
            else{
                d1=""
                d2=0
            }
            setRes(" Courses = "+(a1+b1+c1+d1))
            setRes1(" total fees = "+(a2+b2+c2+d2)+" -/ Rs.")
            e.preventDefault()
        }
    return(
        <div>
            <hr />
            <select onClick={Language} multiple ={true}>
                <option>--select courses--</option>
                <option  value="10000" ref={a} title=" C  , ">C (10000)</option>
                <option  value="20000" ref={b} title=" C++  , ">C++ (20000)</option>
                <option  value="25000" ref={c} title=" Java  , ">Java (25000)</option>
                <option  value="30000" ref={d} title=" Python  ">Python (30000)</option>
            </select>
            <hr />
            <p>{res}</p>
            <p>{res1}</p>
            <hr />
            <hr />
        </div>
    )
}