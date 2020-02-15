import React, {useState} from 'react'
//import ResourceList from '../src/ResourceList'
import UseResource from '../src/ResourceList_copy_resue';
import UserList from '../src/UserList'
const App = () =>{

    /* 
    ez:
    const color=['red','green'];

    const mycolorOne = color[0];//red
    const mycolorTwo = color[1];//green
    or
    const [colorThree,colorFour] = color //red, green
   */
  //resource =firstelement contais currentValue called any name(this.state.resource)
  //setResource = setter function->value equvalent to setState(this.setState{(resource:'posts')})
   const[resource,setResource] = useState('posts')//Array Destructuring
   
    return(
        <div>
            <UserList/>
            <div>
                <button onClick={()=>setResource('posts')}>Post</button>
                <button onClick={()=>setResource('todos')}>Todo</button>
            </div>
            {/* <ResourceList resourceToList={resource}/> */}
            <UseResource resourceToList={resource}/>
        </div>
    )
}
export default App;