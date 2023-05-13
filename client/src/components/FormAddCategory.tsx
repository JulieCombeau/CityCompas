import React from "react";
import { Formik, Field, Form } from "formik";
import { useCreateCategoryMutation } from "../gql/generated/schema";

// validations

function validateName(name: string) {
  let error;
  if (!name) {
    error = "Le nom est obligatoire";
  } else if (name.length < 2) {
    error = "Le nom doit avoir au moins 2 caractères";
  } else if (name.trim() === "") {
    error = "Le nom est invalide";
  }
  return error;
}

function validatePicto(picto: string) {
  let error;
  if (!picto) {
    error = "Le pictogramme est obligatoire";
  } else if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(picto)) {
    picto = "Le pictogramme doit être une URL";
  }
  return error;
}

// form building with Formik https://formik.org/docs/guides/validation

export default function FormAddCategory() {
  const [createCategory] = useCreateCategoryMutation();

  return (
    <div className="container mx-auto p-6 bg-cream flex flex-col">
      <h1 className="type-h2 text-center">Ajouter une catégorie</h1>
      <Formik
        initialValues={{
          name: "",
          picto: "",
        }}
        onSubmit={(values) => {
          createCategory({
            variables: {
              data: { name: values.name, picto: values.picto },
            },
          });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form className="container flex flex-col gap-2 w-3/4 md:w-2/5">
            <label htmlFor="name" className="modal__input--label">
              Nom
            </label>
            <Field
              name="name"
              validate={validateName}
              placeholder="nom"
              className={`modal__input ${
                errors.name && touched.name ? "border-red" : "border-current"
              }`}
            ></Field>
            {errors.name && touched.name && (
              <div className="text-red">{errors.name}</div>
            )}
            <label htmlFor="name" className="modal__input--label">
              Pictogramme
            </label>
            <Field
              name="picto"
              validate={validatePicto}
              placeholder="https://mon-pictogramme.net"
              className={`modal__input ${
                errors.name && touched.name ? "border-red" : "border-current"
              }`}
              label="Pictogramme"
            />
            {errors.picto && touched.picto && (
              <div className="text-red">{errors.picto}</div>
            )}
            <button type="submit" className="button--primary mt-6">
              Enregistrer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
