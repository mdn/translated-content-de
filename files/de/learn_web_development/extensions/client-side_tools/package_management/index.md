---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 57bc2729e3963907c0b54158ae1a31318a2ebbd1
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel befassen wir uns detailliert mit Paketmanagern, um zu verstehen, wie wir sie in unseren eigenen Projekten verwenden können – um Abhängigkeiten zu Projektwerkzeugen zu installieren, sie auf dem neuesten Stand zu halten und mehr.

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
        sie benötigt werden und die Grundlagen ihrer Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwarebaustein, der wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten enthalten, die Sie nicht ausdrücklich installiert haben – Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist ein Code, der relative Daten als menschenlesbaren Text berechnet. Sie könnten dies sicherlich selbst programmieren, aber die Wahrscheinlichkeit ist hoch, dass jemand anderes dieses Problem bereits gelöst hat – warum Zeit damit verschwenden, das Rad neu zu erfinden? Außerdem wurde eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet, was sie robuster und mit mehr Browsern kompatibel macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine ganze JavaScript-Bibliothek oder ein Framework sein – wie React oder Vue – oder ein sehr kleines Hilfsprogramm wie unsere menschenlesbare Datumsbibliothek, oder es könnte ein Befehlszeilenwerkzeug wie Prettier oder ESLint sein, über das wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese anhand eines einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Elements in Ihr Projekt eingebunden werden, aber das könnte nicht sofort funktionieren und Sie werden wahrscheinlich einige moderne Tools benötigen, um Ihren Code und die Abhängigkeiten zusammen zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der im Allgemeinen verwendet wird, um auf eine einzelne Datei auf Ihrem Webserver zu verweisen, die den gesamten JavaScript-Code für Ihre Software enthält – typischerweise so stark wie möglich komprimiert, um die Zeit zu verringern, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist bei ein paar Abhängigkeiten nicht allzu schmerzhaft, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich herausfordernd werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie viele andere Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber ein Schritt zurück von npm selbst: Ein Paketmanager ist ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode, um neue Abhängigkeiten (auch als "Pakete" bezeichnet) zu installieren, zu verwalten, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet die Möglichkeit, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird nahtlos die Installation und Deinstallation von Paketen abwickeln. Wenn Sie keinen verwenden würden, müssten Sie manuell:

- Alle korrekten JavaScript-Dateien des Pakets finden.
- Diese überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen enthalten.
- Diese herunterladen und an den richtigen Stellen in Ihrem Projekt platzieren.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung einzubinden (dies wird in der Regel mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, über das es sich zu lesen und verstehen lohnt).
- Dasselbe für alle Unterabhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder entfernen, wenn Sie die Pakete wieder loswerden wollen.

Darüber hinaus verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Im Falle von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für die globale Installation gibt, sind die Vorteile der lokalen Installation wichtiger – wie die Portabilität des Codes und die Versionssperre.

Wenn Ihr Projekt beispielsweise auf webpack mit einer bestimmten Konfiguration angewiesen war, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Rechner installieren oder viel später darauf zurückgreifen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von webpack installiert war, könnte sie nicht kompatibel sein. Um dem entgegenzuwirken, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten wirklich zu sehen, versuchen Sie einfach, ein bestehendes Projekt herunterzuladen und auszuführen – wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann danken Sie den lokalen Abhängigkeiten dafür, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufkommender Clients, wie [pnpm](https://pnpm.js.org/).

## Paket-Registrierungsstellen

Damit ein Paketmanager funktioniert, muss er wissen, wo er Pakete installieren kann, und das kommt in Form einer Paket-Registrierungsstelle. Die Registrierungsstelle ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und somit installiert werden kann. npm ist ebenso ein Paketmanager als auch der Name der am häufigsten verwendeten Paket-Registrierungsstelle für JavaScript-Pakete. Das npm-Register existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paket-Registrierungsstelle verwalten – Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxys für das npm-Register zu erstellen (sodass Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet auch einen Paket-Registrierungsdienst](https://docs.github.com/en/packages) an, und es werden wahrscheinlich im Laufe der Zeit weitere Optionen auftauchen.

Wichtig ist, dass Sie sicherstellen, dass Sie die beste Registrierung für Ihre Bedürfnisse gewählt haben. Viele Projekte werden npm verwenden, und wir werden uns in den Beispielen im gesamten restlichen Modul daran halten.

## Nutzung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Sie mit der Verwendung eines Paketmanagers und eines Registers zur Installation eines Befehlszeilenhilfsprogramms vertraut zu machen.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um weitere Werkzeuge einzuschließen und Ihnen zu zeigen, wie Sie die Seite bereitstellen.

Vite bietet einige [Startvorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um schnell mit einem echten Projekt zu beginnen. Zur Demonstration werden wir eine von Grund auf konfigurieren und die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Die App als npm-Paket einrichten

Erstellen Sie zunächst ein neues Verzeichnis, um unsere experimentelle App darin zu speichern, an einem Ort, den Sie später leicht wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes initialisieren wir unsere App als npm-Paket, was eine Konfigurationsdatei – `package.json` – erstellt, die es uns erlaubt, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später wiederherstellen oder sogar das Paket in das npm-Register veröffentlichen möchten (obwohl es für unseren Artikel nicht relevant ist, weil wir eine Anwendung und keine wiederverwendbare Bibliothek entwickeln).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Nun werden Ihnen einige Fragen gestellt; npm wird dann eine Standard-`package.json`-Datei basierend auf den Antworten erstellen. Beachten Sie, dass keine dieser Fragen für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket in ein Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifikation der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer der App. Wiederum drücken Sie <kbd>Return</kbd>, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir werden sie hier weglassen, aber Sie können auch alles eingeben, was Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Sie hat für uns keine Bedeutung, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um diese zunächst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht werden soll. Drücken Sie <kbd>Return</kbd>, um den Standard für den Moment zu akzeptieren.

Drücken Sie noch einmal <kbd>Return</kbd>, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr Verzeichnis `npm-experiment` und Sie sollten jetzt eine `package.json`-Datei finden. Öffnen Sie sie und sie sollte ungefähr so aussehen:

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

Wir werden zwei weitere Zeilen zu `package.json` hinzufügen:

- `"type": "module"`, was bewirkt, dass Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert anstelle der alten CommonJS-Module. Es ist eine im Allgemeinen gute Gewohnheit.
- `"private": true`, wodurch Sie daran gehindert werden, Ihr Paket versehentlich in das npm-Register zu veröffentlichen.

Fügen Sie diese Zeilen direkt unter dem `"name"` hinzu:

```json
{
  "name": "npm-experiment",
  "type": "module",
  "private": true
  // …
}
```

Das ist die Konfigurationsdatei, die Ihr Paket definiert. Das ist gut für den Moment, also lassen Sie uns weitermachen.

> [!NOTE]
> [Die package.json-Datei](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine praktische Einführung in die Verwendung von `package.json`-Dateien.

### Vite installieren

Wir werden zunächst Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist, werfen Sie noch einmal einen Blick auf Ihre `package.json`-Datei. Sie werden sehen, dass npm ein neues Feld `devDependencies` hinzugefügt hat:

```json
{
  "devDependencies": {
    "vite": "^5.2.13"
  }
}
```

Dies ist Teil der npm-Zauberei – wenn Sie in der Zukunft Ihren Code an einen anderen Speicherort, auf einen anderen Rechner verschieben, können Sie die gleiche Einrichtung wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm wird die Abhängigkeiten prüfen und für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied spielt für eine Anwendung selten eine Rolle, aber für eine Bibliothek bedeutet dies, dass, wenn andere Ihr Paket installieren, Vite nicht implizit mitinstalliert wird. In der Regel ist für Anwendungen jedes Paket, das im Quellcode importiert wird, eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (in der Regel als Befehlszeilen-Tools), eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie die `--save-dev`-Flagge entfernen.

Sie werden feststellen, dass auch eine Reihe neuer Dateien erstellt wurden:

- `node_modules`: Die erforderlichen Abhängigkeitsdateien zum Ausführen von Vite. npm hat alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das `node_modules`-Verzeichnis wiederherzustellen. Dies stellt sicher, dass das `node_modules`-Verzeichnis über verschiedene Maschinen hinweg gleich bleibt, solange die Sperrdatei unverändert bleibt.

Sie müssen sich über diese Dateien keine Gedanken machen, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber im Allgemeinen sollten Sie `package-lock.json` behalten, da es, wie erwähnt, verwendet wird, um den Zustand von `node_modules` über verschiedene Maschinen zu synchronisieren.

### Unsere Beispiel-App einrichten

Wie auch immer, weiter mit der Einrichtung.

In Vite ist die `index.html`-Datei zentral. Sie definiert den Startpunkt Ihrer App, und Vite wird diese Datei verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu bauen. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr folgenden Inhalt:

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

Beachten Sie, dass die `<script>`-Elemente eine Abhängigkeit von einer Datei namens `src/main.jsx` erstellen, die den Einstiegspunkt der JavaScript-Logik für die App erklärt. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie ihn aber vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type) ist wichtig. Es teilt dem Browser mit, dass das Skript als ES-Modul behandelt werden soll, was es uns ermöglicht, `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, weil wir im nächsten Artikel React-XML-JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es in reguläres JavaScript transformieren, als ob Browser es tun würden!

### Vite ausprobieren

Nun werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten etwas Ähnliches wie dieses in Ihrem Terminal gedruckt sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, vom vollständigen JavaScript-Paketökosystem zu profitieren. Zu Beginn läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber was cool ist, wenn Sie Änderungen an Ihrer App vornehmen, wird Vite sie neu bauen und den Server automatisch aktualisieren, sodass Sie sofort sehen können, welchen Effekt das Update hatte.

Sie könnenden Entwicklungsserver jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und mit dem gleichen Befehl erneut starten. Wenn Sie sich entscheiden, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Nun zum Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir werden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js), eine Datenvisualisierungsbibliothek, verwenden. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, dass wir ohne das `--save-dev`-Flag installieren. Wie zuvor erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden und nicht nur als Befehlszeilen-Tool. Dieser Befehl fügt ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzu, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu machen, oder ist es einfach genug, dass ich es selbst schreiben kann?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher finden Sie ein Paket, das genau das tut, was Sie brauchen. Sie können Schlüsselwörter auf npm oder Google durchsuchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen führen können, wenn sie installiert, ausgeführt usw. werden.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Prüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist, und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit der Erfahrung kommt, weil Sie Faktoren berücksichtigen müssen, wie wahrscheinlich das Paket Updates benötigt, oder wie viele Menschen es möglicherweise benötigen.

In der Datei `src/main.jsx` fügen Sie den folgenden Code hinzu und speichern ihn:

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

Rufen Sie die URL `http://localhost:5173` wieder auf und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie das Diagramm jedes Mal aktualisiert wird, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion vorbereiten

Dieser Code ist jedoch nicht bereit für die Produktion. Die meisten Build-Tooling-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied besteht darin, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden werden, in der endgültigen Site nicht benötigt werden, so dass sie für die Produktion ausgenommen werden, wie z.B. "hot module replacement", "live reloading" und "unkommentierter Quellcode". Diese sind nur einige der häufigen Webentwicklungsmerkmale, die im Entwicklungsstadium sehr hilfreich sind, aber in der Produktion nicht sehr nützlich sind. Im Produktionstadium werden sie Ihre Seite nur unnötig aufblähen.

Nun stoppen wir den laufenden Vite-Entwicklungsserver mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere minimalistische Beispiel-Site für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie hineinschauen, enthält es eine `index.html`, die der ursprünglichen sehr ähnlich aussieht, außer dass die `script`-Quelle jetzt durch einen Pfad zum `assets`-Ordner ersetzt wurde. Der `assets`-Ordner enthält das transformierte JavaScript-Ausgabe, das jetzt minimiert und für die Produktion optimiert ist.

> [!NOTE]
> Sie könnten sich über die Warnung, dass eine der Chunks zu groß ist, Sorgen machen. Dies ist zu erwarten, weil wir eine Bibliothek laden, die im Hintergrund eine Menge Dinge tut (stellen Sie sich vor, Sie müssten den gesamten Code selbst schreiben, um das gleiche Diagramm zu zeichnen). Für jetzt brauchen wir uns darüber keine Gedanken zu machen.

## Ein grober Leitfaden zu Paketmanager-Clients

In diesem Tutorial haben wir das Vite-Paket mit npm installiert, aber wie bereits früher erwähnt, gibt es einige Alternativen. Es lohnt sich, zumindest zu wissen, dass sie existieren und eine grobe Vorstellung von den gemeinsamen Befehlen über die Tools hinweg zu haben. Sie haben einige bereits in Aktion gesehen, aber lassen Sie uns die anderen anschauen.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus kommandotechnischer Sicht ähnlich – in der Tat zielt pnpm darauf ab, die volle Übereinstimmung über die Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich dadurch, dass eine andere Methode für das Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet wird, um den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den Beispielen unten gezeigt wird, kann pnpm ausgetauscht werden, und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm im Hinblick auf den Installationsprozess angesehen (obwohl Ihre Erfahrung variieren kann). Dies ist für Entwickler wichtig, weil eine erhebliche Menge an Zeit mit dem Warten auf die Installation von Abhängigkeiten (und Kopieren auf den Computer) verloren gehen kann.

Es ist jedoch wichtig zu beachten, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können das gleiche `package.json`-Format wie npm verwenden und jedes Paket aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die häufigen Aktionen überprüfen, die Sie mit Paket-Managern durchführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sollen nicht im gleichen Projekt ausgeführt werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und die Befehle von diesem Paketmanager konsistent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies einen durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann eine `package.json` für Sie generieren, die Metainformationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Installieren von Abhängigkeiten

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch bereits oben in Aktion gesehen. Dies fügt direkt das `vite`-Paket dem Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzu, zusammen mit `vite`'s eigenen Abhängigkeiten.

Standardmäßig wird dieser Befehl die neueste Version von `vite` installieren, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste Version von 4.x gibt (was 4.5.3 ist). Oder Sie können `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (gleiche Bedeutung wie oben).

### Aktualisieren von Abhängigkeiten

```bash
npm update
yarn upgrade
```

Dies wird die derzeit installierten Abhängigkeiten überprüfen und sie aktualisieren, wenn ein Update innerhalb des im Paket angegebenen Bereichs verfügbar ist.

Der Bereich wird in der Version der Abhängigkeit in Ihrer `package.json` angegeben, wie `"vite": "^5.2.13"` – in diesem Fall bedeutet das Caret-Zeichen `^` alle nachfolgenden Neben- und Patchversionen ab/bis einschließlich 5.2.13, aber ausschließlich 6.0.0.

Dies wird unter Verwendung eines Systems namens [semver](https://semver.org/) bestimmt, das von der Dokumentation aus gesehen etwas kompliziert erscheinen mag. Es kann jedoch vereinfacht werden, indem man nur die Zusammenfassungsinformationen betrachtet und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie 2.0.1, was Hauptversion 2 mit Patchversion 1 ist. Ein hervorragender Weg, um semver-Werte auszuprobieren, ist der [semver calculator](https://semver.npmjs.com/).

Es ist wichtig zu bedenken, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisiert – dafür müssen Sie diese Version speziell installieren.

### Mehr Befehle

Sie können online mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) erfahren. Wiederum werden [pnpm](https://pnpm.io/cli/add)-Befehle in Einklang mit npm sein, mit einer Handvoll Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung von der Befehlszeile. Zum Beispiel haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript starten, um unser Projekt im "Entwicklungsmodus" zu starten. Tatsächlich schließen wir dies regelmäßig in alle Projekte ein, da die lokale Entwicklungsumgebung tendenziell ein wenig anders läuft, als es in der Produktion laufen würde.

Wenn Sie versuchen, dies in Ihrem Testprojekt von früher auszuführen, würde es wahrscheinlich behaupten, dass das "dev script fehlt". Dies liegt daran, dass npm, Yarn (und dergleichen) nach einer Eigenschaft namens `dev` im `scripts`-Eigentum Ihrer `package.json`-Datei suchen. Erstellen wir also einen benutzerdefinierten Kurzbefehlt – "dev" – in unserem `package.json`. Wenn Sie dem Tutorial von oben gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem `npm-experiment`-Verzeichnis haben. Öffnen Sie es, und sein `scripts`-Mitglied sollte so aussehen:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Aktualisieren Sie es, sodass es so aussieht, und speichern Sie die Datei:

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

Wir haben einen benutzerdefinierten Befehl `dev` als npm-Skript hinzugefügt.

Versuchen Sie jetzt, den folgenden Befehl in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie im Verzeichnis `npm-experiment` sind:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, den wir zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript den `npx`-Präfix nicht mehr benötigt. Dies liegt daran, dass npm (und yarn) Befehle klug sind, indem sie zuerst nach Befehlszeilentools suchen, die lokal zum Projekt installiert sind, bevor sie versuchen, sie durch konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und erlaubt, dass sie gefunden wird). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/commands/npm-run/), obwohl in den meisten Fällen Ihre eigenen Skripte einfach einwandfrei laufen werden.

Dieser spezielle mag unnötig erscheinen – `npm run dev` sind mehr Zeichen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, der `dev`-Anweisung in Zukunft mehr Arbeit hinzuzufügen, wie z.B. das Setzen von Umgebungsvariablen, das Generieren von temporären Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge zur `scripts`-Eigenschaft hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Zum Beispiel gibt Vite in der Vorlage folgendes an:

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

Damit sind wir am Ende unserer Entdeckungsreise durch die Paketmanager angelangt. Unser nächster Schritt ist es, ein Beispiel-Toolchain aufzubauen und alles, was wir bisher gelernt haben, in die Praxis umzusetzen.

## Siehe auch

- [npm-Skriptreferenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json-Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
