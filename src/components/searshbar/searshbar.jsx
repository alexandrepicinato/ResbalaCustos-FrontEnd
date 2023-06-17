import React from "react";
import { ButtomStyles } from "../../content/parameters/buttons";
import { AccessToken } from "../../content/parameters/tokengeneratos";
import { SearshBoxStyles } from "./styles";

export default function SearshBar(){
    function buscar(){
        var conteudo = document.getElementById('searsh').value
        var conteudo = encodeURI(conteudo)
        window.location.href = "/buscar/"+conteudo+"?token="+AccessToken;

    }
    return(
        <div style={{
            backgroundColor:"rgba(153, 154, 245, 0.9)",
            display:"flex"
        }}>
            <SearshBoxStyles id={"searsh"} />
            <ButtomStyles className={"button"} style={{
                
            }}>
                <button className={"bt btgold"} onClick={function() {
                    buscar()
                }}>Buscar Preços</button>
            </ButtomStyles>
        </div>
    )
}

