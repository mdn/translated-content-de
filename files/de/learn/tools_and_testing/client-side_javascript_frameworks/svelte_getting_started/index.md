---
title: Erste Schritte mit Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen bisher betrachteten Frameworks und Tools unterscheidet. Dann lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und es lokal ausführen sowie für die Produktion bauen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie zumindest mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>-,
          <a href="/de/docs/Learn/CSS">CSS</a>- und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > besitzen.
        </p>
        <p>
          Svelte ist ein Compiler, der minimalen und hoch optimierten JavaScript-Code aus unseren Quellen generiert; Sie benötigen ein Terminal mit installiertem Node +
          npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Einrichtung einer lokalen Svelte-Entwicklungsumgebung, die Erstellung und der Bau einer Starter-App sowie das Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zum Erstellen reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz zum Erstellen von Web-Apps als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers verrichten, während die App läuft, verlegt Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Bauen der App erfolgt und hoch optimierten Vanilla-JavaScript-Code erzeugt.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungsbündel und bessere Leistung, sondern auch eine Entwicklererfahrung, die für Menschen mit begrenzter Erfahrung im modernen Tooling-Ökosystem zugänglicher ist.

Svelte bleibt dem klassischen Webentwicklungsmodell von HTML, CSS und JS treu und fügt lediglich ein paar Erweiterungen zu HTML und JavaScript hinzu. Es hat wohl weniger Konzepte und Tools zu lernen als einige der anderen Framework-Optionen.

Die Hauptnachteile sind, dass es sich um ein junges Framework handelt — sein Ökosystem ist also in Bezug auf Tools, Support, Plugins, klare Nutzungsmuster usw. eingeschränkter als bei reiferen Frameworks, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle Unterstützung für TypeScript](https://svelte.dev/docs/typescript). Wir werden uns dies später in dieser Tutorialserie ansehen.

Wir empfehlen Ihnen, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorialserie zurückkehren, um etwas tiefergehenderes zu lernen.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu starten und Svelte Ihre Benutzeroberfläche steuern lassen oder es schrittweise in eine bestehende Anwendung integrieren.

Dennoch ist Svelte besonders geeignet, um die folgenden Situationen anzugehen:

- Webanwendungen, die für Geräte mit geringer Leistung gedacht sind: Anwendungen, die mit Svelte erstellt wurden, haben kleinere Bündelgrößen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Verarbeitungsleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Analysieren, Ausführen und im Speicher behalten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, sorgen die Leistungsgewinne eines Frameworks ohne Laufzeit-Overhead dafür, dass Benutzerinteraktionen reaktionsschnell und schnell erfolgen.
- Onboarding von Leuten mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine geringe Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Svelte-Spezifika leicht in kurzer Zeit erfassen und mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Web-Frameworks zu finden sind, wie dateibasiertes Routing, serverseitiges Rendern (SSR), seitenbezogene Rendermodi, Offline-Unterstützung und mehr. Für weitere Informationen über SvelteKit siehe das [offizielle Tutorial](https://learn.svelte.dev/) und die [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte-native.technology/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und dabei ohne Laufzeit-Overhead optimalen JavaScript-Code generieren. Um dies zu erreichen, erweitert Svelte Vanilla-Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup zulässt und Direktiven zum Verwalten von Bedingungen und Schleifen bereitstellt, ähnlich wie Handlebars.
- Es erweitert CSS um einen Scoping-Mechanismus, der es jedem Komponent ermöglicht, seine eigenen Stile zu definieren, ohne dass die Gefahr besteht, mit den Stilen anderer Komponenten in Konflikt zu geraten.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und das Komponentenstatus-Management zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Die Erweiterungen in der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich arbeiten Sie größtenteils mit Vanilla-JavaScript.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie es nicht einfach mit einem `<script src="svelte.js">` Tag zu Ihrer Seite hinzufügen und in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte arbeiten zu können, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Langzeit-Support-(LTS)-Version zu verwenden. Node enthält npm (den Node-Paketmanager) und npx (den Node-Paketausführungs-Runner). Beachten Sie, dass Sie auch den Yarn-Paketmanager anstelle von npm verwenden können, aber wir gehen hier von npm aus. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Ihnen die Parität zu einem Unix/macOS-Terminal zu geben, damit Sie die in diesem Tutorial erwähnten Terminalkommandos verwenden können. Gitbash (das Teil der [Git-for-Windows-Toolset](https://gitforwindows.org/) ist) oder [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Siehe [Kommandozeilen-Crashkurs](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) für weitere Informationen darüber und über Terminalbefehle allgemein.

Siehe auch die folgenden Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung von npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) auf dem npm-Blog

### Erstellung Ihrer ersten Svelte-App

Der einfachste Weg, um ein Starter-App-Template zu erstellen, besteht darin, einfach die Starter-Template-Anwendung herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie verwenden [degit](https://github.com/Rich-Harris/degit), um das Herunterladen und Entpacken zu vermeiden.

Um Ihr Starter-App-Template zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> degit macht keine Magie – es lässt Sie nur die neueste Version der Inhalte eines Git-Repos herunterladen und entpacken. Dies ist viel schneller als `git clone` zu verwenden, da es nicht die gesamte Geschichte des Repos herunterlädt oder einen vollständigen lokalen Klon erstellt.

Nachdem Sie `npm run dev` ausgeführt haben, kompiliert und baut Svelte Ihre Anwendung. Es wird einen lokalen Server unter `localhost:8080` starten. Svelte wird auf Dateiaktualisierungen warten und die App automatisch neu kompilieren und aktualisieren, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser zeigt etwas wie das folgende an:

![Eine einfache Startseite, die hello world sagt und einen Link zu den offiziellen svelte Tutorials gibt](01-svelte-starter-app.png)

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Datei überhaupt nicht verstehen, um dieses Tutorial zu absolvieren, wenn Sie jedoch mehr darüber erfahren möchten, können Sie über die Handhabung von [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com lesen; wir sprechen auch in unserem [Grundlagen des Paketmanagements Tutorial](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) darüber.
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Teilt Git mit, welche Dateien oder Ordner vom Projekt ignoriert werden sollen – nützlich, wenn Sie sich entscheiden, Ihre App in einem Git-Repo zu enthalten.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modulpaketierer. Diese Konfigurationsdatei sagt Rollup, wie Ihre App zu kompilieren und zu bauen ist. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` statt dessen erstellen.
- `scripts`: Enthält Setups-Skripte nach Bedarf. Derzeit sollte nur `setupTypeScript.js` enthalten sein.

  - `setupTypeScript.js`: Dieses Skript richtet die TypeScript-Unterstützung in Svelte ein. Wir werden später im letzten Artikel näher darauf eingehen.

- `src`: Dieses Verzeichnis enthält den Quellcode Ihrer Anwendung — hier erstellen Sie den Code für Ihre App.

  - `App.svelte`: Dies ist die Top-Level-Komponente Ihrer App. Bislang rendert sie nur die Nachricht "Hello World!".
  - `main.js`: Der Einstiegspunkt unserer Anwendung. Es instanziert einfach die `App` Komponente und bindet sie an den Körper unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon für Ihre App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Zunächst ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und js-Bündel lädt.
  - `global.css`: Diese Datei enthält nicht-gescopte Stile. Es handelt sich um eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält die generierten CSS- und JavaScript-Quelldateien.

    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus allem Ihrem JavaScript-Quellcode kompiliert wurde.

## Ein erster Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien geschrieben, die eine Supersprache von HTML verwenden.

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
> Für weitere Informationen über das Komponentenformat schauen Sie sich die [Svelte-Komponentendokumentation](https://svelte.dev/docs/svelte-components) an.

Schauen wir uns das `src/App.svelte`-Datei an, die mit dem Starter-Template geliefert wurde. Sie sollten etwas Ähnliches wie das Folgende sehen:

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

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Komponentinstanz erstellt wird. Variablen, die auf oberster Ebene deklariert (oder importiert) werden, sind vom Markup der Komponente aus "sichtbar". Top-Level-Variablen sind die Art und Weise, wie Svelte den Komponentenstatus handhabt, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```html
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu kennzeichnen, was bedeutet, dass sie für Verbraucher der Komponente (z.B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie vertraut bleibt.

### Der Markup-Abschnitt

Im Markup-Abschnitt können Sie beliebiges HTML einfügen und zusätzlich gültige JavaScript-Ausdrücke in einfachen geschweiften Klammern (`{}`) einfügen. In diesem Fall binden wir den Wert des `name` Props direkt nach dem Text `Hello` ein.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` – diese Beispiele ermöglichen, einen Teil des Markups bedingt zu rendern, eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrungen mit CSS haben, sollte das folgende Snippet verständlich sein:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element an. Was passiert mit anderen Komponenten, die `<h1>`-Elemente enthalten?

In Svelte wird CSS innerhalb eines `<style>`-Blocks einer Komponente nur für diese Komponente scopen. Dies funktioniert, indem eine Klasse zu den ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browsertab öffnen, mit Rechts/<kbd>Strg</kbd>-Klick auf das _HELLO WORLD!_-Label klicken und _Untersuchen_ wählen:

![Svelte-Starter-App mit offenen Entwicklertools, die die Klassen für gescopte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition zu `h1.svelte-1tky8bj` und modifiziert jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, damit es die erforderlichen Stile aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten außer Kraft setzen und Stile auf einen Selektor global anwenden, indem Sie den `:global()`-Modifier verwenden (siehe die [Svelte-`<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Da wir nun eine allgemeine Vorstellung davon haben, wie das alles zusammenpasst, können wir beginnen, ein paar Änderungen vorzunehmen.
An dieser Stelle können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren – ändern Sie beispielsweise das `<h1>`-Element in `App.svelte`, damit es wie folgt lautet:

```html
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen, und die App, die unter `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf Svelte-Reaktivität

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework den DOM automatisch aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird Reaktivität ausgelöst, indem einer Top-Level-Variablen in einer Komponente ein neuer Wert zugewiesen wird. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unsere `App`-Komponente einfügen und einen Button, um sie auszuführen.

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

Wann immer der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variablen aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Hinter den Kulissen erstellt Svelte den JavaScript-Code, um den DOM zu aktualisieren, wann immer sich der Wert der Namensvariable ändert, ohne einen virtuellen DOM oder andere komplexe Abgleichsmechanismen zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist die Svelte-Syntax zum Lauschen auf DOM-Ereignisse.

## Inspektion von main.js: Der Einstiegspunkt unserer App

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden möchten. Anschließend wird sie mit `new App` instanziiert, indem ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in dem wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jedem Prop der `App`-Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, alle diese Dateien harmonisch zusammenarbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert sie in die `public/build/bundle.css`-Datei.

Er kompiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Er fügt auch den Code in `src/main.js` hinzu, um die Merkmale jeder Komponente zu referenzieren.

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

Die minimierte Version von `bundle.js` wiegt etwas mehr als 3KB, einschließlich des "Svelte Runtime" (nur 300 Zeilen JavaScript-Code) und der kompilierten Komponente `App.svelte`. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es werden keine anderen Bibliotheken in die Webseite geladen.

Dies ist ein viel kleinerer Fußabdruck als die kompilierten Bündel anderer Frameworks. Bedenken Sie, dass es sich bei Codebündeln nicht nur um die Größe der Dateien handelt, die sie herunterladen müssen. Dies ist ausführbarer Code, der analysiert, ausgeführt und im Speicher behalten werden muss. Dies macht also wirklich einen Unterschied, insbesondere auf leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Folgen Sie diesem Tutorial

In dieser Tutorialserie werden Sie eine vollständige Webanwendung erstellen. Wir werden alle Grundlagen über Svelte und auch einige fortgeschrittene Themen lernen.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis der Svelte-Funktionen zu bekommen, aber Sie werden das Beste aus diesem Tutorial herausholen, wenn Sie beim Erstellen der App mit uns mitprogrammieren. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository mit einem Ordner zur Verfügung, der den Quellcode der App zu Beginn jedes Tutorials enthält.

Svelte bietet auch einen Online-REPL, das ist ein Spielplatz für Live-Coding von Svelte-Apps im Web, ohne dass Sie etwas auf Ihrem Rechner installieren müssen. Wir stellen einen REPL für jeden Artikel bereit, sodass Sie sofort mit dem Programmieren beginnen können. Lassen Sie uns ein bisschen mehr darüber sprechen, wie Sie diese Tools verwenden.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Website, die Hosting für Ihre Repositories und mehrere Tools zur Arbeit mit ihnen bereitstellt.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel leicht herunterladen können. Sie werden auch den Code erhalten können, wie er nach Abschluss des Artikels sein sollte, falls Sie verloren gehen.

Nachdem Sie [Git installiert](https://git-scm.com/downloads) haben, um das Repository zu klonen, sollten Sie ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn jedes Artikels einfach `cd` in den entsprechenden Ordner und die App im Dev-Modus starten, um zu sehen, was der aktuelle Zustand sein sollte, folgendermaßen:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste von Links zu nützlichen Leitfäden zusammengestellt – siehe [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub).

> [!NOTE]
> Wenn Sie die Dateien ohne Klonen des Git-Repos nur herunterladen möchten, können Sie das Degit-Tool verwenden, indem Sie dies tun — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen spezifischen Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit erstellt kein lokales Git-Repo, sondern lädt nur die Dateien des angegebenen Ordners herunter.

### Verwendung des Svelte REPL

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen — viele Programmiersprachen bieten einen REPL.

Svelte's REPL ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, vollständige Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um sofort von jeder Maschine aus mit Svelte zu spielen, ohne zuerst irgendetwas installieren zu müssen. Es wird auch weit in der Svelte-Community verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer extrem hilfreich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Lassen Sie uns einen kurzen Blick auf den Svelte REPL werfen und wie Sie ihn verwenden würden. Er sieht so aus:

![die svelte REPL in Aktion, die Komponenten-Code auf der linken Seite und die Ausgabe auf der rechten Seite zeigt](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und gehen Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten und auf der rechten Seite die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code lässt Sie `.svelte`- und `.js`-Dateien erstellen und umbenennen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfad wie folgt an: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Oben auf dieser Leiste haben Sie den Titel des REPL. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Registerkarten:

  - Die _Ergebnis_-Registerkarte zeigt die Ausgabe Ihrer App und bietet eine Konsole am unteren Rand.
  - Die _JS-Ausgabe_-Registerkarte ermöglicht Ihnen, den von Svelte generierten JavaScript-Code zu inspizieren und Compiler-Optionen festzulegen.
  - Die _CSS-Ausgabe_-Registerkarte zeigt das von Svelte generierte CSS an.

- Über den Registerkarten finden Sie eine Symbolleiste, die es Ihnen erlaubt, den Vollbildmodus zu betreten und Ihre App herunterzuladen. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie die App auch forken und speichern. Sie können auch alle Ihre gespeicherten REPLs anzeigen lassen, indem Sie auf Ihr GitHub-Benutzerkonto klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Ergebnisseite aktualisieren. Um Ihre App zu teilen, teilen Sie einfach die URL. Zum Beispiel ist hier der Link zu einem REPL, der unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, dass Sie in der URL die Svelte-Version angeben können. Das ist praktisch, wenn Sie Probleme im Zusammenhang mit einer bestimmten Svelte-Version melden.

Wir werden zu Beginn und am Ende jedes Artikels ein REPL bereitstellen, damit Sie sofort mit uns mitcodieren können.

> [!NOTE]
> Zurzeit kann der REPL keine Ordnernamen korrekt behandeln. Wenn Sie das Tutorial im REPL verfolgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Wenn Sie dann einen Pfad im Code sehen, zum Beispiel `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z. B. `import Todos from './Todos.svelte'`.

## Der Code bis jetzt

### Git

Klonen Sie das GitHub-Repo (falls noch nicht geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um dann den aktuellen App-Status zu erhalten, führen Sie aus:

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL mit zu codieren, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit sind wir am Ende unseres ersten Blicks auf Svelte angelangt, einschließlich der lokalen Installation, der Erstellung einer Starter-App und der Funktionsweise der Grundlagen. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen, eine To-Do-Liste. Bevor wir das tun, lassen Sie uns jedoch einige der Dinge zusammenfassen, die wir gelernt haben.

In Svelte:

- Definieren wir das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenten-Props werden mit dem `export`-Schlüsselwort deklariert.
- Svelte-Komponenten können einfach durch Importieren der entsprechenden `.svelte`-Datei verwendet werden.
- Komponentenstile sind gescopet, wodurch verhindert wird, dass sie miteinander kollidieren.
- Im Markup-Bereich können Sie jeden JavaScript-Ausdruck einfügen, indem Sie ihn zwischen geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente stellen ihren Zustand dar.
- Reaktivität wird einfach durch Zuweisen eines neuen Wertes zu einer Top-Level-Variablen ausgelöst.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
