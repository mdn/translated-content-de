---
title: Grundlagen des Paketmanagements
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager im Detail, um zu verstehen, wie wir sie in unseren eigenen Projekten verwenden können — um Projekt-Tool-Abhängigkeiten zu installieren, sie auf dem neuesten Stand zu halten und mehr.

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
        Zu verstehen, was Paketmanager und Paket-Repositories sind, warum sie benötigt werden und die Grundlagen ihrer Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Drittanbieter-Softwareteil, das wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann jede Anzahl von Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten könnten Sub-Abhängigkeiten beinhalten, die Sie nicht explizit installiert haben — Ihre Abhängigkeiten können ihre eigenen Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist ein Code zur Berechnung relativer Daten als menschenlesbarer Text. Sie könnten dies sicherlich selbst programmieren, aber es ist sehr wahrscheinlich, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit verschwenden, um das Rad neu zu erfinden? Darüber hinaus wird eine zuverlässige Drittanbieter-Abhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet worden sein, was sie robuster und plattformübergreifend kompatibler macht als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine gesamte JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Werkzeug wie unsere menschenlesbare Datumsbibliothek, oder es kann ein Kommandozeilenwerkzeug sein wie Prettier oder ESLint, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten solche Abhängigkeiten in Ihr Projekt mithilfe eines einfachen [`<script>`](/de/docs/Web/HTML/Element/script)-Elements eingebunden werden, aber das funktioniert möglicherweise nicht direkt und Sie benötigen wahrscheinlich einige moderne Tools, um Ihren Code und die Abhängigkeiten zu bündeln, wenn sie im Web veröffentlicht werden. Ein Bundle ist ein Begriff, der allgemein verwendet wird, um sich auf eine einzelne Datei auf Ihrem Webserver zu beziehen, die den gesamten JavaScript-Code für Ihre Software enthält — typischerweise so stark komprimiert wie möglich, um die Zeit zu reduzieren, die benötigt wird, um Ihre Software herunterzuladen und im Browser Ihrer Besucher anzuzeigen.

Darüber hinaus, was passiert, wenn Sie ein besseres Tool finden, das Sie anstelle des aktuellen verwenden möchten, oder eine neue Version Ihrer Abhängigkeit wird veröffentlicht und Sie möchten darauf aktualisieren? Dies ist nicht allzu schmerzhaft für ein paar Abhängigkeiten, aber bei größeren Projekten mit vielen Abhängigkeiten kann es wirklich anspruchsvoll werden, den Überblick zu behalten. Es macht mehr Sinn, einen **Paketmanager** wie npm zu verwenden, da dieser sicherstellt, dass der Code sauber hinzugefügt und entfernt wird, sowie eine Reihe anderer Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber wenn wir einen Schritt zurücktreten von npm selbst, handelt es sich bei einem Paketmanager um ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Methode, um neue Abhängigkeiten zu installieren (auch als „Pakete“ bezeichnet), zu verwalten, wo Pakete auf Ihrem Dateisystem gespeichert werden, und bietet Möglichkeiten, Ihre eigenen Pakete zu veröffentlichen.

Theoretisch benötigen Sie vielleicht keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern, aber ein Paketmanager wird das Installieren und Deinstallieren von Paketen nahtlos verwalten. Wenn Sie keinen verwenden würden, müssten Sie Folgendes manuell handhaben:

- Finden aller richtigen JavaScript-Paketdateien.
- Überprüfen, ob sie keine bekannten Sicherheitslücken haben.
- Herunterladen und sie an den richtigen Orten in Ihrem Projekt ablegen.
- Den Code schreiben, um das/die Paket(e) in Ihrer Anwendung einzubinden (dies wird tendenziell mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht, ein weiteres Thema, das es sich zu lesen und zu verstehen lohnt).
- Dasselbe für alle Sub-Abhängigkeiten der Pakete tun, von denen es Dutzende oder Hunderte geben könnte.
- Alle Dateien wieder entfernen, wenn Sie die Pakete entfernen möchten.

Zusätzlich verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal für Ihr Projekt installiert werden. Obwohl es dazu tendiert, mehr Vorteile für die globale Installation zu haben, sind die Vorteile der lokalen Installation wichtiger — wie Codeportabilität und Versionsfixierung.

Zum Beispiel, wenn Ihr Projekt auf webpack mit einer bestimmten Konfiguration angewiesen wäre, möchten Sie sicherstellen, dass, wenn Sie dieses Projekt auf einer anderen Maschine installieren oder viel später darauf zurückkehren, die Konfiguration noch funktioniert. Wenn eine andere Version von webpack installiert wäre, könnte es nicht kompatibel sein. Um dem entgegenzuwirken, werden Abhängigkeiten lokal zu einem Projekt installiert.

Um lokale Abhängigkeiten wirklich glänzen zu sehen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, dann haben Sie lokalen Abhängigkeiten zu verdanken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Ein erfolgreicher und beliebter alternativer Paketmanager ist [Yarn](https://yarnpkg.com/). Yarn löst die Abhängigkeiten mit einem anderen Algorithmus, der eine schnellere Benutzererfahrung bedeuten kann. Es gibt auch eine Reihe anderer aufstrebender Clients wie [pnpm](https://pnpm.js.org/).

## Paket-Registries

Damit ein Paketmanager funktioniert, muss er wissen, wo Pakete installiert werden sollen, und das geschieht über eine Paket-Registry. Die Registry ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und somit installiert werden kann. npm, ebenso wie ein Paketmanager, ist auch der Name der am häufigsten verwendeten Paket-Registry für JavaScript-Pakete. Die npm-Registry existiert unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paket-Registry verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen es Ihnen, Proxys zur npm-Registry zu erstellen (um bestimmte Pakete zu überschreiben oder zu sperren), [GitHub bietet ebenfalls einen Paket-Registry-Service an](https://docs.github.com/en/packages), und es werden wahrscheinlich mit der Zeit mehr Optionen auftauchen.

Wichtig ist, dass Sie sicherstellen, dass Sie die beste Registry für sich gewählt haben. Viele Projekte werden npm verwenden und wir werden dies in unseren Beispielen im restlichen Modul beibehalten.

## Verwendung des Paket-Ökosystems

Lassen Sie uns ein Beispiel durchgehen, um Ihnen den Einstieg in die Verwendung eines Paketmanagers und einer Registry zur Installation eines Kommandozeilenwerkzeugs zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel werden wir die Toolchain erweitern, um mehr Tools einzubeziehen und Ihnen zu zeigen, wie Sie die Website bereitstellen.

Vite bietet einige [Init-Vorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project), mit allen notwendigen Abhängigkeiten und Konfigurationen, um Ihnen schnell den Einstieg in ein echtes Projekt zu ermöglichen. Zum Demonstrieren werden wir eine von Grund auf konfigurieren, wobei die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz genutzt wird.

### Einrichten der App als npm-Paket

Zuerst erstellen Sie ein neues Verzeichnis, um unsere experimentelle App zu speichern, an einem sinnvollen Ort, den Sie wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Als Nächstes initialisieren wir unsere App als npm-Paket, was eine Konfigurationsdatei erstellt — `package.json` — mit der wir unsere Konfigurationsdetails speichern können, falls wir diese Umgebung später wiederherstellen oder sogar das Paket in die npm-Registry veröffentlichen möchten (obwohl das für unseren Artikel nicht relevant ist, da wir eine Anwendung und keine wiederverwendbare Bibliothek entwickeln).

Tippen Sie den folgenden Befehl ein, und achten Sie darauf, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm init
```

Sie werden nun ein paar Fragen gestellt; npm erstellt dann basierend auf den Antworten eine Standard-`package.json`-Datei. Beachten Sie, dass keiner dieser Punkte für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket in einem Registry veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifikation der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standard `npm-experiment` zu akzeptieren.
- `version`: Die Startversionsnummer der App. Drücken Sie erneut <kbd>Return</kbd>, um den Standard `1.0.0` zu akzeptieren.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen es hier weg, aber Sie können auch alles eingeben, was Sie möchten. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies wird die JavaScript-Datei sein, die ausgeführt wird, wenn andere Ihr Paket importieren. Es hat keine Verwendung für uns, also drücken Sie einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jedes dieser Felder vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz zur Veröffentlichung des Pakets. Drücken Sie <kbd>Return</kbd>, um vorerst den Standard zu akzeptieren.

Drücken Sie <kbd>Return</kbd> nochmals, um diese Einstellungen zu akzeptieren.

Gehen Sie in Ihr `npm-experiment`-Verzeichnis und Sie sollten jetzt eine `package.json`-Datei finden. Öffnen Sie sie, und sie sollte ungefähr so aussehen:

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

Wir werden zwei weitere Zeilen zu `package.json` hinzufügen:

- `"type": "module"`, was dazu führt, dass Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert, anstatt die alten CommonJS-Module. Es ist generell eine gute Angewohnheit, dies zu tun.
- `"private": true`, was verhindert, dass Sie versehentlich Ihr Paket in die npm-Registry veröffentlichen.

Fügen Sie diese Zeilen direkt unter der `"name"`-Angabe hinzu:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

Dies ist also die Konfigurationsdatei, die Ihr Paket definiert. Das reicht für jetzt, also machen wir weiter.

### Installation von Vite

Wir werden zuerst Vite installieren, das Bauwerkzeug für unsere Website. Es ist verantwortlich dafür, unsere HTML-, CSS- und JavaScript-Dateien zu einem optimierten Bundle für den Browser zu bündeln.

```bash
npm install --save-dev vite
```

Sobald das erledigt ist, werfen Sie einen weiteren Blick auf Ihre `package.json`-Datei. Sie werden sehen, dass npm ein neues Feld hinzugefügt hat, `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

Das ist ein Teil der npm-Magie — wenn Sie in Zukunft Ihren Code an einen anderen Ort verschieben, auf einer anderen Maschine, können Sie dieselbe Umgebung durch Ausführen des Befehls `npm install` wiederherstellen, und npm wird die Abhängigkeiten ansehen und sie für Sie installieren.

Ein Nachteil ist, dass Vite nur in unserer `npm-experiment`-App verfügbar ist; Sie werden es in keinem anderen Verzeichnis ausführen können. Aber die Vorteile überwiegen die Nachteile.

Beachten Sie, dass wir uns entschieden haben, `vite` als Entwicklungsabhängigkeit zu installieren. Dieser Unterschied spielt selten bei einer Anwendung eine Rolle, aber für eine Bibliothek bedeutet es, dass wenn andere Ihr Paket installieren, sie nicht implizit Vite installieren werden. Üblicherweise ist es so, dass bei Anwendungen jedes Paket, das im Quellcode importiert wird, eine reale Abhängigkeit ist, während jedes Paket, das für die Entwicklung verwendet wird (in der Regel als Kommandozeilenwerkzeuge), eine Entwicklungsabhängigkeit ist. Installieren Sie reale Abhängigkeiten, indem Sie das `--save-dev`-Flag entfernen.

Sie werden feststellen, dass auch eine Reihe neuer Dateien erstellt wurden:

- `node_modules`: Die für das Ausführen von Vite erforderlichen Abhängigkeitsdateien. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Dies ist eine Sperrdatei, die die genauen Informationen speichert, die benötigt werden, um das `node_modules`-Verzeichnis nachzubilden. Dies stellt sicher, dass solange die Sperrdatei unverändert bleibt, das `node_modules`-Verzeichnis auf verschiedenen Maschinen gleich ist.

Um diese Dateien müssen Sie sich nicht kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer `.gitignore`-Datei hinzufügen, wenn Sie Git verwenden, aber Sie sollten im Allgemeinen `package-lock.json` behalten, da sie, wie erwähnt, verwendet wird, um den Zustand des `node_modules`-Verzeichnisses auf verschiedenen Maschinen zu synchronisieren.

### Einrichten unserer Beispiel-App

Wie dem auch sei, weiter mit der Einrichtung.

In Vite steht die `index.html`-Datei im Mittelpunkt. Sie definiert den Ausgangspunkt Ihrer App, und Vite verwendet sie, um andere Dateien zu finden, die zum Aufbau Ihrer App benötigt werden. Erstellen Sie eine `index.html`-Datei in Ihrem `npm-experiment`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit von einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik der App deklariert. Erstellen Sie den `src`-Ordner und legen Sie dort die `main.jsx` an, lassen Sie sie aber vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Element/script/type) ist wichtig. Es teilt dem Browser mit, dass das Skript als ES-Modul behandelt werden soll, was uns erlaubt, `import`- und `export`-Syntax in unserem JavaScript-Code zu verwenden. Die Dateierweiterung ist `.jsx`, weil wir im nächsten Artikel React JSX-Syntax hinzufügen werden. Browser verstehen das JSX nicht, aber Vite wird es für uns in reguläres JavaScript umwandeln, als ob Browser es tun!

### Spaß mit Vite

Nun werden wir unser neu installiertes Vite-Tool ausführen. Geben Sie in Ihrem Terminal den folgenden Befehl ein:

```bash
npx vite
```

Sie sollten etwas Ähnliches in Ihrem Terminal sehen:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt sind wir bereit, von dem gesamten JavaScript-Paket-Ökosystem zu profitieren. Zum Beispiel läuft nun ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber was cool ist, dass wenn Sie Änderungen an Ihrer App vornehmen, Vite sie neu aufbauen und den Server automatisch aktualisieren wird, sodass Sie sofort sehen können, welchen Effekt Ihr Update hatte.

Sie können den Entwicklungsserver jederzeit mit <kbd>Strg</kbd> + <kbd>C</kbd> stoppen und ihn mit demselben Befehl wieder starten. Wenn Sie sich entscheiden, ihn laufen zu lassen, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Jetzt zu etwas Seiteninhalt. Als Demonstration fügen wir der Seite einen Graphen hinzu. Wir werden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js), eine Datenvisualisierung-Bibliothek, verwenden. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, wie wir ohne das `--save-dev`-Flag installieren. Wie zuvor erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden, nicht nur als Kommandozeilenwerkzeug. Dieser Befehl fügt ein neues `"dependencies"`-Objekt zu Ihrer `package.json`-Datei hinzu, mit `plotly.js-dist-min` darin.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe abzuschließen. Wenn Sie Ihren eigenen Code schreiben, denken Sie über die folgenden Fragen nach, wenn Sie eine Abhängigkeit finden und installieren:
>
> - Benötige ich überhaupt eine Abhängigkeit? Ist es möglich, es mit eingebauten Funktionen zu machen, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher finden Sie ein Paket, das genau das tut, was Sie benötigen. Sie können nach Schlüsselwörtern auf npm oder Google suchen. Bevorzugen Sie auch kleine Pakete gegenüber großen, da letztere zu Leistungsproblemen beim Installieren, Ausführen usw. führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Überprüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu bestimmen ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren berücksichtigen müssen, wie zum Beispiel wie wahrscheinlich es ist, dass das Paket Updates benötigt, oder wie viele Menschen es benötigen könnten.

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

Gehen Sie zurück zu `http://localhost:5173` und Sie sehen einen Graphen auf der Seite. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie sich der Graph jedes Mal aktualisiert, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion vorbereiten

Allerdings ist dieser Code noch nicht bereit für die Produktion. Die meisten Build-Toolsysteme, einschließlich Vite, haben einen „Entwicklungsmodus“ und einen „Produktionsmodus“. Der wichtige Unterschied liegt darin, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung verwenden werden, nicht im finalen Site benötigt werden und daher für die Produktion entfernt werden, z. B. „Hot Module Replacement“, „Live Reloading“ und „unkomprimierter und kommentierter Quellcode“. Obwohl bei weitem nicht erschöpfend, sind dies einige der gängigen Webentwicklungsfunktionen, die in der Entwicklungsphase sehr hilfreich sind, aber in der Produktion nicht sehr nützlich sind. In der Produktion blähen sie Ihre Site nur auf.

Stoppen Sie nun den laufenden Vite-Entwicklungsserver mit <kbd>Strg</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere minimalistische Beispielwebsite auf eine imaginäre Bereitstellung vorbereiten. Vite bietet einen zusätzlichen `build`-Befehl, um Dateien zu generieren, die für die Veröffentlichung geeignet sind.

Führen Sie den folgenden Befehl aus:

```bash
npx vite build
```

Sie sollten eine Ausgabe sehen wie:

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie hineinsehen, enthält es `index.html`, das dem Wurzel-`index.html` sehr ähnlich aussieht, außer dass die `script`-Quelle jetzt durch einen Pfad zum `assets`-Ordner ersetzt wurde. Der `assets`-Ordner, der transformierte JavaScript-Ausgabe enthält, die jetzt minimiert und für die Produktion optimiert ist.

> [!NOTE]
> Möglicherweise machen Sie sich Sorgen über die Warnung, dass es einen Chunk gibt, der zu groß ist. Das ist zu erwarten, da wir eine Bibliothek laden, die hinter den Kulissen viele Dinge macht (stellen Sie sich vor, Sie müssten den ganzen Code selbst schreiben, um das gleiche Diagramm zu zeichnen). Im Moment müssen wir uns darüber keine Sorge machen.

## Ein grober Leitfaden zu Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es lohnt sich, zumindest zu wissen, dass sie existieren und eine vage Vorstellung von den gemeinsamen Befehlen über die Tools hinweg zu haben. Sie haben einige bereits in Aktion gesehen, aber lassen Sie uns die anderen betrachten.

Die Liste wird mit der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden Haupt-Paketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind von einem Kommandozeilenstandpunkt aus ähnlich — tatsächlich strebt pnpm an, vollständige Parität über die Argumentoptionen zu erreichen, die npm bietet. Es unterscheidet sich darin, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, um den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den unten stehenden Beispielen gezeigt wird, kann pnpm ausgetauscht werden und der Befehl wird funktionieren.

Yarn wird oft als schneller als npm in Bezug auf den Installationsprozess angesehen (obwohl dies unterschiedlich sein kann). Dies ist für Entwickler wichtig, da es viel Zeitverschwendung durch das Warten auf die Installation von Abhängigkeiten geben kann (und auf den Computer kopiert wird).

Jedoch ist es erwähnenswert, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus der npm-Registry zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden und können jedes Paket aus der npm und anderen Paketen-Registries installieren.

Lassen Sie uns die häufigsten Aktionen überprüfen, die Sie mit Paketmanagern ausführen wollen.

> [!NOTE]
> Wir werden sowohl npm- als auch Yarn-Befehle demonstrieren. Sie sind nicht dazu gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt mit entweder npm oder Yarn einrichten und die Befehle dieses Paketmanagers konsequent verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, wird dies Sie durch eine Reihe von Fragen führen, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung, usw.) und dann ein `package.json` erzeugen, das Meta-Informationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch oben in Aktion gesehen. Dies würde das `vite` Paket direkt in das Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzufügen, zusammen mit `vite`s eigenen Abhängigkeiten.

Standardmäßig wird dieser Befehl die neueste Version von `vite` installieren, aber Sie können dies auch steuern. Sie können `vite@4` anfordern, was Ihnen die neueste 4.x-Version gibt (was 4.5.3 ist). Oder Sie könnten `vite@^4.0.0` ausprobieren, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (die gleiche Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies wird die derzeit installierten Abhängigkeiten betrachten und sie bei Bedarf aktualisieren, wenn ein Update innerhalb des im Paket definierten Bereichs verfügbar ist.

Der Bereich wird in der Version der Abhängigkeit in Ihrer `package.json` angegeben, z. B. `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^`, dass alle kleineren und Patch-Releases nach und einschließlich 5.2.13, bis aber nicht einschließlich 6.0.0.

Dies wird mit einem System namens [semver](https://semver.org/) bestimmt, das in der Dokumentation etwas kompliziert erscheinen mag, aber vereinfacht werden kann, indem Sie nur die Zusammenfassungsinformationen berücksichtigen und sich vorstellen, dass eine Version durch `MAJOR.MINOR.PATCH` dargestellt wird, wie zum Beispiel 2.0.1 als Hauptversion 2 mit Patchversion 1. Ein ausgezeichneter Weg, um Semver-Werte auszuprobieren, ist die Verwendung des [semver calculators](https://semver.npmjs.com/).

Es ist wichtig zu beachten, dass `npm update` die Abhängigkeiten nicht über den im `package.json` definierten Bereich hinaus upgraden wird — dafür müssen Sie diese Version explizit installieren.

### Weitere Befehle

Sie können mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) online herausfinden. Auch [pnpm](https://pnpm.io/cli/add) Befehle werden Parität mit npm haben, mit einigen wenigen Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung über die Kommandozeile. Beispielsweise haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im "Entwicklungsmodus" ausführen. Tatsächlich fügen wir dies regelmäßig in allen Projekten hinzu, da die lokale Entwicklungsumgebung dazu neigt, leicht anders zu laufen, als sie es in der Produktion tun würde.

Wenn Sie dies in Ihrem Testprojekt von früher versuchen, würde es (wahrscheinlich) behaupten, dass das "dev script fehlt". Das liegt daran, dass npm, Yarn (und ähnliche) nach einer Eigenschaft namens `dev` in der `scripts`-Eigenschaft Ihrer `package.json`-Datei suchen. Also fügen wir einen benutzerdefinierten Kurzbefehlt, "dev", in unserem `package.json` hinzu. Wenn Sie dem Tutorial von früher gefolgt sind, sollten Sie eine `package.json`-Datei in Ihrem npm-experiment Verzeichnis haben. Öffnen Sie es, und seine `scripts`-Mitglieder sollten so aussehen:

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

Versuchen Sie nun, Folgendes in Ihrem Terminal auszuführen, wobei Sie sicherstellen, dass Sie sich im `npm-experiment`-Verzeichnis befinden:

```bash
npm run dev
```

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, wie wir ihn zuvor gesehen haben.

Beachten Sie, dass das Skript, das wir hier definiert haben, kein `npx`-Präfix mehr benötigt. Dies liegt daran, dass npm (und Yarn) Befehle clever darin sind, dass sie zunächst nach Kommandozeilenwerkzeugen suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie über konventionelle Methoden zu finden (wo Ihr Computer normalerweise Software speichert und ermöglicht, dass sie gefunden wird). Sie können [mehr über die technischen Feinheiten des `run`-Befehls erfahren](https://docs.npmjs.com/cli/run-script/), obwohl die meisten Ihrer eigenen Skripte einfach funktionieren werden.

Dieser konkrete Befehl mag unnötig erscheinen — `npm run dev` hat mehr Zeichen zu tippen als `npx vite`, aber es ist eine Form der _Abstraktion_. Es erlaubt uns, in Zukunft mehr Arbeit zum `dev`-Befehl hinzuzufügen, wie das Setzen von Umgebungsvariablen, das Erzeugen von temporären Dateien usw., ohne den Befehl zu komplizieren.

In die `scripts`-Eigenschaft können Sie allerhand Dinge hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Zum Beispiel, hier ist, was Vite in der Vorlage empfiehlt:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Zusammenfassung

Damit kommen wir zum Ende unserer Tour durch Paketmanager. Unser nächster Schritt besteht darin, eine Beispiel-Toolchain aufzubauen, um all das, was wir bisher gelernt haben, in die Praxis umzusetzen.

## Siehe auch

- [npm-Skriptreferenz](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json-Referenz](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
