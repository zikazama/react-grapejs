import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const GrapeEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      grapesjs.init({
        container: editorRef.current,
        fromElement: true,
        width: "auto",
        height: "100vh",
        storageManager: false,
        blockManager: {
          appendTo: ".myblocks",
          blocks: [
            {
              id: "image",
              label: "Image",
              media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
        </svg>`,
              // Use `image` component
              content: { type: "image" },
              // The component `image` is activatable (shows the Asset Manager).
              // We want to activate it once dropped in the canvas.
              activate: true,
              // select: true, // Default with `activate: true`
            },
          ],
        },
      });
    }
  }, []);

  return <div ref={editorRef}></div>;
};

export default GrapeEditor;
