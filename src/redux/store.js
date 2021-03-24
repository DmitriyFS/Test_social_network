// import dialogsReduser from "./dialogsReduser";
// import profileReduser from "./profileReduser";

// let store = {
//   _state: {
//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: "Dmitriy" },
//         { id: 2, name: "Nataly" },
//         { id: 3, name: "Arina" },
//         { id: 4, name: "Simba" },
//         { id: 5, name: "Mufasa" },
//         { id: 6, name: "Timon" },
//       ],
//       messages: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "I know JS" },
//         { id: 3, message: "I know React" },
//         { id: 4, message: "I know React" },
//         { id: 5, message: "I know React" },
//       ],
//       newMessageBody: "",
//     },
//     profilePage: {
//       posts: [
//         { id: 1, message: "Hello!", likesCount: 26 },
//         { id: 2, message: "Everything works", likesCount: 42 },
//         { id: 3, message: "Everything works", likesCount: 42 },
//         { id: 4, message: "Everything works", likesCount: 42 },
//       ],
//       newPostText: "Enter the message",
//     },
//   },
//   _callSubscriber() {},

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReduser(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
//     this._callSubscriber(this._state);
//   },
// };

// export default store;
// window.store = store;
