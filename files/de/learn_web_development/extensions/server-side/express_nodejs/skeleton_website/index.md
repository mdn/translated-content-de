---
title: "Express Tutorial Teil 2: Eine Skelett-Website erstellen"
short-title: "2: Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 8e3138000f0d4673cfa595830a5362b12e3c8180
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit spezifischen Routen, Vorlagen/Views und Datenbankaufrufen füllen können.

> [!WARNING]
> Das Express-Tutorial ist für Express Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

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
        In der Lage zu sein, eigene neue Website-Projekte mit dem <em>Express Application Generator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool eine "Skelett"-Website erstellen können, die Sie dann mit spezifischen Routen, Views/Templates und Datenbankaufrufen füllen können. In diesem Fall verwenden wir das Tool, um das Framework für unsere [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu der wir später den gesamten anderen benötigten Code hinzufügen. Der Prozess ist extrem einfach und erfordert nur, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen, wobei Sie optional auch die Template-Engine und den CSS-Generator der Website angeben können.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Anwendungsgenerator aufrufen und bieten eine kleine Erklärung zu den verschiedenen View/CSS-Optionen. Wir erklären auch, wie die Skelett-Website strukturiert ist. Schließlich zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige praktikable Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Seite hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Informationen über eine _minimal_ Express-Anwendung finden Sie im [Hallo-Welt-Beispiel](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten dieser zu [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige zu [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) im Tutorial geändert, weil wir moderne JavaScript-Praktiken demonstrieren wollen.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der durch den _Express Application Generator_ erstellten **package.json** definiert sind.
>   Diese sind nicht unbedingt die neueste Version und Sie sollten sie möglicherweise bei der Bereitstellung einer realen Anwendung auf die Produktion aktualisieren.

## Verwendung des Anwendungsgenerators

Sie sollten den Generator bereits als Teil des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung können Sie das Generator-Tool site-weit mit dem npm-Paketmanager installieren, wie gezeigt:

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

Sie können express angeben, um ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ View-Engine und einfacher CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View (Template) Engine mit `--view` und/oder eine CSS-Generierungsmethode mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe von beliebten View/Templating-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade auswählt, wenn Sie keine View-Option angeben. Express selbst kann auch eine große Anzahl anderer Templating-Sprachen [von Haus aus](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, sehen Sie sich [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Ziel-Template-Engine an.

Im Allgemeinen sollten Sie eine Templating-Engine auswählen, die alle nötigen Funktionen bietet und es Ihnen ermöglicht, schneller produktiv zu sein — oder mit anderen Worten, auf die gleiche Weise, wie Sie eine andere Komponente auswählen! Zu den Dingen, die Sie bei der Auswahl von Template-Engines berücksichtigen sollten, gehören:

- Zeit zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, ist es wahrscheinlich, dass sie mit dieser Sprache schneller produktiv werden. Falls nicht, sollten Sie die relative Lernkurve für die in Frage kommenden Templating-Engines in Betracht ziehen.
- Popularität und Aktivität — Überprüfen Sie die Beliebtheit der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu erhalten, wenn während der gesamten Lebensdauer der Website Probleme auftreten.
- Stil — Einige Template-Engines verwenden spezielles Markup, um eingefügten Inhalt innerhalb von "normalem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax erstellen (zum Beispiel unter Verwendung von Einrückungen und Blocknamen).
- Leistung/Renderzeit.
- Funktionen — Sie sollten überlegen, ob die Engines, die Sie betrachten, die folgenden Funktionen bieten:

  - Layoutvererbung: Ermöglicht Ihnen, eine Basistemplate zu definieren und dann nur die Teile davon "zu erben", die Sie für eine bestimmte Seite anders gestalten möchten. Dies ist in der Regel ein besserer Ansatz, als Templates durch die Einbeziehung einer Reihe von erforderlichen Komponenten aufzubauen oder jedes Mal ein Template von Grund auf neu zu erstellen.
  - "Include"-Unterstützung: Ermöglicht Ihnen, Templates durch Einfügen anderer Templates zu erstellen.
  - Knackige Variablen- und Schleifenkontrollsyntax.
  - Möglichkeit, Variablenwerte auf Template-Ebene zu filtern, wie z.B. Variablen in Großbuchstaben umzuwandeln oder ein Datumswert zu formatieren.
  - Möglichkeit, andere Ausgabeformate als HTML, wie JSON oder XML, zu generieren.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, eröffnet sich die Möglichkeit, dass das gesamte oder der Großteil des Renderings clientseitig erfolgt.

> [!NOTE]
> Es gibt im Internet viele Ressourcen, die Ihnen helfen können, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html) Templating-Engine verwenden (dies ist die kürzlich umbenannte Jade-Engine), da dies eine der beliebtesten Express/JavaScript-Templating-Sprachen ist, die vom Generator von Haus aus unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht Ihnen, ein Projekt zu erstellen, das zur Verwendung der gängigsten CSS-Stylesheet-Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS-Stylesheet-Engines ermöglichen es Ihnen, eine leistungsstärkere Syntax zur Definition von CSS zu verwenden und dann die Definition in einfaches CSS zu kompilieren, das von Browsern verwendet werden kann.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine wählen, die es Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt werden wir einfaches CSS (die Standardeinstellung) verwenden, da unsere CSS-Anforderungen nicht ausreichend komplex sind, um die Verwendung von etwas anderem zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_ Apps können jede [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel besprechen, wie wir eine Datenbank integrieren können.

## Projekt erstellen

Für die Beispiel _Local Library_ App, die wir erstellen werden, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ unter Verwendung der _Pug_ Template-Bibliothek und keiner CSS-Engine.

Navigieren Sie zuerst zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ in der Eingabeaufforderung aus, wie folgt gezeigt:

```bash
express express-locallibrary-tutorial --view=pug
```

Der Generator wird die Dateien des Projekts erstellen (und auflisten).

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten (wie in der Datei **package.json** aufgeführt) installiert werden und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt wird.

> [!NOTE]
> Die durch den Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle erzeugten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Die Skelett-Website ausführen

Nun haben wir ein vollständiges Skelettprojekt. Die Website _macht_ noch nicht sehr viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl lädt alle in der **package.json**-Datei des Projekts aufgeführten Abhängigkeitspakete herunter).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - In der Windows-CMD-Eingabeaufforderung verwenden Sie diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - In Windows PowerShell verwenden Sie diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (Die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie die Windows-CMD-Eingabeaufforderung verwenden).

   - In macOS oder Linux verwenden Sie diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für die Standard-Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, auf die über Port 3000 zugegriffen werden kann.

> [!NOTE]
> Sie könnten die App auch einfach mit dem Befehl `npm start` starten. Die Angabe der DEBUG-Variablen wie gezeigt aktiviert die Konsolenprotokollierung/-debugging. Zum Beispiel, wenn Sie die obige Seite besuchen, sehen Sie Debug-Ausgaben wie diese:
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

## Automatisches Neustarten des Servers bei Dateiänderungen aktivieren

Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr ärgerlich, den Server jedes Mal anzuhalten und neu zu starten, wenn Sie eine Änderung vornehmen. Daher lohnt es sich, die Zeit zu investieren, um den Neustart des Servers bei Bedarf zu automatisieren.

Ein geeignetes Tool hierfür ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es ein "Tool" ist), aber hier installieren und verwenden wir es lokal als _Entwicklerabhängigkeit_, sodass alle Entwickler, die mit dem Projekt arbeiten, es automatisch erhalten, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skeleton-Projekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich entscheiden, [nodemon](https://github.com/remy/nodemon) dennoch global auf Ihrem Computer zu installieren und nicht nur in der **package.json**-Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile aus starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es von einem npm-Skript aus aufrufen, da npm über alle installierten Pakete informiert ist. Finden Sie den Abschnitt `scripts` in Ihrer package.json. Zunächst enthält er eine Zeile, die mit `"start"` beginnt. Aktualisieren Sie ihn, indem Sie ein Komma am Ende dieser Zeile hinzufügen und die `"devstart"` und `"serverstart"` Zeilen hinzufügen:

- Auf Linux und macOS sieht der Skriptabschnitt so aus:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Auf Windows würde der "serverstart"-Wert stattdessen so aussehen (wenn die Eingabeaufforderung verwendet wird):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können jetzt den Server auf fast genau die gleiche Weise wie zuvor starten, aber mit dem Befehl `devstart`.

> [!NOTE]
> Wenn Sie jetzt eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit neu starten, indem Sie `rs` in der Eingabeaufforderung eingeben). Sie müssen jedoch den Browser neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` aufrufen, da "start" eigentlich ein npm-Befehl ist, der auf das benannte Skript abgebildet ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, daher macht es Sinn, ein neues Skript-Kommando zu erstellen.
>
> Der `serverstart`-Befehl, der den Skripten in der **package.json** oben hinzugefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der speziell in das Skript aufgenommene Befehl nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Lassen Sie uns nun einen Blick auf das erstellte Projekt werfen.

### Verzeichnisstruktur

Das generierte Projekt hat, jetzt da Sie die Abhängigkeiten installiert haben, die folgende Dateistruktur (Dateien sind die Elemente **nicht** mit "/" prefixiert.). Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und andere Informationen. Sie definiert auch ein Startskript, das den Anwendungseintrittspunkt, die JavaScript-Datei **/bin/www**, aufruft. Diese richtet einen Teil der Fehlerbehandlung der Anwendung ein und lädt dann **app.js**, um den Rest der Arbeit zu erledigen. Die App-Routen sind in separate Module im Verzeichnis **routes/** gespeichert. Die Templates sind im Verzeichnis /**views** gespeichert.

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

Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und andere Informationen:

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

Der Skriptbereich definiert zuerst ein "_start_"-Skript, das wir beim Start des Servers mit `npm start` aufrufen (dieses Skript wurde durch den _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass hiermit tatsächlich die JavaScript-Datei **./bin/www** mit _node_ gestartet wird.

In [Automatisches Neustarten des Servers bei Dateiänderungen aktivieren](#automatisches_neustarten_des_servers_bei_dateiänderungen_aktivieren) haben wir diesen Abschnitt bereits geändert, indem wir die _devstart_ und _serverstart_ Skripte hinzugefügt haben. Diese können verwendet werden, um dieselbe **./bin/www** Datei mit _nodemon_ statt mit _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten beinhalten das _express_-Paket und das Paket für unsere gewählte View Engine (_pug_). Darüber hinaus haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu analysieren und `req.cookies` zu befüllen (bietet im Wesentlichen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Utility, das nach dem Debugging-Ansatz des Node-Kerns modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Anforderungslogger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie HTTPS-Fehler, wo benötigt (für die Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet. Ersetzen Sie den Abhängigkeitsabschnitt Ihrer `package.json`-Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens angibt:

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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann möglicherweise sogar automatisch oder halbautomatisch als Teil eines kontinuierlichen Integrationssetups geschehen.
>
> In der Regel bleiben Bibliotheksupdates für die Minor- und Patchversionen kompatibel. Wir haben jede Version oben mit `^` versehen, damit wir automatisch auf die neueste `minor.patch`-Version aktualisieren können, indem wir ausführen:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität. Für diese Updates müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfassend neu testen.

### www-Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das Allererste, was dies tut, ist, den "echten" Anwendungseinstiegspunkt (**app.js**, im Projektstamm) zu `require()`, der die [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt. `require()` ist die [CommonJS-Methode](https://nodejs.org/api/modules.html) zum Importieren von JavaScript-Code, JSON und anderen Dateien in die aktuelle Datei. Hier spezifizieren wir das **app.js** Modul mit einem relativen Pfad und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import`-Anweisungen zum Importieren von JavaScript (ECMAScript) Modulen. Um diese Funktion zu nutzen, müssen Sie `"type": "module",` zur Express **package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden und für _relative Importe_ müssen Sie die Dateierweiterung einschließen (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl es Vorteile gibt, `import` zu verwenden, verwendet dieses Tutorial `require()` um der [Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) zu entsprechen.

Der Rest des Codes in dieser Datei richtet einen Node-HTTP-Server mit `app` ein, der auf einen bestimmten Port (festgelegt in einer Umgebungsvariablen oder 3000, wenn die Variable nicht definiert ist) gesetzt ist, und beginnt, den Serverfehler und die Verbindungen zu überwachen und zu melden. Vorerst müssen Sie nichts anderes über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber Sie können ihn bei Interesse gerne überprüfen.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (üblichweise als `app` bezeichnet), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der unten stehende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der **www** Einstiegspunktdatei oben wird dieses `module.exports` Objekt dem Aufrufer zur Verfügung gestellt, wenn diese Datei importiert wird.

Arbeiten wir die **app.js** Datei im Detail durch. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben, und _path_, das eine Kern-Bibliothek von Node zum Parsen von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zur Behandlung bestimmter Sätze zusammenhängender "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, fügen wir eine neue Datei hinzu, die sich mit buchbezogenen Routen befasst.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich verwendet (dies geschieht ein wenig weiter unten in der Datei).

Als nächstes erstellen wir das `app` Objekt mit unserem importierten _express_ Modul und verwenden es dann, um die View (Template) Engine einzurichten. Es gibt zwei Teile zur Einrichtung der Engine. Zuerst legen wir den `"views"` Wert fest, um das Verzeichnis anzugeben, in dem die Templates gespeichert werden (in diesem Fall das Unterverzeichnis **/views**). Dann legen wir den `"view engine"` Wert fest, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Die nächste Reihe von Funktionen ruft `app.use()` auf, um die oben importierten _Middleware_ Bibliotheken in die Anforderungskette einzufügen. Zum Beispiel sind `express.json()` und `express.urlencoded()` erforderlich, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen. Nach diesen Bibliotheken verwenden wir auch das `express.static` Middleware, das _Express_ alle statischen Dateien im Verzeichnis **/public** im Projektstamm bereitstellen lässt.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nun, da alle anderen Middleware eingerichtet sind, fügen wir unseren (vorher importierten) Routen-Verwaltungscode zur Anforderungskette hinzu. Der importierte Code definiert bestimmte Routen für die verschiedenen _Teile_ der Website:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für in den importierten Dateien definierte Routen behandelt. Zum Beispiel, wenn das importierte **users** Modul eine Route für `/profile` definiert, würden Sie diese Route unter `/users/profile` aufrufen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

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

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Der letzte Schritt besteht darin, es zu den Modulexporten hinzuzufügen (dies ist es, was ermöglicht, dass es von **/bin/www** importiert wird).

```js
module.exports = app;
```

### Routen

Die Routen-Datei **/routes/users.js** ist unten gezeigt (Routendateien teilen eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen). Zuerst lädt es das _express_ Modul und verwendet es, um ein `express.Router` Objekt zu erhalten. Dann spezifiziert es eine Route auf diesem Objekt und exportiert schließlich den Router aus dem Modul (dies ermöglicht es, dass die Datei in **app.js** importiert wird).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Rückruf, der immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anforderung mit dem korrekten Muster erkannt wird. Das passende Muster ist die Route, die beim Import des Moduls (`"/users"`) plus das in dieser Datei ("`/"`) definiert ist. Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Versuchen Sie dies, indem Sie den Server mit node ausführen und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Ein interessantes Detail ist, dass die Rückruffunktion das dritte Argument `next` hat und daher eine Middleware-Funktion anstelle eines einfachen Routen-Rückrufs ist. Während der Code aktuell das `next`-Argument nicht verwendet, könnte es in Zukunft nützlich sein, wenn Sie mehrere Routen-Handler zur `"/"`-Route hinzufügen möchten.

### Views (Templates)

Die Views (Templates) werden im Verzeichnis **/views** gespeichert (wie in **app.js** angegeben) und haben die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein angegebenes Template zusammen mit den Werten von benannten Variablen, die in einem Objekt übergeben werden, zu rendern und das Ergebnis dann als Antwort zu senden. Im untenstehenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort unter Verwendung des Templates "index" rendert und die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das zugehörige Template für die obige Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title` Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo es im Template angegeben ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" unter der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben nun ein Skelett-Website-Projekt für die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ ausgeführt wird. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Views für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes werden wir beginnen, das Skelett so zu modifizieren, dass es als Bibliotheks-Website funktioniert.

## Siehe auch

- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
