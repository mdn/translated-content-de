---
title: "Express Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie eine beeindruckende [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit Bibliotheksmitarbeiter und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick, wie Sie einen Host finden können, um Ihre Website bereitzustellen, und welche Schritte Sie unternehmen müssen, um Ihre Seite für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorialthemen abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
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

Sobald Ihre Seite fertig ist (oder bereit genug für die öffentliche Testphase), müssen Sie sie an einem öffentlich zugänglichen Ort hosten, der besser zugänglich ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Seite im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen exponieren. Bevor Sie eine Website extern hosten können, müssen Sie:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsgerechte Infrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl eines Hosting-Anbieters, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App bereit für die Produktion zu machen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für die externe Nutzung betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Laufzeit für Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxy, Lastausgleich, usw.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte bei Ihnen vor Ort sein und über eine schnelle Verbindung mit dem Internet verbunden sein, es ist jedoch weitaus häufiger, einen im "Cloud" gehosteten Computer zu verwenden. Das bedeutet in Wirklichkeit, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Datenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Niveau an Computerressourcen (z. B. CPU, RAM, Speicherplatz usw.) und Internetverbindung für einen bestimmten Preis.

Diese Art von fernzugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zum Vorinstallieren eines bestimmten Betriebssystems, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständigere Umgebungen zu wählen, die möglicherweise ein vollständiges Node-Setup enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren. Die verfügbaren Optionen können Sie jedoch auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, eine Idee haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_) Angebots. Bei Nutzung dieser Art des Hostings müssen Sie sich um den Großteil Ihrer Produktionsumgebung (Server, Lastausgleicher usw.) nicht kümmern, da die Host-Plattform diese für Sie übernimmt. Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Serverinfrastruktur.

Einige Entwickler bevorzugen die erhöhte Flexibilität, die IaaS bietet, gegenüber PaaS, während andere den reduzierten Wartungsaufwand und die einfachere Skalierung von PaaS schätzen. Wenn Sie anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, daher werden wir dies in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie sich für einen Node/Express-freundlichen Hosting-Anbieter entscheiden, sollten diese Anweisungen bereitstellen, wie man eine Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. einrichtet. Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekannt dafür sind, entweder aktiv zu unterstützen oder gut mit _Node_ (und _Express_) zusammenzuarbeiten. Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) sowie unterschiedliche Stufen an Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen einführen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie sich für einen Hosting-Anbieter entscheiden.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Website wahrscheinlich genutzt wird und die Kosten für die benötigten Daten- und Rechenressourcen, um diese Nachfrage zu erfüllen.
- Unterstützungsebene für horizontale (Hinzufügen weiterer Maschinen) und vertikale (Upgrade zu leistungsfähigeren Maschinen) Skalierung und die Kosten hierfür.
- Die Orte, an denen der Anbieter Datenzentren hat, und daher, wo der Zugriff wahrscheinlich am schnellsten ist.
- Historische Verfügbarkeit und Ausfallsicherheit des Hosts.
- Bereitgestellte Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, für die Sie sonst zahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit ausläuft und ob die Kosten für den Umstieg auf eine teurere Stufe bedeuten, dass Sie von Anfang an besser einen anderen Dienst genutzt hätten!

Die gute Nachricht beim Start ist, dass es zahlreiche Sites gibt, die "kostenlose" Rechenumgebungen bieten, die für die Bewertung und das Testen gedacht sind.
Dabei handelt es sich in der Regel um recht ressourcenbeschränkte / begrenzte Umgebungen, und Sie sollten sich dessen bewusst sein, dass diese nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können.
Sie sind jedoch großartig zum Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und können eine einfache Migration zu mehr Ressourcenzahlung ermöglichen, wenn Ihre Site stärker frequentiert wird.
Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), usw.

Die meisten Anbieter bieten auch eine "Basis-" oder "Hobby"-Stufe an, die für kleine Produktionswebsites gedacht ist und die nützlichere Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basiskomputing-Stufe im Bereich von 5 bis 10 USD pro Monat anbieten.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, kann es sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website bereit zum Veröffentlichen machen

Die Hauptpunkte, die bei der Veröffentlichung Ihrer Website zu beachten sind, sind Websicherheit und Leistung.
Mindestens möchten Sie die Datenbankkonfiguration ändern, damit Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stack Traces, die während der Entwicklung auf Fehlerseiten enthalten sind, entfernen, Ihr Logging aufräumen und die geeigneten Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Weitere nützliche Tipps finden Sie in den Express-Dokumentationen – siehe [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Best Practices für die Produktion: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldedaten in **app.js** fest codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, die uns wichtig sind, bei einer Offenlegung oder Beschädigung, besteht kein besonderes Risiko, diese Details zu leaken.
Wenn Sie jedoch mit realen Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, dann ist der Schutz Ihrer Datenbankanmeldedaten sehr wichtig.

Aus diesem Grund möchten wir in der Produktion eine andere Datenbank als in der Entwicklung verwenden und auch die Anmeldedaten der Produktionsdatenbank vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele es tun), ist eine Möglichkeit, dies zu tun, den Datenbank-URL vom Server aus einer Umgebungsvariablen abzurufen.
Im Folgenden modifizieren wir die LocalLibrary-Website, um die Datenbank-URI aus einer OS-Umgebungsvariablen zu beziehen, falls diese definiert wurde, und ansonsten die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariable namens `MONGODB_URI` abzurufen, falls eingerichtet (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere gängige Methode, um Produktionsdatenbank-Anmeldedaten vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm-Modul [dotenv](https://www.npmjs.com/package/dotenv) ausgelesen werden).

### Setzen von NODE_ENV auf 'production'

Wir können Stack Traces auf Fehlerseiten entfernen, indem wir die `NODE_ENV` Umgebungsvariable auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Zusätzlich zur Generierung weniger ausführlicher Fehlermeldungen, cached die Einstellung der Variable auf _production_ die Ansichtsvorlagen und CSS-Dateien, die aus CSS-Erweiterungen generiert werden. Tests zeigen, dass die Einstellung von `NODE_ENV` auf _production_ die App-Leistung um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch die Verwendung von `export`, eine Umgebungsdatei oder das OS-Initialisierungssystem erfolgen.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrer Umgebungseinrichtung vornehmen, anstatt in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Weiter unten zeigen wir, wie dies für unser Hosting-Beispiel gesetzt wird.

### Angemessenes Logging

Log-Aufrufe können sich auf eine stark frequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z. B. das Tracking von Verkehr oder Loggen von API-Aufrufen), sollten jedoch versuchen, das für Debugging-Zwecke hinzugefügte Logging auf ein Minimum zu reduzieren.

Eine Möglichkeit, "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das Ihnen erlaubt, durch Setzen einer Umgebungsvariable zu steuern, welches Logging durchgeführt wird.
Zum Beispiel zeigt das folgende Code-Fragment, wie Sie "author"-Logging einrichten könnten.
Die debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Menge an Logs aktivieren, indem Sie sie als kommaseparierte Liste in der `DEBUG` Umgebungsvariable angeben.
Sie können die Variablen für die Anzeige von Autoren- und Buchlogs wie gezeigt setzen (Wildcards werden auch unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe an `debug` können Logging ersetzen, das Sie möglicherweise zuvor mit `console.log()` oder `console.error()` gemacht haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging ein und aus in Ihrer Entwicklungsumgebung, indem Sie die DEBUG-Variable setzen und beobachten Sie, welche Auswirkungen dies auf das Logging hat.

Wenn Sie Website-Aktivität protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwendung von gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort an einen Client komprimieren, was die Zeit erheblich reduziert, die der Client benötigt, um die Seite abzurufen und zu laden. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angegeben hat (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Website mit [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die compression-Bibliothek wie gezeigt ein. Fügen Sie die compression-Bibliothek zur Middleware-Kette mit der `use()`-Methode hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimiert haben möchten – in diesem Fall alle!)

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
> Für eine stark frequentierte Website in Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwendung von Helmet zum Schutz vor bekannten Sicherheitslücken

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihrer App helfen, sich vor bekannten Web-Sicherheitslücken zu schützen (siehe die [Dokumentation](https://helmetjs.github.io/), welche Header es setzt und welche Schwachstellen es schützt).

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
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

// …
```

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um den _Teilmenge_ der sicherheitsrelevanten Header hinzuzufügen, die für die meisten Sites sinnvoll sind.
Jedoch enthalten wir im [LocalLibrary-Basis-Template](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) einige Bootstrap- und jQuery-Skripte.
Diese verstoßen gegen Helmets _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die das Laden von Cross-Site-Skripten nicht erlaubt.
Um das Laden dieser Skripte zu ermöglichen, passen wir die Helmet-Konfiguration an, sodass sie CSP-Direktiven setzt, die das Laden von Skripten von den angegebenen Domains erlauben.
Für Ihren eigenen Server können Sie bestimmte Header nach Bedarf hinzufügen/entfernen, indem Sie den [Anleitungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Hinzufügen von Ratenbegrenzung zu den API-Routen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden könnten, wie z. B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das sich nicht wie erwartet verhält.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können und Ihren Server verlangsamen, können Ihnen auch die zusätzlichen Datenverkehrskosten in Rechnung gestellt werden.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder einen Satz von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek wie gezeigt ein.
Fügen Sie dann das Modul zur Middleware-Kette mit der `use()`-Methode hinzu.

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
> Drittanbier wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie erweiterteren Schutz gegen Denial-of-Service oder andere Angriffsarten benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendung zu ermitteln Dependencies und die Einstiegspunktdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version.
Sie können die Node-Version herausfinden, die für die Entwicklung verwendet wurde, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json**, und fügen Sie diese Information wie gezeigt als **engines > node** hinzu (Verwenden Sie die Versionsnummer für Ihr System).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit der gleichen Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version auf verschiedenen Hosting-Services anzugeben, die **package.json**-Methode jedoch weit verbreitet unterstützt wird.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, testen wir die Seite erneut, um sicherzustellen, dass sie durch keine unserer Änderungen beeinflusst wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Jetzt starten Sie die Website (sehen Sie sich [das Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle an) und prüfen Sie, ob sich die Seite weiterhin wie erwartet verhält.

### Erstellen eines Anwendungs-Repositorys auf GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Versionskontroll-Plattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und ein Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Versionskontrolltools eine gute Softwareentwicklungspraxis darstellt, da diese es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekannt gutem Code" zu wechseln, wenn Sie dies benötigen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Werkzeugleiste und wählen Sie **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Auch wenn diese nicht verpflichtend sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z. B. _express-locallibrary-tutorial_), und Beschreibung (z. B. "Local Library-Website geschrieben in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_-Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_-Auswahlliste.
   - Markieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugriff "Public" macht _alle_ Quellcodes - einschließlich Ihres Datenbank-Benutzernamens und Passworts - für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ über Umgebungsvariablen liest und keine Anmeldeinformationen fest eingebaut sind.
   >
   > Wählen Sie andernfalls die Option "Private", um nur ausgewählten Personen Zugriff auf den Quellcode zu gewähren.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf den grünen **Clone or download**-Button auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im eingebetteten Dialogfeld, das erscheint.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa folgendermaßen aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, da das Repository ("Repo") auf GitHub erstellt ist, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizielle Git-Downloadanleitung](https://git-scm.com/downloads)).
2. Öffnen Sie eine Eingabeaufforderung / ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquellcodes in den Repo-Ordner, fügen Sie sie dem Repo mit _git_ hinzu und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ausschließlich **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung / ein Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, dass alle Dateien, die Sie `commit`-ten möchten, korrekt sind (Sie möchten Quellcodes einbeziehen, keine Binärdateien, temporäre Dateien usw.).
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

4. Wenn Sie zufrieden sind, `commit`-ten Sie die Dateien zu Ihrem lokalen Repo.
   Dies entspricht einem Übereinstimmungs-Signieren der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. An diesem Punkt wurde das Remote-Repo nicht verändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem folgenden Befehl mit dem Remote-GitHub-Repo zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zu der Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und feststellen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt für eine Sicherung Ihres "vanilla" Projekts – während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, möglicherweise für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sind, könnten andere es nicht sein.
Sie können dies mithilfe von `git` in der Befehlszeile tun:

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

Dieser Abschnitt zeigt eine praktische Demonstration, wie _LocalLibrary_ auf [Glitch](https://glitch.com/) gehostet wird.

### Warum Glitch?

Wir haben uns aus mehreren Gründen für Glitch entschieden:

- Glitch bietet einen [kostenlosen Starterplan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist MDN sehr wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie dies nicht müssen.
  Sich nicht um Server, Lastausgleicher, Reverse-Proxys usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Glitch lernen, sind übertragbar.
- Die Einschränkungen des Dienstes und des Plans beeinträchtigen nicht wirklich die Verwendung von Glitch für das Tutorial.
  Zum Beispiel:

  - Der Starterplan bietet nur 1000 "Projektstunden" pro Monat, die monatlich zurückgesetzt werden.
    Dies wird verwendet, wenn Sie die Seite aktiv bearbeiten oder jemand darauf zugreift.
    Wenn niemand auf die Seite zugreift oder sie bearbeitet, schläft sie.
  - Der Starterplan bietet begrenzten Container-RAM und Speicherplatz.
    Es gibt mehr als genug für das Tutorial, insbesondere da unsere Datenbank anderswo gehostet wird.
  - Benutzerdefinierte Domains werden nicht gut unterstützt (zum Zeitpunkt des Schreibens).
  - Weitere Einschränkungen finden Sie auf der [Glitch-Technische Einschränkungen Seite](https://help.glitch.com/s/article/Technical-Restrictions).

Während Glitch für das Hosting dieser Demonstration geeignet ist, sollten Sie die Zeit investieren, festzustellen, ob es [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Benutzeroberfläche, in der Sie Projekte aus Startervorlagen erstellen oder aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können.
Während Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container erstellt und ausgeführt.

Wie dies alles "unter der Haube" funktioniert, ist ein Rätsel — Glitch sagt es nicht.
Was klar ist, ist dass solange Sie eine ziemlich standardisierte Node.js-Webanwendung erstellen (zum Beispiel mit `package.json` für Ihre Abhängigkeiten), und nicht mehr Ressourcen verbrauchen als in den [technischen Einschränkungen](https://help.glitch.com/s/article/Technical-Restrictions) aufgeführt, Ihre Anwendung sollte "einfach funktionieren".

Sobald die Anwendung läuft, kann sie für die Produktion mit [privaten Daten](https://help.glitch.com/s/article/Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden.
Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem vorherigen Abschnitt erinnern werden, die Methode ist, wie wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL zu erhalten.
Beachten Sie, dass die Variablen _geheim_ sind: Die `.env`-Datei sollte nicht in Ihr GitHub-Repository aufgenommen werden.

Die Glitch-Bearbeitungsansicht bietet auch _Terminal_-Zugriff auf die Web-App-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als wäre sie auf Ihrem lokalen Computer ausgeführt.

Das ist alles, was Sie für den Einstieg wissen müssen.
Als nächstes werden wir ein Glitch-Konto einrichten, das Bibliotheksprojekt von GitHub hochladen und mit einer Datenbank verbinden.

### Ein Glitch-Konto erstellen

Um Glitch verwenden zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie im oberen Menü auf den **Sign up**-Button.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie gelangen dann zum Glitch-Dashboard: <https://glitch.com/dashboard>.

### Fehlerbehebung bei Node.js-Version

Hosting-Anbieter unterstützen in der Regel einige Hauptversionen der aktuellen Node.js-Veröffentlichungen.
Wenn die genaue "Minor"-Version, die Sie in der `package.json`-Datei angegeben haben, nicht unterstützt wird, weichen sie in der Regel auf die nächste unterstützte Version aus (und oft funktioniert dies einfach).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16.
Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die in Ihrer `package.json`-Datei verwendete Version wie gezeigt reduzieren.
Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zu aktualisieren und zukünftig besser aktuell zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — und es kann sein, dass bis zu dem Zeitpunkt, an dem Sie dies lesen, die Versionsbeschränkung nicht mehr existiert.
Anstelle einer Herabstufung der `node`-Version könnten Sie Ihr Projekt hochladen, um zu sehen, ob es sich baut.
Wenn es Fehler gibt und Ihre Anwendung nicht lädt, sollten Sie versuchen, die `node`-Version auf `>=v16` in Ihrer `package.json` im Glitch-Editor zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub

Als nächstes importieren wir das Bibliotheksprojekt von GitHub.
Wählen Sie zuerst die **Dashboard**-Option aus dem Menü auf der Website aus, und wählen Sie dann den **New project**-Button.
Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch-Website-Dashboard, das einen neuen Projektbutton und ein Popup-Menü mit der "Import from GitHub"-Option zeigt](glitch_new_project_import_github.png)

Es erscheint ein Popup.
Geben Sie die URL Ihres GitHub-Bibliotheksrepos in das Popup ein und drücken Sie **OK**.
Im Folgenden haben wir das Repo für das durchgeführte Projekt eingegeben.

![Popup von Glitch zur Eingabe einer URL des zu importierenden GitHub-Repos](glitch_new_project_github_repo_url.png)

Glitch wird dann das Projekt importieren und Fortschrittsbenachrichtigungen anzeigen.
Nach Abschluss wird es die Bearbeitungsansicht für das neue Projekt anzeigen, wie unten gezeigt.

![Glitch-Editoransicht für das importierte Projekt](glitch_imported_project_in_editor.png)

Sie können die URL für die Live-Site erhalten, indem Sie den **Share**-Button auswählen.

![Glitch-Editoransicht für das importierte Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link für die Live-Site in die Adressleiste.
Die Local Library-Site sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchron zu halten.

### Verwendung einer Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung verwenden.
Während Glitch nur SQLite-Datenbanken hostet (und wir eingerichtet sind, um MongoDB zu verwenden), bieten viele andere Websites MongoDB-Datenbanken als Dienst an.

Eine Option ist es, den [Anleitungen zum Einrichten der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) aus einem früheren Tutorial-Abschnitt zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Editoransicht für das Projekt.
Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Seite wird aktualisiert, während Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/s/article/Adding-Private-Data) gedacht und wurde bei der Einfuhr nach Glitch automatisch erstellt.
> Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich an einen vorhergehenden Abschnitt, dass wir die [NODE_ENV auf 'production' setzen] (#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir tun dies in derselben Datei, in der wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die Local Library-Anwendung ist nun eingerichtet und für die Produktionsverwendung konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte wie während der Entwicklung funktionieren (allerdings mit weniger Debug-Informationen, die für ungültige Seiten exponiert werden).

> [!NOTE]
> Wenn Sie nur ein paar Daten für Tests hinzufügen möchten, könnten Sie das `populate db`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) wie im Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testen - einige Elemente erstellen] (/de/docs/Learn*web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing*—\_create_some_items) besprochen verwenden.

### Fehlerbehebung von Express-Apps auf Glitch

Glitch ermöglicht effektive Fehlerbehebung.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie den Log-Button unten in der Editoransicht, um Log-Informationen von Ihrem Server zu sehen, z. B. Konsolenprotokollausgaben.
- Wählen Sie den Terminal-Button unten in der Editoransicht, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen.
  Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktive Debugging in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt zeigt eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keine vollständig freie Starterstufe mehr.
> Wir haben diese Anweisungen behalten, da Railway einige großartige Funktionen hat und eine bessere Option für einige Benutzer sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um die meiste Infrastruktur, sodass Sie dies nicht tun müssen.
  Nicht über Server, Lastausgleicher, Reverse-Proxys usw. nachdenken zu müssen, macht den Einstieg viel einfacher.
- Railway hat einen [Fokus auf die Entwicklungserfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar.
  Während Railway einige exzellente neue Funktionen bietet, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten die Zeit investieren, um festzustellen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die geeignete Umgebung und Dependencies einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und Umgebungen automatisch erkennen und installieren kann, basierend auf ihrer Verwendung von "allgemeinen Konventionen".
Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den verwendeten Paketmanager für das Bauen anhand der "lock"-Datei ermitteln.
Wenn die Anwendung etwa die Datei **package-lock.json** enthält, weiß Railway, _npm_ zu verwenden, um die Pakete zu installieren, wohingegen es bei **yarn.lock** weiß, _yarn_ zu verwenden.
Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten mit den Namen "build" und "start" in der Paketdatei und verwendet diese, um den Code zu bauen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind.
> Sie müssen nichts weiter für dieses Tutorial wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich mit Informationen in [Umgebungsvariablen](https://docs.railway.com/guides/variables) selbst konfigurieren.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Tool.
Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu assoziieren, das Repository von dem lokalen Branch zur Live-Site hochzuladen, die Logs des laufenden Prozesses anzuzeigen, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit den gleichen Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist alles, was Sie brauchen, um die App auf Railway bereitzustellen.
Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank, und probieren den Railway-Client aus.

### Ein Railway-Konto erstellen

Um Railway verwenden zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der obersten Werkzeugleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie müssen möglicherweise Ihre E-Mail-Adresse aufrufen und Ihr Konto verifizieren.
- Sie sind dann beim Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard**-Option aus dem Menü auf der Website aus, und wählen Sie dann den **New Project**-Button:

![Railway-Website-Dashboard zeigt neuen Projektbutton](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zu erstellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und einer Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup zeigt Deploy-Optionen mit "Deploy from GitHub repo"-Option hervorgehoben](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während des Setups mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die Local Library: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt und stellt dann Ihr Projekt bereit, wobei der Fortschritt auf der Deployments-Registerkarte angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard zeigt die Deployments-Registerkarte für das bereitgestellte Projekt](railway_project_deploy.png)

Jetzt wählen Sie die _Settings_-Registerkarte, scrollen dann nach unten zum Bereich "Domains" und drücken den **Generate Domain**-Button.

![Railway-Projekteinstellungen-Registerkarte zeigt Button zum Generieren einer Domain](railway_project_generate_domain.png)

Dies wird die Site veröffentlichen und die Domain anstelle des Buttons anzeigen, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte zeigt einen Link zur Local-Library-Site](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen.
Beachten Sie, dass wir, da wir keine Produktionsdatenbank angegeben haben, die Local Library mit Ihren Entwicklungsdaten öffnet.

### Bereitstellen und Verbinden einer MongoDB-Datenbank

Anstatt unsere Entwicklungsdaten zu verwenden, erstellen wir als nächstes eine Produktions-MongoDB-Datenbank, die stattdessen verwendet wird.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in ihrem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genau wie für die Entwicklungsdatenbank.

Auf Railway wählen Sie die **Dashboard**-Option aus dem Menü auf der Website und dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes zu setzen).
Wählen Sie den **New**-Button, der verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobenem neuem Dienstbutton](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn nach der Art des hinzuzufügenden Dienstes gefragt wird:

![Railway-Popup zeigt Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Dann wählen Sie **Add MongoDB**, um die Datenbank hinzuzufügen.

![Railway-Popup zeigt verschiedene Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereitstellen.
Nach Abschluss sehen Sie jetzt sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie die _Variables_-Registerkarte und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm zeigt die URL, die benötigt wird, um die Datenbank zu verbinden](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es dem Anwendungsprozess mit einer Umgebungsvariable hinzufügen.
Öffnen Sie zuerst den Anwendungsdienst.
Wählen Sie dann die _Variables_-Registerkarte und drücken Sie den **New Variable**-Button.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert](#datenbankkonfiguration) haben, um die Datenbankadresse zu lesen).
Dies wird ungefähr wie der unten gezeigte Bildschirm aussehen.

![Railway-Website-Variablenbildschirm beim Hinzufügen der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie Nullwerte für Ihre Objektanzahl zeigen, da die oben genannten Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich an einen vorhergehenden Abschnitt, dass wir die [NODE_ENV auf 'production' setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies im gleichen Bildschirm tun, wo wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst.
Dann wählen Sie die _Variables_-Registerkarte, in der Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie den **New Variable**-Button.

![Railway-Variablenregisterkarte mit hervorgehobenem neuen Variablenbutton](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Namen der Umgebung ein.
Drücken Sie dann den **Add**-Button.

![Railway-Variablenregisterkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Local Library-Anwendung ist jetzt eingerichtet und für die Produktionsverwendung konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen und sie sollte auf die gleiche Weise funktionieren, wie sie dies während der Entwicklung tat (allerdings mit weniger Debug-Informationen, die für ungültige Seiten exponiert werden).

> [!NOTE]
> Wenn Sie nur ein paar Daten für Tests hinzufügen möchten, könnten Sie das `populate db`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) wie im Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_—_create_some_items) besprochen verwenden.

### Installation des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigsten Operationen sind das Bereitstellen des aktuellen Verzeichnisses Ihres Computers für ein zugehöriges Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit den gleichen Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie die folgende Eingabeaufforderung in ein Terminal eingeben.

```bash
railway help
```

### Fehlerbehebung

Der Railway-Client bietet den Logbefehl, um das Tail der Logs anzuzeigen (ein vollständigeres Log ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch der Reihe von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) einsehen.

## Siehe auch

- [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumente)
- [Best Practices für die Produktion: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumente)
- Railway-Dokumente

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Erste Schritte mit Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumente)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumente)
  - [Heroku Node.js-Support](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumente)
  - [Optimieren der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Begrenzungen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
