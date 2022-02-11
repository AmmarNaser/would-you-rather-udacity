import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logedUser: localStorage.getItem("logedUser") || null,
  users: {
    sarahedo: {
      id: "sarahedo",
      name: "Sarah Edo",
      avatarURL: "/assets/sarahedo.jpg",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    tylermcginnis: {
      id: "tylermcginnis",
      name: "Tyler McGinnis",
      avatarURL: "/assets/tylermcginnis.jpg",
      answers: {
        vthrdm985a262al8qx3do: "optionOne",
        xj352vofupe1dqz9emx13r: "optionTwo",
      },
      questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
    },
    johndoe: {
      id: "johndoe",
      name: "John Doe",
      avatarURL: "/assets/johndoe.jpg",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  },
};

const userSlice = createSlice({
  // set the name to communictae with actions
  name: "users",
  initialState,
  reducers: {
    // save anser reducer
    answerAdded: (state, action) => {
      state.users[action.payload.logedUser].answers[action.payload.questId] =
        action.payload.answer;
    },
    // set user reducer
    setmembers: (state, action) => {
      state.users = action.payload;
    },
    // log in reducer
    logging: (state, action) => {
      state.logedUser = action.payload;
    },
    // new qustion reducer
    QuestionSaved: (state, action) => {
      state.users[action.payload.author].questions.push(action.payload.id);
    },
  },
});

export const ActionsOfUsers = userSlice.actions;
export default userSlice.reducer;
