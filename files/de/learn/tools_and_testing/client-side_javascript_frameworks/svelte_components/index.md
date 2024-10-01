---
title: Komponentisierung unserer Svelte-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir mit der Entwicklung unserer To-Do-Liste-App begonnen. Das Hauptziel dieses Artikels ist es, uns damit zu beschäftigen, wie wir unsere App in überschaubare Komponenten unterteilen und Informationen zwischen ihnen austauschen können. Wir werden unsere App komponentisieren und dann weitere Funktionen hinzufügen, damit Benutzer bestehende Komponenten aktualisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen vertraut sein und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie wir unsere App in Komponenten aufteilen und Informationen zwischen ihnen teilen können.
      </td>
    </tr>
  </tbody>
</table>

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erhalten, führen Sie aus:

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um parallel mit uns im REPL zu arbeiten, beginnen Sie bei

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Die App in Komponenten aufteilen

In Svelte besteht eine Anwendung aus einer oder mehreren Komponenten. Eine Komponente ist ein wiederverwendbarer, eigenständiger Codeblock, der HTML, CSS und JavaScript kapselt, die zusammengehören, und in einer `.svelte`-Datei geschrieben ist. Komponenten können groß oder klein sein, sind aber normalerweise klar definiert: Die effektivsten Komponenten erfüllen einen einzigen, offensichtlichen Zweck.

Die Vorteile der Definition von Komponenten sind vergleichbar mit der allgemeiner bewährten Praxis, Ihren Code in überschaubare Teile zu organisieren. Dies hilft Ihnen zu verstehen, wie sie sich zueinander verhalten, fördert die Wiederverwendung und macht Ihren Code einfacher nachvollziehbar, wartbar und erweiterbar.

Aber wie wissen Sie, was in eine eigene Komponente aufgeteilt werden sollte?

Dafür gibt es keine festen Regeln. Manche Menschen bevorzugen einen intuitiven Ansatz und beginnen damit, das Markup zu betrachten und um jede Komponente und Unterkomponente, die eine eigene Logik zu haben scheint, Kästchen zu zeichnen.

Andere wenden dieselben Techniken an, die sie verwenden, um zu entscheiden, ob Sie eine neue Funktion oder ein neues Objekt erstellen sollten. Eine solche Technik ist das Einzelverantwortungsprinzip – das heißt, eine Komponente sollte idealerweise nur eine Sache tun. Wenn sie zu groß wird, sollte sie in kleinere Unterkomponenten aufgeteilt werden.

Beide Ansätze sollten sich ergänzen und Ihnen helfen zu entscheiden, wie Sie Ihre Komponenten am besten organisieren.

Letztendlich werden wir unsere App in folgende Komponenten aufteilen:

- `Alert.svelte`: Eine allgemeine Benachrichtigungsbox, um über durchgeführte Aktionen zu kommunizieren.
- `NewTodo.svelte`: Das Texteingabefeld und die Schaltfläche, die es Ihnen ermöglichen, ein neues To-Do-Element einzugeben.
- `FilterButton.svelte`: Die _Alle_, _Aktiv_ und _Abgeschlossen_ Schaltflächen, die es Ihnen ermöglichen, Filter auf die angezeigten To-Do-Elemente anzuwenden.
- `TodosStatus.svelte`: Die "x von y Elementen abgeschlossen" Überschrift.
- `Todo.svelte`: Ein einzelnes To-Do-Element. Jedes sichtbare To-Do-Element wird in einer separaten Kopie dieser Komponente angezeigt.
- `MoreActions.svelte`: Die _Alle überprüfen_ und _Abgeschlossene entfernen_ Schaltflächen am unteren Rand der Benutzeroberfläche, mit denen Sie Massenaktionen auf den To-Do-Elementen ausführen können.

![grafische Darstellung der Liste der Komponenten in unserer App](01-todo-components.png)

In diesem Artikel werden wir uns darauf konzentrieren, die `FilterButton` und `Todo` Komponenten zu erstellen; auf die anderen kommen wir in zukünftigen Artikeln zurück.

Lassen Sie uns beginnen.

> [!NOTE]
> Während des Erstellens unserer ersten Komponenten werden wir auch verschiedene Techniken zum Kommunizieren zwischen Komponenten kennenlernen, sowie die Vor- und Nachteile jedes Ansatzes.

## Extrahieren unserer Filterkomponente

Wir beginnen mit der Erstellung unserer `FilterButton.svelte`.

1. Erstellen Sie zunächst eine neue Datei `components/FilterButton.svelte`.
2. In dieser Datei deklarieren wir eine `filter` Prop und kopieren dann das relevante Markup aus `Todos.svelte` hinein. Fügen Sie den folgenden Inhalt in die Datei ein:

   ```svelte
   <script>
     export let filter = 'all'
   </script>

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

3. Zurück in unserer `Todos.svelte` Komponente möchten wir unsere `FilterButton` Komponente verwenden. Zuerst müssen wir sie importieren. Fügen Sie die folgende Zeile oben im `Todos.svelte <script>` Abschnitt hinzu:

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. Ersetzen Sie jetzt das `<div class="filters...` Element durch einen Aufruf der `FilterButton` Komponente, die den aktuellen Filter als Prop nimmt. Die untenstehende Zeile ist alles, was Sie brauchen:

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> Denken Sie daran, dass, wenn der HTML-Attributname und die Variable übereinstimmen, sie durch `{variable}` ersetzt werden können. Deshalb konnten wir `<FilterButton filter={filter} />` durch `<FilterButton {filter} />` ersetzen.

Bis hierher gut! Lassen Sie uns die App jetzt ausprobieren. Sie werden bemerken, dass beim Klick auf die Filtersymbole diese ausgewählt werden und sich der Stil entsprechend aktualisiert. Aber wir haben ein Problem: die To-Dos werden nicht gefiltert. Das liegt daran, dass die `filter` Variable vom `Todos`-Komponente zur `FilterButton`-Komponente durch die Prop abfließt, aber Änderungen, die in der `FilterButton`-Komponente auftreten, nicht an das übergeordnete Element zurückfließen – die Datenbindung ist standardmäßig unidirektional. Werfen wir einen Blick darauf, wie wir dies lösen können.

## Daten zwischen Komponenten teilen: Handler als Prop übergeben

Eine Möglichkeit, Kindkomponenten ihre Eltern über Änderungen zu benachrichtigen, besteht darin, einen Handler als Prop zu übergeben. Die Kindkomponente wird den Handler ausführen und die benötigten Informationen als Parameter übergeben, und der Handler wird den Zustand des Elternteils ändern.

In unserem Fall erhält die `FilterButton` Komponente einen `onclick` Handler von ihrem Elternteil. Jedes Mal, wenn der Benutzer auf eine Filtertaste klickt, ruft das Kind den `onclick` Handler auf und gibt den ausgewählten Filter als Parameter an den Eltern weiter.

Wir deklarieren einfach die `onclick` Prop und weisen zur Fehlervermeidung einen Dummy-Handler zu, wie folgt:

```js
export let onclick = (clicked) => {};
```

Und wir deklarieren die reaktive Anweisung `$: onclick(filter)`, um den `onclick` Handler immer dann aufzurufen, wenn die `filter` Variable aktualisiert wird.

1. Der `<script>` Abschnitt unserer `FilterButton` Komponente sollte schließlich so aussehen. Aktualisieren Sie ihn jetzt:

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. Wenn wir nun `FilterButton` innerhalb `Todos.svelte` aufrufen, müssen wir den Handler angeben. Aktualisieren Sie es wie folgt:

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

Wenn eine Filtertaste geklickt wird, aktualisieren wir einfach die Filtervariable mit dem neuen Filter. Jetzt funktioniert unsere `FilterButton` Komponente wieder.

## Einfachere bidirektionale Datenbindung mit der bind-Anweisung

Im vorherigen Beispiel haben wir festgestellt, dass unsere `FilterButton` Komponente nicht funktionierte, weil unser Anwendungsstatus durch die `filter` Prop von übergeordnet zu untergeordnet floss, aber nicht zurück. Daher haben wir eine `onclick` Prop hinzugefügt, um das Kind mit dem neuen `filter` Wert mit dem Elternteil kommunizieren zu lassen.

Es funktioniert gut, aber Svelte bietet uns einen einfacheren und direkteren Weg, um eine bidirektionale Datenbindung zu erreichen. Daten fließen normalerweise durch Props von übergeordnet zu untergeordnet. Wenn wir wollen, dass sie auch umgekehrt, von untergeordnet zu übergeordnet fließen, können wir die [`bind:` Direktive](https://svelte.dev/docs/element-directives#bind-property) verwenden.

Mit `bind` teilen wir Svelte mit, dass Änderungen an der `filter` Prop in der `FilterButton` Komponente zurück an die übergeordnete Komponente `Todos` propagiert werden sollen. Das heißt, wir binden den Wert der `filter` Variablen im Elternteil an ihren Wert im Kind.

1. In `Todos.svelte` aktualisieren Sie den Aufruf der `FilterButton` Komponente wie folgt:

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Wie üblich bietet Svelte uns eine praktische Abkürzung: `bind:value={value}` entspricht `bind:value`. Sie könnten in dem obigen Beispiel also einfach `<FilterButton bind:filter />` schreiben.

2. Die Kindkomponente kann nun den Wert der Filtervariablen des Elternteils ändern, daher benötigen wir die `onclick` Prop nicht mehr. Ändern Sie das `<script>` Element Ihrer `FilterButton` Komponente wie folgt:

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. Versuchen Sie Ihre App erneut, und Sie sollten sehen, dass Ihre Filter weiterhin korrekt funktionieren.

## Erstellen unserer Todo-Komponente

Jetzt erstellen wir eine `Todo` Komponente, um jedes einzelne To-Do zu kapseln, einschließlich des Kontrollkästchens und einiger Bearbeitungslogik, damit Sie ein bestehendes To-Do ändern können.

Unsere `Todo` Komponente erhält ein einzelnes `todo` Objekt als Prop. Lassen Sie uns die `todo` Prop deklarieren und den Code aus der `Todos` Komponente verschieben. Vorerst werden wir den Aufruf von `removeTodo` durch eine Benachrichtigung ersetzen. Wir fügen diese Funktion später wieder hinzu.

1. Erstellen Sie eine neue Komponenten-Datei `components/Todo.svelte`.
2. Fügen Sie den folgenden Inhalt in diese Datei ein:

   ```svelte
   <script>
     export let todo
   </script>

   <div class="stack-small">
     <div class="c-cb">
       <input type="checkbox" id="todo-{todo.id}"
         on:click={() => todo.completed = !todo.completed}
         checked={todo.completed}
       />
       <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
     </div>
     <div class="btn-group">
       <button type="button" class="btn">
         Edit <span class="visually-hidden">{todo.name}</span>
       </button>
       <button type="button" class="btn btn__danger" on:click={() => alert('not implemented')}>
         Delete <span class="visually-hidden">{todo.name}</span>
       </button>
     </div>
   </div>
   ```

3. Jetzt müssen wir unsere `Todo` Komponente in `Todos.svelte` importieren. Gehen Sie jetzt zu dieser Datei und fügen Sie die folgende `import` Anweisung unter Ihrer vorherigen hinzu:

   ```js
   import Todo from "./Todo.svelte";
   ```

4. Als Nächstes müssen wir unseren `{#each}` Block aktualisieren, um eine `<Todo>` Komponente für jedes To-Do einzuschließen, anstatt des Codes, der in `Todo.svelte` verschoben wurde. Wir übergeben das aktuelle `todo` Objekt auch als Prop an die Komponente.

   Aktualisieren Sie den `{#each}` Block innerhalb `Todos.svelte` wie folgt:

   ```svelte
   <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
     <li class="todo">
       <Todo {todo} />
     </li>
     {:else}
     <li>Nothing to do here!</li>
     {/each}
   </ul>
   ```

Die To-Do-Liste wird auf der Seite angezeigt und die Kontrollkästchen sollten funktionieren (versuchen Sie, einige zu aktivieren/deaktivieren und dann zu beobachten, dass die Filter weiterhin wie erwartet funktionieren), aber unsere "x von y Elementen abgeschlossen" Statusüberschrift wird sich nicht mehr entsprechend aktualisieren. Das liegt daran, dass unsere `Todo` Komponente das To-Do über die Prop empfängt, aber keine Informationen an den Eltern zurücksendet. Wir werden dies später beheben.

## Daten zwischen Komponenten teilen: props-down, events-up Muster

Die `bind`-Direktive ist ziemlich unkompliziert und ermöglicht es Ihnen, Daten zwischen einer Eltern- und Kindkomponente mit minimalem Aufwand zu teilen. Wenn Ihre Anwendung jedoch größer und komplexer wird, kann es leicht schwierig werden, den Überblick über alle gebundenen Werte zu behalten. Ein anderer Ansatz ist das "props-down, events-up" Kommunikationsmuster.

Im Wesentlichen beruht dieses Muster darauf, dass Kindkomponenten Daten von ihren Eltern über Props empfangen und Elternkomponenten ihren Zustand aktualisieren, indem sie Ereignisse behandeln, die von Kindkomponenten ausgesendet werden. So fließen Props von übergeordnet zu untergeordnet und Ereignisse von untergeordnet zu übergeordnet. Dieses Muster etabliert einen bidirektionalen Informationsfluss, der vorhersehbar und leichter nachvollziehbar ist.

Schauen wir uns an, wie wir unsere eigenen Ereignisse auslösen können, um die fehlende _Löschen_ Funktionalität erneut zu implementieren.

Um benutzerdefinierte Ereignisse zu erstellen, verwenden wir das `createEventDispatcher` Hilfsmittel. Dies gibt eine `dispatch()` Funktion zurück, mit der wir benutzerdefinierte Ereignisse auslösen können. Wenn Sie ein Ereignis auslösen, müssen Sie den Namen des Ereignisses übergeben und optional ein Objekt mit zusätzlichen Informationen, die Sie jedem Zuhörer übergeben möchten. Diese zusätzlichen Daten stehen in der `detail` Eigenschaft des Ereignisobjekts zur Verfügung.

> [!NOTE]
> Benutzerdefinierte Ereignisse in Svelte haben dieselbe API wie reguläre DOM-Ereignisse. Darüber hinaus können Sie ein Ereignis an Ihre übergeordnete Komponente weiterleiten, indem Sie `on:event` ohne einen Handler angeben.

Wir werden unsere `Todo` Komponente bearbeiten, um ein `remove` Ereignis auszulösen, das das zu entfernende To-Do als zusätzliche Informationen übergibt.

1. Fügen Sie zunächst die folgenden Zeilen am Anfang des `<script>` Abschnitts der `Todo` Komponente hinzu:

   ```js
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();
   ```

2. Aktualisieren Sie nun den _Löschen_ Button im Markup-Abschnitt derselben Datei wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Mit `dispatch('remove', todo)` lösen wir ein `remove` Ereignis aus und übergeben als zusätzliche Daten das zu löschende `todo`. Der Handler wird mit einem verfügbaren Ereignisobjekt aufgerufen, wobei die zusätzlichen Daten in der `event.detail` Eigenschaft verfügbar sind.

3. Jetzt müssen wir von innerhalb `Todos.svelte` auf dieses Ereignis hören und entsprechend handeln. Gehen Sie zurück zu dieser Datei und aktualisieren Sie Ihren `<Todo>` Komponentenaufruf wie folgt:

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   Unser Handler erhält den `e` Parameter (das Ereignisobjekt), das wie zuvor beschrieben das zu löschende To-Do in der `detail` Eigenschaft enthält.

4. An diesem Punkt, wenn Sie Ihre App erneut ausprobieren, sollten Sie sehen, dass die _Löschen_ Funktionalität jetzt wieder funktioniert. Unser benutzerdefiniertes Ereignis hat also wie erwartet funktioniert. Außerdem sendet der `remove` Ereignis-Listener die Datenänderung an den Eltern zurück, sodass sich unsere "x von y Elementen abgeschlossen" Statusüberschrift entsprechend aktualisiert, wenn To-Dos gelöscht werden.

Jetzt kümmern wir uns um das `update` Ereignis, damit unsere Elternkomponente von jedem geänderten To-Do benachrichtigt werden kann.

## To-Dos aktualisieren

Wir müssen noch die Funktionalität implementieren, die es uns ermöglicht, bestehende To-Dos zu bearbeiten. Wir müssen einen Bearbeitungsmodus in der `Todo` Komponente einbeziehen. Beim Eintritt in den Bearbeitungsmodus zeigen wir ein `<input>` Feld an, um den aktuellen Namen des To-Dos zu bearbeiten, mit zwei Schaltflächen zur Bestätigung oder zum Abbruch unserer Änderungen.

### Handling der Ereignisse

1. Wir benötigen eine Variable, um zu verfolgen, ob wir uns im Bearbeitungsmodus befinden, und eine andere, um den Namen der aktualisierten Aufgabe zu speichern. Fügen Sie die folgenden Variablendefinitionen am unteren Rand des `<script>` Abschnitts der `Todo` Komponente hinzu:

   ```js
   let editing = false; // track editing mode
   let name = todo.name; // hold the name of the to-do being edited
   ```

2. Wir müssen entscheiden, welche Ereignisse unsere `Todo` Komponente auslösen wird:

   - Wir könnten verschiedene Ereignisse für den Statuswechsel und die Bearbeitung des Namens auslösen (zum Beispiel `updateTodoStatus` und `updateTodoName`).
   - Oder wir könnten einen allgemeineren Ansatz wählen und ein einzelnes `update` Ereignis für beide Operationen auslösen.

   Wir werden den zweiten Ansatz wählen, um eine andere Technik zu demonstrieren. Der Vorteil dieses Ansatzes ist, dass wir später mehr Felder zu den To-Dos hinzufügen und trotzdem alle Updates mit demselben Ereignis verwalten können.

   Lassen Sie uns eine `update()` Funktion erstellen, die die Änderungen empfängt und ein Update-Ereignis mit dem modifizierten To-Do auslöst. Fügen Sie die folgende Funktion erneut an den unteren Rand des `<script>` Abschnitts hinzu:

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Hier verwenden wir das [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das Original-To-Do mit den darauf angewendeten Änderungen zurückzugeben.

3. Als nächstes erstellen wir verschiedene Funktionen, um jede Benutzeraktion zu behandeln. Wenn sich das To-Do im Bearbeitungsmodus befindet, kann der Benutzer die Änderungen speichern oder abbrechen. Wenn es sich nicht im Bearbeitungsmodus befindet, kann der Benutzer das To-Do löschen, bearbeiten oder seinen Status zwischen abgeschlossen und aktiv umschalten.

   Fügen Sie den folgenden Satz von Funktionen unter Ihrer vorherigen Funktion hinzu, um diese Aktionen zu verarbeiten:

   ```js
   function onCancel() {
     name = todo.name; // restores name to its initial value and
     editing = false; // and exit editing mode
   }

   function onSave() {
     update({ name }); // updates todo name
     editing = false; // and exit editing mode
   }

   function onRemove() {
     dispatch("remove", todo); // emit remove event
   }

   function onEdit() {
     editing = true; // enter editing mode
   }

   function onToggle() {
     update({ completed: !todo.completed }); // updates todo status
   }
   ```

### Aktualisierung des Markups

Jetzt müssen wir das Markup unserer `Todo` Komponente aktualisieren, um die obigen Funktionen bei den entsprechenden Aktionen aufzurufen.

Um den Bearbeitungsmodus zu handhaben, verwenden wir die `editing` Variable, die ein Boolean ist. Wenn sie `true` ist, sollte das `<input>` Feld zur Bearbeitung des To-Do Namens und die Schaltflächen Abbrechen und Speichern angezeigt werden. Wenn es sich nicht im Bearbeitungsmodus befindet, wird das Kontrollkästchen, der To-Do Name und die Schaltflächen zur Bearbeitung und Löschung des To-Dos angezeigt.

Um dies zu erreichen, verwenden wir einen [`if` Block](https://svelte.dev/docs/logic-blocks#if). Der `if` Block rendert bedingt ein Markup. Beachten Sie, dass er das Markup nicht einfach basierend auf der Bedingung zeigt oder ausblendet – er wird die Elemente je nach Bedingung dynamisch aus dem DOM hinzufügen und entfernen.

Wenn `editing` `true` ist, wird Svelte z.B. das Aktualisierungsformular anzeigen; wenn es `false` ist, wird Svelte es aus dem DOM entfernen und das Kontrollkästchen hinzufügen. Dank der Reaktivität von Svelte reicht es aus, den Wert der Bearbeitung-Variable zuzuweisen, um die richtigen HTML-Elemente anzuzeigen.

Das folgende gibt Ihnen eine Vorstellung davon, wie die grundlegende Struktur des `if` Blocks aussieht:

```svelte
<div class="stack-small">
  {#if editing}
  <!-- markup for editing to-do: label, input text, Cancel and Save Button -->
  {:else}
  <!-- markup for displaying to-do: checkbox, label, Edit and Delete Button -->
  {/if}
</div>
```

Der nicht-bearbeitbare Abschnitt - also der `{:else}` Teil (untere Hälfte) des `if` Blocks - wird sehr ähnlich zu dem sein, den wir in unserer `Todos` Komponente hatten. Der einzige Unterschied besteht darin, dass wir `onToggle()`, `onEdit()` und `onRemove()` aufrufen, abhängig von der Benutzeraktion.

```svelte
{:else}
  <div class="c-cb">
    <input type="checkbox" id="todo-{todo.id}"
      on:click={onToggle} checked={todo.completed}
    >
    <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
  </div>
  <div class="btn-group">
    <button type="button" class="btn" on:click={onEdit}>
      Edit<span class="visually-hidden"> {todo.name}</span>
    </button>
    <button type="button" class="btn btn__danger" on:click={onRemove}>
      Delete<span class="visually-hidden"> {todo.name}</span>
    </button>
  </div>
{/if}
</div>
```

Es ist erwähnenswert:

- Wenn der Benutzer die _Bearbeiten_ Schaltfläche drückt, führen wir `onEdit()` aus, was die `editing` Variable einfach auf `true` setzt.
- Wenn der Benutzer auf das Kontrollkästchen klickt, rufen wir die `onToggle()` Funktion auf, die `update()` ausführt und ein Objekt mit dem neuen `completed` Wert als Parameter übergibt.
- Die `update()` Funktion löst das `update` Ereignis aus und übergibt als zusätzliche Information eine Kopie des ursprünglichen To-Dos mit den angewendeten Änderungen.
- Schließlich löst die `onRemove()` Funktion das `remove` Ereignis aus und übergibt das zu löschende `todo` als zusätzliche Daten.

Die Bearbeitungsoberfläche (die obere Hälfte) enthält ein `<input>` Feld und zwei Schaltflächen, um die Änderungen abzubrechen oder zu speichern:

```svelte
<div class="stack-small">
{#if editing}
  <form on:submit|preventDefault={onSave} class="stack-small" on:keydown={(e) => e.key === 'Escape' && onCancel()}>
    <div class="form-group">
      <label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
      <input bind:value={name} type="text" id="todo-{todo.id}" autoComplete="off" class="todo-text" />
    </div>
    <div class="btn-group">
      <button class="btn todo-cancel" on:click={onCancel} type="button">
        Cancel<span class="visually-hidden">renaming {todo.name}</span>
        </button>
      <button class="btn btn__primary todo-edit" type="submit" disabled={!name}>
        Save<span class="visually-hidden">new name for {todo.name}</span>
      </button>
    </div>
  </form>
{:else}
[...]
```

Wenn der Benutzer die _Bearbeiten_ Schaltfläche drückt, wird die `editing` Variable auf `true` gesetzt, und Svelte wird das Markup im `{:else}`-Teil aus dem DOM entfernen und es durch das Markup im `{#if}` Abschnitt ersetzen.

Die `value` Eigenschaft des `<input>` wird an die `name` Variable gebunden und die Buttons, um die Bearbeitung abzubrechen und zu speichern, rufen `onCancel()` und `onSave()` auf (wir haben diese Funktionen zuvor hinzugefügt):

- Wenn `onCancel()` aufgerufen wird, wird `name` auf den ursprünglichen Wert zurückgesetzt (beim Übergeben als Prop) und wir verlassen den Bearbeitungsmodus (indem wir `editing` auf `false` setzen).
- Wenn `onSave()` aufgerufen wird, führen wir die `update()` Funktion aus – wir übergeben ihr den bearbeiteten `name` – und verlassen den Bearbeitungsmodus.

Wir deaktivieren auch die _Speichern_ Schaltfläche, wenn das `<input>` leer ist, indem wir die `disabled={!name}` Eigenschaft verwenden, und ermöglichen es dem Benutzer, die Bearbeitung mit der <kbd>Escape</kbd> Taste abzubrechen, so:

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

Wir verwenden auch `todo.id`, um eindeutige IDs für die neuen Eingangskontrollen und -etiketten zu erstellen.

1. Das vollständige aktualisierte Markup unserer `Todo` Komponente sieht wie folgt aus. Aktualisieren Sie jetzt Ihres:

   ```svelte
   <div class="stack-small">
   {#if editing}
     <!-- markup for editing todo: label, input text, Cancel and Save Button -->
     <form on:submit|preventDefault={onSave} class="stack-small" on:keydown={(e) => e.key === 'Escape' && onCancel()}>
       <div class="form-group">
         <label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
         <input bind:value={name} type="text" id="todo-{todo.id}" autoComplete="off" class="todo-text" />
       </div>
       <div class="btn-group">
         <button class="btn todo-cancel" on:click={onCancel} type="button">
           Cancel<span class="visually-hidden">renaming {todo.name}</span>
           </button>
         <button class="btn btn__primary todo-edit" type="submit" disabled={!name}>
           Save<span class="visually-hidden">new name for {todo.name}</span>
         </button>
       </div>
     </form>
   {:else}
     <!-- markup for displaying todo: checkbox, label, Edit and Delete Button -->
     <div class="c-cb">
       <input type="checkbox" id="todo-{todo.id}"
         on:click={onToggle} checked={todo.completed}
       >
       <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
     </div>
     <div class="btn-group">
       <button type="button" class="btn" on:click={onEdit}>
         Edit<span class="visually-hidden"> {todo.name}</span>
       </button>
       <button type="button" class="btn btn__danger" on:click={onRemove}>
         Delete<span class="visually-hidden"> {todo.name}</span>
       </button>
     </div>
   {/if}
   </div>
   ```

   > [!NOTE]
   > Wir könnten dies weiter in zwei verschiedene Komponenten aufteilen, eine für die Bearbeitung des To-Dos und eine andere für die Anzeige. Letztendlich hängt es davon ab, wie wohl Sie sich mit diesem Komplexitätsgrad in einer einzigen Komponente fühlen. Sie sollten auch in Erwägung ziehen, ob eine weitere Aufteilung es ermöglichen würde, diese Komponente in einem anderen Kontext wiederzuverwenden.

2. Um die Update-Funktionalität zum Laufen zu bringen, müssen wir das `update` Ereignis von der `Todos` Komponente aus behandeln. Fügen Sie in ihrem `<script>` Abschnitt diesen Handler ein:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   Wir finden das `todo` nach `id` in unserem `todos` Array und aktualisieren dessen Inhalt über Spread-Syntax. In diesem Fall hätten wir auch einfach `todos[i] = todo` verwenden können, aber diese Implementierung ist robuster, da sie der `Todo` Komponente erlaubt, nur die aktualisierten Teile des To-Dos zurückzugeben.

3. Als nächstes müssen wir auf das `update` Ereignis bei unserem `<Todo>` Komponentenaufruf hören und unsere `updateTodo()` Funktion ausführen, wenn dies geschieht, um den `name` und den `completed` Status zu ändern. Aktualisieren Sie Ihren \<Todo> Call wie folgt:

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. Probieren Sie Ihre App erneut aus, und Sie sollten sehen, dass Sie To-Dos löschen, hinzufügen, bearbeiten, die Bearbeitung abbrechen und den Abschlussstatus umschalten können. Und unsere "x von y Elementen abgeschlossen" Statusüberschrift wird sich jetzt entsprechend aktualisieren, wenn To-Dos abgeschlossen werden.

Wie Sie sehen können, ist es einfach, das "props-down, events-up" Muster in Svelte zu implementieren. Dennoch kann `bind` für einfache Komponenten eine gute Wahl sein; Svelte lässt Sie wählen.

> [!NOTE]
> Svelte bietet fortgeschrittenere Mechanismen, um Informationen zwischen Komponenten zu teilen: die [Context API](https://svelte.dev/docs/svelte#setcontext) und [Stores](https://svelte.dev/docs/svelte-store). Die Context API bietet einen Mechanismus, mit dem Komponenten und ihre Nachkommen "miteinander sprechen" können, ohne Daten und Funktionen als Props zu übergeben oder viele Ereignisse auszulösen. Stores ermöglichen es Ihnen, reaktive Daten zwischen Komponenten zu teilen, die nicht hierarchisch miteinander verbunden sind. Wir werden uns später in der Serie mit Stores befassen.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Zusammenfassung

Jetzt haben wir alle erforderlichen Funktionen unserer App in Betrieb. Wir können To-Dos anzeigen, hinzufügen, bearbeiten und löschen, als abgeschlossen markieren und nach Status filtern.

In diesem Artikel haben wir folgende Themen behandelt:

- Extraktion von Funktionalität in eine neue Komponente
- Informationen mit einem über eine Prop empfangenen Handler von Kind zu Elternteil übergeben
- Informationen mit der `bind`-Direktive von Kind zu Elternteil übergeben
- Bedingtes Rendern von Markup-Blöcken mit dem `if` Block
- Umsetzung des "props-down, events-up" Kommunikationsmusters
- Erstellen und Hören von benutzerdefinierten Ereignissen

Im nächsten Artikel werden wir die Komponentenisierung unserer App fortsetzen und einige fortgeschrittene Techniken zur Arbeit mit dem DOM betrachten.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
