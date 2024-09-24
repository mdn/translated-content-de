---
title: Beginn unserer Svelte To-do-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Da wir jetzt ein grundlegendes Verständnis davon haben, wie Svelte funktioniert, können wir beginnen, unsere Beispiel-App zu entwickeln: eine To-do-Liste. In diesem Artikel werden wir zunächst die gewünschte Funktionalität unserer App betrachten und dann eine `Todos.svelte`-Komponente erstellen und statisches Markup und Styles implementieren. So haben wir alles vorbereitet, um die Funktionen unserer To-do-App zu entwickeln, auf die wir in den folgenden Artikeln eingehen werden.

Wir möchten, dass unsere Benutzer Aufgaben durchsuchen, hinzufügen und löschen sowie als erledigt markieren können. Dies wird die grundlegende Funktionalität sein, die wir in dieser Tutorial-Serie entwickeln werden, und wir werden auch einige fortgeschrittenere Konzepte auf dem Weg betrachten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Svelte-Komponente erstellt, sie in eine andere Komponente rendert, Daten mit Hilfe von Props übergibt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Code zusammen mit uns

### Git

Klonen Sie das GitHub-Repository (wenn Sie es noch nicht gemacht haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie dann aus

```bash
cd mdn-svelte-tutorial/02-starting-our-todo-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/02-starting-our-todo-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den Code zusammen mit uns im REPL zu erstellen, starten Sie unter

<https://svelte.dev/repl/b7b831ea3a354d3789cefbc31e2ca495?version=3.23.2>

## To-do-App-Funktionen

So wird unsere To-do-App aussehen, sobald sie fertig ist:

![typische To-do-App mit einem Titel 'Was muss erledigt werden?', einem Eingabefeld für weitere To-dos und einer Liste von To-dos mit Kontrollkästchen](01-todo-list-app.png)

Mit dieser Benutzeroberfläche kann unser Benutzer:

- Aufgaben durchsuchen
- Aufgaben als abgeschlossen/ausstehend markieren, ohne sie zu löschen
- Aufgaben entfernen
- Neue Aufgaben hinzufügen
- Aufgaben nach Status filtern: Alle Aufgaben, aktive Aufgaben oder abgeschlossene Aufgaben
- Aufgaben bearbeiten
- Alle Aufgaben als aktiv/abgeschlossen markieren
- Abgeschlossene Aufgaben entfernen

## Erstellen unserer ersten Komponente

Lassen Sie uns eine `Todos.svelte`-Komponente erstellen. Diese wird unsere Liste von To-dos enthalten.

1. Erstellen Sie einen neuen Ordner — `src/components`.

   > [!NOTE]
   > Sie können Ihre Komponenten überall im Ordner `src` ablegen, aber der `components`-Ordner ist eine anerkannte Konvention, die es Ihnen erleichtert, Ihre Komponenten zu finden.

2. Erstellen Sie eine Datei mit dem Namen `src/components/Todos.svelte` mit folgendem Inhalt:

   ```svelte
   <h1>Svelte To-Do-Liste</h1>
   ```

3. Ändern Sie das `title`-Element in `public/index.html`, sodass es den Text _Svelte To-Do-Liste_ enthält:

   ```svelte
   <title>Svelte To-Do-Liste</title>
   ```

4. Öffnen Sie `src/App.svelte` und ersetzen Sie dessen Inhalt durch das folgende:

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";
   </script>

   <Todos />
   ```

5. Im Entwicklungsmodus gibt Svelte eine Warnung in der Browser-Konsole aus, wenn eine nicht vorhandene Prop in der Komponente angegeben wird; in diesem Fall wird eine `name`-Prop angegeben, wenn wir die `App`-Komponente in `src/main.js` instanziieren, die nicht innerhalb von `App` verwendet wird. Die Konsole sollte Ihnen derzeit eine Nachricht in der Art von "\<App> wurde mit unknown prop 'name' erstellt" geben. Um dies zu beseitigen, entfernen Sie die `name`-Prop aus `src/main.js`; es sollte jetzt so aussehen:

   ```js
   import App from "./App.svelte";

   const app = new App({
     target: document.body,
   });

   export default app;
   ```

Wenn Sie nun Ihre Testserver-URL überprüfen, sehen Sie, dass unsere `Todos.svelte`-Komponente gerendert wird:

![grundlegendes Komponentrendering mit einem Titel, der 'Svelte To-do-Liste' sagt](02-todos-component-rendered.png)

## Hinzufügen von statischem Markup

Im Moment beginnen wir mit einer statischen Markup-Darstellung unserer App, damit Sie sehen, wie sie aussehen wird. Kopieren Sie den folgenden Inhalt in unsere `Todos.svelte`-Datei und ersetzen Sie den vorhandenen Inhalt:

```svelte
<!-- Todos.svelte -->
<div class="todoapp stack-large">
  <!-- NewTodo -->
  <form>
    <h2 class="label-wrapper">
      <label for="todo-0" class="label__lg"> Was muss erledigt werden? </label>
    </h2>
    <input type="text" id="todo-0" autocomplete="off" class="input input__lg" />
    <button type="submit" disabled="" class="btn btn__primary btn__lg">
      Hinzufügen
    </button>
  </form>

  <!-- Filter -->
  <div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" aria-pressed="true">
      <span class="visually-hidden">Anzeigen</span>
      <span>Alle</span>
      <span class="visually-hidden">Aufgaben</span>
    </button>
    <button class="btn toggle-btn" aria-pressed="false">
      <span class="visually-hidden">Anzeigen</span>
      <span>Aktive</span>
      <span class="visually-hidden">Aufgaben</span>
    </button>
    <button class="btn toggle-btn" aria-pressed="false">
      <span class="visually-hidden">Anzeigen</span>
      <span>Abgeschlossene</span>
      <span class="visually-hidden">Aufgaben</span>
    </button>
  </div>

  <!-- TodosStatus -->
  <h2 id="list-heading">2 von 3 Aufgaben erledigt</h2>

  <!-- Todos -->
  <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
    <!-- todo-1 (Bearbeitungsmodus) -->
    <li class="todo">
      <div class="stack-small">
        <form class="stack-small">
          <div class="form-group">
            <label for="todo-1" class="todo-label">
              Neuer Name für 'Erstelle eine Svelte-Starter-App'
            </label>
            <input
              type="text"
              id="todo-1"
              autocomplete="off"
              class="todo-text" />
          </div>
          <div class="btn-group">
            <button class="btn todo-cancel" type="button">
              Abbrechen
              <span class="visually-hidden">Umbenennung Erstelle eine Svelte-Starter-App</span>
            </button>
            <button class="btn btn__primary todo-edit" type="submit">
              Speichern
              <span class="visually-hidden">neuer Name für Erstelle eine Svelte-Starter-App</span>
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
            Erstellen Sie Ihre erste Komponente
          </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            Bearbeiten
            <span class="visually-hidden">Erstellen Sie Ihre erste Komponente</span>
          </button>
          <button type="button" class="btn btn__danger">
            Löschen
            <span class="visually-hidden">Erstellen Sie Ihre erste Komponente</span>
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
            Den Rest des Tutorials abschließen
          </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            Bearbeiten
            <span class="visually-hidden">Den Rest des Tutorials abschließen</span>
          </button>
          <button type="button" class="btn btn__danger">
            Löschen
            <span class="visually-hidden">Den Rest des Tutorials abschließen</span>
          </button>
        </div>
      </div>
    </li>
  </ul>

  <hr />

  <!-- MoreActions -->
  <div class="btn-group">
    <button type="button" class="btn btn__primary">Alle markieren</button>
    <button type="button" class="btn btn__primary">Abgeschlossene entfernen</button>
  </div>
</div>
```

Prüfen Sie das Render-Ergebnis erneut, und Sie werden etwas wie dies sehen:

![Eine To-do-App, aber ungestylt, mit einem Titel von 'Was muss erledigt werden', Eingabefeldern, Kontrollkästchen, etc.](03-unstyled-todo-app.png)

Das obenstehende HTML-Markup ist nicht sehr schön gestylt und auch funktional nutzlos. Dennoch werfen wir einen Blick auf das Markup und sehen, wie es sich auf unsere gewünschten Funktionen bezieht:

- Ein Label und eine Textbox zur Eingabe neuer Aufgaben
- Drei Buttons, um nach Aufgabenstatus zu filtern
- Ein Label, das die Gesamtzahl der Aufgaben und die erledigten Aufgaben anzeigt
- Eine ungeordnete Liste, die ein Listenelement für jede Aufgabe enthält
- Wenn die Aufgabe bearbeitet wird, hat das Listenelement ein Eingabefeld und zwei Buttons, um Änderungen abzubrechen oder zu speichern
- Wenn die Aufgabe nicht bearbeitet wird, gibt es ein Kontrollkästchen, um den Erledigungsstatus festzulegen, und zwei Buttons, um die Aufgabe zu bearbeiten oder zu löschen
- Schließlich gibt es zwei Buttons, um alle Aufgaben zu markieren/zu entmarkieren und um erledigte Aufgaben zu entfernen

In den folgenden Artikeln werden wir all diese Funktionen zum Laufen bringen und noch mehr.

### Zugänglichkeitsmerkmale der To-do-Liste

Sie bemerken vielleicht einige ungewöhnliche Attribute hier. Zum Beispiel:

```svelte
<button class="btn toggle-btn" aria-pressed="true">
  <span class="visually-hidden">Anzeigen</span>
  <span>Alle</span>
  <span class="visually-hidden">Aufgaben</span>
</button>
```

Hier teilt `aria-pressed` assistiven Technologien (wie Bildschirmlesegeräten) mit, dass der Button in einem von zwei Zuständen sein kann: `gedrückt` oder `nicht gedrückt`. Denken Sie an diese wie an Analogien für ein und aus. Das Setzen eines Wertes von `true` bedeutet, dass der Button standardmäßig gedrückt ist.

Die Klasse `visually-hidden` hat noch keine Wirkung, da wir noch keine CSS hinzugefügt haben. Sobald wir unsere Styles implementiert haben, wird jedes Element mit dieser Klasse für sehende Benutzer unsichtbar und für Benutzer von Bildschirmlesegeräten weiterhin verfügbar sein - dies liegt daran, dass diese Wörter für sehende Benutzer nicht benötigt werden; sie sollen zusätzliche Informationen darüber liefern, was der Button für Bildschirmlesegeräte-Benutzer tut, die nicht den zusätzlichen visuellen Kontext haben, um ihnen zu helfen.

Weiter unten finden Sie folgendes `<ul>`-Element:

```svelte
<ul
  role="list"
  class="todo-list stack-large"
  aria-labelledby="list-heading">
```

Das `role`-Attribut hilft assistiven Technologien zu erklären, welche Art von semantischem Wert ein Element hat - oder welchen Zweck es hat. Eine `<ul>` wird standardmäßig wie eine Liste behandelt, aber die Styles, die wir hinzufügen werden, werden diese Funktionalität unterbrechen. Diese Rolle wird die "Listen"-Bedeutung für das `<ul>`-Element wiederherstellen. Wenn Sie mehr darüber erfahren möchten, warum dies notwendig ist, können Sie Scott O'Hara's Artikel ["Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2019) lesen.

Das `aria-labelledby`-Attribut teilt unterstützenden Technologien mit, dass wir unser `<h2>` mit einer `id` von `list-heading` als die Beschriftung behandeln, die den Zweck der Liste darunter beschreibt. Diese Zuordnung gibt der Liste einen informativen Kontext, der Benutzern von Bildschirmlesegeräten helfen könnte, den Zweck besser zu verstehen.

Dies scheint ein guter Zeitpunkt zu sein, um darüber zu sprechen, wie Svelte mit Barrierefreiheit umgeht; lassen Sie uns das jetzt tun.

## Svelte-Zugänglichkeitsunterstützung

Svelte legt besonderen Wert auf Barrierefreiheit. Die Absicht ist, Entwickler zu ermutigen, "standardmäßig" barrierefreieren Code zu schreiben. Als Compiler kann Svelte unsere HTML-Templates statisch analysieren, um Barrierefreiheitswarnungen auszugeben, wenn Komponenten kompiliert werden.

Barrierefreiheit (abgekürzt a11y) ist nicht immer einfach richtig hinzubekommen, aber Svelte hilft, indem es Sie warnt, wenn Sie nicht barrierefreies Markup schreiben.

Zum Beispiel, wenn wir ein `<img>`-Element in unsere `todos.svelte`-Komponente ohne das entsprechende `alt`-Attribut hinzufügen:

```svelte
<h1>Svelte-To-do-Liste</h1>

<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />
```

Der Compiler wird die folgende Warnung ausgeben:

```bash
(!) Plugin svelte: A11y: <img>-Element sollte ein alt-Attribut haben
src/components/Todos.svelte
1: <h1>Svelte-To-do-Liste</h1>
2:
3: <img height="32" width="88" src="https://www.w3.org/WAI/wcag2A">
   ^
created public/build/bundle.js in 220ms

[2020-07-15 04:07:43] waiting for changes...
```

Unser Editor kann diese Warnung sogar anzeigen, bevor der Compiler aufgerufen wird:

![Ein Code-Editor-Fenster zeigt ein Image-Tag, mit einer Popup-Fehlermeldung, die besagt, dass das Element ein alt-Attribut haben sollte](04-svelte-accessibility-support.png)

Sie können Svelte anweisen, diese Warnung für den nächsten Markupblock mit einem [Kommentar](https://svelte.dev/docs/basic-markup#comments) zu ignorieren, der mit `svelte-ignore` beginnt, wie folgt:

```svelte
<!-- svelte-ignore a11y-missing-attribute -->
<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />
```

> [!NOTE]
> Mit VSCode können Sie diesen Ignore-Kommentar automatisch hinzufügen, indem Sie auf den _Quick fix…_-Link klicken oder <kbd>Strg</kbd> + <kbd>.</kbd> drücken.

Wenn Sie diese Warnung global deaktivieren möchten, können Sie diesen `onwarn`-Handler in Ihre `rollup.config.js`-Datei innerhalb der Konfiguration für das `Svelte`-Plugin hinzufügen, wie folgt:

```js
plugins: [
  svelte({
    dev: !production,
    css: (css) => {
      css.write("public/build/bundle.css");
    },
    // Warnungen werden normalerweise direkt an Rollup übergeben. Sie können sie
    // optional hier behandeln, zum Beispiel um Warnungen mit einem bestimmten Code zu unterdrücken
    onwarn: (warning, handler) => {
      // z.B. Mir sind Screenreader egal -> BITTE NICHT TUN!!!
      if (warning.code === "a11y-missing-attribute") {
        return;
      }

      // Lass Rollup alle anderen Warnungen normal handhaben
      handler(warning);
    },
  }),

  // …
];
```

Diese Warnungen sind bewusst im Compiler selbst und nicht als Plug-in implementiert, das Sie Ihrem Projekt hinzufügen können. Die Idee ist, standardmäßig auf a11y-Probleme in Ihrem Markup zu prüfen und Ihnen die Möglichkeit zu geben, bestimmte Warnungen abzuwählen.

> [!NOTE]
> Sie sollten diese Warnungen nur deaktivieren, wenn Sie triftige Gründe dafür haben, z.B. während Sie einen schnellen Prototyp erstellen. Es ist wichtig, ein guter Web-Inhaber zu sein und Ihre Seiten möglichst vielen Benutzern zugänglich zu machen.

Die von Svelte überprüften Zugänglichkeitsregeln stammen aus [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules), einem Plugin für ESLint, das statische Überprüfungen für viele Zugänglichkeitsregeln bei JSX-Elementen bietet. Svelte zielt darauf ab, alle davon in seinem Compiler zu implementieren, und die meisten davon wurden bereits auf Svelte portiert. Auf GitHub können Sie sehen, [welche Zugänglichkeitsprüfungen noch fehlen](https://github.com/sveltejs/svelte/issues/820). Sie können die Bedeutung jeder Regel überprüfen, indem Sie auf ihren Link klicken.

## Styling unseres Markups

Lassen Sie uns die To-do-Liste besser aussehen lassen. Ersetzen Sie den Inhalt der Datei `public/global.css` durch das folgende:

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

Mit unserem stilisierten Markup sieht alles jetzt besser aus:

![Unsere To-do-App, gestylt, mit einem Titel von 'Was muss erledigt werden', einem Eingabefeld für weitere To-dos und einer Liste von To-dos mit Checkboxen](05-styled-todo-app.png)

## Der Code bis jetzt

### Git

Um den Codezustand am Ende dieses Artikels zu sehen, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

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

Mit unserem Markup und Styling beginnt unsere To-do-App Form anzunehmen, und wir haben alles bereit, damit wir uns auf die Funktionen konzentrieren können, die wir umsetzen müssen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
