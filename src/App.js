import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";

function App() {
  const [commerce, setCommerce] = useState();
  useEffect(() => {
    fetch("https://api.npoint.io/7d7eb943d0ff6e3bf68b")
      .then((response) => response.json())
      .then((data) => {
        setCommerce(data);
        console.log(data);
        const title = data.cards.map((items) => items.title_en);
        console.log(title);
      });
  }, []);
  return (
    <div>
      {commerce ? (
        <ul>
          <h1 className="text-center">Welcome to our website</h1>
          {commerce.cards.map((items) => (
            <Cards items={items}></Cards>
          ))}
        </ul>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default App;
