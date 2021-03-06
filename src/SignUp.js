import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import Useform from "./Useform";
import Validate from "./Validate";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        UniSwap
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ submitForm }) {
  const classes = useStyles();

  const { handleChange, values, handleSubmit, errors } = Useform(
    submitForm,
    Validate
  );
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inscrivez-vous
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nom"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nom"
                autoFocus
                defaultValue={values.nom}
                onChange={handleChange}
                error={errors.nom}
                helperText={errors.nom}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Prénom"
                name="prenom"
                autoComplete="lname"
                defaultValue={values.prenom}
                onChange={handleChange}
                error={errors.prenom}
                helperText={errors.prenom}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
                defaultValue={values.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="pwd"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                defaultValue={values.pwd}
                onChange={handleChange}
                error={errors.pwd}
                helperText={errors.pwd}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="mpwd"
                label="Confirmer mot de passe"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
                defaultValue={values.mpwd}
                onChange={handleChange}
                error={errors.mpwd}
                helperText={errors.mpwd}
              />
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    name="fonction"
                    value="Enseignant"
                    checked={values.fonction === "Enseignant"}
                    onChange={handleChange}
                    control={<Radio color="primary" />}
                    label="Enseignant"
                  />
                  <FormControlLabel
                    name="fonction"
                    value="Etudiant"
                    checked={values.fonction === "Etudiant"}
                    onChange={handleChange}
                    control={<Radio color="primary" />}
                    label="Etudiant"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="J'ai lu et accepté les termes et conditions d'utilisation"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Allons-y
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="./SignIn.js" variant="body2">
                {"Déjà inscrit ? Connectez-vous par ici !"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
