import './App.css';
import {useState, useEffect} from 'react'
import Scoreboard from './components/Scoreboard';
import AddRow from './components/AddRow';
import Header from './components/Header'

const URL = 'https://shielded-mountain-21979.herokuapp.com'

function App() {
  const [playersData,setPlayersData] = useState(null)
  const [resetForm, setResetForm] = useState(false)

  useEffect(()=>{
    fetch(`${URL}/players`,)
    .then(res=>res.json())
    .then(data=>{      
      setPlayersData(data.players)
    })
    .catch(err=>console.log(err))
  },[])

  const addPlayer = (name,points) => {
    setResetForm(false)
    const data = {
      name,
      points: parseInt(points)
    }
    fetch(`${URL}/players`, {
      method: 'post',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {      
      setResetForm(true)
      const updatedData = [...playersData, data.player]
      setPlayersData(updatedData)
    });
  } 

  const sortByScore = () => {    
    let sortedPlayers = [...playersData]
    sortedPlayers.sort((a,b)=>{
      if(a.points > b.points){
        return -1
      }else{
        return 1
      }
    })
    setPlayersData(sortedPlayers)
  }

  return (
    <div className="App">
      <Header sortByScore={sortByScore}/>
      {playersData === null ? <p>Loading...</p> : (
        <>
        <Scoreboard data={playersData}/>
        <AddRow addPlayer={addPlayer} resetForm={resetForm}/>      
        </>
      )}
    </div>
  );
}

export default App;
