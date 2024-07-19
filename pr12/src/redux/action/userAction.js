import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../firebaseconfig";
let db = getFirestore(app);

export const Addtodo = (data) => {
  return async (dispatch) => {
    try {
      let record = await addDoc(collection(db, "todo"), {
        id: data.id,
        todo: data.todo,
      });
      dispatch({
        type: "ADD_TODO",
        payload: record,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const ViewTodo = () => {
  return async (dispatch) => {
    try {
      const data = collection(db, "todo");
      const record = await getDocs(data);
      let todo = record.docs.map((val) => ({
        id: val.id,
        todo: val.data().todo,
      }));
      dispatch({
        type: "VIEW_TODO",
        payload: todo,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const DeleteTodo = (todoId) => {
  return async (dispatch) => {
    try {
      const data = doc(db, "todo", todoId);
      console.log(data);
      await deleteDoc(data);
      dispatch({
        type: "DELETETODO",
        payload: todoId,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};
