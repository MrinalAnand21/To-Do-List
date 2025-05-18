function List({ uo }) {
  return (
    <div className="label1">
      {uo.map((itr) => (
        <label>
          <input type="radio" name="todo" value={itr} />
          {itr}
          <br />
        </label>
      ))}
    </div>
  );
}

export default List;
