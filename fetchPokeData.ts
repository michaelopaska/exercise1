import { request, gql, GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient('https://beta.pokeapi.co/graphql/v1beta', {
headers: {
    
},
});


async function getAllPokemon(){
    const query = gql`
    {
        pokemon_v2_pokemon(order_by: {name: asc}) {
            name
            id
        }
    }
    `;
    
    let response = await graphQLClient.request(query);
    
    return response;
}


let testvar = getAllPokemon();

testvar.then((value) =>{
    console.log(value);
})

