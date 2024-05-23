import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { MdOutlineCloudUpload } from "react-icons/md";

export function FileUploader({ onFileSelect }) {
    const [file, setFile] = useState(null)

    const onDrop = useCallback(
        (acceptedFiles) => {
            // Do something with the files
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
            onFileSelect(selectedFile);
        },
        [onFileSelect]
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "pdf",
    });

    return (
        <div className="file-upload" {...getRootProps()}>
            <MdOutlineCloudUpload size={50} color="green" />
            <input {...getInputProps()} />
            <p>Drag and drop a PDF file here, or click to select one</p>
            {file && <p>Selected file: {file.name}</p>}
        </div>
    )
}