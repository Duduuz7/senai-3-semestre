import styled from "styled-components";


export const ButtonIncrement = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 85%;
    height: 43px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: green;
    opacity: 0.8;
`

export const ButtonDecrement = styled(ButtonIncrement)`
    background-color: red;
`