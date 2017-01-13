import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Link from '../../Link'
import ActionsMenuPane from '../../ActionsMenuPane'
import commands from '../../../commands'
// TODO: import './LabelMenu.sass' or created the needed sass for this component

export default class LabelsPane extends Component {

  static propTypes = {
    board: React.PropTypes.object.isRequired,
    onClose: React.PropTypes.func.isRequired
  }

  constructor(props){
    super(props)
    this.state = {
      //states for this component
      searchTerm: ''
    }
    // bind properties like this:
    this.setSearchTerm = this.setSearchTerm.bind(this)
  }

  setSearchTerm(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  editLabel(labelId, event){
    event.preventDefault()
    this.props.editLabel(labelId)
    this.props.goToPane('Create Label Pane')()
  }

  addOrRemoveLabel(labelId, event) {
    event.preventDefault()
    commands.addOrRemoveLabel(this.props.card.id, labelId)
  }

  render() {
    const { card, board } = this.props
    const boardLabels = board.labels.map( label => {
      const checked = card.label_ids.includes(label.id)
      return <LabelRow
        key={label.id}
        checked={checked}
        label={label}
        onEdit={this.editLabel.bind(this, label.id)}
        onClick={this.addOrRemoveLabel.bind(this, label.id)}
      />
    })
    const LabelRow = (props) => {
      const {label, onClick, onEdit, checked} = props

      return <div className="LabelMenu-LabelRow">
        <div className="LabelMenu-LabelRow-box" onClick={onClick}>
          <CardLabel key={label.id} color={label.color} text={label.text} checked={checked}/>
        </div>
        <Link onClick={onEdit} className="LabelMenu-LabelRow-edit"><Icon type="pencil" /></Link>
      </div>
    }
    return
      <div>
        {/* Search Bar */}
        <SearchBar
        type="text"
        className="BoardShowPage-MenuSideBar-ArchivedItems-SearchBox"
        placeholder="Placeholder for searching unarchive."
        value={this.state.searchTerm}
        onChange={this.setSearchTerm}
        />

        {/* color patches */}
        <ActionsMenuPane
          heading="Labels"
          onClose={this.props.onClose}
          className="LabelMenu-MainLabelPane"
        >
        <div className="LabelMenu-labels">
            {boardLabels}
        </div>
        <div className="LabelMenu-controls">
          <Link className="LabelMenu-button" onClick={this.props.goToPane('Create Label Pane')}>
              Create Label
          </Link>
        </div>
        </ActionsMenuPane>

    </div>
  }
}
