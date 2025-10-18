---
title: Styling von Vue-Komponenten mit CSS
slug: Learn_web_development/Core/Frameworks_libraries/Vue_styling
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist endlich an der Zeit, unserer App ein schöneres Aussehen zu verleihen. In diesem Artikel untersuchen wir die verschiedenen Möglichkeiten, wie Vue-Komponenten mit CSS gestaltet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen,
          sowie Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeilenumgebung</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet wird. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Render-Funktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Vue-Komponenten gestaltet.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir fortfahren, um weitere fortgeschrittene Funktionen zu unserer App hinzuzufügen, sollten wir einige grundlegende CSS-Styles hinzufügen, um das Erscheinungsbild zu verbessern. Vue bietet drei gängige Ansätze zur Gestaltung von Apps:

- Externe CSS-Dateien.
- Globale Styles in Single File Components (`.vue`-Dateien).
- Komponenten-spezifische Styles in Single File Components.

Um Ihnen alle drei vorzustellen, verwenden wir eine Kombination aus allen, um unserer App ein ansprechenderes Aussehen zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einfügen und sie global auf Ihre App anwenden. Schauen wir uns an, wie das gemacht wird.

Erstellen Sie zunächst eine Datei mit dem Namen `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von webpack verarbeitet. Das bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Postprozessoren (wie PostCSS) verwenden können.

Obwohl dieses Tutorial solche Tools nicht nutzen wird, ist es gut zu wissen, dass der Code beim Einfügen in den Assets-Ordner automatisch verarbeitet wird.

Fügen Sie den folgenden Inhalt in die Datei `reset.css` ein:

```css
/* reset.css */
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
    "Helvetica",
    "Arial",
    sans-serif;
  background-color: whitesmoke;
  color: #4d4d4d;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
@media screen and (width >= 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/* END RESETS */
```

Importieren Sie als nächstes die Datei `reset.css` in Ihrer Datei `src/main.js` wie folgt:

```js
import "./assets/reset.css";
```

Dadurch wird die Datei während des Build-Schritts aufgenommen und automatisch zu unserer Website hinzugefügt.

Die Reset-Styles sollten jetzt auf die App angewendet worden sein. Die folgenden Bilder zeigen das Aussehen der App vor und nach der Anwendung des Reset.

Vorher:

![die todo-App mit teilweise hinzugefügtem Styling; die App befindet sich nun in einer Karte, aber einige der internen Elemente benötigen noch Styling](todo-app-unstyled.png)

Nachher:

![die todo-App mit teilweise hinzugefügtem Styling; die App befindet sich nun in einer Karte, aber einige der internen Elemente benötigen noch Styling](todo-app-reset-styles.png)

Bemerkbare Änderungen sind die Entfernung der Listenpunkte, Änderungen der Hintergrundfarbe und Änderungen an den Grundstilen von Schaltflächen und Eingabefeldern.

## Hinzufügen globaler Styles zu Single File Components

Nachdem wir unser CSS browserspezifisch zurückgesetzt haben, müssen wir die Styles etwas mehr anpassen. Es gibt einige Styles, die wir auf Komponenten in unserer App anwenden möchten. Obwohl das direkte Hinzufügen dieser Dateien zum `reset.css`-Stylesheet möglich wäre, fügen wir sie stattdessen zu den `<style>`-Tags in `App.vue` hinzu, um zu demonstrieren, wie dies verwendet werden kann.

Es sind bereits einige Styles in der Datei vorhanden. Lassen Sie uns diese entfernen und durch die unten stehenden Styles ersetzen. Diese Styles fügen einige Anpassungen für Schaltflächen und Eingabefelder hinzu und übernehmen das Styling des `#app`-Elements und seiner Kinder.

Aktualisieren Sie das `<style>`-Element Ihrer Datei `App.vue`, sodass es wie folgt aussieht:

```vue
<style>
/* Global styles */
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}
.btn__danger {
  color: white;
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
  color: white;
  background-color: black;
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
@media screen and (width >= 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: rect(1px 1px 1px 1px);
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
@media screen and (width >= 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
/* End global styles */
#app {
  background: white;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
}
@media screen and (width >= 550px) {
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

Wenn Sie die App überprüfen, sehen Sie, dass unsere To-do-Liste jetzt in einer Karte ist und wir eine bessere Formatierung unserer To-do-Elemente haben. Nun können wir beginnen, unsere Komponenten so zu bearbeiten, dass sie einige dieser Styles verwenden.

![die todo-App mit teilweise hinzugefügtem Styling; die App befindet sich nun in einer Karte, aber einige der internen Elemente benötigen noch Styling](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die CSS-Klassen der Schaltfläche auf die `<button>`-Element in unserer `ToDoForm`-Komponente anwenden. Da Vue-Templates gültiges HTML sind, geschieht dies auf die gleiche Weise, wie Sie es in einfachem HTML tun würden — durch Hinzufügen eines `class=""`-Attributs zum Element.

Fügen Sie `class="btn btn__primary btn__lg"` zu Ihrem `<button>`-Element des Formulars hinzu:

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Da wir gerade hier sind, gibt es noch eine weitere semantische und stilistische Änderung, die wir vornehmen können. Da unser Formular einen bestimmten Abschnitt unserer Seite darstellt, wäre ein `<h2>`-Element hilfreich. Das Label gibt jedoch bereits den Zweck des Formulars an. Um zu vermeiden, uns zu wiederholen, lassen Sie uns unser Label in ein `<h2>` einbetten. Es gibt auch einige andere globale CSS-Styles, die wir hinzufügen können. Wir fügen der `<input>`-Element auch die `input__lg`-Klasse hinzu.

Aktualisieren Sie Ihr `ToDoForm`-Template, sodass es folgendermaßen aussieht:

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

Fügen Sie auch die `stack-large`-Klasse zum `<ul>`-Tag in Ihrer `App.vue`-Datei hinzu. Dies wird dazu beitragen, den Abstand unserer To-do-Elemente etwas zu verbessern.

Aktualisieren Sie es wie folgt:

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von scoped Styles

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem`-Komponente. Um die Stildefinitionen in der Nähe der Komponente zu halten, können wir ein `<style>`-Element darin hinzufügen. Wenn diese Styles jedoch Dinge außerhalb dieser Komponente ändern, könnte es schwierig sein, die verantwortlichen Styles zu finden und das Problem zu beheben. Hier kann das Attribut `scoped` nützlich sein — dies fügt ein einzigartiges HTML-Datenattribut-Selektor zu allen Ihren Styles hinzu und verhindert, dass sie global kollidieren.

Um den `scoped`-Modifier zu verwenden, erstellen Sie ein `<style>`-Element in `ToDoItem.vue` am Ende der Datei und geben Sie ihm ein `scoped`-Attribut:

```vue
<style scoped>
/* … */
</style>
```

Kopieren Sie anschließend das folgende CSS in das neu erstellte `<style>`-Element:

```css
.custom-checkbox > .checkbox-label {
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
.custom-checkbox > .checkbox {
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  margin-top: 0;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  appearance: none;
}
.custom-checkbox > input:focus {
  outline: 3px dashed #ffdd00;
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}
.custom-checkbox {
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
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
  border: 2px solid currentColor;
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
@media only screen and (width >= 40rem) {
  label,
  input,
  .custom-checkbox {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
```

Nun müssen wir einige CSS-Klassen zu unserem Template hinzufügen, um die Styles zu verbinden.

Zum root `<div>` fügen Sie die Klasse `custom-checkbox` hinzu. Zum `<input>`, fügen Sie die Klasse `checkbox` hinzu. Zum `<label>` fügen Sie die Klasse `checkbox-label` hinzu. Das aktualisierte Template finden Sie unten:

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

Die App sollte jetzt benutzerdefinierte Checkboxen haben. Ihre App sollte ungefähr wie der unten stehende Screenshot aussehen.

![die todo-App mit komplettem Styling. Das Eingabeformular ist nun richtig gestylt, und die To-do-Elemente haben jetzt Abstände und benutzerdefinierte Checkboxen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeit beim Styling unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel werden wir zur Hinzufügung einiger weiterer Funktionen zu unserer App zurückkehren, insbesondere indem wir eine berechnete Eigenschaft verwenden, um eine Zählung der erledigten To-do-Elemente zu unserer App hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}
