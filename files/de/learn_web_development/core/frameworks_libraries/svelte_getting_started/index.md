---
title: Erste Schritte mit Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: d65517535ae067fa876d5fae83626dff838e9796
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools, die wir bisher gesehen haben, unterscheidet. Danach lernen wir, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Struktur des Projekts versteht und sieht, wie man es lokal ausführt und für die Produktion baut.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          über Kenntnisse der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Svelte ist ein Compiler, der minimalen und hochoptimierten
          JavaScript-Code aus unseren Quellen erzeugt; Sie benötigen ein Terminal mit installierten Node +
          npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Svelte-Entwicklungsumgebung einrichten, eine Starter-App erstellen und bauen sowie die Grundlagen des Funktionierens verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zum Erstellen reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz zum Erstellen von Web-Apps als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Nutzers erledigen, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Erstellen der App stattfindet, und erzeugt hochoptimiertes Vanilla JavaScript.

Dieses Vorgehen führt nicht nur zu kleineren Anwendungsbündeln und besserer Leistung, sondern auch zu einer Entwicklererfahrung, die für Menschen mit begrenzter Erfahrung im modernen Tooling-Ökosystem zugänglicher ist.

Svelte hält sich eng am klassischen Webentwicklungsmodell von HTML, CSS und JS, fügt nur wenige Erweiterungen zu HTML und JavaScript hinzu. Es hat möglicherweise weniger Konzepte und Werkzeuge zu erlernen im Vergleich zu einigen der anderen Framework-Optionen.

Die Hauptnachteile sind, dass es sich um ein junges Framework handelt – sein Ökosystem ist daher begrenzter im Hinblick auf Werkzeuge, Support, Plugins, klare Nutzungsmuster etc. als reifere Frameworks, und es gibt auch weniger Berufsmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden später in dieser Tutorial-Serie darauf eingehen.

Wir empfehlen Ihnen, das [Svelte-Tutorial](https://learn.svelte.dev/) zu durchlaufen, um einen sehr schnellen Überblick der grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas tiefgründigeres aufbaut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder bei Null anfangen und Svelte Ihre Benutzeroberfläche steuern lassen oder es schrittweise in eine bestehende Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet für folgende Situationen:

- Webanwendungen, die für leistungsschwache Geräte gedacht sind: Mit Svelte erstellte Anwendungen haben kleinere Bündelgrößen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB, die heruntergeladen, geparst, ausgeführt und im Speicher gehalten werden müssen.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die viele DOM-Elemente anzeigen müssen, werden die Leistungsgewinne, die aus einem Framework ohne Laufzeit-Overhead resultieren, sicherstellen, dass Benutzerinteraktionen geschmeidig und reaktionsschnell sind.
- Onboarding von Personen mit grundlegenden Webentwicklungskentnissen: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Besonderheiten von Svelte in kurzer Zeit leicht verstehen und mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) herausgebracht, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Web-Frameworks zu finden sind, wie dateibasiertes Routing, serverseitiges Rendering (SSR), seiten-spezifische Render-Modi, Offline-Unterstützung und mehr. Weitere Informationen über SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne jeglichen Laufzeit-Overhead erzeugen. Um dies zu erreichen, erweitert Svelte vanilla Web-Technologien auf folgende Weise:

- Es erweitert HTML, indem JavaScript-Ausdrücke im Markup erlaubt werden und Direktiven bereitgestellt werden, um Bedingungen und Schleifen zu verwenden, ähnlich wie bei Handlebars.
- Es erweitert CSS, indem es einen Scoping-Mechanismus hinzufügt, der es jeder Komponente ermöglicht, ihre eigenen Stile zu definieren, ohne das Risiko von Kollisionen mit den Stilen anderer Komponenten.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und die Verwaltung des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich werden Sie hauptsächlich mit Vanilla JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag zu Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Long-Term Support (LTS)-Version zu verwenden. Node enthält npm (den Node-Paket-Manager) und npx (den Node-Paket-Runner). Beachten Sie, dass Sie auch den Yarn-Paketmanager anstelle von npm verwenden können, wir werden jedoch in diesen Tutorials davon ausgehen, dass Sie npm verwenden. Siehe [Paketmanagement-Grundlagen](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen über npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit einem Unix/macOS-Terminal zu haben, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. Gitbash (das Teil des [git für Windows Toolsets](https://gitforwindows.org/) ist) oder [Windows Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Siehe [Kommandozeilen-Crashkurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für weitere Informationen darüber und über Terminalbefehle im Allgemeinen.

Siehe auch die folgenden Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung in npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, um ein Starter-App-Template zu erstellen, ist einfach, das Starter-Template herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können das Herunterladen und Entpacken vermeiden und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihr Starter-App-Template zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> degit macht keine Magie – es lässt Sie einfach die neueste Version der Inhalte eines Git-Repos herunterladen und entpacken. Das ist viel schneller als `git clone`, da es nicht den gesamten Verlauf des Repos herunterladen oder ein komplettes lokales Clone erstellen wird.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und bauen. Es wird einen lokalen Server unter `localhost:8080` starten. Svelte überwacht Dateiaktualisierungen und kompiliert und aktualisiert die App automatisch für Sie, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser wird ungefähr Folgendes anzeigen:

![Eine einfache Startseite, die "Hello World" sagt und einen Link zu den offiziellen Svelte-Tutorials bietet](01-svelte-starter-app.png)

### Anwendungsstruktur

Das Starter-Template hat die folgende Struktur:

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Datei nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr erfahren möchten, können Sie sich mit der [`package.json`-Handhabung](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com beschäftigen; wir sprechen auch darüber in unserem [Paketmanagement-Grundlagen-Tutorial](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Teilt Git mit, welche Dateien oder Ordner im Projekt ignoriert werden sollen – nützlich, wenn Sie sich entscheiden, Ihre App in ein Git-Repo aufzunehmen.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei teilt Rollup mit, wie Ihre App kompiliert und gebaut werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starter-Projekt mit `npx degit sveltejs/template-webpack svelte-app` erstellen.
- `scripts`: Enthält Setup-Skripte nach Bedarf. Sollte derzeit nur `setupTypeScript.js` enthalten.

  - `setupTypeScript.js`: Dieses Skript richtet TypeScript-Unterstützung in Svelte ein. Wir werden später im letzten Artikel mehr darüber sprechen.

- `src`: Dieses Verzeichnis enthält den Quellcode für Ihre Anwendung – hier werden Sie den Code für Ihre App erstellen.

  - `App.svelte`: Dies ist die übergeordnete Komponente Ihrer App. Bisher rendert sie nur die "Hello World!"-Nachricht.
  - `main.js`: Der Einstiegspunkt unserer Anwendung. Es instanziiert einfach die `App`-Komponente und bindet sie an den Body unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon für Ihre App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfangs ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält unskopierte Stile. Es ist eine normale CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.

    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Einen Blick auf unsere erste Svelte-Komponente werfen

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien unter Verwendung eines Supersets von HTML geschrieben.

Alle drei Abschnitte – `<script>`, `<style>` und Markup – sind optional und können in beliebiger Reihenfolge erscheinen.

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
> Weitere Informationen zum Komponentenformat finden Sie in der [Svelte-Komponentendokumentation](https://svelte.dev/docs/svelte-components).

Mit diesem Wissen lassen Sie uns nun die Datei `src/App.svelte` im Starter-Template betrachten. Sie sollten etwas Ähnliches sehen:

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

Der `<script>`-Block enthält JavaScript, das beim Erstellen einer Komponenteninstanz ausgeführt wird. Variablen, die auf der obersten Ebene deklariert (oder importiert) werden, sind aus dem Markup der Komponente sichtbar. Top-Level-Variablen sind die Art und Weise, wie Svelte den Komponentenstatus handhabt, und sie sind standardmäßig reaktiv. Wir werden später ausführlich erklären, was das bedeutet.

```html
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu kennzeichnen. Dies bedeutet, dass sie für die Konsumenten der Komponente (z.B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie vertraut bleibt.

### Der Markup-Abschnitt

Im Markup-Abschnitt können Sie beliebiges HTML einfügen und zusätzlich gültige JavaScript-Ausdrücke in einzelnen geschweiften Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert der `name`-Prop unmittelbar nach dem Text `Hello` ein.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` - diese Beispiele ermöglichen es Ihnen, einen Teil des Markups bedingt zu rendern, eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrung mit CSS haben, sollte der folgende Schnipsel Sinn ergeben:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Element an. Was passiert mit anderen Komponenten, die `<h1>`-Elemente enthalten?

In Svelte werden die CSS innerhalb des `<style>`-Blocks einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert durch das Hinzufügen einer Klasse zu ausgewählten Elementen, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit der rechten Maustaste auf das _HELLO WORLD!_-Label klicken und _Inspect_ wählen:

![Svelte Starter-App mit geöffneten Devtools, die Klassen für gescoppte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildeklaration in `h1.svelte-1tky8bj` und ändert jedes `<h1>`-Element in unserer Komponente in `<h1 class="svelte-1tky8bj">`, sodass es die Stile wie erforderlich übernimmt.

> [!NOTE]
> Sie können dieses Verhalten überschreiben und Stile auf einen globalen Selektor anwenden, indem Sie den `:global()`-Modifier verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Einige Änderungen vornehmen

Jetzt, da wir eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir einige Änderungen vornehmen.
An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren – ändern Sie zum Beispiel das `<h1>`-Element in `App.svelte`, sodass es folgendermaßen lautet:

```html
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die auf `localhost:8080` laufende App wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität von Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework das DOM automatisch aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird die Reaktivität ausgelöst, indem einem Top-Level-Variablen in einer Komponente ein neuer Wert zugewiesen wird. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unsere `App`-Komponente aufnehmen und eine Schaltfläche, um sie auszuführen.

Versuchen Sie, Ihre `<script>`- und Markup-Abschnitte wie folgt zu aktualisieren:

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

Wannimmer die Schaltfläche geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variable aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Hinter den Kulissen hat Svelte den JavaScript-Code erstellt, um das DOM zu aktualisieren, wann immer sich der Wert der name-Variablen ändert, ohne die Nutzung eines virtuellen DOMs oder anderer komplexer Abstimmungsmechanismen.

Beachten Sie die Verwendung von `:` in `on:click`. Dies ist die Svelte-Syntax zum Abhören von DOM-Ereignissen.

## Inspektion von main.js: der Einstiegspunkt unserer App

Öffnen wir `src/main.js`, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht zunächst so aus:

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden wollen. Dann wird sie mit `new App` instanziiert, wobei ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, innerhalb dessen wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jedem Prop der `App`-Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien nett zusammenarbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Er fügt auch den Code in `src/main.js` hinzu, um auf die Funktionen jeder Komponente zuzugreifen.

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

Die minimierte Version von `bundle.js` wiegt etwas mehr als 3 KB, was das "Svelte-Runtime" (nur 300 Zeilen JavaScript-Code) und die `App.svelte`-kompilierte Komponente umfasst. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es werden keine anderen Bibliotheken in die Webseite geladen.

Dies ist ein viel kleinerer Fußabdruck als die kompilierte Bündel von anderen Frameworks. Beachten Sie, dass es bei Code-Bündeln nicht nur um die Größe der Dateien geht, die Sie herunterladen müssen. Es handelt sich um ausführbaren Code, der geparst, ausgeführt und im Speicher gehalten werden muss. Das macht also wirklich einen Unterschied, insbesondere bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Dieses Tutorial verfolgen

In dieser Tutorial-Serie werden Sie eine vollständige Webanwendung erstellen. Wir werden alle Grundlagen von Svelte lernen und auch einige fortgeschrittene Themen.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis für die Svelte-Funktionen zu bekommen, aber Sie werden das Meiste aus diesem Tutorial herausholen, wenn Sie die App mit uns erstellen, während Sie fortfahren. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, bieten wir ein GitHub-Repository mit einem Ordner an, das den Quellcode der App enthält, so wie sie zu Beginn jedes Tutorials ist.

Svelte bietet auch ein Online-REPL an, das ein Playground zum Live-Coding von Svelte-Apps im Web ist, ohne dass man etwas auf seinem Rechner installieren muss. Wir bieten ein REPL für jeden Artikel an, sodass Sie gleich mit dem Programmieren loslegen können. Lassen Sie uns ein wenig mehr darüber sprechen, wie diese Werkzeuge zu verwenden sind.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git zusammen mit GitHub, einer Site, die Hosting für Ihre Repositories und mehrere Werkzeuge für die Arbeit mit ihnen bereitstellt.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel einfach herunterladen können. Sie werden auch den Code so, wie er nach Abschluss des Artikels sein sollte, abrufen können, nur für den Fall, dass Sie den Weg verlieren.

Nach der [Installation von git](https://git-scm.com/downloads) sollte das Klonen des Repositories folgendermaßen durchgeführt werden:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann, zu Beginn jedes Artikels, können Sie einfach in den entsprechenden Ordner wechseln und die App im Entwicklungsmodus starten, um den aktuellen Zustand zu sehen, wie folgt:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über git und GitHub erfahren möchten, haben wir eine Liste von Links zu nützlichen Leitfaden zusammengestellt – siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie nur die Dateien herunterladen möchten, ohne das git-Repo zu klonen, können Sie das degit-Tool so verwenden – `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit wird kein lokales git-Repo erstellen, sondern nur die Dateien des angegebenen Ordners herunterladen.

### Verwendung des Svelte REPL

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen - viele Programmiersprachen bieten ein REPL an.

Das REPL von Svelte ist viel mehr als das. Es ist ein Online-Werkzeug, das es Ihnen ermöglicht, komplette Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um mit Svelte auf jedem Rechner zu spielen, ohne etwas installieren zu müssen. Es wird auch weit in der Svelte-Community verwendet. Wenn Sie eine Idee teilen möchten, um Hilfe bitten oder ein Problem melden möchten, ist es immer extrem nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Schauen wir uns kurz das Svelte REPL an, und wie man es nutzt. Es sieht etwa so aus:

![Das Svelte REPL in Aktion, zeigt Komponenten-Code links und Ausgabe rechts](03-svelte-repl-in-action.png)

Um ein REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten und auf der rechten Seite die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code lässt Sie `.svelte`- und `.js`-Dateien erstellen und neu anordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den kompletten Pfadnamen an, wie `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Oberhalb dieser Leiste befindet sich der Titel des REPL. Klicken Sie darauf, um es zu bearbeiten.
- Auf der rechten Seite haben Sie drei Tabs:

  - Der Tab _Result_ zeigt Ihre Anwendungs-Ausgabe und bietet eine Konsole unten.
  - Der Tab _JS output_ lässt Sie den von Svelte generierten JavaScript-Code inspizieren und Compiler-Optionen festlegen.
  - Der Tab _CSS output_ zeigt die von Svelte generierten CSS an.

- Über den Tabs finden Sie eine Werkzeugleiste, die es Ihnen erlaubt, den Vollbildmodus einzugeben und Ihre App herunterzuladen. Wenn Sie sich mit einem GitHub-Konto einloggen, können Sie die App auch forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihren GitHub-Benutzerprofilnamen klicken und _Your saved apps_ auswählen.

Jedes Mal, wenn Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und den Ergebnis-Tab aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel hier ist der Link zu einem REPL, das unsere komplette App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Version von Svelte in der URL angeben können. Das ist nützlich, wenn Sie Probleme melden, die mit einer spezifischen Version von Svelte verbunden sind.

Wir werden ein REPL zu Beginn und Ende jedes Artikels bereitstellen, damit Sie gleich mit uns programmieren können.

> [!NOTE]
> Im Moment kann das REPL Ordnernamen nicht richtig handhaben. Wenn Sie dem Tutorial im REPL folgen, erstellen Sie einfach alle Ihre Komponenten im Root-Ordner. Wenn Sie dann einen Pfad im Code sehen, beispielsweise `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z.B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (wenn Sie es noch nicht gemacht haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann, um den aktuellen Stand der App zu erreichen, ausführen

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder den Inhalt des Ordners direkt herunterladen:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit dem REPL mit uns zu programmieren, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Blicks auf Svelte, einschließlich der Installation vor Ort, der Erstellung einer Starter-App und der grundlegenden Funktionsweise. Im nächsten Artikel werden wir anfangen, unsere erste richtige Anwendung zu bauen, eine To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge zusammenfassen, die wir gelernt haben.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenteneigenschaften werden mit dem Schlüsselwort `export` deklariert.
- Svelte-Komponenten können einfach verwendet werden, indem die entsprechende `.svelte`-Datei importiert wird.
- Komponenten-Stile sind gescopt, wodurch sie nicht miteinander kollidieren.
- Im Markup-Abschnitt können Sie jeden JavaScript-Ausdruck einfügen, indem Sie ihn zwischen geschweiften Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Status.
- Reaktivität wird einfach durch die Zuweisung eines neuen Wertes zu einer Top-Level-Variablen ausgelöst.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
