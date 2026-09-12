---
title: Grundlagen der Paketverwaltung
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager genauer, um zu verstehen, wie wir sie in unseren eigenen Projekten verwenden können — um Abhängigkeiten von Projektwerkzeugen zu installieren, sie aktuell zu halten und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was Paketmanager und Paket-Registrierungen sind, warum
        sie benötigt werden und die Grundlagen ihrer Verwendung.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Softwarebestandteil von Drittanbietern, der wahrscheinlich von jemand anderem geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann eine beliebige Anzahl von Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten können Unterabhängigkeiten enthalten, die Sie nicht ausdrücklich installiert haben — Ihre Abhängigkeiten können eigene Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist Code zur Berechnung relativer Datumsangaben als menschenlesbarer Text. Sie könnten dies natürlich selbst programmieren, aber es besteht eine hohe Wahrscheinlichkeit, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit damit verschwenden, das Rad neu zu erfinden? Darüber hinaus wurde eine zuverlässige Drittanbieterabhängigkeit wahrscheinlich in vielen verschiedenen Situationen getestet, wodurch sie robuster und browserübergreifend kompatibler ist als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine vollständige JavaScript-Bibliothek oder ein Framework sein — wie React oder Vue — oder ein sehr kleines Dienstprogramm wie unsere Bibliothek für menschenlesbare Datumsangaben. Sie kann auch ein Befehlszeilenwerkzeug wie Prettier oder ESLint sein, über die wir in vorherigen Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese mithilfe eines einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements in Ihr Projekt eingebunden werden. Dies funktioniert jedoch möglicherweise nicht sofort und Sie werden wahrscheinlich moderne Werkzeuge benötigen, um Ihren Code und die Abhängigkeiten beim Veröffentlichen im Web zusammenzubündeln. Ein Bundle ist ein Begriff, der im Allgemeinen für eine einzelne Datei auf Ihrem Webserver verwendet wird, die das gesamte JavaScript Ihrer Software enthält — normalerweise so stark wie möglich komprimiert, um die Zeit zu verkürzen, die zum Herunterladen und Anzeigen Ihrer Software im Browser Ihrer Besucher benötigt wird.

Was geschieht außerdem, wenn Sie ein besseres Werkzeug finden, das Sie statt des aktuellen verwenden möchten, oder wenn eine neue Version Ihrer Abhängigkeit veröffentlicht wird, auf die Sie aktualisieren möchten? Bei einigen wenigen Abhängigkeiten ist das nicht besonders aufwendig, aber in größeren Projekten mit vielen Abhängigkeiten kann es wirklich schwierig werden, den Überblick darüber zu behalten. Es ist sinnvoller, einen **Paketmanager** wie npm zu verwenden, da dieser garantiert, dass Code sauber hinzugefügt und entfernt wird, sowie viele weitere Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt. Abgesehen von npm selbst ist ein Paketmanager jedoch ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager stellt eine Methode zum Installieren neuer Abhängigkeiten (auch als „Pakete“ bezeichnet) bereit, verwaltet den Speicherort der Pakete in Ihrem Dateisystem und bietet Ihnen Möglichkeiten, eigene Pakete zu veröffentlichen.

Theoretisch benötigen Sie möglicherweise keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern. Ein Paketmanager übernimmt jedoch nahtlos die Installation und Deinstallation von Paketen. Ohne einen solchen müssten Sie Folgendes manuell erledigen:

- Alle richtigen JavaScript-Dateien des Pakets finden.
- Sie überprüfen, um sicherzustellen, dass sie keine bekannten Sicherheitslücken enthalten.
- Sie herunterladen und an den richtigen Stellen in Ihrem Projekt ablegen.
- Den Code schreiben, um das Paket bzw. die Pakete in Ihre Anwendung einzubinden (dies geschieht üblicherweise mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), ein weiteres Thema, das es wert ist, gelesen und verstanden zu werden).
- Dasselbe für alle Unterabhängigkeiten der Pakete erledigen, von denen es Dutzende oder Hunderte geben kann.
- Alle Dateien wieder entfernen, wenn Sie die Pakete entfernen möchten.

Darüber hinaus behandeln Paketmanager doppelte Abhängigkeiten (etwas, das in der Frontend-Entwicklung wichtig und häufig wird).

Bei npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Optionen für den Ort, an dem Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal in Ihrem Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für eine globale Installation gibt, sind die Vorteile einer lokalen Installation wichtiger — beispielsweise die Portabilität des Codes und die Versionssperrung.

Wenn Ihr Projekt beispielsweise auf webpack mit einer bestimmten Konfiguration angewiesen ist, möchten Sie sicherstellen, dass die Konfiguration weiterhin funktioniert, wenn Sie das Projekt auf einem anderen Rechner installieren oder viel später zu ihm zurückkehren. Falls eine andere Version von webpack installiert wäre, könnte sie inkompatibel sein. Um dies zu verhindern, werden Abhängigkeiten lokal in einem Projekt installiert.

Um die Vorteile lokaler Abhängigkeiten wirklich zu erkennen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen — wenn es funktioniert und alle Abhängigkeiten sofort funktionieren, können Sie den lokalen Abhängigkeiten dafür danken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Eine erfolgreiche und beliebte alternative Paketverwaltung ist [Yarn](https://yarnpkg.com/). Yarn löst Abhängigkeiten mit einem anderen Algorithmus auf, was eine schnellere Benutzererfahrung bedeuten kann. Es gibt außerdem eine Reihe weiterer aufkommender Clients wie [pnpm](https://pnpm.js.org/).

## Paket-Registrierungen

Damit ein Paketmanager funktioniert, muss er wissen, von wo Pakete installiert werden sollen. Dies erfolgt in Form einer Paket-Registrierung. Die Registrierung ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und von dem es daher installiert werden kann. npm ist nicht nur ein Paketmanager, sondern auch der Name der am häufigsten verwendeten Paket-Registrierung für JavaScript-Pakete. Die npm-Registrierung befindet sich unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paket-Registrierung verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen Ihnen, Proxys zur npm-Registrierung zu erstellen (sodass Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet ebenfalls einen Paket-Registrierungsdienst](https://docs.github.com/en/packages), und im Laufe der Zeit werden wahrscheinlich weitere Optionen erscheinen.

Wichtig ist, dass Sie sicherstellen, die für Sie beste Registrierung ausgewählt zu haben. Viele Projekte verwenden npm, und wir bleiben in unseren Beispielen für den Rest des Moduls dabei.

## Das Paket-Ökosystem verwenden

Gehen wir ein Beispiel durch, um Ihnen den Einstieg in die Verwendung eines Paketmanagers und einer Registrierung zur Installation eines Befehlszeilendienstprogramms zu erleichtern.

Wir werden [Vite](https://vite.dev/) verwenden, um eine leere Website zu erstellen. Im nächsten Artikel erweitern wir die Toolchain um weitere Werkzeuge und zeigen Ihnen, wie Sie die Website bereitstellen.

Vite stellt einige [Initialisierungsvorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen erforderlichen Abhängigkeiten und Konfigurationen bereit, damit Sie schnell mit einem echten Projekt beginnen können. Zur Demonstration konfigurieren wir eine von Grund auf neu und verwenden die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz.

### Die Anwendung als npm-Paket einrichten

Erstellen Sie zunächst ein neues Verzeichnis, um unsere experimentelle Anwendung darin zu speichern, an einem sinnvollen Ort, den Sie später wiederfinden. Wir nennen es `npm-experiment`, aber Sie können es nennen, wie Sie möchten:

```bash
mkdir npm-experiment
cd npm-experiment
```

Initialisieren wir als Nächstes unsere Anwendung als npm-Paket. Dadurch wird eine Konfigurationsdatei — `package.json` — erstellt, mit der wir unsere Konfigurationsdetails speichern können, falls wir diese Umgebung später wiederherstellen oder das Paket sogar in der npm-Registrierung veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung und keine wiederverwendbare Bibliothek entwickeln).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Sie werden nun einige Fragen beantworten; npm erstellt anschließend anhand der Antworten eine standardmäßige `package.json`-Datei. Beachten Sie, dass keine dieser Angaben für unsere Zwecke relevant ist, da sie nur verwendet werden, wenn Sie Ihr Paket in einer Registrierung veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifikation der Anwendung. Drücken Sie einfach <kbd>Return</kbd>, um den Standardwert `npm-experiment` zu übernehmen.
- `version`: Die anfängliche Versionsnummer der Anwendung. Drücken Sie erneut einfach <kbd>Return</kbd>, um den Standardwert `1.0.0` zu übernehmen.
- `description`: Eine kurze Beschreibung des Zwecks der Anwendung. Wir lassen dies hier weg, aber Sie können auch beliebigen Text eingeben. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies ist die JavaScript-Datei, die ausgeführt wird, wenn andere Ihr Paket importieren. Sie ist für uns nicht nützlich, drücken Sie daher einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie <kbd>Return</kbd>, um jedes dieser Felder vorerst leer zu lassen.
- `author`: Der Autor des Projekts. Geben Sie Ihren eigenen Namen ein und drücken Sie <kbd>Return</kbd>.
- `license`: Die Lizenz, unter der das Paket veröffentlicht werden soll. Drücken Sie <kbd>Return</kbd>, um vorerst den Standardwert zu übernehmen.

Drücken Sie noch einmal <kbd>Return</kbd>, um diese Einstellungen zu übernehmen.

Wechseln Sie in Ihr Verzeichnis `npm-experiment`. Dort sollten Sie nun eine Datei package.json finden. Öffnen Sie sie; sie sollte ungefähr so aussehen:

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

Wir werden package.json noch zwei weitere Zeilen hinzufügen:

- `"type": "module"`, wodurch Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) statt als alte CommonJS-Module interpretiert. Dies ist generell eine gute Gewohnheit.
- `"private": true`, wodurch verhindert wird, dass Sie Ihr Paket versehentlich in der npm-Registrierung veröffentlichen.

Fügen Sie diese Zeilen direkt unterhalb von `"name"` hinzu:

```json
{
  "name": "npm-experiment",
  "type": "module",
  "private": true
  // …
}
```

Dies ist also die Konfigurationsdatei, die Ihr Paket definiert. Das genügt vorerst, also machen wir weiter.

> [!NOTE]
> [Die package.json-Datei](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine praktische Einführung in die Verwendung von `package.json`-Dateien.

### Vite installieren

Zuerst installieren wir Vite, das Build-Tool für unsere Website. Es ist dafür verantwortlich, unsere HTML-, CSS- und JavaScript-Dateien in einem für den Browser optimierten Bundle zusammenzufassen.

```bash
npm install --save-dev vite
```

Sobald dies erledigt ist, werfen Sie einen weiteren Blick auf Ihre package.json-Datei. Sie werden sehen, dass npm ein neues Feld namens `devDependencies` hinzugefügt hat:

```json
{
  "devDependencies": {
    "vite": "^5.2.13"
  }
}
```

Das ist Teil der Magie von npm — wenn Sie Ihre Codebasis künftig an einen anderen Ort oder auf einen anderen Rechner verschieben, können Sie dieselbe Einrichtung durch Ausführen des Befehls `npm install` wiederherstellen. npm betrachtet dann die Abhängigkeiten und installiert sie für Sie.

Ein Nachteil ist, dass Vite nur innerhalb unserer Anwendung `npm-experiment` verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Die Vorteile überwiegen jedoch die Nachteile.

Beachten Sie, dass wir `vite` als Entwicklungsabhängigkeit installiert haben. Dieser Unterschied ist für eine Anwendung selten wichtig, aber für eine Bibliothek bedeutet er, dass andere beim Installieren Ihres Pakets Vite nicht implizit installieren. Üblicherweise ist für Anwendungen jedes im Quellcode importierte Paket eine tatsächliche Abhängigkeit, während jedes für die Entwicklung verwendete Paket (in der Regel Befehlszeilenwerkzeuge) eine Entwicklungsabhängigkeit ist. Installieren Sie tatsächliche Abhängigkeiten, indem Sie das Flag `--save-dev` weglassen.

Sie finden außerdem einige neu erstellte Dateien:

- `node_modules`: Die Abhängigkeitsdateien, die zum Ausführen von Vite erforderlich sind. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Eine Sperrdatei, die die genauen Informationen speichert, die zur Reproduktion des Verzeichnisses `node_modules` erforderlich sind. Dadurch wird sichergestellt, dass das Verzeichnis `node_modules` auf verschiedenen Rechnern gleich ist, solange die Sperrdatei unverändert bleibt.

Sie müssen sich um diese Dateien nicht kümmern, da sie von npm verwaltet werden. Sie sollten `node_modules` zu Ihrer Datei `.gitignore` hinzufügen, falls Sie Git verwenden. Sie sollten `package-lock.json` jedoch normalerweise behalten, da sie, wie erwähnt, verwendet wird, um den Zustand von `node_modules` zwischen verschiedenen Rechnern zu synchronisieren.

### Unsere Beispielanwendung einrichten

Wie auch immer, weiter mit der Einrichtung.

In Vite steht die Datei `index.html` im Mittelpunkt. Sie definiert den Ausgangspunkt Ihrer Anwendung, und Vite verwendet sie, um weitere Dateien zu finden, die zum Erstellen Ihrer Anwendung benötigt werden. Erstellen Sie eine Datei `index.html` in Ihrem Verzeichnis `npm-experiment` und geben Sie ihr folgenden Inhalt:

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

Beachten Sie, dass das Element `<script>` eine Abhängigkeit von einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die Anwendung festlegt. Erstellen Sie den Ordner `src` und darin `main.jsx`, lassen Sie die Datei aber zunächst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type) ist wichtig. Es weist den Browser an, das Skript als ES-Modul zu behandeln, wodurch wir die Syntax `import` und `export` in unserem JavaScript-Code verwenden können. Die Dateierweiterung lautet `.jsx`, weil wir im nächsten Artikel React-JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wird es für uns in reguläres JavaScript umwandeln, als ob Browser es täten!

### Mit Vite experimentieren

Nun führen wir unser neu installiertes Vite-Tool aus. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

In Ihrem Terminal sollte etwa Folgendes ausgegeben werden:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Nun können wir vom gesamten JavaScript-Paket-Ökosystem profitieren. Zunächst läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber das Tolle ist: Wenn Sie Änderungen an Ihrer Anwendung vornehmen, erstellt Vite sie neu und aktualisiert den Server automatisch, sodass Sie sofort sehen können, welche Auswirkungen Ihre Änderung hatte.

Sie können den Entwicklungsserver jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und mit demselben Befehl wieder starten. Wenn Sie ihn weiterlaufen lassen möchten, können Sie ein neues Terminalfenster öffnen, um weitere Befehle auszuführen.

Nun zum Seiteninhalt. Fügen wir zur Demonstration ein Diagramm zur Seite hinzu. Wir verwenden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js), eine Bibliothek zur Datenvisualisierung. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, dass wir ohne das Flag `--save-dev` installieren. Wie bereits erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden und nicht nur als Befehlszeilenwerkzeug. Dieser Befehl fügt Ihrer Datei `package.json` ein neues Objekt `"dependencies"` mit `plotly.js-dist-min` hinzu.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe zu erfüllen. Wenn Sie eigenen Code schreiben, denken Sie beim Finden und Installieren einer Abhängigkeit über die folgenden Fragen nach:
>
> - Benötige ich überhaupt eine Abhängigkeit? Ist es mit integrierten Funktionen möglich oder einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher finden Sie ein Paket, das genau das tut, was Sie benötigen. Sie können bei npm oder Google nach Schlüsselwörtern suchen. Bevorzugen Sie außerdem kleine gegenüber großen Paketen, da Letztere bei Installation, Ausführung usw. zu Leistungsproblemen führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gewartet? Prüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets zu beurteilen ist eine Fähigkeit, die mit Erfahrung kommt, da Sie Faktoren berücksichtigen müssen, etwa wie wahrscheinlich es ist, dass das Paket Aktualisierungen benötigt, oder wie viele Personen es benötigen könnten.

Fügen Sie in der Datei `src/main.jsx` den folgenden Code hinzu und speichern Sie sie:

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

Kehren Sie zu `http://localhost:5173` zurück, und Sie sehen ein Diagramm auf der Seite. Ändern Sie die verschiedenen Zahlen und sehen Sie, wie das Diagramm jedes Mal aktualisiert wird, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion erstellen

Dieser Code ist jedoch nicht bereit für die Produktion. Die meisten Build-Tooling-Systeme, einschließlich Vite, verfügen über einen „Entwicklungsmodus“ und einen „Produktionsmodus“. Der wichtige Unterschied besteht darin, dass viele der hilfreichen Funktionen, die Sie in der Entwicklung nutzen werden, auf der endgültigen Website nicht benötigt werden und daher für die Produktion entfernt werden, z. B. „Hot Module Replacement“, „Live Reloading“ und „unkomprimierter und kommentierter Quellcode“. Diese Liste ist bei Weitem nicht vollständig, aber dies sind einige der üblichen Funktionen der Webentwicklung, die während der Entwicklungsphase sehr hilfreich, in der Produktion aber nicht besonders nützlich sind. In der Produktion würden sie Ihre Website nur unnötig aufblähen.

Stoppen Sie nun den laufenden Vite-Entwicklungsserver mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können nun unsere minimalistische Beispielwebsite für eine imaginäre Bereitstellung vorbereiten. Vite stellt einen zusätzlichen Befehl `build` bereit, um Dateien zu erzeugen, die zur Veröffentlichung geeignet sind.

Führen Sie den folgenden Befehl aus:

```bash
npx vite build
```

Sie sollten eine Ausgabe ähnlich dieser sehen:

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie hineinschauen, enthält es eine `index.html`, die der im Stammverzeichnis sehr ähnlich sieht. Allerdings wurde die Quelle des `script` nun durch einen Pfad zum Ordner `assets` ersetzt. Der Ordner `assets` enthält die transformierte JavaScript-Ausgabe, die nun minimiert und für die Produktion optimiert ist.

> [!NOTE]
> Möglicherweise beunruhigt Sie die Warnung, dass ein Chunk zu groß ist. Dies wird erwartet, da wir eine Bibliothek laden, die im Hintergrund viele Dinge erledigt (stellen Sie sich vor, Sie würden den gesamten Code selbst schreiben, um dasselbe Diagramm zu zeichnen). Vorerst müssen wir uns darüber keine Gedanken machen.

## Ein grober Leitfaden zu Paketmanager-Clients

In diesem Tutorial wurde das Vite-Paket mit npm installiert, aber wie bereits erwähnt, gibt es einige Alternativen. Es lohnt sich zumindest zu wissen, dass sie existieren, und eine ungefähre Vorstellung von den gemeinsamen Befehlen der Werkzeuge zu haben. Einige haben Sie bereits in Aktion gesehen, aber schauen wir uns die anderen an.

Die Liste wird im Laufe der Zeit wachsen, aber zum Zeitpunkt des Schreibens sind die folgenden wichtigsten Paketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus Sicht der Befehlszeile ähnlich — tatsächlich strebt pnpm vollständige Übereinstimmung mit den Argumentoptionen von npm an. Der Unterschied besteht darin, dass pnpm eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, um den insgesamt benötigten Speicherplatz zu reduzieren.

Wo npm in den folgenden Beispielen angezeigt wird, kann pnpm eingesetzt werden und der Befehl wird funktionieren.

Yarn wird hinsichtlich des Installationsprozesses oft als schneller als npm angesehen (obwohl dies bei Ihnen anders sein kann). Dies ist für Entwickler wichtig, da beim Warten auf die Installation und das Kopieren von Abhängigkeiten auf den Computer viel Zeit verloren gehen kann.

Es ist jedoch erwähnenswert, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus der npm-Registrierung zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden und jedes Paket aus den npm- und anderen Paket-Registrierungen installieren.

Sehen wir uns die üblichen Aktionen an, die Sie mit Paketmanagern ausführen möchten.

> [!NOTE]
> Wir demonstrieren sowohl npm- als auch Yarn-Befehle. Sie sind nicht dafür gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder Yarn einrichten und durchgehend Befehle dieses Paketmanagers verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, werden Sie dadurch aufgefordert und durch eine Reihe von Fragen geführt, um Ihr Projekt zu beschreiben (Name, Lizenz, Beschreibung usw.). Anschließend wird eine `package.json` für Sie erzeugt, die Metainformationen über Ihr Projekt und seine Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` oben ebenfalls bereits in Aktion gesehen. Dadurch würde das Paket `vite` direkt zum Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzugefügt, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber Sie können dies ebenfalls steuern. Sie können `vite@4` anfordern, wodurch Sie die neueste 4.x-Version erhalten (nämlich 4.5.3). Oder Sie könnten `vite@^4.0.0` verwenden, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (dieselbe Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dadurch werden die derzeit installierten Abhängigkeiten betrachtet und aktualisiert, falls eine Aktualisierung verfügbar ist, innerhalb des im Paket angegebenen Bereichs.

Der Bereich wird durch die Version der Abhängigkeit in Ihrer `package.json` angegeben, etwa `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^` alle Minor- und Patch-Releases ab einschließlich 5.2.13 bis ausschließlich 6.0.0.

Dies wird mithilfe eines Systems namens [semver](https://semver.org/) bestimmt. Dieses mag in der Dokumentation etwas kompliziert aussehen, kann aber vereinfacht werden, indem nur die zusammenfassenden Informationen berücksichtigt werden: Eine Version wird durch `MAJOR.MINOR.PATCH` dargestellt, beispielsweise ist 2.0.1 die Major-Version 2 mit Patch-Version 1. Eine hervorragende Möglichkeit, semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Es ist wichtig, daran zu denken, dass `npm update` Abhängigkeiten nicht über den in der `package.json` definierten Bereich hinaus aktualisiert — dafür müssen Sie diese Version ausdrücklich installieren.

### Weitere Befehle

Sie können online mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [yarn](https://classic.yarnpkg.com/en/docs/cli/) erfahren. Auch hier gilt: Die Befehle von [pnpm](https://pnpm.io/cli/add) stimmen mit npm überein, mit einer Handvoll Ergänzungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen auch das Erstellen eigener Befehle und deren Ausführung über die Befehlszeile. Beispielsweise haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im „Entwicklungsmodus“ ausführen. Tatsächlich binden wir dies regelmäßig in alle Projekte ein, da die lokale Entwicklungsumgebung tendenziell etwas anders läuft als in der Produktion.

Wenn Sie versucht haben, dies in Ihrem vorherigen Testprojekt auszuführen, würde wahrscheinlich behauptet werden, dass das „dev script is missing“. Das liegt daran, dass npm, Yarn (und ähnliche) nach einer Eigenschaft namens `dev` in der Eigenschaft `scripts` Ihrer Datei `package.json` suchen. Erstellen wir daher einen benutzerdefinierten Kurzbefehlsbefehl — „dev“ — in unserer `package.json`. Wenn Sie das vorherige Tutorial befolgt haben, sollten Sie eine Datei `package.json` in Ihrem Verzeichnis npm-experiment haben. Öffnen Sie sie; ihr Element `scripts` sollte so aussehen:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Aktualisieren Sie es wie folgt und speichern Sie die Datei:

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

Wir haben einen benutzerdefinierten Befehl `dev` als npm-Skript hinzugefügt.

Versuchen Sie nun, Folgendes in Ihrem Terminal auszuführen, und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm run dev
```

Dadurch sollte Vite starten und derselbe lokale Entwicklungsserver wie zuvor gestartet werden.

Beachten Sie, dass das hier definierte Skript das Präfix `npx` nicht mehr benötigt. Das liegt daran, dass npm- (und yarn-)Befehle intelligent genug sind, zuerst nach Befehlszeilenwerkzeugen zu suchen, die lokal im Projekt installiert sind, bevor sie versuchen, sie über herkömmliche Methoden zu finden (wo Ihr Computer normalerweise Software speichert und auffindbar macht). Sie können [mehr über die technischen Einzelheiten des Befehls `run` erfahren](https://docs.npmjs.com/cli/commands/npm-run/), obwohl Ihre eigenen Skripte in den meisten Fällen problemlos ausgeführt werden.

Dieses spezielle Beispiel mag unnötig aussehen — `npm run dev` besteht aus mehr Zeichen als `npx vite`, aber es ist eine Form der _Abstraktion_. Sie ermöglicht es uns, dem Befehl `dev` künftig weitere Aufgaben hinzuzufügen, etwa das Setzen von Umgebungsvariablen, das Erzeugen temporärer Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können der Eigenschaft `scripts` alle möglichen Dinge hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Hier sehen Sie beispielsweise, was Vite in der Vorlage empfiehlt:

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

Damit sind wir am Ende unseres Überblicks über Paketmanager angelangt. Als Nächstes erstellen wir eine Beispiel-Toolchain und setzen alles, was wir bisher gelernt haben, in die Praxis um.

## Siehe auch

- [Referenz für npm-Skripte](https://docs.npmjs.com/cli/using-npm/scripts/)
- [Referenz für package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
