export default function initiFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((r) => r.json())
    .then((bitcoin) => {
      const btc = document.querySelector('.btc-preco');

      btc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
