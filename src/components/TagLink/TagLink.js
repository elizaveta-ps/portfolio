import cn from 'classnames';
import { IconArrow } from '@/components/Icons/Icons';
import styles from './TagLink.module.css';

export const TagLink = ({ variant, title, subtitle, href }) => (
    <a href={href} target="_blank" className={cn(styles.link, {
        [styles.primary]: variant == 'primary',
    })}>
        <div className={styles.content}>
            <div>{title}</div>
            {
                subtitle && <span>{subtitle}</span>
            }
            <IconArrow />
        </div>
    </a>
);