import Link from "next/link";
import EnquiryForm from "./enquiry-form";
import OfficeAddress from "./office-address";

const copy={
  register:["For healthcare professionals","Register with MSL","Tell a consultant about your clinical experience, the shifts you can work and where you would like to work."],
  staff:["For healthcare organisations","Request healthcare staff","Share your staffing requirements, location and shift dates so our consultants can discuss cover with you."],
  contact:["Contact MSL","Speak to our team","Our consultants support candidates and healthcare organisations across the UK, 24 hours a day, seven days a week."]
};
export default function EnquiryPage({kind,initialSpecialty}:{kind:keyof typeof copy;initialSpecialty?:string}){
  const [label,title,intro]=copy[kind];
  return <div className="enquiryShell"><div className="wrap enquiryLayout"><section className="contactIntro"><p className="overline">{label}</p><h1>{title}</h1><p className="lead">{intro}</p>
    <div className="contactDetails"><h2>Recruitment desk</h2><a href="tel:03337332020">0333 733 2020</a><a href="mailto:info@mslhealthcare.co.uk">info@mslhealthcare.co.uk</a>
    {kind==="contact"&&<OfficeAddress />}</div>
    <div className="contactLinks">{(kind==="register"?[["Candidate compliance","/candidate-compliance"],["Explore healthcare jobs","/healthcare-jobs"]]:kind==="staff"?[["Staffing solutions","/staffing-solutions"],["Healthcare specialisms","/healthcare-specialisms"]]:[["Register as a candidate","/register"],["Request staff","/request-staff"]]).map(([text,path])=><Link className="under" href={path} key={path}>{text}</Link>)}</div>
    </section><EnquiryForm kind={kind} initialSpecialty={initialSpecialty}/></div></div>
}

