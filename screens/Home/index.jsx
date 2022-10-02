import { Header, Wrapper, MenuIcon, Main } from './styles'

export const HomeScreen = () => {
    return (
        <Wrapper>
            <Header>
                SpaceX

                <div id='about'>
                    <a>Quem somos</a>
                    <a>Seja colaborador</a>
                </div>
                
                <MenuIcon />

            </Header>

            <Main>
                <h2>
                    Bem vindo à XXXXXX XXXXXX, somos um Hub que centraliza treinamentos voltados à ferramnta de Observação terrestre (EO)
                </h2>
            </Main>



       </Wrapper>
    )
}