import React from 'react'

function Slider() {
  return (
    <div className="slider-container">
      <div className="slider-title">
        <h1>How Does It Work?</h1>
      </div>
      <div className="carousel-container">
        <input type="radio" name="slider" id="item-1" defaultChecked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <div className="cards">
          <label className="card">
            <img src="/Object.png" alt="phone" />
          </label>
          <label className="card" htmlFor="item-1" id="img-1">
            <img src="/iPhone12Pro1.png" alt="phone-1" />
          </label>
          <label className="card" htmlFor="item-2" id="img-2">
            <img src="/iPhone12Pro2.png" alt="phone-2" />
          </label>
          <label className="card" htmlFor="item-3" id="img-3">
            <img src="/iPhone12Pro3.png" alt="phone-3" />
          </label>
        </div>
        <div className="texts">
          <div className="texts2">
            <div className="info-area" id="test">
              <label className="title-info" id="text-info-1">
                <div className="titleText">Latest transaction history</div>
                <div className="sub-line">
                  <div className="paragraphText">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</div>
                </div>
              </label>
              <label className="title-info" id="text-info-2">
                <div className="titleText">Budget Overview</div>
                <div className="sub-line">
                  <div className="paragraphText">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </div>
              </label>
              <label className="title-info" id="text-info-3">
                <div className="titleText">Transfers to people from your contact list</div>
                <div className="sub-line">
                  <div className="paragraphText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider