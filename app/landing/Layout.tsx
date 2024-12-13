import Matching from "../components/Matching/Matching";
import Overview from "../components/Overview/Overview";
import Photoslogan from "../components/PhotoSlogan/Photoslogan";
import Teeslovers from "../components/TessLovers/Teeslovers";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <>
      <Photoslogan /> 
      <br /><br /><br />
      <Overview />
      <Teeslovers />
      <Matching />
      </>
  );
}
