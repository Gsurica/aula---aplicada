import {Card, Button, CardActions, CardContent, Typography} from '@mui/material'

export interface ICardCompProps {
    titulo: string,
    conteudo: string,
    notas: string
}

const CardComp: React.FC<ICardCompProps> = ({titulo, conteudo, notas}) => {
    return(
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {conteudo}
          </Typography>
          <Typography variant="body2">
            {notas}.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained'>Apagar</Button>
          <Button size="small" variant='outlined'>Editar</Button>
        </CardActions>
      </Card>
    )
}

export default CardComp;