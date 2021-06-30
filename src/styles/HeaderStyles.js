import styled from 'styled-components'

const HeaderStyles = styled.header`
    background-color: #6282b6;
    color: white;
    padding: 15px;
    position: relative;
    h1{
        margin: 0 0 10px 0;
        @media(max-width: 700px){
            font-size: 20px;
        }
    }
    button{                
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-family: 'Roboto',sans-serif;
        font-weight: bold;
        width: 20%;
        max-width: 200px;
        font-size: 16px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media(max-width: 700px){
            width: 70%;
        }
    }
`

export default HeaderStyles;