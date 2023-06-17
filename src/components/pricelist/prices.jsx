import React from  'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ButtomStyles } from '../../content/parameters/buttons';
import { AccessToken } from '../../content/parameters/tokengeneratos';
import ResbalaApi from '../../service/api';
import ProductsList from '../products';
import { PriceListContainer, ProductTable} from './styled';
 
function ProductDashboard(){
    const location = useLocation();
    const history = useHistory();
    const selectedProduct = location.pathname.split("/")[2]
    const [Prices, setPriceList] = useState(
        {"product":[{"id":1,"productname":"","productimage":"","token":"","descriptions_product":""}],"prices":[{"empresa":[{"id":1,"corporation_name":"Brasao Supermercados","buzzinelogo":"","corporative_site":"","filtrerTag":""}],"price":"0.00","CaptiveTime":"2023-03-26T02:00:51.000000Z","captive_link":""},]
    })
    useEffect(() => {
        ResbalaApi
          .get("/consultoria/produto/"+selectedProduct+"?token="+AccessToken)
          .then((response) => setPriceList(response.data))
          .catch((err) => {
            console.error("Falha ao Carregar o Conteudo " + err);
          });
      }, []);
      console.log(Prices)
    var PriceData = Prices.prices
    console.log(PriceData)
    return(
        <>
        <section>
            <div>
                <h2 style={{
                    margin:"4%"
                }}>Preços Localizados </h2>
            </div>
            <div>
                <div>
                    <PriceListContainer>
                        <img src={Prices.product[0].productimage} />
                        <h4>{Prices.product[0].productname}</h4>
                    </PriceListContainer>
                </div>
                <div>
                    <ProductTable>
                        <tbody>
                            {
                                Prices.prices.map((data) =>{
                                    console.log(data)
                                    return(
                                        <>
                                        <tr>
                                            <td>
                                                <img src={data["empresa"][0]["buzzinelogo"]} style={{
                                                    width:"60%"
                                                }} />
                                            </td>
                                            <td>
                                                <h3>R${data["price"]}</h3>
                                            </td>
                                            <td>
                                                <ButtomStyles className={"button"}>
                                                    <button className={"bt btgreen"} onClick={function() {
                                                        window.location.href=data.captive_link
                                                    }}>Comprar Agora</button>
                                                </ButtomStyles>
                                                <ButtomStyles className={"button"}>
                                                <button className={"bt btgold"} onClick={function() {
                                                    window.location.href="/historico/"+data["empresa"][0]["id"]+"/"+selectedProduct+"?token="+AccessToken
                                                }}>Historico de Precos</button>
                                                </ButtomStyles>
                                            </td>
                                        </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </ProductTable>
                </div>
                <div>
                    <h4>Ultimo Registro Obtido em :{Prices.prices[0].CaptiveTime}</h4>

                </div>
            </div>
        </section>
        </>
    )
}
export{
    ProductDashboard
}