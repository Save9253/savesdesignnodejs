import Head from 'next/head'
import homeCSS from '../styles/home.module.css'
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
  Reye:"M104.6 97.5L112.5 98.3L118.6 102.4L111.9 100.6L108.8 100.4L108 103.5L104.4 105L100.6 103.4L100 100.4L95.4 101.3L92.8 102.9L94.5 100.3Z",
  Leye:"M54.1 97.3L61.7 99.7L63.9 102.4L61.1 100.6L58.4 100.3L57.9 102.9L53.8 104.4L49.4 102.8L48.9 99.9L45.6 99.8L40.8 101.6L45.2 98.6Z",
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
const normEx = {
  LeyeSh:"M40.4 93.1L61.2 99.6L65.7 105.1L73.2 113.2L73.9 105.6L71.9 99.1L63.7 96.3L40.4 93.1Z",
  nose:"M86.1 100.3L92.9 97.4L117.3 93.6L94.1 100.3L88.9 107.6L89.5 122.2L96 129L93.4 138.8L81.3 140.4L75.4 140.3L62.4 137.8L59.9 128.6L63.3 134.4L72.6 132.2L80.1 134.6L86.8 132.2L88.9 126.7L84.8 119.4L84.6 106.6L86.1 100.3Z",
  TLip:"M54.6 154.4L57.1 153.4L73.7 151.2L76.4 152.5L80.1 151.8L95.7 155.5L98.4 157.2L97.6 158.2L82.7 155.7L76.4 156.4L70.5 155.2L56.6 156.3L54.6 154.4Z",
  BLip:"M64.9 165.5L71.9 171.6L81.5 172.5L87.6 165.9L82.6 167.6L70.2 166.8L64.9 165.5Z",
  Rnosed:"M83.3 137.7L87.1 135.7L91.8 136.5L87.5 138.2L83.3 137.7Z",
  Reye:"M104.6 97.5L112.5 98.3L118.6 102.4L111.9 100.6L108.8 100.4L108 103.5L104.4 105L100.6 103.4L100 100.4L95.4 101.3L92.8 102.9L94.5 100.3Z",
  Leye:"M54.1 97.3L61.7 99.7L63.9 102.4L61.1 100.6L58.4 100.3L57.9 102.9L53.8 104.4L49.4 102.8L48.9 99.9L45.6 99.8L40.8 101.6L45.2 98.6Z",
  mustch:"M50.2 154.8L51.7 149.4L71.2 143.5L77.4 145.3L83.1 145L102.6 151.5L103.1 156.9L100.2 154.5L82.7 148.3L76.6 148.7L71.9 147.3L53.1 152.8L50.2 154.8Z",
  ReyeB:"M86.1 100.3L90.2 92.7L119.2 86.6L126.1 99.4L117.3 93.6L92.9 97.4L86.1 100.3Z",
  LeyeB:"M30.3 97.9L39.4 85.7L65.2 91.2L71.9 99.1L63.7 96.3L40.4 93.1L30.3 97.9Z",
}
const blinkClosed = {
  Reye:"M104.4 103.7L112.4 102.3L118.5 102.3L111.7 103.6L108.6 104.2L107.9 104.4L104.2 105L100.4 104.2L99.8 104L95.2 103.4L92.6 102.8L94.4 102.6Z",
  Leye:"M54 102.6L61.5 102.0L63.8 102.4L61 102.9L58.2 103.2L57.8 103.3L53.6 103.6L49.2 103L48.7 102.9L45.5 102.4L40.7 101.5L45 101.3Z",
}
const blinkOpen = {
  Reye:"M104.6 97.5L112.5 98.3L118.6 102.4L111.9 100.6L108.8 100.4L108 103.5L104.4 105L100.6 103.4L100 100.4L95.4 101.3L92.8 102.9L94.5 100.3Z",
  Leye:"M54.1 97.3L61.7 99.7L63.9 102.4L61.1 100.6L58.4 100.3L57.9 102.9L53.8 104.4L49.4 102.8L48.9 99.9L45.6 99.8L40.8 101.6L45.2 98.6Z",
}

function findCenter(rect){
  const x = ((rect.right-rect.left)/2)+rect.left
  const y = ((rect.bottom-rect.top)/2)+rect.top
  return ({
    x:x,
    y:y
  })
} 

function Pos2Pers(center,mX,mY){
  const width = window.innerWidth
  const height = window.innerHeight
  let x;
  let y;
  if(mX>center.x){
    x = (mX-center.x)/(width-center.x)
  }else{
    x= (center.x-mX)/center.x*-1
  }
  if(mY>center.y){
    y = (mY-center.y)/(height-center.y)
  }else{
    y= (center.y-mY)/center.y*-1
  }
  return({x:x,y:y})
}

function rightEyeMove (move){
  const moveX = move.x*3
  const moveY = move.y*2
  const xs = [104.6,108.8,108,104.4,100.6,100]
  const ys = [97.5,100.4,100.4]
  const sys = [103.5,105,103.4]
  const sys2 = [98.3,100.6,101.3,100.3]
  for(let i=0;i<xs.length;i++){
    xs[i] = xs[i] + moveX 
  }
  for(let i=0;i<ys.length;i++){
    ys[i] = ys[i] + moveY 
  }
  for(let i=0;i<sys.length;i++){
    if(moveY>1){sys[i] = sys[i] + 1}else{sys[i] = sys[i] + moveY}
  }
  for(let i=0;i<sys2.length;i++){
    if(moveY<0){sys2[i] = sys2[i] + (moveY/2)}else{sys2[i] = sys2[i] + moveY}
  }
  const ReyeD = `M${xs[0]} ${ys[0]}L112.5 ${sys2[0]}L118.6 102.4L111.9 ${sys2[1]}L${xs[1]} ${ys[1]}L${xs[2]} ${sys[0]}L${xs[3]} ${sys[1]}L${xs[4]} ${sys[2]}L${xs[5]} ${ys[2]}L95.4 ${sys2[2]}L92.8 102.9L94.5 ${sys2[3]}Z`
  return(ReyeD)
}

function leftEyeMove (move){
  const moveX = move.x*3
  const moveY = move.y*2
  const xs = [54.1,58.4,57.9,53.8,49.4,48.9]
  const ys = [97.3,100.3,99.9]
  const sys = [102.9,104.4,102.8]
  const sys2 = [99.7,100.6,99.8,98.6]
  for(let i=0;i<xs.length;i++){
    xs[i] = xs[i] + moveX 
  }
  for(let i=0;i<ys.length;i++){
    ys[i] = ys[i] + moveY 
  }
  for(let i=0;i<sys.length;i++){
    if(moveY>1){sys[i] = sys[i] + 1}else{sys[i] = sys[i] + moveY}
  }
  for(let i=0;i<sys2.length;i++){
    if(moveY<0){sys2[i] = sys2[i] + (moveY/2)}else{sys2[i] = sys2[i] + moveY}
  }
  const LeyeD = `M${xs[0]} ${ys[0]}L61.7 ${sys2[0]}L63.9 102.4L61.1 ${sys2[1]}L${xs[1]} ${ys[1]}L${xs[2]} ${sys[0]}L${xs[3]} ${sys[1]}L${xs[4]} ${sys[2]}L${xs[5]} ${ys[2]}L45.6 ${sys2[2]}L40.8 101.6L45.2 ${sys2[3]}Z`
  return(LeyeD)
}

const outline = "M9.1 107.3L7.4 61.8L10.2 41.2L14.7 38.1L14.6 31.3L26.2 16.8L41.7 8.2L46.9 8.6L50 4L68.8 1.2L89.2 3.5L94 7.5L96.2 5.6L117.2 12.3L131 28.8L133.4 36.3L136 39.8L141.1 58L142.1 87L138.4 109.2L143.9 109.4L147.5 124L140.7 144L135.4 153.5L129.3 154.1L120.7 171.8L109.1 187.2L91.1 199.9L68.4 201.2L51 189.9L30.2 167.5L22.9 151.7L16.9 152.1L8.4 144.3L1.5 124.3L4.1 109.8L9.1 107.3Z"
const beard = "M48.6 181.5L51 189.9L68.4 201.2L91.1 199.9L109.1 187.2L108.9 180.1L90 188.2L65.6 189.2L48.6 181.5Z"
const hair = "M132.7 116.9L129.9 88.5L131.2 80.9L131.2 65.9L119.1 47.6L115.8 31.5L105.9 17.3L112.6 31.4L115.3 46.8L105.7 44.5L98.1 25.2L76.1 13.2L94.3 25.4L102.2 45.3L96.2 44.7L82.1 32.7L54.9 31.9L79.8 34.9L92.1 46L79.7 47.4L65.9 52.8L55.1 60.4L31.9 54.2L21.3 71.4L23 86.4L17.1 100.2L18.7 114.6L9.1 107.3L7.4 61.8L10.2 41.2L14.7 38.1L14.6 31.3L26.2 16.8L41.7 8.2L46.9 8.6L50 4L68.8 1.2L89.2 3.5L94 7.5L96.2 5.6L117.2 12.3L131 28.8L133.4 36.3L136 39.8L141.1 58L142.1 87L138.4 109.2L132.7 116.9Z"
const Lnosed = "M66.1 135.8L71.1 135.4L74.6 136.9L69 137.4L66.1 135.8Z"
const Rshadow  = "M121.8 51.8L122.8 77L119.6 86.6L117.8 93.7L119.3 103.5L125.9 117.1L126.3 134.7L117.6 159.2L108.9 180.1L109.1 187.2L120.7 171.8L129.3 154.1L135.4 153.5L140.7 144L147.5 124L143.9 109.4L138.4 109.2L132.7 116.9L129.9 88.5L131.2 80.9L131.2 65.9L121.8 51.8Z"
const Lshadow = "M26.9 69.4L28.1 85.7L23.6 100.8L25.6 129.1L32.6 163.4L48.6 181.5L51 189.9L30.2 167.5L22.9 151.7L18.7 114.6L17.1 100.2L23 86.4L21.3 71.4L31.9 54.2L26.9 69.4Z"

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
  
  function blink() {
    setReye(blinkClosed.Reye)
    setLeye(blinkClosed.Leye)
    setTimeout(()=>{
        setReye(blinkOpen.Reye)
        setLeye(blinkOpen.Leye)
    },300);
  }
 
  const[load,setLoad] = useState(true)
   
  const [LeyeSh,setLeyeSh] = useState("M40.4 93.1L61.2 99.6L65.7 105.1L73.2 113.2L73.9 105.6L71.9 99.1L63.7 96.3L40.4 93.1Z")
  const [nose,setnose] = useState("M86.1 100.3L92.9 97.4L117.3 93.6L94.1 100.3L88.9 107.6L89.5 122.2L96 129L93.4 138.8L81.3 140.4L75.4 140.3L62.4 137.8L59.9 128.6L63.3 134.4L72.6 132.2L80.1 134.6L86.8 132.2L88.9 126.7L84.8 119.4L84.6 106.6L86.1 100.3Z")
  const [TLip,setTLip] = useState("M54.6 154.4L57.1 153.4L73.7 151.2L76.4 152.5L80.1 151.8L95.7 155.5L98.4 157.2L97.6 158.2L82.7 155.7L76.4 156.4L70.5 155.2L56.6 156.3L54.6 154.4Z")
  const [BLip,setBLip] = useState("M64.9 165.5L71.9 171.6L81.5 172.5L87.6 165.9L82.6 167.6L70.2 166.8L64.9 165.5Z")
  const [Rnosed,setRnosed] = useState("M83.3 137.7L87.1 135.7L91.8 136.5L87.5 138.2L83.3 137.7Z")
  const [Reye,setReye] = useState("M104.6 97.5L112.5 98.3L118.6 102.4L111.9 100.6L108.8 100.4L108 103.5L104.4 105L100.6 103.4L100 100.4L95.4 101.3L92.8 102.9L94.5 100.3Z")
  const [Leye,setLeye] = useState("M54.1 97.3L61.7 99.7L63.9 102.4L61.1 100.6L58.4 100.3L57.9 102.9L53.8 104.4L49.4 102.8L48.9 99.9L45.6 99.8L40.8 101.6L45.2 98.6Z")
  const [mustch,setmustch] = useState("M50.2 154.8L51.7 149.4L71.2 143.5L77.4 145.3L83.1 145L102.6 151.5L103.1 156.9L100.2 154.5L82.7 148.3L76.6 148.7L71.9 147.3L53.1 152.8L50.2 154.8Z")
  const [ReyeB,setReyeB] = useState("M86.1 100.3L90.2 92.7L119.2 86.6L126.1 99.4L117.3 93.6L92.9 97.4L86.1 100.3Z")
  const [LeyeB,setLeyeB] = useState("M30.3 97.9L39.4 85.7L65.2 91.2L71.9 99.1L63.7 96.3L40.4 93.1L30.3 97.9Z")

  const size = winWidth();
  if(size != undefined){
    document.documentElement.style.setProperty('--vw',size)
    if(load){
      const leftEye = document.querySelector('#leftEye')
      const rightEye = document.querySelector('#rightEye')
      let check = true
      window.addEventListener('mousemove',(event)=>{
        if(check == true){
          check = false
          const mouseX = event.pageX
          const mouseY = event.pageY
          const leftEyeC = findCenter(leftEye.getBoundingClientRect())
          const rightEyeC = findCenter(rightEye.getBoundingClientRect())
          const moveRightEye = Pos2Pers(rightEyeC,mouseX,mouseY)
          const moveLeftEye = Pos2Pers(leftEyeC,mouseX,mouseY)
          setLeye(leftEyeMove(moveLeftEye))
          setReye(rightEyeMove(moveRightEye))
          setTimeout(()=>{check = true},500)
        }
      })
      setInterval(() => {blink()}, 4000);
      setLoad(false)
    }
  }
  
  return (
    <main id="content">
      <Head>
        <title>Meet Save</title>
        <link rel="icon" href="/SavesDesignFavicon.png" />
      </Head>
      <h1>Meet Save!</h1>
      <hr/>
      <div 
        style={{
          display:"flex",
          flexWrap:'wrap',
          alignItems:"center",
          justifyContent:'center'
        }
      }>
        <svg 
          style={{
            height:200,
            margin:'0 30px 20px'
          }} 
          onMouseEnter={()=>{expr(quEx)}}
          onMouseLeave={()=>{expr(normEx)}}
          role="img" aria-label="Save" viewBox="0 0 149 203" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
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
            <path id="rightEye" d={Reye}/>
            <path id="leftEye" d={Leye}/>
            <path d={mustch}/>
            <path d={ReyeB}/>
            <path d={LeyeB}/>
          </g>
          <path d={outline} stroke="black" strokeOpacity="0.9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div style={{display:'grid',alignItems:'center'}}>
          <p>Save is a designer.</p>
          <p>He develops websites and apps,</p>
          <p>He designs logos and icons,</p>
          <p>He even builds furniture!</p>
          <p><b>Don't you want to work with Save already?!</b></p>
        </div>
      </div>
      <div className={homeCSS.linkDiv}>
        <p><b>Check Save's projects on</b></p>
        <a className={"icon"} href='https://www.behance.net/saveliy_saunin'>
          <svg width="101" fill="var(--dr)" height="19" viewBox="0 0 101 19" xmlns="http://wwwNaNw3org/2000/Svg">
            <path d="M22.2 18.6C21 18.4 19.8 17.9 19 17.3C18 16.5 17.3 15.4 16.9 14C16.7 13.4 16.7 13.2 16.7 11.8C16.7 10.4 16.7 10.1 16.8 9.6C17.6 7.1 19.4 5.4 21.9 4.9C22.8 4.7 24.5 4.8 25.3 5C27.1 5.6 28.4 6.9 29.2 9C29.5 9.6 29.6 10.5 29.6 11.7L29.6 12.5H24.9C20.8 12.5 20.1 12.5 20.1 12.6C20 12.8 20.2 13.8 20.5 14.4C21 15.4 21.9 15.9 23.3 15.9C24.6 15.9 25.5 15.4 26 14.6L26.3 14.2H29.4L29.3 14.5C29.3 14.7 29 15.2 28.8 15.6C28.3 16.5 27.4 17.5 26.6 17.9C25.2 18.6 23.7 18.8 22.2 18.6L22.2 18.6ZM26 9.9C25.9 9.5 25.5 8.7 25.2 8.3C25 8.1 24.7 7.9 24.4 7.8C24 7.6 23.8 7.5 23.1 7.5C22.4 7.5 22.2 7.6 21.8 7.8C20.8 8.2 20.3 8.9 20.2 9.9L20.1 10.3H26L26 9.9ZM92.6 18.6C91.4 18.4 90.2 17.9 89.4 17.3C88.4 16.5 87.7 15.4 87.3 14C87 13.1 86.9 11.1 87.1 10.1C87.5 8.3 88.5 6.8 89.9 5.8C91 5.1 92.2 4.8 93.7 4.8C94.9 4.8 95.6 4.9 96.4 5.4C97.3 5.8 97.9 6.3 98.4 6.9C99.5 8.4 100.1 10.1 100.1 11.9V12.6H90.5V12.8C90.5 13.6 91 14.7 91.6 15.2C92.3 15.9 93.9 16.1 95 15.7C95.6 15.5 96.4 14.9 96.6 14.4L96.7 14.2H99.8L99.7 14.5C99.6 14.7 99.4 15.2 99.2 15.6C98.7 16.5 97.8 17.5 97 17.9C95.6 18.6 94.1 18.8 92.6 18.6H92.6ZM96.5 10.3C96.5 9.9 96.1 8.8 95.7 8.3C95.3 7.8 94.3 7.5 93.4 7.5C91.9 7.6 90.9 8.6 90.7 9.9L90.7 10.3L96.5 10.3ZM46.1 17.3C45.3 16.6 45 15.8 45.1 14.4C45.1 13.5 45.1 13.4 45.4 12.9C45.7 12.2 46.3 11.6 47 11.3C47.7 10.9 48.5 10.7 50.3 10.5C52.2 10.3 52.5 10.2 53 10C53.5 9.7 53.7 9.5 53.7 8.9C53.7 8 53.2 7.4 52.2 7.2C51.7 7.1 50.7 7.1 50.3 7.3C49.7 7.5 49.2 8.1 49.1 8.8L49 9.1H45.4L45.5 8.6C45.6 6.8 47.2 5.4 49.4 5C50.6 4.7 53.2 4.7 54.4 5C54.6 5.1 55 5.2 55.4 5.4C56.2 5.8 56.8 6.4 57.1 7.1C57.3 7.5 57.3 7.6 57.3 12.1C57.4 14.7 57.4 16.9 57.5 17.1C57.5 17.5 57.7 17.9 57.9 18.3L54.2 18.3C54 17.9 53.9 17.5 53.9 17.1C53.9 17.1 53.7 17.3 53.5 17.4C52.5 18.2 51.5 18.5 49.9 18.6C48.9 18.6 48.6 18.6 47.9 18.4C47.3 18.2 46.6 17.9 46.1 17.3L46.1 17.3ZM53.1 15.3C53.6 14.8 53.7 14.4 53.7 13C53.7 12.4 53.7 11.9 53.7 11.9C53 12.2 52.7 12.3 51.9 12.4C50.6 12.6 49.7 12.8 49.4 13.1C48.9 13.4 48.6 14 48.6 14.5C48.6 15 48.7 15.5 49.2 15.8C50.5 16.5 52.2 16.3 53.1 15.3H53.1ZM78.2 18.4C76.3 18.1 74.8 17 73.9 15.4C73.3 14.4 73 13.3 73 11.9C73 10.4 73.2 9.5 73.9 8.1C74.3 7.4 74.4 7.2 75 6.6C76.4 5.2 77.9 4.7 80 4.8C82.5 4.9 84.4 5.9 85.3 7.6C85.5 8.1 85.8 9.1 85.8 9.5V9.8H82.3L82.2 9.4C82 8.6 81.6 8 80.9 7.7C80.1 7.3 79.2 7.3 78.6 7.7C77.5 8.3 77 9.1 76.8 10.2C76.5 11.4 76.5 12.2 76.8 13.5C77.3 15.2 78.7 16.1 80.2 15.9C81.4 15.6 82.2 14.9 82.4 13.7L82.5 13.2L86 13.2C86 13.3 85.9 13.5 85.9 13.8C85.7 14.5 85.5 15.1 85.2 15.7C84.9 16.3 83.9 17.4 83.2 17.7C81.9 18.5 79.9 18.8 78.2 18.4L78.2 18.4ZM59.2 5.1H62.8L62.8 6.9L63 6.7C63.9 5.4 65.3 4.8 67 4.8C69 4.8 70.3 5.5 71 7C71.6 8.1 71.6 8.1 71.6 13.5L71.6 18.3H68L68 14.4C68 12.2 68 10.2 68 9.9C67.8 8.6 67.3 7.9 66.4 7.7C65.9 7.5 65 7.6 64.5 7.8C64 8 63.5 8.5 63.3 8.9C62.9 9.7 62.8 9.9 62.8 14.3L62.8 18.4H59.2L59.2 5.1ZM31.1 0.1H34.7L34.7 6.9C34.8 6.9 34.9 6.7 35.1 6.5C35.4 6 36 5.5 36.6 5.2C37.4 4.9 38 4.8 38.8 4.8C41.2 4.8 42.7 5.8 43.2 8C43.3 8.5 43.3 9.2 43.3 13.4L43.4 18.3H39.8L39.7 14C39.7 9.7 39.7 9.6 39.5 9.1C39.4 8.7 39.3 8.5 39 8.2C38.5 7.7 38.2 7.6 37.2 7.7C35.9 7.7 35.2 8.3 34.9 9.6C34.7 10 34.7 10.7 34.7 14.2L34.7 18.3H31.1L31.1 0.1ZM0.1 0.1L4.7 0.1C7.2 0.1 9.5 0.1 9.9 0.2C11.3 0.3 12.6 0.8 13.3 1.4C13.9 2 14.3 3 14.4 4.1C14.5 5.8 13.9 7.1 12.6 8C12.1 8.3 12 8.4 12.1 8.4C12.2 8.4 12.6 8.6 12.9 8.7C14.4 9.5 15.2 11 15.2 13C15.2 14.5 14.9 15.5 13.9 16.4C13 17.3 11.9 17.8 10 18.1C9.4 18.2 8.3 18.2 4.7 18.2L0.1 18.2V0.1ZM10.7 14.4C11.1 13.9 11.2 13.5 11.2 12.7C11.3 11.6 10.9 10.9 10.1 10.5C9.4 10.1 8.6 10.1 6 10.1L4.1 10.1L4 15.2H6.5C8 15.2 9.1 15.1 9.5 15C9.9 15 10.3 14.8 10.7 14.4L10.7 14.4ZM9.5 7.2C10 6.9 10.3 6.5 10.4 6.1C10.6 5.7 10.6 4.8 10.4 4.4C10.3 4 9.9 3.6 9.3 3.4C8.9 3.2 8.7 3.2 6.5 3.2H4V7.4L9 7.4L9.5 7.2ZM19.4 1.3H26.7V3.1H19.4V1.3Z"/>
          </svg>
        </a>
      </div>
      <div className={homeCSS.linkDiv}>
        <p><b>Connect with Save on</b></p>
        <a className={"icon"} href='https://www.linkedin.com/in/saveliy-saunin/'>
          <svg fill="var(--dr)" width="101" height="26" viewBox="0 0 101 26" xmlns="http://wwwNaNw3org/2000/Svg">
            <path d="M51.7 9.7C50.8 9.7 50.5 9.7 49.9 9.8C47.4 10.4 46 12 45.6 14.5C45.6 15 45.6 16 45.6 16.5C45.8 18 46.4 19.2 47.3 20.2C48.3 21.1 49.6 21.7 51.1 21.8C51.9 21.9 52.9 21.8 53.7 21.6C54.8 21.4 55.8 20.9 56.5 20.3C56.8 20.1 57.1 19.8 57 19.8L54.9 18L54.8 18.1C54.5 18.5 54 18.8 53.5 19C53 19.3 52.6 19.4 52.1 19.4C51.4 19.5 50.6 19.3 50.1 19C49.8 18.7 49.4 18.2 49.2 17.8C49 17.5 48.9 17.1 48.9 17V16.8H57.4L57.4 16.7C57.5 16.5 57.5 15.4 57.4 14.8C57.2 13.2 56.7 12 55.8 11.1C55.4 10.7 55.1 10.5 54.6 10.3C54.1 10 53.6 9.8 52.9 9.7C52.6 9.7 52.5 9.7 51.7 9.7L51.7 9.7ZM51.6 12C51.9 12 52.2 12 52.4 12.1C52.7 12.2 53 12.4 53.3 12.7C53.7 13.1 54 13.7 54 14.3L54 14.5L48.9 14.6L49 14.4C49 14.2 49.1 13.8 49.2 13.6C49.5 12.9 50.1 12.4 50.8 12.1C51.1 12.1 51.3 12 51.6 12L51.6 12ZM68.2 3.8V11.2L67.9 10.9C67.5 10.6 67.2 10.3 66.8 10.2C66.3 9.9 65.7 9.7 65.1 9.7C64.7 9.6 63.9 9.6 63.5 9.7C62.3 9.9 61.3 10.3 60.5 11.2C60 11.6 59.7 12.1 59.4 12.7C58.7 14 58.5 15.5 58.8 17.1C59.2 19.7 61.1 21.6 63.7 21.8C64 21.8 64.8 21.8 65.1 21.8C66.4 21.6 67.4 21.2 68.1 20.5C68.3 20.4 68.4 20.3 68.4 20.3L68.4 21.7H71.7V3.8L68.2 3.8ZM65.2 12.3C65.7 12.3 66.3 12.4 66.7 12.6C67.6 13 68.2 13.8 68.4 14.9C68.4 15.3 68.4 16.1 68.4 16.5C68.2 17.2 67.9 17.8 67.5 18.3C67 18.7 66.5 19 65.8 19.1C65.5 19.1 64.9 19.2 64.6 19.1C64.4 19.1 64 19 63.8 18.9C63 18.5 62.4 17.8 62.2 16.9C62 16.5 62 16.2 62 15.7C62 15 62.1 14.5 62.3 14C62.8 13.1 63.6 12.5 64.6 12.3C64.8 12.3 65 12.3 65.2 12.3V12.3ZM0.3 3.8H3.9V18.1H11V21.7H0.3V3.8ZM13.4 9.8H17V21.7H13.4V9.8ZM19.4 9.8H22.7L22.8 11.5C22.8 11.5 22.8 11.5 22.8 11.4C22.9 11.2 23.2 10.9 23.4 10.8C24.1 10.2 25 9.8 26.1 9.7C26.5 9.6 27.4 9.7 27.8 9.7C29.7 10.1 30.7 11.1 31.1 13.1C31.3 13.9 31.3 13.8 31.3 17.9L31.3 21.7H27.7L27.7 18.4C27.7 14.8 27.7 15 27.6 14.4C27.4 13.6 26.9 13.1 26.3 12.8C25.9 12.7 25.4 12.7 25 12.8C24.5 12.9 24.2 13.1 23.9 13.4C23.5 13.8 23.2 14.3 23 15C22.9 17.5 23 18.4 23 21.7H19.4L19.4 9.8ZM33.7 3.8H37.2L37.2 14.5L41.4 9.8L45.5 9.8L40.8 15.2L45.8 21.7L41.6 21.7L37.3 15.8L37.2 15.7L37.2 21.7H33.7L33.7 3.8ZM14.8 7.7C13.8 7.5 13.1 6.6 13.1 5.6C13.1 5.3 13.2 5.1 13.3 4.8C13.6 4 14.4 3.5 15.2 3.5C15.6 3.5 15.9 3.5 16.2 3.7C17.5 4.3 17.8 6.1 16.7 7.1C16.4 7.4 16.1 7.6 15.8 7.7C15.5 7.7 15.1 7.8 14.8 7.7V7.7ZM77.2 0.3C76.2 0.3 75.4 1.1 75.4 2.1V23.5C75.4 24.5 76.2 25.3 77.2 25.3H98.5C99.5 25.3 100.3 24.5 100.3 23.5V2.1C100.3 1.1 99.5 0.3 98.5 0.3H77.2ZM80.7 3.4C80.9 3.4 81.1 3.4 81.3 3.5C82.1 3.7 82.7 4.3 82.9 5.1C82.9 5.4 82.9 5.9 82.9 6.2C82.6 7 82 7.6 81.1 7.8C80.9 7.9 80.5 7.9 80.2 7.8C79.8 7.7 79.5 7.5 79.2 7.2C78.9 6.9 78.7 6.7 78.6 6.3C78.5 6.1 78.5 6 78.5 5.6C78.5 5.2 78.5 5 78.7 4.6C78.9 4.2 79.2 3.9 79.6 3.6C79.9 3.5 80.3 3.4 80.7 3.4L80.7 3.4ZM92.2 9.6C92.6 9.6 92.9 9.6 93.1 9.7C93.7 9.8 94.3 9.9 94.7 10.1C95.8 10.6 96.4 11.6 96.6 13.1C96.8 14 96.8 14.6 96.8 18.4L96.8 21.7H93.2L93.2 15L93.1 14.8C92.8 13.3 92 12.7 90.8 12.8C90.4 12.8 90.1 12.9 89.8 13C89 13.4 88.6 14.3 88.5 15.5C88.4 15.8 88.4 17.1 88.4 18.8V21.7H84.9V9.8H88.2L88.3 11.5L88.4 11.3C88.5 11.1 89 10.7 89.2 10.5C89.8 10.1 90.5 9.8 91.3 9.7C91.5 9.7 91.8 9.6 92.2 9.6L92.2 9.6ZM78.9 9.8H82.5V21.7H78.9V9.8Z"/>
          </svg>
        </a>
      </div>
      <div className={homeCSS.linkDiv}>
        <p><b>Email Save</b></p>
        <a href="mailto:contact.saves.design@gmail.com">contact.saves.design@gmail.com</a>
      </div>
      
    </main>
  )
}
