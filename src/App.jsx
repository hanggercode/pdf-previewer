import { useState } from 'react'
import { FileUploader } from './components/FileUploader'
import PdfPreviewer from './components/PdfPreviewer'

function App() {
  const [fileUrl, setFileUrl] = useState(null)
  const handleFileSelect = (file) => {
    setFileUrl(URL.createObjectURL(file));
  };

  return (
    <div className='app-container'>
      <h1 className='app-title'>PDF FILE PREVIEWER</h1>
      <FileUploader onFileSelect={handleFileSelect} />
      {fileUrl && <PdfPreviewer fileUrl={fileUrl} />}
    </div>
  )
}

export default App
