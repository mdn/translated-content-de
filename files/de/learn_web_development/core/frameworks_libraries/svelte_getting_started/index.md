---
title: Erste Schritte mit Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir Ihnen eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den bisher behandelten Frameworks und Werkzeugen unterscheidet. Anschließend lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und sehen, wie wir es lokal ausführen und für die Produktion bauen.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/den Kommandozeilen</a
          > haben.
        </p>
        <p>
          Svelte ist ein Compiler, der aus unseren Quellen minimalen und hochoptimierten
          JavaScript-Code generiert. Sie benötigen ein Terminal mit installiertem Node + npm,
          um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichten einer lokalen Svelte-Entwicklungsumgebung, Erstellen und Bauen
        einer Starter-App, und die Grundlagen ihrer Funktionsweise verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz für die Erstellung reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz für die Erstellung von Web-Apps als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers erledigen, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur ausgeführt wird, wenn Sie Ihre App bauen, und produziert hochoptimiertes Vanilla-JavaScript.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungsdateien und bessere Leistung, sondern auch eine Entwicklererfahrung, die für Menschen, die wenig Erfahrung mit dem modernen Tooling-Ökosystem haben, zugänglicher ist.

Svelte bleibt dem klassischen Webentwicklungsmodell von HTML, CSS und JS treu und fügt diesen nur einige Erweiterungen hinzu. Es hat möglicherweise weniger Konzepte und Tools zu erlernen als einige andere Framework-Optionen.

Seine derzeitigen Hauptnachteile sind, dass es ein junges Framework ist – sein Ökosystem ist daher in Bezug auf Tools, Unterstützung, Plugins, klare Nutzungsmuster usw. weniger umfangreich als bei reiferen Frameworks, und es gibt auch weniger Arbeitsmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden es später in dieser Tutorialreihe betrachten.

Wir empfehlen Ihnen, das [Svelte-Tutorial](https://learn.svelte.dev/) zu durchlaufen, um eine wirklich kurze Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorialreihe zurückkehren, um zu lernen, wie man etwas etwas tiefergehenderes baut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Oberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf anfangen und Svelte Ihre Benutzeroberfläche steuern lassen oder es schrittweise in eine bestehende Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet, um die folgenden Situationen zu bewältigen:

- Webanwendungen für leistungsschwache Geräte: Mit Svelte erstellte Anwendungen haben kleinere Paketgrößen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und im Speicher zu behalten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungsgewinne, die durch ein Framework ohne Laufzeitoverhead erzielt werden, sicherstellen, dass Benutzerinteraktionen schnell und reaktionsschnell sind.
- Einarbeitung von Personen mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Besonderheiten von Svelte in kurzer Zeit leicht erfassen und mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Merkmale, die in modernen Web-Frameworks zu finden sind, wie zum Beispiel dateibasiertes Routing, serverseitiges Rendering (SSR), seitenbezogene Rendering-Modi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Laufzeitoverhead generieren. Um dies zu erreichen, erweitert Svelte die Vanilla-Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup und Direktiven zur Verwendung von Bedingungen und Schleifen zulässt, ähnlich wie Handlebars.
- Es erweitert CSS, indem es einen Scoping-Mechanismus hinzufügt, der jedem Element erlaubt, seine eigenen Stile zu definieren, ohne das Risiko einzugehen, mit den Stilen anderer Elemente zu kollidieren.
- Es erweitert JavaScript, indem es bestimmte Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und die Verwaltung des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Die Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um weder die JavaScript-Syntax zu brechen noch die Entwickler zu entfremden. Tatsächlich werden Sie hauptsächlich mit Vanilla-JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag zu Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Version mit Langzeitunterstützung (LTS) zu verwenden. Node enthält npm (den Node-Paket-Manager) und npx (den Node-Paket-Ausführer). Beachten Sie, dass Sie auch den Yarn-Paket-Manager anstelle von npm verwenden können, aber wir gehen davon aus, dass Sie npm in diesem Tutorial-Set verwenden. Weitere Informationen zu npm und Yarn finden Sie unter [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Ihnen eine Parität mit dem Unix/macOS-Terminal zu bieten, damit Sie die in diesem Tutorial genannten Terminalbefehle verwenden können. Gitbash (das Teil des [Git for Windows-Toolsets](https://gitforwindows.org/) ist) oder [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie im [Crashkurs Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Weitere Informationen finden Sie auch unter:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung von npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, einfach die Starter-Template-Anwendung herunterzuladen. Das können Sie tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können das Herunterladen und Entpacken vermeiden und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> degit macht keine Art von Magie – es ermöglicht Ihnen nur, die neueste Version des Inhalts eines Git-Repos herunterzuladen und zu entpacken. Dies ist viel schneller als die Verwendung von `git clone`, da es nicht den gesamten Verlauf des Repos herunterlädt oder einen vollständigen lokalen Klon erstellt.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und erstellen. Es startet einen lokalen Server unter `localhost:8080`. Svelte wird auf Dateiaktualisierungen achten und die App automatisch neu kompilieren und aktualisieren, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser zeigt etwas wie folgt an:

![Eine einfache Startseite, die Hello World sagt und einen Link zu den offiziellen Svelte-Tutorials bietet](01-svelte-starter-app.png)

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

Der Inhalt ist wie folgt:

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die von Node.js/npm verwendet werden, um es organisiert zu halten. Sie müssen diese Datei nicht verstehen, um dieses Tutorial abzuschließen. Weitere Informationen finden Sie jedoch in der Diskussion über [`package.json`-Handhabung](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com; wir behandeln es auch in unserem [Grundlagen des Paketmanagements-Tutorial](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Teilt Git mit, welche Dateien oder Ordner aus dem Projekt ausgeschlossen werden sollen - nützlich, wenn Sie Ihre App in ein Git-Repo einfügen möchten.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei teilt Rollup mit, wie Ihre App kompiliert und gebaut werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starter-Projekt mit `npx degit sveltejs/template-webpack svelte-app` statt dessen erstellen.
- `scripts`: Enthält erforderliche Setupscripte. Derzeit sollte nur `setupTypeScript.js` enthalten sein.

  - `setupTypeScript.js`: Dieses Skript richtet die TypeScript-Unterstützung in Svelte ein. Wir werden darüber im letzten Artikel mehr sprechen.

- `src`: Dieses Verzeichnis enthält den Quellcode für Ihre Anwendung – hier erstellen Sie den Code für Ihre App.

  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher rendert es nur die 'Hello World!'-Nachricht.
  - `main.js`: Der Einstiegspunkt unserer Anwendung. Es instanziert einfach die `App`-Komponente und bindet sie an den Body unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in Produktion veröffentlicht werden.
  - `favicon.png`: Dies ist das Favicon Ihrer App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Zunächst ist es nur eine leere HTML-Seite, die die CSS-Dateien und js-Bundles lädt, die von Svelte generiert wurden.
  - `global.css`: Diese Datei enthält ungescope Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.
    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Ein Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien mit einer Erweiterung von HTML geschrieben.

Alle drei Abschnitte — `<script>`, `<style>` und Markup — sind optional und können in beliebiger Reihenfolge vorkommen.

```svelte
<script>
  // logic goes here
</script>

<style>
  /* styles go here */
</style>

<!-- markup (zero or more HTML elements) goes here -->
```

> [!NOTE]
> Weitere Informationen zum Format der Komponente finden Sie in der [Svelte-Komponentendokumentation](https://svelte.dev/docs/svelte-components).

Lassen Sie uns dies im Kopf behaltend einen Blick auf die Datei `src/App.svelte` werfen, die mit der Startervorlage geliefert wurde. Sie sollten etwas wie das Folgende sehen:

```svelte
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

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Komponentinstanz erstellt wird. Variablen, die auf oberster Ebene deklariert (oder importiert) werden, sind von der Komponente aus sichtbar. Top-Level-Variablen sind der Weg, auf dem Svelte den Zustand der Komponenten handhabt, und sie sind standardmäßig reaktiv. Wir werden später ausführlich erklären, was das bedeutet.

```svelte
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu markieren, was bedeutet, dass sie den Verbrauchern der Komponente (z. B. anderen Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen und dennoch vertraut zu halten.

### Der Markup-Abschnitt

Im Markup-Bereich können Sie beliebiges HTML einfügen, zudem können Sie gültige JavaScript-Ausdrücke in einfache geschweifte Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert der `name`-Prop direkt nach dem Text `Hello` ein.

```svelte
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele ermöglichen es, einen Teil des Markups bedingt zu rendern, eine Liste von Elementen zu durchlaufen und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrung mit CSS haben, sollte der folgende Ausschnitt verständlich sein:

```svelte
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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Element an. Was passiert mit anderen Komponenten mit `<h1>`-Elementen in ihnen?

In Svelte sind die CSS-Stile innerhalb eines Komponenten-`<style>`-Blocks nur auf diese Komponente beschränkt. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit der rechten Maustaste/<kbd>Strg</kbd> auf das _HELLO WORLD!_-Etikett klicken und _Untersuchen_ auswählen:

![Svelte Starter-App mit geöffneten Entwicklertools, die Klassen für gescoped Stile anzeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition in `h1.svelte-1tky8bj` und modifiziert dann jedes `<h1>`-Element in unserer Komponente in `<h1 class="svelte-1tky8bj">`, sodass es die erforderlichen Stile übernimmt.

> [!NOTE]
> Sie können dieses Verhalten überschreiben und Stile auf einen Selektor global anwenden, indem Sie den `:global()`-Modifizierer verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Änderungen vornehmen

Da wir jetzt eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir einige Änderungen vornehmen.
An dieser Stelle können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren — zum Beispiel das `<h1>`-Element in `App.svelte` so ändern, dass es wie folgt aussieht:

```svelte
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die bei `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf Svelte-Reaktivität

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework den DOM automatisch aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird die Reaktivität durch das Zuweisen eines neuen Werts zu einer Top-Level-Variablen in einer Komponente ausgelöst. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unserer `App`-Komponente einfügen und einen Button erstellen, um sie auszuführen.

Versuchen Sie, Ihre `<script>`- und Markupabschnitte wie folgt zu aktualisieren:

```svelte
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

Jedes Mal, wenn der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variablen aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Etikett automatisch aktualisiert. Im Hintergrund hat Svelte den JavaScript-Code erstellt, um den DOM jedes Mal zu aktualisieren, wenn sich der Wert der Variablen name ändert, ohne einen virtuellen DOM oder einen anderen komplexen Abgleichsmechanismus zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist Svelte's Syntax, um auf DOM-Ereignisse zu reagieren.

## Inspektion von main.js: Der Einstiegspunkt unserer App

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

`main.js` beginnt mit dem Importieren der Svelte-Komponente, die wir verwenden möchten. Dann wird es mit `new App` instanziiert, wobei ein Optionsobjekt mit folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in das wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jeder Eigenschaft der `App`-Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien gut zusammenarbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert ihn in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Er fügt auch den Code in `src/main.js` hinzu, um die Features jeder Komponente zu referenzieren.

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

Die minifizierte Version von `bundle.js` wiegt etwas mehr als 3KB und enthält das "Svelte-Runtime" (nur 300 Zeilen JavaScript-Code) und die `App.svelte`-kompilierte Komponente. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es gibt keine anderen Bibliotheken, die in die Webseite geladen werden.

Dies ist ein weitaus kleinerer Fußabdruck als kompilierte Bundles anderer Frameworks. Beachten Sie, dass es bei Code-Bundles nicht nur auf die Größe der Dateien ankommt, die Sie herunterladen müssen. Dies ist ausführbarer Code, der geparst, ausgeführt und im Speicher gehalten werden muss. Dies macht also wirklich einen Unterschied, insbesondere bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Folgen Sie diesem Tutorial

In dieser Tutorialreihe bauen Sie eine komplette Webanwendung. Wir werden alle Grundlagen über Svelte und auch einige fortgeschrittene Themen lernen.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis der Svelte-Funktionen zu erhalten, aber Sie werden am meisten von diesem Tutorial profitieren, wenn Sie den Code der App mit uns durchgehen, während Sie gehen. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository mit einem Ordner bereit, der den Quellcode der App enthält, wie er zu Beginn jedes Tutorials ist.

Svelte bietet auch ein Online-REPL, das ein Spielplatz zum Live-Codieren von Svelte-Apps im Web ist, ohne dass Sie etwas auf Ihrem Computer installieren müssen. Wir stellen ein REPL für jeden Artikel bereit, damit Sie sofort mit dem Codieren beginnen können. Lassen Sie uns ein wenig mehr darüber sprechen, wie Sie diese Tools verwenden.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Seite, die Hosting für Ihre Repositories und verschiedene Werkzeuge zum Arbeiten mit ihnen bereitstellt.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel leicht herunterladen können. Sie können den Code auch abrufen, wie er nach Abschluss des Artikels sein soll, nur für den Fall, dass Sie sich verirren.

Nachdem Sie [Git installiert](https://git-scm.com/downloads) haben, sollten Sie zum Klonen des Repositorys Folgendes ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn jedes Artikels einfach in den entsprechenden Ordner wechseln und die App im Entwicklungsmodus starten, um zu sehen, wie der aktuelle Zustand aussehen sollte, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste mit Links zu nützlichen Anleitungen zusammengestellt - siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie die Dateien nur herunterladen möchten, ohne das Git-Repo zu klonen, können Sie das Degit-Tool wie folgt verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit wird kein lokales Git-Repo erstellen, es werden nur die Dateien des angegebenen Ordners heruntergeladen.

### Verwendung des Svelte REPL

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und die Ergebnisse sofort zu sehen — viele Programmiersprachen bieten eine REPL.

Das Svelte-REPL ist weit mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, vollständige Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um mit Svelte auf jedem Computer zu experimentieren, ohne etwas installieren zu müssen. Es wird auch häufig von der Svelte-Community verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer äußerst nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Werfen wir einen kurzen Blick auf das Svelte-REPL und wie Sie es verwenden würden. Es sieht so aus:

![das Svelte-REPL in Aktion, zeigt Komponenten-Code links und Ausgabe rechts](03-svelte-repl-in-action.png)

Um ein REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten, und auf der rechten Seite sehen Sie die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht es Ihnen, `.svelte`- und `.js`-Dateien zu erstellen und sie neu anzuordnen. Um eine Datei innerhalb eines Ordners zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, z. B. `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber hinaus haben Sie den Titel des REPLs. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Registerkarten:

  - Die _Result_-Registerkarte zeigt Ihre App-Ausgabe an und bietet unten eine Konsole.
  - Die _JS output_-Registerkarte ermöglicht es Ihnen, den von Svelte generierten JavaScript-Code zu inspizieren und Compiler-Optionen festzulegen.
  - Die _CSS output_-Registerkarte zeigt das von Svelte generierte CSS an.

- Über den Registerkarten finden Sie eine Symbolleiste, mit der Sie in den Vollbildmodus wechseln und Ihre App herunterladen können. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie auch die App forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Your saved apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Result-Registerkarte aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Hier ist zum Beispiel der Link zu einem REPL, das unsere komplette App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, dass Sie die Svelte-Version in der URL angeben können. Dies ist nützlich, wenn Sie Probleme im Zusammenhang mit einer bestimmten Version von Svelte melden.

Wir werden ein REPL am Anfang und Ende jedes Artikels bereitstellen, damit Sie sofort mit uns codieren können.

> [!NOTE]
> Im Moment kann das REPL Ordnernamen nicht richtig handhaben. Wenn Sie das Tutorial im REPL verfolgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Wenn Sie dann einen Pfad im Code sehen, zum Beispiel `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z. B. `import Todos from './Todos.svelte'`.

## Bisheriger Code

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Anwendungszustand zu erreichen, führen Sie:

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu codieren, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Blicks auf Svelte, einschließlich der lokalen Installation, der Erstellung einer Starter-App und der Funktionsweise der Grundlagen. Im nächsten Artikel werden wir anfangen, unsere erste richtige Anwendung, eine To-Do-Liste, zu erstellen. Bevor wir das tun, lassen Sie uns einige der Dinge zusammenfassen, die wir gelernt haben.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzelnen `.svelte`-Datei.
- Komponenten-Props werden mit dem Schlüsselwort `export` deklariert.
- Svelte-Komponenten können durch einfaches Importieren der entsprechenden `.svelte`-Datei verwendet werden.
- Komponentenstile sind gescoped, sodass sie nicht miteinander kollidieren.
- Im Markup-Abschnitt können Sie jeden JavaScript-Ausdruck einfügen, indem Sie ihn in geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Reaktivität wird ausgelöst, indem einer Top-Level-Variablen einfach ein neuer Wert zugewiesen wird.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
