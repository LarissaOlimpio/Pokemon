# Pokedex

## Introdução

Pokédex (palavra comum no vocabulário dos amantes de Pokémon) é uma enciclopédia virtual que contém várias espécies de pokémon.
Neste projeto podemos visualizar 251 pokemons e consultar informações sobre eles clicando no botão de detalhes, além de conter página sobre o projeto e 404 personalizada. 
Os dados  e as imagens dos pokemons encontrados na página inicial e em detalhes, são carregados por meio de duas API, sendo assim, para fazer a pré renderização, utilizei as funções getStaticProps e getStaticPath do Next.Js, possibilitando assim a geração de páginas estáticas a partir de geração de arquivos HTML e JSON no momento da compilação do projeto.

| :placard: Pokedex |     |
| -------------  | --- |
|:label: Tecnologias | React, JavaScript, Html5, CSS3 e Next.Js (tecnologias utilizadas)|
| :rocket: URL         | https://pokemon-qene.vercel.app/

> Status do projeto: Em desenvolvimento

![pokedex](https://github.com/LarissaOlimpio/pokemon/assets/50180854/1b36a369-03f9-4ef6-8f63-6bdb0bc49d83#vitrinedev)


### Como rodar o projeto:

**Você pode clonar o projeto e rodá-lo localmente seguindo os passos abaixo**

1. `git clone https://github.com/LarissaOlimpio/pokemon.git` para clonar o projeto
2. `yarn` ou `npm install` para instalar as dependências do projeto
3. `yarn run dev` ou `npm run dev` para rodar o projeto
4. Acessar [http://localhost:3000](http://localhost:3000) no navegador


**Este é um projeto Next.js inicializado com create-next-app, para saber mais acesse a documentação: https://nextjs.org/**


Link das api utilizadas no projeto:


- [PokéAPI](https://pokeapi.co/) - dados dos pokemons
- `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` - Imagens 
