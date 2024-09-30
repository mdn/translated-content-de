---
title: "Express-Tutorial Teil 7: Bereitstellung in der Produktion"
slug: Learn/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

Jetzt, da Sie eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit Bibliothekspersonal und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel gibt einen Überblick darüber, wie Sie einen Host für die Bereitstellung Ihrer Website finden können und was Sie tun müssen, um Ihre Site für die Produktion bereitzumachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorialthemen, einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/forms">Express-Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu lernen, wo und wie Sie eine Express-App in der Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Seite fertig ist (oder "genug" fertig, um mit öffentlichen Tests zu beginnen), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gearbeitet, mit Express/Node als Webserver, um Ihre Seite auf den lokalen Browser/das lokale Netzwerk zu übertragen, und haben Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung auswählen, um die Express-App zu hosten.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsgerechte Infrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen bei der Wahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion vorzubereiten, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.app/) installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website ausgeführt wird.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf deren Grundlage Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, eines Reverse Proxy, eines Load Balancers usw.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Dies bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum (oder in den Rechenzentren) Ihres Hosting-Anbieters ausgeführt wird. Der Remote-Server wird normalerweise ein gewisses Maß an garantierten Computerressourcen (z.B. CPU, RAM, Speicherspeicher usw.) und Internetverbindung zu einem bestimmten Preis bieten.

Diese Art von aus der Ferne zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, um ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständiger ausgestattete Umgebungen auszuwählen, die möglicherweise eine komplette Node-Einrichtung umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise basieren sie auf einer älteren Version des OS. Oft ist es besser, die Komponenten selbst zu installieren, so dass Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen müssen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Verwendung dieser Art von Hosting müssen Sie sich um einen Großteil Ihrer Produktionsumgebung (Server, Load Balancer usw.) keine Gedanken machen, da die Host-Plattform diese für Sie verwaltet. Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf eine andere Server-Infrastruktur.

Einige Entwickler werden die erhöhte Flexibilität bevorzugen, die IaaS im Vergleich zu PaaS bietet, während andere die verminderte Wartungsbelastung und die einfachere Skalierung von PaaS schätzen werden. Wenn Sie gerade erst anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Hosting-Anbieter entscheiden, der Node/Express-freundlich ist, sollte er Anleitungen bereitstellen, wie Sie eine Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. einrichten können. Zum Beispiel gibt es viele step-by-step Guides für verschiedene Konfigurationen in den [Digital Ocean Node Community Docs](https://www.digitalocean.com/community/tutorials?q=node).

## Einen Hosting-Anbieter auswählen

Es gibt zahlreiche Hosting-Anbieter, von denen bekannt ist, dass sie entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) arbeiten. Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer-und Netzwerkressourcen zu unterschiedlichen Preisen an.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienstleistungen und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Dinge, die man bei der Auswahl eines Hosts beachten sollte:

- Wie beschäftigt Ihre Seite voraussichtlich sein wird und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die damit verbundenen Kosten.
- Die Orte, an denen der Anbieter Rechenzentren hat, und daher, wo der Zugriff voraussichtlich am schnellsten ist.
- Historische Uptime- und Downtime-Leistung des Hosts.
- Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sind sie sicher (z.B. SFTP vs. FTP).
- Integrierte Frameworks zum Überwachen Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts werden absichtlich bestimmte Dienstleistungen blockieren (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preistiers an oder bieten nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, die Sie normalerweise bezahlen müssten.
- Ob der "freie" Tarif, auf den Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Umstieg auf einen teureren Tarif bedeuten, dass Sie von Anfang an besser mit einem anderen Service bedient gewesen wären!

Die gute Nachricht, wenn Sie gerade erst anfangen, ist, dass es ziemlich viele Websites gibt, die "kostenlose" Computerumgebungen bieten, die für Bewertung und Testen gedacht sind.
Diese sind meist recht ressourcenbeschränkte/limitierte Umgebungen, und Sie sollten sich bewusst sein, dass sie vielleicht nach einer Einführungszeit ablaufen oder andere Einschränkungen haben.
Sie sind jedoch großartig zum Testen von Websites mit geringem Datenverkehr in einer gehosteten Umgebung und können einen einfachen Übergang zur Zahlung für mehr Ressourcen bieten, wenn Ihre Website geschäftiger wird.
Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch ein "Basis"- oder "Hobby"-Tier an, das für kleine Produktionsseiten gedacht ist und nützlichere Computerpower-Ebenen und weniger Einschränkungen bietet.
[Railway](https://railway.app/), [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ preiswerte Basis-Computing-Tier haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass Skalierbarkeit der wichtigste Gesichtspunkt ist.

## Ihre Website bereit zur Veröffentlichung machen

Die Hauptsachen, die Sie beim Veröffentlichen Ihrer Website bedenken sollten, sind Websicherheit und Leistung.
Im absoluten Minimum möchten Sie die Datenbankkonfiguration ändern, damit Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldedaten sichern können, die Stack Traces entfernen, die in Fehlermeldungen während der Entwicklung enthalten sind, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Weitere nützliche Tipps finden Sie in den Express-Dokumentationen — siehe [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) und [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldedaten in **app.js** fest codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, deren Offenlegung oder Beschädigung uns stört, besteht kein besonderes Risiko darin, diese Details zu verlieren.
Wenn Sie jedoch mit realen Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbank-Zugriffsdaten sehr wichtig.

Aus diesem Grund möchten wir für die Produktion eine andere Datenbank verwenden als für die Entwicklung und auch die Zugangsdaten der Produktionsdatenbank vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie es viele tun), ist eine Möglichkeit, dies zu tun, den Server die Datenbank-URL aus einer Umgebungsvariablen beziehen zu lassen.
Unten ändern wir die LocalLibrary-Website, um die Datenbank-URI aus einer OS-Umgebungsvariablen zu beziehen, falls diese definiert wurde, und ansonsten die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenfolge aus einer Umgebungsvariablen namens `MONGODB_URI` zu erhalten, falls diese gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine weitere gängige Möglichkeit, Produktionsdatenbankanmeldeinformationen getrennt vom Quellcode zu halten, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm-Modul [dotenv](https://www.npmjs.com/package/dotenv) gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack Traces in Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zur Erzeugung von weniger ausführlichen Fehlermeldungen sorgt das Setzen der Variable auf _production_ dafür, dass Ansichts-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, zwischengespeichert werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Anwendungsleistung um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder des OS-Initialisierungssystems vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungssetup vornehmen, anstatt in Ihrer App, aber zu wichtig, um sie hier nicht zu erwähnen! Wir zeigen, wie dies für unser Hosting-Beispiel unten eingestellt wird.

### Protokollierung angemessen behandeln

Protokollierungsaufrufe können sich auf eine Website mit hohem Datenverkehr auswirken. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. Verkehrstracking oder Protokollierung von API-Aufrufen), sollten jedoch versuchen, die Menge an Protokollierung, die zu Debugging-Zwecken hinzugefügt wird, zu minimieren.

Eine Möglichkeit, die "Debug"-Protokollierung in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), mit dem Sie steuern können, welche Protokollierung durch Setzen einer Umgebungsvariablen durchgeführt wird.
Der unten stehende Codeausschnitt zeigt, wie Sie möglicherweise eine "author"-Protokollierung einrichten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Protokolle dieses Objekts angezeigt.

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

Sie können dann eine bestimmte Protokollliste aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariablen angeben.
Sie können die Variablen für die Anzeige von author- und book-Protokollen wie gezeigt festlegen (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können das Protokollieren ersetzen, was Sie möglicherweise zuvor mit `console.log()` oder `console.error()` getan haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Protokollierung über das [debug](https://www.npmjs.com/package/debug)-Modul. Schalten Sie die Protokollierung in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable festlegen und beobachten Sie den Einfluss, den dies auf die Protokollierung hat.

Wenn Sie die Website-Aktivität protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie die gzip/deflate-Kompression für Antworten

Webserver können häufig die HTTP-Antwort komprimieren, die an einen Client zurückgesendet wird, wodurch die Zeit, die erforderlich ist, damit der Client die Seite erhält und lädt, erheblich reduziert wird. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client bei der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Site hinzu, indem Sie [compression](https://www.npmjs.com/package/compression) Middleware verwenden. Installieren Sie dies im Stammverzeichnis Ihres Projekts durch Ausführen des folgenden Befehls:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die compression-Bibliothek ein, wie gezeigt. Fügen Sie die compression-Bibliothek mit der `use()`-Methode zur Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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
> Für eine Website mit hohem Datenverkehr in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um sich gegen bekannte Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App gegen bekannte Web-Schwachstellen schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen zu den von ihm gesetzten Headern und den Schwachstellen, die es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts durch Ausführen des folgenden Befehls:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek ein, wie gezeigt.
Fügen Sie dann das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

```js
const compression = require("compression");
const helmet = require("helmet");

// Create the Express application object
const app = express();

// Add helmet to the middleware chain.
// Set CSP headers to allow our Bootstrap and Jquery to be served
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

// …
```

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um den _Subset_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Websites sinnvoll sind.
In der [LocalLibrary-Basistemplate](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) haben wir jedoch einige Bootstrap- und jQuery-Skripte aufgenommen.
Diese verletzen die _default_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) von helmet, die das Laden von Skripten über Kreuzseiten verbietet.
Um das Laden dieser Skripte zu ermöglichen, modifizieren wir die helmet-Konfiguration, sodass sie CSP-Direktiven setzt, die das Laden von Skripten von den angegebenen Domains erlauben.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anleitungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Ratenbegrenzung für die API-Endpunkte hinzufügen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßig viele Anfragen an Ihre Site gesendet werden könnten, wie etwa Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das sich nicht wie erwartet verhält.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können, die Ihren Server verlangsamen, können Ihnen auch die zusätzlichen Traffic-Kosten in Rechnung gestellt werden.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Gruppe von Routen gesendet werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts durch Ausführen des folgenden Befehls:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek ein, wie gezeigt.
Fügen Sie dann das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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
> Drittanbieter-Dienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie mehr erweiterten Schutz gegen Denial-of-Service- oder andere Angriffe benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und das Einstiegsdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Version von node, die von der Bibliothek benötigt wird.
Sie können die Version von node herausfinden, die für die Entwicklung verwendet wurde, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** hinzu, wie gezeigt (verwenden Sie die Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Version von node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es noch andere Möglichkeiten gibt, die Node-Version auf verschiedenen Hosting-Diensten anzugeben, aber der **package.json**-Ansatz wird weithin unterstützt.

#### Abhängigkeiten holen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Site erneut testen und sicherstellen, dass sie nicht durch eines unserer Änderungen beeinträchtigt wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Site aus (siehe [Testing the routes](/de/docs/Learn/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und überprüfen Sie, ob sich die Site weiterhin wie erwartet verhält.

### Ein Repository auf GitHub erstellen

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder aus Cloud-basierten Plattformen zur Quellcodeverwaltung zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und ein Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub verwenden, um Ihren Quellcode zu verwalten!
>
> Beachten Sie, dass die Verwendung von Tools zur Quellcodeverwaltung gute Softwareentwicklungspraxis ist, da sie Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekanntem guten Code" zu wechseln, wenn Sie ihn benötigen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Während diese nicht verpflichtend sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (z.B. "Local Library website written in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_-Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_-Auswahlliste.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _allen_ Quellcode — einschließlich Ihres Datenbank-Benutzernamens und -Passworts — jedem im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen fest codiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen die Einsicht in den Quellcode zu ermöglichen.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf den grünen **Clone or download**-Button auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfeld, das erscheint.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa folgendermaßen aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Nun, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquellcodes in den Repo-Ordner, machen Sie sie mit _git_ zu einem Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf über npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit` werden korrekt sind (Sie möchten Quellcode-Dateien einbeziehen, nicht Binärdateien, temporäre Dateien usw.).
   Es sollte ungefähr so aussehen wie die unten stehende Liste.

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

4. Wenn Sie zufrieden sind, `commit`-ten Sie die Dateien in ihrem lokalen Repo.
   Das ist gleichbedeutend mit der Unterzeichnung der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem Remote-GitHub-Repo zu synchronisieren (`push`) mit dem folgenden Befehl:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zurück zu der Seite auf GitHub gehen können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung nun hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen Add/Commit/Push-Zyklus ausführen.

Dies ist ein guter Zeitpunkt, um eine Sicherungskopie Ihres "Vanille"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Service (oder zur Entwicklung) sein könnten, könnten andere dies nicht sein.
Sie können dies mit `git` an der Befehlszeile tun:

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

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Glitch](https://glitch.com/) hostet.

### Warum Glitch?

Wir wählen Glitch aus mehreren Gründen:

- Glitch hat einen [kostenlosen Starter-Plan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist wirklich wichtig für MDN!
- Glitch kümmert sich um die Infrastruktur, damit Sie es nicht müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxys usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Glitch erlernen, sind übertragbar.
- Die Beschränkungen des Dienstes und des Plans haben keine wirklichen Auswirkungen auf die Verwendung von Glitch für das Tutorial.
  Beispielsweise:

  - Der Starter-Plan bietet nur 1000 "Projektstunden" pro Monat, die monatlich zurückgesetzt werden.
    Dies wird verwendet, wenn Sie aktiv an der Site arbeiten oder wenn jemand darauf zugreift.
    Wenn niemand auf die Site zugreift oder sie bearbeitet, wird sie in den Ruhezustand versetzt.
  - Die Starter-Plan-Umgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz.
    Für das Tutorial ist mehr als genug vorhanden, insbesondere weil unsere Datenbank anderswo gehostet wird.
  - Benutzerdefinierte Domänen werden nicht gut unterstützt (zum Zeitpunkt des Schreibens).
  - Weitere Einschränkungen finden Sie auf der [Glitch Technical Restrictions Page](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions).

Während Glitch geeignet ist, um diese Demonstration zu hosten, sollten Sie sich die Zeit nehmen, zu ermitteln, ob es für [Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Oberfläche, in der Sie Projekte aus Starter-Templates erstellen oder aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können.
Während Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container aufgebaut und ausgeführt.

Wie das alles "unter der Haube" funktioniert, ist ein Rätsel - Glitch sagt es nicht.
Was klar ist, ist, dass solange Sie eine ziemlich standardmäßige Nodejs-Webanwendung erstellen (zum Beispiel unter Verwendung von `package.json` für Ihre Abhängigkeiten), und nicht mehr Ressourcen verbrauchen als in den [technischen Einschränkungen](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) aufgeführt, Ihre Anwendung "einfach funktionieren" sollte.

Sobald die Anwendung ausgeführt wird, kann sie für die Produktion mit [privaten Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden.
Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, die, wie Sie sich aus einem früheren Abschnitt erinnern werden, die Art und Weise ist, wie wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL zu erhalten.
Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihrem GitHub-Repository enthalten sein.

Die Glitch-Bearbeitungsansicht bietet auch Terminalzugriff auf die Web-App-Umgebung, die Sie verwenden können, um mit der Web-App so zu arbeiten, als würde sie auf Ihrem lokalen Computer laufen.

Das ist alles, was Sie an Überblick benötigen, um zu beginnen.
Als nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Ein Glitch-Konto einrichten

Um Glitch zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die Schaltfläche **Anmelden** in der oberen Symbolleiste.
- Wählen Sie in der Popup-Datei GitHub, um sich mit Ihren GitHub-Anmeldedaten zu registrieren.
- Dann werden Sie in das Glitch-Dashboard: <https://glitch.com/dashboard> eingeloggt.

### Problemlösung der Node.js-Version

Hosting-Anbieter unterstützen in der Regel einige große Versionen der kürzlich veröffentlichten Node.js-Versionen.
Ist die exakte in Ihrer `package.json`-Datei angegebene "kleine" Version nicht unterstützt, wird sie in der Regel auf die nächste von ihnen unterstützte Version zurückfallen (und oft wird das einfach funktionieren).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16.
Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die Version von Node.js in Ihrer `package.json`-Datei wie gezeigt reduzieren.
Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node.js zu aktualisieren und in Zukunft besser auf dem neuesten Stand zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — und es kann sein, dass das Versionslimit nicht mehr besteht, bis Sie dies lesen.
Statt die `node`-Version herabzusetzen, könnten Sie Ihr Projekt hochladen, um zu sehen, ob es bauen kann.
Wenn es Fehler gibt und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node`-Version auf `>=v16` in Ihrer `package.json`-Datei im Glitch-Editor zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub

Als nächstes werden wir das Bibliotheksprojekt von GitHub importieren.
Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Website und dann die Schaltfläche **Neues Projekt** aus.
Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import von GitHub**.

![Glitch-Website-Dashboard mit Schaltfläche für neues Projekt und Popup-Menü mit "Import von GitHub"-Option](glitch_new_project_import_github.png)

Ein Popup wird angezeigt.
Geben Sie die URL Ihres GitHub-Bibliotheksrepositorys in das Popup ein und drücken Sie **OK**.
Unten haben wir das Repo für das fertiggearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des GitHub-Repos zum Importieren](glitch_new_project_github_repo_url.png)

Glitch importiert dann das Projekt und zeigt Benachrichtigungen über den Fortschritt an.
Nach Fertigstellung wird die Bearbeitungsansicht für das neue Projekt angezeigt, wie unten gezeigt wird.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die URL Ihrer Live-Site abrufen, indem Sie die Schaltfläche **Teilen** auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link für die Live-Site in die Adressleiste.
Die lokale Bibliotheksseite sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und > Ihr Projekt synchron zu halten.

### Verwenden Sie eine Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten.
Während Glitch nur SQLite-Datenbanken hostet (und wir MongoDB eingerichtet haben), bieten viele andere Websites MongoDB-Datenbanken als Dienst an.

Eine Möglichkeit ist es, den [Einrichtung der MongoDB-Datenbank](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database)-Anweisungen aus einem früheren Teil des Tutorials zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die Datei `.env` in der Bearbeitungsansicht des Projekts.
Geben Sie die Variablen `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Seite wird aktualisiert, während Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) vorgesehen und wurde beim Import in Glitch automatisch erstellt.
> Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorangegangenen Abschnitt, dass wir über die Notwendigkeit gesprochen haben, [NODE_ENV auf 'production' zu setzen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir machen dies in derselben Datei, in der wir die Variablen `MONGODB_URI` setzen.

Öffnen Sie `.env` und fügen Sie eine Variable `NODE_ENV` mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die Bibliotheksanwendung ist nun eingerichtet und für den Produktionsbetrieb konfiguriert.
Sie können über die Website-Oberfläche Daten hinzufügen, und es sollte wie in der Entwicklung funktionieren (allerdings mit weniger Debug-Informationen, die bei ungültigen Seiten exponiert werden).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Debuggen von Express-Apps auf Glitch

Glitch ermöglicht effektives Debuggen.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Protokollschaltfläche unten in der Bearbeitungsansicht aus, um Protokollinformationen von Ihrem Server anzuzeigen, wie z.B. Konsolen-Protokollausgaben.
- Wählen Sie die Terminals-Schaltfläche unten in der Bearbeitungsansicht aus, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Werkzeuge in der Umgebung auszuführen.
  Zum Beispiel könnten Sie `node -v` verwenden, um die Version von Node zu überprüfen.
- Interaktives Debuggen in VSCode mit der _GLITCH-Erweiterung für VSCode_.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.app/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keinen komplett kostenlosen Starter-Tier mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen ein attraktives Hosting-Angebot:

- Railway übernimmt den Großteil der Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxys usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Railway hat einen [Schwerpunkt auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar.
  Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.app/) ist klar und umfassend.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um herauszufinden, ob Railway für [Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway die geeignete Umgebung und Abhängigkeiten konfigurieren und auch verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen basierend auf ihrer Verwendung "gemeinsamer Konventionen" automatisch erkennen und installieren kann.
Railway erkennt beispielsweise Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den verwendeten Paketmanager zum Aufbau anhand der "Lock"-Datei bestimmen.
Wenn die Anwendung beispielsweise die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ zur Installation der Pakete verwendet werden soll, während es bei _yarn.lock_ weiß, dass _yarn_ verwendet werden soll.
Nach der Installation aller Abhängigkeiten wird Railway nach Skripten mit dem Namen "build" und "start" in der Paketdatei suchen und diese verwenden, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks in verschiedenen Programmiersprachen zu erkennen.
> Für dieses Tutorial müssen Sie nichts anderes wissen, aber Sie können mehr über die Optionen für die Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich selbst unter Verwendung von Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.app/guides/variables) bereitgestellt werden.
Beispielsweise muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.app/guides/cli)-Tool.
Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von der lokalen Branch auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist alles, was Sie als Überblick benötigen, um die App bei Railway bereitzustellen.
Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Einen Railway-Account einrichten

Um Railway zu nutzen, müssen Sie zunächst ein Konto einrichten:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie in der Popup-Datei GitHub, um sich mit Ihren GitHub-Anmeldedaten anzumelden
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Dann werden Sie schließlich in das Railway.app-Dashboard: <https://railway.app/dashboard> eingeloggt.

### Bereitstellen auf Railway von GitHub

Als nächstes werden wir Railway einrichten, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Website-Menü, und dann die Schaltfläche **Neues Projekt**:

![Railway-Website-Dashboard mit hervorgehobener neue Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Möglichkeit, ein Projekt aus einer Vorlage zu erstellen, die zuerst in Ihrem GitHub-Konto erstellt wurde, und eine Reihe von Datenbanken.
Wählen Sie **Bereitstellung von GitHub-Repo**.

![Railway-Popup zeigt Bereitstellungsoptionen mit hervorgehobener Option für die Bereitstellung von GitHub-Repo](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<Benutzername>/express-locallibrary-tutorial`.

![Railway-Popup mit GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm, wenn Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und Fortschrittsanzeigen im Bereich Bereitstellungen anzeigen.
Nach erfolgreichem Abschluss der Bereitstellung sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Dashboard zeigt den Bereich Bereitstellungen für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Einstellungen_ aus, scrollen Sie dann zum Abschnitt Domains und drücken Sie die Schaltfläche **Domain generieren**.

![Railway-Projekteinstellungen-Registerkarte mit Schaltfläche zum Generieren einer Domain](railway_project_generate_domain.png)

Dies veröffentlicht die Seite und platziert die Domain anstelle der Schaltfläche, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte mit Link zur Local Library-Site](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen.
Da wir keine Produktionsdatenbank angegeben haben, wird die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, lassen Sie uns eine Produktions-MongoDB-Datenbank erstellen, um sie stattdessen zu verwenden.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard**-Option aus dem oberen Menü der Website aus und dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Dienstdetails einzustellen).
Wählen Sie die Schaltfläche **Neu** aus, die zum Hinzufügen von Diensten zum aktuellen Projekt verwendet wird.

![Railway-Projekt mit hervorgehobener Schaltfläche für neuen Dienst](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie gefragt werden, welche Art von Dienst hinzugefügt werden soll:

![Railway-Popup mit Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leerer Dienst usw](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen** aus, um das Hinzufügen der Datenbank zu starten

![Railway-Popup mit verschiedenen zur Auswahl stehenden Datenbanken: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst, der eine leere Datenbank im selben Projekt enthält, bereitstellen.
Nach Abschluss sehen Sie jetzt sowohl die Anwendung als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie die Registerkarte _Variabeln_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungen-Bildschirm zeigt die URL, die zum Verbinden zur Datenbank benötigt wird](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es dem Anwendungsprozess mit einer Umgebungsvariable hinzufügen.
Öffnen Sie zunächst den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variabeln_ aus und drücken Sie die **Neue Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die kopierte Verbindungs-URL der Datenbank ein (`MONGODB_URI` ist der Name der Umgebungsvariablen, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen).
Dies sollte wie der unten gezeigte Bildschirm aussehen.

![Railway-Website-Variablen-Bildschirm zeigt das Hinzufügen der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen** aus, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie Nullwerte für Ihre Objektscounts anzeigen, da die oben genannten Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem früheren Abschnitt, dass wir darüber gesprochen haben, [NODE_ENV auf 'production' zu setzen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies auf demselben Bildschirm tun, wo wir die Variable `MONGODB_URI` eingerichtet haben.

Öffnen Sie den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variabeln_ aus, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **Neue Variable**-Schaltfläche.

![Railway-Variablen-Registerkarte mit hervorgehobener Neue Variable-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable und `production` als Namen der Umgebung ein.
Drücken Sie anschließend die **Hinzufügen**-Schaltfläche.

![Railway-Variablen-Registerkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Bibliotheksanwendung ist nun eingerichtet und für den Produktionsbetrieb konfiguriert.
Sie können über die Website-Oberfläche Daten hinzufügen und es sollte auf die gleiche Weise funktionieren, wie es während der Entwicklung tat (wenn auch mit weniger Debug-Informationen für ungültige Seiten offen gelegt).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das Skript `populatedb` verwenden (Unter Verwendung Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier folgen](https://docs.railway.app/guides/cli).

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Zu den wichtigeren Operationen gehört die Bereitstellung des aktuellen Verzeichnisses Ihres Computers für ein zugehöriges Railway-Projekt (ohne dass Sie es auf GitHub hochladen müssen), und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das folgende in einem Terminal eingeben.

```bash
railway help
```

### Debuggen

Der Railway-Client bietet den Befehl logs zum Anzeigen der Protokoll-Endungen (ein umfassenderes Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Express-Apps in der Produktion, und auch die Serie von Tutorials über die Arbeit mit Express. Wir hoffen, dass Sie es nützlich gefunden haben. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

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

{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
