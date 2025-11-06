import { useState } from 'react'
import viteLogo from '/vite.svg'
import './css/main.css'
import "./css/Carousel.css"
import './js/custom.js';
import { useRef} from 'react';
import emailjs from 'emailjs-com';

function App() {
  	const [count, setCount] = useState(0);
	const form = useRef();
  	const [status, setStatus] = useState('');

  const cities = {
    mumbai: [1, 12, 2, 3, 5, 6, 7, 8, 9, 10, 11, 13],
    delhi: [1],
    gurgaon: [1, 2, 3, 1, 2, 3],
    chennai: [1, 2, 3, 1, 2, 3],
    bangalore: [1, 2, 3, 1, 2, 3],
  };
  const sendEmail = (e)=>{
    e.preventDefault();
    setStatus('Sending...');
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(()=>{ setStatus('✅ Sent!'); form.current.reset(); })
      .catch((err)=>{ console.error(err); setStatus('❌ Failed — replace EmailJS placeholders.'); });
  };

  return (
    <>
      <div>
    {/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHJCZ34P"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}
	<header>
		<nav className="navbar is-fixed-top  has-shadow is-spaced" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand ">
					<a className="navbar-item" href="index.html">
						<img src="./src/assets/logo.png" width="82" height="28"/>
					</a>
					
					<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				
				<div id="navbarBasicExample" className="navbar-menu is-dark">
					<div className="navbar-start">
						<a href="#home" className="navbar-item is-active">
							HOME
						</a>
						
						<a href="#cafe" className="navbar-item">
							CAFE’S 
						</a>

						<a href="#about" className="navbar-item">
							ABOUT
						</a>

						<a href="#services" className="navbar-item">
							SERVICES
						</a>
						
						<a href="#pricing" className="navbar-item">
							PRICING
						</a>

						<a href="#footer" className="navbar-item">
							CONTACT &nbsp;&nbsp;<i className="material-icons-outlined"> email</i>
						</a>
					
					</div>
				</div>
			</div>
		</nav>
	</header>
	<main className="has-background-dark">
		
	<div className="hero-slider" id="home">
		<div>
			<section className="hero slide-1">
				<div className="hero-body">
					<picture>
						<source media="(min-width:1024px)" srcSet="./src/assets/slide/slide-1.jpg"/>
						<img src="./src/assets/slide/slide-1-mob.jpg" alt="Join Next Level" className="hero-img"/>
					</picture>
					<div className="text " >
						<div className="valorant games-img">
							<img src="./src/assets/valorant2.jpg" id="background"  alt=""/>
						</div>
						<div className="warzone games-img">
							<img src="./src/assets/warzone.jpg"  alt=""/>
						</div>
						<div className="dota games-img">
							<img src="./src/assets/dota.jpg"  alt=""/>
						</div>
						<div className="csgo games-img">
							<img src="./src/assets/csgo.jpg"  alt=""/>
						</div>
						<div className="title has-next-text">
							Gaming 
							<div className="apex games-img">
								<img src="./src/assets/apex.jpg"  alt=""/>
							</div>
						</div>
						<div className="subtitle">
							Cafe
						</div>
						<h3>Elevate Your Gaming Experience with Us.</h3>
						<a href="https://wa.me/917045392936?text=i want to book pc for ps5" target="_blank" className="button is-primary is-rounded has-text-weight-semibold	">BOOK ON WHATSAPP &nbsp;&nbsp;<i className="material-icons-outlined">
							reply
						</i></a>
					</div>
				</div>
			</section>
		</div>
	</div>

	<section className="section  is-medium has-dark-bg hideouts" id="cafe">
		<div className="container">
			<h2 className="title is-1 has-text-white">Our Gaming <span className="has-text-primary	">Cafe's</span></h2>
			<h2 className="subtitle is-4 is-italic">"Unleash Your Inner Gamer in Our Gaming Hideout"</h2>
			
			<div className="tabs is-large is-primary">
				<ul>
					<li className="is-active"><a href="#mumbaiTab">Mumbai</a></li>
				</ul>
			</div>
      <div className="tab-contents">
      {Object.entries(cities).map(([city, images], i) => (
        <div
          key={city}
          className={`tab-content ${i === 0 ? "is-active" : ""}`}
          id={`${city}Tab`}
        >
          <div className="hideouts--carousel">
            {images.map((num,index) => (
              <div key={index} className="carousel-item">
                <img
                  src={`./src/assets/cafes/${num}.jpg`}
                  alt={`${city} cafe ${num}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

			
			<div className="columns">
				<div className="column is-4-tablet is-3-fullhd">
					<div className="hideouts--info-card">
						<h2><i className="material-icons-outlined">location_on</i> <span>Juhu, Mumbai</span></h2>
						<div className="content">
							<p> Bus Depot, Shiv Kunj, bhaktivedant swami marg, near JVPD, Mumbai, Maharashtra 400049</p>
							<p><i className="material-icons-outlined">call</i><span>+91 9083556008</span></p>
						<p><i className="material-icons-outlined">email</i><span>contact@nxtlvl.com</span></p>
						</div>
					</div>
				</div>
				<div className="column is-4-tablet is-3-fullhd">
					<div className="hideouts--info-card">
						<h2><i className="material-icons-outlined">location_on</i> <span>Goregaon, Mumbai</span></h2>
						<div className="content">
							<p>34, 2nd floor, A-wing, Kiran Industrial Estate, Rambagh, Mahatma Gandhi Rd, Goregaon West, Mumbai, Maharashtra 400062</p>
							<p><i className="material-icons-outlined">call</i><span>+91 8108738655</span></p>
							<p><i className="material-icons-outlined">email</i><span>contact@nxtlvl.com</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="section is-medium about" id="about">
		<div className="container has-text-centered">
			<p className="title is-1 has-text-white">About  <span className="has-text-primary">Us</span></p>
			<article className="has-text-white">
				<div className="columns">
					<div className="column">
						<p className="is-size-5 mb-6">Beyond Gaming Cafe’s are a chain of gaming cafes which provide a large range of games like Arcade, Console, PC, retro gaming and VR Simulators.
						<br/> Apart from catering with top of the line gaming experience we also have a good ambience for food and beverages.</p>
					</div>
				</div>
				<div className="columns is-centered">
					<div className="column is-5-tablet is-4-fullhd">
						<div className="is-flex about-card is-flex-direction-column is-align-items-center ">
							<img src="../src/assets/vision.png" className="image mb-5 is-64x64" alt=""/>
							<h2 className="is-4 title has-text-white">Vision</h2>
							<p>To be the premier gaming cafes chain in India, with multiple outlets across the country. We aim to cater to the masses and provide a platform for gamers of all skill levels to connect, compete, and provide infrastructure for career in gaming.</p>
						</div>
					</div>
				
					<div className="column is-5-tablet is-4-fullhd">
						<div className="is-flex about-card is-flex-direction-column is-align-items-center ">
							<img src="../src/assets/mission.png" className="image mb-5 is-64x64" alt=""/>
							<h2 className="is-4 title has-text-white">Mission</h2>
							<p>To promote a love for gaming and foster community through immersive gaming experiences. Our gaming cafe provides an affordable and inclusive environment for gamers of all skill levels to connect and have fun. We prioritize customer relations and aim to create a welcoming space for all types of gamers.</p>
						</div>
					</div>

				</div>
			</article>
		</div>
	</section>


	<section className="section is-medium has-dark-bg offering" id="services">
		<div className="container">
			<p className="title has-text-centered mb-6 is-1 has-text-white">Our <span className="has-text-primary	">Services</span></p>

			<div className="columns mb-0 is-gapless is-multiline ">
				<div className="column is-6 is-3-widescreen">
					<div className="service-card has-text-centered p-5">
						<img src="./src/assets/services/cafe.png" className="mx-auto  image is-64x64" alt=""/>
						<h3 className="is-size-5">Gaming Cafe</h3>
						<p>We provide two tiers of cafe experiences:
							Express and Flagship.
							Our very first Flagship cafe was launched at
							Juhu Circle in Mumbai.</p>
					</div>
				</div>
				<div className="column is-6 is-3-widescreen">
					<div className="service-card has-text-centered p-5">
						<img src="./src/assets/services/console.png" className="mx-auto  image is-64x64" alt=""/>
						<h3 className="is-size-5">Consoles</h3>
						<p>Unlike any other gaming cafes we make sure
							that our cafe is well equipped with dedicated
							space for console games. 
							</p>
					</div>
				</div>
				<div className="column is-6 is-3-widescreen">
					<div className="service-card has-text-centered p-5">
						<img src="./src/assets/services/pool.png" className="mx-auto  image is-64x64" alt=""/>
						<h3 className="is-size-5">Racing Simulators</h3>
						<p>Experience the thrill of high-speed racing at our gaming cafe, where you can take control of authentic racing wheel simulators for an immersive and adrenaline-pumping gaming experience like no other.</p>
					</div>
				</div>
				<div className="column  is-6 is-3-widescreen">
					<div className="service-card has-text-centered p-5">
						<img src="./src/assets/services/hardware.png" className="mx-auto  image is-64x64" alt=""/>
						<h3 className="is-size-5">Streaming Room</h3>
						<p>Our gaming cafes boast cutting-edge streaming rooms equipped with the latest technology, providing gamers with the perfect environment to stream and go live, taking their gaming experience to the next level.</p>
					</div>
				</div>
				
				
				
			</div>
			<div className="columns is-centered" id='pricing'>
				<div className="column is-6-tablet is-4-widescreen is-4-fullhd">
					<ul className="cs-tabs">
						<li className="is-active" data-target="#gamingCafe"><span>Gaming Cafe Also</span><div className='has-text-white'>PlayStations & Console Games</div></li>
						<li data-target="#playStations"></li>
						<li><span>VR Game Devices______________150rs</span></li>
						<li><span>Hardware Sales & Ecommerce_____150rs </span></li>
						<li><span>PC Building__________________150rs </span></li>
						<li><span>Rentals_____________________150rs</span></li>
						<li><span>Brand Promotions______________150rs</span></li>
						<li><span>Birthday Parties_______________150rs </span></li>
						<li><span>Shoots & Rental Spaces__________150rs </span></li>
						<li><span>Corporate Events______________150rs </span></li>
					</ul>
				</div>
				<div className="column is-6-tablet cs-tab-contents is-4-widescreen">
					<div className="cs-tab-card is-active" id="gamingCafe">
						<img src="./src/assets/cafes/1.jpg" alt=""/>
						<p>We provide two tiers of cafe experiences: Express and Flagship.
							Our very first Flagship cafe was launched at 90 feet road in
							Bhayandar west.</p>
					</div>
					<div className="cs-tab-card" id="playStations">
						<img src="./src/assets/cafes/2.jpg" alt=""/>
						<p>We provide two tiers of cafe experiences: Express and Flagship.
							Our very first Flagship cafe was launched at Juhu Circle in
							Mumbai.</p>
					</div>
				</div>

			</div>
		</div>
	</section>


	
	<section className="section is-hidden is-medium has-dark-bg colosseum">
		<div className="container">
			<p className="title is-1 has-text-centered has-text-white">Our  <span className="has-text-primary">Colosseum</span></p>

			<div className="tabs is-large">
				<ul>
					<li className="is-active"><a href="#futureEvents">Upcoming Events</a></li>
					<li><a href="#pastEvents">Past Events</a></li>
					<li><a href="#tournaments">Tournaments</a></li>
				</ul>
			</div>

			<div className="tab-contents">
				<div className="tab-content is-active" id="futureEvents">
					<div className="events">
						<div className="grid-box">
							<div className="grid">
								<img src="./src/assets/events/cards/1.png" alt=""/>
							</div>
							<div className="grid">
								<img src="./src/assets/events/cards/1.png" alt=""/>
							</div>
							<div className="grid">
								<img src="./src/assets/events/cards/1.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-content" id="pastEvents">
					<div className="events">
						<div className="grid-box">
							<div className="grid">
								<img src="./src/assets/events/cards/1.png" alt=""/>
							</div>
							<div className="grid">
								<img src="./src/assets/events/cards/1.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-content" id="tournaments">
					<div className="events">
						<div className="grid-box">
							<div className="grid">
								<img src="./src/assets/events/cards/1.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</section>

		
	<section className="section is-medium brand">
		<div className="container">
			<div className="columns">
				<div className="column"></div>
				<div className="column is-12 is-half-widescreen">
					<p className="title has-text-white is-1">Brand <span className="has-text-primary	">Integrations</span></p>
					<p className="subtitle is-4 is-italic">Let's collaborates for future gamers</p>
					<p>Our cafes also offer a range of marketing activities for the brands who would like to come onboard as sponsors for the cafes.</p>
					<p>The offering which we would have are :-</p>
					<br/>
					<ul className="">
						<li>Powered by game zones</li>
						<li>Display area for products</li>
						<li>Branding space</li>
						<li>Streaming room integrations</li>
						<li>Experience zone & Workshops</li>
						<li>Powered by tournaments</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section className="footer section is-medium has-dark-bg" id='footer'>
		<div className="container">
			<div className="columns">
				<div className="column is-3">
					<div className="columns">
						<div className="column">
							<div className="logo">
								<a href=""><img src="./src/assets/logo.png" alt=""/></a>
							</div>
							<ul className="socials">
								{/* <li><a href=""><img src="./src/assets/social/facebook.png" alt=""/></a></li> */}
								<li><a href="https://www.google.com/" target="_blank"><img src="./src/assets/social/instagram.png" alt=""/></a></li>
								{/* <li><a href=""><img src="./src/assets/social/youtube.png" alt=""/></a></li> */}
							</ul>
						</div>
					</div>
				</div>
				<div className="column ">
				<div className="contact-section">
    <div className="container1">
      <h2 className="heading1">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-grid">
          <input name="name" required placeholder="Your name" className="input" />
          <input name="email" type="email" required placeholder="Your email" className="input" />
        </div>
        <textarea name="message" required placeholder="Message" className="textarea" rows="5"></textarea>
        <div className="form-footer">
          <button type="submit" className="btn">Send Message</button>
          <p className="status-text">Beyond Games</p>
        </div>
      </form>
    </div>
  </div>
				
					<p className="mb-3 has-text-white">Creating an affordable and accessible gaming ecosystem</p>
					<p>BEYOND GAMINGS &copy; Copyright 2025</p>
				</div>
			</div>
		</div>
	</section>
	</main>
	</div>
    </>
	)
}

export default App
