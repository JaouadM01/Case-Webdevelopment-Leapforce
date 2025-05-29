import './css/CTA-section.css'
import CTAcard from './CTA-card';
import image from "../assets/CTAimage.png"

const CTAsection = () => {
     return (
    <section className="cta-visual-section">
      <div className="cta-header">
        <p className="label">Label</p>
        <h2>Mandatory title about the <br /> call-to-action here</h2>
        <p className="body-text">Optional body copy goes here.</p>
        <a href="#" className="cta-link">Optional button →</a>
      </div>

      <div className="cta-cards">
        <CTAcard 
            imageSrc={image}
            alt="Man and woman in the kitchen playfully"
            title="Title"
            text="Supporting text about the call-to-action goes here."
        />
        <CTAcard 
            imageSrc={image}
            alt="Man and woman in the kitchen playfully"
            title="Title"
            text="Supporting text about the call-to-action goes here."
        />
      </div>
    </section>
  );
};

export default CTAsection;