---
title: Grundlagen des Paketmanagements
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager etwas genauer, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können – um Abhängigkeiten von Projektwerkzeugen zu installieren, sie auf dem neuesten Stand zu halten und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den zentralen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a>, und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was Paketmanager und Paket-Repositories sind, warum
        sie benötigt werden, und die Grundlagen ihrer Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwarestück, das wahrscheinlich von jemand anderem geschrieben wurde und im Idealfall ein einzelnes Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keinen bis zu vielen, und Ihre Abhängigkeiten können Unterabhängigkeiten enthalten, die Sie nicht ausdrücklich installiert haben – Ihre Abhängigkeiten können eigene Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt möglicherweise benötigt, ist etwas Code, um relative Daten als menschenlesbaren Text zu berechnen. Sicherlich könnten Sie dies selbst programmieren, aber es besteht eine hohe Wahrscheinlichkeit, dass jemand anderes dieses Problem bereits gelöst hat – warum Zeit damit verschwenden, das Rad neu zu erfinden? Darüber hinaus wird eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, wodurch sie robuster und browserübergreifend kompatibler ist als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine komplette JavaScript-Bibliothek oder ein Framework sein – wie React oder Vue – oder ein sehr kleines Dienstprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann sich um ein Kommandozeilenwerkzeug wie Prettier oder ESLint handeln, das wir in früheren Artikeln behandelt haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese in Ihrem Projekt einfach mit einem [`<script>`](/de/docs/Web/HTML/Element/script)-Element aufgenommen werden, aber das könnte nicht direkt funktionieren und es wird wahrscheinlich moderne Tools benötigen, um Ihren Code und die Abhängigkeiten zusammen zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der allgemein verwendet wird, um auf eine einzelne Datei auf Ihrem Webserver zu verweisen, die den gesamten JavaScript-Code für Ihre Software enthält – typischerweise so weit wie möglich komprimiert, um die Zeit zu reduzieren, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Zusätzlich, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Das ist bei ein paar Abhängigkeiten nicht allzu schmerzhaft, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich herausfordernd werden, den Überblick zu behalten. Es ist sinnvoller, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Vielzahl anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben bereits [npm](https://www.npmjs.com/) kennengelernt, aber wenn wir von npm selbst zurücktreten, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode zur Installation neuer Abhängigkeiten (auch "Pakete" genannt), verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Ihnen die Möglichkeit, eigene Pakete zu veröffentlichen.

Theoretisch könnten Sie vielleicht keinen Paketmanager benötigen und Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird das Installieren und Deinstallieren von Paketen nahtlos handhaben. Wenn Sie keinen verwenden würden, müssten Sie manuell:

- Alle korrekten Paket-JavaScript-Dateien finden.
- Diese überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen haben.
- Sie herunterladen und an den richtigen Stellen in Ihrem Projekt ablegen.
- Den Code schreiben, um die Pakete in Ihre Anwendung einzuschließen (dies wird üblicherweise mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, das es wert ist, gelesen und verstanden zu werden).
- Dasselbe für alle Unterabhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien erneut entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus handhaben Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und üblich wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es im Allgemeinen mehr Vorteile gibt, global zu installieren, sind die Vorteile einer lokalen Installation wichtiger – wie Codeportabilität und Versionserfassung.

Zum Beispiel, wenn Ihr Projekt auf Webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass die Konfiguration auch dann noch funktioniert, wenn Sie das Projekt auf einem anderen Computer installieren oder später darauf zurückkommen. Wenn eine andere Version von Webpack installiert wurde, ist sie möglicherweise nicht kompatibel. Um dem entgegenzuwirken, werden Abhängigkeiten lokal in einem Projekt installiert.

Um die lokalen Abhängigkeiten wirklich zur Geltung zu bringen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten direkt aus der Box funktionieren, dann müssen Sie den lokalen Abhängigkeiten dafür danken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, was eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe weiterer aufkommender Clients wie [pnpm](https://pnpm.js.org/).

## Paketregistrierungen

Damit ein Paketmanager funktioniert, muss er wissen, woher er Pakete installieren soll, und das geschieht in Form eines Paketregistrierungsdienstes. Das Registry ist ein zentraler Ort, an dem ein Paket veröffentlicht und somit installiert werden kann. npm ist nicht nur ein Paketmanager, sondern auch der Name des am häufigsten verwendeten Paketregistrierungsdienstes für JavaScript-Pakete. Das npm-Registry befindet sich unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paketregistrierung verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) erlauben es Ihnen, Proxys zum npm-Registry zu erstellen (sodass Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet ebenfalls einen Paketregistrierungsdienst](https://github.com/features/packages), und es werden wahrscheinlich im Laufe der Zeit weitere Optionen erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie das für Sie beste Registry ausgewählt haben. Viele Projekte verwenden npm, und wir werden uns in unseren Beispielen im Rest des Moduls daran halten.

## Nutzung des Paketökosystems

Lassen Sie uns ein Beispiel durchgehen, um Sie mit der Verwendung eines Paketmanagers und Registrierungsdienstes für die Installation eines Kommandozeilenwerkzeugs vertraut zu machen.

Wir werden [Vite](https://vitejs.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um mehr Werkzeuge einzuschließen, und Ihnen zeigen, wie Sie die Seite bereitstellen.

Vite bietet einige [Initialisierungsvorlagen](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um schnell mit einem realen Projekt zu beginnen. Zu Demonstrationszwecken werden wir eine von Grund auf konfigurieren und die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als npm-Paket

Erstellen Sie zunächst ein neues Verzeichnis, um unsere experimentelle App zu speichern, irgendwo sinnvoll, sodass Sie es wiederfinden können. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes initialisieren wir unsere App als npm-Paket, was eine Konfigurationsdatei – `package.json` – erstellt, die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später erneut erstellen oder sogar das Paket im npm-Registry veröffentlichen möchten (obwohl das für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln, keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Jetzt werden Sie einige Fragen gestellt; npm erstellt dann eine Standard-`package.json`-Datei basierend auf den Antworten. Beachten Sie, dass keine dieser Fragen für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket an ein Registry veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name, um die App zu identifizieren. Drücken Sie einfach <kbd>Return</kbd>, um den Standardwert `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer für die App. Drücken Sie erneut <kbd>Return</kbd>, um den Standardwert `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen dies hier aus, aber Sie können auch eingeben, was Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die beim Importieren Ihres Pakets ausgeführt wird. Es hat für uns keinen Nutzen, drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository`, und `keywords`: Drücken Sie <kbd>Return</kbd>, um diese vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht wird. Drücken Sie <kbd>Return</kbd>, um den Standardwert zu akzeptieren.

Drücken Sie noch einmal <kbd>Return</kbd>, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten jetzt feststellen, dass Sie eine `package.json`-Datei haben. Öffnen Sie sie und sie sollte ungefähr so aussehen:

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

- `"type": "module"`, was dazu führt, dass Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert, anstelle der alten CommonJS-Module. Es ist eine allgemein gute Gewohnheit, dies zu tun.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich in das npm-Registry veröffentlichen.

Fügen Sie diese Zeilen direkt unter der `"name"` hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Dies ist die Konfigurationsdatei, die Ihr Paket definiert. Das ist jetzt gut so, also machen wir weiter.

### Installation von Vite

Wir werden zuerst Vite installieren, das Build-Tool für unsere Website. Es ist dafür verantwortlich, unsere HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser zu packen.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist _Alle Dinge_, werfen Sie einen weiteren Blick auf Ihre `package.json`-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Dies ist Teil der Magie von npm – wenn Sie in Zukunft Ihren Code an einen anderen Ort oder auf einen anderen Computer verschieben, können Sie dieselbe Einrichtung wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm schaut sich die Abhängigkeiten an und installiert sie für Sie.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied spielt selten eine Rolle für eine Anwendung, bedeutet aber für eine Bibliothek, dass, wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren. Normalerweise ist jede in Quellcode importierte Abhängigkeit eine echte Abhängigkeit, während jede Abhängigkeit, die für die Entwicklung verwendet wird (in der Regel als Kommandozeilenwerkzeuge) eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev` Flag entfernen.

Sie werden auch feststellen, dass eine Anzahl neuer Dateien erstellt wurde:

- `node_modules`: Die Abhängigkeitsdateien, die zum Ausführen von Vite erforderlich sind. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die exakten Informationen speichert, die zur Reproduktion des `node_modules`-Verzeichnisses benötigt werden. Dies stellt sicher, dass das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich bleibt, solange die Sperrdatei unverändert bleibt.

Sie müssen sich keine Sorgen um diese Dateien machen, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten `package-lock.json` generell behalten, da sie, wie erwähnt, verwendet wird, um den Zustand von `node_modules` auf verschiedenen Maschinen zu synchronisieren.

### Einrichtung unserer Beispiel-App

Wie auch immer, weiter mit der Einrichtung.

In Vite steht die Datei `index.html` im Mittelpunkt. Sie definiert den Startpunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die erforderlich sind, um Ihre App zu erstellen. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass die `<script>`-Elemente eine Abhängigkeit von einer Datei namens `src/main.jsx` schaffen, die den Einstiegspunkt der JavaScript-Logik für die App erklärt. Erstellen Sie den Ordner `src` und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie es aber vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Element/script/type) ist wichtig. Es teilt dem Browser mit, dass das Skript als ES-Modul behandelt werden soll, was es uns ermöglicht, `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, da wir im nächsten Artikel Reakt-JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es in reguläres JavaScript umwandeln, als ob Browser es täten!

### Spaß mit Vite

Nun werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten so etwas in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, vom vollen JavaScript-Paketökosystem zu profitieren. Zu Beginn läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber das Coole ist, dass, wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu aufbaut und den Server automatisch aktualisiert, sodass Sie sofort sehen können, was Ihre Aktualisierung bewirkt hat.

Sie können den Dev-Server jederzeit mit <kbd>Strg</kbd> + <kbd>C</kbd> stoppen und ihn erneut mit demselben Befehl starten. Wenn Sie sich entschließen, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Nun zu etwas Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir verwenden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js), eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt dies daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Kommandozeilenwerkzeug. Dieser Befehl fügt ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzu, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie ihren eigenen Code schreiben, denken Sie an folgende Fragen, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu tun, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da Letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Prüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist, und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit Erfahrung kommt, weil Sie Faktoren wie die Wahrscheinlichkeit, dass das Paket Updates benötigt, oder wie viele Leute es möglicherweise benötigen, berücksichtigen müssen.

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

Gehen Sie zurück zu `http://localhost:5173` und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und sehen Sie das Diagramm jedes Mal aktualisiert, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion bereitstellen

Diese Code ist jedoch noch nicht bereit für die Produktion. Die meisten Build-Tool-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied ist, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung nutzen, auf der finalen Seite nicht benötigt werden und für die Produktion entfernt werden, z. B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Diese sind weit von einer vollständigen Liste entfernt, aber sie sind einige der häufig genutzten Webentwicklungsfunktionen, die im Entwicklungsstadium sehr hilfreich sind, aber in der Produktion nicht sehr nützlich sind. In der Produktion würden sie Ihre Seite nur aufblähen.

Stoppen Sie den laufenden Vite-Dev-Server nun mit <kbd>Strg</kbd> + <kbd>C</kbd>.

Wir können nun unser einfaches Beispielprojekt für eine imaginäre Bereitstellung vorbereiten. Vite bietet ein zusätzliches `build`-Kommando, um Dateien zu erzeugen, die für die Veröffentlichung geeignet sind.

Führen Sie den folgenden Befehl aus:

```bash
npx vite build
```

Sie sollten eine Ausgabe wie diese sehen:

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie es öffnen, enthält es eine `index.html`, die der im Stammverzeichnis sehr ähnlich aussieht, außer dass der `script`-Quellcode jetzt durch einen Pfad zum `assets`-Ordner ersetzt wurde. Der `assets`-Ordner enthält die umgewandelte JavaScript-Ausgabe, die jetzt für die Produktion minifiziert und optimiert ist.

> [!NOTE]
> Sie könnten wegen der Warnung besorgt sein, dass es einen Chunk gibt, der zu groß ist. Dies ist zu erwarten, da wir eine Bibliothek laden, die hinter den Kulissen viel macht (stellen Sie sich vor, Sie schreiben den gesamten Code selbst, um dasselbe Diagramm zu zeichnen). Für jetzt müssen wir uns keine Sorgen darüber machen.

## Ein grober Leitfaden zu Paketmanager-Clients

In diesem Tutorial haben wir das Vite-Paket mit npm installiert, aber wie bereits erwähnt gibt es einige Alternativen. Es lohnt sich zumindest zu wissen, dass sie existieren und eine ungefähre Vorstellung von den gemeinsamen Befehlen über die Werkzeuge zu haben. Sie haben bereits einige in Aktion gesehen, aber schauen wir uns die anderen an.

Die Liste wächst mit der Zeit, aber zum Zeitpunkt des Schreibens sind folgende Hauptpaketmanager verfügbar:

- npm bei [npmjs.org](https://www.npmjs.com/)
- pnpm bei [pnpm.js.org](https://pnpm.js.org/)
- Yarn bei [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus Sicht der Kommandozeile ähnlich – in der Tat zielt pnpm darauf ab, eine vollständige Parität über die Argumentoptionen, die npm bietet, zu erreichen. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, mit dem Ziel, den insgesamt benötigten Speicherplatz zu verringern.

Wo npm in den Beispielen gezeigt wird, kann pnpm eingesetzt werden und der Befehl wird funktionieren.

Yarn wird oft gedacht, schneller als npm zu sein, was den Installationsprozess betrifft (obwohl Ihre Erfahrung variieren kann). Dies ist für Entwickler wichtig, weil eine erhebliche Menge an Zeit verschwendet werden kann, während darauf gewartet wird, dass Abhängigkeiten installiert werden (und auf den Computer kopiert werden).

Es ist jedoch anzumerken, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Registry zu installieren. pnpm und Yarn können das gleiche `package.json`-Format wie npm konsumieren und können jedes Paket aus dem npm- oder anderen Paketregistrierungen installieren.

Schauen wir uns die häufigen Aktionen an, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir demonstrieren sowohl npm- als auch Yarn-Befehle. Sie sind nicht gedacht, im gleichen Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder mit Yarn einrichten und die Befehle von diesem Paketmanager konsistent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, fordert dies auf und führt Sie durch eine Reihe von Fragen zur Beschreibung Ihres Projekts (Name, Lizenz, Beschreibung usw.) und generiert eine `package.json` für Sie, die Metadaten zu Ihrem Projekt und seinen Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben auch `install` bereits in Aktion gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in ein Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit `vites` eigenen Abhängigkeiten.

Standardmäßig wird dieser Befehl die neueste Version von `vite` installieren, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste Version 4.x gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die derzeit installierten Abhängigkeiten betrachten und sie aktualisieren, wenn ein Update verfügbar ist, innerhalb des Bereichs, der im Paket spezifiziert ist.

Der Bereich wird in der Version der Abhängigkeit in Ihrer `package.json` spezifiziert, wie z. B. `"vite": "^5.2.13"` – in diesem Fall bedeutet das Caret-Zeichen `^` alle Minor- und Patch-Versionen nach und einschließlich 5.2.13 bis einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das in der Dokumentation etwas kompliziert aussehen könnte, aber vereinfacht werden kann, indem man sich nur die Zusammenfassungsinformationen ansieht und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie 2.0.1, das die Major-Version 2 mit der Patch-Version 1 ist. Ein ausgezeichneter Weg, um semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig zu bedenken, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisieren wird – dazu müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können online mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) erfahren. Wiederum werden [pnpm](https://pnpm.io/cli/add) Befehle Parität mit npm haben, mit einer Handvoll Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung über die Kommandozeile. Zum Beispiel haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Dev-Server zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript ausführen, um unser Projekt im "Entwicklungsmodus" zu starten. Tatsächlich schließen wir dies regelmäßig in alle Projekte ein, da das lokale Entwicklungssetup dazu neigt, etwas anders zu laufen als es in der Produktion wäre.

Wenn Sie dies in Ihrem Testprojekt von früher versuchen, würde es wahrscheinlich behaupten, dass das "Dev-Skript fehlt". Das liegt daran, dass npm, Yarn (und ähnliche) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Erstellen wir also einen benutzerdefinierten Kurzbefehle – "dev" – in unserer `package.json`. Wenn Sie das Tutorial von früher befolgt haben, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment Verzeichnis haben. Öffnen Sie sie und ihre `scripts`-Member sollte so aussehen:

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

Versuchen Sie nun, das Folgende in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, den wir vorher gesehen haben.

Beachten Sie, dass das Skript, das wir hier definiert haben, keinen `npx`-Präfix mehr benötigt. Das liegt daran, dass npm (und yarn) Befehle clever sind, indem sie nach Kommandozeilenwerkzeugen suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie über konventionelle Methoden zu finden (wo Ihr Computer Software normalerweise speichert und finden lässt). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl in den meisten Fällen Ihre eigenen Skripte problemlos ausgeführt werden.

Dieses spezielle Skript mag unnötig aussehen – `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in Zukunft mehr Arbeit zum `dev`-Befehl hinzuzufügen, wie das Setzen von Umgebungsvariablen, das Erzeugen temporärer Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge zur `scripts`-Eigenschaft hinzufügen, die Ihnen helfen, Ihre Arbeit zu erledigen. Zum Beispiel, hier ist, was Vite im Template empfohlen wird:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit kommen wir zum Ende unserer Tour durch Paketmanager. Unser nächster Schritt ist es, eine Beispiel-Toolchain aufzubauen und all das, was wir bisher gelernt haben, in die Praxis umzusetzen.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## Siehe auch

- [npm Skriptreferenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
