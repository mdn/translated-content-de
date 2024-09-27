---
title: Einrichten einer Node-Entwicklungsumgebung
slug: Learn/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

Da Sie nun wissen, wofür [Express](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_express) geeignet ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für jedes dieser Betriebssysteme bietet dieser Artikel die notwendigen Schritte, um mit der Entwicklung von Express-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal / eine Befehlszeile öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem des Entwicklungsrechners installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Einrichten einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. Dieser Abschnitt bietet einen Überblick darüber, welche Tools benötigt werden, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, den _npm-Paketmanager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Paketmanagern des Betriebssystems oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer einzelnen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Tool zum Erstellen von Skeleton-Express-Web-Apps, die dem [MVC-Muster](/de/docs/Glossary/MVC) folgen. Der Anwendungsgenerator ist optional, da Sie dieses Tool nicht _benötigen_, um Apps zu erstellen, die Express verwenden, oder Express-Apps mit dem gleichen architektonischen Layout oder den gleichen Abhängigkeiten zu erstellen. Wir werden ihn jedoch verwenden, da er den Einstieg erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere periphere Tools, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Versionsverwaltungstools wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie bereits über solche Tools verfügen (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download/package-manager) Seite. Fast jeder Personal Computer sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ unterstützt.

In diesem Artikel stellen wir Setup-Anleitungen für Windows, macOS und Ubuntu Linux bereit.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Versionen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript) Standards und Verbesserungen der Node-APIs.

Generell sollten Sie die neueste _LTS (langfristige Unterstützung)_ Version verwenden, da diese stabiler ist als die "aktuelle" Version, während sie dennoch relativ aktuelle Funktionen bietet (und aktiv gewartet wird). Sie sollten die _Gegenwart_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw., sind Teil der Anwendung und werden mit dem npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden sie in späteren, auf bestimmte Apps bezogenen Artikeln besprechen.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu vereinfachen, installieren wir zunächst einen Node-Version-Manager und verwenden ihn dann, um die neuesten Langzeit-Support-Versionen (LTS) von Node und npm zu installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit den auf <https://nodejs.org/en/> bereitgestellten Installationsprogrammen installieren (wählen Sie die Schaltfläche, um den LTS-Build herunterzuladen, der "Für die meisten Benutzer empfohlen" wird), oder über den [Paketmanager für Ihr Betriebssystem installieren](https://nodejs.org/en/download/package-manager) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Version-Managers, da diese die Installation, das Upgrade und den Wechsel zwischen bestimmten Node- und npm-Versionen erleichtern.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das unter Node-Entwicklern hoch angesehen ist.

Installieren Sie die neueste Version mit dem Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert ist, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Sie können dies als _aktuelle Version_ mit dem folgenden Befehl festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie "Zugriff verweigert" Warnungen erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, z. B. das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Version-Managern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der populärsten und die Originalversion, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Sobald `nvm` installiert ist, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Der Befehl `nvm list` zeigt die heruntergeladene Versionsmenge und die aktuelle Version an.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem folgenden Befehl festlegen (gleich wie für `nvm-windows`)

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder identisch mit denjenigen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` eingestellt haben, um eine bestimmte Node-Version zu verwenden, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, besteht darin, den "version" Befehl in Ihrem Terminal / Eingabeaufforderung zu verwenden und zu prüfen, ob der erwartete Versionsstring zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als etwas aufregenderer Test erstellen wir einen sehr einfachen "Pure Node" Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser aufrufen:

1. Kopieren Sie den folgenden Text in eine Datei mit dem Namen **hellonode.js**. Dies verwendet reine Node-Funktionen (nichts von Express):

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der HTTP-Anfragen auf Port 3000 abhört. Das Skript gibt dann eine Nachricht an die Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die `createServer()` Funktion nimmt als Argument eine Callback-Funktion an, die bei einer HTTP-Anfrage aufgerufen wird — diese gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und den Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir werden unseren Code genauer erklären, sobald wir anfangen, Express zu verwenden!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrer Eingabeaufforderung navigieren und `node` zusammen mit dem Skriptnamen aufrufen:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie Konsolenausgaben, die die IP-Adresse anzeigen, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Verwenden von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Tool für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) abzurufen, die eine Anwendung für Entwicklung, Tests und/oder Produktion benötigt, und kann auch verwendet werden, um Tests und Tools zu starten, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Perspektive von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket einzeln abzurufen. Typischerweise verwalten wir Abhängigkeiten stattdessen mit einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein spezifisches JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, der Beschreibung, der auszuführenden Initialdatei, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der Node-Versionen, mit denen es arbeiten kann, usw. Die **package.json** Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket ins npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in der Projektabhängigkeiten-Liste zu speichern und es dann in einer Node-Anwendung einzubinden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_ Pakets. Später werden wir zeigen, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ festgelegt sind. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist, zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init` Befehl, um eine **package.json** Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie zu einer Anzahl von Dingen auf, einschließlich des Namens und der Version Ihrer Anwendung sowie des Namens der Einstiegspunktdatei (standardmäßig ist dies **index.js**). Akzeptieren Sie vorerst einfach die Standardeinstellungen:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json** Datei anzeigen (`cat package.json`), sehen Sie die akzeptierten Standardeinstellungen, endend mit der Lizenz.

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

3. Installieren Sie nun Express im `myapp` Verzeichnis und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json** Datei:

   ```bash
    npm install express
   ```

   Der Abhängigkeitsabschnitt Ihrer **package.json** wird nun am Ende der **package.json** Datei angezeigt und auf _Express_ verweisen.

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
       "express": "^4.17.1"
     }
   }
   ```

4. Um die Express-Bibliothek zu verwenden, rufen Sie die `require()` Funktion in Ihrer **index.js** Datei auf, um sie in Ihre Anwendung einzubinden.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis des "myapp" Anwendungsverzeichnisses und geben Sie ihr den folgenden Inhalt:

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

   Dieser Code zeigt eine minimale "Hello World" Express-Webanwendung.
   Dies importiert das "express" Modul mit `require()` und verwendet es, um einen Server zu erstellen (`app`), der HTTP-Anfragen auf Port 3000 abhört und eine Nachricht an die Konsole ausgibt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die `app.get()` Funktion reagiert nur auf HTTP `GET` Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch das Aufrufen einer Funktion, um unsere _Hello World!_ Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` ermöglichen es uns, den Wert von `$port` in die Zeichenfolge einzuführen.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrer Eingabeaufforderung aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketanwender sie nicht in der Produktion installieren müssen). Um beispielsweise das beliebte JavaScript Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie gezeigt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann in die **package.json** Ihrer Anwendung hinzugefügt:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Tools, die statische Analysen auf Software durchführen, um die Einhaltung/Nichteinhaltung einer Reihe von besten Praktiken für das Codieren zu erkennen und zu melden.

### Aufgaben ausführen

Neben der Definition und dem Abrufen von Abhängigkeiten können Sie in Ihren **package.json** Dateien auch _benannte_ Skripte definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/) Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. das Ausführen von Tools zur Minimierung von JavaScript, Komprimierung von Bildern, Codierung/LINT-Analyse Ihres Codes usw.).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können ebenfalls verwendet werden, um Tests und andere externe Tools auszuführen.

Beispielsweise könnten Sie ein Skript definieren, um die _eslint_ Entwicklungsabhängigkeit auszuführen, die wir im vorherigen Abschnitt angegeben haben, indem Sie den folgenden Skriptblock in unsere **package.json** Datei einfügen (angenommen, dass unsere Anwendungsquelle sich in einem Ordner /src/js befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um etwas weiter zu erklären: `eslint src/js` ist ein Befehl, den wir in unserer Konsole/Terminal eingeben könnten, um `eslint` auf JavaScript-Dateien im Verzeichnis `src/js` in unserem App-Verzeichnis auszuführen. Die Aufnahme des obigen Skriptblockes in die package.json unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm ausführen, indem wir aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht viel kürzer als das Originalkommando erscheinen, aber Sie können viel größere Kommandos in Ihre npm-Skripte einbinden, einschließlich Ketten von mehreren Kommandos. Sie könnten beispielsweise ein einziges npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generators

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html) Tool generiert ein "Skelett" einer Express-Anwendung. Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile mit `sudo` auf Ubuntu oder macOS voranstellen. Das `-g` Flag installiert das Tool global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_ App mit dem Namen "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie nicht eine alte nodejs-Version (< 8.2.0) verwenden, könnten Sie alternativ die Installation überspringen und den Express-Generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat den gleichen Effekt wie die Installation und anschließend das Ausführen von `express-generator`, jedoch wird das Paket nicht auf Ihrem System installiert:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Vorlagenbibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den Befehl `help`, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Ortes und zeigt den Fortschritt des Builds auf der Konsole an.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App wird eine **package.json** Datei in ihrem Stammverzeichnis haben.
Sie können diese öffnen, um zu sehen, welche Abhängigkeiten installiert sind, einschließlich Express und der Vorlagenbibliothek Jade:

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

Führen Sie dann die App aus (die Befehle sind leicht unterschiedlich für Windows und Linux/macOS), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliche Protokolle und ergibt eine Ausgabe wie die folgende:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\expresstests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die standardmäßige Express-Willkommensseite zu sehen.

![Express - Generierte App Standardbildschirm](express_default_screen.png)

Wir werden mehr über die erzeugte App sprechen, wenn wir zum Artikel über das Generieren einer Skelettanwendung kommen.

## Zusammenfassung

Sie haben nun eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zum Erstellen von Express-Webanwendungen verwendet werden kann. Sie haben außerdem gesehen, wie npm verwendet werden kann, um Express in einer Anwendung zu importieren, sowie wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, um eine vollständige Webanwendung mithilfe dieser Umgebung und der zugehörigen Tools zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download/package-manager) Seite (nodejs.org)
- [Installation von Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Verwendung von Node.js mit dem Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}
