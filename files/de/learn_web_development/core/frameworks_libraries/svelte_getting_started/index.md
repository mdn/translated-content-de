---
title: Erste Schritte mit Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools unterscheidet, die wir bisher gesehen haben. Anschließend lernen wir, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Struktur des Projekts versteht und wie man es lokal ausführt und für die Produktion baut.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sein und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Svelte ist ein Compiler, der minimalen und hochoptimierten JavaScript-Code aus unseren Quellen generiert; Sie benötigen ein Terminal mit installierten Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Svelte-Entwicklungsumgebung einrichten, eine Starter-App erstellen und bauen und die Grundlagen ihres Funktionierens verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zum Erstellen von reichhaltigen Benutzeroberflächen

Svelte bietet einen anderen Ansatz zum Erstellen von Webanwendungen als einige der anderen Frameworks, die in diesem Modul behandelt werden. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers ausführen, während die App läuft, verschiebt Svelte diese Arbeit in einen Kompilierungsprozess, der nur beim Erstellen der App ausgeführt wird und hochoptimiertes Vanilla-JavaScript produziert.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungsbündel und eine bessere Leistung, sondern auch eine Entwicklererfahrung, die für Personen, die wenig Erfahrung mit dem modernen Tooling-Ökosystem haben, zugänglicher ist.

Svelte hält sich eng an das klassische Webentwicklungsmodell von HTML, CSS und JS und fügt nur wenige Erweiterungen zu HTML und JavaScript hinzu. Es hat arguably weniger Konzepte und Tools zu lernen als einige der anderen Framework-Optionen.

Seine Hauptnachteile sind derzeit, dass es ein junges Framework ist – sein Ökosystem ist daher in Bezug auf Tools, Support, Plugins, klare Nutzungsmuster usw. im Vergleich zu etablierten Frameworks noch begrenzt, und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten genug sein, um Ihr Interesse zu wecken, es zu erkunden.

> [!NOTE]
> Svelte bietet [offizielle Unterstützung für TypeScript](https://svelte.dev/docs/typescript). Wir werden dies später in dieser Tutorialreihe näher betrachten.

Wir empfehlen Ihnen, das [Svelte-Tutorial](https://learn.svelte.dev/) für eine wirklich schnelle Einführung in die grundlegenden Konzepte durchzugehen, bevor Sie zu dieser Tutorialreihe zurückkehren, um zu lernen, wie man etwas etwas detaillierteres aufbaut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu starten, indem Sie Svelte Ihre Benutzeroberfläche steuern lassen, oder Sie können es schrittweise in eine bestehende Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet, um die folgenden Situationen anzugehen:

- Webanwendungen, die für leistungsschwache Geräte bestimmt sind: Anwendungen, die mit Svelte erstellt wurden, haben kleinere Paketgrößen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und in Erinnerung behalten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungsvorteile, die sich aus einem Framework ohne Laufzeit-Overhead ergeben, dafür sorgen, dass Benutzerinteraktionen schnell und reaktionsschnell sind.
- Onboarding von Personen mit Grundkenntnissen in Webentwicklung: Svelte hat eine flache Lernkurve. Webentwickler mit grundlegenden HTML-, CSS- und JavaScript-Kenntnissen können die Besonderheiten von Svelte schnell verstehen und damit beginnen, Webanwendungen zu erstellen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zum Erstellen von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Webframeworks zu finden sind, wie Dateisystem-basiertes Routing, serverseitiges Rendering (SSR), seitenbezogene Render-Modi, Offline-Unterstützung und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte-native.technology/) verfügbar.

## Wie funktioniert Svelte?

Svelte ist ein Compiler, der HTML, CSS und JavaScript erweitern kann und optimalen JavaScript-Code ohne Laufzeit-Overhead generiert. Um dies zu erreichen, erweitert Svelte die Webtechnologien in folgenden Punkten:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup ermöglicht und Direktiven zum Verwenden von Bedingungen und Schleifen bereitstellt, ähnlich wie bei Handlebars.
- Es erweitert CSS, indem ein Scoping-Mechanismus hinzugefügt wird, der es jedem Komponenten erlaubt, seine eigenen Stile zu definieren, ohne das Risiko, mit den Stilen anderer Komponenten zu kollidieren.
- Es erweitert JavaScript, indem bestimmte Direktiven der Sprache neu interpretiert werden, um echte Reaktivität zu erreichen und die Verwaltung des Komponentenstatus zu erleichtern.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler abzuschrecken. Tatsächlich werden Sie hauptsächlich mit Vanilla-JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag auf Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte zu arbeiten, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die LTS-Version (Long-term Support) zu verwenden. Node umfasst npm (den Node-Paketmanager) und npx (den Node-Paketrunner). Beachten Sie, dass Sie auch den Yarn-Paketmanager anstelle von npm verwenden können, aber wir gehen davon aus, dass Sie in diesem Tutorial-Set npm verwenden. Weitere Informationen zu npm und yarn finden Sie im [Paketverwaltungsgrundlagen](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um eine Parität mit dem Unix/macOS-Terminal zu erreichen, um die in diesem Tutorial erwähnten Terminalbefehle verwenden zu können. Gitbash (das als Teil des [Git für Windows-Werkzeugsets](https://gitforwindows.org/)) oder [Windows-Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) geeignet sind. Weitere Informationen hierzu und zu Terminalbefehlen im Allgemeinen finden Sie im [Crashkurs zur Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Weitere Informationen finden Sie auch hier:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung von npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, die Starter-Vorlagenanwendung einfach herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können die Notwendigkeit des Herunterladens und Entpackens vermeiden und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> degit tut keine Art von Magie — es ermöglicht Ihnen einfach, die neueste Version der Inhalte eines Git-Repositorys herunterzuladen und zu entpacken. Dies ist viel schneller als `git clone`, da es nicht den gesamten Verlauf des Repositorys herunterlädt oder ein vollständiges lokales Klon erstellt.

Nach der Ausführung von `npm run dev` wird Svelte Ihre Anwendung kompilieren und bauen. Es startet einen lokalen Server unter `localhost:8080`. Svelte überwacht Dateiaktualisierungen und kompiliert und aktualisiert die App automatisch neu, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser zeigt etwas wie dies an:

![Eine einfache Startseite, die Hallo Welt sagt, und einen Link zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

### Anwendungsstruktur

Die Startervorlage wird mit folgender Struktur geliefert:

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, die Node.js/npm verwendet, um es organisiert zu halten. Sie müssen diese Datei nicht vollständig verstehen, um dieses Tutorial abzuschließen. Wenn Sie jedoch mehr lernen möchten, können Sie in der npmjs.com-Dokumentation über [`package.json`-Verwaltung](https://docs.npmjs.com/cli/configuring-npm/package-json/) lesen; wir sprechen auch darüber in unserem [Tutorial zu den Grundlagen der Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht in die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Sagt Git, welche Dateien oder Ordner vom Projekt ausgeschlossen werden sollen — nützlich, wenn Sie sich entscheiden, Ihre App in ein Git-Repository aufzunehmen.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modul-Bundler. Diese Konfigurationsdatei sagt Rollup, wie man Ihre App kompiliert und baut. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` erstellen.
- `scripts`: Enthält Einrichtungsskripte, wie erforderlich. Derzeit sollte nur `setupTypeScript.js` enthalten sein.

  - `setupTypeScript.js`: Dieses Skript richtet die TypeScript-Unterstützung in Svelte ein. Wir werden später in dem letzten Artikel darüber sprechen.

- `src`: Dieses Verzeichnis enthält den Quellcode Ihrer Anwendung — hier werden Sie den Code Ihrer App erstellen.

  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher rendert es nur die 'Hallo Welt!' -Nachricht.
  - `main.js`: Der Einstiegspunkt zu unserer Anwendung. Es instanziiert einfach die `App`-Komponente und bindet sie an den Body unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.

  - `favicon.png`: Dies ist das Favicon Ihrer App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Zunächst ist es nur eine leere HTML-Seite, die die von Svelte generierten CSS-Dateien und JS-Bundles lädt.
  - `global.css`: Diese Datei enthält ungescope Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.

    - `bundle.css`: Die CSS-Datei, die Svelte aus den für jede Komponente definierten Stilen generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus Ihrem gesamten JavaScript-Quellcode kompiliert wurde.

## Unser erster Blick auf eine Svelte-Komponente

Komponenten sind die Bausteine von Svelte-Anwendungen. Sie werden in `.svelte`-Dateien unter Verwendung einer Superset von HTML geschrieben.

Alle drei Abschnitte — `<script>`, `<style>` und Markup — sind optional und können in beliebiger Reihenfolge angezeigt werden.

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
> Weitere Informationen über das Komponentenformat finden Sie in der [Svelte-Komponentendokumentation](https://svelte.dev/docs/svelte-components).

Mit diesen Informationen im Hinterkopf werfen wir einen Blick auf die Datei `src/App.svelte`, die mit der Startervorlage geliefert wurde. Sie sollten etwas Ähnliches wie das folgende sehen:

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

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Instanz der Komponente erstellt wird. Am oberen Level deklarierte (oder importierte) Variablen sind aus dem Markup der Komponente 'sichtbar'. Top-Level-Variablen sind die Art und Weise, wie Svelte den Komponentenstatus behandelt, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```html
<script>
  export let name;
</script>
```

Svelte verwendet das Schlüsselwort [`export`](/de/docs/Web/JavaScript/Reference/Statements/export), um eine Variablendeklaration als Eigenschaft (oder Prop) zu kennzeichnen, was bedeutet, dass sie für Verbraucher der Komponente (z.B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen und dennoch vertraut zu halten.

### Der Markup-Abschnitt

Im Markup-Abschnitt können Sie beliebiges HTML einfügen und zusätzlich gültige JavaScript-Ausdrücke in einfachen geschweiften Klammern (`{}`) einfügen. In diesem Fall betten wir den Wert des `name`-Props direkt nach dem `Hello`-Text ein.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}` und `{#await}` — diese Beispiele ermöglichen es, einen Teil des Markups bedingt zu rendern, eine Liste von Elementen zu durchlaufen und mit asynchronen Werten zu arbeiten, jeweils.

### Der `<style>` Abschnitt

Wenn Sie Erfahrung mit CSS haben, sollte der folgende Ausschnitt sinnvoll sein:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Element an. Was passiert mit anderen Komponenten, die `<h1>`-Elemente in sich haben?

In Svelte wird CSS innerhalb eines `<style>`-Blocks einer Komponente nur auf diese Komponente beschränkt. Dies funktioniert, indem eine Klasse zu ausgewählten Elementen hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit Rechts-/<kbd>Ctrl</kbd>-Klick auf das _HELLO WORLD!_-Label klicken und _Untersuchen_ wählen:

![Svelte-Starter-App mit offenen Devtools, die Klassen für gescopte Stile anzeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildeklaration in `h1.svelte-1tky8bj` und modifiziert jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, damit es die Stile bei Bedarf aufnimmt.

> [!NOTE]
> Sie können dieses Verhalten überschreiben und Stile auf einen Selektor global anwenden, indem Sie den `:global()`-Modifikator verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Jetzt, wo wir eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir anfangen, ein paar Änderungen vorzunehmen. An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren - zum Beispiel das `<h1>`-Element in `App.svelte` ändern, sodass es so aussieht:

```html
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die unter `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf Svelte-Reaktivität

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework automatisch das DOM aktualisieren kann, wenn sich der Zustand einer Komponente ändert.

In Svelte wird die Reaktivität ausgelöst, indem ein neuer Wert einer beliebigen Top-Level-Variablen in einer Komponente zugewiesen wird. Zum Beispiel könnten wir eine `toggleName()`-Funktion in unsere `App`-Komponente aufnehmen und einen Knopf, um sie auszuführen.

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

Wann immer der Button geklickt wird, führt Svelte die `toggleName()`-Funktion aus, die wiederum den Wert der `name`-Variable aktualisiert.

Wie Sie sehen können, wird das `<h1>`-Label automatisch aktualisiert. Hinter den Kulissen hat Svelte den JavaScript-Code erstellt, um das DOM zu aktualisieren, wann immer sich der Wert der `name`-Variable ändert, ohne irgendeinen virtuelles DOM oder einen anderen komplexen Abgleichtsmechanismus zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist die Svelte-Syntax zum Abhören von DOM-Ereignissen.

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

`main.js` beginnt mit dem Import der Svelte-Komponente, die wir verwenden werden. Dann wird es mit `new App` instanziiert, wobei ein Optionsobjekt mit den folgenden Eigenschaften übergeben wird:

- `target`: Das DOM-Element, in dem wir möchten, dass die Komponente gerendert wird, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jedem Prop der `App`-Komponente zugewiesen werden.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien zusammen harmonisch arbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>`-Abschnitt jeder Komponente und compiliert sie in die Datei `public/build/bundle.css`.

Es compiliert auch das Markup und den `<script>`-Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Es fügt auch den Code in `src/main.js` hinzu, um die Funktionen jeder Komponente zu referenzieren.

Schließlich enthält die Datei `public/index.html` die generierten Dateien `bundle.css` und `bundle.js`:

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

Die minimierte Version von `bundle.js` wiegt etwas mehr als 3KB, die den "Svelte-Laufzeit" (nur 300 Zeilen JavaScript-Code) und die `App.svelte` compilierte Komponente enthält. Wie Sie sehen können, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es gibt keine anderen Bibliotheken, die in die Webseite geladen werden.

Dies ist ein viel kleinerer Fußabdruck als kompilierte Bundles von anderen Frameworks. Bedenken Sie, dass es im Fall von Code-Paketen nicht nur die Größe der Dateien ist, die Sie herunterladen müssen und die relevant sind. Dies ist auszuführender Code, der geparst, ausgeführt und im Speicher behalten werden muss. Dies macht wirklich einen Unterschied, insbesondere bei leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Dem Tutorial folgen

In dieser Tutorialreihe werden Sie eine vollständige Webanwendung erstellen. Wir lernen alle Grundlagen über Svelte und auch einige fortgeschrittene Themen.

Sie können einfach den Inhalt lesen, um ein gutes Verständnis von Svelte-Funktionen zu bekommen, aber Sie werden das Beste aus diesem Tutorial herausholen, wenn Sie die App mit uns codieren, während Sie vorgehen. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository mit einem Ordner zur Verfügung, der den Quelltext für die App enthält, wie er zu Beginn jedes Tutorials aussieht.

Svelte bietet auch einen Online-REPL, der ein Spielplatz zum Live-Codieren von Svelte-Apps im Web ist, ohne dass Sie etwas auf Ihrer Maschine installieren müssen. Wir stellen für jeden Artikel einen REPL zur Verfügung, sodass Sie sofort mit dem Codieren beginnen können. Lassen Sie uns ein bisschen mehr darüber sprechen, wie Sie diese Tools verwenden.

### Git verwenden

Das beliebteste Versionskontrollsystem ist Git zusammen mit GitHub, einer Seite, die Hosting für Ihre Repositories bietet und mehrere Werkzeuge zum Arbeiten mit ihnen bereitstellt.

Wir verwenden GitHub, damit Sie den Quellcode für jeden Artikel leicht herunterladen können. Sie können auch den Code erhalten, wie er nach Abschluss des Artikels aussehen sollte, falls Sie sich verlieren.

Nachdem Sie [git installiert haben](https://git-scm.com/downloads), sollten Sie, um das Repository zu klonen, Folgendes ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann am Anfang jedes Artikels können Sie einfach in den entsprechenden Ordner wechseln und die App im Entwicklungsmodus starten, um zu sehen, wie ihr aktueller Zustand sein sollte, so:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste von Links zu nützlichen Leitfäden zusammengestellt — siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie die Dateien nur herunterladen möchten, ohne das Git-Repo zu klonen, können Sie das Degit-Tool wie folgt verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen bestimmten Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit wird kein lokales Git-Repo erstellen, es wird nur die Dateien des angegebenen Ordners herunterladen.

### Den Svelte REPL verwenden

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die es Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen - viele Programmiersprachen bieten einen REPL an.

Svelte's REPL ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen ermöglicht, vollständige Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist der einfachste Weg, um von jedem Computer aus mit Svelte zu spielen, ohne etwas installieren zu müssen. Es wird auch häufig von der Svelte Community verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer äußerst nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Werfen wir einen kurzen Blick auf den Svelte REPL und wie Sie ihn verwenden würden. Er sieht so aus:

![der svelte REPL in Aktion, zeigt Komponenten-Code auf der linken Seite und Ausgabe auf der rechten Seite](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten und auf der rechten Seite die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code ermöglicht es Ihnen, `.svelte`- und `.js`-Dateien zu erstellen und sie neu anzuordnen. Um eine Datei in einem Ordner zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie folgt: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber hinaus haben Sie den Titel des REPLs. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Registerkarten:

  - Die Registerkarte _Ergebnis_ zeigt die Ausgabe Ihrer App und stellt am unteren Rand eine Konsole bereit.
  - Die Registerkarte _JS-Ausgabe_ ermöglicht es Ihnen, den von Svelte generierten JavaScript-Code zu inspizieren und Compiler-Optionen einzustellen.
  - Die Registerkarte _CSS-Ausgabe_ zeigt die von Svelte generierten CSS an.

- Über den Registerkarten finden Sie eine Symbolleiste, die es Ihnen ermöglicht, den Vollbildmodus zu betreten und Ihre App herunterzuladen. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie auch die App forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und _Ihre gespeicherten Apps_ auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und die Ergebnis-Registerkarte aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel hier ist der Link zu einem REPL, der unsere vollständige App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Version von Svelte in der URL angeben können. Dies ist nützlich, wenn Sie Probleme im Zusammenhang mit einer bestimmten Svelte-Version melden.

Wir werden einen REPL am Anfang und Ende jedes Artikels bereitstellen, damit Sie sofort mit uns zusammen codieren können.

> [!NOTE]
> Derzeit kann der REPL keine Ordnernamen richtig handhaben. Wenn Sie das Tutorial auf dem REPL folgen, erstellen Sie einfach alle Ihre Komponenten im Stammverzeichnis. Wenn Sie dann einen Pfad im Code sehen, zum Beispiel `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z.B. `import Todos from './Todos.svelte'`.

## Der Code soweit

### Git

Klonen Sie das GitHub-Repo (wenn Sie es nicht bereits getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann, um zum aktuellen Status der App zu gelangen, führen Sie

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns unter Verwendung des REPL mitzucoden, beginnen Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Damit sind wir am Ende unseres ersten Blicks auf Svelte angelangt, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir anfangen, unsere erste richtige Anwendung zu bauen, eine ToDo-Liste. Bevor wir das tun, fassen wir noch einmal einige der Dinge zusammen, die wir gelernt haben.

In Svelte:

- Wir definieren das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenten-Props werden mit dem Schlüsselwort `export` deklariert.
- Svelte-Komponenten können einfach durch Import der entsprechenden `.svelte`-Datei verwendet werden.
- Die Stile der Komponenten sind gescoped, sodass sie nicht miteinander kollidieren.
- Im Markup-Abschnitt können Sie beliebige JavaScript-Ausdrücke einfügen, indem Sie sie zwischen geschweiften Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Reaktivität wird ausgelöst, indem nur ein neuer Wert einer Top-Level-Variable zugewiesen wird.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
