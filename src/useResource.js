import {useState,useEffect} from 'react';
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
export default UseResource;