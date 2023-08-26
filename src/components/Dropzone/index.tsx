import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { FileUploader } from "react-drag-drop-files";
import './Dropzone.css'
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL

export const Dropzone = () => {
  //const [file, setFile] = useState<File | null>(null);

  const handleChange = ((file: File) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    bodyFormData.append('filename', file.name);

    axios.post(`${BASE_URL}/send`, bodyFormData)
      .then(res => console.log(res))

  })

  return (
    <Box my={4}>
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
