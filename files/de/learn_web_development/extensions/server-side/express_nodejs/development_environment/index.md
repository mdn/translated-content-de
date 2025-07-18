---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) gedacht ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für jedes dieser Betriebssysteme bietet dieser Artikel die notwendigen Informationen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie wissen, wie man ein Terminal / eine Kommandozeile öffnet. Sie wissen, wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Einrichtung einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Übersicht über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es Ihnen sehr einfach, Ihren Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt bietet einen Überblick über die benötigten Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, den _npm-Paketmanager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystempaketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt wird). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Ausliefern statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zum Erstellen von Grundgerüsten für _Express_-Webapps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Application Generator ist optional, weil Sie dieses Tool nicht _brauchen_, um Apps zu erstellen, die Express verwenden, oder um Express-Apps mit der gleichen Architektur oder Abhängigkeiten zu erstellen. Wir werden ihn jedoch verwenden, da er den Start erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks beinhaltet die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere periphere Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Tools zur Versionskontrolle wie [Git](https://git-scm.com/), um verschiedene Versionen Ihres Codes sicher zu verwalten. Wir gehen davon aus, dass Sie solche Werkzeuge bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download)-Seite. Fast jeder Personal Computer sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ ausführen kann.

In diesem Artikel bieten wir Anweisungen zur Einrichtung für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript)-Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (langfristig unterstützte)_ Version verwenden, da diese stabiler als die "aktuelle" Version ist, während sie immer noch relativ aktuelle Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten die _Current_-Version verwenden, wenn Sie ein Feature benötigen, das in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie die neueste LTS-Version von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mit dem npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden sie in späteren artikelspezifischen Artikeln besprechen.

## Installation von Node

Um _Express_ nutzen zu können, müssen Sie _Nodejs_ und den [Node-Paketmanager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, werden wir zuerst einen Node-Versionsmanager installieren und dann damit die neuesten Long Term Supported (LTS)-Versionen von Node und npm installieren.

> [!NOTE]
> Sie können auch Nodejs und npm mit den auf <https://nodejs.org/en/> bereitgestellten Installationsprogrammen installieren (wählen Sie die Schaltfläche, um das LTS-Build herunterzuladen, das "Recommended for most users" ist), oder Sie können [die Paketverwaltung für Ihr Betriebssystem verwenden](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Versionsmanagers, da diese das Installieren, Aktualisieren und Wechseln zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt mehrere Node-Versionsmanager für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das bei Node-Entwicklern hoch angesehen ist.

Installieren Sie die neueste Version mit einem Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Sobald `nvm-windows` installiert ist, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 22.17.0.
Sie können diese als _aktuelle Version_ mit dem folgenden Befehl festlegen:

```bash
nvm use 22.17.0
```

> [!NOTE]
> Wenn Sie Warnungen "Zugriff verweigert" erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, z. B. eine Liste aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Versionsmanagern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der beliebteren und die ursprüngliche Version, auf der `nvm-windows` basiert.
Sehen Sie sich [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminal-Anweisungen zur Installation der neuesten nvm-Version an.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 22.17.0.
Der Befehl `nvm list` zeigt den heruntergeladenen Versionssatz und die aktuelle Version an.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem folgenden Befehl festlegen (dieselbe wie für `nvm-windows`):

```bash
nvm use 22.17.0
```

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder gleich denen, die `nvm-windows` bietet.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` eingerichtet haben, um eine bestimmte Node-Version zu verwenden, können Sie die Installation testen.
Ein guter Weg, dies zu tun, ist die Verwendung des "version"-Befehls in Ihrem Terminal/Eingabeaufforderung und die Überprüfung, dass die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v22.17.0
```

Das _Nodejs_-Paket _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.9.2
```

Als etwas spannenderer Test erstellen wir nun einen sehr einfachen "pure node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL im Browser aufrufen:

1. Kopieren Sie den folgenden Text in eine Datei mit dem Namen **hellonode.js**. Dies verwendet nur Node-Funktionen (nichts von Express):

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf HTTP-Anfragen auf Port 3000 wartet. Das Skript gibt dann eine Nachricht in die Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die Funktion `createServer()` nimmt als Argument eine Callback-Funktion, die beim Empfang einer HTTP-Anfrage aufgerufen wird — diese gibt eine Antwort mit dem HTTP-Statuscode 200 ("OK") und dem reinen Text "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir werden unseren Code genauer erklären, sobald wir Express verwenden!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis wie Ihre `hellonode.js`-Datei im Eingabeaufforderung navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie Konsolenausgaben, die die IP-Adresse angeben, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zu der URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser den String "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) zu beschaffen, die eine Anwendung für Entwicklung, Test und/oder Produktion benötigt, und kann auch verwendet werden, um Tests und Werkzeuge zu betreiben, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Perspektive von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihren eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat zu beschaffen. Typischerweise verwalten wir jedoch Abhängigkeiten mit einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, der Beschreibung, der anfänglichen auszuführenden Datei, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen esarbeiten kann usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung zu beschaffen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket auf das npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später zeigen wir, wie dieses Paket und andere bereits mithilfe des _Express Application Generator_ für uns spezifiziert sind. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist zu verstehen, wie npm funktioniert und was durch den Application Generator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und wechseln Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den `init`-Befehl von npm, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, eine Reihe von Dingen einzugeben, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der anfänglichen Einstiegspunktdatei (standardmäßig ist dies **index.js**). Im Moment akzeptieren Sie einfach die Standardwerte:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die akzeptierten Standardwerte, die mit der Lizenz enden.

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

   Der Abschnitt der Abhängigkeiten Ihrer **package.json** wird jetzt am Ende der **package.json**-Datei angezeigt und _Express_ enthalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die `require()`-Funktion in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzubinden.
   Erstellen Sie diese Datei nun im Stammverzeichnis des "myapp"-Anwendungsordners und geben Sie ihr den folgenden Inhalt:

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
   Dies importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen an Port 3000 wartet und eine Nachricht in die Konsole ausgibt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch Aufrufen einer Funktion, um unsere _Hello World!_-Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in der Zeile `` `Example app listening on port ${port}!` `` erlauben es uns, den Wert von `$port` in den String einzufügen.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrer Eingabeaufforderung aufrufen:

   ```bash
   node index.js
   ```

   Sie werden die folgende Konsolenausgabe sehen:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zu der URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketbenutzer sie in der Produktion nicht installieren müssen). Um beispielsweise das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie gezeigt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag wird dann zu Ihrer **package.json** der Anwendung hinzugefügt:

```json
"devDependencies": {
  "eslint": "^9.30.1"
}
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die eine statische Analyse auf Software durchführen, um die Einhaltung/Nichteinhaltung bestimmter Codierungsbest-Practices zu erkennen und zu melden.

### Aufgaben ausführen

Zusätzlich zur Definition und Beschaffung von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm verwenden, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/) Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. das Ausführen von Tools zum Minifizieren von JavaScript, Verkleinern von Bildern, LINT/Analysieren Ihres Codes usw.).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Zum Beispiel könnten wir, um ein Skript zu definieren, das die _eslint_-Entwicklungsabhängigkeit ausführt, die wir im vorherigen Abschnitt spezifiziert haben, den folgenden Skriptblock zu unserer **package.json**-Datei hinzufügen (in der Annahme, dass sich unser Anwendungs-Quellcode in einem Ordner `/src/js` befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um das etwas weiter zu erklären, ist `eslint src/js` ein Befehl, den wir in unserem Terminal/Kommandozeile eingeben könnten, um `eslint` auf JavaScript-Dateien im Verzeichnis `src/js` innerhalb unseres App-Verzeichnisses auszuführen. Das obige in die package.json-Datei unserer App aufzunehmen, bietet eine Abkürzung — `lint`.

Wir könnten dann _eslint_ mit npm ausführen, indem wir aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel sieht vielleicht nicht kürzer als der ursprüngliche Befehl aus, aber Sie können viel größere Befehle in Ihre npm-Skripte einfügen, einschließlich Ketten mehrerer Befehle. Sie könnten ein einziges npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generators

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool erzeugt ein Express-Anwendungs-"Gerüst". Installieren Sie den Generator mithilfe von npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile unter Ubuntu oder macOS mit `sudo` auspräfixen. Das `-g`-Flag installiert das Tool global, damit Sie es von überall aus aufrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie dorthin, wo Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie nicht eine alte Nodejs-Version (< 8.2.0) verwenden, könnten Sie alternativ die Installation überspringen und den Express-Generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat den gleichen Effekt wie das Installieren und anschließende Ausführen von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek angeben und eine Reihe anderer Einstellungen. Verwenden Sie den `help`-Befehl, um alle Optionen zu sehen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihrer aktuellen Position und zeigt den Fortschritt im Konsolenfenster an.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App hat eine **package.json**-Datei in ihrem Stammverzeichnis.
Sie können diese öffnen, um zu sehen, welche Abhängigkeiten installiert sind, einschließlich Express und die Template-Bibliothek Jade:

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

Der DEBUG-Befehl erzeugt nützliche Protokollierung und führt zu einer Ausgabe wie der folgenden:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standard-Express-Willkommensseite zu sehen.

![Express - Generierte App Standardbildschirm](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zum Artikel über das Generieren einer Gerüstanwendung kommen.

## Zusammenfassung

Sie haben nun eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir, durch ein Tutorial zu arbeiten, um eine komplette Web-Anwendung mit dieser Umgebung und den zugehörigen Tools zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
