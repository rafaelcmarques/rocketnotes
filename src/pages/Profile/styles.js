import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }

    button {
      background: none;
      border: none;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`
export const Avatar = styled.div`
  height: 18.6rem;
  width: 18.6rem;
  margin: -12.4rem auto 3.2rem;

  position: relative;

  > img {
    height: 18.6rem;
    width: 18.6rem;

    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`
