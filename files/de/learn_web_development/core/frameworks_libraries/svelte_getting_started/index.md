---
title: Einstieg in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Svelte-Artikel werden nicht länger gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Webseite entfernt. Die Inhalte werden im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen bisher betrachteten Frameworks und Tools unterscheidet. Anschließend erfahren Sie, wie Sie Ihre Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und sehen, wie Sie es lokal ausführen und für die Produktion bauen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          >
          haben.
        </p>
        <p>
          Svelte ist ein Compiler, der minimalen und hochoptimierten
          JavaScript-Code aus unseren Quellen generiert; Sie benötigen ein Terminal mit installiertem Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Eine lokale Svelte-Entwicklungsumgebung einzurichten, eine Starter-App zu erstellen und zu bauen und die Grundlagen ihres Funktionierens zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zum Erstellen reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz zum Erstellen von Web-Apps als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers erledigen, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Erstellen Ihrer App stattfindet, und erzeugt dabei hochoptimiertes natives JavaScript.

Das Ergebnis dieser Vorgehensweise sind nicht nur kleinere Anwendungs-Bundles und bessere Leistung, sondern auch eine Entwicklererfahrung, die für Personen mit eingeschränkter Erfahrung mit dem modernen Tooling-Ökosystem zugänglicher ist.

Svelte hält sich eng an das klassische Webentwicklungsmodell von HTML, CSS und JS, erweitert diese jedoch um einige Erweiterungen. Es hat wohl weniger Konzepte und Werkzeuge zu lernen als einige der anderen Framework-Optionen.

Seine Hauptnachteile sind derzeit, dass es ein junges Framework ist – sein Ökosystem ist derzeit noch eingeschränkter hinsichtlich Tooling, Support, Plugins, klaren Nutzungsmustern usw. als reifere Frameworks, und es gibt zudem weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden dies später in dieser Tutorial-Serie betrachten.

Wir empfehlen Ihnen, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas tieferes baut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Oberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu beginnen und Svelte Ihre Benutzeroberfläche steuern lassen oder es schrittweise in eine bestehende Anwendung integrieren.

Dennoch ist Svelte besonders geeignet, um die folgenden Situationen anzugehen:

- Webanwendungen für leistungsschwache Geräte: Anwendungen, die mit Svelte erstellt wurden, haben kleinere Bundle-Größen, was ideal für Geräte mit langsamer Netzwerkverbindung und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und im Speicher verfügbar halten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungsgewinne, die aus einem Framework ohne Laufzeit-Overhead resultieren, sicherstellen, dass Benutzerinteraktionen schnell und reaktionsfähig sind.
- Onboarding von Personen mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Besonderheiten von Svelte in kurzer Zeit leicht verstehen und mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) auf den Weg gebracht, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Web-Frameworks zu finden sind, wie z.B. dateibasierte Routenführung, serverseitiges Rendering (SSR), seitenspezifische Rendermodi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern, um optimalen JavaScript-Code ohne Laufzeit-Overhead zu generieren. Um dies zu erreichen, erweitert Svelte native Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup zulässt und Direktiven bereitstellt, um Bedingungen und Schleifen zu verwenden, ähnlich wie bei Handlebars.
- Es erweitert CSS durch das Hinzufügen eines Scope-Mechanismus, der es jedem Komponenten erlaubt, ihre eigenen Stile zu definieren, ohne dass die Gefahr besteht, dass sie mit den Stilen anderer Komponenten kollidieren.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und die Verwaltung des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich werden Sie hauptsächlich mit nativem JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie kein `<script src="svelte.js">`-Tag auf Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Long-Term-Support-Version (LTS) zu verwenden. Node enthält npm (den Node-Paket-Manager) und npx (den Node-Paket-Läufer). Beachten Sie, dass Sie stattdessen auch den Yarn-Paket-Manager verwenden können, aber in diesem Satz von Tutorials gehen wir davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und Yarn finden Sie in den [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um eine Parität mit dem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial genannten Terminalbefehle verwenden zu können. Git Bash (das Teil des [Git-für-Windows-Toolsets](https://gitforwindows.org/) ist) oder [Windows Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie im [Schnellkurs zur Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Auch die folgenden bieten weitere Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung von npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Ihre erste Svelte-App erstellen

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, einfach die Starter-Vorlagenanwendung herunterzuladen. Sie können dies auf [sveltejs/template](https://github.com/sveltejs/template) auf GitHub tun, oder Sie können vermeiden, es herunterzuladen und zu entpacken, indem Sie einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> Degit tut keine Art von Magie – es lässt Sie einfach die neueste Version der Inhalte eines Git-Repos herunterladen und entpacken. Dies geht viel schneller als mit `git clone`, da es nicht den gesamten Verlauf des Repos herunterlädt oder ein komplettes lokales Klon erstellt.

Nachdem Sie `npm run dev` ausgeführt haben, wird Svelte Ihre Anwendung kompilieren und bauen. Es startet einen lokalen Server unter `localhost:8080`. Svelte wird nach Dateiaktualisierungen suchen und die App automatisch neu kompilieren und aktualisieren, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser wird in etwa Folgendes anzeigen:

![Eine einfache Startseite, die Hallo Welt sagt und einen Link zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

### Anwendungsstruktur

Das Starter-Template kommt mit folgender Struktur:

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr darüber erfahren möchten, können Sie in der [`package.json`-Handhabung](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com nachlesen; wir sprechen auch in unserem Tutorial [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) darüber.
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sondern nur für Entwicklungszwecke genutzt.
- `.gitignore`: Gibt Git an, welche Dateien oder Ordner vom Projekt ausgeschlossen werden sollen – nützlich, wenn Sie Ihre App in einem Git-Repo aufnehmen möchten.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei teilt Rollup mit, wie Ihre App kompiliert und gebaut werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starter-Projekt stattdessen mit `npx degit sveltejs/template-webpack svelte-app` erstellen.
- `scripts`: Enthält Setup-Skripte nach Bedarf. Derzeit sollte nur `setupTypeScript.js` enthalten sein.
  - `setupTypeScript.js`: Dieses Skript richtet TypeScript-Unterstützung in Svelte ein. Darüber werden wir im letzten Artikel mehr sprechen.

- `src`: In diesem Verzeichnis befindet sich der Quellcode Ihrer Anwendung – dort erstellen Sie den Code für Ihre App.
  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher wird nur die Nachricht "Hello World!" angezeigt.
  - `main.js`: Der Einstiegspunkt für unsere Anwendung. Es instanziiert nur die `App`-Komponente und bindet sie an den Body unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden sollen.
  - `favicon.png`: Dies ist das Favicon für Ihre App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Zunächst ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält unscoped Stile. Es handelt sich um eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.
    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Einen Blick auf unsere erste Svelte-Komponente werfen

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien mit einem Übermenge von HTML geschrieben.

Alle drei Abschnitte – `<script>`, `<style>` und Markup – sind optional und können in beliebiger Reihenfolge erscheinen.

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
> Für weitere Informationen über das Komponentenformat werfen Sie einen Blick auf die [Svelte Components-Dokumentation](https://svelte.dev/docs/svelte-components).

Mit diesem Wissen im Hinterkopf, werfen wir einen Blick auf die Datei `src/App.svelte`, die mit dem Starter-Template geliefert wurde. Sie sollten etwa Folgendes sehen:

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

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Komponenteninstanz erstellt wird. Variablen, die auf oberster Ebene deklariert (oder importiert) werden, sind aus dem Markup der Komponente "sichtbar". Top-Level-Variablen sind die Art und Weise, wie Svelte den Komponentenstatus behandelt, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```svelte
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu kennzeichnen, was bedeutet, dass sie für Benutzer der Komponente (z.B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie vertraut bleibt.

### Der Markup-Abschnitt

Im Markup-Abschnitt können Sie beliebiges HTML einfügen, und zusätzlich können Sie gültige JavaScript-Ausdrücke in einfache geschweifte Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert des `name`-Props direkt nach dem Text "Hello" ein.

```svelte
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele erlauben es, einen Teil des Markups bedingt darzustellen, durch eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrung mit CSS haben, sollte das folgende Snippet sinnvoll sein:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element an. Was passiert mit anderen Komponenten, die `<h1>`-Elemente in sich haben?

In Svelte werden CSS-Stile innerhalb eines `<style>`-Blocks einer Komponenten nur auf diese Komponente beschränkt. Dies funktioniert, indem den ausgewählten Elementen eine Klasse hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies überprüfen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, rechts/<kbd>Strg</kbd>-klicken auf das _HELLO WORLD!_-Label und _Inspect_ wählen:

![Svelte-Starter-App mit geöffneten Devtools, die Klassen für beschränkte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition zu `h1.svelte-1tky8bj` und modifiziert jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, sodass es die erforderlichen Stile aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten umgehen und Stile auf einen Selektor global anwenden, indem Sie den `:global()`-Modifikator verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Jetzt, wo wir eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir ein paar Änderungen vornehmen.
An diesem Punkt können Sie versuchen, die `<h1>`-Element in Ihrem `App.svelte`-Komponente zu aktualisieren – zum Beispiel ändern Sie das `<h1>`-Element in `App.svelte`, sodass es wie folgt aussieht:

```svelte
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die unter `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität von Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework den DOM automatisch aktualisieren kann, wenn sich der Status einer Komponente ändert.

In Svelte wird die Reaktivität durch das Zuweisen eines neuen Werts zu einer beliebigen Top-Level-Variablen in einer Komponente ausgelöst. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unserer `App`-Komponente einfügen und einen Button, um sie auszuführen.

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

Wann immer der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variable aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Im Hintergrund hat Svelte den JavaScript-Code erstellt, der den DOM aktualisiert, wann immer sich der Wert der `name`-Variable ändert, ohne dass ein virtuelles DOM oder ein anderer komplexer Abgleichsmechanismus verwendet wird.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist Svelte's Syntax zum Abhören von DOM-Ereignissen.

## Inspektion der main.js: der Eintrittspunkt unserer App

Öffnen wir `src/main.js`, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht zunächst wie folgt aus:

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden werden. Dann wird es mit `new App` instanziiert, wobei ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in dem wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jedem Prop der `App`-Komponente zugewiesen werden.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien so reibungslos zusammenarbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Er kompiliert auch den Markup- und `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Er fügt auch den Code in `src/main.js` hinzu, um auf die Funktionen jeder Komponente zu verweisen.

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

Die minimierte Version von `bundle.js` wiegt etwas mehr als 3 KB, was den "Svelte-Runtime" (nur 300 Zeilen JavaScript-Code) und die kompilierte Komponente `App.svelte` umfasst. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, auf die von `index.html` verwiesen wird. Es werden keine anderen Bibliotheken in die Webseite geladen.

Dies ist eine viel kleinere Fußabdruck als kompilierte Bundles von anderen Frameworks. Bedenken Sie, dass es sich im Falle von Code-Bundles nicht nur um die Größe der herunterzuladenden Dateien handelt. Dies ist ausführbarer Code, der geparst, ausgeführt und im Speicher behalten werden muss. Also macht das einen großen Unterschied, besonders bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Fortsetzung dieses Tutorials

In dieser Tutorial-Serie werden Sie eine vollständige Webanwendung erstellen. Wir werden alle grundlegenden Dinge über Svelte lernen und auch einige fortgeschrittene Themen.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis für die Funktionen von Svelte zu bekommen, aber Sie werden das meiste aus diesem Tutorial herausholen, wenn Sie den Code der App mit uns gemeinsam Schritt für Schritt erstellen. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository mit einem Ordner bereit, der den Quellcode der App im Zustand zu Beginn jedes Tutorials enthält.

Svelte bietet auch einen Online-REPL, der ein Spielplatz zum Live-Coding von Svelte-Apps im Web ist, ohne dass Sie etwas auf Ihrem Rechner installieren müssen. Wir stellen für jeden Artikel einen REPL bereit, damit Sie sofort mit der Codierung beginnen können. Lassen Sie uns ein wenig mehr darüber sprechen, wie Sie diese Werkzeuge nutzen können.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Website, die Hosting für Ihre Repositories und mehrere Tools für die Arbeit mit ihnen bietet.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel einfach herunterladen können. Sie können auch den Code so erhalten, wie er nach Abschluss des Artikels sein sollte, falls Sie den Überblick verlieren.

Nach der [Installation von git](https://git-scm.com/downloads) sollten Sie zum Klonen des Repositories Folgendes ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn jedes Artikels einfach in den entsprechenden Ordner wechseln und die App im Entwicklungsmodus starten, um zu sehen, in welchem Zustand sie sich befinden sollte, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über git und GitHub erfahren möchten, haben wir eine Liste mit nützlichen Anleitungen zusammengestellt – siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie nur die Dateien ohne das Klonen des git-Repos herunterladen möchten, können Sie das DeGit-Tool wie folgt verwenden – `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen spezifischen Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit erstellt kein lokales Git-Repo, es lädt einfach die Dateien des angegebenen Ordners herunter.

### Verwendung des Svelte REPL

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, in der Sie Befehle eingeben und sofort die Ergebnisse sehen können – viele Programmiersprachen bieten einen REPL an.

Der Svelte-REPL ist viel mehr als das. Es ist ein Online-Tool, das es ermöglicht, vollständige Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist die einfachste Möglichkeit, gleich von jedem Rechner aus mit Svelte zu spielen, ohne etwas installieren zu müssen. Es wird auch von der Svelte-Gemeinschaft weit verbreitet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer äußerst nützlich, ein REPL-Instance zu erstellen, um das Problem zu demonstrieren.

Werfen wir einen kurzen Blick auf den Svelte-REPL und wie Sie ihn verwenden würden. Es sieht folgendermaßen aus:

![Der Svelte REPL in Aktion, zeigt Komponenten-Code auf der linken Seite und die Ausgabe auf der rechten Seite](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten, und auf der rechten Seite sehen Sie die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht es Ihnen, `.svelte`- und `.js`-Dateien zu erstellen und sie neu anzuordnen. Um eine Datei innerhalb eines Ordners zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie z.B.: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber befindet sich der Titel des REPL. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Registerkarten:
  - Die _Result_-Registerkarte zeigt Ihre App-Ausgabe und stellt eine Konsole am unteren Rand bereit.
  - Die _JS output_-Registerkarte ermöglicht es Ihnen, den von Svelte generierten JavaScript-Code zu inspizieren und Compileroptionen festzulegen.
  - Die _CSS output_-Registerkarte zeigt das von Svelte generierte CSS.

- Über den Registerkarten finden Sie eine Symbolleiste, mit der Sie in den Vollbildmodus wechseln und Ihre App herunterladen können. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie auch die App forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Your saved apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Registerkarte Ergebnis aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel hier ist der Link für einen REPL, der unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Version von Svelte in der URL angeben können. Dies ist nützlich, wenn Sie Probleme im Zusammenhang mit einer bestimmten Version von Svelte melden.

Wir werden einen REPL am Anfang und Ende jedes Artikels bereitstellen, damit Sie sofort mit uns kodieren können.

> [!NOTE]
> Derzeit kann der REPL keine Ordnernamen richtig behandeln. Wenn Sie dem Tutorial im REPL folgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Wenn Sie dann einen Pfad im Code sehen, z.B. `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z.B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um dann den aktuellen App-Zustand zu erreichen, führen Sie Folgendes aus

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder direkt den Inhalt des Ordners herunterladen:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns unter Verwendung des REPL zu kodieren, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf Svelte, einschließlich der Installation vor Ort, der Erstellung einer Starter-App und der Grundlagen. Im nächsten Artikel beginnen wir damit, unsere erste richtige Anwendung zu erstellen, eine To-Do-Liste. Bevor wir das tun, fassen wir jedoch einige der Dinge zusammen, die wir gelernt haben.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenten-Props werden mit dem `export`-Schlüsselwort deklariert.
- Svelte-Komponenten können einfach durch das Importieren der entsprechenden `.svelte`-Datei verwendet werden.
- Komponentenstile sind beschränkt, sodass sie sich nicht gegenseitig stören.
- Im Markup-Abschnitt können Sie jeden JavaScript-Ausdruck einschließen, indem Sie ihn zwischen geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Die Reaktivität wird einfach durch das Zuweisen eines neuen Werts zu einer Top-Level-Variablen ausgelöst.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
