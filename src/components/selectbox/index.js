import React from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    data: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
};


function index(props) {
    const { data, value } = props;

    const handleSelect = (e) => {
        const val = e.target.value;
        onChange(val);
    }

    return (
        <div className="modal-body">
            <select className="form-select" aria-label="Default select example"
                value={value}
                onChange={(e) => handleSelect(e)}
            >
                <option value={null} selected={!value}>Select Status</option>
                {data.map(i => <option value={i.value} selected={value==i.value}>{i.label}</option>)}
            </select>
        </div>
    );
}

export default index;