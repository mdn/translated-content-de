---
title: Einführung in Vue
slug: Learn_web_development/Core/Frameworks_libraries/Vue_getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}

Nun wollen wir Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel werfen wir einen Blick auf die Grundlagen von Vue, lernen, wie man es installiert und ein neues Projekt erstellt, untersuchen die Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie man das Projekt lokal ausführt, und bereiten alles vor, um mit dem Aufbau unseres Beispiels zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) nutzen zu können, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Einrichtung einer lokalen Vue-Entwicklungsumgebung, Erstellung einer Starter-App und Verständnis der Grundlagen ihrer Funktionsweise.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieses Tutorial richtet sich an [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) mit [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) und wurde zuletzt im Mai 2024 überarbeitet.

## Eine klarere Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Einrichtungen für progressive Erweiterungen bietet – im Gegensatz zu vielen anderen Frameworks können Sie Vue verwenden, um bestehendes HTML zu erweitern. Dadurch können Sie Vue als Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) verwenden.

Das heißt aber nicht, dass Sie Vue nicht auch verwenden können, um vollständige Single Page Applications (SPAs) zu schreiben. Dies ermöglicht es Ihnen, Markup vollständig von Vue verwalten zu lassen, was Entwicklererlebnis und Leistung bei der Arbeit mit komplexen Anwendungen verbessern kann. Es ermöglicht Ihnen auch, Bibliotheken für clientseitiges Routing und Statusverwaltung zu nutzen, wenn Sie diese benötigen. Außerdem verfolgt Vue einen "Mittelweg" bei Werkzeugen wie clientseitigem Routing und Statusverwaltung. Während das Vue-Kernteam empfohlene Bibliotheken für diese Funktionen bereitstellt, sind sie nicht direkt in Vue integriert. Dadurch können Sie eine andere Routing-/Statusverwaltungsbibliothek auswählen, die besser zu Ihrer Anwendung passt.

Zusätzlich dazu, dass Sie Vue progressiv in Ihre Anwendungen integrieren können, bietet Vue auch einen progressiven Ansatz zum Schreiben von Markup. Wie die meisten Frameworks ermöglicht Vue es Ihnen, wiederverwendbare Markup-Blöcke über Komponenten zu erstellen. Meistens werden Vue-Komponenten mit einer speziellen HTML-Template-Syntax geschrieben. Wenn Sie mehr Kontrolle benötigen als die HTML-Syntax erlaubt, können Sie JSX oder einfache JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie dieses Tutorial durcharbeiten, möchten Sie vielleicht den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs geöffnet halten, damit Sie darauf zurückgreifen können, wenn Sie mehr Informationen zu einem bestimmten Thema benötigen.

## Installation

Um Vue in einer bestehenden Seite zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Element/script) Elemente auf eine Seite einfügen. Dies ermöglicht es Ihnen, Vue auf bestehenden Seiten zu verwenden, weshalb Vue stolz darauf ist, ein progressives Framework zu sein. Dies ist eine großartige Möglichkeit, ein bestehendes Projekt, das eine Bibliothek wie jQuery verwendet, auf Vue umzustellen. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie Attribute, benutzerdefinierte Komponenten und Datenverwaltung.

- Entwicklungsskript (nicht optimiert, aber enthält Konsolenwarnungen, was ideal für die Entwicklung ist.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktionsskript (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, eine Versionsnummer anzugeben, wenn Sie Vue auf Ihrer Seite einbinden, damit Aktualisierungen des Frameworks Ihre Live-Seite nicht unerwartet beeinträchtigen.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Methode hat jedoch einige Einschränkungen. Um komplexere Apps zu erstellen, sollten Sie das [Vue npm-Paket](https://www.npmjs.com/package/vue) verwenden. Damit können Sie erweiterte Funktionen von Vue nutzen und Werkzeuge wie Vite oder webpack verwenden. Um das Bauen von Apps mit Vue zu vereinfachen, gibt es ein CLI-Tool [create-vue](https://github.com/vuejs/create-vue), das den Entwicklungsprozess optimiert. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Wenn Sie die oben genannten Tools nicht installiert haben, erfahren Sie [hier mehr über die Installation von npm und Node.js](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie yarn bevorzugen:

```bash
yarn create vue@latest
```

Dieser Befehl bietet Ihnen eine Liste von Projektkonfigurationen, die Sie verwenden können. Es gibt einige Standardvorgaben, aber Sie können auch eigene projektspezifische Einstellungen auswählen. Diese Optionen erlauben es Ihnen, Dinge wie TypeScript, Linting, vue-router, Tests und mehr zu konfigurieren. Wir werden die Optionen in den Initialisierungsschritten unten durchgehen.

## Initialisierung eines neuen Projekts

Um verschiedene Funktionen von Vue zu erkunden, werden wir eine Beispiel-App zur Aufgabenverwaltung erstellen. Wir beginnen damit, `create-vue` zu verwenden, um ein neues Grundgerüst für unsere App zu erstellen. 
Wechseln Sie im Terminal mit `cd` zu dem Ort, an dem Sie Ihre Beispiel-App erstellen möchten, und führen Sie `npm create vue@latest` (oder `yarn create vue@latest`, wenn Sie Yarn bevorzugen) aus.

Das interaktive Tool lässt Sie einige Optionen wählen und Sie können mit <kbd>Enter</kbd> fortfahren.
Für dieses Projekt verwenden wir die folgende Konfiguration:

```plain
✔ Project name: … todo-vue
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … No
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit Testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … Yes
? Add Prettier for code formatting? › Yes
```

Nach der Auswahl dieser Optionen ist Ihre Projektstruktur nun konfiguriert und Abhängigkeiten sind in einer `package.json`-Datei definiert. 
Die nächsten Schritte sind die Installation der Abhängigkeiten und das Starten des Servers, und das Tool gibt Ihnen bequem die Befehle an, die Sie dafür benötigen:

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Wenn alles erfolgreich war, sollte das CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die wichtigsten davon sind:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt, sowie einige Metadaten und `eslint`-Konfigurationen.
- `yarn.lock`: Wenn Sie `yarn` als Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Sub-Abhängigkeiten generiert, die Ihr Projekt benötigt.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt VS Code Kontext für Ihre Projektstruktur sowie Unterstützung für die Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vite.dev/) Entwicklungsserver, der Ihr Projekt auf Ihrem lokalen Rechner aufbaut und bereitstellt. 
  Der Vite-Server überwacht Quell-Dateien auf Änderungen und kann das Projekt während der Änderungen automatisch neu laden.
- `public`: Dieses Verzeichnis enthält statische Assets, die während des Builds veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon für Ihre App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite ausgeführt.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.

  - `main.js`: Dies ist der Einstiegspunkt in Ihre Anwendung. Derzeit initialisiert diese Datei Ihre Vue-Anwendung und gibt an, an welches HTML-Element in der `index.html`-Datei Ihre App angehängt werden soll. In dieser Datei registrieren Sie oft globale Komponenten oder zusätzliche Vue-Bibliotheken.
  - `App.vue`: Dies ist die oberste Komponente in Ihrer Vue-App. Siehe unten für eine ausführlichere Erklärung von Vue-Komponenten.
  - `components`: Dieses Verzeichnis ist der Ort, an dem Sie Ihre Komponenten aufbewahren. Derzeit befindet sich dort nur eine Beispielkomponente.
  - `assets`: Dieses Verzeichnis dient der Speicherung von statischen Assets wie CSS und Bildern. Da sich diese Dateien im Quellverzeichnis befinden, können sie von webpack verarbeitet werden, was bedeutet, dass Sie Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden können.

> [!NOTE]
> Abhängig von den Optionen, die Sie beim Erstellen eines neuen Projekts wählen, können weitere Verzeichnisse vorhanden sein (zum Beispiel, wenn Sie einen Router wählen, haben Sie auch ein `views`-Verzeichnis).

## .vue-Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil beim Aufbau von Apps in Vue. Diese Komponenten ermöglichen es Ihnen, eine große Anwendung in diskrete Bausteine zu unterteilen, die separat erstellt und verwaltet werden können und bei Bedarf Daten untereinander austauschen. Diese kleinen Blöcke können Ihnen helfen, Ihr Code besser zu verstehen und zu testen.

Während einige Frameworks dazu ermutigen, Ihr Template-, Logik- und Styling-Code in separate Dateien zu trennen, verfolgt Vue den gegenteiligen Ansatz. Mit [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) erlaubt Vue es Ihnen, Ihre Templates, dazugehörigen Skripte und CSS zusammen in einer einzigen Datei mit der Endung `.vue` zu gruppieren. Diese Dateien werden von einem JS-Build-Tool (wie Vite oder webpack) verarbeitet, was bedeutet, dass Sie in Ihrem Projekt Build-Time-Tools nutzen können. Dadurch können Sie Tools wie Babel, TypeScript, SCSS und mehr verwenden, um anspruchsvollere Komponenten zu erstellen.

Werfen wir einen Blick in den `src`-Ordner des mit dem CLI erstellten Projekts und untersuchen Sie Ihre erste `.vue`-Datei: `App.vue`.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei – Sie werden sehen, dass sie aus drei Teilen besteht: `<template>`, `<script>` und `<style>`, die die Template-, Skript- und Styling-Informationen der Komponente enthalten. Alle Single File Components teilen diese grundlegende Struktur.

`<template>` enthält die gesamte Markup-Struktur und Anzeigelogik Ihrer Komponente. Ihr Template kann jede gültige HTML-Struktur enthalten, sowie einige Vue-spezifische Syntax, die wir später behandeln werden.

> [!NOTE]
> Durch das Setzen des `lang`-Attributes auf dem `<template>`-Tag können Sie die Pug-Template-Syntax anstelle der standardmäßigen HTML-Syntax verwenden — `<template lang="pug">`. Wir bleiben in diesem Tutorial bei der Standard-HTML-Syntax, aber es ist gut zu wissen, dass diese Möglichkeit existiert.

`<script>` enthält alle Nicht-Anzeigelogik Ihrer Komponente. Am wichtigsten ist, dass Sie im `<script>`-Tag Ihre Komponenten lokal registrieren, Komponenten-Eingaben (props) definieren, den lokalen Zustand verwalten, Methoden definieren und mehr. Ihr Build-Schritt wird dieses Objekt verarbeiten und es (zusammen mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion transformieren.

Im Fall von `App.vue` werden zwei Komponenten, `TheWelcome` und `HelloWorld`, durch Importe registriert. Wenn Sie eine Komponente auf diese Weise registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, daher müssen Sie sie in jeder Komponenten-Datei importieren und registrieren, die sie verwendet. Dies ist nützlich für das {{Glossary("Tree_shaking", "Tree Shaking")}} (nicht geladenen Code nicht laden) und Bundle-Splitting (Code nur dann laden, wenn er benötigt wird), da nicht jede Seite Ihrer App unbedingt jede Komponente braucht.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie die [TypeScript](https://www.typescriptlang.org/)-Syntax verwenden möchten, müssen Sie das `lang`-Attribut im `<script>`-Tag so setzen, dass der Compiler erkennt, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Ort, an dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` — wird Vue die Stile auf die Inhalte Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, ermöglicht es Ihnen jedoch, plain CSS zu schreiben.

> [!NOTE]
> Wenn Sie beim Erstellen des Projekts über die CLI einen CSS-Präprozessor auswählen, können Sie ein `lang`-Attribut zum `<style>`-Tag hinzufügen, damit die Inhalte zur Buildzeit verarbeitet werden können. Zum Beispiel wird `<style lang="scss">` es Ihnen erlauben, SCSS-Syntax in Ihrer Stilinformation zu verwenden.

## Die App lokal ausführen

Das `create-vue`-Tool kommt mit Vite als integriertem Entwicklungsserver. Dies ermöglicht es Ihnen, Ihre App lokal auszuführen, damit Sie sie einfach testen können, ohne einen Server von Grund auf konfigurieren zu müssen. Das CLI fügt dem `package.json`-File im Projekt npm-Skripte hinzu, sodass Sie sie einfach ausführen können.

Versuchen Sie in Ihrem Terminal, `npm run dev` auszuführen (oder `yarn dev`, wenn Sie yarn bevorzugen). Ihr Terminal sollte etwas Ähnliches ausgeben:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie in einem neuen Browser-Tab zu der "localhost"-Adresse navigieren, sollten Sie Ihre App sehen (diese Adresse sollte wie oben angegeben `http://localhost:5173/` sein, kann aber je nach Einrichtung variieren). Derzeit sollte die App eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie beim Initialisieren der App mit dem CLI hinzugefügt haben, und einige andere nützliche Links zur Vue-Community und -Ökosystem enthalten.

## Einige Änderungen vornehmen

Lassen Sie uns unsere erste Änderung an der App vornehmen – wir werden das Vue-Logo löschen. Öffnen Sie die `App.vue`-Datei und löschen Sie das [`<img>`](/de/docs/Web/HTML/Element/img)-Element aus dem Template-Bereich:

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

Wenn Ihr Server noch läuft, sollten Sie sehen, dass das Logo fast sofort von der gerenderten Website entfernt wird. Löschen Sie nun auch die `HelloWorld`-Komponente aus unserem Template.

Löschen Sie zunächst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, zeigt Ihr Editor möglicherweise einen Fehler an, weil wir die `HelloWorld`-Komponente registriert, aber nicht verwendet haben. Wir müssen auch die Zeilen aus dem `<script>`-Element entfernen, die die Komponente importieren und registrieren:

Löschen Sie jetzt diese Zeilen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles aus dem `<template>`-Tag entfernen, sehen Sie einen Fehler, der anzeigt, dass `The template requires child element` in Ihrem Editor. Sie können dies beheben, indem Sie etwas Inhalt innerhalb des `<template>`-Tags hinzufügen. Wir können mit einem neuen `<h1>`-Element innerhalb eines `<div>` beginnen. Da wir unten eine Aufgabeverwaltungs-App erstellen werden, setzen wir unsere Überschrift auf "To-Do Liste" wie folgt:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` zeigt nun unsere Überschrift an, wie Sie es erwarten würden.

## Zusammenfassung

Lassen Sie es für den Moment dabei bewenden. Wir haben ein paar Ideen hinter Vue kennengelernt, einige Grundgerüste für unsere Beispiel-App erstellt, sie inspiziert und einige erste Änderungen vorgenommen.

Mit einer grundlegenden Einführung hinter uns werden wir nun weitergehen und unsere Beispiel-App aufbauen, eine einfache Aufgabenverwaltungsanwendung, mit der wir eine Liste von Gegenständen speichern, sie beim Erledigen abhaken und die Liste nach allen, erledigten und unerledigten Aufgaben filtern können.

Im nächsten Artikel werden wir unsere erste benutzerdefinierte Komponente erstellen und uns einige wichtige Konzepte anschauen, wie das Übergeben von Props in die Komponente und das Speichern ihres Datenstatus.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}
