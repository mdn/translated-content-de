---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen können. Für jedes dieser Betriebssysteme bietet dieser Artikel, was Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

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
      <td>Eine Entwicklungsumgebung für Express auf Ihrem Computer einrichten.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. Dieser Abschnitt bietet einen Überblick über die benötigten Tools, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung beinhaltet eine Installation von _Nodejs_, dem _npm-Paketmanager_ und (optional) dem _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden gemeinsam aus vorbereiteten Binärpaketen, Installationsprogrammen, Paketmanagern des Betriebssystems oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbank-Treibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen statischer Dateien usw.).

_npm_ kann auch verwendet werden, um (global) den _Express Application Generator_ zu installieren, ein nützliches Tool zum Erstellen von Grundgerüsten für _Express_-Web-Apps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, weil Sie dieses Tool nicht _benötigen_, um Apps mit Express zu erstellen oder Express-Apps mit derselben architektonischen Struktur oder denselben Abhängigkeiten zu konstruieren. Wir werden ihn jedoch verwenden, da er den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Anders als bei einigen anderen Web-Frameworks beinhaltet die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere Peripheriewerkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Quellcode-Verwaltungstools wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie diese Art von Tools bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Versionen, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download) Seite. Fast jeder PC sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ ausführen kann.

In diesem Artikel bieten wir Einrichtungshinweise für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Versionen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere ECMAScript- (JavaScript-) Standards und Verbesserungen der Node-APIs.

Generell sollten Sie die neueste _LTS (langfristig unterstützte)_ Version verwenden, da diese stabiler als die "aktuelle" Version ist, während sie immer noch relativ neue Funktionen besitzt (und weiterhin aktiv gewartet wird). Sie sollten die _Aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie die neueste LTS-Version von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbank-Treiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden unter Verwendung des npm-Paketmanagers in die Anwendungsumgebung importiert. Wir werden später in anwendungsspezifischen Artikeln darüber sprechen.

## Node installieren

Um _Express_ zu verwenden, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, werden wir zuerst einen Node-Version-Manager installieren und dann damit die neuesten Long Term Supported (LTS)-Versionen von Node und npm installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit den Installationsprogrammen auf <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche zum Herunterladen des LTS-Builds, der "Für die meisten Benutzer empfohlen" ist), oder Sie können [die Installation mit dem Paketmanager für Ihr OS durchführen](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node Versions-Managers, da diese die Installation, das Upgrade und den Wechsel zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt eine Reihe von Node-Version-Manager für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das unter Node-Entwicklern sehr respektiert wird.

Installieren Sie die neueste Version mit einem Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert wurde, öffnen Sie ein Befehlsfenster (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt der Erstellung dieses Dokuments lautet die LTS-Version von Nodejs 22.17.0.
Sie können diese mit dem folgenden Befehl als _aktuelle Version_ festlegen:

```bash
nvm use 22.17.0
```

> [!NOTE]
> Wenn Sie Warnungen "Access Denied" erhalten, müssen Sie diesen Befehl in einem Fenster mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, wie das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Version-Manager für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) gehört zu den beliebteren und ist die ursprüngliche Version, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Anweisungen zur Installation der neuesten Version von nvm im Terminal.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt der Erstellung dieses Dokuments lautet die LTS-Version von Nodejs 22.17.0.
Der Befehl `nvm list` zeigt die heruntergeladene Version und die aktuelle Version an.
Sie können eine bestimmte Version mit dem folgenden Befehl als _aktuelle Version_ festlegen (identisch mit `nvm-windows`):

```bash
nvm use 22.17.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder identisch mit denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` dazu veranlasst haben, eine bestimmte Node-Version zu verwenden, können Sie die Installation testen.
Eine gute Möglichkeit dafür ist die Verwendung des "version" Befehls in Ihrem Terminal/Befehlsfenster und zu überprüfen, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v22.17.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.9.2
```

Als etwas aufregenderen Test lassen Sie uns einen sehr einfachen "reinen Node"-Server erstellen, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL im Browser aufrufen:

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

   Der Code importiert das "http"-Modul und verwendet es zum Erstellen eines Servers (`createServer()`), der auf Port 3000 auf HTTP-Anfragen hört. Das Skript gibt dann eine Nachricht auf der Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die Funktion `createServer()` nimmt als Argument eine Rückruffunktion entgegen, die ausgeführt wird, wenn eine HTTP-Anfrage eingeht — diese gibt eine Antwort mit dem HTTP-Statuscode 200 ("OK") und dem reinen Text "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code tut! Wir werden unseren Code in größerem Detail erklären, sobald wir anfangen, Express zu nutzen!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis wie Ihre `hellonode.js`-Datei im Befehlsfenster navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie eine Konsolenausgabe mit der IP-Adresse, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) abzurufen, die eine Anwendung für Entwicklung, Test und/oder Produktion benötigt, und kann auch zum Ausführen von Tests und Tools verwendet werden, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Perspektive von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und anschließend in Ihrem eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat zu beziehen. Typischerweise verwalten wir jedoch Abhängigkeiten über eine Klartextdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein spezielles JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, Beschreibung, der ersten Datei, die ausgeführt werden soll, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es arbeiten kann, usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Abhängigkeiten hinzufügen

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in die Abhängigkeitsliste des Projekts aufzunehmen und es dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später werden wir zeigen, wie dieses Paket und andere bereits mit dem _Express Application Generator_ für uns spezifiziert werden. Dieser Abschnitt ist hilfreich, um zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, eine Reihe von Dingen einzugeben, einschließlich Name und Version Ihrer Anwendung und des Namens der ersten ausführbaren Datei (standardmäßig ist dies **index.js**). Nehmen Sie vorerst einfach die Vorgabewerte an:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die von Ihnen akzeptierten Vorgabewerte, die mit der Lizenz enden.

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

3. Installieren Sie nun Express im `myapp`-Verzeichnis und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json**-Datei:

   ```bash
   npm install express
   ```

   Der Abschnitt über Abhängigkeiten in Ihrer **package.json** wird nun am Ende der **package.json**-Datei erscheinen und _Express_ beinhalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die Funktion `require()` in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzuschließen.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis der "myapp"-Anwendung und geben Sie ihr folgenden Inhalt:

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
   Diese importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen auf Port 3000 hört und eine Nachricht auf der Konsole ausgibt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP `GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), indem sie in diesem Fall eine Funktion aufruft, um unsere _Hello World!_ Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in der Zeile `` `Example app listening on port ${port}!` `` ermöglichen es uns, den Wert von `$port` in den String einzufügen.

5. Sie können den Server starten, indem Sie im Befehlsfenster node mit dem Skript aufrufen:

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

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Um zum Beispiel das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie gezeigt aufrufen:

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
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Tools, die eine statische Analyse auf Software ausführen, um die Einhaltung oder Nichteinhaltung einer Reihe von besten Coding-Praktiken zu erkennen und zu melden.

### Aufgaben ausführen

Neben der Definition und dem Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/commands/npm-run/) Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um Tests zu automatisieren und Teile der Entwicklungs- oder Buildtool-Kette auszuführen (z.B. Tools zur Minimierung von JavaScript, Verkleinerung von Bildern, zur Code-Analyse/LINT usw. auszuführen).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können ebenfalls verwendet werden, um Tests und andere externe Tools auszuführen.

Zum Beispiel, um ein Skript zu definieren, um die _eslint_ Entwicklungsabhängigkeit auszuführen, die wir im vorherigen Abschnitt angegeben haben, könnten wir den folgenden Skriptblock in unsere **package.json**-Datei einfügen (angenommen, dass unser Anwendungscode in einem Ordner `/src/js` liegt):

```json
{
  "scripts": {
    // …
    "lint": "eslint src/js"
    // …
  }
}
```

Um es weiter zu erklären, `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Befehlszeile eingeben könnten, um `eslint` auf JavaScript-Dateien im Verzeichnis `src/js` innerhalb unseres App-Verzeichnisses auszuführen. Das Einschließen der obigen Zeilen in unsere package.json-Datei bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm ausführen, indem wir folgendes aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht kürzer aussehen als der ursprüngliche Befehl, aber Sie können viel umfangreichere Befehle in Ihre npm-Skripte einfügen, einschließlich Reihen von mehreren Befehlen. Sie könnten ein einziges npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generators

Das Tool [Express Application Generator](https://expressjs.com/en/starter/generator/) generiert ein "Skeleton" einer Express-Anwendung. Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diesen Befehl mit `sudo` auf Ubuntu oder macOS voranstellen. Das Flag `-g` installiert das Tool global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App mit dem Namen "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie nicht eine alte Nodejs-Version (< 8.2.0) verwenden, könnten Sie alternativ die Installation überspringen und den Express-Generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat denselben Effekt wie die Installation und anschließende Ausführung von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben.
Nutzen Sie den `help` Befehl, um alle Optionen zu sehen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Standorts und zeigt den Baufortschritt in der Konsole an.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App wird eine **package.json** Datei in ihrem Stammverzeichnis enthalten.
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

Dann führen Sie die App aus (die Befehle sind für Windows und Linux/macOS leicht unterschiedlich), wie unten gezeigt:

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

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standard-Willkommensseite von Express zu sehen.

![Express - Generierte App Standardbildschirm](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zu dem Artikel über das Generieren einer Skeleton-Anwendung kommen.

## Zusammenfassung

Sie haben jetzt eine funktionierende Node-Entwicklungsumgebung auf Ihrem Computer, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Express Application Generator Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, um eine vollständige Webanwendung mit dieser Umgebung und zugehörigen Tools zu entwickeln.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Express installieren](https://expressjs.com/en/starter/installing/) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator/) (expressjs.com)
- [Verwendung von Node.js mit dem Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
