import React from 'react'

function AppTransfers() {
  return (
    <div className="features-container">
      <div className="features-section-one">
        <div className="text-area-one">
          <h1>Make your money <br /> transfer simple and clear</h1>
          <ul>
            <li>Banking transactions are free for you</li>
            <li>No monthly cash commission</li>
            <li>Manage payments and transactions online</li>
          </ul>
          <a href="#" className="btn-feature">
            <span>Learn more</span>
            <img src="/icon-r.svg" alt="icon right" />
          </a>
        </div>
        <div className="img-section-one">
          <img src="/featuresimageone.png" alt="ft-img1" />
        </div>
      </div>
      <div className="features-section-two">
        <div className="img-section-two">
          <img src="/featuresimagetwo.png" alt="ft-img2" />
        </div>
        <div className="text-area-two">
          <h1>Receive payment from international bank details</h1>
          <div className="icon-box">
            <div>
              <img src="/lefticon.svg" alt="left-icon" />
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div>
              <img src="/righticon.svg" alt="right-icon" />
              <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </div>
          </div>
          <a href="#" className="btn-feature">
            <span>Learn more</span>
            <img src="/icon-r.svg" alt="icon right" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppTransfers