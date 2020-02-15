import React,{useState,useEffect} from 'react';
import axios from 'axios';

const UseResource = (resourceToList) =>{
    const [resources,setResources] = useState([]);

    useEffect(() => {
        (async(resourceToList)=>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceToList}`);
            setResources(response.data)})(resourceToList)
    }, [resourceToList]);

    return resources;
}
    const ResourceList_copy_resue = ({resourceToList}) =>{  //resourceToList we get either a post or todos (props)
   const resources = UseResource(resourceToList)
    return(
        <div>
            <ul>
            {resources.map((records) =>{
                return <li key={records.id}>{records.title}</li>
            })}
            </ul>
            
        </div>
    )
}
export default ResourceList_copy_resue