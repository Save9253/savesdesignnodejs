import Head from 'next/head'
import HomeCSS from '../styles/Home.module.css'
import SideNavCSS from '../styles/secNav.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';

// Width with no scroll bar
function winWidth() {
  const [VW, setVW] = useState(undefined)

  useEffect(() => {
    function handleResize() {
      setVW(document.documentElement.clientWidth + "px");
    }

    window.addEventListener("resize", ()=>{
      handleResize()
    });
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return VW;
}

const quEx = {
  LeyeSh:"M47.8 91.5L61.7 99.7L66.1 105.2L72.6 111.1L73.3 103.5L71.5 93.3L65.2 91.7L47.8 91.5Z",
  nose:"M88.6 97.3L98.2 96L116 95.3L94.5 100.3L89.4 107.7L90 122.3L96.5 129L93.9 138.8L81.8 140.4L76 140.4L62.9 137.8L60.4 128.7L63.8 134.5L73.1 132.3L80.6 134.7L87.3 132.3L89.4 126.8L85.2 119.5L85.1 106.7L88.6 97.3Z",
  TLip:"M66 159.7L67.2 157.4L76.7 152.4L79.2 152.7L82.1 151.4L96.7 151.7L98.1 154.2L96 153L83.5 154L80.1 154.9L76.8 155.2L68.7 158.3L66 159.7Z",
  BLip:"M72.6 165.1L77.7 170.2L87.8 169L92.2 162.5L88.5 160.7L77.7 162.5L72.6 165.1Z",
  Rnosed:"M83.8 137.7L87.6 135.7L92.3 136.6L88 138.3L83.8 137.7Z",
  Reye:"M104.6 97.5L112.5 98.3L118.6 102.4L111.9 100.6L108.8 100.4L108 103.5L104.4 105L100.6 103.4L100 100.4L95.4 101.3L92.8 102.9L94.5 100.3L104.6 97.5Z",
  Leye:"M54.1 97.3L61.7 99.7L63.9 102.4L61.1 100.6L58.4 100.3L57.9 102.9L53.8 104.4L49.4 102.8L48.9 99.9L45.6 99.8L40.8 101.6L45.2 98.6L54.1 97.3Z",
  mustch:"M57.4 156.6L58.9 151.2L73.7 146.2L79.5 146.2L83.8 144.7L103.5 146.1L104 151.5L101 149.1L84.9 147.8L79.6 149.5L74.3 150L60.3 154.6L57.4 156.6Z",
  ReyeB:"M88.6 97.3L92.4 90.3L115.7 90.7L122 96.1L116 95.3L98.2 96L88.6 97.3Z",
  LeyeB:"M35 93.4L46.3 87L67 84.4L71.5 93.3L65.2 91.7L47.8 91.5L35 93.4Z",
}
const yesEx = {
  LeyeSh:"M40.1 93.3L60.9 99.8L65.4 105.3L72.9 113.4L73.6 105.8L71.6 99.3L63.4 96.5L40.1 93.3Z",
  nose:"M85.8 103L92.6 100.1L113.4 96L93.8 100.5L89.9 104.9L89.3 120.9L94.6 128.1L93.6 136.8L81 139.1L75.2 139.5L62.1 138L59.6 128.8L62.8 134.3L72.3 132.4L79.8 133.4L87.7 130.9L87.9 126.9L84.5 119.6L84.7 106.1L85.8 103Z",
  TLip:"M54.3 154.6L56.8 153.6L73.4 150L77.6 150.8L81.6 149.3L97.8 148.8L100.6 150.5L99.7 151.5L84.1 157.5L78.3 158.4L73.1 158.4L56.3 156.5L54.3 154.6Z",
  BLip:"M64.6 165.7L72.8 171.4L85.2 169.5L91.4 162.9L86.3 164.6L71.1 166.6L64.6 165.7Z",
  Rnosed:"M81.9 135.8L85.7 133.7L90.4 134.5L86.1 136.3L81.9 135.8Z",
  Reye:"M103.3 100.3L114.3 101.8L117.9 103L114.4 103L108 102.7L107.2 102.7L103.6 102.4L100.2 102.9L99.6 103L94.4 103.7L92 104.1L94.7 102.7L103.3 100.3Z",
  Leye:"M53.4 97.5L60.9 99.8L63.1 102.6L60.4 100.7L57.6 100.4L57.2 103L53 104.5L48.6 103L48.1 100L44.8 99.9L40.1 101.7L44.4 98.7L53.4 97.5Z",
  mustch:"M49.9 155L51.4 149.6L71 143.7L77.1 144.1L82.8 142.3L102.3 142.6L104.2 148.7L101.2 146.4L82.4 145.6L76.3 147.5L71.7 147.5L52.8 153L49.9 155Z",
  ReyeB:"M85.8 103L89.9 95.4L114.9 89L123.9 98.8L113.4 96L92.6 100.1L85.8 103Z",
  LeyeB:"M30 98.1L39.2 86L64.9 91.4L71.6 99.3L63.4 96.5L40.1 93.3L30 98.1Z",
}
const noEx = {
  LeyeSh:"M40.4 93.1L61.2 99.6L65.7 105.1L73.2 113.2L73.9 105.6L71.9 99.1L63.7 96.3L40.4 93.1Z",
  nose:"M86.1 100.3L92.9 97.4L117.3 93.6L94.1 100.3L88.9 107.6L89.5 122.2L96 129L93.4 138.8L81.3 140.4L75.4 140.3L62.4 137.8L59.9 128.6L63.3 134.4L72.6 132.2L80.1 134.6L86.8 132.2L88.9 126.7L84.8 119.4L84.6 106.6L86.1 100.3Z",
  TLip:"M61.8 155L64 154L72.5 152.8L76.6 153.1L80.2 152.8L87.1 153.9L90.2 155.1L89.5 157.3L84.9 155.6L76.7 156.4L65.5 155.8L62.6 156.7L61.8 155Z",
  BLip:"M68.3 170.8L71.9 174.4L80.7 173.4L83.6 168.8L79.6 165.8L72.6 166L68.3 170.8Z",
  Rnosed:"M83.3 137.7L87.1 135.7L91.8 136.5L87.5 138.2L83.3 137.7Z",
  Reye:"M104.1 97.4L112 98.3L118.1 102.3L111.4 100.5L108.3 100.4L107.6 103.4L103.9 104.9L100.1 103.3L99.5 100.4L94.9 101.2L92.3 102.8L94.1 100.3L104.1 97.4Z",
  Leye:"M53.7 97.3L61.2 99.6L63.4 102.4L60.6 100.5L57.9 100.2L57.5 102.8L53.3 104.3L48.9 102.7L48.4 99.8L45.1 99.7L40.3 101.5L44.7 98.5L53.7 97.3Z",
  mustch:"M56.2 154.3L57.9 148L70.2 144.1L77.3 146.2L83.5 144.6L95 150.4L95.8 155.7L92.7 153.5L82.2 149.2L76.7 149.6L71.4 149.1L60.4 152.3L56.2 154.3Z",
  ReyeB:"M86.1 100.3L90.2 92.7L119.2 86.6L126.1 99.4L117.3 93.6L92.9 97.4L86.1 100.3Z",
  LeyeB:"M30.3 97.9L39.4 85.7L65.2 91.2L71.9 99.1L63.7 96.3L40.4 93.1L30.3 97.9Z",
}

export default function Home() {

  function expr(expression){
    setLeyeSh(expression.LeyeSh)
    setnose(expression.nose)
    setTLip(expression.TLip)
    setRnosed(expression.Rnosed)
    setBLip(expression.BLip)
    setReye(expression.Reye)
    setLeye(expression.Leye)
    setmustch(expression.mustch)
    setReyeB(expression.ReyeB)
    setLeyeB(expression.LeyeB)
  }

  const [LeyeSh,setLeyeSh] = useState("M47.8 91.5L61.7 99.7L66.1 105.2L72.6 111.1L73.3 103.5L71.5 93.3L65.2 91.7L47.8 91.5Z")
  const Rshadow  = "M121.8 51.8L122.8 77L119.6 86.6L117.8 93.7L119.3 103.5L125.9 117.1L126.3 134.7L117.6 159.2L108.9 180.1L109.1 187.2L120.7 171.8L129.3 154.1L135.4 153.5L140.7 144L147.5 124L143.9 109.4L138.4 109.2L132.7 116.9L129.9 88.5L131.2 80.9L131.2 65.9L121.8 51.8Z"
  const Lshadow = "M26.9 69.4L28.1 85.7L23.6 100.8L25.6 129.1L32.6 163.4L48.6 181.5L51 189.9L30.2 167.5L22.9 151.7L18.7 114.6L17.1 100.2L23 86.4L21.3 71.4L31.9 54.2L26.9 69.4Z"
  const [nose,setnose] = useState("M88.6 97.3L98.2 96L115.9 95.3L94.5 100.3L89.4 107.7L90 122.3L96.5 129L93.9 138.8L81.8 140.4L75.9 140.4L62.9 137.8L60.4 128.7L63.8 134.5L73.1 132.3L80.6 134.7L87.3 132.3L89.4 126.8L85.2 119.5L85.1 106.7L88.6 97.3Z")
  const [TLip,setTLip] = useState("M66 159.7L67.2 157.4L76.7 152.4L79.2 152.7L82.1 151.4L96.7 151.7L98.1 154.2L95.9 153L83.5 154L80.1 154.9L76.8 155.2L68.7 158.3L66 159.7Z")
  const [BLip,setBLip] = useState("M72.6 165.1L77.7 170.2L87.8 169L92.2 162.5L88.5 160.7L77.7 162.5L72.6 165.1Z")
  const beard = "M48.6 181.5L51 189.9L68.4 201.2L91.1 199.9L109.1 187.2L108.9 180.1L90 188.2L65.6 189.2L48.6 181.5Z"
  const hair = "M132.7 116.9L129.9 88.5L131.2 80.9L131.2 65.9L119.1 47.6L115.8 31.5L105.9 17.3L112.6 31.4L115.3 46.8L105.7 44.5L98.1 25.2L76.1 13.2L94.3 25.4L102.2 45.3L96.2 44.7L82.1 32.7L54.9 31.9L79.8 34.9L92.1 46L79.7 47.4L65.9 52.8L55.1 60.4L31.9 54.2L21.3 71.4L23 86.4L17.1 100.2L18.7 114.6L9.1 107.3L7.4 61.8L10.2 41.2L14.7 38.1L14.6 31.3L26.2 16.8L41.7 8.2L46.9 8.6L50 4L68.8 1.2L89.2 3.5L94 7.5L96.2 5.6L117.2 12.3L131 28.8L133.4 36.3L136 39.8L141.1 58L142.1 87L138.4 109.2L132.7 116.9Z"
  const Lnosed = "M66.1 135.8L71.1 135.4L74.6 136.9L69 137.4L66.1 135.8Z"
  const [Rnosed,setRnosed] = useState("M83.8 137.7L87.6 135.7L92.3 136.6L88 138.3L83.8 137.7Z")
  const [Reye,setReye] = useState("M104.6 97.5L112.5 98.3L118.6 102.4L111.9 100.6L108.8 100.4L108 103.5L104.4 105L100.6 103.4L100 100.4L95.4 101.3L92.8 102.9L94.5 100.3L104.6 97.5Z")
  const [Leye,setLeye] = useState("M54.1 97.3L61.7 99.7L63.9 102.4L61.1 100.6L58.4 100.3L57.9 102.9L53.8 104.4L49.4 102.8L48.9 99.9L45.6 99.8L40.8 101.6L45.2 98.6L54.1 97.3Z")
  const [mustch,setmustch] = useState("M57.4 156.6L58.9 151.2L73.7 146.2L79.5 146.2L83.8 144.7L103.5 146.1L104 151.5L101 149.1L84.9 147.8L79.6 149.5L74.3 150L60.3 154.6L57.4 156.6Z")
  const [ReyeB,setReyeB] = useState("M88.6 97.3L92.4 90.3L115.7 90.7L122 96.1L115.9 95.3L98.2 95.9L88.6 97.3Z")
  const [LeyeB,setLeyeB] = useState("M35 93.4L46.3 87L67 84.4L71.5 93.3L65.2 91.7L47.8 91.5L35 93.4Z")
  const outline = "M9.1 107.3L7.4 61.8L10.2 41.2L14.7 38.1L14.6 31.3L26.2 16.8L41.7 8.2L46.9 8.6L50 4L68.8 1.2L89.2 3.5L94 7.5L96.2 5.6L117.2 12.3L131 28.8L133.4 36.3L136 39.8L141.1 58L142.1 87L138.4 109.2L143.9 109.4L147.5 124L140.7 144L135.4 153.5L129.3 154.1L120.7 171.8L109.1 187.2L91.1 199.9L68.4 201.2L51 189.9L30.2 167.5L22.9 151.7L16.9 152.1L8.4 144.3L1.5 124.3L4.1 109.8L9.1 107.3Z"

  const size = winWidth();
  if(size != undefined){document.documentElement.style.setProperty('--vw',size)}
  
  return (
    <main id="content">
      <Head>
        <title>How to build a website?</title>
        <link rel="icon" href="/SavesDesignFavicon.png" />
      </Head>
      <section aria-label="How to build a website?" className={HomeCSS.intro}>
        <h1>How to build a website?</h1>
        <div>
          <p>Nowadays, a website is a very important part of a business's image. It is often the first impression your customers get, and we all know how important it is to make the inf right first impression. </p>
          <p>Making a website on your own takes a lot of time and energy. You might make mistakes and lose your time, money, and reputation due to bad customer experiences on your website.</p>
          <p>Thankfully, I am here so that you don't have to go through the painful but important process of making a website.</p>
          <p><b> Scroll down to see how I can make your life easier on every step of making a website.</b></p>
        </div>
        <img src="/howToBuildAWebsite.svg" alt="Building a website"/>
      </section>
      <section aria-label="Compare the two ways" className={`${HomeCSS.compare} ${SideNavCSS.secWNav}`}>
        <nav aria-label="Page" className={SideNavCSS.secNav}>
          <button aria-expanded="false" aria-controls="secNav" aria-label="Expand Page Navigation" type="button"  className={`${SideNavCSS.secNavBtn} icon`}>
            <svg role="img" aria-label="Arrow" overflow="visible" width="10" fill="none" height="40" viewBox="0 0 10 40" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinejoin="round" strokeLinecap="round" d="M5 0L5 20L5 40"/>
            </svg>
          </button>
          <ul>
            <li>
              <a href='#' className={SideNavCSS.linkToTop}>
                <span>To the top</span>
                <svg role="img" aria-label="Arrow Up" viewBox="0 0 10 5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5L5 0L10 5Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <section aria-label="Finding a domain" className={HomeCSS.topS}>
          <h2>Finding a domain</h2>
          <div className={HomeCSS.redStrip}>
            <svg role="img" className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Finding a domain on your own" className={`${HomeCSS.inf} ${HomeCSS.left} ${HomeCSS.bad}`}>
            <h3>on your own</h3>
            <img src="/findingDomainOnYourOwn.svg" alt="Finding a domain on your own"/>
            <p>You will have to compare among at least a dozen of domain providers to compare their prices. Knowing what is going to be the best option for you isn't an easy task considering all of their deceiving strategies. Most of the companies who sell domains show a lower than average price for the first year while hiding a smaller price tag for the next year renewal somewhere in a corner. Plus, how do you know what will work best for you? Would .org, .com, .online, or something else be the best choice?</p>
          </div>
          <div className={HomeCSS.greenStrip}>
            <svg role="img" className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>     
          </div>
          <div aria-label="Finding a domain with Save" className={`${HomeCSS.inf} ${HomeCSS.right} ${HomeCSS.good}`}>
              <h3>with Save</h3>
              <img src="/findingADomainWithSave.svg" alt="Finding a domain with Save"/>
              <p>I'll direct you through the process of finding the best domain for your website from the best trusted source.</p>
          </div>
        </section>
        <section aria-label="Hosting a website">
          <h2>Hosting a website</h2>
          <div className={HomeCSS.redStrip}>
            <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Hosting a website on your own" className={`${HomeCSS.inf} ${HomeCSS.left} ${HomeCSS.bad}`}>
              <h3>on your own</h3>
              <img src="/hostingAWebsiteOnYourOwn.svg" alt="Hosting a website on your own"/>
              <p>Hosting a website is a pretty similar process to finding a reliable and trustworthy domain provider. So, it can be pretty hard. Some hosting companies like to show their price lower than anyone else's, even if it involves showing only part of the actual price. Moreover, you will be able to get such a price only if you pay for the whole year in advance. </p>
          </div>
          <div className={HomeCSS.greenStrip}>
            <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Hosting a website with Save" className={`${HomeCSS.inf} ${HomeCSS.right} ${HomeCSS.good}`}>
              <h3>with Save</h3>
              <img src="/hostingAWebsiteWithSave.svg" alt="Hosting a website with Save"/>
              <p>No hosting companies will be involved and no extra money will be paid. It will be solely your website and a Google Server at truly the lowest price for hosting. You can choose to pay monthly or annually, with no additional charge for monthly payments. </p>
          </div>
        </section>
        <section aria-label="Content Management System">
          <h2>Content Management System</h2>
          <div className={HomeCSS.redStrip}>
            <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Content Management System on your own" className={`${HomeCSS.inf} ${HomeCSS.left} ${HomeCSS.bad}`}>
            <h3>on your own</h3>
            <img src="otherContentManagementSystems.svg" alt="Other Content Management Systems"/>
            <p>Content Management Systems (CMS) are designed to meet the needs of everyone, even though everyone has very different needs. So, be ready to deal with an overwhelming amount of settings and buttons that you might not even need. Even with all those tools, you will still have to add some code to make things look or function exactly the way you want. Moreover, every CMS that is designed for all possible needs has a really long code to do so. Using all the unnecessary code slows down your website and, in turn, makes you rate lower on Google.</p>
          </div>
          <div className={HomeCSS.greenStrip}>
            <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Content Management System with Save" className={`${HomeCSS.inf} ${HomeCSS.right} ${HomeCSS.good}`}>
            <h3>with Save</h3>
            <img src="SavesContentManagementSystems.svg" alt="Save's Content Management Systems"/>
            <p>Honestly, not everyone even needs a Content Management System. And if you do need one, it should be designed for your specific needs. Such CMS will make it easier for you to manage your content and it will make your site load faster which, consequently, will positively affect your ranking on Google.</p>
          </div>
        </section>
        <section aria-label="Layout">
          <h2>Layout</h2>
          <div className={HomeCSS.redStrip}>
              <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
              </svg>
            </div>
          <div aria-label="Layout on your own" className={`${HomeCSS.inf} ${HomeCSS.left} ${HomeCSS.bad}`}>
              <h3>on your own</h3>
              <img src="/layoutWithContentManagementSystems.svg" alt="Layout with Content Management Systems"/>
              <p>Content Management Systems usually have free templates available. Nevertheless, the options are usually pretty limited.  So, if you do want an impressive and unique layout that fits your needs perfectly, be ready to pay extra. The most popular scenario is using WordPress with Divi theme which will cost you at least $70 extra a year.</p>
          </div>
          <div className={HomeCSS.greenStrip}>
              <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
              </svg>
            </div>
          <div aria-label="Layout with Save" className={`${HomeCSS.inf} ${HomeCSS.right} ${HomeCSS.good}`}>
              <h3>with Save</h3>
              <img src="/layoutWithSave.svg" alt="Layout with Save"/>
              <p>There are no limits on how the layout can look. I will build a special design just for you and your needs. I'll create your website according to your preferred HomeCSS. Or, if you don't have a particular style in mind, I'll gladly compose one for you! </p>
          </div>
        </section>
        <section aria-label="Mobile Compatibility">
          <h2>Mobile Compatibility</h2>
          <div className={HomeCSS.redStrip}>
              <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
              </svg>
            </div>
          <div aria-label="Mobile Compatibility on your own" className={`${HomeCSS.inf} ${HomeCSS.left} ${HomeCSS.bad}`}>
              <h3>on your own</h3>
              <img src="/mobileCompatibilityOnYourOwn.svg" alt="Mobile compatibility on your own"/>
              <p>Once you make sure that your website looks the way you want it to on a desktop, you will have check how it looks on a phone and a tablet. I have to warn you that it will probably not look the way you expect it to. You will have to spend some extra time adding more styling for different screen sizes to make it look nice on mobile devices as well.</p>
          </div>
          <div className={HomeCSS.greenStrip}>
              <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
              </svg>
            </div>
          <div aria-label="Mobile Compatibility with Save" className={`${HomeCSS.inf} ${HomeCSS.right} ${HomeCSS.good}`}>
              <h3>with Save</h3>
              <img src="/mobileCompatibilityWithSave.svg" alt="Mobile compatibility with Save"/>
              <p>I will test the appearance of your website on a wide screen, big screen, small screen, tablet, and phone to make sure the visitors will have the best experience, whichever device they may use.</p>
          </div>
        </section>
        <section aria-label="Functionality">
          <h2>Functionality</h2>
          <div className={HomeCSS.redStrip}>
              <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
              </svg>
            </div>
          <div aria-label="Functionality on your own" className={`${HomeCSS.inf} ${HomeCSS.left} ${HomeCSS.bad}`}>
              <h3>on your own</h3>
              <img src="/FunctionalityWithCMS.svg" alt="Functionality with CMS"/>
              <p>Functionality is also often limited to just a few common templates. On WordPress, for example, only a blog is free. But if you want a store, you will have to get an extra plugin. If you want a form, you will have to get an extra plugin. Every plugin will ask you to pay extra for their services. Even worse, every plugin will slow down your website more and more.</p>
          </div>
          <div className={HomeCSS.greenStrip}>
              <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
              </svg>
            </div>
          <div aria-label="Functionality with Save" className={`${HomeCSS.inf} ${HomeCSS.right} ${HomeCSS.good}`}>
              <h3>with Save</h3>
              <img src="/FunctionalityWithSave.svg" alt="Functionality with Save"/>
              <p>I will bring to reality any functionality you may need with as little code as possible to ensure the best performance. </p>
          </div>
        </section>
        <section aria-label="Accessibility">
          <h2>Accessibility</h2>
          <div className={HomeCSS.redStrip}>
            <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Accessibility on your own" className={`${HomeCSS.inf} ${HomeCSS.left} ${HomeCSS.bad}`}>
              <h3>on your own</h3>
              <img src="/AccessibilityOnYourOwn.svg" alt="Accessibility on your own"/>
              <p>Accessibility is what often gets inf left out. When people make websites on their own, they usually make it possible to navigate only visually, using the mouse or, at the most, a touch screen.</p>
          </div>
          <div className={HomeCSS.greenStrip}>
            <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Accessibility with Save" className={`${HomeCSS.inf} ${HomeCSS.right} ${HomeCSS.good}`}>
            <h3>with Save</h3>
            <img src="/AccessibilityWithSave.svg" alt="Accessibility with Save"/>
            <p>I will make sure that your website is navigable by keyboard with a screen reader, as well as visually navigable with mouse and touch. It will make your website accessible to a larger audience and it may improve your ranking on Google as well.</p>
        </div>
        </section>
        <section aria-label="Search Engine Optimization" className={HomeCSS.bottS}>
          <h2>Search Engine Optimization</h2>
          <div className={HomeCSS.redStrip}>
            <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Search Engine Optimization on your own" className={`${HomeCSS.inf} ${HomeCSS.left} ${HomeCSS.bad}`}>
            <h3>on your own</h3>
            <img src="/SearchEngineOptimizationOnYourOwn.svg" alt="Search Engine Optimization on your own"/>
            <p>First, you will have to deal with Google Search Console to just appear on Google. Then, you will still have to make sure that every piece of information on your website is helping you to rank higher on Google and not working against you.</p>
          </div>
          <div className={HomeCSS.greenStrip}>
            <svg className={HomeCSS.arrow} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L20 10L40 0V10L20 20L0 10Z"/>
            </svg>
          </div>
          <div aria-label="Search Engine Optimization with Save" className={`${HomeCSS.inf} ${HomeCSS.right} ${HomeCSS.good}`}>
            <h3>with Save</h3>
            <img src="/SearchEngineOptimizationWithSave.svg" alt="Search Engine Optimization with Save"/>
            <p>I will make sure you appear on Google and give you all the recommendations on how to rank higher and be found by your customers.</p>
          </div>
        </section>
      </section>
      <section aria-label="Choice" className={HomeCSS.end}>
        <section>
          <h2>It is your choice in the end</h2>
          <div className={HomeCSS.leftArr}>
              <svg className={HomeCSS.arrowB} viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H40V20L45 17.5V27.5L20 40L-5 27.5V17.5L0 20Z"/>
              </svg>
          </div>
          <Link href="/login"><a className={HomeCSS.left} id="no" onMouseEnter={()=>{expr(noEx)}} onMouseLeave={()=>{expr(quEx)}}><span>Learn how to make websites <br/><b>on your own!</b></span></a></Link>
          <div className={HomeCSS.rightArr}>
              <svg className={HomeCSS.arrowB} viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H40V20L45 17.5V27.5L20 40L-5 27.5V17.5L0 20Z"/>
              </svg>
          </div>
          <Link href="/shop"><a className={HomeCSS.right} id="yes" onMouseEnter={()=>{expr(yesEx)}} onMouseLeave={()=>{expr(quEx)}}><span>Make your website <br/><b>with Save!</b></span></a></Link>
          <svg role="img" aria-label="Save" className={HomeCSS.face} viewBox="0 0 149 203" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="var(--md50)">
                  <path d={LeyeSh}/>
                  <path d={Rshadow}/>
                  <path d={Lshadow}/>
                  <path d={nose}/>
                  <path d={TLip}/>
                  <path d={BLip}/>
              </g>
              <g fill="var(--dr)">
                  <path d={beard}/>
                  <path d={hair}/>
                  <path d={Lnosed}/>
                  <path d={Rnosed}/>
                  <path d={Reye}/>
                  <path d={Leye}/>
                  <path d={mustch}/>
                  <path d={ReyeB}/>
                  <path d={LeyeB}/>
              </g>
              <path d={outline} stroke="black" strokeOpacity="0.9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </section>
      </section>
    </main>
  )
}
