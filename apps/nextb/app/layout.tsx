export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
