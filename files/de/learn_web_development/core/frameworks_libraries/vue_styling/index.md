---
title: Styling Vue-Komponenten mit CSS
slug: Learn_web_development/Core/Frameworks_libraries/Vue_styling
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist endlich an der Zeit, unsere App ein wenig ansprechender zu gestalten. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, Vue-Komponenten mit CSS zu stylen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Kommandozeilenprogramms</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) zu nutzen, benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, wie man Vue-Komponenten styled.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir fortfahren, fortgeschrittene Funktionen zu unserer App hinzuzufügen, sollten wir einige grundlegende CSS-Stile hinzufügen, um sie besser aussehen zu lassen. Vue hat drei gängige Ansätze zum Stylen von Apps:

- Externe CSS-Dateien.
- Globale Stile in Single File Components (`.vue`-Dateien).
- Komponenten-spezifische Stile in Single File Components.

Um Ihnen dabei zu helfen, sich mit jedem dieser Ansätze vertraut zu machen, werden wir eine Kombination aus allen drei verwenden, um unserer App ein schöneres Aussehen zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und sie global auf Ihre App anwenden. Sehen wir uns an, wie das gemacht wird.

Erstellen Sie zunächst eine Datei namens `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von Webpack verarbeitet. Das bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Postprozessoren (wie PostCSS) verwenden können.

Obwohl wir in diesem Tutorial solche Tools nicht verwenden werden, ist es gut zu wissen, dass der Code beim Einbinden im Assets-Ordner automatisch verarbeitet wird.

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

Importieren Sie anschließend die Datei `reset.css` in Ihre `src/main.js` Datei, wie folgt:

```js
import "./assets/reset.css";
```

Dies führt dazu, dass die Datei während des Build-Schritts erfasst und automatisch zu unserer Website hinzugefügt wird.

Die Reset-Stile sollten jetzt auf die App angewendet werden. Die Bilder unten zeigen das Erscheinungsbild der App vor und nach der Anwendung des Resets.

Vorher:

![die todo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einem Rahmen, aber einige der internen Funktionen benötigen noch ein Styling](todo-app-unstyled.png)

Nachher:

![die todo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einem Rahmen, aber einige der internen Funktionen benötigen noch ein Styling](todo-app-reset-styles.png)

Auffällige Änderungen umfassen das Entfernen der Listenpunkte, Änderungen der Hintergrundfarbe und Änderungen der Basisstile für Schaltflächen und Eingabefelder.

## Hinzufügen globaler Stile zu Single File Components

Da wir unser CSS auf eine einheitliche Basis über alle Browser hinweg zurückgesetzt haben, müssen wir die Stile etwas anpassen. Es gibt einige Stile, die wir auf Komponenten in unserer App anwenden möchten. Obwohl das direkte Hinzufügen dieser Dateien zum Stylesheet `reset.css` funktionieren würde, fügen wir sie stattdessen den `<style>`-Tags in `App.vue` hinzu, um zu zeigen, wie dies genutzt werden kann.

Im Datei befinden sich bereits einige Stile. Lassen Sie uns diese entfernen und mit den unten stehenden Stilen ersetzen. Diese Stile fügen einige Formatierungen für Schaltflächen und Eingabefelder hinzu und passen das `#app`-Element und seine Kinder an.

Aktualisieren Sie das `<style>`-Element Ihrer `App.vue` Datei wie folgt:

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

Wenn Sie die App überprüfen, werden Sie sehen, dass unsere To-Do-Liste jetzt in einem Rahmen ist und wir eine bessere Formatierung unserer To-Do-Items haben. Jetzt können wir durchgehen und beginnen, unsere Komponenten zu bearbeiten, um einige dieser Stile zu verwenden.

![die todo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einem Rahmen, aber einige der internen Funktionen benötigen noch ein Styling](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die Schaltflächen-CSS-Klassen zu dem `<button>` in unserer `ToDoForm` Komponente hinzufügen. Da Vue-Templates gültiges HTML sind, geschieht dies auf die gleiche Weise wie in einfachem HTML — durch Hinzufügen eines `class=""` Attributs zum Element.

Fügen Sie `class="btn btn__primary btn__lg"` zu dem `<button>` Element Ihres Formulars hinzu:

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Da wir schon dabei sind, gibt es eine weitere semantische und stilistische Änderung, die wir vornehmen können. Da unser Formular einen spezifischen Abschnitt unserer Seite darstellt, würde ihm ein `<h2>` Element guttun. Das Label gibt jedoch bereits den Zweck des Formulars an. Um Wiederholungen zu vermeiden, lassen Sie uns unser Label in ein `<h2>` wenden. Es gibt noch einige andere globale CSS-Stile, die wir ebenfalls hinzufügen können. Wir fügen auch die Klasse `input__lg` zu unserem `<input>` Element hinzu.

Aktualisieren Sie Ihr `ToDoForm` Template, damit es wie folgt aussieht:

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

Lassen Sie uns auch die Klasse `stack-large` zum `<ul>`-Tag in unserer `App.vue` Datei hinzufügen. Dies wird helfen, den Abstand unserer To-Do-Items zu verbessern.

Aktualisieren Sie es wie folgt:

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von Scoped Styles

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem` Komponente. Um die Stildefinitionen nah an der Komponente zu halten, können wir ein `<style>`-Element in sie einfügen. Wenn diese Stile jedoch Dinge außerhalb dieser Komponente ändern, könnte es schwierig werden, die verantwortlichen Stile zu finden und das Problem zu beheben. Hier kann das `scoped` Attribut nützlich sein — es fügt allen Ihren Stilen einen einzigartigen HTML-`data` Attribut-Selektor hinzu, der verhindert, dass sie sich global überschneiden.

Um den `scoped` Modifikator zu verwenden, erstellen Sie ein `<style>` Element in `ToDoItem.vue`, am Ende der Datei, und geben ihm ein `scoped` Attribut:

```html
<style scoped>
  /* … */
</style>
```

Kopieren Sie als Nächstes den folgenden CSS-Code in das neu erstellte `<style>`-Element:

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

Jetzt müssen wir einige CSS-Klassen zu unserem Template hinzufügen, um die Stile zu verbinden.

Fügen Sie der Wurzel-`<div>` eine `custom-checkbox` Klasse hinzu. Fügen Sie dem `<input>` eine `checkbox` Klasse hinzu. Schließlich fügen Sie dem `<label>` eine `checkbox-label` Klasse hinzu. Das aktualisierte Template finden Sie unten:

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

Die App sollte jetzt benutzerdefinierte Checkboxen haben. Ihre App sollte ähnlich wie der Screenshot unten aussehen.

![die todo-App mit vollständigem Styling. Das Eingabeformular ist jetzt richtig gestylt, und die To-Do-Items haben nun Abstände und benutzerdefinierte Checkboxen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeit am Styling unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel werden wir zur Erweiterung der Funktionalität unserer App zurückkehren, insbesondere durch die Verwendung einer berechneten Eigenschaft, um unserer App eine Zählung der abgeschlossenen To-Do-Items hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}
