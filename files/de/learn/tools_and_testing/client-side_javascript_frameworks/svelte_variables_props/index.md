---
title: "Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt, da unser Markup und unsere Styles vorbereitet sind, können wir beginnen, die erforderlichen Funktionen für unsere Svelte-To-do-Listen-App zu entwickeln. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten. So können wir To-dos hinzufügen und löschen, sie als erledigt markieren und nach Status filtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen und Anwenden einiger grundlegender Svelte-Konzepte, wie das Erstellen von Komponenten, das Übergeben von Daten mit Props, das Rendern von JavaScript-Ausdrücken in unser Markup, das Ändern des Komponentenstatus und das Iterieren über Listen.
      </td>
    </tr>
  </tbody>
</table>

## Programmieren Sie mit uns mit

### Git

Klonen Sie das GitHub-Repository (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit dem REPL mit uns zu programmieren, beginnen Sie unter

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## Arbeiten mit To-dos

Unsere `Todos.svelte`-Komponente zeigt derzeit nur statisches Markup an; lassen Sie uns beginnen, sie etwas dynamischer zu gestalten. Wir werden die Aufgabeninformationen aus dem Markup herausnehmen und in einem `todos`-Array speichern. Außerdem erstellen wir zwei Variablen, um die Gesamtanzahl der Aufgaben und die erledigten Aufgaben zu verfolgen.

Der Zustand unserer Komponente wird durch diese drei Top-Level-Variablen dargestellt.

1. Erstellen Sie einen `<script>`-Abschnitt am oberen Rand von `src/components/Todos.svelte` und geben Sie ihm folgenden Inhalt:

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

   Nun lassen Sie uns etwas mit diesen Informationen machen.

2. Beginnen wir mit der Anzeige einer Statusnachricht. Finden Sie die `<h2>`-Überschrift mit der `id` `list-heading` und ersetzen Sie die fest kodierte Anzahl der aktiven und erledigten Aufgaben durch dynamische Ausdrücke:

   ```svelte
   <h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
   ```

3. Gehen Sie zur App und Sie sollten die Nachricht „2 von 3 Elementen erledigt“ wie zuvor sehen, aber diesmal kommen die Informationen aus dem `todos`-Array.
4. Um es zu beweisen, gehen Sie zu diesem Array und versuchen Sie, einige Werte der Eigenschaft „completed“ der To-do-Objekte zu ändern und sogar ein neues To-do-Objekt hinzuzufügen. Beobachten Sie, wie sich die Zahlen in der Nachricht entsprechend aktualisieren.

## Dynamisches Generieren der To-dos aus den Daten

Im Moment sind unsere angezeigten To-do-Elemente alle statisch. Wir möchten über jedes Element in unserem `todos`-Array iterieren und das Markup für jede Aufgabe rendern, also lassen Sie uns das jetzt tun.

HTML kann keine Logik wie Bedingungen und Schleifen ausdrücken. Svelte kann das. In diesem Fall verwenden wir die [`{#each}`](https://svelte.dev/docs/logic-blocks#each)-Direktive, um über das `todos`-Array zu iterieren. Der zweite Parameter, falls bereitgestellt, enthält den Index des aktuellen Elements. Außerdem kann ein Schlüsselausdruck angegeben werden, der jedes Element eindeutig identifiziert. Svelte wird ihn verwenden, um die Liste bei Datenänderungen zu differenzieren, anstatt Elemente am Ende hinzuzufügen oder zu entfernen, und es ist eine gute Praxis, immer einen anzugeben. Schließlich kann ein `:else`-Block bereitgestellt werden, der gerendert wird, wenn die Liste leer ist.

Lassen Sie es uns ausprobieren.

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

2. Gehen Sie zurück zur App; Sie werden etwas wie dies sehen:

   ![sehr einfache To-do-Listen-Ausgabe, die mit einem each-Block erstellt wurde](01-each-block.png)

3. Jetzt, da wir gesehen haben, dass dies funktioniert, generieren wir ein vollständiges To-do-Element mit jedem Durchlauf der `{#each}`-Direktive und betten darin die Informationen aus dem `todos`-Array ein: `id`, `name` und `completed`. Ersetzen Sie Ihren bestehenden `<ul>`-Block durch den folgenden:

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

   Beachten Sie, wie wir geschweifte Klammern verwenden, um JavaScript-Ausdrücke in HTML-Attributen einzubetten, wie wir es mit den Attributen `checked` und `id` des Kontrollkästchens getan haben.

Wir haben unser statisches Markup in eine dynamische Vorlage umgewandelt, die bereit ist, die Aufgaben aus dem Zustand unserer Komponente anzuzeigen. Großartig! Wir sind auf dem richtigen Weg.

## Arbeiten mit Props

Mit einer fest kodierten Liste von To-dos ist unsere `Todos`-Komponente nicht sehr nützlich. Um unsere Komponente in einen universellen To-do-Editor zu verwandeln, sollten wir es dem Elternelement dieser Komponente ermöglichen, die Liste der zu bearbeitenden To-dos zu übergeben. Dadurch könnten wir sie in einem Webdienst oder lokalem Speicher speichern und später zur Aktualisierung abrufen. Lassen Sie uns also das Array in ein `prop` umwandeln.

1. Ersetzen Sie in `Todos.svelte` den bestehenden `let todos = …`-Block durch `export let todos = []`.

   ```js
   export let todos = [];
   ```

   Das mag sich anfangs etwas seltsam anfühlen. So funktioniert `export` normalerweise nicht in JavaScript-Modulen! Dies ist, wie Svelte JavaScript „erweitert“, indem es gültige Syntax nimmt und ihr eine neue Bedeutung gibt. In diesem Fall verwendet Svelte das Schlüsselwort `export`, um eine Variablendeklaration als Eigenschaft oder Prop zu markieren, was bedeutet, dass sie für Verbraucher der Komponente zugänglich wird.

   Sie können auch einen Standardanfangswert für ein Prop angeben. Dieser wird verwendet, wenn der Verbraucher der Komponente das Prop nicht auf der Komponente angibt — oder wenn sein Anfangswert undefiniert ist — beim Instanziieren der Komponente.

   Mit `export let todos = []` teilen wir Svelte mit, dass unsere `Todos.svelte`-Komponente ein `todos`-Attribut akzeptieren wird, das, wenn es weggelassen wird, auf ein leeres Array initialisiert wird.

2. Schauen Sie sich die App an, und Sie werden die Nachricht "Nichts zu tun hier!" sehen. Dies liegt daran, dass wir derzeit keinen Wert aus `App.svelte` übergeben, also wird der Standardwert verwendet.
3. Jetzt verschieben wir unsere To-dos nach `App.svelte` und übergeben sie an die `Todos.svelte`-Komponente als ein Prop. Aktualisieren Sie `src/App.svelte` folgendermaßen:

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

4. Wenn das Attribut und die Variable denselben Namen haben, erlaubt Svelte Ihnen, einfach die Variable als praktische Abkürzung anzugeben, sodass wir unsere letzte Zeile so umschreiben können. Probieren Sie es jetzt aus.

   ```svelte
   <Todos {todos} />
   ```

An diesem Punkt sollten Ihre To-dos genau wie zuvor gerendert werden, nur dass wir sie jetzt von der `App.svelte`-Komponente übergeben.

## Umschalten und Entfernen von To-dos

Lassen Sie uns etwas Funktionalität hinzufügen, um den Aufgabenstatus umzuschalten. Svelte hat die `on:eventname`-Direktive, um auf DOM-Ereignisse zu hören. Lassen Sie uns einen Handler zum `on:click`-Ereignis des Kontrollkästcheneingabefelds hinzufügen, um den Wert „completed“ umzuschalten.

1. Aktualisieren Sie das `<input type="checkbox">`-Element in `src/components/Todos.svelte` wie folgt:

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. Als Nächstes fügen wir eine Funktion hinzu, um ein To-do aus unserem `todos`-Array zu entfernen. Fügen Sie am Ende des `<script>`-Abschnitts in `Todos.svelte` die Funktion `removeTodo()` wie folgt hinzu:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. Wir rufen sie über die _Löschen_-Schaltfläche auf. Aktualisieren Sie sie mit einem `click`-Ereignis so:

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Ein sehr häufiger Fehler bei Handlern in Svelte ist es, das Ergebnis der Ausführung einer Funktion als Handler zu übergeben, anstatt die Funktion zu übergeben. Wenn Sie beispielsweise `on:click={removeTodo(todo)}` angeben, wird `removeTodo(todo)` ausgeführt und das Ergebnis als Handler übergeben, was nicht das ist, was wir beabsichtigt haben.

   In diesem Fall müssen Sie `on:click={() => removeTodo(todo)}` als Handler angeben. Wenn `removeTodo()` keine Parameter erhalten würde, könnten Sie `on:event={removeTodo}` verwenden, aber nicht `on:event={removeTodo()}`. Dies ist keine spezielle Svelte-Syntax – hier verwenden wir einfach reguläre JavaScript-[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Das ist ein guter Fortschritt – an diesem Punkt können wir nun Aufgaben löschen. Wenn die _Löschen_-Schaltfläche eines To-do-Elements gedrückt wird, wird das betreffende To-do aus dem `todos`-Array entfernt, und die Benutzeroberfläche wird aktualisiert, um es nicht mehr anzuzeigen. Darüber hinaus können wir jetzt die Kontrollkästchen aktivieren, und der Status "completed" der entsprechenden To-dos wird nun im `todos`-Array aktualisiert.

Allerdings wird die Überschrift „x von y Elementen erledigt“ nicht aktualisiert. Lesen Sie weiter, um herauszufinden, warum dies geschieht und wie wir es lösen können.

## Reaktive To-dos

Wie wir bereits gesehen haben, weiß Svelte, wie die Benutzeroberfläche aktualisiert wird, jedes Mal, wenn der Wert einer Komponenten-Top-Level-Variablen geändert wird. In unserer App wird der Wert des `todos`-Arrays direkt aktualisiert, jedes Mal, wenn ein To-do umgeschaltet oder gelöscht wird, und so wird Svelte den DOM automatisch aktualisieren.

Dasselbe gilt jedoch nicht für `totalTodos` und `completedTodos`. Im folgenden Code wird ihnen ein Wert zugewiesen, wenn die Komponente instanziiert und das Skript ausgeführt wird, aber danach werden ihre Werte nicht geändert:

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

Wir könnten sie nach dem Umschalten und Entfernen von To-dos neu berechnen, aber es gibt einen einfacheren Weg.

Wir können Svelte sagen, dass wir möchten, dass unsere `totalTodos`- und `completedTodos`-Variablen reaktiv sind, indem wir sie mit `$:` versehen. Svelte wird den Code generieren, um sie automatisch zu aktualisieren, wann immer Daten, von denen sie abhängen, geändert werden.

> [!NOTE]
> Svelte verwendet die `$:` [JavaScript-Label-Satz-Syntax](/de/docs/Web/JavaScript/Reference/Statements/label), um reaktive Anweisungen zu markieren. Wie das `export`-Schlüsselwort beim Deklarieren von Props mag dies etwas fremd aussehen. Dies ist ein weiteres Beispiel dafür, wie Svelte gültige JavaScript-Syntax nutzt und ihr einen neuen Zweck gibt – in diesem Fall, um zu bedeuten: „Führen Sie diesen Code jedes Mal aus, wenn sich eine der referenzierten Werte ändert“. Sobald Sie sich daran gewöhnt haben, gibt es kein Zurück mehr.

Aktualisieren Sie Ihre Variablendefinitionen `totalTodos` und `completedTodos` in `src/components/Todos.svelte`, sodass sie so aussehen:

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

Wenn Sie Ihre App jetzt überprüfen, werden Sie feststellen, dass die Zahlen in der Überschrift aktualisiert werden, wenn To-dos als erledigt markiert oder gelöscht werden. Schön!

Hinter den Kulissen wird der Svelte-Compiler unseren Code analysieren, um einen Abhängigkeitsbaum zu erstellen, und dann den JavaScript-Code generieren, um jede reaktive Anweisung neu zu evaluieren, wann immer eine ihrer Abhängigkeiten aktualisiert wird. Reaktivität in Svelte wird auf sehr leichte und leistungsfähige Weise implementiert, ohne Zuhörer, Setter, Getter oder andere komplexe Mechanismen zu verwenden.

## Hinzufügen neuer To-dos

Nun zum nächsten größeren Task für diesen Artikel – lassen Sie uns einige Funktionen zum Hinzufügen neuer To-dos hinzufügen.

1. Zunächst erstellen wir eine Variable, um den Text des neuen To-dos zu speichern. Fügen Sie diese Deklaration dem `<script>`-Abschnitt der Datei `Todos.svelte` hinzu:

   ```js
   let newTodoName = "";
   ```

2. Nun verwenden wir diesen Wert im `<input>` zum Hinzufügen neuer Aufgaben. Dazu müssen wir unsere `newTodoName`-Variable an das `todo-0`-Eingabefeld binden, sodass der Wert der Variablen `newTodoName` synchron mit der `value`-Eigenschaft des Eingabefeldes bleibt. Wir könnten so etwas machen:

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   Jedes Mal, wenn sich der Wert der Variablen `newTodoName` ändert, wird er in der `value`-Attribut des Eingabefelds widergespiegelt, und jedes Mal, wenn eine Taste im Eingabefeld gedrückt wird, aktualisieren wir den Inhalt der Variablen `newTodoName`.

   Dies ist eine manuelle Implementierung der Zwei-Wege-Datenbindung für ein Eingabefeld. Aber das müssen wir nicht tun – Svelte bietet einen einfacheren Weg, um eine beliebige Eigenschaft an eine Variable zu binden, indem die [`bind:property`](https://svelte.dev/docs/element-directives#bind-property)-Direktive verwendet wird:

   ```svelte
   <input bind:value={newTodoName} />
   ```

   Lassen Sie uns das also implementieren. Aktualisieren Sie das `todo-0` Eingabefeld folgendermaßen:

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. Eine einfache Möglichkeit zu testen, ob dies funktioniert, besteht darin, eine reaktive Anweisung hinzuzufügen, um den Inhalt von `newTodoName` zu protokollieren. Fügen Sie dieses Snippet am Ende des `<script>`-Abschnitts hinzu:

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > [!NOTE]
   > Wie Sie vielleicht bemerkt haben, sind reaktive Anweisungen nicht auf Variablendeklarationen beschränkt. Sie können _jede_ JavaScript-Anweisung nach dem `$:`-Zeichen setzen.

4. Versuchen Sie nun, zu `localhost:5042` zurückzukehren, drücken Sie <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>K</kbd>, um die Konsole Ihres Browsers zu öffnen und etwas in das Eingabefeld zu tippen. Sie sollten Ihre Eingaben protokolliert sehen. An diesem Punkt können Sie das reaktive `console.log()` entfernen, wenn Sie möchten.
5. Als Nächstes erstellen wir eine Funktion, um das neue To-do hinzuzufügen — `addTodo()` — die ein neues `todo`-Objekt an das `todos`-Array anhängt. Fügen Sie dies am Ende Ihres `<script>`-Blocks in `src/components/Todos.svelte` hinzu:

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > [!NOTE]
   > Im Moment weisen wir einfach jedem To-do dieselbe `id` zu, aber keine Sorge, das werden wir bald beheben.

6. Jetzt möchten wir unser HTML aktualisieren, damit wir `addTodo()` aufrufen, wann immer das Formular übermittelt wird. Aktualisieren Sie das Eröffnungs-Tag des NewTodo-Formulars wie folgt:

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   Die [`on:eventname`](https://svelte.dev/docs/element-directives#on-eventname)-Direktive unterstützt das Hinzufügen von Modifikatoren zu dem DOM-Ereignis mit dem `|`-Zeichen. In diesem Fall teilt der Modifikator `preventDefault` Svelte mit, den Code zu generieren, um `event.preventDefault()` vor dem Ausführen des Handlers aufzurufen. Erkunden Sie den vorherigen Link, um zu sehen, welche anderen Modifikatoren verfügbar sind.

7. Wenn Sie an diesem Punkt versuchen, neue To-dos hinzuzufügen, werden die neuen To-dos dem To-dos-Array hinzugefügt, aber unsere Benutzeroberfläche wird nicht aktualisiert. Denken Sie daran, dass bei Svelte [die Reaktivität mit Zuweisungen ausgelöst wird](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive). Das bedeutet, dass die `addTodo()`-Funktion ausgeführt wird, das Element dem `todos`-Array hinzugefügt wird, Svelte jedoch nicht erkennt, dass die `push`-Methode das Array geändert hat und daher die `<ul>`-Aufgaben nicht aktualisieren wird.

   Einfach `todos = todos` am Ende der `addTodo()`-Funktion hinzuzufügen, würde das Problem lösen, aber es scheint seltsam, dass wir das am Ende der Funktion aufnehmen müssen. Stattdessen nehmen wir die `push()`-Methode heraus und verwenden die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das gleiche Ergebnis zu erzielen: Wir weisen dem `todos`-Array einen Wert zu, der dem `todos`-Array plus dem neuen Objekt entspricht.

   > **Hinweis:** `Array` hat mehrere mutierbare Operationen: [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) und [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Die Verwendung dieser Methoden verursacht oft Nebeneffekte und schwer zu verfolgende Fehler. Indem wir stattdessen die Spread-Syntax anstelle von `push()` verwenden, vermeiden wir es, das Array zu mutieren, was als gute Praxis angesehen wird.

   Aktualisieren Sie Ihre `addTodo()`-Funktion folgendermaßen:

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Jeder To-do eine eindeutige ID zuweisen

Wenn Sie jetzt versuchen, neue To-dos in Ihrer App hinzuzufügen, können Sie ein neues To-do hinzufügen und es in der Benutzeroberfläche anzeigen lassen – einmal. Wenn Sie es ein zweites Mal versuchen, wird es nicht funktionieren und Sie erhalten eine Konsolennachricht mit "Fehler: Es dürfen keine doppelten Schlüssel in einem keyed each vorkommen". Wir brauchen eindeutige IDs für unsere To-dos.

1. Lassen Sie uns eine Variable `newTodoId` deklarieren, die aus der Anzahl der To-dos plus 1 berechnet wird und reaktiv machen. Fügen Sie den folgenden Schnipsel dem `<script>`-Abschnitt hinzu:

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
   > Wie Sie sehen können, sind reaktive Anweisungen nicht auf Einzeiler beschränkt. Das folgende würde auch funktionieren, ist jedoch etwas weniger lesbar: `$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1`

2. Wie erreicht Svelte das? Der Compiler analysiert die gesamte reaktive Anweisung und stellt fest, dass sie von der Variablen `totalTodos` und dem `todos`-Array abhängt. Sobald eine davon modifiziert wird, wird dieser Code neu evaluiert, wodurch `newTodoId` entsprechend aktualisiert wird.

   Lassen Sie uns dies in unserer `addTodo()`-Funktion verwenden. Aktualisieren Sie es folgendermaßen:

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Filtern von To-dos nach Status

Zu guter Letzt in diesem Artikel implementieren wir die Möglichkeit, unsere To-dos nach Status zu filtern. Wir erstellen eine Variable, um den aktuellen Filter zu speichern, und eine Hilfsfunktion, die die gefilterten To-dos zurückgibt.

1. Fügen Sie am unteren Rand unseres `<script>`-Abschnitts folgendes hinzu:

   ```js
   let filter = "all";
   const filterTodos = (filter, todos) =>
     filter === "active"
       ? todos.filter((t) => !t.completed)
       : filter === "completed"
         ? todos.filter((t) => t.completed)
         : todos;
   ```

   Wir verwenden die `filter`-Variable, um den aktiven Filter zu steuern: _all_, _active_ oder _completed_. Einfach einer dieser Werte an die Filtervariable zuzuweisen, aktiviert den Filter und aktualisiert die Liste der To-dos. Lassen Sie uns sehen, wie das erreicht wird.

   Die `filterTodos()`-Funktion erhält den aktuellen Filter und die Liste der To-dos und gibt ein neues Array mit entsprechend gefilterten To-dos zurück.

2. Lassen Sie uns das Markup für die Filter-Buttons aktualisieren, um es dynamisch zu machen und den aktuellen Filter zu aktualisieren, wenn der Benutzer eine der Buttons drückt. Aktualisieren Sie es so:

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

   In diesem Markup passiert einiges.

   Wir zeigen den aktuellen Filter an, indem wir die `btn__primary`-Klasse auf den aktiven Filter-Button anwenden. Um Stilklassen bedingt auf ein Element anzuwenden, verwenden wir die `class:name={value}`-Direktive. Wenn der Wertausdruck als wahr erweist, wird der Klassenname angewendet. Sie können viele dieser Direktiven mit unterschiedlichen Bedingungen auf dasselbe Element anwenden. Wenn wir `class:btn__primary={filter === 'all'}` verwenden, wendet Svelte die `btn__primary`-Klasse an, wenn der Filter gleich `all` ist.

   > [!NOTE]
   > Svelte bietet eine Abkürzung, die es ermöglicht, `<div class:active={active}>` auf `<div class:active>` zu verkürzen, wenn die Klasse mit dem Variablennamen übereinstimmt.

   Etwas Ähnliches passiert mit `aria-pressed={filter === 'all'}`: Wenn der JavaScript-Ausdruck zwischen den geschweiften Klammern als wahr erweist, wird dem Button das Attribut `aria-pressed` hinzugefügt.

   Jedes Mal, wenn wir auf einen Button klicken, aktualisieren wir die Filtervariable, indem wir `on:click={() => filter = 'all'}` ausgeben. Lesen Sie weiter, um herauszufinden, wie die Reaktivität von Svelte den Rest erledigt.

3. Jetzt müssen wir nur noch die Hilfsfunktion in der `{#each}`-Schlaufe verwenden; aktualisieren Sie es so:

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   Nach der Analyse unseres Codes erkennt Svelte, dass unsere `filterTodos()`-Funktion von den Variablen `filter` und `todos` abhängt. Und wie bei jedem anderen dynamischen Ausdruck, der im Markup eingebettet ist, wird der DOM jedes Mal aktualisiert, wenn sich eine dieser Abhängigkeiten ändert. Somit wird die `filterTodos()`-Funktion neu bewertet und die Elemente innerhalb der Schleife aktualisiert, wenn `filter` oder `todos` verändert wird.

> [!NOTE]
> Reaktivität kann manchmal knifflig sein. Svelte erkennt `filter` als Abhängigkeit, weil wir es im Ausdruck `filterTodos(filter, todo)` referenzieren. `filter` ist eine Top-Level-Variable, daher könnten wir versucht sein, es aus den Parametern der Hilfsfunktion zu entfernen und sie einfach so aufzurufen: `filterTodos(todo)`. Dies würde funktionieren, aber jetzt hat Svelte keine Möglichkeit herauszufinden, dass `{#each filterTodos(todos) }` von `filter` abhängt, und die Liste der gefilterten To-dos wird nicht aktualisiert, wenn sich der Filter ändert. Denken Sie immer daran, dass Svelte unseren Code analysiert, um Abhängigkeiten herauszufinden, also ist es besser, explizit darüber zu sein und nicht auf die Sichtbarkeit von Top-Level-Variablen zu vertrauen. Außerdem ist es eine gute Praxis, unseren Code klar und explizit darüber zu machen, welche Informationen er verwendet.

## Der bisherige Code

### Git

Um den Codezustand so zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos folgendermaßen zu:

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

Das wäre es für den Moment! In diesem Artikel haben wir bereits den Großteil unserer gewünschten Funktionalität implementiert. Unsere App kann To-dos anzeigen, hinzufügen und löschen, ihren Status umschalten, anzeigen, wie viele von ihnen abgeschlossen sind, und Filter anwenden.

Zusammenfassend haben wir die folgenden Themen behandelt:

- Erstellen und Verwenden von Komponenten
- Umwandeln von statischem Markup in eine Live-Vorlage
- Einbetten von JavaScript-Ausdrücken in unser Markup
- Iterieren über Listen mit der `{#each}`-Direktive
- Übertragen von Informationen zwischen Komponenten mit Props
- Lauschen auf DOM-Ereignisse
- Deklarieren reaktiver Anweisungen
- Grundlegendes Debugging mit `console.log()` und reaktiven Anweisungen
- Binden von HTML-Eigenschaften mit der `bind:property`-Direktive
- Auslösen von Reaktivität mit Zuweisungen
- Verwenden von reaktiven Ausdrücken zum Filtern von Daten
- Explizite Definition unserer reaktiven Abhängigkeiten

Im nächsten Artikel werden wir weitere Funktionen hinzufügen, die es Benutzern ermöglichen, To-dos zu bearbeiten.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
