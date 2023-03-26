import React from 'react'
import {Grid, Typography}from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticias from './Noticias'
import { Pagination,Stack } from "@mui/material"

const ListadoNoticias = () => {

    const { noticias,totalNoticia,handleChangePagina,pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticia / 20);

    return (
        <>
            <Typography 
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Ultimas Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >
                { noticias.map(noticia => (
                    <Noticias 
                        key={noticia.url}
                        noticia={noticia} 
                    />
                )) }
            </Grid>
            
            <Stack 
                spacing={2}
                direction={'row'}
                justifyContent='Center'
                alignItems='center'
                sx={{
                    marginY: 5
                }}
            >
                <Pagination 
                    count={totalPaginas} 
                    color="primary"
                    onChange={handleChangePagina} 
                    page={pagina}
                />
            </Stack>
        </>
    )
}

export default ListadoNoticias