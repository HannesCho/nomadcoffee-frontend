import { gql, useMutation } from "@apollo/client";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import FormError from "../components/auth/FormError";
import FormBox from "../components/auth/FormBox";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import { Header, Wrapper } from "../components/shared";

const EDIT_COFFEE_SHOP_MUTATION = gql`
    mutation editCoffeeShop($id: Int!, $name: String, $categories: [String]) {
        editCoffeeShop(id: $id, name: $name, categories: $categories) {
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

function Shop() {
    let { id } = useParams();
    id = parseInt(id);
    const {
        register,
        handleSubmit,
        formState,
        formState: { errors },
        setError,
        getValues,
        clearErrors,
    } = useForm({
        mode: "onChange",
    });
    const onCompleted = (data) => {
        const {
            editCoffeeShop: { ok, error },
        } = data;
        if (!ok) {
            return setError("result", {
                message: error,
            });
        }
        window.location.reload();
    };
    const [editCoffeeShop, { loading }] = useMutation(EDIT_COFFEE_SHOP_MUTATION, {
        onCompleted,
    });
    const onSubmitValid = (data) => {
        if (loading) {
            return;
        }
        let { name, categories } = getValues();
        categories = categories.split(",");
        if (categories[0] === "") {
            categories = null;
        }
        editCoffeeShop({
            variables: {
                id,
                ...(name.length && { name }),
                ...(categories && { categories }),
            },
        });
    };
    const clearLoginError = () => {
        clearErrors("result");
    };
    return (
        <Wrapper>
            <PageTitle title="Edit" />
            <Header>
                <FontAwesomeIcon icon={faCoffee} />
                <H1>Nomad Coffee</H1>
            </Header>
            <FormBox>
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input
                      ref={register({
                          required: "Shop name is required",
                      })}
                      name="name"
                      type="text"
                      placeholder="Shop Name"
                      onFocus={clearLoginError}
                    />
                    <Input
                      ref={register}
                      name="category"
                      type="text"
                      placeholder="Category"
                      onFocus={clearLoginError}
                    />
                    <FormError message={errors?.category?.message} />
                    <Button type="submit" disabled={!formState.isValid || loading}
                        value={loading ? "Loading..." : "Edit Shop"}
                    />
                </form>
            </FormBox>
        </Wrapper>
    );
}

export default Shop;