---
title: Erste Schritte mit Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen bisher gesehenen Frameworks und Tools unterscheidet. Dann lernen wir, wie wir unsere Entwicklungsumgebung einrichten, eine Beispielanwendung erstellen, die Struktur des Projekts verstehen und sehen, wie wir es lokal ausführen und für die Produktion bauen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den Kernsprachen
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
          Svelte ist ein Compiler, der aus unseren Quellen minimalen und hochoptimierten
          JavaScript-Code generiert; Sie benötigen ein Terminal mit installiertem Node +
          npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Svelte-Entwicklungsumgebung einrichten, eine Starter-App erstellen und bauen sowie die Grundlagen ihres Funktionierens verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zum Erstellen reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz zum Erstellen von Webanwendungen als einige der anderen Frameworks, die in diesem Modul behandelt werden. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers während des Betriebs der App ausführen, verlagert Svelte diese Arbeit in einen Kompilierschritt, der nur beim Bauen Ihrer App stattfindet, und produziert hochoptimierten Vanilla-JavaScript.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungsbündel und eine bessere Leistung, sondern auch eine Entwicklererfahrung, die für Personen mit begrenzter Erfahrung im modernen Tooling-Ökosystem zugänglicher ist.

Svelte bleibt dem klassischen Webentwicklungsmodell von HTML, CSS und JS eng verbunden und fügt nur wenige Erweiterungen zu HTML und JavaScript hinzu. Es hat tendenziell weniger Konzepte und Tools zu erlernen als einige der anderen Framework-Optionen.

Ein aktueller Nachteil ist, dass es sich um ein junges Framework handelt — sein Ökosystem ist daher in Bezug auf Tools, Unterstützung, Plugins, klare Nutzungsmuster usw. begrenzter als bei reiferen Frameworks, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Sie zu ermutigen, es zu erkunden.

> [!NOTE]
> Svelte hat [offizielle Unterstützung für TypeScript](https://svelte.dev/docs/typescript). Wir werden später in dieser Tutorial-Serie darauf eingehen.

Wir empfehlen Ihnen, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas tiefergehenderes baut.

## Anwendungsbereiche

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu starten und Svelte Ihre Benutzeroberfläche steuern lassen oder es schrittweise in eine vorhandene Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet, um folgende Situationen anzugehen:

- Webanwendungen, die für leistungsschwache Geräte gedacht sind: Mit Svelte erstellte Anwendungen haben kleinere Bündelgrößen, was ideal für Geräte mit langsamen Netzverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und im Speicher verfügbar zu halten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, sorgen die Leistungsgewinne, die aus einem Framework ohne Laufzeit-Overhead resultieren, dafür, dass Benutzerinteraktionen schnell und reaktionsfähig sind.
- Onboarding von Personen mit grundlegenden Kenntnissen in Webentwicklung: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Besonderheiten von Svelte schnell verstehen und mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Web-Frameworks zu finden sind, wie z.B. dateibasiertes Routing, serverseitiges Rendering (SSR), seiten-spezifische Renderingmodi, Offline-Unterstützung und mehr. Für mehr Informationen über SvelteKit, sehen Sie sich das [offizielle Tutorial](https://learn.svelte.dev/) und die [Dokumentation](https://kit.svelte.dev/docs/introduction) an.

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als ein Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Laufzeit-Overhead generieren. Dazu erweitert Svelte Vanilla-Web-Technologien auf die folgenden Weisen:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup erlaubt und Direktiven bereitstellt, um Bedingungen und Schleifen zu verwenden, in einer Weise ähnlich wie Handlebars.
- Es erweitert CSS, indem es einen Scoping-Mechanismus hinzufügt, sodass jeder Komponent seine eigenen Stile definieren kann, ohne Gefahr zu laufen, mit den Stilen anderer Komponenten zu kollidieren.
- Es erweitert JavaScript, indem es bestimmte Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und das Management des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen ein und nur im Kontext von Svelte-Komponenten. Die Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich werden Sie größtenteils mit Vanilla-JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag auf Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Long Term Support (LTS) Version zu verwenden. Node enthält npm (den Node-Paketmanager) und npx (den Node-Paketläufer). Beachten Sie, dass Sie auch den Yarn-Paketmanager anstelle von npm verwenden können, aber wir nehmen an, dass Sie in diesem Tutorial npm verwenden. Siehe [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) für weitere Informationen zu npm und yarn.

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Parität mit Unix/macOS-Terminals zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. Gitbash (das Teil des [Git für Windows Toolsets](https://gitforwindows.org/) ist) oder [Windows Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Siehe [Befehlszeilen-Crashkurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) für mehr Informationen hierzu und zu Terminalbefehlen im Allgemeinen.

Sehen Sie auch die folgenden Dokumente für weitere Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung von npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Ihre erste Svelte-Anwendung erstellen

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, einfach die Starter-Vorlage-Anwendung herunterzuladen. Das können Sie tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie vermeiden, sie herunterzuladen und zu entpacken und verwenden einfach [degit](https://github.com/Rich-Harris/degit).

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> degit macht keine Magie — es lässt Sie einfach die neueste Version des Inhalts eines git-Repos herunterladen und entpacken. Dies ist viel schneller als `git clone` zu verwenden, da es nicht die gesamte Geschichte des Repos herunterlädt oder ein komplettes lokales Klon erstellt.

Nachdem Sie `npm run dev` ausgeführt haben, wird Svelte Ihre Anwendung kompilieren und bauen. Es wird ein lokaler Server bei `localhost:8080` gestartet. Svelte wird auf Datei-Updates warten und die App automatisch für Sie neu kompilieren und aktualisieren, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser zeigt etwas wie folgt an:

![Eine einfache Startseite mit der Aufschrift hallo welt, mit einem Link zu den offiziellen Svelte-Tutorials](01-svelte-starter-app.png)

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

Der Inhalt ist wie folgt:

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, das Node.js/npm zur Organisation verwendet. Sie brauchen diese Datei nicht zu verstehen, um dieses Tutorial abzuschließen, allerdings, wenn Sie mehr erfahren möchten, können Sie über die Handhabung von [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com lesen; wir sprechen auch darüber in unserem [Tutorial über Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Teilt git mit, welche Dateien oder Ordner vom Projekt ignoriert werden sollen — nützlich, wenn Sie entscheiden, Ihre App in einem git-Repo zu erhalten.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei teilt Rollup mit, wie Ihre App kompiliert und gebaut werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` erstellen.
- `scripts`: Enthält Einrichtungsskripte nach Bedarf. Sollte derzeit nur `setupTypeScript.js` enthalten.
  - `setupTypeScript.js`: Dieses Skript richtet die Unterstützung für TypeScript in Svelte ein. Wir werden später im letzten Artikel mehr darauf eingehen.

- `src`: Dieses Verzeichnis enthält den Quellcode Ihrer Anwendung — hier werden Sie den Code für Ihre App erstellen.
  - `App.svelte`: Dies ist die Top-Level-Komponente Ihrer App. Bisher rendert es nur die Nachricht "Hello World!".
  - `main.js`: Der Einstiegspunkt in unsere Anwendung. Es instanziiert einfach die `App`-Komponente und bindet sie an den Körper unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.
  - `favicon.png`: Dies ist das Favicon für Ihre App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfangs ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält nicht scoped Styles. Es ist eine normale CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.
    - `bundle.css`: Die von Svelte generierte CSS-Datei aus den für jede Komponente definierten Stilen.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Ein erster Blick auf unsere erste Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien mit einer Obermenge von HTML geschrieben.

Alle drei Abschnitte — `<script>`, `<style>` und Markup — sind optional und können in beliebiger Reihenfolge auftreten.

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
> Für weitere Informationen zum Komponentenformat werfen Sie einen Blick auf die [Svelte-Komponenten-Dokumentation](https://svelte.dev/docs/svelte-components).

Mit diesem Wissen schauen wir uns die Datei `src/App.svelte` an, die mit der Starter-Vorlage geliefert wurde. Sie sollten so etwas wie das Folgende sehen:

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

### Der `<script>` Abschnitt

Der `<script>` Block enthält JavaScript, das ausgeführt wird, wenn eine Instanz einer Komponente erstellt wird. Variablen, die auf Spitzenebene deklariert (oder importiert) werden, sind vom Markup der Komponente aus sichtbar. Spitzenebenenvariablen sind die Art und Weise, wie Svelte den Status der Komponente verwaltet, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```svelte
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu kennzeichnen, was bedeutet, dass sie für Verbraucher der Komponente (z. B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen und dennoch vertraut zu bleiben.

### Der Markup-Bereich

Im Markup-Bereich können Sie beliebiges HTML einfügen, darüber hinaus können Sie gültige JavaScript-Ausdrücke in einfachen geschweiften Klammern (`{}`) einfügen. In diesem Fall binden wir den Wert des `name` Props direkt nach dem `Hello`-Text ein.

```svelte
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele ermöglichen es Ihnen, je nachdem, einen Abschnitt des Markups bedingt zu rendern, durch eine Liste von Elementen zu iterieren und mit asynchronen Werten zu arbeiten.

### Der `<style>`-Bereich

Wenn Sie Erfahrung im Arbeiten mit CSS haben, sollte der folgende Snippet sinnvoll sein:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Element an. Was wird mit anderen Komponenten mit `<h1>`-Elementen darin geschehen?

In Svelte wird CSS innerhalb eines Komponentens `<style>` Blocks nur für diese Komponente abgegrenzt. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, rechts/<kbd>Strg</kbd>-klicken auf das _HELLO WORLD!_ Label und _Inspect_ wählen:

![Svelte-Starter-App mit geöffneten Entwicklerwerkzeugen, die Klassen für abgegrenzte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1` Stildefinition zu `h1.svelte-1tky8bj` und modifiziert dann jedes `<h1>` Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, sodass es die benötigten Stile aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten umgehen und Stile global auf einen Selektor anwenden, indem Sie den `:global()` Modifier verwenden (siehe die [Svelte `<style>` Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Einige Änderungen vornehmen

Da wir jetzt eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir einige Änderungen vornehmen.
An dieser Stelle können Sie versuchen, Ihre `App.svelte` Komponente zu aktualisieren — beispielsweise das `<h1>` Element in `App.svelte` so zu ändern, dass es wie folgt aussieht:

```svelte
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die bei `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität in Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework automatisch das DOM aktualisieren kann, wenn der Zustand einer Komponente geändert wird.

In Svelte wird die Reaktivität durch Zuweisen eines neuen Wertes zu einer beliebigen Spitzenebenenvariable in einer Komponente ausgelöst. Beispielsweise könnten wir eine `toggleName()` Funktion in unsere `App` Komponente einbinden und einen Button hinzufügen, um sie auszuführen.

Versuchen Sie, Ihre `<script>` und Markup-Bereiche wie folgt zu aktualisieren:

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

Wann immer der Button geklickt wird, führt Svelte die `toggleName()` Funktion aus, die wiederum den Wert der `name` Variable aktualisiert.

Wie Sie sehen können, wird das `<h1>` Label automatisch aktualisiert. Hinter den Kulissen hat Svelte den JavaScript-Code erstellt, um das DOM jedes Mal zu aktualisieren, wenn sich der Wert der name-Variable ändert, ohne dabei ein virtuelles DOM oder ein anderes komplexes Versöhnungsmechanismus zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist Sveltes Syntax, um auf DOM-Ereignisse zu hören.

## Inspektion von main.js: der Einstiegspunkt in unsere App

Öffnen wir `src/main.js`, das ist, wo die `App`-Komponente importiert und verwendet wird. Diese Datei ist der Einstiegspunkt für unsere App, und sie sieht anfänglich so aus:

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

`main.js` beginnt damit, die Svelte-Komponente zu importieren, die wir verwenden werden. Anschließend wird sie mit `new App` instanziiert, wobei ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in dem wir die Komponente rendern möchten, in diesem Fall das `<body>` Element.
- `props`: die Werte, die jedem Prop der `App`-Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien reibungslos zusammenarbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>` Bereich jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Er kompiliert auch das Markup und den `<script>` Bereich jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Darüber hinaus fügt er den Code in `src/main.js` hinzu, um die Funktionen jeder Komponente zu referenzieren.

Schließlich enthält die Datei `public/index.html` die generierten `bundle.css` und `bundle.js` Dateien:

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

Die minifizierte Version von `bundle.js` wiegt etwas mehr als 3KB, was den "Svelte-Runtime" (nur 300 Zeilen JavaScript-Code) und die `App.svelte`-kompilierte Komponente enthält. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es werden keine anderen Bibliotheken in die Webseite geladen.

Dies ist ein viel kleinerer Fußabdruck als kompilierte Bundles von anderen Frameworks. Berücksichtigen Sie, dass es bei Code-Bundles nicht nur die Größe der herunterzuladenden Dateien ist, die zählt. Dies ist ausführbarer Code, der analysiert, ausgeführt und im Speicher gehalten werden muss. Das macht einen echten Unterschied, insbesondere bei leistungsschwachen Geräten oder rechenintensiven Anwendungen.

## Dieses Tutorial fortsetzen

In dieser Tutorial-Serie werden Sie eine vollständige Webanwendung erstellen. Wir werden alle Grundlagen über Svelte lernen und auch einige fortgeschrittene Themen.

Sie können einfach den Inhalt lesen, um ein gutes Verständnis der Svelte-Funktionen zu erhalten, aber Sie werden das meiste aus diesem Tutorial herausbekommen, wenn Sie den Code der App währenddessen mit uns erstellen. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository mit einem Ordner zur Verfügung, der den Quellcode der App wie am Anfang jedes Tutorials enthält.

Svelte bietet auch einen Online-REPL, welcher ein Spielplatz für das Live-Coding von Svelte-Apps im Web ist, ohne dass irgendetwas auf Ihrem Rechner installiert werden muss. Wir bieten einen REPL für jeden Artikel, so dass Sie sofort mit dem Codieren beginnen können. Lassen Sie uns ein wenig mehr darüber sprechen, wie diese Tools verwendet werden.

### Git verwenden

Das beliebteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Seite, die Hosting für Ihre Repositories und mehrere Werkzeuge für die Arbeit damit bietet.

Wir werden GitHub verwenden, damit Sie einfach den Quellcode für jeden Artikel herunterladen können. Sie werden auch in der Lage sein, den Code so zu bekommen, wie er nach Abschluss des Artikels sein sollte, falls Sie sich verlaufen.

Nach der [Installation von Git](https://git-scm.com/downloads) sollten Sie zum Klonen des Repositories die folgende Ausführung wählen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn eines jeden Artikels einfach in den entsprechenden Ordner wechseln und die App im Entwicklungsmodus starten, um zu sehen, wie der aktuelle Zustand sein sollte, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste von Links zu nützlichen Leitfäden zusammengestellt — siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie nur die Dateien herunterladen wollen, ohne das git-Repo zu klonen, können Sie das Degit-Tool so verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen spezifischen Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit wird kein lokales git-Repo erstellen, es wird nur die Dateien des angegebenen Ordners herunterladen.

### Den Svelte REPL verwenden

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen — viele Programmiersprachen bieten einen REPL.

Svelte's REPL ist viel mehr als das. Es ist ein Online-Tool, das Ihnen ermöglicht, komplette Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um von jedem Gerät aus ohne Installation direkt mit Svelte zu spielen. Es wird auch häufig von der Svelte-Community verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer äußerst nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Werfen wir einen kurzen Blick auf den Svelte REPL und wie Sie ihn verwenden würden. Er sieht wie folgt aus:

![der Svelte REPL in Aktion, zeigt den Komponentencode auf der linken Seite und die Ausgabe auf der rechten Seite](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten, und auf der rechten Seite sehen Sie die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht das Erstellen von `.svelte` und `.js` Dateien und das Anordnen dieser. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie so: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber befindet sich der Titel des REPLs. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Tabs:
  - Der _Result_ Tab zeigt Ihre App-Ausgabe, und stellt eine Konsole am unteren Rand bereit.
  - Der _JS output_ Tab ermöglicht es Ihnen, den von Svelte generierten JavaScript-Code zu inspizieren und Compiler-Optionen einzustellen.
  - Der _CSS output_ Tab zeigt das von Svelte generierte CSS an.

- Über den Tabs finden Sie eine Symbolleiste, mit der Sie den Vollbildmodus aktivieren und Ihre App herunterladen können. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie die App auch forken und speichern. Sie können auch alle Ihre gespeicherten REPLs anzeigen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Your saved apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und den Result-Tab aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel, hier ist der Link für einen REPL, der unsere komplette App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie Svelte's Version in der URL angeben können. Dies ist nützlich, wenn Sie Probleme im Zusammenhang mit einer bestimmten Svelte-Version melden.

Wir werden am Anfang und Ende jedes Artikels einen REPL bereitstellen, damit Sie sofort mit dem Coden beginnen können.

> [!NOTE]
> Zum jetzigen Zeitpunkt kann der REPL die Ordnernamen nicht richtig handhaben. Wenn Sie dem Tutorial im REPL folgen, erstellen Sie alle Ihre Komponenten einfach im Stammverzeichnis. Wenn Sie dann einen Pfad im Code sehen, beispielsweise `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z.B., `import Todos from './Todos.svelte'`.

## Der Code bis hierhin

### Git

Klonen Sie das GitHub-Repo (falls Sie das noch nicht gemacht haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen App-Zustand zu gelangen, führen Sie aus

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder direkt den Inhalt des Ordners herunterladen:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns unter Verwendung des REPL zu coden, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Blicks auf Svelte, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung zu erstellen, eine To-Do-Liste. Bevor wir das tun, lassen Sie uns einige der Dinge, die wir gelernt haben, zusammenfassen.

In Svelte:

- Definieren wir das Skript, den Stil und das Markup jeder Komponente in einer einzelnen `.svelte` Datei.
- Komponenten-Props werden mit dem `export` Schlüsselwort deklariert.
- Svelte-Komponenten können einfach durch Import der entsprechenden `.svelte` Datei verwendet werden.
- Komponentenstile sind scoped, wodurch ein Überschneiden mit anderen vermieden wird.
- Im Markup-Bereich können Sie beliebige JavaScript-Ausdrücke einfügen, indem Sie diese in geschweifte Klammern setzen.
- Die Spitzenniveavariablen einer Komponente stellen ihren Status dar.
- Reaktivität wird einfach dadurch ausgelöst, dass einer Spitzenniveavariablen ein neuer Wert zugewiesen wird.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
