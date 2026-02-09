import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Box Owner:
          <input
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
          />
        </label>

        <label>
          Box Size:
          <select
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <button type="submit">Create Mailbox</button>
        </label>
      </form>
    </>
  );
};

export default MailboxForm;
