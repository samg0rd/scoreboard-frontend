import React from 'react';
import Row from './Row'

const Scoreboard = ({data}) => {    
    return (
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(player=><Row player={player} key={player._id}/>)
                }                
            </tbody>
        </table>
    );
};

export default Scoreboard;