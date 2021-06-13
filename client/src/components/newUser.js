import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {useState} from "react";

const NewUser = ({onSubmit}) => {
    const [value, setValue] = useState({firstName: "", lastName: ""})

    const handleInputChange = (e) => {
        setValue((prevProps) => ({
            ...prevProps,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            firstName: value.firstName,
            lastName: value.lastName
        })
        setValue({
            lastName: "",
            firstName: ""
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>FirstName</Label>
                <Input
                    required
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    value={value.firstName}
                    onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
                <Label>LastName</Label>
                <Input
                    required
                    type="text"
                    name="lastName"
                    placeholder="LastName"
                    value={value.lastName}
                    onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Button block outline type="submit">
                    Create
                </Button>
            </FormGroup>


        </Form>)
}

export default NewUser