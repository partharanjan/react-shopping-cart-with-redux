import { useState } from "react";
import CartLayout from "./cart/cart-layout";
import { ThemeContext, themes } from "./components/contexts/theme.context";
import { Todo } from "./components/todo";
import Layout from "./layout/layout";


function App() {
  // default theme is light
  const [theme, setTheme] = useState(themes.light);
  return (
    // <ThemeContext.Provider value={theme}>
    //   <div>
    //     <label>Change Theme To </label>
    //     <button onClick={()=>{setTheme(themes.light)}}>Light</button>
    //     <button onClick={()=>{setTheme(themes.dark)}}>Dark</button>
    //   </div>
    //   <ShoppingCart />
    // </ThemeContext.Provider>
    <Layout>
      <CartLayout/>
    </Layout>
  );
}

export default App;
