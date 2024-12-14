import Footer from "../components/Footer/Footer";
import Matching from "../components/Matching/Matching";
import Nextone from "../components/NextOne/Nextone";
import Overview from "../components/Overview/Overview";
import Photoslogan from "../components/PhotoSlogan/Photoslogan";
import Question from "../components/Question/Question";
import Teeslovers from "../components/TessLovers/Teeslovers";

export default function LandingLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {

  return (
      <>
      <Photoslogan /> 
      <br /><br /><br />
      <Overview />
      <Teeslovers />
      <Matching />
      <Question />
      <Nextone />
      <Footer />
      {children}
      </>
  );
}
