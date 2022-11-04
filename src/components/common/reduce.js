import { useEffect, useState } from "react";

export function Reduce() {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let items = [10, 20, 30, 40, 50, 60];
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i];
        }
        setTotal(sum)

        // reduce array
        const x = items.reduce((prev, cur) => {
            // un 10 = 10
            // 10 20 =30
            // 30 30 =60
            return prev+cur;
        });

        console.log(x)

    }, [])

    return (
        <div>
            <h1>Reduce</h1>
            Total {total}
        </div>

    )
}