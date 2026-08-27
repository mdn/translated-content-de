---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel werden wir uns Paketmanager im Detail ansehen, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können — um Projektools-Abhängigkeiten zu installieren, sie auf dem neuesten Stand zu halten und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den zentralen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu verstehen, was Paketmanager und Paket-Repositories sind, warum
        sie benötigt werden, und die Grundlagen ihrer Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist eine Drittanbieter-Software, die wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, von keinen bis zu vielen, und Ihre Abhängigkeiten können Unterabhängigkeiten enthalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist Code, der relative Daten als menschenlesbaren Text berechnet. Sie könnten dies sicherlich selbst programmieren, aber es gibt eine große Chance, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit damit verschwenden, das Rad neu zu erfinden? Darüber hinaus wurde eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet, was sie robuster und browserübergreifend kompatibler macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Dienstprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann ein Befehlszeilen-Tool sein wie Prettier oder ESLint, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese mit einem einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element in Ihr Projekt aufgenommen werden, aber dies könnte nicht sofort funktionieren und Sie werden wahrscheinlich einige moderne Werkzeuge benötigen, um Ihren Code und die Abhängigkeiten zusammenzustellen, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der im Allgemeinen verwendet wird, um eine einzelne Datei auf Ihrem Webserver zu bezeichnen, die alle JavaScript für Ihre Software enthält — typischerweise so stark wie möglich komprimiert, um die Zeit zu reduzieren, die erforderlich ist, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Tool finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist nicht allzu schmerzhaft für ein paar Abhängigkeiten, aber in größeren Projekten mit vielen Abhängigkeiten kann es eine echte Herausforderung sein, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Reihe anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben bereits [npm](https://www.npmjs.com/) getroffen, aber wenn wir uns von npm selbst zurückziehen, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode zur Installation neuer Abhängigkeiten (auch als "Pakete" bezeichnet), verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Möglichkeiten zur Veröffentlichung Ihrer eigenen Pakete.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager erledigt das Installieren und Deinstallieren von Paketen nahtlos. Wenn Sie keinen verwenden würden, müssten Sie sich manuell darum kümmern:

- Alle korrekten JavaScript-Dateien für das Paket zu finden.
- Diese zu überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen haben.
- Sie herunterzuladen und an den richtigen Stellen in Ihrem Projekt abzulegen.
- Den Code zu schreiben, um das/die Paket(e) in Ihre Anwendung einzubinden (dies wird tendenziell mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) durchgeführt, ein weiteres Thema, das es sich zu lesen und zu verstehen lohnt).
- Dasselbe für alle Unterabhängigkeiten der Pakete zu tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder zu entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus kümmern sich Paketmanager um doppelte Abhängigkeiten (etwas, das wichtig wird und in der Frontend-Entwicklung häufig vorkommt).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal für Ihr Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für die globale Installation gibt, sind die Vorteile für die lokale Installation wichtiger — wie z.B. Codeportabilität und Versionseinsperrung.

Beispielsweise, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Computer installieren oder viel später darauf zurückkehren, die Konfiguration weiterhin funktioniert. Wenn eine andere Version von webpack installiert ist, ist sie möglicherweise nicht kompatibel. Um dies abzumildern, werden Abhängigkeiten lokal in ein Projekt installiert.

Um lokale Abhängigkeiten wirklich zum Strahlen zu bringen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, können Sie sich bei den lokalen Abhängigkeiten dafür bedanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufkommender Clients, wie [pnpm](https://pnpm.js.org/).

## Paketregistries

Damit ein Paketmanager funktioniert, muss er wissen, von wo aus er Pakete installieren soll, und dies geschieht in Form eines Paketregistries. Das Registry ist ein zentraler Ort, an dem ein Paket veröffentlicht und somit installiert werden kann. npm ist nicht nur ein Paketmanager, sondern auch der Name des am häufigsten verwendeten Paketregistries für JavaScript-Pakete. Das npm-Registry existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paketregister verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxies für das npm-Register zu erstellen (so können Sie bestimmte Pakete überschreiben oder sperren), [GitHub bietet auch einen Paketregisterdienst](https://docs.github.com/en/packages) an, und es werden wahrscheinlich mehr Optionen erscheinen, wenn die Zeit vergeht.

Wichtig ist, dass Sie sicherstellen, dass Sie das für Sie beste Register gewählt haben. Viele Projekte verwenden npm, und wir werden uns in den Beispielen im Rest des Moduls daran halten.

## Nutzung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Verwendung eines Paketmanagers und -registers zur Installation eines Befehlszeilenwerkzeugs zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um mehr Tools einzuschließen, und Ihnen zeigen, wie Sie die Seite bereitstellen.

Vite bietet einige [Startvorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um Ihnen schnell in einem realen Projekt zu helfen. Zu Demonstrationszwecken werden wir eine von Grund auf konfigurieren und die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichtung der App als npm-Paket

Erstellen Sie zunächst ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem logischen Ort, den Sie wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes initialisieren wir unsere App als npm-Paket, was eine Konfigurationsdatei — `package.json` — erstellt, die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später neu erstellen oder sogar das Paket im npm-Register veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung und keine wiederverwendbare Bibliothek entwickeln).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden nun einige Fragen gestellt; npm wird dann eine Standard-`package.json`-Datei basierend auf den Antworten erstellen. Beachten Sie, dass keine dieser Fragen für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name, um die App zu identifizieren. Drücken Sie einfach <kbd>Return</kbd>, um den Standardwert `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer für die App. Drücken Sie erneut <kbd>Return</kbd>, um den Standardwert `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen dies hier weg, aber Sie können auch etwas einsetzen, was Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die beim Importieren Ihres Pakets von anderen ausgeführt wird. Es ist für uns nicht nützlich, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um diese vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht wird. Drücken Sie <kbd>Return</kbd>, um vorerst den Standardwert zu akzeptieren.

Drücken Sie <kbd>Return</kbd> noch einmal, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten nun feststellen, dass Sie eine package.json-Datei haben. Öffnen Sie sie und sie sollte in etwa so aussehen:

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

- `"type": "module"`, was Node dazu veranlasst, alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) anstelle der alten CommonJS-Module zu interpretieren. Es ist eine allgemein gute Angewohnheit, sich daran zu gewöhnen.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich im npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unterhalb von `"name"` hinzu:

```json
{
  "name": "npm-experiment",
  "type": "module",
  "private": true
  // …
}
```

Dies ist also die Konfigurationsdatei, die Ihr Paket definiert. Das ist vorerst gut, also machen wir weiter.

> [!NOTE]
> [Die package.json-Datei](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine praktische Einführung in die Nutzung von `package.json`-Dateien.

### Installation von Vite

Wir werden zuerst Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien zu einem optimierten Bundle für den Browser.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist _All The Things_, werfen Sie einen weiteren Blick auf Ihre package.json-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
{
  "devDependencies": {
    "vite": "^5.2.13"
  }
}
```

Dies ist ein Teil der npm-Magie — wenn Sie in der Zukunft Ihren Code an einen anderen Ort, auf einen anderen Computer verschieben, können Sie das gleiche Setup reproduzieren, indem Sie den Befehl `npm install` ausführen, und npm wird sich die Abhängigkeiten ansehen und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie werden es nicht in einem anderen Verzeichnis ausführen können. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied spielt für eine Anwendung selten eine Rolle, bedeutet jedoch bei einer Bibliothek, dass andere beim Installieren Ihres Pakets nicht implizit Vite installieren. Normalerweise ist bei Anwendungen jedes importierte Paket im Quellcode eine reale Abhängigkeit, während jedes für die Entwicklung verwendete Paket (normalerweise als Befehlszeilenwerkzeuge) eine Entwicklungsabhängigkeit ist. Installieren Sie reale Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie werden auch feststellen, dass eine Reihe neuer Dateien erstellt wurden:

- `node_modules`: Die Abhängigkeitsdateien, die zum Ausführen von Vite erforderlich sind. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das `node_modules`-Verzeichnis zu reproduzieren. Dies stellt sicher, dass solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich ist.

Sie müssen sich um diese Dateien nicht kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` in Ihr `.gitignore`-Datei aufnehmen, wenn Sie Git verwenden, aber Sie sollten im Allgemeinen `package-lock.json` behalten, da es, wie bereits erwähnt, verwendet wird, um den Zustand von `node_modules` über verschiedene Maschinen hinweg zu synchronisieren.

### Einrichtung unserer Beispiel-App

Wie auch immer, weiter mit dem Setup.

In Vite ist die `index.html`-Datei im Mittelpunkt. Sie definiert den Startpunkt Ihrer App, und Vite verwendet sie, um andere Dateien zu finden, die zum Erstellen Ihrer App benötigt werden. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit von einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie es jedoch vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type) ist wichtig. Es teilt dem Browser mit, das Skript als ES-Modul zu behandeln, was uns ermöglicht, die `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, weil wir im nächsten Artikel React-JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es für uns in reguläres JavaScript umwandeln, als ob Browser es täten!

### Spaß mit Vite

Jetzt werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten so etwas wie das folgende in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, von der gesamten JavaScript-Paket-Ökosystem zu profitieren. Zum Start gibt es jetzt einen lokalen Webserver, der unter `http://localhost:5173` läuft. Sie werden derzeit nichts sehen, aber was cool ist, dass Vite beim Ändern Ihrer App sie neu erstellt und den Server automatisch aktualisiert, sodass Sie sofort den Effekt Ihrer Änderung sehen können.

Sie können den Entwicklungsserver jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und ihn mit demselben Befehl wieder starten. Wenn Sie sich entscheiden, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt etwas Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir werden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket verwenden, eine Bibliothek zur Datenvisualisierung. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, dass wir ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt dies daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden und nicht nur als Befehlszeilen-Tool. Dieser Befehl fügt Ihrem `package.json`-Datei ein neues `"dependencies"`-Objekt hinzu, das `plotly.js-dist-min` enthält.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit integrierten Funktionen zu tun, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleinere Pakete gegenüber größeren, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gewartet? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist, und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu beurteilen ist eine Fähigkeit, die mit der Erfahrung kommt, da Sie Faktoren wie die Wahrscheinlichkeit berücksichtigen müssen, dass das Paket Updates benötigt, oder wie viele Menschen es möglicherweise benötigen.

Fügen Sie dem `src/main.jsx`-File den folgenden Code hinzu und speichern Sie ihn:

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

### Erstellen unseres Codes für die Produktion

Diese Code ist jedoch noch nicht bereit für die Produktion. Die meisten Build-Toolsysteme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied ist, dass viele der hilfreichen Features, die Sie in der Entwicklung verwenden, im Endprodukt nicht benötigt werden und für die Produktion herausgestrippt werden, z.B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Obwohl bei weitem nicht erschöpfend, sind dies einige der gängigen Webentwicklungsfeatures, die im Entwicklungsstadium sehr hilfreich, aber in der Produktion nicht sehr nützlich sind. In der Produktion würden sie Ihre Seite nur aufblähen.

Stoppen Sie jetzt den laufenden Vite-Entwicklungsserver mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können nun unsere barebones-Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite wird ein Verzeichnis namens `dist` erstellen. Wenn Sie es sich ansehen, enthält es eine `index.html`, die dem Root-File sehr ähnlich aussieht, mit der Ausnahme, dass die Quelle des `script` jetzt durch einen Pfad zum `assets`-Ordner ersetzt wurde. Der `assets`-Ordner enthält das transformierte JavaScript-Output, das nun minimiert und für die Produktion optimiert ist.

> [!NOTE]
> Sie mögen sich über die Warnung besorgt fühlen, dass ein Abschnitt zu groß ist. Dies ist zu erwarten, da wir eine Bibliothek laden, die eine Menge hinter den Kulissen macht (stellen Sie sich vor, Sie würden all den Code selbst schreiben, um dasselbe Diagramm zu zeichnen). Im Moment müssen wir uns darüber keine Sorgen machen.

## Ein grober Leitfaden zu Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es lohnt sich zu wissen, dass sie existieren und eine ungefähre Vorstellung von den gemeinsamen Befehlen der Tools zu haben. Sie haben bereits einige in Aktion gesehen, aber schauen wir uns die anderen an.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Haupt-Paketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus Sicht der Befehlszeile ähnlich — in der Tat zielt pnpm darauf ab, vollständige Parität über die Argumentoptionen zu erreichen, die npm bietet. Es unterscheidet sich dadurch, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, mit dem Ziel, den insgesamt erforderlichen Speicherplatz zu reduzieren.

Wo npm in den unten stehenden Beispielen gezeigt wird, kann pnpm eingefügt werden und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm in Bezug auf den Installationsprozess betrachtet (obwohl Ihre Erfahrung variieren kann). Dies ist für Entwickler wichtig, da eine erhebliche Zeitmenge durch das Warten auf die Installation von Abhängigkeiten (und das Kopieren auf den Computer) verschwendet werden kann.

Es ist jedoch erwähnenswert, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden und können jedes Paket aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die häufigen Aktionen, die Sie mit Paketmanagern ausführen möchten, überprüfen.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und Befehle von diesem Paketmanager konstant verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann eine `package.json` für Sie generieren, die Meta-Informationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` bereits oben in Aktion gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste 4.x-Version gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` probieren, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (dieselbe Bedeutung wie zuvor).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dadurch werden die derzeit installierten Abhängigkeiten betrachtet und diese, wenn ein Update verfügbar ist, innerhalb des im Paket angegebenen Bereichs aktualisiert.

Der Bereich wird in der Version der Abhängigkeit in Ihrem `package.json` angegeben, z.B. `"vite": "^5.2.13"` — in diesem Fall bedeutet das Zirkumflexzeichen `^`, alle nachfolgenden und Patches-Versionen nach und einschließlich 5.2.13, bis aber nicht einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das in der Dokumentation etwas kompliziert aussehen könnte, aber vereinfacht werden kann, indem nur die zusammengefassten Informationen betrachtet werden und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, z.B. 2.0.1, was Major-Version 2 mit Patch-Version 1 ist. Eine ausgezeichnete Möglichkeit, semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig zu beachten, dass `npm update` die Abhängigkeiten nicht über den im `package.json` definierten Bereich hinaus upgraden wird — dazu müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können online mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) erfahren. Erneut werden [pnpm](https://pnpm.io/cli/add)-Befehle Parität mit npm haben, mit einer Handvoll Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung von der Befehlszeile aus. Beispielsweise haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. In der Tat fügen wir dies regelmäßig in allen Projekten ein, da das lokale Entwicklungs-Setup in der Regel etwas anders läuft, als es in der Produktion laufen würde.

Wenn Sie dies in Ihrem Testprojekt von zuvor ausprobieren, wird es (wahrscheinlich) behaupten, dass das "dev script fehlt". Das liegt daran, dass npm, Yarn (und ähnliches) nach einer Eigenschaft namens `dev` im `scripts`-Eigentum Ihrer `package.json`-Datei suchen. Lassen Sie uns also einen benutzerdefinierten Kurzbefehl — "dev" — in unserem `package.json` erstellen. Wenn Sie dem Tutorial von zuvor gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment-Verzeichnis haben. Öffnen Sie sie, und ihre `scripts`-Member sollte so aussehen:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Aktualisieren Sie es, so dass es so aussieht, und speichern Sie die Datei:

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

Wir haben ein benutzerdefiniertes `dev`-Kommando als npm-Skript hinzugefügt.

Versuchen Sie nun, das folgende in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, wie wir ihn zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript nicht mehr das `npx`-Präfix benötigt. Das liegt daran, dass npm- (und yarn-) Befehle intelligent sind und sie zuerst nach Befehlszeilenwerkzeugen suchen, die lokal für das Projekt installiert sind, bevor sie versuchen, diese durch herkömmliche Methoden zu finden (wo Ihr Computer normalerweise Software speichert und es erlaubt, sie zu finden). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/commands/npm-run/), obwohl in den meisten Fällen Ihre eigenen Skripte gut laufen werden.

Dieses spezielle Beispiel mag unnötig erscheinen — `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es erlaubt uns, dem `dev`-Befehl in der Zukunft mehr Arbeit hinzuzufügen, wie das Setzen von Umgebungsvariablen, Erstellen von temporären Dateien usw., ohne den Befehl zu komplizieren.

Sie können alle möglichen Dinge in die `scripts`-Eigenschaft einfügen, die Ihnen bei Ihrer Arbeit helfen. Zum Beispiel, hier ist, was Vite in der Vorlage empfiehlt:

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

Damit sind wir am Ende unserer Tour durch die Paketmanager angelangt. Unser nächster Schritt ist es, eine Beispiel-Toolchain aufzubauen, um alles, was wir bisher gelernt haben, in die Praxis umzusetzen.

## Siehe auch

- [npm scripts reference](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
