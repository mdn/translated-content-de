---
title: Einrichtung einer Node-Entwicklungsumgebung
slug: Learn/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_express) da ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für jedes dieser Betriebssysteme liefert dieser Artikel, was Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

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
      <td>Einrichtung einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. In diesem Abschnitt erhalten Sie einen Überblick darüber, welche Tools benötigt werden, erklären einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigen Ihnen, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, dem _npm-Paketmanager_ und (optional) dem _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystem-Paketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungsmiddleware, Middleware zur Bereitstellung von statischen Dateien usw.).

_npm_ kann auch verwendet werden, um global den _Express Application Generator_ zu installieren, ein nützliches Tool zum Erstellen von Grundgerüstanwendungen für _Express_-Webanwendungen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Application Generator ist optional, da Sie dieses Tool nicht _brauchen_, um Anwendungen mit Express zu erstellen oder Express-Anwendungen zu konstruieren, die das gleiche Architekturlayout oder die gleichen Abhängigkeiten haben. Wir werden ihn jedoch verwenden, weil er den Einstieg erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungswebserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere zusätzliche Tools, die Teil einer typischen Entwicklungsumgebung sind, darunter [Text-Editoren](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) oder IDEs zur Bearbeitung von Code, und Quellcode-Verwaltungstools wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie diese Art von Tools bereits installiert haben (insbesondere einen Text-Editor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download/package-manager)-Seite. Fast jeder PC sollte über die notwendige Leistung verfügen, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ ausführen kann.

In diesem Artikel bieten wir Setup-Anleitungen für Windows, macOS und Ubuntu Linux an.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Versionen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript) Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-Term Supported)_ Version verwenden, da diese stabiler als die "aktuelle" Version ist, aber trotzdem relativ neue Funktionen bietet (und noch aktiv gepflegt wird). Sie sollten die _Aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie z.B. Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw., sind Teil der Anwendung und werden mit dem npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden sie in späteren, anwendungsspezifischen Artikeln besprechen.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zuerst einen Node-Versionmanager und verwenden dann diesen, um die neuesten Langzeitunterstützten (LTS) Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können nodejs und npm auch mit den auf <https://nodejs.org/en/> bereitgestellten Installationsprogrammen installieren (wählen Sie den Button, um den LTS-Build herunterzuladen, der "Empfohlen für die meisten Benutzer" ist), oder Sie können [die Paketverwaltung für Ihr Betriebssystem verwenden](https://nodejs.org/en/download/package-manager) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Versionmanagers, da diese die Installation, Aktualisierung und den Wechsel zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt eine Reihe von Node-Versionmanagern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das unter Node-Entwicklern hoch angesehen ist.

Installieren Sie die neueste Version mit dem Installationsprogramm Ihrer Wahl von der [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) Seite.
Nachdem `nvm-windows` installiert wurde, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von nodejs 20.11.0.
Sie können diese als die _aktuelle Version_ mit dem folgenden Befehl festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie "Zugriff verweigert"-Warnungen erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, wie z. B. das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Versionmanagern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der bekannteren und ist die Originalversion, auf der `nvm-windows` basiert.
Unter [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) finden Sie die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von nodejs 20.11.0.
Mit dem Befehl `nvm list` werden die heruntergeladenen Versionen und die aktuelle Version angezeigt.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem folgenden Befehl festlegen (gleich wie bei `nvm-windows`).

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder gleich wie die von `nvm-windows` angebotenen.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` so eingerichtet haben, dass es eine bestimmte Node-Version verwendet, können Sie die Installation testen.
Eine gute Möglichkeit dies zu tun, ist den Befehl "version" in Ihrem Terminal/eingabeaufforderung zu verwenden und zu prüfen, ob der erwartete Versionsstring zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als etwas spannenderen Test erstellen wir einen sehr einfachen "pure Node" Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL im Browser aufrufen:

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf HTTP-Anfragen auf Port 3000 hört. Das Skript druckt dann eine Nachricht in die Konsole über die URL im Browser, die Sie verwenden können, um den Server zu testen. Die Funktion `createServer()` nimmt als Argument eine Callback-Funktion, die aufgerufen wird, wenn eine HTTP-Anfrage empfangen wird — dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") zurück und dem Klartext "Hello World".

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code tut! Wir werden unseren Code ausführlicher erklären, sobald wir Express verwenden!

2. Starten Sie den Server, indem Sie in dasselbe Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrer Eingabeaufforderung navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server gestartet ist, sehen Sie die Konsolenausgabe, die die IP-Adresse angibt, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World" anzeigen.

## Nutzung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug zur Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) zu holen, die eine Anwendung für die Entwicklung, das Testen und/oder die Produktion benötigt, und kann auch verwendet werden, um Tests und Werkzeuge zu starten, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat zu holen. In der Regel verwalten wir jedoch Abhängigkeiten mit einer Klartextdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein spezifisches JavaScript-"Paket" auf, einschließlich des Namens des Pakets, der Version, der Beschreibung, der initialen Datei, die ausgeführt werden soll, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es funktioniert usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung zu holen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und anderen Benutzern zur Verfügung zu stellen).

### Abhängigkeiten hinzufügen

Die folgenden Schritte zeigen, wie Sie mit npm ein Paket herunterladen, in den Projektabhängigkeiten speichern und es dann in einer Node-Anwendung einbinden.

> [!NOTE]
> Hier zeigen wir die Anweisungen, um das _Express_-Paket zu holen und zu installieren. Später werden wir zeigen, wie dieses Paket und andere bereits für uns durch den _Express Application Generator_ spezifiziert sind. Dieser Abschnitt ist vorhanden, weil es nützlich ist, zu verstehen, wie npm funktioniert und was vom Application Generator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, eine Reihe von Dingen einzugeben, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der initialen Startdatei (standardmäßig ist dies **index.js**). Für jetzt akzeptieren Sie einfach die Standardeinstellungen:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die Standardeinstellungen, die Sie akzeptiert haben, endend mit der Lizenz.

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

3. Installieren Sie nun Express im Verzeichnis `myapp` und speichern Sie es in der Abhängigkeitenliste Ihrer **package.json**-Datei:

   ```bash
    npm install express
   ```

   Der Abhängigkeitsabschnitt Ihrer **package.json**-Datei wird nun am Ende der **package.json**-Datei erscheinen und _Express_ enthalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die `require()`-Funktion in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzubinden.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis des "myapp"-Anwendungsverzeichnisses und geben Sie ihm den folgenden Inhalt:

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
   Dies importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der HTTP-Anfragen auf Port 3000 hört und eine Nachricht in die Konsole druckt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` reagiert nur auf HTTP `GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch Aufrufen einer Funktion, um unsere _Hello World!_-Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` lassen uns den Wert von `$port` in die Zeichenkette interpolieren.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrer Eingabeaufforderung aufrufen:

   ```bash
   node index.js
   ```

   Sie werden die folgende Konsolenausgabe sehen:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketnutzer sie in der Produktion nicht installieren müssen). Zum Beispiel, um das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zu Ihrem **package.json** der Anwendung hinzugefügt werden:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die statische Analysen an Software durchführen, um die Einhaltung/Abweichung von einem Satz von Codierungs-Best-Practice zu erkennen und zu melden.

### Aufgaben ausführen

Zusätzlich zum Definieren und Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm mit dem [run-script](https://docs.npmjs.com/cli/run-script/)-Befehl aufrufen, um sie auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z.B. um Werkzeuge zum Minifizieren von JavaScript, zum Reduzieren von Bildern, zur LINT/Analyse Ihres Codes u.a.m. auszuführen).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Zum Beispiel, um ein Skript zu definieren, das die _eslint_ Entwicklungsabhängigkeit ausführt, die wir im vorherigen Abschnitt spezifiziert haben, könnten wir den folgenden Skriptblock in unsere **package.json**-Datei einfügen (angenommen, dass sich unser Anwendungscode im Ordner /src/js befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um es weiter zu erklären, `eslint src/js` ist ein Befehl, den wir in unser Terminal/Befehlszeile eingeben könnten, um `eslint` auf JavaScript-Dateien im `src/js`-Verzeichnis innerhalb unseres App-Verzeichnisses auszuführen. Das Einfügen des obigen in die package.json-Datei unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm aufrufen, indem wir:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht kürzer als der ursprüngliche Befehl aussehen, aber Sie können viel größere Befehle in Ihre npm Skripte einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einziges npm Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generators

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html) Tool generiert ein "Skelett" für Express-Anwendungen. Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile auf Ubuntu oder macOS mit `sudo` voranstellen. Das `-g`-Flag installiert das Tool global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Wenn Sie eine alte nodejs-Version (vor < 8.2.0) verwenden, könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat den gleichen Effekt wie die Installation und das anschließende Ausführen von `express-generator`, installiert jedoch das Paket nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Vorlagenbibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help`-Befehl, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator erstellt die neue Express-Anwendung in einem Unterordner Ihres aktuellen Standorts und zeigt den Baufortschritt in der Konsole an.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App hat eine **package.json**-Datei im Stammverzeichnis.
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

Führen Sie dann die App aus (die Befehle sind für Windows und Linux/macOS leicht unterschiedlich), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliche Protokolle und führt zu einer Ausgabe wie der folgenden:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\expresstests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standardwillkommensseite von Express zu sehen.

![Express - Generated App Default Screen](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zu dem Artikel über das Generieren einer Skelettanwendung kommen.

## Zusammenfassung

Sie haben nun eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die für die Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und ausführen können.

Im nächsten Artikel arbeiten wir ein Tutorial durch, um eine vollständige Webanwendung mit dieser Umgebung und den zugehörigen Tools zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download/package-manager) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}
