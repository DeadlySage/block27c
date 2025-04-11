import { useGetPuppyQuery, useDeletePuppyMutation } from "./puppySlice";

/**
 * @component
 * Shows comprehensive information about the selected puppy, if there is one.
 * Also provides a button for users to remove the selected puppy from the roster.
 */

import { Link } from "react-router-dom";
export default function PuppyDetails({ selectedPuppyId, setSelectedPuppyId }) {
  // TODO: Grab data from the `getPuppy` query
  const { isLoading, data: puppy } = useGetPuppyQuery(selectedPuppyId);
  const [deletePuppy] = useDeletePuppyMutation();

  // Console log for testing
  {
    puppy && console.log("PuppyDetails:", puppy);
  }

  // TODO: Use the `deletePuppy` mutation to remove a puppy when the button is clicked
  const removePuppy = async (id) => {
    try {
      setSelectedPuppyId();
      await deletePuppy(id);
    } catch (error) {
      console.error(error);
    }
  };

  // There are 3 possibilities:
  let $details;
  // 1. A puppy has not yet been selected.
  if (!selectedPuppyId) {
    $details = <p>Please select a puppy to see more details.</p>;
  }
  //  2. A puppy has been selected, but results have not yet returned from the API.
  else if (isLoading) {
    $details = <p>Loading puppy information...</p>;
  }
  // 3. Information about the selected puppy has returned from the API.
  else {
    $details = (
      <>
        <h3 className="ps-3 pt-3">
          {puppy.name} #{puppy.id}
        </h3>
        <p className="ps-3">{puppy.breed}</p>
        <p className="ps-3">Team {puppy.team?.name ?? "Unassigned"}</p>
        <Link to="/" className="ps-3">
          <button className="btn btn-outline-primary" onClick={() => removePuppy(puppy.id)}>
            Remove from roster
          </button>
        </Link>
        <figure>
          <img className="pt-3" src={puppy.imageUrl} alt={puppy.name} />
        </figure>
      </>
    );
  }

  return (
    <div className="container">
      <div className="card w-50">
        {$details}
      </div>
    </div>
  );
}
