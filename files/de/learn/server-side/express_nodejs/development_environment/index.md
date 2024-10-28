---
title: Einrichtung einer Node-Entwicklungsumgebung
slug: Learn/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für jedes dieser Betriebssysteme bietet dieser Artikel die notwendigen Informationen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

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

_Node_ und _Express_ machen es sehr einfach, Ihren Computer für die Entwicklung von Webanwendungen einzurichten. Dieser Abschnitt bietet einen Überblick über die benötigten Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) unter Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, den _npm-Paketmanager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden gemeinsam aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystem-Paketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Vorlagen-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware für statische Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zum Erstellen von Grundgerüsten für _Express_-Webanwendungen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, da Sie dieses Tool nicht _benötigen_, um Apps zu erstellen, die Express verwenden, oder Express-Apps mit derselben architektonischen Struktur oder denselben Abhängigkeiten zu erstellen. Wir werden ihn jedoch verwenden, da er den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks umfasst die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt weitere Hilfswerkzeuge, die Teil einer typischen Entwicklungsumgebung sind, darunter [Texteditoren](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Quellverwaltungstools wie [Git](https://git-scm.com/), um verschiedene Versionen Ihres Codes sicher zu verwalten. Wir gehen davon aus, dass Sie diese Art von Werkzeugen bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Distributionen, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download/package-manager) Seite. Fast jeder Personal Computer sollte über die erforderliche Leistung verfügen, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ ausführen kann.

In diesem Artikel bieten wir Installationsanleitungen für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript) Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-Term Supported)_ Version verwenden, da diese stabiler ist als die "aktuelle" Version und dennoch relativ neue Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten die _Current_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie z.B. Datenbanktreiber, Vorlagen-Engines, Authentifizierungs-Engines usw., sind Teil der Anwendung und werden mit dem npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden sie in späteren, app-spezifischen Artikeln besprechen.

## Installation von Node

Um _Express_ nutzen zu können, müssen Sie _Nodejs_ und den [Node-Paketmanager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zuerst einen Node-Version-Manager und verwenden diesen dann, um die neueste Long Term Supported (LTS) Version von Node und npm zu installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit den auf <https://nodejs.org/en/> bereitgestellten Installationsprogrammen installieren (wählen Sie die Schaltfläche, um den LTS-Build herunterzuladen, der "Empfohlen für die meisten Benutzer" ist), oder Sie können [die Installation mit dem Paketmanager für Ihr Betriebssystem durchführen](https://nodejs.org/en/download/package-manager) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Version-Managers, da diese die Installation, das Upgrade und das Umschalten zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das bei Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version mit Ihrem Installationsprogramm Ihrer Wahl von der [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) Seite.
Nachdem `nvm-windows` installiert ist, öffnen Sie ein Eingabeaufforderungsfenster (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Sie können diese als _aktuelle Version_ mit dem folgenden Befehl festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie "Access Denied" Warnungen erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu finden, wie z.B. das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Version-Managern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der beliebteren und ist die Originalversion, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert ist, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Der Befehl `nvm list` zeigt die heruntergeladene Versionsreihe und die aktuelle Version.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem unten stehenden Befehl festlegen (derselbe wie für `nvm-windows`):

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder gleich denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` so eingestellt haben, dass Sie eine bestimmte Node-Version verwenden, können Sie die Installation testen.
Ein guter Weg, dies zu tun, ist die Verwendung des "Versions"-Befehls in Ihrem Terminal/Eingabeaufforderung und die Überprüfung, dass die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als etwas aufregenderen Test erstellen wir einen sehr einfachen "pure node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser aufrufen:

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf HTTP-Anfragen an Port 3000 lauscht. Das Skript druckt dann eine Nachricht an die Konsole über welche Browser-URL Sie verwenden können, um den Server zu testen. Die Funktion `createServer()` nimmt als Argument eine Rückruffunktion an, die aufgerufen wird, wenn eine HTTP-Anfrage empfangen wird — dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir werden unseren Code ausführlicher erklären, sobald wir anfangen, Express zu verwenden!

2. Starten Sie den Server, indem Sie in dasselbe Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrer Eingabeaufforderung navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie eine Konsolenausgabe, die die IP-Adresse angibt, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) zu holen, die eine Anwendung für Entwicklung, Test und/oder Produktion benötigt, und kann auch verwendet werden, um Tests und Werkzeuge auszuführen, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Perspektive von Node ist _Express_ einfach ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code benötigen müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat zu holen. Normalerweise verwalten wir Abhängigkeiten jedoch über eine Klartext-Definitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, der Beschreibung, der Datei, die zuerst ausgeführt wird, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der mit _Node_ kompatiblen Versionen usw. Die **package.json**-Datei sollte alles enthalten, was npm zum Abrufen und Ausführen Ihrer Anwendung benötigt (wenn Sie eine wiederverwendbare Bibliothek schreiben, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und für andere Benutzer zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu benötigen.

> [!NOTE]
> Hier zeigen wir die Anweisungen, um das _Express_-Paket abzurufen und zu installieren. Später zeigen wir, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ spezifiziert sind. Dieser Abschnitt wird bereitgestellt, da es nützlich ist, zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fragt Sie nach einer Reihe von Dingen, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der ersten Eintragspunktdatei (standardmäßig ist dies **index.js**). Akzeptieren Sie zunächst die Standardwerte:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die akzeptierten Standardwerte, die mit der Lizenz enden.

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

3. Installieren Sie nun Express im `myapp`-Verzeichnis und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json**-Datei:

   ```bash
    npm install express
   ```

   Der Abhängigkeitsabschnitt Ihrer **package.json** erscheint nun am Ende der **package.json**-Datei und wird _Express_ enthalten.

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

4. Um die Express-Bibliothek zu nutzen, rufen Sie die `require()`-Funktion in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzuschließen.
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
   Dies importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen an Port 3000 lauscht und eine Nachricht an die Konsole druckt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP `GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch Aufrufen einer Funktion, um unsere _Hello World!_ Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` ermöglichen es uns, den Wert von `$port` in den String zu interpolieren.

5. Sie können den Server starten, indem Sie Node mit dem Skript in Ihrem Eingabeaufforderungsfenster aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit die Benutzer Ihres Pakets sie nicht in der Produktion installieren müssen). Zum Beispiel würde man für die Nutzung des beliebten JavaScript-Linting-Tools [ESLint](https://eslint.org/) npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zu Ihrer **package.json** der Anwendung hinzugefügt:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Lint-Tools](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die eine statische Analyse von Software durchführen, um die Einhaltung/Nicht-Einhaltung eines Sets von Best Practices beim Codieren zu erkennen und zu melden.

### Aufgaben ausführen

Neben der Definition und dem Abrufen von Abhängigkeiten können Sie in Ihren **package.json**-Dateien auch _benannte_ Skripte definieren und npm verwenden, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/) Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um Tests und Teile der Entwicklungs- oder Build-Toolkette zu automatisieren (z.B. Werkzeuge zum Minimieren von JavaScript, Reduzieren von Bildern, LINT/Analyse Ihres Codes auszuführen).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Zum Beispiel, um ein Skript zu definieren, um die _eslint_-Entwicklungsabhängigkeit, die wir im vorherigen Abschnitt angegeben haben, auszuführen, könnten wir folgenden Skriptblock zu unserer **package.json**-Datei hinzufügen (vorausgesetzt, dass sich unser Anwendungscode in einem Ordner /src/js befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um es etwas genauer zu erklären: `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Kommandozeile eingeben könnten, um `eslint` auf JavaScript-Dateien im `src/js`-Verzeichnis innerhalb unseres App-Verzeichnisses auszuführen. Die Einfügen des obigen Abschnitts in die package.json unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm wie folgt ausführen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht viel kürzer erscheinen als der ursprüngliche Befehl, aber Sie können viel größere Befehle in Ihren npm-Skripten einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einzelnes npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generator

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool erzeugt ein „Skelett“ einer Express-Anwendung. Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diesen Befehl unter Ubuntu oder macOS mit `sudo` als Präfix versehen. Das `-g`-Flag installiert das Werkzeug global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App mit dem Namen "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die Anwendung wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Es sei denn, Sie verwenden eine alte Nodejs-Version (< 8.2.0), könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat denselben Effekt wie das Installieren und anschließende Ausführen von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Vorlagenbibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help`-Befehl, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator wird die neue Express-App in einem Unterordner Ihres aktuellen Standorts erstellen und den Fortgang des Builds auf der Konsole anzeigen.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App wird über eine **package.json**-Datei in ihrem Stammverzeichnis verfügen.
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

Dann starten Sie die App (die Befehle sind für Windows und Linux/macOS leicht unterschiedlich), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliche Protokollierung, was zu einer Ausgabe wie der folgenden führt:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standard-Begrüßungsseite von Express zu sehen.

![Express - Generated App Default Screen](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zum Artikel über das Erzeugen einer Skelettanwendung kommen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie man Anwendungen mit dem Express Application Generator-Tool erstellen und ausführen kann.

Im nächsten Artikel beginnen wir mit einem Tutorial, um eine vollständige Webanwendung mit dieser Umgebung und den zugehörigen Werkzeugen zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download/package-manager) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}
