---
title: Starten unserer Svelte-To-Do-Liste-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Da wir nun ein grundlegendes Verständnis dafür haben, wie Dinge in Svelte funktionieren, können wir beginnen, unsere Beispiel-App zu erstellen: eine To-Do-Liste. In diesem Artikel werden wir zunächst einen Blick auf die gewünschte Funktionalität unserer App werfen, dann erstellen wir eine `Todos.svelte`-Komponente und setzen statisches Markup und Styles ein, um alles bereit zu haben, um mit der Entwicklung unserer To-Do-App-Features zu beginnen, auf die wir in den folgenden Artikeln eingehen werden.

Wir möchten, dass unsere Benutzer Aufgaben durchsuchen, hinzufügen und löschen können und diese auch als erledigt markieren können. Dies wird die grundlegende Funktionalität sein, die wir in dieser Tutorial-Serie entwickeln werden. Wir werden uns dabei auch einige fortgeschrittenere Konzepte ansehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Befehlszeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Svelte-Komponente erstellt, sie innerhalb einer anderen Komponente rendert, Daten mithilfe von Props in sie hinein bringt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Gemeinsam mit uns programmieren

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen App-Status zu gelangen, führen Sie aus

```bash
cd mdn-svelte-tutorial/02-starting-our-todo-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/02-starting-our-todo-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu programmieren, beginnen Sie unter

<https://svelte.dev/repl/b7b831ea3a354d3789cefbc31e2ca495?version=3.23.2>

## Funktionen der To-Do-Liste-App

So wird unsere To-Do-Liste aussehen, wenn sie fertig ist:

![typische To-Do-Liste-App, mit einem Titel 'was getan werden muss', einem Eingabefeld, um weitere To-Dos einzugeben, und einer Liste von To-Dos mit Kontrollkästchen](01-todo-list-app.png)

Mit dieser Benutzeroberfläche kann unser Benutzer:

- Seine Aufgaben durchsuchen
- Aufgaben als erledigt/ausstehend markieren, ohne sie zu löschen
- Aufgaben entfernen
- Neue Aufgaben hinzufügen
- Aufgaben nach Status filtern: alle Aufgaben, aktive Aufgaben oder erledigte Aufgaben
- Aufgaben bearbeiten
- Alle Aufgaben als aktiv/erledigt markieren
- Alle erledigten Aufgaben entfernen

## Erstellung unserer ersten Komponente

Lassen Sie uns eine `Todos.svelte`-Komponente erstellen. Diese wird unsere Liste der zu erledigenden Aufgaben enthalten.

1. Erstellen Sie einen neuen Ordner — `src/components`.

   > [!NOTE]
   > Sie können Ihre Komponenten überall im `src`-Ordner ablegen, aber der `components`-Ordner ist eine anerkannte Konvention, der Sie folgen sollten, um Ihre Komponenten leicht zu finden.

2. Erstellen Sie eine Datei mit dem Namen `src/components/Todos.svelte` mit folgendem Inhalt:

   ```svelte
   <h1>Svelte to-do list</h1>
   ```

3. Ändern Sie das `title`-Element in `public/index.html`, um den Text _Svelte to-do list_ zu enthalten:

   ```svelte
   <title>Svelte to-do list</title>
   ```

4. Öffnen Sie `src/App.svelte` und ersetzen Sie den Inhalt mit dem folgenden:

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";
   </script>

   <Todos />
   ```

5. Im Entwicklungsmodus wird Svelte eine Warnung in der Browser-Konsole ausgeben, wenn eine nicht existierende Prop angegeben wird; in diesem Fall haben wir eine `name` Prop, die bei der Instanziierung der `App`-Komponente in `src/main.js` angegeben wird, die jedoch innerhalb von `App` nicht verwendet wird. Die Konsole sollte derzeit eine Nachricht ähnlich "\<App> was created with unknown prop 'name'" anzeigen. Um dies zu beseitigen, entfernen Sie die `name` Prop aus `src/main.js`; es sollte nun folgendermaßen aussehen:

   ```js
   import App from "./App.svelte";

   const app = new App({
     target: document.body,
   });

   export default app;
   ```

Wenn Sie jetzt Ihre Testserver-URL überprüfen, sehen Sie, dass unsere `Todos.svelte`-Komponente gerendert wird:

![Grundlegende Komponenten-Rendering mit einem Titel, der 'Svelte to-do list' sagt](02-todos-component-rendered.png)

## Hinzufügen von statischem Markup

Im Moment beginnen wir mit einer statischen Markup-Darstellung unserer App, damit Sie sehen können, wie sie aussehen wird. Kopieren und fügen Sie Folgendes in unsere `Todos.svelte`-Komponentendatei ein, um den bestehenden Inhalt zu ersetzen:

```svelte
<!-- Todos.svelte -->
<div class="todoapp stack-large">
  <!-- NewTodo -->
  <form>
    <h2 class="label-wrapper">
      <label for="todo-0" class="label__lg"> What needs to be done? </label>
    </h2>
    <input type="text" id="todo-0" autocomplete="off" class="input input__lg" />
    <button type="submit" disabled="" class="btn btn__primary btn__lg">
      Add
    </button>
  </form>

  <!-- Filter -->
  <div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" aria-pressed="true">
      <span class="visually-hidden">Show</span>
      <span>All</span>
      <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" aria-pressed="false">
      <span class="visually-hidden">Show</span>
      <span>Active</span>
      <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" aria-pressed="false">
      <span class="visually-hidden">Show</span>
      <span>Completed</span>
      <span class="visually-hidden">tasks</span>
    </button>
  </div>

  <!-- TodosStatus -->
  <h2 id="list-heading">2 out of 3 items completed</h2>

  <!-- Todos -->
  <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
    <!-- todo-1 (editing mode) -->
    <li class="todo">
      <div class="stack-small">
        <form class="stack-small">
          <div class="form-group">
            <label for="todo-1" class="todo-label">
              New name for 'Create a Svelte starter app'
            </label>
            <input
              type="text"
              id="todo-1"
              autocomplete="off"
              class="todo-text" />
          </div>
          <div class="btn-group">
            <button class="btn todo-cancel" type="button">
              Cancel
              <span class="visually-hidden">renaming Create a Svelte starter app</span>
            </button>
            <button class="btn btn__primary todo-edit" type="submit">
              Save
              <span class="visually-hidden">new name for Create a Svelte starter app</span>
            </button>
          </div>
        </form>
      </div>
    </li>

    <!-- todo-2 -->
    <li class="todo">
      <div class="stack-small">
        <div class="c-cb">
          <input type="checkbox" id="todo-2" checked />
          <label for="todo-2" class="todo-label">
            Create your first component
          </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            Edit
            <span class="visually-hidden">Create your first component</span>
          </button>
          <button type="button" class="btn btn__danger">
            Delete
            <span class="visually-hidden">Create your first component</span>
          </button>
        </div>
      </div>
    </li>

    <!-- todo-3 -->
    <li class="todo">
      <div class="stack-small">
        <div class="c-cb">
          <input type="checkbox" id="todo-3" />
          <label for="todo-3" class="todo-label">
            Complete the rest of the tutorial
          </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            Edit
            <span class="visually-hidden">Complete the rest of the tutorial</span>
          </button>
          <button type="button" class="btn btn__danger">
            Delete
            <span class="visually-hidden">Complete the rest of the tutorial</span>
          </button>
        </div>
      </div>
    </li>
  </ul>

  <hr />

  <!-- MoreActions -->
  <div class="btn-group">
    <button type="button" class="btn btn__primary">Check all</button>
    <button type="button" class="btn btn__primary">Remove completed</button>
  </div>
</div>
```

Überprüfen Sie die gerenderte Ausgabe erneut, und Sie werden etwas Ähnliches sehen:

![Eine To-Do-Liste-App, aber ungestylt, mit einem Titel 'was getan werden muss', Eingabefeldern, Kontrollkästchen usw.](03-unstyled-todo-app.png)

Das obige HTML-Markup ist nicht sehr schön gestylt und auch funktional nutzlos. Trotzdem lassen Sie uns das Markup betrachten und sehen, wie es sich auf unsere gewünschten Funktionen bezieht:

- Ein Label und ein Textfeld zum Eingeben neuer Aufgaben
- Drei Schaltflächen zum Filtern nach Aufgabenstatus
- Ein Label, das die Gesamtanzahl der Aufgaben und die erledigten Aufgaben anzeigt
- Eine ungeordnete Liste, die Listenelemente für jede Aufgabe enthält
- Wenn die Aufgabe bearbeitet wird, enthält das Listenelement ein Eingabefeld und zwei Schaltflächen, um Änderungen abzubrechen oder zu speichern
- Wenn die Aufgabe nicht bearbeitet wird, gibt es ein Kontrollkästchen, um den Erledigt-Status zu setzen, und zwei Schaltflächen, um die Aufgabe zu bearbeiten oder zu löschen
- Schließlich gibt es zwei Schaltflächen, um alle Aufgaben auszuwählen/abzuwählen und abgeschlossene Aufgaben zu entfernen

In den folgenden Artikeln werden wir all diese Funktionen zum Laufen bringen und noch mehr.

### Barrierefreiheitsfunktionen der To-Do-Liste

Möglicherweise bemerken Sie hier einige ungewöhnliche Attribute. Zum Beispiel:

```svelte
<button class="btn toggle-btn" aria-pressed="true">
  <span class="visually-hidden">Show</span>
  <span>All</span>
  <span class="visually-hidden">tasks</span>
</button>
```

Hier teilt `aria-pressed` assistiven Technologien (wie Bildschirmlesern) mit, dass die Schaltfläche in einem von zwei Zuständen sein kann: `gedrückt` oder `nicht gedrückt`. Denken Sie an diese Zustände als Analogien für an und aus. Ein Wert von `true` bedeutet, dass die Schaltfläche standardmäßig gedrückt ist.

Die Klasse `visually-hidden` hat noch keine Wirkung, da wir noch keine CSS hinzugefügt haben. Sobald wir unsere Styles eingebaut haben, wird jedes Element mit dieser Klasse für sehende Benutzer unsichtbar und bleibt trotzdem für Screenreader-Benutzer verfügbar - dies liegt daran, dass diese Wörter für sehende Benutzer nicht erforderlich sind; sie sind da, um weiteren Informationen für Benutzer von Screenreadern bereitzustellen, die nicht den zusätzlichen visuellen Kontext haben, der ihnen hilft.

Weiter unten finden Sie das folgende `<ul>`-Element:

```svelte
<ul
  role="list"
  class="todo-list stack-large"
  aria-labelledby="list-heading">
```

Das `role`-Attribut hilft unterstützenden Technologien zu erklären, welche semantische Bedeutung ein Element hat - oder welchen Zweck es erfüllt. Ein `<ul>` wird standardmäßig wie eine Liste behandelt, aber die Styles, die wir hinzufügen, werden diese Funktionalität zerstören. Diese Rolle stellt die "Listen"-Bedeutung für das `<ul>`-Element wieder her. Wenn Sie mehr darüber erfahren möchten, warum dies notwendig ist, können Sie Scott O'Haras Artikel ["Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2019) lesen.

Das `aria-labelledby`-Attribut teilt unterstützenden Technologien mit, dass wir unser `<h2>` mit einer `id` von `list-heading` als das Etikett behandeln, das den Zweck der Liste darunter beschreibt. Diese Zuordnung gibt der Liste einen informativen Kontext, der Benutzern von Screenreadern helfen könnte, den Zweck besser zu verstehen.

Dies scheint ein guter Zeitpunkt zu sein, um darüber zu sprechen, wie Svelte mit Barrierefreiheit umgeht; lassen Sie uns das jetzt tun.

## Svelte-Unterstützung für Barrierefreiheit

Svelte legt besonderen Wert auf Barrierefreiheit. Das Ziel ist es, Entwickler zu ermutigen, von Haus aus zugänglichere Code zu schreiben. Als Compiler kann Svelte unsere HTML-Vorlagen statisch analysieren und Barrierefreiheitswarnungen ausgeben, wenn Komponenten kompiliert werden.

Barrierefreiheit (abgekürzt a11y) ist nicht immer leicht korrekt umzusetzen, aber Svelte hilft, indem es Sie warnt, wenn sie nicht zugängliches Markup schreiben.

Beispielsweise, wenn wir ein `<img>`-Element ohne entsprechendes `alt`-Attribut zu unserer `todos.svelte`-Komponente hinzufügen:

```svelte
<h1>Svelte To-Do list</h1>

<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />
```

Der Compiler wird die folgende Warnung ausgeben:

```bash
(!) Plugin svelte: A11y: <img> element should have an alt attribute
src/components/Todos.svelte
1: <h1>Svelte To-Do list</h1>
2:
3: <img height="32" width="88" src="https://www.w3.org/WAI/wcag2A">
   ^
created public/build/bundle.js in 220ms

[2020-07-15 04:07:43] waiting for changes...
```

Zudem kann unser Editor diese Warnung anzeigen, noch bevor der Compiler aufgerufen wird:

![Ein Code-Editor-Fenster zeigt ein Bild-Tag mit einer Popup-Fehlermeldung, die besagt, dass das Element ein alt-Attribut haben sollte](04-svelte-accessibility-support.png)

Sie können Svelte dazu veranlassen, diese Warnung für den nächsten Markup-Block mit einem [Kommentar](https://svelte.dev/docs/basic-markup#comments) zu ignorieren, der mit `svelte-ignore` beginnt, so:

```svelte
<!-- svelte-ignore a11y-missing-attribute -->
<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />
```

> [!NOTE]
> Mit VSCode können Sie diesen Ignore-Kommentar automatisch hinzufügen, indem Sie auf den Link _Quick fix…_ klicken oder <kbd>Strg</kbd> + <kbd>.</kbd> drücken.

Wenn Sie diese Warnung global deaktivieren möchten, können Sie diesen `onwarn` Handler in Ihrer `rollup.config.js`-Datei innerhalb der Konfiguration für das `Svelte`-Plugin hinzufügen, so:

```js
plugins: [
  svelte({
    dev: !production,
    css: (css) => {
      css.write("public/build/bundle.css");
    },
    // Warnings are normally passed straight to Rollup. You can
    // optionally handle them here, for example to squelch
    // warnings with a particular code
    onwarn: (warning, handler) => {
      // e.g. I don't care about screen readers -> please DON'T DO THIS!!!
      if (warning.code === "a11y-missing-attribute") {
        return;
      }

      // let Rollup handle all other warnings normally
      handler(warning);
    },
  }),

  // …
];
```

Diese Warnungen sind absichtlich im Compiler selbst und nicht als optionales Plug-in implementiert, das Sie Ihrem Projekt hinzufügen könnten. Die Idee ist, standardmäßig a11y-Probleme in Ihrem Markup zu überprüfen und Sie die Möglichkeit zu geben, bestimmte Warnungen zu deaktivieren.

> [!NOTE]
> Sie sollten diese Warnungen nur deaktivieren, wenn Sie gute Gründe dafür haben, zum Beispiel beim Aufbau eines schnellen Prototyps. Es ist wichtig, ein guter Web-Bürger zu sein und Ihre Seiten für die größtmögliche Nutzerbasis zugänglich zu machen.

Die von Svelte überprüften Barrierefreiheitsregeln stammen aus [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules), einem Plugin für ESLint, das statische Überprüfungen für viele Barrierefreiheitsregeln auf JSX-Elementen bietet. Svelte zielt darauf ab, alle von ihnen in seinem Compiler zu implementieren, und die meisten von ihnen wurden bereits zu Svelte portiert. Auf GitHub können Sie sehen, [welche Barrierefreiheitsüberprüfungen noch fehlen](https://github.com/sveltejs/svelte/issues/820). Sie können die Bedeutung jeder Regel anklicken und deren Links überprüfen.

## Styling unseres Markups

Lassen Sie uns die To-Do-Liste etwas ansprechender gestalten. Ersetzen Sie den Inhalt der Datei `public/global.css` durch das Folgende:

```css
/* RESETS */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
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
    1.6rem/1.25 Arial,
    sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/

/* GLOBAL STYLES */
.form-group > input[type="text"] {
  display: inline-block;
  margin-top: 0.4rem;
}
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}
.btn.toggle-btn {
  border-width: 1px;
  border-color: #d3d3d3;
}
.btn.toggle-btn[aria-pressed="true"] {
  text-decoration: underline;
  border-color: #4d4d4d;
}
.btn__danger {
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  color: #fff;
  background-color: #000;
}
.btn__primary:disabled {
  color: darkgrey;
  background-color: #565656;
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
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
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
.stack-exception {
  margin-top: 1.2rem;
}
/* END GLOBAL STYLES */

.todoapp {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
}
@media screen and (min-width: 550px) {
  .todoapp {
    padding: 4rem;
  }
}
.todoapp > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
.todoapp > form {
  max-width: 100%;
}
.todoapp > h1 {
  display: block;
  max-width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}
.label__lg {
  line-height: 1.01567;
  font-weight: 300;
  padding: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
}
.input__lg {
  padding: 2rem;
  border: 2px solid #000;
}
.input__lg:focus {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
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
.filters {
  width: 100%;
  margin: unset auto;
}
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
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
.todo-text:focus {
  box-shadow: inset 0 0 0 2px;
}
/* CHECKBOX STYLES */
.c-cb {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 44px;
  padding-left: 40px;
  clear: left;
}
.c-cb > label::before,
.c-cb > input[type="checkbox"] {
  box-sizing: border-box;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  margin: 0;
  opacity: 0;
}
.c-cb > label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
.c-cb > label::before {
  content: "";
  position: absolute;
  border: 2px solid currentcolor;
  background: transparent;
}
.c-cb > input[type="checkbox"]:focus + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.c-cb > label::after {
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
.c-cb > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
```

Mit unserem gestylten Markup sieht nun alles besser aus:

![Unsere To-Do-Liste-App, gestylt, mit einem Titel 'was getan werden muss', einem Eingabefeld zum Eingeben von mehr To-Dos und einer Liste von To-Dos mit Kontrollkästchen](05-styled-todo-app.png)

## Der bisherige Code

### Git

Um den Stand des Codes am Ende dieses Artikels zu sehen, greifen Sie so auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## Zusammenfassung

Mit unserem Markup und Styling an Ort und Stelle beginnt unsere To-Do-Liste-App Gestalt anzunehmen, und wir haben alles bereit, um uns auf die Funktionen zu konzentrieren, die wir implementieren müssen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
