import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import './Dropzone.css'

export const Dropzone = () => {
  const [fileOrFiles, setFile] = useState<File[] | null>(null);

  const handleChange = ((fileOrFiles: File[]) => {
    setFile(fileOrFiles);
    console.log('changes', fileOrFiles);
  })

  return (
    <Box my={4}>
      <Typography variant='h4' component='h2' gutterBottom>Dropzone</Typography>
      <Box sx={{ position: 'relative' }}>
        <FileUploader
          handleChange={handleChange}
          name="file"
          multiple={true}
          classes="dropzone"
        />
      </Box>
    </Box>
  )
}
