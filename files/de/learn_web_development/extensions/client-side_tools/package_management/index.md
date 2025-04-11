---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel werden wir uns Paketmanager im Detail ansehen, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können – um Abhängigkeiten von Projekten zu installieren, sie aktuell zu halten und mehr.

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
        sie benötigt werden und die Grundlagen, wie man sie benutzt.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwarestück, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten enthalten, die Sie nicht explizit installiert haben – Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist ein Code zur Berechnung relativer Daten als menschenlesbaren Text. Sie könnten dies sicherlich selbst programmieren, aber es besteht eine große Chance, dass jemand anderes dieses Problem bereits gelöst hat – warum Zeit damit verschwenden, das Rad neu zu erfinden? Darüber hinaus wird eine zuverlässige Drittanbieterabhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was sie robuster und browserübergreifend kompatibler macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein – wie React oder Vue – oder ein sehr kleines Hilfsprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann ein Kommandozeilenwerkzeug wie Prettier oder ESLint sein, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese mit einem einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element in Ihr Projekt aufgenommen werden, aber das funktioniert möglicherweise nicht sofort und Sie benötigen wahrscheinlich einige moderne Werkzeuge, um Ihren Code und Abhängigkeiten zusammenzufassen, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der allgemein verwendet wird, um eine einzelne Datei auf Ihrem Webserver zu bezeichnen, die den gesamten JavaScript-Code für Ihre Software enthält – in der Regel so weit wie möglich komprimiert, um die Zeit zu verkürzen, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist nicht allzu schmerzhaft für einige wenige Abhängigkeiten, aber in größeren Projekten mit vielen Abhängigkeiten kann eine solche Sache wirklich herausfordernd werden. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Reihe anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber wenn wir einen Schritt zurück von npm selbst machen, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode, um neue Abhängigkeiten (auch als "Pakete" bezeichnet) zu installieren, zu verwalten, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Möglichkeiten, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird das Installieren und Deinstallieren von Paketen nahtlos handhaben. Wenn Sie keinen verwenden würden, müssten Sie manuell Folgendes handhaben:

- Alle korrekten JavaScript-Dateien des Pakets finden.
- Diese überprüfen, um sicherzustellen, dass sie keine bekannten Sicherheitslücken haben.
- Sie herunterladen und in den richtigen Orten in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung zu inkludieren (dies wird in der Regel mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, über das es sich lohnt, mehr zu erfahren und zu verstehen).
- Dasselbe für alle Abhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angeschnitten haben, können Abhängigkeiten global oder lokal in Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für eine globale Installation gibt, sind die Vorteile einer lokalen Installation wichtiger – wie Codeportabilität und Versionssperrung.

Beispielsweise, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Rechner installieren oder viel später darauf zurückkommen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von webpack installiert war, könnte dies inkompatibel sein. Um dies zu entschärfen, werden Abhängigkeiten lokal in einem Projekt installiert.

Um lokale Abhängigkeiten wirklich glänzen zu lassen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen – wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie lokale Abhängigkeiten zu danken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufstrebender Clients, wie [pnpm](https://pnpm.js.org/).

## Paketregistries

Damit ein Paketmanager funktioniert, muss er wissen, von wo aus Pakete installiert werden sollen, und das kommt in Form einer Paketregistrierung. Die Registrierung ist ein zentraler Ort, an dem ein Paket veröffentlicht und somit installiert werden kann. npm ist nicht nur ein Paketmanager, sondern auch der Name der am häufigsten verwendeten Paketregistrierung für JavaScript-Pakete. Die npm-Registrierung existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paketregistrierung verwalten – Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxys zur npm-Registrierung zu erstellen (damit Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet auch einen Paketregistrierungsdienst an](https://docs.github.com/en/packages), und es werden wahrscheinlich im Laufe der Zeit mehr Optionen erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie die beste Registrierung für Sie gewählt haben. Viele Projekte werden npm verwenden, und wir werden in unseren Beispielen im Rest des Moduls daran festhalten.

## Verwendung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchlaufen, um Ihnen den Einstieg in die Nutzung eines Paketmanagers und einer Registry zur Installation eines Kommandozeilenwerkzeugs zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel erweitern wir die Toolchain, um weitere Tools hinzuzufügen und Ihnen zu zeigen, wie Sie die Website bereitstellen.

Vite bietet einige [Init-Vorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um Sie schnell in einem echten Projekt zu starten. Zur Demonstration werden wir eine von Grund auf neu konfigurieren, wobei wir die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichtung der App als npm-Paket

Erstellen Sie zuerst ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem sinnvollen Ort, den Sie wiederfinden werden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Lassen Sie uns als Nächstes unsere App als npm-Paket initialisieren, das eine Konfigurationsdatei – `package.json` – erstellt, die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später erneut erstellen oder sogar das Paket in der npm-Registrierung veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln, keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden nun einige Fragen gefragt, npm wird dann eine Standard-`package.json`-Datei basierend auf den Antworten erstellen. Beachten Sie, dass keine dieser Informationen für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket in einer Registrierung veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer für die App. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier aus, aber Sie können auch alles eingeben, was Ihnen gefällt. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat für uns keinen Nutzen, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jedes davon vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der Sie das Paket veröffentlichen möchten. Drücken Sie <kbd>Return</kbd>, um vorerst den Standard zu akzeptieren.

Drücken Sie ein weiteres Mal <kbd>Return</kbd>, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten jetzt eine package.json-Datei finden. Öffnen Sie es und es sollte ungefähr so aussehen:

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

- `"type": "module"`, was dazu führt, dass Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert anstelle der alten CommonJS-Module. Es ist eine allgemein gute Angewohnheit, dies zu tun.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich in die npm-Registrierung veröffentlichen.

Fügen Sie diese Zeilen direkt unter das `"name"` hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Das ist also die Konfigurationsdatei, die Ihr Paket definiert. Das ist gut für jetzt, also machen wir weiter.

### Installation von Vite

Wir werden zuerst Vite installieren, das Build-Tool für unsere Website. Es ist dafür verantwortlich, unsere HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser zu bündeln.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist _All The Things_, schauen Sie sich nochmals Ihre package.json-Datei an. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Dies ist Teil der Magie von npm – wenn Sie in Zukunft Ihren Code an einen anderen Ort auf einem anderen Rechner verschieben, können Sie dieselbe Einrichtung wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm wird die Abhängigkeiten überprüfen und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied macht bei einer Anwendung selten einen Unterschied, aber bei einer Bibliothek bedeutet es, dass bei der Installation Ihres Pakets durch andere Leute Vite nicht implizit installiert wird. Üblicherweise ist bei Anwendungen jedes Paket, das im Quellcode importiert wird, eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (in der Regel als Kommandozeilenwerkzeuge), eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Es wurden auch eine Reihe neuer Dateien erstellt:

- `node_modules`: Die Abhängigkeitsdateien, die benötigt werden, um Vite auszuführen. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Das ist eine Lockdatei, die die genauen Informationen speichert, die benötigt werden, um das Verzeichnis `node_modules` zu reproduzieren. Das stellt sicher, dass, solange die Lockdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich bleibt.

Sie müssen sich um diese Dateien keine Sorgen machen, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten `package-lock.json` im Allgemeinen behalten, da es, wie bereits erwähnt, verwendet wird, um den Zustand von `node_modules` auf verschiedenen Maschinen zu synchronisieren.

### Einrichtung unserer Beispiel-App

Jedenfalls weiter mit der Einrichtung.

In Vite steht die Datei `index.html` im Mittelpunkt. Sie definiert den Startpunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu bauen. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit zu einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, aber lassen Sie ihn vorerst leer.

> [!NOTE]
> Das [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut ist wichtig. Es teilt dem Browser mit, das Skript als ES-Modul zu behandeln, was uns erlaubt, die `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateiendung ist `.jsx`, weil wir im nächsten Artikel die React-JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es für uns in reguläres JavaScript umwandeln, als ob Browser es täten!

### Spaß mit Vite haben

Nun führen wir unser neu installiertes Vite-Tool aus. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten etwas wie dieses in Ihrem Terminal angezeigt bekommen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, vom gesamten JavaScript-Paket-Ökosystem zu profitieren. Zu Beginn läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden im Moment nichts sehen, aber was cool ist, dass, wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu aufbaut und den Server automatisch aktualisiert, sodass Sie sofort die Wirkung Ihrer Aktualisierung sehen können.

Sie können den Entwicklungsserver jederzeit mit <kbd>Strg</kbd> + <kbd>C</kbd> stoppen und ihn mit dem gleichen Befehl erneut starten. Wenn Sie sich entscheiden, ihn weiter laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Nun zu etwas Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir verwenden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket, eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt dies daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als ein Kommandozeilenwerkzeug. Dieser Befehl wird ein neues `"dependencies"`-Objekt zu Ihrer package.json-Datei hinzufügen, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Benötige ich überhaupt eine Abhängigkeit? Ist es möglich, das built-in zu machen, oder ist es einfach genug, um es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Stichwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren wie die Wahrscheinlichkeit, das Paket zu aktualisieren oder wie viele Leute es benötigen könnten, berücksichtigen müssen.

In die Datei `src/main.jsx` fügen Sie den folgenden Code hinzu und speichern ihn:

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

Gehen Sie zurück zu `http://localhost:5173` und Sie sehen ein Diagramm auf der Seite. Ändern Sie die verschiedenen Zahlen und sehen Sie das Diagramm aktualisiert jedes Mal, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion bauen

Dieser Code ist jedoch nicht bereit für die Produktion. Die meisten Build-Tool-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied ist, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden, in der finalen Website nicht benötigt werden, also werden sie für die Produktion herausgenommen, z.B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Obwohl bei weitem nicht umfassend, sind dies einige der häufigen Webentwicklungsfunktionen, die in den Entwicklungsstadien sehr hilfreich sind, aber nicht sehr nützlich in der Produktion. In der Produktion werden sie nur Ihre Website aufblähen.

Stoppen Sie jetzt den laufenden Vite-Entwicklungsserver mit <kbd>Strg</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere minimale Beispiel-Website für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite wird ein Verzeichnis namens `dist` erstellen. Wenn Sie hineinschauen, enthält es eine `index.html`, die der im Root sehr ähnlich sieht, außer dass die `script`-Quelle jetzt mit einem Pfad zum `assets`-Ordner ersetzt wurde. Der `assets`-Ordner enthält transformierte JavaScript-Ausgabe, die jetzt minifiziert und für die Produktion optimiert ist.

> [!NOTE]
> Sie mögen sich Sorgen wegen der Warnung machen, dass ein Chunk zu groß ist. Das ist zu erwarten, weil wir eine Bibliothek laden, die viele Dinge im Hintergrund tut (stellen Sie sich vor, Sie müssten den ganzen Code selbst schreiben, um dasselbe Diagramm zu zeichnen). Für jetzt müssen wir uns darüber keine Sorgen machen.

## Ein grober Leitfaden zu Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es ist zumindest wichtig zu wissen, dass sie existieren und eine vage Vorstellung von den gemeinsamen Befehlen über die Tools zu haben. Sie haben bereits einige in Aktion gesehen, aber lassen Sie uns die anderen ansehen.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind von der Befehlszeilenperspektive ähnlich – in der Tat, pnpm zielt darauf ab, volle Parität über die Argumentoptionen, die npm bietet, zu haben. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, mit dem Ziel, den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den folgenden Beispielen gezeigt wird, kann pnpm eingetauscht werden und der Befehl wird funktionieren.

Yarn wird oft für schneller als npm im Hinblick auf den Installationsprozess gehalten (obwohl Ihre Erfahrung variieren kann). Dies ist wichtig für Entwickler, da es eine erhebliche Menge an Zeit verschwendet sein kann, wenn man auf die Installation von Abhängigkeiten wartet (und auf den Computer kopiert).

Es ist jedoch erwähnenswert, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden und alle Pakete aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die gemeinsamen Aktionen, die Sie mit Paketmanagern ausführen möchten, überprüfen.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dafür gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und die Befehle von diesem Paketmanager konsistent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie bereits oben gezeigt, wird dies Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.), und dann eine `package.json` für Sie generieren, die Metainformationen über Ihr Projekt und dessen Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch oben in Aktion gesehen. Dies würde das `vite`-Paket direkt im Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit `vite`'s eigenen Abhängigkeiten.

Standardmäßig wird dieser Befehl die neueste Version von `vite` installieren, aber Sie können dies auch kontrollieren. Sie können nach `vite@4` fragen, was Ihnen die neueste 4.x-Version gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (die gleiche Bedeutung wie zuvor).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die aktuell installierten Abhängigkeiten überprüfen und aktualisieren, sollte ein Update innerhalb des im Paket spezifizierten Bereichs verfügbar sein.

Der Bereich wird in der Version der Abhängigkeit in Ihrer `package.json` wie folgt spezifiziert: `"vite": "^5.2.13"` – in diesem Fall bedeutet das Dachsymbol `^`, dass alle Minor- und Patch-Releases nach und einschließlich 5.2.13, bis aber exklusive 6.0.0 gemeint sind.

Dies wird mit einem System namens [semver](https://semver.org/) ermittelt, das aus der Dokumentation vielleicht etwas kompliziert aussieht, aber vereinfacht werden kann, indem man nur die Zusammenfassungsinformationen und die Tatsache betrachtet, dass eine Version durch `MAJOR.MINOR.PATCH` repräsentiert wird, wie 2.0.1, was die Hauptversion 2 mit Patchversion 1 ist. Ein ausgezeichneter Weg, um semver-Werte auszuprobieren, ist die Verwendung des [semver-Rechners](https://semver.npmjs.com/).

Es ist wichtig zu wissen, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisiert – um dies zu tun, müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online herausfinden. Auch [pnpm](https://pnpm.io/cli/add)-Befehle werden Parität mit npm haben, mit einer Handvoll zusätzlicher Befehle.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch die Erstellung Ihrer eigenen Befehle und deren Ausführung von der Befehlszeile. Zum Beispiel riefen wir zuvor den Befehl `vite` mit `npx` auf, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript ausführen, um unser Projekt im "Entwicklungsmodus" zu starten. Tatsächlich inkludieren wir dies regelmäßig in allen Projekten, da die lokale Entwicklungsumgebung dazu neigt, ein wenig anders zu laufen als sie es in der Produktion tun würde.

Wenn Sie dies in Ihrem Testprojekt von früher versuchen, würde es wahrscheinlich behaupten, das "dev script ist fehlend". Das liegt daran, dass npm, Yarn (und ähnliche) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Lassen Sie uns also in unserer `package.json`-Datei einen benutzerdefinierten Kurzbefehl – "dev" – erstellen. Wenn Sie dem vorherigen Tutorial gefolgt sind, sollten Sie eine `package.json`-Datei innerhalb Ihres npm-experiment-Verzeichnisses haben. Öffnen Sie es, und das `scripts`-Element sollte so aussehen:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Aktualisieren Sie es, sodass es so aussieht und speichern Sie die Datei:

```json
"scripts": {
  "dev": "vite"
},
```

Wir haben einen benutzerdefinierten `dev`-Befehl als npm-Skript hinzugefügt.

Versuchen Sie nun, das folgende in Ihr Terminal einzugeben und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, wie wir es zuvor gesehen haben.

Beachten Sie, dass das Skript, das wir hier definiert haben, nicht länger das `npx`-Präfix benötigt. Das liegt daran, dass npm (und yarn) Befehle intelligent sind und zuerst nach Befehlszeilentools suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie über konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und es ermöglicht, sie zu finden). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl in den meisten Fällen Ihre eigenen Skripte einfach funktionieren.

Dieses spezifische Beispiel mag unnötig erscheinen – `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es erlaubt uns, in Zukunft mehr Arbeit in den `dev`-Befehl zu stecken, wie das Setzen von Umgebungsvariablen, das Generieren von temporären Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können alle möglichen Dinge zur `scripts`-Eigenschaft hinzufügen, die Ihnen helfen, Ihre Arbeit zu erledigen. Zum Beispiel, hier ist, was Vite im Template empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch Paketmanager angekommen. Unser nächster Schritt ist das Aufbauen einer Beispiel-Toolchain, bei der alles, was wir bisher gelernt haben, in die Praxis umgesetzt wird.

## Siehe auch

- [npm-Skriptreferenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json-Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
