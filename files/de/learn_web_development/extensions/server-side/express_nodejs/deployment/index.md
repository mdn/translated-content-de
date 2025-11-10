---
title: "Express Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine Beispiel-Website mit Express erstellt und getestet haben, ist es an der Zeit, sie auf einem Webserver bereitzustellen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie man ein Express-Projekt hostet und umreißt, was Sie tun müssen, um es für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
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

Sobald Ihre Website fertig ist (oder "fertig genug" ist, um öffentliche Tests zu starten), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Website an den lokalen Browser/das Netzwerk zu verteilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging-Informationen und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Produktionsinfrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl eines Hosting-Anbieters, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App produktionsbereit zu machen, und ein praktisches Beispiel dafür, wie Sie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.com/) installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung des Server-Computers, auf dem Sie Ihre Website für den externen Gebrauch betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Laufzeitumgebung und Framework-Bibliotheken der Programmiersprache, auf der Ihre Website basiert.
- Webserver-Infrastruktur, möglicherweise einschliesslich eines Webservers, eines Reverse-Proxys, eines Load Balancers usw.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Server-Computer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum(en) Ihres Hosting-Anbieters ausgeführt wird. Der Remote-Server bietet in der Regel ein garantiertes Niveau an Computerressourcen (z.B. CPU, RAM, Speichermedien usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von zugreifbarer Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, vollständigere Umgebungen auszuwählen, möglicherweise einschließlich einer kompletten Node-Einrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website erleichtern, da sie die erforderliche Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und basieren möglicherweise auf einer älteren Version des Betriebssystems. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und, wenn Sie Teile des Systems aktualisieren müssen, eine Vorstellung haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung dieser Art von Hosting müssen Sie sich nicht um die meisten Ihrer Produktionsumgebung (Server, Load Balancers usw.) kümmern, da die Host-Plattform diese für Sie übernimmt. Das macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität, die IaaS im Vergleich zu PaaS bietet, wählen, während andere den verringerten Wartungsaufwand und den geringeren Skalierungsaufwand von PaaS schätzen. Wenn Sie anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter auswählen, sollte dieser Anleitungen zum Einrichten einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node-Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) zusammenarbeiten. Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) und verschiedene Stufen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und deren Services und Preise können sich im Laufe der Zeit ändern. Während wir im Folgenden einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts beachten sollten:

- Wie beschäftigt Ihre Website wahrscheinlich sein wird und die Kosten für Daten- und Computerressourcen sind, die erforderlich sind, um diese Nachfrage zu befriedigen.
- Unterstützungsniveau für horizontale Skalierung (hinzufügen von mehr Maschinen) und vertikale Skalierung (Aktualisierung auf leistungsstärkere Maschinen) und die damit verbundenen Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren hat, und somit, wo der Zugriff am schnellsten ist.
- Die historische Betriebszeit und Ausfallzeit des Hosts.
- Bereitgestellte Tools zum Verwalten der Website — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preiskategorien oder bieten nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter offerieren kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, die Sie ansonsten bezahlen müssten.
- Ob der "kostenlose" Tarif, auf den Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für den Umstieg auf einen teureren Tarif bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen!

Das Gute ist, dass es für den Anfang eine Vielzahl von Seiten gibt, die "kostenlose" Computerumgebungen anbieten, die für Evaluierung und Tests gedacht sind. Dies sind in der Regel ziemlich ressourcenbeschränkte/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können. Sie sind jedoch großartig zum Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und können einen einfachen Übergang zum Kauf zusätzlicher Ressourcen bieten, wenn Ihre Website geschäftiger wird. Beliebte Entscheidungen in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine "Basic" oder "Hobby" Stufe an, die für kleine Produktionsseiten gedacht ist und ein nützlicheres Maß an Computerleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele beliebter Hosting-Anbieter, die eine relativ günstige Basic-Computing-Stufe haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website bereit zur Veröffentlichung machen

Die Hauptsachen, über die Sie nachdenken sollten, wenn Sie Ihre Website veröffentlichen, sind Websicherheit und Leistung. Zumindest möchten Sie die Datenbankkonfiguration ändern, um eine andere Datenbank für die Produktion verwenden zu können und deren Anmeldeinformationen zu sichern, die Stapelverfolgungen, die während der Entwicklung auf Fehlerseiten enthalten sind, entfernen, Ihr Logging bereinigen und die entsprechenden Header einstellen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumentationen — siehe [Produktionsbest Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktionsbest Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen [fest im **bin/www**](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#connect_to_mongodb) kodiert wurden. Da die Entwicklungsdatenbank keine Informationen enthält, deren Preisgabe oder Korruption wir in Kauf nehmen möchten, besteht kein besonderes Risiko beim Leaken dieser Details. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, dann ist es sehr wichtig, Ihre Datenbank-Anmeldeinformationen zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als für die Entwicklung und auch die Produktionsdatenbank-Anmeldeinformationen vom Quellcode getrennt halten, damit sie ordnungsgemäß geschützt werden.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Webschnittstelle unterstützt (was viele tun), besteht eine Möglichkeit darin, den Server die Datenbank-URL über eine Umgebungsvariable abrufen zu lassen. Im Folgenden ändern wir die LocalLibrary-Website, um die Datenbank-URI aus einer Betriebssystem-Umgebungsvariable zu erhalten, wenn sie definiert ist, und ansonsten die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **bin/www** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen mit dem Namen `MONGODB_URI` zu erhalten, wenn diese gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

```js
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
```

> [!NOTE]
> Eine andere übliche Methode, um Produktionsdatenbank-Anmeldeinformationen vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (z.B. könnten sie mit dem [dotenv](https://www.npmjs.com/package/dotenv) Modul von npm gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stapelverfolgungen auf Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zu weniger ausführlichen Fehlermeldungen bewirkt das Setzen der Variable auf _production_, dass Vorlagen- und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, gecacht werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die App-Leistung um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder des Betriebssystem-Initialisierungssystems vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrem Umgebungseinrichtung vornehmen, statt in Ihrer App, aber wichtig genug, um hier darauf hinzuweisen! Wir werden zeigen, wie dies für unser Beispiel-Hosting unten eingestellt wird.

### Protokollieren Sie angemessen

Protokollierungsaufrufe können sich auf eine hoch frequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z.B. Traffic verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge der Protokollierung, die zu Debugging-Zwecken hinzugefügt wird, zu minimieren.

Eine Möglichkeit, die "Debug"-Protokollierung in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das es Ihnen ermöglicht, zu steuern, welche Protokollierung durch das Setzen einer Umgebungsvariablen ausgeführt wird. Zum Beispiel zeigt der folgende Codeausschnitt, wie Sie die Protokollierung für "author" einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Protokolle von diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Reihe von Protokollen aktivieren, indem Sie sie als komma getrennte Liste in der Umgebungsvariable `DEBUG` angeben. Sie können die Variablen für die Anzeige von Autoren- und Buchlogs wie gezeigt setzen (Wildcard werden auch unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe an `debug` können die Protokollierung ersetzen, die Sie möglicherweise zuvor mit `console.log()` oder `console.error()` gemacht haben. Ersetzen Sie alle Aufrufe von `console.log()` in Ihrem Code durch Protokollierung über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie die Protokollierung in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie die Auswirkungen, die dies auf die Protokollierung hat.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktionsbest Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Kompression für Antworten

Webserver können häufig die HTTP-Antwort, die an einen Client zurückgesendet wird, komprimieren, was die zum Abrufen und Laden der Seite erforderliche Zeit erheblich reduziert. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage sagt, dass er unterstützt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Website mit [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies in Ihrem Projektstammverzeichnis, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und erfordern Sie die compression-Bibliothek wie gezeigt. Fügen Sie die compression-Bibliothek mit der `use()`-Methode der Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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
> Für eine hochfrequentierte Website in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um sich vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihrer App helfen, sich vor bekannten Web-Schwachstellen zu schützen (siehe die [Dokumente](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und welche Schwachstellen es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und erfordern Sie die _helmet_-Bibliothek wie gezeigt. Dann fügen Sie das Modul mit der `use()`-Methode in die Middleware-Kette ein.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um den _Teil_ der sicherheitsbezogenen Header hinzuzufügen, der für die meisten Websites Sinn macht. Allerdings verwenden wir im [LocalLibrary Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) einige Bootstrap-Skripte. Diese verletzen die _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von Helmet, die das Laden von Cross-Site-Skripten nicht erlaubt. Um das Laden dieser Skripte zu ermöglichen, ändern wir die Helmet-Konfiguration, sodass sie CSP-Direktiven setzt, um das Laden von Skripten von den angegebenen Domains zu erlauben. Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie eine Rate-Limitierung zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Website gestellt werden könnten, wie Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder ein Skript, das nicht wie erwartet funktioniert. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen verursacht werden können, die Ihren Server verlangsamen, können Ihnen auch Gebühren für den zusätzlichen Traffic berechnet werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder ein Satz von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und erfordern Sie die _express-rate-limit_-Bibliothek wie gezeigt. Dann fügen Sie das Modul mit der `use()`-Methode in die Middleware-Kette ein.

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
> Drittanbieterdienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie einen fortschrittlicheren Schutz gegen Denial-of-Service- oder andere Arten von Angriffen benötigen.

#### Setzen Sie die Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die Datei **package.json** alles, was ein Hosting-Anbieter zum Ermitteln der Anwendungsabhängigkeiten und der Einstiegspunktsdatei benötigt.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Version von Node herausfinden, die für die Entwicklung verwendet wurde, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Informationen als **engines > node** wie gezeigt (unter Verwendung der Versionsnummer Ihres Systems) hinzu.

```json
{
  "engines": {
    "node": ">=22.0.0"
  }
}
```

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass versucht wird, eine Version mit der gleichen Hauptversionsnummer oder einer neueren Version zu verwenden.

Beachten Sie, dass es andere Möglichkeiten geben kann, die Node-Version auf verschiedenen Hosting-Diensten anzugeben, aber der **package.json**-Ansatz wird weitgehend unterstützt.

#### Holen Sie sich Abhängigkeiten und testen Sie erneut

Bevor wir fortfahren, testen wir die Seite erneut und stellen sicher, dass sie von unseren Änderungen nicht beeinflusst wurde.

Zunächst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Starten Sie nun die Website (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob die Seite weiterhin wie erwartet funktioniert.

### Erstellen eines Anwendungsrepositorys in GitHub

Viele Hosting-Services erlauben Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellcode-Verwaltungsplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek ein und verwenden das **git** Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools eine gute Softwareentwicklungspraktik ist, da Sie dadurch Änderungen ausprobieren können und zwischen Ihren Experimenten und dem „bekannten funktionierenden Code“ wechseln können, wenn Sie es brauchen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht zwingend sind, werden sie dringend empfohlen.
   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (wie "Local Library Website geschreiben in Express").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahl.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahl.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _alle_ Quellcodes — einschließlich Ihres Datenbank-Benutzernamens und -passworts — für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine hartcodierten Anmeldeinformationen enthält.
   >
   > Ansonsten wählen Sie die "Privat"-Option, um nur ausgewählten Personen den Zugriff auf den Quellcode zu gestatten.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf die grüne **Branch oder herunterladen**-Schaltfläche auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im sich öffnenden Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL wie folgt aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, wo das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads/)).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repository mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies wird das Repository im aktuellen Verzeichnis erstellen.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repository-Ordner, machen Sie sie mit _git_ zum Teil des Repos und laden Sie sie zu GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, die Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit`en möchten, korrekt sind (Sie möchten Quellcodedateien einschließen, nicht Binärdateien, temporäre Dateien usw.).
   Es sollte ein wenig wie die folgende Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit`en Sie die Dateien in Ihr lokales Repository.
   Dies entspricht dem Unterschreiben der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt ist das Synchronisieren (`push`) Ihres lokalen Repos mit dem Remote-GitHub-Repo mit dem folgenden Befehl:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie in der Lage sein, zur Seite auf GitHub zurückzukehren, auf der Sie Ihr Repo erstellt haben, die Seite zu aktualisieren und zu sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen Add/Commit/Push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um eine Sicherungskopie Ihres "Vanille"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder zur Entwicklung) sein könnten, andere könnten es jedoch nicht sein. Sie können dies mit `git` in der Kommandozeile tun:

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
> Um mehr zu lernen, siehe [Lernen Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

> [!NOTE]
> MDN hat dieses Projekt von einer Reihe von Hosting-Services migriert, die keine kostenlosen Tarife mehr bieten.
> Wir haben uns entschieden, Railway für die aktuelle Hosting-Option zu nutzen, die einen kostengünstigen Hobby-Tarif bietet.
> Die meisten Dienste bieten ähnliche Bereitstellungsmethoden, sodass die untenstehenden Anweisungen Ihnen helfen sollten, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie es nicht müssen. Sich nicht um Server, Load Balancer, Reverse Proxies und so weiter kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway liegt ein [Fokus auf das Entwicklererlebnis für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es verfügt über einen vergleichsweise kostengünstigen [Hobby-Tarif](https://railway.com/pricing).
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieb gewinnen, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich Zeit nehmen zu bestimmen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch verstehen, wie diese gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und Umgebungen basierend auf der Verwendung von "common conventions" automatisch erkennen und installieren kann. Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json** Datei haben, und kann den Paketmanager, der für den Aufbau verwendet wird, aus der "lock"-Datei bestimmen. Wenn die Anwendung zum Beispiel die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ zur Installation der Pakete verwendet wird, während bei **yarn.lock** _yarn_ verwendet wird. Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten, die im Paketdatei als "build" und "start" benannt sind, und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind. Sie müssen nichts weiter für dieses Tutorial wissen, aber Sie können mehr über Optionen zur Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich unter Nutzung der in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellten Informationen selbst konfigurieren. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable erhalten. Der Datenbankdienst könnte von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und unter Verwendung eines speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tools. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch auf die Live-Seite hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und zu erhalten und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen auszuführen, die auch im Live-Projekt verwendet werden.

Das ist alles, was Sie benötigen, um die App auf Railway bereitzustellen. Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank, und testen den Railway-Client.

### Ein Railway-Konto erhalten

Um Railway zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Sie müssen möglicherweise zu Ihrer E-Mail wechseln und Ihr Konto verifizieren.
- Sie werden dann auf das Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die **Dashboard**-Option im oberen Menü der Website und klicken Sie dann auf die **Neues Projekt**-Schaltfläche:

![Railway-Website-Dashboard mit hervorgehobener neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, darunter auch die Option, ein Projekt aus einer Vorlage zu bereitцtellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und eine Anzahl von Datenbanken. Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Popup mit hervorgehobener Option „Von GitHub-Repo bereitstellen“](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<Benutzername>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos an, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm, wenn Sie die Auswahl der Bereitstellung für ein Projekt treffen](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt auf der Registerkarte "Deployments" anzeigen. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Dashboard zeigt die Deployments-Registerkarte für das bereitgestellte Projekt](railway_project_deploy.png)

Jetzt wählen Sie die _Einstellungen_-Registerkarte aus, dann scrollen Sie nach unten zum Abschnitt Domains und drücken Sie die **Domain generieren**-Schaltfläche.

![Railway-Projekteinstellungs-Registerkarte zeigt Schaltfläche zur Domain-Generierung](railway_project_generate_domain.png)

Damit wird die Site veröffentlicht und die Domain wird anstelle der Schaltfläche angezeigt, wie unten gezeigt.

![Railway-Projekteinstellungs-Registerkarte zeigt einen Link zur lokale Bibliothek-Site](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass wir keine Produktionsdatenbank angegeben haben, sodass die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet wird.

### Bereitstellung und Verbindung einer MongoDB-Datenbank

Anstatt unsere Entwicklungsdaten zu verwenden, erstellen wir als nächstes eine Produktions-MongoDB-Datenbank, die wir stattdessen verwenden. Wir erstellen die Datenbank als Teil des Railway-Anwendungsprojekts, obwohl nichts dagegen spricht, es in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genauso wie Sie es für die Entwicklungsdatenbank getan haben.

Auf Railway wählen Sie die **Dashboard**-Option im oberen Menü der Website und wählen dann Ihr Anwendungsprojekt aus. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann gewählt werden, um Variablen und andere Details des Dienstes einzurichten). Wählen Sie die **Neu**-Schaltfläche, mit der Dienste zu dem aktuellen Projekt hinzugefügt werden.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche ohne Datenbank](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie nach dem Typ des Dienstes gefragt werden, den Sie hinzufügen möchten:

![Railway-Popup zeigt Optionen für eine neuen Service, z.B. Datenbank, GitHub-Repo, leeren Service usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um mit dem Hinzufügen der Datenbank zu beginnen.

![Railway-Popup zeigt verschiedene Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereitstellen. Nach Abschluss sehen Sie nun sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen zur Datenbank anzuzeigen. Öffnen Sie die _Variablen_-Registerkarte und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungs-Bildschirm zeigt die URL, die zum Verbinden mit der Datenbank benötigt wird](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir sie mit einer Umgebungsvariablen zum Anwendungsprozess hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die _Variablen_-Registerkarte und drücken Sie die **Neue Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der die [Anwendung so konfiguriert](#datenbankkonfiguration) wurde, dass sie die Datenbankadresse liest). Dies wird etwa wie der Bildschirm unten aussehen.

![Railway-Website-Variablen-Bildschirm beim Hinzufügen der MONGODB_URI-Variable und -Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie Null Werte für Ihre Objektsummen anzeigen, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich an einen vorhergehenden Abschnitt, in dem wir [`NODE_ENV` auf 'production' setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies im gleichen Bildschirm tun, in dem wir die `MONGODB_URI` Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die _Variablen_-Registerkarte, in der Sie sehen werden, dass `MONGODB_URI` bereits definiert ist und drücken Sie die **Neue Variable**-Schaltfläche.

![Railway-Variablen-Registerkarte mit hervorgehobener neuer Variable-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable und `production` als Namen der Umgebung ein. Drücken Sie dann die **Hinzufügen**-Schaltfläche.

![Railway-Variablen-Registerkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Local Library-Anwendung ist jetzt eingerichtet und für den Produktionseinsatz konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen und es sollte auf die gleiche Weise funktionieren wie während der Entwicklung (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie in dem Abschnitt [Express Tutorial Teil 3: Nutzung einer Datenbank (mit Mongoose) Testing — einige Gegenstände erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Installieren Sie den Client

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [hier](https://docs.railway.com/guides/cli) angegebenen Anweisungen folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers zu einem zugeordneten Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen, die Sie auf dem Produktionsserver festgelegt haben.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie folgendes in einem Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den Befehl logs, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch der Reihe von Tutorials zum Arbeiten mit Express. Wir hoffen, dass sie nützlich für Sie waren. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) prüfen.

## Siehe auch

- [Produktionsbest Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumente)
- [Produktionsbest Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumente)
- Railway-Dokumente
  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Erste Schritte mit Heroku und Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumente)
  - [Bereitstellung von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumente)
  - [Heroku Node.js-Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumente)
  - [Optimierung der Concurrency von Node.js-Anwendungen](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
