---
title: "Express-Tutorial Teil 7: Bereitstellung in der Produktion"
slug: Learn/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)-Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit Bibliothekspersonal und -mitglieder sie über das Internet erreichen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zur Bereitstellung Ihrer Website finden könnten und was Sie tun müssen, um Ihre Website für die Produktion bereitzumachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vollständige Bearbeitung aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo und wie Sie eine Express-App für die Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug", um mit dem öffentlichen Testen zu beginnen), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gearbeitet, in der Sie Express/Node als Webserver verwendet haben, um Ihre Website mit dem lokalen Browser/Netzwerk zu teilen, und die Ihre Website mit (unsicheren) Entwicklereinstellungen ausgeführt hat, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsreife Infrastruktur für den Betrieb Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen bei der Auswahl einer Hosting-Seite, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereit zu machen, und ein praktisches Beispiel dafür, wie Sie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.app/) installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die der Servercomputer bereitstellt, auf dem Sie Ihre Website für den externen Zugriff betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse Proxy, Load Balancer, etc.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Dies bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Anbieters ausgeführt wird. Der Remote-Server bietet normalerweise ein garantiertes Niveau an Computerressourcen (z.B. CPU, RAM, Speicherspeicher etc.) und Internetverbindung zu einem bestimmten Preis.

Dieser Typ von zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, vollständigere Umgebungen auszuwählen, vielleicht einschließlich einer vollständigen Node-Einrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen Ihnen unbekannten Server (oder andere Komponenten) beschränken und könnten auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und im Bedarfsfall wissen, wo Sie mit dem Upgrade bestimmter Teile des Systems beginnen können!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung dieser Art von Hosting müssen Sie sich um den Großteil Ihrer Produktionsumgebung (Server, Load Balancer etc.) keine Sorgen machen, da die Host-Plattform dies für Sie übernimmt. Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung und nicht auf eine andere Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität, die IaaS gegenüber PaaS bietet, wählen, während andere den reduzierten Wartungsaufwand und die einfachere Skalierung von PaaS schätzen werden. Wenn Sie anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, also ist das, was wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollten diese Anweisungen bieten, wie Sie eine Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy etc. einrichten können. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [Digital Ocean Node community docs](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekannt dafür sind, _Node_ (und _Express_) entweder aktiv zu unterstützen oder gut damit zu arbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir im Folgenden einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie viel Verkehr Ihre Seite wahrscheinlich haben wird und die Kosten für Daten und Computerressourcen, die notwendig sind, um diese Nachfrage zu befriedigen.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) und die damit verbundenen Kosten.
- Die Orte, an denen der Anbieter Rechenzentren hat und daher ein schneller Zugriff wahrscheinlich ist.
- Die historische Leistung des Hosts in Bezug auf Betriebszeit und Ausfallzeiten.
- Tools, die für die Verwaltung der Seite bereitgestellt werden — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von "Live-Zeit"-Stunden an oder nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für die Migration zu einer teureren Stufe bedeuten, dass Sie im ersten Schritt besser daran gewesen wären, einen anderen Dienst zu nutzen!

Die gute Nachricht, wenn Sie anfangen, ist, dass es ziemlich viele Seiten gibt, die "kostenlose" Computerumgebungen bieten, die für die Bewertung und das Testen gedacht sind. Diese sind in der Regel recht ressourcenbeschränkte/limitierte Umgebungen und Sie sollten sich dessen bewusst sein, dass sie nach einigen Einführungszeiträumen möglicherweise ablaufen oder andere Einschränkungen haben. Sie sind jedoch großartig für Tests von Websites mit geringem Verkehr in einer gehosteten Umgebung und können eine einfache Migration zur Zahlung für mehr Ressourcen bieten, wenn Ihre Seite stärker frequentiert wird. Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "basic" oder "hobby" Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Leistungsniveaus und weniger Einschränkungen bietet. [Railway](https://railway.app/), [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website für die Veröffentlichung bereit machen

Die wichtigsten Aspekte, die Sie beim Veröffentlichen Ihrer Website berücksichtigen sollten, sind Websicherheit und Leistung. Auf das Minimum reduziert, möchten Sie die Datenbankkonfiguration so modifizieren, dass Sie eine andere Datenbank für die Produktion verwenden und ihre Anmeldedaten sichern können, die Stack-Traces entfernen, die auf Fehlerseiten während der Entwicklung enthalten sind, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele häufige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumenten — siehe [Produktionsbeste Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktionsbeste Praktiken: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbank-Konfiguration

Bisher in diesem Tutorial haben wir eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldedaten in **app.js** fest codiert sind. Da die Entwicklungsdatenbank keine Informationen enthält, die wir freigeben oder beschädigen möchten, besteht kein besonderes Risiko darin, diese Details preiszugeben. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist es sehr wichtig, Ihre Datenbankanmeldedaten zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden, als wir sie für die Entwicklung verwenden, und auch die Anmeldedaten der Produktionsdatenbank vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Webschnittstelle unterstützt (wie es viele tun), besteht eine Möglichkeit darin, den Server die Datenbank-URL aus einer Umgebungsvariablen abrufen zu lassen. Im Folgenden modifizieren wir die LocalLibrary-Website so, dass die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen bezogen wird, falls sie definiert wurde, und andernfalls die Entwicklungsdatenbank-URL verwendet wird.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Es sieht etwa so aus:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen namens `MONGODB_URI` zu lesen, falls sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine weitere gängige Methode, um die Anmeldedaten der Produktionsdatenbank vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf dem Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm [dotenv](https://www.npmjs.com/package/dotenv) Modul gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Zusätzlich zur Generierung weniger ausführlicher Fehlermeldungen speichert das Setzen der Variablen auf _production_ Ansichts-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um das Dreifache verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungendatei oder dem Betriebssystem-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrem Umgebungseinrichtung vornehmen, anstatt in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir werden unten zeigen, wie dies für unser Hosting-Beispiel eingestellt wird.

### Protokollieren Sie angemessen

Protokollierungsaufrufe können eine Auswirkung auf eine stark frequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z.B. Verkehrsüberwachung oder Protokollierung von API-Aufrufen), aber Sie sollten versuchen, die Menge an Debugging-Protokollierung zu minimieren.

Eine Möglichkeit, "Debug"-Protokolle in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, mit dem Sie steuern können, welche Protokollierung durch das Setzen einer Umgebungsvariablen durchgeführt wird. Zum Beispiel zeigt der Codeausschnitt unten, wie Sie das "Autor"-Protokoll einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Protokolle von diesem Objekt angezeigt.

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

Dann können Sie einen bestimmten Satz von Protokollen aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariablen angeben. Sie können die Variablen für das Anzeigen von Autor- und Buchlogs wie gezeigt setzen (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe an `debug` können die Protokollierung ersetzen, die Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Protokollierung über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie die Protokollierung ein und aus in Ihrer Entwicklungsumgebung, indem Sie die DEBUG-Variable setzen und beobachten, welche Auswirkungen dies auf die Protokollierung hat.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktionsbeste Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort, die sie an einen Client senden, komprimieren, wodurch die Zeit erheblich reduziert wird, die der Client benötigt, um die Seite zu laden. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage als unterstützt angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Seite hinzu, indem Sie die [compression](https://www.npmjs.com/package/compression)-Middleware verwenden. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungs-Bibliothek wie gezeigt ein. Fügen Sie die Komprimierungs-Bibliothek mit der Methode `use()` in die Middleware-Kette ein (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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

### Verwenden Sie Helmet, um gegen bekannte Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die dazu beitragen, Ihre App vor bekannten Web-Schwachstellen zu schützen (siehe die [Dokumente](https://helmetjs.github.io/) für weitere Informationen zu den gesetzten Headern und den geschützten Schwachstellen).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek wie gezeigt ein. Fügen Sie dann das Modul mit der Methode `use()` in die Middleware-Kette ein.

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

Wir hätten normalerweise einfach `app.use(helmet());` eingefügt, um das _Unterset_ der sicherheitsrelevanten Header hinzuzufügen, die für die meisten Seiten sinnvoll sind. Im [LocalLibrary Basistemplate](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) haben wir jedoch einige Bootstrap- und jQuery-Skripte einbezogen. Diese verstoßen gegen die _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) von Helmet, die das Laden von skriptbasierten Skripten nicht erlaubt. Um das Laden dieser Skripte zu ermöglichen, modifizieren wir die Helmet-Konfiguration so, dass sie CSP-Direktiven setzt, die das Skriptladen von den angegebenen Domains erlauben. Für Ihren eigenen Server können Sie bestimmte Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie eine Ratenbegrenzung für die API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden könnten, wie Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar ein Kunde oder Skript, das nicht wie erwartet funktioniert. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können und dazu führen, dass Ihr Server langsamer wird, könnten Ihnen auch zusätzliche Kosten für den zusätzlichen Verkehr entstehen. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder einen Satz von Routen gerichtet werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek wie gezeigt ein. Fügen Sie dann das Modul mit der Methode `use()` in die Middleware-Kette ein.

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

Der obige Befehl begrenzt alle Anfragen auf 20 pro Minute (Sie können dies bei Bedarf ändern).

> [!NOTE]
> Drittanbieter-Dienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie einen fortschrittlicheren Schutz gegen Denial-of-Service- oder andere Arten von Angriffen benötigen.

#### Stellen Sie die Node-Version fest

Bei Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Einstiegsdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version. Sie können die Version von Node, die für die Entwicklung verwendet wurde, ermitteln, indem Sie den folgenden Befehl eingeben:

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

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifisch angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass versucht wird, eine Version mit derselben Hauptversionsnummer oder einer neueren Version zu verwenden.

Beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version auf verschiedenen Hosting-Diensten anzugeben, aber der **package.json**-Ansatz wird weitgehend unterstützt.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, testen wir die Seite erneut und stellen sicher, dass sie nicht von unseren Änderungen betroffen wurde.

Zunächst müssen wir unsere Abhängigkeiten abrufen. Dies können Sie tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Seite aus (siehe [Testen der Routen](/de/docs/Learn/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob die Seite noch wie erwartet funktioniert.

### Erstellen eines Anwendungs-Repositorys in GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellcode-Verwaltungsplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub verwenden, um Ihren Quellcode zu verwalten!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools gute Softwareentwicklungspraktiken darstellt, da es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekanntem guten Code" zu wechseln, wenn Sie es benötigen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Nachdem Sie sich angemeldet haben, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen **Neues Repository**.
3. Füllen Sie alle Felder auf diesem Formular aus. Obwohl diese nicht obligatorisch sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (z.B. "Local Library-Website, geschrieben in Express (Node)").
   - Wählen Sie **Node** in der Auswahlliste _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahlliste _Add license_.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _alle_ Quellcodes — einschließlich Ihres Datenbankbenutzernamens und Passworts — für alle im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldedaten _nur_ aus Umgebungsvariablen liest und keine Anmeldedaten fest kodiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat", um den Quellcode nur ausgewählten Personen zugänglich zu machen.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf den grünen **Clone or download**-Button auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfeld, das angezeigt wird. Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, da das Repository ("repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
2. Öffnen Sie ein Befehlszeilenfenster/Terminal und klonen Sie Ihr Repository mithilfe der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Navigieren Sie in den Repository-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repository-Ordner, machen Sie sie mit _git_ zu einem Teil des Repositorys und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (mit Ausnahme von **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Befehlszeilenfenster/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quelltextdateien hinzufügen, keine Binärdateien, temporären Dateien etc.). Es sollte in etwa wie die unten angezeigte Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit` die Dateien in Ihr lokales Repository. Dies entspricht dem Unterschreiben an den Änderungen und macht sie zu einem offiziellen Teil des lokalen Repositorys.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repository noch nicht geändert. Der letzte Schritt besteht darin, Ihr lokales Repository zu synchronisieren (`push`) und es auf das Remote-GitHub-Repo hochzuladen, indem Sie den folgenden Befehl ausführen:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zur Seite auf GitHub zurückkehren können, auf der Sie Ihr Repository erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repository weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus nutzen.

Dies ist ein guter Zeitpunkt, um eine Sicherung Ihres "Vanilla"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden könnten, für die Bereitstellung auf jedem Hosting-Dienst nützlich sein könnten (oder für die Entwicklung) könnten andere vielleicht nicht. Sie können dies mit `git` an der Befehlszeile tun:

```bash
# Create branch vanilla_deployment from the current branch (main)
git checkout -b vanilla_deployment

# Push the new branch to GitHub
git push origin vanilla_deployment

# Switch back to main
git checkout main

# Machen Sie alle weiteren Änderungen in einem neuen Branch
git pull upstream main # Merge the latest changes from GitHub
git checkout -b my_changes # Erstellen Sie einen neuen Branch
```

> [!NOTE]
> Git ist unglaublich mächtig! Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt stellt eine praktische Demonstration bereit, wie _LocalLibrary_ auf [Glitch](https://glitch.com/) gehostet wird.

### Warum Glitch?

Wir entscheiden uns für Glitch aus mehreren Gründen:

- Glitch hat einen [kostenlosen Starter-Plan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN sehr wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie es nicht müssen. Sich nicht um Server, Load Balancers, Reverse Proxies und so weiter kümmern zu müssen, macht den Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Glitch erlernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen beeinträchtigen nicht wirklich unsere Nutzung von Glitch für das Tutorial. Zum Beispiel:

  - Der Starter-Plan bietet lediglich 1000 "Projekstunden" pro Monat, die monatlich zurückgesetzt werden. Diese werden verwendet, wenn Sie aktiv an der Site arbeiten oder wenn jemand darauf zugreift. Wenn niemand auf die Site zugreift oder sie bearbeitet, wird sie in den Ruhezustand versetzt.
  - Die Starter-Plan-Umgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz. Es ist mehr als genug für das Tutorial, insbesondere weil unsere Datenbank woanders gehostet wird.
  - Eigene Domains werden zum Zeitpunkt der Erstellung schlecht unterstützt.
  - Weitere Einschränkungen finden Sie auf der [technischen Einschränkungsseite von Glitch](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions).

Während Glitch sich für die Demonstration in diesem Beispiel eignet, sollten Sie sich die Zeit nehmen, um festzustellen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Schnittstelle, in der Sie Projekte aus Startvorlagen erstellen oder von GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können. Wenn Sie Änderungen vornehmen, wird das Projekt in einem eigenen, isolierten und unabhängigen virtuellen Container erstellt und ausgeführt.

Wie das alles "unter der Haube" funktioniert, bleibt ein Rätsel — Glitch verrät es nicht. Es ist jedoch klar, dass Ihre Anwendung "einfach funktioniert", solange Sie eine ziemlich standardmäßige Node.js-Webanwendung erstellen (z.B. verwenden Sie `package.json` für Ihre Abhängigkeiten) und nicht mehr Ressourcen verbrauchen als dem auf der [technischen Einschränkungsseite](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) genannten Maximum.

Sobald die Anwendung ausgeführt wird, kann sie für den Produktionsbetrieb mithilfe [geheimer Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden. Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, die, wie Sie sich aus einem vorherigen Abschnitt erinnern, die Art und Weise ist, wie wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL abzurufen. Beachten Sie, dass die Variablen _geheim_ sind: die `.env`-Datei sollte nicht in Ihrem GitHub-Repository enthalten sein.

Der Glitch Bearbeitungsansicht bietet auch _Terminal_-Zugriff auf die Web-App-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als ob sie auf Ihrem lokalen Computer ausgeführt würde.

Das ist alles, was Sie wissen müssen, um mit der Arbeit zu beginnen. Als Nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Erstellen eines Glitch-Kontos

Um mit Glitch zu beginnen, müssen Sie ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Sign up**-Schaltfläche in der oberen Symbolleiste.
- Wählen Sie GitHub im Pop-up aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Danach sind Sie im Glitch-Dashboard <https://glitch.com/dashboard> angemeldet.

### Node.js-Version beheben

Hosting-Anbieter unterstützen in der Regel einige Hauptversionen der aktuellen Node.js-Versionen. Wenn die genaue "Minor"-Version, die Sie in Ihrer `package.json`-Datei angegeben haben, nicht unterstützt wird, verwenden sie normalerweise die nächstgelegene unterstützte Version (und oft funktioniert das einfach).

Zum Zeitpunkt des Schreibens ist die höchste unterstützte Version auf Glitch jedoch Node.js 16. Wenn Sie mit Node.js 17 oder später entwickelt haben, sollten Sie die Version verwenden, die in Ihrer `package.json`-Datei wie gezeigt angegeben ist. Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [hat vor, Node künftig zu aktualisieren und besser aktualisiert zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — es kann sein, dass die Versionsgrenze zu dem Zeitpunkt, zu dem Sie dies lesen, nicht mehr existiert. Anstatt die `node`-Version downzugraden, könnten Sie Ihr Projekt hochladen, um zu sehen, ob es erstellt wird. Wenn es Fehler gibt und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node`-Version auf `>=v16` in Ihrer `package.json` in der Glitch-Editor zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl im Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung von Glitch aus GitHub

Im nächsten Schritt importieren wir das Bibliotheksprojekt von GitHub. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Website und dann die **New project**-Schaltfläche. Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch-Website-Dashboard mit neuer Projekt-Schaltfläche und einem Popup-Menü mit der "Import from GitHub"-Option](glitch_new_project_import_github.png)

Es erscheint ein Pop-up. Geben Sie die URL Ihres GitHub-Bibliotheks-Repositorys in das Pop-up ein und drücken Sie **OK**. Unten haben wir das Repository für das durchgearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des GitHub-Repositorys, das importiert werden soll](glitch_new_project_github_repo_url.png)

Glitch importiert dann das Projekt und zeigt Benachrichtigungen über den Fortschritt an. Nach Abschluss zeigt es die Bearbeitungsansicht für das neue Projekt an, wie unten gezeigt.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Site-URL erhalten, indem Sie die **Share**-Schaltfläche auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link zur Live-Site in die Adressleiste. Die Local Library-Site sollte sich öffnen und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub. Sie können auch GitHub-Aktionen verwenden, wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync), um Glitch und Ihr Projekt synchron zu halten.

### Verwenden Sie eine Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten. Während Glitch nur SQLite-Datenbanken hostet (und wir für MongoDB konfiguriert sind), bieten viele andere Websites MongoDB-Datenbanken als Dienst an.

Eine Möglichkeit ist, die Anweisungen zum [Einrichten der MongoDB-Datenbank](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) auszuführen, die früher im Tutorial gegeben wurden, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung verfügbar zu machen, öffnen Sie die `.env`-Datei in der Editoransicht für das Projekt. Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein. Die Site wird aktualisiert, während Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt. Sie wird für [private Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) verwendet und wurde beim Import nach Glitch automatisch erstellt. Sie wird nie exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie werden sich aus einem vorherigen Abschnitt erinnern, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Dies tun wir in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe Screenshot im vorherigen Abschnitt).

Die Local Library-Anwendung ist nun eingerichtet und für die Produktionsnutzung konfiguriert. Sie können Daten über die Benutzeroberfläche der Website hinzufügen, und sie sollte wie während der Entwicklung funktionieren (allerdings mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zur Testzwecken hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — erstellen von Elementen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Debugging von Express-Apps auf Glitch

Glitch ermöglicht effektives Debugging. Einige Dinge, die Sie tun können, sind:

- Wählen Sie die Protokolle-Schaltfläche unten in der Editoransicht, um Protokollinformationen von Ihrem Server anzuzeigen, wie z.B. Konsolenprotokollausgabe.
- Wählen Sie die Terminal-Schaltfläche unten in der Editoransicht, um ein Terminal in der Hosting-Umgebung zu öffnen. Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen. Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debugging in VSCode mit der _GLITCH-Erweiterung für VSCode_.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.app/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keinen vollständig kostenlosen Starter-Tarif mehr. Wir haben diese Anleitungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie das nicht tun müssen. Sich nicht um Server, Load Balancers, Reverse Proxies und so weiter kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren Lernkurve führt als bei vielen anderen Alternativen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway erlernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar, und das Hochskalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway die geeignete Umgebung und Abhängigkeiten einrichten und auch verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Web-Anwendungs-Frameworks und Umgebungen automatisch erkennen und installieren kann, basierend auf ihrer Verwendung "gemeinschaftlicher Konventionen". Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den verwendeten Paketmanager für den Buildprozess aus der "Lock"-Datei ermitteln. Zum Beispiel, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ verwendet werden soll, um die Pakete zu installieren, während wenn es **yarn.lock** findet, weiß es, dass _yarn_ verwendet werden soll. Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten mit den Namen "build" und "start" in der Paketdatei und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Web-Anwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben wurden. Sie müssen für dieses Tutorial nichts anderes darüber wissen, aber Sie können mehr über die Optionen zum Bereitstellen von Node-Anwendungen unter [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Wenn die Anwendung ausgeführt wird, kann sie sich selbst mithilfe der [Umgebungsvariablen](https://docs.railway.app/guides/variables) konfigurieren. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable abrufen. Der Datenbankdienst selbst kann entweder von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.app/guides/cli) Tool. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen besteht darin, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen, die Sie auf dem Produktionsserver verwenden, auszuführen.

Das ist alles, was Sie wissen müssen, um die App auf Railway bereitzustellen. Als Nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und testen den Railway-Client.

### Erstellen eines Railway-Kontos

Um Railway zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Pop-up, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Gehen Sie möglicherweise zu Ihrer E-Mail und verifizieren Sie Ihr Konto.
- Sie sind dann im Railway.app Dashboard <https://railway.app/dashboard> angemeldet.

### Bereitstellung auf Railway von GitHub

Im nächsten Schritt richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Website und dann die **Neues Projekt**-Schaltfläche:

![Railway-Website-Dashboard mit Neuer-Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option zum Bereitstellen eines Projekts aus einer Vorlage, das zuerst in Ihrem GitHub-Konto erstellt wird, und einer Reihe von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Pop-up, das Bereitstellungsoptionen mit hervorgehobener "Deploy from GitHub repo"-Option anzeigt](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Pop-up, das GitHub-Repos anzeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm, wenn Sie auswählen können, das Projekt bereitzustellen](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt auf der Bereitstellungstabkarte anzeigen. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm, wie den unten gezeigten.

![Railway-Dashboard, das die Bereitstellungstabkarte für das bereitgestellte Projekt anzeigt](railway_project_deploy.png)

Jetzt wählen Sie die _Einstellungen_-Tabkarte aus, scrollen dann nach unten zum Domains Abschnitt und drücken die **Generieren Sie Domain**-Schaltfläche.

![Railway-Projekt-Einstellungen-Tabkarte, die die Schaltfläche zum Generieren einer Domain anzeigt](railway_project_generate_domain.png)

Dies veröffentlicht die Seite und setzt die Domain an die Stelle der Schaltfläche, wie unten gezeigt.

![Railway-Projekt-Einstellungen-Tabkarte, die einen Link zur lokalen Bibliotheksseite anzeigt](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass wir noch keine Produktionsdatenbank angegeben haben, wird die Local Library mit Ihren Entwicklungsdaten geöffnet.

### Bereitstellen und Verbinden einer MongoDB-Datenbank

Anstatt unsere Entwicklungsdaten zu verwenden, erstellen wir jetzt eine Produktions-MongoDB-Datenbank, die wir stattdessen verwenden können. Wir erstellen die Datenbank als Teil des Railway-Anwendungsprojekts, obwohl nichts dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genau wie Sie für die Entwicklungsdatenbank.

Wählen Sie auf Railway die **Dashboard**-Option aus dem oberen Menü der Website und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzelnen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Wählen Sie die **Neu**-Schaltfläche, die verwendet wird, um Dienste dem aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener Neuer-Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie gefragt werden, welche Art von Dienst hinzugefügt werden soll:

![Railway-Pop-up, das Optionen für einen neuen Dienst anzeigt, wie Datenbank, GitHub-Repo, leeren Dienst etc](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um die Datenbank hinzuzufügen zu beginnen.

![Railway-Pop-up, das verschiedene Datenbanken zeigt, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst bereitstellen, der eine leere Datenbank im selben Projekt enthält. Nach Abschluss sehen Sie jetzt sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendung und Datenbankdienste](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst, um Informationen über die Datenbank anzuzeigen. Öffnen Sie die _Variablen_-Tabkarte und kopieren Sie die "Mongo_URL" (das ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungsfenster, das die zum Verbinden mit der Datenbank benötigte URL anzeigt](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir sie mit einer Umgebungsvariablen dem Anwendungsprozess hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die _Variablen_-Tabkarte und drücken Sie die **Neue Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die von Ihnen für die Datenbank kopierte Verbindungs-URL ein. (`MONGODB_URI` ist der Name der Umgebungsvariablen, aus der [wir die Anwendung konfigurierten](#datenbank-konfiguration), um die Datenbankadresse abzurufen). Dies wird in etwa wie auf dem unten gezeigten Bildschirm aussehen.

![Railway-Website-Variablen-Fenster, während die MONGODB_URI-Variable und -Adresse hinzugefügt wird](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn sie Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie Null Werte für Ihre Objektzählungen anzeigen, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie werden sich aus einem vorherigen Abschnitt erinnern, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies im selben Bildschirm tun, in dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die _Variablen_-Tabkarte, in der Sie sehen, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **Neue Variable**-Schaltfläche.

![Railway-Variablen-Fenster mit hervorgehobener Neuer-Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als den Namen der neuen Variablen und `production` als den Namen der Umgebung ein. Drücken Sie dann die **Hinzufügen**-Schaltfläche.

![Railway-Variablen-Fenster mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Local Library-Anwendung ist nun eingerichtet und für Produktionen konfiguriert. Sie können über die Benutzeroberfläche der Website Daten hinzufügen, und sie sollte in der gleichen Weise wie während der Entwicklung funktionieren (allerdings mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zur Testzwecken hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — erstellen von Elementen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Installieren des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie die [Anweisungen hier](https://docs.railway.app/guides/cli) befolgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf ein zugeordnetes Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie Folgendes in ein Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client stellt den Logs-Befehl zur Verfügung, um das Ende der Logs anzuzeigen (eine vollständigere Log-Datei ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials über die Einrichtung von Express-Apps in der Produktion und auch der Tutorials-Serie über die Arbeit mit Express. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial) nachlesen.

## Siehe auch

- [Produktionsbeste Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktionsbeste Praktiken: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Starten mit Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js-Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfig-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
