---
title: Einrichten einer Node-Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Da Sie nun wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für eines dieser Betriebssysteme bietet dieser Artikel alles, was Sie benötigen, um mit der Entwicklung von Express-Apps zu beginnen.

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

_Node_ und _Express_ machen es sehr einfach, Ihren Computer für die Entwicklung von Webanwendungen einzurichten. Dieser Abschnitt bietet einen Überblick über die benötigten Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, den _npm Package Manager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ Package Manager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystempaketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zur Bereitstellung statischer Dateien usw.) installiert.

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zur Erstellung von Skeletten für _Express_-Webanwendungen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, da Sie dieses Werkzeug nicht _benötigen_, um Apps zu erstellen, die Express verwenden, oder um Express-Apps zu erstellen, die das gleiche architektonische Layout oder ähnliche Abhängigkeiten haben. Wir werden es jedoch verwenden, da es den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erzeugt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere periphere Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, wie zum Beispiel [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Quellcodeverwaltungstools wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir nehmen an, dass solche Werkzeuge (insbesondere ein Texteditor) bereits installiert sind.

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Varianten von Linux, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download/package-manager)-Seite. Fast jeder Personal Computer sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ läuft in einer _Node_-Umgebung und kann daher auf jeder Plattform ausgeführt werden, die _Node_ ausführt.

In diesem Artikel bieten wir Anweisungen zur Einrichtung für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen von ECMAScript (JavaScript) Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-Term Supported)_ Version verwenden, da diese stabiler als die "aktuelle" Version ist, während sie dennoch relativ neue Funktionen hat (und immer noch aktiv gewartet wird). Sie sollten die _Current_-Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie Datenbanktreiber, Template-Engines, Authentifizierungsengines usw., sind Teil der Anwendung und werden mit dem npm Package Manager in die Anwendungsumgebung importiert. Wir werden sie in späteren app-spezifischen Artikeln behandeln.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, werden wir zuerst einen Node-Version-Manager installieren und dann damit die neuesten Long Term Supported (LTS) Versionen von Node und npm installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit Installationsprogrammen von <https://nodejs.org/en/> installieren (wählen Sie den Button, um den LTS-Build herunterzuladen, der für die meisten Benutzer empfohlen wird), oder Sie können [die Installation mit dem Paketmanager Ihres Betriebssystems durchführen](https://nodejs.org/en/download/package-manager) (nodejs.org).
> Wir empfehlen dringend, einen Node-Version-Manager zu verwenden, da diese das Installieren, Aktualisieren und Wechseln zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt eine Anzahl von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das bei Node-Entwicklern sehr geschätzt wird.

Installieren Sie die neueste Version mit Ihrem bevorzugten Installationsprogramm von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert wurde, öffnen Sie ein Kommandozeilenfenster (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Sie können diese als _aktuelle Version_ mit dem folgenden Befehl festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie "Zugriff verweigert" Warnungen erhalten, müssen Sie diesen Befehl in einem Fenster mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Optionen der Befehlszeile zu finden, z. B. eine Auflistung aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt mehrere Node-Version-Manager für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der populäreren und ist die ursprüngliche Version, auf der `nvm-windows` basiert.
Sehen Sie sich [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von NVM an.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Der Befehl `nvm list` zeigt die heruntergeladene Versionsmenge und die aktuelle Version an.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem unten stehenden Befehl festlegen (dieselbe wie für `nvm-windows`).

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Optionen der Befehlszeile zu finden.
Diese sind oft ähnlich oder gleich denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` so eingestellt haben, dass eine bestimmte Node-Version verwendet wird, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, besteht darin, den "version"-Befehl in Ihrem Terminal/Command Prompt zu verwenden und zu überprüfen, ob die erwartete Versionszeichenkette zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_ Package Manager _npm_ sollte ebenfalls installiert worden sein und kann auf dieselbe Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als einen etwas aufregenderen Test erstellen wir einen sehr einfachen "reinen Node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die korrekte URL in Ihrem Browser besuchen:

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf HTTP-Anfragen an Port 3000 hört. Das Skript gibt dann eine Nachricht an die Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die Funktion `createServer()` nimmt als Argument eine Callback-Funktion, die aufgerufen wird, wenn eine HTTP-Anfrage eingeht – diese gibt eine Antwort mit dem HTTP-Statuscode 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code bewirkt! Wir werden unseren Code ausführlicher erklären, sobald wir Express verwenden!

2. Starten Sie den Server, indem Sie in dasselbe Verzeichnis wie Ihre Datei `hellonode.js` in Ihrer Kommandozeile navigieren und `node` zusammen mit dem Skript-Namen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server gestartet ist, sehen Sie eine Konsolenausgabe, die die IP-Adresse angibt, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug zur Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken), die eine Anwendung für die Entwicklung, das Testen und/oder die Produktion benötigt, abzurufen und kann auch verwendet werden, um Tests und Werkzeuge im Entwicklungsprozess auszuführen.

> [!NOTE]
> Aus der Perspektive von Node ist _Express_ einfach ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code verwenden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat abzurufen. Normalerweise verwalten wir jedoch Abhängigkeiten mit einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-„Paket“ auf, einschließlich Name, Version, Beschreibung des Pakets, anfängliche auszuführende Datei, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, Versionen von _Node_, mit denen es zusammenarbeiten kann usw. Die **package.json** Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket in das npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später zeigen wir, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ festgelegt sind. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist zu verstehen, wie npm funktioniert und was vom Anwendungs-Generator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm-Befehl `init`, um eine **package.json** Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie zu einigen Informationen auf, einschließlich Name und Version Ihrer Anwendung und dem Namen der anfänglichen Einstiegspunktdatei (standardmäßig ist dies **index.js**). Für jetzt, akzeptieren Sie einfach die Standardeinstellungen:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json** Datei anzeigen (`cat package.json`), sehen Sie die akzeptierten Standardeinstellungen, die mit der Lizenz enden.

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

3. Installieren Sie nun Express im `myapp`-Verzeichnis und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json** Datei:

   ```bash
    npm install express
   ```

   Der Abschnitt Abhängigkeiten Ihrer **package.json** wird nun am Ende der **package.json** Datei erscheinen und _Express_ beinhalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die Funktion `require()` in Ihrer **index.js** Datei auf, um sie in Ihre Anwendung zu integrieren.
   Erstellen Sie diese Datei jetzt im Hauptverzeichnis der "myapp"-Anwendungsordner und geben Sie ihr den folgenden Inhalt:

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
   Dies importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen an Port 3000 lauscht und eine Nachricht an die Konsole ausgibt, die die Browser-URL erläutert, die Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP `GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall indem sie eine Funktion aufruft, um unsere _Hello World!_ Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in der Zeichenkette `` `Example app listening on port ${port}!` `` erlauben uns die Interpolation des Werts von `$port` in die Zeichenkette.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrem Kommandozeilenfenster aufrufen:

   ```bash
   node index.js
   ```

   Sie werden folgende Konsolenausgabe sehen:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenkette "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (so dass Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Um beispielsweise das beliebte JavaScript Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm folgendermaßen aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann der **package.json** Ihrer Anwendung hinzugefügt:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die eine statische Analyse von Software durchführen, um die Einhaltung/ Nicht-Einhaltung einer Reihe von Best Practices beim Programmieren zu erkennen und zu melden.

### Ausführen von Aufgaben

Neben der Definition und dem Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json** Dateien definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/) Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. Tools, um JavaScript zu minimieren, Bilder zu verkleinern, LINT/analysieren Sie Ihren Code, etc.).

> [!NOTE]
> Aufgabenrunner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können ebenfalls verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Zum Beispiel, um ein Skript zu definieren, das die Entwicklungsabhängigkeit _eslint_ ausführt, die wir im vorherigen Abschnitt angegeben haben, könnten wir den folgenden Skriptblock zu unserer **package.json** Datei hinzufügen (angenommen, dass sich unsere Anwendungsquelle in einem Verzeichnis /src/js befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um dies ein wenig weiter zu erklären: `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Commandline-Fernpegawai eingeben könnten, um `eslint` auf JavaScript-Dateien im Verzeichnis `src/js` innerhalb unseres App-Verzeichnisses auszuführen. Das Hinzufügen der oben genannten Anweisung zur **package.json** unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann **eslint** mit npm aufrufen durch:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel sieht möglicherweise nicht kürzer aus als der ursprüngliche Befehl, aber Sie können viel umfangreichere Befehle in Ihre npm-Skripte einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einziges npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generators

Das Tool [Express Application Generator](https://expressjs.com/en/starter/generator.html) generiert ein "Skelett" einer Express-Anwendung. Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile auf Ubuntu oder macOS mit `sudo` voranstellen. Der `-g`-Flag installiert das Tool global, sodass Sie es von überall aufrufen können.

Um eine _Express_ App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]

> Es sei denn, Sie verwenden eine alte Nodejs-Version (< 8.2.0), könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat den gleichen Effekt wie das Installieren und dann Ausführen von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Vorlagenbibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help`-Befehl, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterverzeichnis Ihres aktuellen Standorts und zeigt den Fortschritt des Build-Prozesses auf der Konsole an.
Nach Fertigstellung zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App hat eine **package.json** Datei in ihrem Stammverzeichnis.
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

Führen Sie dann die App aus (die Befehle sind für Windows und Linux/macOS leicht unterschiedlich), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliche Protokolle, die eine Ausgabe wie folgt ergeben:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die standardmäßige Express-Willkommensseite zu sehen.

![Express - Standardbildschirm der generierten App](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zu dem Artikel über die Generierung einer Skelettanwendung kommen.

## Zusammenfassung

Sie haben nun eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und auch, wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und anschließend ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, um eine vollständige Webanwendung mit dieser Umgebung und den zugehörigen Tools aufzubauen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download/package-manager) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
