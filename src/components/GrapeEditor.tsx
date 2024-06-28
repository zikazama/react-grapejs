import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

const GrapeEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      grapesjs.init({
        container: editorRef.current,
        fromElement: true,
        width: 'auto',
        height: '100vh',
        storageManager: false,
        blockManager: {
          appendTo: '#blocks',
          blocks: [
            {
              id: 'section',
              label: '<b>Section</b>',
              attributes: { class: 'gjs-block-section' },
              content: `<section>
                          <h1>This is a simple section</h1>
                          <p>You can add more content here</p>
                        </section>`
            },
            {
              id: 'text',
              label: 'Text',
              content: '<div data-gjs-type="text">Insert your text here</div>'
            }
          ]
        }
      });
    }
  }, []);

  return <div ref={editorRef}></div>;
};

export default GrapeEditor;
