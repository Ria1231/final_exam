const initialstate = {
    users: [
      {
        id: 1,  
        FirstName:'Riya',
        LastName:'Panchal',
        Email: "riya@gmail.com",
        Gender:'Female',
        MartialStatus:'Unmarried',
        Member:['Prem','Pratham']
      },
      {
        id: 2,  
        FirstName:'Prem',
        LastName:'Panchal',
        Email: "prem@gmail.com",
        Gender:'Male',
        MartialStatus:'Married',
        Member:['Anjali','Pratham']
      }
    ]
 }

 export const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "CREATE_USER":
    {
      console.log("addReducer", action)
      console.log("state", state)
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
      
    }
    case "DELETE_USER":
    {
      return {
        ...state,
        users: state.users.filter(
        (user) => user.id != action.payload
        ),
      };
    }
    default:
      return state;
  }
 }