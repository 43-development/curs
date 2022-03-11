import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/lista.css";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="lista.css" />
      </div>
      <div>
        <div
          className="lista titlu h1"
          data-bs-toggle="collapse"
          data-bs-target="#stores"
        >
          <input
            type="text"
            className="shadow p-3 mb-5 bg-white rounded"
            defaultValue="Lista mea"
          />
        </div>
        <div className="stores collapse show" id="stores">
          <div>
            <div
              className="magazin titlu"
              data-bs-toggle="collapse"
              data-bs-target="#magazin-1"
            >
              <button className="btn link-danger">
                <i className="bi bi-x-circle" />
              </button>
              <div className="p-3 mb-2 bg-success text-white">Mega Image</div>
            </div>
            <div className="cos collapse show" id="magazin-1">
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Carne</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-1"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Lapte</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-2"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Branza</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-3"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Faina</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-3"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Sampon</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-3"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Banane</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-3"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="text" className="form-control" />
                <input
                  type="button"
                  defaultValue="adauga"
                  className="btn btn-warning"
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className="magazin titlu"
              data-bs-toggle="collapse"
              data-bs-target="#magazin-2"
            >
              <button className="btn link-danger">
                <i className="bi bi-x-circle" />
              </button>
              <div className="p-3 mb-2 bg-success text-white">Lidl</div>
            </div>
            <div className="cos collapse show" id="magazin-2">
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Bormasina</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-4"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Jeleuri</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Pasta de dinti</span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Paine </span>
                <input type="number" defaultValue={1} min={1} />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button
                  className="btn link-danger"
                  data-bs-toggle="modal"
                  data-bs-target=".modal"
                >
                  <i className="bi bi-x-circle" />
                </button>
              </div>
              <div className="produs">
                <input type="text" className="form-control" />
                <input
                  type="button"
                  defaultValue="adauga"
                  className="btn btn-warning"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="magazin">
              <input type="text" />
              <input
                type="button"
                defaultValue="adauga magazin nou"
                className="btn btn-success"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="modal-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ești sigur că vrei să ștergi Carne?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              Dacă îl ștergi, va trebui să-l adaugi din nou dacă te răzgândești.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Nu, nu vreau să-l șterg
              </button>
              <button type="button" className="btn btn-danger">
                Da, șterge-l!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
