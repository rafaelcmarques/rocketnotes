import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import React from "react"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>
      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo titulo" />
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React Modal",
              tags: [
                { id: 1, name: "react" },
                { id: 2, name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar Notas
      </NewNote>
    </Container>
  )
}
