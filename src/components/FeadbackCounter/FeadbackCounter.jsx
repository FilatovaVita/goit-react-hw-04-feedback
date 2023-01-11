class Counter extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    const { step } = this.props;

    return <div>
      <h1>Please leave feedback</h1>
      <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
      <div>
        <h2>Statistic</h2>
        <p>Good: </p>
        <p>Neutral: </p>
        <p>Bad: </p>
      </div>
    </div>;
  }
}
