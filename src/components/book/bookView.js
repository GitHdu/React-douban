import React, { Component, PropTypes } from 'react';
import Loading from '../Loading'
import GoBackBar from '../GoBackBar'

class bookView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  componentWillMount() {
    const { fetchData, params } = this.props;
    fetchData(params.id);
    console.log(this.props.data)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      const data = { ...nextProps.data };
      this.setState({ data });
    }
  }
 /* renderMeta() {
    const { data } = this.props;
    let cast = data.casts.reduce((name, value) => {
      return name ? name + ' / ' + value.name : value.name;
    }, '');
    return (
      <div>
        {data.countries.join(' / ') + ' / ' + data.genres.join(' / ') + ' / ' + data.directors[0].name + '(导演) / ' + cast}
      </div>
    );
  }*/
  renderBookSubject() {
    const { data } = this.state;
    return (
      <div>
        <GoBackBar goBack={this.props.router.goBack} title={data.title} />
        <div className="image-wrap" style={{ backgroundImage: 'url(' + data.images.large + ')' }}></div>


        <div className="title-border">
          <div className="title-info">
            <div className="title-image">
              <img src={data.images.large} />
            </div>
            <div className="title-text">
              <p>{data.title}</p>
              <p>{data.price}</p>
            </div>
          </div>
        </div>


        <div className="summary">{data.summary}</div>
      </div>
    );
  }

  render() {
    const { loading } = this.props;
    const { data } = this.state;
    return (
      <div>
        <Loading show={loading} />
        { data.title && this.renderBookSubject()}
      </div>
    )
  }
}

bookView.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}
export default bookView;