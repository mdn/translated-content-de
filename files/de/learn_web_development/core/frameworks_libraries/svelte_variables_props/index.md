---
title: "Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Svelte-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Nun, da wir unser Markup und unsere Styles bereitgestellt haben, können wir beginnen, die erforderlichen Funktionen für unsere Svelte-To-do-Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, sodass wir To-dos hinzufügen und löschen, sie als erledigt markieren und nach Status filtern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Grundlagen der
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandzeile</a
          >
          haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen und Üben einiger grundlegender Svelte-Konzepte, wie das Erstellen
        von Komponenten, das Übergeben von Daten mit Props, das Einbetten von JavaScript-Ausdrücken in
        unser Markup, das Ändern des Zustands der Komponenten und das Iterieren über Listen.
      </td>
    </tr>
  </tbody>
</table>

## Programmieren Sie mit uns mit

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen App-Zustand zu gelangen, führen Sie aus

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns unter Verwendung des REPL zu programmieren, starten Sie bei

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## Arbeiten mit To-dos

Unsere `Todos.svelte`-Komponente zeigt derzeit nur statisches Markup an; lassen Sie uns anfangen, es etwas dynamischer zu gestalten. Wir werden die Aufgabeninformationen aus dem Markup nehmen und in einem `todos`-Array speichern. Wir werden auch zwei Variablen erstellen, um die Gesamtzahl der Aufgaben und der erledigten Aufgaben zu verfolgen.

Der Zustand unserer Komponente wird durch diese drei Top-Level-Variablen dargestellt.

1. Erstellen Sie einen `<script>`-Abschnitt am Anfang von `src/components/Todos.svelte` und geben Sie ihm folgenden Inhalt:

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

   Lassen Sie uns nun etwas mit diesen Informationen machen.

2. Beginnen wir mit dem Anzeigen einer Statusmeldung. Finden Sie die `<h2>`-Überschrift mit einer `id` von `list-heading` und ersetzen Sie die fest codierte Anzahl aktiver und abgeschlossener Aufgaben durch dynamische Ausdrücke:

   ```svelte
   <h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
   ```

3. Gehen Sie zur App, und Sie sollten die Nachricht "2 out of 3 items completed" wie zuvor sehen, aber diesmal stammen die Informationen aus dem `todos`-Array.
4. Um es zu beweisen, gehen Sie zu diesem Array und versuchen Sie, einige der abgeschlossenen Eigenschaftswerte des To-do-Objekts zu ändern, und fügen Sie sogar ein neues To-do-Objekt hinzu. Beobachten Sie, wie die Zahlen in der Nachricht entsprechend aktualisiert werden.

## Dynamisches Generieren der To-dos aus den Daten

Im Moment sind unsere angezeigten To-do-Elemente alle statisch. Wir möchten über jedes Element in unserem `todos`-Array iterieren und das Markup für jede Aufgabe rendern, also lassen Sie uns das jetzt tun.

HTML hat keine Möglichkeit, Logik auszudrücken — wie Bedingungen und Schleifen. Svelte schon. In diesem Fall verwenden wir die [`{#each}`](https://svelte.dev/docs/logic-blocks#each)-Anweisung, um über das `todos`-Array zu iterieren. Der zweite Parameter, falls angegeben, enthält den Index des aktuellen Elements. Ebenso kann ein Schlüssel-Ausdruck angegeben werden, der jedes Element eindeutig identifiziert. Svelte verwendet ihn, um die Liste zu differenzieren, wenn sich die Daten ändern, anstatt Elemente am Ende hinzuzufügen oder zu entfernen, und es ist eine gute Praxis, immer einen anzugeben. Schließlich kann ein `:else`-Block angegeben werden, der gerendert wird, wenn die Liste leer ist.

Versuchen wir es.

1. Ersetzen Sie das vorhandene `<ul>`-Element durch die folgende vereinfachte Version, um einen Eindruck davon zu bekommen, wie es funktioniert:

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

2. Gehen Sie zurück zur App; Sie sehen etwas wie das:

   ![sehr einfache To-do-Listen-Ausgabe, erstellt mit einem each-Block](01-each-block.png)

3. Jetzt, da wir gesehen haben, dass dies funktioniert, lassen Sie uns ein vollständiges To-do-Element mit jeder Schleife der `{#each}`-Anweisung generieren und darin die Informationen aus dem `todos`-Array einbetten: `id`, `name` und `completed`. Ersetzen Sie Ihren vorhandenen `<ul>`-Block durch das folgende:

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

   Beachten Sie, wie wir geschweifte Klammern verwenden, um JavaScript-Ausdrücke in HTML-Attribute einzubetten, wie wir es bei den `checked`- und `id`-Attributen der Checkbox getan haben.

Wir haben unser statisches Markup in eine dynamische Vorlage umgewandelt, die bereit ist, die Aufgaben des Zustands unserer Komponente anzuzeigen. Großartig! Wir kommen dem Ziel näher.

## Arbeiten mit Props

Mit einer hartcodierten To-do-Liste ist unsere `Todos`-Komponente nicht sehr nützlich. Um unsere Komponente in einen vielseitigen To-do-Editor zu verwandeln, sollten wir dem übergeordneten Element dieser Komponente erlauben, die zu bearbeitende To-do-Liste zu übergeben. Dadurch könnten wir sie in einem Webservice oder lokalem Speicher speichern und später zum Aktualisieren abrufen. Lassen Sie uns also das Array in ein `prop` umwandeln.

1. Ersetzen Sie in `Todos.svelte` den vorhandenen `let todos = …`-Block durch `export let todos = []`.

   ```js
   export let todos = [];
   ```

   Dies mag sich anfangs etwas seltsam anfühlen. So funktioniert `export` normalerweise nicht in JavaScript-Modulen! Dies ist, wie Svelte JavaScript 'erweitert', indem es gültige Syntax nimmt und ihr einen neuen Zweck gibt. In diesem Fall verwendet Svelte das `export`-Keyword, um eine Variable-Deklaration als Eigenschaft oder Prop zu markieren, was bedeutet, dass sie für die Verbraucher der Komponente zugänglich wird.

   Sie können auch einen Standard-Initialwert für ein Prop angeben. Dieser wird verwendet, wenn der Verbraucher der Komponente das Prop bei der Instanziierung der Komponente nicht spezifiziert — oder wenn sein Anfangswert undefiniert ist.

   Mit `export let todos = []` sagen wir Svelte also, dass unsere `Todos.svelte`-Komponente ein `todos`-Attribut akzeptiert, das, wenn es weggelassen wird, auf ein leeres Array initialisiert wird.

2. Schauen Sie sich die App an, und Sie werden die Nachricht "Nichts zu tun hier!" sehen. Dies liegt daran, dass wir derzeit keinen Wert von `App.svelte` aus übergeben, also wird der Standardwert verwendet.
3. Lassen Sie uns nun unsere To-dos zu `App.svelte` verschieben und sie der `Todos.svelte`-Komponente als Prop übergeben. Aktualisieren Sie `src/App.svelte` wie folgt:

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

4. Wenn das Attribut und die Variable denselben Namen haben, erlaubt Svelte Ihnen, einfach die Variable als praktische Abkürzung anzugeben, sodass wir unsere letzte Zeile so umschreiben können. Versuchen Sie das jetzt.

   ```svelte
   <Todos {todos} />
   ```

An diesem Punkt sollten Ihre To-dos genauso gerendert werden wie zuvor, außer dass wir sie jetzt aus der `App.svelte`-Komponente übergeben.

## Um- und Entfernen von To-dos

Fügen wir etwas Funktionalität hinzu, um den Aufgabenstatus umzuschalten. Svelte hat die `on:eventname`-Anweisung, um auf DOM-Ereignisse zu hören. Lassen Sie uns einen Handler zum `on:click`-Ereignis des Checkbox-Inputs hinzufügen, um den Wert von abgeschlossen umzuschalten.

1. Aktualisieren Sie das `<input type="checkbox">`-Element innerhalb von `src/components/Todos.svelte` wie folgt:

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. Als nächstes fügen wir eine Funktion hinzu, um ein To-do aus unserem `todos`-Array zu entfernen. Fügen Sie am Ende des `<script>`-Abschnitts von `Todos.svelte` die `removeTodo()`-Funktion wie folgt hinzu:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. Wir werden es über die _Löschen_-Schaltfläche aufrufen. Aktualisieren Sie es mit einem `click`-Ereignis, wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Ein sehr häufiger Fehler bei Handlern in Svelte besteht darin, das Ergebnis der Ausführung einer Funktion als Handler zu übergeben, anstatt die Funktion zu übergeben. Zum Beispiel, wenn Sie `on:click={removeTodo(todo)}}` angeben, wird `removeTodo(todo)` ausgeführt und das Ergebnis als Handler übergeben, was nicht das ist, was wir im Sinn hatten.

   In diesem Fall müssen Sie `on:click={() => removeTodo(todo)}}` als Handler angeben. Wenn `removeTodo()` keine Parameter erhalten würde, könnten Sie `on:event={removeTodo}` verwenden, aber nicht `on:event={removeTodo()}}`. Dies ist keine besondere Svelte-Syntax — hier verwenden wir einfach reguläre JavaScript [arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Das ist wieder ein guter Fortschritt — an diesem Punkt können wir nun Aufgaben löschen. Wenn die _Löschen_-Schaltfläche eines To-do-Elements gedrückt wird, wird das relevante To-do aus dem `todos`-Array entfernt und die Benutzeroberfläche wird so aktualisiert, dass es nicht mehr angezeigt wird. Außerdem können wir jetzt die Kontrollkästchen markieren und der abgeschlossene Status der relevanten To-dos wird jetzt im `todos`-Array aktualisiert.

Allerdings wird die Überschrift "x von y Items erledigt" nicht aktualisiert. Lesen Sie weiter, um herauszufinden, warum dies passiert und wie wir es lösen können.

## Reaktive To-dos

Wie wir bereits gesehen haben, weiß Svelte, wie die Benutzeroberfläche aktualisiert wird, jedes Mal, wenn der Wert einer Top-Level-Variablen einer Komponente geändert wird. In unserer App wird der Wert des `todos`-Arrays jedes Mal direkt aktualisiert, wenn ein To-do umgeschaltet oder gelöscht wird, und so wird Svelte das DOM automatisch aktualisieren.

Dies gilt jedoch nicht für `totalTodos` und `completedTodos`. Im folgenden Code erhalten sie beim Instanziieren der Komponente und Ausführen des Skripts einen Wert zugewiesen, aber danach werden ihre Werte nicht geändert:

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

Wir könnten sie nach dem Umschalten und Entfernen von To-dos neu berechnen, aber es gibt einen einfacheren Weg, dies zu tun.

Wir können Svelte mitteilen, dass wir möchten, dass unsere `totalTodos`- und `completedTodos`-Variablen reaktiv sind, indem wir sie mit `$:` versehen. Svelte wird den Code generieren, um sie automatisch zu aktualisieren, wann immer die von ihnen abhängigen Daten geändert werden.

> [!NOTE]
> Svelte verwendet die `$:` [JavaScript-Label-Anweisungssyntax](/de/docs/Web/JavaScript/Reference/Statements/label), um reaktive Anweisungen zu markieren. Genau wie das `export`-Keyword, das zum Deklarieren von Props verwendet wird, mag dies ein wenig fremd erscheinen. Dies ist ein weiteres Beispiel dafür, wie Svelte sich gültige JavaScript-Syntax zunutze macht und ihr einen neuen Zweck gibt — in diesem Fall bedeutet dies "Führen Sie diesen Code erneut aus, wann immer sich eine der referenzierten Werte ändert". Sobald Sie sich daran gewöhnt haben, gibt es kein Zurück mehr.

Aktualisieren Sie Ihre `totalTodos`- und `completedTodos`-Variablendefinitionen innerhalb von `src/components/Todos.svelte`, um folgendermaßen auszusehen:

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

Wenn Sie Ihre App jetzt überprüfen, werden Sie sehen, dass die Zahlen der Überschrift aktualisiert werden, wenn To-dos abgeschlossen oder gelöscht werden. Schön!

Hinter den Kulissen wird der Svelte-Compiler unseren Code analysieren und einen Abhängigkeitsbaum erstellen, und dann den JavaScript-Code generieren, um jede reaktive Anweisung erneut zu evaluieren, wann immer eine ihrer Abhängigkeiten aktualisiert wird. Reaktivität in Svelte wird auf eine sehr leichte und performante Weise implementiert, ohne dass Listener, Setter, Getter oder andere komplexe Mechanismen verwendet werden.

## Neue To-dos hinzufügen

Nun zur nächsten Hauptaufgabe in diesem Artikel – lassen Sie uns Funktionalität hinzufügen, um neue To-dos hinzuzufügen.

1. Zuerst erstellen wir eine Variable, um den Text des neuen To-do zu halten. Fügen Sie diese Deklaration dem `<script>`-Abschnitt der Datei `Todos.svelte` hinzu:

   ```js
   let newTodoName = "";
   ```

2. Jetzt werden wir diesen Wert im `<input>` für das Hinzufügen neuer Aufgaben verwenden. Dazu müssen wir unsere Variable `newTodoName` an das `todo-0`-Input binden, sodass der `newTodoName`-Variablenwert mit der `value`-Property des Inputs synchron bleibt. Wir könnten so etwas tun:

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   Immer wenn sich der Wert der Variable `newTodoName` ändert, wird er im `value`-Attribut des Inputs reflektiert, und immer wenn eine Taste im Input gedrückt wird, aktualisieren wir den Inhalt der Variable `newTodoName`.

   Dies ist eine manuelle Implementierung der Zwei-Wege-Datenbindung für ein Eingabefeld. Aber wir brauchen das nicht zu tun — Svelte bietet eine einfachere Möglichkeit, jede Eigenschaft an eine Variable zu binden, indem die [`bind:property`](https://svelte.dev/docs/element-directives#bind-property) Direktive verwendet wird:

   ```svelte
   <input bind:value={newTodoName} />
   ```

   Also, lassen Sie uns das implementieren. Aktualisieren Sie das `todo-0`-Input wie folgt:

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. Ein einfacher Weg, um zu testen, ob dies funktioniert, besteht darin, eine reaktive Anweisung hinzuzufügen, um die Inhalte von `newTodoName` zu protokollieren. Fügen Sie dieses Snippet am Ende des `<script>`-Abschnitts hinzu:

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > [!NOTE]
   > Wie Sie vielleicht bemerkt haben, sind reaktive Anweisungen nicht auf Variablendeklarationen beschränkt. Sie können _jede_ JavaScript-Anweisung nach dem `$:`-Zeichen hinzufügen.

4. Versuchen Sie jetzt, zu `localhost:5042` zurückzukehren, <kbd>Strg</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> zu drücken, um die Browser-Konsole zu öffnen, und etwas in das Eingabefeld einzugeben. Sie sollten Ihre Eingaben protokolliert sehen. An diesem Punkt können Sie das reaktive `console.log()` entfernen, wenn Sie möchten.
5. Als nächstes werden wir eine Funktion erstellen, um das neue To-do hinzuzufügen – `addTodo()` – die ein neues `todo`-Objekt in das `todos`-Array drückt. Fügen Sie dies am Ende Ihres `<script>`-Blocks innerhalb von `src/components/Todos.svelte` hinzu:

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > [!NOTE]
   > Vorläufig weisen wir jedem To-do die gleiche `id` zu, aber keine Sorge, das werden wir bald beheben.

6. Nun möchten wir unser HTML aktualisieren, damit `addTodo()` aufgerufen wird, wann immer das Formular gesendet wird. Aktualisieren Sie das Öffnen-Tag des NewTodo-Formulars wie folgt:

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   Die [`on:eventname`](https://svelte.dev/docs/element-directives#on-eventname)-Anweisung unterstützt das Hinzufügen von Modifizierern zum DOM-Ereignis mit dem `|`-Zeichen. In diesem Fall teilt der `preventDefault`-Modifizierer Svelte mit, den Code zum Aufrufen von `event.preventDefault()` vor dem Ausführen des Handlers zu generieren. Erkunden Sie den vorherigen Link, um zu sehen, welche anderen Modifizierer verfügbar sind.

7. Wenn Sie an dieser Stelle versuchen, neue To-dos hinzuzufügen, werden die neuen To-dos dem To-dos-Array hinzugefügt, aber unsere Benutzeroberfläche wird nicht aktualisiert. Denken Sie daran, dass in Svelte [Reaktivität mit Zuweisungen ausgelöst wird](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive). Das bedeutet, dass die `addTodo()`-Funktion ausgeführt wird, das Element dem `todos`-Array hinzugefügt wird, aber Svelte nicht erkennt, dass die `push`-Methode das Array modifiziert hat, sodass es die Aufgaben im `<ul>` nicht aktualisiert.

   Einfach `todos = todos` zum Ende der `addTodo()`-Funktion hinzuzufügen, würde das Problem lösen, aber es scheint seltsam, dies am Ende der Funktion hinzuzufügen. Stattdessen nehmen wir die `push()`-Methode heraus und verwenden [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um dasselbe Ergebnis zu erzielen: Wir weisen dem `todos`-Array einen Wert zu, der dem `todos`-Array plus dem neuen Objekt entspricht.

   > [!NOTE]
   > `Array` hat mehrere änderbare Operationen: [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse), und [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Diese zu verwenden, führt oft zu Nebeneffekten und schwer nachvollziehbaren Fehlern. Durch die Verwendung der Spread-Syntax anstelle von `push()` vermeiden wir es, das Array zu mutieren, was als Best Practice gilt.

   Aktualisieren Sie Ihre `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Jedem To-do eine eindeutige ID zuweisen

Wenn Sie jetzt versuchen, Ihrer App neue To-dos hinzuzufügen, können Sie ein neues To-do hinzufügen und es in der Benutzeroberfläche sehen — einmal. Wenn Sie es ein zweites Mal versuchen, funktioniert es nicht, und Sie erhalten eine Konsolennachricht mit dem Hinweis "Fehler: Keine doppelten Schlüssel in einem gekennzeichneten each erlaubt". Wir benötigen eindeutige IDs für unsere To-dos.

1. Lassen Sie uns eine `newTodoId`-Variable deklarieren, die aus der Anzahl der To-dos plus 1 berechnet wird, und machen Sie sie reaktiv. Fügen Sie das folgende Snippet in den `<script>`-Abschnitt ein:

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

   > [!NOTE]
   > Wie Sie sehen können, sind reaktive Anweisungen nicht auf Einzeiler beschränkt. Das Folgende würde auch funktionieren, ist aber etwas weniger lesbar: `$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1`

2. Wie erreicht Svelte das? Der Compiler parst die gesamte reaktive Anweisung und erkennt, dass sie von der Variablen `totalTodos` und dem `todos`-Array abhängt. Wann immer eine von ihnen geändert wird, wird dieser Code erneut ausgewertet und `newTodoId` entsprechend aktualisiert.

   Lassen Sie uns dies in unserer `addTodo()`-Funktion verwenden. Aktualisieren Sie diese wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Filtern von To-dos nach Status

Schließlich für diesen Artikel, lassen Sie uns die Fähigkeit implementieren, unsere To-dos nach Status zu filtern. Wir werden eine Variable erstellen, um den aktuellen Filter zu halten, und eine Hilfsfunktion, die die gefilterten To-dos zurückgibt.

1. Fügen Sie am Ende unseres `<script>`-Abschnitts folgendes hinzu:

   ```js
   let filter = "all";
   const filterTodos = (filter, todos) =>
     filter === "active"
       ? todos.filter((t) => !t.completed)
       : filter === "completed"
         ? todos.filter((t) => t.completed)
         : todos;
   ```

   Wir verwenden die `filter`-Variable, um den aktiven Filter zu steuern: _all_, _active_, oder _completed_. Das Zuweisen eines dieser Werte zu der Filtervariable wird den Filter aktivieren und die Liste der To-dos aktualisieren. Lassen Sie uns sehen, wie wir das erreichen.

   Die `filterTodos()`-Funktion erhält den aktuellen Filter und die Liste der To-dos und gibt ein neues Array von To-dos zurück, das entsprechend gefiltert ist.

2. Lassen Sie uns das Markup der Filter-Schaltflächen aktualisieren, um es dynamisch zu machen und den aktuellen Filter zu aktualisieren, wenn der Benutzer eine der Filter-Schaltflächen drückt. Aktualisieren Sie es so:

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

   In diesem Markup passieren ein paar Dinge.

   Wir werden den aktuellen Filter anzeigen, indem wir die `btn__primary`-Klasse auf die aktive Filter-Schaltfläche anwenden. Um Stilklassen bedingt auf ein Element anzuwenden, verwenden wir die `class:name={value}`-Anweisung. Wenn der Wert-Ausdruck wahren Wert liefert, wird der Klassenname angewendet. Sie können viele dieser Direktiven mit unterschiedlichen Bedingungen demselben Element hinzufügen. Wenn wir also `class:btn__primary={filter === 'all'}` angeben, wird Svelte die Klasse `btn__primary` anwenden, wenn der Filter `all` entspricht.

   > [!NOTE]
   > Svelte bietet eine Abkürzung, die es uns erlaubt, `<div class:active={active}>` zu `<div class:active>` zu verkürzen, wenn die Klasse zum Variablennamen passt.

   Etwas Ähnliches passiert mit `aria-pressed={filter === 'all'}`: wenn der zwischen den geschweiften Klammern übergebene JavaScript-Ausdruck einen wahren Wert ergibt, wird das `aria-pressed`-Attribut zur Schaltfläche hinzugefügt.

   Wann immer wir auf eine Schaltfläche klicken, aktualisieren wir die Filtervariable, indem wir `on:click={() => filter = 'all'}` ausgeben. Lesen Sie weiter, um herauszufinden, wie Svelte die Reaktivität übernimmt.

3. Jetzt müssen wir nur die Hilfsfunktion in der `{#each}`-Schleife verwenden; aktualisieren Sie es so:

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   Nach der Analyse unseres Codes erkennt Svelte, dass unsere `filterTodos()`-Funktion von den Variablen `filter` und `todos` abhängt. Und wie bei jedem anderen dynamischen Ausdruck, der in das Markup eingebettet ist, wird das DOM jedes Mal aktualisiert, wenn sich eine dieser Abhängigkeiten ändert. Also jedes Mal, wenn `filter` oder `todos` sich ändert, wird die `filterTodos()`-Funktion neu ausgewertet und die Elemente innerhalb der Schleife werden aktualisiert.

> [!NOTE]
> Reaktivität kann manchmal kompliziert sein. Svelte erkennt `filter` als eine Abhängigkeit, weil wir darauf im Ausdruck `filterTodos(filter, todo)` verweisen. `filter` ist eine Top-Level-Variable, also könnten wir versucht sein, sie aus den Parametern der Hilfsfunktion zu entfernen und sie einfach so aufzurufen: `filterTodos(todo)`. Das würde funktionieren, aber jetzt hat Svelte keine Möglichkeit zu erkennen, dass `{#each filterTodos(todos) }` von `filter` abhängt, und die Liste der gefilterten To-dos wird nicht aktualisiert, wenn sich der Filter ändert. Denken Sie immer daran, dass Svelte unseren Code analysiert, um Abhängigkeiten herauszufinden, also ist es besser, explizit zu sein und sich nicht auf die Sichtbarkeit von Top-Level-Variablen zu verlassen. Außerdem ist es eine gute Praxis, unseren Code klar und explizit darüber zu machen, welche Informationen er verwendet.

## Der Code bis jetzt

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Zustand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Zusammenfassung

Das war's für jetzt! In diesem Artikel haben wir bereits den Großteil der gewünschten Funktionalität implementiert. Unsere App kann To-dos anzeigen, hinzufügen und löschen, ihren abgeschlossenen Status umschalten, anzeigen, wie viele von ihnen abgeschlossen sind, und Filter anwenden.

Um das Ganze zusammenzufassen, haben wir die folgenden Themen behandelt:

- Erstellen und Verwenden von Komponenten
- Umwandlung von statischem Markup in eine lebendige Vorlage
- Einbetten von JavaScript-Ausdrücken in unser Markup
- Iterieren über Listen mit der `{#each}`-Direktive
- Informationsaustausch zwischen Komponenten mit Props
- Abhören von DOM-Ereignissen
- Deklarieren von reaktiven Anweisungen
- Grundlegendes Debugging mit `console.log()` und reaktiven Anweisungen
- Binden von HTML-Attributen mit der `bind:property`-Direktive
- Auslösen von Reaktivität mit Zuweisungen
- Verwenden von reaktiven Ausdrücken zum Filtern von Daten
- Explizites Definieren unserer reaktiven Abhängigkeiten

Im nächsten Artikel werden wir weitere Funktionalitäten hinzufügen, die es Benutzern ermöglichen, To-dos zu bearbeiten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}
