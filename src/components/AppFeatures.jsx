import React from 'react'

function AppFeatures() {
  return (
    <div className="app-features-container">
      <div>
        <img src="/phone2.svg" alt="phone2" />
      </div>
      <div className="app-text-container">
        <h1>App Features</h1>
        <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</section>
        <div className="icon-box-container">
          <div className="iconBox">
            <img src="/icon1.svg" alt="icon1" />
            <div>
              <h2>Easy Payments</h2>
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
          </div>
          <div className="iconBox">
            <img src="/icon2.svg" alt="icon2" />
            <div>
              <h2>Data Security</h2>
              <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>
          </div>
          <div className="iconBox">
            <img src="/icon3.svg" alt="icon3" />
              <div>
                <h2>Cost Statistics</h2>
                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
          </div>
          <div className="iconBox">
            <img src="/icon4.svg" alt="icon4" />
            <div>
              <h2>Support 24/7</h2>
              <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
          </div>
          <div className="iconBox">
            <img src="/icon5.svg" alt="icon5" />
            <div>
              <h2>Regular Cashback</h2>
              <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
          </div>
          <div className="iconBox">
            <img src="/icon6.svg" alt="icon6" />
            <div>
              <h2>Top Standards</h2>
              <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppFeatures