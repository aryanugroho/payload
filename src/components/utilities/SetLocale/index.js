import { Component } from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  config: state.common.config,
  searchParams: state.common.searchParams
})

const mapDispatch = dispatch => ({
  setLocale: locale => dispatch({ type: 'SET_LOCALE', payload: locale })
})

class SetLocale extends Component {

  constructor() {
    super();

    this.state = {
      init: false
    }
  }

  setLocale = () => {
    const { searchParams, config, setLocale } = this.props;

    if (searchParams) {
      if (searchParams.lang && config.localization.languages.indexOf(searchParams.lang) > -1) {
        setLocale(searchParams.lang);
      } else if (!this.state.init) {
        setLocale(config.localization.defaultLanguage);
        this.setState({ init: true });
      }
    }
  }

  componentDidMount() {
    this.setLocale();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchParams !== this.props.searchParams) {
      this.setLocale();
    }
  }

  render() {
    return null;
  }
}

export default connect(mapState, mapDispatch)(SetLocale);
