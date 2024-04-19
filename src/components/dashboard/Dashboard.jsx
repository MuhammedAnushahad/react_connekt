import React, {useState} from "react";
import { Navbar } from "../Navbar";
import "./Dashboard.css";

// import Carousel from "react-material-ui-carousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { sendMail } from "../../email";
//Carousel
export const Dashboard = () => {
  const responsive = {
    superLargeDesktop: {
    
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  //newsletter submission
  const handleSubmit =(e) => {
    e.preventDefault();
  }
  // const sendMail = () => {
  //   console.log("Sending...");}

  return (
    <>
      <div className="body-scroll">
        {/* <!-- Document Wrapper
    ============================================= --> */}
        <div id="wrapper" className="wrapper clearfix">
          <Navbar />

          

          {/*
            <!-- Header
            ============================================= --> */}

          {/* <!-- Slider #1
    ============================================= --> */}

          <section id="home" className="section slider slider-2 bimgsty">

            <div className="slide--item bg-overlay bg-overlay-dark">
              {/* <div className="bg-section">
						  <img src="assets/images/background/bg-1.jpg" alt="background" />
					  </div> */}
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div
                      className="slide--logo mt-100 hidden-xs wow fadeInUp"
                      data-wow-duration="1s"
                    >
                      <img
                        src="assets/images/logo/logo-light.png"
                        alt="logo hero"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 pt-100 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="slide--headline">
                      <h1>
                        ConnektPlus: Where Your Profiles Meet Opportunities
                      </h1>
                    </div>
                    <div className="slide--bio">
                      Join us on ConnektPlus, where your profiles become
                      gateways to a world of possibilities.
                    </div>
                    <div className="slide--action cta">
                      {/* <!--<a className
="btn-hover" href="#"><img src="assets/images/appstore.png" alt="download appstore"></a>--> */}
                      <a
                        className="btn-hover"
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.inciem.connekt"
                      >
                        <img
                          src="assets/images/playstore.png"
                          alt="download playstore"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="slide--holder">
                    <img
                      className="img-responsive pull-right"
                      src="assets/images/connect1.png"
                      alt="screens"
                    />
                  </div>
                </div>
                {/* <!-- .row end --> */}
              </div>
              {/* <!-- .container end --> */}
            </div>
            {/* <!-- .slide-item end --> */}
          </section>
          {/* <!-- #slider end --> */}

          <div className="clearfix pt-100 bg-white"></div>

          {/* <!-- Feature #2
    ============================================= --> */}
          <section

            

            className="section feature feature-2 text-center bg-white"
          >
            <div id="feature" className="container">
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                  <div
                    className="heading heading-1 mb-80 text--center wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <h2 className="heading--title">Benefits of ConnektPlus</h2>
                  </div>
                </div>
                {/* <!-- .col-md-6 end --> */}
              </div>
              {/* <!-- .row end --> */}
              <div className="row mb-60">
                {/* <!-- Panel #1 --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="feature-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="feature--icon">
                      <i className="lnr lnr-users"></i>
                    </div>
                    <div className="feature--content">
                      <h3>Easy Profile Share</h3>
                      <p>
                      With a few clicks, you can easily share your company and professional profiles. With ConnektPlus,
                       posting your profile is simple and helps you grow your network and opportunities. 
                      </p>
                    </div>
                  </div>
                  {/* <!-- .feature-panel end --> */}
                </div>
                {/* <!-- .col-md-4 end -->

    <!-- Panel #2 --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="feature-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="feature--icon">
                      <i className="lnr lnr-cog"></i>
                    </div>
                    <div className="feature--content">
                      <h3>Easy Connection</h3>
                      <p>
                      Make easy connections with possible clients and like-minded colleagues. With ConnektPlus,
                       quick connections are only a click away, making it simple to grow your network and grab new chances. 
                      </p>
                    </div>
                  </div>
                  {/* <!-- .feature-panel end --> */}
                </div>
                {/* <!-- .col-md-4 end --> */}

                {/* <!-- Panel #3 --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="feature-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="feature--icon">
                      <i className="lnr lnr-lock"></i>
                    </div>
                    <div className="feature--content">
                      <h3>Save Your Time</h3>
                      <p>
                      Your portfolio-sharing process is streamlined with ConnektPlus, saving you significant time. Spend more
                       time taking advantage of opportunities and expanding your network, and less time on the process. 
                      </p>
                    </div>
                  </div>
                  {/* <!-- .feature-panel end --> */}
                </div>
                {/* <!-- .col-md-4 end --> */}
              </div>
              {/* <!-- .row end --> */}
            </div>
            {/* <!-- .container end --> */}
          </section>
          {/* <!-- #feature2 end --> */}

          {/* <!-- Feature #3
    ============================================= --> */}
          <section
            id="feature3"
            className="section feature feature-left feature-left-circle"
          >
            <div className="container">
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                  <div
                    className="heading heading-1 mb-60 text--center wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <h2 className="heading--title">How does it work ?</h2>
                  </div>
                </div>
                {/* <!-- .col-md-6 end --> */}
              </div>
              {/* <!-- .row end --> */}
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div
                    className="center-block text-center mb-100 wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <img
                      src="assets/images/mockup/iphone.png"
                      alt="screenshots"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- .row end --> */}
              <div className="row">
                {/* <!-- Panel #1 --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="feature-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="feature--icon">1</div>
                    <div className="feature--content">
                      <h3>Download & Install</h3>
                      <p>
                        Download ConnektPlus from your Google Play Store.
                        Install the app on your device.
                      </p>
                    </div>
                  </div>
                  {/* <!-- .feature-panel end --> */}
                </div>
                {/* <!-- .col-md-4 end -->

    <!-- Panel #2 --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="feature-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="feature--icon">2</div>
                    <div className="feature--content">
                      <h3>Create Profile</h3>
                      <p>
                        To create an account on ConnektPlus, log in and provide
                        your personal and business details.
                      </p>
                    </div>
                  </div>
                  {/* <!-- .feature-panel end --> */}
                </div>
                {/* <!-- .col-md-4 end -->

    <!-- Panel #3 --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="feature-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="feature--icon">3</div>
                    <div className="feature--content">
                      <h3>Share Profile</h3>
                      <p>
                        You can easily and digitally share your profile with
                        other people.
                      </p>
                    </div>
                  </div>
                  {/* <!-- .feature-panel end --> */}
                </div>
                {/* <!-- .col-md-4 end --> */}
              </div>
              {/* <!-- .row end --> */}
            </div>
            {/* <!-- .container end --> */}
          </section>
          {/* <!-- #feature3 end --> */}

          {/* <!-- Video
    ============================================= -->
    <!--<section id="video" className
="section video bg-overlay bg-overlay-dark bg-parallex">-->
    <!--	<div className
="bg-section">-->
    <!--		<img src="assets/images/background/bg-2.jpg" alt="background">-->
    <!--	</div>-->
    <!--	<div className
="container">-->
    <!--		<div className
="row clearfix">-->
    <!--			<div className
="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">-->
    <!--				<div className
="heading heading-1 mb-60 text--center wow fadeInUp" data-wow-duration="1s">-->
    <!--					<h2 className
="heading--title text-white">Watch a demo</h2>-->
    <!--					<p className
="heading--desc text-white">we shows only the best websites, portfolios ans landing pages built completely with passion, simplicity & creativity !</p>-->
    <!--				</div>-->
    <!--			</div>-->
                <!-- .col-md-6 end -->
    <!--		</div>-->
            <!-- .row end -->
    <!--		<div className
="row">-->
    <!--			<div className
="col-xs-12 col-sm-12 col-md-12 text-center wow fadeInUp" data-wow-duration="1s">-->
    <!--				<div className
="video-ipad-holder">-->
    <!--					<iframe src="https://player.vimeo.com/video/58363288?color=ffffff&title=0&byline=0&portrait=0"></iframe>-->
    <!--				</div>-->
    <!--			</div>-->
    <!--		</div>-->
    <!--	</div>-->
    <!--</section>-->
    <!-- #video end --> */}

          {/* <!-- Screenshots
    ============================================= --> */}
          <section id="screenshots" className="section screenshots bg-white">
            <div className="container">
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                  <div
                    className="heading heading-1 mb-60 text--center wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <h2 className="heading--title">Screenshots</h2>
                    <p className="heading--desc">
                     Explore a visual journey through our platform's interface, features and user experience !
                    </p>
                  </div>
                </div>
                {/* <!-- .col-md-6 end --> */}
              </div>
              {/* <!-- .row end --> */}
              <div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12">
						<div className="carousel" data-slide="4" data-slide-res="2" data-autoplay="true" data-nav="false" data-dots="false" data-space="30" data-loop="true" data-speed="1000">
							

							{/* <Carousel> */}<Carousel swipeable={true}
  draggable={true} arrows={false} autoPlay={true} autoPlaySpeed={1000}
  responsive={responsive}>

							{/* <div className="screenshot">
								<img className="center-block" src="assets/images/screenshots/7.jpg" alt="client" />
							</div> */}

							
							<div className="screenshot">
								<img className="center-block img-responsive" src="assets/images/screenshots/6.jpg" alt="client" />
							</div>

							
							<div className="screenshot">
								<img className="center-block img-responsive" src="assets/images/screenshots/7.jpg" alt="client" />
							</div>

							<div className="screenshot">
								<img className="center-block img-responsive" src="assets/images/screenshots/8.jpg" alt="client" />
							</div>

							
							<div className="screenshot">
								<img className="center-block img-responsive" src="assets/images/screenshots/9.jpg" alt="clclientient" />
							</div>

							{/* <!-- screenshot #6 --> */}
							<div className="screenshot">
								<img className="center-block img-responsive" src="assets/images/screenshots/5.jpg" alt="screenshot" />

							</div>
              </Carousel>
						{/* </Carousel> */}
            </div>

					</div>
					
				</div>
				</div>
            {/* <!-- .container End --> */}
          </section>
          {/* <!-- #screenshots End--> */}
          {/*
            <!-- reviews
            ============================================= --> */}
          <section id="reviews" className="section reviews">
            <div className="container">
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <div
                    className="heading heading-1 mb-60 text--center wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <h2 className="heading--title">User reviews</h2>
                    <p className="heading--desc">
                     Discover what our users are saying about our digital portfolio application !
                    </p>
                  </div>
                </div>
                {/* <!-- .col-md-6 end --> */}
              </div>
              {/* <!-- .row end --> */}
              <div className="row">
                {/* <!--  Testimonial #1  --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="testimonial-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="testimonial-body">
                      <div className="testimonial--body">
                        <p>
                        “I've found this digital portfolio application incredibly useful. It's simplified how I present our company's campaigns and initiatives to potential clients.”
                        </p>
                      </div>
                      <div className="testimonial--meta">
                        <div className="testimonial--author pull-left">
                          <h5>Abhay Raj</h5>
                        </div>
                        <div className="testimonial--rating pull-right">
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star-half-full"></i>
                          <i className=" fa fa-star-o"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--  Testimonial #2  --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="testimonial-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="testimonial-body">
                      <div className="testimonial--body">
                        <p>
                        “As a UX/UI designer, this digital portfolio application has become an essential part of my toolbox. Its flexibility allows
                         me to showcase my design process.” 
                        </p>
                      </div>
                      <div className="testimonial--meta">
                        <div className="testimonial--author pull-left">
                          <h5>Jessy Arthur</h5>
                        </div>
                        <div className="testimonial--rating pull-right">
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--  Testimonial #3  --> */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div
                    className="testimonial-panel wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="testimonial-body">
                      <div className="testimonial--body">
                        <p>
                        “I've previously
                         used many different digital portfolio systems, but none have wowed me as much as this one.
                         Overall, a fantastic app.” 
                        </p>
                      </div>
                      <div className="testimonial--meta">
                        <div className="testimonial--author pull-left">
                          <h5>James Jonson</h5>
                        </div>
                        <div className="testimonial--rating pull-right">
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star"></i>
                          <i className=" fa fa-star-half-full"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .row end --> */}
            </div>
            {/* <!-- .container End --> */}
          </section>
          {/* <!-- #reviews End--> */}

          {/* <!-- CTA #1 */}
          {/* ============================================= --> */}
          <section id="cta" className="section cta text-center pb-0  bg-white">
            <div className="container">
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                  <div
                    className="heading heading-1 mb-50 text--center wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <h2 className="heading--title">
                      Download & install ConnektPlus now
                    </h2>
                  </div>
                </div>
                {/* <!-- .col-md-6 end --> */}
              </div>
              {/* <!-- .row end --> */}
              <div className="row">
                <div
                  className="col-xs-12 col-sm-12 col-md-12 mb-100 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  {/* <!--<a className
="btn-hover" href="#"><img src="assets/images/appstore.png" alt="download appstore"></a>--> */}
                  <a
                    className="btn-hover"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.inciem.connekt"
                  />
                  <img
                    src="assets/images/playstore.png"
                    alt="download playstore"
                  />
                </div>
                {/* <!-- .col-md-12 end --> */}
                <div
                  className="col-xs-12 col-sm-12 col-md-12 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <img src="assets/images/mockup/2-layers.png" alt="mockup" />
                  {/* <!-- .col-md-12 end --> */}
                </div>
              </div>
              {/* <!-- .row end --> */}
            </div>
            {/* <!-- .container end --> */}
          </section>
          {/* <!-- #cta1 end -->

    <!-- Newsletter #1 */}
          {/* ============================================= --> */}
          {/* <section
            id="newsletter"
            className="section newsletter text-center bg-overlay bg-overlay-dark bgimgst"
          >
          
            <div className="container">
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <div
                    className="heading heading-1 mb-60 text--center wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <h2 className="heading--title text-white">
                      Subscribe to get updates
                    </h2>
                    <p className="heading--desc text-white">
                      Stay in the loop with ConnektPlus! Subscribe to receive
                      the latest updates, news, and exciting features directly
                      in your inbox. Don't miss out on opportunities – be the
                      first to know with our newsletter. Join now !
                    </p>
                  </div>
                </div>
               
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <form onSubmit={handleSubmit}
                    className="mb-0 form-action wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="input-group">
                      <input
                      name="email"
                        type="email"
                        className="form-control" 
                        placeholder="E-mail address"
                        required
                      />
                      <span className="input-group-btn">
                        <input
                          type="submit"
                          className="btn btn--primary"
                          value="Subscribe"
                          name="submit"
                          onClick={sendMail}

                        />
                      </span>
                    </div>
                  
                  </form>
                </div>
           
              </div>
              
            </div>
           
          </section> */}
          {/* <!-- #newsletter end --> */}
        </div>
      </div>
    </>
  );
};
