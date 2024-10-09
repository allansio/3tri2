function criaCartao(){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className ='cartao';
    cartao.innerHTML = `
    <div class="conteudoCartao">
    <h3>categoria</h3>
    <div class="perguntaCartao">
       <p>pergunta</p>
    </div>
</div>`;
container .appendChild(cartao);

}