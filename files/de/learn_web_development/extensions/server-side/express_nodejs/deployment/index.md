---
title: "Express Tutorial Teil 7: Deployment in die Produktion"
short-title: "7: Deployment"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie eine Beispiel-Website mit Express erstellt und getestet haben, ist es an der Zeit, sie auf einem Webserver bereitzustellen, damit Menschen über das öffentliche Internet darauf zugreifen können. Diese Seite erklärt, wie man ein Express-Projekt hostet, und beschreibt, was Sie benötigen, um es für die Produktion vorzubereiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express-Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wo und wie Sie eine Express-App für die Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Seite fertig ist (oder "fertig genug", um öffentliche Tests zu starten), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als auf Ihrem persönlichen Entwicklungscomputer.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Seite auf den lokalen Browser/das Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen freigeben. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung zum Hosten der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsfähige Infrastruktur für Ihre Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion vorzubereiten, und ein funktionierendes Beispiel, wie Sie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Dienst installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Zugriff betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprache und Framework-Bibliotheken, auf denen Ihre Website verfasst ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, Reverse Proxy, Lastenausgleichers usw.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte sich an Ihrem Standort befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist weitaus üblicher, dass der Computer "in der Cloud" gehostet wird. Dies bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Rechenressourcen (z. B. CPU, RAM, Speicher usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von remote zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems an, auf dem Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständigere Umgebungen auszuwählen, die möglicherweise ein komplettes Node-Setup umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können das Einrichten Ihrer Website erleichtern, da sie die erforderliche Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen Ihnen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten erhalten und wissen, wo Sie anfangen müssen, wenn Sie Teile des Systems aktualisieren müssen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung dieser Art von Hosting müssen Sie sich um die meisten Teile Ihrer Produktionsumgebung (Server, Lastenausgleicher usw.) keine Sorgen machen, da die Hosting-Plattform diese für Sie übernimmt. Das macht das Deployment ziemlich einfach, da Sie sich nur auf Ihre Webanwendung und nicht auf andere Serverinfrastrukturen konzentrieren müssen.

Einige Entwickler werden die erhöhte Flexibilität, die IaaS bietet, gegenüber PaaS bevorzugen, während andere die reduzierte Wartungsbelastung und den Skalierungsaufwand von PaaS schätzen werden. Wenn Sie gerade anfangen, ist das Einrichten Ihrer Website auf einem PaaS-System viel einfacher, was wir in diesem Tutorial tun werden.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollte dieser Anleitungen zum Einrichten einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse Proxy usw. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=node).

## Wahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die bekannt dafür sind, entweder aktiv _Node_ (und _Express_) zu unterstützen oder gut mit ihnen zu arbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus an Computer- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, deren Dienste und Preise sich im Laufe der Zeit ändern können. Obwohl wir im Folgenden einige Optionen einführen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter wählen.

Einige der Dinge, die bei der Wahl eines Hosts zu beachten sind:

- Wie viel Verkehr Ihre Seite voraussichtlich haben wird und die Kosten für die Daten- und Rechenressourcen, die erforderlich sind, um die Nachfrage zu erfüllen.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) sowie die Kosten dafür.
- Die Standorte, an denen der Anbieter Datenzentren hat und wo der Zugriff daher wahrscheinlich am schnellsten ist.
- Die historische Betriebszeit und Ausfallzeit des Hosts.
- Tools zur Verwaltung der Website — sind diese einfach zu bedienen und sicher (z. B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in bestimmten Preisklassen oder bieten nur eine kleine Menge Speicherplatz an.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob das von Ihnen genutzte "kostenlose" Tier mit der Zeit abläuft und ob die Kosten für den Umstieg auf ein teureres Tier bedeuten, dass Sie von Anfang an besser einen anderen Service genutzt hätten.

Die gute Nachricht, wenn Sie anfangen, ist, dass es einige Webseiten gibt, die "kostenlose" Computerumgebungen bieten, die für die Evaluierung und das Testen gedacht sind. Diese sind in der Regel ziemlich ressourcenbeschränkt/begrenzte Umgebungen, und Sie müssen sich dessen bewusst sein, dass sie möglicherweise nach einer Einführungsphase ablaufen oder andere Einschränkungen haben. Sie sind jedoch großartig zum Testen von weniger frequentierten Seiten in einer gehosteten Umgebung und können eine einfache Migration zur Bezahlung für mehr Ressourcen ermöglichen, wenn Ihre Seite mehr Verkehr bekommt. Beliebte Optionen in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch ein "Basis-" oder "Hobby"-Tier an, das für kleine Produktivseiten gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die einen relativ kostengünstigen Basistarif für das Rechnen haben (im Bereich von $5 bis $10 USD pro Monat).

> [!NOTE]
> Denken Sie daran, dass Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website für die Veröffentlichung vorbereiten

Die Hauptaspekte beim Veröffentlichen Ihrer Website sind Web-Sicherheit und Leistung. Im absoluten Minimum sollten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stapelverfolgungen, die bei Fehlermeldungen während der Entwicklung enthalten sind, entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Abschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumenten — siehe [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Produktions-Best-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen [fest in **bin/www** kodiert sind](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#connect_to_mongodb). Da die Entwicklungsdatenbank keine Informationen enthält, die wir preisgeben oder beschädigen möchten, besteht kein besonderes Risiko darin, diese Details preiszugeben. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerdaten, ist es sehr wichtig, Ihre Datenbankanmeldeinformationen zu schützen.

Aus diesem Grund möchten wir in der Produktion eine andere Datenbank verwenden als in der Entwicklung und außerdem die Anmeldeinformationen der Produktionsdatenbank von Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter das Setzen von Umgebungsvariablen über eine Webschnittstelle unterstützt (wie viele es tun), ist eine Möglichkeit, dies zu tun, den Datenbank-URL von einer Umgebungsvariable abzurufen. Unten ändern wir die LocalLibrary-Website, um die Datenbank-URI von einer OS-Umgebungsvariablen abzurufen, falls sie definiert wurde, und andernfalls die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **bin/www** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen namens `MONGODB_URI` abzurufen, wenn sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

```js
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
```

> [!NOTE]
> Eine andere gängige Methode, um Produktions-Datenbankanmeldeinformationen vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mithilfe des [dotenv](https://www.npmjs.com/package/dotenv) Moduls von npm gelesen werden).

### Setzen von NODE_ENV auf 'production'

Wir können die Stapelverfolgungen in Fehlerseiten entfernen, indem wir die `NODE_ENV`-Umgebungsvariable auf _production_ einstellen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zur Erstellung weniger ausführlicher Fehlermeldungen bewirkt das Setzen der Variable auf _production_, dass Ansichts-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, zwischengespeichert werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um das Dreifache verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder dem OS-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrem Umgebung-Setup und nicht in Ihrer App vornehmen, aber es ist wichtig genug, um hier erwähnt zu werden! Wir zeigen weiter unten, wie dies für unser Hosting-Beispiel eingestellt wird.

### Angemessenes Logging

Logging-Aufrufe können sich auf eine hochfrequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z. B. Verkehrsverfolgung oder API-Aufrufe protokollieren), aber Sie sollten versuchen, das Logging für Debug-Zwecke zu minimieren.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), das es Ihnen ermöglicht, zu kontrollieren, welche Protokollierung durch das Setzen einer Umgebungsvariablen ausgeführt wird. Zum Beispiel zeigt der untenstehende Codeausschnitt, wie Sie das Logging für den "author" einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und der Präfix "author" wird automatisch für alle Logs dieses Objekts angezeigt.

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

Sie können dann eine bestimmte Menge an Logs aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariablen angeben. Sie können die Variablen für die Anzeige von author- und book-Logs wie gezeigt setzen (auch Platzhalter werden unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe zu `debug` können das Logging ersetzen, das Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug)-Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie, welche Auswirkungen dies auf das Logging hat.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden von gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort, die an einen Client zurückgesendet wird, komprimieren, was die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich verkürzt. Die verwendete Komprimierungsmethode hängt von den Dekompressionstechniken ab, die der Client in der Anfrage angibt, dass er sie unterstützt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies Ihrer Seite hinzu, indem Sie das [compression](https://www.npmjs.com/package/compression)-Middleware verwenden. Installieren Sie dies am Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und erfordern Sie die Komprimierungsbibliothek wie gezeigt. Fügen Sie die Komprimierungsbibliothek mit der `use()`-Methode der Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!).

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
> Bei einer hochgradig frequentierten Website in Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet zum Schutz vor bekannten Schwachstellen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header setzen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für mehr Informationen, welche Header es setzt und welche Schwachstellen es schützt).

Installieren Sie dies am Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und erfordern Sie die _helmet_-Bibliothek wie gezeigt. Fügen Sie das Modul mit der `use()`-Methode der Middleware-Kette hinzu.

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

Wir hätten normalerweise einfach `app.use(helmet());` eingefügt, um den _Unterabschnitt_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Websites sinnvoll sind. Allerdings enthalten wir im [LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) einige Bootstrap-Skripte. Diese verstoßen gegen das \_Standard-\_Content Security Policy (CSP) von Helmet, die das Laden von cross-site Skripten nicht zulässt. Um das Laden dieser Skripte zu ermöglichen, ändern wir die Helmet-Konfiguration, damit sie CSP-Direktiven setzt, die das Laden von Skripten von den angegebenen Domains erlauben. Für Ihren eigenen Server können Sie bestimmte Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Ratenbegrenzung für die API-Routen hinzufügen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihrer Seite gestellt werden könnten, wie Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das sich nicht wie erwartet verhält. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen, die Ihren Server verlangsamen, verursacht werden können, können Ihnen auch für den zusätzlichen Datenverkehr Gebühren berechnet werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die auf eine bestimmte Route oder mehrere Routen gestellt werden dürfen.

Installieren Sie dies am Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und erfordern Sie die _express-rate-limit_-Bibliothek wie gezeigt. Fügen Sie das Modul mit der `use()`-Methode der Middleware-Kette hinzu.

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

Der obige Befehl begrenzt alle Anfragen auf 20 pro Minute (dies können Sie nach Bedarf ändern).

> [!NOTE]
> Dritte Dienste wie [Cloudflare](https://www.cloudflare.com/) können auch verwendet werden, wenn Sie einen fortgeschritteneren Schutz gegen Denial-of-Service- oder andere Arten von Angriffen benötigen.

#### Festlegen der Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Einstiegspunktdatei zu ermitteln.

Das einzige wichtige Element, das in unserer aktuellen **package.json** fehlt, ist die Node-Version, die von der Bibliothek benötigt wird. Sie können die Version von Node, die für die Entwicklung verwendet wurde, ermitteln, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** wie gezeigt hinzu (verwenden Sie die Versionsnummer Ihres Systems).

```json
{
  "engines": {
    "node": ">=22.0.0"
  }
}
```

Der Hosting-Service unterstützt möglicherweise nicht die spezifisch angegebene Node-Version, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es möglicherweise andere Möglichkeiten gibt, die Node-Version bei verschiedenen Hosting-Services anzugeben, aber der Ansatz mit **package.json** ist weit verbreitet.

#### Abhängigkeiten holen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Website erneut testen, um sicherzustellen, dass sie nicht von unseren Änderungen betroffen ist.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Site aus (siehe [Routen testen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und überprüfen Sie, ob die Website immer noch so funktioniert, wie Sie es erwarten.

### Erstellen eines Anwendungsrepositorys in GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren oder zu synchronisieren. Dies kann das Deployment und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/)-Konto und -Repository für die Bibliothek ein und verwenden das **git**-Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcodeverwaltungswerkzeugen gute Softwareentwicklungspraktiken sind, da Sie damit Änderungen ausprobieren und zwischen Ihren Experimenten und "bekanntermaßen funktionierendem Code" wechseln können, wenn Sie es benötigen!

Die Schritte sind wie folgt:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Auch wenn diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.
   - Geben Sie einen neuen Repositorienamen ein (z. B. _express-locallibrary-tutorial_) und eine Beschreibung (z. B. "Local Library-Website geschrieben in Express").
   - Wählen Sie **Node** in der Auswahlliste _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahlliste _Lizenz hinzufügen_.
   - Aktivieren Sie **Dieses Repository mit einer README initialisieren**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _allen_ Quellcode — einschließlich Ihres Datenbankbenutzernamens und -passworts — für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine hart codierten Anmeldeinformationen enthält.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen den Zugriff auf den Quellcode zu ermöglichen.

4. Drücken Sie auf **Repository erstellen**.
5. Klicken Sie auf den grünen Button **Clone or download** auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im sich öffnenden Dialogfeld.
   Wenn Sie als Repositoriename "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads)).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mithilfe der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies wird das Repository im aktuellen Verzeichnis erstellen.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquelldateien in den Repo-Ordner, machen Sie sie mit _git_ zu einem Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ohne **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit`ten möchten, korrekt sind (Sie möchten Quellcodedateien einschließen, keine Binärdateien, temporäre Dateien usw.).
   Es sollte ein wenig wie das folgende Listing aussehen.

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

4. Wenn Sie zufrieden sind, `commit`tation Sie die Dateien in Ihr lokales Repository.
   Dies entspricht dem Unterschreiben der Änderungen und deren offizieller Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repository noch nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repository mit dem folgenden Befehl auf das Remote-GitHub-Repo zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Sobald dieser Vorgang abgeschlossen ist, sollten Sie zur Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung hochgeladen wurde. Sie können Ihr Repo weiterhin wie Dateien ändern, indem Sie diesen Hinzufügen/Commit-Push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup von Ihrem "Vanilla"-Projekt zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, bei der Bereitstellung für jeden Hosting-Service oder für die Entwicklung möglicherweise nützlich sind, andere könnten es nicht sein. Dies können Sie mit `git` über die Befehlszeile tun:

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
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

> [!NOTE]
> MDN hat dieses Projekt von einer Reihe von Hosting-Services migriert, die keine kostenlosen Tiers mehr anbieten.
> Wir haben uns entschieden, Railway als aktuelle Hosting-Option zu verwenden, die einen günstigen Hobby-Tier bietet.
> Die meisten Dienste haben ähnliche Bereitstellungsmethoden, sodass die nachstehenden Anweisungen Ihnen helfen sollten, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um die meiste Infrastruktur, sodass Sie es nicht müssen.
  Sich nicht um Server, Lastenausgleicher, Reverse Proxies und so weiter kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway hat einen [Fokus auf die Entwicklererfahrung bei Entwicklung und Bereitstellung](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve im Vergleich zu vielen anderen Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar.
  Während Railway einige ausgezeichnete neue Funktionen hat, verwenden viele andere beliebte Hosting-Services viele derselben Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es hat einen vergleichsweise günstigen [Hobby-Tier](https://railway.com/pricing).
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, ist die Preisgestaltung vorhersehbar, und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um festzustellen, ob Railway [für Ihre eigene Website geeignet ist](#wahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und die Abhängigkeiten einzurichten sowie zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es automatisch viele verschiedene Webanwendungsframeworks und Umgebungen anhand der Verwendung "allgemeiner Konventionen" erkennen und installieren kann. Zum Beispiel erkennt Railway Node-Anwendungen, da sie über eine **package.json**-Datei verfügen, und kann den verwendeten Paketmanager für das Builden anhand der "Lock"-Datei ermitteln. Wenn die Anwendung beispielsweise die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ zum Installieren der Pakete verwendet werden soll, während es bei **yarn.lock** _yarn_ verwendet. Nachdem alle Abhängigkeiten installiert wurden, sucht Railway nach Skripten namens "build" und "start" in der Paketdatei und verwendet diese zum Bauen und Ausführen des Codes.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungsframeworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind. Sie müssen nichts Weiteres für dieses Tutorial wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung ausgeführt wird, kann sie sich mithilfe von Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt werden. Beispielsweise muss eine Anwendung, die eine Datenbank verwendet, die Adresse mithilfe einer Variable abrufen. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Tool. Das CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von der lokalen Branch auf die Live-Seite hochzuladen, die Protokolle des laufenden Prozesses zu überprüfen, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit dem CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie für die Bereitstellung der App auf Railway wissen müssen. Als nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Ein Railway-Konto erstellen

Um Railway zu verwenden, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Möglicherweise müssen Sie dann zu Ihrer E-Mail gehen und Ihr Konto verifizieren.
- Sie werden dann beim Railway.com-Dashboard angemeldet: <https://railway.com/dashboard>.

### Deployment auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die **Dashboard**-Option aus dem oberen Menü der Seite und dann den **New Project**-Button:

![Railway-Website-Dashboard zeigt den Button für neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Möglichkeit, ein Projekt aus einer Vorlage bereitzustellen, das zuerst in Ihrem GitHub-Konto erstellt wurde, und eine Reihe von Datenbanken. Wählen Sie **Deploy from GitHub repo**.

![Railway-Popup zeigt Bereitstellungsoptionen mit der Option Deploy from GitHub repo hervorgehoben](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie bei der Einrichtung mit Railway geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, wenn Sie das Projekt bereitstellen können](railway_new_project_deploy_confirm.png)

Railway lädt und setzt Ihr Projekt bereit und zeigt Fortschritte auf der Bereitstellungstab an. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard zeigt Bereitstellungstab für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie jetzt den _Settings_-Tab aus, scrollen Sie dann zum Abschnitt Domains und drücken Sie den **Generate Domain**-Button.

![Railway-Projekteinstellungen-Tab zeigt den Button zur Domain-Generierung](railway_project_generate_domain.png)

Dies wird die Stelle veröffentlichen und die Domain anstelle des Buttons einfügen, wie unten gezeigt.

![Railway-Projekteinstellungen-Tab zeigt einen Link zur lokalen Bibliotheksseite](railway_project_domain.png)

Wählen Sie den Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass die lokale Bibliothek ohne eine spezifizierte Produktionsdatenbank mit Ihren Entwicklungsdaten geöffnet wird.

### Eine MongoDB-Datenbank bereitstellen und verbinden

Anstatt unsere Entwicklungsdaten zu verwenden, lassen Sie uns eine Produktions-MongoDB-Datenbank erstellen, die stattdessen verwendet werden soll. Wir erstellen die Datenbank als Teil des Railway-Anwendungsprojekts, obwohl nichts Sie daran hindert, sie in einem eigenen separaten Projekt zu erstellen, oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genau wie Sie es für die Entwicklungsdatenbank getan haben.

Auf Railway wählen Sie die **Dashboard**-Option im oberen Menü der Seite und dann Ihr Anwendungsprojekt aus. In diesem Stadium enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Wählen Sie den **New**-Button, der dazu verwendet wird, Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit hervorgehobenem New-Service-Button](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie nach der Art des Dienstes gefragt werden, den Sie hinzufügen möchten:

![Railway-Popup zeigt Optionen für einen neuen Dienst, wie z. B. Datenbank, GitHub-Repo, leeren Dienst usw.](railway_database_add.png)

Dann wählen Sie **Add MongoDB**, um mit dem Hinzufügen der Datenbank zu beginnen

![Railway-Popup zeigt verschiedene Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway stellt dann einen Dienst mit einer leeren Datenbank im selben Projekt bereit. Nach Abschluss sehen Sie nun sowohl die Anwendung als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen. Öffnen Sie den _Variables_-Tab und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbank-Einstellungsbildschirm zeigt die URL an, die benötigt wird, um eine Verbindung zur Datenbank herzustellen](railway_mongodb_connect.png)

Um den Zugang zur Bibliotheksanwendung zu ermöglichen, müssen wir ihn mit einer Umgebungsvariablen zum Anwendungsprozess hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann den _Variables_-Tab und drücken Sie den **New Variable**-Button.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindung-URL, die Sie für die Datenbank kopiert haben, ein (`MONGODB_URI` ist der Name der Umgebungsvariablen, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies wird ungefähr wie der unten gezeigte Bildschirm aussehen.

![Railway-Website-Variablenscreen beim Hinzufügen der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie null Werte für Ihre Objektzähler anzeigen, da wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie erinnern sich an einen vorhergehenden Abschnitt, dass wir [NODE_ENV auf 'production' setzen](#set_node_env_to_production) müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies auf demselben Bildschirm tun, auf dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann den _Variables_-Tab, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie den **New Variable**-Button.

![Railway-Variablen-Tab mit hervorgehobenem New-Variable-Button](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable und `production` als Name der Umgebung ein. Dann drücken Sie den **Add**-Button.

![Railway-Variablen-Tab mit neuer NODE_ENV-Variable, die auf 'production' eingestellt wird](railway_variables_new_node_env.png)

Die Local Library-Anwendung ist jetzt eingerichtet und für den Produktionseinsatz konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte genauso funktionieren wie während der Entwicklung (wenn auch mit weniger freigegebenen Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur ein paar Daten zum Testen hinzufügen möchten, können Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose) Testen — Einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) besprochen.

### Installieren des Clients

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen. Einige der wichtigeren Operationen umfassen das Bereitstellen des aktuellen Verzeichnisses Ihres Computers an ein zugeordnetes Railway-Projekt (ohne das Hochladen zu GitHub) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie die folgende Eingabe in einem Terminal eingeben.

```bash
railway help
```

### Debuggen

Der Railway-Client bietet den Logs-Befehl an, um den Abschluss der Logs anzuzeigen (ein detaillierteres Log steht auf der Website für jedes Projekt zur Verfügung):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials über das Einrichten von Express-Apps in der Produktion und auch der Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Produktions-Best-Practices: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktions-Best-Practices: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway-Dokumentation
  - [CLI](https://docs.railway.com/guides/cli)

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
