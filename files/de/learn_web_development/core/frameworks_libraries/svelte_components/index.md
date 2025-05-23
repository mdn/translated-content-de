---
title: Komponentisierung unserer Svelte-App
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_components
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir begonnen, unsere To-Do-Liste-App zu entwickeln. Das Hauptziel dieses Artikels ist es, zu untersuchen, wie wir unsere App in überschaubare Komponenten aufteilen und Informationen zwischen ihnen teilen können. Wir werden unsere App in Komponenten aufteilen und dann zusätzliche Funktionalitäten hinzufügen, die es den Benutzern ermöglichen, bestehende Komponenten zu aktualisieren.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          > besitzen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie unsere App in Komponenten aufgeteilt wird und Informationen zwischen ihnen ausgetauscht werden.
      </td>
    </tr>
  </tbody>
</table>

## Programmieren Sie mit uns mit

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Stand der App zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Die App in Komponenten aufteilen

In Svelte besteht eine Anwendung aus einer oder mehreren Komponenten. Eine Komponente ist ein wiederverwendbarer, in sich geschlossener Codeblock, der HTML, CSS und JavaScript umfasst, die zusammengehören und in einer `.svelte`-Datei geschrieben sind. Komponenten können groß oder klein sein, aber sie sind in der Regel klar definiert: Die effektivsten Komponenten dienen einem einzigen, offensichtlichen Zweck.

Der Nutzen von Komponenten ist vergleichbar mit der allgemeinen Best Practice, Ihren Code in überschaubare Teile zu organisieren. Es hilft Ihnen, zu verstehen, wie sie miteinander in Beziehung stehen, fördert die Wiederverwendung und macht Ihren Code einfacher verständlich, wartbar und erweiterbar.

Aber wie wissen Sie, was in eine eigene Komponente aufgeteilt werden sollte?

Es gibt keine festen Regeln dafür. Einige Leute bevorzugen einen intuitiven Ansatz und beginnen, das Markup zu betrachten und Kästchen um jede Komponente und Unterkomponente zu zeichnen, die anscheinend ihre eigene Logik hat.

Andere wenden dieselben Techniken an, die verwendet werden, um zu entscheiden, ob Sie eine neue Funktion oder ein neues Objekt erstellen sollten. Eine solche Technik ist das Single Responsibility Principle — das heißt, eine Komponente sollte idealerweise nur eine Sache tun. Wenn sie größer wird, sollte sie in kleinere Unterkomponenten aufgeteilt werden.

Beide Ansätze sollten sich ergänzen und dabei helfen, wie Sie Ihre Komponenten am besten organisieren.

Letztendlich werden wir unsere App in die folgenden Komponenten aufteilen:

- `Alert.svelte`: Eine allgemeine Benachrichtigungsbox, um Aktionen zu kommunizieren, die aufgetreten sind.
- `NewTodo.svelte`: Die Texteingabe und der Button, die es Ihnen ermöglichen, einen neuen To-Do-Artikel einzugeben.
- `FilterButton.svelte`: Die _Alle_, _Aktiv_ und _Erledigt_ Buttons, die es Ihnen ermöglichen, Filter auf die angezeigten To-Do-Items anzuwenden.
- `TodosStatus.svelte`: Die Überschrift "x von y Artikeln erledigt".
- `Todo.svelte`: Ein einzelner To-Do-Artikel. Jeder sichtbare To-Do-Artikel wird in einer separaten Kopie dieser Komponente angezeigt.
- `MoreActions.svelte`: Die Buttons _Alle markieren_ und _Erledigte entfernen_ am unteren Rand der Benutzeroberfläche, mit denen Sie Massenaktionen auf den To-Do-Items ausführen können.

![grafische Darstellung der Liste der Komponenten in unserer App](01-todo-components.png)

In diesem Artikel konzentrieren wir uns darauf, die Komponenten `FilterButton` und `Todo` zu erstellen; zu den anderen kommen wir in zukünftigen Artikeln.

Lassen Sie uns anfangen.

> [!NOTE]
> Im Prozess der Erstellung unserer ersten paar Komponenten werden wir auch verschiedene Techniken zum Kommunizieren zwischen Komponenten kennenlernen und die Vor- und Nachteile jeder einzelnen untersuchen.

## Unser Filter-Komponente extrahieren

Wir beginnen, indem wir unsere `FilterButton.svelte` erstellen.

1. Erstellen Sie zuerst eine neue Datei, `components/FilterButton.svelte`.
2. In dieser Datei deklarieren wir eine `filter`-Prop und kopieren dann das entsprechende Markup von `Todos.svelte` hinein. Fügen Sie folgenden Inhalt in die Datei ein:

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

3. Zurück in unserer `Todos.svelte`-Komponente möchten wir unsere `FilterButton`-Komponente verwenden. Zuerst müssen wir sie importieren. Fügen Sie folgende Zeile oben in den `<script>`-Abschnitt von `Todos.svelte` ein:

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. Ersetzen Sie das `<div class="filters...` Element durch einen Aufruf an die `FilterButton`-Komponente, die den aktuellen Filter als Prop übernimmt. Die folgende Zeile ist alles, was Sie benötigen:

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> Denken Sie daran, dass, wenn der Name des HTML-Attributs und die Variable übereinstimmen, sie durch `{variable}` ersetzt werden können. Deshalb konnten wir `<FilterButton filter={filter} />` durch `<FilterButton {filter} />` ersetzen.

Bis jetzt läuft alles gut! Probieren Sie die App jetzt aus. Sie werden bemerken, dass, wenn Sie auf die Filter-Buttons klicken, diese ausgewählt werden und das Design entsprechend aktualisiert wird. Aber wir haben ein Problem: Die To-Dos werden nicht gefiltert. Das liegt daran, dass die `filter`-Variable von der `Todos`-Komponente zur `FilterButton`-Komponente über die Prop fließt, Änderungen, die in der `FilterButton`-Komponente auftreten, aber nicht zurück zu ihrem übergeordneten Element fließen — die Datenbindung ist standardmäßig unidirektional. Schauen wir uns eine Möglichkeit an, dies zu lösen.

## Daten zwischen Komponenten teilen: Ein Handler als Prop übergeben

Eine Möglichkeit, den untergeordneten Komponenten die Eltern über Änderungen zu benachrichtigen, besteht darin, einen Handler als Prop zu übergeben. Die untergeordnete Komponente wird den Handler ausführen und die erforderlichen Informationen als Parameter übergeben, und der Handler wird den Zustand des übergeordneten Elements ändern.

In unserem Fall wird die `FilterButton`-Komponente einen `onclick`-Handler von ihrem übergeordneten Element empfangen. Jedes Mal, wenn der Benutzer auf einen Filter-Button klickt, ruft das untergeordnete Element den `onclick`-Handler auf und gibt den ausgewählten Filter als Parameter an sein übergeordnetes Element zurück.

Wir werden einfach die `onclick`-Prop deklarieren und einen Dummy-Handler zuweisen, um Fehler zu vermeiden, so:

```js
export let onclick = (clicked) => {};
```

Und wir werden die reaktive Anweisung `$: onclick(filter)` deklarieren, um den `onclick`-Handler immer dann aufzurufen, wenn die `filter`-Variable aktualisiert wird.

1. Der `<script>`-Abschnitt unserer `FilterButton`-Komponente sollte am Ende so aussehen. Aktualisieren Sie ihn jetzt:

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. Wenn wir `FilterButton` in `Todos.svelte` aufrufen, müssen wir den Handler angeben. Aktualisieren Sie es folgendermaßen:

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

Wenn ein Filter-Button angeklickt wird, aktualisieren wir einfach die Filter-Variable mit dem neuen Filter. Jetzt wird unsere `FilterButton`-Komponente wieder funktionieren.

## Einfachere bidirektionale Datenbindung mit dem Bind-Directive

Im vorherigen Beispiel haben wir festgestellt, dass unsere `FilterButton`-Komponente nicht funktioniert hat, da unser Anwendungszustand über die `filter`-Prop vom Eltern- zum Kindelement fließt, aber nicht zurück. Also haben wir eine `onclick`-Prop hinzugefügt, um es dem Kindelement zu ermöglichen, den neuen `filter`-Wert seinem übergeordneten Element mitzuteilen.

Es funktioniert, ist jedoch OK, aber Svelte bietet uns eine einfachere und direktere Möglichkeit, eine bidirektionale Datenbindung zu erzielen. Daten fließen gewöhnlich von Eltern zu Kindern durch Props. Wenn wir möchten, dass sie auch in die andere Richtung fließen, von Kind zu Eltern, können wir die [`bind:`-Directive](https://svelte.dev/docs/element-directives#bind-property) verwenden.

Mit `bind` weisen wir Svelte an, dass alle Änderungen, die an der `filter`-Prop in der `FilterButton`-Komponente vorgenommen werden, wieder nach oben zum übergeordneten Element, `Todos`, weitergegeben werden sollen. Das heißt, wir binden den Wert der Filter-Variablen im Eltern- an ihren Wert im untergeordneten Element.

1. Aktualisieren Sie in `Todos.svelte` den Aufruf der `FilterButton`-Komponente wie folgt:

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Wie üblich bietet Svelte uns eine schöne Kurzform: `bind:value={value}` ist gleichbedeutend mit `bind:value`. Daher könnten Sie im obigen Beispiel einfach `<FilterButton bind:filter />` schreiben.

2. Die untergeordnete Komponente kann nun den Wert der Filter-Variablen des Eltern-Elements ändern, daher benötigen wir die `onclick`-Prop nicht mehr. Ändern Sie das `<script>`-Element Ihrer `FilterButton`-Datei wie folgt:

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. Probieren Sie Ihre App erneut aus, und Sie sollten noch sehen, dass Ihre Filter korrekt funktionieren.

## Unsere Todo-Komponente erstellen

Jetzt erstellen wir eine `Todo`-Komponente, um jedes einzelne To-Do zu kapseln, einschließlich des Kontrollkästchens und der Bearbeitungslogik, damit Sie ein vorhandenes To-Do ändern können.

Unsere `Todo`-Komponente erhält ein einzelnes `todo`-Objekt als Prop. Lassen Sie uns die `todo`-Prop deklarieren und den Code aus der `Todos`-Komponente verschieben. Nur für den Moment ersetzen wir den Aufruf von `removeTodo` durch eine Warnung. Wir fügen diese Funktion später wieder hinzu.

1. Erstellen Sie eine neue Komponentendatei, `components/Todo.svelte`.
2. Platzieren Sie den folgenden Inhalt in dieser Datei:

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

3. Jetzt müssen wir unsere `Todo`-Komponente in `Todos.svelte` importieren. Gehen Sie nun zu dieser Datei und fügen Sie folgende `import`-Anweisung unter Ihrer vorherigen ein:

   ```js
   import Todo from "./Todo.svelte";
   ```

4. Als Nächstes müssen wir unseren `{#each}`-Block aktualisieren, um eine `<Todo>`-Komponente für jedes To-Do zu enthalten, anstatt den Code, der in `Todo.svelte` verschoben wurde. Wir übergeben auch das aktuelle `todo`-Objekt als Prop in die Komponente.

   Aktualisieren Sie den `{#each}`-Block in `Todos.svelte` folgendermaßen:

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

Die Liste der To-Dos wird auf der Seite angezeigt und die Kontrollkästchen sollten funktionieren (versuchen Sie, einige zu aktivieren/deaktivieren, und beobachten Sie, dass die Filter noch wie erwartet funktionieren), aber unsere Statusüberschrift "x von y Artikeln erledigt" wird nicht mehr entsprechend aktualisiert. Das liegt daran, dass unsere `Todo`-Komponente das To-Do über die Prop erhält, aber keine Informationen an ihr übergeordnetes Element zurücksendet. Wir werden dies später beheben.

## Daten zwischen Komponenten teilen: Props-down, Events-up-Muster

Die `bind`-Directive ist ziemlich einfach und ermöglicht es Ihnen, Daten zwischen einer Eltern- und einer Kindelementkomponente mit minimalem Aufwand zu teilen. Bei größeren und komplexeren Anwendungen kann es jedoch leicht schwierig werden, alle Ihre gebundenen Werte im Blick zu behalten. Ein anderer Ansatz ist das Kommunikationsmuster "Props-down, Events-up".

Im Wesentlichen basiert dieses Muster darauf, dass untergeordnete Komponenten Daten von ihren Eltern über Props erhalten und übergeordnete Komponenten ihren Zustand durch das Handling von Ereignissen aktualisieren, die von untergeordneten Komponenten emittiert werden. Props fließen also von Eltern zu Kind und Ereignisse von Kind zu Eltern nach oben. Dieses Muster stellt einen Zwei-Wege-Fluss von Informationen bereit, der vorhersehbar und leichter nachvollziehbar ist.

Lassen Sie uns nun ansehen, wie wir unsere eigenen Ereignisse emittieren, um die fehlende _Löschen_- Button-Funktionalität wieder zu implementieren.

Um benutzerdefinierte Ereignisse zu erstellen, verwenden wir das `createEventDispatcher`-Utility. Dies gibt eine `dispatch()`-Funktion zurück, mit der wir benutzerdefinierte Ereignisse emittieren können. Wenn Sie ein Ereignis emittieren, müssen Sie den Namen des Ereignisses und optional ein Objekt mit zusätzlichen Informationen übergeben, das Sie an jeden Zuhörer übergeben möchten. Diese zusätzlichen Daten sind im `detail`-Eigentum des Ereignisobjekts verfügbar.

> [!NOTE]
> Benutzerdefinierte Ereignisse in Svelte teilen dieselbe API wie reguläre DOM-Ereignisse. Außerdem können Sie ein Ereignis an Ihre Elternkomponente weiterleiten, indem Sie `on:event` ohne einen Handler angeben.

Wir werden unsere `Todo`-Komponente so bearbeiten, dass sie ein `remove`-Ereignis emittiert und das entfernte To-Do als zusätzliche Informationen übergibt.

1. Fügen Sie zuerst die folgenden Zeilen oben im `<script>`-Abschnitt der `Todo`-Komponente hinzu:

   ```js
   import { createEventDispatcher } from "svelte";

   const dispatch = createEventDispatcher();
   ```

2. Aktualisieren Sie jetzt den _Löschen_-Button im Markup-Abschnitt derselben Datei, damit er wie folgt aussieht:

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Mit `dispatch('remove', todo)` emittieren wir ein `remove`-Ereignis und übergeben die als zusätzliche Daten das zu löschende `todo`. Der Handler wird mit einem Ereignisobjekt aufgerufen, wobei die zusätzlichen Daten im `event.detail`-Eigentum des Ereignisobjekts verfügbar sind.

3. Nun müssen wir in `Todos.svelte` dieses Ereignis abhören und entsprechend handeln. Gehen Sie zurück zu dieser Datei und aktualisieren Sie Ihren `<Todo>`-Komponentenaufruf wie folgt:

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   Unser Handler erhält den Parameter `e` (das Ereignisobjekt), das wie zuvor beschrieben das zu löschende To-Do im `detail`-Eigentum enthält.

4. Versuchen Sie an diesem Punkt Ihre App erneut. Sie sollten sehen, dass die Löschfunktion nun wieder funktioniert. Unser benutzerdefiniertes Ereignis hat also wie erhofft funktioniert. Darüber hinaus sendet der `remove`-Event-Listener die Datenänderung zurück an das übergeordnete Element, sodass unsere Statusüberschrift "x von y Artikeln erledigt" nun angemessen aktualisiert wird, wenn To-Dos gelöscht werden.

Jetzt kümmern wir uns um das `update`-Ereignis, damit unsere Elternkomponente über alle geänderten To-Dos benachrichtigt wird.

## To-Dos aktualisieren

Wir müssen noch die Funktionalität implementieren, die es uns ermöglicht, bestehende To-Dos zu bearbeiten. Wir müssen einen Bearbeitungsmodus in die `Todo`-Komponente einfügen. Wenn Sie in den Bearbeitungsmodus wechseln, zeigen wir ein `<input>`-Feld an, das uns ermöglicht, den aktuellen Namen des To-Dos zu bearbeiten, zusammen mit zwei Buttons, um unsere Änderungen zu bestätigen oder abzubrechen.

### Die Ereignisse bearbeiten

1. Wir benötigen eine Variable, um zu verfolgen, ob wir uns im Bearbeitungsmodus befinden, und eine andere, um den Namen der Aufgabe zu speichern, die aktualisiert wird. Fügen Sie die folgenden Variablendefinitionen am unteren Rand des `<script>`-Abschnitts der `Todo`-Komponente hinzu:

   ```js
   let editing = false; // track editing mode
   let name = todo.name; // hold the name of the to-do being edited
   ```

2. Wir müssen entscheiden, welche Ereignisse unsere `Todo`-Komponente emittieren wird:

   - Wir könnten unterschiedliche Ereignisse für das Umschalten des Status und die Bearbeitung des Namens emittieren (zum Beispiel `updateTodoStatus` und `updateTodoName`).
   - Oder wir könnten einen generischeren Ansatz wählen und ein einzelnes `update`-Ereignis für beide Operationen emittieren.

   Wir werden den zweiten Ansatz wählen, um eine andere Technik zu demonstrieren. Der Vorteil dieses Ansatzes besteht darin, dass wir später mehr Felder zu den To-Dos hinzufügen und weiterhin alle Updates mit demselben Ereignis behandeln können.

   Lassen Sie uns eine `update()`-Funktion erstellen, die die Änderungen erhält und ein Update-Ereignis mit dem modifizierten To-Do emittiert. Fügen Sie das Folgende wieder am unteren Rand des `<script>`-Abschnitts hinzu:

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Hier verwenden wir die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das Original-To-Do mit den darauf angewendeten Änderungen zurückzugeben.

3. Als nächstes erstellen wir unterschiedliche Funktionen, um jede Benutzeraktion zu behandeln. Wenn sich das To-Do im Bearbeitungsmodus befindet, kann der Benutzer die Änderungen speichern oder abbrechen. Wenn es nicht im Bearbeitungsmodus ist, kann der Benutzer das To-Do löschen, bearbeiten oder seinen Status zwischen erledigt und aktiv umschalten.

   Fügen Sie die folgenden Funktionen unterhalb Ihrer vorherigen Funktion hinzu, um diese Aktionen zu bearbeiten:

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

Um den Bearbeitungsmodus zu verwalten, verwenden wir die `editing`-Variable, die ein Boolean ist. Wenn sie `true` ist, sollte das `<input>`-Feld für die Bearbeitung des To-Do-Namens angezeigt werden, zusammen mit den _Abbrechen_ und _Speichern_-Buttons. Wenn es sich nicht im Bearbeitungsmodus befindet, wird das Kontrollkästchen, der To-Do-Name und die Buttons zum Bearbeiten und Löschen des To-Dos angezeigt.

Um dies zu erreichen, verwenden wir einen [`if`](https://svelte.dev/docs/logic-blocks#if)-Block. Der `if`-Block rendert bedingt ein Markup. Beachten Sie, dass es die Markup-Elemente nicht einfach basierend auf der Bedingung anzeigt oder verbirgt — er wird die Elemente dynamisch je nach Bedingung zum DOM hinzufügen oder entfernen.

Wenn `editing` `true` ist, zeigt Svelte das Update-Formular an; wenn es `false` ist, entfernt es es aus dem DOM und fügt das Kontrollkästchen hinzu. Dank der Svelte-Reaktivität reicht es aus, den Wert der Editing-Variable zuzuweisen, um die richtigen HTML-Elemente anzuzeigen.

Das Folgende gibt Ihnen eine Vorstellung, wie die grundlegende `if`-Blockstruktur aussieht:

```svelte
<div class="stack-small">
  {#if editing}
  <!-- markup for editing to-do: label, input text, Cancel and Save Button -->
  {:else}
  <!-- markup for displaying to-do: checkbox, label, Edit and Delete Button -->
  {/if}
</div>
```

Der nicht-bearbeitende Abschnitt — das heißt, der {:else}-Teil (untere Hälfte) des `if`-Blocks — wird sehr ähnlich wie der sein, den wir in unserer `Todos`-Komponente hatten. Der einzige Unterschied besteht darin, dass wir `onToggle()`, `onEdit()` und `onRemove()` je nach Benutzeraktion aufrufen.

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

- Wenn der Benutzer die _Bearbeiten_-Taste drückt, führen wir `onEdit()` aus, die `editing` einfach auf `true` setzt.
- Wenn der Benutzer auf das Kontrollkästchen klickt, rufen wir die `onToggle()`-Funktion auf, die `update()` ausführt und ein Objekt mit dem neuen `completed`-Wert als Parameter übergibt.
- Die `update()`-Funktion emittiert das `update`-Ereignis und übergibt dabei als zusätzliche Information eine Kopie des ursprünglichen To-Do mit den darauf angewendeten Änderungen.
- Schließlich emittiert die `onRemove()`-Funktion das `remove`-Ereignis und übergibt das zu löschende `todo` als zusätzliche Daten.

Die Bearbeitungs-UI (die obere Hälfte) enthält ein `<input>`-Feld und zwei Buttons, um die Bearbeitung abzubrechen oder zu speichern:

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

Wenn der Benutzer die _Bearbeiten_-Taste drückt, wird `editing` auf `true` gesetzt und Svelte entfernt das Markup im {:else}-Teil aus dem DOM und ersetzt es durch das Markup im {#if}-Abschnitt.

Das `value`-Eigentum des `<input>` wird mit der `name`-Variablen verbunden und die Buttons zum Abbrechen und Speichern der Änderungen rufen `onCancel()` bzw. `onSave()` auf (wir haben diese Funktionen zuvor hinzugefügt):

- Wenn `onCancel()` aufgerufen wird, wird der `name` auf seinen ursprünglichen Wert zurückgesetzt (wenn als Prop übergeben) und wir verlassen den Bearbeitungsmodus (indem wir `editing` auf `false` setzen).
- Wenn `onSave()` aufgerufen wird, führen wir die `update()`-Funktion aus — und übergeben den geänderten `name` — und verlassen den Bearbeitungsmodus.

Wir deaktivieren auch den _Speichern_-Button, wenn das `<input>` leer ist, indem wir das `disabled={!name}`-Attribut verwenden, und erlauben dem Benutzer, die Bearbeitung mit der <kbd>Escape</kbd>-Taste abzubrechen, so:

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

Wir verwenden auch `todo.id`, um eindeutige IDs für die neuen Eingabesteuerelemente und Labels zu erstellen.

1. Das vollständige aktualisierte Markup unserer `Todo`-Komponente sieht wie folgt aus. Aktualisieren Sie es jetzt:

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
   > Wir könnten dies weiter in zwei verschiedene Komponenten aufteilen, eine zum Bearbeiten des To-Dos und die andere zum Anzeigen. Am Ende hängt es davon ab, wie wohl Sie sich fühlen, diesen Komplexitätsgrad in einer einzigen Komponente zu handhaben. Sie sollten auch berücksichtigen, ob eine weitere Aufteilung die Wiederverwendung dieser Komponente in einem anderen Kontext ermöglichen würde.

2. Um die Aktualisierungsfunktionalität zum Laufen zu bringen, müssen wir das `update`-Ereignis von der `Todos`-Komponente behandeln. Fügen Sie in ihrem `<script>`-Abschnitt diesen Handler hinzu:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   Wir finden das `todo` anhand der `id` in unserem `todos`-Array und aktualisieren dessen Inhalt mit der Spread-Syntax. In diesem Fall könnten wir auch einfach `todos[i] = todo` verwenden, aber diese Implementierung ist ausfallsicherer, indem sie der `Todo`-Komponente ermöglicht, nur die aktualisierten Teile des To-Do zurückzugeben.

3. Als Nächstes müssen wir auf das `update`-Ereignis bei unserem `<Todo>`-Komponentenaufruf hören und unsere `updateTodo()`-Funktion ausführen, wenn dies eintritt, um den `name`- und `completed`-Status zu ändern. Aktualisieren Sie Ihren \<Todo>-Aufruf so:

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. Probieren Sie Ihre App erneut aus und Sie sollten sehen, dass Sie To-Dos löschen, hinzufügen, bearbeiten, die Bearbeitung abbrechen und den Abschlussstatus umschalten können. Und unsere Statusüberschrift "x von y Artikeln erledigt" wird nun angemessen aktualisiert, wenn To-Dos als abgeschlossen markiert werden.

Wie Sie sehen, ist es einfach, das Kommunikationsmuster "Props-down, Events-up" in Svelte zu implementieren. Trotzdem kann für einfache Komponenten `bind` eine gute Wahl sein; Svelte lässt Ihnen die Wahl.

> [!NOTE]
> Svelte bietet fortschrittlichere Mechanismen, um Informationen zwischen den Komponenten zu teilen: die [Kontext-API](https://svelte.dev/docs/svelte#setcontext) und [Stores](https://svelte.dev/docs/svelte-store). Die Kontext-API bietet einen Mechanismus, durch den Komponenten und ihre Nachkommen miteinander "kommunizieren" können, ohne Daten und Funktionen als Props zu übergeben oder viele Ereignisse zu emittieren. Stores erlaubt es Ihnen, reaktive Daten zwischen Komponenten zu teilen, die hierarchisch nicht miteinander in Beziehung stehen. Wir werden später in der Serie einen Blick auf Stores werfen.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

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

Jetzt haben wir alle erforderlichen Funktionen unserer App implementiert. Wir können To-Dos anzeigen, hinzufügen, bearbeiten und löschen, sie als erledigt markieren und nach Status filtern.

In diesem Artikel haben wir die folgenden Themen behandelt:

- Funktionalität in eine neue Komponente extrahieren
- Informationen von Kind zu Eltern unter Verwendung eines als Prop erhaltenen Handlers übermitteln
- Informationen von Kind zu Eltern unter Verwendung der `bind`-Directive übermitteln
- Bedingtes Rendern von Markup-Blöcken mit dem `if`-Block
- Das Kommunikationsmuster "Props-down, Events-up" implementieren
- Benutzerdefinierte Ereignisse erstellen und abhören

Im nächsten Artikel werden wir fortfahren, unsere App zu komponentisieren, und einige fortgeschrittene Techniken für die Arbeit mit dem DOM untersuchen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
