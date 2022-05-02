import React, { useState } from "react";
import { Container, FormSelect } from "react-bootstrap";


export const FormCreate = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    // const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [marital, setMarital] = useState('');


    //validation
    const [formvalue, setFormvalue]= useState({ fname:'',lname:'',member_name:'',gender:'',email:''});
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit]= useState(false);


    const [inputList, setinputList]= useState([{firstName:'', lastName:''}]);

    const handleinputchange=(e, index)=>{
        const {name, value}= e.target;
        const list= [...inputList];
        
        list[index][name]= value;
        setinputList(list);    
      }
      const handleaddclick=()=>{ 
        setinputList([...inputList, { firstName:'', lastName:''}]);
      }

      const onInputChange = (e) => {
        const {name, value}= e.target;
        console.log('Input value: ', value);
     
        const re = /^[A-Za-z]+$/;
        const reg= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.+[a-z._-]+/;
        ;
        if (value === "" || re.test(value)) {            
            setFormvalue({...formvalue, [name]: value});
        }
        if(name=='email'){
            
            if (value === "" || reg.test(value)) {            
                setFormvalue({...formvalue, [name]: value});
            }
        }
        if(name='gender'){
            setFormvalue({...formvalue, [name]: value});
        }
        
      }

      const handleremove= index=>{
        const list=[...inputList];
        list.splice(index,1);
        setinputList(list);
      }

      const submithandler = (e) => {
        const data={
            fname:formvalue.fname,
            lname:formvalue.lname,
            gender:formvalue.gender
        }
        console.log(data);
      }

  return (
    <Container className="content">
     <div className="row">
     <div className="col-md-6 p-3 m-2 mx-auto shadow">
     <h5 className="fw-bold text-center" style={{ fontSize: 24, fontWeight: "bold" }}>Enter Your Details</h5>
     <form >
        <div className="form-group m-5">  
            
                <div class="form-group col-md-12">
                <input
                    className="form-control my-2"
                    name='fname'
                    type="text"
                    placeholder="First Name"
                    value={formvalue.fname}                    
                    // onChange={(e) => setFname(e.target.value)}
                    
                    onChange={onInputChange}
                />
                </div>

                <div class="form-group col-md-12 mt-3">
                    <input
                        className="form-control my-2"
                        name='lname'
                        type="text"
                        placeholder="Last Name"
                        value={formvalue.lname}
                        // onChange={(e) => setLname(e.target.value)}
                        onChange={onInputChange}
                    />
                </div>
            
                <div class="form-group col-md-12 mt-3">
                <input
                    className="form-control my-2"
                    name="email"
                    type="text"
                    
                    placeholder="Email"
                    value={formvalue.email}
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={onInputChange}
                />
                </div>

                <div class="form-group col-md-12 mt-3">
                <FormSelect aria-label="Default select my-2" onChange={onInputChange} name="gender">
                    <option>Open this select Gender</option>
                    <option value="male">Male</option>
                    <option value="Female">Female</option>
                </FormSelect>
                </div>

                <div class="form-group col-md-12 mt-3">
                <label class="form-check-label" for="radio2">Marital Status</label>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="radio1" name="marital_status" value="option1" checked />Option 1
                </div>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="radio2" name="marital_status" value="option2" />Option 2
                </div>
                </div>
            
        </div>
        </form>
    </div>
       <div className="col-md-6 p-3 m-2 mx-auto shadow ">
         <h5 className="mt-3 mb-4 fw-bold text-center">Add a Family Member</h5>         
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3 ">
                 <div class="form-group col-md-9">
                 <label >Member Name: </label> {i+1}
                  <input type="text"  name="member_name" class="form-control"  placeholder="Enter First Name" onChange={ e=>handleinputchange(e,i)} />
               </div>
               
               <div class="form-group col-md-3 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={()=> handleremove(x)}>❌
                  </button>
               }
               <div >
               { inputList.length-1===i &&
               <button  className="btn btn-success mx-1" onClick={handleaddclick}>➕ </button>
               }
               </div>
               </div>
               
            </div>
              );
             } )} 

               
       </div>
       <div className="form-group my-3">
              <button
                // type="submit"
                onClick={submithandler}
                className="btn btn-block btn-dark"
              >Add Details                
              </button>
            </div>
     </div>
    </Container>
  )
}
