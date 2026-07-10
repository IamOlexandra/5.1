import Recipes from "./components/Recipes";
import data from "./data.json";

function App() {
  return (
    <Recipes data={data}/>
  );
}

export default App;