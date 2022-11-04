import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
export default function Product() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                // set the products
                setProducts(data);
                // loading false
                setLoading(false);
            }
            catch (e) {
                console.log(e);
                setLoading(false);
                // error view 
            }
        })();
    }, [])

    return (
        <div>
            <h1>Products</h1>
            {loading && <CircularProgress />}
            {!loading && <h1>{products.length}</h1>}
        </div>
    )
}