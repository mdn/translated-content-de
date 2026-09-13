---
title: "Express Tutorial Teil 7: Bereitstellen in der Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: e2c34c75df6238fbeff790100cea1ab7e552e49e
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun eine Beispiel-Website mit Express erstellt und getestet haben, ist es an der Zeit, sie auf einem Webserver bereitzustellen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie man ein Express-Projekt hostet und was man tun muss, um es für die Produktion bereitzumachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorium-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express-Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo und wie man eine Express-App in der Produktion bereitstellen kann.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Sobald Ihre Website fertig ist (oder „fertig genug“, um das öffentliche Testen zu starten), müssen Sie sie an einem öffentlicheren und zugänglicheren Ort hosten, als es Ihr persönlicher Entwicklungscomputer ist.

Bisher haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Website an den lokalen Browser/das Netzwerk zu teilen, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging und andere private Informationen preisgeben. Bevor Sie eine Website extern hosten können, müssen Sie:

- Eine Umgebung für das Hosting der Express-App auswählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine produktionsreife Infrastruktur für den Betrieb Ihrer Website einrichten.

Dieses Tutorial bietet einige Richtlinien für die Auswahl einer Hosting-Website, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereitzumachen, und ein funktionierendes Beispiel dafür, wie die LocalLibrary-Website auf dem Cloud-Hosting-Dienst [Railway](https://railway.com/) installiert werden kann.

## Was ist eine Produktionsumgebung?

Eine Produktionsumgebung ist die Umgebung, die vom Servercomputer bereitgestellt wird, auf dem Sie Ihre Website für den externen Zugriff betreiben werden. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z. B. Linux oder Windows).
- Laufzeitumgebung der Programmiersprache und Bibliotheken des Frameworks, auf dem Ihre Website geschrieben ist.
- Infrastruktur des Webservers, möglicherweise einschließlich eines Webservers, Reverse-Proxys, Load Balancers usw.
- Datenbanken, von denen Ihre Website abhängig ist.

Der Servercomputer könnte sich in Ihrem Haus befinden und über eine schnelle Verbindung mit dem Internet verbunden sein, aber es ist viel häufiger, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Das bedeutet tatsächlich, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) in den Datenzentren Ihres Hosting-Unternehmens ausgeführt wird. Der entfernte Server bietet in der Regel ein garantiertes Maß an Rechnerressourcen (z. B. CPU, RAM, Speicherspeicher usw.) und Internetkonnektivität zu einem bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Computer-/Netzwerkhardware wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen an, ein bestimmtes Betriebssystem vorzuinstallieren, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter ermöglichen es Ihnen, vollständig ausgestattete Umgebungen auszuwählen, die möglicherweise ein vollständiges Node-Setup beinhalten.

> [!NOTE]
> Vorgefertigte Umgebungen können die Einrichtung Ihrer Website erleichtern, da sie die erforderliche Konfiguration reduzieren. Die verfügbaren Optionen können Sie jedoch auf einen unbekannten Server (oder andere Komponenten) beschränken und möglicherweise auf einer älteren Version des Betriebssystems basieren. Oft ist es besser, die Komponenten selbst zu installieren, damit Sie die gewünschten erhalten, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen können!

Andere Hosting-Anbieter unterstützen Express als Teil eines Angebots _Platform as a Service_ (_PaaS_). Bei diesem Hosting-Typ müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Server, Load Balancers usw.) kümmern, da die Host-Plattform diese für Sie übernimmt. Dies macht die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren müssen und nicht auf eine andere Serverinfrastruktur.

Einige Entwickler entscheiden sich für die erhöhte Flexibilität, die IaaS gegenüber PaaS bietet, während andere die reduzierte Wartung und Skalierungsbemühungen von PaaS zu schätzen wissen. Wenn Sie anfangen, ist die Einrichtung Ihrer Website auf einem PaaS-System viel einfacher, daher werden wir dies in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollte dieser Anweisungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen von Webserver, Anwendungsserver, Reverse-Proxy usw. bereitstellen. Es gibt beispielsweise viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community Docs](https://www.digitalocean.com/community/tutorials?q=node).

## Auswahl eines Hosting-Anbieters

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv _Node_ (und _Express_) unterstützen oder gut damit arbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) und unterschiedliche Niveaus von Rechen- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Dienste und Preise können sich im Laufe der Zeit ändern. Obwohl wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie sich für einen Hosting-Anbieter entscheiden.

Einige der zu berücksichtigenden Dinge bei der Auswahl eines Hosts:

- Wie viel Verkehr Ihre Website voraussichtlich haben wird und die Kosten für die Daten- und Rechenressourcen, die erforderlich sind, um diese Nachfrage zu decken.
- Unterstützung für horizontale Skalierung (Hinzufügen weiterer Maschinen) und vertikale Skalierung (Upgrade auf leistungsstärkere Maschinen) und die Kosten dafür.
- Die Standorte, an denen der Anbieter Datenzentren hat und daher wo der Zugriff voraussichtlich am schnellsten sein wird.
- Historische Betriebszeiten und Ausfallzeiten des Hosts.
- Tools zur Verwaltung der Website — sind sie benutzerfreundlich und sicher (z. B. SFTP vs. FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden „Live-Zeit“ in einigen Preisklassen oder nur eine kleine Menge an Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domains und Unterstützung für TLS-Zertifikate, die Sie sonst bezahlen müssten.
- Ob die „kostenlose“ Stufe, auf die Sie sich verlassen, mit der Zeit abläuft, und ob die Kosten für den Wechsel zu einer teureren Stufe bedeuten, dass Sie von Anfang an besser einen anderen Dienst genutzt hätten!

Die gute Nachricht ist, dass es, wenn Sie gerade anfangen, ziemlich viele Seiten gibt, die „kostenlose“ Rechenumgebungen anbieten, die für Evaluierung und Testen vorgesehen sind. Diese sind in der Regel ziemlich ressourcenbeschränkt/limitiert, und Sie sollten sich bewusst sein, dass sie nach einiger Einführung ablaufen oder andere Einschränkungen haben können. Sie sind jedoch großartig für das Testen von Low-Traffic-Sites in einer gehosteten Umgebung und können einen einfachen Übergang zur Bezahlung für mehr Ressourcen ermöglichen, wenn Ihre Site geschäftiger wird. Beliebte Entscheidungen in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine „Basic“- oder „Hobby“-Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Rechenleistung und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige Grundkonfiguration (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich ist, kann sich herausstellen, dass Skalierbarkeit die wichtigste Überlegung ist.

## Ihre Website veröffentlichungsbereit machen

Die Hauptüberlegungen beim Veröffentlichen Ihrer Website sind Web-Sicherheit und Leistung. Zumindest werden Sie die Datenbankkonfiguration so ändern wollen, dass Sie eine andere Datenbank für die Produktion verwenden und ihre Anmeldeinformationen sichern können, die Stack-Traces, die auf Fehlerseiten während der Entwicklung enthalten sind, entfernen, Ihr Logging aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Unterabschnitten skizzieren wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Weitere nützliche Tipps finden Sie in den Express-Dokumenten — siehe [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance/) und [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security/).

### Datenbankkonfiguration

Bisher haben wir in diesem Tutorial eine einzige Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen [hartkodiert in **bin/www**](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#connect_to_mongodb) wurden. Da die Entwicklungsdatenbank keine Informationen enthält, die wir nicht preisgeben oder verfälschen möchten, besteht kein besonderes Risiko, diese Details weiterzugeben. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerinformationen, ist es sehr wichtig, Ihre Datenbankanmeldeinformationen zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als für die Entwicklung und auch die Anmeldeinformationen der Produktionsdatenbank vom Quellcode trennen, damit diese richtig geschützt werden können.

Wenn Ihr Hosting-Anbieter das Setzen von Umgebungsvariablen über eine Weboberfläche unterstützt (wie viele es tun), ist eine Möglichkeit, dies zu tun, dass der Server die Datenbank-URL aus einer Umgebungsvariablen erhält. Im Folgenden ändern wir die LocalLibrary-Website so, dass sie die Datenbank-URI aus einer Betriebssystem-Umgebungsvariablen erhält, falls sie definiert wurde, und andernfalls die URL der Entwicklungsdatenbank verwendet.

Öffnen Sie **bin.www** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable setzt. Sie wird ungefähr so aussehen:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Ersetzen Sie die Zeile durch den folgenden Code, der `process.env.MONGODB_URI` verwendet, um den Verbindungsstring aus einer Umgebungsvariablen namens `MONGODB_URI` zu erhalten, falls diese gesetzt wurde (verwenden Sie Ihre eigene Datenbank-URL anstelle des Platzhalters unten).

```js
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
```

> [!NOTE]
> Eine andere übliche Methode, um Anmeldeinformationen der Produktionsdatenbank vom Quellcode zu trennen, besteht darin, sie aus einer `.env`-Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem [dotenv](https://www.npmjs.com/package/dotenv) Modul von npm gelesen werden).

### Setzen Sie NODE_ENV auf 'production'

Wir können Stack Traces auf Fehlerseiten entfernen, indem wir die Umgebungsvariable `NODE_ENV` auf _production_ setzen (sie ist standardmäßig auf '_development_' gesetzt). Zusätzlich zur Generierung weniger ausführlicher Fehlermeldungen führt das Setzen der Variablen auf _production_ dazu, dass Ansichts-Templates und CSS-Dateien, die aus CSS-Erweiterungen generiert werden, zwischengespeichert bleiben. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Leistung der App um das Dreifache verbessern kann!

Diese Änderung kann entweder mit `export`, einer Umgebungsdatei oder dem Betriebssystem-Initialisierungssystem vorgenommen werden.

> [!NOTE]
> Dies ist tatsächlich eine Änderung, die Sie in Ihrer Umgebungseinrichtung vornehmen, anstatt in Ihrer App, aber wichtig genug, um es hier zu erwähnen! Wir werden zeigen, wie dies für unser Hosting-Beispiel unten eingestellt wird.

### Angemessen protokollieren

Protokollierungsaufrufe können sich auf eine stark frequentierte Website auswirken. In einer Produktionsumgebung müssen Sie möglicherweise die Website-Aktivität protokollieren (z. B. Verkehr verfolgen oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die Menge an Logging, die aus Debugging-Zwecken hinzugefügt wird, zu minimieren.

Eine Möglichkeit, das "Debug"-Logging in der Produktion zu minimieren, ist die Verwendung eines Moduls wie [debug](https://www.npmjs.com/package/debug), das es Ihnen ermöglicht, die durchzuführende Protokollierung durch Setzen einer Umgebungsvariablen zu steuern. Beispielsweise zeigt der folgende Codeausschnitt, wie man das "Autor"-Logging einrichten kann. Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Präfix "author" wird automatisch für alle Protokolle von diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Protokollgruppe aktivieren, indem Sie sie als kommagetrennte Liste in der Umgebungsvariable `DEBUG` angeben. Sie können die Variablen zum Anzeigen von Autor- und Buchprotokollen wie gezeigt setzen (Wildcards werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Anrufe bei `debug` können die Protokollierung ersetzen, die Sie möglicherweise zuvor mit `console.log()` oder `console.error()` gemacht haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Logging über das [debug](https://www.npmjs.com/package/debug) Modul. Schalten Sie das Logging in Ihrer Entwicklungsumgebung ein und aus, indem Sie die DEBUG-Variable setzen und beobachten Sie die Auswirkungen, die dies auf das Logging hat.

Wenn Sie die Website-Aktivität protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance/).

### Verwenden Sie gzip/deflate-Kompression für Antworten

Webserver können oft die HTTP-Antwort komprimieren, die an einen Client gesendet wird, was die Zeit, die der Client benötigt, um die Seite zu erhalten und zu laden, erheblich reduziert. Die verwendete Komprimierungsmethode hängt von den Dekomprimierungsmethoden ab, die der Client in der Anfrage sagt, dass er unterstützt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsverfahren unterstützt werden).

Fügen Sie diese auf Ihrer Website mit [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungsbibliothek wie gezeigt ein. Fügen Sie die Komprimierungsbibliothek mit der `use()`-Methode in die Middleware-Kette ein (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten – in diesem Fall alle!)

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
> Für eine stark frequentierte Website in der Produktion würden Sie diese Middleware nicht verwenden. Stattdessen würden Sie einen Reverse-Proxy wie [Nginx](https://nginx.org/) verwenden.

### Verwenden Sie Helmet, um sich vor bekannten Schwachstellen zu schützen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann geeignete HTTP-Header festlegen, die Ihre App vor bekannten Web-Schwachstellen schützen (siehe die [Dokumentation](https://helmet.js.org/), um weitere Informationen darüber zu erhalten, welche Header es festlegt und welche Schwachstellen es schützt).

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_-Bibliothek wie gezeigt ein. Fügen Sie dann das Modul mit der `use()`-Methode in die Middleware-Kette ein.

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

Wir hätten normalerweise einfach `app.use(helmet());` eingefügt, um das _Subset_ der sicherheitsrelevanten Header hinzuzufügen, die für die meisten Websites sinnvoll sind. Im [LocalLibrary-Basetemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) fügen wir jedoch einige Bootstrap-Skripte ein. Diese verstoßen gegen die _default_ [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) von Helmet, die das Laden von Cross-Site-Skripten nicht erlaubt. Um das Laden dieser Skripten zuzulassen, passen wir die Helmet-Konfiguration so an, dass CSP-Direktiven gesetzt werden, die das Laden von Skripten von den angegebenen Domains erlauben. Auf Ihrem eigenen Server können Sie je nach Bedarf bestimmte Header hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von Helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Fügen Sie den API-Routen eine Ratenbeschränkung hinzu

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Site gestellt werden könnten, wie z.B. Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar nur ein Client oder Skript, das sich nicht wie erwartet verhält. Neben Leistungsproblemen, die durch zu viele Anfragen verursacht werden, kann auch Ihr Server verlangsamt werden, und möglicherweise werden Ihnen zusätzliche Verkehrsgebühren berechnet. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen zu begrenzen, die an eine bestimmte Route oder eine Reihe von Routen gestellt werden können.

Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_-Bibliothek wie gezeigt ein. Fügen Sie dann das Modul mit der `use()`-Methode in die Middleware-Kette ein.

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
> Drittanbieterdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie erweiterte Schutzmaßnahmen gegen Denial-of-Service oder andere Arten von Angriffen benötigen.

#### Setzen der Node-Version

Für Node-Anwendungen, einschließlich Express, enthält die Datei **package.json** alles, was ein Hosting-Anbieter benötigt, um die Anwendungsabhängigkeiten und die Einstiegsdatei zu ermitteln.

Das einzige wichtige Element, das in unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Version von Node ermitteln, die für die Entwicklung verwendet wurde, indem Sie den Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** wie gezeigt hinzu (verwenden Sie die Versionsnummer für Ihr System).

```json
{
  "engines": {
    "node": ">=22.0.0"
  }
}
```

Der Hosting-Dienst unterstützt möglicherweise nicht die angegebene spezifische Version von Node, aber diese Änderung sollte sicherstellen, dass versucht wird, eine Version mit derselben Hauptversionsnummer oder eine neuere Version zu verwenden.

Beachten Sie, dass es auf verschiedenen Hosting-Diensten möglicherweise andere Möglichkeiten gibt, die Node-Version anzugeben, aber die Methode über das **package.json** wird weithin unterstützt.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir fortfahren, lassen Sie uns die Site erneut testen und sicherstellen, dass sie von unseren Änderungen nicht betroffen ist.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal im Stammverzeichnis des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Site aus (siehe [Testing the routes](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, dass die Site noch wie erwartet funktioniert.

### Erstellen eines Anwendungs-Repositorys in GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder aus cloudbasierten Versionskontrollplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial werden wir ein [GitHub](https://github.com/)-Konto und ein Repository für die Bibliothek einrichten und das **git**-Tool verwenden, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie bereits GitHub zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Verwendung von Quellcode-Verwaltungstools eine gute Software-Entwicklungspraxis darstellt, da Sie Änderungen ausprobieren und zwischen Ihren Experimenten und dem „bekannten guten Code“ wechseln können, wenn Sie dies benötigen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht zwingend erforderlich sind, werden sie nachdrücklich empfohlen.
   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (wie "Local Library-Website in Express geschrieben").
   - Wählen Sie **Node** in der _Add .gitignore_-Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_-Liste.
   - Aktivieren Sie **Initialize this repository with a README**.

   > [!WARNING]
   > Der Standardzugang "Öffentlich" macht _alle_ Quellcodes - einschließlich Ihres Datenbank-Benutzernamens und -Passworts - für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode Anmeldeinformationen _nur_ aus Umgebungsvariablen liest und keine Anmeldeinformationen hart kodiert hat.
   >
   > Andernfalls wählen Sie die Option "Privat", um nur ausgewählten Personen den Zugriff auf den Quellcode zu erlauben.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf die grüne **Klonen oder herunterladen**-Taste auf Ihrer neuen Repository-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im angezeigten Dialogfeld. Wenn Sie den Repository-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`.

Jetzt, da das Repository („Repo“) auf GitHub erstellt ist, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads/)).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies wird das Repository im aktuellen Verzeichnis erstellen.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendungs-Quelldateien in den Repo-Ordner, machen Sie sie mit _git_ Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (mit Ausnahme von **/node_modules**, das Abhängigkeitsdateien enthält, die Sie bei Bedarf von npm abrufen sollten).
2. Öffnen Sie eine Eingabeaufforderung/Terminal und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, dass alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quellcodedateien einschließen, keine Binärdateien, temporären Dateien usw.). Es sollte ein wenig wie die folgende Liste aussehen.

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

4. Wenn Sie zufrieden sind, `commit` die Dateien in Ihr lokales Repo. Dies entspricht der „Abzeichnung“ der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. An diesem Punkt wurde das Remote-Repo nicht verändert. Der letzte Schritt ist das Synchronisieren (`push`) Ihres lokalen Repos mit dem Remote-GitHub-Repo, indem Sie den folgenden Befehl verwenden:

   ```bash
   git push origin main
   ```

Wenn diese Operation abgeschlossen ist, sollten Sie zu der Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen Hinzufügen/Commit/Pushing-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres „Vanilla“-Projekts zu erstellen - während einige der Änderungen, die wir im nächsten Abschnitt vornehmen werden, für die Bereitstellung auf jedem Hosting-Dienst oder für die Entwicklung nützlich sein könnten, sind dies andere möglicherweise nicht. Sie können dies mit `git` über die Befehlszeile tun:

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

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

> [!NOTE]
> MDN hat dieses Projekt von mehreren Hosting-Diensten migriert, die keine kostenlosen Stufen mehr anbieten. Wir haben uns entschieden, Railway als aktuelle Hosting-Option zu verwenden, die eine kostengünstige Hobby-Stufe bietet. Die meisten Dienste haben ähnliche Bereitstellungsmethoden, daher sollten Ihnen die unten stehenden Anweisungen helfen, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um die meiste Infrastruktur, sodass Sie es nicht müssen. Sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern zu müssen, macht den Einstieg viel einfacher.
- Railway hat einen [Fokus auf Entwicklererfahrung bei Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), was zu einer schnelleren und weicheren Lernkurve führt als viele andere Alternativen.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erlernen, sind übertragbar. Während Railway einige hervorragende neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele der gleichen Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es hat eine vergleichsweise kostengünstige [Hobby-Stufe](https://railway.com/pricing).
- Der Dienst scheint sehr zuverlässig zu sein, und wenn Sie ihn lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich Zeit nehmen, um zu bestimmen, ob Railway [für Ihre eigene Website geeignet](#auswahl_eines_hosting-anbieters) ist.

### Wie funktioniert Railway?

Webanwendungen werden in ihren eigenen isolierten und unabhängigen virtualisierten Containern ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die geeignete Umgebung und Abhängigkeiten einzurichten sowie zu verstehen, wie sie gestartet wird.

Railway macht dies einfach, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen automatisch anhand ihrer Verwendung von „allgemeinen Konventionen“ erkennen und installieren kann. Beispielsweise erkennt Railway Node-Anwendungen, weil sie eine **package.json**-Datei haben, und kann anhand der „Lock“-Datei den verwendeten Paketmanager für den Build bestimmen. Beispielsweise, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass es _npm_ verwenden muss, um die Pakete zu installieren, während es bei **yarn.lock** bemerkt, dass es _yarn_ verwenden muss. Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten mit den Namen „build“ und „start“ in der Paketdatei und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs) zur Erkennung verschiedener Webanwendungs-Frameworks, die in verschiedenen Programmiersprachen geschrieben sind. Sie müssen für dieses Tutorial nichts anderes wissen, aber Sie können mehr über Optionen zum Bereitstellen von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) herausfinden.

Sobald die Anwendung läuft, kann sie sich mithilfe der in den [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellten Informationen konfigurieren. Beispielsweise muss eine Anwendung, die eine Datenbank verwendet, die Adresse mit einer Variablen abrufen. Der eigentliche Datenbankdienst kann entweder von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Website und mit einem speziellen [Command Line Interface (CLI)](https://docs.railway.com/cli) Tool. Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository von dem lokalen Branch auf die Live-Website hochzuladen, die Protokolle des laufenden Prozesses einzusehen, Konfigurationsvariablen zu setzen und zu erhalten und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie mit der CLI Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt ausführen können.

Das ist alles, was Sie wissen müssen, um die App auf Railway bereitzustellen. Als Nächstes richten wir ein Railway-Konto ein, installieren unsere Website und eine Datenbank und probieren den Railway-Client aus.

### Erstellen Sie ein Railway-Konto

Um Railway zu verwenden, müssen Sie zuerst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Pop-up aus, um sich mit Ihren GitHub-Anmeldeinformationen anzumelden.
- Möglicherweise müssen Sie dann Ihre E-Mail bestätigen.
- Sie werden im Dashboard von Railway.com angemeldet: <https://railway.com/dashboard>.

### Auf Railway von GitHub bereitstellen

Als Nächstes richten wir Railway ein, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zuerst die Option **Dashboard** aus dem oberen Menü der Website und dann die Schaltfläche **Neues Projekt**:

![Railway-Website-Dashboard mit hervorgehobener Schaltfläche "Neues Projekt"](railway_new_project_button.png)

Railway zeigt eine Liste von Optionen für das neue Projekt an, einschließlich der Option, ein Projekt aus einer Vorlage bereitzustellen, die zuerst in Ihrem GitHub-Konto erstellt wurde, und einer Reihe von Datenbanken. Wählen Sie **Von GitHub-Repo bereitstellen**.

![Railway-Popup zeigt Bereitstellungsoptionen mit hervorgehobener Option "Von GitHub-Repo bereitstellen"](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie während der Einrichtung für Railway freigegeben haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<user-name>/express-locallibrary-tutorial`.

![Railway-Popup zeigt GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Jetzt bereitstellen** auswählen.

![Bestätigungsbildschirm, wenn Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway wird dann Ihr Projekt laden und bereitstellen und den Fortschritt auf der Registerkarte Deployments anzeigen. Sobald die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm, wie den untenstehenden.

![Railway-Dashboard zeigt Registerkarte Deployments für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Einstellungen_, scrollen Sie dann nach unten zum Abschnitt Domains und drücken Sie die **Domain generieren**-Schaltfläche.

![Einstellungsregisterkarte des Railway-Projekts zeigt eine Schaltfläche zum Generieren einer Domain](railway_project_generate_domain.png)

Dies wird die Site veröffentlichen und den Domainnamen anstelle der Schaltfläche anzeigen, wie unten gezeigt.

![Einstellungsregisterkarte des Railway-Projekts zeigt einen Link zur Lokalbibliothek-Site](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass wir aufgrund der fehlenden Angabe einer Produktionsdatenbank die Local Library mit Ihren Entwicklungsdaten öffnen werden.

### Einen MongoDB-Produktions-Datenbank bereitstellen und verbinden

Anstelle der Entwicklungsdaten werden wir nun eine Produktions-MongoDB-Datenbank erstellen, um sie stattdessen zu verwenden. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl nichts dagegen spricht, dass Sie diese in einem eigenen separates Projekt erstellen oder eine _MongoDB Atlas_-Datenbank für Produktionsdaten verwenden, genauso wie Sie es für die Entwicklungsdatenbank getan haben.

Auf Railway wählen Sie die Option **Dashboard** aus dem oberen Menü der Website aus und wählen dann Ihr Anwendungsprojekt. In diesem Stadium enthält es nur einen Dienst für Ihre Anwendung (dieser kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Wählen Sie die Schaltfläche **Neu**, die verwendet wird, um dem aktuellen Projekt Dienste hinzuzufügen.

![Railway-Projekt mit hervorgehobener Schaltfläche "Neuen Dienst hinzufügen"](railway_project_open_no_database.png)

Wählen Sie **Datenbank** aus, wenn Sie aufgefordert werden, welchen Diensttyp Sie hinzufügen möchten:

![Railway-Popup zeigt Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leeren Dienst usw.](railway_database_add.png)

Wählen Sie dann **MongoDB hinzufügen**, um die Datenbank hinzuzufügen.

![Railway-Popup zeigt verschiedene Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB und so weiter](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im gleichen Projekt bereitstellen. Nach Abschluss werden Sie nun sowohl den Anwendungs- als auch den Datenbankdienst in der Projektansicht sehen.

![Railway-Projekt mit Anwendungen und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen. Öffnen Sie die Registerkarte _Variablen_ und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Einstellungsbildschirm der Railway-Datenbank zeigt die URL für die Verbindung zur Datenbank an](railway_mongodb_connect.png)

Um dies der Bibliotheksanwendung zugänglich zu machen, müssen wir sie über eine Umgebungsvariable dem Anwendungsprozess hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variablen_ und drücken Sie die Schaltfläche **Neue Variable**.

Geben Sie den Variablennamen `MONGODB_URI` und die Verbindungs-URL, die Sie für die Datenbank kopiert haben, ein (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies wird wie auf dem unten gezeigten Bildschirm aussehen.

![Railway-Website-Variablenbildschirm beim Hinzufügen der MONGODB_URI-Variable und Adresse](railway_variables_database_url.png)

Wählen Sie **Hinzufügen**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie jetzt die Startseite prüfen, sollte sie null Werte für Ihre Objektzählt anzeigen, da die Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Andere Konfigurationsvariablen

Sie werden sich aus einem vorherigen Abschnitt erinnern, dass wir `NODE_ENV` auf 'production' setzen müssen, um unsere Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu generieren. Wir können dies auf demselben Bildschirm tun, auf dem wir die `MONGODB_URI`-Variable gesetzt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die Registerkarte _Variablen_, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die Schaltfläche **Neue Variable**.

![Railway-Variablenregisterkarte mit hervorgehobener Schaltfläche "Neue Variable"](railway_variables_new.png)

Geben Sie `NODE_ENV` als Namen der neuen Variable und `production` als Namen der Umgebung ein. Drücken Sie dann die **Hinzufügen**-Taste.

![Railway-Variablenregisterkarte mit der neuen NODE_ENV-Variable, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Local-Library-Anwendung ist jetzt eingerichtet und für den Produktionseinsatz konfiguriert. Sie können Daten über die Website-Oberfläche hinzufügen, und sie sollte genauso funktionieren wie während der Entwicklung (wenn auch mit weniger Debug-Informationen, die bei ungültigen Seiten angezeigt werden).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, könnten Sie das `populatedb`-Skript verwenden (mit Ihrer MongoDB-Produktionsdatenbank-URL), wie im Abschnitt [Express Tutorial Part 3: Verwenden einer Datenbank (mit Mongoose) Testen — einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) diskutiert.

### Den Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Zu den wichtigeren Operationen gehören das Bereitstellen des aktuellen Verzeichnisses Ihres Computers an ein zugeordnetes Railway-Projekt (ohne es auf GitHub hochladen zu müssen) und das lokale Ausführen Ihres Projekts mit denselben Einstellungen wie auf dem Produktionsserver.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie das folgende in einem Terminal eingeben.

```bash
railway help
```

### Debugging

Der Railway-Client bietet den Befehl logs, um das Ende von Protokollen anzuzeigen (ein vollständigeres Protokoll ist auf der Website für jedes Projekt verfügbar):

```bash
railway logs
```

## Zusammenfassung

Das ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch das Ende der Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich gefunden haben. Sie können eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub einsehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance/) (Express Docs)
- [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security/) (Express Docs)
- Railway Docs
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Erste Schritte mit Heroku und Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumente)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumente)
  - [Heroku Node.js-Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumente)
  - [Optimierung der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumente)
  - [Wie Heroku funktioniert](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumente)
  - [Dynos und der Dyno-Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumente)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumente)
  - [Grenzen](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumente)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
