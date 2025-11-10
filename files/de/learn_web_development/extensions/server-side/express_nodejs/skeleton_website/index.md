---
title: "Express Tutorial Teil 2: Erstellen einer Website-Skelettstruktur"
short-title: "2: Website-Skelettstruktur"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel unseres [Express-Tutorials](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit standortspezifischen Routen, Vorlagen/Ansichten und Datenbankaufrufen füllen können.

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
        In der Lage sein, eigene neue Website-Projekte mit dem <em>Express Application Generator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie mit dem [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool eine "Skelett"-Website erstellen können, die Sie dann mit standortspezifischen Routen, Ansichten/Vorlagen und Datenbankaufrufen füllen können. In diesem Fall werden wir das Tool nutzen, um das Framework für unsere [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu dem wir später den gesamten Code hinzufügen werden, den die Website benötigt. Der Prozess ist äußerst einfach und erfordert lediglich, dass Sie den Generator mit einem neuen Projektnamen in der Befehlszeile aufrufen und optional auch die Vorlagen-Engine und den CSS-Generator der Website angeben.

In den folgenden Abschnitten wird gezeigt, wie Sie den Anwendungsgenerator aufrufen, und es wird eine kleine Erklärung zu den verschiedenen Ansichts-/CSS-Optionen gegeben. Wir erklären auch, wie die Website-Skelettstruktur aufgebaut ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Website hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Für Informationen über eine _minimale_ Express-Anwendung siehe [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`. Wir haben die meisten davon in diesem Tutorial in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) geändert, weil wir moderne JavaScript-Praktiken demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der vom _Express Application Generator_ erstellten **package.json** definiert sind. Diese sind nicht (notwendigerweise) die neueste Version, und Sie sollten sie aktualisieren, wenn Sie eine reale Anwendung in die Produktion einsetzen.

## Den Anwendungsgenerator verwenden

Sie sollten den Generator bereits als Teil des [Einrichtens einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Zur Erinnerung: Sie installieren das Generator-Tool allgemein mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator hat eine Reihe von Optionen, die Sie über die Befehlszeile mit dem Befehl `--help` (oder `-h`) anzeigen können:

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

Sie können `express` angeben, um ein Projekt im _aktuellen_ Verzeichnis unter Verwendung der _Jade_ Ansicht-Engine und plain CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine Ansichts- (Vorlagen-) Engine mit `--view` und/oder eine CSS-Generierungs-Engine mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl der Vorlagen-Engines (z.B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche View-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe beliebter Ansichts-/Vorlagen-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade auswählt, wenn Sie keine Ansichtsoption angeben. Express selbst kann auch eine große Anzahl anderer Vorlagensprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Vorlagen-Engine verwenden möchten, die vom Generator nicht unterstützt wird, finden Sie in der [Verwendung von Vorlagen-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express Dokumentation) und in der Dokumentation der Ziel-View-Engine weitere Informationen.

Allgemein gesprochen sollten Sie eine Vorlagen-Engine auswählen, die alle erforderlichen Funktionen bietet und Ihnen ermöglicht, schneller produktiv zu sein — oder, mit anderen Worten, in der gleichen Weise, wie Sie jede andere Komponente auswählen würden! Einige der Dinge, die Sie beim Vergleich von Vorlagen-Engines beachten sollten:

- Zeit zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Vorlagen-Sprache hat, wird es wahrscheinlich schneller produktiv mit dieser Sprache sein. Andernfalls sollten Sie die relative Lernkurve für die potenziellen Vorlagen-Engines in Betracht ziehen.
- Beliebtheit und Aktivität — Überprüfen Sie die Beliebtheit der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu erhalten, wenn während der Lebensdauer der Website Probleme auftreten.
- Stil — Einige Vorlagen-Engines verwenden spezifische Markups, um eingefügten Inhalt innerhalb von "gewöhnlichem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax konstruieren (zum Beispiel unter Verwendung von Einrückungen und Blocknamen).
- Leistung/Rendering-Zeit.
- Features — Sie sollten berücksichtigen, ob die betrachteten Engines über die folgenden Funktionen verfügen:
  - Layout-Erbschaft: Ermöglicht es Ihnen, eine Basistemplate zu definieren und dann nur die Teile davon zu "erben", die Sie für eine bestimmte Seite unterschiedlich gestalten möchten. Dies ist typischerweise ein besserer Ansatz als Vorlagen durch Einfügen einer Reihe erforderlicher Komponenten zu erstellen oder jedes Mal eine Vorlage von Grund auf neu zu erstellen.
  - "Include"-Unterstützung: Ermöglicht den Aufbau von Vorlagen durch Einfügen anderer Vorlagen.
  - Knackige Variablen- und Schleifenkontrollsyntax.
  - Möglichkeit zur Filterung von Variablenwerten auf Vorlagenebene, wie z.B. Variablen in Großbuchstaben zu setzen oder ein Datumsformat zu formatieren.
  - Fähigkeit zur Erzeugung von anderen Ausgabeformaten als HTML, wie JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Vorlagen-Engine clientseitig genutzt werden kann, besteht die Möglichkeit, dass das gesamte oder der Großteil des Renderings clientseitig durchgeführt wird.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, um Ihnen beim Vergleich der verschiedenen Optionen zu helfen!

Für dieses Projekt verwenden wir die [Pug](https://pugjs.org/api/getting-started.html) Vorlagen-Engine (früher "Jade" genannt), da dies eine der beliebtesten Express/JavaScript-Vorlagensprachen ist und vom Generator unterstützt wird.

### Welche CSS Stylesheet Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das für die Nutzung der gebräuchlichsten CSS Stylesheet Engines konfiguriert ist: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS Stylesheet Engines ermöglichen es Ihnen, eine leistungsstärkere Syntax zur Definition Ihrer CSS zu verwenden und dann die Definition in gewöhnliches CSS zu kompilieren, das von Browsern genutzt werden kann.

Wie bei den Vorlagen-Engines sollten Sie die Stylesheet Engine verwenden, die es Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt werden wir normales CSS (die Voreinstellung) verwenden, da unsere CSS-Anforderungen nicht kompliziert genug sind, um etwas anderes zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/inklusive keine Datenbanken. _Express_-Anwendungen können jeden [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) nutzen, der von _Node_ unterstützt wird (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltens- oder Erfordernisse für das Datenbankmanagement).

Wir werden in einem späteren Artikel besprechen, wie man eine Datenbank integriert.

## Das Projekt erstellen

Für die Beispiel-App _Local Library_, die wir aufbauen werden, erstellen wir ein Projekt mit dem Namen _express-locallibrary-tutorial_ unter Verwendung der _Pug_-Vorlagenbibliothek und ohne CSS-Engine.

Navigieren Sie zunächst zu dem Ort, an dem Sie das Projekt erstellen möchten, und starten Sie dann den _Express Application Generator_ im Befehlsfenster, wie gezeigt:

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten (wie in der **package.json** Datei aufgeführt) installiert und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt wird.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`. Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (das restliche Tutorial geht davon aus, dass Sie dies getan haben).

## Die Website-Skelettstruktur ausführen

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website _tut_ eigentlich noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl ruft alle in der **package.json** des Projekts aufgelisteten Abhängigkeits-Pakete ab).

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
     > PowerShell-Befehle werden in diesem Tutorial nicht behandelt (die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie die Windows CMD-Eingabeaufforderung verwenden).

   - Verwenden Sie auf macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für die Standard-Express-App Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben nun eine funktionierende Express-Anwendung, die über Port 3000 erreichbar ist.

> [!NOTE]
> Sie könnten die App auch einfach mit dem `npm start`-Befehl starten. Das wie gezeigt angegebene DEBUG-Variable ermöglicht das Konsolen-Logging/Debugging. Wenn Sie beispielsweise die obige Seite besuchen, sehen Sie etwa folgende Debug-Ausgabe:
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

## Serverneustart bei Dateiänderungen aktivieren

Jede Änderung, die Sie an Ihrer Express-Website vornehmen, ist derzeit erst sichtbar, nachdem Sie den Server neu gestartet haben. Es wird schnell sehr lästig, den Server jedes Mal anhalten und neu starten zu müssen, wenn Sie eine Änderung vornehmen. Deshalb lohnt es sich, die Zeit zu investieren, den Server bei Bedarf automatisch neu zu starten.

Ein praktisches Werkzeug dafür ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es ein "Tool" ist), aber hier werden wir es lokal als _Entwickler-Abhängigkeit_ installieren und verwenden, sodass alle Entwickler, die mit dem Projekt arbeiten, es automatisch erhalten, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skelettprojekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich trotzdem entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrem Rechner zu installieren und nicht nur in die **package.json** Datei Ihres Projekts:

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

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile aus starten (es sei denn, wir fügen es dem Pfad hinzu). Wir können es jedoch mit einem npm-Skript aufrufen, da npm weiß, welche Pakete installiert sind. Finden Sie den Abschnitt `scripts` Ihrer **package.json**. Anfänglich wird er eine Zeile enthalten, die mit `"start"` beginnt. Aktualisieren Sie ihn, indem Sie ein Komma am Ende dieser Zeile setzen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Unter Linux und macOS sieht der Scripts-Abschnitt folgendermaßen aus:

  ```json
  {
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    }
  }
  ```

- In Windows würde der "serverstart"-Wert stattdessen so aussehen (bei Verwendung der Eingabeaufforderung):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können jetzt den Server fast genauso starten wie zuvor, aber mit dem `devstart`-Befehl.

> [!NOTE]
> Wenn Sie jetzt eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn neu starten, indem Sie jederzeit `rs` auf der Eingabeaufforderung eingeben). Sie müssen jedoch immer noch den Browser neu laden, um die Seite zu aktualisieren.
>
> Jetzt müssen wir `npm run <script-name>` anstelle von nur `npm start` aufrufen, da "start" tatsächlich ein npm-Befehl ist, der dem benannten Skript zugeordnet ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir wollen _nodemon_ während der Entwicklung verwenden, daher ist es sinnvoll, einen neuen Skript-Befehl zu erstellen.
>
> Der `serverstart`-Befehl, der den Skripten in der obigen **package.json** hinzugefügt wurde, ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der hinzugefügte Befehl nur für macOS oder Linux funktioniert.

## Das generierte Projekt

Lassen Sie uns nun das Projekt ansehen, das wir gerade erstellt haben.
Wir werden im Laufe der Zeit einige kleinere Änderungen daran vornehmen.

### Verzeichnisstruktur

Das generierte Projekt hat die folgende Verzeichnisstruktur, nachdem Sie die Abhängigkeiten installiert haben (Dateien sind die Elemente, die **nicht** mit "/" beginnen). Die **package.json**-Datei definiert die Abhängigkeiten der Anwendung und andere Informationen. Sie definiert auch ein Startskript, das den Anwendungseintrittspunkt aufrufen wird, die JavaScript-Datei **/bin/www**. Diese richtet einige der Anwendungsfehlerbehandlungen ein und lädt dann **app.js**, um den Rest der Arbeit zu verrichten. Die Anwendungsrouten werden in separaten Modulen im **routes/**-Verzeichnis gespeichert. Die Vorlagen sind im **/views**-Verzeichnis gespeichert.

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

Die **package.json** Datei definiert die Abhängigkeiten der Anwendung und andere Informationen:

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

Der Skriptabschnitt definiert zuerst ein "_start_"-Skript, das wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass damit tatsächlich die JavaScript-Datei **./bin/www** mit _node_ gestartet wird.

Wir haben diesen Abschnitt bereits in [Serverneustart bei Dateiänderungen aktivieren](#serverneustart_bei_dateiänderungen_aktivieren) geändert, indem wir die _devstart_ und _serverstart_ Skripte hinzugefügt haben. Diese können verwendet werden, um dieselbe **./bin/www** Datei mit _nodemon_ statt _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
{
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  }
}
```

Die Abhängigkeiten umfassen das _express_-Paket und das Paket für unsere ausgewählte Vorlagen-Engine (_pug_). Zusätzlich haben wir folgende Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Dient zum Parsen des Cookie-Headers und zur Befüllung von `req.cookies` (bietet im Wesentlichen eine bequeme Methode, um auf Cookie-Informationen zuzugreifen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Tool, das nach dem Debugging-Verfahren des Node-Kerns modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Eine HTTP-Anforderungs-Logger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen von HTTP-Fehlern, wo nötig (für die Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet. Ersetzen Sie den Abhängigkeitsabschnitt Ihrer `package.json`-Datei mit dem folgenden Text, der die neuesten Versionen dieser Bibliotheken zur Zeit des Schreibens angibt:

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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch als Teil eines [Continuous-Integration]-Setups (/de/docs/Glossary/continuous_integration) erfolgen.
>
> In der Regel bleiben Bibliotheksupdates auf die Minor- und Patch-Version kompatibel. Wir haben oben jedes Version mit `^` vorangestellt, damit wir automatisch auf die neueste `minor.patch`-Version aktualisieren können, indem wir:
>
> ```bash
> npm update --save
> ```
>
> Major-Versionen ändern die Kompatibilität. Für diese Updates müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt gründlich neu testen.

### www Datei

Die Datei **/bin/www** ist der Einstiegspunkt der Anwendung! Das allererste, was sie tut, ist, den "wirklichen" Einstiegspunkt der Anwendung (**app.js** im Projektstamm) zu `require()`, der das [`express()`](https://expressjs.com/en/api.html)-Anwendungsobjekt einrichtet und zurückgibt. `require()` ist die [CommonJS-Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren. Hier geben wir das **app.js**-Modul mit einem relativen Pfad an und lassen die optionale (.**js**) Dateierweiterung weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6 `import`-Anweisungen zum Importieren von JavaScript (ECMAScript) Modulen. Um diese Funktion zu nutzen, müssen Sie `"type": "module"` zu Ihrer Express **package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateierweiterung einbeziehen (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)). Obwohl es Vorteile bei der Verwendung von `import` gibt, verwendet dieses Tutorial `require()`, um der [Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) zu entsprechen.

Der Rest des Codes in dieser Datei richtet einen Node HTTP-Server ein, der `app` auf einen bestimmten Port setzt (definiert in einer Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist), und beginnt mit dem Hören sowie dem Melden von Serverfehlern und Verbindungen. Für den Moment müssen Sie nichts Weiteres über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express`-Anwendungsobjekt (nach Konvention `app` genannt), richtet die Anwendung mit verschiedenen Einstellungen und Middleware ein und exportiert dann die App aus dem Modul. Der nachfolgende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

Zurück in der obigen **www**-Einstiegspunktdatei ist es dieses `module.exports`-Objekt, das dem Anrufer bereitgestellt wird, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js**-Datei im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mittels `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor über npm für unsere Anwendung heruntergeladen haben; und _path_, eine Kern-Node-Bibliothek zum Parsen von Datei- und Verzeichnispfaden.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()` wir Module aus unserem Routenverzeichnis. Diese Module/Dateien enthalten Code zur Behandlung spezifischer Gruppen von verwandten "Routen" (URL-Pfade). Wenn wir die Skelett-Anwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, fügen wir eine neue Datei zur Behandlung der buchbezogenen Routen hinzu.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An dieser Stelle haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich genutzt (das geschieht etwas weiter unten in der Datei).

Als Nächstes erstellen wir das `app`-Objekt mit unserem importierten _express_-Modul und verwenden es dann, um die View- (Vorlagen-)Engine einzurichten. Es gibt zwei Teile zur Einrichtung der Engine. Zuerst setzen wir den `"views"`-Wert, um den Ordner anzugeben, in dem die Vorlagen gespeichert werden (in diesem Fall der Unterordner **/views**). Dann setzen wir den `"view engine"`-Wert, um die Vorlagenbibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Abschnitt von Funktionen ruft `app.use()` auf, um die oben importierten _Middleware_-Bibliotheken in die Anforderungsverarbeitungskette einzufügen. Zum Beispiel sind `express.json()` und `express.urlencoded()` erforderlich, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu belegen. Nach diesen Bibliotheken verwenden wir auch die `express.static`-Middleware, die _Express_ veranlasst, alle statischen Dateien im Verzeichnis **/public** im Projektstamm zu servieren.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Da nun alle anderen Middleware eingerichtet sind, fügen wir unseren (zuvor importierten) Routen-Verarbeitungscode in die Anforderungsverarbeitungskette ein. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Website definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) werden als Präfix zu den in den importierten Dateien definierten Routen behandelt. Wenn beispielsweise das importierte **users**-Modul eine Route für `/profile` definiert, würden Sie auf diese Route über `/users/profile` zugreifen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

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

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Der letzte Schritt besteht darin, es zu den Modul-Exports hinzuzufügen (das ist es, was es ermöglicht, dass es von **/bin/www** importiert wird).

```js
module.exports = app;
```

### Routen

Die Routendatei **/routes/users.js** ist unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir nicht auch **index.js** zeigen). Zuerst wird das _express_-Modul geladen und verwendet, um ein `express.Router`-Objekt zu erhalten. Dann wird eine Route auf diesem Objekt angegeben und zuletzt wird der Router aus dem Modul exportiert (das ist es, was es ermöglicht, dass die Datei in **app.js** importiert wird).

```js
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Callback, der aufgerufen wird, wann immer eine HTTP-`GET`-Anforderung mit dem richtigen Muster erkannt wird. Das übereinstimmende Muster ist die Route, die beim Importieren des Moduls angegeben wird (`"/users"`) plus was auch immer in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit node ausführen und die URL in Ihrem Browser aufrufen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Eine Sache von Interesse oben ist, dass die Callback-Funktion das dritte Argument `next` hat und daher eine Middleware-Funktion ist und kein einfacher Routen-Callback. Obwohl der Code derzeit das `next`-Argument nicht verwendet, könnte es in Zukunft nützlich sein, wenn Sie mehrere Routen-Handler zur `'/'`-Routen-Pfad hinzufügen möchten.

### Ansichten (Vorlagen)

Die Ansichten (Vorlagen) werden im **/views** Verzeichnis gespeichert (wie in **app.js** angegeben) und haben die Dateiendung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/5x/api.html#res.render) wird verwendet, um eine angegebene Vorlage zusammen mit den Werten von benannten Variablen, die in einem Objekt übergeben wurden, zu rendern und dann das Ergebnis als Antwort zurückzusenden. Im unten stehenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort unter Verwendung der Vorlage "index" rendert und die Template-Variable "title" übergibt.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Die entsprechende Vorlage für die obenstehende Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo sie in der Vorlage angegeben ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "**You're so cool**" bei der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server starten und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen

## Zusammenfassung

Sie haben nun ein Skelett-Website-Projekt für die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Wichtiger noch, Sie verstehen auch, wie das Projekt strukturiert ist, sodass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als nächstes werden wir das Skelett so modifizieren, dass es als Bibliothekswebsite funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
