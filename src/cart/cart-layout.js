import { Grid } from "@mui/material";
import Cart from "./cart";
import Product from "./product";

export default function CartLayout() {

    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <Product/>
            </Grid>
            <Grid item md={4}>
                <Cart/>
            </Grid>
        </Grid>
    )
}