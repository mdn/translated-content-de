---
title: Styling von Vue-Komponenten mit CSS
slug: Learn_web_development/Core/Frameworks_libraries/Vue_styling
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist endlich an der Zeit, unsere App etwas ansprechender zu gestalten. In diesem Artikel werden wir die verschiedenen Möglichkeiten zur Gestaltung von Vue-Komponenten mit CSS erkunden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Wissen über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Features von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit node + npm installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Lernen über das Styling von Vue-Komponenten.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir fortfahren, um fortschrittlichere Features zu unserer App hinzuzufügen, sollten wir etwas grundlegendes CSS hinzufügen, um das Aussehen zu verbessern. Vue bietet drei gängige Methoden, um Apps zu stylen:

- Externe CSS-Dateien.
- Globale Styles in Single File Components (`.vue` Dateien).
- Komponenten-spezifische Styles in Single File Components.

Um Sie mit jedem einzelnen vertraut zu machen, werden wir eine Kombination aller drei verwenden, um unserer App ein angenehmeres Aussehen und Gefühl zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und global auf Ihre App anwenden. Schauen wir uns an, wie das geht.

Erstellen Sie zunächst eine Datei namens `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von webpack verarbeitet. Das bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Postprozessoren (wie PostCSS) verwenden können.

Während dieses Tutorial solche Tools nicht verwendet, ist es gut zu wissen, dass solcher Code im Assets-Ordner automatisch verarbeitet wird.

Fügen Sie die folgenden Inhalte in die `reset.css` Datei ein:

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

Importieren Sie dann in Ihrer `src/main.js` Datei die `reset.css` Datei wie folgt:

```js
import "./assets/reset.css";
```

Dies wird dazu führen, dass die Datei während des Build-Schritts aufgenommen und automatisch zu unserer Seite hinzugefügt wird.

Die Reset-Styles sollten nun auf die App angewendet werden. Die unten stehenden Bilder zeigen das Aussehen der App vor und nach der Anwendung des Resets.

Vorher:

![die ToDo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Features benötigen noch Styling](todo-app-unstyled.png)

Nachher:

![die ToDo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Features benötigen noch Styling](todo-app-reset-styles.png)

Bemerkenswerte Änderungen sind das Entfernen der Listenpunkte, Änderungen der Hintergrundfarbe und Änderungen an den Basis-Button- und Eingabe-Stilen.

## Hinzufügen von globalen Styles zu Single File Components

Nachdem wir unser CSS für ein einheitliches Aussehen in allen Browsern zurückgesetzt haben, müssen wir die Styles ein wenig mehr anpassen. Es gibt einige Styles, die wir in allen Komponenten unserer App anwenden möchten. Während das direkte Hinzufügen dieser Dateien zum `reset.css` Stylesheet funktionieren würde, werden wir sie stattdessen zu den `<style>`-Tags in `App.vue` hinzufügen, um zu demonstrieren, wie das verwendet werden kann.

In der Datei sind bereits einige Styles vorhanden. Lassen Sie uns diese entfernen und durch die untenstehenden Styles ersetzen. Diese Styles bewirken ein paar Dinge — sie fügen Buttons und Eingaben etwas Styling hinzu und passen das `#app`-Element und dessen Kinder an.

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

Wenn Sie die App überprüfen, werden Sie sehen, dass unsere ToDo-Liste jetzt in einer Karte ist und wir eine bessere Formatierung unserer ToDo-Items haben. Nun können wir durchgehen und beginnen, unsere Komponenten zu bearbeiten, um einige dieser Styles zu verwenden.

![die ToDo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Features benötigen noch Styling](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die Button-CSS-Klassen auf den `<button>` in unserer `ToDoForm` Komponente anwenden. Da Vue-Templates gültiges HTML sind, geschieht dies auf dieselbe Weise, wie Sie es in einfachem HTML tun würden — durch Hinzufügen eines `class=""` Attributs zum Element.

Fügen Sie `class="btn btn__primary btn__lg"` zu Ihrem `<button>` Element im Formular hinzu:

```vue
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Während wir hier sind, gibt es noch eine semantische und stilistische Änderung, die wir vornehmen können. Da unser Formular einen bestimmten Abschnitt unserer Seite kennzeichnet, könnte es von einem `<h2>` Element profitieren. Das Label hat jedoch bereits den Zweck des Formulars beschrieben. Um zu vermeiden, uns zu wiederholen, lassen Sie uns unser Label in einem `<h2>` umschließen. Es gibt noch ein paar andere globale CSS-Styles, die wir ebenfalls hinzufügen können. Wir werden auch die `input__lg` Klasse zu unserem `<input>` Element hinzufügen.

Aktualisieren Sie Ihr `ToDoForm` Template, sodass es wie folgt aussieht:

```vue
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

Lassen Sie uns auch die `stack-large` Klasse zum `<ul>` Tag in unserer `App.vue` Datei hinzufügen. Dies wird helfen, den Abstand unserer ToDo-Items etwas zu verbessern.

Aktualisieren Sie es wie folgt:

```vue
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von Scoped Styles

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem` Komponente. Um die Style-Definitionen in der Nähe der Komponente zu halten, können wir ein `<style>` Element innerhalb dieser hinzufügen. Sollten diese Styles jedoch Dinge außerhalb dieser Komponente verändern, könnte es schwierig sein, die verantwortlichen Styles zu identifizieren und das Problem zu beheben. Hier kann das `scoped` Attribut nützlich sein — dies fügt allen Ihren Styles einen einzigartigen HTML `data` Attribut-Selektor hinzu, wodurch verhindert wird, dass sie global kollidieren.

Um den `scoped` Modifikator zu verwenden, erstellen Sie ein `<style>` Element in `ToDoItem.vue`, unten in der Datei, und geben ihm ein `scoped` Attribut:

```vue
<style scoped>
/* … */
</style>
```

Kopieren Sie anschließend das folgende CSS in das neu erstellte `<style>` Element:

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

Fügen Sie der Wurzel `<div>` eine `custom-checkbox` Klasse hinzu. Dem `<input>` fügen Sie eine `checkbox` Klasse hinzu. Zuletzt fügen Sie dem `<label>` eine `checkbox-label` Klasse hinzu. Das aktualisierte Template ist unten:

```vue
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{ label }}</label>
  </div>
</template>
```

Die App sollte nun benutzerdefinierte Kontrollkästchen haben. Ihre App sollte jetzt ungefähr so aussehen wie das unten stehende Bildschirmfoto.

![die ToDo-App mit vollständigem Styling. Das Eingabeformular ist jetzt richtig gestylt, und die ToDo-Items haben jetzt Abstand und benutzerdefinierte Kontrollkästchen](todo-app-complete-styles.png)

## Zusammenfassung

Unserer Arbeit am Styling unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel werden wir uns darauf konzentrieren, etwas mehr Funktionalität zu unserer App hinzuzufügen, nämlich die Verwendung einer berechneten Eigenschaft, um der App eine Zählung der abgeschlossenen ToDo-Items hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}
