---
title: Styling von Vue-Komponenten mit CSS
slug: Learn_web_development/Core/Frameworks_libraries/Vue_styling
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist endlich an der Zeit, unsere App etwas schöner aussehen zu lassen. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, wie Sie Vue-Komponenten mit CSS stylen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>-, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen, Kenntnisse über das <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.</p>
        <p>Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installierten node + npm.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Styling von Vue-Komponenten zu lernen.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir weitermachen und unserer App fortgeschrittenere Funktionen hinzufügen, sollten wir einige grundlegende CSS hinzufügen, um sie besser aussehen zu lassen. Vue bietet drei gängige Ansätze zum Stylen von Apps:

- Externe CSS-Dateien.
- Globale Styles in Single File Components (`.vue` Dateien).
- Komponenten-spezifische Styles in Single File Components.

Um Ihnen dabei zu helfen, sich mit jedem dieser Ansätze vertraut zu machen, werden wir eine Kombination aus allen drei verwenden, um unserer App einen schöneren Look und ein besseres Gefühl zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und diese global auf Ihre App anwenden. Lassen Sie uns sehen, wie dies gemacht wird.

Erstellen Sie zunächst eine Datei namens `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von webpack verarbeitet. Das bedeutet, dass wir CSS-Preprozessoren (wie SCSS) oder Postprozessoren (wie PostCSS) verwenden können.

Während wir in diesem Tutorial solche Tools nicht verwenden werden, ist es gut zu wissen, dass Code, der in den Assets-Ordner eingefügt wird, automatisch verarbeitet wird.

Fügen Sie den folgenden Inhalt zur Datei `reset.css` hinzu:

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
@media screen and (width >= 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/
```

Importieren Sie als Nächstes die Datei `reset.css` in Ihre `src/main.js` Datei wie folgt:

```js
import "./assets/reset.css";
```

Dies führt dazu, dass die Datei während des Build-Schritts erfasst und automatisch zu unserer Website hinzugefügt wird.

Die Reset-Styles sollten jetzt auf die App angewendet werden. Die Bilder unten zeigen das Aussehen der App vor und nach dem Anwenden des Reset-Styles.

Vorher:

![die To-do-App mit teilweise hinzugefügtem Styling; die App befindet sich nun in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-unstyled.png)

Nachher:

![die To-do-App mit teilweise hinzugefügtem Styling; die App befindet sich nun in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-reset-styles.png)

Bemerkenswerte Änderungen sind das Entfernen der Listenpunkte, Änderungen der Hintergrundfarbe und Änderungen der Basis-Button- und Eingabefelder-Stile.

## Hinzufügen globaler Styles zu Single File Components

Jetzt, da wir unsere CSS-Stile über Browser hinweg vereinheitlicht haben, müssen wir die Styles ein wenig mehr anpassen. Es gibt einige Styles, die wir über die Komponenten unserer App anwenden möchten. Während das direkte Hinzufügen dieser Dateien zum `reset.css` Stylesheet funktionieren würde, werden wir stattdessen diese in die `<style>`-Tags in `App.vue` einfügen, um zu demonstrieren, wie dies verwendet werden kann.

Es sind bereits einige Styles in der Datei vorhanden. Lassen Sie uns diese entfernen und durch die untenstehenden Styles ersetzen. Diese Styles fügen einigen Elementen Stil hinzu — Style für Buttons und Eingaben sowie Anpassungen für das `#app`-Element und dessen Kinder.

Aktualisieren Sie das `<style>`-Element Ihrer `App.vue` Datei, sodass es wie folgt aussieht:

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
  background: #fff;
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

Wenn Sie die App überprüfen, werden Sie sehen, dass unsere To-do-Liste jetzt in einer Karte ist und wir eine bessere Formatierung unserer To-do-Items haben. Jetzt können wir die Komponenten durchgehen und einige dieser Styles verwenden.

![die To-do-App mit teilweise hinzugefügtem Styling; die App befindet sich nun in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die Button-CSS-Klassen zum `<button>` in unserer `ToDoForm` Komponente anwenden. Da Vue-Vorlagen gültiges HTML sind, wird dies auf die gleiche Weise durchgeführt, wie Sie es möglicherweise in normalem HTML tun würden — durch Hinzufügen eines `class=""` Attributs zum Element.

Fügen Sie `class="btn btn__primary btn__lg"` zu Ihrem `<button>` Element des Formulars hinzu:

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Während wir hier sind, gibt es noch eine weitere semantische und stilistische Änderung, die wir vornehmen können. Da unser Formular einen bestimmten Abschnitt unserer Seite darstellt, könnte es von einem `<h2>`-Element profitieren. Da das Label jedoch bereits den Zweck des Formulars beschreibt, vermeiden wir Wiederholungen, indem wir unser Label in ein `<h2>`-Element einbetten. Es gibt auch einige andere globale CSS-Styles, die wir ebenfalls hinzufügen können. Wir werden auch die Klasse `input__lg` zu unserem `<input>`-Element hinzufügen.

Aktualisieren Sie Ihre `ToDoForm` Vorlage, sodass sie wie folgt aussieht:

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

Fügen wir der `<ul>`-Tag in unserer `App.vue` Datei auch die Klasse `stack-large` hinzu. Dies wird helfen, den Abstand unserer To-do-Items etwas zu verbessern.

Aktualisieren Sie es wie folgt:

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von Scoped-Stilen

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem` Komponente. Um die Stildefinitionen nah zur Komponente zu halten, können wir ein `<style>`-Element innerhalb der Komponente hinzufügen. Wenn diese Styles jedoch Dinge außerhalb dieser Komponente verändern, könnte es schwierig sein, die verantwortlichen Styles zu finden und das Problem zu beheben. Hier kann das `scoped` Attribut nützlich sein — es fügt einen einzigartigen HTML `data` Attribut-Selektor zu all Ihren Styles hinzu, um zu verhindern, dass sie global kollidieren.

Um den `scoped` Modifikator zu verwenden, erstellen Sie ein `<style>`-Element innerhalb von `ToDoItem.vue` am unteren Ende der Datei und geben Sie ihm ein `scoped` Attribut:

```vue
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

Fügen Sie der Wurzel-`<div>` die Klasse `custom-checkbox` hinzu. Zum `<input>` fügen Sie die Klasse `checkbox` hinzu. Schließlich fügen Sie dem `<label>` die Klasse `checkbox-label` hinzu. Das aktualisierte Template ist unten:

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

Die App sollte jetzt benutzerdefinierte Checkboxen haben. Ihre App sollte in etwa so aussehen wie der folgende Screenshot.

![die To-do-App mit komplettem Styling. Das Eingabeformular ist jetzt richtig gestylt, und die To-do-Items haben nun Abstand und benutzerdefinierte Checkboxen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeit am Styling unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel werden wir zurückkehren, um unserer App weitere Funktionen hinzuzufügen, nämlich die Verwendung einer berechneten Eigenschaft, um eine Zählung der abgeschlossenen To-do-Items zu unserer App hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}
