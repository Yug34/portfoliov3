import type { NextPage } from 'next';
import styled from "styled-components";
import { resumeDetails } from "../../constants";

const Container = styled.div`
  width: 100%;
  background: #181818;
  color: white;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const HomePage: NextPage = () => {
    return (
        <Container>
            {resumeDetails.name}
        </Container>
    );
}

export default HomePage;
