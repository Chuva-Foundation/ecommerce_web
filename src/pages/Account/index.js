import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>MyAccount</h1>;
      <button onClick={() => navigate("/about")}>Click</button>;
    </div>
  );
}
export default Account;
