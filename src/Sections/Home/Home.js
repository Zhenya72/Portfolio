import React from 'react'
import {Container} from 'react-bootstrap';
import './Home.scss'
function Home() {
  return (
    <section className="home" id="home">
        <Container>
            <div className="home_content">
                <h1>Hi, I'm Yevheniy</h1>
                <h3>Front-end developer</h3>
            </div>
        </Container>
    </section>
  )
}

export default Home;