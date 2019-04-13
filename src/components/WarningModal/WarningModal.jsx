import React   from 'react';
import {Modal} from 'react-bootstrap';
import Assets  from '../../assets';

import './WarningModal.scss'

const WarningModal = props => {
  return (
    <Modal show={props.open} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter"
           centered>
      <Modal.Body><img src={Assets.Warning} alt="Warning!" onContextMenu={e => e.preventDefault()}
                       onClick={props.onHide}/></Modal.Body>
    </Modal>
  );
};

export default WarningModal;
