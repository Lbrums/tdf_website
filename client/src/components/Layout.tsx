
import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth: '100vw', backgroundColor: '#dcd9c9' }}>
      <Header />
      <main style={{ flex: 1, padding: '1rem' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
