---
title: "Express Tutorial Teil 2: Erstellung einer Skeleton-Website"
short-title: "2: Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt Ihnen, wie Sie ein "Skelett"-Website-Projekt erstellen können, welches Sie anschließend mit sitespezifischen Routen, Templates/Ansichten und Datenbankabfragen füllen können.

> [!WARNING]
> Das Express-Tutorial ist für Express-Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

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
        In der Lage zu sein, eigene neue Website-Projekte mit dem <em>Express-Anwendungsgenerator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool eine "Skeleton"-Website erstellen können, die Sie dann mit sitespezifischen Routen, Ansichten/Templates und Datenbankaufrufen füllen können. In diesem Fall verwenden wir das Tool, um das Framework für unsere [Lokale Bibliothek-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu der wir später den gesamten anderen Code hinzufügen werden, der von der Website benötigt wird. Der Prozess ist extrem einfach und erfordert lediglich, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen, wobei optional auch die Template-Engine des Standorts und der CSS-Generator angegeben werden können.

Die folgenden Abschnitte zeigen, wie Sie den Anwendungsgenerator aufrufen und bieten eine kleine Erklärung zu den verschiedenen Ansicht-/CSS-Optionen. Wir werden auch erklären, wie die Skeleton-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express-Anwendungsgenerator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige mögliche Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Seite hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Für Informationen über eine _minimale_ Express-Anwendung siehe [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express-Anwendungsgenerator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten davon in diesem Tutorial in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) geändert, da wir moderne JavaScript-Praxis demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der vom _Express-Anwendungsgenerator_ erstellten **package.json** definiert sind.
>   Diese sind nicht (notwendigerweise) die neueste Version, und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine reale Anwendung in die Produktion einführen.

## Verwendung des Anwendungsgenerators

Sie sollten den Generator bereits installiert haben im Rahmen des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment). Zur schnellen Erinnerung: Sie installieren das Generator-Tool systemweit mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat mehrere Optionen, die Sie in der Befehlszeile mit dem `--help` (oder `-h`) Befehl anzeigen können:

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

Sie können angeben, dass express ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ View-Engine und einfachem CSS erstellt (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine Ansicht (Template-)Engine mit `--view` und/oder eine CSS-Generator-Engine mit `--css` auswählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` usw.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express-Anwendungsgenerator_ ermöglicht es Ihnen, eine Reihe von beliebten View/Templating-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade auswählt, wenn Sie keine Ansichtsoption angeben. Express selbst kann auch eine große Anzahl anderer Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die nicht vom Generator unterstützt wird, siehe [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation für Ihre Ziel-View-Engine.

Im Allgemeinen sollten Sie eine Templating-Engine auswählen, die alle benötigten Funktionen bietet und es Ihnen ermöglicht, schneller produktiv zu werden – oder mit anderen Worten, auf dieselbe Weise, wie Sie jede andere Komponente auswählen! Einige der Dinge, die Sie beim Vergleichen von Template-Engines berücksichtigen sollten:

- Zeit zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, ist es wahrscheinlich, dass es mit dieser Sprache schneller produktiv sein wird. Wenn nicht, sollten Sie die relative Lernkurve für die Kandidaten-Templating-Engines berücksichtigen.
- Beliebtheit und Aktivität — Überprüfen Sie die Beliebtheit der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu bekommen, wenn während der gesamten Lebensdauer der Website Probleme auftreten.
- Stil — Einige Template-Engines verwenden spezifische Markup, um eingefügten Inhalt in "gewöhnlichem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel unter Verwendung von Einrückung und Blocknamen).
- Leistung/Renderzeit.
- Funktionen — Sie sollten erwägen, ob die von Ihnen betrachteten Engines über die folgenden Funktionen verfügen:

  - Layout-Vererbung: Ermöglicht es Ihnen, eine Basistemplate zu definieren und dann nur die Teile davon "zu erben", die Sie für eine bestimmte Seite anders haben möchten. Dies ist in der Regel ein besserer Ansatz als das Erstellen von Templates durch Einschließen einer Anzahl erforderlicher Komponenten oder das Erstellen eines Templates von Grund auf jedes Mal.
  - "Include"-Unterstützung: Ermöglicht es Ihnen, Templates durch Einfügen anderer Templates aufzubauen.
  - Koncise Variablen- und Schleifensteuerungssyntax.
  - Fähigkeit zur Filterung von Variablenwerten auf Templateebene, z. B. Variablen in Großbuchstaben umzuwandeln oder einen Datumswert zu formatieren.
  - Fähigkeit, andere Ausgabeformate als HTML zu generieren, wie JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, ermöglicht dies die Möglichkeit, das gesamte oder den Großteil des Renderings auf der Clientseite vorzunehmen.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, um Ihnen beim Vergleichen der verschiedenen Optionen zu helfen!

Für dieses Projekt verwenden wir die [Pug](https://pugjs.org/api/getting-started.html)-Templating-Engine (dies ist die kürzlich umbenannte Jade-Engine), da sie eine der beliebtesten Express/JavaScript-Templating-Sprachen ist und vom Generator standardmäßig unterstützt wird.

### Welche CSS Stylesheet-Engine sollte ich verwenden?

Der _Express-Anwendungsgenerator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das für die Verwendung der häufigsten CSS Stylesheet-Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben erschweren. Mit den CSS Stylesheet-Engines kann man eine leistungsstärkere Syntax zum Definieren Ihres CSS verwenden und die Definition dann in das altbekannte CSS für Browser kompilieren.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, mit der Ihr Team am produktivsten sein kann. Für dieses Projekt werden wir Vanilla-CSS (die Standardeinstellung) verwenden, da unsere CSS-Anforderungen nicht ausreichend kompliziert sind, um etwas anderes zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_ Anwendungen können jedes [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Erfordernisse für das Datenbankmanagement).

Wir werden in einem späteren Artikel diskutieren, wie man sich mit einer Datenbank integriert.

## Erstellen des Projekts

Für die Beispiel- _Lokale Bibliothek_ App, die wir entwickeln werden, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ mit der _Pug_-Template-Bibliothek und keiner CSS-Engine.

Zuerst navigieren Sie zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express-Anwendungsgenerator_ im Befehlsfenster wie folgt aus:

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten installiert werden (wie in der **package.json** Datei angegeben) und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt wird.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Ausführen der Skeleton-Website

An dieser Stelle haben wir ein vollständiges Skeleton-Projekt. Die Website _tut_ tatsächlich noch nicht viel, aber es ist einen Versuch wert, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zunächst die Abhängigkeiten (der `install`-Befehl lädt alle im **package.json** des Projekts aufgelisteten Abhängigkeitspakete herunter).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - In der Windows CMD-Eingabeaufforderung verwenden Sie diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - In Windows PowerShell verwenden Sie diesen Befehl:

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

![Browser für die Standard-Express-Anwendungsgenerator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch nur mit dem `npm start`-Befehl starten. Die Angabe der DEBUG-Variable wie gezeigt, ermöglicht die Konsolenprotokollierung/-debugging. Zum Beispiel sehen Sie beim Besuch der oben genannten Seite eine Debug-Ausgabe wie diese:
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

## Automatisches Serverneustarten bei Dateiänderungen

Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr mühsam, jedes Mal den Server stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen. Es lohnt sich daher, die Automatisierung des Neustarts des Servers zu automatisieren, wenn dies erforderlich ist.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dieses wird üblicherweise global installiert (da es sich um ein "Tool" handelt), aber hier werden wir es als _Entwicklerabhängigkeit_ lokal installieren und verwenden, damit alle Entwickler, die mit dem Projekt arbeiten, es automatisch installieren können, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehlsbefehl im Stammverzeichnis des Skeleton-Projekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich entscheiden, [nodemon](https://github.com/remy/nodemon) dennoch global auf Ihrem Rechner und nicht nur in der **package.json** Ihres Projekts zu installieren:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie nun einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Kommandozeile starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es aus einem npm-Skript aufrufen, da npm alle über die installierten Pakete Bescheid weiß. Finden Sie den `scripts`-Abschnitt Ihrer package.json. Zunächst wird es eine Zeile enthalten, die mit `"start"` beginnt. Aktualisieren Sie es, indem Sie ein Komma am Ende dieser Zeile hinzufügen und die `"devstart"`- und `"serverstart"`-Zeilen hinzufügen:

- Auf Linux und macOS sieht der Skriptabschnitt so aus:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Auf Windows sieht der Wert von "serverstart" stattdessen so aus (wenn Sie die Befehlsaufforderung verwenden):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können nun den Server fast genauso wie zuvor starten, aber mit dem `devstart`-Befehl.

> [!NOTE]
> Wenn Sie jetzt eine Datei im Projekt bearbeiten, wird der Server neu starten (oder Sie können ihn jederzeit neu starten, indem Sie `rs` auf der Kommandozeile eingeben). Sie müssen den Browser jedoch immer noch neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` aufrufen, da "start" tatsächlich ein npm-Befehl ist, der auf das benannte Skript abgebildet ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, also macht es Sinn, ein neues Skriptkommando zu erstellen.
>
> Das in den Skripten in der obenstehenden **package.json** hinzugefügte `serverstart`-Kommando ist ein sehr gutes Beispiel. Mit diesem Ansatz muss man keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der dem Skript hinzugefügte Befehl nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Sehen wir uns nun das Projekt an, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt, jetzt, da Sie die Abhängigkeiten installiert haben, hat die folgende Dateistruktur (Dateien sind die Elemente, die **nicht** mit "/" beginnen).
Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und andere Informationen.
Es definiert auch ein Startskript, das den Anwendungseinstiegspunkt aufruft, die JavaScript-Datei **/bin/www**.
Diese richtet einige der Anwendungs-Fehlerbehandlungs-Mechanismen ein und lädt dann **app.js**, um den Rest der Arbeit zu erledigen.
Die App-Routen sind in separaten Modulen im Verzeichnis **routes/** abgelegt.
Die Templates sind im **/views** Verzeichnis abgelegt.

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

Die folgenden Abschnitte beschreiben die Dateien im Detail.

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

Der Skripten-Abschnitt definiert zunächst ein "_start_"-Skript, welches wir aufrufen, wenn wir `npm start` aufrufen, um den Server zu starten (dieses Skript wurde vom _Express-Anwendungsgenerator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Automatisches Serverneustarten bei Dateiänderungen](#automatisches_serverneustarten_bei_dateiänderungen) bearbeitet, indem wir die Skripte _devstart_ und _serverstart_ hinzugefügt haben.
Diese können verwendet werden, um die gleiche **./bin/www** Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das _express_ Paket und das Paket für unsere ausgewählte View-Engine (_pug_).
Zusätzlich haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu analysieren und `req.cookies` zu befüllen (bietet im Wesentlichen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein winziges Node-Debugging-Dienstprogramm, modelliert nach der Debugging-Technik des Node-Kerns.
- [morgan](https://www.npmjs.com/package/morgan): Eine HTTP Anfrage-Logger Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie bei Bedarf HTTP-Fehler (für Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet.
Ersetzen Sie den Abhängigkeiten-Abschnitt Ihrer `package.json` Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens angibt:

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
> Es ist eine gute Idee, regelmäßig auf die neueste kompatible Version Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch als Teil eines kontinuierlichen Integrations-Setups erfolgen.
>
> Normalerweise bleiben Bibliotheksaktualisierungen auf die Minor- und Patchversion kompatibel.
> Wir haben jede Version oben mit `^` versehen, sodass wir automatisch auf die neueste `Minor.Patch`-Version aktualisieren können, indem wir Folgendes ausführen:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität.
> Für diese Aktualisierungen müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfangreich neu testen.

### www Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das erste, was diese Datei tut, ist, den "echten" Einstiegspunkt der Anwendung (**app.js**, im Projektstamm) aufzurufen, der das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt.
`require()` ist die [CommonJS Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier spezifizieren wir das **app.js**-Modul unter Verwendung eines relativen Pfads und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und höher unterstützen ES6 `import`-Anweisungen zum Importieren von JavaScript (ECMAScript)-Modulen.
> Um diese Funktion zu nutzen, müssen Sie `"type": "module",` zu Ihrer Express **package.json** Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einschließen (weitere Informationen finden Sie in der [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl es Vorteile bei der Verwendung von `import` gibt, verwendet dieses Tutorial `require()`, um mit [der Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der Rest des Codes in dieser Datei richtet einen Node-HTTP-Server ein, wobei `app` auf einen spezifischen Port gesetzt wird (definiert in einer Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist), und beginnt zu lauschen und Serverfehler und Verbindungen zu melden. Im Moment müssen Sie nicht wirklich viel mehr über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber Sie können ihn gerne überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (standardmäßig `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der untenstehende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der **www** Einstiegspunktdatei oben ist es dieses `module.exports`-Objekt, welches an den Aufrufer geliefert wird, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js** Datei im Detail durchgehen. Zunächst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, darunter _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben; und _path_, welches eine Kernbibliothek von Node zum Parsen von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zum Umgang mit bestimmten Sätzen verwandter "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei hinzufügen, die sich mit buchbezogenen Routen befasst.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich verwendet (dies geschieht nur etwas weiter unten in der Datei).

Als nächstes erstellen wir das `app` Objekt mit unserem importierten _express_ Modul und verwenden es dann, um die View (Template) Engine einzurichten. Es gibt zwei Teile zum Einrichten der Engine. Zuerst setzen wir den `"views"` Wert, um den Ordner zu spezifizieren, in welchem die Templates gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"` Wert, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Die nächste Gruppe von Funktionen ruft `app.use()` auf, um die oben importierten _middleware_ Bibliotheken in die Anfragenbearbeitungskette hinzuzufügen.
Zum Beispiel werden `express.json()` und `express.urlencoded()` benötigt, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu befüllen.
Nach diesen Bibliotheken verwenden wir auch die `express.static`-Middleware, welche Express alle statischen Dateien im **/public** Verzeichnis im Projektstamm bereitstellt.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nun, da alle anderen Middleware eingerichtet sind, fügen wir unseren (bereits importierten) Routings-Code in die Anfragenbearbeitungskette ein. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Seite definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für Routen behandelt, die in den importierten Dateien definiert sind.
> Wenn beispielsweise das importierte **users**-Modul eine Route für `/profile` definiert, würden Sie auf diese Route unter `/users/profile` zugreifen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

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

Das Express-Anwendungsobjekt (app) ist jetzt vollständig konfiguriert. Der letzte Schritt ist, es zu den Modulexporten hinzuzufügen (dies ist, womit es von **/bin/www** importiert werden kann).

```js
module.exports = app;
```

### Routen

Die Routendatei **/routes/users.js** ist unten gezeigt (Routendateien haben eine ähnliche Struktur, sodass wir **index.js** nicht auch zeigen müssen).
Zuerst lädt es das _express_ Modul und verwendet es, um ein `express.Router` Objekt zu erhalten.
Dann legt es eine Route auf diesem Objekt fest und exportiert zuletzt den Router aus dem Modul (dies ermöglicht es, die Datei in **app.js** importiert zu werden).

```js
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Callback, der immer dann aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit dem richtigen Muster erkannt wird. Das passende Muster ist die beim Importieren des Moduls angegebene Route (`"/users"`) plus was auch immer in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit node starten und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Eines der interessanten Dinge oben ist, dass die Callback-Funktion das dritte Argument `next` hat und daher eine Middleware-Funktion ist, anstatt eines einfachen Routencallbacks. Obwohl der Code derzeit das `next` Argument nicht verwendet, könnte es in Zukunft nützlich sein, wenn Sie mehrere Routenhandler zu dem `'/'`-Routenpfad hinzufügen möchten.

### Ansichten (Templates)

Die Ansichten (Templates) sind im **/views** Verzeichnis gespeichert (wie in **app.js** angegeben) und haben die Dateiendung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein bestimmtes Template zusammen mit den Werten von benannten Variablen, die in einem Objekt übergeben werden, zu rendern und dann das Ergebnis als Antwort zu senden. Im folgenden Code aus **/routes/index.js** sehen Sie, wie diese Route eine Antwort mit dem Template "index" rendert und die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die oben genannte Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) an der im Template angegebenen Stelle eingefügt wird.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" auf der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server starten und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben jetzt ein Skeleton-Website-Projekt für die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als nächstes werden wir beginnen, das Skeleton so zu modifizieren, dass es als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express-Anwendungsgenerator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
