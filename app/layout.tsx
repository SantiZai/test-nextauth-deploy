import { Context } from "./components/Context";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
