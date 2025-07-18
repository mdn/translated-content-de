---
title: "Express Tutorial Teil 2: Erstellen einer Skelett-Website"
short-title: "2: Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel unseres [Express-Tutorials](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit sitespezifischen Routen, Templates/Views und Datenbankaufrufen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Einrichten einer Node-Entwicklungsumgebung</a>.
          Überprüfung des Express-Tutorials.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit, eigene neue Website-Projekte mit dem <em>Express Application Generator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie mit dem Tool [Express Application Generator](https://expressjs.com/en/starter/generator.html) eine "Skelett"-Website erstellen können, die Sie dann mit sitespezifischen Routen, Views/Templates und Datenbankaufrufen füllen können. In diesem Fall werden wir das Tool verwenden, um das Grundgerüst für unsere [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu dem wir später den gesamten weiteren Code hinzufügen werden, den die Seite benötigt. Der Prozess ist äußerst einfach und erfordert nur, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen, wobei Sie optional auch die Template-Engine und den CSS-Generator der Seite angeben können.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Application Generator aufrufen, und geben eine kleine Erklärung zu den verschiedenen View/CSS-Optionen. Wir erklären auch, wie die Skelett-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige praktikable Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Seite hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Für Informationen über eine _minimale_ Express-Anwendung siehe [Hallo Welt Beispiel](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben in diesem Tutorial die meisten davon in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) geändert, da wir moderne JavaScript-Praxis demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der von dem _Express Application Generator_ erstellten **package.json** definiert sind.
>   Diese sind nicht (notwendigerweise) die neueste Version, und Sie sollten sie aktualisieren, wenn Sie eine reale Anwendung in der Produktion bereitstellen.

## Verwendung des Application Generators

Sie sollten den Generator bereits im Rahmen des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung: Sie installieren das Generator-Tool site-wide mit dem npm-Paketmanager, wie gezeigt:

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

Sie können express anweisen, ein Projekt im _aktuellen_ Verzeichnis zu erstellen, indem Sie die _Jade_-View-Engine und einfaches CSS verwenden (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View (Template)-Engine mit `--view` und/oder eine CSS-Generation-Engine mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen für die Auswahl von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe von beliebten View/Templating-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade wählt, wenn Sie keine View-Option angeben. Express selbst kann auch eine Vielzahl anderer Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die nicht vom Generator unterstützt wird, lesen Sie [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Ziel-View-Engine.

Im Allgemeinen sollten Sie eine Templating-Engine wählen, die alle Funktionen bietet, die Sie benötigen, und Ihnen ermöglicht, schneller produktiv zu sein — oder mit anderen Worten, genauso, wie Sie jede andere Komponente auswählen würden! Einige Dinge, die Sie bei der Vergleich von Template-Engines beachten sollten:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, werden sie wahrscheinlich schneller produktiv sein, wenn sie diese Sprache verwenden. Wenn nicht, sollten Sie die relative Lernkurve für die in Betracht gezogenen Templating-Engines berücksichtigen.
- Beliebtheit und Aktivität — Prüfen Sie die Beliebtheit der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu erhalten, wenn Probleme im Laufe der Lebensdauer der Website auftreten.
- Stil — Einige Template-Engines verwenden spezielle Markup, um eingefügten Inhalt innerhalb von "gewöhnlichem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax erstellen (zum Beispiel durch Einrückung und Blocknamen).
- Performance/Renderzeit.
- Features — Sie sollten prüfen, ob die Engines, die Sie in Betracht ziehen, die folgenden Features bieten:
  - Layout-Vererbung: Erlaubt es Ihnen, ein Basistemplate zu definieren und dann nur die Teile davon zu "erben", die Sie für eine bestimmte Seite ändern möchten. Dies ist in der Regel besser, als Templates durch Einbeziehung einer Reihe von erforderlichen Komponenten zu erstellen oder jedes Mal ein Template von Grund auf neu zu erstellen.
  - "Include"-Unterstützung: Erlaubt es Ihnen, Templates durch Aufnahme anderer Templates aufzubauen.
  - Prägnante Variablen- und Schleifensteuerungssyntax.
  - Möglichkeit zur Filterung von Variablenwerten auf Templatenebene, wie z.B. Variablen in Großbuchstaben setzen oder ein Datumswert formatieren.
  - Fähigkeit zur Erzeugung von Ausgabeformaten außer HTML, wie z.B. JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Features. Wenn eine Templating-Engine clientseitig verwendet werden kann, ermöglicht dies die Möglichkeit, das gesamte oder den größten Teil des Renderings clientseitig durchzuführen.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen helfen, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html) Templating-Engine verwenden (zuvor "Jade" genannt), da dies eine der beliebtesten Express/JavaScript-Templating-Sprachen ist und vom Generator unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das für die Verwendung der gängigsten CSS-Stylesheet-Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS-Stylesheet-Engines ermöglichen es Ihnen, eine mächtigere Syntax für die Definition Ihres CSS zu verwenden und dann die Definition in einfaches CSS zu kompilieren, das von Browsern verwendet werden kann.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, die Ihrem Team am produktivsten macht. Für dieses Projekt werden wir pures CSS (die Standardeinstellung) verwenden, da unsere CSS-Anforderungen nicht so kompliziert sind, dass sich der Einsatz einer anderen Engine lohnt.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/integriert keine Datenbanken. _Express_-Apps können jeden [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für Datenbankverwaltung).

Wir werden die Integration mit einer Datenbank in einem späteren Artikel besprechen.

## Erstellen des Projekts

Für die Beispiel-App _Local Library_, die wir erstellen werden, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ unter Verwendung der _Pug_-Vorlagenbibliothek und keiner CSS-Engine.

Zuerst navigieren Sie zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen dann den _Express Application Generator_ in der Eingabeaufforderung wie gezeigt aus:

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
     > $env:DEBUG = "express-locallibrary-tutorial:*"; npm start

   run the app (Command Prompt (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten installiert werden (wie in der Datei **package.json** aufgeführt) und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt wird.

> [!NOTE]
> Die generierten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Ausführen der Skelett-Website

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website _tut_ wirklich noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl lädt alle im **package.json** des Projekts aufgeführten Abhängigkeitspakete herunter).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.
   - Verwenden Sie auf der Windows-Eingabeaufforderung diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie unter Windows PowerShell diesen Befehl:

     ```powershell
     $env:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (Die bereitgestellten "Windows"-Befehle setzen voraus, dass Sie die Windows-Eingabeaufforderung verwenden.)

   - Verwenden Sie unter macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für Standard-Express-App Generator Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch einfach mit dem `npm start`-Befehl starten. Das Festlegen der DEBUG-Variable wie gezeigt, aktiviert die Konsolenprotokollierung/Debugging. Wenn Sie beispielsweise die oben genannte Seite besuchen, sehen Sie Debug-Ausgaben wie diese:
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

## Automatisches Neustarten des Servers bei Dateiänderungen

Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr lästig, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen, daher lohnt es sich, Zeit zu investieren, um das Neustarten des Servers bei Bedarf zu automatisieren.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dieses wird normalerweise global installiert (da es sich um ein "Tool" handelt), aber hier werden wir es lokal als _Entwicklerabhängigkeit_ installieren und verwenden, damit es jeder Entwickler, der an dem Projekt arbeitet, automatisch erhält, wenn er die Anwendung installiert. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skelettprojekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich immer noch dazu entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrem Rechner zu installieren und nicht nur in der **package.json**-Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.10"
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile aus starten (es sei denn, wir fügen es dem Pfad hinzu). Wir können es jedoch über ein npm-Skript aufrufen, da npm weiß, welche Pakete installiert sind. Suchen Sie den `scripts`-Abschnitt Ihrer **package.json**. Zunächst enthält es eine Zeile, die mit `"start"` beginnt. Aktualisieren Sie ihn, indem Sie am Ende dieser Zeile ein Komma setzen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Unter Linux und macOS sieht der Skriptabschnitt so aus:

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

Wir können den Server jetzt fast genauso wie zuvor starten, aber mit dem `devstart`-Befehl.

> [!NOTE]
> Jetzt wird der Server neu gestartet, wenn Sie eine Datei im Projekt bearbeiten (oder Sie können ihn jederzeit durch Eingabe von `rs` in der Eingabeaufforderung neu starten). Sie müssen den Browser dennoch neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` verwenden, da "start" tatsächlich ein npm-Befehl ist, der auf ein benanntes Skript abgebildet ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir möchten _nodemon_ nur während der Entwicklung verwenden, also ist es sinnvoll, einen neuen Skriptbefehl zu erstellen.
>
> Der oben in die **package.json** hinzugefügte `serverstart`-Befehl ist ein sehr gutes Beispiel. Mit dieser Vorgehensweise müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der zu dem Skript hinzugefügte spezielle Befehl nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Werfen wir nun einen Blick auf das von uns erstellte Projekt.
Wir werden im Laufe des Projekts einige kleinere Änderungen daran vornehmen.

### Verzeichnisstruktur

Das generierte Projekt hat nun, nach der Installation der Abhängigkeiten, die folgende Dateistruktur (Dateien sind die Elemente ohne vorangestelltes "/").
Die **package.json**-Datei definiert die Abhängigkeiten der Anwendung und andere Informationen.
Sie definiert auch ein Startskript, das den Einstiegspunkt der Anwendung aufruft, die JavaScript-Datei **/bin/www**.
Dies richtet einen Teil der Fehlerbehandlung der Anwendung ein und lädt dann die **app.js**, um den Rest der Arbeit zu erledigen.
Die App-Routen werden in separaten Modulen im Verzeichnis **routes/** gespeichert.
Die Templates werden im Verzeichnis /**views** gespeichert.

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
    "nodemon": "^3.1.10"
  }
}
```

Der Skriptabschnitt definiert zunächst ein "_start_"-Skript, das wir aufrufen, wenn wir `npm start` aufrufen, um den Server zu starten (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass es tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Automatisches Neustarten des Servers bei Dateiänderungen](#automatisches-neustarten-des-servers-bei-dateiänderungen) geändert, indem wir die Skripte _devstart_ und _serverstart_ hinzugefügt haben.
Diese können verwendet werden, um dieselbe **./bin/www**-Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben diskutiert).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten beinhalten das _express_-Paket und das Paket für unsere ausgewählte View-Engine (_pug_).
Zusätzlich haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu parsen und `req.cookies` zu füllen (essentiell eine bequeme Methode, um auf Cookie-Informationen zuzugreifen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Utility, das nach dem Debugging-Verfahren des Kerns von Node modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Eine HTTP-Request-Logger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie HTTP-Fehler nach Bedarf (für express Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet.
Ersetzen Sie den Abschnitt mit den Abhängigkeiten Ihrer `package.json`-Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt der Erstellung angibt:

```json
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "debug": "^4.4.1",
    "express": "^5.1.0",
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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch als Teil einer kontinuierlichen Integrationsumgebung geschehen.
>
> In der Regel bleiben Bibliotheksaktualisierungen der Minor- und Patch-Version kompatibel.
> Wir haben oben `^` vor jeder Version gesetzt, damit wir automatisch auf die neueste `Minor.Patch`-Version aktualisieren können, indem wir ausführen:
>
> ```bash
> npm update --save
> ```
>
> Major-Versionen ändern die Kompatibilität.
> Für diese müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfassend neu testen.

### www Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das erste, was sie macht, ist `require()` des "echten" Eintrittspunkts der Anwendung (**app.js**, im Projektstamm), die das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt.
`require()` ist die [CommonJS-Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier geben wir das **app.js**-Modul mit einem relativen Pfad an und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import`-Anweisungen zum Importieren von JavaScript (ECMAScript)-Modulen.
> Um diese Funktion zu nutzen, müssen Sie `"type": "module"` zu Ihrer Express **package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung angeben (weitere Informationen finden Sie in der [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Während es Vorteile bei der Verwendung von `import` gibt, verwendet dieses Tutorial `require()`, um der [Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) zu entsprechen.

Der Rest des Codes in dieser Datei richtet einen Node-HTTP-Server mit `app`, der auf einen bestimmten Port (der in einer Umgebungsvariablen definiert ist oder 3000, wenn die Variable nicht definiert ist) eingestellt ist, und beginnt, Serverfehler und Verbindungen zu überwachen und zu melden. Vorerst brauchen Sie über den Code nicht viel mehr zu wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express`-Anwendungsobjekt (standardmäßig `app` genannt), konfiguriert die Anwendung mit verschiedenen Einstellungen und Middleware und exportiert dann die App aus dem Modul. Der untenstehende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

Zurück in der **www**-Einstiegsdatei oben ist dies das `module.exports`-Objekt, das dem Aufrufer bereitgestellt wird, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js**-Datei im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor mit npm für unsere Anwendung heruntergeladen haben; und _path_, eine zentrale Node-Bibliothek zum Parsen von Datei- und Verzeichnispfaden.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code, der bestimmte Gruppen verwandter "Routen" (URL-Pfade) behandelt. Wenn wir die Skelettanwendung erweitern, zum Beispiel, um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, die sich mit buchbezogenen Routen befasst.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich genutzt (das passiert ein wenig weiter unten in der Datei).

Als nächstes erstellen wir das `app`-Objekt, indem wir unser importiertes _express_-Modul verwenden, und nutzen es, um die View (Template)-Engine einzurichten. Es gibt zwei Teile, um die Engine einzurichten. Zuerst setzen wir den `"views"`-Wert, um das Verzeichnis anzugeben, in dem die Templates gespeichert werden (in diesem Fall das Unterverzeichnis **/views**). Dann setzen wir den `"view engine"`-Wert, um die Vorlagenbibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Die nächste Reihe von Funktionen ruft `app.use()` auf, um die _Middleware_-Bibliotheken, die wir oben importiert haben, in die Anfrageverarbeitungskette einzufügen.
Zum Beispiel sind `express.json()` und `express.urlencoded()` notwendig, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen.
Nach diesen Bibliotheken verwenden wir auch die `express.static`-Middleware, die _Express_ alle statischen Dateien im **/public**-Verzeichnis im Projektstamm dient.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nachdem alle anderen Middleware eingerichtet sind, fügen wir unseren (zuvor importierten) Routencode in die Anfragenverarbeitungskette ein. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Seite definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für Routen in den importierten Dateien behandelt.
> So würde zum Beispiel, wenn das importierte **users**-Modul eine Route für `/profile` definiert, diese Route unter `/users/profile` zugänglich sein. Wir werden in einem späteren Artikel mehr über Routen sprechen.

Die letzte Middleware in der Datei fügt Handler-Methoden für Fehler und HTTP-404-Antworten hinzu.

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

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Der letzte Schritt besteht darin, es den Modulexporten hinzuzufügen (das ist es, was es **/bin/www** ermöglicht, es zu importieren).

```js
module.exports = app;
```

### Routen

Die Routen-Datei **/routes/users.js** ist unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen).
Zuerst lädt sie das _express_-Modul und verwendet es, um ein `express.Router`-Objekt zu erhalten.
Dann spezifiziert sie eine Route auf diesem Objekt und exportiert schließlich den Router aus dem Modul (das ist es, was es ermöglicht, die Datei in **app.js** zu importieren).

```js
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Rückruf, der aufgerufen wird, wann immer eine HTTP-`GET`-Anfrage mit dem richtigen Muster erkannt wird. Das übereinstimmende Muster ist die bei der Modulintegration angegebene Route (`"/users"`) plus das, was in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit node ausführen und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Ein interessantes Detail oben ist, dass die Rückruffunktion das dritte Argument `next` hat und daher eine Middleware-Funktion und keine einfache Route ist. Obwohl der Code das `next`-Argument derzeit nicht verwendet, könnte es in der Zukunft nützlich sein, wenn Sie mehrere Routenhandler zur `'/'`-Route hinzufügen möchten.

### Views (Templates)

Die Views (Templates) werden im Verzeichnis **/views** gespeichert (wie in **app.js** angegeben) und haben die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/5x/api.html#res.render) wird verwendet, um ein angegebenes Template zusammen mit den Werten benannter Variablen, die in einem Objekt übergeben werden, zu rendern und dann das Ergebnis als Antwort zu senden. Im unten stehenden Code von **/routes/index.js** können Sie sehen, wie diese Route eine Antwort mit der Vorlage "index" rendert, wobei die Template-Variable "title" übergeben wird.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die obige Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) an der im Template angegebenen Stelle eingefügt wird.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" an der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben jetzt ein Skelett-Website-Projekt für die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie ein gutes Verständnis davon haben, wo wir Änderungen vornehmen müssen, um Routen und Views für unsere lokale Bibliothek hinzuzufügen.

Als nächstes werden wir das Skelett so modifizieren, dass es als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express Applikationsgenerator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
