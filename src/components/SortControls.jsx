import React from 'react'

const SortControls = ({onSortChange}) => {
    return (
        <div className="controls">
            <label htmlFor="sort-select">Sort by:</label>
            <select id="sort-select" onChange={(e) => onSortChange(e.target.value)}>
                <option value="default">Default</option>
                <option value="az">A-Z</option>
                <option value="za"> Z-A</option>
                <option value="year-new">Year (Newest)</option>
                <option value="year-old">Year (Oldest)</option>
            </select>
        </div>
    )
}

export default SortControls