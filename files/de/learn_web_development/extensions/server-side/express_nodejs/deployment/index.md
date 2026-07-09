---
title: "Express Tutorial Teil 7: Veröffentlichung in der Produktion"
short-title: "7: Veröffentlichen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Da Sie nun eine Beispiel-Website mit Express erstellt und getestet haben, ist es an der Zeit, diese auf einem Webserver zu veröffentlichen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie man ein Express-Projekt hostet und beschreibt, was zur Vorbereitung auf die Produktion benötigt wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Themen des Tutorials, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo und wie Sie eine Express-App in der Produktion veröffentlichen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Nachdem Ihre Website fertiggestellt ist (oder „fertig genug“ für öffentliche Tests), müssen Sie sie an einem öffentlich zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, wobei Express/Node als Webserver verwendet wurde, um Ihre Seite an den lokalen Browser/das Netzwerk zu verteilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen, die Debugging und andere private Informationen offenlegen, betrieben wurde. Bevor Sie die Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsfähige Infrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet eine Anleitung zu Ihren Optionen für die Wahl einer Hosting-Seite, eine kurze Übersicht darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereit zu machen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website zur externen Nutzung betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprachen-Laufzeit und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, eines Reverse-Proxys, eines Lastenausgleichs usw.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über einen schnellen Link mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem „virtuellen“ Computer) in den Rechenzentren Ihres Hosting-Anbieters ausgeführt wird. Der entfernte Server bietet normalerweise ein garantiertes Level an Computerressourcen (z.B. CPU, RAM, Speicherplatz usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von fernzugänglicher Computer- und Netzwerkausrüstung wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems an, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, vollständigere Umgebungen auszuwählen, die möglicherweise eine vollständige Node-Einrichtung enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können es einfacher machen, Ihre Website einzurichten, da sie die benötigte Konfiguration verringern, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und können auf einer älteren Version des Betriebssystems basieren. Es ist oft besser, Komponenten selbst zu installieren, damit Sie die erhalten, die Sie möchten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Verwendung dieser Art von Hosting müssen Sie sich nicht um die meisten Ihrer Produktionsumgebung (Server, Lastenausgleichsdienste usw.) kümmern, da die Host-Plattform diese für Sie übernimmt. Das macht das Deployment recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die andere Serverinfrastruktur.

Manche Entwickler entscheiden sich für die erhöhte Flexibilität, die IaaS im Vergleich zu PaaS bietet, während andere die reduzierte Wartungsbelastung und den geringeren Skalierungsaufwand von PaaS schätzen. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten. Das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollte dieser Anleitungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen des Webservers, der Anwendungsserver, des Reverse-Proxys usw. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community Docs](https://www.digitalocean.com/community/tutorials?q=node).

## Wahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, von denen bekannt ist, dass sie entweder aktiv _Node_ (und _Express_) unterstützen oder gut damit arbeiten. Diese Anbieter bieten unterschiedliche Umgebungen (IaaS, PaaS) und verschiedene Stufen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen an.

> [!NOTE]
> Es gibt viele Hosting-Lösungen und ihre Dienstleistungen und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie sich für einen Hosting-Anbieter entscheiden.

Einige Dinge, die Sie bei der Wahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Website wahrscheinlich besucht wird und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale (Hinzufügen von mehr Maschinen) und vertikale (Upgrade auf leistungsfähigere Maschinen) Skalierung und die Kosten dafür.
- Die Standorte, an denen der Anbieter Rechenzentren hat und daher der Zugriff voraussichtlich am schnellsten ist.
- Die Verfügbarkeit und Ausfallzeiten des Hosts in der Vergangenheit.
- Tools zur Verwaltung der Website — sind sie einfach zu verwenden und sicher (z.B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten in einigen Preisklassen nur eine bestimmte Anzahl von "Live-Stunden" oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, die Sie ansonsten bezahlen müssten.
- Ob die „kostenlose“ Stufe, auf die Sie sich verlassen, im Laufe der Zeit ausläuft und ob die Kosten für die Migration zu einer teureren Stufe bedeuten, dass Sie besser dran wären, von Anfang an einen anderen Dienst zu verwenden!

Die gute Nachricht, wenn Sie anfangen, ist, dass es ziemlich viele Seiten gibt, die „kostenlose“ Computerumgebungen bieten, die für Evaluations- und Testzwecke gedacht sind. Diese sind in der Regel ressourcenbeschränkte/begrenzte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer Einstiegsphase ablaufen können oder andere Beschränkungen haben. Sie sind jedoch großartig zum Testen von geringen Verkehrssites in einer gehosteten Umgebung und können einen einfachen Übergang zur Zahlung für mehr Ressourcen bieten, wenn Ihre Website belebter wird. Beliebte Optionen in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine „Basis“- oder „Hobby“-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Stufen an Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basisstufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit der wichtigste Aspekt ist.

## Ihre Website bereit für die Veröffentlichung machen

Die Hauptsachen, über die man beim Veröffentlichen Ihrer Website nachdenken sollte, sind Web-Sicherheit und Leistung. Im Minimalfall möchten Sie die Datenbankkonfiguration ändern, damit Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stapelverfolgung, die auf Fehlerseiten während der Entwicklung enthalten ist, entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten stellen wir die wichtigsten Änderungen vor, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumenten — siehe [Produktionsbeste Vorgehensweisen: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance/) und [Produktionsbeste Vorgehensweisen: Sicherheit](https://expressjs.com/en/advanced/best-practice-security/).

### Datenbankkonfiguration

In diesem Tutorial haben wir bisher eine einzige Entwicklungsdatenbank verwendet, für die Adresse und Anmeldeinformationen in [**bin/www** fest codiert](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#connect_to_mongodb) wurden. Da die Entwicklungsdatenbank keine Informationen enthält, die wir schützen oder korrumpieren möchten, besteht kein besonderes Risiko, diese Details zu veröffentlichen. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist es sehr wichtig, Ihre Datenbank-Anmeldeinformationen zu schützen.

Aus diesem Grund möchten wir für die Produktion eine andere Datenbank als in der Entwicklung verwenden und die Anmeldeinformationen der Produktionsdatenbank vom Quellcode getrennt halten, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele es tun), können Sie den Server die Datenbank-URL über eine Umgebungsvariable abrufen lassen. Nachfolgend modifizieren wir die LocalLibrary-Website, um die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen zu beziehen, wenn sie definiert wurde, und verwenden andernfalls die Entwicklungsdatenbank-URL.

Öffnen Sie **bin/www** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Sie sieht in etwa so aus:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile mit dem folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenfolge aus einer Umgebungsvariablen namens `MONGODB_URI` abzurufen, falls dies gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

```js
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
```

> [!NOTE]
> Eine andere übliche Methode, um die Anmeldeinformationen der Produktionsdatenbank vom Quellcode getrennt zu halten, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem [dotenv](https://www.npmjs.com/package/dotenv)-Modul von npm gelesen werden).

### Setzen von NODE_ENV auf 'production'

Wir können die Stapelverfolgung auf Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Zusätzlich zum Erzeugen weniger ausführlicher Fehlermeldungen bewirkt das Setzen der Variable auf _production_, dass Vorlagen für Ansichten und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, zwischengespeichert werden. Tests zeigen, dass durch das Setzen von `NODE_ENV` auf _production_ die Leistung der App um das Dreifache verbessert werden kann!

Diese Änderung kann entweder mit `export`, einer Umgebungsdatei oder dem OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrer Umgebungseinrichtung vornehmen, nicht in Ihrer App, aber es ist wichtig genug, hier darauf hinzuweisen! Wir zeigen, wie dies für unser Hosting-Beispiel unten festgelegt wird.

### Angemessenes Logging

Logging-Aufrufe können einen Einfluss auf eine stark frequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z.B. den Verkehr verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge des hinzugefügten Loggings zu Minimierungszwecken zu reduzieren.

Eine Möglichkeit, "Debug"-Logging in der Produktion zu minimieren, besteht in der Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), das Ihnen erlaubt zu kontrollieren, welches Logging durch das Setzen einer Umgebungsvariablen durchgeführt wird. Beispielsweise zeigt der folgende Codeabschnitt, wie Sie das "author" Logging einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Protokolle von diesem Objekt angezeigt.

```js
const debug = require("debug")("author");

// Display Author update form on GET.
exports.author_update_get = async (req, res, next) => {
  const author = await Author.findById(req.params.id).exec();
  if (author === null) {
    // No results.
    debug(`id not found on update: ${req.params.id}`);
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_form", { title: "Update Author", author });
};
```

Sie können dann einen bestimmten Satz von Protokollen aktivieren, indem Sie sie als durch Kommas getrennte Liste in der `DEBUG` Umgebungsvariablen angeben. Sie können die Variablen für die Anzeige von Autoren- und Buchprotokollen wie gezeigt festlegen (auch Wildcards werden unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe zu `debug` können das Logging ersetzen, das Sie zuvor möglicherweise mit `console.log()` oder `console.error()` gemacht haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, welchen Einfluss dies auf das Logging hat.

Wenn Sie Websiteaktivitäten protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Für weitere Informationen zu diesem Thema siehe: [Produktionsbeste Vorgehensweisen: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance/).

### Verwenden von gzip/deflate-Kompression für Antworten

Webserver können häufig die HTTP-Antworten komprimieren, die an einen Client gesendet werden, wodurch die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich verkürzt wird. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt, dass er sie unterstützt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Seite hinzu, indem Sie das [compression](https://www.npmjs.com/package/compression) Middleware verwenden. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die compression-Bibliothek wie gezeigt ein. Fügen Sie die compression-Bibliothek zu der Middleware-Kette mit der `use()`-Methode hinzu (dies sollte vor Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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
> Für eine stark frequentierte Website in der Produktion würden Sie dieses Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden von Helmet zum Schutz vor bekannten Schwachstellen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe [Dokumentation](https://helmet.js.org/) für weitere Informationen zu den gesetzten Headern und den geschützten Schwachstellen).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek wie gezeigt ein.
Fügen Sie dann das Modul zur Middleware-Kette mit der `use()`-Methode hinzu.

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
      "script-src": ["'self'", "cdn.jsdelivr.net"],
    },
  }),
);

// …
```

Normalerweise hätten wir einfach `app.use(helmet());` hinzugefügt, um den _Teil_ der sicherheitsbezogenen Header hinzuzufügen, der für die meisten Seiten sinnvoll ist. Im [LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) enthalten wir jedoch einige Bootstrap-Skripte. Diese verstoßen gegen die _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von helmet, die das Laden von Skripten von anderen Websites nicht erlaubt. Um diesen Skripten das Laden zu ermöglichen, modifizieren wir die helmet-Konfiguration so, dass CSP-Direktiven gesetzt werden, die das Laden von Skripten von den angegebenen Domains erlauben. Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Begrenzung der Anfragehäufigkeit für die API-Routen hinzufügen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden könnten, z.B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder einfach ein Client oder Skript, das nicht wie erwartet funktioniert. Abgesehen von den Leistungsproblemen, die durch zu viele Anfragen, die Ihren Server verlangsamen, entstehen können, können Ihnen zusätzliche Gebühren für den zusätzlichen Traffic berechnet werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder einen Satz von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek wie gezeigt ein. Fügen Sie dann das Modul zur Middleware-Kette mit der `use()`-Methode hinzu.

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
> Drittanbieterdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen erweiterten Schutz gegen Denial-of-Service- oder andere Angriffsarten benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungenabhängigkeiten und die Einstiegsdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Node-Version, die für die Entwicklung verwendet wurde, ermitteln, indem Sie den Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** wie gezeigt hinzu (unter Verwendung der Versionsnummer Ihres Systems).

```json
{
  "engines": {
    "node": ">=22.0.0"
  }
}
```

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifisch angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass es versucht wird, eine Version mit derselben Hauptversionsnummer oder einer neueren Version zu verwenden.

Beachten Sie, dass es bei verschiedenen Hosting-Diensten andere Möglichkeiten geben kann, die Node-Version anzugeben, aber der **package.json**-Ansatz wird weitgehend unterstützt.

#### Abhängigkeiten holen und erneut testen

Bevor wir fortfahren, testen wir die Seite nochmal und stellen sicher, dass keine unserer Änderungen einen negativen Einfluss hatte.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Starten Sie nun die Seite (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und stellen Sie sicher, dass die Seite weiterhin wie erwartet funktioniert.

### Erstellen eines Anwendungs-Repositories auf GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Versionskontrollplattformen zu importieren und/oder zu synchronisieren. Das kann den Bereitstellungs- und iterativen Entwicklungsprozess wesentlich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und ein Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Versionskontrolltools eine gute Software-Entwicklungspraxis ist, da sie es Ihnen ermöglichen, Änderungen auszuprobieren und zwischen Ihren Experimenten und „bekannt gutem Code“ zu wechseln, wenn Sie es benötigen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht zwingend sind, werden sie dringend empfohlen.
   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_), und eine Beschreibung (z.B. „Local Library Website in Express geschrieben“).
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlliste.
   - Markieren Sie **Dieses Repository mit einem README initialisieren**.

   > [!WARNING]
   > Der Standardwert "Öffentlich" macht _alle_ Quellcodes—einschließlich Ihres Datenbankbenutzernamens und Passworts—für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen hart codiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen den Quellcode anzeigen zu lassen.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf die grüne **Clone or download** Schaltfläche auf Ihrer neuen Repos-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im angezeigten Dialogfeld. Wenn Sie den Repositorienamen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizielle Git-Download-Anleitung](https://git-scm.com/downloads/)).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Wechseln Sie in das Repo-Verzeichnis.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in das Repo-Verzeichnis, machen Sie sie mit _git_ zu einem Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in dieses Verzeichnis (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie nach Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, dass alle Dateien, die Sie `commit`-en wollen, korrekt sind (Sie möchten Quelldateien hinzufügen, keine Binärdateien, temporären Dateien usw.). Es sollte ungefähr wie die untenstehende Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit`-en Sie die Dateien in Ihr lokales Repo. Dies entspricht dem Abzeichnen der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. An diesem Punkt wurde das Remote-Repo noch nicht geändert. Der letzte Schritt besteht darin, Ihr lokales Repo mit dem Remote-GitHub-Repo durch den folgenden Befehl zu synchronisieren (`push`).

   ```bash
   git push origin main
   ```

Nachdem diese Operation abgeschlossen ist, sollten Sie zur Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen Hinzufügen/Commit/Push-Zyklus verwenden.

Das ist ein guter Punkt, um eine Sicherung Ihres „Vanilla“-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein könnten, vielleicht nicht alle. Sie können dies mit `git` auf der Kommandozeile tun:

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
> Git ist unglaublich mächtig! Um mehr zu lernen, siehe [Git Learning Resources](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

> [!NOTE]
> MDN hat dieses Projekt von einer Reihe von Hosting-Diensten, die keine kostenlosen Stufen mehr anbieten, migriert. Wir haben uns entschieden, Railway für die aktuelle Hosting-Option zu verwenden, da es eine günstige Hobby-Stufe hat. Die meisten Dienste haben ähnliche Bereitstellungsmethoden, sodass die untenstehenden Anweisungen Ihnen helfen sollten, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist für mehrere Gründe eine attraktive Hosting-Option:

- Railway kümmert sich um den größten Teil der Infrastruktur, damit Sie es nicht tun müssen. Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway hat einen [Fokus auf die Entwicklererfahrung bei der Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es hat eine vergleichbar kostengünstige [Hobby-Stufe](https://railway.com/pricing).
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, können Sie mit vorhersehbaren Preisen rechnen und Ihre App leicht skalieren.

Nehmen Sie sich die Zeit zu überprüfen, ob Railway [für Ihre eigene Website geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und verstehen, wie sie gestartet wird.

Railway erleichtert dies, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen basierend auf der Verwendung von „common conventions“ automatisch erkennen und installieren kann. Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben und kann den verwendeten Paketmanager zur Erstellung aus der „Lock“-Datei bestimmen. Beispielsweise weiß Railway, wenn die Anwendung die Datei **package-lock.json** enthält, dass npm zum Installieren der Pakete verwendet werden soll, während es bei **yarn.lock** weiß, dass yarn verwendet werden soll. Nachdem alle Abhängigkeiten installiert wurden, sucht Railway nach Skripten mit den Namen „build“ und „start“ in der Paketdatei und verwendet diese, um den Quellcode zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind. Sie müssen für dieses Tutorial nichts Weiteres wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellt sind. Eine Anwendung, die eine Datenbank verwendet, muss zum Beispiel die Adresse über eine Variable beziehen. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und verwenden ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/cli)-Tool. Mit dem CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository vom lokalen Branch auf die Live-Seite hochladen, die Protokolle des laufenden Prozesses inspizieren, Konfigurationsvariablen setzen und abfragen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist alles, was Sie wissen müssen, um die App auf Railway bereitzustellen. Als Nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und testen den Railway-Client.

### Einen Railway-Account erstellen

Um Railway verwenden zu können, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann beim Railway.com Dashboard angemeldet: <https://railway.com/dashboard>.

### Deployment von GitHub auf Railway

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die **Dashboard**-Option aus dem Menü oben auf der Website und dann die **New Project** Schaltfläche:

![Railway Website-Dashboard zeigt neue Projekt Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wurde, und einer Reihe von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway Popup zeigt Bereitstellungsoptionen mit hervorgehobener Deploy from GitHub repo Option](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway Popup zeigt GitHub Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und dabei den Fortschritt auf dem Bereitstellungstab anzeigen. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten dargestellten.

![Railway Dashboard zeigt den Deployments-Tab für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun den _Settings_ Tab, scrollen Sie dann nach unten zu dem Abschnitt Domains und drücken Sie die **Generate Domain** Schaltfläche.

![Railway Projekt-Einstellungen Tab zeigt Schaltfläche zum Generieren einer Domain](railway_project_generate_domain.png)

Dadurch wird die Seite veröffentlicht und die Domain wird anstelle der Schaltfläche angezeigt, wie unten gezeigt.

![Railway Projekt-Einstellungen Tab zeigt einen Link zur lokalen Bibliotheksseite](railway_project_domain.png)

Wählen Sie die URL der Domain aus, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass, da wir keine Produktionsdatenbank angegeben haben, die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet wird.

### Bereitstellen und Verbinden einer MongoDB-Datenbank

Anstelle der Verwendung unserer Entwicklungsdaten, lass uns als Nächstes eine Produktions-MongoDB-Datenbank erstellen, die stattdessen verwendet wird. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie als eigenes separates Projekt zu erstellen oder eine _MongoDB Atlas_ Datenbank für Produktionsdaten zu verwenden, so wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard**-Option aus dem Menü oben auf der Website und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Wählen Sie die **New**-Schaltfläche, die zum Hinzufügen von Diensten zum aktuellen Projekt verwendet wird.

![Railway-Projekt mit hervorgehobener Schaltfläche Neuer Dienst](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie gefragt werden, welche Art von Dienst Sie hinzufügen möchten:

![Railway Popup zeigt Optionen für einen neuen Dienst wie Datenbank, GitHub-Repo, leeren Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway Popup zeigt verschiedene Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank innerhalb desselben Projekts bereitstellen. Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbank-Services in der Projektanzeige.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen. Öffnen Sie den _Variables_ Tab und kopieren Sie die „Mongo_URL“ (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm zeigt die zum Herstellen einer Verbindung zur Datenbank benötigte URL](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir diese der Anwendungsprozess mit einer Umgebungsvariable hinzufügen. Öffnen Sie zunächst den Anwendungsservice. Wählen Sie dann den _Variables_ Tab und drücken Sie die **New Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariablen, aus der [wir die Anwendung](#datenbankkonfiguration) konfiguriert haben, um die Datenbankadresse zu lesen), ein. Dies sollte etwa so aussehen wie im unten dargestellten Bildschirm.

![Railway Variablenbildschirm zeigt MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie Nullwerte für Ihre Objektanzahlen anzeigen, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich vielleicht an einen vorherigen Abschnitt, dass wir `NODE_ENV` auf „production“ setzen müssen, um unsere Leistung zu verbessern und weniger detaillierte Fehlermeldungen zu generieren. Wir können dies im selben Bildschirm einstellen, auf dem wir die `MONGODB_URI`-Variable festgelegt haben.

Öffnen Sie den Anwendungsservice. Wählen Sie dann den _Variables_ Tab, auf dem Sie sehen, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **New Variable** Schaltfläche.

![Railway Variablen-Tab mit hervorgehobener Neuer Variable-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable und `production` als Namen der Umgebung ein. Drücken Sie dann die **Hinzufügen**-Schaltfläche.

![Railway Variablen-Tab zeigt neue NODE_ENV-Variable, die auf „production“ gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist jetzt eingerichtet und für den Produktionsbetrieb konfiguriert. Sie können über die Website-Schnittstelle Daten hinzufügen und sie sollte auf die gleiche Weise arbeiten wie während der Entwicklung (allerdings mit weniger Debug-Informationen, die für ungültige Seiten offengelegt werden).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB Produktionsdatenbank-URL) verwenden, wie in dem Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Client installieren

Laden Sie den Railway-Client für Ihr Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigsten Operationen include das Bereitstellen des aktuellen Verzeichnisses Ihres Computers für ein verbundenes Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle anzeigen, indem Sie in einem Terminal folgendes eingeben.

```bash
railway help
```

### Fehlerbehebung

Der Railway-Client bietet den Befehl logs an, um den Verlauf der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Anwendungen in der Produktion und auch der Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass sie für Sie nützlich waren. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) ansehen.

## Siehe auch

- [Produktionsbeste Vorgehensweisen: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance/) (Express-Dokumentation)
- [Produktionsbeste Vorgehensweisen: Sicherheit](https://expressjs.com/en/advanced/best-practice-security/) (Express-Dokumentation)
- Railway Docs
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Erste Schritte auf Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [So funktioniert Heroku](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
