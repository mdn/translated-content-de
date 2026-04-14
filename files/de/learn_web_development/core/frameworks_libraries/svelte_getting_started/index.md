---
title: Erste Schritte mit Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: 19cee96ad42daadec1e4b66e87536ec7a5d5cb80
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den bisher gesehenen Frameworks und Tools unterscheidet. Anschließend lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispiel-App erstellen, die Struktur des Projekts verstehen, es lokal ausführen und für die Produktion bauen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut zu sein sowie
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Befehlszeile</a
          > zu haben.
        </p>
        <p>
          Svelte ist ein Compiler, der minimalen und hochoptimierten JavaScript-Code aus unseren Ausgangsquellen erzeugt; Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichtung einer lokalen Svelte-Entwicklungsumgebung, Erstellen und Bauen einer Starter-App und
        Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zur Erstellung umfangreicher Benutzeroberflächen

Svelte bietet einen anderen Ansatz zur Erstellung von Web-Apps als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers verrichten, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierungsschritt, der nur beim Bauen Ihrer App erfolgt und hochoptimiertes Vanilla JavaScript erzeugt.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungs-Bundles und eine bessere Leistung, sondern auch ein Entwicklererlebnis, das auch für Personen zugänglicher ist, die nur begrenzte Erfahrung mit dem modernen Tooling-Ökosystem haben.

Svelte hält sich eng an das klassische Webentwicklungsmodell von HTML, CSS und JS, ergänzt lediglich einige Erweiterungen für HTML und JavaScript. Es hat arguably weniger Konzepte und Tools zu erlernen als einige der anderen Framework-Optionen.

Seine derzeit größten Nachteile sind, dass es ein junges Framework ist — sein Ökosystem ist daher in Bezug auf Tools, Support, Plugins, klare Nutzungsmuster usw. eingeschränkter als bei reiferen Frameworks, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten genug sein, um Sie zu ermutigen, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden später in dieser Tutorial-Serie darauf eingehen.

Wir ermutigen Sie, zunächst das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen für eine wirklich schnelle Einführung in die grundlegenden Konzepte, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas tiefergehenderes baut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu beginnen und Svelte Ihre UI steuern lassen oder es inkrementell in eine bestehende Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet, um die folgenden Situationen anzugehen:

- Webanwendungen für leistungsschwache Geräte: Mit Svelte erstellte Anwendungen haben kleinere Bundle-Größen, was ideal für Geräte mit langsamen Netzwerkverbindungen und eingeschränkter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und im Speicher behalten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungsvorteile eines Frameworks ohne Laufzeit-Overhead dafür sorgen, dass Benutzerinteraktionen schnell und reaktionsschnell sind.
- Onboarding von Personen mit grundlegenden Webentwicklungskenntnissen: Svelte hat eine geringe Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die spezifischen Eigenschaften von Svelte in kurzer Zeit leicht erfassen und beginnen, Webanwendungen zu erstellen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) gestartet, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Web-Frameworks zu finden sind, wie dateibasierte Routing, serverseitiges Rendering (SSR), seiten­spezifische Rendering-Modi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Laufzeit-Overhead erzeugen. Um dies zu erreichen, erweitert Svelte Vanilla-Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup zulässt und Direktiven bereitstellt, um Bedingungen und Schleifen zu verwenden, in einer ähnlichen Weise wie Handlebars.
- Es erweitert CSS, indem es einen Mechanismus zur Bereichserstellung hinzufügt, der es ermöglicht, dass jede Komponente ihre eigenen Stile definiert, ohne dass das Risiko besteht, mit den Stilen anderer Komponenten in Konflikt zu geraten.
- Es erweitert JavaScript, indem es spezifische Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und die Verwaltung des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Die Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler abzuschrecken. Tatsächlich werden Sie hauptsächlich mit Vanilla-JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag zu Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, um dem Compiler seine Arbeit zu ermöglichen.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Long-Term Support (LTS)-Version zu verwenden. Node enthält npm (den Node-Paket-Manager) und npx (den Node-Paket-Runner). Beachten Sie, dass Sie auch den Paketmanager Yarn anstelle von npm verwenden können, aber wir gehen davon aus, dass Sie in diesem Tutorial npm verwenden. Weitere Informationen über npm und Yarn finden Sie in den [Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit dem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle zu verwenden. Git Bash (das als Teil des [git für Windows-Toolsets](https://gitforwindows.org/) geliefert wird) oder [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Siehe den [Command line crash course](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für weitere Informationen hierzu und zu den Terminalbefehlen im Allgemeinen.

Sehen Sie sich auch die folgenden Informationen an:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung von npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, um eine Starter-App-Vorlage zu erstellen, besteht darin, einfach die Startervorlage herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können es vermeiden, sie herunterzuladen und zu entpacken, indem Sie einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> degit vollbringt keine Zauberei — es ermöglicht Ihnen lediglich, die neueste Version der Inhalte eines git-Repos herunterzuladen und zu entpacken. Dies ist viel schneller als `git clone` zu verwenden, da es nicht den gesamten Verlauf des Repos herunterladen oder einen vollständigen lokalen Klon erstellen wird.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und bauen. Es wird einen lokalen Server unter `localhost:8080` starten. Svelte wird auf Dateiaktualisierungen achten und die App automatisch neu kompilieren und aktualisieren, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser wird ungefähr Folgendes anzeigen:

![Eine einfache Startseite, die Hallo Welt sagt und einen Link zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Datei nicht verstehen, um dieses Tutorial abzuschließen, sollten Sie jedoch mehr darüber erfahren wollen, können Sie auf npmjs.com über die Verarbeitung von [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) nachlesen; wir sprechen auch in unserem [Paketverwaltungsgrundlagen-Tutorial](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) darüber.
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie sind nur für Entwicklungszwecke gedacht.
- `.gitignore`: Gibt git an, welche Dateien oder Ordner vom Projekt ausgeschlossen werden sollen — nützlich, wenn Sie beschließen, Ihre App in ein git-Repo aufzunehmen.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei gibt Rollup Anweisungen, wie es Ihre App kompilieren und bauen soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` anstelle dessen erstellen.
- `scripts`: Enthält erforderliche Setup-Skripte. Sollte derzeit nur `setupTypeScript.js` enthalten.
  - `setupTypeScript.js`: Dieses Skript richtet TypeScript-Unterstützung in Svelte ein. Wir werden darüber mehr im letzten Artikel sprechen.

- `src`: Dieses Verzeichnis ist der Ort, an dem sich der Quellcode Ihrer Anwendung befindet — wo Sie den Code für Ihre App erstellen werden.
  - `App.svelte`: Dies ist die Top-Level-Komponente Ihrer App. Bis jetzt rendert es nur die 'Hello World!'-Nachricht.
  - `main.js`: Der Einstiegspunkt in unsere Anwendung. Es instanziert einfach die `App`-Komponente und bindet sie an den Körper unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden, enthalten.
  - `favicon.png`: Dies ist das Favicon Ihrer App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Zunächst ist es nur eine leere HTML-Seite, die die CSS-Dateien und js-Bundles lädt, die von Svelte generiert wurden.
  - `global.css`: Diese Datei enthält nicht-gescoppte Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.
    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Ein Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.Svelte`-Dateien mit einem Superset von HTML geschrieben.

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

Mit diesem Wissen werfen wir einen Blick auf die Datei `src/App.svelte`, die mit der Startervorlage geliefert wurde. Sie sollten etwas Ähnliches wie das folgende sehen:

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

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Komponenteninstanz erstellt wird. Variablen, die auf der obersten Ebene deklariert (oder importiert) werden, sind vom Markup der Komponente aus 'sichtbar'. Top-Level-Variablen sind die Art und Weise, wie Svelte den Komponentenstatus handhabt, und sie sind standardmäßig reaktiv. Später werden wir im Detail erklären, was das bedeutet.

```svelte
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu kennzeichnen, was bedeutet, dass sie für Verbraucher der Komponente (z. B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen und dennoch vertraut zu halten.

### Der Markup-Abschnitt

Im Markup-Abschnitt können Sie beliebiges HTML einfügen und zusätzlich gültige JavaScript-Ausdrücke in einfachen geschweiften Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert der `name`-Prop unmittelbar nach dem Text `Hello` ein.

```svelte
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele ermöglichen es, bedingt einen Teil des Markups zu rendern, durch eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrung mit der Arbeit mit CSS haben, sollte das folgende Codebeispiel Sinn ergeben:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element an. Was wird mit anderen Komponenten geschehen, die `<h1>`-Elemente in sich haben?

In Svelte wird CSS innerhalb eines `<style>`-Blocks einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit der rechten Maustaste/<kbd>Strg</kbd>-Taste auf das _HELLO WORLD!_-Label klicken und _Untersuchen_ wählen:

![Svelte-Starter-App mit geöffneten Entwickler-Tools, die Klassen für eingeschränkte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildefinition in `h1.svelte-1tky8bj` und modifiziert jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, sodass es wie erforderlich die Stile aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten überschreiben und Stile mit einem Selektor global anwenden, indem Sie den `:global()`-Modifier verwenden (siehe die [Svelte `<style>`-Docs](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Da wir nun eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir beginnen, ein paar Änderungen vorzunehmen.
An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren — ändern Sie zum Beispiel das `<h1>`-Element in `App.svelte`, sodass es so aussieht:

```svelte
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die unter `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität von Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework das DOM automatisch aktualisieren kann, wenn sich der Status einer Komponente ändert.

In Svelte wird die Reaktivität durch die Zuweisung eines neuen Wertes zu einer beliebigen Top-Level-Variablen in einer Komponente ausgelöst. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unsere `App`-Komponente einfügen und einen Button, um diese auszuführen.

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

Wann immer der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variablen aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Im Hintergrund hat Svelte den JavaScript-Code erstellt, um das DOM zu aktualisieren, wann immer sich der Wert der `name`-Variablen ändert, ohne einen virtuellen DOM oder andere komplexe Abstimmungsmechanismen zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist Sveltes Syntax, um DOM-Ereignisse zu lauschen.

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

`main.js` startet mit dem Importieren der Svelte-Komponente, die wir verwenden werden. Anschließend wird sie mit `new App` instanziiert, wobei ein Optionen-Objekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in das wir die Komponente rendern möchten, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jedem Prop der `App`-Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien zusammen arbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Außerdem fügt es den Code in `src/main.js` hinzu, um die Funktionen jeder Komponente zu referenzieren.

Schließlich umfasst die Datei `public/index.html` die generierten `bundle.css`- und `bundle.js`-Dateien:

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

Die minimierte Version von `bundle.js` wiegt etwas mehr als 3KB, einschließlich der "Svelte-Laufzeit" (nur 300 Zeilen JavaScript-Code) und der `App.svelte` kompilierten Komponente. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es werden keine anderen Bibliotheken in die Webseite geladen.

Dies ist ein deutlich kleinerer Fußabdruck als die kompilierte Bundles anderer Frameworks. Beachten Sie, dass es sich bei Code-Bundles nicht nur um die Größe der Dateien handelt, die heruntergeladen werden müssen. Dies ist ausführbarer Code, der geparst, ausgeführt und im Speicher gehalten werden muss. Dies macht also wirklich einen Unterschied, insbesondere bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Fortsetzung dieses Tutorials

In dieser Tutorial-Serie werden Sie eine vollständige Webanwendung erstellen. Wir werden alle Grundlagen zu Svelte lernen und auch einige fortgeschrittene Themen behandeln.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis der Svelte-Funktionen zu erhalten, aber Sie werden das meiste aus diesem Tutorial herausholen, wenn Sie den App mit uns codieren, während Sie gehen. Damit Sie jeden Artikel leichter verfolgen können, stellen wir ein GitHub-Repository mit einem Ordner zur Verfügung, der den Stand der App zu Beginn jedes Tutorials enthält.

Svelte bietet außerdem ein Online-REPL, das ein Spielplatz zum Live-Coding von Svelte-Apps im Web ist, ohne dass etwas auf Ihrem Rechner installiert werden muss. Wir bieten ein REPL für jeden Artikel an, damit Sie sofort mit der Codierung beginnen können. Lassen Sie uns ein bisschen mehr darüber sprechen, wie Sie diese Tools verwenden können.

### Verwendung von Git

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Seite, die Hosting für Ihre Repositories und mehrere Tools zur Arbeit damit bietet.

Wir werden GitHub verwenden, damit Sie den Source-Code zu jedem Artikel einfach herunterladen können. Außerdem können Sie den Code so erhalten, wie er nach Abschluss des Artikels sein sollte, falls Sie sich verirren.

Nach der [Installation von Git](https://git-scm.com/downloads), um das Repository zu klonen, sollten Sie Folgendes ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann am Anfang jedes Artikels können Sie einfach in den entsprechenden Ordner wechseln und die App im Entwicklungsmodus starten, um zu sehen, in welchem Zustand sie sich derzeit befindet, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste mit nützlichen Leitfäden zusammengestellt – siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie nur die Dateien herunterladen möchten, ohne das Git-Repo zu klonen, können Sie das Degit-Tool wie folgt verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit wird kein lokales Git-Repo erstellen, sondern nur die Dateien des angegebenen Ordners herunterladen.

### Verwendung des Svelte REPL

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen - viele Programmiersprachen bieten ein REPL.

Das Svelte REPL ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen erlaubt, komplette Apps zu erstellen, online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um von jedem Rechner aus mit Svelte zu spielen, ohne etwas installieren zu müssen. Es wird auch von der Svelte-Community häufig verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem berichten möchten, ist es immer äußerst nützlich, eine REPL-Instanziierung zu erstellen, die das Problem demonstriert.

Werfen wir einen kurzen Blick auf das Svelte REPL und wie Sie es verwenden würden. Es sieht wie folgt aus:

![das svelte REPL in Aktion, angezeigter Komponentencode auf der linken Seite und Ausgabe auf der rechten Seite](03-svelte-repl-in-action.png)

Um ein REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten, und auf der rechten Seite sehen Sie die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code lässt Sie `.svelte`- und `.js`-Dateien erstellen und sie neu anordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie folgt: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Über dieser Leiste haben Sie den Titel des REPL. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Registerkarten:
  - Die _Ergebnis_-Registerkarte zeigt die Ausgabe Ihrer App an und bietet unten eine Konsole.
  - Die _JS-Ausgabe_-Registerkarte lässt Sie den von Svelte generierten JavaScript-Code inspizieren und Compiler-Optionen festlegen.
  - Die _CSS-Ausgabe_-Registerkarte zeigt das von Svelte generierte CSS an.

- Über den Registerkarten finden Sie eine Symbolleiste, mit der Sie in den Vollbildmodus wechseln und Ihre App herunterladen können. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie auch die App forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Ergebnis-Registerkarte aktualisieren. Um Ihre App zu teilen, geben Sie einfach die URL weiter. Zum Beispiel hier ist der Link für ein REPL, in dem unsere vollständige App läuft: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, dass Sie in der URL die Version von Svelte angeben können. Dies ist nützlich, wenn Sie Probleme im Zusammenhang mit einer bestimmten Version von Svelte melden.

Wir werden ein REPL am Anfang und Ende jedes Artikels bereitstellen, sodass Sie sofort mit uns mit dem Programmieren beginnen können.

> [!NOTE]
> Derzeit kann das REPL keine Ordnernamen richtig verarbeiten. Wenn Sie das Tutorial im REPL verfolgen, erstellen Sie einfach alle Ihre Komponenten im Stammordner. Wenn Sie dann im Code einen Pfad sehen, zum Beispiel `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z.B. `import Todos from './Todos.svelte'`.

## Der bisherige Code

### Git

Klonen Sie das GitHub-Repo (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann um den aktuellen Zustand der App zu erhalten, führen Sie aus

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns über das REPL zu arbeiten, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit kommen wir zum Ende unseres ersten Blicks auf Svelte, einschließlich wie es lokal installiert wird, eine Starter-App erstellt wird und wie die Grundlagen funktionieren. Im nächsten Artikel beginnen wir mit dem Aufbau unserer ersten richtigen Anwendung, einer To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge rekapitulieren, die wir gelernt haben.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenten-Props werden mit dem `export`-Schlüsselwort deklariert.
- Svelte-Komponenten können einfach verwendet werden, indem die entsprechende `.svelte`-Datei importiert wird.
- Die Stile der Komponenten sind begrenzt, damit sie nicht miteinander kollidieren.
- Im Markup-Abschnitt können Sie jeden JavaScript-Ausdruck einfügen, indem Sie ihn in geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Die Reaktivität wird nur dadurch ausgelöst, dass einer Top-Level-Variablen ein neuer Wert zugewiesen wird.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
