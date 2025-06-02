---
title: Styling Vue-Komponenten mit CSS
slug: Learn_web_development/Core/Frameworks_libraries/Vue_styling
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist endlich an der Zeit, unsere App ein bisschen schöner zu gestalten. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, Vue-Komponenten mit CSS zu stylen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschrittenen Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen des Stylings von Vue-Komponenten.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir uns damit beschäftigen, unserer App erweiterte Funktionen hinzuzufügen, sollten wir ein wenig grundlegendes CSS hinzufügen, um sie optisch aufzuwerten. Vue bietet drei gängige Ansätze zum Stylen von Apps:

- Externe CSS-Dateien.
- Globale Stile in Single File Components (`.vue` Dateien).
- Komponenten-spezifische Stile in Single File Components.

Um Ihnen jeden dieser Ansätze näherzubringen, verwenden wir eine Kombination aus allen drei, um unserer App ein ansprechenderes Aussehen und Gefühl zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und global auf Ihre App anwenden. Lassen Sie uns ansehen, wie das gemacht wird.

Zunächst erstellen Sie eine Datei namens `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von Webpack verarbeitet. Dies bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Nachprozessoren (wie PostCSS) verwenden können.

Obwohl dieses Tutorial solche Tools nicht verwenden wird, ist es gut zu wissen, dass beim Einfügen solchen Codes in den Assets-Ordner dieser automatisch verarbeitet wird.

Fügen Sie den folgenden Inhalt in die Datei `reset.css` ein:

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

Importieren Sie als Nächstes die Datei `reset.css` in Ihrer `src/main.js` Datei folgendermaßen:

```js
import "./assets/reset.css";
```

Dies führt dazu, dass die Datei während des Build-Schritts erkannt und automatisch zu unserer Seite hinzugefügt wird.

Die Reset-Stile sollten jetzt auf die App angewendet werden. Die Bilder unten zeigen das Aussehen der App vor und nach der Anwendung des Resets.

Vorher:

![die To-Do-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-unstyled.png)

Nachher:

![die To-Do-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-reset-styles.png)

Bemerkenswerte Änderungen umfassen das Entfernen der Listenpunkte, Änderungen der Hintergrundfarbe und Anpassungen der Basis-Button und Eingabestilen.

## Hinzufügen von globalen Stilen zu Single File Components

Jetzt, da unser CSS über alle Browser hinweg einheitlich zurückgesetzt wurde, müssen wir die Stile noch etwas anpassen. Es gibt einige Stile, die wir in allen Komponenten unserer App anwenden möchten. Obwohl es funktionieren würde, diese Stile direkt in die `reset.css` Stilvorlage einzufügen, werden wir sie stattdessen den `<style>` Tags in `App.vue` hinzufügen, um zu zeigen, wie dies verwendet werden kann.

Es sind bereits einige Stile in der Datei vorhanden. Lassen Sie uns diese entfernen und durch die unten stehenden Stile ersetzen. Diese Stile fügen einige Formatierungen für Buttons und Eingaben hinzu und passen das `#app` Element und seine Kinder an.

Aktualisieren Sie das `<style>` Element in Ihrer `App.vue` Datei, sodass es folgendermaßen aussieht:

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

Wenn Sie die App überprüfen, werden Sie feststellen, dass unsere To-Do-Liste jetzt in einer Karte angezeigt wird und wir eine bessere Formatierung unserer To-Do-Elemente haben. Jetzt können wir durchgehen und beginnen, unsere Komponenten zu bearbeiten, um einige dieser Stile zu verwenden.

![die To-Do-App mit teilweise hinzugefügtem Styling; die App ist jetzt in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die CSS-Klassen für den Button zum `<button>` in unserer `ToDoForm` Komponente hinzufügen. Da Vue-Templates gültiges HTML sind, wird dies auf die gleiche Weise wie in einfachem HTML gemacht — durch Hinzufügen eines `class=""` Attributs zum Element.

Fügen Sie `class="btn btn__primary btn__lg"` zum `<button>` Element Ihres Formulars hinzu:

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Da wir schon dabei sind, gibt es eine weitere semantische und stilistische Änderung, die wir vornehmen können. Da unser Formular einen bestimmten Abschnitt unserer Seite darstellt, könnte es von einem `<h2>` Element profitieren. Das Label jedoch gibt bereits den Zweck des Formulars an. Um uns nicht zu wiederholen, lassen Sie uns unser Label in ein `<h2>` einwickeln. Es gibt auch ein paar andere globale CSS-Stile, die wir ebenfalls hinzufügen können. Wir fügen auch die `input__lg` Klasse zu unserem `<input>` Element hinzu.

Aktualisieren Sie Ihr `ToDoForm` Template, sodass es wie folgt aussieht:

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

Lassen Sie uns auch die `stack-large` Klasse zum `<ul>` Tag in unserer `App.vue` Datei hinzufügen. Dies wird dazu beitragen, die Abstände unserer To-Do-Elemente etwas zu verbessern.

Aktualisieren Sie es wie folgt:

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von scoped Stilen

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem` Komponente. Um die Stildefinitionen nahe an der Komponente zu halten, können wir ein `<style>` Element darin hinzufügen. Wenn diese Stile jedoch Elemente außerhalb dieser Komponente ändern, könnte es schwierig werden, die für das Problem verantwortlichen Stile ausfindig zu machen und zu beheben. Hier ist das `scoped` Attribut nützlich — es hängt einen eindeutigen HTML `data` Attribut-Selektor an alle Ihre Stile an und verhindert so, dass sie global kollidieren.

Um den `scoped` Modifikator zu verwenden, erstellen Sie ein `<style>` Element in `ToDoItem.vue` am unteren Rand der Datei und geben ihm ein `scoped` Attribut:

```vue
<style scoped>
/* … */
</style>
```

Kopieren Sie als nächstes das folgende CSS in das neu erstellte `<style>` Element:

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
@media only screen and (min-width: 40rem) {
  label,
  input,
  .custom-checkbox {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
```

Nun müssen wir einige CSS-Klassen zu unserem Template hinzufügen, um die Stile zu verbinden.

Zum Wurzel-`<div>` fügen Sie die `custom-checkbox` Klasse hinzu. Zum `<input>` fügen Sie die `checkbox` Klasse hinzu. Zuletzt fügen Sie zum `<label>` die `checkbox-label` Klasse hinzu. Das aktualisierte Template sieht folgendermaßen aus:

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

Die App sollte nun benutzerdefinierte Kontrollkästchen haben. Ihre App sollte ungefähr so aussehen wie auf dem untenstehenden Screenshot.

![die To-Do-App mit vollständigem Styling. Das Eingabeformular ist nun richtig gestylt und die To-Do-Elemente haben jetzt Abstände und benutzerdefinierte Kontrollkästchen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeit am Styling unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel werden wir darauf zurückkommen, unserer App mehr Funktionalität hinzuzufügen, insbesondere durch die Verwendung einer berechneten Eigenschaft, um einen Zähler für erledigte To-Do-Elemente hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}
