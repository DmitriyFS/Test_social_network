const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  dialogs: [
    { id: 1, name: "Dmitriy" },
    { id: 2, name: "Nataly" },
    { id: 3, name: "Arina" },
    { id: 4, name: "Simba" },
    { id: 5, name: "Mufasa" },
    { id: 6, name: "Timon" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "I know JS" },
    { id: 3, message: "I know React" },
    { id: 4, message: "I know React" },
    { id: 5, message: "I know React" },
  ],
  newMessageBody: "",
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReduser;
