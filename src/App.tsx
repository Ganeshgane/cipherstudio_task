import { DetailsList, Stack, Text, TextField } from "@fluentui/react";
import { CommandButton, PrimaryButton } from "@fluentui/react/lib/Button";
import React, { FormEvent, useState } from "react";
import { Dialog, DialogType, DialogFooter } from "@fluentui/react/lib/Dialog";
import { useId, useBoolean } from "@fluentui/react-hooks";
import Form from "./Form";

const App = () => {
  const [users, setUsers] = useState<
    {
      name: string;
      email: string;
      phone: string;
      marks: string;
    }[]
  >([]);
  const [hideDialog, setHideDialog] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    marks: "",
  });

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const log123 = () => {
    console.log(user);
    setUsers([...users, user]);

    console.log(users, "user");
  };

  const columns = [
    {
      key: "name",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "email",
      name: "Email",
      fieldName: "email",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "phone",
      name: "Phone",
      fieldName: "phone",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "marks",
      name: "Marks",
      fieldName: "marks",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "actions",
      name: "Actions",
      fieldName: "",
      minWidth: 50,
      maxWidth: 50,
      onRender: (item: any, index: any) => (
        <CommandButton onClick={() => setHideDialog(false)} text="Edit" />
      ),
    },
  ];

  return (
    <Stack>
      <Stack>
        <Text
          as="h6"
          block
          variant="xLarge"
          style={{
            borderBottom: "1px solid #e5e5e5",
            marginBottom: "2rem",
            padding: "0 0 1rem",
          }}
        >
          Please fill out your basic form
        </Text>
        <Stack.Item grow>
          <TextField
            placeholder="Name"
            label="Name"
            value={user.name}
            name="name"
            onChange={handleInputChange}
          />
          <TextField
            placeholder="Email"
            label="Email"
            value={user.email}
            name="email"
            onChange={handleInputChange}
          />
          <TextField
            placeholder="Phone"
            label="phone"
            value={user.phone}
            name="phone"
            onChange={handleInputChange}
          />
          <TextField
            placeholder="Marks"
            label="marks"
            value={user.marks}
            name="marks"
            onChange={handleInputChange}
          />
        </Stack.Item>
        <PrimaryButton onClick={log123}>Add</PrimaryButton>
      </Stack>

      <Text
        as="h6"
        block
        variant="xLarge"
        style={{
          borderBottom: "1px solid #e5e5e5",
          marginBottom: "2rem",
          padding: "0 0 1rem",
        }}
      >
        List of values
      </Text>

      <Stack>
        <DetailsList
          items={users}
          columns={columns}
          setKey="set"
          // onRenderItemColumn={renderItemColumn}
        />
      </Stack>

      <Dialog
        hidden={hideDialog}
        onDismiss={() => setHideDialog(true)}
        // dialogContentProps={dialogContentProps}
        // modalProps={modalProps}
      >
        <Form />
        {/* <DialogFooter>
          <PrimaryButton onClick={() => setHideDialog(true)} text="Save" />
        </DialogFooter> */}
      </Dialog>
    </Stack>
  );
};
export default App;
