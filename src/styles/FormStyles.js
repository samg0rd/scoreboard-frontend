import styled from 'styled-components'

const FormStyles = styled.form`    
    border: 1px solid silver;
    width: 70%;
    display: flex;
    flex-direction: column;       
    padding: 10px;    
    margin: 10px auto;    
    label{
        display: flex;
        flex-direction: column;
        font-size: 13px;
        text-align: left;
        font-weight: bold;
        margin: 5px 0;
    }
    input{
        padding: 10px;
        margin: 10px 0;
    }
    button{        
        cursor: pointer;
        background: #abe1af;        
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-family: 'Roboto',sans-serif;
        font-weight: bold;
        width: 50%;        
        font-size: 16px;
        padding: 5px;
        margin: 0 auto;
    }
`

export default FormStyles;