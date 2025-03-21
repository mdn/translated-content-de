---
title: Styling von Vue-Komponenten mit CSS
slug: Learn_web_development/Core/Frameworks_libraries/Vue_styling
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}

Die Zeit ist endlich gekommen, um unsere App ein wenig schöner zu gestalten. In diesem Artikel erkunden wir die verschiedenen Möglichkeiten, Vue-Komponenten mit CSS zu stylen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          sowie Kenntnisse der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeilen</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, wie man Vue-Komponenten stylen kann.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir beginnen, erweiterte Funktionen zu unserer App hinzuzufügen, sollten wir einige grundlegende CSS hinzufügen, um ihr Aussehen zu verbessern. Vue hat drei gängige Ansätze zum Stylen von Apps:

- Externe CSS-Dateien.
- Globale Stile in Single File Components (`.vue`-Dateien).
- Komponentenbezogene Stile in Single File Components.

Um Sie mit jedem dieser Ansätze vertraut zu machen, werden wir eine Kombination von allen dreien nutzen, um unserer App ein schöneres Aussehen und Gefühl zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und global auf Ihre App anwenden. Schauen wir uns an, wie das gemacht wird.

Erstellen Sie zunächst eine Datei namens `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von webpack verarbeitet. Das bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Post-Prozessoren (wie PostCSS) verwenden können.

Während in diesem Tutorial solche Tools nicht verwendet werden, ist es gut zu wissen, dass beim Einfügen solchen Codes in den Assets-Ordner dieser automatisch verarbeitet wird.

Fügen Sie den folgenden Inhalt zur `reset.css`-Datei hinzu:

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

Importieren Sie danach in Ihrer `src/main.js`-Datei die `reset.css`-Datei wie folgt:

```js
import "./assets/reset.css";
```

Dies führt dazu, dass die Datei beim Erstellen der App aufgenommen und automatisch auf unserer Seite hinzugefügt wird.

Die Reset-Stile sollten nun auf die App angewendet werden. Die Bilder unten zeigen das Aussehen der App vor und nach der Anwendung des Resets.

Vorher:

![Die To-Do-App mit teilweise hinzugefügter Formatierung; die App befindet sich jetzt in einer Karte, aber einige der internen Features müssen noch gestylt werden](todo-app-unstyled.png)

Nachher:

![Die To-Do-App mit teilweise hinzugefügter Formatierung; die App befindet sich jetzt in einer Karte, aber einige der internen Features müssen noch gestylt werden](todo-app-reset-styles.png)

Bemerkenswerte Änderungen umfassen das Entfernen der Aufzählungszeichen, Änderungen an der Hintergrundfarbe und Änderungen an den Grundstilen von Knöpfen und Eingaben.

## Hinzufügen von globalen Stilen zu Single File Components

Nachdem wir unser CSS über alle Browser hinweg einheitlich zurückgesetzt haben, müssen wir die Stile etwas mehr anpassen. Es gibt einige Stile, die wir in den Komponenten unserer App anwenden möchten. Während das direkte Hinzufügen dieser Stile zur `reset.css`-Datei funktionieren würde, fügen wir sie stattdessen zu den `<style>`-Tags in `App.vue` hinzu, um zu demonstrieren, wie dies genutzt werden kann.

Es sind bereits einige Stile in der Datei vorhanden. Lassen Sie uns diese entfernen und durch die untenstehenden Stile ersetzen. Diese Stile bewirken einige Dinge — sie fügen Knöpfen und Eingaben Styling hinzu und passen das `#app`-Element und seine Kinder an.

Aktualisieren Sie das `<style>`-Element Ihrer `App.vue`-Datei, sodass es wie folgt aussieht:

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

Wenn Sie die App überprüfen, werden Sie sehen, dass unsere To-Do-Liste nun in einer Karte ist und wir eine bessere Formatierung unserer To-Do-Elemente haben. Jetzt können wir beginnen, unsere Komponenten durchzugehen und einige dieser Stile zu nutzen.

![Die To-Do-App mit teilweise hinzugefügter Formatierung; die App befindet sich jetzt in einer Karte, aber einige der internen Features müssen noch gestylt werden](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die CSS-Klassen für den Button zum `<button>` in unserer `ToDoForm`-Komponente hinzufügen. Da Vue-Templates gültiges HTML sind, wird dies auf die gleiche Weise durchgeführt, wie Sie es möglicherweise im einfachen HTML tun würden — durch Hinzufügen eines `class=""`-Attributs zum Element.

Fügen Sie `class="btn btn__primary btn__lg"` zu Ihrem `<button>`-Element des Formulars hinzu:

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Während wir hier sind, können wir noch eine weitere semantische und stilistische Änderung vornehmen. Da unser Formular einen bestimmten Abschnitt unserer Seite darstellt, könnte es von einem `<h2>`-Element profitieren. Das Label gibt jedoch bereits den Zweck des Formulars an. Um uns nicht zu wiederholen, lassen Sie uns unser Label in ein `<h2>` einwickeln. Es gibt auch einige andere globale CSS-Stile, die wir hinzufügen können. Wir werden auch die `input__lg`-Klasse zu unserem `<input>`-Element hinzufügen.

Aktualisieren Sie Ihr `ToDoForm`-Template, sodass es wie folgt aussieht:

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

Lassen Sie uns auch die `stack-large`-Klasse zum `<ul>`-Tag in unserer `App.vue`-Datei hinzufügen. Dies wird helfen, den Abstand unserer To-Do-Elemente ein wenig zu verbessern.

Aktualisieren Sie es wie folgt:

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von Scoped Styles

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem`-Komponente. Um die Stildefinitionen nah an der Komponente zu halten, können wir ein `<style>`-Element innerhalb der Komponente hinzufügen. Wenn diese Stile jedoch Dinge außerhalb dieser Komponente verändern, könnte es schwierig werden, die verantwortlichen Stile zu finden und das Problem zu beheben. Hierbei kann das `scoped`-Attribut nützlich sein — es fügt allen Ihren Stilen einen einzigartigen HTML-`data`-Attribut-Selektor hinzu und verhindert so, dass sie global kollidieren.

Um den `scoped`-Modifier zu verwenden, erstellen Sie ein `<style>`-Element innerhalb von `ToDoItem.vue` am Ende der Datei und geben Sie ihm ein `scoped`-Attribut:

```html
<style scoped>
  /* … */
</style>
```

Kopieren Sie als nächstes das folgende CSS in das neu erstellte `<style>`-Element:

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

Nun müssen wir einige CSS-Klassen mit unserem Template verbinden.

Fügen Sie der äußeren `<div>`-Element eine `custom-checkbox`-Klasse hinzu. Fügen Sie dem `<input>`-Element eine `checkbox`-Klasse hinzu. Zuletzt fügen Sie dem `<label>`-Element eine `checkbox-label`-Klasse hinzu. Das aktualisierte Template wird unten angezeigt:

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

Die App sollte jetzt benutzerdefinierte Kontrollkästchen haben. Ihre App sollte in etwa wie das untenstehende Screenshot aussehen.

![Die To-Do-App mit vollständigem Styling. Das Eingabeformular ist nun richtig gestylt, und die To-Do-Elemente haben jetzt Abstände und benutzerdefinierte Kontrollkästchen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeit am Styling unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel kehren wir zurück, um unserer App einige weitere Funktionen hinzuzufügen, nämlich die Verwendung einer berechneten Eigenschaft, um eine Zählung der erledigten To-Do-Elemente in unserer App anzuzeigen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}
