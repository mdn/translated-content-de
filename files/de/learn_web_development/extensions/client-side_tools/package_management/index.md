---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager im Detail, um zu verstehen, wie wir sie in unseren eigenen Projekten verwenden können – um Projektsystemwerkzeug-Abhängigkeiten zu installieren, sie auf dem neuesten Stand zu halten und mehr.

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
        Verstehen, was Paketmanager und Paket-Repositories sind, warum sie benötigt werden, und die Grundlagen ihrer Verwendung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwareteil, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein spezifisches Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keinen bis vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten enthalten, die Sie nicht explizit installiert haben – Ihre Abhängigkeiten können eigene Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist Code zur Berechnung relativer Daten als menschenlesbaren Text. Sie könnten dies sicherlich selbst programmieren, aber es ist sehr wahrscheinlich, dass jemand anderes dieses Problem bereits gelöst hat – warum Zeit mit der Neuerfindung des Rades verschwenden? Zudem wurde eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet, was sie robuster und browserübergreifend kompatibler als Ihre eigene Lösung macht.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein – wie React oder Vue – oder ein sehr kleines Dienstprogramm wie unsere menschenlesbare Datenbibliothek, oder sie kann ein Befehlszeilen-Tool wie Prettier oder ESLint sein, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten solche Abhängigkeiten einfach über ein [`<script>`](/de/docs/Web/HTML/Element/script)-Element in Ihr Projekt aufgenommen werden, aber das könnte nicht sofort aus der Box funktionieren, und es wird wahrscheinlich modernes Tooling benötigt, um Ihren Code und die Abhängigkeiten zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der im Allgemeinen verwendet wird, um auf eine einzelne Datei auf Ihrem Webserver zu verweisen, die den gesamten JavaScript-Code Ihrer Software enthält – typischerweise so stark komprimiert wie möglich, um die Zeit zu reduzieren, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Tool finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, zu der Sie aktualisieren möchten? Dies ist bei ein oder zwei Abhängigkeiten nicht allzu schmerzhaft, aber in größeren Projekten mit vielen Abhängigkeiten kann dies wirklich herausfordernd werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Reihe weiterer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber losgelöst von npm selbst, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode, um neue Abhängigkeiten zu installieren (auch als "Pakete" bezeichnet), um zu verwalten, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Möglichkeiten, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch könnten Sie möglicherweise keinen Paketmanager benötigen und Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird nahtlos das Installieren und Deinstallieren von Paketen übernehmen. Wenn Sie keinen verwenden würden, müssten Sie manuell:

- Alle richtigen JavaScript-Paketdateien finden.
- Diese überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen haben.
- Sie herunterladen und an den richtigen Standorten in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung zu integrieren (dies wird tendenziell mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, das es wert ist, gelesen und verstanden zu werden).
- Dasselbe für alle Unterabhängigkeiten der Pakete tun, von denen es dutzende oder hunderte geben könnte.
- Alle Dateien erneut entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Front-End-Entwicklung wichtig und verbreitet wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal in Ihrem Projekt installiert werden. Auch wenn es eher mehr Vorteile für die globale Installation gibt, sind die Vorteile der lokalen Installation wichtiger – wie die Portierbarkeit von Code und die Versionssperre.

Zum Beispiel, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Rechner installieren oder später wieder darauf zugreifen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von webpack installiert wird, ist sie möglicherweise nicht kompatibel. Um dies abzumildern, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten wirklich zur Geltung zu bringen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen – wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann können Sie sich bei den lokalen Abhängigkeiten dafür bedanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Eine erfolgreiche und beliebte Alternative ist der Paketmanager [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der zu einem schnelleren Benutzererlebnis führen kann. Es gibt auch eine Reihe anderer aufstrebender Clients, wie [pnpm](https://pnpm.js.org/).

## Paketregistrierungen

Damit ein Paketmanager funktioniert, muss er wissen, woher er Pakete installieren soll, und dies erfolgt in Form eines Paketregisters. Das Register ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und daher installiert werden kann. npm ist nicht nur ein Paketmanager, sondern auch der Name des am häufigsten verwendeten Paketregisters für JavaScript-Pakete. Das npm-Register befindet sich unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paketregister verwalten – Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxys zu dem npm-Register zu erstellen (so dass Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet ebenfalls einen Paketregistrierungsdienst an](https://docs.github.com/en/packages) und es werden wahrscheinlich im Laufe der Zeit mehr Optionen erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie das beste Register für sich ausgewählt haben. Viele Projekte werden npm verwenden, und wir bleiben bei diesem in unseren Beispielen im weiteren Verlauf des Moduls.

## Verwendung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Verwendung eines Paketmanagers und Registers zur Installation eines Befehlszeilen-Dienstprogramms zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um weitere Werkzeuge einzuschließen, und Ihnen zeigen, wie Sie die Seite bereitstellen.

Vite bietet einige [Initialisierungsvorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project), mit allen notwendigen Abhängigkeiten und Konfigurationen, um Sie schnell in einem realen Projekt zu starten. Zur Demonstration werden wir eine von Grund auf neu konfigurieren und die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als npm-Paket

Zuallererst erstellen Sie ein neues Verzeichnis, um unsere experimentelle App darin zu speichern, irgendwo sinnvoll, sodass Sie es wiederfinden. Wir werden es `npm-experiment` nennen, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes lassen Sie uns unsere App als ein npm-Paket initialisieren, das eine Konfigurationsdatei erstellt – `package.json` – die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später erneut erstellen oder das Paket sogar im npm-Register veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln und keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden nun einige Fragen gestellt; npm wird dann eine Standard-`package.json`-Datei basierend auf den Antworten erstellen. Beachten Sie, dass keine davon für unsere Zwecke von Bedeutung sind, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifikation der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer der App. Drücken Sie erneut <kbd>Return</kbd>, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier aus, aber Sie können auch etwas Beliebiges eingeben. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Für uns spielt das keine Rolle, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jeweils diese Felder vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz zur Veröffentlichung des Pakets. Drücken Sie <kbd>Return</kbd>, um vorerst die Standardeinstellung zu akzeptieren.

Drücken Sie <kbd>Return</kbd> noch einmal, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten nun eine Package.json-Datei haben. Öffnen Sie es und es sollte in etwa so aussehen:

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

Wir werden zwei weitere Zeilen zur package.json hinzufügen:

- `"type": "module"`, was dazu führt, dass Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert anstelle der alten CommonJS-Module. Es ist eine allgemein gute Angewohnheit, sich daran zu gewöhnen.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich im npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unter der `"name"` hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Dies ist die Konfigurationsdatei, die Ihr Paket definiert. Das reicht für jetzt, lassen Sie uns weitermachen.

### Installation von Vite

Wir werden zuerst Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist _Alle Dinge_, werfen Sie einen weiteren Blick auf Ihre package.json-Datei. Sie werden sehen, dass npm ein neues Feld, `devDependencies`, hinzugefügt hat:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Dies ist ein Teil der npm-Magie – falls Sie in Zukunft Ihren Code irgendwo anders auf einem anderen Gerät verschieben möchten, können Sie die gleiche Einrichtung wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm schaut sich die Abhängigkeiten an und installiert sie für Sie.

Ein Nachteil ist, dass Vite nur in unserer `npm-experiment`-App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Für eine Anwendung macht dieser Unterschied selten etwas aus, aber für eine Bibliothek bedeutet es, dass, wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren. Normalerweise ist für Anwendungen jedes in Quellcode importierte Paket eine reale Abhängigkeit, während jedes für die Entwicklung verwendete Paket (normalerweise als Befehlszeilen-Tools) eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das Flag `--save-dev` entfernen.

Es werden auch eine Reihe neuer Dateien erstellt:

- `node_modules`: Die Abhängigkeitsdateien, die zum Ausführen von Vite erforderlich sind. npm hat alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperroption, die die genauen Informationen speichert, die benötigt werden, um das Verzeichnis `node_modules` wiederherzustellen. Dies sorgt dafür, dass solange die Sperroption unverändert bleibt, das Verzeichnis `node_modules` auf verschiedenen Rechnern gleich bleibt.

Sie müssen sich um diese Dateien nicht kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber im Allgemeinen sollten Sie `package-lock.json` behalten, weil es zum Synchronisieren des `node_modules`-Zustandes auf verschiedenen Maschinen verwendet wird.

### Einrichten unserer Beispiel-App

Wie dem auch sei, machen wir weiter mit der Einrichtung.

In Vite steht die `index.html`-Datei im Vordergrund und wird zentral verwendet. Sie definiert den Startpunkt Ihrer App und Vite wird sie nutzen, um andere Dateien zu finden, die zum Erstellen Ihrer App benötigt werden. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr folgenden Inhalt:

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

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit von einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie es aber vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Element/script/type) ist wichtig. Es teilt dem Browser mit, das Skript als ES-Modul zu behandeln, was es uns ermöglicht, die `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateiendung ist `.jsx`, da wir im nächsten Artikel die React JSX-Syntax hinzufügen werden. Browser verstehen JSließ; -_nicht_-JS, aber Vite wird dies für uns in reguläres JavaScript transformieren, als ob Browser dies verstehen!

### Viel Spaß mit Vite

Jetzt werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

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

Jetzt sind wir bereit, von dem vollständigen JavaScript-Paket-Ökosystem zu profitieren. Es wird nun ein lokaler Webserver bei `http://localhost:5173` ausgeführt. Sie werden im Moment nichts sehen, aber was cool ist: Wenn Sie Ihre App ändern, wird Vite sie neu kompilieren und den Server automatisch aktualisieren, damit Sie sofort den Effekt Ihrer Änderung sehen können.

Sie können den Entwicklungsserver jederzeit mit <kbd>Strg</kbd> + <kbd>C</kbd> stoppen und ihn mit demselben Befehl wieder starten. Wenn Sie sich entscheiden, ihn weiterhin auszuführen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt zu ein wenig Seiteninhalt. Zum Demonstrationszweck fügen wir der Seite ein Diagramm hinzu. Wir verwenden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket, eine Bibliothek zur Datenvisualisierung. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das Flag `--save-dev` installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Befehlszeilen-Tool. Dieser Befehl fügt Ihrer `package.json`-Datei ein neues `"dependencies"`-Objekt hinzu, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie Ihren eigenen Code schreiben, denken Sie bei der Suche und Installation einer Abhängigkeit an folgende Fragen:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu tun, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie außerdem kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gewartet? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit Erfahrung einhergeht, da Sie Faktoren wie die Wahrscheinlichkeit, dass das Paket Updates benötigt, oder wie viele Menschen es möglicherweise benötigen, berücksichtigen müssen.

In der `src/main.jsx`-Datei fügen Sie den folgenden Code hinzu und speichern ihn:

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

Gehen Sie zurück zu `http://localhost:5173` und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und sehen Sie das Diagramm aktualisiert, jedes Mal, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion aufbauen

Allerdings ist dieser Code nicht bereit für die Produktion. Die meisten Build-Tooling-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied ist, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden, auf der endgültigen Seite nicht benötigt werden und für die Produktion entfernt werden, z.B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Auch wenn weit davon entfernt, vollständig zu sein, sind dies einige der häufigen Webentwicklungsfunktionen, die während der Entwicklungsphase sehr hilfreich sind, aber in der Produktion nicht sehr nutzvoll sind. In der Produktion werden sie Ihre Seite nur aufblähen.

Stoppen Sie jetzt den laufenden Vite-Entwicklungsserver mit <kbd>Strg</kbd> + <kbd>C</kbd>.

Wir können nun unsere minimalistische Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die besser für die Veröffentlichung geeignet sind.

Führen Sie den folgenden Befehl aus:

```bash
npx vite build
```

Sie sollten eine ähnliche Ausgabe sehen:

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie hineinsehen, enthält es eine `index.html`, die der ursprünglichen sehr ähnlich sieht, außer dass die `script`-Quelle nun durch einen Pfad zum `assets`-Ordner ersetzt wird. Der `assets`-Ordner enthält transformiertes JavaScript-Output, das jetzt für die Produktion minifiziert und optimiert ist.

> [!NOTE]
> Sie könnten über die Warnung besorgt sein, dass es einen Chunk gibt, der zu groß ist. Das ist zu erwarten, weil wir eine Bibliothek laden, die viele Dinge hinter den Kulissen macht (stellen Sie sich vor, Sie würden den gesamten Code selbst schreiben, um dasselbe Diagramm zu zeichnen). Für den Moment müssen wir uns darüber keine Sorgen machen.

## Ein grober Leitfaden zu Paketmanager-Clients

In diesem Tutorial haben wir das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es ist es wert, zu wissen, dass diese existieren und eine vage Vorstellung von den gemeinsamen Befehlen der Tools zu haben. Sie haben bereits einige in Aktion gesehen, aber lassen Sie uns die anderen anschauen.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus Sicht der Befehlszeile ähnlich – tatsächlich strebt pnpm vollständige Parität über die von npm angebotenen Argumentoptionen an. Es unterscheidet sich darin, dass es eine andere Methode für das Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet und versucht, den gesamten benötigten Speicherplatz zu reduzieren.

Wo npm in den unten aufgeführten Beispielen angezeigt wird, kann pnpm ausgetauscht und der Befehl funktioniert.

Yarn wird oft als schneller als npm in Bezug auf den Installationsprozess angesehen (obwohl Ihre Ergebnisse variieren können). Dies ist für Entwickler wichtig, da eine erhebliche Menge an Zeit verschwendet werden kann, indem man auf die Installation von Abhängigkeiten wartet (und auf das Kopieren auf den Computer).

Es sei jedoch darauf hingewiesen, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden und jedes Paket aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die üblichen Aktionen überprüfen, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir zeigen sowohl npm- als auch Yarn-Befehle. Sie sind nicht dazu gedacht, in demselben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und die Befehle von diesem Paketmanager konsequent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies Sie auffordern, eine Reihe von Fragen zu Ihrem Projekt (Name, Lizenz, Beschreibung usw.) zu stellen und ein `package.json` für Sie zu erstellen, das Metainformationen zu Ihrem Projekt und seinen Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch schon oben gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können dies auch steuern. Sie können nach `vite@4` verlangen, was Ihnen die neueste 4.x-Version gibt (die ist 4.5.3). Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (was das gleiche bedeutet wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird sich die derzeit installierten Abhängigkeiten anschauen und sie aktualisieren, falls ein Update innerhalb des im Paket angegebenen Bereichs verfügbar ist.

Der Bereich wird in der Version der Abhängigkeit in Ihrem `package.json` angegeben, wie `"vite": "^5.2.13"` – in diesem Fall bedeutet das Dachzeichen `^` alle kleinen und Patch-Releases nach und einschließlich 5.2.13, bis aber nicht einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das in der Dokumentation vielleicht etwas kompliziert aussieht, aber vereinfacht werden kann, indem man nur die Zusammenfassungsinformationen betrachtet und dass eine Version durch `HAUPT.NEBEN.PATCH` dargestellt wird, wie 2.0.1, das eine Hauptversion 2 mit einem Patchversion 1 ist. Eine ausgezeichnete Möglichkeit, semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig, daran zu denken, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisieren wird – um dies zu tun, müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online erfahren. Auch [pnpm](https://pnpm.io/cli/add) Befehle haben Parität mit npm, mit einigen zusätzlichen Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen Ihrer eigenen Befehle und deren Ausführung von der Befehlszeile aus. Zum Beispiel haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. Tatsächlich schließen wir dies regelmäßig in alle Projekte ein, da die lokale Entwicklungseinrichtung dazu neigt, etwas anders zu laufen, als sie in der Produktion laufen würde.

Wenn Sie versucht haben, dies in Ihrem früheren Testprojekt auszuführen, würde es (wahrscheinlich) behaupten, dass das "dev script is missing". Das liegt daran, dass npm, Yarn (und ähnliches) nach einer Eigenschaft namens `dev` in der Eigenschaft `scripts` Ihrer `package.json`-Datei suchen. Lassen Sie uns also einen benutzerdefinierten Kurzbefehl – "dev" – in unserem `package.json` erstellen. Wenn Sie dem Tutorial von früher gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment-Verzeichnis haben. Öffnen Sie es und das `scripts`-Mitglied sollte folgendermaßen aussehen:

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

Versuchen Sie nun, das Folgende in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, den wir zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript nicht mehr das Präfix `npx` benötigt. Dies liegt daran, dass npm (und yarn) Befehle clever genug sind, um nach Befehlszeilentools zu suchen, die lokal zum Projekt installiert sind, bevor sie versuchen, diese durch die herkömmlichen Methoden (wo Ihr Computer normalerweise Software speichert und zugänglich macht) zu finden. Sie können [mehr über die technischen Feinheiten des `run`-Befehls lernen](https://docs.npmjs.com/cli/run-script/), obwohl Ihre eigenen Skripte in den meisten Fällen einwandfrei laufen werden.

Dieser besondere mag unnötig erscheinen – `npm run dev` sind mehr Zeichen, die eingegeben werden müssen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in Zukunft mehr Arbeit zum `dev`-Befehl hinzuzufügen, wie das Setzen von Umgebungsvariablen, das Generieren von temporären Dateien etc., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge zu der `scripts`-Eigenschaft hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Zum Beispiel, hier ist, was Vite in der Vorlage empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Das bringt uns zum Ende unserer Tour durch Paketmanager. Unser nächster Schritt besteht darin, eine Beispiel-Toolchain aufzubauen, um alles, was wir bisher gelernt haben, in die Praxis umzusetzen.

## Siehe auch

- [npm Scripts Referenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
