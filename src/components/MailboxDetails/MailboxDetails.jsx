import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters = [] }) => {
  const { mailboxId } = useParams();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId),
  );

  if (!selectedBox) {
    return <h2>Mailbox Not Found.</h2>;
  }

  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId),
  );

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {selectedBox._id}</p>
      <p>Owner: {selectedBox.boxOwner}</p>
      <p>Size: {selectedBox.boxSize}</p>
      <h3>Letters</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters in this mailbox yet.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <p>
                <strong>To:</strong> {letter.recipient}
              </p>
              <p>
                <strong>Message:</strong> {letter.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxDetails;
