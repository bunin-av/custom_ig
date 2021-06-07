import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.scss'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const setClass = () => {
        return `${styles.item} ${styles[props.affair.priority]}`
    }

    return (
      <div>
          <div className={styles.item_wrapper}>
              <div className={styles.item}>{props.affair.name}</div>
              <div className={setClass()}>[{props.affair.priority}]</div>
              <div>
                  <button onClick={deleteCallback}>X</button>
              </div>
          </div>
      </div>
    )
}

export default Affair
