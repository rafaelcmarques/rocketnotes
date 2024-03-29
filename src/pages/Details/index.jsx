import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Links, Content } from "./styles.js"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { api } from "../../services/api.js"

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleDelete() {
    const confirm = window.confirm("Deseja realmente excluir a nota?")
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir notas" onClick={handleDelete} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links Uteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.url} target={"_blank"}>
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Tags">
                {data.tags.map((tag) => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}
