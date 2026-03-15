import SectionTitle from "./SectionTitle";

function Contacts() {
    return(
        <section className = "section" id = "contacts">
            <SectionTitle eyebrow = "Contacts" title = "Questions? Reach at..."/>
            
            <p>sut2300001@utdallas.edu</p>
            <p href="https://github.com/sans-2186" target="_blank" rel="noreferrer">GitHub</p>
            <p href="https://www.linkedin.com/in/sanskriti-tiwari-ab300030b/" target="_blank" rel="noreferrer">LinkedIn</p>    
            
        </section>
    );
}

export default Contacts;