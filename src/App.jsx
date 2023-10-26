import { useState } from "react";
import { Footer, Header, Main } from "./comp";
import Logo from "./assets/logo.svg?react";
function App() {
  const [cart, setCart] = useState(0);
  const [checkOut, setCheckout] = useState(0);
  const [result, setResult] = useState("");
  const plus = () => {
    setCheckout(checkOut + 1);
  };
  const minus = () => {
    setCheckout(checkOut <= 0 ? 0 : checkOut - 1);
  };
  const addCart = () => {
    setCart(checkOut);
    const total = 125 * checkOut;
    setResult(total.toFixed(2));

    console.log({ res: result });
  };
  const clear = () => {
    setCart(0);
    setResult(0);
    setCheckout(0);
  };

  return (
    <>
      <div className="w-full h-screen px-20 font-sans py-0 ">
        <Header logo={<Logo />} cart={cart} result={result} clear={clear} />
        <Main
          handleMinus={minus}
          handlePlus={plus}
          cart={checkOut}
          addCart={addCart}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
