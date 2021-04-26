// import React from 'react'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Menu from './components/Menu'
// import Head from 'next/Head'
// import 'bulma/css/bulma.min.css';
// function Emos (props){
//     return(
//      <div>
//             <Head>
//                 <title>emOS - Pete Ridley - Portfolio 2021</title>
//             </Head>
//             <Menu />
//             <main className={styles.main}>
     
//                 <div className={styles.homehero}>
//                     <h1>
//                     emOS 1.0
//                     </h1>
//                     <h2>emOS is a workplace operating system concept based on the idea of Affective Computing - a system that understands and reacts to human emotion.</h2>
//                 </div>

//          <div className="columns">
//              <div className="column is-7">
//                  <div className="intro">
//                  <p>The OS acts as a gatekeeper that is designed to analyse an employees emotional state throughout the day and restrict access to work tools until it deems the employee’s is emotionally fit for work. When a user’s mood score is low, it presents tools to make the user happy, including meditation exercises, upbeat music, funny videos and a chatbot which prescribes mood enhancing pills.</p>
//                  <p>emOS is designed to shine a light on how AI systems built to optimise productivity could be used to harvest data and discriminate workers who are suffering from mental health issues in the workplace - favouring the machine, or other employees with higher emotional scores.</p>
//              </div>
//         </div>

//          </div>


//          <div className="image-section">
             
//         <Image
//             src="/images/emos_image1.png"
//             alt="Picture of the author"
//             layout="responsive"
//             width={1280}
//             height={720}
//             />

//          </div>

//          <div className="columns">
//              <div className="column is-8">
//                  <div className="intro">
//                  <h2>Challenges</h2>
//                  <p>Commercial technology is not designed with human wellbeing at the forefront. Blue lights from screens, sedentary periods at a computer and an influx of hourly notifications wreak havoc on physical and mental health. </p>
//                  <p>I focused my research on understanding how technology could be a little more attentive to the needs of the person who is using it. I came across <a href="https://www.media.mit.edu/groups/affective-computing/overview/"> Rosalind Picard’s work at MIT on Affective Computing </a> which inspired me to explore the idea of an interface that is designed to react to human emotion.</p>
//                  <p>Emotion is the core driver of behaviour in users, and determines whether the user has a good experience with a system, or a bad one. I set out to explore how a system could react to human emotion, and what that would mean for the person using it.</p>
//              </div>
//              </div>

//          </div>
//         <div className = "columns">
//             <div className ="column is-offset-5 is-7">
//             <Image
//             src="/images/emos_image2.png"
//             alt="Picture of the author"
//             width={500}
//             height={500}
//             />

//             </div>
//         </div>
//          <div className="columns">
//              <div className="column is-8">
//                  <div className="intro">
//                 <h2> Solutions</h2>
//                 <p>A person’s productivity and work ethic decreases if they are feeling angry, sad, or anxious. Which makes it difficult for the user to complete tasks efficiently, costing employers valuable time and money. </p>
//                 <p>I decided to design a system that understands how workers are feeling, and improve their mood through a series of tools that can help them get back to productivity.</p>
//                 <p>It wasn’t long until I began to look at the moral implications of a system like this in the workplace, and how the system could incorrectly penalise users for having low moods and how that data could be used to decide who is ‘fit for work’ and who isn’t. This set the undertone of the project as being a political statement about misuse of data, rather than a project of commercial value.</p>
//                 <p>For this project I designed the UX strategy behind the system, experimented with emotion recognition data to build a score system and conceptualised a dystopian UI.</p>
//              </div>
//              </div>

//          </div>


//          <div className="image-section">
             
//         <Image
//             src="/images/emos_image3.png"
//             alt="Picture of the author"
//             layout="responsive"
//             width={1187}
//             height={740}
//             />

//          </div>
         
//          <div className="columns">
//              <div className="column is-8">
//                  <div className="intro">
//                 <p>Using Microsoft’s Face API I generated a mood score based on the scale of anger, disgust or sadness. The API monitors facial expressions and creates a score that is over 70% accurate. </p>
//                 <p>The higher these scores, the lower the emotion score. If the emotion score is below 10, the system will deny access and keep trying until the score is above 10.</p>
//              </div>
//              </div>

//          </div>


//          <Image
//             src="/images/emos_image4.png"
//             alt="Picture of the author"
//             layout="responsive"
//             width={1187}
//             height={740}
//             />

// <div className="columns">
//              <div className="column is-8">
//                  <div className="intro">
//                 <p>I designed the eTools as a suite of applications designed to help the user improve their emotion score. Using YouTube’s API I was able to populate the video app with cat videos. </p>
//              </div>
//              </div>

//          </div>



//          <Image
//             src="/images/emos_image5.png"
//             alt="Picture of the author"
//             layout="responsive"
//             width={1798}
//             height={1011}
//             />

//         </main>

//       </div>
//     )
// }

// export default Emos