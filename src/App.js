import './styles.css'
import logo from './Logo1.svg'
import React from 'react'
import {
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubbleEllipsesOutline,
  IoHelpOutline,
  IoSettingsOutline,
  IoLockClosedOutline,
  IoLogOutOutline,
  IoGridOutline,
  IoSearchOutline,
  IoEyeOutline,
  IoCartOutline,
  IoChatbubbles,
  IoCashOutline
} from 'react-icons/io5'

function App() {
  const menu = [
    { icon: <IoHomeOutline />, menu: 'Painel' },
    { icon: <IoPersonOutline />, menu: 'Clientes' },
    { icon: <IoChatbubbleEllipsesOutline />, menu: 'Mensagens' },
    { icon: <IoHelpOutline />, menu: 'Ajuda' },
    { icon: <IoSettingsOutline />, menu: 'Definições' },
    { icon: <IoLockClosedOutline />, menu: 'Senha' },
    { icon: <IoLogOutOutline />, menu: 'Sair' }
  ]
  const pedidos = [
    {
      nome: 'Geladeira',
      preco: 'R$ 1.200,00',
      pagamento: 'Pago',
      status: 'Em andamento',
      statusClass: 'inprogress'
    },
    {
      nome: 'Ventilador de janela',
      preco: 'R$ 250,00',
      pagamento: 'Vencimento',
      status: 'Pendente',
      statusClass: 'pending'
    },
    {
      nome: 'Caixas de som',
      preco: 'R$ 890,00',
      pagamento: 'Pago',
      status: 'Entregue',
      statusClass: 'delivered'
    },
    {
      nome: 'Notebook',
      preco: 'R$ 2.199,00',
      pagamento: 'Pago',
      status: 'Retornar',
      statusClass: 'return'
    },
    {
      nome: 'Apple Watch',
      preco: 'R$ 1.599,00',
      pagamento: 'Vencimento',
      status: 'Pendente',
      statusClass: 'pending'
    },
    {
      nome: 'Ventilador de parede',
      preco: 'R$ 120,00',
      pagamento: 'Pago',
      status: 'Em andamento',
      statusClass: 'inprogress'
    },
    {
      nome: 'Tênis Adidas',
      preco: 'R$ 299,00',
      pagamento: 'Pago',
      status: 'Entregue',
      statusClass: 'delivered'
    },
    {
      nome: 'Camisas jeans',
      preco: 'R$ 250,00',
      pagamento: 'Pago',
      status: 'Entregue',
      statusClass: 'delivered'
    },
    {
      nome: 'Sapatos casuais',
      preco: 'R$ 199,00',
      pagamento: 'Pago',
      status: 'Retornar',
      statusClass: 'return'
    },
    {
      nome: 'Camisas jeans',
      preco: 'R$ 189,00',
      pagamento: 'Pago',
      status: 'Entregue',
      statusClass: 'delivered'
    },
    {
      nome: 'Apple Watch',
      preco: 'R$ 1.599,00',
      pagamento: 'Vencimento',
      status: 'Pendente',
      statusClass: 'pending'
    }
  ]
  const clietes = [
    {
      img: 'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      nome: 'David',
      pais: 'Itália'
    },
    {
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
      nome: 'Muhammad',
      pais: 'Índia'
    },
    {
      img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      nome: 'Amelia',
      pais: 'França'
    },
    {
      img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      nome: 'Olivia',
      pais: 'Estados Unidos'
    },
    {
      img: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
      nome: 'Amit',
      pais: 'Japão'
    },
    {
      img: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      nome: 'Ashraf',
      pais: 'Canadá'
    },
    {
      img: 'https://images.unsplash.com/photo-1664575195621-a5f347e67554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      nome: 'Diana',
      pais: 'México'
    },
    {
      img: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      nome: 'Paulo',
      pais: 'Brasil'
    }
  ]
  const handleActiveLink = index => {
    const navigation = document.querySelectorAll('.navigation li')
    navigation.forEach(item => {
      item.classList.remove('hovered')
    })
    navigation[index].classList.add('hovered')
  }

  const handleToggle = () => {
    let navigation = document.querySelector('.navigation')
    let main = document.querySelector('.main')
    navigation.classList.toggle('active')
    main.classList.toggle('active')
  }

  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#home">
              <span className="icon">
                <img src={logo} alt="" />
              </span>
            </a>
          </li>
          {menu.map((liOpt, key) => (
            <li
              key={key}
              onMouseOver={() => {
                handleActiveLink(key + 1)
              }}
            >
              <a href="#home">
                <span className="icon">{liOpt.icon}</span>
                <span className="tittle">{liOpt.menu}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <!--Menu--> */}
      <div className="main">
        <div className="topbar">
          <div onClick={handleToggle} className="toggle">
            <IoGridOutline size={20} />
          </div>
          {/* <!--Search--> */}
          <div className="search">
            <input
              type="text"
              placeholder="Procure aqui"
              name="#home"
              id="#home"
            />
            <IoSearchOutline size={20} />
          </div>
          {/* <!--User Img--> */}
          <div className="user">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="#home"
            />
          </div>
        </div>
        {/* <!--Main--> */}
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">1.504</div>
              <div className="cardName">Visualizações diárias</div>
            </div>
            <div className="iconBx">
              <IoEyeOutline />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">80</div>
              <div className="cardName">Vendas</div>
            </div>
            <div className="iconBx">
              <IoCartOutline />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">284</div>
              <div className="cardName">Comentários</div>
            </div>
            <div className="iconBx">
              <IoChatbubbles />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">$7,842</div>
              <div className="cardName">Ganho</div>
            </div>
            <div className="iconBx">
              <IoCashOutline />
            </div>
          </div>
        </div>
        {/* <!--Main List--> */}
        <div className="details">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Pedidos recentes</h2>
              <a href="#home" className="btn">
                Ver tudo
              </a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Pagamento</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((item, key) => (
                  <tr key={key}>
                    <td>{item.nome}</td>
                    <td>{item.preco}</td>
                    <td>{item.pagamento}</td>
                    <td>
                      <span className={`status ${item.statusClass}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <!--Customers--> */}
          <div className="recentCustomers">
            <div className="cardHeader">
              <h2>Clientes Recentes</h2>
            </div>
            <table>
              <tbody>
                {clietes.map((item, key) => (
                  <tr key={key}>
                    <td width="60px">
                      <div className="imgBx">
                        <img src={item.img} alt="#home" />
                      </div>
                    </td>
                    <td>
                      <h4>
                        {item.nome}
                        <br />
                        <span>{item.pais}</span>
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <!--///Main List--> */}
      </div>
    </div>
  )
}

export default App
