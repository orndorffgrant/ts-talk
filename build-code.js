const fs = require("fs");
const hubdown = require("hubdown");

const fileNames = [
  "1-static-types",
  "2-structural-types",
  "3-algebraic-types",
  "4-form-inputs",
];

for (const fileName of fileNames) {
  const staticTypes = fs.readFileSync(`./examples/${fileName}.ts`);

  const md = staticTypes
    .toString()
    .split(/\n\n(\n+)/gm)
    .filter((codeChunk) => !!codeChunk.trim())
    .reduce((md, codeChunk) => md + "\n```ts\n" + codeChunk + "\n```\n", "");

  hubdown(md).then((doc) => {
    const html = `<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
    />
    <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/styles/dracula.min.css">
    <style>
    body {
        padding-top: 20vh;
    }
    pre {
        background: initial;
        border: initial;
        margin-bottom: 50vh;
    }
    code.hljs {
        padding: 1rem;
    }
    </style>
  </head>
  <body>
  ${doc.content}
  </body>
</html>`;
    fs.writeFileSync(`dist/examples/${fileName}.html`, html);
  });
}
