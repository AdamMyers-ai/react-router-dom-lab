import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [mailboxes, setMailBoxes] = useState([]);

  const addBox = (formData) => {
    const newMailBox = {
      ...formData,
      _id: mailboxes.lengh + 1,
    };
    setMailBoxes({ ...mailboxes, newMailBox });
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
