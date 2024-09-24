---
title: Komponentisieren unserer Svelte-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir begonnen, unsere To-Do-App zu entwickeln. Das Hauptziel dieses Artikels ist es, zu sehen, wie wir unsere App in handhabbare Komponenten unterteilen und Informationen zwischen ihnen austauschen können. Wir werden unsere App komponentisieren und dann mehr Funktionalität hinzufügen, damit Benutzer bestehende Komponenten aktualisieren können.

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
            >Terminal/Kommandzeile</a
          >
          haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App
          zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man unsere App in Komponenten unterteilt und Informationen
        zwischen diesen teilt.
      </td>
    </tr>
  </tbody>
</table>

## Coden Sie mit uns mit

### Git

Klonen Sie das GitHub-Repo (falls Sie es nicht bereits getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Stand der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/04-componentizing-our-app
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns über den REPL zu coden, starten Sie unter

<https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2>

## Die App in Komponenten aufteilen

In Svelte wird eine Anwendung aus einer oder mehreren Komponenten zusammengesetzt. Eine Komponente ist ein wiederverwendbarer, in sich geschlossener Block von Code, der HTML, CSS und JavaScript, die zusammengehören, kapselt und in einer `.svelte`-Datei geschrieben wird. Komponenten können groß oder klein sein, sind aber in der Regel klar definiert: Die effektivsten Komponenten erfüllen nur einen einzigen, offensichtlichen Zweck.

Die Vorteile der Definition von Komponenten sind vergleichbar mit der allgemeinen Best Practice, Ihren Code in handhabbare Stücke zu organisieren. Dies hilft Ihnen, zu verstehen, wie sie sich zueinander verhalten, fördert die Wiederverwendung und macht Ihren Code leichter verständlich, wartbar und erweiterbar.

Aber woher wissen Sie, was in eine eigene Komponente aufgeteilt werden sollte?

Es gibt dafür keine festen Regeln. Manche Leute bevorzugen einen intuitiven Ansatz und beginnen, im Markup nach Komponenten und Unterkomponenten zu suchen und um diese herum Kästchen zu zeichnen, die scheinbar ihre eigene Logik haben.

Andere anwenden dieselben Techniken, die entscheiden, ob Sie eine neue Funktion oder ein neues Objekt erstellen sollten. Eine solche Technik ist das Einzelverantwortungsprinzip — das heißt, idealerweise sollte eine Komponente nur eine Aufgabe erledigen. Wenn sie wächst, sollte sie in kleinere Unterkomponenten aufgeteilt werden.

Beide Ansätze sollten sich gegenseitig ergänzen und Ihnen helfen, zu entscheiden, wie Sie Ihre Komponenten besser organisieren.

Letztendlich werden wir unsere App in die folgenden Komponenten aufteilen:

- `Alert.svelte`: Eine allgemeine Benachrichtigungsbox, um Aktionen zu kommunizieren, die aufgetreten sind.
- `NewTodo.svelte`: Der Texteingabebereich und der Button, die es Ihnen ermöglichen, einen neuen To-Do-Eintrag hinzuzufügen.
- `FilterButton.svelte`: Die _Alle_, _Aktiv_ und _Abgeschlossen_ Buttons, die es Ihnen ermöglichen, Filter auf die angezeigten To-Do-Einträge anzuwenden.
- `TodosStatus.svelte`: Die Überschrift "x von y Aufgaben erledigt".
- `Todo.svelte`: Ein einzelner To-Do-Eintrag. Jeder sichtbare To-Do-Eintrag wird in einer separaten Kopie dieser Komponente angezeigt.
- `MoreActions.svelte`: Die _Alle überprüfen_ und _Abgeschlossene entfernen_ Buttons am unteren Rand der Benutzeroberfläche, die es Ihnen ermöglichen, Massenaktionen auf die To-Do-Einträge auszuführen.

![grafische Darstellung der Liste von Komponenten in unserer App](01-todo-components.png)

In diesem Artikel werden wir uns auf die Erstellung der `FilterButton`- und `Todo`-Komponenten konzentrieren; die anderen werden wir in zukünftigen Artikeln angehen.

Lassen Sie uns beginnen.

> [!NOTE]
> Während wir unsere ersten beiden Komponenten erstellen, werden wir auch verschiedene Techniken kennenlernen, um zwischen Komponenten zu kommunizieren, sowie die Vor- und Nachteile jeder Technik.

## Unser Filter-Komponente extrahieren

Wir beginnen mit der Erstellung unserer `FilterButton.svelte`.

1. Erstellen Sie zuerst eine neue Datei, `components/FilterButton.svelte`.
2. In dieser Datei deklarieren wir eine `filter`-Prop und kopieren dann das relevante Markup von `Todos.svelte` hinein. Fügen Sie den folgenden Inhalt in die Datei ein:

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

3. Zurück in unserer `Todos.svelte` Komponente möchten wir unsere `FilterButton` Komponente nutzen. Zuerst müssen wir sie importieren. Fügen Sie die folgende Zeile oben in der `Todos.svelte <script>`-Sektion hinzu:

   ```js
   import FilterButton from "./FilterButton.svelte";
   ```

4. Ersetzen Sie nun das `<div class="filters...` Element durch einen Aufruf der `FilterButton` Komponente, die den aktuellen Filter als Prop erhält. Die folgende Zeile ist alles, was Sie benötigen:

   ```svelte
   <FilterButton {filter} />
   ```

> [!NOTE]
> Denken Sie daran, dass, wenn der HTML-Attributname und die Variable übereinstimmen, sie durch `{variable}` ersetzt werden können. Deshalb konnten wir `<FilterButton filter={filter} />` durch `<FilterButton {filter} />` ersetzen.

Bis jetzt so gut! Versuchen Sie jetzt die App auszuprobieren. Ihnen wird auffallen, dass wenn Sie auf die Filterbuttons klicken, sie ausgewählt werden und sich der Stil entsprechend aktualisiert. Aber wir haben ein Problem: Die To-Dos werden nicht gefiltert. Das liegt daran, dass die `filter`-Variable vom `Todos`-Komponente zur `FilterButton`-Komponente durch die Prop fließt, aber Änderungen, die in der `FilterButton` Komponente auftreten, nicht zurück zu ihrem Elternteil fließen — die Datenbindung ist standardmäßig einseitig. Schauen wir uns eine Lösung dafür an.

## Daten zwischen Komponenten teilen: Einen Handler als Prop übergeben

Eine Möglichkeit, wie untergeordnete Komponenten ihre Eltern über Änderungen benachrichtigen können, besteht darin, einen Handler als Prop zu übergeben. Die untergeordnete Komponente führt den Handler aus und übergibt die benötigten Informationen als Parameter, und der Handler ändert den Status des Elternteils.

In unserem Fall wird die `FilterButton`-Komponente von ihrem Elternteil einen `onclick`-Handler erhalten. Jedes Mal, wenn der Benutzer auf einen Filterbutton klickt, ruft das Kind den `onclick`-Handler auf und übergibt den ausgewählten Filter als Parameter zurück an das Elternteil.

Wir deklarieren einfach die `onclick`-Prop, indem wir einen Dummy-Handler zuweisen, um Fehler zu vermeiden, wie folgt:

```js
export let onclick = (clicked) => {};
```

Und wir erklären die reaktive Anweisung `$: onclick(filter)`, um den `onclick`-Handler aufzurufen, sobald die `filter`-Variable aktualisiert wird.

1. Der `<script>`-Bereich unserer `FilterButton`-Komponente sollte schließlich so aussehen. Aktualisieren Sie ihn jetzt:

   ```js
   export let filter = "all";
   export let onclick = (clicked) => {};
   $: onclick(filter);
   ```

2. Wenn wir nun `FilterButton` in `Todos.svelte` aufrufen, müssen wir den Handler angeben. Aktualisieren Sie ihn so:

   ```svelte
   <FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
   ```

Wenn ein Filter-Button angeklickt wird, aktualisieren wir einfach die Filter-Variable mit dem neuen Filter. Jetzt funktioniert unsere `FilterButton`-Komponente wieder.

## Einfachere zweiseitige Datenbindung mit dem Bind-Directive

Im vorherigen Beispiel stellten wir fest, dass unsere `FilterButton`-Komponente nicht funktionierte, weil unser Anwendungsstatus über die `filter`-Prop vom Elternteil zum Kind floss, aber nicht zurück. Also fügten wir eine `onclick`-Prop hinzu, um der untergeordneten Komponente mitzuteilen, den neuen `filter`-Wert an das Elternteil zu übermitteln.

Es funktioniert gut, aber Svelte bietet uns einen einfacheren und direkteren Weg, um eine zweiseitige Datenbindung zu erreichen. Daten fließen normalerweise über Props vom Elternteil zum Kind. Wenn wir möchten, dass sie auch andersherum fließen, vom Kind zum Elternteil, können wir das `bind:`-Directive verwenden (siehe [die `bind:`-Dokumentation](https://svelte.dev/docs/element-directives#bind-property)).

Durch die Verwendung von `bind` sagen wir Svelte, dass alle Änderungen an der `filter`-Prop in der `FilterButton`-Komponente wieder zum Elternteil `Todos` weitergegeben werden sollen. Das heißt, wir werden den Wert der `filter`-Variablen im Elternteil an ihren Wert im Kind binden.

1. In `Todos.svelte`, aktualisieren Sie den Aufruf der `FilterButton`-Komponente wie folgt:

   ```svelte
   <FilterButton bind:filter={filter} />
   ```

   Wie üblich bietet uns Svelte einen netten Kurzbefehl: `bind:value={value}` ist gleichbedeutend mit `bind:value`. Im obigen Beispiel könnten Sie also einfach `<FilterButton bind:filter />` schreiben.

2. Da die untergeordnete Komponente jetzt den Wert der `filter`-Variablen des Elternteils ändern kann, benötigen wir die `onclick`-Prop nicht mehr. Ändern Sie das `<script>`-Element Ihrer `FilterButton`-Komponente folgendermaßen ab:

   ```svelte
   <script>
     export let filter = "all";
   </script>
   ```

3. Testen Sie Ihre App erneut und Sie sollten sehen, dass Ihre Filter weiterhin korrekt funktionieren.

## Unsere Todo-Komponente erstellen

Nun erstellen wir eine `Todo`-Komponente, um jedes einzelne To-Do zu kapseln, einschließlich des Kontrollkästchens und einiger Bearbeitungslogik, damit Sie ein bestehendes To-Do ändern können.

Unsere `Todo`-Komponente erhält ein einzelnes `todo`-Objekt als Prop. Lassen Sie uns die `todo`-Prop deklarieren, den Code aus der `Todos`-Komponente verschieben und vorübergehend den Aufruf von `removeTodo` durch eine Warnung ersetzen. Diese Funktionalität fügen wir später wieder hinzu.

1. Erstellen Sie eine neue Komponentendatei, `components/Todo.svelte`.
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

3. Jetzt müssen wir unsere `Todo`-Komponente in `Todos.svelte` importieren. Gehen Sie zu dieser Datei und fügen Sie die folgende `import`-Anweisung unter Ihrer vorherigen hinzu:

   ```js
   import Todo from "./Todo.svelte";
   ```

4. Als nächstes müssen wir unseren `{#each}`-Block aktualisieren, um eine `<Todo>`-Komponente für jedes To-Do einzuschließen, anstatt den Code, der in `Todo.svelte` verschoben wurde. Wir werden auch das aktuelle `todo`-Objekt als Prop in die Komponente übergeben.

   Aktualisieren Sie den `{#each}`-Block in `Todos.svelte` folgendermaßen:

   ```svelte
   <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
     {#each filterTodos(filter, todos) as todo (todo.id)}
     <li class="todo">
       <Todo {todo} />
     </li>
     {:else}
     <li>Nichts zu tun!</li>
     {/each}
   </ul>
   ```

Die Liste der To-Dos wird auf der Seite angezeigt, und die Kontrollkästchen sollten funktionieren (versuchen Sie ein paar zu markieren/zu demarkieren und beobachten Sie, dass die Filter immer noch wie erwartet funktionieren), aber unsere Statusüberschrift "x von y Elemente abgeschlossen" wird nicht mehr entsprechend aktualisiert. Das liegt daran, dass unsere `Todo`-Komponente das To-Do über die Prop empfängt, aber keine Informationen an ihr Elternteil zurücksendet. Das werden wir später beheben.

## Daten zwischen Komponenten teilen: Props-down, events-up Muster

Das `bind`-Directive ist ziemlich einfach und ermöglicht es Ihnen, mit minimalem Aufwand Daten zwischen einer Eltern- und einer Kind-Komponente zu teilen. Wenn Ihre Anwendung jedoch größer und komplexer wird, kann es leicht schwierig werden, den Überblick über all Ihre gebundenen Werte zu behalten. Ein anderer Ansatz ist das "Props-down, events-up"-Kommunikationsmuster.

Grundsätzlich basiert dieses Muster darauf, dass untergeordnete Komponenten Daten von ihren Eltern über Props erhalten und Elternkomponenten ihren Status aktualisieren, indem sie Ereignisse behandeln, die von untergeordneten Komponenten emittiert werden. Props _fließen nach unten_ von Eltern zu Kindern und Ereignisse _blubbern nach oben_ von Kindern zu Eltern. Dieses Muster schafft einen zweiseitigen Informationsfluss, der vorhersehbar und leichter nachvollziehbar ist.

Schauen wir uns an, wie wir unsere eigenen Ereignisse auslösen, um die fehlende Funktionalität der _Löschen_-Taste erneut zu implementieren.

Um benutzerdefinierte Ereignisse zu erstellen, verwenden wir das `createEventDispatcher`-Utility. Dies wird eine `dispatch()`-Funktion zurückgeben, die es uns ermöglicht, benutzerdefinierte Ereignisse zu emittieren. Wenn Sie ein Ereignis auslösen, müssen Sie den Namen des Ereignisses und optional ein Objekt mit zusätzlichen Informationen angeben, die Sie jedem Listener übergeben möchten. Diese zusätzlichen Daten sind in der Eigenschaft `detail` des Ereignisobjekts verfügbar.

> [!NOTE]
> Benutzerdefinierte Ereignisse in Svelte teilen dieselbe API wie reguläre DOM-Ereignisse. Darüber hinaus können Sie ein Ereignis an Ihre Elternkomponente weiterleiten, indem Sie `on:event` ohne einen Handler angeben.

Wir bearbeiten unsere `Todo`-Komponente, um ein `remove`-Ereignis auszulösen, wobei das zu entfernende To-Do als zusätzliche Information übergeben wird.

1. Fügen Sie zuerst die folgenden Zeilen oben in den `<script>`-Bereich der `Todo`-Komponente ein:

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

   Mit `dispatch('remove', todo)` lösen wir ein `remove`-Ereignis aus und übergeben das zu löschende `todo` als zusätzliche Daten. Der Handler wird mit einem Ereignisobjekt aufgerufen werden, wobei die zusätzlichen Daten auf der Eigenschaft `event.detail` verfügbar sind.

3. Jetzt müssen wir dieses Ereignis in `Todos.svelte` anhören und entsprechend handeln. Gehen Sie zurück zu dieser Datei und aktualisieren Sie Ihren `<Todo>`-Komponentenaufruf so:

   ```svelte
   <Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
   ```

   Unser Handler empfängt den `e`-Parameter (das Ereignisobjekt), der, wie bereits beschrieben, das zu löschende To-Do in der Eigenschaft `detail` enthält.

4. An diesem Punkt, wenn Sie Ihre App erneut ausprobieren, sollten Sie sehen, dass die _Löschen_-Funktionalität jetzt wieder funktioniert. Unser benutzerdefiniertes Ereignis hat also wie erhofft funktioniert. Darüber hinaus sendet der `remove`-Ereignis-Listener die Datenänderung zurück an das Elternteil, so dass unsere Statusüberschrift "x von y Elemente erledigt" nun beim Löschen von To-Dos korrekt aktualisiert wird.

Nun kümmern wir uns um das `update`-Ereignis, damit unsere Elternkomponente über jede Änderung informiert werden kann.

## To-Dos aktualisieren

Wir müssen noch die Funktionalität implementieren, damit wir bestehende To-Dos bearbeiten können. Wir müssen einen Bearbeitungsmodus in die `Todo`-Komponente aufnehmen. Beim Eintritt in den Bearbeitungsmodus zeigen wir ein `<input>`-Feld an, um den aktuellen To-Do-Namen zu bearbeiten, mit zwei Schaltflächen, um unsere Änderungen zu bestätigen oder zu stornieren.

### Die Ereignisse behandeln

1. Wir benötigen eine Variable, um zu verfolgen, ob wir uns im Bearbeitungsmodus befinden, und eine andere, um den Namen der bearbeiteten Aufgabe zu speichern. Fügen Sie die folgenden Variablendefinitionen am Ende des `<script>`-Bereichs der `Todo`-Komponente hinzu:

   ```js
   let editing = false; // Bearbeitungsmodus verfolgen
   let name = todo.name; // den Namen des bearbeiteten To-Dos halten
   ```

2. Wir müssen entscheiden, welche Ereignisse unsere `Todo`-Komponente auslösen soll:

   - Wir könnten für den Statuswechsel und die Bearbeitung des Namens unterschiedliche Ereignisse auslösen (zum Beispiel `updateTodoStatus` und `updateTodoName`).
   - Oder wir könnten einen eher generischen Ansatz verfolgen und ein einziges `update`-Ereignis für beide Operationen auslösen.

   Wir werden den zweiten Ansatz verfolgen, um eine andere Technik zu demonstrieren. Der Vorteil dieses Ansatzes besteht darin, dass wir später weitere Felder zu den To-Dos hinzufügen können und dennoch alle Aktualisierungen mit demselben Ereignis behandeln.

   Lassen Sie uns eine `update()`-Funktion erstellen, die die Änderungen empfängt und ein Update-Ereignis mit dem geänderten To-Do auslöst. Fügen Sie das folgende, wieder am Ende des `<script>`-Bereichs hinzu:

   ```js
   function update(updatedTodo) {
     todo = { ...todo, ...updatedTodo }; // Änderungen auf To-Do anwenden
     dispatch("update", todo); // update-Ereignis auslösen
   }
   ```

   Hier verwenden wir die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um das Original-To-Do mit den darauf angewendeten Änderungen zurückzugeben.

3. Als nächstes erstellen wir verschiedene Funktionen, um jede Benutzeraktion zu behandeln. Wenn sich das To-Do im Bearbeitungsmodus befindet, kann der Benutzer die Änderungen speichern oder stornieren. Wenn es sich nicht im Bearbeitungsmodus befindet, kann der Benutzer das To-Do löschen, es bearbeiten oder seinen Status zwischen abgeschlossen und aktiv umschalten.

   Fügen Sie die folgende Reihe von Funktionen unter Ihrer vorherigen Funktion hinzu, um diese Aktionen zu bearbeiten:

   ```js
   function onCancel() {
     name = todo.name; // Namen auf seinen ursprünglichen Wert zurücksetzen
     editing = false; // und Bearbeitungsmodus verlassen
   }

   function onSave() {
     update({ name }); // Namen des To-Dos aktualisieren
     editing = false; // und Bearbeitungsmodus verlassen
   }

   function onRemove() {
     dispatch("remove", todo); // remove-Ereignis auslösen
   }

   function onEdit() {
     editing = true; // Bearbeitungsmodus betreten
   }

   function onToggle() {
     update({ completed: !todo.completed }); // Status des To-Dos aktualisieren
   }
   ```

### Das Markup aktualisieren

Jetzt müssen wir das Markup unserer `Todo`-Komponente aktualisieren, um die obigen Funktionen aufzurufen, wenn die entsprechenden Aktionen durchgeführt werden.

Um den Bearbeitungsmodus zu behandeln, verwenden wir die `editing`-Variable, die ein Boolean ist. Wenn sie auf `true` gesetzt ist, sollte das `<input>`-Feld für die Bearbeitung des To-Do-Namens sowie die _Stornieren_- und _Speichern_-Schaltflächen angezeigt werden. Wenn sie sich nicht im Bearbeitungsmodus befindet, werden das Kontrollkästchen, der To-Do-Name, und die Schaltflächen zum Bearbeiten und Löschen des To-Dos angezeigt.

Um dies zu erreichen, verwenden wir einen [`if`-Block](https://svelte.dev/docs/logic-blocks#if). Der `if`-Block rendert bedingt etwas Markup. Beachten Sie, dass er das Markup nicht nur basierend auf der Bedingung zeigt oder ausblendet — er fügt die Elemente dynamisch zum DOM hinzu und entfernt sie aus dem DOM, je nach Bedingung.

Wenn `editing` zum Beispiel `true` ist, zeigt Svelte das Bearbeitungsformular an; wenn es `false` ist, entfernt es es aus dem DOM und fügt das Kontrollkästchen hinzu. Dank der Reaktivität von Svelte reicht es aus, den Wert der `editing`-Variablen zuzuweisen, um die richtigen HTML-Elemente anzuzeigen.

Das folgende Beispiel gibt Ihnen eine Vorstellung davon, wie die grundlegende `if`-Blockstruktur aussieht:

```svelte
<div class="stack-small">
  {#if editing}
  <!-- Markup für die Bearbeitung von To-Dos: Label, Texteingabe, Stornieren- und Speichern-Schaltflächen -->
  {:else}
  <!-- Markup für die Anzeige von To-Dos: Checkbox, Label, Bearbeiten- und Löschen-Schaltflächen -->
  {/if}
</div>
```

Der Nicht-Bearbeitungsabschnitt — das heißt, der `{:else}` Teil (unterer Teil) des `if`-Blocks — wird sehr ähnlich zu dem sein, den wir in unserer `Todos`-Komponente hatten. Der einzige Unterschied besteht darin, dass wir `onToggle()`, `onEdit()` und `onRemove()` aufrufen, je nach Benutzeraktion.

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

- Wenn der Benutzer die _Bearbeiten_-Schaltfläche drückt, führen wir `onEdit()` aus, das einfach die `editing`-Variable auf `true` setzt.
- Wenn der Benutzer auf das Kontrollkästchen klickt, rufen wir die Funktion `onToggle()` auf, die `update()` ausführt und ein Objekt mit dem neuen `completed`-Wert als Parameter übergibt.
- Die `update()`-Funktion löst das `update`-Ereignis aus und übergibt als zusätzliche Information eine Kopie des ursprünglichen To-Dos mit den angewendeten Änderungen.
- Schließlich löst die Funktion `onRemove()` das `remove`-Ereignis aus und übergibt das zu löschende `todo` als zusätzliche Daten.

Die Bearbeitungs-UI (die obere Hälfte) enthält ein `<input>`-Feld und zwei Schaltflächen zum Abbrechen oder Speichern der Änderungen:

```svelte
<div class="stack-small">
{#if editing}
  <form on:submit|preventDefault={onSave} class="stack-small" on:keydown={(e) => e.key === 'Escape' && onCancel()}>
    <div class="form-group">
      <label for="todo-{todo.id}" class="todo-label">Neuer Name für '{todo.name}'</label>
      <input bind:value={name} type="text" id="todo-{todo.id}" autoComplete="off" class="todo-text" />
    </div>
    <div class="btn-group">
      <button class="btn todo-cancel" on:click={onCancel} type="button">
        Abbrechen<span class="visually-hidden">umbenennen {todo.name}</span>
        </button>
      <button class="btn btn__primary todo-edit" type="submit" disabled={!name}>
        Speichern<span class="visually-hidden">neuer Name für {todo.name}</span>
      </button>
    </div>
  </form>
{:else}
[...]
```

Wenn der Benutzer die _Bearbeiten_-Schaltfläche drückt, wird die `editing`-Variable auf `true` gesetzt und Svelte entfernt das Markup im `{:else}`-Teil des DOMs und ersetzt es durch das Markup im `{#if}`-Abschnitt.

Die `value`-Eigenschaft des `<input>`s wird an die `name`-Variable gebunden, und die Schaltflächen zum Abbrechen und Speichern der Änderungen rufen jeweils `onCancel()` und `onSave()` auf (diese Funktionen haben wir zuvor hinzugefügt):

- Wenn `onCancel()` aufgerufen wird, wird `name` auf seinen ursprünglichen Wert (beim Übergeben als Prop) zurückgesetzt und wir verlassen den Bearbeitungsmodus (indem wir `editing` auf `false` setzen).
- Wenn `onSave()` aufgerufen wird, führen wir die `update()`-Funktion aus — und übergeben den geänderten `name` — und verlassen den Bearbeitungsmodus.

Wir deaktivieren den `Speichern`-Button auch, wenn das `<input>` leer ist, indem wir das Attribut `disabled={!name}` verwenden, und erlauben es dem Benutzer, die Bearbeitung mit der <kbd>Escape</kbd>-Taste abzubrechen, so:

```plain
on:keydown={(e) => e.key === 'Escape' && onCancel()}
```

Wir verwenden auch `todo.id`, um eindeutige IDs für die neuen Eingabesteuerungen und Labels zu erstellen.

1. Das vollständige aktualisierte Markup unserer `Todo`-Komponente sieht wie folgt aus. Aktualisieren Sie Ihres jetzt:

   ```svelte
   <div class="stack-small">
   {#if editing}
     <!-- Markup für die Bearbeitung von To-Dos: Label, Texteingabe, Stornieren- und Speichern-Schaltflächen -->
     <form on:submit|preventDefault={onSave} class="stack-small" on:keydown={(e) => e.key === 'Escape' && onCancel()}>
       <div class="form-group">
         <label for="todo-{todo.id}" class="todo-label">Neuer Name für '{todo.name}'</label>
         <input bind:value={name} type="text" id="todo-{todo.id}" autoComplete="off" class="todo-text" />
       </div>
       <div class="btn-group">
         <button class="btn todo-cancel" on:click={onCancel} type="button">
           Abbrechen<span class="visually-hidden">umbenennen {todo.name}</span>
           </button>
         <button class="btn btn__primary todo-edit" type="submit" disabled={!name}>
           Speichern<span class="visually-hidden">neuer Name für {todo.name}</span>
         </button>
       </div>
     </form>
   {:else}
     <!-- Markup für die Anzeige von To-Dos: Checkbox, Label, Bearbeiten- und Löschen-Schaltflächen -->
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
   > Wir könnten dies weiter in zwei verschiedene Komponenten aufteilen, eine zum Bearbeiten des To-Dos und eine andere, um es anzuzeigen. Letztendlich hängt es davon ab, wie bequem Sie sich mit diesem Komplexitätsgrad in einer einzigen Komponente fühlen. Sie sollten auch berücksichtigen, ob eine weitere Aufteilung es Ihnen ermöglichen würde, diese Komponente in einem anderen Kontext wiederzuverwenden.

2. Um die Aktualisierungsfunktionalität in Gang zu bringen, müssen wir das `update`-Ereignis von der `Todos`-Komponente aus behandeln. Fügen Sie Folgendes in den `<script>`-Abschnitt ein:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     todos[i] = { ...todos[i], ...todo };
   }
   ```

   Wir finden das `todo` anhand der `id` in unserem `todos`-Array und aktualisieren seinen Inhalt mithilfe der Spread-Syntax. In diesem Fall hätten wir auch einfach `todos[i] = todo` verwenden können, aber diese Implementierung ist robuster, da sie es der `Todo`-Komponente ermöglicht, nur die aktualisierten Teile des To-Do zurückzugeben.

3. Als nächstes müssen wir für das `update`-Ereignis auf unseren `<Todo>`-Komponentenaufruf lauschen und unsere `updateTodo()`-Funktion ausführen, wenn diese auftritt, um den `name` und `completed`-Status zu ändern. Aktualisieren Sie Ihren `<Todo>`-Aufruf so:

   ```svelte
   {#each filterTodos(filter, todos) as todo (todo.id)}
   <li class="todo">
     <Todo {todo} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
     removeTodo(e.detail)} />
   </li>
   ```

4. Probieren Sie Ihre App erneut aus und Sie sollten sehen, dass Sie To-Dos löschen, hinzufügen, bearbeiten, die Bearbeitung abbrechen und den Fertigstellungsstatus umschalten können. Und unsere Statusüberschrift "x von y Elemente erledigt" wird nun korrekt aktualisiert, wenn To-Dos abgeschlossen werden.

Wie Sie sehen können, ist es einfach, das "Props-down, events-up" Muster in Svelte zu implementieren. Dennoch kann `bind` für einfache Komponenten eine gute Wahl sein; Svelte lässt Ihnen die Wahl.

> [!NOTE]
> Svelte bietet fortschrittlichere Mechanismen, um Informationen zwischen Komponenten zu teilen: die [Context API](https://svelte.dev/docs/svelte#setcontext) und [Stores](https://svelte.dev/docs/svelte-store). Die Context API bietet einen Mechanismus für Komponenten und ihre Nachkommen, miteinander zu "sprechen", ohne Daten und Funktionen als Props hin und her zu reichen oder viele Ereignisse auszulösen. Stores ermöglichen es Ihnen, reaktive Daten zwischen Komponenten zu teilen, die nicht hierarchisch verwandt sind. Wir werden später in der Serie auf Stores eingehen.

## Der Code bisher

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

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

Jetzt haben wir alle erforderlichen Funktionalitäten unserer App in Gang. Wir können To-Dos anzeigen, hinzufügen, bearbeiten und löschen, sie als erledigt markieren und nach Status filtern.

In diesem Artikel behandelten wir folgende Themen:

- Extrahieren von Funktionalität in eine neue Komponente
- Informationen von Kind zu Eltern mithilfe eines als Prop empfangenen Handlers übergeben
- Informationen von Eltern zu Kind übergeben mithilfe des `bind`-Directives
- Bedingtes Rendern von Markup-Blöcken mithilfe des `if`-Blocks
- Das "Props-down, events-up" Kommunikationsmuster implementieren
- Erstellen und Hören auf benutzerdefinierte Ereignisse

Im nächsten Artikel werden wir fortfahren, unsere App zu komponentisieren, und uns einige fortschrittliche Techniken für die Arbeit mit dem DOM ansehen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
