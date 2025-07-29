# 🏛️ Culture Under Fire - Siti Culturali Ucraini in Pericolo

## 📖 Descrizione

**Culture Under Fire** è un'applicazione web interattiva che documenta e visualizza il patrimonio culturale ucraino in pericolo durante il conflitto. L'app mostra una mappa interattiva con i siti culturali danneggiati, distrutti o intatti in Ucraina.

## 🌟 Caratteristiche

- 🗺️ **Mappa Interattiva**: Visualizzazione dei siti culturali su Mapbox
- 📍 **Marker Colorati**: Verde (intatto), Arancione (danneggiato), Rosso (distrutto)
- 🏛️ **Tipi di Siti**: Chiese, Musei, Teatri, Monumenti, Biblioteche
- 📊 **Database Reale**: Dati salvati su database PostgreSQL (Neon)
- 📱 **Responsive**: Funziona su desktop e mobile
- 🔄 **API REST**: Backend Node.js con Express

## 🚀 Demo Live

**Frontend**: https://culture-under-fire.web.app  
**Backend API**: https://culture-under-fire-api.herokuapp.com

## 🛠️ Tecnologie Utilizzate

### Frontend
- **React 18** - Framework UI
- **Vite** - Build tool veloce
- **Mapbox GL JS** - Mappe interattive
- **CSS3** - Styling moderno

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma ORM** - Database management
- **PostgreSQL** - Database (hosted on Neon)

### Database
- **Neon** - PostgreSQL cloud database
- **Prisma** - ORM per query sicure

## 📦 Installazione Locale

### Prerequisiti
- Node.js 18+ 
- npm o yarn
- Account Neon (gratuito)

### 1. Clona il Repository
```bash
git clone https://github.com/tuousername/culture-under-fire.git
cd culture-under-fire
```

### 2. Configura il Database
1. Crea un account su [Neon](https://neon.tech)
2. Crea un nuovo progetto PostgreSQL
3. Copia la stringa di connessione

### 3. Configura il Backend
```bash
cd functions
npm install
```

Crea il file `.env`:
```env
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
PORT=4000
```

### 4. Configura il Database
```bash
npx prisma generate
npx prisma db push
node importFromAPIs.js  # Importa dati di esempio
```

### 5. Avvia il Backend
```bash
node server.js
```

### 6. Configura il Frontend
```bash
cd ../frontend
npm install
```

### 7. Avvia il Frontend
```bash
npm run dev
```

### 8. Apri nel Browser
Vai su `http://localhost:5173`

## 📊 Struttura del Progetto

```
culture-under-fire/
├── functions/                 # Backend API
│   ├── server.js             # Server Express
│   ├── routes/               # API routes
│   ├── prisma/               # Database schema
│   └── importFromAPIs.js     # Script importazione dati
├── frontend/                 # React app
│   ├── src/
│   │   ├── MapView.jsx       # Componente mappa principale
│   │   ├── Navbar.jsx        # Barra navigazione
│   │   └── Legend.jsx        # Legenda colori
│   └── package.json
└── README.md
```

## 🗄️ Database Schema

```sql
model CulturalSite {
  id           String     @id @default(uuid())
  name         String     # Nome del sito
  description  String     # Descrizione
  location     String     # Città, Ucraina
  latitude     Float      # Coordinate GPS
  longitude    Float      # Coordinate GPS
  status       SiteStatus # INTACT, DAMAGED, DESTROYED
  type         SiteType   # CHURCH, MUSEUM, THEATER, etc.
  bibliography String?    # Fonti e riferimenti
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
}
```

## 🌐 API Endpoints

### GET /api/sites
Restituisce tutti i siti culturali
```json
[
  {
    "id": "uuid",
    "name": "Cattedrale di Santa Sofia",
    "description": "Patrimonio UNESCO...",
    "location": "Kiev, Ucraina",
    "latitude": 50.4536,
    "longitude": 30.5164,
    "status": "DAMAGED",
    "type": "CHURCH",
    "bibliography": "UNESCO World Heritage Site..."
  }
]
```

### POST /api/sites
Crea un nuovo sito culturale
```json
{
  "name": "Nome Sito",
  "description": "Descrizione",
  "location": "Città, Ucraina",
  "latitude": 50.0,
  "longitude": 30.0,
  "status": "DAMAGED",
  "type": "MUSEUM",
  "bibliography": "Fonti..."
}
```

## 🚀 Deployment

### Frontend (Firebase Hosting)
```bash
cd frontend
npm run build
firebase deploy --only hosting
```

### Backend (Heroku/Railway)
```bash
cd functions
# Configura variabili d'ambiente su Heroku
git push heroku main
```

## 📈 Contribuire

1. Fork il progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per dettagli.

## 🙏 Ringraziamenti

- **UNESCO** per i dati sui siti patrimonio dell'umanità
- **Ministero della Cultura Ucraino** per i report ufficiali
- **Mapbox** per le mappe interattive
- **Neon** per il database PostgreSQL

## 📞 Contatti

- **GitHub**: [@tuousername](https://github.com/tuousername)
- **Email**: tuoemail@example.com
- **Progetto**: [Culture Under Fire](https://github.com/tuousername/culture-under-fire)

---

⭐ **Se questo progetto ti è utile, lascia una stella su GitHub!** 