import { useState,useEffect } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Api from "../axios/Api";
import {Link} from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const ListCategorie=()=>{
    const[cat,setCat]=useState([]);
    useEffect(() => {
        Api.get('/categorie').then(res=>{
            setCat(res.data)
            console.log(cat)
        })
        .catch(function(error){
            console.log(error)
        })
    })
    const deleteProd=(_id)=>{
      Api.delete('/categorie/'+_id)
      .then((res) => {
      console.log('successfully deleted!')
      }).catch((error) => {
      console.log(error)
      })
     } 


    return(
      <div>
       <button><Link exact to="/ajoutCategorie">Ajout</Link></button> 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom Categorie</StyledTableCell>
            <StyledTableCell>caracteristique</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cat.map((c) => (
            <StyledTableRow key={c._id}>
              <StyledTableCell component="th" scope="row">
                {c.nomcategorie}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {c.caracteristique}
              </StyledTableCell>
              <Link exact to={`/ModifCategorie/${c._id}`}>Modifier</Link>
              <br></br>
              <button onClick={()=>{deleteProd(c._id)}}>Supprimer</button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}
export default ListCategorie ;