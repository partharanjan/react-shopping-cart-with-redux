import { useEffect, useRef, useState } from "react"


export function TodoItemEdit(props) {

    // title store the title of the item
    const [title, setTitle] = useState(props.item.title);
    // reference to the textbox
    const textBoxInstance = useRef();

    const divInstance=useRef()

    useEffect(() => {
        textBoxInstance.current.focus();
        console.log(divInstance.current)
    }, [])

    return (
        <div>
            <div ref={divInstance}></div>
            <input type="text" ref={textBoxInstance} value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} />
            <div>
                <button onClick={() => {
                    // call the update function
                    props.onUpdate(props.item.id, title);
                }}>Update</button>
                <button onClick={() => { props.onCancel(props.item.id) }}>Cancel</button>
            </div>
        </div>
    )
}