---
title: "Express-Tutorial Teil 7: Bereitstellung für die Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese wahrscheinlich auf einem öffentlichen Webserver installieren, damit Bibliotheksmitarbeiter und Mitglieder darüber im Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Site für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Themen des Tutorials abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express-Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo und wie Sie eine Express-App in die Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Site fertig ist (oder "genug" fertig, um mit öffentlichen Tests zu beginnen), müssen Sie sie irgendwo öffentlich und zugänglicher als auf Ihrem persönlichen Entwicklungscomputer hosten.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Site im lokalen Browser/Netzwerk zu teilen und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsreife Infrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Orientierungshilfen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereitzumachen, und ein praktisches Beispiel, wie Sie die LocalLibrary-Website auf den Cloud-Hosting-Dienst [Railway](https://railway.com/) installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch ausführen werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachen-Runtime und Rahmenbibliotheken, auf deren Basis Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse Proxies, Lastverteilers usw.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet normalerweise ein garantiertes Niveau an Computerressourcen (z.B. CPU, RAM, Speicherkapazität usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von fernzugänglicher Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen die Auswahl von umfassenderen Umgebungen, möglicherweise einschließlich eines vollständigen Node-Setups.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die bekommen, die Sie möchten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_) Angebots. Bei der Verwendung dieser Art von Hosting müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung kümmern (Server, Lastverteiler usw.), da die Hostplattform diese für Sie übernimmt. Das macht die Bereitstellung ganz einfach, denn Sie müssen sich lediglich auf Ihre Webanwendung konzentrieren und nicht auf andere Serverinfrastrukturen.

Einige Entwickler werden die größere Flexibilität, die IaaS bietet, PaaS vorziehen, während andere die reduzierte Wartung und einfachere Skalierung von PaaS schätzen werden. Wenn Sie gerade anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, daher werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollten diese Anweisungen zur Verfügung stellen, wie man eine Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. einrichtet. Zum Beispiel gibt es viele Schritt-für-Schritt-Leitfäden für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, von denen bekannt ist, dass sie entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) zusammenarbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir hier einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige Dinge, die man bei der Auswahl eines Hosts beachten sollte:

- Wie stark Ihre Site wahrscheinlich besucht wird und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu erfüllen.
- Unterstützung des horizontalen Skalierens (Hinzufügen weiterer Maschinen) und des vertikalen Skalierens (Aufrüsten auf leistungsstärkere Maschinen) sowie die Kosten dafür.
- Die Standorte, an denen der Anbieter Data-Center hat, und wo der Zugang daher am schnellsten sein dürfte.
- Die historische Betriebs- und Ausfallleistung des Hosts.
- Tools für die Verwaltung der Site — sind sie einfach zu benutzen und sind sie sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisstufen an oder bieten nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate an, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit ausläuft, und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass Sie von Anfang an besser dran gewesen wären, einen anderen Dienst zu nutzen.

Die gute Nachricht, wenn Sie gerade anfangen, ist, dass es eine ganze Reihe von Seiten gibt, die "kostenlose" Computerumgebungen bereitstellen, die für Evaluierung und Tests gedacht sind. Diese sind in der Regel sehr ressourcenbeschränkte/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können. Sie eignen sich jedoch hervorragend, um Sites mit geringem Traffic in einer gehosteten Umgebung zu testen und bieten eine einfache Möglichkeit, bei zunehmendem Traffic Ihrer Site mehr Ressourcen zu bezahlen.
Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basis"- oder "Hobby"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützliche Niveaus an Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Kriterium für die Auswahl ist.
> Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass die Skalierbarkeit der wichtigste Faktor ist.

## Bereitmachen Ihrer Website zur Veröffentlichung

Die Hauptsachen, über die Sie nachdenken sollten, wenn Sie Ihre Website veröffentlichen, sind die Websicherheit und die Leistung. Mindestens möchten Sie die Datenbankkonfiguration ändern, damit Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stack-Traces, die auf Fehlerseiten während der Entwicklung enthalten sind, entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele häufige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Weitere nützliche Tipps finden Sie in den Express-Dokumentationen — siehe [Produktionsbest-Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktionsbest-Praktiken: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher im Tutorial haben wir eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen fest in **app.js** codiert sind. Da die Entwicklungsdatenbank keine Informationen enthält, die wir ungern preisgeben oder beschädigen lassen wollen, besteht kein besonderes Risiko, diese Details offenzulegen. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbank-Anmeldeinformationen sehr wichtig.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als für die Entwicklung und die Produktionsdatenbank-Anmeldeinformationen auch getrennt vom Quellcode halten, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter unterstützt, Umgebungsvariablen über eine Weboberfläche festzulegen (wie viele es tun), ist eine Möglichkeit, dies zu tun, den Server die Datenbank-URL aus einer Umgebungsvariablen abrufen zu lassen. Unten ändern wir die LocalLibrary-Website, um die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen abzurufen, falls sie definiert wurde, und ansonsten die Entwicklungs-Datenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen mit dem Namen `MONGODB_URI` zu erhalten, falls sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

```js
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
```

> [!NOTE]
> Eine andere gängige Methode, um Produktionsdatenbank-Anmeldeinformationen vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm [dotenv](https://www.npmjs.com/package/dotenv) Modul gelesen werden).

### Setzen von NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die `NODE_ENV` Umgebungsvariable auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zur Generierung weniger detaillierter Fehlermeldungen, speichert das Setzen der Variable auf _production_ Ansichts-Templates und aus CSS-Erweiterungen generierte CSS-Dateien im Cache. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch die Verwendung von `export`, einer Umgebungsdatei oder dem OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrer Umgebungseinstellung vornehmen, und nicht in Ihrer App, aber sie ist wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie diese für unser Hosting-Beispiel unten gesetzt wird.

### Angemessenes Protokollieren

Protokollierungsaufrufe können Auswirkungen auf eine stark frequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. Verkehrsüberwachung oder Protokollierung von API-Aufrufen), sollten jedoch versuchen, die Menge der für Debugging-Zwecke hinzugefügten Protokollierung zu minimieren.

Eine Möglichkeit, das "Debug"-Protokollieren in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), mit dem Sie steuern können, welche Protokollierung durch Setzen einer Umgebungsvariablen vorgenommen wird. Das folgende Codefragment zeigt zum Beispiel, wie Sie das "author"-Protokollieren einrichten könnten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Protokolle aus diesem Objekt angezeigt.

```js
const debug = require("debug")("author");

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  const author = await Author.findById(req.params.id).exec();
  if (author === null) {
    // No results.
    debug(`id not found on update: ${req.params.id}`);
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_form", { title: "Update Author", author: author });
});
```

Sie können dann eine bestimmte Menge von Protokollen aktivieren, indem Sie sie als durch Kommata getrennte Liste in der `DEBUG` Umgebungsvariable angeben. Sie können die Variablen zum Anzeigen von Author- und Book-Protokollen wie gezeigt setzen (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe an `debug` können Protokolle ersetzen, die Sie möglicherweise zuvor mit `console.log()` oder `console.error()` vorgenommen haben. Ersetzen Sie alle `console.log()` Aufrufe in Ihrem Code durch Protokollieren über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Protokollieren in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, welchen Einfluss dies auf das Protokollieren hat.

Wenn Sie die Website-Aktivität protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktionsbest-Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden von gzip/deflate-Kompression für Antworten

Webserver können die HTTP-Antworten oft komprimieren, die sie an einen Client zurücksenden, was die Zeit signifikant reduziert, die der Client benötigt, um die Seite zu erhalten und zu laden. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client im Request angibt, dass er sie unterstützt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Site mit einem [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungsbibliothek wie gezeigt ein. Fügen Sie die Komprimierungsbibliothek mit der `use()`-Methode in die Middleware-Kette ein (dies sollte vor allen Routen erscheinen, die Sie komprimiert haben möchten — in diesem Fall alle!)

```js
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
const compression = require("compression");

// Create the Express application object
const app = express();

// …

app.use(compression()); // Compress all routes

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

// …
```

> [!NOTE]
> Für eine stark frequentierte Website in der Produktion würden Sie dieses Middleware nicht verwenden. Stattdessen würden Sie einen Reverse Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden von Helmet zum Schutz gegen bekannte Schwachstellen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [Docs](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und vor welchen Schwachstellen es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek wie gezeigt ein. Fügen Sie das Modul mit der `use()`-Methode in die Middleware-Kette ein.

```js
const compression = require("compression");
const helmet = require("helmet");

// Create the Express application object
const app = express();

// Add helmet to the middleware chain.
// Set CSP headers to allow our Bootstrap and jQuery to be served
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

// …
```

Wir hätten normalerweise `app.use(helmet());` eingefügt, um das _Unterset_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Sites sinnvoll sind. In der [LocalLibrary Basisvorlage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) haben wir jedoch einige Bootstrap- und jQuery-Skripte enthalten. Diese verletzen die _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von helmet, die das Laden von Scripts von anderen Websites nicht erlaubt. Um das Laden dieser Scripts zu ermöglichen, ändern wir die Helmet-Konfiguration, sodass sie CSP-Direktiven setzt, um das Laden von Skripten von den angegebenen Domains zu ermöglichen. Für Ihren eigenen Server können Sie bestimmte Header hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Hinzufügen von Ratenbegrenzung zu den API-Routen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Site gerichtet sein könnten, wie z.B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder einfach nur ein Client oder Skript, das sich nicht wie erwartet verhält. Abgesehen von den Leistungsproblemen, die durch zu viele Anfragen entstehen können, die Ihren Server verlangsamen, können Ihnen auch für den zusätzlichen Verkehr Gebühren berechnet werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen, die an eine bestimmte Route oder eine bestimmte Gruppe von Routen gestellt werden können, zu begrenzen.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek wie gezeigt ein. Fügen Sie das Modul mit der `use()`-Methode in die Middleware-Kette ein.

```js
const compression = require("compression");
const helmet = require("helmet");

const app = express();

// Set up rate limiter: maximum of twenty requests per minute
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

// …
```

Der obige Befehl begrenzt alle Anfragen auf 20 pro Minute (Sie können dies je nach Bedarf ändern).

> [!NOTE]
> Drittanbieter-Dienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen erweiterten Schutz vor Denial-of-Service- oder anderen Arten von Angriffen benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Entry-Point-Datei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Version von Node, die für die Entwicklung verwendet wurde, ermitteln, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** hinzu, wie gezeigt (verwenden Sie die Versionsnummer für Ihr System).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit der gleichen Hauptversionsnummer zu verwenden oder eine neuere Version.

Beachten Sie, dass es andere Möglichkeiten gibt, die Node-Version auf verschiedenen Hosting-Diensten anzugeben, aber der **package.json** Ansatz ist weithin unterstützt.

#### Abhängigkeiten erhalten und erneut testen

Bevor wir fortfahren, lassen Sie uns die Site erneut testen und sicherstellen, dass sie von keiner unserer Änderungen betroffen war.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal am Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Jetzt führen Sie die Site aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob die Site immer noch so funktioniert, wie Sie es erwarten.

### Erstellen eines Anwendungsrepositorys bei GitHub

Viele Hosting-Dienste erlauben Ihnen, Projekte von einem lokalen Repository oder von cloudbasierten Quellcode-Plattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich vereinfachen.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools eine gute Vorgehensweise bei der Softwareentwicklung ist, da sie es Ihnen ermöglicht, Änderungen auszuprobieren und bei Bedarf zwischen Ihren Experimenten und "bekannt gutem Code" zu wechseln!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.

   - Einen neuen Repository-Namen (z.B. _express-locallibrary-tutorial_. eingeben und eine Beschreibung (z.B. "Local Library website written in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlliste.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugang "Public" macht _den gesamten_ Quellcode — einschließlich Ihres Datenbank-Benutzernamens und -Passworts — für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen hard-codiert hat.
   >
   > Andernfalls wählen Sie die Option "Private", um nur ausgewählten Personen den Quellcode zugänglich zu machen.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf die grüne Schaltfläche **Clone or download** auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im erscheinenden Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Nun, da das Repository ("repo") auf GitHub erstellt ist, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Versionen für verschiedene Plattformen finden Sie [hier](https://git-scm.com/downloads)).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repository mithilfe der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repository-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repository-Ordner, machen Sie sie mit _git_ zu einem Teil des Repositories und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (mit Ausnahme von **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu Git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit`ten möchten, korrekt sind (Sie möchten Quellcodedateien einschließen, nicht Binärdateien, temporäre Dateien usw.).
   Es sollte ähnlich wie in der folgenden Liste aussehen.

   ```bash
   git status
   ```

   ```plain
   On branch main
   Your branch is up-to-date with 'origin/main'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           new file:   ...
   ```

4. Wenn Sie zufrieden sind, `commit`ten Sie die Dateien zum lokalen Repository.
   Dies entspricht dem Unterschreiben der Änderungen und ihrer Aufnahme als offizieller Bestandteil des lokalen Repositories.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. An diesem Punkt wurde das Remote-Repository nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repository mit dem Remote-GitHub-Repository zu synchronisieren (`push`) mit folgendem Befehl:

   ```bash
   git push origin main
   ```

Wenn diese Operation abgeschlossen ist, sollten Sie auf die Seite bei GitHub zurückkehren, auf der Sie Ihr Repository erstellt haben, die Seite aktualisieren und feststellen, dass Ihre gesamte Anwendung nun hochgeladen wurde. Sie können Ihr Repository weiter aktualisieren, wenn sich Dateien ändern, indem Sie diesen Hinzufügen/Commit/Push-Zyklus verwenden.

Dies ist ein guter Punkt, um ein Backup Ihres "Vanille"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf einem beliebigen Hosting-Dienst (oder für die Entwicklung) nützlich sein könnten, könnten andere es nicht sein. Sie können dies mit `git` in der Befehlszeile tun:

```bash
# Create branch vanilla_deployment from the current branch (main)
git checkout -b vanilla_deployment

# Push the new branch to GitHub
git push origin vanilla_deployment

# Switch back to main
git checkout main

# Make any further changes in a new branch
git pull upstream main # Merge the latest changes from GitHub
git checkout -b my_changes # Create a new branch
```

> [!NOTE]
> Git ist unglaublich mächtig!
> Um mehr zu erfahren, sehen Sie sich [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) an.

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Glitch](https://glitch.com/) hostet.

### Warum Glitch?

Wir entscheiden uns aus mehreren Gründen für die Verwendung von Glitch:

- Glitch bietet einen [kostenlosen Starterplan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass er für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Lastverteiler, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Glitch lernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen schränken uns bei der Verwendung von Glitch für das Tutorial nicht wirklich ein.
  Zum Beispiel:

  - Der Starterplan bietet nur 1000 "Projekstunden" pro Monat, die monatlich zurückgesetzt werden.
    Dies wird verwendet, wenn Sie die Site aktiv bearbeiten oder wenn jemand darauf zugreift.
    Wenn niemand auf die Site zugreift oder sie bearbeitet, schläft sie.
  - Die Starterplan-Umgebung bietet eine begrenzte Menge an Container-RAM und Speicherplatz.
    Für das Tutorial gibt es mehr als genug, insbesondere weil unsere Datenbank anderswo gehostet wird.
  - Eigene Domains werden zurzeit nicht gut unterstützt.
  - Weitere Einschränkungen finden Sie auf der [Glitch Technische Einschränkungen-Seite](https://help.glitch.com/s/article/Technical-Restrictions).

Während Glitch für das Hosting dieser Demonstration angemessen ist, sollten Sie sich die Zeit nehmen festzustellen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Oberfläche, in der Sie Projekte aus Startvorlagen erstellen oder von GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können. Wenn Sie Änderungen vornehmen, wird das Projekt erstellt und in seinem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.

Wie dies alles "unter der Haube" funktioniert, ist ein Geheimnis — Glitch sagt nichts dazu. Was klar ist, ist, dass solange Sie eine halbwegs standardmäßige Node.js-Webanwendung erstellen (zum Beispiel durch die Verwendung von `package.json` für Ihre Abhängigkeiten) und nicht mehr Ressourcen verbrauchen als in den [technischen Einschränkungen](https://help.glitch.com/s/article/Technical-Restrictions) angegeben, Ihre Anwendung "einfach funktionieren" sollte.

Sobald die Anwendung läuft, kann sie für die Produktion mithilfe von [privaten Daten](https://help.glitch.com/s/article/Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden. Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem vorherigen Abschnitt erinnern, die Methode war, mit der wir unsere Anwendung konfiguriert haben, um die Datenbank-URL zu erhalten. Beachten Sie, dass die Variablen _geheim_ sind: die `.env`-Datei sollte nicht in Ihr GitHub-Repository eingeschlossen werden.

Die Glitch-Bearbeitungsansicht bietet auch _Terminal_-Zugriff auf die Web-App-Umgebung, die Sie wie auf Ihrem lokalen Computer nutzen können.

Das ist alles, was Sie für den Start brauchen.

Als nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Ein Glitch-Konto erstellen

Um Glitch zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Sign up** Schaltfläche in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie werden dann in das Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Node.js-Versionen Fehlerbehebung

Hosting-Anbieter unterstützen in der Regel eine größere Version aktueller Node.js-Veröffentlichungen. Wenn die genaue "minor" Version, die Sie in Ihrer `package.json` Datei angegeben haben, nicht unterstützt wird, greifen sie normalerweise auf die nächstgelegene unterstützte Version zurück (und oft funktioniert das einfach).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16. Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die in Ihrer `package.json` Datei verwendete Version wie gezeigt reduzieren. Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch plant, Node zu aktualisieren und in Zukunft besser zu aktualisieren — und möglicherweise ist diese Versionseinschränkung aufgehoben, wenn Sie dies lesen. Anstatt die `node`-Version herunterzustufen, könnten Sie Ihr Projekt hochladen, um zu sehen, ob es gebaut wird. Wenn es Fehler gibt und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node`-Version auf `>=v16` in Ihrer `package.json` im Glitch-Editor zu setzen.

> [!NOTE]
> Sie können auch die unterstützten Versionen überprüfen, indem Sie den folgenden Befehl in das Terminal eines Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellen auf Glitch von GitHub

Als nächstes importieren wir das Bibliotheksprojekt von GitHub. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Site und dann die **New project** Schaltfläche. Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch Website-Dashboard, das die Schaltfläche "Neues Projekt" und ein Popup-Menü mit der Option "Importieren von GitHub" zeigt](glitch_new_project_import_github.png)

Ein Popup wird angezeigt. Geben Sie die URL Ihres GitHub-Bibliotheksrepositories in das Popup ein und drücken Sie **OK**. Unten haben wir das Repository für das bearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des zu importierenden GitHub-Repos](glitch_new_project_github_repo_url.png)

Glitch importiert das Projekt und zeigt Benachrichtigungen über den Fortschritt an. Nach Abschluss zeigt es die Bearbeitungsansicht für das neue Projekt an, wie unten gezeigt.

![Glitch-Bearbeitungsansicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Site-URL erhalten, indem Sie die **Share**-Schaltfläche auswählen.

![Glitch-Bearbeitungsansicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie ein neues Browser-Tab und kopieren Sie den Link für die Live-Site in die Adressleiste. Die lokale Bibliothekssite sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und > Ihr Projekt synchron zu halten.

### Verwenden einer Produktions-MongoDB-Datenbank

Für die Produktion sollten Sie eine andere Datenbank als für die Entwicklung einrichten. Während Glitch nur SQLite-Datenbanken hostet (und wir so eingerichtet sind, dass wir MongoDB verwenden), bieten viele andere Sites MongoDB-Datenbanken als Dienst an.

Eine Option ist, den Anweisungen zum [Einrichten der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) aus dem vorherigen Tutorial zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank der Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Bearbeitungsansicht für das Projekt. Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein. Die Site aktualisiert sich, sobald Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/s/article/Adding-Private-Data) gedacht und wurde beim Import nach Glitch automatisch erstellt.
> Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie werden sich aus einem vorhergehenden Abschnitt erinnern, dass wir die [NODE_ENV auf "production" setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Dies tun wir in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe Screenshot im vorherigen Abschnitt).

Die lokale Bibliotheksanwendung ist nun eingerichtet und für die Produktion konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen und sie sollte so funktionieren wie während der Entwicklung (allerdings mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express Tutorial Part 3: Using a Database (with Mongoose) Testing — create some items](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) besprochen.

### Debugging von Express-Apps auf Glitch

Glitch ermöglicht effektives Debugging. Einige Dinge, die Sie tun können, sind:

- Wählen Sie die Logs-Schaltfläche unten in der Bearbeitungsansicht aus, um Protokollinformationen von Ihrem Server zu sehen, wie z.B. Konsolenprotokollausgabe.
- Wählen Sie die Terminal-Schaltfläche unten in der Bearbeitungsansicht aus, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen.
  Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debugging in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keinen komplett kostenlosen Starter-Tarif mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und eine bessere Option für einige Benutzer sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Lastverteiler, Reverse Proxies usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf das Erlebnis bei der Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar.
  Während Railway einige hervorragende neue Funktionen hat, nutzen viele beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen festzustellen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und Umgebungen basierend auf ihrer Verwendung von "übliche Konventionen" automatisch erkennen und installieren kann. Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben und kann den verwendeten Paketmanager anhand der "Lock"-Datei ermitteln. Beispielsweise, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass npm zur Installation der Pakete verwendet werden soll, während wenn es **yarn.lock** findet, es weiß, dass yarn verwendet wird. Nach der Installation aller Abhängigkeiten sucht Railway nach Skripts mit den Namen "build" und "start" in der Paketdatei und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Web-Frameworks in verschiedenen Programmiersprachen zu erkennen.
> Sie müssen nichts Weiteres für dieses Tutorial wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen unter [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich selbst mithilfe von Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe einer Variablen erhalten. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tool. Das CLI ermöglicht es, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository aus dem lokalen Branch auf die Live-Website hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und zu holen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit dem CLI Ihr lokales Projekt mit den gleichen Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie benötigen, um die App bei Railway zu installieren. Als Nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Ein Railway-Konto erstellen

Um Railway zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann Ihre E-Mails überprüfen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellen auf Railway von GitHub

Als Nächstes richten wir Railway so ein, dass wir unsere Bibliothek von GitHub bereitstellen. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Site und dann die **New Project**-Schaltfläche:

![Railway Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage zu bereitstellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und einer Vielzahl von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup, das Bereitstellungsoptionen mit hervorgehobener Option "Bereitstellen aus GitHub-Repo" zeigt](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup, das GitHub-Repos zeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, in dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt auf der Registerkarte Bereitstellungen anzeigen. Sobald die Bereitstellung erfolgreich abgeschlossen ist, wird ein Bildschirm wie unten angezeigt.

![Railway-Dashboard, das die Registerkarte "Bereitstellungen" für das bereitgestellte Projekt zeigt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Settings_ (Einstellungen) aus, scrollen Sie dann zum Abschnitt Domains und drücken Sie die **Generate Domain**-Schaltfläche.

![Railway-Projekteinstellungen-Registerkarte mit einer Schaltfläche zum Generieren einer Domain](railway_project_generate_domain.png)

Dies wird die Site veröffentlichen und die Domain anstelle der Schaltfläche einfügen, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte, die einen Link zur lokalen Bibliotheksseite zeigt](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass die lokale Bibliothek standardmäßig mit Ihren Entwicklungsdaten geöffnet wird, da wir keine Produktionsdatenbank angegeben haben.

### Bereitstellen und Verbinden einer MongoDB-Datenbank

Anstelle unserer Entwicklungsdaten, lassen Sie uns als nächstes eine Produktions-MongoDB-Datenbank erstellen. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl es nichts daran hindert, es in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktdaten zu verwenden, genau wie Sie für die Entwicklungsdatenbank.

Wählen Sie auf Railway im oberen Menü der Site die **Dashboard** Option und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Dienstdetails festzulegen). Wählen Sie die **New**-Schaltfläche, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit markierter Schaltfläche "Neuer Dienst"](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie gefragt werden, welcher Diensttyp hinzugefügt werden soll:

![Railway-Popup zeigt Optionen für einen neuen Dienst wie Datenbank, GitHub-Repo, leeren Dienst usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um das Hinzufügen der Datenbank zu starten.

![Railway-Popup zeigt verschiedene auswählbare Datenbanken: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereitstellen. Nach Abschluss sehen Sie nun beide Dienste — Anwendung und Datenbank — in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen. Öffnen Sie die Registerkarte _Variablen_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm zeigt die URL, die benötigt wird, um mit der Datenbank zu verbinden](railway_mongodb_connect.png)

Um dies der Bibliotheksanwendung zugänglich zu machen, müssen wir es mithilfe einer Umgebungsvariable zur Anwendung hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variablen_ und drücken Sie die **Neue Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die kopierte Verbindungs-URL für die Datenbank ein (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies wird ungefähr so wie der unten gezeigten Bildschirm aussehen.

![Railway-Website-Variablen-Bildschirm, während die MONGODB_URI-Variable und die Adresse hinzugefügt werden](railway_variables_database_url.png)

Wählen Sie **Hinzufügen** aus, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie nun die Startseite überprüfen, sollten null Werte für Ihre Objektzahlen angezeigt werden, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie werden sich aus einem vorhergehenden Abschnitt erinnern, dass wir die [NODE_ENV auf "production" setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Dies können wir im gleichen Bildschirm tun, wo wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie die Registerkarte _Variablen_, wo Sie sehen können, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **Neue Variable**-Schaltfläche.

![Railway-Variablen-Registerkarte mit einer hervorgehobenen Schaltfläche "Neue Variable"](railway_variables_new.png)

Geben Sie `NODE_ENV` als den Namen der neuen Variable und `production` als den Wert der Umgebung ein. Drücken Sie dann die **Hinzufügen**-Schaltfläche.

![Railway-Variablen-Registerkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist nun eingerichtet und für die Nutzung in der Produktion konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen und sie sollte so funktionieren wie während der Entwicklung (allerdings mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express Tutorial Part 3: Using a Database (with Mongoose) Testing — create some items](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) besprochen.

### Installieren des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigsten Operationen sind das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf ein zugeordnetes Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit den gleichen Einstellungen, die Sie auf dem Produktionsserver haben.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie den folgenden Befehl in ein Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den Logs-Befehl, um das Ende von Logs anzuzeigen (ein vollständigeres Log ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials über die Fertigungsausführung von Express-Apps in die Produktion und auch der Serie von Tutorials zum Arbeiten mit Express. Wir hoffen, Sie haben sie nützlich gefunden. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Produktionsbest-Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentationen)
- [Produktionsbest-Praktiken: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentationen)
- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentationen)
  - [Deploying Node.js Applications on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentationen)
  - [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentationen)
  - [Optimizing Node.js Application Concurrency](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentationen)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentationen)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentationen)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentationen)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentationen)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
