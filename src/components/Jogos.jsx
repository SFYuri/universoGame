const apiKey = import.meta.env.VITE_API_KEY
import {useState, useEffect} from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Jogos(){

    var url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2023-01-01,2023-06-30&ordering=-added`
    const [jogos, setJogos] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => {
      setLoading(true)  
      fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
        })

        .then(data => {
            setJogos(data.results)
            setLoading(false)
        })

        .catch(error => {
            console.error("Error fetching game data:", error)
            setError(error)
            setLoading(false)
        })
    }, [url])

    if (loading){
        return <div>Carregando jogos...</div>
    }

    if (error){
        return <div>Error: {error.message}</div>
    }
    
  return(
    <>
    <div class="container"> 
        <div class="">
            {jogos.map(jogo => (
                <Row xl="auto">
                <Col lg="auto">
                <Card key={jogo.id} style={{ width: '22rem', marginBottom: '1rem' }}>
                    <Card.Img variant="top" height="200px" src={jogo.background_image || ''} alt={jogo.name} />
                    <Card.Body>
                        <Card.Title>{jogo.name}</Card.Title> 
                        <Card.Text>
                            {/* Display other game properties */}
                        </Card.Text>
                        <Card.Link href={jogo.website || ''}>Game Page</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
               

            ))}
            </div>
        </div>

    );
    </>
  )

} 

export default Jogos

