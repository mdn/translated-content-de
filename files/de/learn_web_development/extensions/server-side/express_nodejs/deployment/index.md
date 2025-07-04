---
title: "Express-Tutorial Teil 7: Bereitstellung in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 2e61cdcd5f0909c287d9c5b21addaf3dc95fc204
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie eine Beispielwebsite mit Express erstellt und getestet haben, ist es an der Zeit, sie auf einem Webserver bereitzustellen, damit sie über das öffentliche Internet zugänglich ist.
Diese Seite erklärt, wie Sie ein Express-Projekt hosten und beschreibt, was Sie benötigen, um es für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express-Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wo und wie Sie eine Express-App in die Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Seite fertig ist (oder "fertig genug", um mit dem öffentlichen Testen zu beginnen), müssen Sie sie an einem öffentlich zugänglicheren Ort als Ihrem persönlichen Entwicklungscomputer hosten.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, in der Sie Express/Node als Webserver verwendet haben, um Ihre Website an den lokalen Browser/das Netzwerk zu teilen. Sie haben Ihre Website mit (unsicheren) Entwicklereinstellungen betrieben, die Debugging und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zuerst:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsreife Infrastruktur für das Servieren Ihrer Website einrichten.

Dieses Tutorial bietet einige Hinweise zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.com/) installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Konsum betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Laufzeitumgebung der Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxy, Load Balancer usw.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Servercomputer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Was das tatsächlich bedeutet, ist, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server wird normalerweise ein gewisses Maß an Computerressourcen (z. B. CPU, RAM, Speicherspeicher usw.) und Internetverbindung für einen bestimmten Preis bieten.

Diese Art von aus der Ferne zugänglichen Rechen-/Netzwerkressourcen wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, um ein bestimmtes Betriebssystem vorab zu installieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständigere Umgebungen auszuwählen, möglicherweise einschließlich einer vollständigen Node-Einrichtung.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website vereinfachen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) einschränken und basieren möglicherweise auf einer älteren Version des Betriebssystems. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, wissen Sie, wo Sie anfangen sollen!

Andere Hostinganbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei dieser Art von Hosting müssen Sie sich nicht um die meisten Ihrer Produktionsumgebung (Server, Load Balancer usw.) kümmern, da die Host-Plattform diese für Sie übernimmt. Das macht die Bereitstellung ziemlich unkompliziert, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität bevorzugen, die IaaS über PaaS bietet, während andere den reduzierten Wartungsaufwand und den geringeren Skalierungsaufwand von PaaS zu schätzen wissen. Wenn Sie anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hostinganbieter auswählen, sollte er Anleitungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community Docs](https://www.digitalocean.com/community/tutorials?q=node).

## Wahl eines Hostinganbieters

Es gibt zahlreiche Hostinganbieter, die entweder aktiv _Node_ (und _Express_) unterstützen oder gut damit arbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen an.

> [!NOTE]
> Es gibt viele Hostinglösungen, und ihre Dienstleistungen und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie einen Hostinganbieter auswählen.

Einige der Dinge, die bei der Wahl eines Hosts zu berücksichtigen sind:

- Wie beschäftigt Ihre Seite voraussichtlich sein wird und die Kosten für die Daten- und Computerressourcen, die erforderlich sind, um diese Nachfrage zu erfüllen.
- Unterstützung für das horizontale Skalieren (Hinzufügen von mehr Maschinen) und vertikale Skalieren (Upgrade auf leistungsfähigere Maschinen) und die Kosten dafür.
- Die Standorte, an denen der Anbieter Rechenzentren hat, und wo der Zugriff daher voraussichtlich am schnellsten ist.
- Die historische Leistung des Hosts in Bezug auf Uptime und Downtime.
- Bereitgestellte Tools zur Verwaltung der Website - sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen oder nur eine kleine Menge an Speicher an.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, für die Sie sonst zahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass es besser gewesen wäre, von Anfang an einen anderen Dienst zu nutzen.

Die gute Nachricht ist, dass es viele Websites gibt, die "kostenlose" Computerumgebungen anbieten, die für Evaluation und Testen gedacht sind, wenn Sie gerade anfangen.
Diese sind normalerweise ziemlich ressourcenbeschränkt/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie möglicherweise nach einer Einführungsperiode ablaufen oder andere Einschränkungen aufweisen.
Sie sind jedoch großartig für das Testen von Websites mit geringem Traffic in einer gehosteten Umgebung und bieten eine einfache Möglichkeit, mehr Ressourcen zu bezahlen, wenn Ihre Seite belebter wird.
Beliebte Wahlmöglichkeiten in dieser Kategorie umfassen [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine "Basis-" oder "Hobby-" Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Computerleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/), und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hostinganbieter, die eine relativ preisgünstige Basis-Computerstufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, könnte sich herausstellen, dass Skalierbarkeit die wichtigste Erwägung ist.

## Ihre Website bereit machen zur Veröffentlichung

Die wichtigsten Dinge, über die Sie beim Veröffentlichen Ihrer Website nachdenken sollten, sind Web-Sicherheit und Performance.
Mindestens sollten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stack-Traces entfernen, die auf Fehlerseiten während der Entwicklung enthalten sind, Ihr Logging aufzuräumen, und die geeigneten Header setzen, um viele häufige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Abschnitten umreißen wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumenten — siehe [Produktionsbest-Practices: Performance und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktionsbest-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Zugangsdaten fest in **app.js** einprogrammiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, die wir geschützt haben möchten oder die korrumpiert werden könnten, besteht kein besonderes Risiko, dass diese Details durchgesickert sind.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerdaten, ist der Schutz Ihrer Datenbankzugangsdaten sehr wichtig.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion als für die Entwicklung verwenden und die Zugangsdaten der Produktivdatenbank vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hostingprovider das Setzen von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele es tun), besteht eine Möglichkeit darin, dass der Server die Datenbank-URL aus einer Umgebungsvariable abruft.
Im Folgenden ändern wir die LocalLibrary-Website so, dass sie die Datenbank-URI aus einer Betriebssystemumgebungsvariablen erhält, wenn sie definiert wurde, und andernfalls die URL der Entwicklungsdatenbank verwendet.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Sie wird folgendermaßen aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen namens `MONGODB_URI` zu erhalten, falls er gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine weitere übliche Möglichkeit, die Zugangsdaten der Produktivdatenbank vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem [dotenv](https://www.npmjs.com/package/dotenv)-Modul von npm gelesen werden).

### Setzen von NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zur Erzeugung weniger ausführlicher Fehlermeldungen, zwischenspeichert das Setzen der Variable auf _production_ View-Templates und aus CSS-Erweiterungen generierte CSS-Dateien. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch die Verwendung von `export`, einer Umgebungsdatei oder dem Betriebssystem-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungskonfiguration statt in Ihrer App vornehmen, aber wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie dies in unserem Hosting-Beispiel unten eingestellt wird.

### Angemessenes Logging

Log-Aufrufe können sich auf eine Website mit hohem Datenverkehr auswirken. In einer Produktionsumgebung müssen Sie möglicherweise die Aktivitäten der Website protokollieren (z. B. die Nachverfolgung des Verkehrs oder das Protokollieren von API-Aufrufen), aber Sie sollten versuchen, die Menge an Logging für Debugging-Zwecke zu minimieren.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das Ihnen ermöglicht, die durchgeführte Protokollierung durch das Setzen einer Umgebungsvariablen zu steuern.
Zum Beispiel zeigt das folgende Codefragment, wie Sie das "Autor"-Logging einrichten könnten.
Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Sie können dann einen bestimmten Satz von Logs aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariablen angeben.
Sie können die Variablen für die Anzeige von Autoren- und Bücherlogs wie dargestellt setzen (auch Wildcards werden unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können Loggings ersetzen, die Sie möglicherweise vorher mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Loggings über das [debug](https://www.npmjs.com/package/debug)-Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen, und beobachten Sie die Auswirkungen, die dies auf das Logging hat.

Wenn Sie die Aktivitäten der Website protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktionsbest-Practices: Performance und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden von gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort, die an einen Client zurückgesendet wird, komprimieren und so die Zeit erheblich reduzieren, die der Client benötigt, um die Seite zu laden. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Site mit der [compression](https://www.npmjs.com/package/compression)-Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die compression-Bibliothek ein, wie gezeigt. Fügen Sie die compression-Bibliothek mit der `use()`-Methode zur Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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
> Für eine Website mit hohem Datenverkehr in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden von Helmet zum Schutz vor bekannten Sicherheitslücken

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann entsprechende HTTP-Header setzen, die Ihre App vor bekannten Web-Sicherheitslücken schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und gegen welche Schwachstellen es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek ein, wie gezeigt.
Dann fügen Sie das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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

Üblicherweise würden wir einfach `app.use(helmet());` einfügen, um das _Unterset_ von sicherheitsbezogenen Headern hinzuzufügen, die für die meisten Sites sinnvoll sind.
In der [LocalLibrary-Basisschablone](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) fügen wir jedoch einige Bootstrap- und jQuery-Skripte hinzu.
Diese verstoßen gegen die _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von helmet, die das Laden von Cross-Site-Skripten nicht zulässt.
Um das Laden dieser Skripte zu ermöglichen, ändern wir die helmet-Konfiguration so, dass sie CSP-Direktiven setzt, um das Laden von Skripten von den angegebenen Domains zu erlauben.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Nutzung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Hinzufügen von Ratenbegrenzungen zu den API-Routen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Website gestellt werden könnten, wie zum Beispiel DDoS-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das nicht wie erwartet funktioniert.
Abgesehen von den Leistungsproblemen, die durch zu viele Anfragen entstehen und dazu führen können, dass Ihr Server langsamer wird, könnten auch zusätzliche Kosten für den erhöhten Verkehr anfallen.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder ein Set von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek ein, wie gezeigt.
Dann fügen Sie das Modul mit der `use()`-Methode zur Middleware-Kette hinzu.

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

Der obige Befehl begrenzt alle Anfragen auf 20 pro Minute (Sie können dies bei Bedarf ändern).

> [!NOTE]
> Drittanbieter-Dienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie erweiterte Schutzmechanismen gegen Denial-of-Service- oder andere Angriffe benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die Datei **package.json** alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Entry Point-Datei zu bestimmen.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Node-Version, die von der Bibliothek benötigt wird.
Sie können die Version von Node finden, die für die Entwicklung verwendet wurde, indem Sie den folgenden Befehl eingeben:

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

Der Hostingdienst unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version auf unterschiedlichen Hostingdiensten zu spezifizieren, aber der **package.json**-Ansatz wird allgemein unterstützt.

#### Abhängigkeiten holen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Site erneut testen und sicherstellen, dass sie durch keine unserer Änderungen beeinträchtigt wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Site aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und überprüfen Sie, ob sich die Site noch wie erwartet verhält.

### Erstellen eines Anwendungsrepositories auf GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Versionskontrollplattformen zu importieren und/oder zu synchronisieren.
Das kann die Bereitstellung und die iterative Entwicklung erheblich vereinfachen.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Werkzeugen zur Quellcodeverwaltung eine gute Software-Entwicklungspraxis darstellt, da sie es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekanntem guten Code" zu wechseln, wenn Sie es brauchen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder auf diesem Formular aus. Während diese nicht obligatorisch sind, werden sie doch dringend empfohlen.
   - Geben Sie einen neuen Repositories-Namen ein (z. B. _express-locallibrary-tutorial_), sowie eine Beschreibung (wie "Lokale Bibliothekswebsite geschrieben in Express").
   - Wählen Sie **Node** in der Auswahl _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahl _Add license_.
   - Aktivieren Sie **Repository mit einer README-Datei initialisieren**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _den gesamten_ Quellcode — einschließlich Ihres Datenbank-Benutzernamens und -Passworts — für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und dass keine Anmeldeinformationen hardcodiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen den Zugriff auf den Quellcode zu ermöglichen.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf den grünen **Klonen oder herunterladen**-Button auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im sich öffnenden Dialogfenster.
   Wenn Sie "express-locallibrary-tutorial" als Repository-Namen verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Nun, da das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Guide](https://git-scm.com/downloads)).
2. Öffnen Sie ein Befehlsfenster/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies wird das Repository im aktuellen Verzeichnis erstellen.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repo-Ordner, machen Sie sie mit _git_ Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie nach Bedarf von npm abrufen sollten).
2. Öffnen Sie ein Befehlsfenster/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu prüfen, ob alle Dateien, die Sie `commit`ten wollen, korrekt sind (Sie wollen Quellcodedateien, keine Binärdateien, temporären Dateien usw. hinzufügen).
   Es sollte etwa wie die untenstehende Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit`en Sie die Dateien in Ihr lokales Repo.
   Dies entspricht dem Unterschreiben der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt ist es, Ihr lokales Repo mit dem Remote-GitHub-Repo mit dem folgenden Befehl zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie in der Lage sein, zur Seite auf GitHub zurückzukehren, auf der Sie Ihr Repo erstellt haben, die Seite zu aktualisieren und zu sehen, dass nun Ihre gesamte Anwendung hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, sobald sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu machen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst (oder für die Entwicklung) nützlich sein könnten, könnten andere es nicht sein.
Sie können dies mit `git` an der Befehlszeile tun:

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
> Um mehr zu lernen, schauen Sie sich die [Git-Lernressourcen](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) an.

## Beispiel: Hosting auf Railway

<!--

- Glitch hat einen [kostenlosen Starterplan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen.
  Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist MDN sehr wichtig!
-->

Dieser Abschnitt bietet eine praktische Demonstration, wie man die _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

> [!NOTE]
> MDN hat dieses Projekt auf die kostenlose Stufe einer Reihe von Hostingdiensten migriert, die anschließend zurückgezogen wurden (Heroku, Railway, Glitch).
> Um die Wartungskosten zu reduzieren, haben wir uns für Railway entschieden, das eine kostengünstige Hobby-Stufe hat.
>
> Wenn Sie stattdessen einen kostenlosen Dienst finden und verwenden möchten, werden Sie die folgenden Anweisungen dennoch nützlich finden.
> Die meisten Dienste haben einen ähnlichen Bereitstellungsansatz und Dokumentationen, die Ihnen bei der Migration helfen können.

### Warum Railway?

Railway ist eine attraktive Hostingoption aus mehreren Gründen:

- Railway kümmert sich um die meiste Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht mit Servern, Load Balancern, Reverse Proxies usw. beschäftigen zu müssen, macht den Einstieg viel einfacher.
- Railway legt [einen Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Railway erlernen, sind übertragbar.
  Während Railway einige ausgezeichnete neue Funktionen bietet, verwenden viele andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es hat eine vergleichsweise kostengünstige [Hobby-Stufe](https://railway.com/pricing).
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway [für Ihre eigene Website geeignet ist](#wahl_eines_hostinganbieters).

### Wie funktioniert Railway?

Webanwendungen laufen jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und Umgebungen automatisch erkennen und installieren kann, basierend auf ihrer Verwendung von "allgemeinen Konventionen".
Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann den für den Aufbau verwendeten Paket-Manager anhand der "Lock"-Datei bestimmen.
Wenn die Anwendung beispielsweise die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ verwendet wird, um die Pakete zu installieren, während es bei Vorhandensein von **yarn.lock** weiß, dass _yarn_ verwendet wird.
Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten mit den Namen "build" und "start" in der Paketdatei, um diese zum Erstellen und Ausführen des Codes zu verwenden.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind.
> Sie müssen für dieses Tutorial nichts weiter darüber wissen, aber Sie können mehr über Optionen für die Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) herausfinden.

Sobald die Anwendung ausgeführt wird, kann sie sich selbst mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable abrufen.
Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Tool.
Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von der lokalen Branch auf die Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie für die Bereitstellung der App auf Railway wissen müssen.
Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Ein Railway-Konto bekommen

Um Railway zu nutzen, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten einzuloggen.
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Danach sind Sie im Railway.com-Dashboard angemeldet: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes konfigurieren wir Railway, um unsere Bibliothek von GitHub bereitzustellen.
Wählen Sie zunächst die **Dashboard**-Option aus dem oberen Menü der Seite und dann den Button **New Project**:

![Railway-Website-Dashboard mit hervorgehobenem Button für neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zu erstellen, das zuerst in Ihrem GitHub-Konto erstellt wird, sowie eine Anzahl von Datenbanken.
Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup mit hervorgehobener Deployment-Option "Deploy from GitHub repo"](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup, das GitHub-Repos zeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, auf dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen, wobei der Fortschritt auf der Registerkarte Bereitstellungen angezeigt wird.
Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard, das die Registerkarte Bereitstellungen für das bereitgestellte Projekt zeigt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Settings_, scrollen Sie dann zum Abschnitt Domains nach unten und drücken Sie den Button **Generate Domain**.

![Railway-Projekteinstellungen-Registerkarte mit Button zum Generieren einer Domain](railway_project_generate_domain.png)

Dies wird die Site veröffentlichen und die Domain anstelle des Buttons einfügen, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte mit einem Link zur lokalen Bibliotheksseite](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen.
Beachten Sie, dass wir, da wir keine Produktionsdatenbank angegeben haben, die lokale Bibliothek mit Ihren Entwicklungsdaten öffnen werden.

### Bereitstellen und Verbinden einer MongoDB-Datenbank

Anstelle unserer Entwicklungsdaten lassen Sie uns als Nächstes eine Produktions-MongoDB-Datenbank erstellen, die stattdessen verwendet wird.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, sie in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genauso wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard**-Option aus dem oberen Menü der Website und wählen Sie dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes zu setzen).
Wählen Sie den **New** Button aus, der verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobenem Button für neuen Dienst](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach der Art des hinzuzufügenden Dienstes gefragt werden:

![Railway-Popup, das Optionen für einen neuen Dienst zeigt, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um die Datenbank hinzuzufügen

![Railway-Popup, das verschiedene auswählbare Datenbanken zeigt: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie jetzt sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie die Registerkarte _Variables_ und kopieren Sie die "Mongo_URL" (das ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm mit der URL, die benötigt wird, um sich mit der Datenbank zu verbinden](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir sie der Anwendungsprozess mit einer Umgebungsvariablen hinzufügen.
Öffnen Sie zuerst den Anwendungsdienst.
Dann wählen Sie die Registerkarte _Variables_ und drücken den Button **New Variable**.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindung URL, die Sie für die Datenbank kopiert haben, ein (`MONGODB_URI` ist der Name der Umgebungsvariablen, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen).
Dies wird etwas wie der untenstehende Bildschirm aussehen.

![Railway Website Variablen Bildschirm beim Hinzufügen der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Klicken Sie auf **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn sie Variablen aktualisiert. Wenn Sie die Startseite jetzt überprüfen, sollte sie null Werte für Ihre Objektanzahlen anzeigen, da die oben genannten Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie werden sich daran erinnern, dass wir in einem vorherigen Abschnitt die Umgebungsvariable `NODE_ENV` auf 'production' setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies im selben Bildschirm tun, in dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst.
Dann wählen Sie die Registerkarte _Variables_, wo Sie sehen, dass `MONGODB_URI` bereits definiert ist, und drücken den Button **New Variable**.

![Railway-Variablen-Registerkarte mit hervorgehobenem Button "New Variable"](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable und `production` als Name der Umgebung ein.
Drücken Sie dann den Button **Add**.

![Railway-Variablen-Registerkarte mit neu gesetzter NODE_ENV-Variable auf 'production'](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist jetzt eingerichtet und für den produktiven Einsatz konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen und sie sollte auf dieselbe Weise funktionieren, wie sie es während der Entwicklung getan hat (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB Produktions-Datenbank-URL), wie im Abschnitt [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen - einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) besprochen.

### Der Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen.
Einige der wichtigeren Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers für ein zugehöriges Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und die Ausführung Ihres Projekts lokal unter Verwendung derselben Einstellungen, die Sie auf dem Produktionsserver haben.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie den folgenden Befehl in ein Terminal eingeben.

```bash
railway help
```

### Debuggen

Der Railway-Client bietet den Log-Befehl an, um die Logs anzuzeigen (ein ausführlicheres Log ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Express-Apps in der Produktion, und auch der Serie von Tutorials über die Arbeit mit Express. Wir hoffen, Sie haben es nützlich gefunden. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Produktionsbest-Practices: Performance und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktionsbest-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation
  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Erste Schritte mit Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js-Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimieren der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
