---
title: "Express Tutorial Teil 2: Erstellen eines Grundgerüsts für eine Website"
short-title: "2: Skeleton-Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skeleton"-Website-Projekt erstellen können, das Sie dann mit sitzspezifischen Routen, Templates/Views und Datenbankaufrufen ausstatten können.

> [!WARNING]
> Das Express-Tutorial ist für Express-Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

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

## Überblick

Dieser Artikel zeigt, wie Sie mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool eine "Skeleton"-Website erstellen können, die Sie dann mit sitzspezifischen Routen, Templates/Views und Datenbankaufrufen ausstatten können. In diesem Fall werden wir das Tool verwenden, um das Framework für unsere [lokale Bibliotheks-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu dem wir später den gesamten anderen Code hinzufügen werden, den die Website benötigt. Der Prozess ist äußerst einfach und erfordert nur, dass Sie den Generator mit einem neuen Projektnamen in der Befehlszeile aufrufen und optional auch die Template-Engine und den CSS-Generator der Website angeben.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Anwendungsgenerator aufrufen können, und bieten eine kleine Erklärung zu den verschiedenen View-/CSS-Optionen. Wir erklären auch, wie die Skeleton-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige mögliche Methode zur Strukturierung Ihrer Dateien und Verzeichnisse. Die generierte Website hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Weitere Informationen zu einer _minimalen_ Express-Anwendung finden Sie im [Hello world-Beispiel](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten davon zu [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige zu [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) im Tutorial geändert, da wir moderne JavaScript-Praktiken demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der vom _Express Application Generator_ erstellten **package.json** definiert sind.
>   Diese sind nicht (unbedingt) die neueste Version und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine echte Anwendung in der Produktion bereitstellen.

## Verwendung des Anwendungs-Generators

Sie sollten den Generator bereits installiert haben, als Teil des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment). Zur schnellen Erinnerung: Sie installieren das Generator-Tool site-weit mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat eine Reihe von Optionen, die Sie in der Befehlszeile mit dem `--help` (oder `-h`) Befehl anzeigen können:

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

Sie können `express` angeben, um ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ View-Engine und plain CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View-(Template-)Engine mit `--view` und/oder eine CSS-Generations-Engine mit `--css` auswählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ erlaubt Ihnen die Konfiguration einer Reihe von beliebten View/Templating-Engines, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade auswählt, wenn Sie keine View-Option angeben. Express selbst kann auch eine Vielzahl weiterer Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, dann sehen Sie unter [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und in der Dokumentation zu Ihrer Ziel-View-Engine nach.

Allgemein gesprochen, sollten Sie eine Templating-Engine auswählen, die alle benötigten Funktionen liefert und Sie schneller produktiv werden lässt — oder anders gesagt, in der gleichen Weise wie Sie jede andere Komponente wählen würden! Einige der Überlegungen beim Vergleich von Template-Engines:

- Produktivitätszeit — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, werden sie wahrscheinlich schneller produktiv mit dieser Sprache. Wenn nicht, sollten Sie die relative Lernkurve für die in Frage kommenden Templating-Engines in Betracht ziehen.
- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu erhalten, wenn Probleme während der Lebensdauer der Website auftreten.
- Stil — Einige Template-Engines verwenden spezifisches Markup, um eingefügten Inhalt innerhalb "gewöhnlichem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel durch Verwendung von Einrückungen und Blocknamen).
- Leistungsfähigkeit/Rendering-Zeit.
- Funktionen — Sie sollten berücksichtigen, ob die Engines, die Sie betrachten, über die folgenden Funktionen verfügen:

  - Layout-Vererbung: Ermöglicht Ihnen die Definition eines Basistemplates und dann das "Vererben" nur der Teile davon, die Sie für eine bestimmte Seite unterschiedlich haben möchten. Dies ist typischerweise eine bessere Herangehensweise als das Erstellen von Templates durch Einfügen einer Vielzahl von benötigten Komponenten oder das Erstellen eines Templates von Grund auf jedes Mal.
  - "Include"-Support: Ermöglicht Ihnen das Aufbau von Templates durch Einbeziehen anderer Templates.
  - Knackige Variable und Schleifenkontrollsyntax.
  - Möglichkeit, Variable-Werte auf Template-Ebene zu filtern, wie z.B. Variablen groß zu machen oder ein Datumswert zu formatieren.
  - Möglichkeit, Ausgabformate zu generieren, die nicht HTML sind, wie JSON oder XML.
  - Unterstützung asynchroner Operationen und Streaming.
  - Clientseitige Funktionen. Wenn eine Templating-Engine clientseitig verwendet werden kann, ermöglicht dies die Möglichkeit, das gesamte oder den größten Teil des Renderings clientseitig zu erledigen.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen helfen, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html)-Templating-Engine verwenden (dies ist die kürzlich umbenannte Jade-Engine), da sie eine der beliebtesten Express/JavaScript Templating-Sprachen ist und vom Generator out of the box unterstützt wird.

### Welche CSS Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht Ihnen, ein Projekt zu erstellen, das mit den gängigsten CSS-Stylesheet-Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben erschweren. CSS Stylesheet-Engines erlauben Ihnen die Verwendung einer leistungsfähigeren Syntax zur Definition Ihrer CSS und dann die Kompilierung der Definition in simples CSS für Browser.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, die Ihrem Team die größte Produktivität ermöglicht. Für dieses Projekt werden wir vanillale CSS verwenden (die Standardeinstellung), da unsere CSS-Anforderungen nicht ausreichend kompliziert sind, um die Verwendung von etwas anderem zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_-Apps können jeden [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement).

Wir werden besprechen, wie man später in einem weiteren Artikel mit einer Datenbank integriert.

## Erstellen des Projekts

Für die Beispiel-App _Local Library_, die wir erstellen werden, erstellen wir ein Projekt mit dem Namen _express-locallibrary-tutorial_ unter Verwendung der _Pug_-Template-Bibliothek und keiner CSS-Engine.

Navigieren Sie zunächst zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ in der Befehlszeile aus, wie gezeigt:

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

Am Ende der Ausgabe bietet der Generator Anweisungen zur Installation der Abhängigkeiten (wie in der **package.json**-Datei aufgeführt) und zur Ausführung der Anwendung auf verschiedenen Betriebssystemen.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen zu `const`, bevor Sie fortfahren (das verbleibende Tutorial geht davon aus, dass Sie dies getan haben).

## Ausführen der Skeleton-Website

An diesem Punkt haben wir ein vollständiges Skeleton-Projekt. Die Website tut tatsächlich noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zunächst die Abhängigkeiten (der `install`-Befehl wird alle in der **package.json**-Datei des Projekts aufgelisteten Abhängigkeitspakete abrufen).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - Verwenden Sie auf dem Windows CMD-Prompt diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie auf Windows PowerShell diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle sind in diesem Tutorial nicht abgedeckt (Die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie die Windows CMD-Prompt verwenden).

   - Verwenden Sie auf macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für standardmäßige Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben nun eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch einfach mit dem `npm start`-Befehl starten. Das Angeben der DEBUG-Variable wie gezeigt, aktiviert die Konsolenprotokollierung/Debugging. Wenn Sie zum Beispiel die obige Seite besuchen, sehen Sie Debug-Ausgaben wie diese:
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

## Aktivieren des Server-Neustarts bei Dateiänderungen

Jede Änderung, die Sie an Ihrer Express-Website vornehmen, ist derzeit nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr lästig, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen, daher ist es sinnvoll, sich die Zeit zu nehmen, um den Server automatisiert neu starten zu lassen, wann immer dies erforderlich ist.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird üblicherweise global installiert (da es sich um ein "Werkzeug" handelt), aber hier werden wir es lokal als _Entwicklerabhängigkeit_ installieren und verwenden, damit jeder Entwickler, der mit dem Projekt arbeitet, es automatisch bekommt, wenn er die Anwendung installiert. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skeleton-Projekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie weiterhin [nodemon](https://github.com/remy/nodemon) global auf Ihrem System installieren und nicht nur in der **package.json**-Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile aus starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es von einem npm-Skript aus aufrufen, da npm alle installierten Pakete kennt. Finden Sie den `scripts`-Abschnitt Ihrer package.json. Anfänglich enthält dieser nur eine Zeile, die mit `"start"` beginnt. Aktualisieren Sie diesen, indem Sie ein Komma am Ende dieser Zeile setzen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Unter Linux und macOS sieht der Skripts-Abschnitt so aus:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Unter Windows würde der Wert "serverstart" stattdessen so aussehen (wenn Sie die Eingabeaufforderung verwenden):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können den Server jetzt fast genauso starten wie zuvor, nur mit dem `devstart`-Befehl.

> [!NOTE]
> Wenn Sie jetzt eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit neu starten, indem Sie `rs` auf der Eingabeaufforderung eingeben). Sie müssen den Browser trotzdem neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von `npm start` aufrufen, weil "start" tatsächlich ein npm-Befehl ist, welcher dem benannten Skript zugeordnet ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, daher macht es Sinn, ein neues Skriptkommando zu erstellen.
>
> Der `serverstart`-Befehl, der den oben genannten Skripten in der **package.json** hinzugefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der dem Skript hinzugefügte spezielle Befehl nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Schauen wir jetzt das Projekt an, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt hat, nachdem Sie die Abhängigkeiten installiert haben, die folgende Dateistruktur (die Items sind die **nicht** mit "/" gekennzeichneten Items).
Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und andere Informationen.
Es definiert auch ein Startskript, das den Anwendungs-Einstiegspunkt aufruft, die JavaScript-Datei **/bin/www**.
Diese setzt einige der Applikations-Fehlerbehandlungen auf und lädt dann **app.js**, um den Rest der Arbeit zu erledigen.
Die App-Routen sind in separaten Modulen im **routes/**-Verzeichnis gespeichert.
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

Die folgenden Abschnitte beschreiben die Dateien im Detail.

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

Der Skriptbereich definiert zunächst ein "_start_"-Skript, das aufgerufen wird, wenn wir `npm start` zum Starten des Servers aufrufen (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Scriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Aktivieren des Server-Neustarts bei Dateiänderungen](#aktivieren_des_server-neustarts_bei_dateiänderungen) geändert, indem wir die _devstart_ und _serverstart_ Skripte hinzugefügt haben.
Diese können verwendet werden, um die gleiche **./bin/www**-Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das _express_-Paket und das Paket für unsere ausgewählte View-Engine (_pug_).
Zusätzlich haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu parsen und `req.cookies` zu füllen (im Wesentlichen bietet es eine komfortable Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Utility zur Fehlerbehebung in Node, das sich an der Node Core-Fehlerbehebungstechnik orientiert.
- [morgan](https://www.npmjs.com/package/morgan): Eine HTTP-Request-Logger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellung von HTTP-Fehlern, wo nötig (für Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet.
Ersetzen Sie den Abhängigkeitsbereich Ihrer `package.json`-Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens spezifiziert:

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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch im Rahmen eines Continuous-Integration-Setups erfolgen.
>
> Normalerweise bleiben Bibliotheksupdates auf die Minor- und Patch-Versionen kompatibel.
> Wir haben jede Version oben mit `^` versehen, sodass wir automatisch auf die neueste `minor.patch`-Version aktualisieren können, indem wir:
>
> ```bash
> npm update --save
> ```
>
> führen.
> Major-Versionen ändern die Kompatibilität.
> Für diese Updates müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfangreich neu testen.

### www-Datei

Die Datei **/bin/www** ist der Anwendungseinstiegspunkt! Als erstes tut diese `require()` den "echten" Anwendungseinstiegspunkt (**app.js**, im Projektstamm), der das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt einrichtet und zurückgibt.
`require()` ist die [CommonJS-Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier legen wir das **app.js**-Modul mit einem relativen Pfad fest und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und neuere Versionen unterstützen ES6 `import`-Anweisungen zum Import von JavaScript (ECMAScript) Modulen.
> Um dieses Feature zu nutzen, müssen Sie `"type": "module"` zu Ihrer Express **package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einschließen (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl es Vorteile gibt, `import` zu verwenden, verwendet dieses Tutorial `require()`, um mit der [Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der Rest des Codes in dieser Datei richtet einen Node-HTTP-Server ein, mit `app` auf einem spezifischen Port (definiert durch eine Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist), und beginnt mit dem Hören auf und der Meldung von Serverfehlern und Verbindungen. Im Moment müssen Sie nichts anderes über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, es zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express`-Anwendungsobjekt (benannt `app`, per Konvention), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der untenstehende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

Zurück in der **www**-Einstiegsdatei oben ist es dieses `module.exports`-Objekt, das dem Aufrufer bereitgestellt wird, wenn diese Datei importiert wird.

Arbeiten wir den **app.js**-Dateicode im Detail durch. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben; und _path_, das eine zentrale Node-Bibliothek ist, zum Parsen von Datei- und Verzeichniswegen.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zur Behandlung von bestimmten miteinander verbundenen "Routen" (URL-Pfade). Wenn wir die Skeleton-Anwendung erweitern, zum Beispiel um alle Bücher der Bibliothek aufzulisten, fügen wir eine neue Datei hinzu, um mit buchbezogenen Routen umzugehen.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich verwendet (das passiert etwas weiter unten in der Datei).

Als nächstes erstellen wir das `app`-Objekt unter Verwendung unseres importierten _express_-Moduls und richten es dann ein, um die View-(Template-)Engine festzulegen. Es gibt zwei Teile zum Einrichten der Engine. Zuerst setzen wir den `"views"`-Wert, um den Ordner anzugeben, in dem die Templates gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"`-Wert, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Das nächste Set von Funktionen ruft `app.use()` auf, um die oben importierten _Middleware_-Bibliotheken in die Anfragendurchlaufkette hinzuzufügen.
Zum Beispiel `express.json()` und `express.urlencoded()` werden benötigt, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen.
Nach diesen Bibliotheken verwenden wir auch die `express.static`-Middleware, die _Express_ alle statischen Dateien im **/public**-Verzeichnis im Projektstamm bereitstellt.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Jetzt, da alle anderen Middleware-Einstellungen gesetzt sind, fügen wir unseren (zuvor importierten) Route-Handling-Code in die Anfragendurchlaufkette ein. Der importierte Code wird bestimmte Routen für die unterschiedlichen _Teile_ der Seite festlegen:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für in den importierten Dateien definierte Routen behandelt.
> Wenn das importierte **users**-Modul zum Beispiel eine Route für `/profile` definiert, würden Sie auf diese Route bei `/users/profile` zugreifen. Weitere Informationen zu Routen werden wir in einem späteren Artikel besprechen.

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

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Der letzte Schritt besteht darin, es den Modulexports hinzuzufügen (dadurch kann es von **/bin/www** importiert werden).

```js
module.exports = app;
```

### Routen

Die Routendatei **/routes/users.js** ist unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen).
Zuerst lädt es das _express_-Modul und verwendet es, um ein `express.Router`-Objekt zu erhalten.
Dann spezifiziert es eine Route auf diesem Objekt und exportiert schließlich den Router aus dem Modul (dadurch kann die Datei in **app.js** importiert werden).

```js
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Callback, der jedes Mal aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit dem richtigen Muster erkannt wird. Das übereinstimmende Muster ist die Route, die bei der Modulimportierung (`"/users"`) angegeben wird, plus das, was in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie das aus, indem Sie den Server mit Node starten und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Eine interessante Sache oben ist, dass die Callback-Funktion das dritte Argument `next` hat und daher eine Middleware-Funktion anstelle eines einfachen Route-Callbacks ist. Obwohl der Code das `next`-Argument derzeit nicht verwendet, könnte es in Zukunft nützlich sein, falls Sie mehrere Routenhandler für den `'/'`-Routenpfad hinzufügen möchten.

### Views (Templates)

Die Views (Templates) sind im **/views**-Verzeichnis gespeichert (wie in **app.js** angegeben) und haben die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein angegebenes Template zusammen mit den Werten benannter Variablen, die in ein Objekt übergeben werden, zu rendern und das Ergebnis als Antwort zu senden. Im folgenden Code aus **/routes/index.js** sehen Sie, wie diese Route eine Antwort unter Verwendung des Templates "index" rendert und die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die obige Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo es im Template angegeben ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" an der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben nun ein Skeleton-Website-Projekt für die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie jetzt auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Views für unsere lokale Bibliothek hinzuzufügen.

Als nächstes beginnen wir mit der Anpassung des Skeletons, damit es als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
