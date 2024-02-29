export type IndexHtml = {
  css: string;
  head: string;
  html: string;
  manifest: string;
};

export const indexHtml = ({ css, head, html }: IndexHtml) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
        ${css}
        ${head}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
};
