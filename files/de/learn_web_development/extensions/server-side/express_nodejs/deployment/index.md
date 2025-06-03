---
title: "Express Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: e89cf8c2d91de5ac01b7153f833eb8abc30364ad
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie eine Beispiel-Website mit Express erstellt und getestet haben, ist es an der Zeit, sie auf einem Webserver bereitzustellen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie man ein Express-Projekt hosten kann und beschreibt, was man tun muss, um es für die Produktion bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie alle vorherigen Themen des Tutorials, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wo und wie Sie eine Express-App in der Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder ausreichend, um mit dem öffentlichen Testen zu beginnen), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, bei der Express/Node als Webserver verwendet wird, um Ihre Website im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit unsicheren Entwicklungseinstellungen betrieben, die Debugging- und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung auswählen, um die Express-App zu hosten.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsfähige Infrastruktur für den Betrieb Ihrer Website einrichten.

Dieses Tutorial bietet einige Leitlinien zu Ihren Optionen bei der Auswahl eines Hosting-Dienstes, gibt einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereit zu machen, und ein praktisches Beispiel, wie man die LocalLibrary-Website in den [Railway](https://railway.com/) Cloud-Hosting-Dienst installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Gebrauch betreiben. Die Umgebung umfasst:

- Computer-Hardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxys, Load Balancers, etc.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weit verbreiteter, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem Remote-Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Dienstleisters ausgeführt wird. Der Remote-Server bietet in der Regel ein garantiertes Niveau an Rechenressourcen (z.B. CPU, RAM, Speicherplatz, etc.) und Internetverbindung für einen bestimmten Preis.

Diese Art von fern zugänglichen Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen Ihnen die Auswahl umfangreicherer Umgebungen, die möglicherweise eine vollständige Node-Einrichtung beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) begrenzen und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten Komponenten erhalten und bei Bedarf Teile des Systems aktualisieren können, wissen, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung kümmern (Server, Load Balancer, etc.), da die Hosting-Plattform dies für Sie erledigt. Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Server-Infrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS wählen, während andere die reduzierte Wartungsbelastung und die einfachere Skalierung von PaaS zu schätzen wissen. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, weshalb wir dies in diesem Tutorial tun werden.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollten diese Anweisungen zur Verfügung stellen, wie Sie eine Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy, etc., einrichten können. Zum Beispiel gibt es viele Schritt-für-Schritt-Leitfäden für verschiedene Konfigurationen in den [DigitalOcean Node Community Docs](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv Node (und Express) unterstützen oder gut damit zusammenarbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Levels an Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen und deren Services und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Überlegungen bei der Auswahl eines Hosts:

- Wie stark Ihre Website voraussichtlich ausgelastet ist und die Kosten für die Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Geräte) und vertikale Skalierung (Aufrüstung auf leistungsfähigere Geräte) und die Kosten dafür.
- Die Standorte, an denen der Anbieter Rechenzentren hat, und wo der Zugriff daher wahrscheinlich am schnellsten ist.
- Historische Verfügbarkeits- und Ausfallzeitenwerte des Hosts.
- Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine begrenzte Anzahl von Stunden an "Live-Zeit" in einigen Preisklassen oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, für die Sie sonst zahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit verfällt und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht ist, dass es ziemlich viele Sites gibt, die "kostenlose" Computing-Umgebungen bieten, die für Bewertung und Testen gedacht sind. Dies sind in der Regel recht ressourcenbeschränkte/limitierte Umgebungen, und Sie sollten sich bewusst sein, dass sie nach einer Probezeit verfallen können oder andere Einschränkungen haben. Sie sind jedoch großartig für das Testen von Websites mit geringem Datenaufkommen in einer gehosteten Umgebung und können einen einfachen Übergang zur Bezahlung von mehr Ressourcen bieten, wenn Ihre Website geschäftiger wird. Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), etc.

Die meisten Anbieter bieten auch eine "Basis-" oder "Hobby"-Stufe an, die für kleine Produktionswebsites gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet. Beispiele für beliebte Hosting-Anbieter mit relativ kostengünstigen Basisthemen (im Bereich von 5 bis 10 USD pro Monat) sind [Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, kann es sich herausstellen, dass die Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website bereit für die Veröffentlichung machen

Die wichtigsten Überlegungen beim Veröffentlichen Ihrer Website sind Web-Sicherheit und -Leistung. Mindestens möchten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stack-Traces entfernen, die auf Fehlerseiten während der Entwicklung enthalten sind, Ihr Logging bereinigen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten werden die wichtigsten Änderungen erläutert, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt andere nützliche Tipps in den Express-Dokumentationen — siehe [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) und [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen in **app.js** fest kodiert sind. Da die Entwicklungsdatenbank keine Informationen enthält, deren Offenlegung oder Beschädigung uns stören würde, besteht kein großes Risiko, dass diese Details bekannt werden. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerdaten, ist es sehr wichtig, Ihre Datenbankanmeldeinformationen zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion als für die Entwicklung verwenden und auch die Anmeldeinformationen der Produktionsdatenbank vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter das Setzen von Umgebungsvariablen über eine Weboberfläche unterstützt (was viele tun), besteht eine Möglichkeit darin, den Server die Datenbank-URL aus einer Umgebungsvariablen abrufen zu lassen. Unten ändern wir die LocalLibrary-Website, um die Datenbank-URI aus einer Betriebssystem-Umgebungsvariable abzurufen, wenn sie definiert wurde, und andernfalls die URL der Entwicklungsdatenbank zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Sie sollte in etwa so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenfolge aus einer Umgebungsvariable namens `MONGODB_URI` abzurufen, wenn sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere übliche Methode, um Produktionsdatenbankanmeldeinformationen vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm-Modul [dotenv](https://www.npmjs.com/package/dotenv) gelesen werden).

### Setzen von NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die `NODE_ENV` Umgebungsvariable auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Neben weniger ausführlichen Fehlermeldungen wird durch das Setzen der Variablen auf _production_ das Caching von View-Templates und von CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, aktiviert. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um das Dreifache steigern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder das Initialisierungssystem des Betriebssystems vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrer Umgebungs-Einrichtung vornehmen und nicht in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie dies für unser Hosting-Beispiel unten festgelegt wird.

### Angemessenes Logging

Logging-Aufrufe können sich auf eine stark frequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (zum Beispiel Verkehrsüberwachung oder Protokollierung von API-Aufrufen), aber Sie sollten versuchen, das zu Debugging-Zwecken hinzugefügte Logging zu minimieren.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, mit dem Sie steuern können, welches Logging durch Setzen einer Umgebungsvariable durchgeführt wird. Zum Beispiel zeigt der folgende Codeausschnitt, wie Sie "Autor"-Logging einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Logs dieses Objekts angezeigt.

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

  res.render("author_form", { title: "Update Author", author });
});
```

Sie können dann eine bestimmte Sammlung von Logs aktivieren, indem Sie sie als kommaseparierte Liste in der `DEBUG` Umgebungsvariable angeben. Sie können die Variablen für die Anzeige von Autor- und Buchlogs wie gezeigt setzen (Jokerzeichen werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können das Logging ersetzen, das Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und die Auswirkungen auf das Logging beobachten.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden von gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort, die an einen Client zurückgesendet wird, komprimieren, was die Zeit, die der Client benötigt, um die Seite abzurufen und zu laden, erheblich verkürzt. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Site hinzu, indem Sie die [compression](https://www.npmjs.com/package/compression) Middleware verwenden. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungsbibliothek ein wie gezeigt. Fügen Sie die Komprimierungsbibliothek mit der `use()`-Methode in die Middleware-Kette ein (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall allen!)

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
> Für eine stark frequentierte Website in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet zum Schutz vor bekannten Schwachstellen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die helfen, Ihre App vor bekannten Web-Schwachstellen zu schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen zu den gesetzten Headern und den Schwachstellen, vor denen sie schützen).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_ Bibliothek ein wie gezeigt. Fügen Sie dann das Modul mit der `use()`-Methode in die Middleware-Kette ein.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um die _Teilmengen_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Seiten sinnvoll sind. In der [LocalLibrary-Grundvorlage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) enthalten wir jedoch einige Bootstrap- und jQuery-Skripte. Diese verletzen den _Standard_ Helm-Inhaltssicherheitsrichtlinie (CSP), die das Laden von Cross-Site-Skripten nicht zulässt. Um das Laden dieser Skripte zu zulassen, ändern wir die Helmeinstellungen so, dass CSP-Direktiven gesetzt werden, um das Laden von Skripten von den angegebenen Domains zu erlauben. Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie der API-Routen Ratenbegrenzung hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßig viele Anfragen an Ihre Site gestellt werden könnten, wie Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das sich nicht wie erwartet verhält. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen verursacht werden und Ihren Server verlangsamen können, können Ihnen auch zusätzliche Kosten in Rechnung gestellt werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Sammlung von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_ Bibliothek ein wie gezeigt. Fügen Sie dann das Modul mit der `use()`-Methode in die Middleware-Kette ein.

```js
const compression = require("compression");
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");

const app = express();

// Set up rate limiter: maximum of twenty requests per minute
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
> Drittanbieterdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie erweiterte Schutzmaßnahmen gegen Denial-of-Service- oder andere Arten von Angriffen benötigen.

#### Setzen der Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Abhängigkeiten der Anwendung und die Einstiegspunktdatei zu bestimmen.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Node-Version, die für die Entwicklung verwendet wurde, abrufen, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** wie gezeigt hinzu (verwenden Sie die Versionsnummer für Ihr System).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Dienst unterstützt möglicherweise nicht die angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version auf verschiedenen Hosting-Diensten anzugeben, aber der **package.json** Ansatz wird weit verbreitet unterstützt.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, sollten wir die Website erneut testen und sicherstellen, dass sie nicht von unseren Änderungen betroffen war.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Starten Sie nun die Site (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und überprüfen Sie, dass die Site sich weiterhin wie erwartet verhält.

### Erstellen eines Anwendungs-Repositorys auf GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Source-Version-Control-Plattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und ein Repository für die Bibliothek ein und verwenden das **git** Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Source-Code-Management-Tools eine gute Softwareentwicklungspraxis ist, da sie es Ihnen ermöglicht, Änderungen auszuprobieren und bei Bedarf zwischen Ihren Experimenten und dem "bekannten guten Code" wechseln zu können!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl sie nicht zwingend erforderlich sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_), und eine Beschreibung (z.B. "Local Library website written in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlliste.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standard-Zugriff "Öffentlich" macht _alle_ Quellcodes öffentlich, einschließlich Ihres Datenbank-Benutzernamens und -Passworts – für jeden im Internet zugänglich! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ von Umgebungsvariablen liest und dass keine Anmeldeinformationen hart codiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat", um den Quellcode nur ausgewählten Personen zugänglich zu machen.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf die grüne **Clone or download** Schaltfläche auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im angezeigten Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL ungefähr so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Nun, da das Repository ("repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Guide](https://git-scm.com/downloads)).
2. Öffnen Sie ein Befehlszeilenfenster/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies wird das Repository im aktuellen Verzeichnis erstellen.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repo-Ordner, machen Sie sie mit _git_ zum Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Befehlszeilenfenster/Terminal und verwenden Sie den `add` Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status` Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit`ten möchten, korrekt sind (Sie möchten Quellcodedateien und keine Binär-, temporären Dateien etc. einbeziehen). Es sollte ungefähr so aussehen wie die folgende Auflistung.

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

4. Wenn Sie zufrieden sind, `commit`ten Sie die Dateien zu Ihrem lokalen Repo. Dies entspricht dem Unterschreiben der Änderungen und dem offiziellen Teil des lokalen Repos zu machen.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert. Der letzte Schritt besteht darin, Ihr lokales Repo mit dem Remote-GitHub-Repo zu synchronisieren (`push`) durch Ausführen des folgenden Befehls:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie in der Lage sein, zu der Seite auf GitHub zu gehen, auf der Sie Ihr Repo erstellt haben, die Seite zu aktualisieren und zu sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen Add/Commit/Push-Zyklus verwenden.

Dies ist ein guter Punkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Dienst sein könnten (oder für die Entwicklung), können andere nicht nützlich sein. Sie können dies mit `git` von der Befehlszeile tun:

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
> Git ist unglaublich mächtig! Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Glitch](https://glitch.com/) hostet.

### Warum Glitch?

Wir entscheiden uns für Glitch aus mehreren Gründen:

- Glitch hat einen [kostenlosen Starterplan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Dass es für alle Entwickler erschwinglich ist, ist für MDN sehr wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie dies nicht tun müssen. Kein Sorgen um Server, Load Balancer, Reverse Proxies und so weiter, macht es viel einfacher anzufangen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Glitch lernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen haben keine wirklichen Auswirkungen auf die Verwendung von Glitch für das Tutorial. Zum Beispiel:

  - Der Starterplan bietet nur 1000 "Projektstunden" pro Monat, die monatlich zurückgesetzt werden. Dies wird genutzt, wenn Sie die Website aktiv bearbeiten oder jemand darauf zugreift. Wenn niemand die Website aufruft oder bearbeitet, schläft sie.
  - Die Starterplan-Umgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz. Es gibt jedoch mehr als genug für das Tutorial, insbesondere weil unsere Datenbank anderswo gehostet wird.
  - Benutzerdefinierte Domains werden zum Zeitpunkt des Schreibens nicht gut unterstützt.
  - Weitere Beschränkungen finden Sie auf der [Glitch Technische Beschränkungen Seite](https://help.glitch.com/s/article/Technical-Restrictions).

Während Glitch für das Hosting dieser Demonstration angemessen ist, sollten Sie die Zeit nutzen, um festzustellen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Oberfläche, in der Sie Projekte aus Startervorlagen erstellen oder von GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können. Während Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container erstellt und ausgeführt.

Wie das alles "unter der Haube" funktioniert, bleibt ein Rätsel – Glitch verrät es nicht. Was klar ist, ist, dass, solange Sie eine standardmäßige Node.js-Webanwendung erstellen (zum Beispiel unter Verwendung von `package.json` für Ihre Abhängigkeiten) und nicht mehr Ressourcen verbrauchen, als in den [technischen Beschränkungen](https://help.glitch.com/s/article/Technical-Restrictions) aufgeführt sind, Ihre Anwendung "einfach funktionieren" sollte.

Sobald die Anwendung ausgeführt wird, kann sie für die Produktion mit [privaten Daten](https://help.glitch.com/s/article/Adding-Private-Data), die in einer `.env` Datei bereitgestellt werden, konfiguriert werden. Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem früheren Abschnitt erinnern, die Methode ist, mit der wir unsere Anwendung so konfiguriert haben, dass sie ihre Datenbank-URL erhält. Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihrem GitHub-Repository enthalten sein.

Die Glitch-Bearbeitungsansicht bietet auch _Terminal_-Zugriff auf die Web-App-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als ob sie auf Ihrem lokalen Computer ausgeführt würde.

Das ist alles, was Sie wissen müssen, um anzufangen. Als nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Ein Glitch-Konto erstellen

Um Glitch nutzen zu können, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Sign up** Schaltfläche in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Sie werden dann in das Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Fehlerbehebung bei der Node.js-Version

Hosting-Anbieter unterstützen in der Regel einige große Versionen der aktuellen Node.js-Releases. Wenn die von Ihnen in Ihrer `package.json`-Datei angegebenen "minderen" Versionen nicht unterstützt werden, fallen diese Anbieter normalerweise auf die ihnen am nächsten liegende unterstützte Version zurück (und oft wird dies einfach funktionieren).

Leider ist zum Zeitpunkt des Schreibens die höchst unterstützte Version auf Glitch Node.js 16. Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die in Ihrer `package.json`-Datei verwendete Version wie gezeigt reduzieren. Sie müssen auch die Tests erneut durchführen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zu aktualisieren und in Zukunft besser aktuell zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — und es kann sein, dass das Versionslimit zum Zeitpunkt des Lesens nicht mehr existiert. Anstatt die `node`-Version herabzustufen, können Sie Ihr Projekt hochladen, um zu sehen, ob es erstellt wird. Wenn es beim Hochladen Fehler gibt und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node`-Version im Glitch-Editor auf `>=v16` zu setzen.

> [!NOTE]
> Sie können auch die unterstützten Versionen überprüfen, indem Sie den folgenden Befehl in das Terminal eines Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub

Als Nächstes importieren wir das Bibliotheksprojekt von GitHub. Wählen Sie zuerst die **Dashboard**-Option im oberen Menü der Website aus, und dann **New project**. Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch-Website-Dashboard zeigt eine neue Projekt-Schaltfläche und ein Popup-Menü mit der Option "Import from GitHub"](glitch_new_project_import_github.png)

Ein Popup erscheint. Geben Sie die URL Ihres GitHub-Bibliotheks-Repositorys in das Popup ein und drücken Sie **OK**. Unten haben wir das Repository für das durchgearbeitete Projekt eingegeben.

![Glitch-Popup zur Eingabe der URL des GitHub-Repos zum Importieren](glitch_new_project_github_repo_url.png)

Glitch wird dann das Projekt importieren und Mitteilungen über den Fortschritt anzeigen. Nach Abschluss wird es die Bearbeitungsansicht für das neue Projekt anzeigen, wie unten gezeigt.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die URL der Live-Site erhalten, indem Sie die **Share**-Schaltfläche auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link zur Live-Site in die Adressleiste. Die lokale Bibliotheksseite sollte sich öffnen und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub. Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchronisiert zu halten.

### Eine Produktions-MongoDB-Datenbank verwenden

Sie sollten für die Produktion eine andere Datenbank einrichten als für die Entwicklung. Während Glitch nur SQLite-Datenbanken hostet (und wir darauf eingerichtet sind, MongoDB zu verwenden), bieten viele andere Seiten MongoDB-Datenbanken als Dienst an.

Eine Option ist, die [Einrichtung der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) aus einem vorherigen Tutorial-Abschnitt zu befolgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Editoransicht für das Projekt. Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein. Die Site wird aktualisiert, während Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt. Sie ist für [private Daten](https://help.glitch.com/s/article/Adding-Private-Data) gedacht und wurde beim Import in Glitch automatisch erstellt. Sie wird nie exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir `NODE_ENV` auf 'production' setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir machen dies in derselben Datei, in der wir die `MONGODB_URI`-Variable festlegen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorhergehenden Abschnitt).

Die lokale Bibliotheksanwendung ist nun eingerichtet und für die Produktion konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte wie in der Entwicklungsphase funktionieren (wenn auch mit weniger Debug-Informationen für ungültige Seiten sichtbar).

> [!NOTE]
> Wenn Sie nur einige Daten zu Testzwecken hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express Tutorial Part 3: Using a Database (with Mongoose) Testing — create some items](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Debugging von Express-Apps auf Glitch

Glitch ermöglicht effektives Debugging. Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Logs-Schaltfläche unten in der Editoransicht, um Protokollinformationen von Ihrem Server zu sehen, wie Konsolen-Log-Ausgaben.
- Wählen Sie die Terminal-Schaltfläche unten in der Editoransicht, um ein Terminal in der Hosting-Umgebung zu öffnen. Sie können dieses verwenden, um Befehle und Tools in der Umgebung auszuführen. Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debugging in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keine vollständig kostenlosen Starterstufen mehr. Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer die bessere Option ist.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den größten Teil der Infrastruktur, so dass Sie diese Arbeit nicht selbst machen müssen. Keine Sorge um Server, Load Balancer, Reverse Proxies usw., das macht es viel einfacher, anzufangen.
- Railway legt Wert auf die [Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einem schnelleren und weicheren Lernprozess führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway lernen, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Prinzipien und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Service scheint sehr zuverlässig zu sein und wenn Sie ihn am Ende lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten die Zeit nutzen, um festzustellen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen auf Basis ihrer Verwendung von "häufigen Konventionen" automatisch erkennt und installiert. Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json** Datei haben und kann den Paketmanager, der für das Bauen verwendet wird, anhand der "lock"-Datei bestimmen. Zum Beispiel, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass npm zur Installation der Pakete verwendet werden soll, während es, wenn es **yarn.lock** findet, weiß, dass yarn verwendet werden soll. Nachdem alle Abhängigkeiten installiert wurden, sucht Railway nach Skripten mit den Namen "build" und "start" in der Paketdatei und verwendet diese, um den Code zu bauen und auszuführen.

> [!NOTE]
> Railway nutzt [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind. Sie müssen für dieses Tutorial nichts weiter wissen, aber Sie können mehr darüber erfahren, wie man Node-Anwendungen bereitstellt, in [Nixpacks Node](https://nixpacks.com/docs/providers/node).

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die als [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable abrufen. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tool. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository aus der lokalen Branch in die Live-Site hochzuladen, die Protokolle des ausgeführten Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und zu erhalten und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit dem CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie wissen müssen, um die App auf Railway bereitzustellen. Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Ein Railway-Konto erstellen

Um Railway zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Möglicherweise müssen Sie in Ihr Email-Postfach gehen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway für die Bereitstellung unserer Bibliothek aus GitHub ein. Wählen Sie zuerst die **Dashboard** Option im oberen Menü der Website aus und dann **New Project**:

![Railway-Website-Dashboard zeigt neue Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage bereitzustellen, die zuerst in Ihrem GitHub-Konto erstellt wurde, und mehrere Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup zeigt Bereitstellungsoptionen mit hervorgehobener Option "Deploy from GitHub repo"](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den von Ihnen bei der Einrichtung mit Railway geteilten GitHub-Repos werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, in dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt, zeigt den Fortschritt auf der Registerkarte Bereitstellungen an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie unten.

![Railway Dashboard zeigt die Registerkarte "Deployments" für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Settings_, scrollen Sie dann zum Bereich Domains und drücken Sie die **Generate Domain** Schaltfläche.

![Railway Projekt Einstellungen Tab zeigt eine Schaltfläche zum Generieren einer Domain](railway_project_generate_domain.png)

Dies wird die Website veröffentlichen und die Domain anstelle der Schaltfläche anzeigen, wie unten gezeigt.

![Railway Projekteinstellungen-Tab zeigt einen Link zur lokalen Bibliotheksseite](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass die lokale Bibliothek, da wir keine Produktionsdatenbank angegeben haben, mit Ihrer Entwicklungsdaten geöffnet wird.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, lassen Sie uns als nächstes eine Produktions-MongoDB-Datenbank erstellen, die stattdessen verwendet wird. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in einem separaten Projekt zu erstellen oder sogar eine _MongoDB Atlas_ Datenbank für die Produktionsdaten zu verwenden, genauso wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard** Option im oberen Menü der Website und dann Ihr Anwendungsprojekt aus. Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes zu setzen). Wählen Sie die **New** Schaltfläche, die zum Hinzufügen von Diensten zum aktuellen Projekt verwendet wird.

![Railway Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wenn Sie nach dem Typ des Dienstes gefragt werden, wählen Sie **Database** aus:

![Railway Popup zeigt Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um mit dem Hinzufügen der Datenbank zu beginnen:

![Railway Popup zeigt verschiedene Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen. Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen zur Datenbank anzuzeigen. Öffnen Sie die _Variables_ Registerkarte und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Eisenbahn-Datenbankeinstellungen zeigen die zum Verbinden mit der Datenbank benötigte URL](railway_mongodb_connect.png)

Um dies der Bibliotheksanwendung zugänglich zu machen, müssen wir es über eine Umgebungsvariable zum Anwendungsprozess hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die _Variables_ Registerkarte und drücken Sie die **New Variable** Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL, die Sie für die Datenbank kopiert haben, ein (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies sollte ungefähr so aussehen wie der Bildschirm unten gezeigt.

![Railway-Website-Variablenbildschirm beim Hinzufügen der MONGODB_URI-Variable und -Adresse](railway_variables_database_url.png)

Wählen Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie null Werte für Ihre Objektanzahlen anzeigen, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir die `NODE_ENV` auf 'production' setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies auf demselben Bildschirm tun, auf dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die _Variables_ Registerkarte, auf der Sie sehen, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **New Variable** Schaltfläche.

![Railway Variablen Registerkarte mit hervorgehobener neuer Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Name der neuen Variable und `production` als Name der Umgebung ein. Drücken Sie dann die **Add** Schaltfläche.

![Railway Variablen Registerkarte mit neuer NODE_ENV-Variable auf 'production' gesetzt](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist nun bereitgestellt und für die Produktion konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen und sie sollte genauso funktionieren, wie sie während der Entwicklung funktioniert hat (wenn auch mit weniger Debug-Informationen für ungültige Seiten sichtbar).

> [!NOTE]
> Wenn Sie nur einige Daten zu Testzwecken hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express Tutorial Part 3: Using a Database (with Mongoose) Testing — create some items](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers in einem zugeordneten Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie im Terminal Folgendes eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den logs-Befehl an, um das Ende der Logs anzuzeigen (ein vollständigeres Log ist für jedes Projekt auf der Website verfügbar):

```bash
railway logs
```

## Zusammenfassung

Dies ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch das Ende der Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub finden](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Leitfäden
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Leitfäden

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
