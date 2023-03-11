import { useEffect, useState } from "react";
import "./StateResults.css"
import axios from 'axios';

const StateResult = () => {

    const [states, setStates] = useState([])
    const getStateResult = async() => {
       const response = await axios.get( "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result")
    const results = []
    const keys = Object.keys(response.data)
    keys.forEach((key, index) => {
        results.push( response.data[key].sort((a,b)=>a.political_party_name.localeCompare(b.political_party_name)))
    });
   
   console.log(results);
       setStates(results)
    }
   function getInitials(names){
    const nameArray =names.split(" ")
    let init = ""
    nameArray.forEach((name=>{
        init+=name[0]
    }))
    return init
   }

    useEffect(()=>{
        getInitials("all people congress")
        getStateResult()
    }, [])
    return ( 
        <div className="state-div">
           <div className="state-div-header"> <h2>State Results</h2></div>
            <div className="table">
                <div className="table-left">
                <table>
                    <tr>
                        <th>States</th>
                        <th>APC</th>
                        <th>LP</th>
                        <th>PDP</th>
                        <th>Leading</th>
                    </tr>
                    {states.map((state,index)=> <tr className={index}>
                    <td>{state[0].state_name}</td>
                    
                        <td>{state[0].candidate_votes}</td>
                        <td>{state[1].candidate_votes}</td>
                        <td>{state[2].candidate_votes}</td>
                        <td>{getInitials(state.reduce((a,b)=>(a.candidate_votes>b.candidate_votes)?a:b).political_party_name)}</td>

                    </tr>)}
                    <tr>
                        <td></td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
     );
}
 
export default StateResult;