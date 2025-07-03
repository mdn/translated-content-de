---
title: "Express Tutorial Teil 7: Bereitstellen in der Produktion"
short-title: "7: Bereitstellen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie eine Beispielwebsite mit Express erstellt und getestet haben, ist es Zeit, sie auf einem Webserver bereitzustellen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie man ein Express-Projekt hostet und skizziert, was Sie tun müssen, um es für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, wo und wie Sie eine Express-App in der Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug", um öffentliche Tests zu starten), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, bei der Sie Express/Node als Webserver nutzen, um Ihre Website an den lokalen Browser/das lokale Netzwerk weiterzugeben und Ihre Website mit (unsicheren) Entwicklungseinstellungen zu betreiben, die Debug-Informationen und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Infrastruktur auf Produktionsniveau einrichten, um Ihre Website bereitzustellen.

Dieses Tutorial gibt einige Anleitungen zu Ihren Optionen für die Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App bereitzumachen, und ein funktionierendes Beispiel dafür, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Servercomputer bereitgestellt wird, auf dem Ihre Website zur externen Nutzung ausgeführt wird. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprachen-Laufzeitumgebung und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise inklusive eines Webservers, eines Reverse-Proxy, eines Load Balancers usw.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Was das wirklich bedeutet, ist, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet normalerweise ein garantiertes Niveau an Computerressourcen (z. B. CPU, RAM, Speicher usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von fernzugänglicher Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems an, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es, aus umfassenderen Umgebungen zu wählen, möglicherweise einschließlich einer vollständigen Node-Installation.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und basieren möglicherweise auf einer älteren Version des Betriebssystems. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und beim Upgrade von Teilen des Systems eine Vorstellung davon haben, wo Sie anfangen sollten!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung solcher Hosting-Angebote müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Server, Load Balancer usw.) kümmern, da die Host-Plattform dies für Sie übernimmt. Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Server-Infrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS wählen, während andere den reduzierten Wartungsaufwand und die einfache Skalierung von PaaS schätzen werden. Wenn Sie gerade anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, weshalb wir dies in diesem Tutorial tun werden.

> [!NOTE]
> Wenn Sie einen Hosting-Anbieter wählen, der Node/Express-freundlich ist, sollten diese Anweisungen bereitstellen, wie man eine Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. einrichtet. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node-Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekannt dafür sind, Node (und Express) aktiv zu unterstützen oder gut zu arbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkrressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Punkte, die bei der Auswahl eines Hosts zu beachten sind:

- Wie beschäftigt Ihre Website wahrscheinlich sein wird und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale Skalierung (Hinzufügen von mehr Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die damit verbundenen Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren hat und wo der Zugang daher am schnellsten sein dürfte.
- Historische Betriebszeit und Ausfallzeit des Hosts.
- Tools zur Verwaltung der Website – sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP)?
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren bestimmte Dienste absichtlich (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von "Live-Zeit"-Stunden in einigen Preiskategorien oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Übergang zu einer teureren Stufe bedeuten, dass Sie besser von Anfang an einen anderen Service genutzt hätten!

Die gute Nachricht ist, dass es viele Seiten gibt, die "kostenlose" Computerumgebungen bieten, die für Evaluierungen und Tests gedacht sind, wenn Sie gerade anfangen.
Diese sind in der Regel recht ressourcenbeschränkte Umgebungen, und Sie müssen sich darüber im Klaren sein, dass sie nach einer Einführungzeit ablaufen oder andere Einschränkungen haben.
Sie sind jedoch großartig, um Websites mit geringem Datenverkehr in einer gehosteten Umgebung zu testen, und können einen einfachen Übergang zur Bezahlung weiterer Ressourcen bieten, wenn Ihre Website stärker frequentiert wird.
Beliebte Optionen in dieser Kategorie sind [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basic"- oder "Hobby"-Stufe an, die für kleine Produktionsseiten gedacht ist und die nützlichere Computerleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basic-Computerstufe haben (im Bereich von etwa 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, stellt sich möglicherweise heraus, dass Skalierbarkeit der wichtigste Aspekt ist.

## Bereitmachen Ihrer Website für die Veröffentlichung

Die Hauptpunkte, die Sie beim Veröffentlichen Ihrer Website berücksichtigen sollten, sind Websicherheit und Leistung.
Im Minimum möchten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden können und deren Anmeldeinformationen sichern, die Stack-Traces entfernen, die auf Fehlerseiten während der Entwicklung enthalten sind, Ihr Logging bereinigen und die geeigneten Header einstellen, um viele häufige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> In den Express-Dokumenten gibt es weitere nützliche Tipps – siehe [Produktions-Best Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktions-Best Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen fest in **app.js** kodiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, bei denen wir uns Sorgen machen müssten, dass sie offengelegt oder beschädigt werden, besteht kein besonderes Risiko, diese Details preiszugeben.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbankanmeldeinformationen sehr wichtig.

Wir möchten aus diesem Grund eine andere Datenbank für die Produktion verwenden als für die Entwicklung und auch die Anmeldeinformationen der Produktionsdatenbank vom Quellcode getrennt halten, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter das Festlegen von Umgebungsvariablen über eine Webschnittstelle unterstützt (wie dies viele tun), ist eine Möglichkeit, dies zu tun, den Server die Datenbank-URL aus einer Umgebungsvariable abrufen zu lassen.
Unten modifizieren wir die LocalLibrary-Website, um die Datenbank-URI aus einer OS-Umgebungsvariablen zu erhalten, falls sie definiert wurde, andernfalls wird die URL der Entwicklungsdatenbank verwendet.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungstring aus einer Umgebungsvariablen namens `MONGODB_URI` zu bekommen, falls diese gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere übliche Methode, um Datenbank-Anmeldeinformationen der Produktion vom Quellcode zu trennen, besteht darin, sie von einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (sie könnten beispielsweise mithilfe des npm-Moduls [dotenv](https://www.npmjs.com/package/dotenv) gelesen werden).

### Setzen von NODE_ENV auf 'production'

Um Stack-Traces auf Fehlerseiten zu entfernen, setzen wir die `NODE_ENV`-Umgebungsvariable auf _production_ (standardmäßig ist sie auf '_development_' eingestellt). Zusätzlich zur Generierung weniger ausführlicherer Fehlermeldungen werden durch das Setzen der Variablen auf _production_ Ansichts-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, zwischengespeichert. Tests zeigen, dass durch das Setzen von `NODE_ENV` auf _production_ die App-Leistung um den Faktor drei verbessert werden kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder dem Initialisierungssystem des Betriebssystems vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungseinrichtung vornehmen, nicht in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir werden in unserem Hosting-Beispiel unten zeigen, wie diese Einstellung vorgenommen wird.

### Angemessenes Logging

Logging-Aufrufe können sich auf eine stark frequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten (z.B. Verfolgung des Datenverkehrs oder Protokollierung von API-Aufrufen) protokollieren, aber Sie sollten versuchen, die Menge an Logging, die zu Debugging-Zwecken hinzugefügt wird, zu minimieren.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das Ihnen erlaubt zu steuern, welches Logging durch das Setzen einer Umgebungsvariablen durchgeführt wird.
Zum Beispiel zeigt der untenstehende Codeausschnitt, wie man "author"-Logging einrichten könnte.
Die Debug-Variable wird mit dem Namen "author" deklariert, und das Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Menge an Logs aktivieren, indem Sie sie als durch Kommas getrennte Liste in der `DEBUG`-Umgebungsvariable spezifizieren.
Sie können die Variablen zum Anzeigen von author- und book-Logs wie gezeigt einstellen (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe an `debug` können das Logging, das Sie möglicherweise zuvor mit `console.log()` oder `console.error()` gemacht haben, ersetzen. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie die Auswirkungen auf das Logging.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktions-Best Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwendung von gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort, die an einen Client gesendet wird, komprimieren und so die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich verkürzen. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Seite hinzu, indem Sie [compression](https://www.npmjs.com/package/compression) Middleware verwenden. Installieren Sie dieses im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und includen Sie die Compression-Bibliothek wie gezeigt. Fügen Sie die Compression-Bibliothek mit der Methode `use()` zur Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten – in diesem Fall alle!)

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
> Bei einer stark frequentierten Website in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwendung von Helmet zum Schutz vor bekannten Schwachstellen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen über die gesetzten Header und die Schwachstellen, die sie abwehren).

Installieren Sie dieses im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und inkludieren Sie die _helmet_ Bibliothek wie gezeigt. Fügen Sie dann das Modul mit der `use()` Methode zur Middleware-Kette hinzu.

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

Normalerweise würden wir einfach `app.use(helmet());` einfügen, um das _Subset_ der sicherheitsrelevanten Header, die für die meisten Seiten sinnvoll sind, hinzuzufügen.
In der [LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) inkludieren wir jedoch einige Bootstrap- und jQuery-Skripte.
Diese verstoßen gegen die _default_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von helmet, die das Laden von plattformübergreifenden Skripten nicht zulässt.
Um das Laden dieser Skripte zu ermöglichen, modifizieren wir die helmet-Konfiguration so, dass sie CSP-Direktiven setzt, die Skriptladen von den angegebenen Domains erlauben.
Für Ihren eigenen Server können Sie spezifische Header gemäß den [Anweisungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) hinzufügen/deaktivieren.

### Hinzufügen von Ratenbeschränkungen zu den API-Routen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu beschränken.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden könnten, wie etwa Denial-of-Service-Angriffe, Brute-Force-Angriffe oder einfach nur ein Client oder Skript, das nicht wie erwartet funktioniert.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen verursacht werden können und dazu führen, dass Ihr Server langsamer wird, können Ihnen auch Gebühren für den zusätzlichen Datenverkehr entstehen.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder ein Set von Routen gestellt werden können.

Installieren Sie dieses im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und includen Sie die _express-rate-limit_ Bibliothek wie gezeigt. Fügen Sie dann das Modul mit der `use()` Methode zur Middleware-Kette hinzu.

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
> Drittanbieter-Dienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen umfassenderen Schutz gegen Denial-of-Service-Angriffe oder andere Arten von Angriffen benötigen.

#### Festlegen der Node-Version

Für Node-Applikationen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Applikationsabhängigkeiten und die Einstiegspunktdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version.
Sie können die Node-Version, die für die Entwicklung verwendet wurde, ermitteln, indem Sie den folgenden Befehl eingeben:

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

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifisch angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass versucht wird, eine Version mit der gleichen Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es andere Möglichkeiten geben kann, die Node-Version auf verschiedenen Hosting-Diensten anzugeben, aber der **package.json**-Ansatz wird weitgehend unterstützt.

#### Holen Sie sich Abhängigkeiten und testen Sie erneut

Bevor wir fortfahren, testen wir die Seite erneut und stellen sicher, dass sie von unseren Änderungen nicht betroffen ist.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Root-Verzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Website (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob sich die Website immer noch wie erwartet verhält.

### Erstellen eines Anwendungs-Repositorys in GitHub

Viele Hosting-Dienste ermöglichen es, Projekte von einem lokalen Repository oder von cloudbasierten Versionskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Versionskontrolltools beste Softwareentwicklungspraxis ist, da es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und dem "bekannten guten Code" zu wechseln, wenn Sie ihn benötigen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Werkzeugleiste und wählen **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Während diese nicht obligatorisch sind, werden sie dringend empfohlen.
   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (z.B. "Local Library Website geschrieben in Express (Node)").
   - Wählen Sie **Node** in der Auswahl "Add .gitignore".
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahl "Add license".
   - Aktivieren Sie **Dieses Repository mit einer README initialisieren**.

   > [!WARNING]
   > Der Standard "Public"-Zugang macht _alle_ Quellcodes — einschließlich Ihres Datenbank-Benutzernamens und Passworts — für jeden im Internet zugänglich! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen fest codiert sind.
   >
   > Wählen Sie andernfalls die Option "Private", um nur ausgewählten Personen den Zugriff auf den Quellcode zu ermöglichen.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf den grünen **Klonen oder herunterladen**-Button auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im erscheinenden Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, wo das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizielle Git-Download-Anleitung](https://git-scm.com/downloads)).
2. Öffnen Sie ein Befehlszeilenfenster/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquellcodes in den Repo-Ordner, machen Sie sie mit _git_ zum Teil des Repos und laden sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (mit Ausnahme von **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Befehlszeilenfenster/Terminal und verwenden Sie den `add` Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status` Befehl, um zu überprüfen, ob alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten Quellcodes einfügen, keine Binärdateien, temporären Dateien usw.).
   Es sollte ungefähr wie die untenstehende Auflistung aussehen.

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

4. Wenn Sie zufrieden sind, `committen` Sie die Dateien zu Ihrem lokalen Repo.
   Dies entspricht dem Abzeichnen der Änderungen und dem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem folgenden Befehl mit dem Remote-GitHub-Repo zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Sobald dieser Vorgang abgeschlossen ist, sollten Sie zurück zu der Seite auf GitHub gehen, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen Zyklus von Add/Commit/Push verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) sein können, andere möglicherweise nicht.
Sie können dies mit `git` auf der Befehlszeile tun:

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
> Um mehr zu erfahren, sehen Sie sich [Git Lernen](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) an.

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Glitch](https://glitch.com/) hostet.

### Warum Glitch?

Wir wählen Glitch aus mehreren Gründen:

- Glitch hat einen [kostenlosen Startertarif](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!
- Glitch kümmert sich um die Infrastruktur, damit Sie das nicht müssen.
  Sich nicht um Server, Load Balancer, Reverse-Proxies usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von Glitch erlernen, sind übertragbar.
- Die Service- und Planbeschränkungen beeinträchtigen nicht wirklich unsere Nutzung von Glitch für das Tutorial.
  Zum Beispiel:
  - Der Startertarif bietet monatlich nur 1000 "Projektstunden", die monatlich zurückgesetzt werden.
    Diese werden verwendet, wenn Sie die Seite aktiv bearbeiten oder jemand darauf zugreift.
    Wenn niemand auf die Seite zugreift oder sie bearbeitet, wird sie schlafen.
  - Die Starterumgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz.
    Es reicht mehr als genug für das Tutorial, insbesondere da unsere Datenbank anderswo gehostet wird.
  - Benutzerdefinierte Domains werden nicht gut unterstützt (zum Zeitpunkt der Erstellung).
  - Andere Einschränkungen finden Sie auf der Seite [Glitch Technical Restrictions](https://help.glitch.com/s/article/Technical-Restrictions).

Während Glitch für das Hosting dieser Demonstration geeignet ist, sollten Sie sich die Zeit nehmen, um festzustellen, ob es [für Ihre eigene Webseite geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Schnittstelle, in der Sie Projekte aus Starter-Templates erstellen oder aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können.
Während Sie Änderungen vornehmen, wird das Projekt in einem eigenen isolierten und unabhängigen virtuellen Container erstellt und ausgeführt.

Wie das alles "unter der Haube" funktioniert, ist ein Rätsel — Glitch sagt es nicht.
Klar ist jedoch, dass so lange Sie eine relativ standardmäßige Node.js-Webanwendung erstellen (z.B. durch Verwendung von `package.json` für Ihre Abhängigkeiten), und nicht mehr Ressourcen verbrauchen als in den [technischen Einschränkungen](https://help.glitch.com/s/article/Technical-Restrictions) angegeben, sollte Ihre Anwendung "einfach funktionieren", sobald Sie Glitch hosten.

Sobald die Anwendung ausgeführt wird, kann sie mithilfe von [privaten Daten](https://help.glitch.com/s/article/Adding-Private-Data), die in einer `.env` Datei bereitgestellt werden, für die Produktion konfiguriert werden.
Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem vorherigen Abschnitt erinnern werden, die Art und Weise ist, wie wir unsere Anwendung so konfiguriert haben, dass sie ihre Datenbank-URL erhält.
Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihrem GitHub-Repository enthalten sein.

Der Glitch-Editor bietet außerdem Terminal-Zugriff auf die Webapp-Umgebung, die Sie verwenden können, um mit der Webapp zu arbeiten, als würde sie auf Ihrem lokalen Rechner ausgeführt.

Das ist alles, was Sie wissen müssen, um anzufangen.
Als nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Glitch-Konto erstellen

Um Glitch verwenden zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie den **Sign up**-Button in der oberen Werkzeugleiste.
- Wählen Sie GitHub im Popup, um sich über Ihre GitHub-Anmeldedaten anzumelden.
- Sie werden dann in das Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Fehlerbehebung bei der Node.js-Version

Hosting-Anbieter unterstützen häufig einige Hauptversionen von aktuellen Node.js-Versionen.
Wenn die genaue "Minor"-Version, die Sie in Ihrer `package.json`-Datei angegeben haben, nicht unterstützt wird, greifen sie normalerweise auf die nächste unterstützte Version zurück (und oft wird dies einfach funktionieren).

Leider ist zum Zeitpunkt der Erstellung die höchste unterstützte Version auf Glitch Node.js 16.
Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die Version in Ihrer `package.json`-Datei wie gezeigt reduzieren.
Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zu aktualisieren und es in Zukunft besser auf dem neuesten Stand zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — und es kann sein, dass das Versions-Limit nicht mehr existiert, wenn Sie dies lesen.
Anstatt die `node`-Version herabzustufen, könnten Sie versuchen, Ihr Projekt hochzuladen, um zu sehen, ob es gebaut wird.
Wenn es Fehler gibt und Ihre Anwendung nicht lädt, sollten Sie versuchen, die `node`-Version auf `>=v16` in Ihrem `package.json` im Glitch-Editor einzustellen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellen auf Glitch von GitHub

Als nächstes importieren wir das Bibliotheksprojekt von GitHub.
Wählen Sie zuerst die **Dashboard**-Option im Hauptmenü der Seite aus, und wählen Sie dann die **Neues Projekt**-Schaltfläche.
Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import von GitHub**.

![Glitch-Website-Dashboard, das eine neue Projekt-Schaltfläche und ein Popup-Menü mit der Option "Import von GitHub" zeigt](glitch_new_project_import_github.png)

Ein Popup erscheint.
Geben Sie die URL Ihres GitHub-Bibliotheks-Repositorys in das Popup ein und drücken Sie **OK**.
Unten haben wir das Repo für das bearbeitete Projekt eingegeben.

![Glitch-Popup zur Eingabe der URL des zu importierenden GitHub-Repos](glitch_new_project_github_repo_url.png)

Glitch wird dann das Projekt importieren und Fortschrittsmeldungen anzeigen.
Sobald der Import abgeschlossen ist, zeigt es die Bearbeitungssicht für das neue Projekt an, wie unten gezeigt.

![Glitch-Editor-Ansicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Website-URL erhalten, indem Sie die **Teilen**-Schaltfläche auswählen.

![Glitch-Editor-Ansicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link für die Live-Website in die Adressleiste.
Die lokale Bibliotheksseite sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import aus GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und > Ihr Projekt synchron zu halten.

### Verwenden einer Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten.
Während Glitch nur SQLite-Datenbanken hostet (und wir so eingerichtet sind, dass wir MongoDB verwenden), bieten viele andere Seiten MongoDB-Datenbanken als Dienst an.

Eine Möglichkeit ist, den Anweisungen zum [Einrichten der MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) aus einem früheren Tutorial zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Editoransicht des Projekts.
Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Website aktualisiert sich, während Sie Werte in den Editor eingeben.

![Glitch .env-Dateieditor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/s/article/Adding-Private-Data) bestimmt und wurde beim Import nach Glitch automatisch erstellt.
> Sie wird niemals exportiert oder kopiert.

### Weitere Konfigurationsvariablen

Sie werden sich an einen vorhergehenden Abschnitt erinnern, dass wir [JETZT_ENV auf 'production' setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger umfassende Fehlermeldungen zu generieren. Wir tun dies in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die lokale Bibliotheksanwendung ist nun eingerichtet und für die Produktion konfiguriert.
Sie können Daten über die Webschnittstelle hinzufügen und sollten so funktionieren, wie es während der Entwicklung der Fall war (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zu Testzwecken hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktions-Datenbank-URL) wie im Abschnitt [Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testen – Erstellen einiger Elemente](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Debuggen von Express-Apps auf Glitch

Glitch ermöglicht effektives Debugging.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie den Logs-Button unten in der Editoransicht, um Protokollinformationen von Ihrem Server wie Konsolenausgaben anzuzeigen.
- Wählen Sie den Terminal-Button unten in der Editoransicht, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen.
  Beispielsweise könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debugging in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

### Warum Railway?

> [!WARNING]
> Railway hat keinen komplett kostenlosen Starter-Tarif mehr.
> Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist aus mehreren Gründen eine attraktive Hosting-Option:

- Railway übernimmt den Großteil der Infrastruktur für Sie.
  Sich nicht um Server, Load-Balancer, Reverse-Proxies usw. kümmern zu müssen, macht es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf Nutzererfahrung bei Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und weniger steilen Lernkurve führt als bei vielen anderen Alternativen.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von Railway erlernen, sind übertragbar.
  Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und umfassend.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie es am Ende lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway [für Ihre eigene Webseite geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht es einfach, da es durch die Nutzung "gemeinsamer Konventionen" viele verschiedene Webanwendungs-Frameworks und Umgebungen automatisch erkennen und installieren kann.
Beispielsweise erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den verwendeten Paket-Manager zum Bauen aus der "lock"-Datei bestimmen.
Beispielsweise, wenn die Anwendung die Datei **package-lock.json** beinhaltet, weiß Railway, dass _npm_ zum Installieren der Pakete verwendet wird, während es **yarn.lock** findet, weiß es, dass _yarn_ verwendet wird.
Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Scripts mit den Namen "build" und "start" in der Paketdatei, um den Code zu bauen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks in verschiedenen Programmiersprachen zu erkennen.
> Sie müssen nicht mehr dafür wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) herausfinden.

Sobald die Anwendung läuft, kann sie sich mithilfe von [Umgebungsvariablen](https://docs.railway.com/guides/variables) selbst konfigurieren.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse mit Hilfe einer Variablen erhalten.
Der Dienst der Datenbank selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und mithilfe eines speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tools.
Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu assoziieren, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Variablen zu setzen und abzurufen und vieles mehr.
Eines der nützlichsten Features ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen auszuführen wie auf dem Live-Projekt.

Das ist alles, was Sie brauchen, um die App auf Railway bereitzustellen.
Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Erstellen eines Railway-Kontos

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Werkzeugleiste.
- Wählen Sie GitHub im Popup, um sich über Ihre GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann Ihre E-Mail überprüfen und Ihr Konto verifizieren.
- Sie werden dann im Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellen auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zunächst die **Dashboard**-Option im Hauptmenü der Seite aus und wählen Sie dann die **Neues Projekt**-Schaltfläche:

![Railway-Website-Dashboard zeigt die neue Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einem Template zu bereitstellen, das zuerst in Ihrem GitHub-Konto erstellt wurde, sowie mehrere Datenbanken.
Wählen Sie **Bereitstellen aus GitHub-Repo**.

![Railway-Popup zeigt Bereitstellungsoptionen mit ausgewählter Option zum Bereitstellen aus GitHub-Repo](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie beim Setup mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm, wenn Sie die Bereitstellung eines Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt und stellt es bereit und zeigt den Fortschritt auf der Registerkarte Bereitstellungen an.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard zeigt die Registerkarte Bereitstellungen für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Einstellungen_ aus, scrollen Sie dann nach unten zum Abschnitt Domains und drücken Sie die **Domain generieren**-Schaltfläche.

![Railway-Projekteinstellungen-Registerkarte zeigt Schaltfläche zum Generieren einer Domain](railway_project_generate_domain.png)

Dies wird die Seite veröffentlichen und die Domain anstelle der Schaltfläche anzeigen, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte zeigt einen Link zur lokalen Bibliothek-Seite](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen.
Beachten Sie, dass, weil wir keine Produktionsdatenbank spezifiziert haben, die lokale Bibliothek geöffnet wird und Ihre Entwicklungsdaten verwendet.

### Bereitstellen und Verbinden einer MongoDB-Datenbank

Lassen Sie uns stattdessen eine Produktions-MongoDB-Datenbank erstellen, die wir stattdessen verwenden können.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, so wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie unter Railway die **Dashboard**-Option im Hauptmenü der Seite aus und wählen dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes einzurichten).
Wählen Sie die **Neu**-Schaltfläche, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie nach dem Typ des hinzuzufügenden Dienstes gefragt werden:

![Railway-Popup zeigt Optionen für einen neuen Dienst, z.B. Datenbank, GitHub-Repo, leeren Dienst usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Popup zeigt verschiedene auswählbare Datenbanken: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im selben Projekt bereit.
Nach Abschluss sehen Sie jetzt sowohl die Anwendung als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen zur Datenbank anzuzeigen.
Öffnen Sie die Registerkarte _Variablen_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm zeigt den zum Verbinden mit der Datenbank benötigten URL](railway_mongodb_connect.png)

Um dies der Bibliotheksanwendung zugänglich zu machen, müssen wir es dem Anwendungsprozess mithilfe einer Umgebungsvariablen hinzufügen.
Öffnen Sie zunächst den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variablen_ aus und klicken auf die **Neue Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die von Ihnen kopierte Verbindungs-URL für die Datenbank (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen) ein.
Dies sieht etwa aus wie der unten gezeigte Bildschirm.

![Railway-Website-Variablen-Bildschirm beim Hinzufügen der MONGODB_URI-Variablen und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie null Werte für Ihre Objektzahlen zeigen, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Weitere Konfigurationsvariablen

Sie werden sich an einen vorhergehenden Abschnitt erinnern, dass wir [NODE_ENV auf 'production' setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger umfassende Fehlermeldungen zu generieren. Wir können dies auf demselben Bildschirm tun, auf dem wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variablen_ aus, in der Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und klicken auf die **Neue Variable**-Schaltfläche.

![Railway-Variablen-Registerkarte mit hervorgehobener neuer Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Name der neuen Variable ein und `production` als Name der Umgebung ein.
Drücken Sie dann die **Hinzufügen**-Schaltfläche.

![Railway-Variablen-Registerkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist nun eingerichtet und für die Produktion konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte auf die gleiche Weise funktionieren wie während der Entwicklung (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie lediglich einige Daten zu Testzwecken hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktions-Datenbank-URL), wie im Abschnitt [Express Tutorial Part 3: Verwendung einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Installieren des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn gemäß den [Anweisungen hier](https://docs.railway.com/guides/cli).

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Vorgänge umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers in einem zugehörigen Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie Sie auf dem Produktionsserver haben.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das folgende in einem Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den logs-Befehl, um das Ende der Logs anzuzeigen (ein vollständigeres Log ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zum Einrichten von Express-Apps in der Produktion und auch die Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial) ansehen.

## Siehe auch

- [Produktions-Best Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktions-Best Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation
  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Erste Schritte auf Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellung von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Einstellungen und Konfig-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
