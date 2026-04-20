export function Addition(){
  return <ul><li>list item 1</li></ul>
}

export function Child(props){
    return (
  <>
        <h1>{props.val} {props.name}</h1>
        <img src="#" alt="dummy"/>
  
  </>
    )
}

