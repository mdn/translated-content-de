---
title: Grundlagen des Paketmanagements
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
l10n:
  sourceCommit: 3d2cd62710699f455811feb389b474e90218605d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel werden wir Paketmanager genauer betrachten, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können — um Abhängigkeiten von Projektwerkzeugen zu installieren, sie auf dem neuesten Stand zu halten und mehr.

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

Eine **Abhängigkeit** ist ein Drittanbieter-Softwareteil, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, angefangen von keiner bis hin zu vielen, und Ihre Abhängigkeiten können Sub-Abhängigkeiten beinhalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können eigene Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt möglicherweise benötigt, ist ein Code zur Berechnung relativer Daten als menschenlesbarer Text. Sie könnten diesen sicher selbst programmieren, aber die Wahrscheinlichkeit ist groß, dass bereits jemand anderes dieses Problem gelöst hat — warum Zeit verschwenden, das Rad neu zu erfinden? Außerdem wurde eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet, was sie robuster und browserübergreifender kompatibel macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Dienstprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann ein Befehlszeilenwerkzeug wie Prettier oder ESLint sein, die wir in früheren Artikeln besprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese möglicherweise in Ihr Projekt über ein einfaches [`<script>`](/de/docs/Web/HTML/Element/script)-Element eingebunden werden, aber dies funktioniert möglicherweise nicht auf Anhieb und Sie benötigen wahrscheinlich einige moderne Werkzeuge, um Ihren Code und die Abhängigkeiten zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der im Allgemeinen verwendet wird, um eine einzelne Datei auf Ihrem Webserver zu bezeichnen, die den gesamten JavaScript-Code für Ihre Software enthält — in der Regel so weit wie möglich komprimiert, um die Zeit zu reduzieren, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Werkzeug finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, auf die Sie aktualisieren möchten? Dies ist nicht allzu schmerzhaft bei ein paar Abhängigkeiten, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich herausfordernd werden, dies im Blick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dies garantieren wird, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Vielzahl anderer Vorteile.

## Was genau ist ein Paketmanager?

Wir haben bereits npm kennengelernt, aber wenn wir einen Schritt zurück von npm selbst machen, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode zum Installieren neuer Abhängigkeiten (auch als "Pakete" bezeichnet), verwaltet, wo die Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Möglichkeiten, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager übernimmt die nahtlose Installation und Deinstallation von Paketen. Wenn Sie keinen verwenden würden, müssten Sie Folgendes manuell regeln:

- Alle korrekten Paket-JavaScript-Dateien finden.
- Sie überprüfen, um sicherzustellen, dass sie keine bekannten Schwachstellen aufweisen.
- Sie herunterladen und an den richtigen Stellen in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihre Anwendung einzubinden (dies wird tendenziell mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, über das es sich zu lesen und verstehen lohnt).
- All dasselbe für alle Sub-Abhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorigen Artikel schon angesprochen haben, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es dazu neigt, mehr Vorteile für die globale Installation zu geben, sind die Vorteile der lokalen Installation wichtiger — wie z.B. Portabilität des Codes und Versionssperre.

Zum Beispiel, wenn Ihr Projekt auf Webpack mit einer bestimmten Konfiguration angewiesen ist, würden Sie sicherstellen wollen, dass, wenn Sie dieses Projekt auf einem anderen Rechner installieren oder viel später darauf zurückkommen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von Webpack installiert wäre, könnte sie nicht kompatibel sein. Um dies zu mildern, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten wirklich glänzen zu sehen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, haben Sie den lokalen Abhängigkeiten zu verdanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufkommender Clients wie [pnpm](https://pnpm.js.org/).

## Paketregistrierungen

Damit ein Paketmanager funktioniert, muss er wissen, woher er Pakete installieren soll, und dies geschieht in Form eines Paketregisters. Das Register ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und von dem es installiert werden kann. npm, ebenso ein Paketmanager, ist auch der Name des am häufigsten verwendeten Paketregisters für JavaScript-Pakete. Das npm-Register existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paketregister verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxies zum npm-Register zu erstellen (damit Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet auch einen Paketregisterdienst](https://docs.github.com/en/packages), und es wird wahrscheinlich mehr Optionen geben, die im Laufe der Zeit auftauchen.

Wichtig ist, dass Sie sicherstellen, dass Sie das beste Register für sich ausgewählt haben. Viele Projekte werden npm verwenden, und wir werden dies in unseren Beispielen für den Rest des Moduls beibehalten.

## Nutzung des Paketsystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Nutzung eines Paketmanagers und -registers zur Installation eines Befehlszeilen-Dienstprogramms zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um weitere Werkzeuge hinzuzufügen und Ihnen zu zeigen, wie Sie die Site bereitstellen.

Vite bietet einige [Init-Vorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen, um Sie schnell in einem realen Projekt zu starten. Zur Demonstration werden wir eine von Grund auf konfigurieren, wobei wir die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichtung der App als npm-Paket

Zuerst erstellen Sie ein neues Verzeichnis, um unsere experimentelle App an einem sinnvollen Ort zu speichern, den Sie wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes initialisieren wir unsere App als npm-Paket, was eine Konfigurationsdatei erstellt — `package.json` — die es uns erlaubt, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später erneut erstellen oder sogar das Paket im npm-Register veröffentlichen wollen (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln und nicht eine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Nun werden Ihnen einige Fragen gestellt, npm erstellt dann eine Standard-`package.json`-Datei basierend auf den Antworten. Beachten Sie, dass keine dieser für unsere Zwecke von Bedeutung ist, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer für die App. Drücken Sie erneut <kbd>Return</kbd>, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier weg, aber Sie können auch alles eingeben, was Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Für uns hat es keine Verwendung, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: drücken Sie <kbd>Return</kbd>, um jedes dieser Felder für jetzt leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht werden soll. Drücken Sie <kbd>Return</kbd>, um für jetzt den Standard zu akzeptieren.

Drücken Sie noch einmal <kbd>Return</kbd> um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten nun eine package.json-Datei finden. Öffnen Sie sie und sie sollte ungefähr so aussehen:

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

Wir werden der package.json zwei weitere Zeilen hinzufügen:

- `"type": "module"`, was Node dazu bringt, alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) anstelle der alten CommonJS-Module zu interpretieren. Es ist eine allgemein gute Angewohnheit.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich im npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unterhalb des `"name"`-Eintrags hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

So dies ist die Konfigurationsdatei, die Ihr Paket definiert. Das ist gut für jetzt, also machen wir weiter.

### Installation von Vite

Wir werden zunächst Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Paket für den Browser.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist, werfen Sie einen weiteren Blick in Ihre package.json-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Das ist Teil von npms Magie — wenn Sie in Zukunft Ihren Code an einem anderen Ort, auf einem anderen Computer, verschieben, können Sie dieselbe Umgebung reproduzieren, indem Sie den Befehl `npm install` ausführen, und npm wird die Abhängigkeiten betrachten und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied ist für eine Anwendung selten von Bedeutung, aber für eine Bibliothek bedeutet es, dass, wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren. Normalerweise ist für Anwendungen jedes in den Quellcode importierte Paket eine reale Abhängigkeit, während jedes für die Entwicklung verwendete Paket (normalerweise als Befehlszeilenwerkzeuge) eine Entwicklungsabhängigkeit ist. Installieren Sie reale Abhängigkeiten, indem Sie die `--save-dev`-Flagge entfernen.

Sie werden auch eine Reihe neuer Dateien finden:

- `node_modules`: Die Abhängigkeitsdateien, die zum Ausführen von Vite erforderlich sind. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine sperrDatei, die die exakten Informationen speichert, die erforderlich sind, um das `node_modules`-Verzeichnis zu reproduzieren. Dies stellt sicher, dass, solange die SperrDatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich ist.

Diese Dateien müssen Sie sich keine Sorgen machen, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten `package-lock.json` im Allgemeinen behalten, weil, wie erwähnt, es zur Synchronisation des `node_modules`-Zustands auf verschiedenen Maschinen verwendet wird.

### Einrichtung unserer Beispiel-App

Jedenfalls, weiter mit der Einrichtung.

In Vite ist die `index.html`-Datei zentral. Sie definiert den Startpunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die zum Erstellen Ihrer App benötigt werden. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis, und geben Sie ihr folgenden Inhalt:

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

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit von einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App erklärt. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, aber lassen Sie ihn für jetzt leer.

> [!NOTE]
> Das [`type="module"`](/de/docs/Web/HTML/Element/script/type)-Attribut ist wichtig. Es sagt dem Browser, dass das Skript als ES-Modul behandelt werden soll, was uns ermöglicht, die `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, weil wir im nächsten Artikel React JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es für uns in reguläres JavaScript umwandeln, als ob Browser es täten!

### Spaß mit Vite

Jetzt werden wir unser neu installiertes Vite-Werkzeug ausführen. Geben Sie in Ihrem Terminal den folgenden Befehl ein:

```bash
npx vite
```

Sie sollten in Ihrem Terminal etwas Ähnliches sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Nun sind wir bereit, von dem vollständigen JavaScript-Paket-Ökosystem zu profitieren. Erstens läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber was cool ist, dass, wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu baut und den Server automatisch aktualisiert, sodass Sie sofort den Effekt Ihrer Änderung sehen können.

Sie können den Dev-Server jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und ihn mit demselben Befehl erneut starten. Wenn Sie sich entscheiden, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Nun zum Seiteninhalt. Als Demonstration fügen wir der Seite ein Diagramm hinzu. Wir werden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket verwenden, eine Datenvisualisierungsbibliothek. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne die `--save-dev`-Flagge installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden und nicht nur als Befehlszeilenwerkzeug. Dieser Befehl wird Ihrem `package.json`-Dateiobjekt `dependencies` ein neues Objekt hinzufügen, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe abzuschließen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu machen, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher ist es, dass Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Prüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist, und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit der Erfahrung kommt, weil Sie Faktoren wie die Wahrscheinlichkeit berücksichtigen müssen, dass das Paket Updates benötigt, oder wie viele Menschen es benötigen könnten.

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

Rufen Sie `http://localhost:5173` erneut auf und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie das Diagramm jedes Mal aktualisiert wird, wenn Sie Ihre Datei speichern.

### Unsere App für die Produktion bereit machen

Dieses Code ist jedoch noch nicht bereit für die Produktion. Die meisten Build-Tool-Systeme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied besteht darin, dass viele der hilfreichen Funktionen, die Sie bei der Entwicklung verwenden werden, im Endprodukt nicht benötigt werden und für die Produktion entfernt werden, z. B. "Hot Module Replacement", "Live Reloading" und "Unkomprimierter und kommentierter Quellcode". Obwohl keineswegs erschöpfend, sind dies einige der häufigen Webentwicklungsfunktionen, die im Entwicklungsstadium sehr hilfreich sind, aber in der Produktion nicht sehr nützlich sind. In der Produktion würden sie Ihre Seite nur aufblähen.

Stoppen Sie nun den laufenden Vite-Dev-Server mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere Minimale Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie hineinschauen, enthält es eine `index.html`, die sehr ähnlich aussieht wie das Root-Verzeichnis, außer dass der `script`-Quelle nun durch einen Pfad zum `assets`-Ordner ersetzt wird. Der `assets`-Ordner enthält transformierten JavaScript-Output, der nun für die Produktion minifiziert und optimiert wurde.

> [!NOTE]
> Sie machen sich vielleicht Sorgen über die Warnung, dass es ein Chunk gibt, das zu groß ist. Dies wird erwartet, da wir eine Bibliothek laden, die eine Menge Dinge im Hintergrund macht (stellen Sie sich vor, Sie würden den ganzen Code selbst schreiben, um das gleiche Diagramm zu zeichnen). Für jetzt müssen wir uns keine Sorgen machen.

## Ein grober Leitfaden zu Paketmanager-Clients

In diesem Tutorial wurde das Vite-Paket mit npm installiert, aber wie bereits erwähnt gibt es einige Alternativen. Es lohnt sich zumindest zu wissen, dass sie existieren und eine vage Vorstellung von den gemeinsamen Befehlen der Tools zu haben. Einige haben Sie bereits in Aktion gesehen, aber lassen Sie uns die anderen betrachten.

Die Liste wird mit der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Hauptpaketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind von einem Befehlszeilenstandpunkt aus ähnlich — in der Tat strebt pnpm an, vollständige Parität über die Argumentoptionen zu bieten, die npm bietet. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, mit dem Ziel, den insgesamt benötigten Festplattenspeicher zu reduzieren.

Wo npm in den folgenden Beispielen angezeigt wird, kann pnpm ersetzt werden und der Befehl wird funktionieren.

Yarn wird oft als schneller im Installationsprozess angesehen als npm (obwohl Ihre Erfahrung variieren kann). Dies ist für Entwickler wichtig, da es eine erhebliche Menge an Zeitverschwendung durch Warten auf die Installation von Abhängigkeiten (und das Kopieren auf den Computer) geben kann.

Es ist jedoch wichtig zu beachten, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden und können jedes Paket aus dem npm- und anderen Paketregistern installieren.

Lassen Sie uns die häufigen Aktionen überprüfen, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und Befehle von diesem Paketmanager konsequent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.) und dann eine `package.json` generieren, die Meta-Informationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch zuvor in Aktion gesehen. Dies würde direkt das `vite`-Paket in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste Version 4.x gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die aktuell installierten Abhängigkeiten betrachten und sie aktualisieren, wenn ein Update innerhalb des im Paket spezifizierten Bereichs verfügbar ist.

Der Bereich wird durch die Versionsangabe der Abhängigkeit in Ihrer `package.json` spezifiziert, wie `"vite": "^5.2.13"` — in diesem Fall bedeutet das Dach-Symbol `^`, dass alle kleineren und Patch-Versionen nach und einschließlich 5.2.13, bis aber ausschließlich 6.0.0.

Dies wird unter Verwendung eines Systems namens [semver](https://semver.org/) bestimmt, das aus der Dokumentation zwar kompliziert erscheinen mag, aber vereinfacht werden kann, indem man nur die Zusammenfassungsinformationen betrachtet und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie z. B. 2.0.1, was Hauptversion 2 mit Patchversion 1 bedeutet. Ein hervorragender Weg, um semver-Werte auszuprobieren, ist die Nutzung des [semver-Rechners](https://semver.npmjs.com/).

Es ist wichtig zu beachten, dass `npm update` die Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisieren wird — um dies zu tun, müssen Sie diese Version speziell installieren.

### Mehr Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online erfahren. Erneut, [pnpm](https://pnpm.io/cli/add)-Befehle werden Parität mit npm haben, mit einer Handvoll Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch die Erstellung eigener Befehle und deren Ausführung aus der Befehlszeile. Zum Beispiel riefen wir zuvor den Befehl `vite` mit `npx` auf, um den Vite-Dev-Server zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript ausführen, um unser Projekt im "Entwicklungsmodus" zu starten. Tatsächlich fügen wir dies regelmäßig in alle Projekte ein, da die lokale Entwicklungsumgebung dazu neigt, etwas anders zu laufen als sie in der Produktion laufen würde.

Wenn Sie versuchen, dies in Ihrem früher getesteten Projekt auszuführen, würde es (wahrscheinlich) behaupten, dass das "dev script fehlt". Dies liegt daran, dass npm, Yarn (und dergleichen) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Lassen Sie uns also einen benutzerdefinierten Abkürzungsbefehl — "dev" — in unserer `package.json` erstellen. Wenn Sie dem Tutorial von früher gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment-Verzeichnis haben. Öffnen Sie es und sein `scripts`-Mitglied sollte so aussehen:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Aktualisieren Sie es so, dass es folgendermaßen aussieht und speichern Sie die Datei:

```json
"scripts": {
  "dev": "vite"
},
```

Wir haben ein benutzerdefiniertes `dev`-Kommando als npm-Skript hinzugefügt.

Versuchen Sie nun, das Folgende in Ihrem Terminal auszuführen, und achten Sie darauf, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, wie wir zuvor gesehen haben.

Beachten Sie, dass das Skript, das wir hier definiert haben, keinen `npx`-Präfix mehr benötigt. Dies liegt daran, dass npm (und yarn) Befehle klug genug sind, dass sie nach Befehlszeilenwerkzeugen suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie über konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und zulässt, dass sie gefunden wird). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl in den meisten Fällen Ihre eigenen Skripts einfach gut laufen werden.

Dieses spezielle könnte unnötig erscheinen — `npm run dev` hat mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form von _Abstraktion_. Es ermöglicht es uns, in Zukunft mehr Arbeit zum `dev`-Befehl hinzuzufügen, wie z.B. das Setzen von Umgebungsvariablen, das Generieren von temporären Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können alle Arten von Dingen zur `scripts`-Eigenschaft hinzufügen, die Ihnen helfen, Ihre Arbeit zu erledigen. Zum Beispiel, hier ist, was Vite in der Vorlage empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit endet unsere Erkundung der Paketmanager. Unser nächster Schritt ist es, eine Beispiel-Toolchain aufzubauen, und alles, was wir bisher gelernt haben, in die Praxis umzusetzen.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## Siehe auch

- [npm scripts Referenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
