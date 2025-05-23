---
title: "Express Tutorial Teil 2: Erstellung einer Skelett-Website"
short-title: "2: Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit standortspezifischen Routen, Vorlagen/Ansichten und Datenbankaufrufen füllen können.

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
        In der Lage sein, Ihre eigenen neuen Website-Projekte mit dem <em>Express Application Generator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie mit dem Tool [Express Application Generator](https://expressjs.com/en/starter/generator.html) eine "Skelett"-Website erstellen können, die Sie dann mit standortspezifischen Routen, Ansichten/Vorlagen und Datenbankaufrufen füllen können. In diesem Fall werden wir das Tool verwenden, um das Framework für unsere [Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu dem wir später den gesamten anderen Code hinzufügen werden, den die Website benötigt. Der Prozess ist extrem einfach und erfordert nur, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen und optional auch die Template-Engine und den CSS-Generator der Website angeben.

Die folgenden Abschnitte zeigen Ihnen, wie Sie den Anwendungs-Generator aufrufen, und geben eine kleine Erklärung zu den verschiedenen Ansichts-/CSS-Optionen. Wir erklären auch, wie die Skelett-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, dass sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht die einzige tragfähige Möglichkeit, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Website hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Informationen über eine _minimale_ Express-Anwendung finden Sie im [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten davon in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) im Tutorial geändert, da wir eine moderne JavaScript-Praxis demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die im **package.json**, das vom _Express Application Generator_ erstellt wurde, definiert sind.
>   Diese sind nicht (notwendigerweise) die neueste Version, und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine echte Anwendung in die Produktion einsetzen.

## Verwendung des Anwendungs-Generators

Sie sollten den Generator bereits als Teil der [Einrichtung einer Node-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung: Sie installieren das Generator-Tool sitewide mit dem npm-Paketmanager, wie gezeigt:

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

Sie können spezifizieren, dass Express ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ Ansichts-Engine und einfachem CSS erstellen soll (wenn Sie einen Verzeichnispfad angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine Ansichts-(Template-)Engine mit `--view` und/oder eine CSS-Generierungs-Engine mit `--css` wählen.

> [!NOTE]
> Die anderen Optionen zur Auswahl von Template-Engines (z.B. `--hogan`, `--ejs`, `--hbs` etc.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche Ansichts-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, eine Reihe von beliebten Ansichts-/Templating-Engines zu konfigurieren, einschließlich [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl er standardmäßig Jade wählt, wenn Sie keine Ansichtsoption angeben. Express selbst kann auch eine große Anzahl von anderen Templating-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, siehe [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation zu Ihrer Ziel-Ansichts-Engine.

Allgemein gesprochen sollten Sie eine Templating-Engine auswählen, die alle Funktionen bietet, die Sie benötigen, und es Ihnen ermöglicht, schneller produktiv zu sein — oder mit anderen Worten, genau wie Sie jede andere Komponente wählen! Einige der Punkte, die bei einem Vergleich von Template-Engines zu berücksichtigen sind:

- Zeit zur Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Templating-Sprache hat, wird es wahrscheinlich schneller produktiv mit dieser Sprache sein. Wenn nicht, sollten Sie die relative Lernkurve der in Frage kommenden Templating-Engines berücksichtigen.
- Popularität und Aktivität — Überprüfen Sie die Popularität der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu bekommen, wenn Probleme während der Lebensdauer der Website auftreten.
- Stil — Einige Template-Engines verwenden spezielle Markup-Syntax, um eingefügte Inhalte innerhalb von "gewöhnlichem" HTML anzugeben, während andere das HTML mithilfe einer anderen Syntax erstellen (z.B. mit Einrückungen und Blocknamen).
- Leistung/Rrendering-Zeit.
- Funktionen — Sie sollten prüfen, ob die Engines, die Sie in Betracht ziehen, die folgenden Funktionen bieten:

  - Layoutvererbung: Ermöglicht es Ihnen, eine Basisschablone zu definieren und dann nur die Teile davon "zu erben", die Sie für eine bestimmte Seite unterschiedlich gestalten möchten. Dies ist typischerweise ein besserer Ansatz als das Erstellen von Templates, indem eine Reihe benötigter Komponenten einbezogen oder jedes Mal ein Template von Grund auf neu erstellt wird.
  - "Include"-Unterstützung: Ermöglicht es Ihnen, Templates zu erstellen, indem Sie andere Templates einbeziehen.
  - Prägnante Variablen- und Schleifen-Steuerungssyntax.
  - Fähigkeit zur Filterung von Variablenwerten auf Template-Ebene, wie z.B. das Großschreiben von Variablen oder das Formatieren eines Datumswerts.
  - Fähigkeit zur Erstellung anderer Ausgabeformate als HTML, wie z.B. JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Funktionen. Wenn eine Templating-Engine auf dem Client verwendet werden kann, besteht die Möglichkeit, dass alle oder die meisten der Rendering-Vorgänge client-seitig durchgeführt werden.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, um Ihnen bei der Auswahl der verschiedenen Optionen zu helfen!

Für dieses Projekt werden wir die [Pug](https://pugjs.org/api/getting-started.html) Templating-Engine verwenden (dies ist die kürzlich umbenannte Jade-Engine), da sie eine der beliebtesten Express/JavaScript-Templating-Sprachen ist und vom Generator standardmäßig unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das so konfiguriert ist, dass es die gebräuchlichsten CSS-Stylesheet-Engines verwendet: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben erschweren. CSS-Stylesheet-Engines ermöglichen es Ihnen, mächtigere Syntaxe zur Definition Ihres CSS zu verwenden und dann die Definition in einfaches CSS zu kompilieren, das von Browsern verwendet werden kann.

Wie bei Templating-Engines sollten Sie die Stylesheet-Engine verwenden, die es Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt verwenden wir einfaches CSS (die Standardeinstellung), da unsere CSS-Anforderungen nicht kompliziert genug sind, um die Verwendung von etwas anderem zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_-Anwendungen können jeden [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration.html) verwenden, der von _Node_ unterstützt wird (_Express_ selbst definiert keine spezifischen zusätzlichen Verhaltensweisen/Anforderungen für das Datenbankmanagement).

Wir werden besprechen, wie man eine Datenbank in einem späteren Artikel integriert.

## Erstellung des Projekts

Für die Beispielanwendung _Local Library_, die wir aufbauen werden, erstellen wir ein Projekt namens _express-locallibrary-tutorial_ unter Verwendung der _Pug_ Template-Bibliothek und keiner CSS-Engine.

Erstens, navigieren Sie zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ in der Befehlszeile aus, wie gezeigt:

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

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten installiert werden (wie sie in der **package.json** Datei aufgelistet sind) und wie die Anwendung auf unterschiedlichen Betriebssystemen ausgeführt wird.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (das restliche Tutorial nimmt an, dass Sie dies getan haben).

## Ausführung der Skelett-Website

Zu diesem Zeitpunkt haben wir ein komplettes Skelettprojekt. Die Website _macht_ noch nicht wirklich viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Zuerst die Abhängigkeiten installieren (der Befehl `install` ruft alle Abhängigkeitspakete ab, die in der **package.json** des Projekts aufgelistet sind).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Dann die Anwendung ausführen.

   - Verwenden Sie im Windows CMD-Befehlsprompt diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie in Windows PowerShell diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell-Befehle sind in diesem Tutorial nicht abgedeckt (Die bereitgestellten "Windows"-Befehle gehen davon aus, dass Sie den Windows CMD-Befehlsprompt verwenden.)

   - Verwenden Sie auf macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für Standard-Express-App-Generator-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, auf die über Port 3000 zugegriffen werden kann.

> [!NOTE]
> Sie könnten die App auch einfach mit dem `npm start` Befehl starten. Das Festlegen der DEBUG-Variable wie gezeigt ermöglicht die Konsolenprotokollierung/-debugging. Wenn Sie beispielsweise die obige Seite besuchen, sehen Sie Debug-Ausgaben wie diese:
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

## Aktivierung des Serverneustarts bei Dateiänderungen

Alle Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit nicht sichtbar, bis Sie den Server neu starten. Es wird schnell sehr ärgerlich, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen, daher lohnt es sich, die Zeit zu investieren, um den Serverneustart bei Bedarf zu automatisieren.

Ein praktisches Tool für diesen Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es ein "Tool" ist), aber hier werden wir es lokal als eine _Entwicklerabhängigkeit_ installieren und verwenden, so dass alle Entwickler, die mit dem Projekt arbeiten, es automatisch erhalten, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skelettprojekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich dennoch entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrem Rechner zu installieren und nicht nur auf die **package.json** Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht direkt über die Befehlszeile starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es aus einem npm-Skript heraus aufrufen, da npm alles über die installierten Pakete weiß. Suchen Sie den Abschnitt `scripts` in Ihrer package.json. Zu Beginn enthält er eine Zeile, die mit `"start"` beginnt. Aktualisieren Sie es, indem Sie am Ende dieser Zeile ein Komma setzen und die Zeilen `"devstart"` und `"serverstart"` hinzufügen:

- Auf Linux und macOS wird der Skript-Abschnitt so aussehen:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Auf Windows würde der Wert "serverstart" stattdessen so aussehen (wenn Sie die Befehlszeile verwenden):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können den Server jetzt fast genauso starten wie zuvor, aber mit dem `devstart`-Befehl.

> [!NOTE]
> Jetzt wird der Server bei Änderungen an einer Datei im Projekt neu gestartet (oder Sie können ihn jederzeit durch Eingabe von `rs` im Befehlszeilen-Prompt neu starten). Sie müssen den Browser dennoch neu laden, um die Seite zu aktualisieren.
>
> Wir müssen jetzt `npm run <script-name>` und nicht nur `npm start` aufrufen, da "start" tatsächlich ein npm-Befehl ist, der auf das benannte Skript abgebildet ist. Wir hätten den Befehl im _start_ Skript ersetzen können, aber wir möchten _nodemon_ nur während der Entwicklung verwenden, daher macht es Sinn, ein neues Skriptkommando zu erstellen.
>
> Das `serverstart`-Kommando, das zu den Skripten in der **package.json** oben hinzugefügt wurde, ist ein sehr gutes Beispiel. Durch diese Vorgehensweise müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der in das Skript hinzugefügte spezielle Befehl nur für macOS oder Linux funktioniert.

## Das erstellte Projekt

Nun werfen wir einen Blick auf das Projekt, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das erstellte Projekt hat nun, nachdem Sie die Abhängigkeiten installiert haben, folgende Datei-Struktur (Dateien sind die Elemente, die **nicht** mit "/" beginnen).
Die **package.json**-Datei definiert die Anwendungsabhängigkeiten und andere Informationen.
Sie definiert auch ein Start-Skript, das den Anwendungseintrittspunkt, die JavaScript-Datei **/bin/www**, aufrufen wird.
Diese Datei setzt einige der Anwendungsfehlermanagements auf und lädt dann **app.js** für den Rest der Arbeit.
Die App-Routen sind in separaten Modulen im Verzeichnis **routes/** abgelegt.
Die Templates werden im Verzeichnis /**views** aufbewahrt.

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

Der Scripts-Bereich definiert zuerst ein "_start_"-Skript, das wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass damit tatsächlich die JavaScript-Datei **./bin/www** mit _node_ gestartet wird.

Wir haben diesen Abschnitt bereits in [Aktivierung des Serverneustarts bei Dateiänderungen](#aktivierung_des_serverneustarts_bei_dateiänderungen) geändert, indem wir die _devstart_ und _serverstart_ Skripte hinzugefügt haben.
Diese Skripte können verwendet werden, um die gleiche **./bin/www**-Datei mit _nodemon_ anstatt mit _node_ zu starten (diese Version der Skripte gilt für Linux und macOS, wie oben diskutiert).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das _express_ Paket und das Paket für unsere ausgewählte Ansichts-Engine (_pug_).
Darüber hinaus haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu parsen und `req.cookies` zu befüllen (bietet im Wesentlichen eine bequeme Methode zum Zugriff auf Cookie-Informationen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Utility, modelliert nach der Debugging-Technik des Node-Kerns.
- [morgan](https://www.npmjs.com/package/morgan): Ein HTTP-Request-Logging-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie HTTP-Fehler, wo es nötig ist (für Express-Fehlermanagement).

Die Standardversionen im generierten Projekt sind etwas veraltet.
Ersetzen Sie den Abhängigkeiten-Bereich Ihrer `package.json`-Datei durch den folgenden Text, der die letzten Versionen dieser Bibliotheken zurzeit des Schreibens spezifiziert:

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
> Es ist eine gute Idee, regelmäßig auf die neuesten kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch als Teil eines kontinuierlichen Integrations-Setups erfolgen.
>
> Normalerweise bleiben Bibliotheksaktualisierungen auf die Nebenversion und Patch-Version kompatibel.
> Wir haben jede Version mit `^` oben vorangestellt, damit wir die jeweils neuesten `minor.patch`-Versionen automatisch aktualisieren können, indem wir folgendes ausführen:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität.
> Für diese Aktualisierungen müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt ausführlich wieder testen.

### www-Datei

Die Datei **/bin/www** ist der Einstiegspunkt zur Anwendung! Das allererste, was sie tut, ist den "wirklichen" Anwendungseinstiegspunkt (**app.js** im Projektstamm) zu `require()`-en, der dann das [`express()`](https://expressjs.com/en/api.html) Anwendungsobjekt erstellt und zurückgibt.
`require()` ist die [CommonJS Methode](https://nodejs.org/api/modules.html), um JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier weisen wir das **app.js**-Modul unter Verwendung eines relativen Pfades zu und lassen die optionale Endung (.**js**) weg.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und spätere Versionen unterstützen ES6 `import`-Anweisungen zum Importieren von JavaScript (ECMAScript) Modulen.
> Um dieses Feature zu verwenden, müssen Sie `"type": "module",` zu Ihrer Express **package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative Importe_ müssen Sie die Dateiendung angeben (weitere Informationen finden Sie in der [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl es Vorteile gibt, `import` zu verwenden, verwendet dieses Tutorial `require()`, um mit [der Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) übereinzustimmen.

Der Rest des Codes in dieser Datei richtet einen Node HTTP-Server mit `app` ein, der auf einen bestimmten Port gesetzt ist (definiert in einer Umgebungsvariable oder 3000, wenn die Variable nicht definiert ist), und beginnt zu lauschen und Serverfehler und -verbindungen zu melden. Vorläufig müssen Sie eigentlich nichts anderes über den Code in dieser Datei wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, ihn zu prüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express`-Anwendungsobjekt (mit dem konventionellen Namen `app`), installiert die Anwendung mit verschiedenen Einstellungen und Middleware und exportiert dann die App vom Modul. Der untenstehende Code zeigt nur die Teile der Datei, die das App-Objekt erstellen und exportieren:

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

Zurück in der **www**-Einstiegspunktdatei oben ist es dieses `module.exports`-Objekt, das dem Aufrufer bereitgestellt wird, wenn diese Datei importiert wird.

Gehen wir die **app.js**-Datei im Detail durch. Zuerst importieren wir einige nützliche Node-Bibliotheken in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor für unsere Anwendung mit npm heruntergeladen haben; sowie _path_, eine Kern-Node-Bibliothek zum Parsen von Datei- und Verzeichnispfaden.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Dann `require()`-n wir Module aus unserem Routes-Directory. Diese Module/Dateien enthalten Code zum Handhaben bestimmter Sätzen verwandter "Routen" (URL-Pfade). Wenn wir die Skelettanwendung erweitern, z.B. um alle Bücher in der Bibliothek aufzulisten, werden wir eine neue Datei zur Handhabung buchbezogener Routen hinzufügen.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben dessen Routen (noch) nicht verwendet (dies geschieht nur ein wenig weiter unten in der Datei).

Als nächstes erstellen wir das `app`-Objekt unter Verwendung unseres importierten _express_-Moduls und richten die Ansichts-(Template)-Engine ein. Es gibt zwei Teile, um die Engine einzurichten. Zuerst setzen wir den `"views"`-Wert, um das Verzeichnis anzugeben, in dem die Templates gespeichert werden (in diesem Fall das Unterverzeichnis **/views**). Dann setzen wir den `"view engine"`-Wert, um die Template-Bibliothek anzugeben (in diesem Fall "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die _Middleware_-Bibliotheken, die wir oben importiert haben, in die Anforderungshandhabungskette hinzuzufügen.
Zum Beispiel sind `express.json()` und `express.urlencoded()` notwendig, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formularfeldern zu befüllen.
Nach diesen Bibliotheken verwenden wir auch die `express.static`-Middleware, die _Express_ dazu bringt, alle statischen Dateien im Verzeichnis **/public** im Projektstamm bereitzustellen.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Da nun die gesamte andere Middleware eingerichtet ist, fügen wir unseren (bereits importierten) Routenhandlungscode zur Anforderungshandhabungskette hinzu. Der importierte Code wird spezifische Routen für die unterschiedlichen _Teile_ der Website definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben genannten Pfade (`"/"` und `"/users"`) werden als Präfix für die in den importierten Dateien definierten Routen behandelt.
> Wenn das importierte **users**-Modul z.B. eine Route für `/profile` definiert, würden Sie auf diese Route unter `/users/profile` zugreifen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

Das letzte Middleware im File fügt Handlermethoden für Fehler und HTTP 404-Antworten hinzu.

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

Das Express-Anwendungsobjekt (app) ist jetzt vollständig konfiguriert. Der letzte Schritt besteht darin, es zu den Modulexports hinzuzufügen (dies ist es, was es ermöglicht, dass es von **/bin/www** importiert wird).

```js
module.exports = app;
```

### Routen

Die Router-Datei **/routes/users.js** ist unten gezeigt (Router-Dateien haben eine ähnliche Struktur, daher müssen wir **index.js** nicht ebenfalls zeigen).
Zuerst lädt sie das _express_-Modul und verwendet es, um ein `express.Router`-Objekt zu bekommen.
Dann spezifiziert sie eine Route auf diesem Objekt und letztlich exportiert sie den Router vom Modul (dies ist es, was erlaubt, dass die Datei in **app.js** importiert wird).

```js
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert eine Rückruffunktion, die aufgerufen wird, wenn eine HTTP `GET`-Anforderung mit dem korrekten Pattern erkannt wird. Das übereinstimmende Pattern ist die Route, die beim Import des Moduls angegeben wurde (`"/users"`) plus was immer in dieser Datei definiert ist (`"/"`). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit Node starten und die URL in Ihrem Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Ein interessanter Punkt oberhalb ist, dass die Rückruffunktion das dritte Argument `next` hat, und daher eine Middleware-Funktion anstelle einer einfachen Routen-Rückruffunktion ist. Obwohl der Code derzeit das `next`-Argument nicht verwendet, könnte es in Zukunft nützlich sein, wenn Sie mehrere Routen-Handler für den `'/'`-Routenpfad hinzufügen wollen.

### Ansichten (Templates)

Die Ansichten (Templates) werden im **/views**-Verzeichnis gespeichert (wie in **app.js** angegeben) und sind mit der Dateierweiterung **.pug** versehen. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein spezifiziertes Template zusammen mit den Werten benannter Variablen, die in einem Objekt übergeben werden, zu rendern, und das Ergebnis dann als Antwort zu senden. Im folgenden Code aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort unter Verwendung des Templates "index" mit der Template-Variable "title" rendert.

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die obige Route wird unten angezeigt (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie im Moment wissen müssen, ist, dass die Variable `title` (mit dem Wert `'Express'`) an der im Template angegebenen Stelle eingefügt wird.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text "_You're so cool_" bei der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server laufen lassen und `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben nun ein Skelett-Website-Projekt für die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ läuft. Am wichtigsten ist, dass Sie auch die Struktur des Projekts verstehen, sodass Sie eine gute Vorstellung darüber haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes werden wir beginnen, das Skelett zu modifizieren, damit es als Bibliotheks-Website funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
