const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    // Inserisci siti culturali di esempio
    const sites = [
      {
        name: "Cattedrale di Santa Sofia",
        description: "Antica cattedrale bizantina nel centro di Kiev, patrimonio UNESCO",
        location: "Kiev, Ucraina",
        latitude: 50.4536,
        longitude: 30.5164,
        status: "DAMAGED",
        type: "CHURCH",
        bibliography: "UNESCO World Heritage Site, Report del Ministero della Cultura Ucraino"
      },
      {
        name: "Museo Nazionale di Storia dell'Ucraina",
        description: "Museo principale di storia ucraina con collezioni preziose",
        location: "Kiev, Ucraina",
        latitude: 50.4580,
        longitude: 30.5173,
        status: "INTACT",
        type: "MUSEUM",
        bibliography: "Museo nazionale ufficiale, Database del patrimonio culturale ucraino"
      },
      {
        name: "Teatro dell'Opera di Odessa",
        description: "Famoso teatro dell'opera in stile barocco del XIX secolo",
        location: "Odessa, Ucraina",
        latitude: 46.4825,
        longitude: 30.7233,
        status: "DESTROYED",
        type: "THEATER",
        bibliography: "Teatro storico del XIX secolo, Report di distruzione 2022"
      },
      {
        name: "Museo di Mariupol",
        description: "Museo d'arte regionale con collezioni di pittura ucraina",
        location: "Mariupol, Ucraina",
        latitude: 47.0971,
        longitude: 37.5434,
        status: "DESTROYED",
        type: "MUSEUM",
        bibliography: "Museo d'arte di Mariupol, Report di distruzione marzo 2022"
      },
      {
        name: "Cattedrale della Trasfigurazione",
        description: "Cattedrale ortodossa principale di Mariupol",
        location: "Mariupol, Ucraina",
        latitude: 47.0978,
        longitude: 37.5438,
        status: "DAMAGED",
        type: "CHURCH",
        bibliography: "Cattedrale della Trasfigurazione, Danni riportati durante l'assedio"
      }
    ];

    for (const site of sites) {
      await prisma.culturalSite.create({
        data: site
      });
    }

    console.log('✅ Dati di esempio inseriti con successo!');
  } catch (error) {
    console.error('❌ Errore durante l\'inserimento dei dati:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed(); 