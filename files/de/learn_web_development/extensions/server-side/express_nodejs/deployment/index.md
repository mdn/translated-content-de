---
title: "Express Tutorial Teil 7: Bereitstellung für die Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit das Bibliothekspersonal und die Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Website für die Produktion bereit zu machen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Beenden Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
          Zu lernen, wo und wie Sie eine Express-App in die Produktion bringen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder "fertig genug" für öffentliche Tests), müssen Sie sie an einem öffentlich zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, indem Sie Express/Node als Webserver verwendet haben, um Ihre Website zum lokalen Browser/Netzwerk freizugeben und Ihre Website mit (unsicheren) Entwicklungseinstellungen zu betreiben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsreife Infrastruktur für die Bereitstellung Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen bei der Wahl eines Hosting-Angebots, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website beim Cloud-Hosting-Dienst [Railway](https://railway.com/) installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Serverrechner bereitgestellt wird, auf dem Sie Ihre Website für den externen Gebrauch betreiben. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprachen-Laufzeitumgebung und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, die möglicherweise einen Webserver, Reverse-Proxy, Load Balancer usw. umfasst.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Serverrechner könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet normalerweise einen garantierten Umfang an Rechenressourcen (z. B. CPU, RAM, Speicherkapazität usw.) sowie Internetkonnektivität zu einem bestimmten Preis.

Solche fern zugreifbaren Computer-/Netzwerkressourcen werden als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben es Ihnen, funktionsreichere Umgebungen auszuwählen, möglicherweise einschließlich eines kompletten Node-Setups.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, weil sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen ungewöhnten Server (oder andere Komponenten) einschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie genau die bekommen, die Sie möchten, und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Wenn Sie diesen Art von Hosting nutzen, müssen Sie sich nicht um den Großteil Ihrer Produktionsumgebung (Server, Load Balancer usw.) kümmern, da die Host-Plattform diese für Sie übernimmt. Das macht die Bereitstellung recht einfach, weil Sie sich nur auf Ihre Webanwendung und nicht auf jegliche andere Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS vorziehen, während andere die reduzierte Wartungslast und das einfachere Skalieren von PaaS schätzen werden. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, daher werden wir das in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter auswählen, sollten sie Anweisungen zur Einrichtung einer Express-Website mit unterschiedlichen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=node).

## Einen Hosting-Anbieter wählen

Es gibt zahlreiche Hosting-Anbieter, die bekannt dafür sind, entweder aktiv _Node_ (und _Express_) zu unterstützen oder gut damit zu arbeiten. Diese Anbieter stellen verschiedene Arten von Umgebungen (IaaS, PaaS) sowie unterschiedliche Stufen von Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen zur Verfügung.

> [!NOTE]
> Es gibt eine Vielzahl an Hosting-Lösungen, und deren Dienste und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie sich für einen Hosting-Anbieter entscheiden.

Einige Punkte, die Sie bei der Wahl eines Hosts berücksichtigen sollten:

- Wie viel Verkehr Ihre Website voraussichtlich haben wird und die Kosten für die benötigten Daten- und Rechenressourcen zur Deckung dieser Nachfrage.
- Unterstützungsgrad für horizontales Skalieren (Hinzufügen von mehr Maschinen) und vertikales Skalieren (Aufrüsten auf leistungsfähigere Maschinen) und die damit verbundenen Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren hat und daher der Zugang am schnellsten ist.
- Die historische Uptime- und Downtime-Performance des Hosts.
- Tools zur Verwaltung der Website - sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Integrierte Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen, oder bieten nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, mit der Zeit abläuft, und ob die Kosten des Wechsels zu einer teureren Stufe bedeuten, dass Sie besser einen anderen Dienst hätten nutzen sollen!

Die gute Nachricht für den Anfang ist, dass es eine ganze Reihe von Websites gibt, die "gratis" Computerumgebungen bieten, die für Bewertung und Testen gedacht sind.
Diese sind in der Regel ziemlich ressourcenbeschränkt/limitiert, und Sie sollten sich bewusst sein, dass sie nach einer Einführungsphase ablaufen oder andere Einschränkungen haben können.
Sie sind jedoch großartig für das Testen von Websites mit geringem Verkehr in einer gehosteten Umgebung und können eine einfache Migration zu bezahlten Ressourcen ermöglichen, wenn Ihre Website stärker frequentiert wird.
Beliebte Optionen in dieser Kategorie umfassen [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), usw.

Die meisten Anbieter bieten auch eine "Basis" oder "Hobby" Stufe an, die für kleine Produktionswebsites gedacht ist und nützlichere Stufen von Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Rechenstufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass die Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website zur Veröffentlichung bereit machen

Die Hauptdinge, über die Sie nachdenken sollten, wenn Sie Ihre Website veröffentlichen, sind Web-Sicherheit und Leistung.
Im absoluten Minimum möchten Sie die Datenbankkonfiguration so ändern, dass Sie für die Produktion eine andere Datenbank verwenden und deren Anmeldedaten sichern, die Stack-Traces, die während der Entwicklung auf Fehlerseiten enthalten sind, entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten umreißen wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumenten – siehe [Produktionsbewährte Methoden: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktionsbewährte Methoden: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzige Entwicklungsdatenbank verwendet, für die die Adresse und Anmeldedaten in **app.js** fest kodiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, die wir preisgeben oder beschädigen möchten, besteht kein besonderes Risiko, diese Details offenzulegen.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbankanmeldedaten sehr wichtig.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als wir für die Entwicklung verwenden und auch die Anmeldedaten der Produktionsdatenbank vom Quellcode getrennt halten, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Webschnittstelle unterstützt (wie viele es tun), besteht eine Möglichkeit, dies zu tun, darin, dass der Server die Datenbank-URL aus einer Umgebungsvariablen erhält.
Unten ändern wir die LocalLibrary-Website so, dass sie die Datenbank-URI aus einer Betriebssystemumgebungsvariablen bezieht, falls diese definiert wurde, und andernfalls die Entwicklungsdatenbank-URL verwendet.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile mit dem folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring von einer Umgebungsvariablen mit dem Namen `MONGODB_URI` zu erhalten, falls sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL statt des Platzhalters unten).

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
> Eine andere übliche Methode, um Produktionsdatenbank-Anmeldedaten vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem npm [dotenv](https://www.npmjs.com/package/dotenv) Modul gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die `NODE_ENV` Umgebungsvariable auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zur Erzeugung weniger ausführlicher Fehlermeldungen führt das Setzen der Variable auf _production_ dazu, dass Vorlagencaches für Ansichten und CSS-Dateien erstellt werden, die aus CSS-Erweiterungen generiert werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch Verwenden von `export`, einer Umgebungsdatei oder des Betriebssystem-Initialisierungssystems vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungseinrichtung vornehmen, und nicht in Ihrer App, aber wichtig genug, um sie hier zu erwähnen! Wir zeigen, wie dies in unserem Hosting-Beispiel unten gesetzt wird.

### Richtiges Logging

Logaufrufe können Auswirkungen auf eine hochfrequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z. B. Verkehr verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, das hinzugefügte Logging für Debugging-Zwecke zu minimieren.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das es Ihnen ermöglicht, zu steuern, welches Logging durchgeführt wird, indem Sie eine Umgebungsvariable festlegen.
Zum Beispiel zeigt das Codefragment unten, wie Sie ein "author"-Logging einrichten könnten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Logs dieses Objekts angezeigt.

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

Sie können dann eine bestimmte Gruppe von Logs aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG` Umgebungsvariable angeben.
Sie können die Variablen für die Anzeige von Author- und Buch-Logs wie gezeigt setzen (Wildcards werden auch unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können Logging ersetzen, das Sie zuvor möglicherweise mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung aus und ein, indem Sie die DEBUG-Variable setzen und beobachten Sie, welche Auswirkungen dies auf das Logging hat.

Wenn Sie die Website-Aktivität protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktionsbewährte Methoden: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort komprimieren, die an einen Client zurückgesendet wird, was die Zeit, die das Laden der Seite benötigt, erheblich reduziert. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Website mit [Komprimierungs](https://www.npmjs.com/package/compression)-Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und verlangen Sie die Komprimierungs-Bibliothek wie gezeigt. Fügen Sie die Komprimierungs-Bibliothek mit der `use()`-Methode der Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten - in diesem Fall alle!).

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

### Verwenden Sie Helmet, um sich vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann die entsprechenden HTTP-Header setzen, die helfen, Ihre App vor bekannten Web-Sicherheitslücken zu schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und welche Sicherheitslücken es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und verlangen Sie die _helmet_ Bibliothek wie gezeigt.
Fügen Sie dann das Modul mit der `use()` Methode der Middleware-Kette hinzu.

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

Normalerweise hätten wir nur `app.use(helmet());` eingefügt, um den _Unterbereich_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Websites sinnvoll sind.
Im [LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) fügen wir jedoch einige Bootstrap- und jQuery-Skripte ein.
Diese verletzen die _Standard-_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von Helmet, die das Laden von intersite-Skripten nicht erlaubt.
Um das Laden dieser Skripte zu ermöglichen, ändern wir die Helmet-Konfiguration so, dass sie CSP-Direktiven setzt, die das Laden von Skripten von den angegebenen Domains erlauben.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie den API-Routen eine Ratenbegrenzung hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, mit dem sich wiederholende Anfragen an APIs und Endpunkte begrenzen lassen.
Es gibt viele Gründe, warum übermäßig viele Anfragen an Ihre Website gestellt werden könnten, wie z. B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das nicht wie erwartet funktioniert.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können, die dazu führen, dass Ihr Server langsamer wird, können Sie auch für den zusätzlichen Verkehr zur Kasse gebeten werden.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Gruppe von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und verlangen Sie die _express-rate-limit_ Bibliothek wie gezeigt.
Fügen Sie dann das Modul mit der `use()` Methode der Middleware-Kette hinzu.

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
> Drittanbieter-Dienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie fortgeschritteneren Schutz gegen Denial-of-Service- oder andere Angriffsarten benötigen.

#### Setzen der Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Einstiegspunktdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird.
Sie können die Version von Node, die für die Entwicklung verwendet wurde, herausfinden, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json**, und fügen Sie diese Information als **engines > node** hinzu, wie gezeigt (unter Verwendung der Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine aktuellere Version zu verwenden.

Beachten Sie, dass es auf verschiedenen Hosting-Services andere Möglichkeiten geben kann, die Node-Version anzugeben, aber der **package.json**-Ansatz wird weitgehend unterstützt.

#### Holen Sie sich Abhängigkeiten und testen Sie erneut

Bevor wir fortfahren, testen wir die Site erneut und stellen sicher, dass sie von keiner unserer Änderungen betroffen war.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Jetzt führen Sie die Site aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und prüfen Sie, ob die Site sich noch so verhält, wie Sie es erwarten.

### Erstellen eines Anwendungs-Repositorys in GitHub

Viele Hosting-Services ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren.
Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und ein Repository für die Bibliothek ein und verwenden das **git** Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub verwenden, um Ihren Quellcode zu verwalten!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools gute Software-Entwicklungspraxis ist, da sie Ihnen erlauben, Änderungen auszuprobieren und nach Bedarf zwischen Ihren Experimenten und dem "bekannten guten Code" zu wechseln!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Werkzeugleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z. B. _express-locallibrary-tutorial_) und eine Beschreibung (z. B. "Lokale Bibliotheks-Website, geschrieben in Express (Node)").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahl Liste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add License_ Auswahl Liste.
   - Überprüfen Sie **Initialisieren Sie dieses Repository mit einem README**.

   > [!WARNING]
   > Der Standard "Öffentlicher" Zugriff macht _alle_ Quellcodes – einschließlich Ihres Datenbank-Benutzernamens und Passworts – für alle im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldedaten _nur_ von Umgebungsvariablen liest und nicht irgendwelche Anmeldedaten hart kodiert hat.
   >
   > Andernfalls wählen Sie die "Privat" Option, um nur ausgewählten Personen Zugriff auf den Quellcode zu gewähren.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf die grüne Schaltfläche **Klonen oder herunterladen** auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfenster, das erscheint.
   Wenn Sie den Repositoriesnamen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwas aussehen wie: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Nachdem das Repository ("repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie `git` für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repo-Ordner, machen Sie sie mit `git` Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (außer **/node_modules**, das Sprachdateienabhängigkeiten enthält, die Sie nach Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und verwenden Sie den Befehl `add`, um alle Dateien zu `git` hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den Befehl `status`, um zu überprüfen, dass alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten Source-Dateien und keine Binärdateien, temporären Dateien, usw. einfügen).
   Es sollte in etwa so aussehen wie die Liste unten.

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
   Dies entspricht dem Unterschreiben der Änderungen und dem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. An diesem Punkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem Remote-GitHub-Repo mit dem folgenden Befehl zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zurück zu der Seite auf GitHub gehen, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, während sich die Dateien mit diesem Add/Commit/Push-Zyklus ändern.

Dies ist ein guter Punkt, um ein Backup Ihres "Vanille"-Projekts zu erstellen - während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) sein könnten, könnten andere dies nicht sein.
Sie können er dies mit `git` auf der Kommandozeile erledigen:

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

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Glitch](https://glitch.com/) gehostet wird.

### Warum Glitch?

Wir wählen Glitch aus mehreren Gründen:

- Glitch hat einen [kostenlosen Starter-Plan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!
- Glitch kümmert sich um die Infrastruktur, damit Sie es nicht müssen.
  Sich nicht mit Servern, Load-Balancern, Reverse-Proxies und so weiter beschäftigen zu müssen, macht es viel einfacher, loszulegen.
- Die Fähigkeiten und Konzepte, die Sie bei der Nutzung von Glitch erlernen, sind übertragbar.
- Die Einschränkungen des Dienstes und des Plans wirken sich wirklich nicht darauf aus, dass wir Glitch für das Tutorial verwenden.
  Zum Beispiel:

  - Der Starter-Plan bietet nur 1000 "Projekt-Stunden" pro Monat, die monatlich zurückgesetzt werden.
    Diese werden verwendet, wenn Sie die Site aktiv bearbeiten oder jemand darauf zugreift.
    Wenn niemand die Site bearbeitet oder darauf zugreift, wird sie schlafen.
  - Die Starter-Plan-Umgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz.
    Für das Tutorial gibt es mehr als genug, insbesondere weil unsere Datenbank woanders gehostet wird.
  - Benutzerdefinierte Domains werden nicht gut unterstützt (zum Zeitpunkt des Verfassens dieses Artikels).
  - Andere Einschränkungen finden Sie auf der [Glitch technische Einschränkungen-Seite](https://help.glitch.com/s/article/Technical-Restrictions).

Während Glitch für das Hosting dieser Demonstration geeignet ist, sollten Sie sich die Zeit nehmen, um festzustellen, ob es für Ihre eigene Website [geeignet ist](#einen_hosting-anbieter_wählen).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Oberfläche, in der Sie Projekte aus Startervorlagen erstellen oder diese aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können.
Während Sie Änderungen vornehmen, wird das Projekt in seinem eigenen isolierten und unabhängigen virtualisierten Container gebaut und ausgeführt.

Wie das alles „unter der Haube“ funktioniert, bleibt ein Geheimnis – Glitch sagt es nicht.
Was klar ist, ist, dass, solange Sie eine recht standardmäßige NodeJS-Webanwendung erstellen (z. B. `package.json` für Ihre Abhängigkeiten verwenden), und nicht mehr Ressourcen verbrauchen als in den [Technischen Einschränkungen](https://help.glitch.com/s/article/Technical-Restrictions) angegeben, Ihre Anwendung einfach „funktionieren sollte“.

Sobald die Anwendung läuft, kann sie für die Produktion mit [privaten Daten](https://help.glitch.com/s/article/Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden.
Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem vorherigen Abschnitt erinnern werden, die Methode ist, mit der wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL zu erhalten.
Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihr GitHub-Repository integriert werden.

Die Glitch-Edit-Ansicht bietet auch einen _Terminal_-Zugang zur Web-App-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als ob sie auf Ihrem lokalen Rechner ausgeführt würde.

Das ist der gesamte Überblick, den Sie benötigen, um loszulegen.
Als nächstes richten wir ein Glitch-Konto ein, laden das Library-Projekt von GitHub hoch und verbinden es mit einer Datenbank.

### Richten Sie ein Glitch-Konto ein

Um Glitch zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Registrieren** Schaltfläche in der oberen Werkzeugleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten zu registrieren.
- Sie werden dann in das Glitch-Dashboard eingeloggt: <https://glitch.com/dashboard>.

### Node.js-Version beheben

Hosting-Anbieter unterstützen üblicherweise einige Hauptversionen der neuesten Node.js-Versionen.
Wenn die exakte "Minor"-Version, die Sie in Ihrer `package.json`-Datei angegeben haben, nicht unterstützt wird, wird normalerweise die nächstgelegene Version verwendet, die sie unterstützen (und oft wird dies einfach funktionieren).

Leider ist zum Zeitpunkt des Schreibens die höchst unterstützte Version auf Glitch Node.js 16.
Wenn Sie mit Node.js 17 oder höher entwickelt haben, sollten Sie die in Ihrer `package.json`-Datei verwendete Version wie gezeigt reduzieren.
Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zu aktualisieren und besser aktualisiert zu halten](https://blog.glitch.com/post/rebuilding-glitch/) – und es kann sein, dass beim Lesen dies keine Versionsbeschränkung mehr existiert.
Anstatt die Node-Version herunterzustufen, könnten Sie Ihr Projekt hochladen, um zu sehen, ob es funktioniert.
Liegt ein Fehler vor und Ihre Anwendung wird nicht geladen, sollten Sie versuchen, die Node-Version auf `>=v16` in Ihrer `package.json` im Glitch-Editor zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Auf Glitch von GitHub bereitstellen

Als nächstes importieren wir das Library-Projekt von GitHub.
Zuerst wählen Sie die **Dashboard**-Option aus dem Hauptmenü der Seite, dann wählen Sie die **Neues Projekt**-Schaltfläche.
Glitch zeigt eine Liste mit Optionen für das neue Projekt an; wählen Sie **Von GitHub importieren**.

![Glitch-Website-Dashboard, das eine neue Projekt-Schaltfläche anzeigt, und ein Popup-Menü mit der "Von GitHub importieren" Option](glitch_new_project_import_github.png)

Ein Popup erscheint.
Geben Sie die URL Ihres GitHub Library-Repos in das Popup ein und drücken Sie **OK**.
Unten haben wir das fertige Projekt-Repo eingegeben.

![Glitch-Popup zum Eingeben der URL des zu importierenden GitHub-Repos](glitch_new_project_github_repo_url.png)

Glitch importiert dann das Projekt, wobei Fortschrittsmitteilungen angezeigt werden.
Nach Abschluss wird die Bearbeitungsansicht für das neue Projekt angezeigt, wie unten gezeigt.

![Glitch-Editoransicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-Site-URL abrufen, indem Sie die **Teilen**-Schaltfläche auswählen.

![Glitch-Editoransicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link für die Live-Site in die Adressleiste.
Die lokale Bibliotheks-Site sollte sich öffnen und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import von GitHub.
> Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchron zu halten.

### Verwenden Sie eine Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als für die Entwicklung einrichten.
Während Glitch nur SQLite-Datenbanken hostet (und wir sind eingerichtet, um MongoDB zu verwenden), bieten viele andere Websites MongoDB-Datenbanken als Service an.

Eine Möglichkeit besteht darin, den Anweisungen unter [Richten Sie die MongoDB-Datenbank ein](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) aus einem früheren Abschnitt des Tutorials zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung verfügbar zu machen, öffnen Sie die `.env`-Datei in der Edit-Ansicht des Projekts.
Geben Sie die Datenbank-URL-Variable `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein.
Die Site wird aktualisiert, sobald Sie Werte in den Editor eingeben.

![Glitch .env-Datei-Editor für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt.
> Sie ist für [private Daten](https://help.glitch.com/s/article/Adding-Private-Data) vorgesehen und wurde beim Import zu Glitch automatisch erstellt.
> Sie wird niemals exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir tun dies in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die lokale Bibliotheksanwendung ist nun eingerichtet und für den Produktzionsgebrauch konfiguriert.
Sie können Daten über die Website-Schnittstelle hinzufügen, und sie sollte wie während der Entwicklung funktionieren (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL) wie im Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen – Erstellen einiger Elemente](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Express-Apps auf Glitch debuggen

Glitch ermöglicht effektives Debuggen.
Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Protokoll-Schaltfläche am unteren Rand der Edit-Ansicht, um Protokollinformationen von Ihrem Server zu sehen, z. B. Konsolenprotokollausgaben.
- Wählen Sie die Terminal-Schaltfläche am unteren Rand der Edit-Ansicht, um ein Terminal in der Hosting-Umgebung zu öffnen.
  Sie können dies verwenden, um Befehle und Tools in der Umgebung auszuführen.
  Beispielsweise könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debugging in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie Sie _LocalLibrary_ auf [Railway](https://railway.com/) installieren.

### Warum Railway?

> [!WARNING]
> Railway hat kein komplett kostenloses Starter-Tier mehr.
> Wir haben diese Anleitungen beibehalten, weil Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option darstellen kann.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um die meisten der Infrastruktur, die Sie sonst verwalten müssten.
  Sich nicht mit Servern, Load-Balancern, Reverse-Proxies und so weiter zu beschäftigen, macht es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf das Entwicklererlebnis für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie bei der Verwendung von Railway erlernen, sind übertragbar.
  Andere beliebte Hosting-Services verwenden viele der gleichen Ideen und Ansätze, auch wenn Railway einige ausgezeichnete neue Funktionen bietet.
- [Railway Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn am Ende lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um herauszufinden, ob Railway für Ihre eigene Website [geeignet ist](#einen_hosting-anbieter_wählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht das einfach, da es viele unterschiedliche Webanwendungs-Frameworks und -Umgebungen automatisch erkennen und installieren kann, indem es „übliche Konventionen“ verwendet.
Zum Beispiel erkennt Railway Node-Anwendungen, weil sie über eine **package.json**-Datei verfügen, und kann den Paketmanager, der zum Bauen verwendet wird, aus der „Sperrdatei“ ableiten.
Wenn die Anwendung beispielsweise die Datei **package-lock.json** enthält, weiß Railway, dass es _npm_ verwenden soll, um die Pakete zu installieren, während es bei **yarn.lock** weiß, dass _yarn_ zu verwenden ist.
Nachdem alle Abhängigkeiten installiert wurden, sucht Railway in der Paketdatei nach Skripten namens "build" und "start" und verwendet diese, um den Code zu bauen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in unterschiedlichen Programmiersprachen geschrieben sind.
> Sie müssen nichts weiter für dieses Tutorial wissen, aber Sie können mehr über die Optionen für die Bereitstellung von Node-Anwendungen unter [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich selbst konfigurieren, indem sie Informationen aus [Umgebungsvariablen](https://docs.railway.com/guides/variables) erhält.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable beziehen.
Der Datenbankdienst selbst kann entweder von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und verwenden ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli) Tool.
Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch zur Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist der gesamte Überblick, den Sie benötigen, um die App auf Railway bereitzustellen.
Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Holen Sie sich ein Railway-Konto

Um Railway zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Werkzeugleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Es kann sein, dass Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren müssen.
- Sie sind dann ins Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Auf Railway von GitHub bereitstellen

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen.
Zuerst wählen Sie die **Dashboard**-Option aus dem Hauptmenü der Seite, dann wählen Sie die **Neues Projekt**-Schaltfläche:

![Railway-Website-Dashboard, das den neuen Projekt-Button anzeigt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wird und einer Reihe von Datenbanken.
Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Popup, das Bereitstellungsoptionen mit der „Von GitHub-Repo bereitstellen“-Option hervorgehoben zeigt](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup, das GitHub-Repos zeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und Fortschritte auf dem Bereitstellungstab anzeigen.
Nach erfolgreichem Abschluss der Bereitstellung wird ein Bildschirm wie der untenstehende angezeigt.

![Railway-Dashboard, das den Bereitstellungstab für das bereitgestellte Projekt zeigt](railway_project_deploy.png)

Wählen Sie nun den _Einstellungen_-Tab aus, scrollen Sie dann zum Domain-Bereich und drücken Sie die **Domain generieren**-Schaltfläche.

![Railway-Projekteinestellungen-Tab, der eine Schaltfläche zum Generieren einer Domain zeigt](railway_project_generate_domain.png)

Dies wird die Website veröffentlichen und die Domain anstelle der Schaltfläche setzen, wie unten gezeigt.

![Railway-Projekteinestellungen-Tab, der einen Link zur lokalen Bibliotheks-Site zeigt](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen.
Beachten Sie, dass wir, da wir keine Produktionsdatenbank angegeben haben, die lokale Bibliothek mit Ihren Entwicklungsdaten öffnen.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Statt unsere Entwicklungsdaten zu verwenden, lassen Sie uns als nächstes eine Produktions-MongoDB-Datenbank erstellen, die wir stattdessen verwenden können.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl Sie sie genauso gut in einem eigenen separaten Projekt erstellen oder auch eine _MongoDB Atlas_-Datenbank für Produktionsdaten verwenden könnten, genau wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard**-Option aus dem Hauptmenü der Seite und wählen Sie dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen Dienst für Ihre Anwendung (dieser kann zur Festlegung von Variablen und anderen Details des Dienstes ausgewählt werden).
Wählen Sie die **Neu**-Schaltfläche, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit neuer Dienst-Schaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie aufgefordert werden, den Typ des hinzuzufügenden Dienstes zu bestimmen:

![Railway-Popup, das Optionen für einen neuen Dienst zeigt, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Popup, das verschiedene auswählbare Datenbanken zeigt: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun beide Anwendungs- und Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie den Tab _Variablen_ und kopieren Sie die „Mongo_URL“ (dies ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungen-Bildschirm, der die URL zeigt, die benötigt wird, um sich mit der Datenbank zu verbinden](railway_mongodb_connect.png)

Um diese für die Bibliotheksanwendung zugänglich zu machen, müssen wir sie der Anwendung mit einer Umgebungsvariablen hinzufügen.
Öffnen Sie zuerst den Anwendungsdienst.
Wählen Sie dann den _Variablen_-Tab und drücken Sie die Schaltfläche **Neue Variable**.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL, die Sie für die Datenbank kopiert haben, ein (`MONGODB_URI` ist der Name der Umgebungsvariablen, von der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration) um die Datenbankadresse zu lesen).
Dies wird in etwa so aussehen wie der unten gezeigte Bildschirm.

![Railway-Website-Variablen-Bildschirm beim Hinzufügen der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie die Homepage jetzt überprüfen, sollten null Werte für Ihre Objektanzahl angezeigt werden, da die Änderungen von oben bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich aus einem vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies im selben Bildschirm tun, in dem wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie den Anwendungsdienst.
Wählen Sie dann die Registerkarte _Variablen_, auf der Sie feststellen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **Neue Variable**-Schaltfläche.

![Railway Variablen-Tab mit hervorgehobener Neuer-Variable-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Namen der Umgebung ein.
Drücken Sie dann auf die Schaltfläche **Hinzufügen**.

![Railway Variablen-Tab, das eine neue NODE_ENV-Variable zeigt, die auf „production“ gesetzt wird](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist jetzt eingerichtet und für die Produktion konfiguriert.
Sie können Daten über die Website-Schnittstelle hinzufügen und sie sollte genauso funktionieren wie während der Entwicklung (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen wollen, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen – Erstellen einiger Gegenstände](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers zu einem verknüpften Railway-Projekt (ohne es auf GitHub hochzuladen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Kommandos erhalten, indem Sie das Folgende in ein Terminal eingeben.

```bash
railway help
```

### Fehlerbehebung

Der Railway-Client bietet den Logs-Befehl an, um das Ende der Logs anzuzeigen (ein vollständigeres Log ist auf der Seite für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch die Serie von Tutorials zur Arbeit mit Express. Wir hoffen, Sie haben sie nützlich gefunden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Produktionsbewährte Methoden: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktionsbewährte Methoden: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Einführung in Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Node.js-Anwendungen auf Heroku bereistellen](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js-Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimieren der Node.js-Anwendungskonkurrenzfähigkeit](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Beschränkungen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
