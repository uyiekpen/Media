import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modales() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p type="button" onClick={handleOpen} style={{
        color: "white", display: "flex", justifyContent: "center", alignItems: "center",
        fontSize: "20px", fontWeight: "lighter"
      }}>
        Contact
      </p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">CONTACT</h2>
            <p id="transition-modal-description">Name: Uyiekpen Osazie Elizabeth <br />
             Email: Uyiekpenelizabeth@gmail <br />
             Facebook: Osazie Elizabeth Uyiekpen <br />
             instagram:Omi_uyi
             Tel:07060967446, 07042328243
              </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
