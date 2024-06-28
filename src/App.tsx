import { useEffect } from "react";

import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import websitePlugin from "grapesjs-preset-webpage";
import basicBlockPlugin from "grapesjs-blocks-basic";
import formPlugin from "grapesjs-plugin-forms";

function App() {
  function CustomPlugin(editor: {
    Blocks: {
      add: (arg0: string, arg1: { label: string; content: string }) => void;
    };
  }) {
    editor.Blocks.add("simple-block", {
      label: "Simple block",
      content: '<div class="my-block">Ini contoh simple block</div>',
    });

    editor.Blocks.add("input-block", {
      label: "Input block",
      content: '<input value="ini contoh input"></input>',
    });
  }

  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      width: "100%",
      plugins: [websitePlugin, CustomPlugin],
    });
  }, []);

  return <div id="gjs"></div>;
}

export default App;
