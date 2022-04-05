console.log('am inceput')

var inmulteste_cu_doi
inmulteste_cu_doi = (numarul_care_trebuie_inmultit_cu_2) => numarul_care_trebuie_inmultit_cu_2 * 2
var alta_variabila = inmulteste_cu_doi



var varsta = 14

varsta = varsta - 6

apeleaza_functia_asta_cu_5_si_adauga_rezultatul_la_varsta(inmulteste_cu_doi)

varsta = varsta * 2


console.log(varsta)

console.log('am terminat')


function apeleaza_functia_asta_cu_5_si_adauga_rezultatul_la_varsta(functia_pe_care_sa_o_apeleze) {
    varsta = varsta + functia_pe_care_sa_o_apeleze(5)
}
