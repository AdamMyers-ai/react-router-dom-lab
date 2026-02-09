import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    setMailboxes((prevMailboxes) => [
      ...prevMailboxes,
      {
        ...formData,
        _id: prevMailboxes.length + 1,
      },
    ]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />

        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />

        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
}

export default App;
