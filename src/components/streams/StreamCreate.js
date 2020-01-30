import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({input, label, meta}){
        
            if(meta.touched){
                const classN = `field ${meta.error ? "error" : ""}`;
                return(
                    <div className = {classN}>
                    <label>{label}</label>
                    <input autoComplete="off" {...input} />
                    <div className="ui error message">{meta.error}</div>
                    </div>
                )
            }else{
                return(
                    <div className="field">
                    <label>{label}</label>
                    <input autoComplete="off" {...input} />
                    </div>
                )
            }
    }
    onSubmit(formValues){
        console.log(formValues);
    }
    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                {/* Field must be initialized with a type */}
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}
const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate); 