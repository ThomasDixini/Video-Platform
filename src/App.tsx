import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Header } from "./Components/Header/Header";
import { client } from "./lib/apollo"
import { GlobalStyle } from "./styles/global";


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id,
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}

export function App() {

  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY);

  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  )
}


