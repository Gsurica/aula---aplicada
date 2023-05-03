import { Button, Grid, TextField } from "@mui/material"
import { useState, useEffect } from 'react'
import database from "../../config/database"
import { IRecado } from "../../config/models/Recado"
import { v4 as uuidv4 } from 'uuid';
import CardComp from '../../components/Card'
import { CardList } from "../../components/CardList";

export const Home = () => {

  const [titulo, setTitulo] = useState<string>('')
  const [conteudo, setConteudo] = useState<string>('')
  const [notas, setNotas] = useState<string>('')

  const [recados, setRecados] = useState<IRecado[]>([])

  useEffect(() => {
    setRecados(JSON.parse(localStorage.getItem('lista') as string) ?? [])
  }, [])

  const adicionar = ({ titulo, conteudo, notas }: IRecado) => {

    const recado = {
      id: uuidv4(),
      titulo,
      conteudo,
      notas
    }

    database.push(recado)

    setRecados(JSON.parse(localStorage.getItem('lista') as string) ?? [])
    localStorage.setItem('lista', JSON.stringify(database))

  }

  const deletar = () => {

  }

  return (
    <>
      <Grid container spacing={4} justifyContent={'center'}>
        <Grid item>
          <TextField 
            placeholder="Titulo"
            onChange={tituloOnchange => setTitulo(tituloOnchange.currentTarget.value)}
            value={titulo}
          />
        </Grid>
        <Grid item>
          <TextField 
            placeholder="Conteudo"
            onChange={conteudoOnChange => setConteudo(conteudoOnChange.currentTarget.value)}
            value={conteudo}
          />
        </Grid>
        <Grid item>
          <TextField 
            placeholder="Notas"
            onChange={notasOnChange => setNotas(notasOnChange.currentTarget.value)}
            value={notas}
          />
        </Grid>
        <Grid item sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Button
            variant='contained'
            onClick={() => adicionar({titulo,conteudo,notas})}
          >
            Registrar
          </Button>
        </Grid>
      </Grid>
      <CardList 
        recados={recados}
      />
    </>
  )
}