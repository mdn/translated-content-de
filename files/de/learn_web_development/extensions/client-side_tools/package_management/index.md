---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 94e900db86109d76e8a1e120e3b135db0d543c87
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager im Detail, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können — um Projektwerkzeug-Abhängigkeiten zu installieren, auf dem neuesten Stand zu halten und mehr.

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
        Das Verständnis, was Paketmanager und Paket-Repositorys sind, warum
        sie benötigt werden und die Grundlagen, wie man sie verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwareteil, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, von keiner bis hin zu vielen, und Ihre Abhängigkeiten könnten Sub-Abhängigkeiten enthalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist ein Code zur Berechnung relativer Daten als menschenlesbarer Text. Sie könnten dies sicherlich selbst programmieren, aber es besteht eine große Wahrscheinlichkeit, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit verschwenden, das Rad neu zu erfinden? Außerdem wird eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was sie robuster und browserübergreifender kompatibel macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Dienstprogramm wie unsere menschenlesbare Datumslibrary, oder es kann ein Kommandozeilenwerkzeug wie Prettier oder ESLint sein, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese in Ihr Projekt mithilfe eines einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements eingeschlossen werden, aber das könnte nicht sofort funktionieren und Sie werden wahrscheinlich einige moderne Werkzeuge benötigen, um Ihren Code und die Abhängigkeiten zusammen zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der allgemein verwendet wird, um eine einzelne Datei auf Ihrem Webserver zu beschreiben, die den gesamten JavaScript-Code für Ihre Software enthält — typischerweise so weit wie möglich komprimiert, um die Zeit zu reduzieren, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Zusätzlich, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist bei wenigen Abhängigkeiten nicht allzu schmerzhaft, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich herausfordernd werden, dies zu verfolgen. Es ist sinnvoller, einen **Paketmanager** wie npm zu verwenden, da dieser garantieren kann, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Vielzahl anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber abgesehen von npm selbst ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode, um neue Abhängigkeiten (auch "Pakete" genannt) zu installieren, verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet die Möglichkeit, eigene Pakete zu veröffentlichen.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager handhabt das Installieren und Deinstallieren von Paketen nahtlos. Wenn Sie keinen verwenden, müssten Sie manuell erledigen:

- Alle korrekten JavaScript-Dateien des Pakets finden.
- Diese überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen aufweisen.
- Sie herunterladen und an den richtigen Stellen in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung einzubinden (dies wird in der Regel mithilfe von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) durchgeführt, ein weiteres Thema, das es wert ist, gelesen und verstanden zu werden).
- Dasselbe für alle Sub-Abhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder entfernen, wenn Sie die Pakete deinstallieren möchten.

Zusätzlich verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Front-End-Entwicklung wichtig und üblich wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile gibt, global zu installieren, sind die Vorteile, lokal zu installieren, wichtiger — wie Code-Portabilität und Versionsfixierung.

Zum Beispiel, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Computer installieren oder viel später darauf zurückgreifen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von webpack installiert ist, könnte diese möglicherweise nicht kompatibel sein. Um dem entgegenzuwirken, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten wirklich glänzen zu sehen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, können Sie sich für die Tatsache bedanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und populärer alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufstrebender Clients, wie [pnpm](https://pnpm.js.org/).

## Paket-Registries

Damit ein Paketmanager funktioniert, muss er wissen, wo er Pakete installieren soll, und dies geschieht in Form einer Paket-Registry. Die Registry ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und somit installiert werden kann. npm ist, zusätzlich dazu, ein Paketmanager zu sein, auch der Name der am häufigsten verwendeten Paket-Registry für JavaScript-Pakete. Die npm-Registry existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paket-Registry verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxys zur npm-Registry zu erstellen (sodass Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet ebenfalls einen Paket-Registry-Service an](https://docs.github.com/en/packages), und es werden wahrscheinlich weitere Optionen im Laufe der Zeit erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie die beste Registry für sich gewählt haben. Viele Projekte werden npm verwenden, und wir halten uns an diese in unseren Beispielen im restlichen Modul.

## Nutzung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Verwendung eines Paketmanagers und einer Registry zur Installation eines Befehlszeilen-Dienstprogramms zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um weitere Werkzeuge einzubeziehen und Ihnen zu zeigen, wie Sie die Website bereitstellen.

Vite bietet einige [Vorlagen für den Start](https://vite.dev/guide/#scaffolding-your-first-vite-project), mit allen notwendigen Abhängigkeiten und Konfigurationen, um Sie schnell in einem echten Projekt zu starten. Zur Demonstration werden wir eine von Grund auf neu konfigurieren, wobei wir die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als npm-Paket

Erstellen Sie zunächst ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem sinnvollen Ort, den Sie wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als Nächstes initialisieren wir unsere App als npm-Paket, was eine Konfigurationsdatei — `package.json` — erstellt, mit der wir unsere Konfigurationsdetails speichern können, falls wir diese Umgebung später erneut erstellen oder sogar das Paket im npm-Registry veröffentlichen wollen (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln und keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und vergewissern Sie sich, dass Sie sich im `npm-experiment` Verzeichnis befinden:

```bash
npm init
```

Nun werden Ihnen einige Fragen gestellt; npm erstellt dann eine Standard-`package.json`-Datei basierend auf den Antworten. Beachten Sie, dass keine dieser Fragen für unsere Zwecke relevant ist, da sie nur dann verwendet werden, wenn Sie Ihr Paket in einer Registry veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standardwert `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer für die App. Drücken Sie erneut <kbd>Return</kbd>, um den Standardwert `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier weg, aber Sie können auch etwas anderes eingeben. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat für uns keine Bedeutung, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jeden dieser Punkte vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht werden soll. Drücken Sie <kbd>Return</kbd>, um den Standardwert vorerst zu akzeptieren.

Drücken Sie noch einmal <kbd>Return</kbd>, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment` Verzeichnis und Sie sollten nun feststellen, dass Sie eine `package.json` Datei haben. Öffnen Sie sie und sie sollte ungefähr so aussehen:

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

- `"type": "module"`, was dazu führt, dass Node alle `.js` Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert, anstatt der alten CommonJS-Module. Es ist eine allgemein gute Gewohnheit, sich darin einzubringen.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich in der npm-Registry veröffentlichen.

Fügen Sie diese Zeilen direkt unter `"name"` hinzu:

```json
{
  "name": "npm-experiment",
  "type": "module",
  "private": true
  // …
}
```

Dies ist die Konfigurationsdatei, die Ihr Paket definiert. Das ist gut für den Moment, also lassen Sie uns fortfahren.

> [!NOTE]
> [Die package.json Datei](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine praktische Einführung in die Verwendung von `package.json` Dateien.

### Installation von Vite

Zuerst werden wir Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Paket für den Browser.

```bash
npm install --save-dev vite
```

Wenn das erledigt ist, werfen Sie einen weiteren Blick auf Ihre `package.json` Datei. Sie werden sehen, dass npm ein neues Feld `devDependencies` hinzugefügt hat:

```json
{
  "devDependencies": {
    "vite": "^5.2.13"
  }
}
```

Das ist ein Teil der npm-Magie — wenn Sie in Zukunft Ihren Code an einen anderen Ort verschieben, auf einem anderen Computer, können Sie dieselbe Konfiguration mit dem Befehl `npm install` wiederherstellen, und npm wird sich die Abhängigkeiten ansehen und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment` App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied ist für eine Anwendung selten relevant, aber für eine Bibliothek bedeutet es, dass wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren. Normalerweise ist für Anwendungen jedes Paket, das im Quellcode importiert wird, eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (in der Regel als Kommandozeilen-Tools), eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie werden auch eine Anzahl neuer Dateien erstellt finden:

- `node_modules`: Die für den Betrieb von Vite erforderlichen Abhängigkeitsdateien. npm hat alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das `node_modules` Verzeichnis zu reproduzieren. Dies stellt sicher, dass solange die Sperrdatei unverändert bleibt, das `node_modules` Verzeichnis auf verschiedenen Maschinen gleich bleibt.

Sie brauchen sich um diese Dateien nicht zu kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` in Ihre `.gitignore` Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten `package-lock.json` im Allgemeinen behalten, da es, wie erwähnt, verwendet wird, um den Zustand der `node_modules` über verschiedene Maschinen hinweg zu synchronisieren.

### Einrichten unserer Beispiel-App

Wie auch immer, weiter mit der Einrichtung.

In Vite ist die `index.html` Datei zentral. Sie definiert den Startpunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu bauen. Erstellen Sie eine `index.html` Datei in Ihrem `npm-experiment` Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit zu einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den `src` Ordner und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie es aber vorerst leer.

> [!NOTE]
> Das [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut ist wichtig. Es sagt dem Browser, das Skript als ES-Modul zu behandeln, was uns erlaubt, `import` und `export` Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, weil wir im nächsten Artikel React JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es für uns transformieren, als ob Browser es täten.

### Spaß mit Vite haben

Jetzt werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten etwas Ähnliches wie dies in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, die Vorteile des vollständigen JavaScript-Paket-Ökosystems zu nutzen. Für den Anfang läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber was cool ist, dass, wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu aufbauen und den Server automatisch aktualisieren wird, sodass Sie sofort die Wirkung Ihrer Aktualisierung sehen können.

Sie können den Entwicklerserver jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und mit dem gleichen Befehl wieder starten. Wenn Sie beschließen, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt zu etwas Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir werden das [plotly.js](https://www.npmjs.com/package/plotly.js) Paket verwenden, eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden und nicht nur als Kommandozeilen-Tool. Dieser Befehl wird Ihrem `package.json` eine neue `"dependencies"`-Objekt hinzufügen, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Benötige ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu tun, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher werden Sie ein Paket finden, das genau das tut, was Sie benötigen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren berücksichtigen müssen wie die Wahrscheinlichkeit, dass das Paket Aktualisierungen benötigt, oder wie viele Leute es möglicherweise benötigen.

Im `src/main.jsx` Datei, fügen Sie den folgenden Code ein und speichern Sie ihn:

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

### Unseren Code für die Produktion bereitstellen

Allerdings ist dieser Code nicht bereit für die Produktion. Die meisten Build-Tooling-Systeme, einschließlich Vite, besitzen einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied besteht darin, dass viele der hilfreichen Funktionen, die Sie während der Entwicklung nutzen, im Endprodukt nicht benötigt werden und daher für die Produktion entfernt werden, z. B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Obwohl bei weitem nicht vollständig, sind dies einige der häufigsten Webentwicklungsfunktionen, die in der Entwicklungsphase sehr hilfreich sind, aber in der Produktion nicht sehr nützlich sind. In der Produktion würden sie Ihre Site nur aufblähen.

Beenden Sie nun den laufenden Vite Entwicklerserver mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere minimalistische Beispiel-Website für eine imaginäre Bereitstellung vorbereiten. Vite stellt einen zusätzlichen `build` Befehl bereit, um Dateien zu generieren, die zur Veröffentlichung geeignet sind.

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie dort hineinschauen, enthält es eine `index.html`, die der Wurzel ähnlich ist, mit der Ausnahme, dass die Quelle des `script`-Elements jetzt durch einen Pfad zum `assets`-Ordner ersetzt ist. Der `assets`-Ordner enthält transformierte JavaScript-Ausgabe, die jetzt für die Produktion minimiert und optimiert ist.

> [!NOTE]
> Sie könnten sich über die Warnung Sorgen machen, dass ein Chunk zu groß ist. Das ist zu erwarten, da wir eine Bibliothek laden, die im Hintergrund viele Dinge erledigt (stellen Sie sich vor, all den Code selbst zu schreiben, um dasselbe Diagramm zu zeichnen). Für den Moment brauchen wir uns keine Sorgen darüber zu machen.

## Ein grober Leitfaden zu Paketmanager-Clients

In diesem Tutorial wurde das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es lohnt sich zumindest, zu wissen, dass sie existieren und eine vage Vorstellung von den gemeinsamen Befehlen über die Werkzeuge hinweg zu haben. Sie haben bereits einige in Aktion gesehen, aber lassen Sie uns die anderen anschauen.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens stehen die folgenden Hauptpaketmanager zur Verfügung:

- npm bei [npmjs.org](https://www.npmjs.com/)
- pnpm bei [pnpm.js.org](https://pnpm.js.org/)
- Yarn bei [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus Sicht der Kommandozeile ähnlich — in der Tat strebt pnpm danach, volle Parität über die Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich dadurch, dass es eine andere Methode verwendet, um die Pakete auf Ihrem Computer herunterzuladen und zu speichern, um den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den untenstehenden Beispielen gezeigt wird, kann pnpm eingefügt werden und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm in Bezug auf den Installationsprozess angesehen (obwohl Ihre Erfahrung variieren kann). Dies ist für Entwickler wichtig, da eine beträchtliche Menge Zeit mit dem Warten auf die Installation von Abhängigkeiten (und das Kopieren auf den Computer) verschwendet werden kann.

Es ist jedoch wichtig zu beachten, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Registry zu installieren. pnpm und Yarn können dasselbe `package.json` Format wie npm verwenden und können jedes Paket aus dem npm und anderen Paket-Registrys installieren.

Lassen Sie uns die häufigen Aktionen überprüfen, die Sie mit Paketmanagern durchführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt mit entweder npm oder Yarn einrichten und die Befehle dieses Paketmanagers konsistent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies eine Reihe von Fragen durchgehen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann eine `package.json` für Sie generieren, die Metainformationen über Ihr Projekt und dessen Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` bereits oben in Aktion gesehen. Dies würde das `vite`-Paket direkt im Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können auch dies steuern. Sie können `vite@4` anfordern, was Ihnen die neueste 4.x Version gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` probieren, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (dieselbe Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die derzeit installierten Abhängigkeiten überprüfen und aktualisieren, wenn ein Update verfügbar ist, innerhalb des im Paket festgelegten Bereichs.

Der Bereich ist in der Version der Abhängigkeit in Ihrer `package.json` angegeben, wie `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^` alle nachfolgenden Minor- und Patch-Releases ab und einschließlich 5.2.13, bis jedoch 6.0.0 nicht eingeschlossen.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das auf den ersten Blick aus der Dokumentation etwas kompliziert aussehen mag, aber vereinfacht werden kann, indem man nur die Zusammenfassungsinformationen betrachtet und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie 2.0.1, wobei die Hauptversion 2 und die Patch-Version 1 ist. Eine hervorragende Möglichkeit, semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig, daran zu denken, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisiert — um dies zu erreichen, müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie finden mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online. Auch [pnpm](https://pnpm.io/cli/add) Befehle haben Parität mit npm, mit einigen zusätzlichen Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch die Erstellung eigener Befehle und deren Ausführung von der Kommandozeile aus. Zum Beispiel haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite Entwicklerserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. Tatsächlich fügen wir dies regelmäßig in alle Projekte ein, da die lokale Entwicklungsumgebung etwas anders läuft als in der Produktion.

Wenn Sie dies in Ihrem Testprojekt von früher versuchen würden, würde es (wahrscheinlich) behaupten, dass das "dev script fehlt". Dies liegt daran, dass npm, Yarn (und ähnliche) nach einer Eigenschaft namens `dev` im `scripts` Element Ihrer `package.json` Datei suchen. Also lassen Sie uns ein benutzerdefiniertes Abkürzungsbefehl — "dev" — in unserer `package.json` erstellen. Wenn Sie dem Tutorial von früher gefolgt sind, sollten Sie eine `package.json` Datei in Ihrem npm-experiment Verzeichnis haben. Öffnen Sie es, und sein `scripts` Mitglied sollte so aussehen:

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

Wir haben ein benutzerdefiniertes `dev` Kommando als ein npm Skript hinzugefügt.

Versuchen Sie nun, das folgende in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im `npm-experiment` Verzeichnis befinden:

```bash
npm run dev
```

Das sollte Vite starten und denselben lokalen Entwicklungsserver starten, den wir zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript kein `npx`-Präfix mehr benötigt. Dies liegt daran, dass npm (und yarn) Befehle clever sind, indem sie nach Befehlszeilen-Tools suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie auf herkömmliche Weise zu finden (wo Ihr Computer normalerweise Software speichert und findet). Sie können [mehr über die technischen Feinheiten des `run` Befehls erfahren](https://docs.npmjs.com/cli/commands/npm-run/), obwohl in den meisten Fällen Ihre eigenen Skripte gut funktionieren werden.

Dieser spezielle könnte überflüssig erscheinen — `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in Zukunft mehr Arbeit zum `dev` Befehl hinzuzufügen, wie Umgebungsvariablen setzen, temporäre Dateien generieren usw., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge zur `scripts` Eigenschaft hinzufügen, die Ihnen helfen, Ihre Arbeit zu erledigen. Zum Beispiel, hier ist, was Vite im Template empfiehlt:

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

Damit kommen wir zum Ende unseres Rundgangs durch Paketmanager. Unser nächster Schritt ist es, eine Beispiel-Toolchain aufzubauen, und all das, was wir bisher gelernt haben, in die Praxis umzusetzen.

## Siehe auch

- [npm scripts reference](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
