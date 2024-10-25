import { useState } from "react";
import People from "./components/People";
import Planets from "./components/Planet";
import Starships from "./components/Starship";

const App = () => {
    const [dataType, setDataType] = useState("people");

    return (<div>
        <select onChange={(e) => setDataType(e.target.value.toLowerCase())} value={dataType}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
        </select>

        {dataType === "people" && <People />}
        {dataType === "planets" && <Planets />}
        {dataType === "starships" && <Starships />}
    </div>)
};

export default App;
