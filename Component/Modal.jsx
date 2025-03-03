import React , {useState} from 'react'
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
   const [formState, setFormState] = useState(
     defaultValue || {
       AssignTo:"",
       Status:"",
       DueDate:"",
       Priority:"",
       Comments:"",
     }
   );
   const [errors, setErrors] = useState("");
 
   const validateForm = () => {
     if (formState.AssignTos && formState.Status && formState.DueDate
      && formState.Priority && formState.Comments) {
       setErrors("");
       return true;
     } else {
       let errorFields = [];
       for (const [key, value] of Object.entries(formState)) {
         if (!value) {
           errorFields.push(key);
         }
       }
       setErrors(errorFields.join(", "));
       return false;
     }
   };
 
   const handleChange = (e) => {
     setFormState({ ...formState, [e.target.name]: e.target.value });
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     if (!validateForm()) return;
 
     onSubmit(formState);
 
     closeModal();
   };
  return (
   <div className="modal-container" 
    onClick={(e) => {
            if (e.target.className === "modal-container") closeModal();
            }}> 
          <div className='modal'>
                <form>
                     <div className="form-group">
                        <label htmlFor="page">Assign To </label>
                        <input name="page" value={formState.page} onChange={handleChange} />
                     </div>

                     <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <input name="status" value={formState.Status} onChange={handleChange} />
                     </div>

                     <div className="form-group">
                        <label htmlFor="DueDate">Due Date</label>
                        <input type="date"  value={formState.DueDate} onChange={handleChange}/>
                     </div>

                     
                     <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <input name="priority" value={formState.Priority} onChange={handleChange}/>
                     </div>
 
                     <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <input name="comments" value={formState.Comments}  onChange={handleChange}/>
                     </div>
                     {errors && <div className="error">{`Please include: ${errors}`}</div>}
                     <button className='btn'>Cancle</button>
                     <button  className='btn' onClick={handleSubmit}>Save</button>
                </form>
         </div>



   </div>
  )
}
