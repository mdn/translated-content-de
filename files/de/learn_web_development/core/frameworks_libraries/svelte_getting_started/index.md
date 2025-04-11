---
title: Erste Schritte mit Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel bieten wir Ihnen eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools unterscheidet, die wir bisher gesehen haben. Anschließend lernen wir, wie Sie Ihre Entwicklungsumgebung einrichten, eine Beispielapp erstellen, die Struktur des Projekts verstehen und sehen, wie Sie es lokal ausführen und für die Produktion bauen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          über Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/der Kommandozeile</a
          > verfügen.
        </p>
        <p>
          Svelte ist ein Compiler, der aus unseren Quellen minimalen und hochoptimierten
          JavaScript-Code generiert; Sie benötigen ein Terminal mit installierten Node +
          npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Svelte-Entwicklungsumgebung einrichten, eine Starter-App erstellen und bauen und
        die Grundlagen verstehen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zur Erstellung von reichhaltigen Benutzeroberflächen

Svelte bietet einen anderen Ansatz für die Erstellung von Web-Apps als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers während der Ausführung der App erledigen, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur dann stattfindet, wenn Sie Ihre App bauen, und hochoptimiertes Vanilla-JavaScript produziert.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungs-Bundles und bessere Leistung, sondern auch ein Entwicklererlebnis, das für Menschen zugänglicher ist, die über begrenzte Erfahrung mit dem modernen Tooling-Ökosystem verfügen.

Svelte orientiert sich eng am klassischen Webentwicklungsmodell von HTML, CSS und JS und fügt nur einige Erweiterungen zu HTML und JavaScript hinzu. Es hat arguably weniger Konzepte und Tools zu erlernen als einige der anderen Framework-Optionen.

Seine derzeitigen Hauptnachteile sind, dass es ein junges Framework ist — sein Ökosystem ist daher hinsichtlich Tooling, Support, Plugins, klaren Nutzungsmustern usw. begrenzter als bei ausgereifteren Frameworks, und es gibt auch weniger Beschäftigungsmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden später in dieser Tutorialserie darauf eingehen.

Wir ermutigen Sie, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorialserie zurückkehren, um zu lernen, wie man etwas etwas eingehenderes aufbaut.

## Anwendungsfälle

Svelte kann zum Entwickeln kleiner Teile einer Benutzeroberfläche oder ganzer Anwendungen verwendet werden. Sie können entweder von Grund auf beginnen und Svelte Ihre Benutzeroberfläche steuern lassen, oder Sie können es schrittweise in eine bestehende Anwendung integrieren.

Dennoch ist Svelte besonders geeignet, um folgende Situationen anzugehen:

- Webanwendungen, die für leistungsschwache Geräte gedacht sind: Mit Svelte erstellte Anwendungen haben kleinere Bundle-Größen, was ideal für Geräte mit langsamen Netzverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB, die heruntergeladen, geparst, ausgeführt und im Speicher behalten werden müssen.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, stellen die Leistungsvorteile eines Frameworks ohne Laufzeit-Overhead sicher, dass Benutzerinteraktionen schnell und reaktionsschnell sind.
- Einarbeitung von Personen mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Besonderheiten von Svelte leicht in kurzer Zeit erfassen und mit dem Aufbau von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Webframeworks zu finden sind, wie etwa dateibasiertes Routing, serverseitiges Rendering (SSR), seitenweise spezifische Render-Modi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimal JavaScript-Code generieren, ohne jeglichen Laufzeit-Overhead. Um dies zu erreichen, erweitert Svelte Vanilla-Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup erlaubt und Direktiven bereitstellt, um Bedingungen und Schleifen zu verwenden, ähnlich wie bei Handlebars.
- Es erweitert CSS, indem es einen Scoping-Mechanismus hinzufügt, der jedem Komponent erlaubt, seine eigenen Stile zu definieren, ohne das Risiko eines Zusammenstoßes mit den Stilen anderer Komponenten.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache neu interpretiert, um echte Reaktivität und einfache Zustandsverwaltung von Komponenten zu erreichen.

Der Compiler greift nur in sehr spezifischen Situationen ein und nur im Kontext von Svelte-Komponenten. Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich arbeiten Sie größtenteils mit Vanilla-JavaScript.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach einen `<script src="svelte.js">`-Tag auf Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Langzeit-Support-Version (LTS) zu verwenden. Node enthält npm (den Node Package Manager) und npx (den Node Package Runner). Beachten Sie, dass Sie statt npm auch den Paketmanager Yarn verwenden können, aber wir gehen davon aus, dass Sie npm in diesem Tutorial verwenden. Siehe [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um eine Parität mit Unix/macOS-Terminals zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. Gitbash (das Teil des [git für Windows-Toolsets](https://gitforwindows.org/) ist) oder das [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Siehe [Einführung in die Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen.

Siehe auch die folgenden Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung in npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, einfach die Starter-Template-Anwendung herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können sich das Herunterladen und Entpacken ersparen und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> Degit macht keine Magie — es ermöglicht Ihnen lediglich, die neueste Version der Inhalte eines Git-Repos herunterzuladen und zu entpacken. Dies ist viel schneller als `git clone` zu verwenden, da es nicht den gesamten Verlauf des Repos herunterladen oder eine vollständige lokale Kopie erstellen wird.

Nachdem Sie `npm run dev` ausgeführt haben, wird Svelte Ihre Anwendung kompilieren und bauen. Es wird einen lokalen Server unter `localhost:8080` starten. Svelte wird nach Dateiaktualisierungen suchen und die App für Sie automatisch neu kompilieren und aktualisieren, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser wird etwas wie folgt anzeigen:

![Eine einfache Startseite, die Hallo Welt sagt und einen Link zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

### Anwendungsstruktur

Die Startervorlage kommt mit folgender Struktur:

```plain
moz-todo-svelte
├── README.md
├── package.json
├── package-lock.json
├── rollup.config.js
├── .gitignore
├── node_modules
├── public
│   ├── favicon.png
│   ├── index.html
│   ├── global.css
│   └── build
│       ├── bundle.css
│       ├── bundle.js
│       └── bundle.js.map
├── scripts
│   └── setupTypeScript.js
└── src
    ├── App.svelte
    └── main.js
```

Der Inhalt ist wie folgt:

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es zu organisieren. Sie müssen diese Datei nicht vollständig verstehen, um dieses Tutorial abzuschließen, aber wenn Sie mehr darüber erfahren möchten, können Sie in der Dokumentation über [`package.json`-Verwaltung](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com nachlesen; wir sprechen auch darüber in unserem [Grundlagen der Paketverwaltung Tutorial](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).
- `node_modules`: Hier speichert node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Sagt git, welche Dateien oder Ordner aus dem Projekt ignoriert werden sollen — nützlich, wenn Sie sich entscheiden, Ihre App in einem git-Repo zu speichern.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei sagt Rollup, wie es Ihre App kompilieren und bauen soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` statt dessen erstellen.
- `scripts`: Enthält erforderliche Setup-Skripte. Sollte derzeit nur `setupTypeScript.js` enthalten.

  - `setupTypeScript.js`: Dieses Skript richtet die TypeScript-Unterstützung in Svelte ein. Wir werden später im letzten Artikel darüber sprechen.

- `src`: Dieses Verzeichnis ist der Ort, an dem der Quellcode Ihrer Anwendung gespeichert ist – hier werden Sie den Code für Ihre App erstellen.

  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher rendert sie nur die Nachricht ‚Hello World!‘.
  - `main.js`: Der Einstiegspunkt unserer Anwendung. Es instanziiert einfach die `App`-Komponente und bindet sie an den `<body>` Ihrer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon für Ihre App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfangs ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält ungescoppte Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.

    - `bundle.css`: Die CSS-Datei, die von Svelte aus den für jede Komponente definierten Stilen generiert wurde.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Ein erster Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien geschrieben, die eine Obermenge von HTML verwenden.

Alle drei Abschnitte — `<script>`, `<style>` und Markup — sind optional und können in beliebiger Reihenfolge erscheinen.

```html
<script>
  // logic goes here
</script>

<style>
  /* styles go here */
</style>

<!-- markup (zero or more HTML elements) goes here -->
```

> [!NOTE]
> Weitere Informationen zum Komponentenformat finden Sie in der [Svelte-Komponenten-Dokumentation](https://svelte.dev/docs/svelte-components).

Mit diesem Wissen werfen wir einen Blick auf die Datei `src/App.svelte`, die mit der Vorlage geliefert wurde. Sie sollten etwas Folgendes sehen:

```html
<script>
  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

### Der `<script>`-Abschnitt

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Komponenteninstanz erstellt wird. Variablen, die auf oberster Ebene deklariert (oder importiert) werden, sind aus dem Markup der Komponente 'sichtbar'. Top-Level-Variablen sind die Art und Weise, wie Svelte den Zustand der Komponente handhabt, und sie sind standardmäßig reaktiv. Wir werden später detailliert erklären, was das bedeutet.

```html
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu markieren, was bedeutet, dass sie für Verbraucher der Komponente (z. B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie vertraut bleibt.

### Der Markup-Abschnitt

Im Markup-Bereich können Sie beliebiges HTML einfügen und zusätzlich gültige JavaScript-Ausdrücke in einfachen geschweiften Klammern (`{}`) einfügen. In diesem Fall binden wir den Wert der `name`-Prop direkt nach dem `Hello`-Text ein.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele ermöglichen es Ihnen, einen Teil des Markups bedingt zu rendern, durch eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrung mit CSS haben, sollte das folgende Snippet Sinn machen:

```html
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element an. Was passiert mit anderen Komponenten, die `<h1>`-Elemente in sich haben?

In Svelte werden CSS innerhalb eines `<style>`-Blocks einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert, indem ausgewählten Elementen eine Klasse hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies experimentell sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, auf das _HELLO WORLD!_-Label rechts/<kbd>Ctrl</kbd>-klicken und _Überprüfen_ wählen:

![Svelte-Starter-App mit geöffneten Devtools, die Klassen für gescoppte Stile zeigen](02-svelte-component-scoped-styles.png)

Wenn die App kompiliert wird, ändert Svelte unsere `h1`-Stildefinition zu `h1.svelte-1tky8bj` und verändert jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, sodass es die erforderlichen Stile abruft.

> [!NOTE]
> Sie können dieses Verhalten außer Kraft setzen und Stile auf einen Selektor global anwenden, indem Sie den `:global()`-Modifier verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Jetzt, da wir eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir beginnen, einige Änderungen vorzunehmen.
An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren — ändern Sie zum Beispiel das `<h1>`-Element in `App.svelte`, sodass es so aussieht:

```html
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App unter `localhost:8080` wird automatisch aktualisiert.

### Ein erster Blick auf Svelte-Reaktivität

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework den DOM automatisch aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird die Reaktivität dadurch ausgelöst, dass einer Top-Level-Variablen in einer Komponente ein neuer Wert zugewiesen wird. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unsere `App`-Komponente aufnehmen und einen Button, um sie auszuführen.

Versuchen Sie, Ihre `<script>`- und Markup-Bereiche wie folgt zu aktualisieren:

```html
<script>
  export let name;

  function toggleName() {
    if (name === "world") {
      name = "Svelte";
    } else {
      name = "world";
    }
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <button on:click="{toggleName}">Toggle name</button>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Wann immer der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die dann den Wert der `name`-Variable aktualisiert.

Wie Sie sehen, wird das `<h1>`-Label automatisch aktualisiert. Im Hintergrund erstellt Svelte den JavaScript-Code, um den DOM immer dann zu aktualisieren, wenn sich der Wert der `name`-Variable ändert, ohne Virtual DOM oder andere komplexe Abgleichsmechanismen zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist Svelte's Syntax, um auf DOM-Ereignisse zu lauschen.

## Überprüfung von main.js: Der Einstiegspunkt unserer App

Lassen Sie uns `src/main.js` öffnen, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht zunächst so aus:

```js
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
```

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden möchten. Dann wird sie mit `new App` instanziiert, wobei ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in dem wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jedem Prop der `App`-Komponente zugeordnet werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien nett zusammenarbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Es fügt auch den Code in `src/main.js` hinzu, um auf die Features jeder Komponente zu verweisen.

Schließlich enthält die Datei `public/index.html` die generierten `bundle.css`- und `bundle.js`-Dateien:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>Svelte app</title>

    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/build/bundle.css" />

    <script defer src="/build/bundle.js"></script>
  </head>

  <body></body>
</html>
```

Die minifizierte Version von `bundle.js` wiegt etwas mehr als 3KB, wodurch das "Svelte-Laufzeitruntime" (nur 300 Zeilen JavaScript-Code) und die `App.svelte` kompilierte Komponente enthalten sind. Wie Sie sehen, ist `bundle.js` die einzige JavaScript-Datei, auf die in `index.html` verwiesen wird. Es werden keine anderen Bibliotheken auf die Webseite geladen.

Dies ist ein viel kleinerer Fußabdruck als kompilierte Bundles anderer Frameworks. Beachten Sie, dass es bei Code-Bundles nicht nur auf die Größe der Dateien ankommt, die Sie herunterladen müssen. Dies ist ein ausführbarer Code, der analysiert, ausgeführt und im Speicher gehalten werden muss. Daher macht dies wirklich einen Unterschied, insbesondere bei Geräten mit geringer Leistung oder CPU-intensiven Anwendungen.

## Befolgen dieses Tutorials

In dieser Tutorialserie werden Sie eine vollständige Webanwendung erstellen. Wir werden alle Grundlagen von Svelte erlernen und auch mehrere fortgeschrittene Themen.

Sie können einfach den Inhalt lesen, um ein gutes Verständnis der Svelte-Features zu bekommen, aber Sie werden das meiste aus dieser Anleitung herausholen, wenn Sie die App beim Mitmachen codieren. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository mit einem Ordner bereit, der den Quellcode der App enthält, wie sie zu Beginn jedes Tutorials aussieht.

Svelte bietet auch eine Online-REPL, die ein Spielplatz für Live-Coding von Svelte-Apps im Web ist, ohne dass etwas auf Ihrem Computer installiert werden muss. Wir bieten für jeden Artikel eine REPL an, damit Sie sofort mit dem Codieren beginnen können. Lassen Sie uns ein wenig mehr darüber sprechen, wie Sie diese Tools verwenden können.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Website, die Hosting für Ihre Repositories und mehrere Werkzeuge zur Arbeit mit ihnen bietet.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel einfach herunterladen können. Sie werden auch in der Lage sein, den Code so zu erhalten, wie er nach Abschluss des Artikels sein sollte, nur für den Fall, dass Sie sich verirren.

Nach [Installation von git](https://git-scm.com/downloads), um das Repository zu klonen, sollten Sie ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann, zu Beginn jedes Artikels, können Sie einfach in den entsprechenden Ordner `cd` und die App im Entwicklungsmodus starten, um zu sehen, wie ihr aktueller Zustand sein soll, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über git und GitHub erfahren möchten, haben wir eine Liste mit nützlichen Leitfäden zusammengestellt — siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie die Dateien nur herunterladen möchten, ohne das git-Repo zu klonen, können Sie das Degit-Tool so verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit erstellt kein lokales git-Repo, es lädt nur die Dateien des angegebenen Ordners herunter.

### Verwendung der Svelte REPL

Ein REPL ([Read–Eval–Print Loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen — viele Programmiersprachen bieten einen REPL an.

Der Svelte-REPL ist weit mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, komplette Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um von jeder Maschine aus ohne Installation von irgendetwas mit Svelte zu spielen. Es wird auch weitgehend von der Svelte-Community genutzt. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer extrem nützlich, eine REPL-Instanz zu erstellen, die das Problem zeigt.

Werfen wir einen schnellen Blick auf den Svelte REPL und wie Sie ihn verwenden würden. Es sieht so aus:

![der svelte REPL in Aktion, zeigt Komponenten-Code auf der linken Seite und Ausgabe auf der rechten Seite](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und gehen Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten und rechts die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht es Ihnen, `.svelte`- und `.js`-Dateien zu erstellen und sie neu zu arrangieren. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie z.B.: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber befindet sich der Titel des REPL. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Registerkarten:

  - Die _Ergebnis_-Registerkarte zeigt Ihre Anwendungs-Ausgabe und bietet unten eine Konsole.
  - Die _JS-Ausgabe_-Registerkarte ermöglicht es Ihnen, den von Svelte generierten JavaScript-Code zu inspizieren und Compiler-Optionen zu setzen.
  - Die _CSS-Ausgabe_-Registerkarte zeigt das von Svelte generierte CSS.

- Über den Registerkarten finden Sie eine Werkzeugleiste, die es Ihnen ermöglicht, den Vollbildmodus zu aktivieren und Ihre App herunterzuladen. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie auch die App forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Ergebnisregisterkarte aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel ist hier der Link für einen REPL, der unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Version von Svelte in der URL angeben können. Dies ist nützlich, um Probleme zu melden, die mit einer bestimmten Version von Svelte zusammenhängen.

Wir werden zu Beginn und Ende jedes Artikels einen REPL bereitstellen, damit Sie sofort mit uns zusammen kodieren können.

> [!NOTE]
> Zurzeit kann der REPL Ordnernamen nicht richtig verarbeiten. Wenn Sie das Tutorial im REPL folgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Wenn Sie dann einen Pfad im Code sehen, z. B. `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z. B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Status der App zu erhalten, führen Sie aus:

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL mitzucodieren, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Dies bringt uns zum Ende unserer ersten Betrachtung von Svelte, einschließlich der Installation lokal, der Erstellung einer Starter-App und der Funktionsweise der Grundlagen. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen, eine To-do-Liste. Lassen Sie uns jedoch vorher einige der Dinge rekapitulieren, die wir gelernt haben.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenteingenschaften werden mit dem `export`-Schlüsselwort deklariert.
- Svelte-Komponenten können einfach verwendet werden, indem Sie die entsprechende `.svelte`-Datei importieren.
- Komponentenstile sind gescopt, sodass sie nicht miteinander kollidieren.
- Im Markupbereich können Sie durch geschweifte Klammern eingeschlossene beliebige JavaScript-Ausdrücke einfügen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Reaktivität wird einfach durch die Zuweisung eines neuen Wertes zu einer Top-Level-Variablen ausgelöst.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
