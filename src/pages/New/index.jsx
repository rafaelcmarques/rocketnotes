import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { api } from "../../services/api"

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink("")
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handeleAddNote() {
    if (!title) {
      return alert("Campo Titulo é obrigatório.")
    }

    if (newLink) {
      return alert(
        "Um link não foi adicionado, clique no botão para adiciona-lo"
      )
    }

    if (newTag) {
      return alert(
        "Uma tag não foi adicionado, clique no botão para adiciona-lo"
      )
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    })

    alert("Nota criada com sucesso")
    navigate(-1)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title={"Voltar"} onClick={handleBack} />
          </header>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          {links.map((link, index) => (
            <NoteItem
              key={String(index)}
              value={link}
              onClick={() => {
                handleRemoveLink(link)
              }}
            />
          ))}
          <NoteItem
            isNew
            placeholder="Novo link"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            onClick={handleAddLink}
          />

          <Section title="Tags" />
          <div className="tags">
            {tags.map((tag, index) => (
              <NoteItem
                key={index}
                value={tag}
                onClick={() => {
                  handleRemoveTag(tag)
                }}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Nova Tag"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
          <Button title="Salvar" onClick={handeleAddNote} />
        </Form>
      </main>
    </Container>
  )
}
