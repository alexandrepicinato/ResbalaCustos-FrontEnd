import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ResbalaApi from "../../service/api";
import { ProductCardStyles, ProductRow } from "./styled";
import { ButtomStyles } from "../../content/parameters/buttons";
import { AccessToken } from "../../content/parameters/tokengeneratos";

export default function ProductsList (){
    const [ProductsList, setProductsList] = useState([])
    useEffect(() => {
        ResbalaApi
          .get("/productslist?token="+AccessToken)
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
                                            window.location.href="/produto/"+produto.id+"?token="+AccessToken
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