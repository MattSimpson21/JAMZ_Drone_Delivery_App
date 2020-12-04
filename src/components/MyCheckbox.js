import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export default class MyCheckbox extends React.Component {
  state = {
    ischecked: false,
  };

  render() {
    const { ischecked } = this.state;
    return (
      <Checkbox
        title={this.props.title}
        status={ischecked ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ ischecked: !ischecked }); }}
      />
    );
  }
}