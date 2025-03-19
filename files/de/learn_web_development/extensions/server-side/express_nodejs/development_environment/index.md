---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nun, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Dieser Artikel bietet Ihnen für eines der genannten Betriebssysteme die notwendigen Informationen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal / eine Befehlszeile öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem des Entwicklungsrechners installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Eine Entwicklungsumgebung für Express auf Ihrem Computer einrichten.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. In diesem Abschnitt wird ein Überblick darüber gegeben, welche Werkzeuge benötigt werden, und einige der einfachsten Methoden, um Node (und Express) auf Ubuntu, macOS und Windows zu installieren, werden erklärt und gezeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, dem _npm-Paketmanager_ und (optional) dem _Express-Anwendungsgenerator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystem-Paketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt wird). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zur Bereitstellung statischer Dateien, usw.).

_npm_ kann auch verwendet werden, um den _Express-Anwendungsgenerator_ (global) zu installieren, ein nützliches Tool zum Erstellen von Skeletteinführungen für _Express_-Webapps, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, weil Sie dieses Tool nicht _nutzen müssen_, um Apps zu erstellen, die Express verwenden oder Express-Apps zu konstruieren, die dieselbe architektonische Struktur oder Abhängigkeiten haben. Wir werden es jedoch verwenden, weil es den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks beinhaltet die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere periphere Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Tools zur Verwaltung der Versionskontrolle wie [Git](https://git-scm.com/) für die sichere Verwaltung verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie diese Art von Werkzeugen bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann unter Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download) Seite. Fast jeder Personal Computer sollte die erforderliche Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ unterstützt.

In diesem Artikel bieten wir Anweisungen zur Einrichtung für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Node-Veröffentlichungen](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen von ECMAScript (JavaScript) Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (langzeitunterstützte)_ Version verwenden, da diese stabiler ist als die "aktuelle" Version, dabei jedoch relativ neue Funktionen hat (und weiterhin aktiv gepflegt wird). Die _Current_-Version sollten Sie verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Wie steht es mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mithilfe des npm-Paketmanagers in die Anwendungsumgebung importiert. Wir werden sie in späteren appspezifischen Artikeln besprechen.

## Node installieren

Um _Express_ zu verwenden, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, werden wir zunächst einen Node-Version-Manager installieren und anschließend die neuesten Langzeitunterstützungs-(LTS)-Versionen von Node und npm damit installieren.

> [!NOTE]
> Sie können Nodejs und npm auch mit Installationsprogrammen auf <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche, um den LTS-Build herunterzuladen, der "Für die meisten Benutzer empfohlen" ist), oder Sie können [die Installation mit dem Paketmanager Ihres Betriebssystems durchführen](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen dringend, einen Node-Version-Manager zu verwenden, da diese die Installation, Aktualisierung und den Wechsel zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das unter Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version mit Ihrem bevorzugten Installationsprogramm von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert wurde, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Sie können diese als _aktuelle Version_ mit dem folgenden Befehl festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie Warnungen "Zugriff verweigert" erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu erhalten, wie das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Vielzahl von Node-Version-Managern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der populäreren und die ursprüngliche Version, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt des Schreibens ist die LTS-Version von Nodejs 20.11.0.
Der Befehl `nvm list` zeigt die heruntergeladene Version und die aktuelle Version an.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem folgenden Befehl festlegen (genau wie bei `nvm-windows`):

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu erhalten.
Diese sind oft ähnlich oder identisch mit denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` veranlasst haben, eine bestimmte Node-Version zu verwenden, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, besteht darin, den "version"-Befehl in Ihrem Terminal/Befehlszeilenfenster zu verwenden und zu überprüfen, ob der erwartete Versionsstring zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als etwas aufregenderen Test erstellen wir einen sehr grundlegenden "pure node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser aufrufen:

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf HTTP-Anfragen am Port 3000 wartet. Das Skript gibt dann eine Nachricht in der Konsole aus, über welche Browser-URL Sie den Server testen können. Die Funktion `createServer()` nimmt als Argument eine Callback-Funktion, die bei Empfang einer HTTP-Anfrage aufgerufen wird — dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code macht! Wir werden unseren Code ausführlicher erklären, sobald wir mit Express arbeiten!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrer Befehlszeile navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, sehen Sie eine Konsolenausgabe, die die IP-Adresse angibt, unter der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) zu holen, die eine Anwendung für die Entwicklung, das Testen und/oder die Produktion benötigt, und kann auch verwendet werden, um Tests und Werkzeuge zu betreiben, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code einbinden müssen.

Sie können mit npm manuell jedes benötigte Paket separat abrufen. Normalerweise verwalten wir Abhängigkeiten stattdessen mit einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, der Beschreibung, der Anfangsdatei zum Ausführen, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es arbeiten kann, usw. Die **package.json**-Datei sollte alles enthalten, was npm braucht, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und es anderen Benutzern zugänglich zu machen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu verwenden.

> [!NOTE]
> Hier zeigen wir die Anweisungen, um das _Express_-Paket abzurufen und zu installieren. Später zeigen wir, wie dieses Paket und andere bereits für uns durch den _Express-Anwendungsgenerator_ spezifiziert werden. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist, zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erzeugt wird.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm-`init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fragt Sie nach einer Reihe von Dingen, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der anfänglichen Einstiegspunktdatei (standardmäßig ist dies **index.js**). Für jetzt, akzeptieren Sie einfach die Vorgaben:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die Vorgaben, die Sie akzeptiert haben, endend mit der Lizenz.

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

   Der Abschnitt mit den Abhängigkeiten Ihrer **package.json** erscheint nun am Ende der **package.json**-Datei und enthält _Express_.

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
   Dies importiert das "express"-Modul mithilfe von `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen am Port 3000 wartet und eine Nachricht an die Konsole ausgibt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die Funktion `app.get()` antwortet nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), indem sie eine Funktion aufruft, um unsere _Hello World!_-Nachricht zu senden.

   > [!NOTE]
   > Die umgekehrten Anführungszeichen in `` `Example app listening on port ${port}!` `` ermöglichen es uns, den Wert von `$port` in den String zu interpolieren.

5. Sie können den Server starten, indem Sie Node mit dem Skript in Ihrem Befehlszeilenfenster aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Ihre Paketbenutzer sie nicht in der Produktion installieren müssen). Um zum Beispiel das beliebte JavaScript-Linter-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann der **package.json** Ihrer Anwendung hinzugefügt werden:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Lint-Tools](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die eine statische Analyse an Software durchführen, um die Einhaltung/Nichteinhaltung einiger Kodierungs-Best-Practice-Vorgaben zu erkennen und zu melden.

### Aufgaben ausführen

Zusätzlich zum Definieren und Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripte in Ihren **package.json**-Dateien definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/run-script/)-Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um Tests und Teile der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. Ausführen von Tools, um JavaScript zu minifizieren, Bilder zu verkleinern, Ihren Code zu LINten/analysieren usw.).

> [!NOTE]
> Aufgaben-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Werkzeuge auszuführen.

Um beispielsweise ein Skript zum Ausführen der _eslint_-Entwicklungsabhängigkeit zu definieren, die wir im vorherigen Abschnitt angegeben haben, könnten wir den folgenden Skriptblock in unsere **package.json**-Datei hinzufügen (angenommen, dass unsere Anwendungsquelle sich in einem Ordner /src/js befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um etwas näher zu erläutern, `eslint src/js` ist ein Befehl, den wir in unserem Terminal/Befehlszeilenfenster eingeben könnten, um `eslint` auf JavaScript-Dateien im Verzeichnis `src/js` innerhalb des App-Verzeichnisses auszuführen. Das Einfügen der obigen Zeilen in die package.json-Datei unserer App bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm ausführen, indem wir folgendes aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht viel kürzer aussehen als der Originalbefehl, aber Sie können weitaus größere Befehle in Ihren npm-Skripten einfügen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einzelnes npm-Skript benennen, das alle Ihre Tests auf einmal ausführt.

## Installation des Express-Anwendungsgenerators

Das [Express-Anwendungsgenerator](https://expressjs.com/en/starter/generator.html)-Werkzeug erzeugt ein Express-Anwendungsskeleton. Installieren Sie den Generator wie gezeigt mit npm:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile auf Ubuntu oder macOS mit `sudo` voranstellen. Das `-g`-Flag installiert das Tool global, sodass Sie es von überall anrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Es sei denn, Sie verwenden eine alte Nodejs-Version (< 8.2.0), könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
> Dies hat denselben Effekt wie die Installation und anschließende Ausführung von `express-generator`, installiert das Paket jedoch nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben.
Verwenden Sie den Befehl `help`, um alle Optionen zu sehen:

```bash
express --help
```

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Standorts und zeigt die Fortschritte beim Erstellen in der Konsole an.
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

Der DEBUG-Befehl erstellt nützliche Protokolle, die in einer Ausgabe wie der folgenden resultieren:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Express-Willkommensseite anzuzeigen.

![Express - Generierte App Standardbildschirm](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zum Artikel über das Erstellen einer Anwendungsskeleton kommen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Express-Anwendungsgenerator-Tool erstellen und dann ausführen können.

Im nächsten Artikel werden wir beginnen, ein Tutorial durchzuarbeiten, um eine vollständige Webanwendung mit dieser Umgebung und den zugehörigen Tools zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Verwendung von Node.js mit dem Windows-Subsystem für Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
