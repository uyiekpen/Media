import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Nav from '../CallHeader/Nav';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  table: {
    minWidth: "450px",
    marginTop: "90px",
    border: "3px",
    fontSize: "20px",
    fontFamily: "poppins",

  },

});

function createData(Name, Duration, Listener, Date, click) {
  return { Name, Duration, Listener, Date, click };
}

const rows = [
  createData('Social Self Care', "05:30", 10, '11/29/20', <Link to="/Social"><PlayArrowIcon /></Link>),
  createData('Emotional Self Care', '08:45', 2, '11/29/20', <Link to="/Emotions" ><PlayArrowIcon /></Link>),
  createData('One-Sided Love', '08:45', 2, '11/29/20', <Link to="/Side"><PlayArrowIcon /></Link>),
  createData('5 best thing to have in a,relationship', '08:45', 2, '11/29/20', <Link to="/audio"><PlayArrowIcon /></Link>),
];

export default function BasicTable() {
  const classes = useStyles();

  return (

    <div>
      <Nav />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME OF EPISODE</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align="right">Listener</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">click</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Name}>
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.Duration}</TableCell>
                <TableCell align="right">{row.Listener}</TableCell>
                <TableCell align="right">{row.Date}</TableCell>
                <TableCell align="right">{row.click}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
