---
title: Grundlagen des Paketmanagements
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel schauen wir uns Paketmanager im Detail an, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können — um Projektwerkzeug-Abhängigkeiten zu installieren, diese aktuell zu halten und mehr.

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
        Verstehen, was Paketmanager und Paket-Repositorien sind, warum
        sie benötigt werden und die Grundlagen der Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein von Dritten bereitgestelltes Softwarebestandteil, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keinen bis vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten enthalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist Code, der relative Daten als menschenlesbaren Text berechnet. Sie könnten das sicherlich selbst programmieren, aber es besteht eine große Wahrscheinlichkeit, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit verschwenden, das Rad neu zu erfinden? Zudem wird eine zuverlässige Abhängigkeit von Dritten wahrscheinlich in vielen verschiedenen Situationen getestet und ist robuster und browserübergreifend kompatibler als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine vollständige JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Dienstprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann ein Kommandozeilen-Werkzeug wie Prettier oder ESLint sein, das wir in früheren Artikeln besprochen haben.

Ohne moderne Bauwerkzeuge könnten Abhängigkeiten wie diese in Ihrem Projekt mit einem einfachen [`<script>`](/de/docs/Web/HTML/Element/script)-Element eingebunden werden, aber das könnte nicht sofort funktionieren, und Sie benötigen wahrscheinlich einige moderne Werkzeuge, um Ihren Code und die Abhängigkeiten zusammenzufassen, wenn sie im Web veröffentlicht werden. Ein Bündel ist ein Begriff, der allgemein verwendet wird, um eine einzelne Datei auf Ihrem Webserver zu bezeichnen, die den gesamten JavaScript-Code für Ihre Software enthält — typischerweise so weit wie möglich komprimiert, um die Dauer zu reduzieren, die für das Herunterladen und Anzeigen Ihrer Software im Browser Ihrer Besucher benötigt wird.

Außerdem, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist bei ein paar Abhängigkeiten nicht allzu schmerzhaft, aber bei größeren Projekten mit vielen Abhängigkeiten kann es wirklich herausfordernd werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser sicherstellt, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Reihe weiterer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber abgesehen von npm selbst ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode zum Installieren neuer Abhängigkeiten (auch als "Pakete" bezeichnet), verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet die Möglichkeit, eigene Pakete zu veröffentlichen.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird das Installieren und Deinstallieren von Paketen nahtlos abwickeln. Würden Sie keinen verwenden, müssten Sie folgendes manuell erledigen:

- Finden aller korrekten Paket-JavaScript-Dateien.
- Überprüfen, dass diese keine bekannten Sicherheitslücken aufweisen.
- Diese herunterladen und an den richtigen Stellen in Ihrem Projekt platzieren.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung einzubinden (dies wird üblicherweise mittels [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) getan, ein weiteres Thema, das es sich zu lesen und zu verstehen lohnt).
- Das gleiche für alle Unterabhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien erneut entfernen, wenn Sie die Pakete deinstallieren möchten.

Darüber hinaus verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Im Fall von npm (und auf JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Möglichkeiten, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel kurz angesprochen haben, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für eine globale Installation gibt, sind die Vorteile für eine lokale Installation wichtiger — wie Codeportabilität und Versionssperrung.

Wenn Ihr Projekt beispielsweise auf Webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass die Konfiguration immer noch funktioniert, wenn Sie das Projekt auf einem anderen Rechner installieren oder es viel später wieder verwenden. Wenn eine andere Version von Webpack installiert wäre, könnte sie nicht kompatibel sein. Um dies zu entschärfen, werden Abhängigkeiten lokal in einem Projekt installiert.

Um lokale Abhängigkeiten in Aktion zu erleben, müssen Sie nur versuchen, ein vorhandenes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort einsatzbereit sind, können Sie den lokalen Abhängigkeiten dafür danken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Eine erfolgreiche und beliebte Alternative ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mithilfe eines anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch zahlreiche andere aufkommende Clients wie [pnpm](https://pnpm.js.org/).

## Paketregister

Damit ein Paketmanager funktioniert, muss er wissen, wo Pakete installiert werden können, und das geschieht in Form eines Paketregisters. Das Register ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und von dem es installiert werden kann. npm ist nicht nur ein Paketmanager, sondern auch der Name des am häufigsten verwendeten JavaScript-Paketregisters. Das npm-Register befindet sich unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie können Ihr eigenes Paketregister verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) erlauben es Ihnen, Proxies für das npm-Register zu erstellen (damit Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet ebenfalls einen Paketregisterdienst an](https://docs.github.com/en/packages), und es werden wahrscheinlich mehr Optionen im Laufe der Zeit erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie das für Sie am besten geeignete Register gewählt haben. Viele Projekte werden npm nutzen, und wir werden uns in unseren Beispielen im Rest des Moduls daran halten.

## Nutzung des Paketökosystems

Lassen Sie uns ein Beispiel durchgehen, um Sie mit der Nutzung eines Paketmanagers und eines Registers zur Installation eines Kommandozeilenprogramms vertraut zu machen.

Wir werden [Vite](https://vitejs.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Werkzeugkette erweitern, um mehr Werkzeuge zu integrieren und Ihnen zu zeigen, wie Sie die Website bereitstellen.

Vite bietet einige [Startvorlagen](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um Sie schnell in einem realen Projekt zu starten. Zum Demonstrationszweck werden wir eine von Grund auf konfigurieren, wobei wir die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als npm-Paket

Zunächst erstellen Sie ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem sinnvollen Ort, den Sie wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes initialisieren wir unsere App als npm-Paket, das eine Konfigurationsdatei — `package.json` — erstellt, die es uns ermöglicht, unsere Konfigurationseinstellungen zu speichern, falls wir diese Umgebung später wiederherstellen oder sogar das Paket im npm-Register veröffentlichen möchten (obwohl das für unseren Artikel irrelevant ist, da wir eine Anwendung entwickeln, keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein, und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden nun einige Fragen gestellt; npm erstellt dann basierend auf den Antworten eine Standard-`package.json`-Datei. Beachten Sie, dass keine davon für unsere Zwecke relevant sind, da sie nur verwendet werden, wenn Sie Ihr Paket in ein Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um die Vorgabe `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer für die App. Drücken Sie erneut <kbd>Return</kbd>, um die Vorgabe `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen sie hier aus, aber Sie können auch alles eingeben, was Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat keinen Nutzen für uns, drücken Sie also einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: drücken Sie <kbd>Return</kbd>, um jedes dieser Felder vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht wird. Drücken Sie <kbd>Return</kbd>, um vorerst die Standardauswahl zu akzeptieren.

Drücken Sie <kbd>Return</kbd> ein weiteres Mal, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr Verzeichnis `npm-experiment`, und Sie sollten jetzt eine `package.json`-Datei finden. Öffnen Sie sie, und sie sollte etwa so aussehen:

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

Wir werden zwei weitere Zeilen zur `package.json` hinzufügen:

- `"type": "module"`, was Node dazu bringt, alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) zu interpretieren, anstelle der alten CommonJS-Module. Es ist im Allgemeinen eine gute Angewohnheit, diese Einstellung zu verwenden.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich im npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unter der `"name"` Zeile hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Das ist also die Konfigurationsdatei, die Ihr Paket definiert. Das ist für nun ausreichend, also fahren wir fort.

### Installation von Vite

Wir werden zunächst Vite installieren, das Build-Werkzeug für unsere Website. Es ist dafür verantwortlich, unsere HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bündel für den Browser zu packen.

```bash
npm install --save-dev vite
```

Sobald das getan ist _Alle Dinge_, werfen Sie einen weiteren Blick in Ihre `package.json`-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Das ist Teil der Magie von npm — wenn Sie in Zukunft Ihren Code an einen anderen Ort oder auf einen anderen Rechner verschieben, können Sie die gleiche Einrichtung wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm schaut sich die Abhängigkeiten an und installiert diese für Sie.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment` App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied spielt selten eine Rolle für eine Anwendung, aber für eine Bibliothek bedeutet es, dass, wenn andere Ihr Paket installieren, Vite nicht implizit installiert wird. Normalerweise ist in Anwendungen jedes Paket, das im Quellcode importiert wird, eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (normalerweise als Kommandozeilenwerkzeuge), eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das Flag `--save-dev` entfernen.

Sie finden auch eine Reihe neuer Dateien, die erstellt wurden:

- `node_modules`: Die Abhängigkeitsdateien, die benötigt werden, um Vite auszuführen. npm hat alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das Verzeichnis `node_modules` zu reproduzieren. Dies stellt sicher, dass solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich ist.

Diese Dateien müssen Sie nicht weiter beachten, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten grundsätzlich `package-lock.json` beibehalten, weil sie, wie erwähnt, verwendet wird, um den Zustand von `node_modules` auf verschiedenen Maschinen zu synchronisieren.

### Einrichten unserer Beispiel-App

Weiter mit dem Setup.

In Vite ist die Datei `index.html` zentral. Sie definiert den Ausgangspunkt Ihrer App, und Vite wird sie verwenden, um weitere Dateien zu finden, die zum Erstellen Ihrer App benötigt werden. Erstellen Sie eine `index.html`-Datei in Ihrem Verzeichnis `npm-experiment` und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass die `<script>` Elemente eine Abhängigkeit von einer Datei namens `src/main.jsx` erstellen, die den Einstiegspunkt für die JavaScript-Logik der App deklariert. Erstellen Sie den Ordner `src` und erstellen Sie darin die Datei `main.jsx`, lassen Sie sie jedoch vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Element/script/type) ist wichtig. Es sagt dem Browser, das Skript als ES-Modul zu behandeln, was es uns ermöglicht, `import` und `export` Syntax in unserem JavaScript-Code zu verwenden. Die Dateiendung ist `.jsx`, da wir im nächsten Artikel die React JSX Syntax hinzufügen werden. Browser verstehen kein JSX, aber Vite wird es in reguläres JavaScript umwandeln, als ob es Browser verstehen würden!

### Spaß mit Vite haben

Jetzt werden wir unser neu installiertes Vite-Werkzeug ausführen. Führen Sie folgenden Befehl in Ihrem Terminal aus:

```bash
npx vite
```

Sie sollten im Terminal etwa Folgendes sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Nun sind wir bereit, vom gesamten JavaScript-Paketökosystem zu profitieren. Zunächst läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Derzeit werden Sie noch nichts sehen, aber cool ist, dass, wenn Sie Änderungen an Ihrer App vornehmen, Vite diese neu erstellt und den Server automatisch aktualisiert, sodass Sie sofort die Auswirkungen Ihrer Änderungen sehen können.

Sie können den Entwicklungsserver jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und mit dem gleichen Befehl wieder starten. Wenn Sie entscheiden, ihn weiterlaufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Nun zu etwas Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir werden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js), eine Datenvisualisierungsbibliothek, verwenden. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das Flag `--save-dev` installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Kommandozeilenwerkzeug. Dieser Befehl wird ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzufügen, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe abzuschließen. Wenn Sie Ihren eigenen Code schreiben, denken Sie an die folgenden Fragen, wenn Sie eine Abhängigkeit suchen und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu tun, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher finden Sie ein Paket, das genau das tut, was Sie benötigen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleinere Pakete gegenüber größeren, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Prüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren berücksichtigen müssen, wie wahrscheinlich das Paket Updates benötigt oder wie viele Leute es benötigen könnten.

Fügen Sie in die Datei `src/main.jsx` den folgenden Code ein und speichern Sie ihn:

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

Gehen Sie zurück zu `http://localhost:5173` und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie das Diagramm jedes Mal aktualisiert wird, wenn Sie Ihre Datei speichern.

### Das Code für die Produktion bauen

Dieser Code ist jedoch nicht bereit für die Produktion. Die meisten Build-Tooling-Systeme, einschließlich Vite, haben einen „Entwicklungsmodus“ und einen „Produktionsmodus“. Der wichtige Unterschied ist, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden, im endgültigen Site nicht benötigt werden und für die Produktion entfernt werden, z. B. „Hot Module Replacement“, „Live Reloading“ und „unkomprimierter und kommentierter Quellcode“. Diese sind zwar nicht erschöpfend, einige der häufigsten Webentwicklungsfunktionen, die sehr hilfreich in der Entwicklungsphase sind, aber in der Produktion nicht sehr nützlich sind. In der Produktion blähen sie Ihre Site nur auf.

Stoppen Sie jetzt den laufenden Vite-Entwicklungsserver mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können nun unsere rudimentäre Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite wird ein Verzeichnis namens `dist` erstellen. Wenn Sie hineinschauen, enthält es eine `index.html`, die der ursprünglichen sehr ähnlich ist, außer dass die Quelle des `script` jetzt mit einem Pfad zum `assets`-Ordner ersetzt wird. Der `assets`-Ordner enthält die transformierte JavaScript-Ausgabe, die jetzt für die Produktion minimiert und optimiert ist.

> [!NOTE]
> Sie könnten sich über die Warnung sorgen, dass ein Chunk zu groß ist. Dies ist zu erwarten, da wir eine Bibliothek laden, die eine Menge Dinge im Hintergrund macht (stellen Sie sich vor, Sie schreiben den gesamten Code selbst, um dasselbe Diagramm zu zeichnen). Vorerst müssen wir uns darüber keine Sorgen machen.

## Ein grober Leitfaden zu Paketmanager-Clients

In diesem Tutorial haben wir das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es Alternativen. Es lohnt sich zumindest zu wissen, dass sie existieren und eine vage Vorstellung von den gemeinsamen Befehlen über die Werkzeuge zu haben. Sie haben bereits einige in Aktion gesehen, aber lassen Sie uns die anderen ansehen.

Die Liste wird mit der Zeit wachsen, aber zum Zeitpunkt des Schreibens stehen die folgenden Hauptpaketmanager zur Verfügung:

- npm bei [npmjs.org](https://www.npmjs.com/)
- pnpm bei [pnpm.js.org](https://pnpm.js.org/)
- Yarn bei [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind vom Standpunkt der Kommandozeile aus ähnlich — in der Tat zielt pnpm darauf ab, vollständige Parität über die Argumentoptionen zu bieten, die npm bietet. Es unterscheidet sich dadurch, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, um den gesamten benötigten Speicherplatz zu reduzieren.

Wo npm in den Beispielen gezeigt wird, kann pnpm eingetauscht werden und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm im Hinblick auf den Installationsprozess angesehen (obwohl dies variieren kann). Dies ist für Entwickler wichtig, da eine beträchtliche Zeit für das Warten auf die Installation von Abhängigkeiten (und Kopieren auf den Computer) verschwendet werden kann.

Es sei jedoch darauf hingewiesen, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm konsumieren und jedes Paket aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die üblichen Aktionen überprüfen, die Sie mit Paketmanagern durchführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sollen nicht im selben Projekt ausgeführt werden. Sie sollten Ihr Projekt mit entweder npm oder Yarn einrichten und konsequent die Befehle von diesem Paketmanager verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann eine `package.json` für Sie generieren, die Metainformationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben auch `install` bereits kennen gelernt. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig wird dieser Befehl die neueste Version von `vite` installieren, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste 4.x-Version gibt (die 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` ausprobieren, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die aktuell installierten Abhängigkeiten prüfen und sie aktualisieren, wenn ein Update verfügbar ist, innerhalb des Bereichs, der im Paket angegeben ist.

Der Bereich ist in der Version der Abhängigkeit in Ihrer `package.json` angegeben, wie `"vite": "^5.2.13"` — in diesem Fall bedeutet das Dachzeichen `^`, dass alle kleinen und Patch-Releases nach und einschließlich 5.2.13, bis aber nicht einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das in der Dokumentation etwas kompliziert erscheinen mag, aber vereinfacht werden kann, indem man nur die zusammenfassenden Informationen betrachtet und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie 2.0.1, die Hauptversion 2 mit Patchversion 1 ist. Eine ausgezeichnete Möglichkeit, semver-Werte auszuprobieren, ist es, den [semver-Rechner](https://semver.npmjs.com/) zu nutzen.

Es ist wichtig zu beachten, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisieren wird — um dies zu tun, müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online erfahren. Auch [pnpm](https://pnpm.io/cli/add) Befehle werden Parität mit npm haben, mit einigen wenigen Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch die Erstellung eigener Befehle, die von der Kommandozeile aus ausgeführt werden können. Zum Beispiel haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im „Entwicklungsmodus“ ausführen. Tatsächlich fügen wir dies regelmäßig in alle Projekte ein, da die lokale Entwicklungsumgebung dazu neigt, etwas anders zu laufen, als es in Produktion der Fall wäre.

Wenn Sie versuchen würden, dies in Ihrem Testprojekt von früher auszuführen, würde (wahrscheinlich) der "dev-Skript fehlt"-Fehler gemeldet. Dies liegt daran, dass npm, Yarn (und die anderen) nach einer Eigenschaft namens `dev` in der Eigenschaft `scripts` Ihrer `package.json`-Datei suchen. Erstellen wir also einen benutzerdefinierten Kurzbefehlen — "dev" — in unserer `package.json`. Wenn Sie dem vorherigen Tutorial gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem Verzeichnis npm-experiment haben. Öffnen Sie sie, und das `scripts`-Mitglied sollte wie folgt aussehen:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Aktualisieren Sie es so, dass es so aussieht, und speichern Sie die Datei:

```json
"scripts": {
  "dev": "vite"
},
```

Wir haben einen benutzerdefinierten `dev`-Befehl als npm-Skript hinzugefügt.

Versuchen Sie nun, folgendes in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, wie wir ihn zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript das `npx`-Präfix nicht mehr benötigt. Das liegt daran, dass npm (und yarn) Befehle so clever sind, dass sie versuchen, nach Kommandozeilenwerkzeugen zu suchen, die lokal zum Projekt installiert sind, bevor sie versuchen, diese auf konventionelle Weise zu finden (wo Ihr Computer normalerweise Software speichert und auffindbar macht). Sie können [mehr über die technischen Feinheiten des `run`-Befehls lernen](https://docs.npmjs.com/cli/run-script/), obwohl in den meisten Fällen Ihre eigenen Skripte einfach laufen werden.

Dies mag in diesem Fall unnötig erscheinen — `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es erlaubt uns, in Zukunft mehr Arbeiten zum `dev`-Befehl hinzuzufügen, wie z.B. das Einstellen von Umgebungsvariablen, das Generieren temporärer Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge zur Eigenschaft `scripts` hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Zum Beispiel, hier ist, was Vite im Template empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit kommen wir zum Ende unserer Tour durch die Paketmanager. Unser nächster Schritt ist es, eine Beispielwerkzeugkette aufzubauen, bei der wir alles, was wir bisher gelernt haben, in die Praxis umsetzen.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## Siehe auch

- [npm scripts Referenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
