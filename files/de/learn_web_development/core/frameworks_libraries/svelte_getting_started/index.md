---
title: Erste Schritte mit Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von anderen bisher betrachteten Frameworks und Tools unterscheidet. Anschließend lernen wir, wie Sie Ihre Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen und es lokal ausführen und für die Produktion bauen.

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
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Svelte ist ein Compiler, der aus unseren Quellen minimales und hochoptimiertes
          JavaScript generiert; hierfür benötigen Sie ein Terminal mit installiertem Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Svelte-Entwicklungsumgebung einzurichten, eine Starter-App zu erstellen und zu bauen und die Grundlagen des Ablaufs zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zum Erstellen reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz zum Erstellen von Web-Apps als einige der anderen Frameworks, die in diesem Modul behandelt werden. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers während des Betriebs der App ausführen, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Erstellen Ihrer App stattfindet und hochoptimiertes Vanilla-JavaScript produziert.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungs-Bundles und bessere Leistung, sondern auch ein Entwicklererlebnis, das für Personen mit begrenzter Erfahrung in der modernen Tooling-Landschaft zugänglicher ist.

Svelte hält sich eng an das klassische Webentwicklungsmodell von HTML, CSS und JS und fügt lediglich einige Erweiterungen zu HTML und JavaScript hinzu. Es hat argumentativ weniger Konzepte und Tools zu lernen als einige der anderen Framework-Optionen.

Seine aktuellen Hauptnachteile sind, dass es ein junges Framework ist – sein Ökosystem ist daher im Vergleich zu ausgereifteren Frameworks in Bezug auf Tools, Support, Plugins, klare Nutzungsmuster usw. begrenzter und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden später in dieser Tutorial-Serie darauf eingehen.

Wir ermutigen Sie, das [Svelte-Tutorial](https://learn.svelte.dev/) für eine wirklich schnelle Einführung in die grundlegenden Konzepte durchzugehen, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas detaillierteres erstellt.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Anfang an beginnen und Svelte Ihre Benutzeroberfläche steuern lassen oder es schrittweise in eine bestehende Anwendung integrieren.

Dennoch eignet sich Svelte besonders gut für die Bewältigung der folgenden Situationen:

- Webanwendungen für Geräte mit geringer Leistung: Anwendungen, die mit Svelte erstellt werden, haben kleinere Bundle-Größen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und Verbleiben im Speicher.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungsgewinne, die aus einem Framework ohne Laufzeit-Overhead resultieren, sicherstellen, dass Benutzerinteraktionen schnell und reaktionsschnell sind.
- Onboarding von Personen mit grundlegenden Kenntnissen in der Webentwicklung: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Svelte-spezifischen Aspekte leicht erfassen und in kurzer Zeit mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Webframeworks zu finden sind, wie z.B. dateibasiertes Routing, serverseitiges Rendering (SSR), seitenbezogene Render-Modi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte-native.technology/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Laufzeit-Overhead generieren. Um dies zu erreichen, erweitert Svelte Vanilla-Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup zulässt und Direktiven zum Verwenden von Bedingungen und Schleifen bereitstellt, ähnlich wie bei Handlebars.
- Es erweitert CSS durch das Hinzufügen eines Scopings-Mechanismus, der es jedem Component ermöglicht, seine eigenen Stile zu definieren, ohne dass die Gefahr besteht, dass diese mit den Stilen anderer Komponenten kollidieren.
- Es erweitert JavaScript, indem spezifische Direktiven der Sprache neu interpretiert werden, um echte Reaktivität zu erreichen und das Component-Statusmanagement zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Die Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler abzuschrecken. Tatsächlich werden Sie meistens mit reinem JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag zu Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit tun kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Long-Term-Support (LTS)-Version zu verwenden. Node enthält npm (den Node Package Manager) und npx (den Node Package Runner). Beachten Sie, dass Sie auch den Yarn Package Manager anstelle von npm verwenden können, aber wir gehen in diesem Tutorial-Set davon aus, dass Sie npm verwenden. Siehe [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit Unix/macOS-Terminals zu erreichen, um die in diesem Tutorial genannten Terminalbefehle zu verwenden. Gitbash (das als Teil des [Git für Windows Toolsets](https://gitforwindows.org/) verfügbar ist) oder das [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Siehe [Einführung in die Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für weitere Informationen zu diesen und zu Terminalbefehlen im Allgemeinen.

Weitere Informationen finden Sie auch in den folgenden Quellen:

- [„Über npm“](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- [„Einführung von npx“](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, die Starter-Vorlagenanwendung herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können das Herunterladen und Entpacken umgehen und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> Degit führt keine Art von Magie aus – es ermöglicht Ihnen einfach, die neueste Version der Inhalte eines Git-Repos herunterzuladen und zu entpacken. Dies ist viel schneller als die Verwendung von `git clone`, da es nicht die gesamte Geschichte des Repos herunterlädt oder ein vollständiges lokales Klon erstellt.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und aufbauen. Es startet einen lokalen Server unter `localhost:8080`. Svelte überwacht Dateiupdates und kompiliert die App bei Änderungen an den Quelldateien automatisch neu und aktualisiert sie. Ihr Browser zeigt damit etwas Ähnliches wie folgt an:

![Eine einfache Startseite, die Hello World sagt, und einen Link zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

### Anwendungsstruktur

Die Starter-Vorlage kommt mit folgender Struktur:

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Datei überhaupt nicht verstehen, um dieses Tutorial abzuschließen, aber wenn Sie mehr darüber lernen möchten, können Sie auf npmjs.com über das [Handling von `package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) lesen; wir sprechen auch darüber in unserem [Grundlagen der Paketverwaltung Tutorial](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Teilt Git mit, welche Dateien oder Ordner aus dem Projekt ignoriert werden sollen – nützlich, wenn Sie sich entscheiden, Ihre App in ein Git-Repo einzufügen.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modulbündler. Diese Konfigurationsdatei teilt Rollup mit, wie es Ihre App kompilieren und aufbauen soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starter-Projekt mit `npx degit sveltejs/template-webpack svelte-app` erstellen.
- `scripts`: Enthält die erforderlichen Setup-Skripte. Sollte derzeit nur `setupTypeScript.js` enthalten.

  - `setupTypeScript.js`: Dieses Skript richtet TypeScript-Unterstützung in Svelte ein. Wir werden darüber mehr im letzten Artikel sprechen.

- `src`: Dieses Verzeichnis ist, wo der Quellcode für Ihre Anwendung lebt – wo Sie den Code für Ihre App erstellen werden.

  - `App.svelte`: Dies ist die Top-Level-Komponente Ihrer App. Bisher rendert sie nur die 'Hello World!'-Nachricht.
  - `main.js`: Der Einstiegspunkt unserer Anwendung. Er instanziert einfach die `App`-Komponente und bindet sie an den Körper unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon für Ihre App. Es ist derzeit das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfangs ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält nicht-skopierte Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.

    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Ein Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien mit einer Obermenge von HTML geschrieben.

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
> Für weitere Informationen zum Komponentenformat werfen Sie einen Blick auf die [Svelte-Komponentendokumentation](https://svelte.dev/docs/svelte-components).

Mit diesem Wissen lassen Sie uns die `src/App.svelte`-Datei, die mit der Starter-Vorlage kam, ansehen. Sie sollten etwas in der Art wie folgt sehen:

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

Der `<script>`-Block enthält JavaScript, das bei der Erstellung einer Komponenteninstanz ausgeführt wird. Variablen, die auf der obersten Ebene deklariert (oder importiert) werden, sind im Markup der Komponente 'sichtbar'. Top-Level-Variablen sind die Art und Weise, wie Svelte den Komponentenzustand handhabt, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```html
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder `prop`) zu markieren, was bedeutet, dass sie für Verbraucher der Komponente (z.B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie dennoch vertraut bleibt.

### Der Markup-Abschnitt

Im Markup-Abschnitt können Sie beliebiges HTML einfügen, und darüber hinaus können Sie gültige JavaScript-Ausdrücke innerhalb einzelner geschweifter Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert des `name`-Props direkt nach dem `Hello`-Text ein.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele ermöglichen es Ihnen, bedingt einen Teil des Markups zu rendern, durch eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrung im Arbeiten mit CSS haben, sollte der folgende Ausschnitt Sinn machen:

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

Wir anwenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element. Was passiert mit anderen Komponenten, die `<h1>`-Elemente enthalten?

In Svelte wird CSS innerhalb eines `<style>`-Blocks einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit der rechten/<kbd>Strg</kbd>-Taste auf das _HELLO WORLD!_-Label klicken und _Inspect_ wählen:

![Svelte-Starter-App mit geöffneten Devtools, die Klassen für eingeschränkte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition in `h1.svelte-1tky8bj` und modifiziert jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, so dass es die Stile wie erforderlich aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten außer Kraft setzen und Stile für einen Selektor global anwenden, indem Sie den `:global()`-Modifikator verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Jetzt, da wir eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir beginnen, einige Änderungen vorzunehmen.
An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren — zum Beispiel das `<h1>`-Element in `App.svelte` so zu ändern, dass es wie folgt aussieht:

```html
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die ausgeführte App unter `localhost:8080` wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität von Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework das DOM automatisch aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird die Reaktivität durch das Zuweisen eines neuen Wertes zu einer Top-Level-Variable in einer Komponente ausgelöst. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unsere `App`-Komponente aufnehmen und einen Button zum Ausführen dieser Funktion hinzufügen.

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

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Im Hintergrund erstellt Svelte den JavaScript-Code, um das DOM immer dann zu aktualisieren, wenn sich der Wert der `name`-Variablen ändert, ohne dass ein virtueller DOM oder ein anderer komplexer Abgleichsmechanismus verwendet wird.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist Svelte's Syntax zum Hören von DOM-Ereignissen.

## Überprüfung von main.js: der Einstiegspunkt unserer App

Lassen Sie uns `src/main.js` öffnen, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App und sieht anfänglich so aus:

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden werden. Dann wird sie mit `new App` instanziiert, wobei ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in dem wir möchten, dass die Komponente gerendert wird, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jeder Prop der `App`-Komponente zugewiesen werden.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien miteinander harmonisch arbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Außerdem fügt er den Code in `src/main.js` hinzu, um die Funktionen jeder Komponente zu referenzieren.

Schließlich umfasst die Datei `public/index.html` die generierten `bundle.css` und `bundle.js`-Dateien:

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

Die minifizierte Version von `bundle.js` wiegt etwas mehr als 3KB, was das "Svelte-Runtime" (nur 300 Zeilen JavaScript-Code) und die `App.svelte`-kompilierte Komponente umfasst. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es gibt keine weiteren Bibliotheken, die in die Webseite geladen werden.

Dies ist ein viel kleinerer Speicherbedarf als bei den kompilierten Bundles anderer Frameworks. Bedenken Sie, dass bei Code-Bundles nicht nur die herunterzuladende Dateigröße wichtig ist. Dies ist ausführbarer Code, der geparst, ausgeführt und im Speicher behalten werden muss. Dies macht also wirklich einen Unterschied, besonders bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Fortsetzung dieses Tutorials

In dieser Tutorial-Serie werden Sie eine komplette Webanwendung erstellen. Wir werden alle Grundlagen über Svelte lernen und auch einige fortgeschrittenere Themen behandeln.

Sie können einfach den Inhalt lesen, um ein gutes Verständnis der Svelte-Funktionen zu erhalten, aber Sie werden am meisten von diesem Tutorial profitieren, wenn Sie beim Erstellen der App mit uns mitkodieren. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository mit einem Ordner zur Verfügung, der den Quellcode der App enthält, wie er zu Beginn jedes Tutorials aussieht.

Svelte bietet auch ein Online-REPL, das ist ein Spielplatz für das Live-Coding von Svelte-Apps im Web, ohne dass Sie etwas auf Ihrem Computer installieren müssen. Wir bieten ein REPL für jeden Artikel, damit Sie sofort mit dem Codieren beginnen können. Lassen Sie uns ein bisschen mehr darüber sprechen, wie Sie diese Werkzeuge nutzen.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Website, die Hosting für Ihre Repositories und mehrere Tools zur Arbeit damit bietet.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel einfach herunterladen können. Sie werden auch den Code erhalten können, wie er nach dem Abschluss des Artikels aussehen sollte, falls Sie sich verirren.

Nach dem [Installieren von git](https://git-scm.com/downloads), um das Repository zu klonen, sollten Sie folgendes ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann, zu Beginn jedes Artikels, können Sie einfach in den entsprechenden Ordner wechseln und die App im Entwicklermodus starten, um zu sehen, in welchem aktuellen Zustand sie sich befinden sollte, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste mit Links zu nützlichen Leitfäden zusammengestellt — siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie nur die Dateien herunterladen möchten, ohne das Git-Repo zu klonen, können Sie das Degit-Tool wie folgt verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner herunterladen mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started`. Degit erstellt kein lokales Git-Repo, es lädt nur die Dateien des angegebenen Ordners herunter.

### Verwendung des Svelte REPL

Ein REPL ([Read–Eval–Print Loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen — viele Programmiersprachen bieten ein REPL.

Das Svelte REPL ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, komplette Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um von jeder Maschine aus mit Svelte zu experimentieren, ohne etwas installieren zu müssen. Es wird auch weit von der Svelte-Community verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer extrem nützlich, eine REPL-Instanz zu erstellen, die das Problem zeigt.

Lassen Sie uns einen kurzen Blick auf das Svelte REPL werfen und wie Sie es verwenden würden. Es sieht folgendermaßen aus:

![das Svelte REPL in Aktion, zeigt Code der Komponente links und Ausgabe rechts](03-svelte-repl-in-action.png)

Um ein REPL zu starten, öffnen Sie Ihren Browser und navigieren zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten und auf der rechten Seite sehen Sie die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code lässt Sie `.svelte` und `.js` Dateien erstellen und sie anordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie z.B.: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber befindet sich der Titel des REPLs. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite gibt es drei Registerkarten:

  - Die _Result_-Registerkarte zeigt die Ausgabe Ihrer App an und bietet eine Konsole am unteren Rand.
  - Die _JS output_-Registerkarte lässt Sie den von Svelte generierten JavaScript-Code inspizieren und Compiler-Optionen festlegen.
  - Die _CSS output_-Registerkarte zeigt das von Svelte generierte CSS an.

- Über den Registerkarten finden Sie eine Symbolleiste, die es Ihnen ermöglicht, den Vollbildmodus zu aktivieren und Ihre App herunterzuladen. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie auch die App forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Result-Registerkarte aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel ist hier der Link für ein REPL, das unsere komplette App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Svelte-Version in der URL angeben können. Dies ist nützlich, wenn Sie Probleme melden, die mit einer bestimmten Version von Svelte zusammenhängen.

Wir werden bei Beginn und Ende jedes Artikels ein REPL bereitstellen, damit Sie sofort mit dem Coden beginnen können.

> [!NOTE]
> Derzeit kann das REPL keine Ordnernamen richtig verwalten. Wenn Sie dem Tutorial im REPL folgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Wenn Sie dann einen Pfad im Code sehen, z.B. `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch einen flachen URL, z.B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um gemeinsam mit uns das REPL zu verwenden, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf Svelte, einschließlich der Frage, wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste echte Anwendung zu erstellen, eine To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge rekapitulieren, die wir gelernt haben.

In Svelte:

- Definieren wir das Script, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenten-Props werden mit dem `export`-Schlüsselwort deklariert.
- Svelte-Komponenten können einfach verwendet werden, indem die entsprechende `.svelte`-Datei importiert wird.
- Die Stile der Komponenten sind abgeschottet, wodurch sie verhindert werden, dass sie miteinander in Konflikt geraten.
- Im Markup-Abschnitt können Sie einen beliebigen JavaScript-Ausdruck einfügen, indem Sie ihn zwischen geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Die Reaktivität wird einfach ausgelöst, indem einer Top-Level-Variablen ein neuer Wert zugewiesen wird.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
