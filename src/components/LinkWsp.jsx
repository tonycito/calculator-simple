/* eslint-disable react/prop-types */
import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';



// const preventDefault = (event) => event.preventDefault();

const LinkWsp = ({href}) => {
  console.log(href);

    return (
        <div>
            <Box
                component="form"
                  sx={{
                    display: 'grid',
                    justifyItems: 'end',
                    columnGap: 3,
                    rowGap: 2,
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    px: 4,
                    m: 2,
                    borderRadius: 1
                  }}
                noValidate
                autoComplete="off"
                // onClick={preventDefault}
            >
            <Link
              href= {href}
              target="_blank">
              Enviar al WhatsApp
            </Link>
      
            </Box>
        </div>
    );
};

export default LinkWsp;

