import { Component } from 'react';

class DataLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      isError: false,
    };
  }
  load = async () => {
    const { loadData } = this.props;

    this.setState({ isLoading: true });

    try {
      const data = await loadData();
      this.setState({
        data,
      });
    } catch (error) {
      this.setState({ isError: true });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.load();
  }

  render() {
    const { render } = this.props;

    return render(this.state);
  }
}

export default DataLoader;
