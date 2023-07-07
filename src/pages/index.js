import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Skills from '@/components/Skills.jsx';
import Projects from '@/components/Projects.jsx';
import Contact from '@/components/Contact.jsx';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Psycho006's Portfolio</title>
        <meta name="description" content="Psycho006Develop's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;