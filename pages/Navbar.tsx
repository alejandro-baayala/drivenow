import styled from 'styled-components'

const Nav = styled.div`
display: flex;
border-bottom: 1px thin blue;
padding-left: 6rem;
padding-right: 2rem;
`

const Zip = styled.div`
margin-left: auto;
display: flex;
position:relative;
margin-top: auto;
margin-bottom: auto;
padding-left: 1rem;
padding-right: 1rem;
`

const Title = styled.h1`
font-size: 1.7rem;
padding-top: .5rem;
padding-bottom: .5rem;
margin: 0;
`

const Navbar = () => {
    return (
    <Nav>
        <Title>DRIVENOW</Title>
            <Zip>
                <form action="">
                    <input id="navZipCode" autoComplete='navZipCode' type="text" />
                </form>
            </Zip>
    </Nav>
    );
}

export default Navbar