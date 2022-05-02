export const AddUser = (userdata) => (
    console.log("addUserAction", userdata),
    {
        type: "CREATE_USER",
        payload: userdata,
    }
);


export const DeleteUser = (deletedata) => (
    console.log("DeleteUserAction", deletedata),
    {
        type: "DELETE_USER",
        payload: deletedata,
    
    }
);
