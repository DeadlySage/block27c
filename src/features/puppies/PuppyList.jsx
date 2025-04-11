/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
import { useGetPuppiesQuery } from "./puppySlice";
import { Link } from "react-router-dom";

export default function PuppyList({ setSelectedPuppyId, puppyName}) {
  // TODO: Get data from getPuppies query
  const { isLoading, data: puppies } = useGetPuppiesQuery();

  console.log("testing search name", puppyName)
  // Console log for testing
  {
    puppies && console.log("PuppyList:", puppies);
  }

  const filterName = (puppies, puppyName) => {
    // if puppyName search is empty, just pass along the array puppies without filtering
    if (puppyName == "") return puppies;

    // if search is not empty, filter through puppies
    return puppies.filter((p) => p.name.toLowerCase().includes(puppyName.toLowerCase()));
  }


  const puppiesFiltered = filterName(puppies, puppyName);
  
  // Console log for testing
  console.log("Filtered Puppy:",puppiesFiltered)

  return (
    <article className="container">
      <div>
        <ul className="puppies text-center">
          {isLoading && <li>Loading puppies...</li>}
          {puppiesFiltered &&
            puppiesFiltered.map((p) => (
              <li key={p.id} className="card">
                <h3>
                  {p.name} #{p.id}
                </h3>
                <figure>
                  <img src={p.imageUrl} alt={p.name} />
                </figure>
                <Link to="/PuppyDetails">
                  <button onClick={() => setSelectedPuppyId(p.id)} className="btn btn-outline-primary mb-3 w-75">
                    See details
                  </button>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
}
