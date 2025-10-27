---
title: Einstieg in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den bisher betrachteten Frameworks und Tools unterscheidet. Anschließend lernen wir, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Struktur des Projekts versteht, es lokal ausführt und für die Produktion baut.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a> besitzen.
        </p>
        <p>
          Svelte ist ein Compiler, der minimierten und hoch optimierten
          JavaScript-Code aus unseren Quellcodes erzeugt; Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichtung einer lokalen Svelte-Entwicklungsumgebung, Erstellung und Bau einer Starter-App sowie Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz für die Erstellung von reichhaltigen Benutzeroberflächen

Svelte bietet einen anderen Ansatz für den Aufbau von Web-Apps als einige der anderen Frameworks, die in diesem Modul behandelt werden. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Nutzers erledigen, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Bauen Ihrer App stattfindet, und erzeugt hoch optimierten, nativen JavaScript-Code.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungsbundles und bessere Leistung, sondern auch ein Entwicklererlebnis, das für Personen mit begrenzter Erfahrung im modernen Tooling-Ökosystem zugänglicher ist.

Svelte hält sich eng an das klassische Webentwicklungsmodell von HTML, CSS und JS und fügt nur einige Erweiterungen zu HTML und JavaScript hinzu. Es hat möglicherweise weniger Konzepte und Tools zu lernen als einige der anderen Framework-Optionen.

Die Hauptnachteile sind, dass es sich um ein junges Framework handelt — sein Ökosystem ist daher in Bezug auf Tools, Unterstützung, Plugins, klare Nutzungsmuster usw. begrenzter als reifere Frameworks, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Sie zu ermutigen, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden später in dieser Tutorialserie darauf eingehen.

Wir empfehlen Ihnen, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die Grundkonzepte zu erhalten, bevor Sie zu dieser Tutorialserie zurückkehren, um etwas tiefergehendes zu bauen.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf beginnen und Svelte Ihre Benutzeroberfläche steuern lassen oder es schrittweise in eine bestehende Anwendung integrieren.

Dennoch ist Svelte besonders geeignet, um folgende Situationen anzugehen:

- Webanwendungen, die für leistungsschwache Geräte vorgesehen sind: Anwendungen, die mit Svelte erstellt wurden, haben kleinere Bundle-Größen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet, dass weniger KB heruntergeladen, geparst, ausgeführt und im Speicher erhalten werden müssen.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungssteigerungen, die aus einem Framework ohne Laufzeitzuschlag resultieren, dafür sorgen, dass Benutzerinteraktionen schnell und reaktionsschnell sind.
- Einführung von Personen mit grundlegenden Kenntnissen in der Webentwicklung: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Svelte-Spezifika leicht in kurzer Zeit erfassen und mit der Erstellung von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Webframeworks zu finden sind, wie dateibasierte Routen, serverseitiges Rendering (SSR), seitenweise Rendering-Modi, Offline-Unterstützung und mehr. Für weitere Informationen über SvelteKit siehe das [offizielle Tutorial](https://learn.svelte.dev/) und die [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code generieren, ohne Laufzeitzuschläge. Um dies zu erreichen, erweitert Svelte native Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke in Markup zulässt und Direktiven bereitstellt, um Bedingungen und Schleifen wie in Handlebars zu verwenden.
- Es erweitert CSS durch Hinzufügen eines Scoping-Mechanismus, der es jedem Komponent erlaubt, seine eigenen Stile zu definieren, ohne das Risiko eines Konflikts mit den Stilen anderer Komponenten.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und die Verwaltung des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um JavaScript-Syntax nicht zu verletzen oder Entwickler zu entfremden. Tatsächlich werden Sie hauptsächlich mit nativem JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag zu Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die langfristig unterstützte (LTS) Version zu verwenden. Node enthält npm (den Node Package Manager) und npx (den Node Package Runner). Beachten Sie, dass Sie auch den Yarn Package Manager anstelle von npm verwenden können, aber wir gehen davon aus, dass Sie npm in diesem Tutorial verwenden. Weitere Informationen zu npm und yarn finden Sie unter [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit Unix/macOS-Terminals zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. Git Bash (das Teil des [Git für Windows-Werkzeugsatzes](https://gitforwindows.org/) ist) oder das [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie im [Kommandozeilen-Crashkurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Siehe auch die folgenden weiterführenden Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung in npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, die Starter-Vorlagenanwendung herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können das Herunterladen und Auspacken vermeiden und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> Degit macht keine Art von Magie – es ermöglicht Ihnen einfach, die neueste Version der Inhalte eines Git-Repos herunterzuladen und zu entpacken. Dies ist viel schneller als `git clone`, da es nicht die ganze Historie des Repos herunterlädt oder ein vollständiges lokales Abbild erstellt.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und bauen. Es wird einen lokalen Server unter `localhost:8080` starten. Svelte wird auf Dateiupdates achten und die App automatisch neu kompilieren und aktualisieren, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser zeigt etwas wie das folgende an:

![Eine einfache Startseite, die "Hello World" sagt und einen Link zu den offiziellen Svelte-Tutorials bietet](01-svelte-starter-app.png)

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, das Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Datei nicht verstehen, um dieses Tutorial zu vervollständigen. Wenn Sie jedoch mehr erfahren möchten, können Sie mehr über [`package.json`-Handling](https://docs.npmjs.com/cli/configuring-npm/package-json/) bei npmjs.com lesen; wir sprechen auch in unserem [Paketmanagement-Grundlagen-Tutorial](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) darüber.
- `node_modules`: Hier speichert node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur zu Entwicklungszwecken verwendet.
- `.gitignore`: Gibt Git an, welche Dateien oder Ordner im Projekt ignoriert werden sollen — nützlich, wenn Sie sich entscheiden, Ihre App in ein Git-Repo aufzunehmen.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modulpaketierer. Diese Konfigurationsdatei gibt rollup an, wie Ihre App kompiliert und gebaut werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` erstellen.
- `scripts`: Enthält Setupscripte nach Bedarf. Aktuell sollte es nur `setupTypeScript.js` enthalten.
  - `setupTypeScript.js`: Dieses Skript richtet die TypeScript-Unterstützung in Svelte ein. Wir sprechen darüber mehr im letzten Artikel.

- `src`: Dieses Verzeichnis enthält den Quellcode Ihrer Anwendung — hier erstellen Sie den Code für Ihre App.
  - `App.svelte`: Dies ist die Hauptkomponente Ihrer App. Sie gibt bisher nur die 'Hello World!'-Nachricht aus.
  - `main.js`: Der Einstiegspunkt für unsere Anwendung. Es instanziiert einfach die `App`-Komponente und bindet sie an den Körper unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.
  - `favicon.png`: Dies ist das Favicon für Ihre App. Aktuell ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfangs ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält ungescoperte Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.
    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Ein Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien unter Verwendung einer Obermenge von HTML geschrieben.

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
> Weitere Informationen zum Komponentenformat finden Sie in der [Svelte-Komponentendokumentation](https://svelte.dev/docs/svelte-components).

Lassen Sie uns dies im Hinterkopf behalten und einen Blick auf die `src/App.svelte`-Datei werfen, die mit der Startervorlage geliefert wurde. Sie sollten etwas sehen, das dem folgenden ähnelt:

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

  @media (width >= 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

### Der `<script>`-Abschnitt

Der `<script>`-Block enthält JavaScript, das beim Erstellen einer Komponenteninstanz ausgeführt wird. Auf oberster Ebene deklarierte (oder importierte) Variablen sind aus dem Markup der Komponente "sichtbar". Oberste Variablen sind die Art und Weise, wie Svelte den Komponentenstatus handhabt, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```svelte
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder "prop") zu markieren, was bedeutet, dass sie für Verbraucher der Komponente (z.B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie vertraut bleibt.

### Der Markup-Abschnitt

Im Markup-Abschnitt können Sie beliebiges HTML einfügen, und zusätzlich können Sie gültige JavaScript-Ausdrücke innerhalb einzelner geschweifter Klammern `{}` einfügen. In diesem Fall betten wir den Wert der `name`-Prop direkt nach dem Text `Hello` ein.

```svelte
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele erlauben es Ihnen, einen Teil des Markups bedingt zu rendern, eine Liste von Elementen zu durchlaufen und mit asynchronen Werten zu arbeiten.

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

  @media (width >= 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element an. Was wird mit anderen Komponenten mit `<h1>`-Elementen darin geschehen?

In Svelte wird CSS innerhalb eines `<style>`-Blocks einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit der rechten/<kbd>Strg</kbd>-Taste auf das _HELLO WORLD!_-Label klicken und _Inspect_ wählen:

![Svelte Starter-App mit geöffneten Entwicklerwerkzeugen, die Klassen für gescopedte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition zu `h1.svelte-1tky8bj` und modifiziert dann jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, sodass es die erforderlichen Stile aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten überschreiben und Stile global auf einen Selektor anwenden, indem Sie den `:global()`-Modifikator verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Da wir nun eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir beginnen, ein paar Änderungen vorzunehmen.
An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren — beispielsweise das `<h1>`-Element in `App.svelte` so ändern, dass es folgendermaßen aussieht:

```svelte
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die laufende App unter `localhost:8080` wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität in Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework das DOM automatisch aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird Reaktivität ausgelöst, indem einer beliebigen obersten Variablen in einer Komponente ein neuer Wert zugewiesen wird. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unsere `App`-Komponente einfügen und einen Button, um sie auszuführen.

Versuchen Sie, Ihren `<script>`- und Markup-Abschnitt wie folgt zu aktualisieren:

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

Wann immer der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variable aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Hinter den Kulissen hat Svelte den JavaScript-Code erstellt, um das DOM zu aktualisieren, wenn sich der Wert der `name`-Variable ändert, ohne dass ein virtueller DOM oder andere komplexe Abgleichsmechanismen verwendet werden.

Beachten Sie die Verwendung von `:` in `on:click`. Dies ist die Svelte-Syntax zum Abhören von DOM-Ereignissen.

## Inspizieren von main.js: der Einstiegspunkt unserer App

Öffnen wir `src/main.js`, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht initial so aus:

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

`main.js` beginnt mit dem Importieren der Svelte-Komponente, die wir verwenden möchten. Dann wird sie mit `new App` instanziiert, wobei ein Optionsobjekt mit folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, innerhalb dessen wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: die Werte, die jeder Prop der `App`-Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien geschickt zusammenarbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert ihn in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Er fügt auch den Code in `src/main.js` hinzu, um auf die Funktionen jeder Komponente zu verweisen.

Schließlich enthält die Datei `public/index.html` die generierten `bundle.css` und `bundle.js`-Dateien:

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

Die minifizierte Version von `bundle.js` wiegt etwas mehr als 3KB, was die "Svelte-Laufzeit" (nur 300 Zeilen JavaScript-Code) und die aus der `App.svelte`-kompilierten Komponenten enthält. Wie Sie sehen, wird `bundle.js` als einzige JavaScript-Datei von `index.html` referenziert. Es werden keine anderen Bibliotheken in die Webseite geladen.

Dies ist ein viel kleinerer Fußabdruck als die kompilierte Bundles anderer Frameworks. Beachten Sie, dass bei Code-Bundles nicht nur die Größe der herunterzuladenden Dateien wichtig ist. Dies ist ausführbarer Code, der geparst, ausgeführt und im Speicher gehalten werden muss. Dies macht wirklich einen Unterschied, insbesondere bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Dieses Tutorial folgen

In dieser Tutorialserie werden Sie eine vollständige Webanwendung erstellen. Wir lernen alle Grundlagen von Svelte und auch einige fortgeschrittene Themen.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis der Svelte-Funktionen zu bekommen, aber Sie werden am meisten von diesem Tutorial profitieren, wenn Sie die App zusammen mit uns codieren, während Sie gehen. Um es Ihnen einfacher zu machen, jedem Artikel zu folgen, bieten wir ein GitHub-Repository mit einem Ordner, der den Quellcode der App enthält, wie sie zu Beginn jedes Tutorials aussieht.

Svelte bietet auch eine Online-REPL, die einen Spielplatz für Live-Coding von Svelte-Apps im Web darstellt, ohne dass Sie etwas auf Ihrer Maschine installieren müssen. Wir bieten eine REPL für jeden Artikel, damit Sie sofort mit dem Codieren beginnen können. Lassen Sie uns kurz darüber sprechen, wie Sie diese Tools verwenden.

### Git verwenden

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Website, die Hosting für Ihre Repositories und verschiedene Werkzeuge für die Arbeit mit ihnen bietet.

Wir werden GitHub verwenden, sodass Sie den Quellcode für jeden Artikel leicht herunterladen können. Sie können auch den Code so erhalten, wie er nach Abschluss des Artikels sein sollte, falls Sie sich verirren.

Nach der [Installation von Git](https://git-scm.com/downloads) sollten Sie, um das Repository zu klonen, folgenden Befehl ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn jedes Artikels einfach in den entsprechenden Ordner wechseln und die App im Entwicklungsmodus starten, um zu sehen, wie ihr aktueller Zustand sein sollte, wie folgt:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste mit nützlichen Leitfäden zusammengestellt – siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie die Dateien nur herunterladen möchten, ohne das Git-Repo zu klonen, können Sie das Degit-Tool so verwenden – `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit wird kein lokales Git-Repo erstellen, es wird nur die Dateien des angegebenen Ordners herunterladen.

### Die Svelte REPL verwenden

Eine REPL ([read–eval–print loop](https://de.wikipedia.org/wiki/Read-Eval-Print-Loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und die Ergebnisse sofort zu sehen – viele Programmiersprachen bieten eine REPL.

Die Svelte-REPL ist weit mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, komplette Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um von jeder Maschine aus mit Svelte zu experimentieren, ohne etwas installieren zu müssen. Es wird auch in der Svelte-Community häufig verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer äußerst nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Werfen wir einen kurzen Blick auf die Svelte REPL und wie Sie es verwenden würden. Sie sieht so aus:

![Die Svelte-REPL in Aktion, zeigt Komponentencode links und Ausgabe rechts](03-svelte-repl-in-action.png)

Um eine REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten und auf der rechten Seite die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht es Ihnen, `.svelte`- und `.js`-Dateien zu erstellen und sie neu anzuordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie in: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber befindet sich der Titel der REPL. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite befinden sich drei Registerkarten:
  - Die _Ergebnis_-Registerkarte zeigt die Ausgabe Ihrer App an und bietet unten eine Konsole.
  - Die _JS-Ausgabe_-Registerkarte ermöglicht es Ihnen, den von Svelte generierten JavaScript-Code zu inspizieren und Compiler-Optionen festzulegen.
  - Die _CSS-Ausgabe_-Registerkarte zeigt den von Svelte generierten CSS-Code.

- Über den Registerkarten finden Sie eine Werkzeugleiste, mit der Sie den Vollbildmodus aktivieren und Ihre App herunterladen können. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie auch die App forken und speichern. Sie können auch alle Ihre gespeicherten REPLs anzeigen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei in der REPL ändern, wird Svelte die App neu kompilieren und die Ergebnisregisterkarte aktualisieren. Um Ihre App zu teilen, teilen Sie einfach die URL. Zum Beispiel hier ist der Link für eine REPL, die unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Svelte-Version in der URL angeben können. Dies ist nützlich, wenn Sie Probleme melden, die mit einer bestimmten Version von Svelte zusammenhängen.

Wir werden eine REPL am Anfang und Ende jedes Artikels bereitstellen, damit Sie sofort mit dem Codieren beginnen können.

> [!NOTE]
> Im Moment kann die REPL keine Ordnernamen richtig verarbeiten. Wenn Sie das Tutorial in der REPL verfolgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Wenn Sie dann einen Pfad im Code sehen, zum Beispiel `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z.B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erreichen, führen Sie dann aus:

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns unter Verwendung der REPL zu coden, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit enden wir unseren ersten Blick auf Svelte, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu entwickeln, eine To-Do-Liste. Bevor wir dies tun, lassen Sie uns einige der Dinge, die wir gelernt haben, zusammenfassen.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponentenprops werden mit dem Schlüsselwort `export` deklariert.
- Svelte-Komponenten können einfach verwendet werden, indem die entsprechende `.svelte`-Datei importiert wird.
- Komponentenstile sind gescoped, sodass sie nicht miteinander in Konflikt geraten.
- Im Markup-Abschnitt können Sie jeden JavaScript-Ausdruck einfügen, indem Sie ihn zwischen geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Reaktivität wird einfach ausgelöst, indem einer Top-Level-Variablen ein neuer Wert zugewiesen wird.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
