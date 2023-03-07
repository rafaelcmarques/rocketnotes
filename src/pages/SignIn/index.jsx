import { useState } from "react"
import { Link } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Form, Background } from "./styles"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar suas notas</p>
        <h2>Faça seu login</h2>
        <Input
          type="email"
          icon={FiMail}
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Button title="Entrar" type="button" onClick={handleSignIn} />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
