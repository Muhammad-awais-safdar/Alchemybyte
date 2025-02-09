export const Footer = () => {
    const time = new Date();
    const year = time.getFullYear();
    const nextYear = year + 10;
    return (
        <>
            <footer className="footer-section">
                <div className="footer-box bg-section">
                    <div className="footer-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* Footer Title Content Start */}
                                    <div className="footer-title-content">
                                        <h2><a href="contact.html">Let's Connect</a></h2>
                                    </div>
                                    {/* Footer Title Content End */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main Footer Start */}
                    <div className="main-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    {/* About Footer Start */}
                                    <div className="about-footer">
                                        {/* Footer Logo Start */}
                                        <div className="footer-logo">
                                            <img src="images/logo.png" alt={true}  style={{
                                    filter: 'brightness(0) invert(1)'
                                }}  />
                                        </div>
                                        {/* Footer Logo End */}
                                        {/* About Footer Content Start */}
                                        <div className="about-footer-content">
                                            <p>The creativity and professionalism shown by Alchemy Byte  exceeded our expectations. Their design transformed our brand, and the results speak for themselves.</p>
                                        </div>
                                        {/* Footer Social Links Start */}
                                        <div className="footer-social-links">
                                            <ul>
                                                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                                            </ul>
                                        </div>
                                        {/* Footer Social Links End */}
                                    </div>
                                    {/* About Footer End */}
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    {/* About Links Start */}
                                    <div className="footer-links">
                                        <h3>quick links</h3>
                                        <ul>
                                            <li><a href="index-2.html">home</a></li>
                                            <li><a href="about.html">about us</a></li>
                                            <li><a href="team.html">team</a></li>
                                            <li><a href="portfolio.html">our portfolio</a></li>
                                        </ul>
                                    </div>
                                    {/* About Links End */}
                                </div>
                                <div className="col-lg-3 col-md-4 col-6">
                                    {/* About Links Start */}
                                    <div className="footer-links">
                                        <h3>our services</h3>
                                        <ul>
                                            <li><a href="service-single.html">UI/UX Design</a></li>
                                            <li><a href="service-single.html">3D Designs</a></li>
                                            <li><a href="service-single.html">Web Development</a></li>
                                            <li><a href="service-single.html">Motion Graphics</a></li>
                                        </ul>
                                    </div>
                                    {/* About Links End */}
                                </div>
                                <div className="col-lg-3 col-md-5">
                                    {/* About Links Start */}
                                    <div className="footer-contact">
                                        <h3>contact info</h3>
                                        {/* Footer Contact Details Start */}
                                        <div className="footer-contact-details">
                                            {/* Footer Info Box Start */}
                                            <div className="footer-info-box">
                                                <div className="icon-box">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <div className="footer-info-box-content">
                                                    <p><a href="tel:456852789">+01 456-852-789</a></p>
                                                </div>
                                            </div>
                                            {/* Footer Info Box End */}
                                            {/* Footer Info Box Start */}
                                            <div className="footer-info-box">
                                                <div className="icon-box">
                                                    <i className="fa-solid fa-envelope" />
                                                </div>
                                                <div className="footer-info-box-content">
                                                    <p><a href="#">info@domainname.com</a></p>
                                                </div>
                                            </div>
                                            {/* Footer Info Box End */}
                                            {/* Footer Info Box Start */}
                                            <div className="footer-info-box">
                                                <div className="icon-box">
                                                    <i className="fa-solid fa-location-dot" />
                                                </div>
                                                <div className="footer-info-box-content">
                                                    <p>843, Apple LanePeoria</p>
                                                </div>
                                            </div>
                                            {/* Footer Info Box End */}
                                        </div>
                                        {/* Footer Contact Details End */}
                                    </div>
                                    {/* About Links End */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main Footer End */}
                    {/* Footer Copyright Section Start */}
                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    {/* Footer Copyright Start */}
                                    <div className="footer-copyright-text">
                                        <p>Copyright © {year} - {nextYear} All Rights Reserved.</p>
                                    </div>
                                    {/* Footer Copyright End */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Copyright Section End */}
                </div>
            </footer>

        </>
    )
}