---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichten der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie unter Windows, Linux (Ubuntu) oder macOS eine Node/Express-Entwicklungsumgebung einrichten und testen. Dieser Artikel enthält für jedes dieser Betriebssysteme die Informationen, die Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie wissen, wie Sie ein Terminal oder eine Befehlszeile öffnen und Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installieren.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Entwicklungsumgebung für Express auf Ihrem Computer einrichten.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer für die Entwicklung von Webanwendungen einzurichten. Dieser Abschnitt gibt einen Überblick über die benötigten Werkzeuge, erläutert einige der einfachsten Möglichkeiten, Node (und Express) unter Ubuntu, macOS und Windows zu installieren, und zeigt, wie Sie Ihre Installation testen können.

### Was gehört zur Express-Entwicklungsumgebung?

Zur _Express_-Entwicklungsumgebung gehören eine Installation von _Node.js_, der _npm-Paketmanager_ und (optional) der _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden gemeinsam über vorbereitete Binärpakete, Installationsprogramme, Paketmanager des Betriebssystems oder aus dem Quellcode installiert (wie in den folgenden Abschnitten beschrieben). _Express_ wird anschließend mit npm als Abhängigkeit Ihrer einzelnen _Express_-Webanwendungen installiert (zusammen mit weiteren Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zur Bereitstellung statischer Dateien usw.).

Mit _npm_ lässt sich außerdem der _Express Application Generator_ (global) installieren. Dieses praktische Werkzeug erstellt Grundgerüste für _Express_-Webanwendungen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Application Generator ist optional: Sie _müssen_ ihn weder verwenden, um Anwendungen mit Express zu erstellen, noch um Express-Anwendungen mit derselben Architektur oder denselben Abhängigkeiten aufzubauen. Wir werden ihn dennoch verwenden, weil er den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Anders als bei manchen anderen Web-Frameworks gehört zur Entwicklungsumgebung kein separater Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Zu einer typischen Entwicklungsumgebung gehören weitere Werkzeuge, darunter [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und Versionsverwaltungssysteme wie [Git](https://git-scm.com/), mit denen Sie verschiedene Versionen Ihres Codes sicher verwalten können. Wir gehen davon aus, dass Sie solche Werkzeuge bereits installiert haben (insbesondere einen Code-Editor).

### Welche Betriebssysteme werden unterstützt?

_Node_ läuft unter Windows, macOS, vielen Linux-Varianten, Docker und weiteren Umgebungen. Eine vollständige Liste finden Sie auf der Node.js-Seite [Downloads](https://nodejs.org/en/download). Nahezu jeder PC sollte ausreichend leistungsfähig sein, um Node während der Entwicklung auszuführen. _Express_ läuft in einer _Node_-Umgebung und damit auf jeder Plattform, auf der _Node_ läuft.

Dieser Artikel enthält Einrichtungsanleitungen für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Node-Versionen](https://nodejs.org/en/blog/release/) – neuere Versionen enthalten Fehlerbehebungen, unterstützen aktuellere Fassungen des ECMAScript-Standards (JavaScript) und bieten Verbesserungen an den Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS-Version (Long-Term Support)_ verwenden. Sie ist stabiler als die „Current“-Version, bietet aber dennoch relativ neue Funktionen und wird weiterhin aktiv gepflegt. Verwenden Sie die _Current_-Version, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht enthalten ist.

Für _Express_ sollten Sie die neueste LTS-Version von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Weitere Abhängigkeiten wie Datenbanktreiber, Template-Engines und Authentifizierungskomponenten sind Teil der Anwendung und werden mithilfe des npm-Paketmanagers in die Anwendungsumgebung eingebunden. Wir behandeln sie in späteren Artikeln über konkrete Anwendungen.

## Node installieren

Um _Express_ zu verwenden, müssen Sie _Node.js_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Zur Vereinfachung installieren wir zunächst einen Node-Versionsmanager und verwenden ihn anschließend, um die neuesten LTS-Versionen (Long-Term Support) von Node und npm zu installieren.

> [!NOTE]
> Sie können Node.js und npm auch mit den Installationsprogrammen auf <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche zum Herunterladen der LTS-Version, die „Recommended for most users“ ist). Alternativ können Sie [den Paketmanager Ihres Betriebssystems verwenden](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen ausdrücklich einen Node-Versionsmanager, da er die Installation, Aktualisierung und den Wechsel zwischen verschiedenen Versionen von Node und npm erleichtert.

### Windows

Für Windows gibt es mehrere Node-Versionsmanager.
Hier verwenden wir [nvm-windows](https://github.com/nvm-windows/nvm), das unter Node-Entwicklern einen guten Ruf genießt.

Installieren Sie die neueste Version mit einem Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/nvm-windows/nvm/releases).
Öffnen Sie nach der Installation von `nvm-windows` eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Node.js und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt der Erstellung dieses Artikels ist 22.17.0 die LTS-Version von Node.js.
Mit dem folgenden Befehl können Sie diese Version als _aktuelle Version_ festlegen:

```bash
nvm use 22.17.0
```

> [!NOTE]
> Wenn Sie die Warnung „Access Denied“ erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Mit dem Befehl `nvm --help` können Sie sich weitere Befehlszeilenoptionen anzeigen lassen, etwa zum Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Für Ubuntu und macOS gibt es mehrere Node-Versionsmanager.
[nvm](https://github.com/nvm-sh/nvm) ist einer der beliebtesten und die ursprüngliche Version, auf der `nvm-windows` basiert.
Die Terminalbefehle zur Installation der neuesten nvm-Version finden Sie unter [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script).

Öffnen Sie nach der Installation von `nvm` ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Node.js und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt der Erstellung dieses Artikels ist 22.17.0 die LTS-Version von Node.js.
Der Befehl `nvm list` zeigt die heruntergeladenen Versionen und die aktuelle Version an.
Mit dem folgenden Befehl können Sie eine bestimmte Version als _aktuelle Version_ festlegen (genau wie bei `nvm-windows`):

```bash
nvm use 22.17.0
```

Mit dem Befehl `nvm --help` können Sie sich weitere Befehlszeilenoptionen anzeigen lassen.
Diese ähneln häufig den Optionen von `nvm-windows` oder sind mit ihnen identisch.

### Ihre Node.js- und npm-Installation testen

Nachdem Sie mit `nvm` eine bestimmte Node-Version ausgewählt haben, können Sie die Installation testen.
Eine gute Möglichkeit besteht darin, im Terminal oder in der Eingabeaufforderung den Versionsbefehl auszuführen und zu prüfen, ob die erwartete Versionsangabe ausgegeben wird:

```bash
> node -v
v22.17.0
```

Der _Node.js_-Paketmanager _npm_ sollte ebenfalls installiert worden sein. Sie können ihn auf dieselbe Weise testen:

```bash
> npm -v
10.9.2
```

Für einen etwas interessanteren Test erstellen wir einen sehr einfachen Server mit „reinem Node“, der beim Aufruf der richtigen URL im Browser „Hello World“ ausgibt:

1. Kopieren Sie den folgenden Text in eine Datei namens **hellonode.js**. Der Code verwendet ausschließlich Node-Funktionen (nichts aus Express):

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

   Der Code importiert das Modul „http“ und erstellt damit einen Server (`createServer()`), der auf Port 3000 auf HTTP-Anfragen wartet. Anschließend gibt das Skript in der Konsole eine Meldung mit der Browser-URL aus, über die Sie den Server testen können. Die Funktion `createServer()` erhält als Argument eine Callback-Funktion, die bei Eingang einer HTTP-Anfrage aufgerufen wird. Diese sendet eine Antwort mit dem HTTP-Statuscode 200 („OK“) und dem einfachen Text „Hello World“.

   > [!NOTE]
   > Keine Sorge, wenn Sie noch nicht genau verstehen, was dieser Code tut! Sobald wir Express verwenden, erklären wir unseren Code ausführlicher.

2. Starten Sie den Server, indem Sie in der Eingabeaufforderung in das Verzeichnis Ihrer Datei `hellonode.js` wechseln und `node` mit dem Skriptnamen aufrufen:

   ```bash
   node hellonode.js
   ```

   Nach dem Start des Servers sehen Sie eine Konsolenausgabe mit der IP-Adresse, unter der er läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Rufen Sie die URL `http://127.0.0.1:3000` auf. Wenn alles funktioniert, sollte der Browser den Text „Hello World“ anzeigen.

## npm verwenden

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
Mit `npm` werden die Pakete (JavaScript-Bibliotheken) abgerufen, die eine Anwendung für Entwicklung, Tests und/oder den Produktivbetrieb benötigt. Es kann auch verwendet werden, um Tests und Werkzeuge des Entwicklungsprozesses auszuführen.

> [!NOTE]
> Aus Sicht von Node ist _Express_ lediglich ein weiteres Paket, das Sie mit npm installieren und anschließend in Ihrem eigenen Code einbinden müssen.

Sie können npm verwenden, um jedes benötigte Paket einzeln abzurufen. Üblicherweise verwalten wir Abhängigkeiten stattdessen über eine Textdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei enthält alle Angaben zu einem bestimmten JavaScript-„Paket“, darunter seinen Namen, seine Version, seine Beschreibung, die zuerst auszuführende Datei, Abhängigkeiten für den Produktivbetrieb und die Entwicklung sowie die unterstützten _Node_-Versionen. Die Datei **package.json** sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen. (Wenn Sie eine wiederverwendbare Bibliothek schreiben, können Sie diese Definition verwenden, um Ihr Paket in das npm-Repository hochzuladen und anderen Nutzern bereitzustellen.)

### Abhängigkeiten hinzufügen

Die folgenden Schritte zeigen, wie Sie mit npm ein Paket herunterladen, es als Projektabhängigkeit speichern und anschließend in einer Node-Anwendung einbinden.

> [!NOTE]
> Hier zeigen wir, wie Sie das _Express_-Paket abrufen und installieren. Später sehen Sie, wie dieses und andere Pakete durch den _Express Application Generator_ bereits für uns festgelegt werden. Dieser Abschnitt hilft Ihnen zu verstehen, wie npm funktioniert und was der Application Generator erstellt.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und wechseln Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Erstellen Sie mit dem npm-Befehl `init` eine **package.json**-Datei für Ihre Anwendung. Der Befehl fragt Sie nach verschiedenen Angaben, darunter Name und Version Ihrer Anwendung sowie der Name der Datei, die als Einstiegspunkt dient (standardmäßig **index.js**). Übernehmen Sie vorerst einfach die Standardwerte:

   ```bash
   npm init
   ```

   Wenn Sie die Datei **package.json** anzeigen (`cat package.json`), sehen Sie die übernommenen Standardwerte, die mit der Lizenzangabe enden.

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

3. Installieren Sie nun Express im Verzeichnis `myapp` und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json**-Datei:

   ```bash
   npm install express
   ```

   Der Abschnitt für Abhängigkeiten erscheint nun am Ende Ihrer **package.json**-Datei und enthält _Express_.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie in Ihrer Datei **index.js** die Funktion `require()` auf und binden sie so in Ihre Anwendung ein.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis der Anwendung „myapp“ mit folgendem Inhalt:

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

   Dieser Code zeigt eine minimale „HelloWorld“-Webanwendung mit Express.
   Er importiert das Modul „express“ mit `require()` und erstellt damit einen Server (`app`), der auf Port 3000 auf HTTP-Anfragen wartet. Außerdem gibt er in der Konsole eine Meldung mit der Browser-URL aus, über die Sie den Server testen können.
   Die Funktion `app.get()` antwortet nur auf HTTP-`GET`-Anfragen für den angegebenen URL-Pfad ('/'). In diesem Fall ruft sie dazu eine Funktion auf, die unsere Nachricht _Hello World!_ sendet.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` ermöglichen es, den Wert von `$port` in die Zeichenfolge einzufügen.

5. Sie können den Server starten, indem Sie in der Eingabeaufforderung node mit dem Skript aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Rufen Sie die URL `http://localhost:3000/` auf.
   Wenn alles funktioniert, sollte der Browser den Text „Hello World!“ anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als „Entwicklungsabhängigkeit“ speichern (damit Nutzer Ihres Pakets sie im Produktivbetrieb nicht installieren müssen). Um beispielsweise das beliebte JavaScript-Linting-Werkzeug [ESLint](https://eslint.org/) zu verwenden, rufen Sie npm wie folgt auf:

```bash
npm install eslint --save-dev
```

Daraufhin wird der **package.json**-Datei Ihrer Anwendung der folgende Eintrag hinzugefügt:

```json
{
  "devDependencies": {
    "eslint": "^9.30.1"
  }
}
```

> [!NOTE]
> „[Linter](<https://en.wikipedia.org/wiki/Lint_(software)>)“ sind Werkzeuge, die Software statisch analysieren, um festzustellen und zu melden, ob bestimmte bewährte Programmierpraktiken eingehalten werden.

### Aufgaben ausführen

Sie können in Ihren **package.json**-Dateien nicht nur Abhängigkeiten festlegen und abrufen, sondern auch _benannte_ Skripte definieren und diese mit dem Befehl [run-script](https://docs.npmjs.com/cli/commands/npm-run/) über npm ausführen. Dieser Ansatz wird häufig verwendet, um Tests und Teile der Entwicklungs- oder Build-Werkzeugkette zu automatisieren (etwa Werkzeuge zum Minifizieren von JavaScript, Verkleinern von Bildern oder Linten und Analysieren Ihres Codes).

> [!NOTE]
> Zum Ausführen von Tests und anderen externen Werkzeugen können auch Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) verwendet werden.

Um beispielsweise ein Skript für die im vorigen Abschnitt festgelegte Entwicklungsabhängigkeit _eslint_ zu definieren, könnten wir den folgenden Skriptblock zu unserer **package.json**-Datei hinzufügen (unter der Annahme, dass sich der Quellcode unserer Anwendung im Verzeichnis `/src/js` befindet):

```json
{
  "scripts": {
    // …
    "lint": "eslint src/js"
    // …
  }
}
```

Etwas genauer: `eslint src/js` ist ein Befehl, den wir im Terminal oder in der Befehlszeile eingeben könnten, um `eslint` für JavaScript-Dateien im Verzeichnis `src/js` unserer Anwendung auszuführen. Der obige Eintrag in der package.json-Datei unserer Anwendung stellt dafür einen Kurzbefehl bereit: `lint`.

Anschließend könnten wir _eslint_ über npm wie folgt ausführen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel wirkt vielleicht nicht kürzer als der ursprüngliche Befehl. Sie können in npm-Skripten jedoch auch wesentlich umfangreichere Befehle hinterlegen, einschließlich Ketten aus mehreren Befehlen. So könnten Sie ein einziges npm-Skript definieren, das alle Ihre Tests auf einmal ausführt.

## Den Express Application Generator installieren

Das Werkzeug [Express Application Generator](https://expressjs.com/en/starter/generator/) erstellt das Grundgerüst einer Express-Anwendung. Installieren Sie den Generator wie folgt mit npm:

```bash
npm install express-generator -g
```

> [!NOTE]
> Unter Ubuntu oder macOS müssen Sie dieser Zeile möglicherweise `sudo` voranstellen. Das Flag `-g` installiert das Werkzeug global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-Anwendung namens „helloworld“ mit den Standardeinstellungen zu erstellen, wechseln Sie an den gewünschten Speicherort und führen den Generator wie folgt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie keine alte Node.js-Version (< 8.2.0) verwenden, können Sie die Installation alternativ überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Das hat denselben Effekt wie die Installation und anschließende Ausführung von `express-generator`, installiert das Paket aber nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und weitere Einstellungen angeben.
Mit dem Befehl `help` können Sie sich alle Optionen anzeigen lassen:

```bash
express --help
```

Der Generator erstellt die neue Express-Anwendung in einem Unterverzeichnis Ihres aktuellen Verzeichnisses und zeigt den Fortschritt in der Konsole an.
Nach Abschluss gibt das Werkzeug die Befehle aus, mit denen Sie die Node-Abhängigkeiten installieren und die Anwendung starten können.

Die neue Anwendung enthält im Stammverzeichnis eine **package.json**-Datei.
Sie können sie öffnen, um die angegebenen Abhängigkeiten zu sehen, darunter Express und die Template-Bibliothek Jade:

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

Installieren Sie alle Abhängigkeiten der helloworld-Anwendung wie folgt mit npm:

```bash
cd helloworld
npm install
```

Starten Sie anschließend die Anwendung wie unten gezeigt (die Befehle unterscheiden sich geringfügig zwischen Windows und Linux/macOS):

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl aktiviert eine hilfreiche Protokollierung und erzeugt eine Ausgabe wie die folgende:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und rufen Sie `http://localhost:3000/` auf, um die standardmäßige Express-Willkommensseite zu sehen.

![Standardansicht der generierten Express-Anwendung](express_default_screen.png)

Wir gehen näher auf die generierte Anwendung ein, wenn wir zum Artikel über das Erstellen eines Anwendungsgrundgerüsts kommen.

## Zusammenfassung

Sie haben jetzt eine funktionsfähige Node-Entwicklungsumgebung auf Ihrem Computer, mit der Sie Express-Webanwendungen erstellen können. Außerdem haben Sie gesehen, wie Sie Express mithilfe von npm in eine Anwendung einbinden und mit dem Express Application Generator Anwendungen erstellen und ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, in dem wir mit dieser Umgebung und den zugehörigen Werkzeugen eine vollständige Webanwendung erstellen.

## Siehe auch

- Seite [Downloads](https://nodejs.org/en/download) (nodejs.org)
- [Express installieren](https://expressjs.com/en/starter/installing/) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator/) (expressjs.com)
- [Node.js mit dem Windows-Subsystem für Linux verwenden](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
