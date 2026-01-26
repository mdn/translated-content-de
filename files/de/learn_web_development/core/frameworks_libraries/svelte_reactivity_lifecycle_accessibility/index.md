---
title: "Fortgeschrittene Svelte: Reaktivität, Lebenszyklus, Barrierefreiheit"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir unserer To-Do-Liste mehr Funktionen hinzugefügt und begonnen, unsere App in Komponenten zu organisieren. In diesem Artikel werden wir die letzten Funktionen der App hinzufügen und unsere App weiter in Komponenten unterteilen. Wir werden lernen, wie man mit Reaktivitätsproblemen umgeht, die beim Aktualisieren von Objekten und Arrays auftreten. Um häufige Fallstricke zu vermeiden, werden wir tiefer in Sveltes Reaktivitätssystem eintauchen müssen. Außerdem werden wir einige Probleme mit dem Fokus der Barrierefreiheit und mehr lösen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Konsole/Terminal</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie einige fortgeschrittene Svelte-Techniken, die das Lösen von Reaktivitätsproblemen, Probleme mit der Tastaturzugänglichkeit in Bezug auf den Lebenszyklus von Komponenten und mehr umfassen.
      </td>
    </tr>
  </tbody>
</table>

Wir konzentrieren uns auf einige Zugänglichkeitsprobleme, die das Fokusmanagement betreffen. Dazu werden wir einige Techniken nutzen, um auf DOM-Knoten zuzugreifen und Methoden wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) auszuführen. Wir werden auch sehen, wie man Ereignis-Listener an DOM-Elementen deklariert und aufräumt.

Wir müssen auch ein wenig über den Lebenszyklus von Komponenten lernen, um zu verstehen, wann diese DOM-Knoten in den DOM geladen und daraus entfernt werden und wie wir auf sie zugreifen können. Außerdem werden wir etwas über die `action`-Direktive lernen, die es uns erlaubt, die Funktionalität von HTML-Elementen auf eine wiederverwendbare und deklarative Weise zu erweitern.

Schließlich werden wir ein bisschen mehr über Komponenten lernen. Bisher haben wir gesehen, wie Komponenten Daten mit Props teilen und mit ihren Eltern über Ereignisse und bidirektionale Datenbindung kommunizieren können. Jetzt werden wir sehen, wie Komponenten auch Methoden und Variablen freigeben können.

Im Laufe dieses Artikels werden die folgenden neuen Komponenten entwickelt:

- `MoreActions`: Zeigt die Schaltflächen _Alle auswählen_ und _Abgeschlossene entfernen_ an und gibt die entsprechenden Ereignisse aus, die erforderlich sind, um ihre Funktionalität zu handhaben.
- `NewTodo`: Zeigt das `<input>`-Feld und die _Hinzufügen_-Schaltfläche zum Hinzufügen eines neuen To-Dos.
- `TodosStatus`: Zeigt die Überschrift "x von y Aufgaben abgeschlossen" an.

## Coden Sie mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie es nicht bereits getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie dann aus:

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns zusammen mit dem REPL zu coden, starten Sie bei

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Arbeiten am MoreActions-Komponente

Jetzt werden wir die Schaltflächen _Alle auswählen_ und _Abgeschlossene entfernen_ angehen. Erstellen Sie eine Komponente, die dafür verantwortlich ist, die Schaltflächen anzuzeigen und die entsprechenden Ereignisse auszulösen.

1. Erstellen Sie eine neue Datei, `components/MoreActions.svelte`.
2. Wenn die erste Schaltfläche angeklickt wird, senden wir ein `checkAll`-Ereignis, um zu signalisieren, dass alle To-Dos ausgewählt/nicht ausgewählt werden sollten. Wenn die zweite Schaltfläche geklickt wird, senden wir ein `removeCompleted`-Ereignis, um zu signalisieren, dass alle abgeschlossenen To-Dos entfernt werden sollten. Fügen Sie den folgenden Inhalt in Ihre `MoreActions.svelte`-Datei ein:

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

   Wir haben auch eine `completed`-Variable hinzugefügt, um zwischen dem Auswählen und Nicht-Auswählen aller Aufgaben zu wechseln.

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

5. Gehen Sie nun zum unteren Teil des `Todos.svelte`-Markup-Abschnitts und ersetzen Sie das `<div class="btn-group">`-Element, das wir in `MoreActions.svelte` kopiert haben, durch einen Aufruf der `MoreActions`-Komponente, wie folgt:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. Okay, gehen Sie zurück in die App und probieren Sie es aus. Sie werden feststellen, dass die _Abgeschlossene entfernen_-Schaltfläche einwandfrei funktioniert, aber die _Alle auswählen_/_Alle abwählen_-Schaltfläche einfach stillschweigend fehlschlägt.

Um herauszufinden, was hier passiert, müssen wir etwas tiefer in die Reaktivität von Svelte eintauchen.

## Reaktivitäts-Fallstricke: Aktualisieren von Objekten und Arrays

Um zu sehen, was passiert, können wir das `todos`-Array aus der `checkAllTodos()`-Funktion in der Konsole protokollieren.

1. Aktualisieren Sie Ihre vorhandene `checkAllTodos()`-Funktion wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Gehen Sie zurück zu Ihrem Browser, öffnen Sie die Entwicklertools-Konsole und klicken Sie ein paar Mal auf _Alle auswählen_/_Alle abwählen_.

Sie werden feststellen, dass das Array jedes Mal erfolgreich aktualisiert wird, wenn Sie die Schaltfläche drücken (die `completed`-Eigenschaften der `todo`-Objekte werden zwischen `true` und `false` umgeschaltet), aber Svelte ist sich dessen nicht bewusst. Das bedeutet auch, dass in diesem Fall eine reaktive Anweisung wie `$: console.log('todos', todos)` nicht sehr nützlich sein wird.

Um herauszufinden, warum das passiert, müssen wir verstehen, wie die Reaktivität in Svelte beim Aktualisieren von Arrays und Objekten funktioniert.

Viele Web-Frameworks verwenden die Virtual-DOM-Technik, um die Seite zu aktualisieren. Im Wesentlichen ist der Virtual DOM eine im Speicher gespeicherte Kopie des Inhalts der Webseite. Das Framework aktualisiert diese virtuelle Darstellung, die dann mit dem "echten" DOM synchronisiert wird. Das ist viel schneller als das direkte Aktualisieren des DOM und ermöglicht es dem Framework, viele Optimierungstechniken anzuwenden.

Diese Frameworks führen standardmäßig im Wesentlichen unseren gesamten JavaScript-Code bei jeder Änderung erneut gegen diesen virtuellen DOM aus und wenden verschiedene Methoden an, um teure Berechnungen zwischenzuspeichern und die Ausführung zu optimieren. Sie machen kaum bis gar keine Versuche, zu verstehen, was unser JavaScript-Code tut.

Svelte verwendet keine virtuelle DOM-Darstellung. Stattdessen analysiert es unseren Code, erstellt einen Abhängigkeitsbaum und generiert das benötigte JavaScript, um nur die Teile des DOM zu aktualisieren, die aktualisiert werden müssen. Dieser Ansatz erzeugt in der Regel optimierten JavaScript-Code mit minimalem Overhead, hat aber auch seine Grenzen.

Manchmal kann Svelte Änderungen an überwachten Variablen nicht erkennen. Denken Sie daran, dass Sie Svelte mitteilen müssen, dass sich eine Variable geändert hat, indem Sie ihr einen neuen Wert zuweisen. Eine einfache Regel, die Sie im Kopf behalten sollten, ist: **Der Name der aktualisierten Variable muss sich auf der linken Seite der Zuweisung befinden.**

Zum Beispiel in folgendem Stück Code:

```js
const foo = obj.foo;
foo.bar = "baz";
```

Svelte wird Referenzen auf `obj.foo.bar` nicht aktualisieren, es sei denn, Sie führen `obj = obj` aus. Das liegt daran, dass Svelte Objekt-Referenzen nicht nachverfolgen kann, sodass wir ihm explizit mitteilen müssen, dass `obj` geändert wurde, indem wir eine Zuweisung ausführen.

> [!NOTE]
> Wenn `foo` eine Top-Level-Variable ist, können Sie Svelte einfach mitteilen, `obj` jedes Mal, wenn sich `foo` ändert, zu aktualisieren, mit der folgenden reaktiven Anweisung: `$: foo, obj = obj`. Damit definieren wir `foo` als Abhängigkeit, und wann immer es sich ändert, wird Svelte `obj = obj` ausführen.

In unserer `checkAllTodos()`-Funktion, wenn wir ausführen:

```js
todos.forEach((t) => (t.completed = completed));
```

wird Svelte `todos` nicht als geändert markieren, da es nicht weiß, dass wir, wenn wir unsere `t`-Variable innerhalb der `forEach()`-Methode aktualisieren, auch das `todos`-Array ändern. Und das ist sinnvoll, denn sonst wäre Svelte sich der Funktionsweise der `forEach()`-Methode bewusst; dasselbe würde also für jede Methode gelten, die mit einem Objekt oder Array verbunden ist.

Es gibt jedoch verschiedene Techniken, die wir anwenden können, um dieses Problem zu lösen, und alle beinhalten das Zuweisen eines neuen Wertes zu der überwachten Variablen.

Wie wir schon gesehen haben, könnten wir Svelte einfach mitteilen, die Variable mit einer Selbstzuweisung zu aktualisieren, so:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

Dies wird das Problem lösen. Intern wird Svelte `todos` als geändert markieren und die scheinbar redundante Selbstzuweisung entfernen. Abgesehen davon, dass es merkwürdig aussieht, ist es absolut in Ordnung, diese Technik zu verwenden, und manchmal ist es der prägnanteste Weg, es zu tun.

Wir könnten auch auf das `todos`-Array über den Index zugreifen, so:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Zuweisungen zu Eigenschaften von Arrays und Objekten — z.B., `obj.foo += 1` oder `array[i] = x` — funktionieren auf die gleiche Weise wie Zuweisungen zu den Werten selbst. Wenn Svelte diesen Code analysiert, kann es erkennen, dass das `todos`-Array geändert wird.

Eine andere Lösung besteht darin, dem `todos`-Array ein neues Array zuzuweisen, das eine Kopie aller To-Dos mit entsprechend aktualisierter `completed`-Eigenschaft enthält, so:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In diesem Fall verwenden wir die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode, die ein neues Array mit den Ergebnissen der Ausführung der bereitgestellten Funktion für jedes Element zurückgibt. Die Funktion gibt eine Kopie jedes To-Dos mit [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) zurück und überschreibt die Eigenschaft des `completed`-Werts entsprechend. Diese Lösung hat den zusätzlichen Vorteil, ein neues Array mit neuen Objekten zurückzugeben, wodurch das ursprüngliche `todos`-Array vollständig umgangen wird.

> [!NOTE]
> Svelte ermöglicht es uns, verschiedene Optionen anzugeben, die beeinflussen, wie der Compiler arbeitet. Die `<svelte:options immutable={true}/>`-Option teilt dem Compiler mit, dass Sie versprechen, keine Objekte zu mutieren. Dies ermöglicht es ihm, weniger vorsichtig zu sein, ob sich Werte geändert haben und einfacheren und leistungsfähigeren Code zu generieren. Weitere Informationen zu `<svelte:options>` finden Sie in der [Svelte-Options-Dokumentation](https://svelte.dev/docs/special-elements#svelte-options).

All diese Lösungen beinhalten eine Zuweisung, bei der die aktualisierte Variable auf der linken Seite der Gleichung steht. Jede dieser Techniken wird Svelte erlauben zu bemerken, dass unser `todos`-Array geändert wurde.

**Wählen Sie eine aus und aktualisieren Sie Ihre `checkAllTodos()`-Funktion wie erforderlich. Jetzt sollten Sie in der Lage sein, alle Ihre To-Dos auf einmal zu überprüfen und zu deaktivieren. Probieren Sie es aus!**

## Abschließen unserer MoreActions-Komponente

Wir fügen unserem Komponente noch ein Detail der Benutzerfreundlichkeit hinzu. Wir werden die Schaltflächen deaktivieren, wenn keine Aufgaben zu verarbeiten sind. Dazu empfangen wir das `todos`-Array als Prop und setzen die `disabled`-Eigenschaft jeder Schaltfläche entsprechend.

1. Aktualisieren Sie Ihre `MoreActions.svelte`-Komponente so:

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

2. Vergessen Sie nicht, das Prop im Inneren von `Todos.svelte` an `MoreActions` zu übergeben, wo die Komponente aufgerufen wird:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Arbeiten mit dem DOM: Fokus auf die Details

Jetzt, da wir alle erforderlichen Funktionen der App abgeschlossen haben, konzentrieren wir uns auf einige Zugänglichkeitsfunktionen, die die Benutzerfreundlichkeit unserer App für Benutzer von Tastaturen und Screenreadern verbessern.

In ihrem aktuellen Zustand weist unsere App einige Probleme mit der Tastaturzugänglichkeit in Bezug auf das Fokusmanagement auf. Werfen wir einen Blick auf diese Probleme.

## Erkunden von Problemen mit der Tastaturzugänglichkeit in unserer To-Do-App

Derzeit werden die Tastaturnutzer feststellen, dass der Fokusfluss unserer App nicht sehr vorhersehbar oder kohärent ist.

Wenn Sie auf das Eingabefeld am oberen Rand unserer App klicken, sehen Sie ein dickes, gestricheltes Umriss um dieses Eingabefeld. Dieser Umriss ist Ihr visueller Hinweis darauf, dass sich der Browser derzeit auf dieses Element konzentriert.

Wenn Sie ein Mausbenutzer sind, haben Sie diesen visuellen Hinweis möglicherweise übersprungen. Wenn Sie jedoch ausschließlich mit der Tastatur arbeiten, ist es von entscheidender Bedeutung zu wissen, welches Steuerelement den Fokus hat. Es zeigt uns, welches Steuerelement unsere Tastenschläge empfangen wird.

Wenn Sie die <kbd>Tab</kbd>-Taste wiederholt drücken, sehen Sie den gestrichelten Fokusindikator, der zwischen allen fokussierbaren Elementen auf der Seite zyklisch durchwechselt. Wenn Sie den Fokus auf die _Bearbeiten_-Schaltfläche verschieben und <kbd>Enter</kbd> drücken, verschwindet der Fokus plötzlich, und Sie können nicht mehr erkennen, welches Steuerelement unsere Tastenschläge empfangen wird.

Darüber hinaus passiert nichts, wenn Sie die <kbd>Escape</kbd>- oder <kbd>Enter</kbd>-Taste drücken. Und wenn Sie _Abbrechen_ oder _Speichern_ klicken, verschwindet der Fokus erneut. Für einen Benutzer, der mit der Tastatur arbeitet, wird dieses Verhalten bestenfalls verwirrend sein.

Wir möchten auch einige Benutzerfreundlichkeitsfunktionen hinzufügen, wie z.B. das Deaktivieren der _Speichern_-Schaltfläche, wenn erforderliche Felder leer sind, das Fokussieren auf bestimmte HTML-Elemente oder das automatische Auswählen von Inhalten, wenn ein Texteingabefeld den Fokus erhält.

Um all diese Funktionen zu implementieren, benötigen wir programmgesteuerten Zugriff auf DOM-Knoten, um Funktionen wie [`focus()`](/de/docs/Web/API/HTMLElement/focus) und [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufzurufen. Wir müssen auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um spezifische Aufgaben auszuführen, wenn das Steuerelement den Fokus erhält.

Das Problem ist, dass all diese DOM-Knoten von Svelte zur Laufzeit dynamisch erstellt werden. Wir müssen also warten, bis sie erstellt und dem DOM hinzugefügt wurden, um sie zu verwenden. Dazu müssen wir über den [Lebenszyklus von Komponenten](https://learn.svelte.dev/tutorial/onmount) lernen, um zu verstehen, wann wir auf sie zugreifen können — dazu später mehr.

## Erstellen einer NewTodo-Komponente

Beginnen wir damit, unser neues To-Do-Formular in eine eigene Komponente auszulagern. Mit dem, was wir bisher wissen, können wir eine neue Komponenten-Datei erstellen und den Code anpassen, um ein `addTodo`-Ereignis auszugeben, das den Namen des neuen To-Dos mit den zusätzlichen Details enthält.

1. Erstellen Sie eine neue Datei, `components/NewTodo.svelte`.
2. Geben Sie den folgenden Inhalt darin ein:

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

   Hier binden wir das `<input>`-Feld an die `name`-Variable mit `bind:value={name}` und deaktivieren die _Hinzufügen_-Schaltfläche, wenn das Feld leer ist (d.h. kein Textinhalt vorhanden) mit `disabled={!name}`. Wir kümmern uns auch um die <kbd>Escape</kbd>-Taste mit `on:keydown={(e) => e.key === 'Escape' && onCancel()}}`. Wann immer die <kbd>Escape</kbd>-Taste gedrückt wird, führen wir `onCancel()` aus, das einfach die `name`-Variable bereinigt.

3. Nun müssen wir es aus dem Inneren der `Todos`-Komponente `importieren` und verwenden und die `addTodo()`-Funktion anpassen, um den Namen des neuen To-Dos zu empfangen.

   Fügen Sie die folgende Import-Anweisung unter den anderen in `Todos.svelte` hinzu:

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. Und aktualisieren Sie die `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   `addTodo()` empfängt jetzt den Namen des neuen To-Dos direkt, sodass wir die `newTodoName`-Variable nicht mehr benötigen, um ihr den Wert zu geben. Unsere `NewTodo`-Komponente kümmert sich darum.

   > [!NOTE]
   > Die `{ name }`-Syntax ist einfach eine Abkürzung für `{ name: name }`. Diese stammt ursprünglich aus JavaScript selbst und hat nichts direkt mit Svelte zu tun, abgesehen davon, dass sie einige Inspiration für Sveltes eigene Abkürzungen bietet.

5. Schließlich für diesen Abschnitt ersetzen Sie das NewTodo-Formular-Markup mit einem Aufruf der `NewTodo`-Komponente, so:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Arbeiten mit DOM-Knoten unter Verwendung der `bind:this={dom_node}`-Direktive

Nun möchten wir, dass das `<input>`-Element der `NewTodo`-Komponente jedes Mal, wenn die _Hinzufügen_-Schaltfläche gedrückt wird, den Fokus wiedererlangt. Dazu benötigen wir einen Verweis auf den DOM-Knoten des Eingabefelds. Svelte bietet hier einen Weg, dies mit der `bind:this={dom_node}`-Direktive zu tun. Wenn angegeben, sobald die Komponente eingebunden und der DOM-Knoten erstellt wurde, weist Svelte einen Verweis auf das DOM-Element der angegebenen Variable zu.

Wir erstellen eine `nameEl`-Variable und binden diese an das Eingabefeld mit `bind:this={nameEl}`. Dann rufen wir in `addTodo()`, nach dem Hinzufügen eines neuen To-Dos, `nameEl.focus()` auf, um das `<input>`-Feld erneut zu fokussieren. Wir werden dasselbe tun, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt, mit der Funktion `onCancel()`.

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

Probieren Sie die App aus: Geben Sie einen neuen To-Do-Namen in das `<input>`-Feld ein, drücken Sie <kbd>Tab</kbd>, um den Fokus auf die _Hinzufügen_-Schaltfläche zu legen, und drücken Sie dann <kbd>Enter</kbd> oder <kbd>Escape</kbd>, um zu sehen, wie das Eingabefeld den Fokus wieder erlangt.

### Automatisches Fokussieren unseres Eingabefelds

Das nächste Merkmal, das wir unserer `NewTodo`-Komponente hinzufügen werden, ist ein `autofocus`-Prop, das es uns ermöglicht anzugeben, dass wir das `<input>`-Feld beim Laden der Seite fokussieren möchten.

1. Unser erster Versuch sieht folgendermaßen aus: Lassen Sie uns versuchen, das `autofocus`-Prop hinzuzufügen und einfach `nameEl.focus()` aus dem `<script>`-Block aufzurufen. Aktualisieren Sie den ersten Teil des `<script>`-Abschnitts von `NewTodo.svelte` (die ersten vier Zeilen), sodass er wie folgt aussieht:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // reference to the name input DOM node

     if (autofocus) nameEl.focus();
   ```

2. Gehen Sie nun zurück zu der `Todos`-Komponente und übergeben Sie das `autofocus`-Prop in dem Aufruf der `<NewTodo>`-Komponente, wie folgt:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. Wenn Sie jetzt Ihre App ausprobieren, werden Sie feststellen, dass die Seite nun leer ist und Sie in Ihrer Entwicklertools-Konsole einen Fehler in der Art von: `TypeError: nameEl is undefined` sehen.

Um zu verstehen, was hier passiert, sprechen wir etwas mehr über diesen [Lebenszyklus der Komponente](https://learn.svelte.dev/tutorial/onmount), den wir zuvor erwähnt haben.

## Lebenszyklus der Komponente und die `onMount()`-Funktion

Wenn eine Komponente instanziiert wird, führt Svelte den Initialisierungscode aus (d.h. den `<script>`-Abschnitt der Komponente). Zu diesem Zeitpunkt sind jedoch alle Knoten, die die Komponente bilden, noch nicht an den DOM angehängt, tatsächlich existieren sie nicht einmal.

Also, wie können Sie wissen, wann die Komponente erstellt und an den DOM angehängt wurde? Die Antwort lautet, dass jede Komponente einen Lebenszyklus hat, der beginnt, wenn sie erstellt wird, und endet, wenn sie zerstört wird. Es gibt eine Handvoll Funktionen, die es Ihnen erlauben, Code zu bestimmten Schlüsselmomenten während dieses Lebenszyklus auszuführen.

Diejenige, die Sie am häufigsten verwenden werden, ist `onMount()`, die es uns ermöglicht, einen Rückruf auszuführen, sobald die Komponente am DOM angebracht wurde. Probieren wir es aus und sehen, was mit der `nameEl`-Variable passiert.

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

3. Entfernen Sie jetzt die Zeile `if (autofocus) nameEl.focus()`, um den Fehler zu vermeiden, den wir zuvor gesehen haben.
4. Die App funktioniert nun wieder, und Sie werden das Folgende in Ihrer Konsole sehen:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   Wie Sie sehen, ist `nameEl` beim Initialisieren der Komponente undefiniert, was Sinn macht, da der `<input>`-Knoten noch nicht existiert. Nachdem die Komponente montiert ist, weist Svelte dank der `bind:this={nameEl}`-Direktive eine Referenz auf den `<input>` DOM-Knoten an die Variable `nameEl` zu.

5. Um die Autofokus-Funktionalität zum Laufen zu bringen, ersetzen Sie den vorherigen `console.log()`/`onMount()`-Block, den Sie hinzugefügt haben, durch diesen:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Gehen Sie wieder zu Ihrer App, und Sie werden sehen, dass das `<input>`-Feld beim Laden der Seite fokussiert wird.

> [!NOTE]
> Sie können sich die anderen [Lebenszyklusfunktionen in der Svelte-Dokumentation](https://svelte.dev/docs/svelte) ansehen, und Sie können sie in Aktion im [interaktiven Tutorial](https://learn.svelte.dev/tutorial/onmount) sehen.

## Auf das Aktualisieren des DOM warten mit der `tick()`-Funktion

Jetzt kümmern wir uns um die Fokusverwaltungsdetails der `Todo`-Komponente. Zuerst möchten wir, dass das Editier-`<input>` einer `Todo`-Komponente den Fokus erhält, wenn wir den Bearbeitungsmodus betreten, indem wir die _Bearbeiten_-Schaltfläche drücken. In ähnlicher Weise wie wir zuvor gesehen haben, erstellen wir eine `nameEl`-Variable in `Todo.svelte` und rufen `nameEl.focus()` auf, nachdem wir die `editing`-Variable auf `true` gesetzt haben.

1. Öffnen Sie die Datei `components/Todo.svelte` und fügen Sie eine `nameEl`-Variablendeklaration direkt unter Ihren anderen Deklarationen für editing und name hinzu:

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

3. Und schließlich binden Sie `nameEl` an das `<input>`-Feld, indem Sie es wie folgt aktualisieren:

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

Was passiert hier? Wenn Sie den Status einer Komponente in Svelte aktualisieren, wird das DOM nicht sofort aktualisiert. Stattdessen wartet es bis zur nächsten Mikroaufgabe, um zu sehen, ob es irgendwelche anderen Änderungen gibt, die angewendet werden müssen, einschließlich in anderen Komponenten. Dadurch werden unnötige Arbeiten vermieden und der Browser kann Dinge effektiver bündeln.

In diesem Fall, wenn `editing` `false` ist, ist das Editier-`<input>` nicht sichtbar, da es nicht im DOM existiert. Innerhalb der `onEdit()`-Funktion setzen wir `editing = true` und versuchen sofort danach, auf die `nameEl`-Variable zuzugreifen und `nameEl.focus()` auszuführen. Das Problem hier ist, dass Svelte den DOM noch nicht aktualisiert hat.

Eine Möglichkeit, dieses Problem zu lösen, besteht darin, [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) zu verwenden, um den Aufruf von `nameEl.focus()` bis zum nächsten Ereigniszyklus zu verzögern, und Svelte die Gelegenheit zu geben, den DOM zu aktualisieren.

Versuchen Sie dies jetzt:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

Die obige Lösung funktioniert, ist jedoch ziemlich unelegant. Svelte bietet einen besseren Weg, um diese Fälle zu behandeln. Die [`tick()`-Funktion](https://learn.svelte.dev/tutorial/tick) gibt ein Versprechen zurück, das sich auflöst, sobald alle ausstehenden Statusänderungen auf den DOM angewendet wurden (oder sofort, wenn keine ausstehenden Statusänderungen vorhanden sind). Versuchen wir es jetzt.

1. Importieren Sie zunächst `tick` oben im `<script>`-Abschnitt zusammen mit Ihrem bestehenden Import:

   ```js
   import { tick } from "svelte";
   ```

2. Rufen Sie als nächstes `tick()` mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) aus einer [async Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) auf; aktualisieren Sie `onEdit()` wie folgt:

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

Als nächstes möchten wir, dass das Name-`<input>`-Feld automatisch den gesamten Text bei Fokus auswählt. Außerdem möchten wir dies so entwickeln, dass es leicht auf jedes HTML-`<input>` wiederverwendet werden kann und auf eine deklarative Weise angewendet werden kann. Wir werden dieses Bedürfnis als Anlass nutzen, um eine sehr leistungsstarke Funktion zu zeigen, die Svelte uns bietet, um Funktionalität zu regulären HTML-Elementen hinzuzufügen: [Aktionen](https://svelte.dev/docs/svelte-action).

Um den Text eines DOM-Eingabeknotens auszuwählen, müssen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufrufen. Um diese Funktion jedes Mal aufzurufen, wenn der Knoten den Fokus erhält, benötigen wir einen Ereignis-Listener, der etwa so aussieht:

```js
node.addEventListener("focus", (event) => node.select());
```

Und, um Speicherlecks zu vermeiden, sollten wir auch die [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Funktion aufrufen, wenn der Knoten zerstört wird.

> [!NOTE]
> All das ist nur Standardfunktionalität der WebAPI; nichts davon ist spezifisch für Svelte.

Wir könnten all dies in unserer `Todo`-Komponente erreichen, wann immer wir das `<input>` zum DOM hinzufügen oder daraus entfernen, aber wir müssten sehr vorsichtig sein, um den Ereignis-Listener hinzuzufügen, nachdem der Knoten dem DOM hinzugefügt wurde, und den Listener zu entfernen, bevor der Knoten aus dem DOM entfernt wird. Zudem wäre unsere Lösung nicht sehr wiederverwendbar.

Hier kommen Svelte-Aktionen ins Spiel. Grundsätzlich erlauben sie uns, eine Funktion auszuführen, wann immer ein Element zum DOM hinzugefügt wurde, und nachdem es aus dem DOM entfernt wurde.

In unserem unmittelbaren Anwendungsfall definieren wir eine Funktion `selectOnFocus()`, die einen Knoten als Parameter empfängt. Die Funktion fügt diesem Knoten einen Ereignis-Listener hinzu, sodass immer, wenn er den Fokus erhält, er den Text auswählt. Dann gibt sie ein Objekt mit einer `destroy`-Eigenschaft zurück. Die `destroy`-Eigenschaft ist das, was Svelte ausführt, nachdem der Knoten aus dem DOM entfernt wurde. Hier entfernen wir den Listener, um sicherzustellen, dass wir kein Speicherleck hinterlassen.

1. Erstellen wir die Funktion `selectOnFocus()`. Fügen Sie das Folgende zum Ende des `<script>`-Abschnitts von `Todo.svelte` hinzu:

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

2. Als Nächstes müssen wir dem `<input>` sagen, dass es diese Funktion verwendet mit der [`use:action`](https://svelte.dev/docs/element-directives#use-action)-Direktive:

   ```svelte
   <input use:selectOnFocus />
   ```

   Mit dieser Direktive teilen wir Svelte mit, diese Funktion auszuführen und den DOM-Knoten des `<input>` als Parameter zu übergeben, sobald die Komponente am DOM angebracht wurde. Es wird auch dafür verantwortlich sein, die `destroy`-Funktion auszuführen, wenn die Komponente aus dem DOM entfernt wird. Auf diese Weise kümmert sich die `use`-Direktive um den Lebenszyklus der Komponente für uns.

   In unserem Fall würde unser `<input>` so aussehen: Aktualisieren Sie das erste Label/Eingabefeld-Paar der Komponente (innerhalb der Bearbeitungsvorlage) wie folgt:

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

3. Versuchen Sie es aus. Gehen Sie zu Ihrer App, drücken Sie die _Bearbeiten_-Schaltfläche einer Aufgabe, und drücken Sie dann <kbd>Tab</kbd>, um den Fokus vom `<input>` zu nehmen. Klicken Sie jetzt auf das `<input>`, und Sie sehen, dass der gesamte Eingabetext ausgewählt ist.

### Die Aktion wiederverwendbar machen

Jetzt machen wir diese Funktion wirklich wiederverwendbar über alle Komponenten hinweg. `selectOnFocus()` ist nur eine Funktion ohne jegliche Abhängigkeit von der `Todo.svelte`-Komponente, sodass wir sie problemlos in eine Datei extrahieren und von dort aus verwenden können.

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

3. Importieren Sie es nun von innerhalb `Todo.svelte`; fügen Sie die folgende Importanweisung direkt unterhalb der anderen Anweisungen hinzu:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. Und entfernen Sie die `selectOnFocus()`-Definition aus `Todo.svelte`, da wir sie dort nicht mehr benötigen.

### Unsere Aktion wiederverwenden

Um die Wiederverwendbarkeit unserer Aktion zu demonstrieren, verwenden wir sie in `NewTodo.svelte`.

1. Importieren Sie `selectOnFocus()` aus `actions.js` auch hier, wie zuvor:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Fügen Sie das `use:selectOnFocus`-Verzeichnis zum `<input>` hinzu, so:

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

Mit nur wenigen Zeilen Code können wir Funktionalität zu regulären HTML-Elementen auf eine sehr wiederverwendbare und deklarative Weise hinzufügen. Es erfordert nur einen `import` und eine kurze Direktive wie `use:selectOnFocus`, die ihr Ziel klar beschreibt. Und wir können dies erreichen, ohne dass wir ein benutzerdefiniertes Wrapper-Element wie `TextInput`, `MyInput` oder ähnliches erstellen müssen. Darüber hinaus können Sie so viele `use:action`-Direktiven hinzufügen, wie Sie möchten, zu einem Element.

Auch mussten wir nicht mit `onMount()`, `onDestroy()` oder `tick()` kämpfen — die `use`-Direktive kümmert sich für uns um den Lebenszyklus der Komponente.

### Weitere Verbesserungen von Aktionen

Im vorherigen Abschnitt, während wir mit den `Todo`-Komponenten arbeiteten, mussten wir uns mit `bind:this`, `tick()` und `async` Funktionen auseinandersetzen, nur um unserem `<input>` den Fokus zu geben, sobald es dem DOM hinzugefügt wurde.

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

Als letztes Beispiel, bevor wir fortfahren, gehen wir zurück zu unserer `Todo.svelte`-Komponente und geben der _Bearbeiten_-Schaltfläche den Fokus, nachdem der Nutzer _Speichern_ oder _Abbrechen_ gedrückt hat.

Wir könnten versuchen, einfach unsere `focusOnInit`-Aktion wieder zu verwenden, indem wir `use:focusOnInit` zur _Bearbeiten_-Schaltfläche hinzufügen. Aber wir würden ein subtilen Fehler einführen. Wenn Sie ein neues To-Do hinzufügen, wird der Fokus auf die _Bearbeiten_-Schaltfläche des zuletzt hinzugefügten To-Dos gelegt. Das ist, weil die `focusOnInit`-Aktion ausgeführt wird, wenn die Komponente erstellt wird.

Das ist nicht das, was wir wollen — wir wollen, dass die _Bearbeiten_-Schaltfläche den Fokus nur erhält, wenn der Benutzer _Speichern_ oder _Abbrechen_ gedrückt hat.

1. Gehen Sie also zurück zu Ihrer `Todo.svelte`-Datei.
2. Zunächst erstellen wir eine Markierung namens `editButtonPressed` und initialisieren sie mit `false`. Fügen Sie dies direkt unter Ihren anderen Variablendefinitionen hinzu:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Als nächstes passen wir die Funktionalität der _Bearbeiten_-Schaltfläche an, um diese Markierung zu speichern, und erstellen die Aktion dafür. Aktualisieren Sie die `onEdit()`-Funktion wie folgt:

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

5. Schließlich verwenden wir die `focusEditButton`-Aktion bei der _Bearbeiten_-Schaltfläche, so:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Gehen Sie zurück und probieren Sie Ihre App wieder aus. Zu diesem Zeitpunkt wird jedes Mal, wenn die _Bearbeiten_-Schaltfläche dem DOM hinzugefügt wird, die `focusEditButton`-Aktion ausgeführt, aber sie wird der Schaltfläche nur dann den Fokus geben, wenn die Markierung `editButtonPressed` `true` ist.

> [!NOTE]
> Wir haben hier erstmal nur an der Oberfläche der Aktionen gekratzt. Aktionen können auch reaktive Parameter haben, und Svelte lässt uns erkennen, wann irgendeiner dieser Parameter sich ändert. Auf diese Weise können wir Funktionen hinzufügen, die sich reibungslos in das Svelte-Reaktivitätssystem integrieren. Für eine detailliertere Einführung in Aktionen sollten Sie die [Svelte `use:action`-Dokumentation](https://svelte.dev/docs/element-directives#use-action) überprüfen.

## Komponentenbindung: Freigeben von Methoden und Variablen von Komponenten durch die `bind:this={Komponente}`-Direktive

Es gibt immer noch eine Barrierefreiheit, die bleibt. Wenn der Benutzer die _Löschen_-Schaltfläche drückt, verschwindet der Fokus.

Die letzte Funktion, die wir in diesem Artikel betrachten werden, betrifft das Setzen des Fokus auf die Statusüberschrift, nachdem ein To-Do gelöscht wurde.

Warum die Statusüberschrift? In diesem Fall wurde das Element, das den Fokus hatte, gelöscht, sodass es keinen klaren Kandidaten gibt, um den Fokus zu erhalten. Wir haben die Statusüberschrift ausgewählt, weil sie sich in der Nähe der Liste der Aufgaben befindet und es eine Möglichkeit ist, eine visuelle Rückmeldung über Entfernung der Aufgabe zu geben, sowie darstellt, was für Benutzer von Screenreadern passiert ist.

Zuerst extrahieren wir die Statusüberschrift in ihre eigene Komponente.

1. Erstellen Sie eine neue Datei, `components/TodosStatus.svelte`.
2. Fügen Sie den folgenden Inhalt dazu hinzu:

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

3. Importieren Sie die Datei am Anfang von `Todos.svelte`, indem Sie die folgende Importanweisung direkt unter den anderen hinzufügen:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Ersetzen Sie die `<h2>`-Statusüberschrift in `Todos.svelte` mit einem Aufruf der `TodosStatus`-Komponente und übergeben Sie `todos` als Prop, so:

   ```svelte
   <TodosStatus {todos} />
   ```

5. Sie können auch etwas aufräumen, indem Sie die `totalTodos`- und `completedTodos`-Variablen aus `Todos.svelte` entfernen. Entfernen Sie einfach die Zeilen `$: totalTodos = …` und `$: completedTodos = …` und entfernen Sie auch die Referenz zu `totalTodos`, wenn wir `newTodoId` berechnen und verwenden `todos.length` stattdessen. Ersetzen Sie den Block, der mit `let neuenTodoId` beginnt, mit:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Alles funktioniert wie erwartet — wir haben gerade den letzten Markup-Teil in seine eigene Komponente extrahiert.

Jetzt müssen wir eine Möglichkeit finden, der `<h2>`-Statuszeile den Fokus zu geben, nachdem ein To-Do entfernt wurde.

Bisher haben wir gesehen, wie man Informationen an eine Komponente übergibt über Props, und wie eine Komponente mit ihrem Elternteil kommunizieren kann, indem sie Ereignisse ausgibt oder bidirektionale Datenbindung verwendet. Die untergeordnete Komponente könnte eine Referenz zum `<h2>`-Element `using bind:this={dom_node}` erhalten und sie über bidirektionale Datenbindung nach außen zur Verfügung stellen. Aber das würde die Kapselung der Komponente durchbrechen; es sollte ihre eigene Verantwortung sein, Festlegungen vorzunehmen.

Also müssen wir die Methode `TodosStatus` bereitstellen, die von ihrem Elternteil aufgerufen werden kann, um ihr den Fokus zu geben. Es ist ein sehr häufiger Szenario, dass eine Komponente einige Verhalten oder Informationen an den Verbraucher freigeben muss; sehen wir, wie das mit Svelte zu erreichen ist.

Wir haben bereits gesehen, dass Svelte `export let varname = …` verwendet, um [Props zu deklarieren](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). Wenn Sie jedoch einen `const`, `class` oder `function` exportieren, ist er von außen durch die Komponente schreibgeschützt. Funktionsausdrücke sind jedoch gültige Props. Im folgenden Beispiel sind die ersten drei Deklarationen Props, und die restlichen sind exportierte Werte:

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

Mit diesem Wissen lassen Sie uns zu unserem Anwendungsfall zurückkehren. Wir erstellen eine Funktion namens `focus()`, die den Fokus auf die `<h2>`-Überschrift setzt. Dafür benötigen wir eine Variable `headingEl`, um die Referenz auf den DOM-Knoten zu halten, und wir müssen sie an das `<h2>`-Element mit `bind:this={headingEl}` binden. Unsere Fokus-Methode wird einfach `headingEl.focus()` ausführen.

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

   Beachten Sie, dass wir dem `<h2>` ein `tabindex`-Attribut hinzugefügt haben, um dem Element zu ermöglichen, programmgesteuert den Fokus zu erhalten.

   Wie wir zuvor gesehen haben, gibt uns die Verwendung der `bind:this={headingEl}`-Direktive eine Referenz zum DOM-Knoten in der Variablen `headingEl`. Dann verwenden wir `export function focus()`, um eine Funktion zur Verfügung zu stellen, die den Fokus auf die `<h2>`-Überschrift setzt.

   Wie können wir auf diese exportierten Werte aus dem Elternteil zugreifen? Genau wie Sie eine Bindung zu DOM-Elementen mit der `bind:this={dom_node}`-Direktive anwenden können, können Sie auch zu Instanzen von Komponenten mit `bind:this={Komponente}` binden. Somit erhalten Sie bei der Verwendung von `bind:this` bei einem HTML-Element eine Referenz zum DOM-Knoten, und wenn Sie dies bei einer Svelte-Komponente tun, erhalten Sie eine Referenz zur Instanz dieser Komponente.

2. Um also zur Instanz von `TodosStatus` zu binden, erstellen wir zunächst eine `todosStatus`-Variable in `Todos.svelte`. Fügen Sie die folgende Zeile unter Ihren Import-Anweisungen hinzu:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Fügen Sie anschließend eine `bind:this={todosStatus}`-Direktive zum Aufruf hinzu, wie folgt:

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. Nun können wir die `exportierte focus()`-Methode aus unserer `removeTodo()`-Funktion aufrufen:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
   }
   ```

5. Gehen Sie zurück zu Ihrer App. Jetzt, wenn Sie irgendein To-Do löschen, wird die Statusüberschrift fokussiert. Dies ist nützlich, um die Änderung der Anzahl der To-Dos sowohl für sehende Benutzer als auch für Screenreader-Benutzer hervorzuheben.

> [!NOTE]
> Sie fragen sich vielleicht, warum wir eine neue Variable für die Komponentenbindung deklarieren müssen. Warum können wir nicht einfach `TodosStatus.focus()` aufrufen? Sie könnten mehrere `TodosStatus`-Instanzen aktiv haben, daher benötigen Sie eine Möglichkeit, auf jede bestimmte Instanz zu verweisen. Aus diesem Grund müssen Sie für jede spezifische Instanz eine Variable zur Bindung festlegen.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir alle erforderlichen Funktionen zu unserer App hinzugefügt, außerdem haben wir uns um eine Reihe von Barrierefreiheits- und Benutzerfreundlichkeitsproblemen gekümmert. Wir haben auch das Teilen unserer App in handhabbare Komponenten abgeschlossen, wobei jede eine einzigartige Verantwortung hat.

In der Zwischenzeit haben wir einige fortgeschrittene Svelte-Techniken gesehen, wie zum Beispiel:

- Umgang mit Reaktivitäts-Fallstricken beim Aktualisieren von Objekten und Arrays
- Arbeiten mit DOM-Knoten unter Verwendung von `bind:this={dom_node}` (Binden von DOM-Elementen)
- Verwenden der Lebenszyklusfunktion `onMount()`
- Erzwingen, dass Svelte ausstehende Statusänderungen mit der `tick()`-Funktion auflöst
- Hinzufügen von Funktionalität zu HTML-Elementen auf eine wiederverwendbare und deklarative Weise mit der `use:action`-Direktive
- Zugriff auf Methoden von Komponenten unter Verwendung von `bind:this={component}` (Binden von Komponenten)

Im nächsten Artikel werden wir sehen, wie man Stores verwendet, um zwischen Komponenten zu kommunizieren, und Animationen zu unseren Komponenten hinzufügt.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}
