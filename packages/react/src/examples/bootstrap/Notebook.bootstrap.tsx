import { render } from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import muiLightTheme from '../theme/Theme';
import Jupyter from '../../jupyter/Jupyter';
import Notebook from '../../components/notebook/Notebook';
import NotebookControl from '../controls/NotebookControl';
import Layers from '../theme/Layers'

/**
 * A simple example for the Jupyter React.
 */
const Example = () => {
  return (
    <ThemeProvider theme={muiLightTheme}>
      <Jupyter collaborative={false} terminals={false}>
        <Layers />
        <NotebookControl />
        <Notebook
          path='ping.ipynb'
          ipywidgets='classic'
        />
      </Jupyter>
    </ThemeProvider>
  )
}

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <Example/>
  ,
  div
);