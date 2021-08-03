import styled from 'styled-components';

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: rgba(78, 89, 131, 0.5);

  @supports (backdrop-filter: blur(5px)) or (--webkit-backdrop-filter: blur(5px)) {
    & {
      backdrop-filter: blur(10px);
    }
  } //desfoque do fundo

  z-index: 999; // ficar alto encima dos outros nós
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% -144px); //aplica o valor resultante 144 < na altura
  width: 500px;
  padding: 24px;
  background-color: #ffff;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2); //sombreamento
  border-radius: 8px;
`;
