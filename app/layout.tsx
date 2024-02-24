/* Components */
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Providers } from '@/lib/providers';
import './styles/globals.css';
import Navbar from './components/Navbar/page';
import FooterComponent from './components/Footer/page';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AntdRegistry>
            <Navbar />
            {props.children}
            <FooterComponent />
          </AntdRegistry>
        </body>
      </html>
    </Providers>
  );
}
