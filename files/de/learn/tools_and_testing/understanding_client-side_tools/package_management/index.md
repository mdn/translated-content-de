---
title: Grundlagen des Paketmanagements
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager im Detail, um zu verstehen, wie wir sie in unseren eigenen Projekten nutzen können – um Projekt-Tool-Abhängigkeiten zu installieren, sie auf dem neuesten Stand zu halten und mehr.

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
        Zu verstehen, was Paketmanager und Paket-Repositories sind, warum sie benötigt werden und die Grundlagen ihrer Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwareteil, der wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, von keinen bis zu vielen, und Ihre Abhängigkeiten könnten Unterabhängigkeiten einschließen, die Sie nicht ausdrücklich installiert haben – Ihre Abhängigkeiten können eigene Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist Code, der relative Daten als menschenlesbaren Text berechnet. Sie könnten dies sicherlich selbst programmieren, aber es ist sehr wahrscheinlich, dass jemand anderes dieses Problem bereits gelöst hat – warum Zeit mit der Neuerfindung des Rades verschwenden? Darüber hinaus wird eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was sie robuster und browserübergreifender kompatibel macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein – wie React oder Vue – oder ein sehr kleines Dienstprogramm wie unsere menschenlesbare Datumsbibliothek, oder es kann ein Kommandozeilen-Tool wie Prettier oder ESLint sein, über das wir in vorherigen Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese in Ihrem Projekt mit einem einfachen [`<script>`](/de/docs/Web/HTML/Element/script)-Element eingefügt werden, aber dies könnte nicht sofort funktionieren und Sie werden wahrscheinlich einige moderne Werkzeuge benötigen, um Ihren Code und Ihre Abhängigkeiten zusammenzubündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der allgemein verwendet wird, um auf eine einzelne Datei auf Ihrem Webserver zu verweisen, die den gesamten JavaScript-Code für Ihre Software enthält – typischerweise so stark wie möglich komprimiert, um die Zeit zu verkürzen, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Tool finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit veröffentlicht wird, die Sie aktualisieren möchten? Dies ist bei ein paar Abhängigkeiten nicht allzu schmerzhaft, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich schwierig werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Reihe anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir sind [npm](https://www.npmjs.com/) bereits begegnet, aber abgesehen von npm selbst ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager wird eine Methode bereitstellen, um neue Abhängigkeiten (auch als "Pakete" bezeichnet) zu installieren, zu verwalten, wo Pakete auf Ihrem Dateisystem gespeichert sind, und Ihnen Möglichkeiten bieten, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird nahtlos die Installation und Deinstallation von Paketen übernehmen. Wenn Sie keinen verwenden, müssten Sie dies manuell durchführen:

- Finden Sie alle richtigen JavaScript-Dateien des Pakets.
- Überprüfen Sie sie, um sicherzustellen, dass sie keine bekannten Schwachstellen haben.
- Laden Sie sie herunter und platzieren Sie sie an den richtigen Stellen in Ihrem Projekt.
- Schreiben Sie den Code, um das Paket/die Pakete in Ihre Anwendung einzubinden (dies wird normalerweise mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, das es wert ist, gelesen und verstanden zu werden).
- Machen Sie dasselbe für alle Subeabhängigkeiten der Pakete, von denen es Dutzende oder Hunderte geben könnte.
- Entfernen Sie alle Dateien erneut, wenn Sie die Pakete entfernen möchten.

Darüber hinaus verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie im vorherigen Artikel erwähnt, können Abhängigkeiten global oder lokal zu Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für die globale Installation gibt, sind die Vorteile der lokalen Installation wichtiger – wie Codeportabilität und Versions-Sperrung.

Zum Beispiel, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einem anderen Rechner installieren oder es viel später erneut darauf zugreifen, die Konfiguration immer noch funktioniert. Wenn eine andere Version von webpack installiert war, könnte sie nicht kompatibel sein. Um dies abzumildern, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten wirklich glänzen zu sehen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen – wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie den lokalen Abhängigkeiten zu verdanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, was zu einem schnelleren Benutzererlebnis führen kann. Es gibt auch eine Reihe anderer aufkommender Clients, wie z.B. [pnpm](https://pnpm.js.org/).

## Paketregister

Damit ein Paketmanager funktioniert, muss er wissen, woher die Pakete installiert werden sollen, und das geschieht in Form eines Paketregisters. Das Register ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und somit installiert werden kann. npm, als Paketmanager, ist auch der Name des am häufigsten verwendeten Paketregisters für JavaScript-Pakete. Das npm-Register befindet sich unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihr eigenes Paketregister verwalten – Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxys für das npm-Register zu erstellen (so dass Sie bestimmte Pakete überschreiben oder sperren können). Auch [GitHub bietet einen Paketregisterdienst an](https://docs.github.com/en/packages), und es werden wahrscheinlich im Laufe der Zeit weitere Optionen erscheinen.

Wichtig ist, dass Sie sicherstellen, dass Sie das für Sie beste Register gewählt haben. Viele Projekte nutzen npm, und wir werden uns in unseren Beispielen im Rest des Moduls darauf beschränken.

## Nutzung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Nutzung eines Paketmanagers und -registers zur Installation eines Kommandozeilenprogramms zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um weitere Tools hinzuzufügen und Ihnen zeigen, wie Sie die Website bereitstellen.

Vite stellt einige [init-Vorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen notwendigen Abhängigkeiten und Konfigurationen bereit, um Ihnen den Einstieg in ein reales Projekt zu erleichtern. Aus Demonstrationsgründen werden wir eine von Grund auf konfigurieren und die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz verwenden.

### Einrichtung der App als npm-Paket

Erstellen Sie zunächst ein neues Verzeichnis, um unsere experimentelle App zu speichern, irgendwo sinnvoll, wo Sie es wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als nächstes lassen Sie uns unsere App als npm-Paket initialisieren, was eine Konfigurationsdatei erstellt — `package.json` — die es uns ermöglicht, unsere Konfigurationsdetails zu speichern, falls wir diese Umgebung später nachbilden oder sogar das Paket an das npm-Register veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung entwickeln, keine wiederverwendbare Bibliothek).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden nun einige Fragen gestellt; npm wird dann eine Standard-`package.json`-Datei basierend auf den Antworten erstellen. Beachten Sie, dass keine davon für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Register veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifikation der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversion für die App. Drücken Sie erneut <kbd>Return</kbd>, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen sie hier weg, aber Sie können auch etwas anderes eingeben. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Sie hat für uns keinen Nutzen, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jede dieser Leerzeichen zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht wird. Drücken Sie <kbd>Return</kbd>, um den Standard vorerst zu akzeptieren.

Drücken Sie noch einmal <kbd>Return</kbd>, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten nun eine `package.json`-Datei finden. Öffnen Sie sie und sie sollte etwa so aussehen:

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

Wir werden zwei weitere Zeilen zu package.json hinzufügen:

- `"type": "module"`, was dazu führt, dass Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert, anstatt der alten CommonJS-Module. Es ist eine allgemein gute Angewohnheit, dies zu tun.
- `"private": true`, was verhindert, dass Sie Ihr Paket versehentlich ans npm-Register veröffentlichen.

Fügen Sie diese Zeilen direkt unter dem `"name"` ein:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Das ist also die Konfigurationsdatei, die Ihr Paket definiert. Das ist jetzt gut, also machen wir weiter.

### Installation von Vite

Wir werden zuerst Vite installieren, das Build-Tool für unsere Website. Es ist verantwortlich für das Bündeln unserer HTML-, CSS- und JavaScript-Dateien in ein optimiertes Bündel für den Browser.

```bash
npm install --save-dev vite
```

Wenn das erledigt ist _All The Things_, schauen Sie sich Ihre package.json-Datei noch einmal an. Sie werden sehen, dass npm ein neues Feld namens `devDependencies` hinzugefügt hat:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Das ist Teil des npm-Zaubers – wenn Sie in der Zukunft Ihren Code an einen anderen Ort verschieben, auf einem anderen Rechner, können Sie das gleiche Setup durch Ausführen des Befehls `npm install` wiederherstellen, und npm wird sich die Abhängigkeiten ansehen und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur innerhalb unserer `npm-experiment`-App verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir `vite` als Entwicklungsabhängigkeit installieren. Dieser Unterschied spielt bei einer Anwendung selten eine Rolle, aber bei einer Bibliothek bedeutet es, dass wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren. Normalerweise ist bei Anwendungen jedes in den Quellcode importierte Paket eine echte Abhängigkeit, während jedes für die Entwicklung verwendete Paket (in der Regel als Kommandozeilenwerkzeuge) eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das Flag `--save-dev` entfernen.

Sie werden auch feststellen, dass eine Reihe neuer Dateien erstellt wurde:

- `node_modules`: Die für den Betrieb von Vite benötigten Abhängigkeitsdateien. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die erforderlich sind, um das `node_modules`-Verzeichnis zu reproduzieren. Dies stellt sicher, dass solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich ist.

Sie müssen sich um diese Dateien nicht kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten generell `package-lock.json` aufbewahren, denn wie erwähnt wird es verwendet, um den Zustand von `node_modules` auf verschiedenen Maschinen zu synchronisieren.

### Einrichtung unserer Beispiel-App

Wie auch immer, weiter mit der Einrichtung.

In Vite ist die `index.html`-Datei im Vordergrund und zentral. Sie definiert den Ausgangspunkt Ihrer App, und Vite wird sie verwenden, um andere Dateien zu finden, die benötigt werden, um Ihre App zu erstellen. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass die `<script>`-Elemente eine Abhängigkeit von einer Datei namens `src/main.jsx` erzeugen, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den `src`-Ordner und erstellen Sie `main.jsx` in diesem Ordner, lassen Sie ihn aber vorerst leer.

> [!NOTE]
> Das [`type="module"`](/de/docs/Web/HTML/Element/script/type)-Attribut ist wichtig. Es teilt dem Browser mit, das Skript als ES-Modul zu behandeln, was es uns ermöglicht, `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, da wir im nächsten Artikel React JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es in reguläres JavaScript umwandeln, als ob Browser dies tun würden!

### Spaß mit Vite haben

Jetzt werden wir unser neu installiertes Vite-Tool ausführen. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

Sie sollten etwas in dieser Art in Ihrem Terminal gedruckt sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, von dem vollständigen JavaScript-Paket-Ökosystem zu profitieren. Zum Beispiel gibt es jetzt einen lokalen Webserver, der unter `http://localhost:5173` läuft. Sie werden zunächst nichts sehen, aber was cool ist, ist, dass wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu baut und den Server automatisch aktualisiert, so dass Sie sofort die Wirkung Ihrer Aktualisierung sehen können.

Sie können den Entwicklungsserver jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und ihn erneut mit demselben Befehl starten. Wenn Sie sich entscheiden, ihn weiterhin laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Nun für einige Seiteninhalte. Zum Vorführen fügen wir der Seite ein Diagramm hinzu. Wir werden das [plotly.js](https://www.npmjs.com/package/plotly.js)-Paket verwenden, eine Bibliothek zur Datenvisualisierung. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Kommandozeilen-Tool. Dieser Befehl wird ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzufügen, das `plotly.js-dist-min` enthält.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu vervollständigen. Wenn Sie Ihren eigenen Code schreiben, denken Sie an folgende Fragen, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Brauche ich überhaupt eine Abhängigkeit? Ist es möglich, es mit integrierten Funktionen zu machen, oder ist es so einfach, dass ich es selbst schreiben kann?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher werden Sie ein Paket finden, das genau das tut, was Sie brauchen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Prüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen, ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren berücksichtigen müssen, wie wahrscheinlich das Paket Aktualisierungen benötigt, oder wie viele Menschen es benötigen könnten.

In der Datei `src/main.jsx` fügen Sie den folgenden Code hinzu und speichern Sie ihn:

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

Gehen Sie zurück zu `http://localhost:5173` und Sie werden ein Diagramm auf der Seite sehen. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie sich das Diagramm jedes Mal aktualisiert, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion vorbereiten

Dieser Code ist jedoch nicht bereit für die Produktion. Die meisten Build-Toolsysteme, einschließlich Vite, haben einen "Entwicklungsmodus" und einen "Produktionsmodus". Der wichtige Unterschied besteht darin, dass viele der hilfreichen Funktionen, die Sie während der Entwicklung verwenden, nicht auf der endgültigen Seite benötigt werden und daher für die Produktion entfernt werden, z.B. "hot module replacement", "live reloading" und "uncompressed and commented source code". Diese sind bei Weitem nicht erschöpfend, aber dies sind einige der häufigen Webentwicklungs-Funktionen, die sehr hilfreich in der Entwicklungsphase sind, aber in der Produktion nicht sehr nützlich sind. In der Produktion würden sie Ihre Seite nur aufblähen.

Stoppen Sie jetzt den laufenden Entwicklungsserver von Vite mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können nun unsere minimalistische Beispielseite für eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie hineinschauen, enthält es ein `index.html`, das dem ursprünglichen sehr ähnlich sieht, außer dass die Quelle des `script` jetzt mit einem Pfad zum `assets`-Verzeichnis ersetzt ist. Das `assets`-Verzeichnis enthält den transformierten JavaScript-Ausgabe, der jetzt minimiert und für die Produktion optimiert ist.

> [!NOTE]
> Sie könnten darüber besorgt sein, dass es eine Warnung gibt, dass ein Chunk zu groß ist. Dies ist zu erwarten, da wir eine Bibliothek laden, die viele Dinge im Hintergrund macht (stellen Sie sich vor, Sie schreiben den gesamten Code selbst, um dieselbe Grafik zu zeichnen). Für den Moment müssen wir uns keine Sorgen darüber machen.

## Ein grober Leitfaden zu Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie bereits erwähnt gibt es einige Alternativen. Es ist zumindest sinnvoll zu wissen, dass sie existieren und eine vage Vorstellung von den allgemeinen Befehlen der Tools zu haben. Sie haben bereits einige in Aktion gesehen, aber lassen Sie uns die anderen betrachten.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt der Erstellung sind die folgenden Haupt-Paketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus einer Befehlszeilenperspektive ähnlich — tatsächlich strebt pnpm an, volle Parität über die Argumentoptionen zu haben, die npm bietet. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, die darauf abzielt, den insgesamt benötigten Festplattenspeicher zu reduzieren.

Wo npm in den unten stehenden Beispielen gezeigt wird, kann pnpm eingetauscht werden und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm im Hinblick auf den Installationsprozess betrachtet (obwohl Ihre Ergebnisse variieren können). Das ist für Entwickler wichtig, weil es eine signifikante Menge an Zeit geben kann, die beim Warten auf die Installation von Abhängigkeiten verschwendet wird (und kopiert auf den Computer).

Es ist jedoch wichtig zu beachten, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus dem npm-Register zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden and other package registries.

Lassen Sie uns die häufigen Aktionen überprüfen, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im gleichen Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und die Befehle von diesem Paketmanager konsistent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird Ihnen das eine Reihe von Fragen stellen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung und so weiter) und dann eine `package.json` für Sie generieren, die Metainformationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch oben in Aktion gesehen. Dies würde das `vite`-Paket direkt ins Arbeitsverzeichnis in ein Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste 4.x-Version (die 4.5.3 ist) gibt. Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die derzeit installierten Abhängigkeiten überprüfen und sie aktualisieren, wenn ein Update im Bereich verfügbar ist, das im Paket angegeben ist.

Der Bereich wird in der Version der Abhängigkeit in Ihrer `package.json` angegeben, wie `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^` alle minderjährigen und Patch-Veröffentlichungen nach und einschließlich 5.2.13, bis aber nicht einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das in der Dokumentation etwas kompliziert aussehen mag, aber vereinfacht werden kann, indem man nur die Zusammenfassungsinformationen betrachtet und dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie zum Beispiel 2.0.1 als Hauptversion 2 mit Patchversion 1. Eine ausgezeichnete Möglichkeit, semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig, sich daran zu erinnern, dass `npm update` die Abhängigkeiten nicht über den Bereich hinaus aktualisieren wird, der in der `package.json` definiert ist — um dies zu tun, müssen Sie diese Version speziell installieren.

### Weitere Befehle

Sie können online mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) erfahren. Wieder werden [pnpm](https://pnpm.io/cli/add)-Befehle Parität mit npm haben, mit einer Handvoll Ergänzungen.

## Ihre eigenen Befehle erstellen

Die Paketmanager unterstützen auch die Erstellung Ihrer eigenen Befehle und deren Ausführung von der Befehlszeile aus. Zum Beispiel haben wir vorher den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript ausführen, um unser Projekt im "Entwicklungsmodus" zu starten. In der Tat schließen wir dies regelmäßig in alle Projekte ein, da das lokale Entwicklungs-Setup dazu neigt, etwas anders zu laufen, als es in Produktion laufen würde.

Wenn Sie dies in Ihrem Testprojekt von früher versuchen würden, würde es (wahrscheinlich) behaupten, das "dev script is missing". Dies liegt daran, dass npm, Yarn (und dergleichen) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Lassen Sie uns also einen benutzerdefinierten Kurzbefehlen — "dev" — in unserer `package.json` erstellen. Wenn Sie das Tutorial von früher durchgeführt haben, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment-Verzeichnis haben. Öffnen Sie sie und das `scripts`-Mitglied sollte so aussehen:

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

Versuchen Sie nun, den folgenden Befehl in Ihrem Terminal auszuführen, während Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, wie wir zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript nicht mehr das `npx`-Präfix benötigt. Dies liegt daran, dass npm (und yarn) Befehle clever sind, indem sie nach Kommandozeilen-Tools suchen, die lokal zu dem Projekt installiert sind, bevor sie versuchen, sie durch konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und es ermöglicht, dass sie gefunden wird). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl Ihre eigenen Skripte in den meisten Fällen einfach laufen werden.

Dieses spezielle mag überflüssig erscheinen — `npm run dev` sind mehr Zeichen zum Tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es ermöglicht uns, in der Zukunft mehr Arbeit zum `dev`-Befehl hinzuzufügen, wie z.B. Umgebungsvariablen setzen, temporäre Dateien generieren, etc., ohne den Befehl zu verkomplizieren.

Sie können alle Arten von Dingen zur `scripts`-Eigenschaft hinzufügen, die Ihnen helfen, Ihre Arbeit zu machen. Zum Beispiel, hier ist, was Vite in der Vorlage empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Dies bringt uns zum Ende unserer Tour durch Paketmanager. Unser nächster Schritt ist es, eine Beispiel-Toolchain aufzubauen, in der wir alles, was wir bisher gelernt haben, in die Praxis umsetzen.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## Siehe auch

- [npm Scripts Referenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
