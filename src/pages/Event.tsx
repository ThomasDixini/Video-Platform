import { Header } from "../Components/Header/Header";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import { Video } from "../Components/Video/Video";
import { Container, Main } from "./style";

export function Event() {
    return(
        <Container>
            <Header />
            <Main>
                <Video />
                <Sidebar />
            </Main>
        </Container>
    );
}