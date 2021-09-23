import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import p5 from 'p5';
//import { ReactP5Wrapper } from "react-p5-wrapper";
//import Sketch from 'react-p5';
/*
function Art() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef)
  }
  const draw = p5 => {
    p5.background(255, 120, 20)
    p5.ellipse(100, 100, 100)
  }
  return <Sketch setup={setup} draw={draw} />;
}
*/

class Art extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {

     p.setup = () => {
      p.createCanvas(200, 200)
     }

     p.draw = () => {
      p.background(0);
      p.fill(255);
      p.rect(10, 10, 50, 50)
     }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
      <div ref={this.myRef}>

      </div>
    )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Art />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
