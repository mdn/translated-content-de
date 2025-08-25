---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Entwicklung einer Umgebungseinrichtung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für eines dieser Betriebssysteme bietet dieser Artikel das, was Sie brauchen, um mit der Entwicklung von Express-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal/Kommandozeile öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem des Entwicklungsrechners installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Einrichtung einer Entwicklungsumgebung für Express auf Ihrem Computer.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. Dieser Abschnitt gibt einen Überblick über die benötigten Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, den _npm package manager_ und (optional) den _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ package manager werden zusammen von vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystem-Paketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer einzelnen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen statischer Dateien usw.).

_npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zum Erstellen von _Express_-Web-Apps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Application Generator ist optional, weil Sie dieses Tool nicht _benötigen_, um Apps zu erstellen, die Express verwenden, oder um Express-Apps zu erstellen, die denselben architektonischen Aufbau oder Abhängigkeiten haben. Wir werden es jedoch verwenden, weil es den Einstieg wesentlich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere Peripheriewerkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditore](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Versionskontrollwerkzeuge wie [Git](https://git-scm.com/) zum sicheren Verwalten unterschiedlicher Versionen Ihres Codes. Wir gehen davon aus, dass Sie bereits diese Art von Werkzeugen installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann unter Windows, macOS, vielen Linux-Varianten, Docker usw. betrieben werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download)-Seite. Fast jeder Personal Computer sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ läuft in einer _Node_-Umgebung und kann daher auf jeder Plattform laufen, die _Node_ unterstützt.

In diesem Artikel bieten wir Setupanleitungen für Windows, macOS und Ubuntu Linux an.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Versionen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript)-Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-term Supported)_ Version verwenden, da diese stabiler als die "aktuelle" Version ist, während sie dennoch relativ neue Funktionen hat (und weiterhin aktiv gewartet wird). Sie sollten die _Aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie die neueste LTS-Version von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template-Engines, Authentifizierungsengines usw. sind Teil der Anwendung und werden mithilfe des npm package manager in die Anwendungsumgebung importiert. Wir werden sie in späteren, auf Apps bezogenen Artikeln besprechen.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zuerst einen Node-Versionsmanager und verwenden diesen dann, um die neuesten Langzeitunterstützungs-Versionen (LTS) von Node und npm zu installieren.

> [!NOTE]
> Sie können nodejs und npm auch mit den auf <https://nodejs.org/en/> bereitgestellten Installationsprogrammen installieren (wählen Sie die Schaltfläche, um das LTS-Build zu herunterladen, das "Für die meisten Benutzer empfohlen" wird), oder Sie können [die Paketmanager-Installation für Ihr Betriebssystem verwenden](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend die Verwendung eines Node-Versionsmanagers, da dies das Installieren, Aktualisieren und Wechseln zwischen bestimmten Versionen von Node und npm erleichtert.

### Windows

Es gibt eine Anzahl von Versionsmanagern für Node unter Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das unter Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version mit dem Installationsprogramm Ihrer Wahl von der [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)-Seite.
Sobald `nvm-windows` installiert ist, öffnen Sie ein Eingabeaufforderungsfenster (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm zu laden:

```bash
nvm install lts
```

Zur Zeit des Schreibens dieser Anleitung ist die LTS-Version von nodejs 22.17.0.
Sie können diese mit dem folgenden Befehl als _aktuelle Version_ festlegen:

```bash
nvm use 22.17.0
```

> [!NOTE]
> Wenn Sie Warnungen "Zugriff verweigert" erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen herauszufinden, wie z. B. das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Anzahl von Versionsmanagern für Node unter Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der populärsten und ist die ursprüngliche Version, auf der `nvm-windows` basiert.
Schauen Sie auf die [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminal-Anweisungen zur Installation der neuesten nvm-Version.

Nachdem `nvm` installiert ist, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm zu laden:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von nodejs 22.17.0.
Der Befehl `nvm list` zeigt die heruntergeladene Version des Sets und die aktuelle Version.
Sie können eine bestimmte Version mit dem folgenden Befehl als _aktuelle Version_ festlegen (dieselbe wie für `nvm-windows`)

```bash
nvm use 22.17.0
```

Verwenden Sie den Befehl `nvm --help`, um weitere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich wie oder gleich denen von `nvm-windows` angebotenen.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` so eingestellt haben, dass eine bestimmte Node-Version verwendet wird, können Sie die Installation testen.
Ein guter Weg, um dies zu tun, ist die Verwendung des "version"-Befehls in Ihrem Terminal/Kommandozeilenfenster und zu überprüfen, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v22.17.0
```

Der _Nodejs_ Paketmanager _npm_ sollte auch installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.9.2
```

Als etwas spannenderen Test erstellen wir einen sehr einfachen "reinen Node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die korrekte URL in Ihrem Browser aufrufen:

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der HTTP-Anfragen auf Port 3000 abhört. Das Skript gibt dann eine Nachricht auf der Konsole aus, welche Browser-URL Sie zum Testen des Servers verwenden können. Die `createServer()`-Funktion nimmt als Argument eine Rückruffunktion, die bei Empfang einer HTTP-Anfrage aufgerufen wird — dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie nicht genau verstehen, was dieser Code tut! Wir werden unseren Code näher erläutern, sobald wir Express nutzen!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis navigieren wie Ihre `hellonode.js`-Datei in Ihrer Kommandozeile und `node` zusammen mit dem Skriptnamen aufrufen, so:

   ```bash
   node hellonode.js
   ```

   Sobald der Server gestartet ist, sehen Sie eine Konsolenausgabe, die die IP-Adresse des laufenden Servers anzeigt:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zu der URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken), die eine Anwendung für Entwicklung, Test und/oder Produktion benötigt, zu holen, und kann auch verwendet werden, um Tests und Werkzeuge im Entwicklungsprozess auszuführen.

> [!NOTE]
> Vom Standpunkt von Node aus gesehen ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code verwenden müssen.

Sie können manuell jedes benötigte Paket mit npm separat holen. Normalerweise verwalten wir Abhängigkeiten jedoch mit einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, der Beschreibung, der anfänglichen Datei zur Ausführung, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen sie arbeiten kann, usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung zu holen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Abhängigkeiten hinzufügen

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in die Projektabhängigkeiten zu speichern und dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen zum Abrufen und Installieren des _Express_-Pakets. Später zeigen wir, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ spezifiziert sind. Dieser Abschnitt ist bereitgestellt, weil es nützlich ist, zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, eine Reihe von Dingen anzugeben, einschließlich des Namens und der Version Ihrer Anwendung sowie des Namens der anfänglichen Einstiegspunktdatei (standardmäßig ist dies **index.js**). Akzeptieren Sie jetzt einfach die Standardeinstellungen:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die akzeptierten Standardeinstellungen, die mit der Lizenz enden.

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

   Der Abhängigkeitsbereich Ihrer **package.json** wird nun am Ende der **package.json**-Datei angezeigt und wird _Express_ beinhalten.

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

4. Um die Express-Bibliothek zu verwenden, rufen Sie die `require()`-Funktion in Ihrer **index.js**-Datei auf, um sie in Ihre Anwendung einzuschließen.
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

   Dieser Code zeigt eine minimale "HelloWorld"-Express-Webanwendung.
   Dieser importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der HTTP-Anfragen auf Port 3000 abhört und eine Nachricht auf der Konsole darüber ausgibt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch Aufruf einer Funktion, die unsere _Hello World!_-Nachricht sendet.

   > [!NOTE]
   > Die Backticks in der Zeichenkette `` `Beispiel-App hört auf Port ${port}!` `` lassen uns den Wert von `$port` in die Zeichenfolge interpolieren.

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

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie diese stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Um beispielsweise das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie gezeigt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zu Ihrer **package.json** der Anwendung hinzugefügt werden:

```json
"devDependencies": {
  "eslint": "^9.30.1"
}
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die eine statische Analyse der Software durchführen, um die Einhaltung/nicht Einhaltung einiger Kodierungspraktiken zu erkennen und zu melden.

### Aufgaben ausführen

Neben der Definition und dem Abrufen von Abhängigkeiten können Sie in Ihren **package.json**-Dateien auch _benannte_ Skripte definieren und npm verwenden, um sie mit dem [run-script](https://docs.npmjs.com/cli/commands/npm-run/)-Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. das Ausführen von Tools zum Minimieren von JavaScript, Schrumpfen von Bildern, LINT-Analysieren Ihres Codes usw.).

> [!NOTE]
> Aufgabenplaner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Zum Beispiel, um ein Skript zu definieren, um die _eslint_-Entwicklungsabhängigkeit auszuführen, die wir im vorherigen Abschnitt spezifiziert haben, könnten wir den folgenden Skriptblock zu unserer **package.json**-Datei hinzufügen (vorausgesetzt, dass sich unser Anwendungs-Quellcode in einem Ordner `/src/js` befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um noch etwas weiter zu erläutern, `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Kommandozeile eingeben könnten, um `eslint` auf JavaScript-Dateien auszuführen, die sich im `src/js`-Verzeichnis innerhalb unseres Anwendungsverzeichnisses befinden. Die Aufnahme des obigen in die package.json-Datei unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm ausführen, indem wir aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht viel kürzer als der ursprüngliche Befehl aussehen, aber Sie können wesentlich größere Befehle in Ihre npm-Skripte einschließen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einziges npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generator

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool generiert ein "Skelett" einer Express-Anwendung. Installieren Sie den Generator mit npm, wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Sie müssen diese Zeile möglicherweise mit `sudo` unter Ubuntu oder macOS voranstellen. Das `-g`-Flag installiert das Tool global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App mit dem Namen "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie dorthin, wo Sie sie erstellen möchten, und führen Sie die App aus, wie gezeigt:

```bash
express helloworld
```

> [!NOTE]
> Es sei denn, Sie verwenden eine alte Nodejs-Version (< 8.2.0), könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat den gleichen Effekt wie die Installation und das anschließende Ausführen von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den `help`-Befehl, um alle Optionen anzuzeigen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterverzeichnis Ihres aktuellen Standorts und zeigt den Fortschritt auf der Konsole an.
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

Installieren Sie alle Abhängigkeiten für die helloworld-App mit npm, wie gezeigt:

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

Der DEBUG-Befehl erzeugt nützliche Protokolle und führt zu einer Ausgabe wie der folgenden:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standard-Willkommensseite von Express zu sehen.

![Express - Standardbildschirm der generierten App](express_default_screen.png)

Wir sprechen mehr über die generierte App, wenn wir zum Artikel kommen, der das Erzeugen einer Skelettanwendung behandelt.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zum Erstellen von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und auch, wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und dann ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, um mit dieser Umgebung und den zugehörigen Tools eine vollständige Webanwendung zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Express installieren](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Verwendung von Node.js mit Windows Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
