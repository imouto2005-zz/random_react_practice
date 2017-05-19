import React from 'react';

class Free extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      free: props.free
    };
  }

  addItem(e) {
    const form = e.target
    const input = form.querySelector('input')
    e.preventDefault()

    const currentFree = this.state.free
    currentFree.push(input.value)

    this.setState({
      free: currentFree
    })

    form.reset()
  }


  render() {
    let free = this.state.free.map((item, index) => {
      return <p key={index}>{item}</p>
    })
    return (
      <div>
        <h2>Free Activities:</h2>
        {free}
        <form onSubmit={(e) => this.addItem(e)}>
            <input autoFocus type='text' placeholder='Add your own free activity here' />{' '}
            <button>Add it!</button>
          </form><br />
      </div>
    );
  }

}

export default Free;
