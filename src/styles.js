import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const DetailWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  margin: auto;

  img {
    width: 30%;
    float: left;
    vertical-align: top;
    display: inline-block;
    text-align: center;
  }

  p {
    display: block;
  }
`;

export const Ranger = styled.div`
  margin-left: 35px;
`;

export const Wrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ProgressBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 25%;
  height: 20px;
`;

export const Bg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  hight: 20%;
`;

export const BackButton = styled.button`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  margin-left: 10px;
  border-radius: 1rem;
  color: #000;
  background-color: #0076af;
`;
