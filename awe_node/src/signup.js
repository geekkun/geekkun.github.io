import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Typography from 'material-ui/Typography';
import './demos/steppers/HorizontalLinearStepper';
import './signup.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: {
        width: '100%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

class LoginFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={styles("").container} noValidate autoComplete="on">
                {/*<TextField*/}
                    {/*id="name"*/}
                    {/*label="Your Name"*/}
                    {/*placeholder="Name"*/}
                    {/*className={styles("").textField}*/}
                    {/*margin="normal"*/}
                {/*/>*/}
                {/*<br/>*/}
                <TextField
                    required
                    id="email"
                    label="E-mail"
                    type="email"
                    // defaultValue="Hello World"
                    className={styles("").textField}
                    margin="normal"
                />
                <br/>
                <TextField
                    required
                    id="password"
                    label="Password"
                    className={styles("").textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                {/*<TextField*/}
                    {/*error*/}
                    {/*id="error"*/}
                    {/*label="Error"*/}
                    {/*defaultValue="Hello World"*/}
                    {/*className={styles("").textField}*/}
                    {/*margin="normal"*/}
                {/*/>*/}
                {/*<TextField*/}
                    {/*id="helperText"*/}
                    {/*label="Helper text"*/}
                    {/*defaultValue="Default Value"*/}
                    {/*className={styles("").textField}*/}
                    {/*helperText="Some important text"*/}
                    {/*margin="normal"*/}
                {/*/>*/}
                <br/>
            </form>
        );
    }
}

function getSteps() {
    return ['Basic Information', 'Tour Settings', 'Interests'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Enter basic information...';
        case 1:
            return 'What tour do you want to give?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

class HorizontalLinearStepper extends React.Component {
    static propTypes = {
        classes: PropTypes.object,
    };

    state = {
        activeStep: 0,
        skipped: new Set(),
    };

    isStepOptional = step => {
        return step === -1;
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    textFields = () => {
        const { activeStep } = this.state;
        if (activeStep === 0) return(
            <form className={styles("").container} noValidate autoComplete="on">
                <TextField
                id="name"
                label="Your Name"
                placeholder="Name"
                className={styles("").textField}
                margin="normal"
                />
                <br/>
                <TextField
                    required
                    id="email"
                    label="E-mail"
                    type="email"
                    // defaultValue="Hello World"
                    className={styles("").textField}
                    margin="normal"
                />
                <br/>
                <TextField
                    required
                    id="password"
                    label="Password"
                    className={styles("").textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                {/*<TextField*/}
                {/*error*/}
                {/*id="error"*/}
                {/*label="Error"*/}
                {/*defaultValue="Hello World"*/}
                {/*className={styles("").textField}*/}
                {/*margin="normal"*/}
                {/*/>*/}
                {/*<TextField*/}
                {/*id="helperText"*/}
                {/*label="Helper text"*/}
                {/*defaultValue="Default Value"*/}
                {/*className={styles("").textField}*/}
                {/*helperText="Some important text"*/}
                {/*margin="normal"*/}
                {/*/>*/}
                <br/>
            </form>
        )
        else if (activeStep ===1 ){
            return(
                <form className={styles("").container} noValidate autoComplete="on">
                    <TextField
                    id="languages"
                    label="Language of tours"
                    placeholder="Language of tours"
                    className={styles("").textField}
                    margin="normal"
                    />
                    <br/>
                    <input type="checkbox" name="vehicle1" value="Bike" /> I have a bike
                        <br/>
                    <input type="checkbox" name="vehicle2" value="Car"/> I have a car
                        <br/>
                </form>
            )
        }
        else if (activeStep ===2 ){
            return(
                <form className={styles("").container} noValidate autoComplete="on">
                    <input type="checkbox" name="interest1" value="Art" /> Art
                    <br/>
                    <input type="checkbox" name="interest2" value="Clubs"/> Clubs
                    <br/>
                    <input type="checkbox" name="interest3" value="Pubs"/> Pubs
                    <br/>
                    <input type="checkbox" name="interest4" value="Rooftops"/> Rooftops
                    <br/>
                    <input type="checkbox" name="interest5" value="Shopping"/> Shopping
                    <br/>
                    <input type="checkbox" name="interest6" value="Sightseeing"/> Sightseeing
                    <br/>
                </form>
            )
        }
    }

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        const skipped = new Set(this.state.skipped.values());
        skipped.add(activeStep);
        this.setState({
            activeStep: this.state.activeStep + 1,
            skipped,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleSubmit = () => {
        this.setState({
            // activeStep: 0,
        });
        alert('Submit');
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={styles("").root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        if (this.isStepOptional(index)) {
                          labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (this.isStepSkipped(index)) {
                            props.completed = false;
                        }
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={styles("").instructions}>
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button onClick={this.handleSubmit} className={styles("").button}>
                                Submit
                            </Button>
                        </div>
                    ) : (
                        <div>
                            {/*INSERT HERE*/}

`
                            <Typography className={styles("").instructions}>{getStepContent(activeStep)}</Typography>
                            {/*OR HERE*/}
                            {this.textFields()}
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={styles("").button}
                                >
                                    Back
                                </Button>
                                {this.isStepOptional(activeStep) && (
                                <Button
                                variant="raised"
                                color="primary"
                                onClick={this.handleSkip}
                                className={styles("").button}
                                >
                                Skip
                                </Button>
                                )}
                                <Button
                                    variant="raised"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={styles("").button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


class SignUp extends Component{
    render() {
        return(
            <div id='signup'>
                <h1>Sign Up</h1>
                <HorizontalLinearStepper/>
                {/*<TextFields/>*/}
            </div>
        )
    }
}

export default SignUp;
