---
title: "Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir unserer To-Do-Liste mehr Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter in Komponenten unterteilen. Wir werden lernen, wie man mit Reaktivitätsproblemen im Zusammenhang mit der Aktualisierung von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, müssen wir etwas tiefer in Sveltes Reaktivitätssystem eintauchen. Außerdem werden wir uns der Lösung einiger Probleme im Bereich der Barrierefreiheit widmen, insbesondere was den Fokus betrifft, und noch mehr.

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
          über Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
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
        Erlernen fortgeschrittener Svelte-Techniken zum Lösen von Reaktivitätsproblemen, Problemen in der Tastaturzugänglichkeit im Zusammenhang mit dem Lebenszyklus von Komponenten und mehr.
      </td>
    </tr>
  </tbody>
</table>

Wir konzentrieren uns auf einige Zugänglichkeitsprobleme im Zusammenhang mit der Fokusverwaltung. Dazu nutzen wir einige Techniken zum Zugriff auf DOM-Knoten und zum Ausführen von Methoden wie `focus()` und `select()`. Wir werden auch sehen, wie man Ereignis-Listener an DOM-Elementen deklarieren und aufräumen kann.

Wir müssen auch ein wenig über den Lebenszyklus von Komponenten lernen, um zu verstehen, wann diese DOM-Knoten in den DOM eingehängt und aus ihm entfernt werden und wie wir auf sie zugreifen können. Wir werden auch etwas über die `action`-Direktive lernen, die es uns ermöglicht, die Funktionalität von HTML-Elementen auf eine wiederverwendbare und deklarative Weise zu erweitern.

Schließlich werden wir noch mehr über Komponenten lernen. Bisher haben wir gesehen, wie Komponenten Daten mithilfe von Props austauschen und mit ihren Eltern über Events und bidirektionale Datenbindung kommunizieren können. Jetzt sehen wir, wie Komponenten auch Methoden und Variablen offenlegen können.

Die folgenden neuen Komponenten werden im Verlauf dieses Artikels entwickelt:

- `MoreActions`: Zeigt die Schaltflächen _Alle überprüfen_ und _Abgeschlossene entfernen_ an und sendet die entsprechenden Events, die für die Handhabung ihrer Funktionalität erforderlich sind.
- `NewTodo`: Zeigt das `<input>`-Feld und die _Hinzufügen_-Schaltfläche zum Hinzufügen einer neuen Aufgabe an.
- `TodosStatus`: Zeigt die Statusüberschrift "x von y Aufgaben abgeschlossen" an.

## Programmieren Sie mit

### Git

Klonen Sie das GitHub-Repository (falls noch nicht geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie Folgendes aus:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu programmieren, starten Sie hier:

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Arbeit an der MoreActions-Komponente

Nun kümmern wir uns um die Schaltflächen _Alle überprüfen_ und _Abgeschlossene entfernen_. Lassen Sie uns eine Komponente erstellen, die für die Anzeige der Schaltflächen und das Senden der entsprechenden Events verantwortlich ist.

1. Erstellen Sie eine neue Datei `components/MoreActions.svelte`.
2. Wenn die erste Schaltfläche angeklickt wird, senden wir ein `checkAll`-Ereignis, um zu signalisieren, dass alle Aufgaben überprüft/nicht überprüft werden sollen. Wenn die zweite Schaltfläche angeklickt wird, senden wir ein `removeCompleted`-Ereignis, um zu signalisieren, dass alle abgeschlossenen Aufgaben entfernt werden sollen. Fügen Sie den folgenden Inhalt in Ihre Datei `MoreActions.svelte` ein:

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

   Wir haben auch eine `completed`-Variable eingefügt, um zwischen dem Überprüfen und dem Nicht-Überprüfen aller Aufgaben umzuschalten.

3. Zurück in `Todos.svelte` importieren wir unsere `MoreActions`-Komponente und erstellen zwei Funktionen zur Handhabung der von der `MoreActions`-Komponente gesendeten Events.

   Fügen Sie unter den bestehenden Importen die folgende Importanweisung hinzu:

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

5. Gehen Sie nun zum unteren Bereich des `Todos.svelte`-Markup-Bereichs und ersetzen Sie das `<div class="btn-group">`-Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf der `MoreActions`-Komponente, wie folgt:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. OK, gehen Sie zurück in die App und probieren Sie es aus. Sie werden feststellen, dass die _Abgeschlossene entfernen_-Schaltfläche einwandfrei funktioniert, die _Alle überprüfen_/_Alle abwählen_-Schaltfläche jedoch einfach stillschweigend fehlschlägt.

Um herauszufinden, was hier passiert, müssen wir etwas tiefer in die Svelte-Reaktivität einsteigen.

## Reaktivitäts-Hintertüren: Aktualisierung von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos`-Array aus der `checkAllTodos()`-Funktion in die Konsole protokollieren.

1. Aktualisieren Sie Ihre bestehende `checkAllTodos()`-Funktion wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Kehren Sie zu Ihrem Browser zurück, öffnen Sie die Konsole der DevTools und klicken Sie ein paar Mal auf _Alle überprüfen_/_Alle abwählen_.

Sie werden feststellen, dass das Array erfolgreich aktualisiert wird, jedes Mal wenn Sie die Schaltfläche drücken (die `todo`-Objekteigenschaften `completed` werden zwischen `true` und `false` umgeschaltet), aber Svelte davon nichts bemerkt. Das bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr hilfreich sein wird.

Um herauszufinden, warum das passiert, müssen wir verstehen, wie Reaktivität in Svelte funktioniert, wenn Arrays und Objekte aktualisiert werden.

Viele Web-Frameworks verwenden die Technik des virtuellen DOM, um die Seite zu aktualisieren. Im Wesentlichen ist der virtuelle DOM eine im Speicher befindliche Kopie der Inhalte der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem „echten“ DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht es dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen standardmäßig im Wesentlichen unser gesamtes JavaScript bei jeder Änderung gegen diesen virtuellen DOM erneut aus und wenden verschiedene Methoden an, um teure Berechnungen zwischenzuspeichern und die Ausführung zu optimieren. Sie machen wenig bis gar keine Anstrengungen zu verstehen, was unser JavaScript tut.

Svelte verwendet keine virtuelle DOM-Darstellung. Stattdessen parst und analysiert es unseren Code, erstellt einen Abhängigkeitsbaum und generiert dann das erforderliche JavaScript, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz generiert normalerweise optimales JavaScript mit minimalem Overhead, hat aber auch seine Einschränkungen.

Manchmal kann Svelte Änderungen an überwachten Variablen nicht erkennen. Denken Sie daran, dass Sie Svelte mitteilen müssen, dass sich eine Variable geändert hat, indem Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die zu beachten ist, lautet: **Der Name der aktualisierten Variablen muss auf der linken Seite der Zuweisung stehen.**

Zum Beispiel im folgenden Codeschnipsel:

```js
const foo = obj.foo;
foo.bar = "baz";
```

Svelte wird keine Referenzen zu `obj.foo.bar` aktualisieren, es sei denn, Sie folgen ihm mit `obj = obj`. Das liegt daran, dass Svelte keine Objekt-Referenzen nachverfolgen kann, also müssen wir ihm ausdrücklich mitteilen, dass sich `obj` geändert hat, indem wir eine Zuweisung vornehmen.

> [!NOTE]
> Wenn `foo` eine Top-Level-Variable ist, können Sie Svelte einfach mitteilen, `obj` jedes Mal zu aktualisieren, wenn `foo` geändert wird, mit der folgenden reaktiven Anweisung: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und wann immer es sich ändert, führt Svelte `obj = obj` aus.

In unserer `checkAllTodos()`-Funktion läuft es folgendermaßen ab:

```js
todos.forEach((t) => (t.completed = completed));
```

Svelte markiert `todos` nicht als geändert, weil es nicht weiß, dass wir, wenn wir unsere `t` Variable in der `forEach()`-Methode aktualisieren, auch das `todos`-Array modifizieren. Und das macht Sinn, denn sonst wäre Svelte über die inneren Funktionsweisen der `forEach()`-Methode informiert; das Gleiche würde daher für jede Methode gelten, die an ein beliebiges Objekt oder Array angehängt ist.

Trotzdem gibt es verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle beinhalten die Zuweisung eines neuen Werts zur überwachten Variablen.

Wie wir bereits gesehen haben, könnten wir Svelte einfach mitteilen, die Variable mit einer Selbstzuweisung zu aktualisieren, so:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Dies löst das Problem. Intern markiert Svelte `todos` als geändert und entfernt die scheinbar redundante Selbstzuweisung. Abgesehen davon, dass es seltsam aussieht, ist es vollkommen in Ordnung, diese Technik zu verwenden, und manchmal ist es die prägnanteste Möglichkeit, es zu tun.

Wir könnten auch auf das `todos`-Array über den Index zugreifen, so:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen zu Eigenschaften von Arrays und Objekten — z. B. `obj.foo += 1` oder `array[i] = x` — funktionieren genauso wie Zuweisungen zu den Werten selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos`-Array modifiziert wird.

Eine andere Lösung besteht darin, dem `todos`-Array ein neues Array zuzuweisen, das eine Kopie aller Aufgaben enthält, bei denen die `completed`-Eigenschaft entsprechend aktualisiert wurde, so:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die `map()`-Methode, die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jeder Aufgabe unter Verwendung der Spread-Syntax zurück und überschreibt entsprechend die Eigenschaft des `completed`-Werts. Diese Lösung hat den zusätzlichen Vorteil, ein neues Array mit neuen Objekten zurückzugeben und das ursprüngliche `todos`-Array vollständig zu vermeiden.

> [!NOTE]
> Svelte erlaubt es uns, verschiedene Optionen anzugeben, die beeinflussen, wie der Compiler arbeitet. Die `<svelte:options immutable={true}/>`-Option sagt dem Compiler, dass Sie versprechen, keine Objekte zu mutieren. Dies ermöglicht es ihm, weniger konservativ hinsichtlich der Überprüfung, ob Werte geändert wurden, zu sein und einfacheren und leistungsfähigeren Code zu generieren. Für weitere Informationen zu `<svelte:options>` sehen Sie sich die [Svelte-Options-Dokumentation](https://svelte.dev/docs/special-elements#svelte-options) an.

Alle diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Jede dieser Techniken wird es Svelte ermöglichen zu bemerken, dass unser `todos`-Array geändert wurde.

**Wählen Sie eine und aktualisieren Sie Ihre `checkAllTodos()`-Funktion entsprechend. Jetzt sollten Sie alle Ihre To-Dos auf einmal überprüfen und abwählen können. Probieren Sie es aus!**

## Abschluss unserer MoreActions-Komponente

Wir fügen unserer Komponente ein Benutzbarkeitsdetail hinzu. Wir deaktivieren die Schaltflächen, wenn keine Aufgaben zu verarbeiten sind. Um dies zu erstellen, erhalten wir das `todos`-Array als Prop und setzen die `disabled`-Eigenschaft jeder Schaltfläche entsprechend.

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

2. Vergessen Sie nicht, das Prop in `MoreActions` von innerhalb `Todos.svelte`, wo die Komponente aufgerufen wird, zu übergeben:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: auf die Details fokussieren

Da wir nun alle erforderlichen Funktionen der App abgeschlossen haben, konzentrieren wir uns auf einige Zugänglichkeitsmerkmale, die die Benutzerfreundlichkeit unserer App für Tastaturnutzer und Nutzer von Bildschirmlesegeräten verbessern.

In seinem aktuellen Zustand hat unsere App ein paar Zugänglichkeitsprobleme mit der Tastatur, die den Fokus betreffen. Lassen Sie uns einen Blick auf diese Probleme werfen.

## Untersuchung der Zugänglichkeitsprobleme für die Tastatur in unserer To-Do-App

Derzeit werden Tastaturnutzer feststellen, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder kohärent ist.

Wenn Sie auf das Eingabefeld oben in unserer App klicken, sehen Sie einen dicken, gestrichelten Umriss um dieses Eingabefeld. Dieser Umriss ist Ihr visueller Indikator, dass der Browser aktuell auf dieses Element fokussiert ist.

Wenn Sie ein Mausbenutzer sind, haben Sie möglicherweise diesen visuellen Hinweis übersprungen. Aber wenn Sie ausschließlich mit der Tastatur arbeiten, ist es von größter Bedeutung zu wissen, welches Steuerelement im Fokus steht. Es zeigt uns an, welches Steuerelement unsere Tastenanschläge empfängt.

Wenn Sie die <kbd>Tab</kbd>-Taste wiederholt drücken, sehen Sie den gestrichelten Fokus-Indikator, der zwischen allen fokussierbaren Elementen auf der Seite kreist. Wenn Sie den Fokus auf die _Editieren_-Schaltfläche bewegen und die <kbd>Enter</kbd>-Taste drücken, verschwindet plötzlich der Fokus, und Sie können nicht mehr erkennen, welches Steuerelement unsere Tastenanschläge empfängt.

Darüber hinaus passiert nichts, wenn Sie die <kbd>Escape</kbd>- oder <kbd>Enter</kbd>-Taste drücken. Und wenn Sie auf _Abbrechen_ oder _Speichern_ klicken, verschwindet der Fokus wieder. Für einen Nutzer, der mit der Tastatur arbeitet, wird dieses Verhalten im besten Fall verwirrend sein.

Wir möchten auch einige Benutzbarkeitseigenschaften hinzufügen, wie das Deaktivieren der _Speichern_-Schaltfläche, wenn erforderliche Felder leer sind, das Fokussieren auf bestimmte HTML-Elemente oder das automatische Auswählen von Inhalten, wenn ein Texteingabefeld den Fokus erhält.

Um all diese Funktionen zu implementieren, benötigen wir programmgesteuerten Zugriff auf DOM-Knoten, um Funktionen wie `focus()` und `select()` auszuführen. Wir müssen auch `addEventListener()` und `removeEventListener()` verwenden, um bestimmte Aufgaben auszuführen, wenn das Steuerelement den Fokus erhält.

Das Problem ist, dass alle diese DOM-Knoten von Svelte zur Laufzeit dynamisch erstellt werden. Also müssen wir warten, bis sie erstellt und zu DOM hinzugefügt wurden, um sie zu verwenden. Dafür müssen wir den [Lebenszyklus der Komponente](https://learn.svelte.dev/tutorial/onmount) verstehen, um zu wissen, wann wir auf sie zugreifen können — mehr dazu später.

## Erstellen einer NewTodo-Komponente

Beginnen wir mit dem Auslagern unseres neuen Aufgabenformulars in eine eigene Komponente. Mit dem, was wir bisher wissen, können wir eine neue Komponenten-Datei erstellen und den Code so anpassen, dass ein `addTodo`-Event gesendet wird, das den Namen der neuen Aufgabe mit den zusätzlichen Details übergibt.

1. Erstellen Sie eine neue Datei `components/NewTodo.svelte`.
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

   Hier binden wir das `<input>` an die `name`-Variable mit `bind:value={name}` und deaktivieren die _Hinzufügen_-Schaltfläche, wenn es leer ist (d. h. kein Textinhalt) mit `disabled={!name}`. Außerdem kümmern wir uns um die <kbd>Escape</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}}`. Jedes Mal, wenn die <kbd>Escape</kbd>-Taste gedrückt wird, führen wir `onCancel()` aus, das einfach die `name`-Variable bereinigt.

3. Nun müssen wir es importieren und aus dem `Todos`-Komponent benutzen und die `addTodo()`-Funktion aktualisieren, um den Namen der neuen Aufgabe zu erhalten.

   Fügen Sie die folgende Importanweisung unter den anderen innerhalb `Todos.svelte` hinzu:

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. Und aktualisieren Sie die `addTodo()`-Funktion so:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   `addTodo()` erhält jetzt den Namen der neuen Aufgabe direkt, daher müssen wir die `newTodoName`-Variable nicht mehr verwenden, um ihr ihren Wert zu geben. Unsere `NewTodo`-Komponente übernimmt das.

   > [!NOTE]
   > Die `{ name }`-Syntax ist nur eine Kurzschreibweise für `{ name: name }`. Diese stammt aus JavaScript selbst und hat nichts spezifisch mit Svelte zu tun, außer als Inspiration für Sveltes eigene Kurzschreibweisen.

5. Ersetzen Sie abschließend für diesen Abschnitt das `NewTodo`-Formular-Markup durch einen Aufruf zur `NewTodo`-Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten mit der `bind:this={dom_node}`-Direktive

Jetzt möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente jedes Mal, wenn die _Hinzufügen_-Schaltfläche gedrückt wird, den Fokus wiedererhält. Dafür benötigen wir einen Verweis auf den DOM-Knoten des Eingabefeldes. Svelte bietet eine Möglichkeit, dies mit der `bind:this={dom_node}`-Direktive zu tun. Wenn angegeben, weist Svelte, sobald die Komponente montiert ist und der DOM-Knoten erstellt wurde, den angegebenen Variablen einen Verweis auf den DOM-Knoten zu.

Wir werden eine `nameEl`-Variable erstellen und sie mit `bind:this={nameEl}` an den Eingabebereich binden und in `addTodo()`, nachdem die neue Aufgabe hinzugefügt wurde, `nameEl.focus()` aufrufen, um das `<input>` erneut zu fokussieren. Wir machen dasselbe, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt, mit der `onCancel()`-Funktion.

Aktualisieren Sie den Inhalt der `NewTodo.svelte`-Datei so:

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

Probieren Sie die App aus: Geben Sie einen neuen Aufgabenname in das `<input>`-Feld ein, drücken Sie <kbd>tab</kbd>, um den Fokus auf die _Hinzufügen_-Schaltfläche zu lenken, und drücken Sie dann auf <kbd>Enter</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie das Eingabefeld den Fokus wiedererlangt.

### Automatisches Fokussieren unseres Eingabefeldes

Die nächste Funktion, die wir unserer `NewTodo`-Komponente hinzufügen werden, ist ein `autofocus`-Prop, das es uns ermöglicht, zu spezifizieren, dass das `<input>`-Feld beim Laden der Seite fokussiert wird.

1. Unser erster Versuch sieht folgendermaßen aus: Wir versuchen, das `autofocus`-Prop hinzuzufügen und einfach `nameEl.focus()` aus dem `<script>`-Block aufzurufen. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen), damit er so aussieht:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // reference to the name input DOM node

     if (autofocus) nameEl.focus();
   ```

2. Gehen Sie jetzt zurück zur `Todos`-Komponente und übergeben Sie das `autofocus`-Prop im Aufruf der `<NewTodo>`-Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. Wenn Sie Ihre App jetzt ausprobieren, werden Sie sehen, dass die Seite jetzt leer ist und in Ihrer DevTools-Webkonsole eine Fehlermeldung angezeigt wird, die in etwa so lautet: `TypeError: nameEl ist nicht definiert`.

Um zu verstehen, was hier passiert, sprechen wir noch etwas mehr über den [Lebenszyklus der Komponente](https://learn.svelte.dev/tutorial/onmount), den wir zuvor erwähnt haben.

## Komponenten-Lebenszyklus und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode aus (das ist der `<script>`-Abschnitt der Komponente). Aber in diesem Moment sind alle Knoten, aus denen die Komponente besteht, nicht an den DOM angehängt, und sie existieren tatsächlich noch nicht einmal.

Wie können Sie also wissen, wann die Komponente bereits erstellt und im DOM eingehängt wurde? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt wird und endet, wenn sie zerstört wird. Es gibt einige Funktionen, mit denen Sie Code zu wichtigen Momenten während dieses Lebenszyklus ausführen können.

Die Funktion, die Sie am häufigsten verwenden werden, ist `onMount()`, mit der wir ein Callback ausführen können, sobald die Komponente am DOM montiert wurde. Lassen Sie uns ausprobieren, was mit der `nameEl`-Variable passiert.

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

3. Jetzt entfernen Sie die Zeile `if (autofocus) nameEl.focus()`, um den Fehler, den wir zuvor gesehen haben, nicht auszulösen.
4. Die App wird nun wieder funktionieren, und Sie sehen das Folgende in Ihrer Konsole:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen können, ist während der Initialisierung der Komponente `nameEl` undefiniert, was Sinn ergibt, da der `<input>`-Knoten noch nicht einmal existiert. Nachdem die Komponente montiert wurde, weist Svelte dank der `bind:this={nameEl}`-Direktive die `nameEl`-Variable dem `<input>`-DOM-Knoten zu.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen `console.log()`/`onMount()`-Block, den Sie hinzugefügt haben, durch Folgendes:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie erneut zu Ihrer App, und Sie werden jetzt sehen, dass das `<input>`-Feld beim Laden der Seite fokussiert wird.

> [!NOTE]
> Sie können sich die anderen [Lebenszyklusfunktionen in den Svelte-Dokumenten](https://svelte.dev/docs/svelte) ansehen, und Sie können sie in Aktion in dem [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) sehen.

## Warten auf die DOM-Aktualisierung mit der `tick()`-Funktion

Jetzt kümmern wir uns um die Fokusverwaltungsdetails der `Todo`-Komponente. Zunächst möchten wir, dass das Bearbeitungs-`<input>` einer `Todo`-Komponente den Fokus erhält, wenn wir in den Bearbeitungsmodus wechseln, indem wir auf die _Bearbeiten_-Schaltfläche drücken. In der gleichen Weise, wie wir es zuvor gesehen haben, erstellen wir eine `nameEl`-Variable innerhalb `Todo.svelte` und rufen `nameEl.focus()` auf, nachdem wir die `editing`-Variable auf `true` gesetzt haben.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablen-Deklaration direkt unter Ihren Bearbeitungs- und Namenserklärungen hinzu:

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

3. Und zuletzt binden Sie `nameEl` an das `<input>`-Feld, indem Sie es so aktualisieren:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. Wenn Sie jedoch die aktualisierte App ausprobieren, erhalten Sie einen Fehler in der Konsole in der Art von "TypeError: nameEl ist undefiniert", wenn Sie auf die _Bearbeiten_-Schaltfläche einer Aufgabe drücken.

Was passiert also hier? Wenn Sie den Zustand einer Komponente in Svelte aktualisieren, wird der DOM nicht sofort aktualisiert. Stattdessen wartet es bis zum nächsten Mikrotask, um zu sehen, ob es noch andere Änderungen gibt, die angewendet werden müssen, einschließlich in anderen Komponenten. Dadurch wird unnötige Arbeit vermieden und der Browser kann Dinge effektiver stapeln.

In diesem Fall, wenn `editing` false ist, ist das Bearbeitungs-`<input>` nicht sichtbar, weil es nicht im DOM existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen sofort danach, auf die `nameEl`-Variable zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hier ist, dass Svelte den DOM noch nicht aktualisiert hat.

Eine Möglichkeit, dieses Problem zu lösen, besteht darin, `setTimeout()` zu verwenden, um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern und Svelte die Gelegenheit zu geben, den DOM zu aktualisieren.

Versuchen Sie dies jetzt:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, ist jedoch recht unelegant. Svelte bietet eine bessere Möglichkeit, mit diesen Fällen umzugehen. Die `tick()`-Funktion gibt ein Versprechen zurück, das aufgelöst wird, sobald alle ausstehenden Statusänderungen auf den DOM angewendet wurden (oder sofort, wenn keine ausstehenden Statusänderungen vorliegen). Lassen Sie es uns jetzt ausprobieren.

1. Importieren Sie zunächst `tick` am Anfang des `<script>`-Abschnitts neben Ihrem bestehenden Import:

   ```js
   import { tick } from "svelte";
   ```

2. Rufen Sie anschließend `tick()` mit `await` aus einer asynchronen Funktion auf; aktualisieren Sie `onEdit()` wie folgt:

   ```js
   async function onEdit() {
     editing = true; // enter editing mode
     await tick();
     nameEl.focus();
   }
   ```

3. Wenn Sie es jetzt ausprobieren, werden Sie sehen, dass alles wie erwartet funktioniert.

> [!NOTE]
> Um ein weiteres Beispiel mit `tick()` zu sehen, besuchen Sie das [Svelte-Tutorial](https://learn.svelte.dev/tutorial/tick).

## Hinzufügen von Funktionalität zu HTML-Elementen mit der `use:action`-Direktive

Als nächstes möchten wir, dass der Name-`<input>` automatisch den gesamten Text auswählt, wenn er den Fokus erhält. Zudem möchten wir dies so entwickeln, dass es einfach auf jedes HTML-`<input>` wiederverwendet und auf eine deklarative Weise angewendet werden kann. Wir werden diese Anforderung als Vorwand nutzen, um ein sehr leistungsfähiges Feature zu zeigen, das Svelte uns bietet, um Funktionen zu regulären HTML-Elementen hinzuzufügen: [Aktionen](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Eingabefeld-Knotens auszuwählen, müssen wir `select()` aufrufen. Um diese Funktion jedes Mal auszuführen, wenn der Knoten den Fokus erhält, benötigen wir einen Ereignis-Listener, der so aussieht:

```js
node.addEventListener("focus", (event) => node.select());
```

Und um einen Speicherverlust zu vermeiden, sollten wir auch `removeEventListener()` aufrufen, wenn der Knoten entfernt wird.

> [!NOTE]
> All dies ist nur standardmäßige WebAPI-Funktionalität; nichts hier ist spezifisch für Svelte.

Wir könnten all dies in unserer `Todo`-Komponente durchführen, wann immer wir das `<input>` zu DOM hinzufügen oder daraus entfernen, aber wir müssten sehr darauf achten, den Ereignis-Listener hinzuzufügen, nachdem der Knoten zu DOM hinzugefügt wurde, und den Listener zu entfernen, bevor der Knoten aus dem DOM entfernt wird. Darüber hinaus wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Aktionen ins Spiel. Im Grunde ermöglichen sie es uns, eine Funktion jedes Mal auszuführen, wenn ein Element zu DOM hinzugefügt wurde, und nach dessen Entfernung aus DOM.

In unserem unmittelbaren Anwendungsfall definieren wir eine Funktion `selectOnFocus()`, die einen Knoten als Parameter empfängt. Die Funktion fügt diesem Knoten einen Ereignis-Listener hinzu, sodass jedes Mal, wenn er den Fokus erhält, der Text ausgewählt wird. Dann gibt sie ein Objekt mit einer `destroy`-Eigenschaft zurück. Die `destroy`-Eigenschaft ist das, was Svelte ausführt, nachdem der Knoten aus DOM entfernt wurde. Hier werden wir den Listener entfernen, um sicherzustellen, dass wir keinen Speicherverlust hinterlassen.

1. Lassen Sie uns die Funktion `selectOnFocus()` erstellen. Fügen Sie Folgendes am Ende des `<script>`-Abschnitts von `Todo.svelte` hinzu:

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

2. Jetzt müssen wir dem `<input>` sagen, dass es diese Funktion mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action)-Direktive verwendet:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Direktive weisen wir Svelte an, diese Funktion auszuführen und den DOM-Knoten des `<input>` als Parameter zu übergeben, sobald die Komponente an DOM montiert wurde. Es wird auch dafür verantwortlich sein, die `destroy`-Funktion auszuführen, wenn die Komponente aus DOM entfernt wird. Mit der `use`-Direktive kümmert sich Svelte also um den Lebenszyklus der Komponente für uns.

   In unserem Fall sieht das `<input>` am Ende so aus: Aktualisieren Sie das erste Label/Eingabe-Paar der Komponente (innerhalb der Bearbeitungsvorlage) wie folgt:

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

3. Probieren Sie es aus. Gehen Sie zu Ihrer App, drücken Sie die _Bearbeiten_-Taste einer Aufgabe, und drücken Sie dann <kbd>Tab</kbd>, um den Fokus vom `<input>` zu entfernen. Klicken Sie nun auf das `<input>`, und Sie werden sehen, dass der gesamte Texteingang ausgewählt ist.

### Die Aktion wiederverwendbar machen

Machen wir diese Funktion nun wirklich über Komponenten hinweg wiederverwendbar. `selectOnFocus()` ist nur eine Funktion ohne Abhängigkeit von der `Todo.svelte`-Komponente, also können wir sie einfach in eine Datei extrahieren und von dort aus verwenden.

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

3. Importieren Sie sie nun in `Todo.svelte`; fügen Sie die folgende Importanweisung direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Entfernen Sie die Definition von `selectOnFocus()` aus `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwenden

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, werden wir sie in `NewTodo.svelte` verwenden.

1. Importieren Sie `selectOnFocus()` aus `actions.js` ebenfalls in dieser Datei:

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

Mit ein paar Codezeilen können wir regulären HTML-Elementen Funktionen auf eine sehr wiederverwendbare und deklarative Weise hinzufügen. Es erfordert nur einen Import und eine kurze Direktive wie `use:selectOnFocus`, die ihren Zweck klar beschreibt. Und das können wir erreichen, ohne ein benutzerdefiniertes Wrapper-Element wie `TextInput`, `MyInput` oder ähnliches zu erstellen. Außerdem, Sie können so viele `use:action`-Direktiven wie Sie möchten zu einem Element hinzufügen.

Auch mussten wir uns nicht mit `onMount()`, `onDestroy()` oder `tick()` herumschlagen — die `use`-Direktive übernimmt für uns den Lebenszyklus der Komponente.

### Weitere Verbesserungen der Aktionen

Im vorherigen Abschnitt, während wir mit den `Todo`-Komponenten arbeiteten, mussten wir mit `bind:this`, `tick()` und `async`-Funktionen umgehen, nur um dem `<input>` den Fokus zu geben, sobald es zum DOM hinzugefügt wurde.

1. So können wir dies stattdessen mit Aktionen implementieren:

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. Dann müssen wir in unserem Markup nur noch eine weitere `use:`-Direktive hinzufügen:

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. Unsere `onEdit()`-Funktion kann jetzt viel einfacher sein:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
   }
   ```

Als letztes Beispiel, bevor wir fortfahren, kehren wir zu unserer `Todo.svelte`-Komponente zurück und geben der _Bearbeiten_-Schaltfläche den Fokus, nachdem der Benutzer _Speichern_ oder _Abbrechen_ gedrückt hat.

Wir könnten versuchen, unsere `focusOnInit`-Aktion erneut zu verwenden, indem wir der _Bearbeiten_-Schaltfläche `use:focusOnInit` hinzufügen. Aber wir würden ein subtiles Problem einführen. Wenn Sie eine neue Aufgabe hinzufügen, wird der Fokus auf die _Bearbeiten_-Schaltfläche der neu hinzugefügten Aufgabe gesetzt. Dies liegt daran, dass die Aktion `focusOnInit` beim Erstellen der Komponente ausgeführt wird.

Das ist nicht das, was wir wollen — wir möchten, dass die _Bearbeiten_-Schaltfläche den Fokus nur erhält, wenn der Benutzer _Speichern_ oder _Abbrechen_ gedrückt hat.

1. Kehren Sie also zu Ihrer `Todo.svelte`-Datei zurück.
2. Zuerst erstellen wir ein Flag namens `editButtonPressed` und initialisieren es auf `false`. Fügen Sie dies direkt unter Ihren anderen Variablendeklarationen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als nächstes ändern wir die Funktionalität der _Bearbeiten_-Schaltfläche, um dieses Flag zu speichern und die Aktion dafür zu erstellen. Aktualisieren Sie die `onEdit()`-Funktion wie folgt:

   ```js
   function onEdit() {
     editButtonPressed = true; // user pressed the Edit button, focus will come back to the Edit button
     editing = true; // enter editing mode
   }
   ```

4. Fügen Sie unterhalb davon die folgende Definition von `focusEditButton()` hinzu:

   ```js
   const focusEditButton = (node) => editButtonPressed && node.focus();
   ```

5. Schließlich verwenden wir die `focusEditButton`-Aktion auf der _Bearbeiten_-Schaltfläche, wie folgt:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App noch einmal aus. Zu diesem Zeitpunkt wird jedes Mal, wenn die _Bearbeiten_-Schaltfläche zum DOM hinzugefügt wird, die Aktion `focusEditButton` ausgeführt, aber sie wird nur dann den Fokus auf die Schaltfläche legen, wenn das `editButtonPressed`-Flag `true` ist.

> [!NOTE]
> Wir haben hier nur an der Oberfläche von Aktionen gekratzt. Aktionen können auch reaktive Parameter haben und Svelte erlaubt es uns zu erkennen, wann sich einer dieser Parameter ändert. So können wir Funktionen hinzufügen, die sich gut mit dem Svelte-reaktiven System integrieren. Für eine detailliertere Einführung in Aktionen sollten Sie das [Svelte-Interaktive-Tutorial](https://learn.svelte.dev/tutorial/actions) oder die [Svelte `use:action`-Dokumentation](https://svelte.dev/docs/element-directives#use-action) in Betracht ziehen.

## Komponentenbindung: Exponieren von Methoden und Variablen einer Komponente mit der `bind:this={component}`-Direktive

Es gibt immer noch eine barrierefreie Unannehmlichkeit. Wenn der Benutzer die _Löschen_-Schaltfläche drückt, verschwindet der Fokus.

Die letzte Funktion, die wir in diesem Artikel betrachten werden, beinhaltet es den Fokus auf die Statusüberschrift zu setzen, nachdem eine Aufgabe gelöscht wurde.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, daher gibt es keinen klaren Kandidaten, der den Fokus erhalten sollte. Wir haben die Statusüberschrift ausgewählt, weil sie sich in der Nähe der Aufgabenliste befindet und es ist eine Möglichkeit, ein visuelles Feedback über das Entfernen der Aufgabe zu geben sowie zu kommunizieren, was Bildschirmleser-Nutzern passiert ist.

Zuerst werden wir die Statusüberschrift in eine eigene Komponente auslagern.

1. Erstellen Sie eine neue Datei `components/TodosStatus.svelte`.
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

3. Importieren Sie die Datei am Anfang von `Todos.svelte` und fügen Sie die folgende Importanweisung unter den anderen hinzu:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift innerhalb `Todos.svelte` durch einen Aufruf der `TodosStatus`-Komponente, geben Sie `todos` als Prop an, wie folgt:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch etwas aufräumen, indem Sie die `totalTodos`- und `completedTodos`-Variablen aus `Todos.svelte` entfernen. Entfernen Sie einfach die `$: totalTodos = …`- und die `$: completedTodos = …`-Zeilen und entfernen Sie auch den Verweis auf `totalTodos`, wenn wir `newTodoId` berechnen und stattdessen verwenden Sie `todos.length`. Dazu ersetzen Sie den Block, der mit `let newTodoId` beginnt, mit diesem:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet — wir haben gerade den letzten Teil des Markups in eine eigene Komponente extrahiert.

Jetzt müssen wir einen Weg finden, den Fokus auf das `<h2>` Statusetikett zu setzen, nachdem eine Aufgabe entfernt wurde.

Bisher haben wir gesehen, wie man Informationen über Props an eine Komponente sendet und wie eine Komponente mit ihrem Elternteil kommunizieren kann, indem sie Events auslöst oder die bidirektionale Datenbindung verwendet. Die Kindkomponente könnte eine Referenz auf den `<h2>`-Knoten erhalten, indem `bind:this={dom_node}` verwendet wird und ihn dann mit der bidirektionalen Datenbindung nach außen exponieren. Aber dadurch würde die Kapselung der Komponente gebrochen werden; den Fokus darauf zu setzen, sollte seine eigene Verantwortung sein.

Wir benötigen also, dass die `TodosStatus`-Komponente eine Methode offenlegt, die ihr Elternteil aufrufen kann, um den Fokus dorthin zu setzen. Es ist ein sehr häufiges Szenario, dass eine Komponente benötigt wird, um Verhalten oder Informationen an den Verbraucher zu offenbaren; lassen Sie uns sehen, wie wir dies mit Svelte erreichen können.

Wir haben bereits gesehen, dass Svelte `export let variablename = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Aber wenn Sie stattdessen `export` mit `const`, `class` oder `function` verwenden, ist es außerhalb der Komponente schreibgeschützt. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props, der Rest sind exportierte Werte:

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

Mit diesem Wissen kehren wir zu unserem Anwendungsfall zurück. Wir werden eine Funktion `focus()` erstellen, die den Fokus auf die `<h2>`-Überschrift setzt. Dazu benötigen wir eine `headingEl`-Variable, um den Verweis auf den DOM-Knoten zu speichern. Wir müssen es an das `<h2>`-Element binden, indem wir `bind:this={headingEl}` verwenden. Unsere Fokus-Methode führt einfach `headingEl.focus()` aus.

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

   Beachten Sie, dass wir ein `tabindex`-Attribut dem `<h2>` hinzugefügt haben, um dem Element zu ermöglichen, programmatisch den Fokus zu erhalten.

   Wie wir bereits gesehen haben, gibt uns die `bind:this={headingEl}`-Direktive eine Referenz auf den DOM-Knoten in der Variable `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion auszusetzen, die den Fokus auf die `<h2>`-Überschrift legt.

   Wie können wir auf diese exportierten Werte vom Elternteil zugreifen? Genau wie Sie auf DOM-Elemente mit der `bind:this={dom_node}`-Direktive binden können, können Sie auch auf Komponenten-Instanzen selbst mit `bind:this={component}` binden. Wenn Sie `bind:this` auf einem HTML-Element verwenden, erhalten Sie also einen Verweis auf den DOM-Knoten, und wenn Sie es auf eine Svelte-Komponente anwenden, erhalten Sie ein Verweis auf die Instanz dieser Komponente.

2. Um also auf die Instanz von `TodosStatus` zu binden, erstellen wir zuerst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren Importanweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Fügen Sie als nächstes eine `bind:this={todosStatus}`-Direktive dem Aufruf hinzu, wie folgt:

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

5. Gehen Sie zurück zu Ihrer App. Wenn Sie jetzt irgendein To-Do löschen, wird die Statusüberschrift fokussiert. Dies ist nützlich, um die Änderung der Anzahl der Aufgaben sowohl den sichtbaren Nutzern als auch den Nutzern von Bildschirmlesegeräten hervorzuheben.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir nicht einfach `TodosStatus.focus()` aufrufen? Sie könnten mehrere `TodosStatus`-Instanzen aktiv haben, daher benötigen Sie eine Möglichkeit, jede bestimmte Instanz zu referenzieren. Deshalb müssen Sie eine Variable angeben, um jede spezifische Instanz zu binden.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir die erforderliche Funktionalität unserer App fertiggestellt, und eine Reihe von Zugänglichkeits- und Benutzbarkeitsproblemen behandelt. Wir haben auch unsere App in verwaltbare Komponenten aufgeteilt, von denen jede eine einzigartige Verantwortung hat.

Zwischendurch haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie:

- Umgang mit Reaktivitäts-Hintertüren bei der Aktualisierung von Objekten und Arrays
- Arbeiten mit DOM-Knoten mit `bind:this={dom_node}` (Binding von DOM-Elementen)
- Verwendung der Komponentenlebenszyklusfunktion `onMount()`
- Erzwingen, dass Svelte ausstehende Statusänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionen zu HTML-Elementen auf eine wiederverwendbare und deklarative Weise mit der `use:action`-Direktive
- Zugriff auf Methoden von Komponenten mit `bind:this={component}` (Binding von Komponenten)

Im nächsten Artikel sehen wir uns an, wie wir Stores verwenden, um zwischen Komponenten zu kommunizieren, und fügen unseren Komponenten Animationen hinzu.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
