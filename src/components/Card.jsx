import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TextExample() {
  return ( 
    <Container>
    <Row xl="auto">
    <Col lg="auto">
    <Card style={{ width: '22rem'}}>
        <Card style={{height:'25rem'}}>
        <Card.Img variant="top" height='200rem' src="https://s2-techtudo.glbimg.com/WyiJ2MpwLRhw_b2vtYlevgnbyXc=/0x0:1920x1280/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/T/Y/wUomKeR0isfKrBxCkuBQ/los-grandes.jpg" />
          <Card.Body>
        <Card.Title>Mercado Mundial de Games</Card.Title>
        <Card.Text>
            Um estudo realizado estima que o mercado de jogos gerará receita de US$ 187,7 Bi em 2024, com crescimento anual de 2,1% e atingindo 3,42 Bi players.
        </Card.Text>
        <Card.Link href="https://www.meioemensagem.com.br/marketing/mercado-de-games-deve-atingir-receita-global-de-us-1877-bi-em-2024#:~:text=bi%20em%202024-,Mercado%20de%20games%20deve%20atingir%20receita%20global%20de,187%2C7%20bi%20em%202024&text=Um%20estudo%20realizado%20pela%20Newzoo,players%20de%203%2C42%20bilh%C3%B5es.">Meio Mensagem</Card.Link>
      </Card.Body>
    </Card>
    </Card>
    </Col>
    <Col lg="auto">
    <Card style={{ width: '22rem' }}>
    <Card style={{height:'25rem'}}>
        <Card.Img variant="top" height='200rem' src="https://img.odcdn.com.br/wp-content/uploads/2023/08/Samsung-OLED-G9-2-2048x1159-1-1920x1080.webp" />
          <Card.Body>
        <Card.Title>Mercado de Games no Brasil</Card.Title>
        <Card.Text>
            Atualmente é o maior mercado de games da América Latina e está entre os 10 maiores do mundo. Em 2022, o país teve uma receita de US$ 2,3 Bi no setor.
        </Card.Text>
        <Card.Link href="https://veja.abril.com.br/economia/industria-de-games-no-brasil-cresceu-sete-vezes-em-dez-anos">Veja</Card.Link>
      </Card.Body>
    </Card>
    </Card>
    </Col>
    <Col lg="auto">
     <Card style={{ width: '22rem' }}>
     <Card style={{height:'25rem'}}>
        <Card.Img variant="top" height='200rem' src="https://wallpapers.com/images/high/digital-3d-gamer-text-zy9zp40hoybkqygw.webp" />
          <Card.Body>
        <Card.Title>A Dor do Gamer</Card.Title>
        <Card.Text>
            Os principais games disponíveis no mundo estão em inglês, o que dificulta o uso, principalmente no Brasil, uma vez que somente 5% da população fala inglês.
        </Card.Text>
        <Card.Link href="#">Link</Card.Link>
      </Card.Body>
    </Card>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default TextExample;