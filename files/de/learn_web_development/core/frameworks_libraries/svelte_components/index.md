---
title: Komponentisierung unserer Svelte-App
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_components
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir begonnen, unsere To-do-Listen-App zu entwickeln. Das Hauptziel dieses Artikels ist es zu untersuchen, wie wir unsere App in handhabbare Komponenten aufteilen und Informationen zwischen ihnen teilen können. Wir werden unsere App komponentisieren und dann mehr Funktionalität hinzufügen, um Benutzern das Aktualisieren vorhandener Komponenten zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
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
        Lernen, wie man unsere App in Komponenten aufteilt und Informationen unter ihnen teilt.
      </td>
    </tr>
  </tbody>
</table>

## Code mit uns mit

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den Code mit uns im REPL mitzumachen, starten Sie bei

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Die App in Komponenten aufteilen

In Svelte besteht eine Anwendung aus einer oder mehreren Komponenten. Eine Komponente ist ein wiederverwendbarer, eigenständiger Codeblock, der zusammengehöriges HTML, CSS und JavaScript kapselt und in einer `.svelte`-Datei geschrieben ist. Komponenten können groß oder klein sein, sind aber normalerweise klar definiert: Die effektivsten Komponenten dienen einem einzigen, offensichtlichen Zweck.

Die Vorteile der Definition von Komponenten sind vergleichbar mit der allgemeinen Best Practice, Ihren Code in handhabbare Stücke zu organisieren. Es hilft Ihnen, zu verstehen, wie sie zueinander stehen, fördert die Wiederverwendung und macht Ihren Code leichter nachvollziehbar, wartbar und erweiterbar.

Aber woher wissen Sie, was in eine eigene Komponente aufgeteilt werden sollte?

Es gibt keine festen Regeln dafür. Einige Menschen bevorzugen einen intuitiven Ansatz und beginnen damit, die Markup-Struktur zu betrachten und um jede Komponente und Unterkomponente, die ihre eigene Logik zu haben scheint, Boxen zu ziehen.

Andere Menschen wenden dieselben Techniken an, die zur Entscheidung verwendet werden, ob Sie eine neue Funktion oder ein neues Objekt erstellen sollten. Eine solche Technik ist das Single-Responsibility-Prinzip – das bedeutet, eine Komponente sollte idealerweise nur eine Sache tun. Wenn sie wächst, sollte sie in kleinere Unterkomponenten aufgeteilt werden.

Beide Ansätze sollten sich ergänzen und Ihnen helfen, zu entscheiden, wie Sie Ihre Komponenten besser organisieren können.

Letztendlich werden wir unsere App in die folgenden Komponenten aufteilen:

- `Alert.svelte`: Eine allgemeine Benachrichtigungsbox für die Kommunikation über durchgeführte Aktionen.
- `NewTodo.svelte`: Das Texteingabefeld und der Button, die Ihnen das Eingeben eines neuen To-do-Elements ermöglichen.
- `FilterButton.svelte`: Die _Alle_, _Aktiv_ und _Abgeschlossen_-Buttons, die Ihnen erlauben, Filter auf die angezeigten To-do-Elemente anzuwenden.
- `TodosStatus.svelte`: Die Überschrift "x von y Aufgaben abgeschlossen".
- `Todo.svelte`: Ein einzelnes To-do-Element. Jedes sichtbare To-do-Element wird in einer separaten Kopie dieser Komponente angezeigt.
- `MoreActions.svelte`: Die Buttons _Alle auswählen_ und _Abgeschlossene entfernen_ unten in der Benutzeroberfläche, die Ihnen erlauben, Massenaktionen auf die To-do-Elemente auszuführen.

![Grafische Darstellung der Liste der Komponenten in unserer App](01-todo-components.png)

In diesem Artikel konzentrieren wir uns auf die Erstellung der `FilterButton`- und `Todo`-Komponenten; die anderen werden wir in zukünftigen Artikeln behandeln.

Lassen Sie uns beginnen.

> [!NOTE]
> Während der Erstellung unserer ersten paar Komponenten lernen wir auch verschiedene Techniken zur Kommunikation zwischen Komponenten kennen sowie deren Vor- und Nachteile.

## Unsere Filterkomponente extrahieren

Wir beginnen mit der Erstellung unserer `FilterButton.svelte`.

1. Erstellen Sie zunächst eine neue Datei, `components/FilterButton.svelte`.
2. In dieser Datei deklarieren wir eine `filter`-Eigenschaft und kopieren das relevante Markup von `Todos.svelte` in diese Datei. Fügen Sie den folgenden Inhalt in die Datei ein:

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

3. In unserer `Todos.svelte`-Komponente möchten wir unsere `FilterButton`-Komponente verwenden. Zuerst müssen wir sie importieren. Fügen Sie die folgende Zeile oben im `Todos.svelte <script>`-Abschnitt hinzu:

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. Ersetzen Sie nun das `<div class="filters...`-Element durch einen Aufruf der `FilterButton`-Komponente, die den aktuellen Filter als Eigenschaft übernimmt. Die folgende Zeile ist alles, was Sie benötigen:

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> Denken Sie daran, dass wenn der Name des HTML-Attributs und die Variable übereinstimmen, sie durch `{variable}` ersetzt werden können. Deshalb konnten wir `<FilterButton filter={filter} />` durch `<FilterButton {filter} />` ersetzen.

Bis jetzt so gut! Probieren Sie die App jetzt aus. Sie werden feststellen, dass beim Klicken auf die Filterbuttons diese ausgewählt werden und sich der Stil entsprechend aktualisiert. Aber wir haben ein Problem: Die To-dos werden nicht gefiltert. Das liegt daran, dass die `filter`-Variable von der `Todos`-Komponente zur `FilterButton`-Komponente über die Eigenschaft fließt, aber Änderungen, die in der `FilterButton`-Komponente auftreten, nicht zu ihrer übergeordneten Komponente zurückfließen – die Datenbindung ist standardmäßig unidirektional. Sehen wir uns eine Möglichkeit an, dies zu lösen.

## Daten zwischen Komponenten teilen: Übergabe eines Handlers als Eigenschaft

Eine Möglichkeit, untergeordnete Komponenten ihre übergeordneten Komponenten über Änderungen informieren zu lassen, besteht darin, einen Handler als Eigenschaft zu übergeben. Die untergeordnete Komponente wird den Handler ausführen und die benötigten Informationen als Parameter übergeben, und der Handler wird den Zustand der übergeordneten Komponente ändern.

In unserem Fall wird die `FilterButton`-Komponente einen `onclick`-Handler von ihrem übergeordneten Element erhalten. Immer wenn der Benutzer auf einen Filterbutton klickt, wird das untergeordnete Element den `onclick`-Handler aufrufen und den ausgewählten Filter als Parameter an das übergeordnete Element zurückgeben.

Wir werden einfach die `onclick`-Eigenschaft mit einem Dummy-Handler deklarieren, um Fehler zu verhindern, wie folgt:

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

2. Wenn wir nun `FilterButton` in `Todos.svelte` aufrufen, müssen wir den Handler angeben. Aktualisieren Sie ihn so:

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

Wenn ein Filterbutton geklickt wird, aktualisieren wir einfach die Filtervariable mit dem neuen Filter. Jetzt funktioniert unsere `FilterButton`-Komponente wieder.

## Einfachere bidirektionale Datenbindung mit dem bind-Directive

Im vorherigen Beispiel haben wir erkannt, dass unsere `FilterButton`-Komponente nicht funktionierte, weil unser Anwendungszustand von der übergeordneten zur untergeordneten Komponente durch die `filter`-Eigenschaft floss, jedoch nicht zurück. Also haben wir eine `onclick`-Eigenschaft hinzugefügt, um dem untergeordneten Element zu ermöglichen, den neuen `filter`-Wert an das übergeordnete Element zu kommunizieren.

Es funktioniert zwar, aber Svelte bietet uns eine einfachere und direktere Möglichkeit, bidirektionale Datenbindung zu erreichen. Daten fließen in der Regel von übergeordneten zu untergeordneten Komponenten über Eigenschaften. Wenn wir möchten, dass sie auch umgekehrt, also von untergeordnet zu übergeordnet fließen, können wir [das `bind:`-Directive](https://svelte.dev/docs/element-directives#bind-property) verwenden.

Indem wir `bind` verwenden, sagen wir Svelte, dass alle Änderungen, die an der `filter`-Eigenschaft in der `FilterButton`-Komponente vorgenommen werden, wieder an die übergeordnete Komponente (`Todos`) zurückfließen sollten. Das heißt, wir werden den Wert der `filter`-Variablen im übergeordneten Element an ihren Wert im untergeordneten Element binden.

1. Aktualisieren Sie in `Todos.svelte` den Aufruf der `FilterButton`-Komponente wie folgt:

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Wie üblich bietet uns Svelte eine praktische Kurzschrift: `bind:value={value}` ist gleichbedeutend mit `bind:value`. In dem obigen Beispiel könnten Sie also einfach `<FilterButton bind:filter />` schreiben.

2. Die untergeordnete Komponente kann jetzt den Wert der Filtervariable des übergeordneten Elements ändern, sodass wir die `onclick`-Eigenschaft nicht mehr benötigen. Ändern Sie das `<script>`-Element Ihrer `FilterButton`-Komponente wie folgt:

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. Probieren Sie Ihre App erneut aus und Sie sollten sehen, dass Ihre Filter weiterhin korrekt funktionieren.

## Unsere Todo-Komponente erstellen

Jetzt erstellen wir eine `Todo`-Komponente, um jedes einzelne To-do zu kapseln, einschließlich der Checkbox und einigen Bearbeitungslogiken, damit Sie ein bestehendes To-do ändern können.

Unsere `Todo`-Komponente erhält ein einzelnes `todo`-Objekt als Eigenschaft. Lassen Sie uns die `todo`-Eigenschaft deklarieren und den Code von der `Todos`-Komponente verschieben. Vorerst ersetzen wir den Aufruf von `removeTodo` durch einen Alert. Diese Funktionalität fügen wir später wieder hinzu.

1. Erstellen Sie eine neue Komponentendatei, `components/Todo.svelte`.
2. Fügen Sie die folgenden Inhalte in diese Datei ein:

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

3. Nun müssen wir unsere `Todo`-Komponente in `Todos.svelte` importieren. Gehen Sie jetzt zu dieser Datei und fügen Sie die folgende `import`-Anweisung unter Ihrer vorherigen hinzu:

   ```js
   import Todo from "./Todo.svelte";
   ```

4. Als nächstes müssen wir unseren `{#each}`-Block aktualisieren, um eine `<Todo>`-Komponente für jedes To-do einzuschließen, anstatt des Codes, der in `Todo.svelte` verschoben wurde. Wir übergeben auch das aktuelle `todo`-Objekt als Eigenschaft an die Komponente.

   Aktualisieren Sie den `{#each}`-Block in `Todos.svelte` wie folgt:

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

Die Liste der To-dos wird auf der Seite angezeigt und die Kontrollkästchen sollten funktionieren (versuchen Sie, ein paar zu aktivieren/deaktivieren, und beobachten Sie, dass die Filter weiterhin wie erwartet funktionieren), aber unsere Statusüberschrift "x von y Aufgaben abgeschlossen" wird nicht mehr entsprechend aktualisiert. Das liegt daran, dass unsere `Todo`-Komponente das To-do über die Eigenschaft empfängt, aber keine Informationen an ihr übergeordnetes Element zurückschickt. Wir werden dies später beheben.

## Daten zwischen Komponenten teilen: Props-Down, Events-Up-Muster

Das `bind`-Directive ist sehr direkt und ermöglicht es Ihnen, Daten zwischen einer übergeordneten und einer untergeordneten Komponente mit minimalem Aufwand zu teilen. Wenn Ihre Anwendung jedoch größer und komplexer wird, kann es leicht schwierig werden, den Überblick über alle gebundenen Werte zu behalten. Ein anderer Ansatz ist das "Props-Down, Events-Up"-Kommunikationsmuster.

Grundsätzlich beruht dieses Muster darauf, dass untergeordnete Komponenten Daten von ihren Eltern über Eigenschaften empfangen und übergeordnete Komponenten ihren Zustand aktualisieren, indem sie auf Ereignisse reagieren, die von den untergeordneten Komponenten ausgehen. Also fließen Props von Eltern zu Kind und Ereignisse steigen von Kind zu Eltern auf. Dieses Muster etabliert einen bidirektionalen Informationsfluss, der vorhersehbar und leichter nachvollziehbar ist.

Schauen wir uns an, wie wir unsere eigenen Ereignisse auslösen, um die fehlende _Löschen_-Button-Funktionalität neu zu implementieren.

Um benutzerdefinierte Ereignisse zu erstellen, verwenden wir das `createEventDispatcher`-Utility. Dies wird eine `dispatch()`-Funktion zurückgeben, die es uns ermöglicht, benutzerdefinierte Ereignisse auszulösen. Wenn Sie ein Ereignis auslösen, müssen Sie den Namen des Ereignisses und optional ein Objekt mit zusätzlichen Informationen übergeben, das Sie an jeden Listener übergeben möchten. Diese zusätzlichen Daten werden in der `detail`-Eigenschaft des Ereignisobjekts verfügbar sein.

> [!NOTE]
> Benutzerdefinierte Ereignisse in Svelte teilen dieselbe API wie reguläre DOM-Ereignisse. Außerdem können Sie ein Ereignis an Ihre übergeordnete Komponente weitergeben, indem Sie `on:event` ohne Handler angeben.

Wir werden unsere `Todo`-Komponente bearbeiten, um ein `remove`-Ereignis auszulösen, wobei das entfernte To-do als zusätzliche Information übergeben wird.

1. Fügen Sie zuerst die folgende Zeile zum Anfang des `<script>`-Abschnitts der `Todo`-Komponente hinzu:

   ```js
   import { createEventDispatcher } from "svelte";

   const dispatch = createEventDispatcher();
   ```

2. Aktualisieren Sie nun den _Löschen_-Button im Markup-Abschnitt derselben Datei, sodass er so aussieht:

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Mit `dispatch('remove', todo)` lösen wir ein `remove`-Ereignis aus und übergeben als zusätzliche Daten das `todo`, das gelöscht wird. Der Handler wird mit einem Ereignisobjekt aufgerufen, dessen zusätzliche Daten in der `event.detail`-Eigenschaft verfügbar sind.

3. Nun müssen wir diesem Ereignis von innerhalb von `Todos.svelte` aus lauschen und entsprechend handeln. Gehen Sie zurück zu dieser Datei und aktualisieren Sie Ihren `<Todo>`-Komponentenaufruf wie folgt:

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   Unser Handler erhält den Parameter `e` (das Ereignisobjekt), das wie zuvor beschrieben das zu löschende To-do in der `detail`-Eigenschaft enthält.

4. An diesem Punkt, wenn Sie Ihre App erneut ausprobieren, sollten Sie sehen, dass die _Löschen_-Funktionalität jetzt wieder funktioniert. Unser benutzerdefiniertes Ereignis hat also wie erhofft funktioniert. Darüber hinaus sendet der `remove`-Ereignislistener die Datenänderung zurück an den übergeordneten Element, sodass unsere Statusüberschrift "x von y Aufgaben abgeschlossen" jetzt auch dann entsprechend aktualisiert wird, wenn To-dos gelöscht werden.

Nun kümmern wir uns um das `update`-Ereignis, damit unsere übergeordnete Komponente über Änderungen an einem To-do informiert werden kann.

## Aktualisieren von To-dos

Wir müssen noch die Funktionalität implementieren, die es uns ermöglicht, bestehende To-dos zu bearbeiten. Wir werden einen Bearbeitungsmodus in die `Todo`-Komponente integrieren. Im Bearbeitungsmodus zeigen wir ein `<input>`-Feld an, das es uns erlaubt, den aktuellen To-do-Namen zu bearbeiten, mit zwei Buttons, um unsere Änderungen zu bestätigen oder abzubrechen.

### Die Ereignisse handhaben

1. Wir benötigen eine Variable, um zu verfolgen, ob wir uns im Bearbeitungsmodus befinden, und eine andere, um den Namen der Aufgabe zu speichern, die aktualisiert wird. Fügen Sie die folgenden Variablendefinitionen am Ende des `<script>`-Abschnitts der `Todo`-Komponente hinzu:

   ```js
   let editing = false; // track editing mode
   let name = todo.name; // hold the name of the to-do being edited
   ```

2. Wir müssen entscheiden, welche Ereignisse unsere `Todo`-Komponente auslösen wird:

   - Wir könnten unterschiedliche Ereignisse für das Umschalten des Status und das Bearbeiten des Namens auslösen (zum Beispiel `updateTodoStatus` und `updateTodoName`).
   - Oder wir könnten einen allgemeineren Ansatz wählen und ein einzelnes `update`-Ereignis für beide Operationen auslösen.

   Wir werden den zweiten Ansatz wählen, um eine andere Technik zu demonstrieren. Der Vorteil dieses Ansatzes ist, dass wir später mehr Felder zu den To-dos hinzufügen können und dennoch alle Updates mit demselben Ereignis abwickeln.

   Lassen Sie uns eine `update()`-Funktion erstellen, die die Änderungen empfängt und ein Update-Ereignis mit dem modifizierten To-do auslöst. Fügen Sie das folgende, erneut am Ende des `<script>`-Abschnitts hinzu:

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Hier verwenden wir die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das originale To-do mit den darauf angewendeten Änderungen zurückzugeben.

3. Als nächstes erstellen wir verschiedene Funktionen, um jede Benutzeraktion zu verarbeiten. Wenn sich das To-do im Bearbeitungsmodus befindet, kann der Benutzer die Änderungen speichern oder abbrechen. Wenn es sich nicht im Bearbeitungsmodus befindet, kann der Benutzer das To-do löschen, bearbeiten oder seinen Status zwischen abgeschlossen und aktiv umschalten.

   Fügen Sie den folgenden Funktionssatz unter Ihrer vorherigen Funktion hinzu, um diese Aktionen zu bearbeiten:

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

Nun müssen wir das Markup unserer `Todo`-Komponente aktualisieren, um die obigen Funktionen aufzurufen, wenn die entsprechenden Aktionen ausgeführt werden.

Um den Bearbeitungsmodus zu handhaben, verwenden wir die `editing`-Variable, die ein boolescher Wert ist. Wenn sie `true` ist, sollte sie das `<input>`-Feld zum Bearbeiten des To-do-Namens und die _Abbrechen_- und _Speichern_-Buttons anzeigen. Wenn es sich nicht im Bearbeitungsmodus befindet, wird es das Kontrollkästchen, den To-do-Namen und die Buttons zum Bearbeiten und Löschen des To-dos anzeigen.

Um dies zu erreichen, verwenden wir einen [`if`-Block](https://svelte.dev/docs/logic-blocks#if). Der `if`-Block rendert bedingt einige Markup. Beachten Sie, dass er die Markup nicht einfach basierend auf der Bedingung zeigt oder verbirgt — er wird die Elemente je nach Bedingung dynamisch aus dem DOM hinzufügen und entfernen.

Wenn `editing` `true` ist, zeigt Svelte zum Beispiel das Aktualisierungsformular an; wenn es `false` ist, wird es es aus dem DOM entfernen und das Kontrollkästchen hinzufügen. Dank Svelte-Mehrdeutigkeit reicht es aus, den Wert der `editing`-Variable zuzuweisen, um die korrekten HTML-Elemente anzuzeigen.

Das folgende zeigt Ihnen eine Idee, wie die grundlegende Struktur des `if`-Blocks aussieht:

```svelte
<div class="stack-small">
  {#if editing}
  <!-- markup for editing to-do: label, input text, Cancel and Save Button -->
  {:else}
  <!-- markup for displaying to-do: checkbox, label, Edit and Delete Button -->
  {/if}
</div>
```

Der nicht bearbeitende Abschnitt — das heißt, der `{:else}`-Teil (untere Hälfte) des `if`-Blocks — wird sehr ähnlich zu dem sein, den wir in unserer `Todos`-Komponente hatten. Der einzige Unterschied ist, dass wir `onToggle()`, `onEdit()` und `onRemove()` aufrufen, abhängig von der Benutzeraktion.

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

- Wenn der Benutzer den _Edit_-Button drückt, führen wir `onEdit()` aus, das einfach `editing` auf `true` setzt.
- Wenn der Benutzer auf das Kontrollkästchen klickt, rufen wir die `onToggle()`-Funktion auf, die `update()` ausführt und ein Objekt mit dem neuen `completed`-Wert als Parameter übergibt.
- Die `update()`-Funktion löst das `update`-Ereignis aus, wobei eine Kopie des ursprünglichen To-dos mit den angewendeten Änderungen als zusätzliche Informationen übergeben wird.
- Schließlich löst die `onRemove()`-Funktion das `remove`-Ereignis aus und übergibt das zu löschende `todo` als zusätzliche Daten.

Die Bearbeitungs-UI (die obere Hälfte) enthält ein `<input>`-Feld und zwei Buttons, um Änderungen zu speichern oder abzubrechen:

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

Wenn der Benutzer den _Edit_-Button drückt, wird die `editing`-Variable auf `true` gesetzt, und Svelte entfernt das Markup im `{:else}`-Teil des DOMs und ersetzt es durch das Markup im `{#if}`-Abschnitt.

Die `value`-Eigenschaft des `<input>` wird an die `name`-Variable gebunden, und die Buttons zum Abbrechen und Speichern der Änderungen rufen `onCancel()` bzw. `onSave()` auf (wir haben diese Funktionen zuvor hinzugefügt):

- Wenn `onCancel()` aufgerufen wird, wird `name` auf seinen ursprünglichen Wert zurückgesetzt (wie bei der Übergabe als Eigenschaft) und wir verlassen den Bearbeitungsmodus (indem wir `editing` auf `false` setzen).
- Wenn `onSave()` aufgerufen wird, führen wir die `update()`-Funktion aus – übergeben den geänderten `name` – und verlassen den Bearbeitungsmodus.

Wir deaktivieren den _Save_-Button auch, wenn das `<input>` leer ist, indem wir das Attribut `disabled={!name}` verwenden, und erlauben dem Benutzer, die Bearbeitung mit der <kbd>Escape</kbd>-Taste zu beenden, so:

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

Wir verwenden auch `todo.id`, um eindeutige IDs für die neuen Eingabekontrollen und Labels zu erstellen.

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
   > Wir könnten dies weiter in zwei verschiedene Komponenten aufteilen, eine für die Bearbeitung des To-dos und eine andere zum Anzeigen. Letztendlich hängt es davon ab, wie wohl Sie sich mit dieser Komplexität in einer einzigen Komponente fühlen. Sie sollten auch in Betracht ziehen, ob eine weitere Aufteilung es ermöglichen würde, diese Komponente in einem anderen Kontext wiederzuverwenden.

2. Um die Aktualisierungsfunktionalität zum Laufen zu bringen, müssen wir das `update`-Ereignis von der `Todos`-Komponente aus behandeln. Fügen Sie in dessen `<script>`-Abschnitt diesen Handler hinzu:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   Wir finden das `todo` in unserem `todos`-Array anhand von `id` und aktualisieren seinen Inhalt mit der Spread-Syntax. In diesem Fall hätten wir auch einfach `todos[i] = todo` verwenden können, aber diese Implementierung ist widerstandsfähiger und ermöglicht es der `Todo`-Komponente, nur die aktualisierten Teile des To-dos zurückzugeben.

3. Als Nächstes müssen wir dem `update`-Ereignis auf unserem `<Todo>`-Komponentenaufruf lauschen und unsere `updateTodo()`-Funktion ausführen, wenn dies auftritt, um den `name`- und `completed`-Status zu ändern. Aktualisieren Sie Ihren \<Todo>-Aufruf so:

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. Probieren Sie Ihre App erneut aus und Sie werden sehen, dass Sie To-dos hinzufügen, bearbeiten, löschen, die Bearbeitung abbrechen und den Erledigungsstatus umschalten können. Und unsere Statusüberschrift "x von y Aufgaben abgeschlossen" wird jetzt auch dann entsprechend aktualisiert, wenn To-dos abgeschlossen werden.

Wie Sie sehen können, ist es einfach, das "Props-Down, Events-Up"-Muster in Svelte zu implementieren. Dennoch kann `bind` für einfache Komponenten eine gute Wahl sein; Svelte lässt Ihnen die Wahl.

> [!NOTE]
> Svelte bietet anspruchsvollere Mechanismen, um Informationen zwischen Komponenten zu teilen: die [Context-API](https://svelte.dev/docs/svelte#setcontext) und [Stores](https://svelte.dev/docs/svelte-store). Die Context-API bietet einen Mechanismus, um Komponenten und deren Nachkommen "miteinander sprechen" zu lassen, ohne Daten und Funktionen als Props zu übergeben oder viele Ereignisse auszulösen. Stores ermöglichen es Ihnen, reaktive Daten zwischen nicht hierarchisch verwandten Komponenten zu teilen. Wir werden uns Stores später in der Serie ansehen.

## Der Code bisher

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie auf Ihre Kopie unseres Repos folgendermaßen zu:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Zusammenfassung

Nun haben wir alle erforderlichen Funktionalitäten unserer App an Ort und Stelle. Wir können To-dos anzeigen, hinzufügen, bearbeiten und löschen, sie als abgeschlossen markieren und nach Status filtern.

In diesem Artikel haben wir die folgenden Themen behandelt:

- Extraktion von Funktionalität in eine neue Komponente
- Übergabe von Informationen von Kind zu Eltern durch einen als Eigenschaft empfangenen Handler
- Übergabe von Informationen von Kind zu Eltern über das `bind`-Directive
- Bedingtes Rendern von Markup-Blöcken mithilfe des `if`-Blocks
- Implementierung des "Props-Down, Events-Up"-Kommunikationsmusters
- Erstellen und Lauschen auf benutzerdefinierte Ereignisse

Im nächsten Artikel setzen wir die Komponentisierung unserer App fort und betrachten einige fortgeschrittene Techniken für die Arbeit mit dem DOM.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
