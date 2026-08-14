---
title: "Express-Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie eine Beispielwebsite mit Express erstellt und getestet haben, ist es an der Zeit, diese auf einem Webserver bereitzustellen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie man ein Express-Projekt hostet, und skizziert, was Sie tun müssen, um es für die Produktion bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Themen des Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
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

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug" für den öffentlichen Test), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver genutzt, um Ihre Website im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Infrastrukturebene für die Produktion einrichten, um Ihre Website bereitzustellen.

Dieses Tutorial bietet einige Leitlinien zu Ihren Optionen für die Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion vorzubereiten, und ein funktionierendes Beispiel, wie man die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für die externe Nutzung betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprachen-Laufzeitumgebung und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxy, Load-Balancer usw.
- Datenbanken, von denen Ihre Website abhängt.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Leitung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet im Wesentlichen, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren des Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Computing-Ressourcen (z. B. CPU, RAM, Speicherplatz usw.) und Internetverbindung zu einem bestimmten Preis.

Solche aus der Ferne zugänglichen Computer- und Netzwerk-Hardware werden als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie dann die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen Ihnen die Auswahl voll ausgestatteterer Umgebungen, die möglicherweise ein komplettes Node-Setup umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website erleichtern, da sie die erforderliche Konfiguration reduzieren. Die verfügbaren Optionen können Sie jedoch auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Es ist oft besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_) Angebots. Mit dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Server, Load Balancer usw.) kümmern, da die Host-Plattform dies für Sie übernimmt. Dadurch wird der Deployment-Prozess recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Serverinfrastrukturen.

Einige Entwickler bevorzugen die Flexibilität, die IaaS im Vergleich zu PaaS bietet, während andere den geringeren Wartungsaufwand und den geringeren Aufwand für Skalierung von PaaS schätzen. Wenn Sie gerade erst anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, daher werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen bereitstellen, wie man eine Express-Website unter Verwendung verschiedener Konfigurationen von Webserver, Anwendungserver, Reverse-Proxy usw. einrichtet. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node-Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekannt dafür sind, entweder aktiv Unterstützung für oder gut mit _Node_ (und _Express_) zusammenzuarbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und verschiedene Ebenen von Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, ist es empfehlenswert, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Dinge, die zu berücksichtigen sind, wenn Sie einen Host auswählen:

- Wie viel Verkehr Ihre Seite voraussichtlich haben wird und die Kosten für die Daten- und Computerressourcen, die zur Deckung dieses Bedarfs erforderlich sind.
- Die Unterstützungsebene für das horizontale (Hinzufügen weiterer Maschinen) und vertikale (Upgrade auf leistungsfähigere Maschinen) Skalieren und die Kosten dafür.
- Die Standorte, an denen der Anbieter Rechenzentren hat und wo der Zugriff daher am schnellsten sein dürfte.
- Die historische Betriebszeit und Ausfallzeiten des Hosts.
- Bereitgestellte Tools zur Verwaltung der Seite – sind sie einfach zu verwenden und sicher (z. B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preiskategorien nur eine bestimmte Anzahl von Stunden "Live-Zeit" oder nur eine kleine Menge an Speicher.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob die von Ihnen genutzte "kostenlose" Stufe im Laufe der Zeit abläuft und ob die Kosten für den Umzug in eine teurere Stufe bedeuten, dass Sie besser dran gewesen wären, von Anfang an einen anderen Dienst zu nutzen.

Die gute Nachricht, wenn Sie anfangen, ist, dass es viele Websites gibt, die "kostenlose" Computerumgebungen anbieten, die für Bewertung und Tests gedacht sind.
Diese sind in der Regel ziemlich ressourcenbeschränkte/limitierte Umgebungen, und man muss sich bewusst sein, dass sie möglicherweise nach einer bestimmten Einführungszeit ablaufen oder andere Einschränkungen haben.
Sie sind jedoch großartig für das Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und können einen einfachen Übergang zum Bezahlen für mehr Ressourcen bieten, wenn Ihr Website-Verkehr zunimmt.
Beliebte Optionen in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine "Basic" oder "Hobby" Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Computing-Power mit weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele populärer Hosting-Anbieter, die eine relativ günstige grundlegende Computerkategorie haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit der wichtigste Gesichtspunkt ist.

## Vorbereitung Ihrer Website zur Veröffentlichung

Die Hauptpunkte, die Sie bei der Veröffentlichung Ihrer Website berücksichtigen sollten, sind Web-Sicherheit und Leistung. Mindestens sollten Sie die Datenbankkonfiguration ändern, damit Sie eine andere Datenbank für die Produktion verwenden können und deren Anmeldeinformationen sichern, die Stack-Traces entfernen, die während der Entwicklung auf Fehlerseiten angezeigt werden, Ihre Protokollierung aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumentationen – siehe [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance/) und [Produktions-Best-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security/).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldedaten im [**bin/www** hartcodiert](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#connect_to_mongodb) waren.
Da die Entwicklungsdatenbank keine Informationen enthält, deren Preisgabe oder Beschädigung wir befürchten, besteht kein besonderes Risiko beim Leaken dieser Details.
Wenn Sie jedoch mit realen Daten arbeiten, insbesondere persönlichen Benutzerinformationen, ist es sehr wichtig, Ihre Datenbank-Anmeldeinformationen zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion als für die Entwicklung verwenden und auch die Anmeldedaten der Produktionsdatenbank getrennt vom Quellcode halten, damit sie angemessen geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einrichtung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie dies bei vielen der Fall ist), besteht eine Möglichkeit darin, den Server die Datenbank-URL aus einer Umgebungsvariable beziehen zu lassen. Unten modifizieren wir die LocalLibrary-Website, um die Datenbank-URI von einer Betriebssystem-Umgebungsvariablen zu bekommen, falls diese definiert wurde, und ansonsten die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **bin.www** und suchen Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird etwa so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen namens `MONGODB_URI` abzurufen, falls sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

```js
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
```

> [!NOTE]
> Eine andere gängige Methode, um Produktionsdatenbankanmeldeinformationen vom Quellcode getrennt zu halten, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (z. B. könnten sie mit dem [dotenv](https://www.npmjs.com/package/dotenv)-Modul von npm gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Trace-Anzeigen auf Fehlerseiten entfernen, indem wir die `NODE_ENV`-Umgebungsvariable auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zum Generieren weniger ausführlicher Fehlermeldungen cacht das Setzen der Variable auf _production_ Ansichts-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die App-Leistung um den Faktor drei verbessern kann!

Diese Änderung kann entweder mit `export`, einer Umgebungsdatei oder dem OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungseinrichtung vornehmen, nicht in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir werden zeigen, wie dies für unser Hosting-Beispiel unten eingestellt wird.

### Protokollieren Sie entsprechend

Protokollaufrufe können sich auf eine stark frequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z. B. den Verkehr verfolgen oder API-Aufrufe protokollieren), sollten aber versuchen, die Menge an Protokollierung, die zu Debug-Zwecken hinzugefügt wurde, zu minimieren.

Eine Möglichkeit, die "Debug"-Protokollierung in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das Ihnen erlaubt, die durchgeführte Protokollierung durch Setzen einer Umgebungsvariablen zu steuern. Zum Beispiel zeigt das untenstehende Codefragment, wie Sie "author"-Logging einrichten könnten. Die debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Sie können dann ein bestimmtes Set von Logs aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariablen angeben. Sie können die Variablen für das Anzeigen von Autor- und Buch-Logs wie gezeigt festlegen (auch Wildcards werden unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe an `debug` können die Protokollierung ersetzen, die Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Protokollierung über das [debug](https://www.npmjs.com/package/debug)-Modul. Schalten Sie die Protokollierung in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen, und beobachten Sie die Auswirkungen, die dies auf die Protokollierung hat.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance/).

### Verwenden Sie gzip/deflate-Kompression für Antworten

Webserver können oft die HTTP-Antwort komprimieren, die an einen Client gesendet wird, wodurch die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich reduziert wird. Die verwendete Kompressionsmethode hängt von den Dekompressionsmethoden ab, die der Client in der Anfrage angibt, dass er sie unterstützt (die Antwort wird unkomprimiert gesendet, wenn keine Kompressionsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Site hinzu, indem Sie [compression](https://www.npmjs.com/package/compression) Middleware verwenden. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Kompressionsbibliothek wie gezeigt ein. Fügen Sie die Kompressionsbibliothek mit der `use()`-Methode zur Mittelwarenkette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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

### Verwenden Sie Helmet, um vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [Dokumentation](https://helmet.js.org/) für weitere Informationen, welche Header es setzt und welche Schwachstellen es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek wie gezeigt ein. Fügen Sie dann das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um den _Subset_ der sicherheitsrelevanten Header hinzuzufügen, die für die meisten Sites sinnvoll sind. Im [LocalLibrary-Base-Template](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) enthalten wir jedoch einige Bootstrap-Skripte. Diese verletzen die _default_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von helmet, die das Laden von Skripten über Querverweise nicht erlaubt. Um das Laden dieser Skripte zu ermöglichen, modifizieren wir die Helmet-Konfiguration so, dass sie CSP-Direktiven setzt, um das Laden von Skripten aus den angegebenen Domänen zu ermöglichen. Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie Ratenbegrenzung zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum zu viele Anfragen an Ihre Seite gestellt werden könnten, wie z. B. Denial of Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das nicht wie erwartet funktioniert. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können, die dazu führen, dass Ihr Server langsamer läuft, können Ihnen auch Gebühren für den zusätzlichen Traffic berechnet werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder einen Satz von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek wie gezeigt ein. Fügen Sie dann das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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
> Drittanbieterdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen fortschrittlicheren Schutz gegen Denial of Service oder andere Arten von Angriffen benötigen.

#### Setzen Sie die Node-Version

Bei Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Abhängigkeiten der Anwendung und die Einstiegspunktdatei zu erkennen.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version. Sie können die Version von Node herausfinden, die für die Entwicklung verwendet wurde, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json**, und fügen Sie diese Information als **engines > node** wie gezeigt hinzu (unter Verwendung der Versionsnummer Ihres Systems).

```json
{
  "engines": {
    "node": ">=22.0.0"
  }
}
```

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er eine Version mit derselben Hauptversionsnummer oder einer neueren Version verwendet.

Beachten Sie, dass es andere Möglichkeiten geben kann, die Node-Version auf verschiedenen Hosting-Diensten anzugeben, aber der **package.json**-Ansatz wird weitgehend unterstützt.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, testen wir die Site erneut und stellen sicher, dass sie nicht von unseren Änderungen betroffen war.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Nun führen Sie die Site aus (siehe [Testing the routes](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und prüfen Sie, ob die Site sich noch wie erwartet verhält.

### Einrichten eines Anwendung-Repositories in GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellcode-Versionskontrollplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools gute Softwareentwicklungspraktiken sind, da sie es Ihnen ermöglichen, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekanntem gutem Code" zu wechseln, wenn Sie es müssen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Wenn Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Auch wenn diese nicht verpflichtend sind, werden sie dringend empfohlen.
   - Geben Sie einen neuen Repositories-Namen ein (z. B. _express-locallibrary-tutorial_), und eine Beschreibung (wie "Local Library website written in Express").
   - Wählen Sie **Node** im _Add .gitignore_-Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz im _Add license_-Auswahlliste.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _alle_ Quellcodes – einschließlich Ihrer Datenbank-Benutzernamen und -Passwörter – für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine fest codierten Anmeldeinformationen enthält.
   >
   > Wählen Sie andernfalls die "Privat"-Option, um nur ausgewählten Personen den Zugriff auf den Quellcode zu erlauben.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf die grüne Schaltfläche **Klonen oder herunterladen** auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfenster, das erscheint. Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([official Git download guide](https://git-scm.com/downloads/)).
2. Öffnen Sie ein Befehlszeilen-/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Wechseln Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungs-Quelldateien in den Repo-Ordner, machen Sie sie mit _git_ zum Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Befehlszeilen-/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit` möchten, korrekt sind (Sie wollen Quellcodedateien und keine Binärdateien, temporären Dateien usw. einschließen).
   Es sollte in etwa so aussehen wie die unten stehende Auflistung.

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

4. Wenn Sie zufrieden sind, `commit` die Dateien in Ihrem lokalen Repo. Dies entspricht dem Unterzeichnen der Änderungen und dem offiziellen Teil des lokalen Repos machen.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo noch nicht geändert. Der letzte Schritt besteht darin, Ihr lokales Repo mit dem Remote-GitHub-Repo mit dem folgenden Befehl zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie in der Lage sein, zur Seite auf GitHub zu gehen, auf der Sie Ihr Repo erstellt haben, die Seite zu aktualisieren und zu sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, indem Sie diesen Zusatz-/Commit-/Push-Zyklus verwenden, wenn sich Dateien ändern.

Dies ist ein guter Zeitpunkt, eine Sicherung Ihres "Vanilla"-Projekts zu erstellen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) sind, andere möglicherweise nicht. Sie können dies mit `git` in der Befehlszeile tun:

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

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

> [!NOTE]
> MDN hat dieses Projekt von einer Reihe von Hosting-Diensten migriert, die keine kostenlosen Tarife mehr anbieten. Wir haben uns für Railway als aktuelle Hosting-Option entschieden, die einen kostengünstigen Freizeittarif bietet. Die meisten Dienste haben ähnliche Bereitstellungsmethoden, daher sollten die untenstehenden Anweisungen Ihnen helfen, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie dies nicht tun müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway konzentriert sich auf die [Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Railway lernen, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste dieselben Ideen und Ansätze.
- Die [Dokumentation von Railway](https://docs.railway.com/) ist klar und vollständig.
- Es hat einen vergleichsweise kostengünstigen [Hobby-Tarif](https://railway.com/pricing).
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn schätzen lernen, sind die Preise vorhersehbar, und das Hochskalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway die geeignete Umgebung und die Abhängigkeiten einrichten können und auch verstehen, wie sie gestartet wird.

Railway macht dies einfach, indem es viele verschiedene Webanwendungs-Frameworks und -Umgebungen basierend auf deren Verwendung von "generischen Konventionen" automatisch erkennen und installieren kann.
Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den verwendeten Paketmanager für den Build anhand der "Lock"-Datei bestimmen.
Zum Beispiel, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass es _npm_ verwenden sollte, um die Pakete zu installieren, während es, wenn es **yarn.lock** findet, weiß, dass _yarn_ verwendet werden soll.
Nachdem alle Abhängigkeiten installiert wurden, sucht Railway nach Skripten namens "build" und "start" in der Paketdatei und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind.
> Sie müssen für dieses Tutorial nichts anderes wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich mithilfe der in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellten Informationen konfigurieren.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse mit einer Variablen erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/cli)-Tool.
Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Logs des laufenden Prozesses einzusehen, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie mit dem CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie brauchen, um die App bei Railway bereitzustellen.
Als nächstes werden wir ein Railway-Konto einrichten, unsere Website und eine Datenbank installieren und den Railway-Client ausprobieren.

### Ein Railway-Konto einrichten

Um Railway zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Es kann sein, dass Sie dann zu Ihrem E-Mail-Postfach gehen und Ihr Konto verifizieren müssen.
- Danach sind Sie im Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway so ein, dass es unsere Bibliothek von GitHub bereitstellt. Wählen Sie zunächst die **Dashboard**-Option aus dem oberen Menü der Website und klicken Sie dann auf die Schaltfläche **Neues Projekt**:

![Railway-Website-Dashboard mit hervorgehobener neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Möglichkeit, ein Projekt aus einer Vorlage zu erstellen, die zuerst in Ihrem GitHub-Konto erstellt wurde, und einer Reihe von Datenbanken. Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Popup mit Bereitstellungsoptionen, mit hervorgehobener Option "Von GitHub-Repo bereitstellen"](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup mit GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm, in dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt und stellt es bereit, wobei der Fortschritt auf der Bereitstellungskarte angezeigt wird. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard mit Bereitstellungs-Tab für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun den _Einstellungen_-Tab aus, scrollen Sie nach unten zum Abschnitt Domains und drücken Sie die Schaltfläche **Domain generieren**.

![Railway-Projekteinstellungen-Tab mit hervorgehobener Schaltfläche zum Generieren einer Domain](railway_project_generate_domain.png)

Dadurch wird die Site veröffentlicht und die Domain anstelle der Schaltfläche bereitgestellt, wie unten dargestellt.

![Railway-Projekteinstellungen-Tab mit einem Link zur lokalen Bibliotheksseite](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen. Da wir keine Produktionsdatenbank angegeben haben, wird die lokale Bibliothek mit den Entwicklungsdaten geöffnet.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Erstellen wir nun anstelle der Entwicklungsdaten eine Produktions-MongoDB-Datenbank, die verwendet werden soll. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen oder eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genau wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard**-Option aus dem oberen Menü der Website und wählen Sie dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Klicken Sie auf die **Neu**-Schaltfläche, die verwendet wird, um Dienste zu dem aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener neuer Service-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Popup mit Optionen für einen neuen Dienst wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um mit dem Hinzufügen der Datenbank zu beginnen.

![Railway-Popup mit verschiedenen Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen. Nach Abschluss sehen Sie nun sowohl die Anwendung als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen. Öffnen Sie den _Variablen_-Tab und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen zeigt die URL an, die benötigt wird, um sich mit der Datenbank zu verbinden](railway_mongodb_connect.png)

Um dies der Bibliotheksanwendung zugänglich zu machen, müssen wir sie über eine Umgebungsvariable zum Anwendungsprozess hinzufügen. Öffnen Sie zunächst den Anwendungsdienst. Wählen Sie dann den _Variablen_-Tab und klicken Sie auf die Schaltfläche **Neue Variable**.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL, die Sie für die Datenbank kopiert haben, ein (`MONGODB_URI` ist der Name der Umgebungsvariablen, aus der [wir die Anwendung konfigurierten](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies wird etwa so aussehen wie auf dem unten gezeigten Bildschirm.

![Railway-Website-Variablenseite beim Hinzufügen der MONGODB_URI-Variablen und Adresse](railway_variables_database_url.png)

Klicken Sie auf **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie null Werte für Ihre Objektanzahlen anzeigen, da wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies auf demselben Bildschirm tun, in dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann den _Variablen_-Tab, wo Sie sehen, dass `MONGODB_URI` bereits definiert ist, und klicken Sie auf die Schaltfläche **Neue Variable**.

![Railway Variablen-Tab mit hervorgehobener neuer Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Namen der Umgebung ein. Dann drücken Sie die **Hinzufügen**-Schaltfläche.

![Railway Variablen-Tab mit neuer NODE_ENV-Variablen, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist nun eingerichtet und für die Produktion konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen, und es sollte auf dieselbe Weise wie während der Entwicklung funktionieren (jedoch mit weniger offengelegten Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Tests – einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) erörtert.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn gemäß den [Anweisungen hier](https://docs.railway.com/cli).

Sobald der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers auf ein zugeordnetes Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das Folgende in einem Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den logs-Befehl, um das Ende der Logs zu zeigen (ein umfassenderes Log ist für jedes Projekt auf der Site verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Bereitstellung von Express-Apps in der Produktion und auch der Serie von Tutorials über die Arbeit mit Express. Wir hoffen, Sie fanden sie nützlich. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) überprüfen.

## Siehe auch

- [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance/) (Express-Dokumentation)
- [Produktions-Best-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security/) (Express-Dokumentation)
- Railway-Dokumentation
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Getting Started auf Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
