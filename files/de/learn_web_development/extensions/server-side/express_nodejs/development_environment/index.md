---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie nun wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für jedes dieser Betriebssysteme bietet dieser Artikel alles, was Sie benötigen, um mit der Entwicklung von Express-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie Sie ein Terminal bzw. eine Befehlszeile öffnen. Wissen, wie Sie Softwarepakete auf dem Betriebssystem Ihres Entwicklungsrechners installieren.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Entwicklungsumgebung für Express auf Ihrem Computer einrichten.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer für die Entwicklung von Webanwendungen einzurichten. Dieser Abschnitt bietet einen Überblick über die benötigten Werkzeuge, erläutert einige der einfachsten Methoden zur Installation von Node (und Express) unter Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Node.js_, den _npm package manager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installern, Betriebssystem-Paketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird anschließend durch npm als Abhängigkeit Ihrer einzelnen _Express_-Webanwendungen installiert (zusammen mit weiteren Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zum Erstellen von Grundgerüsten für _Express_-Web-Apps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Application Generator ist optional, da Sie dieses Werkzeug nicht _benötigen_, um Apps zu erstellen, die Express verwenden, oder um Express-Apps mit derselben Architektur oder denselben Abhängigkeiten zu erstellen. Wir werden ihn jedoch verwenden, weil er den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Anders als bei einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt weitere ergänzende Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, darunter [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code sowie Werkzeuge zur Versionsverwaltung wie [Git](https://git-scm.com/) zur sicheren Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie diese Art von Werkzeugen bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann unter Windows, macOS, zahlreichen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Seite [Downloads](https://nodejs.org/en/download) von Node.js. Fast jeder PC sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, auf der _Node_ ausgeführt wird.

In diesem Artikel stellen wir Einrichtungsanweisungen für Windows, macOS und Ubuntu Linux bereit.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Node-Releases](https://nodejs.org/en/blog/release/) — neuere Releases enthalten Fehlerbehebungen, Unterstützung für aktuellere Versionen der ECMAScript- (JavaScript-)Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie das neueste _LTS-Release (Long-Term Supported)_ verwenden, da dieses stabiler als das „Current“-Release ist und dennoch relativ aktuelle Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten das _Current_-Release verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie das neueste LTS-Release von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mithilfe des npm-Paketmanagers in die Anwendungsumgebung importiert. Wir werden sie in späteren anwendungsspezifischen Artikeln behandeln.

## Node installieren

Um _Express_ verwenden zu können, müssen Sie _Node.js_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zunächst einen Node-Versionsmanager und verwenden ihn dann, um die neuesten Long-Term-Supported- (LTS-)Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können nodejs und npm auch mit den Installern auf <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche zum Herunterladen des LTS-Builds, der als „Recommended for most users“ gekennzeichnet ist), oder Sie können [über den Paketmanager Ihres Betriebssystems installieren](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Versionsmanagers, da diese die Installation, Aktualisierung und den Wechsel zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt mehrere Node-Versionsmanager für Windows.
Hier verwenden wir [nvm-windows](https://github.com/nvm-windows/nvm), das unter Node-Entwicklern einen sehr guten Ruf genießt.

Installieren Sie die neueste Version mit einem Installer Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/nvm-windows/nvm/releases).
Nachdem `nvm-windows` installiert wurde, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt der Erstellung dieses Artikels ist die LTS-Version von nodejs 22.17.0.
Sie können diese mit dem folgenden Befehl als _aktuelle Version_ festlegen:

```bash
nvm use 22.17.0
```

> [!NOTE]
> Falls Sie Warnungen wie „Access Denied“ erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorberechtigungen ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu erfahren, beispielsweise zum Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt mehrere Node-Versionsmanager für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der beliebtesten und die ursprüngliche Version, auf der `nvm-windows` basiert.
Unter [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) finden Sie die Terminal-Anweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt der Erstellung dieses Artikels ist die LTS-Version von nodejs 22.17.0.
Der Befehl `nvm list` zeigt die heruntergeladenen Versionen und die aktuelle Version an.
Sie können eine bestimmte Version mit dem folgenden Befehl als _aktuelle Version_ festlegen (derselbe wie für `nvm-windows`):

```bash
nvm use 22.17.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu erfahren.
Diese sind häufig ähnlich oder identisch mit den von `nvm-windows` angebotenen Optionen.

### Ihre Node.js- und npm-Installation testen

Sobald Sie `nvm` so eingestellt haben, dass eine bestimmte Node-Version verwendet wird, können Sie die Installation testen.
Eine gute Möglichkeit hierfür besteht darin, den Befehl „version“ in Ihrem Terminal bzw. Ihrer Eingabeaufforderung zu verwenden und zu prüfen, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v22.17.0
```

Der _Node.js_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf dieselbe Weise getestet werden:

```bash
> npm -v
10.9.2
```

Als etwas spannenderen Test erstellen wir einen sehr einfachen „reinen Node“-Server, der „Hello World“ im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser aufrufen:

1. Kopieren Sie den folgenden Text in eine Datei mit dem Namen **hellonode.js**. Dieser verwendet reine Node-Funktionen (nichts aus Express):

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

   Der Code importiert das Modul „http“ und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf HTTP-Anfragen an Port 3000 wartet. Das Skript gibt anschließend eine Meldung in der Konsole aus, welche Browser-URL Sie zum Testen des Servers verwenden können. Die Funktion `createServer()` erhält als Argument eine Callback-Funktion, die aufgerufen wird, wenn eine HTTP-Anfrage empfangen wird — diese gibt eine Antwort mit dem HTTP-Statuscode 200 („OK“) und dem Klartext „Hello World“ zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir werden unseren Code ausführlicher erklären, sobald wir anfangen, Express zu verwenden!

2. Starten Sie den Server, indem Sie in Ihrer Eingabeaufforderung in dasselbe Verzeichnis wie Ihre Datei `hellonode.js` navigieren und `node` zusammen mit dem Skriptnamen aufrufen:

   ```bash
   node hellonode.js
   ```

   Sobald der Server gestartet wurde, sehen Sie eine Konsolenausgabe, die die IP-Adresse angibt, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Rufen Sie die URL `http://127.0.0.1:3000` auf. Wenn alles funktioniert, sollte der Browser die Zeichenfolge „Hello World“ anzeigen.

## npm verwenden

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) abzurufen, die eine Anwendung für Entwicklung, Tests und/oder Produktion benötigt, und kann außerdem verwendet werden, um Tests und Werkzeuge auszuführen, die im Entwicklungsprozess eingesetzt werden.

> [!NOTE]
> Aus Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket einzeln abzurufen. Üblicherweise verwalten wir Abhängigkeiten stattdessen über eine Klartext-Definitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten eines bestimmten JavaScript-„Pakets“ auf, einschließlich Name, Version, Beschreibung, anfänglicher auszuführender Datei, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, kompatibler _Node_-Versionen usw. Die Datei **package.json** sollte alles enthalten, was npm zum Abrufen und Ausführen Ihrer Anwendung benötigt (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket in das npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Abhängigkeiten hinzufügen

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es anschließend in einer Node-Anwendung einzubinden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später zeigen wir, wie dieses Paket und andere bereits mithilfe des _Express Application Generator_ für uns angegeben werden. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist zu verstehen, wie npm funktioniert und was durch den Application Generator erstellt wird.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm-Befehl `init`, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fragt mehrere Angaben ab, darunter Name und Version Ihrer Anwendung sowie den Namen der anfänglichen Einstiegspunktdatei (standardmäßig **index.js**). Übernehmen Sie vorerst einfach die Standardwerte:

   ```bash
   npm init
   ```

   Wenn Sie die Datei **package.json** anzeigen (`cat package.json`), sehen Sie die von Ihnen übernommenen Standardwerte, gefolgt von der Lizenz.

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

3. Installieren Sie nun Express im Verzeichnis `myapp` und speichern Sie es in der Abhängigkeitsliste Ihrer Datei **package.json**:

   ```bash
   npm install express
   ```

   Der Abschnitt für Abhängigkeiten Ihrer **package.json** wird nun am Ende der Datei **package.json** angezeigt und enthält _Express_.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die Funktion `require()` in Ihrer Datei **index.js** auf, um sie in Ihre Anwendung einzubinden.
   Erstellen Sie diese Datei jetzt im Stammverzeichnis des Anwendungsverzeichnisses „myapp“ und geben Sie ihr folgenden Inhalt:

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

   Dieser Code zeigt eine minimale „HelloWorld“-Express-Webanwendung.
   Er importiert das Modul „express“ mithilfe von `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen an Port 3000 wartet und eine Meldung in der Konsole ausgibt, welche Browser-URL Sie zum Testen des Servers verwenden können.
   Die Funktion `app.get()` reagiert nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), indem sie in diesem Fall eine Funktion aufruft, die unsere Nachricht _Hello World!_ sendet.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` ermöglichen es uns, den Wert von `$port` in die Zeichenfolge zu interpolieren.

5. Sie können den Server starten, indem Sie in Ihrer Eingabeaufforderung node mit dem Skript aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Rufen Sie die URL `http://localhost:3000/` auf.
   Wenn alles funktioniert, sollte der Browser die Zeichenfolge „Hello World!“ anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als „Entwicklungsabhängigkeit“ speichern (damit die Benutzer Ihres Pakets sie in der Produktion nicht installieren müssen). Um beispielsweise das beliebte JavaScript-Linting-Werkzeug [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie gezeigt aufrufen:

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
> „[Linter](<https://en.wikipedia.org/wiki/Lint_(software)>)“ sind Werkzeuge, die statische Analysen von Software durchführen, um die Einhaltung bzw. Nichteinhaltung bestimmter bewährter Programmierpraktiken zu erkennen und zu melden.

### Aufgaben ausführen

Zusätzlich zum Definieren und Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm aufrufen, um sie mit dem Befehl [run-script](https://docs.npmjs.com/cli/commands/npm-run/) auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Werkzeugkette zu automatisieren (z. B. Werkzeuge zum Minimieren von JavaScript, Verkleinern von Bildern, LINTen/Analysieren Ihres Codes usw.).

> [!NOTE]
> Task Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können ebenfalls verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Um beispielsweise ein Skript zum Ausführen der _eslint_-Entwicklungsabhängigkeit zu definieren, die wir im vorherigen Abschnitt angegeben haben, könnten wir den folgenden Skriptblock zu unserer Datei **package.json** hinzufügen (unter der Annahme, dass sich unser Anwendungscode in einem Ordner `/src/js` befindet):

```json
{
  "scripts": {
    // …
    "lint": "eslint src/js"
    // …
  }
}
```

Um dies etwas weiter zu erläutern: `eslint src/js` ist ein Befehl, den wir in unserem Terminal bzw. unserer Befehlszeile eingeben könnten, um `eslint` für JavaScript-Dateien im Verzeichnis `src/js` innerhalb unseres Anwendungsverzeichnisses auszuführen. Das Einfügen des Obigen in die package.json-Datei unserer Anwendung bietet eine Abkürzung für diesen Befehl — `lint`.

Anschließend könnten wir _eslint_ über npm wie folgt ausführen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel sieht vielleicht nicht viel kürzer als der ursprüngliche Befehl aus, aber Sie können wesentlich größere Befehle in Ihre npm-Skripte aufnehmen, einschließlich Ketten mehrerer Befehle. Sie könnten ein einzelnes npm-Skript definieren, das alle Ihre Tests auf einmal ausführt.

## Den Express Application Generator installieren

Das Werkzeug [Express Application Generator](https://expressjs.com/en/starter/generator/) erzeugt ein „Grundgerüst“ für eine Express-Anwendung. Installieren Sie den Generator mithilfe von npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Unter Ubuntu oder macOS müssen Sie dieser Zeile möglicherweise `sudo` voranstellen. Das Flag `-g` installiert das Werkzeug global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App namens „helloworld“ mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie keine alte nodejs-Version verwenden (< 8.2.0), können Sie die Installation alternativ überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat denselben Effekt wie die Installation und anschließende Ausführung von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können außerdem die zu verwendende Template-Bibliothek sowie verschiedene andere Einstellungen angeben.
Verwenden Sie den Befehl `help`, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Speicherorts und zeigt den Erstellungsfortschritt in der Konsole an.
Nach Abschluss zeigt das Werkzeug die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App enthält eine Datei **package.json** in ihrem Stammverzeichnis.
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

Installieren Sie alle Abhängigkeiten für die helloworld-App mithilfe von npm wie gezeigt:

```bash
cd helloworld
npm install
```

Führen Sie anschließend die App aus (die Befehle unterscheiden sich leicht zwischen Windows und Linux/macOS), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliche Protokollausgaben, was zu einer Ausgabe wie der folgenden führt:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und rufen Sie `http://localhost:3000/` auf, um die Standard-Begrüßungsseite von Express zu sehen.

![Express – Standardansicht der generierten App](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zum Artikel über das Erzeugen einer Grundgerüstanwendung kommen.

## Zusammenfassung

Sie haben nun eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet und ausgeführt, die zum Erstellen von Express-Webanwendungen verwendet werden kann. Sie haben außerdem gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Werkzeug Express Application Generator erstellen und anschließend ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial zum Erstellen einer vollständigen Webanwendung mithilfe dieser Umgebung und der zugehörigen Werkzeuge.

## Siehe auch

- Seite [Downloads](https://nodejs.org/en/download) (nodejs.org)
- [Express installieren](https://expressjs.com/en/starter/installing/) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator/) (expressjs.com)
- [Node.js mit Windows Subsystem for Linux verwenden](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
