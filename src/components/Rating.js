import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
  this.setState({
    increasing: nextProps.rating > this.props.rating,
    decreasing: nextProps.rating < this.props.rating
  })
}

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;




// Let's have a look at the first section. This is a little online survey of a book. People can rate the
// book based on how much they enjoyed it. They have 3 options: 'loved it', 'hated it' and 'indifferent'.
// We want to record not only the score the audience gave to the book, but also the trend of ratings as
// they are being given. So for example, if someone likes the book, the average score is increasing, if they
// dislike the book, it would be decreasing and if they're indifferent the score is stable. Have a look at
// <Rating /> and <Survey /> and implement a componentWillReceiveProps() which will compare the nextProps.rating
// (passed into the method) to this.props.rating and calls this.setState with the correct values.
//
// By the end of this section, all the tests under <Rating /> section should be passing.
//
