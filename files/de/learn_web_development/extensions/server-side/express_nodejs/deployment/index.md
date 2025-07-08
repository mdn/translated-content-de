---
title: "Express Tutorial Teil 7: Einsatz in der Produktion"
short-title: "7: Einsatz"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 5e0e69d8a0e3b0846c085315490c0da6b150f547
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie eine Beispiel-Website mit Express erstellt und getestet haben, ist es Zeit, sie auf einen Webserver zu deployen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie man ein Express-Projekt hostet und welche Schritte erforderlich sind, um es für den Produktiveinsatz vorzubereiten.

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
        Erlernen, wo und wie Sie eine Express-Anwendung in der Produktion einsetzen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Seite fertig ist (oder "fertig genug" für öffentliche Tests), müssen Sie sie an einem öffentlich zugänglicheren Ort hosten als Ihrem persönlichen Entwicklungscomputer.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet und Express/Node als Webserver genutzt, um Ihre Seite an den lokalen Browser/das lokale Netzwerk zu übertragen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging-Informationen und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie zunächst:

- Eine Umgebung zum Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsfähige Infrastruktur zum Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet eine Orientierungshilfe zu Ihren Optionen bei der Auswahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App bereit für die Produktion zu machen, und ein funktionierendes Beispiel, wie die LocalLibrary-Website auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installiert werden kann.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die von dem Servercomputer bereitgestellt wird, auf dem Ihre Website für den externen Verbrauch betrieben wird. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Programmiersprachen-Runtime und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webinfrastruktur, möglicherweise einschließlich eines Webservers, eines Reverse-Proxys, eines Lastenausgleichers usw.
- Datenbanken, auf die Ihre Website angewiesen ist.

Der Servercomputer könnte sich in Ihren Räumlichkeiten befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, jedoch ist es weitaus häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet in der Regel ein garantiertes Maß an Rechenressourcen (z. B. CPU, RAM, Speicherplatz usw.) und Internetverbindung zu einem bestimmten Preis.

Diese Art von Fernzugriff auf Rechen-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen die Auswahl vollständigerer Umgebungen, die möglicherweise eine vollständige Node-Einrichtung beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können es einfacher machen, Ihre Website einzurichten, da sie die Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen Ihnen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, Komponenten selbst zu installieren, damit Sie die gewünschten auswählen können und wissen, wo Sie mit dem Upgrade der Systemkomponenten beginnen müssen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Server, Lastenausgleich usw.) kümmern, da die Host-Plattform dies für Sie übernimmt. Dies macht das Deployment recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf eine andere Serverinfrastruktur.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS bevorzugen, während andere den reduzierten Wartungsaufwand und den geringeren Skalierungsaufwand von PaaS schätzen werden. Wenn Sie anfangen, ist es einfacher, Ihre Website auf einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollte er Anweisungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen. Es gibt zum Beispiel viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumenten](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) zusammenarbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Stufen von Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen und deren Dienste und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu überprüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige der Dinge, die bei der Auswahl eines Anbieters zu beachten sind:

- Wie stark Ihre Seite wahrscheinlich gefordert wird und die Kosten für Daten- und Rechenressourcen, die zur Erfüllung dieser Nachfrage erforderlich sind.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsfähigere Maschinen) sowie die damit verbundenen Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren hat und daher der Zugriff wahrscheinlich am schnellsten ist.
- Die historische Betriebszeit und Betriebsunterbrechungsleistung des Anbieters.
- Bereitgestellte Tools zur Verwaltung der Website — sind sie einfach zu bedienen und sicher (z. B. SFTP vs. FTP)?
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Anbieter blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten in einigen Preiskategorien nur eine bestimmte Anzahl von "Live-Time"-Stunden an oder nur eine geringe Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, für die Sie sonst bezahlen müssten.
- Ob die "kostenlose" Ebene, auf die Sie vertrauen, im Laufe der Zeit abläuft und ob die Kosten für den Wechsel in eine teurere Ebene bedeuten, dass Sie von Anfang an besser einen anderen Service genutzt hätten!

Die gute Nachricht, wenn Sie anfangen, ist, dass es ziemlich viele Websites gibt, die "kostenlose" Computerumgebungen anbieten, die für Evaluierungs- und Testzwecke gedacht sind.
Diese sind normalerweise relativ ressourcenbeschränkt/limitiert, und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können.
Sie eignen sich jedoch hervorragend für das Testen von gering frequentierten Websites in einer gehosteten Umgebung und können einen einfachen Übergang zur Zahlung für mehr Ressourcen ermöglichen, wenn Ihre Seite mehr Verkehr erhält.
Beliebte Optionen in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine "Basis-" oder "Hobby-"Ebene an, die für kleine Produktionsseiten gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Basiskomputierungsebene im Bereich von 5 bis 10 USD pro Monat haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist.
> Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass die Skalierbarkeit der wichtigste Aspekt ist.

## Vorbereitung Ihrer Website zur Veröffentlichung

Die wichtigsten Überlegungen bei der Veröffentlichung Ihrer Website sind die Web-Sicherheit und die Leistung.
Mindestens möchten Sie die Datenbankkonfiguration ändern, damit Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stacktraces, die während der Entwicklung auf Fehlerseiten enthalten sind, entfernen, Ihr Logging aufräumen und die geeigneten Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumenten – siehe [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) und [Best Practices für die Produktion: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen fest in **app.js** codiert sind.
Da die Entwicklungsdatenbank keine Informationen enthält, die offengelegt oder beschädigt werden könnten, besteht kein besonderes Risiko, diese Details preiszugeben.
Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist der Schutz Ihrer Datenbank-Anmeldeinformationen sehr wichtig.

Deshalb möchten wir für die Produktion eine andere Datenbank verwenden als für die Entwicklung und auch die Produktionsdatenbank-Anmeldeinformationen vom Quellcode trennen, damit sie ordnungsgemäß geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele es tun), ist eine Möglichkeit, dies zu tun, den Server dazu zu bringen, die Datenbank-URL aus einer Umgebungsvariablen zu beziehen.
Im Folgenden ändern wir die LocalLibrary-Website so, dass sie die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen bezieht, wenn sie definiert wurde, und ansonsten die Entwicklungsdatenbank-URL verwendet.

Öffnen Sie **app.js** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt.
Es sieht ungefähr so aus:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen namens `MONGODB_URI` zu holen, wenn sie gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

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
> Eine weitere übliche Methode, um Produktionsdatenbank-Anmeldeinformationen vom Quellcode zu trennen, ist das Einlesen aus einer `.env`-Datei, die separat im Dateisystem bereitgestellt wird (zum Beispiel können sie mit dem [dotenv](https://www.npmjs.com/package/dotenv) Modul aus npm gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stacktraces auf Fehlerseiten entfernen, indem wir die `NODE_ENV`-Umgebungsvariable auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Neben der Erzeugung weniger ausführlicher Fehlermeldungen sorgt das Setzen der Variablen auf _production_ dafür, dass View-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert werden, gespeichert werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um den Faktor drei verbessern kann!

Diese Änderung kann entweder durch die Verwendung von `export`, einer Umgebungsdatei oder dem Initialisierungssystem des Betriebssystems vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebung vornehmen, anstelle Ihrer App, aber sie ist wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie dies für unser Hosting-Beispiel unten eingestellt wird.

### Passendes Logging

Logging-Aufrufe können Einfluss auf eine stark frequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise die Aktivität der Website protokollieren (z. B. das Verfolgen von Verkehr oder das Protokollieren von API-Aufrufen), sollten jedoch versuchen, das zum Debugging hinzugefügte Logging zu minimieren.

Eine Möglichkeit, das "debug"-Logging in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), das es Ihnen ermöglicht, zu steuern, welches Logging durch die Einstellung einer Umgebungsvariablen ausgeführt wird.
Das folgende Codefragment zeigt, wie Sie "author"-Logging einrichten können.
Die Debug-Variable wird mit dem Namen 'author' deklariert und das Präfix "author" wird automatisch für alle Logs von diesem Objekt angezeigt.

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

Im Anschluss können Sie eine bestimmte Gruppe von Logs aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG`-Umgebungsvariablen angeben.
Sie können die Variablen zur Anzeige von "author"- und "book"-Logs wie gezeigt einstellen (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Aufrufe an `debug` können Logging ersetzen, das Sie zuvor möglicherweise mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable einstellen und beobachten, welche Auswirkungen dies auf das Logging hat.

Wenn Sie die Aktivität der Website protokollieren müssen, können Sie eine Bibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie hier: [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden Sie gzip/deflate-Komprimierung für Antworten

Webserver können oft die HTTP-Antwort, die an einen Client gesendet wird, komprimieren und so die Zeit erheblich verkürzen, die der Client benötigt, um die Seite zu erhalten und zu laden. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client im Request angibt, dass er sie unterstützt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Site hinzu, indem Sie [compression](https://www.npmjs.com/package/compression) Middleware verwenden. Installieren Sie diese im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungsbibliothek als gezeigt ein. Fügen Sie die Komprimierungsbibliothek mit der `use()`-Methode in die Middleware-Kette ein (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten — in diesem Fall alle!)

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
> Für eine stark frequentierte Website in Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um sich vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann entsprechende HTTP-Header einstellen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [Dokumentation](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und gegen welche Schwachstellen es schützt).

Installieren Sie dies im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_ Bibliothek wie gezeigt ein.
Dann fügen Sie das Modul mit der `use()` Methode in die Middleware-Kette ein.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um die _Teilmenge_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Websites sinnvoll ist.
Allerdings enthalten wir in der [LocalLibrary-Basisvorlage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) einige Bootstrap- und jQuery-Skripte.
Diese verletzen die _Standard_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von Helmet, die das Laden von Cross-Site-Skripten nicht zulässt.
Um das Laden dieser Skripte zu erlauben, ändern wir die Helmet-Konfiguration so, dass CSP-Direktiven eingestellt werden, die das Laden von Skripten von den angegebenen Domains erlauben.
Für Ihren eigenen Server können Sie spezifische Header nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie den API-Routen eine Ratenbegrenzung hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen.
Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden, wie z. B. Denial of Service-Angriffe, Bruteforce-Angriffe oder sogar ein Client oder Skript, das sich nicht wie erwartet verhält.
Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können und dazu führen können, dass Ihr Server langsamer wird, können Ihnen auch die zusätzlichen Verkehrskosten in Rechnung gestellt werden.
Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder Gruppe von Routen gestellt werden können.

Installieren Sie dies im Root Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_ Bibliothek wie gezeigt ein.
Dann fügen Sie das Modul mit der `use()` Methode in die Middleware-Kette ein.

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
> Dritte Dienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen fortschrittlicheren Schutz gegen Denial of Service oder andere Angriffe benötigen.

#### Setzen Sie die Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die **package.json**-Datei alles, was ein Hosting-Anbieter benötigt, um die Anwendungs-Abhängigkeiten und die Einstiegsdatei herauszufinden.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Node-Version, die von der Bibliothek benötigt wird.
Sie können die Version von Node, die während der Entwicklung verwendet wurde, durch Eingabe des folgenden Befehls herausfinden:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json**, und fügen Sie diese Information als **engines > node** hinzu, wie gezeigt (verwenden Sie die Versionsnummer Ihres Systems).

```json
  "engines": {
    "node": ">=16.17.1"
  },
```

Der Hosting-Service könnte die spezifisch angegebene Version von Node nicht unterstützen, aber diese Änderung sollte sicherstellen, dass er versucht, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Bitte beachten Sie, dass es andere Möglichkeiten geben könnte, die Node-Version auf verschiedenen Hosting-Services anzugeben, aber der **package.json** Ansatz ist weit verbreitet.

#### Holen Sie sich Abhängigkeiten und testen Sie erneut

Bevor wir fortfahren, lassen Sie uns die Seite erneut testen und sicherstellen, dass sie nicht durch eine unserer Änderungen betroffen wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Root des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Seite aus (siehe [Testing the routes](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und überprüfen Sie, ob die Seite immer noch wie erwartet funktioniert.

### Ein Anwendungs-Repository in GitHub erstellen

Viele Hosting-Dienste erlauben das Importieren und/oder Synchronisieren von Projekten aus einem lokalen Repository oder aus cloudbasierten Plattformen zur Versionskontrolle von Quellcode.
Dies kann den Einsatz und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und ein Repository für die Bibliothek ein und verwenden das **git** Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Nutzung von Tools zur Versionskontrolle von Quellcode eine gute Softwareentwicklungspraxis ist, da sie es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekannt gutem Code" zu wechseln, wenn Sie es benötigen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht obligatorisch sind, werden sie dringend empfohlen.
   - Geben Sie einen neuen Repository-Namen ein (z. B. _express-locallibrary-tutorial_), und eine Beschreibung (wie "Local Library website written in Express").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahl aus.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Lizenz hinzufügen_ Auswahl aus.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der standardmäßige "Öffentliche" Zugang macht _alle_ Quellcodes — einschließlich Ihres Datenbank-Benutzernamens und Passworts — für jeden im Internet sichtbar! Achten Sie darauf, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen hart codiert sind.
   >
   > Alternativ wählen Sie die Option "Privat", um nur ausgewählten Personen den Zugang zum Quellcode zu ermöglichen.

4. Drücken Sie **Create repository**.
5. Klicken Sie auf den grünen **Clone or download**-Button auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfeld, das erscheint.
   Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ auf Ihrem lokalen Computer ([offizielle Git-Download-Anleitung](https://git-scm.com/downloads)).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Ihr Repository mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungsquellcode-Dateien in den Repo-Ordner, machen Sie sie mit _git_ Teil des Repos und laden Sie sie zu GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (ausgenommen **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/ein Terminal und verwenden Sie den add-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den status-Befehl, um zu überprüfen, ob alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten Quellcode-Dateien einbeziehen, nicht Binärdateien, temporäre Dateien etc.).
   Es sollte in etwa die folgende Auflistung aussehen.

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

4. Wenn Sie zufrieden sind, committen Sie die Dateien in Ihr lokales Repo.
   Dies entspricht dem Unterschreiben der Änderungen und ihrem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Der letzte Schritt besteht darin, Ihr lokales Repo mit dem Remote-Repo auf GitHub zu synchronisieren (`pushen`) mit folgendem Befehl:

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zur Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen Zyklus add/commit/push verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen — während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für den Einsatz auf jedem Hosting-Service (oder zur Entwicklung) nützlich sein könnten, andere möglicherweise nicht.
Sie können dies mit `git` über die Befehlszeile tun:

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
> Um mehr zu erfahren, schauen Sie sich [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) an.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie _LocalLibrary_ auf [Railway](https://railway.com/) installiert wird.

> [!NOTE]
> MDN hat dieses Projekt von einer Reihe von Hosting-Services migriert, die keine kostenlosen Ebenen mehr anbieten.
> Wir haben uns entschieden, Railway als aktuelle Hosting-Option zu verwenden, die eine kostengünstige Hobbystufe hat.
> Die meisten Dienste bieten ähnliche Deployment-Methoden, sodass Ihnen die folgenden Anweisungen helfen sollten, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um den größten Teil der Infrastruktur, sodass Sie dies nicht tun müssen.
  Wenn Sie sich nicht um Server, Lastenausgleicher, Reverse-Proxys und so weiter kümmern müssen, macht das den Einstieg deutlich einfacher.
- Railway hat einen [Fokus auf die Entwicklererfahrung für Entwicklung und Einsatz](https://docs.railway.com/maturity/compare-to-heroku), was zu einer schnelleren und sanfteren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway lernen, sind übertragbar.
  Während Railway einige ausgezeichnete neue Funktionen bietet, verwenden viele andere beliebte Hosting-Services viele derselben Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es hat eine vergleichsweise kostengünstige [Hobby Tier](https://railway.com/pricing).
- Der Service scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen zu bestimmen, ob Railway [für Ihre eigene Website geeignet ist](#auswahl_eines_hosting-anbieters).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt.
Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten und verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen automatisch basierend auf ihrer Nutzung von "gängigsten Konventionen" erkennen und installieren kann.
Zum Beispiel erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei enthalten, und kann den Package-Manager, der für den Aufbau verwendet wird, aus der "Sperr"-Datei bestimmen.
Zum Beispiel, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ verwendet wird, um die Pakete zu installieren, während wenn es **yarn.lock** findet, es weiß, _yarn_ zu verwenden.
Nach der Installation aller Abhängigkeiten sucht Railway in der Paketdatei nach Skripten mit den Namen "build" und "start" und verwendet diese zum Aufbau und Ausführen des Codes.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs), um verschiedene Webanwendungs-Frameworks zu erkennen, die in verschiedenen Programmiersprachen geschrieben sind.
> Sie müssen nichts Weiteres für dieses Tutorial wissen, aber Sie können mehr über Optionen zum Einsatz von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) herausfinden.

Sobald die Anwendung läuft, kann sie sich mit den Informationen konfigurieren, die in [Umgebungsvariablen](https://docs.railway.com/guides/variables) bereitgestellt wurden.
Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable abrufen.
Der tatsächliche Datenbankdienst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren über die Railway-Site mit Railway und verwenden ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/guides/cli)-Tool.
Mit der CLI können Sie ein lokales GitHub-Repository mit einem Railway-Projekt verknüpfen, das Repository vom lokalen Branch auf die Live-Site hochladen, die Protokolle des laufenden Prozesses inspizieren, Konfigurationsvariablen setzen und abrufen und vieles mehr.
Eine der nützlichsten Funktionen ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie im Live-Projekt auszuführen.

Das ist alles, was Sie wissen müssen, um die Anwendung auf Railway einzusetzen.
Als nächstes werden wir ein Railway-Konto einrichten, unsere Website und eine Datenbank installieren und den Railway-Client ausprobieren.

### Holen Sie sich ein Railway-Konto

Um mit Railway zu beginnen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup aus, um sich mit Ihren GitHub-Zugangsdaten anzumelden.
- Möglicherweise müssen Sie dann Ihre E-Mail überprüfen und Ihr Konto verifizieren.
- Sie sind dann im Railway.com-Dashboard eingeloggt: <https://railway.com/dashboard>.

### Deployment auf Railway von GitHub

Als nächstes richten wir Railway ein, um unsere Bibliothek von GitHub zu deployen.
Wählen Sie zunächst die **Dashboard**-Option aus dem oberen Menü der Website und dann die Schaltfläche **Neues Projekt**:

![Railway-Website-Dashboard mit hervorgehobener Schaltfläche Neues Projekt](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage zu deployen, das zuerst in Ihrem GitHub-Konto erstellt wurde, und eine Reihe von Datenbanken.
Wählen Sie **Deployment von GitHub-Repo**.

![Railway-Popup, das Deployment-Optionen mit der Option Deployment von GitHub-Repo anzeigt](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung mit Railway geteilt haben, werden angezeigt.
Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek aus: `<Benutzername>/express-locallibrary-tutorial`.

![Railway-Popup, das GitHub-Repos anzeigt, die deployed werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihren Einsatz, indem Sie **Jetzt deployen** auswählen.

![Bestätigungsbildschirm, auf dem Sie das Deployment des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt und deployed dann Ihr Projekt und zeigt den Fortschritt auf der Registerkarte Deployments an.
Wenn das Deployment erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den unten gezeigten.

![Railway-Dashboard, das die Registerkarte Deployments für das eingesetzte Projekt anzeigt](railway_project_deploy.png)

Wählen Sie jetzt den _Einstellungen_-Tab aus, scrollen Sie dann nach unten zum Abschnitt Domains und drücken Sie die Schaltfläche **Domain generieren**.

![Railway-Projekteinstellungen-Tab mit hervorgehobener Schaltfläche zur Generierung einer Domain](railway_project_generate_domain.png)

Dadurch wird die Seite veröffentlicht und die Domain anstelle der Schaltfläche eingefügt, wie unten dargestellt.

![Railway-Projekteinstellungen-Tab, der einen Link zur lokalen Bibliotheksseite anzeigt](railway_project_domain.png)

Wählen Sie die Domain-URL, um Ihre Bibliotheksanwendung zu öffnen.
Beachten Sie, dass die lokale Bibliothek aufgrund dessen, dass wir keine Produktionsdatenbank angegeben haben, mit Ihren Entwicklungsdaten geöffnet wird.

### Einrichten und Verbinden einer MongoDB-Datenbank

Anstelle der Verwendung unserer Entwicklungsdaten lassen Sie uns nun eine Produktions-MongoDB-Datenbank erstellen, die stattdessen verwendet wird.
Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl es nichts gibt, was Sie daran hindert, sie in einem eigenen separaten Projekt zu erstellen oder tatsächlich eine _MongoDB Atlas_-Datenbank für Produktionsdaten zu verwenden, genauso wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die Option **Dashboard** aus dem oberen Menü der Website und wählen Sie dann Ihr Anwendungsprojekt.
Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen).
Wählen Sie die **Neu**-Schaltfläche, die zum Hinzufügen von Diensten zum aktuellen Projekt verwendet wird.

![Railway-Projekt mit hervorgehobener Schaltfläche Neuer Dienst](railway_project_open_no_database.png)

Wählen Sie **Datenbank**, wenn Sie nach dem Typ des hinzuzufügenden Dienstes gefragt werden:

![Railway-Popup, das Optionen für einen neuen Dienst anzeigt, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um das Hinzufügen der Datenbank zu beginnen.

![Railway-Popup, das verschiedene wählbare Datenbanken anzeigt: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen.
Nach Abschluss sehen Sie nun sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen.
Öffnen Sie die _Variablen_-Registerkarte und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungen-Bildschirm, der die zum Verbinden mit der Datenbank benötigte URL anzeigt](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es der Anwendungsprozess mithilfe einer Umgebungsvariablen hinzufügen.
Öffnen Sie zuerst den Anwendungsdienst.
Wählen Sie dann die _Variablen_-Registerkarte aus und drücken Sie die **Neue Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindung-URL ein, die Sie für die Datenbank kopiert haben (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert](#datenbankkonfiguration) haben, um die Datenbankadresse zu lesen).
Dies sieht ähnlich zu dem unten gezeigten Bildschirm aus.

![Railway-Website-Variablen-Bildschirm, während die MONGODB_URI-Variable und Adresse hinzugefügt werden](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite überprüfen, sollte sie null Werte für Ihre Objektezählungen anzeigen, da die obigen Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie werden sich aus einem vorhergehenden Abschnitt erinnern, dass wir [NODE_ENV auf 'production' setzen müssen](#set_node_env_to_production), um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies im selben Bildschirm tun, in dem wir die `MONGODB_URI`-Variable eingestellt haben.

Öffnen Sie den Anwendungsdienst.
Dann wählen Sie die _Variablen_-Registerkarte aus, auf der Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken die **Neue Variable**-Schaltfläche.

![Railway-Variablen-Registerkarte mit der hervorgehobenen Schaltfläche Neue Variable](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variablen und `production` als Name der Umgebung ein.
Dann drücken Sie die **Hinzufügen**-Schaltfläche.

![Railway-Variablen-Registerkarte mit neuer NODE_ENV-Variablen, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Local Library-Anwendung ist nun eingerichtet und für den Produktionseinsatz konfiguriert.
Sie können Daten über die Website-Oberfläche hinzufügen und es sollte genauso funktionieren wie während der Entwicklung (obwohl bei ungültigen Seiten weniger Debug-Informationen angezeigt werden).

> [!NOTE]
> Wenn Sie nur einige Daten für Tests hinzufügen möchten, könnten Sie das `populatedb`-Skript (mit Ihrer MongoDB-Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express Tutorial Teil 3: Die Verwendung einer Datenbank (mit Mongoose) Testen — Einige Items erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) beschrieben.

### Installieren Sie den Client

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/guides/cli) folgen.

Nach der Installation des Clients können Sie Befehle ausführen.
Einige der wichtigen Operationen beinhalten das Deployen des aktuellen Verzeichnisses Ihres Computers zu einem zugeordneten Railway-Projekt (ohne auf GitHub hochladen zu müssen) und das Ausführen Ihres Projekts lokal mit den gleichen Einstellungen, wie Sie sie auf dem Produktionsserver haben.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das folgende in einem Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client stellt den logs-Befehl bereit, um das Ende der Logs anzuzeigen (ein ausführlicheres Log ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion sowie die Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können eine vollständig durchgearbeitete Version des [Quellcodes auf GitHub hier](https://github.com/mdn/express-locallibrary-tutorial) überprüfen.

## Siehe auch

- [Best Practices für die Produktion: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumente)
- [Best Practices für die Produktion: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumente)
- Railway-Dokumentation
  - [CLI](https://docs.railway.com/guides/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumente)
  - [Deploying Node.js Applications on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumente)
  - [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumente)
  - [Optimizing Node.js Application Concurrency](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumente)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
