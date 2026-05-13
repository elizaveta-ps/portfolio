import { Box } from '@/components/Box/Box';
import styles from './Experience.module.css';

export const Experience = () => (
    <Box title="Опыт">
        <div className={styles.role}>
            <div>
                <div>
                    <span className={styles.name}>QA Studio</span>
                    <span className={styles.muted}> — Студент курса</span>
                </div>
                <span className={styles.muted}>Январь, 2026</span>
            </div>
            <div className={styles.description}>
                <ul>
                    <li>- ручное тестирование веб-приложений в рамках учебных проектов;</li>
                    <li>- тестирование API через Postman;</li>
                    <li>- составление тест-кейсов, чек-листов и баг-репортов;</li>
                    <li>- анализ ошибок и сетевых запросов с помощью Chrome DevTools;</li>
                    <li>- работа с логами в Kibana и Sentry;</li>
                    <li>- проверка соответствия функционала требованиям.</li>
                </ul>
                <p>
                    <span className={styles.muted}>Автоматизация тестирования:</span>
                    <br />
                    Освоила автоматизацию тестирования на Playwright. Пишу UI- и API-автотесты.
                </p>
                <p>
                    <span className={styles.muted}>Дополнительно:</span>
                    <br />
                    Имею практический опыт работы с JavaScript, HTML и CSS, понимаю архитектуру веб-приложений и принципы клиент-серверного взаимодействия. Ранее занималась версткой сайтов с использованием этих технологий.
                </p>
            </div>
        </div>
    </Box>
);