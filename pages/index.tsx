import Hero from "../src/templates/landing_page-service-2/Hero/";
import Features from "../src/templates/landing_page-service-2/Features/";
import Testimonials from "../src/templates/landing_page-service-2/Testimonials/";
import Footer from "../src/flat/Footer/";

const data = {"uvp":"Helping startups build MVPs with ease","copy":{"hero":{"header":"Build Your MVP with MVPForge","pricing":"Starting at $99/month","subheader":"From ideation to launch - we make building your MVP a seamless process. Starting at $99/month."},"features":{"title":"Our Services","pricing":"Starting at $99/month","description":"We offer a suite of services to help startups bring their MVPs to life.","feature_items":[{"title":"Product Strategy","description":"Our experienced product strategists will help define and refine your MVP. We work with you to identify your target market, prioritize features and build a roadmap."},{"title":"UI/UX Design","description":"Our talented design team will take your product vision and bring it to life. We leverage best practices to create high-fidelity wireframes, interactive prototypes and polished designs."},{"title":"Full-Stack Development","description":"Our expert team of full-stack developers will bring your designs to life and build a scalable product. We work with the latest technologies to ensure your MVP is built for success."}]},"testimonials":{"title":"What our clients are saying","pricing":"Starting at $99/month","description":"Don't just take our word for it, hear it from our happy clients!","testimonial_items":[{"text":"MVPForge helped me bring my startup idea to life! Their team is talented, experienced and they really care about the success of their clients.","person":{"name":"John Doe","role":"Founder of Startup X"}},{"text":"I was blown away by the quality of work MVPForge delivers. They really understood my product vision and helped turn it into reality.","person":{"name":"Jane Doe","role":"Founder of Startup Y"}}]}},"tone":"Professional, Innovative","images":{"hero_prompt":"","features_prompt":""},"templates":[{"name":"landing_page-service-2","type":"hero"},{"name":"landing_page-service-2","type":"features"},{"name":"landing_page-service-2","type":"testimonials"}],"brand_name":"MVPForge","color_scheme":{"primary":"#0D93FF","tertiary":"#FEB800","secondary":"#1E2F46","background":"#FFFFFF","quaternary":"#F44336","light_background":"#F5F7FA"}};

function GeneratedWebsite() {
  return (
    <>
      <Hero data={data} />
      <Features data={data} />
      <Testimonials data={data} />
      <Footer data={data} />
    </>
  );
}

export default GeneratedWebsite;