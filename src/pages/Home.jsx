import TestimonialSlider from "../Component/Home/TestimonialSlider"
import TrustedClientsSlider from "../Component/Home/TrustedClient"

export const Home = () => {
    return (
        <>
            {/* <HeroSection /> */}
            <>
                {/* Hero Section Start */}
                <div className="hero bg-image parallaxie">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                {/* Hero Content Start */}
                                <div className="hero-content">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h1 className="text-anime-style-2" data-cursor="-opaque">Where <span>creativity</span> meets strategy</h1>
                                        <p className="wow fadeInUp" data-wow-delay="0.2s">We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.</p>
                                    </div>
                                    {/* Section Title End */}
                                    {/* Hero Button Start */}
                                    <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="portfolio.html" className="btn-default">view our portfolio</a>
                                    </div>
                                    {/* Hero Button End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End */}
                {/* Trusted Clients Section Start */}
                <TrustedClientsSlider />
               
                {/* Trusted Clients Section End */}
                {/* Our Services Section Start */}
                <div className="our-services">
                    <div className="container">
                        <div className="row section-row">
                            <div className="col-lg-6">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3>our Services</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Our innovative <span>services</span></h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                            <div className="col-lg-6">
                                {/* Section Button Start */}
                                <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                                    <a href="services.html" className="btn-default">view all services</a>
                                </div>
                                {/* Section Button End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Our Services Boxes Start */}
                                <div className="our-services-boxes tab-content wow fadeInUp" data-wow-delay="0.25s" id="servicesbox">
                                    {/* Sidebar Our Services Nav start */}
                                    <div className="our-services-nav">
                                        <ul className="nav nav-tabs" id="servicestab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="01-tab" data-bs-toggle="tab" data-bs-target="#01" type="button" role="tab" aria-selected="true"><span>01</span> UI/UX Design</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="02-tab" data-bs-toggle="tab" data-bs-target="#02" type="button" role="tab" aria-selected="false"><span>02</span> Web Development</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="03-tab" data-bs-toggle="tab" data-bs-target="#03" type="button" role="tab" aria-selected="false"><span>03</span> 3D Designs</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="04-tab" data-bs-toggle="tab" data-bs-target="#04" type="button" role="tab" aria-selected="false"><span>04</span> Digital Marketing Design</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="05-tab" data-bs-toggle="tab" data-bs-target="#05" type="button" role="tab" aria-selected="false"><span>05</span> Motion Graphics</button>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Sidebar Our Services Nav End */}
                                    {/* Our Service Box Start */}
                                    <div className="our-service-box tab-pane fade show active" id="01" role="tabpanel">
                                        <div className="service-box-image">
                                            <figure>
                                                <img src="images/service-image-1.jpg" alt="{true}" />
                                            </figure>
                                        </div>
                                        <div className="service-box-item">
                                            <div className="icon-box">
                                                <img src="images/icon-service-1.svg" alt="{true}" />
                                            </div>
                                            <div className="service-box-item-content">
                                                <h3><a href="services.html">UI/UX Design</a></h3>
                                                <p>We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.</p>
                                            </div>
                                            <div className="service-box-item-btn">
                                                <a href="services.html" className="readmore-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Our Service Box End */}
                                    {/* Our Service Box Start */}
                                    <div className="our-service-box tab-pane fade" id="02" role="tabpanel">
                                        <div className="service-box-image">
                                            <figure>
                                                <img src="images/service-image-2.jpg" alt="{true}" />
                                            </figure>
                                        </div>
                                        <div className="service-box-item">
                                            <div className="icon-box">
                                                <img src="images/icon-service-1.svg" alt="{true}" />
                                            </div>
                                            <div className="service-box-item-content">
                                                <h3><a href="services.html">Web Development</a></h3>
                                                <p>We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.</p>
                                            </div>
                                            <div className="service-box-item-btn">
                                                <a href="services.html" className="readmore-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Our Service Box End */}
                                    {/* Our Service Box Start */}
                                    <div className="our-service-box tab-pane fade" id="03" role="tabpanel">
                                        <div className="service-box-image">
                                            <figure>
                                                <img src="images/service-image-3.jpg" alt="{true}" />
                                            </figure>
                                        </div>
                                        <div className="service-box-item">
                                            <div className="icon-box">
                                                <img src="images/icon-service-1.svg" alt="{true}" />
                                            </div>
                                            <div className="service-box-item-content">
                                                <h3><a href="services.html">3D Designs</a></h3>
                                                <p>We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.</p>
                                            </div>
                                            <div className="service-box-item-btn">
                                                <a href="services.html" className="readmore-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Our Service Box End */}
                                    {/* Our Service Box Start */}
                                    <div className="our-service-box tab-pane fade" id="04" role="tabpanel">
                                        <div className="service-box-image">
                                            <figure>
                                                <img src="images/service-image-4.jpg" alt="{true}" />
                                            </figure>
                                        </div>
                                        <div className="service-box-item">
                                            <div className="icon-box">
                                                <img src="images/icon-service-1.svg" alt="{true}" />
                                            </div>
                                            <div className="service-box-item-content">
                                                <h3><a href="services.html">Digital Marketing Design</a></h3>
                                                <p>We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.</p>
                                            </div>
                                            <div className="service-box-item-btn">
                                                <a href="services.html" className="readmore-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Our Service Box End */}
                                    {/* Our Service Box Start */}
                                    <div className="our-service-box tab-pane fade" id="05" role="tabpanel">
                                        <div className="service-box-image">
                                            <figure>
                                                <img src="images/service-image-5.jpg" alt="{true}" />
                                            </figure>
                                        </div>
                                        <div className="service-box-item">
                                            <div className="icon-box">
                                                <img src="images/icon-service-1.svg" alt="{true}" />
                                            </div>
                                            <div className="service-box-item-content">
                                                <h3><a href="services.html">Motion Graphics</a></h3>
                                                <p>We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.</p>
                                            </div>
                                            <div className="service-box-item-btn">
                                                <a href="services.html" className="readmore-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Our Service Box End */}
                                </div>
                                {/* Our Services Boxes End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Services Section End */}
                {/* Our Work Section Start */}
                <div className="our-work bg-section">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-7">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">our work</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Our design <span>masterpieces</span></h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                            <div className="col-lg-5">
                                {/* Section Button Start */}
                                <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                                    <a href="portfolio.html" className="btn-default">view all portfolio</a>
                                </div>
                                {/* Section Button End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                {/* Work Item Start */}
                                <div className="work-item wow fadeInUp">
                                    <div className="work-image">
                                        <a href="portfolio-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/work-image-1.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="work-body">
                                        <div className="work-content">
                                            <h3><a href="portfolio-single.html">stellar tech solutions</a></h3>
                                            <p>We redesigned Stellar Tech's website to enhance.</p>
                                        </div>
                                        <div className="work-btn">
                                            <a href="portfolio-single.html"><img src="images/arrrow-light.svg" alt="{true}" /></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Work Item End */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* Work Item Start */}
                                <div className="work-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="work-image">
                                        <a href="portfolio-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/work-image-2.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="work-body">
                                        <div className="work-content">
                                            <h3><a href="portfolio-single.html">green wave foods</a></h3>
                                            <p>We built a user-friendly Shopping platform for Green Wave Foods.</p>
                                        </div>
                                        <div className="work-btn">
                                            <a href="portfolio-single.html"><img src="images/arrrow-light.svg" alt="{true}" /></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Work Item End */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* Work Item Start */}
                                <div className="work-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="work-image">
                                        <a href="portfolio-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/work-image-3.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="work-body">
                                        <div className="work-content">
                                            <h3><a href="portfolio-single.html">horizon real estate</a></h3>
                                            <p>We helped Horizon Real Estate establish a trusted brand identity.</p>
                                        </div>
                                        <div className="work-btn">
                                            <a href="portfolio-single.html"><img src="images/arrrow-light.svg" alt="{true}" /></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Work Item End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Work Section End */}
                {/* Creative Tools Section Start */}
                <div className="creative-tools">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-9">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">creative toolkit</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Our toolbox for <span>innovation</span></h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                            <div className="col-lg-3">
                                {/* Section Button Start */}
                                <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                                    <a href="contact.html" className="btn-default">let's get started !</a>
                                </div>
                                {/* Section Button End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Creative Tools Box Start */}
                                <div className="creative-tools-box">
                                    {/* Creative Tool Item Start */}
                                    <div className="creative-tool-item wow fadeInUp">
                                        <div className="icon-box">
                                            <img src="images/icon-creative-tools-1.svg" alt="{true}" />
                                        </div>
                                        <div className="creative-tool-item-content">
                                            <h3>figma</h3>
                                            <p>Design tool</p>
                                        </div>
                                    </div>
                                    {/* Creative Tool Item End */}
                                    {/* Creative Tool Item Start */}
                                    <div className="creative-tool-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-box">
                                            <img src="images/icon-creative-tools-2.svg" alt="{true}" />
                                        </div>
                                        <div className="creative-tool-item-content">
                                            <h3>framer</h3>
                                            <p>Design tool</p>
                                        </div>
                                    </div>
                                    {/* Creative Tool Item End */}
                                    {/* Creative Tool Item Start */}
                                    <div className="creative-tool-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="icon-box">
                                            <img src="images/icon-creative-tools-3.svg" alt="{true}" />
                                        </div>
                                        <div className="creative-tool-item-content">
                                            <h3>illustrator</h3>
                                            <p>Design tool</p>
                                        </div>
                                    </div>
                                    {/* Creative Tool Item End */}
                                    {/* Creative Tool Item Start */}
                                    <div className="creative-tool-item wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="icon-box">
                                            <img src="images/icon-creative-tools-4.svg" alt="{true}" />
                                        </div>
                                        <div className="creative-tool-item-content">
                                            <h3>adobe xd</h3>
                                            <p>Design tool</p>
                                        </div>
                                    </div>
                                    {/* Creative Tool Item End */}
                                    {/* Creative Tool Item Start */}
                                    <div className="creative-tool-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="icon-box">
                                            <img src="images/icon-creative-tools-5.svg" alt="{true}" />
                                        </div>
                                        <div className="creative-tool-item-content">
                                            <h3>indesign</h3>
                                            <p>Design tool</p>
                                        </div>
                                    </div>
                                    {/* Creative Tool Item End */}
                                    {/* Creative Tool Item Start */}
                                    <div className="creative-tool-item wow fadeInUp" data-wow-delay="1s">
                                        <div className="icon-box">
                                            <img src="images/icon-creative-tools-6.svg" alt="{true}" />
                                        </div>
                                        <div className="creative-tool-item-content">
                                            <h3>photoshop</h3>
                                            <p>Design tool</p>
                                        </div>
                                    </div>
                                    {/* Creative Tool Item End */}
                                    {/* Creative Tool Item Start */}
                                    <div className="creative-tool-item wow fadeInUp" data-wow-delay="1.2s">
                                        <div className="icon-box">
                                            <img src="images/icon-creative-tools-7.svg" alt="{true}" />
                                        </div>
                                        <div className="creative-tool-item-content">
                                            <h3>lightroom</h3>
                                            <p>Design tool</p>
                                        </div>
                                    </div>
                                    {/* Creative Tool Item End */}
                                    {/* Creative Tool Item Start */}
                                    <div className="creative-tool-item wow fadeInUp" data-wow-delay="1.4s">
                                        <div className="icon-box">
                                            <img src="images/icon-creative-tools-8.svg" alt="{true}" />
                                        </div>
                                        <div className="creative-tool-item-content">
                                            <h3>incopy</h3>
                                            <p>Design tool</p>
                                        </div>
                                    </div>
                                    {/* Creative Tool Item End */}
                                </div>
                                {/* Creative Tools Box End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Creative Tools Section End */}
                {/* How It Work Section Start*/}
                <div className="how-it-work bg-section">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-8">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">creative toolkit</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Our methodology for <span>success</span></h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                            <div className="col-lg-4">
                                {/* Section Button Start */}
                                <div className="contact-now-circle">
                                    <a href="contact.html"><img src="images/contact-circle.png" alt="{true}" /></a>
                                </div>
                                {/* Section Button End */}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                {/* How It Work Images Start*/}
                                <div className="how-it-work-images">
                                    {/* How Work Image Circle Start*/}
                                    <div className="how-work-image-circle">
                                        <img src="images/how-work-image-circle.png" alt="{true}" />
                                    </div>
                                    {/* How Work Image Circle End*/}
                                    {/* How It Work Image Start*/}
                                    <div className="how-it-work-image">
                                        <figure className="image-anime">
                                            <img src="images/how-it-work-image.jpg" alt="{true}" />
                                        </figure>
                                    </div>
                                    {/* How It Work Image End*/}
                                </div>
                                {/* How It Work Images End*/}
                            </div>
                            <div className="col-lg-6">
                                {/* Work FAQ Accordion Start */}
                                <div className="work-faq-accordion" id="workaccordion">
                                    {/* Work FAQ Item Start */}
                                    <div className="work-accordion-item wow fadeInUp">
                                        <h2 className="accordion-header" id="heading1">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                01. Discovery &amp; Strategy
                                            </button>
                                        </h2>
                                        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#workaccordion">
                                            <div className="accordion-body">
                                                <p>We begin by getting to know you and your brand. Through in-depth conversations, research, and analysis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Work FAQ Item End */}
                                    {/* Work FAQ Item Start */}
                                    <div className="work-accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <h2 className="accordion-header" id="heading2">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                02. Concept Development
                                            </button>
                                        </h2>
                                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#workaccordion">
                                            <div className="accordion-body">
                                                <p>We begin by getting to know you and your brand. Through in-depth conversations, research, and analysis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Work FAQ Item End */}
                                    {/* Work FAQ Item Start */}
                                    <div className="work-accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <h2 className="accordion-header" id="heading3">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                03. Design &amp; Iteration
                                            </button>
                                        </h2>
                                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#workaccordion">
                                            <div className="accordion-body">
                                                <p>We begin by getting to know you and your brand. Through in-depth conversations, research, and analysis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Work FAQ Item End */}
                                    {/* Work FAQ Item Start */}
                                    <div className="work-accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                        <h2 className="accordion-header" id="heading4">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                04. Development &amp; Execution
                                            </button>
                                        </h2>
                                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#workaccordion">
                                            <div className="accordion-body">
                                                <p>We begin by getting to know you and your brand. Through in-depth conversations, research, and analysis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Work FAQ Item End */}
                                </div>
                                {/* Work FAQ Accordion End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* How It Work Section End*/}
                {/* Our Achievements Section Start */}
                <div className="our-achievements">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                {/* Our Achievements Content Start */}
                                <div className="our-achievements-content">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">our achievements</h3>
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">Proud moments &amp; <span>milestones</span></h2>
                                        <p className="wow fadeInUp" data-wow-delay="0.2s">We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.</p>
                                    </div>
                                    {/* Section Title End */}
                                    {/* Our Achievements Button Start */}
                                    <div className="achievements-content-btn wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="contact.html" className="btn-default">let's get started !</a>
                                    </div>
                                    {/* Our Achievements Button End */}
                                </div>
                                {/* Our Achievements Content End */}
                            </div>
                            <div className="col-lg-7">
                                {/* Our Achievements Box Start */}
                                <div className="our-achievements-box wow fadeInUp">
                                    {/* Achievements Item Start */}
                                    <div className="achievements-item">
                                        <h3>2015 - 2016</h3>
                                        <h2>Best Design Award</h2>
                                        <p>We begin by getting to know you and your brand. Through in-depth.</p>
                                    </div>
                                    {/* Achievements Item End */}
                                    {/* Achievements Item Start */}
                                    <div className="achievements-item">
                                        <h3>2016 - 2017</h3>
                                        <h2>Dribble Winner</h2>
                                        <p>We begin by getting to know you and your brand. Through in-depth.</p>
                                    </div>
                                    {/* Achievements Item End */}
                                    {/* Achievements Item Start */}
                                    <div className="achievements-item">
                                        <h3>2017 - 2018</h3>
                                        <h2>Design Of The Year</h2>
                                        <p>We begin by getting to know you and your brand. Through in-depth.</p>
                                    </div>
                                    {/* Achievements Item End */}
                                    {/* Achievements Item Start */}
                                    <div className="achievements-item">
                                        <h3>2017 - 2018</h3>
                                        <h2>Graphic Design Winner</h2>
                                        <p>We begin by getting to know you and your brand. Through in-depth.</p>
                                    </div>
                                    {/* Achievements Item End */}
                                    {/* Achievements Item Start */}
                                    <div className="achievements-item">
                                        <h3>2018 - 2019</h3>
                                        <h2>Awward Winner</h2>
                                        <p>We begin by getting to know you and your brand. Through in-depth.</p>
                                    </div>
                                    {/* Achievements Item End */}
                                    {/* Achievements Item Start */}
                                    <div className="achievements-item">
                                        <h3>2019 - 2020</h3>
                                        <h2>Best Jury Award</h2>
                                        <p>We begin by getting to know you and your brand. Through in-depth.</p>
                                    </div>
                                    {/* Achievements Item End */}
                                </div>
                                {/* Our Achievements Box End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Achievements Section End */}
                {/* CTA Section Start */}
                <div className="cta-section bg-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* CTA Box Start */}
                                <div className="cta-box">
                                    <div className="cta-counter-content-box">
                                        {/* CTA Box Content Start */}
                                        <div className="cta-box-content wow fadeInUp">
                                            <p>We specialize in delivering innovative and impactful design solutions that elevate brands and drive results. From digital experiences to print media, our team of creative professionals is dedicated to transforming ideas into compelling visual stories that resonate with audiences. With a focus on creativity, strategy, and client collaboration.</p>
                                        </div>
                                        {/* CTA Box Content End */}
                                        {/* CTA Counter Box Start */}
                                        <div className="cta-counter-box">
                                            {/* CTA Counter Item Start */}
                                            <div className="cta-counter-item">
                                                <h3><span className="counter">45</span>+</h3>
                                                <p>project completed</p>
                                            </div>
                                            {/* CTA Counter Item End */}
                                            {/* CTA Counter Item Start */}
                                            <div className="cta-counter-item">
                                                <h3><span className="counter">15</span>+</h3>
                                                <p>years of experience</p>
                                            </div>
                                            {/* CTA Counter Item End */}
                                            {/* CTA Counter Item Start */}
                                            <div className="cta-counter-item">
                                                <h3><span className="counter">100</span>%</h3>
                                                <p>client satisfaction</p>
                                            </div>
                                            {/* CTA Counter Item End */}
                                        </div>
                                        {/* CTA Counter Box End */}
                                    </div>
                                    {/* CTA Contact Circle Start */}
                                    <div className="cta-contact-circle">
                                        <a href="contact.html"><img src="images/cta-contact-circle.png" alt="{true}" /></a>
                                    </div>
                                    {/* CTA Contact Circle End */}
                                </div>
                                {/* CTA Box End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* CTA Section End */}
                {/* Our Team Section Start */}
                <div className="our-team">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-8">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">our team</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">The Minds Behind <span>the Magic</span></h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                            <div className="col-lg-4">
                                {/* Section Button Start */}
                                <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                                    <a href="team.html" className="btn-default">all team members</a>
                                </div>
                                {/* Section Button End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                {/* Team Member Item Start */}
                                <div className="team-item wow fadeInUp">
                                    {/* team Image Start */}
                                    <div className="team-image">
                                        <a href="team-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/team-1.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* team Image End */}
                                    {/* Team Body Start */}
                                    <div className="team-body">
                                        {/* Team Content Start */}
                                        <div className="team-content">
                                            <h3><a href="team-single.html">Joseph g. brown</a></h3>
                                        </div>
                                        {/* Team Content End */}
                                        {/* Team Social List Start */}
                                        <div className="team-social-list">
                                            <span>director</span>
                                            <ul>
                                                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                        {/* Team Social List End */}
                                    </div>
                                    {/* Team Body End */}
                                </div>
                                {/* Team Member Item End */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Team Member Item Start */}
                                <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                                    {/* team Image Start */}
                                    <div className="team-image">
                                        <a href="team-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/team-2.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* team Image End */}
                                    {/* Team Body Start */}
                                    <div className="team-body">
                                        {/* Team Content Start */}
                                        <div className="team-content">
                                            <h3><a href="team-single.html">Liam brooks</a></h3>
                                        </div>
                                        {/* Team Content End */}
                                        {/* Team Social List Start */}
                                        <div className="team-social-list">
                                            <span>art director</span>
                                            <ul>
                                                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                        {/* Team Social List End */}
                                    </div>
                                    {/* Team Body End */}
                                </div>
                                {/* Team Member Item End */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Team Member Item Start */}
                                <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                                    {/* team Image Start */}
                                    <div className="team-image">
                                        <a href="team-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/team-3.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* team Image End */}
                                    {/* Team Body Start */}
                                    <div className="team-body">
                                        {/* Team Content Start */}
                                        <div className="team-content">
                                            <h3><a href="team-single.html">sophia evans</a></h3>
                                        </div>
                                        {/* Team Content End */}
                                        {/* Team Social List Start */}
                                        <div className="team-social-list">
                                            <span>illustrator</span>
                                            <ul>
                                                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                        {/* Team Social List End */}
                                    </div>
                                    {/* Team Body End */}
                                </div>
                                {/* Team Member Item End */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Team Member Item Start */}
                                <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                                    {/* team Image Start */}
                                    <div className="team-image">
                                        <a href="team-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/team-4.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* team Image End */}
                                    {/* Team Body Start */}
                                    <div className="team-body">
                                        {/* Team Content Start */}
                                        <div className="team-content">
                                            <h3><a href="team-single.html">noah bennett</a></h3>
                                        </div>
                                        {/* Team Content End */}
                                        {/* Team Social List Start */}
                                        <div className="team-social-list">
                                            <span>UI/UX designer</span>
                                            <ul>
                                                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                        {/* Team Social List End */}
                                    </div>
                                    {/* Team Body End */}
                                </div>
                                {/* Team Member Item End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Team Section End */}
                {/* Our Testimonial Section Start */}
                <TestimonialSlider/>
                
                {/* Our Testimonial Section End */}
                {/* Our Blog Section Start */}
                <div className="our-blog">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-8">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">blog</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Latest insights &amp; <span>inspiration</span></h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                            <div className="col-lg-4">
                                {/* Section Button Start */}
                                <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                                    <a href="blog.html" className="btn-default">view all post</a>
                                </div>
                                {/* Section Button End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                {/* Post Item Start */}
                                <div className="post-item wow fadeInUp">
                                    {/* Post Featured Image Start*/}
                                    <div className="post-featured-image">
                                        <a href="blog-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/post-1.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* Post Featured Image End */}
                                    {/* Post Item Body Start */}
                                    <div className="post-item-body">
                                        {/* Post Item Content Start */}
                                        <div className="post-item-content">
                                            <h2><a href="blog-single.html">The Role of Color Psychology in Branding</a></h2>
                                        </div>
                                        {/* Post Item Content End */}
                                        {/* Post Item Footer Start */}
                                        <div className="post-item-footer">
                                            {/* Post Item Tag Start */}
                                            <div className="post-item-meta">
                                                <ul>
                                                    <li>27 dec, 2024</li>
                                                </ul>
                                            </div>
                                            {/* Post Item Tag End */}
                                            {/* Post Item Readmore Button Start*/}
                                            <div className="post-item-btn">
                                                <a href="blog-single.html" className="readmore-btn">read more</a>
                                            </div>
                                            {/* Post Item Readmore Button End*/}
                                        </div>
                                        {/* Post Item Footer End */}
                                    </div>
                                    {/* Post Item Body End */}
                                </div>
                                {/* Post Item End */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* Post Item Start */}
                                <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                                    {/* Post Featured Image Start*/}
                                    <div className="post-featured-image">
                                        <a href="blog-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/post-2.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* Post Featured Image End */}
                                    {/* Post Item Body Start */}
                                    <div className="post-item-body">
                                        {/* Post Item Content Start */}
                                        <div className="post-item-content">
                                            <h2><a href="blog-single.html">How color Shades and Brand Identity</a></h2>
                                        </div>
                                        {/* Post Item Content End */}
                                        {/* Post Item Footer Start */}
                                        <div className="post-item-footer">
                                            {/* Post Item Tag Start */}
                                            <div className="post-item-meta">
                                                <ul>
                                                    <li>27 dec, 2024</li>
                                                </ul>
                                            </div>
                                            {/* Post Item Tag End */}
                                            {/* Post Item Readmore Button Start*/}
                                            <div className="post-item-btn">
                                                <a href="blog-single.html" className="readmore-btn">read more</a>
                                            </div>
                                            {/* Post Item Readmore Button End*/}
                                        </div>
                                        {/* Post Item Footer End */}
                                    </div>
                                    {/* Post Item Body End */}
                                </div>
                                {/* Post Item End */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* Post Item Start */}
                                <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                                    {/* Post Featured Image Start*/}
                                    <div className="post-featured-image">
                                        <a href="blog-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/post-3.jpg" alt="{true}" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* Post Featured Image End */}
                                    {/* Post Item Body Start */}
                                    <div className="post-item-body">
                                        {/* Post Item Content Start */}
                                        <div className="post-item-content">
                                            <h2><a href="blog-single.html">Breaking Down the Design Process From Concept</a></h2>
                                        </div>
                                        {/* Post Item Content End */}
                                        {/* Post Item Footer Start */}
                                        <div className="post-item-footer">
                                            {/* Post Item Tag Start */}
                                            <div className="post-item-meta">
                                                <ul>
                                                    <li>27 dec, 2024</li>
                                                </ul>
                                            </div>
                                            {/* Post Item Tag End */}
                                            {/* Post Item Readmore Button Start*/}
                                            <div className="post-item-btn">
                                                <a href="blog-single.html" className="readmore-btn">read more</a>
                                            </div>
                                            {/* Post Item Readmore Button End*/}
                                        </div>
                                        {/* Post Item Footer End */}
                                    </div>
                                    {/* Post Item Body End */}
                                </div>
                                {/* Post Item End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Blog Section End */}
            </>

        </>
    )
}