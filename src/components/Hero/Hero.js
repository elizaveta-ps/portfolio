import { MouseParallaxContainer } from 'react-parallax-mouse';
import { ParallaxStars } from '@/components/ParallaxStars/ParallaxStars';
import styles from './Hero.module.css';

export const Hero = () => (
    <div className={styles.wrapper}>
        <div className={styles.avatar}>
            <img src="/avatar.jpg" />
            <ParallaxStars />
        </div>
        <div className={styles.role}>
            <div>Елизавета Плотникова</div>
            <div>QA Engineer</div>
            <div>(auto + manual)</div>
        </div>
    </div>
);