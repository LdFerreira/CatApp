import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CatList } from './styles';
import * as CatsActions from '../../store/modules/cats/actions';

function Cats({ cats }) {
  const [loadCats] = cats;
  return (
    <CatList>
      {loadCats &&
        loadCats.map((cat) => (
          <li key={cat.id}>
            <img src={cat.url} alt={cat.url} />
          </li>
        ))}
    </CatList>
  );
}

const mapStateToProps = (state) => ({
  cats: state.cats,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CatsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cats);
