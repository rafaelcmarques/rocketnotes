import { Container, Links, Content } from "./styles.js"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir notas" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            est et accusantium provident illum sit, obcaecati, dolore corrupti,
            expedita hic rerum aspernatur tempora? Qui, libero? Neque aut
            ducimus at nobis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt placeat deserunt expedita neque saepe, rerum dolorem
            ex nobis sed praesentium modi debitis facilis consequuntur
            reiciendis, blanditiis enim odio optio sit? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quas quibusdam tempora quidem ab
            corporis itaque perferendis cumque labore aperiam distinctio
            laudantium vel quaerat, aut fugiat, mollitia minima quos eum alias?
          </p>

          <Section title="Links Uteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Tags">
            <Tag title="nodejs" />
            <Tag title="express" />
            <Tag title="react" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
