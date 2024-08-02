const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]



  function cercaLavoro(title, location) {
    // Conversione dei parametri in minuscolo per ricerca case-insensitive
    const tipoLavoro = title.toLowerCase();
    const luogo = location.toLowerCase();

    const risultati = [];
    // ciclo for per ciclare l'array di lavori
    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        // verifica condizione se il titolo e la posizione corrispondono ai criteri di ricerca
        if (job.title.toLowerCase().includes(tipoLavoro) && job.location.toLowerCase().includes(luogo)) {
            risultati.push(job);
        }
    }
    const count = risultati.length;
    // risultati nel console.log
    console.log('Numero di posizioni trovate:', count);
    console.log('Posizioni:', risultati);
}

// Esempio di chiamata alla funzione
cercaLavoro('english teacher abroad', 'saint bonaventure');






function eseguiRicerca() {
  const tipoLavoro = document.getElementById('tipoLavoro').value.toLowerCase();
  const luogo = document.getElementById('luogo').value.toLowerCase();
  const listaRisultati = document.getElementById('listaRisultati');
  const numeroRisultati = document.getElementById('numeroRisultati');

  // Filtra i lavori in base al tipo di lavoro e al luogo
  const risultatiFiltrati = jobs.filter(job => 
    job.title.toLowerCase().includes(tipoLavoro) &&
    job.location.toLowerCase().includes(luogo)
);
// Pulisci la lista dei risultati
listaRisultati.innerHTML = '';
//mostro il numero di risultati trovati
if(risultatiFiltrati.length === 1) {
  numeroRisultati.textContent= ` ${risultatiFiltrati.length} risultato trovato`;
} else {
  numeroRisultati.textContent = `${risultatiFiltrati.length} risultati trovati:`;
}
// Aggiungi i risultati alla lista
risultatiFiltrati.forEach(job => {
    const li = document.createElement('li');
    li.textContent = `${job.title} - ${job.location}`;
    listaRisultati.appendChild(li);
});
}




