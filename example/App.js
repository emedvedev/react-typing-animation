import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './App.css';
import Typing, { Backspace, Cursor, Delay, Reset, Speed } from '../src';

const TestComponent = ({ children }) => <div>{children}</div>;

TestComponent.propTypes = { children: PropTypes.node };

class App extends Component {
  constructor() {
    super();

    this.state = {
      showTitleCursor: true,
      showFeatures: false,
    };

    this.showFeatures = ::this.showFeatures;
  }

  showFeatures() {
    this.setState({
      showTitleCursor: false,
      showFeatures: true,
    });
  }

  render() {
    return (
      <div className={styles.page}>
        <Typing
          className={styles.title}
          cursor={this.state.showTitleCursor ? <Cursor /> : <noscript />}
          startDelay={1000}
          speed={50}
          onFinishedTyping={this.showFeatures}
        >
          <h1>
            <a href="https://github.com/adamjking3/react-typing-animation">
              React Typing Animation
            </a>
            <Delay ms={500} />
            <span className={styles.dependencies}>* zero dependencies</span>
          </h1>
          <Delay ms={1000} />
        </Typing>
        {this.state.showFeatures &&
          <Typing loop speed={50} className={styles.features}>
            <Delay ms={500} />
            <ul>
              <li>
                <span className={styles.checkmark}>✅</span> Type text from any valid JSX.
              </li>
              <Delay ms={1000} />
              <li>
                <span className={styles.styledSpan}>
                  <span className={styles.checkmark}>✅</span> All styles and
                  {' '}
                  <table className={styles.table}>
                    <tbody>
                      <tr><td>D</td></tr>
                      <tr><td>O</td></tr>
                      <tr><td>M</td></tr>
                      <tr><td>&nbsp;</td></tr>
                      <tr><td>S</td></tr>
                      <tr><td>T</td></tr>
                      <tr><td>R</td></tr>
                      <tr><td>U</td></tr>
                      <tr><td>C</td></tr>
                      <tr><td>T</td></tr>
                      <tr><td>U</td></tr>
                      <tr><td>R</td></tr>
                      <tr><td>E</td></tr>
                      <tr><td>S</td></tr>
                    </tbody>
                  </table>
                  {' '}
                  will be preserved.
                </span>
              </li>
              <Delay ms={1000} />
              <li>
                <span className={styles.checkmark}>✅</span> Change the
                {' '}
                <Speed ms={250} />
                {' '}
                speed
                {' '}
                <Speed ms={20} />
                {' '}
                of typing anywhere
                {' '}
                <Speed ms={40} />
                {' '}
                in the tree.
              </li>
              <Delay ms={1000} />
              <li>
                <span className={styles.checkmark}>✅</span> Backspace with ease.
                <Backspace count={10} delay={750} />
                {"couldn't be simpler."}
              </li>
              <Delay ms={1000} />
              <li>
                <span className={styles.checkmark}>✅</span> Neither could deleting
                {' '}
                <span>
                  a line of text.<Reset count={1} delay={750} />the entire tree.
                </span>
                <Reset delay={2000} />
              </li>
            </ul>
          </Typing>}
      </div>
    );
  }
}

export default App;
