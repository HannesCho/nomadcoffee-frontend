import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLinkBox = styled.div`
  text-align: center;
  font-size: 13px;
  margin-top: 10px;
  a {
    color: #fa5252;
    font-weight: 600;
    margin-left: 10px;
  }
`;

function LinkBox({ text, link, linkText }) {
    return (
        <SLinkBox>
            <span>{text}</span>
            <Link to={link}>{linkText}</Link>
        </SLinkBox>
    );
}

export default LinkBox;