---
title: Erste Schritte mit Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started
l10n:
  sourceCommit: 52a81d8138473b6ac4bec77d0be4261cb0b76d41
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

In diesem Artikel geben wir eine kurze Einführung in das [Svelte-Framework](https://svelte.dev/). Wir werden sehen, wie Svelte funktioniert und was es von den anderen Frameworks und Tools unterscheidet, die wir bisher kennengelernt haben. Dann lernen wir, wie man unsere Entwicklungsumgebung einrichtet, eine Beispiel-App erstellt, die Struktur des Projekts versteht und wie man sie lokal ausführt und für die Produktion vorbereitet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestvoraussetzung ist die Vertrautheit mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen sowie
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          >.
        </p>
        <p>
          Svelte ist ein Compiler, der aus unseren Quellen minimalen und hochoptimierten
          JavaScript-Code generiert; Sie benötigen ein Terminal mit installiertem Node +
          npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichtung einer lokalen Svelte-Entwicklungsumgebung, Erstellung und Bau einer
        Starter-App und Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Ein neuer Ansatz zum Erstellen reichhaltiger Benutzeroberflächen

Svelte bietet einen anderen Ansatz zum Erstellen von Web-Apps als einige der anderen in diesem Modul behandelten Frameworks. Während Frameworks wie React und Vue den Großteil ihrer Arbeit im Browser des Benutzers erledigen, während die App läuft, verlagert Svelte diese Arbeit in einen Kompilierschritt, der nur beim Erstellen der App stattfindet und hochoptimiertes Vanilla JavaScript erzeugt.

Das Ergebnis dieses Ansatzes sind nicht nur kleinere Anwendungsbündel und eine bessere Leistung, sondern auch eine Entwicklungserfahrung, die für Personen mit begrenzter Erfahrung im modernen Tooling-Ökosystem zugänglicher ist.

Svelte orientiert sich eng am klassischen Webentwicklungsmodell von HTML, CSS und JS und fügt nur einige Erweiterungen zu HTML und JavaScript hinzu. Es hat arguably weniger Konzepte und Werkzeuge zu lernen als einige der anderen Framework-Optionen.

Seine Hauptnachteile sind, dass es sich um ein junges Framework handelt — sein Ökosystem ist daher in Bezug auf Tools, Support, Plugins, klare Nutzungsmuster usw. eingeschränkter als bei reiferen Frameworks und es gibt auch weniger Jobmöglichkeiten. Aber seine Vorteile sollten ausreichen, um Sie neugierig zu machen, es zu erkunden.

> [!NOTE]
> Svelte bietet [offizielle TypeScript-Unterstützung](https://svelte.dev/docs/typescript). Wir werden dies später in dieser Tutorial-Serie ansehen.

Wir ermutigen Sie, das [Svelte-Tutorial](https://learn.svelte.dev/) durchzugehen, um eine wirklich schnelle Einführung in die grundlegenden Konzepte zu erhalten, bevor Sie zu dieser Tutorial-Serie zurückkehren, um zu lernen, wie man etwas etwas tiefergehendes aufbaut.

## Anwendungsfälle

Svelte kann verwendet werden, um kleine Teile einer Benutzeroberfläche oder ganze Anwendungen zu entwickeln. Sie können entweder von Grund auf neu anfangen, indem Sie Svelte Ihre Benutzeroberfläche steuern lassen, oder Sie können es schrittweise in eine bestehende Anwendung integrieren.

Nichtsdestotrotz ist Svelte besonders geeignet für folgende Situationen:

- Webanwendungen für leistungsschwache Geräte: Anwendungen, die mit Svelte erstellt wurden, haben kleinere Bundle-Größen, was ideal für Geräte mit langsamen Netzwerkverbindungen und begrenzter Rechenleistung ist. Weniger Code bedeutet weniger KB zum Herunterladen, Parsen, Ausführen und im Speicher zu behalten.
- Hochinteraktive Seiten oder komplexe Visualisierungen: Wenn Sie Datenvisualisierungen erstellen, die eine große Anzahl von DOM-Elementen anzeigen müssen, werden die Leistungsgewinne eines Frameworks ohne Runtime-Overhead sicherstellen, dass Benutzerinteraktionen flüssig und reaktionsschnell sind.
- Onboarding von Personen mit grundlegenden Webentwicklungskentnissen: Svelte hat eine geringe Lernkurve. Webentwickler mit grundlegenden Kenntnissen in HTML, CSS und JavaScript können die Besonderheiten von Svelte leicht in kurzer Zeit erfassen und mit dem Erstellen von Webanwendungen beginnen.

Das Svelte-Team hat [SvelteKit](https://kit.svelte.dev/) eingeführt, ein Framework zur Erstellung von Webanwendungen mit Svelte. Es enthält Funktionen, die in modernen Webframeworks zu finden sind, wie Dateisystem-basiertes Routing, Server-seitiges Rendering (SSR), seiten-spezifische Rendering-Modi, Offlinesupport und mehr. Weitere Informationen zu SvelteKit finden Sie im [offiziellen Tutorial](https://learn.svelte.dev/) und in der [Dokumentation](https://kit.svelte.dev/docs/introduction).

Svelte ist auch für die mobile Entwicklung über [Svelte Native](https://svelte.nativescript.org/) verfügbar.

## Wie funktioniert Svelte?

Als Compiler kann Svelte HTML, CSS und JavaScript erweitern und optimalen JavaScript-Code ohne Runtime-Overhead generieren. Um dies zu erreichen, erweitert Svelte die herkömmlichen Webtechnologien auf folgende Weise:

- Es erweitert HTML, indem es JavaScript-Ausdrücke im Markup erlaubt und Direktiven bereitstellt, um Bedingungen und Schleifen ähnlich den Handlebar-Systemen zu verwenden.
- Es erweitert CSS, indem es einen Scoping-Mechanismus hinzufügt, der es jeder Komponente erlaubt, ihre eigenen Stile zu definieren, ohne das Risiko, mit den Stilen anderer Komponenten in Konflikt zu geraten.
- Es erweitert JavaScript, indem es bestimmte Direktiven der Sprache neu interpretiert, um echte Reaktivität zu erreichen und die Verwaltung des Komponentenstatus zu vereinfachen.

Der Compiler greift nur in sehr spezifischen Situationen und nur im Kontext von Svelte-Komponenten ein. Die Erweiterungen der JavaScript-Sprache sind minimal und sorgfältig ausgewählt, um die JavaScript-Syntax nicht zu brechen oder Entwickler zu entfremden. Tatsächlich werden Sie hauptsächlich mit Vanilla JavaScript arbeiten.

## Erste Schritte mit Svelte

Da Svelte ein Compiler ist, können Sie nicht einfach ein `<script src="svelte.js">`-Tag zu Ihrer Seite hinzufügen und es in Ihre App importieren. Sie müssen Ihre Entwicklungsumgebung einrichten, damit der Compiler seine Arbeit erledigen kann.

### Anforderungen

Um mit Svelte arbeiten zu können, müssen Sie [Node.js](https://nodejs.org/) installiert haben. Es wird empfohlen, die Langzeitunterstützungs-Version (LTS) zu verwenden. Node enthält npm (den Node-Paketmanager) und npx (den Node-Paket-Runner). Beachten Sie, dass Sie auch den Yarn-Paketmanager anstelle von npm verwenden können, aber wir gehen in diesem Tutorial davon aus, dass Sie npm verwenden. Weitere Informationen zu npm und Yarn finden Sie in den [Grundlagen des Paketmanagements](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).

Wenn Sie Windows verwenden, müssen Sie einige Software installieren, um Unix/macOS-Terminal-Parität zu erreichen, um die in diesem Tutorial erwähnten Befehlszeilenbefehle verwenden zu können. Git Bash (das als Teil des [Git für Windows Toolsets](https://gitforwindows.org/) kommt) oder [Windows Subsystem für Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about) sind beide geeignet. Weitere Informationen dazu und zu Terminalbefehlen im Allgemeinen finden Sie im [Crashkurs zur Befehlszeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Siehe auch folgende Informationen:

- ["Über npm"](https://docs.npmjs.com/about-npm/) in der npm-Dokumentation
- ["Einführung von npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) im npm-Blog

### Erstellen Ihrer ersten Svelte-App

Der einfachste Weg, eine Starter-App-Vorlage zu erstellen, besteht darin, einfach die Starter-Vorlagenanwendung herunterzuladen. Sie können dies tun, indem Sie [sveltejs/template](https://github.com/sveltejs/template) auf GitHub besuchen, oder Sie können es vermeiden, sie herunterzuladen und zu entpacken, und einfach [degit](https://github.com/Rich-Harris/degit) verwenden.

Um Ihre Starter-App-Vorlage zu erstellen, führen Sie die folgenden Terminalbefehle aus:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> [!NOTE]
> Degit macht keine Art von Magie — es lässt Sie einfach die neueste Version der Inhalte eines Git-Repos herunterladen und entpacken. Dies ist viel schneller als die Verwendung von `git clone`, da es nicht den gesamten Verlauf des Repos herunterlädt oder ein vollständiges lokales Klonen erstellt.

Nach dem Ausführen von `npm run dev` wird Svelte Ihre Anwendung kompilieren und erstellen. Es startet einen lokalen Server auf `localhost:8080`. Svelte wird auf Dateiänderungen achten und die App automatisch neu kompilieren und aktualisieren, wenn Änderungen an den Quelldateien vorgenommen werden. Ihr Browser zeigt etwas wie das folgende:

![Eine einfache Startseite, die "hello world" sagt, und Links zu den offiziellen Svelte-Tutorials gibt](01-svelte-starter-app.png)

### Anwendungsstruktur

Die Starter-Vorlage hat folgende Struktur:

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

- `package.json` und `package-lock.json`: Enthält Informationen über das Projekt, das Node.js/npm verwendet, um es organisiert zu halten. Sie müssen dieses File nicht verstehen, um dieses Tutorial abzuschließen, jedoch können Sie mehr darüber erfahren, indem Sie über [`package.json` Handhabung](https://docs.npmjs.com/cli/configuring-npm/package-json/) auf npmjs.com lesen; wir sprechen auch darüber in unserem [Grundlagen des Paketmanagements Tutorial](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management).
- `node_modules`: Hier speichert Node die Projektabhängigkeiten. Diese Abhängigkeiten werden nicht für die Produktion gesendet, sie werden nur für Entwicklungszwecke verwendet.
- `.gitignore`: Sagt Git, welche Dateien oder Ordner im Projekt ignoriert werden sollen – nützlich, wenn Sie entscheiden, Ihre App in ein Git-Repo aufzunehmen.
- `rollup.config.js`: Svelte verwendet [rollup.js](https://rollupjs.org/) als Modulpaketierer. Diese Konfigurationsdatei sagt Rollup, wie Ihre App kompiliert und erstellt werden soll. Wenn Sie [webpack](https://webpack.js.org/) bevorzugen, können Sie Ihr Starterprojekt mit `npx degit sveltejs/template-webpack svelte-app` stattdessen erstellen.
- `scripts`: Enthält Setup-Skripte nach Bedarf. Sollte derzeit nur `setupTypeScript.js` enthalten.
  - `setupTypeScript.js`: Dieses Skript richtet die TypeScript-Unterstützung in Svelte ein. Wir werden darüber mehr im letzten Artikel sprechen.

- `src`: Dieses Verzeichnis ist der Ort, wo der Quellcode Ihrer Anwendung liegt — wo Sie den Code für Ihre App erstellen werden.
  - `App.svelte`: Dies ist die oberste Komponente Ihrer App. Bisher rendert es nur die 'Hello World!' Botschaft.
  - `main.js`: Der Einstiegspunkt unserer Anwendung. Es instanziiert einfach die `App`-Komponente und bindet sie an den Body unserer HTML-Seite.

- `public`: Dieses Verzeichnis enthält alle Dateien, die in der Produktion veröffentlicht werden.
  - `favicon.png`: Dies ist das Favicon Ihrer App. Derzeit ist es das Svelte-Logo.
  - `index.html`: Dies ist die Hauptseite Ihrer App. Anfangs ist es nur eine leere HTML-Seite, die die CSS-Dateien und JS-Bundles lädt, die von Svelte generiert wurden.
  - `global.css`: Diese Datei enthält ungekapselte Stile. Es ist eine reguläre CSS-Datei, die auf die gesamte Anwendung angewendet wird.
  - `build`: Dieser Ordner enthält den generierten CSS- und JavaScript-Quellcode.
    - `bundle.css`: Die CSS-Datei, die Svelte aus den definierten Stilen für jede Komponente generiert hat.
    - `bundle.js`: Die JavaScript-Datei, die aus all Ihrem JavaScript-Quellcode kompiliert wurde.

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
> Weitere Informationen zum Component-Format finden Sie in der [Svelte Components-Dokumentation](https://svelte.dev/docs/svelte-components).

Mit diesem Wissen werfen wir einen Blick auf die Datei `src/App.svelte`, die mit der Starter-Vorlage mitgeliefert wurde. Sie sollten etwas in der folgenden Art sehen:

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

Der `<script>`-Block enthält JavaScript, das ausgeführt wird, wenn eine Instanz einer Komponente erstellt wird. Variablen, die auf der obersten Ebene deklariert (oder importiert) werden, sind aus dem Markup der Komponente sichtbar. Top-Level Variablen sind die Weise, wie Svelte den Komponentenstatus behandelt, und sie sind standardmäßig reaktiv. Wir werden später im Detail erklären, was das bedeutet.

```svelte
<script>
  export let name;
</script>
```

Svelte verwendet das [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Schlüsselwort, um eine Variablendeklaration als Eigenschaft (oder Prop) zu kennzeichnen, was bedeutet, dass sie für Verbraucher der Komponente (z. B. andere Komponenten) zugänglich wird. Dies ist ein Beispiel dafür, wie Svelte die JavaScript-Syntax erweitert, um sie nützlicher zu machen, während sie vertraut bleibt.

### Der Markup-Abschnitt

Im Markup-Abschnitt können Sie beliebiges HTML einfügen und zusätzlich können Sie gültige JavaScript-Ausdrücke innerhalb einzelner geschweifter Klammern (`{}`) einfügen. In diesem Fall binden wir den Wert des `name` Props direkt nach dem Text `Hello` ein.

```svelte
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://learn.svelte.dev/">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte unterstützt auch Tags wie `{#if}`, `{#each}`, und `{#await}` – diese Beispiele erlauben es Ihnen, einen Teil des Markups bedingt zu rendern, eine Liste von Elementen zu durchlaufen und mit asynchronen Werten zu arbeiten, jeweils.

### Der `<style>`-Abschnitt

Wenn Sie Erfahrung mit CSS haben, sollte der folgende Ausschnitt Sinn machen:

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

Wir wenden einen Stil auf unser [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Element an. Was passiert mit anderen Komponenten mit `<h1>`-Elementen darin?

In Svelte werden CSS-Stile, die innerhalb eines `<style>`-Blocks einer Komponente definiert sind, nur auf diese Komponente beschränkt sein. Dies funktioniert, indem ausgewählten Elementen eine Klasse hinzugefügt wird, die auf einem Hash der Komponentenstile basiert.

Sie können dies in Aktion sehen, indem Sie `localhost:8080` in einem neuen Browser-Tab öffnen, mit einem Rechts/<kbd>Ctrl</kbd>-Klick auf das _HELLO WORLD!_-Label klicken und _Inspect_ auswählen:

![Svelte Starter-App mit geöffneten Devtools, die Klassen für gekapselte Stile zeigen](02-svelte-component-scoped-styles.png)

Beim Kompilieren der App ändert Svelte unsere `h1`-Stildeklaration in `h1.svelte-1tky8bj` und modifiziert dann jedes `<h1>`-Element in unserer Komponente zu `<h1 class="svelte-1tky8bj">`, sodass die Stile wie erforderlich übernommen werden.

> [!NOTE]
> Sie können dieses Verhalten außer Kraft setzen und Stile auf einen Selektor global anwenden, indem Sie den `:global()`-Modifier verwenden (siehe die [Svelte `<style>`-Dokumentation](https://svelte.dev/docs/svelte-components#style) für weitere Informationen).

## Ein paar Änderungen vornehmen

Da wir nun eine allgemeine Vorstellung davon haben, wie alles zusammenpasst, können wir anfangen, ein paar Änderungen vorzunehmen.
An diesem Punkt können Sie versuchen, Ihre `App.svelte`-Komponente zu aktualisieren — ändern Sie zum Beispiel das `<h1>`-Element in `App.svelte`, sodass es wie folgt aussieht:

```svelte
<h1>Hello {name} from MDN!</h1>
```

Speichern Sie einfach Ihre Änderungen und die App, die unter `localhost:8080` läuft, wird automatisch aktualisiert.

### Ein erster Blick auf die Reaktivität von Svelte

Im Kontext eines UI-Frameworks bedeutet Reaktivität, dass das Framework automatisch das DOM aktualisieren kann, wenn sich der Status einer Komponente ändert.

In Svelte wird Reaktivität durch das Zuweisen eines neuen Werts zu einer Top-Level-Variablen in einer Komponente ausgelöst. Zum Beispiel könnten wir eine `toggleName()` Funktion in unsere `App`-Komponente aufnehmen und einen Button hinzufügen, um sie auszuführen.

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

Wann immer der Button geklickt wird, führt Svelte die `toggleName()` Funktion aus, die wiederum den Wert der `name`-Variable aktualisiert.

Wie Sie sehen, wird das `<h1>`-Label automatisch aktualisiert. Im Hintergrund erstellt Svelte den JavaScript-Code, um das DOM zu aktualisieren, wann immer sich der Wert der Name-Variable ändert, ohne einen virtuellen DOM oder einen anderen komplexen Abgleichsmechanismus zu verwenden.

Beachten Sie die Verwendung von `:` in `on:click`. Das ist die Svelte-Syntax, um DOM-Ereignisse zu hören.

## Betrachten von main.js: Der Einstiegspunkt unserer App

Öffnen wir `src/main.js`, das ist der Ort, wo die `App`-Komponente importiert und benutzt wird. Diese Datei ist der Einstiegspunkt unserer App und sieht anfänglich so aus:

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

`main.js` beginnt, indem es die Svelte-Komponente importiert, die wir verwenden werden. Dann wird es mit `new App` instanziiert und ein Optionsobjekt mit folgenden Eigenschaften übergeben:

- `target`: Das DOM-Element, innerhalb dessen wir die Komponente gerendert haben möchten, in diesem Fall das `<body>`-Element.
- `props`: Die Werte, die jedem Prop der `App` Komponente zugewiesen werden sollen.

## Ein Blick unter die Haube

Wie schafft es Svelte, all diese Dateien reibungslos miteinander arbeiten zu lassen?

Der Svelte-Compiler verarbeitet den `<style>` Abschnitt jeder Komponente und kompiliert sie in die Datei `public/build/bundle.css`.

Es kompiliert auch das Markup und den `<script>` Abschnitt jeder Komponente und speichert das Ergebnis in `public/build/bundle.js`. Es fügt auch den Code in `src/main.js` hinzu, um auf die Features jeder Komponente zu verweisen.

Schließlich beinhaltet die Datei `public/index.html` die generierten `bundle.css` und `bundle.js` Dateien:

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

Die minimierte Version von `bundle.js` wiegt etwas mehr als 3KB, die den "Svelte-Laufzeit" (nur 300 Zeilen JavaScript-Code) und die `App.svelte` kompilierte Komponente enthält. Wie Sie sehen, ist `bundle.js` die einzige JavaScript-Datei, die von `index.html` referenziert wird. Es gibt keine anderen Bibliotheken, die in die Webseite geladen werden.

Dies ist eine viel kleinere Belastung als compilierte Bundles von anderen Frameworks. Beachten Sie, dass es im Fall von Code-Bundles nicht nur die Größe der Dateien ist, die Sie herunterladen müssen, die wichtig ist. Dies ist ausführbarer Code, der analysiert, ausgeführt und im Speicher gehalten werden muss. Deshalb macht dies wirklich einen Unterschied, besonders auf leistungsschwachen Geräten oder CPU-intensiven Anwendungen.

## Dieses Tutorial folgen

In dieser Tutorial-Serie werden Sie eine vollständige Webanwendung bauen. Wir werden alle Grundlagen über Svelte sowie einige fortgeschrittene Themen lernen.

Sie können den Inhalt einfach lesen, um ein gutes Verständnis der Svelte-Funktionen zu bekommen, aber Sie werden am meisten von diesem Tutorial profitieren, wenn Sie mit der Programmierung der App mitmachen, während Sie weitergehen. Um es Ihnen zu erleichtern, jedem Artikel zu folgen, stellen wir ein GitHub-Repository zur Verfügung, das einen Ordner mit dem Quellcode der App, wie sie zu Beginn jedes Tutorials ist, enthält.

Svelte bietet auch einen Online-REPL, der ein Spielplatz für Live-Coding von Svelte-Apps im Web ist, ohne etwas auf Ihrer Maschine installieren zu müssen. Wir stellen zu jedem Artikel einen REPL bereit, damit Sie sofort mit dem Codieren beginnen können. Lassen Sie uns ein wenig mehr darüber sprechen, wie Sie diese Werkzeuge verwenden.

### Git verwenden

Das bekannteste Versionskontrollsystem ist Git, zusammen mit GitHub, einer Webseite, die Hosting für Ihre Repositories bereitstellt und mehrere Tools für die Arbeit damit anbietet.

Wir werden GitHub verwenden, damit Sie den Quellcode für jeden Artikel einfach herunterladen können. Sie können auch den Code erhalten, wie er nach Abschluss des Artikels sein sollte, nur für den Fall, dass Sie sich verloren fühlen.

Nachdem Sie [Git installiert haben](https://git-scm.com/downloads), sollten Sie, um das Repository zu klonen, Folgendes ausführen:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann können Sie zu Beginn jedes Artikels einfach in den entsprechenden Ordner `cd` eingeben und die App im Dev-Modus starten, um zu sehen, wie ihr aktueller Stand sein sollte, wie folgt:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Wenn Sie mehr über Git und GitHub erfahren möchten, haben wir eine Liste mit nützlichen Leitfäden zusammengestellt – siehe [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control).

> [!NOTE]
> Wenn Sie die Dateien nur herunterladen möchten, ohne das Git-Repo zu klonen, können Sie das Degit-Tool so verwenden — `npx degit opensas/mdn-svelte-tutorial`. Sie können auch einen spezifischen Ordner mit `npx degit opensas/mdn-svelte-tutorial/01-getting-started` herunterladen. Degit erstellt kein lokales Git-Repo, sondern lädt einfach die Dateien des angegebenen Ordners herunter.

### Den Svelte REPL verwenden

Ein REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) ist eine interaktive Umgebung, die Ihnen ermöglicht, Befehle einzugeben und sofort die Ergebnisse zu sehen — viele Programmiersprachen bieten einen REPL.

Der Svelte REPL ist viel mehr als das. Es ist ein Online-Tool, das es Ihnen erlaubt, komplette Apps zu erstellen, sie online zu speichern und mit anderen zu teilen.

Es ist die einfachste Möglichkeit, von jeder Maschine aus mit Svelte zu spielen, ohne etwas installieren zu müssen. Es wird auch häufig von der Svelte-Community verwendet. Wenn Sie eine Idee teilen, um Hilfe bitten oder ein Problem melden möchten, ist es immer extrem nützlich, eine REPL-Instanz zu erstellen, die das Problem demonstriert.

Werfen wir einen kurzen Blick auf den Svelte REPL und wie Sie ihn verwenden würden. Er sieht aus wie folgt:

![Der Svelte REPL in Aktion, zeigt Komponentencode auf der linken Seite und Ausgabe auf der rechten Seite](03-svelte-repl-in-action.png)

Um einen REPL zu starten, öffnen Sie Ihren Browser und navigieren Sie zu <https://svelte.dev/repl>.

- Auf der linken Seite des Bildschirms sehen Sie den Code Ihrer Komponenten, und auf der rechten Seite die laufende Ausgabe Ihrer App.
- Die Leiste über dem Code erlaubt es Ihnen, `.svelte` und `.js`-Dateien zu erstellen und sie zu umzuordnen. Um eine Datei innerhalb eines Ordners zu erstellen, geben Sie einfach den vollständigen Pfadnamen an, wie folgt: `components/MyComponent.svelte`. Der Ordner wird automatisch erstellt.
- Darüber ist der Titel des REPL. Klicken Sie darauf, um ihn zu bearbeiten.
- Auf der rechten Seite haben Sie drei Tabs:
  - Der _Result_-Tab zeigt Ihre App-Ausgabe und bietet eine Konsole darunter.
  - Der _JS output_-Tab lässt Sie den JavaScript-Code, der von Svelte generiert wurde, inspizieren und Compiler-Optionen festlegen.
  - Der _CSS output_-Tab zeigt das CSS, das von Svelte generiert wurde.

- Über den Tabs finden Sie eine Toolbar, die Ihnen ermöglicht, in den Vollbildmodus zu wechseln und Ihre App herunterzuladen. Wenn Sie sich mit einem GitHub-Konto anmelden, können Sie die App auch forken und speichern. Sie können auch alle Ihre gespeicherten REPLs sehen, indem Sie auf Ihr GitHub-Benutzerprofil klicken und `Ihre gespeicherten Apps` auswählen.

Wann immer Sie eine Datei im REPL ändern, wird Svelte die App neu kompilieren und den Result-Tab aktualisieren. Um Ihre App zu teilen, teilen Sie die URL. Zum Beispiel ist hier der Link für einen REPL, der unsere komplette App ausführt: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> [!NOTE]
> Beachten Sie, wie Sie die Version von Svelte in der URL angeben können. Dies ist nützlich beim Melden von Problemen, die mit einer spezifischen Svelte-Version zusammenhängen.

Wir werden zu Beginn und Ende jedes Artikels einen REPL bereitstellen, sodass Sie sofort mit uns programmieren können.

> [!NOTE]
> Zurzeit kann der REPL keine Verzeichnisnamen richtig verarbeiten. Wenn Sie das Tutorial im REPL durcharbeiten, erstellen Sie alle Ihre Komponenten einfach im Stammordner. Wenn Sie dann einen Pfad im Code sehen, zum Beispiel `import Todos from './components/Todos.svelte'`, ersetzen Sie ihn einfach durch eine flache URL, z.B. `import Todos from './Todos.svelte'`.

## Der Code bisher

### Git

Klonen Sie das GitHub-Repo (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann um den aktuellen Zustand der App zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu programmieren, starten Sie bei

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Zusammenfassung

Dies bringt uns zum Ende unseres ersten Blicks auf Svelte, einschließlich wie man es lokal installiert, eine Starter-App erstellt und wie die Grundlagen funktionieren. Im nächsten Artikel werden wir beginnen, unsere erste richtige Anwendung, eine To-Do-Liste, zu erstellen. Bevor wir das tun, lassen Sie uns einige der Dinge, die wir gelernt haben, zusammenfassen.

In Svelte:

- Definieren wir das Skript, den Stil und das Markup jeder Komponente in einer einzigen `.svelte`-Datei.
- Komponenten-Props werden mit dem `export` Schlüsselwort deklariert.
- Svelte-Komponenten können einfach durch Importieren der entsprechenden `.svelte`-Datei verwendet werden.
- Komponentenstile sind eingeschränkt, sodass sie nicht miteinander kollidieren.
- Im Markup-Abschnitt können Sie jeden JavaScript-Ausdruck einfügen, indem Sie ihn in geschweifte Klammern setzen.
- Die Top-Level-Variablen einer Komponente bilden ihren Zustand.
- Die Reaktivität wird einfach durch das Zuweisen eines neuen Wertes zu einer Top-Level-Variablen ausgelöst.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
