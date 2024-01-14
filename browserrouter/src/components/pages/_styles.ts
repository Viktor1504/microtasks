import {styled} from 'styled-components';

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px;
    gap: 20px;
    font-size: 40px;
`

const Nav = styled.div`
    margin-left: 10px;
    font-size: 40px;

    & a {
        text-decoration: none;
        color: #b4b2b2;
    }

    & a.active {
        color: black;
        font-weight: bold;
    }

    & a:hover {
        color: #726969;
    }
`

export const S = {
    NavWrapper, Nav
}