import { useState } from "react";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ProductList from "./component/ProductList";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );
  return content;
}

export default App;
