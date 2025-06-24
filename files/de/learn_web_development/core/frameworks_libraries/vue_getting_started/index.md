---
title: Erste Schritte mit Vue
slug: Learn_web_development/Core/Frameworks_libraries/Vue_getting_started
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}

Nun stellen wir Vue vor, das dritte unserer Frameworks. In diesem Artikel werfen wir einen Blick auf die Hintergründe von Vue, lernen, wie man es installiert und ein neues Projekt erstellt, untersuchen die Struktur des gesamten Projekts und eines einzelnen Components, sehen, wie man das Projekt lokal ausführt und es vorbereitet, um mit dem Aufbau unseres Beispiels zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line Interface</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben,
          die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax,
          die der zugrundeliegenden DOM-Struktur zugeordnet ist. Für die Installation
          und um einige der fortschrittlicheren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein lokales Vue-Entwicklungsumfeld einzurichten, eine Starter-App zu erstellen und die Grundlagen zu verstehen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieses Tutorial zielt auf [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) ab und wurde zuletzt im Mai 2024 überarbeitet.

## Ein klareres Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Einrichtungen für progressive Verbesserung bietet. Anders als viele andere Frameworks, können Sie Vue verwenden, um vorhandenes HTML zu verbessern. So können Sie Vue als Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) verwenden.

Das heißt, Sie können Vue auch verwenden, um komplette Single-Page-Applications (SPAs) zu schreiben. Dadurch können Sie Markup erstellen, das vollständig von Vue verwaltet wird, was die Entwicklererfahrung und Leistung bei der Arbeit mit komplexen Anwendungen verbessern kann. Es erlaubt ihnen auch, Bibliotheken für clientseitiges Routing und State Management zu nutzen, wenn Sie das benötigen. Darüber hinaus verfolgt Vue einen "Mittelweg" Ansatz bei Werkzeugen wie clientseitigem Routing und State Management. Obwohl das Vue-Kernteam empfohlene Bibliotheken für diese Funktionen bereitstellt, sind sie nicht direkt in Vue gebündelt. Dies ermöglicht es Ihnen, eine andere Routing/-State Management-Bibliothek auszuwählen, wenn sie besser zu Ihrer Anwendung passt.

Neben der Möglichkeit, Vue progressiv in Ihre Anwendungen zu integrieren, bietet Vue auch einen progressiven Ansatz beim Schreiben von Markup. Wie die meisten Frameworks lässt Vue Sie wiederverwendbare Markup-Blöcke über Komponenten erstellen. Die meiste Zeit werden Vue-Komponenten mit einer speziellen HTML-Templatesyntax geschrieben. Wenn Sie mehr Kontrolle benötigen als die HTML-Syntax erlaubt, können Sie JSX- oder plain JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie dieses Tutorial durchgehen, möchten Sie vielleicht den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs offen halten, um darauf zurückgreifen zu können, wenn Sie mehr Informationen zu einem bestimmten Thema wünschen.

## Installation

Um Vue auf einer bestehenden Seite zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente auf einer Seite einfügen. Dies erlaubt es Ihnen, Vue auf bestehenden Seiten zu nutzen, was ein Grund ist, warum Vue sich als progressives Framework stolz bezeichnet. Dies ist eine großartige Option, wenn Sie ein bestehendes Projekt, das eine Bibliothek wie jQuery verwendet, auf Vue migrieren möchten. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie die Attribute, benutzerdefinierte Komponenten und die Datenverwaltung.

- Entwicklerskript (nicht optimiert, enthält aber Konsolenwarnungen, die für die Entwicklung großartig sind.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktionsskript (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, eine Versionsnummer anzugeben, wenn Sie Vue auf Ihrer Website einfügen, so dass Aktualisierungen des Frameworks nicht ohne Ihr Wissen Ihre Live-Site beeinträchtigen.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Vorgehensweise hat jedoch einige Einschränkungen. Um komplexere Apps zu erstellen, sollten Sie das [Vue npm-Paket](https://www.npmjs.com/package/vue) verwenden. Dies ermöglicht es Ihnen, fortgeschrittene Funktionen von Vue zu nutzen und Tools wie Vite oder webpack zu verwenden. Um das Erstellen von Apps mit Vue zu erleichtern, gibt es ein CLI-Scaffolding-Tool [create-vue](https://github.com/vuejs/create-vue), das den Entwicklungsprozess vereinfacht. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Wenn Sie die oben genannte Software nicht installiert haben, erfahren Sie [hier mehr über die Installation von npm und Node.js](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie lieber Yarn verwenden möchten:

```bash
yarn create vue@latest
```

Dieser Befehl gibt Ihnen eine Liste von Projektkonfigurationen, die Sie verwenden können. Es gibt einige Voreinstellungen, aber Sie können Ihre eigenen projektspezifischen Einstellungen wählen. Diese Optionen ermöglichen es Ihnen, Dinge wie TypeScript, Linting, vue-router, Testen und mehr zu konfigurieren.
Wir werden die Optionen in den unten stehenden Initialisierungsschritten durchgehen.

## Neues Projekt initialisieren

Um verschiedene Funktionen von Vue zu erkunden, werden wir eine Beispiel-ToDo-Listen-App erstellen. Wir beginnen damit, `create-vue` zu verwenden, um ein neues Gerüst für unsere App zu erstellen.
Im Terminal navigieren Sie zu dem Ort, an dem Sie Ihre Beispiel-App erstellen möchten, und führen Sie `npm create vue@latest` aus (oder `yarn create vue@latest`, wenn Sie Yarn bevorzugen).

Das interaktive Tool lässt Sie einige Optionen wählen und Sie können fortfahren, indem Sie <kbd>Enter</kbd> drücken.
Für dieses Projekt werden wir die folgende Konfiguration verwenden:

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

Nachdem Sie diese Optionen ausgewählt haben, ist Ihre Projektstruktur nun konfiguriert und Abhängigkeiten sind in einer `package.json`-Datei definiert.
Die nächsten Schritte bestehen darin, die Abhängigkeiten zu installieren und den Server zu starten, und das Tool gibt Ihnen bequem die Befehle aus, die Sie dazu benötigen:

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Wenn alles erfolgreich verlaufen ist, sollte das CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die wichtigsten sind wie folgt:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt sowie einige Metadaten und `eslint`-Konfiguration.
- `yarn.lock`: Wenn Sie `yarn` als Ihren Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unter-Abhängigkeiten generiert, die Ihr Projekt benötigt.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt VS Code Kontext für Ihre Projektstruktur und unterstützt die Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vite.dev/)-Entwicklungsserver, der Ihr Projekt auf Ihrem lokalen Computer erstellt und bereitstellt.
  Der Vite-Server überwacht Quell-Dateien auf Änderungen und kann das Projekt bei Änderungen sofort neu laden.
- `public`: Dieses Verzeichnis enthält statische Assets, die während des Builds veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon für Ihre App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite aus gestartet.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.
  - `main.js`: Dies ist der Einstiegspunkt Ihrer Anwendung. Derzeit initialisiert diese Datei Ihre Vue-Anwendung und gibt an, an welchem HTML-Element in der `index.html`-Datei Ihre App angebunden werden sollte. Diese Datei ist oft der Ort, an dem Sie globale Komponenten oder zusätzliche Vue-Bibliotheken registrieren.
  - `App.vue`: Dies ist die Top-Level-Komponente in Ihrer Vue-App. Unten finden Sie mehr Erklärungen zu Vue-Komponenten.
  - `components`: In diesem Verzeichnis bewahren Sie Ihre Komponenten auf. Derzeit gibt es nur eine Beispielkomponente.
  - `assets`: Dieses Verzeichnis dient zur Speicherung statischer Assets wie CSS und Bilder. Da sich diese Dateien im Quellverzeichnis befinden, können sie von webpack verarbeitet werden. Dies bedeutet, dass Sie Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden können.

> [!NOTE]
> Abhängig von den Optionen, die Sie beim Erstellen eines neuen Projekts auswählen, können weitere Verzeichnisse vorhanden sein (z.B. wenn Sie einen Router wählen, werden Sie auch ein `views`-Verzeichnis haben).

## .vue-Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil beim Erstellen von Apps in Vue. Diese Komponenten ermöglichen es Ihnen, eine große Anwendung in diskrete Bausteine zu unterteilen, die unabhängig erstellt und verwaltet werden können, und Daten zwischen ihnen nach Bedarf zu übertragen. Diese kleinen Blöcke können Ihnen helfen, Ihren Code besser zu verstehen und zu testen.

Während einige Frameworks dazu ermutigen, Ihr Template-, Logik- und Styling-Code in separate Dateien zu trennen, verfolgt Vue den entgegengesetzten Ansatz. Mit [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) lässt Vue Sie Ihre Templates, das dazugehörige Skript und CSS zusammen in einer einzelnen Datei mit der Endung `.vue` gruppieren. Diese Dateien werden von einem JS-Build-Tool (wie Vite oder webpack) verarbeitet, was bedeutet, dass Sie Buildzeit-Werkzeuge in Ihrem Projekt nutzen können. Dadurch können Sie Tools wie Babel, TypeScript, SCSS und mehr verwenden, um anspruchsvollere Komponenten zu erstellen.

Werfen wir einen Blick in den `src`-Ordner des Projekts, das wir mit dem CLI erstellt haben, und überprüfen Sie Ihre erste `.vue`-Datei: `App.vue`.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei — Sie werden sehen, dass sie drei Teile hat: `<template>`, `<script>` und `<style>`, die das Template, die Skripting- und die Styling-Informationen der Komponente enthalten. Alle Single File Components teilen diese gleiche grundlegende Struktur.

`<template>` enthält die gesamte Markupstruktur und die Anzeigelogik Ihrer Komponente. Ihr Template kann jedes gültige HTML enthalten sowie einige Vue-spezifische Syntax, die wir später behandeln werden.

> [!NOTE]
> Indem Sie das `lang`-Attribut auf dem `<template>`-Tag setzen, können Sie Pug-Templatesyntax anstelle von standardmäßigem HTML verwenden — `<template lang="pug">`. Wir bleiben in diesem Tutorial bei standardmäßigem HTML, aber es ist gut zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte Nicht-Anzeigelogik Ihrer Komponente. Am wichtigsten ist, dass Ihr `<script>`-Tag der Ort ist, an dem Sie Komponenten lokal registrieren, Eingaben (Props) definieren, lokalen Status verwalten, Methoden definieren und mehr. Ihr Build-Schritt wird dieses Objekt verarbeiten und es (zusammen mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion umwandeln.

Im Fall von `App.vue` werden zwei Komponenten, `TheWelcome` und `HelloWorld`, durch Importe registriert. Wenn Sie eine Komponente auf diese Weise registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, sodass Sie sie in jeder Komponenten-Datei importieren und registrieren müssen, die sie verwendet. Dies ist nützlich für {{Glossary("Tree_shaking", "Tree Shaking ")}} (nicht verwendeten Code nicht laden) und Bundle-Splitting (Code nur dann laden, wenn nötig), da nicht jede Seite in Ihrer App unbedingt jede Komponente benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie [TypeScript](https://www.typescriptlang.org/)-Syntax verwenden möchten, müssen Sie das `lang`-Attribut auf dem `<script>`-Tag setzen, um dem Compiler zu signalisieren, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Ort, an dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` — wird Vue die Styles auf den Inhalt Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, ermöglicht Ihnen aber, einfaches CSS zu schreiben.

> [!NOTE]
> Wenn Sie beim Erstellen des Projekts über die CLI einen CSS-Präprozessor auswählen, können Sie das `lang`-Attribut auf dem `<style>`-Tag hinzufügen, damit der Inhalt zur Buildzeit verarbeitet werden kann. Zum Beispiel ermöglicht `<style lang="scss">` die Verwendung von SCSS-Syntax in Ihren Stylinginformationen.

## Die App lokal ausführen

Das `create-vue`-Tool kommt mit Vite als integriertem Entwicklungsserver. Dadurch können Sie Ihre App lokal ausführen, sodass Sie sie einfach testen können, ohne einen Server von Grund auf neu einrichten zu müssen. Das CLI fügt dem `package.json`-File des Projekts npm-Skripte hinzu, sodass Sie diese einfach ausführen können.

In Ihrem Terminal versuchen Sie `npm run dev` auszuführen (oder `yarn dev`, wenn Sie Yarn bevorzugen). Ihr Terminal sollte etwas wie das Folgende ausgeben:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie in einem neuen Browser-Tab zur "localhost"-Adresse navigieren, sollten Sie Ihre App sehen (diese Adresse sollte `http://localhost:5173/` wie oben angegeben sein, kann aber je nach Ihrer Konfiguration variieren). Im Moment sollte die App eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie hinzugefügt haben, als Sie die App mit Ihrem CLI-Tool initialisiert haben, und einige weitere nützliche Links zur Vue-Community und Ökosystem enthalten.

## Einige Änderungen vornehmen

Lassen Sie uns die erste Änderung an der App vornehmen — wir werden das Vue-Logo löschen. Öffnen Sie die `App.vue`-Datei, und löschen Sie das [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element aus dem Template-Abschnitt:

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

Wenn Ihr Server noch läuft, sollten Sie sehen, dass das Logo fast augenblicklich aus der gerenderten Seite entfernt wird. Lassen Sie uns auch die `HelloWorld`-Komponente aus unserem Template entfernen.

Löschen Sie zuerst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, zeigt Ihr Editor möglicherweise einen Fehler an, weil wir die `HelloWorld`-Komponente registriert haben, sie aber nicht verwenden. Wir müssen auch die Zeilen aus dem `<script>`-Element entfernen, die die Komponente importieren und registrieren:

Diese Zeilen jetzt löschen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles im `<template>`-Tag entfernen, sehen Sie in Ihrem Editor einen Fehler mit der Meldung `The template requires child element`.
Dies können Sie beheben, indem Sie etwas Inhalt innerhalb des `<template>`-Tags hinzufügen. Wir können mit einem neuen `<h1>`-Element innerhalb eines `<div>` beginnen.
Da wir unten eine ToDo-Listen App erstellen werden, lassen Sie uns unsere Überschrift auf "To-Do Liste" setzen, so:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` zeigt jetzt unsere Überschrift an, wie Sie es erwarten würden.

## Zusammenfassung

Lassen wir es hier für den Moment. Wir haben einige der Ideen hinter Vue kennengelernt, ein Gerüst für unsere Beispiel-App erstellt, es untersucht und einige erste Änderungen vorgenommen.

Mit dieser grundlegenden Einführung gehen wir jetzt weiter und bauen unsere Beispiel-App auf, eine einfache ToDo-Listenanwendung, die es uns ermöglicht, eine Liste von Gegenständen zu speichern, sie abzuhaken, wenn sie erledigt sind, und die Liste nach allen, abgeschlossenen und unvollständigen Aufgaben zu filtern.

Im nächsten Artikel erstellen wir unsere erste benutzerdefinierte Komponente und schauen uns einige wichtige Konzepte wie das Übergeben von Props an sie und das Speichern ihres Datenstatus an.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}
