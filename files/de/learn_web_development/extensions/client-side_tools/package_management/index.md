---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel behandeln wir Paketmanager im Detail, um zu verstehen, wie wir sie in unseren eigenen Projekten verwenden können — um Abhängigkeiten von Projekten zu installieren, sie auf dem neuesten Stand zu halten und mehr.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, was Paketmanager und Paket-Repositories sind, warum sie benötigt werden und die Grundlagen, wie man sie benutzt.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwarebestand, der wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, von keinem bis zu vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten enthalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist ein Code zum Berechnen relativer Daten als menschenlesbarer Text. Sie könnten dies selbst programmieren, aber es gibt eine große Chance, dass jemand anderes dieses Problem bereits gelöst hat — warum also Zeit damit verschwenden, das Rad neu zu erfinden? Zudem wird eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was sie robuster und browserübergreifend kompatibler macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Hilfsprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann sich um ein Befehlszeilenwerkzeug wie Prettier oder ESLint handeln, das wir in früheren Artikeln besprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese in Ihr Projekt mit einem einfachen [`<script>`](/de/docs/Web/HTML/Element/script)-Element eingebunden werden, aber dies könnte nicht sofort aus der Box funktionieren und Sie werden wahrscheinlich einige moderne Tools benötigen, um Ihren Code und Ihre Abhängigkeiten zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle bezieht sich allgemein auf eine einzelne Datei auf Ihrem Webserver, die den gesamten JavaScript-Code für Ihre Software enthält — typischerweise so stark wie möglich komprimiert, um die Zeit zu verringern, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Zusätzlich, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder wenn eine neue Version Ihrer Abhängigkeit veröffentlicht wird, auf die Sie aktualisieren möchten? Dies ist nicht allzu schmerzhaft bei ein paar Abhängigkeiten, aber in größeren Projekten mit vielen Abhängigkeiten kann dies wirklich schwierig werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dies garantiert, dass der Code sauber hinzugefügt und entfernt wird, zusätzlich zu einer Vielzahl anderer Vorteile.

## Was genau ist ein Paketmanager?

Wir haben bereits [npm](https://www.npmjs.com/) kennengelernt, aber abgesehen von npm selbst ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode zum Installieren neuer Abhängigkeiten (auch als "Pakete" bezeichnet), verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet die Möglichkeit, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch benötigen Sie vielleicht keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird nahtlos die Pakete installieren und deinstallieren. Wenn Sie keinen benutzen würden, müssten Sie Folgendes manuell erledigen:

- Alle richtigen JavaScript-Dateien des Pakets finden.
- Sie überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen haben.
- Sie herunterladen und sie an den richtigen Orten in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihre Anwendung aufzunehmen (dies wird in der Regel mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein anderes Thema, das es wert ist, erlernt und verstanden zu werden).
- Das Gleiche für alle Unterabhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder entfernen, wenn Sie die Pakete entfernen möchten.

Zusätzlich verwalten Paketmanager doppelte Abhängigkeiten (etwas, das wichtig und häufig in der Front-End-Entwicklung wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile beim globalen Installieren gibt, sind die Vorteile des lokalen Installierens wichtiger — wie Code-Portabilität und Versionssperrung.

Beispielsweise, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Computer installieren oder es viel später erneut aufrufen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von webpack installiert wäre, könnte diese nicht kompatibel sein. Um dieses Problem zu beheben, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten wirklich glänzen zu sehen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie den lokalen Abhängigkeiten zu verdanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und populärer alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung ermöglichen kann. Es gibt auch eine Reihe anderer aufkommender Clients, wie [pnpm](https://pnpm.js.org/).

## Paket-Registries

Damit ein Paketmanager funktioniert, muss er wissen, woher er Pakete installieren soll, und dies erfolgt in Form eines Paket-Registrierungsdienstes. Das Registry ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und somit installiert werden kann. npm, ebenso wie ein Paketmanager, ist auch der Name des am häufigsten verwendeten Paket-Registrierungsdienstes für JavaScript-Pakete. Das npm-Registry existiert auf [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paket-Registry verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxies zum npm-Registry zu erstellen (damit Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet auch einen Paket-Registry-Service an](https://docs.github.com/en/packages), und es werden wahrscheinlich im Laufe der Zeit mehr Optionen erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie das für Sie beste Registry gewählt haben. Viele Projekte werden npm verwenden, und wir werden dies in den Beispielen im Rest des Moduls beibehalten.

## Verwendung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Sie mit der Verwendung eines Paketmanagers und -repositorys zur Installation eines Befehlszeilenwerkzeugs zu beginnen.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain um weitere Tools erweitern und Ihnen zeigen, wie Sie die Site bereitstellen.

Vite bietet einige [Init-Vorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project), mit allen notwendigen Abhängigkeiten und Konfigurationen, um schnell in einem realen Projekt zu beginnen. Für die Demonstration werden wir eine von Grund auf neu konfigurieren, wobei wir die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als npm-Paket

Zuerst erstellen Sie ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem sinnvollen Ort, den Sie wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes initialisieren wir unsere App als npm-Paket, was eine Konfigurationsdatei erstellt — `package.json` —, die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später erneut erstellen oder sogar das Paket im npm-Registry veröffentlichen möchten (obwohl das in unserem Artikel nicht relevant ist, weil wir eine Anwendung entwickeln, nicht eine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein, und stellen Sie sicher, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm init
```

Jetzt werden Ihnen einige Fragen gestellt; npm wird dann eine Standard-`package.json`-Datei basierend auf den Antworten erstellen. Beachten Sie, dass keine dieser Fragen für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Registry veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standardwert `npm-experiment` zu übernehmen.
- `version`: Die Startversionsnummer der App. Drücken Sie erneut <kbd>Return</kbd>, um den Standardwert `1.0.0` zu übernehmen.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen sie hier weg, aber Sie können auch etwas anderes eingeben. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat für uns keine Verwendung, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um diese vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht wird. Drücken Sie <kbd>Return</kbd>, um vorerst den Standardwert zu übernehmen.

Drücken Sie einmal mehr <kbd>Return</kbd>, um diese Einstellungen zu akzeptieren.

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

Wir werden zwei weitere Zeilen zur `package.json` hinzufügen:

- `"type": "module"`, was dazu führt, dass Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert, anstelle der alten CommonJS-Module. Es ist generell eine gute Gewohnheit, sich daran zu gewöhnen.
- `"private": true`, wodurch verhindert wird, dass Sie Ihr Paket versehentlich im npm-Registry veröffentlichen.

Fügen Sie diese Zeilen direkt unter dem `"name"` hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Das ist also die Konfigurationsdatei, die Ihr Paket definiert. Das ist gut für jetzt, gehen wir weiter.

### Vite installieren

Wir werden zuerst Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist, werfen Sie einen weiteren Blick auf Ihre `package.json`-Datei. Sie werden sehen, dass npm ein neues Feld, `devDependencies`, hinzugefügt hat:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Das ist Teil der npm-Magie — wenn Sie in Zukunft Ihren Code an einen anderen Ort oder auf eine andere Maschine verschieben, können Sie das gleiche Setup mit dem Befehl `npm install` neu erstellen, und npm wird die Abhängigkeiten überprüfen und sie für Sie installieren.

Ein Nachteil ist, dass Vite innerhalb unserer `npm-experiment`-App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir `vite` als Entwicklungsabhängigkeit installiert haben. Dieser Unterschied spielt selten eine Rolle für eine Anwendung, aber für eine Bibliothek bedeutet es, dass wenn andere Ihr Paket installieren, sie Vite nicht implizit installieren. Normalerweise ist bei Anwendungen jedes Paket, das im Quellcode importiert wird, eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (normalerweise als Befehlszeilen-Tools), eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie werden auch eine Reihe neuer Dateien erstellt sehen:

- `node_modules`: Die Abhängigkeitsdateien, die für den Betrieb von Vite erforderlich sind. npm hat alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen enthält, die benötigt werden, um das `node_modules`-Verzeichnis zu reproduzieren. Dies stellt sicher, dass, solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen dasselbe ist.

Sie brauchen sich um diese Dateien nicht zu kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten `package-lock.json` im Allgemeinen behalten, da es, wie erwähnt, verwendet wird, um den Zustand von `node_modules` über verschiedene Maschinen hinweg zu synchronisieren.

### Einrichten unserer Beispiel-App

Jedenfalls, weiter mit der Einrichtung.

In Vite steht die `index.html`-Datei im Mittelpunkt. Sie definiert den Startpunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die zum Erstellen Ihrer App benötigt werden. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit zu einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App erklärt. Erstellen Sie den Ordner `src` und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie ihn jedoch vorerst leer.

> [!NOTE]
> Das [`type="module"`](/de/docs/Web/HTML/Element/script/type)-Attribut ist wichtig. Es teilt dem Browser mit, das Script als ES-Modul zu behandeln, was es uns ermöglicht, `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateiendung ist `.jsx`, weil wir im nächsten Artikel die React JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es in reguläres JavaScript umwandeln, so als ob Browser dies tun!

### Spaß mit Vite haben

Jetzt werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten etwas Ähnliches in Ihrem Terminal angezeigt bekommen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, vom gesamten JavaScript-Paket-Ökosystem zu profitieren. Für den Anfang gibt es jetzt einen lokalen Webserver, der unter `http://localhost:5173` läuft. Sie werden zunächst nichts sehen, aber was cool ist, ist, dass wenn Sie Änderungen an Ihrer App vornehmen, Vite sie erneut aufbaut und den Server automatisch aktualisiert, so dass Sie sofort den Effekt Ihrer Aktualisierung sehen können.

Sie können den Dev-Server jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und ihn mit dem gleichen Befehl erneut starten. Wenn Sie sich entscheiden, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt zum Seiteninhalt. Zur Demonstration fügen wir der Seite ein Diagramm hinzu. Wir verwenden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js), eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, dass wir ohne das `--save-dev`-Flag installieren. Wie zuvor erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Befehlszeilenwerkzeug. Dieser Befehl wird Ihrem `package.json`-File ein neues `"dependencies"`-Objekt mit `plotly.js-dist-min` darin hinzufügen.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu vervollständigen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit integrierten Funktionen zu tun oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Schlüsselwörtern auf npm oder bei Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu beurteilen, ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren wie die Wahrscheinlichkeit, dass das Paket Updates benötigt, oder wie viele Leute es möglicherweise brauchen, berücksichtigen müssen.

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

Gehen Sie zurück zu `http://localhost:5173` und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie das Diagramm jedes Mal aktualisiert wird, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion bauen

Allerdings ist dieser Code noch nicht bereit für die Produktion. Die meisten Build-Tooling-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied ist, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden werden, im endgültigen Site nicht benötigt werden und für die Produktion herausgestrichen werden, z.B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Obwohl bei weitem nicht erschöpfend, sind dies einige der häufigen Webentwicklungsfunktionen, die in der Entwicklung sehr hilfreich, aber in der Produktion nicht sehr nützlich sind. In der Produktion blähen sie nur Ihre Site auf.

Stoppen Sie nun den laufenden Vite-Dev-Server mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere einfache Beispielsite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die zur Veröffentlichung geeignet sind.

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie hineinschauen, enthält es eine `index.html`, die der Wurzel sehr ähnlich aussieht, außer dass die Quelle des `script` jetzt durch einen Pfad zum Ordner `assets` ersetzt wurde. Der Ordner `assets` enthält optimierten JavaScript-Code, der jetzt minifiziert und für die Produktion optimiert ist.

> [!NOTE]
> Sie könnten sich Sorgen über die Warnung machen, dass ein Chunk zu groß ist. Das ist zu erwarten, da wir eine Bibliothek laden, die hinter den Kulissen eine Menge Dinge tut (stellen Sie sich vor, Sie müssten den ganzen Code selbst schreiben, um dasselbe Diagramm zu zeichnen). Wir brauchen uns im Moment keine Sorgen darüber machen.

## Ein grober Leitfaden zu Paketmanager-Clients

In diesem Tutorial wurde das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es ist wert, zumindest zu wissen, dass sie existieren, und eine vage Vorstellung von den gemeinsamen Befehlen über die Tools hinweg zu haben. Sie haben bereits einige im Einsatz gesehen, aber schauen wir uns die anderen an.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind folgende Haupt-Paketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus der Befehlszeilen-Perspektive ähnlich — tatsächlich strebt pnpm an, vollständige Parität über die Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, um den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den folgenden Beispielen gezeigt wird, kann pnpm ausgetauscht werden und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm beim Installationsprozess angesehen (obwohl Ihre Ergebnisse variieren können). Dies ist Entwicklern wichtig, da durch das Warten auf die Installation von Abhängigkeiten (und das Kopieren auf den Computer) eine beträchtliche Menge an Zeit verschwendet werden kann.

Es sollte jedoch beachtet werden, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Registry zu installieren. pnpm und Yarn können das gleiche `package.json`-Format wie npm verwenden und jedes Paket aus dem npm- und anderen Paket-Registry-Installationen installieren.

Lassen Sie uns die gemeinsamen Aktionen überprüfen, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im gleichen Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und die Befehle konsequent von diesem Paketmanager verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann ein `package.json` für Sie generieren, das Meta-Informationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben auch `install` oben in Aktion gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit `vites` eigenen Abhängigkeiten.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste Version 4.x (welche 4.5.3 ist) gibt. Oder Sie können `vite@^4.0.0` ausprobieren, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die aktuell installierten Abhängigkeiten überprüfen und sie, wenn ein Update verfügbar ist, innerhalb des im Paket angegebenen Bereichs aktualisieren.

Der Bereich wird in der Version der Abhängigkeit in Ihrem `package.json`-File spezifiziert, wie `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^`, dass alle kleinen und Patch-Versionen nach und einschließlich 5.2.13, bis jedoch nicht einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das von der Dokumentation her etwas kompliziert aussehen mag, aber vereinfacht werden kann, indem man nur die zusammenfassenden Informationen berücksichtigt und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie 2.0.1, was die Hauptversion 2 mit der Patch-Version 1 ist. Ein ausgezeichneter Weg, um semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig zu bedenken, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisieren wird — dazu müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online erfahren. Auch [pnpm](https://pnpm.io/cli/add)-Befehle haben Parität mit npm, mit einer Handvoll Ergänzungen.

## Eigene Befehle erstellen

Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung über die Befehlszeile. Beispielsweise haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Dev-Server zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. Tatsächlich fügen wir diesen regelmäßig in alle Projekte ein, da das lokale Entwicklungssetup dazu neigt, etwas anders zu laufen, als es in der Produktion der Fall wäre.

Wenn Sie versuchen würden, dies in Ihrem Testprojekt von vorher auszuführen, würde es (wahrscheinlich) behaupten, das "Dev-Skript fehlt". Dies liegt daran, dass npm, Yarn (und dergleichen) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Also, lassen Sie uns einen benutzerdefinierten Kurzbefehlen — "dev" — in unserer `package.json` erstellen. Wenn Sie dem Tutorial von vorher gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment-Verzeichnis haben. Öffnen Sie sie, und ihr `scripts`-Teil sollte so aussehen:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Aktualisieren Sie es, damit es so aussieht, und speichern Sie die Datei:

```json
"scripts": {
  "dev": "vite"
},
```

Wir haben einen benutzerdefinierten `dev`-Befehl als npm-Skript hinzugefügt.

Versuchen Sie nun, das Folgende in Ihrem Terminal auszuführen, wobei Sie sicherstellen, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, wie wir ihn zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript das `npx`-Präfix nicht mehr benötigt. Das liegt daran, dass npm (und yarn) Befehle clever sind, indem sie nach Befehlszeilen-Tools suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie auf konventionelle Weise zu finden (wo Ihr Computer normalerweise Software speichert und erlaubt, gefunden zu werden). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl in den meisten Fällen Ihre eigenen Skripte einfach einwandfrei funktionieren.

Dieses besondere sieht möglicherweise unnötig aus — `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in Zukunft mehr Arbeit in den `dev`-Befehl aufzunehmen, wie das Setzen von Umgebungsvariablen, das Erzeugen temporärer Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge zur Eigenschaft `scripts` hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Zum Beispiel, hier ist, was Vite im Template empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit kommen wir zum Ende unserer Tour durch Paketmanager. Unser nächster Schritt besteht darin, eine Beispiel-Toolchain aufzubauen und alles, was wir bisher gelernt haben, in die Praxis umzusetzen.

## Siehe auch

- [npm-Skript-Referenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json-Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
