import React, { Component } from 'react'
import Pane from './index'

const LabelPane = ({board, onClose, gotoPane, goBack}) =>
  <Pane name="Labels">
    <div>Labels Panel</div>
    <SearchBar
      // value={this.state.SearchTerm}//is this right?
      // onChange={this.setSearchTerm}//is this right?
      value={this.state.value}//is this right?
      onChange={this.onChange}//is this right?
    />
    {/* labels*/}
    {/* pencil icon */}
    {/* 2 buttons */}
  </Pane>

  module.exports = LabelPane
