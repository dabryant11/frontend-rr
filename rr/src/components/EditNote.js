import React, { useState } from "react";

function EditNote({
  id,
  note,
  onUpdateMessage,
  setHiddenShowForm,
  legislator_id,
}) {
  const [messageBody, setMessageBody] = useState(note);
  const [commentForm, setCommentForm] = useState({
    user_id: 1,
    legislator_id: "",
    content: "",
  });

  function handleSubmit(e) {
    // e.preventDefault();
    console.log("could this be", id);

    // console.log("postyyyy", legislator.id);
    // fetch("http://localhost:3000/user_legislators", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user_id: 1,
    //     legislator_id: id,
    //     notes: commentForm.content,
    //   }),
    // });
    // .then((r) => r.json())
    // .then((data) => {
    //   const newComments = [...comments, data];
    //   setComments(newComments);
    //   setHiddenForm(true);
    //   setHiddenShowForm(false);
    // });
  }

  function updateFormState(e) {
    const updatedFormState = { ...commentForm };
    updatedFormState[e.target.name] = e.target.value;
    setCommentForm(updatedFormState);
    console.log(updatedFormState);
  }

  function handleSubmit(id) {
    // e.preventDefault();
    console.log("um", id);
  }

  function handleFormSubmit(e) {
    console.log("edittttt", id);
    e.preventDefault();

    // const data = {
    //   messageBody,
    // };
    // console.log("subbbb", id);
    // console.log("leggggg", legislator_id);

    fetch(`http://localhost:3000/user_legislator/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        legislator_id: legislator_id,
        notes: messageBody,
      }),
    }).then((r) => r.json());
    //   .then((data) => onUpdateMessage(data));
    // setHiddenShowForm(true);
  }

  function handleUpdateMessage(updatedCommentObj) {
    // const updatedComments = comments.map((comment) => {
    //   if (comment.id === updatedCommentObj.id) {
    //     return updatedCommentObj;
    //   } else {
    //     return comment;
    //   }
    // });
    // setComments(updatedComments);
  }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="formGroupExampleInput">Add a Note</label>
          <input
            type="text"
            name="content"
            value={commentForm.content}
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Add a note..."
            onChange={updateFormState}
          />
          <button type="submit" class="btn btn-outline-secondary submit">
            Submit
          </button>
        </div>
      </form> */}

      <form className="edit-message" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="content"
          autoComplete="off"
          value={messageBody}
          class="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setMessageBody(e.target.value)}
        />
        <input class="btn btn-outline-secondary" type="submit" value="Save" />
      </form>
    </div>
  );
}

export default EditNote;
