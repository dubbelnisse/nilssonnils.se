import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import ProjectsIteam from './routes/projects/Iteam'
import Footer from './components/Footer'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr minmax(auto, 960px) 1fr 20px;
`

const Content = styled.div`
  grid-column: 3/4;
`

const App = () => {
  return (
    <Wrapper>
      <Content>
        <Switch>
          <Route path="/projects/iteam">
            <ProjectsIteam />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Content>
    </Wrapper>
  )
}

export default App
