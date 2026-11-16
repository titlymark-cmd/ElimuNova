import './rose-profile.css';

export default function RoseProfile() {
  return (
    <section className="rose-profile" id="leadership">
      <div className="rose-profile-content">
        <span className="rose-eyebrow">OUR LEADERSHIP</span>
        <h2>Meet Rose Seko</h2>
        <p>
          Rose Seko is part of the leadership behind ElimuNova,
          contributing to the vision of making school management
          smarter, more accessible and more efficient through
          technology. Her commitment to innovation and better
          educational experiences reflects the mission of ElimuNova.
        </p>
        <div className="rose-image-wrap">
          <img
            src="/images/rose-seko.jpg"
            alt="Rose Seko – ElimuNova leadership"
          />
        </div>
      </div>
    </section>
  );
}
