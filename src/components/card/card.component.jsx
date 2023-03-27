import "./card.styles.css";

const Card = ({ monster }) => {
  /* const Card =({monster: {id, name, email}}) 
another shortway to use the below declaration. */
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2> {name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
