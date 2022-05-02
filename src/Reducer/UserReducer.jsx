const initialstate = {
    users: [
      {
        id: 1,  
        FirstName:'Riya',
        LastName:'Panchal',
        Email: "riya@gmail.com",
        Gender:'Female',
        MartialStatus:'Unmarried',
        Member:[{
          mid: 'a',
          name: 'riya',
        },
        {
          mid: 'b',
          name: 'prem',
        },]
      },
      {
        id: 2,  
        FirstName:'Prem',
        LastName:'Panchal',
        Email: "prem@gmail.com",
        Gender:'Male',
        MartialStatus:'Married',
        Member:[{
          mid: 'c',
          name: 'Robin',
        },
        {
          mid: 'd',
          name: 'Dennis',
        },
      ]
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
    case "GET_USER":
      {
        
        let arr = state.users.filter(
          (user) => user.id == action.payload
        );
        arr = arr.values();        
        for (let val of arr) {
          arr = val;
        }
        console.log("getReducer", arr);
        return {
          ...state,
          user: arr,
        };

      }
    default:
      return state;
  }
 }