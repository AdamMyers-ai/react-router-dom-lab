import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailboxes</h2>

      <section>
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">
              <p>Mailbox #{mailbox._id}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default MailboxList;
