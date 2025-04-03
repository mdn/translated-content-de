---
title: "Express Tutorial Teil 2: Erstellung einer Webseiten-Skelettstruktur"
short-title: "2: Webseiten-Skelettstruktur"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett" einer Website erstellen können, das Sie dann mit seiten-spezifischen Routen, Templates/Views und Datenbankaufrufen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Einen Node-Entwicklungsumgebung einrichten</a>.
          Überprüfung des Express Tutorials.
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

## Überblick

Dieser Artikel zeigt, wie Sie mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html) ein "Skelett" einer Webseite erstellen können, das Sie dann mit seiten-spezifischen Routen, Ansichten/Templates und Datenbankaufrufen füllen können. In diesem Fall werden wir das Tool verwenden, um das Framework für unsere [Local Library Webseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, dem wir später den gesamten weiteren benötigten Code hinzufügen. Der Prozess ist extrem einfach und erfordert lediglich, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen, optional auch unter Angabe der Template-Engine und des CSS-Generators der Website.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Anwendungsgenerator aufrufen, und geben eine kleine Erklärung zu den verschiedenen View/CSS-Optionen. Wir erklären auch, wie die Skelett-Webseite strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, dass sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige mögliche Art, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Website hat jedoch eine modulare Struktur, die leicht erweiterbar und verständlich ist. Informationen zu einer _minimalen_ Express-Anwendung finden Sie im [Hello World Beispiel](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`. Wir haben die meisten dieser Variablen in dem Tutorial in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) geändert, da wir moderne JavaScript-Praktiken demonstrieren wollen.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der **package.json** erstellt vom _Express Application Generator_ definiert sind. Diese sind nicht (notwendigerweise) die neuesten Versionen und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine echte Anwendung in die Produktion bereitstellen.

## Verwendung des Anwendungsgenerators

Sie sollten den Generator bereits im Rahmen der [Einrichtung einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Zur Erinnerung: Sie installieren das Generator-Tool im gesamten System mit dem npm-Paketmanager, wie folgt:

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

Sie können express angeben, um ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ View-Engine und einfachem CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View (Template)-Engine mit `--view` und/oder eine CSS-Generations-Engine mit `--css` auswählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z.B., `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe beliebter View-/Templating-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade auswählt, wenn Sie keine View-Option angeben. Express selbst kann auch eine große Anzahl anderer Templatingsprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, dann sehen Sie [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Ziel-View-Engine.

Generell sollten Sie eine Templating-Engine auswählen, die alle benötigten Funktionen liefert und Ihnen ermöglicht, produktiver zu sein – oder mit anderen Worten, auf dieselbe Weise, wie Sie jede andere Komponente wählen! Einige Punkte, die bei der Vergleichung von Template-Engines zu beachten sind:

- Zeit zur Produktivität – Wenn Ihr Team bereits Erfahrung mit einer Templatingsprache hat, werden sie wahrscheinlich schneller produktiv mit dieser Sprache sein. Wenn nicht, sollten Sie die relative Lernkurve für die in Betracht gezogenen Templating-Engines in Betracht ziehen.
- Popularität und Aktivität – Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu erhalten, wenn während der Lebensdauer der Website Probleme auftreten.
- Stil – Einige Template-Engines verwenden spezifische Markups, um eingefügten Inhalt innerhalb von "normalem" HTML zu markieren, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel unter Verwendung von Einrückungen und Blocknamen).
- Leistung/Renderzeit.
- Funktionen – Sie sollten prüfen, ob die Engines, die Sie anschauen, folgende Funktionen verfügbar haben:

  - Layoutvererbung: Ermöglicht es Ihnen, eine Basisschablone zu definieren und dann nur die Teile davon zu "erben", die Sie für eine bestimmte Seite anders haben möchten. Dies ist typischerweise ein besserer Ansatz als der Aufbau von Templates durch Einschluss einer Anzahl erforderlicher Komponenten oder den Aufbau eines Templates von Grund auf jedes Mal.
  - "Include"-Support: Ermöglicht es Ihnen, Templates durch Einfügung anderer Templates aufzubauen.
  - Geringe Variable- und Schleifenkontrollsyntax.
  - Fähigkeit zur Filterung von Variablenwerten auf Templateebene, wie z.B. Variablen in Großbuchstaben umzuwandeln oder einen Datumswert zu formatieren.
  - Möglichkeit, andere Ausgabeformate als HTML zu erzeugen, wie z.B. JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, ermöglicht dies die Möglichkeit, dass das gesamte oder der größte Teil des Renderings client-seitig erfolgt.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, um Ihnen bei der Vergleichung der verschiedenen Optionen zu helfen!

Für dieses Projekt verwenden wir die [Pug](https://pugjs.org/api/getting-started.html) Templating-Engine (dies ist der kürzlich umbenannte Jade-Engine), da dies eine der beliebtesten Express/JavaScript Templating-Sprachen ist und vom Generator out of the box unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das so konfiguriert ist, dass es die gängigsten CSS-Stylesheet-Engines verwendet: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS-Stylesheet-Engines ermöglichen es Ihnen, leistungsfähigere Syntax zur Definition Ihrer CSS zu verwenden und dann die Definition in einfaches altes CSS für Browser zu kompilieren.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, die Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt werden wir Vanilla CSS (die Standardoption) verwenden, da unsere CSS-Anforderungen nicht komplex genug sind, um die Verwendung einer anderen Option zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/beinhaltet keine Datenbanken. _Express_-Anwendungen können jeden [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel besprechen, wie Sie mit einer Datenbank integrieren können.

## Das Projekt erstellen

Für die Beispielanwendung _Local Library_, die wir bauen werden, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ unter Verwendung der _Pug_ Template-Bibliothek und ohne CSS-Engine.

Navigieren Sie zuerst dorthin, wo Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ im Befehlsaufforderung wie gezeigt aus:

```bash
express express-locallibrary-tutorial --view=pug
```

Der Generator erstellt (und listet auf) die Dateien des Projekts.

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

Am Ende der Ausgabe gibt der Generator Anweisungen zum Installieren der Abhängigkeiten (wie in der Datei **package.json** aufgeführt) und zum Ausführen der Anwendung auf verschiedenen Betriebssystemen.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`. Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (das restliche Tutorial geht davon aus, dass Sie dies getan haben).

## Das Skelett der Website ausführen

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website _macht_ tatsächlich noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl ruft alle in der **package.json**-Datei des Projekts aufgelisteten Abhängigkeits-Pakete ab).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - Verwenden Sie auf der Windows CMD-Eingabeaufforderung diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie auf Windows PowerShell diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (Die angegebenen "Windows"-Befehle gehen davon aus, dass Sie die Windows CMD-Eingabeaufforderung verwenden.)

   - Verwenden Sie auf macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die folgendermaßen aussieht:

![Browser für die Standard-Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben nun eine funktionierende Express-Anwendung, auf die über Port 3000 zugegriffen werden kann.

> [!NOTE]
> Sie könnten die App auch einfach mit dem Befehl `npm start` starten. Die Angabe der DEBUG-Variable wie gezeigt ermöglicht Console-Logging/Debugging. Beispielsweise werden Sie beim Besuch der obigen Seite Debug-Ausgaben wie diese sehen:
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

## Neustart des Servers bei Dateiänderungen aktivieren

Alle Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit erst sichtbar, nachdem Sie den Server neu gestartet haben. Es wird schnell sehr ärgerlich, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen. Es lohnt sich also, sich die Zeit zu nehmen, um den Neustart des Servers bei Bedarf zu automatisieren.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es sich um ein "Tool" handelt), aber hier werden wir es lokal als _Entwicklerabhängigkeit_ installieren und verwenden, damit alle Entwickler, die an dem Projekt arbeiten, es automatisch installieren, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skelettprojekts:

```bash
npm install --save-dev nodemon
```

Falls Sie sich dennoch entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrem Computer zu installieren und nicht nur in der **package.json**-Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es von einem npm-Skript aus aufrufen, da npm alle installierten Pakete kennt. Suchen Sie den `scripts`-Abschnitt Ihrer package.json. Zuerst enthält es eine Zeile, die mit `"start"` beginnt. Aktualisieren Sie es, indem Sie am Ende dieser Zeile ein Komma setzen und die `"devstart"` und `"serverstart"` Zeilen hinzufügen:

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

Wir können nun den Server auf fast genau die gleiche Weise wie zuvor starten, jedoch mit dem `devstart`-Befehl.

> [!NOTE]
> Jetzt, wenn Sie eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit neu starten, indem Sie `rs` im Befehlsfenster eingeben). Sie müssen den Browser jedoch immer noch neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` aufrufen, weil "start" tatsächlich ein npm-Befehl ist, der dem benannten Skript zugeordnet ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir wollen _nodemon_ nur während des Entwicklungsprozesses verwenden, daher macht es Sinn, einen neuen Skriptbefehl zu erstellen.
>
> Der `serverstart`-Befehl, der oben zu den Skripten in der **package.json** hinzugefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der zum Skript hinzugefügte bestimmte Befehl nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Schauen wir uns nun das Projekt an, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt hat nun, nachdem Sie die Abhängigkeiten installiert haben, die folgende Dateistruktur (Dateien sind die Elemente, die **nicht** mit "/" beginnen). Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und andere Informationen. Sie definiert auch ein Startskript, das den Einstiegs-JavaScript-Datei **/bin/www** aufruft. Diese richtet einen Teil der Anwendung zur Fehlerbehandlung ein und lädt dann **app.js**, um den Rest der Arbeit zu erledigen. Die App-Routen werden in separaten Modulen unter dem **routes/**-Verzeichnis gespeichert. Die Vorlagen werden im **/views**-Verzeichnis gespeichert.

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

Wir haben diesen Abschnitt bereits in [Neustart des Servers bei Dateiänderungen aktivieren](#neustart_des_servers_bei_dateiänderungen_aktivieren) geändert, indem wir die _devstart_ und _serverstart_ Skripte hinzugefügt haben. Diese können verwendet werden, um dieselbe **./bin/www**-Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das _express_-Paket und das Paket für unsere ausgewählte View-Engine (_pug_). Zusätzlich haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu analysieren und `req.cookies` zu befüllen (im Wesentlichen bietet es eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Dienstprogramm, das nach der Debugging-Technik des Node-Kerns modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Eine HTTP-Anforderungsprotokollierungs-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellt bei Bedarf HTTP-Fehler (für die Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet. Ersetzen Sie den Abschnitt "dependencies" Ihrer `package.json`-Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens angibt:

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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeiten zu aktualisieren - dies kann sogar automatisch oder halbautomatisch als Teil eines Continuous-Integration-Setups erfolgen.
>
> In der Regel bleiben Bibliotheksaktualisierungen auf die kleinere und Patch-Version kompatibel. Wir haben jede Version oben mit `^` versehen, damit wir automatisch auf die neueste `minor.patch`-Version aktualisieren können, indem wir ausführen:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität. Für diese Updates müssen wir die `package.json` und den Code, der die Bibliothek nutzt, manuell aktualisieren und das Projekt ausführlich neu testen.

### www-Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das allererste, was diese Datei tut, ist, den "echten" Anwendungseinstiegspunkt (**app.js**, im Projektstamm) zu `require()`, der das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt. `require()` ist die [CommonJS-Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren. Hier geben wir das Modul **app.js** mit einem relativen Pfad an und lassen die optionale (.**js**) Dateiendung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import`-Anweisungen zum Importieren von JavaScript (ECMAScript) Modulen. Um diese Funktion zu nutzen, müssen Sie `"type": "module",` zu Ihrer Express **package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateiendung hinzufügen (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)). Während es Vorteile bei der Nutzung von `import` gibt, verwendet dieses Tutorial `require()`, um mit der [Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der restliche Code in dieser Datei richtet einen Node-HTTP-Server ein, wobei `app` auf einen bestimmten Port (definiert in einer Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist) gesetzt wird, und beginnt mit dem Abhören und Berichten von Serverfehlern und Verbindungen. Für jetzt müssen Sie nicht wirklich etwas anderes über den Code wissen (alles in dieser Datei ist "Standard"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express`-Anwendungsobjekt (standardmäßig `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der folgende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der oben genannten **www**-Einstiegspunktdatei ist es dieses `module.exports`-Objekt, das dem Aufrufer bereitgestellt wird, wenn diese Datei importiert wird.

Sehen wir uns die **app.js**-Datei im Detail an. Zuerst importieren wir nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben, sowie _path_, eine Kern-Bibliothek von Node für das Parsen von Datei- und Verzeichnispfaden.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code für die Handhabung bestimmter Sätze verwandter "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, um sich mit buchbezogenen Routen zu befassen.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich verwendet (das passiert ein kleines Stück weiter unten in der Datei).

Als Nächstes erstellen wir das `app`-Objekt mit unserem importierten _express_-Modul und richten dann die View (Template)-Engine ein. Es gibt zwei Teile zur Einrichtung der Engine. Zuerst setzen wir den `"views"`-Wert, um den Ordner anzugeben, in dem die Templates gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"`-Wert, um die Vorlagenbibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die oben importierten _middleware_-Bibliotheken in die Anforderungsverarbeitungskette einzufügen. Zum Beispiel sind `express.json()` und `express.urlencoded()` notwendig, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen. Nach diesen Bibliotheken verwenden wir auch die `express.static` Middleware, die _Express_ dazu bringt, alle statischen Dateien im **/public** Verzeichnis im Projektstamm bereitzustellen.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Jetzt, da alle anderen Middleware eingerichtet sind, fügen wir unseren (vorher importierten) Routenbearbeitungscode zur Anforderungsverarbeitungskette hinzu. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Seite definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für Routen behandelt, wie sie in den importierten Dateien definiert sind. Wenn das importierte **users**-Modul also eine Route für `/profile` definiert, würden Sie auf diese Route bei `/users/profile` zugreifen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

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

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Der letzte Schritt besteht darin, es zu den Modulexports hinzuzufügen (dies ist, was es **/bin/www** ermöglicht, es zu importieren).

```js
module.exports = app;
```

### Routen

Die Routendatei **/routes/users.js** ist unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen). Zuerst lädt es das _express_ Modul und verwendet es, um ein `express.Router`-Objekt zu erhalten. Dann spezifiziert es eine Route auf diesem Objekt und exportiert schließlich den Router aus dem Modul (dies ist, was es ermöglicht, die Datei in **app.js** zu importieren).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert eine Rückruffunktion, die jedes Mal aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit dem richtigen Muster erkannt wird. Das passende Muster ist die Route, die beim Import der Datei angegeben wurde (`"/users"`) plus das, was in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit node ausführen und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Ein interessantes Detail ist oben, dass die Rückruffunktion das dritte Argument `next` hat und daher eine Middleware-Funktion ist und keine einfache Routencallback. Obwohl der Code das Argument `next` derzeit nicht verwendet, kann es in Zukunft nützlich sein, wenn Sie mehrere Routenhändler für den `'/'`-Routenpfad hinzufügen möchten.

### Ansichten (Templates)

Die Ansichten (Templates) werden im **/views**-Verzeichnis gespeichert (wie in **app.js** angegeben) und sind mit der Dateiendung **.pug** versehen. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein angegebenes Template zusammen mit den Werten benannter Variablen, die in einem Objekt übergeben werden, zu rendern und das Ergebnis dann als Antwort zu senden. Im untenstehenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort mit dem Template "index" rendert und dabei die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template zur obigen Route wird unten gezeigt (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) an der im Template angegebenen Stelle eingefügt wird.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool"_ bei der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen

## Zusammenfassung

Sie haben jetzt ein Skelett für Ihre [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes werden wir das Skelett so modifizieren, dass es als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
