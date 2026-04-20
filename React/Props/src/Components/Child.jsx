import Component1 from "./Component1";

function Child({count}){
    return (
        <>
         <h2>Count : {count}</h2>
         <Component1 count={count}/>
        
        </>
    )
}

export default Child;