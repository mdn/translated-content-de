---
title: "Express-Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine beeindruckende [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host für die Bereitstellung Ihrer Website finden können und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.

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

Sobald Ihre Website fertig ist (oder "fertig genug" für öffentliche Tests), müssen Sie sie an einem öffentlich zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, bei der Sie Express/Node als Webserver verwenden, um Ihre Website an den lokalen Browser/das Netzwerk zu übertragen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debugging- und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie Folgendes tun:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Infrastruktur auf Produktionsniveau für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial gibt Hinweise zu Ihren Optionen zur Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion vorzubereiten, und ein praktisches Beispiel, wie die Installation der LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst erfolgen kann.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für die externe Nutzung ausführen. Diese Umgebung umfasst:

- Die Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachen-Laufzeitumgebung und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich Webserver, Reverse-Proxy, Load Balancer usw.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über einen schnellen Link mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet im Wesentlichen, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet in der Regel ein garantiertes Niveau an Computerressourcen (z.B. CPU, RAM, Speicherplatz usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Computer-/Netzwerkhardware wird als „Infrastructure as a Service (IaaS)“ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen Ihnen die Auswahl vollständig ausgestatteterer Umgebungen, die möglicherweise ein komplettes Node-Setup umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen Ihnen unbekannten Server (oder andere Komponenten) beschränken und können auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, sodass Sie die gewünschten erhalten und wissen, wo Sie anfangen müssen, wenn Sie Teile des Systems aktualisieren müssen!

Andere Hosting-Anbieter unterstützen Express als Teil eines Plattformdienstes (_Platform as a Service_, _PaaS_). Bei der Nutzung dieser Art von Hosting müssen Sie sich keine Sorgen um den größten Teil Ihrer Produktionsumgebung (Server, Load Balancer usw.) machen, da die Hostplattform diese für Sie übernimmt. Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Serverinfrastruktur.

Einige Entwickler wählen die erhöhte Flexibilität, die IaaS gegenüber PaaS bietet, während andere die reduzierte Wartungsbelastung und die einfachere Skalierung von PaaS schätzen. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, weshalb wir dies in diesem Tutorial tun werden.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollten diese Anweisungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community Docs](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekannt dafür sind, entweder aktiv _Node_ (und _Express_) zu unterstützen oder gut damit zu arbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und deren Dienstleistungen und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, ist es ratsam, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Punkte, die bei der Auswahl eines Hosts zu berücksichtigen sind:

- Wie stark Ihre Website voraussichtlich ausgelastet sein wird und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) sowie deren Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren hat und wo der Zugriff wahrscheinlich am schnellsten ist.
- Das historische Uptime- und Downtime-Verhalten des Anbieters.
- Die bereitgestellten Tools zur Verwaltung der Site — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen, oder bieten nur wenig Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate an, die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie angewiesen sind, im Laufe der Zeit abläuft, und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es sinnvoller gewesen wäre, von Anfang an einen anderen Service zu nutzen!

Die gute Nachricht, wenn Sie gerade erst anfangen, ist, dass es eine Reihe von Sites gibt, die "kostenfreie" Computerumgebungen anbieten, die für Evaluierungs- und Testzwecke gedacht sind. Dies sind in der Regel recht ressourcenbeschränkte Umgebungen und Sie müssen sich darüber im Klaren sein, dass sie nach einer bestimmten Einführungsphase enden können oder andere Einschränkungen haben. Sie eignen sich jedoch hervorragend zum Testen von Websites mit geringem Datenverkehr in einer gehosteten Umgebung und bieten beim steigenden Traffic eine einfache Migration zu mehr Ressourcen gegen Bezahlung an. Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine „Basis“- oder „Hobby“-Stufe an, die für kleine Produktionswebsites gedacht ist und die nützlichere Ebenen der Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Grundlagenstufe für das Computing im Bereich von 5 bis 10 USD pro Monat haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Vorbereiten Ihrer Website zur Veröffentlichung

Beim Veröffentlichen Ihrer Website sollten Sie sich vor allem Gedanken über die Websicherheit und Leistung machen. Mindestens möchten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen schützen, die Stack-Traces in Fehlermeldungen während der Entwicklung entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Weitere nützliche Tipps gibt es in den Express-Dokumenten — siehe [Beste Praxis für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Beste Praxis für die Produktion: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bis jetzt haben wir in diesem Tutorial eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen hardcodiert in **app.js** enthalten sind. Da die Entwicklungsdatenbank keine Informationen enthält, deren Offenlegung oder Beschädigung uns Sorgen machen, gibt es kein besonderes Risiko, diese Details preiszugeben. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist es sehr wichtig, Ihre Datenbankanmeldeinformationen zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als für die Entwicklung, und die Anmeldeinformationen der Produktionsdatenbank auch getrennt vom Quellcode halten, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einrichtung von Umgebungsvariablen über eine Weboberfläche unterstützt (was viele tun), besteht eine Möglichkeit darin, dass der Server die Datenbank-URL aus einer Umgebungsvariable abruft. Unten ändern wir die LocalLibrary-Website, um die Datenbank-URI aus einer OS-Umgebungsvariable zu beziehen, wenn diese definiert ist, und andernfalls die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Sie sieht ungefähr so aus:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenfolge aus einer Umgebungsvariable namens `MONGODB_URI` zu beziehen, wenn diese gesetzt ist (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine weitere übliche Möglichkeit, Produktionsdatenbankanmeldedaten unabhängig vom Quellcode zu halten, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel können sie mit dem npm-Modul [dotenv](https://www.npmjs.com/package/dotenv) gelesen werden).

### Setze NODE_ENV auf 'production'

Wir können Stack-Traces in Fehlermeldungen entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (sie ist standardmäßig auf '_development_' konfiguriert). Durch das Setzen der Variablen auf _production_ werden weniger ausführliche Fehlermeldungen generiert und view templates sowie aus CSS-Erweiterungen generierte CSS-Dateien zwischengespeichert. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die App-Leistung um das Dreifache steigern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder dem Initialisierungssystem des Betriebssystems vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungseinrichtung vornehmen, nicht in Ihrer App, aber sie ist wichtig genug, um hier erwähnt zu werden! Wir zeigen unten, wie dies in unserem Hosting-Beispiel eingestellt wird.

### Ordentlich protokollieren

Protokollierungsaufrufe können sich auf eine stark frequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. das Nachverfolgen des Datenverkehrs oder das Protokollieren von API-Aufrufen), sollten jedoch versuchen, die Menge der zum Debuggen hinzugefügten Protokollierung zu minimieren.

Eine Möglichkeit, die "Debug"-Protokollierung in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), das es Ihnen ermöglicht zu steuern, welche Protokollierung durch Setzen einer Umgebungsvariable durchgeführt wird. Zum Beispiel zeigt das Codefragment unten, wie Sie "author"-Protokollierung einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert und das Präfix "author" wird automatisch für alle Protokolle dieses Objekts angezeigt.

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

Sie können dann eine bestimmte Protokollsatz aktivieren, indem Sie sie als durch Kommas getrennte Liste in der `DEBUG`-Umgebungsvariable angeben. Sie können die Variablen für die Anzeige von "author"- und "book"-Protokollen wie gezeigt setzen (Wildcard-Zeichen werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe zu `debug` können die Protokollierung ersetzen, die Sie zuvor möglicherweise mit `console.log()` oder `console.error()` gemacht haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Protokollierung über das [debug](https://www.npmjs.com/package/debug) Modul. Aktivieren oder deaktivieren Sie die Protokollierung in Ihrer Entwicklungsumgebung, indem Sie die DEBUG-Variable setzen und beobachten Sie, welchen Einfluss dies auf die Protokollierung hat.

Wenn Sie die Website-Aktivitäten protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Für weitere Informationen zu diesem Thema siehe: [Beste Praxis für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort vor dem Senden an einen Client komprimieren, wodurch die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich reduziert wird. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Seite mit [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts durch Ausführen des folgenden Kommandos:

```bash
npm install compression
```

Öffnen Sie **./app.js** und erfordern Sie die Komprimierungsbibliothek wie gezeigt. Fügen Sie die Komprimierungsbibliothek mit der `use()`-Methode zur Middleware-Kette hinzu (dies sollte vor allen Routen erfolgen, die Sie komprimieren möchten — in diesem Fall alle!)

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

### Verwenden Sie Helmet, um sich vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Webschwachstellen schützen helfen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen zu den gesetzten Headern und den geschützten Schwachstellen).

Installieren Sie dies im Stammverzeichnis Ihres Projekts durch Ausführen des folgenden Kommandos:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und erfordern Sie die _helmet_ Bibliothek wie gezeigt. Fügen Sie das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um die _Teilmenge_ der Sicherheits-Header hinzuzufügen, die für die meisten Sites sinnvoll sind. Allerdings enthalten wir im [LocalLibrary Basis-Template](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) einige Bootstrap- und jQuery-Skripte. Diese verstoßen gegen die _Standard-CSP_ (Content Security Policy) von Helmet, die das Laden von Skripten über ein Querverweis-Site nicht erlaubt. Um das Laden dieser Skripte zu ermöglichen, passen wir die Helmet-Konfiguration so an, dass CSP-Direktiven gesetzt werden, die das Laden von Skripten von den angegebenen Domains zulassen. Für Ihren eigenen Server können Sie bestimmte Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie den API-Routen eine Ratenbegrenzung hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden könnten, wie Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das sich nicht wie erwartet verhält. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können, wodurch Ihr Server langsamer wird, können Ihnen auch Kosten für den zusätzlichen Datenverkehr entstehen. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Reihe von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts durch Ausführen des folgenden Kommandos:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und erfordern Sie die _express-rate-limit_ Bibliothek wie gezeigt. Fügen Sie das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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
> Drittdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen fortschrittlicheren Schutz vor Denial-of-Service- oder anderen Angriffstypen benötigen.

#### Setze Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Datei des Eintrittspunkts zu verstehen.

Die einzige wichtige Information, die in unserer jetzigen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version. Sie können die in der Entwicklung verwendete Node-Version finden, indem Sie den Befehl eingeben:

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

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass versucht wird, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es auf verschiedenen Hosting-Services andere Möglichkeiten geben kann, die Node-Version anzugeben, aber der Ansatz mit **package.json** ist weit verbreitet.

#### Erhalten Sie Abhängigkeiten und testen Sie erneut

Bevor wir weitermachen, lassen Sie uns die Site erneut testen und sicherstellen, dass sie durch keine unserer Änderungen betroffen wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Starten Sie nun die Site (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und prüfen Sie, ob sich die Site so verhält, wie Sie es erwarten.

### Ein Anwendungs-Repository in GitHub erstellen

Viele Hosting-Services ermöglichen das Importieren und/oder Synchronisieren von Projekten aus einem lokalen Repository oder von cloudbasierten Versionierungskontrollplattformen. Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Versionierungskontroll-Tools gute Softwareentwicklungspraxis ist, da sie es Ihnen ermöglichen, Änderungen auszuprobieren und bei Bedarf zwischen Ihren Experimenten und "bekanntem, funktionierendem Code" zu wechseln!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf das **+** Symbol in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Diese sind zwar nicht zwingend erforderlich, werden aber dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (z.B. "Local Library-Website in Express (Node)").
   - Wählen Sie **Node** in der Auswahl _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahl _Add license_.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standard "Öffentlich"-Zugriff macht _alle_ Quellcodes — einschließlich Ihres Datenbank-Benutzernamens und Passworts — für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen hardcodiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen den Zugriff auf den Quellcode zu gewähren.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf die grüne **Clone or download** Schaltfläche auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im angezeigten Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Nun, da das Repository ("Repo") auf GitHub erstellt ist, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizielle Git-Download-Anleitung](https://git-scm.com/downloads)).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repo-Ordner, machen Sie sie mit _git_ zum Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, dass alle Dateien, die Sie `commit`ten möchten, richtig sind (Sie möchten Quellcodedateien, keine Binärdateien, temporären Dateien usw. einfügen).
   Es sollte in etwa wie die folgende Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit`ten Sie die Dateien in Ihr lokales Repo. Dies entspricht der Unterzeichnung der Änderungen und macht sie offiziell Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das entfernte Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem entfernten GitHub-Repo zu synchronisieren (`push`) mit dem folgenden Befehl:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie auf die Seite auf GitHub zurückkehren, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung nun hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, indem Sie diesen add/commit/push-Zyklus verwenden, wenn sich die Dateien ändern.

Dies ist ein guter Moment, um ein Backup Ihres „Vanille“-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, bei der Bereitstellung auf jedem Hosting-Service (oder für die Entwicklung) nützlich sein könnten, könnten andere dies nicht sein. Sie können dies mit `git` über die Befehlszeile tun:

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
> Git ist unglaublich leistungsfähig! Um mehr zu erfahren, siehe [Lernen von Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Glitch](https://glitch.com/) bereitgestellt werden kann.

### Warum Glitch?

Wir entscheiden uns aus mehreren Gründen, Glitch zu verwenden:

- Glitch bietet einen [kostenlosen Starter-Plan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenngleich mit einigen Einschränkungen. Dass es erschwinglich für alle Entwickler ist, ist für MDN wirklich wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie das nicht müssen. Sich nicht um Server, Load Balancer, Reverse Proxies und so weiter kümmern zu müssen, macht den Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Glitch erlernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen unsere Verwendung von Glitch für das Tutorial kaum. Zum Beispiel:

  - Der Starter-Plan bietet nur 1000 „Projektstunden“ pro Monat, was monatlich zurückgesetzt wird. Diese Stunden werden genutzt, wenn Sie die Seite aktiv bearbeiten oder wenn jemand darauf zugreift. Wenn niemand die Site aufruft oder bearbeitet, wird sie in den Ruhezustand versetzt.
  - Die Starter-Planumgebung verfügt nur über eine begrenzte Menge an RAM und Speicherplatz für Container. Es gibt jedoch mehr als genug für das Tutorial, insbesondere weil unsere Datenbank woanders gehostet wird.
  - Individuelle Domains werden aktuell nicht gut unterstützt.
  - Weitere Einschränkungen finden Sie auf der [Glitch Technical Restrictions-Seite](https://help.glitch.com/s/article/Technical-Restrictions).

Obgleich sich Glitch zum Hosten dieser Demonstration eignet, sollten Sie sich die Zeit nehmen festzustellen, ob es [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine Webschnittstelle, in der Sie Projekte aus Startervorlagen erstellen oder aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können. Während Sie Änderungen vornehmen, wird das Projekt in einer eigenen, isolierten und unabhängigen virtualisierten Umgebung erstellt und ausgeführt.

Wie all dies "unter der Haube" funktioniert, ist ein Geheimnis — Glitch verrät es nicht. Es ist jedoch klar, dass solange Sie eine ziemlich standardmäßige NodeJS-Webanwendung erstellen (zum Beispiel unter Verwendung **package.json** für Ihre Abhängigkeiten) und nicht mehr Ressourcen verbrauchen, als auf der [Technische Einschränkungen-Seite](https://help.glitch.com/s/article/Technical-Restrictions) angegeben sind, Ihre Anwendung "einfach funktionieren" sollte.

Sobald die Anwendung ausgeführt wird, kann sie mit [privaten Daten](https://help.glitch.com/s/article/Adding-Private-Data) unter Verwendung einer `.env` Datei für den Produktionsbetrieb konfiguriert werden. Die Werte der geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem früheren Abschnitt erinnern werden, die Methode war, mit der wir die Anwendung so konfiguriert haben, dass sie ihre Datenbank-URL erhält. Beachten Sie, dass die Variablen _geheim_ sind: die `.env`-Datei sollte nicht in Ihrem GitHub-Repository enthalten sein.

Die Glitch-Bearbeitungsansicht bietet auch _Terminal_-Zugriff auf die Webanwendungsumgebung, die Sie verwenden können, um mit der Webanwendung zu arbeiten, als ob sie auf Ihrer lokalen Maschine ausgeführt würde.

Das ist alles, was Sie benötigen, um zu beginnen. Als Nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Ein Glitch-Konto erstellen

Um mit der Nutzung von Glitch zu beginnen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie auf [glitch.com](https://glitch.com/) und klicken Sie auf die **Sign up**-Schaltfläche in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten zu registrieren.
- Sie werden dann zum Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Troubleshooting der Node.js-Version

Hosting-Anbieter unterstützen in der Regel einige Hauptversionen der neuesten Node.js-Versionen. Wenn die von Ihnen in Ihrer `package.json`-Datei angegebene "Minor"-Version nicht unterstützt wird, fallen sie normalerweise auf die nächstliegende unterstützte Version zurück (und oft funktioniert dies einfach).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16. Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die in Ihrer `package.json` Datei verwendete Version wie gezeigt reduzieren. Außerdem müssen Sie erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zu aktualisieren und in Zukunft besser auf dem aktuellen Stand zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — und es kann sein, dass die Versionsgrenze zum Zeitpunkt des Lesens nicht mehr existiert. Anstelle des Downgrades der `node`-Version könnten Sie Ihr Projekt hochladen, um zu sehen, ob es gebaut wird. Wenn es Fehler gibt und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node`-Version in der Glitch-Editor in der `package.json` auf `>=v16` einzustellen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub

Als Nächstes importieren wir das Bibliotheksprojekt von GitHub. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Website und dann die Schaltfläche **New project**. Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch-Website-Dashboard zeigt eine Schaltfläche für ein neues Projekt und ein Popup-Menü mit der Option "Import from GitHub"](glitch_new_project_import_github.png)

Es erscheint ein Popup. Geben Sie die URL Ihres GitHub-Bibliotheks-Repositorys in das Popup ein und drücken Sie **OK**. Unten haben wir das Repo für das bearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des GitHub-Repos, das importiert werden soll](glitch_new_project_github_repo_url.png)

Glitch wird das Projekt importieren und den Fortschritt anzeigen. Nach Abschluss zeigt es die Bearbeitungsansicht für das neue Projekt an, wie unten gezeigt.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die URL der Live-Site erhalten, indem Sie die **Share**-Schaltfläche auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie eine neue Browsertab und kopieren Sie den Link zur Live-Site in die Adressleiste. Die Local Library Site sollte öffnen und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Vorgang war ein einmaliger Import von GitHub. Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchron zu halten.

### Verwenden Sie eine Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten. Während Glitch nur SQLite-Datenbanken hostet (und wir eingerichtet sind, um MongoDB zu verwenden), bieten viele andere Sites MongoDB-Datenbanken als Service an.

Eine Möglichkeit besteht darin, den Anweisungen unter [Einrichten der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Bearbeitungsansicht des Projekts. Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein. Die Site wird aktualisiert, während Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt. Sie ist für [Private Daten](https://help.glitch.com/s/article/Adding-Private-Data) vorgesehen und wurde beim Import zu Glitch automatisch erstellt. Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem früheren Abschnitt daran, dass wir [set NODE_ENV to 'production'](#set_node_env_to_production) setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Dies erfolgt in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die Local Library-Anwendung ist nun eingerichtet und für den Produktionsbetrieb konfiguriert. Sie können Daten über die Website-Schnittstelle hinzufügen und sie sollte wie während der Entwicklung funktionieren (obwohl weniger Debug-Informationen für ungültige Seiten angezeigt werden).

> [!NOTE]
> Wenn Sie nur einige Testdaten hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — Erstelle einige Elemente](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Debugging von Express-Apps auf Glitch

Glitch ermöglicht effektives Debugging.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Protokoll-Schaltfläche am unteren Rand der Bearbeitungsansicht aus, um Protokollinformationen von Ihrem Server anzuzeigen, wie z.B. Konsolenprotokollausgaben.
- Wählen Sie die Terminal-Schaltfläche am unteren Rand der Bearbeitungsansicht aus, um ein Terminal in der Hosting-Umgebung zu öffnen. Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen. Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debugging in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert werden kann.

### Warum Railway?

> [!WARNING]
> Railway verfügt nicht mehr über eine vollständig kostenlose Starter-Stufe. Wir haben diese Anweisungen beibehalten, da Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie das nicht müssen. Sich nicht um Server, Load Balancer, Reverse Proxies und so weiter kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway legt den [Fokus auf die Entwicklererfahrung bei Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als bei vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und umfassend.
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn einmal lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen festzustellen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und -umgebungen automatisch erkennen und installieren kann, basierend auf ihrer Verwendung von "gemeinsamen Konventionen". Beispielsweise erkennt Railway Node-Anwendungen daran, dass sie eine **package.json**-Datei haben und kann den Paketmanager feststellen, der für das Bauen verwendet wird, aufgrund der "lock"-Datei. Zum Beispiel weiß Railway, dass es _npm_ verwenden soll, um die Pakete zu installieren, wenn die Anwendung die Datei **package-lock.json** enthält, während es _yarn_ verwendet, wenn es **yarn.lock** findet. Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten mit dem Namen "build" und "start" in der Paketdatei und verwendet diese, um den Code zu bauen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind. Für dieses Tutorial müssen Sie nichts anderes wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen unter [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung ausgeführt wird, kann sie sich anhand der Informationen in den [Umgebungsvariablen](https://docs.railway.com/guides/variables) konfigurieren. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe einer Variable erhalten. Der Datenbankdienst selber kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und verwenden ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Tool. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von Ihrem lokalen Branch auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und zu bekommen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Einstellungen auszuführen, die Sie auf dem Produktionsserver haben.

Das ist alles, was Sie über die Bereitstellung der App auf Railway wissen müssen. Als Nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Ein Railway-Konto erstellen

Um Railway zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie auf [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann Ihre E-Mail-Adresse aufrufen und Ihr Konto verifizieren.
- Sie werden dann auf das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Site und dann die **New Project**-Schaltfläche:

![Railway-Website-Dashboard, das die neue Schaltfläche für Projekte zeigt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter die Möglichkeit, ein Projekt aus einer Vorlage bereitzustellen, das in Ihrem GitHub-Konto erstellt wird, sowie eine Reihe von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup zeigt Bereitstellungsoptionen mit hervorgehobener Option "Deploy from GitHub repo"](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, in dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt und stellt Ihr Projekt bereit und zeigt den Fortschritt auf der Registerkarte „Bereitstellungen“ an. Sobald die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Dashboard zeigt die Registerkarte „Bereitstellungen“ für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte "Einstellungen", scrollen Sie dann nach unten zum Abschnitt „Domains“ und drücken Sie die Schaltfläche **Generate Domain**.

![Railway-Projekteinstellungs-Registerkarte zeigt die Schaltfläche zum Erstellen einer Domain](railway_project_generate_domain.png)

Dies wird die Seite veröffentlichen und die Domain anstelle der Schaltfläche anzeigen, wie unten gezeigt.

![Railway-Projekteinstellungsregisterkarte zeigt einen Link zur Local Library-Site](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass die Local Library aufgrund der Tatsache, dass wir keine Produktionsdatenbank angegeben haben, mit Ihren Entwicklungsdaten geöffnet wird.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, erstellen wir als Nächstes eine Produktions-MongoDB-Datenbank, um diese stattdessen zu verwenden. Wir erstellen die Datenbank als Teil des Railway-Anwendungsprojekts, obwohl nichts dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genau wie Sie es schon für die Entwicklungsdatenbank getan haben.

Wählen Sie in Railway die **Dashboard**-Option im oberen Menü der Site und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Wählen Sie die **New**-Schaltfläche aus, die zum Hinzufügen von Diensten zum aktuellen Projekt verwendet wird.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wenn Sie zur Art des hinzuzufügenden Dienstes gefragt werden, wählen Sie **Database**:

![Railway-Popup zeigt Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leeren Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um die Datenbank hinzuzufügen.

![Railway-Popup zeigt verschiedenen Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im selben Projekt bereit. Nach Abschluss sehen Sie nun sowohl den Applikations- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Applikations- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen zur Datenbank anzuzeigen. Öffnen Sie die Registerkarte „Variablen“ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungsbildschirm zeigt die zum Herstellen der Datenbankverbindung benötigte URL](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es dem Anwendungsprozess unter Verwendung einer Umgebungsvariablen hinzufügen. Öffnen Sie zuerst den Applikationsdienst. Dann wählen Sie die Registerkarte „Variablen“ und drücken die **Neue Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die kopierte URL der Datenbankverbindung ein (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration) um die Datenbankadresse zu lesen). Dies wird ungefähr so aussehen wie der unten gezeigte Bildschirm.

![Railway-Website-Variablenscreen, während die MONGODB_URI-Variable und Adresse hinzugefügt wird](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie die Startseite jetzt überprüfen, sollte sie null Werte für Ihre Objektzähler anzeigen, da wir jetzt aufgrund der oben vorgenommenen Änderung eine neue (leere) Datenbank verwenden.

### Weitere Konfigurationsvariablen

Sie erinnern sich aus einem vorherigen Abschnitt daran, dass wir [setze NODE_ENV auf 'production'](#set_node_env_to_production) setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies im selben Bildschirm tun, in dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Applikationsdienst. Dann wählen Sie die Registerkarte „Variablen“, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken die **Neue Variable**-Schaltfläche.

![Railway-Variablenregisterkarte mit hervorgehobener neuer Variablenschaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Namen der Umgebung ein. Dann drücke die **Hinzufügen**-Schaltfläche.

![Railway-Variablenregisterkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Local Library-Anwendung ist nun eingerichtet und für den Produktionsbetrieb konfiguriert. Sie können Daten über die Website-Schnittstelle hinzufügen und sie sollte genauso funktionieren, wie während der Entwicklung (obwohl weniger Debug-Informationen für ungültige Seiten angezeigt werden).

> [!NOTE]
> Wenn Sie nur einige Testdaten hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — Erstellen einiger Elemente](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Den Client installieren

Laden und installieren Sie den Railway-Client für Ihr lokales Betriebssystem, indem Sie den [Anweisungen hier folgen](https://docs.railway.com/guides/cli).

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigsten Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers auf ein zugeordnetes Railway-Projekt (ohne dass es auf GitHub hochgeladen werden muss) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das folgende in einem Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client stellt den Logs-Befehl bereit, um das Ende der Logs anzuzeigen (ein vollständigerer Log ist auf der Site für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zum Einrichten von Express-Apps in der Produktion und auch das Ende der Reihe von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können eine vollständig bearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) überprüfen.

## Siehe auch

- [Beste Praxis für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Beste Praxis für die Produktion: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation

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
