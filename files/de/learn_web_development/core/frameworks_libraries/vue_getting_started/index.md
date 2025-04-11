---
title: Einstieg in Vue
slug: Learn_web_development/Core/Frameworks_libraries/Vue_getting_started
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}

Nun stellen wir Vue vor, das dritte unserer Frameworks. In diesem Artikel werfen wir einen Blick auf einen kleinen Hintergrund zu Vue, lernen, wie man es installiert und ein neues Projekt erstellt, untersuchen die Struktur des gesamten Projekts und einer einzelnen Komponente auf hoher Ebene, sehen, wie man das Projekt lokal ausführt, und bereiten es darauf vor, unser Beispiel zu bauen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die der zugrunde liegenden DOM-Struktur entspricht. Für die Installation und Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Eine lokale Vue-Entwicklungsumgebung einzurichten, eine Starter-App zu erstellen und die Grundlagen zu verstehen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieses Tutorial zielt auf [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) ab, unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) und wurde zuletzt im Mai 2024 überarbeitet.

## Ein klarer Blick auf Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Funktionen für progressive Verbesserung bietet — im Gegensatz zu vielen anderen Frameworks können Sie Vue verwenden, um bestehendes HTML zu verbessern. Dies ermöglicht Ihnen, Vue als Ersatzbibliothek für eine Bibliothek wie [jQuery](https://jquery.com/) zu verwenden.

Das heißt, Sie können Vue auch nutzen, um komplette Single Page Applications (SPAs) zu schreiben. Dadurch können Sie Markup erstellen, das vollständig von Vue verwaltet wird, was die Entwicklererfahrung und Leistung bei der Arbeit mit komplexen Anwendungen verbessern kann. Es erlaubt Ihnen auch, Bibliotheken für clientseitiges Routing und Statusverwaltung zu nutzen, wenn Sie diese benötigen. Darüber hinaus verfolgt Vue einen "Mittelweg" bei der Tooling wie clientseitigem Routing und Statusverwaltung. Während das Vue-Kernteam empfohlene Bibliotheken für diese Funktionen pflegt, sind sie nicht direkt in Vue integriert. Dies ermöglicht es Ihnen, eine andere Routing-/Statusverwaltungsbibliothek auszuwählen, wenn diese besser zu Ihrer Anwendung passen.

Zusätzlich zu der Möglichkeit, Vue progressiv in Ihre Anwendungen zu integrieren, bietet Vue auch einen progressiven Ansatz zur Erstellung von Markup. Wie die meisten Frameworks ermöglicht es Ihnen Vue, wiederverwendbare Markup-Blöcke über Komponenten zu erstellen. Meistens werden Vue-Komponenten mithilfe einer speziellen HTML-Template-Syntax geschrieben. Wenn Sie mehr Kontrolle benötigen, als die HTML-Syntax erlaubt, können Sie JSX oder einfache JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie durch dieses Tutorial arbeiten, möchten Sie vielleicht den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs offen halten, damit Sie nachschlagen können, wenn Sie mehr Informationen zu einem bestimmten Thema benötigen.

## Installation

Um Vue in einer bestehenden Website zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente auf eine Seite setzen. Dies ermöglicht Ihnen, Vue auf bestehenden Websites zu verwenden, weshalb Vue stolz darauf ist, ein progressives Framework zu sein. Dies ist eine großartige Option, wenn Sie ein bestehendes Projekt mit einer Bibliothek wie jQuery zu Vue migrieren. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie die Attribute, benutzerdefinierte Komponenten und Datenverwaltung.

- Entwicklungsskript (nicht optimiert, aber einschließlich Konsolenwarnungen, was für die Entwicklung großartig ist.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktionsskript (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, eine Versionsnummer anzugeben, wenn Sie Vue auf Ihrer Website einbinden, damit eventuelle Framework-Updates Ihre Live-Site nicht ohne Ihr Wissen beeinträchtigen.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Vorgehensweise hat jedoch einige Einschränkungen. Um komplexere Apps zu erstellen, sollten Sie das [Vue npm-Paket](https://www.npmjs.com/package/vue) verwenden. Dadurch können Sie erweiterte Funktionen von Vue nutzen und Tools wie Vite oder webpack verwenden. Um das Erstellen von Apps mit Vue zu erleichtern, gibt es ein CLI-Scaffold-Tool [create-vue](https://github.com/vuejs/create-vue), um den Entwicklungsprozess zu straffen. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Wenn Sie die obigen Werkzeuge nicht installiert haben, erfahren Sie [hier mehr über die Installation von npm und Node.js](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie lieber Yarn verwenden möchten:

```bash
yarn create vue@latest
```

Dieser Befehl wird Ihnen eine Liste von Projektkonfigurationen geben, die Sie verwenden können. Es gibt einige Standardoptionen, aber Sie können Ihre eigenen projektspezifischen Einstellungen auswählen. Diese Optionen ermöglichen es Ihnen, Dinge wie TypeScript, Linting, vue-router, Testen und mehr zu konfigurieren. Wir werden die Optionen in den Initialisierungsschritten unten durchgehen.

## Initialisierung eines neuen Projekts

Um verschiedene Funktionen von Vue zu erforschen, werden wir eine Beispiel-To-Do-Listen-App entwickeln. Wir beginnen, indem wir `create-vue` verwenden, um ein neues Gerüst für unsere App zu erstellen.
Im Terminal, navigieren Sie zu dem Ort, an dem Sie Ihre Beispiel-App erstellen möchten, und führen Sie dann `npm create vue@latest` (oder `yarn create vue@latest`, wenn Sie lieber Yarn verwenden) aus.

Das interaktive Tool lässt Sie einige Optionen auswählen, und Sie können fortfahren, indem Sie <kbd>Enter</kbd> drücken.
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

Nachdem Sie diese Optionen ausgewählt haben, ist Ihre Projektstruktur jetzt konfiguriert und Abhängigkeiten sind in einer `package.json`-Datei definiert.
Die nächsten Schritte sind das Installieren der Abhängigkeiten und das Starten des Servers, und das Tool druckt bequem die Befehle aus, die Sie dazu benötigen:

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Wenn alles erfolgreich verlaufen ist, sollte die CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die wichtigsten sind:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt sowie einige Metadaten und `eslint`-Konfigurationen.
- `yarn.lock`: Wenn Sie `yarn` als Ihr Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unterabhängigkeiten, die Ihr Projekt benötigt, generiert.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt VS Code Kontext für Ihre Projektstruktur und unterstützt die Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vite.dev/)-Entwicklungsserver, der Ihr Projekt auf Ihrem lokalen Rechner baut und bereitstellt.
  Der Vite-Server überwacht Quellcodedateien auf Änderungen und kann das Projekt hot-reloaden, während Sie Änderungen vornehmen.
- `public`: Dieses Verzeichnis enthält statische Assets, die während des Builds veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon für Ihre App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite aus gestartet.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.

  - `main.js`: Dies ist der Einstiegspunkt Ihrer Anwendung. Aktuell initialisiert diese Datei Ihre Vue-Anwendung und gibt an, an welches HTML-Element in der Datei `index.html` Ihre App angefügt werden soll. Diese Datei ist oft dort, wo Sie globale Komponenten oder zusätzliche Vue-Bibliotheken registrieren.
  - `App.vue`: Dies ist die übergeordnete Komponente in Ihrer Vue-App. Sehen Sie unten für weitere Erklärungen zu Vue-Komponenten.
  - `components`: Dieses Verzeichnis ist, wo Sie Ihre Komponenten aufbewahren. Derzeit enthält es nur eine Beispielkomponente.
  - `assets`: Dieses Verzeichnis dient zur Speicherung statischer Assets wie CSS und Bilder. Da sich diese Dateien im Quellverzeichnis befinden, können sie von webpack verarbeitet werden. Das bedeutet, Sie können Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden.

> [!NOTE]
> Abhängig von den Optionen, die Sie bei der Erstellung eines neuen Projekts auswählen, können andere Verzeichnisse vorhanden sein (zum Beispiel, wenn Sie einen Router wählen, werden Sie auch ein `views`-Verzeichnis haben).

## .vue-Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil beim Bauen von Apps in Vue. Diese Komponenten ermöglichen es Ihnen, eine große Anwendung in eigenständige Bausteine aufzuteilen, die separat erstellt und verwaltet werden können, und die Daten nach Bedarf zwischen ihnen zu übertragen. Diese kleinen Blöcke können Ihnen helfen, Ihren Code zu verstehen und zu testen.

Während einige Frameworks Sie ermutigen, Ihr Template, Ihre Logik und Ihre Style-Codes in separate Dateien zu trennen, verfolgt Vue den gegenteiligen Ansatz. Mithilfe von [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) erlaubt es Ihnen Vue, Ihre Templates, das dazugehörige Skript und CSS gemeinsam in einer einzigen Datei mit der Endung `.vue` zu gruppieren. Diese Dateien werden von einem JS-Build-Tool (wie Vite oder webpack) verarbeitet, was bedeutet, dass Sie in Ihrem Projekt von Build-Tooling profitieren können. Auf diese Weise können Sie Tools wie Babel, TypeScript, SCSS und mehr verwenden, um anspruchsvollere Komponenten zu erstellen.

Schauen wir in das `src`-Verzeichnis des Projekts, das wir mit der CLI erstellt haben, und untersuchen wir Ihre erste `.vue`-Datei: `App.vue`.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei – Sie werden sehen, dass sie aus drei Teilen besteht: `<template>`, `<script>` und `<style>`, die die Template-, Skript- und Style-Informationen der Komponente enthalten. Alle Single File Components weisen dieselbe grundlegende Struktur auf.

`<template>` enthält die gesamte Markup-Struktur und Anzeigelogik Ihrer Komponente. Ihr Template kann jedes gültige HTML sowie einige Vue-spezifische Syntax enthalten, die wir später behandeln werden.

> [!NOTE]
> Durch Einstellen des `lang`-Attributs im `<template>`-Tag können Sie die Pug-Template-Syntax anstelle von Standard-HTML verwenden — `<template lang="pug">`. Wir bleiben in diesem Tutorial bei Standard-HTML, aber es ist gut zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte Nicht-Anzeigelogik Ihrer Komponente. Am wichtigsten ist, dass Ihr `<script>`-Tag dort ist, wo Sie Komponenten lokal registrieren, Komponenten-Eingaben (Props) definieren, den lokalen Status verwalten, Methoden definieren und mehr. Ihr Build-Schritt wird dieses Objekt verarbeiten und es (mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion transformieren.

Im Fall von `App.vue` werden zwei Komponenten `TheWelcome` und `HelloWorld` durch Importe registriert. Wenn Sie eine Komponente auf diese Weise registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, daher müssen Sie sie in jeder Komponentendatei importieren und registrieren, die sie verwendet. Dies ist nützlich für {{Glossary("Tree_shaking", "Tree shaking")}} (nicht geladenen Code nicht laden) und Bundle-Splitting (Code nur bei Bedarf laden), da nicht jede Seite in Ihrer App unbedingt jede Komponente benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie die [TypeScript](https://www.typescriptlang.org/)-Syntax verwenden möchten, müssen Sie das `lang`-Attribut im `<script>`-Tag setzen, um dem Compiler zu signalisieren, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Bereich, in dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` — wird Vue die Styles auf die Inhalte Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, ermöglicht es Ihnen jedoch, einfach plain CSS zu schreiben.

> [!NOTE]
> Wenn Sie einen CSS-Präprozessor auswählen, wenn Sie das Projekt über die CLI erstellen, können Sie ein `lang`-Attribut zum `<style>`-Tag hinzufügen, sodass der Inhalt zur Build-Zeit verarbeitet werden kann. Zum Beispiel wird `<style lang="scss">` Ihnen ermöglichen, SCSS-Syntax in Ihren Styling-Informationen zu verwenden.

## Die App lokal ausführen

Das `create-vue`-Tool wird mit Vite als integriertem Entwicklungsserver geliefert. Dadurch können Sie Ihre App lokal ausführen, sodass Sie sie leicht testen können, ohne einen Server von Grund auf neu konfigurieren zu müssen. Die CLI fügt Befehle zur `package.json`-Datei des Projekts als npm-Skripte hinzu, damit Sie sie einfach ausführen können.

Versuchen Sie in Ihrem Terminal, `npm run dev` (oder `yarn dev`, wenn Sie lieber Yarn verwenden) auszuführen. Ihr Terminal sollte etwas Ähnliches ausgeben wie das Folgende:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie in einem neuen Browser-Tab die Adresse "localhost" aufrufen, sollten Sie Ihre App sehen (diese Adresse sollte `http://localhost:5173/` sein, wie oben angegeben, kann aber je nach Konfiguration variieren). Derzeit sollte die App eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie bei der Initialisierung der App mit Ihrer CLI hinzugefügt haben, und einige andere nützliche Links zur Vue-Community und -Ökosystem enthalten.

## Einige Änderungen vornehmen

Lassen Sie uns unsere erste Änderung an der App vornehmen – wir werden das Vue-Logo entfernen. Öffnen Sie die `App.vue`-Datei und löschen Sie das [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element aus dem Vorlagenbereich:

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

Wenn Ihr Server noch läuft, sollten Sie das Logo fast sofort von der gerenderten Website entfernt sehen. Lassen Sie uns auch die `HelloWorld`-Komponente aus unserem Template entfernen.

Löschen Sie zunächst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, zeigt Ihr Editor möglicherweise einen Fehler an, weil wir die `HelloWorld`-Komponente registriert haben, sie aber nicht verwenden. Wir müssen auch die Zeilen aus dem `<script>`-Element entfernen, die die Komponente importieren und registrieren:

Löschen Sie jetzt diese Zeilen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles innerhalb des `<template>`-Tags entfernen, sehen Sie einen Fehler, der besagt `Das Template benötigt ein Kindelement` in Ihrem Editor.
Sie können dies beheben, indem Sie einige Inhalte innerhalb des `<template>`-Tags hinzufügen, und wir können mit einem neuen `<h1>`-Element innerhalb eines `<div>` beginnen.
Da wir unten eine To-Do-Listen-App erstellen werden, legen wir unsere Überschrift auf "To-Do-Liste" fest, wie folgt:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` wird nun unsere Überschrift anzeigen, so wie Sie es erwarten würden.

## Zusammenfassung

Lassen Sie uns dies für den Moment hier belassen. Wir haben einige der Ideen hinter Vue kennengelernt, ein Gerüst für unsere Beispiel-App erstellt, sie untersucht und einige vorläufige Änderungen vorgenommen.

Mit einer grundlegenden Einführung abgeschlossen, werden wir nun weitergehen und unsere Beispiel-App aufbauen, eine einfache To-Do-Listen-Anwendung, die es uns ermöglicht, eine Liste von Elementen zu speichern, sie abzuhaken, wenn sie erledigt sind, und die Liste nach allen, abgeschlossenen und unvollständigen Aufgaben zu filtern.

Im nächsten Artikel werden wir unsere erste benutzerdefinierte Komponente erstellen und uns einige wichtige Konzepte ansehen, wie das Übergeben von Props an sie und das Speichern ihres Datenstatus.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}
