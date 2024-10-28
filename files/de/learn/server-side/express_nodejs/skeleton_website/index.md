---
title: "Express Tutorial Teil 2: Erstellung eines Skelett-Webauftritts"
slug: Learn/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express-Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Webprojekt erstellen können, das Sie dann mit seiten-spezifischen Routen, Templates/Ansichten und Datenbankabfragen füllen können.

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
        In der Lage sein, eigene neue Webprojekte mit dem <em>Express Application Generator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie mithilfe des Tools [Express Application Generator](https://expressjs.com/en/starter/generator.html) ein "Skelett" einer Webseite erstellen können, das Sie dann mit seiten-spezifischen Routen, Ansichten/Templates und Datenbankabfragen füllen können. In diesem Fall verwenden wir das Tool, um das Framework für unsere [Local Library Webseite](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu der wir später all den anderen Code hinzufügen werden, den die Seite benötigt. Der Prozess ist extrem einfach und erfordert nur, dass Sie den Generator über die Befehlszeile mit einem neuen Projektnamen aufrufen und optional auch die Template-Engine und den CSS-Generator der Seite angeben.

Die folgenden Abschnitte zeigen, wie Sie den Anwendungsgenerator aufrufen, und geben eine kleine Erklärung zu den verschiedenen Ansichts-/CSS-Optionen. Wir erklären auch, wie die Skelettseite strukturiert ist. Am Ende zeigen wir, wie Sie die Webseite ausführen können, um zu überprüfen, dass sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Site hat jedoch eine modulare Struktur, die einfach zu erweitern und zu verstehen ist. Weitere Informationen zu einer _minimalen_ Express-Anwendung finden Sie im [Hello World Beispiel](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`. Wir haben die meisten dieser Variablen zu [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige zu [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) im Tutorial geändert, weil wir moderne JavaScript-Praktiken demonstrieren wollen.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der von _Express Application Generator_ erstellten **package.json** definiert sind. Diese sind nicht unbedingt die neuesten Versionen, und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine echte Anwendung in die Produktion einführen.

## Verwendung des Anwendungsgenerators

Sie sollten den Generator bereits als Teil des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung: Sie installieren das Generator-Tool über den npm-Paketmanager site-weit, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat eine Reihe von Optionen, die Sie über die Befehlszeile mit dem `--help` (oder `-h`) Befehl anzeigen können:

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

Sie können festlegen, dass Express ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ Ansicht-Engine und einfachem CSS erstellen soll (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine Ansicht (Template)-Engine mit `--view` und/oder eine CSS-Generationsengine mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z. B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche Ansichts-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Anzahl von populären Ansichts-/Templating-Engines zu konfigurieren, einschließlich [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig), und [Vash](https://www.npmjs.com/package/vash), obwohl es standardmäßig Jade auswählt, wenn Sie keine Ansicht-Option angeben. Express selbst kann auch eine große Anzahl anderer Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, siehe [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation Ihrer Ziel-Ansichts-Engine.

Generell sollten Sie eine Templating-Engine wählen, die alle Funktionen liefert, die Sie benötigen, und die es Ihnen ermöglicht, schneller produktiv zu sein — oder mit anderen Worten, auf die gleiche Weise, wie Sie andere Komponenten auswählen! Einige Überlegungen bei der Auswahl von Template-Engines:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, ist es wahrscheinlich, dass es schneller produktiv ist, wenn es diese Sprache verwendet. Wenn nicht, sollten Sie die relative Lernkurve der in Frage kommenden Templating-Engine berücksichtigen.
- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig zu wissen, wie man Unterstützung bekommt, wenn während der Lebenszeit der Website Probleme auftreten.
- Stil — Einige Template-Engines verwenden spezifisches Markup, um eingefügten Inhalt innerhalb "gewöhnlichem" HTML anzugeben, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel durch Verwendung von Einrückungen und Blocknamen).
- Performance/Rendering-Zeit.
- Features — Sie sollten berücksichtigen, ob die Engines, die Sie betrachten, über die folgenden Funktionen verfügen:

  - Layout-Vererbung: Ermöglicht es Ihnen, eine Basischablone zu definieren und dann nur die Teile davon "zu erben", die Sie für eine bestimmte Seite unterschiedlich haben möchten. Dies ist typischerweise ein besserer Ansatz als das Erstellen von Templates, indem eine Reihe von erforderlichen Komponenten einfügt werden oder jedes Mal ein Template von Grund auf neu erstellt wird.
  - "Include"-Unterstützung: Ermöglicht es Ihnen, Templates durch das Einfügen anderer Templates aufzubauen.
  - Knappes Variablen- und Schleifenkontrollsyntax.
  - Möglichkeit, Variablenwerte auf Template-Ebene zu filtern, z. B. Variablen in Großbuchstaben umzuwandeln oder einen Datumswert zu formatieren.
  - Möglichkeit, andere Ausgabeformate als HTML zu generieren, wie JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, bietet dies die Möglichkeit, das gesamte oder den größten Teil des Renderings clientseitig durchführen zu lassen.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen bei der Vergleichung der verschiedenen Optionen helfen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html)-Templating-Engine verwenden (dies ist die kürzlich umbenannte Jade-Engine), da diese zu den beliebtesten Express/JavaScript-Templating-Sprachen gehört und vom Generator standardmäßig unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das mit den üblichsten CSS-Stylsheet-Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS-Stylesheet-Engines ermöglichen es Ihnen, eine mächtigere Syntax zur Definition Ihres CSS zu verwenden und dann die Definition in das überall übliche CSS zu kompilieren, das von Browsern verwendet wird.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, die es Ihrem Team ermöglicht, am produktivsten zu sein. In diesem Projekt werden wir einfaches CSS (das Standardformat) verwenden, da unsere CSS-Anforderungen nicht kompliziert genug sind, um etwas anderes zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. Express-Anwendungen können jedes [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, das von Node unterstützt wird (Express selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement).

Wir werden besprechen, wie man sich mit einer Datenbank in einem späteren Artikel integrieren kann.

## Erstellen des Projekts

Für die Beispiel-App _Local Library_, die wir erstellen werden, werden wir ein Projekt mit dem Namen _express-locallibrary-tutorial_ erstellen, welches die _Pug_ Template-Bibliothek und keine CSS-Engine verwendet.

Zuerst navigieren Sie zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ im Eingabeaufforderung wie gezeigt:

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten (wie in der **package.json**-Datei aufgelistet) installiert werden und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt wird.

> [!NOTE]
> In den vom Generator erstellten Dateien sind alle Variablen als `var` definiert.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen zu `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Ausführen der Skelett-Webseite

Zu diesem Zeitpunkt haben wir ein vollständiges Skelett-Projekt. Die Webseite tut momentan eigentlich nicht sehr viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl wird alle Abhängigkeitspakete ziehen, die in der **package.json**-Datei aufgelistet sind).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - Im Windows CMD-Bildschirm verwenden Sie diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - In der Windows Powershell verwenden Sie diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > Powershell-Befehle sind nicht Bestandteil dieses Tutorials (die angegebenen "Windows"-Befehle gehen davon aus, dass Sie den Windows CMD-Bildschirm verwenden).

   - Unter macOS oder Linux verwenden Sie diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihren Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die folgendermaßen aussieht:

![Browser für die standardmäßige Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben nun eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch einfach durch den `npm start`-Befehl starten. Die Angabe der DEBUG-Variablen wie gezeigt, aktiviert das Konsolen-Logging/Debugging. Zum Beispiel, wenn Sie die oben genannten Seite besuchen, sehen Sie solche Debug-Ausgaben:
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

## Automatische Serverneustart bei Dateiänderungen aktivieren

Alle Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit erst sichtbar, nachdem Sie den Server neu gestartet haben. Es wird schnell sehr ärgerlich, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung machen, sodass es sich lohnt, die Zeit zu investieren, den Server beim Bedarf automatisch neu zu starten.

Ein nützliches Tool zu diesem Zweck ist [nodemon](https://github.com/remy/nodemon). Dieses Tool wird normalerweise global installiert (da es ein "Werkzeug" ist), aber hier werden wir es lokal als eine _Entwicklerabhängigkeit_ installieren und nutzen, sodass alle Entwickler, die an dem Projekt arbeiten, es automatisch erhalten, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis für das Skelettprojekt:

```bash
npm install --save-dev nodemon
```

Falls Sie weiterhin wählen sollten, [nodemon](https://github.com/remy/nodemon) global auf Ihrem Rechner zu installieren, und nicht nur auf die **package.json**-Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie nun einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile aus starten (es sei denn, wir fügen es zu dem Pfad hinzu), aber wir können es von einem npm-Skript aus aufrufen, da npm alle installierten Pakete kennt. Finden Sie den `scripts`-Abschnitt in Ihrer package.json. Anfangs wird er eine Zeile enthalten, die mit `"start"` beginnt. Aktualisieren Sie sie, indem Sie ein Komma am Ende dieser Zeile setzen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Unter Linux und macOS wird der Skriptabschnitt folgendermaßen aussehen:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Unter Windows würde der Wert "serverstart" stattdessen folgendermaßen aussehen (wenn Sie die Eingabeaufforderung verwenden):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können den Server jetzt auf fast genau die gleiche Weise wie zuvor starten, jedoch unter Verwendung des `devstart`-Befehls.

> [!NOTE]
> Jetzt, wenn Sie eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit durch Eingabe von `rs` im Befehlsfenster neu starten). Sie müssen dennoch den Browser neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von `npm start` aufrufen, weil "start" tatsächlich ein npm-Befehl ist, der dem benannten Skript zugeordnet ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir möchten _nodemon_ nur während der Entwicklung verwenden, daher macht es Sinn, einen neuen Skriptbefehl zu erstellen.
>
> Der `serverstart`-Befehl, den wir dem Skript in der **package.json** oben hinzugefügt haben, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie nicht mehr einen langen Befehl eingeben, um den Server zu starten. Beachten Sie, dass der spezielle Befehl, der dem Skript hinzugefügt wurde, nur für macOS oder Linux gilt.

## Das generierte Projekt

Werfen wir nun einen Blick auf das Projekt, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt hat nun, nachdem Sie die Abhängigkeiten installiert haben, die folgende Dateistruktur (Dateien sind die Elemente, die nicht mit "/" vorangestellt sind).
Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und andere Informationen.
Sie definiert auch ein Startskript, das das Einstiegspunkt der Anwendung, die JavaScript-Datei **/bin/www**, aufrufen wird.
Dieser richtet einen Teil der Anwendungsfehlerbehandlung ein und lädt dann **app.js**, um den Rest der Arbeit zu erledigen.
Die Anwenderrouten werden in separaten Modulen im **routes/**-Verzeichnis gespeichert.
Die Templates werden im **/views**-Verzeichnis gespeichert.

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

Der Skriptabschnitt definiert zuerst ein "_start_"-Skript, das wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Automatische Serverneustart bei Dateiänderungen aktivieren](#automatische_serverneustart_bei_dateiänderungen_aktivieren) geändert, indem wir die Skripte _devstart_ und _serverstart_ hinzugefügt haben.
Diese können verwendet werden, um dieselbe **./bin/www**-Datei mit _nodemon_ statt _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten schließen das _express_-Paket und das Paket für unsere gewählte Ansichts-Engine (_pug_) ein.
Daneben haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu analysieren und `req.cookies` zu füllen (im Grunde genommen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Dienstprogramm nach dem Vorbild der Debugging-Technik des Node-Kerns.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Anforderungslogger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen von HTTP-Fehlern, wo nötig (für Express-Fehlerbehandlung).

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

Aktualisieren Sie dann Ihre installierten Abhängigkeiten mit dem Befehl:

```bash
npm install
```

> [!NOTE]
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch als Teil einer kontinuierlichen Integrationsumgebung durchgeführt werden.
>
> Normalerweise bleiben Bibliotheksupdates auf die Nebenversion und Patch-Version kompatibel.
> Wir haben `^` vor jede Version oben eingefügt, damit wir automatisch auf die neueste `minor.patch` Version aktualisieren können, indem wir:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität.
> Für diese Updates müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfangreich neu testen.

### www-Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das Erste, was sie tut, ist `require()`, um den "richtigen" Anwendung-Einstiegspunkt (**app.js**, im Projektstamm) zu laden, der das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt erstellt und zurückgibt.
`require()` ist der [CommonJS-Weg](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier spezifizieren wir das **app.js**-Modul unter Verwendung eines relativen Pfads und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import`-Anweisungen für das Importieren von JavaScript (ECMAScript)-Modulen.
> Um diese Funktion zu verwenden, müssen Sie `"type": "module",` zu Ihrer Express **package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einschließen (weitere Informationen finden Sie in der [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl es Vorteile bei der Verwendung von `import` gibt, verwendet dieses Tutorial `require()`, um der [Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) zu entsprechen.

Der Rest des Codes in dieser Datei richtet einen Node HTTP-Server mit `app` ein, das auf einen bestimmten Port (definiert in einer Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist) gesetzt ist, und beginnt zu lauschen und Berichte über Serverfehler und Verbindungen zu erstellen. Für jetzt müssen Sie eigentlich nichts weiter über den Code wissen (alles in dieser Datei ist "boilerplate"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (standardmäßig `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der folgende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der **www**-Einstiegspunktdatei oben ist es dieses `module.exports`-Objekt, das dem Aufrufer zur Verfügung gestellt wird, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js**-Datei im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben; und _path_, welches eine Kernbibliothek von Node zur Analyse von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zur Behandlung bestimmter Sätze verwandter "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, z. B. um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, die sich mit buchbezogenen Routen befasst.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> Bis zu diesem Punkt haben wir nur das Modul _importiert_; wir haben seine Routen noch nicht tatsächlich genutzt (dies passiert nur ein kleines Stück weiter unten in der Datei).

Als nächstes erstellen wir das `app`-Objekt unter Verwendung unseres importierten _express_-Moduls und richten dann die Ansichts(template)-Engine ein. Es gibt zwei Teile, um die Engine einzurichten. Zuerst setzen wir den `"views"` Wert, um den Ordner anzugeben, in dem die Templates gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"` Wert, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die von uns importierten _Middleware_-Bibliotheken in die Anforderungshandhabungskette einzufügen.
Zum Beispiel sind `express.json()` und `express.urlencoded()` notwendig, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen.
Nach diesen Bibliotheken verwenden wir auch das `express.static` Middleware, das _Express_ dazu veranlasst, alle statischen Dateien im **/public**-Verzeichnis im Projektstamm zu bedienen.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nachdem die gesamte andere Middleware eingerichtet ist, fügen wir unseren (zuvor importierten) streckenbetreffenden Code in die Anforderungshandhabungskette ein. Der importierte Code wird bestimmte Strecken für die verschiedenen Teile der Site definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für die in den importierten Dateien definierten Strecken behandelt.
> Wenn das importierte **Benutzer**-Modul eine Strecke für `/profile` definiert, würden Sie auf diese Strecke unter `/users/profile` zugreifen. Wir werden mehr über Strecken in einem späteren Artikel sprechen.

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

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Der letzte Schritt besteht darin, es in den Modulexporten hinzuzufügen (dies ist, was es ermöglicht, von **/bin/www** importiert zu werden).

```js
module.exports = app;
```

### Routen

Die Routendatei **/routes/users.js** ist unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen).
Zuerst lädt es das _express_ Modul und verwendet es, um ein `express.Router` Objekt zu erhalten.
Dann spezifiziert es eine Strecke auf diesem Objekt und exportiert schließlich den Router aus dem Modul (dies ist, was es ermöglicht, dass die Datei in **app.js** importiert wird).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Strecke definiert ein Callback, das aufgerufen wird, wann immer eine HTTP-`GET`-Anforderung mit dem korrekten Muster erkannt wird. Das passende Muster ist die Strecke, die beim Importieren des Moduls (`"/users"`) spezifiziert wird, plus was auch immer in dieser Datei (`"/"`) definiert ist. Mit anderen Worten, diese Strecke wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit Node ausführen und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Interessant ist hier, dass die Callback-Funktion das dritte Argument `next` hat und daher ein Middleware-Funktion anstatt eines einfachen Strecken-Callbacks ist. Während der Code derzeit das `next`-Argument nicht verwendet, könnte es in der Zukunft nützlich sein, wenn Sie mehrere Streckenhandler zur `'/'`-Streckenpfad hinzufügen möchten.

### Ansichten (Vorlagen)

Die Ansichten (Vorlagen) werden im **/views** Verzeichnis (wie in **app.js** angegeben) gespeichert und haben die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um eine bestimmte Vorlage zusammen mit den Werten benannter Variablen zu rendern, die in einem Objekt übergeben werden und dann das Ergebnis als Antwort zu senden. Im Code unten aus **/routes/index.js** können Sie sehen, wie diese Strecke mit der Vorlage "index" eine Antwort rendert und die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Die entsprechende Vorlage für die obige Strecke wird unten gegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie bis jetzt wissen sollten, ist, dass die `title`-Variable (mit dem Wert `'Express'`) an der in der Vorlage angegebenen Stelle eingefügt wird.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" an der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben nun ein Skelett-Webprojekt für die [Local Library](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und geprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, so dass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Strecken und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes beginnen wir mit der Modifikation des Skeletts, damit es als Bibliotheks-Website funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
