---
title: "Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun, da wir unser Markup und unsere Styles fertig haben, können wir beginnen, die erforderlichen Funktionen für unsere Svelte-To-Do-Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, sodass wir To-Dos hinzufügen und löschen, sie als abgeschlossen markieren und nach Status filtern können.

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
            >Terminal/Kommandozeile</a
          > besitzen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen und Implementieren von grundlegenden Svelte-Konzepten wie Erstellen von Komponenten, Übergeben von Daten mit Props, Rendern von JavaScript-Ausdrücken in unser Markup, Verändern des Zustands von Komponenten und Iterieren über Listen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammen mit uns programmieren

### Git

Klonen Sie das GitHub-Repository (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie folgendes aus:

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu programmieren, starten Sie unter

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## Arbeiten mit To-Dos

Unsere `Todos.svelte`-Komponente zeigt derzeit nur statisches Markup an; beginnen wir damit, es etwas dynamischer zu gestalten. Wir werden die Aufgabeninformationen aus dem Markup nehmen und sie in einem `todos`-Array speichern. Wir erstellen auch zwei Variablen, um die Gesamtanzahl der Aufgaben und die erledigten Aufgaben zu verfolgen.

Der Zustand unserer Komponente wird durch diese drei Top-Level-Variablen repräsentiert.

1. Erstellen Sie einen `<script>`-Abschnitt oben in `src/components/Todos.svelte` und geben Sie ihm etwas Inhalt, wie folgt:

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

   Nun machen wir etwas mit diesen Informationen.

2. Beginnen wir mit der Anzeige einer Statusmeldung. Finden Sie die `<h2>`-Überschrift mit einer `id` von `list-heading` und ersetzen Sie die fest codierte Anzahl der aktiven und abgeschlossenen Aufgaben durch dynamische Ausdrücke:

   ```svelte
   <h2 id="list-heading">{completedTodos} von {totalTodos} Aufgaben abgeschlossen</h2>
   ```

3. Gehen Sie zur App, und Sie sollten die Meldung "2 von 3 Aufgaben abgeschlossen" wie zuvor sehen, aber diesmal kommen die Informationen aus dem `todos`-Array.
4. Um dies zu beweisen, gehen Sie zu diesem Array und versuchen Sie, einige der `completed`-Eigenschaftswerte der To-Do-Objekte zu ändern, und fügen Sie sogar ein neues To-Do-Objekt hinzu. Beachten Sie, wie sich die Zahlen in der Meldung entsprechend aktualisieren.

## Dynamisches Generieren der To-Dos aus den Daten

Im Moment sind unsere angezeigten To-Do-Elemente alle statisch. Wir möchten über jedes Element in unserem `todos`-Array iterieren und das Markup für jede Aufgabe rendern, also tun wir das jetzt.

HTML hat keine Möglichkeit, Logik wie Bedingungen und Schleifen auszudrücken. Svelte schon. In diesem Fall verwenden wir die [`{#each}`](https://svelte.dev/docs/logic-blocks#each)-Anweisung, um über das `todos`-Array zu iterieren. Der zweite Parameter, wenn angegeben, enthält den Index des aktuellen Elements. Außerdem kann ein Schlüssel-Ausdruck bereitgestellt werden, der jedes Element eindeutig identifiziert. Svelte verwendet ihn, um die Liste zu differenzieren, wenn sich die Daten ändern, anstatt Elemente am Ende hinzuzufügen oder zu entfernen, und es ist eine gute Praxis, immer einen anzugeben. Schließlich kann ein `:else`-Block bereitgestellt werden, der gerendert wird, wenn die Liste leer ist.

Probieren wir es aus.

1. Ersetzen Sie das vorhandene `<ul>`-Element durch die folgende vereinfachte Version, um ein Gefühl dafür zu bekommen, wie es funktioniert:

   ```svelte
   <ul>
   {#each todos as todo, index (todo.id)}
     <li>
       <input type="checkbox" checked={todo.completed}/> {index}. {todo.name} (id: {todo.id})
     </li>
   {:else}
     Es gibt nichts zu tun!
   {/each}
   </ul>
   ```

2. Gehen Sie zurück zur App; Sie werden etwas Ähnliches wie das hier sehen:

   ![sehr einfache To-Do-Liste, die mit einem `each`-Block erstellt wurde](01-each-block.png)

3. Da wir nun gesehen haben, dass dies funktioniert, generieren wir ein vollständiges To-Do-Element mit jeder Schleife der `{#each}`-Anweisung und binden darin die Informationen aus dem `todos`-Array ein: `id`, `name` und `completed`. Ersetzen Sie Ihren bestehenden `<ul>`-Block mit dem folgenden:

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
             Bearbeiten <span class="visually-hidden">{todo.name}</span>
           </button>
           <button type="button" class="btn btn__danger">
             Löschen <span class="visually-hidden">{todo.name}</span>
           </button>
         </div>
       </div>
     </li>
     {:else}
     <li>Es gibt nichts zu tun!</li>
     {/each}
   </ul>
   ```

   Beachten Sie, wie wir geschweifte Klammern verwenden, um JavaScript-Ausdrücke in HTML-Attribute einzubetten, so wie wir es mit den `checked`- und `id`-Attributen des Kontrollkästchens getan haben.

Wir haben unser statisches Markup in eine dynamische Vorlage verwandelt, die bereit ist, die Aufgaben aus dem Zustand unserer Komponente anzuzeigen. Großartig! Wir sind auf dem richtigen Weg.

## Arbeiten mit Props

Mit einer fest codierten Liste von To-Dos ist unsere `Todos`-Komponente nicht sehr nützlich. Um unsere Komponente in einen allgemeinen To-Do-Editor zu verwandeln, sollten wir es dem Elternteil dieser Komponente ermöglichen, die zu bearbeitende To-Do-Liste zu übergeben. Auf diese Weise könnten wir sie in einem Webservice oder lokalen Speicher speichern und später zur Bearbeitung abrufen. Also machen wir das Array zu einem `prop`.

1. Ersetzen Sie in `Todos.svelte` den bestehenden Block `let todos = …` durch `export let todos = []`.

   ```js
   export let todos = [];
   ```

   Dies mag sich anfangs ein wenig komisch anfühlen. So funktioniert `export` normalerweise nicht in JavaScript-Modulen! So 'erweitert' Svelte JavaScript, indem es gültige Syntax übernimmt und ihr einen neuen Zweck gibt. In diesem Fall verwendet Svelte das Schlüsselwort `export`, um eine Variablendeklaration als Eigenschaft oder Prop zu kennzeichnen, was bedeutet, dass sie für Verbraucher der Komponente zugänglich wird.

   Sie können auch einen Standardanfangswert für ein Prop angeben. Dieser wird verwendet, wenn der Verbraucher der Komponente das Prop bei der Instanziierung der Komponente nicht angibt – oder wenn sein Anfangswert undefiniert ist.

   Mit `export let todos = []` sagen wir Svelte, dass unsere `Todos.svelte`-Komponente ein `todos`-Attribut akzeptiert, das beim Weglassen auf ein leeres Array initialisiert wird.

2. Schauen Sie sich die App an, und Sie werden die Nachricht "Es gibt nichts zu tun!" sehen. Das liegt daran, dass wir ihm derzeit keinen Wert von `App.svelte` übergeben, sodass es den Standardwert verwendet.
3. Jetzt verschieben wir unsere To-Dos zu `App.svelte` und übergeben sie der `Todos.svelte`-Komponente als Prop. Aktualisieren Sie `src/App.svelte` wie folgt:

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

4. Wenn das Attribut und die Variable denselben Namen haben, ermöglicht Svelte Ihnen, einfach die Variable als praktische Abkürzung anzugeben, sodass wir unsere letzte Zeile so umschreiben können. Versuchen Sie es jetzt.

   ```svelte
   <Todos {todos} />
   ```

An diesem Punkt sollten Ihre To-Dos genauso angezeigt werden wie zuvor, außer dass wir sie jetzt von der `App.svelte`-Komponente übergeben.

## Schalten und Entfernen von To-Dos

Lassen Sie uns einige Funktionen hinzufügen, um den Aufgabenstatus zu ändern. Svelte hat die `on:eventname`-Anweisung, um DOM-Ereignisse zu hören. Lassen Sie uns einen Handler für das `on:click`-Ereignis des Kontrollkästchen-Eingabefeldes hinzufügen, um den `completed`-Wert zu ändern.

1. Aktualisieren Sie das `<input type="checkbox">`-Element in `src/components/Todos.svelte` wie folgt:

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. Als Nächstes fügen wir eine Funktion hinzu, um ein To-Do aus unserem `todos`-Array zu entfernen. Fügen Sie am Ende des `<script>`-Abschnitts von `Todos.svelte` die `removeTodo()`-Funktion hinzu, wie folgt:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. Wir rufen sie über die _Delete_-Schaltfläche auf. Aktualisieren Sie es mit einem `click`-Event, wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Löschen <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Ein sehr häufiger Fehler bei Handlern in Svelte ist, das Ergebnis der Ausführung einer Funktion als Handler zu übergeben, anstatt die Funktion zu übergeben. Wenn Sie beispielsweise `on:click={removeTodo(todo)}` angeben, wird `removeTodo(todo)` ausgeführt und das Ergebnis als Handler übergeben, was nicht beabsichtigt war.

   In diesem Fall müssen Sie `on:click={() => removeTodo(todo)}` als Handler angeben. Wenn `removeTodo()` keine Parameter erhält, könnten Sie `on:event={removeTodo}` verwenden, aber nicht `on:event={removeTodo()}`. Dies ist keine spezielle Svelte-Syntax – hier verwenden wir einfach reguläre JavaScript-[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Dies ist erneut ein guter Fortschritt – zu diesem Zeitpunkt können wir jetzt Aufgaben löschen. Wenn die _Delete_-Schaltfläche eines To-Do-Elements gedrückt wird, wird das betreffende To-Do aus dem `todos`-Array entfernt, und die Benutzeroberfläche aktualisiert sich, um es nicht mehr anzuzeigen. Darüber hinaus können wir jetzt die Kontrollkästchen markieren, und der Abschlussstatus der relevanten To-Dos wird jetzt im `todos`-Array aktualisiert.

Allerdings wird die Überschrift "x von y Aufgaben abgeschlossen" nicht aktualisiert. Lesen Sie weiter, um herauszufinden, warum dies passiert und wie wir es lösen können.

## Reaktive To-Dos

Wie wir bereits gesehen haben, weiß Svelte jedes Mal, wenn der Wert einer Top-Level-Variablen einer Komponente geändert wird, wie die Benutzeroberfläche aktualisiert werden muss. In unserer App wird der `todos`-Array-Wert jedes Mal aktualisiert, wenn ein To-Do umgeschaltet oder gelöscht wird, und Svelte aktualisiert das DOM automatisch.

Dies gilt jedoch nicht für `totalTodos` und `completedTodos`. Im folgenden Code wird ihnen beim Instanziieren der Komponente und Ausführen des Skripts ein Wert zugewiesen, aber danach werden ihre Werte nicht geändert:

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

Wir könnten sie nach dem Umschalten und Entfernen von To-Dos neu berechnen, aber es gibt einen einfacheren Weg, dies zu tun.

Wir können Svelte mitteilen, dass wir möchten, dass unsere Variablen `totalTodos` und `completedTodos` reaktiv sind, indem wir sie mit `$:` vorangestellen. Svelte generiert den Code, um sie automatisch zu aktualisieren, wann immer die von ihnen abhängigen Daten geändert werden.

> [!NOTE]
> Svelte verwendet die `$:` [JavaScript-Label-Statement-Syntax](/de/docs/Web/JavaScript/Reference/Statements/label), um reaktive Anweisungen zu kennzeichnen. Genau wie das Schlüsselwort `export` zum Deklarieren von Props, kann dies etwas fremd wirken. Dies ist ein weiteres Beispiel dafür, wie Svelte gültige JavaScript-Syntax übernimmt und ihr einen neuen Zweck gibt – in diesem Fall bedeutet es "Führen Sie diesen Code erneut aus, wenn sich einer der referenzierten Werte ändert". Sobald Sie sich daran gewöhnt haben, gibt es kein Zurück mehr.

Aktualisieren Sie Ihre Variablendefinitionen `totalTodos` und `completedTodos` in `src/components/Todos.svelte` folgendermaßen:

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

Wenn Sie Ihre App jetzt überprüfen, werden Sie feststellen, dass die Zahlen der Überschrift aktualisiert werden, wenn To-Dos abgeschlossen oder gelöscht werden. Schön!

Hinter den Kulissen analysiert der Svelte-Compiler unseren Code, um einen Abhängigkeitsbaum zu erstellen, und generiert dann den JavaScript-Code, um jede reaktive Anweisung neu zu bewerten, wann immer eine ihrer Abhängigkeiten aktualisiert wird. Die Reaktivität in Svelte wird auf eine sehr leichte und performante Weise implementiert, ohne Zuhörer, Setter, Getter oder andere komplexe Mechanismen zu verwenden.

## Neue To-Dos hinzufügen

Nun zur nächsten großen Aufgabe in diesem Artikel – lassen Sie uns Funktionen zum Hinzufügen neuer To-Dos einfügen.

1. Zuerst erstellen wir eine Variable, die den Text des neuen To-Dos speichert. Fügen Sie diese Deklaration zum `<script>`-Abschnitt der Datei `Todos.svelte` hinzu:

   ```js
   let newTodoName = "";
   ```

2. Nun verwenden wir diesen Wert im `<input>`-Feld zum Hinzufügen neuer Aufgaben. Dazu müssen wir unsere Variable `newTodoName` an das Eingabefeld `todo-0` binden, sodass der Wert der Variable `newTodoName` synchron mit der `value`-Eigenschaft des Eingabefeldes bleibt. Wir könnten etwas in der Art tun:

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   Wann immer sich der Wert der Variablen `newTodoName` ändert, wird er im `value`-Attribut des Eingabefeldes widergespiegelt, und wann immer eine Taste im Eingabefeld gedrückt wird, aktualisieren wir den Inhalt der Variablen `newTodoName`.

   Dies ist eine manuelle Implementierung der Zwei-Wege-Datenbindung für ein Eingabefeld. Aber wir müssen das nicht tun – Svelte bietet einen einfacheren Weg, um jede Eigenschaft an eine Variable zu binden, indem die [bind:property](https://svelte.dev/docs/element-directives#bind-property) Anweisung verwendet wird:

   ```svelte
   <input bind:value={newTodoName} />
   ```

   Also, lassen Sie uns dies umsetzen. Aktualisieren Sie das Eingabefeld `todo-0` wie folgt:

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. Eine einfache Möglichkeit zu testen, ob dies funktioniert, ist das Hinzufügen einer reaktiven Anweisung, um den Inhalt von `newTodoName` zu protokollieren. Fügen Sie diese Codezeile am Ende des `<script>`-Abschnitts hinzu:

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > [!NOTE]
   > Wie Sie bemerkt haben, sind reaktive Anweisungen nicht auf Variablendeklarationen beschränkt. Sie können _jede_ JavaScript-Anweisung nach dem `$:`-Zeichen setzen.

4. Probieren Sie nun, zu `localhost:5042` zurückzugehen, drücken Sie <kbd>Strg</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>, um die Konsolenausgabe zu öffnen und tippen Sie etwas in das Eingabefeld. Sie sollten Ihre Eingaben protokolliert sehen. An diesem Punkt können Sie die reaktive `console.log()`-Ausgabe löschen, wenn Sie möchten.
5. Als Nächstes erstellen wir eine Funktion zum Hinzufügen des neuen To-Dos – `addTodo()` – die ein neues `todo`-Objekt dem `todos`-Array hinzufügen wird. Fügen Sie diese am Ende Ihres `<script>`-Blockes in `src/components/Todos.svelte` hinzu:

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > [!NOTE]
   > Bei diesem Schritt weisen wir jedem To-Do nur denselben `id` zu, aber keine Sorge, wir beheben das bald.

6. Jetzt möchten wir unser HTML so aktualisieren, dass wir `addTodo()` jedes Mal aufrufen, wenn das Formular abgeschickt wird. Aktualisieren Sie das Eröffnungs-Tag des NewTodo-Formulars wie folgt:

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   Die [`on:eventname`](https://svelte.dev/docs/element-directives#on-eventname) Anweisung unterstützt das Hinzufügen von Modifikatoren zu dem DOM-Ereignis mit dem `|`-Zeichen. In diesem Fall weist der `preventDefault`-Modifikator Svelte an, den Code zu generieren, um `event.preventDefault()` vor der Ausführung des Handlers aufzurufen. Erkunden Sie den vorherigen Link, um zu sehen, welche anderen Modifikatoren verfügbar sind.

7. Wenn Sie jetzt versuchen, neue To-Dos hinzuzufügen, werden die neuen To-Dos dem To-Dos-Array hinzugefügt, aber unsere Benutzeroberfläche wird nicht aktualisiert. Denken Sie daran, dass in Svelte [die Reaktivität durch Zuweisungen ausgelöst wird](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive). Das bedeutet, dass die `addTodo()`-Funktion ausgeführt wird, das Element dem `todos`-Array hinzugefügt wird, aber Svelte nicht erkennt, dass die `push`-Methode das Array geändert hat, sodass die Aufgaben-`<ul>` nicht aktualisiert wird.

   Das Hinzufügen von `todos = todos` am Ende der `addTodo()`-Funktion würde das Problem lösen, aber es scheint merkwürdig, dies am Ende der Funktion aufnehmen zu müssen. Stattdessen nehmen wir die `push()`-Methode heraus und verwenden die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um dasselbe Ergebnis zu erzielen: Wir weisen dem `todos`-Array einen Wert zu, der gleich dem `todos`-Array plus dem neuen Objekt ist.

   > **Hinweis:** `Array` hat mehrere veränderbare Operationen: [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) und [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Ihre Verwendung führt häufig zu Nebenwirkungen und Fehlern, die schwer nachzuvollziehen sind. Indem wir die Spread-Syntax anstelle der `push()`-Methode verwenden, vermeiden wir die Veränderung des Arrays, was als gute Praxis gilt.

   Aktualisieren Sie Ihre `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Jedem To-Do eine eindeutige ID geben

Wenn Sie jetzt versuchen, neue To-Dos in Ihrer App hinzuzufügen, können Sie ein neues To-Do hinzufügen und es wird im UI angezeigt – ein Mal. Wenn Sie es ein zweites Mal versuchen, funktioniert es nicht, und Sie erhalten eine Konsolennachricht mit dem Hinweis "Error: Cannot have duplicate keys in a keyed each". Wir benötigen eindeutige IDs für unsere To-Dos.

1. Lassen Sie uns eine `newTodoId`-Variable deklarieren, die aus der Anzahl der To-Dos plus 1 berechnet wird, und machen Sie sie reaktiv. Fügen Sie den folgenden Abschnitt in den `<script>`-Abschnitt ein:

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
   > Wie Sie sehen können, sind reaktive Anweisungen nicht auf eine Zeile beschränkt. Das Folgende würde ebenfalls funktionieren, ist jedoch etwas weniger lesbar: `$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1`

2. Wie erreicht Svelte dies? Der Compiler analysiert die gesamte reaktive Anweisung und erkennt, dass sie von der Variablen `totalTodos` und dem Array `todos` abhängig ist. Wann immer eine dieser Variablen geändert wird, wird dieser Code neu bewertet und `newTodoId` entsprechend aktualisiert.

   Verwenden wir dies in unserer `addTodo()`-Funktion. Aktualisieren Sie sie wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## To-Dos nach Status filtern

Schließlich in diesem Artikel, lassen Sie uns die Möglichkeit implementieren, unsere To-Dos nach Status zu filtern. Wir erstellen eine Variable, um den aktuellen Filter zu speichern und eine Hilfsfunktion, die die gefilterten To-Dos zurückgibt.

1. Am Ende unseres `<script>`-Abschnitts fügen Sie das Folgende hinzu:

   ```js
   let filter = "all";
   const filterTodos = (filter, todos) =>
     filter === "active"
       ? todos.filter((t) => !t.completed)
       : filter === "completed"
         ? todos.filter((t) => t.completed)
         : todos;
   ```

   Wir verwenden die `filter`-Variable, um den aktiven Filter zu steuern: _all_, _active_ oder _completed_. Allein durch das Zuweisen eines dieser Werte zur Filtervariable wird der Filter aktiviert und die Liste der To-Dos aktualisiert. Sehen wir uns an, wie wir das erreichen können.

   Die `filterTodos()`-Funktion erhält den aktuellen Filter und die Liste der To-Dos und gibt ein neues Array der entsprechend gefilterten To-Dos zurück.

2. Aktualisieren wir das Filter-Schaltflächen-Markup, um es dynamisch zu gestalten und den aktuellen Filter zu aktualisieren, wenn der Benutzer eine der Filter-Schaltflächen drückt. Aktualisieren Sie es so:

   ```svelte
   <div class="filters btn-group stack-exception">
     <button class="btn toggle-btn" class:btn__primary={filter === 'all'} aria-pressed={filter === 'all'} on:click={() => filter = 'all'} >
       <span class="visually-hidden">Anzeigen</span>
       <span>Alle</span>
       <span class="visually-hidden">Aufgaben</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === 'active'} aria-pressed={filter === 'active'} on:click={() => filter = 'active'} >
       <span class="visually-hidden">Anzeigen</span>
       <span>Aktive</span>
       <span class="visually-hidden">Aufgaben</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === 'completed'} aria-pressed={filter === 'completed'} on:click={() => filter = 'completed'} >
       <span class="visually-hidden">Anzeigen</span>
       <span>Abgeschlossene</span>
       <span class="visually-hidden">Aufgaben</span>
     </button>
   </div>
   ```

   In diesem Markup passieren einige Dinge.

   Wir zeigen den aktuellen Filter an, indem wir der aktiven Filter-Schaltfläche die `btn__primary`-Klasse zuweisen. Um Stilklassen bedingt auf ein Element anzuwenden, verwenden wir die `class:name={value}`-Anweisung. Wenn der Wert-Ausdruck als wahr ausgewertet wird, wird der Klassenname angewendet. Sie können viele dieser Anweisungen mit unterschiedlichen Bedingungen demselben Element hinzufügen. Wenn wir beispielsweise `class:btn__primary={filter === 'all'}` ausführen, wird Svelte die `btn__primary`-Klasse anwenden, wenn der Filter `all` entspricht.

   > [!NOTE]
   > Svelte bietet eine Abkürzung, mit der wir `<div class:active={active}>` zu `<div class:active>` verkürzen können, wenn die Klasse mit dem Variablennamen übereinstimmt.

   Etwas Ähnliches passiert mit `aria-pressed={filter === 'all'}`: Wenn der zwischen den geschweiften Klammernden übergebene JavaScript-Ausdruck als wahr ausgewertet wird, wird dem Button das `aria-pressed`-Attribut hinzugefügt.

   Wann immer wir auf einen Button klicken, aktualisieren wir die Filter-Variable, indem wir `on:click={() => filter = 'all'}` ausführen. Lesen Sie weiter, um herauszufinden, wie Sveltets Reaktivität den Rest übernimmt.

3. Jetzt müssen wir die Hilfsfunktion nur noch in der `{#each}`-Schleife verwenden; aktualisieren Sie sie wie folgt:

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   Nach der Analyse unseres Codes erkennt Svelte, dass unsere `filterTodos()`-Funktion von den Variablen `filter` und `todos` abhängt. Und genau wie bei jedem anderen dynamischen Ausdruck, der im Markup eingebettet ist, wird das DOM jedes Mal aktualisiert, wenn sich eine dieser Abhängigkeiten ändert. Wann immer also `filter` oder `todos` geändert wird, wird die `filterTodos()`-Funktion erneut ausgewertet und die Elemente innerhalb der Schleife werden aktualisiert.

> [!NOTE]
> Reaktivität kann manchmal knifflig sein. Svelte erkennt `filter` als Abhängigkeit, weil wir darauf in dem Ausdruck `filterTodos(filter, todo)` verweisen. `filter` ist eine Top-Level-Variable, daher könnten wir versucht sein, sie aus den Hilfsfunktionsparametern zu entfernen und sie einfach so aufzurufen: `filterTodos(todo)`. Dies würde funktionieren, aber Sveltets hat keine Möglichkeit herauszufinden, dass `{#each filterTodos(todos) }` von `filter` abhängt, und die Liste der gefilterten To-Dos wird nicht aktualisiert, wenn sich der Filter ändert. Denken Sie immer daran, dass Sveltets unseren Code analysiert, um Abhängigkeiten zu finden, und es daher besser ist, explizit zu sein und sich nicht auf die Sichtbarkeit von Top-Level-Variablen zu verlassen. Außerdem ist es eine gute Praxis, unseren Code klar zu gestalten und explizit zu machen, welche Informationen verwendet werden.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie den Inhalts des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Zusammenfassung

Das ist fürs Erste alles! In diesem Artikel haben wir bereits den größten Teil der gewünschten Funktionalität implementiert. Unsere App kann To-Dos anzeigen, hinzufügen und löschen, ihren status umschalten, wie viele von ihnen abgeschlossen sind, anzeigen und Filter anwenden.

Zusammenfassend haben wir die folgenden Themen behandelt:

- Erstellen und Verwenden von Komponenten
- Umwandlung von statischem Markup in eine lebende Vorlage
- Einbetten von JavaScript-Ausdrücken in unser Markup
- Iteration über Listen mit der `{#each}`-Anweisung
- Informationen zwischen Komponenten mit Props übergeben
- Hören auf DOM-Ereignisse
- Deklarieren von reaktiven Anweisungen
- Einfaches Debugging mit `console.log()` und reaktiven Anweisungen
- Binden von HTML-Eigenschaften mit der `bind:property`-Anweisung
- Auslösen der Reaktivität mit Zuweisungen
- Verwenden von reaktiven Ausdrücken zum Filtern von Daten
- Explizite Definition unserer reaktiven Abhängigkeiten

Im nächsten Artikel werden wir weitere Funktionen hinzufügen, die es Benutzern ermöglichen, To-Dos zu bearbeiten.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
