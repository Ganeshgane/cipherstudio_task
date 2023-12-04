import { DetailsList, Stack, Text, TextField } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { FormEvent, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<
    {
      name: string;
      email: string;
      phone: string;
      marks: string;
    }[]
  >([]);

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
  ];

  return (
    <Stack>
      <Stack>
        <Text as="p" block>
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

      <Text as="p" block>
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
    </Stack>
  );
};
export default App;
