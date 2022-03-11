import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div>
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
                  
  )
}

export default Home
