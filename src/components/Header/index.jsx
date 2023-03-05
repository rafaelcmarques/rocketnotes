import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles"

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/rafaelcmarques.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Rafael Marques</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
