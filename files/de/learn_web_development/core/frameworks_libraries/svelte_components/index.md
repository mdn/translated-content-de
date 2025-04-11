---
title: Unsere Svelte-App in Komponenten aufteilen
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_components
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir begonnen, unsere To-Do-Listen-App zu entwickeln. Das Hauptziel dieses Artikels ist es, zu untersuchen, wie wir unsere App in überschaubare Komponenten aufteilen und Informationen zwischen ihnen austauschen können. Wir werden unsere App in Komponenten unterteilen und dann weitere Funktionen hinzufügen, damit Benutzer bestehende Komponenten aktualisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie Sie unsere App in Komponenten aufteilen und Informationen
        zwischen ihnen austauschen.
      </td>
    </tr>
  </tbody>
</table>

## Code mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, ausführen

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns mit dem REPL zu coden, starten Sie unter

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Die App in Komponenten aufteilen

In Svelte wird eine Anwendung aus einer oder mehreren Komponenten zusammengesetzt. Eine Komponente ist ein wiederverwendbarer, in sich geschlossener Codeblock, der HTML, CSS und JavaScript, die zusammen gehören, in einer `.svelte`-Datei kapselt. Komponenten können groß oder klein sein, sind aber normalerweise klar definiert: Die effektivsten Komponenten dienen einem einzigen, offensichtlichen Zweck.

Die Vorteile der Definition von Komponenten sind vergleichbar mit der allgemeinen Best Practice, Ihren Code in überschaubare Stücke zu organisieren. Dies hilft Ihnen zu verstehen, wie sie zueinander in Beziehung stehen, es fördert die Wiederverwendung und macht Ihren Code einfacher verständlich, wartbar und erweiterbar.

Aber wie wissen Sie, was in eine eigene Komponente aufgeteilt werden sollte?

Es gibt dafür keine festen Regeln. Einige Leute bevorzugen einen intuitiven Ansatz und beginnen, das Markup zu betrachten und um jede Komponente und Unterkomponente, die ihre eigene Logik zu haben scheint, Kästchen zu zeichnen.

Andere Leute wenden die gleichen Techniken an, die sie verwenden, um zu entscheiden, ob sie eine neue Funktion oder ein neues Objekt erstellen sollen. Eine solche Technik ist das Prinzip der Einzelverantwortung — das heißt, eine Komponente sollte idealerweise nur eine Sache tun. Wenn sie zu groß wird, sollte sie in kleinere Unterkomponenten aufgeteilt werden.

Beide Ansätze sollten sich gegenseitig ergänzen und Ihnen helfen, zu entscheiden, wie Sie Ihre Komponenten besser organisieren.

Letztendlich werden wir unsere App in die folgenden Komponenten aufteilen:

- `Alert.svelte`: Eine allgemeine Benachrichtigungsbox zur Kommunikation von Aktionen, die erfolgt sind.
- `NewTodo.svelte`: Das Texteingabefeld und die Schaltfläche, die es Ihnen ermöglichen, ein neues To-do-Element einzugeben.
- `FilterButton.svelte`: Die _Alle_, _Aktiven_ und _Abgeschlossenen_ Schaltflächen, die es Ihnen ermöglichen, Filter auf die angezeigten To-do-Elemente anzuwenden.
- `TodosStatus.svelte`: Die "x von y Elementen abgeschlossen"-Überschrift.
- `Todo.svelte`: Ein einzelnes To-do-Element. Jedes sichtbare To-do-Element wird in einer separaten Kopie dieser Komponente angezeigt.
- `MoreActions.svelte`: Die _Alle markieren_ und _Abgeschlossene entfernen_ Schaltflächen am unteren Ende der Benutzeroberfläche, die es Ihnen ermöglichen, Massenaktionen auf die To-do-Elemente anzuwenden.

![grafische Darstellung der Liste der Komponenten in unserer App](01-todo-components.png)

In diesem Artikel werden wir uns auf die Erstellung der `FilterButton`- und `Todo`-Komponenten konzentrieren; zu den anderen kommen wir in zukünftigen Artikeln.

Lassen Sie uns beginnen.

> [!NOTE]
> Im Prozess der Erstellung unserer ersten paar Komponenten werden wir auch verschiedene Techniken lernen, um zwischen Komponenten zu kommunizieren, und die Vor- und Nachteile jeder Technik.

## Unser Filter-Komponente extrahieren

Wir beginnen mit der Erstellung unseres `FilterButton.svelte`.

1. Erstellen Sie zunächst eine neue Datei, `components/FilterButton.svelte`.
2. In dieser Datei werden wir eine `filter`-Prop deklarieren und dann das relevante Markup von `Todos.svelte` dorthin kopieren. Fügen Sie den folgenden Inhalt in die Datei ein:

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

3. Zurück in unserer `Todos.svelte`-Komponente möchten wir unsere `FilterButton`-Komponente nutzen. Zuerst müssen wir sie importieren. Fügen Sie die folgende Zeile am Anfang des `Todos.svelte <script>`-Abschnitts hinzu:

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. Ersetzen Sie den `<div class="filters...`-Element durch einen Aufruf der `FilterButton`-Komponente, die den aktuellen Filter als Prop übernimmt. Die folgende Zeile ist alles, was Sie brauchen:

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> Denken Sie daran, dass, wenn der HTML-Attributname und die Variable übereinstimmen, sie durch `{variable}` ersetzt werden können. Deshalb konnten wir `<FilterButton filter={filter} />` durch `<FilterButton {filter} />` ersetzen.

Bisher läuft alles gut! Versuchen Sie jetzt, die App auszuprobieren. Sie werden feststellen, dass, wenn Sie auf die Filter-Schaltflächen klicken, sie ausgewählt sind und sich der Stil entsprechend aktualisiert. Aber wir haben ein Problem: Die To-dos werden nicht gefiltert. Das liegt daran, dass die `filter`-Variable vom `Todos`-Komponenten an die `FilterButton`-Komponente durch die Prop fließt, aber Änderungen, die in der `FilterButton`-Komponente auftreten, nicht zurück zu ihrem Elternteil fließen — das Datenbinding ist standardmäßig unidirektional. Lassen Sie uns einen Weg finden, dies zu lösen.

## Daten zwischen Komponenten austauschen: Einen Handler als Prop übergeben

Eine Möglichkeit, Kinderkomponenten die Elternkomponenten über Änderungen zu benachrichtigen, besteht darin, einen Handler als Prop zu übergeben. Die Kinderkomponente führt den Handler aus, übergibt die benötigten Informationen als Parameter, und der Handler ändert den Zustand des Elternteils.

In unserem Fall wird die `FilterButton`-Komponente einen `onclick`-Handler von ihrem Elternteil erhalten. Immer wenn der Benutzer auf eine beliebige Filter-Schaltfläche klickt, wird das Kind den `onclick`-Handler aufrufen und den ausgewählten Filter als Parameter zurück an seinen Elternteil übergeben.

Wir werden einfach die `onclick`-Prop deklarieren, indem wir einen Dummy-Handler zuweisen, um Fehler zu vermeiden, wie folgt:

```js
export let onclick = (clicked) => {};
```

Und wir deklarieren die reaktive Anweisung `$: onclick(filter)`, um den `onclick`-Handler aufzurufen, wann immer die `filter`-Variable aktualisiert wird.

1. Der `<script>`-Abschnitt unserer `FilterButton`-Komponente sollte am Ende so aussehen. Aktualisieren Sie ihn jetzt:

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. Wenn wir jetzt das `FilterButton` innerhalb von `Todos.svelte` aufrufen, müssen wir den Handler angeben. Aktualisieren Sie es so:

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

Wenn eine beliebige Filter-Schaltfläche geklickt wird, aktualisieren wir einfach die Filter-Variable mit dem neuen Filter. Jetzt wird unsere `FilterButton`-Komponente wieder funktionieren.

## Einfachere bidirektionale Datenbindung mit dem `bind`-Direktiv

Im vorhergehenden Beispiel haben wir festgestellt, dass unsere `FilterButton`-Komponente nicht funktionierte, weil unser Anwendungsstatus von Elternteil zu Kind durch die `filter`-Prop floss, aber nicht wieder nach oben. Also haben wir eine `onclick`-Prop hinzugefügt, um dem Kinderkomponent zu ermöglichen, den neuen `filter`-Wert an ihren Elternteil zu kommunizieren.

Es funktioniert in Ordnung, aber Svelte bietet uns eine einfachere und direktere Möglichkeit, um eine bidirektionale Datenbindung zu erreichen. Daten fließen normalerweise von Elternteil zu Kind mit Props. Wenn wir auch möchten, dass sie in die andere Richtung fließen, von Kind zu Elternteil, können wir [das `bind:`-Direktiv](https://svelte.dev/docs/element-directives#bind-property) verwenden.

Mit `bind` teilen wir Svelte mit, dass alle Änderungen, die an der `filter`-Prop in der `FilterButton`-Komponente vorgenommen werden, wieder zum Elternteil propagiert werden sollen. Das heißt, wir binden den Wert der `filter`-Variable im Elternteil an ihren Wert im Kind.

1. In `Todos.svelte` aktualisieren Sie den Aufruf der `FilterButton`-Komponente wie folgt:

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Wie üblich bietet Svelte uns eine schöne Abkürzung: `bind:value={value}` ist äquivalent zu `bind:value`. Im obigen Beispiel könnten Sie also einfach `<FilterButton bind:filter />` schreiben.

2. Die Kinderkomponente kann jetzt den Wert der Filter-Variable des Elternelements ändern, daher benötigen wir die `onclick`-Prop nicht mehr. Ändern Sie das `<script>`-Element Ihres `FilterButton` folgendermaßen:

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. Versuchen Sie erneut Ihre App, und Sie sollten sehen, dass Ihre Filter weiterhin korrekt funktionieren.

## Erstellung unserer Todo-Komponente

Jetzt erstellen wir eine `Todo`-Komponente, um jedes einzelne To-do, einschließlich des Kontrollkästchens und der Bearbeitungslogik, so zu kapseln, dass Sie ein bestehendes To-do ändern können.

Unsere `Todo`-Komponente erhält ein einzelnes `todo`-Objekt als Prop. Lassen Sie uns die `todo`-Prop deklarieren und den Code aus der `Todos`-Komponente verschieben. Nur für den Moment ersetzen wir den Aufruf zu `removeTodo` durch einen Alarm. Wir fügen diese Funktionalität später wieder hinzu.

1. Erstellen Sie eine neue Komponentendatei, `components/Todo.svelte`.
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

3. Jetzt müssen wir unsere `Todo`-Komponente in `Todos.svelte` importieren. Gehen Sie jetzt zu dieser Datei und fügen Sie die folgende `import`-Anweisung unter Ihrer vorherigen ein:

   ```js
   import Todo from "./Todo.svelte";
   ```

4. Als nächstes müssen wir unseren `{#each}` Block aktualisieren, um eine `<Todo>`-Komponente für jedes To-do aufzunehmen, anstatt des Codes, der in `Todo.svelte` verschoben wurde. Wir übergeben auch das aktuelle `todo`-Objekt als Prop an die Komponente.

   Aktualisieren Sie den `{#each}` Block in `Todos.svelte` wie folgt:

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

Die Liste der To-Dos wird auf der Seite angezeigt und die Kontrollkästchen sollten funktionieren (versuchen Sie einige zu aktivieren/deaktivieren und beobachten, dass die Filter weiterhin wie erwartet funktionieren), aber unsere "x von y Elementen abgeschlossen"-Statusüberschrift wird nicht mehr entsprechend aktualisiert. Das liegt daran, dass unsere `Todo`-Komponente das To-Do über die Prop erhält, aber keine Informationen zurück an ihren Elternteil sendet. Wir werden dies später beheben.

## Daten zwischen Komponenten austauschen: Props-down, Events-up-Muster

Das `bind`-Direktiv ist ziemlich unkompliziert und ermöglicht es Ihnen, Daten zwischen einer Eltern- und einer Kinderkomponente mit minimalem Aufwand auszutauschen. Wenn Ihre Anwendung jedoch größer und komplexer wird, kann es leicht schwierig werden, alle gebundenen Werte im Auge zu behalten. Ein anderer Ansatz ist das "props-down, events-up" Kommunikationsmuster.

Grundsätzlich basiert dieses Muster darauf, dass Kinderkomponenten Daten von ihren Eltern über Props erhalten und Elternkomponenten ihren Zustand aktualisieren, indem sie Ereignisse behandeln, die von Kinderkomponenten gesendet werden. Props _fließen nach unten_ von Elternteil zu Kind, und Ereignisse _blubbern nach oben_ von Kind zu Elternteil. Dieses Muster etabliert einen bidirektionalen Informationsfluss, der vorhersehbar und einfacher zu verstehen ist.

Lassen Sie uns anschauen, wie wir unsere eigenen Ereignisse senden, um die fehlende _Löschen_-Button-Funktionalität erneut zu implementieren.

Um benutzerdefinierte Ereignisse zu erstellen, verwenden wir den `createEventDispatcher`-Dienst. Dies wird eine `dispatch()`-Funktion zurückgeben, die es uns ermöglicht, benutzerdefinierte Ereignisse zu senden. Wenn Sie ein Ereignis senden, müssen Sie den Namen des Ereignisses und optional ein Objekt mit zusätzlichen Informationen, die Sie an jeden Listener weitergeben möchten, übergeben. Diese zusätzlichen Daten werden in der `detail`-Eigenschaft des Ereignisobjekts verfügbar sein.

> [!NOTE]
> Benutzerdefinierte Ereignisse in Svelte teilen dieselbe API wie reguläre DOM-Ereignisse. Darüber hinaus können Sie ein Ereignis an Ihre Elternkomponente blubbern lassen, indem Sie `on:event` ohne einen Handler angeben.

Wir werden unsere `Todo`-Komponente bearbeiten, um ein `remove`-Ereignis zu senden, wobei das zu entfernende To-Do als zusätzliche Information übermittelt wird.

1. Fügen Sie zunächst die folgenden Zeilen zum Anfang des `<script>`-Abschnitts der `Todo`-Komponente hinzu:

   ```js
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();
   ```

2. Aktualisieren Sie jetzt den _Löschen_-Button im Markup-Bereich derselben Datei wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Mit `dispatch('remove', todo)` senden wir ein `remove`-Ereignis und übergeben als zusätzliche Daten das zu löschende `todo`. Der Handler wird mit einem Ereignisobjekt aufgerufen, wobei die zusätzlichen Daten in der `event.detail`-Eigenschaft verfügbar sind.

3. Jetzt müssen wir dieses Ereignis von innerhalb `Todos.svelte` anhören und entsprechend handeln. Gehen Sie zurück zu dieser Datei und aktualisieren Sie Ihren `<Todo>`-Komponentenaufruf wie folgt:

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   Unser Handler erhält den `e`-Parameter (das Ereignisobjekt), welches wie zuvor beschrieben das zu löschende To-Do in der `detail`-Eigenschaft hält.

4. Wenn Sie jetzt Ihre App erneut ausprobieren, sollten Sie sehen, dass die _Löschen_-Funktionalität jetzt wieder funktioniert. Unser benutzerdefiniertes Ereignis hat also wie erhofft funktioniert. Darüber hinaus sendet der `remove`-Ereignislistener die Datenänderung zurück an den Elternteil, so dass unsere "x von y Elementen abgeschlossen"-Statusüberschrift jetzt entsprechend aktualisiert wird, wenn To-Dos gelöscht werden.

Nun kümmern wir uns um das `update`-Ereignis, damit unsere Elternkomponente über alle Änderungen eines To-Dos benachrichtigt werden kann.

## To-Dos aktualisieren

Wir müssen noch die Funktionalität implementieren, die es uns ermöglicht, bestehende To-Dos zu bearbeiten. Wir werden einen Bearbeitungsmodus in die `Todo`-Komponente einfügen. Beim Eintritt in den Bearbeitungsmodus zeigen wir ein `<input>`-Feld an, das es uns ermöglicht, den aktuellen To-Do-Namen zu bearbeiten, mit zwei Schaltflächen, um unsere Änderungen zu bestätigen oder abzubrechen.

### Die Ereignisse behandeln

1. Wir benötigen eine Variable, um zu verfolgen, ob wir uns im Bearbeitungsmodus befinden, und eine andere, um den Namen der zu aktualisierenden Aufgabe zu speichern. Fügen Sie die folgenden Variablendefinitionen am Ende des `<script>`-Abschnitts der `Todo`-Komponente hinzu:

   ```js
   let editing = false; // track editing mode
   let name = todo.name; // hold the name of the to-do being edited
   ```

2. Wir müssen entscheiden, welche Ereignisse unsere `Todo`-Komponente senden wird:

   - Wir könnten unterschiedliche Ereignisse für den Statuswechsel und die Bearbeitung des Namens senden (zum Beispiel `updateTodoStatus` und `updateTodoName`).
   - Oder wir könnten einen allgemeineren Ansatz wählen und ein einzelnes `update`-Ereignis für beide Operationen senden.

   Wir wählen den zweiten Ansatz, um eine andere Technik zu demonstrieren. Der Vorteil dieses Ansatzes ist, dass wir später mehr Felder zu den To-Dos hinzufügen können und dennoch alle Aktualisierungen mit demselben Ereignis handhaben können.

   Lassen Sie uns eine `update()`-Funktion erstellen, die die Änderungen empfängt und ein Update-Ereignis mit dem geänderten To-Do sendet. Fügen Sie die folgende Funktion ebenfalls am Ende des `<script>`-Abschnitts hinzu:

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Hier verwenden wir die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das ursprüngliche To-Do mit den darauf angewandten Änderungen zurückzugeben.

3. Als nächstes erstellen wir verschiedene Funktionen, um jede Benutzeraktion zu behandeln. Wenn das To-Do im Bearbeitungsmodus ist, kann der Benutzer Änderungen speichern oder abbrechen. Wenn es sich nicht im Bearbeitungsmodus befindet, kann der Benutzer das To-Do löschen, bearbeiten oder seinen Status zwischen abgeschlossen und aktiv umschalten.

   Fügen Sie die folgenden Funktionen unterhalb Ihrer vorherigen Funktion hinzu, um diese Aktionen zu behandeln:

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

Jetzt müssen wir das Markup unserer `Todo`-Komponente aktualisieren, um die obigen Funktionen aufzurufen, wenn die entsprechenden Aktionen ausgeführt werden.

Um den Bearbeitungsmodus zu steuern, verwenden wir die `editing`-Variable, die ein Boolean ist. Wenn sie `true` ist, sollte sie das `<input>`-Feld für die Bearbeitung des To-Do-Namens sowie die _Abbrechen_ und _Speichern_-Buttons anzeigen. Wenn es sich nicht im Bearbeitungsmodus befindet, zeigt sie das Checkbox, den To-Do-Namen und die Buttons zum Bearbeiten und Löschen des To-Dos an.

Um dies zu erreichen, verwenden wir einen [`if`-Block](https://svelte.dev/docs/logic-blocks#if). Der `if`-Block rendert bedingt ein Markup. Beachten Sie, dass er das Markup nicht nur basierend auf der Bedingung zeigt oder versteckt — je nach Bedingung fügt er die Elemente aus dem DOM hinzu oder entfernt sie.

Wenn `editing` `true` ist, zeigt Svelte zum Beispiel das Aktualisierungsformular; wenn es `false` ist, entfernt es es aus dem DOM und fügt das Kontrollkästchen hinzu. Dank der Svelte-Reaktivität reicht es aus, den Wert der `editing`-Variable zuzuweisen, um die korrekten HTML-Elemente anzuzeigen.

Das folgende Beispiel gibt Ihnen eine Vorstellung davon, wie die grundlegende Struktur des `if`-Blocks aussieht:

```svelte
<div class="stack-small">
  {#if editing}
  <!-- markup for editing to-do: label, input text, Cancel and Save Button -->
  {:else}
  <!-- markup for displaying to-do: checkbox, label, Edit and Delete Button -->
  {/if}
</div>
```

Der nicht-bearbeitende Abschnitt — das heißt, der `{:else}`-Teil (untere Hälfte) des `if`-Blocks — wird dem sehr ähnlich sein, den wir in unserer `Todos`-Komponente hatten. Der einzige Unterschied besteht darin, dass wir `onToggle()`, `onEdit()`, und `onRemove()` je nach Benutzeraktion aufrufen.

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

Es ist erwähnenswert, dass:

- Wenn der Benutzer den _Bearbeiten_-Button drückt, führen wir `onEdit()` aus, das einfach die `editing`-Variable auf `true` setzt.
- Wenn der Benutzer auf das Kontrollkästchen klickt, rufen wir die `onToggle()`-Funktion auf, die `update()` ausführt und ein Objekt mit dem neuen `completed`-Wert als Parameter übergibt.
- Die `update()`-Funktion sendet das `update`-Ereignis und übergibt als zusätzliche Information eine Kopie des ursprünglichen To-Dos mit den darauf angewandten Änderungen.
- Schließlich sendet die `onRemove()`-Funktion das `remove`-Ereignis und übergibt das zu löschende `todo` als zusätzliche Daten.

Die Bearbeitungsoberfläche (die obere Hälfte) wird ein `<input>`-Feld und zwei Schaltflächen zum Abbrechen oder Speichern der Änderungen enthalten:

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

Wenn der Benutzer den _Bearbeiten_-Button drückt, wird die `editing`-Variable auf `true` gesetzt, und Svelte entfernt das Markup im `{:else}`-Teil des DOMs und ersetzt es durch das Markup im `{#if}`-Abschnitt.

Die Eigenschaft `value` des `<input>` wird an die Variable `name` gebunden, und die Schaltflächen zum Abbrechen und Speichern der Änderungen rufen `onCancel()` bzw. `onSave()` auf (wir haben diese Funktionen vorher hinzugefügt):

- Wenn `onCancel()` aufgerufen wird, wird `name` auf seinen ursprünglichen Wert (wenn als Prop übergeben) zurückgesetzt und wir verlassen den Bearbeitungsmodus (indem wir `editing` auf `false` setzen).
- Wenn `onSave()` aufgerufen wird, führen wir die `update()`-Funktion aus — übergeben den modifizierten `name` — und verlassen den Bearbeitungsmodus.

Wir deaktivieren auch den _Speichern_-Button, wenn das `<input>` leer ist, indem wir das `disabled={!name}`-Attribut verwenden, und erlauben dem Benutzer, die Bearbeitung mit der <kbd>Escape</kbd>-Taste abzubrechen, so:

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

Wir verwenden auch `todo.id`, um eindeutige IDs für die neuen Eingabesteuerungen und Etiketten zu erstellen.

1. Das vollständige aktualisierte Markup unserer `Todo`-Komponente sieht folgendermaßen aus. Aktualisieren Sie Ihre jetzt:

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
   > Wir könnten dies weiter in zwei verschiedene Komponenten aufteilen, eine zum Bearbeiten des To-Dos und eine andere zum Anzeigen desselben. Letztlich hängt es davon ab, wie komfortabel Sie sich fühlen, mit diesem Komplexitätsgrad in einer einzigen Komponente umzugehen. Sie sollten auch überlegen, ob eine weitere Aufteilung eine erneute Verwendung dieser Komponente in einem anderen Kontext ermöglichen würde.

2. Um die Update-Funktionalität zum Laufen zu bringen, müssen wir das `update`-Ereignis von der `Todos`-Komponente behandeln. Fügen Sie im `<script>`-Abschnitt diesen Handler hinzu:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   Wir finden das `todo` nach `id` in unserem `todos`-Array und aktualisieren dessen Inhalt unter Verwendung der Spread-Syntax. In diesem Fall könnten wir auch einfach `todos[i] = todo` verwenden, aber diese Implementierung ist robuster und ermöglicht der `Todo`-Komponente, nur die aktualisierten Teile des To-Dos zurückzugeben.

3. Als Nächstes müssen wir das `update`-Ereignis bei unserem `<Todo>`-Komponentenaufruf hören und unsere `updateTodo()`-Funktion ausführen, wenn dies auftritt, um `name` und `completed`-Status zu ändern. Aktualisieren Sie Ihren \<Todo> Aufruf so:

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. Versuchen Sie Ihre App erneut, und Sie sollten sehen, dass Sie To-Dos löschen, hinzufügen, bearbeiten, die Bearbeitung abbrechen und den Fertigstellungsstatus umschalten können. Und unsere "x von y Elementen abgeschlossen"-Statusüberschrift wird jetzt entsprechend aktualisiert, wenn To-Dos abgeschlossen werden.

Wie Sie sehen können, ist es einfach, das "props-down, events-up"-Muster in Svelte zu implementieren. Dennoch kann `bind` für einfache Komponenten eine gute Wahl sein; Svelte lässt Ihnen die Wahl.

> [!NOTE]
> Svelte bietet fortgeschrittenere Mechanismen, um Informationen unter Komponenten auszutauschen: die [Kontext-API](https://svelte.dev/docs/svelte#setcontext) und [Stores](https://svelte.dev/docs/svelte-store). Die Kontext-API bietet einen Mechanismus für Komponenten und ihre Nachkommen, um "miteinander zu sprechen", ohne Daten und Funktionen als Props weiterzugeben oder viele Ereignisse zu senden. Stores erlauben es Ihnen, reaktive Daten zwischen Komponenten zu teilen, die nicht hierarchisch verbunden sind. Wir werden später in der Serie Stores genauer betrachten.

## Der Code bisher

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes im REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Zusammenfassung

Jetzt haben wir alle erforderlichen Funktionen unserer App implementiert. Wir können To-Dos anzeigen, hinzufügen, bearbeiten und löschen, sie als abgeschlossen markieren und nach Status filtern.

In diesem Artikel haben wir die folgenden Themen behandelt:

- Funktionalität in eine neue Komponente extrahieren
- Informationen vom Kind zum Elternteil über einen als Prop empfangenen Handler übergeben
- Informationen mit dem `bind`-Direktiv vom Kind zum Elternteil übergeben
- Bedingtes Rendern von Markup-Blöcken mit dem `if`-Block
- Das "props-down, events-up"-Kommunikationsmuster implementieren
- Benutzerdefinierte Ereignisse erstellen und darauf hören

Im nächsten Artikel werden wir unsere App weiter in Komponenten aufteilen und einige fortgeschrittene Techniken für die Arbeit mit dem DOM betrachten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
