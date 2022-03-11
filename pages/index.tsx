import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"/>
      </Head>

      <div className="foaie">
        <div className="lista titlu h1" data-bs-toggle="collapse" data-bs-target="#stores">
          <input type="text" className="shadow p-3 mb-5 bg-white rounded" value="Lista mea" />
        </div>
        <div className="stores collapse show" id="stores">
          <div>
            <div className="magazin titlu" data-bs-toggle="collapse" data-bs-target="#magazin-1">
              <button className="btn link-danger"><i className="bi bi-x-circle"></i></button>
              <div className="p-3 mb-2 bg-success text-white">Mega Image</div>
            </div>
            <div className="cos collapse show" id="magazin-1">
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Carne</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#modal-1"><i className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Lapte</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#modal-2"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Branza</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#modal-3"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Faina</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#modal-3"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Sampon</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#modal-3"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Banane</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#modal-3"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="text" className="form-control" />
                <input type="button" value="adauga" className="btn btn-warning" />
              </div>
            </div>
          </div>
          <div>
            <div className="magazin titlu" data-bs-toggle="collapse" data-bs-target="#magazin-2">
              <button className="btn link-danger"><i className="bi bi-x-circle"></i></button>
              <div className="p-3 mb-2 bg-success text-white">Lidl</div>
            </div>
            <div className="cos collapse show" id="magazin-2">
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Bormasina</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#modal-4"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Jeleuri</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Pasta de dinti</span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="checkbox" className="form-check-input" />
                <span className="badge bg-success">Paine </span>
                <input type="number" value="1" min="1" />
                <select className="form-select">
                  <option>kg</option>
                  <option>l</option>
                  <option>buc</option>
                  <option>felii</option>
                  <option>plase</option>
                </select>
                <button className="btn link-danger" data-bs-toggle="modal" data-bs-target=".modal"><i
                    className="bi bi-x-circle"></i></button>
              </div>
              <div className="produs">
                <input type="text" className="form-control" />
                <input type="button" value="adauga" className="btn btn-warning" />
              </div>
            </div>
          </div>
          <div>
            <div className="magazin">
              <input type="text" />
              <input type="button" value="adauga magazin nou" className="btn btn-success" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
