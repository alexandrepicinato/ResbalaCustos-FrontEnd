import styled from "styled-components";


const ProductCardStyles = styled.div `
padding: 3%;
margin: 1%;
float: left;
border-radius:25px;
background-color: rgba(255, 255, 244, 0.9);



img {
    max-width: 50vw;
    width: 100%;
    border-radius: 100%;
    aspect-ratio: 1/1;
}
h4{
    font-family: Arial, Helvetica, sans-serif;
}
`
const ProductRow = styled.div `
background-color: rgba(247, 247, 244, 0.9);

.productsRow{
    display: grid;
    border-radius:25px;
    grid-template-columns: repeat(3,1fr);
    width: 100%;
}
@media only screen and (max-width: 500px) {
    .productsRow{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        width: 100%;
    }
  }
@media only screen and (hover: none) and (pointer: coarse){
    .productsRow{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        width: 100%;
        justify-content: center;
    }
  }`
export {
    ProductCardStyles,
    ProductRow
}