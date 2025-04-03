---
title: "Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir unserer To-do-Liste weitere Funktionen hinzugefügt und angefangen, unsere App in Komponenten zu organisieren. In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter in Komponenten unterteilen. Wir werden lernen, wie man mit Reaktivitätsproblemen im Zusammenhang mit der Aktualisierung von Objekten und Arrays umgeht. Um häufige Stolperfallen zu vermeiden, müssen wir uns etwas tiefer in Sveltes Reaktivitätssystem einarbeiten. Außerdem werden wir einige Probleme mit der Barrierefreiheit im Fokus lösen und noch viel mehr.

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
            >Terminal-/Kommandozeilenumgebung</a
          >haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie einige fortgeschrittene Svelte-Techniken kennen, um Reaktivitätsprobleme, Tastaturzugänglichkeitsprobleme im Zusammenhang mit dem Lebenszyklus von Komponenten und mehr zu lösen.
      </td>
    </tr>
  </tbody>
</table>

Wir werden uns auf einige Barrierefreiheitsprobleme im Zusammenhang mit dem Fokusmanagement konzentrieren. Dazu werden wir einige Techniken zur Zugriff auf DOM-Knoten und zur Ausführung von Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) nutzen. Wir werden auch sehen, wie man Ereignis-Listener für DOM-Elemente deklariert und bereinigt.

Wir müssen auch ein wenig über den Lebenszyklus von Komponenten lernen, um zu verstehen, wann diese DOM-Knoten im DOM montiert und demontiert werden und wie wir auf sie zugreifen können. Wir werden auch über die `action`-Direktive lernen, die es uns ermöglicht, die Funktionalität von HTML-Elementen in einer wiederverwendbaren und deklarativen Weise zu erweitern.

Schließlich werden wir noch ein wenig mehr über Komponenten lernen. Bisher haben wir gesehen, wie Komponenten Daten mithilfe von Props teilen und mit ihren Eltern durch Ereignisse und bidirektionale Datenbindung kommunizieren. Jetzt werden wir sehen, wie Komponenten auch Methoden und Variablen freigeben können.

Die folgenden neuen Komponenten werden im Laufe dieses Artikels entwickelt:

- `MoreActions`: Stellt die Schaltflächen _Check All_ und _Remove Completed_ dar und sendet die entsprechenden Ereignisse, die erforderlich sind, um deren Funktionalität zu behandeln.
- `NewTodo`: Zeigt das `<input>`-Feld und die _Add_-Schaltfläche zum Hinzufügen eines neuen To-dos an.
- `TodosStatus`: Zeigt die Überschrift „x von y Elementen abgeschlossen“ an.

## Code entlang mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Arbeit an der MoreActions-Komponente

Jetzt werden wir die Schaltflächen _Check All_ und _Remove Completed_ angehen. Erstellen wir eine Komponente, die für die Darstellung der Schaltflächen und das Senden der entsprechenden Ereignisse verantwortlich ist.

1. Erstellen Sie eine neue Datei `components/MoreActions.svelte`.
2. Wenn die erste Schaltfläche angeklickt wird, senden wir ein `checkAll`-Ereignis, um anzugeben, dass alle To-dos überprüft/nicht überprüft werden sollen. Wenn die zweite Schaltfläche angeklickt wird, senden wir ein `removeCompleted`-Ereignis, um anzugeben, dass alle abgeschlossenen To-dos entfernt werden sollen. Fügen Sie den folgenden Inhalt in Ihre `MoreActions.svelte`-Datei ein:

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

   Wir haben auch eine `completed`-Variable enthalten, um zwischen dem Überprüfen und Nicht-Überprüfen aller Aufgaben zu wechseln.

3. Zurück in `Todos.svelte` werden wir unsere `MoreActions`-Komponente importieren und zwei Funktionen erstellen, um die von der `MoreActions`-Komponente gesendeten Ereignisse zu behandeln.

   Fügen Sie die folgende Importanweisung unterhalb der vorhandenen hinzu:

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

5. Gehen Sie jetzt zum unteren Bereich des `Todos.svelte`-Markupabschnitts und ersetzen Sie das `<div class="btn-group">`-Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf der `MoreActions`-Komponente, so:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. OK, gehen wir zurück in die App und probieren es aus. Sie werden feststellen, dass die _Remove Completed_-Schaltfläche einwandfrei funktioniert, aber die _Check All_/_Uncheck All_-Schaltfläche einfach stillschweigend scheitert.

Um herauszufinden, was hier passiert, müssen wir uns etwas tiefer in die Reaktivität von Svelte einarbeiten.

## Reaktivitätsprobleme: Aktualisieren von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos`-Array von der `checkAllTodos()`-Funktion aus in die Konsole protokollieren.

1. Aktualisieren Sie Ihre bestehende `checkAllTodos()`-Funktion wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Gehen Sie zurück zu Ihrem Browser, öffnen Sie die Konsole der DevTools und klicken Sie mehrmals auf _Check All_/_Uncheck All_.

Sie werden bemerken, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie die Schaltfläche drücken (die `completed`-Eigenschaften der `todo`-Objekte wechseln zwischen `true` und `false`), aber Svelte weiß das nicht. Das bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr nützlich ist.

Um herauszufinden, warum dies passiert, müssen wir verstehen, wie die Reaktivität in Svelte beim Aktualisieren von Arrays und Objekten funktioniert.

Viele Web-Frameworks verwenden die Virtual-DOM-Technik, um die Seite zu aktualisieren. Grundsätzlich ist der Virtual DOM eine im Speicher befindliche Kopie der Inhalte der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "realen" DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht es dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen standardmäßig im Grunde genommen unseren gesamten JavaScript-Code bei jeder Änderung gegen diesen Virtual DOM aus und wenden verschiedene Methoden an, um teure Berechnungen zwischenzuspeichern und die Ausführung zu optimieren. Sie versuchen kaum zu verstehen, was unser JavaScript-Code tatsächlich tut.

Svelte verwendet keine Virtual-DOM-Darstellung. Stattdessen analysiert und interpretiert es unseren Code, erstellt einen Abhängigkeitsbaum und generiert dann den erforderlichen JavaScript-Code, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz erzeugt in der Regel optimalen JavaScript-Code mit minimalem Overhead, hat aber auch seine Einschränkungen.

Manchmal kann Svelte keine Änderungen an überwachten Variablen erkennen. Denken Sie daran: Um Svelte mitzuteilen, dass sich eine Variable geändert hat, müssen Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die man im Kopf behalten sollte, lautet: **Der Name der aktualisierten Variable muss auf der linken Seite der Zuweisung stehen.**

Beispiel: In dem folgenden Code:

```js
const foo = obj.foo;
foo.bar = "baz";
```

Svelte wird Verweise auf `obj.foo.bar` nicht aktualisieren, es sei denn, Sie folgen mit `obj = obj`. Das liegt daran, dass Svelte keine Objektverweise verfolgen kann, deshalb müssen wir ihm ausdrücklich mitteilen, dass sich `obj` durch eine Zuweisung geändert hat.

> [!NOTE]
> Wenn `foo` eine Top-Level-Variable ist, können Sie Svelte leicht mitteilen, dass `obj` jedes Mal aktualisiert werden soll, wenn sich `foo` ändert, mit der folgenden reaktiven Anweisung: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und jedes Mal, wenn es sich ändert, wird Svelte `obj = obj` ausführen.

In unserer `checkAllTodos()`-Funktion, wenn wir ausführen:

```js
todos.forEach((t) => (t.completed = completed));
```

wird Svelte `todos` nicht als geändert markieren, weil es nicht erkennt, dass wir unser `t`-Variable innerhalb der Methode `forEach()` aktualisieren und damit auch das `todos`-Array ändern. Und das macht Sinn, denn ansonsten müsste Svelte die Funktionsweise der Methode `forEach()` kennen; das Gleiche würde dann für beliebige Methoden gelten, die an ein beliebiges Objekt oder ein Array angehängt sind.

Es gibt jedoch verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle beinhalten die Zuweisung eines neuen Wertes zu der überwachten Variable.

Wie wir bereits gesehen haben, können wir einfach Svelte anweisen, die Variable mit einer Selbstzuweisung zu aktualisieren, so:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Dies wird das Problem lösen. Intern wird Svelte `todos` als geändert markieren und die anscheinend redundante Selbstzuweisung entfernen. Abgesehen davon, dass es seltsam aussieht, ist es eine völlig akzeptable Technik, und manchmal ist es der kürzeste Weg, es zu tun.

Wir könnten auch auf das `todos`-Array über den Index zugreifen, so:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen zu Eigenschaften von Arrays und Objekten — z. B. `obj.foo += 1` oder `array[i] = x` — wirken genauso wie Zuweisungen zu den Werten selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos`-Array geändert wird.

Eine andere Lösung besteht darin, dem `todos`-Array ein neues Array zuzuweisen, das eine Kopie aller To-dos mit der `completed`-Eigenschaft enthält, die entsprechend aktualisiert ist, so:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die Methode [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jedes To-dos mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) zurück und überschreibt entsprechend die Eigenschaft des `completed`-Werts. Diese Lösung hat den zusätzlichen Vorteil, dass ein neues Array mit neuen Objekten zurückgegeben wird und die ursprüngliche `todos`-Array-Änderung vollständig vermieden wird.

> [!NOTE]
> Svelte erlaubt es uns, verschiedene Optionen anzugeben, die beeinflussen, wie der Compiler arbeitet. Die Option `<svelte:options immutable={true}/>` teilt dem Compiler mit, dass Sie versprechen, keine Objekte zu ändern. Dadurch kann es weniger konservativ prüfen, ob sich Werte geändert haben, und einfacheren und performanteren Code generieren. Für weitere Informationen zu `<svelte:options>` schauen Sie in der [Svelte-Options-Dokumentation](https://svelte.dev/docs/special-elements#svelte-options) nach.

Alle diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Jede dieser Techniken ermöglicht es Svelte, zu erkennen, dass unser `todos`-Array geändert wurde.

**Wählen Sie eine aus und aktualisieren Sie Ihre `checkAllTodos()`-Funktion nach Bedarf. Jetzt sollten Sie in der Lage sein, alle Ihre To-dos auf einmal zu markieren und zu deaktivieren. Versuchen Sie es!**

## Vervollständigen unserer MoreActions-Komponente

Wir werden unserem Component ein Usability-Detail hinzufügen. Wir deaktivieren die Schaltflächen, wenn keine Aufgaben zu bearbeiten sind. Um dies zu erstellen, empfangen wir das `todos`-Array als Prop und setzen die Eigenschaft `disabled` jeder Schaltfläche entsprechend.

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

   Wir haben auch eine reaktive `completedTodos`-Variable deklariert, um die _Remove Completed_-Schaltfläche zu aktivieren oder zu deaktivieren.

2. Vergessen Sie nicht, das Prop innerhalb von `Todos.svelte`, wo die Komponente aufgerufen wird, an `MoreActions` zu übergeben:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Auf die Details fokussieren

Jetzt, da wir alle erforderlichen Funktionalitäten der App abgeschlossen haben, werden wir uns auf einige Barrierefreiheitsfunktionen konzentrieren, die die Benutzbarkeit unserer App für sowohl Tastaturbenutzer als auch Bildschirmleser verbessern.

Derzeit weist unsere App ein paar Probleme mit der Tastaturzugänglichkeit im Zusammenhang mit dem Fokusmanagement auf. Lassen Sie uns einen Blick auf diese Probleme werfen.

## Untersuchung von Tastaturzugänglichkeitsproblemen in unserer To-do-App

Derzeit wird die Fokus-Fluss unserer App für Tastaturnutzer nicht sehr vorhersagbar oder kohärent sein.

Wenn Sie auf das Eingabefeld oben in unserer App klicken, sehen Sie eine dicke, gestrichelte Umrandung um dieses Eingabefeld. Diese Umrandung ist Ihr visuelles Indiz dafür, dass der Browser derzeit auf dieses Element fokussiert ist.

Wenn Sie ein Mausbenutzer sind, haben Sie diesen visuellen Hinweis möglicherweise übersprungen. Aber wenn Sie ausschließlich mit der Tastatur arbeiten, ist es von entscheidender Bedeutung zu wissen, welches Steuerungselement den Fokus hat. Es zeigt uns, welche Steuerung unsere Tastatureingaben erhält.

Wenn Sie die <kbd>Tab</kbd>-Taste wiederholt drücken, sehen Sie den gestrichelten Fokus-Indikator zwischen allen fokussierbaren Elementen auf der Seite zyklisch wechseln. Wenn Sie den Fokus auf die _Edit_-Schaltfläche bewegen und drücken Sie die <kbd>Enter</kbd>-Taste, verschwindet plötzlich der Fokus, und Sie können nicht mehr sagen, welche Steuerung unsere Tasteneingaben erhalten wird.

Darüber hinaus passiert nichts, wenn Sie die <kbd>Escape</kbd>- oder <kbd>Enter</kbd>-Taste drücken. Und wenn Sie auf _Cancel_ oder _Save_ klicken, verschwindet der Fokus erneut. Für einen Benutzer, der mit der Tastatur arbeitet, kann dieses Verhalten bestenfalls verwirrend sein.

Wir möchten auch einige Usability-Funktionen hinzufügen, wie das Deaktivieren der _Save_-Schaltfläche, wenn erforderliche Felder leer sind, das Fokussieren bestimmter HTML-Elemente oder das automatische Auswählen von Inhalten, wenn ein Texteingabe-Feld den Fokus erhält.

Um all diese Funktionen zu implementieren, benötigen wir programmgesteuerten Zugriff auf DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir müssen auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um spezielle Aufgaben auszuführen, wenn die Steuerung den Fokus erhält.

Das Problem ist, dass alle diese DOM-Knoten dynamisch von Svelte zur Laufzeit erstellt werden. Daher müssen wir warten, bis sie erstellt und dem DOM hinzugefügt werden, um sie verwenden zu können. Dazu müssen wir etwas über den [Lebenszyklus der Komponente](https://learn.svelte.dev/tutorial/onmount) lernen, um zu verstehen, wann wir auf sie zugreifen können - mehr dazu später.

## Erstellung einer NewTodo-Komponente

Beginnen wir mit der Auslagerung unseres neuen To-do-Formulars in eine eigene Komponente. Mit dem Wissen, das wir bisher haben, können wir eine neue Komponenten-Datei erstellen und den Code so anpassen, dass ein `addTodo`-Ereignis gesendet wird, wobei der Name des neuen To-dos zusammen mit den zusätzlichen Details übergeben wird.

1. Erstellen Sie eine neue Datei `components/NewTodo.svelte`.
2. Fügen Sie die folgenden Inhalte hinein ein:

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

   Hier binden wir das `<input>` an die Variable `name` mit `bind:value={name}` und deaktivieren die _Add_-Schaltfläche, wenn das Feld leer ist (d.h. kein Textinhalt vorhanden) mit `disabled={!name}`. Wir kümmern uns auch um die <kbd>Escape</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}}`. Immer wenn die <kbd>Escape</kbd>-Taste gedrückt wird, führen wir `onCancel()` aus, das einfach die `name`-Variable bereinigt.

3. Jetzt müssen wir es innerhalb der `Todos`-Komponente `importieren` und nutzen und die `addTodo()`-Funktion aktualisieren, um den Namen des neuen To-dos zu erhalten.

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

   `addTodo()` erhält jetzt den Namen des neuen To-dos direkt, wir benötigen also nicht mehr die `newTodoName`-Variable, um ihm seinen Wert zu geben. Unsere `NewTodo`-Komponente kümmert sich darum.

   > [!NOTE]
   > Die `{ name }`-Syntax ist nur eine Abkürzung für `{ name: name }`. Diese stammt aus JavaScript selbst und hat mit Svelte nichts zu tun, außer dass sie etwas Inspiration für Sveltes eigene Kurzformen liefert.

5. Schließlich ersetzen wir den NewTodo-Formular-Markup durch einen Aufruf der `NewTodo`-Komponente:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten unter Verwendung der `bind:this={dom_node}`-Direktive

Jetzt möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente immer wieder den Fokus erhält, wenn die _Add_-Schaltfläche gedrückt wird. Dafür benötigen wir eine Referenz auf den DOM-Knoten des Eingabefelds. Svelte bietet eine Möglichkeit, dies mit der `bind:this={dom_node}`-Direktive zu tun. Wenn diese spezifiziert ist, weist Svelte bei der Montage des Komponenten und der Erstellung des DOM-Knotens der spezifizierten Variable eine Referenz auf den DOM-Knoten zu.

Wir erstellen eine `nameEl`-Variable und binden sie an das Eingabefeld mit `bind:this={nameEl}`. Dann innerhalb von `addTodo()`, nach dem Hinzufügen des neuen To-dos, rufen wir `nameEl.focus()` auf, um das `<input>`-Feld wieder zu fokussieren. Wir tun dasselbe, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt, in der `onCancel()`-Funktion.

Aktualisieren Sie die Inhalte von `NewTodo.svelte` wie folgt:

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

Probieren Sie die App aus: Geben Sie einen neuen To-do-Namen in das `<input>`-Feld ein, drücken Sie <kbd>tab</kbd>, um den Fokus auf die _Add_-Schaltfläche zu verschieben, und dann drücken Sie <kbd>Enter</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie das Eingabefeld den Fokus wiederherstellt.

### Autofokussierung unseres Eingabefelds

Die nächste Funktion, die wir unserer `NewTodo`-Komponente hinzufügen werden, ist eine `autofocus`-Prop, mit der wir angeben können, dass das `<input>`-Feld beim Laden der Seite fokussiert werden soll.

1. Unser erster Versuch sieht wie folgt aus: Lassen Sie uns versuchen, die `autofocus`-Prop hinzuzufügen und einfach `nameEl.focus()` aus dem `<script>`-Block aufzurufen. Aktualisieren Sie den ersten Abschnitt des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen) so:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // reference to the name input DOM node

     if (autofocus) nameEl.focus();
   ```

2. Gehen Sie jetzt zurück zur `Todos`-Komponente und übergeben Sie die `autofocus`-Prop in den `<NewTodo>`-Komponentenaufruf, so:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. Wenn Sie Ihre App jetzt ausprobieren, werden Sie sehen, dass die Seite jetzt leer ist und in Ihrer DevTools-Webkonsole ein Fehler angezeigt wird, der lautet: `TypeError: nameEl is undefined`.

Um zu verstehen, was hier passiert, sprechen wir noch etwas mehr über den erwähnten [Lebenszyklus der Komponenten](https://learn.svelte.dev/tutorial/onmount).

## Lebenszyklus der Komponenten und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode aus (d.h. den `<script>`-Abschnitt der Komponente). Aber zu diesem Zeitpunkt sind alle Knoten, die die Komponente darstellen, nicht an das DOM angefügt, sie existieren tatsächlich noch nicht einmal.

Wie können Sie also wissen, wann die Komponente bereits erstellt und im DOM montiert wurde? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt werdenund endet, wenn sie zerstört wird. Es gibt einige Funktionen, die es Ihnen ermöglichen, Code zu bestimmten Schlüsselmomenten während dieses Lebenszyklus zu laufen.

Die am häufigsten verwendete Funktion ist `onMount()`, mit der wir einen Callback ausführen können, sobald die Komponente im DOM montiert wurde. Lassen Sie es uns ausprobieren und sehen, was mit der Variable `nameEl` passiert.

1. Fügen Sie zu Beginn des `<script>`-Abschnitts von `NewTodo.svelte` folgende Zeile hinzu:

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

3. Entfernen Sie jetzt die Zeile `if (autofocus) nameEl.focus()`, um den Fehler zu vermeiden, den wir zuvor gesehen haben.
4. Die App wird jetzt wieder funktionieren, und Sie werden das folgende in Ihrer Konsole sehen:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen können, ist `nameEl` während der Initialisierung der Komponente undefiniert, was Sinn macht, da der `<input>`-Knoten noch nicht existiert. Sobald die Komponente montiert ist, weist Svelte die Referenz auf den `<input>`-DOM-Knoten der Variablen `nameEl` zu, dank der Direktive `bind:this={nameEl}`.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen `console.log()`/`onMount()`-Block, den Sie hinzugefügt haben, durch diesen:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie wieder in Ihre App, und Sie werden sehen, dass das `<input>`-Feld jetzt beim Laden der Seite fokussiert wird.

> [!NOTE]
> Sie können sich die anderen [Lebenszyklusfunktionen in den Svelte-Dokumenten](https://svelte.dev/docs/svelte) ansehen, und Sie können sie in Aktion im [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) sehen.

## Warten auf die Aktualisierung des DOM mit der `tick()`-Funktion

Jetzt werden wir uns um die Fokusmanagement-Details der `Todo`-Komponente kümmern. Zuerst möchten wir, dass das Bearbeitungs-`<input>` einer `Todo`-Komponente den Fokus erhält, wenn wir in den Bearbeitungsmodus durch Drücken der _Edit_-Schaltfläche gelangen. In gleicher Weise wie wir es zuvor gesehen haben, erstellen wir eine `nameEl`-Variable innerhalb von `Todo.svelte` und rufen `nameEl.focus()` auf, nachdem wir die `editing`-Variable auf `true` gesetzt haben.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablendeklaration direkt unter Ihren Bearbeitungs- und Namensdeklarationen hinzu:

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

3. Und binden Sie schließlich `nameEl` an das `<input>`-Feld, indem Sie es wie folgt aktualisieren:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. Wenn Sie jedoch die aktualisierte App ausprobieren, erhalten Sie einen Fehler in der Konsole, der etwa "TypeError: nameEl is undefined" lautet, wenn Sie die _Edit_-Schaltfläche eines To-dos drücken.

Also, was passiert hier? Beim Aktualisieren des Status einer Komponente in Svelte aktualisiert es das DOM nicht sofort. Stattdessen wartet es bis zur nächsten Mikroaufgabe, um zu sehen, ob es noch andere Änderungen gibt, die angewendet werden müssen, auch in anderen Komponenten. Dadurch wird unnötige Arbeit vermieden und der Browser kann Dinge effektiver bündeln.

In diesem Fall, wenn `editing` `false` ist, ist das Bearbeitungs-`<input>` nicht sichtbar, weil es nicht im DOM existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen unmittelbar danach, auf die Variable `nameEl` zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hier ist, dass Svelte das DOM noch nicht aktualisiert hat.

Eine Möglichkeit, dieses Problem zu lösen, besteht darin, [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) zu verwenden, um den Aufruf von `nameEl.focus()` bis zur nächsten Ereignisschleife zu verzögern und Svelte die Möglichkeit zu geben, das DOM zu aktualisieren.

Versuchen Sie das jetzt:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, aber sie ist eher unelegant. Svelte bietet eine bessere Möglichkeit, mit diesen Fällen umzugehen. Die [`tick()`-Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Versprechen zurück, das aufgelöst wird, sobald alle ausstehenden Statusänderungen am DOM angewendet wurden (oder sofort, wenn keine ausstehenden Statusänderungen vorliegen). Lassen Sie es uns jetzt ausprobieren.

1. Importieren Sie zunächst `tick` am Anfang des `<script>`-Abschnitts neben Ihrem bestehenden Import:

   ```js
   import { tick } from "svelte";
   ```

2. Als Nächstes rufen Sie `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) aus einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf; aktualisieren Sie `onEdit()` so:

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

Als nächstes möchten wir, dass das Namens-`<input>` beim Fokussieren automatisch den gesamten Text auswählt. Darüber hinaus möchten wir dies auf eine Weise entwickeln, die es ermöglicht, dass es leicht auf jedes HTML-`<input>` wiederverwendet wird und auf eine deklarative Weise angewendet wird. Wir werden diese Anforderung als Entschuldigung nutzen, um eine sehr leistungsstarke Funktion zu zeigen, die Svelte uns bietet, um Funktionalität zu normalen HTML-Elementen hinzuzufügen: [Aktionen](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Eingabeknotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Um diese Funktion aufzurufen, wann immer der Knoten fokussiert wird, brauchen wir einen Ereignis-Listener in etwa so:

```js
node.addEventListener("focus", (event) => node.select());
```

Und um Speicherlecks zu vermeiden, sollten wir auch die Funktion [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufrufen, wenn der Knoten entfernt wird.

> [!NOTE]
> Dies alles ist nur standardmäßige WebAPI-Funktionalität; nichts hier ist spezifisch für Svelte.

Wir könnten all dies in unserer `Todo`-Komponente erreichen, wann immer wir das `<input>` zum DOM hinzufügen oder daraus entfernen, aber wir müssten sehr sorgfältig vorgehen, um den Ereignis-Listener hinzuzufügen, nachdem der Knoten dem DOM hinzugefügt wurde, und den Listener zu entfernen, bevor der Knoten aus dem DOM entfernt wird. Darüber hinaus wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Aktionen ins Spiel. Im Grunde lassen sie uns eine Funktion ausführen, wann immer ein Element dem DOM hinzugefügt und danach wieder entfernt wird.

In unserem unmittelbaren Anwendungsfall werden wir eine Funktion namens `selectOnFocus()` definieren, die einen Knoten als Parameter erhält. Die Funktion wird einen Ereignis-Listener zu diesem Knoten hinzufügen, sodass der Text jedes Mal, wenn der Knoten fokussiert wird, ausgewählt wird. Dann wird sie ein Objekt mit einer `destroy`-Eigenschaft zurückgeben. Die `destroy`-Eigenschaft ist das, was Svelte nach Entfernen des Knotens aus dem DOM ausführen wird. Hier werden wir den Listener entfernen, um sicherzustellen, dass wir kein Speicherleck hinterlassen.

1. Erstellen wir die Funktion `selectOnFocus()`. Fügen Sie das Folgende am Ende des `<script>`-Abschnitts von `Todo.svelte` hinzu:

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

2. Jetzt müssen wir dem `<input>` sagen, dass es diese Funktion mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action)-Direktive nutzen soll:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Direktive sagen wir Svelte, diese Funktion auszuführen, wobei der DOM-Knoten des `<input>` als Parameter übergeben wird, sobald die Komponente im DOM montiert ist. Es wird auch für die Ausführung der `destroy`-Funktion verantwortlich sein, wenn die Komponente aus dem DOM entfernt wird. Mit der `use`-Direktive kümmert sich Svelte also um den Lebenszyklus der Komponente für uns.

   In unserem Fall würde unser `<input>` am Ende folgendermaßen aussehen: Aktualisieren Sie das erste Label/Input-Paar in der Komponente (innerhalb der Bearbeitungsvorlage) wie folgt:

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

3. Probieren Sie es aus. Gehen Sie zu Ihrer App, drücken Sie die _Edit_-Schaltfläche eines To-dos und dann <kbd>Tab</kbd>, um den Fokus vom `<input>` zu entfernen. Klicken Sie jetzt auf das `<input>`, und Sie werden sehen, dass der gesamte Eingabetext ausgewählt wird.

### Die Aktion wiederverwendbar machen

Lassen Sie uns nun diese Funktion wirklich wiederverwendbar über mehrere Komponenten hinweg machen. `selectOnFocus()` ist einfach eine Funktion ohne Abhängigkeit von der `Todo.svelte`-Komponente, deshalb können wir sie einfach in eine Datei extrahieren und von dort aus verwenden.

1. Erstellen Sie eine neue Datei `actions.js` im `src`-Ordner.
2. Geben Sie ihr den folgenden Inhalt:

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

3. Importieren Sie es nun von innerhalb `Todo.svelte`; fügen Sie die folgende Importanweisung direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die Definition von `selectOnFocus()` aus `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwenden

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, lassen Sie uns sie in `NewTodo.svelte` verwenden.

1. Importieren Sie `selectOnFocus()` von `actions.js` auch in dieser Datei, wie zuvor:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie die `use:selectOnFocus`-Direktive dem `<input>` hinzu, so:

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

Mit nur wenigen Zeilen Code können wir Funktionalität auf reguläre HTML-Elemente auf eine sehr wiederverwendbare und deklarative Weise hinzufügen. Es erfordert nur einen `import` und eine kurze Direktive wie `use:selectOnFocus`, die ihren Zweck klar beschreibt. Und wir können dies ohne die Notwendigkeit erreichen, ein benutzerdefiniertes Wrapper-Element wie `TextInput`, `MyInput` oder ähnliches zu erstellen. Darüber hinaus können Sie einem Element beliebig viele `use:action`-Direktiven hinzufügen.

Ebenso mussten wir uns nicht mit `onMount()`, `onDestroy()` oder `tick()` herumärgern – die `use`-Direktive übernimmt für uns den Lebenszyklus der Komponente.

### Weitere Verbesserungen von Aktionen

Im vorherigen Abschnitt, während der Arbeit mit den `Todo`-Komponenten, mussten wir uns mit `bind:this`, `tick()` und `async`-Funktionen herumschlagen, nur um unser `<input>` sofort zu fokussieren, sobald es zum DOM hinzugefügt wurde.

1. Dies ist, wie wir es stattdessen mit Aktionen implementieren können:

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

Als letztes Beispiel, bevor wir weitermachen, gehen wir zurück zu unserer `Todo.svelte`-Komponente und geben der _Edit_-Schaltfläche den Fokus, nachdem der Benutzer _Save_ oder _Cancel_ gedrückt hat.

Wir könnten versuchen, einfach unsere `focusOnInit`-Aktion erneut zu verwenden, indem wir der _Edit_-Schaltfläche `use:focusOnInit` hinzufügen. Aber wir würden einen subtilen Fehler einführen. Wenn Sie ein neues To-do hinzufügen, wird der Fokus auf die _Edit_-Schaltfläche des kürzlich hinzugefügten To-dos gelegt. Das liegt daran, dass die `focusOnInit`-Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen – wir möchten, dass die _Edit_-Schaltfläche nur dann den Fokus erhält, wenn der Benutzer _Save_ oder _Cancel_ gedrückt hat.

1. Gehen Sie also zurück in Ihre `Todo.svelte`-Datei.
2. Zunächst erstellen wir ein Flag namens `editButtonPressed` und initialisieren es mit `false`. Fügen Sie dies direkt unter Ihren anderen Variablendefinitionen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als Nächstes modifizieren wir die Funktionalität der _Edit_-Schaltfläche, um dieses Flag zu speichern, und erstellen die Aktion dafür. Aktualisieren Sie die `onEdit()`-Funktion so:

   ```js
   function onEdit() {
     editButtonPressed = true; // user pressed the Edit button, focus will come back to the Edit button
     editing = true; // enter editing mode
   }
   ```

4. Darunter fügen Sie die folgende Definition für `focusEditButton()` hinzu:

   ```js
   const focusEditButton = (node) => editButtonPressed && node.focus();
   ```

5. Schließlich `use`-die `focusEditButton`-Aktion in der _Edit_-Schaltfläche, so:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App erneut aus. An diesem Punkt wird jede Neuangelegte `_Edit_-Schaltfläche, die zum DOM hinzugefügt wird, die`focusEditButton`-Aktion ausgeführt, aber sie wird nur dann den Fokus auf die Schaltfläche legen, wenn das `editButtonPressed`-Flag `true` ist.

> [!NOTE]
> Wir haben hier nur an der Oberfläche von Aktionen gekratzt. Aktionen können auch reaktive Parameter haben, und Svelte ermöglicht es uns, zu erkennen, wann sich einer dieser Parameter ändert. So können wir Funktionalität hinzufügen, die sich nahtlos in das reaktive System von Svelte integriert. Für eine ausführlichere Einführung in Aktionen sollten Sie das [Svelte-Interaktive-Tutorial](https://learn.svelte.dev/tutorial/actions) oder die [Svelte-`use:action`-Dokumentation](https://svelte.dev/docs/element-directives#use-action) in Betracht ziehen.

## Komponentenbindung: Exposing von Komponentenmethoden und -variablen mit der `bind:this={component}`-Direktive

Es bleibt noch eine Barrierefreiheits-Ärgerlichkeit. Wenn der Benutzer die _Delete_-Schaltfläche drückt, verschwindet der Fokus.

Das letzte Feature, das wir in diesem Artikel betrachten werden, besteht darin, den Fokus nach dem Löschen eines To-dos auf die Statusüberschrift zu setzen.

Warum die Statusüberschrift? In diesem Fall ist das Element, das den Fokus hatte, gelöscht worden, sodass es keinen klaren Kandidaten für den Empfang des Fokus gibt. Wir haben uns für die Statusüberschrift entschieden, weil sie in der Nähe der Liste der To-dos liegt und sie visuelles Feedback über die Entfernung der Aufgabe gibt, sowie für Bildschirmleser angibt, was passiert ist.

Zuerst extrahieren wir die Statusüberschrift in ihre eigene Komponente.

1. Erstellen Sie eine neue Datei `components/TodosStatus.svelte`.
2. Fügen Sie ihr die folgenden Inhalte hinzu:

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

3. Importieren Sie die Datei zu Beginn von `Todos.svelte`, indem Sie die folgende `import`-Anweisung unter den anderen hinzufügen:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift in `Todos.svelte` durch einen Aufruf der `TodosStatus`-Komponente und übergeben Sie `todos` als Prop, so:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch etwas aufräumen, indem Sie die Variablen `totalTodos` und `completedTodos` aus `Todos.svelte`entfernen. Lassen Sie einfach die Zeilen `$: totalTodos = …` und `$: completedTodos = …` weg, und entfernen Sie auch die Referenz zu `totalTodos`, wenn wir `newTodoId` berechnen, und verwenden Sie stattdessen `todos.length`. Um dies zu tun, ersetzen Sie den Block, der mit `let newTodoId` beginnt, durch diesen:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet - wir haben nur das letzte Stück Markup in seine eigene Komponente extrahiert.

Jetzt müssen wir einen Weg finden, der `<h2>`-Statusüberschrift den Fokus zu geben, nachdem ein To-do entfernt wurde.

Soweit haben wir gesehen, wie man Informationen an eine Komponente über Props sendet, und wie eine Komponente mit ihrem Elternteil durch Ereignisse oder bidirektionale Datenbindung kommunizieren kann. Die untergeordnete Komponente könnte mit der Verwendung von `bind:this={dom_node}` eine Referenz auf den `<h2>`-Knoten erhalten und sie an das Äußere durch bidirektionale Datenbindung weitergeben. Aber damit würden wir die Kapselung der Komponente durchbrechen; das Setzen des Fokus sollte ihre eigene Verantwortung sein.

Also brauchen wir, dass die `TodosStatus`-Komponente eine Methode zur Verfügung stellt, die ihr Elternteil aufrufen kann, um den Fokus darauf zu setzen. Ein sehr häufiges Szenario ist, dass eine Komponente ein Verhalten oder Informationen an den Verbraucher offen legen muss; lassen Sie uns sehen, wie man dies mit Svelte erreichen kann.

Wir haben bereits gesehen, dass Svelte `export let varname = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Aber wenn Sie anstelle von `let` eine `const`, `class` oder `function` exportieren, ist es von außen schreibgeschützt. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props, und der Rest sind exportierte Werte:

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

Mit diesem Wissen, zurück zu unserem Anwendungsfall. Wir erstellen eine Funktion namens `focus()`, die der `<h2>`-Überschrift den Fokus gibt. Dafür benötigen wir eine `headingEl`-Variable zur Speicherung der Referenz auf den DOM-Knoten und werden sie mit `bind:this={headingEl}` an das `<h2>`-Element binden. Unsere Fokusmethode wird einfach `headingEl.focus()` ausführen.

1. Aktualisieren Sie die Inhalte von `TodosStatus.svelte` so:

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

   Beachten Sie, dass wir ein `tabindex`-Attribut an das `<h2>` hinzugefügt haben, um dem Element zu erlauben, den Fokus programmatisch zu erhalten.

   Wie bereits gesehen, gibt uns die Verwendung der `bind:this={headingEl}`-Direktive eine Referenz auf den DOM-Knoten in der Variable `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion bereitzustellen, die der `<h2>`-Überschrift den Fokus gibt.

   Wie können wir auf diese exportierten Werte vom Elternteil aus zugreifen? Genauso wie Sie DOM-Elemente mit der `bind:this={dom_node}`-Direktive binden können, können Sie auch Component-Instanzen selbst mit `bind:this={component}` binden. Wenn Sie `bind:this` auf einem HTML-Element verwenden, erhalten Sie eine Referenz auf den DOM-Knoten, und wenn Sie es auf einer Svelte-Komponente anwenden, erhalten Sie eine Referenz auf die Instanz dieser Komponente.

2. Um also die Instanz von `TodosStatus` zu binden, erstellen wir zuerst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren `import`-Anweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Fügen Sie als Nächstes eine `bind:this={todosStatus}`-Direktive hinzu, wie folgt:

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. Jetzt können wir die exportierte `focus()`-Methode aus unserer `removeTodo()`-Funktion aufrufen:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
   }
   ```

5. Gehen Sie zurück in Ihre App. Wenn Sie jetzt ein beliebiges To-do löschen, wird die Statusüberschrift fokussiert. Dies ist nützlich, um die Änderung der Anzahl von To-dos sowohl den sehenden Benutzern als auch den Benutzern von Bildschirmlesern hervorzuheben.

> [!NOTE]
> Vielleicht fragen Sie sich, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir nicht einfach `TodosStatus.focus()` aufrufen? Sie könnten über mehrere aktive `TodosStatus`-Instanzen verfügen, daher benötigen Sie eine Möglichkeit, auf jede spezifische Instanz zu verweisen. Deshalb müssen Sie eine Variable angeben, um jede spezifische Instanz zu binden.

## Der Code bisher

### Git

Um den Zustand des Codes zum Ende dieses Artikels zu sehen, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Codezustand in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir alle erforderlichen Funktionalitäten unserer App abgeschlossen und einige Barrierefreiheits- und Benutzbarkeitsprobleme gelöst. Wir haben auch unsere App in handliche Komponenten aufgeteilt, von denen jede eine einzigartige Verantwortung hat.

Zwischendurch haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie:

- Das Umgang mit Reaktivitätsproblemen beim Aktualisieren von Objekten und Arrays
- Arbeiten mit DOM-Knoten mit `bind:this={dom_node}` (Binden von DOM-Elementen)
- Verwendung der `onMount()`-Funktion des Komponenten-Lebenszyklus
- Erzwingen, dass Svelte ausstehende Statusänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionalität zu HTML-Elementen auf eine wiederverwendbare und deklarative Weise mit der `use:action`-Direktive
- Zugriff auf Komponentenmethoden mit `bind:this={component}` (Binden von Komponenten)

Im nächsten Artikel sehen wir, wie man Stores verwendet, um zwischen Komponenten zu kommunizieren, und wie man Animationen zu unseren Komponenten hinzufügt.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}
