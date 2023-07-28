import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>
          <Link href="/">Botostart CRM</Link>
        </h2>
        <Link href={"/add-customer"}>Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        Botostart Next.js course | CRM Project &c;
      </footer>
    </>
  );
}

export default Layout;
