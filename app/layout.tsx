/* Components */
import { Providers } from '@/lib/providers';
import './styles/globals.css';
import Navbar from './components/Navbar/page';
import FooterComponent from './components/Footer/page';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Navbar />
          {props.children}
          <FooterComponent />
        </body>
      </html>
    </Providers>
  );
}
