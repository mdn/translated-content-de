---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 75165f9f9bde9bce3093a0d9d908a239c519a9ce
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen können. Für jedes dieser Betriebssysteme bietet dieser Artikel, was Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal / eine Kommandozeile öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Einrichten einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt bietet einen Überblick darüber, welche Werkzeuge benötigt werden, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Node.js_, den _npm-Paketmanager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, den Paketmanagern des Betriebssystems oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Servieren statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zum Erstellen von _Express_-Web-Apps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, weil Sie dieses Werkzeug nicht _benötigen_, um Apps mit Express zu erstellen, oder Express-Apps zu konstruieren, die das gleiche Architektur-Layout oder Abhängigkeiten haben. Wir werden ihn jedoch verwenden, da er den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungswebserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere nachgeordnete Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Werkzeuge für das Versionskontrollmanagement wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie bereits über diese Art von Werkzeugen verfügen (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste gibt es auf der Node.js [Downloads](https://nodejs.org/en/download) Seite. Fast jeder Computer sollte die nötige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ unterstützt.

In diesem Artikel bieten wir Anweisungen für die Einrichtung unter Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Versionen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere ECMAScript (JavaScript)-Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die aktuellste _LTS (Long Term Supported)_ Version verwenden, da diese stabiler als die "aktuelle" Version ist, während sie trotzdem relativ neue Funktionen bietet (und weiterhin aktiv gepflegt wird). Sie sollten die _Aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie die neueste LTS-Version von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mit dem npm Paketmanager in die Anwendungsumgebung importiert. Wir werden sie in späteren, app-spezifischen Artikeln diskutieren.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Node.js_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, werden wir zuerst einen Node-Version-Manager installieren und dann den neuesten Long Term Supported (LTS) Versionen von Node und npm mithilfe des Version-Managers installieren.

> [!NOTE]
> Sie können nodejs und npm auch mit den Installationsprogrammen auf <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche, um den LTS-Build herunterzuladen, der "Recommended for most users" ist) oder Sie können [die Paketverwaltung für Ihr Betriebssystem verwenden](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Version-Managers, da es damit einfacher ist, bestimmte Versionen von Node und npm zu installieren, zu aktualisieren und zu wechseln.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das bei Node-Entwicklern sehr anerkannt ist.

Installieren Sie die neueste Version mit dem Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert wurde, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt der Erstellung ist die LTS-Version von Nodejs 22.17.0.
Sie können dies mit dem folgenden Befehl als aktuelle Version festlegen:

```bash
nvm use 22.17.0
```

> [!NOTE]
> Wenn Sie "Access Denied"-Warnungen erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, wie z. B. alle verfügbaren Node-Versionen auflisten und alle heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Version-Managern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist eine der bekannteren Versionen und die Originalversion, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt der Erstellung ist die LTS-Version von Nodejs 22.17.0.
Der Befehl `nvm list` zeigt die heruntergeladene Versionen und die aktuelle Version.
Sie können eine bestimmte Version mit dem folgenden Befehl als aktuelle Version festlegen (dasselbe wie für `nvm-windows`):

```bash
nvm use 22.17.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder die gleichen wie die von `nvm-windows` angebotenen.

### Testen Ihrer Node.js und npm Installation

Sobald Sie `nvm` auf eine bestimmte Node-Version eingestellt haben, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, ist, den "version"-Befehl in Ihrem Terminal/Kommandoprompt zu verwenden und zu überprüfen, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v22.17.0
```

Der _Node.js_ Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.9.2
```

Als etwas aufregenderen Test erstellen wir nun einen sehr grundlegenden "reinen Node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser aufrufen:

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

   Der Code importiert das "http"-Modul und verwendet es zur Erstellung eines Servers (`createServer()`), der auf HTTP-Anfragen an Port 3000 lauscht. Das Skript gibt dann eine Nachricht auf der Konsole aus, auf welcher Browser-URL Sie den Server testen können. Die Funktion `createServer()` nimmt als Argument eine Callback-Funktion, die aufgerufen wird, wenn eine HTTP-Anfrage eingeht — diese gibt eine Antwort mit dem HTTP-Statuscode 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir werden unseren Code ausführlicher erklären, sobald wir anfangen, Express zu verwenden!

2. Starten Sie den Server, indem Sie im selben Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrer Eingabeaufforderung navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie Konsolenausgaben, die die IP-Adresse anzeigen, unter der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zu der URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Nutzung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) abzurufen, die eine Anwendung für Entwicklung, Tests und/oder Produktion benötigt, und kann auch verwendet werden, um Tests und Werkzeuge zu betreiben, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code verwenden müssen.

Sie können manuell npm verwenden, um jedes benötigte Paket separat abzurufen. In der Regel verwalten wir jedoch Abhängigkeiten mit einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, der Beschreibung, der anfänglichen Datei, die ausgeführt werden soll, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, Versionen von _Node_, mit denen es arbeiten kann usw. Die **package.json** Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket in das npm Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen, um das _Express_-Paket abzurufen und zu installieren. Später zeigen wir, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ spezifiziert sind. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie zu einer Reihe von Eingaben auf, einschließlich Name und Version Ihrer Anwendung sowie des Namens der anfänglichen Einstiegspunktdatei (standardmäßig ist dies **index.js**). Für jetzt nehmen Sie einfach die Standardeinstellungen an:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die von Ihnen akzeptierten Standardeinstellungen, die mit der Lizenz enden.

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

   Der Abhängigkeitsbereich Ihrer **package.json** wird nun am Ende der **package.json**-Datei erscheinen und _Express_ enthalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die Funktion `require()` in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzubeziehen.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis des "myapp"-Anwendungsverzeichnisses und geben Sie ihr den folgenden Inhalt:

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
   Dies importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen an Port 3000 lauscht und eine Nachricht auf der Konsole ausgibt, die erklärt, welche Browser-URL verwendet werden kann, um den Server zu testen.
   Die Funktion `app.get()` reagiert nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), indem eine Funktion aufgerufen wird, die unsere _Hello World!_ Nachricht sendet.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` ermöglichen es uns, den Wert von `$port` in die Zeichenkette zu interpolieren.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrer Eingabeaufforderung aufrufen:

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

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (so dass Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Um beispielsweise das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zur **package.json** Ihrer Anwendung hinzugefügt:

```json
{
  "devDependencies": {
    "eslint": "^9.30.1"
  }
}
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die eine statische Analyse auf Software durchführen, um die Einhaltung/Nichteinhaltung bestimmter Best-Practice-Codes zu erkennen und zu berichten.

### Aufgaben ausführen

Zusätzlich zu der Definition und dem Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm mit dem [run-script](https://docs.npmjs.com/cli/commands/npm-run/)-Befehl aufrufen, um sie auszuführen. Dieser Ansatz wird häufig verwendet, um Tests und Teile der Entwicklungs- oder Build-Pipeline zu automatisieren (z. B. das Ausführen von Tools zum Minifizieren von JavaScript, Verkleinern von Bildern, LINT/Analysieren Ihres Codes usw.).

> [!NOTE]
> Taskrunner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können ebenfalls verwendet werden, um Tests und andere externe Tools auszuführen.

Um beispielsweise ein Skript zu definieren, das die von uns im vorherigen Abschnitt angegebene _eslint_-Entwicklungsabhängigkeit ausführt, könnten wir den folgenden Skriptblock in unsere **package.json**-Datei einfügen (vorausgesetzt, dass sich der Anwendungscode in einem Ordner `/src/js` befindet):

```json
{
  "scripts": {
    // …
    "lint": "eslint src/js"
    // …
  }
}
```

Um dies etwas weiter zu erklären, `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Kommandozeile eingeben könnten, um `eslint` für JavaScript-Dateien im Verzeichnis `src/js` innerhalb unseres Anwendungsverzeichnisses auszuführen. Wenn wir das oben in unserer **package.json**-Datei der App einschließen, erhalten wir eine Abkürzung für diesen Befehl – `lint`.

Wir könnten dann _eslint_ mit npm aufrufen durch:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht kürzer erscheinen als der ursprüngliche Befehl, aber Sie können viel größere Befehle in Ihren npm-Skripten einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einzelnes npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generators

Das [Express Application Generator](https://expressjs.com/en/starter/generator/)-Werkzeug generiert ein Express-Anwendungs-"Skeleton". Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Auf Ubuntu oder macOS müssen Sie diese Zeile möglicherweise mit `sudo` voranstellen. Das `-g`-Flag installiert das Tool global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie keine alte nodejs-Version (< 8.2.0) verwenden, könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat denselben Effekt wie die Installation und dann das Ausführen von `express-generator`, installiert jedoch das Paket nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die Template-Bibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den Befehl `help`, um alle Optionen zu sehen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner des aktuellen Ortes und zeigt den Baufortschritt auf der Konsole an.
Bei Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

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

Der DEBUG-Befehl erstellt nützliche Protokolle, was zu einer Ausgabe wie der folgenden führt:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standard-Express-Willkommensseite zu sehen.

![Express - Generierte App Standardbildschirm](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zu dem Artikel über das Erstellen einer Skeleton-Anwendung kommen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die für die Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Express Application Generator erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einer Anleitung zur Erstellung einer vollständigen Webanwendung mit dieser Umgebung und den dazugehörigen Werkzeugen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing/) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator/) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
