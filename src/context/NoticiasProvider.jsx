import axios from "axios";
import { useState,useEffect, createContext } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('sports')
    const [noticias,setNoticias] = useState([])
    const [pagina,setPagina] = useState(1);
    const [totalNoticia,setTotalNoticia] = useState(0);
    const pais = 'US'

    useEffect(() =>{
        const consultarAPI = async () =>{
           const  url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)

            setNoticias(data.articles)
            setTotalNoticia(data.totalResults)
            setPagina(1)
        }

        consultarAPI()

    },[categoria])

    useEffect(() =>{
        const consultarAPI = async () =>{
             const  url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)

            setNoticias(data.articles)
            setTotalNoticia(data.totalResults)
        }

        consultarAPI()

    },[pagina])
    
    const handleChangeCategoria = e =>{
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e,valor) =>{
        setPagina(valor)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticia,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export{
    NoticiasProvider
}

export default NoticiasContext
