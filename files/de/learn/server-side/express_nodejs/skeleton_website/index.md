---
title: "Express Tutorial Teil 2: Erstellen einer Skelett-Website"
slug: Learn/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Websiteprojekt erstellen können, das Sie dann mit websitespezifischen Routen, Templates/Views und Datenbankaufrufen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Express_Nodejs/development_environment">Einrichten einer Node-Entwicklungsumgebung</a>.
        Überprüfen Sie das Express Tutorial.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eigene neue Websiteprojekte mit dem <em>Express Application Generator</em> starten zu können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie eine "Skelett"-Website mit dem Tool [Express Application Generator](https://expressjs.com/en/starter/generator.html) erstellen können, die Sie dann mit websitespezifischen Routen, Views/Templates und Datenbankaufrufen füllen können. Wir verwenden dabei das Tool, um das Gerüst für unsere [Local Library Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu dem wir später den gesamten benötigten Code hinzufügen werden. Der Prozess ist extrem einfach und erfordert nur, dass Sie den Generator auf der Befehlszeile mit einem neuen Projektnamen aufrufen und optional die Template-Engine und den CSS-Generator der Website angeben.

In den folgenden Abschnitten wird gezeigt, wie Sie den Application Generator aufrufen und es wird eine kleine Erklärung zu den verschiedenen View/CSS-Optionen gegeben. Außerdem wird erklärt, wie die Skelett-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, dass sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Website hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Informationen über eine _minimale_ Express-Anwendung finden Sie im [Hello World Beispiel](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten dieser Variablen in diesem Tutorial in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) geändert (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)), da wir moderne JavaScript-Praktiken demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der von dem _Express Application Generator_ erstellten **package.json** definiert sind.
>   Diese sind nicht (notwendigerweise) die neueste Version und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine reale Anwendung in Produktion bereitstellen.

## Verwendung des Application Generators

Sie sollten den Generator bereits im Rahmen der [Einrichtung einer Node-Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung installieren Sie das Generator-Tool site-wide mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat eine Reihe von Optionen, die Sie auf der Befehlszeile mit dem Befehl `--help` (oder `-h`) anzeigen können:

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

Sie können Express angeben, um ein Projekt im _aktuellen_ Verzeichnis zu erstellen, unter Verwendung der _Jade_ View-Engine und plain CSS (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View (Template)-Engine mit `--view` und/oder eine CSS-Erzeugungsengine mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` usw.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe beliebter View-/Templating-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade verwendet, wenn Sie keine View-Option angeben. Express selbst kann auch eine Vielzahl anderer Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, siehe [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Ziel-View-Engine.

Im Allgemeinen sollten Sie eine Templating-Engine auswählen, die alle von Ihnen benötigten Funktionen bereitstellt und Ihnen eine schnellere Produktivität ermöglicht — oder mit anderen Worten, genauso wie Sie jede andere Komponente auswählen! Einige Dinge, die Sie bei der Auswahl von Template-Engines berücksichtigen sollten:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, ist es wahrscheinlich, dass es schneller mit dieser Sprache produktiv sein wird. Wenn nicht, sollten Sie die relative Lernkurve für die in Frage kommenden Templating-Engines berücksichtigen.
- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu bekommen, wenn während der Lebensdauer der Website Probleme auftreten.
- Stil — Einige Template-Engines verwenden spezifisches Markup, um eingefügten Inhalt innerhalb von "normalem" HTML anzugeben, während andere das HTML mit einer anderen Syntax konstruieren (z.B. durch Einrückung und Blocknamen).
- Leistung/Rendering-Zeit.
- Funktionen — Sie sollten überlegen, ob die von Ihnen betrachteten Engines über die folgenden Funktionen verfügen:

  - Layout-Vererbung: Ermöglicht es Ihnen, eine Basismustervorlage zu definieren und dann nur die Teile davon "zu erben", die Sie für eine bestimmte Seite unterschiedlich haben möchten. Dies ist in der Regel ein besserer Ansatz, als Templates zu erstellen, indem eine Reihe erforderlicher Komponenten einbezogen wird oder jedes Mal eine Vorlage von Grund auf neu erstellt wird.
  - "Include"-Unterstützung: Ermöglicht es Ihnen, Templates zu erstellen, indem andere Templates einbezogen werden.
  - Knappes Variablen- und Schleifenkontrollsyntax.
  - Möglichkeit, Variablenwerte auf Vorlagenebene zu filtern, wie z.B. Variablen in Großbuchstaben zu setzen oder ein Datumswert zu formatieren.
  - Fähigkeit, Ausgabenformate zu erzeugen, die nicht HTML sind, wie z.B. JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, ermöglicht dies die Möglichkeit, dass alle oder die meisten Renderings clientseitig durchgeführt werden.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, um Ihnen bei der Auswahl der verschiedenen Optionen zu helfen!

Für dieses Projekt verwenden wir die [Pug](https://pugjs.org/api/getting-started.html)-Templating-Engine (dies ist die kürzlich umbenannte Jade-Engine), da diese eine der beliebtesten Express/JavaScript-Templating-Sprachen ist und vom Generator standardmäßig unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das mit den häufigsten CSS-Stylesheet-Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben erschweren. CSS-Stylesheet-Engines ermöglichen es Ihnen, mächtigere Syntax zum Definieren Ihres CSS zu verwenden und dann die Definition in einfaches altes CSS für Browser zu kompilieren.

Wie bei den Templating-Engines sollten Sie die Stylesheet-Engine verwenden, die Ihrem Team die höchste Produktivität ermöglicht. Für dieses Projekt verwenden wir Vanilla-CSS (der Standard), da unsere CSS-Anforderungen nicht kompliziert genug sind, um die Verwendung von etwas anderem zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_-Apps können jeden [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen für die Datenbankverwaltung).

Wir werden in einem späteren Artikel darüber sprechen, wie man eine Datenbank integriert.

## Das Projekt erstellen

Für die Beispielanwendung _Local Library_, die wir erstellen werden, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ unter Verwendung der _Pug_-Template-Bibliothek und ohne CSS-Engine.

Navigieren Sie zuerst dorthin, wo Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ in der Befehlszeile aus, wie gezeigt:

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten installiert werden (wie in der **package.json**-Datei aufgeführt) und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt wird.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle erstellten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Die Skelett-Website ausführen

Zu diesem Zeitpunkt haben wir ein komplett fertiges Skelettprojekt. Die Website macht eigentlich noch nicht _viel_, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl wird alle Abhängigkeits-Pakete abrufen, die in der **package.json**-Datei des Projekts aufgelistet sind).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - Verwenden Sie in der Windows-CMD-Eingabeaufforderung diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie in Windows Powershell diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > Powershell-Befehle werden in diesem Tutorial nicht behandelt (die bereitgestellten "Windows"-Befehle nehmen an, dass Sie die Windows-CMD-Eingabeaufforderung verwenden).

   - Verwenden Sie auf macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für die Standard-Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 aufgerufen werden kann.

> [!NOTE]
> Sie könnten die App auch einfach mit dem `npm start` Befehl starten. Die Angabe der DEBUG-Variable, wie gezeigt, ermöglicht Konsolenprotokollierung/Debugging. Wenn Sie die obige Seite besuchen, sehen Sie beispielsweise Debugging-Ausgaben wie diese:
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

## Serverneustart bei Dateiänderungen aktivieren

Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit erst sichtbar, wenn Sie den Server neu starten. Es wird schnell sehr irritierend, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen, daher lohnt es sich, den Serverneustart bei Bedarf zu automatisieren.

Ein praktisches Werkzeug für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es sich um ein "Werkzeug" handelt), aber hier installieren und verwenden wir es lokal als _Entwicklerabhängigkeit_, so dass alle Entwickler, die mit dem Projekt arbeiten, es automatisch erhalten, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skelettprojekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie trotzdem [nodemon](https://github.com/remy/nodemon) global auf Ihrem Computer installieren und nicht nur in der **package.json**-Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Werkzeug nicht global installiert ist, können wir es nicht von der Befehlszeile starten (es sei denn, wir fügen es zum Pfad hinzu), aber wir können es von einem npm-Skript aus aufrufen, weil npm alle installierten Pakete kennt. Suchen Sie den `scripts`-Abschnitt Ihrer package.json. Anfangs enthält es eine Zeile, die mit `"start"` beginnt. Aktualisieren Sie es, indem Sie am Ende dieser Zeile ein Komma hinzufügen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Unter Linux und macOS sieht der Skriptabchnitt wie folgt aus:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Unter Windows würde der "serverstart"-Wert stattdessen so aussehen (bei Verwendung der Eingabeaufforderung):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Jetzt können wir den Server fast genau so starten wie zuvor, aber mit dem `devstart`-Befehl.

> [!NOTE]
> Wenn Sie jetzt irgendeine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit durch Eingabe von `rs` in der Eingabeaufforderung neu starten). Sie müssen den Browser immer noch neu laden, um die Seite zu aktualisieren.
>
> Wir müssen nun `npm run <scriptname>` anstelle von nur `npm start` aufrufen, weil "start" tatsächlich ein npm-Befehl ist, der auf das benannte Skript abgebildet wird. Wir könnten den Befehl im _start_-Skript ersetzt haben, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, also macht es Sinn, einen neuen Skriptbefehl zu erstellen.
>
> Der `serverstart`-Befehl, der den Skripten in der **package.json** oben hinzugefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der spezielle Befehl, der dem Skript hinzugefügt wurde, nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Lassen Sie uns jetzt einen Blick auf das Projekt werfen, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt hat, nachdem Sie die Abhängigkeiten installiert haben, folgende Dateistruktur (Dateien sind die Elemente, die **nicht** mit "/" beginnen).
Die Datei **package.json** definiert die Anwendungsabhängigkeiten und andere Informationen.
Es definiert auch ein Startskript, das den Anwendungseinstiegspunkt, die JavaScript-Datei **/bin/www** aufrufen wird.
Diese Datei richtet einige der Anwendung Fehlerbehandlungen ein und lädt dann **app.js**, um den Rest der Arbeit zu erledigen.
Die App-Routen werden in separaten Modulen im Verzeichnis **routes/** gespeichert.
Die Vorlagen (Templates) werden im Verzeichnis /**views** gespeichert.

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

Die folgenden Abschnitte beschreiben die Dateien noch etwas detaillierter.

### package.json

Die Datei **package.json** definiert die Anwendungsabhängigkeiten und andere Informationen:

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

Der Skriptabschnitt definiert zuerst ein "_start_" Skript, das wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Serverneustart bei Dateiänderungen aktivieren](#serverneustart_bei_dateiänderungen_aktivieren) modifiziert, indem wir die Skripte _devstart_ und _serverstart_ hinzugefügt haben.
Diese können verwendet werden, um die gleiche **./bin/www** Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das _express_-Paket und das Paket für unsere ausgewählte View-Engine (_pug_).
Darüber hinaus haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu parsen und `req.cookies` zu befüllen (bietet im Wesentlichen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Werkzeug, das nach dem Debugging-Verfahren des Node-Kerns modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Anforderungslogger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie HTTP-Fehler, wo nötig (für Express-Fehlerbearbeitung).

Die Standardversionen im generierten Projekt sind ein wenig veraltet.
Ersetzen Sie den Abhängigkeitsabschnitt Ihrer `package.json`-Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens angibt:

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
> Es ist eine gute Idee, regelmäßig die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch als Teil eines kontinuierlichen Integrationssetups durchgeführt werden.
>
> Normalerweise bleiben Bibliotheksupdates auf die Minor- und Patchversion kompatibel.
> Wir haben oben jedem Version `^` vorangestellt, sodass wir automatisch auf die neueste `minor.patch` Version aktualisieren können, indem wir den Befehl ausführen:
>
> ```bash
> npm update --save
> ```
>
> Major-Versionen ändern die Kompatibilität.
> Für diese Updates müssen wir manuell die `package.json` und den Code, der die Bibliothek verwendet, aktualisieren und das Projekt umfassend neu testen.

### www Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das allererste, was dies tut, ist, das "echte" Anwendungs-Einstiegspunkt (**app.js**, im Projektstamm) zu `require()`, das das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt.
`require()` ist die [CommonJS-Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier geben wir das **app.js** Modul unter Verwendung eines relativen Pfads an und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import` Anweisungen zum Importieren von JavaScript (ECMAScript) Modulen.
> Um diese Funktion zu nutzen, müssen Sie `"type": "module",` zu Ihrer Express **package.json** Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einbeziehen (weitere Informationen finden Sie in der [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Während es Vorteile hat, `import` zu verwenden, verwendet dieses Tutorial `require()`, um mit [der Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der verbleibende Code in dieser Datei richtet einen Node-HTTP-Server mit `app` ein, der auf einen bestimmten Port gesetzt wird (definiert in einer Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist) und beginnt, Verbindungen zu überwachen und Serverfehler zu melden. Für jetzt müssen Sie wirklich nichts anderes über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (standardmäßig `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der folgende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der **www**-Einstiegspunktdatei oben ist es dieses `module.exports`-Objekt, das dem Anrufer bereitgestellt wird, wenn diese Datei importiert wird.

Lassen Sie uns die Datei **app.js** im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mittels `require()`, wie z.B. _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mittels npm heruntergeladen haben; und _path_, das eine core Node-Bibliothek zum Parsen von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zur Bearbeitung bestimmter, zusammenhängender "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, z.B. um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, um mit buchbezogenen Routen umzugehen.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> Zu diesem Zeitpunkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich verwendet (dies geschieht etwas weiter unten in der Datei).

Als nächstes erstellen wir mit unserem importierten _express_ Modul das `app`-Objekt und verwenden es dann, um die View (Template) Engine einzurichten. Es gibt zwei Teile zur Einrichtung der Engine. Zuerst setzen wir den `"views"` Wert, um den Ordner anzugeben, in dem die Vorlagen gespeichert werden sollen (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"` Wert, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die oben importierten _Middleware_-Bibliotheken in die Anforderungsbearbeitungskette einzufügen.
Zum Beispiel sind `express.json()` und `express.urlencoded()` notwendig, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen.
Nach diesen Bibliotheken verwenden wir auch die `express.static` Middleware, die _Express_ alle statischen Dateien im **/public** Verzeichnis im Projektstamm bereitstellt.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nachdem nun alle anderen Middleware eingerichtet ist, fügen wir unseren (zuvor importierten) Routenbehandlungscode in die Anforderungsbearbeitungskette ein. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Seite definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für Routen behandelt, die in den importierten Dateien definiert sind.
> Wenn das importierte **users**-Modul beispielsweise eine Route für `/profile` definiert, würden Sie auf diese Route unter `/users/profile` zugreifen. Über Routen werden wir in einem späteren Artikel ausführlicher sprechen.

Das letzte Middleware in der Datei fügt Handler-Methoden für Fehler und HTTP 404-Antworten hinzu.

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

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Der letzte Schritt besteht darin, es zu den Modulexports hinzuzufügen (dadurch kann es von **/bin/www** importiert werden).

```js
module.exports = app;
```

### Routen

Die Routen-Datei **/routes/users.js** wird unten angezeigt (Routendateien teilen eine ähnliche Struktur, daher brauchen wir **index.js** nicht auch zu zeigen).
Zuerst lädt sie das _express_-Modul und verwendet es, um ein `express.Router` Objekt zu erhalten.
Dann legt sie eine Route auf diesem Objekt fest und exportiert zuletzt den Router aus dem Modul (dadurch kann die Datei in **app.js** importiert werden).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Callback, der immer dann aufgerufen wird, wenn eine HTTP `GET` Anfrage mit dem korrekten Muster erkannt wird. Das Übereinstimmungsmuster ist die Route, die beim Modulimport angegeben wurde (`"/users"`) plus das, was in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit node starten und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Eine interessante Sache oben ist, dass die Callback-Funktion das dritte Argument `next` hat und daher eine Middleware-Funktion und nicht nur ein einfacher Routencallback ist. Obwohl der Code derzeit das `next`-Argument nicht verwendet, könnte es in Zukunft nützlich sein, wenn Sie mehrere Routen-Handler auf dem `'/'` Routenpfad hinzufügen möchten.

### Views (Vorlagen)

Die Views (Vorlagen) werden im Verzeichnis **/views** gespeichert (wie in **app.js** angegeben) und haben die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um eine angegebene Vorlage zusammen mit den Werten von benannten Variablen zu rendern, die in einem Objekt übergeben werden, und dann das Ergebnis als Antwort zu senden. Im folgenden Code aus **/routes/index.js** sehen Sie, wie diese Route eine Antwort unter Verwendung der Vorlage "index" rendert und die Vorlagenvariable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Die entsprechende Vorlage für die obige Route wird unten angezeigt (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie im Moment wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo sie in der Vorlage angegeben ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" unter der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser aufrufen

## Zusammenfassung

Sie haben nun ein Skelett-Website-Projekt für die [Local Library](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstanden haben, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Views für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes werden wir das Skelett so modifizieren, dass es als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
