import React from 'react';
import { Button, UncontrolledPopover, PopoverBody } from 'reactstrap';

function DisplayInfo(props) {
  return (
    <>
      <Button id={props.info} color={props.colorButton} outline>
        {props.info}
      </Button>
      <UncontrolledPopover
        placement='bottom'
        target={props.info}
        trigger='focus'
      >
        <PopoverBody>{props.body}</PopoverBody>
      </UncontrolledPopover>
    </>
  );
}

export default DisplayInfo;
