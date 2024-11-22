---
title: Styling von Vue-Komponenten mit CSS
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Es ist endlich an der Zeit, unsere App ein wenig schöner zu gestalten. In diesem Artikel werden wir die verschiedenen Möglichkeiten erkunden, Vue-Komponenten mit CSS zu stylen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, sowie Kenntnisse der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und die Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
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

Bevor wir fortfahren, um erweiterte Funktionen zu unserer App hinzuzufügen, sollten wir einige grundlegende CSS-Styles hinzufügen, um sie ansprechender zu machen. Vue bietet drei gängige Ansätze zum Stylen von Apps:

- Externe CSS-Dateien.
- Globale Stile in Single File Components (`.vue` Dateien).
- Komponenten-spezifische Stile in Single File Components.

Um Ihnen alle drei Methoden näherzubringen, verwenden wir eine Kombination aus allen drei, um unserer App ein ansprechenderes Aussehen und Gefühl zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und sie global auf Ihre App anwenden. Schauen wir uns an, wie das gemacht wird.

Erstellen Sie zunächst eine Datei namens `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von webpack verarbeitet. Das bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Postprozessoren (wie PostCSS) verwenden können.

Obwohl wir in diesem Tutorial keine solchen Tools verwenden, ist es gut zu wissen, dass beim Einfügen von Code in den Assets-Ordner dieser automatisch verarbeitet wird.

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

Importieren Sie dann in Ihrer Datei `src/main.js` die Datei `reset.css` wie folgt:

```js
import "./assets/reset.css";
```

Dies bewirkt, dass die Datei während des Build-Schritts erfasst und automatisch zu unserer Site hinzugefügt wird.

Die Reset-Styles sollten nun auf die App angewendet werden. Die Bilder unten zeigen das Aussehen der App vor und nachdem das Reset angewendet wurde.

Vorher:

![die Todo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen müssen noch gestylt werden](todo-app-unstyled.png)

Nachher:

![die Todo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen müssen noch gestylt werden](todo-app-reset-styles.png)

Deutliche Änderungen sind die Entfernung der Listenpunkte, Änderungen der Hintergrundfarbe und Änderungen der Basisstile für Schaltflächen und Eingaben.

## Hinzufügen globaler Stile zu Single File Components

Nachdem wir unser CSS über die Browser hinweg einheitlich zurückgesetzt haben, müssen wir die Stile etwas mehr anpassen. Es gibt einige Stile, die wir komponentenübergreifend in unserer App anwenden möchten. Während das direkte Hinzufügen dieser Dateien zum Stylesheet `reset.css` funktionieren würde, fügen wir sie stattdessen zu den `<style>`-Tags in `App.vue` hinzu, um zu demonstrieren, wie dies genutzt werden kann.

Im File sind bereits einige Stile vorhanden. Entfernen Sie diese und ersetzen Sie sie durch die nachfolgenden Stile. Diese Stile fügen einige Formatierungen für Schaltflächen und Eingaben hinzu und passen das `#app`-Element und seine Kinder an.

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

Wenn Sie die App überprüfen, werden Sie sehen, dass unsere To-Do-Liste nun in einer Karte ist und wir eine bessere Formatierung unserer To-Do-Elemente haben. Nun können wir durchgehen und beginnen, unsere Komponenten zu bearbeiten, um einige dieser Styles zu verwenden.

![die Todo-App mit teilweise hinzugefügtem Styling; die App befindet sich jetzt in einer Karte, aber einige der internen Funktionen müssen noch gestylt werden](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die CSS-Klassen für die Schaltfläche zum `<button>` Element in unserer `ToDoForm`-Komponente hinzufügen. Da Vue-Templates gültiges HTML sind, wird dies genauso gemacht wie in reinem HTML — indem ein `class=""` Attribut zum Element hinzugefügt wird.

Fügen Sie `class="btn btn__primary btn__lg"` zu Ihrem `<button>`-Element Ihrer Form hinzu:

```html
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Während wir hier sind, gibt es noch eine weitere semantische und stilistische Änderung, die wir vornehmen können. Da unser Formular einen spezifischen Abschnitt unserer Seite bezeichnet, könnte es von einem `<h2>`-Element profitieren. Das Label bezeichnet jedoch bereits den Zweck des Formulars. Um uns nicht zu wiederholen, lassen Sie uns unser Label in ein `<h2>` einfügen. Es gibt auch einige andere globale CSS-Stile, die wir hinzufügen können. Wir fügen auch die Klasse `input__lg` zu unserem `<input>`-Element hinzu.

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

Fügen Sie auch die Klasse `stack-large` zum `<ul>`-Tag in unserer `App.vue`-Datei hinzu. Dies hilft, den Abstand unserer To-Do-Elemente etwas zu verbessern.

Aktualisieren Sie es wie folgt:

```html
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von Scoped Styles

Die letzte Komponente, die wir stylen möchten, ist unsere `ToDoItem`-Komponente. Um die Stildefinitionen in der Nähe der Komponente zu halten, können wir ein `<style>`-Element hineinhinzufügen. Wenn diese Stile jedoch Dinge außerhalb dieser Komponente verändern, könnte es schwierig sein, die verantwortlichen Stile nachzuverfolgen und das Problem zu beheben. Hier kann das `scoped`-Attribut nützlich sein — es fügt alle Ihren Stilen einen einzigartigen HTML `data`-Attribut-Selektor hinzu und verhindert, dass sie global kollidieren.

Um den `scoped`-Modifier zu verwenden, erstellen Sie ein `<style>`-Element in `ToDoItem.vue` am Ende der Datei und geben ihm ein `scoped`-Attribut:

```html
<style scoped>
  /* … */
</style>
```

Kopieren Sie als nächstes den folgenden CSS in das neu erstellte `<style>`-Element:

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

Zum Root-`<div>` fügen Sie eine `custom-checkbox`-Klasse hinzu. Zum `<input>` fügen Sie eine `checkbox`-Klasse hinzu. Schließlich fügen Sie zum `<label>` eine `checkbox-label`-Klasse hinzu. Das aktualisierte Template sieht wie folgt aus:

```html
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{label}}</label>
  </div>
</template>
```

Die App sollte nun benutzerdefinierte Kontrollkästchen haben. Ihre App sollte ungefähr wie der unten stehende Screenshot aussehen.

![die Todo-App mit vollständigem Styling. Das Eingabeformular ist nun richtig gestylt und die To-Do-Elemente haben nun Abstände und benutzerdefinierte Kontrollkästchen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeiten am Styling unserer Muster-App sind abgeschlossen. Im nächsten Artikel werden wir zurückkehren, um der App etwas mehr Funktionalität hinzuzufügen, nämlich die Verwendung einer berechneten Eigenschaft, um unserer App eine Zählung der abgeschlossenen To-Do-Elemente hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
