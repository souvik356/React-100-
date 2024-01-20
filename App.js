/**
 * <div id="parent">
 *    <div id="child">
 *       <h1>This is React</h1>
 *    </div>
 * </div>
 * <div id="parent1">
 *    <div id="child1">
 *       <h1>This is React</h1>
 *    </div>
 * </div>
 */


const parent=React.createElement("div",{id: "parent"},
 React.createElement("div",{id:"child"},
 [React.createElement("h1",{},"This is React"),
 React.createElement("h2",{},"This is React2")],
 React.createElement("div",{id:"parent2"},
 React.createElement("div",{id:"child2"},
 [React.createElement("h1",{},"This is React"),
 React.createElement("h2",{},"This is React2")],))
 )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);