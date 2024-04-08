import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
  <div className="container-fluid bg-blue m-0 p-0 ">
    <div className=" container  bg-dark-subtle rounded-0 text-light">
      <div className="row pt-4">
        <div className="col-lg-3 col-md-6 ">
          <div>
            <a href="#" className="text-decoration-none text-info">
              Head Office
            </a>
            <p>
              Office 203, Al Sharafi Building, Bur Dubai, 118163, Dubai, UAE.
            </p>
          </div>
          <div className="mt-4">
            <a href="#" className="text-decoration-none text-info">
              DMCC Branch
            </a>
            <p>4H Almas Tower, Jumeirah Lake Towers (Cluster G), Dubai, UAE</p>
          </div>
          <div className="mt-4">
            <a href="#" className="text-decoration-none text-info">
              Customer Care
            </a>
            <p>800 INDUS (46387)</p>
          </div>
          <div className="mt-4">
            <a href="#" className="text-decoration-none text-info">
              Need Live Support?
            </a>
            <p>info@indusre.in</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ps-lg-5">
          <div>
            <a href="#" className="text-decoration-none text-info">
              Popular Search
            </a>
          </div>
          <div>
            <ul className="list p-0 ">
              <li className="list-group-item mb-1">
                Apartments for rent in UAE
              </li>
              <li className="list-group-item mb-1">Studios for sale in UAE</li>
              <li className="list-group-item mb-1">
                Studios for sale in DAMAC Hills
              </li>
              <li className="list-group-item mb-1">Villas for rent in UAE</li>
              <li className="list-group-item mb-1">
                Apartments for sale in UAE
              </li>
              <li className="list-group-item mb-1">Villas for sale</li>
              <li className="list-group-item mb-1">Office for sale</li>
            </ul>
          </div>
          <div className="mb-1">
            <a href="#" className="text-decoration-none text-info">
              Discover
            </a>
          </div>
          <div className="">
            <ul className="list p-0 ">
              <li className="list-group-item mb-1">Dubai Creek</li>
              <li className="list-group-item mb-1">Jumeirah Village Circle</li>
              <li className="list-group-item mb-1">Business Bay</li>
              <li className="list-group-item mb-1">The Valley</li>
              <li className="list-group-item mb-1">Dubailand</li>
              <li className="list-group-item mb-1">Dubai Hills</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ps-lg-5">
          <div>
            <a href="#" className="text-decoration-none text-info">
              Popular Area
            </a>
          </div>
          <div>
            <ul className="list p-0 ">
              <li className="list-group-item mb-1">
                Apartments for sale in Dubai Hills
              </li>
              <li className="list-group-item mb-1">
                Apartments for sale in Downtown Dubai
              </li>
              <li className="list-group-item mb-1">
                Villas for rent in Dubai Hills
              </li>
              <li className="list-group-item mb-1">
                Apartment for sale in Dubai Marina
              </li>
              <li className="list-group-item mb-1">
                Apartments for sale in Dubai
              </li>
              <li className="list-group-item mb-1">
                Townhouse for sale in Arabian Ranches 3
              </li>
              <li className="list-group-item mb-1">
                Townhouse for sale in Arabian Ranches 3
              </li>
            </ul>
          </div>
          <div className="mb-1">
            <a href="#" className="text-decoration-none text-info">
              Quick Links
            </a>
          </div>
          <div className="">
            <ul className="list p-0 ">
              <li className="list-group-item mb-1">Contact</li>
              <li className="list-group-item mb-1">About Us</li>
              <li className="list-group-item mb-1">Our Team</li>
              <li className="list-group-item mb-1">Blog</li>
              <li className="list-group-item mb-1">Partners</li>
              <li className="list-group-item mb-1">Community Guides</li>
              <li className="list-group-item mb-1">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ps-lg-5">
          <div className="mb-1">
            <a
              href="#"
              className="text-decoration-none text-info text-capitalize"
            >
              Keep yourself up to date
            </a>
          </div>
          {/* form start */}
          <form>
            <div className="mb-3 input_box">
              <input
                type="email"
                className="form-control  mt-3"
                id=""
                placeholder="Your Email"
                aria-describedby="emailHelp"
              />
            </div>
          </form>
          {/* form end */}
          <div className="apple_store">
            <div className="row">
              <div className="col-3 ps-5">
                <img src="apple.webp" className="" alt="abc" />
              </div>
              <div className="col-9 px-4">
                <a href="#" className="text-decoration-none text-light">
                  Download on it Apple Store
                </a>
              </div>
            </div>
          </div>
          <div className="google_store mt-4">
            <div className="row">
              <div className="col-3 ps-5">
                <img src="play_store.webp" className="" alt="abc" />
              </div>
              <div className="col-9 px-4">
                <a href="#" className="text-decoration-none text-light">
                  Get on it Apple Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-3">
        <hr className="border border-light border-1 opacity-100" />
      </div>
      <div className="pb-3">
        <a href="" className="text-decoration-none text-light">
          © 2024 SK Skyscrapper PVT.LTD.- All rights reserved
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}
