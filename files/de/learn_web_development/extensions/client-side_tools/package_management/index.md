---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager im Detail, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können – um Projekt-Werkzeugabhängigkeiten zu installieren, sie auf dem aktuellen Stand zu halten und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Paketmanager und Paket-Repositories sind, warum
        sie benötigt werden, und die Grundlagen ihrer Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittsoftwareteil, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, von keiner bis hin zu vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten enthalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist ein Code zur Berechnung relativer Daten als menschenlesbaren Text. Sie könnten dies sicherlich selbst programmieren, aber es ist sehr wahrscheinlich, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit verschwenden, das Rad neu zu erfinden? Darüber hinaus wird eine zuverlässige Drittanbieterabhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was es robuster und plattformunabhängiger macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue —, ein sehr kleines Dienstprogramm wie unsere menschenlesbare Datumslibrary, oder es kann sich um ein Kommandozeilenwerkzeug wie Prettier oder ESLint handeln, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese in Ihr Projekt mit einem einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element aufgenommen werden, aber das könnte nicht sofort funktionieren und Sie werden wahrscheinlich einige moderne Werkzeuge benötigen, um Ihren Code und Ihre Abhängigkeiten zusammenzupacken, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der im Allgemeinen verwendet wird, um sich auf eine einzelne Datei auf Ihrem Webserver zu beziehen, die den gesamten JavaScript-Code Ihrer Software enthält — typischerweise so stark wie möglich komprimiert, um die Zeit zu verkürzen, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Zusätzlich, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Das ist bei ein paar Abhängigkeiten nicht allzu schmerzhaft, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich herausfordernd werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser sicherstellt, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Reihe anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber abgesehen von npm selbst ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode zum Installieren neuer Abhängigkeiten (auch als "Pakete" bezeichnet), verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Möglichkeiten, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch könnten Sie möglicherweise keinen Paketmanager benötigen und Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird das Installieren und Deinstallieren von Paketen nahtlos handhaben. Wenn Sie keinen verwenden würden, müssten Sie manuell Folgendes handhaben:

- Alle richtigen JavaScript-Dateien des Pakets finden.
- Sie überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen haben.
- Sie herunterladen und an den richtigen Stellen in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung einzubinden (dies wird tendenziell mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, über das es sich zu lesen und zu verstehen lohnt).
- Dasselbe für alle Unterabhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus handhaben Paketmanager doppelte Abhängigkeiten (etwas, das in der Front-End-Entwicklung wichtig und häufig wird).

Im Fall von npm (und damit JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal für Ihr Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für die globale Installation gibt, sind die Vorteile für die lokale Installation wichtiger — wie Code-Portabilität und Versionssperrung.

Zum Beispiel, wenn Ihr Projekt von webpack mit einer bestimmten Konfiguration abhängt, wollen Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Computer installieren oder es viel später wieder aufrufen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von webpack installiert wäre, könnte diese nicht kompatibel sein. Um dies zu vermeiden, werden Abhängigkeiten lokal für ein Projekt installiert.

Um lokale Abhängigkeiten wirklich zur Geltung zu bringen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie den lokalen Abhängigkeiten zu verdanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufkommender Clients, wie [pnpm](https://pnpm.js.org/).

## Paketregistrierungen

Damit ein Paketmanager funktioniert, muss er wissen, wo Pakete installiert werden sollen, und das geschieht in Form einer Paketregistrierung. Die Registrierung ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und von wo es aus installiert werden kann. npm ist sowohl ein Paketmanager als auch der Name der am häufigsten verwendeten Paketregistrierung für JavaScript-Pakete. Das npm-Verzeichnis existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paketregistrierung verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxys für das npm-Verzeichnis zu erstellen (damit Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet auch einen Paket-Registrierungsdienst an](https://docs.github.com/en/packages), und es werden wahrscheinlich mehr Optionen erscheinen, je mehr Zeit vergeht.

Wichtig ist, dass Sie sicherstellen, dass Sie das beste Verzeichnis für sich gewählt haben. Viele Projekte werden npm verwenden, und wir werden in unseren Beispielen im restlichen Modul dabei bleiben.

## Nutzung des Paketökosystems

Gehen wir ein Beispiel durch, um Ihnen den Einstieg in die Nutzung eines Paketmanagers und -verzeichnisses zur Installation eines Befehlszeilenwerkzeugs zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel erweitern wir die Werkzeugkette um zusätzliche Tools und zeigen Ihnen, wie Sie die Website bereitstellen können.

Vite bietet einige [Init-Vorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um Ihnen den schnellen Einstieg in ein echtes Projekt zu erleichtern. Zur Demonstration werden wir eine von Grund auf konfigurieren, wobei wir die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als npm-Paket

Zunächst einmal erstellen Sie ein neues Verzeichnis, um unsere experimentelle App an einem sinnvollen Ort zu speichern, den Sie wiederfinden werden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes initialisieren wir unsere App als npm-Paket, das eine Konfigurationsdatei — `package.json` — erstellt, mit der wir unsere Konfigurationsdetails speichern können, falls wir diese Umgebung später wiederherstellen oder sogar das Paket in das npm-Verzeichnis veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln und keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm init
```

Nun werden Sie einige Fragen gestellt; npm erstellt dann eine Standard-`package.json`-Datei basierend auf den Antworten. Beachten Sie, dass keine davon für unsere Zwecke relevant sind, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Verzeichnis veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standardwert `npm-experiment` zu akzeptieren.
- `version`: Die Startversion der App. Drücken Sie wieder <kbd>Return</kbd>, um den Standardwert `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier weg, aber Sie können auch alles eingeben, was Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat für uns keine Bedeutung, also einfach <kbd>Return</kbd> drücken.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jedes dieser Felder vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, um das Paket zu veröffentlichen. Drücken Sie <kbd>Return</kbd>, um vorerst den Standardwert zu akzeptieren.

Drücken Sie noch einmal <kbd>Return</kbd>, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten nun eine `package.json`-Datei haben. Öffnen Sie sie und sie sollte so aussehen:

```json
{
  "name": "npm-experiment",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your name",
  "license": "ISC"
}
```

Wir fügen der `package.json` zwei weitere Zeilen hinzu:

- `"type": "module"`, was Node dazu veranlasst, alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) zu interpretieren anstelle der alten CommonJS-Module. Es ist eine allgemein gute Gewohnheit, sich daran zu gewöhnen.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich in das npm-Verzeichnis veröffentlichen.

Fügen Sie diese Zeilen direkt unter der `"name"`-Zeile hinzu:

```json
{
  "name": "npm-experiment",
  "type": "module",
  "private": true
  // …
}
```

Das ist also die Konfigurationsdatei, die Ihr Paket definiert. Das ist gut für jetzt, also lassen Sie uns weitermachen.

### Installation von Vite

Wir installieren zuerst Vite, das Build-Tool für unsere Website. Es ist verantwortlich dafür, unsere HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser zu bündeln.

```bash
npm install --save-dev vite
```

Wenn das erledigt ist, werfen Sie einen weiteren Blick auf Ihre `package.json`-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
{
  "devDependencies": {
    "vite": "^5.2.13"
  }
}
```

Dies ist Teil der npm-Magie — wenn Sie in Zukunft Ihren Code an einen anderen Standort, auf einem anderen Rechner, verschieben, können Sie das gleiche Setup wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm wird sich die Abhängigkeiten ansehen und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklerabhängigkeit zu installieren. Dieser Unterschied ist in der Regel bei einer Anwendung unwichtig, aber bei einer Bibliothek bedeutet es, dass, wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren. In der Regel ist bei Anwendungen jedes Paket, das im Quellcode importiert wird, eine echte Abhängigkeit, während jedes Paket, das bei der Entwicklung verwendet wird (normalerweise Kommandozeilenwerkzeuge), eine Entwicklerabhängigkeit ist. Installieren Sie echte Abhängigkeiten durch Entfernen des `--save-dev`-Flags.

Sie finden auch eine Anzahl neu erstellter Dateien:

- `node_modules`: Die Abhängigkeitsdateien, die benötigt werden, um Vite auszuführen. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das `node_modules`-Verzeichnis wiederherzustellen. Das stellt sicher, dass, solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich sein wird.

Sie brauchen sich um diese Dateien nicht zu kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten `package-lock.json` im Allgemeinen aufbewahren, da es, wie erwähnt, verwendet wird, um den `node_modules`-Zustand auf verschiedenen Maschinen zu synchronisieren.

### Einrichten unserer Beispiel-App

Jedenfalls weiter mit dem Setup.

In Vite ist die `index.html`-Datei zentral. Sie definiert den Startpunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu bauen. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr die folgenden Inhalte:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>My test page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit zu einer Datei namens `src/main.jsx` schafft, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie ihn jedoch vorerst leer.

> [!NOTE]
> Das [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut ist wichtig. Es sagt dem Browser, das Skript als ES-Modul zu behandeln, was es uns ermöglicht, `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, weil wir im nächsten Artikel React JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es in reguläres JavaScript transformieren, als ob Browser dies tun könnten!

### Spaß mit Vite

Jetzt führen wir unser neu installiertes Vite-Tool aus. Geben Sie in Ihrem Terminal den folgenden Befehl ein:

```bash
npx vite
```

Sie sollten etwa dies in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, die Vorteile des vollständigen JavaScript-Paket-Ökosystems zu nutzen. Zunächst läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber was cool ist, ist, dass wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu aufbaut und den Server automatisch aktualisiert, sodass Sie sofort sehen können, welchen Effekt Ihr Update hatte.

Sie können den Dev-Server jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und ihn mit dem gleichen Befehl erneut starten. Wenn Sie sich entscheiden, ihn am Laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt zu einigen Seiteninhalten. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir werden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket verwenden, eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachpathen Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Kommandozeilenwerkzeug. Dieser Befehl fügt Ihrem `package.json`-File ein neues `"dependencies"`-Objekt mit `plotly.js-dist-min` hinzu.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu vervollständigen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Features zu machen, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können Schlüsselwörter auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere bei der Installation, beim Ausführen usw. zu Leistungsproblemen führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Prüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit der Erfahrung kommt, da Sie Faktoren wie die Wahrscheinlichkeit berücksichtigen müssen, ob das Paket Updates benötigt oder wie viele Menschen es möglicherweise benötigen.

Fügen Sie in der `src/main.jsx`-Datei den folgenden Code hinzu und speichern Sie ihn:

```js
import Plotly from "plotly.js-dist-min";

const root = document.getElementById("root");
Plotly.newPlot(
  root,
  [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16],
    },
  ],
  {
    margin: { t: 0 },
  },
);
```

Gehen Sie zurück zu `http://localhost:5173` und Sie sehen ein Diagramm auf der Seite. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie das Diagramm bei jedem Speichern Ihrer Datei aktualisiert wird.

### Unseren Code für die Produktion vorbereiten

Allerdings ist dieser Code noch nicht für die Produktion bereit. Die meisten Build-Toolsysteme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied ist, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden, in der finalen Seite nicht benötigt werden, sodass sie für die Produktion gestrichen werden, z.B. "Hot Module Replacement", "Live Reloading", und "unkomprimierter und kommentierter Quellcode". Dies sind zwar bei weitem nicht alle, aber einige der häufigen Webentwicklungsfunktionen, die in der Entwicklungsphase sehr hilfreich sind, aber in der Produktion nicht sehr nützlich. In der Produktion werden sie Ihre Seite nur aufblähen.

Beenden Sie nun den laufenden Vite-Dev-Server mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können nun unsere grundlegende Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

Führen Sie den folgenden Befehl aus:

```bash
npx vite build
```

Sie sollten eine Ausgabe wie folgt sehen:

```plain
vite v5.2.13 building for production...
✓ 6 modules transformed.
dist/index.html                    0.32 kB │ gzip:     0.24 kB
dist/assets/index-BlYAJQFz.js  3,723.18 kB │ gzip: 1,167.74 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 4.36s
```

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie hineinschauen, enthält es eine `index.html`, die sehr ähnlich zur ursprünglichen ist, nur dass die `script`-Quelle jetzt durch einen Pfad zum `assets`-Ordner ersetzt ist. Der `assets`-Ordner enthält transformierte JavaScript-Ausgabe, die jetzt minimiert und für die Produktion optimiert ist.

> [!NOTE]
> Möglicherweise machen Sie sich Sorgen über die Warnung, dass es einen Chunk gibt, der zu groß ist. Dies ist zu erwarten, da wir eine Bibliothek laden, die hinter den Kulissen viele Dinge tut (stellen Sie sich vor, Sie müssten den gesamten Code selbst schreiben, um dasselbe Diagramm zu zeichnen). Für den Moment müssen wir uns darüber keine Sorgen machen.

## Eine grobe Übersicht zu Paketmanager-Clients

Dieses Tutorial installierte das Vite-Paket mit npm, aber wie bereits erwähnt, gibt es einige Alternativen. Es lohnt sich zumindest zu wissen, dass sie existieren und eine ungefähre Vorstellung von den gemeinsamen Befehlen über die Tools hinweg zu haben. Sie haben bereits einige in Aktion gesehen, aber schauen wir uns die anderen an.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind vom Kommandozeilenstandpunkt aus ähnlich — tatsächlich strebt pnpm an, vollständige Übereinstimmung über die Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich dadurch, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet und darauf abzielt, den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den Beispielen unten gezeigt wird, kann pnpm ersetzt werden und der Befehl wird funktionieren.

Yarn gilt oft als schneller als npm im Hinblick auf den Installationsprozess (obwohl Ihre Erfahrung variieren kann). Dies ist den Entwicklern wichtig, da beim Warten auf die Installation von Abhängigkeiten (und das Kopieren auf den Computer) eine beträchtliche Zeit verloren gehen kann.

Es ist jedoch wichtig zu beachten, dass der npm-Paketmanager **nicht** notwendig ist, um Pakete aus dem npm-Verzeichnis zu installieren. Pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden und können jedes Paket aus dem npm und anderen Paketregistrierungen installieren.

Lassen Sie uns die häufigsten Aktionen überprüfen, die Sie mit Paketmanagern durchführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sollen nicht im selben Projekt ausgeführt werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und konsistent Befehle von diesem Paketmanager verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dieser Befehl Sie durch eine Reihe von Fragen begleiten, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann ein `package.json` für Sie generieren, das Metainformationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben auch `install` bereits in Aktion gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig wird dieser Befehl die neueste Version von `vite` installieren, aber das können Sie auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste Version 4.x gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dieser Befehl sucht nach den derzeit installierten Abhängigkeiten und aktualisiert sie, wenn ein Update verfügbar ist, innerhalb des im Paket spezifizierten Bereichs.

Der Bereich wird in der Version der Abhängigkeit in Ihrem `package.json` angegeben, etwa `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^` alle Minor- und Patch-Releases nach und einschließlich 5.2.13, bis aber ausschließlich 6.0.0.

Dies wird mithilfe eines Systems namens [semver](https://semver.org/) bestimmt, das in der Dokumentation etwas kompliziert erscheinen mag, aber vereinfacht werden kann, indem man sich nur auf die Zusammenfassungsinformation konzentriert und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie z.B. 2.0.1 die Hauptversion 2 mit Patchversion 1 ist. Eine hervorragende Möglichkeit, Semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig, sich daran zu erinnern, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisiert — um dies zu tun, müssen Sie explizit diese Version installieren.

### Weitere Befehle

Sie können online mehr über die einzelnen Befehle von [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) erfahren. Auch [pnpm](https://pnpm.io/cli/add)-Befehle haben eine Entsprechung mit npm, mit einigen Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehler und deren Ausführung von der Kommandozeile. Zum Beispiel haben wir vorher den Befehl `vite` mit `npx` aufgerufen, um den Vite-Dev-Server zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript ausführen, um unser Projekt im "Entwicklungsmodus" zu starten. Tatsächlich beinhalten wir dies regelmäßig in allen Projekten, da die lokale Entwicklungsumgebung dazu neigt, etwas anders zu laufen als sie es in der Produktion tun würde.

Wenn Sie dies in Ihrem Testprojekt von früher ausprobierten, würde es (wahrscheinlich) behaupten, dass das "Dev-Script fehlt". Dies liegt daran, dass npm, Yarn (und ähnliche) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Aktualisieren Sie es so, dass es so aussieht, und speichern Sie die Datei:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Aktualisieren Sie es so, dass es so aussieht, und speichern Sie die Datei:

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

Wir haben ein benutzerdefiniertes `dev`-Kommando als npm-Skript hinzugefügt.

Versuchen Sie nun, folgendes in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie im `npm-experiment`-Verzeichnis sind:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, den wir bereits gesehen haben.

Beachten Sie, dass das hier definierte Skript nun nicht mehr das `npx`-Präfix benötigt. Das liegt daran, dass npm (und Yarn)-Befehle clever sind, indem sie nach Kommandozeilenwerkzeugen suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie durch konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und finden lässt). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/commands/npm-run/), obwohl in den meisten Fällen Ihre eigenen Skripte einfach funktionieren.

Dieses spezielle mag unnötig aussehen — `npm run dev` sind mehr Zeichen, die getippt werden müssen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in Zukunft mehr Arbeit in das `dev`-Kommando zu integrieren, wie das Setzen von Umgebungsvariablen, das Erzeugen temporärer Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge zur `scripts`-Eigenschaft hinzufügen, die Ihnen helfen, Ihre Arbeit zu erledigen. Zum Beispiel, hier ist, was Vite im Template empfiehlt:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch Paketmanager angelangt. Als nächstes werden wir eine Mustewekzeugkette aufbauen und alles, was wir bisher gelernt haben, in die Praxis umsetzen.

## Siehe auch

- [npm Skript-Referenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
