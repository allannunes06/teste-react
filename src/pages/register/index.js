import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ButtonRegister from '../../components/buttonRegister'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import {
    Container,
    ContainerItens,
    Label,
    Input,
    Title,
    ErrorMessage
} from './styles'
import './styles.css'
import { useUser } from '../../hooks/UserContext'
import { Field, Form, Formik } from 'formik'

function Register() {
    const { putUserData } = useUser()
    const schema = Yup.object().shape({
        name: Yup.string().required('your name is required'),
        birthDate: Yup.date().required('the date is required'),
        cpf: Yup.number()
            .required('the CPF is required')
            .min(14, 'the CPF must have 14 numbers'),
        cep: Yup.number()
            .required('the CEP is required')
            .min(8, 'the CEP must have 8 numbers'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            localStorage.setItem('teste:userData', JSON.stringify(clientData), {
                name: clientData.name,
                birthDate: clientData.birthDate,
                cpf: clientData.cpf,
                cep: clientData.cep,
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Cadastrado',
                error: 'Verifique os dados'
            }
        )
        putUserData(data)
    }

    function onBlurCep(ev, setFieldValue) {
        const { value } = ev.target;
        const cep = value?.replace(/[^0-9]/g, '');
        if (cep?.length !== 8) {
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setFieldValue('logradouro', data.logradouro);
                setFieldValue('bairro', data.bairro);
                setFieldValue('cidade', data.localidade);
                setFieldValue('uf', data.uf);
            });
    }
    return (
        <Container>
            <ContainerItens>
                <Title>Register</Title>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Name</Label>
                    <Input name='name' type="text" placeholder='Name'
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    <Label>Birth Date</Label>
                    <Input name='birthDate' type="date" placeholder='99/99/9999'
                        {...register('birthDate')}
                        error={errors.birthDate?.message} />
                    <ErrorMessage>{errors.birthDate?.message}</ErrorMessage>
                    <Label>CPF</Label>
                    <Input name='cpf' type="text" placeholder='999.999.999.-99'
                        {...register('cpf')}
                        error={errors.cpf?.message} />
                    <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
                </form>
                <Formik
                        onSubmit={onSubmit}
                        validateOnMount
                        initialValues={{
                        cep: '',
                        logradouro: '',
                        numero: '',
                        complemento: '',
                        bairro: '',
                        cidade: '',
                        uf: '',
                    }}
                    render={({ isValid, setFieldValue }) => (
                        <Form>
                            <Label>CEP</Label>
                            <Field className="label" name="cep" type="text" placeholder='99999-999' onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
                            <Label>Logradouro</Label>
                            <Field className="label" name="logradouro" type="text" placeholder='Rua,Avenida,Estrada,Rodovia,etc...' />
                            <Label>Número</Label>
                            <Field className="label" name="numero" type="text" />
                            <Label>Complemento</Label>
                            <Field className="label" name="complemento" type="text" />
                            <Label>Bairro</Label>
                            <Field className="label" name="bairro" type="text" placeholder='Jardim São Paulo' />
                            <Label>Cidade</Label>
                            <Field className="label" name="cidade" type="text" placeholder='São Paulo, Rio de Janeiro, Belo Horizonte, etc...' />
                            <Label>Estado</Label>
                            <Field className="label" name="uf" type="text" placeholder='São Paulo, Rio de Janeiro, Minas Gerais, etc...' />
                            <ButtonRegister type="submit" disabled={!isValid}/>
                        </Form>
                    )}
                />
                <Link to="/">
                    <Label>Voltar</Label>
                </Link>
            </ContainerItens>
        </Container>
    )
}

export default Register
