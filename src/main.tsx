import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Login } from './pages/Login.tsx'
import { FileVault } from './pages/FileVault.tsx'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * (60 * 1000), // 5 mins - tempo que os dados são considerados frescos
      cacheTime: 30 * (60 * 1000), // 30 mins - tempo que o react-query armazena os dados na cache
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cofre-arquivos' element={<FileVault />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
