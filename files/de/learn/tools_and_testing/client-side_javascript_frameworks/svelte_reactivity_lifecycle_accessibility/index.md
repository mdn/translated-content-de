---
title: "Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir unserer To-Do-Liste weitere Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel fügen wir die letzten Funktionen der App hinzu und unterteilen sie weiter in Komponenten. Wir lernen, wie man mit Reaktivitätsproblemen umgeht, die mit der Aktualisierung von Objekten und Arrays zusammenhängen. Um häufige Fallstricke zu vermeiden, müssen wir tiefer in Sveltes Reaktivitätssystem eintauchen. Außerdem werfen wir einen Blick auf die Lösung einiger Fokusprobleme im Bereich der Barrierefreiheit und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen vertraut zu sein und
          Kenntnis über den
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeilen</a
          > zu haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen einiger fortgeschrittener Svelte-Techniken zur Lösung von Reaktivitätsproblemen,
        Problemen der Tastaturbarrierefreiheit im Zusammenhang mit dem Komponentenlebenszyklus und mehr.
      </td>
    </tr>
  </tbody>
</table>

Wir konzentrieren uns auf einige Zugänglichkeitsprobleme im Zusammenhang mit dem Fokusmanagement. Dazu nutzen wir Techniken, um auf DOM-Knoten zuzugreifen und Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir werden auch sehen, wie man Ereignislistener bei DOM-Elementen deklarieren und aufräumen kann.

Wir müssen auch etwas über den Lebenszyklus von Komponenten lernen, um zu verstehen, wann diese DOM-Knoten im DOM eingebunden und entfernt werden und wie wir auf sie zugreifen können. Wir erfahren auch etwas über die `action`-Direktive, die es uns ermöglicht, die Funktionalität von HTML-Elementen auf wiederverwendbare und deklarative Weise zu erweitern.

Schließlich lernen wir mehr über Komponenten. Bisher haben wir gesehen, wie Komponenten Daten mithilfe von Props teilen und mit ihren Eltern durch Ereignisse und bidirektionale Datenbindung kommunizieren können. Jetzt sehen wir, wie Komponenten auch Methoden und Variablen bereitstellen können.

Die folgenden neuen Komponenten werden im Verlauf dieses Artikels entwickelt:

- `MoreActions`: Zeigt die Schaltflächen _Check All_ und _Remove Completed_ an und gibt die entsprechenden Ereignisse aus, die zur Handhabung ihrer Funktionalität erforderlich sind.
- `NewTodo`: Zeigt das `<input>`-Feld und die _Add_-Schaltfläche zum Hinzufügen eines neuen To-Dos an.
- `TodosStatus`: Zeigt die Überschrift "x von y Elementen abgeschlossen" an.

## Code mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Dann, um den aktuellen Zustand der App zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns mithilfe des REPL zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Arbeiten an der MoreActions-Komponente

Nun beschäftigen wir uns mit den Schaltflächen _Check All_ und _Remove Completed_. Erstellen wir eine Komponente, die für die Anzeige der Schaltflächen verantwortlich ist und die entsprechenden Ereignisse auslöst.

1. Erstellen Sie eine neue Datei, `components/MoreActions.svelte`.
2. Wenn die erste Schaltfläche geklickt wird, lösen wir ein `checkAll`-Ereignis aus, um anzuzeigen, dass alle To-Dos überprüft/nicht überprüft werden sollten. Wenn die zweite Schaltfläche geklickt wird, lösen wir ein `removeCompleted`-Ereignis aus, um anzuzeigen, dass alle abgeschlossenen To-Dos entfernt werden sollen. Geben Sie den folgenden Inhalt in Ihre `MoreActions.svelte`-Datei ein:

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

   Wir haben auch eine `completed`-Variable hinzugefügt, um zwischen dem Markieren und Abwählen aller Aufgaben zu wechseln.

3. Zurück in `Todos.svelte` importieren wir unsere `MoreActions`-Komponente und erstellen zwei Funktionen, um die von der `MoreActions`-Komponente abgegebenen Ereignisse zu behandeln.

   Fügen Sie die folgende Importanweisung unter den vorhandenen hinzu:

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

5. Gehen Sie nun zum unteren Teil des `Todos.svelte`-Markupabschnitts und ersetzen Sie das `<div class="btn-group">`-Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf der `MoreActions`-Komponente, wie folgt:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. OK, lassen Sie uns zurück in die App gehen und es ausprobieren. Sie werden feststellen, dass die Schaltfläche _Remove Completed_ einwandfrei funktioniert, aber die Schaltfläche _Check All_/_Uncheck All_ stillschweigend fehlschlägt.

Um herauszufinden, was hier passiert, müssen wir ein wenig tiefer in die Svelte-Reaktivität eintauchen.

## Reaktivitätsprobleme: Aktualisierung von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos`-Array aus der `checkAllTodos()`-Funktion in der Konsole protokollieren.

1. Aktualisieren Sie Ihre vorhandene `checkAllTodos()`-Funktion auf die folgende:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Gehen Sie zurück zu Ihrem Browser, öffnen Sie Ihre DevTools-Konsole und klicken Sie einige Male auf _Check All_/_Uncheck All_.

Sie werden feststellen, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie die Schaltfläche drücken (die `completed`-Eigenschaften der `todo`-Objekte werden zwischen `true` und `false` umgeschaltet), aber Svelte ist sich dessen nicht bewusst. Das bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr nützlich sein wird.

Um herauszufinden, warum das so passiert, müssen wir verstehen, wie die Reaktivität in Svelte funktioniert, wenn Arrays und Objekte aktualisiert werden.

Viele Web-Frameworks verwenden die Technik des virtuellen DOMs, um die Seite zu aktualisieren. Im Wesentlichen ist das virtuelle DOM eine In-Memory-Kopie des Inhalts der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "echten" DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht es dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen standardmäßig im Wesentlichen zum virtuellen DOM alle JavaScript-Anwendungen bei jeder Änderung aus und wenden verschiedene Methoden an, um teure Berechnungen zu cachen und die Ausführung zu optimieren. Sie bemühen sich wenig bis gar nicht, zu verstehen, was unser JavaScript-Code tut.

Svelte verwendet keine virtuelle DOM-Darstellung. Stattdessen analysiert und analysiert es unseren Code, erstellt einen Abhängigkeitsbaum und erzeugt dann das erforderliche JavaScript, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz erzeugt normalerweise optimales JavaScript mit minimalem Overhead, hat jedoch auch seine Begrenzungen.

Manchmal kann Svelte Änderungen an beobachteten Variablen nicht erkennen. Denken Sie daran, dass Sie Svelte sagen müssen, dass sich eine Variable geändert hat, indem Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die im Kopf behalten werden kann, lautet: **Der Name der aktualisierten Variable muss auf der linken Seite der Zuweisung erscheinen.**

Beispielsweise wird im folgenden Codeausschnitt:

```js
const foo = obj.foo;
foo.bar = "baz";
```

Svelte wird Verweise auf `obj.foo.bar` nicht aktualisieren, es sei denn, Sie folgen ihm mit `obj = obj`. Das liegt daran, dass Svelte keine Objektreferenzen nachverfolgen kann, daher müssen wir es ausdrücklich darauf hinweisen, dass sich `obj` durch Ausgeben einer Zuweisung geändert hat.

> [!NOTE]
> Wenn `foo` eine Top-Level-Variable ist, können Sie Svelte ganz einfach anweisen, `obj` jedes Mal, wenn `foo` geändert wird, mit der folgenden reaktiven Anweisung zu aktualisieren: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und wann immer es sich ändert, wird Svelte `obj = obj` ausführen.

In unserer `checkAllTodos()`-Funktion wird, wenn wir ausführen:

```js
todos.forEach((t) => (t.completed = completed));
```

wird Svelte `todos` nicht als geändert markieren, da es nicht weiß, dass wir beim Aktualisieren unserer `t`-Variable innerhalb der `forEach()`-Methode auch das `todos`-Array ändern. Und das macht Sinn, denn ansonsten wüsste Svelte über die inneren Funktionsweisen der `forEach()`-Methode Bescheid; das Gleiche würde dann für jede angefügte Methode an ein Objekt oder ein Array gelten.

Es gibt jedoch verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle beinhalten die Zuordnung eines neuen Wertes zur beobachteten Variable.

Wie wir bereits gesehen haben, könnten wir Svelte einfach anweisen, die Variable mit einer Selbstzuweisung zu aktualisieren, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Das wird das Problem lösen. Intern wird Svelte `todos` als geändert markieren und die scheinbar redundante Selbstzuweisung entfernen. Abgesehen davon, dass es seltsam aussieht, ist es durchaus in Ordnung, diese Technik zu verwenden, und manchmal ist es die prägnanteste Möglichkeit, es zu tun.

Wir könnten auch auf das `todos`-Array anhand von Indizes zugreifen, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen zu Eigenschaften von Arrays und Objekten – z. B. `obj.foo += 1` oder `array[i] = x` – funktionieren genauso wie die Zuweisungen zu den Werten selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos`-Array geändert wird.

Eine andere Lösung besteht darin, dem `todos`-Array ein neues Array zuzuweisen, das eine Kopie aller To-Dos mit der entsprechend aktualisierten `completed`-Eigenschaft enthält, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die Methode [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jedes To-Dos mithilfe der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) zurück und überschreibt die Eigenschaft des `completed`-Wertes entsprechend. Diese Lösung hat den zusätzlichen Vorteil, dass ein neues Array mit neuen Objekten zurückgegeben wird und die ursprüngliche `todos`-Array nicht verändert wird.

> [!NOTE]
> Svelte ermöglicht es uns, verschiedene Optionen anzugeben, die beeinflussen, wie der Compiler arbeitet. Die Option `<svelte:options immutable={true}/>` teilt dem Compiler mit, dass Sie versprechen, keine Objekte zu mutieren. Dies ermöglicht es ihm, weniger konservativ in Bezug auf die Überprüfung, ob sich Werte geändert haben, zu sein und einfacheren und leistungsfähigeren Code zu erzeugen. Weitere Informationen zu `<svelte:options>` finden Sie in der [Svelte-Options-Dokumentation](https://svelte.dev/docs/special-elements#svelte-options).

All diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite des Gleichung steht. Jede dieser Techniken ermöglicht es Svelte, zu bemerken, dass unser `todos`-Array geändert wurde.

**Wählen Sie eine aus und aktualisieren Sie Ihre `checkAllTodos()`-Funktion entsprechend. Jetzt sollten Sie in der Lage sein, alle Ihre To-Dos auf einmal zu markieren und erneut abzuwählen. Probieren Sie es aus!**

## Abschluss unserer MoreActions-Komponente

Wir werden unserer Komponente noch ein usability Detail hinzufügen. Wir deaktivieren die Schaltflächen, wenn keine zu verarbeitenden Aufgaben existieren. Dafür werden wir das `todos`-Array als Prop empfangen und die `disabled`-Eigenschaft jeder Schaltfläche entsprechend setzen.

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

   Wir haben auch eine reaktive `completedTodos`-Variable deklariert, um die Schaltfläche _Remove Completed_ zu aktivieren oder deaktivieren.

2. Vergessen Sie nicht, das Prop von innen an `MoreActions` in `Todos.svelte` zu übergeben, wo die Komponente aufgerufen wird:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Der Fokussierung auf Details

Nun, da wir alle erforderlichen Funktionalitäten der App abgeschlossen haben, konzentrieren wir uns auf einige Barrierefreiheitsfunktionen, die die Benutzerfreundlichkeit unserer App sowohl für reine Tastatur- als auch für Bildschirmlesegerätenutzer verbessern.

In ihrem aktuellen Stand hat unsere App ein paar Probleme mit der Tastaturbarrierefreiheit im Zusammenhang mit dem Fokusmanagement. Lassen Sie uns diese Probleme anschauen.

## Erforschen von Problemen mit der Tastaturbarrierefreiheit in unserer To-Do-App

Derzeit werden Tastaturnutzer feststellen, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder kohärent ist.

Wenn Sie auf das Eingabefeld am oberen Rand der App klicken, sehen Sie einen dicken, gestrichelten Umriss um dieses Eingabefeld. Dieser Umriss ist Ihr visuelles Indiz, dass der Browser derzeit auf dieses Element fokussiert.

Wenn Sie ein Mausnutzer sind, haben Sie diesen visuellen Hinweis möglicherweise übersprungen. Wenn Sie jedoch ausschließlich mit der Tastatur arbeiten, ist es von entscheidender Bedeutung, zu wissen, welches Steuerelement den Fokus hat. Es zeigt an, welches Steuerelement Ihre Tastenanschläge erhält.

Wenn Sie die <kbd>Tab</kbd>-Taste wiederholt drücken, sehen Sie den gestrichelten Fokusindikator zwischen allen fokussierbaren Elementen auf der Seite wechseln. Wenn Sie den Fokus auf die _Edit_-Schaltfläche bewegen und <kbd>Enter</kbd> drücken, verschwindet plötzlich der Fokus, und Sie können nicht mehr erkennen, welches Steuerelement Ihre Tastenanschläge erhalten wird.

Außerdem passiert nichts, wenn Sie die <kbd>Escape</kbd>- oder <kbd>Enter</kbd>-Taste drücken. Und wenn Sie auf _Cancel_ oder _Save_ klicken, verschwindet der Fokus wieder. Für einen Benutzer, der mit der Tastatur arbeitet, wird dieses Verhalten bestenfalls verwirrend sein.

Wir möchten auch einige Usability-Funktionen hinzufügen, wie z.B. das Deaktivieren der _Save_-Schaltfläche, wenn erforderliche Felder leer sind, das Fokussieren auf bestimmte HTML-Elemente oder das automatische Auswählen von Inhalten, wenn ein Texteingabefeld den Fokus erhält.

Um all diese Funktionen zu implementieren, benötigen wir programmatischen Zugriff auf DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir werden auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden müssen, um spezifische Aufgaben auszuführen, wenn das Steuerelement den Fokus erhält.

Das Problem ist, dass all diese DOM-Knoten von Svelte zur Laufzeit dynamisch erstellt werden. Wir müssen also warten, bis sie erstellt und dem DOM hinzugefügt wurden, bevor wir sie verwenden können. Dazu müssen wir uns mit dem [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount) vertraut machen, um zu verstehen, wann wir auf sie zugreifen können – dazu später mehr.

## Erstellen einer NewTodo-Komponente

Lassen Sie uns damit beginnen, unser neues Todo-Formular in eine eigene Komponente auszulagern. Mit dem, was wir bisher wissen, können wir eine neue Komponentendatei erstellen und den Code so anpassen, dass ein `addTodo`-Ereignis ausgelöst wird, bei dem der Name des neuen Todos mit den zusätzlichen Details übergeben wird.

1. Erstellen Sie eine neue Datei, `components/NewTodo.svelte`.
2. Fügen Sie den folgenden Inhalt ein:

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
       <label for="todo-0" class="label__lg">Was muss erledigt werden?</label>
     </h2>
     <input bind:value={name} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
     <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Hinzufügen</button>
   </form>
   ```

   Hier binden wir das `<input>`-Element an die `name`-Variable mit `bind:value={name}` und deaktivieren die _Add_-Schaltfläche, wenn sie leer ist (also keinen Textinhalt hat), indem wir `disabled={!name}` verwenden. Wir kümmern uns auch um die <kbd>Escape</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}`. Wann immer die <kbd>Escape</kbd>-Taste gedrückt wird, wird `onCancel()` ausgeführt, was einfach die `name`-Variable leert.

3. Jetzt müssen wir es von innen `import` erleben und es in der `Todos`-Komponente verwenden, und die `addTodo()`-Funktion aktualisieren, um den Namen des neuen Todos zu erhalten.

   Fügen Sie die folgende `import`-Anweisung unter den anderen in `Todos.svelte` hinzu:

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. Und aktualisieren Sie die `addTodo()`-Funktion folgendermaßen:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   `addTodo()` erhält jetzt direkt den Namen des neuen Todos, sodass wir die `newTodoName`-Variable, um ihr ihren Wert zu geben, nicht mehr benötigen. Unsere `NewTodo`-Komponente kümmert sich darum.

   > [!NOTE]
   > Die Syntax `{ name }` ist nur eine Abkürzung für `{ name: name }`. Dies stammt aus JavaScript selbst und hat nichts mit Svelte zu tun, außer dass es etwas Inspiration für die eigenen Abkürzungen von Svelte liefert.

5. Ersetzen Sie schließlich in diesem Abschnitt das NewTodo-Formularmarkup durch einen Aufruf der `NewTodo`-Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten mithilfe der `bind:this={dom_node}`-Direktive

Jetzt möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente immer dann den Fokus erhält, wenn die _Add_-Schaltfläche gedrückt wird. Dazu benötigen wir einen Verweis auf den DOM-Knoten des Eingabefeldes. Svelte bietet eine Möglichkeit, dies mit der `bind:this={dom_node}`-Direktive zu tun. Sobald sie angegeben wird, weist Svelte, sobald die Komponente eingebunden und der DOM-Knoten erstellt wird, der angegebenen Variable einen Verweis auf den DOM-Knoten zu.

Wir erstellen eine `nameEl`-Variable und binden sie an den Eingabefeld mit `bind:this={nameEl}`. Dann, innerhalb von `addTodo()`, geben wir nach dem Hinzufügen des neuen Todos `nameEl.focus()` an, um den Eingabefeld erneut zu fokussieren. Wir werden dasselbe tun, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt, mit der `onCancel()`-Funktion.

Aktualisieren Sie den Inhalt von `NewTodo.svelte` so:

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let name = '';
  let nameEl; // Verweis auf den Namenseingabe-DOM-Knoten

  const addTodo = () => {
    dispatch('addTodo', name);
    name = '';
    nameEl.focus(); // Fokus auf das Nameneingabefeld stellen
  }

  const onCancel = () => {
    name = '';
    nameEl.focus(); // Fokus auf das Nameneingabefeld stellen
  }
</script>

<form on:submit|preventDefault={addTodo} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
  <h2 class="label-wrapper">
    <label for="todo-0" class="label__lg">Was muss erledigt werden?</label>
  </h2>
  <input bind:value={name} bind:this={nameEl} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
  <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Hinzufügen</button>
</form>
```

Probieren Sie die App aus: Geben Sie einen neuen Todo-Namen in das `<input>`-Feld ein, drücken Sie <kbd>tab</kbd>, um den Fokus auf die _Add_-Schaltfläche zu setzen, und drücken Sie dann <kbd>Enter</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie der Eingabefeld den Fokus zurückbekommt.

### Autofokussieren unseres Eingabefeldes

Das nächste Feature, das wir zu unserer `NewTodo`-Komponente hinzufügen, ist ein `autofocus`-Prop, mit dem wir angeben können, dass das `<input>`-Feld beim Laden der Seite fokussiert werden soll.

1. Unser erster Versuch sieht folgendermaßen aus: Wir fügen das `autofocus`-Prop hinzu und rufen einfach `nameEl.focus()` aus dem `<script>`-Block auf. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen) so, dass sie so aussehen:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // Verweis auf den Namenseingabe-DOM-Knoten

     if (autofocus) nameEl.focus();
   ```

2. Gehen Sie jetzt zurück zur `Todos`-Komponente und übergeben Sie das `autofocus`-Prop in den `<NewTodo>`-Komponentenaufruf, so:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. Wenn Sie Ihre App jetzt ausprobieren, wird die Seite leer, und in der Webkonsole Ihrer DevTools sehen Sie einen Fehler ähnlich wie: `TypeError: nameEl ist undefined`.

Um zu verstehen, was hier passiert, reden wir ein wenig mehr über diesen [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount), den wir zuvor erwähnt haben.

## Komponentenlebenszyklus und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode aus (d.h. den `<script>`-Bereich der Komponente). In diesem Moment sind jedoch alle Knoten, die die Komponente bilden, noch nicht an das DOM angehängt, sie existieren tatsächlich noch gar nicht.

Wie können Sie also wissen, wann die Komponente bereits erstellt und im DOM eingebunden worden ist? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beim Erstellen beginnt und beim Zerstören endet. Es gibt einige Funktionen, mit denen Sie Code zu wichtigen Momenten während dieses Lebenszyklus ausführen können.

Diejenige, die Sie am häufigsten verwenden werden, ist `onMount()`, die es uns ermöglicht, einen Rückruf auszuführen, sobald die Komponente im DOM eingebaut wurde. Lassen Sie es uns ausprobieren und sehen, was mit der `nameEl`-Variable passiert.

1. Ergänzen Sie zu Beginn des `<script>`-Abschnitts von `NewTodo.svelte` die folgende Zeile:

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
4. Die App funktioniert jetzt wieder, und Sie sehen das folgende in Ihrer Konsole:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen können, während die Komponente initialisiert wird, ist `nameEl` undefiniert, was Sinn macht, da der `<input>`-Knoten noch nicht existiert. Nachdem die Komponente eingebaut wurde, hat Svelte der `nameEl`-Variable dank der `bind:this={nameEl}`-Direktive einen Verweis auf den `<input>` DOM-Knoten zugewiesen.

5. Um die Autofokusfunktionalität zum Laufen zu bringen, ersetzen Sie das vorherige `console.log()`/`onMount()`-Block, das Sie hinzugefügt haben, durch:

   ```js
   onMount(() => autofocus && nameEl.focus()); // wenn autofocus wahr ist, führen wir nameEl.focus() aus
   ```

6. Gehen Sie wieder zu Ihrer App, und Sie werden sehen, dass das `<input>`-Feld beim Laden der Seite fokussiert ist.

> [!NOTE]
> Sie können sich die anderen [Lebenszyklusfunktionen in den Svelte-Dokumenten ansehen](https://svelte.dev/docs/svelte), und Sie können sie in Aktion im [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) sehen.

## Warten auf die DOM-Aktualisierung mit der `tick()`-Funktion

Jetzt kümmern wir uns um die Fokusmanagementdetails der `Todo`-Komponente. Zuerst wollen wir, dass ein Bearbeiten-`<input>` einer `Todo`-Komponente immer dann den Fokus erhält, wenn wir den Bearbeitungsmodus durch Drücken seiner Schaltfläche _Edit_ aufrufen. In ähnlicher Weise, wie wir zuvor gesehen haben, erstellen wir eine `nameEl`-Variable innerhalb von `Todo.svelte` und rufen `nameEl.focus()` auf, nachdem die `editing`-Variable auf `true` gesetzt wurde.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablendeklaration direkt unter Ihren `editing`- und Namensdeklarationen hinzu:

   ```js
   let nameEl; // Verweis auf den Nameneingabe-DOM-Knoten
   ```

2. Aktualisieren Sie nun Ihre `onEdit()`-Funktion wie folgt:

   ```js
   function onEdit() {
     editing = true; // in den Bearbeitungsmodus wechseln
     nameEl.focus(); // Fokus auf das Nameneingabefeld setzen
   }
   ```

3. Binden Sie schließlich `nameEl` an das `<input>`-Feld, indem Sie es wie folgt aktualisieren:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. Wenn Sie jedoch die aktualisierte App ausprobieren, erhalten Sie einen Fehler in der Konsole, der etwa so lautet: "TypeError: nameEl ist undefined", wenn Sie die Schaltfläche _Edit_ eines Todos drücken.

Was passiert hier? Wenn Sie den Status einer Komponente in Svelte aktualisieren, wird das DOM nicht sofort aktualisiert. Stattdessen wartet es bis zur nächsten Mikroaufgabe, um zu sehen, ob noch andere Änderungen angewendet werden müssen, einschließlich in anderen Komponenten. Dies vermeidet unnötige Arbeit und ermöglicht es dem Browser, Dinge effektiver zu bündeln.

In diesem Fall, wenn `editing` `false` ist, ist das Bearbeiten-`<input>` nicht sichtbar, da es nicht im DOM existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen sofort danach, auf die `nameEl`-Variable zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hierbei ist, dass Svelte das DOM noch nicht aktualisiert hat.

Eine Möglichkeit, dieses Problem zu lösen, besteht darin, [`setTimeout()`](/de/docs/Web/API/setTimeout) zu verwenden, um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern und Svelte die Gelegenheit zu geben, das DOM zu aktualisieren.

Probieren Sie dies jetzt aus:

```js
function onEdit() {
  editing = true; // in den Bearbeitungsmodus wechseln
  setTimeout(() => nameEl.focus(), 0); // asynchroner Aufruf, um den Fokus auf das Nameneingabefeld zu setzen
}
```

Die obige Lösung funktioniert, ist jedoch eher unelegant. Svelte bietet eine bessere Möglichkeit, solche Fälle zu handhaben. Die [`tick()`-Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Versprechen zurück, das aufgelöst wird, sobald alle ausstehenden Statusänderungen auf das DOM angewendet wurden (oder sofort, wenn keine ausstehenden Statusänderungen vorliegen). Lassen Sie es uns jetzt ausprobieren.

1. Importieren Sie zunächst `tick` am Anfang des `<script>`-Abschnitts zusammen mit Ihrem bereits vorhandenen Import:

   ```js
   import { tick } from "svelte";
   ```

2. Rufen Sie als Nächstes `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) aus einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf; aktualisieren Sie `onEdit()` wie folgt:

   ```js
   async function onEdit() {
     editing = true; // in den Bearbeitungsmodus wechseln
     await tick();
     nameEl.focus();
   }
   ```

3. Wenn Sie es jetzt ausprobieren, werden Sie sehen, dass alles wie erwartet funktioniert.

> [!NOTE]
> Um ein weiteres Beispiel mit `tick()` zu sehen, besuchen Sie das [Svelte-Tutorial](https://learn.svelte.dev/tutorial/tick).

## Hinzufügen von Funktionalität zu HTML-Elementen mit der `use:action`-Direktive

Als nächstes möchten wir, dass der Name-`<input>` automatisch den gesamten Text beim Fokus auswählt. Darüber hinaus möchten wir dies so entwickeln, dass es problemlos auf jedes HTML-`<input>` wiederverwendet und auf deklarative Weise angewendet werden kann. Wir werden dieses Erfordernis als Vorwand nutzen, um ein sehr leistungsstarkes Feature zu demonstrieren, das Svelte uns zur Verfügung stellt, um Funktionalität zu regulären HTML-Elementen hinzuzufügen: [Aktionen](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Eingabeknotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Damit diese Funktion jedes Mal aufgerufen wird, wenn der Knoten den Fokus erhält, benötigen wir einen Ereignisabonnenten in etwa so:

```js
node.addEventListener("focus", (event) => node.select());
```

Und um Speicherlecks zu vermeiden, sollten wir auch die [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Funktion aufrufen, wenn der Knoten zerstört wird.

> [!NOTE]
> All dies ist nur Standard-WebAPI-Funktionalität; nichts hiervon ist spezifisch für Svelte.

Wir könnten all dies in unserer `Todo`-Komponente erreichen, wann immer wir das `<input>` dem DOM hinzufügen oder entfernen, aber wir müssten sehr vorsichtig sein, um den Ereignisabonnenten nach Hinzufügen des Knotens zum DOM hinzuzufügen und ihn zu entfernen, bevor der Knoten aus dem DOM entfernt wird. Außerdem wäre unsere Lösung nicht sehr wiederverwendbar.

Das ist der Punkt, an dem Svelte-Aktionen ins Spiel kommen. Grundsätzlich ermöglichen sie es uns, eine Funktion auszuführen, wann immer ein Element zum DOM hinzugefügt und nach dem Entfernen aus dem DOM entfernt wird.

In unserem unmittelbaren Anwendungsfall werden wir eine Funktion namens `selectOnFocus()` definieren, die einen Knoten als Parameter erhält. Die Funktion wird dem Knoten einen Ereignisabonnenten hinzufügen, sodass jedes Mal, wenn er den Fokus erhält, der Text ausgewählt wird. Dann wird ein Objekt mit einer `destroy`-Eigenschaft zurückgegeben. Die `destroy`-Eigenschaft ist das, was Svelte nach dem Entfernen des Knotens aus dem DOM ausführt. Hier entfernen wir den Abonnenten, um sicherzustellen, dass wir kein Speicherleck hinterlassen.

1. Lassen Sie uns die Funktion `selectOnFocus()` erstellen. Fügen Sie das Folgende am Ende des `<script>`-Abschnitts von `Todo.svelte` hinzu:

   ```js
   function selectOnFocus(node) {
     if (node && typeof node.select === "function") {
       // stellen Sie sicher, dass node definiert ist und eine select()-Methode hat
       const onFocus = (event) => node.select(); // Ereignisabonnent
       node.addEventListener("focus", onFocus); // wenn der Knoten den Fokus erhält, rufen Sie onFocus() auf
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // dies wird ausgeführt, wenn der Knoten aus dem DOM entfernt wird
       };
     }
   }
   ```

2. Jetzt müssen wir dem `<input>` mitteilen, dass er diese Funktion mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action)-Direktive nutzen soll:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Direktive sagen wir Svelte, dass diese Funktion ausgeführt werden soll, wenn der DOM-Knoten des `<input>` als Parameter übergeben wird, sobald die Komponente im DOM eingebaut wird. Es wird auch für die Ausführung der `destroy`-Funktion zuständig sein, wenn die Komponente aus dem DOM entfernt wird. Mit der `use`-Direktive kümmert sich Svelte also um den Lebenszyklus der Komponente für uns.

   In unserem Fall würde unser `<input>` so aussehen: Aktualisieren Sie das erste Label-/Eingabepaar der Komponente (innerhalb der Bearbeitungsvorlage) wie folgt:

   ```svelte
   <label for="todo-{todo.id}" class="todo-label">Neuer Name für '{todo.name}'</label>
   <input
     bind:value={name}
     bind:this={nameEl}
     use:selectOnFocus
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

3. Lassen Sie es uns ausprobieren. Gehen Sie zu Ihrer App, drücken Sie die Schaltfläche _Edit_ eines Todos, und drücken Sie dann <kbd>Tab</kbd>, um den Fokus von `<input>` zu entfernen. Klicken Sie nun auf das `<input>`, und Sie sehen, dass der gesamte Eingabetext ausgewählt ist.

### Die Aktion wiederverwendbar machen

Jetzt lassen Sie uns diese Funktion wirklich wiederverwendbar über Komponenten hinweg machen. `selectOnFocus()` ist nur eine Funktion ohne Abhängigkeit von der `Todo.svelte`-Komponente, also können wir sie einfach in eine Datei extrahieren und sie von dort verwenden.

1. Erstellen Sie eine neue Datei, `actions.js`, innerhalb des `src`-Ordners.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   export function selectOnFocus(node) {
     if (node && typeof node.select === "function") {
       // stellen Sie sicher, dass node definiert ist und eine select()-Methode hat
       const onFocus = (event) => node.select(); // Ereignisabonnent
       node.addEventListener("focus", onFocus); // wenn der Knoten den Fokus erhält, rufen Sie onFocus() auf
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // dies wird ausgeführt, wenn der Knoten aus dem DOM entfernt wird
       };
     }
   }
   ```

3. Importieren Sie es jetzt von innen `Todo.svelte`; fügen Sie die folgende Importanweisung direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die Definition von `selectOnFocus()` aus `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwenden

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, lassen Sie uns sie in `NewTodo.svelte` verwenden.

1. Importieren Sie `selectOnFocus()` auch in dieser Datei aus `actions.js`, wie zuvor:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie die Direktive `use:selectOnFocus` dem `<input>` hinzu, wie folgt:

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

Mit wenigen Codezeilen können wir regulären HTML-Elementen Funktionalität in sehr wiederverwendbarer und deklarativer Weise hinzufügen. Es erfordert nur eine `import`-Anweisung und eine kurze Direktive wie `use:selectOnFocus`, die ihren Zweck klar beschreibt. Und wir können dies erreichen, ohne einen speziellen Wrapper wie `TextInput`, `MyInput` oder ähnliches zu erstellen. Darüber hinaus können Sie so viele Direktiven `use:action` zu einem Element hinzufügen, wie Sie möchten.

Außerdem mussten wir nicht mit `onMount()`, `onDestroy()` oder `tick()` kämpfen – die `use`-Direktive kümmert sich um den Komponentenlebenszyklus für uns.

### Weitere Verbesserungen von Aktionen

Im vorherigen Abschnitt, während wir mit den `Todo`-Komponenten arbeiteten, mussten wir mit `bind:this`, `tick()` und `async`-Funktionen jonglieren, nur um den Fokus auf unser `<input>` zu legen, sobald es dem DOM hinzugefügt wurde.

1. So können wir es stattdessen mit Aktionen implementieren:

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. Und dann müssen wir in unserem Markup nur eine weitere `use:`-Direktive hinzufügen:

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. Unsere `onEdit()`-Funktion kann jetzt viel einfacher sein:

   ```js
   function onEdit() {
     editing = true; // Bearbeitungsmodus aktivieren
   }
   ```

Bevor wir weitermachen, lassen Sie uns zu unserer `Todo.svelte`-Komponente zurückkehren und den Fokus auf die Schaltfläche _Edit_ legen, nachdem der Benutzer _Save_ oder _Cancel_ gedrückt hat.

Wir könnten versuchen, einfach unsere `focusOnInit`-Aktion wiederzuverwenden, indem wir `use:focusOnInit` auf die _Edit_-Schaltfläche anwenden. Aber wir würden einen subtilen Fehler einführen. Wenn Sie ein neues Todo hinzufügen, wird der Fokus auf die _Edit_-Schaltfläche des gerade hinzugefügten Todos gesetzt. Das liegt daran, dass die `focusOnInit`-Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen – wir möchten, dass die Schaltfläche _Edit_ nur dann den Fokus erhält, wenn der Benutzer _Save_ oder _Cancel_ gedrückt hat.

1. Gehen Sie also zurück zu Ihrer Datei `Todo.svelte`.
2. Zuerst erstellen wir eine Flagge namens `editButtonPressed` und initialisieren sie auf `false`. Fügen Sie dies direkt unter Ihren anderen Variablendeklarationen hinzu:

   ```js
   let editButtonPressed = false; // verfolgt, ob die Edit-Schaltfläche gedrückt wurde, um danach den Fokus auf sie zu setzen
   ```

3. Als Nächstes werden wir die _Edit_-Schaltflächenfunktionalität modifizieren, um diese Flagge zu speichern, und erstellen die Aktion dafür. Aktualisieren Sie die `onEdit()`-Funktion wie folgt:

   ```js
   function onEdit() {
     editButtonPressed = true; // Benutzer hat die Edit-Schaltfläche gedrückt, der Fokus geht zurück zur Edit-Schaltfläche
     editing = true; // Bearbeitungsmodus aktivieren
   }
   ```

4. Fügen Sie darunter die folgende Definition für `focusEditButton()` hinzu:

   ```js
   const focusEditButton = (node) => editButtonPressed && node.focus();
   ```

5. Schließlich verwenden wir die `focusEditButton`-Aktion auf der _Edit_-Schaltfläche, wie folgt:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App erneut aus. An diesem Punkt wird jedes Mal, wenn die _Edit_-Schaltfläche dem DOM hinzugefügt wird, die `focusEditButton`-Aktion ausgeführt, aber sie wird nur dann den Fokus auf die Schaltfläche legen, wenn das `editButtonPressed`-Flag `true` ist.

> [!NOTE]
> Wir haben hier nur an der Oberfläche der Aktionen herumgekratzt. Aktionen können auch reaktive Parameter haben, und Svelte lässt uns erkennen, wann sich einer dieser Parameter ändert. So können wir Funktionalitäten hinzufügen, die sich gut in das reaktive System von Svelte integrieren. Für eine detailliertere Einführung zu Aktionen, betrachten Sie das [Svelte-Interactive-Tutorial](https://learn.svelte.dev/tutorial/actions) oder die [Svelte-`use:action`-Dokumentation](https://svelte.dev/docs/element-directives#use-action).

## Komponentenbindung: Exponieren von Komponentenmethoden und -variablen mit der `bind:this={component}`-Direktive

Es gibt immer noch eine Barrierefreiheit-Ärgernis zu beheben. Wenn der Benutzer die _Delete_-Schaltfläche drückt, verschwindet der Fokus.

Die letzte Funktion, die wir in diesem Artikel betrachten werden, besteht darin, den Fokus auf die Statusüberschrift zu setzen, nachdem ein Todo gelöscht wurde.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, sodass es keinen klaren Kandidaten gibt, um den Fokus zu erhalten. Wir haben die Statusüberschrift gewählt, da sie sich in der Nähe der Liste der Todos befindet, und es ist eine Möglichkeit, ein visuelles Feedback über das Entfernen der Aufgabe zu geben, sowie anzuzeigen, was für Bildschirmleser Benutzer passiert ist.

Zuerst extrahieren wir die Statusüberschrift in eine eigene Komponente.

1. Erstellen Sie eine neue Datei, `components/TodosStatus.svelte`.
2. Fügen Sie ihr folgenden Inhalt hinzu:

   ```svelte
   <script>
     export let todos;

     $: totalTodos = todos.length;
     $: completedTodos = todos.filter((todo) => todo.completed).length;
   </script>

   <h2 id="list-heading">
     {completedTodos} von {totalTodos} Elementen abgeschlossen
   </h2>
   ```

3. Importieren Sie die Datei am Anfang von `Todos.svelte`, und fügen Sie die folgende `import`-Anweisung unter den anderen hinzu:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift in `Todos.svelte` durch einen Aufruf der `TodosStatus`-Komponente, indem Sie `todos` als Prop übergeben, so:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch etwas aufräumen, indem Sie die `totalTodos` und `completedTodos` Variablen aus `Todos.svelte` entfernen. Löschen Sie einfach die `$: totalTodos = …` und `$: completedTodos = …` Zeilen, und entfernen Sie den Verweis auf `totalTodos`, wenn wir `newTodoId` berechnen, und verwenden Sie stattdessen `todos.length`. Ersetzen Sie dafür den Block, der mit `let newTodoId` beginnt, durch:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet – wir haben nur das letzte Markupstück in eine eigene Komponente extrahiert.

Jetzt müssen wir einen Weg finden, um den Fokus nach dem Entfernen eines Todos auf das `<h2>`-Statusetikett zu legen.

Bisher haben wir gesehen, wie man Informationen an eine Komponente über Props sendet und wie eine Komponente mit ihrem Elternteil kommunizieren kann, indem sie Ereignisse ausgibt oder bidirektionale Datenbindung verwendet. Die Kindkomponente könnte einen Verweis auf den `<h2>` Knoten mit `bind:this={dom_node}` erhalten und nach draußen mit bidirektionaler Datenbindung freigeben. Aber das würde die Komponentenverkapselung brechen; das Setzen des Fokus darauf sollte seine eigene Verantwortung sein.

Wir benötigen also, dass die `TodosStatus`-Komponente eine Methode bereitstellt, die ihr Elternteil aufrufen kann, um ihr den Fokus zu geben. Es ist ein sehr häufiges Szenario, dass eine Komponente einige Verhaltensweisen oder Informationen an den Verbraucher weitergibt; lassen Sie uns sehen, wie man das mit Svelte erreicht.

Wir haben bereits gesehen, dass Svelte `export let varname = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Aber wenn Sie anstelle von `let` ein `const`, `class` oder `function` exportieren, ist es außerhalb der Komponente schreibgeschützt. Funktionale Ausdrucke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props, und der Rest sind exportierte Werte:

```svelte
<script>
  export let bar = "optional default initial value"; // Prop
  export let baz = undefined; // Prop
  export let format = (n) => n.toFixed(2); // Prop

  // diese sind schreibgeschützt
  export const thisIs = "readonly"; // schreibgeschützter Export

  export function greet(name) {
    // schreibgeschützter Export
    alert(`Hello, ${name}!`);
  }

  export const greet = (name) => alert(`Hello, ${name}!`); // schreibgeschützter Export
</script>
```

Mit diesem Wissen zurück zu unserem Use-Case. Wir erstellen eine Funktion namens `focus()`, die den Fokus auf die `<h2>`-Überschrift legt. Dazu benötigen wir eine `headingEl`-Variable, um den Verweis auf den DOM-Knoten zu halten, und wir müssen sie mit `bind:this={headingEl}` an das `<h2>`-Element binden. Unsere Focus-Methode wird einfach `headingEl.focus()` ausführen.

1. Aktualisieren Sie den Inhalt von `TodosStatus.svelte` wie folgt:

   ```svelte
   <script>
     export let todos;

     $: totalTodos = todos.length;
     $: completedTodos = todos.filter((todo) => todo.completed).length;

     let headingEl;

     export function focus() {
       // kürzere Version: export const focus = () => headingEl.focus()
       headingEl.focus();
     }
   </script>

   <h2 id="list-heading" bind:this={headingEl} tabindex="-1">
     {completedTodos} von {totalTodos} Elementen abgeschlossen
   </h2>
   ```

   Beachten Sie, dass wir ein `tabindex`-Attribut zur `<h2>` hinzugefügt haben, um es zu ermöglichen, dass das Element programmatisch den Fokus erhält.

   Wie wir zuvor gesehen haben, gibt uns die Verwendung der Direktive `bind:this={headingEl}` einen Verweis auf den DOM-Knoten in der Variable `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion bereitzustellen, die den Fokus auf die `<h2>`-Überschrift setzt.

   Wie können wir auf diese exportierten Werte von dem Elternteil aus zugreifen? Genauso wie Sie mit der Direktive `bind:this={dom_node}` an DOM-Elemente binden können, können Sie auch mit `bind:this={component}` an Komponenteninstanzen binden. Wenn Sie also `bind:this` auf einem HTML-Element verwenden, erhalten Sie einen Verweis auf den DOM-Knoten, und wenn Sie dies auf einer Svelte-Komponente tun, erhalten Sie einen Verweis auf die Instanz dieser Komponente.

2. Um also an die Instanz von `TodosStatus` zu binden, erstellen wir zunächst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren `import`-Anweisungen hinzu:

   ```js
   let todosStatus; // Verweis auf die TodosStatus-Instanz
   ```

3. Fügen Sie als Nächstes eine `bind:this={todosStatus}`-Direktive zum Aufruf hinzu, wie folgt:

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. Jetzt können wir die `exportierte focus()`-Methode aus unserer `removeTodo()`-Funktion aufrufen:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // Fokus auf die Statusüberschrift setzen
   }
   ```

5. Gehen Sie zurück zu Ihrer App. Wenn Sie jetzt ein Todo löschen, wird die Statusüberschrift fokussiert. Dies ist nützlich, um die Veränderung der Anzahl von Todos hervorzuheben, sowohl für sehende Benutzer als auch für Benutzer von Bildschirmlesern.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir nicht einfach `TodosStatus.focus()` aufrufen? Sie könnten mehrere Instanzen von `TodosStatus` aktiv haben, also benötigen Sie eine Möglichkeit, auf jede bestimmte Instanz zu verweisen. Deshalb müssen Sie eine Variable angeben, um jede spezifische Instanz zu binden.

## Der Code bisher

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie wie folgt auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Zustand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir alle erforderlichen Funktionen zu unserer App hinzugefügt und auch eine Reihe von Barrierefreiheits- und Usability-Problemen gelöst. Wir haben auch die Unterteilung unserer App in handhabbare Komponenten abgeschlossen, von denen jede eine einzigartige Verantwortung hat.

In der Zwischenzeit haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie z.B.:

- Umgang mit Reaktivitätsproblemen beim Aktualisieren von Objekten und Arrays
- Arbeiten mit DOM-Knoten mithilfe von `bind:this={dom_node}` (Binding von DOM-Elementen)
- Verwendung der Komponentenlebenszyklusfunktion `onMount()`
- Erzwingen, dass Svelte ausstehende Statusänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionalität zu HTML-Elementen auf eine wiederverwendbare und deklarative Weise mit der `use:action`-Direktive
- Zugriff auf Komponentenmethoden mithilfe von `bind:this={component}` (Binding von Komponenten)

Im nächsten Artikel werden wir sehen, wie man Läden verwendet, um zwischen Komponenten zu kommunizieren und Animationen zu unseren Komponenten hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
