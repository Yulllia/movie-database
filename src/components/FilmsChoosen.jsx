import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function FilmsChoosen() {
  const [favourite, setFavouriteMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favourite"));
    if (items) {
      setFavouriteMovie(items);
    }
  }, []);

  const clearStorage = () => {
    localStorage.clear();
    setFavouriteMovie([]);
  };
  const clearOneImage = (film) => {
    const newItem = (favourite.filter((item) => item.id !== film.id));
    setFavouriteMovie(newItem);
    localStorage.setItem("favourite", JSON.stringify(newItem ?? []));
  };
  return (
    <div className="card card-layout choosed">
      <div className="card-body">
        <h4 className="card-title">Список вибраних фільмів</h4>
        <div className="d-flex mt-4 mx-auto">
          <div href="#" className="btn btn-primary text-center" onClick={() => navigate(-1)}>
            Повернутися назад
          </div>
          <div
            href="#"
            className="btn btn-primary text-center mx-3"
            onClick={clearStorage}
          >
            Очистити список{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </div>
        </div>
        <ul className="list-group mt-5">
          {" "}
          {favourite &&
            favourite.map((item, index) => {
              return (
                <div key={index}>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={`/details/${item.id}`}>{item.name}</Link>{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        className="bi bi-x-circle"
                        viewBox="0 0 16 16"
                        onClick={() => clearOneImage(item)}
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default FilmsChoosen;
