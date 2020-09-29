import styled from 'styled-components';
import defaultBG from '../images/tents/tent-1.jpg';

const StyledBG = styled.header `
    min-height: 60vh;
    background: url(${props => props.img ? props.img : defaultBG}) center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default StyledBG;
