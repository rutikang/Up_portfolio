import { Top } from './components/Top';
import { Left } from './components/Left';
import { Right } from './components/Right';
import { Stack } from '@mui/material';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Top/>


    <Stack direction={'row'} spacing={2}>
   <Left/>
   <Right/>
    </Stack>
    </BrowserRouter>

    </>
  )
}

export default App;
