import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
// style
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

// View
const pdfjs = await import('pdfjs-dist/build/pdf');
const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PdfPreviewer = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin()
    return (
        <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
            <div className="preview-container">
                <h2 className="preview-heading">Preview:</h2>
                <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>
    )
}

export default PdfPreviewer