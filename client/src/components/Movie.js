import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Movie extends Component {
    state = {
        selected: false
    }

    render() {
        const { movie } = this.props
        const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        return (
            <Container className="movie" key={movie.id}>
                <Row>
                    <Col>
                        <img src= {posterUrl} alt={movie.title} height={200} width="auto"/>
                    </Col>
                    <Col>
                        <Row> Title: <b onClick={ () =>{
                                if (this.state.selected){
                                    this.setState({selected:false})  
                                } else {
                                    this.setState({selected:true})
                                }
                            }
                        }>{ movie.title }</b> 
                        </Row>
                        <Row> Release date: {movie.release_date}</Row>
                        <br/>
                    </Col>
                </Row>               
            </Container>
        );
    }
}

export default Movie;