import React from "react";
import styled from 'styled-components';

type MineFieldProps = {
    children: React.ReactNode
};

const MineField = (props: MineFieldProps) => {
  return (
    <StyledMineField>
       {props.children}
    </StyledMineField>
  );
};

export default MineField;

// STYLES

const StyledMineField = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 20rem;
    margin: auto;
`;