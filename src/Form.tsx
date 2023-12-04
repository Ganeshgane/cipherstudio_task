import { PrimaryButton, Text, TextField } from "@fluentui/react";

const Form = () => {
  return (
    <>
      <Text as="h1" block variant="xxLarge">
        Form
      </Text>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(
            "Whoa there!",
            event.currentTarget,
            event.currentTarget.elements
          );
        }}
      >
        <Text
          as="h2"
          block
          variant="xLarge"
          style={{
            borderBottom: "1px solid #e5e5e5",
            marginBottom: "2rem",
            padding: "0 0 1rem",
          }}
        >
          Contact Information
        </Text>

        <Text as="p" block>
          Please fill out your contact information
        </Text>

        <TextField label="Name" name="name" required />
        <TextField label="Age" name="age" required />
        <TextField label="Class" name="class" required />
        <TextField label="Marks" name="marks" required />

        <PrimaryButton type="submit">Primary Button</PrimaryButton>
      </form>
    </>
  );
};

export default Form;
