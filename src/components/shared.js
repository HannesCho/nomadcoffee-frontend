import styled from "styled-components";

export const BaseBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

export const FatLink = styled.span`
  font-weight: 600;
  color: rgb(142, 142, 142);
`;

export const Header = styled.div`
padding-top: 60px;
min-width: 375px;
text-align: center;
`;

export const Wrapper = styled.div`
  max-width: 492px;
  min-width: 375px;
  min-height: 100vh;
  padding: 0 16px 200px;
  margin: 0 auto;
`;