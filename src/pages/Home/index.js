import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiChevronRight } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import { bindActionCreators } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

import { CategoryList, Container, Loading, List } from './styles';
import api from '../../services/api';
import Capitalize from '../../utils/capitalize';
import Cats from '../../components/CatList';
import * as CatsActions from '../../store/modules/cats/actions';

class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    categories: [],
    loading: false,
    category: '',
    limit: 10,
  };

  async componentDidMount() {
    const { limit } = this.state;
    this.setState({ loading: true });

    api.get(`/images/search?limit=${limit}&category_ids=1`).then((response) => {
      const { loadCats } = this.props;
      const cats = response.data;
      loadCats(cats);

      this.setState({ category: 1 });
    });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

    api.get('/categories').then((response) => {
      this.setState({ categories: response.data });
    });
  }

  handleChangeCategory = async (event) => {
    const category = event.target.value;

    this.setState({ loading: true });

    const { limit } = this.state;

    api
      .get(`/images/search?limit=${limit}&category_ids=${category}`)
      .then((response) => {
        const { changeCategory } = this.props;
        const cats = response.data;

        changeCategory(cats);
        this.setState({ category });
      });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  handleMoreCats = async (e) => {
    const category = e.target.value;

    api
      .get(`/images/search?limit=10&category_ids=${category}`)
      .then((response) => {
        const { moreCats } = this.props;
        const cats = response.data;
        moreCats(cats);
      });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { categories, loading, category } = this.state;

    return (
      <>
        <Container>
          <CategoryList>
            <h1>Categories</h1>
            {categories.map((cate) => (
              <button
                key={cate.id}
                value={cate.id}
                onClick={this.handleChangeCategory}
                type="button"
              >
                {Capitalize(cate.name)}
                <FiChevronRight size={20} />
              </button>
            ))}
          </CategoryList>
          {loading ? (
            <Loading>
              Loading <FaSpinner size={30} />
            </Loading>
          ) : (
            <Scrollbars style={{ width: 1500, height: 700 }}>
              <List>
                <Cats />
                <button
                  value={category}
                  onClick={this.handleMoreCats}
                  type="button"
                >
                  Show More Cats
                </button>
              </List>
            </Scrollbars>
          )}
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CatsActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
