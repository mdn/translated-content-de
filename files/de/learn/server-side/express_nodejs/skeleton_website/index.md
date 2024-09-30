---
title: "Express-Tutorial Teil 2: Erstellen einer Skelett-Website"
slug: Learn/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express-Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit seitenbezogenen Routen, Vorlagen/Ansichten und Datenbankaufrufen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Express_Nodejs/development_environment">Einrichten einer Node-Entwicklungsumgebung</a>.
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

## Übersicht

Dieser Artikel zeigt, wie Sie mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html) Tool eine "Skelett"-Website erstellen können, die Sie dann mit seitenbezogenen Routen, Ansichten/ Templates und Datenbankaufrufen ausstatten können. In diesem Fall nutzen wir das Tool, um das Gerüst für unsere [Local Library-Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu der wir später den ganzen weiteren benötigten Code hinzufügen werden. Der Prozess ist extrem einfach und erfordert lediglich, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen, wobei Sie optional auch die Template-Engine und den CSS-Generator der Seite angeben können.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Application Generator aufrufen und erklären ein wenig die verschiedenen View/CSS-Optionen. Wir erklären auch, wie die Skelett-Website strukturiert ist. Zum Schluss zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, dass sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige praktikable Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Seite hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Für Informationen über eine _minimale_ Express-Anwendung siehe [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten davon in diesem Tutorial in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) geändert, da wir moderne JavaScript-Praktiken demonstrieren wollen.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die im **package.json** erstellt vom _Express Application Generator_ definiert sind.
>   Diese sind nicht (notwendigerweise) die neueste Version, und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine echte Anwendung in der Produktion bereitstellen.

## Verwendung des Anwendungsgenerators

Sie sollten den Generator bereits als Teil des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung: Sie installieren das Generator-Tool mit dem npm-Paketmanager weltweit, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat eine Reihe von Optionen, die Sie in der Befehlszeile mit dem Befehl `--help` (oder `-h`) anzeigen können:

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

Sie können express angeben, um ein Projekt im _aktuellen_ Verzeichnis mithilfe der _Jade_ View-Engine und einfachem CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View (Template)-Engine mit `--view` und/oder eine CSS-Generierungsengine mit `--css` auswählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z. B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe von beliebten View/Template-Engines zu konfigurieren, einschließlich [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl es standardmäßig Jade auswählt, wenn Sie keine View-Option angeben. Express selbst kann auch eine große Anzahl anderer Template-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, siehe [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Ziel-View-Engine.

Im Allgemeinen sollten Sie eine Template-Engine auswählen, die alle benötigten Funktionen bietet und Ihnen ermöglicht, schneller produktiv zu sein — oder in anderen Worten, auf die gleiche Weise, wie Sie jede andere Komponente auswählen! Einige Abwägungen bei der Bewertung von Template-Engines:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Template-Sprache hat, ist es wahrscheinlich, dass es mit dieser Sprache schneller produktiv wird. Wenn nicht, sollten Sie die relative Lernkurve der Kandidaten-Template-Engines berücksichtigen.
- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu bekommen, wenn während der Lebensdauer der Website Probleme auftreten.
- Stil — Einige Template-Engines verwenden spezifische Markup, um eingefügten Inhalt innerhalb von "gewöhnlichem" HTML anzugeben, während andere das HTML mit einer anderen Syntax konstruieren (beispielsweise durch Verwendung von Einrückungen und Blocknamen).
- Leistung/Renderzeit.
- Funktionen — Sie sollten erwägen, ob die Engines, die Sie betrachten, über die folgenden Funktionen verfügen:

  - Layout-Vererbung: Ermöglicht es Ihnen, eine Basistemplate zu definieren und dann nur die Teile davon "zu erben", die Sie für eine bestimmte Seite anders haben möchten. Dies ist in der Regel ein besserer Ansatz als Templates zu erstellen, indem eine Reihe erforderlicher Komponenten eingefügt oder jedes Mal ein Template von Grund auf erstellt wird.
  - "Include"-Funktion: Ermöglicht es Ihnen, Templates durch das Einbeziehen anderer Templates zu erstellen.
  - Prägnante Variable- und Kontrollstruktursyntax.
  - Fähigkeit zur Filterung von Variable-Werten auf der Template-Ebene, z.B. Variablen in Großbuchstaben zu setzen oder ein Datumswert zu formatieren.
  - Fähigkeit zur Generierung von Ausgabedateiformaten außer HTML, z.B. JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Template-Engine auf dem Client verwendet werden kann, ist es möglich, dass alle oder die meisten Renderings auf der Client-Seite durchgeführt werden.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen helfen, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html) Template-Engine verwenden (dies ist die kürzlich umbenannte Jade-Engine), da sie eine der beliebtesten Express/JavaScript-Template-Sprachen ist und vom Generator von Haus aus unterstützt wird.

### Welche CSS Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das zur Verwendung der gängigsten CSS Stylesheet-Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS Stylesheet-Engines ermöglichen es Ihnen, leistungsfähigere Syntax für die Definition Ihres CSS zu verwenden und dann die Definition in "altmodisches" CSS zu kompilieren, das von Browsern verwendet werden kann.

Wie bei Template-Engines sollten Sie die Stylesheet-Engine verwenden, die es Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt werden wir Vanilla-CSS (das Standardformat) verwenden, da unsere CSS-Anforderungen nicht ausreichend kompliziert sind, um etwas anderes zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_-Apps können jede [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel darauf eingehen, wie man mit einer Datenbank integriert.

## Erstellen des Projekts

Für die Beispiel-_Local Library_-App, die wir erstellen wollen, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ unter Verwendung der _Pug_ Template-Bibliothek und keiner CSS-Engine.

Zuerst navigieren Sie zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ in der Eingabeaufforderung aus, wie gezeigt:

```bash
express express-locallibrary-tutorial --view=pug
```

Der Generator wird die Projektdateien erstellen (und auflisten).

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

Am Ende der Ausgabe gibt der Generator Anweisungen dazu, wie die Abhängigkeiten (wie in der **package.json** Datei aufgelistet) installiert und die Anwendung auf verschiedenen Betriebssystemen ausgeführt werden kann.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Ausführen der Skelett-Website

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website tut eigentlich noch nicht wirklich viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl wird alle im Projekt angegebenen Abhängigkeitspakete aus der **package.json** Datei abrufen).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - Auf der Windows CMD-Eingabeaufforderung verwenden Sie diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Auf Windows Powershell verwenden Sie diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > Powershell-Befehle werden in diesem Tutorial nicht behandelt (Die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie die Windows CMD-Eingabeaufforderung verwenden.)

   - Auf macOS oder Linux verwenden Sie diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für die Standard-Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch einfach mit dem `npm start`-Befehl starten. Durch Angabe der DEBUG-Variable wie gezeigt, wird das Konsolen-Logging/Debugin aktiviert. Zum Beispiel, wenn Sie die obige Seite besuchen, werden Sie Debug-Ausgaben wie diese sehen:
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

## SERVER-NEUSTART BEI DATEIÄNDERUNGEN AKTIVIEREN

Alle Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit erst sichtbar, wenn Sie den Server neu starten. Es wird schnell sehr mühsam, den Server bei jeder Änderung stoppen und neu starten zu müssen. Daher lohnt es sich, die Zeit zu investieren, um den Server neustarten zu lassen, wenn dies nötig ist.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es ein "Tool" ist), aber hier werden wir es lokal als _Entwicklungsabhängigkeit_ installieren und verwenden, damit alle Entwickler, die mit dem Projekt arbeiten, es automatisch bekommen, wenn sie die Anwendung installieren. Nutzen Sie den folgenden Befehl im Stammverzeichnis des Skeletts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich dennoch entscheiden, [nodemon](https://github.com/remy/nodemon) global für Ihre Maschine zu installieren und nicht nur für die **package.json** Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json** Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht aus der Befehlszeile starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es von einem npm-Skript aufrufen, weil npm alle installierten Pakete kennt. Finden Sie den `scripts`-Abschnitt Ihrer package.json. Anfangs wird er nur eine Zeile enthalten, die mit `"start"` beginnt. Aktualisieren Sie ihn, indem Sie ein Komma am Ende dieser Zeile setzen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Unter Linux und macOS sieht der Scripts-Abschnitt so aus:

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

Wir können jetzt den Server fast genau auf die gleiche Weise wie zuvor starten, aber mit dem `devstart`-Befehl.

> [!NOTE]
> Wenn Sie jetzt eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit neustarten, indem Sie `rs` in der Eingabeaufforderung eingeben). Sie müssen trotzdem den Browser neu laden, um die Seite zu aktualisieren.
>
> Jetzt müssen wir `npm run <scriptname>` statt einfach `npm start` aufrufen, weil "start" eigentlich ein npm-Befehl ist, der dem benannten Skript zugeordnet ist. Wir könnten den Befehl im _start_-Skript ersetzen, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, daher macht es Sinn, einen neuen Skriptbefehl zu erstellen.
>
> Der `serverstart`-Befehl, der den Scripts in der obigen **package.json** hinzugefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der hinzugefügte Befehlt in das Skript nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Werfen wir nun einen Blick auf das Projekt, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt, nachdem Sie die Abhängigkeiten installiert haben, hat die folgende Dateistruktur (Dateien sind die Elemente **nicht** mit "/"). Die **package.json** Datei definiert die Anwendungsabhängigkeiten und andere Informationen. Sie definiert auch ein Startskript, das den Anwendungseinstiegspunkt, die JavaScript-Datei **/bin/www**, aufrufen wird. Dies setzt einige der Anwendungsfehlerbehandlung auf und lädt dann **app.js** um den Rest der Arbeit zu erledigen. Die Approuten sind in separaten Modulen unter dem **routes/** Verzeichnis gespeichert. Die Templates sind im **/views** Verzeichnis gespeichert.

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

Der Scripts-Abschnitt definiert zuerst ein "_start_" Skript, das wir aufrufen, wenn wir den Server mit `npm start` starten (dieses Skript wurde durch den _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Server-Neustart bei Dateiänderungen aktivieren](#server-neustart_bei_dateiänderungen_aktivieren) geändert, indem wir die _devstart_ und _serverstart_ Skripte hinzugefügt haben. Diese können verwendet werden, um die gleiche **./bin/www** Datei mit _nodemon_ statt _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten enthalten das _express_ Paket und das Paket für unsere ausgewählte View-Engine (_pug_). Außerdem haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu parsen und `req.cookies` zu füllen (bietet im Wesentlichen eine bequeme Methode, um auf Cookie-Informationen zuzugreifen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Tool, modelliert nach der Debugging-Technik des Node-Kerns.
- [morgan](https://www.npmjs.com/package/morgan): Eine HTTP-Request-Logger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie bei Bedarf HTTP-Fehler (für die Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet. Ersetzen Sie den Abhängigkeitsabschnitt Ihrer `package.json` Datei mit dem folgenden Text, welcher die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens spezifiziert:

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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch im Rahmen einer kontinuierlichen Integrationsumgebung erfolgen.
>
> Normalerweise bleiben Bibliotheksupdates auf die Minor- und Patch-Versionen kompatibel. Wir haben jede Version mit `^` oben versehen, damit wir durch Ausführen des folgenden Befehls automatisch auf die neueste `minor.patch` Version aktualisieren können:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität. Für diese Updates müssen wir das `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfangreich neu testen.

### www Datei

Die Datei **/bin/www** ist der Anwendungseinstiegspunkt! Das allererste, was dies tut, ist `require()` des "echten" Anwendungseinstiegspunkts (**app.js**, im Projektroot), der das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt. `require()` ist die [CommonJS Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren. Hier geben wir das **app.js** Modul mit einem relativen Pfad an und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import` Anweisungen, um JavaScript (ECMAScript) Module zu importieren. Um diese Funktion zu verwenden, müssen Sie `"type": "module",` zu Ihrer Express **package.json** Datei hinzufügen und alle Module in Ihrer Anwendung müssen `import` statt `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einschließen (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)). Während es Vorteile bei der Verwendung von `import` gibt, verwendet dieses Tutorial `require()`, um mit der [Dokumentation von Express](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der restliche Code in dieser Datei richtet einen Node HTTP-Server mit `app` ein, der auf einen spezifischen Port (definiert in einer Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist) eingestellt ist, und beginnt zu lauschen und Serverfehler und Verbindungen zu melden. Vorerst müssen Sie nichts anderes über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (konventionell `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der unten stehende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der **www** Einstiegspunkt-Datei oben ist es dieses `module.exports` Objekt, das an den Aufrufer geliefert wird, wenn diese Datei importiert wird.

Arbeiten wir die **app.js** Datei im Detail durch. Zuerst importieren wir einige nützliche Node-Bibliotheken mit `require()` in die Datei, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben, und _path_, das eine Kernbibliothek von Node für das Parsen von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routes-Verzeichnis. Diese Module/Dateien enthalten Code zum Umgang mit bestimmten Sätzen verwandter "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, die sich mit buchbezogenen Routen befasst.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir lediglich das Modul _importiert_; wir haben seine Routen noch nicht tatsächlich verwendet (das passiert ein wenig weiter unten in der Datei).

Als nächstes erstellen wir das `app` Objekt mithilfe unseres importierten _express_ Moduls und verwenden es dann, um die View (Template) Engine einzurichten. Es gibt zwei Teile bei der Einrichtung der Engine. Zuerst setzen wir den `"views"` Wert, um den Ordner anzugeben, in dem die Templates gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"` Wert, um die Template-Bibliothek anzugeben (in diesem Fall "Pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die oben importierten _Middleware_-Bibliotheken in die Anfragenbearbeitungskette einzufügen. Zum Beispiel werden `express.json()` und `express.urlencoded()` benötigt, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen. Nach diesen Bibliotheken verwenden wir auch die `express.static` Middleware, die _Express_ dazu bringt, alle statischen Dateien im **/public** Verzeichnis im Projektroot zu bedienen.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nachdem alle anderen Middleware konfiguriert sind, fügen wir unseren (zuvor importierten) Routenbehandlungscode in die Anfragenbearbeitungskette ein. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Seite definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebene Pfade (`"/"` und `"/users"`) werden als Präfix für Routen behandelt, die in den importierten Dateien definiert sind. Wenn also das importierte **users** Modul eine Route für `/profile` definiert, würden Sie diese Route unter `/users/profile` aufrufen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

Die letzte Middleware in der Datei fügt Handlerfunktionen für Fehler und HTTP 404-Antworten hinzu.

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

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Der letzte Schritt besteht darin, es zu den Modulexporten hinzuzufügen (das ist es, was es ermöglicht, dass es von **/bin/www** importiert wird).

```js
module.exports = app;
```

### Routen

Die Routen-Datei **/routes/users.js** ist unten gezeigt (Routendateien haben eine ähnliche Struktur, also müssen wir nicht auch **index.js** zeigen). Zuerst lädt sie das _express_ Modul und verwendet es, um ein `express.Router` Objekt zu erhalten. Dann spezifiziert sie eine Route auf diesem Objekt und exportiert schließlich den Router aus dem Modul (das ist es, was es der Datei erlaubt, in **app.js** importiert zu werden).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Callback, der aufgerufen wird, wann immer eine HTTP-`GET`-Anfrage mit dem richtigen Muster erkannt wird. Das übereinstimmende Muster ist die Route, die beim Importieren des Moduls angegeben wurde (`"/users"`) plus was auch immer in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit Node ausführen und die URL in Ihrem Browser aufrufen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Ein interessantes Detail oben ist, dass die Callback-Funktion das dritte Argument `next` hat und daher eine Middleware-Funktion statt einem einfachen Routen-Callback ist. Während der Code das `next`-Argument derzeit nicht verwendet, könnte es in Zukunft nützlich sein, wenn Sie mehrere Routenhandler zum `'/'`-Routenpfad hinzufügen möchten.

### Ansichten (Templates)

Die Ansichten (Templates) sind im **/views** Verzeichnis (wie in **app.js** angegeben) gespeichert und haben die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein bestimmtes Template zusammen mit den Werten der in einem Objekt übergebenen benannten Variablen zu rendern und dann das Ergebnis als Antwort zu senden. Im folgenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort rendert, indem das Template "index" mit der Template-Variable "title" übergeben wird.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die obige Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit Wert `'Express'`) an der angegebenen Stelle im Template eingefügt ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" bei der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben jetzt ein Skelett-Website-Projekt für die [Local Library](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und verifiziert, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes werden wir das Skelett anpassen, sodass es als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
