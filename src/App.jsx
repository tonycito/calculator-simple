// Componente App
import { useState } from 'react';
import CamposInsidencias from './components/CamposInsidencias';
import CampoSueldo from './components/CampoSueldo';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import LinkWsp from './components/LinkWsp';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';


function App() {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [sueldo, setSueldo] = useState(0);
  const [valorInput1, setValorInput1] = useState(0);
  const [valorInput2, setValorInput2] = useState(0);
  const [valorInput3, setValorInput3] = useState(0);

  // Función para calcular el total de las horas.
  const calcularTotal = () => {
    const calTotal = valorInput1 * 0.25 + valorInput2 * 0.5 + valorInput3 * 1;
    return calTotal;
  };
  //Monto a pagar del sueldo por las horas
  const montoPagar = () => {
    return (sueldo / 100) * calcularTotal();
    
  }
  //calcualr semana OnCall
  const onCallDay = () => {
    return parseInt(sueldo / 30);
  }
  //Referencia para enviar al wsp
  const href = `https://api.whatsapp.com/send?phone=51969899508&text=Hola Deyvis semana OnCall %0ACantidad Horas ${calcularTotal()} Hrs. %0AMonto a Pagar S/. ${montoPagar()} %0ABono por semana OnCall S/. ${onCallDay()}`;

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'grid',
          my: 0,
          mx: 2,
          borderRadius: 1
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Implementación del Área de OnCall </h2>
      </Box>

      <Box
        component="form"
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 2,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          p: 4,
          m: 2,
          border: 'solid 1px #ebebeb',
          borderRadius: 1
        }}
        md= {{display:'flex'}}
        noValidate
        autoComplete="off"
      >

        <CampoSueldo
          label="Ingrese Sueldo"
          type="number"
          variant="outlined"
          value={sueldo}
          onChange={(value) => setSueldo(value.trim() === '' ? 0 : parseFloat(value))}
          startAdornment={<InputAdornment position="start">S/.</InputAdornment>}
        />
        <CamposInsidencias
          label="I. Simple"
          type="number"
          variant="outlined"
          value={valorInput1}
          onChange={(value) => setValorInput1(value.trim() === '' ? 0 : parseFloat(value))}
        />
        <CamposInsidencias
          label="I. Normal"
          type="number"
          variant="outlined"
          value={valorInput2}
          onChange={(value) => setValorInput2(value.trim() === '' ? 0 : parseFloat(value))}
        />
        <CamposInsidencias
          label="I. Compleja(horas)"
          type="number"
          variant="outlined"
          value={valorInput3}
          onChange={(value) => setValorInput3(value.trim() === '' ? 0 : parseFloat(value))}
        />
      </Box>
      <Box
        component="form"
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 2,
          gridTemplateColumns: '1fr',
          p: 4,
          m: 2,
          border: 'solid 1px #ebebeb',
          borderRadius: 1
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Bono por semana OnCall (dia laboral): <span>S/. {onCallDay()}</span></h3>

      </Box>
      <Box
        component="form"
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 2,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          p: 4,
          m: 2,
          border: 'solid 1px #ebebeb',
          borderRadius: 1
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Cantidad de Horas: <span>{calcularTotal()}</span> Hrs.</h3>
        <h3>Monto a Pagar: <span> S/.{montoPagar()}</span></h3>
      </Box>
      <LinkWsp
          href={href}
      />
      <p className="read-the-docs">
        Gracias por tu esfuerzo!
      </p>
    </>
  );
}

export default App;
