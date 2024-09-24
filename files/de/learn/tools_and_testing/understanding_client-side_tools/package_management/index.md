---
title: Grundlagen des Paketmanagements
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel werden wir Paketmanager genauer betrachten, um zu verstehen, wie wir sie in unseren eigenen Projekten einsetzen können – um Abhängigkeiten von Projektwerkzeugen zu installieren, auf dem neuesten Stand zu halten und vieles mehr.

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
        Verstehen, was Paketmanager und Paket-Repositories sind, warum sie benötigt werden und die Grundlagen ihrer Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwarestück, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein bestimmtes Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keiner bis zu sehr vielen, und Ihre Abhängigkeiten können Unterabhängigkeiten enthalten, die Sie nicht explizit installiert haben – Ihre Abhängigkeiten können eigene Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist ein Code, der relative Daten als menschenlesbaren Text berechnet. Sie könnten dies sicherlich selbst programmieren, aber es besteht eine hohe Wahrscheinlichkeit, dass jemand anderes dieses Problem bereits gelöst hat – warum Zeit verschwenden, das Rad neu zu erfinden? Außerdem wird eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was sie robuster und browserübergreifend kompatibler macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein -Framework sein – wie React oder Vue – oder ein sehr kleines Tool wie unsere menschenlesbare Datum-Bibliothek, oder es kann ein Kommandozeilen-Werkzeug wie Prettier oder ESLint sein, das wir in früheren Artikeln besprochen haben.

Ohne moderne Build-Tools könnten solch Abhängigkeiten in Ihr Projekt mit einem einfachen [`<script>`](/de/docs/Web/HTML/Element/script)-Element integriert werden, aber dies könnte nicht sofort funktionieren und Sie werden wahrscheinlich einige moderne Tools benötigen, um Ihren Code und Ihre Abhängigkeiten zusammenzubündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der allgemein verwendet wird, um auf eine einzelne Datei auf Ihrem Webserver zu verweisen, die den gesamten JavaScript-Code für Ihre Software enthält – in der Regel so weit wie möglich komprimiert, um die Zeit zu verringern, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder wenn eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist nicht allzu schmerzhaft für ein paar Abhängigkeiten, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich schwierig werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Reihe weiterer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber abgesehen von npm selbst, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager stellt eine Methode zur Verfügung, um neue Abhängigkeiten (auch als "Pakete" bezeichnet) zu installieren, verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Ihnen die Möglichkeit, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch könnten Sie möglicherweise keinen Paketmanager benötigen und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird nahtlos die Installation und Deinstallation von Paketen abwickeln. Wenn Sie keinen verwenden, müssten Sie manuell:

- Alle richtigen JavaScript-Dateien des Pakets finden.
- Diese überprüfen, um sicherzustellen, dass sie keine bekannten Sicherheitslücken haben.
- Diese herunterladen und in den richtigen Verzeichnissen in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung einzubinden (dies geschieht in der Regel mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), ein weiteres Thema, das es sich lohnt, zu lesen und zu verstehen).
- Dasselbe für alle Unterabhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder entfernen, wenn Sie die Pakete löschen möchten.

Zusätzlich verwalten Paketmanager doppelte Abhängigkeiten (etwas, das im Frontend-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel kurz angesprochen haben, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für eine globale Installation gibt, sind die Vorteile einer lokalen Installation wichtiger – wie die Portabilität des Codes und das Sperren von Versionen.

Beispielsweise, wenn Ihr Projekt auf Webpack mit einer bestimmten Konfiguration angewiesen war, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Computer installieren oder es viel später erneut aufrufen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von Webpack installiert wurde, könnte sie möglicherweise nicht kompatibel sein. Um dies abzumildern, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten richtig zu nutzen, müssen Sie lediglich versuchen, ein bestehendes Projekt herunterzuladen und auszuführen – wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie den lokalen Abhängigkeiten zu verdanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der ein schnelleres Benutzererlebnis bedeuten kann. Es gibt auch eine Reihe anderer aufstrebender Clients wie [pnpm](https://pnpm.js.org/).

## Paketregister

Damit ein Paketmanager funktioniert, muss er wissen, von wo aus Pakete installiert werden sollen, und das geschieht in Form eines Paketregisters. Das Register ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und somit installiert werden kann. npm ist sowohl ein Paketmanager als auch der Name des am häufigsten verwendeten Paketregisters für JavaScript-Pakete. Das npm-Register befindet sich auf [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paketregister verwalten – Produkte wie [Microsoft Azure](https://azure.microsoft.com/) erlauben es Ihnen, Proxys zum npm-Register zu erstellen (damit Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet auch einen Paketregisterdienst an](https://github.com/features/packages), und es wird wahrscheinlich in Zukunft mehr Optionen geben.

Was wichtig ist, ist, dass Sie sicherstellen, dass Sie das beste Register für sich ausgewählt haben. Viele Projekte werden npm verwenden und wir werden dies in unseren Beispielen im Rest des Moduls verwenden.

## Nutzung des Paketökosystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Verwendung eines Paketmanagers und eines Registers zur Installation eines Kommandozeilen-Tools zu geben.

Wir werden [Vite](https://vitejs.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Werkzeugpalette erweitern, um weitere Tools hinzuzufügen und Ihnen zu zeigen, wie Sie die Website bereitstellen.

Vite bietet einige [Init-Vorlagen](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), mit allen notwendigen Abhängigkeiten und Konfigurationen, um Sie schnell in einem realen Projekt zu starten. Zum Zwecke der Demonstration werden wir eine von Grund auf neu konfigurieren, wobei wir die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als ein npm-Paket

Zuerst einmal, erstellen Sie ein neues Verzeichnis, um unsere experimentelle App darin zu speichern, an einem sinnvollen Ort, den Sie wiederfinden. Wir werden es `npm-experiment` nennen, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Lassen Sie uns als Nächstes unsere App als ein npm-Paket initialisieren, das eine Konfigurationsdatei erstellt – `package.json` – die es uns erlaubt, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später einmal rekonstruieren oder sogar das Paket im npm-Register veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln, nicht eine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden jetzt einige Fragen gestellt bekommen; npm erstellt dann eine standardmäßige `package.json`-Datei basierend auf den Antworten. Beachten Sie, dass keine dieser für unsere Zwecke relevant sind, weil sie nur verwendet werden, wenn Sie Ihr Paket an ein Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name, um die App zu identifizieren. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer für die App. Auch hier drücken Sie einfach <kbd>Return</kbd>, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen sie hier aus, aber Sie können auch etwas beliebiges eingeben. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat für uns keinen Nutzen, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: drücken Sie <kbd>Return</kbd>, um jedes dieser Felder vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht werden soll. Drücken Sie <kbd>Return</kbd>, um vorerst den Standard anzunehmen.

Drücken Sie noch einmal <kbd>Return</kbd>, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten nun eine `package.json`-Datei finden. Öffnen Sie sie und sie sollte etwa so aussehen:

```json
{
  "name": "npm-experiment",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Ihr Name",
  "license": "ISC"
}
```

Wir werden zwei weitere Zeilen zur package.json hinzufügen:

- `"type": "module"`, was Node dazu veranlasst, alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) anstelle der alten CommonJS-Module zu interpretieren. Es ist eine allgemein gute Gewohnheit, sich das anzueignen.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich in das npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unter der `"name"` ein:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Das ist die Konfigurationsdatei, die Ihr Paket definiert. Das ist jetzt in Ordnung, also machen wir weiter.

### Installation von Vite

Wir werden zuerst Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bündel für den Browser.

```bash
npm install --save-dev vite
```

Wenn das erledigt ist, werfen Sie einen weiteren Blick auf Ihre package.json-Datei. Sie werden sehen, dass npm ein neues Feld, `devDependencies`, hinzugefügt hat:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Das ist ein Teil der npm-Magie – wenn Sie in der Zukunft Ihren Code an einen anderen Ort auf einem anderen Computer verschieben, können Sie dasselbe Setup wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm wird die Abhängigkeiten ansehen und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie werden es nicht in einem anderen Verzeichnis ausführen können. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied spielt bei einer Anwendung selten eine Rolle, aber für eine Bibliothek bedeutet es, dass wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren. Normalerweise ist bei Anwendungen jedes Paket, das im Quellcode importiert wird, eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (normalerweise als Kommandozeilen-Tools), eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie finden auch eine Anzahl neuer Dateien erstellt:

- `node_modules`: Die Abhängigkeitsdateien, die für die Ausführung von Vite erforderlich sind. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genaue Information speichert, die benötigt wird, um das `node_modules`-Verzeichnis wiederherzustellen. Dies stellt sicher, dass, solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Computern gleich bleibt.

Diese Dateien brauchen Sie sich nicht zu kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten `package-lock.json` generell behalten, weil es, wie erwähnt, verwendet wird, um den Zustand von `node_modules` auf verschiedenen Computern zu synchronisieren.

### Einrichtung unserer Beispiel-App

Jedenfalls, weiter mit der Einrichtung.

In Vite ist die `index.html`-Datei das zentrale Element. Sie definiert den Ausgangspunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die zum Erstellen Ihrer App benötigt werden. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Meine Testseite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit zu einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie ihn aber vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Element/script/type) ist wichtig. Es weist den Browser an, das Skript als ES-Modul zu behandeln, was es uns ermöglicht, `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, weil wir im nächsten Artikel React JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es in reguläres JavaScript für uns umwandeln, als ob Browser es verstehen würden!

### Spaß mit Vite haben

Jetzt werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npx vite
```

Sie sollten etwas Ähnliches in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, vom gesamten JavaScript-Paketökosystem zu profitieren. Zunächst läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber was cool ist, ist, dass wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu aufbauen und den Server automatisch aktualisieren wird, sodass Sie sofort sehen können, welchen Effekt Ihre Aktualisierung hatte.

Sie können den Entwicklungsserver jederzeit mit <kbd>Strg</kbd> + <kbd>C</kbd> stoppen und ihn wieder mit demselben Befehl starten. Wenn Sie sich entscheiden, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt zu etwas Seiteninhalt. Zur Demonstration fügen wir der Seite ein Diagramm hinzu. Wir werden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js) verwenden, eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, dass wir es ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Kommandozeilen-Tool. Dieser Befehl fügt Ihrem `package.json`-File ein neues `"dependencies"`-Objekt hinzu, das `plotly.js-dist-min` enthält.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe abzuschließen. Wenn Sie Ihren eigenen Code schreiben, denken Sie an folgende Fragen, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Benötige ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu tun oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher finden Sie ein Paket, das genau das tut, was Sie brauchen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren berücksichtigen müssen wie: Wie wahrscheinlich ist es, dass das Paket Updates benötigt, oder wie viele Menschen könnten es benötigen.

Fügen Sie im `src/main.jsx`-File den folgenden Code hinzu und speichern Sie ihn:

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

Allerdings ist dieser Code nicht für die Produktion bereit. Die meisten Build-Tool-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied besteht darin, dass viele der hilfreichen Funktionen, die Sie während der Entwicklung verwenden werden, nicht im endgültigen Site-Code benötigt werden, sodass sie für die Produktion entfernt werden, z. B. "hot module replacement", "live reloading" und "unkomprimierter und kommentierter Quellcode". Obwohl keineswegs erschöpfend, sind dies einige der allgemeinen Webentwicklungs-Features, die im Entwicklungsstadium sehr hilfreich sind, in der Produktion jedoch nicht sehr nützlich sind. In der Produktion werden sie Ihre Site nur vergrößern.

Beenden Sie jetzt den laufenden Vite-Entwicklungsserver mit <kbd>Strg</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere minimalistische Beispiel-Seite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie es sich ansehen, enthält es ein `index.html`, das dem ursprünglichen sehr ähnlich sieht, außer dass die Quelle des `script` jetzt durch einen Pfad zum `assets`-Ordner ersetzt wurde. Der `assets`-Ordner enthält transformierte JavaScript-Ausgaben, die jetzt minimiert und für die Produktion optimiert sind.

> [!NOTE]
> Sie machen sich vielleicht Sorgen über die Warnung, dass es ein zu großes Chunk gibt. Dies ist zu erwarten, weil wir eine Bibliothek laden, die hinter den Kulissen viele Dinge erledigt (stellen Sie sich vor, all den Code selbst zu schreiben, um dasselbe Diagramm zu zeichnen). Für den Moment müssen wir uns darüber keine Sorgen machen.

## Eine grobe Anleitung zu Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es ist wichtig, zumindest zu wissen, dass sie existieren und eine gewisse Vorstellung von den allgemeinen Befehlen der Tools zu haben. Einige haben Sie bereits in Aktion gesehen, aber lassen Sie uns die anderen betrachten.

Die Liste wird mit der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus Sicht der Kommandozeile ähnlich – in der Tat zielt pnpm darauf ab, vollständige Parität über die Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, um den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den Beispielen unten gezeigt wird, kann pnpm ausgetauscht werden und der Befehl wird funktionieren.

Yarn wird oft dafür gehalten, schneller als npm im Hinblick auf den Installationsprozess zu sein (allerdings kann Ihre Erfahrung variieren). Dies ist für Entwickler wichtig, da beim Warten auf die Installation von Abhängigkeiten (und dem Kopieren auf den Computer) eine erhebliche Menge an Zeit verschwendet werden kann.

Es ist jedoch zu beachten, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können das gleiche `package.json`-Format wie npm verwenden und jedes Paket aus dem npm und anderen Paketregistern installieren.

Lassen Sie uns die allgemeinen Aktionen überprüfen, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im gleichen Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und die Befehle dieses Paketmanagers konsistent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird Sie das durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann eine `package.json` für Sie generieren, die Meta-Informationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Installierung von Abhängigkeiten

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch zuvor in Aktion gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste 4.x-Version gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (was das gleiche wie zuvor bedeutet).

### Update von Abhängigkeiten

```bash
npm update
yarn upgrade
```

Dies wird die derzeit installierten Abhängigkeiten überprüfen und sie aktualisieren, wenn ein Update verfügbar ist, innerhalb des im Paket angegebenen Bereichs.

Der Bereich wird in der Version der Abhängigkeit in Ihrer `package.json` angegeben, wie `"vite": "^5.2.13"` – in diesem Fall bedeutet das Caret-Zeichen `^`, dass alle kleineren und Patch-Versionen nach und einschließlich 5.2.13, bis hin zu, aber nicht einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das aus der Dokumentation etwas kompliziert erscheinen mag, aber vereinfacht werden kann, indem man sich nur die Zusammenfassungsinformationen und die Tatsache anschaut, dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie 2.0.1, was Hauptversion 2 mit Patch-Version 1 ist. Ein ausgezeichneter Weg, um semver-Werte auszuprobieren, besteht darin, den [semver-Rechner](https://semver.npmjs.com/) zu verwenden.

Es ist wichtig zu beachten, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisieren wird – dazu müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können online mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) erfahren. Nochmals, [pnpm](https://pnpm.io/cli/add) -Befehle werden Parität mit npm haben, mit einer Handvoll von Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch die Erstellung eigener Befehle und deren Ausführung von der Kommandozeile aus. Beispielsweise, zuvor haben wir den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# oder yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. Tatsächlich fügen wir dies regelmäßig in alle Projekte ein, da die lokale Entwicklungsumgebung in der Regel etwas anders läuft als in der Produktion.

Wenn Sie versuchen würden, dies in Ihrem Testprojekt von früher auszuführen, würde es wahrscheinlich behaupten, dass das "dev-Skript fehlt". Dies liegt daran, dass npm, Yarn (und dergleichen) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Also lassen Sie uns einen benutzerdefinierten Befehl - "dev" - in unserer `package.json` erstellen. Wenn Sie dem Tutorial von früher gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment-Verzeichnis haben. Öffnen Sie sie, und ihr `scripts`-Mitglied sollte so aussehen:

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

Versuchen Sie jetzt, folgendes in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm run dev
```

Dies sollte Vite starten und den gleichen lokalen Entwicklungsserver starten, den wir zuvor gesehen haben.

Beachten Sie, dass das Skript, das wir hier definiert haben, kein `npx`-Präfix mehr benötigt. Dies liegt daran, dass npm (und yarn)-Befehle clever genug sind, um bevorstehende Kommandozeilen-Tools zu finden, die lokal im Projektverzeichnis installiert sind, bevor sie versuchen, sie durch herkömmliche Methoden zu finden (wo Ihr Computer normalerweise Software speichert und zulässt, dass Software gefunden wird). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl in den meisten Fällen Ihre eigenen Skripte einfach gut laufen werden.

Dieses spezielle Beispiel mag unnötig erscheinen – `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in Zukunft mehr Arbeit auf den `dev`-Befehl hinzuzufügen, wie das Setzen von Umgebungsvariablen, das Generieren temporärer Dateien usw., ohne den Befehl zu komplizieren.

Sie können alle möglichen Dinge zur `scripts`-Eigenschaft hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Zum Beispiel, hier ist, was Vite im Template empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit endet unsere Tour durch Paketmanager. Unser nächster Schritt besteht darin, eine Beispiel-Toolchain aufzubauen, um all das in die Praxis umzusetzen, was wir bisher gelernt haben.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## Siehe auch

- [npm-Skriptreferenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json-Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
