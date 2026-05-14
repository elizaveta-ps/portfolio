import { ParallaxStars } from '@/components/ParallaxStars/ParallaxStars';
import { basePath } from '@/helpers/basePath';
import styles from './Hero.module.css';

export const Hero = () => (
    <div className={styles.wrapper}>
        <div className={styles.avatar}>
            <img src={`${basePath}/avatar.jpg`} />
            <ParallaxStars />
        </div>
        <div className={styles.role}>
            <div>Елизавета Плотникова</div>
            <div>QA Engineer</div>
            <div>(auto + manual)</div>
        </div>
    </div>
);