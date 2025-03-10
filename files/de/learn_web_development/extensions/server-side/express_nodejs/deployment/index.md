---
title: "Express Tutorial Teil 7: Bereitstellung in der Produktion"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie eine großartige [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website erstellt (und getestet) haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie vom Bibliothekspersonal und den Mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zur Bereitstellung Ihrer Website finden könnten und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.

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

## Übersicht

Sobald Ihre Website fertig ist (oder "fertig genug", um mit öffentlichen Tests zu beginnen), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Website an den lokalen Browser/das Netzwerk zu verteilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen ausgeführt, die Debugging und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsfähige Infrastruktur für Ihre Website einrichten.

Dieses Tutorial gibt einige Hinweise zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App bereit für die Produktion zu machen, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/)-Cloud-Hosting-Dienst installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Server-Computer bereitgestellt wird, auf dem Sie Ihre Website für den externen Verbrauch ausführen. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website basiert.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse-Proxy, Load Balancer etc.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Server-Computer könnte sich auf Ihrem Gelände befinden und über eine schnelle Verbindung mit dem Internet verbunden werden, aber es ist weitaus üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Was dies tatsächlich bedeutet, ist, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet normalerweise ein garantiertes Level an Rechenressourcen (z. B. CPU, RAM, Speicherplatz, etc.) und Internetverbindung zu einem bestimmten Preis.

Diese Art von fernzugänglicher Computer-/Netzwerk-Hardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, umfassendere Umgebungen auszuwählen, möglicherweise einschließlich eines vollständigen Node-Setups.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website sehr einfach machen, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen unbekannten Server (oder andere Komponenten) beschränken und basieren möglicherweise auf einer älteren Version des Betriebssystems. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wenn Sie Teile des Systems aktualisieren müssen, eine Ahnung haben, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Verwendung dieser Art von Hosting müssen Sie sich keine Sorgen um den größten Teil Ihrer Produktionsumgebung machen (Server, Load Balancer, etc.), da die Host-Plattform diese für Sie übernimmt. Das macht die Bereitstellung ziemlich einfach, da Sie sich nur auf Ihre Webanwendung und nicht auf eine andere Serverinfrastruktur konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität bevorzugen, die IaaS gegenüber PaaS bietet, während andere den reduzierten Wartungsaufwand und die einfachere Skalierung von PaaS schätzen. Wenn Sie gerade erst anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, deshalb machen wir das in diesem Tutorial.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollten sie Anleitungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy, etc. anbieten. Beispielsweise gibt es viele Schritt-für-Schritt-Leitfäden für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekannt sind, entweder aktiv zu unterstützen oder gut mit _Node_ (und _Express_) zu arbeiten. Diese Anbieter bieten unterschiedliche Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Services und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen einführen, lohnt es sich, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie sich für einen Hosting-Anbieter entscheiden.

Einige der Überlegungen bei der Auswahl eines Hosts:

- Wie beschäftigt Ihre Website wahrscheinlich sein wird und die Kosten der Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu befriedigen.
- Unterstützungsniveau für das horizontale Skalieren (Hinzufügen weiterer Maschinen) und das vertikale Skalieren (Upgrade auf leistungsfähigere Maschinen) und die Kosten dafür.
- Die Standorte, an denen der Anbieter Datenzentren hat, und daher, wo der Zugriff wahrscheinlich am schnellsten ist.
- Historische Verfügbarkeit und Ausfallzeiten des Hosts.
- Bereitgestellte Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preisklassen an oder bieten nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domainnamen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Stufe, auf die Sie sich verlassen, im Laufe der Zeit ausläuft und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuteten, dass Sie von Anfang an besser einen anderen Dienst hätten nutzen sollen!

Die gute Nachricht, wenn Sie gerade erst anfangen, ist, dass es einige Websites gibt, die "kostenlose" Computerumgebungen zur Evaluierung und zum Testen bereitstellen. Diese sind normalerweise ziemlich ressourcenbeschränkte/limitierte Umgebungen, und Sie müssen sich bewusst sein, dass sie möglicherweise nach einem Einführungspaket auslaufen oder andere Einschränkungen haben. Sie sind jedoch großartig für das Testen von wenig genutzten Websites in einer gehosteten Umgebung und können einen einfachen Übergang zur Zahlung für mehr Ressourcen bieten, wenn Ihre Website belebter wird. Beliebte Wahlmöglichkeiten in dieser Kategorie sind [Glitch](https://glitch.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/) usw.

Die meisten Anbieter bieten auch eine "Basic"- oder "Hobby"-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Mengen an Rechnerleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/) und [Python Anywhere](https://www.pythonanywhere.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basis-Computing-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann es sich herausstellen, dass Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website bereitstellen

Die Hauptpunkte, die beim Veröffentlichen Ihrer Website zu beachten sind, sind Websicherheit und Leistung. Mindestens sollten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern, die Stack-Traces entfernen, die während der Entwicklung auf Fehlerseiten enthalten sind, Ihr Logging aufräumen und die geeigneten Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Abschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt andere nützliche Tipps in den Express-Dokumentationen — siehe [Produktionsbest Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktions Best Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

In diesem Tutorial haben wir bisher eine einzelne Entwicklungsdatenbank verwendet, für die die Adresse und Anmeldeinformationen in **app.js** fest kodiert sind. Da die Entwicklungsdatenbank keine Informationen enthält, deren Preisgabe oder Beschädigung wir befürchten, besteht kein besonderes Risiko im Leaken dieser Details. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbankanmeldeinformationen sehr wichtig.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion als für die Entwicklung verwenden und außerdem die Anmeldeinformationen für die Produktionsdatenbank getrennt vom Quellcode aufbewahren, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einrichtung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele es tun), ist eine Möglichkeit, dies zu tun, den Server die Datenbank-URL aus einer Umgebungsvariablen abrufen zu lassen. Unten ändern wir die LocalLibrary-Website, um die Datenbank-URI aus einer Betriebssystemumgebungsvariablen zu erhalten, wenn diese definiert wurde, und andernfalls die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen namens `MONGODB_URI` zu erhalten, falls diese gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine andere übliche Methode, um die Anmeldeinformationen der Produktionsdatenbank getrennt vom Quellcode zu halten, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat im Dateisystem bereitgestellt werden (zum Beispiel könnten sie mit dem npm [dotenv](https://www.npmjs.com/package/dotenv)-Modul gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack-Traces in Fehlerseiten entfernen, indem wir die `NODE_ENV`-Umgebungsvariable auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Zusätzlich zum Erzeugen weniger ausführlicher Fehlermeldungen bewirkt das Setzen der Variablen auf _production_, dass View-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, zwischengespeichert werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die App-Leistung um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder dem Betriebssystem-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrem Umgebung-Setup vornehmen, anstatt in Ihrer App, aber wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie dies für unser Hosting-Beispiel unten eingestellt wird.

### Angemessenes Logging

Logging-Aufrufe können Auswirkungen auf eine hochfrequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z. B. den Traffic verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge des zur Debugging-Zwecken hinzugefügten Loggings zu minimieren.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das Ihnen ermöglicht, zu steuern, welches Logging ausgeführt wird, indem Sie eine Umgebungsvariable setzen. Zum Beispiel zeigt der folgende Codeausschnitt, wie Sie "author"-Logging einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Menge von Logs aktivieren, indem Sie sie als kommaseparierte Liste in der `DEBUG`-Umgebungsvariablen angeben. Sie können die Variablen zum Anzeigen der Logs für Autoren und Bücher wie gezeigt setzen (auch Platzhalter sind unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe von `debug` können loggen, was Sie zuvor möglicherweise mit `console.log()` oder `console.error()` getan haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug)-Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie die Auswirkungen auf das Logging.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Logging-Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktionsbest Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort komprimieren, die an einen Client gesendet wird, was die Zeit bis zur Übertragung und das Laden der Seite erheblich reduziert. Die Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Site hinzu, indem Sie die [compression](https://www.npmjs.com/package/compression)-Middleware verwenden. Installieren Sie dies im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungsbibliothek ein, wie gezeigt. Fügen Sie die Komprimierungsbibliothek mit der `use()` Methode in die Middleware-Kette ein (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten - in diesem Fall alle!)

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
> Für eine hochbelastete Website in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um sich vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header gesetzt werden und vor welchen Schwachstellen es schützt).

Installieren Sie dies im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek ein, wie gezeigt. Fügen Sie dann das Modul mit der `use()` Methode in die Middleware-Kette ein.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um die _Untermenge_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Sites sinnvoll ist. In der [LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) fügen wir jedoch einige Bootstrap- und jQuery-Skripts ein. Diese verletzen die _Standard-_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) von Helmet, die das Laden von Skripten von Cross-Site verweigert. Um das Laden dieser Skripte zu ermöglichen, ändern wir die Helmet-Konfiguration so, dass sie CSP-Direktiven setzt, um das Laden von Scripten aus den angegebenen Domains zu erlauben. Auf Ihrem eigenen Server können Sie spezifische Header hinzufügen/deaktivieren, die Sie benötigen, indem Sie den [Anleitungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Begrenzung der Anfragehäufigkeit zu den API-Routen hinzufügen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Website gestellt werden könnten, wie z. B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das nicht wie erwartet funktioniert. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen verursacht werden und Ihren Server verlangsamen können, können Ihnen auch Gebühren für den zusätzlichen Datenverkehr berechnet werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Gruppe von Routen gestellt werden können.

Installieren Sie dies im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek ein, wie gezeigt. Fügen Sie dann das Modul mit der `use()` Methode in die Middleware-Kette ein.

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
> Drittanbieter-Services wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie fortgeschrittenen Schutz vor Denial-of-Service oder anderen Angriffen benötigen.

#### Setzen der Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Einstiegspunk-Datei herauszufinden.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Version von Node herausfinden, die für die Entwicklung verwendet wurde, indem Sie den Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json**, und fügen Sie diese Information als **engines > node** ein, wie gezeigt (verwenden Sie die Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Service könnte die spezifische angegebene Version von Node nicht unterstützen, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit der gleichen Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es andere Möglichkeiten geben kann, die Node-Version auf verschiedenen Hosting-Services anzugeben, aber der **package.json**-Ansatz wird weitgehend unterstützt.

#### Abhängigkeiten holen und erneut testen

Bevor wir fortfahren, testen wir die Website erneut und stellen sicher, dass sie durch keine unserer Änderungen beeinträchtigt wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Root des Projekts ausführen:

```bash
npm install
```

Starten Sie nun die Website (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob die Website immer noch so funktioniert, wie Sie es erwarten.

### Ein Anwendungs-Repository auf GitHub erstellen

Viele Hosting-Services ermöglichen es Ihnen, Projekte von einem lokalen Repository oder von cloudbasierten Versionskontrollplattformen zu importieren oder zu synchronisieren. Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Versionskontrollwerkzeugen eine gute Softwareentwicklungspraktik ist, da sie es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekanntem gutem Code" zu wechseln, wenn Sie müssen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie im oberen Menü auf den **+**-Link und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Während diese nicht zwingend sind, werden sie dringend empfohlen.

   - Geben Sie einen neuen Repository-Namen ein (z. B. _express-locallibrary-tutorial_), und Beschreibung (z. B. "Local Library-Website in Express (Node)".
   - Wählen Sie **Node** in der Auswahliste für _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahliste für _Add license_.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardwert "Öffentlich" macht _allen_ Quellcode sichtbar — einschließlich Ihres Datenbank-Benutzernamens und Passworts — für jeden im Internet! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen hart kodiert hat.
   >
   > Wählen Sie andernfalls die Option "Privat", um nur ausgewählten Personen Zugriff auf den Quellcode zu gewähren.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf den grünen **Clone or download**-Button auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im sich öffnenden Dialogfeld.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, wo das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
2. Öffnen Sie eine Befehlszeile/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies wird das Repository im aktuellen Verzeichnis erstellen.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repo-Ordner, machen Sie diese mit _git_ zu einem Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne den Ordner **/node_modules**, der Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Befehlszeile/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, dass alle Dateien, die Sie `commit`ten möchten, korrekt sind (Sie möchten Quellcodedateien einschließen, keine Binärdateien, temporären Dateien usw.). Es sollte etwa wie die folgende Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit`en Sie die Dateien zu Ihrem lokalen Repo. Dies ist das Äquivalent zur Unterzeichnung der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. An diesem Punkt wurde das entfernte Repo nicht geändert. Der letzte Schritt besteht darin, Ihr lokales Repo mit dem entfernten GitHub-Repo zu synchronisieren (`push`) mit dem folgenden Befehl:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zur Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, aktualisieren Sie die Seite, und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, während sich Dateien ändern, mit diesem add/commit/push-Zyklus.

Dies ist ein guter Zeitpunkt, um eine Sicherungskopie Ihres "Vanilla"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, nützlich sein könnten für die Bereitstellung auf jedem Hosting-Service (oder für die Entwicklung), andere möglicherweise nicht. Sie können dies mit `git` in der Befehlszeile tun:

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
> Git ist unglaublich leistungsfähig! Um mehr zu erfahren, schauen Sie sich [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) an.

## Beispiel: Hosting auf Glitch

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Glitch](https://glitch.com/) hosten kann.

### Warum Glitch?

Wir entscheiden uns, Glitch aus mehreren Gründen zu verwenden:

- Glitch hat einen [kostenlosen Starter-Plan](https://glitch.com/pricing), der _wirklich_ kostenlos ist, wenn auch mit einigen Einschränkungen. Die Tatsache, dass es für alle Entwickler erschwinglich ist, ist für MDN wirklich wichtig!
- Glitch kümmert sich um die Infrastruktur, sodass Sie es nicht müssen. Sich keine Sorgen um Server, Load Balancer, Reverse Proxies usw. machen zu müssen, macht den Einstieg viel einfacher.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Glitch lernen werden, sind übertragbar.
- Die Service- und Planbeschränkungen haben keinen wirklichen Einfluss auf die Nutzung von Glitch für das Tutorial. Zum Beispiel:

  - Der Starterplan bietet nur 1000 "Projektstunden" pro Monat, die monatlich zurückgesetzt werden. Dies wird verwendet, wenn Sie aktiv die Website bearbeiten oder jemand darauf zugreift. Wenn niemand auf die Site zugreift oder sie bearbeitet, schläft sie.
  - Die Starterplan-Umgebung hat eine begrenzte Menge an Container-RAM und Speicherplatz. Es gibt mehr als genug für das Tutorial, insbesondere, da unsere Datenbank anderswo gehostet wird.
  - Eigene Domains werden nicht gut unterstützt (zum Zeitpunkt des Schreibens).
  - Weitere Einschränkungen finden Sie auf der [Glitch-Technische-Einschränkungen-Seite](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions).

Obwohl Glitch für das Hosting dieser Demonstration geeignet ist, sollten Sie sich die Zeit nehmen, um festzustellen, ob es [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Glitch?

Glitch bietet eine webbasierte Schnittstelle, in der Sie Projekte aus Starter-Templates erstellen oder aus GitHub importieren und dann die Projektdateien hinzufügen und bearbeiten können. Während Sie Änderungen vornehmen, wird das Projekt in seinen eigenen isolierten und unabhängigen virtualisierten Container gebaut und ausgeführt.

Wie das alles "unter der Haube" funktioniert, ist ein Mysterium — Glitch sagt es nicht. Was klar ist, ist, dass solange Sie eine ziemlich standardmäßige NodeJS-Webanwendung erstellen (zum Beispiel, indem Sie **package.json** für Ihre Abhängigkeiten verwenden) und nicht mehr Ressourcen verbrauchen, als in den [technischen Einschränkungen](https://help.glitch.com/hc/en-us/articles/16287495313293-Technical-Restrictions) aufgeführt sind, sollte Ihre Anwendung „einfach funktionieren“.

Sobald die Anwendung läuft, kann sie für die Produktion mit [privaten Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) konfiguriert werden, die in einer `.env`-Datei bereitgestellt werden. Die Werte in den geheimen Daten werden von der Anwendung als Umgebungsvariablen gelesen, was, wie Sie sich aus einem vorherigen Abschnitt erinnern werden, die Methode ist, wie wir unsere Anwendung konfiguriert haben, um ihre Datenbank-URL zu erhalten. Beachten Sie, dass die Variablen _geheim_ sind: die `.env` sollte nicht in Ihr GitHub-Repository aufgenommen werden.

Die Glitch-Bearbeitungsansicht bietet auch _Terminal_-Zugang zur Web-App-Umgebung, die Sie verwenden können, um mit der Web-App zu arbeiten, als ob sie auf Ihrem lokalen Rechner ausgeführt wird.

Das ist alles, was Sie brauchen, um loszulegen. Als Nächstes richten wir ein Glitch-Konto ein, laden das Bibliotheksprojekt von GitHub hoch und verbinden es mit einer Datenbank.

### Erstellen Sie sich ein Glitch-Konto

Um mit Glitch zu arbeiten, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [glitch.com](https://glitch.com/) und klicken Sie auf die **Anmelden**-Schaltfläche in der oberen Symbolleiste.
- Wählen Sie in dem Popup GitHub, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Sie werden dann zum Glitch-Dashboard weitergeleitet: <https://glitch.com/dashboard>.

### Beheben der Node.js-Version

Hosting-Anbieter unterstützen in der Regel einige Hauptversionen der jüngsten Node.js-Veröffentlichungen. Wenn die exakte "Minder"-Version, die Sie in Ihrer `package.json`-Datei angegeben haben, nicht unterstützt wird, verwenden sie in der Regel die nächste Version, die sie unterstützen (und oft wird das einfach funktionieren).

Leider ist zum Zeitpunkt des Schreibens die höchste unterstützte Version auf Glitch Node.js 16. Wenn Sie mit Node.js 17 oder später entwickelt haben, sollten Sie die Version in Ihrer `package.json`-Datei wie gezeigt reduzieren. Sie müssen auch erneut testen:

```json
  "engines": {
    "node": ">=v16"
  },
```

Glitch [plant, Node zukünftig zu aktualisieren und besser aktuell zu halten](https://blog.glitch.com/post/rebuilding-glitch/) — und es kann sein, dass es bis zu dem Zeitpunkt, an dem Sie dies lesen, die Versionsbeschränkung nicht mehr gibt. Statt die `node`-Version herabzustufen, könnten Sie Ihr Projekt hochladen, um zu sehen, ob es gebaut wird. Wenn Fehler auftreten und Ihre Anwendung nicht geladen wird, sollten Sie versuchen, die `node`-Version in der Glitch-Editorin Ihrer `package.json` auf `>=v16` zu setzen.

> [!NOTE]
> Sie können die unterstützten Versionen auch überprüfen, indem Sie den folgenden Befehl in das Terminal eines beliebigen Glitch-Projekts eingeben:
>
> ```sh
> ls -l /opt/nvm/versions/node | grep '^d' | awk '{ print $9 }'
> ```

### Bereitstellen auf Glitch von GitHub

Als Nächstes importieren wir das Bibliotheksprojekt aus GitHub. Wählen Sie zuerst die **Dashboard**-Option aus dem Top-Menü der Site und wählen Sie dann die **Neues Projekt**-Schaltfläche. Glitch zeigt eine Liste von Optionen für das neue Projekt an; wählen Sie **Import aus GitHub**.

![Glitch-Webseiten-Dashboard, das eine neue Projekt-Schaltfläche und ein Popup-Menü mit der Option "Import aus GitHub" zeigt](glitch_new_project_import_github.png)

Ein Popup wird angezeigt. Geben Sie die URL Ihres GitHub-Bibliotheksprojekts in das Popup ein und drücken Sie **OK**. Unten haben wir das Repo für das funktionierende Projekt eingegeben.

![Glitch-Popup zum Eingeben der URL des GitHub-Repos zum Importieren](glitch_new_project_github_repo_url.png)

Glitch importiert dann das Projekt und zeigt Benachrichtigungen über den Fortschritt an. Bei Abschluss zeigt es die Bearbeitungsansicht für das neue Projekt an, wie unten gezeigt.

![Glitch-Editor-Ansicht für importiertes Projekt](glitch_imported_project_in_editor.png)

Sie können die Live-URL der Website erhalten, indem Sie die **Teilen**-Schaltfläche auswählen.

![Glitch-Editor-Ansicht für importiertes Projekt](glitch_share_project.png)

Öffnen Sie einen neuen Browser-Tab und kopieren Sie den Link zur Live-Website in die Adressleiste. Die lokale Bibliotheks-Website sollte öffnen und Daten aus der Entwicklungsdatenbank anzeigen.

> [!NOTE]
> Dieser Prozess war ein einmaliger Import aus GitHub. Sie können auch GitHub-Aktionen wie [glitch-project-sync](https://github.com/marketplace/actions/glitch-project-sync) verwenden, um Glitch und Ihr Projekt synchron zu halten.

### Verwenden Sie eine Produktions-MongoDB-Datenbank

Sie sollten eine andere Datenbank für die Produktion als die Entwicklung einrichten. Während Glitch nur SQLite-Datenbanken hostet (und wir eingerichtet sind, um MongoDB zu verwenden), bieten viele andere Sites MongoDB-Datenbanken als Service an.

Eine Möglichkeit besteht darin, den [Einrichtungsanweisungen für die MongoDB-Datenbank](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#setting_up_the_mongodb_database) aus einem früheren Tutorial zu folgen, um eine neue Produktionsdatenbank einzurichten.

Um die Produktionsdatenbank für die Bibliotheksanwendung zugänglich zu machen, öffnen Sie die `.env`-Datei in der Editoransicht des Projekts. Geben Sie die Datenbank-URL-Variablen `MONGODB_URI` und die URL Ihrer Produktionsdatenbank ein. Die Site wird aktualisiert, sobald Sie Werte in den Editor eingeben.

![Glitch-Editor für .env-Datei für private Daten mit Produktionsvariablen](glitch_env.png)

> [!NOTE]
> Wir haben diese Datei nicht erstellt. Sie ist für [private Daten](https://help.glitch.com/hc/en-us/articles/16287550167437-Adding-Private-Data) gedacht und wurde beim Import nach Glitch automatisch erstellt. Sie wird nie exportiert oder kopiert.

### Andere Konfigurationsvariablen

Sie erinnern sich an einen vorangegangenen Abschnitt, in dem wir das [Setzen von NODE_ENV auf 'production'](#set_node_env_to_production) betrachten, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir tun dies in derselben Datei, in der wir die `MONGODB_URI`-Variable setzen.

Öffnen Sie `.env` und fügen Sie eine `NODE_ENV`-Variable mit dem Wert `production` hinzu (siehe den Screenshot im vorherigen Abschnitt).

Die lokale Bibliotheksanwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte wie während der Entwicklung funktionieren (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie in dem Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben ist.

### Debugging von Express Apps auf Glitch

Glitch ermöglicht effektives Debuggen. Einige der Dinge, die Sie tun können, sind:

- Wählen Sie die Log-Schaltfläche am unteren Rand der Editor-Ansicht, um Informationen von Ihrem Server zu sehen, wie Konsolenlog-Ausgaben.
- Wählen Sie die Terminal-Schaltfläche am unteren Rand der Editor-Ansicht, um ein Terminal in der Hosting-Umgebung zu öffnen. Sie können dies verwenden, um in der Umgebung Befehle und Tools auszuführen. Zum Beispiel könnten Sie `node -v` verwenden, um die Node-Version zu überprüfen.
- Interaktives Debugging in VS Code mit der GLITCH-Erweiterung für VS Code.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installieren kann.

### Warum Railway?

> [!WARNING]
> Railway hat keinen vollständig kostenlosen Starter-Tarif mehr. Wir haben diese Anleitung beibehalten, da Railway einige großartige Funktionen hat und für einige Benutzer eine bessere Option sein wird.

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den Großteil der Infrastruktur, sodass Sie es nicht müssen. Nicht um Server, Load Balancer, Reverse Proxy und so weiter kümmern zu müssen, macht es viel einfacher, anzufangen.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Verwenden von Railway lernen werden, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Services viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn am Ende lieben, ist die Preisgestaltung vorhersehbar und das Skalieren Ihrer App sehr einfach.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und auch zu verstehen, wie sie gestartet wird.

Railway macht es einfach, da es viele verschiedene Webanwendungs-Frameworks und Umgebungen automatisch erkennen und installieren kann, basierend auf ihrer Verwendung "gemeinsamer Konventionen". Beispielsweise erkennt Railway Node-Anwendungen daran, dass sie eine **package.json**-Datei haben und kann den verwendeten Paketmanager für das Bauen aus der "Lock"-Datei bestimmen. Wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass es _npm_ verwenden soll, um die Pakete zu installieren, während es bei **yarn.lock** weiß, dass es _yarn_ verwenden soll. Nach der Installation aller Abhängigkeiten sucht Railway nach Skripten mit den Namen "build" und "start" in der Paketdatei und verwendet diese zum Bauen und Ausführen des Codes.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks in verschiedenen Programmiersprachen zu erkennen. Sie müssen nichts Weiteres für dieses Tutorial wissen, aber Sie können mehr über die Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung ausgeführt wird, kann sie sich mit Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable abrufen. Der Datenbankservice selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Tool. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Branch zur Live-Site hochzuladen, die Logs des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und zu holen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie das CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist alles, was Sie wissen müssen, um die App zu Railway zu deployen. Als Nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Erstellen Sie sich ein Railway-Konto

Um mit Railway zu arbeiten, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Gehen Sie eventuell zu Ihrem E-Mail-Konto und verifizieren Sie Ihr Konto.
- Sie werden dann zum Railway.com-Dashboard weitergeleitet: <https://railway.com/dashboard>.

### Bereitstellen auf Railway von GitHub

Als Nächstes richten wir Railway ein, um unsere Bibliothek aus GitHub bereitzustellen. Wählen Sie zuerst die **Dashboard**-Option aus dem Top-Menü der Site und wählen Sie dann die **Neues Projekt**-Schaltfläche:

![Railway-Website-Dashboard, das die neue Projekt-Schaltfläche zeigt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt von einer Vorlage zu deployieren, das zuerst in Ihrem GitHub-Konto erstellt wurde und eine Reihe von Datenbanken. Wählen Sie **Von GitHub-Repo deployen**.

![Railway-Popup, das Bereitstellungsoptionen mit der hervorgehobenen Option "Von GitHub-Repo deployen" anzeigt](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während des Setups mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup, das die GitHub-Repos zeigt, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt deployen** auswählen.

![Bestätigungsbildschirm, wenn Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt und deployiert dann Ihr Projekt und zeigt den Fortschritt auf der Deployments-Registerkarte an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Dashboard, die die Deployments-Registerkarte für das bereitgestellte Projekt zeigt](railway_project_deploy.png)

Wählen Sie nun die _Einstellungen_-Registerkarte aus, scrollen Sie dann nach unten bis zum Abschnitt Domains und drücken Sie die **Domain generieren**-Schaltfläche.

![Railway-Projekt-Einstellungen-Registerkarte, die die Schaltfläche zur Domain-Generierung zeigt](railway_project_generate_domain.png)

Dies wird die Site veröffentlichen und die Domain anstelle der Schaltfläche anzeigen, wie unten gezeigt.

![Railway-Projekt-Einstellungen-Registerkarte, die einen Link zur lokalen Bibliothek-Site zeigt](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass, da wir keine Produktionsdatenbank angegeben haben, die lokale Bibliothek mit Ihren Entwicklungsdaten geöffnet wird.

### Bereitstellen und verbinden Sie eine MongoDB-Datenbank

Anstatt unsere Entwicklungsdaten zu verwenden, erstellen wir nun eine Produktions-MongoDB-Datenbank, die wir stattdessen verwenden. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts Sie davon abhält, sie in einem eigenen gesonderten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genau wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard**-Option aus dem Top-Menü der Site und dann Ihr Anwendungsprojekt. An diesem Punkt enthält es nur einen einzigen Service für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Wählen Sie die **Neu**-Schaltfläche, die verwendet wird, um dem aktuellen Projekt Dienste hinzuzufügen.

![Railway-Projekt mit hervorgehobener neuer Dienst-Schaltfläche](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie zur Art des hinzuzufügenden Dienstes aufgefordert werden:

![Railway-Popup, das die Optionen für einen neuen Dienst zeigt, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Popup, das verschiedene Datenbanken zeigt, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway erstellt dann einen Dienst mit einer leeren Datenbank im selben Projekt. Nach Abschluss sehen Sie jetzt die Dienste "Anwendung" und "Datenbank" in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankservices](railway_project_two_services.png)

Wählen Sie den MongoDB-Service aus, um Informationen über die Datenbank anzuzeigen. Öffnen Sie die _Variablen_-Registerkarte und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungsbildschirm, der die zum Verbinden zur Datenbank notwendige URL zeigt](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir sie dem Anwendungsprozess über eine Umgebungsvariable hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die _Variablen_-Registerkarte und drücken Sie die **Neue Variable**-Schaltfläche.

Geben Sie den Namen der variablen `MONGODB_URI` und die kopierte Verbindungs-URL für die Datenbank ein (`MONGODB_URI` ist der Name der Umgebungsvariablen, von der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies sieht etwa wie der unten gezeigte Bildschirm aus.

![Railway-Website: Variablen-Screen während des Hinzufügens der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie die Startseite jetzt überprüfen, sollte sie Nullwerte für Ihre Objektanzahlen anzeigen, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich an einen vorangegangenen Abschnitt, in dem wir das [Setzen von NODE_ENV auf 'production'](#set_node_env_to_production) betrachten, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies im selben Bildschirm tun, in dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die _Variablen_-Registerkarte aus, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist und drücken Sie die **Neue Variable**-Schaltfläche.

![Railway-Variablen-Registerkarte mit hervorgehobener neuer Variable-Schaltfläche](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Name der Umgebung an. Drücken Sie dann die **Hinzufügen**-Schaltfläche.

![Railway-Variablen-Registerkarte mit neu eingestellter NODE_ENV-Variable auf 'production'](railway_variables_new_node_env.png)

Die lokale Bibliotheksanwendung ist nun eingerichtet und für die Produktion konfiguriert. Sie können Daten über die Website-Schnittstelle hinzufügen, und sie sollte auf die gleiche Weise wie während der Entwicklung funktionieren (obwohl mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie in dem Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben ist.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers in ein zugehöriges Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit den gleichen Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie den folgenden Befehl in ein Terminal eingeben.

```bash
railway help
```

### Debuggen

Der Railway-Client bietet den Befehl logs, um den neuesten Teil der Logs anzuzeigen (ein vollständigeres Log ist auf der Seite für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion, und auch der Reihe von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Produktions-Best Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktions-Best Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation

  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku

  - [Erste Schritte mit Node.js auf Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku arbeitet](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konf-Variablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
