---
title: Einstieg in Vue
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun lassen Sie uns Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel schauen wir uns zunächst ein wenig Hintergrundwissen zu Vue an, lernen, wie man es installiert und ein neues Projekt erstellt, studieren die Struktur des gesamten Projekts und einer einzelnen Komponente, sehen, wie man das Projekt lokal ausführt, und bereiten es darauf vor, mit dem Bau unseres Beispiels zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>, <a href="/de/docs/Learn/CSS">CSS</a> und <a href="/de/docs/Learn/JavaScript">JavaScript</a>, sowie Grundkenntnisse über die <a href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">Terminal-/Befehlszeile</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax geschrieben, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installierten Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichten einer lokalen Vue-Entwicklungsumgebung, Erstellen einer Starter-App und Verstehen der grundlegenden Funktionsweise.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieses Tutorial richtet sich an [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) und wurde zuletzt im Mai 2024 überarbeitet.

## Ein klareres Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Funktionen für progressive Verbesserung bietet — im Gegensatz zu vielen anderen Frameworks können Sie Vue nutzen, um bestehendes HTML zu verbessern. Dies ermöglicht es Ihnen, Vue als direkten Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) zu verwenden.

Das heißt, Sie können Vue auch verwenden, um komplette Single Page Applications (SPAs) zu schreiben. Dies ermöglicht es Ihnen, Markup vollständig von Vue verwalten zu lassen, was die Entwicklererfahrung und Leistung bei komplexen Anwendungen verbessern kann. Es ermöglicht Ihnen auch, Bibliotheken für clientseitiges Routing und Zustandsverwaltung zu nutzen, wenn Sie sie benötigen. Darüber hinaus verfolgt Vue einen "Mittelweg"-Ansatz bei der Werkzeugnutzung wie clientseitigem Routing und Zustandsverwaltung. Während das Vue-Kernteam empfohlene Bibliotheken für diese Funktionen pflegt, sind sie nicht direkt in Vue integriert. Dies ermöglicht es Ihnen, eine andere Routing-/Zustandsverwaltungsbibliothek auszuwählen, wenn sie besser zu Ihrer Anwendung passt.

Zusätzlich zur progressiven Integration von Vue in Ihre Anwendungen bietet Vue auch einen progressiven Ansatz beim Schreiben von Markup. Wie die meisten Frameworks ermöglicht Vue die Erstellung wiederverwendbarer Markup-Blöcke über Komponenten. Die meiste Zeit werden Vue-Komponenten mit einer speziellen HTML-Templatesyntax geschrieben. Wenn Sie mehr Kontrolle benötigen, als die HTML-Syntax erlaubt, können Sie JSX oder einfache JavaScript-Funktionen verwenden, um Ihre Komponenten zu definieren.

Während Sie dieses Tutorial durcharbeiten, möchten Sie vielleicht den [Vue-Leitfaden](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs geöffnet halten, um bei Bedarf auf weitere Informationen zu einem Unterthema zugreifen zu können.

## Installation

Um Vue in einer bestehenden Website zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Element/script)-Elemente auf eine Seite einfügen. Dies ermöglicht es Ihnen, Vue auf bestehenden Websites zu verwenden, weshalb Vue stolz darauf ist, ein progressives Framework zu sein. Dies ist eine großartige Option, wenn Sie ein bestehendes Projekt mit einer Bibliothek wie jQuery auf Vue migrieren. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie Attribute, benutzerdefinierte Komponenten und Datenverwaltung.

- Entwicklungsskript (nicht optimiert, aber enthält Konsolenwarnungen, was für die Entwicklung großartig ist.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktionsskript (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, eine Versionsnummer anzugeben, wenn Sie Vue auf Ihrer Website einfügen, damit Framework-Updates Ihre Live-Website nicht unerwartet beeinträchtigen.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Vorgehensweise hat jedoch einige Einschränkungen. Um komplexere Apps zu erstellen, sollten Sie das [Vue npm Paket](https://www.npmjs.com/package/vue) verwenden. Damit können Sie erweiterte Funktionen von Vue nutzen und Werkzeuge wie Vite oder webpack verwenden. Um die App-Entwicklung mit Vue zu erleichtern, gibt es ein CLI-Scaffold-Tool [create-vue](https://github.com/vuejs/create-vue), um den Entwicklungsprozess zu vereinfachen. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Wenn Sie die oben genannten Komponenten nicht installiert haben, finden Sie hier [mehr Informationen zur Installation von npm und Node.js](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie lieber Yarn verwenden möchten:

```bash
yarn create vue@latest
```

Dieser Befehl zeigt Ihnen eine Liste von Projektkonfigurationen, die Sie verwenden können. Es gibt einige Standardoptionen, aber Sie können auch eigene projekt-spezifische Einstellungen wählen. Diese Optionen erlauben es Ihnen, Dinge wie TypeScript, Linting, vue-router, Testen und mehr zu konfigurieren. Wir werden diese Optionen in den folgenden Initialisierungsschritten durchgehen.

## Initialisierung eines neuen Projekts

Um verschiedene Funktionen von Vue zu erkunden, werden wir eine Beispiel-To-Do-Listen-App erstellen. Wir beginnen damit, `create-vue` zu verwenden, um ein neues Gerüst für unsere App zu erstellen. Navigieren Sie im Terminal zu dem Ort, an dem Sie Ihre Beispiel-App erstellen möchten, und führen Sie `npm create vue@latest` (oder `yarn create vue@latest`, wenn Sie lieber Yarn verwenden) aus.

Das interaktive Tool lässt Sie einige Optionen auswählen und Sie können mit der Eingabetaste <kbd>Enter</kbd> fortfahren. Für dieses Projekt verwenden wir die folgende Konfiguration:

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

Nach der Auswahl dieser Optionen ist Ihre Projektstruktur nun konfiguriert und Abhängigkeiten sind in einer `package.json`-Datei definiert. Die nächsten Schritte sind das Installieren der Abhängigkeiten und das Starten des Servers, und das Tool druckt bequem die Befehle aus, die Sie dafür benötigen:

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Wenn alles erfolgreich war, sollte die CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die wichtigsten sind die folgenden:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt sowie einige Metadaten und `eslint`-Konfigurationen.
- `yarn.lock`: Wenn Sie `yarn` als Ihren Paketmanager gewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unterabhängigkeiten, die Ihr Projekt benötigt, generiert.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt VS Code Kontext über Ihre Projektstruktur und unterstützt die Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vite.dev/) Entwicklungsserver, der Ihr Projekt auf Ihrem lokalen Rechner erstellt und bereitstellt. Der Vite-Server überwacht Dateien auf Änderungen und kann das Projekt während der Bearbeitung neuladen.
- `public`: Dieses Verzeichnis enthält statische Assets, die während des Builds veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon für Ihre App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite ausgeführt.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.

  - `main.js`: Dies ist der Einstiegspunkt Ihrer Anwendung. Derzeit initialisiert diese Datei Ihre Vue-App und zeigt an, an welches HTML-Element in der `index.html`-Datei Ihre App angehängt werden soll. In dieser Datei registrieren Sie oft globale Komponenten oder zusätzliche Vue-Bibliotheken.
  - `App.vue`: Dies ist die oberste Komponente in Ihrer Vue-App. Siehe unten für mehr Erklärung zu Vue-Komponenten.
  - `components`: Dieses Verzeichnis ist der Ort, an dem Sie Ihre Komponenten aufbewahren. Derzeit enthält es nur eine Beispielkomponente.
  - `assets`: Dieses Verzeichnis dient zur Speicherung statischer Dateien wie CSS und Bilder. Da sich diese Dateien im Quellverzeichnis befinden, können sie von webpack verarbeitet werden. Das bedeutet, dass Sie Präprozessoren wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden können.

> [!NOTE]
> Abhängig von den Optionen, die Sie beim Erstellen eines neuen Projekts auswählen, können andere Verzeichnisse vorhanden sein (zum Beispiel, wenn Sie einen Router auswählen, haben Sie auch ein `views`-Verzeichnis).

## .vue Dateien (Single File Components)

Wie in vielen Frontend-Frameworks sind Komponenten ein zentraler Bestandteil beim Erstellen von Apps in Vue. Diese Komponenten ermöglichen es Ihnen, eine große Anwendung in diskrete Bausteine zu unterteilen, die separat erstellt und verwaltet werden können, und Daten nach Bedarf zwischen ihnen zu übertragen. Diese kleinen Blöcke können Ihnen helfen, Ihren Code zu verstehen und zu testen.

Während einige Frameworks Sie ermutigen, Ihr Template-, Logik- und Styling-Code in separate Dateien zu unterteilen, geht Vue den gegenteiligen Weg. Mit [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) können Sie Ihre Templates, das dazugehörige Skript und CSS alle in einer einzigen Datei mit der Endung `.vue` zusammenfassen. Diese Dateien werden von einem JS-Bautool (wie Vite oder webpack) verarbeitet, was bedeutet, dass Sie Kompilierungswerkzeuge in Ihrem Projekt verwenden können. Dadurch können Sie Werkzeuge wie Babel, TypeScript, SCSS und mehr verwenden, um anspruchsvollere Komponenten zu erstellen.

Werfen wir einen Blick in den `src`-Ordner des von uns mit der CLI erstellten Projekts und überprüfen wir Ihre erste `.vue`-Datei: `App.vue`.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei — Sie werden sehen, dass sie drei Teile hat: `<template>`, `<script>` und `<style>`, die das Template, Skripting und Styling der Komponente enthalten. Alle Single File Components teilen diese grundlegende Struktur.

`<template>` enthält die gesamte Markup-Struktur und Anzeigelogik Ihrer Komponente. Ihr Template kann beliebiges gültiges HTML enthalten, sowie einige Vue-spezifische Syntaxen, die wir später behandeln werden.

> [!NOTE]
> Indem Sie das `lang`-Attribut am `<template>`-Tag setzen, können Sie die Pug-Templatesyntax anstelle von standardmäßigem HTML verwenden — `<template lang="pug">`. Wir bleiben im Laufe dieses Tutorials bei Standard-HTML, aber es ist gut zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte Nicht-Anzeigelogik Ihrer Komponente. Am wichtigsten ist, dass Ihr `<script>`-Tag der Ort ist, an dem Sie Komponenten lokal registrieren, Eingaben (props) definieren, lokalen Zustand verwalten, Methoden definieren und mehr. Ihr Build-Schritt verarbeitet dieses Objekt und transformiert es (mit Ihrem Template) in eine Vue-Komponente mit einer `render()`-Funktion.

Im Fall von `App.vue` werden zwei Komponenten `TheWelcome` und `HelloWorld` durch Importe registriert. Wenn Sie eine Komponente auf diese Weise registrieren, registrieren Sie sie lokal. Lokal registrierte Komponenten können nur innerhalb der Komponenten verwendet werden, die sie registrieren, daher müssen Sie sie in jeder Komponenten-Datei importieren und registrieren, die sie verwendet. Dies ist nützlich für {{Glossary("Tree_shaking", "Tree shaking")}} (nicht geladenem ungenutztem Code) und Bundle-Splitting (Code nur bei Bedarf laden), da nicht jede Seite in Ihrer App notwendigerweise jede Komponente benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie [TypeScript](https://www.typescriptlang.org/) Syntax verwenden möchten, müssen Sie das `lang`-Attribut am `<script>`-Tag setzen, um dem Compiler mitzuteilen, dass Sie TypeScript verwenden — `<script lang="ts">`.

`<style>` ist der Ort, an dem Sie Ihr CSS für die Komponente schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen — `<style scoped>` — wird Vue die Styles auf die Inhalte Ihrer SFC beschränken. Dies funktioniert ähnlich wie Lösungen in CSS-in-JS, ermöglicht es Ihnen jedoch, einfach normales CSS zu schreiben.

> [!NOTE]
> Wenn Sie bei der Erstellung des Projekts über die CLI einen CSS-Preprozessor auswählen, können Sie dem `<style>`-Tag ein `lang`-Attribut hinzufügen, damit der Inhalt zur Build-Zeit verarbeitet werden kann. Zum Beispiel ermöglicht `<style lang="scss">` Ihnen die Verwendung von SCSS-Syntax in Ihren Stilinformationen.

## Die App lokal ausführen

Das `create-vue`-Tool enthält Vite als integrierten Entwicklungsserver. Dies ermöglicht es Ihnen, Ihre App lokal auszuführen, sodass Sie sie einfach testen können, ohne einen Server von Grund auf konfigurieren zu müssen. Die CLI fügt Befehle zur `package.json`-Datei des Projekts als npm-Skripte hinzu, sodass Sie sie einfach ausführen können.

Versuchen Sie in Ihrem Terminal, `npm run dev` (oder `yarn dev`, wenn Sie lieber Yarn verwenden) auszuführen. Ihr Terminal sollte etwas wie das Folgende ausgeben:

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Wenn Sie in einem neuen Browser-Tab zur "localhost"-Adresse navigieren, sollten Sie Ihre App sehen (diese Adresse sollte `http://localhost:5173/` sein, wie oben angegeben, kann aber je nach Ihrer Konfiguration variieren). Im Moment sollte die App eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie beim Initialisieren der App mit Ihrer CLI hinzugefügt haben, und einige andere nützliche Links zur Vue-Community und -Ökosystem enthalten.

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

Wenn Ihr Server noch läuft, sollten Sie sehen, dass das Logo fast sofort aus der gerenderten Website entfernt wird. Entfernen wir auch die `HelloWorld`-Komponente aus unserem Template.

Löschen Sie zuerst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, wird Ihr Editor möglicherweise einen Fehler anzeigen, da wir die `HelloWorld`-Komponente registriert, aber nicht verwendet haben. Wir müssen auch die Zeilen aus dem `<script>`-Element entfernen, die die Komponente importieren und registrieren:

Löschen Sie jetzt diese Zeilen:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles im `<template>`-Tag entfernen, erhalten Sie eine Fehlermeldung, die besagt, dass `The template requires child element` in Ihrem Editor. Sie können dies beheben, indem Sie einige Inhalte im `<template>`-Tag hinzufügen. Wir können mit einem neuen `<h1>`-Element innerhalb eines `<div>` beginnen. Da wir unten eine To-Do-Listen-App erstellen werden, setzen wir unsere Überschrift auf "To-Do List" wie folgt:

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` zeigt jetzt unsere Überschrift, wie Sie es erwarten würden.

## Zusammenfassung

Lassen Sie es für jetzt dabei bewenden. Wir haben einige Ideen hinter Vue kennengelernt, einige Gerüste geschaffen, in denen unsere Beispiel-App leben soll, sie inspiziert und einige vorläufige Änderungen vorgenommen.

Nachdem wir eine grundlegende Einführung hinter uns haben, gehen wir nun weiter und bauen unsere Beispiel-App auf, eine grundlegende To-Do-Listen-Anwendung, die es uns ermöglicht, eine Liste von Aufgaben zu speichern, abzuhaken, wenn sie erledigt sind, und die Liste nach allen, abgeschlossenen und unvollständigen Aufgaben zu filtern.

Im nächsten Artikel bauen wir unsere erste benutzerdefinierte Komponente und schauen uns einige wichtige Konzepte an, wie man `props` übergibt und ihren Datenzustand speichert.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
