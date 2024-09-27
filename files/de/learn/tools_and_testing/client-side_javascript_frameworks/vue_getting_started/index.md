---
title: Einstieg in Vue
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Lassen Sie uns nun Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel werfen wir einen kurzen Blick auf die Hintergrundinformationen zu Vue, lernen, wie man es installiert und ein neues Projekt erstellt, untersuchen die Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie man das Projekt lokal ausführt, und bereiten es so vor, dass wir mit dem Bau unseres Beispiels beginnen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Wissen über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeilennutzung</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der Anwendung verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abgebildet wird. Für die Installation und die Nutzung einiger fortgeschrittener Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichten einer lokalen Vue-Entwicklungsumgebung, Erstellen einer Startanwendung und Verstehen der Grundlagen ihrer Funktionsweise.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieses Tutorial richtet sich an [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28), unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) und wurde zuletzt im Mai 2024 überarbeitet.

## Ein klarerer Blick auf Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Funktionen für progressive Verbesserung bietet — im Gegensatz zu vielen anderen Frameworks können Sie Vue verwenden, um bestehendes HTML zu verbessern. Dies ermöglicht es Ihnen, Vue als Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) zu verwenden.

Das gesagt, können Sie Vue auch verwenden, um vollständige Single Page Applications (SPAs) zu schreiben. Dies ermöglicht Ihnen, Markup zu erstellen, das vollständig von Vue verwaltet wird, was die Entwicklererfahrung und Leistung bei der Arbeit mit komplexen Anwendungen verbessern kann. Es ermöglicht Ihnen auch, bei Bedarf Bibliotheken für clientseitiges Routing und Zustandsverwaltung zu nutzen. Darüber hinaus verfolgt Vue einen "Mittelweg" Ansatz für Tools wie clientseitiges Routing und Zustandsverwaltung. Während das Vue-Kernteam vorgeschlagene Bibliotheken für diese Funktionen beibehält, sind sie nicht direkt in Vue integriert. Dies erlaubt es Ihnen, eine andere Routing-/Zustandsverwaltungsbibliothek zu wählen, wenn diese besser zu Ihrer Anwendung passt.

Neben der Möglichkeit, Vue schrittweise in Ihre Anwendungen zu integrieren, bietet Vue auch einen progressiven Ansatz zum Schreiben von Markup. Wie die meisten Frameworks lässt Vue Sie wiederverwendbare Markup-Blöcke über Komponenten erstellen. Meistens werden Vue-Komponenten mit einer speziellen HTML-Vorlagensyntax geschrieben. Wenn Sie mehr Kontrolle benötigen als die HTML-Syntax erlaubt, können Sie JSX oder einfache JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie dieses Tutorial durchlaufen, möchten Sie vielleicht den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs geöffnet halten, damit Sie darauf zurückgreifen können, wenn Sie mehr Informationen zu einem bestimmten Thema benötigen.

## Installation

Um Vue in einer bestehenden Seite zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente auf einer Seite einfügen. Dies ermöglicht es Ihnen, Vue in bestehenden Websites zu nutzen, weshalb Vue sich als progressives Framework rühmt. Dies ist eine großartige Möglichkeit, ein bestehendes Projekt, das eine Bibliothek wie jQuery verwendet, zu Vue zu migrieren. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie die Attribute, benutzerdefinierte Komponenten und Datenverwaltung.

- Entwicklungsskript (nicht optimiert, aber enthält Konsolenwarnungen, was für die Entwicklung großartig ist.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktionsskript (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, eine Versionsnummer anzugeben, wenn Sie Vue in Ihre Website einbinden, damit Framework-Updates Ihre Live-Site nicht unbemerkt beeinträchtigen.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Methode hat jedoch einige Einschränkungen. Zum Erstellen komplexerer Apps sollten Sie das [Vue npm-Paket](https://www.npmjs.com/package/vue) verwenden. Dies ermöglicht Ihnen die Nutzung fortgeschrittener Funktionen von Vue und den Einsatz von Tools wie Vite oder WebPack. Um das Erstellen von Apps mit Vue zu erleichtern, gibt es ein CLI-Scaffold-Tool [create-vue](https://github.com/vuejs/create-vue), das den Entwicklungsprozess vereinfacht. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Falls Sie das oben Genannte nicht installiert haben, finden Sie [hier mehr Informationen zur Installation von npm und Node.js](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie lieber yarn verwenden möchten:

```bash
yarn create vue@latest
```

Dieser Befehl gibt Ihnen eine Liste der Projektkonfigurationen, die Sie verwenden können. Es gibt einige Standardwerte, aber Sie können Ihre eigenen projektspezifischen Einstellungen wählen. Diese Optionen lassen Sie Dinge wie TypeScript, Linting, vue-router, Testing und mehr konfigurieren.
Im Folgenden gehen wir auf die Optionen in den Initialisierungsschritten ein.

## Initialisierung eines neuen Projekts

Um verschiedene Funktionen von Vue zu erkunden, werden wir eine Beispiel-ToDo-Listen-App entwickeln. Wir beginnen damit, `create-vue` zu verwenden, um ein neues Gerüst für unsere App zu erstellen.
In Terminal, `cd` zu dem Ort, an dem Sie Ihre Beispiel-App erstellen möchten, und dann `npm create vue@latest` ausführen (oder `yarn create vue@latest`, wenn Sie Yarn bevorzugen).

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

Nach der Auswahl dieser Optionen wird Ihre Projektstruktur nun konfiguriert und die Abhängigkeiten in einer `package.json`-Datei definiert.
Die nächsten Schritte sind die Installation der Abhängigkeiten und der Start des Servers, und das Tool gibt Ihnen bequem die Befehle aus, die Sie dafür benötigen:

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Wenn alles erfolgreich verlaufen ist, sollte das CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die bedeutendsten sind die folgenden:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt sowie einige Metadaten und `eslint`-Konfigurationen.
- `yarn.lock`: Wenn Sie `yarn` als Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unterabhängigkeiten generiert, die Ihr Projekt benötigt.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt VS Code Kontext für Ihre Projektstruktur und unterstützt die Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vitejs.dev/)-Entwicklungsserver, der Ihr Projekt auf Ihrem lokalen Rechner baut und bereitstellt.
  Der Vite-Server überwacht Quellcodedateien auf Änderungen und kann das Projekt während der Änderungen neu laden.
- `public`: Dieses Verzeichnis enthält statische Ressourcen, die während des Builds veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon Ihrer App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite aus gestartet.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.

  - `main.js`: Dies ist der Einstiegspunkt Ihrer Anwendung. Derzeit initialisiert diese Datei Ihre Vue-Anwendung und kennzeichnet, welches HTML-Element in der `index.html`-Datei Ihre App angeheftet werden soll. In dieser Datei registrieren Sie häufig globale Komponenten oder zusätzliche Vue-Bibliotheken.
  - `App.vue`: Dies ist die oberste Komponente in Ihrer Vue-App.
  - `components`: Dieses Verzeichnis ist der Ort, an dem Sie Ihre Komponenten aufbewahren. Derzeit enthält es nur eine Beispielkomponente.
  - `assets`: Dieses Verzeichnis dient zur Speicherung statischer Ressourcen wie CSS und Bildern. Da sich diese Dateien im Quellverzeichnis befinden, können sie von Webpack verarbeitet werden. Dies bedeutet, dass Sie Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden können.

> [!NOTE]
> Abhängig von den Optionen, die Sie beim Erstellen eines neuen Projekts auswählen, könnten andere Verzeichnisse vorhanden sein (beispielsweise haben Sie eine `views`-Verzeichnis, wenn Sie einen Router wählen).

## .vue Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil beim Erstellen von Apps in Vue. Diese Komponenten lassen Sie eine große Anwendung in diskrete Bausteine aufteilen, die separat erstellt und verwaltet werden können und untereinander Daten austauschen, wenn nötig. Diese kleinen Blöcke können Ihnen helfen, Ihren Code zu verstehen und zu testen.

Während einige Frameworks Sie dazu ermutigen, Ihre Vorlagen-, Logik- und Stilcode in separate Dateien zu trennen, verfolgt Vue den gegenteiligen Ansatz. Mit [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) ermöglicht es Vue, Ihre Vorlagen, das entsprechende Skript und CSS zusammen in einer einzigen Datei mit der Endung `.vue` zu gruppieren. Diese Dateien werden von einem JS-Build-Tool (wie Vite oder Webpack) verarbeitet, was bedeutet, dass Sie Build-Tools in Ihrem Projekt nutzen können. Dies ermöglicht es Ihnen, Tools wie Babel, TypeScript, SCSS und mehr zu verwenden, um komplexere Komponenten zu erstellen.

Lassen Sie uns in den `src`-Ordner des Projekts, das wir mit dem CLI erstellt haben, schauen und Ihre erste `.vue`-Datei untersuchen: `App.vue`.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei — Sie werden sehen, dass sie drei Teile enthält: `<template>`, `<script>`, und `<style>`, die die Template-, Skript- und Stilinformationen der Komponente enthalten. Alle Single File Components teilen diese grundlegende Struktur.

`<template>` enthält die gesamte Markup-Struktur und Anzeige-Logik Ihrer Komponente. Ihre Vorlage kann jedes gültige HTML enthalten sowie einige Vue-spezifische Syntax, die wir später behandeln werden.

> [!NOTE]
> Indem Sie das `lang`-Attribut im `<template>`-Tag setzen, können Sie Pug-Templatesyntax anstelle von Standard-HTML verwenden — `<template lang="pug">`. Wir bleiben in diesem Tutorial bei Standard-HTML, aber es ist gut zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte Nicht-Anzeigelogik Ihrer Komponente. Am wichtigsten ist, dass das `<script>`-Tag dort ist, wo Sie Komponenten lokal registrieren, Komponenteneingaben definieren (Props), den lokalen Zustand verwalten, Methoden definieren und mehr. Ihr Build-Step wird dieses Objekt verarbeiten und es (zusammen mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion umwandeln.

Im Fall von `App.vue` werden zwei Komponenten `TheWelcome` und `HelloWorld` durch Importe registriert. Wenn Sie eine Komponente auf diese Weise registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, daher müssen Sie sie in jeder Komponentendatei importieren und registrieren, die sie verwendet. Dies ist nützlich für [Tree Shaking](/de/docs/Glossary/Tree_shaking) (nicht verwalteter Code wird nicht geladen) und Bundle-Splitting (Code wird nur geladen, wenn benötigt), da nicht jede Seite in Ihrer App unbedingt jede Komponente benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie [TypeScript](https://www.typescriptlang.org/) Syntax verwenden möchten, müssen Sie das `lang`-Attribut im `<script>`-Tag setzen, um dem Compiler anzuzeigen, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Ort, an dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` — wird Vue die Stile auf die Inhalte Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, ermöglicht Ihnen jedoch, einfaches CSS zu schreiben.

> [!NOTE]
> Wenn Sie einen CSS-Präprozessor beim Erstellen des Projekts über das CLI auswählen, können Sie ein `lang`-Attribut zum `<style>`-Tag hinzufügen, sodass die Inhalte zur Build-Zeit verarbeitet werden können. Z.B. `<style lang="scss">` ermöglicht es Ihnen, SCSS-Syntax für Ihre Stilinformationen zu verwenden.

## Lokales Ausführen der App

Das `create-vue`-Tool kommt mit Vite als eingebautem Entwicklungsserver. Dies ermöglicht es Ihnen, Ihre App lokal auszuführen, sodass Sie sie einfach testen können, ohne einen Server von Grund auf konfigurieren zu müssen. Das CLI fügt dem `package.json`-Datei des Projekts Befehle als npm-Scripts hinzu, sodass Sie sie einfach ausführen können.

In Ihrem Terminal versuchen Sie, `npm run dev` auszuführen (oder `yarn dev`, wenn Sie yarn bevorzugen). Ihr Terminal sollte etwas wie das folgende ausgeben:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie die "localhost"-Adresse in einem neuen Browser-Tab aufrufen, sollten Sie Ihre App sehen (diese Adresse sollte `http://localhost:5173/` wie oben angegeben sein, kann aber je nach Ihrer Einrichtung variieren). Damit soll mittgeteilt werden, dass die App derzeit eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie hinzugefügt haben, als Sie die App mit Ihrem CLI initiiert haben, und einige weitere nützliche Links zu der Vue-Community und -Ökosystem enthält.

## Ein paar Änderungen vornehmen

Lassen Sie uns unsere erste Änderung an der App vornehmen — wir werden das Vue-Logo löschen. Öffnen Sie die `App.vue`-Datei und löschen Sie das [`<img>`](/de/docs/Web/HTML/Element/img)-Element aus dem Template-Abschnitt:

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

Wenn Ihr Server noch läuft, sollten Sie sehen, dass das Logo fast sofort von der gerenderten Website entfernt wird. Lassen Sie uns auch die `HelloWorld` Komponente aus unserem Template entfernen.

Löschen Sie zunächst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, zeigt Ihr Editor möglicherweise einen Fehler an, weil wir die `HelloWorld`-Komponente registriert haben, sie aber nicht verwenden. Wir müssen auch die Zeilen aus dem `<script>`-Element entfernen, die die Komponente importieren und registrieren:

Löschen Sie jetzt diese Zeilen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles innerhalb des `<template>`-Tags entfernen, sehen Sie einen Fehler, der sagt `The template requires a child element` in Ihrem Editor.
Sie können dies beheben, indem Sie ein wenig Inhalt in das `<template>`-Tag hinzufügen, und wir können mit einem neuen `<h1>`-Element in einem `<div>` beginnen.
Da wir im Folgenden eine To-Do-Listen-App erstellen werden, setzen wir unsere Überschrift auf "To-Do-Liste" wie folgt:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` wird jetzt unsere Überschrift wie erwartet anzeigen.

## Zusammenfassung

Lassen Sie uns das hier beenden. Wir haben einige der Ideen hinter Vue kennengelernt, ein Gerüst für unsere Beispiel-App erstellt, sie inspiziert und einige erste Änderungen vorgenommen.

Mit einer grundlegenden Einführung gehen wir jetzt weiter und bauen unsere Beispiel-App, eine grundlegende Todo-Listenanwendung, die es uns ermöglicht, eine Liste von Elementen zu speichern, sie beim Erledigen abzuhaken und die Liste nach allen, vollständigen und unvollständigen Aufgaben zu filtern.

Im nächsten Artikel erstellen wir unsere erste benutzerdefinierte Komponente und betrachten einige wichtige Konzepte wie das Übergeben von Props und das Speichern des Datenstatus.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
