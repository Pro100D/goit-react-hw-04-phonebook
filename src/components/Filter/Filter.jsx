import PropTypes from 'prop-types';

import { Fiterlable, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Fiterlable htmlFor="filter">Find contacts by name</Fiterlable>
      <FilterInput type="text" value={value} onChange={onChange} id="filter" />
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
