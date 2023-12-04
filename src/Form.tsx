import { PrimaryButton, Text, TextField } from "@fluentui/react";

const Form = () => {
  return (
    <>
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
          as="h4"
          block
          variant="xLarge"
          style={{
            borderBottom: "1px solid #e5e5e5",
            marginBottom: "2rem",
            padding: "0 0 1rem",
          }}
        >
          Edit Information
        </Text>

        <TextField label="Name" name="name" required />
        <TextField label="Age" name="age" required />
        <TextField label="Class" name="class" required />
        <TextField label="Marks" name="marks" required />

        <PrimaryButton type="submit">Save</PrimaryButton>
      </form>
    </>
  );
};

export default Form;
