export const metadata = {
  title: "Sticker Maker",
  description: "A simple sticker maker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
