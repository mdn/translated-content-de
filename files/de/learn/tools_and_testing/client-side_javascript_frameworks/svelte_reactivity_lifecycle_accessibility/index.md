---
title: "Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Zugänglichkeit"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir unserer To-Do-Liste mehr Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel werden wir die endgültigen Funktionen der App hinzufügen und unsere App weiter in Komponenten unterteilen. Wir werden lernen, wie man mit Reaktivitätsproblemen im Zusammenhang mit der Aktualisierung von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, müssen wir etwas tiefer in Sveltes Reaktivitätssystem eintauchen. Wir werden auch einige Zugänglichkeitsprobleme mit dem Fokus lösen und mehr darüber hinaus.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie sich mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut machen und
          Kenntnisse im Umgang mit der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen einiger fortgeschrittener Svelte-Techniken zur Lösung von Reaktivitätsproblemen,
        Tastaturzugänglichkeitsproblemen im Zusammenhang mit dem Lebenszyklus von Komponenten
        und mehr.
      </td>
    </tr>
  </tbody>
</table>

Wir werden uns auf einige Zugänglichkeitsprobleme im Zusammenhang mit dem Fokusmanagement konzentrieren. Dazu werden wir einige Techniken verwenden, um auf DOM-Knoten zuzugreifen und Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir werden auch sehen, wie Eventlistener an DOM-Elementen deklariert und bereinigt werden.

Des Weiteren müssen wir etwas über den Lebenszyklus der Komponenten lernen, um zu verstehen, wann diese DOM-Knoten im DOM montiert und wieder entfernt werden und wie wir sie zugänglich machen können. Wir lernen auch das `action`-Direktiv kennen, das es uns ermöglicht, die Funktionalität von HTML-Elementen auf wiederverwendbare und deklarative Weise zu erweitern.

Schließlich werden wir etwas mehr über Komponenten lernen. Bisher haben wir gesehen, wie Komponenten Daten über Props teilen und mit ihren Eltern über Ereignisse und bidirektionale Datenbindung kommunizieren können. Jetzt werden wir sehen, wie Komponenten auch Methoden und Variablen bereitstellen können.

Die folgenden neuen Komponenten werden im Laufe dieses Artikels entwickelt werden:

- `MoreActions`: Zeigt die Schaltflächen _Alles auswählen_ und _Erledigte entfernen_ an und gibt die entsprechenden Ereignisse aus, die zur Handhabung ihrer Funktionalität erforderlich sind.
- `NewTodo`: Zeigt das `<input>`-Feld und die _Hinzufügen_-Schaltfläche zum Hinzufügen eines neuen To-Dos an.
- `TodosStatus`: Zeigt die Überschrift "x von y Elementen erledigt" an.

## Code zusammen mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht gemacht haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Zustand der App zu gelangen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den Code mit uns mit dem REPL zu programmieren, beginnen Sie auf

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Arbeiten an der MoreActions-Komponente

Jetzt werden wir die Schaltflächen _Alles auswählen_ und _Erledigte entfernen_ angehen. Lassen Sie uns eine Komponente erstellen, die für die Anzeige der Schaltflächen verantwortlich ist und die entsprechenden Ereignisse auslöst.

1. Erstellen Sie eine neue Datei, `components/MoreActions.svelte`.
2. Wenn die erste Schaltfläche geklickt wird, geben wir ein `checkAll`-Ereignis aus, um zu signalisieren, dass alle To-Dos ausgewählt/abgewählt werden sollen. Wenn die zweite Schaltfläche geklickt wird, geben wir ein `removeCompleted`-Ereignis aus, um zu signalisieren, dass alle erledigten To-Dos entfernt werden sollen. Fügen Sie den folgenden Inhalt in Ihre `MoreActions.svelte`-Datei ein:

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

   Wir haben auch eine `completed`-Variable hinzugefügt, um zwischen dem Auswählen und Abwählen aller Aufgaben zu wechseln.

3. Zurück in `Todos.svelte` werden wir unsere `MoreActions`-Komponente importieren und zwei Funktionen erstellen, um die von der `MoreActions`-Komponente ausgesendeten Ereignisse zu handhaben.

   Fügen Sie die folgende Import-Anweisung unter den bestehenden ein:

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

5. Gehen Sie nun zum unteren Teil des `Todos.svelte`-Markups und ersetzen Sie das `<div class="btn-group">`-Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf der `MoreActions`-Komponente:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. OK, lassen Sie uns zurück in die App gehen und es ausprobieren. Sie werden feststellen, dass die Schaltfläche _Erledigte entfernen_ gut funktioniert, die Schaltfläche _Alles auswählen_/_Alle abwählen_ jedoch lautlos fehlschlägt.

Um herauszufinden, was hier passiert, werden wir ein wenig tiefer in die Reaktivität von Svelte eintauchen.

## Reaktivitätsprobleme: Aktualisierung von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos`-Array aus der `checkAllTodos()`-Funktion in der Konsole protokollieren.

1. Aktualisieren Sie Ihre bestehende `checkAllTodos()`-Funktion wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Gehen Sie zurück zu Ihrem Browser, öffnen Sie Ihre DevTools-Konsole und klicken Sie mehrmals auf _Alles auswählen_/_Alle abwählen_.

Sie werden feststellen, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie die Schaltfläche drücken (die `completed`-Eigenschaften der `todo`-Objekte werden zwischen `true` und `false` umgeschaltet), aber Svelte ist sich dessen nicht bewusst. Das bedeutet auch, dass eine reaktive Anweisung wie `$: console.log('todos', todos)` hier nicht sehr nützlich ist.

Um herauszufinden, warum das passiert, müssen wir verstehen, wie Reaktivität in Svelte funktioniert, wenn Arrays und Objekte aktualisiert werden.

Viele Web-Frameworks verwenden die Technik des virtuellen DOM, um die Seite zu aktualisieren. Im Grunde genommen ist das virtuelle DOM eine im Speicher gehaltene Kopie des Inhalts der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "echten" DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht es dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen im Grunde standardmäßig bei jeder Änderung den gesamten JavaScript-Code gegen dieses virtuelle DOM erneut aus und wenden dabei verschiedene Methoden an, um teure Berechnungen zwischenzuspeichern und die Ausführung zu optimieren. Sie unternehmen nur wenig bis gar keine Anstrengungen, um zu verstehen, was unser JavaScript-Code tut.

Svelte verwendet keine virtuelle DOM-Darstellung. Stattdessen wird unser Code analysiert und untersucht, ein Abhängigkeitsbaum erstellt und dann der erforderliche JavaScript-Code generiert, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz erzeugt üblicherweise optimalen JavaScript-Code mit minimalem Overhead, hat aber auch seine Einschränkungen.

Manchmal kann Svelte Änderungen an überwachten Variablen nicht erkennen. Denken Sie daran, dass Sie Svelte mitteilen müssen, dass sich eine Variable geändert hat, indem Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die Sie beachten sollten, lautet: **Der Name der aktualisierten Variablen muss auf der linken Seite der Zuweisung stehen.**

Zum Beispiel im folgenden Codeausschnitt:

```js
const foo = obj.foo;
foo.bar = "baz";
```

Svelte wird `obj.foo.bar` nicht aktualisieren, es sei denn, Sie folgen es mit `obj = obj`. Das liegt daran, dass Svelte Objektverweise nicht nachverfolgen kann; wir müssen Svelte explizit mitteilen, dass sich `obj` durch eine Zuweisung geändert hat.

> [!NOTE]
> Wenn `foo` eine Variable auf höchster Ebene ist, können Sie Svelte einfach mitteilen, dass `obj` immer dann aktualisiert werden soll, wenn sich `foo` ändert, durch die folgende reaktive Anweisung: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und jedes Mal, wenn es sich ändert, führt Svelte `obj = obj` aus.

In unserer `checkAllTodos()`-Funktion, wenn wir ausführen:

```js
todos.forEach((t) => (t.completed = completed));
```

wird Svelte `todos` nicht als geändert markieren, da es nicht weiß, dass wir, wenn wir die `t`-Variable innerhalb der `forEach()`-Methode aktualisieren, auch das `todos`-Array ändern. Und das ergibt Sinn, denn ansonsten würde Svelte wissen, wie die Interna der `forEach()`-Methode funktionieren; dasselbe würde daher für jede Methode gelten, die an ein beliebiges Objekt oder Array angefügt ist.

Es gibt jedoch verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle beinhalten das Zuweisen eines neuen Werts zur überwachten Variablen.

Wie wir bereits gesehen haben, könnten wir Svelte einfach anweisen, die Variable durch eine Selbstzuweisung zu aktualisieren, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Dies wird das Problem lösen. Intern wird Svelte `todos` als geändert kennzeichnen und die scheinbar redundante Selbstzuweisung entfernen. Abgesehen davon, dass es seltsam aussieht, ist es völlig in Ordnung, diese Technik zu verwenden, und manchmal ist es der prägnanteste Weg, dies zu tun.

Wir könnten auch auf das `todos`-Array per Index zugreifen, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen zu Eigenschaften von Arrays und Objekten, z.B. `obj.foo += 1` oder `array[i] = x`, funktionieren genauso wie Zuweisungen zu den Werten selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos`-Array geändert wird.

Eine andere Lösung besteht darin, ein neues Array mit einer Kopie aller To-Dos mit dem entsprechend aktualisierten `completed`-Eigenschaftswert zuzuweisen, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode, die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jedes To-Dos zurück, wobei die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet wird und die Eigenschaft `completed` entsprechend überschrieben wird. Diese Lösung hat den zusätzlichen Vorteil, ein neues Array mit neuen Objekten zurückzugeben und somit die Mutation des ursprünglichen `todos`-Arrays vollständig zu vermeiden.

> [!NOTE]
> Svelte ermöglicht es uns, verschiedene Optionen anzugeben, die beeinflussen, wie der Compiler arbeitet. Die `<svelte:options immutable={true}/>`-Option teilt dem Compiler mit, dass Sie versprechen, keine Objekte zu modifizieren. Dies ermöglicht es ihm, weniger konservativ zu sein, wenn er prüft, ob sich Werte geändert haben, und einfacheren und leistungsfähigeren Code zu erzeugen. Für weitere Informationen über `<svelte:options>` konsultieren Sie die [Svelte-Optionsdokumentation](https://svelte.dev/docs/special-elements#svelte-options).

Alle diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Jede dieser Techniken wird es Svelte erlauben, zu bemerken, dass unser `todos`-Array geändert wurde.

**Wählen Sie eine aus und aktualisieren Sie Ihre `checkAllTodos()`-Funktion entsprechend. Jetzt sollten Sie in der Lage sein, alle Ihre To-Dos auf einmal auszuwählen und abzuwählen. Probieren Sie es aus!**

## Vervollständigen unserer MoreActions-Komponente

Wir werden ein Detail zur Benutzerfreundlichkeit zu unserer Komponente hinzufügen. Wir werden die Schaltflächen deaktivieren, wenn keine Aufgaben zu verarbeiten sind. Dazu erhalten wir das `todos`-Array als Prop und setzen die `disabled`-Eigenschaft jeder Schaltfläche entsprechend.

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

   Wir haben auch eine reaktive `completedTodos`-Variable deklariert, um die _Erledigte entfernen_-Schaltfläche zu aktivieren oder zu deaktivieren.

2. Vergessen Sie nicht, das Prop aus `Todos.svelte` an `MoreActions` zu übergeben, wo die Komponente aufgerufen wird:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Den Fokus auf die Details legen

Nachdem wir nun alle erforderlichen Funktionen der App abgeschlossen haben, konzentrieren wir uns auf einige Zugänglichkeitsmerkmale, die die Benutzerfreundlichkeit unserer App sowohl für Tastaturbenutzer als auch für Bildschirmleser verbessern.

In seinem aktuellen Zustand weist unsere App einige Probleme in Bezug auf die Tastaturzugänglichkeit im Zusammenhang mit dem Fokusmanagement auf. Schauen wir uns diese Probleme an.

## Erforschen von Tastaturzugänglichkeitsproblemen in unserer To-Do-App

Derzeit werden Tastaturbenutzer feststellen, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder konsistent ist.

Wenn Sie auf das Eingabefeld oben in unserer App klicken, sehen Sie einen dicken, gestrichelten Umriss um dieses Eingabefeld. Dieser Umriss ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist.

Wenn Sie ein Mausbenutzer sind, haben Sie diesen visuellen Hinweis möglicherweise übersehen. Aber wenn Sie ausschließlich mit der Tastatur arbeiten, ist es von entscheidender Bedeutung zu wissen, welches Steuerungselement den Fokus hat. Es zeigt uns an, welches Steuerungselement unsere Tastenanschläge empfangen wird.

Wenn Sie die <kbd>Tab</kbd>-Taste wiederholt drücken, sehen Sie, wie der gestrichelte Fokusindikator zwischen allen fokussierbaren Elementen auf der Seite wechselt. Wenn Sie den Fokus auf die Schaltfläche _Bearbeiten_ verschieben und <kbd>Enter</kbd> drücken, verschwindet plötzlich der Fokus, und Sie können nicht mehr erkennen, welches Steuerungselement unsere Tastenanschläge empfangen wird.

Außerdem passiert nichts, wenn Sie die <kbd>Escape</kbd>- oder <kbd>Enter</kbd>-Taste drücken. Und wenn Sie auf _Abbrechen_ oder _Speichern_ klicken, verschwindet der Fokus erneut. Für einen Benutzer, der mit der Tastatur arbeitet, wäre dieses Verhalten im besten Fall verwirrend.

Wir möchten auch einige Usability-Features hinzufügen, wie das Deaktivieren der _Speichern_-Schaltfläche, wenn erforderliche Felder leer sind, den Fokus auf bestimmte HTML-Elemente setzen oder Inhalte automatisch auswählen, wenn ein Texteingabe-Feld den Fokus erhält.

Um all diese Funktionen zu implementieren, benötigen wir programmgesteuerten Zugriff auf DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir müssen auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um bestimmte Aufgaben auszuführen, wenn die Steuerung den Fokus erhält.

Das Problem ist, dass all diese DOM-Knoten zur Laufzeit von Svelte dynamisch erstellt werden. Daher müssen wir warten, bis sie erstellt und dem DOM hinzugefügt werden, um sie verwenden zu können. Dazu müssen wir etwas über den [Lebenszyklus der Komponenten](https://learn.svelte.dev/tutorial/onmount) lernen, um zu verstehen, wann wir auf sie zugreifen können — mehr dazu später.

## Erstellen einer NewTodo-Komponente

Lassen Sie uns damit beginnen, unser neues To-Do-Formular in eine eigene Komponente auszulagern. Mit dem, was wir bisher wissen, können wir eine neue Komponentendatei erstellen und den Code anpassen, um ein `addTodo`-Ereignis auszugeben, das den Namen des neuen To-Dos mit den zusätzlichen Details übergibt.

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
       <label for="todo-0" class="label__lg">What needs to be done?</label>
     </h2>
     <input bind:value={name} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
     <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
   </form>
   ```

   Hier binden wir das `<input>` an die `name`-Variable mit `bind:value={name}` und deaktivieren die _Hinzufügen_-Schaltfläche, wenn es leer ist (d.h. ohne Textinhalt) mit `disabled={!name}`. Wir kümmern uns auch um die <kbd>Escape</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}}`. Jedes Mal, wenn die <kbd>Escape</kbd>-Taste gedrückt wird, führen wir `onCancel()` aus, das die `name`-Variable einfach bereinigt.

3. Nun müssen wir es aus `Todos` importieren und verwenden und die `addTodo()`-Funktion aktualisieren, um den Namen des neuen To-Dos zu empfangen.

   Fügen Sie die folgende `import`-Anweisung unter den anderen in `Todos.svelte` ein:

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. Und aktualisieren Sie die `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   `addTodo()` empfängt jetzt den Namen des neuen To-Dos direkt, sodass wir die `newTodoName`-Variable nicht mehr benötigen, um ihr einen Wert zuzuweisen. Unsere `NewTodo`-Komponente kümmert sich darum.

   > [!NOTE]
   > Die `{ name }`-Syntax ist nur eine Abkürzung für `{ name: name }`. Diese stammt aus JavaScript selbst und hat nichts mit Svelte zu tun, abgesehen von der Inspiration für Sveltes eigene Abkürzungen.

5. Schließlich für diesen Abschnitt ersetzen Sie das NewTodo-Formular-Markup durch einen Aufruf zur `NewTodo`-Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten mithilfe des `bind:this={dom_node}`-Direktivs

Jetzt möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente jedes Mal den Fokus wiedererlangt, wenn die _Hinzufügen_-Schaltfläche gedrückt wird. Dazu benötigen wir eine Referenz auf den DOM-Knoten des Eingabefelds. Svelte bietet eine Möglichkeit, dies mit dem `bind:this={dom_node}`-Direktiv zu tun. Wenn das Direktiv angegeben ist, weist Svelte, sobald die Komponente montiert und der DOM-Knoten erstellt wird, der angegebenen Variablen eine Referenz auf den DOM-Knoten zu.

Wir werden eine `nameEl`-Variable erstellen und sie mit `bind:this={nameEl}` an die Eingabe binden. Dann werden wir in `addTodo()`, nachdem das neue To-Do hinzugefügt wurde, `nameEl.focus()` aufrufen, um die Eingabe erneut zu fokussieren. Dasselbe werden wir tun, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt, mit der `onCancel()`-Funktion.

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

Probieren Sie die App aus: Geben Sie einen neuen To-Do-Namen in das `<input>`-Feld ein, drücken Sie <kbd>Tab</kbd>, um den Fokus auf die _Hinzufügen_-Schaltfläche zu legen, und drücken Sie dann <kbd>Enter</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie das Eingabefeld den Fokus wiedererlangt.

### Autofokus für unser Eingabefeld

Das nächste Feature, das wir zu unserer `NewTodo`-Komponente hinzufügen werden, ist ein `autofocus`-Prop, mit dem wir festlegen können, dass das `<input>`-Feld beim Laden der Seite fokussiert werden soll.

1. Unser erster Versuch sieht wie folgt aus: Versuchen wir, das `autofocus`-Prop hinzuzufügen und einfach `nameEl.focus()` aus dem `<script>`-Block aufzurufen. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen), um wie folgt auszusehen:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // reference to the name input DOM node

     if (autofocus) nameEl.focus();
   ```

2. Gehen Sie nun zurück zur `Todos`-Komponente und übergeben Sie das `autofocus`-Prop in den `<NewTodo>`-Komponentenaufruf, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. Wenn Sie Ihre App jetzt ausprobieren, sehen Sie, dass die Seite jetzt leer ist und in Ihrer DevTools-Webkonsole ein Fehler ähnlich `TypeError: nameEl is undefined` angezeigt wird.

Um zu verstehen, was hier passiert, sprechen wir etwas mehr über den [Lebenszyklus der Komponenten](https://learn.svelte.dev/tutorial/onmount), den wir vorhin erwähnt haben.

## Lebenszyklus der Komponenten und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode aus (also den `<script>`-Abschnitt der Komponente). In diesem Moment sind jedoch alle Knoten, die die Komponente bilden, nicht am DOM angehängt; tatsächlich existieren sie noch nicht einmal.

Wie können Sie also wissen, wann die Komponente bereits erstellt und im DOM montiert ist? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt wird, und endet, wenn sie zerstört wird. Es gibt eine Handvoll Funktionen, die es Ihnen ermöglichen, Code zu bestimmten Zeitpunkten während dieses Lebenszyklus auszuführen.

Diejenige, die Sie am häufigsten verwenden werden, ist `onMount()`, mit der wir eine Rückruffunktion ausführen können, sobald die Komponente im DOM montiert ist. Lassen Sie es uns ausprobieren und sehen, was mit der `nameEl`-Variablen passiert.

1. Fügen Sie zuerst die folgende Zeile am Anfang des `<script>`-Abschnitts von `NewTodo.svelte` hinzu:

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

3. Entfernen Sie nun die Zeile `if (autofocus) nameEl.focus()`, um den Fehler zu vermeiden, den wir vorher gesehen haben.
4. Die App wird jetzt wieder funktionieren, und Sie werden das folgende in Ihrer Konsole sehen:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen, ist `nameEl` während der Initialisierung der Komponente undefiniert, was Sinn ergibt, denn der `<input>`-Knoten existiert noch nicht. Nachdem die Komponente montiert wurde, weist Svelte dank des `bind:this={nameEl}`-Direktivs der Variablen `nameEl` eine Referenz auf den `<input>`-DOM-Knoten zu.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen `console.log()`/`onMount()`-Block, den Sie hinzugefügt haben, durch diesen:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie erneut zu Ihrer App, und Sie werden jetzt sehen, dass das `<input>`-Feld beim Laden der Seite fokussiert ist.

> [!NOTE]
> Sie können sich die anderen [Lebenszyklus-Funktionen in den Svelte-Dokumenten](https://svelte.dev/docs/svelte) ansehen, und Sie können sie in der [interaktiven Anleitung](https://learn.svelte.dev/tutorial/onmount) in Aktion sehen.

## Warten auf die Aktualisierung des DOM mit der `tick()`-Funktion

Jetzt werden wir uns um die Fokusmanagementdetails der `Todo`-Komponente kümmern. Zuerst möchten wir, dass das Bearbeitungs-`<input>` einer `Todo`-Komponente den Fokus erhält, wenn wir den Bearbeitungsmodus durch Klicken auf die _Bearbeiten_-Schaltfläche aufrufen. Auf die gleiche Weise, wie wir es zuvor gesehen haben, erstellen wir eine `nameEl`-Variable in `Todo.svelte` und rufen `nameEl.focus()` auf, nachdem die `editing`-Variable auf `true` gesetzt wurde.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie direkt unter Ihren `editing`- und `name`-Deklarationen eine `nameEl`-Variablendeklaration hinzu:

   ```js
   let nameEl; // reference to the name input DOM node
   ```

2. Aktualisieren Sie nun Ihre `onEdit()`-Funktion wie folgt:

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

4. Wenn Sie jedoch die aktualisierte App ausprobieren, erhalten Sie einen Fehler in der Art von "TypeError: nameEl is undefined" in der Konsole, wenn Sie die _Bearbeiten_-Schaltfläche eines To-Dos drücken.

Was passiert hier? Wenn Sie den Zustand einer Komponente in Svelte aktualisieren, wird das DOM nicht sofort aktualisiert. Stattdessen wartet es bis zur nächsten Mikroaufgabe, um zu sehen, ob es noch andere Änderungen gibt, die angewendet werden müssen, auch in anderen Komponenten. Auf diese Weise wird unnötige Arbeit vermieden, und der Browser kann Dinge effektiver bündeln.

In diesem Fall ist das Bearbeitungs-`<input>`, wenn `editing` `false` ist, nicht sichtbar, weil es im DOM nicht existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen unmittelbar danach, auf die Variable `nameEl` zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hier ist jedoch, dass Svelte das DOM noch nicht aktualisiert hat.

Eine Möglichkeit, dieses Problem zu lösen, besteht darin, [`setTimeout()`](/de/docs/Web/API/setTimeout) zu verwenden, um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern und Svelte die Gelegenheit zu geben, das DOM zu aktualisieren.

Probieren Sie das jetzt aus:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, aber sie ist ziemlich unelegant. Svelte bietet eine bessere Möglichkeit, diese Fälle zu handhaben. Die [`tick()`-Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Versprechen zurück, das aufgelöst wird, sobald alle ausstehenden Zustandsänderungen am DOM angewendet wurden (oder sofort, falls keine ausstehenden Zustandsänderungen vorliegen). Lassen Sie es uns jetzt ausprobieren.

1. Importieren Sie zuerst `tick` oben im `<script>`-Abschnitt neben Ihrem bestehenden Import:

   ```js
   import { tick } from "svelte";
   ```

2. Rufen Sie danach `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) aus einer [asyc-Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf; aktualisieren Sie `onEdit()` wie folgt:

   ```js
   async function onEdit() {
     editing = true; // enter editing mode
     await tick();
     nameEl.focus();
   }
   ```

3. Wenn Sie es jetzt ausprobieren, werden Sie feststellen, dass alles wie erwartet funktioniert.

> [!NOTE]
> Um ein weiteres Beispiel für die Verwendung von `tick()` zu sehen, besuchen Sie die [Svelte-Anleitung](https://learn.svelte.dev/tutorial/tick).

## Hinzufügen von Funktionalität zu HTML-Elementen mit dem `use:action`-Direktiv

Als Nächstes möchten wir, dass das Namen-`<input>` den gesamten Text automatisch bei Fokus auswählt. Außerdem möchten wir dies so entwickeln, dass es leicht auf jedes HTML-`<input>` wiederverwendet und auf deklarative Weise angewendet werden kann. Wir werden diese Anforderung als Ausrede nutzen, um eine sehr leistungsfähige Funktion zu zeigen, die Svelte uns bietet, um Funktionalität zu regulären HTML-Elementen hinzuzufügen: [Actions](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Eingabeknotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Um diese Funktion jedes Mal aufzurufen, wenn der Knoten fokussiert wird, benötigen wir einen Eventlistener wie:

```js
node.addEventListener("focus", (event) => node.select());
```

Und um Speicherlecks zu vermeiden, sollten wir außerdem die Funktion [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufrufen, wenn der Knoten zerstört wird.

> [!NOTE]
> All dies ist nur Standard-WebAPI-Funktionalität; nichts davon ist spezifisch für Svelte.

Wir könnten dies in unserer `Todo`-Komponente erreichen, wann immer wir das `<input>` zum DOM hinzufügen oder es daraus entfernen, aber wir müssten sehr vorsichtig sein, den Ereignis-Listener hinzuzufügen, nachdem der Knoten dem DOM hinzugefügt wurde, und ihn entfernen, bevor der Knoten aus dem DOM entfernt wird. Außerdem wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Aktionen ins Spiel. Grundsätzlich erlauben sie es uns, eine Funktion auszuführen, wann immer ein Element dem DOM hinzugefügt wird, und nach dessen Entfernung aus dem DOM.

In unserem unmittelbaren Anwendungsfall definieren wir eine Funktion namens `selectOnFocus()`, die einen Knoten als Parameter empfängt. Die Funktion fügt diesem Knoten einen Eventlistener hinzu, sodass, wenn er fokussiert wird, der Text ausgewählt wird. Dann gibt sie ein Objekt mit einer `destroy`-Eigenschaft zurück. Die `destroy`-Eigenschaft ist das, was Svelte ausführt, nachdem der Knoten aus dem DOM entfernt wurde. Hier entfernen wir den Listener, um sicherzustellen, dass wir kein Speicherleck hinterlassen.

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

2. Nun müssen wir dem `<input>` sagen, dass es diese Funktion mit dem [`use:action`](https://svelte.dev/docs/element-directives#use-action)-Direktiv verwenden soll:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit diesem Direktiv teilen wir Svelte mit, dass es diese Funktion ausführen soll, wobei der DOM-Knoten des `<input>` als Parameter übergeben wird, sobald die Komponente im DOM montiert wird. Es wird auch für die Ausführung der `destroy`-Funktion verantwortlich sein, wenn die Komponente aus dem DOM entfernt wird. Mit dem `use`-Direktiv kümmert sich Svelte für uns um den Lebenszyklus der Komponente.

   In unserem Fall würde unser `<input>` wie folgt aussehen: Aktualisieren Sie das erste Label/ Eingabepaar der Komponente (im Bearbeitungstemplate) wie folgt:

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

3. Probieren Sie es aus. Gehen Sie zu Ihrer App, drücken Sie auf die _Bearbeiten_-Schaltfläche eines To-Dos, dann <kbd>Tab</kbd>, um den Fokus vom `<input>` zu entfernen. Klicken Sie jetzt auf das `<input>`, und Sie werden sehen, dass der gesamte Texteingabeinhalt ausgewählt wird.

### Die Aktion wiederverwendbar machen

Lassen Sie uns jetzt diese Funktion wirklich über verschiedene Komponenten hinweg wiederverwendbar machen. `selectOnFocus()` ist einfach eine Funktion ohne Abhängigkeit von der `Todo.svelte`-Komponente, also können wir sie einfach in eine Datei extrahieren und von dort aus verwenden.

1. Erstellen Sie eine neue Datei, `actions.js`, im `src`-Ordner.
2. Geben Sie ihr folgenden Inhalt:

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

3. Importieren Sie es nun aus `Todo.svelte`; fügen Sie die folgende Import-Anweisung direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die Definition `selectOnFocus()` von `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwenden

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, verwenden wir sie in `NewTodo.svelte`.

1. Importieren Sie `selectOnFocus()` in dieser Datei ebenfalls aus `actions.js`:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie das `use:selectOnFocus`-Direktiv zum `<input>` hinzu, wie folgt:

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

Mit ein paar Zeilen Code können wir regulären HTML-Elementen Funktionalität auf sehr wiederverwendbare und deklarative Weise hinzufügen. Es erfordert nur ein `import` und ein kurzes Direktiv wie `use:selectOnFocus`, das klar seine Absicht beschreibt. Und wir können dies erreichen, ohne ein benutzerdefiniertes Wrapper-Element wie `TextInput`, `MyInput` oder Ähnliches zu erstellen. Darüber hinaus können Sie einem Element so viele `use:action`-Direktive hinzufügen, wie Sie möchten.

Außerdem mussten wir uns nicht mit `onMount()`, `onDestroy()` oder `tick()` auseinandersetzen — das `use`-Direktiv kümmert sich für uns um den Lebenszyklus der Komponente.

### Andere Verbesserungen von Aktionen

Im vorherigen Abschnitt, während der Arbeit mit den `Todo`-Komponenten, mussten wir uns mit `bind:this`, `tick()` und `async`-Funktionen beschäftigen, nur um unserem `<input>` den Fokus zu geben, sobald es dem DOM hinzugefügt wurde.

1. So können wir es stattdessen mit Aktionen umsetzen:

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. Und dann in unserem Markup müssen wir nur ein weiteres `use:`-Direktiv hinzufügen:

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. Unsere `onEdit()`-Funktion kann jetzt viel einfacher sein:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
   }
   ```

Als letztes Beispiel, bevor wir weitermachen, kehren wir zu unserer `Todo.svelte`-Komponente zurück und setzen den Fokus auf die _Bearbeiten_-Schaltfläche, nachdem der Benutzer _Speichern_ oder _Abbrechen_ gedrückt hat.

Wir könnten versuchen, unsere `focusOnInit`-Aktion noch einmal zu verwenden und `use:focusOnInit` zur _Bearbeiten_-Schaltfläche hinzuzufügen. Aber damit würden wir einen subtilen Fehler einführen. Wenn Sie ein neues To-Do hinzufügen, wird der Fokus auf die _Bearbeiten_-Schaltfläche des gerade hinzugefügten To-Dos gelegt. Das liegt daran, dass die `focusOnInit`-Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen — wir möchten, dass die _Bearbeiten_-Schaltfläche den Fokus nur erhält, wenn der Benutzer _Speichern_ oder _Abbrechen_ gedrückt hat.

1. Gehen Sie also zurück zu Ihrer `Todo.svelte`-Datei.
2. Zuerst erstellen wir eine Flagge namens `editButtonPressed` und initialisieren sie mit `false`. Fügen Sie das direkt unter Ihren anderen Variablendeklarationen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als nächstes werden wir die Funktionalität der _Bearbeiten_-Schaltfläche anpassen, um dieses Flag zu speichern, und erstellen die Aktion dafür. Aktualisieren Sie die `onEdit()`-Funktion wie folgt:

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

5. Schließlich verwenden wir die `focusEditButton`-Aktion für die _Bearbeiten_-Schaltfläche, so:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App erneut aus. An diesem Punkt wird jedes Mal, wenn die _Bearbeiten_-Schaltfläche dem DOM hinzugefügt wird, die `focusEditButton`-Aktion ausgeführt, aber sie wird der Schaltfläche nur den Fokus geben, wenn das `editButtonPressed`-Flag `true` ist.

> [!NOTE]
> Wir haben hier nur an der Oberfläche der Actions gekratzt. Actions können auch reaktive Parameter haben, und Svelte erlaubt es uns, zu erkennen, wenn sich einer dieser Parameter ändern. So können wir Funktionalität hinzufügen, die sich gut in das reaktive System von Svelte integriert. Für eine detailliertere Einführung in Actions sollten Sie sich das [Svelte-Interaktive-Tutorial](https://learn.svelte.dev/tutorial/actions) oder die [Svelte-`use:action`-Dokumentation](https://svelte.dev/docs/element-directives#use-action) ansehen.

## Komponentenbindung: Exponieren von Methoden und Variablen von Komponenten mit dem `bind:this={component}`-Direktiv

Es gibt noch eine Barrierefreieits-Unannehmlichkeit. Wenn der Benutzer die _Löschen_-Schaltfläche drückt, verschwindet der Fokus.

Das letzte Feature, das wir in diesem Artikel betrachten werden, besteht darin, den Fokus nach dem Löschen eines To-Dos auf die Statusüberschrift zu setzen.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, daher gibt es keinen klaren Kandidaten, der den Fokus erhalten soll. Wir haben die Statusüberschrift gewählt, weil sie sich in der Nähe der Liste der To-Dos befindet und es eine Möglichkeit ist, visuelles Feedback über die Entfernung der Aufgabe zu geben und zu zeigen, was für Bildschirmleser-Benutzer passiert ist.

Zuerst extrahieren wir die Statusüberschrift in ihre eigene Komponente.

1. Erstellen Sie eine neue Datei, `components/TodosStatus.svelte`.
2. Fügen Sie folgende Inhalte hinzu:

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

3. Importieren Sie die Datei am Anfang von `Todos.svelte`, indem Sie die folgende Import-Anweisung unter den anderen hinzufügen:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift in `Todos.svelte` durch einen Aufruf der `TodosStatus`-Komponente, indem das `todos` an sie als Prop übergeben wird, so:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Möchten Sie auch einige Aufräumarbeiten durchführen, indem Sie die `totalTodos`- und `completedTodos`-Variablen aus `Todos.svelte` entfernen. Entfernen Sie einfach die `$: totalTodos = …`- und `$: completedTodos = …`-Zeilen, und entfernen Sie auch die Referenz auf `totalTodos`, wenn wir `newTodoId` berechnen, und verwenden Sie stattdessen `todos.length`. Um dies zu tun, ersetzen Sie den Block, der mit `let newTodoId` beginnt, durch diesen:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet — wir haben gerade das letzte Stück Markup in seine eigene Komponente extrahiert.

Jetzt müssen wir einen Weg finden, um der `<h2>`-Statusbeschriftung den Fokus zu geben, nachdem ein To-Do entfernt wurde.

Bisher haben wir gesehen, wie Informationen über Props an eine Komponente gesendet werden können und wie eine Komponente mit ihrem Elternteil kommunizieren kann, indem sie Ereignisse aussendet oder bidirektionale Datenbindung verwendet. Das Kind könnte eine Referenz zum `<h2>`-Knoten `using bind:this={dom_node}` erhalten und es nach außen über die bidirektionale Datenbindung bereitstellen. Aber das würde die Kapselung der Komponente brechen; den Fokus darauf zu setzen, sollte ihre eigene Verantwortung sein.

Wir benötigen also, dass die `TodosStatus`-Komponente eine Methode bereitstellt, die von ihrem Elternteil aufgerufen werden kann, um ihr den Fokus zu geben. Es ist ein sehr häufiges Szenario, dass eine Komponente etwas Verhalten oder Informationen gegenüber dem Verbraucher bereitstellen muss; lassen Sie uns sehen, wie es mit Svelte erreicht werden kann.

Wir haben bereits gesehen, dass Svelte `export let varname = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Aber wenn Sie stattdessen eine `const`, `class`, oder `function` exportieren, ist sie außerhalb der Komponente schreibgeschützt. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props, und der Rest sind exportierte Werte:

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

Damit im Hinterkopf, lassen Sie uns zu unserem Anwendungsfall zurückkehren. Wir werden eine Funktion namens `focus()` erstellen, die den Fokus auf die `<h2>`-Überschrift setzt. Dazu benötigen wir eine `headingEl`-Variable, um die Referenz auf den DOM-Knoten zu halten, und wir müssen sie mit dem `<h2>`-Element mit `bind:this={headingEl}` verbinden. Unsere Fokusmethode führt einfach `headingEl.focus()` aus.

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

   Beachten Sie, dass wir ein `tabindex`-Attribut zur `<h2>` hinzugefügt haben, um zu ermöglichen, dass das Element programmgesteuert fokussiert wird.

   Wie wir bereits gesehen haben, gibt uns das `bind:this={headingEl}`-Direktiv eine Referenz auf den DOM-Knoten in der Variablen `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion bereitzustellen, die den Fokus auf die `<h2>`-Überschrift setzt.

   Wie kann der Elternteil auf diese exportierten Werte zugreifen? So wie Sie mit dem `bind:this={dom_node}`-Direktiv an DOM-Elemente binden können, können Sie auch an Komponenteninstanzen selbst mit `bind:this={component}` binden. Wenn Sie also `bind:this` auf ein HTML-Element anwenden, erhalten Sie eine Referenz auf den DOM-Knoten, und wenn Sie es auf eine Svelte-Komponente anwenden, erhalten Sie eine Referenz auf die Instanz dieser Komponente.

2. Um also an die Instanz von `TodosStatus` zu binden, erstellen wir zuerst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren `import`-Anweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Fügen Sie als Nächstes ein `bind:this={todosStatus}`-Direktiv zum Aufruf hinzu, wie folgt:

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. Jetzt können wir die `exportierte focus()`-Methode aus unserer `removeTodo()`-Funktion aufrufen:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
   }
   ```

5. Gehen Sie zurück zu Ihrer App. Jetzt, wenn Sie ein To-Do löschen, wird die Statusüberschrift fokussiert. Dies ist nützlich, um die Änderung der Anzahl der To-Dos sowohl sichtbaren als auch Bildschirmleser-Benutzern hervorzuheben.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir nicht einfach `TodosStatus.focus()` aufrufen? Möglicherweise haben Sie mehrere `TodosStatus`-Instanzen aktiv, daher benötigen Sie eine Möglichkeit, auf jede bestimmte Instanz zu verweisen. Deshalb müssen Sie eine Variable angeben, um jede spezifische Instanz zu binden.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, öffnen Sie Ihre Kopie unseres Repos auf folgende Weise:

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

In diesem Artikel haben wir alle erforderlichen Funktionen zu unserer App hinzugefügt und uns um eine Reihe von Barrierefreiheits- und Benutzerfreundlichkeitsproblemen gekümmert. Wir haben auch unsere App in handhabbare Komponenten unterteilt, von denen jede eine einzigartige Verantwortlichkeit hat.

In der Zwischenzeit haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie:

- Umgang mit Reaktivitätsproblemen beim Aktualisieren von Objekten und Arrays
- Arbeiten mit DOM-Knoten mithilfe von `bind:this={dom_node}` (Bindung von DOM-Elementen)
- Verwenden der `onMount()`-Funktion des Komponentenlebenszyklus
- Erzwingen, dass Svelte ausstehende Zustandsänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionalität zu HTML-Elementen auf wiederverwendbare und deklarative Weise mit dem `use:action`-Direktiv
- Zugriff auf Komponentenmethoden mit `bind:this={component}` (Binden von Komponenten)

Im nächsten Artikel werden wir sehen, wie man Stores verwendet, um zwischen Komponenten zu kommunizieren und unseren Komponenten Animationen hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
