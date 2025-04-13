---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: f6d844cac8238c3acd00bc10b1135f63a2dd1ac1
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) gedacht ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für eines dieser Betriebssysteme bietet dieser Artikel alles, was Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

> [!WARNING]
> Das Express-Tutorial ist für Express Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte von 2025 zu aktualisieren, um Express 5 zu unterstützen. Bis dahin haben wir die Installationsbefehle so aktualisiert, dass sie Express 4 anstelle der neuesten Version installieren, um potenzielle Kompatibilitätsprobleme zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal / eine Befehlszeile öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem des Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Einrichten einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. Dieser Abschnitt bietet einen Überblick über die erforderlichen Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, dem _npm-Paketmanager_ und (optional) dem _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ Paketmanager werden zusammen über vorbereitete Binärpakete, Installer, Betriebssystem-Paketmanager oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein nützliches Werkzeug, um Gerüst-Express-Web-Apps zu erstellen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, da Sie dieses Werkzeug nicht _benötigen_, um Apps zu erstellen, die Express verwenden, oder Express-Apps zu konstruieren, die das gleiche Architekturlayout oder die gleichen Abhängigkeiten haben. Wir werden es jedoch verwenden, da es den Einstieg erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere periphere Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Tools zur Versionsverwaltung wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie solche Werkzeuge bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann unter Windows, macOS, vielen Linux-Distributionen, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download)-Seite. Fast jeder persönliche Computer sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ ausführt.

In diesem Artikel bieten wir Anweisungen zur Einrichtung für Windows, macOS und Ubuntu Linux an.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript) Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-Term Supported)_ Version verwenden, da diese stabiler ist als die „aktuelle“ Version, während sie dennoch relativ aktuelle Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten die _aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Wie sieht es mit Datenbanken und anderen Abhängigkeiten aus?

Andere Abhängigkeiten, wie Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mit dem npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden diese in späteren, anwendungsspezifischen Artikeln besprechen.

## Installation von Node

Um _Express_ nutzen zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zuerst einen Node-Version-Manager und verwenden ihn dann, um die neuesten Langzeit-Support-Versionen (LTS) von Node und npm zu installieren.

> [!NOTE]
> Sie können auch Nodejs und npm mit den auf <https://nodejs.org/en/> bereitgestellten Installationsprogrammen installieren (wählen Sie die Schaltfläche zum Herunterladen des LTS-Builds, das „Empfohlen für die meisten Benutzer“ ist), oder Sie können [mit dem Paketmanager für Ihr Betriebssystem installieren](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend, einen Node-Version-Manager zu verwenden, da diese die Installation, Aktualisierung und den Wechsel zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), der unter Node-Entwicklern hoch angesehen ist.

Installieren Sie die neueste Version mit dem Installer Ihrer Wahl von der [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)-Seite.
Nachdem `nvm-windows` installiert wurde, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl aus, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Sie können diese mit dem folgenden Befehl als _aktuelle Version_ festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie Warnungen "Zugriff verweigert" erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, wie z.B. das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Version-Managern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der populäreren und basiert auf der ursprünglichen Version, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Der Befehl `nvm list` zeigt die heruntergeladene Versionsmenge und die aktuelle Version an.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem folgenden Befehl festlegen (dieselbe wie für `nvm-windows`).

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder identisch mit denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` auf eine bestimmte Node-Version eingestellt haben, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, ist die Verwendung des „Version“-Befehls in Ihrem Terminal/Ihrer Eingabeaufforderung und das Überprüfen, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_ Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als einen etwas aufregenderen Test werfen wir einen ganz einfachen „Pure Node“-Server, der im Browser "Hello World" anzeigt, wenn Sie die richtige URL in Ihrem Browser besuchen:

1. Kopieren Sie den folgenden Text in eine Datei namens **hellonode.js**. Dies verwendet reine Node-Funktionen (nichts von Express):

   ```js
   //Load HTTP module
   const http = require("http");
   const hostname = "127.0.0.1";
   const port = 3000;

   //Create HTTP server and listen on port 3000 for requests
   const server = http.createServer((req, res) => {
     //Set the response HTTP header with HTTP status and Content type
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("Hello World\n");
   });

   //listen for request on port 3000, and as a callback function have the port listened on logged
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der HTTP-Anfragen auf Port 3000 lauscht. Das Skript gibt dann eine Nachricht in die Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die `createServer()`-Funktion nimmt als Argument eine Rückruffunktion, die bei Empfang einer HTTP-Anfrage aufgerufen wird, und gibt eine Antwort mit einem HTTP-Statuscode von 200 („OK“) und dem Klartext „Hello World“ zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir werden unseren Code ausführlicher erklären, sobald wir mit Express beginnen!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis wie Ihre `hellonode.js`-Datei navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie die Konsolenausgabe, die die IP-Adresse anzeigt, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken), die eine Anwendung für Entwicklung, Test und/oder Produktion benötigt, zu holen. Es kann auch verwendet werden, um Tests und Werkzeuge zu führen, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code anfordern müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat abzurufen. Typischerweise verwalten wir stattdessen Abhängigkeiten mit einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-„Paket“ auf, einschließlich des Namens des Pakets, der Version, der Beschreibung, der zu startenden Datei, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der Node-Versionen, mit denen es arbeiten kann usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung zu holen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket an das npm-Repository hochzuladen und es für andere Benutzer zugänglich zu machen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später werden wir zeigen, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ spezifiziert sind. Dieser Abschnitt wird bereitgestellt, weil er nützlich ist, um zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, eine Reihe von Dingen anzugeben, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der anfänglichen Einstiegspunktdatei (standardmäßig ist dies **index.js**). Akzeptieren Sie vorerst einfach die Standardeinstellungen:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die Standards, die Sie akzeptiert haben, und enden mit der Lizenz.

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

3. Installieren Sie jetzt Express im Verzeichnis `myapp` und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json**-Datei:

   ```bash
   npm install express@^4.21.2
   ```

   Der Abschnitt „dependencies“ Ihrer **package.json** wird nun am Ende der **package.json**-Datei erscheinen und _Express_ enthalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die Funktion `require()` in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzubinden.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis des „myapp“-Anwendungsverzeichnisses und geben Sie ihr folgenden Inhalt:

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
   Dieser importiert das „express“-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der HTTP-Anfragen auf Port 3000 abhört und eine Nachricht in die Konsole schreibt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch Aufrufen einer Funktion zum Senden unserer _Hello World!_-Nachricht.

   > [!NOTE]
   > Die Backticks in der Zeichenkette `` `Example app listening on port ${port}!` `` erlauben es uns, den Wert von `$port` in die Zeichenkette zu übernehmen.

5. Sie können den Server starten, indem Sie `node` mit dem Skript in Ihrer Eingabeaufforderung aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen Folgendes in der Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Um beispielsweise das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zu der **package.json** Ihrer Anwendung hinzugefügt werden:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die eine statische Analyse der Software durchführen, um die Einhaltung/nicht Einhaltung von bestimmten Codierungs-Best Practices festzustellen und zu melden.

### Ausführen von Aufgaben

Zusätzlich zum Definieren und Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/)-Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um die Durchführung von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z.B. um Werkzeuge zum Minifizieren von JavaScript, Verkleinern von Bildern, zur Analyse Ihres Codes usw. auszuführen).

> [!NOTE]
> Aufgaben-Runners wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können ebenfalls verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Zum Beispiel, um ein Skript zu definieren, um die _eslint_-Entwicklungsabhängigkeit, die wir im vorherigen Abschnitt angegeben haben, auszuführen, könnten wir den folgenden Skriptblock zu unserer **package.json**-Datei hinzufügen (angenommen, dass unser Anwendungsquellcode in einem Ordner /src/js liegt):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um etwas genauer zu erklären: `eslint src/js` ist ein Befehl, den wir in unser Terminal/unserer Befehlszeile eingeben könnten, um `eslint` auf JavaScript-Dateien auszuführen, die sich im `src/js` Verzeichnis innerhalb unseres App-Verzeichnisses befinden. Das obige Hinzufügen in unserer **package.json** Datei unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm ausführen, indem wir aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht viel kürzer aussehen als der Originalbefehl, aber Sie können viel größere Befehle in Ihre npm-Skripte einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einziges npm-Skript identifizieren, das alle Ihre Tests gleichzeitig ausführt.

## Installation des Express Application Generators

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool generiert ein Express-Anwendungsskelett. Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Sie müssen möglicherweise diese Zeile mit `sudo` unter Ubuntu oder macOS voranstellen. Das `-g`-Flag installiert das Werkzeug global, damit Sie es von überall aus aufrufen können.

Um eine _Express_ App namens „helloworld“ mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie nicht eine alte Nodejs-Version (< 8.2.0) verwenden, können Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat denselben Effekt wie das Installieren und anschließende Ausführen von `express-generator`, aber installiert das Paket nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help`-Befehl, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator wird die neue Express-App in einem Unterordner des aktuellen Standortes erstellen und den Baufortschritt in der Konsole anzeigen.
Beim Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App wird eine **package.json**-Datei im Stammverzeichnis haben.
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

Starten Sie dann die App (die Befehle sind leicht unterschiedlich für Windows und Linux/macOS), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erstellt nützliche Protokolle und resultiert in einer Ausgabe wie der folgenden:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die standardmäßige Express-Willkommensseite zu sehen.

![Express - Standardbildschirm der generierten App](express_default_screen.png)

Wir werden später mehr über die generierte App sprechen, wenn wir zum Artikel über das Erstellen einer Skelettanwendung kommen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und auch, wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, um eine vollständige Webanwendung mit dieser Umgebung und den zugehörigen Tools zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download)-Seite (nodejs.org)
- [Installation von Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Verwendung von Node.js mit dem Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
