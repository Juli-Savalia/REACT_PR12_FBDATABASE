import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo, ViewTodo } from "../redux/action/userAction";
const View = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewTodo());
  }, []);

  let todoRecord = useSelector((state) => state.todo.todoList);

  const DeleteList = (id) => {
    dispatch(DeleteTodo(id));
    alert("record deleted successfully....");
  };

  return (
    <>
      <div align="center">
        <div className="container my-5">
          <div className="d-flex align-items-center justify-content-center">
            <div className="w-50">
              <div className="px-2 py-2">
                {todoRecord.map((val, index) => {
                  return (
                    <div
                      key={val.id}
                      className="d-flex my-3 py-2 ps-3 justify-content-between align-items-center bg-body-secondary rounded"
                    >
                      <p className="fs-4 mb-0">{++index}</p>
                      <h4 className="mb-0">{val.todo}</h4>
                      <button
                        onClick={() => DeleteList()}
                        className="border border-0 bg-danger py-2 px-3 me-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
