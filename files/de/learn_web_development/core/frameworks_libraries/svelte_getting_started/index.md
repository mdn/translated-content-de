---
title: Einstieg in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen bisher behandelten Frameworks und Tools abhebt. Anschließend lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispielanwendung erstellen, die Struktur des Projekts verstehen und es lokal ausführen sowie für die Produktion bereitstellen.

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
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeilenumgebung</a
          > haben.
        </p>
        <p>
          Svelte ist ein Compiler, der aus unseren Quelltexten minimalen und hochgradig optimierten
          JavaScript-Code generiert; Sie benötigen ein Terminal mit installierten Node + npm, um Ihre Anwendung zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Eine lokale Svelte-Entwicklungsumgebung einrichten, eine Starter-App erstellen und bauen sowie die Grundlagen verstehen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zur Erstellung von reichhaltigen Benutzeroberflächen

Svelte bietet einen anderen Ansatz zur Erstellung von Webanwendungen als einige der anderen Frameworks, die in diesem Modul behandelt werden. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers ausführen, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Aufbau Ihrer Anwendung stattfindet und dabei hochoptimiertes Vanilla JavaScript erzeugt.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungspakete und eine bessere Leistung, sondern auch eine Entwicklererfahrung, die für Menschen mit begrenzter Erfahrung im modernen Tooling-Ökosystem zugänglicher ist.

Svelte orientiert sich eng am klassischen Webentwicklungsmodell von HTML, CSS und JS und fügt lediglich ein paar Erweiterungen zu HTML und JavaScript hinzu. Es hat möglicherweise weniger Konzepte und Tools zu lernen als einige der anderen Framework-Optionen.

Derzeitige Hauptnachteile sind, dass es sich um ein junges Framework handelt – sein Ökosystem ist daher in Bezug auf Tooling, Support, Plugins, klare Nutzungsmuster usw. begrenzter als bei reiferen Frameworks, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden später in dieser Tutorial-Serie darauf eingehen.

Wir ermutigen Sie, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas tiefergehenderes erstellt.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu beginnen, indem Sie Svelte Ihre UI steuern lassen, oder Sie können es schrittweise in eine bestehende Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet, um folgende Situationen anzugehen:

- Webanwendungen, die für Geräte mit geringem Stromverbrauch gedacht sind: Anwendungen, die mit Svelte erstellt wurden, haben kleinere Paketgrößen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Verarbeitungskapazität ist. Weniger Code bedeutet weniger KB, die heruntergeladen, geparst, ausgeführt und im Speicher behalten werden müssen.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungsgewinne, die ein Framework ohne Laufzeit-Overhead mit sich bringt, sicherstellen, dass Benutzerinteraktionen schnell und reaktionsschnell sind.
- Onboarding von Personen mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können Svelte-spezifische Informationen schnell erfassen und mit der Erstellung von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Web-Frameworks zu finden sind, wie dateibasiertes Routing, serverseitiges Rendering (SSR), seitenbezogene Render-Modi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Laufzeit-Overhead erzeugen. Um dies zu erreichen, erweitert Svelte die gängigen Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup erlaubt und Direktiven bereitstellt, um Bedingungen und Schleifen auf eine ähnliche Weise wie Handlebars zu verwenden.
- Es erweitert CSS, indem es einen Scoping-Mechanismus hinzufügt, der es jedem компонент ermöglicht, seine eigenen Stile zu definieren, ohne das Risiko von Kollisionen mit den Stilen anderer компонентen.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und das Zustandsmanagement von компонентen zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-компонентов ein. Erweiterungen der JavaScript-Syntax sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich werden Sie hauptsächlich mit Vanilla-JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag zu Ihrer Seite hinzufügen und es in Ihre Anwendung importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit machen kann.

### Anforderungen

Um mit Svelte arbeiten zu können, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die langfristig unterstützte (LTS) Version zu verwenden. Node enthält npm (den Node-Paketmanager) und npx (den Node-Paketausführer). Beachten Sie, dass Sie auch den Yarn-Paketmanager anstelle von npm verwenden können, wir gehen jedoch in diesen Tutorials davon aus, dass Sie npm verwenden. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen zu npm und Yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit dem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial genannten Terminalbefehle verwenden zu können. Gitbash (das als Teil des [Git für Windows-Toolsets](https://gitforwindows.org/) kommt) oder [Windows Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie im [Kommandozeilen-Crashkurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Auch hierzu siehe die folgenden Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung von npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, ein Starter-App-Template zu erstellen, besteht darin, einfach die Starter-Template-Anwendung herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können das Herunterladen und Entpacken vermeiden und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihr Starter-App-Template zu erstellen, führen Sie die folgenden Terminal-Befehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> Degit macht keine Art von Magie – es lässt Sie lediglich die neueste Version des Inhalts eines Git-Repos herunterladen und entpacken. Dies ist viel schneller als die Verwendung von `git clone`, da es nicht den gesamten Verlauf des Repos herunterlädt oder ein vollständiges lokales Klonen erstellt.

Nachdem Sie `npm run dev` ausgeführt haben, wird Svelte Ihre Anwendung kompilieren und bauen. Es startet einen lokalen Server unter `localhost:8080`. Svelte überwacht Dateiaktualisierungen und kompiliert die Anwendung automatisch neu und aktualisiert sie, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser zeigt etwas wie folgt an:

![A simple start page that says hello world, and gives a link to the official svelte tutorials](01-svelte-starter-app.png)

### Anwendungsstruktur

Das Starter-Template hat folgende Struktur:

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Datei nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr erfahren möchten, können Sie sich über den Umgang mit [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com informieren; wir sprechen auch in unserem [Tutorial zu den Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) darüber.
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur zu Entwicklungszwecken verwendet.
- `.gitignore`: Zeigt Git an, welche Dateien oder Ordner aus dem Projekt ausgeschlossen werden sollen – nützlich, wenn Sie sich entscheiden, Ihre App in ein Git-Repo aufzunehmen.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modulpaketierer. Diese Konfigurationsdatei gibt Rollup an, wie Ihre App kompiliert und gebaut werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starter-Projekt mit `npx degit sveltejs/template-webpack svelte-app` statt mit Rollup erstellen.
- `scripts`: Enthält Einrichtungs-Skripte, wie erforderlich. Derzeit sollte nur `setupTypeScript.js` enthalten sein.

  - `setupTypeScript.js`: Dieses Skript richtet die TypeScript-Unterstützung in Svelte ein. Wir werden darauf im letzten Artikel näher eingehen.

- `src`: In diesem Verzeichnis befindet sich der Quellcode Ihrer Anwendung – wo Sie den Code für Ihre App erstellen.

  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher rendert es nur die 'Hello World!'-Nachricht.
  - `main.js`: Der Einstiegspunkt unserer Anwendung. Es instanziiert lediglich die `App`-Komponente und bindet sie an den Body unserer HTML-Seite.

- `public`: In diesem Verzeichnis befinden sich alle Dateien, die in der Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon für Ihre App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfangs ist es nur eine leere HTML-Seite, die die von Svelte erzeugten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält unskopierte Stile. Es handelt sich um eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.

    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, kompilierter aus Ihrem gesamten JavaScript-Quellcode.

## Einen ersten Blick auf unsere erste Svelte-Komponente werfen

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien geschrieben, die eine Obermenge von HTML verwenden.

Alle drei Abschnitte — `<script>`, `<style>` und Markup — sind optional und können in beliebiger Reihenfolge erscheinen.

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
> Weitere Informationen zum Komponentenformat finden Sie in der [Svelte-Komponenten-Dokumentation](https://svelte.dev/docs/svelte-components).

Mit diesem Wissen werfen wir einen Blick auf die `src/App.svelte`-Datei, die mit dem Starter-Template geliefert wurde. Sie sollten etwa Folgendes sehen:

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

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Instanz der Komponente erstellt wird. Variablen, die auf oberster Ebene deklariert (oder importiert) werden, sind im Markup der Komponente 'sichtbar'. Top-Level-Variablen sind der Weg, wie Svelte den Zustand der Komponente verwaltet, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```svelte
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu kennzeichnen, was bedeutet, dass sie für Verbraucher der Komponente (z. B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie vertraut bleibt.

### Der Markup-Bereich

Im Markup-Bereich können Sie beliebiges HTML einfügen und zusätzlich können Sie gültige JavaScript-Ausdrücke in geschweiften Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert des `name`-Props direkt nach dem `Hello`-Text ein.

```svelte
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele ermöglichen es Ihnen, einen Teil des Markups bedingt zu rendern, eine Liste von Elementen zu durchlaufen und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrung mit der Arbeit mit CSS haben, sollte der folgende Schnipsel sinnvoll sein:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element an. Was passiert mit anderen Komponenten, die `<h1>`-Elemente enthalten?

In Svelte wird CSS innerhalb eines `<style>`-Blocks einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert, indem jedem ausgewählten Element eine Klasse hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit der rechten bzw. <kbd>Strg</kbd>-Taste auf das _HELLO WORLD!_-Label klicken und _Untersuchen_ wählen:

![Svelte starter app with devtools open, showing classes for scoped styles](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition in `h1.svelte-1tky8bj` und modifiziert dann jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, sodass es die erforderlichen Stile aufnehmen kann.

> [!NOTE]
> Sie können dieses Verhalten überschreiben und Stile auf einen Selektor global anwenden, indem Sie den `:global()`-Modifikator verwenden (siehe [Svelte `<style>`-Docs](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Da wir nun eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir beginnen, ein paar Änderungen vorzunehmen. An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren — ändern Sie z. B. das `<h1>`-Element in `App.svelte`, damit es folgendermaßen lautet:

```svelte
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die bei `localhost:8080` ausgeführt wird, wird automatisch aktualisiert.

### Ein erster Blick auf Svelte-Reaktivität

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework das DOM automatisch aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird Reaktivität ausgelöst, indem einer Top-Level-Variablen einer Komponente ein neuer Wert zugewiesen wird. Zum Beispiel könntenwir eine `toggleName()`-Funktion in unsere `App`-Komponente aufnehmen und einen Button, um sie auszuführen.

Versuchen Sie, Ihre `<script>`- und Markup-Abschnitte wie folgt zu aktualisieren:

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

Wann immer der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die ihrerseits den Wert der `name`-Variablen aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Im Hintergrund hat Svelte den JavaScript-Code erstellt, um das DOM zu aktualisieren, wann immer sich der Wert der `name`-Variablen ändert, ohne dass ein virtuelles DOM oder ein anderes komplexes Abstimmungsmechanismus verwendet wird.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist die Svelte-Syntax zum Abhören von DOM-Ereignissen.

## Inspektion von main.js: dem Einstiegspunkt unserer App

Öffnen Sie `src/main.js`, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt unserer App und sieht zunächst wie folgt aus:

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden möchten. Dann wird es mit `new App` instanziiert, wobei ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in dem wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die einem jeden `App`-Komponentenprop zugeordnet werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien gut miteinander arbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert sie in die `public/build/bundle.css`-Datei.

Er kompiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Es fügt auch den Code in `src/main.js` hinzu, um die Funktionen jeder Komponente zu referenzieren.

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

Die minimierte Version von `bundle.js` wiegt etwas mehr als 3 KB, was das "Svelte-Laufzeitsystem" (nur 300 Zeilen JavaScript-Code) und die compilierte `App.svelte`-Komponente umfasst. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es werden keine weiteren Bibliotheken in die Webseite geladen.

Dies ist eine viel kleinere Belastung als kompilierte Bundles von anderen Frameworks. Beachten Sie, dass es im Fall von Code-Bundles nicht nur auf die Größe der Dateien ankommt, die Sie herunterladen müssen. Es handelt sich um ausführbaren Code, der geparst, ausgeführt und im Speicher behalten werden muss. Das macht also wirklich einen Unterschied, insbesondere bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Dieses Tutorial folgen

In dieser Tutorial-Serie werden Sie eine vollständige Webanwendung erstellen. Wir lernen alle Grundlagen über Svelte und auch einige fortgeschrittene Themen.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis für Svelte zu bekommen, aber Sie werden das Beste aus diesem Tutorial herausholen, wenn Sie die App gemeinsam mit uns Schritt für Schritt programmieren. Um Ihnen das Folgen jedes Artikels zu erleichtern, stellen wir ein GitHub-Repository mit einem Ordner zur Verfügung, das den Quellcode der App enthält, so wie er zu Beginn jedes Tutorials aussieht.

Svelte bietet auch ein Online-REPL, das ein Spielplatz zum Live-Codieren von Svelte-Apps im Web ist, ohne dass Sie irgendetwas auf Ihrem Computer installieren müssen. Wir stellen für jeden Artikel ein REPL bereit, damit Sie gleich von Anfang an mit dem Programmieren beginnen können. Lassen Sie uns ein bisschen mehr darüber sprechen, wie Sie diese Tools verwenden können.

### Git verwenden

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Seite, die Hosting für Ihre Repositories und mehrere Werkzeuge zum Arbeiten mit ihnen bietet.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel einfach herunterladen können. Sie können auch den Code in seinem Zustand nach Abschluss des Artikels erhalten, für den Fall, dass Sie den Überblick verlieren.

Nachdem Sie [Git installiert haben](https://git-scm.com/downloads), sollten Sie zum Klonen des Repositories folgenden Befehl ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn jedes Artikels einfach in den entsprechenden Ordner `cd` wechseln und die App im Entwicklermodus starten, um zu sehen, wie ihr aktueller Zustand sein sollte, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste nützlicher Leitfäden zusammengestellt – siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie die Dateien nur herunterladen möchten, ohne das Git-Repo zu klonen, können Sie das Degit-Tool so verwenden – `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit erstellt kein lokales Git-Repo, sondern lädt nur die Dateien des angegebenen Ordners herunter.

### Das Svelte REPL verwenden

Ein REPL ([Read–Eval–Print-Loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen — viele Programmiersprachen bieten ein REPL.

Das REPL von Svelte ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, vollständige Apps zu erstellen, diese online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um von jedem Computer aus mit Svelte zu experimentieren, ohne irgendetwas installieren zu müssen. Es wird auch häufig von der Svelte-Community verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer äußerst nützlich, ein REPL-Beispiel zu erstellen, das das Problem demonstriert.

Werfen wir einen schnellen Blick auf das Svelte REPL und wie Sie es verwenden würden. Es sieht so aus:

![the svelte REPL in action, showing component code on the left, and output on the right](03-svelte-repl-in-action.png)

Um ein REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten und auf der rechten Seite die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht es Ihnen, `.svelte`- und `.js`-Dateien zu erstellen und sie neu anzuordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie z. B.: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber befindet sich der Titel des REPLs. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Tabs:

  - Der Tab _Result_ zeigt die App-Ausgabe und stellt eine Konsole am unteren Rand bereit.
  - Der Tab _JS output_ lässt Sie den von Svelte erzeugten JavaScript-Code inspizieren und Compiler-Optionen festlegen.
  - Der Tab _CSS output_ zeigt das von Svelte erzeugte CSS an.

- Über den Tabs finden Sie eine Symbolleiste, mit der Sie den Vollbildmodus aktivieren und Ihre App herunterladen können. Wenn Sie sich mit einem GitHub-Account anmelden, können Sie die App auch forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihr GitHub-Benutzerkontoprofil klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und den Result-Tab aktualisieren. Um Ihre App zu teilen, teilen Sie einfach die URL. Zum Beispiel finden Sie hier den Link zu einem REPL, das unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, dass Sie die Svelte-Version in der URL angeben können. Dies ist nützlich, wenn ein Problem im Zusammenhang mit einer bestimmten Svelte-Version gemeldet wird.

Wir stellen für jeden Anfang und Ende eines Artikels ein REPL bereit, damit Sie sofort mit dem Programmieren beginnen können.

> [!NOTE]
> Momentan kann das REPL keine Ordnernamen richtig handhaben. Wenn Sie das Tutorial im REPL folgen, erstellen Sie einfach alle Ihre Komponenten im Hauptordner. Wenn Sie dann einen Pfad im Code sehen, zum Beispiel `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z. B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (falls noch nicht geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Status der App zu erhalten, führen Sie aus:

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um im REPL mit uns zu programmieren, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit schließen wir unseren ersten Blick auf Svelte ab, einschließlich der Installation vor Ort, der Erstellung einer Starter-App und der grundlegenden Funktionsweise. Im nächsten Artikel beginnen wir mit der Erstellung unserer ersten richtigen Anwendung, einer To-Do-Liste. Bevor wir das tun, fassen wir einige Dinge, die wir gelernt haben, zusammen.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzelnen `.svelte`-Datei.
- Komponenten-Eigenschaften werden mit dem `export`-Schlüsselwort deklariert.
- Svelte-Komponenten können einfach durch Importieren der entsprechenden `.svelte`-Datei verwendet werden.
- Komponentenstile sind eingeschränkt, um Konflikte untereinander zu vermeiden.
- Im Markup-Bereich können Sie jeden JavaScript-Ausdruck einfügen, indem Sie ihn in geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Reaktivität wird einfach durch das Zuweisen eines neuen Wertes zu einer Top-Level-Variablen ausgelöst.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
