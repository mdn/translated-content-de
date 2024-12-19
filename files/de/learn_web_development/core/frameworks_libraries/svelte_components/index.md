---
title: Komponentenbasierung unserer Svelte-App
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_components
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir mit der Entwicklung unserer To-do-Liste-App begonnen. Das Hauptziel dieses Artikels ist es, zu untersuchen, wie wir unsere App in handhabbare Komponenten aufteilen und Informationen zwischen ihnen austauschen können. Wir werden unsere App komponentenbasiert gestalten und dann mehr Funktionalität hinzufügen, um Benutzern zu ermöglichen, bestehende Komponenten zu aktualisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen vertraut sind und
          Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/der Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man unsere App in Komponenten aufteilt und Informationen zwischen ihnen austauscht.
      </td>
    </tr>
  </tbody>
</table>

## Coden Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu coden, beginnen Sie bei

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Aufteilen der App in Komponenten

In Svelte besteht eine Anwendung aus einer oder mehreren Komponenten. Eine Komponente ist ein wiederverwendbarer, eigenständiger Codeblock, der HTML, CSS und JavaScript kapselt, die zusammengehören, geschrieben in eine `.svelte` Datei. Komponenten können groß oder klein sein, sind aber in der Regel klar definiert: Die effektivsten Komponenten dienen einem einzigen, offensichtlichen Zweck.

Die Vorteile der Definition von Komponenten sind vergleichbar mit der allgemeineren Best Practice, Ihren Code in handhabbare Teile zu organisieren. Es hilft Ihnen zu verstehen, wie sie zueinander in Beziehung stehen, fördert die Wiederverwendung und macht Ihren Code leichter verständlich, wartbar und erweiterbar.

Aber wie wissen Sie, was in eine eigene Komponente aufgeteilt werden sollte?

Es gibt keine festen Regeln dafür. Manche Menschen bevorzugen einen intuitiven Ansatz und beginnen damit, das Markup zu betrachten und um jeden Komponenten- und Subkomponenten-Block, der offenbar eine eigene Logik besitzt, Kästchen zu zeichnen.

Andere Menschen wenden dieselben Techniken an, die auch zur Entscheidung verwendet werden, ob Sie eine neue Funktion oder ein neues Objekt erstellen sollten. Eine solche Technik ist das Single-Responsibility-Prinzip — das heißt, eine Komponente sollte idealerweise nur eine Sache tun. Wenn sie zu groß wird, sollte sie in kleinere Subkomponenten aufgeteilt werden.

Beide Ansätze sollten einander ergänzen und Ihnen helfen zu entscheiden, wie Sie Ihre Komponenten am besten organisieren.

Letztendlich werden wir unsere App in folgende Komponenten aufteilen:

- `Alert.svelte`: Eine allgemeine Benachrichtigungsbox zur Kommunikation von Aktionen, die stattgefunden haben.
- `NewTodo.svelte`: Das Texteingabefeld und der Button, mit denen Sie einen neuen To-do-Artikel eingeben können.
- `FilterButton.svelte`: Die _Alle_, _Aktiv_ und _Erledigt_ Buttons, die es Ihnen ermöglichen, Filter auf die angezeigten To-do-Elemente anzuwenden.
- `TodosStatus.svelte`: Die Überschrift "x von y Artikel abgeschlossen".
- `Todo.svelte`: Ein einzelnes To-do-Element. Jedes sichtbare To-do-Element wird in einer separaten Kopie dieser Komponente angezeigt.
- `MoreActions.svelte`: Die _Alle markieren_ und _Erledigte entfernen_ Buttons am unteren Rand der Benutzeroberfläche, die es Ihnen ermöglichen, Massenaktionen auf die To-do-Elemente auszuführen.

![Grafische Darstellung der Liste der in unserer App enthaltenen Komponenten](01-todo-components.png)

In diesem Artikel werden wir uns darauf konzentrieren, die `FilterButton`- und `Todo`-Komponenten zu erstellen; die anderen werden wir in zukünftigen Artikeln behandeln.

Lassen Sie uns beginnen.

> [!NOTE]
> Im Prozess der Erstellung unserer ersten beiden Komponenten werden wir auch verschiedene Techniken kennenlernen, um zwischen Komponenten zu kommunizieren, und die Vor- und Nachteile jeder Methode.

## Extrahieren unserer Filterkomponente

Wir beginnen mit der Erstellung unserer `FilterButton.svelte`.

1. Erstellen Sie zunächst eine neue Datei `components/FilterButton.svelte`.
2. In dieser Datei deklarieren wir eine `filter`-prop und kopieren dann das relevante Markup aus `Todos.svelte` hinein. Fügen Sie den folgenden Inhalt in die Datei ein:

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

3. Zurück in unserer `Todos.svelte`-Komponente möchten wir unsere `FilterButton`-Komponente verwenden. Zuerst müssen wir sie importieren. Fügen Sie die folgende Zeile oben im `<script>` Bereich von `Todos.svelte` hinzu:

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. Ersetzen Sie nun das `<div class="filters...`-Element durch einen Aufruf der `FilterButton`-Komponente, die den aktuellen Filter als prop übernimmt. Die folgende Zeile ist alles, was Sie benötigen:

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> Denken Sie daran, dass, wenn der HTML-Attributname und die Variable übereinstimmen, diese mit `{variable}` ersetzt werden können. Deshalb konnten wir `<FilterButton filter={filter} />` durch `<FilterButton {filter} />` ersetzen.

Bis jetzt so gut! Lassen Sie uns die App jetzt ausprobieren. Sie werden feststellen, dass, wenn Sie auf die Filterknöpfe klicken, diese ausgewählt sind und sich der Stil entsprechend aktualisiert. Aber wir haben ein Problem: Die To-dos werden nicht gefiltert. Das liegt daran, dass die `filter`-Variable vom `Todos`-Komponent zur `FilterButton`-Komponente über die prop fließt, aber Änderungen, die in der `FilterButton`-Komponente vorgenommen werden, nicht zu ihrem Elternteil zurückfließen — das Daten-Binding ist standardmäßig einseitig. Lassen Sie uns einen Weg finden, dies zu lösen.

## Datenaustausch zwischen Komponenten: Übergabe eines Handlers als prop

Ein Weg, um Kindkomponenten ihre Elternkomponenten über Änderungen zu informieren, besteht darin, einen Handler als prop zu übergeben. Die Kindkomponente führt den Handler aus und übergibt die benötigten Informationen als Parameter, und der Handler ändert den Zustand des Elternteils.

In unserem Fall erhält die `FilterButton`-Komponente einen `onclick` Handler von ihrem Elternteil. Wann immer der Benutzer auf irgendeinen Filterknopf klickt, wird das Kind den `onclick` Handler aufrufen, wobei der ausgewählte Filter als Parameter an das Elternteil zurückgegeben wird.

Wir deklarieren nur die `onclick`-prop und weisen einen Dummy-Handler zu, um Fehler zu vermeiden, wie folgt:

```js
export let onclick = (clicked) => {};
```

Und wir deklarieren die reaktive Anweisung `$: onclick(filter)`, um den `onclick`-Handler immer dann aufzurufen, wenn die `filter`-Variable aktualisiert wird.

1. Der `<script>`-Bereich unserer `FilterButton`-Komponente sollte am Ende so aussehen. Aktualisieren Sie ihn jetzt:

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. Jetzt, wenn wir `FilterButton` innerhalb `Todos.svelte` aufrufen, müssen wir den Handler angeben. Aktualisieren Sie es so:

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

Wann immer ein Filterknopf geklickt wird, aktualisieren wir einfach die `filter`-Variable mit dem neuen Filter. Jetzt funktioniert unsere `FilterButton`-Komponente wieder.

## Einfacheres Zwei-Wege-Daten-Binding mit dem Bind-Directive

Im vorherigen Beispiel haben wir festgestellt, dass unsere `FilterButton`-Komponente nicht funktionierte, weil unser Anwendungszustand durch die `filter` prop vom Elternteil zum Kind floss, aber nicht in die entgegengesetzte Richtung. Also fügten wir eine `onclick`-prop hinzu, um der Kindkomponente mitzuteilen, den neuen `filter`-Wert an ihre Eltern zu kommunizieren.

Es funktioniert, aber Svelte bietet uns einen einfacheren und direkteren Weg, um ein Zwei-Wege-Daten-Binding zu erreichen. Daten fließen normalerweise vom Elternteil zum Kind durch props. Wenn wir wollen, dass sie auch in die andere Richtung fließen, vom Kind zum Elternteil, können wir [das `bind:`-Directive](https://svelte.dev/docs/element-directives#bind-property) verwenden.

Mit `bind` werden wir Svelte mitteilen, dass alle Änderungen, die am `filter`-prop in der `FilterButton`-Komponente vorgenommen werden, zurück zum Elternteil propagiert werden sollten – das heißt, wir binden den Wert der `filter`-Variable im Elternteil an ihren Wert im Kind.

1. In `Todos.svelte` aktualisieren Sie den Aufruf der `FilterButton`-Komponente wie folgt:

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Wie üblich bietet Svelte ein schönes Kurzschreiben: `bind:value={value}` ist äquivalent zu `bind:value`. Also im obigen Beispiel könnte man einfach `<FilterButton bind:filter />` schreiben.

2. Die Kindkomponente kann jetzt den Wert der Filtervariable des Elternteils ändern, daher benötigen wir die `onclick`-prop nicht mehr. Ändern Sie das `<script>`-Element Ihres `FilterButton` wie folgt:

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. Probieren Sie Ihre App erneut aus, und Sie sollten sehen, dass Ihre Filter weiterhin korrekt funktionieren.

## Erstellen unserer Todo-Komponente

Jetzt erstellen wir eine `Todo`-Komponente, um jedes einzelne To-do zu kapseln, einschließlich des Kontrollkästchens und etwas Bearbeitungslogik, damit Sie ein bestehendes To-do ändern können.

Unsere `Todo`-Komponente erhält ein einzelnes `todo`-Objekt als prop. Lassen Sie uns die `todo` prop deklarieren und den Code aus der `Todos`-Komponente verschieben. Nur vorübergehend werden wir den Aufruf von `removeTodo` durch einen Alert ersetzen. Wir werden diese Funktionalität später wieder hinzufügen.

1. Erstellen Sie eine neue Komponenten-Datei, `components/Todo.svelte`.
2. Geben Sie den folgenden Inhalt in diese Datei ein:

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

3. Jetzt müssen wir unsere `Todo`-Komponente in `Todos.svelte` importieren. Gehen Sie jetzt zu dieser Datei und fügen Sie die folgende `import`-Anweisung unter Ihrer vorherigen hinzu:

   ```js
   import Todo from "./Todo.svelte";
   ```

4. Als nächstes müssen wir unseren `{#each}`-Block aktualisieren, um eine `<Todo>`-Komponente für jedes To-do einzuschließen, anstatt den Code, der in `Todo.svelte` verschoben wurde. Wir übergeben auch das aktuelle `todo`-Objekt als prop in die Komponente.

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

Die To-do-Liste wird auf der Seite angezeigt, und die Kontrollkästchen sollten funktionieren (versuchen Sie, ein paar zu markieren/abzumarkieren, und beobachten Sie dann, dass die Filter weiterhin wie erwartet funktionieren), aber unser Statuskopf "x von y Artikeln abgeschlossen" wird nicht mehr entsprechend aktualisiert. Das liegt daran, dass unsere `Todo`-Komponente das To-do über die prop erhält, aber keine Informationen an ihr Elternteil zurücksendet. Wir werden das später korrigieren.

## Datenaustausch zwischen Komponenten: Props-Down, Events-Up-Muster

Das `bind`-Directive ist ziemlich einfach und ermöglicht es, Daten zwischen einer Eltern- und Kindkomponente mit minimalem Aufwand zu teilen. Wenn Ihre Anwendung jedoch größer und komplexer wird, kann es leicht schwierig werden, den Überblick über alle gebundenen Werte zu behalten. Ein alternativer Ansatz ist das Kommunikationsmuster "props runter, Events rauf".

Grundsätzlich beruht dieses Muster darauf, dass Kindkomponenten Daten von ihren Eltern über props erhalten und Elternkomponenten ihren Zustand durch das Handling von Ereignissen, die von Kindkomponenten emittiert werden, aktualisieren. Also fließen die props _nach unten_ vom Elternteil zum Kind und die Ereignisse _blubbern nach oben_ vom Kind zum Elternteil. Dieses Muster etabliert einen bidirektionalen Informationsfluss, der vorhersehbar und leichter verständlich ist.

Sehen wir uns an, wie wir unsere eigenen Ereignisse senden können, um die fehlende Funktionalität des _Löschen_-Buttons neu zu implementieren.

Um benutzerdefinierte Ereignisse zu erstellen, verwenden wir das `createEventDispatcher`-Utility. Dies wird eine Funktion `dispatch()` zurückgeben, die es uns ermöglicht, benutzerdefinierte Ereignisse zu senden. Wenn Sie ein Ereignis auslösen, müssen Sie den Namen des Ereignisses und optional ein Objekt mit zusätzlichen Informationen, die Sie an jeden Zuhörer weitergeben möchten, übergeben. Diese zusätzlichen Daten werden auf der `detail`-Eigenschaft des Ereignisobjekts verfügbar sein.

> [!NOTE]
> Benutzerdefinierte Ereignisse in Svelte teilen dieselbe API wie reguläre DOM-Ereignisse. Außerdem können Sie ein Ereignis an Ihre Elternkomponente aufblubbern lassen, indem Sie `on:event` ohne irgendeinen Handler angeben.

Wir werden unsere `Todo`-Komponente bearbeiten, um ein `remove`-Ereignis zu senden, wobei das zu entfernende To-do als zusätzliche Information übermittelt wird.

1. Fügen Sie zunächst die folgenden Zeilen oben im `<script>`-Bereich der `Todo`-Komponente hinzu:

   ```js
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();
   ```

2. Aktualisieren Sie nun den _Löschen_-Button im Markup-Bereich derselben Datei wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Mit `dispatch('remove', todo)` senden wir ein `remove`-Ereignis und übergeben als zusätzliche Daten das `todo`, das gelöscht wird. Der Handler wird mit einem Ereignisobjekt aufgerufen, wobei die zusätzlichen Daten in der `event.detail`-Eigenschaft verfügbar sind.

3. Jetzt müssen wir von `Todos.svelte` aus auf dieses Ereignis hören und entsprechend handeln. Gehen Sie zurück zu dieser Datei und aktualisieren Sie Ihren `<Todo>`-Komponentenaufruf wie folgt:

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   Unser Handler erhält den Parameter `e` (das Ereignisobjekt), das, wie zuvor beschrieben, das zu löschende To-do in der `detail` Eigenschaft enthält.

4. An diesem Punkt, wenn Sie Ihre App erneut ausprobieren, sollten Sie sehen, dass die _Löschen_-Funktionalität jetzt wieder funktioniert. Also hat unser benutzerdefiniertes Ereignis wie erhofft funktioniert. Außerdem sendet der `remove`-Ereignislistener die Datenänderung zurück an das Elternteil, sodass unser Statuskopf "x von y Artikeln abgeschlossen" nun entsprechend aktualisiert wird, wenn To-dos gelöscht werden.

Nun kümmern wir uns um das `update`-Ereignis, damit unsere Elternkomponente über alle geänderten To-dos benachrichtigt wird.

## Aktualisierung von To-dos

Wir müssen noch die Funktionalität implementieren, damit wir bestehende To-dos bearbeiten können. Wir werden einen Bearbeitungsmodus in die `Todo`-Komponente aufnehmen. Beim Eingeben des Bearbeitungsmodus zeigt es ein `<input>`-Feld an, um den aktuellen To-do-Namen zu bearbeiten, mit zwei Buttons, um unsere Änderungen zu bestätigen oder zu stornieren.

### Die Ereignisse behandeln

1. Wir benötigen eine Variable, um zu verfolgen, ob wir im Bearbeitungsmodus sind, und eine andere, um den Namen der Aufgabe zu speichern, die aktualisiert wird. Fügen Sie die folgenden Variablendefinitionen am Ende des `<script>`-Bereichs der `Todo`-Komponente ein:

   ```js
   let editing = false; // track editing mode
   let name = todo.name; // hold the name of the to-do being edited
   ```

2. Wir müssen entscheiden, welche Ereignisse unsere `Todo`-Komponente senden wird:

   - Wir könnten verschiedene Ereignisse für den Statuswechsel und die Bearbeitung des Namens senden (zum Beispiel `updateTodoStatus` und `updateTodoName`).
   - Oder wir könnten einen generischeren Ansatz verfolgen und ein einziges `update`-Ereignis für beide Operationen senden.

   Wir werden den zweiten Ansatz wählen, um eine andere Technik zu demonstrieren. Der Vorteil dieses Ansatzes ist, dass wir später weitere Felder zu den To-dos hinzufügen können und dennoch alle Updates mit demselben Ereignis behandeln können.

   Lassen Sie uns eine `update()`-Funktion erstellen, die die Änderungen empfängt und ein Update-Ereignis mit dem geänderten To-do sende. Fügen Sie das Folgende ebenfalls am unteren Ende des `<script>`-Bereichs hinzu:

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Hier verwenden wir die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das Original-To-do mit den darauf angewendeten Änderungen zurückzugeben.

3. Als nächstes erstellen wir verschiedene Funktionen, um jede Benutzeraktion zu behandeln. Wenn sich das To-do im Bearbeitungsmodus befindet, kann der Benutzer die Änderungen speichern oder abbrechen. Wenn es sich nicht im Bearbeitungsmodus befindet, kann der Benutzer das To-do löschen, bearbeiten oder seinen Status zwischen abgeschlossen und aktiv umschalten.

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

Jetzt müssen wir das Markup unserer `Todo`-Komponente aktualisieren, um die obigen Funktionen aufzurufen, wenn die entsprechenden Aktionen durchgeführt werden.

Um den Bearbeitungsmodus zu behandeln, verwenden wir die `editing`-Variable, die ein boolescher Wert ist. Wenn es `true` ist, sollte es das `<input>`-Feld zum Bearbeiten des To-do-Namens und die _Abbrechen_- und _Speichern_-Schaltflächen anzeigen. Wenn es nicht im Bearbeitungsmodus ist, werden das Kontrollkästchen, der To-do-Name und die Schaltflächen zum Bearbeiten und Löschen des To-dos angezeigt.

Um dies zu erreichen, verwenden wir einen [`if` Block](https://svelte.dev/docs/logic-blocks#if). Der `if` Block rendert bedingt ein Markup. Beachten Sie, dass es das Markup nicht nur basierend auf der Bedingung anzeigt oder ausblendet - es wird die Elemente je nach Bedingung dynamisch aus dem DOM hinzufügen und entfernen.

Wenn `editing` beispielsweise `true` ist, zeigt Svelte das Aktualisierungsformular an; wenn es `false` ist, wird es entfernt und das Kontrollkästchen eingefügt. Dank der Svelte-Reaktivität reicht es aus, der `editing`-Variable einen Wert zuzuweisen, um die richtigen HTML-Elemente anzuzeigen.

Das Folgende gibt Ihnen eine Vorstellung davon, wie die grundlegende `if`-Blockstruktur aussieht:

```svelte
<div class="stack-small">
  {#if editing}
  <!-- markup for editing to-do: label, input text, Cancel and Save Button -->
  {:else}
  <!-- markup for displaying to-do: checkbox, label, Edit and Delete Button -->
  {/if}
</div>
```

Der nicht-bearbeitende Abschnitt — das heißt, der `{:else}` Teil (unterer Hälfte) des `if` Blocks — wird sehr ähnlich zu dem sein, was wir in unserer `Todos` Komponente hatten. Der einzige Unterschied ist, dass wir `onToggle()`, `onEdit()` und `onRemove()` abhängig von der Benutzeraktion aufrufen.

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

- Wenn der Benutzer die _Bearbeiten_-Schaltfläche drückt, führen wir `onEdit()` aus, was einfach die `editing` Variable auf `true` setzt.
- Wenn der Benutzer auf das Kontrollkästchen klickt, rufen wir die Funktion `onToggle()` auf, die `update()` ausführt und ein Objekt mit dem neuen `completed` Wert als Parameter übergeben.
- Die Funktion `update()` löst das `update` Ereignis aus und gibt als zusätzliche Information eine Kopie des Originals-To-do mit den darauf angewendeten Änderungen weiter.
- Schließlich sendet die Funktion `onRemove()` das `remove` Ereignis und gibt das zu löschende `todo` als zusätzliche Information weiter.

Die Bearbeiten-UI (die obere Hälfte) enthält ein `<input>`-Feld und zwei Schaltflächen, um die Änderungen zu stornieren oder zu speichern:

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

Wenn der Benutzer die _Bearbeiten_-Schaltfläche drückt, wird die `editing` Variable auf `true` gesetzt, und Svelte entfernt das Markup im `{:else}` Teil des DOM und ersetzt es durch das Markup im `{#if}` Abschnitt.

Die `value`-Eigenschaft von `<input>` wird an die `name` Variable gebunden, und die Schaltflächen zum Abbrechen und Speichern der Änderungen rufen respektive `onCancel()` und `onSave()` auf (diese Funktionen haben wir bereits hinzugefügt):

- Wenn `onCancel()` aufgerufen wird, wird `name` auf seinen ursprünglichen Wert (beim Übergeben als prop) wiederhergestellt und wir beenden den Bearbeitungsmodus (indem wir `editing` auf `false` setzen).
- Wenn `onSave()` aufgerufen wird, führen wir die Funktion `update()` aus — wobei wir ihr den geänderten `name` übergeben — und beenden den Bearbeitungsmodus.

Wir deaktivieren auch die _Safe_ Schaltfläche, wenn das `<input>` leer ist, indem wir das `disabled={!name}` Attribut verwenden, und erlauben dem Benutzer, die Bearbeitung mit der <kbd>Escape</kbd> Taste abzubrechen, so:

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

Wir verwenden auch `todo.id`, um eindeutige IDs für die neuen Eingabesteuerungen und -labels zu erstellen.

1. Das gesamte aktualisierte Markup unserer `Todo`-Komponente sieht folgendermaßen aus. Aktualisieren Sie Ihres jetzt:

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
   > Wir könnten dies weiter in zwei verschiedene Komponenten aufteilen, eine zum Bearbeiten des To-dos und die andere zum Anzeigen. Letztendlich hängt es davon ab, wie komfortabel Sie sich bei der Behandlung dieser Komplexität in einer einzigen Komponente fühlen. Sie sollten auch überlegen, ob eine weitere Aufteilung es ermöglichen würde, diese Komponente in einem anderen Kontext wiederzuverwenden.

2. Um die Update-Funktionalität zum Laufen zu bringen, müssen wir das `update` Ereignis von der `Todos` Komponente aus behandeln. Fügen Sie im `<script>` Abschnitt diesen Handler hinzu:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   Wir finden das `todo` mit `id` in unserem `todos` Array und aktualisieren dessen Inhalt unter Verwendung der Spread-Syntax. In diesem Fall hätten wir auch einfach `todos[i] = todo` verwenden können, aber diese Implementierung ist solider und ermöglicht es der `Todo` Komponente, nur die aktualisierten Teile des To-dos zurückzugeben.

3. Als nächstes müssen wir auf das `update` Ereignis in unserem `<Todo>` Komponentenaufruf hören und unsere `updateTodo()` Funktion ausführen, wenn dies geschieht, um den `name` und den `completed` Status zu ändern. Aktualisieren Sie Ihren \<Todo> Aufruf wie dieser:

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. Probieren Sie Ihre App erneut aus, und Sie sollten sehen, dass Sie To-dos löschen, hinzufügen, bearbeiten, die Bearbeitung abbrechen und den Abschlussstatus umschalten können. Und unser Statuskopf "x von y Artikeln abgeschlossen" wird nun angemessen aktualisiert, wenn To-dos abgeschlossen werden.

Wie Sie sehen können, ist es einfach, das "Props runter, Events rauf"-Muster in Svelte zu implementieren. Dennoch kann `bind` für einfache Komponenten eine gute Wahl sein; Svelte lässt Ihnen die Wahl.

> [!NOTE]
> Svelte bietet fortschrittlichere Mechanismen, um Informationen zwischen Komponenten auszutauschen: die [Kontext-API](https://svelte.dev/docs/svelte#setcontext) und [Stores](https://svelte.dev/docs/svelte-store). Die Kontext-API bietet einen Mechanismus, damit Komponenten und ihre Nachkommen „miteinander kommunizieren“ können, ohne Daten und Funktionen als props zu übergeben oder viele Ereignisse zu senden. Stores ermöglichen es Ihnen, reaktive Daten zwischen Komponenten zu teilen, die nicht hierarchisch verbunden sind. Wir werden später in der Serie auf Stores eingehen.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Zusammenfassung

Jetzt haben wir alle benötigten Funktionen unserer App. Wir können To-dos anzeigen, hinzufügen, bearbeiten und löschen, als erledigt markieren und nach Status filtern.

In diesem Artikel haben wir folgende Themen behandelt:

- Extrahieren von Funktionalitäten in eine neue Komponente
- Übergeben von Informationen vom Kind zum Elternteil mit einem als Prop erhaltenen Handler
- Übergeben von Informationen vom Kind zum Elternteil mit dem `bind`-Directive
- Bedingtes Rendern von Markup-Blöcken mit dem `if` Block
- Implementierung des Kommunikationsmusters "Props runter, Events rauf"
- Erstellen und Lauschen von benutzerdefinierten Ereignissen

Im nächsten Artikel werden wir unsere App weiter komponentenbasiert gestalten und einige fortgeschrittene Techniken zum Arbeiten mit dem DOM untersuchen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
