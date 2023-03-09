import { LiveReload, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Notatnik</title>
      </head>
      <body>
        <Scripts />
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
