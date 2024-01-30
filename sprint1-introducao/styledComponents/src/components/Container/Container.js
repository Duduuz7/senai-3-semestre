import styled from "styled-components";

export const ContainerCounter = styled.View`
    margin-left: 37px;
    height: 450px;
    width: 320px;
    align-items: center;
    justify-content: center;
    margin-top: 190px;
    padding-top: 10px;
    background-color: transparent;
    opacity: 0.9;
    border: 2px solid black;
    border-radius: 8px;
`

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
 colors: ['#eeaeca','#94bbe9'],
 start: { x: 0, y: 0 },
 end: { x: 1, y: 0 },
})`
 flex: 1;
`;

// export const Container = styled.View`
//     flex: 1;
//     background-color: darkblue
// `