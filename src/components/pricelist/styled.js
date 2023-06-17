import styled from "styled-components";


const PriceListContainer = styled.div `
    display: flex;
    -webkit-box-pack: center;
    justify-content: flex-start;
    flex-direction: column;
    align-content: flex-start;
    align-items: center;

h2{
    text-align: center;
    font-size: 2em;
}
`
const ProductTable = styled.table `
    width: 100%;
    padding: 10%;
    background-color: rgb(255,255,255);
    border-radius: 25px;
    tbody > tr> td {
        max-width: 50VW;
        color: rgb(223, 25, 25);
        width: 50%;
    }
    h3{
        font-size:2em;
    }
    `

export {
    PriceListContainer,
    ProductTable,
}