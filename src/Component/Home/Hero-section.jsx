export const HeroSection = () => {
    return (
        <>
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
            
        </>
    )
}