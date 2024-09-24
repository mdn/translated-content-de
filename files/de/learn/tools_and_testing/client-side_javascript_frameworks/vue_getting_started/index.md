---
title: Einstieg mit Vue
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
l10n:
  sourceCommit: 3d2cd62710699f455811feb389b474e90218605d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun lassen Sie uns Vue einführen, das dritte unserer Frameworks. In diesem Artikel schauen wir uns ein wenig Hintergrundwissen zu Vue an, lernen, wie man es installiert und ein neues Projekt erstellt, untersuchen die grundlegende Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie man das Projekt lokal ausführt, und bereiten es darauf vor, mit dem Bau unseres Beispiels zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          Wissen über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortschrittlicheren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit node + npm installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Vue-Entwicklungsumgebung einrichten, eine Starter-App erstellen und die Grundlagen verstehen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieses Tutorial richtet sich an [Vue-Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) und wurde zuletzt im Mai 2024 überarbeitet.

## Eine klarere Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Einrichtungen für progressive Verbesserung bietet — im Gegensatz zu vielen anderen Frameworks können Sie mit Vue bestehendes HTML verbessern. So können Sie Vue als Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) verwenden.

Das heißt, Sie können Vue auch verwenden, um komplette Single Page Applications (SPAs) zu schreiben. Dies ermöglicht Ihnen die Erstellung von Markup, das vollständig von Vue verwaltet wird, was die Entwicklererfahrung und Leistung bei komplexen Anwendungen verbessern kann. Es ermöglicht Ihnen auch, Bibliotheken für clientseitiges Routing und Zustandsverwaltung zu nutzen, wenn Sie diese benötigen. Darüber hinaus verfolgt Vue einen "Mittelweg"-Ansatz bei Tools wie clientseitigem Routing und Zustandsverwaltung. Während das Vue-Core-Team empfohlene Bibliotheken für diese Funktionen pflegt, sind diese nicht direkt in Vue integriert. So können Sie eine andere Routing-/Zustandsverwaltungslibrary auswählen, wenn diese besser zu Ihrer Anwendung passt.

Neben der Möglichkeit, Vue progressiv in Ihre Anwendungen zu integrieren, bietet Vue auch einen progressiven Ansatz zum Schreiben von Markup. Wie die meisten Frameworks ermöglicht Vue das Erstellen wiederverwendbarer Markup-Blöcke über Komponenten. Die meisten Zeit werden Vue-Komponenten mit einer speziellen HTML-Templatesyntax geschrieben. Wenn Sie mehr Kontrolle als die HTML-Syntax benötigt, können Sie JSX oder einfache JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie dieses Tutorial durcharbeiten, möchten Sie möglicherweise den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs geöffnet halten, damit Sie darauf verweisen können, wenn Sie mehr Informationen zu einem Unterthema möchten.

## Installation

Um Vue in einer bestehenden Website zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente auf eine Seite setzen. Dies ermöglicht Ihnen den Start mit Vue auf bestehenden Sites, weshalb Vue stolz auf sich als progressives Framework ist. Dies ist eine großartige Option, um ein bestehendes Projekt, das eine Bibliothek wie jQuery verwendet, zu Vue zu migrieren. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie die Attribute, benutzerdefinierte Komponenten und Datenmanagement.

- Entwicklungsskript (nicht optimiert, aber enthält Konsolenwarnungen, die für die Entwicklung großartig sind.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktionsskript (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, eine Versionsnummer anzugeben, wenn Sie Vue auf Ihrer Website einbinden, damit Sie durch Framework-Updates nicht unbemerkt von Änderungen auf Ihrer Live-Site betroffen sind.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Methode hat jedoch einige Einschränkungen. Um komplexere Apps zu entwickeln, sollten Sie das [Vue npm Package](https://www.npmjs.com/package/vue) verwenden. Dadurch können Sie erweiterte Funktionen von Vue nutzen und Tools wie Vite oder WebPack verwenden. Um das Erstellen von Apps mit Vue zu erleichtern, gibt es ein CLI-Scaffolding-Tool [create-vue](https://github.com/vuejs/create-vue), um den Entwicklungsprozess zu optimieren. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Wenn Sie das Obige nicht installiert haben, erfahren Sie [mehr über die Installation von npm und Node.js](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups) hier.

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie lieber yarn verwenden möchten:

```bash
yarn create vue@latest
```

Dieser Befehl gibt Ihnen eine Liste von Projektkonfigurationen, die Sie verwenden können. Es gibt einige Standards, aber Sie können Ihre eigenen projektspezifischen Einstellungen auswählen. Diese Optionen ermöglichen es Ihnen, Dinge wie TypeScript, Linting, vue-router, Tests und mehr zu konfigurieren.
Wir gehen im Folgenden die Optionen in den Initialisierungsschritten durch.

## Initialisierung eines neuen Projekts

Um verschiedene Funktionen von Vue zu erkunden, werden wir eine Beispiel-To-Do-Listen-App erstellen. Wir beginnen, indem wir `create-vue` verwenden, um ein neues Gerüst für unsere App zu erstellen.
Im Terminal, `cd` dorthin, wo Sie Ihre Beispiel-App erstellen möchten, und führen Sie `npm create vue@latest` (oder `yarn create vue@latest` wenn Sie Yarn bevorzugen) aus.

Das interaktive Tool lässt Sie einige Optionen wählen, und Sie können durch Drücken von <kbd>Enter</kbd> fortfahren.
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

Nach Auswahl dieser Optionen ist Ihre Projektstruktur nun konfiguriert, und Abhängigkeiten sind in einer `package.json`-Datei definiert.
Die nächsten Schritte sind das Installieren der Abhängigkeiten und das Starten des Servers, und das Tool gibt bequem die Befehle aus, die Sie dafür benötigen:

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
- `yarn.lock`: Falls Sie `yarn` als Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unterabhängigkeiten generiert, die Ihr Projekt benötigt.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt Kontext für VS Code über Ihre Projektstruktur und unterstützt die Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vite.dev/)-Entwicklungsserver, der Ihr Projekt auf Ihrer lokalen Maschine erstellt und bereitstellt.
  Der Vite-Server überwacht Quellcodedateien auf Änderungen und kann das Projekt bei Änderungen sofort neu laden.
- `public`: Dieses Verzeichnis enthält statische Assets, die beim Build veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon für Ihre App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite aus gestartet.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.

  - `main.js`: Dies ist der Einstiegspunkt Ihrer Anwendung. Derzeit initialisiert diese Datei Ihre Vue-Anwendung und bestimmt, welches HTML-Element in der `index.html`-Datei Ihre App angebracht werden soll. In dieser Datei werden oft globale Komponenten oder zusätzliche Vue-Bibliotheken registriert.
  - `App.vue`: Dies ist die übergeordnete Komponente Ihrer Vue-App. Weitere Erläuterungen zu Vue-Komponenten folgen unten.
  - `components`: Dieses Verzeichnis ist der Speicherort Ihrer Komponenten. Derzeit enthält es nur eine Beispielkomponente.
  - `assets`: Dieses Verzeichnis dient zur Speicherung statischer Assets wie CSS und Bilder. Da sich diese Dateien im Quellverzeichnis befinden, können sie von Webpack verarbeitet werden. Dadurch können Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwendet werden.

> [!NOTE]
> Je nach den Optionen, die Sie beim Erstellen eines neuen Projekts auswählen, können weitere Verzeichnisse vorhanden sein (zum Beispiel, wenn Sie einen Router wählen, haben Sie auch ein `views` Verzeichnis).

## .vue Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil beim Erstellen von Apps in Vue. Diese Komponenten ermöglichen es Ihnen, eine große Anwendung in separate Bausteine zu unterteilen, die unabhängig erstellt und verwaltet werden können und bei Bedarf Daten untereinander übertragen. Diese kleinen Blöcke können Ihnen helfen, Ihren Code besser zu verstehen und zu testen.

Während einige Frameworks dazu ermutigen, Ihre Template-, Logik- und Styling-Code in separate Dateien zu unterteilen, geht Vue den entgegengesetzten Ansatz. Mithilfe von [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) können Sie Ihre Templates, entsprechende Skripte und CSS in einer einzigen `.vue`-Datei zusammenfassen. Diese Dateien werden von einem JS-Build-Tool (wie Vite oder Webpack) verarbeitet, was bedeutet, dass Sie Build-Tooling in Ihrem Projekt nutzen können. Dies ermöglicht es Ihnen, Tools wie Babel, TypeScript, SCSS und mehr zu verwenden, um fortschrittlichere Komponenten zu erstellen.

Werfen wir einen Blick in den `src` Ordner des Projekts, das wir mit dem CLI erstellt haben, und untersuchen Sie Ihre erste `.vue`-Datei: `App.vue`.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei — Sie werden sehen, dass sie drei Teile hat: `<template>`, `<script>`, und `<style>`, die die Template-, Skript- und Stilinformationsdaten der Komponente enthalten. Alle Single File Components teilen diese grundlegende Struktur.

`<template>` enthält die gesamte Markup-Struktur und Anzeigelogik Ihrer Komponente. Ihr Template kann beliebiges gültiges HTML enthalten sowie einige Vue-spezifische Syntax, die wir später besprechen werden.

> [!NOTE]
> Indem Sie das `lang`-Attribut auf dem `<template>`-Tag setzen, können Sie Pug-Template-Syntax anstelle des Standard-HTML verwenden — `<template lang="pug">`. Wir bleiben in diesem Tutorial beim Standard-HTML, aber es ist wichtig zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte nicht-anzeigebezogene Logik Ihrer Komponente. Am wichtigsten ist, dass Ihr `<script>`-Tag der Ort ist, an dem Sie Komponenten lokal registrieren, Komponenteneingaben (props) definieren, den lokalen Zustand verwalten, Methoden definieren und mehr. Ihr Build-Schritt wird dieses Objekt verarbeiten und es (mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion transformieren.

Im Fall von `App.vue` werden zwei Komponenten `TheWelcome` und `HelloWorld` durch Importe registriert. Wenn Sie eine Komponente auf diese Weise registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, sodass Sie sie in jeder Komponentendatei importieren und registrieren müssen, die sie verwendet. Dies ist nützlich für {{Glossary("Tree_shaking", "Tree shaking")}} (nicht verwendeten Code nicht laden) und Bundle-Splitting (Code nur bei Bedarf laden), da nicht jede Seite Ihrer App jede Komponente benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie die [TypeScript](https://www.typescriptlang.org/)-Syntax verwenden möchten, müssen Sie das `lang`-Attribut auf dem `<script>`-Tag setzen, um dem Compiler mitzuteilen, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Ort, an dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` — wird Vue die Stile auf die Inhalte Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, erlaubt jedoch einfach das Schreiben von einfachem CSS.

> [!NOTE]
> Wählen Sie einen CSS-Präprozessor bei der Erstellung des Projekts über das CLI, können Sie ein `lang`-Attribut zum `<style>`-Tag hinzufügen, damit der Inhalt zur Build-Zeit verarbeitet werden kann. Zum Beispiel erlaubt `<style lang="scss">` Ihnen, SCSS-Syntax in Ihrer Styling-Informationen zu verwenden.

## Ausführung der App lokal

Das `create-vue`-Tool kommt mit Vite als integriertem Entwicklungsserver. Dies ermöglicht Ihnen, Ihre App lokal auszuführen, sodass Sie sie einfach testen können, ohne einen Server von Grund auf neu konfigurieren zu müssen. Das CLI fügt Befehle zur `package.json`-Datei des Projekts als npm-Skripte hinzu, damit Sie sie einfach ausführen können.

In Ihrem Terminal versuchen Sie, `npm run dev` (oder `yarn dev`, wenn Sie yarn bevorzugen) auszuführen. Ihr Terminal sollte etwas wie das Folgende ausgeben:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie im Browser zu der "localhost"-Adresse in einem neuen Tab navigieren, sollten Sie Ihre App sehen (diese Adresse sollte laut oben `http://localhost:5173/` sein, aber sie kann sich je nach Konfiguration unterscheiden). Momentan sollte die App eine Willkommensnachricht enthalten, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie beim Initialisieren der App mit Ihrem CLI hinzugefügt haben, und einige andere nützliche Links zur Vue-Community und zum Ökosystem.

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

Wenn Ihr Server noch läuft, sollten Sie das Logo fast sofort aus der gerenderten Site entfernt sehen. Lassen Sie uns auch die `HelloWorld`-Komponente aus unserem Template entfernen.

Löschen Sie zunächst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, zeigt Ihr Editor möglicherweise einen Fehler an, da wir die `HelloWorld`-Komponente registriert haben, sie aber nicht verwenden. Wir müssen auch die Zeilen aus dem `<script>`-Element entfernen, die die Komponente importieren und registrieren:

Löschen Sie jetzt diese Zeilen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles im `<template>`-Tag entfernen, erhalten Sie einen Fehler, der sagt: `The template requires child element` in Ihrem Editor.
Das können Sie beheben, indem Sie dem `<template>`-Tag etwas Inhalt hinzufügen. Wir können mit einem neuen `<h1>`-Element innerhalb eines `<div>` beginnen.
Da wir unten eine To-Do-Listen-App erstellen werden, setzen wir unsere Überschrift auf "To-Do Liste" folgendermaßen:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` zeigt nun unsere Überschrift an, wie Sie es erwarten.

## Zusammenfassung

Lassen Sie uns hier zunächst aufhören. Wir haben einige Konzepte hinter Vue kennengelernt, ein Gerüst für unsere Beispiel-App erstellt, es inspiziert und einige erste Änderungen vorgenommen.

Mit dieser grundlegenden Einführung gehen wir jetzt weiter und bauen unsere Beispiel-App auf – eine einfache To-Do-Listen-Anwendung, mit der wir eine Liste von Aufgaben speichern, sie abhaken, wenn sie erledigt sind, und die Liste nach allen, erledigten und unerledigten Aufgaben filtern können.

Im nächsten Artikel erstellen wir unsere erste benutzerdefinierte Komponente und betrachten einige wichtige Konzepte wie das Übergeben von Props und das Speichern des Datenzustands.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
