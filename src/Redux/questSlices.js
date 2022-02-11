import { createSlice } from "@reduxjs/toolkit";
import { _saveQuestion, _saveQuestionAnswer, formatQuestion } from "../_DATA";
import { ActionsOfUsers } from "./userSlices";

const initialState = {};

const questionSlice = createSlice({
  // set the name to communictae with actions
  name: "questions",
  initialState,
  reducers: {
    // add question reducer
    addNewQuestion: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    // set question reducer
    putQuestions: (state, action) => (state = action.payload),
    // set vote reducer
    addNewVote: (state, action) => {
      state[action.payload.questId][action.payload.answer].votes.push(
        action.payload.logedUser
      );
    },
  },
});

export function saveTheQuestion({ optionOne, optionTwo, author }) {
  console.log({ optionOne, optionTwo, author });
  return async function (dispatch) {
    const addNewQuestion = formatQuestion({ optionOne, optionTwo, author });
    await _saveQuestion(addNewQuestion);
    dispatch(ActionsOfQuestions.addNewQuestion(addNewQuestion));
    dispatch(ActionsOfUsers.QuestionSaved(addNewQuestion));
  };
}
export function saveTheAnswer({ questId, logedUser, answer }) {
  return async function (dispatch) {
    await _saveQuestionAnswer({ questId, logedUser, answer });
    dispatch(ActionsOfQuestions.addNewVote({ questId, logedUser, answer }));
    dispatch(ActionsOfUsers.answerAdded({ questId, logedUser, answer }));
  };
}

export const ActionsOfQuestions = questionSlice.actions;
export default questionSlice.reducer;
