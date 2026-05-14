'use client';

import { useState, useRef, useEffect } from 'react';
import { MouseParallaxContainer } from 'react-parallax-mouse';

import { Box } from '@/components/Box/Box';
import { TagLink } from '@/components/TagLink/TagLink';
import { Tag } from '@/components/Tag/Tag';
import { Button } from '@/components/Button/Button';
import { Hero } from '@/components/Hero/Hero';
import { Contacts } from '@/components/Contacts/Contacts';
import { Experience } from '@/components/Experience/Experience';
import { Cta } from '@/components/Cta/Cta';
import { basePath } from '../../../config/basePath';
import styles from './Home.module.css';

export default function Home() {
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
                                <Box title="Ссылки">
                                    <TagLink variant="primary" title="Github" href="https://github.com/elizaveta-ps" />
                                </Box>
                                <Box title="Языки" className={styles.desktop}>
                                    <div>
                                        <p>Русский<span className={styles.muted}> — Родной</span></p>
                                        <p>Английский<span className={styles.muted}> — B1</span></p>
                                    </div>
                                </Box>
                                <Box title="Курсы">
                                    <TagLink 
                                        title="Инженер по тестированию" 
                                        href="https://manual.qa.studio/" 
                                        subtitle="QA Studio" 
                                    />
                                    <TagLink 
                                        title="Playwright E2E Testing with AI for Beginners — Zero to Hero" 
                                        href="https://www.udemy.com/course/playwright-e2e-testing-for-beginners-js-ts" 
                                        subtitle="Udemy" 
                                    />
                                </Box>
                                <Button
                                    href="cv-plotnikova-qa.pdf" 
                                    download 
                                    variant="secondary" 
                                    icon="download"
                                >
                                    Скачать резюме
                                    <span>(PDF)</span>
                                </Button>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.mobile}>
                                    <Hero />
                                </div>
                                <Box title="Кто я" className={styles.about}>
                                    <div>
                                        <p>Привет, меня зовут Лиза!👋</p>
                                        <p>Я активно развиваюсь в направлении QA и автоматизации тестирования. Мне нравится разбираться, почему возникают дефекты, и как сделать продукт более стабильным и удобным.</p>
                                        <p>Как пользователь, я замечаю, когда интерфейсы сделаны качественно и удобно, и обращаю внимание на соответствие привычным паттернам и пользовательским ожиданиям. При этом для меня также важно открывать для себя новые нестандартные решения.</p>
                                        <p>Опыт во frontend-разработке помогает лучше понимать, как устроены веб-приложения и как взаимодействуют их части. Благодаря этому проще замечать, где могут возникать потенциальные проблемы в работе приложения и как они могут влиять на пользовательский опыт.</p>
                                    </div>
                                </Box>
                                <Box title="Навыки">
                                    <Tag img={`${basePath}/icons/logo-playwright.svg`}>PlayWright</Tag>
                                    <Tag>Java Script</Tag>
                                    <Tag>HTML</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>HTTP</Tag>
                                    <Tag>REST API</Tag>
                                    <Tag>SQL</Tag>
                                    <Tag>Функциональное тестирование</Tag>
                                    <Tag>API-тестирование</Tag>
                                    <Tag>Автоматизированное тестирование</Tag>
                                    <Tag>Тест-кейс</Tag>
                                    <Tag>Баг-репорт</Tag>
                                </Box>
                                <Box title="Инструменты">
                                    <Tag img={`${basePath}/icons/logo-postman.svg`}>Postman</Tag>
                                    <Tag>DevTools</Tag>
                                    <Tag>Kibana</Tag>
                                    <Tag>Sentry</Tag>
                                    <Tag>Charles</Tag>
                                    <Tag img={`${basePath}/icons/logo-figma.svg`}>Figma</Tag>
                                    <Tag>Git</Tag>
                                    <Tag>VS Code</Tag>
                                    <Tag>Jira</Tag>
                                    <Tag img={`${basePath}/icons/logo-docker.svg`}>Docker</Tag>
                                </Box>
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