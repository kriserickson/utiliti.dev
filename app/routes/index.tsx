export default function Index() {
  return (
    <>
      <h1>Utiliti</h1>
      <p className="lead">
        A collection of{" "}
        <a
          href="https://github.com/mnara-solutions/utiliti.dev"
          target="_blank"
        >
          open source
        </a>{" "}
        utilities.
      </p>
      <h2>Standards</h2>
      <ul>
        <li>A set of fast and well-designed utilities.</li>
        <li>
          All compute will be done in-browser so that no data is sent back to
          us.
        </li>
        <li>
          If data needs to be sent to us (private notes), it will be end-to-end
          encrypted.
        </li>
        <li>No tracking.</li>
      </ul>
    </>
  );
}
