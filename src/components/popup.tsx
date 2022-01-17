import styles from '../styles/components/popup.module.css'

interface props {
    topValue: string,
    leftValue: string,
    children : React.ReactNode,
    hidden : boolean,
    [key: string]: any
} 

const Popup = ({children,topValue, leftValue, hidden, ref}:props) => {
    return(
        <div ref={ref} className={styles.container} style={{top : topValue, left: leftValue}} hidden={hidden}>
            {children}
        </div>

    )
}


export default Popup;