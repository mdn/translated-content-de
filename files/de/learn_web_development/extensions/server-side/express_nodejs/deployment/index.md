---
title: "Express Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 87365140cbd4c72b32ad87908834257db24bd713
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie auf einen öffentlichen Webserver installieren, damit Bibliothekspersonal und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zur Bereitstellung Ihrer Website finden können und was Sie tun müssen, um Ihre Website bereit für die Produktion zu machen.

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
        Lernen, wo und wie Sie eine Express-Anwendung in der Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Website fertig ist (oder "fertig genug", um mit öffentlichen Tests zu beginnen), müssen Sie sie an einem öffentlichen und zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet und Express/Node als Webserver verwendet, um Ihre Website an den lokalen Browser/das Netzwerk weiterzugeben und Ihre Website mit (unsicheren) Entwicklungseinstellungen auszuführen, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie:

- Eine Umgebung für das Hosting der Express-Anwendung wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Produktionsinfrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen bei der Auswahl einer Hosting-Site, eine kurze Übersicht über das, was Sie tun müssen, um Ihre Express-Anwendung bereit für den Einsatz in der Produktion zu machen, und ein funktionierendes Beispiel dafür, wie man die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Server-Computer bereitgestellt wird, auf dem Ihre Website für den externen Verbrauch ausgeführt wird. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprachenlaufzeit und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse Proxys, Load Balancers usw.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Server-Computer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, es ist jedoch weitaus üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Was das tatsächlich bedeutet, ist, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server wird in der Regel eine garantierte Menge an Computerressourcen (z. B. CPU, RAM, Speicher) und Internetkonnektivität zu einem bestimmten Preis bieten.

Diese Art von entfernbar zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, um ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, vollständigere Umgebungen auszuwählen, die möglicherweise eine vollständige Node-Installation umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren. Die verfügbaren Optionen können Sie jedoch auf einen unbekannten Server (oder andere Komponenten) beschränken und basieren möglicherweise auf einer älteren Version des Betriebssystems. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und, wenn Sie Teile des Systems aktualisieren müssen, eine Vorstellung davon haben, wo Sie anfangen sollen.

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_) Angebots. Mit dieser Art von Hosting müssen Sie sich keine Sorgen um den Großteil Ihrer Produktionsumgebung (Server, Load Balancer usw.) machen, da die Hosting-Plattform diese für Sie übernimmt. Das macht die Bereitstellung ganz einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und keine andere Server-Infrastruktur.

Einige Entwickler wählen die gesteigerte Flexibilität, die IaaS im Vergleich zu PaaS bietet, während andere die reduzierte Wartungsbelastung und das einfachere Skalieren von PaaS schätzen. Wenn Sie gerade erst anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und deshalb werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen hostingfreundlichen Anbieter für Node/Express wählen, sollten sie Anleitungen zur Einrichtung einer Express-Website mit unterschiedlichen Webserver-, Applikationsserver-, Reverse-Proxy-Konfigurationen usw. bereitstellen. Es gibt viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) zusammenarbeiten. Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Mengen an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige Dinge, die bei der Auswahl eines Hosts zu berücksichtigen sind:

- Wie beschäftigt Ihre Seite voraussichtlich sein wird und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu befriedigen.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und die damit verbundenen Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren hat und wo der Zugriff wahrscheinlich am schnellsten ist.
- Die historische Betriebszeit und Ausfallzeit des Hosts.
- Die Tools, die zur Verwaltung der Site bereitgestellt werden – sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von "Betriebsstunden" in bestimmten Preisstufen oder bieten nur eine geringe Speichermenge.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, für die Sie sonst bezahlen müssten.
- Ob die von Ihnen zum Ausprobieren verwendete "Frei"-Stufe im Laufe der Zeit abläuft und ob die Kosten für die Migration zu einer teureren Stufe bedeuten würden, dass es von Anfang an besser gewesen wäre, einen anderen Dienst zu verwenden!

Die gute Nachricht für Anfänger ist, dass es ziemlich viele Seiten gibt, die "kostenlose" Computerumgebungen bieten, die für Evaluierungs- und Testzwecke vorgesehen sind.
Diese sind normalerweise recht ressourcenbeschränkt/limitiert, und es ist wichtig zu beachten, dass sie nach einem Einführungszeitraum ablaufen können oder andere Einschränkungen haben.
Sie eignen sich jedoch hervorragend zum Testen von stark trafficeingeschränkten Websites in einer gehosteten Umgebung und ermöglichen eine einfache Migration zum Bezahlen von mehr Ressourcen, wenn Ihre Website beschäftigter wird.
Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basis"- oder "Hobby"-Stufe an, die für kleine Produktionsseiten vorgesehen ist und nützlichere Mengen an Rechenleistung sowie weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige grundlegende Rechenstufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich wird, könnte es sich herausstellen, dass die Skalierbarkeit der wichtigste Aspekt ist.

## Ihre Website bereit zur Veröffentlichung machen

Die Hauptsachen, die Sie beim Veröffentlichen Ihrer Website berücksichtigen sollten, sind Websicherheit und Performance.
Mindestens sollten Sie die Datenbankkonfiguration ändern, damit Sie eine unterschiedliche Datenbank für die Produktion nutzen und deren Anmeldeinformationen sichern können, die Stack-Traces, die während der Entwicklung in Fehlermeldungen enthalten sind, entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsrisiken zu vermeiden.

In den folgenden Abschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumenten – siehe [Produktionsbest Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktionsbest Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen fest in **app.js** codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, deren Offenlegung oder Beschädigung wir bedenken, besteht kein besonderes Risiko, diese Details zu verraten.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbankanmeldeinformationen sehr wichtig.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als für die Entwicklung und die Anmeldeinformationen der Produktionsdatenbank getrennt vom Quellcode halten, damit sie richtig geschützt werden können.

Wenn Ihr Hosting-Anbieter das Setzen von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele), ist eine Möglichkeit, dies zu tun, dass der Server die Datenbank-URL von einer Umgebungsvariablen erhält.
Unten modifizieren wir die LocalLibrary-Website, um die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen zu erhalten, wenn sie definiert wurde, und andernfalls die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Es wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile mit dem folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenkette aus einer Umgebungsvariablen namens `MONGODB_URI` zu erhalten, falls sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine weitere gängige Methode, um Produktionsdatenbank-Anmeldeinformationen vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mithilfe des npm [dotenv](https://www.npmjs.com/package/dotenv) Moduls gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces in Fehlermeldungen entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Neben der Erzeugung weniger ausführlicher Fehlermeldungen trägt das Setzen der Variablen auf _production_ dazu bei, Ansichten zu cachen und aus CSS-Erweiterungen generierte CSS-Dateien zu speichern. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um das Dreifache verbessern kann!

Diese Änderung kann entweder durch `export`, durch eine Umgebungsdatei oder durch das Initialisierungssystem des Betriebssystems vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrer Umgebungs-Setup vornehmen, anstelle Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir werden zeigen, wie es für unser Hosting-Beispiel unten gesetzt wird.

### Loggen Sie angemessen

Logging-Aufrufe können eine Auswirkung auf eine hoch frequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. Verkehrsaufschlüsselung oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge des Loggings für Debugging-Zwecke zu minimieren.

Eine Möglichkeit, "Debug"-Logging in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), die Ihnen ermöglicht, zu kontrollieren, welche Logging durch das Setzen einer Umgebungsvariablen durchgeführt wird.
Beispielsweise wird im folgenden Codefragment gezeigt, wie Sie "Autor"-Logging einrichten könnten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Gruppe von Logs aktivieren, indem Sie sie als durch Kommas getrennte Liste in der `DEBUG`-Umgebungsvariablen angeben.
Sie können die Variablen für die Anzeige von Autor- und Buchprotokollen wie gezeigt setzen (auch Wildcards werden unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können Loggen ersetzen, das Sie möglicherweise mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie den Einfluss, den dies auf das Logging hat.

Wenn Sie die Website-Aktivität protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen finden Sie unter: [Produktionsbest Practices: Performance und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort komprimieren, die an einen Client gesendet wird, wodurch die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich reduziert wird. Das Komprimierungsverfahren hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Site mit [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungsbibliothek wie gezeigt ein. Fügen Sie die Komprimierungsbibliothek mit der `use()` Methode zur Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten – in diesem Fall alle!)

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
> Für eine hoch frequentierte Website in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Webschwachstellen schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und vor welchen Schwachstellen es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_ Bibliothek wie gezeigt ein.
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

Wir hätten einfach `app.use(helmet());` einfügen können, um die _Untermenge_ der sicherheitsrelevanten Header hinzuzufügen, die für die meisten Sites sinnvoll sind.
Im [LocalLibrary Basis-Vorlage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) fügen wir jedoch einige Bootstrap- und jQuery-Skripte ein.
Diese verstoßen gegen das Helmets _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die das Laden von Cross-Site-Skripten nicht erlaubt.
Um das Laden dieser Skripte zu ermöglichen, passen wir die Helmets-Konfiguration so an, dass sie CSP-Direktiven setzt, um das Laden von Skripten von den angegebenen Domains zu ermöglichen.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie Ratenbegrenzungen zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Site gestellt werden könnten, wie Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das nicht wie erwartet funktioniert.
Abgesehen von Performance-Problemen, die durch zu viele Anfragen verursacht werden können und Ihren Server verlangsamen, könnten Ihnen auch die zusätzlichen Datenmengen in Rechnung gestellt werden.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Gruppe von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_ Bibliothek wie gezeigt ein.
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

Der oben dargestellte Befehl begrenzt alle Anfragen auf 20 pro Minute (Sie können dies nach Bedarf ändern).

> [!NOTE]
> Dienste von Drittanbietern wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen fortschrittlichen Schutz gegen Denial-of-Service oder andere Angriffe benötigen.

#### Node-Version setzen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Abhängigkeiten der Anwendung und die Einstiegspunktsdatei zu ermitteln.

Das einzige wichtige Element, das in unserer aktuellen **package.json** fehlt, ist die Node-Version, die von der Bibliothek benötigt wird.
Sie können die für die Entwicklung verwendete Node-Version durch Eingabe des Befehls herausfinden:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json**, und fügen Sie diese Informationen als **engines > node** wie gezeigt hinzu (unter Verwendung der Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit der gleichen Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es auf verschiedenen Hosting-Services andere Möglichkeiten geben kann, die Node-Version anzugeben, aber der Ansatz mit der **package.json** ist weit verbreitet unterstützt.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Website erneut testen und sicherstellen, dass sie nicht von unseren Änderungen betroffen wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Site aus (siehe [Testing the routes](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und prüfen Sie, ob die Site immer noch wie erwartet funktioniert.

### Erstellen eines Anwendungsrepositories in GitHub

Viele Hosting-Services erlauben Ihnen, Projekte von einem lokalen Repository oder von Cloud-basierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann den Einsatz und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek ein und verwenden das **git** Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungswerkzeugen gute Softwareentwicklungspraxis ist, da es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekanntem guten Code" zu wechseln, wenn es nötig ist!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **New repository**.
3. Füllen Sie auf diesem Formular alle Felder aus. Während diese nicht zwingend sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repositories-Namen ein (z. B. _express-locallibrary-tutorial_), und eine Beschreibung (z. B. "Local Library website written in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahl.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahl.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standard "Öffentliche" Zugriff macht _den gesamten_ Quellcode – einschließlich Ihres Benutzernamens und Passworts für die Datenbank – sichtbar für jedermann im Internet! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen fest codiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen Einsicht in den Quellcode zu gewähren.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf die grüne Schaltfläche **Clone or download** auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfenster, das erscheint.
   Wenn Sie den Repositoriesnamen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwas wie folgt aussehen: `https://github.com/<Ihr_git_user_id>/express-locallibrary-tutorial.git`.

Da das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
2. Öffnen Sie eine Befehlszeile/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Navigieren Sie in das Repo-Verzeichnis.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquellcodes in den Repo-Ordner, machen Sie sie mit _git_ Teil des Repos, und laden Sie sie zu GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Befehlszeile/ein Terminal und verwenden Sie den Befehl `add`, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die Sie `commit` wollen, korrekt sind (Sie möchten Quellcodes, keine Binärdateien, temporären Dateien usw. einbeziehen).
   Es sollte ein wenig wie die folgende Auflistung aussehen.

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

4. Wenn Sie zufrieden sind, `commit` die Dateien zu Ihrem lokalen Repo.
   Dies entspricht dem Unterschreiben der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem Remote-GitHub-Repo durch den folgenden Befehl zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie wieder auf die Seite auf GitHub gehen, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre ganze Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, während sich die Dateien mithilfe dieses Add/Commit/Push-Zyklus ändern.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanille"-Projekts zu erstellen – obwohl einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Service (oder für die Entwicklung) sein könnten, andere möglicherweise nicht.
Sie können dies mit `git` in der Befehlszeile tun:

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
> Git ist unglaublich leistungsstark!
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [Glitch](https://glitch.com/) gehostet wird.

### Warum Glitch?

Wir entscheiden uns aus mehreren Gründen, Glitch zu verwenden:

- Glitch bietet einen [kostenlosen Starterplan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, obwohl es einige Einschränkungen gibt.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN sehr wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie dies nicht müssen.
  Sich keine Sorgen um Server, Load Balancer, Reverse Proxies usw. machen zu müssen, erleichtert den Einstieg erheblich.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Glitch lernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen wirken sich nicht wirklich darauf aus, dass wir Glitch für das Tutorial verwenden.
  Zum Beispiel:

  - Der Starter-Plan bietet nur 1000 "Projekstunden" pro Monat, die monatlich zurückgesetzt werden.
    Diese werden verwendet, wenn Sie aktiv die Site bearbeiten oder jemand darauf zugreift.
    Wenn niemand auf die Seite zugreift oder sie bearbeitet, wird sie schlafen.
  - Die Startumgebung des Plans hat eine begrenzte Menge an Container-RAM und Speicherplatz.
    Es gibt mehr als genug für das Tutorial, insbesondere weil unsere Datenbank woanders gehostet wird.
  - Eigene Domains werden derzeit nicht ausführlich unterstützt (zum Zeitpunkt des Schreibens).
  - Weitere Einschränkungen finden Sie auf der [Seite über technische Einschränkungen von Glitch](https://help.glitch.com/s/article/Technical-Restrictions).

Während Glitch geeignet ist, um diese Demonstration zu hosten, sollten Sie sich die Zeit nehmen, herauszufinden, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Oberfläche, in der Sie Projekte aus Startervorlagen erstellen oder sie aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können.
Wenn Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container erstellt und ausgeführt.

Wie das alles "unter der Haube" funktioniert, ist ein Rätsel – Glitch sagt es nicht.
Was klar ist, ist, dass solange Sie eine ziemlich Standard-Node.js-Webanwendung erstellen (zum Beispiel `package.json` für Ihre Abhängigkeiten verwenden) und nicht mehr Ressourcen verbrauchen, als in den [technischen Einschränkungen](https://help.glitch.com/s/article/Technical-Restrictions) angegeben sind, Ihre Anwendung einfach "funktionieren" sollte.

Sobald die Anwendung ausgeführt wird, kann sie mit [privaten Daten](https://help.glitch.com/s/article/Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden.
Die Werte in den Geheimdaten werden von der Anwendung als Umgebungsvariablen gelesen, die, wie Sie sich aus einem vorherigen Abschnitt erinnern werden, die Methode ist, mit der wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL zu erhalten.
Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihrem GitHub-Repository enthalten sein.

Die Glitch-Ansichtsansicht bietet auch einen _Terminal_-Zugriff auf die Web-App-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als ob sie auf Ihrer lokalen Maschine ausgeführt würde.

Das ist alles, was Sie wissen müssen, um loszulegen.
Als Nächstes werden wir ein Glitch-Konto einrichten, das Bibliotheksprojekt von GitHub hochladen und mit einer Datenbank verbinden.

### Erhalten eines Glitch-Kontos

Um Glitch zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die Schaltfläche **Sign up** in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Sie werden dann im Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Problembehebung bei Node.js-Version

Hosting-Anbieter unterstützen häufig eine Haupt-Version der aktuellen Node.js-Veröffentlichungen.
Falls die genaue "Minor"-Version, die Sie in Ihrer `package.json`-Datei angegeben haben, nicht unterstützt wird, wird in der Regel auf die nächstgelegene unterstützte Version zurückgegriffen (und oft funktioniert das einfach).

Unglücklicherweise ist zum Zeitpunkt des Schreibens die höchste auf Glitch unterstützte Version Node.js 16.
Wenn Sie mit Node.js 17 oder neuer entwickelt haben, sollten Sie die in Ihrer `package.json`-Datei verwendete Version wie unten gezeigt reduzieren.
Sie müssen auch neu testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch plant [Node zu aktualisieren und es in Zukunft besser aktuell zu halten](https://blog.glitch.com/post/rebuilding-glitch/) – und es könnte sein, dass, wenn Sie dies lesen, diese Versionsbeschränkung nicht mehr besteht.
Anstelle der Herabstufung der `node`-Version könnten Sie Ihr Projekt hochladen, um zu sehen, ob es gebaut wird.
Wenn es Fehler gibt und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node`-Version in Ihrer `package.json`-Datei im Glitch-Editor auf `>=v16` zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub

Als Nächstes werden wir das Bibliotheksprojekt von GitHub importieren.
Wählen Sie zuerst die **Dashboard**-Option aus dem Hauptmenü der Website, und klicken Sie dann auf die Schaltfläche **New project**.
Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch-Website-Dashboard, das eine neue Projekt-Schaltfläche und ein Popup-Menü mit der Option "Import from GitHub" zeigt](glitch_new_project_import_github.png)

Ein Popup wird angezeigt.
Geben Sie die URL Ihres GitHub-Bibliotheks-Repositorys in das Popup ein und drücken Sie **OK**.
Unten haben wir das Repo für das bearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des zu importierenden GitHub-Repos](glitch_new_project_github_repo_url.png)

Glitch wird dann das Projekt importieren und Fortschrittsbenachrichtigungen anzeigen.
Nach Abschluss zeigt es die Bearbeitungsansicht für das neue Projekt an, wie unten gezeigt.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Site-URL erhalten, indem Sie die **Share**-Schaltfläche auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link zur Live-Site in die Adressleiste.
Die Local-Library-Site sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchron zu halten.

### Verwenden einer Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten.
Während Glitch nur SQLite-Datenbanken hostet (und wir darauf eingestellt sind, MongoDB zu verwenden), bieten viele andere Websites MongoDB-Datenbanken als Service an.

Eine Möglichkeit besteht darin, den [Einrichten der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) Anweisungen zu folgen, die früher im Tutorial angegeben wurden, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env` Datei in der Editoransicht für das Projekt.
Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Site wird aktualisiert, sobald Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für geheime Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/s/article/Adding-Private-Data) vorgesehen und wurde beim Import nach Glitch automatisch erstellt.
> Sie wird nie exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir machen dies in derselben Datei, in der wir die `MONGODB_URI` Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV` Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die Local-Library-Anwendung ist nun eingerichtet und konfiguriert für den Produktionseinsatz.
Sie können Daten über die Website-Oberfläche hinzufügen, und es sollte wie während der Entwicklung funktionieren (obwohl weniger Debug-Informationen für ungültige Seiten ausgesetzt werden).

> [!NOTE]
> Wenn Sie nur einige Daten für Testzwecke hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testing – einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Debugging von Express-Apps auf Glitch

Glitch ermöglicht effektives Debugging.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Protokoll-Schaltfläche am unteren Rand der Editoransicht, um Protokollinformationen von Ihrem Server anzuzeigen, wie etwa Konsolenlog-Ausgaben.
- Wählen Sie die Terminal-Schaltfläche am unteren Rand der Editoransicht, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen.
  Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktive Debugging in VS Code unter Verwendung der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie _LocalLibrary_ auf [Railway](https://railway.com/) installieren können.

### Warum Railway?

> [!WARNING]
> Railway hat keine komplett kostenlosen Starter-Tarif mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie dies nicht müssen.
  Sich keine Sorgen um Server, Load Balancers, Reverse Proxies usw. machen zu müssen, erleichtert den Einstieg erheblich.
- Railway hat sich auf die Entwicklung und den Einsatz mit Fokus auf Entwicklererfahrung konzentriert, was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Railway lernen, sind übertragbar.
  Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Service scheint sehr zuverlässig zu sein, und wenn Ihnen der Dienst gefällt, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten die Zeit investieren, um herauszufinden, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrer eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es automatisch erkennen und viele verschiedene Webanwendungs-Frameworks und Umgebungen basierend auf ihrer Verwendung von "gemeinsamen Konventionen" installieren kann.
Zum Beispiel erkennt Railway Node-Anwendungen daran, dass sie eine **package.json** Datei besitzen, und kann den Paketmanager, der für den Aufbau verwendet wird, aus der "Lock"-Datei ermitteln.
Zum Beispiel, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass es npm verwenden muss, um die Pakete zu installieren, während, wenn es **yarn.lock** findet, es weiß, dass es yarn verwenden muss.
Nach der Installation aller Abhängigkeiten sucht Railway nach Skripten namens "build" und "start" in der Paketdatei und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs) zur Erkennung verschiedener Webanwendungs-Frameworks, die in unterschiedlichen Programmiersprachen geschrieben sind.
> Sie müssen nichts anderes wissen für dieses Tutorial, aber Sie können mehr über die Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung ausgeführt wird, kann sie sich selbst unter Verwendung von Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable erhalten.
Der Datenbankservice selbst kann von Railway oder einem anderen Anbieter bereitgestellt werden.

Entwickler arbeiten über die Railway-Site mit Railway und verwenden ein spezielles [Kommandozeilen-Tool (CLI)](https://docs.railway.com/guides/cli).
Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Zweig zur Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist alles, was Sie wissen müssen, um die App auf Railway einzusetzen.
Als Nächstes werden wir ein Railway-Konto einrichten, unsere Website und eine Datenbank installieren und den Railway-Client ausprobieren.

### Erhalten eines Railway-Kontos

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Sie müssen möglicherweise noch zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann im Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard**-Option aus dem Hauptmenü der Website, und klicken Sie dann auf die Schaltfläche **New Project**:

![Railway-Website-Dashboard zeigt die neue Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste der Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage, die zuerst in Ihrem GitHub-Konto erstellt wurde, und mehrere Datenbanken bereitzustellen.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup zeigt Bereitstellungsoptionen mit der Option "Deploy from GitHub repo" hervorgehoben](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<Benutzername>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** wählen.

![Bestätigungsbildschirm, wenn Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt und stellt es bereit, wobei der Fortschritt auf der Registerkarte Bereitstellungen angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten stehenden.

![Railway-Dashboard zeigt die Registerkarte Bereitstellungen für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Settings_, scrollen Sie dann zum Abschnitt Domains, und drücken Sie die Schaltfläche **Generate Domain**.

![Railway-Projekteinstellungen-Registerkarte zeigt Schaltfläche, um eine Domain zu generieren](railway_project_generate_domain.png)

Dies veröffentlicht die Site und ersetzt die Schaltfläche durch die Domain, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte zeigt Link zur Local-Library-Site](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen.
Da wir noch keine Produktionsdatenbank angegeben haben, wird die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, lassen Sie uns als Nächstes eine Produktions-MongoDB-Datenbank erstellen.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl es nichts gibt, das Sie daran hindert, sie in einem separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_ Datenbank für Produktionsdaten zu verwenden, genauso wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie bei Railway die **Dashboard**-Option aus dem Hauptmenü der Website und dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details zum Dienst festzulegen).
Wählen Sie die Schaltfläche **New**, die zum Hinzufügen von Diensten zum aktuellen Projekt verwendet wird.

![Railway-Projekt mit neuer Service-Schaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Popup zeigt Optionen für einen neuen Service, wie Datenbank, GitHub-Repo, leerer Service usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um die Datenbank hinzuzufügen zu starten

![Railway-Popup zeigt verschiedene auswählbare Datenbanken: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst, um Informationen zur Datenbank anzuzeigen.
Öffnen Sie die Registerkarte _Variables_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungsbildschirm zeigt die URL, die benötigt wird, um eine Verbindung zur Datenbank herzustellen](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es der Anwendung mit einer Umgebungsvariablen hinzufügen.
Öffnen Sie zuerst den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variables_ und klicken Sie auf die Schaltfläche **New Variable**.

Geben Sie den Variablennamen `MONGODB_URI` und die von Ihnen kopierte Verbindungs-URL für die Datenbank ein (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung](#datenbankkonfiguration) konfiguriert haben, um die Datenbankadresse zu lesen).
Dies sieht so aus wie der unten gezeigte Bildschirm.

![Railway-Website Variablenbildschirm während der Eingabe der MONGODB_URI-Variable und -Adresse](railway_variables_database_url.png)

Wählen Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie die Startseite jetzt überprüfen, sollte sie Nullwerte für Ihre Objektzählungen anzeigen, da die oben genannten Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies im selben Bildschirm wie die `MONGODB_URI`-Variable tun.

Öffnen Sie den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variables_, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und klicken Sie auf die Schaltfläche **New Variable**.

![Railway Variablen-Registerkarte mit der Schaltfläche "Neue Variable" hervorgehoben](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Namen der Umgebung ein.
Drücken Sie dann die Schaltfläche **Add**.

![Railway Variablen Registerkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist nun eingerichtet und konfiguriert für den Produktionseinsatz.
Sie können Daten über die Website-Oberfläche hinzufügen, und es sollte auf die gleiche Weise funktionieren, wie es während der Entwicklung funktioniert hat (obwohl weniger Debug-Informationen für ungültige Seiten ausgesetzt werden).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testing – einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Installieren des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen.
Zu den wichtigsten Operationen gehört das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf einem zugehörigen Railway-Projekt (ohne zu GitHub hochladen zu müssen) und das Ausführen Ihres Projekts lokal mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie Folgendes in einem Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den Befehl logs, um das Ende der Logs anzuzeigen (ein vollständigeres Log ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Konfiguration von Express-Apps in der Produktion, und auch der Serie von Tutorials zum Arbeiten mit Express. Wir hoffen, Sie fanden sie nützlich. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) ansehen.

## Siehe auch

- [Produktionsbest Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktionsbest Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentationen

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Erste Schritte mit Heroku und Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku Dokumentation)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku Dokumentation)
  - [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support) (Heroku Dokumentation)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku Dokumentation)
  - [Konfiguration und Konfig-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
