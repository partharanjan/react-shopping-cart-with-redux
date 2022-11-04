import { useMemo } from "react";

function getTotalDuplicateChars(str) {
    if (str) {
        console.log(str);
        // complex part
        return str.toLowerCase().split('').sort().join('').match(/(.)\1+/g)?.length;
    }
    return 0;
}

export function TodoItemView(props) {

    const totalCharCount=useMemo(()=>getTotalDuplicateChars(props.item.title),[props.item.title]);

    return (
        <div>
            <input type="checkbox" checked={props.item.completed} onChange={() => {
                props.onComplete(props.item.id)
            }} />
            <label>{props.item.title}</label>
            <span> | Duplicate Chars. {totalCharCount} </span>
            <div>
                <button onClick={() => {
                    props.onEdit(props.item.id);
                }}>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}