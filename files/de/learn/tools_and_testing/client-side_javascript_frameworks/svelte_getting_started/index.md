---
title: Einführung in Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In diesem Artikel bieten wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen bisher besprochenen Frameworks und Tools unterscheidet. Anschließend lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und sehen, wie man es lokal ausführt und für die Produktion baut.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen vertraut sind und Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
          >haben.
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
        Eine lokale Svelte-Entwicklungsumgebung einzurichten, eine Starter-App zu erstellen und zu bauen und die Grundlagen ihrer Funktionsweise zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz für den Bau von reichhaltigen Benutzeroberflächen

Svelte bietet einen anderen Ansatz zum Erstellen von Web-Apps als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue die meiste Arbeit im Browser des Benutzers erledigen, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Erstellen der App stattfindet und hochoptimiertes Vanilla-JavaScript produziert.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungs-Bundles und eine bessere Leistung, sondern auch eine Entwicklererfahrung, die für Personen mit begrenzter Erfahrung im modernen Tooling-Ökosystem zugänglicher ist.

Svelte hält sich eng an das klassische Webentwicklungsmodell von HTML, CSS und JS, fügt jedoch einige Erweiterungen zu HTML und JavaScript hinzu. Es hat weniger Konzepte und Tools zu erlernen als einige der anderen Framework-Optionen.

Seine aktuellen Hauptnachteile sind, dass es ein junges Framework ist – sein Ökosystem ist daher in Bezug auf Tools, Unterstützung, Plugins, klare Nutzungsmuster usw. begrenzter als die reiferer Frameworks, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es weiter zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden dies später in dieser Tutorialserie untersuchen.

Wir ermutigen Sie, das [Svelte-Tutorial](https://learn.svelte.dev/) für eine wirklich schnelle Einführung in die grundlegenden Konzepte durchzugehen, bevor Sie zu dieser Tutorialserie zurückkehren, um zu lernen, wie man etwas etwas tiefgründigeres aufbaut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu beginnen und Svelte Ihr UI steuern lassen oder es schrittweise in eine bestehende Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet für die folgenden Situationen:

- Webanwendungen, die für leistungsschwache Geräte bestimmt sind: Mit Svelte erstellte Anwendungen haben kleinere Bundles, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und in Erinnerung behalten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, sorgen die Leistungsvorteile, die ein Framework ohne Laufzeit-Overhead bietet, dafür, dass Benutzerinteraktionen schnell und reaktionsfähig sind.
- Einschulen von Personen mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können sich die spezifischen Svelte-Konzepte leicht aneignen und schnell mit dem Aufbau von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) gestartet, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Webframeworks zu finden sind, wie z.B. Dateisystembasiertes Routing, serverseitiges Rendern (SSR), seitenbezogene Rendering-Modi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte-native.technology/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Laufzeit-Overhead generieren. Um dies zu erreichen, erweitert Svelte die Vanilla-Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup zulässt und Direktiven bereitstellt, um Bedingungen und Schleifen zu verwenden, ähnlich wie Handlebars.
- Es erweitert CSS durch Hinzufügen eines Scoping-Mechanismus, der es jedem Component ermöglicht, eigene Stile zu definieren, ohne das Risiko, mit den Stilen anderer Komponenten in Konflikt zu geraten.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache umdeutet, um echte Reaktivität zu erreichen und das Komponenten-Zustandsmanagement zu erleichtern.

Der Compiler greift nur in ganz spezifischen Situationen ein und nur im Kontext von Svelte-Komponenten. Die Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich arbeiten Sie meistens mit Vanilla-JavaScript.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">` Tag auf Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Langzeit-Support-Version (LTS) zu verwenden. Node beinhaltet npm (den Node-Paketmanager) und npx (den Node-Paket-Runner). Beachten Sie, dass Sie alternativ auch den Yarn-Paketmanager anstelle von npm verwenden können, wir gehen jedoch in diesen Tutorials davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und yarn finden Sie unter [Grundlagen der Paketverwaltung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um eine Parität mit dem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. Gitbash (das als Teil des [Git for Windows-Toolsets](https://gitforwindows.org/) kommt) oder [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Weitere Informationen hierzu und zu Terminalbefehlen im Allgemeinen finden Sie im [Crashkurs zur Befehlszeile](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).

Weitere Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung in npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, ist einfach, die Starter-App-Vorlage herunterzuladen. Sie können das tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können das Herunterladen und Entzippen vermeiden, indem Sie einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> Degit macht keine Zauberei – es ermöglicht Ihnen lediglich, die neueste Version von Inhalten eines Git-Repositorys herunterzuladen und zu entzippen. Dies ist viel schneller als `git clone`, da es nicht den gesamten Verlauf des Repos herunterlädt oder einen vollständigen lokalen Klon erstellt.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und bauen. Es wird einen lokalen Server unter `localhost:8080` starten. Svelte wird auf Dateiuptades achten und bei Änderungen an den Quelldateien die App automatisch neu kompilieren und aktualisieren. Ihr Browser wird etwas ähnliches anzeigen wie:

![Eine einfache Startseite, die "hello world" sagt und einen Link zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

### Applikationsstruktur

Die Startervorlage hat die folgende Struktur:

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Dateien nicht verstehen, um dieses Tutorial abzuschließen; wenn Sie jedoch mehr erfahren möchten, können Sie über das Handling von [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com lesen; wir sprechen auch darüber in unserem [Tutorial für Grundlagen der Paketverwaltung](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Sagt Git, welche Dateien oder Ordner es vom Projekt ausschließen soll – nützlich, wenn Sie sich entscheiden, Ihre App in ein Git-Repo aufzunehmen.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei sagt Rollup, wie Ihre App zu kompilieren und zu bauen ist. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` erstellen.
- `scripts`: Enthält benötigte Einrichtungsskripte. Sollte derzeit nur `setupTypeScript.js` enthalten.

  - `setupTypeScript.js`: Dieses Skript richtet TypeScript-Unterstützung in Svelte ein. Wir werden später im letzten Artikel mehr darüber sprechen.

- `src`: Dieses Verzeichnis enthält den Quellcode Ihrer Anwendung – hier werden Sie den Code für Ihre App erstellen.

  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher rendert sie nur die Nachricht 'Hello World!'.
  - `main.js`: Der Einstiegspunkt zu unserer Anwendung. Er instanziiert nur die `App`-Komponente und bindet sie an den Körper unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in die Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon Ihrer App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfangs ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält ungescope Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.

    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die aus dem gesamten JavaScript-Quellcode kompilierte JavaScript-Datei.

## Ein Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien mit einer Obermenge von HTML geschrieben.

Alle drei Bereiche – `<script>`, `<style>` und Markup – sind optional und können in beliebiger Reihenfolge erscheinen.

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
> Weitere Informationen zum Komponentformat finden Sie in der [Svelte-Komponenten-Dokumentation](https://svelte.dev/docs/svelte-components).

Mit diesem Wissen werfen wir einen Blick auf die Datei `src/App.svelte`, die mit der Startvorlage geliefert wurde. Sie sollten etwas sehen, das so aussieht:

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

### Der `<script>` Abschnitt

Der `<script>` Block enthält JavaScript, das ausgeführt wird, wenn eine Komponenteninstanz erstellt wird. Variablen, die auf der obersten Ebene deklariert (oder importiert) werden, sind im Markup der Komponente 'sichtbar'. Top-Level-Variablen sind die Methode von Svelte, um den Komponentenstatus zu verwalten, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```html
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder prop) zu markieren, was bedeutet, dass sie für Verbraucher der Komponente (z.B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie vertraut bleibt.

### Der Markup-Bereich

Im Markup-Bereich können Sie beliebiges HTML einfügen und zusätzlich gültige JavaScript-Ausdrücke in geschweifte Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert der `name`-Prop direkt nach dem Text "Hello" ein.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` – diese Beispiele erlauben es Ihnen, einen Teil des Markups bedingt zu rendern, durch eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

### Der `<style>` Abschnitt

Wenn Sie Erfahrung mit CSS haben, sollte der folgende Ausschnitt Sinn machen:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) Element an. Was wird mit anderen Komponenten geschehen, die `<h1>`-Elemente enthalten?

In Svelte wird CSS innerhalb eines `<style>` Blocks einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit der rechten/<kbd>Strg</kbd>-Taste auf das _HELLO WORLD!_ Label klicken und _Inspektieren_ wählen:

![Svelte Starter-App mit geöffneten Entwicklertools, die Klassen für gescope Stile anzeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition zu `h1.svelte-1tky8bj` und modifiziert dann jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, damit es die Stile nach Bedarf erfasst.

> [!NOTE]
> Sie können dieses Verhalten außer Kraft setzen und Stile global auf einen Selektor anwenden, indem Sie den Modifier `:global()` verwenden (siehe die [Svelte `<style>` Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Machen wir einige Änderungen

Da wir jetzt eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir anfangen, einige Änderungen vorzunehmen. An dieser Stelle können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren – ändern Sie zum Beispiel das `<h1>`-Element in `App.svelte`, sodass es wie folgt aussieht:

```html
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App unter `localhost:8080` wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität von Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework den DOM automatisch aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird Reaktivität durch das Zuweisen eines neuen Werts zu einer Top-Level-Variablen in einer Komponente ausgelöst. Zum Beispiel könnten wir eine `toggleName()` Funktion in unserer `App`-Komponente aufnehmen und einen Button hinzufügen, um sie auszuführen.

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

Immer wenn der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variablen aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Im Hintergrund erstellt Svelte den JavaScript-Code, um den DOM zu aktualisieren, wann immer sich der Wert der `name`-Variable ändert, ohne dabei einen virtuellen DOM oder andere komplexe Reconciliation-Mechanismen zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist Svelte's Syntax, um auf DOM-Events zu lauschen.

## Untersuchen von main.js: der Einstiegspunkt unserer App

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden werden. Dann wird es mit `new App` instanziiert, wobei ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in das wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: die Werte, die jeder Prop der `App`-Komponente zugewiesen werden.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien nahtlos zusammenarbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Bereich jeder Komponente und kompiliert ihn in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Bereich jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Er fügt auch den Code in `src/main.js` hinzu, um die Funktionen jeder Komponente zu referenzieren.

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

Die minifizierte Version von `bundle.js` wiegt etwas mehr als 3KB, einschließlich des "Svelte-Runtime" (nur 300 Zeilen JavaScript-Code) und der kompilierten Komponente `App.svelte`. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es werden keine anderen Bibliotheken in die Webseite geladen.

Dies ist ein viel kleinerer Fußabdruck als kompilierte Bundles anderer Frameworks. Berücksichtigen Sie, dass bei Code-Bundles nicht nur die Größe der herunterzuladenden Dateien zählt. Dies ist ausführbarer Code, der analysiert, ausgeführt und im Speicher gehalten werden muss. Dies macht also wirklich einen Unterschied, insbesondere bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Dieses Tutorial weiterverfolgen

In dieser Tutorialserie werden Sie eine vollständige Webanwendung erstellen. Wir lernen alle Grundlagen von Svelte und auch einige fortgeschrittene Themen.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis für die Funktionen von Svelte zu bekommen, aber Sie werden aus diesem Tutorial am meisten herausholen, wenn Sie die App während des gesamten Prozesses mit uns erstellen. Um es Ihnen einfacher zu machen, jedem Artikel zu folgen, bieten wir ein GitHub-Repository mit einem Ordner, der den Quellcode der App enthält, wie er zu Beginn jedes Tutorials aussieht.

Svelte bietet auch einen Online-REPL, einen Spielplatz zum live-coden von Svelte-Apps im Web, ohne etwas auf Ihrem Rechner installieren zu müssen. Wir bieten einen REPL für jeden Artikel, damit Sie sofort mit dem Codieren beginnen können. Lassen Sie uns jetzt ein wenig mehr darüber sprechen, wie Sie diese Tools verwenden können.

### Git verwenden

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Seite, die Hosting für Ihre Repositories und verschiedene Werkzeuge für die Arbeit mit ihnen bereitstellt.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel einfach herunterladen können. Sie können auch den Code so erhalten, wie er nach Abschluss des Artikels aussehen sollte, falls Sie sich verlaufen sollten.

Nach der [Installation von Git](https://git-scm.com/downloads) sollten Sie, um das Repository zu klonen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn jedes Artikels einfach in den entsprechenden Ordner wechseln und die App im Entwicklermodus starten, um zu sehen, wie ihr aktueller Zustand aussehen sollte, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste mit nützlichen Leitfäden zusammengestellt – siehe [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub).

> [!NOTE]
> Wenn Sie die Dateien ohne Klonen des Git-Repos herunterladen möchten, können Sie das Degit-Tool wie folgt verwenden: `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit erstellt kein lokales Git-Repo, sondern lädt nur die Dateien des angegebenen Ordners herunter.

### Svelte REPL verwenden

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen – viele Programmiersprachen bieten einen REPL an.

Der Svelte REPL ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, komplette Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, von jedem Rechner aus mit Svelte zu spielen, ohne etwas installieren zu müssen. Es wird auch in der Svelte-Community häufig genutzt. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer äußerst nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Werfen wir einen kurzen Blick auf den Svelte REPL und wie Sie ihn verwenden würden. Er sieht so aus:

![der Svelte REPL in Aktion, der links den Komponenten-Code und rechts die Ausgabe zeigt](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und navigieren zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten, und auf der rechten Seite sehen Sie die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht es Ihnen, `.svelte` und `.js` Dateien zu erstellen und sie neu anzuordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie zum Beispiel: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber finden Sie den Titel des REPL. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite sehen Sie drei Registerkarten:

  - Die _Ergebnis_-Registerkarte zeigt die Ausgabe Ihrer App an und bietet eine Konsole am unteren Rand.
  - Die _JS-Ausgabe_-Registerkarte lässt Sie den von Svelte generierten JavaScript-Code inspizieren und Compiler-Optionen einstellen.
  - Die _CSS-Ausgabe_-Registerkarte zeigt den von Svelte generierten CSS-Code an.

- Über den Registerkarten finden Sie eine Toolbar, die Ihnen den Vollbildmodus ermöglicht und Ihre App herunterladen lässt. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie die App auch forken und speichern. Sie können auch alle Ihre gespeicherten REPLs anzeigen, indem Sie auf Ihren GitHub-Benutzerprofilnamen klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Ergebnistabelle aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Hier ist zum Beispiel der Link für eine REPL, die unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Version von Svelte in der URL angeben können. Dies ist nützlich, wenn Sie Probleme melden, die sich auf eine bestimmte Version von Svelte beziehen.

Wir werden zu Beginn und am Ende jedes Artikels einen REPL bereitstellen, damit Sie sofort mit uns mitkodieren können.

> [!NOTE]
> Zurzeit kann der REPL keine Ordnernamen richtig handhaben. Wenn Sie das Tutorial auf dem REPL verfolgen, erstellen Sie einfach alle Ihre Komponenten im Stammverzeichnis. Wenn Sie dann einen Pfad im Code sehen, beispielsweise `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z.B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann um den aktuellen App-Zustand zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklermodus zu starten.

### REPL

Um mit uns im REPL mit zu coden, beginnen Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf Svelte, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel beginnen wir mit dem Aufbau unserer ersten richtigen Anwendung, einer To-Do-Liste. Bevor wir das tun, fassen wir einige der Dinge zusammen, die wir gelernt haben.

In Svelte:

- Wir definieren das Skript, die Stile und das Markup jeder Komponente in einer einzigen `.svelte` Datei.
- Componenten-Props werden mit dem `export` Schlüsselwort deklariert.
- Svelte-Komponenten können einfach durch Importieren der entsprechenden `.svelte` Datei verwendet werden.
- Komponentenstile sind gescope, sodass sie nicht miteinander kollidieren.
- Im Markup-Bereich können Sie JavaScript-Ausdrücke einfügen, indem Sie sie in geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Reaktivität wird einfach ausgelöst, indem einer Top-Level-Variablen ein neuer Wert zugewiesen wird.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
