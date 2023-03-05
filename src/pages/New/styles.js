import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;

  grid-template-areas:
    "header"
    "content";
  main {
    grid-area: content;
    overflow-y: auto;
  }
  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
export const Form = styled.form`
  max-width: 55rem;
  margin: 3.8rem auto;
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3rem;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
