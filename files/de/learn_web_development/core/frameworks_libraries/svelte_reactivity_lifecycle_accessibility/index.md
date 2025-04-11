---
title: "Fortgeschrittenes Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir unserer To-do-Liste weitere Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter komponentenorientiert gestalten. Wir lernen, wie wir mit Reaktivitätsproblemen umgehen, die beim Aktualisieren von Objekten und Arrays auftreten können. Um häufige Fallstricke zu vermeiden, müssen wir etwas tiefer in das Reaktivitätssystem von Svelte eintauchen. Wir werden uns auch mit der Lösung einiger Fokusprobleme bezüglich der Barrierefreiheit beschäftigen und mehr.

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
          über Kenntnisse im
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen einiger fortgeschrittener Svelte-Techniken zur Lösung von Reaktivitätsproblemen,
        Tastaturzugänglichkeitsproblemen im Zusammenhang mit dem Lebenszyklus von Komponenten und mehr.
      </td>
    </tr>
  </tbody>
</table>

Wir konzentrieren uns auf einige Barrierefreiheitsprobleme im Zusammenhang mit der Fokusverwaltung. Dazu verwenden wir einige Techniken, um auf DOM-Knoten zuzugreifen und Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir werden auch sehen, wie man Event-Listener auf DOM-Elementen deklariert und aufräumt.

Wir müssen auch ein wenig über den Lebenszyklus von Komponenten lernen, um zu verstehen, wann diese DOM-Knoten im DOM geladen und entladen werden und wie wir auf sie zugreifen können. Wir werden auch über die `action`-Direktive lernen, die es uns ermöglicht, die Funktionalität von HTML-Elementen auf eine wiederverwendbare und deklarative Weise zu erweitern.

Letztendlich werden wir ein wenig mehr über Komponenten lernen. Bisher haben wir gesehen, wie Komponenten Daten über Props teilen und mit ihren Eltern über Ereignisse und bidirektionale Datenbindung kommunizieren können. Jetzt werden wir sehen, wie Komponenten auch Methoden und Variablen bereitstellen können.

Die folgenden neuen Komponenten werden im Verlauf dieses Artikels entwickelt:

- `MoreActions`: Zeigt die Schaltflächen _Alle prüfen_ und _Abgeschlossene entfernen_ an und gibt die entsprechenden Ereignisse aus, die für ihre Funktionalität erforderlich sind.
- `NewTodo`: Zeigt das `<input>`-Feld und die _Hinzufügen_-Schaltfläche zum Hinzufügen eines neuen To-do an.
- `TodosStatus`: Zeigt die Überschrift "x von y Elementen abgeschlossen" an.

## Coden Sie mit uns

### Git

Clonen Sie das GitHub-Repo (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Status der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit der REPL gemeinsam mit uns zu coden, starten Sie unter:

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Entwicklung der MoreActions-Komponente

Nun werden wir uns um die Schaltflächen _Alle prüfen_ und _Abgeschlossene entfernen_ kümmern. Lassen Sie uns eine Komponente erstellen, die für das Anzeigen der Schaltflächen und das Ausgeben der entsprechenden Ereignisse zuständig ist.

1. Erstellen Sie eine neue Datei, `components/MoreActions.svelte`.
2. Beim Klick auf die erste Schaltfläche geben wir ein `checkAll`-Ereignis aus, um zu signalisieren, dass alle To-dos geprüft bzw. nicht geprüft werden sollen. Beim Klick auf die zweite Schaltfläche geben wir ein `removeCompleted`-Ereignis aus, um zu signalisieren, dass alle abgeschlossenen To-dos entfernt werden sollen. Fügen Sie folgenden Inhalt in Ihre `MoreActions.svelte`-Datei ein:

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

   Wir haben auch eine `completed`-Variable hinzugefügt, um das Abwechseln zwischen Überprüfen und Nicht-Überprüfen aller Aufgaben zu steuern.

3. Zurück in `Todos.svelte`, wir importieren unsere `MoreActions`-Komponente und erstellen zwei Funktionen, um die von der `MoreActions`-Komponente emittierten Ereignisse zu verarbeiten.

   Fügen Sie die folgende Import-Anweisung unter den vorhandenen ein:

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

5. Gehen Sie nun zum unteren Ende des `Todos.svelte`-Markup-Abschnitts und ersetzen Sie das `<div class="btn-group">`-Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf der `MoreActions`-Komponente, so:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. OK, gehen Sie zurück in die App und versuchen Sie es. Sie werden feststellen, dass die Schaltfläche _Abgeschlossene entfernen_ funktioniert, die Schaltfläche _Alle prüfen_/_Alle nicht prüfen_ jedoch einfach stillschweigend fehlschlägt.

Um herauszufinden, was hier passiert, müssen wir etwas tiefer in die Svelte-Reaktivität eintauchen.

## Reaktivitätsfallstricke: Aktualisieren von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos`-Array von der `checkAllTodos()`-Funktion aus in der Konsole protokollieren.

1. Aktualisieren Sie Ihre vorhandene `checkAllTodos()`-Funktion wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Kehren Sie zu Ihrem Browser zurück, öffnen Sie Ihre DevTools-Konsole und klicken Sie ein paar Mal auf _Alle prüfen_/_Alle nicht prüfen_.

Sie werden feststellen, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie die Schaltfläche drücken (die `todo`-Objekte `completed`-Eigenschaften werden zwischen `true` und `false` umgeschaltet), aber Svelte weiß nichts davon. Dies bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr nützlich sein wird.

Um herauszufinden, warum dies passiert, müssen wir verstehen, wie Reaktivität in Svelte funktioniert, wenn Arrays und Objekte aktualisiert werden.

Viele Web-Frameworks verwenden die Virtual DOM-Technik, um die Seite zu aktualisieren. Grundsätzlich ist der Virtual DOM eine Kopie des Inhalts der Webseite im Speicher. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "echten" DOM synchronisiert wird. Dies ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht es dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen standardmäßig unseren gesamten JavaScript-Code bei jeder Änderung gegen diesen Virtual DOM aus und wenden verschiedene Methoden an, um teure Berechnungen zwischenzuspeichern und die Ausführung zu optimieren. Sie machen kaum oder gar nicht den Versuch zu verstehen, was unser JavaScript-Code tut.

Svelte verwendet keine Virtual-DOM-Darstellung. Stattdessen analysiert es unseren Code, erstellt einen Abhängigkeitsbaum und generiert dann das benötigte JavaScript, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz generiert normalerweise optimales JavaScript mit minimalem Overhead, hat jedoch auch seine Einschränkungen.

Manchmal kann Svelte nicht feststellen, dass sich Variablen, die beobachtet werden, geändert haben. Denken Sie daran, um Svelte zu sagen, dass sich eine Variable geändert hat, müssen Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die man im Kopf behalten sollte, ist, dass **Der Name der aktualisierten Variable muss auf der linken Seite der Zuweisung erscheinen.**

Beispielsweise im folgenden Code:

```js
const foo = obj.foo;
foo.bar = "baz";
```

wird Svelte Referenzen zu `obj.foo.bar` nicht aktualisieren, es sei denn, Sie folgen ihm mit `obj = obj`. Das liegt daran, dass Svelte Objekt-Referenzen nicht nachverfolgen kann, sodass wir ihm explizit sagen müssen, dass `obj` sich geändert hat, indem wir eine Zuweisung ausführen.

> [!NOTE]
> Wenn `foo` eine Variable auf oberster Ebene ist, können Sie Svelte leicht sagen, `obj` immer dann zu aktualisieren, wenn sich `foo` ändert, mit der folgenden reaktiven Anweisung: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und immer wenn es sich ändert, führt Svelte `obj = obj` aus.

In unserer `checkAllTodos()` Funktion, wenn wir ausführen:

```js
todos.forEach((t) => (t.completed = completed));
```

wird Svelte `todos` nicht als geändert markieren, da es nicht weiß, dass, wenn wir unsere `t` Variable im `forEach()`-Methode aktualisieren, wir auch das `todos`-Array ändern. Und das macht Sinn, denn sonst wäre Svelte sich der inneren Abläufe der `forEach()`-Methode bewusst; das gleiche würde daher für jede Methode gelten, die an ein beliebiges Objekt oder Array angehängt ist.

Dennoch gibt es verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle von ihnen beinhalten, dem zu beobachtenden Variable einen neuen Wert zuzuweisen.

Wie wir bereits gesehen haben, könnten wir Svelte einfach anweisen, die Variable mit einer Selbstzuweisung zu aktualisieren, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Dies wird das Problem lösen. Intern wird Svelte `todos` als geändert markieren und die scheinbar redundante Selbstzuweisung entfernen. Abgesehen davon, dass es seltsam aussieht, ist es völlig in Ordnung, diese Technik zu verwenden, und manchmal ist es der prägnanteste Weg, es zu tun.

Wir könnten auch auf das `todos`-Array mit dem Index zugreifen, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen an Eigenschaften von Arrays und Objekten — z.B., `obj.foo += 1` oder `array[i] = x` — funktionieren genauso wie Zuweisungen an die Werte selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos`-Array geändert wird.

Eine andere Lösung besteht darin, dem `todos`-Array ein neues Array zuzuweisen, das eine Kopie aller To-dos mit der entsprechend aktualisierten `completed`-Eigenschaft enthält, wie folgt:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die [`map()`]-Methode(/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jedes To-dos mit [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) zurück und überschreibt die Eigenschaft des vollständigen Wertes entsprechend. Diese Lösung bietet den zusätzlichen Vorteil, ein neues Array mit neuen Objekten zurückzugeben und das ursprüngliche `todos`-Array vollständig zu vermeiden.

> [!NOTE]
> Svelte ermöglicht es uns, verschiedene Optionen anzugeben, die beeinflussen, wie der Compiler arbeitet. Die Option `<svelte:options immutable={true}/>` teilt dem Compiler mit, dass Sie versprechen, keine Objekte zu verändern. Dadurch kann er weniger konservativ sein, wenn es darum geht zu überprüfen, ob sich Werte geändert haben und vereinfachten und leistungsfähigeren Code zu generieren. Weitere Informationen zu `<svelte:options>` finden Sie in der [Svelte-Options-Dokumentation](https://svelte.dev/docs/special-elements#svelte-options).

All diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Jede dieser Techniken wird Svelte ermöglichen zu bemerken, dass unser `todos`-Array geändert wurde.

**Wählen Sie eine aus und aktualisieren Sie Ihre `checkAllTodos()`-Funktion entsprechend. Jetzt sollten Sie in der Lage sein, alle Ihre To-dos auf einmal zu prüfen und nicht zu prüfen. Probieren Sie es aus!**

## Fertigstellung unserer MoreActions-Komponente

Wir werden unserer Komponente ein Detail zur Benutzerfreundlichkeit hinzufügen. Wir deaktivieren die Schaltflächen, wenn keine Aufgaben zu verarbeiten sind. Dazu werden wir das `todos`-Array als Prop empfangen und die `disabled`-Eigenschaft jeder Schaltfläche entsprechend setzen.

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

   Wir haben auch eine reaktive `completedTodos`-Variable deklariert, um die _Abgeschlossene entfernen_ Schaltfläche zu aktivieren oder zu deaktivieren.

2. Vergessen Sie nicht, das Prop in `MoreActions` von `Todos.svelte` as Prop zu übergeben, wo die Komponente aufgerufen wird:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Detailgenauigkeit fokussieren

Nachdem wir nun alle erforderlichen Funktionen der App abgeschlossen haben, konzentrieren wir uns auf einige Barrierefreiheitsfunktionen, die die Benutzerfreundlichkeit unserer App für sowohl Tastaturbenutzer als auch Bildschirmleser-Benutzer verbessern werden.

Im aktuellen Zustand hat unsere App ein paar Probleme mit der Tastaturzugänglichkeit, die die Fokusverwaltung betreffen. Lassen Sie uns diese Probleme anschauen.

## Erkunden von Tastaturzugänglichkeitsproblemen in unserer To-do-App

Derzeit werden Tastaturbenutzer feststellen, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder kohärent ist.

Wenn Sie auf das Eingabefeld am oberen Rand unserer App klicken, sehen Sie eine dicke, gestrichelte Umrandung um dieses Eingabefeld. Diese Umrandung ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist.

Wenn Sie ein Mausbenutzer sind, haben Sie diesen visuellen Hinweis möglicherweise übersprungen. Aber wenn Sie ausschließlich mit der Tastatur arbeiten, ist es von entscheidender Bedeutung zu wissen, welches Steuerelement den Fokus hat. Es zeigt uns, welches Steuerelement unsere Tastatureingaben erhält.

Wenn Sie wiederholt die <kbd>Tab</kbd>-Taste drücken, sehen Sie den gestrichelten Fokus-Indikator zwischen allen fokussierbaren Elementen auf der Seite radfahren. Wenn Sie den Fokus auf die _Bearbeiten_-Schaltfläche bewegen und <kbd>Eingabetaste</kbd> drücken, verschwindet plötzlich der Fokus, und Sie können nicht mehr sagen, welches Steuerelement unsere Tastatureingaben erhalten wird.

Darüber hinaus, wenn Sie die <kbd>Escape</kbd> oder <kbd>Eingabetaste</kbd> drücken, passiert nichts. Und wenn Sie auf _Abbrechen_ oder _Speichern_ klicken, verschwindet der Fokus wieder. Für einen Benutzer, der mit der Tastatur arbeitet, wird dieses Verhalten im besten Fall verwirrend sein.

Wir möchten auch einige Benutzerfreundlichkeitsfunktionen hinzufügen, wie das Deaktivieren der _Speichern_-Schaltfläche, wenn erforderliche Felder leer sind, fokussierende bestimmten HTML-Elemente automatisch oder das automatische Auswählen von Inhalten, wenn ein Textfeld den Fokus erhält.

Um all diese Funktionen zu implementieren, benötigen wir programmgesteuerten Zugriff auf DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir müssen auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um spezifische Aufgaben auszuführen, wenn das Steuerelement den Fokus erhält.

Das Problem ist, dass all diese DOM-Knoten von Svelte zur Laufzeit dynamisch erstellt werden. Deshalb müssen wir warten, bis sie erstellt und dem DOM hinzugefügt wurden, um sie zu verwenden. Dazu müssen wir über den [Lebenszyklus der Komponente](https://learn.svelte.dev/tutorial/onmount) lernen, um zu verstehen, wann wir auf sie zugreifen können — mehr dazu später.

## Erstellen einer NewTodo-Komponente

Lassen Sie uns beginnen, unser neues To-do-Formular in eine eigene Komponente auszulagern. Mit dem, was wir bisher wissen, können wir eine neue Komponenten-Datei erstellen und den Code anpassen, um ein `addTodo`-Ereignis auszugeben, bei dem der Name des neuen To-dos mit den zusätzlichen Details übergeben wird.

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

   Hier binden wir das `<input>` mit der `name`-Variable mit `bind:value={name}` und deaktivieren die _Hinzufügen_-Schaltfläche, wenn sie leer ist (d.h. kein Textinhalt vorhanden) mit `disabled={!name}`. Wir kümmern uns auch um die <kbd>Escape</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}}`. Immer wenn die <kbd>Escape</kbd>-Taste gedrückt wird, führen wir `onCancel()` aus, das einfach die `name`-Variable leert.

3. Jetzt müssen wir sie aus der `Todos`-Komponente `importieren` und verwenden und die `addTodo()`-Funktion aktualisieren, um den Namen des neuen To-dos zu empfangen.

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

   `addTodo()` empfängt jetzt direkt den Namen des neuen To-dos, sodass wir die Variable `newTodoName` nicht mehr benötigen, um ihr ihren Wert zuzuweisen. Unsere `NewTodo`-Komponente kümmert sich darum.

   > [!NOTE]
   > Die `{ name }`-Syntax ist einfach eine Kurzform für `{ name: name }`. Diese stammt direkt von JavaScript selbst und hat nichts mit Svelte zu tun, außer dass sie etwas Inspiration für Svelte-Eigene Kurzformen bietet.

5. Schließlich für diesen Abschnitt, ersetzen Sie das NewTodo-Formular-Markup mit einem Aufruf der `NewTodo`-Komponente, so:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten mit der `bind:this={dom_node}`-Direktive

Jetzt möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente jedes Mal wieder den Fokus erhält, wenn die _Hinzufügen_-Schaltfläche gedrückt wird. Dazu benötigen wir eine Referenz auf den DOM-Knoten des Eingabefeldes. Svelte stellt dafür einen Weg mit der `bind:this={dom_node}`-Direktive zur Verfügung. Wenn sie angegeben ist, weist Svelte sofort nach dem Erstellen der Komponente und dem Erstellen des DOM-Knotens eine Referenz auf den DOM-Knoten der angegebenen Variable zu.

Wir erstellen eine `nameEl`-Variable und binden sie an das Eingabefeld mit `bind:this={nameEl}`. Dann rufen wir innerhalb `addTodo()`, nach dem Hinzufügen des neuen To-dos `nameEl.focus()`, um das `<input>` wieder zu fokussieren. Wir werden das gleiche machen, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt, mit der `onCancel()`-Funktion.

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

Probieren Sie die App aus: Geben Sie einen neuen To-do-Namen im `<input>`-Feld ein, drücken Sie <kbd>tab</kbd> um den Fokus auf die _Hinzufügen_-Schaltfläche zu legen, und drücken Sie dann <kbd>Eingabetaste</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie das Eingabefeld wieder fokussiert wird.

### Automatisches Fokussieren unseres Eingabefelds

Das nächste Feature, das wir zu unserer `NewTodo`-Komponente hinzufügen, ist ein `autofocus`-Prop, das uns ermöglicht anzugeben, dass das `<input>`-Feld beim Laden der Seite fokussiert werden soll.

1. Unser erster Versuch sieht wie folgt aus: Versuchen wir, das `autofocus`-Prop hinzuzufügen und einfach `nameEl.focus()` aus dem `<script>`-Block aufzurufen. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen), um so auszusehen:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // reference to the name input DOM node

     if (autofocus) nameEl.focus();
   ```

2. Gehen Sie jetzt zurück zur `Todos`-Komponente und geben Sie das `autofocus`-Prop in den `<NewTodo>`-Komponentenaufruf hinein, so:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. Wenn Sie Ihre App jetzt ausprobieren, sehen Sie, dass die Seite jetzt leer ist. In Ihrer Webkonsole von DevTools sehen Sie einen Fehler der Art: `TypeError: nameEl ist undefined`.

Um zu verstehen, was hier passiert, sprechen wir ein wenig mehr über den [Lebenszyklus der Komponente](https://learn.svelte.dev/tutorial/onmount), den wir bereits erwähnt haben.

## Lebenszyklus einer Komponente und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode aus (das ist der `<script>`-Abschnitt der Komponente). Aber zu diesem Zeitpunkt sind alle Knoten, aus denen die Komponente besteht, noch nicht an das DOM angehängt, in der Tat existieren sie noch nicht einmal.

Wie können Sie also wissen, wann die Komponente erstellt und im DOM montiert worden ist? Die Antwort ist, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt wird und endet, wenn sie zerstört wird. Es gibt eine Handvoll Funktionen, die es Ihnen ermöglichen, Code zu bestimmten Schlüsselmomenten während dieses Lebenszyklus auszuführen.

Diejenige, die Sie am häufigsten verwenden werden, ist `onMount()`, die uns erlaubt, einen Rückruf auszuführen, sobald die Komponente im DOM montiert wurde. Lassen Sie es uns ausprobieren und sehen, was mit der `nameEl`-Variable passiert.

1. Zuerst fügen Sie die folgende Linie am Anfang des `<script>`-Abschnitts von `NewTodo.svelte` hinzu:

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

3. Entfernen Sie jetzt die Zeile `if (autofocus) nameEl.focus()`, um den Fehler, den wir zuvor gesehen haben, zu vermeiden.
4. Die App wird jetzt wieder funktionieren, und Sie werden das folgende in Ihrer Konsole sehen:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen können, während die Komponente initialisiert wird, ist `nameEl` undefiniert, was Sinn macht, da der `<input>`-Knoten noch nicht existiert. Nachdem die Komponente montiert wurde, hat Svelte eine Referenz auf den `<input>`-DOM-Knoten zu der `nameEl`-Variable zugewiesen, dank der `bind:this={nameEl} Direktive.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen `console.log()`/`onMount()`-Block, den Sie hinzugefügt haben, mit diesem:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie erneut zu Ihrer App, und Sie werden jetzt sehen, dass das `<input>`-Feld beim Laden der Seite fokussiert wird.

> [!NOTE]
> Sie können die anderen [Lebenszyklusfunktionen in der Svelte-Dokumentation](https://svelte.dev/docs/svelte) ansehen, und Sie können sie in Aktion im [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) sehen.

## Warten auf die Aktualisierung des DOM mit der `tick()`-Funktion

Jetzt werden wir uns um die Fokussierungsdetails der `Todo`-Komponente kümmern. Zunächst einmal möchten wir, dass ein `Todo`-Komponenteneingabefeld den Fokus erhält, wenn wir den Bearbeitungsmodus betreten, indem wir auf seine _Bearbeiten_-Schaltfläche drücken. Ähnlich wie wir es bereits gesehen haben, erstellen wir eine `nameEl`-Variable innerhalb `Todo.svelte` und rufen `nameEl.focus()` auf, nachdem wir die `editing`-Variable auf `true` gesetzt haben.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablendeklaration direkt unter Ihren Bearbeitungs- und Namensdeklarationen hinzu:

   ```js
   let nameEl; // reference to the name input DOM node
   ```

2. Aktualisieren Sie jetzt Ihre `onEdit()`-Funktion folgendermaßen:

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

4. Wenn Sie aber die aktualisierte App ausprobieren, erhalten Sie einen Fehler der Art "TypeError: nameEl ist undefined" in der Konsole, wenn Sie eine To-do's _Bearbeiten_-Schaltfläche drücken.

Also, was passiert hier? Wenn Sie den Zustand einer Komponente in Svelte aktualisieren, wird das DOM nicht sofort aktualisiert. Stattdessen wartet es bis zur nächsten Mikroaufgabe, um zu sehen, ob es noch andere Änderungen gibt, die angewendet werden müssen, einschließlich in anderen Komponenten. Dadurch wird unnötige Arbeit vermieden und dem Browser ermöglicht, Dinge effektiver zusammenzufassen.

In diesem Fall, wenn `editing` `false` ist, ist das Editier-`<input>` nicht sichtbar, da es im DOM nicht existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen sofort danach, auf die `nameEl`-Variable zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hier ist, dass Svelte das DOM noch nicht aktualisiert hat.

Ein Weg, dieses Problem zu lösen, ist die Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern und Svelte die Gelegenheit zu geben, das DOM zu aktualisieren.

Versuchen Sie dies jetzt:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, aber sie ist eher unelegant. Svelte bietet einen besseren Weg, um mit diesen Fällen umzugehen. Die [`tick()`-Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Versprechen zurück, das aufgelöst wird, sobald alle ausstehenden Statusänderungen am DOM angewendet wurden (oder sofort, wenn keine ausstehenden Statusänderungen vorliegen). Lassen Sie uns es jetzt ausprobieren.

1. Zuerst importieren Sie `tick` an der Spitze des `<script>`-Abschnitts zusammen mit Ihrem vorhandenen Import:

   ```js
   import { tick } from "svelte";
   ```

2. Als nächstes rufen Sie `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) aus einer [async Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function); aktualisieren Sie `onEdit()` wie folgt:

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

Als nächstes möchten wir, dass das Name-`<input>` automatisch den gesamten Text bei Fokus auswählt. Darüber hinaus möchten wir dies so entwickeln, dass es leicht auf jedes HTML-`<input>` erneut verwendet und auf eine deklarative Weise angewendet werden kann. Wir werden diese Anforderung als Ausrede nutzen, um ein sehr leistungsfähiges Feature zu zeigen, das Svelte uns bietet, um Funktionalität zu regulären HTML-Elementen hinzuzufügen: [Aktionen](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Eingabeknotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Um diese Funktion jedes Mal aufzurufen, wenn der Knoten fokussiert wird, benötigen wir einen Ereignis-Listener, der in etwa so aussieht:

```js
node.addEventListener("focus", (event) => node.select());
```

Und um Speicherlecks zu vermeiden, sollten wir auch die Funktion [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufrufen, wenn der Knoten zerstört wird.

> [!NOTE]
> All dies ist nur Standard-Web-API-Funktionalität; nichts hier ist spezifisch für Svelte.

Wir könnten dies alles in unserer `Todo`-Komponente erreichen, wenn wir das `<input>` zum DOM hinzufügen oder entfernen, aber wir müssten sehr darauf achten, den Ereignis-Listener hinzuzufügen, nachdem der Knoten dem DOM hinzugefügt wurde, und den Listener zu entfernen, bevor der Knoten entfernt wird. Darüber hinaus wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Aktionen ins Spiel. Grundsätzlich ermöglichen sie es uns, eine Funktion auszuführen, wann immer ein Element dem DOM hinzugefügt und wenn es vom DOM entfernt wird.

In unserem sofortigen Anwendungsfall definieren wir eine Funktion namens `selectOnFocus()`, die einen Knoten als Parameter empfängt. Die Funktion fügt diesem Knoten einen Ereignis-Listener hinzu, sodass der Text jedes Mal ausgewählt wird, wenn er fokussiert wird. Dann gibt sie ein Objekt mit einer `destroy`-Eigenschaft zurück. Die `destroy`-Eigenschaft ist das, was Svelte ausführen wird, nachdem der Knoten aus dem DOM entfernt wurde. Hier entfernen wir den Listener, um sicherzustellen, dass wir kein Speicherleck hinterlassen.

1. Erstellen wir die Funktion `selectOnFocus()`. Fügen Sie das Folgende am unteren Ende des `<script>`-Abschnitts von `Todo.svelte` hinzu:

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

2. Nun müssen wir dem `<input>` sagen, dass diese Funktion mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action)-Direktive verwendet werden soll:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Direktive sagen wir Svelte, diese Funktion auszuführen, den DOM-Knoten des `<input>` als Parameter zu übergeben, sobald die Komponente im DOM montiert ist. Es ist auch dafür verantwortlich, die `destroy`-Funktion auszuführen, wenn die Komponente aus dem DOM entfernt wird. Mit der `use`-Direktive kümmert sich Svelte um den Lebenszyklus der Komponente für uns.

   In unserem Fall würde unser `<input>` folgendermaßen aussehen: Aktualisieren Sie das erste Etikett/Eingabefeldpaar der Komponente (innerhalb des Bearbeitungstemplates) folgendermaßen:

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

3. Versuchen Sie es aus. Gehen Sie zu Ihrer App, klicken Sie auf die _Bearbeiten_-Schaltfläche eines To-dos, dann drücken Sie <kbd>Tab</kbd>, um den Fokus vom `<input>` zu entfernen. Klicken Sie jetzt auf das `<input>`, und Sie werden sehen, dass der gesamte Eingabetext ausgewählt ist.

### Die Aktion wiederverwendbar machen

Lassen Sie uns diese Funktion jetzt wirklich wiederverwendbar machen über mehrere Komponenten hinweg. `selectOnFocus()` ist einfach eine Funktion ohne jegliche Abhängigkeit von der `Todo.svelte`-Komponente, sodass wir sie einfach in eine Datei auslagern und von dort verwenden können.

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

3. Importieren Sie es jetzt innerhalb `Todo.svelte`; fügen Sie die folgende Import-Anweisung direkt unter den anderen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die `selectOnFocus()`-Definition aus `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwenden

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, nutzen wir sie in `NewTodo.svelte`.

1. Importieren Sie `selectOnFocus()` auch in dieser Datei aus `actions.js`, wie zuvor:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie die `use:selectOnFocus`-Direktive zum `<input>` hinzu, wie folgt:

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

Mit nur wenigen Zeilen Code können wir Funktionalität zu regulären HTML-Elementen in einer sehr wiederverwendbaren und deklarativen Weise hinzufügen. Es erfordert nur einen `import` und eine kurze Direktive wie `use:selectOnFocus`, die ihr Ziel eindeutig beschreibt. Und wir können dies erreichen, ohne ein benutzerdefiniertes Wrapper-Element wie `TextInput`, `MyInput` oder ähnliches zu erstellen. Darüber hinaus können Sie einem Element so viele `use:action`-Direktiven hinzufügen, wie Sie möchten.

Außerdem mussten wir uns nicht mit `onMount()`, `onDestroy()` oder `tick()` beschäftigen — die `use`-Direktive kümmert sich um den Lebenszyklus der Komponente für uns.

### Weitere Verbesserungen der Aktionen

Im vorangegangenen Abschnitt, während wir mit den `Todo`-Komponenten arbeiteten, mussten wir mit `bind:this`, `tick()` und `async`-Funktionen arbeiten, nur um dem `<input>` den Fokus zu geben, sobald er dem DOM hinzugefügt wurde.

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

Als letztes Beispiel, bevor wir weitergehen, gehen wir zurück zu unserer `Todo.svelte`-Komponente und geben der _Bearbeiten_-Schaltfläche den Fokus, nachdem der Benutzer auf _Speichern_ oder _Abbrechen_ geklickt hat.

Wir könnten einfach versuchen, unsere `focusOnInit`-Aktion erneut zu verwenden, indem wir `use:focusOnInit` zu _Bearbeiten_-Schaltfläche hinzufügen. Aber wir würden dabei einen subtilen Fehler einführen. Wenn Sie ein neues To-do hinzufügen, wird der Fokus auf die _Bearbeiten_-Schaltfläche des kürzlich hinzugefügten To-dos gelegt. Das ist, weil die `focusOnInit`-Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen — wir möchten, dass die _Bearbeiten_-Schaltfläche nur dann den Fokus erhält, wenn der Benutzer auf _Speichern_ oder _Abbrechen_ gedrückt hat.

1. Gehen Sie also zu Ihrer `Todo.svelte`-Datei zurück.
2. Zuerst erstellen wir eine Flagge mit dem Namen `editButtonPressed` und initialisieren sie mit `false`. Fügen Sie dies direkt unter Ihren anderen Variablendeklarationen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als nächstes werden wir die Funktionalität der _Bearbeiten_-Schaltfläche anpassen, um diese Flagge zu speichern, und die Aktion dafür erstellen. Aktualisieren Sie die `onEdit()`-Funktion, wie folgt:

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

5. Schließlich `use` die `focusEditButton`-Aktion auf der _Bearbeiten_-Schaltfläche, wie folgt:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und versuchen Sie Ihre App erneut. Zu diesem Zeitpunkt wird bei jedem Hinzufügen der _Bearbeiten_-Schaltfläche zum DOM die `focusEditButton`-Aktion ausgeführt, sie wird jedoch nur dann den Fokus auf die Schaltfläche legen, wenn die `editButtonPressed`-Flagge `true` ist.

> [!NOTE]
> Wir haben hier gerade die Oberfläche der Aktionen angekratzt. Aktionen können auch reaktive Parameter haben, und Svelte ermöglicht es uns, zu erkennen, wann einer dieser Parameter geändert wird. So können wir Funktionalität hinzufügen, die sich nahtlos in das Svelte-Reaktivsystem integriert. Für eine detailliertere Einführung in Aktionen, ziehen Sie in Betracht, das [Svelte-Interaktive Tutorial](https://learn.svelte.dev/tutorial/actions) oder die [Svelte `use:action`-Dokumentation](https://svelte.dev/docs/element-directives#use-action) zu lesen.

## Komponentenbindung: Bereitstellen von Komponentenmethoden und Variablen mit der `bind:this={component}`-Direktive

Es gibt immer noch eine ärgerliche Barrierefreiheit, die bleibt. Wenn der Benutzer die _Löschen_-Schaltfläche drückt, verschwindet der Fokus.

Die letzte Funktion, die wir in diesem Artikel betrachten werden, beinhaltet das Setzen des Fokus auf die Statusüberschrift, nachdem ein To-do gelöscht wurde.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, sodass es keinen klaren Kandidaten gibt, der den Fokus erhalten kann. Wir haben die Statusüberschrift ausgewählt, weil sie in der Nähe der Liste der To-dos liegt und es eine Möglichkeit ist, visuelles Feedback über die Entfernung der Aufgabe zu geben sowie Benutzern von Bildschirmlesern anzuzeigen, was passiert ist.

Zuerst extrahieren wir die Statusüberschrift in ihre eigene Komponente.

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

3. Importieren Sie die Datei zu Beginn von `Todos.svelte`, indem Sie die folgende `import`-Anweisung unter den anderen hinzufügen:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift innerhalb `Todos.svelte` mit einem Aufruf zur `TodosStatus`-Komponente, und übergeben Sie `todos` als Prop, wie folgt:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch ein wenig aufräumen, indem Sie die `totalTodos` und `completedTodos`-Variablen aus `Todos.svelte` entfernen. Entfernen Sie einfach die `$: totalTodos = …` und die `$: completedTodos = …`-Zeilen und entfernen Sie auch die Referenz zu `totalTodos`, wenn wir `newTodoId` berechnen und `todos.length` stattdessen verwenden. Um dies zu tun, ersetzen Sie den Block, der mit `let newTodoId` beginnt, mit diesem:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet — wir haben gerade das letzte Stück Markup in eine eigene Komponente extrahiert.

Jetzt müssen wir einen Weg finden, dem `<h2>` Statuslabel den Fokus zu geben, nachdem ein To-do entfernt wurde.

Bisher haben wir gesehen, wie man Informationen an eine Komponente über Prop übergibt und wie eine Komponente mit ihrem Elternteil über Ereignisse oder bidirektionale Datenbindung kommunizieren kann. Das Kindkomponente könnte eine Referenz auf den `<h2>`-Knoten `using bind:this={dom_node}` erhalten und ihn nach außen über bidirektionale Datenbindung bereitstellen. Wenn wir dies tun würden, würde dies jedoch die Komponentenkapselung verletzen; das Setzen des Fokus darauf sollte seine eigene Verantwortung sein.

Also müssen wir die `TodosStatus`-Komponente eine Methode bereitstellen lassen, die ihr Elternteil aufrufen kann, um ihr den Fokus zu geben. Es ist ein sehr häufiges Szenario, dass eine Komponente einige Verhalten oder Informationen an ihren Verbraucher bereitstellen muss; lassen Sie uns sehen, wie dies mit Svelte erreicht wird.

Wir haben bereits gesehen, dass Svelte `export let varname = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Aber anstatt `let` zu verwenden, können Sie eine `const`, `class` oder `function` exportieren, die von außerhalb der Komponente schreibgeschützt ist. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props und der Rest sind exportierte Werte:

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

Mit diesem Wissen kehren wir zu unserem Anwendungsfall zurück. Wir erstellen eine Funktion namens `focus()`, die den Fokus auf die `<h2>`-Überschrift gibt. Dafür benötigen wir eine `headingEl`-Variable, um die Referenz auf den DOM-Knoten zu halten, und wir müssen sie mit `bind:this={headingEl}` an das `<h2>`-Element binden. Unsere Fokusmethode wird einfach `headingEl.focus()` ausführen.

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

   Beachten Sie, dass wir einem `<h2>` ein Attribut `tabindex` hinzugefügt haben, um dem Element zu ermöglichen, den Fokus programmgesteuert zu erhalten.

   Wie wir bereits gesehen haben, gibt uns das Verwenden der `bind:this={headingEl}`-Direktive eine Referenz auf den DOM-Knoten in der Variable `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion bereitzustellen, die der `<h2>`-Überschrift den Fokus gibt.

   Wie können wir auf diese exportierten Werte von der Elternkomponente aus zugreifen? So wie Sie sich mit der `bind:this={dom_node}`-Direktive auf DOM-Elemente binden können, können Sie sich auch mit `bind:this={component}` auf Komponenteninstanzen binden. Wenn Sie `bind:this` auf einem HTML-Element verwenden, erhalten Sie eine Referenz auf den DOM-Knoten, und wenn Sie es auf einer Svelte-Komponente tun, erhalten Sie eine Referenz auf die Instanz dieser Komponente.

2. Um sich also auf die Instanz von `TodosStatus` zu binden, erstellen wir zunächst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren `import`-Anweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Als nächstes fügen Sie eine `bind:this={todosStatus}`-Direktive zum Aufruf hinzu, wie folgt:

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

5. Gehen Sie zurück zu Ihrer App. Jetzt wird, wenn Sie ein To-do löschen, die Statusüberschrift fokussiert. Dies ist nützlich, um die Änderung der Anzahl der To-dos sowohl sichtbaren Benutzern als auch Benutzern von Bildschirmlesern hervorzuheben.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir `TodosStatus.focus()` nicht einfach aufrufen? Möglicherweise haben Sie mehrere `TodosStatus`-Instanzen aktiv, sodass Sie einen Weg benötigen, um jede bestimmte Instanz zu referenzieren. Deshalb müssen Sie eine Variable angeben, um jede spezifische Instanz zu binden.

## Der bisherige Code

### Git

Um den Status des Codes am Ende dieses Artikels zu sehen, greifen Sie wie folgt auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie den Ordnerinhalt direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir alle erforderlichen Funktionen in unserer App hinzugefügt, und wir haben auch eine Reihe von Barrierefreiheits- und Benutzerfreundlichkeitsproblemen behandelt. Wir haben auch unsere App in überschaubare Komponenten aufgeteilt, jede mit einer einzigartigen Verantwortung.

In der Zwischenzeit haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie zum Beispiel:

- Umgang mit Reaktivitätsproblemen beim Aktualisieren von Objekten und Arrays
- Arbeiten mit DOM-Knoten mit `bind:this={dom_node}` (Binden von DOM-Elementen)
- Verwenden der Komponentenlebenszyklusfunktion `onMount()`
- Erzwingen, dass Svelte ausstehende Statusänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionalität zu HTML-Elementen auf eine wiederverwendbare und deklarative Weise mit der `use:action`-Direktive
- Zugreifen auf Komponentenmethoden mit `bind:this={component}` (Binden von Komponenten)

Im nächsten Artikel werden wir sehen, wie man Stores verwendet, um zwischen Komponenten zu kommunizieren und Animationen zu unseren Komponenten hinzufügt.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}
