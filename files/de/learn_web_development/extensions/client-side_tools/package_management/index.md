---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager eingehend, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können — um Projektwerkzeug-Abhängigkeiten zu installieren, sie auf dem neuesten Stand zu halten und mehr.

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
        Verständnis dafür, was Paketmanager und Paket-Repositories sind, warum sie benötigt werden und die Grundlagen der Verwendung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwarestück, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten enthalten, die Sie nicht ausdrücklich installiert haben — Ihre Abhängigkeiten können eigene Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt möglicherweise benötigt, ist Code, der relative Daten als menschenlesbaren Text berechnet. Sie könnten dies sicherlich selbst programmieren, aber es besteht eine hohe Wahrscheinlichkeit, dass jemand anderes dieses Problem bereits gelöst hat — warum also die Zeit verschwenden, das Rad neu zu erfinden? Zudem wird eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was sie robuster und browserübergreifend kompatibler als Ihre eigene Lösung macht.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Hilfsprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann ein Befehlszeilen-Tool wie Prettier oder ESLint sein, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten solche Abhängigkeiten in Ihr Projekt mittels eines einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements eingebunden werden, aber dies funktioniert möglicherweise nicht sofort und wahrscheinlich benötigen Sie einige moderne Werkzeuge, um Ihren Code und die Abhängigkeiten zusammenzubündeln, wenn sie im Web veröffentlicht werden. Ein Bundle bezieht sich im Allgemeinen auf eine einzelne Datei auf Ihrem Webserver, die das gesamte JavaScript für Ihre Software enthält — typischerweise so weit wie möglich komprimiert, um die Zeit zu verringern, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Außerdem, was passiert, wenn Sie ein besseres Tool finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, zu der Sie aktualisieren möchten? Dies ist nicht allzu schmerzhaft für ein paar Abhängigkeiten, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich eine Herausforderung sein, den Überblick zu behalten. Es ergibt mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dies garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Vielzahl anderer Vorteile.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber wenn wir uns etwas von npm selbst zurücknehmen, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode, um neue Abhängigkeiten (auch als "Pakete" bezeichnet) zu installieren, verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert sind, und bietet Ihnen die Möglichkeit, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird nahtlos die Installation und Deinstallation von Paketen handhaben. Wenn Sie keinen verwenden, müssten Sie sich manuell kümmern um:

- Das Finden aller richtigen JavaScript-Dateien der Pakete.
- Das Überprüfen, ob sie keine bekannten Sicherheitslücken haben.
- Das Herunterladen und Ablegen an den richtigen Stellen in Ihrem Projekt.
- Das Schreiben des Codes, um die Pakete in Ihre Anwendung einzuschließen (dies wird üblicherweise mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, das es wert ist, gelesen und verstanden zu werden).
- Dasselbe für alle Unterabhängigkeiten der Pakete zu tun, von denen es Dutzende oder Hunderte geben könnte.
- Das Entfernen aller Dateien erneut, wenn Sie die Pakete entfernen möchten.

Darüber hinaus verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Front-End-Entwicklung wichtig und häufig wird).

Im Falle von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie im vorherigen Artikel angesprochen, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für die globale Installation gibt, sind die Vorteile für die lokale Installation wichtiger — wie Code-Portabilität und Versionssperrung.

Zum Beispiel, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Computer installieren oder viel später darauf zurückkommen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von webpack installiert wurde, ist sie möglicherweise nicht kompatibel. Um dies zu mindern, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten wirklich glänzen zu sehen, müssen Sie nur versuchen, ein vorhandenes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie lokale Abhängigkeiten zu danken, weil der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufkommender Clients, wie [pnpm](https://pnpm.js.org/).

## Paketregister

Damit ein Paketmanager funktioniert, muss er wissen, wo er Pakete installieren kann, und das kommt in Form eines Paketregisters. Das Register ist ein zentraler Ort, an dem ein Paket veröffentlicht und somit installiert werden kann. npm ist sowohl ein Paketmanager als auch der Name des am häufigsten verwendeten Paketregisters für JavaScript-Pakete. Das npm-Register existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paketregister verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxies für das npm-Register zu erstellen (damit Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet auch einen Paketregisterdienst an](https://docs.github.com/en/packages), und wahrscheinlich werden im Laufe der Zeit noch mehr Optionen erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie das für Sie beste Register ausgewählt haben. Viele Projekte werden npm verwenden, und wir werden uns in unseren Beispielen im restlichen Modul daran halten.

## Nutzung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Sie mit der Verwendung eines Paketmanagers und -registers zum Installieren eines Befehlszeilenprogramms vertraut zu machen.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um mehr Werkzeuge einzuschließen und Ihnen zu zeigen, wie Sie die Website bereitstellen können.

Vite bietet einige [Init-Vorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um schnell ein reales Projekt zu starten. Zur Demonstration werden wir eine von Grund auf konfigurieren, wobei wir die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Die App als npm-Paket einrichten

Zuerst einmal erstellen Sie ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem sinnvollen Ort, den Sie wiederfinden werden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes initialisieren wir unsere App als ein npm-Paket, das eine Konfigurationsdatei — `package.json` — erstellt, die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später erneut erstellen oder sogar das Paket im npm-Register veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln und keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein, und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden nun nach einigen Fragen gefragt; npm erstellt dann eine Standard-`package.json`-Datei basierend auf den Antworten. Beachten Sie, dass keine dieser für unsere Zwecke relevant sind, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name, um die App zu identifizieren. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversion der App. Drücken Sie erneut <kbd>Return</kbd>, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir werden sie hier weglassen, aber Sie können auch etwas eingeben, was Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Wir brauchen es nicht, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: drücken Sie <kbd>Return</kbd>, um jedes davon vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht wird. Drücken Sie <kbd>Return</kbd>, um vorerst den Standard zu akzeptieren.

Drücken Sie <kbd>Return</kbd> noch einmal, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten jetzt eine package.json-Datei vorfinden. Öffnen Sie sie und sie sollte ungefähr so aussehen:

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

- `"type": "module"`, was bewirkt, dass Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) anstatt der alten CommonJS-Module interpretiert. Es ist eine allgemein gute Gewohnheit, dies zu tun.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich im npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unterhalb von `"name"` hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Dies ist die Konfigurationsdatei, die Ihr Paket definiert. Das ist gut für jetzt, also machen wir weiter.

### Installation von Vite

Wir werden zuerst Vite, das Build-Tool für unsere Website, installieren. Es ist dafür verantwortlich, unsere HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser zu bündeln.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist _All The Things_, werfen Sie einen weiteren Blick auf Ihre package.json-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Dies ist Teil der npm-Magie — wenn Sie in Zukunft Ihren Code an einen anderen Ort verschieben, auf einem anderen Computer, können Sie dasselbe Setup mit dem Befehl `npm install` wiederherstellen, und npm wird sich die Abhängigkeiten ansehen und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie werden es nicht in einem anderen Verzeichnis ausführen können. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklerabhängigkeit zu installieren. Dieser Unterschied spielt bei einer Anwendung selten eine Rolle, aber bei einer Bibliothek bedeutet es, dass andere bei der Installation Ihres Pakets nicht implizit Vite installieren. Üblicherweise ist bei Anwendungen jedes Paket, das im Quellcode importiert wird, eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (normalerweise als Befehlszeilen-Tools), eine Entwicklerabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie finden auch eine Anzahl neuer erstellter Dateien:

- `node_modules`: die Abhängigkeitsdateien, die benötigt werden, um Vite auszuführen. npm hat alle von ihnen für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das `node_modules`-Verzeichnis zu reproduzieren. Dies stellt sicher, dass solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich sein wird.

Sie müssen sich um diese Dateien nicht kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten im Allgemeinen `package-lock.json` beibehalten, da, wie erwähnt, verwendet wird, um den Zustand von `node_modules` auf verschiedenen Maschinen zu synchronisieren.

### Einrichtung unserer Beispiel-App

Jedenfalls weiter mit dem Setup.

In Vite steht die `index.html`-Datei im Mittelpunkt. Sie definiert den Startpunkt Ihrer App und Vite wird sie verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu bauen. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass die `<script>`-Elemente eine Abhängigkeit von einer Datei namens `src/main.jsx` erzeugen, die den Einstiegspunkt der JavaScript-Logik für die App erklärt. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie ihn aber für jetzt leer.

> [!NOTE]
> Das [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut ist wichtig. Es teilt dem Browser mit, dass das Skript als ES-Modul behandelt werden soll, wodurch wir die `import`- und `export`-Syntax in unserem JavaScript-Code verwenden können. Die Dateiendung ist `.jsx`, da wir im nächsten Artikel die React JSX-Syntax hinzufügen werden. Browser verstehen kein JSX, aber Vite wird es in reguläres JavaScript transformieren, als ob Browser es täten!

### Spaß mit Vite haben

Jetzt werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten etwas wie das Folgende in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, von dem gesamten JavaScript-Paket-Ökosystem zu profitieren. Erstens gibt es jetzt einen lokalen Webserver, der unter `http://localhost:5173` läuft. Sie werden für jetzt nichts sehen, aber was cool ist, dass wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu aufbaut und den Server automatisch aktualisiert, damit Sie sofort sehen können, welchen Effekt Ihre Aktualisierung hatte.

Sie können den Dev-Server jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und ihn mit demselben Befehl erneut starten. Wenn Sie sich entscheiden, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt für etwas Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir werden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket verwenden, eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden und nicht nur als Befehlszeilen-Tool. Dieser Befehl wird ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzufügen, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erledigen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu tun, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher finden Sie ein Paket, das genau das tut, was Sie benötigen. Sie können nach Schlüsselwörtern bei npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letzteres zu Leistungsproblemen beim Installieren, Ausführen etc. führen kann.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren wie die Wahrscheinlichkeit, dass das Paket Updates benötigt, oder wie viele Menschen es benötigen könnten, berücksichtigen müssen.

Geben Sie im `src/main.jsx`-File den folgenden Code ein und speichern Sie ihn:

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

Gehen Sie zurück zu `http://localhost:5173` und Sie sehen ein Diagramm auf der Seite. Ändern Sie die verschiedenen Zahlen und sehen Sie das Diagramm jedes Mal aktualisiert, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion bauen

Dieser Code ist jedoch nicht bereit für die Produktion. Die meisten Build-Tooling-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied besteht darin, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden, auf der fertigen Seite nicht benötigt werden und für die Produktion entfernt werden, wie z.B. "Hot Module Replacement", "Live Reloading" und "Unkomprimierter und kommentierter Quellcode". Obwohl bei weitem nicht erschöpfend, sind dies einige der häufig in der Webentwicklung verwendeten Funktionen, die in der Entwicklungsphase sehr hilfreich, aber in der Produktion nicht sehr nützlich sind. In der Produktion werden sie nur Ihre Seite aufblähen.

Stoppen Sie jetzt den laufenden Vite-Entwicklungsserver mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere spartanische Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite wird ein Verzeichnis namens `dist` erstellen. Wenn Sie hineinschauen, enthält es eine `index.html`, die der Wurzel sehr ähnlich sieht, außer dass die Quelle des `script` jetzt durch einen Pfad zum `assets`-Ordner ersetzt wurde. Der `assets`-Ordner enthält transformierte JavaScript-Ausgaben, die nun minimiert und für die Produktion optimiert sind.

> [!NOTE]
> Sie können sich Sorgen über die Warnung machen, dass ein Chunk zu groß ist. Das ist erwartet, weil wir eine Bibliothek laden, die im Hintergrund viel erledigt (stellen Sie sich vor, wie Sie den gesamten Code selbst schreiben würden, um dasselbe Diagramm zu zeichnen). Für jetzt müssen wir uns darüber keine Sorgen machen.

## Ein grober Leitfaden zu Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es ist zumindest wert zu wissen, dass sie existieren und eine ungefähre Vorstellung von den allgemeinen Befehlen über die Werkzeuge zu haben. Einige haben Sie bereits im Einsatz gesehen, aber schauen wir uns die anderen an.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind folgende Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus Sicht der Befehlszeile ähnlich — tatsächlich zielt pnpm darauf ab, vollständige Parität über die Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, mit dem Ziel, den insgesamt benötigten Festplattenspeicherplatz zu reduzieren.

Wo npm in den untenstehenden Beispielen gezeigt wird, kann pnpm ausgetauscht werden und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm im Hinblick auf den Installationsprozess angesehen (obwohl Ihre Erfahrung variieren kann). Dies ist Entwicklern wichtig, da eine beträchtliche Zeit mit dem Warten auf die Installation von Abhängigkeiten (und deren Kopie auf den Computer) verschwendet werden kann.

Es ist jedoch zu beachten, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm nutzen und jedes Paket aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die häufigen Aktionen überprüfen, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir demonstrieren sowohl npm- als auch Yarn-Befehle. Sie sind nicht dazu gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und die Befehle dieses Paketmanagers konsistent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.), und dann ein `package.json` für Sie generieren, das Metainformationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben auch `install` oben gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können dies auch steuern. Sie können nach `vite@4` fragen, was Ihnen die neueste 4.x-Version gibt (die 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` ausprobieren, was bedeutet, die neueste Version ab oder einschließlich 4.0.0 (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird sich die derzeit installierten Abhängigkeiten ansehen und sie aktualisieren, wenn ein Update verfügbar ist, innerhalb des Bereichs, der im Paket angegeben ist.

Der Bereich wird durch die Versionsnummer der Abhängigkeit in Ihrer `package.json` festgelegt, z.B. `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^` alle Minor- und Patch-Releases nach und einschließlich 5.2.13 bis, aber ohne 6.0.0.

Dies wird unter Verwendung eines Systems namens [semver](https://semver.org/) bestimmt, das aus der Dokumentation vielleicht etwas kompliziert erscheint, aber vereinfacht werden kann, indem man nur die Zusammenfassungsinformationen betrachtet und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie zum Beispiel 2.0.1 die Hauptversion 2 mit der Patchversion 1 ist. Ein exzellenter Weg, um semver-Werte auszuprobieren, ist der [semver calculator](https://semver.npmjs.com/).

Es ist wichtig, daran zu denken, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisieren wird — dafür müssen Sie diese Version speziell installieren.

### Mehr Befehle

Sie können online mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) finden. Auch [pnpm](https://pnpm.io/cli/add)-Befehle haben Parität mit npm, mit ein paar zusätzlichen Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung von der Befehlszeile. Zum Beispiel haben wir früher den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript ausführen, um unser Projekt im "Entwicklungsmodus" zu starten. Tatsächlich schließen wir dies regelmäßig in alle Projekte ein, da das lokale Entwicklungssetup dazu neigt, etwas anders zu laufen, als es in der Produktion laufen würde.

Wenn Sie dies in Ihrem Testprojekt von früher versuchen, würde es (wahrscheinlich) behaupten, dass das "dev script is missing". Dies liegt daran, dass npm, Yarn (und ähnliche) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Erstellen wir also einen benutzerdefinierten Kurzschriftbefehl — "dev" — in unserem `package.json`. Wenn Sie dem Tutorial von früher gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment-Verzeichnis haben. Öffnen Sie sie, und ihre `scripts`-Mitglied sollte so aussehen:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Aktualisieren Sie es, sodass es so aussieht, und speichern Sie die Datei:

```json
"scripts": {
  "dev": "vite"
},
```

Wir haben einen benutzerdefinierten `dev`-Befehl als npm-Skript hinzugefügt.

Versuchen Sie nun, das folgende in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, wie wir zuvor gesehen haben.

Beachten Sie, dass das Skript, das wir hier definiert haben, nicht mehr das `npx`-Präfix benötigt. Dies liegt daran, dass npm (und yarn) clever sind und sie werden nach Befehlszeilen-Tools suchen, die lokal für das Projekt installiert sind, bevor sie versuchen, sie durch konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und sie gefunden werden kann). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/commands/npm-run/), obwohl Ihre eigenen Skripte in den meisten Fällen einfach funktionieren werden.

Dieses spezielle mag unnötig erscheinen — `npm run dev` hat mehr Zeichen einzugeben als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in Zukunft mehr Arbeit zum `dev`-Befehl hinzuzufügen, z.B. Umgebungsvariablen zu setzen, temporäre Dateien zu generieren etc., ohne den Befehl zu verkomplizieren.

Sie können alles Mögliche zur `scripts`-Eigenschaft hinzufügen, das Ihnen bei der Arbeit hilft. Zum Beispiel empfiehlt Vite im Template folgendes:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit kommen wir zum Ende unserer Tour durch die Paketmanager. Unser nächster Schritt ist es, eine Beispiel-Toolchain aufzubauen, wobei all das, was wir bisher gelernt haben, in die Praxis umgesetzt wird.

## Siehe auch

- [npm scripts reference](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
