---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt, da Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) oder macOS einrichten und testen können. Für jedes dieser Betriebssysteme bietet dieser Artikel das Notwendige, um mit der Entwicklung von Express-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Wissen, wie man ein Terminal oder die Befehlszeile öffnet. Wissen, wie man Softwarepakete auf dem Betriebssystem des Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Entwicklungsumgebung für Express auf Ihrem Computer einzurichten.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer einzurichten, um mit der Entwicklung von Webanwendungen zu beginnen. Dieser Abschnitt bietet einen Überblick über die benötigten Tools, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) auf Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Nodejs_, dem _npm Package Manager_ und (optional) dem _Express Application Generator_ auf Ihrem lokalen Computer.

_Node_ und der _npm_ Package Manager werden zusammen aus vorbereiteten Binärpaketen, Installern, Betriebssystem-Package-Managern oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird dann von npm als Abhängigkeit Ihrer individuellen _Express_-Webanwendungen installiert (zusammen mit anderen Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zum Bereitstellen statischer Dateien usw.).

Mit _npm_ kann auch der _Express Application Generator_ (global) installiert werden, ein praktisches Tool zum Erstellen von Skelett- _Express_-Webanwendungen, die dem {{Glossary("MVC", "MVC-Muster")}} folgen. Der Anwendungsgenerator ist optional, da Sie dieses Tool nicht _benötigen_, um Apps zu erstellen, die Express verwenden, oder um Express-Apps mit derselben architektonischen Struktur oder denselben Abhängigkeiten zu erstellen. Wir werden ihn jedoch verwenden, weil er den Einstieg erleichtert und eine modulare Anwendungsstruktur fördert.

> [!NOTE]
> Im Gegensatz zu einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt die Webanwendung ihren eigenen Webserver!

Es gibt andere periphere Tools, die Teil einer typischen Entwicklungsumgebung sind, darunter [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code und Source-Control-Management-Tools wie [Git](https://git-scm.com/) zum sicheren Verwalten verschiedener Versionen Ihres Codes. Wir gehen davon aus, dass Sie diese Art von Tools bereits installiert haben (insbesondere einen Texteditor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann auf Windows, macOS, vielen Linux-Distributionen, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js [Downloads](https://nodejs.org/en/download) Seite. Fast jeder Personal Computer sollte über die notwendige Leistung verfügen, um Node während der Entwicklung auszuführen. _Express_ läuft in einer _Node_-Umgebung und kann daher auf jeder Plattform laufen, die _Node_ unterstützt.

In diesem Artikel geben wir Anweisungen zur Einrichtung für Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Veröffentlichungen von Node](https://nodejs.org/en/blog/release/) — neuere Versionen enthalten Fehlerbehebungen, Unterstützung für neuere Versionen der ECMAScript (JavaScript)-Standards und Verbesserungen der Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS (Long-Term Supported)_-Version verwenden, da diese stabiler sein wird als die "aktuelle" Version, während sie dennoch relativ aktuelle Funktionen bietet (und weiterhin aktiv gewartet wird). Sie sollten die _aktuelle_ Version verwenden, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie die neueste LTS-Version von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten, wie Datenbanktreiber, Template-Engines, Authentifizierungs-Engines usw. sind Teil der Anwendung und werden mit dem npm Package Manager in die Anwendungsumgebung importiert. Wir werden sie in späteren artikelspezifischen Artikeln besprechen.

## Installation von Node

Um _Express_ verwenden zu können, müssen Sie _Nodejs_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren. Um dies zu erleichtern, werden wir zuerst einen Node-Version-Manager installieren und diesen dann verwenden, um die neuesten Long Term Supported (LTS)-Versionen von Node und npm zu installieren.

> [!NOTE]
> Sie können nodejs und npm auch mit den Installationsprogrammen von <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche zum Herunterladen der LTS-Version, die "Empfohlen für die meisten Benutzer" ist), oder Sie können [die Installation mit dem Paketmanager Ihres Betriebssystems](https://nodejs.org/en/download) (nodejs.org) vornehmen. Wir empfehlen dringend die Verwendung eines Node-Version-Managers, da diese das Installieren, Aktualisieren und Wechseln zwischen bestimmten Versionen von Node und npm erleichtern.

### Windows

Es gibt eine Reihe von Version-Managern für Node unter Windows. Hier verwenden wir [nvm-windows](https://github.com/coreybutler/nvm-windows), das bei Node-Entwicklern sehr angesehen ist.

Installieren Sie die neueste Version mit dem Installationsprogramm Ihrer Wahl von der [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) Seite. Nachdem `nvm-windows` installiert ist, öffnen Sie eine Eingabeaufforderung (oder PowerShell) und geben den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install lts
```

Zum Zeitpunkt der Erstellung beträgt die LTS-Version von Nodejs 22.17.0. Sie können diese mit dem folgenden Befehl als _aktuelle Version_ festlegen:

```bash
nvm use 22.17.0
```

> [!NOTE]
> Wenn Sie Warnungen "Zugriff verweigert" erhalten, müssen Sie diesen Befehl in einem Prompt mit Administratorrechten ausführen.

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen herauszufinden, wie das Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Es gibt eine Reihe von Version-Managern für Node unter Ubuntu und macOS. [nvm](https://github.com/nvm-sh/nvm) ist einer der beliebteren und ist die Originalversion, auf der `nvm-windows` basiert. Siehe [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) für die Terminalanweisungen zur Installation der neuesten Version von nvm.

Nachdem `nvm` installiert ist, öffnen Sie ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von nodejs und npm herunterzuladen:

```bash
nvm install --lts
```

Zum Zeitpunkt der Erstellung beträgt die LTS-Version von Nodejs 22.17.0. Der Befehl `nvm list` zeigt die heruntergeladenen Versionen und die aktuelle Version an. Sie können eine bestimmte Version mit dem unten stehenden Befehl als _aktuelle Version_ festlegen (derselbe wie für `nvm-windows`):

```bash
nvm use 22.17.0
```

Verwenden Sie den Befehl `nvm --help`, um andere Befehlszeilenoptionen herauszufinden. Diese sind oft ähnlich oder gleich denen, die von `nvm-windows` angeboten werden.

### Testen Ihrer Nodejs- und npm-Installation

Sobald Sie `nvm` so eingestellt haben, dass eine bestimmte Node-Version verwendet wird, können Sie die Installation testen. Eine gute Möglichkeit, dies zu tun, ist die Verwendung des "version"-Befehls in Ihrem Terminal/Eingabeaufforderung und die Überprüfung, ob die erwartete Versionszeichenfolge zurückgegeben wird:

```bash
> node -v
v22.17.0
```

Der _Nodejs_ Package Manager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
10.9.2
```

Als etwas spannenderer Test erstellen wir einen sehr einfachen "reinen Node"-Server, der "Hello World" im Browser ausgibt, wenn Sie die richtige URL im Browser aufrufen:

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

   Der Code importiert das "http"-Modul und verwendet es, um einen Server (`createServer()`) zu erstellen, der HTTP-Anfragen auf Port 3000 abhört. Das Skript gibt dann eine Nachricht in der Konsole aus, auf welcher Browser-URL Sie den Server testen können. Die `createServer()`-Funktion nimmt als Argument eine Callback-Funktion, die bei Empfang einer HTTP-Anfrage aufgerufen wird — dies gibt eine Antwort mit einem HTTP-Statuscode von 200 ("OK") und dem Klartext "Hello World" zurück.

   > [!NOTE]
   > Machen Sie sich keine Sorgen, wenn Sie noch nicht genau verstehen, was dieser Code tut! Wir werden unseren Code genauer erklären, sobald wir mit Express arbeiten!

2. Starten Sie den Server, indem Sie in derselben Verzeichnisebene wie Ihre `hellonode.js`-Datei in Ihrem Befehlszeilenprompt navigieren und `node` zusammen mit dem Skriptnamen aufrufen, wie folgt:

   ```bash
   node hellonode.js
   ```

   Sobald der Server startet, wird eine Konsolenausgabe angezeigt, die die IP-Adresse angibt, unter der der Server läuft:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Navigieren Sie zur URL `http://127.0.0.1:3000`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World" anzeigen.

## Verwenden von npm

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Tool für die Arbeit mit _Node_-Anwendungen. `npm` wird verwendet, um alle Pakete (JavaScript-Bibliotheken) zu beziehen, die eine Anwendung für Entwicklung, Testen und/oder Produktion benötigt, und kann auch verwendet werden, um Tests und Tools im Entwicklungsprozess auszuführen.

> [!NOTE]
> Aus der Sicht von Node ist _Express_ nur ein weiteres Paket, das Sie mit npm installieren und dann in Ihrem eigenen Code anfordern müssen.

Sie können npm manuell verwenden, um alle benötigten Pakete separat zu beziehen. Typischerweise verwalten wir jedoch Abhängigkeiten mithilfe einer einfachen Textdefinitionsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Abhängigkeiten für ein bestimmtes JavaScript-"Paket" auf, einschließlich des Paketnamens, der Version, Beschreibung, der initialen auszuführenden Datei, Produktionsabhängigkeiten, Entwicklungsabhängigkeiten, der Versionen von _Node_, mit denen es funktioniert, usw. Die **package.json**-Datei sollte alles enthalten, was npm benötigt, um Ihre Anwendung abzurufen und auszuführen (wenn Sie eine wiederverwendbare Bibliothek schreiben, könnten Sie diese Definition verwenden, um Ihr Paket im npm-Repository hochzuladen und es anderen Benutzern zur Verfügung zu stellen).

### Abhängigkeiten hinzufügen

Die folgenden Schritte zeigen, wie Sie npm verwenden können, um ein Paket herunterzuladen, es in den Projektabhängigkeiten zu speichern und es dann in einer Node-Anwendung zu nutzen.

> [!NOTE]
> Hier zeigen wir die Anweisungen, um das _Express_-Paket zu beziehen und zu installieren. Später zeigen wir, wie dieses Paket und andere bereits für uns mit dem _Express Application Generator_ spezifiziert wurden. Dieser Abschnitt wird bereitgestellt, weil es nützlich ist zu verstehen, wie npm funktioniert und was vom Anwendungsgenerator erstellt wird.

1. Erstellen Sie zunächst ein Verzeichnis für Ihre neue Anwendung und navigieren Sie hinein:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Verwenden Sie den npm `init`-Befehl, um eine **package.json**-Datei für Ihre Anwendung zu erstellen. Dieser Befehl fordert Sie auf, eine Reihe von Dingen einzugeben, darunter den Namen und die Version Ihrer Anwendung sowie den Namen der initialen Einstiegspunktdatei (standardmäßig ist dies **index.js**). Akzeptieren Sie vorerst einfach die Standardwerte:

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

3. Installieren Sie jetzt Express im `myapp`-Verzeichnis und speichern Sie es in der Abhängigkeitsliste Ihrer **package.json**-Datei:

   ```bash
   npm install express
   ```

   Der Abhängigkeitsbereich Ihrer **package.json** enthält nun _Express_ und erscheint am Ende der **package.json**-Datei.

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

4. Um die Express-Bibliothek zu nutzen, rufen Sie die `require()`-Funktion in Ihrer **index.js**-Datei auf, um sie in Ihrer Anwendung zu integrieren. Erstellen Sie diese Datei jetzt im Stammverzeichnis des "myapp"-Anwendungsverzeichnisses und geben Sie ihr den folgenden Inhalt:

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

   Dieser Code zeigt eine minimale "HelloWorld" Express-Webanwendung. Dies importiert das "express"-Modul mit `require()` und verwendet es, um einen server (`app`) zu erstellen, der HTTP-Anfragen auf Port 3000 abhört und eine Nachricht in die Konsole druckt, welche Browser-URL Sie verwenden können, um den Server zu testen. Die `app.get()`-Funktion reagiert nur auf HTTP-`GET`-Anfragen mit dem angegebenen URL-Pfad ('/'), indem sie eine Funktion aufruft, um unsere _Hello World!_-Nachricht zu senden.

   > [!NOTE]
   > Die Backticks in `` `Example app listening on port ${port}!` `` erlauben es uns, den Wert von `$port` in den String zu interpolieren.

5. Sie können den Server starten, indem Sie node mit dem Skript in Ihrer Eingabeaufforderung aufrufen:

   ```bash
   node index.js
   ```

   Sie werden die folgende Konsolenausgabe sehen:

   ```plain
   Example app listening on port 3000
   ```

6. Gehen Sie zur URL `http://localhost:3000/`. Wenn alles funktioniert, sollte der Browser die Zeichenfolge "Hello World!" anzeigen.

### Entwicklungsabhängigkeiten

Wenn eine Abhängigkeit nur während der Entwicklung verwendet wird, sollten Sie sie stattdessen als "Entwicklungsabhängigkeit" speichern (damit Benutzer Ihres Pakets sie nicht in der Produktion installieren müssen). Um beispielsweise das beliebte JavaScript-Linting-Tool [ESLint](https://eslint.org/) zu verwenden, würden Sie npm wie folgt aufrufen:

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
> "[Linter](<https://en.wikipedia.org/wiki/Lint_(software)>)" sind Tools, die statische Analysen an Software durchführen, um die Einhaltung/Nichteinhaltung einer Reihe von Coding-Best-Practices zu erkennen und zu melden.

### Aufgaben ausführen

Neben dem Definieren und Abrufen von Abhängigkeiten können Sie auch _benannte_ Skripts in Ihren **package.json**-Dateien definieren und npm aufrufen, um sie mit dem [run-script](https://docs.npmjs.com/cli/commands/npm-run/)-Befehl auszuführen. Dieser Ansatz wird häufig verwendet, um das Ausführen von Tests und Teilen der Entwicklungs- oder Build-Toolchain zu automatisieren (z.B. das Ausführen von Tools zur Minimierung von JavaScript, Verkleinern von Bildern, LINT/Analyse Ihres Codes usw.).

> [!NOTE]
> Task-Runner wie [Gulp](https://gulpjs.com/) und [Grunt](https://gruntjs.com/) können ebenfalls verwendet werden, um Tests und andere externe Tools auszuführen.

Zum Beispiel, um ein Skript zu definieren, um die im vorhergehenden Abschnitt spezifizierte _eslint_ Entwicklungsabhängigkeit auszuführen, könnten wir der **package.json**-Datei unseres Projekts den folgenden Skriptblock hinzufügen (unter der Annahme, dass sich der Quellcode unserer Anwendung in einem Ordner `/src/js` befindet):

```json
{
  "scripts": {
    // …
    "lint": "eslint src/js"
    // …
  }
}
```

Um das etwas weiter zu erklären, `eslint src/js` ist ein Befehl, den wir in unser Terminal / Eingabeaufforderung eingeben könnten, um `eslint` auf JavaScript-Dateien auszuführen, die im `src/js`-Verzeichnis innerhalb unseres App-Verzeichnisses enthalten sind. Wenn wir das oben in unsere package.json-Datei der App aufnehmen, erhalten wir eine Abkürzung für diesen Befehl — `lint`.

Wir könnten dann _eslint_ mit npm durch den Aufruf von:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

Dieses Beispiel mag nicht kürzer aussehen als der Originalbefehl, aber Sie können viel größere Befehle in Ihre npm-Skripte einfügen, einschließlich Ketten mehrerer Befehle. Sie könnten ein einziges npm-Skript identifizieren, das all Ihre Tests auf einmal durchführt.

## Installation des Express Application Generators

Das [Express Application Generator](https://expressjs.com/en/starter/generator.html)-Tool generiert ein Express-Anwendungs-"Skelett". Installieren Sie den Generator mit npm wie gezeigt:

```bash
npm install express-generator -g
```

> [!NOTE]
> Möglicherweise müssen Sie diese Zeile mit `sudo` auf Ubuntu oder macOS voranstellen. Das `-g`-Flag installiert das Tool global, sodass Sie es von überall aufrufen können.

Um eine _Express_-App namens "helloworld" mit den Standardeinstellungen zu erstellen, navigieren Sie zu dem Ort, an dem Sie sie erstellen möchten, und führen Sie die App wie folgt aus:

```bash
express helloworld
```

> [!NOTE]
> Es sei denn, Sie verwenden eine alte Nodejs-Version (< 8.2.0), können Sie alternativ die Installation überspringen und express-generator mit [npx](https://github.com/npm/npx#readme) ausführen. Dies hat den gleichen Effekt wie das Installieren und dann Ausführen von `express-generator`, installiert jedoch das Paket nicht auf Ihrem System:
>
> ```bash
> npx express-generator helloworld
> ```

Sie können auch die zu verwendende Template-Bibliothek und eine Reihe anderer Einstellungen angeben. Verwenden Sie den `help`-Befehl, um alle Optionen zu sehen:

```bash
express --help
```

Der Generator wird die neue Express-App in einem Unterordner Ihres aktuellen Standorts erstellen und den Build-Fortschritt auf der Konsole anzeigen. Nach Abschluss zeigt das Tool die Befehle an, die Sie eingeben müssen, um die Node-Abhängigkeiten zu installieren und die App zu starten.

Die neue App wird eine **package.json**-Datei im Stammverzeichnis enthalten. Sie können diese öffnen, um zu sehen, welche Abhängigkeiten installiert sind, einschließlich Express und der Template-Bibliothek Jade:

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

Führen Sie dann die App aus (die Befehle sind leicht anders für Windows und Linux/macOS), wie unten gezeigt:

```bash
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

Der DEBUG-Befehl erzeugt nützliche Log-Ausgaben, die in etwa wie folgt aussehen:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Öffnen Sie einen Browser und navigieren Sie zu `http://localhost:3000/`, um die Standard-Express-Willkommensseite zu sehen.

![Express - Generated App Default Screen](express_default_screen.png)

Wir werden mehr über die generierte App sprechen, wenn wir zu dem Artikel über das Erstellen einer Skelettanwendung kommen.

## Zusammenfassung

Sie haben jetzt eine Node-Entwicklungsumgebung auf Ihrem Computer eingerichtet, die zum Erstellen von Express-Webanwendungen verwendet werden kann. Sie haben auch gesehen, wie npm verwendet werden kann, um Express in eine Anwendung zu importieren, und wie Sie Anwendungen mit dem Express Application Generator-Tool erstellen und anschließend ausführen können.

Im nächsten Artikel beginnen wir mit einem Tutorial zur Erstellung einer vollständigen Webanwendung unter Verwendung dieser Umgebung und der zugehörigen Tools.

## Siehe auch

- [Downloads](https://nodejs.org/en/download) Seite (nodejs.org)
- [Express installieren](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Node.js mit Windows-Subsystem für Linux verwenden](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
