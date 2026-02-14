import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LetterForm({ mailboxes, addLetter }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mailboxId: mailboxes.length ? String(mailboxes[0]._id) : "",
    recipient: "",
    message: "",
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addLetter(formData);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  if (mailboxes.length === 0) {
    return <h2>Create a mailbox first!</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mailbox:
        <select
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox._id}
            </option>
          ))}
        </select>
      </label>

      <label>
        Recipient:
        <input
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Send Letter</button>
    </form>
  );
}

export default LetterForm;
