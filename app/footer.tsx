import Link from "next/link";
import { Logo } from "./header";
import { CookieSettingsLink } from "./cookie-consent";
import OfficeAddress from "./office-address";
import {groups,legal} from "./site";

export default function Footer(){
  return <footer><div className="wrap footerLinks"><div><Link href="/" className="footerLogo"><Logo/></Link><p className="desk-hours">Recruitment desk open 24/7</p><OfficeAddress /><a href="tel:03337332020">0333 733 2020</a><a href="mailto:info@mslhealthcare.co.uk">info@mslhealthcare.co.uk</a><div className="social-links"><a href="https://www.linkedin.com/company/msl-healthcare-ltd">LinkedIn</a><a href="https://www.facebook.com/mslhealthcareuk">Facebook</a></div></div>
  {groups.map(group=><nav key={group.title} aria-label={group.title+" footer"}><strong>{group.title}</strong>{group.links.map(([label,path])=><Link href={path} key={path}>{label}</Link>)}</nav>)}</div>
  <div className="wrap fine">
    <span>© {new Date().getFullYear()} MSL Healthcare</span>
    <nav className="footerLegal" aria-label="Legal">
      {legal.map(([label,path])=><Link key={path} href={path}>{label}</Link>)}
      <CookieSettingsLink />
    </nav>
    <span className="footerCredits">
      Designed and developed by{" "}
      <a href="https://www.linkedin.com/in/siri-sandela/" target="_blank" rel="noopener noreferrer">Siri Sandela</a>
      {" & "}
      <a href="https://www.outliersynapse.com/" target="_blank" rel="noopener noreferrer">Outlier Synapse</a>
    </span>
  </div></footer>
}
