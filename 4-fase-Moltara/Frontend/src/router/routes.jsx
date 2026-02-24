import { createBrowserRouter } from "react-router-dom";

// Imports de páginas de usuários
import Home from "../pages/public/Home.jsx";
import Cadastro from "../pages/public/Cadastro.jsx";
import Login from "../pages/public/Login.jsx";
import Perfil from "../pages/private/Perfil.jsx";
import PaginaResultados from "../pages/public/PaginaResultados.jsx";
import Termos from "../pages/public/Termos.jsx";

// imports de páginas relacionadas com o carrinho
import Carrinho from "../pages/private/Carrinho.jsx";
import ProdutoDetalhada from "../pages/private/ProdutoDetalhada.jsx";

// Imports de páginas de administrador
import CriarProduto from "../pages/private/CriarProduto.jsx";
import EstoqueProduto from "../pages/private/EstoqueProduto.jsx";
import PainelDeControle from "../pages/private/PainelDeControle.jsx";
import ProtectedAdmin from "./ProtectedAdmin.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/pesquisa", element: <PaginaResultados /> },

  // Páginas do usuário
  { path: "/cadastro", element: <Cadastro /> },
  { path: "/login", element: <Login /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/termos", element: <Termos /> },

  // Páginas do carrinho
  { path: "/carrinho/:id", element: <Carrinho /> },

  // Páginas do produto
  { path: "/produtoDetalhada", element: <ProdutoDetalhada /> },
  { path: "/produtoDetalhada/:id", element: <ProdutoDetalhada /> },

  // Páginas do administrador
  {
    path: "/criarProduto",
    element: (
      <ProtectedAdmin>
        <CriarProduto />
      </ProtectedAdmin>
    ),
  },

  {
    path: "/estoque",
    element: (
      <ProtectedAdmin>
        <EstoqueProduto />
      </ProtectedAdmin>
    ),
  },


  {
    path: "/painelDeControle",
    element: (
      <ProtectedAdmin>
        <PainelDeControle />
      </ProtectedAdmin>
    ),
  },
]);

export default router;
