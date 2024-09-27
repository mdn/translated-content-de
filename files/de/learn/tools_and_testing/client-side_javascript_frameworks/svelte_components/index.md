---
title: Komponenten in unserer Svelte-App erstellen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir begonnen, unsere To-Do-Liste-App zu entwickeln. Das Hauptziel dieses Artikels ist es, zu untersuchen, wie wir unsere App in überschaubare Komponenten aufteilen und Informationen zwischen ihnen teilen können. Wir werden unsere App in Komponenten untergliedern und dann zusätzliche Funktionen hinzufügen, die es den Benutzern ermöglichen, bestehende Komponenten zu aktualisieren.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/den Befehlszeile</a
          >haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie wir unsere App in Komponenten unterteilen und Informationen zwischen ihnen teilen können.
      </td>
    </tr>
  </tbody>
</table>

## Kodieren Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Status der App zu erhalten, führen Sie

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu kodieren, beginnen Sie bei

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Die App in Komponenten aufteilen

In Svelte wird eine Anwendung aus einer oder mehreren Komponenten zusammengesetzt. Eine Komponente ist ein wiederverwendbarer, eigenständiger Block von Code, der HTML, CSS und JavaScript kapselt, die zusammengehören und in eine `.svelte`-Datei geschrieben werden. Komponenten können groß oder klein sein, sind aber normalerweise klar definiert: die effektivsten Komponenten erfüllen einen einzigen, offensichtlichen Zweck.

Die Vorteile der Definition von Komponenten sind mit der allgemeineren Best Practice vergleichbar, Ihren Code in überschaubare Teile zu organisieren. Es hilft Ihnen zu verstehen, wie sie zueinander in Beziehung stehen, fördert die Wiederverwendung und erleichtert es Ihnen, den Code zu verstehen, zu warten und zu erweitern.

Aber wie wissen Sie, was in eine eigene Komponente aufgeteilt werden sollte?

Es gibt keine festen Regeln dafür. Einige Leute bevorzugen einen intuitiven Ansatz und beginnen, sich das Markup anzusehen und Kästchen um jede Komponente und Unterkomponente zu zeichnen, die anscheinend ihre eigene Logik hat.

Andere Leute wenden die gleichen Techniken an, die sie verwenden, um zu entscheiden, ob sie eine neue Funktion oder ein neues Objekt erstellen sollten. Eine solche Technik ist das Single-Responsibility-Prinzip — das heißt, eine Komponente sollte idealerweise nur eine Aufgabe erledigen. Wenn sie wächst, sollte sie in kleinere Unterkomponenten aufgeteilt werden.

Beide Ansätze sollten einander ergänzen und Ihnen helfen, zu entscheiden, wie Sie Ihre Komponenten besser organisieren können.

Letztendlich werden wir unsere App in die folgenden Komponenten aufteilen:

- `Alert.svelte`: Eine allgemeine Benachrichtigungsbox zur Kommunikation von durchgeführten Aktionen.
- `NewTodo.svelte`: Das Texteingabefeld und die Schaltfläche, die es Ihnen ermöglichen, ein neues To-Do-Element einzugeben.
- `FilterButton.svelte`: Die _All_, _Active_ und _Completed_ Buttons, die es Ihnen ermöglichen, Filter auf die angezeigten To-Do-Elemente anzuwenden.
- `TodosStatus.svelte`: Die Überschrift "x von y Elementen abgeschlossen".
- `Todo.svelte`: Ein einzelnes To-Do-Element. Jedes sichtbare To-Do-Element wird in einer separaten Kopie dieser Komponente angezeigt.
- `MoreActions.svelte`: Die _Check All_ und _Remove Completed_ Schaltflächen am unteren Rand der Benutzeroberfläche, die es Ihnen ermöglichen, Massenaktionen auf die To-Do-Elemente durchzuführen.

![grafische Darstellung der Liste der Komponenten in unserer App](01-todo-components.png)

In diesem Artikel konzentrieren wir uns auf die Erstellung der `FilterButton` und `Todo` Komponenten; die anderen behandeln wir in zukünftigen Artikeln.

Lassen Sie uns anfangen.

> [!NOTE]
> Beim Erstellen unserer ersten Komponenten lernen wir auch verschiedene Techniken, um zwischen Komponenten zu kommunizieren, und die Vor- und Nachteile jeder Technik.

## Unsere Filter-Komponente extrahieren

Wir beginnen mit der Erstellung unserer `FilterButton.svelte`.

1. Erstellen Sie zunächst eine neue Datei, `components/FilterButton.svelte`.
2. Deklarieren Sie in dieser Datei eine `filter`-prop und kopieren Sie dann das relevante Markup aus `Todos.svelte` hinein. Fügen Sie den folgenden Inhalt in die Datei ein:

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

3. In unserer `Todos.svelte`-Komponente möchten wir nun unsere `FilterButton`-Komponente verwenden. Zuerst müssen wir sie importieren. Fügen Sie die folgende Zeile oben im `<script>`-Abschnitt von `Todos.svelte` hinzu:

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. Ersetzen Sie jetzt das `<div class="filters...`-Element durch einen Aufruf der `FilterButton`-Komponente, die den aktuellen Filter als prop übernimmt. Die folgende Zeile ist alles, was Sie brauchen:

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> Denken Sie daran, dass, wenn der Name des HTML-Attributs und die Variable übereinstimmen, sie durch `{variable}` ersetzt werden können. Deshalb konnten wir `<FilterButton filter={filter} />` durch `<FilterButton {filter} />` ersetzen.

Bis jetzt gut! Lassen Sie uns die App jetzt ausprobieren. Sie werden feststellen, dass, wenn Sie auf die Filter-Schaltflächen klicken, sie ausgewählt werden und sich der Stil entsprechend aktualisiert. Aber wir haben ein Problem: Die To-Dos werden nicht gefiltert. Das liegt daran, dass die `filter`-Variable vom `Todos`-Komponente durch die prop zum `FilterButton`-Komponente fließt, aber Änderungen, die im `FilterButton`-Komponente auftreten, nicht zu ihrem Elternteil zurückfließen — das Daten-Binding ist standardmäßig einseitig. Lassen Sie uns einen Weg finden, das zu lösen.

## Daten zwischen Komponenten teilen: Einen Handler als Prop übergeben

Eine Möglichkeit, den Kindkomponenten mitzuteilen, dass sich etwas geändert hat, besteht darin, einen Handler als Prop zu übergeben. Die Kindkomponente führt den Handler aus und übergibt die benötigten Informationen als Parameter, und der Handler ändert den Zustand des Elternteils.

In unserem Fall empfängt die `FilterButton`-Komponente einen `onclick`-Handler von ihrem Elternteil. Jedes Mal, wenn der Benutzer auf eine Filter-Schaltfläche klickt, ruft die Kindkomponente den `onclick`-Handler auf und übergibt den ausgewählten Filter als Parameter zurück an den Elternteil.

Wir werden einfach die `onclick`-prop deklarieren und einen Dummy-Handler zuweisen, um Fehler zu verhindern, so:

```js
export let onclick = (clicked) => {};
```

Und wir werden die reaktive Anweisung `$: onclick(filter)` deklarieren, um den `onclick`-Handler aufzurufen, wann immer die `filter`-Variable aktualisiert wird.

1. Der `<script>`-Abschnitt unserer `FilterButton`-Komponente sollte letztlich so aussehen. Aktualisieren Sie ihn jetzt:

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. Wenn wir nun `FilterButton` in `Todos.svelte` aufrufen, müssen wir den Handler angeben. Aktualisieren Sie ihn so:

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

Wenn eine beliebige Filter-Schaltfläche geklickt wird, aktualisieren wir einfach die filter-Variable mit dem neuen Filter. Jetzt wird unsere `FilterButton`-Komponente wieder funktionieren.

## Einfacheres beidseitiges Daten-Binding mit der bind-Direktive

Im vorherigen Beispiel haben wir festgestellt, dass unsere `FilterButton`-Komponente nicht funktionierte, weil der Anwendungszustand über die `filter`-prop vom Elternteil zur Kindkomponente floss, aber nicht zurückfloss. Also fügten wir eine `onclick`-prop hinzu, damit die Kindkomponente dem Elternteil den neuen `filter`-Wert mitteilen kann.

Es funktioniert, aber Svelte bietet uns eine einfachere und direktere Möglichkeit, beidseitiges Daten-Binding zu erreichen. Daten fließen normalerweise mit Props vom Elternteil zur Kindkomponente. Wenn wir wollen, dass sie auch in die andere Richtung fließen, von der Kindkomponente zurück zum Elternteil, können wir [die `bind:`-Direktive](https://svelte.dev/docs/element-directives#bind-property) verwenden.

Mit `bind` sagen wir Svelte, dass alle Änderungen, die am `filter`-prop in der `FilterButton`-Komponente vorgenommen werden, wieder zum Elternteil hochfließen sollen. Das heißt, wir binden den Wert der `filter`-Variable im Elternteil an den Wert im Kind.

1. Aktualisieren Sie in `Todos.svelte` den Aufruf der `FilterButton`-Komponente wie folgt:

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Wie üblich bietet Svelte uns eine schöne Abkürzung: `bind:value={value}` ist äquivalent zu `bind:value`. In dem obigen Beispiel könnten Sie also einfach `<FilterButton bind:filter />` schreiben.

2. Die Kindkomponente kann nun den Wert der `filter`-Variable des Elternteils ändern, sodass wir die `onclick`-prop nicht mehr benötigen. Ändern Sie das `<script>`-Element Ihres `FilterButton` so:

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. Versuchen Sie Ihre App erneut, und Sie sollten sehen, dass die Filter immer noch korrekt funktionieren.

## Unsere Todo-Komponente erstellen

Jetzt werden wir eine `Todo`-Komponente erstellen, um jedes einzelne To-Do zu kapseln, einschließlich des Kontrollkästchens und einiger Bearbeitungslogik, sodass Sie ein vorhandenes To-Do ändern können.

Unsere `Todo`-Komponente erhält ein einzelnes `todo`-Objekt als prop. Lassen Sie uns die `todo`-prop deklarieren und den Code aus der `Todos`-Komponente verschieben. Vorerst werden wir den Aufruf von `removeTodo` durch eine Benachrichtigung ersetzen. Wir fügen diese Funktionalität später wieder hinzu.

1. Erstellen Sie eine neue Komponenten-Datei, `components/Todo.svelte`.
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

3. Jetzt müssen wir unsere `Todo`-Komponente in `Todos.svelte` importieren. Gehen Sie jetzt in diese Datei und fügen Sie die folgende `import`-Anweisung unter der vorherigen hinzu:

   ```js
   import Todo from "./Todo.svelte";
   ```

4. Als nächstes müssen wir unseren `{#each}`-Block aktualisieren, um eine `<Todo>`-Komponente für jedes To-Do einzuschließen, anstatt den Code, der nach `Todo.svelte` verschoben wurde. Wir übergeben auch das aktuelle `todo`-Objekt in die Komponente als prop.

   Aktualisieren Sie den `{#each}`-Block in `Todos.svelte` so:

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

Die Liste der To-Dos wird auf der Seite angezeigt, und die Kontrollkästchen sollten funktionieren (versuchen Sie, ein paar zu aktivieren/deaktivieren, und beobachten Sie, dass die Filter weiterhin wie erwartet funktionieren), aber unsere "x von y Elementen abgeschlossen"-Statusüberschrift wird nicht mehr entsprechend aktualisiert. Das liegt daran, dass unsere `Todo`-Komponente das To-Do über die prop empfängt, aber keine Informationen an ihren Eltern zurücksendet. Wir werden dies später beheben.

## Daten zwischen Komponenten teilen: Props-runter, Events-hoch Muster

Die `bind`-Direktive ist ziemlich einfach und ermöglicht es Ihnen, Daten zwischen einer Eltern- und einer Kindkomponente mit minimalem Aufwand zu teilen. Wenn Ihre Anwendung jedoch größer und komplexer wird, kann es leicht schwierig werden, alle gebundenen Werte im Überblick zu behalten. Ein anderer Ansatz ist das „props-runter, Events-hoch“-Kommunikationsmuster.

Grundsätzlich basiert dieses Muster darauf, dass Kindkomponenten Daten von ihren Eltern über props erhalten und Elternkomponenten ihren Zustand aktualisieren, indem sie Events behandeln, die von Kindkomponenten ausgelöst werden. Also fließen props _nach unten_ von Eltern zu Kind und Events _blubbern nach oben_ von Kind zu Eltern. Dieses Muster etabliert einen zweiseitigen Informationsfluss, der vorhersehbar und leichter zu begreifen ist.

Schauen wir uns an, wie wir unsere eigenen Events auslösen können, um die fehlende _Löschen_-Schaltfläche-Funktionalität wieder zu implementieren.

Um benutzerdefinierte Events zu erstellen, verwenden wir das `createEventDispatcher`-Utility. Dies gibt eine `dispatch()`-Funktion zurück, die es uns ermöglicht, benutzerdefinierte Events auszulösen. Wenn Sie ein Event auslösen, müssen Sie den Namen des Events angeben und optional ein Objekt mit zusätzlichen Informationen, die Sie an jeden Listener übergeben möchten. Diese zusätzlichen Daten sind über die `detail`-Eigenschaft des Event-Objekts verfügbar.

> [!NOTE]
> Benutzerdefinierte Events in Svelte haben die gleiche API wie normale DOM-Events. Darüber hinaus können Sie ein Event an Ihre Elternkomponente weitergeben, indem Sie `on:event` ohne einen Handler spezifizieren.

Wir werden unsere `Todo`-Komponente so bearbeiten, dass sie ein `remove`-Event auslöst, wobei das To-Do als zusätzliche Information übergeben wird.

1. Fügen Sie zunächst die folgenden Zeilen oben im `<script>`-Abschnitt der `Todo`-Komponente hinzu:

   ```js
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();
   ```

2. Aktualisieren Sie jetzt die _Delete_-Schaltfläche im Markup-Abschnitt derselben Datei, sodass sie wie folgt aussieht:

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Mit `dispatch('remove', todo)` lösen wir ein `remove`-Event aus und übergeben als zusätzliche Daten das zu löschende `todo`. Der Handler wird mit einem verfügbaren Event-Objekt aufgerufen, wobei die zusätzlichen Daten in der `event.detail`-Eigenschaft verfügbar sind.

3. Nun müssen wir dieses Event innerhalb von `Todos.svelte` abhören und entsprechend handeln. Gehen Sie zurück zu dieser Datei und aktualisieren Sie Ihren `<Todo>`-Komponentenaufruf wie folgt:

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   Unser Handler empfängt den `e`-Parameter (das Event-Objekt), der, wie zuvor beschrieben, das zu löschende To-Do in der `detail`-Eigenschaft enthält.

4. An diesem Punkt sollte die _Löschen_-Funktionalität wieder funktionieren, wenn Sie Ihre App ausprobieren. Unser benutzerdefiniertes Event hat also wie erwartet funktioniert. Darüber hinaus sendet der `remove`-Event-Listener die Datenänderung zurück an den Elternteil, sodass unsere "x von y Elementen abgeschlossen"-Statusüberschrift jetzt angemessen aktualisiert wird, wenn To-Dos gelöscht werden.

Jetzt kümmern wir uns um das `update`-Event, damit unsere Elternkomponente über geänderte To-Dos informiert wird.

## To-Dos aktualisieren

Wir müssen noch die Funktionalität implementieren, die es ermöglicht, bestehende To-Dos zu bearbeiten. Wir müssen einen Bearbeitungsmodus in die `Todo`-Komponente aufnehmen. Beim Eintritt in den Bearbeitungsmodus zeigen wir ein `<input>`-Feld an, damit wir den aktuellen To-Do-Namen bearbeiten können, mit zwei Schaltflächen, um unsere Änderungen zu bestätigen oder abzubrechen.

### Die Events behandeln

1. Wir benötigen eine Variable, um zu verfolgen, ob wir uns im Bearbeitungsmodus befinden, und eine weitere, um den Namen der zu aktualisierenden Aufgabe zu speichern. Fügen Sie die folgenden Variablendefinitionen am Ende des `<script>`-Abschnitts der `Todo`-Komponente hinzu:

   ```js
   let editing = false; // track editing mode
   let name = todo.name; // hold the name of the to-do being edited
   ```

2. Wir müssen entscheiden, welche Ereignisse unsere `Todo`-Komponente auslösen wird:

   - Wir könnten verschiedene Events für den Statuswechsel und die Bearbeitung des Namens auslösen (zum Beispiel `updateTodoStatus` und `updateTodoName`).
   - Oder wir könnten einen allgemeineren Ansatz wählen und ein einziges `update`-Event für beide Vorgänge auslösen.

   Wir werden den zweiten Ansatz wählen, um eine andere Technik zu demonstrieren. Der Vorteil dieses Ansatzes besteht darin, dass wir später mehr Felder zu den To-Dos hinzufügen können und trotzdem alle Updates mit dem gleichen Event behandeln können.

   Lassen Sie uns eine `update()`-Funktion erstellen, die die Änderungen empfängt und ein Update-Event mit dem modifizierten To-Do auslöst. Fügen Sie das folgende wieder am Ende des `<script>`-Abschnitts hinzu:

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Hier verwenden wir die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das ursprüngliche To-Do mit den darauf angewendeten Änderungen zurückzugeben.

3. Als nächstes erstellen wir verschiedene Funktionen, um jede Benutzeraktion zu behandeln. Wenn sich das To-Do im Bearbeitungsmodus befindet, kann der Benutzer die Änderungen speichern oder abbrechen. Wenn es sich nicht im Bearbeitungsmodus befindet, kann der Benutzer das To-Do löschen, bearbeiten oder seinen Status zwischen abgeschlossen und aktiv umschalten.

   Fügen Sie das folgende Set von Funktionen unter Ihrer vorherigen Funktion hinzu, um diese Aktionen zu behandeln:

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

### Das Markup aktualisieren

Jetzt müssen wir das Markup unserer `Todo`-Komponente aktualisieren, um die oben genannten Funktionen aufzurufen, wenn die entsprechenden Aktionen ausgeführt werden.

Um den Bearbeitungsmodus zu behandeln, verwenden wir die `editing`-Variable, die ein boolescher Wert ist. Wenn sie `true` ist, sollte sie das `<input>`-Feld zur Bearbeitung des To-Do-Namens und die Schaltflächen _Abbrechen_ und _Speichern_ anzeigen. Wenn sie sich nicht im Bearbeitungsmodus befindet, wird sie das Kontrollkästchen, den To-Do-Namen und die Schaltflächen zum Bearbeiten und Löschen des To-Dos anzeigen.

Dazu verwenden wir einen [`if`-Block](https://svelte.dev/docs/logic-blocks#if). Der `if`-Block rendert bedingt einige Markups. Beachten Sie, dass es das Markup nicht nur basierend auf der Bedingung anzeigt oder verbirgt – es wird die Elemente je nach Bedingung dynamisch zum DOM hinzufügen und daraus entfernen.

Wenn `editing` `true` ist, zeigt Svelte das Aktualisierungsformular an; wenn es `false` ist, entfernt es dies aus dem DOM und fügt das Kontrollkästchen hinzu. Dank der Svelte-Reaktivität reicht es aus, den Wert der `editing`-Variable zuzuweisen, um die korrekten HTML-Elemente anzuzeigen.

Die folgende Struktur gibt Ihnen eine Vorstellung davon, wie der grundlegende `if`-Block aussieht:

```svelte
<div class="stack-small">
  {#if editing}
  <!-- markup for editing to-do: label, input text, Cancel and Save Button -->
  {:else}
  <!-- markup for displaying to-do: checkbox, label, Edit and Delete Button -->
  {/if}
</div>
```

Der Abschnitt ohne Bearbeitung — das heißt, der `{:else}`-Teil (untere Hälfte) des `if`-Blocks — wird sehr ähnlich dem sein, den wir in unserer `Todos`-Komponente hatten. Der einzige Unterschied besteht darin, dass wir `onToggle()`, `onEdit()` und `onRemove()` aufrufen, abhängig von der Benutzeraktion.

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

Es ist bemerkenswert, dass:

- Wenn der Benutzer die _Edit_-Schaltfläche drückt, führen wir `onEdit()` aus, das einfach die `editing`-Variable auf `true` setzt.
- Wenn der Benutzer das Kontrollkästchen anklickt, rufen wir die Funktion `onToggle()` auf, die `update()` ausführt und einen Parameter mit dem neuen Wert für `completed` übergibt.
- Die Funktion `update()` löst das `update`-Event aus, das eine Kopie des Original-To-Dos mit den Änderungen als zusätzliche Informationen übergibt.
- Schließlich löst die Funktion `onRemove()` das `remove`-Event aus und übergibt das zu löschende `todo` als zusätzliche Daten.

Die Bearbeitungs-UI (obere Hälfte) enthält ein `<input>`-Feld und zwei Schaltflächen, um die Änderungen abzubrechen oder zu speichern:

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

Wenn der Benutzer die _Edit_-Schaltfläche drückt, wird die `editing`-Variable auf `true` gesetzt, und Svelte entfernt das Markup im `{:else}`-Teil des DOMs und ersetzt es durch das Markup im `{#if}`-Abschnitt.

Die `value`-Eigenschaft des `<input>` wird an die `name`-Variable gebunden, und die Schaltflächen zum Abbrechen und Speichern der Änderungen rufen `onCancel()` bzw. `onSave()` auf (wir haben diese Funktionen vorher hinzugefügt):

- Wenn `onCancel()` aufgerufen wird, wird `name` auf seinen ursprünglichen Wert (wie in der prop übergeben) zurückgesetzt, und wir beenden den Bearbeitungsmodus (indem wir `editing` auf `false` setzen).
- Wenn `onSave()` aufgerufen wird, führen wir die Funktion `update()` aus — wobei wir den geänderten `name` übergeben — und beenden den Bearbeitungsmodus.

Wir deaktivieren auch die _Save_-Schaltfläche, wenn das `<input>` leer ist, durch das Attribut `disabled={!name}`, und ermöglichen es dem Benutzer, die Bearbeitung mit der <kbd>Escape</kbd>-Taste abzubrechen, so:

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

Wir verwenden auch `todo.id`, um eindeutige IDs für die neuen Eingabesteuerungen und Beschriftungen zu erstellen.

1. Das vollständig aktualisierte Markup unserer `Todo`-Komponente sieht wie folgt aus. Aktualisieren Sie jetzt Ihre:

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
   > Wir könnten dies weiter in zwei verschiedene Komponenten aufteilen, eine für die Bearbeitung des To-Dos und die andere für die Anzeige. Letztendlich hängt es davon ab, wie wohl Sie sich mit diesem Komplexitätsgrad in einer einzigen Komponente fühlen. Sie sollten auch darüber nachdenken, ob eine weitere Aufteilung ermöglichen würde, diese Komponente in einem anderen Kontext wiederzuverwenden.

2. Um die Aktualisierungsfunktionalität zum Laufen zu bringen, müssen wir das `update`-Event von der `Todos`-Komponente behandeln. Fügen Sie in deren `<script>`-Abschnitt diesen Handler hinzu:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   Wir finden das `todo` anhand der `id` in unserem `todos`-Array und aktualisieren seinen Inhalt mit Spread-Syntax. In diesem Fall hätten wir auch einfach `todos[i] = todo` verwenden können, aber diese Implementierung ist stabiler, da sie der `Todo`-Komponente ermöglicht, nur die aktualisierten Teile des To-Dos zurückzugeben.

3. Als nächstes müssen wir das `update`-Event bei unserem `<Todo>`-Komponentenaufruf abhören und unsere `updateTodo()`-Funktion ausführen, wenn dies auftritt, um den `name` und den `completed`-Status zu ändern. Aktualisieren Sie Ihren `<Todo>`-Aufruf so:

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. Versuchen Sie Ihre App erneut, und Sie sollten sehen, dass Sie To-Dos löschen, hinzufügen, bearbeiten, das Bearbeiten abbrechen und den Fertigstellungsstatus umschalten können. Unsere "x von y Elementen abgeschlossen"-Statusüberschrift wird jetzt korrekt aktualisiert, wenn To-Dos abgeschlossen werden.

Wie Sie sehen können, ist es einfach, das „props-runter, Events-hoch“-Muster in Svelte zu implementieren. Dennoch kann für einfache Komponenten `bind` eine gute Wahl sein; Svelte gibt Ihnen die Freiheit zu wählen.

> [!NOTE]
> Svelte bietet fortgeschrittenere Mechanismen, um Informationen zwischen Komponenten zu teilen: die [Context API](https://svelte.dev/docs/svelte#setcontext) und [Stores](https://svelte.dev/docs/svelte-store). Die Context API bietet einen Mechanismus, mit dem Komponenten und ihre Nachkommen miteinander „sprechen“ können, ohne Daten und Funktionen als props zu übergeben oder viele Events auszulösen. Stores erlaubt Ihnen, reaktive Daten zwischen Komponenten zu teilen, die nicht hierarchisch miteinander verwandt sind. Wir werden uns später in der Serie mit Stores befassen.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie wie folgt auf Ihre Kopie unseres Repos zu:

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

Nun haben wir die gesamte erforderliche Funktionalität unserer App implementiert. Wir können To-Dos anzeigen, hinzufügen, bearbeiten und löschen, sie als abgeschlossen markieren und nach Status filtern.

In diesem Artikel haben wir folgende Themen behandelt:

- Funktionalitäten in eine neue Komponente extrahieren
- Informationen von Kind zu Eltern mithilfe eines übergebenen Handlers weitergeben
- Informationen von Kind zu Eltern mithilfe der `bind`-Direktive weitergeben
- Blöcke von Markups bedingt mit dem `if`-Block rendern
- Das Kommunikationsmuster „props-runter, Events-hoch“ implementieren
- Eigene Events erstellen und darauf hören

Im nächsten Artikel werden wir weiterhin unsere App komponentsieren und uns einige fortgeschrittene Techniken zur Arbeit mit dem DOM ansehen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
