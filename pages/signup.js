import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import {useAuth} from "../context/AuthContext";
import {useSnackbar} from "../context/SnackbarContextProvider";

const Signup = () => {

    const {signUp} = useAuth()
    const {show} = useSnackbar()

    const [data, setData] = useState({
        email: '',
        password: '',
        username: '',
    })

    const handleSignup = e => {
        e.preventDefault()

        if (data.username === '' || data.email === '' || data.password === '') {
            show("Please fill all the fields.", "error");
            return;
        }

        signUp(data.email, data.password, data.username)
            .then(res => {
                console.log("Sign up successful", res)
                show("Sign up successful!");
            })
            .catch(err => console.log(err))
    }

    return (
        <div
            style={{
                width: '40%',
                margin: 'auto',
            }}
        >
            <h1 className="text-center my-3 ">Signup</h1>
            <Form onSubmit={handleSignup}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        onChange={e =>
                            setData({
                                ...data,
                                username: e.target.value,
                            })
                        }
                        value={data.username}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={e =>
                            setData({
                                ...data,
                                email: e.target.value,
                            })
                        }
                        value={data.email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                            setData({
                                ...data,
                                password: e.target.value,
                            })
                        }
                        value={data.password}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        </div>
    )
}

export default Signup