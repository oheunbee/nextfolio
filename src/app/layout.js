import "./globals.css";

export const metadata = {
  title: "EUNBEE's portfolio",
  description: "EUNBEE's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
