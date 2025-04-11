---
title: Einstieg in Vue
slug: Learn_web_development/Core/Frameworks_libraries/Vue_getting_started
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}

Nun lassen Sie uns Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel werden wir ein wenig über den Hintergrund von Vue sprechen, lernen, wie man es installiert und ein neues Projekt erstellt, die übergeordnete Struktur des gesamten Projekts sowie eines einzelnen Komponenten studieren, sehen, wie man das Projekt lokal ausführt und es für den Aufbau unseres Beispiels vorbereitet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über den
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax, die auf die zugrunde liegende DOM-Struktur abgebildet wird. Für die Installation und um einige der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Entwicklungsumgebung für Vue einrichten, eine Starter-App erstellen und die Grundlagen ihres Aufbaus verstehen.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Diese Anleitung zielt auf [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) und wurde zuletzt im Mai 2024 überarbeitet.

## Ein klareres Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Möglichkeiten für progressive Verbesserungen bietet — im Gegensatz zu vielen anderen Frameworks können Sie Vue verwenden, um vorhandenes HTML zu verbessern. Dies ermöglicht es Ihnen, Vue als Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) zu verwenden.

Das gesagt, können Sie Vue auch verwenden, um vollständige Single Page Applications (SPAs) zu schreiben. Dies ermöglicht es Ihnen, Markup vollständig von Vue verwalten zu lassen, was die Entwicklererfahrung und Leistung bei der Arbeit mit komplexen Anwendungen verbessern kann. Sie können auch von Bibliotheken für clientseitiges Routing und Zustandsverwaltung profitieren, wenn Sie diese benötigen. Vue verfolgt zudem einen "Mittelweg"-Ansatz für Tools wie clientseitiges Routing und Zustandsverwaltung. Während das Vue-Kernteam empfohlene Bibliotheken für diese Funktionen pflegt, sind sie nicht direkt in Vue gebündelt. Dies ermöglicht es Ihnen, eine andere Routing-/Zustandsverwaltungsbibliothek auszuwählen, wenn diese besser zu Ihrer Anwendung passt.

Neben der Möglichkeit, Vue progressiv in Ihre Anwendungen zu integrieren, bietet Vue auch einen progressiven Ansatz zur Markup-Erstellung. Wie die meisten Frameworks erlaubt es Ihnen Vue, wiederverwendbare Markup-Blöcke über Komponenten zu erstellen. Meistens werden Vue-Komponenten mit einer speziellen HTML-Templatesyntax geschrieben. Wenn Sie mehr Kontrolle benötigen, als die HTML-Syntax erlaubt, können Sie JSX oder einfache JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie diesen Leitfaden durchgehen, möchten Sie vielleicht den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs geöffnet halten, um sich bei Bedarf über ein bestimmtes Thema weiter zu informieren.

## Installation

Um Vue in einer vorhandenen Seite zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente in eine Seite einfügen. Dies ermöglicht es Ihnen, Vue auf bestehenden Websites zu verwenden, weshalb Vue stolz darauf ist, ein progressives Framework zu sein. Dies ist eine großartige Option, wenn ein vorhandenes Projekt, das eine Bibliothek wie jQuery verwendet, auf Vue migriert werden soll. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie z.B. die Attribute, benutzerdefinierte Komponenten und Datenverwaltung.

- Entwicklungs-Script (nicht optimiert, aber beinhaltet Konsolenwarnungen, was für die Entwicklung großartig ist.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktions-Script (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, eine Versionsnummer anzugeben, wenn Sie Vue auf Ihrer Website einbinden, damit eventuelle Framework-Updates Ihre Live-Site nicht ohne Ihr Wissen beeinträchtigen.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Herangehensweise hat jedoch einige Einschränkungen. Um komplexere Apps zu erstellen, möchten Sie das [Vue npm-Paket](https://www.npmjs.com/package/vue) verwenden. Dies ermöglicht Ihnen die Nutzung fortgeschrittener Funktionen von Vue und die Verwendung von Tools wie Vite oder webpack. Um das Erstellen von Apps mit Vue zu erleichtern, gibt es ein CLI-Gerüsts, [create-vue](https://github.com/vuejs/create-vue), um den Entwicklungsprozess zu straffen. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Falls Sie die oben genannten nicht installiert haben, finden Sie [hier weitere Informationen zur Installation von npm und Node.js](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie lieber yarn verwenden möchten:

```bash
yarn create vue@latest
```

Dieser Befehl bietet Ihnen eine Liste von Projektkonfigurationen, die Sie verwenden können. Es gibt einige Standardwerte, aber Sie können Ihre eigenen projektspezifischen Einstellungen auswählen. Diese Optionen erlauben es Ihnen, Dinge wie TypeScript, Linting, vue-router, Tests und mehr zu konfigurieren. Wir werden die Optionen in den Initialisierungsschritten unten durchgehen.

## Ein neues Projekt initialisieren

Um die verschiedenen Funktionen von Vue zu erkunden, werden wir eine Beispiel-Task-Listen-App erstellen. Wir beginnen, indem wir `create-vue` verwenden, um ein neues Gerüst für unsere App zu erstellen. Im Terminal, wechseln Sie in das Verzeichnis, in dem Sie Ihre Beispiel-App erstellen möchten, und führen Sie `npm create vue@latest` aus (oder `yarn create vue@latest`, wenn Sie Yarn bevorzugen).

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

Nachdem Sie diese Optionen gewählt haben, ist Ihre Projektstruktur jetzt konfiguriert und Abhängigkeiten sind in einer `package.json`-Datei definiert.
Die nächsten Schritte sind das Installieren der Abhängigkeiten und das Starten des Servers, und das Tool gibt Ihnen bequem die Befehle aus, die Sie dafür benötigen:

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Wenn alles erfolgreich war, sollte die CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die wichtigsten davon sind die folgenden:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt sowie einige Metadaten und `eslint`-Konfiguration.
- `yarn.lock`: Wenn Sie `yarn` als Ihren Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unterabhängigkeiten generiert, die Ihr Projekt benötigt.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig), die Kontext für VS Code über Ihre Projektstruktur bietet und die Autovervollständigung unterstützt.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vite.dev/)-Entwicklungsserver, der Ihr Projekt auf Ihrer lokalen Maschine erstellt und bereitstellt. Der Vite-Server überwacht Quelldateien auf Änderungen und kann das Projekt bei Änderungen automatisch neu laden.
- `public`: Dieses Verzeichnis enthält statische Assets, die während des Build-Prozesses veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon für Ihre App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite aus ausgeführt.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.

  - `main.js`: Dies ist der Einstiegspunkt in Ihre Anwendung. Derzeit initialisiert diese Datei Ihre Vue-Anwendung und definiert, welchem HTML-Element in der `index.html`-Datei Ihre App zugeordnet werden soll. In dieser Datei registrieren Sie häufig globale Komponenten oder zusätzliche Vue-Bibliotheken.
  - `App.vue`: Dies ist die übergeordnete Komponente in Ihrer Vue-App. Weitere Erklärungen zu Vue-Komponenten folgen unten.
  - `components`: Dieses Verzeichnis ist, wo Sie Ihre Komponenten aufbewahren. Derzeit hat es nur eine Beispielkomponente.
  - `assets`: Dieses Verzeichnis dient zur Speicherung statischer Assets wie CSS und Bilder. Da sich diese Dateien im Quellverzeichnis befinden, können sie von webpack verarbeitet werden. Das bedeutet, dass Sie Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden können.

> [!NOTE]
> Abhängig von den Optionen, die Sie beim Erstellen eines neuen Projekts ausgewählt haben, könnten weitere Verzeichnisse vorhanden sein (zum Beispiel, wenn Sie einen Router wählen, haben Sie auch ein `views`-Verzeichnis).

## .vue Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil des Aufbaus von Apps in Vue. Diese Komponenten ermöglichen es Ihnen, eine große Anwendung in diskrete Bausteine zu zerlegen, die separat erstellt und verwaltet werden können und bei Bedarf Daten untereinander übertragen. Diese kleinen Blöcke helfen Ihnen, Ihren Code zu verstehen und zu testen.

Während einige Frameworks Sie dazu ermutigen, Ihre Template-, Logik- und Stilcode in separaten Dateien zu speichern, verfolgt Vue den entgegengesetzten Ansatz. Mit [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) können Sie Ihre Templates, das entsprechende Skript und CSS alle zusammen in einer einzigen Datei mit der Endung `.vue` gruppieren. Diese Dateien werden von einem JS-Build-Tool (wie Vite oder webpack) verarbeitet, was bedeutet, dass Sie Build-Time-Tools in Ihrem Projekt nutzen können. Dies ermöglicht es Ihnen, Werkzeuge wie Babel, TypeScript, SCSS und mehr zu verwenden, um anspruchsvollere Komponenten zu erstellen.

Schauen wir in den `src`-Ordner des Projekts, das wir mit der CLI erstellt haben, und inspizieren Sie Ihre erste `.vue`-Datei: `App.vue`.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei — Sie werden sehen, dass sie drei Teile hat: `<template>`, `<script>` und `<style>`, die die Template-, Skript- und Styling-Informationen der Komponente enthalten. Alle Single File Components haben diese grundlegende Struktur.

`<template>` enthält die gesamte Markup-Struktur und Anzeige-Logik Ihrer Komponente. Ihr Template kann jedes gültige HTML sowie einige Vue-spezifische Syntax enthalten, die wir später besprechen werden.

> [!NOTE]
> Durch das Setzen des `lang`-Attributs auf dem `<template>`-Tag können Sie die Pug-Templatesyntax anstelle von standardmäßigem HTML verwenden — `<template lang="pug">`. Wir bleiben in diesem Tutorial bei standardmäßigem HTML, aber es ist gut zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte Nicht-Anzeige-Logik Ihrer Komponente. Am wichtigsten ist, dass Ihre `<script>`-Tag der Ort ist, an dem Sie Komponenten lokal registrieren, Komponenteneingaben (Props) definieren, den lokalen Zustand verwalten, Methoden definieren und mehr. Ihr Build-Schritt wird dieses Objekt verarbeiten und es (zusammen mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion umwandeln.

Im Fall von `App.vue` werden zwei Komponenten, `TheWelcome` und `HelloWorld`, durch Importe registriert. Wenn Sie auf diese Weise eine Komponente registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, daher müssen Sie sie in jeder Komponenten-Datei importieren und registrieren, die sie verwendet. Dies ist nützlich für {{Glossary("Tree_shaking", "Tree shaking")}} (nicht geladenen Code nicht laden) und Bundle-Splitting (Code nur bei Bedarf laden), da nicht jede Seite in Ihrer App jede Komponente benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie die [TypeScript](https://www.typescriptlang.org/)-Syntax verwenden möchten, müssen Sie im `<script>`-Tag das `lang`-Attribut setzen, um dem Compiler mitzuteilen, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Ort, an dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` — wird Vue die Stile auf den Inhalt Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, ermöglicht Ihnen aber einfaches Schreiben von normalem CSS.

> [!NOTE]
> Wenn Sie einen CSS-Präprozessor beim Erstellen des Projekts über die CLI auswählen, können Sie dem `<style>`-Tag ein `lang`-Attribut hinzufügen, sodass der Inhalt zur Build-Zeit verarbeitet werden kann. Zum Beispiel ermöglicht `<style lang="scss">` Ihnen die Verwendung von SCSS-Syntax in Ihren Stilinformationen.

## Die App lokal ausführen

Das `create-vue`-Tool kommt mit Vite als integriertem Entwicklungsserver. Dies ermöglicht Ihnen, Ihre App lokal auszuführen, sodass Sie sie einfach testen können, ohne einen Server von Grund auf konfigurieren zu müssen. Die CLI fügt Befehle als npm-Skripte in die `package.json`-Datei des Projekts ein, sodass Sie sie einfach ausführen können.

Versuchen Sie in Ihrem Terminal, `npm run dev` auszuführen (oder `yarn dev`, wenn Sie yarn bevorzugen). Ihr Terminal sollte etwas Folgendes ausgeben:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie sich in einem neuen Browser-Tab zum "localhost"-Adresse bewegen, sollten Sie Ihre App sehen (diese Adresse sollte `http://localhost:5173/` sein, wie oben angegeben, kann aber basierend auf Ihrer Einrichtung variieren). Im Moment sollte die App eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie beim Initialisieren der App mit Ihrem CLI hinzugefügt haben, und einige weitere nützliche Links zur Vue-Community und -Ökosystem enthalten.

## Ein paar Änderungen vornehmen

Lassen Sie uns die erste Änderung an der App vornehmen — wir entfernen das Vue-Logo. Öffnen Sie die `App.vue`-Datei und löschen Sie das [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element aus dem Template-Bereich:

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

Wenn Ihr Server noch läuft, sollten Sie sehen, dass das Logo fast sofort von der gerenderten Seite entfernt wird. Lassen Sie uns auch die `HelloWorld`-Komponente aus unserem Template entfernen.

Löschen Sie zuerst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, zeigt Ihr Editor möglicherweise einen Fehler an, da wir die `HelloWorld`-Komponente registriert haben, sie aber nicht verwenden. Wir müssen auch die Zeilen innerhalb des `<script>`-Elements entfernen, die die Komponente importieren und registrieren:

Löschen Sie nun diese Zeilen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles innerhalb des `<template>`-Tags entfernen, sehen Sie einen Fehler in Ihrem Editor, der `Das Template benötigt ein Kindelement` besagt. Dies können Sie beheben, indem Sie etwas Inhalt innerhalb des `<template>`-Tags hinzufügen, und wir können mit einem neuen `<h1>`-Element innerhalb eines `<div>` beginnen. Da wir weiter unten eine Aufgabenlisten-App erstellen werden, setzen wir unsere Überschrift auf "To-Do Liste" so:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` wird nun unsere Überschrift wie erwartet anzeigen.

## Zusammenfassung

Lassen Sie uns hier vorerst Schluss machen. Wir haben einige Ideen hinter Vue kennengelernt, eine Struktur für unsere Beispiel-App geschaffen, sie inspiziert und einige vorläufige Änderungen vorgenommen.

Mit einer grundlegenden Einführung können wir nun weitergehen und unsere Beispiel-App, eine grundlegende Aufgabenlistenanwendung, die es uns ermöglicht, eine Liste von Aufgaben zu speichern, sie bei Abschluss abzuhaken und die Liste nach allen, abgeschlossenen und unvollständigen Aufgaben zu filtern, aufbauen.

Im nächsten Artikel werden wir unsere erste benutzerdefinierte Komponente erstellen und uns einige wichtige Konzepte wie das Übergeben von Props an diese und das Speichern ihres Datenzustands anschauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}
