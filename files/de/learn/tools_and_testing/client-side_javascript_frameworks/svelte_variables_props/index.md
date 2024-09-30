---
title: "Dynamisches Verhalten in Svelte: Arbeiten mit Variablen und Props"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Da wir nun unser Markup und unsere Styles vorbereitet haben, können wir mit der Entwicklung der erforderlichen Funktionen für unsere Svelte-zu-erledigen-Liste-App beginnen. In diesem Artikel werden wir Variablen und Props verwenden, um unsere App dynamisch zu gestalten, damit wir Aufgaben hinzufügen und löschen, als erledigt markieren und nach Status filtern können.

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
          über Kenntnisse der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
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
        Erlernen und Anwenden einiger grundlegender Svelte-Konzepte, wie das Erstellen
        von Komponenten, Übergeben von Daten mit Props, Rendern von JavaScript-Ausdrücken in
        unserem Markup, Ändern des Komponentenstatus und Iterieren über Listen.
      </td>
    </tr>
  </tbody>
</table>

## Coden Sie mit uns mit

### Git

Klonen Sie das GitHub-Repository (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Status der App zu gelangen, führen Sie Folgendes aus:

```bash
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns mithilfe des REPL zu coden, beginnen Sie hier:

<https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2>

## Arbeiten mit Aufgaben

Unsere `Todos.svelte`-Komponente zeigt derzeit nur statisches Markup an; lassen Sie uns damit beginnen, es etwas dynamischer zu gestalten. Wir werden die Aufgabeninformationen aus dem Markup nehmen und in einem `todos`-Array speichern. Wir erstellen auch zwei Variablen, um die Gesamtanzahl der Aufgaben und der erledigten Aufgaben nachzuverfolgen.

Der Status unserer Komponente wird durch diese drei obersten Variablen repräsentiert.

1. Erstellen Sie einen `<script>`-Abschnitt am Anfang von `src/components/Todos.svelte` und fügen Sie ihm folgenden Inhalt hinzu:

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

2. Lassen Sie uns mit der Anzeige einer Statusnachricht beginnen. Suchen Sie die `<h2>`-Überschrift mit einer `id` von `list-heading` und ersetzen Sie die festkodierte Anzahl der aktiven und abgeschlossenen Aufgaben durch dynamische Ausdrücke:

   ```svelte
   <h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
   ```

3. Gehen Sie zur App, und Sie sollten die Nachricht "2 von 3 Aufgaben abgeschlossen" wie zuvor sehen, aber diesmal kommen die Informationen aus dem `todos`-Array.
4. Um dies zu beweisen, gehen Sie zu diesem Array und versuchen Sie, einige der `completed`-Eigenschaftswerte der Aufgabenobjekte zu ändern, und fügen Sie sogar ein neues Aufgabenobjekt hinzu. Beobachten Sie, wie die Zahlen in der Nachricht angemessen aktualisiert werden.

## Dynamische Generierung der Aufgaben aus den Daten

Im Moment sind unsere angezeigten Aufgaben alle statisch. Wir möchten über jedes Element in unserem `todos`-Array iterieren und das Markup für jede Aufgabe rendern, also tun wir das jetzt.

HTML hat keine Möglichkeit, Logik auszudrücken — wie Bedingungen und Schleifen. Svelte kann das. In diesem Fall verwenden wir die [`{#each}`](https://svelte.dev/docs/logic-blocks#each)-Direktive, um über das `todos`-Array zu iterieren. Der zweite Parameter, falls vorhanden, enthält den Index des aktuellen Elements. Außerdem kann ein Schlüssel-Ausdruck bereitgestellt werden, der jedes Element eindeutig identifiziert. Svelte verwendet ihn, um die Liste zu differenzieren, wenn sich die Daten ändern, anstatt Elemente am Ende hinzuzufügen oder zu entfernen. Es ist eine gute Praxis, immer einen anzugeben. Schließlich kann ein `:else`-Block bereitgestellt werden, der gerendert wird, wenn die Liste leer ist.

Lassen Sie uns dies ausprobieren.

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

   ![sehr einfaches To-Do-Listen-Ergebnis, erstellt mit einem each-Block](01-each-block.png)

3. Jetzt, da wir gesehen haben, dass dies funktioniert, lassen Sie uns ein vollständiges Aufgaben-Element mit jeder Schleife der `{#each}`-Direktive generieren und darin die Informationen aus dem `todos`-Array einbetten: `id`, `name` und `completed`. Ersetzen Sie Ihren vorhandenen `<ul>`-Block durch Folgendes:

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

   Beachten Sie, wie wir geschweifte Klammern verwenden, um JavaScript-Ausdrücke in HTML-Attribute einzubetten, wie wir es mit den Attributen `checked` und `id` des Kontrollkästchens gemacht haben.

Wir haben unser statisches Markup in eine dynamische Vorlage verwandelt, die bereit ist, die Aufgaben aus dem Status unserer Komponente anzuzeigen. Großartig! Wir nähern uns unserem Ziel.

## Arbeiten mit Props

Mit einer festkodierten Liste von Aufgaben ist unsere `Todos`-Komponente nicht sehr nützlich. Um unsere Komponente in einen allgemeinen Aufgaben-Editor zu verwandeln, sollten wir es dem übergeordneten Element dieser Komponente ermöglichen, die Liste der zu bearbeitenden Aufgaben zu übergeben. Auf diese Weise könnten wir sie in einem Webdienst oder lokalem Speicher speichern und später abrufen, um sie zu aktualisieren. Lassen Sie uns das Array in ein `prop` verwandeln.

1. Ersetzen Sie in `Todos.svelte` den vorhandenen `let todos = …`-Block durch `export let todos = []`.

   ```js
   export let todos = [];
   ```

   Dies mag zunächst etwas merkwürdig erscheinen. So funktioniert `export` normalerweise nicht in JavaScript-Modulen! Auf diese Weise "erweitert" Svelte JavaScript, indem es gültige Syntax nimmt und ihr einen neuen Zweck gibt. In diesem Fall verwendet Svelte das `export`-Schlüsselwort, um eine Variablendeklaration als Eigenschaft oder Prop zu kennzeichnen, was bedeutet, dass sie den Verbrauchern der Komponente zugänglich wird.

   Sie können auch einen Standard-Startwert für ein Prop angeben. Dieser wird verwendet, wenn der Verbraucher der Komponente das Prop bei der Instanziierung der Komponente nicht angibt – oder wenn sein Startwert undefiniert ist.

   Also sagen wir mit `export let todos = []` Svelte, dass unsere `Todos.svelte`-Komponente ein `todos`-Attribut akzeptieren wird, das, wenn es weggelassen wird, auf ein leeres Array initialisiert wird.

2. Schauen Sie sich die App an, und Sie werden die Nachricht "Nichts zu tun hier!" sehen. Dies liegt daran, dass wir derzeit keinen Wert von `App.svelte` an sie übergeben, sodass der Standardwert verwendet wird.
3. Lassen Sie uns nun unsere Aufgaben zu `App.svelte` verschieben und sie als Prop an die `Todos.svelte`-Komponente übergeben. Aktualisieren Sie `src/App.svelte` wie folgt:

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

4. Wenn das Attribut und die Variable denselben Namen haben, erlaubt Svelte Ihnen, nur die Variable als praktischen Kurzweg anzugeben, sodass wir unsere letzte Zeile so umschreiben können. Probieren Sie dies jetzt aus.

   ```svelte
   <Todos {todos} />
   ```

An diesem Punkt sollten Ihre Aufgaben genauso gerendert werden wie zuvor, außer dass wir sie jetzt aus der `App.svelte`-Komponente übergeben.

## Umschalten und Entfernen von Aufgaben

Lassen Sie uns etwas Funktionalität hinzufügen, um den Aufgabenstatus umzuschalten. Svelte hat die `on:eventname`-Direktive zum Abhören von DOM-Ereignissen. Lassen Sie uns einen Handler für das `on:click`-Ereignis des Checkbox-Inputs hinzufügen, um den abgeschlossenen Wert umzuschalten.

1. Aktualisieren Sie das `<input type="checkbox">`-Element in `src/components/Todos.svelte` wie folgt:

   ```svelte
   <input type="checkbox" id="todo-{todo.id}"
     on:click={() => todo.completed = !todo.completed}
     checked={todo.completed}
   />
   ```

2. Als Nächstes fügen wir eine Funktion hinzu, um eine Aufgabe aus unserem `todos`-Array zu entfernen. Fügen Sie am Ende des `<script>`-Abschnitts von `Todos.svelte` die `removeTodo()`-Funktion wie folgt hinzu:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
   }
   ```

3. Wir rufen sie über die _Löschen_-Schaltfläche auf. Aktualisieren Sie sie mit einem `click`-Ereignis, wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger"
     on:click={() => removeTodo(todo)}
   >
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Ein sehr häufiger Fehler mit Handlers in Svelte besteht darin, das Ergebnis der Ausführung einer Funktion als Handler zu übergeben, anstatt die Funktion zu übergeben. Zum Beispiel, wenn Sie `on:click={removeTodo(todo)}}` angeben, wird `removeTodo(todo)` ausgeführt und das Ergebnis als Handler übergeben, was nicht unsere Absicht war.

   In diesem Fall müssen Sie `on:click={() => removeTodo(todo)}}` als Handler angeben. Wenn `removeTodo()` keine Parameter erhalten würde, könnten Sie `on:event={removeTodo}` verwenden, aber nicht `on:event={removeTodo()}}`. Dies ist keine spezielle Svelte-Syntax – hier verwenden wir einfach reguläre JavaScript-[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Das ist wieder ein Fortschritt – an diesem Punkt können wir jetzt Aufgaben löschen. Wenn die _Löschen_-Schaltfläche eines Aufgabenpostens gedrückt wird, wird die betreffende Aufgabe aus dem `todos`-Array entfernt und die Benutzeroberfläche so aktualisiert, dass sie nicht mehr angezeigt wird. Darüber hinaus können wir nun die Kontrollkästchen ankreuzen und der abgeschlossene Status der betreffenden Aufgaben im `todos`-Array wird aktualisiert.

Allerdings wird die Überschrift "x von y Aufgaben abgeschlossen" nicht aktualisiert. Lesen Sie weiter, um herauszufinden, warum dies geschieht und wie wir es lösen können.

## Reaktive Aufgaben

Wie wir bereits gesehen haben, weiß Svelte jedes Mal, wenn der Wert einer zuweisbaren Variablen auf Komponentenebene geändert wird, wie die Benutzeroberfläche aktualisiert werden sollte. In unserer App wird der Wert des `todos`-Arrays jedes Mal direkt aktualisiert, wenn eine Aufgabe umgeschaltet oder gelöscht wird, sodass Svelte das DOM automatisch aktualisiert.

Dasselbe gilt jedoch nicht für `totalTodos` und `completedTodos`. In folgendem Code wird ihnen ein Wert zugewiesen, wenn die Komponente instanziiert wird und das Skript ausgeführt wird, danach werden ihre Werte jedoch nicht geändert:

```js
let totalTodos = todos.length;
let completedTodos = todos.filter((todo) => todo.completed).length;
```

Wir könnten sie nach dem Umschalten und Entfernen von Aufgaben neu berechnen, aber es gibt einen einfacheren Weg, dies zu tun.

Wir können Svelte sagen, dass wir wollen, dass unsere `totalTodos`- und `completedTodos`-Variablen reaktiv sind, indem wir sie mit `$:` voranstellen. Svelte generiert den Code, um sie automatisch zu aktualisieren, wann immer sich Daten ändern, auf die sie angewiesen sind.

> [!NOTE]
> Svelte verwendet die `$:` [JavaScript-Label-Anweisungssyntax](/de/docs/Web/JavaScript/Reference/Statements/label), um reaktive Anweisungen zu markieren. Ähnlich wie das `export`-Schlüsselwort, das für die Deklaration von Props verwendet wird, mag dies etwas fremd wirken. Dies ist ein weiteres Beispiel dafür, wie Svelte gültige JavaScript-Syntax nutzt und ihr einen neuen Zweck gibt – in diesem Fall bedeutet es "führe diesen Code erneut aus, wann immer einer der referenzierten Werte sich ändert". Sobald man sich daran gewöhnt hat, gibt es kein Zurück mehr.

Aktualisieren Sie die Definitionen Ihrer `totalTodos`- und `completedTodos`-Variablen in `src/components/Todos.svelte` wie folgt:

```js
$: totalTodos = todos.length;
$: completedTodos = todos.filter((todo) => todo.completed).length;
```

Wenn Sie Ihre App jetzt prüfen, sehen Sie, dass die Überschriftenzahlen aktualisiert werden, wenn Aufgaben abgeschlossen oder gelöscht werden. Gut gemacht!

Hinter den Kulissen wird der Svelte-Compiler unseren Code analysieren und ein Abhängigkeitsbaum erstellen; dann generiert er den JavaScript-Code, um jede reaktive Anweisung automatisch neu zu bewerten, wenn einer ihrer Abhängigkeiten aktualisiert wird. Die Reaktivität in Svelte wird auf eine sehr leichte und performante Weise implementiert, ohne Zuhörer, Setter, Getter oder andere komplexe Mechanismen zu verwenden.

## Hinzufügen neuer Aufgaben

Nun zum nächsten wichtigen Punkt für diesen Artikel – fügen wir einige Funktionalität hinzu, um neue Aufgaben hinzuzufügen.

1. Zuerst erstellen wir eine Variable, um den Text der neuen Aufgabe zu halten. Fügen Sie diese Deklaration dem `<script>`-Abschnitt der `Todos.svelte`-Datei hinzu:

   ```js
   let newTodoName = "";
   ```

2. Jetzt verwenden wir diesen Wert im `<input>` zum Hinzufügen neuer Aufgaben. Dazu müssen wir unsere `newTodoName`-Variable an das `todo-0`-Eingabefeld binden, sodass der Wert der `newTodoName`-Variable mit der `value`-Eigenschaft des Eingabefelds synchronisiert bleibt. Wir könnten so etwas tun:

   ```svelte
   <input value={newTodoName} on:keydown={(e) => newTodoName = e.target.value} />
   ```

   Jedes Mal, wenn sich der Wert der Variablen `newTodoName` ändert, wird er im `value`-Attribut des Eingabefelds wiedergegeben, und jedes Mal, wenn eine Taste im Eingabefeld gedrückt wird, aktualisieren wir den Inhalt der Variablen `newTodoName`.

   Dies ist eine manuelle Implementierung der Zwei-Wege-Datenbindung für ein Eingabefeld. Aber wir müssen das nicht tun – Svelte bietet eine einfachere Methode, um jede Eigenschaft an eine Variable zu binden, indem die [`bind:property`](https://svelte.dev/docs/element-directives#bind-property)-Direktive verwendet wird:

   ```svelte
   <input bind:value={newTodoName} />
   ```

   Lassen Sie uns dies implementieren. Aktualisieren Sie das `todo-0`-Eingabefeld wie folgt:

   ```svelte
   <input
     bind:value={newTodoName}
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

3. Eine einfache Möglichkeit, dies zu testen, besteht darin, eine reaktive Anweisung hinzuzufügen, um den Inhalt von `newTodoName` zu protokollieren. Fügen Sie diesen Code am Ende des `<script>`-Abschnitts hinzu:

   ```js
   $: console.log("newTodoName: ", newTodoName);
   ```

   > [!NOTE]
   > Wie Sie vielleicht bemerkt haben, sind reaktive Anweisungen nicht auf Variablendeklarationen beschränkt. Sie können _jede_ JavaScript-Anweisung nach dem `$:`-Zeichen setzen.

4. Versuchen Sie jetzt, zu `localhost:5042` zurückzukehren, <kbd>Strg</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> zu drücken, um die Konsolenübersicht Ihres Browsers zu öffnen und etwas in das Eingabefeld einzugeben. Sie sollten Ihre Eingaben protokolliert sehen. An diesem Punkt können Sie das reaktive `console.log()` löschen, wenn Sie möchten.
5. Als Nächstes erstellen wir eine Funktion, um die neue Aufgabe hinzuzufügen - `addTodo()` - die ein neues `todo`-Objekt dem `todos`-Array hinzufügt. Fügen Sie dies am Ende Ihres `<script>`-Blocks in `src/components/Todos.svelte` hinzu:

   ```js
   function addTodo() {
     todos.push({ id: 999, name: newTodoName, completed: false });
     newTodoName = "";
   }
   ```

   > [!NOTE]
   > Im Moment weisen wir einfach jeder Aufgabe dieselbe `id` zu, aber keine Sorge, wir werden das bald beheben.

6. Jetzt möchten wir unser HTML aktualisieren, damit `addTodo()` bei jeder Formulardiagnose aufgerufen wird. Aktualisieren Sie das `NewTodo`-Formular analog dem Starttag:

   ```svelte
   <form on:submit|preventDefault={addTodo}>
   ```

   Die [`on:eventname`](https://svelte.dev/docs/element-directives#on-eventname)-Direktive unterstützt das Hinzufügen von Modifikatoren zum DOM-Ereignis mit dem `|`-Zeichen. In diesem Fall sagt uns der Modifikator `preventDefault`, dass Svelte den Code generieren soll, um `event.preventDefault()` vor der Ausführung des Handlers aufzurufen. Schauen Sie sich den vorherigen Link an, um zu sehen, welche anderen Modifikatoren verfügbar sind.

7. Beim Versuch, neue Aufgaben hinzuzufügen, werden neue Aufgaben dem Aufgaben-Array hinzugefügt, aber unsere Benutzeroberfläche wird nicht aktualisiert. Erinnern Sie sich daran, dass in Svelte [Reaktivität durch Zuweisungen ausgelöst wird](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive). Das bedeutet, dass die Funktion `addTodo()` ausgeführt wird, das Element dem `todos`-Array hinzugefügt wird, aber Svelte erkennt nicht, dass die `push`-Methode das Array geändert hat, also wird sie die Aufgaben-`<ul>` nicht aktualisieren.

   Das Hinzufügen von `todos = todos` am Ende der Funktion `addTodo()` würde das Problem lösen, aber es scheint seltsam, dies am Ende der Funktion einfügen zu müssen. Stattdessen entfernen wir die `push()`-Methode und verwenden die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um dasselbe Ergebnis zu erzielen: Wir ordnen dem `todos`-Array einen Wert zu, der gleich dem `todos`-Array plus dem neuen Objekt ist.

   > **Hinweis:** `Array` hat mehrere mutierende Operationen: [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) und [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Durch ihre Verwendung entstehen häufig Seiteneffekte und schwer zu verfolgende Fehler. Indem wir die Spread-Syntax anstelle von `push()` verwenden, vermeiden wir die Veränderung des Arrays, was als gute Praxis angesehen wird.

   Aktualisieren Sie Ihre Funktion `addTodo()` wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: 999, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Jeder Aufgabe eine eindeutige ID geben

Wenn Sie jetzt in Ihrer App neue Aufgaben hinzufügen, können Sie eine neue Aufgabe hinzufügen und sie wird einmal in der Benutzeroberfläche angezeigt. Wenn Sie es ein zweites Mal versuchen, funktioniert es nicht, und Sie erhalten eine Konsolenmeldung mit "Error: Cannot have duplicate keys in a keyed each". Wir benötigen eindeutige IDs für unsere Aufgaben.

1. Lassen Sie uns eine `newTodoId`-Variable deklarieren, die aus der Anzahl der Aufgaben plus 1 berechnet und reaktiv gemacht wird. Fügen Sie den folgenden Code dem `<script>`-Abschnitt hinzu:

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
   > Wie Sie sehen, sind reaktive Anweisungen nicht auf Einzeiler beschränkt. Das Folgende würde auch funktionieren, ist jedoch etwas weniger lesbar: `$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1`

2. Wie erreicht Svelte dies? Der Compiler analysiert die gesamte reaktive Anweisung und erkennt, dass sie von der Variablen `totalTodos` und dem `todos`-Array abhängt. Jedes Mal, wenn einer von ihnen geändert wird, wird dieser Code neu ausgewertet und `newTodoId` entsprechend aktualisiert.

   Lassen Sie uns dies in unserer Funktion `addTodo()` verwenden. Aktualisieren Sie sie wie folgt:

   ```js
   function addTodo() {
     todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }];
     newTodoName = "";
   }
   ```

## Filtern von Aufgaben nach Status

Zum Schluss für diesen Artikel implementieren wir die Möglichkeit, unsere Aufgaben nach Status zu filtern. Wir erstellen eine Variable, um den aktuellen Filter zu halten, und eine Hilfsfunktion, die die gefilterten Aufgaben zurückgibt.

1. Fügen Sie dem Ende unseres `<script>`-Abschnitts Folgendes hinzu:

   ```js
   let filter = "all";
   const filterTodos = (filter, todos) =>
     filter === "active"
       ? todos.filter((t) => !t.completed)
       : filter === "completed"
         ? todos.filter((t) => t.completed)
         : todos;
   ```

   Wir verwenden die Variable `filter`, um den aktiven Filter zu steuern: _alle_, _aktiv_ oder _abgeschlossen_. Einfach einer dieser Werte der Filtervariablen zuweisen, aktiviert den Filter und aktualisiert die Liste der Aufgaben. Schauen wir uns an, wie das zu erreichen ist.

   Die Funktion `filterTodos()` erhält den aktuellen Filter und die Liste der Aufgaben und gibt ein neues Array von Aufgaben zurück, das entsprechend gefiltert ist.

2. Lassen Sie uns das Filter-Schaltflächen-Markup so aktualisieren, dass es dynamisch wird und den aktuellen Filter aktualisiert, wenn der Benutzer eine der Filters-Schaltflächen drückt. Aktualisieren Sie es so:

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

   Wir zeigen den aktuellen Filter an, indem wir die Klasse `btn__primary` auf die aktive Filter-Schaltfläche anwenden. Um bedingt Stilklassen auf ein Element anzuwenden, verwenden wir die `class:name={value}`-Direktive. Wenn der Wertausdruck auf einen wahrheitswertigen Wert auswertet, wird der Klassenname angewendet. Sie können viele dieser Direktiven, mit verschiedenen Bedingungen, auf dasselbe Element anwenden. Wenn wir also `class:btn__primary={filter === 'all'}` ausgeben, wird Svelte die Klasse `btn__primary` anwenden, wenn der Filter allen entspricht.

   > [!NOTE]
   > Svelte bietet eine Abkürzung, die es uns ermöglicht, `<div class:active={active}>` zu `<div class:active>` zu verkürzen, wenn die Klasse mit dem Variablennamen übereinstimmt.

   Ähnliches passiert mit `aria-pressed={filter === 'all'}`: Wenn der JavaScript-Ausdruck in geschweiften Klammern einen wahrheitswertigen Wert ergibt, wird das `aria-pressed`-Attribut dem Button zugefügt.

   Jedes Mal, wenn wir auf einen Button klicken, aktualisieren wir die Filter-Variable, indem wir `on:click={() => filter = 'all'}` ausgeben. Lesen Sie weiter, um zu erfahren, wie Svelte-Reaktivität den Rest übernehmen wird.

3. Jetzt müssen wir nur noch die Hilfsfunktion in der `{#each}`-Schleife verwenden; aktualisieren Sie sie so:

   ```svelte
   …
     <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
   …
   ```

   Nach der Analyse unseres Codes erkennt Svelte, dass unsere Funktion `filterTodos()` von den Variablen `filter` und `todos` abhängt. Und, genau wie bei jedem anderen dynamischen Ausdruck, der im Markup eingebettet ist, wann immer eine dieser Abhängigkeiten sich ändert, wird das DOM entsprechend aktualisiert. Jedes Mal, wenn sich `filter` oder `todos` ändert, wird die Funktion `filterTodos()` erneut ausgewertet und die Elemente innerhalb der Schleife werden aktualisiert.

> [!NOTE]
> Reaktivität kann manchmal schwierig sein. Svelte erkennt `filter` als eine Abhängigkeit, weil wir es im `filterTodos(filter, todos)`-Ausdruck referenzieren. `filter` ist eine zuweisbare Variable auf Komponentenebene, daher könnten wir versucht sein, sie aus den Hilfsfunktionsparametern zu entfernen und sie einfach so aufzurufen: `filterTodos(todos)`. Dies würde funktionieren, aber jetzt hat Svelte keine Möglichkeit herauszufinden, dass `{#each filterTodos(todos) }` von `filter` abhängt, und die Liste der gefilterten Aufgaben wird nicht aktualisiert, wenn sich der Filter ändert. Denken Sie immer daran, dass Svelte unseren Code analysiert, um Abhängigkeiten herauszufinden, also ist es besser, explizit darüber zu sein und nicht auf die Sichtbarkeit von zuweisbaren Variablen auf Komponentenebene zu vertrauen. Außerdem ist es eine gute Praxis, unseren Code klar und explizit darüber zu machen, welche Informationen es verwendet.

## Der bisherige Code

### Git

Um den aktuellen Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

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

Das war's für den Moment! In diesem Artikel haben wir bereits den Großteil unserer gewünschten Funktionalität implementiert. Unsere App kann Aufgaben anzeigen, hinzufügen und löschen, ihren abgeschlossenen Status umschalten, anzeigen, wie viele davon abgeschlossen sind, und Filter anwenden.

Um zusammenzufassen, haben wir die folgenden Themen behandelt:

- Erstellen und Verwenden von Komponenten
- Statisches Markup in eine Live-Vorlage verwandeln
- Einbetten von JavaScript-Ausdrücken in unser Markup
- Iterieren über Listen mit der `{#each}`-Direktive
- Übergeben von Informationen zwischen Komponenten mit Props
- Abhören von DOM-Ereignissen
- Deklarieren von reaktiven Anweisungen
- Grundlegendes Debuggen mit `console.log()` und reaktiven Anweisungen
- Binden von HTML-Eigenschaften mit der `bind:property`-Direktive
- Auslösen von Reaktivität mit Zuweisungen
- Verwenden von reaktiven Ausdrücken zur Datenfilterung
- Explizite Definition unserer reaktiven Abhängigkeiten

Im nächsten Artikel fügen wir weitere Funktionen hinzu, die es den Benutzern ermöglichen, Aufgaben zu bearbeiten.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
