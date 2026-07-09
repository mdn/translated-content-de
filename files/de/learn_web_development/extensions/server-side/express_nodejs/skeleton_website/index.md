---
title: "Express-Tutorial Teil 2: Erstellung einer Skelett-Website"
short-title: "2: Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit sitespezifischen Routen, Templates/Ansichten und Datenbankaufrufen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Einrichtung einer Node-Entwicklungsumgebung</a>.
          Überprüfung des Express-Tutorials.
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

Dieser Artikel zeigt, wie man mit dem [Express Application Generator](https://expressjs.com/en/starter/generator/) Tool eine "Skelett"-Website erstellen kann, die dann mit sitespezifischen Routen, Ansichten/Templates und Datenbankaufrufen gefüllt werden kann. In diesem Fall verwenden wir das Tool, um das Framework für unsere [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu dem wir später den gesamten anderen benötigten Code hinzufügen werden. Der Prozess ist extrem einfach und erfordert nur, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen und optional auch die Template-Engine und den CSS-Generator der Website angeben.

Die folgenden Abschnitte zeigen, wie Sie den Applikationsgenerator aufrufen und bieten eine kleine Erklärung zu den verschiedenen Ansichts/CSS-Optionen. Wir erklären auch, wie die Skelett-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht der einzige gangbare Weg, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Site hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Informationen über eine _minimale_ Express-Anwendung finden Sie im [Hello world-Beispiel](https://expressjs.com/en/starter/hello-world/) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten dieser Variablen zu [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige zu [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) im Tutorial geändert, da wir moderne JavaScript-Praktiken demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und andere Abhängigkeiten, die in der von dem _Express Application Generator_ erstellten **package.json** definiert sind.
>   Diese sind nicht (notwendigerweise) die neueste Version, und Sie sollten diese beim Bereitstellen einer realen Anwendung in Produktion aktualisieren.

## Verwendung des Applikationsgenerators

Sie sollten den Generator bereits als Teil der [Einrichtung einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung, Sie installieren das Generator-Tool site-wide mit dem npm-Paketmanager, wie hier dargestellt:

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

Sie können angeben, dass Express ein Projekt im gegenwärtigen Verzeichnis mit der _Jade_ Ansichtsengine und plain CSS erstellen soll (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine Ansicht (Template) Engine mit `--view` und/oder eine CSS-Genengine mit `--css` auswählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z. B. `--hogan`, `--ejs`, `--hbs` usw.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche Ansichtsengine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe von beliebten Ansichts-/Template-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl standardmäßig Jade ausgewählt wird, wenn Sie keine Ansicht-Option angeben. Express selbst kann auch eine große Anzahl anderer Template-Sprachen [out of the box unterstützen](https://github.com/expressjs/express/wiki#template-engines).

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die nicht vom Generator unterstützt wird, sehen Sie sich [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation) und die Dokumentation für Ihre Zielansichtsengine an.

Generell sollten Sie eine Template-Engine auswählen, die alle benötigten Funktionen bietet und es Ihnen ermöglicht, schneller produktiv zu werden – oder mit anderen Worten, genauso wie Sie jede andere Komponente auswählen! Einige Überlegungen bei der Auswahl von Templates:

- Zeit bis zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Template-Sprache hat, werden sie wahrscheinlich schneller produktiver in dieser Sprache. Wenn nicht, sollten Sie die relative Lernkurve für die verschiedenen Template-Engines in Betracht ziehen.
- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu bekommen, wenn während der Lebensdauer der Website Probleme auftreten.
- Stil — Einige Template-Engines verwenden spezielle Markup, um eingefügte Inhalte innerhalb von "normalem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel durch Einrückungen und Blocknamen).
- Leistung/Renderzeit.
- Funktionen — Sie sollten prüfen, ob die Engines, die Sie betrachten, die folgenden Funktionen haben:
  - Layout-Vererbung: Erlaubt Ihnen, ein Template als Basis zu definieren und dann nur die Teile davon zu "erben", die Sie für eine bestimmte Seite anders haben möchten. Dies ist typischerweise ein besserer Ansatz als Templates mit einer Reihe von benötigten Komponenten zu erstellen oder jedes Mal ein Template von Grund auf neu zu erstellen.
  - "Include"-Unterstützung: Erlaubt es Ihnen, Templates durch Einfügen anderer Templates aufzubauen.
  - Prägnante Variable- und Schleifensteuersyntax.
  - Fähigkeit, Variablewerte auf Template-Ebene zu filtern, z.B. Variablen in Großbuchstaben umzuwandeln oder ein Datumsformatierung vorzunehmen.
  - Möglichkeit, andere als HTML-Ausgabeformate wie JSON oder XML zu generieren.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Template-Engine auf dem Client verwendet werden kann, besteht die Möglichkeit, dass die gesamte oder ein Großteil der Renderings clientseitig erfolgt.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen helfen, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html) Template-Engine verwenden (früher "Jade" genannt), da dies eine der beliebtesten Express/JavaScript Template-Sprachen ist und vom Generator nativ unterstützt wird.

### Welche CSS-Stileengine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das für die Verwendung der beliebtesten CSS-Stileengines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS-Stileengines erlauben es Ihnen, mächtigere Syntax zum Definieren Ihres CSS zu verwenden und dann die Definition in normales CSS zu kompilieren, das von Browsern verwendet werden kann.

Wie bei Template-Engines sollten Sie die Stylesheet-Engine verwenden, die es Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt verwenden wir Vanilla-CSS (die Standardeinstellung), da unsere CSS-Anforderungen nicht kompliziert genug sind, um den Einsatz von etwas anderem zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/beinhaltet keine Datenbanken. _Express_-Apps können jeden [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration/) nutzen, der von _Node_ unterstützt wird (_Express_ selbst definiert keine zusätzlichen Verhaltensweisen/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel besprechen, wie man eine Datenbank integriert.

## Erstellen des Projekts

Für die Beispielanwendung _Local Library_, die wir erstellen werden, erstellen wir ein Projekt mit dem Namen _express-locallibrary-tutorial_, das die _Pug_ Template-Bibliothek und keine CSS-Engine verwendet.

Navigieren Sie zuerst zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ in der Eingabeaufforderung aus, wie folgt:

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
     > $env:DEBUG = "express-locallibrary-tutorial:*"; npm start

   run the app (Command Prompt (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

Am Ende der Ausgabe liefert der Generator Anweisungen, wie die Abhängigkeiten (wie in der **package.json** Datei angegeben) installiert werden und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt wird.

> [!NOTE]
> Die von dem Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var` Deklarationen zu `const`, bevor Sie fortfahren (der Rest des Tutorials setzt voraus, dass Sie dies getan haben).

## Ausführen der Skelett-Website

Zu diesem Zeitpunkt haben wir ein vollständiges Skelettprojekt. Die Website _tut_ eigentlich noch nicht sehr viel, aber es ist es wert, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zunächst die Abhängigkeiten (der `install` Befehl lädt alle in der **package.json** des Projekts aufgeführten Abhängigkeitspakete).

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
     $env:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (die bereitgestellten "Windows" Befehle gehen davon aus, dass Sie den Windows CMD-Prompt verwenden).

   - In macOS oder Linux verwenden Sie diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für Standard-Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 erreichbar ist.

> [!NOTE]
> Sie könnten das App auch einfach mit dem Befehl `npm start` starten. Das Angeben der DEBUG-Variable wie gezeigt, aktiviert Konsolenprotokollierung/Debugging. Zum Beispiel, wenn Sie die obige Seite besuchen, sehen Sie Debug-Ausgaben wie diese:
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

## Automatisches Serverneustart bei Dateiänderungen aktivieren

Alle Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr ärgerlich, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie Änderungen vornehmen, daher lohnt es sich, die Zeit zu investieren, um den Server automatisch neu zu starten, wenn nötig.

Ein praktisches Tool hierfür ist [nodemon](https://github.com/remy/nodemon). Normalerweise wird es global installiert (da es ein "Tool" ist), aber hier werden wir es lokal als _Entwicklerabhängigkeit_ installieren und verwenden, so dass alle Entwickler, die mit dem Projekt arbeiten, es automatisch installieren, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Root-Verzeichnis des Skelettprojekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrem Computer installieren möchten und nicht nur in die **package.json** Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json** Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
{
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Kommandozeile aus starten (es sei denn, wir fügen es dem Pfad hinzu). Wir können es jedoch von einem npm-Skript aus aufrufen, da npm weiß, welche Pakete installiert sind. Finden Sie den `scripts` Abschnitt Ihrer **package.json**. Zunächst wird es eine Zeile enthalten, die mit `"start"` beginnt. Aktualisieren Sie ihn, indem Sie ein Komma am Ende dieser Zeile setzen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Unter Linux und macOS sieht der Skriptenabschnitt so aus:

  ```json
  {
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    }
  }
  ```

- Unter Windows würde der Wert von "serverstart" stattdessen wie folgt aussehen (bei Verwendung der Eingabeaufforderung):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können jetzt den Server fast genau so starten wie zuvor, aber unter Verwendung des `devstart` Befehls.

> [!NOTE]
> Wenn Sie jetzt eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit neu starten, indem Sie `rs` in der Eingabeaufforderung eingeben). Sie müssen weiterhin den Browser neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` eingeben, weil "start" ein npm-Befehl ist, der dem benannten Skript zugeordnet ist. Wir hätten den Befehl im _start_ Skript ersetzen können, aber wir möchten nodemon nur während der Entwicklung verwenden, daher macht es Sinn, ein neues Skript zu erstellen.
>
> Der `serverstart` Befehl, der den Skripten in der **package.json** oben hinzugefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der spezielle Befehl, der dem Skript hinzugefügt wurde, nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Werfen wir einen Blick auf das Projekt, das wir gerade erstellt haben.
Wir werden im Laufe der Zeit einige kleine Änderungen daran vornehmen.

### Verzeichnisstruktur

Das generierte Projekt hat, nachdem Sie die Abhängigkeiten installiert haben, die folgende Dateistruktur (Dateien sind die Elemente, die **nicht** mit "/" beginnen).
Die **package.json** Datei definiert die Anwendungsabhängigkeiten und andere Informationen.
Es definiert auch ein Startskript, das den Anwendungseinstiegspunkt aufruft, die JavaScript-Datei **/bin/www**.
Diese führt einige der Anwendung Fehlerbehandlungen durch und lädt dann **app.js**, um den Rest der Arbeit zu erledigen.
Die Benutzerdefinierte Routen werden in separaten Modulen im Verzeichnis **routes/** gespeichert.
Die Templates werden im Verzeichnis **/views** gespeichert.

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
    "nodemon": "^3.1.10"
  }
}
```

Der Skriptenabschnitt definiert zuerst ein "_start_" Skript, das ist das, was wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Automatisches Serverneustart bei Dateiänderungen aktivieren](#automatisches_serverneustart_bei_dateiänderungen_aktivieren) geändert, indem wir die _devstart_ und _serverstart_ Skripte hinzugefügt haben.
Diese können verwendet werden, um dieselbe **./bin/www** Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben diskutiert).

```json
{
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  }
}
```

Die Abhängigkeiten enthalten das _express_ Paket und das Paket für unsere ausgewählte View-Engine (_pug_).
Darüber hinaus haben wir folgende Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu analysieren und `req.cookies` zu füllen (bietet im Wesentlichen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Utility, das nach node core's Debugging-Technik modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Anfrage-Logger-Middleware für node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie bei Bedarf HTTP-Fehler (für Express Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet.
Ersetzen Sie den Abhängigkeitsabschnitt Ihrer `package.json` Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zum Zeitpunkt des Schreibens angibt:

```json
{
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "debug": "^4.4.1",
    "express": "^5.1.0",
    "http-errors": "~2.0.0",
    "morgan": "^1.10.0",
    "pug": "3.0.3"
  }
}
```

Aktualisieren Sie dann Ihre installierten Abhängigkeiten mit dem Befehl:

```bash
npm install
```

> [!NOTE]
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren – dies kann sogar automatisch oder halbautomatisch als Teil eines {{Glossary("continuous_integration", "Continuous Integration")}} Setups erfolgen.
>
> Normalerweise bleiben Bibliotheksupdates auf die Minor- und Patchversionen kompatibel.
> Wir haben jede Version mit `^` oben vorangestellt, damit wir automatisch auf die neueste `minor.patch` Version aktualisieren können, indem wir:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität.
> Für diese Updates müssen wir das `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfangreich neu testen.

### www Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das allererste, was sie tut, ist das `require()` der echten Anwendungseinstiegspunktdatei (**app.js**, im Projektstamm), die das [`express()`](https://expressjs.com/en/api/) Anwendungsobjekt einrichtet und zurückgibt.
`require()` ist der [CommonJS-Weg](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier geben wir das **app.js** Modul unter Verwendung eines relativen Pfades an und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und höher unterstützen ES6 `import` Anweisungen zum Importieren von JavaScript (ECMAScript) Modulen.
> Um diese Funktion zu nutzen, müssen Sie `"type": "module"` in Ihre Express **package.json** Datei einfügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einfügen (weitere Informationen finden Sie in der [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl es Vorteile beim Verwenden von `import` gibt, verwendet dieses Tutorial `require()`, um mit [der Express-Dokumentation](https://expressjs.com/en/starter/hello-world/) übereinzustimmen.

Der Rest des Codes in dieser Datei richtet einen Node HTTP-Server ein, wobei `app` auf einen bestimmten Port gesetzt ist (definiert durch eine Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist), und beginnt mit dem Abhören und Melden von Serverfehlern und Verbindungen. Für jetzt müssen Sie nicht wirklich mehr über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (konventionell `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der untenstehende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

Zurück in der **www** Einstiegspunktdatei oben, ist es dieses `module.exports` Objekt, das dem Anrufer bereitgestellt wird, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js** Datei im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei unter Verwendung von `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben, und _path_, was eine Kernbibliothek von Node zum Parsen von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zur Behandlung bestimmter Sets verwandter "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, um beispielsweise alle Bücher in der Bibliothek aufzulisten, fügen wir eine neue Datei hinzu, die sich mit buchbezogenen Routen befasst.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An dieser Stelle haben wir das Modul nur _importiert_; wir haben seine Routen bisher noch nicht verwendet (das geschieht etwas weiter unten in der Datei).

Als Nächstes erstellen wir das `app` Objekt mit unserem importierten _express_ Modul und verwenden es dann, um die Ansichtsengine einzurichten. Es gibt zwei Teile zum Einrichten der Engine. Zuerst setzen wir den `"views"` Wert, um den Ordner zu spezifizieren, in dem die Templates gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"` Wert, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die oben importierten _Middleware_-Bibliotheken in die Anfragenverarbeitungskette einzufügen.
Zum Beispiel sind `express.json()` und `express.urlencoded()` notwendig, um [`req.body`](https://expressjs.com/en/api/#req.body) mit den Formfeldern zu bevölkern.
Nach diesen Bibliotheken verwenden wir auch die `express.static` Middleware, die _Express_ veranlasst, alle statischen Dateien im **/public** Verzeichnis im Projektstamm zu bedienen.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nachdem alle anderen Middleware eingerichtet sind, fügen wir unseren (zuvor importierten) Routenbehandlungscode der Anfragenverarbeitungskette hinzu. Der importierte Code definiert bestimmte Routen für die verschiedenen _Teile_ der Site:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix zu den in den importierten Dateien definierten Routen behandelt.
> Wenn das importierte **users** Modul eine Route für `/profile` definiert, würden Sie diese Route unter `/users/profile` erreichen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

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

Das Express Anwendungsobjekt (app) ist jetzt vollständig konfiguriert. Der letzte Schritt besteht darin, es zu den Modulexporten hinzuzufügen (dies ermöglicht es, dass es durch **/bin/www** importiert wird).

```js
module.exports = app;
```

### Routen

Die Routen-Datei **/routes/users.js** wird unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen).
Zuerst lädt es das _express_ Modul und verwendet es, um ein `express.Router` Objekt zu erhalten.
Dann gibt es eine Route auf diesem Objekt an und exportiert zuletzt den Router aus dem Modul (dies ermöglicht das Importieren der Datei in **app.js**).

```js
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Rückruf, der aufgerufen wird, wann immer eine HTTP `GET` Anfrage mit dem richtigen Muster erkannt wird. Das übereinstimmende Muster ist die Route, die beim Importieren des Moduls angegeben wurde (`"/users"`) sowie das, was in dieser Datei definiert wurde (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` eingegangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit Node ausführen und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Eine Sache, die oben von Interesse ist, ist, dass die Rückruffunktion das dritte Argument `next` hat und daher eine Middleware-Funktion anstelle eines einfachen Routen-Rückrufs ist. Während der Code derzeit das `next`-Argument nicht verwendet, könnte es in der Zukunft nützlich sein, wenn Sie mehrere Routenhandler zur `'/'`-Routenpfad hinzufügen möchten.

### Ansichten (Templates)

Die Ansichten (Templates) werden im **/views** Verzeichnis (wie in **app.js** angegeben) gespeichert und haben die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/5x/api/#res.render) wird verwendet, um ein angegebenes Template zusammen mit den Werten der in einem Objekt übergebenen benannten Variablen zu rendern und das Ergebnis dann als Antwort zu senden. Im folgenden Code von **/routes/index.js** können Sie sehen, wie diese Route eine Antwort unter Verwendung des Templates "index" darstellt, wobei die Templatevariable "title" übergeben wird.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die obige Route wird unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title` Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo es im Template angegeben ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool"_ bei der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser aufrufen.

## Zusammenfassung

Sie haben nun ein Skelett-Website-Projekt für die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als nächstes werden wir beginnen, das Skelett so zu ändern, dass es als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express Anwendungsgenerator](https://expressjs.com/en/starter/generator/) (Express-Dokumentation)
- [Verwenden von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
