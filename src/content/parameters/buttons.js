import styled from "styled-components";
const ButtomStyles = styled.button `
    .bt{
        border: 1px solid #25692A;
        border-radius: 4px;
        display: inline-block;
        cursor: pointer;
        font-family: Verdana;
        font-weight: bold;
        font-size: 13px;
        padding: 6px 10px;
        text-decoration: none;
        }
    .bt:active {
        position: relative;
        top: 2px;
        }
    .btazul{
    border-color: #46a7f5;
    background: linear-gradient(to bottom, #86c6f8 5%, #46a7f5 100%);
    box-shadow: inset 0px 1px 0px 0px #d7ecfd;
    color: #fff;
    text-shadow: 0px 1px 0px #528009;
    }
    .btazul:hover {
    background: linear-gradient(to bottom, #46a7f5 5%, #86c6f8 100%);
    }
    .btgold{
    border-color: #46a7f5;
    background: linear-gradient(to bottom, #faca48 5%, #e6b925 100%);
    box-shadow: inset 0px 1px 0px 0px #d7ecfd;
    color: #fff;
    text-shadow: 0px 1px 0px #528009;
    }
    .btgold:hover {
    background: linear-gradient(to bottom, #f7e92e 5%, #ffbe09 100%);
    }
    .btDarkazul{
    border-color: #46a7f5;
    background: linear-gradient(to bottom, #4567ff 5%, #2b9bf7 100%);
    box-shadow: inset 0px 1px 0px 0px #d7ecfd;
    color: #fff;
    text-shadow: 0px 1px 0px #528009;
    }
    .btDarkazul:hover {
    background: linear-gradient(to bottom, #85bfee 5%, #2b9e9f 100%);
    }
    .btred{
    border-color: #f59f78;
    background: linear-gradient(to bottom, #ee1818 5%, #fc6f12 100%);
    box-shadow: inset 0px 1px 0px 0px #d7ecfd;
    color: #fff;
    text-shadow: 0px 1px 0px #528009;
    }
    .btred:hover {
    background: linear-gradient(to bottom, #f3a96c 5%, #e23737 100%);
    }
    .btgreen{
    border-color: #adfd9c;
    background: linear-gradient(to bottom, #00f566 5%, #00fa00 100%);
    box-shadow: inset 0px 1px 0px 0px #d7ecfd;
    color: #fff;
    text-shadow: 0px 1px 0px #528009;
    }
    .btgreen:hover {
    background: linear-gradient(to bottom, #38d424 5%, #18be2e 100%);
    }

`
export{
    ButtomStyles
}