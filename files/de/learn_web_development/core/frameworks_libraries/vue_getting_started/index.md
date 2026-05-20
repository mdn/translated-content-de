---
title: Einstieg in Vue
slug: Learn_web_development/Core/Frameworks_libraries/Vue_getting_started
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Die Inhalte werden im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Lassen Sie uns nun Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel werfen wir einen Blick auf einige Hintergrundinformationen zu Vue, lernen, wie es installiert und ein neues Projekt erstellt wird, untersuchen die grobe Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie das Projekt lokal ausgeführt wird, und bereiten es darauf vor, mit dem Erstellen unseres Beispiels zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen,
          Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installierten Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichtung einer lokalen Vue-Entwicklungsumgebung, Erstellung einer Starter-App und Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieses Tutorial richtet sich an [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) und wurde zuletzt im Mai 2024 überarbeitet.

## Ein klarerer Blick auf Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Einrichtungen für progressive Verbesserungen bietet — im Gegensatz zu vielen anderen Frameworks können Sie Vue verwenden, um vorhandenes HTML zu verbessern. Dadurch können Sie Vue als Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) verwenden.

Das heißt aber nicht, dass Sie Vue nur dafür nutzen können. Sie können auch ganze Single Page Applications (SPAs) mit Vue schreiben. Dadurch können Sie Markup vollständig von Vue verwalten lassen, was die Entwicklererfahrung und Leistung bei der Arbeit mit komplexen Anwendungen verbessern kann. Darüber hinaus ermöglicht Vue die Nutzung von Bibliotheken für clientseitiges Routing und Zustandsverwaltung, wenn Sie diese benötigen. Vue verfolgt dabei einen Mittelweg bei der Bereitstellung von Werkzeugen wie clientseitigem Routing und Zustandsverwaltung. Zwar stellt das Vue-Kernteam empfohlene Bibliotheken für diese Funktionen bereit, sie sind jedoch nicht direkt in Vue integriert. So können Sie eine andere Bibliothek für Routing/State-Management auswählen, wenn sie besser zu Ihrer Anwendung passt.

Neben der progressiven Integration von Vue in Ihre Anwendungen bietet Vue auch einen progressiven Ansatz zum Schreiben von Markup. Wie die meisten Frameworks ermöglicht Vue das Erstellen wiederverwendbarer Markup-Blöcke über Komponenten. Die meiste Zeit werden Vue-Komponenten mit einer speziellen HTML-Templatesyntax geschrieben. Wenn Sie mehr Kontrolle benötigen, als die HTML-Syntax zulässt, können Sie JSX oder reine JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie dieses Tutorial durcharbeiten, möchten Sie vielleicht den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs geöffnet halten, um sie bei Bedarf für weitere Informationen zu einem Unterthema zu konsultieren.

## Installation

Um Vue in einer bestehenden Seite zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente zu einer Seite hinzufügen. Dadurch können Sie Vue auf vorhandenen Seiten verwenden, weshalb Vue damit wirbt, ein progressives Framework zu sein. Dies ist eine großartige Option, wenn Sie ein existierendes Projekt, das eine Bibliothek wie jQuery nutzt, zu Vue migrieren. Mit dieser Methode können Sie viele der Kernfunktionen von Vue verwenden, wie Attribute, benutzerdefinierte Komponenten und Datenverwaltung.

- Entwicklungsskript (nicht optimiert, enthält jedoch Konsolenwarnungen, was für die Entwicklung hervorragend ist.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktions-Skript (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, beim Einfügen von Vue auf Ihrer Seite eine Versionsnummer anzugeben, damit eventuelle Framework-Updates Ihre Live-Site nicht ohne Ihr Wissen beschädigen.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Herangehensweise hat jedoch einige Einschränkungen. Um komplexere Apps zu erstellen, sollten Sie das [Vue npm-Paket](https://www.npmjs.com/package/vue) verwenden. Dadurch können Sie erweiterte Funktionen von Vue nutzen und Werkzeuge wie Vite oder Webpack verwenden. Um das Erstellen von Apps mit Vue zu erleichtern, gibt es ein CLI-Scaffolding-Tool [create-vue](https://github.com/vuejs/create-vue), um den Entwicklungsprozess zu vereinfachen. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Falls Sie die oben genannten nicht installiert haben, erfahren Sie [hier mehr über die Installation von npm und Node.js](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder, falls Sie lieber Yarn verwenden:

```bash
yarn create vue@latest
```

Dieser Befehl bietet Ihnen eine Liste von Projektkonfigurationen, die Sie verwenden können. Es gibt einige Standardwerte, aber Sie können auch Ihre eigenen projektspezifischen Einstellungen wählen. Diese Optionen ermöglichen die Konfiguration von Dingen wie TypeScript, Linting, vue-router, Testing und mehr.
Wir werden die Optionen in den Initialisierungsschritten unten durchlaufen.

## Initialisierung eines neuen Projekts

Um verschiedene Funktionen von Vue zu erkunden, werden wir eine Beispiel-Taskliste (Todo-Liste) aufbauen. Wir beginnen damit, `create-vue` zu verwenden, um ein neues Gerüst für unsere App zu erstellen.
Navigieren Sie im Terminal zu dem Ort, an dem Sie Ihre Beispiel-App erstellen möchten, und führen Sie `npm create vue@latest` (oder `yarn create vue@latest`, wenn Sie Yarn bevorzugen) aus.

Das interaktive Tool ermöglicht es Ihnen, einige Optionen zu wählen, und Sie können fortfahren, indem Sie <kbd>Enter</kbd> drücken.
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

Nach der Auswahl dieser Optionen ist Ihre Projektstruktur nun konfiguriert und die Abhängigkeiten sind in einer `package.json`-Datei definiert.
Die nächsten Schritte bestehen darin, die Abhängigkeiten zu installieren und den Server zu starten, und das Tool gibt Ihnen bequem die Befehle dafür aus:

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Falls alles erfolgreich war, sollte die CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die wichtigsten sind:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt sowie einige Metadaten und `eslint`-Konfiguration.
- `yarn.lock`: Falls Sie `yarn` als Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unterabhängigkeiten erstellt, die Ihr Projekt benötigt.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt VS Code Kontext für Ihre Projektstruktur und unterstützt die Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vite.dev/) Entwicklungsserver, der Ihr Projekt auf Ihrer lokalen Maschine erstellt und bereitstellt. Der Vite-Server überwacht Quelldateien auf Änderungen und kann das Projekt beim Ändern live neuladen.
- `public`: Dieses Verzeichnis enthält statische Ressourcen, die während des Builds veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon Ihrer App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite gestartet.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.
  - `main.js`: Dies ist der Einstiegspunkt Ihrer Anwendung. Derzeit initialisiert diese Datei Ihre Vue-Anwendung und legt fest, welches HTML-Element in der `index.html`-Datei Ihre App angehängt werden soll. Diese Datei ist oft der Ort, an dem Sie globale Komponenten oder zusätzliche Vue-Bibliotheken registrieren.
  - `App.vue`: Dies ist die übergeordnete Komponente in Ihrer Vue-App. Siehe unten für weitere Erklärungen zu Vue-Komponenten.
  - `components`: In diesem Verzeichnis speichern Sie Ihre Komponenten. Derzeit gibt es nur eine Beispielkomponente.
  - `assets`: Dieses Verzeichnis ist für die Speicherung statischer Ressourcen wie CSS und Bilder. Da sich diese Dateien im Quellverzeichnis befinden, können sie von Webpack verarbeitet werden. Das bedeutet, dass Sie Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden können.

> [!NOTE]
> Abhängig von den Optionen, die Sie beim Erstellen eines neuen Projekts wählen, können auch andere Verzeichnisse vorhanden sein (zum Beispiel, wenn Sie einen Router wählen, gibt es auch ein `views`-Verzeichnis).

## .vue-Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil beim Erstellen von Apps in Vue. Diese Komponenten ermöglichen es Ihnen, eine große Anwendung in diskrete Bausteine zu zerlegen, die separat erstellt und verwaltet werden können, und Daten zwischen ihnen nach Bedarf zu übertragen. Diese kleinen Blöcke können Ihnen helfen, Ihren Code zu überdenken und zu testen.

Während einige Frameworks Sie ermutigen, Ihr Template, Ihre Logik und Ihren Stilcode in separate Dateien zu trennen, verfolgt Vue den gegenteiligen Ansatz. Mit [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) ermöglicht es Vue, Ihre Templates, das entsprechende Skript und CSS zusammen in einer einzigen Datei mit der Endung `.vue` zu gruppieren. Diese Dateien werden von einem JS-Build-Tool (wie Vite oder Webpack) verarbeitet, was bedeutet, dass Sie Build-Time-Tools in Ihrem Projekt nutzen können. Dies ermöglicht die Nutzung von Werkzeugen wie Babel, TypeScript, SCSS und mehr, um anspruchsvollere Komponenten zu erstellen.

Lassen Sie uns in das `src`-Verzeichnis des Projekts, das wir mit der CLI erstellt haben, hineinschauen und Ihre erste `.vue`-Datei, `App.vue`, untersuchen.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei — Sie werden feststellen, dass sie aus drei Teilen besteht: `<template>`, `<script>` und `<style>`, die das Template, das Skript und die Styling-Informationen der Komponente enthalten. Alle Single File Components teilen diese grundlegende Struktur.

`<template>` enthält die gesamte Markup-Struktur und Anzeigelogik Ihrer Komponente. Ihr Template kann jedes gültige HTML sowie einige Vue-spezifische Syntax enthalten, die wir später behandeln.

> [!NOTE]
> Durch Setzen des `lang`-Attributs auf dem `<template>`-Tag können Sie Pug-Templatesyntax anstelle von Standard-HTML verwenden — `<template lang="pug">`. Wir bleiben in diesem Tutorial beim Standard-HTML, aber es ist gut zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte Nicht-Anzeigelogik Ihrer Komponente. Am wichtigsten ist, dass Ihr `<script>`-Tag der Ort ist, an dem Sie Komponenten lokal registrieren, Komponenteneingaben (Props) definieren, den lokalen Zustand handhaben, Methoden definieren und mehr. Ihr Build-Schritt verarbeitet dieses Objekt und transformiert es (mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion.

Im Fall von `App.vue` werden zwei Komponenten `TheWelcome` und `HelloWorld` mittels Imports registriert. Wenn Sie eine Komponente auf diese Weise registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, sodass Sie sie in jeder Komponentendatei importieren und registrieren müssen, die sie verwendet. Dies ist nützlich für {{Glossary("Tree_shaking", "Tree shaking")}} (Nichtladen von nicht verwendeten Code) und Bündelaufteilung (nur Laden von Code bei Bedarf), da nicht jede Seite in Ihrer App jede Komponente benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie [TypeScript](https://www.typescriptlang.org/) verwenden möchten, müssen Sie das `lang`-Attribut im `<script>`-Tag setzen, um dem Compiler zu signalisieren, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Ort, an dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` —, wird Vue die Stile auf den Inhalt Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, ermöglicht es Ihnen jedoch, einfaches CSS zu schreiben.

> [!NOTE]
> Wenn Sie bei der Projekterstellung über die CLI einen CSS-Präprozessor auswählen, können Sie ein `lang`-Attribut zum `<style>`-Tag hinzufügen, sodass der Inhalt zur Build-Zeit verarbeitet werden kann. Zum Beispiel ermöglicht `<style lang="scss">` die Verwendung von SCSS-Syntax in Ihren Stilinformationen.

## Ausführung der App lokal

Das `create-vue`-Tool kommt mit Vite als integriertem Entwicklungsserver. Dies ermöglicht es Ihnen, Ihre App lokal auszuführen, damit Sie sie einfach testen können, ohne einen Server von Grund auf neu konfigurieren zu müssen. Die CLI fügt dem `package.json`-Dokument des Projekts als npm-Skripte Befehle hinzu, sodass Sie sie einfach ausführen können.

Versuchen Sie in Ihrem Terminal, `npm run dev` (oder `yarn dev`, wenn Sie yarn bevorzugen) auszuführen. Ihr Terminal sollte etwas Ähnliches wie Folgendes ausgeben:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie im Browser zu der "localhost"-Adresse navigieren, sollten Sie Ihre App sehen (diese Adresse sollte `http://localhost:5173/` sein, wie oben angegeben, kann jedoch je nach Setup variieren). Momentan sollte die App eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie beim Initialisieren der App mit Ihrer CLI hinzugefügt haben, und einige andere nützliche Links zur Vue-Community und zum Ökosystem enthalten.

## Ein paar Änderungen vornehmen

Lassen Sie uns die erste Änderung an der App vornehmen — wir löschen das Vue-Logo. Öffnen Sie die `App.vue`-Datei und entfernen Sie das [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element aus dem Template-Bereich:

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

Wenn Ihr Server noch läuft, sollten Sie sehen, dass das Logo fast augenblicklich von der gerenderten Seite entfernt wird. Lassen Sie uns auch die `HelloWorld`-Komponente aus unserem Template entfernen.

Löschen Sie zuerst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, kann es sein, dass Ihr Editor einen Fehler anzeigt, weil wir die `HelloWorld`-Komponente registriert haben, aber sie nicht verwenden. Wir müssen auch die Zeilen im `<script>`-Element entfernen, die die Komponente importieren und registrieren:

Löschen Sie jetzt diese Zeilen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles innerhalb des `<template>`-Tags entfernen, wird ein Fehler angezeigt, der besagt `The template requires child element` in Ihrem Editor.
Sie können dies beheben, indem Sie einige Inhalte innerhalb des `<template>`-Tags hinzufügen, und wir können mit einem neuen `<h1>`-Element in einem `<div>` beginnen.
Da wir unten eine To-Do-Liste erstellen werden, lassen Sie uns unser Überschrift auf "To-Do Liste" setzen:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` zeigt jetzt wie erwartet unsere Überschrift an.

## Zusammenfassung

Lassen Sie uns hier vorerst stoppen. Wir haben einige der Ideen hinter Vue kennengelernt, ein Gerüst für unsere Beispiel-App erstellt, es untersucht und ein paar erste Änderungen vorgenommen.

Mit einer grundliegenden Einführung aus dem Weg werden wir nun weitergehen und unsere Beispiel-App aufbauen, eine einfache To-Do-Listenanwendung, die uns erlaubt, eine Liste von Aufgaben zu speichern, diese abzuhaken, wenn sie erledigt sind, und die Liste nach allen, erledigten und unerledigten Aufgaben zu filtern.

Im nächsten Artikel erstellen wir unsere erste benutzerdefinierte Komponente und gehen auf einige wichtige Konzepte ein, wie das Übergeben von Props und das Speichern ihres Datenzustands.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}
