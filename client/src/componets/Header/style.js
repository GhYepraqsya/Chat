import styled from 'styled-components';

export const NavBar = styled.nav`
    width: 100%;
`;

export const NavBarBody = styled.ul`
    width: 100%;
    height: 80px;
    background: #3f51b5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
`;

export const NavBarElement = styled.li`
    list-style: none;
    padding: 9px 22px;

    a{
      color: white;
      text-decoration: none;
      font-family: "Roboto Reguliar";   
    }
}
`;