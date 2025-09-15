---
title: "Express Tutorial Teil 2: Erstellen einer Grundstruktur für eine Website"
short-title: "2: Grundstruktur der Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel unseres [Express Tutorials](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein Website-Projekt mit einer "Grundstruktur" erstellen können, das Sie dann mit spezifischen Routen, Templates/Views und Datenbankaufrufen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Einrichten einer Node-Entwicklungsumgebung</a>.
        Überarbeiten Sie das Express Tutorial.
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

## Überblick

Dieser Artikel zeigt, wie Sie mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool eine "Grundstruktur" für eine Website erstellen können, die Sie dann mit spezifischen Routen, Views/Templates und Datenbankaufrufen füllen können. In diesem Fall verwenden wir das Tool, um das Rahmenwerk für unsere [Lokale Bibliothek-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu welcher wir später all den anderen für die Website erforderlichen Code hinzufügen. Der Prozess ist extrem einfach, erfordert lediglich das Aufrufen des Generators über die Befehlszeile mit einem neuen Projektnamen, wobei optional auch die Template-Engine und der CSS-Generator der Website angegeben werden können.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Anwendungsgenerator aufrufen und bieten eine kleine Erklärung zu den verschiedenen View/CSS-Optionen. Wir erklären auch, wie die Grundstruktur der Website aufgebaut ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige praktikable Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Website hat jedoch eine modulare Struktur, die einfach zu erweitern und zu verstehen ist. Informationen zu einer _minimalen_ Express-Anwendung finden Sie im [Hello-World-Beispiel](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   In diesem Tutorial haben wir die meisten davon in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) geändert (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)), weil wir moderne JavaScript-Praktiken demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der **package.json** erstellt vom _Express Application Generator_ definiert sind.
>   Diese sind nicht notwendigerweise die neueste Version, und Sie sollten sie aktualisieren, wenn Sie eine echte Anwendung in der Produktion bereitstellen.

## Verwendung des Anwendungsgenerators

Sie sollten den Generator bereits installiert haben, als Teil des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment). Zur schnellen Erinnerung: Sie installieren das Generator-Tool global mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat eine Reihe von Optionen, die Sie auf der Befehlszeile mit dem Befehl `--help` (oder `-h`) anzeigen können:

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

Sie können Express so angeben, dass es ein Projekt im _aktuellen_ Verzeichnis unter Verwendung der _Jade_ View-Engine und von einfachem CSS erstellt (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine View (Template)-Engine mit `--view` und/oder eine CSS-Generierungs-Engine mit `--css` auswählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z. B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe beliebter View-/Templating-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade auswählt, wenn Sie keine View-Option angeben. Express selbst kann auch eine große Anzahl anderer Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, siehe [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation Ihrer Ziel-View-Engine.

Allgemein gesagt, sollten Sie eine Templating-Engine auswählen, die alle Funktionen bietet, die Sie benötigen, und Ihnen ermöglicht, schneller produktiv zu sein - oder mit anderen Worten: auf die gleiche Weise, wie Sie jede andere Komponente auswählen! Einige der zu berücksichtigenden Punkte beim Vergleichen von Template-Engines:

- Zeit zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, werden sie wahrscheinlich schneller produktiv sein, wenn sie diese Sprache verwenden. Wenn nicht, sollten Sie die relative Lernkurve für in Frage kommende Templating-Engines in Betracht ziehen.
- Popularität und Aktivität — Prüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, bei auftretenden Problemen während der Lebensdauer der Website Unterstützung zu erhalten.
- Stil — Einige Template-Engines verwenden spezifisches Markup, um im "normalen" HTML eingefügte Inhalte anzuzeigen, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel unter Verwendung von Einrückungen und Blocknamen).
- Leistung/Rendezeit.
- Funktionen — Sie sollten untersuchen, ob die von Ihnen betrachteten Engines die folgenden Funktionen bieten:
  - Layout-Vererbung: Ermöglicht es, ein Basistemplate zu definieren und dann nur die Teile davon zu "erben", die für eine bestimmte Seite unterschiedlich sein sollen. Dies ist in der Regel besser als Templates zu erstellen, indem eine Anzahl notwendiger Komponenten einbezogen oder ein Template jedes Mal von Grund auf neu erstellt wird.
  - "Include"-Unterstützung: Ermöglicht den Aufbau von Templates durch Einbeziehen anderer Templates.
  - Kurz und prägnante Syntax für Variablen und Schleifensteuerung.
  - Fähigkeit, Variablenwerte auf Template-Ebene zu filtern, wie z.B. Variablen in Großbuchstaben zu konvertieren oder ein Datumswert zu formatieren.
  - Fähigkeit, Ausgabeformate zu generieren, die nicht HTML sind, wie JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, ermöglicht dies die Möglichkeit, dass nahezu die gesamte oder die überwiegende Mehrheit der Darstellung clientseitig erfolgt.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen helfen, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt verwenden wir die [Pug](https://pugjs.org/api/getting-started.html) Templating-Engine (vormals "Jade"), da dies eine der beliebtesten Express/JavaScript-Templating-Sprachen ist und vom Generator out of the box unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das so konfiguriert ist, dass die gängigen CSS-Stylesheet-Engines verwendet werden: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS-Stylesheet-Engines ermöglichen die Verwendung einer leistungsstärkeren Syntax zur Definition Ihres CSS und das anschließende Kompilieren der Definition in einfaches CSS, das Browser verwenden können.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, die Ihrem Team am meisten Produktivität ermöglicht. Für dieses Projekt verwenden wir einfaches CSS (die Standardeinstellung), da unsere CSS-Anforderungen nicht so kompliziert sind, dass sich die Verwendung von etwas anderem lohnen würde.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet oder enthält keine Datenbanken. _Express_-Anwendungen können einen beliebigen [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, der von _Node_ unterstützt wird (Express selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für das Datenbankmanagement).

Wir werden in einem späteren Artikel diskutieren, wie man eine Datenbank integriert.

## Erstellen des Projekts

Für die Beispielanwendung _Local Library_, die wir erstellen werden, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ unter Verwendung der _Pug_ Template-Bibliothek und ohne CSS-Engine.

Navigieren Sie zuerst zu dem Verzeichnis, in dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ in der Befehlszeile wie gezeigt aus:

```bash
express express-locallibrary-tutorial --view=pug
```

Der Generator erstellt (und listet) die Projektdateien.

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

Am Ende der Ausgabe gibt der Generator Anweisungen zum Installieren der Abhängigkeiten (wie in der **package.json** Datei aufgelistet) und zum Ausführen der Anwendung auf verschiedenen Betriebssystemen.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Ausführen der Grundstruktur der Website

Zu diesem Zeitpunkt haben wir ein vollständiges Skeleton-Projekt. Die Website _macht_ zwar noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zunächst die Abhängigkeiten (der Befehl `install` wird alle Abhängigkeitspakete abrufen, die in der **package.json** des Projekts aufgelistet sind).

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
     $env:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (Die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie die Windows CMD-Eingabeaufforderung verwenden).

   - Verwenden Sie auf macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für Standard-Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 erreichbar ist.

> [!NOTE]
> Sie könnten die App auch nur mit dem Befehl `npm start` starten. Das Festlegen der DEBUG-Variable wie gezeigt aktiviert die Konsolenprotokollierung/-debugging. Wenn Sie die obige Seite aufrufen, sehen Sie zum Beispiel Debug-Ausgaben wie diese:
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

## Aktivieren Sie den Serverneustart bei Dateiänderungen

Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit erst sichtbar, wenn Sie den Server neu starten. Es wird schnell sehr lästig, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen, daher lohnt es sich, die Zeit zu investieren, den Server automatisch neuzustarten, wenn dies erforderlich ist.

Ein praktisches Tool zu diesem Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es sich um ein "Tool" handelt), aber hier installieren und verwenden wir es lokal als _Entwicklerabhängigkeit_, sodass jeder, der mit dem Projekt arbeitet, es automatisch erhält, wenn er die Anwendung installiert. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skeleton-Projekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich dennoch entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrem Rechner zu installieren und nicht nur in der **package.json** Ihres Projekts:

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

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile aus starten (es sei denn, wir fügen es dem Pfad hinzu). Wir können es jedoch aus einem npm-Skript aufrufen, da npm weiß, welche Pakete installiert sind. Finden Sie den `scripts` Abschnitt Ihrer **package.json**. Zu Beginn wird er eine Zeile enthalten, die mit `"start"` beginnt. Aktualisieren Sie diese, indem Sie ein Komma am Ende dieser Zeile setzen und die `"devstart"` und `"serverstart"` Zeilen hinzufügen:

- Auf Linux und macOS sieht der Skript-Abschnitt so aus:

  ```json
  {
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    }
  }
  ```

- Auf Windows würde der "serverstart"-Wert stattdessen so aussehen (bei Verwendung der Eingabeaufforderung):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können jetzt den Server fast genauso wie zuvor starten, aber mit dem `devstart` Befehl.

> [!NOTE]
> Jetzt, wenn Sie eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit durch Eingabe von `rs` in der Befehlszeile neu starten). Sie müssen dennoch den Browser neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` anstelle von nur `npm start` aufrufen, weil "start" tatsächlich ein npm-Befehl ist, der dem benannten Skript zugeordnet ist. Wir könnten den Befehl im _start_-Skript ersetzt haben, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, also macht es Sinn, einen neuen Skriptbefehl zu erstellen.
>
> Der `serverstart`-Befehl, der zu den Skripten in der **package.json** oben hinzugefügt wurde, ist ein sehr gutes Beispiel. Diese Methode bedeutet, dass Sie nicht mehr einen langen Befehl eingeben müssen, um den Server zu starten. Beachten Sie, dass der besondere Befehl zum Skript nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Lassen Sie uns nun das Projekt ansehen, das wir gerade erstellt haben.
Wir werden im Verlauf einige geringfügige Änderungen daran vornehmen.

### Verzeichnisstruktur

Das generierte Projekt hat nach der Installation der Abhängigkeiten die folgende Dateistruktur (Dateien sind die Elemente, die **nicht** mit "/" beginnen).
Die **package.json** Datei definiert die Anwendungsabhängigkeiten und weitere Informationen.
Sie definiert auch ein Startskript, das den Anwendungseinstiegspunkt, die JavaScript-Datei **/bin/www**, aufrufen wird.
Dies richtet einen Teil der Fehlerbehandlung der Anwendung ein und lädt dann **app.js**, um den Rest der Arbeit zu erledigen.
Die Anwendungsrouten sind in separaten Modulen im **routes/** Verzeichnis gespeichert.
Die Templates sind im /**views** Verzeichnis gespeichert.

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

Die **package.json** Datei definiert die Anwendungsabhängigkeiten und weitere Informationen:

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

Der Skriptabschnitt definiert zunächst ein "_start_"-Skript, das wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _node_ startet.

Wir haben diesen Abschnitt bereits in [Serverneustart bei Dateiänderungen aktivieren](#aktivieren_sie_den_serverneustart_bei_dateiänderungen) modifiziert, indem wir die _devstart_ und _serverstart_ Skripts hinzugefügt haben. Diese können verwendet werden, um dieselbe **./bin/www** Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
{
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  }
}
```

Die Abhängigkeiten umfassen das _express_ Paket und das Paket für unsere ausgewählte View-Engine (_pug_).
Darüber hinaus haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu parsen und `req.cookies` zu füllen (bietet im Wesentlichen eine bequeme Methode, um auf Cookie-Informationen zuzugreifen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Dienstprogramm, inspiriert vom Debugging-Verfahren des Node-Kerns.
- [morgan](https://www.npmjs.com/package/morgan): Eine HTTP-Anfrage-Logger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen von HTTP-Fehlern bei Bedarf (für die Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet.
Ersetzen Sie den Abhängigkeitsbereich Ihrer `package.json` Datei mit dem folgenden Text, der die neuesten Versionen dieser Bibliotheken zur Zeit der Erstellung angibt:

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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren – dies kann sogar automatisch oder halbautomatisch als Teil einer kontinuierlichen Integration eingerichtet werden.
>
> Normalerweise bleiben Bibliotheksaktualisierungen zur Nebenversion und Patch-Version kompatibel.
> Wir haben oben jeder Version ein `^` vorangestellt, damit wir automatisch auf die neueste `minor.patch`-Version aktualisieren können, indem wir:
>
> ```bash
> npm update --save
> ```
>
> Wichtige Versionen ändern die Kompatibilität.
> Für diese Updates müssen wir die `package.json` und Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt umfassend neu testen.

### www Datei

Die Datei **/bin/www** ist der Anwendungseinstiegspunkt! Das erste, was sie tut, ist das `require()` der "eigentlichen" Anwendungseinstiegspunktdatei (**app.js** im Projekthauptverzeichnis), die das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt erstellt und zurückgibt.
`require()` ist die [CommonJS Methode](https://nodejs.org/api/modules.html) zum Importieren von JavaScript-Code, JSON und anderen Dateien in die aktuelle Datei.
Hier spezifizieren wir das **app.js** Modul mit einem relativen Pfad und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import` Statements zur Einfuhr von JavaScript (ECMAScript)-Modulen.
> Um diese Funktion zu verwenden, müssen Sie `"type": "module"` zu Ihrer Express **package.json** Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung angeben (weitere Informationen finden Sie in der [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Während es Vorteile gibt, `import` zu verwenden, verwendet dieses Tutorial `require()`, um mit [der Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der Rest des Codes in dieser Datei richtet einen Node-HTTP-Server mit `app` auf einen bestimmten Port ein (definiert in einer Umgebungsvariablen oder 3000, wenn die Variable nicht definiert ist) und beginnt mit dem Hören und Berichten von Serverfehlern und -verbindungen. Für den Moment müssen Sie wirklich nichts anderes über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber schauen Sie ihn gerne an, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express` Anwendungsobjekt (standardmäßig `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die Anwendung aus dem Modul. Der untenstehende Code zeigt nur die Teile der Datei, die das Anwendungsobjekt erstellen und exportieren:

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

In der oben genannten Einstiegsdatei **www** ist es dieses `module.exports` Objekt, das dem Aufrufer bereitgestellt wird, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js** Datei im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mittels `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor mit npm für unsere Anwendung heruntergeladen haben; und _path_, das eine Kern-Node-Bibliothek zum Parsen von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zum Umgang mit bestimmten Sätzen von verwandten "Routen" (URLs). Wenn wir die Grundanwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei zum Umgang mit buchbezogenen Routen hinzufügen.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht verwendet (das passiert ein kleines Stück weiter unten in der Datei).

Als Nächstes erstellen wir das `app` Objekt mit unserem importierten _express_ Modul und verwenden dann dieses, um die View (Template)-Engine einzurichten. Es gibt zwei Teile zur Einrichtung der Engine. Zuerst setzen wir den `"views"` Wert, um das Verzeichnis zu spezifizieren, in dem die Templates gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"` Wert, um die Template-Bibliothek zu spezifizieren (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Die nächste Gruppe von Funktionen ruft `app.use()` auf, um die oben importierten _Middleware_-Bibliotheken in die Anfragährungskette hinzuzufügen.
Zum Beispiel werden `express.json()` und `express.urlencoded()` benötigt, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu füllen.
Nach diesen Bibliotheken verwenden wir auch die `express.static` Middleware, die _Express_ dazu bringt, alle statischen Dateien im **/public** Verzeichnis im Projektstamm zu servieren.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nun, da alle anderen Middleware eingerichtet sind, fügen wir unseren (zuvor importierten) Routenverarbeitungscode in die Anfragährungskette hinzu. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Website definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix für die in den importierten Dateien definierten Routen behandelt.
> Wenn zum Beispiel das importierte **users** Modul eine Route für `/profile` definiert, würden Sie auf diese Route unter `/users/profile` zugreifen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

Das letzte Middleware-Funktion fügt Handler-Methoden für Fehler und HTTP 404-Antworten hinzu.

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

Das Express-Anwendungsobjekt (app) ist jetzt vollständig konfiguriert. Der letzte Schritt ist, es zu den Modulexporten hinzuzufügen (dadurch kann es von **/bin/www** importiert werden).

```js
module.exports = app;
```

### Routen

Die Routendatei **/routes/users.js** wird unten gezeigt (Routendateien teilen eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen).
Zuerst lädt es das _express_ Modul und verwendet es, um ein `express.Router` Objekt zu erhalten.
Dann spezifiziert es eine Route auf diesem Objekt und zuletzt exportiert es den Router aus dem Modul (dadurch kann die Datei in **app.js** importiert werden).

```js
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Rückruf, der aufgerufen wird, wann immer eine HTTP `GET` Anfrage mit dem richtigen Muster erkannt wird. Das übereinstimmende Muster ist die Route, die beim Importieren des Moduls (`"/users"`) angegeben wurde, plus alles, was in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit Node ausführen und die URL in Ihrem Browser aufrufen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Ein interessanter Punkt oben ist, dass die Rückruffunktion das dritte Argument `next` hat und daher eine Middleware-Funktion ist und nicht nur ein einfacher Routenrückruf. Während der Code derzeit das `next` Argument nicht verwendet, könnte dies in Zukunft nützlich sein, wenn Sie mehrere Routenhandler für den `'/'` Routenpfad hinzufügen möchten.

### Views (Templates)

Die Views (Templates) werden im **/views** Verzeichnis (wie in **app.js** angegeben) gespeichert und erhalten die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/5x/api.html#res.render) wird verwendet, um ein angegebenes Template zusammen mit den Werten von benannten Variablen, die in ein Objekt übergeben werden, zu rendern und dann das Ergebnis als Antwort zu senden. Im untenstehenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort mit dem Template "index" rendert und die Templatevariable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die oben genannte Route wird unten gegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title` Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo sie im Template angegeben ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" bei der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben nun ein Projekt für eine grundlegende Website für die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Views für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes werden wir beginnen, die Grundstruktur so zu ändern, dass sie als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
