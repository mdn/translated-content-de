---
title: Einrichten einer Node-Entwicklungsumgebung
short-title: Einrichten der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Nachdem Sie wissen, wofür [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) verwendet wird, zeigen wir Ihnen, wie Sie unter Windows, Linux (Ubuntu) oder macOS eine Node/Express-Entwicklungsumgebung einrichten und testen. Dieser Artikel enthält für jedes dieser Betriebssysteme die Informationen, die Sie benötigen, um mit der Entwicklung von Express-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie wissen, wie Sie ein Terminal oder eine Befehlszeile öffnen und Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installieren.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Eine Entwicklungsumgebung für Express auf Ihrem Computer einrichten.</td>
    </tr>
  </tbody>
</table>

## Überblick über die Express-Entwicklungsumgebung

_Node_ und _Express_ machen es sehr einfach, Ihren Computer für die Entwicklung von Webanwendungen einzurichten. Dieser Abschnitt gibt einen Überblick über die benötigten Werkzeuge, erklärt einige der einfachsten Methoden zur Installation von Node (und Express) unter Ubuntu, macOS und Windows und zeigt, wie Sie Ihre Installation testen können.

### Was ist die Express-Entwicklungsumgebung?

Die _Express_-Entwicklungsumgebung umfasst eine Installation von _Node.js_ und dem _npm-Paketmanager_ auf Ihrem lokalen Computer.

_Node_ und der _npm_-Paketmanager werden gemeinsam über vorbereitete Binärpakete, Installationsprogramme, Paketmanager des Betriebssystems oder aus dem Quellcode installiert (wie in den folgenden Abschnitten gezeigt). _Express_ wird anschließend von npm als Abhängigkeit Ihrer einzelnen _Express_-Webanwendungen installiert (zusammen mit weiteren Bibliotheken wie Template-Engines, Datenbanktreibern, Authentifizierungs-Middleware, Middleware zur Bereitstellung statischer Dateien usw.).

Für das Local-Library-Tutorial erstellen wir ein Projekt, das dem {{Glossary("MVC", "MVC-Muster")}} folgt. Dabei verwenden wir eine modulare Anwendungsstruktur, die wir bei Bedarf erweitern können.

> [!NOTE]
> Anders als bei einigen anderen Web-Frameworks enthält die Entwicklungsumgebung keinen separaten Entwicklungs-Webserver. In _Node_/_Express_ erstellt und betreibt eine Webanwendung ihren eigenen Webserver!

Zu einer typischen Entwicklungsumgebung gehören außerdem weitere Werkzeuge, darunter [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und Versionsverwaltungssysteme wie [Git](https://git-scm.com/), mit denen Sie verschiedene Versionen Ihres Codes sicher verwalten können. Wir gehen davon aus, dass Sie solche Werkzeuge bereits installiert haben (insbesondere einen Code-Editor).

### Welche Betriebssysteme werden unterstützt?

_Node_ kann unter Windows, macOS, vielen Linux-Varianten, Docker usw. ausgeführt werden. Eine vollständige Liste finden Sie auf der Node.js-Seite [Downloads](https://nodejs.org/en/download). Nahezu jeder PC sollte genügend Leistung haben, um Node während der Entwicklung auszuführen. _Express_ läuft in einer _Node_-Umgebung und kann daher auf jeder Plattform ausgeführt werden, auf der _Node_ läuft.

In diesem Artikel finden Sie Anleitungen zur Einrichtung unter Windows, macOS und Ubuntu Linux.

### Welche Version von Node/Express sollten Sie verwenden?

Es gibt viele [Node-Versionen](https://nodejs.org/en/blog/release/) – neuere Versionen enthalten Fehlerbehebungen, unterstützen aktuellere Versionen der ECMAScript-(JavaScript-)Standards und bieten Verbesserungen an den Node-APIs.

Im Allgemeinen sollten Sie die neueste _LTS-Version (Long-Term Support)_ verwenden. Sie ist stabiler als die „Current“-Version, bietet aber dennoch relativ aktuelle Funktionen und wird weiterhin aktiv gepflegt. Verwenden Sie die _Current_-Version, wenn Sie eine Funktion benötigen, die in der LTS-Version nicht vorhanden ist.

Für _Express_ sollten Sie die neueste LTS-Version von Node verwenden.

### Was ist mit Datenbanken und anderen Abhängigkeiten?

Andere Abhängigkeiten wie Datenbanktreiber, Template-Engines, Authentifizierungssysteme usw. sind Teil der Anwendung und werden mithilfe des npm-Paketmanagers in die Anwendungsumgebung eingebunden. Wir behandeln sie in späteren, anwendungsspezifischen Artikeln.

## Node installieren

Um _Express_ verwenden zu können, müssen Sie _Node.js_ und den [Node Package Manager (npm)](https://docs.npmjs.com/) auf Ihrem Betriebssystem installieren.
Um dies zu vereinfachen, installieren wir zunächst einen Node-Versionsmanager und verwenden ihn dann, um die neuesten Versionen von Node und npm mit Long-Term Support (LTS) zu installieren.

> [!NOTE]
> Sie können Node.js und npm auch mit den Installationsprogrammen auf <https://nodejs.org/en/> installieren (wählen Sie die Schaltfläche zum Herunterladen der LTS-Version, die als „Recommended for most users“ gekennzeichnet ist). Alternativ können Sie sie [über den Paketmanager Ihres Betriebssystems installieren](https://nodejs.org/en/download) (nodejs.org).
> Wir empfehlen ausdrücklich einen Node-Versionsmanager, da er die Installation, Aktualisierung und den Wechsel zwischen verschiedenen Versionen von Node und npm erleichtert.

### Windows

Für Windows gibt es mehrere Node-Versionsmanager.
Hier verwenden wir [nvm-windows](https://github.com/nvm-windows/nvm), das unter Node-Entwicklern einen sehr guten Ruf genießt.

Installieren Sie die neueste Version mit einem Installationsprogramm Ihrer Wahl von der Seite [nvm-windows/releases](https://github.com/nvm-windows/nvm/releases).
Öffnen Sie nach der Installation von `nvm-windows` eine Eingabeaufforderung (oder PowerShell) und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Node.js und npm herunterzuladen:

```bash
nvm install lts
```

Führen Sie `nvm list` aus, um die installierten Versionen anzuzeigen. Wählen Sie für dieses Tutorial Node.js 24 oder höher. Legen Sie die gewählte Version mit dem folgenden Befehl als _aktuelle Version_ fest und ersetzen Sie dabei `<version>` durch die von Ihnen installierte Version:

```bash
nvm use <version>
```

> [!NOTE]
> Wenn Sie Warnungen mit dem Text „Access Denied“ erhalten, müssen Sie diesen Befehl in einer Eingabeaufforderung mit Administratorrechten ausführen.

Mit dem Befehl `nvm --help` können Sie sich über weitere Befehlszeilenoptionen informieren, etwa zum Auflisten aller verfügbaren Node-Versionen und aller heruntergeladenen NVM-Versionen.

### Ubuntu und macOS

Für Ubuntu und macOS gibt es mehrere Node-Versionsmanager.
[nvm](https://github.com/nvm-sh/nvm) ist einer der beliebtesten und die ursprüngliche Version, auf der `nvm-windows` basiert.
Eine Anleitung zur Installation der neuesten nvm-Version über das Terminal finden Sie unter [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script).

Öffnen Sie nach der Installation von `nvm` ein Terminal und geben Sie den folgenden Befehl ein, um die neueste LTS-Version von Node.js und npm herunterzuladen:

```bash
nvm install --lts
```

Der Befehl `nvm list` zeigt die installierten Versionen und die aktuelle Version an. Wählen Sie für dieses Tutorial Node.js 24 oder höher. Legen Sie die gewählte Version mit dem folgenden Befehl als _aktuelle Version_ fest und ersetzen Sie dabei `<version>` durch die von Ihnen installierte Version:

```bash
nvm use <version>
```

Mit dem Befehl `nvm --help` können Sie sich über weitere Befehlszeilenoptionen informieren.
Diese ähneln häufig denen von `nvm-windows` oder sind mit ihnen identisch.

### Ihre Node.js- und npm-Installation testen

Sobald Sie mit `nvm` eine bestimmte Node-Version ausgewählt haben, können Sie die Installation testen.
Eine gute Möglichkeit dazu ist, im Terminal oder in der Eingabeaufforderung den Befehl zur Anzeige der Version auszuführen und zu prüfen, ob die erwartete Versionszeichenfolge ausgegeben wird:

```bash
> node -v
v24.0.0
```

Der _Node.js_-Paketmanager _npm_ sollte ebenfalls installiert worden sein und kann auf die gleiche Weise getestet werden:

```bash
> npm -v
11.3.0
```

Die Versionsnummern können von den oben gezeigten abweichen. Wenn beide Befehle funktionieren, können Sie das Local-Library-Projekt konfigurieren.

## npm verwenden

Neben _Node_ selbst ist [npm](https://docs.npmjs.com/) das wichtigste Werkzeug für die Arbeit mit _Node_-Anwendungen.
Mit `npm` werden alle Pakete (JavaScript-Bibliotheken) abgerufen, die eine Anwendung für Entwicklung, Tests und/oder den Produktivbetrieb benötigt. Außerdem können damit Tests und Werkzeuge ausgeführt werden, die im Entwicklungsprozess verwendet werden.

> [!NOTE]
> Aus Sicht von Node ist _Express_ lediglich ein weiteres Paket, das Sie mit npm installieren und anschließend in Ihren eigenen Code importieren müssen.

Sie können npm verwenden, um jedes benötigte Paket einzeln abzurufen. Üblicherweise verwalten wir Abhängigkeiten stattdessen über eine Klartext-Konfigurationsdatei namens [package.json](https://docs.npmjs.com/files/package.json/). Diese Datei listet alle Angaben zu einem bestimmten JavaScript-„Paket“ auf, darunter den Paketnamen, die Version, die Beschreibung, die zuerst auszuführende Datei, Abhängigkeiten für den Produktivbetrieb und die Entwicklung sowie die unterstützten _Node_-Versionen. Die Datei **package.json** sollte alles enthalten, was npm zum Abrufen und Ausführen Ihrer Anwendung benötigt. Wenn Sie eine wiederverwendbare Bibliothek schreiben, können Sie diese Konfiguration verwenden, um Ihr Paket in das npm-Repository hochzuladen und anderen Benutzern zur Verfügung zu stellen.

### Das Projekt erstellen

In diesem Abschnitt erstellen wir das Local-Library-Projekt. Am Ende dieses Artikels sind die Paketkonfiguration und die Abhängigkeiten vorbereitet. Den Anwendungscode fügen wir in [Eine Grundstruktur für die Website erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) hinzu.

1. Erstellen Sie ein Verzeichnis für die Anwendung und wechseln Sie hinein:

   ```bash
   mkdir express-locallibrary-tutorial
   cd express-locallibrary-tutorial
   ```

2. Erstellen Sie mit dem npm-Befehl `init` eine für ES-Module konfigurierte Datei **package.json**:

   ```bash
   npm init --yes --init-type=module
   ```

   Die Option [`--init-type=module`](https://docs.npmjs.com/cli/commands/npm-init/#init-type) setzt `"type": "module"` anstelle des Standardwerts `"type": "commonjs"`.

3. Öffnen Sie **package.json** in Ihrem Texteditor. npm erstellt eine Datei wie die folgende und verwendet dabei den Verzeichnisnamen als Paketnamen:

   ```json
   {
     "name": "express-locallibrary-tutorial",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "type": "module"
   }
   ```

4. Fügen Sie `"private": true` und ein `engines`-Feld auf der obersten Ebene von **package.json** hinzu, neben `name` und `version`:

   ```json
   {
     "private": true,
     "engines": {
       "node": ">=24.0.0"
     }
   }
   ```

   Wenn Sie `private` auf `true` setzen, verhindern Sie eine versehentliche Veröffentlichung in der npm-Registry. Das Feld `engines` gibt die mindestens unterstützte Node.js-Version an. Behalten Sie die erzeugten Felder vorerst bei; `scripts` ersetzen wir weiter unten.

5. Löschen Sie die folgenden Felder, die nur für eine Veröffentlichung in der npm-Registry nützlich sind: `description`, `main`, `keywords`, `author`, `license`.

### Abhängigkeiten hinzufügen

Installieren Sie im Verzeichnis **express-locallibrary-tutorial** die Pakete, die das Projekt benötigt:

```bash
npm install debug express http-errors morgan pug
```

Jedes dieser Pakete hat eine Aufgabe in der Anwendung:

- `debug` zeigt Diagnosemeldungen an, wenn es über die Umgebungsvariable `DEBUG` aktiviert wird.
- `express` stellt das Web-Framework bereit.
- `http-errors` erstellt HTTP-Fehler, beispielsweise einen 404-Fehler für eine unbekannte Route.
- `morgan` protokolliert HTTP-Anfragen.
- `pug` erzeugt HTML aus Templates.

Der Befehl [`npm install`](https://docs.npmjs.com/cli/commands/npm-install/) lädt diese Pakete und ihre Abhängigkeiten in **node_modules** herunter, trägt sie unter `dependencies` in **package.json** ein und erstellt **package-lock.json**, um die aufgelösten Versionen festzuhalten. Nehmen Sie beide Paketdateien in die Versionsverwaltung auf, damit andere Entwickler die Projektabhängigkeiten installieren können. Wenn bereits eine Lockfile vorhanden ist, installiert `npm ci` die darin festgehaltenen Versionen.

> [!NOTE]
> Es empfiehlt sich, Ihre Abhängigkeitsbibliotheken regelmäßig auf die neuesten kompatiblen Versionen zu aktualisieren. Dies kann im Rahmen einer {{Glossary("continuous_integration", "Continuous-Integration")}}-Konfiguration sogar automatisch oder halbautomatisch erfolgen.
>
> Aktualisierungen der Minor- und Patch-Version einer Bibliothek bleiben in der Regel kompatibel.
> Wenn Sie ein Paket installieren, trägt npm dessen Version mit einem vorangestellten `^` in **package.json** ein (beispielsweise `"express": "^5.2.1"`).
> Dadurch können Sie mit dem folgenden Befehl auf die neueste kompatible `minor.patch`-Version aktualisieren:
>
> ```bash
> npm update --save
> ```
>
> Major-Versionen ändern die Kompatibilität.
> Bei solchen Aktualisierungen müssen wir `package.json` und den Code, der die Bibliothek verwendet, manuell anpassen und das Projekt umfassend erneut testen.

Weitere Pakete, etwa den Datenbanktreiber, installieren wir später im Tutorial, wenn wir sie benötigen. Eine breitere Einführung in Entwicklungswerkzeuge und deren Konfiguration finden Sie unter [Einführung in eine vollständige Toolchain](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain).

### Aufgaben ausführen

Neben Abhängigkeiten können Sie in **package.json** benannte Skripte definieren und mit npm ausführen. Ersetzen Sie das erzeugte `scripts`-Objekt einschließlich seines Platzhalterbefehls `test` durch diese Befehle:

```json
{
  "scripts": {
    "start": "node server.js",
    "devstart": "node --watch server.js"
  }
}
```

Das Skript `start` führt den Einstiegspunkt der Anwendung aus, **server.js**. Das Skript `devstart` verwendet den Watch-Modus von Node, um den Server neu zu starten, wenn sich eine importierte JavaScript-Datei ändert. Im Folgenden probieren wir beide Befehle mit einem einfachen Server aus.

Ihre **package.json** sollte jetzt wie folgt aussehen. Je nachdem, wann Sie die Pakete installieren, können die Versionsnummern der Abhängigkeiten neuer sein.

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "devstart": "node --watch server.js"
  },
  "type": "module",
  "private": true,
  "engines": {
    "node": ">=24.0.0"
  },
  "dependencies": {
    "debug": "^4.4.3",
    "express": "^5.2.1",
    "http-errors": "^2.0.1",
    "morgan": "^1.12.0",
    "pug": "^3.0.4"
  }
}
```

### Einen einfachen Server ausprobieren

Um zu prüfen, ob Ihre Umgebung und die npm-Skripte funktionieren, erstellen Sie neben **package.json** eine Datei namens **server.js** mit folgendem Inhalt:

```js
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

Der Code importiert Express und erstellt eine Anwendung. Die Methode `app.get()` beantwortet Anfragen an `/` mit dem Text „Hello World!“, und `app.listen()` startet den Server auf Port 3000. Node behandelt **server.js** als ES-Modul, weil wir `"type": "module"` in **package.json** festgelegt haben.

1. Starten Sie den Server in Ihrem Projektverzeichnis mit dem npm-Skript:

   ```bash
   npm start
   ```

   Im Terminal sollte die folgende Meldung erscheinen:

   ```plain
   Server running at http://localhost:3000/
   ```

2. Öffnen Sie `http://localhost:3000/` in Ihrem Browser. Sie sollten „Hello World!“ sehen.
3. Beenden Sie den Server mit **Strg+C** und starten Sie ihn anschließend im Watch-Modus:

   ```bash
   npm run devstart
   ```

4. Ändern Sie die Meldung in `res.send()` in „Hello again!“ und speichern Sie **server.js**. Node startet den Server automatisch neu. Laden Sie die Seite erneut, um die aktualisierte Meldung zu sehen.
5. Beenden Sie den Server mit **Strg+C** und löschen Sie die temporäre Datei **server.js**. Die Server- und Anwendungsdateien des Projekts fügen wir im Kapitel über die Grundstruktur der Website hinzu. Behalten Sie die npm-Skripte bei; sie werden auch diesen Server ausführen.

### Generierte und lokale Dateien ignorieren

Erstellen Sie neben **package.json** eine Datei namens **.gitignore** mit folgendem Inhalt:

```plain
node_modules/
*.log
.env
```

Damit werden installierte Abhängigkeiten, Protokolldateien und lokale Umgebungseinstellungen nicht in die Versionsverwaltung aufgenommen. Die Abhängigkeiten können anhand der Paketdateien erneut installiert werden.

Ihr Projektverzeichnis sollte nun Folgendes enthalten:

```plain
express-locallibrary-tutorial
├── .gitignore
├── node_modules
│   └── [A lot of installed dependency files]
├── package-lock.json
└── package.json
```

Das ist ein guter Ausgangspunkt für unser Tutorial. Die eigentlichen Anwendungsdateien, etwa JavaScript-Dateien, Templates und ein Stylesheet, fügen wir im Kapitel [Grundstruktur der Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) hinzu.

## Zusammenfassung

Sie verfügen nun über eine Node-Entwicklungsumgebung sowie die Paketkonfiguration, Abhängigkeiten und npm-Skripte für das Local-Library-Projekt. Sie haben die Einrichtung mit einem einfachen Express-Server überprüft. Das Projekt ist bereit für die Anwendungsdateien, die wir im Tutorial hinzufügen werden.

Im nächsten Artikel beginnen wir mit einem Tutorial, in dem wir mit dieser Umgebung und den zugehörigen Werkzeugen eine vollständige Webanwendung erstellen.

## Siehe auch

- Seite [Downloads](https://nodejs.org/en/download) (nodejs.org)
- [Express installieren](https://expressjs.com/en/starter/installing/) (expressjs.com)
- [Node.js mit dem Windows-Subsystem für Linux verwenden](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
