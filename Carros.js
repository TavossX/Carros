var carrosRegistrados = [];

function Cadastrar(){
    for (var i = 0; i < 1; i++){
        var veiculo = {};
            veiculo.nome = prompt("Digite o nome do carro"),
            veiculo.marca = prompt("Digite a marca do carro"),
            veiculo.fabri = parseInt(prompt("Digite o ano do carro")),
            veiculo.kmAtual = parseInt(prompt("Digite o Km atual do carro"));

            carrosRegistrados.push(veiculo)

            console.log("================================");
            console.log("Informações do Veículo: ", veiculo);

            veiculo.ano = 2024 - veiculo.fabri;
            veiculo.kmNovo = 50000 - veiculo.kmAtual;

                if(veiculo.kmAtual < 50000){
                console.log("Seu veículo está em boas condições para ser vendido");
                console.log(`Falta ${veiculo.kmNovo} quilometros para atingir 50000KM`);
                }else{
                    console.log("Seu carro não está em boas condições para ser vendido");
                }
                console.log(`O veículo foi fabricado a ${veiculo.ano} anos`);
                console.log("================================");
    }
   
    var novoCadastro = confirm("Deseja realizar um novo cadastro?");
        if(novoCadastro == true){
            Cadastrar();
        }else{

            var nomeCarroVelho = carrosRegistrados[0].nome
            var nomeCarroNovo = carrosRegistrados[0].nome

            var maisVelho = carrosRegistrados[0].fabri
            var maisNovo = carrosRegistrados[0].fabri
            
            
            for(var j = 0; j < carrosRegistrados.length; j++){
                if(maisVelho > carrosRegistrados[j].fabri){
                    maisVelho = carrosRegistrados[j].fabri;
                    nomeCarroVelho = carrosRegistrados[j].nome;
                }
            }
        
            for(var k = 0; k < carrosRegistrados.length; k++){
                if(maisNovo < carrosRegistrados[k].fabri){
                    maisNovo = carrosRegistrados[k].fabri
                    nomeCarroNovo = carrosRegistrados[k].nome
                }
            }

            console.log(`A carro mais novo é ${nomeCarroNovo}, foi fabricado em ${maisNovo}`);
            console.log(`O carro mais velho é ${nomeCarroVelho}, foi fabricado em ${maisVelho}`);            
        }

}