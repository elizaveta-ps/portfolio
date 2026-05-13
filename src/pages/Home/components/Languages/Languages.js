import { Box } from '@/components/Box/Box';
import styles from './Languages.module.css';

export const Languages = () => (
    <Box title="Языки">
        <div>
            <p>Русский<span className={styles.muted}> - Родной</span></p>
            <p>Английский<span className={styles.muted}> - B1</span></p>
        </div>
    </Box>
);