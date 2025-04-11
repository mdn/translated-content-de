---
title: Einstieg in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen bisher gesehenen Frameworks und Tools unterscheidet. Anschließend lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und sehen, wie man es lokal ausführt und für die Produktion baut.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sein und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
          > haben.
        </p>
        <p>
          Svelte ist ein Compiler, der aus unseren Quellen minimalen und hochoptimierten
          JavaScript-Code generiert; Sie benötigen ein Terminal mit installiertem Node +
          npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Einrichtung einer lokalen Svelte-Entwicklungsumgebung, das Erstellen und Bauen einer
        Starter-App sowie das Verstehen der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz für den Aufbau reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz für den Aufbau von Webanwendungen als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers während der Ausführung der App ausführen, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Bauen Ihrer App stattfindet und hochoptimiertes Vanilla-JavaScript produziert.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungs-Bundles und bessere Leistung, sondern auch eine für Entwickler zugänglichere Erfahrung, insbesondere für Leute mit begrenzter Erfahrung im modernen Tool-Ökosystem.

Svelte bleibt dem klassischen Webentwicklungsmodell von HTML, CSS und JS treu und fügt nur wenige Erweiterungen zu HTML und JavaScript hinzu. Es hat arguably weniger Konzepte und Tools zu lernen als einige der anderen Framework-Optionen.

Zu den Hauptnachteilen zählen, dass es sich um ein junges Framework handelt - sein Ökosystem ist daher in Bezug auf Tools, Unterstützung, Plugins, klare Nutzungsmuster usw. begrenzter als reifere Frameworks, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden es später in dieser Tutorial-Serie betrachten.

Wir ermutigen Sie, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas tiefgehenderes baut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu beginnen, indem Sie Svelte Ihre UI steuern lassen, oder es schrittweise in eine vorhandene Anwendung integrieren.

Svelte eignet sich besonders für folgende Situationen:

- Webanwendungen für leistungsschwache Geräte: Anwendungen, die mit Svelte erstellt wurden, haben kleinere Bundle-Größen, was ideal für Geräte mit langsamen Netzverbindungen und eingeschränkter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und im Speicher zu behalten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, sorgen die Performance-Gewinne, die durch ein Framework ohne Laufzeit-Overhead erzielt werden, dafür, dass Benutzerinteraktionen schnell und reaktionsschnell sind.
- Einführung von Personen mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine geringe Lernkurve. Webentwickler mit grundlegenden Kenntnissen in HTML, CSS und JavaScript können die Besonderheiten von Svelte in kurzer Zeit leicht erfassen und mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) gestartet, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Web-Frameworks zu finden sind, wie z. B. dateibasiertes Routing, serverseitiges Rendering (SSR), seiten-spezifische Rendering-Modi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Laufzeit-Overhead generieren. Um dies zu erreichen, erweitert Svelte Vanilla-Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup zulässt und Direktiven zur Nutzung von Bedingungen und Schleifen ähnlich wie bei Handlebars bereitstellt.
- Es erweitert CSS durch Hinzufügen eines Scoping-Mechanismus, der es jedem Komponent ermöglicht, eigene Stile zu definieren, ohne das Risiko, mit den Stilen anderer Komponenten in Konflikt zu geraten.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und die Verwaltung des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen ein und nur im Kontext von Svelte-Komponenten. Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich werden Sie größtenteils mit Vanilla-JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie kein `<script src="svelte.js">`-Tag zu Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Langzeitunterstützungs (LTS)-Version zu verwenden. Node enthält npm (den Node-Paket-Manager) und npx (den Node-Paket-Ausführer). Beachten Sie, dass Sie auch den Yarn-Paket-Manager anstelle von npm verwenden können, aber wir gehen in diesem Set von Tutorials davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie unter [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit einem Unix/macOS-Terminal zu haben, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. Gitbash (das Teil des [git für Windows-Toolsets](https://gitforwindows.org/) ist) oder [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Weitere Informationen hierzu und zu Terminalbefehlen im Allgemeinen finden Sie im [Command Line Crash Course](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Auch die folgenden Links können hilfreich sein:

- ["About npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Introducing npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, einfach die Starter-Vorlagenanwendung herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können das Herunterladen und Entpacken vermeiden und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> Degit macht keine Art von Magie — es ermöglicht Ihnen lediglich, die neueste Version des Inhalts eines Git-Repos herunterzuladen und zu entpacken. Dies ist viel schneller als `git clone` verwenden, da es nicht den gesamten Verlauf des Repos herunterladen oder ein vollständiges lokales Klonen erstellen wird.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und bauen. Es wird einen lokalen Server auf `localhost:8080` starten. Svelte überwacht Dateiaktualisierungen und kompiliert die App automatisch neu und aktualisiert sie für Sie, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser wird etwa so aussehen:

![Eine einfache Startseite, die "Hello World" anzeigt und einen Link zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

### Anwendungsstruktur

Die Starter-Vorlage hat die folgende Struktur:

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

Die Inhalte sind wie folgt:

- `package.json` und `package-lock.json`: Enthaltet Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Datei nicht verstehen, um dieses Tutorial zu absolvieren, jedoch können Sie, wenn Sie mehr erfahren möchten, mehr darüber lesen, indem Sie auf [`package.json`-Handling](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com gehen; wir sprechen auch darüber in unserem [Tutorial zu den Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion geschickt, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Teilt Git mit, welche Dateien oder Ordner aus dem Projekt ignoriert werden sollen — nützlich, wenn Sie planen, Ihre App in einem Git-Repo zu verwenden.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei sagt Rollup, wie Ihre App kompiliert und gebaut werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starter-Projekt mit `npx degit sveltejs/template-webpack svelte-app` stattdessen erstellen.
- `scripts`: Enthält erforderliche Setup-Skripte. Derzeit sollte nur `setupTypeScript.js` enthalten sein.

  - `setupTypeScript.js`: Dieses Skript richtet die TypeScript-Unterstützung in Svelte ein. Wir werden später im letzten Artikel darüber sprechen.

- `src`: Dieses Verzeichnis enthält den Quellcode für Ihre Anwendung — hier erstellen Sie den Code für Ihre App.

  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher rendert es nur die Nachricht 'Hello World!'.
  - `main.js`: Der Einstiegspunkt für unsere Anwendung. Es instanziiert einfach die `App`-Komponente und bindet sie an den Body unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon für Ihre App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfänglich ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und js-Bundles lädt.
  - `global.css`: Diese Datei enthält nicht umrahmte Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.

    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus all Ihrem JavaScript-Quellcode kompiliert wurde.

## Ein Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien unter Verwendung einer Obermenge von HTML geschrieben.

Alle drei Abschnitte — `<script>`, `<style>` und Markup — sind optional und können in beliebiger Reihenfolge angezeigt werden.

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
> Für weitere Informationen zum Komponentenformat werfen Sie einen Blick in die [Svelte-Komponentendokumentation](https://svelte.dev/docs/svelte-components).

Mit dieser Idee im Hinterkopf werfen wir einen Blick in die Datei `src/App.svelte`, die mit der Starter-Vorlage mitgeliefert wurde. Sie sollten etwas sehen wie das Folgende:

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

### Der `<script>`-Bereich

Der `<script>`-Block enthält JavaScript, das beim Erstellen einer Komponenteninstanz ausgeführt wird. Variablen, die auf oberster Ebene deklariert (oder importiert) werden, sind vom Markup der Komponente aus 'sichtbar'. Oberste Variablen sind die Art und Weise, wie Svelte den Komponentenstatus handhabt, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```html
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu markieren, was bedeutet, dass sie für Benutzer der Komponente (z. B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen und gleichzeitig vertraut zu halten.

### Der Markup-Bereich

Im Markup-Bereich können Sie beliebiges HTML einfügen und zusätzlich gültige JavaScript-Ausdrücke innerhalb einzelner geschweifter Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert des `name`-Props direkt nach dem `Hello`-Text ein.

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

### Der `<style>`-Bereich

Wenn Sie Erfahrung im Arbeiten mit CSS haben, sollte der folgende Schnipsel sinnvoll sein:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element an. Was wird mit anderen Komponenten passieren, die `<h1>`-Elemente beinhalten?

In Svelte wird CSS in einem `<style>`-Block einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, auf das _HELLO WORLD!_-Label rechts/<kbd>Strg</kbd>-klicken und _Inspect_ auswählen:

![Svelte-Starter-App mit offenen Entwicklertools, die Klassen für beschränkte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition zu `h1.svelte-1tky8bj` und modifiziert dann jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, damit es die erforderlichen Stile aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten überschreiben und Stile mithilfe des `:global()`-Modifiers global auf einen Selektor anwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Jetzt, da wir eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir beginnen, ein paar Änderungen vorzunehmen.
An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren - ändern Sie beispielsweise das `<h1>`-Element in `App.svelte`, damit es so aussieht:

```html
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die auf `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität von Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework automatisch das DOM aktualisieren kann, wenn sich der Status einer Komponente ändert.

In Svelte wird Reaktivität ausgelöst, indem einer beliebigen obersten Variablen in einer Komponente ein neuer Wert zugewiesen wird. Beispielsweise könnten wir eine `toggleName()`-Funktion in unsere `App`-Komponente einfügen und eine Schaltfläche, um sie auszuführen.

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

Wann immer die Schaltfläche angeklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variablen aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Im Hintergrund hat Svelte den JavaScript-Code erstellt, um das DOM jedes Mal zu aktualisieren, wenn sich der Wert der `name`-Variablen ändert, ohne einen virtuellen DOM oder andere komplexe Abgleichmechanismen zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist die Svelte-Syntax zum Abhören von DOM-Ereignissen.

## Inspektion von main.js: der Einstiegspunkt unserer App

Öffnen wir `src/main.js`, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden möchten. Anschließend wird sie mit `new App` instanziiert, indem ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in dem wir möchten, dass die Komponente gerendert wird, in diesem Fall das `<body>`-Element.
- `props`: die Werte, die jedem Prop der `App`-Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien zusammen funktionierend zu machen?

Der Svelte-Compiler verarbeitet den `<style>`-Bereich jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Bereich jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Außerdem fügt es den Code in `src/main.js` hinzu, um auf die Features jeder Komponente zu verweisen.

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

Die minimierte Version von `bundle.js` wiegt etwas mehr als 3KB, was das "Svelte-Runtime" (nur 300 Zeilen JavaScript-Code) und die `App.svelte`-kompilierte Komponente umfasst. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es werden keine anderen Bibliotheken in die Webseite geladen.

Dies ist ein viel kleinerer Fußabdruck als kompilierte Bundles von anderen Frameworks. Beachten Sie, dass es sich im Fall von Code-Bundles nicht nur um die Größe der Dateien handelt, die Sie herunterladen müssen. Dies ist auszuführender Code, der analysiert, ausgeführt und im Speicher gehalten werden muss. Dies macht wirklich einen Unterschied, insbesondere bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Dieses Tutorial weiterverfolgen

In dieser Tutorial-Serie werden Sie eine vollständige Webanwendung erstellen. Wir werden alle Grundlagen über Svelte erlernen und auch einige fortgeschrittene Themen behandeln.

Sie können einfach den Inhalt lesen, um ein gutes Verständnis für die Svelte-Funktionen zu bekommen, aber Sie werden das Beste aus diesem Tutorial herausholen, wenn Sie den App-Code während des Lesens mit uns nacharbeiten. Um Ihnen das Verfolgen jedes Artikels zu erleichtern, stellen wir ein GitHub-Repository mit einem Ordner bereit, der den Quellcode für die App so enthält, wie sie zu Beginn jedes Tutorials sein sollte.

Svelte bietet auch ein Online-REPL, das ein Spielplatz zum Live-Coden von Svelte-Apps im Web ist, ohne dass Sie etwas auf Ihrem Computer installieren müssen. Wir bieten für jeden Artikel ein REPL an, damit Sie sofort mit dem Coden beginnen können. Lassen Sie uns ein wenig mehr darüber sprechen, wie Sie diese Tools verwenden.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Seite, die Hostmöglichkeiten für Ihre Repositories bietet und verschiedene Tools für die Arbeit mit ihnen bereitstellt.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel problemlos herunterladen können. Sie werden auch in der Lage sein, den Code zu bekommen, wie er nach Abschluss des Artikels aussehen sollte, nur für den Fall, dass Sie den Überblick verlieren.

Nachdem Sie [Git installiert](https://git-scm.com/downloads) haben, sollten Sie Folgendes ausführen, um das Repository zu klonen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn jedes Artikels einfach in den entsprechenden Ordner wechseln und die App im Dev-Modus starten, um zu sehen, in welchem Zustand sie sich gerade befindet, wie folgt:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste mit nützlichen Leitfäden zusammengestellt — siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie nur die Dateien ohne Klonen des Git-Repos herunterladen möchten, können Sie das Degit-Tool folgendermaßen verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit wird kein lokales Git-Repo erstellen, es wird einfach die Dateien des angegebenen Ordners herunterladen.

### Verwendung des Svelte REPL

Ein REPL ([Read–Eval–Print Loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen – viele Programmiersprachen bieten ein REPL.

Svelte's REPL ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, vollständige Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um von jedem Rechner aus mit Svelte zu spielen, ohne etwas installieren zu müssen. Es wird auch von der Svelte Community weit verbreitet genutzt. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer äußerst nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Werfen wir einen kurzen Blick auf den Svelte REPL und wie Sie ihn verwenden würden. Er sieht folgendermaßen aus:

![die Svelte REPL in Aktion, die Komponentencode auf der linken Seite und Ausgabe auf der rechten Seite zeigt](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten, und auf der rechten Seite sehen Sie die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht es Ihnen, `.svelte`- und `.js`-Dateien zu erstellen und sie neu anzuordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, z. B.: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Oben auf dieser Leiste haben Sie den Titel des REPLs. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Registerkarten:

  - Die Registerkarte _Result_ zeigt die Ausgabe Ihrer App an und bietet eine Konsole am unteren Rand.
  - Die Registerkarte _JS output_ ermöglicht es Ihnen, den von Svelte generierten JavaScript-Code zu inspizieren und Compiler-Optionen festzulegen.
  - Die Registerkarte _CSS output_ zeigt das von Svelte generierte CSS an.

- Über den Registerkarten finden Sie eine Symbolleiste, mit der Sie den Vollbildmodus aufrufen und Ihre App herunterladen können. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie die App auch forken und speichern. Sie können auch alle Ihre gespeicherten REPLs anzeigen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Your saved apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Result-Registerkarte aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel, hier ist der Link zu einem REPL, der unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Version von Svelte in der URL angeben können. Dies ist nützlich, wenn Probleme im Zusammenhang mit einer bestimmten Version von Svelte gemeldet werden.

Wir werden am Anfang und Ende jedes Artikels ein REPL bereitstellen, damit Sie sofort mit dem Coden mit uns beginnen können.

> [!NOTE]
> Derzeit kann der REPL Ordnernamen nicht richtig verarbeiten. Wenn Sie das Tutorial im REPL verfolgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Danach können Sie einen Pfad im Code sehen, z.B. `import Todos from './components/Todos.svelte'`, dann ersetzen Sie ihn einfach durch eine flache URL, z.B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann um den aktuellen App-Zustand zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um zusammen mit uns den Code mit dem REPL zu erstellen, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Blicks auf Svelte, einschließlich des lokalen Installierens, der Erstellung einer Starter-App und der Funktionsweise der Grundlagen. Im nächsten Artikel werden wir mit dem Aufbau unserer ersten richtigen Anwendung, einer Aufgabenliste, beginnen. Bevor wir das tun, lassen Sie uns einige der Dinge rekapitulieren, die wir gelernt haben.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenten-Props werden mit dem `export`-Schlüsselwort deklariert.
- Svelte-Komponenten können einfach durch Importieren der entsprechenden `.svelte`-Datei verwendet werden.
- Komponentenstile sind beschränkt, sodass sie nicht miteinander in Konflikt geraten.
- Im Markup-Bereich können Sie beliebige JavaScript-Ausdrücke durch Einfügen zwischen geschweiften Klammern einfügen.
- Die top-level Variablen einer Komponente bilden ihren Status.
- Reaktivität wird ausgelöst, indem einer top-level Variablen ein neuer Wert zugewiesen wird.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
