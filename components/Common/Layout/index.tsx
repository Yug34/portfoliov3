import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: inherit;
`;

const MainContainer = styled.main`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <MainContainer>
                {children}
            </MainContainer>
        </LayoutContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
