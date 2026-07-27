import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux"
import { router } from '@/app/router/router.tsx'
import store from '@/app/store/store.ts' 
import '@app/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </StrictMode>,
)
