---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, wo Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für eines dieser Betriebssysteme bietet dieser Artikel alles, was Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

> [!WARNING]
> Das Express-Tutorial wurde für die Version Express 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren, um Express 5 zu unterstützen. Bis dahin haben wir die Installationsbefehle aktualisiert, sodass sie Express 4 und nicht die neueste Version installieren, um potenzielle Kompatibilitätsprobleme zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal / eine Befehlszeile öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Um eine Entwicklungsumgebung für Express auf Ihrem Computer einzurichten.</td>
    </tr>
  </tbody>
</table>

## Übersicht über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt bietet einen Überblick über die benötigten Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, dem _npm-Paketmanager_ und (optional) dem _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Paketmanagern des Betriebssystems oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Servieren statischer Dateien usw.) installiert.

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zum Erstellen von Skeleton-_Express_-Webanwendungen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, da Sie dieses Werkzeug nicht _brauchen_, um Anwendungen zu erstellen, die Express verwenden, oder um Express-Anwendungen mit derselben Architektur oder Abhängigkeiten zu konstruieren. Wir werden ihn jedoch verwenden, da er den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt auch andere periphere Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Versionskontroll-Werkzeuge wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie bereits solche Werkzeuge installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann unter Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der [Downloads](https://nodejs.org/en/download)-Seite von Node.js. Fast jeder Personal Computer sollte über die notwendige Leistung verfügen, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, auf der _Node_ läuft.

In diesem Artikel stellen wir Anweisungen für die Einrichtung unter Windows, macOS und Ubuntu Linux zur Verfügung.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Node-Veröffentlichungen](https://nodejs.org/en/blog/release/) — neuere Veröffentlichungen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen von ECMAScript (JavaScript)-Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-Term-Support)_-Version verwenden, da diese stabiler ist als die "aktuelle" Version, dennoch relativ aktuelle Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten die _aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Bei _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie z. B. Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mit dem npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden sie in späteren, spezifischen Artikel über Anwendungen besprechen.

## Installation von Node

Um _Express_ zu verwenden, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zunächst einen Node-Versionmanager und verwenden ihn dann, um die neuesten Long Term Supported (LTS)-Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit Installationsprogrammen auf <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche, um den LTS-Build herunterzuladen, der "Für die meisten Benutzer empfohlen" ist), oder Sie können [die Installation mit dem Paketmanager für Ihr Betriebssystem](https://nodejs.org/en/download) vornehmen (nodejs.org).
> Wir empfehlen dringend, einen Node-Versionmanager zu verwenden, da diese es einfacher machen, eine bestimmte Version von Node und npm zu installieren, zu aktualisieren und zu wechseln.

### Windows

Es gibt eine Reihe von Node-Versionmanagern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), der unter Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version über das Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert wurde, öffnen Sie ein Eingabeaufforderungsfenster (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zur Zeit der Erstellung dieses Textes ist die LTS-Version von Nodejs 20.11.0.
Sie können diese als die _aktuelle Version_ verwenden, indem Sie den folgenden Befehl verwenden:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie Warnungen über "Access Denied" erhalten, müssen Sie diesen Befehl mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu erhalten, wie das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Versionmanagern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der beliebteren und ist die Originalversion, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanleitungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert ist, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zur Zeit der Erstellung dieses Textes ist die LTS-Version von Nodejs 20.11.0.
Der Befehl `nvm list` zeigt die heruntergeladene Versionen und die aktuelle Version an.
Sie können eine bestimmte Version als _aktuelle Version_ festlegen, indem Sie den folgenden Befehl verwenden (genau wie bei `nvm-windows`):

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu erfahren.
Diese sind oft ähnlich oder gleich denen von `nvm-windows`.

### Testen Sie Ihre Nodejs- und npm-Installation

Sobald Sie `nvm` angewiesen haben, eine bestimmte Node-Version zu verwenden, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, ist die Verwendung des "version"-Befehls in Ihrem Terminal/Befehlsfenster und zu überprüfen, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als etwas aufregenderen Test lassen Sie uns einen sehr einfachen "reinen Node"-Server erstellen, der im Browser "Hello World" ausgibt, wenn Sie die richtige URL in Ihrem Browser besuchen:

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server zu erstellen (`createServer()`), der HTTP-Anfragen am Port 3000 abhört. Das Skript gibt dann eine Nachricht in die Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die `createServer()`-Funktion nimmt als Argument eine Callback-Funktion an, die bei einer eingehenden HTTP-Anfrage aufgerufen wird — diese gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code tut! Wir werden unseren Code genauer erklären, sobald wir anfangen, Express zu verwenden!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis wie Ihre `hellonode.js`-Datei navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server gestartet ist, wird die Konsolenausgabe angezeigt, die die IP-Adresse angibt, unter der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) zu holen, die eine Anwendung für die Entwicklung, das Testen und/oder die Produktion benötigt, und kann auch verwendet werden, um Tests und Werkzeuge auszuführen, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code benötigen müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat zu beziehen. Typischerweise verwalten wir Abhängigkeiten jedoch mithilfe einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-„Paket“ auf, einschließlich des Namens des Pakets, der Version, der Beschreibung, der initialen Datei, die ausgeführt werden soll, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der Node-Versionen, mit denen es arbeiten kann, usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und anderen Benutzern zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später werden wir zeigen, wie dieses Paket und andere bereits für uns mithilfe des _Express Application Generator_ spezifiziert sind. Dieser Abschnitt wird bereitgestellt, da es nützlich ist, zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm-`init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, eine Reihe von Dingen anzugeben, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der initial auszuführenden Datei (standardmäßig ist dies **index.js**). Akzeptieren Sie zunächst einfach die Standardeinstellungen:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), werden die akzeptierten Standardeinstellungen angezeigt, die mit der Lizenz enden.

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
     "license": "ISC"
   }
   ```

3. Installieren Sie nun Express im `myapp`-Verzeichnis und speichern Sie es in der Liste der Abhängigkeiten Ihrer **package.json**-Datei:

   ```bash
   npm install express@^4.21.2
   ```

   Der Abhängigkeitsbereich Ihrer **package.json** erscheint jetzt am Ende der **package.json**-Datei und wird _Express_ enthalten.

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
       "express": "^4.21.2"
     }
   }
   ```

4. Um die Express-Bibliothek zu verwenden, rufen Sie die `require()`-Funktion in Ihrer **index.js**-Datei auf, um sie in Ihrer Anwendung nutzen zu können.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis des "myapp"-Anwendungsverzeichnisses und geben Sie ihr die folgenden Inhalte:

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

   Dieser Code zeigt eine minimale "HelloWorld" Express-Webanwendung.
   Dies importiert das "express"-Modul mittels `require()` und verwendet es, um einen Server (`app`) zu erstellen, der HTTP-Anfragen am Port 3000 abhört und eine Nachricht in die Konsole ausgibt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die `app.get()`-Funktion antwortet nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall, indem sie eine Funktion aufruft, um unsere _Hello World!_-Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` ermöglichen uns, den Wert von `$port` in den String zu interpolieren.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrem Befehlsfenster aufrufen:

   ```bash
   node index.js
   ```

   Sie werden die folgende Konsolenausgabe sehen:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenfolge „Hello World!“ anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit die Benutzer Ihres Pakets sie in der Produktion nicht installieren müssen). Zum Beispiel, um das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zur **package.json** Ihrer Anwendung hinzugefügt:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linter](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die eine statische Analyse auf Software durchführen, um die Einhaltung/Nicht-Einhaltung einer Reihe von besten Praxis-Kodierungsregeln zu erkennen und zu melden.

### Ausführung von Aufgaben

Zusätzlich zu den definierten und abgerufenen Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm verwenden, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/)-Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um die Ausführung von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. das Ausführen von Tools zum Komprimieren von JavaScript, Verkleinern von Bildern, LINT/Analysieren Ihres Codes usw.).

> [!NOTE]
> Task Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können ebenfalls verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Zum Beispiel, um ein Skript zu definieren, um das _eslint_-Entwicklungsabhängigkeit auszuführen, die wir im vorherigen Abschnitt angegeben haben, könnten wir den folgenden Skriptblock zur **package.json**-Datei unserer Anwendung hinzufügen (vorausgesetzt, unsere Anwendungsquelle befindet sich in einem Ordner /src/js):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um etwas weiter zu erklären, `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Command-Line eingeben könnten, um `eslint` auf JavaScript-Dateien auszuführen, die im Verzeichnis `src/js` in unserem App-Verzeichnis enthalten sind. Durch das Einfügen des obigen Befehls in die package.json-Datei unserer Anwendung erhalten wir eine Abkürzung für diesen Befehl — `lint`.

Wir könnten _eslint_ dann mit npm ausführen, indem wir aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel sieht möglicherweise nicht kürzer aus als der ursprüngliche Befehl, aber Sie können viel größere Befehle in Ihre npm-Skripte einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einziges npm-Skript identifizieren, das gleichzeitig all Ihre Tests ausführt.

## Installation des Express Application Generators

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Werkzeug generiert ein Express-Anwendungsskelett. Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile mit `sudo` auf Ubuntu oder macOS voranstellen. Das `-g`-Flag installiert das Tool global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Wenn Sie keine alte Nodejs-Version (< 8.2.0) verwenden, könnten Sie das Express-Generator auch mit [npx](https://github.com/npm/npx#readme) ausführen, ohne es zu installieren.
> Dies hat denselben Effekt wie das Installieren und anschließende Ausführen von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help`-Befehl, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Standorts und zeigt den Fortschritt des Builds in der Konsole an.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App hat eine **package.json**-Datei in ihrem Stammverzeichnis.
Sie können diese öffnen, um zu sehen, welche Abhängigkeiten installiert sind, einschließlich Express und der Template-Bibliothek Jade:

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

Installieren Sie alle Abhängigkeiten für die helloworld-App mit npm wie gezeigt:

```bash
cd helloworld
npm install
```

Führen Sie dann die App aus (die Befehle sind für Windows und Linux/macOS leicht unterschiedlich), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliche Protokolle und gibt eine Ausgabe wie die folgende:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standardbegrüßungsseite von Express zu sehen.

![Express - Generierte App Standardbildschirm](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir den Artikel zur Erstellung einer Skelettanwendung erreichen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zum Erstellen von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und auch, wie Sie Anwendungen mithilfe des Express Application Generator-Werkzeugs erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial zur Erstellung einer vollständigen Webanwendung mit dieser Umgebung und den zugehörigen Werkzeugen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Installation von Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Verwendung von Node.js mit Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
