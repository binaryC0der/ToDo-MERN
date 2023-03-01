import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createGoal} from "../features/goals/goalSlice";

function GoalForm() {
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    const onChange = (e) => setText(e.target.value);
    
    const onSubmit = (err) => {
        err.preventDefault();
        dispatch(createGoal({text}));
        setText("");
    }
  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Enter Goal</label>
                <input type="text" id="text" name='text' value={text} onChange={onChange}/>
            </div>
            <div className="form-group">
            <button type="Submit" className="btn btn-block">
              Add Goal
            </button>
          </div>
        </form>
    </section>
  )
}

export default GoalForm