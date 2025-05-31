import './css/CTA-section.css'
import CTAcard from './CTA-card';
import image from "../assets/stockimage.jpg"
import LabelTitleLink from './smallcomponents/LabelTitleLink';

const CTAsection = () => {
  return (
    <div className='wrapper'>
      <section className="cta-visual-section">
        <LabelTitleLink />

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
    </div>
  );
};

export default CTAsection;