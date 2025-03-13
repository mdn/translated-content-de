---
title: "Express-Tutorial Teil 7: Bereitstellen in der Produktion"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Webseite erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, sodass Bibliotheksmitarbeiter und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet eine Übersicht, wie Sie einen Host finden können, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Website für die Produktion bereitzumachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo und wie Sie eine Express-App in der Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Seite fertig ist (oder „fertig genug“, um mit öffentlichen Tests zu beginnen), müssen Sie diese an einem zugänglicheren und öffentlich zugänglichen Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Seite im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsfähige Infrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl eines Hosting-Anbieters, einen kurzen Überblick über das, was Sie tun müssen, um Ihre Express-App bereitzumachen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website beim Cloud-Hosting-Service [Railway](https://railway.com/) installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Serverrechner bereitgestellt wird, auf dem Sie Ihre Website zur externen Nutzung betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprachen-Laufzeit und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxys, Load Balancers etc.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Serverrechner könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem „virtuellen“ Computer) im Rechenzentrum Ihres Hosting-Anbieters ausgeführt wird. Der Fernserver bietet in der Regel ein garantiertes Maß an Computerressourcen (z. B. CPU, RAM, Speicherkapazität usw.) und Internetverbindung zu einem bestimmten Preis.

Diese Art von fernzugänglicher Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuninstallieren, auf das Sie dann die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter bieten die Möglichkeit, vollständigere Umgebungen auszuwählen, die möglicherweise eine vollständige Node-Einrichtung enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und, wenn Sie Teile des Systems aktualisieren müssen, wissen, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express im Rahmen eines _Platform as a Service_ (_PaaS_) Angebots. Bei der Nutzung dieser Art von Hosting müssen Sie sich keine Sorgen um den größten Teil Ihrer Produktionsumgebung (Server, Load Balancer usw.) machen, da die Hostplattform diese für Sie übernimmt. Dies macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Serverinfrastrukturen.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS bevorzugen, während andere den reduzierten Wartungsaufwand und die einfachere Skalierung von PaaS schätzen werden. Wenn Sie anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollte dieser Anleitungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. bereitstellen. Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) arbeiten. Diese Anbieter bieten verschiedene Umgebungstypen (IaaS, PaaS) und unterschiedliche Stufen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienstleistungen und Preise können sich mit der Zeit ändern. Während wir im Folgenden einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie sich für einen Hosting-Anbieter entscheiden.

Einige Dinge, die Sie bei der Wahl eines Hosts beachten sollten:

- Wie stark Ihre Website voraussichtlich frequentiert wird und die Kosten für die benötigten Daten- und Computerressourcen, um dieser Nachfrage gerecht zu werden.
- Unterstützungsebene für horizontale (Hinzufügen weiterer Maschinen) und vertikale (Upgrade auf leistungsfähigere Maschinen) Skalierung und die damit verbundenen Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren hat und daher von wo der Zugriff voraussichtlich am schnellsten ist.
- Historische Betriebs- und Ausfallzeiten des Hosts.
- Bereitgestellte Tools zur Verwaltung der Seite – sind sie einfach zu verwenden und sicher (z. B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von „Live-Stunden“ an oder bieten nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, für die Sie sonst bezahlen müssten.
- Ob die „kostenlose“ Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht, wenn Sie gerade anfangen, ist, dass es viele Websites gibt, die „kostenlose“ Computerumgebungen bereitstellen, die zur Bewertung und zum Testen gedacht sind.
Diese sind normalerweise recht ressourcenschwache Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einem Einführungzeitraum ablaufen können oder andere Beschränkungen haben.
Sie eignen sich jedoch hervorragend zum Testen von Websites mit geringem Datenverkehr in einer gehosteten Umgebung und können einen einfachen Wechsel zu einem kostenpflichtigen Dienst ermöglichen, wenn Ihre Website stärker frequentiert wird.
Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine „Basis-“ oder „Hobby-“ Stufe an, die für kleine Produktionswebsites gedacht ist und die nützlichere Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele beliebter Hosting-Anbieter, die eine relativ preisgünstige Basiscomputerschicht (im Bereich von 5 bis 10 USD pro Monat) anbieten.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit der wichtigste Gesichtspunkt ist.

## Ihre Website bereitmachen für die Veröffentlichung

Die Hauptpunkte, über die Sie nachdenken sollten, wenn Sie Ihre Website veröffentlichen, sind Websicherheit und Performance.
Das Mindeste, was Sie tun sollten, ist, die Datenbankkonfiguration so zu ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldedaten sichern, die Stapelüberlauf-Meldungen zu entfernen, die während der Entwicklung auf Fehlerseiten angezeigt werden, Ihr Logging aufzuräumen und die geeigneten Header zu setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumentationen – siehe [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktions-Best-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Anmeldedaten in **app.js** fest codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, die wir ungern preisgeben oder beschädigt sehen, besteht kein besonderes Risiko beim Leaken dieser Details.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit personenbezogenen Benutzerdaten, ist der Schutz Ihrer Datenbank-Anmeldedaten sehr wichtig.

Aus diesem Grund möchten wir für die Produktion eine andere Datenbank verwenden als für die Entwicklung, und auch die Anmeldedaten der Produktionsdatenbank vom Quellcode trennen, sodass sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einrichtung von Umgebungsvariablen über eine Weboberfläche unterstützt (was viele tun), ist eine Möglichkeit, dies zu tun, den Server die Datenbank-URL aus einer Umgebungsvariablen holen zu lassen.
Im Folgenden ändern wir die LocalLibrary-Website so, dass die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen gelesen wird, falls diese definiert wurde, und andernfalls die Entwicklungsdatenbank-URL verwendet wird.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird in etwa wie folgt aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen namens `MONGODB_URI` zu holen, falls diese gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere verbreitete Methode, um Produktions-Datenbank-Anmeldedaten vom Quellcode zu trennen, besteht darin, sie aus einer `.env` Datei zu lesen, die separat im Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm [dotenv](https://www.npmjs.com/package/dotenv) Modul ausgelesen werden).

### Setzen von NODE_ENV auf 'production'

Wir können Stapelüberflüsse auf Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Zusätzlich zu weniger umfangreichen Fehlermeldungen speichert das Setzen der Variable auf _production_ Vorlagenansichten und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die App-Performance um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder dem OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie an Ihrer Umgebungseinrichtung vornehmen, nicht an Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie dies für unser Hosting-Beispiel unten eingestellt wird.

### Angemessenes Logging

Logging-Aufrufe können sich auf eine Website mit hohem Datenverkehr auswirken. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z. B. Verkehrsüberwachung oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge des hinzugefügten Loggings zu minimieren, die zu Debugging-Zwecken hinzugefügt wurde.

Eine Möglichkeit, das Debug-Logging in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), das Ihnen ermöglicht, welches Logging ausgeführt wird, indem Sie eine Umgebungsvariable setzen.
Das folgende Codefragment zeigt, wie Sie "author" Logging einrichten könnten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Logs dieses Objekts angezeigt.

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

Anschließend können Sie eine bestimmte Menge an Logs aktivieren, indem Sie sie als durch Kommas getrennte Liste in der Umgebungsvariablen `DEBUG` angeben.
Sie können die Variablen zum Anzeigen von author- und book-Logs wie gezeigt setzen (Wildcard-Zeichen werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können Loggings ersetzen, die Sie zuvor möglicherweise mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()` Aufrufe in Ihrem Code durch Loggings über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, wie sich dies auf das Logging auswirkt.

Wenn Sie die Website-Aktivität protokollieren müssen, können Sie eine Loggingbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort, die an einen Client gesendet wird, komprimieren und dadurch die Zeit erheblich reduzieren, die der Client benötigt, um die Seite zu erhalten und zu laden. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Website mit [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und laden Sie die Komprimierungsbibliothek wie gezeigt. Fügen Sie die Komprimierungsbibliothek mit der `use()` Methode zur Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten – in diesem Fall alle!)

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
> Bei einer Website mit hohem Datenverkehr in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um sich gegen bekannte Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann die entsprechenden HTTP-Header setzen, die helfen, Ihre App vor bekannten Web-Schwachstellen zu schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen zu den Headern, die es setzt, und den Schwachstellen, die es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und laden Sie die _helmet_ Bibliothek wie gezeigt.
Fügen Sie dann das Modul mit der `use()` Methode zur Middleware-Kette hinzu.

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

Wir hätten normalerweise einfach `app.use(helmet());` eingefügt, um den _Teil_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Websites sinnvoll sind.
In der [LocalLibrary-Basisvorlage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) enthalten wir jedoch einige Bootstrap- und jQuery-Skripte.
Diese verletzen die _Standard-_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von Helmet, die das Laden von Cross-Site-Skripten nicht erlaubt.
Um das Laden dieser Skripte zu ermöglichen, ändern wir die Helmet-Konfiguration, sodass es CSP-Direktiven setzt, die das Laden von Skripten von den angegebenen Domains erlauben.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie die [Anleitung zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) befolgen.

### Fügen Sie Ratenbeschränkung zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Website gestellt werden könnten, wie z. B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das sich nicht wie erwartet verhält.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können und Ihren Server verlangsamen, könnten Ihnen auch Kosten für den zusätzlichen Datenverkehr entstehen.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Gruppe von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und laden Sie die _express-rate-limit_ Bibliothek wie gezeigt.
Fügen Sie dann das Modul mit der `use()` Methode zur Middleware-Kette hinzu.

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

Der obige Befehl begrenzt alle Anfragen auf 20 pro Minute (Sie können dies nach Bedarf ändern).

> [!NOTE]
> Drittdienstleister wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie fortschrittlicheren Schutz vor Denial-of-Service- oder anderen Angriffen benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um Abhängigkeiten der Applikation und die Einstiegsdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version.
Sie können die bei der Entwicklung verwendete Node-Version ermitteln, indem Sie den Befehl:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json**, und fügen Sie diese Information als **engines > node** wie gezeigt hinzu (unter Verwendung der Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder einer neueren Version zu verwenden.

Beachten Sie, dass es andere Möglichkeiten geben kann, die Node-Version für verschiedene Hosting-Dienste anzugeben, aber der **package.json** Ansatz wird weithin unterstützt.

#### Abhängigkeiten beschaffen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Seite erneut testen und sicherstellen, dass sie von unseren Änderungen nicht betroffen ist.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Seite aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und prüfen Sie, ob sich die Seite noch so verhält, wie Sie es erwarten.

### Erstellen eines Anwendungs-Repositorys auf GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloud-basierten Quellcode-Verwaltungsplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek ein und verwenden das **git** Werkzeug, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools gute Softwareentwicklungspraxis ist, da sie es Ihnen ermöglicht, Änderungen auszuprobieren und bei Bedarf zwischen Ihren Experimenten und "bekanntem, gutem Code" zu wechseln!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+** Link in der oberen Toolbar und wählen **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht zwingend sind, werden sie stark empfohlen.

   - Geben Sie einen neuen Repository-Namen (z. B. _express-locallibrary-tutorial_) und eine Beschreibung ein (z. B. "Local Library Webseite geschrieben in Express (Node)").
   - Wählen Sie **Node** in der Auswahlliste _Add .gitignore_ aus.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahlliste _Add license_ aus.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugriff "Public" macht allen Quellcode – einschließlich Ihres Datenbank-Benutzernamens und Passwortes – für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldedaten _nur_ aus Umgebungsvariablen liest und keine Anmeldedaten fest codiert sind.
   >
   > Andernfalls wählen Sie die "Private" Option, um nur ausgewählten Personen den Zugriff auf den Quellcode zu ermöglichen.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf die grüne Schaltfläche **Clone or download** auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfenster, das sich öffnet.
   Wenn Sie den Repositories-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Nun, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
2. Öffnen Sie ein Befehlszeilenfenster/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungs-Quellen in den Repo-Ordner, fügen Sie sie mit _git_ dem Repo hinzu und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeits-Dateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Befehlszeilenfenster/Terminal und verwenden Sie den `add` Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status` Befehl, um zu prüfen, ob alle Dateien, die Sie `commit` wollen, korrekt sind (Sie möchten Quellcode-Daten hinzufügen, nicht Binärdateien, temporäre Dateien etc.).
   Es sollte ein wenig wie die folgende Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit`ten Sie die Dateien zu Ihrem lokalen Repo.
   Dies entspricht der Bestätigung der Änderungen und deren offizielle Integration in das lokale Repo.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. An dieser Stelle ist das entfernte Repo nicht verändert worden.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem folgenden Befehl mit dem entfernten GitHub-Repo zu synchronisieren (`push`).

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zur Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihrer „Vanille“ zu erstellen – obwohl einige der Änderungen, die wir in den folgenden Abschnitten vornehmen, nützlich für die Bereitstellung auf jedem Hosting-Dienst sein könnten (oder für die Entwicklung), andere möglicherweise nicht.
Sie können dies auf der Befehlszeile mit `git` tun:

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
> Um mehr zu erfahren, siehe [Git lernen](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Glitch](https://glitch.com/) hostet.

### Warum Glitch?

Wir wählen Glitch aus mehreren Gründen:

- Glitch hat einen [kostenlosen Starterplan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Dass es erschwinglich für alle Entwickler ist, ist für MDN sehr wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie dies nicht tun müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxys usw. kümmern zu müssen, macht es viel einfacher, anzufangen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Glitch lernen, lassen sich übertragen.
- Die Einschränkungen des Dienstes und des Plans beeinträchtigen uns bei der Verwendung von Glitch für das Tutorial nicht wirklich.
  Zum Beispiel:

  - Der Starterplan bietet nur 1000 "Projektstunden" pro Monat, die monatlich zurückgesetzt werden.
    Dies wird verwendet, wenn Sie die Seite aktiv bearbeiten oder if jemand darauf zugreift.
    Wenn niemand auf die Seite zugreift oder diese bearbeitet wird, schläft sie.
  - Die Starterplan-Umgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz.
    Es gibt mehr als genug für das Tutorial, insbesondere weil unsere Datenbank woanders gehostet wird.
  - Benutzerdefinierte Domains werden nicht gut unterstützt (zum Zeitpunkt der Erstellung).
  - Weitere Einschränkungen finden sich auf der [Seite zu technischen Einschränkungen von Glitch](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions).

Obwohl Glitch für die Hosting-Demonstration geeignet ist, sollten Sie sich die Zeit nehmen, um festzustellen, ob es [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Schnittstelle, in der Sie Projekte aus Startervorlagen erstellen oder aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können.
Wenn Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierte Container kompiliert und ausgeführt.

Wie das alles „unter der Haube“ funktioniert, ist ein Rätsel – Glitch sagt es nicht.
Klar ist, dass solange Sie eine recht standardisierte nodejs-Webanwendung erstellen (z. B. durch die Verwendung von `package.json` zur Verwaltung Ihrer Abhängigkeiten), und nicht mehr Ressourcen verbrauchen, als in den [technischen Einschränkungen](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) aufgeführt sind, Ihre Anwendung „einfach funktionieren“ sollte.

Sobald die Anwendung ausgeführt wird, kann sie für die Produktion eingerichtet werden, indem private Daten in einer `.env` Datei angegeben werden.
Die geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, welche, wie Sie sich aus einem vorherigen Abschnitt erinnern, ist, wie wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL zu erhalten.
Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihr GitHub-Repository aufgenommen werden.

Die Glitch-Bearbeitungsansicht bietet auch _Terminal_-Zugriff auf die Web-App-Umgebung, die Sie verwenden können, um mit der Web-App so zu arbeiten, als würde sie auf Ihrem lokalen Computer laufen.

Das ist alles, was Sie an Übersicht brauchen, um anzufangen.
Als Nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Glitch-Konto erstellen

Um Glitch zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die Schaltfläche **Sign up** in der oberen Toolbar.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie werden dann in das Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Fehlerbehebung bei der Node.js-Version

Hosting-Anbieter unterstützen häufig eine Hauptversion der neuesten Node.js-Releases.
Wenn die genaue "Neben"-Version, die Sie in Ihrer `package.json` Datei angegeben haben, nicht unterstützt wird, gehen sie in der Regel zur nächsten unterstützten Version über (und oft funktioniert das einfach).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16.
Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die in Ihrer `package.json` Datei verwendete Version wie gezeigt reduzieren.
Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, node zu aktualisieren und in Zukunft besser auf dem neuesten Stand zu halten](https://blog.glitch.com/post/rebuilding-glitch/) – und es mag sein, dass der Versionslimitierung nicht mehr existiert, wenn Sie diesen Artikel lesen.
Anstatt die `node` Version herunterzustufen, könnten Sie Ihr Projekt hochladen, um zu sehen, ob es gebaut wird.
Wenn Fehler auftreten und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node` Version in der Glitch-Editor `package.json` auf `>=v16` zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Auf Glitch bereitstellen von GitHub

Als Nächstes importieren wir das Bibliotheksprojekt von GitHub.
Wählen Sie zuerst die **Dashboard** Option im oberen Menü der Seite aus und klicken Sie dann auf die Schaltfläche **New project**.
Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch-Website-Dashboard mit Schaltfläche für neues Projekt und Pop-up-Menü mit Option "Import from GitHub"](glitch_new_project_import_github.png)

Ein Popup erscheint.
Geben Sie die URL Ihres GitHub-Bibliotheks-Repositorys in das Popup ein und drücken Sie **OK**.
Unten haben wir das Repo für das durchgearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des zu importierenden GitHub-Repos](glitch_new_project_github_repo_url.png)

Glitch importiert dann das Projekt und zeigt Fortschrittsmeldungen an.
Nach Abschluss wird die Bearbeitungsansicht für das neue Projekt angezeigt, wie unten gezeigt.

![Glitch-Editoransicht für ein importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Site-URL erhalten, indem Sie die Schaltfläche **Share** auswählen.

![Glitch-Editoransicht für ein importiertes Projekt](glitch_share_project.png)

Öffnen Sie ein neues Browser-Tab und kopieren Sie den Link für die Live-Seite in die Adressleiste.
Die LocalLibrary-Seite sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt zu synchronisieren.

### Verwenden Sie eine Produktions-MongoDB-Datenbank

Sie sollten für die Produktion eine andere Datenbank verwenden als für die Entwicklung.
Obwohl Glitch nur SQLite-Datenbanken hostet (und wir eingerichtet sind, um MongoDB zu verwenden), bieten viele andere Websites MongoDB-Datenbanken als Dienst an.

Eine Möglichkeit besteht darin, den Anweisungen zum [Einrichten der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) aus einem früheren Teil des Tutorials zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env` Datei in der Editoransicht für das Projekt.
Geben Sie die Datenbank-URL-Variablen `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Website aktualisiert sich, während Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für geheime Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [geheime Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) vorgesehen und wurde automatisch beim Import in Glitch erstellt.
> Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir tun dies in derselben Datei, in der wir die `MONGODB_URI` Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV` Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die Local Library-Anwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte so funktionieren wie während der Entwicklung (jedoch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten für Tests hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Tests — einige Einträge erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Fehlerbehebung bei Express-Apps auf Glitch

Glitch ermöglicht effektives Debugging.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Schaltfläche "Logs" am unteren Rand der Bearbeitungsansicht, um Log-Informationen von Ihrem Server, wie z. B. Konsolen-Log-Ausgaben, zu sehen.
- Wählen Sie die Schaltfläche "Terminal" am unteren Rand der Bearbeitungsansicht, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Werkzeuge in der Umgebung auszuführen.
  Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debugging in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat kein vollständig kostenloses Starter-Level mehr.
> Wir haben diese Anleitungen beibehalten, weil Railway einige großartige Funktionen besitzt und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie dies nicht tun müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxys usw. kümmern zu müssen, macht es viel einfacher, anzufangen.
- Railway hat einen [Fokus auf Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und milderen Lernkurve führt als bei vielen anderen Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Railway lernen, lassen sich übertragen.
  Obwohl Railway einige hervorragende neue Funktionen bietet, verwenden viele andere beliebte Hosting-Dienste ähnliche Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Ihnen Railway gefällt, ist die Preisgestaltung vorhersehbar und die Skalierung Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um herauszufinden, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und die Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und Umgebungen basierend auf deren Verwendung von "Standard-Konventionen" automatisch erkennen und installieren kann.
Zum Beispiel erkennt Railway Node-Anwendungen, da sie eine **package.json** Datei besitzen, und kann den für den Build verwendeten Paketmanager aus der "Lock"-Datei bestimmen.
Zum Beispiel, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ verwendet wird, um die Pakete zu installieren, während wenn es **yarn.lock** findet, weiß es, dass _yarn_ verwendet wird.
Nachdem alle Abhängigkeiten installiert wurden, sucht Railway nach Skripts mit den Namen "build" und "start" in der Paketdatei und verwendet diese, um den Code zu bauen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks in verschiedenen Programmiersprachen zu erkennen.
> Sie müssen nichts weiter für dieses Tutorial wissen, aber Sie können mehr über Optionen zur Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse mit einer Variablen abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Werkzeug.
Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu assoziieren, das Repository vom lokalen Branch zur Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist alles, was Sie an Übersicht brauchen, um die App auf Railway zu deployen.
Als Nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Railway-Konto erstellen

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Toolbar.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann in Ihre E-Mails gehen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Auf Railway bereitstellen von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard** Option im oberen Menü der Seite aus und klicken Sie dann auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit einer Schaltfläche für neue Projekte](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zu deployen, die zuerst in Ihrem GitHub-Konto erstellt wurde, und einer Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup mit den Bereitstellungsoptionen mit hervorgehobener Option "Deploy from GitHub repo"](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup, das die GitHub-Repos zeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt und deployt dann Ihr Projekt, wobei der Fortschritt auf der Registerkarte Bereitstellungen angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen wurde, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Dashboard, das die Registerkarte Bereitstellungen für das bereitgestellte Projekt zeigt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Settings_ aus, scrollen Sie dann nach unten zum Abschnitt Domains und drücken Sie die Schaltfläche **Generate Domain**.

![Railway-Projekteinstellungen-Registerkarte, die die Schaltfläche zum Generieren einer Domain zeigt](railway_project_generate_domain.png)

Dies veröffentlicht die Website und setzt die Domain an die Stelle der Schaltfläche, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte, die einen Link zur Local Library-Site zeigt](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen.
Beachten Sie, dass wir kein Produktion-Datenbank spezifiziert haben, die Local Library daher mit Ihren Entwicklungsdaten geöffnet wird.

### Einrichtung und Verbindung einer MongoDB-Datenbank

Anstatt unsere Entwicklungsdaten zu verwenden, lassen Sie uns als Nächstes eine Produktions-MongoDB-Datenbank erstellen, um sie stattdessen zu verwenden.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen, oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, wie Sie es für die Entwicklungsdatenbank getan haben.

Auf Railway, wählen Sie die **Dashboard** Option aus dem oberen Menü der Seite und wählen Sie dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Dienstdetails festzulegen).
Wählen Sie die Schaltfläche **New** aus, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche für neuen Dienst](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn die Art des hinzuzufügenden Dienstes abgefragt wird:

![Railway-Popup, das Optionen für einen neuen Dienst zeigt, wie Datenbank, GitHub-Repo, leeren Dienst etc.](railway_database_add.png)

Wählen Sie dann **Add MongoDB** aus, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Popup, das verschiedene Datenbanken zeigt, die ausgewählt werden können: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway erstellt dann einen Dienst mit einer leeren Datenbank im selben Projekt.
Nach Abschluss sehen Sie nun sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie die _Variablen_ Registerkarte und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungsbildschirm, der die zum Verbinden mit der Datenbank benötigte URL zeigt](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es als Umgebungsvariable zum Anwendungsprozess hinzufügen.
Öffnen Sie zunächst den Anwendungsdienst.
Dann wählen Sie die _Variablen_ Registerkarte aus und drücken die Schaltfläche **Neue Variable**.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL, die Sie für die Datenbank kopiert haben, ein (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der wir [die Anwendung konfiguriert](#datenbankkonfiguration) haben, um die Datenbankadresse zu lesen).
Dies wird in etwa wie der unten gezeigte Bildschirm aussehen.

![Railway-Website-Variablenscreen während des Hinzufügens der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte es null Werte für Ihre Objekte zählen, da die oben genannten Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies auf dem gleichen Bildschirm tun, auf dem wir die `MONGODB_URI` Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst.
Dann wählen Sie die _Variablen_ Registerkarte, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken die Schaltfläche **Neue Variable**.

![Railway-Variablen-Registerkarte mit hervorgehobener Schaltfläche für neue Variable](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable ein und `production` als Namen des Environment.
Drücken Sie dann die **Hinzufügen**-Schaltfläche.

![Railway-Variablen-Registerkarte, auf der die neue NODE_ENV-Variable auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Local Library-Anwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte so funktionieren wie während der Entwicklung (jedoch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten für Tests hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Tests — einige Einträge erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Installation des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers zu einem zugeordneten Railway-Projekt (ohne es auf GitHub hochzuladen) und das Ausführen Ihres Projekts lokal mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie die folgende Eingabe im Terminal verwenden.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den Logs-Befehl, um das Ende der Logs zu zeigen (ein vollständigeres Log ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch der Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumente)
- [Produktions-Best-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumente)
- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Einstieg auf Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumente)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumente)
  - [Heroku Node.js Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumente)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
