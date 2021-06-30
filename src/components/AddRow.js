import React, {useState, useEffect} from 'react';
import FormStyles from '../styles/FormStyles';

const AddRow = ({addPlayer, resetForm}) => {

    const [name, setName] = useState("")
    const [points, setPoints] = useState("")    
    const [showError, setShowError] = useState(false)

    useEffect(()=>{
        setName("")
        setPoints(0)
        setShowError(false)
    },[resetForm])

    return (
        <FormStyles onSubmit={(e)=>{
            e.preventDefault()
            if(name.length <= 0){
                setShowError(true)                
            }else{
                addPlayer(name,points)
            }            
        }}>
            {showError && <p>Name Field is REQUIRED</p>}
            <label htmlFor="name">
                Player's Name
                <input type="text" id="name" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Player's Name"/>
            </label>
            <label htmlFor="points">
                Scored Points
                <input type="number" id="points" onChange={(e)=>setPoints(e.target.value)} value={points} placeholder="Scored Points"/>
            </label>
            <button type="submit">Add</button>
        </FormStyles>
    );
};

export default AddRow;