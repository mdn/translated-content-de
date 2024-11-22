---
title: "Express Tutorial Teil 2: Erstellung einer Grundstruktur für eine Website"
slug: Learn/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit seiten-spezifischen Routen, Vorlagen/Ansichten und Datenbankaufrufen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Express_Nodejs/development_environment">Einrichten einer Node-Entwicklungsumgebung</a>.
          Überprüfung des Express Tutorials.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, eigene neue Website-Projekte mit dem <em>Express Application Generator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie eine "Skelett"-Website mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool erstellen können, die Sie dann mit seiten-spezifischen Routen, Ansichten/Vorlagen und Datenbankaufrufen füllen können. In diesem Fall werden wir das Tool verwenden, um das Framework für unsere [Local Library Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu der wir später all den anderen vom Standort benötigten Code hinzufügen werden. Der Prozess ist extrem einfach und erfordert nur, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen, wobei Sie optional auch die Template-Engine und den CSS-Generator der Website angeben können.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Anwendungs-Generator aufrufen und bieten eine kleine Erläuterung zu den verschiedenen View/CSS-Optionen. Wir werden auch erklären, wie die Skelett-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige praktikable Methode, um Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Seite hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Für Informationen über eine _minimale_ Express-Anwendung siehe [Hallo Welt Beispiel](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten davon zu [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige zu [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) in dem Tutorial geändert, weil wir moderne JavaScript-Praktiken demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der **package.json** erstellt wurden, die vom _Express Application Generator_ erstellt wurde.
>   Dies sind nicht (notwendigerweise) die neueste Versionen, und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine echte Anwendung in der Produktion bereitstellen.

## Verwendung des Anwendungs-Generators

Der Generator sollte bereits als Teil des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) installiert worden sein. Zur schnellen Erinnerung, Sie installieren das Generator-Tool systemweit mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat eine Reihe von Optionen, die Sie in der Befehlszeile mit dem `--help` (oder `-h`) Befehl ansehen können:

```bash
> express --help

    Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain CSS)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```

Sie können express angeben, ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ View-Engine und einfachem CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, dann wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View-Engine (Vorlagen-Engine) mit `--view` und/oder eine CSS-Generations-Engine mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen zum Auswählen von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ erlaubt es Ihnen, eine Reihe von populären View/Templating-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade wählt, wenn Sie keine View-Option angeben. Express selbst kann auch eine große Anzahl anderer Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, siehe [Verwenden von Template Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Ziel-View-Engine.

Allgemein gesprochen sollten Sie eine Templating-Engine auswählen, die alle Funktionen bietet, die Sie benötigen, und es Ihnen ermöglicht, schneller produktiv zu sein – mit anderen Worten, auf die gleiche Weise, wie Sie jede andere Komponente auswählen! Einige der Überlegungen bei der Auswahl von Template Engines sind:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, wird es wahrscheinlich schneller produktiv mit dieser Sprache sein. Wenn nicht, sollten Sie die relative Lernkurve für die in Frage kommenden Templating-Engines berücksichtigen.
- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu bekommen, wenn während der Lebensdauer der Website Probleme auftreten.
- Stil — Einige Template Engines verwenden bestimmte Markup, um eingefügten Inhalt innerhalb von "gewöhnlichem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel durch die Verwendung von Einrückungen und Blocknamen).
- Performance/Rendering-Zeit.
- Funktionen — Sie sollten prüfen, ob die von Ihnen betrachteten Engines die folgenden Funktionen anbieten:

  - Layoutvererbung: Erlaubt es Ihnen, eine Basisvorlage zu definieren und dann nur die Teile davon zu "erben", die für eine bestimmte Seite anders sein sollen. Dies ist typischerweise ein besserer Ansatz als das Erstellen von Vorlagen durch die Einbeziehung einer Reihe von erforderlichen Komponenten oder das Erstellen einer Vorlage von Grund auf jedes Mal.
  - "Include"-Unterstützung: Erlaubt es Ihnen, Vorlagen durch die Einbeziehung anderer Vorlagen zu erstellen.
  - Prägnante Syntax für Variablen- und Schleifensteuerung.
  - Fähigkeit, Variablenwerte auf Template-Level zu filtern, z.B. Variablen groß zu schreiben oder ein Datumswert zu formatieren.
  - Fähigkeit, andere Ausgabeformate als HTML zu generieren, wie JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, ermöglicht dies die Möglichkeit, das gesamte oder meiste Rendering client-seitig durchzuführen.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen helfen, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html) Templating-Engine verwenden (dies ist die kürzlich umbenannte Jade-Engine), da dies eine der beliebtesten Express/JavaScript Templating-Sprachen ist und vom Generator unterstützt wird.

### Welche CSS Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ erlaubt es Ihnen, ein Projekt zu erstellen, das darauf konfiguriert ist, die gebräuchlichsten CSS Stylesheet-Engines zu verwenden: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS Stylesheet-Engines erlauben es Ihnen, eine leistungsstärkere Syntax für die Definition Ihres CSS zu verwenden und die Definition dann in gewöhnliches CSS für Browser zu kompilieren.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, die es Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt verwenden wir Vanilla CSS (die Standardeinstellung), da unsere CSS-Anforderungen nicht kompliziert genug sind, um etwas anderes zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_ Apps können jeden [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezielles zusätzliches Verhalten/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel darüber sprechen, wie man mit einer Datenbank integriert.

## Erstellung des Projekts

Für die Beispielanwendung _Local Library_, die wir erstellen werden, erstellen wir ein Projekt mit dem Namen _express-locallibrary-tutorial_ unter Verwendung der _Pug_ Template-Bibliothek und keiner CSS-Engine.

Zunächst navigieren Sie zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ im Eingabeaufforderungsterminal wie gezeigt aus:

```bash
express express-locallibrary-tutorial --view=pug
```

Der Generator erstellt (und listet) die Dateien des Projekts auf.

```plain
   create : express-locallibrary-tutorial\
   create : express-locallibrary-tutorial\public\
   create : express-locallibrary-tutorial\public\javascripts\
   create : express-locallibrary-tutorial\public\images\
   create : express-locallibrary-tutorial\public\stylesheets\
   create : express-locallibrary-tutorial\public\stylesheets\style.css
   create : express-locallibrary-tutorial\routes\
   create : express-locallibrary-tutorial\routes\index.js
   create : express-locallibrary-tutorial\routes\users.js
   create : express-locallibrary-tutorial\views\
   create : express-locallibrary-tutorial\views\error.pug
   create : express-locallibrary-tutorial\views\index.pug
   create : express-locallibrary-tutorial\views\layout.pug
   create : express-locallibrary-tutorial\app.js
   create : express-locallibrary-tutorial\package.json
   create : express-locallibrary-tutorial\bin\
   create : express-locallibrary-tutorial\bin\www

   change directory:
     > cd express-locallibrary-tutorial

   install dependencies:
     > npm install

   run the app (Bash (Linux or macOS))
     > DEBUG=express-locallibrary-tutorial:* npm start

   run the app (PowerShell (Windows))
     > $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start

   run the app (Command Prompt (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten (wie in der **package.json** Datei aufgelistet) installiert und die Anwendung auf verschiedenen Betriebssystemen ausgeführt werden kann.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen zu `const`, bevor Sie fortfahren (der Rest des Tutorials setzt voraus, dass Sie dies getan haben).

## Ausführen der Skelett-Website

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website _tut_ tatsächlich noch sehr wenig, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Zuerst installieren Sie die Abhängigkeiten (der Befehl `install` ruft alle in der **package.json** Datei des Projekts aufgelisteten Abhängigkeitspakete ab).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Dann führen Sie die Anwendung aus.

   - In der Windows CMD-Eingabeaufforderung verwenden Sie diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - In Windows PowerShell verwenden Sie diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (Die bereitgestellten "Windows" Befehle setzen voraus, dass Sie die Windows CMD-Eingabeaufforderung verwenden).

   - Auf macOS oder Linux verwenden Sie diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browser-Seite sehen, die so aussieht:

![Browser für die Standard-Express-App Generator Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben nun eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch einfach mit dem Befehl `npm start` starten. Die Angabe der DEBUG-Variable wie gezeigt, ermöglicht das Protokollieren/Debuggen der Konsole. Zum Beispiel, wenn Sie die obige Seite besuchen, werden Sie eine Debug-Ausgabe sehen wie diese:
>
> ```bash
> SET DEBUG=express-locallibrary-tutorial:* & npm start
> ```
>
> ```plain
> > express-locallibrary-tutorial@0.0.0 start D:\github\mdn\test\exprgen\express-locallibrary-tutorial
> > node ./bin/www
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 304 490.296 ms - -
> GET /stylesheets/style.css 200 4.886 ms - 111
> ```

## Ermöglichen des Serverneustarts bei Dateiänderungen

Alle Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr ärgerlich, wenn Sie jedes Mal, wenn Sie eine Änderung vornehmen, den Server anhalten und neu starten müssen. Es lohnt sich daher, die Zeit zu investieren, um den Server bei Bedarf automatisch neu zu starten.

Ein praktisches Tool dafür ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es ein "Tool" ist), aber hier werden wir es lokal als _Entwicklerabhängigkeit_ installieren und verwenden, sodass jeder Entwickler, der mit dem Projekt arbeitet, es automatisch erhält, wenn er die Anwendung installiert. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skelettprojekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich noch entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrer Maschine zu installieren und nicht nur in die **package.json** Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json** Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht über die Befehlszeile starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es über ein npm-Skript aufrufen, weil npm alle installierten Pakete kennt. Finden Sie den `scripts`-Abschnitt Ihrer package.json. Zunächst enthält es eine Zeile, die mit `"start"` beginnt. Aktualisieren Sie es, indem Sie ein Komma am Ende dieser Zeile setzen und die `"devstart"` und `"serverstart"` Zeilen hinzufügen:

- Auf Linux und macOS sieht der Skriptabschnitt so aus:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Auf Windows würde der "serverstart" Wert stattdessen so aussehen (bei Verwendung der Eingabeaufforderung):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können nun den Server fast genau wie zuvor starten, aber mit dem Befehl `devstart`.

> [!NOTE]
> Wenn Sie jetzt eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit durch Eingabe von `rs` in der Eingabeaufforderung neu starten). Sie müssen den Browser dennoch neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` aufrufen, da "start" tatsächlich ein npm-Befehl ist, der dem benannten Skript zugeordnet ist. Wir könnten den Befehl im _start_ Skript ersetzen, aber wir möchten _nodemon_ nur während der Entwicklung verwenden, daher ist es sinnvoll, einen neuen Skriptbefehl zu erstellen.
>
> Der `serverstart` Befehl, der zu den Skripts in der **package.json** oben hinzugefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr für den Start des Servers eingeben. Beachten Sie, dass der spezielle Befehl, der dem Skript hinzugefügt wird, nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Lassen Sie uns nun einen Blick auf das Projekt werfen, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt, jetzt, da Sie Abhängigkeiten installiert haben, hat die folgende Dateistruktur (Dateien sind die Elemente, die **nicht** mit "/" vorangestellt sind). Die **package.json** Datei definiert die Anwendungsabhängigkeiten und andere Informationen. Sie definiert auch ein Startskript, das den Anwendungseinstiegspunkt aufruft, die JavaScript-Datei **/bin/www**. Diese richtet einige der Anwendungsfehlerbehandlungen ein und lädt dann **app.js** für den Rest der Arbeit. Die App-Routen sind in separaten Modulen im Verzeichnis **routes/** gespeichert. Die Vorlagen sind im Verzeichnis **/views** gespeichert.

```plain
express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

Die folgenden Abschnitte beschreiben die Dateien etwas genauer.

### package.json

Die **package.json** Datei definiert die Anwendungsabhängigkeiten und andere Informationen:

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^3.1.3"
  }
}
```

Der Skriptabschnitt definiert zuerst ein "_start_" Skript, das wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie erkennen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Ermöglichen des Serverneustarts bei Dateiänderungen](#ermöglichen_des_serverneustarts_bei_dateiänderungen) geändert, indem wir die _devstart_ und _serverstart_ Skripte hinzugefügt haben. Diese können verwendet werden, um die gleiche **./bin/www** Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben diskutiert).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten beinhalten das _express_ Paket und das Paket für unsere ausgewählte View-Engine (_pug_). Darüber hinaus haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu analysieren und `req.cookies` zu befüllen (bietet im Wesentlichen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Dienstprogramm, das nach dem Debugging-Ansatz des Node-Kerns modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Anforderungslogger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen von HTTP-Fehlern bei Bedarf (für Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind ein wenig veraltet. Ersetzen Sie den Abhängigkeitsabschnitt Ihrer `package.json` Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens angibt:

```json
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "debug": "^4.3.5",
    "express": "^4.19.2",
    "http-errors": "~2.0.0",
    "morgan": "^1.10.0",
    "pug": "3.0.3"
  },
```

Aktualisieren Sie dann Ihre installierten Abhängigkeiten mit dem Befehl:

```bash
npm install
```

> [!NOTE]
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren – dies kann sogar automatisch oder halbautomatisch als Teil eines kontinuierlichen Integrationssetups erfolgen.
>
> In der Regel bleiben Bibliotheksupdates auf die Minor- und Patch-Version kompatibel. Wir haben jede Version oben mit `^` versehen, damit wir automatisch auf die neueste `minor.patch` Version aktualisieren können, indem wir ausführen:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität. Für diese Updates müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfassend neu testen.

### www Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das Allererste, was dies tut, ist, die "echte" Anwendungseinstiegspunktdatei (**app.js**, im Projektstammverzeichnis) zu `require()`n, die die [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt erstellt und zurückgibt. `require()` ist die [CommonJS-Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren. Hier geben wir das **app.js** Modul mit einem relativen Pfad an und lassen die optionale (.**js**) Dateiendung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import`-Anweisungen zum Importieren von JavaScript (ECMAScript) Modulen. Um diese Funktion zu nutzen, müssen Sie `"type": "module",` zu Ihrer Express **package.json** Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für relative Importe müssen Sie die Dateiendung angeben (weitere Informationen finden Sie in der [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Während es Vorteile bei der Verwendung von `import` gibt, verwendet dieses Tutorial `require()`, um mit [der Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinstimmen.

Der Rest des Codes in dieser Datei richtet einen Node HTTP-Server mit `app` ein, der auf einen bestimmten Port (definiert in einer Umgebungsvariablen oder 3000, wenn die Variable nicht definiert ist) gesetzt ist, und beginnt mit dem Zuhören und der Berichterstattung von Server-Fehlern und Verbindungen. Für den Moment müssen Sie über den Code nicht viel mehr wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, es zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (nach Konvention `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der folgende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Im oben genannten **www** Einstiegspunkt-Datei wird dieses `module.exports` Objekt dem Aufrufer bereitgestellt, wenn diese Datei importiert wird.

Sehen wir uns die **app.js** Datei im Detail an. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben; und _path_, eine Core Node Bibliothek zum Parsen von Datei- und Verzeichnispfaden.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code für die Verarbeitung bestimmter Sätze verwandter "Routen" (URL-Pathways). Wenn wir die Skelett-Anwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, die sich mit buchbezogenen Routen befasst.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir nur das Modul _importiert_; wir haben seine Routen noch nicht tatsächlich verwendet (das passiert nur ein bisschen weiter unten in der Datei).

Als nächstes erstellen wir das `app` Objekt mit unserem importierten _express_ Modul und verwenden es dann, um die View (Vorlagen-) Engine einzurichten. Es gibt zwei Teile zur Einrichtung der Engine. Erstens setzen wir den Wert `"views"`, um den Ordner anzugeben, in dem die Vorlagen gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den Wert `"view engine"`, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die oben importierten Middleware-Bibliotheken in die Anfrageverarbeitungskette hinzuzufügen. Zum Beispiel, `express.json()` und `express.urlencoded()` sind notwendig, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu befüllen. Nach diesen Bibliotheken verwenden wir auch die `express.static` Middleware, die _Express_ alle statischen Dateien im **/public** Verzeichnis im Projektstammverzeichnis bereitstellt.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nachdem alle anderen Middleware eingerichtet sind, fügen wir unseren (zuvor importierten) Routencode der Anfrageverarbeitungskette hinzu. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Website definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix zu den in den importierten Dateien definierten Routen behandelt. Wenn das importierte **users** Modul also eine Route für `/profile` definiert, würden Sie auf diese Route über `/users/profile` zugreifen können. Wir werden mehr über Routen in einem späteren Artikel sprechen.

Die letzte Middleware in der Datei fügt Handler-Methoden für Fehler und HTTP 404-Antworten hinzu.

```js
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
```

Das Express-Anwendungsobjekt (app) ist jetzt vollständig konfiguriert. Der letzte Schritt besteht darin, es zu den Modulexporten hinzuzufügen (dies ist, was es ermöglicht, es von **/bin/www** zu importieren).

```js
module.exports = app;
```

### Routen

Die Routendatei **/routes/users.js** ist unten angezeigt (Routendateien haben eine ähnliche Struktur, deshalb müssen wir **index.js** nicht auch zeigen). Erstens, läd es das _express_ Modul und verwendet es, um ein `express.Router` Objekt zu erhalten. Dann spezifiziert es eine Route auf diesem Objekt und schließlich exportiert es den Router aus dem Modul (dies ist, was es ermöglicht, die Datei in **app.js** zu importieren).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Callback, der immer dann aufgerufen wird, wenn eine HTTP `GET` Anforderung mit dem richtigen Muster erkannt wird. Das passende Muster ist die beim Importieren des Moduls angegebene Route (`"/users"`) plus das, was in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit Node ausführen und die URL in Ihrem Browser aufrufen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Eine interessante Sache oben ist, dass die Callback-Funktion das dritte Argument `next` hat und somit eine Middleware-Funktion anstelle eines einfachen Routencallbacks ist. Obwohl der Code das `next`-Argument derzeit nicht verwendet, könnte es in Zukunft nützlich sein, wenn Sie mehrere Routenhandler für den `'/'` Routenpfad hinzufügen möchten.

### Ansichten (Vorlagen)

Die Ansichten (Vorlagen) sind im Verzeichnis **/views** gespeichert (wie in **app.js** angegeben) und haben die Dateiendung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um eine angegebene Vorlage zusammen mit den Werten der benannten Variablen, die in einem Objekt übergeben werden, zu rendern und dann das Ergebnis als Antwort zu senden. Im folgenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort mit der Vorlage "index" rendert und die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Die entsprechende Vorlage für die obige Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) an den angegebenen Stellen in die Vorlage eingefügt wird.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" bei der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben nun ein Skelett-Website-Projekt für die [Local Library](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist jedoch, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes beginnen wir mit der Anpassung des Skeletts, sodass es als Bibliotheks-Website funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Verwenden von Template Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
