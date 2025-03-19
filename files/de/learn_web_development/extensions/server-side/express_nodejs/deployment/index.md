---
title: "Express Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und -mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zur Bereitstellung Ihrer Website finden könnten und was Sie tun müssen, um Ihre Website für die Produktion bereitzumachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorialthemen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
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

## Übersicht

Sobald Ihre Website fertig (oder "fertig genug" für öffentliche Tests) ist, müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, indem Sie Express/Node als Webserver verwendet haben, um Ihre Website im lokalen Browser/Netzwerk zu teilen, und Ihre Website mit unsicheren Entwicklungseinstellungen betrieben haben, die Debugging und andere private Informationen enthalten. Bevor Sie eine Website extern hosten können, müssen Sie Folgendes tun:

- Wählen Sie eine Umgebung für das Hosting der Express-App aus.
- Nehmen Sie einige Änderungen an Ihren Projekteinstellungen vor.
- Richten Sie eine produktionsreife Infrastruktur für die Bereitstellung Ihrer Website ein.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installieren können.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Zugriff ausführen. Die Umgebung umfasst:

- Die Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachenlaufzeit und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse Proxy, Load Balancers usw.
- Datenbanken, von denen Ihre Website abhängt.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und mit einer schnellen Verbindung ans Internet angeschlossen sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Anbieters ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Computerressourcen (z.B. CPU, RAM, Speicherplatz usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von fernzugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zum Vorinstallieren eines bestimmten Betriebssystems, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, vollständigere Umgebungen auszuwählen, vielleicht einschließlich einer kompletten Node-Installation.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren. Aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten bekommen und wissen, wo Sie mit Updates anfangen müssen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung dieser Art von Hosting benötigen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Server, Load Balancer usw.) zu kümmern, da die Hostplattform dies für Sie erledigt. Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren und nicht auf andere Serverinfrastruktur.

Einige Entwickler wählen möglicherweise die erhöhte Flexibilität, die IaaS im Vergleich zu PaaS bietet, andere schätzen eventuell den reduzierten Wartungsaufwand und die einfachere Skalierung von PaaS. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, weshalb wir dies in diesem Tutorial tun werden.

> [!NOTE]
> Wenn Sie einen Hosting-Anbieter wählen, der Node/Express-freundlich ist, sollten diese Anleitungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen für Webserver, Anwendungsserver, Reverse Proxy usw. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Einen Hosting-Anbieter auswählen

Es gibt zahlreiche Hosting-Anbieter, von denen bekannt ist, dass sie entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) funktionieren. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) sowie unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und deren Dienstleistungen und Preise können sich im Laufe der Zeit ändern. Auch wenn wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige Dinge, die Sie bei der Auswahl eines Hosts beachten sollten:

- Wie ausgelastet Ihre Website voraussichtlich sein wird und die Kosten für Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu befriedigen.
- Niveau der Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Die Standorte, an denen der Anbieter Rechenzentren hat, und wo der Zugriff wahrscheinlich am schnellsten ist.
- Die historische Zuverlässigkeit des Hosts in Bezug auf Betriebs- und Ausfallzeiten.
- Werkzeuge zur Verwaltung der Website — sind sie einfach zu verwenden und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von "Live-Stunden" in einigen Preiskategorien an oder bieten nur eine kleine Speichermenge.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, für die Sie ansonsten bezahlen müssten.
- Ob die kostenlose Stufe, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für einen Wechsel zu einer teureren Stufe bedeutet, dass Sie besser bedient wären, von Anfang an einen anderen Anbieter zu wählen.

Die gute Nachricht zu Beginn ist, dass es einige Websites gibt, die "kostenlose" Computerumgebungen bereitstellen, die für Evaluierung und Tests gedacht sind.
Diese sind in der Regel recht ressourcenbeschränkt/eingeschränkt, und Sie müssen sich bewusst sein, dass sie nach einem Einführungszeitraum ablaufen oder andere Einschränkungen haben können.
Sie sind jedoch großartig zum Testen von Websites mit geringem Datenverkehr in einer gehosteten Umgebung und können einen einfachen Wechsel zu mehr Ressourcen bieten, wenn Ihre Website stärker frequentiert wird.
Beliebte Entscheidungen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basic" oder "Hobby"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Ebenen von Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basic-Computing-Stufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website zur Veröffentlichung bereit machen

Die wichtigsten Dinge, die beim Veröffentlichen Ihrer Website zu beachten sind, sind Websicherheit und Leistung.
Zumindest sollten Sie die Datenbankkonfiguration ändern, damit Sie für die Produktion eine andere Datenbank verwenden und deren Anmeldeinformationen sichern können, die Stack-Traces, die auf Fehlerseiten während der Entwicklung enthalten sind, entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Weitere nützliche Tipps finden Sie in den Express-Dokumentationen — siehe [Production Best Practices: Performance and Reliability](https://expressjs.com/en/advanced/best-practice-performance.html) und [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

In diesem Tutorial haben wir bisher eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen in **app.js** fest codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, deren Offenlegung oder Beschädigung uns Sorgen bereiten würde, besteht kein besonderes Risiko bei der Preisgabe dieser Details.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerdaten, ist der Schutz Ihrer Datenbankanmeldeinformationen sehr wichtig.

Aus diesem Grund möchten wir in der Produktion eine andere Datenbank verwenden als in der Entwicklung und auch die Anmeldeinformationen der Produktionsdatenbank getrennt vom Quellcode halten, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einrichtung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele es tun), besteht eine Möglichkeit darin, den Server die Datenbank-URL aus einer Umgebungsvariablen beziehen zu lassen.
Unten modifizieren wir die LocalLibrary-Website, um die Datenbank-URI aus einer OS-Umgebungsvariable zu beziehen, falls sie definiert wurde, und ansonsten die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie sieht etwa so aus:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariable namens `MONGODB_URI` zu erhalten, falls sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere gängige Methode, um Produktionsdatenbankanmeldeinformationen getrennt vom Quellcode zu halten, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat in das Dateisystem bereitgestellt wird (zum Beispiel könnten sie unter Verwendung des npm [dotenv](https://www.npmjs.com/package/dotenv) Moduls gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stapeltraces auf Fehlerseiten entfernen, indem wir die `NODE_ENV`-Umgebungsvariable auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Neben der Erzeugung weniger ausführlicher Fehlermeldungen führt das Setzen der Variablen auf _production_ dazu, dass Ansichtsvorlagen und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, zwischengespeichert werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um das Dreifache verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder dem OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungssetup vornehmen, nicht in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir werden zeigen, wie dies in unserem Hosting-Beispiel unten gesetzt wird.

### Protokollieren Sie angemessen

Protokollierungsaufrufe können eine Auswirkung auf eine Website mit hohem Datenverkehr haben. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. den Datenverkehr verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge an hinzugefügter Protokollierung zu minimieren, die zu Debugging-Zwecken hinzugefügt wird.

Eine Möglichkeit, die "Debug"-Protokollierung in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), mit dem Sie steuern können, welche Protokollierung durch Setzen einer Umgebungsvariablen durchgeführt wird.
Zum Beispiel zeigt der folgende Codeausschnitt, wie Sie "author" Protokollierung einrichten könnten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Protokolle dieses Objekts angezeigt.

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

Sie können dann ein bestimmtes Set von Protokollen aktivieren, indem Sie sie als durch Kommas getrennte Liste in der `DEBUG`-Umgebungsvariablen angeben.
Sie können die Variablen für die Anzeige von Autoren- und Buchprotokollen wie gezeigt festlegen (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können die Protokollierung ersetzen, die Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Protokollierung über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie die Protokollierung in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen, und beobachten Sie, welche Auswirkungen dies auf die Protokollierung hat.

Wenn Sie die Aktivität der Website protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie in: [Production Best Practices: Performance and Reliability](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort, die an einen Client zurückgesendet wird, komprimieren, was die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich reduziert. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anforderung angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Seite mit [compression](https://www.npmjs.com/package/compression)-Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungsbibliothek wie gezeigt ein. Fügen Sie die Komprimierungsbibliothek mit der `use()`-Methode zur Middleware-Kette hinzu (dies sollte vor allen zu komprimierenden Routen erscheinen — in diesem Fall alle!).

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
> Für eine Website mit hohem Datenverkehr in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um sich vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihrer App helfen, sich vor bekannten Web-Schwachstellen zu schützen (siehe die [Dokumentationen](https://helmetjs.github.io/) für mehr Informationen darüber, welche Header gesetzt werden und gegen welche Schwachstellen sie schützen).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek wie gezeigt ein.
Fügen Sie dann das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um das _Subset_ der sicherheitsbezogenen Header hinzuzufügen, das für die meisten Websites sinnvoll ist.
Aber in der [LocalLibrary-Basisvorlage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) haben wir einige Bootstrap- und jQuery-Skripte eingefügt.
Diese verstoßen gegen die _Standard_-[Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von Helmet, die das Laden von quellenübergreifenden Skripten nicht erlaubt.
Um das Laden dieser Skripte zu ermöglichen, ändern wir die Helmet-Konfiguration so, dass sie CSP-Direktiven setzt, die das Laden von Skripten von den angegebenen Domains erlauben.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie eine Ratenbegrenzung zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Website gestellt werden könnten, wie z.B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder einfach nur ein nicht erwartungsgemäß agierender Client oder Skript.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können und dazu führen, dass Ihr Server langsamer wird, können Ihnen auch für den zusätzlichen Traffic Kosten entstehen.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Gruppe von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek wie gezeigt ein.
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
> Drittanbieterdienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie fortgeschritteneren Schutz gegen Denial-of-Service- oder andere Angriffsarten benötigen.

#### Setzen Sie die Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Startdatei zu ermitteln.

Das einzige wichtige Detail, das in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version.
Sie können die während der Entwicklung verwendete Node-Version ermitteln, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** ein, wie gezeigt (unter Verwendung der Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifische angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version auf verschiedenen Hosting-Diensten festzulegen, aber der Ansatz mit **package.json** wird weitgehend unterstützt.

#### Holen Sie sich Abhängigkeiten und testen Sie erneut

Bevor wir fortfahren, testen wir die Website erneut und stellen sicher, dass sie durch keine unserer Änderungen beeinträchtigt wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Starten Sie nun die Website (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und vergewissern Sie sich, dass die Website immer noch wie erwartet funktioniert.

### Erstellen eines Anwendungsrepositories in GitHub

Viele Hosting-Dienste ermöglichen Ihnen den Import und/oder die Synchronisierung von Projekten aus einem lokalen Repository oder von cloudbasierten Plattformen zur Verwaltung von Quellversionen.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und ein Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcodeverwaltungstools gute Softwareentwicklungspraxis ist, da es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekanntem, gut funktionierendem Code" zu wechseln, wann immer es notwendig ist!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Nachdem Sie eingeloggt sind, klicken Sie in der oberen Symbolleiste auf den **+** Link und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Während diese nicht zwingend erforderlich sind, wird es stark empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (z.B. "Local Library Website geschrieben in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahl.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Lizenz hinzufügen_ Auswahl.
   - Aktivieren Sie **Dieses Repository mit einer README initialisieren**.

   > [!WARNING]
   > Der Standard "Öffentliche" Zugriff macht _allen_ Quellcode — einschließlich Ihres Datenbank-Benutzernamens und Passworts — für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine festcodierten Anmeldeinformationen enthält.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen den Zugriff auf den Quellcode zu ermöglichen.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf die grüne **Klonen oder herunterladen** Schaltfläche auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfeld, das erscheint.
   Falls Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, da das Repository ("Repo") auf GitHub erstellt ist, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repository mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repo-Ordner, machen Sie sie mit _git_ zum Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und verwenden Sie den `add` Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status` Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit` wollen, korrekt sind (Sie möchten Quellcodedateien, keine Binärdateien, temporäre Dateien usw. einfügen).
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

4. Wenn Sie zufrieden sind, `commit` die Dateien in Ihr lokales Repo.
   Dies entspricht dem Unterzeichnen der Änderungen und dem Erstellen eines offiziellen Teils des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem Remote-GitHub-Repo zu synchronisieren (`push`) mit folgendem Befehl:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zurück zur Seite auf GitHub gehen können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, während sich Dateien mit diesem Zyklus von Hinzufügen/Commit/Push ändern.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanille"-Projekts zu machen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) sein könnten, andere möglicherweise nicht.
Sie können dies mit `git` in der Befehlszeile tun:

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
> Um mehr zu erfahren, sehen Sie [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Glitch](https://glitch.com/) hostet.

### Warum Glitch?

Wir entscheiden uns aus mehreren Gründen, Glitch zu verwenden:

- Glitch hat einen [freien Starter-Plan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass er für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Die Kenntnisse und Konzepte, die Sie beim Verwenden von Glitch lernen, sind übertragbar.
- Die Dienst- und Planbeschränkungen haben keine wesentlichen Auswirkungen auf die Verwendung von Glitch für das Tutorial.
  Zum Beispiel:

  - Der Starter-Plan bietet nur 1000 "Projektstunden" pro Monat, die monatlich zurückgesetzt werden.
    Diese werden verwendet, wenn Sie aktiv die Seite bearbeiten oder jemand darauf zugreift.
    Wenn niemand die Seite aufruft oder bearbeitet, geht sie in den Ruhezustand.
  - Die Starter-Plan-Umgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz.
    Für das Tutorial gibt es mehr als genug, insbesondere weil unsere Datenbank woanders gehostet wird.
  - Benutzerdefinierte Domänen werden nicht gut unterstützt (zum Zeitpunkt des Schreibens).
  - Weitere Einschränkungen finden sich in den [Glitch technischen Einschränkungen](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions).

Während Glitch für die Hosting-Demonstration geeignet ist, sollten Sie sich die Zeit nehmen zu ermitteln, ob es [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Benutzeroberfläche, in der Sie Projekte aus Startvorlagen erstellen oder von GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können.
Während Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container gebaut und ausgeführt.

Wie das alles "unter der Haube" funktioniert, bleibt ein Geheimnis — Glitch sagt es nicht.
Was klar ist, ist, dass solange Sie eine ziemlich standardmäßige nodejs-Webanwendung erstellen (zum Beispiel `package.json` für Ihre Abhängigkeiten verwenden) und nicht mehr Ressourcen verwenden als in den [technischen Einschränkungen](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) aufgeführt, Ihre Anwendung "einfach funktionieren" sollte.

Sobald die Anwendung läuft, kann sie für die Produktion konfiguriert werden, indem [private Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) in einer `.env` Datei bereitgestellt werden.
Die in den geheimen Daten enthaltenen Werte werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem vorherigen Abschnitt erinnern, die Art und Weise ist, wie wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL zu erhalten.
Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihr GitHub-Repository aufgenommen werden.

Die Glitch-Editierungsansicht bietet außerdem Terminals-Zugriff auf die Web-App-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als ob sie auf Ihrer lokalen Maschine läuft.

Das ist alles, was Sie an Überblick brauchen, um loszulegen.
Als Nächstes richten wir ein Glitch-Konto ein, laden das Library-Projekt von GitHub hoch und verbinden es mit einer Datenbank.

### Holen Sie sich ein Glitch-Konto

Um Glitch verwenden zu können, müssen Sie sich zuerst ein Konto anlegen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Sign up** Schaltfläche in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie werden dann in das Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Problemlösung zur Node.js-Version

Hosting-Anbieter unterstützen in der Regel einige Hauptversionen der neuesten Node.js-Veröffentlichungen.
Wenn die genaue "Neben"-Version, die Sie in Ihrer `package.json`-Datei angegeben haben, nicht unterstützt wird, fallen sie normalerweise auf die nächstgelegene unterstützte Version zurück (und oft funktioniert das einfach).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16.
Falls Sie mit Node.js 17 oder später entwickelt haben, sollten Sie die in Ihrer `package.json`-Datei verwendete Version wie gezeigt reduzieren.
Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zu aktualisieren und es in Zukunft besser aktuell zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — und es kann sein, du liest dies und die Versionsbeschränkung existiert nicht mehr.
Anstatt die `node` Version zu reduzieren, könnten Sie Ihr Projekt hochladen, um zu sehen, ob es gebaut wird.
Wenn Fehler auftreten und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node` Version auf `>=v16` in Ihrer `package.json` im Glitch-Editor zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub

Als Nächstes werden wir das Library-Projekt von GitHub importieren.
Zuerst wählen Sie die **Dashboard**-Option aus dem oberen Menü der Seite und anschließend die **New project** Schaltfläche.
Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import from GitHub**.

![Glitch-Dashboard mit neuer Projekt-Schaltfläche und einem Popup-Menü mit der Option "Import from GitHub"](glitch_new_project_import_github.png)

Es erscheint ein Popup.
Geben Sie die URL Ihres GitHub-Bibliothek-Repositorys in das Popup ein und drücken Sie **OK**.
Unten haben wir das Repository für das durchgearbeitete Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des zu importierenden GitHub-Repos](glitch_new_project_github_repo_url.png)

Glitch wird dann das Projekt importieren und Fortschrittsbenachrichtigungen anzeigen.
Nach Abschluss wird es die Bearbeitungsansicht für das neue Projekt anzeigen, wie unten gezeigt.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Site-URL abrufen, indem Sie die **Teilen** Schaltfläche auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browsertab und kopieren Sie den Link zur Live-Site in die Adressleiste.
Die Local Library-Site sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchron zu halten.

### Verwenden Sie eine Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten.
Während Glitch nur SQLite-Datenbanken hostet (und wir darauf eingerichtet sind, MongoDB zu verwenden), bieten viele andere Websites MongoDB-Datenbanken als Service an.

Eine Möglichkeit besteht darin, die [Einrichtung der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database)-Anweisungen aus einem früheren Zeitpunkt im Tutorial zu befolgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Library-Anwendung zugänglich zu machen, öffnen Sie die `.env` Datei in der Editoransicht für das Projekt.
Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Seite wird aktualisiert, während Sie Werte im Editor eingeben.

![Glitch .env-Dateieditor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) gedacht und wurde beim Import in Glitch automatisch erstellt.
> Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich vielleicht noch aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production'](#set_node_env_to_production) setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir tun dies in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die Local Library-Anwendung ist jetzt eingerichtet und für die Produktverwendung konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte so funktionieren wie während der Entwicklung (obwohl bei ungültigen Seiten weniger Debug-Informationen angezeigt werden).

> [!NOTE]
> Wenn Sie nur einige Daten für Tests hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Eine Datenbank verwenden (mit Mongoose) — einige Elemente testen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Debugging von Express-Apps auf Glitch

Glitch ermöglicht effektives Debugging.
Einige Dinge, die Sie tun können, sind:

- Wählen Sie die Protokolle-Schaltfläche unten in der Editoransicht, um Protokollinformationen von Ihrem Server zu sehen, z.B. Konsolenprotokollausgaben.
- Wählen Sie die Terminal-Schaltfläche unten in der Editoransicht, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen.
  Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debuggen in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keine komplett kostenlose Starter-Stufe mehr.
> Wir haben diese Anleitungen beibehalten, da Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve als viele andere Alternativen führt.
- Die Kenntnisse und Konzepte, die Sie beim Verwenden von Railway lernen, sind übertragbar.
  Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen zu ermitteln, ob Railway [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungsframeworks und Umgebungen automatisch anhand ihrer Verwendung von "gemeinsamen Konventionen" erkennen und installieren kann.
Beispielsweise erkennt Railway Node-Anwendungen daran, dass sie eine **package.json**-Datei haben, und kann den verwendeten Paketmanager anhand der "Lock"-Datei, die für den Aufbau verwendet wird, bestimmen.
Wenn die Anwendung zum Beispiel die Datei **package-lock.json** enthält, weiß Railway, dass es _npm_ zum Installieren der Pakete verwenden muss, während es **yarn.lock** findet, weiß es, dass `_yarn_ verwendet werden muss`.
Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten mit dem Namen "build" und "start" in der Paketdatei und verwendet diese, um den Code zu bauen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs) zur Erkennung verschiedener Webanwendungsframeworks, die in unterschiedlichen Programmiersprachen geschrieben sind.
> Sie müssen nichts weiter über diesen Teil für das Tutorial wissen, aber Sie können mehr über Optionen zur Bereitstellung von Node-Anwendung in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung ausgeführt wird, kann sie sich mithilfe von in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellten Informationen konfigurieren.
Für Anwendungen, die eine Datenbank verwenden, müssen sie die Adresse über eine Variable erhalten.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und mithilfe eines speziellen [Befehlszeilen-Interface (CLI)](https://docs.railway.com/guides/cli) Tools.
Mit dem CLI-Tool können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository von dem lokalen Zweig auf die Live-Site hochladen, die Protokolle des laufenden Prozesses inspizieren, Konfigurationsvariablen setzen und abrufen und vieles mehr.
Eines der besonders nützlichen Feature ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit den gleichen Umgebungsvariablen wie das live Projekt auszuführen.

Das ist alles, was Sie als Übersicht brauchen, um die Anwendung auf Railway zu stellen.
Als Nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Holen Sie sich ein Railway-Konto

Um Railway verwenden zu können, müssen Sie zuerst ein Konto anlegen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Anmelden** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann Ihre E-Mail post ansehen und Ihr Konto bestätigen.
- Sie werden dann in das Railway.com Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zuerst die **Dashboard**-Option im oberen Menü der Seite aus und dann die **New Project** Schaltfläche:

![Railway-Webseiten-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway wird eine Liste von Optionen für das neue Projekt anzeigen, darunter die Möglichkeit, ein Projekt aus einer Vorlage zu erstellen, die zunächst in Ihrem GitHub-Konto erstellt wird, und eine Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup, das Bereitstellungsoptionen mit der hervorgehobenen Option "Deploy from GitHub repo" zeigt](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie bei der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup, das die GitHub-Repos zeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, bei dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitzustellen, indem es den Fortschritt auf dem Reiter "Deployments" anzeigt.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard zeigt den Reiter "Deployments" für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun den _Settings_-Reiter, scrollen Sie dann im Bereich Domains nach unten und drücken Sie die **Generate Domain**-Schaltfläche.

![Railway-Projekteinstellungen zeigt die Schaltfläche zur Generierung einer Domain](railway_project_generate_domain.png)

Dadurch wird die Seite veröffentlicht und die Domain wird anstelle der Schaltfläche angezeigt, wie unten gezeigt.

![Railway-Projekteinstellungen zeigt einen Link zur Seite der lokalen Bibliothek](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen.
Beachten Sie, dass, da wir keine Produktionsdatenbank spezifiziert haben, die Local Library mit Ihren Entwicklungsdaten geöffnet wird.

### Bereitstellung und Verbindung einer MongoDB-Datenbank

Statt unsere Entwicklungsdaten zu nutzen, erstellen wir als Nächstes eine Produktions-MongoDB-Datenbank, die wir stattdessen verwenden.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl es nichts gibt, das dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen oder eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genau wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard**-Option im oberen Menü der Seite und dann Ihr Anwendungsprojekt aus.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Wählen Sie die **New**-Schaltfläche, die zum Hinzufügen von Diensten zum aktuellen Projekt verwendet wird.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach dem Typ des hinzuzufügenden Dienstes gefragt werden:

![Railway-Popup zeigt Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leeren Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um die Datenbank hinzuzufügen

![Railway-Popup zeigt verschiedene auswählbare Datenbanken: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun sowohl die Anwendung als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie den _Variables_-Reiter und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungen zeigt die benötigte URL zur Verbindung zur Datenbank](railway_mongodb_connect.png)

Um dies für die Library-Anwendung zugänglich zu machen, müssen wir es mit einer Umgebungsvariablen zum Anwendungsprozess hinzufügen.
Öffnen Sie zuerst den Anwendungsdienst.
Wählen Sie dann den _Variables_-Reiter aus und drücken Sie die **New Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariablen, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen).
Dies sieht ähnlich wie auf dem folgenden Bildschirm aus.

![Railway-Webseite Variablen-Bildschirm beim Setzen der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn sie Variablen aktualisiert. Wenn Sie die Startseite jetzt überprüfen, sollte sie null Werte für die Objektanzahl anzeigen, da wir durch die oben genannten Änderungen jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich vielleicht noch aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production'](#set_node_env_to_production) setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies auf demselben Bildschirm tun, auf dem wir die `MONGODB_URI`-Variable festgelegt haben.

Öffnen Sie den Anwendungsdienst.
Wählen Sie dann den _Variables_-Reiter, bei dem `MONGODB_URI` bereits definiert ist, und drücken Sie die **New Variable**-Schaltfläche.

![Railway-Variablen-Reiter mit der hervorgehobenen Neuen Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Name der Umgebung ein.
Drücken Sie dann die **Add**-Schaltfläche.

![Railway-Variablen-Reiter mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Das lokale Library-Anwendung ist nun eingerichtet und für die Produktverwendung konfiguriert.
Sie können über die Website-Oberfläche Daten hinzufügen, und es sollte so wie während der Entwicklung funktionieren (obwohl bei ungültigen Seiten weniger Debug-Informationen angezeigt werden).

> [!NOTE]
> Wenn Sie nur einige Daten für Tests hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Eine Datenbank verwenden (mit Mongoose) — einige Elemente testen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Installation des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers für ein damit verbundenes Railway-Projekt (ohne sie auf GitHub hochladen zu müssen) und das Ausführen Ihres Projekts lokal mit den gleichen Einstellungen, wie Sie sie auf dem Produktionsserver haben.

Sie können eine Liste aller möglichen Befehle abrufen, indem Sie das Folgende in einem Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client stellt den logs-Befehl bereit, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Site für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Express-Apps in der Produktion und auch das Ende der Serie von Tutorials zum Arbeiten mit Express. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) ansehen.

## Siehe auch

- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumente)
- [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumente)
- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Einstieg auf Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumente)
  - [Bereitstellung von Node.js Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumente)
  - [Heroku Node.js-Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumente)
  - [Optimierung der Node.js Anwendungs-Parallelität](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
