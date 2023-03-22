import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import DefaultLayout from "../../components/layout/DefaultLayout";

const SignUp = () => {
  const [frm, setFrm] = useState(initialState);
  const [error, setError] = useState("");
  const inputs = [
    {
      label: Name,
      name: "name",
      placeholder: "milan",
      required: true,
    },
    {
      label: Email,
      name: "email",
      placeholder: "hd@gmail.com",
      required: true,
    },
    {
      label: Password,
      name: "password",
      placeholder: "******",
      required: true,
    },
  ];

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setError("");

      value.length < 6 &&
        setError("Password must be at least 6 characters long");

      !/[0-9]/.test(value) && setError("Number is required");
      !/[A-Z]/.test(value) && setError("Upper case is required");
      !/[a-z]/.test(value) && setError("Lower case is required");
    }

    setFrm({
      ...frm,
      [name]: value,
    });
  };

  return (
    <DefaultLayout>
      <Container className="mt-5 d-flex text-center">
        <div className="w-50 m-auto">
          <Form
            onSubmit={handleOnSubmit}
            className=" mt-5 border p-3 py-5 rounded shadow-lg"
          >
            <h3>Join our system now!</h3>
            <hr />
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}

            <Form.Group>
              <Form.Text>
                you Password must contain at least 6 characters including at
                leaset 1 number upper case and lower case
              </Form.Text>
              {error && (
                <ul>
                  <li className="text-danger fw-bolder mt-3">{error}</li>
                </ul>
              )}
            </Form.Group>

            <div className="d-grid py-3">
              <Button disabled={error} variant="primary" type="submit">
                Register
              </Button>
            </div>

            <div className="text-end">
              Forget password? <a href="/password-reset">Reset </a> now
            </div>
          </Form>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default SignUp;
