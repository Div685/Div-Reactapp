import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer class="main-footer">
        <p>&copy; {new Date().getUTCFullYear() } <span>Divyesh Patel</span>. All rights reserved. </p>
      </footer>
    )
  }
}

export default Footer
