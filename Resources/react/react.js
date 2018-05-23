
var Comment = React.createClass({

render: functuib () {

return (
<div className="commentContainer">
<div className="commentText">{this.props.children}</div>
<button className="btn btn-primary">Edit</button>
<button className="btn btn-danger">Delete</button>
</div>
);

}


});

ReactDOM.render(
<div>
<Comment>Hello</Comment>
<Comment>World</Comment>
</div>,
document.getElementById('demo');
);
