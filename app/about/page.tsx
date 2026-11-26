import Link from "next/link";
import { ClinicalPhoto, EditorialIntro, editorialMeta } from "../for-clients/editorial";
import OfficeAddress from "../office-address";

export const metadata = editorialMeta(
  "/about", "About MSL Healthcare",
  "Meet the UK healthcare recruitment agency connecting nursing professionals with NHS and private healthcare teams."
);

export default function AboutPage() {
  return <>
    <section className="ed-hero"><div className="wrap ed-split">
      <EditorialIntro label="About MSL Healthcare" title="A personal approach to medical staffing">
        <p className="lead">Our work brings together healthcare professionals looking for shifts and organisations looking for the right people to care for their patients.</p>
        <Link className="under" href="/contact">Speak to our team</Link>
      </EditorialIntro>
      <ClinicalPhoto src="/clinician.jpg" alt="A clinician speaking with a patient during a consultation" sizes="(max-width:650px) 89vw, 42vw" preload />
    </div></section>
    <section className="wrap section ed-directory">
      <aside><p className="overline">Our approach</p><h2>It starts with a conversation</h2></aside>
      <div className="ed-about-body">
        <p>For a nurse, a good match depends on their clinical experience, where they can travel and when they want to work. For a ward, it starts with the people already on the rota and the skills needed for a particular shift.</p>
        <p>Our consultants listen to both sides. Based in London and working across the UK, MSL supports NHS hospitals, private hospitals and care homes with temporary nursing and healthcare staff.</p>
        <p>Consultants manage their own regions, building relationships with providers over time. The agency operates around the clock, including weekends.</p>
        <div className="actions"><Link className="under" href="/for-candidates">Support for candidates</Link><Link className="under" href="/for-clients">Services for clients</Link></div>
      </div>
    </section>
    <section className="agency"><div className="wrap duo">
      <div><p className="overline">Get in touch</p><h2>Contact MSL Healthcare</h2><p>Call to discuss registration, an existing booking or a staffing requirement.</p><a className="under" href="tel:03337332020">0333 733 2020</a></div>
      <div className="ed-address"><h3>London office</h3><OfficeAddress /><Link className="under" href="/contact">Contact details and enquiries</Link></div>
    </div></section>
  </>;
}
