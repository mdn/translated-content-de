---
title: "Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}

Da wir nun unser Markup und unsere Stile bereit haben, können wir mit der Entwicklung der erforderlichen Funktionen für unsere Svelte-To-Do-Listen-App beginnen. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, sodass wir To-Dos hinzufügen und löschen, als erledigt markieren und nach Status filtern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen und praktizieren Sie einige grundlegende Svelte-Konzepte, wie z.B. das Erstellen von Komponenten, das Übergeben von Daten mithilfe von Props, das Rendern von JavaScript-Ausdrücken in unser Markup, das Ändern des Zustands der Komponenten und das Iterieren über Listen.
      </td>
    </tr>
  </tbody>
</table>

## Code zusammen mit uns

### Git

Klonen Sie das GitHub-Repo (falls noch nicht geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen App-Status zu gelangen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zusammen zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## Arbeiten mit To-Dos

Unsere `Todos.svelte`-Komponente zeigt derzeit nur statisches Markup an; beginnen wir, sie etwas dynamischer zu gestalten. Wir werden die Aufgabeninformationen aus dem Markup entnehmen und in einem `todos`-Array speichern. Außerdem erstellen wir zwei Variablen, um die Gesamtanzahl der Aufgaben und die erledigten Aufgaben zu verfolgen.

Der Zustand unserer Komponente wird durch diese drei Top-Level-Variablen repräsentiert.

1. Erstellen Sie einen `<script>` Abschnitt am Anfang von `src/components/Todos.svelte` und geben Sie ihm folgenden Inhalt:

   ```svelte
   <script>
     let todos = [
       { id: 1, name: "Create a Svelte starter app", completed: true },
       { id: 2, name: "Create your first component", completed: true },
       { id: 3, name: "Complete the rest of the tutorial", completed: false }
     ];
     let totalTodos = todos.length;
     let completedTodos = todos.filter((todo) => todo.completed).length;
   </script>
   ```

   Nun wollen wir etwas mit diesen Informationen machen.

2. Beginnen wir mit der Anzeige einer Statusnachricht. Suchen Sie die `<h2>` Überschrift mit einer `id` von `list-heading` und ersetzen Sie die hartkodierte Anzahl der aktiven und erledigten Aufgaben durch dynamische Ausdrücke:

   ```svelte
   <h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
   ```

3. Gehen Sie zur App, und Sie sollten die Nachricht "2 von 3 Aufgaben erledigt" wie zuvor sehen, aber diesmal kommen die Informationen aus dem `todos`-Array.
4. Um dies zu beweisen, gehen Sie zu diesem Array und versuchen Sie, einige der abgeschlossenen Eigenschaftswerte der To-Do-Objekte zu ändern und sogar ein neues To-Do-Objekt hinzuzufügen. Beobachten Sie, wie die Zahlen in der Nachricht entsprechend aktualisiert werden.

## Dynamische Generierung der To-Dos aus den Daten

Derzeit sind unsere angezeigten To-Do-Elemente alle statisch. Wir möchten über jedes Element in unserem `todos`-Array iterieren und das Markup für jede Aufgabe rendern, also machen wir das jetzt.

HTML hat keine Möglichkeit, Logik — wie Bedingungen und Schleifen — auszudrücken. Svelte schon. In diesem Fall verwenden wir die [`{#each}`](https://svelte.dev/docs/logic-blocks#each) Direktive, um über das `todos`-Array zu iterieren. Der zweite Parameter, falls angegeben, enthält den Index des aktuellen Elements. Außerdem kann ein Schlüssel-Ausdruck angegeben werden, der jedes Element eindeutig identifiziert. Svelte wird es verwenden, um die Liste zu differenzieren, wenn sich Daten ändern, anstatt Elemente am Ende hinzuzufügen oder zu entfernen, und es ist eine gute Praxis, immer einen anzugeben. Schließlich kann ein `:else` Block bereitgestellt werden, der gerendert wird, wenn die Liste leer ist.

Lassen Sie es uns ausprobieren.

1. Ersetzen Sie das bestehende `<ul>` Element durch die folgende vereinfachte Version, um eine Vorstellung davon zu bekommen, wie es funktioniert:

   ```svelte
   <ul>
   {#each todos as todo, index (todo.id)}
     <li>
       <input type="checkbox" checked={todo.completed}/> {index}. {todo.name} (id: {todo.id})
     </li>
   {:else}
     Nothing to do here!
   {/each}
   </ul>
   ```

2. Kehren Sie zur App zurück; Sie werden etwas in dieser Art sehen:

   ![sehr einfache To-Do-Liste Ausgabe, die mit einem Each-Block erstellt wurde](01-each-block.png)

3. Da wir gesehen haben, dass dies funktioniert, lassen Sie uns ein vollständiges To-Do-Element mit jeder Schleife der `{#each}` Direktive generieren und die Informationen aus dem `todos`-Array einbetten: `id`, `name` und `completed`. Ersetzen Sie Ihren bestehenden `<ul>` Block durch den folgenden:

   ```svelte
   <!-- To-dos -->
   <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each todos as todo (todo.id)}
     <li class="todo">
       <div class="stack-small">
         <div class="c-cb">
           <input
             type="checkbox"
             id="todo-{todo.id}"
             checked={todo.completed} />
           <label for="todo-{todo.id}" class="todo-label"> {todo.name} </label>
         </div>
         <div class="btn-group">
           <button type="button" class="btn">
             Edit <span class="visually-hidden">{todo.name}</span>
           </button>
           <button type="button" class="btn btn__danger">
             Delete <span class="visually-hidden">{todo.name}</span>
           </button>
         </div>
       </div>
     </li>
     {:else}
     <li>Nothing to do here!</li>
     {/each}
   </ul>
   ```

   Beachten Sie, wie wir geschweifte Klammern verwenden, um JavaScript-Ausdrücke in HTML-Attributen einzubetten, so wie wir es bei den `checked` und `id` Attributen des Kontrollkästchens gemacht haben.

Wir haben unser statisches Markup in ein dynamisches Template verwandelt, das bereit ist, die Aufgaben aus dem Zustand unserer Komponente anzuzeigen. Großartig! Wir kommen voran.

## Arbeiten mit Props

Mit einer hartkodierten Liste von To-Dos ist unsere `Todos` Komponente nicht sehr nützlich. Um unsere Komponente zu einem allgemeinen To-Do-Editor zu machen, sollten wir dem übergeordneten Element dieser Komponente erlauben, die Liste der zu bearbeitenden To-Dos zu übergeben. Dies würde es uns ermöglichen, sie in einem Webdienst oder lokalem Speicher zu speichern und später zur Aktualisierung abzurufen. Also lassen Sie uns das Array in ein `prop` verwandeln.

1. Ersetzen Sie in `Todos.svelte` den bestehenden `let todos = …` Block durch `export let todos = []`.

   ```js
   export let todos = [];
   ```

   Dies mag sich zunächst etwas seltsam anfühlen. So funktioniert `export` normalerweise nicht in JavaScript-Modulen! So 'erweitert' Svelte JavaScript, indem es gültige Syntax nimmt und ihr einen neuen Zweck gibt. In diesem Fall verwendet Svelte das `export` Schlüsselwort, um eine Variablendeklaration als Eigenschaft oder Prop zu markieren, was bedeutet, dass es für Verbraucher der Komponente zugänglich wird.

   Sie können auch einen Standardanfangswert für ein Prop angeben. Dieser wird verwendet, wenn der Verbraucher der Komponente das Prop nicht auf der Komponente angibt — oder wenn sein Anfangswert undefiniert ist —, wenn die Komponente instanziiert wird.

   Mit `export let todos = []` sagen wir Svelte, dass unsere `Todos.svelte`-Komponente ein `todos` Attribut akzeptieren wird, das, wenn weggelassen, auf ein leeres Array initialisiert wird.

2. Schauen Sie sich die App an, und Sie werden die Nachricht "Nichts zu tun hier!" sehen. Das liegt daran, dass wir derzeit keinen Wert aus `App.svelte` übergeben, daher wird der Standardwert verwendet.
3. Lassen Sie uns nun unsere To-Dos zu `App.svelte` verschieben und sie als Prop an die `Todos.svelte`-Komponente übergeben. Aktualisieren Sie `src/App.svelte` wie folgt:

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";

     let todos = [
       { id: 1, name: "Create a Svelte starter app", completed: true },
       { id: 2, name: "Create your first component", completed: true },
       { id: 3, name: "Complete the rest of the tutorial", completed: false }
     ];
   </script>

   <Todos todos={todos} />
   ```

4. Wenn das Attribut und die Variable denselben Namen haben, erlaubt Ihnen Svelte, einfach die Variable als praktische Abkürzung anzugeben, sodass wir unsere letzte Zeile wie folgt umschreiben können. Probieren Sie dies jetzt aus.

   ```svelte
   <Todos {todos} />
   ```

An diesem Punkt sollten Ihre To-Dos genau wie zuvor gerendert werden, außer dass wir sie jetzt von der `App.svelte` Komponente übergeben.

## Umschalten und Entfernen von To-Dos

Fügen wir etwas Funktionalität hinzu, um den Aufgabenstatus umzuschalten. Svelte hat die `on:eventname` Direktive, um auf DOM-Ereignisse zu hören. Fügen wir einen Handler zum `on:click` Event des Kontrollkästchen-Eingabeelements hinzu, um den abgeschlossenen Wert umzuschalten.

1. Aktualisieren Sie das `<input type="checkbox">` Element in `src/components/Todos.svelte` wie folgt:

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. Als nächstes fügen wir eine Funktion hinzu, um ein To-Do aus unserem `todos` Array zu entfernen. Am unteren Ende des `<script>` Bereichs von `Todos.svelte` fügen Sie die `removeTodo()` Funktion wie folgt hinzu:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. Wir werden es über die _Löschen_ Schaltfläche aufrufen. Aktualisieren Sie es mit einem `click` Ereignis wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Ein sehr häufiger Fehler bei Handlers in Svelte ist, dass das Ergebnis der Ausführung einer Funktion als Handler übergeben wird, anstatt die Funktion selbst zu übergeben. Wenn Sie beispielsweise `on:click={removeTodo(todo)}}` angeben, wird `removeTodo(todo)` ausgeführt und das Ergebnis als Handler übergeben, was nicht das war, was wir beabsichtigt hatten.

   In diesem Fall müssen Sie `on:click={() => removeTodo(todo)}}` als Handler angeben. Wenn `removeTodo()` keine Parameter erhalten hätte, könnten Sie `on:event={removeTodo}` verwenden, aber nicht `on:event={removeTodo()}}`. Dies ist keine spezielle Svelte-Syntax — hier verwenden wir nur reguläre JavaScript [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Wiederum ist dies ein guter Fortschritt — an diesem Punkt können wir jetzt Aufgaben löschen. Wenn die _Löschen_ Schaltfläche eines To-Do-Elements gedrückt wird, wird das entsprechende To-Do aus dem `todos` Array entfernt, und die Benutzeroberfläche wird aktualisiert, um es nicht mehr anzuzeigen. Darüber hinaus können wir jetzt die Kontrollkästchen aktivieren, und der abgeschlossene Status der entsprechenden To-Dos wird nun im `todos` Array aktualisiert.

Allerdings wird die Überschrift "x out of y items completed" nicht aktualisiert. Lesen Sie weiter, um herauszufinden, warum dies geschieht und wie wir es lösen können.

## Reaktive To-Dos

Wie wir bereits gesehen haben, weiß Svelte jedes Mal, wenn der Wert einer Top-Level-Variablen einer Komponente geändert wird, wie die Benutzeroberfläche zu aktualisieren ist. In unserer App wird der Wert des `todos` Arrays direkt jedes Mal aktualisiert, wenn ein To-Do umgeschaltet oder gelöscht wird, und Svelte wird das DOM automatisch aktualisieren.

Dasselbe gilt jedoch nicht für `totalTodos` und `completedTodos`. Im folgenden Code werden sie beim Instanziieren der Komponente und beim Ausführen des Skripts ein Mal zugewiesen, danach jedoch nicht mehr geändert:

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

Wir könnten sie nach dem Umschalten und Entfernen von To-Dos neu berechnen, aber es gibt einen einfacheren Weg.

Wir können Svelte mitteilen, dass wir unsere `totalTodos` und `completedTodos` Variablen reaktiv machen möchten, indem wir ihnen `$:` voranstellen. Svelte wird den Code generieren, um sie automatisch zu aktualisieren, wann immer sich Daten, auf die sie angewiesen sind, ändern.

> [!HINWEIS]
> Svelte verwendet die `$:` [JavaScript Label Statement Syntax](/de/docs/Web/JavaScript/Reference/Statements/label), um reaktive Anweisungen zu kennzeichnen. Genau wie das `export` Schlüsselwort, das verwendet wird, um Props zu deklarieren, mag dies ein wenig fremd aussehen. Dies ist ein weiteres Beispiel dafür, wie Svelte gültige JavaScript-Syntax nutzt und ihr einen neuen Zweck verleiht — in diesem Fall bedeutet es "Führen Sie diesen Code erneut aus, wann immer sich einer der referenzierten Werte ändert". Sobald Sie sich daran gewöhnt haben, gibt es kein Zurück mehr.

Aktualisieren Sie Ihre `totalTodos` und `completedTodos` Variablendefinitionen in `src/components/Todos.svelte` wie folgt:

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

Wenn Sie Ihre App jetzt überprüfen, werden die Zahlen der Überschrift aktualisiert, wenn To-Dos erledigt oder gelöscht werden. Schön!

Hinter den Kulissen wird der Svelte-Compiler unseren Code analysieren und einen Abhängigkeitsbaum erstellen, und dann den JavaScript-Code generieren, um jede reaktive Anweisung erneut auszuführen, wann immer eine ihrer Abhängigkeiten aktualisiert wird. Reaktivität in Svelte wird auf eine sehr leichte und leistungsstarke Weise implementiert, ohne Listener, Setter, Getter oder andere komplexe Mechanismen zu verwenden.

## Hinzufügen neuer To-Dos

Kommen wir nun zur nächsten großen Aufgabe für diesen Artikel — fügen wir eine Funktionalität zum Hinzufügen neuer To-Dos hinzu.

1. Zuerst erstellen wir eine Variable, um den Text des neuen To-Dos zu speichern. Fügen Sie diese Deklaration dem `<script>` Abschnitt der `Todos.svelte` Datei hinzu:

   ```js
   let newTodoName = "";
   ```

2. Nun werden wir diesen Wert in den `<input>` für das Hinzufügen neuer Aufgaben verwenden. Dazu müssen wir unsere `newTodoName` Variable an die `todo-0` Eingabe binden, damit der Wert der `newTodoName` Variable mit der `value` Eigenschaft des Eingabeelements synchron bleibt. Wir könnten etwas Folgendes tun:

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   Wann immer sich der Wert der `newTodoName` Variable ändert, wird er im `value` Attribut des Eingabeelements reflektiert, und wann immer eine Taste im Eingabefeld gedrückt wird, werden wir den Inhalt der `newTodoName` Variable aktualisieren.

   Dies ist eine manuelle Implementierung der Zwei-Wege-Datenbindung für ein Eingabefeld. Aber das müssen wir nicht tun — Svelte bietet einen einfacheren Weg, um jede Eigenschaft an eine Variable zu binden, indem die [`bind:property`](https://svelte.dev/docs/element-directives#bind-property) Direktive verwendet wird:

   ```svelte
   <input bind:value={newTodoName} />
   ```

   Also lassen Sie uns dies umsetzen. Aktualisieren Sie die `todo-0` Eingabe wie folgt:

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. Ein einfacher Weg zu überprüfen, ob dies funktioniert, ist eine reaktive Anweisung hinzuzufügen, um den Inhalt von `newTodoName` zu protokollieren. Fügen Sie diesen Code-Schnipsel am Ende des `<script>` Abschnitts hinzu:

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > [!HINWEIS]
   > Wie Sie vielleicht bemerkt haben, sind reaktive Anweisungen nicht auf Variablendeklarationen beschränkt. Sie können _jede_ JavaScript-Anweisung nach dem `$:` Zeichen setzen.

4. Versuchen Sie nun zu `localhost:5042` zurückzukehren, <kbd>Strg</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> zu drücken, um Ihre Browserkonsole zu öffnen, und etwas in das Eingabefeld einzugeben. Ihre Eingaben sollten protokolliert werden. An diesem Punkt können Sie das reaktive `console.log()` löschen, wenn Sie möchten.
5. Als nächstes werden wir eine Funktion zum Hinzufügen des neuen To-Dos erstellen — `addTodo()` — die ein neues `todo` Objekt in das `todos` Array pushen wird. Fügen Sie dies am Ende Ihres `<script>` Blocks in `src/components/Todos.svelte` ein:

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > [!HINWEIS]
   > Im Moment weisen wir nur jeder To-Do dieselbe `id` zu, aber keine Sorge, wir werden das bald beheben.

6. Jetzt wollen wir unser HTML so aktualisieren, dass wir `addTodo()` bei jeder Formularübermittlung aufrufen. Aktualisieren Sie den Opening-Tag des NewTodo Forms wie folgt:

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   Die [`on:eventname`](https://svelte.dev/docs/element-directives#on-eventname) Direktive unterstützt das Hinzufügen von Modifizierern zum DOM-Ereignis mit dem `|` Zeichen. In diesem Fall sagt der `preventDefault` Modifizierer Svelte, dass der generierte Code `event.preventDefault()` ausführt, bevor der Handler ausgeführt wird. Erkunden Sie den vorherigen Link, um zu sehen, welche anderen Modifizierer verfügbar sind.

7. Wenn Sie zu diesem Zeitpunkt neue To-Dos hinzufügen möchten, werden die neuen To-Dos zum todos-Array hinzugefügt, aber unsere Benutzeroberfläche wird nicht aktualisiert. Denken Sie daran, dass in Svelte [Reaktivität durch Zuweisungen ausgelöst wird](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive). Das bedeutet, dass die `addTodo()` Funktion ausgeführt wird, das Element zum `todos` Array hinzugefügt wird, aber Svelte nicht erkennt, dass die `push` Methode das Array modifiziert hat, sodass es die Aufgaben `<ul>` nicht aktualisiert.

   Ein einfaches Hinzufügen von `todos = todos` am Ende der `addTodo()` Funktion würde das Problem lösen, aber es scheint seltsam, das am Ende der Funktion einfügen zu müssen. Stattdessen nehmen wir die `push()` Methode heraus und verwenden die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um dasselbe Ergebnis zu erzielen: Wir ordnen dem `todos` Array einen Wert zu, der dem `todos` Array plus dem neuen Objekt entspricht.

   > **Hinweis:** `Array` hat mehrere mutable Operationen: [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) und [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Deren Verwendung führt häufig zu Nebeneffekten und schwer nachvollziehbaren Fehlern. Durch die Verwendung der Spread-Syntax anstelle von `push()` vermeiden wir die Veränderung des Arrays, was als gute Praxis gilt.

   Aktualisieren Sie Ihre `addTodo()` Funktion wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Jedem To-Do eine eindeutige ID geben

Wenn Sie jetzt versuchen, neue To-Dos in Ihrer App hinzuzufügen, können Sie zunächst ein neues To-Do hinzufügen und es in der Benutzeroberfläche erscheinen lassen — einmal. Wenn Sie es ein zweites Mal versuchen, funktioniert es nicht und Sie erhalten eine Konsolenmeldung mit "Error: Cannot have duplicate keys in a keyed each". Wir benötigen eindeutige IDs für unsere To-Dos.

1. Lassen Sie uns eine `newTodoId` Variable deklarieren, die aus der Anzahl der To-Dos plus 1 berechnet wird, und sie reaktiv machen. Fügen Sie das folgende Snippet zum `<script>` Abschnitt hinzu:

   ```js
   let newTodoId;
   $: {
     if (totalTodos === 0) {
       newTodoId = 1;
     } else {
       newTodoId = Math.max(...todos.map((t) => t.id)) + 1;
     }
   }
   ```

   > [!HINWEIS]
   > Wie Sie sehen können, sind reaktive Anweisungen nicht auf Einzeiler beschränkt. Das Folgende würde ebenfalls funktionieren, ist aber etwas weniger leserlich: `$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1`

2. Wie erreicht Svelte das? Der Compiler analysiert die gesamte reaktive Anweisung und erkennt, dass sie von der Variable `totalTodos` und dem `todos` Array abhängt. Deshalb wird jedes Mal, wenn sich eine von beiden ändert, dieser Code neu evaluiert und `newTodoId` entsprechend aktualisiert.

   Lassen Sie uns dies in unserer `addTodo()` Funktion verwenden. Aktualisieren Sie sie wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## To-Dos nach Status filtern

Zum Schluss in diesem Artikel implementieren wir die Möglichkeit, unsere To-Dos nach Status zu filtern. Wir erstellen eine Variable, um den aktuellen Filter zu speichern, und eine Hilfsfunktion, die die gefilterten To-Dos zurückgibt.

1. Am unteren Ende unseres `<script>` Abschnitts fügen Sie Folgendes hinzu:

   ```js
   let filter = "all";
   const filterTodos = (filter, todos) =>
     filter === "active"
       ? todos.filter((t) => !t.completed)
       : filter === "completed"
         ? todos.filter((t) => t.completed)
         : todos;
   ```

   Wir verwenden die `filter` Variable, um den aktiven Filter zu steuern: _all_, _active_ oder _completed_. Das Zuweisen eines dieser Werte an die `filter` Variable aktiviert den Filter und aktualisiert die Liste der To-Dos. Lassen Sie uns sehen, wie wir das erreichen können.

   Die Funktion `filterTodos()` erhält den aktuellen Filter und die Liste der To-Dos und gibt ein neues Array der To-Dos zurück, die entsprechend gefiltert sind.

2. Lassen Sie uns das Filter-Button-Markup aktualisieren, um es dynamisch zu gestalten und den aktuellen Filter zu aktualisieren, wenn der Benutzer einen der Filter-Buttons drückt. Aktualisieren Sie es wie folgt:

   ```svelte
   <div class="filters btn-group stack-exception">
     <button class="btn toggle-btn" class:btn__primary={filter === 'all'} aria-pressed={filter === 'all'} on:click={() => filter = 'all'} >
       <span class="visually-hidden">Show</span>
       <span>All</span>
       <span class="visually-hidden">tasks</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === 'active'} aria-pressed={filter === 'active'} on:click={() => filter = 'active'} >
       <span class="visually-hidden">Show</span>
       <span>Active</span>
       <span class="visually-hidden">tasks</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === 'completed'} aria-pressed={filter === 'completed'} on:click={() => filter = 'completed'} >
       <span class="visually-hidden">Show</span>
       <span>Completed</span>
       <span class="visually-hidden">tasks</span>
     </button>
   </div>
   ```

   Hier passieren ein paar Dinge in diesem Markup.

   Wir zeigen den aktuellen Filter an, indem wir die `btn__primary` Klasse auf den aktiven Filter-Button anwenden. Um Style-Klassen bedingt auf ein Element anzuwenden, verwenden wir die `class:name={value}` Direktive. Wenn der Wert-Ausdruck als wahr ausgewertet wird, wird der Klassenname angewendet. Sie können viele dieser Direktiven mit unterschiedlichen Bedingungen auf dasselbe Element anwenden. Also, wenn wir `class:btn__primary={filter === 'all'}` ausgeben, wird Svelte die `btn__primary` Klasse anwenden, wenn der Filter `all` entspricht.

   > [!HINWEIS]
   > Svelte bietet eine Abkürzung, die es uns erlaubt, `<div class:active={active}>` zu `<div class:active>` zu verkürzen, wenn die Klasse mit dem Variablennamen übereinstimmt.

   Etwas Ähnliches passiert mit `aria-pressed={filter === 'all'}`: Wenn der JavaScript-Ausdruck zwischen den geschweiften Klammern als wahr ausgewertet wird, wird das `aria-pressed` Attribut zum Button hinzugefügt.

   Jedes Mal, wenn wir auf einen Button klicken, aktualisieren wir die `filter` Variable, indem wir `on:click={() => filter = 'all'}` ausgeben. Lesen Sie weiter, um zu erfahren, wie Svelte Reaktivität den Rest übernimmt.

3. Jetzt müssen wir nur noch die Hilfsfunktion in der `{#each}` Schleife verwenden; aktualisieren Sie sie so:

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   Nach der Analyse unseres Codes erkennt Svelte, dass unsere `filterTodos()` Funktion von den Variablen `filter` und `todos abhängt`. Und genau wie bei jedem anderen dynamischen Ausdruck, der in das Markup eingebettet ist, wird immer dann, wenn eine dieser Abhängigkeiten geändert wird, das DOM entsprechend aktualisiert. Also jedes Mal, wenn `filter` oder `todos` sich ändert, wird die `filterTodos()` Funktion neu bewertet, und die Elemente in der Schleife werden aktualisiert.

> [!HINWEIS]
> Reaktivität kann manchmal knifflig sein. Svelte erkennt `filter` als eine Abhängigkeit, weil wir es im Ausdruck `filterTodos(filter, todo)` referenzieren. `filter` ist eine Top-Level-Variable, also könnten wir versucht sein, sie von den Parameters der Hilfsfunktion zu entfernen und einfach so aufzurufen: `filterTodos(todo)`. Das würde funktionieren, aber jetzt hat Svelte keine Möglichkeit festzustellen, dass `{#each filterTodos(todos) }` von `filter` abhängt, und die Liste der gefilterten To-Dos wird nicht aktualisiert, wenn sich der Filter ändert. Denken Sie immer daran, dass Svelte unseren Code analysiert, um Abhängigkeiten zu identifizieren; deshalb ist es besser, darüber explizit zu sein und sich nicht auf die Sichtbarkeit von Top-Level-Variablen zu verlassen. Außerdem ist es eine gute Praxis, unseren Code klar und explizit darüber zu machen, welche Informationen er verwendet.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Zusammenfassung

Das wäre es für jetzt! In diesem Artikel haben wir bereits den Großteil der gewünschten Funktionalität implementiert. Unsere App kann To-Dos anzeigen, hinzufügen und löschen, ihren abgeschlossenen Status umschalten, anzeigen, wie viele von ihnen erledigt sind, und Filterapplikationen anwenden.

Zur Wiederholung haben wir folgende Themen behandelt:

- Erstellen und Verwenden von Komponenten
- Umwandeln von statischem Markup in ein lebendiges Template
- Einbetten von JavaScript-Ausdrücken in unser Markup
- Iteration über Listen mit der `{#each}` Direktive
- Übergeben von Informationen zwischen Komponenten mit Props
- Zuhören auf DOM-Ereignisse
- Deklarieren von reaktiven Anweisungen
- Grundlegendes Debugging mit `console.log()` und reaktiven Anweisungen
- Binden von HTML-Eigenschaften mit der `bind:property` Direktive
- Auslösen von Reaktivität mit Zuweisungen
- Verwenden reaktiver Ausdrücke zum Filtern von Daten
- Explizite Definition unserer reaktiven Abhängigkeiten

Im nächsten Artikel werden wir weitere Funktionen hinzufügen, die es Benutzern ermöglichen, To-Dos zu bearbeiten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}
