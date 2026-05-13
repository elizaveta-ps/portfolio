import { IconTelegram } from '@/components/Icons/Icons';
import styles from './ButtonLink.module.css';

const icons = {
    'telegram': IconTelegram,
}

export const ButtonLink = ({ href, icon, children }) => {
    const Icon = icons[icon];

    return (
        <a href={href} target="_blank" className={styles.button}>
            <div className={styles.content}>
                { children }
                { Icon && <Icon /> }
            </div>
        </a>
    );
}