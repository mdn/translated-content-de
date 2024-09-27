---
title: "Express-Tutorial Teil 7: Einsatz in der Produktion"
slug: Learn/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie wahrscheinlich auf einem öffentlichen Webserver installieren, damit sie vom Bibliothekspersonal und Mitgliedern über das Internet zugegriffen werden kann. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Hosting-Anbieter finden und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorialthemen abschließen, einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/forms">Express-Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo und wie Sie eine Express-App in der Produktion einsetzen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Website fertig ist (oder "fertig genug" für öffentliche Tests), müssen Sie sie an einem öffentlichen und zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Website an den lokalen Browser/das lokale Netzwerk zu übergeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsfähige Infrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Richtlinien zu Ihren Optionen für die Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.app/) Cloud-Hosting-Dienst installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf der Sie Ihre Website für den externen Verbrauch betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website aufgebaut ist.
- Webserver-Infrastruktur, möglicherweise mit einem Webserver, Reverse Proxy, Load Balancer usw.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Servercomputer könnte an Ihrem Standort sein und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu nutzen, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server wird normalerweise ein garantiertes Maß an Computerressourcen (z.B. CPU, RAM, Speicherspeicher usw.) und Internetkonnektivität zu einem bestimmten Preis bieten.

Diese Art von fernzugänglicher IT-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, umfangreichere Umgebungen auszuwählen, die vielleicht eine vollständige Node-Installation beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen nicht vertrauten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wenn Sie Teile des Systems aktualisieren müssen, Sie eine Vorstellung haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_) Angebots. Bei der Verwendung dieser Art von Hosting müssen Sie sich um den größten Teil Ihrer Produktionsumgebung (Server, Load Balancer usw.) nicht kümmern, da die Host-Plattform das für Sie übernimmt. Das macht das Deployment recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Serverinfrastrukturen.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS wählen, während andere die reduzierte Wartungsomumlauf und einfachere Skalierung von PaaS schätzen werden. Wenn Sie gerade anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, weshalb wir das in diesem Tutorial tun werden.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollten sie Anweisungen dazu bieten, wie man eine Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendung-Server, Reverse Proxy usw. einrichtet. Zum Beispiel gibt es viele Schritt-für-Schritt-Leitfäden für verschiedene Konfigurationen in den [Digital Ocean Node Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=node).

## Einen Hosting-Anbieter auswählen

Es gibt zahlreiche Hosting-Anbieter, von denen bekannt ist, dass sie entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) arbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Ebenen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienstleistungen und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, ist es ratsam, diese sowie andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie beschäftigt Ihre Seite wahrscheinlich sein wird und die Kosten der erforderlichen Daten- und Computerressourcen, um diese Nachfrage zu erfüllen.
- Grad der Unterstützung für horizontales Skalieren (Hinzufügen weiterer Maschinen) und vertikales Skalieren (Upgrade auf leistungsstärkere Maschinen) und die dadurch entstehenden Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren betreibt, und wo der Zugang vermutlich am schnellsten ist.
- Die historische Betriebszeit und Ausfallzeit des Hosts.
- Tools, die zur Verwaltung der Website bereitgestellt werden — sind sie einfach zu bedienen und sicher (z.B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisstufen oder nur eine geringe Menge an Speicher.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die "kostenfreie" Stufe, auf die Sie sich verlassen, im Laufe der Zeit ausläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen!

Die gute Nachricht, wenn Sie gerade erst anfangen, ist, dass es eine ganze Reihe von Websites gibt, die "kostenlose" Computerumgebungen bereitstellen, die für die Bewertung und das Testen bestimmt sind. Diese sind in der Regel ziemlich ressourcenbeschränkte/limitierte Umgebungen, und Sie sollten sich bewusst sein, dass sie nach einem Einführungszeitraum möglicherweise ablaufen oder andere Einschränkungen haben. Sie sind jedoch großartig zum Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und können einen leichten Übergang zu kostenpflichtigen Ressourcen bieten, wenn Ihre Seite belebter wird. Beliebte Optionen in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basis"- oder "Hobby"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Computerkräfte und weniger Einschränkungen bietet. [Railway](https://railway.app/), [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ preisgünstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit die wichtigste Überlegung sein wird.

## Ihre Website für die Veröffentlichung vorbereiten

Die Hauptpunkte, die bei der Veröffentlichung Ihrer Website zu berücksichtigen sind, sind Websicherheit und Leistung. Im Minimum möchten Sie die Datenbankkonfiguration ändern, damit Sie eine andere Datenbank für die Produktion verwenden und ihre Anmeldeinformationen sichern können, die Stack-Traces, die während der Entwicklung auf Fehlerseiten enthalten sind, entfernen, Ihr Logging bereinigen und die entsprechenden Header setzen, um viele häufige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Abschnitten beschreiben wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> In den Express-Dokumenten gibt es weitere nützliche Tipps— siehe [Produktionsbest-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktions-Best-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzelne Entwicklungsdatenbank verwendet, für die die Adresse und Anmeldeinformationen hart in **app.js** kodiert sind. Da die Entwicklungsdatenbank keine Informationen enthält, deren Offenlegung oder Beschädigung uns stören würde, besteht kein besonderes Risiko, diese Details preiszugeben. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerdaten, ist der Schutz Ihrer Datenbank-Anmeldeinformationen sehr wichtig.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als für die Entwicklung und auch die Anmeldeinformationen der Produktionsdatenbank vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele es tun), besteht eine Möglichkeit darin, den Server die Datenbank-URL von einer Umgebungsvariablen abrufen zu lassen. Unten ändern wir die LocalLibrary-Website, um den Datenbank-URI von einer OS-Umgebungsvariablen abzurufen, wenn sie definiert wurde, und andernfalls die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Es sieht etwa so aus:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenfolge aus einer Umgebungsvariablen namens `MONGODB_URI` abzurufen, falls sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere gängige Methode, die Anmeldeinformationen der Produktionsdatenbank vom Quellcode getrennt zu halten, ist das Lesen aus einer `.env`-Datei, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm [dotenv](https://www.npmjs.com/package/dotenv) Modul gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Neben der Generierung weniger ausführlicher Fehlermeldungen zwischenspeichert das Setzen der Variablen auf _production_ auch Ansichtsvorlagen und aus CSS-Erweiterungen generierte CSS-Dateien. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um das Dreifache verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, eine Umgebungsdatei oder das OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungssetup und nicht in Ihrer App vornehmen, aber wichtig genug, um hier erwähnt zu werden! Wir werden zeigen, wie dies für unser Hosting-Beispiel unten festgelegt ist.

### Ordnungsgemäßes Logging

Logging-Aufrufe können sich auf eine Website mit hohem Traffic auswirken. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z.B. Traffic verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge an Logging zu minimieren, die für Debugging-Zwecke hinzugefügt wurde.

Eine Möglichkeit, "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das es Ihnen ermöglicht, zu steuern, welches Logging durch Setzen einer Umgebungsvariable ausgeführt wird. Zum Beispiel zeigt der folgende Codeausschnitt, wie Sie "author" Logging einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Sie können dann ein bestimmtes Set von Logs aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariablen angeben. Sie können die Variablen anzeigen lassen, um author und book-Logs anzuzeigen, wie gezeigt (Jokerzeichen werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe zu `debug` können Logging ersetzen, das Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, wie sich dies auf das Logging auswirkt.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Logbibliothek wie _Winston_ oder _Bunyan_ verwenden. Für weitere Informationen zu diesem Thema siehe: [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Kompression für Antworten

Webserver können oft die HTTP-Antwort an einen Client komprimieren, wodurch die Zeit, die der Client für das Abrufen und Laden der Seite benötigt, erheblich reduziert wird. Das verwendete Kompressionsverfahren hängt von den Dekompressionsmethoden ab, die der Client nach eigenen Angaben im Antrag unterstützt (die Antwort wird unkomprimiert gesendet, wenn keine Kompressionsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Site mit [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die compression-Bibliothek wie gezeigt ein. Fügen Sie die compression-Bibliothek mit der Methode `use()` in die Middleware-Kette ein (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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
> Für eine Website mit hohem Traffic in Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um bekannte Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann entsprechende HTTP-Header setzen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [Dokumente](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und vor welchen Schwachstellen es schützt).

Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_ Bibliothek wie gezeigt ein. Fügen Sie dann das Modul mit der `use()` Methode in die Middleware-Kette ein.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um den _Unterbereich_ der sicherheitsbezogenen Header hinzuzufügen, der für die meisten Websites sinnvoll ist. In der [LocalLibrary-Basisschablone](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) inkludieren wir jedoch einige Bootstrap- und jQuery-Skripte. Diese verstoßen gegen die _Standard-_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) von helmet, die das Laden von länderübergreifenden Skripten nicht erlaubt. Um das Laden dieser Skripte zu erlauben, verändern wir die helmet Konfiguration so, dass sie CSP-Direktiven setzen, die das Laden von Skripten von den angegebenen Domains erlauben. Für Ihren eigenen Server können Sie spezifisch benötigte Header hinzufügen/deaktivieren, indem Sie den [Anleitungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie Ratenbegrenzung zu den API-Routen hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Site gestellt werden, wie etwa DDoS-Attacken, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das sich nicht wie erwartet verhält. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können, da Ihr Server dadurch langsamer werden kann, können auch Gebühren für den zusätzlichen Traffic anfallen. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen, die an eine bestimmte Route oder Gruppe von Routen gestellt werden können, zu begrenzen.

Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die express-rate-limit Bibliothek wie gezeigt ein. Fügen Sie das Modul mit der `use()` Methode in die Middleware-Kette ein.

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
> Drittanbieter-Dienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie einen fortgeschritteneren Schutz gegen Denial-of-Service oder andere Arten von Angriffen benötigen.

#### Legen Sie die Knoten-Version fest

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Einstiegspunktdatei zu ermitteln.

Die einzige wichtige Information, die aus unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Version von Node, die für die Entwicklung verwendet wurde, finden, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** wie gezeigt hinzu (unter Verwendung der Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit der gleichen Hauptversion zu verwenden oder eine aktuellere Version.

Bitte beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version bei verschiedenen Hosting-Services anzugeben, aber der **package.json** Ansatz wird weitgehend unterstützt.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Site erneut testen und sicherstellen, dass sie von keiner unserer Änderungen betroffen ist.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Hauptverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Site aus (siehe [Testen der Routen](/de/docs/Learn/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und prüfen Sie, ob die Site weiterhin wie erwartet funktioniert.

### Ein Anwendungs-Repository in GitHub erstellen

Viele Hosting-Services ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quell-Versionskontrollplattformen zu importieren und/oder zu synchronisieren. Dies kann den Einsatz und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek ein und verwenden das **git** Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub verwenden, um Ihren Quellcode zu verwalten!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools eine gute Softwareentwicklungspraktik ist, da es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekannt gutem Code" zu wechseln, wenn nötig!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder auf diesem Formular aus. Während diese nicht zwingend notwendig sind, werden sie dennoch dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_), und eine Beschreibung (z.B. "Local Library Website geschrieben in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlliste.
   - Aktivieren Sie **Dieses Repository mit einem README initialisieren**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _alle_ Quellcodedaten — einschließlich Ihres Datenbankbenutzernamens und -passworts — für jedermann im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen hartkodiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen Zugriff auf den Quellcode zu gewähren.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf den grünen **Clone or download** Button auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfeld, das erscheint. Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Da das Repository ("Repo") jetzt auf GitHub erstellt ist, möchten wir es nun auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Versionen für verschiedene Plattformen finden Sie [hier](https://git-scm.com/downloads)).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit dem oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Dann kopieren Sie Ihre Anwendungs-Quellen in den Repo-Ordner, machen sie mit _git_ zum Teil des Repos, und laden sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (mit Ausnahme von **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und verwenden Sie den Befehl `add`, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die Sie `commit`ten möchten, korrekt sind (Sie möchten Quellcodedateien, keine Binärdateien, temporären Dateien usw. einbeziehen). Es sollte ein wenig wie die untenstehende Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit`ten Sie die Dateien zu Ihrem lokalen Repo. Dies ist das Äquivalent zum Unterzeichnen der Änderungen und zum offiziellen Teil des lokalen Repos machen.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht verändert. Der letzte Schritt ist, Ihr lokales Repo mit dem Remote-GitHub-Repo zu synchronisieren (`push`), indem Sie den folgenden Befehl verwenden:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zurück zur Seite auf GitHub gehen können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren, und sehen, dass nun Ihre gesamte Anwendung hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen add/commit/push Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen, nützlich für die Bereitstellung auf jedem Hosting-Service (oder für die Entwicklung) sein könnten, andere möglicherweise nicht. Sie können dies mit `git` an der Befehlszeile tun:

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
> Git ist unglaublich mächtig! Um mehr zu erfahren, siehe [Lernen von Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Glitch](https://glitch.com/) gehostet wird.

### Warum Glitch?

Wir entscheiden uns aus mehreren Gründen für die Verwendung von Glitch:

- Glitch hat einen [kostenlosen Starter-Plan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, jedoch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie es nicht müssen. Nicht über Server, Load Balancer, Reverse-Proxies usw. nachdenken zu müssen, macht den Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Glitch lernen, sind übertragbar.
- Die Service- und Pläneinschränkungen beeinträchtigen uns nicht wirklich dabei, Glitch für das Tutorial zu verwenden. Beispielsweise:

  - Der Starter-Plan bietet nur 1000 "Projekstunden" pro Monat, die monatlich zurückgesetzt werden. Dies wird verwendet, wenn Sie die Site aktiv bearbeiten oder wenn jemand darauf zugreift. Wenn niemand auf die Site zugreift oder sie bearbeitet, wird sie in den Ruhezustand versetzt.
  - Die Starter-Plattform-Umgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz. Es gibt mehr als genug für das Tutorial, insbesondere weil unsere Datenbank woanders gehostet ist.
  - Eigene Domains werden derzeit nicht gut unterstützt (zum Zeitpunkt des Schreibens).
  - Weitere Einschränkungen finden Sie in der [Glitch technischen Einschränkungen Seite](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions).

Während Glitch für das Hosting dieser Demonstration geeignet ist, sollten Sie sich Zeit nehmen, um festzustellen, ob es [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Schnittstelle, in der Sie Projekte aus Starter-Vorlagen erstellen oder aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können. Während Sie Änderungen vornehmen, wird das Projekt in einem eigenen isolierten und unabhängigen virtualisierten Container erstellt und ausgeführt.

Wie das alles "unter der Haube" funktioniert, ist ein Rätsel — Glitch sagt es nicht. Was klar ist, ist, dass so lange Sie eine ziemlich standardisierte nodejs Web-Anwendung erstellen (zum Beispiel die **package.json**-Datei für Ihre Abhängigkeiten verwenden), und nicht mehr Ressourcen verbrauchen als in den [technischen Einschränkungen](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) aufgeführt sind, sollte Ihre Anwendung "einfach funktionieren".

Sobald die Anwendung läuft, kann sie für die Produktion mit [privaten Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden. Die in den geheimen Daten enthaltenen Werte werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem früheren Abschnitt erinnern, die Methode ist, mit der wir unsere Anwendung konfiguriert haben, um die Datenbank-URL zu erhalten. Beachten Sie, dass die Variablen _geheim_ sind: die `.env` wird nicht in Ihr GitHub-Repository aufgenommen.

Die Glitch-Bearbeitungsansicht bietet auch _Terminal_-Zugriff auf die Webumgebungen-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als ob sie auf Ihrem lokalen Rechner laufen würde.

Das ist alles,

Sie brauchen einen Einblick, um loszulegen. Als nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Erstellen eines Glitch-Kontos

Um Glitch nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Sign up**-Schaltfläche in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Sie werden dann im Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Fehlerbehebung bei der Node.js-Version

Anbieter von Hostingdiensten unterstützen üblicherweise einige Hauptversionen neuerer Node.js-Releases. Wenn die in Ihrer `package.json`-Datei angegebene exakte "Minor"-Version nicht unterstützt wird, wird normalerweise auf die nächstgelegene unterstützte Version zurückgegriffen (und oft funktioniert dies einfach).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16. Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die Version in Ihrer `package.json`-Datei wie gezeigt verringern. Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zu aktualisieren und es in Zukunft besser auf dem neuesten Stand zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — möglicherweise gibt es diesen Versionsbeschränkung zur Zeit, in der Sie diesen Text lesen, nicht mehr. Anstatt die `node`-Version zu verringern, können Sie Ihr Projekt hochladen, um zu sehen, ob es gebaut wird. Wenn Fehler auftreten und Ihre Anwendung nicht geladen wird, können Sie versuchen, die `node`-Version in Ihrer `package.json` im Glitch-Editor auf `>=v16` zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch prüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellung auf Glitch von GitHub

Als nächstes importieren wir das Bibliotheksprojekt aus GitHub. Wählen Sie zuerst die **Dashboard**-Option im obersten Menü der Seite und dann die **Neues Projekt**-Schaltfläche aus. Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import von GitHub**.

![Glitch-Websitedashboard mit einer neuen Projektschaltfläche und einem Popup-Menü, das die Option "Import von GitHub" anzeigt](glitch_new_project_import_github.png)

Ein Popup wird angezeigt. Geben Sie die URL Ihres GitHub-Repositories für die Bibliothek in das Popup ein und drücken Sie **OK**. Unten haben wir das Repo für das durchgearbeitete Projekt eingegeben.

![Glitch-Popup mit der Eingabe-URL des GitHub-Repos zum Importieren](glitch_new_project_github_repo_url.png)

Glitch wird dann das Projekt importieren und Fortschrittsmeldungen anzeigen. Nach Abschluss wird der Editor für das neue Projekt angezeigt, wie unten gezeigt.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Site-URL erhalten, indem Sie die **Teilen**-Schaltfläche auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie eine neue Browser-Registerkarte und kopieren Sie den Link zur Live-Site in die Adressleiste. Die lokale Bibliotheksseite sollte geöffnet werden und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import aus GitHub. Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und > Ihr Projekt synchronisiert zu halten.

### Verwenden einer Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten. Während Glitch nur SQLite-Datenbanken hostet (und wir so eingerichtet sind, dass wir MongoDB verwenden), bieten viele andere Seiten MongoDB-Datenbanken als Service an.

Eine Option besteht darin, die [Einrichtung der MongoDB-Datenbank](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) Anweisungen aus einem früheren Teil des Tutorials zu befolgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Editoransicht des Projekts. Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein. Die Webseite wird aktualisiert, wenn Sie die Werte in den Editor eingeben.

![Glitch-.env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt. Sie ist für [private Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) vorgesehen und wurde beim Import zu Glitch automatisch erstellt. Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorherigen Abschnitt, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir tun dies in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die lokale Bibliotheksanwendung ist jetzt eingerichtet und für den Produktionseinsatz konfiguriert. Sie können Daten über die Benutzeroberfläche der Website hinzufügen, und sie sollte wie während der Entwicklung funktionieren (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Testdaten hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Express-Apps auf Glitch debuggen

Glitch ermöglicht effektives Debugging. Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Protokoll-Schaltfläche unten in der Editoransicht, um Protokollinformationen von Ihrem Server anzuzeigen, z.B. Konsolenprotokollausgaben.
- Wählen Sie die Terminal-Schaltfläche unten in der Editoransicht, um ein Terminal in der Hosting-Umgebung zu öffnen. Sie können es verwenden, um Befehle und Tools in der Umgebung auszuführen. Beispielsweise könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktive Fehlersuche in VSCode mit der _GLITCH-Erweiterung für VSCode_.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie die _LocalLibrary_ auf [Railway](https://railway.app/) installiert wird.

### Warum Railway?

> [!WARNING]
> Railway hat keinen völlig kostenlosen Starter-Tier mehr. Wir haben diese Anweisungen beibehalten, weil Railway einige großartige Funktionen hat und eine bessere Option für einige Benutzer sein wird.

Railway ist aus verschiedenen Gründen eine attraktive Hosting-Option:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie es nicht müssen. Nicht über Server, Load Balancer, Reverse Proxies usw. nachdenken zu müssen, macht den Einstieg viel einfacher.
- Railway legt den Schwerpunkt auf eine [Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.app/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.app/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich Zeit nehmen, um festzustellen, ob Railway [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungsframeworks und Umgebungen basierend auf ihrer Verwendung von "common conventions" automatisch erkennen und installieren kann. Railway erkennt z.B. Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den verwendeten Paketmanager anhand der "Lock"-Datei bestimmen. Wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass es _npm_ verwendet werden soll, um die Pakete zu installieren, während es bei **yarn.lock** weiß, dass es _yarn_ verwenden soll. Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten mit den Namen "build" und "start" in der Paketdatei und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind. Sie müssen nichts weiter für dieses Tutorial wissen, können aber mehr über Optionen zur Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich selbst mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.app/guides/variables) bereitgestellt werden. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable erhalten. Der Datenbankdienst selbst kann entweder von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und verwenden ein spezielles [Befehlszeilen-Interface (CLI)](https://docs.railway.app/guides/cli) Werkzeug. Mit der CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochladen, die Protokolle des laufenden Prozesses inspizieren, Konfigurationsvariablen setzen und abrufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit der CLI Ihr lokales Projekt mit den gleichen Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie wissen müssen, um die App auf Railway einzusetzen. Als nächstes richten Sie ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren die Railway-Client aus.

### Erstellen eines Railway-Kontos

Um Railway nutzen zu können, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.app](https://railway.app/) und klicken Sie auf den **Login** Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann im Railway.app Dashboard eingeloggt: <https://railway.app/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes richten wir Railway zur Bereitstellung unserer Bibliothek von GitHub ein. Wählen Sie zuerst die **Dashboard**-Option im obersten Menü der Seite und dann die **Neues Projekt**-Schaltflächen:

![Railway-Websitedashboard mit neuer Projektschaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zuerst in Ihrem GitHub-Konto zu erstellen und eine Anzahl von Datenbanken. Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Popup, das Bereitstellungsoptionen mit hervorgehobener Option „Von GitHub-Repo bereitstellen“ zeigt](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während des Setups mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup, das GitHub-Repos zeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** wählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt und stellt es bereit und zeigt den Fortschritt auf der Registerkarte Bereitstellungen an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard zeigt die Registerkarte Bereitstellungen für das bereitgestellte Projekt an](railway_project_deploy.png)

Wählen Sie jetzt die Registerkarte _Einstellungen_, scrollen Sie dann zum Abschnitt Domains und drücken Sie den **Domain generieren**-Button.

![Einstellungenregisterkarte für Railway-Projekt mit Schaltfläche zur Generierung einer Domain](railway_project_generate_domain.png)

Dies wird die Website veröffentlichen und die Domain anstelle des Buttons anzeigen, wie unten gezeigt.

![Einstellungenregisterkarte für Railway-Projekt mit einem Link zur lokalen Bibliotheksseite](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass sich die lokale Bibliothek öffnet, da wir keine Produktionsdatenbank angegeben haben und Ihre Entwicklungsdaten verwendet werden.

### Bereitstellen und Verbinden einer MongoDB-Datenbank

Anstatt unsere Entwicklungsdaten zu verwenden, erstellen wir als nächstes eine Produktions-MongoDB-Datenbank, um sie stattdessen zu nutzen. Wir erstellen die Datenbank als Teil des Railway-Anwendungsprojekts, obwohl es nichts dagegen spricht, es in einem separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_ Datenbank für Produktionsdaten zu verwenden, genauso wie für die Entwicklungsdatenbank.

Wählen Sie auf Railway die **Dashboard**-Option im obersten Menü der Seite und dann Ihr Anwendungsprojekt aus. Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes zu setzen). Wählen Sie die **Neu**-Schaltfläche, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway project with new service button highlighted](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie nach dem Typ des hinzuzufügenden Dienstes gefragt werden:

![Railway-Popup zeigt Optionen für neuen Dienst wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um die Datenbank hinzuzufügen

![Railway-Popup zeigt verschiedene auswählbare Datenbanken: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im selben Projekt bereit. Bei Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway project with application and database services](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst, um Informationen über die Datenbank anzuzeigen. Öffnen Sie die Registerkarte _Variablen_ und kopieren Sie die "Mongo_URL" (das ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm zeigt die URL, die benötigt wird, um sich mit der Datenbank zu verbinden](railway_mongodb_connect.png)

Um dies der Bibliotheksanwendung zugänglich zu machen, müssen wir sie dem Anwendungsprozess mit einer Umgebungsvariable hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variablen_ und drücken Sie den **Neue Variable**-Button.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies sieht ähnlich wie der unten gezeigte Bildschirm aus.

![Railway-Website-Variablenbildschirm mit der MONGODB_URI-Variable und der Adresse](railway_variables_database_url.png)

Drücken Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie nun die Startseite überprüfen, sollte es Nullwerte für Ihre Objektzahlen anzeigen, da die oben genannten Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorherigen Abschnitt, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies im gleichen Bildschirm tun, auf dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variablen_, auf der Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie den **Neue Variable**-Button.

![Railway-Variablenregisterkarte mit hervorgehobener neuer Variablen-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als den Namen der neuen Variablen und `production` als den Namen der Umgebung ein. Dann drücken Sie die **Hinzufügen**-Schaltfläche.

![Railway-Variablenregisterkarte mit neuer NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist jetzt eingerichtet und für den Produktionseinsatz konfiguriert. Sie können Daten über die Benutzeroberfläche der Website hinzufügen, und sie sollte auf die gleiche Weise wie während der Entwicklung funktionieren (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Testdaten hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Installieren des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.app/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen beinhalten das Bereitstellen des aktuellen Verzeichnisses Ihres Rechners für ein assoziiertes Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das Ausführen Ihres Projekts lokal mit den gleichen Einstellungen wie beim Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das Folgende in ein Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Klient bietet den Logs-Befehl, um die letzten Protokolle anzuzeigen (ein vollständigeres Protokoll ist für jedes Projekt auf der Website verfügbar):

```bash
railway logs
```

## Zusammenfassung

Damit ist das Ende dieses Tutorials zum Einrichten von Express-Apps in der Produktion erreicht, und auch die Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie diese nützlich fanden. Sie können eine vollständig durchgearbeite Version des [Quellcodes hier auf GitHub finden](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktions-Best-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation

  - [CLI](https://docs.railway.app/guides/cli)

- Digital Ocean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Erste Schritte mit Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellung von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku-Node.js-Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfig-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
