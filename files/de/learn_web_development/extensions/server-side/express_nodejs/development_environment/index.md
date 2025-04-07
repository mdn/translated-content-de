---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 8e3138000f0d4673cfa595830a5362b12e3c8180
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für jedes dieser Betriebssysteme bietet Ihnen dieser Artikel alles, was Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

> [!WARNING]
> Das Express-Tutorial wurde für Express-Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren, um Express 5 zu unterstützen. Bis dahin haben wir die Installationsbefehle so aktualisiert, dass sie Express 4 anstelle der neuesten Version installieren, um mögliche Kompatibilitätsprobleme zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen, wie man ein Terminal / eine Kommandozeile öffnet. Sie sollten wissen, wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Einrichten einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt bietet einen Überblick über die benötigten Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, den _npm-Paketmanager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Paketmanagern des Betriebssystems oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zur Bereitstellung statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zum Erstellen von Skelett-_Express_-Web-Apps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Application Generator ist optional, da Sie dieses Tool nicht _benötigen_, um Apps zu erstellen, die Express verwenden oder Express-Apps mit der gleichen architektonischen Struktur oder den gleichen Abhängigkeiten zu konstruieren. Wir werden es jedoch verwenden, da es den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks umfasst die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere periphere Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Tools zur Verwaltung von Quellcode wie [Git](https://git-scm.com/), um sicher unterschiedliche Versionen Ihres Codes zu verwalten. Wir gehen davon aus, dass Sie solche Werkzeuge bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Distributionen, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download)-Seite. Fast jeder Personal Computer sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ ausführt.

In diesem Artikel bieten wir Anweisungen für die Einrichtung unter Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für aktuellere Versionen der ECMAScript (JavaScript)-Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Langzeitunterstützt)_-Version verwenden, da diese stabiler ist als die „aktuelle” Version, während sie dennoch relativ aktuelle Funktionen bietet und aktiv gewartet wird. Sie sollten die _Current_-Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie Datenbanktreiber, Template-Engines, Authentifizierungsengines usw., sind Teil der Anwendung und werden über den npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden diese in späteren, anwendungsspezifischen Artikeln besprechen.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zunächst einen Node-Version-Manager, und verwenden dann diesen, um die neuesten Langzeitunterstützten (LTS) Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit Installationsprogrammen von <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche zum Herunterladen des LTS-Builds, das „Empfohlen für die meisten Benutzer“ ist), oder Sie können [die Installation über den Paketmanager Ihres Betriebssystems durchführen](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Version-Managers, da diese die Installation, das Upgrade und das Umschalten zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt mehrere Node-Version-Manager für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), der bei Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version mit dem Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert ist, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Sie können diese als die _aktuelle Version_ mit dem untenstehenden Befehl festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie "Zugriff verweigert"-Warnungen erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden, z. B. alle verfügbaren Node-Versionen aufzulisten und alle heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt mehrere Node-Version-Manager für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der populäreren und die ursprüngliche Version, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminal-Anweisungen zur Installation der neuesten Version von nvm.

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

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder identisch mit denen von `nvm-windows`.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` auf eine bestimmte Node-Version eingestellt haben, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, ist die Verwendung des "version"-Befehls in Ihrem Terminal/Eingabeaufforderung und die Überprüfung, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf dieselbe Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als einen etwas aufregenderen Test erstellen wir einen sehr einfachen "pure node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser aufrufen:

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

   Der Code importiert das Modul "http" und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf HTTP-Anfragen auf Port 3000 hört. Das Skript gibt dann eine Nachricht an die Konsole aus, welche Browser-URL Sie verwenden können, um den Server zu testen. Die `createServer()`-Funktion nimmt eine Callback-Funktion als Argument an, die aufgerufen wird, wenn eine HTTP-Anfrage empfangen wird – dies gibt eine Antwort mit einem HTTP-Statuscode von 200 („OK“) und dem Klartext „Hello World“ zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir werden unseren Code ausführlicher erklären, sobald wir anfangen, Express zu verwenden!

2. Starten Sie den Server, indem Sie in dasselbe Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrer Eingabeaufforderung wechseln und `node` zusammen mit dem Namen des Skripts aufrufen, etwa so:

   ```bash
   node hellonode.js
   ```

   Sobald der Server gestartet ist, sehen Sie eine Konsolenausgabe, die die IP-Adresse angibt, auf der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zu der URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenkette „Hello World“ anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug zum Arbeiten mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) abzurufen, die eine Anwendung für Entwicklung, Testen und/oder Produktion benötigt, und kann auch verwendet werden, um Tests und Werkzeuge auszuführen, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat abzurufen. Typischerweise verwalten wir jedoch Abhängigkeiten mithilfe einer Klartext-Definitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Namens des Pakets, der Version, der Beschreibung, der initialen auszuführenden Datei, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es arbeiten kann, usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket in das npm-Repository hochzuladen und es für andere Benutzer verfügbar zu machen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in die Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung einzubinden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später zeigen wir, wie dieses Paket und andere bereits für uns mithilfe des _Express Application Generator_ spezifiziert werden. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist, zu verstehen, wie npm funktioniert und was von dem Anwendungsgenerator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie in dieses:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm-`init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, einige Dinge einzugeben, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der anfänglichen Einstiegspunktdatei (standardmäßig ist dies **index.js**). Akzeptieren Sie vorerst einfach die Standardeinstellungen:

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

3. Installieren Sie jetzt Express im `myapp`-Verzeichnis und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json**-Datei:

   ```bash
   npm install express @4
   ```

   Der Abhängigkeitsabschnitt Ihrer **package.json** erscheint nun am Ende der **package.json**-Datei und enthält _Express_.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die `require()`-Funktion in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzubinden.
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
   Er importiert das Modul "express" mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen auf Port 3000 hört und eine Nachricht an die Konsole ausgibt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die `app.get()`-Funktion antwortet nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall indem eine Funktion aufgerufen wird, um unsere _Hello World!_-Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in der `` `Example app listening on port ${port}!` `` ermöglichen es uns, den Wert von `$port` in die Zeichenkette zu interpolieren.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrer Eingabeaufforderung aufrufen:

   ```bash
   node index.js
   ```

   Sie werden die folgende Konsolenausgabe sehen:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zu der URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenkette „Hello World!“ anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als „Entwicklungsabhängigkeit“ speichern (damit Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Um zum Beispiel das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag wird dann zur **package.json** Ihrer Anwendung hinzugefügt:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, mit denen eine statische Analyse von Software durchgeführt wird, um die Übereinstimmung/Nichtübereinstimmung mit einem Satz von Best Practices für die Programmierung zu erkennen und zu melden.

### Aufgaben ausführen

Neben der Definition und dem Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm verwenden, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/)-Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Toolchains zu automatisieren (z.B. das Ausführen von Werkzeugen zum Minifizieren von JavaScript, Verkleinern von Bildern, LINT/Analysieren Ihres Codes usw.).

> [!NOTE]
> Aufgabenplaner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Tools auszuführen.

Um beispielsweise ein Skript zum Ausführen der _eslint_-Entwicklungsabhängigkeit zu definieren, die wir im vorherigen Abschnitt angegeben haben, könnten wir folgenden Skriptblock zu unserer **package.json**-Datei hinzufügen (angenommen, dass sich unsere Anwendungsquelle in einem Ordner /src/js befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um es weiter zu erklären, `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Eingabeaufforderung eingeben könnten, um `eslint` auf JavaScript-Dateien im `src/js`-Verzeichnis innerhalb unseres Anwendungsverzeichnisses auszuführen. Die obige Aufnahme in die package.json-Datei unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann `eslint` mit npm ausführen, indem wir folgendes aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht kürzer als der ursprüngliche Befehl aussehen, aber Sie können viel größere Befehle in Ihre npm-Skripte einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einziges npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generator

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Werkzeug erzeugt ein Express-Anwendungsskelett. Installieren Sie den Generator mit npm wie folgt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Sie müssen diese Zeile möglicherweise mit `sudo` unter Ubuntu oder macOS voranstellen. Das `-g`-Flag installiert das Werkzeug global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie folgt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie nicht eine alte Node.js-Version verwenden (< 8.2.0), könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat den gleichen Effekt wie das Installieren und anschließende Ausführen von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help`-Befehl, um alle Optionen zu sehen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Standorts und zeigt den Fortschritt des Builds in der Konsole an.
Nach Abschluss zeigt das Werkzeug die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App wird eine **package.json**-Datei in ihrem Stammverzeichnis haben.
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

Installieren Sie alle Abhängigkeiten für die helloworld-App mit npm wie folgt:

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

Der DEBUG-Befehl erzeugt nützliche Logausgaben und führt zu einer Ausgabe wie der folgenden:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die standardmäßige Express-Willkommensseite zu sehen.

![Express - Generierte App Standardanzeige](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zu dem Artikel über die Erstellung einer Skelettanwendung kommen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die für die Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und auch wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial zur Erstellung einer vollständigen Webanwendung mit dieser Umgebung und den zugehörigen Tools.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) (nodejs.org)
- [Express installieren](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Verwendung von Node.js mit dem Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
