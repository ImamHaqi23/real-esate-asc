import Comfort from './components/Comfort/page';
import ContactUs from './components/ContactUs/page';
import Main from './components/Main/page';
import Property from './components/Property/page';
import Quote from './components/Quote/page';

export default async function IndexPage() {
  return (
    <>
      <Main />
      <ContactUs />
      <Comfort />
      <Property />
      <Quote />
    </>
  );
}

export const metadata = {
  title: 'Read Esate ASC',
};
