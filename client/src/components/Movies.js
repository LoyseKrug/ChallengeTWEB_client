import React, { Component } from 'react';
import Movie from './Movie';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const queryMovies = gql`
{
  movies(offset: 0, limit: 20){
    id
    title
    release_date
    poster_path
  }
}
`

class Movies extends Component {
    render() {

        return (
            <div>
                <Query query={queryMovies}>
                    {({ data, loading, error }) => {
                        if (error) return 'Oups an error occured. Please check the console'
                        if (loading) return 'Loading...'
                        const movies = data.movies
                        const movieList = movies.map(movie => {
                            return(
                                <Movie movie={ movie }/>
                            );
                        });
                        return <div>
                            { movieList }
                        </div>
                    }}
                </Query>
            </div>  
        );
    }
}

export default Movies;