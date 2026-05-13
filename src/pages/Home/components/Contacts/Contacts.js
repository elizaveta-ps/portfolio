import { Box } from '@/components/Box/Box';
import styles from './Contacts.module.css';
import { SocialLink } from '@/components/SocialLink/SocialLink';

export const Contacts = () => (
    <Box title="Контакты">
        <div>
            <span className={styles.muted}>Email: </span>
            <a href="mailto:ps1.elizaveta@gmail.com" className={styles.link}>
                ps1.elizaveta@gmail.com
            </a>
        </div>
        <div className={styles.items}>
            <SocialLink href="https://t.me/aksil_j" iconName="telegram" />
        </div>
    </Box>
);