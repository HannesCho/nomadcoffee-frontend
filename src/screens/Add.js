import { gql, useMutation } from "@apollo/client";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import FormError from "../components/auth/FormError";
import FormBox from "../components/auth/FormBox";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import { Header, Wrapper } from "../components/shared";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import routes from "../routes";



const CREATE_COFFEE_SHOP_MUTATION = gql`
    mutation createCoffeeShop($name: String!, $category: String) {
        createCoffeeShop(name: $name, category: $category) {
            ok
            error
        }
    }
`;

const H1 = styled.h1`
  font-weight: 600;
  font-size: 25px;
  margin-top: 15px;
`;

function Add() {
    const history = useHistory();
    
    const { register, handleSubmit, setError, errors, formState } = useForm({
        mode: "onChange",
    });
    const onCompleted = (data) => {
        const {
            createCoffeeShop: { ok, error },
        } = data;
        if (!ok) {
            return setError("result", { message: error });
        }
        history.push(routes.home, {
            message: "Shop created.",
          });
    };
    const [
        createCoffeeShop,
        { loading },
    ] = useMutation(CREATE_COFFEE_SHOP_MUTATION, { onCompleted });
    
    const onValid = (data) => {
        if (loading) {
            return;
        }
        createCoffeeShop({
            variables: {
                ...data,
            },
        });
    };
 
    return (
        <Wrapper>
            <PageTitle title="Add Shop | Nomad Coffee" />
            <Header>
                <FontAwesomeIcon icon={faCoffee} />
                <H1>Nomad Coffee</H1>
            </Header>
            <FormBox>                
                <form onSubmit={handleSubmit(onValid)}>
                    <Input
                    ref={register({
                        required: "Shop name is required",
                    })}
                    name="name"
                    type="text"
                    placeholder="Shop Name"
                    />
                    <Input
                    ref={register}
                    name="category"
                    type="text"
                    placeholder="Category"
                    />
                    <FormError message={errors?.category?.message} />
                    <Button type="submit" disabled={!formState.isValid || loading}
                        value={loading ? "Loading..." : "Create Shop"}
                    />
                </form>
            </FormBox>
        </Wrapper>
    );
}

export default Add;