import React from "react";
import styled from 'styled-components';

type MineCellProps = {
    index: number;
};

const MineCell = (props: MineCellProps) => {
  return (
    <StyledMineCell>
      {props.index}
    </StyledMineCell>
  );
};

export default MineCell;

// STYLES

const StyledMineCell = styled.button`
    border: 1px outset blue;
    background-color: lightBlue;
    height:50px;
    width:50px;
    cursor:pointer;
`;