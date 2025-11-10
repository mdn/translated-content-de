---
title: "Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}

Nun, da wir unser Markup und unsere Styles fertig haben, können wir damit beginnen, die erforderlichen Funktionen für unsere Svelte-To-do-Listen-App zu entwickeln. In diesem Artikel verwenden wir Variablen und Props, um unsere App dynamisch zu machen, sodass wir To-dos hinzufügen und löschen, sie als erledigt markieren und nach Status filtern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          über Kenntnisse der Arbeit mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen und Anwenden einiger grundlegender Svelte-Konzepte, wie das Erstellen
        von Komponenten, das Übergeben von Daten mithilfe von Props, das Rendern von JavaScript-Ausdrücken in
        unser Markup, das Ändern des Zustands der Komponenten und das Iterieren über Listen.
      </td>
    </tr>
  </tbody>
</table>

## Coden Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls noch nicht geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Status der App zu erreichen, führen Sie Folgendes aus:

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um zusammen mit uns im REPL zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## Arbeiten mit To-dos

Unsere `Todos.svelte`-Komponente zeigt derzeit nur statisches Markup an; beginnen wir damit, es etwas dynamischer zu gestalten. Wir werden die Aufgabeninformationen aus dem Markup nehmen und in einem `todos`-Array speichern. Wir werden auch zwei Variablen erstellen, um die Gesamtzahl der Aufgaben und der erledigten Aufgaben zu verfolgen.

Der Zustand unserer Komponente wird durch diese drei obersten Variablen dargestellt.

1. Erstellen Sie einen `<script>`-Abschnitt oben in `src/components/Todos.svelte` und fügen Sie ihm folgenden Inhalt hinzu:

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

2. Beginnen wir mit der Anzeige einer Statusmeldung. Finden Sie die `<h2>`-Überschrift mit einer `id` von `list-heading` und ersetzen Sie die fest kodierte Anzahl aktiver und erledigter Aufgaben durch dynamische Ausdrücke:

   ```svelte
   <h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
   ```

3. Gehen Sie zur App, und Sie sollten die Meldung "2 von 3 Aufgaben erledigt" wie zuvor sehen, aber diesmal stammen die Informationen aus dem `todos`-Array.
4. Um es zur Bestätigung zu beweisen, gehen Sie zu diesem Array und versuchen Sie, einige der Eigenschaftenwerte der abgeschlossenen Aufgaben zu ändern und sogar ein neues To-do-Objekt hinzuzufügen. Beobachten Sie, wie die Zahlen in der Nachricht entsprechend aktualisiert werden.

## Dynamisches Generieren der To-dos aus den Daten

Derzeit sind unsere angezeigten To-do-Elemente alle statisch. Wir möchten über jedes Element in unserem `todos`-Array iterieren und das Markup für jede Aufgabe rendern, also lassen Sie es uns jetzt tun.

HTML bietet keine Möglichkeit, Logik auszudrücken – wie zum Beispiel Bedingungen und Schleifen. Svelte schon. In diesem Fall verwenden wir die [`{#each}`](https://svelte.dev/docs/logic-blocks#each)-Direktive, um über das `todos`-Array zu iterieren. Der zweite Parameter, wenn angegeben, enthält den Index des aktuellen Elements. Außerdem kann ein Schlüsselausdruck bereitgestellt werden, der jedes Element eindeutig identifiziert. Svelte wird es verwenden, um die Liste zu differenzieren, wenn sich die Daten ändern, anstatt Elemente am Ende hinzuzufügen oder zu entfernen, und es ist eine gute Praxis, immer einen anzugeben. Schließlich kann ein `:else`-Block bereitgestellt werden, der angezeigt wird, wenn die Liste leer ist.

Probieren wir es aus.

1. Ersetzen Sie das vorhandene `<ul>`-Element durch die folgende vereinfachte Version, um eine Vorstellung davon zu bekommen, wie es funktioniert:

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

2. Gehen Sie zurück zur App; Sie werden etwas sehen wie:

   ![sehr einfache To-do-Liste-Ausgabe, die mit einem each-Block erstellt wurde](01-each-block.png)

3. Jetzt, da wir gesehen haben, dass das funktioniert, generieren wir ein vollständiges To-do-Element mit jeder Schleife der `{#each}`-Direktive und betten die Informationen aus dem `todos`-Array darin ein: `id`, `name` und `completed`. Ersetzen Sie Ihren vorhandenen `<ul>`-Block durch Folgendes:

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

   Beachten Sie, wie wir geschweifte Klammern verwenden, um JavaScript-Ausdrücke in HTML-Attribute einzubetten, wie wir es bei den `checked`- und `id`-Attributen des Kontrollkästchens getan haben.

Wir haben unser statisches Markup in eine dynamische Vorlage umgewandelt, die bereit ist, die Aufgaben aus dem Zustand unserer Komponente anzuzeigen. Großartig! Wir kommen der Sache näher.

## Arbeiten mit Props

Mit einer fest codierten Liste von To-dos ist unsere `Todos`-Komponente nicht sehr nützlich. Um unsere Komponente in einen allgemeinen To-do-Editor zu verwandeln, sollten wir dem übergeordneten Element dieser Komponente erlauben, die zu bearbeitende Liste von To-dos zu übergeben. Dies würde uns ermöglichen, sie in einem Webdienst oder im lokalen Speicher zu speichern und später zur Aktualisierung wieder abzurufen. Also lassen Sie uns das Array in ein `prop` umwandeln.

1. Ersetzen Sie in `Todos.svelte` den vorhandenen `let todos = …`-Block durch `export let todos = []`.

   ```js
   export let todos = [];
   ```

   Dies mag sich zunächst ein wenig seltsam anfühlen. So funktioniert `export` normalerweise nicht in JavaScript-Modulen! Dies ist, wie Svelte JavaScript "erweitert", indem es gültige Syntax mit einem neuen Zweck versieht. In diesem Fall verwendet Svelte das Schlüsselwort `export`, um eine Variablendeklaration als Eigenschaft oder Prop zu markieren, was bedeutet, dass sie für Verbraucher der Komponente zugänglich wird.

   Sie können auch einen Standardanfangswert für ein Prop angeben. Dieser wird verwendet, wenn der Verbraucher der Komponente das Prop beim Instanziieren der Komponente nicht angibt – oder wenn sein Anfangswert nicht definiert ist.

   Mit `export let todos = []` teilen wir Svelte also mit, dass unsere `Todos.svelte`-Komponente ein `todos`-Attribut akzeptieren wird, das standardmäßig auf ein leeres Array gesetzt wird, wenn es nicht angegeben wird.

2. Werfen Sie einen Blick auf die App, und Sie sehen die Nachricht "Nothing to do here!". Dies liegt daran, dass wir derzeit keinen Wert von `App.svelte` übergeben, sodass der Standardwert verwendet wird.
3. Nehmen wir nun unsere To-dos mit nach `App.svelte` und übergeben sie als Prop an die Komponente `Todos.svelte`. Aktualisieren Sie `src/App.svelte` wie folgt:

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

4. Wenn das Attribut und die Variable denselben Namen haben, erlaubt es Svelte, einfach die Variable als praktische Abkürzung anzugeben, damit wir unsere letzte Zeile so umschreiben können. Versuchen Sie dies jetzt.

   ```svelte
   <Todos {todos} />
   ```

An diesem Punkt sollten Ihre To-dos genauso gerendert werden wie zuvor, außer dass wir sie nun von der `App.svelte`-Komponente übergeben.

## To-dos umschalten und entfernen

Fügen wir etwas Funktionalität hinzu, um den Aufgabenstatus umzuschalten. Svelte verfügt über die Direktive `on:eventname`, um auf DOM-Ereignisse zu hören. Fügen wir dem `on:click`-Ereignis des Kontrollkästchen-Inputs einen Handler hinzu, um den Wert `completed` umzuschalten.

1. Aktualisieren Sie das `<input type="checkbox">`-Element in `src/components/Todos.svelte` wie folgt:

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. Als Nächstes fügen wir eine Funktion hinzu, um ein To-do aus unserem `todos`-Array zu entfernen. Fügen Sie am Ende des `<script>`-Abschnitts von `Todos.svelte` die Funktion `removeTodo()` wie folgt hinzu:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. Wir rufen sie über die Schaltfläche _Löschen_ auf. Aktualisieren Sie diese mit einem `click`-Ereignis, wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Ein sehr häufiger Fehler bei Handlern in Svelte ist, das Ergebnis der Ausführung einer Funktion als Handler zu übergeben, anstatt die Funktion zu übergeben. Wenn Sie beispielsweise `on:click={removeTodo(todo)}}` angeben, wird `removeTodo(todo)` ausgeführt und das Ergebnis als Handler übergeben, was nicht unsere Absicht war.

   In diesem Fall müssen Sie `on:click={() => removeTodo(todo)}}` als Handler angeben. Wenn `removeTodo()` keine Parameter erhalten sollte, könnten Sie `on:event={removeTodo}` verwenden, aber nicht `on:event={removeTodo()}}`. Dies ist keine besondere Svelte-Syntax – hier verwenden wir einfach reguläre JavaScript-[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Nochmals, das ist ein guter Fortschritt – an diesem Punkt können wir jetzt Aufgaben löschen. Wenn die _Löschen_-Schaltfläche eines To-do-Elements gedrückt wird, wird das betreffende To-do aus dem `todos`-Array entfernt, und die Benutzeroberfläche wird aktualisiert, um es nicht mehr anzuzeigen. Darüber hinaus können wir jetzt die Kontrollkästchen aktivieren, und der abgeschlossene Status der betreffenden To-dos wird jetzt im `todos`-Array aktualisiert.

Der "x von y Aufgaben erledigt"-Kopf wird jedoch nicht aktualisiert. Lesen Sie weiter, um herauszufinden, warum dies geschieht und wie wir es lösen können.

## Reaktive To-dos

Wie wir bereits gesehen haben, weiß Svelte, wie die Benutzeroberfläche aktualisiert werden soll, jedes Mal, wenn der Wert einer obersten Komponentenversion geändert wird. In unserer App wird der `todos`-Array-Wert jedes Mal direkt aktualisiert, wenn ein To-do umgeschaltet oder gelöscht wird, sodass Svelte den DOM automatisch aktualisiert.

Dies gilt jedoch nicht für `totalTodos` und `completedTodos`. Im folgenden Code werden ihnen Werte zugeordnet, wenn die Komponente instanziiert und das Skript ausgeführt wird, aber danach werden ihre Werte nicht mehr geändert:

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

Wir könnten sie nach dem Umschalten und Entfernen von To-dos neu berechnen, aber es gibt einen einfacheren Weg.

Wir können Svelte mitteilen, dass wir möchten, dass unsere `totalTodos`- und `completedTodos`-Variablen reaktiv sind, indem wir sie mit `$:` prefixen. Svelte wird den Code generieren, um sie automatisch zu aktualisieren, wenn sich die Daten ändern, von denen sie abhängen.

> [!NOTE]
> Svelte verwendet die Syntax des [`$:` JavaScript-Labels](/de/docs/Web/JavaScript/Reference/Statements/label), um reaktive Anweisungen zu markieren. Genau wie das `export`-Schlüsselwort, das verwendet wird, um Props zu deklarieren, mag dies ein wenig fremd aussehen. Dies ist ein weiteres Beispiel dafür, wie Svelte gültige JavaScript-Syntax aufgreift und ihr einen neuen Zweck verleiht – in diesem Fall bedeutet es "Führen Sie diesen Code erneut aus, wenn sich eine der referenzierten Werte ändert". Sobald Sie sich daran gewöhnt haben, gibt es kein Zurück mehr.

Aktualisieren Sie Ihre `totalTodos`- und `completedTodos`-Variablendefinitionen innerhalb von `src/components/Todos.svelte`, sodass sie wie folgt aussehen:

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

Wenn Sie Ihre App jetzt überprüfen, werden Sie sehen, dass die Zahlen in der Überschrift aktualisiert werden, wenn To-dos abgeschlossen oder gelöscht werden. Nett!

Hinter den Kulissen analysiert der Svelte-Komparator unseren Code, um einen Abhängigkeitsbaum zu erstellen, und generiert dann den JavaScript-Code, um jede reaktive Anweisung neu zu bewerten, wann immer eine ihrer Abhängigkeiten aktualisiert wird. Reaktivität in Svelte ist sehr leichtgewichtig und leistungsfähig implementiert, ohne dass Hörer, Setter, Getter oder andere komplexe Mechanismen verwendet werden.

## Hinzufügen neuer To-dos

Nun zur nächsten wichtigen Aufgabe für diesen Artikel – lassen Sie uns einige Funktionalitäten zum Hinzufügen neuer To-dos hinzufügen.

1. Zunächst erstellen wir eine Variable, um den Text des neuen To-dos zu speichern. Fügen Sie diese Deklaration dem `<script>`-Abschnitt der Datei `Todos.svelte` hinzu:

   ```js
   let newTodoName = "";
   ```

2. Jetzt verwenden wir diesen Wert im `<input>` zum Hinzufügen neuer Aufgaben. Dazu müssen wir unsere Variable `newTodoName` an `todo-0` binden, sodass der Wert der Variable `newTodoName` mit der `value`-Eigenschaft des Inputs übereinstimmt. Wir könnten so etwas tun:

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   Wann immer sich der Wert der Variablen `newTodoName` ändert, wird er im `value`-Attribut des Inputs reflektiert, und wann immer im Input eine Taste gedrückt wird, aktualisieren wir den Inhalt der Variablen `newTodoName`.

   Dies ist eine manuelle Implementierung der Zwei-Wege-Datenbindung für ein Eingabefeld. Aber das müssen wir nicht tun – Svelte bietet eine einfachere Möglichkeit, jedes Attribut an eine Variable zu binden, mithilfe der [`bind:property`](https://svelte.dev/docs/element-directives#bind-property)-Direktive:

   ```svelte
   <input bind:value={newTodoName} />
   ```

   Implementieren wir dies also. Aktualisieren Sie den `todo-0`-Input wie folgt:

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. Ein einfacher Weg, um dies zu testen, ist, eine reaktive Anweisung hinzuzufügen, um den Inhalt von `newTodoName` zu protokollieren. Fügen Sie dieses Snippet am Ende des `<script>`-Abschnitts hinzu:

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > [!NOTE]
   > Wie Sie vielleicht bemerkt haben, sind reaktive Anweisungen nicht auf Variablendeklarationen beschränkt. Sie können _jede_ JavaScript-Anweisung nach dem `$:`-Zeichen setzen.

4. Gehen Sie nun zurück zu `localhost:5042`, drücken Sie <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>K</kbd>, um Ihre Browserkonsole zu öffnen, und geben Sie etwas in das Eingabefeld ein. Sie sollten Ihre Eingaben protokolliert sehen. An diesem Punkt können Sie die reaktive `console.log()` entfernen, wenn Sie möchten.
5. Als Nächstes erstellen wir eine Funktion zum Hinzufügen des neuen To-dos – `addTodo()` –, die ein neues `todo`-Objekt auf das `todos`-Array schiebt. Fügen Sie dies am Ende Ihres `<script>`-Blocks in `src/components/Todos.svelte` hinzu:

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > [!NOTE]
   > Wir vergeben im Moment nur die gleiche `id` für jedes To-do, aber keine Sorge, das werden wir bald beheben.

6. Jetzt möchten wir unser HTML aktualisieren, damit wir `addTodo()` jedes Mal aufrufen, wenn das Formular abgeschickt wird. Aktualisieren Sie das Eröffnungs-Tag des Formulars `NewTodo` wie folgt:

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   Die [`on:eventname`](https://svelte.dev/docs/element-directives#on-eventname)-Direktive unterstützt die Modifikation des DOM-Ereignisses mit dem `|`-Zeichen. In diesem Fall sagt der Modifikator `preventDefault` Svelte, dass es den Code generieren soll, um `event.preventDefault()` vor dem Ausführen des Handlers aufzurufen. Erkunden Sie den vorherigen Link, um zu sehen, welche anderen Modifikatoren verfügbar sind.

7. Wenn Sie an dieser Stelle versuchen, neue To-dos hinzuzufügen, werden die neuen To-dos zum To-dos-Array hinzugefügt, aber unsere Benutzeroberfläche wird nicht aktualisiert. Denken Sie daran, dass in Svelte [Reaktivität durch Zuweisungen ausgelöst wird](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive). Das bedeutet, dass die Funktion `addTodo()` ausgeführt wird, das Element zum `todos`-Array hinzugefügt wird, aber Svelte wird nicht feststellen, dass die `push`-Methode das Array modifiziert hat, sodass es die Aufgaben-`<ul>` nicht aktualisieren wird.

   Einfach `todos = todos` am Ende der Funktion `addTodo()` hinzuzufügen, würde das Problem lösen, aber es scheint seltsam, dass wir das am Ende der Funktion einfügen müssen. Stattdessen werden wir die `push()`-Methode herausnehmen und [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwenden, um dasselbe Ergebnis zu erzielen: Wir weisen dem `todos`-Array einen Wert zu, der gleich dem `todos`-Array plus dem neuen Objekt ist.

   > [!NOTE] > `Array` hat mehrere veränderliche Operationen: [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse), und [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Deren Verwendung verursacht oft Nebenwirkungen und schwer zu verfolgende Bugs. Indem wir anstelle von `push()` die Spread-Syntax verwenden, vermeiden wir das Ändern des Arrays, was als gute Praxis gilt.

   Aktualisieren Sie Ihre `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Jedem To-do eine eindeutige ID geben

Wenn Sie versuchen, in Ihrer App jetzt neue To-dos hinzuzufügen, können Sie ein neues To-do hinzufügen und es in der Benutzeroberfläche anzeigen – einmal. Wenn Sie es ein zweites Mal versuchen, funktioniert es nicht, und Sie erhalten eine Konsolenmeldung, die besagt: "Error: Cannot have duplicate keys in a keyed each". Wir benötigen eindeutige IDs für unsere To-dos.

1. Lassen Sie uns eine Variable `newTodoId` deklarieren, die aus der Anzahl der To-dos plus 1 berechnet und reaktiv gemacht wird. Fügen Sie das folgende Snippet dem `<script>`-Abschnitt hinzu:

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
   > Wie Sie sehen können, sind reaktive Anweisungen nicht auf Einzeiler beschränkt. Das Folgende würde ebenfalls funktionieren, ist aber etwas weniger lesbar: `$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1`

2. Wie erreicht Svelte das? Der Compiler analysiert die gesamte reaktive Anweisung und erkennt, dass sie von der Variablen `totalTodos` und dem Array `todos` abhängt. Immer wenn also eine von ihnen modifiziert wird, wird dieser Code neu bewertet und `newTodoId` entsprechend aktualisiert.

   Nutzen wir dies in unserer `addTodo()`-Funktion. Aktualisieren Sie es wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Filtern von To-dos nach Status

Schließlich in diesem Artikel, lassen Sie uns die Fähigkeit implementieren, unsere To-dos nach Status zu filtern. Wir erstellen eine Variable, um den aktuellen Filter zu speichern, und eine Hilfsfunktion, die die gefilterten To-dos zurückgibt.

1. Am Ende unseres `<script>`-Abschnitts fügen Sie das folgende hinzu:

   ```js
   let filter = "all";
   const filterTodos = (filter, todos) =>
     filter === "active"
       ? todos.filter((t) => !t.completed)
       : filter === "completed"
         ? todos.filter((t) => t.completed)
         : todos;
   ```

   Wir verwenden die `filter`-Variable, um den aktiven Filter zu steuern: _alle_, _aktive_ oder _erledigte_. Einfaches Zuweisen eines dieser Werte zur Filtervariable aktiviert den Filter und aktualisiert die Liste der To-dos. Lassen Sie uns sehen, wie man das erreicht.

   Die Funktion `filterTodos()` erhält den aktuellen Filter und die Liste der To-dos und gibt ein neues Array von To-dos zurück, die entsprechend gefiltert werden.

2. Aktualisieren wir das Filterbutton-Markup, um es dynamisch zu machen und den aktuellen Filter zu aktualisieren, wenn der Benutzer einen der Filterbuttons drückt. Aktualisieren Sie es so:

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

   Es gibt ein paar Dinge, die in diesem Markup passieren.

   Wir zeigen den aktuellen Filter an, indem wir der aktiven Filtertaste die Klasse `btn__primary` zuweisen. Um Stilklassen konditional auf ein Element anzuwenden, verwenden wir die Direktive `class:name={value}`. Wenn der Wert-Ausdruck zu einem wahrheitsgemäßen Wert ausgewertet wird, wird der Klassenname angewendet. Sie können viele dieser Direktiven mit unterschiedlichen Bedingungen auf dasselbe Element anwenden. Wenn wir also `class:btn__primary={filter === 'all'}` ausgeben, wird Svelte die Klasse `btn__primary` anwenden, wenn der Filter gleich `all` ist.

   > [!NOTE]
   > Svelte bietet eine Abkürzung, die es uns ermöglicht, `<div class:active={active}>` zu `<div class:active>` zu verkürzen, wenn die Klasse mit dem Variablennamen übereinstimmt.

   Etwas Ähnliches passiert mit dem Attribut `aria-pressed={filter === 'all'}`: Wenn der JavaScript-Ausdruck, der zwischen geschweiften Klammern übergeben wird, zu einem wahrheitsgemäßen Wert ausgewertet wird, wird das Attribut `aria-pressed` auf den Button angewendet.

   Immer wenn wir auf eine Schaltfläche klicken, aktualisieren wir die Filtervariable mit `on:click={() => filter = 'all'}`. Lesen Sie weiter, um zu erfahren, wie Svelte-Reaktivität den Rest erledigen wird.

3. Jetzt müssen wir die Hilfsfunktion nur noch in der `{#each}`-Schleife verwenden; aktualisieren Sie sie so:

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   Nach der Analyse unseres Codes erkennt Svelte, dass unsere Funktion `filterTodos()` von den Variablen `filter` und `todos` abhängig ist. Und genau wie bei jedem anderen dynamischen Ausdruck, der im Markup eingebettet ist, wird der DOM jedes Mal aktualisiert, wenn sich eine dieser Abhängigkeiten ändert. Immer wenn `filter` oder `todos` geändert wird, wird die Funktion `filterTodos()` neu bewertet und die Elemente in der Schleife entsprechend aktualisiert.

> [!NOTE]
> Reaktivität kann manchmal knifflig sein. Svelte erkennt `filter` als eine Abhängigkeit, weil wir darauf in dem Ausdruck `filterTodos(filter, todo)` verweisen. `filter` ist eine oberste Variablenebene, also könnten wir versucht sein, es aus den Hilfsfunktionsparametern zu entfernen und es einfach so aufzurufen: `filterTodos(todo)`. Das würde funktionieren, aber jetzt hat Svelte keine Möglichkeit herauszufinden, dass `{#each filterTodos(todos) }` von `filter` abhängt, und die Liste der gefilterten To-dos würde nicht aktualisiert, wenn sich der Filter ändert. Denken Sie immer daran, dass Svelte unseren Code analysiert, um Abhängigkeiten zu finden, daher ist es besser, darüber explizit zu sein und sich nicht auf die Sichtbarkeit der obersten Variablenebenen zu verlassen. Außerdem ist es eine gute Praxis, unseren Code klar und explizit darüber zu machen, welche Informationen er verwendet.

## Der Code bis jetzt

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

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

Das war's für jetzt! In diesem Artikel haben wir bereits den größten Teil der gewünschten Funktionalität implementiert. Unsere App kann To-dos anzeigen, hinzufügen und löschen, ihren Abschlussstatus umschalten, anzeigen, wie viele von ihnen abgeschlossen sind, und Filter anwenden.

Um zusammenzufassen, haben wir die folgenden Themen behandelt:

- Erstellen und Verwenden von Komponenten
- Umwandeln von statischem Markup in eine Live-Vorlage
- Einbetten von JavaScript-Ausdrücken in unser Markup
- Iterieren über Listen mithilfe der `{#each}`-Direktive
- Übergeben von Informationen zwischen Komponenten mit Props
- Lauschen von DOM-Ereignissen
- Deklarieren von reaktiven Anweisungen
- Einfaches Debuggen mit `console.log()` und reaktiven Anweisungen
- Binden von HTML-Attributen mit der `bind:property`-Direktive
- Auslösen von Reaktivität mit Zuweisungen
- Verwenden von reaktiven Ausdrücken zur Filterung von Daten
- Explizites Definieren unserer reaktiven Abhängigkeiten

Im nächsten Artikel werden wir weitere Funktionalitäten hinzufügen, mit denen Benutzer To-dos bearbeiten können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}
