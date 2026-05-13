import { IconTelegram, IconLinkedin, IconHH } from '@/components/Icons/Icons';
import styles from './SocialLink.module.css';

const icons = {
    'telegram': IconTelegram,
    'linkedin': IconLinkedin,
    'hh': IconHH,
}

export const SocialLink = ({ iconName, href }) => {
    const Icon = icons[iconName];

    if (!Icon) return null;

    return (
        <a href={href} target="_blank" className={styles.link}>
            <Icon />
        </a>
    );
}