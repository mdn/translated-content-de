---
title: Komponentisierung unserer Svelte-App
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_components
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Svelte-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Im letzten Artikel haben wir begonnen, unsere To-Do-Listen-App zu entwickeln. Das zentrale Ziel dieses Artikels ist es, zu untersuchen, wie wir unsere App in handhabbare Komponenten aufteilen und Informationen zwischen ihnen austauschen können. Wir werden unsere App in Komponenten aufteilen und dann mehr Funktionalität hinzufügen, um Benutzern das Aktualisieren bestehender Komponenten zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          vertraut sind und Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten node und npm,
          um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie lernen, wie Sie unsere App in Komponenten aufteilen und
        Informationen zwischen ihnen austauschen können.
      </td>
    </tr>
  </tbody>
</table>

## Gemeinsam mit uns Code schreiben

### Git

Klonen Sie das GitHub-Repo (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erhalten, führen Sie folgendes aus:

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu programmieren, starten Sie bei

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Aufteilen der App in Komponenten

In Svelte besteht eine Anwendung aus einer oder mehreren Komponenten. Eine Komponente ist ein wiederverwendbarer, eigenständiger Codeblock, der zusammengehörige HTML-, CSS- und JavaScript-Elemente kapselt und in einer `.svelte`-Datei geschrieben wird. Komponenten können groß oder klein sein, sind aber normalerweise klar definiert: Die effektivsten Komponenten haben einen einzigen, offensichtlichen Zweck.

Die Vorteile der Definition von Komponenten sind vergleichbar mit der allgemeineren Best Practice, Ihren Code in handhabbare Stücke zu organisieren. Es hilft Ihnen zu verstehen, wie sie zueinander stehen, fördert die Wiederverwendung und macht Ihren Code leichter verständlich, wartbar und erweiterbar.

Aber wie wissen Sie, was in eine eigene Komponente aufgeteilt werden sollte?

Es gibt keine festen Regeln dafür. Einige Leute bevorzugen einen intuitiven Ansatz und beginnen, das Markup anzusehen und Boxen um jede Komponente und Unterkomponente zu zeichnen, die ihre eigene Logik zu haben scheint.

Andere wenden die gleichen Techniken an, die verwendet werden, um zu entscheiden, ob Sie eine neue Funktion oder ein neues Objekt erstellen sollten. Eine solche Technik ist das Single Responsibility Principle — das heißt, eine Komponente sollte idealerweise nur eine Sache tun. Wenn sie wächst, sollte sie in kleinere Unterkomponenten aufgeteilt werden.

Beide Ansätze sollten sich ergänzen und Ihnen helfen, zu entscheiden, wie Sie Ihre Komponenten besser organisieren können.

Letztendlich werden wir unsere App in folgende Komponenten aufteilen:

- `Alert.svelte`: Eine allgemeine Benachrichtigungsbox zur Kommunikation über erfolgte Aktionen.
- `NewTodo.svelte`: Das Texteingabefeld und die Schaltfläche, mit denen Sie ein neues To-Do-Element eingeben können.
- `FilterButton.svelte`: Die _Alle_, _Aktiv_ und _Abgeschlossen_ Schaltflächen, mit denen Sie Filter auf die angezeigten To-Do-Elemente anwenden können.
- `TodosStatus.svelte`: Die Überschrift "x von y Elementen abgeschlossen".
- `Todo.svelte`: Ein individuelles To-Do-Element. Jedes sichtbare To-Do-Element wird in einer separaten Kopie dieser Komponente angezeigt.
- `MoreActions.svelte`: Die _Alle auswählen_ und _Abgeschlossene entfernen_ Schaltflächen am unteren Bereich der Benutzeroberfläche, die es Ihnen erlauben, Massenaktionen auf die To-Do-Elemente durchzuführen.

![Grafische Darstellung der Liste der Komponenten in unserer App](01-todo-components.png)

In diesem Artikel konzentrieren wir uns auf die Erstellung der `FilterButton` und `Todo` Komponenten; die anderen werden wir in zukünftigen Artikeln behandeln.

Fangen wir an.

> [!NOTE]
> Beim Erstellen unserer ersten Komponenten werden wir auch verschiedene Techniken lernen, um zwischen Komponenten zu kommunizieren, sowie die Vor- und Nachteile jeder Technik.

## Extrahieren unserer Filterkomponente

Wir beginnen mit der Erstellung unserer `FilterButton.svelte`.

1. Erstellen Sie zunächst eine neue Datei, `components/FilterButton.svelte`.
2. In dieser Datei deklarieren wir eine `filter`-Eigenschaft und kopieren dann das relevante Markup von `Todos.svelte` hinein. Fügen Sie den folgenden Inhalt in die Datei ein:

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

3. In unserer `Todos.svelte`-Komponente möchten wir unseren `FilterButton` verwenden. Zuerst müssen wir ihn importieren. Fügen Sie die folgende Zeile oben in den `Todos.svelte <script>`-Abschnitt ein:

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. Ersetzen Sie nun das `<div class="filters...`-Element durch einen Aufruf der `FilterButton`-Komponente, die den aktuellen Filter als Eigenschaft übernimmt. Die folgende Zeile ist alles, was Sie brauchen:

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> Denken Sie daran, dass wenn der HTML-Attributname und die Variable übereinstimmen, sie durch `{variable}` ersetzt werden können. Deshalb konnten wir `<FilterButton filter={filter} />` durch `<FilterButton {filter} />` ersetzen.

Bis jetzt läuft alles gut! Probieren Sie die App jetzt aus. Sie werden bemerken, dass bei einem Klick auf die Filter-Schaltflächen diese ausgewählt werden und der Stil sich entsprechend aktualisiert. Aber wir haben ein Problem: Die To-Dos werden nicht gefiltert. Das liegt daran, dass die `filter`-Variable vom `Todos`-Modul zur `FilterButton`-Komponente durch die Eigenschaft übergeben wird, aber Änderungen, die in der `FilterButton`-Komponente auftreten, nicht an das übergeordnete Element zurückfließen — die Datenbindung ist standardmäßig unidirektional. Schauen wir uns einen Weg an, dies zu lösen.

## Daten zwischen Komponenten teilen: Einen Handler als Eigenschaft übergeben

Eine Möglichkeit, untergeordnete Komponenten Änderungen an ihren Eltern mitteilen zu lassen, besteht darin, einen Handler als Eigenschaft zu übergeben. Die untergeordnete Komponente wird den Handler ausführen und die benötigten Informationen als Parameter übergeben, und der Handler wird den Zustand des Elternteils ändern.

In unserem Fall wird die `FilterButton`-Komponente einen `onclick`-Handler von ihrem Elternteil erhalten. Jedes Mal, wenn der Benutzer auf eine Filter-Schaltfläche klickt, wird das Kind den `onclick`-Handler aufrufen und den ausgewählten Filter als Parameter an das übergeordnete Element übergeben.

Wir werden einfach die `onclick`-Eigenschaft deklarieren und einen Dummy-Handler zuweisen, um Fehler zu vermeiden, wie folgt:

```js
export let onclick = (clicked) => {};
```

Und wir deklarieren die reaktive Anweisung `$: onclick(filter)`, um den `onclick`-Handler jedes Mal aufzurufen, wenn die `filter`-Variable aktualisiert wird.

1. Der `<script>`-Abschnitt unserer `FilterButton`-Komponente sollte am Ende so aussehen. Aktualisieren Sie diesen jetzt:

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. Wenn wir den `FilterButton` in `Todos.svelte` aufrufen, müssen wir den Handler spezifizieren. Aktualisieren Sie Folgendes:

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

Wenn auf eine der Filter-Schaltflächen geklickt wird, aktualisieren wir einfach die filter-Variable mit dem neuen Filter. Nun funktioniert unsere `FilterButton`-Komponente wieder.

## Einfachere bidirektionale Datenbindung mit dem bind-Attribut

Im vorherigen Beispiel haben wir festgestellt, dass unsere `FilterButton`-Komponente nicht funktionierte, weil unser Anwendungszustand als `filter`-Eigenschaft von Eltern zu Kind flossen, aber nicht zurück. Wir haben also eine `onclick`-Eigenschaft hinzugefügt, damit das Kind die neue `filter`-Variable an das Elternteil kommunizieren kann.

Es funktioniert zwar, aber Svelte bietet uns eine einfachere und direktere Möglichkeit, eine bidirektionale Datenbindung zu erreichen. Daten fließen normalerweise von Eltern zu Kind über Eigenschaften. Wenn wir möchten, dass sie auch andersherum fließen, also vom Kind zu den Eltern, können wir [das `bind:`-Attribut](https://svelte.dev/docs/element-directives#bind-property) verwenden.

Mit `bind` werden wir Svelte mitteilen, dass jede Änderung an der `filter`-Eigenschaft in der `FilterButton`-Komponente zurück zum Elternmodul, `Todos`, fließen sollte. Das heißt, wir werden den Wert der `filter`-Variable im Elternmodul an ihren Wert im Kindmodul binden.

1. Aktualisieren Sie in `Todos.svelte` den Aufruf der `FilterButton`-Komponente wie folgt:

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Wie üblich bietet Svelte uns eine schöne Abkürzung: `bind:value={value}` ist gleichwertig zu `bind:value`. Sie können also im obigen Beispiel einfach `<FilterButton bind:filter />` schreiben.

2. Die untergeordnete Komponente kann jetzt den Wert der `filter`-Variable des Elternteils ändern, daher benötigen wir die `onclick`-Eigenschaft nicht mehr. Ändern Sie das `<script>`-Element Ihrer `FilterButton`-Komponente wie folgt:

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. Probieren Sie Ihre App erneut aus, und Sie sollten sehen, dass Ihre Filter korrekt funktionieren.

## Erstellen unserer Todo-Komponente

Jetzt erstellen wir eine `Todo`-Komponente, um jedes individuelle To-Do einzukapseln, einschließlich des Kontrollkästchens und etwas Bearbeitungslogik, damit Sie ein bestehendes To-Do ändern können.

Unsere `Todo`-Komponente erhält ein einzelnes `todo`-Objekt als Eigenschaft. Lassen Sie uns die `todo`-Eigenschaft deklarieren und den Code vom `Todos`-Modul verschieben. Für den Moment ersetzen wir den Aufruf von `removeTodo` durch einen Alarm. Wir werden diese Funktion später wieder hinzufügen.

1. Erstellen Sie eine neue Komponentendatei, `components/Todo.svelte`.
2. Legen Sie den folgenden Inhalt in diese Datei:

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

4. Als nächstes müssen wir unseren `{#each}`-Block aktualisieren, um eine `<Todo>`-Komponente für jedes To-Do anstelle des Codes zu enthalten, der in `Todo.svelte` verschoben wurde. Wir übergeben auch das aktuelle `todo`-Objekt in die Komponente als Eigenschaft.

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

Die Liste der To-Dos wird auf der Seite angezeigt, und die Kontrollkästchen sollten funktionieren (versuchen Sie, einige anzukreuzen/abzuwählen und beobachten Sie, dass die Filter immer noch wie erwartet funktionieren), aber unsere Überschrift "x von y Elementen abgeschlossen" wird jetzt entsprechend nicht mehr aktualisiert. Das liegt daran, dass unsere `Todo`-Komponente das To-Do über die Eigenschaft erhält, aber keine Informationen an das Elternmodul sendet. Wir werden dies später beheben.

## Daten zwischen Komponenten teilen: Das Muster "Props-Down, Events-Up"

Das `bind`-Attribut ist ziemlich einfach und ermöglicht es Ihnen, Daten zwischen einer Eltern- und einer Kindkomponente mit minimalem Aufwand zu teilen. Wenn jedoch Ihre Anwendung größer und komplexer wird, kann es leicht schwierig werden, den Überblick über alle gebundenen Werte zu behalten. Ein anderer Ansatz ist das Kommunikationsmuster "Props-Down, Events-Up".

Im Grunde basiert dieses Muster darauf, dass Kindkomponenten Daten von ihren Eltern über Eigenschaften empfangen und Elternkomponenten ihren Zustand aktualisieren, indem sie Ereignisse verarbeiten, die von den Kindkomponenten gesendet werden. So fließen Eigenschaften _von oben nach unten_ von Eltern zu Kind und Ereignisse _von unten nach oben_ von Kind zu Eltern. Dieses Muster etabliert einen bidirektionalen Informationsfluss, der vorhersagbar und leichter nachvollziehbar ist.

Schauen wir uns an, wie wir eigene Ereignisse senden können, um die fehlende Funktionalität der _Löschen_-Schaltfläche zu implementieren.

Um benutzerdefinierte Ereignisse zu erstellen, verwenden wir das `createEventDispatcher`-Hilfsprogramm. Dies wird eine `dispatch()`-Funktion zurückgeben, mit der wir benutzerdefinierte Ereignisse auslösen können. Wenn Sie ein Ereignis auslösen, müssen Sie den Namen des Ereignisses und optional ein Objekt mit zusätzlichen Informationen, die Sie an jeden Listener übergeben möchten, übergeben. Diese zusätzlichen Daten stehen in der `detail`-Eigenschaft des Ereignisobjekts zur Verfügung.

> [!NOTE]
> Benutzerdefinierte Ereignisse in Svelte teilen sich die gleiche API wie reguläre DOM-Ereignisse. Außerdem können Sie ein Ereignis an Ihre übergeordnete Komponente weiterleiten, indem Sie `on:event` ohne Handler angeben.

Wir bearbeiten unsere `Todo`-Komponente, um ein `remove`-Ereignis zu senden und das zu entfernende To-Do als zusätzliche Informationen zu übergeben.

1. Fügen Sie zunächst die folgenden Zeilen oben in den `<script>`-Abschnitt der `Todo`-Komponente ein:

   ```js
   import { createEventDispatcher } from "svelte";

   const dispatch = createEventDispatcher();
   ```

2. Aktualisieren Sie jetzt die _Löschen_-Schaltfläche im Markup-Abschnitt derselben Datei wie folgt:

   ```svelte
   <button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
     Delete <span class="visually-hidden">{todo.name}</span>
   </button>
   ```

   Mit `dispatch('remove', todo)` senden wir ein `remove`-Ereignis und übergeben als zusätzliche Daten das `todo`, das gelöscht wird. Der Handler wird mit einem verfügbaren Ereignisobjekt aufgerufen, wobei die zusätzlichen Daten im `event.detail`-Eigenschaft verfügbar sind.

3. Nun müssen wir diesem Ereignis innerhalb von `Todos.svelte` lauschen und entsprechend handeln. Gehen Sie zurück zu dieser Datei und aktualisieren Sie Ihren `<Todo>`-Komponentenaufruf wie folgt:

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   Unser Handler erhält den `e`-Parameter (das Ereignisobjekt), der wie zuvor beschrieben das zu löschende To-Do im `detail`-Eigenschaft enthält.

4. An diesem Punkt, wenn Sie Ihre App wieder ausprobieren, sollten Sie sehen, dass die _Löschen_-Funktionalität jetzt wieder funktioniert. Unser benutzerdefiniertes Ereignis hat also wie erhofft funktioniert. Außerdem sendet der `remove`-Ereignis-Listener die Datenänderung zurück an das Elternmodul, sodass unsere Überschrift "x von y Elementen abgeschlossen" jetzt entsprechend aktualisiert wird, wenn To-Dos gelöscht werden.

Nun werden wir das `update`-Ereignis behandeln, damit unsere übergeordnete Komponente über Änderungen am To-Do informiert wird.

## Aktualisieren von To-Dos

Wir müssen noch die Funktionalität implementieren, die es uns ermöglicht, bestehende To-Dos zu bearbeiten. Wir müssen einen Bearbeitungsmodus in die `Todo`-Komponente aufnehmen. Beim Eintritt in den Bearbeitungsmodus zeigen wir ein `<input>`-Feld an, um den aktuellen Namen des To-Dos zu bearbeiten, mit zwei Schaltflächen, um unsere Änderungen zu bestätigen oder abzubrechen.

### Die Ereignisse behandeln

1. Wir benötigen eine Variable, um nachzuverfolgen, ob wir uns im Bearbeitungsmodus befinden, und eine weitere, um den Namen der zu aktualisierenden Aufgabe zu speichern. Fügen Sie die folgenden Variablendeklarationen am Ende des `<script>`-Abschnitts der `Todo`-Komponente hinzu:

   ```js
   let editing = false; // track editing mode
   let name = todo.name; // hold the name of the to-do being edited
   ```

2. Wir müssen entscheiden, welche Ereignisse unsere `Todo`-Komponente auslösen wird:
   - Wir könnten verschiedene Ereignisse für die Statusumschaltung und die Bearbeitung des Namens auslösen (zum Beispiel `updateTodoStatus` und `updateTodoName`).
   - Oder wir könnten einen allgemeineren Ansatz wählen und ein einzelnes `update`-Ereignis für beide Operationen auslösen.

   Wir werden den zweiten Ansatz wählen, um eine andere Technik zu demonstrieren. Der Vorteil dieses Ansatzes ist, dass wir später weitere Felder zu den To-Dos hinzufügen können und trotzdem alle Aktualisierungen mit dem gleichen Ereignis verwalten können.

   Erstellen Sie eine `update()`-Funktion, die die Änderungen empfängt und ein Update-Ereignis mit dem modifizierten To-Do auslöst. Fügen Sie das folgende, wiederum am Ende des `<script>`-Abschnitts hinzu:

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Hier verwenden wir das [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das Original-To-Do mit den darauf angewendeten Änderungen zurückzugeben.

3. Als Nächstes erstellen wir verschiedene Funktionen, um jede Benutzeraktion zu handhaben. Wenn sich das To-Do im Bearbeitungsmodus befindet, kann der Benutzer die Änderungen speichern oder abbrechen. Wenn es nicht im Bearbeitungsmodus ist, kann der Benutzer das To-Do löschen, bearbeiten oder seinen Status zwischen abgeschlossen und aktiv umschalten.

   Fügen Sie die folgende Reihe von Funktionen unter Ihrer vorherigen Funktion hinzu, um diese Aktionen zu verwalten:

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

Jetzt müssen wir das Markup unserer `Todo`-Komponente aktualisieren, um die oben genannten Funktionen bei den entsprechenden Aktionen aufzurufen.

Um den Bearbeitungsmodus zu handhaben, verwenden wir die `editing`-Variable, die ein Boolean ist. Wenn sie `true` ist, sollte sie das `<input>`-Feld zum Bearbeiten des To-Do-Namens und die Schaltflächen zum Abbrechen oder Speichern der Änderungen anzeigen. Wenn sie sich nicht im Bearbeitungsmodus befindet, wird das Kontrollkästchen, der To-Do-Name und die Schaltflächen zum Bearbeiten und Löschen des To-Dos angezeigt.

Um dies zu erreichen, werden wir einen [`if`-Block](https://svelte.dev/docs/logic-blocks#if) verwenden. Der `if`-Block rendert bedingt einige Markups. Beachten Sie, dass er die Markups nicht nur auf der Grundlage der Bedingung anzeigt oder ausblendet — er wird die Elemente dynamisch vom DOM hinzufügen und entfernen, abhängig von der Bedingung.

Wenn `editing` `true` ist, zeigt Svelte zum Beispiel das Aktualisierungsformular an; wenn es `false` ist, entfernt es es aus dem DOM und fügt das Kontrollkästchen hinzu. Dank der Svelte-Reaktivität reicht es aus, den Wert der editing-Variablen zuzuweisen, um die richtigen HTML-Elemente anzuzeigen.

Das folgende Beispiel zeigt Ihnen, wie die grundlegende `if`-Block-Struktur aussieht:

```svelte
<div class="stack-small">
  {#if editing}
  <!-- markup for editing to-do: label, input text, Cancel and Save Button -->
  {:else}
  <!-- markup for displaying to-do: checkbox, label, Edit and Delete Button -->
  {/if}
</div>
```

Der nicht-bearbeitete Abschnitt — das heißt, der `{:else}`-Teil (untere Hälfte) des `if`-Blocks — wird sehr ähnlich zu dem sein, den wir in unserer `Todos`-Komponente hatten. Der einzige Unterschied besteht darin, dass wir `onToggle()`, `onEdit()` und `onRemove()` aufrufen, abhängig von der Benutzeraktion.

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

Es ist zu beachten, dass:

- Wenn der Benutzer die _Bearbeiten_-Schaltfläche drückt, führen wir `onEdit()` aus, das einfach die `editing`-Variablen auf `true` setzt.
- Wenn der Benutzer auf das Kontrollkästchen klickt, rufen wir die Funktion `onToggle()` auf, die `update()` ausführt und ein Objekt mit dem neuen `completed`-Wert als Parameter übergibt.
- Die `update()`-Funktion löst das `update`-Ereignis aus, wobei als zusätzliche Information eine Kopie des ursprünglichen To-Do mit den darauf angewendeten Änderungen übergeben wird.
- Schließlich löst die Funktion `onRemove()` das `remove`-Ereignis aus, indem sie das zu löschende `todo` als zusätzliche Daten übergibt.

Die Bearbeitungs-UI (die obere Hälfte) wird ein `<input>`-Feld und zwei Schaltflächen enthalten, um die Änderungen zu speichern oder zu stornieren:

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

Wenn der Benutzer die _Bearbeiten_-Schaltfläche drückt, wird die `editing`-Variable auf `true` gesetzt, und Svelte entfernt das Markup im `{:else}`-Teil aus dem DOM und ersetzt es durch das Markup im `{#if}`-Bereich.

Das `value`-Attribut des `<input>` wird an die `name`-Variable gebunden, und die Schaltflächen zum Abbrechen und Speichern der Änderungen rufen `onCancel()` bzw. `onSave()` auf (wir haben diese Funktionen später hinzugefügt):

- Wenn `onCancel()` aufgerufen wird, wird `name` auf den ursprünglichen Wert (wenn als Eigenschaft übergeben) wiederhergestellt und wir verlassen den Bearbeitungsmodus (indem `editing` auf `false` gesetzt wird).
- Wenn `onSave()` aufgerufen wird, führen wir die `update()`-Funktion aus — übergeben der das modifizierte `name` — und verlassen den Bearbeitungsmodus.

Wir deaktivieren auch die _Speichern_-Schaltfläche, wenn das `<input>` leer ist, indem wir das `disabled={!name}`-Attribut verwenden und erlauben dem Benutzer, die Bearbeitung mit der <kbd>Escape</kbd>-Taste abzubrechen, wie folgt:

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

Wir verwenden auch `todo.id`, um eindeutige IDs für die neuen Eingabesteuerungen und Beschriftungen zu erstellen.

1. Das vollständige aktualisierte Markup unserer `Todo`-Komponente sieht wie folgt aus. Aktualisieren Sie Ihr jetzt:

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
   > Wir könnten dies weiter in zwei verschiedene Komponenten aufteilen, eine zum Bearbeiten des To-Do und die andere zum Anzeigen. Am Ende hängt es davon ab, wie wohl Sie sich fühlen, mit diesem Komplexitätsgrad in einer einzigen Komponente umzugehen. Sie sollten auch überlegen, ob eine weitere Aufteilung es Ihnen ermöglichen würde, diese Komponente in einem anderen Kontext wiederzuverwenden.

2. Um die Aktualisierungsfunktionalität zum Laufen zu bringen, müssen wir das `update`-Ereignis von der `Todos`-Komponente aus verwalten. Fügen Sie in deren `<script>`-Abschnitt diesen Handler hinzu:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   Wir suchen das `todo` nach `id` in unserem `todos`-Array und aktualisieren dessen Inhalt mit der Spread-Syntax. In diesem Fall hätten wir auch einfach `todos[i] = todo` verwenden können, aber diese Implementierung ist ausfallsicherer und ermöglicht es der `Todo`-Komponente, nur die aktualisierten Teile des To-Do zurückzugeben.

3. Als nächstes müssen wir auf das `update`-Ereignis in unserem `<Todo>`-Komponentenaufruf lauschen und unsere `updateTodo()`-Funktion ausführen, wenn dies eintritt, um den `name` und den `completed`-Status zu ändern. Aktualisieren Sie Ihren \<Todo> Aufruf wie folgt:

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. Probieren Sie Ihre App erneut aus, und Sie sollten sehen, dass Sie To-Dos löschen, hinzufügen, bearbeiten, die Bearbeitung abbrechen und den Abschlussstatus umschalten können. Und unsere Überschrift "x von y Elementen abgeschlossen" wird jetzt entsprechend aktualisiert, wenn To-Dos abgeschlossen werden.

Wie Sie sehen, ist es einfach, das Kommunikationsmuster "Props-Down, Events-Up" in Svelte zu implementieren. Trotzdem kann für einfache Komponenten `bind` eine gute Wahl sein; Svelte lässt Sie wählen.

> [!NOTE]
> Svelte stellt fortgeschrittenere Mechanismen zur Verfügung, um Informationen zwischen Komponenten zu teilen: Die [Context-API](https://svelte.dev/docs/svelte#setcontext) und [Stores](https://svelte.dev/docs/svelte-store). Die Context-API bietet einen Mechanismus, mit dem Komponenten und ihre Nachfolger miteinander „sprechen“ können, ohne Daten und Funktionen als Eigenschaften weiterzugeben oder viele Ereignisse auszulösen. Stores ermöglichen es, reaktive Daten unter nicht hierarchisch verwandten Komponenten zu teilen. Wir werden später in der Serie auf Stores eingehen.

## Der Code bis hierher

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

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

Jetzt haben wir alle erforderlichen Funktionen unserer App implementiert. Wir können To-Dos anzeigen, hinzufügen, bearbeiten und löschen, sie als abgeschlossen markieren und nach Status filtern.

In diesem Artikel haben wir folgende Themen behandelt:

- Extrahieren von Funktionen in eine neue Komponente
- Übergeben von Informationen vom Kind an das Elternteil durch einen als Eigenschaft erhaltenen Handler
- Übergeben von Informationen vom Kind an das Elternteil mit dem `bind`-Attribut
- Bedingtes Rendern von Markups mit dem `if`-Block
- Implementieren des Kommunikationsmusters "Props-Down, Events-Up"
- Erstellen und Lauschen von benutzerdefinierten Ereignissen

Im nächsten Artikel werden wir unsere App weiter komponentisieren und uns einige fortgeschrittene Techniken für die Arbeit mit dem DOM ansehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props","Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
