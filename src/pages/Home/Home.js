'use client';

import { useState, useRef, useEffect } from 'react';
import { MouseParallaxContainer } from 'react-parallax-mouse';

import { Button } from '@/components/Button/Button';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Skills } from './components/Skills/Skills';
import { Tools } from './components/Tools/Tools';
import { Links } from './components/Links/Links';
import { Languages } from './components/Languages/Languages';
import { Courses } from './components/Courses/Courses';
import { Experience } from './components/Experience/Experience';
import { Cta } from './components/Cta/Cta';
import styles from './Home.module.css';

export const Home = () => {
    const blobContainer = useRef(null);
    const [blobHeight, setBlobHeight] = useState(0);

    useEffect(() => {
        const el = blobContainer.current;
        if (!el) return;

        const observer = new ResizeObserver(() => {
            const height = el.getBoundingClientRect().height;
            setBlobHeight(height);
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <div ref={blobContainer} className={styles.blob}>
                    <div style={{ height: `${blobHeight}px` }} className={styles.blobInner}>
                        <div></div>
                    </div>
                </div>
                <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                    <div className="container">
                    <div className={styles.container}>
                        <div className={styles.col}>
                            <div className={styles.desktop}>
                                <Hero />
                            </div>
                            <div className={styles.desktop}>
                                <Contacts />
                            </div>
                            <Links />
                            <div className={styles.desktop}>
                                <Languages />
                            </div>
                            <Courses />
                            <Button variant="secondary" icon="download" download href="cv-plotnikova-qa.pdf">
                                Скачать резюме
                                <span>(PDF)</span>
                            </Button>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.mobile}>
                                <Hero />
                            </div>
                            <About />
                            <Skills />
                            <Tools />
                            <Experience />
                        </div>
                    </div>
                    </div>
                </MouseParallaxContainer>
            </div>
            <Cta />
        </>
    );
}