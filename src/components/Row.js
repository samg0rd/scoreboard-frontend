import React from 'react';

const Row = ({player}) => {
    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.points}</td>
        </tr>                
    );
};

export default Row;