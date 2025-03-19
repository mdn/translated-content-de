---
title: "Express Tutorial Teil 2: Erstellen eines Grundgerüsts für eine Website"
short-title: "2: Grundgerüst der Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt Ihnen, wie Sie ein "Grundgerüst" für ein Website-Projekt erstellen können, das Sie dann mit spezifischen Routen, Templates/Ansichten und Datenbankabfragen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Richten Sie eine Node-Entwicklungsumgebung ein</a>.
        Überprüfen Sie das Express-Tutorial.
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

Dieser Artikel zeigt Ihnen, wie Sie mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html) Tool ein "Grundgerüst" für eine Website erstellen können, das Sie dann mit site-spezifischen Routen, Ansichten/Templates und Datenbankabfragen füllen können. In diesem Fall werden wir das Tool verwenden, um das Grundgerüst für unsere [Lokale Bibliothek Webseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, der wir später all den anderen benötigten Code hinzufügen. Der Prozess ist extrem einfach und erfordert lediglich, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen, wobei Sie optional auch das Template-System und den CSS-Generator der Site spezifizieren können.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Anwendungsgenerator aufrufen und geben eine kleine Erklärung zu den verschiedenen Ansichts/CSS-Optionen. Wir erklären auch, wie das Grundgerüst der Website strukturiert ist. Am Ende zeigen wir Ihnen, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht der einzige gangbare Weg, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Site hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Für Informationen über eine _minimale_ Express-Anwendung siehe [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten dieser Änderungen in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) im Tutorial geändert, weil wir moderne JavaScript-Praktiken demonstrieren wollen.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der **package.json** definiert sind, die vom _Express Application Generator_ erstellt wurde.
>   Diese sind nicht (zwangsläufig) die neueste Version, und Sie möchten diese möglicherweise aktualisieren, wenn Sie eine wirkliche Anwendung in die Produktion bringen.

## Verwenden des Anwendungsgenerators

Sie sollten den Generator bereits als Teil der [Einrichtung einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Als kurze Erinnerung: Sie installieren das Generator-Tool sitenweit mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator verfügt über eine Anzahl von Optionen, die Sie in der Befehlszeile mit dem Befehl `--help` (oder `-h`) anzeigen können:

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

Sie können angeben, dass Express ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ Ansicht-Engine und normalem CSS erstellt (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine Ansicht (Template)-Engine mit `--view` und/oder eine CSS-Generierungs-Engine mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z. B. `--hogan`, `--ejs`, `--hbs` usw.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche Ansichts-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Anzahl beliebter Ansichts/Templating-Engines zu konfigurieren, inklusive [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl standardmäßig Jade ausgewählt wird, wenn Sie keine View-Option angeben. Express selbst kann auch eine große Anzahl anderer Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die nicht vom Generator unterstützt wird, siehe [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Zielansicht-Engine.

Allgemein gesprochen, sollten Sie eine Templating-Engine auswählen, die alle Funktionalitäten bietet, die Sie benötigen, und mit der Sie produktiver arbeiten können — oder anders gesagt, genauso wie Sie eine andere Komponente auswählen würden! Einige der Dinge, die Sie bei der Auswahl von Template-Engines berücksichtigen sollten:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, wird es wahrscheinlich schneller produktiv mit dieser Sprache. Wenn nicht, sollten Sie die relative Lernkurve der Kandidaten-Templating-Engines berücksichtigen.

- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu erhalten, wenn während der Lebensdauer der Website Probleme auftreten.

- Stil — Einige Template-Engines verwenden spezielles Markup, um eingefügten Inhalt innerhalb von "gewöhnlichem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel durch Einrückung und Blocknamen).

- Performance/Renderzeit.

- Funktionen — Sie sollten prüfen, ob die Engines, die Sie sich ansehen, die folgenden Funktionen haben:

  - Layout-Vererbung: Ermöglicht es Ihnen, ein Basistemplate zu definieren und dann nur die Teile davon zu "erben", die Sie für eine bestimmte Seite anders haben möchten. Dies ist typischerweise ein besserer Ansatz als Templates zu erstellen, indem eine Anzahl benötigter Komponenten eingebunden oder jedes Mal ein Template von Grund auf neu erstellt wird.

  - Unterstützung für "Include": Ermöglicht es Ihnen, Templates durch das Einbinden anderer Templates zu erstellen.

  - Prägnante Variable- und Schleifenkontrollsyntax.

  - Möglichkeit, Variablen auf der Template-Ebene zu filtern, wie zum Beispiel Variablen in Großbuchstaben umzuwandeln oder einen Datumswert zu formatieren.

  - Möglichkeit, andere Ausgabeformate als HTML zu erstellen, wie JSON oder XML.

  - Unterstützung für asynchrone Operationen und Streaming.

  - Clientseitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, ermöglicht dies die Möglichkeit, das gesamte oder den größten Teil des Renderings clientseitig auszuführen.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die helfen, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html) Templating-Engine verwenden (dies ist die kürzlich umbenannte Jade Engine), da dies eine der beliebtesten Express/JavaScript Templating-Sprachen ist und vom Generator unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das so konfiguriert ist, dass die gebräuchlichsten CSS-Stylesheet-Engines verwendet werden: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben erschweren. Mit CSS-Stylesheet-Engines können Sie eine mächtigere Syntax zur Definition Ihres CSS verwenden und die Definition dann in normales CSS für Browser kompilieren.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, mit der Ihr Team am produktivsten arbeiten kann. Für dieses Projekt werden wir normales CSS (die Standardeinstellung) verwenden, da unsere CSS-Anforderungen nicht ausreichend komplex sind, um die Verwendung von etwas anderem zu rechtfertigen.

### Welche Datenbank soll ich verwenden?

Der generierte Code verwendet/schließt keine Datenbanken ein. _Express_-Apps können jede [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, den _Node_ unterstützt (_Express_ selbst definiert kein spezielles zusätzliches Verhalten/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel darüber sprechen, wie man sich mit einer Datenbank integriert.

## Das Projekt erstellen

Für die Beispielapp der _Lokalen Bibliothek_, die wir entwickeln werden, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ unter Verwendung der _Pug_ Template-Bibliothek und keiner CSS-Engine.

Navigieren Sie zunächst zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ im Befehlsfenster aus, wie gezeigt:

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten installiert werden (wie in der **package.json** Datei aufgeführt) und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt wird.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen mit `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen zu `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Das Grundgerüst der Website ausführen

An diesem Punkt haben wir ein komplettes Grundgerüstprojekt. Die Website macht tatsächlich noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl wird alle Abhängigkeitspakete, die in der **package.json** Datei des Projekts aufgelistet sind, herunterladen).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - Verwenden Sie in der Windows CMD-Eingabeaufforderung diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie in Windows PowerShell diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie die Windows CMD-Eingabeaufforderung verwenden).

   - Unter macOS oder Linux verwenden Sie diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für Standard Express App Generator Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionsfähige Express-Anwendung, die über Port 3000 aufgerufen werden kann.

> [!NOTE]
> Sie könnten die App auch einfach mit dem Befehl `npm start` starten. Die Angabe der DEBUG-Variable wie gezeigt ermöglicht das Konsolen-Logging/Debuggen. Zum Beispiel, wenn Sie die obige Seite besuchen, sehen Sie Debug-Ausgaben wie diese:
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

## Aktivieren von Server-Neustart bei Dateiänderungen

Änderungen, die Sie an Ihrer Express-Website vornehmen, sind momentan nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr lästig, den Server jedes Mal neu zu starten, wenn Sie eine Änderung vornehmen, daher lohnt es sich, die Zeit zu nehmen, um das Neustarten des Servers bei Bedarf zu automatisieren.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dieses wird normalerweise global (da es ein "Tool" ist) installiert, aber hier werden wir es lokal als _Entwickler-Abhängigkeit_ installieren und verwenden, so dass alle Entwickler, die mit dem Projekt arbeiten, es automatisch erhalten, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis für das Grundgerüstprojekt:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich trotzdem entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihre Maschine zu installieren und nicht nur in Ihre **package.json** Datei des Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json** Datei des Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile aus starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es von einem npm-Skript aus aufrufen, da npm alle installierten Pakete kennt. Finden Sie den `scripts` Abschnitt Ihrer package.json. Zunächst wird es eine Zeile enthalten, die mit `"start"` beginnt. Aktualisieren Sie es, indem Sie ein Komma am Ende dieser Zeile hinzufügen und die `"devstart"` und `"serverstart"` Zeilen hinzufügen:

- Unter Linux und macOS sieht der Skriptbereich so aus:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Unter Windows würde der „serverstart“-Wert stattdessen so aussehen (wenn die Eingabeaufforderung verwendet wird):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können den Server nun fast genau so starten wie zuvor, aber mit dem `devstart` Befehl.

> [!NOTE]
> Jetzt wird der Server neu gestartet, wenn Sie irgendwelche Dateien im Projekt bearbeiten (oder Sie können ihn neu starten, indem Sie `rs` jederzeit in die Eingabeaufforderung eingeben). Sie müssen immer noch den Browser neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` aufrufen, anstatt nur `npm start`, da "start" tatsächlich ein npm-Befehl ist, der zum benannten Skript abgebildet ist. Wir hätten den Befehl im _start_ Skript ersetzen können, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, daher macht es Sinn, ein neues Skriptbefehl zu erstellen.
>
> Der `serverstart`-Befehl, der in den Skripten in der **package.json** oben hinzugefügt wurde, ist ein sehr gutes Beispiel. Durch dieses Vorgehen müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der speziell dem Skript hinzugefügte Befehl nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Schauen wir uns nun das Projekt an, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt, jetzt wo Sie die Abhängigkeiten installiert haben, hat die folgende Dateistruktur (Dateien sind die Elemente, die **nicht** mit "/ " angegeben sind).
Die **package.json** Datei definiert die Anwendungsabhängigkeiten und andere Informationen.
Sie definiert auch ein Startskript, das den Anwendung-Einstiegspunkt, die JavaScript-Datei **/bin/www** aufrufen wird.
Diese stellt einige der Anwendungsfehlerbehandlungen ein und lädt dann **app.js**, um den Rest der Arbeit zu erledigen.
Die App-Routen werden in separaten Modulen im **routes/** Verzeichnis gespeichert.
Die Templates werden im **/views** Verzeichnis gespeichert.

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

Die folgenden Abschnitte beschreiben die Dateien etwas detaillierter.

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

Der Skriptabschnitt definiert zuerst ein "_start_" Skript, das wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (dieses Skript wurde durch den _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dadurch tatsächlich die JavaScript-Datei **./bin/www** mit _node_ gestartet wird.

Wir haben diesen Abschnitt bereits in [Aktivieren von Server-Neustart bei Dateiänderungen](#aktivieren_von_server-neustart_bei_dateiänderungen) durch Hinzufügen der _devstart_ und _serverstart_ Skripte modifiziert.
Diese können verwendet werden, um dieselbe **./bin/www** Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben beschrieben).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das _express_-Paket und das Paket für unsere gewählte Ansichts-Engine (_pug_).
Zusätzlich haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu analysieren und `req.cookies` zu bevölkern (im Wesentlichen stellt es eine bequeme Methode zum Zugriff auf Cookie-Informationen bereit).
- [debug](https://www.npmjs.com/package/debug): Ein winziges Node-Debugging-Utility, das nach dem Debugging-Verfahren des Node-Core-Moduls modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Request-Logger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellt bei Bedarf HTTP-Fehler (für die Fehlerbehandlung in Express).

Die Standardversionen im generierten Projekt sind etwas veraltet.
Ersetzen Sie den Abhängigkeitsabschnitt Ihrer `package.json` Datei mit folgendem Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens angibt:

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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch im Rahmen eines kontinuierlichen Integrationssetups erfolgen.
>
> In der Regel bleiben Bibliotheksupdates auf die Minor- und Patch-Version kompatibel.
> Wir haben oben das Präfix `^` für jede Version hinzugefügt, damit wir automatisch auf die neueste `minor.patch` Version aktualisieren können, indem wir:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität.
> Für diese Updates müssen wir die `package.json` manuell aktualisieren und den Code, der die Bibliothek verwendet, und das Projekt ausführlich neu testen.

### www Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das allererste, was sie tut, ist `require()` den "wirklichen" Anwendung-Einstiegspunkt (**app.js**, im Projektstamm) aufzurufen, der das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt.
`require()` ist die [CommonJS Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier geben wir das Modul **app.js** mit einem relativen Pfad an und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützt ES6 `import` Anweisungen zum Importieren von JavaScript (ECMAScript) Modulen.
> Um diese Funktion zu verwenden, müssen Sie `"type": "module",` zu Ihrer Express **package.json** Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einschließen (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl es Vorteile beim Verwenden von `import` gibt, verwendet dieses Tutorial `require()`, um mit [der Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der Rest des Codes in dieser Datei richtet einen Node HTTP-Server mit `app` ein, der auf einen bestimmten Port (definiert in einer Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist), und beginnt, Serverfehler und Verbindungen zu überwachen und zu melden. Vorerst müssen Sie über den Code nicht mehr wissen (alles in dieser Datei ist "Standardmaß"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (mit dem Namen `app`, nach Konvention), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der folgende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der oben genannten **www** Einstiegsdatei ist es dieses `module.exports` Objekt, das dem Anrufer zur Verfügung gestellt wird, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js** Datei im Detail durchgehen. Zunächst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben; und _path_, das eine Kern-Bibliothek von Node ist, um Datei- und Verzeichnispfade zu analysieren.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code, der eine bestimmte Menge verwandter "Routen" (URL-Pfade) behandelt. Wenn wir die Grundstruktur der Anwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, um sich mit buchbezogenen Routen zu befassen.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich verwendet (dies geschieht etwas weiter unten in der Datei).

Als nächstes erstellen wir das `app` Objekt mit unserem importierten _express_ Modul und verwenden es, um die Ansicht (Template) Engine einzurichten. Es gibt zwei Teile zur Einrichtung der Engine. Erstens setzen wir den `"views"` Wert, um den Ordner anzugeben, in dem die Templates gespeichert werden (in diesem Fall das Unterverzeichnis **/views**). Dann setzen wir den `"view engine"` Wert, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die _Middleware_-Bibliotheken, die wir oben importiert haben, in die Anfrageverarbeitungskette einzufügen.
Zum Beispiel werden `express.json()` und `express.urlencoded()` benötigt, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu befüllen.
Nach diesen Bibliotheken verwenden wir auch die `express.static` Middleware, die _Express_ dazu bringt, alle statischen Dateien im **/public** Verzeichnis im Projektstamm zu servieren.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Jetzt, da alle anderen Middleware eingerichtet sind, fügen wir unseren (zuvor importierten) Routenverarbeitungscode in die Anfrageverarbeitungskette ein. Der importierte Code wird bestimmte Routen für die unterschiedlichen _Teile_ der Website definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix zu den in den importierten Dateien definierten Routen behandelt.
> Wenn zum Beispiel das importierte **users** Modul eine Route für `/profile` definiert, würden Sie auf diese Route über `/users/profile` zugreifen. Wir werden später ausführlicher über Routen sprechen.

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

Das Express Anwendungsobjekt (app) ist jetzt vollständig konfiguriert. Der letzte Schritt besteht darin, es den Modulexporten hinzuzufügen (dies ist, was es erlaubt, durch **/bin/www** importiert zu werden).

```js
module.exports = app;
```

### Routen

Die Routen-Datei **/routes/users.js** ist unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen).
Zuerst lädt sie das _express_ Modul und verwendet es, um ein `express.Router` Objekt zu erhalten.
Dann gibt sie eine Route auf diesem Objekt an und exportiert zuletzt den Router aus dem Modul (dies ist, was es erlaubt, die Datei in **app.js** zu importieren).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Callback, der aufgerufen wird, wenn eine HTTP `GET` Anfrage mit dem passenden Muster erkannt wird. Das passende Muster ist die Route, die beim Import des Moduls angegeben wurde (`"/users"`) plus das, was in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit node ausführen und die URL in Ihrem Browser aufrufen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Ein interessantes Detail oben ist, dass die Callback-Funktion das dritte Argument `next` hat und daher eine Middleware-Funktion anstelle eines einfachen Routen-Callbacks ist. Obwohl der Code derzeit das `next`-Argument nicht verwendet, könnte es in Zukunft nützlich sein, wenn Sie mehrere Routen-Handler zur `'/'` Routen-Pfad hinzufügen möchten.

### Ansichten (Templates)

Die Ansichten (Templates) sind im **/views** Verzeichnis (wie in **app.js** angegeben) gespeichert und erhalten die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein angegebenes Template zusammen mit den Werten der benannten Variablen zu rendern, die in einem Objekt übergeben werden, und dann das Ergebnis als Antwort zu senden. Im Code unten aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort mithilfe des Templates "index" rendert und die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die oben genannte Route wird unten gezeigt (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo sie im Template angegeben ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" an der URL `/users/cool/` anzeigen wird. Testen Sie dies, indem Sie den Server ausführen und in Ihrem Browser `http://localhost:3000/users/cool/` besuchen.

## Zusammenfassung

Sie haben nun ein Grundgerüst für ein Website-Projekt für die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes werden wir das Grundgerüst so modifizieren, dass es als Bibliotheks-Website funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
