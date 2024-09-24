---
title: Einrichten einer Node-Entwicklungsumgebung
slug: Learn/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_express) ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) oder macOS einrichten und testen. Für jedes dieser Betriebssysteme bietet dieser Artikel die notwendigen Informationen, um mit der Entwicklung von Express-Apps zu beginnen.

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

## Übersicht über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer für die Entwicklung von Webanwendungen vorzubereiten. Dieser Abschnitt gibt einen Überblick über die benötigten Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, dem _npm-Paketmanager_ und (optional) dem _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden zusammen aus vorbereiteten Binärpaketen, Installationsprogrammen, Betriebssystem-Paketmanagern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer einzelnen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Templating-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Ausliefern statischer Dateien usw.).

Der _npm_ kann auch verwendet werden, um den _Express Application Generator_ (global) zu installieren, ein praktisches Werkzeug zum Erstellen von _Express_-Webanwendungen, die dem [MVC-Muster](/de/docs/Glossary/MVC) folgen. Der Application Generator ist optional, da Sie dieses Tool nicht _benötigen_, um Apps zu erstellen, die Express verwenden, oder um Express-Apps zu erstellen, die das gleiche architektonische Layout oder die gleichen Abhängigkeiten haben. Wir werden es jedoch verwenden, da es den Einstieg erheblich erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks umfasst die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Es gibt andere periphere Werkzeuge, die Teil einer typischen Entwicklungsumgebung sind, einschließlich [Texteditoren](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code, und Quellcodeverwaltungstools wie [Git](https://git-scm.com/) zum sicheren Verwalten verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie diese Art von Werkzeugen bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download/package-manager) Seite. Fast jeder Personal Computer sollte die notwendige Leistung haben, um Node während der Entwicklung auszuführen. _Express_ wird in einer _Node_-Umgebung ausgeführt und kann daher auf jeder Plattform laufen, die _Node_ ausführt.

In diesem Artikel bieten wir Anweisungen zur Einrichtung für Windows, macOS und Ubuntu Linux.

### Welche Node/Express-Version sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) - neuere Veröffentlichungen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript)-Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-Term Supported)_ Version verwenden, da diese stabiler ist als die "aktuelle" Version und dennoch relativ aktuelle Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten die _Aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie immer die neueste Version verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie Datenbanktreiber, Templating-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mit dem npm-Paketmanager in die Anwendungsumgebung importiert. Wir werden sie in späteren app-spezifischen Artikeln besprechen.

## Node installieren

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu erleichtern, installieren wir zuerst einen Node-Version-Manager und verwenden diesen dann, um die neuesten Long Term Supported (LTS) Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können außerdem nodejs und npm mit den auf <https://nodejs.org/en/> bereitgestellten Installern installieren (wählen Sie den Button zum Herunterladen des LTS-Builds, der "Für die meisten Benutzer empfohlen" ist), oder Sie können [die Paketverwaltung für Ihr Betriebssystem verwenden](https://nodejs.org/en/download/package-manager) (nodejs.org).
> Wir empfehlen dringend, einen Node-Version-Manager zu verwenden, da diese die Installation, das Upgrade und das Umschalten zwischen jeder bestimmten Version von Node und npm erleichtern.

### Windows

Es gibt eine Reihe von Node-Version-Managern für Windows.
Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), der bei Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version mit dem Installer Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Nachdem `nvm-windows` installiert wurde, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt der Erstellung dieses Textes ist die LTS-Version von nodejs 20.11.0.
Sie können dies mit dem untenstehenden Befehl als _aktuelle Version_ festlegen:

```bash
nvm use 20.11.0
```

> [!NOTE]
> Wenn Sie "Access Denied"-Warnungen erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu finden, wie das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Node-Version-Managern für Ubuntu und macOS.
[nvm](https://github.com/nvm-sh/nvm) ist einer der beliebteren und ist die ursprüngliche Version, auf der `nvm-windows` basiert.
Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert wurde, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt der Erstellung dieses Textes ist die LTS-Version von nodejs 20.11.0.
Der Befehl `nvm list` zeigt den heruntergeladenen Satz von Versionen und die aktuelle Version.
Sie können eine bestimmte Version als _aktuelle Version_ mit dem untenstehenden Befehl festlegen (gleich wie bei `nvm-windows`)

```bash
nvm use 20.11.0
```

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen zu finden.
Diese sind oft ähnlich oder gleich denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` zur Verwendung einer bestimmten Node-Version eingestellt haben, können Sie die Installation testen.
Eine gute Möglichkeit, dies zu tun, ist die Verwendung des Befehls "version" in Ihrem Terminal/Befehlszeilenfenster und prüfen, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v20.11.0
```

Der _Nodejs_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.2.4
```

Als etwas aufregenderer Test erstellen wir einen sehr einfachen "reinen Node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL in Ihrem Browser besuchen:

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

   Der Code importiert das Modul "http" und verwendet es, um einen Server (`createServer()`) zu erstellen, der auf HTTP-Anfragen auf Port 3000 wartet. Das Skript druckt dann eine Nachricht an die Konsole, welche Browser-URL Sie verwenden können, um den Server zu testen. Die Funktion `createServer()` nimmt als Argument eine Rückruffunktion, die aufgerufen wird, wenn eine HTTP-Anfrage empfangen wird – dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code tut! Wir werden unseren Code ausführlicher erklären, sobald wir anfangen, Express zu verwenden!

2. Starten Sie den Server, indem Sie in das gleiche Verzeichnis wie Ihre `hellonode.js`-Datei in Ihrem Befehlszeilenfenster wechseln und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server gestartet ist, sehen Sie die Konsolenausgabe, die die IP-Adresse angibt, unter der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zu der URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser den String "Hello World" anzeigen.

## Verwendung von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
`npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) zu holen, die eine Anwendung für die Entwicklung, das Testen und/oder die Produktion benötigt, und kann auch verwendet werden, um Tests und Tools auszuführen, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mithilfe von npm installieren und dann in Ihrem eigenen Code einbinden müssen.

Sie können npm manuell verwenden, um jedes benötigte Paket separat zu beschaffen. Normalerweise verwalten wir jedoch Abhängigkeiten mit Hilfe einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein spezifisches JavaScript-"Paket" auf, einschließlich des Namens des Pakets, der Version, der Beschreibung, der ursprünglich auszuführenden Datei, der Produktionsabhängigkeiten, der Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es arbeiten kann usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung zu holen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben würden, könnten Sie diese Definition verwenden, um Ihr Paket in das npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Hinzufügen von Abhängigkeiten

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in die Projektabhängigkeiten zu speichern und es dann in eine Node-Anwendung einzubinden.

> [!NOTE]
> Hier zeigen wir die Anweisungen, um das _Express_-Paket zu holen und zu installieren. Später zeigen wir, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ spezifiziert sind. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist, zu verstehen, wie npm funktioniert und was vom Application Generator erstellt wird.

1. Erstellen Sie zuerst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie in dieses Verzeichnis:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, eine Reihe von Dingen einzugeben, einschließlich des Namens und der Version Ihrer Anwendung und des Namens der anfänglich auszuführenden Datei (standardmäßig ist dies **index.js**). Akzeptieren Sie fürs Erste einfach die Standardwerte:

   ```bash
   npm init
   ```

   Wenn Sie die **package.json**-Datei anzeigen (`cat package.json`), sehen Sie die Standardwerte, die Sie akzeptiert haben, endend mit der Lizenz.

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

   Der Abhängigkeitsbereich Ihrer **package.json** wird nun am Ende der **package.json**-Datei erscheinen und _Express_ einschließen.

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
   Erstellen Sie diese Datei jetzt im Stammverzeichnis der "myapp"-Anwendung und geben Sie ihr den folgenden Inhalt:

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
   Dies importiert das "express"-Modul mit `require()` und verwendet es, um einen Server (`app`) zu erstellen, der auf HTTP-Anfragen auf Port 3000 wartet und eine Meldung an die Konsole druckt, die erklärt, welche Browser-URL Sie verwenden können, um den Server zu testen.
   Die `app.get()`-Funktion reagiert nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), in diesem Fall durch Aufrufen einer Funktion, die unsere _Hello World!_-Nachricht sendet.

   > [!NOTE]
   > Die Backticks in der `` `Example app listening on port ${port}!` `` erlauben es uns, den Wert von `$port` in den String zu interpolieren.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrem Befehlszeilenfenster aufrufen:

   ```bash
   node index.js
   ```

   Sie sehen die folgende Konsolenausgabe:

   ```plain
   Example app listening on port 3000
   ```

6. Navigieren Sie zur URL `http://localhost:3000/`.
   Wenn alles funktioniert, sollte der Browser den String "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit die Benutzer Ihres Pakets sie in der Produktion nicht installieren müssen). Beispielsweise, um das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

```bash
npm install eslint --save-dev
```

Der folgende Eintrag würde dann zur **package.json** Ihrer Anwendung hinzugefügt:

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> "[Linter](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Werkzeuge, die statische Analysen an Software durchführen, um die Einhaltung/Nicht-Einhaltung einer Reihe von Kodierungs-Best Practices zu erkennen und zu melden.

### Aufgaben ausführen

Neben der Definition und dem Abrufen von Abhängigkeiten können auch _benannte_ Skripten in Ihren **package.json**-Dateien definiert und npm verwendet werden, um diese mit dem [run-script](https://docs.npmjs.com/cli/run-script/) Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um Tests und Teile der Entwicklungs- oder Build-Toolchain zu automatisieren (z. B. die Ausführung von Tools zum Minifizieren von JavaScript, Schrumpfen von Bildern, LINT/analysieren Ihres Codes usw.).

> [!NOTE]
> Aufgabenläufer wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können auch verwendet werden, um Tests und andere externe Tools auszuführen.

Um beispielsweise ein Skript zu definieren, um die _eslint_ Entwicklungsabhängigkeit auszuführen, die wir im vorherigen Abschnitt angegeben haben, könnten wir den folgenden Skriptblock zu unserer **package.json**-Datei hinzufügen (vorausgesetzt, dass unsere Anwendungsquelle sich in einem Ordner /src/js befindet):

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

Um etwas genauer zu erklären, `eslint src/js` ist ein Befehl, den wir in unser Terminal/eingabeaufforderung eingeben könnten, um `eslint` auf JavaScript-Dateien im `src/js`-Verzeichnis innerhalb unseres App-Verzeichnisses auszuführen. Das Einschließen des obigen Befehls in unsere package.json-Datei unseres Apps bietet eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm ausführen, indem wir Folgendes aufrufen:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht kürzer als der ursprüngliche Befehl aussehen, aber Sie können viel größere Befehle in Ihren npm-Skripten aufnehmen, einschließlich Ketten von mehreren Befehlen. Sie könnten ein einziges npm-Skript identifizieren, das alle Ihre Tests auf einmal ausführt.

## Installation des Express Application Generators

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html) Werkzeug generiert ein "Gerüst" für eine Express-Anwendung. Installieren Sie den Generator mit npm wie folgt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Sie müssen diese Zeile möglicherweise mit `sudo` unter Ubuntu oder macOS voranstellen. Die `-g`-Flagge installiert das Werkzeug global, sodass Sie es von überall aus aufrufen können.

Um eine _Express_-App mit dem Namen "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie diese erstellen möchten, und führen Sie die App wie gezeigt aus:

```bash
express helloworld
```

> [!NOTE]
> Sofern Sie keine alte nodejs-Version (< 8.2.0) verwenden, könnten Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen.
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

Der Generator erstellt die neue Express-App in einem Unterordner Ihres aktuellen Standorts und zeigt den Baufortschritt in der Konsole an.
Nach Abschluss zeigt das Werkzeug die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

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

Installieren Sie alle Abhängigkeiten für die helloworld-App mit npm wie gezeigt:

```bash
cd helloworld
npm install
```

Führen Sie dann die App (die Befehle sind für Windows und Linux/macOS leicht unterschiedlich) wie unten gezeigt aus:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliches Logging, das ein Ergebnis wie das folgende hat:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\expresstests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die standardmäßige Express-Willkommensseite zu sehen.

![Express - Generierte App Standardbildschirm](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zum Artikel über das Erstellen einer Gerüstanwendung kommen.

## Zusammenfassung

Sie haben nun eine Node-Entwicklungsumgebung auf Ihrem Computer, die zur Erstellung von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und auch, wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial, um eine vollständige Webanwendung mit dieser Umgebung und den zugehörigen Tools zu erstellen.

## Siehe auch

- [Downloads](https://nodejs.org/en/download/package-manager) Seite (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}
