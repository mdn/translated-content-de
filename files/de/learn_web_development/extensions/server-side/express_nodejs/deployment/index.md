---
title: "Express Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie eine Beispiel-Website mit Express erstellt und getestet haben, ist es an der Zeit, sie auf einem Webserver bereitzustellen, damit Menschen über das öffentliche Internet darauf zugreifen können. Diese Seite erklärt, wie Sie ein Express-Projekt hosten und was Sie benötigen, um es für die Produktion fertig zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Themen des Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express-Tutorial Teil 6: Arbeiten mit Formularen</a>.
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

Sobald Ihre Website fertig ist (oder "fertig genug" für öffentliche Tests), müssen Sie sie an einem öffentlich zugänglicheren und zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver genutzt, um Ihre Website an den lokalen Browser/das Netzwerk zu teilen, und Ihre Website mit unsicheren Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Infrastruktur auf Produktionsniveau zur Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Leitlinien zu Ihren Optionen bei der Auswahl eines Hosting-Standortes, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion vorzubereiten, und ein funktionierendes Beispiel dafür, wie man die LocalLibrary-Website auf dem [Railway](https://railway.com/)-Cloud-Hosting-Service installiert.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die durch den Server-Computer bereitgestellt wird, auf dem Sie Ihre Website für die externe Nutzung ausführen werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Laufzeitumgebung und Framework-Bibliotheken der Programmiersprache, in der Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, eines Reverse Proxy, eines Lastverteilers usw.
- Datenbanken, von denen Ihre Website abhängt.

Der Server-Computer könnte sich auf Ihrem Gelände befinden und durch eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus häufiger, einen Computer zu nutzen, der "in der Cloud" gehostet wird. Dies bedeutet in der Praxis, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Rechenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet in der Regel eine gewisse garantierte Menge an Rechenressourcen (z.B. CPU, RAM, Speicherplatz usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von fern erreichbareren Computer- und Netzwerkinfrastrukturen wird als _Infrastruktur als Dienst (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, leistungsfähigere Umgebungen auszuwählen, die möglicherweise eine vollständige Node-Installation enthalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website erleichtern, da sie die erforderliche Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen Ihnen unbekannten Server (oder andere Komponenten) begrenzen und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie diejenigen erhalten, die Sie benötigen, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie beginnen müssen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Plattform als Dienst_ (_PaaS_)-Angebots. Bei dieser Art von Hosting müssen Sie sich um die meisten Ihrer Umgebungen für die Produktion nicht kümmern (Server, Lastverteiler usw.), da die Hostplattform diese für Sie übernimmt. Der Einsatz ist daher recht unkompliziert, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf die andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität des IaaS gegenüber PaaS bevorzugen, während andere die reduzierte Wartungskosten und den geringeren Skalierungsaufwand von PaaS schätzen. Wenn Sie gerade anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, und das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Hosting-Anbieter wählen, der Node/Express-freundlich ist, sollten sie Anweisungen zur Verfügung stellen, wie eine Express-Website mit verschiedenen Konfigurationen von Webserver, Applikationsserver, Reverse Proxy usw. einzurichten ist. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community Docs](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekannt dafür sind, dass sie entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) funktionieren. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Mengen an Rechenleistung und Netzwerkkapazitäten zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und deren Dienstleistungen und Preise können sich im Laufe der Zeit ändern. Während wir im Folgenden einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Dinge, die Sie bei der Auswahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Website wahrscheinlich sein wird und die Kosten für die erforderlichen Daten- und Rechenressourcen, um diese Nachfrage zu erfüllen.
- Unterstützungsgrad für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Die Standorte, an denen der Anbieter Rechenzentren hat, und wo der Zugriff dadurch am schnellsten ist.
- Die historische Leistung des Hosts in Bezug auf Betriebs- und Ausfallzeiten.
- Bereitgestellte Tools zur Verwaltung der Website — sind sie benutzerfreundlich und sicher (z.B. SFTP vs. FTP).
- Eingebaute Rahmen zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z.B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen oder bieten nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, die Sie andernfalls bezahlen müssten.
- Ob die "kostenlose" Ebene, auf die Sie sich verlassen, mit der Zeit abläuft und ob die Kosten für die Migration zu einer teureren Ebene bedeuten, dass Sie besser gewesen wären, wenn Sie von Anfang an einen anderen Dienst verwendet hätten!

Die gute Nachricht für den Anfang ist, dass es einige Websites gibt, die "kostenlose" Rechenumgebungen bieten, die für die Auswertung und das Testen gedacht sind. Dies sind in der Regel sehr ressourcenbegrenzte Umgebungen, und Sie sollten sich bewusst sein, dass sie nach einem Einführungszeitraum auslaufen können oder andere Einschränkungen haben. Sie sind jedoch hervorragend geeignet, um ressourcenschwache Websites in einer gehosteten Umgebung zu testen, und können eine einfache Migration zu zahlungspflichtigeren Ressourcen bieten, wenn Ihre Website häufiger genutzt wird. Beliebte Optionen in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine "Basis"- oder "Hobby"-Ebene an, die für kleine Produktionsstandorte gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basisebene für das Rechnen (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website zur Veröffentlichung vorbereiten

Die Hauptpunkte, die beim Veröffentlichen Ihrer Website zu beachten sind, sind Websicherheit und Leistung. Zumindest sollten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stack-Traces entfernen, die auf Fehlerseiten während der Entwicklung enthalten sind, Ihr Logging aufräumen und die entsprechenden Header setzen, um vielen gängigen Sicherheitsbedrohungen vorzubeugen.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumentationen — siehe [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Best Practices für die Produktion: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Zugangsdaten in **bin/www** fest codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, die wir treuen Händen behalten wollen, besteht kein besonderes Risiko, diese Details zu veröffentlichen.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, dann ist es sehr wichtig, Ihre Datenbankanmeldeinformationen zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als die für die Entwicklung verwendete, und auch die Zugangsdaten der Produktionsdatenbank vom Quellcode getrennt halten, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Weboberfläche unterstützt (was viele tun), können Sie den Server so einrichten, dass er die Datenbank-URL aus einer Umgebungsvariablen abruft.
Im Folgenden ändern wir die LocalLibrary-Website, um die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen zu beziehen, wenn sie definiert wurde, und andernfalls die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **bin/www** und suchen Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird in etwa so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um die Verbindungszeichenfolge aus einer Umgebungsvariablen namens `MONGODB_URI` zu beziehen, falls diese gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

```js
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
```

> [!NOTE]
> Eine andere übliche Möglichkeit, Produktionsdatenbank-Zugangsdaten vom Quellcode getrennt zu halten, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem [dotenv](https://www.npmjs.com/package/dotenv)-Modul aus npm gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die `NODE_ENV`-Umgebungsvariable auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Neben der Erzeugung weniger ausführlicher Fehlermeldungen führt das Setzen der Variablen auf _production_ auch zu einer Zwischenspeicherung von View-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um den Faktor Drei verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder des OS-Initialisierungssystems vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrem Umgebungseinrichtung vornehmen, anstatt in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir zeigen unten, wie dies für unser Hosting-Beispiel gesetzt wird.

### Angemessenes Logging

Logging-Aufrufe können die Leistung einer hochfrequentierten Website beeinträchtigen. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z.B. die Verfolgung des Datenverkehrs oder das Protokollieren von API-Aufrufen), aber Sie sollten versuchen, die Menge des für Debugging-Zwecke hinzugefügten Loggings zu minimieren.

Eine Möglichkeit, "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das Ihnen ermöglicht, zu steuern, welches Logging ausgeführt wird, indem eine Umgebungsvariable gesetzt wird.
Zum Beispiel zeigt der untenstehende Codeausschnitt, wie Sie ein "author"-Logging einrichten könnten.
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

Sie können dann eine bestimmte Gruppe von Protokollen aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariable angeben.
Sie können die Variablen für die Anzeige von Autoren- und Bücherlogs wie folgt setzen (es werden auch Wildcards unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe an `debug` können das Logging ersetzen, das Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug)-Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, welche Auswirkungen dies auf das Logging hat.

Wenn Sie die Website-Aktivität protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwendung von gzip/deflate-Komprimierung für Antworten

Webserver können häufig die HTTP-Antwort, die an einen Client gesendet wird, komprimieren und dadurch die Zeit verkürzen, die der Client benötigt, um die Seite zu erhalten und zu laden. Die Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client im Request angibt (die Antwort wird unkomprimiert gesendet, wenn keine Kompressionsmethoden unterstützt werden).

Fügen Sie dies Ihrer Site mit [compression](https://www.npmjs.com/package/compression)-Middleware hinzu. Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und laden Sie die compression-Bibliothek wie gezeigt. Fügen Sie die Kompressionsbibliothek mit der `use()`-Methode zur Middleware-Kette hinzu (dies sollte vor allen Routen erfolgen, die Sie komprimiert haben möchten — in diesem Fall alle!)

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
> Für eine hochfrequentierte Website in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse Proxy wie [Nginx](https://nginx.org/) verwenden.

### Nutzen Sie Helmet, um gegen bekannte Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [dokumentation](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und vor welchen Schwachstellen es schützt).

Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und laden Sie die _helmet_-Bibliothek wie gezeigt. Fügen Sie dann das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um die _Teilmenge_ der sicherheitsrelevanten Header hinzuzufügen, die für die meisten Websites sinnvoll ist. In der [LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) enthalten wir jedoch einige Bootstrap-Skripte. Diese verletzen die helmet's _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die das Laden von Cross-Site-Skripten nicht erlaubt. Um das Laden dieser Skripte zu ermöglichen, passen wir die Helmet-Konfiguration so an, dass sie CSP-Direktiven setzt, die das Laden von Skripten von den angegebenen Domains erlauben. Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Nutzung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie den API-Routen eine Ratenbegrenzung hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Website gestellt werden könnten, wie Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das nicht wie erwartet funktioniert. Abgesehen von Leistungsproblemen, die sich aus zu vielen Anfragen ergeben können, die dazu führen, dass Ihr Server langsamer wird, können Ihnen auch zusätzliche Gebühren für den Datenverkehr berechnet werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder ein Set von Routen gestellt werden können.

Installieren Sie dies im Hauptverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und laden Sie die _express-rate-limit_-Bibliothek wie gezeigt. Fügen Sie dann das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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
> Drittdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie fortschrittlicheren Schutz gegen Denial-of-Service- oder andere Arten von Angriffen benötigen.

#### Setzen Sie die Node-Version

Für Anwendungen, die mit Node, einschließlich Express, erstellt wurden, enthält die Datei **package.json** alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Startdatei zu erkennen.

Die einzige wichtige Information, die nicht in unserer aktuellen **package.json** enthalten ist, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Version von Node herausfinden, die bei der Entwicklung verwendet wurde, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** hinzu, wie gezeigt (verwenden Sie die Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=22.0.0"
  },
```

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifische angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass versucht wird, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es andere Möglichkeiten gibt, die Node-Version auf verschiedenen Hosting-Diensten festzulegen, aber der **package.json**-Ansatz ist weit verbreitet.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Website erneut testen und sicherstellen, dass sie durch keine unserer Änderungen beeinträchtigt wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Hauptverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie jetzt die Site aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob sich die Site weiterhin wie erwartet verhält.

### Einrichten eines Anwendungsrepositorys in GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte von einem lokalen Repository oder von cloudbasierten Source-Version-Control-Plattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und ein Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub verwenden, um Ihren Quellcode zu verwalten!
>
> Beachten Sie, dass die Verwendung von Source-Code-Management-Tools gute Software-Entwicklungspraxis ist, da es Ihnen erlaubt, Änderungen auszuprobieren und zwischen Ihren Experimenten und dem "bekannten guten Code" zu wechseln, wenn Sie es müssen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie im oberen Menü auf den **+**-Link und wählen Sie **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Auch wenn diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.
   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (wie "Local Library-Website, geschrieben in Express").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahl.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahl.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standard-Zugang "Public" macht _alle_ Quellcodes — einschließlich Ihrer Datenbank-Benutzername und Passwort — für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen hart codiert hat.
   >
   > Wählen Sie andernfalls die Option "Private", um den Quellcode nur für ausgewählte Personen sichtbar zu machen.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf die grüne **Clone or download** Schaltfläche auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im angezeigten Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Nun, da das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ auf Ihrem lokalen Computer ([offizielle Git-Download-Anleitung](https://git-scm.com/downloads)).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquellcode-Dateien in den Repo-Ordner, machen Sie sie mit _git_ zum Bestandteil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (mit Ausnahme von **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit`en wollen, korrekt sind (Sie wollen Quellcode-Dateien, keine Binärdateien, temporären Dateien usw. einbeziehen).
   Es sollte in etwa so aussehen wie die untenstehende Auflistung.

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

4. Wenn Sie zufrieden sind, `commit`en Sie die Dateien in Ihrem lokalen Repo.
   Dies ist gleichbedeutend mit der Genehmigung der Änderungen und dem offiziellen Bestandteil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. An diesem Punkt wurde das Remote-Repo noch nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo in das Remote-GitHub-Repo hochzuladen (`push`) mit dem folgenden Befehl:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zur GitHub-Seite zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiter aktualisieren, wenn sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu machen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Service (oder für die Entwicklung) sein könnten, andere möglicherweise nicht. Sie können dies mit `git` auf der Kommandozeile tun:

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
> Um mehr zu erfahren, siehe [Git lernen](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie LocalLibrary auf [Railway](https://railway.com/) installiert wird.

> [!NOTE]
> MDN hat dieses Projekt von einer Reihe von Hosting-Diensten migriert, die keine kostenlosen Tarife mehr anbieten.
> Wir haben uns entschieden, Railway für die aktuelle Hosting-Option zu verwenden, das ein kostengünstiges Hobby-Level bietet.
> Die meisten Dienste haben ähnliche Bereitstellungsmethoden, sodass die folgenden Anweisungen helfen sollten, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um die meiste Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Lastverteiler, Reverse-Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway hat einen [Fokus auf die Entwicklererfahrung für die Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar.
  Während Railway einige hervorragende neue Funktionen hat, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- Die [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es hat einen vergleichsweise kostengünstigen [Hobby-Tarif](https://railway.com/pricing).
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise absehbar, und das Hochskalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, zu bestimmen, ob Railway für Ihre eigene Website [geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch verstehen, wie sie gestartet wird.

Railway macht es einfach, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen basierend auf deren Nutzung von "allgemeinen Konventionen" automatisch erkennen und installieren kann. Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den zum Erstellen verwendeten Paketmanager anhand der "lock"-Datei bestimmen. Wenn die Anwendung also die Datei **package-lock.json** enthält, weiß Railway, dass es _npm_ verwenden soll, um die Pakete zu installieren, während es, wenn es **yarn.lock** findet, weiß, dass es _yarn_ verwenden soll. Nach der Installation aller Abhängigkeiten wird Railway nach Skripten mit den Namen "build" und "start" im Paket suchen und diese verwenden, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks in verschiedenen Programmiersprachen zu erkennen.
> Sie müssen nichts weiter für dieses Tutorial wissen, aber Sie können mehr über Optionen für die Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse mit einer Variablen erhalten. Der Datenbankdienst selbst kann entweder von Railway gehostet werden oder von einem anderen Anbieter.

Entwickler interagieren mit Railway über die Railway-Site und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Tool. Der CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verbinden, das Repository vom lokalen Branch auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit dem CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie an Übersicht benötigen, um die App auf Railway bereitzustellen. Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Ein Railway-Konto erhalten

Um Railway zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie auf [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link im oberen Menü.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie sind dann im Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Bereitstellen auf Railway von GitHub aus

Als nächstes richten wir Railway so ein, dass es unsere Bibliothek von GitHub bereitstellt. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Website und dann die **New Project**-Schaltfläche:

![Railway-Website-Dashboard zeigt die Schaltfläche neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wird, sowie eine Reihe von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup zeigt die Bereitstellungsoptionen mit der Option Deploy from GitHub repo hervorgehoben](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup zeigt die GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt auf der Bereitstellungskarte anzeigen. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard zeigt die Bereitstellungskarte für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Settings_ und scrollen Sie dann zum Abschnitt Domains herunter und drücken Sie die **Generate Domain**-Schaltfläche.

![Railway-Projekteinstellungen-Registerkarte zeigt die Schaltfläche zum Generieren einer Domain](railway_project_generate_domain.png)

Dies veröffentlicht die Site und setzt die Domain anstelle der Schaltfläche, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte zeigt einen Link zur lokalen Bibliotheks-Website](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass wegen der fehlenden Angabe einer Produktionsdatenbank die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet wird.

### Provisionierung und Verbinden einer MongoDB-Datenbank

Anstatt unsere Entwicklungsdaten zu verwenden, erstellen wir als nächstes eine Produktions-MongoDB-Datenbank zur Verwendung. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen oder sogar eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genau wie für die Entwicklungsdatenbank.

Wählen Sie auf Railway die **Dashboard**-Option aus dem oberen Menü der Website und dann Ihr Anwendungsprojekt. Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Wählen Sie die **New**-Schaltfläche, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche Neuer Dienst](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Popup zeigt Optionen für einen neuen Dienst wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um die Datenbank hinzuzufügen

![Railway-Popup zeigt verschiedene Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen. Nach dem Abschluss sehen Sie jetzt sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen. Öffnen Sie die Registerkarte _Variables_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Dateneinstellungsbildschirm zeigt die URL, die zum Verbinden mit der Datenbank benötigt wird](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es mit einer Umgebungsvariablen zum Anwendungsprozess hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variables_ und drücken Sie die **New Variable** Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariablen, von der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies wird in etwa so aussehen wie der unten gezeigte Bildschirm.

![Railway-Website mit Variablenbildschirm beim Hinzufügen der MONGODB_URI-Variablen und Adresse](railway_variables_database_url.png)

Wählen Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie die Startseite jetzt überprüfen, sollte sie Nullwerte für Ihre Objektanzahl anzeigen, da die oben genannten Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Aus einem früheren Abschnitt erinnern Sie sich, dass wir `NODE_ENV` auf 'production' [setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies im gleichen Bildschirm tun, in dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variables_, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **New Variable**-Schaltfläche.

![Railway-Variablentabelle mit hervorgehobener Schaltfläche New Variable](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Namen der Umgebung ein. Drücken Sie dann die **Add**-Schaltfläche.

![Railway-Variables-Tab mit neuer NODE_ENV-Variablen, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliothekanwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte auf die gleiche Weise funktionieren wie während der Entwicklung (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) - Testen - einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) besprochen.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers an ein zugeordnetes Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen, die Sie auf dem Produktionsserver haben.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das folgende in einem Terminal eingeben.

```bash
railway help
```

### Fehlerbehebung

Der Railway-Client bietet den logs-Befehl, um das Ende der Protokolle anzuzeigen (ein vollständigeres Protokoll ist auf der Site für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch die Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) überprüfen.

## Siehe auch

- [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Best Practices für die Produktion: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway Docs
  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Erste Schritte auf Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellung von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js-Support](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimierung der Node.js-Anwendungskonjunktion](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
