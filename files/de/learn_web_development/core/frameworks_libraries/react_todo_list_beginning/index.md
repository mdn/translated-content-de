---
title: Beginn unserer React ToDo-App
short-title: React ToDo-App
slug: Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_getting_started","Learn_web_development/Core/Frameworks_libraries/React_components", "Learn_web_development/Core/Frameworks_libraries")}}

Nehmen wir an, dass wir mit der Erstellung eines Proof-of-Concepts in React beauftragt wurden – eine App, die es Benutzern ermöglicht, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und auch Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch die grundlegende Struktur und das Styling einer solchen Anwendung, bereit für die Definition einzelner Komponenten und Interaktivität, die wir später hinzufügen werden.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispielcodes der React-App in unserem [todo-react-Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen sowie mit der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Vertrautheit mit unserer To-Do-Liste als Fallstudie und die Basisstruktur und das Styling der <code>App</code>.
      </td>
    </tr>
  </tbody>
</table>

## Die User Stories unserer App

In der Softwareentwicklung ist eine User Story ein umsetzbares Ziel aus der Perspektive des Benutzers. Die Definition von User Stories, bevor wir mit unserer Arbeit beginnen, hilft uns, unseren Fokus zu finden. Unsere App sollte die folgenden Stories erfüllen:

Als Benutzer kann ich

- eine Liste von Aufgaben lesen.
- eine Aufgabe mit der Maus oder Tastatur hinzufügen.
- jede Aufgabe als erledigt markieren, mit der Maus oder Tastatur.
- jede Aufgabe löschen, mit der Maus oder Tastatur.
- jede Aufgabe bearbeiten, mit der Maus oder Tastatur.
- eine spezifische Teilmenge der Aufgaben ansehen: Alle Aufgaben, nur die aktive Aufgabe oder nur die erledigten Aufgaben.

Wir werden diese Stories einzeln angehen.

## Vorbereitungsarbeiten vor dem Projekt

Vite hat uns etwas Code gegeben, den wir für unser Projekt überhaupt nicht benötigen werden. Die folgenden Terminal-Befehle werden diesen löschen, um Platz für unser neues Projekt zu machen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis der App befinden!

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
> Wenn Sie Ihren Server gestoppt haben, um die oben genannten Terminalaufgaben auszuführen, müssen Sie ihn wieder mit `npm run dev` starten.

## Startcode für das Projekt

Als Ausgangspunkt für dieses Projekt stellen wir Ihnen zwei Dinge zur Verfügung: eine `App()`-Funktion, um die zu ersetzen, die Sie gerade gelöscht haben, und etwas CSS, um Ihre App zu stylen.

### Das JSX

Kopieren Sie den folgenden Schnipsel in die Zwischenablage und fügen Sie ihn dann in `App.jsx` ein:

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

Öffnen Sie nun `index.html` und ändern Sie den Text des [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Elements in `TodoMatic`. So wird es mit dem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) am Anfang unserer App übereinstimmen.

```html
<title>TodoMatic</title>
```

Wenn sich Ihr Browser aktualisiert, sollten Sie etwas Ähnliches sehen:

![Todo-Matic-App, ungestylt, zeigt ein Durcheinander von Labels, Eingabefeldern und Buttons](unstyled-app.png)

Es sieht hässlich aus und funktioniert noch nicht, aber das ist in Ordnung — wir werden es gleich stylen. Zuerst überlegen Sie, was wir in JSX haben und wie es mit unseren User Stories korrespondiert:

- Wir haben ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form)-Element, mit einem [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) zum Eingeben einer neuen Aufgabe und einem Button, um das Formular abzuschicken.
- Wir haben eine Reihe von Buttons, die verwendet werden, um unsere Aufgaben zu filtern.
- Wir haben eine Überschrift, die uns mitteilt, wie viele Aufgaben noch übrig sind.
- Wir haben 3 Aufgaben, angeordnet in einer ungeordneten Liste. Jede Aufgabe ist ein Listenelement ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)) und hat Buttons, um sie zu bearbeiten und zu löschen, sowie ein Kontrollkästchen, um sie als erledigt zu markieren.

Das Formular erlaubt es uns, Aufgaben zu _erstellen_; die Buttons ermöglichen es uns, sie zu _filtern_; die Überschrift und Liste sind unser Weg, sie zu _lesen_. Die UI zum _Bearbeiten_ einer Aufgabe fehlt bisher auffällig. Das ist okay – wir werden das später schreiben.

### Barrierefreiheitsfunktionen

Sie bemerken vielleicht einige ungewöhnliche Markup-Elemente hier. Zum Beispiel:

```jsx
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```

Hier informiert `aria-pressed` unterstützende Technologien (wie Screenreader) darüber, dass der Button in einem von zwei Zuständen sein kann: `gedrückt` oder `nicht gedrückt`. Denken Sie an diese als Analogien zu `on` und `off`. Eine Einstellung von `"true"` bedeutet, dass der Button standardmäßig gedrückt ist.

Die Klasse `visually-hidden` hat noch keine Wirkung, weil wir noch kein CSS eingebunden haben. Sobald wir unsere Stile implementiert haben, wird jedes Element mit dieser Klasse für sehende Benutzer unsichtbar, jedoch weiterhin für Benutzer unterstützender Technologien verfügbar sein — dies liegt daran, dass diese Wörter für sehende Benutzer nicht nötig sind; sie bieten zusätzliche Informationen darüber, was der Button macht, für Nutzer unterstützender Technologien, die nicht denselben visuellen Kontext haben.

Weiter unten finden Sie unser [`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)-Element:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  …
</ul>
```

Das `role`-Attribut hilft unterstützenden Technologien, zu erklären, um welchen Art von Element es sich handelt. Ein `<ul>` wird standardmäßig wie eine Liste behandelt, aber die Stile, die wir gleich hinzufügen werden, werden diese Funktionalität beeinträchtigen. Diese Rolle stellt die "Listen"-Bedeutung des `<ul>`-Elements wieder her. Wenn Sie mehr darüber erfahren möchten, warum dies notwendig ist, können Sie [Scott O'Haras Artikel, "Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) lesen.

Das `aria-labelledby`-Attribut sagt unterstützenden Technologien, dass wir unsere Listenüberschrift als Beschriftung behandeln, die den Zweck der darunter liegenden Liste beschreibt. Diese Assoziation gibt der Liste einen informativen Kontext, der Benutzern unterstützender Technologien helfen kann, den Zweck der Liste besser zu verstehen.

Schließlich haben die Labels und Eingaben in unseren Listenelementen einige Attribute, die einzigartig für JSX sind:

```jsx
<div className="c-cb">
  <input id="todo-0" type="checkbox" defaultChecked />
  <label className="todo-label" htmlFor="todo-0">
    Eat
  </label>
</div>
```

Das `defaultChecked`-Attribut im `<input />`-Tag teilt React mit, dass dieses Kontrollkästchen anfänglich angekreuzt sein soll. Wenn wir `checked` verwenden würden, wie wir es im regulären HTML tun würden, würde React einige Warnungen in unsere Browserkonsole über die Ereignisbehandlung im Zusammenhang mit dem Kontrollkästchen loggen, was wir vermeiden möchten. Machen Sie sich darüber jetzt nicht zu viele Gedanken — wir werden dies später behandeln, wenn wir zu den Ereignissen kommen.

Das `htmlFor`-Attribut entspricht dem `for`-Attribut, das im HTML verwendet wird. Wir können `for` nicht als Attribut in JSX verwenden, da `for` ein reserviertes Wort ist, daher verwendet React stattdessen `htmlFor`.

### Eine Anmerkung zu booleschen Attributen in JSX

Das `defaultChecked`-Attribut im vorherigen Abschnitt ist ein boolesches Attribut – ein Attribut, dessen Wert entweder `true` oder `false` ist. Wie im HTML ist ein boolesches Attribut `true`, wenn es vorhanden ist, und `false`, wenn es fehlt; die Zuweisung auf der rechten Seite des Ausdrucks ist optional. Sie können seinen Wert explizit festlegen, indem Sie ihn in geschweifte Klammern setzen – zum Beispiel `defaultChecked={true}` oder `defaultChecked={false}`.

Da JSX JavaScript ist, gibt es eine Stolperfalle bei booleschen Attributen: Das Schreiben von `defaultChecked="false"` setzt einen _String_-Wert von `"false"` statt eines _booleschen_ Werts. Nicht-leere Strings sind {{Glossary("Truthy", "truthy")}}, daher wird React `defaultChecked` als `true` betrachten und das Kontrollkästchen standardmäßig ankreuzen. Dies ist nicht das, was wir möchten, daher sollten wir es vermeiden.

Wenn Sie möchten, können Sie das Schreiben von booleschen Attributen mit einem anderen Attribut üben, das Sie möglicherweise schon einmal gesehen haben, [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), das verhindert, dass Elemente auf der Seite gerendert werden. Versuchen Sie, `hidden` zum `<h1>`-Element in `App.jsx` hinzuzufügen, um zu sehen, was passiert, und setzen Sie dann seinen Wert explizit auf `{false}`. Beachten Sie erneut, dass das Schreiben von `hidden="false"` einen truthy Wert ergibt, sodass das `<h1>` _versteckt_ wird. Vergessen Sie nicht, diesen Code zu entfernen, wenn Sie fertig sind.

> [!NOTE]
> Das `aria-pressed`-Attribut, das in unserem früheren Code-Schnipsel verwendet wurde, hat einen Wert von `"true"`, da `aria-pressed` kein echtes boolesches Attribut in der Weise ist, wie es `checked` ist.

### Implementierung unserer Stile

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
    1.6rem/1.25 "Arial",
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
  font-family: "Arial", sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
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

Speichern Sie und schauen Sie in Ihren Browser zurück, und Ihre App sollte nun ein vernünftiges Styling haben.

## Zusammenfassung

Jetzt sieht unsere ToDo-Listen-App tatsächlich etwas mehr nach einer echten App aus! Das Problem ist: sie macht noch nichts. Wir werden das im nächsten Kapitel anfangen zu beheben!

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_getting_started","Learn_web_development/Core/Frameworks_libraries/React_components", "Learn_web_development/Core/Frameworks_libraries")}}
