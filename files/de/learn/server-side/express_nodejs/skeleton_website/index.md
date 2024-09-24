---
title: "Express-Tutorial Teil 2: Erstellen einer Skeleton-Website"
slug: Learn/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

Dieser zweite Artikel in unserem [Express-Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein "Skeleton"-Website-Projekt erstellen können, das Sie dann mit spezifischen Routen, Templates/Ansichten und Datenbankaufrufen füllen können.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Die Fähigkeit, Ihre eigenen neuen Website-Projekte mit dem <em>Express Application Generator</em> zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie mit dem Werkzeug [Express Application Generator](https://expressjs.com/en/starter/generator.html) eine "Skeleton"-Website erstellen können, die Sie dann mit spezifischen Routen, Ansichten/Templates und Datenbankaufrufen füllen können. In diesem Fall verwenden wir das Tool, um das Framework für unsere [Local Library-Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen, zu der wir später alle weiteren benötigten Codes hinzufügen werden. Der Prozess ist extrem einfach und erfordert lediglich, dass Sie den Generator in der Befehlszeile mit einem neuen Projektnamen aufrufen und optional auch die Template-Engine und den CSS-Generator der Website angeben.

In den folgenden Abschnitten wird gezeigt, wie Sie den Application Generator aufrufen und es wird eine kleine Erklärung zu den verschiedenen Ansichts-/CSS-Optionen gegeben. Wir werden auch erklären, wie die Skeleton-Website strukturiert ist. Am Ende zeigen wir, wie Sie die Website ausführen können, um zu überprüfen, ob sie funktioniert.

> [!NOTE]
>
> - Der _Express Application Generator_ ist nicht der einzige Generator für Express-Anwendungen, und das generierte Projekt ist nicht der einzige gangbare Weg, Ihre Dateien und Verzeichnisse zu strukturieren. Die generierte Website hat jedoch eine modulare Struktur, die leicht zu erweitern und zu verstehen ist. Informationen zu einer _minimalen_ Express-Anwendung finden Sie im [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express-Dokumentation).
> - Der _Express Application Generator_ deklariert die meisten Variablen mit `var`.
>   Wir haben die meisten dieser Variablen in diesem Tutorial in [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) (und einige in [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) geändert, da wir moderne JavaScript-Praktiken demonstrieren möchten.
> - Dieses Tutorial verwendet die Version von _Express_ und anderen Abhängigkeiten, die in der vom _Express Application Generator_ erstellten **package.json** definiert sind.
>   Diese sind nicht (notwendigerweise) die neuesten Versionen, und Sie möchten sie möglicherweise aktualisieren, wenn Sie eine reale Anwendung in die Produktion überführen.

## Verwenden des Application Generators

Sie sollten den Generator bereits als Teil der [Einrichtung einer Node-Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment) installiert haben. Zur schnellen Erinnerung: Sie installieren das Generator-Tool site-wide mit dem npm-Paketmanager, wie gezeigt:

```bash
npm install express-generator -g
```

Der Generator bietet eine Reihe von Optionen, die Sie in der Befehlszeile mit dem `--help` (oder `-h`) Befehl anzeigen können:

```bash
> express --help

    Verwendung: express [Optionen] [Verzeichnis]

  Optionen:

        --version        gibt die Versionsnummer aus
    -e, --ejs            fügt Unterstützung für die ejs-Engine hinzu
        --pug            fügt Unterstützung für die pug-Engine hinzu
        --hbs            fügt Unterstützung für die handlebars-Engine hinzu
    -H, --hogan          fügt Unterstützung für die hogan.js-Engine hinzu
    -v, --view <engine>  fügt Unterstützung für die Ansicht <engine> hinzu (dust|ejs|hbs|hjs|jade|pug|twig|vash) (standardmäßig jade)
        --no-view        verwendet statt einer Ansichtsengine statisches HTML
    -c, --css <engine>   fügt Unterstützung für das Stylesheet <engine> hinzu (less|stylus|compass|sass) (standardmäßig einfaches CSS)
        --git            fügt .gitignore hinzu
    -f, --force          zwingt in ein nicht-leeres Verzeichnis
    -h, --help           gibt die Verwendungsinformationen aus
```

Sie können Express angeben, ein Projekt im _aktuellen_ Verzeichnis mit der _Jade_ Ansichts-Engine und einfachem CSS zu erstellen (wenn Sie einen Verzeichnisnamen angeben, wird das Projekt in einem Unterordner mit diesem Namen erstellt).

```bash
express
```

Sie können auch eine Ansichts-(Template-)Engine mit `--view` und/oder eine CSS-Generator-Engine mit `--css` auswählen.

> [!NOTE]
> Die anderen Optionen zum Auswählen von Template-Engines (z. B. `--hogan`, `--ejs`, `--hbs` usw.) sind veraltet. Verwenden Sie `--view` (oder `-v`).

### Welche Ansichts-Engine sollte ich verwenden?

Der _Express Application Generator_ erlaubt es Ihnen, eine Reihe beliebter Ansichts-/Template-Engines zu konfigurieren, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) und [Vash](https://www.npmjs.com/package/vash), obwohl es standardmäßig Jade auswählt, wenn Sie keine Ansichtsoption angeben. Express selbst kann auch eine große Anzahl anderer Template-Sprachen [out of the box](https://github.com/expressjs/express/wiki#template-engines) unterstützen.

> [!NOTE]
> Wenn Sie eine Template-Engine verwenden möchten, die vom Generator nicht unterstützt wird, siehe [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation) und die Dokumentation zu Ihrer Ziel-Ansichts-Engine.

Im Allgemeinen sollten Sie eine Template-Engine auswählen, die Ihnen alle benötigten Funktionalitäten bietet und es Ihnen ermöglicht, schneller produktiv zu sein — oder mit anderen Worten, genauso wie Sie jede andere Komponente auswählen würden! Einige der Überlegungen, die Sie bei der Auswahl von Template-Engines anstellen sollten:

- Produktivität — Wenn Ihr Team bereits Erfahrung mit einer Template-Sprache hat, wird es wahrscheinlich mit dieser Sprache schneller produktiv sein. Wenn nicht, sollten Sie die relative Lernkurve der in Frage kommenden Template-Engines in Betracht ziehen.
- Beliebtheit und Aktivität — Überprüfen Sie die Beliebtheit der Engine und ob sie eine aktive Community hat. Es ist wichtig, Unterstützung zu bekommen, wenn im Laufe der Lebensdauer der Website Probleme auftreten.
- Stil — Einige Template-Engines verwenden spezifische Markup, um eingefügten Inhalt innerhalb von "normalem" HTML anzuzeigen, während andere das HTML mit einer anderen Syntax erstellen (zum Beispiel mit Einrückungen und Blocknamen).
- Leistung/Rendering-Zeit.
- Features — Sie sollten prüfen, ob die Engines, die Sie betrachten, folgende Funktionen bieten:

  - Layout-Vererbung: Erlaubt es Ihnen, eine Basistemplate zu definieren und dann nur die Teile davon zu "vererben", die Sie für eine bestimmte Seite anders haben möchten. Dies ist in der Regel ein besserer Ansatz als das Bauen von Templates durch Einfügen einer Reihe erforderlicher Komponenten oder das Erstellen eines Templates von Grund auf jedes Mal.
  - „Include“-Unterstützung: Erlaubt es Ihnen, Templates durch Einschließen anderer Templates aufzubauen.
  - Kurz prägnante Variablen- und Schleifenkontrollsyntax.
  - Möglichkeit zur Filterung von Variablenwerten auf der Template-Ebene, wie z.B. das Großschreiben von Variablen oder das Formatieren eines Datumswerts.
  - Möglichkeit, andere Ausgabeformate als HTML zu generieren, z.B. JSON oder XML.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Client-seitige Features. Wenn eine Template-Engine auf dem Client verwendet werden kann, besteht die Möglichkeit, dass das gesamte oder der größte Teil des Renderings clientseitig durchgeführt wird.

> [!NOTE]
> Es gibt viele Ressourcen im Internet, die Ihnen helfen können, die verschiedenen Optionen zu vergleichen!

Für dieses Projekt verwenden wir die [Pug](https://pugjs.org/api/getting-started.html)-Template-Engine (dies ist die kürzlich umbenannte Jade-Engine), da dies eine der beliebtesten Express/JavaScript-Template-Sprachen ist und direkt vom Generator unterstützt wird.

### Welche CSS-Stylesheet-Engine sollte ich verwenden?

Der _Express Application Generator_ ermöglicht es Ihnen, ein Projekt zu erstellen, das so konfiguriert ist, dass es die gebräuchlichsten CSS-Stylesheet-Engines verwendet: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben schwierig machen. CSS-Stylesheet-Engines ermöglichen es Ihnen, eine leistungsfähigere Syntax zur Definition Ihres CSS zu verwenden und diese dann in einfaches altes CSS für Browser zu kompilieren.

Wie bei Template-Engines sollten Sie die Stylesheet-Engine verwenden, die es Ihrem Team ermöglicht, am produktivsten zu sein. Für dieses Projekt verwenden wir Vanilla-CSS (das Standardformat), da unsere CSS-Anforderungen nicht kompliziert genug sind, um die Verwendung von etwas anderem zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der generierte Code verwendet/enthält keine Datenbanken. _Express_-Anwendungen können jede [Datenbanktechnologie](https://expressjs.com/en/guide/database-integration.html) verwenden, die von _Node_ unterstützt wird (_Express_ selbst definiert kein spezifisches zusätzliches Verhalten/Anforderungen für die Datenbankverwaltung).

Wir besprechen, wie wir eine Datenbank in einem späteren Artikel integrieren.

## Das Projekt erstellen

Für die Beispiel-App _Local Library_, die wir erstellen werden, werden wir ein Projekt namens _express-locallibrary-tutorial_ mit der _Pug_-Template-Bibliothek und keiner CSS-Engine erstellen.

Navigieren Sie zuerst zu dem Ort, an dem Sie das Projekt erstellen möchten, und führen Sie dann den _Express Application Generator_ in der Eingabeaufforderung wie unten gezeigt aus:

```bash
express express-locallibrary-tutorial --view=pug
```

Der Generator erstellt (und listet) die Projektdateien auf.

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

   wechseln Sie das Verzeichnis:
     > cd express-locallibrary-tutorial

   Abhängigkeiten installieren:
     > npm install

   die App ausführen (Bash (Linux oder macOS))
     > DEBUG=express-locallibrary-tutorial:* npm start

   die App ausführen (PowerShell (Windows))
     > $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start

   die App ausführen (Eingabeaufforderung (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

Am Ende der Ausgabe gibt der Generator Anweisungen, wie die Abhängigkeiten (wie in der **package.json**-Datei aufgelistet) installiert und wie die Anwendung auf verschiedenen Betriebssystemen ausgeführt werden kann.

> [!NOTE]
> Die vom Generator erstellten Dateien definieren alle Variablen als `var`.
> Öffnen Sie alle generierten Dateien und ändern Sie die `var`-Deklarationen in `const`, bevor Sie fortfahren (der Rest des Tutorials geht davon aus, dass Sie dies getan haben).

## Die Skeleton-Website ausführen

Zu diesem Zeitpunkt haben wir ein vollständiges Skeleton-Projekt. Die Website tut jedoch noch nicht viel, aber es lohnt sich, sie auszuführen, um zu zeigen, dass sie funktioniert.

1. Installieren Sie zuerst die Abhängigkeiten (der `install`-Befehl wird alle in der **package.json**-Datei des Projekts aufgelisteten Abhängigkeitspakete abrufen).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Führen Sie dann die Anwendung aus.

   - Verwenden Sie auf der Windows-CMD-Eingabeaufforderung diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie in Windows Powershell diesen Befehl:

     ```powershell
     ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > Powershell-Befehle werden in diesem Tutorial nicht behandelt (Die angegebenen „Windows“-Befehle gehen davon aus, dass Sie die Windows-CMD-Eingabeaufforderung verwenden.)

   - Verwenden Sie auf macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Laden Sie dann `http://localhost:3000/` in Ihrem Browser, um auf die App zuzugreifen.

Sie sollten eine Browserseite sehen, die so aussieht:

![Browser für eine von Express generierte Standard-Website](expressgeneratorskeletonwebsite.png)

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 zugänglich ist.

> [!NOTE]
> Sie könnten die App auch einfach mit dem Befehl `npm start` starten. Die Angabe der DEBUG-Variable wie gezeigt ermöglicht das Konsolen-Logging/debuggen. Zum Beispiel sehen Sie beim Besuch der obigen Seite Debug-Ausgaben wie diese:
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

Alle Änderungen, die Sie an Ihrer Express-Website vornehmen, sind derzeit erst sichtbar, wenn Sie den Server neu starten. Es wird schnell sehr lästig, den Server jedes Mal stoppen und neu starten zu müssen, wenn Sie eine Änderung vornehmen, daher lohnt es sich, die Automatisierung des Neustarts des Servers bei Bedarf in Betracht zu ziehen.

Ein praktisches Tool zu diesem Zweck ist [nodemon](https://github.com/remy/nodemon). Dies wird normalerweise global installiert (da es sich um ein "Tool" handelt), aber hier installieren und verwenden wir es lokal als _Entwicklungsabhängigkeit_, so dass alle Entwickler, die an dem Projekt arbeiten, es automatisch erhalten, wenn sie die Anwendung installieren. Verwenden Sie den folgenden Befehl im Stammverzeichnis des Skeleton-Projekts:

```bash
npm install --save-dev nodemon
```

Wenn Sie sich dennoch entscheiden, [nodemon](https://github.com/remy/nodemon) global auf Ihrem Rechner zu installieren und nicht nur in die **package.json**-Datei Ihres Projekts:

```bash
npm install -g nodemon
```

Wenn Sie die **package.json**-Datei Ihres Projekts öffnen, sehen Sie jetzt einen neuen Abschnitt mit dieser Abhängigkeit:

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
}
```

Da das Tool nicht global installiert ist, können wir es nicht von der Befehlszeile aus starten (es sei denn, wir fügen es dem Pfad hinzu), aber wir können es von einem NPM-Skript aus aufrufen, da NPM alles über die installierten Pakete weiß. Finden Sie den `scripts`-Abschnitt Ihrer package.json. Anfänglich wird es eine Zeile geben, die mit `"start"` beginnt. Aktualisieren Sie sie, indem Sie am Ende dieser Zeile ein Komma setzen und die `"devstart"`- und `"serverstart"`-Zeilen hinzufügen:

- Unter Linux und macOS wird der Skript-Abschnitt so aussehen:

  ```json
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    },
  ```

- Unter Windows sieht der Wert "serverstart" stattdessen so aus (wenn Sie die Eingabeaufforderung verwenden):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Wir können jetzt den Server fast genauso starten wie zuvor, aber unter Verwendung des `devstart`-Befehls.

> [!NOTE]
> Jetzt, wenn Sie eine Datei im Projekt bearbeiten, wird der Server neu gestartet (oder Sie können ihn jederzeit durch Eingabe von `rs` in der Befehlszeile neu starten). Sie müssen die Seite jedoch weiterhin aktualisieren, um die Änderungen im Browser anzuzeigen.
>
> Jetzt müssen wir "`npm run <scriptname>`" statt einfach `npm start` aufrufen, weil "start" tatsächlich ein NPM-Befehl ist, der einem benannten Skript zugeordnet ist. Wir hätten den Befehl im _start_-Skript ersetzen können, aber wir wollen _nodemon_ nur während der Entwicklung verwenden, daher ist es sinnvoll, einen neuen Skript-Befehl zu erstellen.
>
> Der zum Skript in der **package.json** hinzugefügte `serverstart`-Befehl ist ein sehr gutes Beispiel. Mit diesem Ansatz müssen Sie keinen langen Befehl mehr eingeben, um den Server zu starten. Beachten Sie, dass der hinzugefügte spezielle Befehl für über macOS oder Linux funktioniert.

## Das generierte Projekt

Betrachten wir nun das Projekt, das wir gerade erstellt haben.

### Verzeichnisstruktur

Das generierte Projekt hat die folgende Verzeichnis- und Dateistruktur (Dateien sind die Elemente **ohne** Präfix "/" sichtbar).
Die **package.json**-Datei definiert die Abhängigkeiten der Anwendung und andere Informationen.
Es definiert auch ein Startskript, das den Einstiegspunkt der Anwendung, die JavaScript-Datei **/bin/www**, aufruft.
Diese legt einen Teil des Anwendungsfehlermanagements fest und lädt dann **app.js**, um den Rest der Arbeit zu erledigen.
Die Anwendungsrouten werden in separaten Modulen im **routes/**-Verzeichnis gespeichert.
Zudem werden die Templates im Verzeichnis /**views** gespeichert.

```plain
express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [etwa 6700 Unterverzeichnisse und Dateien]
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

Die folgenden Abschnitte beschreiben diese Dateien noch einmal etwas detaillierter.

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

Der Skriptabschnitt definiert zuerst ein "_start_"-Skript, das wir aufrufen, wenn wir `npm start` verwenden, um den Server zu starten (Dieses Skript wurde vom _Express Application Generator_ hinzugefügt). Aus der Skriptdefinition können Sie sehen, dass dies tatsächlich die JavaScript-Datei **./bin/www** mit _Node_ startet.

Wir haben diesen Abschnitt bereits in [Serverneustart bei Dateiänderungen aktivieren](#enable-server-restart-on-file-changes) geändert, indem wir die Skripts _devstart_ und _serverstart_ hinzugefügt haben.
Diese können verwendet werden, um die gleiche **./bin/www** Datei mit _nodemon_ anstelle von _node_ zu starten (diese Version der Skripte ist für Linux und macOS, wie oben besprochen).

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

Die Abhängigkeiten umfassen das Paket _express_ und das Paket für unsere ausgewählte Ansichts-Engine (_pug_).
Darüber hinaus haben wir die folgenden Pakete, die in vielen Webanwendungen nützlich sind:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Wird verwendet, um den Cookie-Header zu analysieren und `req.cookies` zu füllen (bietet im Wesentlichen eine bequeme Methode, um auf Cookie-Informationen zuzugreifen).
- [debug](https://www.npmjs.com/package/debug): Ein kleines Node-Debugging-Dienstprogramm, das nach dem Debugging-Verfahren des Node-Kerns modelliert ist.
- [morgan](https://www.npmjs.com/package/morgan): Eine HTTP-Anforderungs-Logger-Middleware für Node.
- [http-errors](https://www.npmjs.com/package/http-errors): Erstellen Sie bei Bedarf HTTP-Fehler (für Express-Fehlerbehandlung).

Die Standardversionen im generierten Projekt sind etwas veraltet.
Ersetzen Sie den Abschnitt mit den Abhängigkeiten in Ihrer `package.json`-Datei durch den folgenden Text, der die neuesten Versionen dieser Bibliotheken zur Zeit des Verfassens dieser Zeilen angibt:

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
> Es ist eine gute Idee, regelmäßig die aktuell kompatiblen Versionen Ihrer Abhängigkeitsbibliotheken zu aktualisieren — dies kann sogar automatisch oder halbautomatisch im Rahmen einer kontinuierlichen Integrationseinstellung erfolgen.
>
> Normalerweise bleiben Aktualisierungen von Bibliotheken auf die Minor- und Patch-Version kompatibel.
> Wir haben jeder Version oben ein `^` vorangestellt, sodass wir automatisch auf die neueste `minor.patch`-Version aktualisieren können, indem wir diesen Befehl ausführen:
>
> ```bash
> npm update --save
> ```
>
> Hauptversionen ändern die Kompatibilität.
> Für diese Updates müssen wir die `package.json` und den Code, der die Bibliothek verwendet, manuell aktualisieren und das Projekt intensiv testen.

### www Datei

Die Datei **/bin/www** ist der Anwendungseinstiegspunkt! Das allererste, was es macht, ist das `require()` der "echten" Anwendungseinstiegspunkte (**app.js**, im Projektstamm), die das [`express()`](https://expressjs.com/en/api.html)-Anwendungsobjekt erstellt und zurückgibt.
`require()` ist der [CommonJS-Weg](https://nodejs.org/api/modules.html), JavaScript-Code, JSON und andere Dateien in die aktuelle Datei zu importieren.
Hier geben wir das **app.js**-Modul mit einem relativen Pfad an und lassen die optionale (.**js**) Dateierweiterung aus.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 und später unterstützen ES6-`import`-Anweisungen zum Importieren von JavaScript (ECMAScript)-Modulen.
> Um dieses Feature zu verwenden, müssen Sie `"type": "module",` zu Ihrer Express-**package.json**-Datei hinzufügen, alle Module in Ihrer Anwendung müssen `import` anstelle von `require()` verwenden, und für _relative imports_ müssen Sie die Dateierweiterung einbeziehen (für weitere Informationen siehe die [Node-Dokumentation](https://nodejs.org/api/esm.html#introduction)).
> Obwohl die Verwendung von `import` Vorteile bietet, verwendet dieses Tutorial `require()`, um der [Express-Dokumentation](https://expressjs.com/en/starter/hello-world.html) zu entsprechen.

Der Rest des Codes in dieser Datei richtet einen Node-HTTP-Server mit `app` auf einen bestimmten Port (definiert in einer Umgebungsvariablen oder 3000, wenn die Variable nicht definiert ist) ein und beginnt dann mit dem Lauschen und der Berichterstattung über Serverfehler und Verbindungen. Für den Moment müssen Sie nichts mehr über den Code wissen (alles in dieser Datei ist "Boilerplate"), aber fühlen Sie sich frei, ihn zu überprüfen, wenn Sie interessiert sind.

### app.js

Diese Datei erstellt ein `express`-Anwendungsobjekt (üblicherweise als `app` bezeichnet), richtet die Anwendung mit verschiedenen Einrichtungsmitteln und Middleware ein und exportiert dann die App aus dem Modul. Der Code unten zeigt nur die Teile der Datei, die die App erstellen und exportieren:

```js
const express = require("express");
const app = express();
// …
module.exports = app;
```

Zurück in der **www**-Einstiegspunktdatei oben, ist dies das `module.exports`-Objekt, das an den Aufrufer zurückgegeben wird, wenn diese Datei importiert wird.

Lassen Sie uns die **app.js**-Datei im Detail durchgehen. Zuerst importieren wir einige nützliche Node-Libraries in die Datei mit `require()`, einschließlich _http-errors_, _express_, _morgan_ und _cookie-parser_, die wir zuvor mit npm heruntergeladen haben; und _path_, das eine Core-Node-Library zum Parsen von Datei- und Verzeichnispfaden ist.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Danach `require()` wir aus unseren Routenverzeichnissen Module. Diese Module/Dateien enthalten Code, um bestimmte Sets von verwandten "Routen" (URL-Pfade) zu bearbeiten. Wenn wir die Skeleton-Anwendung erweitern, zum Beispiel um alle Bücher in der Bibliothek aufzulisten, fügen wir eine neue Datei hinzu, um mit buchbezogenen Routen umzugehen.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> An diesem Punkt haben wir das Modul nur _importiert_; wir haben seine Routen noch nicht tatsächlich genutzt (das geschieht etwas weiter unten in der Datei).

Als Nächstes erstellen wir das `app`-Objekt mit unserem importierten _express_-Modul und verwenden es dann zur Einrichtung der Ansicht (Template)-Engine. Es gibt zwei Teile zur Einrichtung der Engine. Zuerst setzen wir den '`views`'-Wert, um das Verzeichnis anzugeben, in dem die Templates gespeichert werden (in diesem Fall das Unterverzeichnis **/views**). Dann legen wir den '`view engine`'-Wert fest, um die Template-Bibliothek zu spezifizieren (in diesem Fall "pug").

```js
const app = express();

// Ansicht engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Der nächste Satz von Funktionen ruft `app.use()` auf, um die obigen _Middleware_-Libraries in die Anfragenkette einzufügen.
Zum Beispiel sind `express.json()` und `express.urlencoded()` erforderlich, um [`req.body`](https://expressjs.com/en/api.html#req.body) mit den Formfeldern zu füllen.
Nach diesen Bibliotheken verwenden wir auch die `express.static` Middleware, die _Express_ dazu bringt, alle statischen Dateien im **/public** Verzeichnis im Projektstamm zu servieren.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Nachdem die gesamte andere Middleware eingerichtet ist, fügen wir unseren (oben importierten) Routen-Verarbeitungscode in die Anfragenkette ein. Der importierte Code wird bestimmte Routen für die verschiedenen _Teile_ der Site definieren:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`'/'` und '`/users'`) werden als Präfix zu den in den importierten Dateien definierten Routen behandelt.
> Wenn zum Beispiel das importierte **users**-Modul eine Route für `/profile` definiert, würde man auf diese Route mit `/users/profile` zugreifen. Wir werden in einem späteren Artikel mehr über Routen sprechen.

Die letzte Middleware in der Datei fügt Handlermethoden für Fehler und HTTP-404-Antworten hinzu.

```js
// Catch 404 und leiten Sie an Fehler-Handler weiter
app.use((req, res, next) => {
  next(createError(404));
});

// Fehler-Handler
app.use((err, req, res, next) => {
  // Lokales festlegen, nur Fehler in der Entwicklung bereitstellen
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Rendern Sie die Fehlerseite
  res.status(err.status || 500);
  res.render("error");
});
```

Das Express-Anwendungsobjekt (app) ist jetzt vollständig konfiguriert. Der letzte Schritt ist, es zum Modul-Export hinzuzufügen (dies ist das, was es ermöglicht, von **/bin/www** importiert zu werden).

```js
module.exports = app;
```

### Routen

Die Routen-Datei **/routes/users.js** wird unten gezeigt (Routendateien haben eine ähnliche Struktur, daher müssen wir **index.js** nicht auch zeigen).
Zuerst lädt es das _express_-Modul und verwendet es, um ein `express.Router`-Objekt zu erhalten.
Dann spezifiziert es eine Route auf diesem Objekt und zuletzt exportiert es den Router aus dem Modul (dies ist das, was es erlaubt, dass die Datei in **app.js** importiert wird).

```js
const express = require("express");
const router = express.Router();

/* Benutzerdarstellung. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Die Route definiert einen Callback, der jedes Mal aufgerufen wird, wenn eine HTTP-`GET`-Anfrage mit dem richtigen Muster erkannt wird. Das übereinstimmende Muster ist die Route, die beim Import des Moduls spezifiziert wird ('`/users`') plus das, was in dieser Datei definiert ist ('`/`'). Mit anderen Worten, diese Route wird verwendet, wenn eine URL von `/users/` empfangen wird.

> [!NOTE]
> Probieren Sie dies aus, indem Sie den Server mit Node starten und die URL im Browser besuchen: `http://localhost:3000/users/`. Sie sollten eine Nachricht sehen: 'respond with a resource'.

Etwas Interessantes oben ist, dass die Callback-Funktion das dritte Argument '`next`' hat, und daher eine Middleware-Funktion anstelle eines einfachen Routen-Callbacks ist. Während der Code derzeit das `next`-Argument nicht verwendet, könnte es in der Zukunft nützlich sein, wenn Sie mehrere Routen-Handler zum `'/'`-Routen-Pfad hinzufügen möchten.

### Ansichten (templates)

Die Ansichten (Templates) werden im **/views**-Verzeichnis (wie in **app.js** angegeben) gespeichert und haben die Dateierweiterung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/4x/api.html#res.render) wird verwendet, um ein spezifisches Template zusammen mit den Werten benannter Variablen, die in einem Objekt übergeben werden, zu rendern und das Ergebnis dann als Antwort zu senden. Im Code unten aus **/routes/index.js** können Sie sehen, wie diese Route eine Antwort mit dem Template "index" rendert und dabei die Template-Variable "title" übergibt.

```js
/* Startseite anzeigen. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Das entsprechende Template für die obige Route ist unten angegeben (**index.pug**). Wir werden später mehr über die Syntax sprechen. Alles, was Sie jetzt wissen müssen, ist, dass die `title`-Variable (mit dem Wert `'Express'`) dort eingefügt wird, wo es im Template spezifiziert ist.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Fordern Sie sich selbst heraus

Erstellen Sie eine neue Route in **/routes/users.js**, die den Text „_You're so cool_“ bei der URL `/users/cool/` anzeigt. Testen Sie es, indem Sie den Server ausführen und die Seite `http://localhost:3000/users/cool/` in Ihrem Browser besuchen.

## Zusammenfassung

Sie haben jetzt ein Skeleton-Website-Projekt für die [Local Library](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _Node_ läuft. Am wichtigsten ist, dass Sie auch verstehen, wie das Projekt strukturiert ist, so dass Sie eine gute Vorstellung davon haben, wo wir Änderungen vornehmen müssen, um Routen und Ansichten für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes beginnen wir mit der Modifizierung des Skeletons, sodass es als Bibliotheks-Website funktioniert.

## Siehe auch

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express-Dokumentation)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
