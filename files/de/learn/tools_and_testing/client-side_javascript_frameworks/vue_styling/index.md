---
title: Styling von Vue-Komponenten mit CSS
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling
l10n:
  sourceCommit: 289d6314f3368aa3e28524e7d090f6e9c704e3b1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Es ist endlich an der Zeit, unsere App ein wenig hübscher zu machen. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, wie man Vue-Komponenten mit CSS stylen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnisse der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Konsole/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als eine Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und die Nutzung einiger der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Render-Funktionen) benötigen Sie eine Konsole mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Styling von Vue-Komponenten zu lernen.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir dazu übergehen, unserer App erweiterte Funktionen hinzuzufügen, sollten wir einige grundlegende CSS-Einstellungen hinzufügen, um sie besser aussehen zu lassen. Vue bietet drei gängige Ansätze zum Styling von Apps:

- Externe CSS-Dateien.
- Globale Styles in Single File Components (`.vue`-Dateien).
- Komponenten-spezifische Styles in Single File Components.

Um Sie mit jedem dieser Ansätze vertraut zu machen, werden wir eine Kombination aus allen dreien verwenden, um unserer App ein schöneres Aussehen und Gefühl zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und sie global auf Ihre App anwenden. Sehen wir uns an, wie das gemacht wird.

Erstellen Sie zunächst eine Datei namens `reset.css` im `src/assets`-Verzeichnis. Dateien in diesem Ordner werden von Webpack verarbeitet. Dies bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Postprozessoren (wie PostCSS) verwenden können.

Während dieses Tutorial solche Tools nicht verwenden wird, ist es gut zu wissen, dass solche Codes in dem Assets-Ordner automatisch verarbeitet werden.

Fügen Sie die folgenden Inhalte in die Datei `reset.css` ein:

```css
/*reset.css*/
/* RESETS */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: 3px dashed #228bec;
}
html {
  font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  appearance: none;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  /* 1 */
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  font:
    1.6rem/1.25 "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/
```

Importieren Sie als Nächstes in Ihrer Datei `src/main.js` die Datei `reset.css` wie folgt:

```js
import "./assets/reset.css";
```

Dies führt dazu, dass die Datei während des Build-Schritts aufgenommen und automatisch auf unsere Website hinzugefügt wird.

Die Reset-Styles sollten nun auf die App angewendet werden. Die folgenden Bilder zeigen das Aussehen der App vor und nach dem Anwenden des Resets.

Vorher:

![die To-Do App mit teilweiser stilistischer Anpassung; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen müssen noch gestylt werden](todo-app-unstyled.png)

Nachher:

![die To-Do App mit teilweiser stilistischer Anpassung; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen müssen noch gestylt werden](todo-app-reset-styles.png)

Auffällige Veränderungen sind die Entfernung der Listenpunkte, Änderungen der Hintergrundfarbe und Änderungen an den Basis-Button- und Eingabestyles.

## Hinzufügen von globalen Styles zu Single File Components

Nun, da wir unser CSS über Browser hinweg einheitlich zurückgesetzt haben, müssen wir die Styles ein wenig mehr anpassen. Es gibt einige Styles, die wir über alle Komponenten in unserer App anwenden möchten. Während das direkte Hinzufügen dieser Dateien zum `reset.css`-Stylesheet funktionieren würde, werden wir sie stattdessen in die `<style>`-Tags in `App.vue` einfügen, um zu demonstrieren, wie dies verwendet werden kann.

Es gibt bereits einige Styles in der Datei. Lassen Sie uns diese entfernen und sie durch die untenstehenden Styles ersetzen. Diese Styles bewirken einiges — sie fügen Buttons und Eingaben ein Styling hinzu und passen das `#app`-Element und dessen Kinder an.

Aktualisieren Sie das `<style>`-Element Ihrer `App.vue`-Datei, damit es folgendermaßen aussieht:

```html
<style>
  /* Global styles */
  .btn {
    padding: 0.8rem 1rem 0.7rem;
    border: 0.2rem solid #4d4d4d;
    cursor: pointer;
    text-transform: capitalize;
  }
  .btn__danger {
    color: #fff;
    background-color: #ca3c3c;
    border-color: #bd2130;
  }
  .btn__filter {
    border-color: lightgrey;
  }
  .btn__danger:focus {
    outline-color: #c82333;
  }
  .btn__primary {
    color: #fff;
    background-color: #000;
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
  }
  .btn-group > * {
    flex: 1 1 auto;
  }
  .btn-group > * + * {
    margin-left: 0.8rem;
  }
  .label-wrapper {
    margin: 0;
    flex: 0 0 100%;
    text-align: center;
  }
  [class*="__lg"] {
    display: inline-block;
    width: 100%;
    font-size: 1.9rem;
  }
  [class*="__lg"]:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 620px) {
    [class*="__lg"] {
      font-size: 2.4rem;
    }
  }
  .visually-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  [class*="stack"] > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  .stack-small > * + * {
    margin-top: 1.25rem;
  }
  .stack-large > * + * {
    margin-top: 2.5rem;
  }
  @media screen and (min-width: 550px) {
    .stack-small > * + * {
      margin-top: 1.4rem;
    }
    .stack-large > * + * {
      margin-top: 2.8rem;
    }
  }
  /* End global styles */
  #app {
    background: #fff;
    margin: 2rem 0 4rem 0;
    padding: 1rem;
    padding-top: 0;
    position: relative;
    box-shadow:
      0 2px 4px 0 rgb(0 0 0 / 20%),
      0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
  }
  @media screen and (min-width: 550px) {
    #app {
      padding: 4rem;
    }
  }
  #app > * {
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
  }
  #app > form {
    max-width: 100%;
  }
  #app h1 {
    display: block;
    min-width: 100%;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 1rem;
  }
</style>
```

Wenn Sie die App überprüfen, werden Sie sehen, dass unsere To-Do-Liste jetzt in einer Karte ist und wir eine bessere Formatierung unserer To-Do-Elemente haben. Jetzt können wir damit beginnen, unsere Komponenten zu bearbeiten, um einige dieser Styles zu verwenden.

![die To-Do App mit teilweiser stilistischer Anpassung; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen müssen noch gestylt werden](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die Button-CSS-Klassen zum `<button>` in unserer `ToDoForm`-Komponente anwenden. Da Vue-Vorlagen gültiges HTML sind, wird dies genauso gemacht, wie Sie es im normalen HTML tun würden — durch Hinzufügen eines `class=""`-Attributes zum Element.

Fügen Sie `class="btn btn__primary btn__lg"` zu Ihrem `<button>`-Element des Formulars hinzu:

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Da wir gerade dabei sind, können wir noch eine weitere semantische und stilistische Änderung vornehmen. Da unser Formular einen bestimmten Abschnitt unserer Seite markiert, könnte es von einem `<h2>`-Element profitieren. Das `label` kennzeichnet jedoch bereits den Zweck des Formulars. Um uns nicht zu wiederholen, lassen Sie uns unser Label in ein `<h2>` einbetten. Es gibt auch noch einige weitere globale CSS-Styles, die wir hinzufügen können. Wir fügen auch die Klasse `input__lg` zu unserem `<input>`-Element hinzu.

Aktualisieren Sie Ihre `ToDoForm`-Vorlage, sodass sie folgendermaßen aussieht:

```html
<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
      class="input__lg" />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
  </form>
</template>
```

Lassen Sie uns auch die Klasse `stack-large` zum `<ul>`-Tag in unserer `App.vue`-Datei hinzufügen. Dies wird helfen, den Abstand unserer To-Do-Elemente etwas zu verbessern.

Aktualisieren Sie es wie folgt:

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von geschachtelten Styles

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem`-Komponente. Um die Stildefinitionen in der Nähe der Komponente zu halten, können wir ein `<style>`-Element darin hinzufügen. Wenn diese Styles jedoch Dinge außerhalb dieser Komponente ändern, könnte es schwierig werden, die verantwortlichen Styles zu finden und das Problem zu beheben. Hierbei kann das `scoped`-Attribut nützlich sein — es fügt einen eindeutigen HTML-`data`-Attribut-Selektor an alle Ihre Styles an und verhindert, dass diese global kollidieren.

Um den `scoped`-Modifier zu verwenden, erstellen Sie ein `<style>`-Element in `ToDoItem.vue`, am unteren Ende der Datei, und geben Sie ihm ein `scoped`-Attribut:

```html
<style scoped>
  /* … */
</style>
```

Kopieren Sie als Nächstes das folgende CSS in das neu erstellte `<style>`-Element:

```css
.custom-checkbox > .checkbox-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
.custom-checkbox > .checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  height: 2.5rem;
  margin-top: 0;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  appearance: none;
}
.custom-checkbox > input:focus {
  outline: 3px dashed #fd0;
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}
.custom-checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
}
.custom-checkbox > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;
}
.custom-checkbox > .checkbox-label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
.custom-checkbox > label::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid currentcolor;
  background: transparent;
}
.custom-checkbox > input[type="checkbox"]:focus + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.custom-checkbox > label::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}
.custom-checkbox > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
@media only screen and (min-width: 40rem) {
  label,
  input,
  .custom-checkbox {
    font-size: 19px;
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
```

Nun müssen wir einige CSS-Klassen zu unserer Vorlage hinzufügen, um die Styles zu verbinden.

Fügen Sie der Wurzel-`<div>` eine `custom-checkbox`-Klasse hinzu. Fügen Sie dem `<input>` eine `checkbox`-Klasse hinzu. Zuletzt fügen Sie dem `<label>` eine `checkbox-label`-Klasse hinzu. Die aktualisierte Vorlage sieht wie folgt aus:

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

Die App sollte jetzt benutzerdefinierte Kontrollkästchen haben. Ihre App sollte etwa aussehen wie auf dem untenstehenden Screenshot.

![die To-Do App mit vollständigem Styling. Das Eingabeformular ist jetzt richtig gestylt und die To-Do-Elemente haben jetzt Abstände und benutzerdefinierte Kontrollkästchen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeit am Styling unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel werden wir zur Funktionserweiterung unserer App zurückkehren, nämlich durch die Verwendung einer berechneten Eigenschaft, um unserer App eine Zählung der abgeschlossenen To-Do-Elemente hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
