export const AddUser = (userdata) => (
    console.log("addContactAction", userdata),
    {
        type: "CREATE_USER",
        payload: userdata,
    }
);