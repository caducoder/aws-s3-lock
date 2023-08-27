import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography'
import { FileUploader } from "react-drag-drop-files";
import Alert, { AlertColor } from '@mui/material/Alert';
import './Dropzone.css'

const BASE_URL = process.env.REACT_APP_API_URL

export const Dropzone = () => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState({
    msg: '',
    severity: 'info'
  });

  const handleChange = ((file: File) => {
    axios.post(`${BASE_URL}/upload?nome=${file.name}`, file)
      .then(res => {
        setOpen(true)
        setFeedback({
          msg: 'Arquivo enviado com sucesso!',
          severity: 'success'
        })
      })
      .catch(err => {
        setOpen(true)
        setFeedback({
          msg: 'Erro ao enviar o arquivo!',
          severity: 'error'
        })
      })
  })

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box my={4}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={feedback.severity as AlertColor} sx={{ width: '100%' }}>
          {feedback.msg}
        </Alert>
      </Snackbar>
      <Typography variant='h4' component='h2' gutterBottom>Dropzone</Typography>
      <Box sx={{ position: 'relative' }}>
        <FileUploader
          handleChange={handleChange}
          name="file"
          multiple={false}
          classes="dropzone"
        />
      </Box>
    </Box>
  )
}