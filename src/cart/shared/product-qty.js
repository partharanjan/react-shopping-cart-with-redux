import { useState } from "react";

export default function ProductQunatity(props) {

    const [qty, setQty] = useState('');

    const onPlus = () => {
        let itemQty = parseInt(qty);
        itemQty = isNaN(itemQty) ? 1 : ++itemQty;
        // qnty check for 10 max allow
        if (itemQty <= 10) {
            setQty(itemQty);
        }
    }

    const onMinus = () => {
        let itemQty = parseInt(qty);
        itemQty--;
        setQty(itemQty <= 0 ? '' : itemQty);
    }

    const onChange = (e) => {
        setQty(e.target.value)
    }

    return (
        <div style={
            {
                display: 'flex'
            }
        }>
            <button onClick={onMinus} disabled={!qty}>-</button>
            <input style={{ width: '80px' }} value={qty} onChange={onChange} />
            <button onClick={onPlus}>+</button>
        </div>
    )
}