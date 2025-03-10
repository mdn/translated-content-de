---
title: Einrichten einer Node-Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) gedacht ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen können. Für jedes dieser Betriebssysteme bietet dieser Artikel, was Sie benötigen, um mit der Entwicklung von Express-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal / Kommandozeilenfenster öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem des Entwicklungsrechners installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Entwicklungsumgebung für Express auf Ihrem Computer einzurichten.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. Dieser Abschnitt bietet einen Überblick über die benötigten Tools, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows, und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, den _npm package manager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ package manager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystem-Paketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer einzelnen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Tool zum Erstellen von Skeleton-Express-Web-Apps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, da Sie dieses Tool nicht _benötigen_, um Apps zu erstellen, die Express verwenden oder Express-Apps zu konstruieren, die dasselbe architektonische Layout oder dieselben Abhängigkeiten haben. Wir werden ihn jedoch verwenden, da er den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere zusätzliche Tools, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Text-Editoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code, und Versionskontroll-Management-Tools wie [Git](https://git-scm.com/) für die sichere Verwaltung unterschiedlicher Versionen Ihres Codes. Wir gehen davon aus, dass Sie diese Art von Tools bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download) Seite. Fast jeder Personal Computer sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung betrieben und kann daher auf jeder Plattform ausgeführt werden, die _Node_ unterstützt.

In diesem Artikel bieten wir Anweisungen zur Einrichtung für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript) Standards und Verbesserungen der Node-APIs.

Generell sollten Sie die neueste _LTS (langfristig unterstützte)_ Version verwenden, da diese stabiler ist als die "aktuelle" Version, aber immer noch relativ aktuelle Funktionen hat (und weiterhin aktiv gewartet wird). Sie sollten die _aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mithilfe des npm-Paketmanagers in die Anwendungsumgebung importiert. Wir werden sie in späteren app-spezifischen Artikeln behandeln.

## Node installieren

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zunächst einen Node-Version-Manager und verwenden ihn dann, um die neueste Long Term Supported (LTS) Version von node und npm zu installieren.

> [!NOTE]
> Sie können nodejs und npm auch mit Installationsprogrammen von <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche, um die LTS-Version herunterzuladen, die "Für die meisten Benutzer empfohlen" wird), oder Sie können [mit dem Paketmanager für Ihr Betriebssystem installieren](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend, einen Node-Version-Manager zu verwenden, da diese es einfacher machen, bestimmte Versionen von Node und npm zu installieren, zu aktualisieren und zwischen ihnen zu wechseln.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), der unter Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version mit einem Installer Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert ist, öffnen Sie ein Kommandozeilenfenster (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von nodejs 20.11.0.
Sie können diesen als die _aktuelle Version_ verwenden, indem Sie den folgenden Befehl ausführen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie Warnungen "Zugriff verweigert" erhalten, müssen Sie diesen Befehl in einem Eingabeaufforderungsfenster mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, wie das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Für Ubuntu und macOS gibt es eine Reihe von Node-Version-Managern.
[nvm](https://github.com/nvm-sh/nvm) ist einer der bekannteren und ist die Originalversion, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert ist, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von nodejs 20.11.0.
Der Befehl `nvm list` zeigt die heruntergeladene Versionsmenge und die aktuelle Version an.
Sie können eine bestimmte Version als die _aktuelle Version_ festlegen mit dem folgenden Befehl (gleich wie für `nvm-windows`)

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder identisch mit denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` so eingestellt haben, dass eine bestimmte Node-Version verwendet wird, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, ist, den "version" Befehl in Ihrem Terminal/Kommandozeilenfenster zu verwenden und zu prüfen, dass die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als etwas aufregenderen Test wollen wir einen ganz einfachen "reinen Node"-Server erstellen, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser aufrufen:

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der HTTP-Anfragen auf Port 3000 abhört. Das Skript gibt dann eine Nachricht in der Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die Funktion `createServer()` nimmt als Argument eine Callback-Funktion an, die bei Eingang einer HTTP-Anfrage aufgerufen wird — dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Keine Sorge, wenn Sie noch nicht genau verstehen, was dieser Code tut! Wir werden unseren Code detaillierter erklären, sobald wir anfangen, Express zu verwenden!

2. Starten Sie den Server, indem Sie in dasselbe Verzeichnis wie Ihre `hellonode.js`-Datei im Kommandozeilenfenster navigieren und `node` zusammen mit dem Skriptnamen aufrufen, etwa so:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie Konsolenausgaben, die die IP-Adresse angeben, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Tool zur Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) zu holen, die eine Anwendung für die Entwicklung, das Testen und/oder die Produktion benötigt, und kann auch verwendet werden, um Tests und Tools zu führen, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat zu beziehen. In der Regel verwalten wir stattdessen Abhängigkeiten mithilfe einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Namens des Pakets, seiner Version, Beschreibung, der ersten Datei, die ausgeführt werden soll, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es arbeiten kann usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung zu beziehen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und es anderen Nutzern zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie mit npm ein Paket herunterladen, es in der Liste der Projektabhängigkeiten speichern und es dann in einer Node-Anwendung einbinden können.

> [!NOTE]
> Hier zeigen wir die Anweisungen, um das _Express_-Paket zu holen und zu installieren. Später zeigen wir, wie dieses Paket, und andere, bereits vom \_Express Application Generator_für uns spezifiziert werden. Dieser Abschnitt ist bereitgestellt, da es nützlich ist zu verstehen, wie npm funktioniert und was durch den Anwendungsgenerator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fragt Sie nach einer Reihe von Dingen, einschließlich des Namens und der Version Ihrer Anwendung sowie des Namens der ersten Einstiegspunktdatei (standardmäßig ist dies **index.js**). Für den Moment akzeptieren Sie einfach die Standardeinstellungen:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die akzeptierten Standardeinstellungen, die mit der Lizenz enden.

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

3. Installieren Sie nun Express im Verzeichnis `myapp` und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json**-Datei:

   ```bash
    npm install express
   ```

   Der Abschnitt dependencies in Ihrer **package.json** erscheint nun am Ende der **package.json**-Datei und wird _Express_ enthalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die Funktion `require()` in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzubinden.
   Erstellen Sie diese Datei jetzt im Hauptverzeichnis des "myapp"-Anwendungsverzeichnisses und geben Sie ihr den folgenden Inhalt:

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
   Er importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der HTTP-Anfragen auf Port 3000 abhört und eine Nachricht in der Konsole ausgibt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch Aufruf einer Funktion zur Übermittlung unserer _Hello World!_ Nachricht.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` lassen uns den Wert von `$port` in die Zeichenfolge interpolieren.

5. Sie können den Server starten, indem Sie im Kommandozeilenfenster node zusammen mit dem Skript aufrufen:

   ```bash
   node index.js
   ```

   Sie werden die folgende Konsolenausgabe sehen:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (sodass Ihre Paketbenutzer sie in der Produktion nicht installieren müssen). Um beispielsweise das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zur **package.json** Ihrer Anwendung hinzugefügt werden:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Tools, die eine statische Analyse von Software durchführen, um die Einhaltung oder Nichteinhaltung eines Sets von Best Practices zu erkennen und zu berichten.

### Aufgaben ausführen

Zusätzlich zum Definieren und Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/)-Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um Tests und Teile der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. Tools zum Minifizieren von JavaScript, Verkleinern von Bildern, Analysieren Ihres Codes usw. ausführen).

> [!NOTE]
> Task Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Tools auszuführen.

Um beispielsweise ein Skript zu definieren, um die Entwicklungsabhängigkeit _eslint_ auszuführen, die wir im vorherigen Abschnitt angegeben haben, könnten wir den folgenden Skript-Block zu unserer **package.json**-Datei hinzufügen (angenommen, unser Anwendungsquellcode befindet sich in einem Ordner /src/js):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um etwas weiter zu erklären, ist `eslint src/js` ein Befehl, den wir in unser Terminal/Kommandozeile eingeben könnten, um `eslint` auf JavaScript-Dateien im `src/js` Verzeichnis innerhalb unseres App-Verzeichnisses auszuführen. Die obige Definition innerhalb unserer package.json-Datei der Anwendung bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm ausführen, indem wir folgendes aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht viel kürzer aussehen als der ursprüngliche Befehl, aber Sie können viel größere Befehle in Ihre npm-Skripte einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einzelnes npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Den Express Application Generator installieren

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool generiert ein "Skelett" einer Express-Anwendung. Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile unter Ubuntu oder macOS mit `sudo` voranstellen. Das `-g`-Flag installiert das Tool global, sodass Sie es von überall aufrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten und führen Sie die App wie gezeigt aus:

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

Sie können auch die zu verwendende Templating-Bibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help`-Befehl, um alle Optionen zu sehen:

```bash
express --help
```

Der Generator wird die neue Express-App in einem Unterordner Ihres aktuellen Standorts erstellen und den Fortschritt des Builds in der Konsole anzeigen.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

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

Installieren Sie alle Abhängigkeiten für die Helloworld-App mit npm wie gezeigt:

```bash
cd helloworld
npm install
```

Führen Sie dann die App aus (die Befehle sind für Windows und Linux/macOS etwas unterschiedlich), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt hilfreiche Aufzeichnungen, was zu einer Ausgabe wie der folgenden führt:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die standardmäßige Begrüßungsseite von Express zu sehen.

![Express - Generated App Default Screen](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zu dem Artikel über die Erstellung einer Skeleton-Anwendung kommen.

## Zusammenfassung

Sie haben nun eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, um eine vollständige Webanwendung mit dieser Umgebung und den zugehörigen Tools zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
