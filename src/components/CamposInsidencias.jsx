import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


function CamposInsidencias({ label, type, variant, onChange }) {
  const [valorCampo, setValorCampo] = useState('');

  const handleChange = (e) => {
    const nuevoValor = e.currentTarget.value;
    setValorCampo(nuevoValor);
    onChange(nuevoValor);
  };

  return (

      <FormControl>
        <InputLabel htmlFor="component-outlined">{label}</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label={label}
          type={type}
          variant={variant}
          value={valorCampo}
          onChange={handleChange}
          sx={{width: '100%' }}
        />
      </FormControl>

  );
}

export default CamposInsidencias;
