import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconButton } from "/imports/plugins/core/ui/client/components";

class GridItemControls extends Component {

  static propTypes = {
    checked: PropTypes.func,
    hasChanges: PropTypes.func,
    hasCreateProductPermission: PropTypes.func,
    itemSelectHandler: PropTypes.func,
    product: PropTypes.object
  }

  renderArchived() {
    if (this.props.product.isDeleted) {
      return (
        <span className="badge badge-danger" data-i18n="app.archived">
          <span>Archived</span>
        </span>
      );
    }
  }

  renderVisibilityButton() {
    if (this.props.hasChanges()) {
      return (
        <div>
          <IconButton
            icon=""
            onIcon=""
            status="info"
          />
        </div>
      );
    }
  }

  render() {
    if (this.props.hasCreateProductPermission()) {
      return (
        <div className="product-grid-controls">
          <label className="like-button hidden" htmlFor={`select-product-${this.props.product._id}`}>
            <input
              type="checkbox"
              name="selectProduct"
              value={this.props.product._id}
              id={`select-product-${this.props.product._id}`}
              checked={this.props.checked()}
              onChange={this.props.itemSelectHandler}
            />
          </label>

          {this.renderArchived()}
          {this.renderVisibilityButton()}
        </div>
      );
    }
    return null;
  }

}

export default GridItemControls;
