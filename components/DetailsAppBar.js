import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { AppRegistry, StyleSheet } from 'react-native';
export default class DetailsAppBar extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         voice: false
      }
    }
    
  render() {
    return (
       
      <Appbar style={this.props.color? {backgroundColor: `#${this.props.color}`} : {backgroundColor:"#1a72b4"}}>
        <Appbar.Action icon="save" />
        <Appbar.Action icon="share" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon={this.state.voice ? "mic-off" : "mic"} onPress={() => {this.setState({
            voice: !this.state.voice
        })}} />
        <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
        <Appbar.Action icon="date-range" onPress={() => this.props.openDatePicker()}/>
      </Appbar>
      
    );
  }
}

const styles = StyleSheet.create({
  bottom: { 
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent("detailsappbar", () => <DetailsAppBsar/>);