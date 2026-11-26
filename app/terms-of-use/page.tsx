import { pageMeta } from "../metadata";
import Link from "next/link";
import OfficeAddress from "../office-address";

const title = "Terms of use";
const description = "Website operator details and how to request the relevant recruitment or staffing terms from MSL Healthcare.";
export const metadata = pageMeta(title, description, "/terms-of-use");

export default function TermsPage() {
  return (
    <>
      <section className="innerHero"><div className="wrap">
        <p className="overline">Website information</p>
        <h1>Terms of use</h1>
        <p className="lead">The terms of use for this rebuilt website are awaiting approval by MSL Healthcare.</p>
      </div></section>
      <section className="wrap section duo">
        <div><h2>Website operator</h2>
          <p>MSL Healthcare Limited is registered in England and Wales under company number 09970736.</p>
          <OfficeAddress />
        </div>
        <div><h2>Recruitment and staffing terms</h2>
          <p>Speak to a consultant for the terms that apply to a particular assignment or staffing request. For questions about registration documents, see the candidate compliance guide.</p>
          <p><Link className="under" href="/candidate-compliance">Candidate compliance guide</Link></p>
          <Link className="under" href="/contact">Contact MSL Healthcare</Link>
        </div>
      </section>
    </>
  );
}
