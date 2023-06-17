import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { ButtomStyles } from "../../content/parameters/buttons";
import { AccessToken } from "../../content/parameters/tokengeneratos";
import ResbalaApi from "../../service/api";
import { ProductCardStyles, ProductRow } from "../products/styled";


export default function SearshResult (){

    const location = useLocation();
    const [ProductsList, setProductsList] = useState([])
    const selectedProduct = location.pathname.split("/")[2]

    useEffect(() => {
        ResbalaApi
          .get("/busca/produto/"+selectedProduct+"/?token="+AccessToken)
          .then((response) => setProductsList(response.data))
          .catch((err) => {
            console.error("Falha ao Listar Itens" + err);
          });
      }, []);
      console.log(ProductsList)

    return(
        <>
        <section>
            <div>
                <h2 style={{
                    margin:"4%"
                }}>Produtos Monitorados </h2>
            </div>
            <div>
                <ProductRow>
                    <div className="productsRow">
                        {
                            ProductsList.map ((produto)=>(
                                <>
                                <ProductCardStyles>
                                    <img src={produto.productimage} />
                                    <h4>{produto.productname}</h4>
                                    <ButtomStyles className={"button"}>
                                        <button className={"bt btgold"} onClick={function() {
                                            window.open("/produto/"+produto.id)
                                        }}>Buscar Preços</button>
                                    </ButtomStyles>
                                </ProductCardStyles>
                                </>
                            ))
                        }
                    </div>
                </ProductRow>
            </div>
        </section>
        </>
    )
}