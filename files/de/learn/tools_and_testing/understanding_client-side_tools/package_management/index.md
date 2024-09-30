---
title: Grundlagen des Paketmanagements
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager im Detail, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können — um Projekttool-Abhängigkeiten zu installieren, aktuell zu halten und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was Paketmanager und Paket-Repositories sind, warum
        sie benötigt werden und die Grundlagen, wie man sie benutzt.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwarebaustein, der wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten enthalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt möglicherweise benötigt, ist ein Code zur Berechnung relativer Datumsangaben als menschenlesbaren Text. Sie könnten dies sicherlich selbst programmieren, aber es ist sehr wahrscheinlich, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit damit verschwenden, das Rad neu zu erfinden? Darüber hinaus ist eine zuverlässige Drittanbieterabhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden, was sie robuster und browserübergreifend kompatibler macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine komplette JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Hilfsprogramm wie unsere menschenlesbare Datumsbibliothek oder es kann ein Befehlszeilentool wie Prettier oder ESLint sein, das wir in früheren Artikeln besprochen haben.

Ohne moderne Build-Tools könnten solche Abhängigkeiten in Ihr Projekt über ein einfaches [`<script>`](/de/docs/Web/HTML/Element/script) Element eingebunden werden, aber dies könnte nicht direkt aus der Box funktionieren und Sie werden wahrscheinlich einige moderne Werkzeuge benötigen, um Ihren Code und Ihre Abhängigkeiten zusammenzubinden, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der im Allgemeinen verwendet wird, um eine einzelne Datei auf Ihrem Webserver zu bezeichnen, die den gesamten JavaScript-Code Ihrer Software enthält — typischerweise so stark komprimiert wie möglich, um die Zeit zu verringern, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist bei ein paar Abhängigkeiten nicht allzu schmerzvoll, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich herausfordernd werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser sicherstellt, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Vielzahl anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits getroffen, aber wenn wir von npm selbst zurücktreten, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager stellt eine Methode zur Installation neuer Abhängigkeiten (auch als "Pakete" bezeichnet), verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert sind, und bietet Ihnen die Möglichkeit, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch könnten Sie keinen Paketmanager benötigen und Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird das nahtlose Installieren und Deinstallieren von Paketen übernehmen. Wenn Sie keinen verwenden würden, müssten Sie manuell Folgendes abwickeln:

- Finden aller korrekten Paket-JavaScript-Dateien.
- Überprüfen, um sicherzustellen, dass sie keine bekannten Sicherheitslücken haben.
- Herunterladen und an den korrekten Stellen in Ihr Projekt einfügen.
- Schreiben des Codes, um das/die Paket(e) in Ihrer Anwendung einzubinden (dies wird in der Regel mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, über das es sich lohnt, sich einzulesen und es zu verstehen).
- Dasselbe für alle Unterabhängigkeiten der Pakete zu tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder zu entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus behandeln Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel kurz angesprochen haben, können Abhängigkeiten global oder lokal für Ihr Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für die globale Installation gibt, sind die Vorteile der lokalen Installation wichtiger — wie Portabilität des Codes und Versionssperrung.

Zum Beispiel, wenn Ihr Projekt auf Webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Rechner installieren oder viel später zurückkehren, die Konfiguration immer noch funktioniert. Wenn eine andere Version von Webpack installiert wäre, könnte sie nicht kompatibel sein. Um dem entgegenzuwirken, werden Abhängigkeiten lokal in ein Projekt installiert.

Um lokale Abhängigkeiten wirklich zu erleben, müssen Sie einfach versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann können Sie den lokalen Abhängigkeiten dafür danken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Eine erfolgreiche und beliebte Alternative ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufkommender Clients, wie [pnpm](https://pnpm.js.org/).

## Paketregister

Damit ein Paketmanager funktioniert, muss er wissen, woher die Pakete installiert werden sollen, und dies erfolgt in Form eines Paketregisters. Das Register ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und somit installiert werden kann. npm ist sowohl ein Paketmanager als auch der Name des am häufigsten verwendeten Paketregisters für JavaScript-Pakete. Das npm-Register existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paketregister verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) erlauben es Ihnen, Proxys zum npm-Register zu erstellen (so können Sie bestimmte Pakete überschreiben oder sperren), [GitHub bietet ebenfalls einen Paketregisterdienst](https://github.com/features/packages) und es werden wahrscheinlich mehr Optionen im Laufe der Zeit erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie das beste Register für Sie wählen. Viele Projekte werden npm verwenden, und wir werden in unseren Beispielen im gesamten restlichen Modul dabei bleiben.

## Nutzung des Paketökosystems

Lassen Sie uns ein Beispiel durchgehen, um den Einstieg in die Nutzung eines Paketmanagers und Registers zur Installation eines Befehlszeilenprogramms zu erleichtern.

Wir werden [Vite](https://vitejs.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um mehr Tools einzuschließen und Ihnen zu zeigen, wie Sie die Website bereitstellen können.

Vite bietet einige [Init-Vorlagen](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), mit allen notwendigen Abhängigkeiten und Konfigurationen, um schnell in einem realen Projekt anzufangen. Als Demonstration werden wir eine von Grund auf neu konfigurieren und die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als npm-Paket

Erstellen Sie zunächst ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem sinnvollen Ort, den Sie wiederfinden werden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als Nächstes initialisieren wir unsere App als npm-Paket, was eine Konfigurationsdatei — `package.json` — erstellt, die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später wiederherstellen oder sogar das Paket im npm-Register veröffentlichen wollen (obwohl das für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln und keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm init
```

Jetzt werden Sie einige Fragen gestellt; npm erstellt dann basierend auf den Antworten eine Standard-`package.json`-Datei. Beachten Sie, dass keine davon für unsere Zwecke relevant sind, da sie nur dann verwendet werden, wenn Sie Ihr Paket in ein Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um die Standardeinstellung `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer für die App. Drücken Sie erneut <kbd>Return</kbd>, um die Standardeinstellung `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier weg, aber Sie können auch etwas eingeben, das Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat für uns keine Verwendung, drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jedes davon vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht werden soll. Drücken Sie <kbd>Return</kbd>, um vorerst die Standardeinstellung zu akzeptieren.

Drücken Sie <kbd>Return</kbd> noch einmal, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten nun feststellen, dass Sie eine `package.json`-Datei haben. Öffnen Sie sie und sie sollte etwa so aussehen:

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

Wir fügen der package.json zwei weitere Zeilen hinzu:

- `"type": "module"`, was Node dazu veranlasst, alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) zu interpretieren, anstatt die alten CommonJS-Module. Es ist eine allgemein gute Gewohnheit, sich darauf einzulassen.
- `"private": true`, das verhindert, dass Sie Ihr Paket versehentlich im npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unter dem `"name"` hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Dies ist also die Konfigurationsdatei, die Ihr Paket definiert. Das ist für jetzt in Ordnung, also gehen wir weiter.

### Vite installieren

Zunächst installieren wir Vite, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser.

```bash
npm install --save-dev vite
```

Sobald das alles abgeschlossen ist, werfen Sie einen weiteren Blick auf Ihre `package.json`-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Das ist ein Teil der npm-Magie — falls Sie in Zukunft Ihren Code an einen anderen Ort verlegen, auf einem anderen Computer, können Sie das gleiche Setup wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm wird die Abhängigkeiten betrachten und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie werden es in einem anderen Verzeichnis nicht ausführen können. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied ist selten relevant für eine Anwendung, aber für eine Bibliothek bedeutet es, dass, wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren werden. Normalerweise ist für Anwendungen jedes in den Quellcode importierte Paket eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (normalerweise als Befehlszeilen-Tools), eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie werden auch feststellen, dass eine Reihe neuer Dateien erstellt wurden:

- `node_modules`: Die Abhängigkeitsdateien, die erforderlich sind, um Vite auszuführen. npm hat alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die erforderlich sind, um das `node_modules`-Verzeichnis zu reproduzieren. Dies stellt sicher, dass, solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich sein wird.

Sie müssen sich um diese Dateien keine Sorgen machen, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten `package-lock.json` im Allgemeinen behalten, denn wie erwähnt wird es verwendet, um den Zustand von `node_modules` auf verschiedenen Maschinen zu synchronisieren.

### Einrichten unserer Beispiel-App

Wie auch immer, weiter mit dem Setup.

In Vite steht die `index.html`-Datei im Mittelpunkt. Sie definiert den Ausgangspunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu bauen. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass die `<script>`-Elemente eine Abhängigkeit von einer Datei namens `src/main.jsx` erzeugen, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, aber lassen Sie es vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Element/script/type) ist wichtig. Es teilt dem Browser mit, dass das Skript als ES-Modul behandelt werden soll, was uns die Verwendung von `import` und `export`-Syntax in unserem JavaScript-Code ermöglicht. Die Dateierweiterung ist `.jsx`, da wir im nächsten Artikel React JSX-Syntax hinzufügen werden. Browser verstehen kein JSX, aber Vite wird es in reguläres JavaScript für uns umwandeln, als ob Browser es täten!

### Spaß mit Vite

Nun werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten etwas Ähnliches wie dieses in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, vom gesamten JavaScript-Paketökosystem zu profitieren. Zum Anfang läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden jetzt zwar noch nichts sehen, aber das Coole ist, dass, wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu aufbauen und den Server automatisch aktualisieren wird, sodass Sie sofort den Effekt Ihrer Aktualisierung sehen können.

Sie können den Entwicklungsserver jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und ihn mit demselben Befehl erneut starten. Wenn Sie sich entscheiden, ihn weiterlaufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt zu etwas Seiteninhalt. Lassen Sie uns als Demonstration ein Diagramm zur Seite hinzufügen. Wir verwenden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket, eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, dass wir ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Befehlszeilentool. Dieser Befehl wird ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzufügen, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Benötige ich überhaupt eine Abhängigkeit? Ist es möglich, das mit eingebauten Funktionen zu tun, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher finden Sie ein Paket, das genau das tut, was Sie benötigen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Performance-Problemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele Wochenend-Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren wie die Wahrscheinlichkeit berücksichtigen müssen, dass das Paket Aktualisierungen benötigt, oder wie viele Leute es möglicherweise benötigen.

Fügen Sie in der Datei `src/main.jsx` den folgenden Code hinzu und speichern Sie ihn:

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

Gehen Sie zurück zu `http://localhost:5173` und Sie sehen ein Diagramm auf der Seite. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie das Diagramm jedes Mal, wenn Sie Ihre Datei speichern, aktualisiert wird.

### Unseren Code für die Produktion vorbereiten

Dieser Code ist jedoch nicht bereit für die Produktion. Die meisten Build-Tool-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied besteht darin, dass viele der hilfreichen Features, die Sie in der Entwicklung verwenden, im endgültigen Standort nicht benötigt werden und daher für die Produktion entfernt werden, z. B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Diese weit entfernt von erschöpfend aufgezählten Punkte sind einige der häufigsten Webentwicklungsfunktionen, die beim Entwicklungsprozess sehr hilfereich sind, aber in der Produktion nicht sehr nützlich sind. In der Produktion werden sie Ihre Seite nur aufblasen.

Stoppen Sie jetzt den laufenden Vite Entwicklungsserver mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können jetzt unser einfaches Beispielprojekt für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite wird ein Verzeichnis namens `dist` erstellen. Wenn Sie einen Blick darauf werfen, enthält es eine `index.html`, die der ursprünglichen sehr ähnlich sieht, mit der Ausnahme, dass die `script`-Quelle jetzt durch einen Pfad zum `assets`-Ordner ersetzt wurde. Der `assets`-Ordner enthält transformierte JavaScript-Ausgaben, die jetzt minifiziert und für die Produktion optimiert sind.

> [!NOTE]
> Möglicherweise machen Sie sich Sorgen über die Warnung, dass es ein zu großes Chunk gibt. Das ist zu erwarten, da wir eine Bibliothek laden, die eine Menge Dinge im Hintergrund macht (stellen Sie sich vor, all den Code selbst zu schreiben, um dasselbe Diagramm zu zeichnen). Im Moment müssen wir uns darum keine Sorgen machen.

## Eine grobe Anleitung zu Paketmanager-Clients

In diesem Tutorial haben wir das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es lohnt sich zumindest, zu wissen, dass sie existieren und eine ungefähre Vorstellung von den gängigen Befehlen über die Tools hinweg zu haben. Sie haben bereits einige in Aktion gesehen, aber schauen wir uns die anderen an.

Die Liste wird mit der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind von der Befehlszeilenperspektive ähnlich — tatsächlich strebt pnpm an, die gesamte Parität der Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, um den insgesamt benötigten Speicherplatz zu reduzieren.

Wo in den nachstehenden Beispielen npm gezeigt wird, kann pnpm ausgetauscht werden und der Befehl wird funktionieren.

Yarn gilt oft als schneller als npm in Bezug auf den Installationsprozess (obwohl Ihre Erfahrung variieren kann). Das ist für Entwickler wichtig, weil bei der Installation der Abhängigkeiten (und deren Kopie auf den Computer) eine beträchtliche Menge an Zeit verschwendet werden kann.

Es ist jedoch wichtig hervorzuheben, dass der npm Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verarbeiten und jedes Paket aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die üblichen Aktionen, die Sie mit Paketmanagern ausführen möchten, überprüfen.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im gleichen Projekt ausgeführt zu werden. Sie sollten Ihr Projekt mit entweder npm oder Yarn einrichten und die Befehle aus diesem Paketmanager konsistent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird es Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung und so weiter) und dann eine `package.json` für Sie generieren, die Metainformationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben auch `install` oben in Aktion gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig wird dieser Befehl die neueste Version von `vite` installieren, aber dies können Sie auch steuern. Sie können zum Beispiel nach `vite@4` fragen, was Ihnen die neueste 4.x-Version gibt (die 4.5.3 ist). Oder Sie könnten versuchen, `vite@^4.0.0` zu verwenden, was bedeutet, dass die neueste Version nach oder einschließlich 4.0.0 (die gleiche Bedeutung wie oben) gilt.

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die derzeit installierten Abhängigkeiten betrachten und sie aktualisieren, wenn ein Update innerhalb des im Paket angegebenen Bereichs verfügbar ist.

Der Bereich wird in der Version der Abhängigkeit in Ihrem `package.json` angegeben, wie `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^`, dass alle kleineren und Patch-Versionen nach und einschließlich 5.2.13 bis zu, aber nicht einschließlich 6.0.0 enthalten sind.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das in der Dokumentation zwar etwas kompliziert aussehen mag, aber vereinfacht werden kann, indem nur die Zusammenfassungsinformationen betrachtet werden und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie zum Beispiel 2.0.1, was die Hauptversion 2 mit Patchversion 1 ist. Ein hervorragender Weg, semver-Werte auszuprobieren, ist die Verwendung des [semver-Rechners](https://semver.npmjs.com/).

Es ist wichtig zu bedenken, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisieren wird — um dies zu tun, müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online erfahren. Auch die [pnpm](https://pnpm.io/cli/add) Befehle werden Parität mit npm haben, mit einigen wenigen Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung von der Befehlszeile aus. Zum Beispiel haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. Tatsächlich fügen wir dies regelmäßig in alle Projekte ein, da das lokale Entwicklungssetup tendenziell etwas anders läuft als das in der Produktion.

Wenn Sie versuchen würden, dies in Ihrem Testprojekt von früher auszuführen, würde es (höchstwahrscheinlich) behaupten, dass das "dev-Skript fehlt". Das liegt daran, dass npm, Yarn (und dergleichen) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Lassen Sie uns also einen benutzerdefinierten Kurzbefehl — "dev" — in unserer `package.json` erstellen. Wenn Sie das Tutorial von früher befolgt haben, sollten Sie eine `package.json`-Datei im Inneren Ihres `npm-experiment`-Verzeichnisses haben. Öffnen Sie sie, und ihr `scripts`-Element sollte so aussehen:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Aktualisieren Sie sie so, dass sie so aussieht, und speichern Sie die Datei:

```json
"scripts": {
  "dev": "vite"
},
```

Wir haben einen benutzerdefinierten `dev`-Befehl als npm-Skript hinzugefügt.

Versuchen Sie nun, den folgenden Befehl in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, den wir zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript nicht mehr das `npx`-Präfix benötigt. Das liegt daran, dass npm- (und yarn-) Befehle clever sind, da sie zuerst nach Befehlszeilentools suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie durch konventionelle Methoden zu finden (wo Ihr Computer Software normalerweise speichert und es erlaubt, gefunden zu werden). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl in den meisten Fällen Ihre eigenen Skripte einfach so laufen werden.

Dieses besondere Skript mag unnötig erscheinen — `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es erlaubt uns, in Zukunft mehr Arbeit in den `dev`-Befehl einzubauen, wie das Setzen von Umgebungsvariablen, das Generieren temporärer Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge in die `scripts`-Eigenschaft einfügen, die Ihnen bei Ihrer Arbeit helfen. Hier ist zum Beispiel, was Vite in der Vorlage empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch die Paketmanager angelangt. Unser nächster Schritt ist es, eine Beispiel-Toolchain aufzubauen und das umzusetzen, was wir bisher gelernt haben.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## Siehe auch

- [npm-Skriptreferenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
