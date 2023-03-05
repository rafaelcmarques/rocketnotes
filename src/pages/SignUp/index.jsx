import { useState } from "react"
import { api } from "../../services/api"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Container, Form, Background } from "./styles"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
          console.log(error.response.data)
        } else {
          alert("Não foi possivel cadastrar")
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar suas notas</p>
        <h2>Faça seu cadastro</h2>
        <Input
          type="text"
          icon={FiUser}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          icon={FiMail}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
