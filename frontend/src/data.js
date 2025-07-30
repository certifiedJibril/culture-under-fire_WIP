// Dati statici per il frontend (fallback se il backend non è disponibile)
export const staticSites = [
  {
    id: "1",
    name: "Cattedrale di Santa Sofia",
    description: "Patrimonio UNESCO, cattedrale bizantina dell'XI secolo danneggiata durante l'invasione russa",
    location: "Kiev, Ucraina",
    latitude: 50.4536,
    longitude: 30.5164,
    status: "DAMAGED",
    type: "CHURCH",
    bibliography: "UNESCO World Heritage Site, Report Ministero Cultura Ucraino 2022"
  },
  {
    id: "2",
    name: "Museo Nazionale di Storia dell'Ucraina",
    description: "Museo principale con collezioni di arte e storia ucraina, evacuato preventivamente",
    location: "Kiev, Ucraina", 
    latitude: 50.4580,
    longitude: 30.5173,
    status: "INTACT",
    type: "MUSEUM",
    bibliography: "Museo Nazionale Ucraino, Piano di evacuazione 2022"
  },
  {
    id: "3",
    name: "Teatro dell'Opera di Mariupol",
    description: "Teatro storico distrutto durante l'assedio di Mariupol nel marzo 2022",
    location: "Mariupol, Ucraina",
    latitude: 47.0971,
    longitude: 37.5434,
    status: "DESTROYED", 
    type: "THEATER",
    bibliography: "Report distruzione Mariupol, CNN marzo 2022"
  },
  {
    id: "4",
    name: "Museo d'Arte di Mariupol",
    description: "Museo con collezioni di pittura ucraina e russa, gravemente danneggiato",
    location: "Mariupol, Ucraina",
    latitude: 47.0978,
    longitude: 37.5438,
    status: "DESTROYED",
    type: "MUSEUM", 
    bibliography: "Museo d'Arte Mariupol, Report danni aprile 2022"
  },
  {
    id: "5",
    name: "Cattedrale della Trasfigurazione",
    description: "Cattedrale ortodossa principale di Mariupol, danneggiata durante l'assedio",
    location: "Mariupol, Ucraina",
    latitude: 47.0975,
    longitude: 37.5436,
    status: "DAMAGED",
    type: "CHURCH",
    bibliography: "Cattedrale Trasfigurazione, Danni riportati marzo 2022"
  }
]; 