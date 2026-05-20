---
title: "Erweitertes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Svelte Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Im letzten Artikel haben wir unserer To-do-Liste mehr Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter in Komponenten zerlegen. Wir werden lernen, wie man mit Problemen der Reaktivität im Zusammenhang mit der Aktualisierung von Objekten und Arrays umgeht. Um häufige Fallstricke zu vermeiden, müssen wir tiefer in das Reaktivitätssystem von Svelte eintauchen. Wir werden uns auch mit der Lösung einiger Barrierefreiheit-Fokusprobleme befassen und mehr.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >
          haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen einiger fortgeschrittener Svelte-Techniken zur Lösung von Reaktivitätsproblemen,
        Problemen der Tastaturzugänglichkeit im Zusammenhang mit dem Lebenszyklus von Komponenten und mehr.
      </td>
    </tr>
  </tbody>
</table>

Wir werden uns auf einige Zugänglichkeitsprobleme im Zusammenhang mit der Fokusverwaltung konzentrieren. Dazu werden wir einige Techniken nutzen, um auf DOM-Knoten zuzugreifen und Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir werden auch sehen, wie man Ereignis-Listener auf DOM-Elementen deklarieren und aufräumen kann.

Wir müssen auch ein wenig über den Lebenszyklus von Komponenten lernen, um zu verstehen, wann diese DOM-Knoten in den DOM eingefügt und entfernt werden und wie wir auf sie zugreifen können. Wir werden auch über die `action`-Direktive lernen, die es uns ermöglicht, die Funktionalität von HTML-Elementen auf wiederverwendbare und deklarative Weise zu erweitern.

Schließlich werden wir ein wenig mehr über Komponenten lernen. Bisher haben wir gesehen, wie Komponenten Daten mittels Props teilen und mit ihren Eltern durch Ereignisse und bidirektionale Datenbindung kommunizieren können. Jetzt werden wir sehen, wie Komponenten auch Methoden und Variablen freigeben können.

Die folgenden neuen Komponenten werden im Verlauf des Artikels entwickelt:

- `MoreActions`: Zeigt die Schaltflächen _Alle überprüfen_ und _Entfernte Aufgaben_ an und löst die entsprechenden Ereignisse aus, die erforderlich sind, um ihre Funktionalität zu steuern.
- `NewTodo`: Zeigt das `<input>`-Feld und die Hinzufügen-Schaltfläche zum Hinzufügen eines neuen To-dos an.
- `TodosStatus`: Zeigt die Statusüberschrift "x von y Elemente abgeschlossen" an.

## Code zusammen mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Zustand der App zu gelangen, führen Sie aus

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um zusammen mit uns im REPL zu programmieren, beginnen Sie unter

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Arbeiten an der Komponente MoreActions

Jetzt werden wir die Schaltflächen _Alle überprüfen_ und _Entfernte Aufgaben_ angehen. Lassen Sie uns eine Komponente erstellen, die für die Darstellung der Schaltflächen und das Emittieren der entsprechenden Ereignisse verantwortlich ist.

1. Erstellen Sie eine neue Datei, `components/MoreActions.svelte`.
2. Wenn die erste Schaltfläche geklickt wird, emittieren wir ein `checkAll` Ereignis, um zu signalisieren, dass alle To-dos überprüft/ungeprüft werden sollten. Wenn die zweite Schaltfläche geklickt wird, emittieren wir ein `removeCompleted` Ereignis, um zu signalisieren, dass alle abgeschlossenen To-dos entfernt werden sollten. Fügen Sie den folgenden Inhalt in Ihre `MoreActions.svelte` Datei ein:

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

   Wir haben auch eine `completed` Variable hinzugefügt, um zwischen dem Überprüfen und dem Entfernen aller Aufgaben zu wechseln.

3. Zurück in `Todos.svelte` werden wir unsere `MoreActions` Komponente importieren und zwei Funktionen erstellen, um die von der `MoreActions` Komponente emittierten Ereignisse zu handhaben.

   Fügen Sie die folgende Importanweisung unter den bestehenden ein:

   ```js
   import MoreActions from "./MoreActions.svelte";
   ```

4. Fügen Sie dann die beschriebenen Funktionen am Ende des `<script>` Abschnitts hinzu:

   ```js
   const checkAllTodos = (completed) =>
     todos.forEach((t) => (t.completed = completed));

   const removeCompletedTodos = () =>
     (todos = todos.filter((t) => !t.completed));
   ```

5. Gehen Sie nun zum unteren Ende des Markup-Abschnitts von `Todos.svelte` und ersetzen Sie das `<div class="btn-group">` Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf zur `MoreActions` Komponente, wie folgt:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. OK, lassen Sie uns zurück zur App gehen und es ausprobieren. Sie werden feststellen, dass die Schaltfläche _Entfernte Aufgaben_ gut funktioniert, aber die Schaltfläche _Alle überprüfen_/ _Alle ungeprüft_ nur stillschweigend fehlschlägt.

Um herauszufinden, was hier passiert, müssen wir tiefer in die Svelte-Reaktivität eintauchen.

## Reaktivitätsfallen: Aktualisieren von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos` Array von der `checkAllTodos()` Funktion aus in die Konsole protokollieren.

1. Aktualisieren Sie Ihre bestehende `checkAllTodos()` Funktion wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Kehren Sie zu Ihrem Browser zurück, öffnen Sie Ihre DevTools-Konsole, und klicken Sie mehrmals auf _Alle überprüfen_/ _Alle ungeprüft_.

Sie werden feststellen, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie die Schaltfläche drücken (die `todo` Objekte' `completed` Eigenschaften werden zwischen `true` und `false` umgeschaltet), aber Svelte ist sich dessen nicht bewusst. Dies bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr nützlich sein wird.

Um herauszufinden, warum dies passiert, müssen wir verstehen, wie die Reaktivität in Svelte beim Aktualisieren von Arrays und Objekten funktioniert.

Viele Web-Frameworks verwenden die Virtual-DOM-Technik, um die Seite zu aktualisieren. Im Grunde ist der virtuelle DOM eine im Speicher befindliche Kopie des Inhalts der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "echten" DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen standardmäßig unser gesamtes JavaScript bei jeder Änderung gegen diesen virtuellen DOM aus und wenden verschiedene Methoden an, um teure Berechnungen zwischenzuspeichern und die Ausführung zu optimieren. Sie machen wenig bis gar keine Versuche zu verstehen, was unser JavaScript-Code tut.

Svelte verwendet keine virtuelle DOM-Darstellung. Stattdessen parst und analysiert es unseren Code, erstellt einen Abhängigkeitsbaum und generiert dann das erforderliche JavaScript, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz generiert in der Regel optimales JavaScript mit minimalem Overhead, hat aber auch seine Grenzen.

Manchmal kann Svelte keine Änderungen an überwachten Variablen erkennen. Denken Sie daran, um Svelte mitzuteilen, dass sich eine Variable geändert hat, müssen Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die man sich merken sollte, ist, dass der Name der aktualisierten Variablen auf der linken Seite der Zuweisung stehen muss.

Zum Beispiel in folgendem Codeabschnitt:

```js
const foo = obj.foo;
foo.bar = "baz";
```

Svelte wird Verweise auf `obj.foo.bar` nicht aktualisieren, es sei denn, Sie folgen es mit `obj = obj`. Das liegt daran, dass Svelte Objektverweise nicht nachverfolgen kann, sodass wir ihm explizit mitteilen müssen, dass sich `obj` geändert hat, indem wir eine Zuweisung ausführen.

> [!NOTE]
> Wenn `foo` eine oberste Variable ist, können Sie Svelte leicht mitteilen, dass `obj` jedes Mal aktualisiert werden soll, wenn `foo` geändert wird, mit der folgenden reaktiven Anweisung: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und wann immer es sich ändert, wird Svelte `obj = obj` ausführen.

In unserer `checkAllTodos()` Funktion, wenn wir:

```js
todos.forEach((t) => (t.completed = completed));
```

ausführen, wird Svelte `todos` nicht als geändert markieren, weil es nicht weiß, dass wir mit der Aktualisierung unserer `t` Variablen innerhalb der `forEach()` Methode auch das `todos` Array ändern. Und das macht Sinn, weil Svelte sonst die inneren Abläufe der `forEach()` Methode kennen müsste; das gleiche würde somit für jede Methode gelten, die an irgendein Objekt oder Array angehängt ist.

Es gibt jedoch verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle beinhalten die Zuweisung eines neuen Werts an die beobachtete Variable.

Wie wir bereits gesehen haben, könnten wir Svelte einfach dazu bringen, die Variable mit einer Selbstzuweisung zu aktualisieren, so wie diese:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Das wird das Problem lösen. Intern wird Svelte `todos` als geändert markieren und die scheinbar redundante Selbstzuweisung entfernen. Abgesehen von der Tatsache, dass es seltsam aussieht, ist es völlig in Ordnung, diese Technik zu verwenden, und manchmal ist es der knappste Weg, dies zu tun.

Wir könnten auch das `todos` Array per Index erreichen, so wie diese:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen zu Eigenschaften von Arrays und Objekten — z. B. `obj.foo += 1` oder `array[i] = x` — funktionieren genauso wie Zuweisungen zu den Werten selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos` Array modifiziert wird.

Eine andere Lösung ist es, ein neues Array an `todos` zuzuweisen, das eine Kopie aller To-dos mit der entsprechend aktualisierten `completed` Eigenschaft enthält, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) Methode, die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jedes To-dos mithilfe der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) zurück und überschreibt die Eigenschaft des `completed` Werts entsprechend. Diese Lösung hat den zusätzlichen Vorteil, dass ein neues Array mit neuen Objekten zurückgegeben wird, wodurch das ursprüngliche `todos` Array vollständig vermieden wird.

> [!NOTE]
> Svelte erlaubt uns, verschiedene Optionen zu spezifizieren, die beeinflussen, wie der Compiler funktioniert. Die `<svelte:options immutable={true}/>` Option sagt dem Compiler, dass Sie versprechen, keine Objekte zu mutieren. Dies ermöglicht es ihm, weniger konservativ zu sein, wenn es darum geht, zu überprüfen, ob sich Werte geändert haben, und einfacheren und leistungsfähigeren Code zu generieren. Für weitere Informationen über `<svelte:options>`, sehen Sie sich die [Svelte Optionen Dokumentation](https://svelte.dev/docs/special-elements#svelte-options) an.

All diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Jede dieser Techniken ermöglicht es Svelte, zu bemerken, dass unser `todos` Array modifiziert wurde.

**Wählen Sie eine aus, und aktualisieren Sie Ihre `checkAllTodos()` Funktion gemäß den Anforderungen. Jetzt sollten Sie in der Lage sein, alle Ihre To-dos auf einmal zu überprüfen und zu entmarkieren. Probieren Sie es aus!**

## Unser MoreActions-Komponente fertigstellen

Wir werden unser Component ein kleines Detail zur Benutzerfreundlichkeit hinzufügen. Wir werden die Schaltflächen deaktivieren, wenn keine Aufgaben bearbeitet werden müssen. Dazu werden wir das `todos` Array als Prop empfangen und die `disabled` Eigenschaft jeder Schaltfläche entsprechend festlegen.

1. Aktualisieren Sie Ihre `MoreActions.svelte` Komponente wie folgt:

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

   Wir haben auch eine reaktive `completedTodos` Variable deklariert, um die _Entfernte Aufgaben_ Schaltfläche zu aktivieren oder zu deaktivieren.

2. Vergessen Sie nicht, das Prop in `MoreActions` von innen `Todos.svelte` zu übergeben, wo die Komponente aufgerufen wird:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Fokussierung auf die Details

Nachdem wir jetzt alle erforderlichen Funktionen der App fertiggestellt haben, konzentrieren wir uns auf einige Barrierefreiheit-Funktionen, die die Benutzerfreundlichkeit unserer App sowohl für Tastaturbenutzer als auch für Bildschirmlesegeräte verbessern werden.

Derzeit hat unsere App einige Probleme mit der Tastaturzugänglichkeit, die die Fokusverwaltung betreffen. Sehen wir uns diese Probleme an.

## Erkunden der Tastaturzugänglichkeitsprobleme in unserer ToDo-App

Im Moment werden Tastaturbenutzer feststellen, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder kohärent ist.

Wenn Sie auf das Eingabefeld oben in unserer App klicken, sehen Sie eine dicke, gestrichelte Umrandung um dieses Eingabefeld. Diese Umrandung ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist.

Wenn Sie ein Mausbenutzer sind, haben Sie diesen visuellen Hinweis möglicherweise übersprungen. Aber wenn Sie ausschließlich mit der Tastatur arbeiten, ist es von entscheidender Bedeutung zu wissen, welches Steuerelement den Fokus hat. Es zeigt uns, welches Steuerelement unsere Tastenanschläge empfangen wird.

Wenn Sie wiederholt die <kbd>Tab</kbd>-Taste drücken, sehen Sie den gestrichelten Fokusindikator zwischen allen fokussierbaren Elementen auf der Seite wechseln. Wenn Sie den Fokus auf die _Bearbeiten_ Taste verschieben und <kbd>Eingabetaste</kbd> drücken, verschwindet plötzlich der Fokus, und Sie können nicht mehr erkennen, welches Steuerelement unsere Tastenanschläge empfangen wird.

Darüber hinaus geschieht nichts, wenn Sie die <kbd>Esc</kbd>- oder <kbd>Eingabe</kbd>-Taste Drücken. Und wenn Sie auf _Abbrechen_ oder _Speichern_ klicken, verschwindet der Fokus erneut. Für einen Benutzer, der mit der Tastatur arbeitet, wird dieses Verhalten bestenfalls verwirrend sein.

Wir möchten auch einige Funktionen zur Benutzerfreundlichkeit hinzufügen, wie z.B. die Deaktivierung der _Speichern_ Taste, wenn erforderliche Felder leer sind, das Fokussieren bestimmter HTML-Elemente oder das automatische Auswählen von Inhalten, wenn ein Texteingabefeld den Fokus erhält.

Um all diese Funktionen umzusetzen, benötigen wir programmgesteuerten Zugriff auf DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir werden auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden müssen, um bestimmte Aufgaben auszuführen, wenn das Steuerelement den Fokus erhält.

Das Problem ist, dass all diese DOM-Knoten von Svelte zur Laufzeit dynamisch erstellt werden. Wir müssen also warten, bis sie erstellt und dem DOM hinzugefügt werden, um sie nutzen zu können. Dazu müssen wir etwas über den [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount) lernen, um zu verstehen, wann wir auf sie zugreifen können — mehr dazu später.

## Erstellen einer NewTodo-Komponente

Beginnen wir damit, unser neues To-do-Formular in eine eigene Komponente auszugliedern. Mit unserem bisherigen Wissen können wir eine neue Komponenten-Datei erstellen und den Code anpassen, um ein `addTodo` Ereignis zu emittieren, wobei der Name des neuen To-dos zusammen mit den zusätzlichen Details übergeben wird.

1. Erstellen Sie eine neue Datei, `components/NewTodo.svelte`.
2. Fügen Sie die folgenden Inhalte ein:

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

   Hier binden wir das `<input>` an die `name` Variable mit `bind:value={name}` und deaktivieren die _Hinzufügen_ Taste, wenn sie leer ist (d.h. keinen Textinhalt hat) mit `disabled={!name}`. Wir kümmern uns auch um die <kbd>Esc</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}}`. Jedes Mal, wenn die <kbd>Esc</kbd>-Taste gedrückt wird, führen wir `onCancel()` aus, was einfach die `name` Variable löscht.

3. Jetzt müssen wir es von innen importieren und in der `Todos` Komponente verwenden und die `addTodo()` Funktion so aktualisieren, dass sie den Namen des neuen To-do empfängt.

   Fügen Sie die folgende `import`-Anweisung unter den anderen in `Todos.svelte` ein:

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. Und aktualisieren Sie die `addTodo()` Funktion wie folgt:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   Die `addTodo()`-Funktion empfängt jetzt direkt den Namen des neuen To-do, sodass wir die `newTodoName`-Variable nicht mehr benötigen, um ihr ihren Wert zu geben. Unsere `NewTodo`-Komponente kümmert sich darum.

   > [!NOTE]
   > Die `{ name }`-Syntax ist nur eine Kurzform für `{ name: name }`. Diese stammt aus JavaScript selbst und hat nichts mit Svelte zu tun, außer dass sie einige Inspirationen für die Svelte-eigenen Kurzformen liefert.

5. Ersetzen Sie schließlich den NewTodo-Formular-Markup durch einen Aufruf der `NewTodo`-Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten unter Verwendung der `bind:this={dom_node}`-Direktive

Jetzt möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente den Fokus jedes Mal wiedererlangt, wenn die _Hinzufügen_-Taste gedrückt wird. Dazu benötigen wir eine Referenz zum DOM-Knoten des Eingabefelds. Svelte bietet eine Möglichkeit, dies mit der `bind:this={dom_node}`-Direktive zu tun. Wenn angegeben, weist Svelte, sobald die Komponente montiert und der DOM-Knoten erstellt wurde, der angegebenen Variablen eine Referenz auf den DOM-Knoten zu.

Wir werden eine `nameEl`-Variable erstellen und sie an das Eingabefeld mit `bind:this={nameEl}` binden. Dann werden wir innerhalb `addTodo()`, nach dem Hinzufügen des neuen To-do, `nameEl.focus()` aufrufen, um das `<input>` erneut zu fokussieren. Wir werden dies auch tun, wenn der Benutzer die <kbd>Esc</kbd>-Taste drückt, mit der `onCancel()`-Funktion.

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

Probieren Sie die App aus: geben Sie einen neuen To-do-Namen in das `<input>`-Feld ein, drücken Sie <kbd>Tab</kbd>, um den Fokus auf die _Hinzufügen_-Schaltfläche zu geben, und drücken Sie dann <kbd>Eingabetaste</kbd> oder <kbd>Esc</kbd>, um zu sehen, wie das Eingabefeld den Fokus wiedererlangt.

### Das Eingabefeld automatisch fokussieren

Die nächste Funktion, die wir unserer `NewTodo`-Komponente hinzufügen werden, ist ein `autofocus`-Prop, das es uns ermöglicht, zu spezifizieren, dass das `<input>`-Feld beim Laden der Seite fokussiert werden soll.

1. Unser erster Versuch sieht wie folgt aus: Versuchen wir, das `autofocus`-Prop hinzuzufügen und einfach `nameEl.focus()` aus dem `<script>`-Block aufzurufen. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen), sodass es so aussieht:

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

3. Wenn Sie die App jetzt ausprobieren, werden Sie feststellen, dass die Seite jetzt leer ist, und in Ihrer DevTools-Webkonsole wird ein Fehler ähnlich `TypeError: nameEl is undefined` angezeigt.

Um zu verstehen, was hier passiert, sprechen wir mehr über den [Komponentenlebenszyklus](https://learn.svelte.dev/tutorial/onmount), den wir bereits erwähnt haben.

## Komponentenlebenszyklus und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode (d.h. den `<script>`-Abschnitt der Komponente) aus. Aber zu diesem Zeitpunkt sind alle Knoten, die die Komponente ausmachen, noch nicht an den DOM angehängt, tatsächlich existieren sie noch nicht einmal.

Wie kann man also wissen, wann die Komponente bereits erstellt und im DOM platziert wurde? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt wird und endet, wenn sie zerstört wird. Es gibt eine Handvoll Funktionen, mit denen Sie zur richtigen Zeit während dieses Lebenszyklus Code ausführen können.

Die, die Sie am häufigsten verwenden werden, ist `onMount()`, die es uns ermöglicht, einen Rückruf auszuführen, sobald die Komponente im DOM platziert wurde. Lassen Sie es uns ausprobieren und sehen, was mit der `nameEl`-Variablen passiert.

1. Beginnen Sie damit, die folgende Zeile am Anfang des `<script>`-Abschnitts von `NewTodo.svelte` hinzuzufügen:

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

3. Entfernen Sie nun die Zeile `if (autofocus) nameEl.focus()`, um zu vermeiden, dass der Fehler, den wir vorher gesehen haben, ausgelöst wird.
4. Die App wird nun wieder funktionieren, und Sie werden das Folgende in Ihrer Konsole sehen:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen können, ist während der Initialisierung der Komponente `nameEl` undefiniert, was Sinn macht, da der `<input>`-Knoten noch nicht existiert. Nachdem die Komponente montiert wurde, hat Svelte der `nameEl`-Variablen eine Referenz auf den `<input>`-DOM-Knoten zugewiesen, dank der `bind:this={nameEl}`-Direktive.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen `console.log()`/`onMount()`-Block, den Sie hinzugefügt haben, mit diesem:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie zurück zu Ihrer App, und Sie werden jetzt sehen, dass das `<input>`-Feld beim Laden der Seite fokussiert wird.

> [!NOTE]
> Sie können sich die anderen [Lebenszyklusfunktionen in der Svelte-Dokumentation](https://svelte.dev/docs/svelte) ansehen, und Sie können sie in Aktion im [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) sehen.

## Warten auf die Aktualisierung des DOM mit der `tick()`-Funktion

Nun werden wir die Fokusverwaltungsdetails der `Todo`-Komponente behandeln. Zuerst möchten wir, dass der Bearbeitungs-\<input> einer `Todo`-Komponente den Fokus erhält, wenn wir den Bearbeitungsmodus durch Drücken der Schaltfläche _Bearbeiten_ aufrufen. Auf die gleiche Art und Weise, wie wir es zuvor gesehen haben, werden wir eine `nameEl`-Variable innerhalb von `Todo.svelte` erstellen und `nameEl.focus()` aufrufen, nachdem wir die Variable `editing` auf `true` gesetzt haben.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablendeklaration direkt unter der Bearbeitung und Namensdeklarationen hinzu:

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

3. Und schließlich binden Sie `nameEl` an das `<input>`-Feld, indem Sie dieses wie folgt aktualisieren:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. Wenn Sie die aktualisierte App ausprobieren, erhalten Sie jedoch einen Fehler in etwa "TypeError: nameEl is undefined" in der Konsole, wenn Sie die _Bearbeiten_ Taste einer Aufgabe drücken.

Was passiert hier also? Wenn Sie den Zustand einer Komponente in Svelte aktualisieren, wird das DOM nicht sofort aktualisiert. Stattdessen wird bis zur nächsten Mikroaufgabe gewartet, um zu sehen, ob es noch andere Änderungen gibt, die angewendet werden müssen, einschließlich in anderen Komponenten. Dies vermeidet unnötige Arbeit und ermöglicht es dem Browser, Dinge effektiver zu bündeln.

In diesem Fall, wenn `editing` `false` ist, ist das Bearbeitungs-\<input> nicht sichtbar, da es nicht im DOM existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen sofort danach auf die `nameEl`-Variable zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hier ist, dass Svelte das DOM noch nicht aktualisiert hat.

Ein Weg, dieses Problem zu lösen, ist die Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern und Svelte die Gelegenheit zu geben, das DOM zu aktualisieren.

Probieren Sie dies jetzt aus:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, aber sie ist eher unelegant. Svelte bietet einen besseren Weg, um diese Fälle zu behandeln. Die [`tick()`-Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Versprechen zurück, das gelöst werden, sobald alle ausstehenden Zustandsänderungen auf das DOM angewendet wurden (oder sofort, wenn keine ausstehenden Zustandsänderungen vorhanden sind). Probieren wir es jetzt aus.

1. Importieren Sie zunächst `tick` am Anfang des `<script>`-Abschnitts zusammen mit Ihrem vorhandenen Import:

   ```js
   import { tick } from "svelte";
   ```

2. Rufen Sie dann `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) aus einer [async-Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf; aktualisieren Sie `onEdit()` wie folgt:

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

Als nächstes möchten wir, dass der Name `<input>` automatisch den gesamten Text beim Fokus auswählt. Außerdem möchten wir dies auf eine Weise entwickeln, dass es einfach auf jedes HTML-`<input>` wiederverwendet und auf deklarative Weise angewendet werden kann. Wir werden diese Anforderung als Entschuldigung verwenden, um ein sehr leistungsstarkes Feature zu zeigen, das Svelte uns bietet, um Funktionalität zu normalen HTML-Elementen hinzuzufügen: [Aktionen](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Input-Knotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Um diese Funktion jedes Mal auszuführen, wenn der Knoten fokussiert wird, benötigen wir einen Ereignis-Listener in etwa wie folgt:

```js
node.addEventListener("focus", (event) => node.select());
```

Und um Speicherlecks zu vermeiden, sollten wir auch die [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) Funktion aufrufen, wenn der Knoten zerstört wird.

> [!NOTE]
> Dies alles ist nur Standard-WebAPI-Funktionalität; nichts hiervon ist spezifisch für Svelte.

Wir könnten dies alles in unserer `Todo`-Komponente erreichen, wann immer wir das `<input>` zum DOM hinzufügen oder entfernen, aber wir müssten sehr vorsichtig sein, den Ereignis-Listener hinzuzufügen, nachdem der Knoten zum DOM hinzugefügt wurde, und den Listener zu entfernen, bevor der Knoten aus dem DOM entfernt wird. Darüber hinaus wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Aktionen ins Spiel. Im Grunde genommen ermöglichen sie uns, eine Funktion jedes Mal auszuführen, wenn ein Element zum DOM hinzugefügt wurde, und nach dem Entfernen aus dem DOM.

In unserem sofortigen Anwendungsfall werden wir eine Funktion namens `selectOnFocus()` definieren, die einen Knoten als Parameter empfängt. Die Funktion fügt dem Knoten einen Ereignis-Listener hinzu, sodass, wenn immer er fokussiert wird, der Text ausgewählt wird. Dann wird ein Objekt mit einer `destroy` Eigenschaft zurückgegeben. Die `destroy`-Eigenschaft ist das, was Svelte ausführt, nachdem der Knoten aus dem DOM entfernt wurde. Hier werden wir den Listener entfernen, um sicherzustellen, dass wir keine Speicherlecks hinterlassen.

1. Lassen Sie uns die Funktion `selectOnFocus()` erstellen. Fügen Sie das Folgende am Ende des `<script>`-Abschnitts von `Todo.svelte` ein:

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

2. Nun müssen wir den `<input>` anweisen, diese Funktion mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action) Direktive zu verwenden:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Direktive teilen wir Svelte mit, dass er diese Funktion ausführen soll und den DOM-Knoten des `<input>` als Parameter übergeben soll, sobald die Komponente im DOM montiert wird. Es wird auch dafür verantwortlich sein, die `destroy` Funktion auszuführen, wenn die Komponente aus dem DOM entfernt wird. Mit der `use` Direktive kümmert sich Svelte also um den Lebenszyklus der Komponente für uns.

   In unserem Fall würde unser `<input>` so aussehen: aktualisieren Sie das erste Label/Eingabe-Paar der Komponente (innerhalb der Bearbeitungsvorlage) wie folgt:

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

3. Probieren Sie es aus. Gehen Sie zu Ihrer App, drücken Sie die _Bearbeiten_ Taste einer Aufgabe und dann <kbd>Tab</kbd> um den Fokus vom `<input>` zu entfernen. Klicken Sie nun auf das `<input>`, und Sie werden sehen, dass der gesamte Eingabetext ausgewählt ist.

### Die Aktion wiederverwendbar machen

Jetzt machen wir diese Funktion wirklich wiederverwendbar für Komponenten. `selectOnFocus()` ist nur eine Funktion ohne Abhängigkeit von der `Todo.svelte`-Komponente, sodass wir sie einfach in eine Datei extrahieren und von dort verwenden können.

1. Erstellen Sie eine neue Datei, `actions.js`, im `src`-Ordner.
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

3. Importieren Sie sie jetzt von innen `Todo.svelte`; fügen Sie die folgende Importanweisung direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die `selectOnFocus()`-Definition aus `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwenden

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, lassen Sie uns sie in `NewTodo.svelte` verwenden.

1. Importieren Sie `selectOnFocus()` auch in diese Datei, wie zuvor:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie die `use:selectOnFocus` Direktive zum `<input>` hinzu, wie folgt:

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

Mit wenigen Codezeilen können wir regulären HTML-Elementen Funktionalität hinzufügen, auf eine sehr wiederverwendbare und deklarative Weise. Es benötigt nur ein `import` und eine kurze Direktive wie `use:selectOnFocus`, die ihren Zweck klar beschreibt. Und wir können dies erreichen, ohne ein benutzerdefiniertes Wrapper-Element wie `TextInput`, `MyInput` oder ähnliches erstellen zu müssen. Außerdem können Sie einem Element so viele `use:action` Direktiven hinzufügen, wie Sie möchten.

Außerdem mussten wir uns nicht mit `onMount()`, `onDestroy()` oder `tick()` auseinandersetzen — die `use` Direktive übernimmt den Komponentenlebenszyklus für uns.

### Andere Aktionen Verbesserungen

Im vorherigen Abschnitt, während wir mit den `Todo`-Komponenten arbeiteten, mussten wir uns mit `bind:this`, `tick()` und `async` Funktionen nur auseinandersetzen, um unserem `<input>` den Fokus zu geben, sobald es dem DOM hinzugefügt wurde.

1. So können wir es stattdessen mit Aktionen implementieren:

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. Und dann brauchen wir in unserem Markup nur eine weitere `use:`-Direktive hinzuzufügen:

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. Unsere `onEdit()`-Funktion kann jetzt viel einfacher sein:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
   }
   ```

Als letztes Beispiel, bevor wir weitermachen, gehen wir zurück zu unserer `Todo.svelte`-Komponente und geben der _Bearbeiten_ Taste den Fokus, nachdem der Benutzer _Speichern_ oder _Abbrechen_ gedrückt hat.

Wir könnten versuchen, unsere `focusOnInit` Aktion einfach wiederzuverwenden, indem wir `use:focusOnInit` zur _Bearbeiten_ Taste hinzufügen. Aber wir würden einen subtilen Fehler einführen. Wenn Sie ein neues To-do hinzufügen, wird der Fokus auf die _Bearbeiten_ Taste des neu hinzugefügten To-dos gelegt. Das liegt daran, dass die `focusOnInit` Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen — wir möchten, dass die _Bearbeiten_ Taste den Fokus nur dann erhält, wenn der Benutzer auf _Speichern_ oder _Abbrechen_ gedrückt hat.

1. Gehen Sie also zurück zu Ihrer `Todo.svelte`-Datei.
2. Zuerst erstellen wir eine Flagge namens `editButtonPressed` und initialisieren sie auf `false`. Fügen Sie diese direkt unter Ihren anderen Variablendeklarationen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als nächstes werden wir die Funktionalität der _Bearbeiten_ Taste ändern, um diese Flagge zu speichern, und die Aktion dafür erstellen. Aktualisieren Sie die Funktion `onEdit()` wie folgt:

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

5. Schließlich verwenden wir die `focusEditButton` Aktion auf der _Bearbeiten_ Taste, wie folgt:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App erneut. Jetzt wird jedes Mal, wenn die _Bearbeiten_ Taste dem DOM hinzugefügt wird, die `focusEditButton` Aktion ausgeführt, aber nur, wenn die `editButtonPressed` Flagge auf `true` gesetzt ist, wird der Fokus auf die Taste gegeben.

> [!NOTE]
> Wir haben kaum an der Oberfläche von Aktionen gekratzt. Aktionen können auch reaktive Parameter haben, und Svelte lässt uns erkennen, wann sich einer dieser Parameter ändert. So können wir Funktionalität hinzufügen, die sich nahtlos in das Svelte-Reaktiersystem integriert. Für eine detailliertere Einführung in Aktionen sollten Sie die [Svelte `use:action`-Dokumentation](https://svelte.dev/docs/element-directives#use-action) in Betracht ziehen.

## Komponentenbindung: Freigeben von Komponentenmethoden und -variablen mit der `bind:this={component}`-Direktive

Es gibt noch eine Barrierefreiheit-Belästigung. Wenn der Benutzer die _Löschen_ Taste drückt, verschwindet der Fokus.

Die letzte Funktion, die wir in diesem Artikel betrachten werden, beinhaltet das Setzen des Fokus auf die Statusüberschrift, nachdem ein To-do gelöscht wurde.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, und es gibt keinen klaren Kandidaten, um den Fokus zu erhalten. Wir haben die Statusüberschrift gewählt, weil sie in der Nähe der To-do Liste ist, und es ist eine Möglichkeit, ein visuelles Feedback über die Entfernung der Aufgabe zu geben, sowie anzuzeigen, was den Bildschirmlesegeräte-Benutzern passiert ist.

Zuerst extrahieren wir die Statusüberschrift in eine eigene Komponente.

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

3. Importieren Sie die Datei am Anfang von `Todos.svelte`, indem Sie die folgende `import`-Anweisung unter den anderen hinzufügen:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift innerhalb `Todos.svelte` durch einen Aufruf zur `TodosStatus`-Komponente, die `todos` als Prop übergibt, wie folgt:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch ein wenig aufräumen und die `totalTodos` und `completedTodos` Variablen aus `Todos.svelte` entfernen. Entfernen Sie einfach die `$: totalTodos = …` und die `$: completedTodos = …` Linien, und entfernen Sie auch die Referenz zu `totalTodos`, wenn wir `newTodoId` berechnen und verwenden stattdessen `todos.length`. Ersetzen Sie dazu den Block, der mit `let newTodoId` beginnt, durch folgenden:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet — wir haben gerade das letzte Stück Markup in seine eigene Komponente extrahiert.

Nun müssen wir eine Möglichkeit finden, der `<h2>`-Statusbeschriftung den Fokus zu geben, nachdem ein To-do entfernt wurde.

Wir haben bisher gesehen, wie man Informationen über Props an eine Komponente sendet und wie eine Komponente mit ihrem Elternteil kommunizieren kann, indem sie Ereignisse emittiert oder eine bidirektionale Datenbindung verwendet. Die untergeordnete Komponente könnte eine Referenz auf den `<h2>`-Knoten erhalten, indem sie `bind:this={dom_node}` verwendet und ihn nach außen mit einer bidirektionalen Datenbindung freigibt. Aber dies würde die Kapselung der Komponente brechen; das Setzen des Fokus darauf sollte ihre eigene Verantwortung sein.

Wir benötigen also, dass die `TodosStatus`-Komponente eine Methode bereitstellt, die ihr Elternteil aufrufen kann, um ihr den Fokus zu geben. Es ist ein sehr häufiges Szenario, dass eine Komponente einige Verhaltensweisen oder Informationen an den Verbraucher weiterleiten muss; sehen wir, wie wir dies mit Svelte erreichen können.

Wir haben bereits gesehen, dass Svelte `export let varname = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Aber wenn Sie anstelle von `let` `const`, `class` oder `function` exportieren, ist sie außerhalb der Komponente schreibgeschützt. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props, und der Rest sind exportierte Werte:

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

Mit diesem Wissen gehen wir zu unserem Anwendungsfall zurück. Wir erstellen eine Funktion namens `focus()`, die den Fokus auf die `<h2>`-Überschrift gibt. Dazu benötigen wir eine `headingEl`-Variable, um die Referenz auf den DOM-Knoten zu halten, und müssen sie an das `<h2>`-Element binden, indem wir `bind:this={headingEl}` verwenden. Unsere Fokusmethode führt einfach `headingEl.focus()` aus.

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

   Beachten Sie, dass wir ein `tabindex`-Attribut zur `<h2>`-Element hinzugefügt haben, damit das Element den Fokus programmatisch erhalten kann.

   Wie wir bereits gesehen haben, gibt uns die Verwendung der `bind:this={headingEl}`-Direktive eine Referenz auf den DOM-Knoten in der Variable `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion bereitzustellen, die den Fokus auf die `<h2>`-Überschrift gibt.

   Wie können wir auf diese exportierten Werte von den Eltern aus zugreifen? Genauso wie Sie mit der `bind:this={dom_node}`-Direktive an DOM-Elemente binden können, können Sie auch mit `bind:this={component}` an Komponenteninstanzen binden. Wenn Sie `bind:this` auf einem HTML-Element verwenden, erhalten Sie eine Referenz auf den DOM-Knoten, und wenn Sie es auf einer Svelte-Komponente verwenden, erhalten Sie eine Referenz auf die Instanz dieser Komponente.

2. Um an die Instanz von `TodosStatus` zu binden, erstellen wir zuerst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren Importanweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Fügen Sie dann eine `bind:this={todosStatus}`-Direktive in den Aufruf ein, wie folgt:

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. Nun können wir die Methode `exported focus()` aus unserer `removeTodo()`-Funktion aufrufen:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
   }
   ```

5. Gehen Sie zurück zu Ihrer App. Jetzt wird die Statusüberschrift bei jedem Löschen einer Aufgabe fokussiert. Dies ist nützlich, um die Änderung der Anzahl der Aufgaben hervorzuheben, sowohl für sehende Benutzer als auch für Benutzer von Bildschirmlesegeräten.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir nicht einfach `TodosStatus.focus()` aufrufen? Es könnten mehrere `TodosStatus`-Instanzen aktiv sein, daher benötigen wir eine Möglichkeit, auf jede bestimmte Instanz zu verweisen. Deshalb müssen Sie eine Variable angeben, um jede spezifische Instanz zu binden.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir alle erforderlichen Funktionen zu unserer App hinzugefügt und eine Reihe von Barrierefreiheits- und Benutzerfreundlichkeitsproblemen behandelt. Wir haben auch unsere App in handhabbare Komponenten aufgeteilt, von denen jede eine eindeutige Verantwortung hat.

In der Zwischenzeit haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie zum Beispiel:

- Umgang mit Reaktivitätsproblemen beim Aktualisieren von Objekten und Arrays
- Arbeiten mit DOM-Knoten unter Verwendung von `bind:this={dom_node}` (Bindung von DOM-Elementen)
- Verwendung der Komponentenlebenszyklus `onMount()`-Funktion
- Erzwingen, dass Svelte ausstehende Zustandsänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionalität zu HTML-Elementen auf wiederverwendbare und deklarative Weise mit der `use:action`-Direktive
- Zugriff auf Komponentenmethoden mit `bind:this={component}` (Bindung von Komponenten)

Im nächsten Artikel werden wir sehen, wie wir Stores verwenden, um zwischen Komponenten zu kommunizieren, und wie wir Animationen zu unseren Komponenten hinzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}
