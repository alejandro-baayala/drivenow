import styled from "styled-components";

const SocialDiv = styled.div`
width:100%;
height:auto;
padding-top: 2rem;
padding-bottom: 2rem;
`

const Card = styled.div`
width: 35%;
padding-top: 1rem;
padding-bottom: 1rem;
height: auto;
border-radius: .3rem;
border: 2px solid gray;
display:flex;
margin-left: auto;
margin-right: auto;
`
const CardContent = styled.div`
width: 80%;
margin:auto;
`

const SocialProof = () => {
    return (
        <SocialDiv>
            <Card>
                <CardContent>
                <span>&quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vero, sapiente laboriosam eius vitae quod consequuntur accusamus laudantium nesciunt quae, incidunt blanditiis molestiae dolore dolor placeat explicabo quidem beatae excepturi?&quot;</span>
                </CardContent>
            </Card>
        </SocialDiv>
    );
}

export default SocialProof