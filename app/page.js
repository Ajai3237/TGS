"use client";
import Header from "@/Components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faShieldAlt, faThLarge, faClipboardList, faWindowRestore, faGlobe, faCloud } from '@fortawesome/free-solid-svg-icons'
// import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <Header />

      <div
        style={{
          width: "100%", height: "750px", position: "relative", backgroundImage: "url('/Assets/pexels-jakubzerdzicki-16071270.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)", }}></div>

        {/* Centered text */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", }} >
          {/* Main Heading */}
          <h1 style={{
            fontSize: "55px", fontWeight: "bolder", fontFamily: "'Open Sans', sans-serif", color: "white", textAlign: "center", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            marginTop: "110px"
          }}>
            <span style={{ color: "white" }}>Traits Global</span>{" "}
            <span style={{ color: "#FFAA01" }}>Solutions</span>
          </h1>

          {/* Subtitle */}
          <div style={{ textAlign: "center", lineHeight: "50px", color: "rgba(255, 255, 255, 0.55)", }} >
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                fontFamily: "'Open Sans', sans-serif"
              }}
            >
              "Preserving The Virtue of
            </span>
            <br />
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Technology"
            </span>
          </div>

          {/* Button */}
          <div style={{ marginTop: "20px" }}>
            <a
              style={{
                backgroundColor: "rgba(255, 170, 1, 0.7)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "bold",
                textAlign: 'center'
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* GET TO KNOW US */}
      <div style={{ padding: "60px 20px", backgroundColor: "#F3F1EE" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
            GET TO
            <span style={{ color: "#FFAA01" }}> KNOW</span>  US
          </h2>
          <p style={{
            fontSize: "13px",
            fontFamily: "'Roboto', sans-serif",
            color: "#313131",
            textAlign: "center",
            marginTop: '40px',
            letterSpacing: "1px",
            textTransform: "uppercase",
            lineHeight: "1.8",
          }}>
            We trust you will find our services useful to your business and we are keen to engage with you on challenging and interesting assignments that contribute to your growth. Our journey started over seven years ago, as a humble firm offering basic
            IT services to small and medium enterprises in Kerala. Today we have grown into a full-service Of software development, Web based applications, Website development and Hosting, professional IT  Infrastructure service provider that meets all your Business needs. Also We are providing the services like IT solution &
            support, Home office automation, IT Security Services, Connectivity services like MPLS, Internet Leased Lines, Broadband etc through our sisterconcern named RIDHITECH INDIA (P) LTD. We have dedicated team for offering Branding & Marketing services for your esteemed Organization. We are also part of MSME Service & GeM.
            Government e Marketplace (GeM) is a 100 percent Government owned & National Public Procurement Portal. GeM is dedicated e market for different goods. So we can provide wide range of support for your business. Today we have grown into a full-service Of professional IT
            / Infrastructure service provider that meets all your Business needs. We traits (TGS)
          </p>
        </div>

        {/* icons */}
        <div style={{ padding: "60px 20px", backgroundColor: "#F3F1EE" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* ---- FIRST ROW  ---- */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                justifyContent: "center",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FontAwesomeIcon icon={faHeadset} style={{ width: 55, height: 55, color: "#FFAA01" }} />
                <div style={{ fontSize: 13, marginTop: 10, fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}>IT Solutions Staffing & Support</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FontAwesomeIcon icon={faShieldAlt} style={{ width: 55, height: 55, color: "#FFAA01" }} />
                <div style={{ fontSize: 13, marginTop: 10, fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}>Strong Security</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FontAwesomeIcon icon={faThLarge} style={{ width: 55, height: 55, color: "#FFAA01" }} />
                <div style={{ fontSize: 13, marginTop: 10, fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}>Web Based Applications Development</div>
              </div>
            </div>

            {/* ---- SECOND ROW  ---- */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "30px",
                textAlign: "center",
                paddingTop: '35px'
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FontAwesomeIcon icon={faClipboardList} style={{ width: 55, height: 55, color: "#FFAA01" }} />
                <div style={{ fontSize: 13, marginTop: 10, fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}>Infrastructure Solution & Support</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FontAwesomeIcon icon={faWindowRestore} style={{ width: 55, height: 55, color: "#FFAA01" }} />
                <div style={{ fontSize: 13, marginTop: 10, fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}>Website Development</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FontAwesomeIcon icon={faGlobe} style={{ width: 55, height: 55, color: "#FFAA01" }} />
                <div style={{ fontSize: 13, marginTop: 10, fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}>Website Hosting</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FontAwesomeIcon icon={faCloud} style={{ width: 55, height: 55, color: "#FFAA01" }} />
                <div style={{ fontSize: 13, marginTop: 10, fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}>Datacentre Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}
      <div style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: "600", fontFamily: "'Roboto', sans-serif", color: "#333", letterSpacing: '2px' }}>
            "Mobility Services & <br /> Application Integration"
          </h2>

          <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginTop: "40px" }}>
            {/* Left Content */}
            <div style={{ flex: 1, padding: "10px", borderRadius: "10px" }}>
              <p style={{ fontSize: "13px", lineHeight: "1.8", fontFamily: "'Roboto', sans-serif", color: "#313131", letterSpacing: "1px", textTransform: "uppercase" }}>
                TGS has the unique expertise in mobile development for multiple technologies to create powerful native and mobile web apps for popular mobile platforms including Android, iPhone, iPad and Windows Mobile Phone. Our expertise includes designing and building of real-time apps, mobile web utility products
                that go well together with your business needs allowing instant messaging, e-mailing and mobile accessibility to vital business operational areas. Sometimes different applications need to work in unison with the business flow to meet compliance or data needs. We develop middleware to enable integration of systems and applications across the enterprise apart from facilitating flexible customized applications and business process integration (BPI) solutions to synchronize your databases to avoid data inefficiencies, multiple occurrences of same process or less straightforward business processes resulting in higher costs.
              </p>
            </div>

            {/* Right Content */}
            <div style={{ flex: 1, padding: "20px", borderRadius: "10px" }}>
              <div style={{ flex: 1, padding: "20px", borderRadius: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                  {/* ASP.NET Bar */}
                  <div className="accordion">
                    <input type="checkbox" id="bar1" hidden />
                    <label htmlFor="bar1" className="accordion-label">
                      <span style={{ color: '#FFAA01', fontSize: '23px' }} className="num">01</span>
                      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '20px' }} className="title">ASP.NET</span>
                      <i className="fa-solid fa-angle-down arrow"></i>
                    </label>
                    <div className="content">
                      <p>The exceptional problem-solving skills of our .NET programmers allow us to tackle all kinds of customer business challenges. Over the last 10 years our team is dedicated in building high-performing, scalable, high-volume, concurrent, low-latency business applications using Microsoft.
                        Net platform for various clients. We can design, evaluate, and compare different approaches to the problem that has yet to be solved effectively.</p>
                    </div>
                  </div>

                  {/* Android Bar */}
                  <div className="accordion">
                    <input type="checkbox" id="bar2" hidden />
                    <label htmlFor="bar2" className="accordion-label">
                      <span style={{ color: '#FFAA01', fontSize: '23px' }} className="num">02</span>
                      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '20px' }} className="title">Android</span>
                      <i className="fa-solid fa-angle-down arrow"></i>
                    </label>
                    <div className="content">
                      <p>Building for Android presents a unique set of challenges because of the fragmented device market. Traits expert Android app development team leverages the best of what the Android OS has to offer to make it device adaptive. Our developers have expertise in the mobile application development space,
                        Android Software Development Kit (SDK), OpenGL, Android Graphics APIs, Locationâ€“based Service APIs, Android Security Architecture and other technologies required to build best in class Android apps. Development of native Android apps for smart phones and tablets, and testing the same on multiple devices are some of the areas we specialize in</p>
                    </div>
                  </div>

                  {/* Java Bar */}
                  <div className="accordion">
                    <input type="checkbox" id="bar3" hidden />
                    <label htmlFor="bar3" className="accordion-label">
                      <span style={{ color: '#FFAA01', fontSize: '23px' }} className="num">03</span>
                      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '20px' }} className="title">Java</span>
                      <i className="fa-solid fa-angle-down arrow"></i>
                    </label>
                    <div className="content">
                      <p>We provides design and development services designed to deliver software that efficiently utilizes the services available from Java application servers and the J2EE framework. Our Java development solutions include Development of web-oriented J2EE-based solutions, Development of Java-based Software Products, Migration of Customer's Software Solutions to Java/J2EE Platform,
                        Consulting Services on Java-based Software Development, and J2ME-based Solution Development.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* parallax */}
      <div className="parallax">
        <div style={{ maxWidth: "1190px", margin: "0 auto" }} className="parallax-content">
          <h2 >Mission & Vision</h2>
          <p>
            Traits Global Solutions is a Software company Based out in HiLITE Business Park,Calicut- Kerala. Traits engages in developing and deploying Web applications, ERP solutions, CRMs, Workflow automation solutions,Website development & Hosting, Email-services etc. We help clients manage change and transform their businesses through high-quality, cost-effective business information solutions. Our capability to evolve and be flexible to a dynamic business world will provide us an identity in the mission.
            We are dedicated to provide comprehensive, web-enabled, end-to-end information technology and business services to augment our client's businesses. 
          </p>
        </div>
      </div>


      {/* WHAT WE DO */}

      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: '40px' }}>
        <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
          WHAT
          <span style={{ color: "#FFAA01" }}> WE</span>  DO
        </h2>
        <p style={{
          fontSize: "13px",
          fontFamily: "'Roboto', sans-serif",
          color: "#313131",
          textAlign: "center",
          marginTop: '40px',
          letterSpacing: "1px",
          textTransform: "uppercase",
          lineHeight: "1.8",
        }}>
          Traits Global solutions Providing software and application development, web designing, hosting and IT support Services. We are one of the trusted business advisors, assuring peace of mind through cultivated expertise, extensive resources, and uncompromising services.
          We specialize in computer support and IT networking for the start-up and established business.also we are providing solutions as per the customer requirement.
        </p>


        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              width: "400px",
              height: "220px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333" , fontFamily:"'Roboto', sans-serif"}}>
              WEB APPLICATION
            </h3>
            <p style={{ fontSize: "14px", color: "#666" }}>
              We are competent in Web Development of custom designed solutions, Full-Service Web Site development, Web-enabled Databases development and Applications, Web Application development, Business to Consumer Web Sites,
               E-Business and E-Commerce-enabled Web Sites development, Simple “Static” Sites or Complex Interactive Sites development
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "400px",
              height: "265px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{  fontSize: "20px", fontWeight: "bold", color: "#313131" , fontFamily:"'Roboto', sans-serif"}}>
              ERP SOLUTION
            </h3>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Based on our long-standing experience and niche expertise in ERP solutions development, we can be your strategic partner to develop performance-based products and solutions that really work for you, to help make a significant
               difference to your bottom line. We assemble pre-built components to enterprise solutions to collaborate customer/supplier Extranets, CRM, and employee intranet requirements or supply chain management solutions having intelligent modules to execute supply chain management globally.
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              width: "400px",
              height: "220px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
              Card Title 3
            </h3>
            <p style={{ fontSize: "14px", color: "#666" }}>
              This is the description for card 3. It provides a brief overview of the content.
            </p>
          </div>

          {/* Card 4 */}
          <div
            style={{
              width: "400px",
              height: "220px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
              Card Title 4
            </h3>
            <p style={{ fontSize: "14px", color: "#666" }}>
              This is the description for card 4. It provides a brief overview of the content.
            </p>
          </div>
        </div>

      </div>



    </>
  );
}
