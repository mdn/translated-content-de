---
title: "Express Tutorial Teil 7: Bereitstellen in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie eine beeindruckende [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese wahrscheinlich auf einem öffentlichen Webserver installieren, sodass Bibliotheksmitarbeiter und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host für die Bereitstellung Ihrer Website finden können und was Sie tun müssen, um Ihre Seite für den Einsatz in der Produktion vorzubereiten.

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
        Zu erfahren, wo und wie Sie eine Express-App in die Produktion bringen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Website fertiggestellt ist (oder "fertig genug", um mit öffentlichen Tests zu beginnen), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Website an den lokalen Browser oder das Netzwerk weiterzugeben und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Produktionsinfrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial gibt Hinweise zu den Optionen für die Wahl eines Hosting-Anbieters, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App produktionsfertig zu machen, und ein praktisches Beispiel, wie Sie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.com/) installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Zugriff ausführen werden. Die Umgebung umfasst:

- Computerausrüstung, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Laufzeit für Programmiersprachen und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse Proxy, Load Balancer usw.
- Datenbanken, auf denen Ihre Website beruht.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, es ist jedoch viel üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Anbieters ausgeführt wird. Der entfernte Server bietet üblicherweise ein garantiertes Maß an Computerressourcen (z. B. CPU, RAM, Speicher) und Internetverbindung zu einem bestimmten Preis.

Diese Art von remote zugänglicher Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, umfassendere Umgebungen auszuwählen, möglicherweise einschließlich einer vollständigen Node-Installation.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, weil sie die Konfiguration reduzieren. Die verfügbaren Optionen können Sie jedoch auf unbekannte Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, da Sie so die gewünschten erhalten und eine Vorstellung davon haben, wo Sie beginnen müssen, wenn Sie Teile des Systems aktualisieren müssen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung dieser Art von Hosting müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Server, Load-Balancer usw.) kümmern, da die Hosting-Plattform diese für Sie übernimmt. Das erleichtert die Bereitstellung erheblich, da Sie sich nur auf Ihre Webanwendung und nicht auf andere Serverinfrastrukturen konzentrieren müssen.

Einige Entwickler wählen die erhöhte Flexibilität, die IaaS über PaaS bietet, während andere den reduzierten Wartungsaufwand und das einfachere Skalieren von PaaS schätzen werden. Wenn Sie gerade erst anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, daher werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollten sie Anleitungen bieten, wie Sie eine Express-Website mit verschiedenen Konfigurationen von Webservern, Anwendungsservern, Reverse-Proxies usw. einrichten können. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community Docs](https://www.digitalocean.com/community/tutorials?q=node).

## Einen Hosting-Anbieter auswählen

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) zusammenarbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu verschiedenen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir hier einige Optionen einführen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige zu berücksichtigende Aspekte bei der Wahl eines Hosts:

- Wie stark frequentiert Ihre Website voraussichtlich sein wird und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für das horizontale (Hinzufügen weiterer Maschinen) und vertikale (Upgrade auf leistungsstärkere Maschinen) Skalierung und die Kosten für solche Änderungen.
- Die Standorte, an denen der Anbieter Rechenzentren hat und daher der Zugriff voraussichtlich am schnellsten ist.
- Die historische Leistungsbilanz des Hosts in Bezug auf Betriebszeit und Ausfallzeiten.
- Bereitgestellte Tools zur Verwaltung der Website – sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preiskategorien nur eine bestimmte Anzahl von "Live-Zeit"-Stunden oder nur eine geringe Menge an Speicher.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass Sie von Anfang an besser einen anderen Dienst genutzt hätten!

Die gute Nachricht für den Anfang ist, dass es ziemlich viele Seiten gibt, die "kostenlose" Computerumgebungen zur Verfügung stellen, die für Bewertung und Testzwecke gedacht sind.
Dies sind normalerweise eher ressourcenbeschränkte/-begrenzte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einem Einführungszeitraum ablaufen oder andere Einschränkungen haben.
Sie eignen sich jedoch hervorragend zum Testen von Websites mit geringem Verkehr in einer gehosteten Umgebung und bieten eine einfache Möglichkeit, bei zunehmendem Traffic für mehr Ressourcen zu bezahlen.
Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basis"- oder "Hobby"-Stufe an, die für kleine Produktionswebsites vorgesehen ist und nützlichere Computerleistungsebenen und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computerstufe im Bereich von 5 bis 10 USD pro Monat haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit der wichtigste Aspekt ist.

## Ihre Website bereit machen zur Veröffentlichung

Die Hauptaspekte, die Sie bei der Veröffentlichung Ihrer Website beachten sollten, sind Websicherheit und Leistung.
Mindestens sollten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Zugangsdaten sichern, die Stapelverfolgungen, die auf Fehlerseiten während der Entwicklung enthalten sind, entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumentationen — siehe [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) und [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Zugangsdaten fest in **app.js** codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, deren Exponierung oder Beschädigung uns stören würde, gibt es kein besonderes Risiko, diese Details zu leaken.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbankzugangsdaten sehr wichtig.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als für die Entwicklung und auch die Produktionsdatenbank-Zugangsdaten getrennt vom Quellcode aufbewahren, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einrichtung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie es viele tun), ist eine Möglichkeit, dies zu tun, den Server dazu zu bringen, die Datenbank-URL aus einer Umgebungsvariablen zu bekommen.
Unten passen wir die LocalLibrary-Website so an, dass sie die Datenbank-URI aus einer OS-Umgebungsvariablen bezieht, wenn diese definiert wurde, und andernfalls die Entwicklungsdatenbank-URL verwendet.

Öffnen Sie **app.js** und suchen Sie die Zeile, die die MongoDB-Verbindungsvariable festlegt.
Sie wird etwa so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenkette aus einer Umgebungsvariablen namens `MONGODB_URI` zu erhalten, wenn sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere übliche Methode, um Produktionsdatenbank-Zugangsdaten getrennt vom Quellcode zu halten, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mithilfe des npm [dotenv](https://www.npmjs.com/package/dotenv) Moduls gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces in Fehlerseiten entfernen, indem wir die `NODE_ENV`-Umgebungsvariable auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zu weniger ausführlichen Fehlermeldungen wird durch das Setzen der Variablen auf _production_ das Zwischenspeichern von View-Vorlagen und CSS-Dateien generiert, die aus CSS-Erweiterungen erstellt wurden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die App-Leistung um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch `export`, eine Umgebungsdatei oder das OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungs-einrichtung vornehmen, und nicht in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie dies für unser Hosting-Beispiel unten festgelegt wird.

### Angemessen protokollieren

Protokollierungsaufrufe können sich auf eine Website mit hohem Traffic auswirken. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z.B. Traffic verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge an Protokollen, die zu Debugging-Zwecken hinzugefügt werden, auf ein Minimum zu beschränken.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), das Ihnen ermöglicht, zu kontrollieren, welche Protokollierung durch Setzen einer Umgebungsvariable durchgeführt wird.
Zum Beispiel zeigt das untenstehende Codefragment, wie Sie "author"-Protokollierung einrichten könnten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Protokolle von diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Reihe von Protokollen aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariable angeben.
Sie können die Variablen zum Anzeigen von Autor- und Buchprotokollen festlegen, wie gezeigt (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können die Protokollierung ersetzen, die Sie möglicherweise vorher mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Protokollierung über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie die Protokollierung in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, welchen Einfluss dies auf die Protokollierung hat.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Für weitere Informationen zu diesem Thema siehe: [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können häufig die HTTP-Antwort, die an einen Client zurückgesendet wird, komprimieren, wodurch die Zeit erheblich reduziert wird, die erforderlich ist, damit der Client die Seite erhält und lädt. Die verwendete Komprimierungsmethode hängt davon ab, welche Dekomprimierungsmethoden der Client in der Anfrage unterstützt (die Antwort wird unkomprimiert zurückgesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie diese zu Ihrer Website mit [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und benötigen Sie die Komprimierungsbibliothek wie gezeigt. Fügen Sie die Komprimierungsbibliothek zur Middleware-Kette mit der `use()`-Methode hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten – in diesem Fall alle!).

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
> Für eine stark frequentierte Website in der Produktion würden Sie nicht diese Middleware verwenden. Stattdessen würden Sie einen Reverse Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um sich gegen bekannte Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die dazu beitragen, Ihre App vor bekannten Web-Schwachstellen zu schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen, welche Header es setzt und gegen welche Schwachstellen es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und benötigen Sie die _helmet_ Bibliothek wie gezeigt. Fügen Sie das Modul zur Middleware-Kette mit der `use()`-Methode hinzu.

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

Normalerweise hätten wir vielleicht einfach `app.use(helmet());` eingefügt, um das _Subset_ der sicherheitsrelevanten Header hinzuzufügen, das für die meisten Websites sinnvoll ist.
Aber in der [LocalLibrary Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) enthalten wir einige Bootstrap- und jQuery-Skripte.
Diese verletzen die _standardmäßige_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von Helmet, die das Laden von Querinhalts-Skripten nicht erlaubt.
Um das Laden dieser Skripte zu erlauben, modifizieren wir die Helmet-Konfiguration so, dass sie CSP-Anweisungen setzt, die das Skriptladen von den angegebenen Domains zulassen.
Für Ihren eigenen Server können Sie spezifische Header hinzufügen/deaktivieren, je nach Bedarf, indem Sie den [Anweisungen zur Verwendung von Helmet hier folgen](https://www.npmjs.com/package/helmet).

### Fügen Sie eine Ratenbegrenzung zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden könnten, wie z.B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar einfach ein Client oder Skript, das sich nicht wie erwartet verhält.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen verursacht werden können, die Ihren Server verlangsamen, könnten Ihnen auch die zusätzlichen Traffic-Kosten in Rechnung gestellt werden.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder einen Satz von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und benötigen Sie die _express-rate-limit_ Bibliothek wie gezeigt. Fügen Sie das Modul zur Middleware-Kette mit der `use()`-Methode hinzu.

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
> Drittanbieter-Services wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie erweiterte Schutzmaßnahmen gegen Denial-of-Service- oder andere Arten von Angriffen benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Einstiegsdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Library benötigte Node-Version.
Sie können die während der Entwicklung verwendete Node-Version ermitteln, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** hinzu, wie gezeigt (unter Verwendung der Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version bei verschiedenen Hosting-Services festzulegen, aber der Ansatz mit der **package.json** ist weit verbreitet.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Seite erneut testen und sicherstellen, dass sie von unseren Änderungen nicht beeinträchtigt wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Seite aus (siehe [Testing the routes](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und überprüfen Sie, ob die Seite weiterhin wie erwartet funktioniert.

### Erstellen eines Anwendungs-Repositories in GitHub

Viele Hosting-Services ermöglichen das Importieren und/oder Synchronisieren von Projekten aus einem lokalen Repository oder aus cloudbasierten Versionsverwaltungstools.
Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial werden wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek einrichten und das **git**-Tool verwenden, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Versionsverwaltungstools gute Softwareentwicklungspraxis ist, da Sie so Änderungen ausprobieren und zwischen Ihren Experimenten und "bekanntem, gutem Code" wechseln können, wenn Sie es brauchen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repositories-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (z.B. "Lokale Bibliothekswebsite geschrieben in Express (Node)").
   - Wählen Sie **Node** in der Auswahlleiste _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahlleiste _Add license_.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugang "Public" macht _allen_ Quellcode – einschließlich Ihrem Datenbankbenutzernamen und Passwort – für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Zugangsdaten _nur_ aus Umgebungsvariablen liest und keine hartcodierten Zugangsdaten enthält.
   >
   > Andernfalls wählen Sie die Option "Private", um nur ausgewählten Personen Zugriff auf den Quellcode zu gewähren.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf den grünen Button **Clone or download** auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im erscheinenden Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<ihre_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizielle Git-Download-Anleitung](https://git-scm.com/downloads)).
2. Öffnen Sie ein Kommandofenster/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungs-Quelldateien in den Repo-Ordner, machen Sie sie mit _git_ zum Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie nach Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Kommandofenster/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu Git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, dass alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten Quellcodedateien einschließen, nicht Binärdateien, temporäre Dateien usw.).
   Es sollte etwa wie das unten stehende Listing aussehen.

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

4. Wenn Sie zufrieden sind, `committen` Sie die Dateien in Ihr lokales Repo.
   Dies ist gleichbedeutend mit dem Unterzeichnen der Änderungen und dem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das entfernte Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem folgenden Befehl auf das entfernte GitHub Repo zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zur Seite auf GitHub zurückkehren, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um eine Sicherungskopie Ihres "Vanille"-Projekts zu erstellen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, möglicherweise nützlich für die Bereitstellung bei jedem Hosting-Service (oder zur Entwicklung) sind, könnten andere es nicht sein.
Sie können dies über `git` in der Kommandozeile tun:

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
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Glitch](https://glitch.com/) hostet.

### Warum Glitch?

Wir wählen Glitch aus mehreren Gründen:

- Glitch hat einen [kostenlosen Einstiegsplan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Dass es für alle Entwickler erschwinglich ist, ist für MDN sehr wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Load Balancer, Reverse-Proxies usw. kümmern zu müssen, macht es viel einfacher, anzufangen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Glitch lernen werden, sind übertragbar.
- Die Einschränkungen des Dienstes und des Plans beeinträchtigen die Nutzung von Glitch für das Tutorial nicht wirklich.
  Zum Beispiel:

  - Der Einstiegsplan bietet nur 1000 "Projektstunden" pro Monat, die monatlich zurückgesetzt werden.
    Diese werden verwendet, wenn Sie die Seite aktiv bearbeiten oder wenn jemand darauf zugreift.
    Wenn niemand auf die Seite zugreift oder sie bearbeitet, wird sie pausiert.
  - Die Umgebung des Einstiegsplans hat eine begrenzte Menge an Container-RAM und -Speicherplatz.
    Es gibt mehr als genug für das Tutorial, insbesondere, da unsere Datenbank woanders gehostet wird.
  - Benutzerdefinierte Domains werden nicht gut unterstützt (zum Zeitpunkt des Schreibens).
  - Weitere Einschränkungen finden Sie auf der [Technische Einschränkungen Seite von Glitch](https://help.glitch.com/s/article/Technical-Restrictions).

Während Glitch für das Hosting dieser Demonstration geeignet ist, sollten Sie die Zeit investieren, um festzustellen, ob es [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Schnittstelle, in der Sie Projekte aus Startervorlagen erstellen oder aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können.
Während Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container erstellt und ausgeführt.

Wie das alles "unter der Haube" funktioniert, bleibt ein Geheimnis – Glitch gibt keine Auskunft darüber.
Fest steht, dass solange Sie eine relativ Standard-nodejs-Webanwendung erstellen (z.B. `package.json` für Ihre Abhängigkeiten verwenden) und nicht mehr Ressourcen verbrauchen als in den [technischen Einschränkungen](https://help.glitch.com/s/article/Technical-Restrictions) aufgeführt sind, Ihre Anwendung "einfach funktionieren sollte".

Sobald die Anwendung läuft, kann sie mit [privaten Daten](https://help.glitch.com/s/article/Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden.
Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie aus einem vorherigen Abschnitt erinnern, die Methode ist, mit der wir unsere Anwendung so eingerichtet haben, dass sie die URL ihrer Datenbank erhält.
Beachten Sie, dass die Variablen _geheim_ sind: Die `.env` sollte nicht in Ihrem GitHub-Repository enthalten sein.

Die Glitch-Bearbeitungsansicht bietet außerdem _Terminal_-Zugriff auf die Web-App-Umgebung, die Sie nutzen können, um mit der Web-App zu arbeiten, als ob sie auf Ihrer lokalen Maschine liefe.

Das ist alles, was Sie als Übersicht benötigen, um loszulegen.
Als nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Glitch-Konto einrichten

Um Glitch zu nutzen, müssen Sie zuerst ein Konto einrichten:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf den **Sign up** Button in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie werden dann zum Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Node.js-Version beheben

Hosting-Anbieter unterstützen in der Regel einige Hauptversionen der aktuellen Node.js-Versionen.
Wenn die genaue "nebensächliche" Version, die Sie in Ihrer `package.json`-Datei angegeben haben, nicht unterstützt wird, weichen sie normalerweise auf die nächste unterstützte Version aus (und oft wird dies einfach funktionieren).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16.
Wenn Sie mit Node.js 17 oder neuer entwickelt haben, sollten Sie die verwendete Version in Ihrer `package.json`-Datei wie gezeigt reduzieren.
Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node in Zukunft besser zu aktualisieren und aktuell zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — und es kann sein, dass zum Zeitpunkt, an dem Sie dies lesen, die Versionsgrenze nicht mehr existiert.
Anstelle des Downgradens der `node`-Version könnten Sie Ihr Projekt hochladen, um zu sehen, ob es funktioniert.
Wenn es Fehler gibt und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node`-Version auf `>=v16` in Ihrer `package.json` in der Glitch-Editor-Ansicht einzustellen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub aus

Als nächstes importieren wir das Bibliotheksprojekt von GitHub.
Wählen Sie zuerst die **Dashboard**-Option im oberen Menü der Seite, dann den **New project** Button.
Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch-Website-Dashboard mit einer Schaltfläche für ein neues Projekt und einem Popup-Menü mit der Option "Import from GitHub"](glitch_new_project_import_github.png)

Es erscheint ein Popup.
Geben Sie die URL Ihres GitHub-Bibliothek-Repositorys in das Popup ein und drücken Sie **OK**.
Unten haben wir das Repo für das ausgearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des GitHub-Repos zum Importieren](glitch_new_project_github_repo_url.png)

Glitch importiert dann das Projekt und zeigt Benachrichtigungen über den Fortschritt an.
Nach Abschluss wird die Bearbeitungsansicht für das neue Projekt angezeigt, wie unten gezeigt.

![Glitch-Editor-Ansicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Site-URL abrufen, indem Sie die **Share**-Schaltfläche auswählen.

![Glitch-Editor-Ansicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link für die Live-Site in die Adressleiste.
Die lokale Bibliothekssite sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Vorgang war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchron zu halten.

### Verwenden Sie eine Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten.
Während Glitch nur SQLite-Datenbanken hostet (und wir darauf eingerichtet sind, MongoDB zu verwenden), bieten viele andere Seiten MongoDB-Datenbanken als Service an.

Eine Möglichkeit ist, den [Mongoose Setup](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) Abschnitt aus früher im Tutorial zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Editoransicht des Projekts.
Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Site aktualisiert sich, während Sie Werte im Editor eingeben.

![Glitch .env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/s/article/Adding-Private-Data) vorgesehen und wurde beim Import zu Glitch automatisch erstellt.
> Sie wird nie exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorherigen Abschnitt, dass wir die [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir machen das in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die lokale Bibliotheksanwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte genauso funktionieren wie während der Entwicklung (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten für Tests hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) wie im Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Tests – einige Objekte erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Debuggen von Express-Apps auf Glitch

Glitch ermöglicht effektives Debuggen.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Logs-Schaltfläche am unteren Rand der Editoransicht aus, um Protokollinformationen von Ihrem Server zu sehen, wie z.B. Konsolenlogausgaben.
- Wählen Sie die Terminal-Schaltfläche am unteren Rand der Editoransicht aus, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen.
  Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debuggen in VS Code mit der GlITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keinen völlig kostenlosen Einstiegsplan mehr.
> Wir haben diese Anweisungen behalten, da Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie es nicht müssen.
  Nicht sich um Server, Load Balancer, Reverse-Proxies usw. kümmern zu müssen, macht es viel einfacher, anzufangen.
- Railway hat einen [Fokus auf Benutzererfahrung bei der Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve führt als bei vielen anderen Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Railway lernen werden, sind übertragbar.
  Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen basierend auf ihrer Nutzung von "allgemeinen Konventionen" automatisch erkennen und installieren kann.
Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json** Datei haben, und kann den verwendeten Paketmanager für den Build aus der "Sperr-" Datei ermitteln.
Wenn die Anwendung beispielsweise die Datei **package-lock.json** enthält, weiß Railway, dass npm zur Installation der Pakete verwendet wird, während wenn es **yarn.lock** findet, es weiß, dass yarn verwendet wird.
Nachdem alle Abhängigkeiten installiert wurden, sucht Railway nach Skripten, die als "Build" und "Start" im Paket festgelegt sind, und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks in verschiedenen Programmiersprachen zu erkennen.
> Das müssen Sie für dieses Tutorial nicht weiter wissen, aber Sie können mehr über die Optionen für die Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable abrufen.
Der Datenbankdienst kann entweder von Railway gehostet werden oder von einem anderen Anbieter.

Entwickler interagieren mit Railway über die Railway-Website und mithilfe eines speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tools.
Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Logs der laufenden Prozesse zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist alles, was Sie als Übersicht benötigen, um die App auf Railway bereitzustellen.
Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Railway-Konto einrichten

Um Railway zu verwenden, müssen Sie zuerst ein Konto einrichten:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Gegebenenfalls müssen Sie zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann zum Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub aus

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard**-Option im oberen Menü der Seite, dann den **New Project** Button:

![Railway-Website-Dashboard mit hervorgehobener Schaltfläche für ein neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zu erstellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und eine Anzahl von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup mit Bereitstellungsoptionen und hervorgehobener Option "Deploy from GitHub repo"](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repositorium für die lokale Bibliothek: `<Benutzername>/express-locallibrary-tutorial`.

![Railway-Popup, das GitHub-Repos anzeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt und stellt Ihr Projekt bereit, zeigt den Fortschritt auf der Registrierungsseite an.
Nach erfolgreicher Bereitstellung sehen Sie einen Bildschirm wie den unten.

![Railway-Dashboard, das die Registerkarte Deployments für das bereitgestellte Projekt zeigt](railway_project_deploy.png)

Wählen Sie jetzt die Registerkarte _Settings_ und scrollen Sie nach unten zum Abschnitt Domains, und drücken Sie die **Generate Domain**-Schaltfläche.

![Railway-Projekttab-Einstellungen, die eine Schaltfläche zum Generieren einer Domain zeigen](railway_project_generate_domain.png)

Dadurch wird die Site veröffentlicht und die Domain anstelle der Schaltfläche bereitgestellt, wie unten gezeigt.

![Railway-Projekttab-Einstellungen, die einen Link zur lokalen Bibliothekssite zeigen](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen.
Beachten Sie, dass da wir keine Produktionsdatenbank angegeben haben, die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet wird.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, richten wir als nächstes eine Produktions-MongoDB-Datenbank ein, die wir stattdessen verwenden können.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in ihrem eigenen separaten Projekt zu erstellen, oder tatsächlich für die Produktion ein _MongoDB Atlas_ Datenbank wie für die Entwicklungsdatenbank zu verwenden.

Wählen Sie auf Railway die **Dashboard**-Option im oberen Menü der Seite und dann Ihr Anwendungsprojekt aus.
An dieser Stelle enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Wählen Sie die **New**-Schaltfläche, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn dazu aufgefordert wird, welche Art von Dienst hinzuzufügen ist:

![Railway-Popup, das Optionen für einen neuen Dienst zeigt, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um mit dem Hinzufügen der Datenbank zu beginnen.

![Railway-Popup, das verschiedene Datenbanken zeigt, die ausgewählt werden können: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway erstellt dann einen Dienst mit einer leeren Datenbank im selben Projekt.
Nach Abschluss sehen Sie jetzt sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie die Registerkarte _Variables_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungsbildschirm, der die zum Verbinden mit der Datenbank benötigte URL zeigt](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es dem Anwendungsprozess über eine Umgebungsvariable hinzufügen.
Öffnen Sie zuerst den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variables_ und drücken Sie die **New Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindung-URL, die Sie für die Datenbank kopiert haben, (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen).
Dies wird ungefähr wie der unten gezeigte Bildschirm aussehen.

![Railway-Website-Variablen-Bildschirm, wenn die MONGODB_URI-Variable und Adresse hinzugefügt werden](railway_variables_database_url.png)

Wählen Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollten jetzt Null-Werte für Ihre Objektzahlen angezeigt werden, da wir jetzt eine neue (leere) Datenbank verwenden, durch die oben vorgenommenen Änderungen.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorherigen Abschnitt, dass wir die [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies auf demselben Bildschirm tun, auf dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variables_, wo Sie sehen, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **New Variable**-Schaltfläche.

![Railway Variables-Tab mit hervorgehobener neuer Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Name der neuen Variablen und `production` als Name der Umgebung ein.
Drücken Sie dann die **Add**-Schaltfläche.

![Railway-Variables-Tab mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen und es sollte auf die gleiche Weise funktionieren wie während der Entwicklung (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten für Tests hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) wie im Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Tests – einige Objekte erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Client installieren

Führen Sie die [Anweisungen hier](https://docs.railway.com/guides/cli) aus, um den Railway-Client für Ihr lokales Betriebssystem herunterzuladen und zu installieren.

Nach der Installation des Clients können Sie Befehle ausführen.
Zu den wichtigeren Operationen gehört das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf einem zugehörigen Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen, die Sie auf dem Produktionsserver haben.

Sie können eine Liste von allen möglichen Befehlen anzeigen, indem Sie das folgende in ein Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den Logs-Befehl, um das Ende der Logs anzuzeigen (ein vollständigeres Log ist pro Projekt auf der Site verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Anwendungen in der Produktion und auch der Tutorial-Serie zum Arbeiten mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Deploying Node.js Applications on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimizing Node.js Application Concurrency](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
