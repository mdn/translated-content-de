---
title: Erste Schritte mit Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools unterscheidet, die wir bisher gesehen haben. Dann werden wir lernen, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Struktur des Projekts versteht und wie man es lokal ausführt und für die Produktion aufbaut.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          > besitzen.
        </p>
        <p>
          Svelte ist ein Compiler, der aus unseren Quellen minimalen und hochoptimierten
          JavaScript-Code generiert; Sie benötigen ein Terminal mit installiertem Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichten einer lokalen Svelte-Entwicklungsumgebung, Erstellen und Bauen einer
        Starter-App und Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zum Erstellen reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz zur Erstellung von Webanwendungen als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers ausführen, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierschritt, der nur beim Bauen der App ausgeführt wird, was zu hochoptimiertem Vanilla JavaScript führt.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungsbündel und bessere Leistung, sondern auch eine Entwicklererfahrung, die zugänglicher ist für Personen mit begrenzter Erfahrung in modernen Tools.

Svelte bleibt dem klassischen Webentwicklungsmodell von HTML, CSS und JS sehr nahe und fügt nur einige Erweiterungen zu HTML und JavaScript hinzu. Es hat wahrscheinlich weniger Konzepte und Tools zu erlernen als einige der anderen Framework-Optionen.

Seine derzeit größten Nachteile sind, dass es ein junges Framework ist — sein Ökosystem ist daher in Bezug auf Tools, Support, Plugins, klare Nutzungsmuster usw. weniger umfangreich als die reiferer Frameworks, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden darauf später in dieser Tutorial-Serie eingehen.

Wir empfehlen Ihnen, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas tiefergehenderes baut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf beginnen und Svelte Ihre Benutzeroberfläche steuern lassen, oder Sie können es schrittweise in eine bestehende Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet für die folgenden Situationen:

- Webanwendungen, die für leistungsschwache Geräte gedacht sind: Anwendungen, die mit Svelte erstellt wurden, haben kleinere Bündelgrößen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB, die heruntergeladen, analysiert, ausgeführt und im Speicher gehalten werden müssen.
- Hoch interaktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungsgewinne, die sich aus einem Framework ohne Laufzeit-Overhead ergeben, sicherstellen, dass Benutzerinteraktionen reaktionsschnell sind.
- Einführung von Personen mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine geringe Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Besonderheiten von Svelte leicht in kurzer Zeit erfassen und mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) gestartet, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Web-Frameworks zu finden sind, wie z.B. Dateisystem-basiertes Routing, Server-seitiges Rendering (SSR), seiten-spezifische Rendering-Modi, Offline-Unterstützung und mehr. Für weitere Informationen über SvelteKit, sehen Sie sich das [offizielle Tutorial](https://learn.svelte.dev/) und die [Dokumentation](https://kit.svelte.dev/docs/introduction) an.

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte-native.technology/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Laufzeit-Overhead generieren. Um dies zu erreichen, erweitert Svelte Vanilla-Web-Technologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup ermöglicht und Direktiven zur Verwendung von Bedingungen und Schleifen bereitstellt, ähnlich wie Handlebars.
- Es erweitert CSS, indem es einen Scoping-Mechanismus hinzufügt, der es jedem Component ermöglicht, seine eigenen Stile zu definieren, ohne das Risiko, mit den Stilen anderer Komponenten in Konflikt zu geraten.
- Es erweitert JavaScript durch die Neuinterpretation bestimmter Direktiven der Sprache, um echte Reaktivität zu erzielen und die Verwaltung des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um weder die JavaScript-Syntax zu brechen noch Entwickler zu vergrämen. Tatsächlich arbeiten Sie hauptsächlich mit Vanilla JavaScript.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">` Tag auf Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte arbeiten zu können, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Long-Term-Support (LTS)-Version zu verwenden. Node enthält npm (den Node Package Manager) und npx (den Node Package Runner). Beachten Sie, dass Sie auch den Yarn Package Manager anstelle von npm verwenden können, aber wir gehen in dieser Tutorial-Reihe davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie unter [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit Unix/macOS-Terminals zu erreichen, um die im Tutorial erwähnten Terminalbefehle auszuführen. Gitbash (das Teil des [Git for Windows Toolset](https://gitforwindows.org/) ist) oder [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Weitere Informationen zu diesen und allgemeinen Terminalbefehlen finden Sie im [Crashkurs zur Kommandozeile](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).

Weitere Informationen finden Sie auch unter:

- ["About npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Introducing npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Sie Ihre erste Svelte-App

Der einfachste Weg, eine Startvorlage für eine App zu erstellen, besteht darin, einfach die Startervorlage herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können vermeiden, sie herunterzuladen und zu entzippen, indem Sie [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Startvorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> degit führt keine Magie aus – es ermöglicht Ihnen lediglich, die neueste Version der Inhalte eines Git-Repos herunterzuladen und zu entzippen. Dies ist viel schneller als die Verwendung von `git clone`, da es den gesamten Verlauf des Repos nicht herunterlädt oder eine vollständige lokale Kopie erstellt.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und erstellen. Es wird ein lokaler Server unter `localhost:8080` gestartet. Svelte überwacht Dateiaktualisierungen und kompiliert automatisch neu und aktualisiert die App, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser zeigt in etwa Folgendes an:

![Eine einfache Startseite, die hallo welt sagt und einen Link zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm zur Organisation verwendet. Sie müssen diese Datei nicht vollständig verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr erfahren möchten, können Sie sich das [Handling von `package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com ansehen; wir sprechen auch in unserem [Tutorial über Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) darüber.
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Teilt Git mit, welche Dateien oder Ordner aus dem Projekt ignoriert werden sollen – nützlich, wenn Sie Ihre App in einem Git-Repo integrieren möchten.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modulbündler. Diese Konfigurationsdatei teilt Rollup mit, wie Ihre App kompiliert und gebaut werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` erstellen.
- `scripts`: Enthält bei Bedarf Setupscripts. Sollte derzeit nur `setupTypeScript.js` enthalten.

  - `setupTypeScript.js`: Dieses Script richtet TypeScript-Unterstützung in Svelte ein. Wir werden am letzten Artikel mehr darüber sprechen.

- `src`: Dieses Verzeichnis enthält den Quellcode Ihrer Anwendung – dort erstellen Sie den Code für Ihre App.

  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher rendert es nur die 'Hello Welt!' Nachricht.
  - `main.js`: Der Einstiegspunkt unserer Anwendung. Es instanziiert einfach die `App`-Komponente und bindet sie an den Körper unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in die Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon für Ihre App. Derzeit das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Zunächst ist es nur eine leere HTML-Seite, die die CSS-Dateien und js-Bundles lädt, die von Svelte generiert wurden.
  - `global.css`: Diese Datei enthält nicht-abgegrenzte Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.

    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Ein Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien mit einer Obermenge von HTML geschrieben.

Alle drei Bereiche — `<script>`, `<style>` und Markup — sind optional und können in beliebiger Reihenfolge erscheinen.

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

Schauen wir uns nun die `src/App.svelte`-Datei an, die mit der Startervorlage geliefert wurde. Sie sollten etwas wie das Folgende sehen:

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

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Instanz der Komponente erstellt wird. Variablen, die auf oberster Ebene deklariert (oder importiert) werden, sind aus dem Markup der Komponente "sichtbar". Top-Level-Variablen sind der Weg, wie Svelte den Komponentenstatus handhabt, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```html
<script>
  export let name;
</script>
```

Svelte verwendet das Schlüsselwort [`export`](/de/docs/Web/JavaScript/Reference/Statements/export), um eine Variable als Eigenschaft (oder Prop) zu markieren, was bedeutet, dass sie für Verbraucher der Komponente (z.B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie dennoch vertraut bleibt.

### Der Markup-Bereich

Im Markup-Bereich können Sie beliebiges HTML einfügen, zusätzlich können Sie gültige JavaScript-Ausdrücke in einzelne geschweifte Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert der `name`-Prop direkt nach dem Text `Hello` ein.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele ermöglichen es, einen Teil des Markups bedingt zu rendern, durch eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element an. Was wird mit anderen Komponenten passieren, die `<h1>`-Elemente enthalten?

In Svelte wird CSS innerhalb des `<style>`-Blocks einer Komponente nur dieser Komponente zugeordnet. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, rechts/<kbd>Ctrl</kbd> auf das _HELLO WORLD!_-Label klicken und _Inspect_ wählen:

![Svelte-Starter-App, die in den Entwickler-Tools offene Klassen für Bereichsstile zeigt](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition zu `h1.svelte-1tky8bj` und ändert dann jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, sodass es die erforderlichen Stile aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten überschreiben und Stile global auf einen Selektor anwenden, indem Sie den `:global()`-Modifier verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für mehr Informationen).

## Ein paar Änderungen vornehmen

Jetzt, wo wir eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir beginnen, ein paar Änderungen vorzunehmen.
An dieser Stelle können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren – ändern Sie beispielweise das `<h1>`-Element in `App.svelte` so, dass es folgendermaßen aussieht:

```html
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die unter `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität von Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework den DOM automatisch aktualisieren kann, wenn sich der Status einer Komponente ändert.

In Svelte wird die Reaktivität ausgelöst, indem einem Top-Level-Variable in einer Komponente ein neuer Wert zugewiesen wird. Beispielsweise könnten wir eine `toggleName()`-Funktion in unserer `App`-Komponente hinzufügen und einen Button, um diese auszuführen.

Versuchen Sie, Ihre `<script>` und Markup-Bereiche wie folgt zu aktualisieren:

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

Immer wenn der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, welche wiederum den Wert der `name`-Variablen aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Hinter den Kulissen hat Svelte den JavaScript-Code erstellt, um den DOM jedes Mal zu aktualisieren, wenn sich der Wert der Name-Variablen ändert, ohne einen virtuellen DOM oder einen anderen komplexen Abgleichsmechanismus zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist die Svelte-Syntax zum Lauschen auf DOM-Ereignisse.

## Untersuchung von main.js: der Einstiegspunkt unserer App

Öffnen wir `src/main.js`, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfangs so aus:

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden werden. Dann wird sie mit `new App` instanziiert und ein Optionsobjekt mit den folgenden Eigenschaften übergeben:

- `target`: Das DOM-Element, in dem wir möchten, dass die Komponente gerendert wird, in diesem Fall das `<body>`-Element.
- `props`: die Werte, die jeder Prop der `App`-Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien gut miteinander arbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Bereich jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Bereich jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Außerdem fügt er den Code in `src/main.js` hinzu, um auf die Funktionen jeder Komponente zu verweisen.

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

Die minifizierte Version von `bundle.js` wiegt etwas mehr als 3KB, was das "Svelte-Laufzeit" (nur 300 Zeilen JavaScript-Code) und die `App.svelte`-kompilierte Komponente umfasst. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, auf die von `index.html` verwiesen wird. Es gibt keine anderen Bibliotheken, die in die Webseite geladen werden.

Dies ist ein viel kleinerer Fußabdruck als kompilierten Bundles anderer Frameworks. Denken Sie daran, dass nicht nur die Größe der Dateien, die Sie herunterladen müssen, sondern auch den Code, der analysiert, ausgeführt und im Speicher gehalten werden muss, wichtig ist. Das macht wirklich einen Unterschied, besonders auf leistungsarmen Geräten oder bei CPU-intensiven Anwendungen.

## Folgen Sie diesem Tutorial

In dieser Tutorial-Serie werden Sie eine vollständige Webanwendung erstellen. Wir werden alle Grundlagen über Svelte lernen und auch einige fortgeschrittene Themen.

Sie können einfach den Inhalt lesen, um ein gutes Verständnis für Svelte-Funktionen zu bekommen, aber Sie werden das meiste aus diesem Tutorial herausholen, wenn Sie die App mit uns zusammen programmieren, während Sie weitergehen. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository mit einem Ordner bereit, der den Quellcode für die App enthält, wie sie zu Beginn jedes Tutorials ist.

Svelte bietet auch einen Online-REPL, der ein Spielplatz für Live-Coding von Svelte-Apps im Web ist, ohne dass Sie etwas auf Ihrem Computer installieren müssen. Wir stellen für jeden Artikel einen REPL bereit, sodass Sie sofort mit dem Codieren anfangen können. Lassen Sie uns ein wenig mehr darüber sprechen, wie Sie diese Tools verwenden können.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Seite, die Hosting für Ihre Repositories und mehrere Tools zur Arbeit mit ihnen bietet.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel leicht herunterladen können. Sie werden auch in der Lage sein, den Code zu erhalten, wie er nach dem Abschluss des Artikels sein sollte, für den Fall, dass Sie sich verlaufen.

Nachdem Sie [git installiert](https://git-scm.com/downloads) haben, um das Repository zu klonen, sollten Sie:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann zu Beginn eines jeden Artikels, können Sie einfach in den entsprechenden Ordner wechseln und die App im Entwicklermodus starten, um den aktuellen Zustand zu sehen, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über git und GitHub lernen möchten, haben wir eine Liste mit Links zu nützlichen Leitfäden zusammengestellt – siehe [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub).

> [!NOTE]
> Wenn Sie nur die Dateien herunterladen möchten, ohne das Git-Repo zu klonen, können Sie das Degit-Tool wie folgt verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit wird kein lokales Git-Repo erstellen, es wird nur die Dateien des angegebenen Ordners herunterladen.

### Verwendung des Svelte REPL

Ein REPL ([Read–Eval–Print Loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen – viele Programmiersprachen bieten einen REPL.

Svelte's REPL ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, vollständige Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um mit Svelte auf jedem Computer zu spielen, ohne etwas installieren zu müssen. Es wird auch häufig von der Svelte-Community verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer sehr nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Lassen Sie uns einen kurzen Blick auf den Svelte REPL und seine Verwendung werfen. Er sieht folgendermaßen aus:

![der Svelte REPL in Aktion, zeigt Komponentencode auf der linken Seite und Ausgabe auf der rechten Seite](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten, und auf der rechten Seite das laufende Ausgabe Ihrer App.
- Die Leiste über dem Code lässt Sie `.svelte`- und `.js`-Dateien erstellen und sie neu anordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie z.B.: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber haben Sie den Titel des REPLs. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Registerkarten:

  - Die _Result_-Registerkarte zeigt Ihre App-Ausgabe und bietet eine Konsole am unteren Rand.
  - Die _JS output_-Registerkarte lässt Sie den von Svelte generierten JavaScript-Code inspizieren und Compiler-Optionen festlegen.
  - Die _CSS output_-Registerkarte zeigt das von Svelte generierte CSS.

- Über den Registerkarten finden Sie eine Symbolleiste, mit der Sie den Vollbildmodus betreten und Ihre App herunterladen können. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie die App auch forken und speichern. Sie können auch alle Ihre gespeicherten REPLs anzeigen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Result-Registerkarte aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel ist hier der Link zu einem REPL, der unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, dass Sie die Svelte-Version in der URL angeben können. Das ist nützlich, wenn Probleme in Bezug auf eine spezifische Version von Svelte gemeldet werden.

Wir werden für jeden Artikel einen REPL bereitstellen, damit Sie sofort mit dem Codieren beginnen können.

> [!NOTE]
> Derzeit kann der REPL keine Ordnernamen richtig verarbeiten. Wenn Sie dem Tutorial im REPL folgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Wenn Sie dann einen Pfad im Code sehen, zum Beispiel `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flachen URL, z.B. `import Todos from './Todos.svelte'`.

## Bisheriger Code

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder direkt den Inhalt des Ordners herunterladen:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns mit dem REPL mit zu programmieren, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf Svelte, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen, eine To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge zusammenfassen, die wir gelernt haben.

In Svelte:

- Wir definieren das Script, die Stile und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenten-Props werden mit dem Schlüsselwort `export` deklariert.
- Svelte-Komponenten können einfach durch Importieren der entsprechenden `.svelte`-Datei verwendet werden.
- Komponentenstile sind abgegrenzt, sodass sie sich nicht gegenseitig überlappen.
- Im Markup-Bereich können Sie jede JavaScript-Ausdruck zwischen geschweifte Klammern einschließen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Reaktivität wird einfach durch Zuweisung eines neuen Werts einer Top-Level-Variable ausgelöst.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
