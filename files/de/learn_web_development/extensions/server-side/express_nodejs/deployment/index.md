---
title: "Express Tutorial Teil 7: Bereitstellung im Produktionsumfeld"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit Bibliotheksmitarbeiter und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zur Bereitstellung Ihrer Website finden können und was Sie tun müssen, um Ihre Website für den Produktionseinsatz bereit zu machen.

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
        Lernen, wo und wie Sie eine Express-App für die Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Website fertig ist (oder fertig genug für öffentliche Tests), müssen Sie sie auf einem öffentlich zugänglichen und zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Website mit dem lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklereinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Produktionsinfrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen für die Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel, wie die LocalLibrary-Website auf dem [Railway](https://railway.app/)-Cloud-Hosting-Dienst installiert wird.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Server-Computer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch betreiben. Die Umgebung umfasst:

- Computer-Hardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxys, Load Balancers usw.
- Datenbanken, von denen Ihre Website abhängt.

Der Server-Computer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet in der Praxis, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im/den Rechenzentrum(en) Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet in der Regel ein garantiertes Niveau an Rechenressourcen (z.B. CPU, RAM, Speicherkapazität usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von ferngesteuerten Rechen-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, vollständigere Umgebungen auszuwählen, die möglicherweise eine komplette Node-Einrichtung enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren. Allerdings können die verfügbaren Optionen Sie möglicherweise auf einen unbekannten Server (oder andere Komponenten) beschränken und auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie, wo Sie anfangen müssen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei Verwendung dieser Art von Hosting müssen Sie sich um den größten Teil Ihres Produktionsumfeldes (Server, Load Balancer usw.) nicht kümmern, da die Hostplattform diese für Sie übernimmt. Dadurch wird die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Serverinfrastruktur.

Einige Entwickler wählen die erhöhte Flexibilität, die IaaS gegenüber PaaS bietet, während andere die reduzierte Wartungsbelastung und das einfachere Skalieren von PaaS schätzen. Wenn Sie gerade erst anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Node/Express-freundlichen Hosting-Anbieter entscheiden, sollte er Anleitungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv Unterstützung bieten oder gut mit _Node_ (und _Express_) funktionieren. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und verschiedene Ebenen von Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie ausgelastet Ihre Website voraussichtlich sein wird und die Kosten für die benötigten Daten- und Rechenressourcen, um diese Nachfrage zu decken.
- Grad der Unterstützung für horizontales (Hinzufügen weiterer Maschinen) und vertikales (Upgrade auf leistungsstärkere Maschinen) Skalieren und die Kosten dafür.
- Die Standorte, an denen der Anbieter Rechenzentren hat, und wo der Zugriff daher am schnellsten sein dürfte.
- Historische Leistungswerte des Hosts in Bezug auf Betriebszeit und Ausfallzeiten.
- Tools zur Verwaltung der Website - sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP)?
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen oder nur eine geringe Speichermenge an.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, die Sie sonst bezahlen müssten.
- Ob der "kostenlose" Tarif, auf den Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Umstieg auf einen teureren Tarif bedeuten, dass Sie von Anfang an besser einen anderen Dienst hätten nutzen sollen!

Die gute Nachricht ist, dass es zu Beginn ziemlich viele Sites gibt, die "kostenlose" Rechenumgebungen bieten, die für Evaluierung und Testen vorgesehen sind. Diese sind in der Regel ressourcenbeschränkte bzw. -begrenzte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können. Sie sind jedoch hervorragend zum Testen von Low-Traffic-Sites in einer gehosteten Umgebung geeignet und bieten eine einfache Migration zu mehr Ressourcen, wenn Ihre Site häufiger besucht wird. Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch einen "Basic" oder "Hobby"-Tarif an, der für kleinere Produktionsstätten gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.app/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die einen relativ günstigen Basistarif für Computing bieten (im Bereich von 5 bis 10 US-Dollar pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit der wichtigste Faktor ist.

## Ihre Website bereit zur Veröffentlichung machen

Die Hauptaspekte, die Sie bei der Veröffentlichung Ihrer Website berücksichtigen sollten, sind Websicherheit und Leistung. Mindestens möchten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden können und deren Zugangsdaten sichern, die Stack-Traces, die während der Entwicklung auf Fehlerseiten enthalten sind, entfernen, Ihr Logging aufräumen und die entsprechenden Headers setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Weitere nützliche Tipps finden Sie in den Express-Dokumentationen – siehe [Produktionsbeste Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktionsbeste Praktiken: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Konfiguration der Datenbank

Im bisherigen Verlauf dieses Tutorials haben wir eine einzige Entwicklungsdatenbank verwendet, für die die Adresse und Zugangsdaten fest im **app.js** kodiert sind. Da die Entwicklungsdatenbank keine Informationen enthält, deren Offenlegung oder Beschädigung uns Sorgen macht, besteht kein besonderes Risiko, diese Details zu leaken. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist es sehr wichtig, Ihre Datenbank-Zugangsdaten zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion nutzen als die, die wir für die Entwicklung verwendet haben, und auch die Zugangsdaten der Produktionsdatenbank vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele dies tun), ist ein Weg, dies zu tun, den Server veranlassen, die Datenbank-URL aus einer Umgebungsvariablen zu beziehen. Unten ändern wir die LocalLibrary-Website, um die URI der Datenbank aus einer OS-Umgebungsvariablen zu beziehen, wenn sie definiert wurde, und ansonsten die URL der Entwicklungsdatenbank zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongDB-Verbindungseinstellung setzt. Sie wird in etwa so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenfolge aus einer Umgebungsvariablen namens `MONGODB_URI` zu beziehen, falls diese gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine weitere übliche Methode, um die Zugangsdaten der Produktionsdatenbank vom Quellcode zu trennen, besteht darin, sie aus einer `.env` Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm-Modul [dotenv](https://www.npmjs.com/package/dotenv) gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die `NODE_ENV` Umgebungsvariable auf _production_ setzen (sie ist standardmäßig auf _development_ gesetzt). Zusätzlich zur Erzeugung weniger ausführlicher Fehlermeldungen führt die Einstellung der Variable auf _production_ dazu, dass Ansichts-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, im Cache gespeichert werden. Tests zeigen, dass die Einstellung von `NODE_ENV` auf _production_ die Leistung der App um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch die Verwendung von `export`, einer Umgebungsdatei oder dem OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrer Umgebungs-Einrichtung vornehmen, und nicht in Ihrer App, aber sie ist wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie dies in unserem Hosting-Beispiel unten eingestellt wird.

### Angemessenes Logging

Logging-Aufrufe können sich auf eine stark frequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. den Traffic verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, das für Debugging-Zwecke hinzugefügte Logging auf ein Minimum zu beschränken.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), das es Ihnen ermöglicht zu kontrollieren, welches Logging durch die Einstellung einer Umgebungsvariable durchgeführt wird. Zum Beispiel zeigt der folgende Codeausschnitt, wie Sie das "author"-Logging einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Menge von Logs aktivieren, indem Sie sie als durch Kommas getrennte Liste in der `DEBUG` Umgebungsvariable angeben. Sie können die Variablen für die Anzeige von "author" und "book" Logs wie gezeigt einstellen (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können das Logging ersetzen, das Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()` Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, welchen Einfluss dies auf das Logging hat.

Wenn Sie die Aktivität der Website protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktionsbeste-Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate Komprimierung für Antworten

Webserver können oft die HTTP-Antworten, die an einen Client zurückgeschickt werden, komprimieren, was die Ladezeit der Seite für den Client erheblich reduziert. Die verwendete Kompressionsmethode hängt von den Dekompressionsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Kompressionsmethoden unterstützt werden).

Fügen Sie dies Ihrer Website mittels [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Wurzelverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und fordern Sie die Komprimierungsbibliothek wie gezeigt an. Fügen Sie die Komprimierungsbibliothek mit der `use()` Methode der Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten - in diesem Fall alle!).

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
> Für eine stark frequentierte Website in Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um gegen bekannte Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann die richtigen HTTP-Header setzen, die Ihre App gegen bekannte Web-Schwachstellen schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header gesetzt werden und vor welchen Schwachstellen es schützt).

Installieren Sie dies im Wurzelverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und fordern Sie die _helmet_ Bibliothek wie angegeben an. Fügen Sie dann das Modul mit der `use()` Methode der Middleware-Kette hinzu.

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

Üblicherweise hätten wir einfach `app.use(helmet());` eingefügt, um die _Teilmenge_ der sicherheitsrelevanten Header hinzuzufügen, die für die meisten Sites sinnvoll sind. Im [LocalLibrary Basis-Template](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) fügen wir jedoch einige Bootstrap- und jQuery-Skripte ein. Diese verstoßen gegen die Standard-[Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) von Helmet, die das Laden von Cross-Site-Skripts nicht erlaubt. Um das Laden dieser Skripte zu erlauben, modifizieren wir die Helmet-Konfiguration, so dass sie CSP-Direktiven festlegt, um das Laden von Skripten von den angegebenen Domains zu erlauben. Für Ihren eigenen Server können Sie spezifische Header hinzufügen/deaktivieren, wie in den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) beschrieben.

### Fügen Sie Ratelimiting zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum zu viele Anfragen an Ihre Site gestellt werden könnten, wie z.B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar einfach ein Client oder Skript, das sich nicht wie erwartet verhält. Abgesehen von den Leistungsproblemen, die durch zu viele Anfragen auftreten und Ihren Server verlangsamen können, könnten Ihnen auch zusätzliche Kosten für den zusätzlichen Traffic entstehen. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die zu einer bestimmten Route oder einer Reihe von Routen gemacht werden können.

Installieren Sie dies im Wurzelverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und fordern Sie die _express-rate-limit_ Bibliothek wie gezeigt an. Fügen Sie dann das Modul mit der `use()` Methode der Middleware-Kette hinzu.

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
> Drittdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie fortschrittlichere Schutzmaßnahmen gegen Denial-of-Service oder andere Arten von Angriffen benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Einstiegsdatei zu bestimmen.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version. Sie können die für die Entwicklung verwendete Node-Version herausfinden, indem Sie den folgenden Befehl eingeben:

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

Der Hosting-Service unterstützt möglicherweise nicht die angegebene spezifische Version von Node, aber diese Änderung sollte sicherstellen, dass zumindest eine Version mit derselben Hauptversionsnummer oder eine neuere Version verwendet wird.

Beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version bei verschiedenen Hosting-Services anzugeben, aber der Ansatz mit **package.json** ist weit verbreitet.

#### Abhängigkeiten holen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Site erneut testen und sicherstellen, dass keine unserer Änderungen Auswirkungen hatte.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Wurzelverzeichnis des Projekts ausführen:

```bash
npm install
```

Starten Sie nun die Site (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob die Site weiterhin wie erwartet funktioniert.

### Ein Anwendungsrepository in GitHub erstellen

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Versionskontrollplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial werden wir ein [GitHub](https://github.com/)-Konto und Repository für die Bibliothek einrichten und das Tool **git** verwenden, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools eine gute Softwareentwicklungs-Praxis ist, da sie es Ihnen erlaubt, Änderungen auszuprobieren und zwischen Ihren Experimenten und dem "bekannten guten Code" zu wechseln, wenn Sie dies benötigen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl sie nicht zwingend erforderlich sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repositoriesnamen (z.B. _express-locallibrary-tutorial_) und eine Beschreibung ein (z.B. "Local Library Website geschrieben in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahl aus.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahl aus.
   - Aktivieren Sie **Repository mit README initialisieren**.

   > [!WARNING]
   > Der standardmäßige "Öffentlich"-Zugang macht _alle_ Quellcodes — einschließlich Ihres Datenbank-Benutzernamens und Passworts — für jeden auf dem Internet sichtbar! Stellen Sie sicher, dass der Quellcode Zugangsdaten _nur_ aus Umgebungsvariablen liest und keine Zugangsdaten fest kodiert hat.
   >
   > Alternativ wählen Sie die "Privat"-Option, um nur ausgewählten Personen den Zugriff auf den Quellcode zu ermöglichen.

4. Klicken Sie auf **Repository erstellen**.
5. Klicken Sie auf die grüne **Clone or download** Taste auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im erscheinenden Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Da das Repository ("Repo") nun auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
2. Öffnen Sie ein Befehls-/Terminalfenster und klonen Sie Ihr Repository mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repo-Ordner, machen Sie sie mit _git_ Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Befehls-/Terminalfenster und verwenden Sie den `add` Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status` Befehl, um zu überprüfen, dass alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten Quellcodedateien einbeziehen, keine Binärdateien, temporären Dateien usw.). Es sollte so ähnlich aussehen wie die untenstehende Auflistung.

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

4. Wenn Sie zufrieden sind, `committen` Sie die Dateien zu Ihrem lokalen Repo. Dies entspricht einem Unterschreiben der Änderungen und macht sie zum offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert. Der letzte Schritt besteht darin, Ihr lokales Repo bis zum entfernten GitHub-Repo zu synchronisieren (`push`) unter Verwendung des folgenden Befehls:

   ```bash
   git push origin main
   ```

Sobald dieser Vorgang abgeschlossen ist, sollten Sie in der Lage sein, zur Seite auf GitHub zu gehen, auf der Sie Ihr Repo erstellt haben, die Seite zu aktualisieren und zu sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanille"-Projekts zu machen – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf einem beliebigen Hosting-Dienst (oder für die Entwicklung) sein könnten, sind andere möglicherweise nicht. Sie können dies mit `git` auf der Befehlszeile tun:

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
> Git ist unglaublich leistungsfähig! Um mehr zu lernen, siehe [Git lernen](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Glitch](https://glitch.com/) gehostet wird.

### Warum Glitch?

Wir entscheiden uns für die Nutzung von Glitch aus mehreren Gründen:

- Glitch hat einen [kostenlosen Starter-Plan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, allerdings mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie es nicht müssen. Nicht um Server, Load Balancer, Reverse-Proxies usw. kümmern zu müssen, erleichtert den Einstieg erheblich.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Glitch lernen, sind übertragbar.
- Die Service- und Planbeschränkungen beeinträchtigen uns nicht wirklich bei der Nutzung von Glitch für das Tutorial. Zum Beispiel:

  - Der Starter-Plan bietet monatlich nur 1000 Stunden für "Projekte", was monatlich zurückgesetzt wird. Dies wird verwendet, wenn die Site aktiv bearbeitet wird oder wenn jemand darauf zugreift. Wenn niemand auf die Site zugreift oder sie bearbeitet, wird sie schlafen gelegt.
  - Die Umgebung des Starter-Plans hat eine begrenzte Menge an RAM und Speicherplatz für Container. Es gibt mehr als genug für das Tutorial, insbesondere da unsere Datenbank anderswo gehostet wird.
  - Benutzerdefinierte Domains werden zum Zeitpunkt des Schreibens dieses Textes nicht gut unterstützt.
  - Weitere Einschränkungen finden Sie auf der [Glitch-Technische Beschränkungen-Seite](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions).

Während Glitch für die Hosting dieses Demonstrationszwecks geeignet ist, sollten Sie sich die Zeit nehmen, um zu bestimmen, ob es für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Oberfläche, in der Sie Projekte aus Starter-Templates erstellen oder von GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können. Wenn Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container erstellt und ausgeführt.

Wie das alles "unter der Haube" funktioniert, ist ein Mysterium – Glitch sagt es nicht. Was klar ist, ist, dass Ihre Anwendung "einfach funktionieren" sollte, sofern Sie eine ziemlich Standard-Node.js-Webanwendung erstellen (zum Beispiel unter Verwendung von `package.json` für Ihre Abhängigkeiten) und nicht mehr Ressourcen verbrauchen, als in den [technischen Einschränkungen](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) aufgeführt sind.

Sobald die Anwendung läuft, kann sie unter Verwendung von [privaten Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data), die in einer `.env`-Datei bereitgestellt werden, für die Produktion konfiguriert werden. Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem vorherigen Abschnitt erinnern, die Art und Weise ist, wie wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL zu erhalten. Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihrem GitHub-Repository enthalten sein.

Die Glitch-Bearbeitungsansicht bietet auch _Terminal_-Zugriff auf die Web-App-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als ob sie auf Ihrem lokalen Rechner ausgeführt würde.

Das ist die gesamte Übersicht, die Sie benötigen, um loszulegen. Als nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Ein Glitch-Konto erhalten

Um Glitch zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Anmelden**-Schaltfläche in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie werden dann im Glitch-Dashboard angemeldet: <https://glitch.com/dashboard>.

### Fehlerbehebung bei der Node.js-Version

Hosting-Anbieter unterstützen normalerweise einige Hauptversionen der neuesten Node.js-Releases. Wenn die von Ihnen in Ihrer `package.json`-Datei angegebene exakte "minor" Version nicht unterstützt wird, fallen sie in der Regel auf die nächstgelegene Version zurück, die sie unterstützen (und oft wird dies einfach funktionieren).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16. Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die in Ihrer `package.json` angegebenen Version wie gezeigt verringern. Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node besser zu aktualisieren und in Zukunft besser auf dem neuesten Stand zu halten](https://blog.glitch.com/post/rebuilding-glitch/) – und es kann sein, dass diese Einschränkung nicht mehr existiert, wenn Sie dies lesen. Anstatt die `node`-Version zu verringern, könnten Sie versuchen, Ihr Projekt hochzuladen, um zu sehen, ob es erstellt wird. Wenn es Fehler gibt und Ihre Anwendung nicht lädt, sollten Sie versuchen, die `node`-Version auf `>=v16` in Ihrer `package.json` in der Glitch-Editorumgebung zu setzen.

> [!NOTE]
> Sie können auch die unterstützten Versionen prüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Auf Glitch von GitHub bereitstellen

Als Nächstes importieren wir das Bibliotheksprojekt von GitHub. Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Site und wählen Sie dann die **Neues Projekt**-Schaltfläche. Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Importieren von GitHub**.

![Glitch-Website-Dashboard zeigt eine neue Projekt-Schaltfläche und ein Popup-Menü mit "Importieren von GitHub"-Option](glitch_new_project_import_github.png)

Ein Popup wird angezeigt. Geben Sie die URL Ihres GitHub-Bibliotheksrepositorys in das Popup ein und drücken Sie **OK**. Unten haben wir das Repo für das bearbeitete Projekt eingegeben.

![Glitch-Popup zur Eingabe der URL des GitHub-Repos zum Importieren](glitch_new_project_github_repo_url.png)

Glitch importiert dann das Projekt und zeigt den Fortschritt an. Wenn der Import abgeschlossen ist, wird die Bearbeitungsansicht für das neue Projekt angezeigt, wie unten gezeigt.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die URL der Live-Site abrufen, indem Sie die **Teilen**-Schaltfläche auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie eine neue Browsertab und kopieren Sie den Link zur Live-Site in die Adressleiste. Die Website der Local Library sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Vorgang war ein einmaliger Import von GitHub. Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und > Ihr Projekt zu synchronisieren.

### Verwendung einer Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten. Während Glitch nur SQLite-Datenbanken hostet (und wir für die Verwendung von MongoDB eingerichtet sind), bieten viele andere Sites MongoDB-Datenbanken als Dienst an.

Eine Option besteht darin, den [Anweisungen zum Einrichten der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) aus einem früheren Tutorial zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die Datei `.env` in der Bearbeitungsansicht des Projekts. Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein. Die Site wird aktualisiert, während Sie Werte in den Editor eingeben.

![Glitch-Editor für .env-Dateien für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt. Sie ist für [private Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) vorgesehen und wurde beim Import nach Glitch automatisch erstellt. Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorausgegangenen Abschnitt, dass wir `NODE_ENV` auf 'production' setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir tun dies in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie die `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die Bibliotheksanwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert. Sie können Daten über die Website-Schnittstelle hinzufügen, und sie sollte wie während der Entwicklung funktionieren (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie lediglich einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testing — einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Express-Apps auf Glitch debuggen

Glitch erlaubt effektives Debugging. Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Schaltfläche 'Logs' unten in der Bearbeitungsansicht, um Protokollinformationen von Ihrem Server zu sehen, z.B. Konsolen-Logausgaben.
- Wählen Sie die Schaltfläche 'Terminal' unten in der Bearbeitungsansicht, um ein Terminal in der Hosting-Umgebung zu öffnen. Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen. Zum Beispiel könnten Sie `node -v` verwenden, um die Version von Node zu überprüfen.
- Interaktives Debugging in VS Code unter Verwendung der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.app/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keinen völlig kostenlosen Starter-Tarif mehr. Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer die bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie es nicht müssen. Nicht um Server, Load Balancer, Reverse-Proxies usw. kümmern zu müssen, erleichtert den Einstieg erheblich.
- Railway hat einen [Fokus auf Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), der zu einer schnelleren und "weicheren" Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen hat, verwenden viele andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen anhand ihrer Verwendung von "gängigen Konventionen" automatisch erkennen und installieren kann. Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json** Datei haben und kann den verwendeten Package-Manager anhand der "Lock"-Datei, die beim Bauen verwendet wird, bestimmen. Wenn beispielsweise das `package-lock.json`-Datei in der Anwendung enthalten ist, weiß Railway, dass _npm_ zum Installieren der Pakete verwendet werden soll, während es bei Funden von **yarn.lock** weiß, dass _yarn_ verwendet werden soll. Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten, die in der Paketdatei mit "build" und "start" bezeichnet sind, und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind. Sie müssen nichts weiter für dieses Tutorial wissen, aber Sie können mehr über Optionen zur Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Nachdem die Anwendung läuft, kann sie sich mit den durch [Umgebungsvariablen](https://docs.railway.app/guides/variables) bereitgestellten Informationen konfigurieren. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable abrufen. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und verwenden ein spezielles [Command Line Interface (CLI)](https://docs.railway.app/guides/cli)-Tool. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu assoziieren, das Repository von der lokalen Branche auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und zu erhalten und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist die gesamte Übersicht, die Sie benötigen, um die App auf Railway bereitzustellen. Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Ein Railway-Konto erhalten

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Anmelden**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden
- Möglicherweise müssen Sie dann in Ihre E-Mails gehen und Ihr Konto verifizieren.
- Sie werden dann im Railway.app-Dashboard angemeldet: <https://railway.app/dashboard>.

### Auf Railway von GitHub bereitstellen

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Site und wählen Sie dann die **Neues Projekt**-Schaltfläche:

![Railway-Website-Dashboard zeigt die Schaltfläche Neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage, die zuerst in Ihrem GitHub-Konto erstellt wurde, und einer Anzahl von Datenbanken bereitzustellen. Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Popup zeigt Bereitstellungsoptionen mit der Option Bereitstellen von GitHub-Repo hervorgehoben](railway_new_project_button_deploy_github_repo.png)

Alle Projekte im GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos an, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** wählen.

![Bestätigungsbildschirm, wenn Sie die Bereitstellung des Projekts wählen können](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit und zeigt den Fortschritt auf der Registerkarte "Bereitstellungen" an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Dashboard zeigt die Registerkarte Bereitstellungen für das bereitgestellte Projekt an](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Einstellungen_, scrollen Sie dann zum Abschnitt Domains und drücken Sie die **Domain generieren**-Schaltfläche.

![Railway-Projekteinstellungsregisterkarte zeigt die Schaltfläche zum Erstellen einer Domain](railway_project_generate_domain.png)

Dies wird die Site veröffentlichen und die Domain anstelle des Buttons anzeigen, wie unten gezeigt.

![Railway-Projekteinstellungsregisterkarte zeigt einen Link zur lokalen Bibliotheksite an](railway_project_domain.png)

Wählen Sie die Domain-URL, um auf Ihre Bibliotheksanwendung zuzugreifen. Beachten Sie, dass wir bei Ihnen noch keine Produktionsdatenbank angegeben haben, sodass die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet wird.

### Eine MongoDB-Datenbank einrichten und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, lassen Sie uns als Nächstes eine Produktions-MongoDB-Datenbank erstellen, die wir stattdessen verwenden können. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl es nichts gibt, was Sie daran hindert, dies in einem separaten Projekt zu erstellen, oder tatsächlich eine _MongoDB Atlas_ Datenbank für Produktionsdaten wie für die Entwicklungsdatenbank zu verwenden.

Auf Railway wählen Sie die **Dashboard**-Option aus dem oberen Menü der Site und wählen dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes zu setzen). Wählen Sie die **Neue**-Schaltfläche, die zum Hinzufügen von Diensten zum aktuellen Projekt verwendet wird.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie Datenbank, wenn Sie nach der Art von Dienst gefragt werden, der hinzugefügt werden soll:

![Railway-Popup zeigt Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leeren Dienst usw.](railway_database_add.png)

Dann wählen Sie **MongoDB hinzufügen** aus, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Popup zeigt verschiedene Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im selben Projekt bereit. Nach Abschluss sehen Sie jetzt sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst, um Informationen über die Datenbank anzuzeigen. Öffnen Sie die Registerkarte _Variablen_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen zeigt die URL an, die benötigt wird, um sich mit der Datenbank zu verbinden](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es der Anwendungsprozess durch eine Umgebungsvariable hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variablen_ und drücken Sie die **Neue Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#konfiguration_der_datenbank), um die Datenbankadresse zu lesen). Dies wird wie der unten gezeigte Bildschirm aussehen.

![Railway-Website-Variablenbildschirm während der Hinzufügung der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen** zur Hinzufügung der Variable.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie null Werte für Ihre Objektzahlen anzeigen, da die obigen Änderungen bedeuten, dass wir nun eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorausgegangenen Abschnitt, dass wir `NODE_ENV` auf 'production' setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies im selben Bildschirm tun, in dem wir die Variable `MONGODB_URI` gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variablen_, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **Neue Variable**-Schaltfläche.

![Registerkarte Variablen in Railway mit hervorgehobener neuer Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable und `production` als Namen der Umgebung ein. Drücken Sie dann die **Hinzufügen**-Schaltfläche.

![Registerkarte Variablen in Railway mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Bibliotheksanwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert. Sie können durch die Website-Schnittstelle Daten hinzufügen und es sollte genauso arbeiten wie während der Entwicklung (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie lediglich einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testing — einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.app/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers zu einem verbundenen Railway-Projekt (ohne auf GitHub hochladen zu müssen) und Ihr Projekt lokal mit denselben Einstellungen wie auf dem Produktionsserver auszuführen.

Eine Liste aller möglichen Befehle erhalten Sie, indem Sie den folgenden Befehl in ein Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den Befehl logs an, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist für jedes Projekt auf der Site verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zum Einrichten von Express-Apps in der Produktion und auch der Reihe von Tutorials zur Arbeit mit Express. Wir hoffen, Sie fanden sie nützlich. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) ansehen.

## Siehe auch

- [Produktionsbeste-Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktionsbeste Praktiken: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

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
