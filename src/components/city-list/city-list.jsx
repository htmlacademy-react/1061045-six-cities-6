import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {cityProp} from '../../common/prop-types/city.prop';

const CityList = (props) => {
  const {cities, activeCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city, index) => {
          return (
            <li
              className="locations__item"
              key={city + index}>
              <Link
                to={`/city/${city}`}
                className={
                  `locations__item-link tabs__item
                  ${(city === activeCity) ? `tabs__item--active` : ``}`
                }
              >
                <span>{city}</span>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  activeCity: cityProp
};

const mapStateToProps = (state) => {
  return {
    activeCity: state.reducer.activeCity
  };
};

export default connect(mapStateToProps)(CityList);
