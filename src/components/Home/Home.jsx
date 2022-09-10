import React, { Component } from "react";
import "../../styles/index.scss";
import "../../styles/pdp.scss";
import HomeItem from "./HomeItem";
import Categories from "./Categories";
import { CATEGORIES } from "../../apollo/queries";
import Loading from "../Loading";
import { graphql } from "@apollo/client/react/hoc";



import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Overlay from "../Overlay";


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryNames: "",
      filterName: "",
    };
  }

  setCategory = () => {
    this.props.data.refetch({ input: { title: this.props.name } });
  };



  render() {
    const { category } = this.props.data;
   
    let products = [];
    if (!this.props.data.loading && !this.props.data.error) {
      products = category.products.map((el) => (
        <NavLink
          key={el.id}
          to={`/product/${el.id}`}
          style={{ pointerEvents: el.inStock ? "auto" : "none" }}>
          <HomeItem
            key={el.id}
            id={el.id}
            name={el.name}
            inStock={el.inStock}
            brand={el.brand}
            description={el.description}
            gallery={el.gallery}
            price={el.prices}
            attributes={el.attributes}
            setActiveClass={this.props.setActiveClass}
          />
        </NavLink>
      ));
    }
    if (this.props.data.loading || this.props.data.error) {
      return <Loading />;
    } else {
      return (
        <main className="showcase-main">
   
          <Categories setCategory={this.setCategory} setCategoryNames={this.setCategoryNames} />

          <div className="showcase-main-content">
            {this.props.filterName == "WOMEN"
              ? (products.filter((item) => item.key.length > 15).length == 0? <div className="no-products">No products available</div> : (products.filter((item) => item.key.length > 15)))
              : this.props.filterName == "MEN"
              ? (products.filter((item) => item.key.length < 15).length == 0? <div className="no-products">No products available</div> : (products.filter((item) => item.key.length < 15)))
              : (products.length == 0 ? <div className="no-products">No products available</div> : products)}
          </div>
          {this.props.overlayFlag ? <Overlay /> : ""}
        </main>
      );
    }
  }
}


const mapStateToProps = (state) => ({
  overlayFlag: state.overlay.flag,
  categoryIndex: state.category.index,
  items: state.cart.items,
  name: state.category.name,
  currentId: state.currentId.id,
  filterName: state.filter.name,
});

export default connect(mapStateToProps)(
  graphql(CATEGORIES, {
    options: (props) => {
      return {
        variables: {
          input: {
            title: props.name,
          },
        },
      };
    },
  })(Home),
);
