//single selection
//multiple selection
import { useState } from "react"
import data from "./data"
import './style.css'

const Accordian = () =>{
    const [selected,setSelected] = useState(null);
    const [enableMultiSelection,setEnableMultiSelection] = useState(false);
    const [multiple,setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected? null :getCurrentId);

    }
    const handleMultiSelection = (getCurrentId) => {
        let multipleStates = [...multiple];
        const findIndexOfCurrentId = multipleStates.indexOf(getCurrentId);
        
        if(findIndexOfCurrentId === -1)
            multipleStates.push(getCurrentId);
        else
            multipleStates.splice(findIndexOfCurrentId,1);

        setMultiple(multipleStates);

    }

    return (
        <div className="wrapper">
            <h1 className="heading">Accordian</h1>
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>
                {
                    !enableMultiSelection?"Enable MultiSelection" :"Disable MultiSelection"
                }
            </button>
            
            <div className="accordian">
                    
                {
                    data && data.length>0 ?(
                        data.map((dataItem) => (<div key={dataItem.id} className="item">
                            <div onClick={
                                ()=>enableMultiSelection ?
                                (handleMultiSelection(dataItem.id))
                                :
                                (handleSingleSelection(dataItem.id))
                                } className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ? (
                                    multiple.indexOf(dataItem.id) !== -1 &&
                                    <div className="content">{dataItem.answer}</div>
                                ):(
                                    selected === dataItem.id &&
                                        <div className="content">{dataItem.answer}</div>                                  

                                )

                                
                            }
                        </div>))
                        ):(
                            <div>No data found</div>                    )
                }

            </div>
            
        </div>
    )
}
export default Accordian