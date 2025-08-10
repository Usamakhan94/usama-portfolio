export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header></header>
      <main className=" relative">{children}</main>
      <footer></footer>
    </>
  );
}
