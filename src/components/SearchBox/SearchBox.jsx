import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input type='text' value={filter} onChange={handleFilterChange} />
    </div>
  );
};
export default SearchBox;
