---
title: "Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir unserer To-Do-Liste weitere Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel werden wir die endgültigen Funktionen der App hinzufügen und unsere App weiter in Komponenten aufteilen. Wir werden lernen, wie man mit Reaktivitätsproblemen im Zusammenhang mit der Aktualisierung von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, müssen wir etwas tiefer in Sveltes Reaktivitätssystem eintauchen. Außerdem werden wir einige Probleme mit dem Fokus der Barrierefreiheit lösen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut zu sein und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
          > zu haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie einige fortgeschrittene Svelte-Techniken, die das Lösen von Reaktivitätsproblemen, Tastaturzugänglichkeitsprobleme im Zusammenhang mit dem Komponentenlebenszyklus und mehr beinhalten.
      </td>
    </tr>
  </tbody>
</table>

Wir werden uns auf einige Zugänglichkeitsprobleme im Zusammenhang mit dem Fokusmanagement konzentrieren. Dazu werden wir einige Techniken zur Zugriff auf DOM-Knoten und zur Ausführung von Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) nutzen. Außerdem werden wir sehen, wie man Ereignislistener für DOM-Elemente deklariert und säubert.

Wir müssen auch ein wenig über den Lebenszyklus von Komponenten lernen, um zu verstehen, wann diese DOM-Knoten in den DOM eingehängt und aus ihm entfernt werden, und wie wir auf sie zugreifen können. Außerdem werden wir die `action`-Direktive kennenlernen, die es uns ermöglicht, die Funktionalität von HTML-Elementen auf eine wiederverwendbare und deklarative Weise zu erweitern.

Schließlich werden wir mehr über Komponenten lernen. Bisher haben wir gesehen, wie Komponenten Daten mithilfe von Props teilen können und mit ihren Eltern durch Events und Datenbindung in beide Richtungen kommunizieren können. Jetzt werden wir sehen, wie Komponenten auch Methoden und Variablen freigeben können.

Die folgenden neuen Komponenten werden im Verlauf dieses Artikels entwickelt:

- `MoreActions`: Zeigt die Schaltflächen _Alle überprüfen_ und _Abgeschlossene entfernen_ an und sendet die entsprechenden Events aus, um ihre Funktionalität zu handhaben.
- `NewTodo`: Zeigt das `<input>`-Feld und die _Hinzufügen_-Schaltfläche zum Hinzufügen eines neuen To-Do-Elements an.
- `TodosStatus`: Zeigt die Statusüberschrift "x von y Aufgaben erledigt" an.

## Machen Sie mit unserem Code mit

### Git

Klonen Sie das GitHub-Repo (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Status der App zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu coden, beginnen Sie bei

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Arbeiten an der MoreActions-Komponente

Jetzt werden wir die Schaltflächen _Alle überprüfen_ und _Abgeschlossene entfernen_ angehen. Erstellen wir eine Komponente, die für die Anzeige der Schaltflächen und das Aussenden der entsprechenden Events verantwortlich ist.

1. Erstellen Sie eine neue Datei, `components/MoreActions.svelte`.
2. Wenn die erste Schaltfläche angeklickt wird, senden wir ein `checkAll`-Event aus, um anzuzeigen, dass alle To-Dos überprüft/abgewählt werden sollen. Wenn die zweite Schaltfläche angeklickt wird, senden wir ein `removeCompleted`-Event aus, um anzugeben, dass alle abgeschlossenen To-Dos entfernt werden sollen. Füllen Sie Ihre `MoreActions.svelte`-Datei mit folgendem Inhalt:

   ```svelte
   <script>
     import { createEventDispatcher } from "svelte";

     const dispatch = createEventDispatcher();

     let completed = true;

     const checkAll = () => {
       dispatch("checkAll", completed);
       completed = !completed;
     };

     const removeCompleted = () => dispatch("removeCompleted");
   </script>

   <div class="btn-group">
     <button type="button" class="btn btn__primary" on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
     <button type="button" class="btn btn__primary" on:click={removeCompleted}>Remove completed</button>
   </div>
   ```

   Wir haben auch eine `completed`-Variable eingefügt, um zwischen dem Überprüfen und dem Abwählen aller Aufgaben umzuschalten.

3. Zurück in `Todos.svelte` werden wir unsere `MoreActions`-Komponente importieren und zwei Funktionen erstellen, um die von der `MoreActions`-Komponente ausgesendeten Events zu behandeln.

   Fügen Sie die folgende Import-Anweisung unter den bestehenden hinzu:

   ```js
   import MoreActions from "./MoreActions.svelte";
   ```

4. Fügen Sie dann die beschriebenen Funktionen am Ende des `<script>`-Abschnitts hinzu:

   ```js
   const checkAllTodos = (completed) =>
     todos.forEach((t) => (t.completed = completed));

   const removeCompletedTodos = () =>
     (todos = todos.filter((t) => !t.completed));
   ```

5. Gehen Sie nun zum unteren Teil des `Todos.svelte`-Markup-Abschnitts und ersetzen Sie das `<div class="btn-group">`-Element, das wir in die `MoreActions.svelte`-Datei kopiert haben, durch einen Aufruf der `MoreActions`-Komponente, wie folgt:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. Gehen wir zurück in die App und probieren es aus. Sie werden feststellen, dass die Schaltfläche _Abgeschlossene entfernen_ einwandfrei funktioniert, aber die Schaltfläche _Alle überprüfen_/_Alle abwählen_ einfach stillschweigend fehlschlägt.

Um herauszufinden, was hier passiert, werden wir etwas tiefer in Svelte-Reaktivität einsteigen.

## Reaktivitätsprobleme: Aktualisieren von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos`-Array von der `checkAllTodos()`-Funktion aus in die Konsole loggen.

1. Aktualisieren Sie Ihre bestehende `checkAllTodos()`-Funktion wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Gehen Sie zurück zu Ihrem Browser, öffnen Sie Ihre DevTools-Konsole und klicken Sie ein paar Mal auf _Alle überprüfen_/_Alle abwählen_.

Sie werden feststellen, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie die Schaltfläche drücken (die `completed`-Eigenschaften der `todo`-Objekte wechseln zwischen `true` und `false`), aber Svelte ist sich dessen nicht bewusst. Das bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr nützlich sein wird.

Um herauszufinden, warum das passiert, müssen wir verstehen, wie Reaktivität in Svelte funktioniert, wenn Arrays und Objekte aktualisiert werden.

Viele Webframeworks verwenden die Technik des virtuellen DOM, um die Seite zu aktualisieren. Grundsätzlich ist das virtuelle DOM eine im Speicher befindliche Kopie der Inhalte der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "echten" DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht es dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen standardmäßig unser gesamtes JavaScript bei jeder Änderung gegen dieses virtuelle DOM erneut aus und wenden verschiedene Methoden an, um kostspielige Berechnungen zu cachen und die Ausführung zu optimieren. Sie versuchen kaum oder gar nicht zu verstehen, was unser JavaScript-Code macht.

Svelte verwendet keine virtuelle DOM-Darstellung. Stattdessen analysiert und parst es unseren Code, erstellt einen Abhängigkeitsbaum und generiert dann das erforderliche JavaScript, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz generiert in der Regel optimierten JavaScript-Code mit minimalem Overhead, hat jedoch auch seine Einschränkungen.

Manchmal kann Svelte keine Änderungen an überwachten Variablen feststellen. Denken Sie daran, dass Sie Svelte mitteilen müssen, dass sich eine Variable geändert hat, indem Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die Sie sich merken sollten, ist: **Der Name der aktualisierten Variable muss auf der linken Seite der Zuweisung stehen.**

Zum Beispiel im folgenden Code-Beispiel:

```js
const foo = obj.foo;
foo.bar = "baz";
```

wird Svelte `obj.foo.bar` nicht aktualisieren, es sei denn, Sie setzen es mit `obj = obj` fort. Das liegt daran, dass Svelte Objektverweise nicht verfolgen kann, also müssen wir ihm explizit sagen, dass sich `obj` durch eine Zuweisung geändert hat.

> [!NOTE]
> Wenn `foo` eine Top-Level-Variable ist, können Sie Svelte leicht mitteilen, dass `obj` immer dann aktualisiert werden soll, wenn sich `foo` ändert, mit der folgenden reaktiven Anweisung: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und wann immer es sich ändert, wird Svelte `obj = obj` ausführen.

In unserer `checkAllTodos()`-Funktion, wenn wir ausführen:

```js
todos.forEach((t) => (t.completed = completed));
```

wird Svelte `todos` nicht als geändert markieren, weil es nicht weiß, dass wir, wenn wir unsere `t`-Variable innerhalb der `forEach()`-Methode aktualisieren, auch das `todos`-Array modifizieren. Und das macht Sinn, weil Svelte sonst über die internen Abläufe der `forEach()`-Methode Bescheid wüsste; das gleiche würde also für jede Methode gelten, die an ein beliebiges Objekt oder Array angehängt ist.

Dennoch gibt es verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle beinhalten das Zuweisen eines neuen Werts zur überwachten Variable.

Wie wir bereits gesehen haben, könnten wir Svelte einfach sagen, dass die Variable mit einer Selbstzuweisung aktualisiert werden soll, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Dies wird das Problem lösen. Intern wird Svelte `todos` als geändert kennzeichnen und die anscheinend überflüssige Selbstzuweisung entfernen. Abgesehen von der Tatsache, dass es seltsam aussieht, ist es völlig in Ordnung, diese Technik zu verwenden, und manchmal ist es der prägnanteste Weg, dies zu tun.

Wir könnten auch auf das `todos`-Array über den Index zugreifen, so wie:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen zu Eigenschaften von Arrays und Objekten — z.B. `obj.foo += 1` oder `array[i] = x` — funktionieren genauso wie Zuweisungen zu den Werten selbst. Wenn Svelte diesen Code analysiert, kann es feststellen, dass das `todos`-Array modifiziert wird.

Eine weitere Lösung besteht darin, ein neues Array zu `todos` zuzuweisen, das eine Kopie aller To-Dos mit der aktualisierten `completed`-Eigenschaft enthält, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode, die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jedes To-Dos unter Verwendung der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) zurück und überschreibt die Eigenschaft des vollständigen Werts entsprechend. Diese Lösung hat den zusätzlichen Vorteil, dass ein neues Array mit neuen Objekten zurückgegeben wird, wodurch die ursprünglichen `todos`-Arrays vollständig vermieden werden.

> [!NOTE]
> Svelte erlaubt uns, verschiedene Optionen anzugeben, die beeinflussen, wie der Compiler funktioniert. Die Option `<svelte:options immutable={true}/>` teilt dem Compiler mit, dass Sie versprechen, keine Objekte zu ändern. Dies ermöglicht es ihm, weniger konservativ zu sein, ob Werte sich geändert haben, und einfacheren und leistungsfähigeren Code zu generieren. Für weitere Informationen zu `<svelte:options>` siehe die [Svelte-Options-Dokumentation](https://svelte.dev/docs/special-elements#svelte-options).

All diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Jede dieser Techniken ermöglicht Svelte zu bemerken, dass unser `todos`-Array modifiziert wurde.

**Wählen Sie eine aus und aktualisieren Sie Ihre `checkAllTodos()`-Funktion entsprechend. Jetzt sollten Sie in der Lage sein, alle To-Dos auf einmal zu überprüfen und abzuwählen. Probieren Sie es aus!**

## Fertigstellung unserer MoreActions-Komponente

Wir werden ein Detail der Benutzerfreundlichkeit zu unserer Komponente hinzufügen. Wir deaktivieren die Schaltflächen, wenn keine Aufgaben zum Verarbeiten vorhanden sind. Dafür werden wir das `todos`-Array als Prop erhalten und die `disabled`-Eigenschaft jeder Schaltfläche entsprechend setzen.

1. Aktualisieren Sie Ihre `MoreActions.svelte`-Komponente wie folgt:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let todos;

     let completed = true;

     const checkAll = () => {
       dispatch('checkAll', completed);
       completed = !completed;
     }

     const removeCompleted = () => dispatch('removeCompleted');

     $: completedTodos = todos.filter((t) => t.completed).length;
   </script>

   <div class="btn-group">
     <button type="button" class="btn btn__primary"
       disabled={todos.length === 0} on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
     <button type="button" class="btn btn__primary"
       disabled={completedTodos === 0} on:click={removeCompleted}>Remove completed</button>
   </div>
   ```

   Wir haben auch eine reaktive `completedTodos`-Variable deklariert, um die _Abgeschlossene entfernen_-Schaltfläche zu aktivieren oder zu deaktivieren.

2. Vergessen Sie nicht, das Prop von `Todos.svelte` aus, wo die Komponente aufgerufen wird, an `MoreActions` zu übergeben:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Details fokussieren

Nachdem wir nun die gesamte erforderliche Funktionalität der App abgeschlossen haben, werden wir uns auf einige Barrierefreiheitsfunktionen konzentrieren, die die Benutzerfreundlichkeit unserer App für Tastatur-Nutzer und Benutzer von Bildschirmlesern verbessern.

In seinem aktuellen Zustand hat unsere App einige Barrierefreiheitsprobleme im Zusammenhang mit dem Fokusmanagement. Schauen wir uns diese Probleme an.

## Erkundung von Barrierefreiheitsproblemen mit der Tastatur in unserer To-Do-App

Derzeit werden Tastaturbenutzer feststellen, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder kohärent ist.

Wenn Sie auf das Eingabefeld oben in unserer App klicken, sehen Sie eine dicke, gestrichelte Umrandung um dieses Eingabefeld. Diese Umrandung ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist.

Wenn Sie ein Mausnutzer sind, haben Sie diesen visuellen Hinweis möglicherweise übersprungen. Aber wenn Sie ausschließlich mit der Tastatur arbeiten, ist es von entscheidender Bedeutung zu wissen, welches Steuerungselement den Fokus hat. Es zeigt uns, welche Steuerungselemente unsere Tastatureingaben erhalten.

Wenn Sie die <kbd>Tab</kbd>-Taste wiederholt drücken, sehen Sie den gestrichelten Fokusindikator, der zwischen allen fokussierbaren Elementen auf der Seite wechselt. Wenn Sie den Fokus auf die _Bearbeiten_-Schaltfläche verschieben und <kbd>Enter</kbd> drücken, verschwindet der Fokus plötzlich und Sie können nicht mehr erkennen, welches Steuerungselement unsere Tastatureingaben erhalten wird.

Außerdem passiert nichts, wenn Sie die Taste <kbd>Escape</kbd> oder <kbd>Enter</kbd> drücken. Und wenn Sie auf _Abbrechen_ oder _Speichern_ klicken, verschwindet der Fokus erneut. Für einen Benutzer, der mit der Tastatur arbeitet, wird dieses Verhalten bestenfalls verwirrend sein.

Wir würden auch einige Usability-Funktionen wie das Deaktivieren der _Speichern_-Schaltfläche hinzufügen, wenn erforderliche Felder leer sind, und Fokus auf bestimmte HTML-Elemente geben oder Inhalte automatisch auswählen, wenn ein Texteingabe-Feld den Fokus erhält.

Um all diese Funktionen zu implementieren, benötigen wir einen programmgesteuerten Zugriff auf die DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Außerdem müssen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um spezifische Aufgaben auszuführen, wenn das Steuerungselement den Fokus erhält.

Das Problem ist, dass all diese DOM-Knoten von Svelte zur Laufzeit dynamisch erstellt werden. Daher müssen wir warten, bis sie erstellt und dem DOM hinzugefügt wurden, um sie verwenden zu können. Dazu müssen wir mehr über den [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount) lernen, um zu verstehen, wann wir auf sie zugreifen können — mehr dazu später.

## Erstellen einer NewTodo-Komponente

Beginnen wir mit der Auslagerung unseres neuen To-Do-Formulars in eine eigene Komponente. Mit dem, was wir bisher wissen, können wir eine neue Komponenten-Datei erstellen und den Code so anpassen, dass ein `addTodo`-Event ausgesandt wird, wobei der Name des neuen To-Do-Elements zusammen mit den zusätzlichen Details übergeben wird.

1. Erstellen Sie eine neue Datei `components/NewTodo.svelte`.
2. Geben Sie den folgenden Inhalt hinein:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     let name = '';

     const addTodo = () => {
       dispatch('addTodo', name);
       name = '';
     }

     const onCancel = () => name = '';

   </script>

   <form on:submit|preventDefault={addTodo} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
     <h2 class="label-wrapper">
       <label for="todo-0" class="label__lg">What needs to be done?</label>
     </h2>
     <input bind:value={name} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
     <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
   </form>
   ```

   Hier binden wir das `<input>`-Element an die `name`-Variable mit `bind:value={name}` und deaktivieren die _Hinzufügen_-Schaltfläche, wenn sie leer ist (d.h. keinen Textinhalt), mit `disabled={!name}`. Wir kümmern uns auch um die <kbd>Escape</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}}`. Immer wenn die <kbd>Escape</kbd>-Taste gedrückt wird, führen wir `onCancel()` aus, das einfach die `name`-Variable löscht.

3. Nun müssen wir es von innerhalb der `Todos`-Komponente aus `importieren` und verwenden und die `addTodo()`-Funktion aktualisieren, um den Namen der neuen Aufgabe zu erhalten.

   Fügen Sie die folgende `import`-Anweisung unter den anderen in `Todos.svelte` hinzu:

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. Und aktualisieren Sie die `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   `addTodo()` erhält jetzt direkt den Namen des neuen To-Dos, sodass wir die `newTodoName`-Variable nicht mehr benötigen, um ihr ihren Wert zu geben. Unsere `NewTodo`-Komponente kümmert sich darum.

   > [!NOTE]
   > Die `{ name }`-Syntax ist nur eine Abkürzung für `{ name: name }`. Diese stammt aus JavaScript selbst und hat nichts mit Svelte zu tun, abgesehen von der Inspirationsquelle für Sveltes eigene Kurzschreibweisen.

5. Schließlich für diesen Abschnitt, ersetzen Sie das NewTodo-Formular-Markup durch einen Aufruf der `NewTodo`-Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten unter Verwendung der `bind:this={dom_node}`-Direktive

Jetzt möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente den Fokus jedes Mal erneut erhält, wenn die _Hinzufügen_-Schaltfläche gedrückt wird. Dafür benötigen wir eine Referenz auf den DOM-Knoten des Eingabefeldes. Svelte bietet eine Möglichkeit, dies mit der `bind:this={dom_node}`-Direktive zu tun. Wenn sie angegeben ist, weist Svelte, sobald die Komponente montiert und der DOM-Knoten erstellt wurde, der angegebenen Variablen eine Referenz auf den DOM-Knoten zu.

Wir werden eine `nameEl`-Variable erstellen und an das Eingabefeld mit `bind:this={nameEl}` binden. Dann werden wir innerhalb von `addTodo()`, nachdem das neue To-Do hinzugefügt wurde, `nameEl.focus()` aufrufen, um das `<input>` erneut zu fokussieren. Dasselbe werden wir tun, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt, mit der `onCancel()`-Funktion.

Aktualisieren Sie den Inhalt von `NewTodo.svelte` wie folgt:

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let name = '';
  let nameEl; // reference to the name input DOM node

  const addTodo = () => {
    dispatch('addTodo', name);
    name = '';
    nameEl.focus(); // give focus to the name input
  }

  const onCancel = () => {
    name = '';
    nameEl.focus(); // give focus to the name input
  }
</script>

<form on:submit|preventDefault={addTodo} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
  <h2 class="label-wrapper">
    <label for="todo-0" class="label__lg">What needs to be done?</label>
  </h2>
  <input bind:value={name} bind:this={nameEl} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
  <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
</form>
```

Versuchen Sie die App aus: Geben Sie einen neuen To-Do-Namen in das `<input>`-Feld ein, drücken Sie <kbd>Tab</kbd>, um den Fokus auf die _Hinzufügen_-Schaltfläche zu setzen, und dann <kbd>Enter</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie das Eingabefeld wieder den Fokus erhält.

### Automatischen Fokus auf unser Eingabefeld legen

Die nächste Funktion, die wir zu unserer `NewTodo`-Komponente hinzufügen möchten, wird ein `autofocus`-Prop sein, mit dem wir angeben können, dass das `<input>`-Feld beim Laden der Seite fokussiert werden soll.

1. Unser erster Versuch sieht wie folgt aus: Lassen Sie uns versuchen, das `autofocus`-Prop hinzuzufügen und einfach `nameEl.focus()` aus dem `<script>`-Block aufzurufen. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen), damit er wie folgt aussieht:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // reference to the name input DOM node

     if (autofocus) nameEl.focus();
   ```

2. Gehen Sie jetzt zurück zur `Todos`-Komponente und übergeben Sie das `autofocus`-Prop in den `<NewTodo>`-Komponentenaufruf, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. Wenn Sie Ihre App jetzt ausprobieren, werden Sie sehen, dass die Seite jetzt leer ist, und in Ihrer DevTools-Webkonsole werden Sie eine Fehlermeldung in der Art von: `TypeError: nameEl is undefined` sehen.

Um zu verstehen, was hier passiert, sprechen wir ein wenig mehr über diesen [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount), den wir bereits erwähnt haben.

## Komponentenlebenszyklus und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode (das ist der `<script>`-Abschnitt der Komponente) aus. Aber zu diesem Zeitpunkt sind alle Knoten, die die Komponente ausmachen, nicht an den DOM angefügt, tatsächlich existieren sie noch nicht einmal.

Wie können Sie also wissen, wann die Komponente bereits erstellt und am DOM montiert ist? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt wird, und endet, wenn sie zerstört wird. Es gibt eine Handvoll Funktionen, mit denen Sie Code zu Schlüsselzeitpunkten während dieses Lebenszyklus ausführen können.

Die, die Sie am häufigsten verwenden werden, ist `onMount()`, die es uns ermöglicht, ein Rückruf zu starten, sobald die Komponente am DOM montiert wurde. Lassen Sie es uns ausprobieren und sehen, was mit der `nameEl`-Variable passiert.

1. Fügen Sie zunächst die folgende Zeile am Anfang des `<script>`-Abschnitts von `NewTodo.svelte` hinzu:

   ```js
   import { onMount } from "svelte";
   ```

2. Und diese Zeilen am Ende davon:

   ```js
   console.log("initializing:", nameEl);
   onMount(() => {
     console.log("mounted:", nameEl);
   });
   ```

3. Entfernen Sie nun die Zeile `if (autofocus) nameEl.focus()`, um den Fehler zu vermeiden, den wir zuvor gesehen haben.
4. Die App wird jetzt wieder funktionieren, und Sie werden das Folgende in Ihrer Konsole sehen:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen können, ist `nameEl` während der Initialisierung der Komponente undefiniert, was Sinn macht, weil der `<input>`-Knoten noch nicht existiert. Nachdem die Komponente gemountet wurde, weist Svelte dank der `bind:this={nameEl}`-Direktive der Variablen `nameEl` eine Referenz auf den `<input>`-DOM-Knoten zu.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen Block mit `console.log()`/`onMount()`, den Sie hinzugefügt haben, durch diesen:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie erneut in Ihre App und Sie werden jetzt sehen, dass das `<input>`-Feld beim Laden der Seite fokussiert wird.

> [!NOTE]
> Sie können sich die anderen [Lebenszyklusfunktionen in den Svelte-Dokumenten](https://svelte.dev/docs/svelte) ansehen, und Sie können sie in Aktion im [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) sehen.

## Auf das Aktualisieren des DOMs mit der `tick()`-Funktion warten

Nun werden wir uns um die Details des Fokusmanagements der `Todo`-Komponente kümmern. Zunächst einmal möchten wir, dass der Bearbeitungs-`<input>` einer `Todo`-Komponente den Fokus erhält, wenn wir durch Drücken der _Bearbeiten_-Schaltfläche in den Bearbeitungsmodus wechseln. In gleicher Weise wie wir es zuvor gesehen haben, erstellen wir eine `nameEl`-Variable innerhalb `Todo.svelte` und rufen `nameEl.focus()` auf, nachdem wir die `editing`-Variable auf `true` gesetzt haben.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablendeklaration direkt unter Ihren `editing`- und `name`-Deklarationen hinzu:

   ```js
   let nameEl; // reference to the name input DOM node
   ```

2. Aktualisieren Sie jetzt Ihre `onEdit()`-Funktion wie folgt:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
     nameEl.focus(); // set focus to name input
   }
   ```

3. Und binden Sie schließlich `nameEl` an das `<input>`-Feld durch dessen Aktualisierung wie folgt:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. Wenn Sie jedoch die aktualisierte App ausprobieren, erhalten Sie einen Fehler in der Art von "TypeError: nameEl is undefined" in der Konsole, wenn Sie die _Bearbeiten_-Schaltfläche eines To-Dos drücken.

Was passiert hier also? Wenn Sie den Zustand einer Komponente in Svelte aktualisieren, wird das DOM nicht sofort aktualisiert. Stattdessen wartet es bis zur nächsten Mikroaufgabe, um zu sehen, ob es noch andere Änderungen gibt, die angewendet werden müssen, einschließlich in anderen Komponenten. Dadurch wird unnötige Arbeit vermieden und es ermöglicht dem Browser, die Dinge sehr effizient zu batchen.

In diesem Fall ist das Bearbeitungs-`<input>`, wenn `editing` `false` ist, nicht sichtbar, da es nicht im DOM existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen direkt danach, auf die `nameEl`-Variable zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hierbei ist, dass Svelte das DOM noch nicht aktualisiert hat.

Eine Möglichkeit, dieses Problem zu lösen, besteht darin, [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) zu verwenden, um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern und so Svelte die Möglichkeit zu geben, das DOM zu aktualisieren.

Probieren Sie das jetzt aus:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, aber sie ist ziemlich unelegant. Svelte bietet eine bessere Möglichkeit, diese Fälle zu behandeln. Die [`tick()`-Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Promise zurück, das aufgelöst wird, sobald alle anstehenden Zustandsänderungen auf das DOM angewendet wurden (oder sofort, wenn keine anstehenden Zustandsänderungen vorhanden sind). Lassen Sie es uns jetzt ausprobieren.

1. Zunächst einmal importieren Sie `tick` am Anfang des `<script>`-Abschnitts neben Ihrem bestehenden Import:

   ```js
   import { tick } from "svelte";
   ```

2. Als Nächstes rufen Sie `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) von einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) aus auf; aktualisieren Sie `onEdit()` wie folgt:

   ```js
   async function onEdit() {
     editing = true; // enter editing mode
     await tick();
     nameEl.focus();
   }
   ```

3. Wenn Sie es jetzt ausprobieren, werden Sie sehen, dass alles wie erwartet funktioniert.

> [!NOTE]
> Um ein weiteres Beispiel für die Verwendung von `tick()` zu sehen, besuchen Sie das [Svelte-Tutorial](https://learn.svelte.dev/tutorial/tick).

## Hinzufügen von Funktionalität zu HTML-Elementen mit der `use:action`-Direktive

Als nächstes möchten wir, dass der Name-`<input>` automatisch den gesamten Text bei Fokus auswählt. Außerdem möchten wir dies so entwickeln, dass es leicht wiederverwendbar ist und auf eine beliebige HTML-`<input>`- und in deklarativer Art und Weise angewendet werden kann. Diese Anforderung nutzen wir, um ein sehr mächtiges Feature zu zeigen, das Svelte uns bietet, um Funktionalität zu regulären HTML-Elementen hinzuzufügen: [Aktionen](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Input-Knotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Um diese Funktion immer dann aufzurufen, wenn der Knoten den Fokus erhält, benötigen wir einen Event-Listener dieser Art:

```js
node.addEventListener("focus", (event) => node.select());
```

Und um Speicherlecks zu vermeiden, sollten wir auch die Funktion [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufrufen, wenn der Knoten zerstört wird.

> [!NOTE]
> All dies ist nur Standard-WebAPI-Funktionalität; nichts davon ist spezifisch für Svelte.

Wir könnten all das in unserer `Todo`-Komponente erreichen, wann immer wir das `<input>` zum DOM hinzufügen oder entfernen, aber wir müssten sehr vorsichtig sein, um den Event-Listener hinzuzufügen, nachdem der Knoten zum DOM hinzugefügt wurde, und den Listener entfernen, bevor der Knoten aus dem DOM entfernt wird. Darüber hinaus wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Aktionen ins Spiel. Grundsätzlich lassen sie uns eine Funktion ausführen, wann immer ein Element zum DOM hinzugefügt wurde, sowie nachdem es aus dem DOM entfernt wurde.

In unserem sofortigen Anwendungsfall werden wir eine Funktion namens `selectOnFocus()` definieren, die einen Knoten als Parameter erhält. Die Funktion fügt diesem Knoten einen Event-Listener hinzu, sodass immer, wenn er den Fokus erhält, der Text ausgewählt wird. Dann wird sie ein Objekt mit einer `destroy`-Eigenschaft zurückgeben. Die `destroy`-Eigenschaft ist das, was Svelte nach dem Entfernen des Knotens aus dem DOM ausführen wird. Hier werden wir den Listener entfernen, um sicherzustellen, dass kein Speicherleck zurückbleibt.

1. Lassen Sie uns die Funktion `selectOnFocus()` erstellen. Fügen Sie das Folgende am Ende des `<script>`-Abschnitts von `Todo.svelte` hinzu:

   ```js
   function selectOnFocus(node) {
     if (node && typeof node.select === "function") {
       // make sure node is defined and has a select() method
       const onFocus = (event) => node.select(); // event handler
       node.addEventListener("focus", onFocus); // when node gets focus call onFocus()
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // this will be executed when the node is removed from the DOM
       };
     }
   }
   ```

2. Jetzt müssen wir dem `<input>` sagen, dass es diese Funktion mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action)-Direktive verwenden soll:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Direktive sagen wir Svelte, dass es diese Funktion ausführen soll, wobei der DOM-Knoten des `<input>` als Parameter übergeben wird, sobald die Komponente am DOM montiert ist. Es wird auch die Verantwortung übernehmen, die `destroy`-Funktion auszuführen, wenn die Komponente aus dem DOM entfernt wird. Mit der `use`-Direktive kümmert sich Svelte also um den Lebenszyklus der Komponente.

   In unserem Fall würde unser `<input>` so aussehen: Aktualisieren Sie das erste Label-Input-Paar der Komponente (innerhalb der Bearbeitungsvorlage) wie folgt:

   ```svelte
   <label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
   <input
     bind:value={name}
     bind:this={nameEl}
     use:selectOnFocus
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

3. Probieren Sie es aus. Gehen Sie zu Ihrer App, drücken Sie die _Bearbeiten_-Schaltfläche eines To-Dos und dann <kbd>Tab</kbd>, um den Fokus weg vom `<input>` zu verschieben. Klicken Sie jetzt auf das `<input>`, und Sie sehen, dass der gesamte Eingabetext ausgewählt ist.

### Die Aktion wiederverwendbar machen

Nun lässt uns diese Funktion richtig über Komponenten hinweg wiederverwendbar machen. `selectOnFocus()` ist nur eine Funktion ohne Abhängigkeiten von der `Todo.svelte`-Komponente, also können wir sie einfach in eine Datei extrahieren und von dort aus verwenden.

1. Erstellen Sie eine neue Datei `actions.js` im `src`-Ordner.
2. Geben Sie ihm den folgenden Inhalt:

   ```js
   export function selectOnFocus(node) {
     if (node && typeof node.select === "function") {
       // make sure node is defined and has a select() method
       const onFocus = (event) => node.select(); // event handler
       node.addEventListener("focus", onFocus); // when node gets focus call onFocus()
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // this will be executed when the node is removed from the DOM
       };
     }
   }
   ```

3. Importieren Sie es nun von innerhalb `Todo.svelte`; fügen Sie den folgenden Import direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die `selectOnFocus()`-Definition von `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwenden

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, lassen Sie uns sie in `NewTodo.svelte` verwenden.

1. Importieren Sie `selectOnFocus()` aus `actions.js` auch in dieser Datei, wie zuvor:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie die `use:selectOnFocus`-Direktive dem `<input>` hinzu, wie folgt:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     use:selectOnFocus
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

Mit wenigen Codezeilen können wir Funktionalität auf reguläre HTML-Elemente auf eine sehr wiederverwendbare und deklarative Weise hinzufügen. Es erfordert nur ein `import` und eine kurze Direktive wie `use:selectOnFocus`, das eindeutig ihren Zweck beschreibt. Und das können wir erreichen, ohne ein benutzerdefiniertes Wrapper-Element wie `TextInput`, `MyInput` oder ähnliches zu erstellen. Außerdem können Sie so viele `use:action`-Direktiven wie Sie möchten einem Element hinzufügen.

Ebenso mussten wir uns nicht mit `onMount()`, `onDestroy()` oder `tick()` herumschlagen — die `use`-Direktive kümmert sich für uns um den Komponentenlebenszyklus.

### Andere Verbesserungen der Aktionen

Im vorherigen Abschnitt, während wir mit den `Todo`-Komponenten arbeiteten, mussten wir uns mit `bind:this`, `tick()` und `async`-Funktionen auseinandersetzen, nur um unserem `<input>` den Fokus zu geben, sobald es dem DOM hinzugefügt wurde.

1. So können wir es stattdessen mit Aktionen implementieren:

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. Und dann in unserem Markup müssen wir nur eine weitere `use:`-Direktive hinzufügen:

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. Unsere `onEdit()`-Funktion kann jetzt viel einfacher sein:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
   }
   ```

Als letztes Beispiel bevor wir weitergehen, lassen Sie uns zu unserer `Todo.svelte`-Komponente zurückkehren und den Fokus auf die _Bearbeiten_-Schaltfläche legen, nachdem der Benutzer auf _Speichern_ oder _Abbrechen_ gedrückt hat.

Wir könnten versuchen, einfach unsere `focusOnInit`-Aktion erneut zu verwenden und `use:focusOnInit` auf die _Bearbeiten_-Schaltfläche hinzuzufügen. Aber wir würden einen subtilen Fehler einführen. Wenn Sie ein neues To-Do hinzufügen, wird der Fokus auf die _Bearbeiten_-Schaltfläche des kürzlich hinzugefügten To-Dos gelegt. Das liegt daran, dass die `focusOnInit`-Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen — wir möchten, dass die _Bearbeiten_-Schaltfläche erst dann den Fokus erhält, wenn der Benutzer auf _Speichern_ oder _Abbrechen_ gedrückt hat.

1. Gehen Sie also zurück zu Ihrer `Todo.svelte`-Datei.
2. Erstens erstellen wir eine Flagge namens `editButtonPressed` und initialisieren sie mit `false`. Fügen Sie diese direkt unter Ihren anderen Variablendefinitionen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als Nächstes werden wir die Funktionalität der _Bearbeiten_-Schaltfläche ändern, um diese Flagge zu speichern, und die Aktion dafür erstellen. Aktualisieren Sie die `onEdit()`-Funktion wie folgt:

   ```js
   function onEdit() {
     editButtonPressed = true; // user pressed the Edit button, focus will come back to the Edit button
     editing = true; // enter editing mode
   }
   ```

4. Fügen Sie darunter die folgende Definition für `focusEditButton()` hinzu:

   ```js
   const focusEditButton = (node) => editButtonPressed && node.focus();
   ```

5. Schließlich verwenden wir die `focusEditButton`-Aktion auf der _Bearbeiten_-Taste, wie folgt:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App nochmal aus. An diesem Punkt wird jedes Mal, wenn die _Bearbeiten_-Taste zum DOM hinzugefügt wird, die `focusEditButton`-Aktion ausgeführt, aber sie wird die Schaltfläche nur dann fokussieren, wenn das `editButtonPressed`-Flag auf `true` gesetzt ist.

> [!NOTE]
> Wir haben hier kaum die Oberfläche von Aktionen angerissen. Aktionen können auch reaktive Parameter haben, und Svelte lässt uns erkennen, wann einer dieser Parameter sich ändert. So können wir Funktionalität hinzufügen, die sich gut in das Svelte-Reaktivitätssystem integriert. Für eine detailliertere Einführung in Aktionen, überlegen Sie, sich das [Svelte-Interaktive-Tutorial](https://learn.svelte.dev/tutorial/actions) oder die [Svelte `use:action` Dokumentation](https://svelte.dev/docs/element-directives#use-action) anzusehen.

## Komponentenbindung: Exponieren von Komponentenmethoden und -variablen mit der `bind:this={component}`-Direktive

Es bleibt noch eine Barrierefreiheit zu beheben. Wenn der Benutzer die _Löschen_-Taste drückt, verschwindet der Fokus.

Die letzte Funktion, die wir in diesem Artikel betrachten werden, beinhaltet das Setzen des Fokus auf die Statusüberschrift, nachdem ein To-Do gelöscht wurde.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, also gibt es keinen klaren Kandidaten, der den Fokus erhält. Wir haben die Statusüberschrift gewählt, weil sie in der Nähe der To-Do-Liste ist, und es ist eine Möglichkeit, ein visuelles Feedback über das Entfernen der Aufgabe zu geben, sowie anzuzeigen, was Bildschirmlesernutzern passiert ist.

Zuerst werden wir die Statusüberschrift in ihre eigene Komponente auslagern.

1. Erstellen Sie eine neue Datei `components/TodosStatus.svelte`.
2. Geben Sie den folgenden Inhalt hinein:

   ```svelte
   <script>
     export let todos;

     $: totalTodos = todos.length;
     $: completedTodos = todos.filter((todo) => todo.completed).length;
   </script>

   <h2 id="list-heading">
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

3. Importieren Sie die Datei am Anfang von `Todos.svelte` und fügen Sie die folgende Import-Anweisung unter den anderen hinzu:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift in `Todos.svelte` durch einen Aufruf der `TodosStatus`-Komponente, indem Sie `todos` als Prop übergeben, wie folgt:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch ein wenig aufräumen, indem Sie die `totalTodos`- und `completedTodos`-Variablen von `Todos.svelte` entfernen. Entfernen Sie einfach die `$: totalTodos = …` und `$: completedTodos = …`-Zeilen, und entfernen Sie auch die Referenz zu `totalTodos`, wenn wir `newTodoId` berechnen und verwenden Sie stattdessen `todos.length`. Ersetzen Sie dazu den Block, der mit `let newTodoId` beginnt, durch dies:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet — wir haben gerade das letzte Stück des Markups in eine eigene Komponente ausgelagert.

Nun müssen wir eine Möglichkeit finden, dem `<h2>`-Statusetikett den Fokus zu geben, nachdem ein To-Do entfernt wurde.

Bisher haben wir gesкэен, wie Informationen über Props an eine Komponente gesendet werden können, und wie eine Komponente mit ihrem Elternteil kommunizieren kann, indem sie Ereignisse aussendet oder eine Zweiwege-Datenbindung verwendet. Die untergeordnete Komponente könnte eine Referenz zum `<h2>`-Knoten mit `bind:this={dom_node}` erhalten und nach außen hin mit einer Zweiwege-Datenbindung exponieren. Aber das würde die Komponentenverkapselung durchbrechen; das Setzen des Fokus darauf sollte ihre eigene Verantwortung sein.

Also müssen wir die `TodosStatus`-Komponente dazu bringen, eine Methode zu exponieren, die ihr Elternteil aufrufen kann, um ihr den Fokus zu geben. Es ist ein sehr gängiges Szenario, dass eine Komponente ein Verhalten oder Informationen an den Verbraucher exponieren muss; lassen Sie uns sehen, wie wir dies mit Svelte erreichen können.

Wir haben bereits gesehen, dass Svelte `export let varname = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Wenn Sie jedoch stattdessen `const`, `class` oder `function` exportieren, ist es außerhalb der Komponente schreibgeschützt. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props, und der Rest sind exportierte Werte:

```svelte
<script>
  export let bar = "optional default initial value"; // prop
  export let baz = undefined; // prop
  export let format = (n) => n.toFixed(2); // prop

  // these are readonly
  export const thisIs = "readonly"; // read-only export

  export function greet(name) {
    // read-only export
    alert(`Hello, ${name}!`);
  }

  export const greet = (name) => alert(`Hello, ${name}!`); // read-only export
</script>
```

Mit diesem im Kopf lassen Sie uns zu unserem Anwendungsfall zurückkehren. Wir werden eine Funktion namens `focus()` erstellen, die der `<h2>`-Überschrift den Fokus gibt. Dafür benötigen wir eine `headingEl`-Variable, um die Referenz auf den DOM-Knoten zu halten, und wir müssen sie mit `bind:this={headingEl}` an das `<h2>`-Element binden. Unsere Fokusmethode wird einfach `headingEl.focus()` ausführen.

1. Aktualisieren Sie den Inhalt von `TodosStatus.svelte` wie folgt:

   ```svelte
   <script>
     export let todos;

     $: totalTodos = todos.length;
     $: completedTodos = todos.filter((todo) => todo.completed).length;

     let headingEl;

     export function focus() {
       // shorter version: export const focus = () => headingEl.focus()
       headingEl.focus();
     }
   </script>

   <h2 id="list-heading" bind:this={headingEl} tabindex="-1">
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Beachten Sie, dass wir ein `tabindex`-Attribut zu `<h2>` hinzugefügt haben, um dem Element zu ermöglichen, den Fokus programmgesteuert zu erhalten.

   Wie wir zuvor gesehen haben, gibt uns die Verwendung der `bind:this={headingEl}`-Direktive eine Referenz auf den DOM-Knoten in der Variablen `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion zu exponieren, die der `<h2>`-Überschrift den Fokus gibt.

   Wie können wir auf diese exportierten Werte vom Eltern zugreifen? Genau wie Sie an DOM-Elemente mit der `bind:this={dom_node}`-Direktive binden können, können Sie auch an Komponenteninstanzen selbst mit `bind:this={component}` binden. Wenn Sie also `bind:this` auf einem HTML-Element verwenden, erhalten Sie eine Referenz auf den DOM-Knoten, und wenn Sie es auf einer Svelte-Komponente tun, erhalten Sie eine Referenz auf die Instanz dieser Komponente.

2. Um an die Instanz `TodosStatus` zu binden, erstellen wir zuerst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren `import`-Anweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Fügen Sie als Nächstes eine `bind:this={todosStatus}`-Direktive zum Aufruf hinzu, wie folgt:

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. Jetzt können wir die `exportierte focus()`-Methode von unserer `removeTodo()`-Funktion aus aufrufen:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
   }
   ```

5. Gehen Sie zurück zu Ihrer App. Jetzt, wenn Sie ein To-Do löschen, wird die Statusüberschrift fokussiert. Dies ist nützlich, um die Änderung der Anzahl der To-Dos hervorzuheben, sowohl für sehbehinderte Benutzer als auch für Benutzer von Bildschirmlesern.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir nicht einfach `TodosStatus.focus()` aufrufen? Möglicherweise haben Sie mehrere `TodosStatus`-Instanzen aktiv, daher benötigen Sie eine Möglichkeit, jede spezielle Instanz zu referenzieren. Deshalb müssen Sie eine Variable angeben, um jede bestimmte Instanz zu binden.

## Der Code so far

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Zustand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir alle erforderlichen Funktionen zu unserer App hinzugefügt, plus wir haben eine Reihe von Zugänglichkeits- und Benutzerfreundlichkeitsproblemen behandelt. Wir haben auch unsere App in handhabbare Komponenten aufgespalten, jede mit einer eindeutigen Verantwortung.

In der Zwischenzeit sahen wir einige fortgeschrittene Svelte-Techniken, wie:

- Umgang mit Reaktivitätsproblemen beim Aktualisieren von Objekten und Arrays
- Arbeiten mit DOM-Knoten unter Verwendung von `bind:this={dom_node}` (Bindung von DOM-Elementen)
- Verwenden der `onMount()`-Funktion des Komponentenlebenszyklus
- Erzwingen, dass Svelte ausständige Zustandsänderungen mit der `tick()`-Funktion löst
- Hinzufügen von Funktionalität zu HTML-Elementen auf eine wiederverwendbare und deklarative Weise mit der `use:action`-Direktive
- Zugriff auf Komponentenmethoden mit `bind:this={component}` (Bindung von Komponenten)

Im nächsten Artikel werden wir sehen, wie Stores verwendet werden, um die Kommunikation zwischen Komponenten zu erleichtern, und wie Animationen zu unseren Komponenten hinzugefügt werden.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}
