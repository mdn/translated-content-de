---
title: Einstieg in Vue
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun lassen Sie uns Vue vorstellen, das dritte unserer Frameworks. In diesem Artikel schauen wir uns ein wenig Hintergrundwissen zu Vue an, lernen, wie man es installiert und ein neues Projekt erstellt, untersuchen die grundlegende Struktur des gesamten Projekts und eines einzelnen Components, sehen, wie man das Projekt lokal ausführt und es vorbereitet, um mit dem Beispiel zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Grundkenntnisse in der Verwendung des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Components werden als eine Kombination aus JavaScript-Objekten, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax geschrieben, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Vue-Entwicklungsumgebung einrichten, eine Starter-App erstellen und die Grundlagen ihres Funktionierens verstehen.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dieses Tutorial richtet sich an [Vue Version 3.4.21](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28) unter Verwendung von [`create-vue` 3.10.2](https://github.com/vuejs/create-vue/releases/tag/v3.10.3) (mit Node.js Version `v20.11.0`) und wurde zuletzt im Mai 2024 überarbeitet.

## Ein klareres Vue

Vue ist ein modernes JavaScript-Framework, das nützliche Einrichtungen für die progressive Verbesserung bietet – im Gegensatz zu vielen anderen Frameworks können Sie Vue verwenden, um bestehendes HTML zu verbessern. Dadurch können Sie Vue als Ersatz für eine Bibliothek wie [jQuery](https://jquery.com/) verwenden.

Abgesehen davon können Sie Vue auch verwenden, um vollständige Single Page Applications (SPAs) zu schreiben. Dies ermöglicht es Ihnen, Markup vollständig von Vue verwalten zu lassen, was die Entwicklererfahrung und die Leistung bei der Arbeit mit komplexen Anwendungen verbessern kann. Es bietet Ihnen auch die Möglichkeit, Bibliotheken für clientseitiges Routing und Zustandsverwaltung zu nutzen, wenn Sie es benötigen. Darüber hinaus verfolgt Vue einen „Mittelweg“-Ansatz bei Tools wie clientseitigem Routing und Zustandsverwaltung. Während das Vue-Kernteam vorgeschlagene Bibliotheken für diese Funktionen pflegt, sind sie nicht direkt in Vue eingebunden. Dies ermöglicht es Ihnen, eine andere Routing-/Zustandsverwaltungsbibliothek auszuwählen, wenn sie besser zu Ihrer Anwendung passt.

Zusätzlich zur Möglichkeit, Vue schrittweise in Ihre Anwendungen zu integrieren, bietet Vue auch einen progressiven Ansatz zum Schreiben von Markup. Wie die meisten Frameworks ermöglicht Ihnen Vue, wiederverwendbare Blöcke von Markup über Components zu erstellen. Die meiste Zeit werden Vue-Components unter Verwendung einer speziellen HTML-Templatesyntax geschrieben. Wenn Sie mehr Kontrolle benötigen als die HTML-Syntax zulässt, können Sie JSX oder einfache JavaScript-Funktionen verwenden, um Ihre Components zu definieren.

Während Sie dieses Tutorial durcharbeiten, möchten Sie möglicherweise den [Vue Guide](https://vuejs.org/guide/introduction.html) und die [API-Dokumentation](https://vuejs.org/api/) in anderen Tabs geöffnet halten, damit Sie bei Bedarf darauf verweisen können, wenn Sie mehr Informationen zu einem bestimmten Thema wünschen.

## Installation

Um Vue auf einer bestehenden Website zu verwenden, können Sie eines der folgenden [`<script>`](/de/docs/Web/HTML/Element/script) Elemente auf einer Seite einfügen. Dies ermöglicht es Ihnen, Vue auf bestehenden Seiten zu verwenden, weshalb Vue stolz darauf ist, ein fortschrittliches Framework zu sein. Dies ist eine großartige Option, wenn ein bestehendes Projekt von einer Bibliothek wie jQuery zu Vue migriert wird. Mit dieser Methode können Sie viele der Kernfunktionen von Vue nutzen, wie z.B. die Attribute, benutzerdefinierte Components und Datenverwaltung.

- Entwicklungs-Script (nicht optimiert, aber enthält Konsolenwarnungen, was für die Entwicklung großartig ist.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- Produktions-Script (Optimierte Version, minimale Konsolenwarnungen. Es wird empfohlen, eine Versionsnummer anzugeben, wenn Vue auf Ihrer Website eingebunden wird, damit bei Aktualisierungen des Frameworks Ihre Live-Site nicht ohne Ihr Wissen kaputt geht.)

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

Diese Vorgehensweise hat jedoch einige Einschränkungen. Um komplexere Apps zu erstellen, sollten Sie das [Vue npm-Paket](https://www.npmjs.com/package/vue) verwenden. Dies ermöglicht es Ihnen, erweiterte Funktionen von Vue zu nutzen und Tools wie Vite oder Webpack zu verwenden. Um das Erstellen von Apps mit Vue zu erleichtern, gibt es ein CLI-Scaffolding-Tool [create-vue](https://github.com/vuejs/create-vue), um den Entwicklungsprozess zu optimieren. Um `create-vue` zu verwenden, benötigen Sie:

1. Node.js 20 installiert.
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) oder [yarn](https://yarnpkg.com/).

> [!NOTE]
> Wenn Sie die obigen Programme nicht installiert haben, finden Sie [hier weitere Informationen zur Installation von npm und Node.js](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups).

Um Vue zu installieren und ein neues Projekt zu initialisieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm create vue@latest
```

Oder wenn Sie lieber yarn verwenden möchten:

```bash
yarn create vue@latest
```

Dieser Befehl gibt Ihnen eine Liste von Projektkonfigurationen, die Sie verwenden können. Es gibt einige Standards, aber Sie können Ihre eigenen projektspezifischen Einstellungen wählen. Diese Optionen ermöglichen es Ihnen, Dinge wie TypeScript, Linting, vue-router, Testing und mehr zu konfigurieren.
Wir werden die Optionen in den Initialisierungsschritten unten durchgehen.

## Initialisierung eines neuen Projekts

Um verschiedene Funktionen von Vue zu erkunden, werden wir eine Beispiel-To-Do-Listen-App entwickeln. Wir beginnen damit, `create-vue` zu verwenden, um ein neues Gerüst für unsere App zu erstellen.
Im Terminal, führen Sie `cd` zu dem Ort aus, an dem Sie Ihr Beispiel-App erstellen möchten, und führen Sie dann `npm create vue@latest` (oder `yarn create vue@latest`, wenn Sie Yarn bevorzugen) aus.

Das interaktive Tool lässt Sie einige Optionen auswählen und Sie können mit <kbd>Enter</kbd> fortfahren.
Für dieses Projekt verwenden wir die folgende Konfiguration:

```plain
✔ Projektname: … todo-vue
✔ TypeScript hinzufügen? … Nein
✔ JSX-Unterstützung hinzufügen? … Nein
✔ Vue Router für die Entwicklung von Single Page Applications hinzufügen? … Nein
✔ Pinia für die Zustandsverwaltung hinzufügen? … Nein
✔ Vitest für Unit-Testing hinzufügen? … Nein
✔ Eine End-to-End-Testlösung hinzufügen? › Nein
✔ ESLint für Code-Qualität hinzufügen? … Ja
? Prettier für Code-Formatierung hinzufügen? › Ja
```

Nachdem Sie diese Optionen ausgewählt haben, ist Ihre Projektstruktur jetzt konfiguriert und die Abhängigkeiten sind in einer `package.json` Datei definiert.
Die nächsten Schritte sind die Installation der Abhängigkeiten und das Starten des Servers, und das Tool gibt Ihnen praktisch die Befehle aus, die Sie dazu benötigen:

```plain
Projekt-Gerüst wird in /path/to/todo-vue erstellt...

Fertig. Jetzt ausführen:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## Projektstruktur

Wenn alles erfolgreich verlaufen ist, sollte das CLI eine Reihe von Dateien und Verzeichnissen für Ihr Projekt erstellt haben. Die bedeutendsten sind wie folgt:

- `package.json`: Diese Datei enthält die Liste der Abhängigkeiten für Ihr Projekt sowie einige Metadaten und `eslint`-Konfiguration.
- `yarn.lock`: Wenn Sie `yarn` als Ihren Paketmanager ausgewählt haben, wird diese Datei mit einer Liste aller Abhängigkeiten und Unter-Abhängigkeiten erstellt, die Ihr Projekt benötigt.
- `jsconfig.json`: Dies ist eine Konfigurationsdatei für [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) und gibt VS Code Kontext über Ihre Projektstruktur und unterstützt die Autovervollständigung.
- `vite.config.js`: Dies ist die Konfigurationsdatei für den [Vite](https://vitejs.dev/) Entwicklungsserver, der Ihr Projekt auf Ihrem lokalen Rechner erstellt und bereitstellt.
  Der Vite-Server beobachtet Quellcode-Dateien auf Änderungen und kann das Projekt bei Änderungen sofort neu laden.
- `public`: Dieses Verzeichnis enthält statische Assets, die während des Builds veröffentlicht werden.
  - `favicon.ico`: Dies ist das Favicon Ihrer App. Derzeit ist es das Vue-Logo.
- `index.html`: Ihre Vue-App wird von dieser HTML-Seite aus betrieben.
- `src`: Dieses Verzeichnis enthält den Kern Ihrer Vue-App.

  - `main.js`: dies ist der Einstiegspunkt Ihrer Anwendung. Derzeit initialisiert diese Datei Ihre Vue-Anwendung und gibt an, welches HTML-Element in der `index.html`-Datei Ihre App angehängt werden soll. Diese Datei ist oft der Ort, an dem Sie globale Components oder zusätzliche Vue-Bibliotheken registrieren.
  - `App.vue`: dies ist das Top-Level-Component in Ihrer Vue-App. Weiter unten finden Sie mehr Erklärungen zu Vue-Components.
  - `components`: dieses Verzeichnis ist, wo Sie Ihre Components aufbewahren. Derzeit enthält es nur ein Beispiel-Component.
  - `assets`: dieses Verzeichnis dient zur Speicherung von statischen Assets wie CSS und Bildern. Da sich diese Dateien im Quellverzeichnis befinden, können sie von Webpack verarbeitet werden. Das bedeutet, dass Sie Pre-Processor wie [Sass/SCSS](https://sass-lang.com/) oder [Stylus](https://stylus-lang.com/) verwenden können.

> [!NOTE]
> Abhängig von den Optionen, die Sie bei der Erstellung eines neuen Projekts ausgewählt haben, könnten auch andere Verzeichnisse vorhanden sein (zum Beispiel, wenn Sie einen Router auswählen, haben Sie auch ein `views`-Verzeichnis).

## .vue Dateien (Single File Components)

Ähnlich wie in vielen Frontend-Frameworks sind Components ein zentraler Bestandteil beim Erstellen von Apps in Vue. Diese Components ermöglichen es Ihnen, eine große Anwendung in diskrete Bausteine zu zerlegen, die separat erstellt und verwaltet werden können, und Daten bei Bedarf zwischen diesen austauschen können. Diese kleinen Bausteine können Ihnen helfen, Ihren Code besser zu verstehen und zu testen.

Während einige Frameworks Sie dazu ermutigen, Ihr Template, Ihre Logik und Ihre Styling-Codes in separate Dateien zu unterteilen, nimmt Vue den gegenteiligen Ansatz. Mit [Single File Components (SFC)](https://vuejs.org/guide/scaling-up/sfc.html) können Sie Ihre Templates, das entsprechende Skript und CSS zusammen in einer einzigen Datei mit der Endung `.vue` gruppieren. Diese Dateien werden von einem JS-Build-Tool verarbeitet (wie Vite oder Webpack), was bedeutet, dass Sie von Build-Tooling in Ihrem Projekt profitieren können. Dadurch können Sie Tools wie Babel, TypeScript, SCSS und mehr verwenden, um komplexere Components zu erstellen.

Schauen wir in das `src`-Verzeichnis des mit dem CLI erstellten Projekts und begutachten Sie Ihre erste `.vue`-Datei: `App.vue`.

### App.vue

Öffnen Sie Ihre `App.vue`-Datei — Sie werden sehen, dass sie aus drei Teilen besteht: `<template>`, `<script>` und `<style>`, die das Template des Components, die Skripting- und Stylinginformationen enthalten. Alle Single File Components haben diese gleiche grundlegende Struktur.

`<template>` enthält die gesamte Markup-Struktur und Anzeigelogik Ihres Components. Ihr Template kann beliebiges gültiges HTML sowie einige Vue-spezifische Syntax enthalten, die wir später behandeln werden.

> [!NOTE]
> Durch das Setzen des `lang`-Attributs am `<template>`-Tag können Sie die Pug-Templatesyntax anstelle von standardmäßigem HTML verwenden – `<template lang="pug">`. Wir werden jedoch im Verlauf dieses Tutorials bei standardmäßigem HTML bleiben, es ist jedoch nützlich zu wissen, dass dies möglich ist.

`<script>` enthält die gesamte Nicht-Anzeigelogik Ihres Components. Am wichtigsten ist, dass sich Ihr `<script>`-Tag dort befindet, wo Sie Components lokal registrieren, Component-Eingaben (props) definieren, den lokalen Zustand handhaben, Methoden definieren und mehr. Ihr Build-Schritt wird dieses Objekt verarbeiten und es (mit Ihrem Template) in ein Vue-Component mit einer `render()`-Funktion umwandeln.

Im Fall von `App.vue` werden zwei Components `TheWelcome` und `HelloWorld` durch Importe registriert. Wenn Sie auf diese Weise ein Component registrieren, registrieren Sie es lokal. Lokal registrierte Components können nur innerhalb der Components verwendet werden, die sie registrieren, daher müssen Sie sie in jeder Component-Datei importieren und registrieren, die sie verwendet. Dies ist nützlich für {{Glossary("Tree shaking")}} (nicht geladenen Code entfernen) und Bundle-Splitting (Code nur bei Bedarf laden), da nicht jede Seite in Ihrer App unbedingt jedes Component benötigt.

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> Wenn Sie [TypeScript](https://www.typescriptlang.org/) verwenden möchten, müssen Sie das `lang`-Attribut am `<script>`-Tag setzen, um dem Compiler mitzuteilen, dass Sie TypeScript verwenden – `<script lang="ts">`.

`<style>` ist der Ort, an dem Sie Ihr CSS für das Component schreiben. Wenn Sie ein `scoped`-Attribut hinzufügen – `<style scoped>` – wird Vue die Stile auf die Inhalte Ihrer SFC beschränken. Dies funktioniert ähnlich wie CSS-in-JS-Lösungen, ermöglicht es Ihnen jedoch, einfach normales CSS zu schreiben.

> [!NOTE]
> Wenn Sie bei der Erstellung des Projekts über das CLI einen CSS-Präprozessor ausgewählt haben, können Sie ein `lang`-Attribut zum `<style>`-Tag hinzufügen, sodass die Inhalte zur Build-Zeit verarbeitet werden können. Zum Beispiel ermöglicht `<style lang="scss">` Ihnen die Verwendung der SCSS-Syntax in Ihren Stylinginformationen.

## Ausführung der App lokal

Das `create-vue`-Tool kommt mit Vite als einem eingebauten Entwicklungsserver. Dies ermöglicht es Ihnen, Ihre App lokal auszuführen, sodass Sie sie leicht testen können, ohne einen Server von Grund auf konfigurieren zu müssen. Das CLI fügt die Befehle als npm-Skripte zur `package.json`-Datei des Projekts hinzu, sodass Sie sie leicht ausführen können.

Versuchen Sie in Ihrem Terminal, `npm run dev` (oder `yarn dev`, wenn Sie yarn bevorzugen) auszuführen. Ihr Terminal sollte etwa Folgendes ausgeben:

```plain
  VITE v5.0.11  fertig in 312 ms

  ➜  Lokal:   http://localhost:5173/
  ➜  Netzwerk: verwenden Sie --host zum Freigeben
  ➜  drücken Sie h + Eingabe, um Hilfe anzuzeigen
```

Wenn Sie zu der "localhost"-Adresse in einem neuen Browser-Tab navigieren, sollten Sie Ihre App sehen (diese Adresse sollte `http://localhost:5173/` wie oben angegeben sein, kann aber je nach Ihrer Einrichtung variieren). Im Moment sollte die App eine Willkommensnachricht, einen Link zur Vue-Dokumentation, Links zu den Plugins, die Sie bei der Initialisierung der App mit Ihrem CLI hinzugefügt haben, und einige andere nützliche Links zur Vue-Community und zum Ökosystem enthalten.

## Einige Änderungen vornehmen

Lassen Sie uns unsere erste Änderung an der App vornehmen — wir löschen das Vue-Logo. Öffnen Sie die `App.vue`-Datei und löschen Sie das [`<img>`](/de/docs/Web/HTML/Element/img)-Element aus dem Template-Abschnitt:

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

Wenn Ihr Server immer noch läuft, sollten Sie das Entfernen des Logos von der gerenderten Seite nahezu sofort sehen. Lassen Sie uns auch das `HelloWorld`-Component aus unserem Template entfernen.

Löschen Sie zunächst diese Zeile:

```vue
<HelloWorld msg="You did it!" />
```

Wenn Sie Ihre `App.vue`-Datei jetzt speichern, zeigt Ihr Editor möglicherweise einen Fehler, weil wir das `HelloWorld`-Component registriert, es aber nicht verwendet haben. Wir müssen auch die Zeilen aus dem `<script>`-Element entfernen, die das Component importieren und registrieren:

Löschen Sie diese Zeilen jetzt:

```js
import HelloWorld from "./components/HelloWorld.vue";
```

Wenn Sie alles innerhalb des `<template>`-Tags entfernen, sehen Sie in Ihrem Editor eine Fehlermeldung, die besagt `The template requires child element`.
Sie können dies beheben, indem Sie etwas Inhalt innerhalb des `<template>`-Tags hinzufügen, und wir können mit einem neuen `<h1>`-Element innerhalb eines `<div>` beginnen.
Da wir im Folgenden eine To-Do-Listen-App erstellen werden, setzen wir unsere Überschrift auf "To-Do Liste" wie folgt:

```vue
<template>
  <div id="app">
    <h1>To-Do Liste</h1>
  </div>
</template>
```

`App.vue` wird jetzt unsere Überschrift so anzeigen, wie Sie es erwarten.

## Zusammenfassung

Lassen Sie uns hier für jetzt aufhören. Wir haben etwas über die Ideen hinter Vue gelernt, ein Gerüst für unsere Beispiel-App erstellt, inspiziert und einige erste Änderungen vorgenommen.

Mit einer grundlegenden Einführung aus dem Weg, werden wir jetzt weitergehen und unsere Beispiel-App aufbauen, eine einfache To-Do-Liste-Anwendung, die es uns ermöglicht, eine Liste von Elementen zu speichern, sie abzuhaken, wenn sie fertig sind, und die Liste nach allen, abgeschlossenen und nicht abgeschlossenen Aufgaben zu filtern.

Im nächsten Artikel werden wir unser erstes benutzerdefiniertes Component erstellen und uns einige wichtige Konzepte ansehen, wie das Übergeben von Props in das Component und das Speichern seines Datenzustands.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
