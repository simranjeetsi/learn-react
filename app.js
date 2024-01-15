import React from "react";
import ReactDOM  from "react-dom/client";

// react element using core React
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Hello World"
);

// creating using  JSX

const jsxHeading = <h1 className="head">Creating heading with JSX</h1>


// React Component
// Class Based Component = OLD
// Functional Component = NEW


// React Fuctional component


const TitleComponent = () => {
    return <h3>Title Component</h3>
}

// const HeadingComponent = () =>{
//     return <div><h1>Functional Component</h1><TitleComponent /></div>;
// }


const HeadingComponent = () =>(
    <div>
        <h1>Functional Component</h1>
        <TitleComponent />
    </div>
);

// const HeadingComponent = () =>(
//     <div>
//         <h1>Functional Component</h1>
//         <TitleComponent ></TitleComponent>
//     </div>
// );

// const HeadingComponent = () =>(
//     <div>
//         <h1>Functional Component</h1>
//         {TitleComponent()}
//     </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

root.render(<HeadingComponent />);