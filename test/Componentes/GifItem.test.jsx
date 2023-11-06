import { render } from "@testing-library/react";
import { GifItem } from "../../src/Componentes/GifItem";

describe('Prueba en Gift Item', () => {
    test('Debe de hacer match con el snapshop', () => {

      const title = 'saitama'
      const url = 'https://saitama.com'

      render(<GifItem title={title} url = {url} />)
      
      
    })
    
});
