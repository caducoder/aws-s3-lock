import { IconButton, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from 'axios'
import { useQuery } from 'react-query'

const BASE_URL = import.meta.env.VITE_API_URL

interface IBucketObject {
  ETag: string;
  Key: string;
  LastModified: string;
  Size: number;
  StorageClass: string;
}

export const FileList = () => {
  const { isLoading, error, data, isFetching, refetch } = useQuery({
    queryKey: ['get-files'],
    queryFn: () =>
      axios.get<IBucketObject[]>(`${BASE_URL}/files`)
        .then(res => res.data)

  })

  if (isLoading) return "Loading..."

  if (error) return 'An error has occurred.'

  const downloadFile = (Key: string): void => {
    console.log(Key)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: 2
        }}
      >
        <Typography variant='h4'>Reports</Typography>
        <IconButton aria-label="refresh" onClick={() => refetch()}>
          <RefreshIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 4 }}>
        {isFetching ? 'Fetching...' : data?.map((obj) => (
          <Paper
            key={obj.ETag}
            elevation={1}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography
              sx={{
                maxWidth: '180px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              {obj.Key}
            </Typography>
            <IconButton aria-label="download" onClick={() => downloadFile(obj.Key)}>
              <FileDownloadIcon />
            </IconButton>
          </Paper>
        ))}
      </Box>
    </>
  )
}
