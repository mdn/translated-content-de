---
title: "Express Tutorial Teil 7: Bereitstellung in Produktion"
short-title: "7: Bereitstellung"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie eine Beispiel-Website mit Express erstellt und getestet haben, ist es an der Zeit, sie auf einen Webserver zu stellen, damit sie über das öffentliche Internet zugänglich ist. Diese Seite erklärt, wie Sie ein Express-Projekt hosten und was Sie tun müssen, um es für die Produktion bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorial-Themen, inklusive <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express Tutorial Teil 6: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wo und wie Sie eine Express-App in die Produktion bereitstellen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Sobald Ihre Seite fertig ist (oder "fertig genug", um öffentlich getestet zu werden), müssen Sie sie irgendwo hosten, das öffentlicher und zugänglicher ist als Ihr persönlicher Entwicklungscomputer.

Bis jetzt haben Sie in einer [Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) gearbeitet, Express/Node als Webserver verwendet, um Ihre Seite an den lokalen Browser/das Netzwerk freizugeben, und Ihre Website mit (unsicheren) Entwicklungseinstellungen betrieben, die Debugging- und andere private Informationen offenlegen. Bevor Sie eine Website extern hosten können, müssen Sie:

- Eine Umgebung für das Hosting der Express-App wählen.
- Einige Änderungen an Ihren Projekteinstellungen vornehmen.
- Eine Infrastruktur auf Produktionsniveau für das Bereitstellen Ihrer Website einrichten.

Dieses Tutorial bietet einige Anleitungen zu den Optionen für die Wahl einer Hosting-Site, einen kurzen Überblick darüber, was Sie tun müssen, um Ihre Express-App für die Produktion bereit zu machen, und ein Arbeitsbeispiel, wie Sie die Website der LocalLibrary auf dem [Railway](https://railway.com/) Cloud-Hosting-Service installieren.

## Was ist eine Produktionsumgebung?

Die Produktionsumgebung ist die Umgebung, die vom Computer des Servers bereitgestellt wird, auf dem Ihre Website für den externen Verbrauch ausgeführt wird. Die Umgebung umfasst:

- Computerhardware, auf der die Website läuft.
- Betriebssystem (z.B. Linux oder Windows).
- Programmiersprachenlaufzeit und Framework-Bibliotheken, auf denen Ihre Website geschrieben ist.
- Webserver-Infrastruktur, möglicherweise einschließlich eines Webservers, eines Reverse-Proxys, eines Load Balancers usw.
- Datenbanken, von denen Ihre Website abhängt.

Der Server-Computer könnte auf Ihrem Gelände sein und über einen schnellen Anschluss mit dem Internet verbunden sein, aber es ist weitaus üblicher, einen Computer zu verwenden, der "in der Cloud" gehostet wird. Was dies eigentlich bedeutet, ist, dass Ihr Code auf einem entfernten Computer (oder möglicherweise einem "virtuellen" Computer) im Rechenzentrum Ihres Hosting-Unternehmens ausgeführt wird. Der Remote-Server bietet normalerweise eine garantierte Ebene von Computing-Ressourcen (z.B. CPU, RAM, Speicher, etc.) und Internet-Konnektivität zu einem bestimmten Preis.

Diese Art von aus der Ferne zugänglicher Netzwerkinfrastruktur wird als _Infrastructure as a Service (IaaS)_ bezeichnet. Viele IaaS-Anbieter bieten Optionen zur Vorinstallation eines bestimmten Betriebssystems, auf das Sie die anderen Komponenten Ihrer Produktionsumgebung installieren müssen. Andere Anbieter erlauben Ihnen, vollständigere Umgebungen auszuwählen, die möglicherweise eine vollständige Node-Einrichtung umfassen.

> [!NOTE]
> Vorgefertigte Umgebungen können es einfacher machen, Ihre Website einzurichten, da sie die erforderliche Konfiguration reduzieren, aber die verfügbaren Optionen können Sie auf einen Ihnen unbekannten Server (oder andere Komponenten) beschränken und basieren möglicherweise auf einer älteren Version des Betriebssystems. Oft ist es besser, die Komponenten selbst zu installieren, so dass Sie die bekommen, die Sie wollen, und wenn Sie Teile des Systems aktualisieren müssen, haben Sie eine Vorstellung davon, wo Sie anfangen sollen!

Andere Hosting-Anbieter unterstützen Express als Teil eines _Platform as a Service_ (_PaaS_)-Angebots. Bei der Nutzung dieser Art von Hosting müssen Sie sich nicht um den größten Teil Ihrer Produktionsumgebung (Server, Load Balancer, etc.) kümmern, da die Host-Plattform diese für Sie übernimmt. Dadurch wird die Bereitstellung recht einfach, da Sie sich nur auf Ihre Webanwendung konzentrieren und nicht auf andere Server-Infrastrukturen.

Einige Entwickler werden die erhöhte Flexibilität von IaaS gegenüber PaaS vorziehen, während andere die reduzierte Wartungslast und den geringeren Skalierungsaufwand von PaaS zu schätzen wissen. Wenn Sie gerade erst anfangen, ist es viel einfacher, Ihre Website auf einem PaaS-System einzurichten, und genau das werden wir in diesem Tutorial tun.

> [!NOTE]
> Wenn Sie einen Node/Express-freundlichen Hosting-Anbieter wählen, sollte dieser Anleitungen zur Einrichtung einer Express-Website mit verschiedenen Konfigurationen des Webservers, Anwendungsservers, Reverse-Proxy etc. bereitstellen. Zum Beispiel gibt es viele Schritt-für-Schritt-Anleitungen für verschiedene Konfigurationen in den [DigitalOcean Node Community-Dokumentationen](https://www.digitalocean.com/community/tutorials?q=node).

## Einen Hosting-Anbieter auswählen

Es gibt zahlreiche Hosting-Anbieter, die entweder aktiv unterstützen oder gut mit _Node_ (und _Express_) arbeiten. Diese Anbieter bieten verschiedene Arten von Umgebungen (IaaS, PaaS) sowie unterschiedliche Ebenen von Computing- und Netzwerkressourcen zu unterschiedlichen Preisen.

> [!NOTE]
> Es gibt viele Hosting-Lösungen, und ihre Leistungen und Preise können sich im Laufe der Zeit ändern. Während wir unten einige Optionen vorstellen, lohnt es sich, sowohl diese als auch andere Optionen zu prüfen, bevor Sie einen Hosting-Anbieter auswählen.

Einige Dinge, die Sie bei der Wahl eines Hosts berücksichtigen sollten:

- Wie stark Ihre Seite frequentiert sein wird und die Kosten für die Daten- und Computing-Ressourcen, die benötigt werden, um diese Nachfrage zu erfüllen.
- Unterstützung für das horizontale (Hinzufügen weiterer Maschinen) und vertikale (Upgrade auf leistungsstärkere Maschinen) Scaling und die damit verbundenen Kosten.
- Die Standorte, an denen der Anbieter Rechenzentren hat, und somit, wo der Zugriff wahrscheinlich am schnellsten ist.
- Die historische Verfügbarkeit und Ausfallzeiten des Hosts.
- Bereitgestellte Tools zur Verwaltung der Seite - sind sie einfach zu bedienen und sicher (z. B. SFTP gegenüber FTP).
- Eingebaute Frameworks zur Überwachung Ihres Servers.
- Bekannte Einschränkungen. Einige Hosts blockieren absichtlich bestimmte Dienste (z. B. E-Mail). Andere bieten nur eine bestimmte Anzahl von Stunden "Live-Zeit" in einigen Preiskategorien oder bieten nur wenig Speicherplatz.
- Zusätzliche Vorteile. Einige Anbieter bieten kostenlose Domain-Namen und Unterstützung für TLS-Zertifikate, die Sie normalerweise bezahlen müssten.
- Ob das "kostenlose" Tier, auf das Sie sich verlassen, im Laufe der Zeit abläuft und ob die Kosten für den Umstieg auf ein teureres Tier bedeuten, dass es besser gewesen wäre, einen anderen Dienst von Anfang an zu nutzen!

Die gute Nachricht, wenn Sie gerade erst anfangen, ist, dass es viele Seiten gibt, die "kostenlose" Computerumgebungen bieten, die für die Evaluierung und das Testen gedacht sind. Diese sind in der Regel relativ ressourcenbeschränkt und Sie müssen sich bewusst sein, dass sie nach einer Einführungszeit ablaufen oder andere Einschränkungen haben können. Sie sind jedoch großartig, um Seiten mit geringem Datenverkehr in einer gehosteten Umgebung zu testen, und können einen einfachen Übergang zu zahlungsbasierten Ressourcen bieten, wenn Ihre Seite stärker frequentiert wird. Beliebte Optionen in dieser Kategorie sind [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html) und [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/).

Die meisten Anbieter bieten auch eine "Basic" oder "Hobby" Stufe an, die für kleine Produktionsseiten gedacht ist und nützlichere Rechenleistungsebenen und weniger Einschränkungen bietet. [Railway](https://railway.com/), [Heroku](https://www.heroku.com/) und [DigitalOcean](https://www.digitalocean.com/) sind Beispiele für beliebte Hosting-Anbieter, die eine relativ kostengünstige grundlegende Compute-Stufe (im Bereich von 5 bis 10 USD pro Monat) haben.

> [!NOTE]
> Denken Sie daran, dass der Preis nicht das einzige Auswahlkriterium ist. Wenn Ihre Website erfolgreich wird, kann es sich herausstellen, dass Skalierbarkeit das wichtigste Kriterium ist.

## Ihre Website für die Veröffentlichung bereit machen

Die wichtigsten Dinge, die Sie berücksichtigen sollten, wenn Sie Ihre Website veröffentlichen, sind Websicherheit und Leistung. Mindestens möchten Sie die Datenbankkonfiguration so ändern, dass Sie eine andere Datenbank für die Produktion verwenden und deren Anmeldeinformationen sichern können, die Stack-Traces entfernen, die während der Entwicklung auf Fehlerseiten enthalten sind, Ihre Protokollierung aufräumen und die entsprechenden Header setzen, um viele gängige Sicherheitsbedrohungen zu vermeiden.

In den folgenden Abschnitten umreißen wir die wichtigsten Änderungen, die Sie an Ihrer App vornehmen sollten.

> [!NOTE]
> Es gibt weitere nützliche Tipps in den Express-Dokumentationen — siehe [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) und [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html).

### Datenbankkonfiguration

Bisher in diesem Tutorial haben wir eine einzelne Entwicklungsdatenbank verwendet, deren Adresse und Anmeldeinformationen [hartcodiert in **bin/www**](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#connect_to_mongodb) waren. Da die Entwicklungsdatenbank keine Informationen enthält, die wir gerne preisgeben oder beschädigen lassen, besteht kein besonderes Risiko, diese Details weiterzugeben. Wenn Sie jedoch mit echten Daten arbeiten, insbesondere mit persönlichen Benutzerdaten, ist es sehr wichtig, Ihre Datenbankanmeldeinformationen zu schützen.

Aus diesem Grund möchten wir eine andere Datenbank für die Produktion verwenden als für die Entwicklung und auch die Anmeldeinformationen der Produktionsdatenbank vom Quellcode getrennt halten, damit sie angemessen geschützt werden können.

Wenn Ihr Hosting-Anbieter die Einstellung von Umgebungsvariablen über eine Webschnittstelle unterstützt (wie viele es tun), ist eine Möglichkeit, dies zu tun, den Datenbank-URL über eine Umgebungsvariable vom Server zu erhalten. Im Folgenden ändern wir die Website von LocalLibrary, um die Datenbank-URI aus einer OS-Umgebungsvariablen zu erhalten, wenn sie definiert wurde, und ansonsten die Entwicklungsdatenbank-URL zu verwenden.

Öffnen Sie **bin/www** und finden Sie die Zeile, die die MongoDB-Verbindungsvariable festlegt. Sie sieht etwa so aus:

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
> Eine andere gängige Methode, um die Anmeldeinformationen der Produktionsdatenbank vom Quellcode zu trennen, besteht darin, sie aus einer `.env` Datei zu lesen, die separat auf das Dateisystem bereitgestellt wird (zum Beispiel könnten sie mit dem [dotenv](https://www.npmjs.com/package/dotenv) Modul von npm gelesen werden).

### Setzen von NODE_ENV auf 'production'

Wir können Stack-Traces auf Fehlerseiten entfernen, indem wir die `NODE_ENV` Umgebungsvariable auf _production_ setzen (standardmäßig ist sie auf '_development_' gesetzt). Zusätzlich zur Erzeugung weniger ausführlicher Fehlermeldungen bewirkt das Setzen der Variablen auf _production_, dass Ansichtsvorlagen und CSS-Dateien, die aus CSS-Erweiterungen generiert wurden, zwischengespeichert werden. Tests zeigen, dass das Setzen von `NODE_ENV` auf _production_ die Anwendungsleistung um einen Faktor von drei verbessern kann!

Diese Änderung kann entweder durch Verwendung von `export`, einer Umgebungsdatei oder des OS-Initialisierungssystems vorgenommen werden.

> [!NOTE]
> Dies ist eigentlich eine Änderung, die Sie in Ihrer Umgebungs-Einrichtung und nicht in Ihrer App vornehmen, aber wichtig genug, um hier erwähnt zu werden! Wir zeigen, wie dies für unser Hosting-Beispiel unten eingestellt wird.

### Angemessen protokollieren

Protokollierungsaufrufe können einen Einfluss auf eine stark frequentierte Website haben. In einer Produktionsumgebung müssen Sie möglicherweise Website-Aktivitäten protokollieren (z.B. Verkehrsverfolgung oder API-Aufrufe protokollieren), aber Sie sollten versuchen, die zum Debuggen hinzugefügte Protokollierung auf ein Minimum zu beschränken.

Eine Möglichkeit, das "Debug"-Protokollieren in der Produktion zu minimieren, besteht darin, ein Modul wie [debug](https://www.npmjs.com/package/debug) zu verwenden, das es Ihnen ermöglicht, welche Protokollierung durchgeführt wird, durch das Setzen einer Umgebungsvariablen zu steuern. Zum Beispiel zeigt das untenstehende Codesegment, wie Sie das Protokollieren von "author" einrichten könnten. Die Debug-Variable wird mit dem Namen 'author' deklariert, und das Prefix "author" wird automatisch für alle Protokolle aus diesem Objekt angezeigt.

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

Sie können dann eine bestimmte Menge Protokolle aktivieren, indem Sie sie als kommagetrennte Liste in der `DEBUG` Umgebungsvariablen angeben. Sie können die Variablen aktivieren, um Autoren- und Buchprotokolle so anzuzeigen (Jokerzeichen werden ebenfalls unterstützt).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> Anrufe zu `debug` können Protokollierung ersetzen, die Sie möglicherweise zuvor mit `console.log()` oder `console.error()` durchgeführt haben. Ersetzen Sie alle `console.log()`-Aufrufe in Ihrem Code durch Protokollierung über das [debug](https://www.npmjs.com/package/debug) Modul. Aktivieren und deaktivieren Sie die Protokollierung in Ihrer Entwicklungsumgebung durch Setzen der DEBUG-Variable und beobachten Sie, welchen Einfluss dies auf die Protokollierung hat.

Wenn Sie Website-Aktivitäten protokollieren müssen, können Sie eine Protokollierungsbibliothek wie _Winston_ oder _Bunyan_ verwenden. Weitere Informationen zu diesem Thema finden Sie unter: [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html).

### Verwenden von gzip/deflate-Komprimierung für Antworten

Webserver können häufig die HTTP-Antwort, die an einen Client gesendet wird, komprimieren, was die Zeit erheblich reduzieren kann, die der Client benötigt, um die Seite zu erreichen und zu laden. Das verwendete Komprimierungsverfahren hängt von den Dekompressionsmethoden ab, die der Client im Request angibt (die Antwort wird unkomprimiert gesendet, wenn keine Komprimierungsmethoden unterstützt werden).

Fügen Sie dies zu Ihrer Website mithilfe der [compression](https://www.npmjs.com/package/compression) Middleware hinzu. Installieren Sie dies im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install compression
```

Öffnen Sie **./app.js** und binden Sie die Komprimierungsbibliothek ein, wie gezeigt. Fügen Sie die Komprimierungsbibliothek mit der `use()` Methode zur Middleware-Kette hinzu (dies sollte vor allen Routen erscheinen, die Sie komprimieren möchten - in diesem Fall alle!).

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

### Verwenden von Helmet zum Schutz vor bekannten Schwachstellen

[Helmet](https://www.npmjs.com/package/helmet) ist ein Middleware-Paket. Es kann die geeigneten HTTP-Header setzen, die Ihrer App helfen, sich vor bekannten Webschwachstellen zu schützen (siehe [Dokumentation](https://helmetjs.github.io/) für weitere Informationen darüber, welche Header es setzt und welche Schwachstellen es schützt).

Installieren Sie dieses im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install helmet
```

Öffnen Sie **./app.js** und binden Sie die _helmet_ Bibliothek ein, wie gezeigt. Fügen Sie dann das Modul mit der `use()` Methode zur Middleware-Kette hinzu.

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

Normalerweise hätten wir einfach `app.use(helmet());` eingefügt, um das _Teilmenge_ der sicherheitsbezogenen Header hinzuzufügen, die für die meisten Seiten sinnvoll sind. Allerdings enthalten wir im [LocalLibrary Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template) einige Bootstrap-Skripte. Diese verstoßen gegen die _Standardeinstellung_ der helmingschen [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die das Laden von cross-site Skripten nicht zulässt. Um das Laden dieser Skripte zu erlauben, ändern wir die Helmet-Konfiguration so, dass CSP-Direktiven gesetzt werden, die das Skriptladen von den angegebenen Domains erlauben. Für Ihren eigenen Server können Sie spezifische Header je nach Bedarf hinzufügen/deaktivieren, indem Sie den [Anweisungen zur Verwendung von helmet hier](https://www.npmjs.com/package/helmet) folgen.

### Hinzufügen von Ratenbegrenzungen zu den API-Routen

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit) ist ein Middleware-Paket, das verwendet werden kann, um wiederholte Anfragen an APIs und Endpunkte zu begrenzen. Es gibt viele Gründe, warum übermäßige Anfragen an Ihre Seite gestellt werden könnten, wie zum Beispiel Denial-of-Service-Angriffe, Brute-Force-Angriffe oder sogar einfach ein Client oder ein Skript, das sich nicht wie erwartet verhält. Abgesehen von Leistungsproblemen, die durch zu viele Anfragen entstehen können und dazu führen, dass Ihr Server langsamer wird, könnten Ihnen auch Gebühren für den zusätzlichen Verkehr berechnet werden. Dieses Paket kann verwendet werden, um die Anzahl der Anfragen, die an eine bestimmte Route oder eine Menge von Routen gestellt werden können, zu begrenzen.

Installieren Sie dieses im Stammverzeichnis Ihres Projekts, indem Sie den folgenden Befehl ausführen:

```bash
npm install express-rate-limit
```

Öffnen Sie **./app.js** und binden Sie die _express-rate-limit_ Bibliothek ein, wie gezeigt. Fügen Sie dann das Modul mit der `use()` Methode zur Middleware-Kette hinzu.

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
> Drittanbieterdienste wie [Cloudflare](https://www.cloudflare.com/) können ebenfalls verwendet werden, wenn Sie einen erweiterten Schutz gegen Denial-of-Service- oder andere Arten von Angriffen benötigen.

#### Node-Version festlegen

Für Node-Anwendungen, einschließlich Express, enthält die **package.json** Datei alles, was ein Hosting-Anbieter benötigt, um die Abhängigkeiten der Anwendung und die Startdatei zu ermitteln.

Die einzige wichtige Information, die in unserer aktuellen **package.json** fehlt, ist die Version von Node, die von der Bibliothek benötigt wird. Sie können die Version von Node, die für die Entwicklung verwendet wurde, abrufen, indem Sie den folgenden Befehl eingeben:

```bash
>node --version
v16.17.1
```

Öffnen Sie **package.json** und fügen Sie diese Information als **engines > node** hinzu, wie gezeigt (unter Verwendung der Versionsnummer für Ihr System).

```json
{
  "engines": {
    "node": ">=22.0.0"
  }
}
```

Der Hosting-Dienst unterstützt möglicherweise nicht die spezifisch angegebene Version von Node, aber diese Änderung sollte sicherstellen, dass versucht wird, eine Version mit derselben Hauptversionsnummer oder einer aktuelleren Version zu verwenden.

Beachten Sie, dass es bei verschiedenen Hosting-Diensten andere Möglichkeiten gibt, die Node-Version anzugeben, aber der **package.json** Ansatz ist weithin unterstützt.

#### Abhängigkeiten abrufen und erneut testen

Bevor wir weitermachen, lassen Sie uns die Site erneut testen und sicherstellen, dass sie durch keine unserer Änderungen beeinflusst wurde.

Zuerst müssen wir unsere Abhängigkeiten abrufen. Sie können dies tun, indem Sie den folgenden Befehl in Ihrem Terminal am Stamm des Projekts ausführen:

```bash
npm install
```

Führen Sie nun die Site aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und überprüfen Sie, ob sich die Site weiterhin wie erwartet verhält.

### Erstellen eines Anwendungsrepositorys auf GitHub

Viele Hosting-Dienste ermöglichen es Ihnen, Projekte aus einem lokalen Repository oder von cloudbasierten Quellversionskontrollplattformen zu importieren und/oder zu synchronisieren. Dies kann die Bereitstellung und die iterative Entwicklung erheblich erleichtern.

Für dieses Tutorial richten wir ein [GitHub](https://github.com/) Konto und Repository für die Bibliothek ein und verwenden das **git** Tool, um unseren Quellcode hochzuladen.

> [!NOTE]
> Sie können diesen Schritt überspringen, wenn Sie GitHub bereits zur Verwaltung Ihres Quellcodes verwenden!
>
> Beachten Sie, dass die Nutzung von Quellcode-Management-Tools eine gute Software-Entwicklungspraxis ist, da sie es Ihnen ermöglicht, Änderungen auszuprobieren und zwischen Ihren Experimenten und "bekannt gutem Code" zu wechseln, wenn Sie es brauchen!

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Auch wenn diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.
   - Geben Sie einen neuen Repository-Namen ein (z.B. _express-locallibrary-tutorial_) und eine Beschreibung (z.B. "Local Library Website geschrieben in Express").
   - Wählen Sie **Node** in der _Add .gitignore_ Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlliste.
   - Aktivieren Sie **Repository mit einer README erstellen**.

   > [!WARNING]
   > Der Standardzugriff "Öffentlich" macht _den gesamten_ Quellcode - einschließlich Ihren Datenbank-Benutzernamen und Passwort - für jeden im Internet sichtbar! Stellen Sie sicher, dass der Quellcode nur Anmeldeinformationen aus Umgebungsvariablen liest und keine Anmeldeinformationen hartcodiert sind.
   >
   > Andernfalls wählen Sie die Option "Privat" aus, um nur ausgewählte Personen den Quellcode sehen zu lassen.

4. Drücken Sie **Repository erstellen**.
5. Klicken Sie auf die grüne **Clone or download**-Schaltfläche auf Ihrer neuen Repo-Seite.
6. Kopieren Sie den URL-Wert aus dem Textfeld im Dialogfeld, das erscheint. Wenn Sie den Repositories-Namen "express-locallibrary-tutorial" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<Ihr_git_benutzername>/express-locallibrary-tutorial.git`.

Da das Repository ("Repo") jetzt auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Installieren Sie _git_ für Ihren lokalen Computer ([offizielle Git-Download-Anleitung](https://git-scm.com/downloads/)).
2. Öffnen Sie ein Eingabeaufforderungs-/Terminalfenster und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

3. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd express-locallibrary-tutorial
   ```

Kopieren Sie dann Ihre Anwendung-Quelldateien in den Repo-Ordner, machen Sie sie mit _git_ zu einem Teil des Repos und laden Sie sie auf GitHub hoch:

1. Kopieren Sie Ihre Express-Anwendung in diesen Ordner (mit Ausnahme von **/node_modules**, das Abhängigkeitsdateien enthält, die bei Bedarf von npm abgerufen werden sollten).
2. Öffnen Sie ein Eingabeaufforderungs-/Terminalfenster und verwenden Sie den `add`-Befehl, um alle Dateien zu git hinzuzufügen.

   ```bash
   git add -A
   ```

3. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quellcode-Dateien einbeziehen, keine Binärdateien, temporären Dateien usw.). Es sollte in etwa so aussehen wie die untenstehende Liste.

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

4. Wenn Sie zufrieden sind, `commit` Sie die Dateien in Ihr lokales Repo. Dies ist gleichbedeutend mit der Unterzeichnung der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert. Der letzte Schritt besteht darin, Ihr lokales Repo mit dem folgenden Befehl in das Remote GitHub Repo zu synchronisieren (`push`):

   ```bash
   git push origin main
   ```

Wenn dieser Vorgang abgeschlossen ist, sollten Sie zur Seite auf GitHub zurückkehren können, auf der Sie Ihr Repo erstellt haben, die Seite aktualisieren und sehen, dass Ihre gesamte Anwendung jetzt hochgeladen wurde. Sie können Ihr Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Dies ist ein guter Zeitpunkt, um ein Backup Ihres "Vanilla"-Projekts zu erstellen - während einige der Änderungen, die wir in den folgenden Abschnitten vornehmen werden, für die Bereitstellung bei jedem Hosting-Dienst nützlich sein könnten (oder für die Entwicklung) andere möglicherweise nicht. Sie können dies mit `git` in der Befehlszeile tun:

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
> Git ist unglaublich leistungsstark! Um mehr zu erfahren, sehen Sie sich [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) an.

## Beispiel: Hosting auf Railway

Dieser Abschnitt bietet eine praktische Demonstration, wie man _LocalLibrary_ auf [Railway](https://railway.com/) installiert.

> [!NOTE]
> MDN hat dieses Projekt von einer Reihe von Hosting-Diensten migriert, die keine kostenlosen Tiers mehr anbieten. Wir haben uns entschieden, Railway für die aktuelle Hosting-Option zu verwenden, die eine preiswerte Hobby-Stufe hat. Die meisten Dienste haben ähnliche Bereitstellungsmethoden, daher sollten Ihnen die untenstehenden Anweisungen helfen, Ihr Projekt auf der Plattform Ihrer Wahl zu veröffentlichen.

### Warum Railway?

Railway ist eine attraktive Hosting-Option aus mehreren Gründen:

- Railway kümmert sich um die meiste Infrastruktur, sodass Sie dies nicht tun müssen. Dadurch, dass Sie sich nicht um Server, Load Balancer, Reverse Proxies usw. kümmern müssen, wird es viel einfacher, loszulegen.
- Railway hat einen [Fokus auf Entwicklererfahrung für Entwicklung und Bereitstellung](https://docs.railway.com/platform/compare-to-heroku), die zu einer schnelleren und sanfteren Lernkurve als viele andere Alternativen führt.
- Die Fähigkeiten und Konzepte, die Sie beim Einsatz von Railway erwerben, sind übertragbar. Während Railway einige ausgezeichnete neue Funktionen hat, verwenden andere beliebte Hosting-Dienste viele derselben Ideen und Ansätze.
- [Railway-Dokumentation](https://docs.railway.com/) ist klar und vollständig.
- Es hat eine vergleichsweise preiswerte [Hobby Tier](https://railway.com/pricing).
- Der Service scheint sehr zuverlässig zu sein. Wenn Sie ihn letztendlich lieben, sind die Preise vorhersehbar und das Skalieren Ihrer App ist sehr einfach.

Sie sollten sich die Zeit nehmen, um zu bestimmen, ob Railway [für Ihre eigene Website geeignet ist](#einen_hosting-anbieter_auswählen).

### Wie funktioniert Railway?

Webanwendungen werden jeweils in ihrem eigenen isolierten und unabhängigen virtualisierten Container ausgeführt. Um Ihre Anwendung auszuführen, muss Railway in der Lage sein, die entsprechende Umgebung und Abhängigkeiten einzurichten und außerdem zu verstehen, wie sie gestartet wird.

Railway macht das einfach, da es viele verschiedene Webanwendungs-Frameworks und -Umgebungen basierend auf ihrer Verwendung gemeinsamer Konventionen automatisch erkennen und installieren kann. Zum Beispiel erkennt Railway Node-Anwendungen daran, dass sie eine **package.json** Datei haben, und kann den verwendeten Paketmanager für das Builden anhand der "Lock"-Datei ermitteln. Zum Beispiel, wenn die Anwendung die Datei **package-lock.json** enthält, weiß Railway, dass _npm_ verwendet wird, um die Pakete zu installieren, während es bei Vorhandensein von **yarn.lock** weiß, dass _yarn_ verwendet wird. Nachdem alle Abhängigkeiten installiert sind, sucht Railway nach Skripten namens "build" und "start" in der Package-Datei und verwendet diese, um den Code zu erstellen und auszuführen.

> [!NOTE]
> Railway verwendet [Nixpacks](https://nixpacks.com/docs) zur Erkennung verschiedener Webanwendungs-Frameworks, die in verschiedenen Programmiersprachen geschrieben sind. Sie müssen nichts weiter für dieses Tutorial wissen, aber Sie können mehr über Optionen für die Bereitstellung von Node-Anwendungen in [Nixpacks Node](https://nixpacks.com/docs/providers/node) erfahren.

Sobald die Anwendung läuft, kann sie sich selbst mit den in [Umgebungsvariablen](https://docs.railway.com/variables) bereitgestellten Informationen konfigurieren. Zum Beispiel muss eine Anwendung, die eine Datenbank verwendet, die Adresse über eine Variable erhalten. Der Datenbankdienst selbst kann von Railway oder einem anderen Anbieter gehostet werden.

Entwickler interagieren mit Railway über die Railway-Seite und ein spezielles [Command Line Interface (CLI)](https://docs.railway.com/cli) Tool. Die CLI ermöglicht es Ihnen, ein lokales GitHub-Repository mit einem Railway-Projekt zu verknüpfen, das Repository vom lokalen Zweig auf die Live-Site hochzuladen, die Protokolle des laufenden Prozesses zu inspizieren, Konfigurationsvariablen zu setzen und abzurufen und vieles mehr. Eine der nützlichsten Funktionen ist, dass Sie die CLI verwenden können, um Ihr lokales Projekt mit denselben Umgebungsvariablen wie das Live-Projekt auszuführen.

Das ist alles, was Sie wissen müssen, um die App auf Railway bereitzustellen. Weiter geht es mit der Einrichtung eines Railway-Kontos, der Installation unserer Website und einer Datenbank sowie dem Ausprobieren des Railway-Clients.

### Erstellen eines Railway-Kontos

Um Railway zu nutzen, müssen Sie zunächst ein Konto erstellen:

- Gehen Sie zu [railway.com](https://railway.com/) und klicken Sie auf den **Login**-Link in der oberen Symbolleiste.
- Wählen Sie GitHub im Popup, um sich mit Ihren GitHub-Anmeldedaten anzumelden.
- Möglicherweise müssen Sie dann Ihr Konto per E-Mail verifizieren.
- Sie werden dann im Railway.com Dashboard angemeldet: <https://railway.com/dashboard>.

### Bereitstellung auf Railway von GitHub

Als nächstes werden wir Railway einrichten, um unsere Bibliothek von GitHub bereitzustellen. Wählen Sie zunächst die **Dashboard**-Option aus dem oberen Menü der Seite aus und klicken Sie dann auf die **New Project**-Schaltfläche:

![Railway Website-Dashboard mit neuer Projekt-Schaltfläche](railway_new_project_button.png)

Railway zeigt eine Liste mit Optionen für das neue Projekt an, einschließlich der Möglichkeit, ein Projekt aus einer Vorlage bereitzustellen, die zuerst in Ihrem GitHub-Konto erstellt wird, und mehreren Datenbanken. Wählen Sie **Deploy from GitHub repo** aus.

![Railway-Popup mit Bereitstellungsoptionen und "Deploy from GitHub repo"-Option hervorgehoben](railway_new_project_button_deploy_github_repo.png)

Alle Projekte in den GitHub-Repos, die Sie mit Railway während der Einrichtung geteilt haben, werden angezeigt. Wählen Sie Ihr GitHub-Repository für die lokale Bibliothek: `<benutzer-name>/express-locallibrary-tutorial`.

![Railway-Popup mit GitHub-Repos, die bereitgestellt werden können](railway_new_project_button_deploy_github_selectrepo.png)

Bestätigen Sie Ihre Bereitstellung, indem Sie **Deploy Now** auswählen.

![Bestätigungsbildschirm, bei dem Sie die Bereitstellung des Projekts auswählen können](railway_new_project_deploy_confirm.png)

Railway lädt dann Ihr Projekt und bereitstellt es, wobei der Fortschritt auf der Registerkarte bereithalten angezeigt wird. Wenn die Bereitstellung erfolgreich abgeschlossen ist, sehen Sie einen Bildschirm wie den untenstehenden.

![Railway-Dashboard mit Bereitstellungsregisterkarte für das bereitgestellte Projekt](railway_project_deploy.png)

Wählen Sie nun die Registerkarte _Settings_ aus, scrollen Sie nach unten zum Abschnitt Domains und drücken Sie die **Generate Domain**-Schaltfläche.

![Railway-Projekteinstellungen-Registerkarte mit Schaltfläche zur Generierung einer Domain](railway_project_generate_domain.png)

Dies veröffentlicht die Seite und stellt die Domain anstelle der Schaltfläche bereit, wie unten gezeigt.

![Railway-Projekteinstellungen-Registerkarte mit einem Link zur Local Library-Seite](railway_project_domain.png)

Wählen Sie die Domain-URL aus, um Ihre Bibliotheksanwendung zu öffnen. Beachten Sie, dass wir aufgrund der Tatsache, dass wir keine Produktionsdatenbank angegeben haben, wird unsere Bibliothek die Entwicklungsdaten verwenden.

### Bereitstellung und Verbindung einer MongoDB-Datenbank

Anstelle unserer Entwicklungsdaten erstellen wir jetzt die Produktions-MongoDB-Datenbank, die stattdessen verwendet wird. Wir werden die Datenbank als Teil des Railway-Anwendungsprojekts erstellen, obwohl es nichts gibt, das Sie daran hindert, sie in einem eigenen separaten Projekt zu erstellen, oder sogar eine _MongoDB Atlas_ Datenbank für Produktionsdaten zu verwenden, genauso wie Sie es für die Entwicklungsdatenbank getan haben.

Wählen Sie auf Railway die **Dashboard**-Option aus dem oberen Menü der Seite aus und wählen Sie dann Ihr Anwendungsprojekt aus. Zu diesem Zeitpunkt enthält es nur einen einzigen Dienst für Ihre Anwendung (dies kann ausgewählt werden, um Variablen und andere Details des Dienstes festzulegen). Wählen Sie die **New**-Schaltfläche, die verwendet wird, um Dienste zum aktuellen Projekt hinzuzufügen.

![Railway-Projekt mit neuer Dienst-Schaltfläche hervorgehoben](railway_project_open_no_database.png)

Wählen Sie **Database**, wenn Sie aufgefordert werden, die Art des hinzuzufügenden Dienstes anzugeben:

![Railway-Popup mit Optionen für einen neuen Dienst, wie Datenbank, GitHub-Repo, leerer Dienst usw.](railway_database_add.png)

Wählen Sie dann **Add MongoDB**, um die Datenbank hinzuzufügen.

![Railway-Popup mit unterschiedlichen Datenbanken, die ausgewählt werden können: Postgres, MySQL, MongoDB usw.](railway_database_select_type.png)

Railway wird dann einen Dienst mit einer leeren Datenbank im selben Projekt bereitstellen. Nach Abschluss sehen Sie nun sowohl die Anwendungs- als auch die Datenbankdienste in der Projektansicht.

![Railway-Projekt mit Anwendungs- und Datenbankdiensten](railway_project_two_services.png)

Wählen Sie den MongoDB-Dienst aus, um Informationen über die Datenbank anzuzeigen. Öffnen Sie die _Variables_ Registerkarte und kopieren Sie die "Mongo_URL" (dies ist die Adresse der Datenbank).

![Railway-Datenbankeinstellungsbildschirm, der die zum Verbinden mit der Datenbank benötigte URL anzeigt](railway_mongodb_connect.png)

Um dies für die Bibliotheksanwendung zugänglich zu machen, müssen wir es mit einer Umgebungsvariablen zum Anwendungsprozess hinzufügen. Öffnen Sie zuerst den Anwendungsdienst. Wählen Sie dann die _Variables_ Registerkarte und drücken Sie die **New Variable**-Schaltfläche.

Geben Sie den Variablennamen `MONGODB_URI` und die von Ihnen kopierte Verbindungs-URL für die Datenbank ein (`MONGODB_URI` ist der Name der Umgebungsvariable, aus der [wir die Anwendung konfiguriert haben](#datenbankkonfiguration), um die Datenbankadresse zu lesen). Dies sieht in etwa aus wie der unten gezeigte Bildschirm.

![Railway-Website-Variablenbildschirm beim Hinzufügen der MONGODB_URI-Variablen und Adresse](railway_variables_database_url.png)

Drücken Sie **Add**, um die Variable hinzuzufügen.

Railway startet Ihre App neu, wenn es Variablen aktualisiert. Wenn Sie nun die Startseite überprüfen, sollte sie Nullwerte für Ihre Objektanzahlen anzeigen, da die oben genannten Änderungen bedeuten, dass wir jetzt eine neue (leere) Datenbank verwenden.

### Weitere Konfigurationsvariablen

Sie erinnern sich aus einem vorherigen Abschnitt, dass wir in der Lage sein müssen, die [NODE_ENV auf 'production' zu setzen](#set_node_env_to_production), um die Leistung zu verbessern und weniger ausführliche Fehlermeldungen zu erzeugen. Wir können dies im selben Bildschirm tun, in dem wir die `MONGODB_URI`-Variable festgelegt haben.

Öffnen Sie den Anwendungsdienst. Wählen Sie dann die _Variables_ Registerkarte, wo Sie sehen werden, dass `MONGODB_URI` bereits definiert ist, und drücken Sie die **New Variable**-Schaltfläche.

![Railway variablen Registerkarte mit hervorgehobenem New Variable Knopf](railway_variables_new.png)

Geben Sie `NODE_ENV` als Name der neuen Variable und `production` als Name der Umgebung ein. Drücken Sie dann die **Add**-Schaltfläche.

![Railway variables tab mit neuer NODE_ENV Variablen, die auf 'production' gesetzt wird](railway_variables_new_node_env.png)

Die Local Library-Anwendung ist nun eingerichtet und für die Produktionsnutzung konfiguriert. Sie können Daten über die Benutzeroberfläche der Website hinzufügen und sie sollte auf die gleiche Weise funktionieren wie während der Entwicklung (wenn auch mit weniger Debug-Informationen für ungültige Seiten).

> [!NOTE]
> Wenn Sie nur einige Daten zum Testen hinzufügen möchten, können Sie das `populatedb`-Skript (mit Ihrer MongoDB Produktionsdatenbank-URL) verwenden, wie im Abschnitt [Express Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose) Testen – einige Elemente erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#testing_%E2%80%94_create_some_items) besprochen wird.

### Client installieren

Laden Sie den Railway-Client für Ihr lokales Betriebssystem herunter und installieren Sie ihn, indem Sie den [Anweisungen hier](https://docs.railway.com/cli) folgen.

Nachdem der Client installiert ist, können Sie Befehle ausführen. Einige der wichtigsten Operationen umfassen die Bereitstellung des aktuellen Verzeichnisses Ihres Computers für ein zugeordnetes Railway-Projekt (ohne auf GitHub hochladen zu müssen) und die Ausführung Ihres Projekts lokal mit den gleichen Einstellungen wie Sie auf dem Produktionsserver haben.

Sie können eine Liste aller möglichen Befehle erhalten, indem Sie den folgenden in ein Terminal eingeben.

```bash
railway help
```

### Fehlerbehebung

Der Railway-Client stellt den Protokollbefehl bereit, um den Tail der Protokolle anzuzeigen (ein vollständigeres Protokoll steht auf der Seite für jedes Projekt zur Verfügung):

```bash
railway logs
```

## Zusammenfassung

Dies ist das Ende dieses Tutorials zur Einrichtung von Express-Apps in der Produktion und auch die Serie von Tutorials zur Arbeit mit Express. Wir hoffen, dass Sie sie nützlich fanden. Sie können sich eine vollständig durchgearbeitete Version des [Quellcodes hier auf GitHub ansehen](https://github.com/mdn/express-locallibrary-tutorial).

## Siehe auch

- [Produktion Bestehende Praktiken: Leistung und Zuverlässigkeit](https://expressjs.com/en/advanced/best-practice-performance.html) (Express-Dokumentation)
- [Produktion Bestehende Praktiken: Sicherheit](https://expressjs.com/en/advanced/best-practice-security.html) (Express-Dokumentation)
- Railway Docs
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express) Tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) Tutorials

- Heroku
  - [Erste Schritte auf Heroku mit Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku-Dokumentation)
  - [Bereitstellen von Node.js-Anwendungen auf Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku-Dokumentation)
  - [Heroku Node.js-Unterstützung](https://devcenter.heroku.com/articles/nodejs-support) (Heroku-Dokumentation)
  - [Optimieren der Node.js-Anwendungskonkurrenz](https://devcenter.heroku.com/articles/node-concurrency) (Heroku-Dokumentation)
  - [Wie Heroku arbeitet](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku-Dokumentation)
  - [Dynos und der Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku-Dokumentation)
  - [Konfiguration und Konfigurationsvariablen](https://devcenter.heroku.com/articles/config-vars) (Heroku-Dokumentation)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku-Dokumentation)

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
