import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <ReactQuill value={this.state.text} onChange={this.updateBody} />
      </div>
    );
  }

  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };

  update = debounce(() => {
    console.log("updating database");
  }, 1500);
}

export default withStyles(styles)(Editor);
