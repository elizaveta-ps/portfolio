import styles from './Tag.module.css';

export const Tag = ({ img, children }) => (
    <div className={styles.container}>
        {children}
        {img && <img src={img} />}
    </div>
);