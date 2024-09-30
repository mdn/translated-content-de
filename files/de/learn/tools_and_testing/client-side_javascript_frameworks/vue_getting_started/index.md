---
title: Erste Schritte mit Vue
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun möchten wir Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel betrachten wir ein wenig den Hintergrund von Vue, lernen, wie man es installiert und ein neues Projekt erstellt, studieren die Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie man das Projekt lokal ausführt und es vorbereitet, um mit dem Aufbau unseres Beispiels zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten, die die Daten der App verwalten und einer auf HTML basierenden Vorlagensprache, die auf die zugrundeliegende DOM-Struktur abbildet, geschrieben. Für die Installation und um einige der fortgeschrittenen Funktionen von Vue (wie Single File Components oder Renderfunktionen) nutzen zu können, benötigen Sie ein Terminal mit installiertem Node + npm.
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
> Dieses Tutorial zielt auf [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) ab und wurde zuletzt im Mai 2024 überarbeitet.

## Ein klarerer Blick auf Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Funktionen für progressive Verbesserungen bietet – im Gegensatz zu vielen anderen Frameworks können Sie mit Vue bestehendes HTML erweitern. Dies ermöglicht es Ihnen, Vue als Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) zu verwenden.

Das gesagt, können Sie mit Vue auch komplette Single Page Applications (SPAs) schreiben. Dies ermöglicht es Ihnen, vom Vue vollständig verwaltetes Markup zu erstellen, was die Entwicklererfahrung und Leistung bei der Arbeit mit komplexen Anwendungen verbessern kann. Es erlaubt Ihnen auch, Bibliotheken für Client-seitiges Routing und Zustandsverwaltung zu nutzen, wenn Sie es benötigen. Zusätzlich verfolgt Vue einen „Mittelweg“-Ansatz bei Werkzeugen wie Client-seitigem Routing und Zustandsverwaltung. Während das Vue-Core-Team empfohlene Bibliotheken für diese Funktionen pflegt, sind sie nicht direkt in Vue gebündelt. Dadurch können Sie eine andere Routing-/Zustandsverwaltungsbibliothek wählen, wenn diese besser zu Ihrer Anwendung passt.

Zusätzlich zur Möglichkeit, Vue progressiv in Ihre Anwendungen zu integrieren, bietet Vue auch einen progressiven Ansatz zur Erstellung von Markup. Wie die meisten Frameworks ermöglicht Ihnen Vue, wiederverwendbare Markup-Blöcke über Komponenten zu erstellen. Meistens werden Vue-Komponenten unter Verwendung einer speziellen HTML-Vorlagesprache geschrieben. Wenn Sie mehr Kontrolle benötigen, als es die HTML-Syntax erlaubt, können Sie JSX oder plain JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie dieses Tutorial durcharbeiten, möchten Sie möglicherweise den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs geöffnet halten, um darauf zurückgreifen zu können, wenn Sie mehr Informationen zu einem bestimmten Thema benötigen.

## Installation

Um Vue in einer bestehenden Seite zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente auf eine Seite einfügen. Dies ermöglicht es Ihnen, Vue auf bestehenden Seiten zu verwenden, weshalb Vue sich als progressives Framework rühmt. Dies ist eine ausgezeichnete Option, wenn Sie ein bestehendes Projekt, das eine Bibliothek wie jQuery verwendet, auf Vue migrieren möchten. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie die Attribute, benutzerdefinierte Komponenten und Datenverwaltung.

- Entwicklungsskript (nicht optimiert, aber enthält Konsolenwarnungen, was hervorragend für die Entwicklung ist.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktionsskript (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, beim Einfügen von Vue auf Ihrer Seite eine Versionsnummer anzugeben, damit etwaige Framework-Updates Ihre Live-Site nicht ohne Ihr Wissen brechen.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Vorgehensweise hat jedoch einige Einschränkungen. Um komplexere Apps zu entwickeln, sollten Sie das [Vue npm-Paket](https://www.npmjs.com/package/vue) verwenden. Dies erlaubt Ihnen, erweiterte Funktionen von Vue zu nutzen und Werkzeuge wie Vite oder WebPack zu verwenden. Um die Entwicklung von Apps mit Vue einfacher zu gestalten, gibt es ein CLI-Gerüstwerkzeug [create-vue](https://github.com/vuejs/create-vue), um den Entwicklungsprozess zu optimieren. Für die Nutzung von `create-vue` benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Wenn Sie die obigen Programme nicht installiert haben, finden Sie [hier mehr über die Installation von npm und Node.js](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie lieber yarn verwenden:

```bash
yarn create vue@latest
```

Dieser Befehl gibt Ihnen eine Liste von Projektkonfigurationen, die Sie verwenden können. Es gibt einige Standardwerte, aber Sie können eigene, projektspezifische Einstellungen wählen. Diese Optionen lassen Sie Dinge wie TypeScript, Linting, vue-router, Tests und mehr konfigurieren.
Wir werden die Optionen in den unten stehenden Initialisierungsschritten durchgehen.

## Initialisierung eines neuen Projekts

Um verschiedene Funktionen von Vue zu erkunden, werden wir eine einfache To-Do-Listen-App aufbauen. Wir beginnen damit, `create-vue` zu verwenden, um ein neues Gerüst für unsere App zu erstellen.
Im Terminal `cd` zu dem Ort, an dem Sie Ihre Beispiel-App erstellen möchten, dann führen Sie `npm create vue@latest` (oder `yarn create vue@latest`, wenn Sie Yarn bevorzugen) aus.

Das interaktive Werkzeug lässt Sie einige Optionen wählen und Sie können fortfahren, indem Sie <kbd>Enter</kbd> drücken.
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
Die nächsten Schritte sind, die Abhängigkeiten zu installieren und den Server zu starten, und das Tool druckt bequem die benötigten Befehle aus, um dies zu tun:

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Wenn alles erfolgreich verlief, sollte das CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die wichtigsten sind wie folgt:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt sowie einige Metadaten und `eslint`-Konfigurationen.
- `yarn.lock`: Wenn Sie `yarn` als Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unterabhängigkeiten generiert, die Ihr Projekt benötigt.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt VS Code Kontext über Ihre Projektstruktur und hilft bei der Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vitejs.dev/)-Entwicklungsserver, der Ihr Projekt auf Ihrem lokalen Rechner erstellt und bereitstellt.
  Der Vite-Server überwacht Quellcodeänderungen und kann das Projekt bei Änderungen neu laden.
- `public`: Dieses Verzeichnis enthält statische Assets, die während des Builds veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon Ihrer App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite aus ausgeführt.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.

  - `main.js`: Dies ist der Einstiegspunkt für Ihre Anwendung. Derzeit initialisiert diese Datei Ihre Vue-Anwendung und gibt an, an welches HTML-Element im `index.html`-Dokument Ihre App angehängt werden soll. In dieser Datei registrieren Sie oft globale Komponenten oder zusätzliche Vue-Bibliotheken.
  - `App.vue`: Dies ist die Top-Level-Komponente in Ihrer Vue-App. Weiter unten finden Sie eine Erklärung zu Vue-Komponenten.
  - `components`: Dieses Verzeichnis ist der Ort, an dem Sie Ihre Komponenten aufbewahren. Derzeit ist nur eine Beispielkomponente enthalten.
  - `assets`: Dieses Verzeichnis dient zur Speicherung von statischen Assets wie CSS und Bildern. Da sich diese Dateien im Quellverzeichnis befinden, können sie von Webpack verarbeitet werden. Das bedeutet, dass Sie Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden können.

> [!NOTE]
> Abhängig von den Optionen, die Sie beim Erstellen eines neuen Projekts auswählen, können weitere Verzeichnisse vorhanden sein (zum Beispiel, wenn Sie einen Router wählen, haben Sie auch ein `views`-Verzeichnis).

## .vue-Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil beim Erstellen von Apps in Vue. Diese Komponenten ermöglichen es Ihnen, eine große Anwendung in diskrete Bausteine zu unterteilen, die separat erstellt und verwaltet werden können und bei Bedarf Daten untereinander austauschen. Diese kleinen Blöcke können Ihnen helfen, über Ihren Code nachzudenken und ihn zu testen.

Während einige Frameworks empfehlen, Ihr Template, die Logik und die CSS in separate Dateien zu unterteilen, verfolgt Vue den entgegengesetzten Ansatz. Mit [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) können Sie Ihre Templates, das zugehörige Skript und CSS zu einer einzigen Datei zusammenfassen, die mit `.vue` endet. Diese Dateien werden von einem JavaScript-Build-Tool (wie Vite oder Webpack) verarbeitet, was bedeutet, dass Sie von Build-Time-Tools in Ihrem Projekt profitieren können. So können Sie Babel, TypeScript, SCSS und mehr nutzen, um anspruchsvollere Komponenten zu erstellen.

Lassen Sie uns in den `src`-Ordner des Projekts schauen, das wir mit dem CLI erstellt haben, und Ihre erste `.vue`-Datei: `App.vue`, inspizieren.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei — Sie wird drei Teile enthalten: `<template>`, `<script>` und `<style>`, die die Template-, Skript- und Stil-Informationen der Komponente enthalten. Alle Single File Components teilen diese gleiche grundlegende Struktur.

`<template>` enthält die gesamte Markupstruktur und Darstellungslogik Ihrer Komponente. Ihr Template kann jedes gültige HTML sowie eine spezifische Vue-Syntax enthalten, die wir später behandeln werden.

> [!NOTE]
> Indem Sie das `lang`-Attribut auf dem `<template>`-Tag setzen, können Sie die Pug-Template-Syntax anstelle von Standard-HTML verwenden — `<template lang="pug">`. Wir werden in diesem Tutorial bei Standard-HTML bleiben, aber es ist gut zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte Nicht-Darstellungslogik Ihrer Komponente. Vor allem ist es in Ihrem `<script>`-Tag, wo Sie Komponenten lokal registrieren, Eingaben (props) definieren, den lokalen Zustand verwalten, Methoden definieren und mehr. Ihr Build-Schritt wird dieses Objekt verarbeiten und es (mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion umwandeln.

Im Fall von `App.vue` werden zwei Komponenten `TheWelcome` und `HelloWorld` durch Importe registriert. Wenn Sie eine Komponente auf diese Weise registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, also müssen Sie sie in jeder Komponentendatei importieren und registrieren, die sie verwenden. Dies ist nützlich für [Tree Shaking](/de/docs/Glossary/Tree_shaking) (Nichtladen von unbenutztem Code) und Paketaufteilung (nur Laden von Code, wenn benötigt), da nicht jede Seite in Ihrer App jede Komponente unbedingt benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie die [TypeScript](https://www.typescriptlang.org/)-Syntax verwenden wollen, müssen Sie das `lang`-Attribut auf dem `<script>`-Tag setzen, um dem Compiler mitzuteilen, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Bereich, in dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` — wird Vue die Stile auf die Inhalte Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, ermöglicht Ihnen jedoch, einfach nur Plain CSS zu schreiben.

> [!NOTE]
> Wenn Sie beim Erstellen des Projekts über die CLI einen CSS-Präprozessor auswählen, können Sie ein `lang`-Attribut zum `<style>`-Tag hinzufügen, damit die Inhalte zur Build-Zeit verarbeitet werden können. Zum Beispiel ermöglicht `<style lang="scss">` Ihnen die Verwendung der SCSS-Syntax in Ihrem Stil.

## Lokales Ausführen der App

Das `create-vue`-Tool kommt mit Vite als integriertem Entwicklungsserver. Dies ermöglicht es Ihnen, Ihre App lokal auszuführen, sodass Sie sie leicht testen können, ohne einen Server von Grund auf neu konfigurieren zu müssen. Das CLI fügt der `package.json`-Datei des Projekts als npm-Skripte Befehle hinzu, damit Sie diese leicht ausführen können.

In Ihrem Terminal versuchen Sie, `npm run dev` (oder `yarn dev`, wenn Sie yarn bevorzugen) auszuführen. Ihr Terminal sollte etwas Ähnliches wie das folgende ausgeben:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie in einem neuen Browser-Tab zur „localhost“-Adresse navigieren, sollten Sie Ihre App sehen (diese Adresse sollte `http://localhost:5173/` wie oben angegeben sein, kann aber je nach Ihrer Konfiguration variieren). Im Moment sollte die App eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie beim Initialisieren der App über Ihr CLI hinzugefügt haben, und einige andere nützliche Links zur Vue-Community und -Ökosystem enthalten.

## Ein paar Änderungen vornehmen

Nehmen wir unsere erste Änderung an der App vor — wir entfernen das Vue-Logo. Öffnen Sie die `App.vue`-Datei und löschen Sie das [`<img>`](/de/docs/Web/HTML/Element/img)-Element aus dem Template-Abschnitt:

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

Wenn Ihr Server noch läuft, sollten Sie fast sofort sehen, dass das Logo von der gerenderten Seite entfernt wird. Lassen Sie uns auch die `HelloWorld`-Komponente aus unserem Template entfernen.

Löschen Sie zunächst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, zeigt Ihr Editor möglicherweise einen Fehler an, weil wir die `HelloWorld`-Komponente registriert haben, sie aber nicht verwenden. Wir müssen auch die Zeilen aus dem `<script>`-Element entfernen, die die Komponente importieren und registrieren:

Löschen Sie jetzt diese Zeilen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles innerhalb des `<template>`-Tags entfernen, sehen Sie einen Fehler in Ihrem Editor mit der Meldung, dass `The template requires child element` erforderlich ist.
Sie können dies beheben, indem Sie einige Inhalte innerhalb des `<template>`-Tags hinzufügen. Wir beginnen mit einem neuen `<h1>`-Element in einem `<div>`.
Da wir weiter unten eine To-Do-Listen-App erstellen werden, setzen wir unsere Überschrift auf „To-Do-Liste“ wie folgt:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` zeigt jetzt unsere Überschrift an, wie Sie es erwarten würden.

## Zusammenfassung

Lassen Sie es für den Moment dabei bewenden. Wir haben etwas über einige der Ideen hinter Vue erfahren, einige Gerüste für unsere Beispielanwendung erstellt, diese inspiziert und einige erste Änderungen vorgenommen.

Da wir nun eine grundlegende Einführung absolviert haben, werden wir weitergehen und unsere Beispiel-App aufbauen, eine einfache Aufgabenlistenanwendung, die es uns ermöglicht, eine Liste von Aufgaben zu speichern, sie bei Erledigung abzuhaken und die Liste nach allen, erledigten und unerledigten Aufgaben zu filtern.

Im nächsten Artikel erstellen wir unsere erste benutzerdefinierte Komponente und betrachten einige wichtige Konzepte wie das Übergeben von Props und das Speichern des Datenstatus.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
