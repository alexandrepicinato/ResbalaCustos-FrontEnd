import Chart from 'chart.js/auto'
import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { ButtomStyles } from "../../content/parameters/buttons";
import ResbalaApi from '../../service/api';
import { useHistory, useLocation } from 'react-router-dom';
import { PriceListContainer, ProductTable } from './styled';
import { AccessToken } from '../../content/parameters/tokengeneratos';


function PriceHistory(){
    const location = useLocation();
    const selectedProduct = location.pathname.split("/")[2]
    const selectedbuzzine = location.pathname.split("/")[3]
    const [Prices, setPriceList] = useState(
        {"product":[{"id":1,"productname":"","productimage":"","token":"","descriptions_product":""}],"prices":[{"empresa":[{"id":1,"corporation_name":"Brasao Supermercados","buzzinelogo":"","corporative_site":"","filtrerTag":""}],"price":"0.00","CaptiveTime":"2023-03-26T02:00:51.000000Z","captive_link":""},]
    })

    const [GraphEnable , setGraphEnable] = useState(0)
    var [DataPrices , setDataPrice] = useState([
        { captivetime: 2010, currentprice: 10 },
      ])
    function GraphicContent(){
        var [PriceHistoryList , setPriceHistoryList] = useState({
            labels: DataPrices.map(row => row["created_at"]),
                    datasets: [
                      {
                        label: 'Precos Localizados  ',
                        data: DataPrices.map(row => row["currentprice"])
                      }
                    ]
        })
        console.log(PriceHistoryList)
        return PriceHistoryList
    }
console.log(GraphicContent())
    function GraphicLoad (){
        if(GraphEnable == 1){
            return(
                <div style={{
                    width:"100%",
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <div style={{
                        width:"80%"
                    }}>
                        <Line data={GraphicContent()} ></Line>

                    </div>
                </div>
            )
        }
        else{
            return(
                <>
                <>
                <div>
                    <div>
                        <h4>Carregando Grafico ...</h4>
                    </div>
                </div>
                </>
                </>
            )
        }
    }
      useEffect(() => {
        ResbalaApi
          .get("/consultoria/acompanhamento/"+selectedProduct+"/"+selectedbuzzine+"?token="+AccessToken)
          .then((response) => setDataPrice(response.data.priceshistory))
          .catch((err) => {
            console.error("Falha ao Carregar o Conteudo " + err);
          });
          setGraphEnable(1)
      }, []);
      useEffect(() => {
        ResbalaApi
          .get("/consultoria/produto/"+selectedbuzzine+"?token="+AccessToken)
          .then((response) => setPriceList(response.data))
          .catch((err) => {
            console.error("Falha ao Carregar o Conteudo " + err);
          });
      }, []);
return(
    <>
    <div>
        <div>
            <div>
                <PriceListContainer>
                            <h4>{Prices.product[0].productname}</h4>
                            <img src={Prices.product[0].productimage} />
                            
                </PriceListContainer>
            </div>
            <div>
                <div style={{
                    width:"100vw",
                    height:"40vw"
                }}>
                    <GraphicLoad />
                </div>
                <div>
                <ProductTable>
                        <tbody>
                            {
                                DataPrices.map((data) =>{
                                    console.log(data)
                                    return(
                                        <>
                                        <tr>
                                            <td style={{
                                                color:"rgb(10,10,10)"
                                            }}>
                                                <h4>{data["created_at"]}</h4>
                                            </td>
                                            <td>
                                                <h3>R${data["currentprice"]}</h3>
                                            </td>
                                            <td style={{
                                                color:"rgb(10,10,10)"
                                            }}>
                                                <h4>{data["captive_link"]}</h4>

                                            </td>
                                        </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </ProductTable>
                </div>
            </div>
        </div>
        <div>
            <div>

            </div>
        </div>
    </div>
    </>
)
}
export {
    PriceHistory
}