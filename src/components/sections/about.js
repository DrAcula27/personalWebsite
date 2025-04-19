import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list,
  ul.list {
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--blue);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
  }

  h3 {
    margin-top: 50px;
    font-size: var(--fz-xl);
  }

  .connect {
    margin-top: 50px;
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--blue);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--gray);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--blue);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'GraphQL',
    'DuckDB',
    'SQL',
    'R/Shiny',
    'AWS',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm <b>Danielle Andrews</b> — a <b>full-stack software engineer</b>, U.S.
              Marine Corps <b>veteran</b>, and former mechanical engineer who loves building tech
              that solves real-world problems.
            </p>
            <p>
              With <b>over 5 years of experience</b> in full-stack development, I've worked across
              startups, civic tech, and open-source projects to deliver accessible, performant web
              applications. My journey into software began while streamlining engineering workflows
              with automation scripts. That love for optimization and impact eventually led me to
              leave mechanical engineering and pursue software full-time.
            </p>
            <p>
              Today, I <a href="#jobs">consult</a> as a web developer for government and nonprofit
              clients, contribute to open-source and volunteer-led projects, and build tools for
              salmon conservation and environmental research.
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.PNG"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>

      <StyledText>
        <blockquote>
          <h3>
            I thrive in mission-driven environments where accessibility, collaboration, and
            performance intersect — and I'm passionate about creating inclusive, user-centered
            experiences.
          </h3>
        </blockquote>

        <h3>On the frontend, I can:</h3>
        <ul className="list">
          <li>Manage state with React Context</li>
          <li>Build reusable UI components with React and semantic HTML</li>
          <li>Create responsive layouts that work across different screen sizes</li>
          <li>Optimize rendering with memoization</li>
          <li>Implement WCAG-compliant accessibility (screen readers, keyboard navigation)</li>
          <li>Style applications using CSS, Tailwind, Material UI, or Bootstrap</li>
        </ul>

        <h3>On the backend, I can:</h3>
        <ul className="list">
          <li>Build RESTful and GraphQL APIs</li>
          <li>Manage SQL (PostgreSQL) and NoSQL (MongoDB) databases</li>
          <li>Implement secure auth with JWT, OAuth, and session-based strategies</li>
          <li>Use CDNs and database caching to improve app performance</li>
          <li>Set up GitHub Actions</li>
          <li>Deploy on AWS cloud platforms</li>
        </ul>

        <h3>Technologies I've been working with lately:</h3>
        <ul className="skills-list">
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>

        <h3>What I'm up to now:</h3>
        <ul className="list">
          <li>
            Building an environmental impact calculator for NOAA Fisheries using R and Shiny to
            analyze GIS data
          </li>
          <li>
            Developing AWS-integrated workflows at TeamForward Networking to automate post-event
            processes
          </li>
          <li>
            Consulting with local government and civic groups to create accessible digital
            experiences
          </li>
          <li>Volunteering with my local salmon conservation group (HCSEG)</li>
        </ul>

        <p className="connect">
          If you're working on something mission-driven, or just want to talk tech, open-source, or
          salmon, let's{' '}
          <a className="email-link" href="mailto:danielle.andrews.dev@icloud.com">
            connect
          </a>
          !
        </p>
      </StyledText>
    </StyledAboutSection>
  );
};

export default About;
