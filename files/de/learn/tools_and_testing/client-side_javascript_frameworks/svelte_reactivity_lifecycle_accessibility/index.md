---
title: "Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir unserer To-Do-Liste weitere Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel werden wir die finalen Funktionen der App hinzufügen und unsere App weiter komponentisieren. Wir werden lernen, wie man mit Problemen der Reaktivität umgeht, die beim Aktualisieren von Objekten und Arrays auftreten. Um häufige Fallstricke zu vermeiden, müssen wir etwas tiefer in Svelte's Reaktivitätssystem eintauchen. Wir werden uns auch mit der Lösung einiger Fokusprobleme der Barrierefreiheit befassen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen vertraut sind und
          über Kenntnisse der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie einige fortgeschrittene Svelte-Techniken, um Probleme mit der Reaktivität zu lösen, Probleme mit der Tastaturzugänglichkeit im Zusammenhang mit dem Komponentenlebenszyklus zu lösen und mehr.
      </td>
    </tr>
  </tbody>
</table>

Wir werden uns auf einige Zugänglichkeitsprobleme konzentrieren, die das Fokusmanagement betreffen. Dazu werden wir einige Techniken zur Nutzung von DOM-Knoten und zur Ausführung von Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden. Wir werden auch sehen, wie man Ereignis-Listener an DOM-Elementen deklariert und bereinigt.

Wir müssen auch etwas über den Komponentenlebenszyklus lernen, um zu verstehen, wann diese DOM-Knoten in den DOM geladen und aus ihm entfernt werden, und wie wir auf sie zugreifen können. Wir werden auch die `action`-Richtlinie kennenlernen, die es uns ermöglicht, die Funktionalität von HTML-Elementen auf eine wiederverwendbare und deklarative Weise zu erweitern.

Schließlich werden wir noch ein wenig mehr über Komponenten lernen. Bisher haben wir gesehen, wie Komponenten Daten mithilfe von Props teilen und mit ihren Eltern über Ereignisse und bidirektionale Datenbindung kommunizieren können. Jetzt werden wir sehen, wie Komponenten auch Methoden und Variablen offenlegen können.

Die folgenden neuen Komponenten werden im Laufe dieses Artikels entwickelt:

- `MoreActions`: Zeigt die _Check All_ und _Remove Completed_ Buttons an und sendet die entsprechenden Ereignisse, um deren Funktionalität zu handhaben.
- `NewTodo`: Zeigt das `<input>`-Feld und den _Add_-Button zum Hinzufügen einer neuen Aufgabe an.
- `TodosStatus`: Zeigt die Statusüberschrift „x von y Elementen abgeschlossen“ an.

## Code zusammen mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den Code zusammen mit uns im REPL auszuführen, beginnen Sie bei

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Arbeiten an der MoreActions-Komponente

Jetzt werden wir die _Check All_ und _Remove Completed_ Buttons angehen. Erstellen Sie eine Komponente, die für die Anzeige der Buttons und das Senden der entsprechenden Ereignisse verantwortlich ist.

1. Erstellen Sie eine neue Datei, `components/MoreActions.svelte`.
2. Beim Klicken auf den ersten Button senden wir ein `checkAll` Ereignis, um anzuzeigen, dass alle Aufgaben überprüft/abgehakt werden sollen. Beim Klicken auf den zweiten Button senden wir ein `removeCompleted` Ereignis, um anzuzeigen, dass alle abgeschlossenen Aufgaben entfernt werden sollen. Fügen Sie den folgenden Inhalt in Ihre `MoreActions.svelte`-Datei ein:

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

   Wir haben auch eine `completed`-Variable hinzugefügt, um zwischen dem Überprüfen und Aufheben der Überprüfung aller Aufgaben umzuschalten.

3. Zurück in `Todos.svelte` werden wir unsere `MoreActions`-Komponente importieren und zwei Funktionen erstellen, um die von der `MoreActions`-Komponente gesendeten Ereignisse zu handhaben.

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

5. Gehen Sie nun zum unteren Bereich des `Todos.svelte` Markup-Abschnitts und ersetzen Sie das `<div class="btn-group">`-Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf der `MoreActions`-Komponente, wie folgt:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. OK, lass uns zurück in die App gehen und es ausprobieren. Sie werden feststellen, dass der _Remove Completed_-Button gut funktioniert, aber der _Check All_/_Uncheck All_-Button einfach stillschweigend versagt.

Um herauszufinden, was hier passiert, müssen wir etwas tiefer in das Svelte Reaktivitätssystem eintauchen.

## Reaktivitätsprobleme: Objekte und Arrays aktualisieren

Um zu sehen, was passiert, können wir das `todos`-Array aus der `checkAllTodos()`-Funktion in die Konsole protokollieren.

1. Aktualisieren Sie Ihre vorhandene `checkAllTodos()`-Funktion wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Gehen Sie zurück zu Ihrem Browser, öffnen Sie Ihre DevTools Konsole, und klicken Sie mehrmals _Check All_/_Uncheck All_.

Sie werden feststellen, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie die Taste drücken (die `completed`-Eigenschaften der `todo`-Objekte werden zwischen `true` und `false` umgeschaltet), aber Svelte weiß nichts davon. Das bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr nützlich sein wird.

Um herauszufinden, warum das passiert, müssen wir verstehen, wie Reaktivität in Svelte funktioniert, wenn Arrays und Objekte aktualisiert werden.

Viele Web-Frameworks verwenden die Virtual-DOM-Technik, um die Seite zu aktualisieren. Im Grunde genommen ist der virtuelle DOM eine im Arbeitsspeicher gespeicherte Kopie des Inhalts der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "echten" DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht es dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen im Allgemeinen unseren gesamten JavaScript-Code bei jeder Änderung erneut gegen diesen virtuellen DOM aus und wenden verschiedene Methoden an, um teure Berechnungen zwischenzuspeichern und die Ausführung zu optimieren. Sie machen kaum oder gar keine Versuche zu verstehen, was unser JavaScript-Code tut.

Svelte verwendet keine virtuelle DOM-Darstellung. Stattdessen analysiert und verarbeitet Svelte unseren Code, erstellt einen Abhängigkeitsbaum und generiert dann das erforderliche JavaScript, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Diese Herangehensweise generiert im Allgemeinen optimierten JavaScript-Code mit minimalem Overhead, hat jedoch auch seine Grenzen.

Manchmal kann Svelte Änderungen an beobachteten Variablen nicht erkennen. Denken Sie daran, dass Sie Svelte mitteilen müssen, dass sich eine Variable geändert hat, indem Sie ihr einen neuen Wert zuweisen. Eine einfache Regel zum Merken ist, dass der Name der aktualisierten Variable auf der linken Seite der Zuweisung erscheinen muss.

Zum Beispiel wird Svelte in dem folgenden Code-Snippet keine Bezüge zu `obj.foo.bar` aktualisieren, es sei denn, Sie folgen es mit `obj = obj`. Das liegt daran, dass Svelte Objektverweise nicht verfolgen kann, sodass wir es ausdrücklich darauf hinweisen müssen, dass sich `obj` durch die Ausgabe einer Zuweisung geändert hat.

> [!NOTE]
> Wenn `foo` eine Top-Level-Variable ist, können Sie Svelte leicht mitteilen, dass `obj` aktualisiert werden soll, wann immer `foo` geändert wird, indem Sie die folgende reaktive Anweisung verwenden: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und wann immer sich `foo` ändert, wird Svelte `obj = obj` ausführen.

In unserer `checkAllTodos()`-Funktion wird, wenn wir

```js
todos.forEach((t) => (t.completed = completed));
```

ausführen, Svelte `todos` nicht als verändert markieren, weil es nicht weiß, dass beim Aktualisieren unserer `t`-Variable innerhalb der `forEach()`-Methode auch das `todos`-Array verändern. Und das ergibt Sinn, denn ansonsten wäre Svelte mit dem Inneren der `forEach()`-Methode vertraut; das Gleiche wäre daher für jede Methode, die an jedes Objekt oder Array angehängt ist, wahr.

Es gibt jedoch verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle von ihnen beinhalten, der überwachten Variable einen neuen Wert zuzuweisen.

Wie wir bereits gesehen haben, könnten wir Svelte einfach mitteilen, die Variable mit einer Selbstzuweisung zu aktualisieren, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Dies wird das Problem lösen. Intern wird Svelte `todos` als geändert markieren und die scheinbar redundante Selbstzuweisung entfernen. Abgesehen davon, dass es merkwürdig aussieht, ist es vollkommen in Ordnung, diese Technik zu verwenden, und manchmal ist es der klarste Weg, es zu tun.

Wir könnten auch auf das `todos`-Array über den Index zugreifen, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen zu Eigenschaften von Arrays und Objekten — z. B. `obj.foo += 1` oder `array[i] = x` — arbeiten genauso wie Zuweisungen zu den Werten selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos`-Array geändert wird.

Eine weitere Lösung ist es, ein neues Array an `todos` zuzuweisen, das eine Kopie aller Aufgaben mit der `completed`-Eigenschaft entsprechend aktualisiert enthält, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode, die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jeder Aufgabe zurück, indem sie die [Sprich-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet und die Eigenschaft des abgeschlossenen Werts entsprechend überschreibt. Diese Lösung hat den zusätzlichen Vorteil, dass ein neues Array mit neuen Objekten zurückgegeben wird und die ursprüngliche Mutation des `todos`-Arrays vollständig vermieden wird.

> [!NOTE]
> Svelte ermöglicht es uns, verschiedene Optionen zu spezifizieren, die die Funktionsweise des Compilers beeinflussen. Die `<svelte:options immutable={true}/>` Option teilt dem Compiler mit, dass Sie versprechen, keine Objekte zu verändern. Dies erlaubt dem Compiler, weniger konservativ über das Überprüfen, ob sich Werte geändert haben, zu sein und einfacheren und performanteren Code zu generieren. Für weitere Informationen zu `<svelte:options>`, sehen Sie sich die [Svelte Options Dokumentation](https://svelte.dev/docs/special-elements#svelte-options) an.

All diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Mit einer dieser Techniken wird Svelte erkennen, dass unser `todos`-Array geändert wurde.

**Wählen Sie eine und aktualisieren Sie Ihre `checkAllTodos()`-Funktion nach Bedarf. Jetzt sollten Sie in der Lage sein, alle Ihre Aufgaben auf einmal zu überprüfen oder die Überprüfung aufzuheben. Probieren Sie es aus!**

## Unsere MoreActions-Komponente fertigstellen

Wir fügen unserer Komponente noch ein Detail bzgl. der Benutzerfreundlichkeit hinzu. Wir deaktivieren die Buttons, wenn keine Aufgaben zu bearbeiten sind. Um dies zu erstellen, erhalten wir das `todos`-Array als ein Prop und setzen die `disabled`-Eigenschaft jedes Buttons entsprechend.

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

   Wir haben auch eine reaktive `completedTodos`-Variable deklariert, um den _Remove Completed_-Button zu aktivieren oder zu deaktivieren.

2. Vergessen Sie nicht, das Prop in `MoreActions` von innerhalb `Todos.svelte` aus zu übergeben, wo das Komponenten verwendet wird:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Fokussierung auf die Details

Jetzt, da wir alle erforderlichen Funktionalitäten der App abgeschlossen haben, werden wir uns auf einige Zugänglichkeitsfunktionen konzentrieren, die die Benutzerfreundlichkeit unserer App sowohl für Tastaturnutzer als auch für Bildschirmlesegerätebenutzer verbessern werden.

In seinem aktuellen Zustand hat unsere App ein paar Tastaturzugänglichkeitsprobleme, die das Fokusmanagement betreffen. Schauen wir uns diese Probleme an.

## Tastaturzugänglichkeitsprobleme in unserer To-Do-App erkunden

Zurzeit werden Tastaturbenutzer feststellen, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder kohärent ist.

Wenn Sie auf das Eingabefeld oben in unserer App klicken, sehen Sie einen dicken Strichlinienrahmen um dieses Eingabefeld. Dieser Rahmen ist Ihr visuelles Indiz dafür, dass der Browser derzeit auf dieses Element fokussiert ist.

Wenn Sie ein Mausbenutzer sind, haben Sie möglicherweise diesen visuellen Hinweis übersprungen. Aber wenn Sie ausschließlich mit der Tastatur arbeiten, ist das Wissen, welches Steuerelement den Fokus hat, von entscheidender Bedeutung. Es sagt uns, welche Steuerung unsere Tastendrücke empfangen wird.

Wenn Sie die <kbd>Tab</kbd> Taste wiederholt drücken, sehen Sie, wie sich der Strichlinienfokusindikator zwischen allen fokussierbaren Elementen auf der Seite dreht. Wenn Sie den Fokus auf den _Edit_ Button bewegen und <kbd>Enter</kbd> drücken, verschwindet der Fokus plötzlich, und Sie können nicht mehr erkennen, welche Steuerung unsere Eingaben empfangen wird.

Darüber hinaus passiert nichts, wenn Sie die <kbd>Escape</kbd>- oder <kbd>Enter</kbd> Taste drücken. Und wenn Sie auf _Cancel_ oder _Save_ klicken, verschwindet der Fokus erneut. Für einen Benutzer, der nur mit der Tastatur arbeitet, wird dieses Verhalten bestenfalls verwirrend sein.

Wir möchten auch einige Benutzerfreundlichkeitsfunktionen hinzufügen, wie das Deaktivieren des _Save_ Buttons, wenn erforderliche Felder leer sind, das Geben des Fokus auf bestimmte HTML-Elemente oder das automatische Auswählen von Inhalten, wenn ein Texteingabefeld den Fokus erhält.

Um all diese Funktionen zu implementieren, benötigen wir einen programmgesteuerten Zugriff auf die DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir werden auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden müssen, um spezifische Aufgaben auszuführen, wenn das Steuerelement den Fokus erhält.

Das Problem ist, dass all diese DOM-Knoten von Svelte zur Laufzeit dynamisch erstellt werden. So müssen wir warten, bis sie erstellt und zum DOM hinzugefügt wurden, um sie zu nutzen. Dafür müssen wir etwas über den [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount) lernen, um zu verstehen, wann wir auf sie zugreifen können - mehr dazu später.

## Erstellen einer NewTodo-Komponente

Beginnen wir damit, unser neues Aufgabenformular in seine eigene Komponente auszulagern. Mit dem, was wir bisher wissen, können wir eine neue Komponenten-Datei erstellen und den Code so anpassen, dass ein `addTodo` Ereignis gesendet wird, das den Namen der neuen Aufgabe mit den zusätzlichen Details übergibt.

1. Erstellen Sie eine neue Datei, `components/NewTodo.svelte`.
2. Fügen Sie den folgenden Inhalt hinein:

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

   Hier binden wir das `<input>` an die `name` Variable mit `bind:value={name}` und deaktivieren den _Add_ Button, wenn sie leer ist (d. h. keinen Textinhalt enthält) mithilfe von `disabled={!name}`. Wir kümmern uns auch um die <kbd>Escape</kbd> Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}`. Immer wenn die <kbd>Escape</kbd> Taste gedrückt wird, führen wir `onCancel()` aus, welches einfach die `name` Variable bereinigt.

3. Nun müssen wir sie importieren und von innerhalb der `Todos` Komponente verwenden und die `addTodo()` Funktion aktualisieren, um den Namen der neuen Aufgabe zu empfangen.

   Fügen Sie die folgende Import-Anweisung unter den anderen innerhalb von `Todos.svelte` hinzu:

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. Und aktualisieren Sie die `addTodo()` Funktion so:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   `addTodo()` erhält jetzt den Namen der neuen Aufgabe direkt, sodass wir die `newTodoName` Variable nicht mehr brauchen, um ihr den Wert zu geben. Unsere `NewTodo` Komponente kümmert sich darum.

   > [!NOTE]
   > Die `{ name }` Syntax ist nur eine Kurzform für `{ name: name }`. Diese kommt von JavaScript selbst und hat nichts mit Svelte zu tun, abgesehen davon, dass sie einige Inspiration für Svelte's eigene Kurzformen gegeben hat.

5. Ersetzen Sie schließlich für diesen Abschnitt das NewTodo Formular-Markup mit einem Aufruf der `NewTodo` Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten mithilfe der `bind:this={dom_node}` Richtlinie

Jetzt möchten wir, dass das `<input>`-Element der `NewTodo` Komponente den Fokus jedes Mal neu erhält, wenn auf den _Add_ Button gedrückt wird. Dafür benötigen wir eine Referenz zum DOM-Knoten des Eingabefeldes. Svelte bietet eine Möglichkeit, dies mit der `bind:this={dom_node}` Richtlinie zu tun. Wenn sie angegeben wird, weist Svelte, sobald die Komponente geladen und der DOM-Knoten erstellt wurde, der angegebenen Variable eine Referenz zum DOM-Knoten zu.

Wir werden eine `nameEl`-Variable erstellen und sie mit `bind:this={nameEl}` an die Eingabe binden. Dann, in `addTodo()`, nachdem wir die neue Aufgabe hinzugefügt haben, rufen wir `nameEl.focus()` auf, um das `<input>` wieder zu fokussieren. Dasselbe tun wir, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt, mit der `onCancel()`-Funktion.

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

Probieren Sie die App aus: Geben Sie den Namen einer neuen Aufgabe in das `<input>`-Feld ein, drücken Sie <kbd>tab</kbd>, um den Fokus auf den _Add_-Button zu legen, und dann <kbd>Enter</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie das Eingabefeld den Fokus zurückgewinnt.

### Autofokus auf unserer Eingabe

Das nächste Feature, das wir unserer `NewTodo` Komponente hinzufügen werden, ist ein `autofocus` Prop, das uns erlaubt, anzugeben, dass wir möchten, dass das `<input>`-Feld beim Laden der Seite fokussiert wird.

1. Unser erster Versuch ist wie folgt: Versuchen Sie, das `autofocus`-Prop hinzuzufügen und einfach `nameEl.focus()` aus dem `<script>`-Block aufzurufen. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen) so, dass es wie folgt aussieht:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // reference to the name input DOM node

     if (autofocus) nameEl.focus();
   ```

2. Gehen Sie nun zurück zur `Todos`-Komponente und übergeben Sie das `autofocus`-Prop an die `<NewTodo>`-Komponenten-Aufruf, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. Wenn Sie Ihre App jetzt ausprobieren, werden Sie feststellen, dass die Seite jetzt leer ist, und in Ihrer DevTools-Webkonsole sehen Sie einen Fehler in der Art von: `TypeError: nameEl is undefined`.

Um zu verstehen, was hier passiert, lassen Sie uns etwas mehr über den [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount) sprechen, den wir früher erwähnt haben.

## Komponentenlebenszyklus und die `onMount()` Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode (das heißt, den `<script>`-Abschnitt der Komponente aus). Aber zu diesem Zeitpunkt sind alle Knoten, die die Komponente bilden, nicht an den DOM gebunden, tatsächlich existieren sie noch nicht einmal.

Wie können Sie also wissen, wann die Komponente bereits erstellt und im DOM geladen wurde? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt wird und endet, wenn sie zerstört wird. Es gibt eine Handvoll von Funktionen, die es Ihnen ermöglichen, Code zu entscheidenden Momenten während dieses Lebenszyklus auszuführen.

Die, die Sie am häufigsten verwenden werden, ist `onMount()`, die uns erlaubt, einen Rückruf auszuführen, sobald die Komponente im DOM geladen wurde. Lassen Sie es uns ausprobieren und sehen, was mit der `nameEl`-Variable passiert.

1. Fügen Sie zunächst die folgende Zeile zu Beginn des `<script>`-Abschnitts von `NewTodo.svelte` hinzu:

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

3. Entfernen Sie jetzt die Zeile `if (autofocus) nameEl.focus()`, um zu vermeiden, den Fehler auszulösen, den wir vorher gesehen haben.
4. Die App wird jetzt wieder funktionieren, und Sie sehen folgendes in Ihrer Konsole:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen können, ist `nameEl` während der Initialisierung der Komponente undefiniert, was Sinn macht, da der `<input>`-Knoten noch nicht einmal existiert. Nachdem die Komponente geladen wurde, weist Svelte, dank der `bind:this={nameEl}`-Richtlinie, der `nameEl`-Variable eine Referenz auf den `<input>`-DOM-Knoten zu.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen `console.log()`/`onMount()`-Block, den Sie hinzugefügt haben, mit diesem:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie erneut zu Ihrer App, und Sie werden jetzt sehen, dass das `<input>`-Feld beim Laden der Seite fokussiert ist.

> [!NOTE]
> Sie können einen Blick auf die anderen [Lebenszyklus-Funktionen in der Svelte-Dokumentation](https://svelte.dev/docs/svelte) werfen und sie in der Aktion im [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) sehen.

## Warten auf die Aktualisierung des DOM mit der `tick()` Funktion

Jetzt kümmern wir uns um die Fokussierungsdetails der `Todo`-Komponente. Zunächst möchten wir, dass eine `Todo`-Komponente `<input>`-Bearbeitung fokussiert wird, wenn wir den Bearbeitungsmodus durch Drücken seiner _Edit_ Taste betreten. In der gleichen Weise, wie wir es zuvor gesehen haben, werden wir eine `nameEl`-Variable innerhalb von `Todo.svelte` erstellen und `nameEl.focus()` aufrufen, nachdem die Variable `editing` auf `true` gesetzt wurde.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablendeklaration direkt unter Ihren Editing- und Namensdeklarationen hinzu:

   ```js
   let nameEl; // reference to the name input DOM node
   ```

2. Aktualisieren Sie nun Ihre `onEdit()` Funktion wie folgt:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
     nameEl.focus(); // set focus to name input
   }
   ```

3. Und schließlich binden Sie `nameEl` an das `<input>`-Feld, indem Sie es so aktualisieren:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. Aber wenn Sie die aktualisierte App ausprobieren, erhalten Sie einen Fehler in der Art von "TypeError: nameEl is undefined" in der Konsole, wenn Sie auf den _Edit_ Button einer Aufgabe klicken.

Was passiert hier? Wenn Sie in Svelte den Zustand einer Komponente aktualisieren, aktualisiert es das DOM nicht sofort. Stattdessen wartet es bis zur nächsten Mikroaufgabe, um zu sehen, ob es noch andere Änderungen gibt, die angewendet werden müssen, einschließlich in anderen Komponenten. Das vermeidet unnötige Arbeiten und erlaubt dem Browser, Dinge effektiver zu bündeln.

In diesem Fall, wenn `editing` `false` ist, ist das Bearbeitungs-`<input>` nicht sichtbar, weil es im DOM nicht existiert. In der `onEdit()`-Funktion setzen wir `editing = true` und versuchen sofort danach, auf die `nameEl`-Variable zuzugreifen und `nameEl.focus()` auszuführen. Das Problem ist hier, dass Svelte das DOM noch nicht aktualisiert.

Eine Möglichkeit, dieses Problem zu lösen, besteht darin, [`setTimeout()`](/de/docs/Web/API/setTimeout) zu verwenden, um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern und Svelte die Gelegenheit zu geben, das DOM zu aktualisieren.

Versuchen Sie dies jetzt:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, ist aber eher unelegant. Svelte bietet eine bessere Möglichkeit, mit diesen Fällen umzugehen. Die [`tick()` Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Versprechen zurück, das auflöst, sobald noch ausstehende Zustandsänderungen am DOM angewendet wurden (oder sofort, wenn keine ausstehenden Zustandsänderungen vorliegen). Lassen Sie es uns jetzt versuchen.

1. Importieren Sie zunächst `tick` am Anfang des `<script>`-Abschnitts zusammen mit Ihrem bestehenden Import:

   ```js
   import { tick } from "svelte";
   ```

2. Rufen Sie als nächstes `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) von einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf; aktualisieren Sie `onEdit()` wie folgt:

   ```js
   async function onEdit() {
     editing = true; // enter editing mode
     await tick();
     nameEl.focus();
   }
   ```

3. Wenn Sie es jetzt ausprobieren, werden Sie sehen, dass alles wie erwartet funktioniert.

> [!NOTE]
> Um ein weiteres Beispiel für die Verwendung von `tick()` zu sehen, besuchen Sie das [Svelte Tutorial](https://learn.svelte.dev/tutorial/tick).

## Hinzufügen von Funktionalität zu HTML-Elementen mit der `use:action`-Richtlinie

Als nächstes möchten wir, dass der Name `<input>` automatisch alle Texte bei Fokus auswählt. Darüber hinaus möchten wir diese Funktionalität so entwickeln, dass sie problemlos wiederverwendbar ist und auf ein beliebiges HTML-`<input>`-Feld angewendet werden kann. Wir werden dieses Bedürfnis als Vorwand nutzen, um eine sehr leistungsfähige Funktion zu zeigen, die Svelte uns bietet, um Funktionen zu regulären HTML-Elementen hinzuzufügen: [Aktionen](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Input-Knotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Um diese Funktion jedes Mal aufzurufen, wenn der Knoten fokussiert wird, benötigen wir einen Ereignis-Listener in dieser Art:

```js
node.addEventListener("focus", (event) => node.select());
```

Und um Speicherlecks zu vermeiden, sollten wir die [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) Funktion aufrufen, wenn der Knoten zerstört wird.

> [!NOTE]
> All dies ist nur Standard-WebAPI-Funktionalität; nichts hier ist spezifisch für Svelte.

Wir könnten all dies in unserer `Todo` Komponente erreichen, wann immer wir das `<input>` zum DOM hinzufügen oder aus ihm entfernen, aber wir müssten sehr vorsichtig sein, den Ereignis-Listener hinzuzufügen, nachdem der Knoten zum DOM hinzugefügt wurde, und den Listener zu entfernen, bevor der Knoten aus dem DOM entfernt wurde. Außerdem wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Aktionen ins Spiel. Im Wesentlichen lassen sie uns eine Funktion laufen, wann immer ein Element zum DOM hinzugefügt wird und danach aus dem DOM entfernt wird.

In unserem aktuellen Anwendungsfall werden wir eine Funktion namens `selectOnFocus()` definieren, die einen Knoten als Parameter empfängt. Die Funktion wird einen Ereignis-Listener zu diesem Knoten hinzufügen, sodass, wann immer dieser fokussiert wird, der Text ausgewählt wird. Dann wird sie ein Objekt mit einer `destroy`-Eigenschaft zurückgeben. Die `destroy`-Eigenschaft ist das, was Svelte ausführt, nachdem der Knoten aus dem DOM entfernt wurde. Hier werden wir den Listener entfernen, um sicherzustellen, dass wir kein Speicherleck hinterlassen.

1. Lasst uns die Funktion `selectOnFocus()` erstellen. Fügen Sie Folgendes ans Ende des `<script>`-Abschnitts von `Todo.svelte` hinzu:

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

2. Jetzt müssen wir dem `<input>` sagen, dass es diese Funktion verwenden soll, mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action) Richtlinie:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Richtlinie sagen wir Svelte, die Funktion auszuführen, indem wir den DOM-Knoten des `<input>` als Parameter übergeben, sobald die Komponente im DOM geladen ist. Es wird auch für die Ausführung der `destroy`-Funktion verantwortlich sein, wenn die Komponente aus dem DOM entfernt wird. So kümmert sich die `use`-Richtlinie um den Lebenszyklus der Komponente für uns.

   In unserem Fall endet unser `<input>` so: Aktualisieren Sie das erste Label/Input-Paar der Komponente (innerhalb der Bearbeitungsvorlage) wie folgt:

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

3. Probieren Sie es aus. Gehen Sie zu Ihrer App, drücken Sie den _Edit_ Knopf einer Aufgabe, dann <kbd>Tab</kbd>, um den Fokus vom `<input>` zu entfernen. Klicken Sie nun auf das `<input>` und Sie werden sehen, dass der gesamte Eingabetext ausgewählt wird.

### Die Aktion wiederverwendbar machen

Jetzt lassen Sie uns diese Funktion wirklich zwischen den Komponenten wiederverwendbar machen. `selectOnFocus()` ist nur eine Funktion ohne Abhängigkeit zur `Todo.svelte` Komponente, daher können wir sie einfach in eine Datei extrahieren und von dort aus nutzen.

1. Erstellen Sie eine neue Datei, `actions.js`, im Ordner `src`.
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

3. Importieren Sie es nun von innerhalb `Todo.svelte`; fügen Sie die folgende Import-Anweisung direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die Definition von `selectOnFocus()` aus `Todo.svelte`, da wir sie dort nicht mehr brauchen.

### Unsere Aktion wiederverwenden

Um die Wiederwendbarkeit unserer Aktion zu demonstrieren, lassen Sie uns sie in `NewTodo.svelte` verwenden.

1. Importieren Sie `selectOnFocus()` aus `actions.js` auch in diese Datei, wie zuvor:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie die `use:selectOnFocus`-Richtlinie zum `<input>` hinzu, so:

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

Mit nur wenigen Zeilen Code können wir regulären HTML-Elementen auf eine sehr wiederverwendbare und deklarative Weise Funktionalität hinzufügen. Es bedarf nur eines `import` und einer kurzen Direktive wie `use:selectOnFocus`, die ihren Zweck klar beschreibt. Und wir können dies erreichen, ohne die Notwendigkeit zu haben, ein individuelles Wrapper-Element wie `TextInput`, `MyInput` oder ähnlich zu erstellen. Darüber hinaus können Sie so viele `use:action`-Richtlinien wie gewünscht zu einem Element hinzufügen.

Auch mussten wir uns nicht mit `onMount()`, `onDestroy()` oder `tick()` herumschlagen - die `use`-Richtlinie kümmert sich um den Lebenszyklus der Komponente für uns.

### Andere Verbesserungen bei Aktionen

Im vorherigen Abschnitt, während wir mit den `Todo` Komponenten arbeiteten, mussten wir uns mit `bind:this`, `tick()` und `async` Funktionen herumschlagen, nur um den Fokus auf unser `<input>` zu legen, sobald es zum DOM hinzugefügt wurde.

1. So können wir es stattdessen mit Aktionen implementieren:

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. Und dann brauchen wir in unserem Markup nur eine weitere `use:`-Richtlinie hinzuzufügen:

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. Unsere `onEdit()` Funktion kann nun viel einfacher sein:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
   }
   ```

Als letztes Beispiel, bevor wir weitermachen, lassen Sie uns zurück zu unserer `Todo.svelte` Komponente gehen und dem _Edit_ Knopf den Fokus geben, nachdem der Benutzer auf _Save_ oder _Cancel_ gedrückt hat.

Wir könnten versuchen, unsere `focusOnInit` Aktion erneut zu verwenden, indem wir `use:focusOnInit` zum _Edit_ Button hinzufügen. Aber dabei würden wir einen subtilen Fehler einführen. Wenn Sie eine neue Aufgabe hinzufügen, wird der Fokus auf den _Edit_ Knopf der kürzlich hinzugefügten Aufgabe gesetzt. Das liegt daran, dass die `focusOnInit` Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen - wir wollen, dass der _Edit_ Knopf den Fokus nur erhält, wenn der Benutzer auf _Save_ oder _Cancel_ gedrückt hat.

1. Gehen Sie also zurück zu Ihrer `Todo.svelte` Datei.
2. Zuerst erstellen wir ein Flag namens `editButtonPressed` und initialisieren es auf `false`. Fügen Sie dies direkt unter Ihren anderen Variablendefinitionen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als nächstes ändern wir die Funktionalität des _Edit_ Buttons, um dieses Flag zu speichern und die Aktion dafür zu erstellen. Aktualisieren Sie die `onEdit()` Funktion wie folgt:

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

5. Schließlich verwenden wir die `focusEditButton` Aktion auf dem _Edit_ Button, so:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App erneut aus. Zu diesem Zeitpunkt wird jedes Mal, wenn der _Edit_ Button zum DOM hinzugefügt wird, die `focusEditButton` Aktion ausgeführt, aber sie wird nur dann den Fokus auf den Button legen, wenn das `editButtonPressed` Flag `true` ist.

> [!NOTE]
> Wir haben die Oberfläche der Aktionen hier kaum angekratzt. Aktionen können auch reaktive Parameter haben und Svelte lässt uns erkennen, wann sich irgendwelche dieser Parameter ändern. So können wir Funktionalität hinzufügen, die sich gut in das reaktive System von Svelte integriert. Für eine detailliertere Einführung zu Aktionen, betrachten Sie das [Svelte Interaktive Tutorial](https://learn.svelte.dev/tutorial/actions) oder die [Svelte `use:action` Dokumentation](https://svelte.dev/docs/element-directives#use-action).

## Komponentenbindung: Exponieren von Komponentenmethoden und -variablen mit der `bind:this={component}` Richtlinie

Es gibt noch eine Barrierefreiheitstörung. Wenn der Benutzer auf den _Delete_ Button drückt, verschwindet der Fokus.

Die letzte Funktion, die wir in diesem Artikel betrachten werden, besteht darin, den Fokus auf die Statusüberschrift zu setzen, nachdem eine Aufgabe gelöscht wurde.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, daher gibt es keinen klaren Kandidaten, der den Fokus erhält. Wir haben die Statusüberschrift ausgewählt, weil sie sich in der Nähe der Aufgabenliste befindet und ein visuelles Feedback über das Entfernen der Aufgabe gibt, sowie anzeigt, was den Nutzern von Bildschirmlesegeräten passiert ist.

Zuerst extrahieren wir die Statusüberschrift in ihre eigene Komponente.

1. Erstellen Sie eine neue Datei, `components/TodosStatus.svelte`.
2. Fügen Sie den folgenden Inhalt hinzu:

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

3. Importieren Sie die Datei am Anfang von `Todos.svelte`, indem Sie die folgende Import-Anweisung direkt unter den anderen hinzufügen:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift innerhalb `Todos.svelte` durch einen Aufruf der `TodosStatus` Komponente, indem Sie `todos` als Prop übergeben, so:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch etwas aufräumen und die Variablen `totalTodos` und `completedTodos` aus `Todos.svelte` entfernen. Entfernen Sie einfach die `$: totalTodos = ...` und `$: completedTodos = ...` Zeilen, und entfernen Sie auch den Verweis auf `totalTodos`, wenn wir `newTodoId` berechnen und verwenden `todos.length` stattdessen. Ersetzen Sie dazu den Block, der mit `let newTodoId` beginnt, durch diesen:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet - wir haben gerade das letzte Stück Markup in seine eigene Komponente extrahiert.

Jetzt müssen wir einen Weg finden, um der `<h2>`-Statusbeschriftung den Fokus zu geben, nachdem eine Aufgabe entfernt wurde.

Bisher haben wir gesehen, wie man Informationen über Props an eine Komponente sendet, und wie eine Komponente mit ihrem Elternteil kommunizieren kann, indem sie Ereignisse auslöst oder eine bidirektionale Datenbindung verwendet. Die Kindkomponente könnte eine Referenz zum `<h2>`-Knoten mit `bind:this={dom_node}` erhalten und sie nach außen mittels bidirektionaler Datenbindung freigeben. Aber wenn wir das tun, würde es die Kapselung der Komponente brechen; die Einstellung des Fokus darauf sollte ihre eigene Verantwortung sein.

Deshalb benötigen wir die `TodosStatus` Komponente, um eine Methode zu exponieren, die ihr Elternteil aufrufen kann, um ihr den Fokus zu geben. Es ist ein sehr häufiges Szenario, dass eine Komponente einige Verhalten oder Informationen dem Konsumenten zugänglich machen muss; lassen Sie uns sehen, wie man das mit Svelte erreicht.

Wir haben bereits gesehen, dass Svelte `export let varname = ...` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Aber wenn Sie anstelle von `let` einen `const`, `class` oder `function` exportieren, ist es von außen schreibgeschützt. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props, und der Rest sind exportierte Werte:

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

Bei Beachtung dessen, kehren wir zu unserem Anwendungsfall zurück. Wir erstellen eine Funktion namens `focus()`, die der `<h2>`-Überschrift den Fokus gibt. Dafür benötigen wir eine `headingEl`-Variable, um die Referenz zum DOM-Knoten zu halten, und wir müssen sie mit `bind:this={headingEl}` an das `<h2>`-Element binden. Unsere Fokusmethode wird einfach `headingEl.focus()` ausführen.

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

   Beachten Sie, dass wir `tabindex`-Attribut zu `<h2>` hinzugefügt haben, um dem Element zu ermöglichen den Fokus programmgesteuert zu erhalten.

   Wie wir zuvor gesehen haben, gibt uns die Verwendung von `bind:this={headingEl}`-Richtlinie eine Referenz auf den DOM-Knoten in der Variablen `headingEl`. Dann verwenden wir `export function focus()` um eine Funktion offenzulegen, die der `<h2>`-Überschrift den Fokus gibt.

   Wie können wir auf diese exportierten Werte vom Elternteil aus zugreifen? Genau wie Sie an DOM-Elemente mit der `bind:this={dom_node}`-Richtlinie binden können, können Sie auch an Instanzen von Komponenten selbst mit `bind:this={component}` binden. Wenn Sie also `bind:this` an einem HTML-Element verwenden, erhalten Sie eine Referenz zum DOM-Knoten, und wenn Sie es an einer Svelte-Komponente verwenden, erhalten Sie eine Referenz zur Instanz dieser Komponente.

2. Um an die Instanz von `TodosStatus` zu binden, erstellen wir zuerst eine `todosStatus` Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihre `import` Anweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Fügen Sie dann eine `bind:this={todosStatus}`-Richtlinie zum Aufruf hinzu, wie folgt:

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

5. Gehen Sie zurück zu Ihrer App. Wenn Sie jetzt eine Aufgabe löschen, wird die Status-Überschrift fokussiert. Dies ist nützlich, um die Änderung der Anzahl der Aufgaben sowohl für sehende Benutzer als auch für Nutzer von Bildschirmlesegeräten zu kennzeichnen.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir nicht einfach `TodosStatus.focus()` aufrufen? Sie könnten mehrere `TodosStatus`-Instanzen aktiv haben, sodass Sie einen Weg benötigen, um auf jede bestimmte Instanz zu verweisen. Deshalb müssen Sie eine Variable angeben, um jede spezifische Instanz zu binden.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie wie folgt auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir alle notwendigen Funktionalitäten zu unserer App hinzugefügt und auch eine Reihe von Barrierefreiheits- und Usability-Problemen gelöst. Wir haben auch unsere App in handhabbare Komponenten aufgeteilt, von denen jede eine einzigartige Verantwortung hat.

In der Zwischenzeit haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie:

- Umgang mit Reaktionsproblemen beim Aktualisieren von Objekten und Arrays
- Arbeiten mit DOM-Knoten mit `bind:this={dom_node}` (Bindung von DOM-Elementen)
- Verwenden der `onMount()`-Funktion des Komponentenlebenszyklus
- Erzwingen, dass Svelte ausstehende Zustandsänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionalität zu HTML-Elementen auf eine wiederverwendbare und deklarative Weise mit der `use:action`-Richtlinie
- Zugriff auf Komponentenmethoden mit `bind:this={component}` (Bindung von Komponenten)

Im nächsten Artikel werden wir sehen, wie man Stores verwendet, um zwischen Komponenten zu kommunizieren und wie man Animationen zu unseren Komponenten hinzufügt.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
