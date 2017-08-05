import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 
//reduxform is pre-built into redux-form, allows us to talk to the form reducer, analogous to the connect method for containers
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error} } = field; //destructuring the nested properties 'touched' and 'error' 
        //from meta property of field. originally field.meta.error and field.meta.touched
        const className =`form-group ${touched && error ? 'has-danger': '' }`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error: ''}
                </div>
            </div>
        );
    }

    //{...field.input} means we're adding all the preset event handlers that are on field (e.g.,
        //onBlur, onFocus, etc.) as props to the input

    //line 16 field.meta.touched line -> terniary expression. everything before ? evaluated
        //if condition evaluates to truthy valued, entire expression is resolved with item b/w
        //? and :  ...other wise it is resolved with whatever is after :

    //meta.error property is added to field object from validate function
        //error is going to be the string of the corresponding property of errors objext

    onSubmit(values) {
        // this === component
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <Field 
                    label="Title for Post"
                    name="title"
                    component={this.renderField} 
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
    // this.onSubmit is the callback function after handleSubmit output (validate) is good
    // which is why we need to bind 'this'' value when we call this.onSubmit
}

function validate(values) {
    //console.log(values) --> { title: "hello", categories: "hi", content: "hey"}
    const errors = {};

    //Validate the inputs from 'values'
    //the keys in errors must be named the same as what the "name" in the Field tags are

    if (!values.title) {
        errors.title = "Enter a title";
    }

    if(!values.categories) {
        errors.categories = "Enter some categories";
    }

    if(!values.content) {
        errors.content = "Enter some content please";
    }

    //If errors is empty, the form is fine to submite
    //If errors has *any* properties, redux form assumes form is invalid

    return errors;

}

//component property of Field takes function or another component to display

export default reduxForm({
    validate,
    form: 'PostsNewForm' // name the form a unique string for different forms
})(
    connect(null, { createPost })(PostsNew)
    );


//the combo of reduxForm and PostsNew adds form props to the component, which can
//be accessed by other variables, such as our const handleSubmit

//connect creates react component for the new post using values from PostsNew form
//then the new component is put in as the second argument to reduxForm




