---
title: "Express Tutorial Teil 2: Erstellung einer Website-Skeleton"
short-title: "2: Skeleton-Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skeleton"-Website-Projekt erstellen können, das dann mit seiten-spezifischen Routen, Templates/Views und Datenbankabfragen gefüllt werden kann.

> [!WARNING]
> Das Express-Tutorial ist für Express Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte von 2025 zu aktualisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Einrichten einer Node-Entwicklungsumgebung</a>.
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

Dieser Artikel zeigt, wie Sie mithilfe des [Express Application Generator](https://expressjs.com/en/starter/generator.html) ein "Skeleton"-Website-Projekt erstellen können, das Sie dann mit seiten-spezifischen Routen, Views/Templates und Datenbankaufrufen füllen können. In diesem Fall verwenden wir das Tool, um das Grundgerüst für unsere [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu der wir später alle anderen benötigten Code-Komponenten hinzufügen. Der Prozess ist extrem einfach, Sie müssen nur den Generator mit einem neuen Projektnamen in der Befehlszeile aufrufen und optional auch die Template-Engine und den CSS-Generator der Seite angeben.

Die folgenden Abschnitte zeigen, wie Sie den Anwendungsgenerator aufrufen und bieten eine kleine Erklärung zu den verschiedenen View/CSS-Optionen. Wir erklären auch, wie die Skeleton-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, dass sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige mögliche Art, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Seite hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Für Informationen über eine _minimal_ Express-Anwendung, siehe [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten davon zu [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) geändert (und ein paar zu [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) im Tutorial, weil wir moderne JavaScript-Praxis demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der durch den _Express Application Generator_ erstellten **package.json** definiert sind.
>   Diese sind nicht (notwendig) die neuesten Versionen, und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine echte Anwendung in Produktion bereitstellen.

## Verwendung des Anwendungsgenerators

Sie sollten den Generator bereits als Teil des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung: Sie installieren das Generator-Tool site-weit mithilfe des npm-Paketmanagers, wie gezeigt:

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

Sie können `express` angeben, um ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ View-Engine und einfachem CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View- (Template-) Engine mit `--view` und/oder eine CSS-Generierungs-Engine mit `--css` auswählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` usw.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht Ihnen die Konfiguration einer Reihe von populären View-/Template-Engines, einschließlich [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade auswählt, wenn Sie keine View-Option angeben. Express selbst kann auch eine große Anzahl von anderen Template-Sprachen [Out of the Box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, sehen Sie sich [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Ziel-View-Engine an.

Generell sollten Sie eine Template-Engine auswählen, die Ihnen alle benötigten Funktionalitäten bietet und es Ihnen ermöglicht, schneller produktiv zu sein - oder mit anderen Worten, auf die gleiche Weise, wie Sie jede andere Komponente auswählen würden! Einige der Dinge, die bei der Auswahl von Template-Engines zu berücksichtigen sind:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Template-Sprache hat, werden sie wahrscheinlich schneller produktiv sein, wenn sie diese Sprache verwenden. Wenn nicht, sollten Sie die relative Lernkurve der in Betracht kommenden Template-Engines in Betracht ziehen.
- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, bei auftretenden Problemen im Laufe der Lebensdauer der Website Unterstützung zu erhalten.
- Stil — Einige Template-Engines verwenden spezielle Markierungen, um eingefügten Inhalt innerhalb "normalen" HTMLs zu kennzeichnen, während andere das HTML mit einer anderen Syntax (z.B. mithilfe von Einrückungen und Blocknamen) konstruieren.
- Performance/Renderzeit.
- Funktionen — Sie sollten überlegen, ob die Engines, die Sie in Betracht ziehen, folgende Funktionen haben:
  - Layout-Vererbung: Ermöglicht Ihnen, eine Basistemplate zu definieren und dann nur die Teile zu "erben", die Sie für eine bestimmte Seite anders haben möchten. Dies ist typischerweise ein besserer Ansatz als das Erstellen von Templates, indem eine Reihe von erforderlichen Komponenten eingeschlossen oder jedes Mal von Grund auf neu erstellt wird.
  - "Include"-Unterstützung: Ermöglicht Ihnen, Templates zu erstellen, indem andere Templates eingeschlossen werden.
  - Prägnante Variablen- und Schleifenkontrollsyntax.
  - Möglichkeit, Variablenwerte auf Template-Ebene zu filtern, wie z.B. Variablen in Großbuchstaben darzustellen oder einen Datumswert zu formatieren.
  - Möglichkeit, Ausgaben in anderen Formaten als HTML zu generieren, wie z.B. JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Template-Engine clientseitig verwendet werden kann, besteht die Möglichkeit, dass das gesamte oder der größte Teil des Renderings clientseitig durchgeführt wird.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen helfen, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt verwenden wir die [Pug](https://pugjs.org/api/getting-started.html) Template-Engine (dies ist die kürzlich umbenannte Jade-Engine), da sie eine der populärsten Express/JavaScript-Template-Sprachen ist und vom Generator Out of the Box unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das so konfiguriert ist, dass es die gängigsten CSS-Stylesheet-Engines verwendet: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS-Stylesheet-Engines ermöglichen es Ihnen, mächtigere Syntaxen zur Definition Ihrer CSS zu verwenden und diese Definition dann zu einfachem, altem CSS für Browser zu kompilieren.

Wie bei den Template-Engines sollten Sie die Stylesheet-Engine verwenden, die es Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt verwenden wir Vanilla-CSS (der Standard), da unsere CSS-Anforderungen nicht ausreichend komplex sind, um die Verwendung einer anderen Engine zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_-Apps können jede [Datenbankmechanismen](https://expressjs.com/en/guide/database-integration.html) verwenden, die von _Node_ unterstützt werden (Express selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel darüber sprechen, wie man sich mit einer Datenbank integriert.

## Erstellen des Projekts

Für die Beispiel-App _Local Library_, die wir erstellen werden, erstellen wir ein Projekt mit dem Namen _express-locallibrary-tutorial_ unter Verwendung der Template-Bibliothek _Pug_ und ohne CSS-Engine.

Navigieren Sie zuerst zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ im Befehlsprompt aus, wie gezeigt:

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten (wie in der **package.json**-Datei) installiert und die Anwendung auf verschiedenen Betriebssystemen ausgeführt werden können.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern die `var`-Deklarationen zu `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Ausführen der Skeleton-Website

An diesem Punkt haben wir ein vollständiges Skeleton-Projekt. Die Website _macht_ zwar noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl wird alle in der **package.json**-Datei des Projekts aufgeführten Abhängigkeitspakete abrufen).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - Verwenden Sie im Windows CMD-Prompt diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie in Windows PowerShell diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (Die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie die Windows CMD-Eingabeaufforderung verwenden.)

   - Verwenden Sie in macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browser-Seite sehen, die so aussieht:

![Browser für die standardmäßige Express App Generator Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben nun eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch einfach mit dem `npm start`-Befehl starten. Das Festlegen der DEBUG-Variablen wie gezeigt ermöglicht die Protokollierung/Konsole Debugging. Wenn Sie die obige Seite besuchen, sehen Sie beispielsweise Debug-Ausgaben wie diese:
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

## Serverneustart bei Dateiänderungen ermöglichen

Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit erst sichtbar, wenn Sie den Server neu starten. Es wird schnell sehr ärgerlich, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen. Daher lohnt es sich, die Zeit zu investieren, um den Server bei Bedarf automatisch neu zu starten.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es sich um ein "Tool" handelt), aber hier installieren wir es lokal als _Entwicklungsabhängigkeit_, sodass alle Entwickler, die mit dem Projekt arbeiten, es automatisch erhalten, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skeleton-Projekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie immer noch [nodemon](https://github.com/remy/nodemon) global auf Ihrem Rechner installieren möchten und nicht nur in Ihrer **package.json**-Datei des Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht über die Befehlszeile starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es über ein npm-Skript aufrufen, da npm alle installierten Pakete kennt. Finden Sie den `scripts`-Abschnitt Ihrer **package.json**. Ursprünglich enthält er eine Zeile, die mit `"start"` beginnt. Aktualisieren Sie es, indem Sie am Ende dieser Zeile ein Komma setzen und die `"devstart"`- und `"serverstart"`-Zeilen hinzufügen:

- Unter Linux und macOS sieht der Scripts-Abschnitt so aus:

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

Jetzt können wir den Server fast genauso wie zuvor starten, allerdings mit dem Befehl `devstart`.

> [!NOTE]
> Wenn Sie nun eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit neu starten, indem Sie `rs` in die Eingabeaufforderung eingeben). Sie müssen immer noch den Browser neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` aufrufen, da "start" eigentlich ein npm-Befehl ist, der mit dem benannten Skript verknüpft ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir möchten _nodemon_ nur während der Entwicklung verwenden, daher macht es Sinn, ein neues Skriptkommando zu erstellen.
>
> Das `serverstart`-Kommando, das den Skripts in der **package.json** oben hinzugefügt wurde, ist ein sehr gutes Beispiel. Dieser Ansatz bedeutet, dass Sie keinen langen Befehl mehr eingeben müssen, um den Server zu starten. Beachten Sie, dass das hinzugefügte Kommando nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Werfen wir nun einen Blick auf das Projekt, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt hat nach der Installation der Abhängigkeiten die folgende Dateistruktur (Dateien sind die Elemente ohne führenden "/").
Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und weitere Informationen.
Es definiert auch ein Startskript, das den Anwendungs-Einstiegspunkt, die JavaScript-Datei **/bin/www**, aufruft.
Dies richtet einige der Fehlerbehandlungen der Anwendung ein und lädt dann **app.js**, um die restliche Arbeit zu erledigen.
Die App-Routen werden in separaten Modulen im Verzeichnis **routes/** gespeichert.
Die Vorlagen sind im Verzeichnis /**views** gespeichert.

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

Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und weitere Informationen:

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

Der Scripts-Abschnitt definiert zuerst ein "_start_"-Skript, das wir aufrufen, wenn wir `npm start` zum Starten des Servers ausführen (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Serverneustart bei Dateiänderungen ermöglichen](#serverneustart_bei_dateiänderungen_ermöglichen) geändert, indem wir die _devstart_- und _serverstart_-Skripte hinzugefügt haben.
Diese können verwendet werden, um dieselbe **./bin/www**-Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben beschrieben).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das _express_-Paket und das Paket für unsere ausgewählte View-Engine (_pug_).
Zusätzlich haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu parsen und `req.cookies` zu befüllen (bietet im Wesentlichen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Werkzeug, das nach der Debugging-Technik des Node-Kerns modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Anfrage-Logger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellung von HTTP-Fehlern, wo benötigt (für Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet.
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

Dann aktualisieren Sie Ihre installierten Abhängigkeiten mit dem Befehl:

```bash
npm install
```

> [!NOTE]
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch als Teil eines kontinuierlichen Integrationssetups erfolgen.
>
> In der Regel bleiben Bibliotheks-Updates der minor und patch Version kompatibel.
> Wir haben jede Version mit `^` vorangestellt, damit wir automatisch auf die neueste `minor.patch`-Version aktualisieren können, indem wir:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität.
> Für diese Updates müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfangreich nachtesten.

### www-Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das allererste, was dies tut, ist, die "echte" Anwendungseinstiegsdatei (**app.js**, im Projektstamm) zu `require()`-en, die das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt.
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
> Um diese Funktion zu nutzen, müssen Sie `"type": "module"` zu Ihrer **package.json**-Datei von Express hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einschließen (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl es Vorteile bei der Verwendung von `import` gibt, verwendet dieses Tutorial `require()`, um mit [der Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der Rest des Codes in dieser Datei richtet einen Node-HTTP-Server ein, wobei `app` auf einen bestimmten Port festgelegt wird (definiert in einer Umgebungsvariablen oder 3000, wenn die Variable nicht definiert ist), und beginnt zu lauschen und Serverfehler und Verbindungen zu melden. Fürs Erste müssen Sie nichts weiter über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (standardmäßig `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der Code unten zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

Zurück in der oben genannten **www**-Einstiegsdatei ist es dieses `module.exports`-Objekt, das dem Aufrufer bereitgestellt wird, wenn diese Datei importiert wird.

Lassen Sie uns die Datei **app.js** im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mithilfe von `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben; und _path_, das eine Kernbibliothek von Node für das Parsen von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zur Handhabung bestimmter Sätze verwandter "Routen" (URL-Pfade). Wenn wir die Skeleton-Anwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, die sich mit buchbezogenen Routen befasst.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht verwendet (das passiert nur ein wenig weiter unten in der Datei).

Als nächstes erstellen wir das `app`-Objekt unter Verwendung unseres importierten _express_-Moduls und verwenden es dann, um die View-(Template)-Engine einzurichten. Es gibt zwei Teile zum Einrichten der Engine. Erstens setzen wir den Wert `"views"`, um den Ordner anzugeben, in dem die Templates gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den Wert `"view engine"`, um die Template-Bibliothek (in diesem Fall "pug") anzugeben.

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die oben importierten _Middleware_-Bibliotheken in die Anfrageverarbeitungskette einzufügen.
Zum Beispiel sind `express.json()` und `express.urlencoded()` notwendig, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu befüllen.
Nach diesen Bibliotheken verwenden wir auch die Middleware `express.static`, die _Express_ alle statischen Dateien im Verzeichnis **/public** im Projektstamm bereitstellen lässt.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nachdem nun alle anderen Middleware eingerichtet sind, fügen wir unseren (zuvor importierten) Routen-Handling-Code in die Anfrageverarbeitungskette ein. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Seite definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für Routendefinitionen in den importierten Dateien behandelt.
> Wenn zum Beispiel das importierte **users**-Modul eine Route für `/profile` definiert, würden Sie auf diese Route über `/users/profile` zugreifen. Wir werden später mehr über Routen in einem späteren Artikel sprechen.

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

Das Express-Anwendungsobjekt (app) ist jetzt vollständig konfiguriert. Der letzte Schritt ist, es zu den Modul-Exports hinzuzufügen (dadurch kann es von **/bin/www** importiert werden).

```js
module.exports = app;
```

### Routen

Die Routen-Datei **/routes/users.js** wird unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir nicht auch **index.js** zeigen).
Zuerst lädt es das _express_-Modul und verwendet es, um ein `express.Router`-Objekt zu erhalten.
Dann gibt es auf diesem Objekt eine Route an und exportiert abschließend den Router aus dem Modul (dies ermöglicht, dass die Datei in **app.js** importiert werden kann).

```js
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Rückruf, der jedes Mal aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit dem richtigen Muster erkannt wird. Das übereinstimmende Muster ist die beim Import des Moduls angegebene Route (`"/users"`) plus das, was in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit node ausführen und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Ein interessantes Detail oben ist, dass die Rückruffunktion das dritte Argument `next` hat und daher eine Middleware-Funktion ist und keine einfache Routen-Rückruffunktion. Während der Code derzeit nicht das `next`-Argument verwendet, kann es in Zukunft nützlich sein, wenn Sie mehrere Routen-Handler zur `'/'`-Routen-Pfad hinzufügen möchten.

### Views (Templates)

Die Views (Templates) sind im Verzeichnis **/views** gespeichert (wie in **app.js** angegeben) und haben die Dateiendung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein bestimmtes Template zusammen mit den Werten von benannten Variablen, die in einem Objekt übergeben werden, zu rendern und dann das Ergebnis als Antwort zu senden. Im unten stehenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort mithilfe des Templates "index" rendert und die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die obige Route finden Sie im Folgenden (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo sie im Template angegeben ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" unter der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server laufen lassen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben nun ein Skeleton-Website-Projekt für die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Views für unsere lokale Bibliothek hinzuzufügen.

Als nächstes werden wir beginnen, das Skeleton so zu ändern, dass es als Bibliotheks-Website funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
