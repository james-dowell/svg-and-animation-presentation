import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  lazers: require("../assets/lazers.gif"),
  structural: require('../assets/structural.jpg'),
  dryCat: require('../assets/dry-cat.gif'),
  viewBox: require('../assets/viewbox-400-300-crop.jpg'),
  preserveAspectRatio: require('../assets/viewbox-200-300-meet-vs-slice.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "#04C3FF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              SVG's and Animation
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Let's get started</Text>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
              What are SVG's?
            </Heading>
            <Text textSize="1.3em">SVG stands for Scalable Vector Graphics.  Although SVG is an image file format they are based on the XML markup language, the file itself is actually stored in a text-based format</Text>
          </Slide>

          <Slide bgColor="#7907FF">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
              Benefits of SVG's
            </Heading>
            <List>
              <Appear><ListItem textColor="white">Scalability</ListItem></Appear>
              <Appear><ListItem textColor="white">No need for multiple copies of images for retina displays</ListItem></Appear>
              <Appear><ListItem textColor="white">Programmatically stylable</ListItem></Appear>
              <Appear><ListItem textColor="white">File size</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="#7907FF">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
              Libraries
            </Heading>
            <List>
              <Appear><ListItem textColor="white">SnapSVG</ListItem></Appear>
              <Appear><ListItem textColor="white">D3</ListItem></Appear>
              <Appear><ListItem textColor="white">SVG.js</ListItem></Appear>
              <Appear><ListItem textColor="white">Raphael.JS</ListItem></Appear>
              <Appear><ListItem textColor="white">Vivus for path animations</ListItem></Appear>
              <Appear><ListItem textColor="white">.. Or you could use even use react?</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="#7907FF">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
              Things to watch out for!
            </Heading>
            <List>
              <Appear><ListItem textColor="white">Inline attributes will always take precident over CSS styles</ListItem></Appear>
              <Appear><ListItem textColor="white">Case matters (in some instances uppercase/lowercase is important)</ListItem></Appear>
              <Appear><ListItem textColor="white">The blackbox.. I mean viewbox!</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="#7907FF">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                What is the viewbox?
            </Heading>

            <Appear><Text textSize="1.3em" textColor="white">The viewbox is a coordinate system!</Text></Appear>

            <Appear><CodePane
              lang="html"
              source={require("raw-loader!../assets/viewbox-example-1.example")}
              margin="20px auto"
            /></Appear>

            <Appear><Image src={images.viewBox.replace("/", "")} margin="0px auto 0px" height="350px"/></Appear>
          </Slide>

          <Slide bgColor="#7907FF">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Preserving aspect ratio
            </Heading>

            <Appear><Text textSize="1.2em" textColor="white">You can preserve the aspect ratio using the preserveAspectRatio attribute</Text></Appear>

            <Appear><Text textSize="1.2em" textColor="white">Accepted values: Meet, Align or Slice - all of which have a number of aditional options</Text></Appear>

            <Appear><Image src={images.preserveAspectRatio.replace("/", "")} margin="20px auto 0px" height="330px"/></Appear>

          </Slide>

        <Slide bgColor="#1E0240">
            <Image src={images.dryCat.replace("/", "")} margin="0px auto 40px" height="293px"/>

            <Text textSize="1.3em" textColor="white">Anyone finding this a bit dry?</Text>
        </Slide>

          <Slide bgColor="#1E0240">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Basic SVG elements
            </Heading>
          </Slide>

          <Slide bgColor="#1E0240">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Basic shape and graphic elements
            </Heading>

            <List>
                <Appear><ListItem textColor="white">&lt;circle&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;ellipse&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;line&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;polygon&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;polyline&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;rect&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;image&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;line&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;path&gt;</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="#1E0240">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Text elements
            </Heading>

            <List>
                <Appear><ListItem textColor="white">&lt;text&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;tspan&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;font&gt;</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="#1E0240">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Allowed HTML elements
            </Heading>

            <List>
                <Appear><ListItem textColor="white">&lt;audio&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;canvas&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;iframe&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;video&gt;</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="#1E0240">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Complex "Fancy" SVG elements
            </Heading>
          </Slide>

          <Slide bgColor="#1E0240">
              <Image src={images.lazers.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>

          <Slide bgColor="#1E0240">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Lighting elements
            </Heading>

            <List>
                <Appear><ListItem textColor="white">&lt;feDistantLight&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;fePointLight&gt;</ListItem></Appear>
                <Appear><ListItem textColor="white">&lt;feSpotLight&gt;</ListItem></Appear>
            </List>

            <Appear><Link textColor="white" href="https://codepen.io/anon/pen/MJYXdq"  margin="20px 0px 0px" target="_blank">Lighting codepen</Link></Appear>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.structural.replace("/", "")} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="white">
                Structural elements
              </Heading>

              <List>
                  <Appear><ListItem textColor="white">&lt;defs&gt;</ListItem></Appear>
                  <Appear><ListItem textColor="white">&lt;g&gt;</ListItem></Appear>
                  <Appear><ListItem textColor="white">&lt;svg&gt;</ListItem></Appear>
                  <Appear><ListItem textColor="white">&lt;symbol&gt;</ListItem></Appear>
                  <Appear><ListItem textColor="white">&lt;use&gt;</ListItem></Appear>
              </List>

          </Slide>

          <Slide bgColor="#1E0240">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Lets focus on the &lt;path&gt;
            </Heading>

            <Appear><Text textSize="1.1em" textColor="white">More specifically lets talk about the 'd' attribute (where you can use every letter of the Aphabet)</Text></Appear>

            <List margin="0px 0px 20px">
                <Appear><ListItem textSize=".9em" textColor="white">M = moveto</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">L = lineto</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">H = horizontal lineto</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">V = vertical lineto</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">C = curveto</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">S = smooth curveto</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">Q = quadratic Bézier curve</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">T = smooth quadratic Bézier curveto</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">A = elliptical Arc</ListItem></Appear>
                <Appear><ListItem textSize=".9em" textColor="white">Z = closepath</ListItem></Appear>
            </List>

            <Appear><Text textSize="1em" textColor="white">Remember I said case matters..</Text></Appear>


          </Slide>

          <Slide bgColor="#1E0240">
            <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                Animation - Enter some magic CSS
            </Heading>

            <Appear><Text textSize="1.1em" textColor="white">Chris Coyer demonstrates it best! <Link textColor="#9552e6" href="http://codepen.io/chriscoyier/pen/NRwANp"  margin="20px 0px 0px" target="_blank">codepen</Link></Text></Appear>

          </Slide>

          <Slide>
              <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                  Your tasks for today
              </Heading>

              <List>
                  <Appear><ListItem textColor="white">Simple shapes and animation - <Link textColor="#063544" href="http://codepen.io/james-dowell/full/BppWdy"  margin="20px 0px 0px" target="_blank">codepen</Link> - 30 mins</ListItem></Appear>
                  <Appear><ListItem textColor="white">Simple SVG loading animation - <Link textColor="#063544" href="http://codepen.io/james-dowell/full/appZvd/"  margin="20px 0px 0px" target="_blank">codepen</Link> - 40 mins</ListItem></Appear>
                  <Appear><ListItem textColor="white">SVG animation - <Link textColor="#063544" href="http://snapsvg.io/assets/demos/illustrated-infographic-coffee/"  margin="20px 0px 0px" target="_blank">codepen</Link> - 20 mins</ListItem></Appear>
                  <Appear><ListItem textColor="white">Jokes!</ListItem></Appear>
                  <Appear><ListItem textColor="white">Have a go at your own animation (Prizes for imagination)</ListItem></Appear>
              </List>

          </Slide>

          <Slide>
              <Heading size={1} fit caps lineHeight={1} margin="0px 0px 30px">
                  Crack on!
              </Heading>

          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
