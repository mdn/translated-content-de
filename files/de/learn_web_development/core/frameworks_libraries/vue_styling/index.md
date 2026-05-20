---
title: Styling Vue-Komponenten mit CSS
slug: Learn_web_development/Core/Frameworks_libraries/Vue_styling
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Webseite entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Es ist endlich an der Zeit, unsere App etwas ansprechender zu gestalten. In diesem Artikel werden wir die verschiedenen Möglichkeiten zur Gestaltung von Vue-Komponenten mit CSS erkunden.

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
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Template-Syntax, die der zugrundeliegenden DOM-Struktur zugeordnet wird. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit node + npm installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen der Gestaltung von Vue-Komponenten.</td>
    </tr>
  </tbody>
</table>

## Styling von Vue-Komponenten mit CSS

Bevor wir fortfahren, um unserer App erweiterte Funktionen hinzuzufügen, sollten wir etwas grundlegendes CSS hinzufügen, um das Aussehen zu verbessern. Vue bietet drei gängige Ansätze zur Stilgestaltung von Apps:

- Externe CSS-Dateien.
- Globale Styles in Single File Components (`.vue`-Dateien).
- Komponenten-spezifische Styles in Single File Components.

Um Ihnen alle drei vertraut zu machen, verwenden wir eine Kombination aller drei, um unserer App ein ansprechenderes Aussehen und Gefühl zu verleihen.

## Styling mit externen CSS-Dateien

Sie können externe CSS-Dateien einbinden und diese global auf Ihre App anwenden. Schauen wir uns an, wie das gemacht wird.

Erstellen Sie zunächst eine Datei namens `reset.css` im Verzeichnis `src/assets`. Dateien in diesem Ordner werden von webpack verarbeitet. Das bedeutet, dass wir CSS-Präprozessoren (wie SCSS) oder Postprozessoren (wie PostCSS) verwenden können.

Obwohl dieses Tutorial solche Tools nicht verwenden wird, ist es gut zu wissen, dass der Code im Ordner „assets“ automatisch verarbeitet wird, wenn er enthalten ist.

Fügen Sie folgende Inhalte zur Datei `reset.css` hinzu:

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

Importieren Sie als nächstes in Ihrer Datei `src/main.js` die Datei `reset.css` wie folgt:

```js
import "./assets/reset.css";
```

Dies wird dazu führen, dass die Datei während des Build-Schritts erfasst und automatisch zu unserer Seite hinzugefügt wird.

Die Reset-Stile sollten nun auf die App angewendet werden. Die Bilder unten zeigen das Aussehen der App vor und nach der Anwendung des Reset.

Vorher:

![Die Todo-App mit teilweise hinzugefügten Stilen; die App befindet sich nun in einer Karte, aber einige der internen Features benötigen noch Stile](todo-app-unstyled.png)

Nachher:

![Die Todo-App mit teilweise hinzugefügten Stilen; die App befindet sich nun in einer Karte, aber einige der internen Features benötigen noch Stile](todo-app-reset-styles.png)

Deutliche Änderungen umfassen die Entfernung der Aufzählungszeichen, Änderungen der Hintergrundfarbe und Änderungen an den Grundstilen von Tasten und Eingabefeldern.

## Hinzufügen von globalen Styles zu Single File Components

Nachdem wir unser CSS für eine einheitliche Darstellung in verschiedenen Browsern zurückgesetzt haben, müssen wir die Styles etwas weiter anpassen. Es gibt einige Styles, die wir über viele Komponenten in unserer App anwenden möchten. Zwar würde es funktionieren, diese Dateien direkt zu `reset.css` hinzuzufügen, doch werden wir sie stattdessen den `<style>`-Tags in `App.vue` hinzufügen, um zu demonstrieren, wie dies verwendet werden kann.

Es sind bereits einige Styles in der Datei vorhanden. Lassen Sie uns diese entfernen und sie durch die unten stehenden Styles ersetzen. Diese Styles fügen Buttons und Eingaben einige Gestaltungsmerkmale hinzu und passen das `#app`-Element und dessen Kinder an.

Aktualisieren Sie das `<style>`-Element in Ihrer Datei `App.vue`, damit es wie folgt aussieht:

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

Wenn Sie die App überprüfen, werden Sie sehen, dass unsere To-Do-Liste nun in einer Karte angezeigt wird und wir eine bessere Formatierung unserer To-Do-Artikel haben. Jetzt können wir die Komponenten durchgehen und einige dieser Styles verwenden.

![Die Todo-App mit teilweise hinzugefügten Stilen; die App befindet sich nun in einer Karte, aber einige der internen Features benötigen noch Stile](todo-app-partial-styles.png)

### Hinzufügen von CSS-Klassen in Vue

Wir sollten die Button-CSS-Klassen dem `<button>` in unserer `ToDoForm`-Komponente hinzufügen. Da Vue-Templates gültiges HTML sind, wird dies genauso durchgeführt wie bei Plain-HTML — indem dem Element ein `class=""`-Attribut hinzugefügt wird.

Fügen Sie `class="btn btn__primary btn__lg"` Ihrem `<button>`-Element im Formular hinzu:

```vue
<button type="submit" class="btn btn__primary btn__lg">Add</button>
```

Während wir hier sind, gibt es noch eine weitere semantische und stilistische Änderung, die wir vornehmen können. Da unser Formular einen bestimmten Abschnitt unserer Seite bezeichnet, könnte es von einem `<h2>`-Element profitieren. Da das Label jedoch bereits den Zweck des Formulars angibt, möchten wir Wiederholungen vermeiden, indem wir unser Label in ein `<h2>` einschließen. Es gibt auch einige weitere globale CSS-Styles, die wir hinzufügen können. Wir fügen außerdem die Klasse `input__lg` zu unserem `<input>`-Element hinzu.

Aktualisieren Sie Ihre `ToDoForm`-Vorlage, sodass sie wie folgt aussieht:

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

Fügen wir außerdem die Klasse `stack-large` zum `<ul>`-Tag in unserer `App.vue`-Datei hinzu. Dies wird dazu beitragen, den Abstand unserer To-Do-Artikel etwas zu verbessern.

Aktualisieren Sie es wie folgt:

```vue
<ul aria-labelledby="list-summary" class="stack-large">
  …
</ul>
```

## Hinzufügen von Scoped Styles

Die letzte Komponente, die wir gestalten möchten, ist unsere `ToDoItem`-Komponente. Um die Stildefinitionen nahe an der Komponente zu halten, können wir ein `<style>`-Element darin hinzufügen. Wenn jedoch diese Styles außerhalb dieser Komponente etwas verändern, könnte es schwierig sein, die dafür verantwortlichen Styles zu finden und das Problem zu beheben. Hier kann der `scoped`-Attribut nützlich sein — es hängt einen einzigartigen HTML-`data`-Attribut-Selektor an alle Ihre Styles an und verhindert, dass sie global kollidieren.

Um den `scoped`-Modifier zu verwenden, erstellen Sie ein `<style>`-Element innerhalb von `ToDoItem.vue`, am Ende der Datei, und geben Sie ihm ein `scoped`-Attribut:

```vue
<style scoped>
/* … */
</style>
```

Kopieren Sie als nächstes den folgenden CSS in das neu erstellte `<style>`-Element:

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

Nun müssen wir einige CSS-Klassen unserer Vorlage hinzufügen, um die Styles zu verbinden.

Fügen Sie der Wurzel-`<div>` die `custom-checkbox`-Klasse hinzu. Fügen Sie dem `<input>` die `checkbox`-Klasse hinzu. Letztlich fügen Sie dem `<label>` die `checkbox-label`-Klasse hinzu. Die aktualisierte Vorlage ist unten:

```vue
<template>
  <div class="custom-checkbox">
    <input type="checkbox" :id="id" :checked="isDone" class="checkbox" />
    <label :for="id" class="checkbox-label">\{{ label }}</label>
  </div>
</template>
```

Die App sollte nun benutzerdefinierte Kontrollkästchen enthalten. Ihre App sollte etwa wie der untenstehende Screenshot aussehen.

![Die Todo-App mit vollständig hinzugefügten Stilen. Das Eingabeformular ist jetzt korrekt gestylt, und die Todo-Artikel haben nun Abstände und benutzerdefinierte Kontrollkästchen](todo-app-complete-styles.png)

## Zusammenfassung

Unsere Arbeit an der Gestaltung unserer Beispiel-App ist abgeschlossen. Im nächsten Artikel werden wir zurückkehren und unserer App einige zusätzliche Funktionen hinzufügen, nämlich eine berechnete Eigenschaft zu verwenden, um eine Zählung der abgeschlossenen To-Do-Artikel zur App hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models","Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties", "Learn_web_development/Core/Frameworks_libraries")}}
