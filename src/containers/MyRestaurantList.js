import React from "react";
import RestaurantCard from "../components/RestaurantCard"

class MyRestaurantList extends React.Component {
  constructor(props) {
    super(props);

    //expecting this.props.favoriteRestaurants
  }



  renderRestaurantCards = () => {
    // pass in different props for saved restaurants
    return this.props.favoriteRestaurants.map(rest => <RestaurantCard details={rest} whichContainer={"my_restaurant_list"} handleRemoveFromMyRestList = {this.props.handleRemoveFromMyRestList} currentUser = {this.props.currentUser} />)
  }

  render() {
    return (
      <div className='my_restaurant_list' >
        <h4> Bookmarked Restaurants </h4>
        <ul className="collapsible" data-collapsible="accordion">
          <li>{this.renderRestaurantCards()}</li>
        </ul>
      </div>
    )
  }
 }
export default MyRestaurantList
