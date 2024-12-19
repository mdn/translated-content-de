---
title: "Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir unserer To-Do-Liste weitere Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel fügen wir die finalen Funktionen der App hinzu und teilen unsere App weiter in Komponenten auf. Wir werden lernen, wie man mit Reaktivitätsproblemen umgeht, die sich auf die Aktualisierung von Objekten und Arrays beziehen. Um häufige Fallen zu vermeiden, müssen wir tiefer in das Reaktivitätssystem von Svelte eintauchen. Außerdem werden wir uns mit der Lösung einiger Barrierefreiheitsprobleme im Bereich des Fokusmanagements beschäftigen und mehr.

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
          vertraut sind und über Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          >
          verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen Sie einige fortgeschrittene Svelte-Techniken im Zusammenhang mit der Lösung von Reaktivitätsproblemen, Problemen mit der Tastaturzugänglichkeit im Zusammenhang mit dem Komponentenlebenszyklus und mehr.
      </td>
    </tr>
  </tbody>
</table>

Wir konzentrieren uns auf einige Barrierefreiheitsprobleme im Zusammenhang mit dem Fokusmanagement. Dazu verwenden wir Techniken zum Zugriff auf DOM-Knoten und zur Ausführung von Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select). Wir lernen auch, wie man Event-Listener für DOM-Elemente deklariert und bereinigt.

Auch müssen wir ein wenig über den Komponentenlebenszyklus lernen, um zu verstehen, wann diese DOM-Knoten im DOM eingebaut und entfernt werden und wie wir auf sie zugreifen können. Wir werden auch über die `action`-Direktive lernen, die es uns ermöglicht, die Funktionalität von HTML-Elementen auf eine wiederverwendbare und deklarative Weise zu erweitern.

Schließlich lernen wir noch mehr über Komponenten. Bisher haben wir gesehen, wie Komponenten Daten mithilfe von `props` teilen und mit ihren Eltern durch Ereignisse und bidirektionale Datenbindung kommunizieren. Jetzt werden wir sehen, wie Komponenten auch Methoden und Variablen zur Verfügung stellen können.

Die folgenden neuen Komponenten werden im Verlauf dieses Artikels entwickelt:

- `MoreActions`: Zeigt die Schaltflächen _Alle auswählen_ und _Abgeschlossene entfernen_ an und löst die entsprechenden Ereignisse aus, die zur Handhabung ihrer Funktionalität erforderlich sind.
- `NewTodo`: Zeigt das `<input>`-Feld und die Schaltfläche _Hinzufügen_ zum Hinzufügen eines neuen To-Dos an.
- `TodosStatus`: Zeigt die Überschrift "x von y Aufgaben abgeschlossen" an.

## Coden Sie mit uns

### Git

Klone Sie das GitHub-Repo (falls Sie es noch nicht gemacht haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Stand der App zu erreichen, führen Sie aus

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

## Arbeit an der Komponente MoreActions

Nun werden wir uns um die Schaltflächen _Alle auswählen_ und _Abgeschlossene entfernen_ kümmern. Lassen Sie uns eine Komponente erstellen, die dafür zuständig ist, die Schaltflächen anzuzeigen und die entsprechenden Ereignisse auszulösen.

1. Erstellen Sie eine neue Datei, `components/MoreActions.svelte`.
2. Bei einem Klick auf die erste Schaltfläche wird ein `checkAll`-Ereignis ausgelöst, das signalisiert, dass alle To-Dos ausgewählt/abgewählt werden sollen. Bei einem Klick auf die zweite Schaltfläche wird ein `removeCompleted`-Ereignis ausgelöst, das signalisiert, dass alle abgeschlossenen To-Dos entfernt werden sollen. Fügen Sie den folgenden Inhalt in Ihre `MoreActions.svelte`-Datei ein:

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

3. Zurück in `Todos.svelte`, werden wir unsere `MoreActions`-Komponente importieren und zwei Funktionen erstellen, um die von der `MoreActions`-Komponente ausgelösten Ereignisse zu verarbeiten.

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

5. Gehen Sie nun zum Ende des Markup-Abschnitts von `Todos.svelte` und ersetzen Sie das `<div class="btn-group">`-Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf der `MoreActions`-Komponente, wie folgt:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. Gehen Sie zurück zur App und probieren Sie es aus. Sie werden feststellen, dass die Schaltfläche _Abgeschlossene entfernen_ einwandfrei funktioniert, aber die Schaltfläche _Alle auswählen_/_Abwählen_ einfach stillschweigend nicht funktioniert.

Um herauszufinden, was hier passiert, müssen wir etwas tiefer in die Svelte-Reaktivität eintauchen.

## Reaktivitätsprobleme: Aktualisierung von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos`-Array aus der `checkAllTodos()`-Funktion in der Konsole protokollieren.

1. Aktualisieren Sie Ihre bestehende `checkAllTodos()`-Funktion auf das Folgende:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Gehen Sie zurück zu Ihrem Browser, öffnen Sie die DevTools-Konsole und klicken Sie mehrmals auf _Alle auswählen_/_Abwählen_.

Sie werden bemerken, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie den Knopf drücken (die `completed`-Eigenschaften der `todo`-Objekte werden zwischen `true` und `false` umgeschaltet), aber Svelte ist sich dessen nicht bewusst. Das bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr nützlich sein wird.

Um herauszufinden, warum dies geschieht, müssen wir verstehen, wie Reaktivität in Svelte bei der Aktualisierung von Arrays und Objekten funktioniert.

Viele Web-Frameworks verwenden die Virtual-DOM-Technik, um die Seite zu aktualisieren. Im Grunde ist der virtuelle DOM eine im Speicher befindliche Kopie des Inhalts der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "echten" DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und erlaubt dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen standardmäßig im Grunde genommen unseren gesamten JavaScript-Code bei jeder Änderung erneut gegen diesen virtuellen DOM aus und wenden verschiedene Methoden an, um teure Berechnungen zwischenzuspeichern und die Ausführung zu optimieren. Sie versuchen kaum bis gar nicht zu verstehen, was unser JavaScript-Code tut.

Svelte verwendet keine virtuelle DOM-Darstellung. Stattdessen analysiert und untersucht es unseren Code, erstellt einen Abhängigkeitsbaum und generiert dann den erforderlichen JavaScript-Code, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz generiert in der Regel optimalen JavaScript-Code mit minimalem Overhead, hat jedoch auch seine Einschränkungen.

Manchmal kann Svelte Änderungen an beobachtbaren Variablen nicht erkennen. Denken Sie daran, dass Sie Svelte mitteilen müssen, dass eine Variable sich geändert hat, indem Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die Sie im Kopf behalten sollten, ist, dass **der Name der aktualisierten Variable auf der linken Seite der Zuordnung erscheinen muss.**

Zum Beispiel im folgenden Code:

```js
const foo = obj.foo;
foo.bar = "baz";
```

Svelte wird Referenzen auf `obj.foo.bar` nicht aktualisieren, es sei denn, Sie folgen es mit `obj = obj`. Das liegt daran, dass Svelte Objektverweise nicht verfolgen kann, sodass wir ihm explizit mitteilen müssen, dass sich `obj` geändert hat, indem wir eine Zuweisung durchführen.

> [!NOTE]
> Wenn `foo` eine Top-Level-Variable ist, können Sie Svelte einfach mitteilen, `obj` zu aktualisieren, wann immer `foo` sich ändert, mithilfe der folgenden reaktiven Anweisung: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und wann immer es sich ändert, wird Svelte `obj = obj` ausführen.

In unserer `checkAllTodos()`-Funktion, wenn wir ausführen:

```js
todos.forEach((t) => (t.completed = completed));
```

wird Svelte `todos` nicht als geändert markieren, weil es nicht weiß, dass wir, wenn wir unsere `t`-Variable innerhalb der `forEach()`-Methode aktualisieren, auch das `todos`-Array modifizieren. Und das ergibt Sinn, denn sonst wäre Svelte sich über das Innenleben der `forEach()`-Methode bewusst; dasselbe wäre also für jede Methode wahr, die an jedes Objekt oder Array angehängt ist.

Nichtsdestotrotz gibt es verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle betreffen die Zuweisung eines neuen Werts an die beobachtete Variable.

Wie wir bereits gesehen haben, könnten wir einfach Svelte mitteilen, die Variable mit einer Selbstzuweisung zu aktualisieren, so:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Dies wird das Problem lösen. Intern wird Svelte `todos` als geändert kennzeichnen und die scheinbar redundante Selbstzuweisung entfernen. Abgesehen von der Tatsache, dass es seltsam aussieht, ist es völlig in Ordnung, diese Technik zu verwenden, und manchmal ist es der prägnanteste Weg, es zu tun.

Wir könnten auch auf das `todos`-Array per Index zugreifen, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen an Eigenschaften von Arrays und Objekten — z.B. `obj.foo += 1` oder `array[i] = x` — funktionieren genauso wie Zuweisungen an die Werte selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos`-Array modifiziert wird.

Eine weitere Lösung besteht darin, ein neues Array an `todos` zuzuweisen, das eine Kopie aller To-Dos mit der entsprechend aktualisierten `completed`-Eigenschaft enthält, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode, welche ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jedes To-Dos zurück, indem sie die [Spreizsyntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet und die Eigenschaft des `completed`-Werts entsprechend überschreibt. Diese Lösung hat den zusätzlichen Vorteil, ein neues Array mit neuen Objekten zurückzugeben und die ursprüngliche `todos`-Array-Mutation völlig zu vermeiden.

> [!NOTE]
> Svelte erlaubt es uns, verschiedene Optionen anzugeben, die beeinflussen, wie der Compiler funktioniert. Die Option `<svelte:options immutable={true}/>` teilt dem Compiler mit, dass Sie versprechen, keine Objekte zu mutieren. Dies ermöglicht es, bei der Überprüfung, ob sich Werte geändert haben, weniger konservativ zu sein und einfacheren sowie leistungsfähigeren Code zu generieren. Weitere Informationen zu `<svelte:options>` finden Sie in der [Svelte-Optionen-Dokumentation](https://svelte.dev/docs/special-elements#svelte-options).

All diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Jede dieser Techniken ermöglicht es Svelte zu erkennen, dass unser `todos`-Array geändert wurde.

**Wählen Sie eine aus und aktualisieren Sie Ihre `checkAllTodos()`-Funktion entsprechend. Jetzt sollten Sie in der Lage sein, alle Ihre To-Dos auf einmal zu markieren und zu entmarkieren. Probieren Sie es aus!**

## Fertigstellen unserer MoreActions-Komponente

Wir werden unserem Element ein Usability-Detail hinzufügen. Wir deaktivieren die Schaltflächen, wenn keine Aufgaben zu bearbeiten sind. Dazu werden wir das `todos`-Array als Prop empfangen und die `disabled`-Eigenschaft jeder Schaltfläche entsprechend setzen.

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

2. Vergessen Sie nicht, das Prop innerhalb von `Todos.svelte` in `MoreActions` zu übergeben, wo die Komponente aufgerufen wird:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Fokus auf die Details

Nachdem wir alle erforderlichen Funktionen der App abgeschlossen haben, konzentrieren wir uns auf einige Barrierefreiheitsmerkmale, die die Benutzerfreundlichkeit unserer App sowohl für Tastaturnutzer als auch für Screenreader-Nutzer verbessern.

In ihrem aktuellen Zustand hat unsere App einige Probleme mit der Tastaturzugänglichkeit im Zusammenhang mit dem Fokusmanagement. Lassen Sie uns diese Probleme genauer betrachten.

## Erforschen von Problemen mit der Tastaturzugänglichkeit in unserer To-Do-App

Derzeit stellen Tastaturbenutzer fest, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder kohärent ist.

Wenn Sie auf das Eingabefeld oben in unserer App klicken, sehen Sie eine dicke, gestrichelte Umrandung um dieses Eingabefeld. Diese Umrandung ist Ihr visueller Indikator dafür, dass der Browser aktuell auf dieses Element fokussiert ist.

Wenn Sie ein Mausenutzer sind, haben Sie möglicherweise diesen visuellen Hinweis übersprungen. Aber wenn Sie ausschließlich mit der Tastatur arbeiten, ist es von entscheidender Bedeutung, dass man weiß, welches Steuerelement den Fokus hat. Es zeigt uns an, welches Steuerelement unsere Tastenanschläge empfangen wird.

Wenn Sie die <kbd>Tab</kbd>-Taste wiederholt drücken, sehen Sie den gestrichelten Fokusindikator zwischen allen fokussierbaren Elementen auf der Seite wechseln. Wenn Sie den Fokus auf die _Bearbeiten_-Schaltfläche bewegen und <kbd>Enter</kbd> drücken, verschwindet der Fokus plötzlich und Sie können nicht mehr feststellen, welches Steuerelement unsere Tastenanschläge empfangen wird.

Wenn Sie die <kbd>Escape</kbd>- oder <kbd>Enter</kbd>-Taste drücken, passiert außerdem nichts. Und wenn Sie auf _Abbrechen_ oder _Speichern_ klicken, verschwindet der Fokus erneut. Für einen Nutzer, der mit der Tastatur arbeitet, wird dieses Verhalten bestenfalls verwirrend sein.

Wir möchten auch einige Benutzerfreundlichkeitsmerkmale hinzufügen, wie das Deaktivieren der _Speichern_-Schaltfläche, wenn erforderliche Felder leer sind, das Fokussieren bestimmter HTML-Elemente oder das automatische Auswählen von Inhalten, wenn ein Texteingabefeld fokussiert wird.

Um all diese Funktionen zu implementieren, benötigen wir programmgesteuerten Zugang zu DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir müssen auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um spezifische Aufgaben auszuführen, wenn das Steuerelement den Fokus erhält.

Das Problem besteht darin, dass alle diese DOM-Knoten von Svelte zur Laufzeit dynamisch erstellt werden. Daher müssen wir warten, bis sie erstellt und dem DOM hinzugefügt wurden, um sie verwenden zu können. Dazu müssen wir etwas über den [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount) lernen, um zu verstehen, wann wir auf sie zugreifen können — mehr dazu später.

## Erstellen einer NewTodo-Komponente

Lassen Sie uns beginnen, unser neues To-Do-Formular in seine eigene Komponente zu extrahieren. Mit dem Wissen, das wir bisher haben, können wir eine neue Komponentendatei erstellen und den Code anpassen, um ein `addTodo`-Ereignis auszulösen und den Namen des neuen To-Dos mit den zusätzlichen Details zu übergeben.

1. Erstellen Sie eine neue Datei, `components/NewTodo.svelte`.
2. Fügen Sie die folgenden Inhalte hinzu:

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

   Hier binden wir das `<input>` an die `name`-Variable mit `bind:value={name}` und deaktivieren die _Hinzufügen_-Schaltfläche, wenn sie leer ist (d.h. keinen Textinhalt hat) mit `disabled={!name}`. Wir kümmern uns auch um die <kbd>Escape</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}}`. Wann immer die <kbd>Escape</kbd>-Taste gedrückt wird, führen wir `onCancel()` aus, das einfach die `name`-Variable bereinigt.

3. Jetzt müssen wir es aus der `Todos`-Komponente importieren und verwenden und die `addTodo()`-Funktion aktualisieren, um den Namen des neuen To-Dos zu empfangen.

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

   `addTodo()` empfängt jetzt den Namen des neuen To-Dos direkt, sodass wir die `newTodoName`-Variable nicht mehr benötigen, um ihr ihren Wert zu geben. Unsere `NewTodo`-Komponente kümmert sich darum.

   > [!NOTE]
   > Die `{ name }`-Syntax ist nur eine Abkürzung für `{ name: name }`. Diese stammt direkt aus JavaScript und hat nichts speziell mit Svelte zu tun, abgesehen davon, dass sie etwas Inspiration für Sveltes eigene Abkürzungen liefert.

5. Schließlich für diesen Abschnitt ersetzen Sie das NewTodo-Formular-Markup durch einen Aufruf zur `NewTodo`-Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten mithilfe der Direktive `bind:this={dom_node}`

Nun möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente jedes Mal, wenn die Schaltfläche _Hinzufügen_ gedrückt wird, den Fokus zurückerlangt. Dafür benötigen wir einen Verweis auf den DOM-Knoten des Eingabefelds. Svelte bietet eine Möglichkeit, dies mit der Direktive `bind:this={dom_node}` zu tun. Wenn angegeben, sobald die Komponente montiert ist und der DOM-Knoten erstellt wird, weist Svelte der angegebenen Variablen einen Verweis auf den DOM-Knoten zu.

Wir werden eine `nameEl`-Variable erstellen und sie mit `bind:this={nameEl}` an das Eingabefeld binden. Dann werden wir nach dem Hinzufügen des neuen To-Dos innerhalb von `addTodo()` `nameEl.focus()` aufrufen, um das `<input>`-Feld erneut zu fokussieren. Dasselbe werden wir tun, wenn der Nutzer die <kbd>Escape</kbd>-Taste drückt, mit der `onCancel()`-Funktion.

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

Probieren Sie die App aus: Geben Sie einen neuen To-Do-Namen in das `<input>`-Feld ein, drücken Sie <kbd>tab</kbd>, um den Fokus auf die _Hinzufügen_-Schaltfläche zu legen, und dann drücken Sie <kbd>Enter</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie das Eingabefeld den Fokus zurückerlangt.

### Automatisches Fokussieren unseres Eingabefelds

Die nächste Funktion wird unserem `NewTodo`-Komponente ein `autofocus`-Prop hinzufügen, um zu ermöglichen, dass das `<input>`-Feld beim Laden der Seite fokussiert wird.

1. Unser erster Versuch ist wie folgt: Fügen wir das `autofocus`-Prop hinzu und rufen Sie einfach `nameEl.focus()` aus dem `<script>`-Block auf. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen) so, dass er so aussieht:

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

3. Wenn Sie Ihre App jetzt ausprobieren, werden Sie sehen, dass die Seite jetzt leer ist und in Ihrer DevTools-Webkonsole eine Fehlermeldung erscheint, die etwa lautet: `TypeError: nameEl is undefined`.

Um zu verstehen, was hier passiert, sprechen wir mehr über den [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount), den wir bereits früher erwähnt haben.

## Komponentenlebenszyklus und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode (d. h. den `<script>`-Abschnitt der Komponente) aus. Aber in diesem Moment sind alle Knoten, die die Komponente ausmachen, noch nicht am DOM angebracht; tatsächlich existieren sie noch nicht einmal.

Also, wie können Sie wissen, wann die Komponente bereits erstellt und am DOM montiert ist? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt wird, und endet, wenn sie zerstört wird. Es gibt eine Handvoll Funktionen, die es Ihnen ermöglichen, Code zu entscheidenden Momenten während dieses Lebenszyklus auszuführen.

Diejenige, die Sie am häufigsten verwenden werden, ist `onMount()`, die es uns ermöglicht, einen Rückruf auszuführen, sobald die Komponente am DOM montiert ist. Lassen Sie uns das ausprobieren und sehen, was mit der `nameEl`-Variablen passiert.

1. Fügen Sie zu Beginn des `<script>`-Bereichs von `NewTodo.svelte` die folgende Zeile hinzu:

   ```js
   import { onMount } from "svelte";
   ```

2. Und diese Zeilen am Ende:

   ```js
   console.log("initializing:", nameEl);
   onMount(() => {
     console.log("mounted:", nameEl);
   });
   ```

3. Entfernen Sie nun die Zeile `if (autofocus) nameEl.focus()`, um den Fehler zu vermeiden, den wir zuvor gesehen haben.
4. Die App wird jetzt wieder funktionieren und Sie sehen im Konsole:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen können, ist während der Komponenteninitialisierung `nameEl` undefiniert, was Sinn macht, da der `<input>`-Knoten noch nicht existiert. Nachdem die Komponente montiert wurde, weist Svelte der `nameEl`-Variablen dank der `bind:this={nameEl}`-Direktive einen Verweis auf den `<input>`-DOM-Knoten zu.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen `console.log()`/`onMount()`-Block, den Sie hinzugefügt haben, durch dies:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie erneut zu Ihrer App und Sie werden nun sehen, dass das `<input>`-Feld beim Seitenaufruf fokussiert ist.

> [!NOTE]
> Sie können sich die anderen [Lebenszyklusfunktionen in der Svelte-Dokumentation](https://svelte.dev/docs/svelte) ansehen und sie im [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) in Aktion sehen.

## Warten auf die Aktualisierung des DOM mit der `tick()` Funktion

Nun kümmern wir uns um die Details des Fokusmanagements in der `Todo`-Komponente. Zuallererst möchten wir, dass ein `Todo`-Komponente das Bearbeitungs-`<input>` aktiviert, wenn wir den Bearbeitungsmodus betreten, indem wir seine _Bearbeiten_-Schaltfläche drücken. Auf die gleiche Weise, wie wir es zuvor gesehen haben, erstellen wir eine `nameEl`-Variable innerhalb von `Todo.svelte` und rufen `nameEl.focus()` auf, nachdem wir die `editing`-Variable auf `true` gesetzt haben.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablendeklaration direkt unter Ihre `editing`- und `name`-Deklarationen hinzu:

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

3. Und schließlich binden Sie `nameEl` an das `<input>`-Feld, indem Sie es folgendermaßen aktualisieren:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. Wenn Sie jedoch die aktualisierte App ausprobieren, erhalten Sie einen Fehler, der etwa so lautet: "TypeError: nameEl is undefined" in der Konsole, wenn Sie die _Bearbeiten_-Schaltfläche eines To-Dos drücken.

Also, was passiert hier? Wenn Sie einen Komponentenstatus in Svelte aktualisieren, aktualisiert es das DOM nicht sofort. Stattdessen wartet es bis zum nächsten Microtask, um zu sehen, ob es noch andere Änderungen gibt, die angewendet werden müssen, einschließlich in anderen Komponenten. Das tut es, um unnötige Arbeit zu vermeiden und dem Browser zu ermöglichen, die Dinge effizienter zu batchen.

In diesem Fall, wenn `editing` `false` ist, ist das Bearbeitungs-`<input>` nicht sichtbar, weil es nicht im DOM existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen sofort darauf, auf die `nameEl`-Variable zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hier ist, dass Svelte das DOM noch nicht aktualisiert hat.

Eine Möglichkeit, dieses Problem zu lösen, besteht darin, [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) zu verwenden, um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern und Svelte die Möglichkeit zu geben, das DOM zu aktualisieren.

Versuchen Sie dies jetzt:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, ist aber eher unelegant. Svelte bietet einen besseren Weg, um mit diesen Fällen umzugehen. Die [`tick()`-Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Statusänderungen auf das DOM angewendet wurden (oder sofort, wenn keine ausstehenden Statusänderungen vorliegen). Versuchen wir es jetzt.

1. Importieren Sie zunächst `tick` am Anfang des `<script>`-Bereichs neben Ihrem bestehenden Import:

   ```js
   import { tick } from "svelte";
   ```

2. Rufen Sie als Nächstes `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) von einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf; aktualisieren Sie `onEdit()` wie folgt:

   ```js
   async function onEdit() {
     editing = true; // enter editing mode
     await tick();
     nameEl.focus();
   }
   ```

3. Wenn Sie es jetzt ausprobieren, werden Sie sehen, dass alles wie erwartet funktioniert.

> [!NOTE]
> Um ein weiteres Beispiel der Verwendung von `tick()` zu sehen, besuchen Sie das [Svelte-Tutorial](https://learn.svelte.dev/tutorial/tick).

## Hinzufügen von Funktionalität zu HTML-Elementen mit der `use:action`-Direktive

Als nächstes möchten wir, dass der Name `input` automatisch den gesamten Text bei Fokus selektiert. Und wir möchten dies auf eine solche Weise entwickeln, dass es problemlos auf jedes HTML-`<input>` wiederverwendet und auf deklarativer Weise angewendet werden kann. Wir werden diese Anforderung als Vorwand nutzen, um ein sehr mächtiges Feature zu zeigen, das Svelte uns bietet, um Funktionalität zu regulären HTML-Elementen hinzuzufügen: [Actions](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Input-Knotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Um diese Funktion jedes Mal aufzurufen, wenn der Knoten den Fokus erhält, brauchen wir einen Event-Listener wie diesen:

```js
node.addEventListener("focus", (event) => node.select());
```

Und, um Speicherlecks zu vermeiden, sollten wir auch die Funktion [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufrufen, wenn der Knoten zerstört wird.

> [!NOTE]
> All dies ist nur Standard-WebAPI-Funktionalität; nichts davon ist spezifisch für Svelte.

Wir könnten all dies in unserer `Todo`-Komponente erreichen, wann immer wir das `<input>` zum DOM hinzufügen oder entfernen, aber wir müssten sehr vorsichtig sein, den Event-Listener nach dem Hinzufügen des Knotens zum DOM hinzuzufügen und den Listener zu entfernen, bevor der Knoten aus dem DOM entfernt wird. Darüber hinaus wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Actions ins Spiel. Im Wesentlichen lassen sie uns eine Funktion ausführen, wann immer ein Element dem DOM hinzugefügt wurde, und nachdem es vom DOM entfernt wurde.

In unserem unmittelbaren Anwendungsfall werden wir eine Funktion namens `selectOnFocus()` definieren, die einen Knoten als Parameter empfängt. Die Funktion wird einen Event-Listener zu diesem Knoten hinzufügen, sodass wann immer es den Fokus erhält, es den Text auswählt. Dann wird es ein Objekt mit einer `destroy`-Eigenschaft zurückgeben. Die `destroy`-Eigenschaft ist das, was Svelte nach dem Entfernen des Knotens aus dem DOM ausführt. Hier werden wir den Listener entfernen, um sicherzustellen, dass wir kein Speicherleck hinterlassen.

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

2. Jetzt müssen wir dem `<input>` sagen, dass es diese Funktion mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action)-Direktive verwenden soll:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Direktive sagen wir Svelte, dass es diese Funktion ausführen soll, indem es den DOM-Knoten des `<input>` als Parameter übergibt, sobald die Komponente am DOM montiert ist. Es wird auch für die Ausführung der `destroy`-Funktion verantwortlich sein, wenn die Komponente vom DOM entfernt wird. Damit erledigt die `use`-Direktive den Komponentenlebenszyklus für uns.

   In unserem Fall würde unser `<input>` so enden: Aktualisieren Sie das erste Label/Input-Paar der Komponente (innerhalb der Bearbeitungsvorlage) wie folgt:

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

3. Probieren Sie es aus. Gehen Sie zu Ihrer App, drücken Sie die _Bearbeiten_-Schaltfläche eines To-Dos, drücken Sie dann <kbd>Tab</kbd>, um den Fokus vom `<input>` wegzunehmen. Klicken Sie nun auf das `<input>`, und Sie werden sehen, dass der gesamte Eingabetext ausgewählt wird.

### Die Aktion wiederverwendbar machen

Machen wir diese Funktion nun wirklich über Komponenten hinweg wiederverwendbar. `selectOnFocus()` ist einfach eine Funktion ohne Abhängigkeit zur `Todo.svelte`-Komponente, sodass wir sie einfach in eine Datei extrahieren und von dort aus verwenden können.

1. Erstellen Sie eine neue Datei, `actions.js`, im `src`-Ordner.
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

3. Jetzt importieren Sie es von innerhalb `Todo.svelte`; fügen Sie die folgende Importanweisung direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die `selectOnFocus()`-Definition aus `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwendbar machen

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, verwenden wir sie in `NewTodo.svelte`.

1. Importieren Sie `selectOnFocus()` aus `actions.js` in diese Datei ebenfalls, wie zuvor:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie die `use:selectOnFocus`-Direktive zu dem `<input>` hinzu, so:

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

Mit wenigen Codezeilen können wir Funktionalität zu regulären HTML-Elementen auf eine sehr wiederverwendbare und deklarative Weise hinzufügen. Es braucht nur ein `import` und eine kurze Direktive wie `use:selectOnFocus`, die klar ihren Zweck beschreibt. Und das erreichen wir ohne die Notwendigkeit, ein benutzerdefiniertes Wrapper-Element wie `TextInput`, `MyInput` oder Ähnliches zu erstellen. Darüber hinaus können Sie einem Element so viele `use:action`-Direktiven hinzufügen, wie Sie möchten.

Auch mussten wir uns nicht mit `onMount()`, `onDestroy()` oder `tick()` auseinandersetzen — die `use`-Direktive kümmert sich für uns um den Komponentenlebenszyklus.

### Weitere Verbesserungen von Aktionen

Im vorherigen Abschnitt, während wir mit den `Todo`-Komponenten arbeiteten, mussten wir mit `bind:this`, `tick()`, und `async`-Funktionen umgehen, nur um dem `<input>` den Fokus zu geben, sobald es dem DOM hinzugefügt wurde.

1. So können wir es stattdessen mit Aktionen implementieren:

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. Und dann benötigen wir in unserer Markup nur eine weitere `use:`-Direktive:

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. Unsere `onEdit()`-Funktion kann jetzt viel einfacher sein:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
   }
   ```

Als letztes Beispiel, bevor wir weitermachen, gehen wir zurück zu unserer `Todo.svelte`-Komponente und geben der _Bearbeiten_-Schaltfläche den Fokus, nachdem der Benutzer auf _Speichern_ oder _Abbrechen_ gedrückt hat.

Wir könnten versuchen, einfach unsere `focusOnInit`-Aktion erneut zu verwenden, indem wir `use:focusOnInit` zur _Bearbeiten_-Schaltfläche hinzufügen. Aber dann würden wir einen subtilen Fehler einführen. Wenn Sie ein neues To-Do hinzufügen, wird der Fokus auf die _Bearbeiten_-Schaltfläche des kürzlich hinzugefügten To-Dos gelegt. Das passiert, weil die `focusOnInit`-Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen — wir wollen, dass die _Bearbeiten_-Schaltfläche nur dann den Fokus erhält, wenn der Benutzer auf _Speichern_ oder _Abbrechen_ gedrückt hat.

1. Gehen Sie zurück zu Ihrer `Todo.svelte`-Datei.
2. Zunächst erstellen wir ein Flag namens `editButtonPressed` und initialisieren es mit `false`. Fügen Sie dies direkt unter Ihren anderen Variablendefinitionen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als Nächstes modifizieren wir die Funktionalität der _Bearbeiten_-Schaltfläche, um dieses Flag zu speichern, und erstellen die Aktion dafür. Aktualisieren Sie die `onEdit()`-Funktion wie folgt:

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

5. Schließlich `use` wir die `focusEditButton`-Aktion auf der _Bearbeiten_-Schaltfläche, wie folgt:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App erneut aus. An diesem Punkt wird jedes Mal, wenn die _Bearbeiten_-Schaltfläche dem DOM hinzugefügt wird, die `focusEditButton`-Aktion ausgeführt, aber es wird nur dann dem Knopf den Fokus geben, wenn das `editButtonPressed`-Flag `true` ist.

> [!NOTE]
> Wir haben hier nur die Oberfläche von Aktionen gekratzt. Aktionen können auch reaktive Parameter haben, und Svelte lässt uns erkennen, wenn sich einer dieser Parameter ändert. So können wir Funktionalität hinzufügen, die sich gut in das reaktive System von Svelte einfügt. Für eine detailliertere Einführung in Aktionen sollten Sie das [interaktive Svelte-Tutorial](https://learn.svelte.dev/tutorial/actions) oder die [Svelte `use:action`-Dokumentation](https://svelte.dev/docs/element-directives#use-action) in Betracht ziehen.

## Komponentenbindung: Methoden und Variablen von Komponenten mit `bind:this={component}`-Direktive bereitstellen

Es gibt noch eine Barrierefreiheitsproblematik. Wenn der Nutzer die _Löschen_-Schaltfläche drückt, verschwindet der Fokus.

Die letzte Funktion, die wir in diesem Artikel betrachten werden, besteht darin, dass der Fokus auf die Statusüberschrift gesetzt wird, nachdem ein To-Do gelöscht wurde.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, daher gibt es keinen klaren Kandidaten, um den Fokus zu erhalten. Wir haben die Statusüberschrift gewählt, weil sie sich in der Nähe der To-Do-Liste befindet und eine Möglichkeit ist, visuelles Feedback über das Entfernen der Aufgabe zu geben sowie anzuzeigen, was für Screenreader-Benutzer passiert ist.

Zuerst werden wir die Statusüberschrift in ihre eigene Komponente extrahieren.

1. Erstellen Sie eine neue Datei, `components/TodosStatus.svelte`.
2. Fügen Sie die folgenden Inhalte hinzu:

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

3. Importieren Sie die Datei am Anfang von `Todos.svelte`, indem Sie die folgende Importanweisung unter den anderen hinzufügen:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift in `Todos.svelte` durch einen Aufruf der `TodosStatus`-Komponente und übergeben `todos` als Prop, so:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch ein wenig aufräumen, indem Sie die `totalTodos`- und `completedTodos`-Variablen aus `Todos.svelte` entfernen. Entfernen Sie einfach die Zeilen `$: totalTodos = …` und `$: completedTodos = …` und entfernen Sie auch den Verweis auf `totalTodos`, wenn wir `newTodoId` berechnen, und verwenden Sie stattdessen `todos.length`. Ersetzen Sie dazu den Block, der mit `let newTodoId` beginnt, durch diesen:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet — wir haben gerade das letzte Stück Markup in seine eigene Komponente extrahiert.

Jetzt müssen wir einen Weg finden, um der `<h2>`-Statusbeschreibung nach dem Entfernen eines To-Dos den Fokus zu geben.

Bisher haben wir gesehen, wie man Informationen über `props` an eine Komponente sendet und wie eine Komponente über Ereignisse oder bidirektionale Datenbindung mit ihrem Elternteil kommunizieren kann. Das Kind könnte eine Referenz auf den `<h2>`-Knoten mit `using bind:this={dom_node}` erhalten und ihn durch bidirektionale Datenbindung nach außen freigeben. Aber das würde die Komponentenkapselung brechen; den Fokus darauf zu setzen, sollte seine eigene Verantwortung sein.

Wir benötigen also, dass die `TodosStatus`-Komponente eine Methode bereitstellt, die Ihr Elternteil aufrufen kann, um den Fokus darauf zu legen. Es ist ein sehr häufiges Szenario, dass eine Komponente benötigt wird, um ein Verhalten oder Informationen für den Nutzer bereitzustellen; lassen Sie uns sehen, wie man dies mit Svelte erreichen kann.

Wir haben bereits gesehen, dass Svelte `export let varname = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Aber wenn Sie statt `let` ein `const`, `class` oder `function` exportieren, ist es von außen schreibgeschützt. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props und der Rest sind exportierte Werte:

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

Mit dem im Hinterkopf, lassen Sie uns zu unserem Anwendungsfall zurückkehren. Wir erstellen eine Funktion namens `focus()`, die der `<h2>`-Überschrift den Fokus gibt. Dafür benötigen wir eine `headingEl`-Variable, um den Referenz auf den DOM-Knoten zu halten, und wir müssen es an das `<h2>`-Element mit `bind:this={headingEl}` binden. Unsere Fokusmethode wird einfach `headingEl.focus()` ausführen.

1. Aktualisieren Sie die Inhalte von `TodosStatus.svelte` wie folgt:

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

   Beachten Sie, dass wir dem `<h2>` ein `tabindex`-Attribut hinzugefügt haben, um es zu ermöglichen, dass das Element den Fokus programmatisch erhält.

   Wie wir bereits gesehen haben, gibt uns die Verwendung der `bind:this={headingEl}`-Direktive einen Verweis auf den DOM-Knoten in der Variablen `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion bereitzustellen, die der `<h2>`-Überschrift den Fokus gibt.

   Wie können wir diese exportierten Werte von dem Elternteil aus erreichen? Genauso wie Sie mit der `bind:this={dom_node}`-Direktive DOM-Elemente binden können, können Sie auch Instanzen von Komponenten selbst mit `bind:this={component}` binden. Wenn Sie also `bind:this` bei einem HTML-Element verwenden, erhalten Sie eine Referenz auf den DOM-Knoten, und wenn Sie es bei einer Svelte-Komponente machen, erhalten Sie eine Referenz auf die Instanz dieser Komponente.

2. Um an die Instanz von `TodosStatus` zu binden, erstellen wir zuerst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren `import`-Anweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Fügen Sie als Nächstes eine `bind:this={todosStatus}`-Direktive dem Aufruf hinzu, wie folgt:

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. Jetzt können wir die `exportiert focus()`-Methode aus unserer `removeTodo()`-Funktion aufrufen:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
   }
   ```

5. Gehen Sie zurück zu Ihrer App. Jetzt, wenn Sie ein To-Do löschen, wird die Statusüberschrift fokussiert. Dies ist nützlich, um die Änderung der Anzahl der To-Dos sowohl für sehende Benutzer als auch für Benutzer von Screenreadern hervorzuheben.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir `TodosStatus.focus()` nicht einfach aufrufen? Sie könnten mehrere Instanzen von `TodosStatus` aktiv haben, sodass Sie einen Weg benötigen, um auf jede spezifische Instanz zu verweisen. Deshalb müssen Sie eine Variable festlegen, um jede spezifische Instanz zu binden.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos auf diese Weise zu:

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

In diesem Artikel haben wir alle erforderlichen Funktionen zu unserer App hinzugefügt und uns zusätzlich um mehrere Barrierefreiheits- und Usability-Probleme gekümmert. Wir haben auch unsere App in überschaubare Komponenten aufgeteilt, von denen jede eine eindeutige Verantwortung hat.

In der Zwischenzeit haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie:

- Umgang mit Reaktivitätsproblemen bei der Aktualisierung von Objekten und Arrays
- Arbeiten mit DOM-Knoten mit `bind:this={dom_node}` (DOM-Elementbindung)
- Verwendung der Komponentenlebenszyklusfunktion `onMount()`
- Erzwingen, dass Svelte ausstehende Statusänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionalität zu HTML-Elementen auf eine wiederverwendbare und deklarative Weise mit der `use:action`-Direktive
- Zugriff auf Methoden der Komponente mit `bind:this={component}` (Komponentenbindung)

Im nächsten Artikel werden wir sehen, wie man Stores verwendet, um zwischen Komponenten zu kommunizieren und wie man Animationen zu unseren Komponenten hinzufügt.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}
