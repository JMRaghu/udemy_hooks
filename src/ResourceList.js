import React,{useState,useEffect} from 'react';
import axios from 'axios';
//const ResourceList = (props) =>{
    //console.log(props)
    const ResourceList = ({resourceToList}) =>{  //resourceToList we get either a post or todos (props)
        //console.log(resourceToList)
    const [resources,setResources] = useState([])
    /* const fetchResource=async(resourceToList)=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceToList}`);
        setResources(response.data);
    }
    useEffect(() => {
        fetchResource(resourceToList)
    }, [resourceToList])
 */
    //second step
    useEffect(() => {
        (async(resourceToList)=>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceToList}`);
            setResources(response.data)})(resourceToList)
    }, [resourceToList])
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
export default ResourceList