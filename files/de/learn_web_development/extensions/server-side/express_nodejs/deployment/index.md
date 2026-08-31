---
title: "Express Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Da Sie nun eine Beispiel-Website mit Express erstellt und getestet haben, ist es an der Zeit, diese auf einen Webserver zu bereitstellen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie ein Express-Projekt gehostet wird, und skizziert, was Sie benötigen, um es für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Themen des Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wo und wie Sie eine Express-Anwendung in Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder „genug“ fertig, um sie öffentlich zu testen), müssen Sie sie an einem öffentlicheren und zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, bei der Express/Node als Webserver verwendet wird, um Ihre Website an den lokalen Browser/das Netzwerk zu übertragen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Eine Umgebung für das Hosting der Express-Anwendung auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionstaugliche Infrastruktur für das Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-Anwendung für die Produktion vorzubereiten, und ein praktisches Beispiel, wie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.com/) installiert wird.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Ihre Website für den externen Gebrauch betrieben wird. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Laufzeitumgebung der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxys, Load Balancers usw.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und durch eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel üblicher, einen Computer zu verwenden, der „in der Cloud“ gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise auf einem „virtuellen“ Computer) in den Rechenzentren Ihres Hostingunternehmens ausgeführt wird. Der entfernte Server bietet normalerweise eine garantierte Ressourcenzuweisung (z.B. CPU, RAM, Speicher etc.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zum Vorinstallieren eines bestimmten Betriebssystems, auf das Sie dann die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, funktionsreichere Umgebungen auszuwählen, die möglicherweise eine vollständige Node-Installation umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website erleichtern, da sie die benötigte Konfiguration reduzieren, aber die verfügbaren Optionen Sie möglicherweise auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und bei der Systemaufrüstung eine Vorstellung davon haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Beim Einsatz dieser Art von Hosting müssen Sie sich keine Sorgen um den Großteil Ihrer Produktionsumgebung (Server, Load Balancer usw.) machen, da die Host-Plattform diese für Sie verwaltet. Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung und keine andere Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS wählen, während andere die reduzierte Wartungslast und den geringeren Aufwand für die Skalierung von PaaS zu schätzen wissen. Wenn Sie gerade erst angefangen haben, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, daher werden wir dies in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter auswählen, sollten Anleitungen bereitgestellt werden, die zeigen, wie Sie eine Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. einrichten. Beispielsweise gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekanntermaßen entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) funktionieren. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Stufen von Computer- und Netzwerkressourcen zu unterschiedlichen Preisen an.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und deren Dienstleistungen und Preise können sich im Laufe der Zeit ändern. Während wir im Folgenden einige Optionen einführen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Website wahrscheinlich besucht sein wird und die Kosten für Daten und Computerressourcen, die zur Deckung dieser Nachfrage erforderlich sind.
- Das Maß an Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Die Standorte, an denen der Lieferant Rechenzentren hat und somit der Zugang wahrscheinlich am schnellsten ist.
- Die historische Zuverlässigkeit und Ausfallzeiten des Hosts.
- Vom Host bereitgestellte Werkzeuge zur Verwaltung der Website – sind sie einfach zu verwenden und sicher (z. B. SFTP vs. FTP).
- Eingebaute Rahmen zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preisstufen nur eine bestimmte Anzahl an „Live-Zeit“ Stunden an oder bieten nur eine geringe Speichermenge.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate an, die Sie sonst bezahlen müssten.
- Ob die „kostenlose“ Stufe, auf die Sie sich verlassen, im Laufe der Zeit verfällt und ob die Kosten für die Migration in eine teurere Stufe bedeuten, dass Sie von Anfang an besser eine andere Dienstleistung in Anspruch genommen hätten!

Die gute Nachricht, wenn Sie beginnen, ist, dass es durchaus einige Websites gibt, die „kostenlose“ Computerumgebungen anbieten, die für Evaluierung und Testen gedacht sind.
Diese sind normalerweise ressourcenarme/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie nach einem Einführungszeitraum möglicherweise ablaufen oder andere Einschränkungen haben.
Sie sind jedoch großartig zum Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und können eine einfache Migration zu mehr Ressourcen gegen Bezahlung ermöglichen, wenn Ihre Website stärker frequentiert wird.
Beliebte Wahlmöglichkeiten in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine "Basis-" oder "Hobby"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ günstige Basiscomputing-Kategorie haben (im Bereich von 5 bis 10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, kann es sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website für die Veröffentlichung vorbereiten

Die wichtigsten Dinge, die beim Veröffentlichen Ihrer Website zu beachten sind, sind Websicherheit und Leistung.
Zumindest möchten Sie die Datenbankkonfiguration so ändern, dass für die Produktion eine andere Datenbank verwendet werden kann, die Anmeldeinformationen geschützt werden, die Stack-Traces, die auf Fehlerseiten während der Entwicklung enthalten sind, entfernen, Ihr Protokolling aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumentationen — siehe [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance/) und [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security/).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzige Entwicklungsdatenbank verwendet, für die die Adresse und die Anmeldedaten [im **bin/www** fest codiert sind](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#connect_to_mongodb). Da die Entwicklungsdatenbank keine Informationen enthält, die wir nicht offenlegen oder korrumpieren möchten, besteht kein besonderes Risiko, diese Details preiszugeben. Wenn Sie jedoch mit realen Daten arbeiten, insbesondere mit persönlichen Nutzerinformationen, ist es sehr wichtig, Ihre Datenbankanmeldeinformationen zu schützen.

Aus diesem Grund möchten wir für die Produktion eine andere Datenbank verwenden als für die Entwicklung und auch die Produktionsdatenbank-Anmeldeinformationen vom Quellcode getrennt halten, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einrichtung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie dies viele tun), ist eine Möglichkeit, dies zu tun, den Server die Datenbank-URL aus einer Umgebungsvariable beziehen zu lassen.
Im Folgenden ändern wir die LocalLibrary-Website so, dass sie die Datenbank-URI von einer Betriebssystem-Umgebungsvariable bezieht, falls sie definiert wurde, und sonst die Entwicklungsdatenbank-URL verwendet.

Öffnen Sie **bin/www** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable festlegt.
Es wird etwa so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen mit dem Namen `MONGODB_URI` zu beziehen, falls dieser gesetzt ist (verwenden Sie Ihre eigene Datenbank-URL statt des unten stehenden Platzhalters).

```js
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
```

> [!NOTE]
> Eine andere übliche Methode, um Produktionsdatenbank-Anmeldeinformationen vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat in das Dateisystem bereitgestellt wird (zum Beispiel könnten sie gelesen werden, indem das Modul [dotenv](https://www.npmjs.com/package/dotenv) von npm genutzt wird).

### NODE_ENV auf 'production' setzen

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die `NODE_ENV` Umgebungsvariable auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Neben der Generierung weniger ausführlicher Fehlermeldungen führt das Setzen der Variable auf _production_ dazu, dass Ansichts-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, zwischengespeichert werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Anwendungsleistung um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch die Verwendung von `export`, einer Umgebungsdatei oder des Betriebssystem-Initialisierungssystems vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrer Umgebungs-Konfiguration vornehmen, und nicht in Ihrer App, aber es ist wichtig genug, um hier erwähnt zu werden! Wir zeigen unten, wie dies für unser Hosting-Beispiel gesetzt wird.

### Angemessen protokollieren

Protokollierungsaufrufe können Auswirkungen auf eine stark frequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. das Nachverfolgen des Verkehrs oder das Protokollieren von API-Aufrufen), aber Sie sollten versuchen, die Menge an Protokollierung, die für Debugging-Zwecke hinzugefügt wird, zu minimieren.

Eine Möglichkeit, die „Debug“-Protokollierung in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, mit dem Sie steuern können, welche Protokollierung durch das Setzen einer Umgebungsvariablen durchgeführt wird.
Das folgende Codefragment zeigt beispielsweise, wie Sie die „author“-Protokollierung einrichten könnten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Protokolle dieses Objekts angezeigt.

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

Sie können dann eine bestimmte Gruppe von Protokollen aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG` Umgebungsvariable angeben.
Sie können die Variablen zum Anzeigen von Autoren- und Buchprotokollen wie gezeigt setzen (Wildcards werden auch unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe zu `debug` können die Protokollierung ersetzen, die Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()` Aufrufe in Ihrem Code mit Protokollierung über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie die Protokollierung in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, welche Auswirkungen dies auf die Protokollierung hat.

Wenn Sie die Website-Aktivität protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Für weitere Informationen zu diesem Thema siehe: [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance/).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können häufig die HTTP-Antwort komprimieren, die an einen Client gesendet wird, wodurch die Zeit, die benötigt wird, damit der Client die Seite abruft und lädt, erheblich verkürzt wird. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client im Anforderungs-Header unterstützt (Die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Site durch die Verwendung von [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie diese im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die compression-Bibliothek ein. Fügen Sie die Komprimierungsbibliothek mit der `use()`-Methode in die Middleware-Kette ein (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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
> Für eine hoch frequentierte Website in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet zum Schutz vor bekannten Schwachstellen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die helfen, Ihre App vor bekannten Web-Schwachstellen zu schützen (siehe die [Dokumentation](https://helmet.js.org/) für weitere Informationen darüber, welche Header gesetzt werden und welche Schwachstellen geschützt werden).

Installieren Sie diese im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek ein.
Fügen Sie dann das Modul mit der `use()`-Methode in die Middleware-Kette ein.

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

Normalerweise könnten wir einfach `app.use(helmet());` einfügen, um den _Teil_ der sicherheitsbezogenen Header hinzuzufügen, der für die meisten Sites sinnvoll ist.
Da wir jedoch im [LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) einige Bootstrap-Skripte enthalten, verstoßen diese gegen die _Standard_ [Inhalts-Sicherheitsrichtlinie (CSP)](/de/docs/Web/HTTP/Guides/CSP) von helmet, die das Laden von Cross-Site-Skripten nicht erlaubt.
Um das Laden dieser Skripte zu ermöglichen, modifizieren wir die helmet-Konfiguration, sodass sie die CSP-Direktiven setzt, um das Laden von Skripten von den angegebenen Domains zuzulassen.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen oder deaktivieren, indem Sie den [Anleitungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Begrenzen Sie die Anfragerate der API-Routen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, mit dem die Anzahl der wiederholten Anfragen an APIs und Endpunkte begrenzt werden kann.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden könnten, wie z.B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder selbst ein Client oder Skript, das sich nicht wie erwartet verhält.
Abgesehen von den Leistungsproblemen, die durch zu viele Anfragen auftreten können und die den Server verlangsamen, können Ihnen auch zusätzliche Kosten für den erhöhten Traffic entstehen.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Gruppe von Routen gestellt werden kann.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek ein.
Fügen Sie dann das Modul mit der `use()`-Methode in die Middleware-Kette ein.

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

Der obige Befehl begrenzt alle Anfragen auf 20 pro Minute (dies kann je nach Bedarf geändert werden).

> [!NOTE]
> Dritte Dienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie einen erweiterten Schutz gegen Denial-of-Service oder andere Arten von Angriffen benötigen.

#### Setzen Sie die Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Abhängigkeiten und die Startdatei der Anwendung zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die von der Bibliothek benötigte Node-Version.
Sie können die Version von Node erkennen, die für die Entwicklung verwendet wurde, indem Sie den folgenden Befehl im Terminal eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Informationen als **engines > node** hinzu, wie gezeigt (verwenden Sie die Versionsnummer Ihres Systems).

```json
{
  "engines": {
    "node": ">=22.0.0"
  }
}
```

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es auf verschiedenen Hosting-Diensten möglicherweise andere Möglichkeiten gibt, die Node-Version zu spezifizieren, aber die **package.json**-Methode wird weitgehend unterstützt.

#### Abhängigkeiten holen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Site erneut testen und sicherstellen, dass sie durch keine unserer Änderungen betroffen wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Starten Sie jetzt die Website (siehe [Routentests](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob die Website weiterhin wie erwartet funktioniert.

### Erstellen eines Anwendungs-Repositorys in GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Plattformen zur Quellverwaltung zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und -Repository für die Bibliothek ein und verwenden das **Git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Tools zur Quellcodeverwaltung eine gute Softwareentwicklungspraxis ist, da sie es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und „bekannt gutem Code“ zu wechseln, wenn Sie es müssen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie im oberen Menü auf **+** und wählen **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Auch wenn sie nicht zwingend erforderlich sind, werden sie stark empfohlen.
   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (wie „Local Library-Website geschrieben in Express“).
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahl-Liste.
   - Wählen Sie in der _Add license_ Auswahl-Liste Ihre bevorzugte Lizenz aus.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugriff „Öffentlich“ macht _alle_ Quellcodes — einschließlich Ihres Datenbank-Benutzernamens und Passworts — für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keiner der Anmeldeinformationen fest codiert ist.
   >
   > Wählen Sie andernfalls die Option „Privat“, um nur ausgewählten Personen den Zugriff auf den Quellcode zu ermöglichen.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf die grüne **Clone or download**-Schaltfläche auf Ihrer neuen Repository-Seite.
6. Kopieren Sie die URL aus dem Textfeld im Dialogfeld, das erscheint.
   Wenn Sie den Repository-Namen „express-locallibrary-tutorial“ verwendet haben, sollte die URL etwas Ähnliches sein wie: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Da das Repository („Repo“) in GitHub erstellt wurde, möchten wir es jetzt auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads/)).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Dann kopieren Sie Ihre Anwendungsquelldateien in den Repo-Ordner, machen sie mit _git_ zu einem Teil des Repos und laden sie zu GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die bei Bedarf von npm abgerufen werden sollten).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und verwenden Sie den Befehl `add`, um alle Dateien zu Git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den Befehl `status`, um zu überprüfen, dass alle Dateien, die Sie `commit` wollen, korrekt sind (Sie möchten Quelldateien, nicht Binärdateien, temporäre Dateien usw. einfügen).
   Es sollte ungefähr so aussehen wie die folgende Liste.

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
   Dies entspricht dem Verabschieden der Änderungen und dem Erstellen eines offiziellen Teils des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mithilfe des folgenden Befehls in das remote GitHub-Repo zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zu der Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und feststellen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo aktualisieren, während sich Dateien ändern, indem Sie diesen Add/Commit/Push-Zyklus verwenden.

Dies ist ein guter Punkt, um ein Backup Ihres „Vanilla“-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hostingdienst nützlich sein könnten (oder für die Entwicklung), andere möglicherweise nicht.
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
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

> [!NOTE]
> MDN hat dieses Projekt von einer Reihe von Hosting-Diensten migriert, die keine freien Stufen mehr anbieten.
> Wir haben uns entschieden, Railway als aktuelle Hosting-Option zu verwenden, die eine günstige Hobby-Stufe hat.
> Die meisten Dienste haben ähnliche Bereitstellungsmethoden, sodass die nachstehenden Anweisungen Ihnen helfen sollten, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie das nicht müssen.
  Da Sie sich nicht um Server, Lastverteiler, Reverse-Proxies usw. kümmern müssen, ist der Einstieg viel einfacher.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar.
  Während Railway einige hervorragende neue Funktionen bietet, verwenden viele andere beliebte Hosting-Dienste ähnliche Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es bietet eine vergleichbar günstige [Hobby-Stufe](https://railway.com/pricing).
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersagbar, und die Skalierung Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, zu bestimmen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container betrieben.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten zu konfigurieren, und auch verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und Umgebungen basierend auf ihrer Nutzung von „gemeinsamen Konventionen“ automatisch erkennen und installieren kann.
Railway erkennt beispielsweise Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den verwendeten Paketmanager zum Bauen aus der „Lock“-Datei bestimmen.
Wenn die Anwendung beispielsweise die Datei **package-lock.json** enthält, weiß Railway, dass npm verwendet werden soll, um die Pakete zu installieren, während es bei **yarn.lock** weiß, dass yarn verwendet werden soll.
Nachdem alle Abhängigkeiten installiert wurden, durchsucht Railway die Skripte nach "build" und "start" im Paket, um damit den Code zu bauen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind.
> Für dieses Tutorial müssen Sie nichts anderes wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich mit den in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellten Informationen konfigurieren.
Eine Anwendung, die eine Datenbank verwendet, muss beispielsweise die Adresse über eine Variable abfragen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Site und verwenden ein spezielles [Befehlszeilenschnittstellen (CLI)](https://docs.railway.com/cli) Tool.
Mit der CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository von dem lokalen Branch auf die Live-Site hochladen, die Protokolle des laufenden Prozesses inspizieren, Konfigurationsvariablen setzen und abrufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie für die Bereitstellung der App auf Railway wissen müssen.
Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Ein Railway-Konto einrichten

Um Railway zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link im oberen Menü.
- Wählen Sie im Popup GitHub, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie Ihre E-Mail überprüfen und Ihr Konto verifizieren.
- Sie werden dann in das Railway.com Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellen auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Zuerst wählen Sie die Option **Dashboard** aus dem oberen Menü der Website und dann die Schaltfläche **New Project**:

![Railway-Website-Dashboard mit hervorgehobener Schaltfläche für ein neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wird, und einer Reihe von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup zeigt Bereitstellungsoptionen mit hervorgehobener Option "Deploy from GitHub repo"](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<benutzername>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt und stellt es bereit, wobei der Fortschritt auf der Bereitstellungsseite angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten dargestellten.

![Railway-Dashboard, das den Reiter "Bereitstellungen" für das bereitgestellte Projekt zeigt](railway_project_deploy.png)

Wählen Sie nun den Reiter _Settings_, scrollen Sie dann nach unten zum Abschnitt Domains und drücken Sie die Schaltfläche **Generate Domain**.

![Railway Projekteinstellungen-Tab, zeigt Schaltfläche zur Generierung einer Domäne](railway_project_generate_domain.png)

Dies wird die Seite veröffentlichen und die Domäne anstelle der Schaltfläche anzeigen, wie unten dargestellt.

![Railway Projekt-Einstellungen-Tab mit Link zur lokalen Bibliotheksseite](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen.
Da wir keine Produktionsdatenbank angegeben haben, wird die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, erstellen wir als Nächstes eine Produktions-MongoDB-Datenbank zur Verwendung.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl es nichts gibt, was Sie davon abhält, sie in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genauso wie für die Entwicklungsdatenbank.

In Railway wählen Sie die Option **Dashboard** aus dem oberen Menü der Website und dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Wählen Sie die Schaltfläche **New**, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche für neuen Dienst](railway_project_open_no_database.png)

Wählen Sie **Database** aus, wenn Sie aufgefordert werden, den Diensttyp hinzuzufügen:

![Railway-Popup zeigt Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB** aus, um mit dem Hinzufügen der Datenbank zu beginnen.

![Railway-Popup zeigt verschiedene wählbare Datenbanken: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbank-Dienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbank-Diensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie die Registerkarte _Variables_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm zeigt die zur Verbindung mit der Datenbank benötigte URL](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es mit einer Umgebungsvariablen zum Anwendungsprozess hinzufügen.
Öffnen Sie zunächst den Anwendungsdienst.
Dann wählen Sie die Registerkarte _Variables_ und drücken die Schaltfläche **New Variable**.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen).
Dies wird ungefähr so aussehen wie auf dem folgenden Bildschirm gezeigt.

![Railway-Website-Variables-Bildschirm beim Hinzufügen der MONGODB_URI-Variable und -Adresse](railway_variables_database_url.png)

Wählen Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie null Werte für Ihre Objektanzahl anzeigen, da wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich an den vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Dies können wir auf dem gleichen Bildschirm vornehmen wie die Definition der `MONGODB_URI`-Variable.

Öffnen Sie den Anwendungsdienst.
Dann wählen Sie die Registerkarte _Variables_, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken die Schaltfläche **New Variable**.

![Railway-Variablen-Register mit hervorgehobener Schaltfläche "New Variable"](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable und `production` als Umgebung ein.
Dann drücken Sie die **Add**-Taste.

![Railway-Variablen-Register mit neuer NODE_ENV Variable auf 'production' gesetzt](railway_variables_new_node_env.png)

Die Lokale Bibliotheksanwendung ist jetzt eingerichtet und für den Produktionseinsatz konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen und sie sollte auf die gleiche Weise wie während der Entwicklung funktionieren (wenn auch mit weniger Debugging-Informationen, die für ungültige Seiten sichtbar sind).

> [!NOTE]
> Wenn Sie gerade einige Daten für Tests hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer Produktions-MongoDB-Datenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testing — Add some items](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses auf Ihrem Computer für ein zugeordnetes Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das Ausführen Ihres Projekts lokal mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle abrufen, indem Sie das folgende in einem Terminal eingeben.

```bash
railway help
```

### Debuggen

Der Railway-Client bietet den logs-Befehl, um das Ende der Protokolle anzuzeigen (auf der Website ist ein vollständigeres Protokoll für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Anwendungen in der Produktion und auch der Serie von Tutorials zur Arbeit mit Express. Wir hoffen, Sie haben sie nützlich gefunden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance/) (Express-Dokumentation)
- [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security/) (Express-Dokumentation)
- Railway-Dokumentationen
  - [CLI](https://docs.railway.com/cli)

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
