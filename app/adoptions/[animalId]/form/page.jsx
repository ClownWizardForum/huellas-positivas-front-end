"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Select,
  MenuItem,
} from "@mui/material";

import styles from "./styles.module.scss";

// Definición de los pasos del formulario
const steps = [
  "Datos Personales",
  "Referencias",
  "Información Laboral",
  "Información del Animal",
  "Motivos y Experiencia",
  "Información de Vivienda",
  "Compromisos y Consideraciones",
  "Detalles Adicionales y Firma",
];

const initialValues = {
  firstName: "",
  lastName: "",
  age: "",
  phoneCode: "",
  phoneNumber: "",
  email: "",
  addressStreet: "",
  addressNeighborhood: "",
  addressDepartment: "",
  addressCity: "",
  familyReferenceFirstName: "",
  familyReferenceLastName: "",
  familyReferenceContact: "",
  personalReferenceFirstName: "",
  personalReferenceLastName: "",
  personalReferenceContact: "",
  employmentStatus: "",
  incomeSource: "",
  currentJob: "",
  animalName: "",
  animalAge: "",
  adoptionReason: "",
  petExperience: "",
  previousPets: "",
  hasCurrentPets: "",
  numberOfCurrentPets: "",
  currentPetsNames: "",
  housingStatus: "",
  homeSize: "",
  petLocation: "",
  hasYard: "",
  yardDescription: "",
  landlordPolicy: "",
  rehomePetBefore: "",
  rehomePetReason: "",
  rehomeCircumstances: "",
  moveWithPet: "",
  acceptHomeVisit: "",
  identificationDocument: null,
  signature: "",
};

export default function AdoptionForm() {
  const [activeStep, setActiveStep] = useState(0);

  // Maneja la navegación hacia el siguiente paso
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Maneja la navegación hacia el paso anterior
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Maneja el envío del formulario completo
  const handleSubmit = (values) => {
    const emailBody = `
      Nombres: ${values.firstName}
      Apellidos: ${values.lastName}
      Edad: ${values.age}
      Número telefónico: ${values.phoneCode} ${values.phoneNumber}
      Dirección de correo electrónico: ${values.email}
      ...
    `;

    // Lógica para enviar el correo electrónico o guardar datos
    alert("Formulario enviado con éxito");
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Formulario de Aplicación para Adopción
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            {activeStep === 0 && (
              <Box className={styles.formSection}>
                <Typography variant="h6">Datos Personales</Typography>
                <Field
                  name="firstName"
                  as={TextField}
                  label="Nombres"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="lastName"
                  as={TextField}
                  label="Apellidos"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="age"
                  as={TextField}
                  label="Edad"
                  type="number"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="phoneCode"
                  as={TextField}
                  label="Indicativo"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="phoneNumber"
                  as={TextField}
                  label="Número telefónico"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="email"
                  as={TextField}
                  label="Correo electrónico"
                  type="email"
                  fullWidth
                  margin="normal"
                />
              </Box>
            )}

            {activeStep === 1 && (
              <Box className={styles.formSection}>
                <Typography variant="h6">Referencias</Typography>
                <Field
                  name="familyReferenceFirstName"
                  as={TextField}
                  label="Referencia Familiar - Nombres"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="familyReferenceLastName"
                  as={TextField}
                  label="Referencia Familiar - Apellidos"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="familyReferenceContact"
                  as={TextField}
                  label="Referencia Familiar - Contacto"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="personalReferenceFirstName"
                  as={TextField}
                  label="Referencia Personal - Nombres"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="personalReferenceLastName"
                  as={TextField}
                  label="Referencia Personal - Apellidos"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="personalReferenceContact"
                  as={TextField}
                  label="Referencia Personal - Contacto"
                  fullWidth
                  margin="normal"
                />
              </Box>
            )}

            {activeStep === 2 && (
              <Box className={styles.formSection}>
                <Typography variant="h6">Información Laboral</Typography>
                <Field
                  name="employmentStatus"
                  as={TextField}
                  label="Situación laboral"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="incomeSource"
                  as={TextField}
                  label="Fuentes de ingreso"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="currentJob"
                  as={TextField}
                  label="Lugar de trabajo actual"
                  fullWidth
                  margin="normal"
                />
              </Box>
            )}

            {activeStep === 3 && (
              <Box className={styles.formSection}>
                <Typography variant="h6">Información del Animal</Typography>
                <Field
                  name="animalName"
                  as={TextField}
                  label="Nombre del animal"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="animalAge"
                  as={TextField}
                  label="Edad del animal"
                  fullWidth
                  margin="normal"
                />
              </Box>
            )}

            {activeStep === 4 && (
              <Box className={styles.formSection}>
                <Typography variant="h6">Motivos y Experiencia</Typography>
                <Field
                  name="adoptionReason"
                  as={TextField}
                  label="Razón para adoptar"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="petExperience"
                  as={TextField}
                  label="Experiencia con mascotas"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="previousPets"
                  as={TextField}
                  label="¿Cuántas mascotas ha tenido? Escriba sus nombres"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                />
              </Box>
            )}

            {activeStep === 5 && (
              <Box className={styles.formSection}>
                <Typography variant="h6">
                  Información de Mascotas Actuales
                </Typography>
                <Field
                  name="hasCurrentPets"
                  as={Select}
                  label="¿Tiene mascotas actualmente?"
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Yes">Sí</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Field>
                {values.hasCurrentPets === "Yes" && ( // Cambio de formValues a values
                  <>
                    <Field
                      name="numberOfCurrentPets"
                      as={TextField}
                      label="¿Cuántas mascotas?"
                      type="number"
                      fullWidth
                      margin="normal"
                    />
                    <Field
                      name="currentPetsNames"
                      as={TextField}
                      label="Nombres de las mascotas"
                      fullWidth
                      margin="normal"
                    />
                  </>
                )}
              </Box>
            )}

            {activeStep === 6 && (
              <Box className={styles.formSection}>
                <Typography variant="h6">Información de Vivienda</Typography>
                <Field
                  name="housingStatus"
                  as={Select}
                  label="¿Tiene casa propia o renta?"
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Own">Propia</MenuItem>
                  <MenuItem value="Rent">Arriendo</MenuItem>
                </Field>
                <Field
                  name="homeSize"
                  as={TextField}
                  label="Medidas aproximadas de su hogar"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="petLocation"
                  as={TextField}
                  label="Lugar donde estará la mascota"
                  multiline
                  rows={3}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="hasYard"
                  as={Select}
                  label="¿Cuenta con patio?"
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Yes">Sí</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Field>
                {values.hasYard === "Yes" && ( // Cambio de formValues a values
                  <Field
                    name="yardDescription"
                    as={TextField}
                    label="¿Está cercado? Haga una breve descripción"
                    multiline
                    rows={3}
                    fullWidth
                    margin="normal"
                  />
                )}
                <Field
                  name="landlordPolicy"
                  as={TextField}
                  label="¿Cuál es la política de mascotas de su arrendador?"
                  multiline
                  rows={3}
                  fullWidth
                  margin="normal"
                />
              </Box>
            )}

            {activeStep === 7 && (
              <Box className={styles.formSection}>
                <Typography variant="h6">
                  Compromisos y Consideraciones
                </Typography>
                <Field
                  name="rehomePetBefore"
                  as={Select}
                  label="¿Ha reubicado alguna mascota antes?"
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Yes">Sí</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Field>
                {values.rehomePetBefore === "Yes" && ( // Cambio de formValues a values
                  <Field
                    name="rehomePetReason"
                    as={TextField}
                    label="Explique brevemente"
                    multiline
                    rows={3}
                    fullWidth
                    margin="normal"
                  />
                )}
                <Field
                  name="rehomeCircumstances"
                  as={TextField}
                  label="¿Qué condiciones o circunstancias podrían llevarlo a reubicar a su mascota?"
                  multiline
                  rows={3}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="moveWithPet"
                  as={TextField}
                  label="¿Qué hará con su mascota si se muda de casa, ciudad o país?"
                  multiline
                  rows={3}
                  fullWidth
                  margin="normal"
                />
              </Box>
            )}

            {/* Agregar un botón para la navegación */}
            <Box className={styles.buttonGroup}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={styles.button}
              >
                Atrás
              </Button>
              {activeStep === steps.length ? (
                <Button type="submit" className={styles.button}>
                  Enviar Formulario
                </Button>
              ) : (
                <Button onClick={handleNext} className={styles.button}>
                  Siguiente
                </Button>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
