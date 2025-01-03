import React from "react";
import Card from "./Card";
import sdata from "./sdata";


const App = () => (
<>
<h1 className="head-style">List of Series in Netflix
</h1>
{sdata.map((val, index) => {
    console.log(index);
    return(
    <Card
    key={val.id}
    imgsrc={val.imgscr}
    title={val.title}
    sname={val.sname}
    link={val.links}
/>
);
})}
</>
);
export default App;