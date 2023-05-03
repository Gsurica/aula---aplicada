import { Grid } from "@mui/material"
import CardComp from "../Card"
import { IRecado } from "../../config/models/Recado"

export interface ICardListProps {
  recados: IRecado[]
}

export const CardList: React.FC<ICardListProps> = ({ recados }) => {
  return (
    <Grid container flexDirection={'column'} alignItems='center' spacing={4} marginTop={2}>
      { recados.map(item => (
        <Grid item>
          <CardComp 
            key={item.id}
            titulo={item.titulo}
            conteudo={item.conteudo}
            notas={item.notas}
          />
        </Grid>
      )) }
    </Grid>
  )
}