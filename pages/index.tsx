/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  const selector_unitate =
    <select className="form-select">
      <option>kg</option>
      <option>l</option>
      <option>buc</option>
      <option>felii</option>
      <option>plase</option>
      <option>doze</option>
    </select>
  
  const buton_stergere = <button className="btn link-danger"><i className="bi bi-x-circle"></i></button>

  const adauga_produs =
    <div className="produs">
      <input type="text" className="form-control" />
      <input type="button" value="adauga" className="btn btn-warning" />
    </div>

  const checkbox = <input type="checkbox" className="form-check-input" />
  const cantitate = <input type="number" value="1" min="1" />

  const denumire_produs = nume_produs => <span className="badge bg-success">{nume_produs}</span>
  const denumire_magazin = nume_magazin => <div className="p-3 mb-2 bg-success text-white">{nume_magazin}</div>
  const produs = nume_produs =>
    <div className="produs">
      {checkbox}
      {denumire_produs(nume_produs)}
      {cantitate}
      {selector_unitate}
      {buton_stergere}
    </div>

  const firma_luminoasa_magazin = nume_magazin =>
    <div className="magazin titlu" data-bs-toggle="collapse" data-bs-target="#magazin-1">
      {buton_stergere}
      {denumire_magazin(nume_magazin)}
    </div>

  const cos_cumparaturi = (nume_produse: string[]) =>
    <div className="cos collapse show" id="magazin-1">
      {nume_produse.map(nume_produs => produs(nume_produs))}
      {adauga_produs}
    </div>

  const magazin = (nume_magazin: string, nume_produse: string[]) =>
    <div>
      {firma_luminoasa_magazin(nume_magazin)}
      {cos_cumparaturi(nume_produse)}
    </div>
  
  const magazine = [
    {
      titlu: 'Mega Image',
      produse: ["Carne", "Lapte", "Branza", "Faina", "Sampon", 'Banane']
    },
    {
      titlu: 'Lidl',
      produse: ['Bormasina', 'Jeleuri', 'Pasta', 'Paine', 'Cheie de 13']
    },
    {
      titlu: 'Kaufland',
      produse: ['Salata', 'Rosii']
    }
  ]

  const shops = (supermarket) => (
    <div>
      {magazin(magazine[supermarket].titlu, magazine[supermarket].produse)}
    </div>
  );

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
          {shops(0)}
          {shops(1)}
          {shops(2)}
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
