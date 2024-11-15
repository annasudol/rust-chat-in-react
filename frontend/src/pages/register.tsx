import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import NoAuthenticated from '../layouts/NoAuthenticated'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/Form/Field'
import FormCheckRadio from '../components/Form/CheckRadio'
import Divider from '../components/Divider'
import Buttons from '../components/Buttons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'
import * as Yup from 'yup'

const LoginPage = () => {
  const router = useRouter()

  const handleSubmit = (formValues) => {
    router.push('/dashboard')
    console.log('Form values', formValues)
  }

  const initialValues = {
    login: 'john.doe',
    password: 'bG1sL9eQ1uD2sK3b',
    remember: true,
  }

  const Schema = Yup.object().shape({
    login: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required'),
    passwordRepeat: Yup.string()
      .required('This field is required')
      .oneOf([Yup.ref('password'), null], 'Both password need to be the same'),
  })
  return (
    <>
      <Head>
        <title>{getPageTitle('Register')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Schema}>
              {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                return (
                  <Form>
                    <FormField label="Login" help="Please enter your login">
                      <Field name="login" />
                    </FormField>
                    <p className="text-red-500 -mt-5">{errors?.login?.toString()}</p>
                    <FormField label="Password" help="Please enter your password">
                      <Field name="password" type="password" />
                    </FormField>
                    <p className="text-red-500 -mt-5">{errors?.password?.toString()}</p>
                    <FormField label="Password" help="Please confirm your password">
                      <Field name="passwordRepeat" type="password" />
                    </FormField>
                    <p className="text-red-500 -mt-5 mb-6">{errors?.passwordRepeat?.toString()}</p>
                    <FormCheckRadio type="checkbox" label="Remember">
                      <Field type="checkbox" name="remember" />
                    </FormCheckRadio>
                    <Buttons>
                      <Button type="submit" label="Login" color="info" className="px-8" />
                    </Buttons>

                    <Divider />
                  </Form>
                )
              }}
            </Formik>
            <p className="text-base text-gray-700 mt-4">
              Already have an account
              <Button href="/login" label="Login" type="href" />
            </p>
          </>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <NoAuthenticated>{page}</NoAuthenticated>
}

export default LoginPage
