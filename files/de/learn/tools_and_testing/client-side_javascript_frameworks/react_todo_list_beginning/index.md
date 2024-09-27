---
title: Beginn unserer React-To-Do-Liste
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Angenommen, wir wurden beauftragt, ein Proof-of-Concept in React zu erstellen – eine App, die es den Benutzern erlaubt, Aufgaben hinzuzufügen, zu bearbeiten und zu löschen, an denen sie arbeiten möchten, und auch Aufgaben als erledigt zu markieren, ohne sie zu löschen. Dieser Artikel führt Sie durch die Basisstruktur und das Styling einer solchen Anwendung, bereit für die spätere Definition einzelner Komponenten und Interaktivität.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react-Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einführung in unsere To-Do-Listen-Fallstudie und Platzieren der grundlegenden
        <code>App</code>-Struktur und des Stylings.
      </td>
    </tr>
  </tbody>
</table>

## Die User Stories unserer App

In der Softwareentwicklung ist eine User Story ein umsetzbares Ziel aus der Perspektive des Benutzers. Die Definition von User Stories, bevor wir unsere Arbeit beginnen, hilft uns, uns zu fokussieren. Unsere App sollte die folgenden Stories erfüllen:

Als Benutzer kann ich

- eine Liste von Aufgaben lesen.
- mit der Maus oder Tastatur eine Aufgabe hinzufügen.
- jede Aufgabe als erledigt markieren, mit der Maus oder Tastatur.
- jede Aufgabe löschen, mit der Maus oder Tastatur.
- jede Aufgabe bearbeiten, mit der Maus oder Tastatur.
- einen spezifischen Unterabschnitt der Aufgaben ansehen: Alle Aufgaben, nur die aktive Aufgabe, oder nur die erledigten Aufgaben.

Wir werden diese Stories nacheinander angehen.

## Vorbereitungen vor dem Projekt

Vite hat uns etwas Code gegeben, den wir für unser Projekt überhaupt nicht verwenden werden. Die folgenden Terminalbefehle werden ihn löschen, um Platz für unser neues Projekt zu machen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis der App befinden!

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
> Wenn Sie Ihren Server gestoppt haben, um die oben genannten Terminalaufgaben durchzuführen, müssen Sie ihn erneut mit `npm run dev` starten.

## Projekt-Starter-Code

Als Ausgangspunkt für dieses Projekt werden wir zwei Dinge bereitstellen: eine `App()`-Funktion, um die zu ersetzen, die Sie gerade gelöscht haben, und einige CSS, um Ihre App zu stylen.

### Das JSX

Kopieren Sie den folgenden Codeausschnitt in Ihre Zwischenablage und fügen Sie ihn in `App.jsx` ein:

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

Öffnen Sie nun `index.html` und ändern Sie den Text des [`<title>`](/de/docs/Web/HTML/Element/title)-Elements zu `TodoMatic`. So passt er zum [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) am oberen Ende unserer App.

```html
<title>TodoMatic</title>
```

Wenn sich Ihr Browser aktualisiert, sollten Sie etwas wie dies sehen:

![todo-matic app, ungestylt, zeigt ein Durcheinander aus Beschriftungen, Eingabefeldern und Buttons](unstyled-app.png)

Es ist hässlich und funktioniert noch nicht, aber das ist okay – wir werden es gleich stylen. Betrachten Sie zuerst das vorhandene JSX und wie es unseren User Stories entspricht:

- Wir haben ein [`<form>`](/de/docs/Web/HTML/Element/form)-Element mit einem [`<input type="text">`](/de/docs/Web/HTML/Element/input/text), um eine neue Aufgabe auszuführen, und einen Button, um das Formular abzusenden.
- Wir haben eine Reihe von Buttons, die verwendet werden, um unsere Aufgaben zu filtern.
- Wir haben eine Überschrift, die uns sagt, wie viele Aufgaben noch ausstehen.
- Wir haben unsere 3 Aufgaben, die in einer ungeordneten Liste angeordnet sind. Jede Aufgabe ist ein Listenelement ([`<li>`](/de/docs/Web/HTML/Element/li)) und hat Buttons, um sie zu bearbeiten und zu löschen, sowie eine Checkbox, um sie als erledigt abzuhaken.

Das Formular wird es uns erlauben, Aufgaben zu _erstellen_; die Buttons werden es uns erlauben, sie zu _filtern_; die Überschrift und die Liste sind unsere Möglichkeit, sie zu _lesen_. Die Benutzeroberfläche zum _Bearbeiten_ einer Aufgabe fehlt derzeit auffallend. Das ist in Ordnung – wir werden das später umsetzen.

### Barrierefreiheitseigenschaften

Sie werden hier einige ungewöhnliche Markup-Elemente bemerken. Zum Beispiel:

```jsx
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```

Hier informiert `aria-pressed` Assistenztechnologien (wie Bildschirmlesegeräte) darüber, dass der Button in einem von zwei Zuständen sein kann: `pressed` oder `unpressed`. Stellen Sie sich diese als Analogie zu `on` und `off` vor. Das Setzen eines Werts von `"true"` bedeutet, dass der Button standardmäßig gedrückt ist.

Die Klasse `visually-hidden` hat bisher keinerlei Auswirkung, da wir noch kein CSS eingebunden haben. Sobald wir unsere Styles hinzugefügt haben, wird jedes Element mit dieser Klasse von sichtbaren Benutzern versteckt und dennoch für Benutzer von Assistenztechnologien zugänglich sein – dies liegt daran, dass diese Wörter für sehende Benutzer nicht erforderlich sind; sie dienen dazu, Benutzern von Assistenztechnologien zusätzliche Informationen darüber zu geben, was der Button tut, da sie nicht über das zusätzliche visuelle Kontextbewusstsein verfügen.

Weiter unten finden Sie unser [`<ul>`](/de/docs/Web/HTML/Element/ul)-Element:

```html
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  …
</ul>
```

Das `role`-Attribut hilft Assistenztechnologien zu erklären, welche Art von Element ein Tag darstellt. Ein `<ul>` wird standardmäßig als Liste behandelt, aber die gleich hinzuzufügenden Styles werden diese Funktionalität brechen. Diese Rolle wird die Bedeutung "Liste" zum `<ul>`-Element zurückbringen. Wenn Sie mehr darüber erfahren möchten, warum dies notwendig ist, können Sie Scott O'Haras Artikel ["Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) lesen.

Das Attribut `aria-labelledby` teilt Assistenztechnologien mit, dass wir unsere Listenkopfzeile als das Label behandeln, das den Zweck der Liste darunter beschreibt. Durch diese Zuordnung erhält die Liste einen informativeren Kontext, der Benutzern von Assistenztechnologien helfen könnte, den Zweck der Liste besser zu verstehen.

Schließlich haben die Labels und Eingaben in unseren Listeneinträgen einige Attribute, die speziell für JSX sind:

```jsx
<input id="todo-0" type="checkbox" defaultChecked />
<label className="todo-label" htmlFor="todo-0">
  Eat
</label>
```

Das `defaultChecked`-Attribut im `<input />`-Tag weist React an, dieses Kontrollkästchen initial zu aktivieren. Wenn wir `checked` verwenden würden, wie wir es in regulärem HTML tun, würde React einige Warnungen in unserer Browserkonsole in Bezug auf das Event-Handling auf dem Kontrollkästchen protokollieren, was wir vermeiden möchten. Machen Sie sich an dieser Stelle nicht allzu viele Sorgen darüber — wir werden das später abdecken, wenn wir zu den Events kommen.

Das Attribut `htmlFor` entspricht dem `for`-Attribut, das in HTML verwendet wird. Wir können `for` nicht als Attribut in JSX verwenden, da `for` ein reserviertes Wort ist, daher verwendet React stattdessen `htmlFor`.

### Eine Anmerkung zu booleschen Attributen in JSX

Das `defaultChecked`-Attribut im vorherigen Abschnitt ist ein boolesches Attribut – ein Attribut, dessen Wert entweder `true` oder `false` ist. Wie in HTML ist ein boolesches Attribut `true`, wenn es vorhanden ist, und `false`, wenn es fehlt; die Zuordnung auf der rechten Seite des Ausdrucks ist optional. Sie können seinen Wert explizit setzen, indem Sie ihn in geschwungene Klammern übergeben – zum Beispiel `defaultChecked={true}` oder `defaultChecked={false}`.

Da JSX JavaScript ist, gibt es ein Problem, das Sie bei booleschen Attributen beachten sollten: das Schreiben von `defaultChecked="false"` setzt einen _String_-Wert von `"false"` anstelle eines _booleschen_ Werts. Nicht-leere Strings sind [truthy](/de/docs/Glossary/Truthy), so dass React `defaultChecked` als `true` betrachtet und das Kontrollkästchen standardmäßig aktiviert. Das ist nicht das, was wir wollen, also sollten wir es vermeiden.

Wenn Sie möchten, können Sie das Schreiben boolescher Attribute mit einem anderen Attribut üben, das Sie vielleicht schon einmal gesehen haben, [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden), das verhindert, dass Elemente auf der Seite gerendert werden. Versuchen Sie, `hidden` auf das `<h1>`-Element in `App.jsx` hinzuzufügen, um zu sehen, was passiert, und versuchen Sie dann, seinen Wert explizit auf `{false}` zu setzen. Beachten Sie erneut, dass das Schreiben von `hidden="false"` zu einem truthy Wert führt, sodass das `<h1>` _versteckt_ wird. Vergessen Sie nicht, diesen Code zu entfernen, wenn Sie fertig sind.

> [!NOTE]
> Das `aria-pressed`-Attribut im früheren Code-Ausschnitt hat einen Wert von `"true"`, da `aria-pressed` kein echtes boolesches Attribut im Sinne von `checked` ist.

### Unsere Styles implementieren

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
  background-color: #f5f5f5;
  color: #4d4d4d;
  font:
    1.6rem/1.25 Arial,
    sans-serif;
  margin: 0 auto;
  max-width: 68rem;
  width: 100%;
}
@media screen and (min-width: 620px) {
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
  border-color: #d3d3d3;
  border-width: 1px;
}
.btn.toggle-btn[aria-pressed="true"] {
  border-color: #4d4d4d;
  text-decoration: underline;
}
.btn__danger {
  background-color: #ca3c3c;
  border-color: #bd2130;
  color: #fff;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  background-color: #000;
  color: #fff;
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
  clip: rect(1px 1px 1px 1px);
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
@media screen and (min-width: 550px) {
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
  background: #fff;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
}
@media screen and (min-width: 550px) {
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
  border: 2px solid #000;
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
@media screen and (min-width: 620px) {
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
  border: 2px solid currentcolor;
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

Speichern Sie und schauen Sie zurück in Ihren Browser, und Ihre App sollte nun ein vernünftiges Styling haben.

## Zusammenfassung

Jetzt sieht unsere To-Do-Listen-App tatsächlich etwas mehr wie eine echte App aus! Das Problem ist: Sie tut tatsächlich noch nichts. Wir werden damit im nächsten Kapitel beginnen, das zu beheben!

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
