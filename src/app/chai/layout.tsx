

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h3>Inner navbar</h3>
    {children}
    </>
  );
}
