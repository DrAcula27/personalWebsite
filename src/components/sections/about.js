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
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
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

  details {
    margin-top: 2em;

    summary {
      text-decoration: underline dotted var(--blue) from-font;
      font-weight: bold;
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
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
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'GraphQL',
    'DuckDB',
    'SQL',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Danielle and I enjoy creating things that live on the internet. I am
              a software engineer with 5+ years of experience in end-to-end full-stack development
              across a variety of industries, including startups and open-source projects. My career
              began in mechanical engineering and aviation maintenance, where I gained 7 years of
              combined experience in both military and engineering leadership. I thrive in
              collaborative, mission-driven environments where I can build secure, scalable
              solutions, and I'm excited about opportunities to create impactful, user-centered
              software. More than just being a leader, however, I am also a doer -
            </p>
            <p>On the frontend, I can:</p>
            <ul className="skills-list">
              <li>manage state with React Context</li>
              <li>build reusable UI components with React (and vanilla HTML)</li>
              <li>create responsive layouts that work across different screen sizes</li>
              <li>optimize rendering with memoization (React.memo, useMemo, useCallback)</li>
              <li>implement WCAG-compliance for screen readers and keyboard navigation</li>
              <li>
                Style applications using vanilla CSS or CSS frameworks like Bootstrap, Material UI,
                or Tailwind CSS
              </li>
            </ul>
            <p>On the backend, I can:</p>
            <ul className="skills-list">
              <li>build out RESTful and GraphQL APIs</li>
              <li>manage SQL (PostgreSQL) and NoSQL (MongoDB) databases</li>
              <li>implement secure auth with JWT, OAuth, and session-based auth</li>
              <li>use CDNs and database caching to improve performance</li>
              <li>set up GitHub Actions</li>
            </ul>

            <p>
              Currently, my main focus is building accessible, inclusive products and digital
              experiences as a <a href="#jobs">consultant</a> for a variety of clients.
            </p>

            <p>
              I actively contribute to <a href="https://www.hackforla.org">open source projects</a>{' '}
              and volunteer at local businesses in my free time.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
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
        <details>
          <summary>Click here to learn more about me.</summary>
          <p>
            I am a software engineer with a background in mechanical engineering, aviation
            maintenance, and salmon conservation. Currently, I consult as a web developer,
            contribute to multiple open-source/volunteer projects, and volunteer with my local
            salmon conservation group. After high school, I went to college to study aerospace and
            mechanical engineering. While in college, I joined the United States Marine Corps as a
            helicopter mechanic and worked part-time as a mechanical engineer to pay my way through
            school. I graduated from college with a bachelor of science in mechanical engineering,
            minors in aerospace engineering and German, and Magna Cum Laude honors. While working as
            a mechanical engineer, I found myself spending more time automating tasks to make my job
            more efficient (both for myself and my coworkers); I also found that I enjoyed that part
            of the job more than the engineering itself. Then COVID hit, and I lost my job.
            Motivated by my passion of automating tasks, I turned to software engineering. Since
            then, I started consulting web development work. As a consulting software engineer, I
            have completed projects for several clients, ranging from local government to Edtech
            startups. I continually upskill my technical and soft skills through the 100devs agency.
          </p>
        </details>
      </StyledText>
    </StyledAboutSection>
  );
};

export default About;
