---
title: "Express-Tutorial Teil 2: Erstellen einer Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit sitespezifischen Routen, Templates/Ansichten und Datenbankaufrufen befüllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Einrichten einer Node-Entwicklungsumgebung</a>. Überprüfen Sie das Express-Tutorial.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, Ihre eigenen neuen Website-Projekte mit Hilfe des <em>Express Application Generator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie mit dem Tool [Express Application Generator](https://expressjs.com/en/starter/generator.html) eine "Skelett"-Website erstellen können, die Sie anschließend mit sitespezifischen Routen, Ansichten/Templates und Datenbankaufrufen befüllen können. In diesem Fall verwenden wir das Tool, um das Grundgerüst für unsere [Lokale Bibliotheks-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu dem wir später den gesamten notwendigen Code hinzufügen werden. Der Prozess ist extrem einfach und erfordert nur, dass Sie den Generator in der Kommandozeile mit einem neuen Projektnamen aufrufen, wobei Sie optional auch die Template-Engine und den CSS-Generator der Site angeben können.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Anwendungsgenerator aufrufen und geben eine kleine Erklärung zu den verschiedenen Ansichts-/CSS-Optionen. Wir erklären auch, wie die Skelett-Website strukturiert ist. Am Ende werden wir zeigen, wie Sie die Website starten können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige praktikable Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Site hat jedoch eine modulare Struktur, die einfach zu erweitern und zu verstehen ist. Für Informationen über eine _minimale_ Express-Anwendung, siehe [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumente).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`. Wir haben die meisten davon in diesem Tutorial in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) geändert, weil wir moderne JavaScript-Praxis demonstrieren wollen.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der **package.json** erstellt vom _Express Application Generator_ definiert sind. Diese sind nicht (notwendigerweise) die neueste Version, und Sie sollten sie aktualisieren, wenn Sie eine echte Anwendung in der Produktion bereitstellen.

## Verwenden des Anwendungsgenerators

Sie sollten den Generator bereits als Teil des Einrichtens einer [Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung, installieren Sie das Generator-Tool siteweit mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat eine Reihe von Optionen, die Sie in der Kommandozeile mit dem Befehl `--help` (oder `-h`) anzeigen können:

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

Sie können express anweisen, ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_-Ansichts-Engine und plain CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine Ansichts- (Template-) Engine mit `--view` und/oder eine CSS-Generierungs-Engine mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` usw.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche Ansichts-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht Ihnen die Konfiguration einer Reihe beliebter Ansichts-/Template-Engines, einschließlich [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade wählt, wenn Sie keine View-Option angeben. Express kann selbst eine große Anzahl anderer Template-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, informieren Sie sich unter [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumente) und der Dokumentation Ihrer Ziel-View-Engine.

Allgemein gesprochen sollten Sie eine Template-Engine auswählen, die alle für Sie notwendigen Funktionen bietet und Ihnen erlaubt, produktiv zu sein — oder in anderen Worten, auf die gleiche Weise, wie Sie jeden anderen Bestandteil auswählen! Einige Dinge, die Sie beim Vergleich von Template-Engines in Betracht ziehen sollten:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Template-Sprache hat, ist es wahrscheinlich, dass es mit dieser Sprache schneller produktiv sein wird. Falls nicht, sollten Sie die relative Lernkurve für die Kandidaten-Template-Engines berücksichtigen.
- Beliebtheit und Aktivität — Überprüfen Sie die Beliebtheit der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu erhalten, wenn während der Lebensdauer der Website Probleme auftreten.
- Stil — Einige Template-Engines verwenden spezielle Markup, um eingebettete Inhalte innerhalb von "gewöhnlichem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel unter Verwendung von Einrückungen und Blocknamen).
- Leistung/Rendering-Zeit.
- Funktionen — Sie sollten überlegen, ob die von Ihnen betrachteten Engines die folgenden Funktionen bieten:

  - Layout-Vererbung: Ermöglicht Ihnen die Definition einer Basisschablone und dann die "Vererbung" der Teile, die Sie für eine bestimmte Seite unterschiedlich gestalten möchten. Dies ist in der Regel ein besserer Ansatz als das Erstellen von Templates durch Einbeziehen einer Reihe erforderlicher Komponenten oder das vollständige Neuerstellen einer Vorlage bei jedem Mal.
  - "Include"-Unterstützung: Ermöglicht Ihnen den Aufbau von Templates durch Einbeziehung anderer Schablonen.
  - Prägnante Zeichen- und Schleifensyntax.
  - Fähigkeit, Variablenwerte auf Template-Ebene zu filtern, wie z.B. Umwandlung von Variablen in Großbuchstaben oder Formatierung eines Datumswertes.
  - Fähigkeit, Ausgabeformate zu generieren, die nicht HTML sind, wie JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Template-Engine auf dem Client verwendet werden kann, besteht die Möglichkeit, das gesamte oder die meiste Rendering auf der Clientseite auszuführen.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen dabei helfen können, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt verwenden wir die [Pug](https://pugjs.org/api/getting-started.html) Template-Engine (dies ist die kürzlich umbenannte Jade-Engine), da sie eine der beliebtesten Express/JavaScript-Template-Sprachen ist und vom Generator standardmäßig unterstützt wird.

### Welche CSS-Stilblatt-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das für die Verwendung der gängigsten CSS-Stilblatt-Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben erschweren. Mit CSS-Stilblatt-Engines können Sie eine leistungsfähigere Syntax zur Definition Ihres CSS verwenden und die Definition dann in normales CSS für Browser kompilieren.

Wie bei den Template-Engines sollten Sie die Stilblatt-Engine verwenden, die Ihrem Team es ermöglicht, am produktivsten zu sein. Für dieses Projekt werden wir Vanilla-CSS (standardmäßig) verwenden, da unsere CSS-Anforderungen nicht komplex genug sind, um die Verwendung von etwas anderem zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/umfasst keine Datenbanken. _Express_-Apps können jede [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel darüber sprechen, wie man eine Datenbank integriert.

## Das Projekt erstellen

Für die Beispiel-App _Local Library_, die wir erstellen werden, erstellen wir ein Projekt mit dem Namen _express-locallibrary-tutorial_ unter Verwendung der _Pug_-Template-Bibliothek und keiner CSS-Engine.

Navigieren Sie zuerst zu dem Ort, an dem Sie das Projekt erstellen möchten und führen Sie dann den _Express Application Generator_ im Befehlsfenster aus, wie gezeigt:

```bash
express express-locallibrary-tutorial --view=pug
```

Der Generator erstellt (und listet) die Dateien des Projekts.

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie man die Abhängigkeiten (wie in der **package.json**-Datei aufgelistet) installiert und wie man die Anwendung auf verschiedenen Betriebssystemen ausführt.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`. Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (das restliche Tutorial geht davon aus, dass Sie dies getan haben).

## Die Skelett-Website ausführen

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website macht eigentlich noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (das `install`-Kommando holt alle in der **package.json**-Datei des Projekts aufgelisteten Abhängigkeitspakete).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Starten Sie dann die Anwendung.

   - Auf dem Windows CMD-Prompt verwenden Sie diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Auf Windows PowerShell verwenden Sie diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (Die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie die Windows CMD-Eingabeaufforderung verwenden.)

   - Auf macOS oder Linux verwenden Sie diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser for default Express app generator website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch einfach mit dem Befehl `npm start` starten. Das Festlegen der DEBUG-Variablen wie gezeigt aktiviert die Konsolenprotokollierung/-fehlerbehebung. Zum Beispiel, wenn Sie die obige Seite besuchen, sehen Sie Debug-Ausgabe wie diese:
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

## Server-Neustart bei Dateiänderungen aktivieren

Jede Änderung, die Sie an Ihrer Express-Website vornehmen, ist derzeit nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr ärgerlich, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen, daher lohnt es sich, Zeit zu investieren, um den Neustart des Servers bei Bedarf zu automatisieren.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es sich um ein „Werkzeug“ handelt), aber hier installieren und verwenden wir es lokal als _Entwicklerabhängigkeit_, damit alle Entwickler, die an dem Projekt arbeiten, es automatisch installieren, wenn sie die Anwendung installieren. Nutzen Sie den folgenden Befehl im Stammverzeichnis des Skelettprojekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich dennoch entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrer Maschine zu installieren und nicht nur in die **package.json**-Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht direkt aus der Kommandozeile starten (es sei denn, wir fügen es zum Pfad hinzu), aber wir können es von einem npm-Script aus aufrufen, weil npm alle installierten Pakete kennt. Finden Sie den `scripts`-Abschnitt Ihrer package.json. Zu Beginn wird es nur eine Zeile enthalten, die mit `"start"` beginnt. Aktualisieren Sie sie, indem Sie am Ende dieser Zeile ein Komma setzen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Unter Linux und macOS sieht der Script-Abschnitt so aus:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Unter Windows würde der "serverstart"-Wert stattdessen so aussehen (wenn Sie die Eingabeaufforderung verwenden):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können jetzt den Server fast genau wie zuvor starten, aber mit dem `devstart`-Befehl.

> [!NOTE]
> Jetzt, wenn Sie eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn neu starten, indem Sie `rs` in die Eingabeaufforderung eingeben). Sie müssen den Browser jedoch noch neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` aufrufen, weil „start“ tatsächlich ein npm-Befehl ist, der dem benannten Script zugeordnet ist. Wir hätten den Befehl im _start_-Script ersetzten können, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, daher macht es Sinn, ein neues Script-Kommando zu erstellen.
>
> Der `serverstart`-Befehl, der oben in die Scripts in der **package.json** eingefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie nicht mehr einen langen Befehl eingeben, um den Server zu starten. Beachten Sie, dass der hinzugefügte Befehl für macOS oder Linux funktioniert.

## Das generierte Projekt

Schauen wir uns jetzt das Projekt an, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt hat, jetzt da Sie die Abhängigkeiten installiert haben, die folgende Dateistruktur (Dateien sind die Elemente, die **nicht** mit "/" vorangestellt sind). Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und andere Informationen. Sie definiert auch ein Startscript, das den Einstiegspunkt der Anwendung aufruft, die JavaScript-Datei **/bin/www**. Diese richtet einige der Anwendungsfehlerroutinen ein und lädt dann **app.js**, um den Rest der Arbeit zu erledigen. Die App-Routen sind in separaten Modulen im **routes/**-Verzeichnis gespeichert. Die Templates sind im **/views**-Verzeichnis gespeichert.

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

Die folgenden Abschnitte beschreiben die Dateien etwas ausführlicher.

### package.json

Die **package.json**-Datei definiert die Abhängigkeiten der Anwendung und andere Informationen:

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

Der Script-Abschnitt definiert zunächst ein "_start_"-Script, das aufgerufen wird, wenn wir den Server mit `npm start` starten (dieses Script wurde vom _Express Application Generator_ hinzugefügt). Aus der Script-Definition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Diesen Abschnitt haben wir bereits in [Server-Neustart bei Dateiänderungen aktivieren](#server-neustart_bei_dateiänderungen_aktivieren) geändert, indem wir die Scripts _devstart_ und _serverstart_ hinzugefügt haben. Diese können verwendet werden, um dieselbe **./bin/www**-Datei mit _nodemon_ statt _node_ zu starten (diese Version der Scripts ist für Linux und macOS, wie oben erwähnt).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das _express_-Paket und das Paket für unsere ausgewählte View-Engine (_pug_). Darüber hinaus haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu parsen und `req.cookies` zu füllen (bietet im Wesentlichen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Tool, das nach dem Debugging-Verfahren des Node-Kerns modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Anforderungslogger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie bei Bedarf HTTP-Fehler (für die Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet. Ersetzen Sie den Abhängigkeitsabschnitt Ihrer `package.json`-Datei durch folgendem Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens angibt:

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

Dann aktualisieren Sie Ihre installierten Abhängigkeiten mit dem Befehl:

```bash
npm install
```

> [!NOTE]
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren – dies kann sogar automatisch oder halbautomatisch als Teil eines kontinuierlichen Integrationssetups erfolgen.
>
> Üblicherweise bleiben Bibliotheksupdates für die Minor- und Patch-Version kompatibel. Wir haben sie oben mit `^` vor jeder Version versehen, so dass wir sie automatisch auf die neueste `minor.patch`-Version mit dem Befehl aktualisieren können:
>
> ```bash
> npm update --save
> ```
>
> Die Hauptversionen ändern die Kompatibilität. Für diese Updates müssen wir `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt ausgiebig neu testen.

### www Datei

Die Datei **/bin/www** ist der Anwendungseinstiegspunkt! Das erste, was sie tut, ist, den "wirklichen" Anwendungseinstiegspunkt (**app.js**, im Projektstamm) hinzuzuziehen, der das [`express()`](https://expressjs.com/en/api.html) Applikationsobjekt einrichtet und zurückgibt. `require()` ist der [CommonJS-Weg](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren. Hier spezifizieren wir das **app.js** Modul mittels eines relativen Pfads und lassen die optionale (.**js**) Dateiendung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und höher unterstützen ES6 `import`-Anweisungen zum Importieren von JavaScript (ECMAScript)-Modulen. Um diese Funktion zu verwenden, müssen Sie `"type": "module",` zu Ihrer Express **package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` statt `require()` verwenden, und für _relative Importe_ müssen Sie die Dateiendung angeben (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)). Während es Vorteile bei der Verwendung von `import` gibt, verwendet dieses Tutorial `require()`, um der [Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) zu entsprechen.

Der Rest des Codes in dieser Datei setzt einen node HTTP-Server mit `app` auf einen spezifischen Port (bestimmt durch eine Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist), und startet das Abhören und Berichten von Serverfehlern und -verbindungen. Für jetzt brauchen Sie diesbezüglich nichts weiteres wissen (alles in dieser Datei ist "Standard"), aber fühlen Sie sich frei, es zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Applikationsobjekt (konventionell `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der unten stehende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der **www** Startdatei oben wird dieses `module.exports`-Objekt dem Aufrufer zur Verfügung gestellt, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js**-Datei im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben; und _path_, das eine zentrale Node-Bibliothek zum Analysieren von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem routes-Verzeichnis. Diese Module/Dateien enthalten Code zur Handhabung bestimmter Sets von verwandten "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, etwa um alle Bücher in der Bibliothek anzuzeigen, fügen wir eine neue Datei hinzu, um sich mit Buch-bezogenen Routen zu befassen.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul lediglich _importiert_; wir haben seine Routen noch nicht genutzt (dies passiert nur ein wenig weiter unten in der Datei).

Als nächstes erstellen wir das `app`-Objekt mit unserem importierten _express_-Modul und verwenden es zum Einrichten der Ansichts- (Template-) Engine. Es gibt zwei Teile zum Einrichten der Engine. Zuerst setzen wir den Wert `"views"` um anzugeben, in welchem Ordner die Templates gespeichert werden (in diesem Fall im Unterordner **/views**). Dann setzen wir den `"view engine"`-Wert, um die Template-Bibliothek festzulegen (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Das nächste Set von Funktionen ruft `app.use()` auf, um die eingangs importierten _Middleware_-Bibliotheken in die Anforderungshandlungskette einzufügen. Zum Beispiel sind `express.json()` und `express.urlencoded()` notwendig, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen. Nach diesen Bibliotheken verwenden wir auch die `express.static`-Middleware, die _Express_ alle statischen Dateien im **/public**-Verzeichnis im Projektstamm bereitstellt.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Jetzt, wo alle anderen Middleware eingerichtet sind, fügen wir unseren (vorher importierten) Routen-Verarbeitungscode in die Anforderungshandlungskette ein. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Site definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für die in den importierten Dateien definierten Routen behandelt. Wenn das importierte **users**-Modul eine Route für `/profile` definiert, würden Sie auf diese Route bei `/users/profile` zugreifen. Wir werden mehr über Routen in einem späteren Artikel sprechen.

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

Das Express-Applikationsobjekt (App) ist jetzt vollständig konfiguriert. Der letzte Schritt ist, es zu den Modulexports hinzuzufügen (dies ist, was ermöglicht, dass es von **/bin/www** importiert wird).

```js
module.exports = app;
```

### Routen

Die Routendatei **/routes/users.js** wird unten gezeigt (Routendateien haben eine ähnliche Struktur, sodass wir **index.js** nicht ebenfalls zeigen müssen). Zuerst lädt sie das _express_-Modul und verwendet es, um ein `express.Router`-Objekt zu erhalten. Dann spezifiziert es eine Route für dieses Objekt und letztlich exportiert es den Router aus dem Modul (dies ist, was die Datei ermöglicht, in **app.js** importiert zu werden).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert ein Callback, das aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit dem korrekten Muster entdeckt wird. Das übereinstimmende Muster ist die Route, die beim Importieren des Moduls angegeben wurde (`"/users"`) plus das, was in dieser Datei definiert ist (`"/"`). Anders gesagt, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit Node starten und die URL in Ihrem Browser aufrufen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Eine von Interesse oben ist, dass die Callback-Funktion das dritte Argument `next` hat, und ist daher eine Middleware-Funktion und kein einfacher Strecken-Callback. Während der Code das `next`-Argument derzeit nicht verwendet, kann es in der Zukunft nützlich sein, wenn Sie mehrere Streckenhandler zur `'/'` Streckenpfad hinzufügen möchten.

### Views (Templates)

Die Ansichten (Templates) werden im **/views**-Verzeichnis gespeichert (wie in **app.js** angegeben) und haben die Dateiendung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein bestimmtes Template zusammen mit den Werten der in einem Objekt übergebenen benannten Variablen zu rendern und das Ergebnis dann als Antwort zu senden. Im unten stehenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort rendern lässt, indem sie das Template "index" verwendet, das die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die obige Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie im Moment wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) an der im Template angegebenen Stelle eingefügt wird.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" unter der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server starten und `http://localhost:3000/users/cool/` in Ihrem Browser aufrufen

## Zusammenfassung

Sie haben nun ein Skelett-Website-Projekt für die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, so dass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes werden wir beginnen, das Skelett so zu ändern, dass es als Bibliotheks-Website funktioniert.

## Siehe auch

- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumente)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
