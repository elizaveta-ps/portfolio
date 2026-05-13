import { IconDownload } from '@/components/Icons/Icons';
import styles from './Button.module.css';

const icons = {
    'download': IconDownload,
}

export const Button = ({ icon, href, children, ...props }) => {
    const Icon = icons[icon];

    return href ? (
        <a href={href} className={styles.button} {...props}>
            <div className={styles.content}>
                { children }
                { Icon && <Icon /> }
            </div>
        </a>
    ) : (
        <button className={styles.button} {...props}>
            <div className={styles.content}>
                { children }
                { Icon && <Icon /> }
            </div>
        </button>
    );
}