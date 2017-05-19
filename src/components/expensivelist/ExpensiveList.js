import React from 'react';

class Expensive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expensive: props.expensive
    };
  }

  addItem(e) {
    const form = e.target
    const input = form.querySelector('input')
    e.preventDefault()

    const currentExpensive = this.state.expensive
    currentExpensive.push(input.value)

    this.setState({
      expensive: currentExpensive
    })

    form.reset()
  }

  render() {
    let expensive = this.state.expensive.map((item, index) => {
      return <p key={index}>{item}</p>
    })
    return (
      <div>
        <h2>Expensive Activities:</h2>
        {expensive}
        <form onSubmit={(e) => this.addItem(e)}>
            <input autoFocus type='text' placeholder='Add your own expensive activity here' />{' '}
            <button>Add it!</button>
          </form><br />
      </div>
    );
  }

}

export default Expensive;
