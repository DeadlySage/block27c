/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
import { useGetPuppiesQuery } from "./puppySlice";

export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  const { isLoading, data: puppies } = useGetPuppiesQuery();
  
  // Console log for testing
  {puppies && console.log("PuppyList:", puppies)}
  
  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {puppies && puppies.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => setSelectedPuppyId(p.id)}>
              See details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
