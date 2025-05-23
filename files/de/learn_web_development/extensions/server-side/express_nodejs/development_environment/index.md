---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für jedes dieser Betriebssysteme bietet dieser Artikel alles, was Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

> [!WARNING]
> Das Express-Tutorial ist für Express Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren, um Express 5 zu unterstützen. Bis dahin haben wir die Installationsbefehle aktualisiert, sodass sie Express 4 anstelle der neuesten Version installieren, um potenzielle Kompatibilitätsprobleme zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen, wie man ein Terminal / eine Befehlszeile öffnet. Sie sollten wissen, wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Einrichten einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. In diesem Abschnitt wird ein Überblick darüber gegeben, welche Tools benötigt werden, einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows erklärt und gezeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, den _npm-Paket-Manager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ Paket-Manager werden zusammen aus vorbereiteten Binärpaketen, Installern, Betriebssystem-Paket-Managern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann als Abhängigkeit Ihrer individuellen _Express_ Webanwendungen (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen von statischen Dateien usw.) von npm installiert.

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein nützliches Tool zum Erstellen von Skeletton-Express-Webanwendungen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, da Sie dieses Tool nicht _gebrauchen_ müssen, um Anwendungen zu erstellen, die Express verwenden, oder Express-Anwendungen zu konstruieren, die das gleiche Architektur-Layout oder ähnliche Abhängigkeiten haben. Wir verwenden ihn jedoch, da er den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks umfasst die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere Peripheriegeräte, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Tools zur Verwaltung der Quellkontrolle wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie solche Arten von Tools bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Versionen, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download) Seite. Fast jeder Personal Computer sollte die erforderliche Leistung haben, um Node während der Entwicklung auszuführen. _Express_ läuft in einer _Node_ Umgebung und kann daher auf jeder Plattform ausgeführt werden, die _Node_ unterstützt.

In diesem Artikel bieten wir Einrichtungshinweise für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Node-Veröffentlichungen](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen von ECMAScript (JavaScript)-Standards und Verbesserungen der Node-APIs.

In der Regel sollten Sie die neueste _LTS (Langzeitunterstützte)_ Version verwenden, da diese stabiler ist als die "aktuellen" Versionen, während sie immer noch relativ neue Funktionen enthält (und weiterhin aktiv gewartet wird). Sie sollten die _Aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template-Engines, Authentifizierungsengines usw. sind Bestandteil der Anwendung und werden in die Anwendungsumgebung mittels npm-Paket-Manager importiert. Wir werden sie in späteren, anwendungsspezifischen Artikeln erörtern.

## Installation von Node

Um _Express_ zu verwenden, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zunächst einen Node-Version-Verwalter und verwenden dann diesen, um die neuesten Long Term Supported (LTS) Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit den auf <https://nodejs.org/en/> bereitgestellten Installationsprogrammen installieren (wählen Sie die Schaltfläche zum Herunterladen des LTS-Builds, der "Für die meisten Benutzer empfohlen" ist), oder Sie können [die Paketverwaltung für Ihr Betriebssystem verwenden](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Version-Managers, da diese die Installation, das Upgrade und das Wechseln zwischen bestimmten Node- und npm-Versionen erleichtern.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das unter Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version mit dem Installer Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert wurde, öffnen Sie ein Befehlsfenster (oder PowerShell) und geben Sie den folgenden Befehl ein, um die aktuelle LTS-Version von Nodejs und npm herunterzuladen:

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

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, z. B. alle verfügbaren Node-Versionen und alle heruntergeladenen NVM-Versionen aufzulisten.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Version-Verwaltern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der beliebtesten und ist die ursprüngliche Version, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die aktuelle LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Der Befehl `nvm list` zeigt die heruntergeladene Versionsreihe und die aktuelle Version an.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem folgenden Befehl festlegen (der gleiche wie für `nvm-windows`):

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder identisch mit denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie in `nvm` eine bestimmte Node-Version festgelegt haben, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, ist die Verwendung des "version" Befehls in Ihrem Terminal/Command-Prompt und die Überprüfung, ob die erwartete Versionszeichenkette zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_ Paket-Manager _npm_ sollte ebenfalls installiert worden sein und kann auf dieselbe Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als einen etwas aufregenderen Test erstellen wir einen sehr einfachen "reinen Node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser besuchen:

1. Kopieren Sie den folgenden Text in eine Datei namens **hellonode.js**. Diese verwendet reine Node-Funktionen (nichts von Express):

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

   Der Code importiert das "http" Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf Port 3000 auf HTTP-Anfragen wartet. Das Skript gibt dann eine Nachricht in der Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die `createServer()` Funktion nimmt als Argument eine Callback-Funktion, die aufgerufen wird, wenn eine HTTP-Anfrage empfangen wird — dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie nicht genau verstehen, was dieser Code macht! Wir werden unseren Code ausführlicher erklären, sobald wir Express verwenden!

2. Starten Sie den Server, indem Sie im gleichen Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrem Befehlsfenster navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie eine Ausgabemeldung in der Konsole, die die IP-Adresse angibt, unter der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zu der URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser den String "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ ist [npm](https://docs.npmjs.com/) das wichtigste Tool für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken), die eine Anwendung für die Entwicklung, das Testen und/oder die Produktion benötigt, zu beschaffen und kann auch verwendet werden, um Tests und Tools zu starten, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ einfach ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat zu beschaffen. Typischerweise verwalten wir jedoch Abhängigkeiten mithilfe einer Klartextdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein spezifisches JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, Beschreibung, erster ausführbarer Datei, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es arbeiten kann, usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung zu holen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben, könnten Sie diese Definition verwenden, um Ihr Paket in das npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Abhängigkeiten hinzufügen

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in eine Node-Anwendung einzubinden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Herunterladen und Installieren des _Express_ Pakets. Später werden wir zeigen, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ angegeben werden. Dieser Abschnitt ist bereitgestellt, weil es nützlich ist zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie in dieses:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init` Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, mehrere Dinge einzugeben, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der initialen Entry-Point-Datei (standardmäßig ist dies **index.js**). Für den Moment nehmen Sie einfach die Standardwerte an:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die Standardwerte, die Sie akzeptiert haben, am Ende mit der Lizenz.

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

3. Installieren Sie nun Express im `myapp` Verzeichnis und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json**-Datei:

   ```bash
   npm install express@^4.21.2
   ```

   Der Abhängigkeitsabschnitt Ihrer **package.json** wird nun am Ende der **package.json** Datei erscheinen und wird _Express_ enthalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die `require()` Funktion in Ihrer **index.js**-Datei auf, um sie in Ihrer Anwendung einzubinden.
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
   Dies importiert das "express" Modul mittels `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen auf Port 3000 wartet und eine Nachricht in der Konsole druckt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die `app.get()`-Funktion reagiert nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), indem sie eine Funktion aufruft, um unsere _Hello World!_ Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in der `` `Example app listening on port ${port}!` `` lassen uns den Wert von `$port` in den String interpolieren.

5. Sie können den Server starten, indem Sie Node mit dem Skript in Ihrem Befehlsfenster aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zu der URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser den String "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Zum Beispiel, um das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zu der **package.json**-Datei Ihrer Anwendung hinzugefügt:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Tools, die statische Analysen von Software durchführen, um die Einhaltung/nicht-Einhaltung einer Reihe von Codierungs-Best-Practices zu erkennen und zu melden.

### Aufgaben ausführen

Neben der Definition und Beschaffung von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json** Dateien definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/)-Befehl auszuführen. Dieser Ansatz wird üblicherweise verwendet, um Tests und Teile der Entwicklungs- oder Build-Toolchain zu automatisieren (z.B. Tools zum Minifizieren von JavaScript, Schrumpfen von Bildern, LINT/Analysieren Ihres Codes usw.).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch zum Ausführen von Tests und anderen externen Tools verwendet werden.

Beispielsweise, um ein Skript zu definieren, das die _eslint_ Entwicklungsabhängigkeit ausführt, die wir im vorherigen Abschnitt spezifiziert haben, könnten wir den folgenden Skriptblock in unsere **package.json** Datei einfügen (und dabei annehmen, dass sich unser Anwendungscode in einem Ordner /src/js befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um etwas genauer zu erklären, ist `eslint src/js` ein Befehl, den wir in unser Terminal / Befehlszeile eingeben könnten, um `eslint` auf die in dem Verzeichnis `src/js` innerhalb unseres Anwendungsverzeichnisses enthaltenen JavaScript-Dateien auszuführen. Das Einfügen des Obigen in unser package.json Datei bietet eine Verknüpfung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mittels npm durch Aufrufen von:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Diese Beispiel zeigt vielleicht keine viel kürzeren Befehle als der ursprüngliche Befehl, aber Sie können viel größere Befehle einschließlich Ketten von mehreren Befehlen in Ihre npm-Skripte einfügen. Sie könnten ein einzelnes npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generators

Das Tool [Express Application Generator](https://expressjs.com/en/starter/generator.html) erstellt die Struktur einer Express-Anwendung. Installieren Sie den Generator mit npm wie folgt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile mit `sudo` auf Ubuntu oder macOS voranstellen. Die `-g`-Flag installiert das Tool global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_ App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Speicherort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie keine alte Nodejs-Version (< 8.2.0) verwenden, könnten Sie alternativ die Installation überspringen und den express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat denselben Effekt wie die Installation und anschließende Ausführung von `express-generator`, installiert jedoch das Paket nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die Template-Bibliothek, die verwendet wird, und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help` Befehl, um alle Optionen zu sehen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterverzeichnis Ihres aktuellen Standorts und zeigt den Fortschritt des Builds auf der Konsole an.
Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

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

Installieren Sie alle Abhängigkeiten der helloworld-App mit npm wie gezeigt:

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

Der DEBUG-Befehl erzeugt nützliche Protokollierung, die zu einer Ausgabe wie der folgenden führt:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die standardmäßige Express-Willkommensseite zu sehen.

![Express - Erzeugter App-Standardbildschirm](express_default_screen.png)

Wir werden mehr über die erzeugte App sprechen, wenn wir zum Artikel über das Erstellen einer Skeleton-Anwendung kommen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zum Erstellen von Express-Webanwendungen verwendet werden kann. Außerdem haben Sie gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, sowie wie Sie Anwendungen mit dem Express Application Generator Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, um eine vollständige Webanwendung mit dieser Umgebung und den zugehörigen Tools zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Installation von Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Verwenden von Node.js mit dem Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
