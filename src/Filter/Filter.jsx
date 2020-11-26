import React from "react"
import styles from "./Filter.module.css"
import PropTypes from "prop-types"

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      <input
        className={styles.form__input}
        type="text"
        name="filter"
        value={value}
        onChange={(event) => onChangeFilter(event.target.value)}
      />
    </label>
  )
}

Filter.defaultProps = {
  value: "",
}

Filter.propTypes = {
  value: PropTypes.string.isRequired
}

export default Filter
