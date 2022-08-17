import TelaLoginPage from '../../pages/TelaLoginPage'
import ProdutosPage from '../../pages/ProdutosPage'
import CarrinhoComprasPage from '../../pages/CarrinhoComprasPage'
import InformacoesCompraPage from '../../pages/InformacoesCompraPage'
import VerificacaoCompraPage from '../../pages/VerificacaoCompraPage'


var login = new TelaLoginPage()
var produtos = new ProdutosPage()
var carrnho = new CarrinhoComprasPage()
var cadastro = new InformacoesCompraPage()
var compra = new VerificacaoCompraPage()




it('iniciando a compra', () => {

    login.RealizarLogin()
    produtos.Itens()
    carrnho.CarrinhoCompras()
    cadastro.informacoes()
    compra.Finalizado()
})

