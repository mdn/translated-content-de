---
title: "Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}

Da wir nun unser Markup und unsere Stile bereit haben, können wir mit der Entwicklung der benötigten Funktionen für unsere Svelte-To-Do-Liste-App beginnen. In diesem Artikel verwenden wir Variablen und Props, um unsere App dynamisch zu gestalten, damit wir To-Dos hinzufügen und löschen, sie als erledigt markieren und nach Status filtern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
          > besitzen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen und Anwenden von grundlegenden Svelte-Konzepten wie das Erstellen von Komponenten, das Übergeben von Daten mit Props, das Rendern von JavaScript-Ausdrücken in unserem Markup, das Ändern des Komponentenstatus und das Iterieren über Listen.
      </td>
    </tr>
  </tbody>
</table>

## Code mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um dann zum aktuellen App-Status zu gelangen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns über den REPL zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## Arbeiten mit To-Dos

Unsere `Todos.svelte`-Komponente zeigt derzeit nur statisches Markup an; wir beginnen, es etwas dynamischer zu gestalten. Wir nehmen die Aufgabeninformationen aus dem Markup und speichern sie in einem `todos`-Array. Außerdem erstellen wir zwei Variablen, um die Gesamtzahl der Aufgaben und die erledigten Aufgaben zu verfolgen.

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

2. Beginnen wir damit, eine Statusmeldung anzuzeigen. Suchen Sie die `<h2>`-Überschrift mit einer `id` von `list-heading` und ersetzen Sie die fest codierte Anzahl aktiver und abgeschlossener Aufgaben durch dynamische Ausdrücke:

   ```svelte
   <h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
   ```

3. Gehen Sie zur App, und Sie sollten die Nachricht "2 von 3 Elementen erledigt" wie zuvor sehen, aber diesmal stammen die Informationen aus dem `todos`-Array.
4. Um dies zu beweisen, gehen Sie zu diesem Array und versuchen Sie, einige der abgeschlossenen Eigenschaftenwerte des To-Do-Objekts zu ändern, und fügen Sie sogar ein neues To-Do-Objekt hinzu. Beobachten Sie, wie sich die Zahlen in der Nachricht entsprechend aktualisieren.

## Dynamische Generierung der To-Dos aus den Daten

Derzeit sind unsere angezeigten To-Do-Elemente alle statisch. Wir möchten jedes Element in unserem `todos`-Array durchlaufen und das Markup für jede Aufgabe rendern. Lassen Sie es uns jetzt tun.

HTML hat keine Möglichkeit, Logik wie Bedingungen und Schleifen auszudrücken. Svelte schon. In diesem Fall verwenden wir die [`{#each}`](https://svelte.dev/docs/logic-blocks#each)-Direktive, um das `todos`-Array zu durchlaufen. Der zweite Parameter wird, falls angegeben, den Index des aktuellen Elements enthalten. Außerdem kann ein Schlüsselausdruck angegeben werden, der jedes Element eindeutig identifiziert. Svelte verwendet diesen, um die Liste zu differenzieren, wenn sich die Daten ändern, anstatt Elemente am Ende hinzuzufügen oder zu entfernen, und es ist eine gute Praxis, immer einen anzugeben. Schließlich kann ein `:else`-Block bereitgestellt werden, der gerendert wird, wenn die Liste leer ist.

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

2. Gehen Sie zurück zur App; Sie sehen etwas wie dies:

   ![sehr einfache To-Do-Liste, die mit einem Each-Block erstellt wurde](01-each-block.png)

3. Jetzt, da wir gesehen haben, dass dies funktioniert, generieren wir ein vollständiges To-Do-Element mit jeder Schleife der `{#each}`-Direktive und betten darin die Informationen aus dem `todos`-Array ein: `id`, `name` und `completed`. Ersetzen Sie Ihren vorhandenen `<ul>`-Block wie folgt:

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

   Beachten Sie, wie wir geschweifte Klammern verwenden, um JavaScript-Ausdrücke in HTML-Attribute einzubetten, so wie wir es mit den Attributen `checked` und `id` des Kontrollkästchens gemacht haben.

Wir haben unser statisches Markup in eine dynamische Vorlage umgewandelt, die bereit ist, die Aufgaben aus dem Zustand unserer Komponente anzuzeigen. Großartig! Wir kommen der Sache näher.

## Arbeiten mit Props

Mit einer fest codierten Liste von To-Dos ist unsere `Todos`-Komponente nicht sehr nützlich. Um unsere Komponente in einen Allgemeinzweck-To-Do-Editor zu verwandeln, sollten wir es dem Elternelement dieser Komponente ermöglichen, die Liste der zu bearbeitenden To-Dos zu übergeben. Dadurch könnten wir sie in einem Webdienst oder im lokalen Speicher speichern und später zur Aktualisierung abrufen. Lassen Sie uns das Array also in ein `prop` umwandeln.

1. Ersetzen Sie in `Todos.svelte` den vorhandenen `let todos = …`-Block durch `export let todos = []`.

   ```js
   export let todos = [];
   ```

   Das mag sich anfangs etwas seltsam anfühlen. So funktioniert `export` normalerweise nicht in JavaScript-Modulen! So 'erweitert' Svelte JavaScript, indem es die gültige Syntax aufnimmt und ihr einen neuen Zweck gibt. In diesem Fall verwendet Svelte das Schlüsselwort `export`, um eine Variablendeklaration als Eigenschaft oder Prop zu markieren, was bedeutet, dass sie für Verbraucher der Komponente zugänglich wird.

   Sie können auch einen Standard-Anfangswert für ein Prop angeben. Dieser wird verwendet, wenn der Verbraucher der Komponente das Prop bei der Instanziierung der Komponente nicht angibt – oder wenn sein Anfangswert undefiniert ist.

   Mit `export let todos = []` sagen wir Svelte, dass unsere `Todos.svelte`-Komponente ein `todos`-Attribut akzeptiert, das – wenn es weggelassen wird – auf ein leeres Array initialisiert wird.

2. Schauen Sie sich die App an, und Sie sehen die Meldung "Nichts zu tun hier!". Das liegt daran, dass wir ihm momentan keinen Wert aus `App.svelte` übergeben, sodass der Standardwert verwendet wird.
3. Verschieben wir nun unsere To-Dos nach `App.svelte` und übergeben sie als Prop an die `Todos.svelte`-Komponente. Aktualisieren Sie `src/App.svelte` wie folgt:

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

4. Wenn der Attributname und der Variablenname übereinstimmen, erlaubt Svelte, die Variable als praktische Abkürzung einzutragen, sodass wir unsere letzte Zeile wie folgt umschreiben können. Probieren Sie dies jetzt aus.

   ```svelte
   <Todos {todos} />
   ```

An diesem Punkt sollten Ihre To-Dos ebenso gerendert werden wie zuvor, außer dass wir sie jetzt von der `App.svelte`-Komponente übergeben.

## Umschalten und Entfernen von To-Dos

Fügen wir etwas Funktionalität hinzu, um den Aufgabenstatus umzuschalten. Svelte hat die `on:eventname`-Direktive, um DOM-Ereignissen zu lauschen. Fügen wir einen Handler zum `on:click`-Ereignis des Checkbox-Eingabes hinzu, um den abgeschlossenen Wert umzuschalten.

1. Aktualisieren Sie das `<input type="checkbox">`-Element in `src/components/Todos.svelte` wie folgt:

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. Als Nächstes fügen wir eine Funktion hinzu, um ein To-Do aus unserem `todos`-Array zu entfernen. Am Ende des `<script>`-Abschnitts von `Todos.svelte`, fügen Sie die `removeTodo()`-Funktion wie folgt hinzu:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. Wir rufen sie über den _Löschen_-Button auf. Aktualisieren Sie ihn mit einem `click`-Event wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Ein sehr häufiger Fehler bei Handlern in Svelte ist es, das Ergebnis der Ausführung einer Funktion als Handler zu übergeben, anstatt die Funktion zu übergeben. Zum Beispiel, wenn Sie `on:click={removeTodo(todo)}}` angeben, wird `removeTodo(todo)` ausgeführt und das Ergebnis wird als Handler übergeben, was nicht das ist, was wir im Sinn hatten.

   In diesem Fall müssen Sie `on:click={() => removeTodo(todo)}}` als Handler angeben. Wenn `removeTodo()` keine Parameter empfängt, könnten Sie `on:event={removeTodo}` verwenden, aber nicht `on:event={removeTodo()}}`. Dies ist keine spezielle Svelte-Syntax – hier verwenden wir einfach reguläre JavaScript-[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Gut, das ist guter Fortschritt — an diesem Punkt können wir jetzt Aufgaben löschen. Wenn die _Löschen_-Schaltfläche eines To-Do-Elements gedrückt wird, wird das entsprechende To-Do aus dem `todos`-Array entfernt, und die UI wird aktualisiert, um es nicht mehr anzuzeigen. Zudem können wir jetzt die Checkboxen markieren, und der abgeschlossene Status der relevanten To-Dos wird nun im `todos`-Array aktualisiert.

Das "x von y Elementen erledigt"-Überschrift wird allerdings nicht aktualisiert. Lesen Sie weiter, um herauszufinden, warum dies passiert und wie wir es lösen können.

## Reaktive To-Dos

Wie wir bereits gesehen haben, weiß Svelte jedes Mal, wenn der Wert einer obersten Variablen einer Komponente geändert wird, wie die UI aktualisiert werden muss. In unserer App wird der Wert des `todos`-Arrays direkt jedes Mal aktualisiert, wenn ein To-Do umgeschaltet oder gelöscht wird, und so aktualisiert Svelte automatisch das DOM.

Dasselbe gilt jedoch nicht für `totalTodos` und `completedTodos`. Im nächsten Code, der ihnen beim Instanziieren der Komponente und Ausführen des Skripts zugewiesen wird, werden ihre Werte nicht geändert:

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

Wir könnten sie nach Umschaltung und Entfernung der To-Dos neu berechnen, aber es gibt einen einfacheren Weg, es zu tun.

Wir können Svelte mitteilen, dass wir unsere `totalTodos`- und `completedTodos`-Variablen reaktiv gestalten möchten, indem wir sie mit `$:` voranstellen. Svelte generiert den Code, um sie automatisch zu aktualisieren, wenn sich die Daten, von denen sie abhängen, ändern.

> [!NOTE]
> Svelte verwendet die `$:` [JavaScript-Label-Statement-Syntax](/de/docs/Web/JavaScript/Reference/Statements/label), um reaktive Anweisungen zu markieren. Ähnlich wie das Schlüsselwort `export`, das zur Deklaration von Props verwendet wird, mag dies etwas fremdartig aussehen. Dies ist ein weiteres Beispiel dafür, wie Svelte gültige JavaScript-Syntax nutzt und ihr einen neuen Zweck verleiht – in diesem Fall bedeutet es "Führen Sie diesen Code erneut aus, wenn sich einer der referenzierten Werte ändert". Sobald Sie sich daran gewöhnt haben, werden Sie es nicht mehr missen wollen.

Aktualisieren Sie Ihre `totalTodos`- und `completedTodos`-Variablendefinitionen in `src/components/Todos.svelte` wie folgt:

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

Wenn Sie jetzt Ihre App überprüfen, sehen Sie, dass die Zahlen in der Überschrift aktualisiert werden, wenn To-Dos abgeschlossen oder gelöscht werden. Schön!

Hinter den Kulissen wird der Svelte-Compiler unseren Code analysieren und einen Abhängigkeitsbaum erstellen, und dann den JavaScript-Code generieren, um jede reaktive Anweisung neu zu bewerten, wenn eine ihrer Abhängigkeiten aktualisiert wird. Reaktivität in Svelte wird auf eine sehr leichte und performante Weise implementiert, ohne Zuhörer, Setter, Getter oder andere komplexe Mechanismen zu verwenden.

## Neue To-Dos hinzufügen

Nun zum nächsten großen Abschnitt dieses Artikels — wir fügen Funktionalitäten hinzu, um neue To-Dos hinzuzufügen.

1. Zuerst erstellen wir eine Variable, um den Text des neuen To-Dos zu halten. Fügen Sie diese Deklaration dem `<script>`-Abschnitt von `Todos.svelte` hinzu:

   ```js
   let newTodoName = "";
   ```

2. Nun werden wir diesen Wert im `<input>` für das Hinzufügen neuer Aufgaben verwenden. Dazu müssen wir unsere `newTodoName`-Variable an die `todo-0` Eingabe binden, sodass der Wert der `newTodoName`-Variable synchron mit dem `value`-Eigenschaft des Eingabefeldes bleibt. Wir könnten etwas wie dies tun:

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   Wann immer sich der Wert der Variablen `newTodoName` ändert, wird er im `value`-Attribut des Eingabefeldes reflektiert, und wann immer eine Taste im Eingabefeld gedrückt wird, aktualisieren wir den Inhalt der Variablen `newTodoName`.

   Dies ist eine manuelle Implementierung der Zwei-Wege-Datenbindung für ein Eingabefeld. Aber wir müssen dies nicht tun — Svelte bietet eine einfachere Möglichkeit, jede Eigenschaft mit einer Variablen zu binden, mit der [`bind:property`](https://svelte.dev/docs/element-directives#bind-property)-Direktive:

   ```svelte
   <input bind:value={newTodoName} />
   ```

   Also, lassen Sie uns dies implementieren. Aktualisieren Sie die `todo-0` Eingabe wie folgt:

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. Eine einfache Möglichkeit, zu testen, ob dies funktioniert, besteht darin, eine reaktive Anweisung hinzuzufügen, um den Inhalt von `newTodoName` zu protokollieren. Fügen Sie diesen Code am Ende des `<script>`-Abschnitts hinzu:

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > [!NOTE]
   > Wie Sie vielleicht bemerkt haben, sind reaktive Anweisungen nicht auf Variablendeklarationen beschränkt. Sie können _jede_ JavaScript-Anweisung nach dem `$:`-Zeichen setzen.

4. Versuchen Sie jetzt, mit `localhost:5042` wieder zu laden, <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>K</kbd> zu drücken, um Ihre Browserkonsole zu öffnen, und etwas in das Eingabefeld einzugeben. Sie sollten Ihre Einträge protokolliert sehen. Zu diesem Zeitpunkt können Sie das reaktive `console.log()` löschen, wenn Sie möchten.
5. Als nächstes erstellen wir eine Funktion, um das neue To-Do hinzuzufügen — `addTodo()` —, welche ein neues `todo`-Objekt zum `todos`-Array hinzufügt. Fügen Sie diese am Ende Ihres `<script>`-Blocks in `src/components/Todos.svelte` hinzu:

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > [!NOTE]
   > Zurzeit weisen wir jedem To-Do nur die gleiche `id` zu, aber keine Sorge, wir werden das gleich beheben.

6. Nun wollen wir unser HTML aktualisieren, damit wir `addTodo()` ausführen, wann immer das Formular abgeschickt wird. Aktualisieren Sie das NewTodo-Formular-Öffnungstag wie folgt:

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   Die [`on:eventname`](https://svelte.dev/docs/element-directives#on-eventname)-Direktive unterstützt das Hinzufügen von Modifikatoren zum DOM-Ereignis mit dem `|`-Zeichen. In diesem Fall teilt der Modifier `preventDefault` Svelte mit, den Code zu generieren, um `event.preventDefault()` vor dem Ausführen des Handlers aufzurufen. Erkunden Sie den vorherigen Link, um zu sehen, welche anderen Modifikatoren verfügbar sind.

7. Wenn Sie versuchen, zu diesem Zeitpunkt neue To-Dos hinzuzufügen, werden die neuen To-Dos zum `todos`-Array hinzugefügt, aber unsere UI aktualisiert sich nicht. Denken Sie daran, dass in Svelte [Reaktivität durch Zuweisungen ausgelöst wird](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive). Das bedeutet, dass die `addTodo()`-Funktion ausgeführt wird, das Element dem `todos`-Array hinzugefügt wird, aber Svelte das nicht als Modifikation erkennt und die Task-`<ul>` daher nicht aktualisiert.

   Das Hinzufügen von `todos = todos` am Ende der `addTodo()`-Funktion würde das Problem lösen, aber es erscheint seltsam, dies am Ende der Funktion aufzunehmen. Stattdessen nehmen wir die `push()`-Methode heraus und verwenden [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um dasselbe Ergebnis zu erzielen: wir weisen dem `todos`-Array einen Wert zu, der dem `todos`-Array plus dem neuen Objekt entspricht.

   > **Hinweis:** `Array` hat mehrere veränderliche Operationen: [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) und [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Diese zu verwenden, führt oft zu Seiteneffekten und schwer nachvollziehbaren Fehlern. Indem wir die Spread-Syntax anstelle von `push()` verwenden, vermeiden wir das mutierende Array, was als gute Praxis angesehen wird.

   Aktualisieren Sie Ihre `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Jedem To-Do eine eindeutige ID geben

Wenn Sie jetzt versuchen, neue To-Dos in Ihrer App hinzuzufügen, können Sie ein neues To-Do hinzufügen und es in der UI erscheinen lassen — einmal. Wenn Sie es ein zweites Mal versuchen, wird es nicht funktionieren, und Sie erhalten eine Konsolenmeldung, die besagt "Fehler: Doppelte Schlüssel in einem gekeyten Each sind nicht erlaubt". Wir benötigen eindeutige IDs für unsere To-Dos.

1. Erklären wir eine `newTodoId`-Variable, die aus der Anzahl der To-Dos plus 1 berechnet wird, und machen wir sie reaktiv. Fügen Sie folgendes Snippet zum `<script>`-Abschnitt hinzu:

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

2. Wie erreicht Svelte dies? Der Compiler analysiert den gesamten reaktiven Ausdruck und erkennt, dass er von der `totalTodos` Variablen und dem `todos` Array abhängt. Sobald sich eine von ihnen ändert, wird dieser Code neu bewertet und `newTodoId` entsprechend aktualisiert.

   Lassen Sie uns dies in unserer `addTodo()`-Funktion verwenden. Aktualisieren Sie es wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Filtern von To-Dos nach Status

Schließlich in diesem Artikel werden wir die Fähigkeit implementieren, unsere To-Dos nach Status zu filtern. Wir erstellen eine Variable, um den aktuellen Filter zu halten, und eine Hilfsfunktion, die die gefilterten To-Dos zurückgibt.

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

   Wir verwenden die `filter`-Variable, um den aktiven Filter zu steuern: _alle_, _aktiv_ oder _abgeschlossen_. Das Zuweisen eines dieser Werte zur Filtervariablen aktiviert den Filter und aktualisiert die Liste der To-Dos entsprechend. Lassen Sie uns sehen, wie das erreicht werden kann.

   Die `filterTodos()`-Funktion wird den aktuellen Filter und die Liste der To-Dos entgegennehmen und ein neues Array von gefilterten To-Dos zurückgeben.

2. Aktualisieren wir das Filter-Button-Markup, um es dynamisch zu machen, und aktualisieren wir den aktuellen Filter, wenn der Benutzer einen der Filter-Buttons drückt. Aktualisieren Sie es wie folgt:

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

   In diesem Markup passieren einige Dinge.

   Wir zeigen den aktuellen Filter an, indem wir die `btn__primary`-Klasse auf den aktiven Filter-Button anwenden. Um Stilklassen bedingt auf ein Element anzuwenden, verwenden wir die `class:name={value}`-Direktive. Wenn der Wert-Ausdruck zu einem wahrheitsgemäßen Wert ausgewertet wird, wird der Klassenname angewendet. Sie können viele dieser Direktiven mit verschiedenen Bedingungen zu einem Element hinzufügen. Also wenn wir `class:btn__primary={filter === 'all'}` ausgeben, wird Svelte die `btn__primary`-Klasse anwenden, wenn filter gleich alle ist.

   > [!NOTE]
   > Svelte bietet eine Abkürzung, die es erlaubt, `<div class:active={active}>` auf `<div class:active>` zu verkürzen, wenn die Klasse mit dem Variablennamen übereinstimmt.

   Etwas Ähnliches passiert bei `aria-pressed={filter === 'all'}`: Wenn der zwischen geschweiften Klammern eingefügte JavaScript-Ausdruck zu einem wahrheitsgemäßen Wert ausgewertet wird, wird das `aria-pressed`-Attribut auf den Button angewendet.

   Wann immer wir auf einen Button klicken, aktualisieren wir die Filter-Variable, indem wir `on:click={() => filter = 'all'}` ausgeben. Lesen Sie weiter, um herauszufinden, wie Svelte-Reaktivität den Rest erledigen wird.

3. Jetzt müssen wir nur noch die Hilfsfunktion in die `{#each}`-Schleife einfügen; aktualisieren Sie sie wie folgt:

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   Nach Analyse unseres Codes erkennt Svelte, dass unsere `filterTodos()`-Funktion von den Variablen `filter` und `todos` abhängt. Und wie bei allen anderen dynamischen Ausdrücken, die im Markup eingebettet sind, wird jedesmal, wenn eine dieser Abhängigkeiten verändert wird, das DOM entsprechend aktualisiert. Also wird jedes Mal, wenn sich `filter` oder `todos` ändert, die `filterTodos()`-Funktion neu bewertet und die Elemente in der Schleife werden aktualisiert.

> [!NOTE]
> Reaktivität kann manchmal knifflig sein. Svelte erkennt `filter` als Abhängigkeit, weil wir es im `filterTodos(filter, todo)` Ausdruck referenzieren. `filter` ist eine oberste Variable, sodass wir versucht sein könnten, sie von den Hilfsfunktionen-Parametern zu entfernen und sie einfach so aufzurufen: `filterTodos(todo)`. Das würde funktionieren, aber jetzt hat Svelte keine Möglichkeit herauszufinden, dass `{#each filterTodos(todos)}}` von `filter` abhängt, und die Liste der gefilterten To-Dos wird nicht aktualisiert, wenn sich der Filter ändert. Denken Sie immer daran, dass Svelte unseren Code analysiert, um Abhängigkeiten herauszufinden; daher ist es besser, explizit darüber zu sein und nicht auf die Sichtbarkeit der obersten Variablen zu vertrauen. Außerdem ist es eine gute Praxis, unseren Code klar und explizit darüber zu machen, welche Informationen er verwendet.

## Der Code bisher

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Zusammenfassung

Das ist es erst einmal! In diesem Artikel haben wir bereits die meiste gewünschte Funktionalität implementiert. Unsere App kann To-Dos anzeigen, hinzufügen und löschen, deren abgeschlossenen Status umschalten, zeigen, wie viele von ihnen erledigt sind, und Filter anwenden.

Kurz zusammengefasst, haben wir die folgenden Themen behandelt:

- Erstellen und Verwenden von Komponenten
- Umwandeln von statischem Markup in eine lebendige Vorlage
- Einbetten von JavaScript-Ausdrücken in unser Markup
- Iterieren über Listen mit der `{#each}`-Direktive
- Übergeben von Informationen zwischen Komponenten mit Props
- Lauschen auf DOM-Ereignisse
- Deklarieren reaktiver Anweisungen
- Grundlegendes Debugging mit `console.log()` und reaktiven Anweisungen
- Binden von HTML-Eigenschaften mit der `bind:property`-Direktive
- Auslösen von Reaktivität mit Zuweisungen
- Verwenden von reaktiven Ausdrücken zur Datenfilterung
- Explizites Definieren unserer reaktiven Abhängigkeiten

Im nächsten Artikel werden wir weitere Funktionalitäten hinzufügen, die es Benutzern ermöglichen, To-Dos zu bearbeiten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Svelte_components", "Learn_web_development/Core/Frameworks_libraries")}}
