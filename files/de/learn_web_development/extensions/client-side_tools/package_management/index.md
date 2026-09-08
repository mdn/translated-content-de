---
title: Grundlagen der Paketverwaltung
short-title: Package management
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
l10n:
  sourceCommit: 9e69ea9db9ec62df101e83cbc07d447e1984c57e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In diesem Artikel betrachten wir Paketmanager genauer, um zu verstehen, wie wir sie in unseren eigenen Projekten verwenden können — um Abhängigkeiten von Projekttools zu installieren, sie aktuell zu halten und vieles mehr.

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
        Verstehen, was Paketmanager und Paket-Registrys sind, warum sie
        benötigt werden und wie man sie grundlegend verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Eine Abhängigkeit in Ihrem Projekt

Eine **Abhängigkeit** ist ein Softwarebestandteil eines Drittanbieters, der wahrscheinlich von einer anderen Person geschrieben wurde und idealerweise ein einzelnes Problem für Sie löst. Ein Webprojekt kann beliebig viele Abhängigkeiten haben, von keiner bis zu vielen, und Ihre Abhängigkeiten können Unterabhängigkeiten enthalten, die Sie nicht ausdrücklich installiert haben — Ihre Abhängigkeiten können eigene Abhängigkeiten haben.

Ein einfaches Beispiel für eine nützliche Abhängigkeit, die Ihr Projekt benötigen könnte, ist Code zur Berechnung relativer Daten als menschenlesbarer Text. Natürlich könnten Sie dies selbst programmieren, aber es ist sehr wahrscheinlich, dass jemand anderes dieses Problem bereits gelöst hat — warum Zeit damit verschwenden, das Rad neu zu erfinden? Außerdem wurde eine zuverlässige Abhängigkeit eines Drittanbieters wahrscheinlich in vielen unterschiedlichen Situationen getestet, wodurch sie robuster und browserübergreifend kompatibler ist als Ihre eigene Lösung.

Eine Projektabhängigkeit kann eine vollständige JavaScript-Bibliothek oder ein Framework sein — beispielsweise React oder Vue — oder ein sehr kleines Hilfsprogramm wie unsere Bibliothek für menschenlesbare Daten. Sie kann auch ein Befehlszeilentool wie Prettier oder ESLint sein, über die wir in früheren Artikeln gesprochen haben.

Ohne moderne Build-Tools könnten Abhängigkeiten wie diese mithilfe eines einfachen [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements in Ihr Projekt eingebunden werden. Dies funktioniert jedoch möglicherweise nicht direkt und Sie benötigen wahrscheinlich moderne Tools, um Ihren Code und Ihre Abhängigkeiten bei der Veröffentlichung im Web gemeinsam zu bündeln. Ein Bundle bezeichnet üblicherweise eine einzelne Datei auf Ihrem Webserver, die das gesamte JavaScript Ihrer Software enthält — in der Regel so stark wie möglich komprimiert, um die Zeit zu verringern, die zum Herunterladen und Anzeigen Ihrer Software im Browser Ihrer Besucher benötigt wird.

Was passiert außerdem, wenn Sie ein besseres Tool finden, das Sie anstelle des aktuellen verwenden möchten, oder wenn eine neue Version Ihrer Abhängigkeit veröffentlicht wird, auf die Sie aktualisieren möchten? Bei einigen wenigen Abhängigkeiten ist dies nicht besonders aufwendig. In größeren Projekten mit vielen Abhängigkeiten kann es jedoch sehr schwierig werden, den Überblick zu behalten. Es ist sinnvoller, einen **Paketmanager** wie npm zu verwenden, da dieser gewährleistet, dass Code sauber hinzugefügt und entfernt wird, und zudem viele weitere Vorteile bietet.

## Was genau ist ein Paketmanager?

Wir haben [npm](https://www.npmjs.com/) bereits kennengelernt, aber wenn wir von npm selbst zurücktreten, ist ein Paketmanager ein System, das Ihre Projektabhängigkeiten verwaltet.

Der Paketmanager bietet eine Möglichkeit, neue Abhängigkeiten (auch als „Pakete“ bezeichnet) zu installieren, zu verwalten, wo Pakete in Ihrem Dateisystem gespeichert werden, und ermöglicht Ihnen, eigene Pakete zu veröffentlichen.

Theoretisch benötigen Sie vielleicht keinen Paketmanager und könnten Ihre Projektabhängigkeiten manuell herunterladen und speichern. Ein Paketmanager übernimmt jedoch nahtlos die Installation und Deinstallation von Paketen. Ohne einen solchen müssten Sie Folgendes manuell erledigen:

- Alle korrekten JavaScript-Dateien des Pakets finden.
- Sie darauf prüfen, dass sie keine bekannten Sicherheitslücken enthalten.
- Sie herunterladen und an den richtigen Speicherorten in Ihrem Projekt ablegen.
- Den Code schreiben, um das Paket bzw. die Pakete in Ihre Anwendung einzubinden (dies erfolgt üblicherweise mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), einem weiteren Thema, über das Sie sich informieren und das Sie verstehen sollten).
- Dasselbe für alle Unterabhängigkeiten der Pakete erledigen, von denen es Dutzende oder Hunderte geben kann.
- Alle Dateien wieder entfernen, wenn Sie die Pakete entfernen möchten.

Zusätzlich verwalten Paketmanager doppelte Abhängigkeiten (etwas, das in der Front-End-Entwicklung wichtig und häufig wird).

Im Fall von npm (und JavaScript- und Node-basierten Paketmanagern) haben Sie zwei Möglichkeiten, wo Sie Ihre Abhängigkeiten installieren. Wie wir im vorherigen Artikel angesprochen haben, können Abhängigkeiten global oder lokal für Ihr Projekt installiert werden. Obwohl es tendenziell mehr Vorteile für eine globale Installation gibt, sind die Vorteile einer lokalen Installation wichtiger — etwa die Portabilität des Codes und die Festlegung von Versionen.

Wenn Ihr Projekt beispielsweise von webpack mit einer bestimmten Konfiguration abhängt, sollten Sie sicherstellen, dass die Konfiguration weiterhin funktioniert, wenn Sie das Projekt auf einem anderen Computer installieren oder viel später wieder darauf zurückkommen. Falls eine andere Version von webpack installiert wäre, könnte diese inkompatibel sein. Um dies zu vermeiden, werden Abhängigkeiten lokal in einem Projekt installiert.

Um die Vorteile lokaler Abhängigkeiten zu erkennen, müssen Sie nur versuchen, ein bestehendes Projekt herunterzuladen und auszuführen. Wenn es funktioniert und alle Abhängigkeiten direkt funktionieren, können Sie lokalen Abhängigkeiten dafür danken, dass der Code portabel ist.

> [!NOTE]
> npm ist nicht der einzige verfügbare Paketmanager. Eine erfolgreiche und beliebte alternative Paketverwaltung ist [Yarn](https://yarnpkg.com/). Yarn löst Abhängigkeiten mit einem anderen Algorithmus auf, was eine schnellere Benutzererfahrung bedeuten kann. Es gibt außerdem einige weitere aufkommende Clients wie [pnpm](https://pnpm.js.org/).

## Paket-Registrys

Damit ein Paketmanager funktioniert, muss er wissen, woher Pakete installiert werden sollen. Dies erfolgt in Form einer Paket-Registry. Die Registry ist ein zentraler Ort, an dem ein Paket veröffentlicht wird und von dem es daher installiert werden kann. npm ist nicht nur ein Paketmanager, sondern auch der Name der am häufigsten verwendeten Paket-Registry für JavaScript-Pakete. Die npm-Registry befindet sich unter [npmjs.com](https://www.npmjs.com/).

npm ist nicht die einzige Option. Sie könnten Ihre eigene Paket-Registry verwalten — Produkte wie [Microsoft Azure](https://azure.microsoft.com/) ermöglichen Ihnen die Erstellung von Proxys für die npm-Registry (sodass Sie bestimmte Pakete überschreiben oder sperren können), [GitHub bietet ebenfalls einen Paket-Registry-Dienst](https://docs.github.com/en/packages) an, und im Laufe der Zeit werden wahrscheinlich weitere Optionen hinzukommen.

Wichtig ist, dass Sie sicherstellen, die für Sie beste Registry ausgewählt zu haben. Viele Projekte verwenden npm, und wir werden in unseren Beispielen im restlichen Modul dabei bleiben.

## Das Paket-Ökosystem verwenden

Gehen wir ein Beispiel durch, um Ihnen den Einstieg in die Verwendung eines Paketmanagers und einer Registry zum Installieren eines Befehlszeilen-Hilfsprogramms zu erleichtern.

Wir verwenden [Vite](https://vite.dev/), um eine leere Website zu erstellen. Im nächsten Artikel erweitern wir die Toolchain um weitere Tools und zeigen Ihnen, wie Sie die Website bereitstellen.

Vite stellt einige [Initialisierungsvorlagen](https://vite.dev/guide/#scaffolding-your-first-vite-project) mit allen erforderlichen Abhängigkeiten und Konfigurationen bereit, damit Sie schnell mit einem echten Projekt beginnen können. Zur Demonstration konfigurieren wir eine solche von Grund auf und verwenden die [React-Vorlage](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) als Referenz.

### Die App als npm-Paket einrichten

Erstellen Sie zunächst an einem sinnvollen Ort, den Sie später wiederfinden, ein neues Verzeichnis für unsere experimentelle App. Wir nennen es `npm-experiment`, aber Sie können es beliebig nennen:

```bash
mkdir npm-experiment
cd npm-experiment
```

Initialisieren wir anschließend unsere App als npm-Paket. Dadurch wird eine Konfigurationsdatei — `package.json` — erstellt, in der wir unsere Konfigurationsdetails speichern können, falls wir diese Umgebung später erneut erstellen oder das Paket sogar in der npm-Registry veröffentlichen möchten (obwohl dies für unseren Artikel nicht relevant ist, da wir eine Anwendung und keine wiederverwendbare Bibliothek entwickeln).

Geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Verzeichnis `npm-experiment` befinden:

```bash
npm init
```

Nun werden Ihnen einige Fragen gestellt. npm erstellt anschließend auf Grundlage der Antworten eine Standarddatei `package.json`. Beachten Sie, dass diese für unsere Zwecke nicht relevant sind, da sie nur verwendet werden, wenn Sie Ihr Paket in einer Registry veröffentlichen und andere es installieren und importieren möchten.

- `name`: Ein Name zur Identifizierung der App. Drücken Sie einfach <kbd>Return</kbd>, um den Standardwert `npm-experiment` zu übernehmen.
- `version`: Die anfängliche Versionsnummer der App. Drücken Sie erneut einfach <kbd>Return</kbd>, um den Standardwert `1.0.0` zu übernehmen.
- `description`: Eine kurze Beschreibung des Zwecks der App. Wir lassen dies hier aus, aber Sie können auch beliebigen Text eingeben. Drücken Sie <kbd>Return</kbd>.
- `entry point`: Dies ist die JavaScript-Datei, die ausgeführt wird, wenn andere Ihr Paket importieren. Sie hat für uns keinen Nutzen, drücken Sie daher einfach <kbd>Return</kbd>.
- `test command`, `git repository` und `keywords`: Drücken Sie jeweils <kbd>Return</kbd>, um diese vorerst leer zu lassen.
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

Wir fügen package.json zwei weitere Zeilen hinzu:

- `"type": "module"`, wodurch Node alle `.js`-Dateien als [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) statt als alte CommonJS-Module interpretiert. Es ist im Allgemeinen eine gute Gewohnheit.
- `"private": true`, wodurch verhindert wird, dass Sie Ihr Paket versehentlich in der npm-Registry veröffentlichen.

Fügen Sie diese Zeilen direkt unterhalb von `"name"` hinzu:

```json
{
  "name": "npm-experiment",
  "type": "module",
  "private": true
  // …
}
```

Dies ist also die Konfigurationsdatei, die Ihr Paket definiert. Das genügt zunächst, fahren wir fort.

> [!NOTE]
> [Die package.json-Datei](https://scrimba.com/intro-to-git-c0l4grs2sa) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine praktische Einführung in die Verwendung von `package.json`-Dateien.

### Vite installieren

Zunächst installieren wir Vite, das Build-Tool für unsere Website. Es ist dafür verantwortlich, unsere HTML-, CSS- und JavaScript-Dateien zu einem für den Browser optimierten Bundle zusammenzuführen.

```bash
npm install --save-dev vite
```

Sobald _alle Dinge_ erledigt sind, sehen Sie sich erneut Ihre Datei package.json an. Sie werden feststellen, dass npm ein neues Feld, `devDependencies`, hinzugefügt hat:

```json
{
  "devDependencies": {
    "vite": "^5.2.13"
  }
}
```

Dies ist Teil der npm-Magie — wenn Sie Ihre Codebasis künftig an einen anderen Ort oder auf einen anderen Computer verschieben, können Sie dieselbe Einrichtung durch Ausführen des Befehls `npm install` wiederherstellen. npm betrachtet dann die Abhängigkeiten und installiert sie für Sie.

Ein Nachteil ist, dass Vite nur innerhalb unserer App `npm-experiment` verfügbar ist; Sie können es nicht in einem anderen Verzeichnis ausführen. Die Vorteile überwiegen jedoch die Nachteile.

Beachten Sie, dass wir `vite` als Entwicklungsabhängigkeit installiert haben. Dieser Unterschied spielt bei einer Anwendung selten eine Rolle, bei einer Bibliothek bedeutet er jedoch, dass andere bei der Installation Ihres Pakets Vite nicht implizit installieren. Normalerweise ist für Anwendungen jedes im Quellcode importierte Paket eine echte Abhängigkeit, während jedes für die Entwicklung verwendete Paket (meist als Befehlszeilentool) eine Entwicklungsabhängigkeit ist. Installieren Sie echte Abhängigkeiten, indem Sie das Flag `--save-dev` entfernen.

Sie werden außerdem einige neu erstellte Dateien finden:

- `node_modules`: Die zum Ausführen von Vite benötigten Abhängigkeitsdateien. npm hat sie alle für Sie heruntergeladen.
- `package-lock.json`: Eine Lockdatei, die die exakten Informationen speichert, die zum Wiederherstellen des Verzeichnisses `node_modules` erforderlich sind. Dadurch wird sichergestellt, dass das Verzeichnis `node_modules` auf verschiedenen Computern gleich ist, solange die Lockdatei unverändert bleibt.

Sie müssen sich nicht um diese Dateien kümmern, da sie von npm verwaltet werden. Wenn Sie Git verwenden, sollten Sie `node_modules` zu Ihrer Datei `.gitignore` hinzufügen. `package-lock.json` sollten Sie im Allgemeinen jedoch beibehalten, da sie, wie erwähnt, verwendet wird, um den Zustand von `node_modules` auf verschiedenen Computern zu synchronisieren.

### Unsere Beispiel-App einrichten

Wie auch immer, weiter mit der Einrichtung.

In Vite steht die Datei `index.html` im Mittelpunkt. Sie definiert den Ausgangspunkt Ihrer App, und Vite verwendet sie, um andere Dateien zu finden, die zum Erstellen Ihrer App benötigt werden. Erstellen Sie im Verzeichnis `npm-experiment` eine Datei `index.html` und geben Sie ihr den folgenden Inhalt:

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

Beachten Sie, dass das `<script>`-Element eine Abhängigkeit von einer Datei namens `src/main.jsx` erstellt, die den Einstiegspunkt der JavaScript-Logik für die App deklariert. Erstellen Sie den Ordner `src` und darin `main.jsx`, lassen Sie die Datei jedoch vorerst leer.

> [!NOTE]
> Das Attribut [`type="module"`](/de/docs/Web/HTML/Reference/Elements/script/type) ist wichtig. Es weist den Browser an, das Skript als ES-Modul zu behandeln, wodurch wir die Syntax `import` und `export` in unserem JavaScript-Code verwenden können. Die Dateiendung lautet `.jsx`, weil wir im nächsten Artikel React-JSX-Syntax hinzufügen werden. Browser verstehen JSX nicht, aber Vite wandelt es für uns in reguläres JavaScript um, als ob Browser dies täten!

### Spaß mit Vite

Nun führen wir unser neu installiertes Vite-Tool aus. Führen Sie in Ihrem Terminal den folgenden Befehl aus:

```bash
npx vite
```

In Ihrem Terminal sollte ungefähr Folgendes ausgegeben werden:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Jetzt können wir vom vollständigen JavaScript-Paket-Ökosystem profitieren. Zunächst läuft jetzt ein lokaler Webserver unter `http://localhost:5173`. Sie werden vorerst nichts sehen, aber das Tolle ist: Wenn Sie Änderungen an Ihrer App vornehmen, erstellt Vite sie neu und aktualisiert den Server automatisch, sodass Sie sofort sehen können, welche Auswirkung Ihr Update hatte.

Sie können den Entwicklungsserver jederzeit mit <kbd>Ctrl</kbd> + <kbd>C</kbd> stoppen und ihn mit demselben Befehl erneut starten. Wenn Sie ihn weiterlaufen lassen möchten, können Sie ein neues Terminalfenster öffnen, um andere Befehle auszuführen.

Nun zu einigen Seiteninhalten. Fügen wir zur Demonstration ein Diagramm zur Seite hinzu. Wir verwenden das Paket [plotly.js](https://www.npmjs.com/package/plotly.js), eine Bibliothek zur Datenvisualisierung. Installieren Sie es, indem Sie den folgenden Befehl ausführen:

```bash
npm install plotly.js-dist-min
```

Beachten Sie, dass wir ohne das Flag `--save-dev` installieren. Wie zuvor erwähnt, liegt das daran, dass wir dieses Paket tatsächlich in unserem Quellcode verwenden werden und nicht nur als Befehlszeilentool. Dieser Befehl fügt Ihrer Datei `package.json` ein neues Objekt `"dependencies"` mit `plotly.js-dist-min` hinzu.

> [!NOTE]
> Hier haben wir das Paket für Sie ausgewählt, um unsere Aufgabe abzuschließen. Wenn Sie eigenen Code schreiben, berücksichtigen Sie beim Finden und Installieren einer Abhängigkeit die folgenden Fragen:
>
> - Benötige ich überhaupt eine Abhängigkeit? Ist es möglich, dies mit integrierten Funktionen umzusetzen, oder ist es einfach genug, es selbst zu schreiben?
> - Was genau muss ich tun? Je detaillierter Sie sind, desto wahrscheinlicher finden Sie ein Paket, das genau das tut, was Sie benötigen. Sie können auf npm oder Google nach Schlüsselwörtern suchen. Bevorzugen Sie außerdem kleine gegenüber großen Paketen, da Letztere bei Installation, Ausführung usw. zu Leistungsproblemen führen können.
> - Ist die Abhängigkeit vertrauenswürdig und gut gepflegt? Prüfen Sie, wann die letzte Version veröffentlicht wurde, wer der Autor ist und wie viele wöchentliche Downloads das Paket hat. Die Vertrauenswürdigkeit eines Pakets einzuschätzen, ist eine Fähigkeit, die mit Erfahrung wächst, da Sie Faktoren berücksichtigen müssen wie die Wahrscheinlichkeit, dass das Paket Aktualisierungen benötigt, oder wie viele Personen es benötigen könnten.

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

Gehen Sie zurück zu `http://localhost:5173`; dort sehen Sie ein Diagramm auf der Seite. Ändern Sie die verschiedenen Zahlen und beobachten Sie, wie das Diagramm jedes Mal aktualisiert wird, wenn Sie Ihre Datei speichern.

### Unseren Code für die Produktion erstellen

Dieser Code ist jedoch nicht produktionsbereit. Die meisten Build-Tooling-Systeme, einschließlich Vite, verfügen über einen „Entwicklungsmodus“ und einen „Produktionsmodus“. Der wichtige Unterschied besteht darin, dass viele der hilfreichen Funktionen, die Sie während der Entwicklung verwenden, auf der endgültigen Website nicht benötigt werden und daher für die Produktion entfernt werden, z. B. „Hot Module Replacement“, „Live Reloading“ und „unkomprimierter und kommentierter Quellcode“. Dies ist keineswegs eine vollständständige Liste, aber es sind einige der häufigen Funktionen der Webentwicklung, die in der Entwicklungsphase sehr hilfreich sind, in der Produktion jedoch nicht besonders nützlich. In der Produktion würden sie Ihre Website nur aufblähen.

Stoppen Sie nun den laufenden Vite-Entwicklungsserver mit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Wir können jetzt unsere einfache Beispiel-Website für eine imaginäre Bereitstellung vorbereiten. Vite stellt einen zusätzlichen Befehl `build` bereit, um Dateien zu erzeugen, die für die Veröffentlichung geeignet sind.

Führen Sie den folgenden Befehl aus:

```bash
npx vite build
```

Sie sollten eine Ausgabe wie die folgende sehen:

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

Vite erstellt ein Verzeichnis namens `dist`. Wenn Sie es sich ansehen, enthält es eine `index.html`, die der Datei im Stammverzeichnis sehr ähnlich sieht. Die Quelle des `script` wurde jedoch durch einen Pfad zum Ordner `assets` ersetzt. Der Ordner `assets` enthält transformierte JavaScript-Ausgabe, die nun minimiert und für die Produktion optimiert ist.

> [!NOTE]
> Möglicherweise sind Sie wegen der Warnung besorgt, dass ein Chunk zu groß ist. Das ist zu erwarten, da wir eine Bibliothek laden, die im Hintergrund viele Aufgaben erledigt (stellen Sie sich vor, Sie müssten den gesamten Code selbst schreiben, um dasselbe Diagramm zu zeichnen). Vorerst müssen wir uns darüber keine Gedanken machen.

## Ein grober Leitfaden für Paketmanager-Clients

Dieses Tutorial hat das Vite-Paket mit npm installiert, aber wie bereits erwähnt gibt es einige Alternativen. Es lohnt sich zumindest zu wissen, dass sie existieren, und eine grobe Vorstellung von den gängigen Befehlen der Tools zu haben. Sie haben bereits einige davon in Aktion gesehen, aber sehen wir uns die anderen an.

Die Liste wird mit der Zeit wachsen, aber zum Zeitpunkt der Erstellung sind die folgenden wichtigen Paketmanager verfügbar:

- npm unter [npmjs.org](https://www.npmjs.com/)
- pnpm unter [pnpm.js.org](https://pnpm.js.org/)
- Yarn unter [yarnpkg.com](https://yarnpkg.com/)

npm und pnpm sind aus Sicht der Befehlszeile ähnlich — tatsächlich strebt pnpm vollständige Parität mit den von npm angebotenen Argumentoptionen an. Es unterscheidet sich dadurch, dass es eine andere Methode zum Herunterladen und Speichern der Pakete auf Ihrem Computer verwendet, mit dem Ziel, den insgesamt benötigten Speicherplatz zu reduzieren.

Wo in den nachfolgenden Beispielen npm gezeigt wird, kann pnpm ersetzt werden und der Befehl funktioniert.

Yarn wird oft als schneller als npm hinsichtlich des Installationsprozesses betrachtet (obwohl Ihre Erfahrungen abweichen können). Dies ist für Entwickler wichtig, weil beim Warten auf die Installation und das Kopieren von Abhängigkeiten auf den Computer erhebliche Zeit verloren gehen kann.

Beachten Sie jedoch, dass der npm-Paketmanager **nicht** erforderlich ist, um Pakete aus der npm-Registry zu installieren. pnpm und Yarn können dasselbe `package.json`-Format wie npm verwenden und jedes Paket aus der npm-Registry sowie anderen Paket-Registrys installieren.

Sehen wir uns die gängigen Aktionen an, die Sie mit Paketmanagern durchführen möchten.

> [!NOTE]
> Wir demonstrieren sowohl npm- als auch Yarn-Befehle. Sie sind nicht dafür gedacht, im selben Projekt ausgeführt zu werden. Sie sollten Ihr Projekt entweder mit npm oder mit Yarn einrichten und durchgängig Befehle dieses Paketmanagers verwenden.

### Ein neues Projekt initialisieren

```bash
npm init
yarn init
```

Wie oben gezeigt, fordert Sie dies auf und führt Sie durch eine Reihe von Fragen zur Beschreibung Ihres Projekts (Name, Lizenz, Beschreibung usw.). Anschließend wird eine `package.json` für Sie generiert, die Metainformationen zu Ihrem Projekt und dessen Abhängigkeiten enthält.

### Abhängigkeiten installieren

```bash
npm install vite
yarn add vite
```

Wir haben `install` auch oben bereits in Aktion gesehen. Dadurch würde das Paket `vite` direkt zum Arbeitsverzeichnis in einem Unterverzeichnis namens `node_modules` hinzugefügt, zusammen mit den eigenen Abhängigkeiten von `vite`.

Standardmäßig installiert dieser Befehl die neueste Version von `vite`, aber auch dies können Sie steuern. Sie können `vite@4` anfordern, wodurch Sie die neueste Version 4.x erhalten (das ist 4.5.3). Oder Sie könnten `vite@^4.0.0` versuchen, was die neueste Version nach oder einschließlich 4.0.0 bedeutet (dieselbe Bedeutung wie oben).

### Abhängigkeiten aktualisieren

```bash
npm update
yarn upgrade
```

Dies prüft die aktuell installierten Abhängigkeiten und aktualisiert sie, falls ein Update verfügbar ist, innerhalb des im Paket angegebenen Bereichs.

Der Bereich wird in der Version der Abhängigkeit in Ihrer `package.json` angegeben, beispielsweise `"vite": "^5.2.13"` — in diesem Fall bedeutet das Caret-Zeichen `^` alle Minor- und Patch-Releases ab einschließlich 5.2.13 bis ausschließlich 6.0.0.

Dies wird mithilfe eines Systems namens [semver](https://semver.org/) bestimmt. Es mag in der Dokumentation etwas kompliziert aussehen, kann aber vereinfacht werden, indem Sie nur die zusammenfassenden Informationen berücksichtigen: Eine Version wird als `MAJOR.MINOR.PATCH` dargestellt, beispielsweise ist 2.0.1 die Major-Version 2 mit Patch-Version 1. Eine ausgezeichnete Möglichkeit, semver-Werte auszuprobieren, ist der [semver-Rechner](https://semver.npmjs.com/).

Wichtig ist, dass `npm update` die Abhängigkeiten nicht über den in `package.json` definierten Bereich hinaus aktualisiert — dazu müssen Sie diese Version gezielt installieren.

### Weitere Befehle

Sie können online mehr über die einzelnen Befehle für [npm](https://docs.npmjs.com/cli-documentation/) und [Yarn](https://classic.yarnpkg.com/en/docs/cli/) erfahren. Auch die Befehle von [pnpm](https://pnpm.io/cli/add) entsprechen npm, mit einigen zusätzlichen Erweiterungen.

## Eigene Befehle erstellen

Die Paketmanager unterstützen außerdem das Erstellen eigener Befehle und deren Ausführung über die Befehlszeile. Beispielsweise haben wir zuvor den Befehl `vite` mit `npx` aufgerufen, um den Vite-Entwicklungsserver zu starten. Wir könnten den folgenden Befehl erstellen:

```bash
npm run dev
# or yarn run dev
```

Dies würde ein benutzerdefiniertes Skript zum Starten unseres Projekts im „Entwicklungsmodus“ ausführen. Tatsächlich fügen wir dies regelmäßig in alle Projekte ein, da die lokale Entwicklungsumgebung in der Regel etwas anders ausgeführt wird als in der Produktion.

Wenn Sie versucht haben, dies in Ihrem früheren Testprojekt auszuführen, würde wahrscheinlich die Meldung erscheinen, dass das „dev script is missing“. Das liegt daran, dass npm, Yarn (und ähnliche Tools) nach einer Eigenschaft namens `dev` in der Eigenschaft `scripts` Ihrer Datei `package.json` suchen. Erstellen wir daher in unserer `package.json` einen benutzerdefinierten Kurzbefehl — „dev“. Wenn Sie dem vorherigen Tutorial gefolgt sind, sollten Sie im Verzeichnis npm-experiment eine Datei `package.json` haben. Öffnen Sie sie; ihr Element `scripts` sollte wie folgt aussehen:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Aktualisieren Sie es, sodass es wie folgt aussieht, und speichern Sie die Datei:

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

Dies sollte Vite starten und denselben lokalen Entwicklungsserver starten, den wir zuvor gesehen haben.

Beachten Sie, dass das hier definierte Skript das Präfix `npx` nicht mehr benötigt. Das liegt daran, dass npm- (und yarn-)Befehle intelligent sind: Sie suchen nach Befehlszeilentools, die lokal im Projekt installiert sind, bevor sie versuchen, sie mit herkömmlichen Methoden zu finden (an den Orten, an denen Ihr Computer normalerweise Software speichert und auffindbar macht). Sie können [mehr über die technischen Einzelheiten des Befehls `run` erfahren](https://docs.npmjs.com/cli/commands/npm-run/), obwohl Ihre eigenen Skripte in den meisten Fällen problemlos ausgeführt werden.

Dieses spezielle Skript mag unnötig erscheinen — `npm run dev` enthält mehr zu tippende Zeichen als `npx vite`, aber es ist eine Form der _Abstraktion_. Dadurch können wir dem Befehl `dev` künftig weitere Aufgaben hinzufügen, etwa das Setzen von Umgebungsvariablen, das Generieren temporärer Dateien usw., ohne den Befehl zu verkomplizieren.

Sie können der Eigenschaft `scripts` alle möglichen Dinge hinzufügen, die Ihnen bei Ihrer Arbeit helfen. Hier ist beispielsweise, was Vite in der Vorlage empfiehlt:

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

Damit sind wir am Ende unserer Tour durch Paketmanager angelangt. Als Nächstes bauen wir eine Beispiel-Toolchain auf und setzen alles, was wir bisher gelernt haben, in die Praxis um.

## Siehe auch

- [Referenz zu npm-Skripten](https://docs.npmjs.com/cli/using-npm/scripts/)
- [Referenz zu package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
