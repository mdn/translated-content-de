---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichten der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: b2a7378d76136b568fe9414f46abda899b2bf700
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Da Sie nun wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) da ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für eines dieser Betriebssysteme bietet dieser Artikel alles, was Sie zum Entwickeln von Express-Anwendungen benötigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie Sie ein Terminal / eine Befehlszeile öffnen. Wissen, wie Sie Softwarepakete auf Ihrem Entwicklungscomputer installieren.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Entwicklungsumgebung für Express auf Ihrem Computer einrichten.</td>
    </tr>
  </tbody>
</table>

## Übersicht über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. Dieser Abschnitt bietet einen Überblick über die erforderlichen Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Node.js_, dem _npm-Paketmanager_ und (optional) dem _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden gemeinsam aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystempaketmanagern oder aus dem Quellcode (wie in den folgenden Abschnitten gezeigt) installiert. _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungsmiddleware, Middleware zum Bereitstellen statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zur Erstellung von Grundgerüsten für _Express_-Web-Apps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, da Sie dieses Tool nicht benötigen, um Apps zu erstellen, die Express verwenden, oder Express-Apps zu bauen, die das gleiche architektonische Layout oder die gleichen Abhängigkeiten haben. Wir werden es jedoch verwenden, da es den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks umfasst die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. Bei _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt weitere Peripheriewerkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Quellcode-Verwaltungstools wie [Git](https://git-scm.com/), um verschiedene Versionen Ihres Codes sicher zu verwalten. Wir gehen davon aus, dass Sie diese Werkzeuge bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann unter Windows, macOS, vielen Varianten von Linux, Docker usw. ausgeführt werden. Es gibt eine vollständige Liste auf der Node.js [Downloads](https://nodejs.org/en/download)-Seite. Fast jeder PC sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ ausführen kann.

In diesem Artikel stellen wir Anleitungen für die Einrichtung unter Windows, macOS und Ubuntu Linux bereit.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript) Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-Term Supported)_-Version verwenden, da diese stabiler als die "aktuelle" Version ist, während sie dennoch relativ neue Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten die _aktuellen_ Version nutzen, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie die neueste LTS-Version von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template-Engines, Authentifizierungsmechanismen usw. sind Teil der Anwendung und werden mit dem npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden diese in späteren app-spezifischen Artikeln behandeln.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Node.js_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren. Um dies zu erleichtern, installieren wir zunächst einen Node-Version-Manager und verwenden ihn dann, um die neuesten Long-Term-Supported-Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können Node.js und npm auch mit Installationsprogrammen von <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche, um das LTS-Build, das "für die meisten Benutzer empfohlen" wird, herunterzuladen) oder [verwenden Sie den Paketmanager Ihres Betriebssystems](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend, einen Node-Version-Manager zu verwenden, da diese es einfacher machen, eine bestimmte Version von Node und npm zu installieren, zu aktualisieren und zwischen ihnen zu wechseln.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows. Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das unter Node-Entwicklern hoch angesehen ist.

Installieren Sie die neueste Version mit dem Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases). Nachdem `nvm-windows` installiert ist, öffnen Sie ein Befehlsfenster (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Node.js und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt der Erstellung dieses Dokuments ist die LTS-Version von Node.js 22.17.0. Sie können dies als _aktuelle Version_ mit folgendem Befehl festlegen:

```bash
nvm use 22.17.0
```

> [!NOTE]
> Wenn Sie "Zugriff verweigert"-Warnungen erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Optionen der Befehlszeile zu finden, wie z. B. das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Version-Managern für Ubuntu und macOS. [nvm](https://github.com/nvm-sh/nvm) ist einer der beliebteren und ist die Originalversion, auf der `nvm-windows` basiert. Beachten Sie [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminal-Anweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert ist, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Node.js und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt der Erstellung dieses Dokuments ist die LTS-Version von Node.js 22.17.0. Der Befehl `nvm list` zeigt die heruntergeladene Versionenmenge und die aktuelle Version an. Sie können eine bestimmte Version als _aktuelle Version_ mit dem folgenden Befehl festlegen (dieselbe wie für `nvm-windows`):

```bash
nvm use 22.17.0
```

Verwenden Sie den Befehl `nvm --help`, um andere Optionen der Befehlszeile zu finden. Diese sind oft ähnlich oder identisch mit denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Node.js- und npm-Installation

Sobald Sie `nvm` auf eine bestimmte Node-Version eingestellt haben, können Sie die Installation testen. Eine gute Möglichkeit, dies zu tun, ist die Verwendung des Befehls "version" in Ihrem Terminal/der Befehlszeile und die Überprüfung, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v22.17.0
```

Der _Node.js_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.9.2
```

Als etwas aufregenderer Test erstellen wir einen sehr einfachen "pure Node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL im Browser aufrufen:

1. Kopieren Sie den folgenden Text in eine Datei namens **hellonode.js**. Dies verwendet reine Node-Funktionen (nichts von Express):

   ```js
   // Load HTTP module
   const http = require("http");

   const hostname = "127.0.0.1";
   const port = 3000;

   // Create HTTP server and listen on port 3000 for requests
   const server = http.createServer((req, res) => {
     // Set the response HTTP header with HTTP status and Content type
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("Hello World\n");
   });

   // Listen for request on port 3000, and as a callback function have the port listened on logged
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der HTTP-Anfragen auf Port 3000 lauscht. Das Skript gibt dann eine Meldung an die Konsole aus, welche Browser-URL Sie zur Überprüfung des Servers verwenden können. Die Funktion `createServer()` nimmt eine Rückruffunktion als Parameter, die aufgerufen wird, wenn eine HTTP-Anfrage eingeht — diese gibt eine Antwort mit dem HTTP-Statuscode 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir erklären unseren Code ausführlicher, sobald wir Express verwenden!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis wie die Datei `hellonode.js` in Ihrem Befehlsfenster navigieren und `node` zusammen mit dem Skriptnamen aufrufen, etwa so:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, wird eine Konsolenausgabe angezeigt, die die IP-Adresse angibt, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen. `npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken), die eine Anwendung für die Entwicklung, Tests und/oder Produktion benötigt, abzurufen und kann auch verwendet werden, um Tests und Werkzeuge im Entwicklungsprozess auszuführen.

> [!NOTE]
> Aus Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code verwenden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat abzurufen. Normalerweise verwalten wir stattdessen Abhängigkeiten mit einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, der Beschreibung, der initialen auszuführenden Datei, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es kompatibel ist, usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und anderen Benutzern zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später werden wir zeigen, wie dieses Paket und andere bereits für uns mithilfe des _Express Application Generator_ spezifiziert sind. Dieser Abschnitt ist enthalten, weil es nützlich ist zu wissen, wie npm funktioniert und was der Anwendungsgenerator erstellt.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm-Befehl `init`, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fragt Sie nach mehreren Dingen, einschließlich des Namens und der Version Ihrer Anwendung sowie des Namens der ersten Einstiegsdatei (standardmäßig ist dies **index.js**). Akzeptieren Sie für den Moment einfach die Standardeinstellungen:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die akzeptierten Standardeinstellungen, die mit der Lizenz enden.

   ```json
   {
     "name": "myapp",
     "version": "1.0.0",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC",
     "description": ""
   }
   ```

3. Installieren Sie nun Express im Verzeichnis `myapp` und speichern Sie es in der Liste der Abhängigkeiten Ihrer **package.json**-Datei:

   ```bash
   npm install express
   ```

   Der Abhängigkeitsabschnitt Ihrer **package.json** wird nun am Ende der **package.json**-Datei angezeigt und _Express_ einschließen.

   ```json
   {
     "name": "myapp",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express": "^5.1.0"
     }
   }
   ```

4. Um die Express-Bibliothek zu verwenden, rufen Sie die Funktion `require()` in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung zu integrieren.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis des "myapp"-Anwendungsordners und geben Sie ihr folgenden Inhalt:

   ```js
   const express = require("express");

   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello World!");
   });

   app.listen(port, () => {
     console.log(`Example app listening on port ${port}!`);
   });
   ```

   Dieser Code zeigt eine minimale "HelloWorld"-Express-Webanwendung.
   Er importiert das "express"-Modul mithilfe von `require()` und verwendet es, um einen Server (`app`) zu erstellen, der HTTP-Anfragen auf Port 3000 lauscht und eine Meldung an die Konsole ausgibt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP `GET`-Anfragen mit dem angegebenen URL-Pfad ('/’), indem sie eine Funktion aufruft, um unsere _Hello World!_-Nachricht zu senden.

   > [!NOTE]
   > Die Backticks im `` `Example app listening on port ${port}!` `` erlauben es uns, den Wert von `$port` in den String einzufügen.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrer Befehlszeile aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen dann die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Um zum Beispiel das beliebte JavaScript-Linting-Werkzeug [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt ausführen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zu Ihrer Anwendung **package.json** hinzugefügt werden:

```json
{
  "devDependencies": {
    "eslint": "^9.30.1"
  }
}
```

> [!NOTE]
> "[Linters](<https://de.wikipedia.org/wiki/Lint_(Software)>)" sind Werkzeuge, die eine statische Analyse von Software durchführen, um die Einhaltung/Nichteinhaltung einer Reihe von Kodierungs-Best-Practice zu erkennen und zu melden.

### Aufgaben ausführen

Zusätzlich zur Definition und dem Abrufen von Abhängigkeiten können Sie auch benannte Skripte in Ihren **package.json**-Dateien definieren und npm mit dem Befehl [run-script](https://docs.npmjs.com/cli/commands/npm-run/) aufrufen, um sie auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. Tools zum Minimieren von JavaScript, Verkleinern von Bildern, LINT/Analyse Ihres Codes usw.).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Um beispielsweise ein Skript zu definieren, das die _eslint_-Entwicklungsabhängigkeit ausführt, die wir im vorherigen Abschnitt angegeben haben, könnten wir den folgenden Skript-Block zu unserer **package.json**-Datei hinzufügen (unter der Annahme, dass unsere Anwendungsquelle sich in einem Ordner `/src/js` befindet):

```json
{
  "scripts": {
    // …
    "lint": "eslint src/js"
    // …
  }
}
```

Zur weiteren Erklärung: `eslint src/js` ist ein Befehl, den wir in unser Terminal/eingeben könnten, um `eslint` auf JavaScript-Dateien im Verzeichnis `src/js` innerhalb unseres App-Ordners auszuführen. Die Einbeziehung des oben genannten in die package.json-Datei unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Dann könnten wir eslint mit npm ausführen, indem wir aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht kürzer aussehen als der ursprüngliche Befehl, aber Sie können viel größere Befehle in Ihre npm-Skripte aufnehmen, einschließlich Ketten mehrerer Befehle. Sie könnten ein einzelnes npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generator

Das Werkzeug [Express Application Generator](https://expressjs.com/en/starter/generator/) generiert ein Express-Anwendungsskelett. Installieren Sie den Generator mit npm wie folgt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile unter Ubuntu oder macOS mit `sudo` voranstellen. Das Flag `-g` installiert das Tool global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zum gewünschten Speicherort und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Es sei denn, Sie verwenden eine ältere Node.js-Version (< 8.2.0), könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat den gleichen Effekt wie die Installation und dann das Ausführen von `express-generator`, installiert jedoch das Paket nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben. Verwenden Sie den Befehl `help`, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Standorts und zeigt den Fortschritt des Builds auf der Konsole an. Nach Abschluss zeigt das Werkzeug die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App hat eine **package.json**-Datei im Stammverzeichnis. Sie können diese öffnen, um zu sehen, welche Abhängigkeiten installiert sind, einschließlich Express und der Template-Bibliothek Jade:

```json
{
  "name": "helloworld",
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
    "jade": "~1.11.0",
    "morgan": "~1.9.1"
  }
}
```

Installieren Sie alle Abhängigkeiten für die Helloworld-App mit npm wie folgt:

```bash
cd helloworld
npm install
```

Starten Sie dann die App (die Befehle sind leicht unterschiedlich für Windows und Linux/macOS), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erstellt nützliche Protokolle, was zu einer Ausgabe wie der folgenden führt:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standard-Begrüßungsseite von Express zu sehen.

![Express - Generierte App Standardbildschirm](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zum Artikel über das Erstellen einer Skelettanwendung kommen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zum Erstellen von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und auch wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial zur Erstellung einer vollständigen Webanwendung mit dieser Umgebung und den zugehörigen Tools.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing/) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator/) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
