---
title: "Express-Tutorial Teil 7: Bereitstellung für die Produktion"
slug: Learn/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Webseite erstellt (und getestet) haben, möchten Sie sie wahrscheinlich auf einem öffentlichen Webserver installieren, damit Bibliothekspersonal und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie möglicherweise einen Hoster finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Seite für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorials ab, einschließlich <a href="https://developer.mozilla.org/de/docs/Learn/Server-side/Express_Nodejs/forms">Express-Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo und wie man eine Express-App für die Produktion bereitstellen kann.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "genug" fertig, um mit dem öffentlichen Test zu beginnen), müssen Sie sie auf einem öffentlich zugänglicheren und zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Website an den lokalen Browser/das Netzwerk freizugeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debuginformationen und andere private Informationen offenlegen. Bevor Sie eine Webseite extern hosten können, müssen Sie zunächst:

- Eine Umgebung zum Hosten der Express-App wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Produktionsinfrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick über das, was Sie tun müssen, um Ihre Express-App für die Produktion vorzubereiten, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway-Cloud-Hosting-Service](https://railway.app/) installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Zugriff betreiben. Die Umgebung umfasst:

- Computer-Hardware, auf der die Website ausgeführt wird.
- Betriebssystem (z.B. Linux oder Windows).
- Laufzeitumgebung der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxy, Lastverteilers usw.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel gebräuchlicher, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem „virtuellen“ Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Rechenressourcen (z.B. CPU, RAM, Speicherkapazität usw.) und Internetverbindung zum bestimmten Preis.

Diese Art von remote zugänglicher Rechner-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, funktionsreichere Umgebungen auszuwählen, die möglicherweise eine vollständige Node-Einrichtung umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren. Die vorhandenen Optionen können jedoch dazu führen, dass Sie auf einen unbekannten Server (oder andere Komponenten) beschränkt sind und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und, wenn Sie Teile des Systems aktualisieren müssen, eine Idee haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express im Rahmen eines _Platform as a Service_ (_PaaS_)-Angebots. Bei dieser Art des Hostings müssen Sie sich nicht um den größten Teil Ihrer Produktionsinfrastruktur (Server, Lastverteiler usw.) kümmern, da die Hostplattform diese für Sie erledigt. Dies macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung und nicht auf andere Serverinfrastruktur konzentrieren müssen.

Einige Entwickler entscheiden sich für die erhöhte Flexibilität, die von IaaS gegenüber PaaS angeboten wird, während andere den geringeren Wartungsaufwand und die einfachere Skalierbarkeit von PaaS bevorzugen. Wenn Sie gerade anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, daher werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Node/Express-freundlichen Hosting-Anbieter entscheiden, sollte er Anleitungen dazu bereitstellen, wie Sie eine Express-Website mithilfe verschiedener Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. einrichten können. Beispielsweise gibt es viele Schritt-für-Schritt-Leitfaden für verschiedene Konfigurationen in den [DigitalOcean Node-Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Einen Hosting-Anbieter wählen

Es gibt zahlreiche Hosting-Anbieter, die dafür bekannt sind, _Node_ (und _Express_) entweder aktiv zu unterstützen oder damit gut zu arbeiten. Diese Anbieter stellen unterschiedliche Arten von Umgebungen (IaaS, PaaS) sowie unterschiedliche Ebenen von Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen zur Verfügung.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir im Folgenden einige Optionen vorstellen, ist es wichtig, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Seite voraussichtlich frequentiert wird und die Kosten für die Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Die Standorte, an denen der Anbieter Rechenzentren hat, und wo der Zugriff daher voraussichtlich am schnellsten ist.
- Die historische Verfügbarkeit und Ausfallzeiten des Hosts.
- Die bereitgestellten Tools zur Verwaltung der Site – sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von "Live-Zeit"-Stunden an oder nur eine geringe Speichermenge.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate an, für deren Zahlung Sie sonst aufkommen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht beim Einstieg ist, dass es einige Seiten gibt, die "kostenlose" Computerumgebungen bereitstellen, die für Tests und Bewertungen vorgesehen sind.
Diese sind in der Regel recht ressourceneingeschränkte/lokale Umgebungen, und Sie müssen sich bewusst sein, dass sie möglicherweise nach einer Einführungszeit ablaufen oder andere Einschränkungen haben.
Sie sind jedoch großartig, um Websites mit geringem Datenverkehr in einer gehosteten Umgebung zu testen und können einen einfachen Übergang zur Bezahlung für mehr Ressourcen ermöglichen, wenn Ihre Website beliebter wird.
Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), etc.

Die meisten Anbieter bieten auch eine "Basis-" oder "Hobby-"Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Computerkapazitäten und weniger Einschränkungen bietet.
[Railway](https://railway.app/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ preiswerte Basis-Computing-Stufe bieten (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website für die Veröffentlichung bereit machen

Die wichtigsten Dinge, über die Sie bei der Veröffentlichung Ihrer Website nachdenken sollten, sind Websicherheit und Leistung.
Mindestens werden Sie die Datenbankkonfiguration ändern wollen, damit Sie für die Produktion eine andere Datenbank verwenden und deren Anmeldeinformationen sichern können, die Stack-Traces entfernen, die auf Fehlerseiten während der Entwicklung angezeigt werden, Ihr Logging überarbeiten und die geeigneten Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Abschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumentationen – siehe [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) und [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldedaten in **app.js** fest codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, die uns Sorgen machen, wenn sie offengelegt oder beschädigt werden, besteht kein besonderes Risiko, diese Details preiszugeben.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbankanmeldedaten sehr wichtig.

Aus diesem Grund möchten wir für die Produktion eine andere Datenbank verwenden als die, die wir für die Entwicklung verwenden, und auch die Anmeldedaten der Produktionsdatenbank vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einrichtung von Umgebungsvariablen über eine Weboberfläche unterstützt (was viele tun), besteht eine Möglichkeit darin, dass der Server die Datenbank-URL aus einer Umgebungsvariablen abruft.
Im Folgenden ändern wir die LocalLibrary-Website, um die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen zu erhalten, falls sie definiert wurde, und andernfalls die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird etwa so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenfolgeverbindung aus einer Umgebungsvariablen namens `MONGODB_URI` zu erhalten, wenn sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere gebräuchliche Methode, um die Anmeldeinformationen der Produktionsdatenbank von Quellcodes zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mithilfe des npm-Moduls [dotenv](https://www.npmjs.com/package/dotenv) gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Neben der Generierung weniger ausführlicher Fehlermeldungen cachet das Setzen der Variablen auf _production_ Vorlagendateien und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Anwendungsleistung um den Faktor drei verbessern kann!

Diese Änderung kann entweder mit `export`, einer Umgebungsdatei oder dem OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungseinstellung vornehmen und nicht in Ihrer App, aber wichtig genug, um hier darauf hingewiesen zu werden! Wir zeigen, wie dies für unser Hosting-Beispiel unten eingestellt wird.

### Angemessenes Logging

Loggings-Aufrufe können sich auf eine Website mit hohem Traffic auswirken. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. Tracking-Traffic oder Protokollieren von API-Aufrufen), aber Sie sollten versuchen, die Menge an Logging für Debugging-Zwecke zu minimieren.

Ein Weg, um "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, mit dem Sie steuern können, welches Logging durch das Setzen einer Umgebungsvariable durchgeführt wird.
Zum Beispiel zeigt das folgende Codefragment, wie Sie das Logging für "author" einrichten könnten.
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

Dann können Sie eine bestimmte Menge von Logs aktivieren, indem Sie sie als durch Kommas getrennte Liste in der `DEBUG`-Umgebungsvariablen angeben.
Sie können die Variablen für die Anzeige von Author- und Book-Logs wie gezeigt setzen (auch Platzhalter werden unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe zu `debug` können Logging ersetzen, das Sie möglicherweise zuvor mit `console.log()` oder `console.error()` gemacht haben. Ersetzen Sie in Ihrem Code alle `console.log()`-Aufrufe durch Logging über das [debug](https://www.npmjs.com/package/debug) Module. Schalten Sie das Logging in Ihrer Entwicklungsumgebung durch das Setzen der DEBUG-Variablen ein und aus und beobachten Sie die Auswirkungen auf das Logging.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Für weitere Informationen zu diesem Thema siehe: [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antworten, die an einen Client gesendet werden, komprimieren, was die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich verkürzt. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client im Antrag angibt (die Antwort wird nicht komprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie diese Funktionalität zu Ihrer Seite hinzu, indem Sie [compression](https://www.npmjs.com/package/compression) Middleware verwenden. Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und benötigen Sie die Kompressionsbibliothek wie gezeigt. Fügen Sie die Kompressionsbibliothek zur Middleware-Kette mit der `use()`-Methode hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten – in diesem Fall alle!)

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

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihrer App helfen, sich vor bekannten Webschwachstellen zu schützen (weitere Informationen darüber, welche Header es setzt und welche Schwachstellen es schützt, finden Sie in den [Dokumenten](https://helmetjs.github.io/)).

Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und benötigen Sie die _helmet_-Bibliothek wie gezeigt.
Fügen Sie das Modul dann der Middleware-Kette mit der `use()`-Methode hinzu.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um den _Teil_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Sites sinnvoll sind.
In der [LocalLibrary-Basistemplate](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) enthalten wir jedoch einige Bootstrap- und jQuery-Skripte.
Diese verstoßen gegen die _Standard_- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) von Helmet, die das Laden von Cross-Site-Skripten nicht zulässt.
Um diese Skripte zu laden, ändern wir die Helmet-Konfiguration so, dass sie CSP-Direktiven festlegt, um das Laden von Skripten von den angegebenen Domains zu ermöglichen.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie Ratenbegrenzung zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Website gerichtet werden könnten, wie z.B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das nicht wie erwartet funktioniert.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können, die Ihren Server verlangsamen, können Sie auch für den zusätzlichen Datenverkehr belastet werden.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder einen Satz von Routen gestellt werden können.

Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und benötigen Sie die _express-rate-limit_-Bibliothek wie gezeigt.
Fügen Sie das Modul dann der Middleware-Kette mit der `use()`-Methode hinzu.

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

Der Befehl oben begrenzt alle Anfragen auf 20 pro Minute (Sie können dies nach Bedarf ändern).

> [!NOTE]
> Drittanbieterdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen fortschrittlicheren Schutz gegen Denial-of-Service- oder andere Arten von Angriffen benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Abhängigkeiten und die Einstiegspunktdatei der Anwendung herauszufinden.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version.
Sie können die für die Entwicklung verwendete Node-Version herausfinden, indem Sie den Befehl ausführen:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Informationen als **engines > node** wie gezeigt hinzu (verwenden Sie die Versionnummer für Ihr System).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hostingdienst unterstützt möglicherweise nicht die spezifische angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit der gleichen Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es andere Möglichkeiten geben kann, die Node-Version bei verschiedenen Hostingdiensten anzugeben, aber der **package.json**-Ansatz wird weitgehend unterstützt.

#### Abhängigkeiten erhalten und erneut testen

Bevor wir fortfahren, lassen Sie uns die Seite erneut testen und sicherstellen, dass keine unserer Änderungen die Seite beeinflusst hat.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie im Terminal im Hauptverzeichnis des Projekts den folgenden Befehl ausführen:

```bash
npm install
```

Führen Sie die Seite nun aus (siehe [Testing the routes](/de/docs/Learn/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und überprüfen Sie, dass sich die Seite immer noch wie erwartet verhält.

### Erstellen eines Anwendungsspeichers in GitHub

Viele Hostingdienste erlauben es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und ein Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcodeverwaltungs-Tools eine gute Software-Entwicklungspraxis ist, da Sie damit Änderungen ausprobieren können und bei Bedarf zwischen Ihren Experimenten und dem "bekannten guten Code" wechseln können!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder auf diesem Formular aus. Obwohl diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (z.B. "Local Library website written in Express (Node)").
   - Wählen Sie **Node** in der Auswahliste _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahliste _Add license_.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _alle_ Quellcodes – einschließlich Ihres Datenbankbenutzernamens und -passworts – für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen fest kodiert sind.
   >
   > Wählen Sie andernfalls die Option "Privat", damit nur ausgewählte Personen den Quellcode sehen können.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf den grünen **Clone or download** Button auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im erscheinenden Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, wo das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ auf Ihrem lokalen Computer (Versionen für verschiedene Plattformen finden Sie [hier](https://git-scm.com/downloads)).
2. Öffnen Sie ein Eingabeaufforderungs-/Terminal-Fenster und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungs-Quellcodedateien in den Repo-Ordner, machen Sie sie mit _git_ Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Eingabeaufforderungs-/Terminal-Fenster und verwenden Sie den Befehl `add`, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die sie `commit` möchten, korrekt sind (Sie möchten Quellcodedateien, keine Binärdateien, temporären Dateien, usw. einfügen).
   Es sollte ein wenig wie die untenstehende Auflistung aussehen.

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
   Dies entspricht dem Signieren der Änderungen ab und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Bis zu diesem Punkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem folgenden Befehl zum Remote-GitHub-Repo zu synchronisieren (`push`).

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie in der Lage sein, zurück zu der Seite auf GitHub zu gehen, wo Sie Ihr Repo erstellt haben, die Seite zu aktualisieren und zu sehen, dass Ihre gesamte Anwendung nun hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen Hinzufügen/Commit-/Push-Zyklus verwenden.

Dies ist ein guter Punkt, um eine Sicherungskopie Ihres "Vanilla" Projekts zu erstellen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst nützlich sein können (oder für die Entwicklung), könnten andere das nicht sein.
Sie können dies mit `git` über die Befehlszeile tun:

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
> Git ist unglaublich leistungsfähig!
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration wie man _LocalLibrary_ auf [Glitch](https://glitch.com/) hostet.

### Warum Glitch?

Wir entscheiden uns aus mehreren Gründen für die Nutzung von Glitch:

- Glitch hat einen [kostenlosen Einstiegstarif](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist MDN sehr wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie es nicht tun müssen.
  Sich nicht um Server, Lastverteiler, Reverse Proxies usw. sorgen zu müssen, macht es viel einfacher zu beginnen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Glitch lernen werden, sind übertragbar.
- Die Dienst- und Planbeschränkungen haben keinen wirklichen Einfluss auf die Verwendung von Glitch für das Tutorial.
  Zum Beispiel:

  - Der Starterplan bietet nur 1000 "Projektstunden" pro Monat, die monatlich zurückgesetzt werden.
    Diese werden verwendet, wenn Sie die Website aktiv bearbeiten oder wenn jemand darauf zugreift.
    Wenn niemand auf die Seite oder Änderungen daran vornimmt, wird sie in den Ruhezustand versetzt.
  - Die Starterplanumgebung hat einen begrenzten Container-RAM und Speicherplatz.
    Es gibt mehr als genug für das Tutorial, insbesondere weil unsere Datenbank anderswo gehostet wird.
  - Benutzerdefinierte Domains werden nicht gut unterstützt (zum Zeitpunkt des Schreibens).
  - Weitere Einschränkungen finden Sie auf der [Glitch technischen Einschränkungsseite](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions).

Während Glitch für das Hosting dieser Demonstration geeignet ist, sollten Sie sich die Zeit nehmen zu bestimmen, ob es für [Ihre eigene Website geeignet ist](#einen_hosting-anbieter_wählen).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Oberfläche, in der Sie Projekte aus Starter-Templates erstellen oder aus GitHub importieren und die Projektdateien hinzufügen und bearbeiten können.
Während Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container erstellt und ausgeführt.

Wie das alles "unter der Haube" funktioniert, ist ein Rätsel – Glitch sagt es nicht.
Es ist jedoch klar, dass solange Sie eine relativ standardmäßige Nodejs-Webanwendung erstellen (zum Beispiel using `package.json` für Ihre Abhängigkeiten), und nicht mehr Ressourcen verwenden als in den [Technischen Restriktionen](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) gelistet sind, sollte Ihre Anwendung "einfach funktionieren".

Sobald die Anwendung ausgeführt wird, kann sie für die Produktion mit [privaten Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden.
Die Werte in den geheimen Daten werden wie Umgebungsvariablen von der Anwendung gelesen, was, Sie sich aus einem vorherigen Abschnitt erinnern, wie wir unsere Anwendung konfigurierten, damit sie ihre Datenbank-URL erhielt.
Beachten Sie, dass die Variablen _geheim_ sind: die `.env`-Datei sollte nicht in Ihr GitHub-Repository aufgenommen werden.

Die Glitch-Bearbeitungsansicht bietet auch Terminal-Zugriff auf die Webanwendungsumgebung, den Sie verwenden können, um mit der Webanwendung genauso zu arbeiten, als ob Sie auf Ihrer lokalen Maschine ausgeführt wird.

Das ist alles, was Sie brauchen, um loszulegen.
Als nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Ein Glitch-Konto erhalten

Um Glitch zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Anmelden** Schaltfläche in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie werden dann in das Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Fehlerbehebung bei der Node.js-Version

Hosting-Anbieter unterstützen in der Regel einige Hauptversionen der neuesten Node.js-Veröffentlichungen.
Wenn die in Ihrer `package.json`-Datei angegebene "kleine" Version nicht unterstützt wird, weichen sie normalerweise auf die nächste unterstützte Version aus (und oft wird das einfach funktionieren).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16.
Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die in Ihrer `package.json`-Datei verwendete Version wie gezeigt reduzieren.
Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zu aktualisieren und in Zukunft besser aktualisiert zu halten](https://blog.glitch.com/post/rebuilding-glitch/) – und es kann sein, dass die Versionsbeschränkung nicht mehr existiert, wenn Sie dies lesen.
Anstelle der Herabstufung der `node`-Version könnten Sie Ihr Projekt hochladen und sehen, ob es erstellt wird.
Wenn Fehler auftreten und Ihre Anwendung nicht lädt, sollten Sie versuchen, die `node`-Version in Ihrer `package.json`-Datei im Glitch-Editor auf `>=v16` zu setzen.

> [!NOTE]
> Sie können auch die unterstützten Versionen überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub

Als nächstes importieren wir das Bibliotheksprojekt von GitHub.
Wählen Sie zuerst die **Dashboard** Option aus dem Hauptmenü der Seite und wählen Sie dann die **Neues Projekt** Schaltfläche.
Glitch zeigt eine Liste von Optionen für das neue Projekt; wählen Sie **Importieren von GitHub**.

![Glitch Website-Dashboard, das eine neue Projekt-Schaltfläche und ein Popup-Menü mit der Option "Vom GitHub importieren" anzeigt](glitch_new_project_import_github.png)

Ein Popup erscheint.
Geben Sie die URL Ihres GitHub-Bibliotheks-Repositories in das Popup ein und drücken Sie **OK**.
Unten haben wir das Repo für das bearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des GitHub-Repos, um es zu importieren](glitch_new_project_github_repo_url.png)

Glitch wird dann das Projekt importieren und Fortschrittsmitteilungen anzeigen.
Nach Abschluss wird es die Bearbeitungsansicht für das neue Projekt anzeigen, wie unten gezeigt.

![Glitch-Bearbeitungsansicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Seiten-URL erhalten, indem Sie die **Teilen** Schaltfläche auswählen.

![Glitch-Bearbeitungsansicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link zur Live-Seite in die Adressleiste.
Die lokale Bibliotheksseite sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Vorgang war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchron zu halten.

### Verwenden Sie eine Produktionsdatenbank bei MongoDB

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten.
Während Glitch nur SQLite-Datenbanken hostet (und wir sind so konfiguriert, dass wir MongoDB verwenden), bieten viele andere Seiten MongoDB-Datenbanken als Dienst an.

Eine Option besteht darin, den Anweisungen unter [Einrichten der MongoDB-Datenbank](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) zu folgen, um früher im Tutorial eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Bearbeitungsansicht des Projekts.
Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Seite wird aktualisiert, während Sie Werte in den Editor eingeben.

![Glitch .env-Dateieditor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) gedacht und wurde automatisch beim Import in Glitch erstellt.
> Sie wird nie exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich, dass wir in einem vorhergehenden Abschnitt das [Setzen von NODE_ENV auf 'production'](#set_node_env_to_production) benötigen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir tun dies im selben Datei, in der wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie `.env` und fügen Sie die `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die lokale Bibliotheksanwendung ist nun für die Produktion eingerichtet und konfiguriert.
Sie können Daten über die Benutzeroberfläche der Website hinzufügen, und sie sollte genauso funktionieren wie während der Entwicklung (wenn auch mit weniger auf Debugging bezogenen Informationen bei ungültigen Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie in dem Abschnitt [Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testen — einige Einträge erstellen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Express-Apps auf Glitch debuggen

Glitch ermöglicht effektives Debuggen.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Log-Schaltfläche unten in der Bearbeitungsansicht aus, um Log-Informationen von Ihrem Server zu sehen, wie z.B. die Konsolenlogausgabe.
- Wählen Sie die Terminal-Schaltfläche unten in der Bearbeitungsansicht aus, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Tools in der Umgebung wie auf Ihrer lokalen Maschine auszuführen.
  Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debuggen in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.app/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keinen vollständig kostenlosen Starter-Tarif mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie es nicht tun müssen.
  Sich nicht um Server, Lastverteiler, Reverse Proxies usw. sorgen zu müssen, macht es viel einfacher zu beginnen.
- Railway hat einen [Fokus auf die Entwicklererfahrung von Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve als bei vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von Railway lernen werden, sind übertragbar.
  Auch wenn Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway für [Ihre eigene Website geeignet ist](#einen_hosting-anbieter_wählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in einem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, benötigt Railway die Möglichkeit, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und Umgebungen basierend auf ihrer Verwendung von "üblichen Konventionen" automatisch erkennen und installieren kann.
Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben und kann den verwendeten Paketmanager für den Aufbau aus der "Lock"-Datei bestimmen.
Zum Beispiel, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ verwendet wird, um die Pakete zu installieren, während es, wenn es **yarn.lock** findet, weiß, dass _yarn_ verwendet wird.
Nachdem alle Abhängigkeiten installiert wurde, wird Railway nach Skripten namens "build" und "start" in der Paketdatei suchen und diese zum Bauen und Ausführen des Codes verwenden.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben wurden.
> Sie müssen nichts weiter für dieses Tutorial wissen, aber Sie können mehr über Optionen für die Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich mit Informationen aus [Umgebungsvariablen](https://docs.railway.app/guides/variables) konfigurieren.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse mit einer Variablen erhalten.
Der Datenbankdienst kann selbst von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und verwenden ein spezielles [Command Line Interface (CLI)](https://docs.railway.app/guides/cli) Tool.
Mit dem CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochladen, die Protokolle des laufenden Prozesses anzeigen, Konfigurationsvariablen setzen und abrufen und vieles mehr.
Einer der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist der Überblick, den Sie brauchen, um die App bei Railway bereitzustellen.
Als Nächstes werden wir ein Railway-Konto einrichten, unsere Website und eine Datenbank installieren und den Railway-Client ausprobieren.

### Ein Railway-Konto erhalten

Um Railway zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Wenn möglich, sollten Sie Ihre E-Mail überprüfen und bestätigen.
- Sie werden dann in das Railway.app-Dashboard eingeloggt: <https://railway.app/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard** Option aus dem Hauptmenü der Seite und wählen Sie dann die **Neues Projekt** Schaltfläche:

![Railway-Website-Dashboard mit Hervorhebung der Schaltfläche "Neues Projekt"](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage in Ihrem GitHub-Konto zu erstellen, und einer Reihe von Datenbanken.
Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Popup, das Bereitstellungsoptionen mit hervorgehobener Option "Von GitHub-Repo bereitstellen" zeigt](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie bei der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<benutzername>/express-locallibrary-tutorial`.

![Railway-Popup, das GitHub-Repos zeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bildschirm mit Bestätigunssoption zur Bereitstellung des Projekts](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und Fortschritte auf der Registerkarte "Bereitstellungen" anzeigen.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Dashboard, das die Registerkarte "Bereitstellungen" für das bereitgestellte Projekt zeigt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Einstellungen_, scrollen Sie dann zum Abschnitt Domains und drücken Sie die **Domain generieren** Schaltfläche.

![Railway-Projekteinstellungen-Tab mit Schaltfläche zum Generieren einer Domain hervorgehoben](railway_project_generate_domain.png)

Dies wird die Seite veröffentlichen und die Domain anstelle der Schaltfläche anzeigen, wie unten gezeigt.

![Railway-Projekteinstellungen-Tab mit Link zur lokalen Bibliotheksseite](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen.
Da wir keine Produktionsdatenbank angegeben haben, wird die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, wollen wir als nächstes eine Produktions-MongoDB-Datenbank erstellen.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl Sie nichts daran hindert, eine in einem eigenen separaten Projekt oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu erstellen, genauso wie Sie es für die Entwicklungsdatenbank getan haben.

Auf Railway, wählen Sie die **Dashboard** Option im Hauptmenü der Seite und wählen Sie dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzelnen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Wählen Sie die **Neu** Schaltfläche, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie nach dem Typ des hinzuzufügenden Dienstes gefragt werden.

![Railway-Popup, das Optionen für einen neuen Dienst zeigt, wie Datenbank, GitHub-Repo, leeren Dienst und so weiter](railway_database_add.png)

Dann wählen Sie **MongoDB hinzufügen**, um die Datenbank hinzuzufügen

![Railway-Popup, das verschiedene Datenbanken zeigt, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun in der Projektansicht sowohl die Anwendungs- als auch die Datenbankdienste.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie die Registerkarte _Variablen_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm, der die zum Verbinden mit der Datenbank erforderliche URL zeigt](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es über eine Umgebungsvariable zum Anwendungsprozess hinzufügen.
Öffnen Sie zuerst den Anwendungsdienst.
Dann wählen Sie die Registerkarte _Variablen_ und drücken Sie die **Neue Variable** Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfigurierten](#datenbankkonfiguration), um die Datenbankadresse zu lesen).
Dies wird ähnlich wie der unten gezeigte Bildschirm aussehen.

![Railway-Website-Variablenscreen während der Eingabe der MONGODB_URI-Variablen und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn sie Variablen aktualisiert. Wenn Sie die Startseite jetzt überprüfen, sollte sie null Werte für Ihre Objektanzahlen anzeigen, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich, dass wir in einem vorhergehenden Abschnitt das [Setzen von NODE_ENV auf 'production'](#set_node_env_to_production) benötigen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies im selben Bildschirm wie die `MONGODB_URI`-Variable setzen.

Öffnen Sie den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variablen_, wo Sie sehen können, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **Neue Variable** Schaltfläche.

![Railway-Variablenregisterkarte mit hervorgehobener neuer Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Name für die neue Variable ein und `production` als Name der Umgebung.
Dann drücken Sie die **Hinzufügen** Schaltfläche.

![Railway-Variablenregisterkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist nun für die Produktion eingerichtet und konfiguriert.
Sie können Daten über die Benutzeroberfläche der Website hinzufügen, und sie sollte in der gleichen Weise funktionieren, wie sie während der Entwicklung tat (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten für Tests hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie in dem Abschnitt [Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testen — einige Einträge erstellen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.app/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers für ein zugeordnetes Railway-Projekt (ohne dass Sie es auf GitHub hochladen müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle anzeigen, indem Sie Folgendes in einem Terminal eingeben:

```bash
railway help
```

### Debugging

Der Railway-Client bietet den Befehl logs, um das Ende von Logs anzuzeigen (ein ausführlicheres Log ist auf der Seite für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch das Ende der Reihe von Tutorials zum Arbeiten mit Express. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) überprüfen.

## Siehe auch

- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentationen)
- [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentationen)
- Railway-Dokumentationen

  - [CLI](https://docs.railway.app/guides/cli)

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

{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
