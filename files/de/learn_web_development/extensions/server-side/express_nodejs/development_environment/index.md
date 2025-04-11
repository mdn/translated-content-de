---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Dev-Umgebung einrichten
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) da ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für eines dieser Betriebssysteme bietet dieser Artikel alles, was Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

> [!WARNING]
> Das Express-Tutorial ist für Express-Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Jahreshälfte 2025 zu aktualisieren, damit sie Express 5 unterstützt. Bis dahin haben wir die Installationsbefehle aktualisiert, sodass sie Express 4 anstelle der neuesten Version installieren, um mögliche Kompatibilitätsprobleme zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal/Kommandzeile öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungsrechners installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Einrichten einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt bietet einen Überblick darüber, welche Werkzeuge benötigt werden, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) unter Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_ Entwicklungsumgebung umfasst eine Installation von _Nodejs_, dem _npm Paketmanager_ sowie optional dem _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystem-Paketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten beschrieben). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_ Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ global zu installieren, ein praktisches Werkzeug zum Erstellen von Grundgerüsten für _Express_ Webanwendungen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Application Generator ist optional, weil Sie dieses Werkzeug nicht _verwenden müssen_, um Apps zu erstellen, die Express verwenden, oder Express-Apps zu erstellen, die denselben architektonischen Aufbau oder dieselben Abhängigkeiten haben. Wir werden es jedoch verwenden, weil es den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt weitere periphere Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Quellcode-Verwaltungstools wie [Git](https://git-scm.com/), um verschiedene Versionen Ihres Codes sicher zu verwalten. Wir gehen davon aus, dass Sie bereits über solche Werkzeuge verfügen (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Versionen, Docker usw. ausgeführt werden. Auf der Node.js [Downloads](https://nodejs.org/en/download) Seite finden Sie eine vollständige Liste. Fast jeder PC sollte über die erforderliche Leistung verfügen, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_ Umgebung betrieben und kann daher auf jeder Plattform ausgeführt werden, die _Node_ unterstützt.

In diesem Artikel bieten wir Anweisungen zum Einrichten für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) – neuere Versionen enthalten Fehlerbehebungen, Unterstützung für aktuellere Versionen der ECMAScript (JavaScript) Standards sowie Verbesserungen der Node APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Langzeitunterstützung)_ Version verwenden, da diese stabiler als die "aktuelle" Version ist, aber dennoch relativ aktuelle Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten die _aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mit dem npm Paketmanager in die Anwendungsumgebung importiert. Wir werden sie in späteren artikelspezifischen Artikeln besprechen.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zunächst einen Node-Version-Manager und verwenden diesen dann, um die neuesten Long Term Supported (LTS) Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit Installationsprogrammen von <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche, um den LTS-Build herunterzuladen, der "für die meisten Benutzer empfohlen" wird), oder Sie können [die Installation über den Paketmanager Ihres Betriebssystems] (https://nodejs.org/en/download) (nodejs.org) durchführen.
> Wir empfehlen dringend die Verwendung eines Node-Version-Managers, da diese das Installieren, Aktualisieren und Wechseln zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das unter Node-Entwicklern hoch angesehen ist.

Installieren Sie die neueste Version mit einem Installationsprogramm Ihrer Wahl von der [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) Seite.
Nachdem `nvm-windows` installiert wurde, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Sie können diese Version mit dem folgenden Befehl als _aktuelle Version_ festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie die Warnung "Access Denied" (Zugriff verweigert) erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu erfahren, wie z. B. das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Für Ubuntu und macOS gibt es eine Reihe von Node-Version-Managern.
[nvm](https://github.com/nvm-sh/nvm) ist eine der populäreren Versionen und die Originalversion, auf der `nvm-windows` basiert.
Weitere Informationen zu den Terminalanweisungen zur Installation der neuesten Nvm-Version finden Sie in der [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script).

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Mit dem Befehl `nvm list` werden die heruntergeladene Versionen und die aktuelle Version angezeigt.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem folgenden Befehl festlegen (gleiche Vorgehensweise wie bei `nvm-windows`):

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder identisch mit denen von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs und npm Installation

Nachdem Sie `nvm` so eingestellt haben, dass eine bestimmte Node-Version verwendet wird, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, ist die Verwendung des Befehls "version" in Ihrem Terminal/Eingabeaufforderung und die Überprüfung, dass die erwartete Zeichenfolge zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als etwas aufregenderer Test erstellen wir einen sehr grundlegenden "reinen Node" Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser aufrufen:

1. Kopieren Sie den folgenden Text in eine Datei mit dem Namen **hellonode.js**. Dies verwendet reine Node-Funktionen (nichts aus Express):

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der HTTP-Anfragen an Port 3000 wartet. Das Skript druckt dann eine Nachricht auf die Konsole, die die URL des Browsers angibt, die Sie verwenden können, um den Server zu testen. Die Funktion `createServer()` nimmt als Argument eine Rückruffunktion, die bei Empfang einer HTTP-Anfrage aufgerufen wird - dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code tut! Wir werden unseren Code genauer erklären, sobald wir beginnen, Express zu verwenden!

2. Starten Sie den Server, indem Sie sich in dasselbe Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrer Eingabeaufforderung begeben und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server gestartet ist, wird eine Konsolenausgabe angezeigt, die die IP-Adresse angibt, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zu der URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_ Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) abzurufen, die eine Anwendung für Entwicklung, Tests und/oder Produktion benötigt, und kann auch verwendet werden, um Tests und Werkzeuge zu betreiben, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code verwenden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat abzurufen. In der Regel verwalten wir stattdessen Abhängigkeiten mithilfe einer Klartext-Definitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Namens des Pakets, der Version, Beschreibung, der anfänglichen Datei zum Ausführen, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, Versionen von _Node_, mit denen es arbeiten kann, etc. Die **package.json** Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket in das npm-Repository hochzuladen und es für andere Benutzer verfügbar zu machen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in die Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_ Pakets. Später werden wir zeigen, wie dieses Paket und andere bereits für uns mithilfe des _Express Application Generator_ angegeben sind. Dieser Abschnitt wird bereitgestellt, weil er nützlich ist, um zu verstehen, wie npm funktioniert und was vom Application Generator erstellt wird.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den Befehl `init` von npm, um eine **package.json** Datei für Ihre Anwendung zu erstellen. Dieser Befehl fragt Sie nach einer Reihe von Dingen, einschließlich dem Namen und der Version Ihrer Anwendung und dem Namen der anfänglichen Einstiegsdatei (standardmäßig ist dies **index.js**). Akzeptieren Sie vorerst einfach die Standardwerte:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json** Datei anzeigen (`cat package.json`), sehen Sie die Standardwerte, die Sie akzeptiert haben und die mit der Lizenz enden.

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

3. Installieren Sie jetzt Express im `myapp` Verzeichnis und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json** Datei:

   ```bash
   npm install express @4
   ```

   Der Abschnitt Abhängigkeiten Ihrer **package.json** wird nun am Ende der **package.json** Datei angezeigt und _Express_ enthalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die `require()` Funktion in Ihrer **index.js** Datei auf, um sie in Ihre Anwendung einzubauen.
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

   Dieser Code zeigt eine minimale "HelloWorld" Express Webanwendung.
   Diese importiert das "express" Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der HTTP-Anfragen an Port 3000 wartet und eine Nachricht auf die Konsole druckt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die `app.get()` Funktion antwortet nur auf HTTP `GET` Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch das Aufrufen einer Funktion, um unsere _Hello World!_ Nachricht zu senden.

   > [!NOTE]
   > Die Rückgänge in dem `` `Example app listening on port ${port}!` `` lassen uns den Wert von `$port` in die Zeichenkette interpolieren.

5. Sie können den Server starten, indem Sie die Eingabeaufforderung mit dem Skript aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zu der URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Nutzer das Paket nicht in der Produktion installieren müssen). Um zum Beispiel das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann in die **package.json** Ihrer Anwendung eingefügt werden:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(Software)>)" sind Werkzeuge, die eine statische Analyse von Software durchführen, um die Einhaltung/Abweichung von einigen Best-Practice-Codierungsrichtlinien zu erkennen und zu melden.

### Aufgaben ausführen

Neben dem Definieren und Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json** Dateien definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/) Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um Tests und Teile der Entwicklungs- oder Build-Toolchain zu automatisieren (z.B. das Ausführen von Werkzeugen zur Komprimierung von JavaScript, Komprimierung von Bildern, LINT/Analyse Ihres Codes usw.).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Um ein Skript zu definieren, um die _ESLint_ Entwicklungsabhängigkeit auszuführen, die wir im vorherigen Abschnitt angegeben haben, könnten wir z.B. den folgenden Skript-Block zu unserem **package.json** hinzufügen (angenommen, dass unsere Anwendungsquelle in einem Ordner /src/js liegt):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um dies weiter zu erklären, `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Eingabeaufforderung eingeben könnten, um `eslint` auf JavaScript-Dateien in dem `src/js` Verzeichnis innerhalb unseres App-Verzeichnisses auszuführen. Das Einfügen des obigen Befehls in das package.json unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _ESLint_ mit npm aufrufen mit dem Befehl:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel sieht vielleicht nicht kürzer aus als der ursprüngliche Befehl, aber Sie können viel größere Befehle in Ihre npm-Skripte aufnehmen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einzelnes npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express-Anwendungsgenerators

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html) Tool erzeugt ein Express-Anwendungs-"Skelett". Installieren Sie den Generator mit npm, wie folgend gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Sie müssen möglicherweise diese Zeile mit `sudo` auf Ubuntu oder macOS voranstellen. Das `-g` Flag installiert das Werkzeug global, sodass es von überall aufgerufen werden kann.

Um eine _Express_ App mit dem Namen "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie dorthin, wo Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie nicht eine alte Nodejs-Version (< 8.2.0) verwenden, könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat den gleichen Effekt wie das Installieren und anschließende Ausführen von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help` Befehl, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Standorts und zeigt den Baufortschritt auf der Konsole an.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App verfügt über eine **package.json** Datei im Stammverzeichnis.
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

Installieren Sie alle Abhängigkeiten für die helloworld App mit npm, wie gezeigt:

```bash
cd helloworld
npm install
```

Starten Sie dann die App (die Befehle unterscheiden sich leicht für Windows und Linux/macOS), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliche Protokolle, die zu einer Ausgabe wie der folgenden führen:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die standardmäßige Express Willkommensseite zu sehen.

![Express - Erzeugter App-Standardbildschirm](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zum Artikel über das Erzeugen einer Skelettanwendung kommen.

## Zusammenfassung

Nun haben Sie eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Express Application Generator Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial zur Erstellung einer vollständigen Webanwendung mit dieser Umgebung und den dazugehörigen Werkzeugen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Express installieren](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Verwendung von Node.js mit dem Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
