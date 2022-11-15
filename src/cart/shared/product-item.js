import ProductQunatity from "./product-qty";

export default function ProductItem(props) {
    const { product } = props;
    return (
        <div style={
            {
                display:'flex'
            }
        }>
            <div>
                <strong>{product.title}</strong>
                <div>{product.price}</div>
                <p>{product.description}</p>
            </div>
            <div>
                <ProductQunatity product/>
            </div>
        </div>
    )
}