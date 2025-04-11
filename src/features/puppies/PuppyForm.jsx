import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddPuppyMutation } from "./puppySlice";

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */
export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted
  const [addPuppy, isLoading] = useAddPuppyMutation();

  const postPuppy = async (event) => {
    try {
      event.preventDefault();
      const imageUrl = "https://loremflickr.com/200/300/dog";
      await addPuppy({ name, breed, imageUrl });
      navigate("/");
    } catch (error) {
      setError(error)
    }
  } 

  return (
    <div className="container">
      <div className="form-floating card mb-3 w-50 px-2 py-1">
      <form className="d-flex flex-column mb-3" onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="floatingInput"
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="form-control"
            id="floatingInput"
          />
        </label>
        <button className="btn btn-outline-primary h-50">Add to Roster</button>
        {/* {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>} */}
      </form>
      </div>
    </div>
  );
}
