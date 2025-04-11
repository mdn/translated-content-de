---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel werden wir Paketmanager detailliert betrachten, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können — um Projekttool-Abhängigkeiten zu installieren, aktuell zu halten und mehr.

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
        Verstehen, was Paketmanager und Paket-Repositories sind, warum sie benötigt werden und die Grundlagen ihrer Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein fremdes Software-Stück, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein spezifisches Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten könnten Sub-Abhängigkeiten beinhalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist ein Code, um relative Daten als menschenlesbaren Text zu berechnen. Sicherlich könnten Sie dies selbst codieren, aber es gibt eine große Wahrscheinlichkeit, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit verschwenden, um das Rad neu zu erfinden? Darüber hinaus wurde eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet, was sie robuster und plattformübergreifend kompatibler macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Hilfsprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann ein Befehlszeilenwerkzeug wie Prettier oder ESLint sein, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten solche Abhängigkeiten in Ihr Projekt über ein einfaches [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element eingefügt werden, aber dies könnte nicht direkt einsatzbereit sein und Sie werden wahrscheinlich einige moderne Werkzeuge benötigen, um Ihren Code und Abhängigkeiten zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der im Allgemeinen verwendet wird, um eine einzelne Datei auf Ihrem Webserver zu bezeichnen, die den gesamten JavaScript für Ihre Software enthält — typischerweise so stark wie möglich komprimiert, um die Download-Zeit zu minimieren und die Software schnell im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Tool finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist für ein paar Abhängigkeiten nicht allzu schmerzhaft, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich schwierig werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Vielzahl anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir sind [npm](https://www.npmjs.com/) bereits begegnet, aber wenn wir einen Schritt zurück von npm selbst machen, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode, um neue Abhängigkeiten (auch "Pakete" genannt) zu installieren, zu verwalten, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Ihnen die Möglichkeit, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch könnten Sie auf einen Paketmanager verzichten und Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager übernimmt nahtlos die Installation und Deinstallation von Paketen. Würden Sie keinen verwenden, müssten Sie:

- Alle richtigen JavaScript-Dateien des Pakets finden.
- Diese überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen aufweisen.
- Diese herunterladen und in den richtigen Verzeichnissen in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung einzubinden (dies erfolgt in der Regel mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), ein weiteres Thema, das es wert ist, gelesen und verstanden zu werden).
- Das Gleiche für alle Sub-Abhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien erneut entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angedeutet haben, können Abhängigkeiten global oder lokal in Ihrem Projekt installiert werden. Auch wenn es tendenziell mehr Vorteile für die globale Installation gibt, sind die Vorteile für die lokale Installation wichtiger — wie Code-Portabilität und Version-Locking.

Wenn Ihr Projekt beispielsweise von webpack mit einer bestimmten Konfiguration abhängt, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Computer installieren oder viel später darauf zurückkommen, die Konfiguration noch funktioniert. Wenn eine andere Version von webpack installiert wäre, könnte sie eventuell nicht kompatibel sein. Um dies zu vermeiden, werden Abhängigkeiten lokal für ein Projekt installiert.

Um lokale Abhängigkeiten zur Geltung zu bringen, müssen Sie lediglich versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie den lokalen Abhängigkeiten zu verdanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, was zu einer schnelleren Benutzererfahrung führen kann. Es gibt auch eine Reihe neuer Clients, wie [pnpm](https://pnpm.js.org/).

## Paket-Registries

Damit ein Paketmanager funktioniert, muss er wissen, wo er Pakete installieren soll, und dies erfolgt in Form eines Paket-Registries. Die Registry ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und von dem es installiert werden kann. npm ist nicht nur ein Paketmanager, sondern auch der Name der am häufigsten verwendeten Paket-Registry für JavaScript-Pakete. Die npm-Registry existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paket-Registry verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxies zur npm-Registry zu erstellen (sodass Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet ebenfalls einen Paket-Registry-Service an](https://docs.github.com/en/packages), und es werden wahrscheinlich im Laufe der Zeit mehr Optionen auftauchen.

Wichtig ist, dass Sie sicherstellen, dass Sie die beste Registry für sich ausgewählt haben. Viele Projekte werden npm verwenden, und wir werden in unseren Beispielen durchgehend bei diesem bleiben.

## Verwendung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Verwendung eines Paketmanagers und einer Registry zur Installation eines Befehlszeilen-Dienstprogramms zu erleichtern.

Wir verwenden [Vite](https://vite.dev/), um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain um weitere Tools erweitern und Ihnen zeigen, wie Sie die Seite bereitstellen.

Vite bietet einige [Initialisierungsvorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um schnell in einem realen Projekt loszulegen. Zur Demonstration werden wir eine von Grund auf konfigurieren, und die Verwendung der [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz.

### Einrichtung der App als npm-Paket

Zunächst einmal erstellen Sie ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem Ort, den Sie wiederfinden können. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als Nächstes initialisieren wir unsere App als npm-Paket, das eine Konfigurationsdatei — `package.json` — erstellt, die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später erneut erstellen oder sogar das Paket im npm-Registry veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln und keine wiederverwendbare Bibliothek).

Geben Sie folgenden Befehl ein und stellen Sie sicher, dass Sie sich im `npm-experiment` Verzeichnis befinden:

```bash
npm init
```

Sie werden nun einige Fragen gestellt; npm erstellt dann eine Standard-`package.json`-Datei basierend auf den Antworten. Beachten Sie, dass keine dieser für unsere Zwecke relevant sind, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Registry veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversion für die App. Auch hier einfach <kbd>Return</kbd> drücken, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier weg, aber Sie können auch irgendetwas eingeben. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat für uns keinen Nutzen, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jedes davon vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht werden soll. Drücken Sie <kbd>Return</kbd>, um für jetzt den Standard zu akzeptieren.

Drücken Sie <kbd>Return</kbd> noch einmal, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten nun eine `package.json`-Datei finden. Öffnen Sie sie und sie sollte ungefähr so aussehen:

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

- `"type": "module"`, wodurch Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) und nicht als alte CommonJS-Module interpretiert. Es ist eine im Allgemeinen gute Gewohnheit, sich daran zu gewöhnen.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich in die npm-Registry veröffentlichen.

Fügen Sie diese Zeilen direkt unterhalb von `"name"` hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Dies ist also die Konfigurationsdatei, die Ihr Paket definiert. Das ist fürs Erste gut, also lassen Sie uns weitermachen.

### Installation von Vite

Wir werden zunächst Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS-, und JavaScript-Dateien zu einem optimierten Bündel für den Browser.

```bash
npm install --save-dev vite
```

Nachdem das erledigt ist _All The Things_, werfen Sie einen weiteren Blick auf Ihre `package.json`-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat: `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Das ist Teil der npm-Magie — wenn Sie in Zukunft Ihren Code an einen anderen Ort oder auf einen anderen Computer verschieben, können Sie das gleiche Setup durch Ausführen des Befehls `npm install` reproduzieren, und npm wird die Abhängigkeiten überprüfen und für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie werden es nicht in einem anderen Verzeichnis ausführen können. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied spielt selten eine Rolle für Anwendungen, aber für eine Bibliothek bedeutet es, dass, wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren werden. Normalerweise ist für Anwendungen jedes in den Quellcode importierte Paket eine echte Abhängigkeit, während jedes für die Entwicklung verwendete Paket (in der Regel als Befehlszeilen-Tools) eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie finden auch eine Reihe neuer Dateien erstellt:

- `node_modules`: Die Abhängigkeitsdateien, die benötigt werden, um Vite auszuführen. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das `node_modules`-Verzeichnis zu reproduzieren. Dies stellt sicher, dass solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich ist.

Sie müssen sich um diese Dateien keine Sorgen machen, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten im Allgemeinen `package-lock.json` behalten, da es, wie erwähnt, verwendet wird, um den `node_modules`-Zustand auf verschiedenen Maschinen zu synchronisieren.

### Einrichtung unserer Beispiel-App

Wie auch immer, weiter mit der Einrichtung.

In Vite ist die `index.html`-Datei das Herzstück. Sie definiert den Ausgangspunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu bauen. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr folgenden Inhalt:

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

Beachten Sie, dass die `<script>`-Elemente eine Abhängigkeit von einer Datei namens `src/main.jsx` erzeugen, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den Ordner `src` und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie es aber vorerst leer.

> [!NOTE]
> Das [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut ist wichtig. Es signalisiert dem Browser, das Skript als ein ES-Modul zu behandeln, was es uns ermöglicht, `import` und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateiendung ist `.jsx`, weil wir im nächsten Artikel React JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es in reguläres JavaScript umwandeln, als ob Browser es verstehen würden!

### Spaß mit Vite haben

Nun werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten etwas in dieser Art in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Nun sind wir bereit, vom vollständigen JavaScript-Paket-Ökosystem zu profitieren. Zu Beginn läuft nun ein lokaler Webserver unter `http://localhost:5173`. Sie werden jetzt nichts sehen, aber das Coole ist, dass, wenn Sie Änderungen an Ihrer App vornehmen, Vite diese automatisch neu erstellt und den Server aktualisiert, sodass Sie sofort die Auswirkungen Ihrer Aktualisierung sehen können.

Sie können den Entwicklungsserver jederzeit mit <kbd>Strg</kbd> + <kbd>C</kbd> stoppen und ihn mit dem gleichen Befehl erneut starten. Wenn Sie sich entscheiden, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Nun zu etwas Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir verwenden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket, eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie zuvor erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden und nicht nur als Befehlszeilen-Tool. Dieser Befehl wird ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzufügen, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie Ihren eigenen Code schreiben, denken Sie an die folgenden Fragen, wenn Sie nach und installieren einer Abhängigkeit suchen:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu tun, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Stichwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleinere Pakete gegenüber größeren, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit der Erfahrung kommt, da Sie Faktoren wie die Wahrscheinlichkeit von Updates des Pakets oder wie viele Leute es benötigen, berücksichtigen müssen.

Fügen Sie in der Datei `src/main.jsx` den folgenden Code ein und speichern Sie ihn:

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

Gehen Sie zurück zu `http://localhost:5173` und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie das Diagramm bei jedem Speichern Ihrer Datei aktualisiert wird.

### Unseren Code für die Produktion bauen

Dieser Code ist jedoch nicht für die Produktion bereit. Die meisten Build-Toolsysteme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied ist, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden werden, auf der finalen Seite nicht benötigt werden und für die Produktion entfernt werden, z.B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Obwohl sicherlich nicht vollständig, sind dies einige der häufigen Webentwicklung-Funktionen, die sehr hilfreich in der Entwicklungsphase sind, aber in der Produktion nicht sehr nützlich sind. In der Produktion würden sie Ihre Seite nur überladen.

Stoppen Sie jetzt den laufenden Vite-Entwicklungsserver mit <kbd>Strg</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere einfache Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite wird ein Verzeichnis namens `dist` erstellen. Wenn Sie hineinsehen, enthält es eine `index.html`, die der ursprünglichen sehr ähnlich sieht, mit der Ausnahme, dass die Quelle des `script` jetzt mit einem Pfad zum `assets`-Ordner ersetzt ist. Der `assets`-Ordner enthält transformierten JavaScript-Ausgabe, der jetzt für die Produktion minifiziert und optimiert ist.

> [!NOTE]
> Sie könnten sich Sorgen wegen der Warnung machen, dass es einen Chunk gibt, der zu groß ist. Dies ist zu erwarten, da wir eine Bibliothek laden, die im Hintergrund viele Dinge tut (stellen Sie sich vor, Sie würden den gesamten Code selbst schreiben, um das gleiche Diagramm zu zeichnen). Für den Moment müssen wir uns keine Sorgen machen.

## Ein grober Leitfaden zu Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie zuvor erwähnt, gibt es einige Alternativen. Es ist nützlich, zumindest zu wissen, dass sie existieren, und eine vage Vorstellung von den gemeinsamen Befehlen der Tools zu haben. Sie haben einige bereits in Aktion gesehen, aber schauen wir uns die anderen an.

Die Liste wird mit der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Haupt-Paketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind von einem Befehlszeilenstandpunkt aus ähnlich — tatsächlich zielt pnpm darauf ab, eine vollständige Parität der Argumentoptionen zu erreichen, die npm bietet. Es unterscheidet sich dadurch, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, mit dem Ziel, den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den unten gezeigten Beispielen gezeigt wird, kann pnpm ausgetauscht werden, und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm bei der Installation angesehen (obwohl Ihre Erfahrung variieren kann). Dies ist für Entwickler wichtig, da beim Warten auf die Installation von Abhängigkeiten (und dem Kopieren auf den Computer) erheblich viel Zeit verschwendet werden kann.

Es ist jedoch erwähnenswert, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Registry zu installieren. pnpm und Yarn können das gleiche `package.json`-Format wie npm verwenden und Pakete von dem npm- und anderen Paket-Registrys installieren.

Lassen Sie uns die häufigen Aktionen überprüfen, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und die Befehle dieses Paketmanagers durchgängig verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dieser Befehl Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann eine `package.json` generieren, die Metainformationen über Ihr Projekt und dessen Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch oben in Aktion gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig wird mit diesem Befehl die neueste Version von `vite` installiert, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste 4.x-Version gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` ausprobieren, was die neueste Version nach oder inklusive 4.0.0 bedeutet (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die derzeit installierten Abhängigkeiten überprüfen und sie, falls ein Update verfügbar ist, im Rahmen des im Paket angegebenen Bereichs aktualisieren.

Der Bereich wird in der Version der Abhängigkeit in Ihrer `package.json` angegeben, zum Beispiel `"vite": "^5.2.13"` — in diesem Fall bedeutet das Zirkumflex-Zeichen `^` alle Minor- und Patch-Releases nach und einschließlich 5.2.13, bis aber ausschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das in der Dokumentation kompliziert erscheinen mag, aber vereinfacht werden kann, indem man nur die Zusammenfassungsinformation berücksichtigt und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie zum Beispiel 2.0.1 die Hauptversion 2 mit der Patchversion 1 ist. Eine ausgezeichnete Möglichkeit, semver-Werte auszuprobieren, ist mit dem [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig zu bedenken, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` festgelegten Bereich hinaus aktualisieren wird — dafür müssen Sie diese Version explizit installieren.

### Mehr Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online erfahren. Auch [pnpm](https://pnpm.io/cli/add)-Befehle werden Parität mit npm haben, mit einer Handvoll Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung von der Befehlszeile aus. Zum Beispiel haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. Tatsächlich fügen wir dies regelmäßig in alle Projekte ein, da das lokale Entwicklungs-Setup in der Regel etwas anders läuft als in der Produktion.

Wenn Sie versuchen, dies in Ihrem vorherigen Testprojekt auszuführen, wird wahrscheinlich behauptet, dass das "dev-Skript fehlt". Das liegt daran, dass npm, Yarn (und ähnliche) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Lassen Sie uns also einen benutzerdefinierten Kurzbefehlen — "dev" — in unserer `package.json` erstellen. Wenn Sie das Tutorial von zuvor gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment-Verzeichnis haben. Öffnen Sie sie, und ihre `scripts`-Eigenschaft sollte so aussehen:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Aktualisieren Sie es, damit es so aussieht und speichern Sie die Datei:

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

Dies sollte Vite starten und den gleichen lokalen Entwicklungsserver starten, den wir zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript kein `npx`-Präfix mehr benötigt. Das liegt daran, dass npm (und yarn) Befehle intelligent sind und nach Befehlszeilen-Tools suchen, die lokal im Projekt installiert sind, bevor sie versuchen, diese durch konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und auffindbar macht). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl in den meisten Fällen Ihre eigenen Skripts einfach gut funktionieren werden.

Dieses spezielle mag jetzt unnötig aussehen — `npm run dev` ist mehr Zeichen zu schreiben als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, der `dev`-Befehl in der Zukunft mehr Arbeiten hinzuzufügen, wie Variablen der Umgebung einzustellen, temporäre Dateien zu erzeugen usw., ohne den Befehl zu verkomplizieren.

Sie können alle Arten von Sachen zu der `scripts`-Eigenschaft hinzufügen, die Ihnen helfen, Ihren Job zu erledigen. Zum Beispiel, hier ist das, was Vite im Template empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit kommen wir zum Ende unserer Tour durch Paketmanager. Unser nächster Schritt ist, eine Beispieltollchain aufzubauen, um alles, was wir bisher gelernt haben, in die Praxis umzusetzen.

## Siehe auch

- [Referenz für npm-Skripte](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [Referenz für package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
