import cn from 'classnames';
import styles from './Box.module.css';

export const Box = ({ title, className, children }) => {
    return (
        <div className={cn(styles.box, className)}>
            {title && <div className={styles.title}>{title}</div>}
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}