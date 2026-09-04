---
title: Grundlagen des Paketmanagements
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel werden wir uns ausführlich mit Paketmanagern beschäftigen, um zu verstehen, wie wir sie in unseren eigenen Projekten verwenden können — um Projekttool-Abhängigkeiten zu installieren, sie aktuell zu halten und mehr.

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
        Zu verstehen, was Paketmanager und Paket-Repositories sind, warum sie benötigt werden und die Grundlagen ihrer Anwendung.
        </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwaremodul, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten können Unterabhängigkeiten beinhalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist eine Bibliothek zur Berechnung von relativen Daten als menschenlesbarer Text. Sie könnten dies sicherlich selbst programmieren, aber es ist sehr wahrscheinlich, dass jemand dieses Problem bereits gelöst hat — warum die Zeit verschwenden, das Rad neu zu erfinden? Im Übrigen wird eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was sie robuster und browserübergreifend-kompatibler macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder -Framework sein — wie React oder Vue — oder ein sehr kleines Hilfsprogramm wie unsere Bibliothek für menschenlesbare Daten, oder es kann ein Befehlszeilen-Tool wie Prettier oder ESLint sein, über das wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten solche Abhängigkeiten mit einem einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element in Ihr Projekt aufgenommen werden, aber das könnte nicht sofort funktionieren und Sie werden wahrscheinlich einige moderne Werkzeuge benötigen, um Ihren Code und die Abhängigkeiten zusammen zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der im Allgemeinen verwendet wird, um eine einzelne Datei auf Ihrem Webserver zu bezeichnen, die den gesamten JavaScript-Code für Ihre Software enthält — typischerweise so stark wie möglich komprimiert, um die Zeit zu reduzieren, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Hinzu kommt, was passiert, wenn Sie ein besseres Tool finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit wird veröffentlicht, zu der Sie aktualisieren möchten? Dies ist für ein paar Abhängigkeiten nicht allzu schmerzhaft, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich herausfordernd werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dies garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie viele andere Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber um von npm selbst zurückzutreten, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode, um neue Abhängigkeiten zu installieren (auch als „Pakete“ bezeichnet), verwaltet, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet die Möglichkeit, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch könnten Sie ohne einen Paketmanager auskommen und Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager übernimmt nahtlos die Installation und Deinstallation von Paketen. Wenn Sie keinen verwenden würden, müssten Sie manuell Folgendes handhaben:

- Finden aller korrekten JavaScript-Dateien des Pakets.
- Überprüfung, ob sie keine bekannten Sicherheitslücken haben.
- Herunterladen und Platzieren an den richtigen Stellen in Ihrem Projekt.
- Schreiben des Codes, um das/die Paket(e) in Ihrer Anwendung einzuschließen (dies geschieht in der Regel mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), ein weiteres Thema, das sich lohnt zu lesen und zu verstehen).
- Das Gleiche tun für alle Unterabhängigkeiten der Pakete, von denen es Dutzende oder Hunderte geben könnte.
- Entfernen aller Dateien, wenn Sie die Pakete entfernen möchten.

Zusätzlich handhaben Paketmanager doppelte Abhängigkeiten (etwas, das in der Front-End-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile gibt, global zu installieren, sind die Vorteile für die lokale Installation wichtiger — wie beispielsweise Code-Portabilität und Versionssperre.

Zum Beispiel, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen ist, würden Sie sicherstellen wollen, dass diese Konfiguration immer noch funktioniert, wenn Sie dieses Projekt auf einem anderen Rechner installieren oder viel später darauf zurückkommen. Wenn eine andere Version von webpack installiert wäre, könnte sie nicht kompatibel sein. Um dem entgegenzuwirken, werden Abhängigkeiten lokal für ein Projekt installiert.

Um lokale Abhängigkeiten wirklich glänzen zu sehen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie den lokalen Abhängigkeiten zu verdanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mittels eines anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufstrebender Clients, wie [pnpm](https://pnpm.js.org/).

## Paketregistrierungen

Damit ein Paketmanager funktioniert, muss er wissen, von wo aus Pakete installiert werden sollen, und dies geschieht in Form eines Paket-Registrierungsdienstes. Das Register ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und somit installiert werden kann. npm, als Paketmanager, ist auch der Name des am häufigsten verwendeten Paketregisters für JavaScript-Pakete. Das npm-Register existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paketregister verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxys zum npm-Register zu erstellen (damit Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet ebenfalls einen Paketregisterdienst](https://docs.github.com/en/packages), und es wird wahrscheinlich mehr Optionen geben, die im Laufe der Zeit erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie das für Sie beste Register ausgewählt haben. Viele Projekte werden npm verwenden, und wir bleiben dabei in unseren Beispielen im restlichen Modul.

## Nutzung des Paketökosystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Nutzung eines Paketmanagers und -registers zur Installation eines Befehlszeilen-Dienstprogramms zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um weitere Tools einzubeziehen und Ihnen zu zeigen, wie Sie die Seite bereitstellen.

Vite stellt einige [Init-Vorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) zur Verfügung, mit allen notwendigen Abhängigkeiten und Konfigurationen, um schnell in ein echtes Projekt einzusteigen. Zur Demonstration werden wir eine von Grund auf neu einrichten und die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichten der App als npm-Paket

Erstellen Sie zunächst ein neues Verzeichnis, um unsere experimentelle App darin zu speichern, an einem sinnvollen Ort, den Sie leicht wiederfinden können. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Lassen Sie uns als Nächstes unsere App als npm-Paket initialisieren, wodurch eine Konfigurationsdatei — `package.json` — erstellt wird, die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später erneut erstellen möchten, oder sogar das Paket im npm-Register zu veröffentlichen (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln und keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden nun einige Fragen gestellt; npm erstellt dann basierend auf den Antworten eine Standard-`package.json`-Datei. Beachten Sie, dass keine dieser Fragen für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Eingabe</kbd>, um den Standardwert `npm-experiment` anzunehmen.
- `version`: Die Startversion der App. Drücken Sie erneut <kbd>Eingabe</kbd>, um den Standardwert `1.0.0` anzunehmen.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier aus, aber Sie können auch etwas Eigenes eingeben. Drücken Sie <kbd>Eingabe</kbd>.
- `entry point`: Dies ist die JavaScript-Datei, die ausgeführt wird, wenn andere Ihr Paket importieren. Es ist nicht relevant für uns, also drücken Sie einfach <kbd>Eingabe</kbd>.
- `test command`, `git repository`, und `keywords`: Drücken Sie <kbd>Eingabe</kbd>, um jedes dieser Felder vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Eingabe</kbd>.
- `license`: Die Lizenz zur Veröffentlichung des Pakets. Drücken Sie <kbd>Eingabe</kbd>, um den Standardwert für jetzt zu akzeptieren.

Drücken Sie noch einmal <kbd>Eingabe</kbd>, um diese Einstellungen anzunehmen.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten jetzt sehen, dass Sie eine `package.json`-Datei haben. Öffnen Sie sie und sie sollte ungefähr so aussehen:

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

Wir werden zwei weitere Zeilen in `package.json` hinzufügen:

- `"type": "module"`, wodurch Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) anstatt alter CommonJS-Module interpretiert. Allgemein ist es eine gute Gewohnheit, sich daran zu gewöhnen.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich im npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unterhalb der `"name"` ein:

```json
{
  "name": "npm-experiment",
  "type": "module",
  "private": true
  // …
}
```

Dies ist die Konfigurationsdatei, die Ihr Paket definiert. Das ist fürs Erste gut genug, also machen wir weiter.

> [!NOTE]
> [Die package.json-Datei](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine praktische Einführung in die Verwendung von `package.json`-Dateien.

### Installation von Vite

Zunächst werden wir Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bundle für den Browser.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist, werfen Sie einen weiteren Blick auf Ihre Datei `package.json`. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
{
  "devDependencies": {
    "vite": "^5.2.13"
  }
}
```

Dies ist Teil der npm-Magie — wenn Sie in Zukunft Ihren Code an einen anderen Ort, auf einen anderen Computer verschieben, können Sie die gleiche Einrichtung wiederherstellen, indem Sie den Befehl `npm install` ausführen, und npm wird die Abhängigkeiten betrachten und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie werden es nicht in einem anderen Verzeichnis ausführen können. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied spielt für eine Anwendung selten eine Rolle, aber bei einer Bibliothek bedeutet es, dass, wenn andere Ihr Paket installieren, Vite nicht implizit installiert wird. In der Regel ist für Anwendungen jedes in Quellcode importierte Paket eine echte Abhängigkeit, während jedes Paket, das für die Entwicklung verwendet wird (in der Regel als Befehlszeilen-Tools), eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie werden auch sehen, dass einige neue Dateien erstellt wurden:

- `node_modules`: Die Abhängigkeitsdateien, die zum Ausführen von Vite erforderlich sind. npm hat alle für Sie heruntergeladen.
- `package-lock.json`: Eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das `node_modules`-Verzeichnis zu reproduzieren. Dies stellt sicher, dass, solange die Sperrdatei unverändert ist, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich bleibt.

Um diese Dateien brauchen Sie sich keine Sorgen machen, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten generell `package-lock.json` behalten, denn wie bereits erwähnt, wird es verwendet, um den Zustand von `node_modules` auf verschiedenen Maschinen zu synchronisieren.

### Einrichten unserer Beispiel-App

Wie auch immer, weiter mit der Einrichtung.

In Vite ist die Datei `index.html` das zentrale Element. Sie definiert den Ausgangspunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu bauen. Erstellen Sie eine Datei `index.html` in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>My test page</title>
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit zu einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den Ordner `src` und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie ihn aber vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type) ist wichtig. Es weist den Browser an, das Skript als ES-Modul zu behandeln, was uns ermöglicht, `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, da wir im nächsten Artikel den React JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es in reguläres JavaScript umwandeln, so als ob Browser es verstehen würden!

### Spaß mit Vite

Jetzt werden wir unser neu installierte Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

In Ihrem Terminal sollte etwas wie Folgendes angezeigt werden:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, vom gesamten JavaScript-Paketökosystem zu profitieren. Zunächst gibt es jetzt einen lokalen Webserver, der unter `http://localhost:5173` läuft. Sie werden momentan noch nichts sehen, aber das Coole ist, dass Vite beim Ändern Ihrer App diese neu baut und den Server automatisch aktualisiert, sodass Sie sofort sehen können, welche Auswirkungen Ihre Aktualisierung hatte.

Sie können den Entwicklungsserver jederzeit mit <kbd>Strg</kbd> + <kbd>C</kbd> stoppen und mit dem gleichen Befehl neu starten. Wenn Sie sich entscheiden, ihn weiterlaufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt für etwas Seiteninhalt. Um dies zu demonstrieren, fügen wir der Seite ein Diagramm hinzu. Wir verwenden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js), eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie schon vorher erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Befehlszeilentool. Dieser Befehl wird ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzufügen, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir ein Paket für Sie ausgewählt, um unsere Aufgabe zu vervollständigen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, bevor Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, dies mit eingebauten Funktionen zu erreichen, oder ist es einfach genug, um es selbst zu schreiben?
> - Was genau muss ich tun? Je genauer Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere bei der Installation, im Betrieb usw. zu Leistungsproblemen führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren berücksichtigen müssen, wie wahrscheinlich es ist, dass das Paket Updates benötigt oder wie viele Menschen es möglicherweise benötigen.

Fügen Sie im `src/main.jsx`-Datei den folgenden Code hinzu und speichern Sie ihn:

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

Gehen Sie zurück zu `http://localhost:5173` und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und beobachten Sie, wie das Diagramm jedes Mal aktualisiert wird, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion vorbereiten

Dieser Code ist jedoch noch nicht bereit für die Produktion. Die meisten Build-Tool-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied ist, dass viele der hilfreichen Funktionen, die Sie während der Entwicklung verwenden, auf der Endseite nicht benötigt werden und daher für die Produktion entfernt werden, z.B. "Hot Module Replacement", "Live Reloading" und "unkomprimierter und kommentierter Quellcode". Dies sind zwar bei weitem nicht abschließend alle, aber einige der gängigen Webentwicklungsfunktionen, die während der Entwicklungsphase sehr hilfreich sind, aber in der Produktion nicht sehr brauchbar sind. In der Produktion würden sie Ihre Seite nur aufblähen.

Stoppen Sie nun den laufenden Vite-Entwicklungsserver mit <kbd>Strg</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere minimalistische Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu erzeugen, die für die Veröffentlichung geeignet sind.

Führen Sie den folgenden Befehl aus:

```bash
npx vite build
```

Sie sollten etwa folgende Ausgabe sehen:

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

Vite wird ein Verzeichnis namens `dist` erstellen. Wenn Sie hineinschauen, enthält es eine `index.html`, die der Hauptseite sehr ähnlich sieht, außer dass die Quelle des `script` nun durch einen Pfad zum `assets`-Ordner ersetzt wird. Der Ordner `assets` enthält das transformierte JavaScript-Output, welches jetzt für die Produktion minimiert und optimiert ist.

> [!NOTE]
> Sie könnten sich wegen der Warnung Sorgen machen, dass es einen Chunk gibt, der zu groß ist. Das ist zu erwarten, da wir eine Bibliothek laden, die viele Dinge im Hintergrund ausführt (stellen Sie sich vor, Sie würden den gesamten Code selbst schreiben, um das gleiche Diagramm zu zeichnen). Derzeit brauchen wir uns keine Sorgen darum machen.

## Ein grober Leitfaden zu Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es lohnt sich zumindest zu wissen, dass sie existieren und eine grobe Vorstellung von den gemeinsamen Befehlen über die Tools zu haben. Sie haben einige bereits in Aktion gesehen, aber schauen wir uns die anderen an.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind von der Befehlszeilenansicht aus ähnlich — in der Tat zielt pnpm darauf ab, vollständige Parität über die Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich dadurch, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, um den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den untenstehenden Beispielen gezeigt wird, kann pnpm eingetauscht werden und der Befehl wird funktionieren.

Yarn wird oft als schneller angesehen als npm im Hinblick auf den Installationsprozess (obwohl Ihre persönlichen Erfahrungen variieren können). Das ist für Entwickler wichtig, da eine erhebliche Menge an Zeit mit dem Warten darauf verschwendet werden kann, dass Abhängigkeiten installiert (und auf den Computer kopiert) werden.

Es ist jedoch wichtig zu beachten, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können das gleiche `package.json`-Format wie npm verwenden und können jedes Paket aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die häufigen Aktionen überprüfen, die Sie mit Paketmanagern durchführen möchten.

> [!NOTE]
> Wir zeigen sowohl npm- als auch Yarn-Befehle. Sie sind nicht für dasselbe Projekt gedacht. Sie sollten Ihr Projekt mit entweder npm oder Yarn einrichten und konsequent Befehle von diesem Paketmanager benutzen.

### Initialisieren eines neuen Projekts

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dieser Befehl Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann eine `package.json` für Sie erstellen, die Meta-Informationen über Ihr Projekt und dessen Abhängigkeiten enthält.

### Installieren von Abhängigkeiten

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch oben in Aktion gesehen. Dies würde das `vite`-Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` zusammen mit den eigenen Abhängigkeiten von `vite` hinzufügen.

Standardmäßig wird dieser Befehl die neueste Version von `vite` installieren, aber Sie können dies ebenfalls steuern. Sie können nach `vite@4` fragen, was Ihnen die neueste 4.x-Version gibt (welche 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (dieselbe Bedeutung wie oben).

### Aktualisieren von Abhängigkeiten

```bash
npm update
yarn upgrade
```

Dieser Befehl wird sich die aktuell installierten Abhängigkeiten ansehen und sie aktualisieren, wenn ein Update verfügbar ist und im Bereich liegt, der im Paket festgelegt ist.

Der Bereich ist in der Version der Abhängigkeit in Ihrer `package.json` festgelegt, wie z.B. `"vite": "^5.2.13"` — in diesem Fall bedeutet das Zirkumflex-Zeichen `^` alle kleineren und Patch-Release-Versionen nach und einschließlich 5.2.13, bis aber nicht einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das aus der Dokumentation heraus ein wenig kompliziert aussehen mag, aber vereinfacht werden kann, indem man nur die Zusammenfassungsinformationen betrachtet und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie z.B. 2.0.1, was Hauptversion 2 mit Patch-Version 1 ist. Eine ausgezeichnete Möglichkeit, semver-Werte auszuprobieren, ist die Verwendung des [semver-Rechners](https://semver.npmjs.com/).

Es ist wichtig zu beachten, dass `npm update` die Abhängigkeiten nicht über den Bereich hinaus aktualisieren wird, der in der `package.json` definiert ist — um dies zu tun, müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online erfahren. Erneut werden [pnpm](https://pnpm.io/cli/add) Befehle Parität mit npm haben, mit einer Handvoll an Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch die Erstellung eigener Befehle und deren Ausführung von der Befehlszeile aus. Zum Beispiel hatten wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dieser Befehl würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. Tatsächlich fügen wir diesen Befehl regelmäßig allen Projekten hinzu, da die lokale Entwicklungsumgebung oft geringfügig anders läuft als in der Produktion.

Wenn Sie versuchen, dies in Ihrem Testprojekt von früher auszuführen, würde es (wahrscheinlich) behaupten, das "dev-Skript fehlt". Das liegt daran, dass npm, Yarn (und dergleichen) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Also lassen Sie uns einen benutzerdefinierten Kurzbefehler — "dev" — in unserer `package.json` erstellen. Wenn Sie das Tutorial von früher gefolgt haben, sollten Sie eine `package.json`-Datei in Ihrem npm-Experimentenverzeichnis haben. Öffnen Sie es und der `scripts`-Eintrag sollte so aussehen:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Aktualisieren Sie es so, dass es so aussieht, und speichern Sie die Datei:

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

Wir haben einen benutzerdefinierten `dev`-Befehl als npm-Script hinzugefügt.

Versuchen Sie nun, den folgenden Befehl in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm run dev
```

Dies sollte Vite starten und den gleichen lokalen Entwicklungsserver starten, wie wir es zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript nicht mehr das `npx`-Präfix benötigt. Das liegt daran, dass npm (und yarn) Befehle clever sind, dass sie nach Befehlszeilen-Tools, die lokal zum Projekt installiert sind, suchen, bevor sie versuchen, sie durch konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und sie auffindbar macht). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/commands/npm-run/), obwohl in den meisten Fällen Ihre eigenen Skripte problemlos laufen sollten.

Dieser spezielle Befehl mag unnötig erscheinen — `npm run dev` sind mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in Zukunft mehr Arbeit in das `dev`-Kommando einzubringen, wie z.B. das Setzen von Umgebungsvariablen, das Generieren von temporären Dateien usw., ohne den Befehl zu komplizieren.

Sie können alle möglichen Dinge zur `scripts`-Eigenschaft hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Zum Beispiel, hier ist, was Vite in der Vorlage empfiehlt:

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

Damit kommen wir zum Ende unserer Tour zu Paketmanagern. Unser nächster Schritt ist es, eine Beispieltoolchain aufzubauen, um alles, was wir bisher gelernt haben, in die Praxis umzusetzen.

## Siehe auch

- [npm-Skripte Referenzen](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
