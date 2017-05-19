import React from 'react';

class LowCost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowCost: props.lowCost
    };
  }

  addItem(e) {
    const form = e.target
    const input = form.querySelector('input')
    e.preventDefault()

    const currentLowCost = this.state.lowCost
    currentLowCost.push(input.value)

    this.setState({
      lowCost: currentLowCost
    })

    form.reset()
  }

  render() {
    let lowCost = this.state.lowCost.map((item, index) => {
      return <p key={index}>{item}</p>
    })
    return (
      <div>
        <h2>LOW COST ACTIVITIES:</h2>
        {lowCost}
        <form onSubmit={(e) => this.addItem(e)}>
            <input autoFocus type='text' placeholder='Add your own low cost activity here' />{' '}
            <button>Add it!</button>
          </form><br />
      </div>
    );
  }

}

export default LowCost;
