---
title: Styling Vue-Komponenten mit CSS
slug: Learn_web_development/Core/Frameworks_libraries/Vue_styling
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist endlich an der Zeit, unsere App etwas schöner aussehen zu lassen. In diesem Artikel erkunden wir die verschiedenen Möglichkeiten, Vue-Komponenten mit CSS zu stylen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Vue-Komponenten stylt.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir damit fortfahren, unserer App fortgeschrittenere Funktionen hinzuzufügen, sollten wir einige grundlegende CSS-Stile hinzufügen, um das Aussehen zu verbessern. Vue bietet drei übliche Ansätze zur Gestaltung von Apps:

- Externe CSS-Dateien.
- Globale Stile in Single File Components (`.vue`-Dateien).
- Komponentenbezogene Stile in Single File Components.

Um Sie mit jedem dieser Ansätze vertraut zu machen, werden wir eine Kombination aller drei verwenden, um unserer App ein ansprechenderes Aussehen und Gefühl zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und sie global auf Ihre App anwenden. Schauen wir uns an, wie das gemacht wird.

Erstellen Sie zunächst eine Datei namens `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von webpack verarbeitet. Das bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Postprozessoren (wie PostCSS) verwenden können.

Während dieses Tutorial solche Tools nicht verwenden wird, ist es gut zu wissen, dass derartige Codes im Assets-Ordner automatisch verarbeitet werden.

Fügen Sie die folgenden Inhalte in die `reset.css`-Datei ein:

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

Importieren Sie als Nächstes in Ihrer `src/main.js`-Datei die `reset.css`-Datei folgendermaßen:

```js
import "./assets/reset.css";
```

Dadurch wird die Datei während des Build-Schritts aufgenommen und automatisch zu unserer Website hinzugefügt.

Die Reset-Stile sollten jetzt auf die App angewendet werden. Die folgenden Bilder zeigen das Aussehen der App vor und nach der Anwendung des Resets.

Vorher:

![die ToDo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-unstyled.png)

Nachher:

![die ToDo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-reset-styles.png)

Bemerkenswerte Änderungen umfassen das Entfernen der Listenpunkte, Änderungen der Hintergrundfarbe und Änderungen der Basis-Button- und Eingabestile.

## Globale Stile zu Single File Components hinzufügen

Nachdem wir unser CSS so zurückgesetzt haben, dass es in allen Browsern einheitlich ist, müssen wir die Stile etwas weiter anpassen. Es gibt einige Stile, die wir auf Komponenten in unserer App anwenden möchten. Während das direkte Hinzufügen dieser Dateien zum `reset.css`-Stylesheet funktionieren würde, fügen wir sie stattdessen den `<style>`-Tags in `App.vue` hinzu, um zu demonstrieren, wie dies verwendet werden kann.

Es sind bereits einige Stile in der Datei vorhanden. Entfernen Sie diese und ersetzen Sie sie durch die untenstehenden Stile. Diese Stile machen ein paar Dinge — sie fügen Buttons und Eingaben Styling hinzu und passen das `#app`-Element und seine Kinder an.

Aktualisieren Sie das `<style>`-Element in Ihrer `App.vue`-Datei so, dass es folgendermaßen aussieht:

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

Wenn Sie die App überprüfen, werden Sie feststellen, dass unsere ToDo-Liste jetzt in einer Karte ist und wir eine bessere Formatierung unserer ToDo-Elemente haben. Jetzt können wir durchgehen und beginnen, unsere Komponenten zu bearbeiten, um einige dieser Stile zu verwenden.

![die ToDo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen benötigen noch Styling](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die Button-CSS-Klassen dem `<button>` in unserer `ToDoForm`-Komponente hinzufügen. Da Vue-Templates gültiges HTML sind, wird dies auf die gleiche Weise wie in normalem HTML gemacht — durch Hinzufügen eines `class=""`-Attributs zum Element.

Fügen Sie `class="btn btn__primary btn__lg"` zu Ihrem `<button>`-Element des Formulars hinzu:

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Während wir hier sind, können wir noch eine weitere semantische und stilistische Änderung vornehmen. Da unser Formular einen bestimmten Abschnitt unserer Seite bezeichnet, könnte es von einem `<h2>`-Element profitieren. Das Label zeigt jedoch bereits den Zweck des Formulars an. Um uns nicht zu wiederholen, lassen Sie uns unser Label in ein `<h2>`-Element einwickeln. Es gibt auch noch ein paar andere globale CSS-Stile, die wir hinzufügen können. Wir fügen auch die `input__lg`-Klasse zu unserem `<input>`-Element hinzu.

Aktualisieren Sie Ihr `ToDoForm`-Template, sodass es so aussieht:

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

Lassen Sie uns auch die Klasse `stack-large` zum `<ul>`-Tag in unserer `App.vue`-Datei hinzufügen. Dies wird dabei helfen, den Abstand unserer ToDo-Items ein wenig zu verbessern.

Aktualisieren Sie es folgendermaßen:

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von scoped styles

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem`-Komponente. Um die Stildefinitionen nah an der Komponente zu halten, können wir ein `<style>`-Element darin hinzufügen. Wenn diese Stile jedoch Dinge außerhalb dieser Komponente verändern, könnte es schwierig werden, die verantwortlichen Stile zu ermitteln und das Problem zu beheben. Hier kann das Attribut `scoped` nützlich sein — dies fügt Ihren Stilen einen einzigartigen `data`-Attribut-Selektor hinzu und verhindert, dass sie global kollidieren.

Um den `scoped`-Modifier zu verwenden, erstellen Sie ein `<style>`-Element innerhalb von `ToDoItem.vue` am Ende der Datei und geben Sie ihm das Attribut `scoped`:

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

Jetzt müssen wir einige CSS-Klassen zu unserem Template hinzufügen, um die Stile zu verbinden.

Fügen Sie der root `<div>` die Klasse `custom-checkbox` hinzu. Fügen Sie dem `<input>` die Klasse `checkbox` hinzu. Schließlich fügen Sie dem `<label>` die Klasse `checkbox-label` hinzu. Das aktualisierte Template ist unten:

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

Die App sollte jetzt benutzerdefinierte Checkboxen haben. Ihre App sollte etwa so aussehen wie der untenstehende Screenshot.

![die ToDo-App mit komplettem Styling. Das Eingabeformular ist jetzt richtig gestylt, und die ToDo-Items haben jetzt Abstände und benutzerdefinierte Checkboxen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeit am Styling unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel werden wir zurückkehren, um einige weitere Funktionen zu unserer App hinzuzufügen, nämlich die Verwendung einer berechneten Eigenschaft, um unsere App um eine Zählung der erledigten ToDo-Items zu erweitern.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}
