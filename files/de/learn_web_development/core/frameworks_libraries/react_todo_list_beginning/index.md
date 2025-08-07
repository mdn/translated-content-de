---
title: Beginn unserer React ToDo-App
short-title: React ToDo-App
slug: Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_getting_started","Learn_web_development/Core/Frameworks_libraries/React_components", "Learn_web_development/Core/Frameworks_libraries")}}

Angenommen, wir haben die Aufgabe bekommen, ein Proof-of-Concept in React zu erstellen – eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und auch Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch die grundlegende Struktur und das Styling einer solchen Anwendung, bereit für die Definition von individuellen Komponenten und Interaktivität, die wir später hinzufügen werden.

> [!NOTE]
> Falls Sie Ihren Code mit unserer Version abgleichen möchten, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react). Eine laufende Live-Version finden Sie hier: <https://mdn.github.io/todo-react/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Vertrautheit mit unserer ToDo-Listen-Fallstudie und dem Erstellen der grundlegenden <code>App</code>-Struktur und -Styling.
      </td>
    </tr>
  </tbody>
</table>

## Benutzerstories unserer App

In der Softwareentwicklung ist eine Benutzerstory ein umsetzbares Ziel aus der Sicht des Benutzers. Das Definieren von Benutzerstories, bevor wir mit unserer Arbeit beginnen, hilft uns, uns auf unsere Aufgaben zu konzentrieren. Unsere App sollte die folgenden Stories erfüllen:

Als Benutzer kann ich

- eine Liste von Aufgaben lesen.
- eine Aufgabe mit der Maus oder Tastatur hinzufügen.
- jede Aufgabe mit der Maus oder Tastatur als erledigt markieren.
- jede Aufgabe mit der Maus oder Tastatur löschen.
- jede Aufgabe mit der Maus oder Tastatur bearbeiten.
- einen spezifischen Teil der Aufgaben einsehen: Alle Aufgaben, nur die aktive Aufgabe oder nur die erledigten Aufgaben.

Wir werden diese Stories nacheinander angehen.

## Vorbereitungen vor dem Projekt

Vite hat uns einige Codes gegeben, die wir für unser Projekt überhaupt nicht verwenden werden. Die folgenden Terminalbefehle löschen diesen Code, um Platz für unser neues Projekt zu schaffen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis der App befinden!

```bash
# Move into the src directory
cd src
# Delete the App.css file and the React logo provided by Vite
rm App.css assets/react.svg
# Empty the contents of App.jsx and index.css
echo -n > App.jsx && echo -n > index.css
# Move back up to the root of the project
cd ..
```

> [!NOTE]
> Falls Sie Ihren Server für die oben genannten Terminalaufgaben gestoppt haben, müssen Sie ihn erneut mit `npm run dev` starten.

## Startcode des Projekts

Als Ausgangspunkt für dieses Projekt werden wir Ihnen zwei Dinge bereitstellen: eine `App()`-Funktion zum Ersetzen derjenigen, die Sie gerade gelöscht haben, und etwas CSS, um Ihre App zu stylen.

### Das JSX

Kopieren Sie das folgende Snippet in Ihre Zwischenablage und fügen Sie es dann in `App.jsx` ein:

```jsx
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
```

Öffnen Sie nun `index.html` und ändern Sie den Text des [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Elements zu `TodoMatic`. Auf diese Weise wird er mit dem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) oben in unserer App übereinstimmen.

```html
<title>TodoMatic</title>
```

Wenn Ihr Browser aktualisiert, sollten Sie etwas Ähnliches sehen:

![todo-matic App, ungestylt, zeigt ein Durcheinander aus Labels, Eingabefeldern und Buttons](unstyled-app.png)

Es sieht hässlich aus und funktioniert noch nicht, aber das ist in Ordnung – wir werden es gleich stylen. Zunächst betrachten Sie jedoch das JSX, das wir haben, und wie es mit unseren Benutzerstories korrespondiert:

- Wir haben ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form)-Element mit einem [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) zum Schreiben einer neuen Aufgabe und einem Button, um das Formular abzuschicken.
- Wir haben eine Reihe von Buttons, die verwendet werden, um unsere Aufgaben zu filtern.
- Wir haben eine Überschrift, die uns sagt, wie viele Aufgaben noch verbleiben.
- Wir haben unsere 3 Aufgaben, angeordnet in einer ungeordneten Liste. Jede Aufgabe ist ein Listenpunkt ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)) und hat Buttons, um sie zu bearbeiten und zu löschen, sowie ein Kontrollkästchen, um sie als erledigt zu markieren.

Das Formular wird es uns ermöglichen, Aufgaben zu _erstellen_; die Buttons ermöglichen es uns, sie zu _filtern_; die Überschrift und die Liste sind unsere Möglichkeit, sie zu _lesen_. Das UI zum _Bearbeiten_ einer Aufgabe fehlt derzeit merklich. Das ist in Ordnung – wir werden das später schreiben.

### Barrierefreiheitsfunktionen

Vielleicht bemerken Sie hier einige ungewöhnliche Markup-Elemente. Zum Beispiel:

```jsx
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```

Hier teilt `aria-pressed` unterstützenden Technologien (wie Screenreadern) mit, dass der Button in einem von zwei Zuständen sein kann: `gedrückt` oder `ungedrückt`. Diese können als Analogien zu `an` und `aus` betrachtet werden. Ein Wert von `"true"` bedeutet, dass der Button standardmäßig gedrückt ist.

Die Klasse `visually-hidden` hat noch keine Auswirkung, da wir noch kein CSS eingefügt haben. Sobald wir unsere Styles implementiert haben, wird jedes Element mit dieser Klasse für sehende Benutzer verborgen und weiterhin für Benutzer unterstützender Technologien verfügbar sein – dies liegt daran, dass diese Worte für sehende Benutzer nicht notwendig sind; sie bieten zusätzlichen Kontext für unterstützende Technologienutzer, die nicht von den visuellen Hinweisen profitieren können.

Weiter unten finden Sie unser [`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)-Element:

```html
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  …
</ul>
```

Das `role`-Attribut hilft unterstützenden Technologien zu erklären, welche Art von Element ein Tag darstellt. Ein `<ul>` wird standardmäßig als Liste behandelt, aber die Styles, die wir hinzufügen werden, werden diese Funktionalität brechen. Diese Rolle wird die "Listen"-Bedeutung für das `<ul>`-Element wiederherstellen. Wenn Sie mehr darüber erfahren möchten, warum dies notwendig ist, können Sie [Scott O'Hara's Artikel, "Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) lesen.

Das `aria-labelledby`-Attribut teilt unterstützenden Technologien mit, dass wir unsere Listenüberschrift als das Etikett behandeln, das den Zweck der darunter liegenden Liste beschreibt. Diese Zuordnung gibt der Liste einen informativen Kontext, der unterstützenden Technologienutzern helfen könnte, den Zweck der Liste besser zu verstehen.

Schließlich haben die Labels und Eingaben in unseren Listenelementen einige Attribute, die in JSX einzigartig sind:

```jsx
<div className="c-cb">
  <input id="todo-0" type="checkbox" defaultChecked />
  <label className="todo-label" htmlFor="todo-0">
    Eat
  </label>
</div>
```

Das `defaultChecked`-Attribut im `<input />`-Tag teilt React mit, dass dieses Kontrollkästchen initial markiert sein soll. Wenn wir `checked` verwenden würden, wie wir es in normalem HTML tun würden, würde React einige Warnungen in unsere Browserkonsole bezüglich der Ereignisbehandlung für das Kontrollkästchen protokollieren, was wir vermeiden wollen. Machen Sie sich darüber jetzt noch keine Sorgen – wir werden dies später behandeln, wenn wir zu den Ereignissen kommen.

Das `htmlFor`-Attribut entspricht dem `for`-Attribut, das in HTML verwendet wird. Wir können in JSX `for` nicht als Attribut verwenden, da `for` ein reserviertes Wort ist, daher verwendet React stattdessen `htmlFor`.

### Eine Anmerkung zu booleschen Attributen in JSX

Das `defaultChecked`-Attribut im vorherigen Abschnitt ist ein boolesches Attribut – ein Attribut, dessen Wert entweder `true` oder `false` ist. Wie in HTML ist ein boolesches Attribut `true`, wenn es vorhanden ist, und `false`, wenn es fehlt; die Zuordnung auf der rechten Seite des Ausdrucks ist optional. Sie können seinen Wert explizit festlegen, indem Sie ihn in geschweifte Klammern setzen – zum Beispiel `defaultChecked={true}` oder `defaultChecked={false}`.

Da JSX JavaScript ist, gibt es einen Haken bei booleschen Attributen: Das Schreiben von `defaultChecked="false"` setzt einen _string_-Wert von `"false"` anstelle eines _booleschen_ Werts. Nicht-leere Strings sind {{Glossary("Truthy", "wahr")}}, daher wird React `defaultChecked` als `true` betrachten und das Kontrollkästchen standardmäßig markieren. Dies ist nicht das, was wir wollen, also sollten wir es vermeiden.

Falls Sie möchten, können Sie das Schreiben von booleschen Attributen mit einem anderen Attribut üben, das Sie möglicherweise schon einmal gesehen haben, [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), das verhindert, dass Elemente auf der Seite gerendert werden. Versuchen Sie, `hidden` zum `<h1>`-Element in `App.jsx` hinzuzufügen, um zu sehen, was passiert, und versuchen Sie dann, seinen Wert explizit auf `{false}` zu setzen. Beachten Sie erneut, dass das Schreiben von `hidden="false"` zu einem wahrheitsgemäßen Wert führt, sodass das `<h1>` _versteckt_ wird. Vergessen Sie nicht, diesen Code zu entfernen, wenn Sie fertig sind.

> [!NOTE]
> Das `aria-pressed`-Attribut, das in unserem früheren Code-Snippet verwendet wurde, hat den Wert `"true"`, weil `aria-pressed` nicht wirklich ein boolesches Attribut ist, wie es `checked` ist.

### Implementierung unserer Styles

Fügen Sie den folgenden CSS-Code in `src/index.css` ein:

```css
/* Resets */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus-visible {
  outline: 3px dashed #228bec;
  outline-offset: 0;
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
  -moz-osx-font-smoothing: inherit;
  -webkit-font-smoothing: inherit;
  appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  margin: 0;
  overflow: visible;
  padding: 0;
  width: auto;
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
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  background-color: whitesmoke;
  color: #4d4d4d;
  font:
    1.6rem/1.25 Arial,
    sans-serif;
  margin: 0 auto;
  max-width: 68rem;
  width: 100%;
}
@media screen and (width >= 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/* End resets */
/* Global styles */
.form-group > input[type="text"] {
  display: inline-block;
  margin-top: 0.4rem;
}
.btn {
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  padding: 0.8rem 1rem 0.7rem;
  text-transform: capitalize;
}
.btn.toggle-btn {
  border-color: lightgray;
  border-width: 1px;
}
.btn.toggle-btn[aria-pressed="true"] {
  border-color: #4d4d4d;
  text-decoration: underline;
}
.btn__danger {
  background-color: #ca3c3c;
  border-color: #bd2130;
  color: white;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  background-color: black;
  color: white;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 49%;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  flex: 0 0 100%;
  margin: 0;
  text-align: center;
}
.visually-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}
[class*="stack"] > * {
  margin-bottom: 0;
  margin-top: 0;
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
.stack-exception {
  margin-top: 1.2rem;
}
/* End global styles */
/* General app styles */
.todoapp {
  background: white;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
}
@media screen and (width >= 550px) {
  .todoapp {
    padding: 4rem;
  }
}
.todoapp > * {
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
}
.todoapp > form {
  max-width: 100%;
}
.todoapp > h1 {
  display: block;
  margin: 0;
  margin-bottom: 1rem;
  max-width: 100%;
  text-align: center;
}
.label__lg {
  line-height: 1.01567;
  font-weight: 300;
  margin-bottom: 1rem;
  padding: 0.8rem;
  text-align: center;
}
.input__lg {
  border: 2px solid black;
  padding: 2rem;
}
.input__lg:focus-visible {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
[class*="__lg"] {
  display: inline-block;
  font-size: 1.9rem;
  width: 100%;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (width >= 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
/* End general app styles */
/* Todo item styles */
.todo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.todo > * {
  flex: 0 0 100%;
}
.todo-text {
  border: 2px solid #565656;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  width: 100%;
}
.todo-text:focus-visible {
  box-shadow: inset 0 0 0 2px;
}
/* End todo item styles */
/* Checkbox styles */
.c-cb {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  clear: left;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.25;
  min-height: 44px;
  padding-left: 40px;
  position: relative;
}
.c-cb > label::before,
.c-cb > input[type="checkbox"] {
  box-sizing: border-box;
  height: 44px;
  left: -2px;
  top: -2px;
  width: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  margin: 0;
  opacity: 0;
  position: absolute;
  z-index: 1;
}
.c-cb > label {
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  touch-action: manipulation;
}
.c-cb > label::before {
  background: transparent;
  border: 2px solid currentColor;
  content: "";
  position: absolute;
}
.c-cb > input[type="checkbox"]:focus-visible + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.c-cb > label::after {
  background: transparent;
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  box-sizing: content-box;
  content: "";
  height: 7px;
  left: 9px;
  opacity: 0;
  position: absolute;
  top: 11px;
  transform: rotate(-45deg);
  width: 18px;
}
.c-cb > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
/* End checkbox styles */
```

Speichern Sie und schauen Sie in Ihren Browser zurück, und Ihre App sollte nun ein angemessenes Styling haben.

## Zusammenfassung

Nun sieht unsere ToDo-Listen-App tatsächlich ein bisschen mehr wie eine echte App aus! Das Problem ist: Sie tut noch tatsächlich nichts. Wir werden beginnen, das im nächsten Kapitel zu beheben!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_getting_started","Learn_web_development/Core/Frameworks_libraries/React_components", "Learn_web_development/Core/Frameworks_libraries")}}
