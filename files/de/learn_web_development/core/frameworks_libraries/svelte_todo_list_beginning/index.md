---
title: Starten unserer Svelte To-Do-Liste-App
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started","Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props", "Learn_web_development/Core/Frameworks_libraries")}}

Da wir nun ein grundlegendes Verständnis davon haben, wie Svelte funktioniert, können wir mit dem Aufbau unserer Beispiel-App beginnen: einer To-Do-Liste. In diesem Artikel werden wir zunächst die gewünschte Funktionalität unserer App betrachten und dann eine `Todos.svelte`-Komponente erstellen, um statisches Markup und Styles aufzubauen. Damit ist alles bereit, um die Funktionen unserer To-Do-Liste-App zu entwickeln, die wir in den folgenden Artikeln fortsetzen werden.

Wir möchten, dass unsere Benutzer Aufgaben durchsuchen, hinzufügen und löschen sowie als erledigt markieren können. Dies wird die grundlegende Funktionalität sein, die wir in dieser Tutorialserie entwickeln werden, wobei wir auch einige fortgeschrittene Konzepte berücksichtigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>-,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen vertraut sind und
          Kenntnisse in der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
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
        Zu lernen, wie man eine Svelte-Komponente erstellt, sie in einer anderen Komponente rendert, Daten über Props hineinreicht und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Gemeinsam programmieren

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/02-starting-our-todo-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/02-starting-our-todo-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns mithilfe des REPL mit zu programmieren, beginnen Sie hier:

<https://svelte.dev/repl/b7b831ea3a354d3789cefbc31e2ca495?version=3.23.2>

## Funktionen der To-Do-Liste

So wird unsere To-Do-Liste aussehen, wenn sie fertig ist:

![typische To-Do-Liste-App, mit einem Titel 'Was muss erledigt werden?', einem Eingabefeld zum Hinzufügen von To-Dos und einer Liste von To-Dos mit Kontrollkästchen](01-todo-list-app.png)

Mit dieser Benutzeroberfläche kann unser Benutzer:

- Seine Aufgaben durchsuchen
- Aufgaben als erledigt/offen markieren, ohne sie zu löschen
- Aufgaben entfernen
- Neue Aufgaben hinzufügen
- Aufgaben nach Status filtern: Alle Aufgaben, aktive Aufgaben oder erledigte Aufgaben
- Aufgaben bearbeiten
- Alle Aufgaben als aktiv/erledigt markieren
- Alle erledigten Aufgaben entfernen

## Unsere erste Komponente erstellen

Lassen Sie uns eine `Todos.svelte`-Komponente erstellen. Diese wird unsere Liste der To-Dos enthalten.

1. Erstellen Sie einen neuen Ordner — `src/components`.

   > [!NOTE]
   > Sie können Ihre Komponenten überall im `src`-Ordner ablegen, aber der `components`-Ordner ist eine anerkannte Konvention, die es Ihnen ermöglicht, Ihre Komponenten leicht zu finden.

2. Erstellen Sie eine Datei mit dem Namen `src/components/Todos.svelte` mit folgendem Inhalt:

   ```svelte
   <h1>Svelte to-do list</h1>
   ```

3. Ändern Sie das `title`-Element in `public/index.html`, um den Text _Svelte- To-Do-Liste_ zu enthalten:

   ```svelte
   <title>Svelte to-do list</title>
   ```

4. Öffnen Sie `src/App.svelte` und ersetzen Sie den Inhalt durch Folgendes:

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";
   </script>

   <Todos />
   ```

5. Im Entwicklungsmodus gibt Svelte eine Warnung in der Browserkonsole aus, wenn ein nicht vorhandenes Prop in der Komponente spezifiziert wird; in diesem Fall haben wir ein `name`-Prop, das spezifiziert wird, wenn wir die `App`-Komponente in `src/main.js` instanziieren, das innerhalb von `App` nicht verwendet wird. Die Konsole sollte Ihnen derzeit eine Meldung im Stil von "\<App> wurde mit unbekanntem Prop 'name' erstellt" geben. Um dies zu beseitigen, entfernen Sie das `name`-Prop von `src/main.js`; es sollte jetzt folgendermaßen aussehen:

   ```js
   import App from "./App.svelte";

   const app = new App({
     target: document.body,
   });

   export default app;
   ```

Wenn Sie nun Ihre Testserver-URL überprüfen, sehen Sie, dass unsere `Todos.svelte`-Komponente gerendert wird:

![Basis-Komponenten-Rendering mit einem Titel "Svelte To-Do-Liste"](02-todos-component-rendered.png)

## Statisches Markup hinzufügen

Im Moment beginnen wir mit einer statischen Markup-Darstellung unserer App, damit Sie sehen können, wie es aussehen wird. Kopieren und fügen Sie Folgendes in unsere `Todos.svelte`-Komponenten-Datei ein und ersetzen Sie den vorhandenen Inhalt:

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

Überprüfen Sie die gerenderte Ausgabe erneut, und Sie werden so etwas sehen:

![Eine To-Do-Liste-App, aber ungestylt, mit einem Titel 'Was muss erledigt werden?', Eingabefeldern, Kontrollkästchen usw.](03-unstyled-todo-app.png)

Das oben stehende HTML-Markup ist nicht besonders gut gestylt und funktionell nutzlos. Lassen Sie uns jedoch das Markup betrachten und sehen, wie es sich auf unsere gewünschten Funktionen bezieht:

- Ein Label und ein Textfeld zum Eingeben neuer Aufgaben
- Drei Buttons zum Filtern nach Aufgabenstatus
- Ein Label, das die Gesamtanzahl der Aufgaben und der erledigten Aufgaben zeigt
- Eine ungeordnete Liste, die ein Listenelement für jede Aufgabe enthält
- Wenn die Aufgabe bearbeitet wird, hat das Listenelement ein Eingabefeld und zwei Buttons, um Änderungen abzubrechen oder zu speichern
- Wenn die Aufgabe nicht bearbeitet wird, gibt es ein Kontrollkästchen, um den Status als erledigt zu setzen, und zwei Buttons, um die Aufgabe zu bearbeiten oder zu löschen
- Schließlich gibt es zwei Buttons, um alle Aufgaben zu überprüfen/zu deaktivieren und erledigte Aufgaben zu entfernen

In den folgenden Artikeln werden wir all diese Funktionen zum Laufen bringen und mehr.

### Barrierefreiheitsmerkmale der To-Do-Liste

Möglicherweise bemerken Sie hier einige ungewöhnliche Attribute. Zum Beispiel:

```svelte
<button class="btn toggle-btn" aria-pressed="true">
  <span class="visually-hidden">Show</span>
  <span>All</span>
  <span class="visually-hidden">tasks</span>
</button>
```

Hier sagt `aria-pressed` unterstützender Technologie (wie Screenreadern), dass der Button in einem von zwei Zuständen sein kann: `gedrückt` oder `nicht gedrückt`. Denken Sie an diese als Entsprechungen für ein und aus. Ein Wert von `true` bedeutet, dass der Button standardmäßig gedrückt ist.

Die Klasse `visually-hidden` hat derzeit keine Wirkung, da wir noch keine CSS hinzugefügt haben. Sobald wir unsere Stile an Ort und Stelle haben, wird jedes Element mit dieser Klasse für sehende Benutzer ausgeblendet und bleibt für Benutzer von Screenreadern verfügbar – dies liegt daran, dass diese Wörter für sehende Benutzer nicht benötigt werden; sie sind da, um weiteren Informationen über die Funktion des Buttons für Screenreader-Benutzer zu geben, denen der zusätzliche visuelle Kontext fehlt.

Weiter unten finden Sie das folgende `<ul>`-Element:

```svelte
<ul
  role="list"
  class="todo-list stack-large"
  aria-labelledby="list-heading">
```

Das `role`-Attribut hilft unterstützender Technologie zu erklären, welchen semantischen Wert ein Element hat – oder welchen Zweck es erfüllt. Ein `<ul>` wird standardmäßig wie eine Liste behandelt, aber die Stile, die wir gleich hinzufügen werden, werden diese Funktionalität brechen. Diese Rolle wird die "Listen"-Bedeutung für das `<ul>`-Element wiederherstellen. Wenn Sie mehr darüber lernen möchten, warum dies notwendig ist, können Sie Scott O'Haras Artikel ["Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2019) lesen.

Das `aria-labelledby`-Attribut teilt unterstützenden Technologien mit, dass wir unser `<h2>` mit einer `id` von `list-heading` als das Label behandeln, das den Zweck der Liste darunter beschreibt. Diese Zuordnung gibt der Liste einen informativen Kontext, der Benutzern von Screenreadern helfen könnte, den Zweck besser zu verstehen.

Dies scheint ein guter Zeitpunkt zu sein, um darüber zu sprechen, wie Svelte mit Barrierefreiheit umgeht; lassen Sie uns das jetzt tun.

## Barrierefreiheitsunterstützung in Svelte

Svelte legt besonderen Wert auf Barrierefreiheit. Das Ziel ist es, Entwickler zu ermutigen, von "Natur aus" zugänglicheren Code zu schreiben. Da Svelte ein Compiler ist, kann es unsere HTML-Vorlagen statisch analysieren, um Warnungen zur Barrierefreiheit auszugeben, wenn Komponenten kompiliert werden.

Barrierefreiheit (in der Kurzform a11y) ist nicht immer einfach richtig zu machen, aber Svelte hilft, indem es Sie warnt, wenn Sie unzugängliches Markup schreiben.

Wenn wir zum Beispiel ein `<img>`-Element zu unserer `todos.svelte`-Komponente ohne entsprechendes `alt`-Prop hinzufügen:

```svelte
<h1>Svelte To-Do list</h1>

<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />
```

Gibt der Compiler folgende Warnung aus:

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

Darüber hinaus kann unser Editor diese Warnung anzeigen, noch bevor er den Compiler aufruft:

![Ein Code-Editor-Fenster mit einem Bildtag und einer Popup-Fehlermeldung, die besagt, dass das Element ein alt-Attribut haben sollte](04-svelte-accessibility-support.png)

Sie können Svelte anweisen, diese Warnung für den nächsten Block von Markup mit einem [Kommentar](https://svelte.dev/docs/basic-markup#comments) zu ignorieren, der mit `svelte-ignore` beginnt, wie dieses:

```svelte
<!-- svelte-ignore a11y-missing-attribute -->
<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />
```

> [!NOTE]
> Mit VS Code können Sie diesen Ignore-Kommentar automatisch hinzufügen, indem Sie auf den Link _Quick fix…_ klicken oder <kbd>Strg</kbd> + <kbd>.</kbd> drücken.

Wenn Sie diese Warnung global deaktivieren möchten, können Sie diesen `onwarn`-Handler in Ihre `rollup.config.js`-Datei innerhalb der Konfiguration für das `Svelte`-Plugin hinzufügen, wie dieses:

```js
export default {
  // …
  plugins: [
    svelte({
      dev: !production,
      css(css) {
        css.write("public/build/bundle.css");
      },
      // Warnings are normally passed straight to Rollup. You can
      // optionally handle them here, for example to squelch
      // warnings with a particular code
      onwarn(warning, handler) {
        // e.g. I don't care about screen readers -> please DON'T DO THIS!!!
        if (warning.code === "a11y-missing-attribute") {
          return;
        }

        // let Rollup handle all other warnings normally
        handler(warning);
      },
    }),

    // …
  ],
  // …
};
```

Diese Warnungen sind absichtlich im Compiler selbst implementiert und nicht als Plugin, das Sie möglicherweise Ihrem Projekt hinzufügen können. Die Idee ist, standardmäßig auf a11y-Probleme in Ihrem Markup zu prüfen und Ihnen die Möglichkeit zu geben, sich von spezifischen Warnungen abzumelden.

> [!NOTE]
> Sie sollten diese Warnungen nur deaktivieren, wenn Sie gute Gründe dafür haben, zum Beispiel beim Erstellen eines schnellen Prototyps. Es ist wichtig, ein guter Web-Bürger zu sein und Ihre Seiten so zugänglich wie möglich für eine möglichst breite Benutzerbasis zu machen.

Die von Svelte überprüften Barrierefreiheitsregeln stammen aus [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules), einem Plugin für ESLint, das statische Prüfungen für viele Barrierefreiheitsregeln bei JSX-Elementen bereitstellt. Svelte zielt darauf ab, alle diese in seinen Compiler zu implementieren, und die meisten von ihnen wurden bereits auf Svelte portiert. Auf GitHub können Sie sehen, [welche Barrierefreiheitsprüfungen noch fehlen](https://github.com/sveltejs/svelte/issues/820). Sie können die Bedeutung jeder Regel überprüfen, indem Sie auf den entsprechenden Link klicken.

## Unser Markup stylen

Lassen Sie uns die To-Do-Liste etwas besser aussehen lassen. Ersetzen Sie den Inhalt der Datei `public/global.css` durch Folgendes:

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
    1.6rem/1.25 "Arial",
    sans-serif;
  background-color: whitesmoke;
  color: #4d4d4d;
}
@media screen and (width >= 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/* END RESETS */

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
  border-color: lightgray;
}
.btn.toggle-btn[aria-pressed="true"] {
  text-decoration: underline;
  border-color: #4d4d4d;
}
.btn__danger {
  color: white;
  background-color: #ca3c3c;
  border-color: #bd2130;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  color: white;
  background-color: black;
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
/* END GLOBAL STYLES */

.todoapp {
  background: white;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
}
@media screen and (width >= 550px) {
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
  border: 2px solid black;
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
@media screen and (width >= 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
.filters {
  width: 100%;
  margin: unset;
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
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
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
  border: 2px solid currentColor;
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

Mit unserem staubsaugenden Markup sieht jetzt alles besser aus:

![Unsere gestylte To-Do-Liste-App, mit einem Titel "Was muss erledigt werden?", einem Eingabefeld zum Eingeben von mehr To-Dos und einer Liste von To-Dos mit Kontrollkästchen](05-styled-todo-app.png)

## Der bisherige Code

### Git

Um den Codezustand zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

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

Mit unserem Markup und Styling ist unsere To-Do-Liste-App dabei, Gestalt anzunehmen, und wir haben alles bereit, damit wir uns auf die zu implementierenden Funktionen konzentrieren können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started","Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props", "Learn_web_development/Core/Frameworks_libraries")}}
