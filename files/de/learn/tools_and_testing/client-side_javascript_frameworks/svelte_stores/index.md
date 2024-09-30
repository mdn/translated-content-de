---
title: Arbeiten mit Svelte Stores
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zum Umgang mit Reaktivität, dem Arbeiten mit DOM-Knoten und zum Bereitstellen von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir einen weiteren Weg, um die Zustandsverwaltung in Svelte zu handhaben: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositorys, die Werte halten. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>
          vertraut sind und Kenntnisse über
          <a href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >
          haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App
          zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Erfahren Sie, wie Sie Svelte Stores verwenden</td>
    </tr>
  </tbody>
</table>

Mit Stores erstellen wir eine `Alert`-Komponente, die Benachrichtigungen auf dem Bildschirm anzeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist weder Eltern- noch Kindkomponente einer anderen —, sodass die Nachrichten nicht in die Komponentenhierarchie passen.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die Todo-Informationen im [Webspeicher](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere To-Dos auch nach einem Seitenneuladen erhalten bleiben.

## Code mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu coden, beginnen Sie bei:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit unserem App-Zustand

Wir haben bereits gesehen, wie unsere Komponenten mittels Props, bidirektionaler Datenbindung und Ereignissen miteinander kommunizieren können. In all diesen Fällen haben wir mit der Kommunikation zwischen Eltern- und Kindkomponenten gearbeitet.

Aber nicht alle Anwendungszustände gehören innerhalb der Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das dunkle Thema ausgewählt ist.

Manchmal muss auf den Zustand Ihrer Anwendung von mehreren Komponenten, die nicht hierarchisch verwandt sind, oder von einem regulären JavaScript-Modul zugegriffen werden.

Außerdem kann es bei komplexer werdenden Apps und komplizierter Komponentenhierarchie zu schwierig werden, dass Komponenten Daten untereinander weiterleiten. In diesem Fall kann der Wechsel zu einem globalen Datenspeicher eine gute Möglichkeit sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, dann sind Sie mit der Funktionsweise solcher Stores vertraut. Svelte Stores bieten ähnliche Funktionen zur Zustandsverwaltung.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die interessierten Parteien erlaubt, benachrichtigt zu werden, wann immer sich der Wert des Stores ändert, und optional einer `set()`-Methode, die es Ihnen ermöglicht, neue Werte für den Store festzulegen. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte stellt Funktionen zur Verfügung, um [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [abgeleitete](https://svelte.dev/docs/svelte-store#derived) Stores im Modul `svelte/store` zu erstellen.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivsystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores mit Blick auf den Store-Vertrag erstellen, erhalten Sie diesen Reaktivitäts-Zucker kostenlos dazu.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, werden wir eine `Alert`-Komponente erstellen. Solche Widgets werden auch als Pop-up-Benachrichtigungen, Toast oder Benachrichtigungsblasen bezeichnet.

Unsere `Alert`-Komponente wird vom `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Immer wenn eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Einen Store erstellen

Beginnen wir mit der Erstellung eines beschreibbaren Stores. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei `stores.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die Funktion `writable()` aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von „Welcome to the to-do list app!“ zu erstellen. Dann `exportieren` wir den Store.

### Die tatsächliche Komponente erstellen

Lassen Sie uns nun unsere `Alert`-Komponente erstellen und sehen, wie wir Werte aus dem Store lesen können.

1. Erstellen Sie eine weitere neue Datei namens `src/components/Alert.svelte`.
2. Geben Sie ihr folgenden Inhalt:

   ```svelte
   <script>
     import { alert } from '../stores.js'
     import { onDestroy } from 'svelte'

     let alertContent = ''

     const unsubscribe = alert.subscribe((value) => alertContent = value)

     onDestroy(unsubscribe)
   </script>

   {#if alertContent}
   <div on:click={() => alertContent = ''}>
     <p>{ alertContent }</p>
   </div>
   {/if}

   <style>
   div {
     position: fixed;
     cursor: pointer;
     margin-right: 1.5rem;
     margin-left: 1.5rem;
     margin-top: 1rem;
     right: 0;
     display: flex;
     align-items: center;
     border-radius: 0.2rem;
     background-color: #565656;
     color: #fff;
     font-weight: 700;
     padding: 0.5rem 1.4rem;
     font-size: 1.5rem;
     z-index: 100;
     opacity: 95%;
   }
   div p {
     color: #fff;
   }
   div svg {
     height: 1.6rem;
     fill: currentcolor;
     width: 1.4rem;
     margin-right: 0.5rem;
   }
   </style>
   ```

Lassen Sie uns dieses Stück Code im Detail durchgehen.

- Zu Beginn importieren wir den `alert` Store.
- Als Nächstes importieren wir die `onDestroy()` Lebenszyklusfunktion, mit der wir einen Callback ausführen können, nachdem die Komponente aus dem Speicher entfernt wurde.
- Dann erstellen wir eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf Top-Level-Variablen aus dem Markup zugreifen können, und wann immer sie geändert werden, aktualisiert sich das DOM entsprechend.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Callback-Funktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Callback-Funktion mit dem neuen Wert als Parameter aufgerufen. In der Callback-Funktion weisen wir den empfangenen Wert der lokalen Variablen zu, was die Aktualisierung des DOMs der Komponente auslöst.
- Die `subscribe()` Methode gibt auch eine Aufräumfunktion zurück, die sich um das Freigeben der Subscription kümmert. Wir abonnieren also, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu beenden, wenn die Komponente entfernt wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup, und wenn der Benutzer auf die Benachrichtigung klickt, reinigen wir sie.
- Am Ende fügen wir einige CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Diese Einrichtung ermöglicht es uns, in einer reaktiven Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Callback ausgeführt. Dort weisen wir einer lokalen Variablen einen neuen Wert zu, und dank der Svelte-Reaktivität werden all unser Markup und reaktive Abhängigkeiten entsprechend aktualisiert.

### Die Komponente verwenden

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Import-Anweisung unterhalb der bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie nun Ihre Test-App und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die sagt, willkommen bei der To-Do-Listen-App](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Das funktioniert, aber Sie müssen diesen Code jedes Mal kopieren und einfügen, wenn Sie einen Store abonnieren möchten:

```svelte
<script>
  import myStore from "./stores.js";
  import { onDestroy } from "svelte";

  let myStoreContent = "";

  const unsubscribe = myStore.subscribe((value) => (myStoreContent = value));

  onDestroy(unsubscribe);
</script>

{myStoreContent}
```

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Ressourcen, um uns das Leben zu erleichern. In diesem Fall stellt Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription zur Verfügung. Einfach ausgedrückt, prefixen Sie den Store mit dem `$`-Zeichen und Svelte wird den Code generieren, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Lassen Sie uns dies auf unsere `Alert`-Komponente anwenden. Aktualisieren Sie die `<script>`- und Markup-Abschnitte von `Alert.svelte` wie folgt:

   ```svelte
   <script>
     import { alert } from '../stores.js'
   </script>

   {#if $alert}
   <div on:click={() => $alert = ''}>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies so funktioniert wie zuvor. Das ist viel besser!

Im Hintergrund hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, das `alert` Store zu abonnieren, `$alert` zu aktualisieren, wann immer sich der Inhalt des Stores ändert, und das Abonnement zu beenden, wenn die Komponente entfernt wird. Es generiert außerdem die `alert.set()` Anweisungen, wann immer wir einen Wert an `$alert` zuweisen.

Das Endergebnis dieses cleveren Tricks ist, dass Sie auf globale Stores genauso einfach wie auf reaktive lokale Variablen zugreifen können.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler in die Verantwortung nimmt, die Ergonomie der Entwickler zu verbessern, indem es uns von Boilerplate-Befehlen erspart und weniger fehleranfälligen Code generiert.

## In unseren Store schreiben

In unseren Store zu schreiben ist einfach eine Frage des Imports und der Ausführung von `$store = 'neuer Wert'`. Lassen Sie uns es in unserer `Todos`-Komponente verwenden.

1. Fügen Sie die folgende `import`-Anweisung unterhalb der bestehenden hinzu:

   ```js
   import { alert } from "../stores.js";
   ```

2. Aktualisieren Sie Ihre `addTodo()`-Funktion so:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
     $alert = `Todo '${name}' has been added`;
   }
   ```

3. Aktualisieren Sie `removeTodo()` so:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
     $alert = `Todo '${todo.name}' has been deleted`;
   }
   ```

4. Aktualisieren Sie die `updateTodo()`-Funktion zu diesem:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     if (todos[i].name !== todo.name)
       $alert = `todo '${todos[i].name}' has been renamed to '${todo.name}'`;
     if (todos[i].completed !== todo.completed)
       $alert = `todo '${todos[i].name}' marked as ${
         todo.completed ? "completed" : "active"
       }`;
     todos[i] = { ...todos[i], ...todo };
   }
   ```

5. Fügen Sie den folgenden reaktiven Block unterhalb des Blocks hinzu, der mit `let filter = 'all'` beginnt:

   ```js
   $: {
     if (filter === "all") {
       $alert = "Browsing all to-dos";
     } else if (filter === "active") {
       $alert = "Browsing active to-dos";
     } else if (filter === "completed") {
       $alert = "Browsing completed to-dos";
     }
   }
   ```

6. Und schließlich für den Moment, aktualisieren Sie die Blöcke `const checkAllTodos` und `const removeCompletedTodos` wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos = todos.map((t) => ({ ...t, completed }));
     $alert = `${completed ? "Checked" : "Unchecked"} ${todos.length} to-dos`;
   };
   const removeCompletedTodos = () => {
     $alert = `Removed ${todos.filter((t) => t.completed).length} to-dos`;
     todos = todos.filter((t) => !t.completed);
   };
   ```

7. Grundsätzlich haben wir den Store importiert und bei jedem Ereignis aktualisiert, was dazu führt, dass bei jedem eine neue Benachrichtigung angezeigt wird. Schauen Sie sich Ihre App erneut an und versuchen Sie, einige To-Dos hinzuzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausgeführt. Unsere `Alert`-Komponente — wie jeder Abonnent des alert Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Das Gleiche könnten wir innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten anfasst. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Unsere Alert-Komponente verbessern

Es ist ein wenig nervig, auf die Benachrichtigung klicken zu müssen, um sie loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwinden würde.

Lassen Sie uns sehen, wie das geht. Wir werden eine Prop mit den Millisekunden angeben, die wir warten, bevor wir die Benachrichtigung löschen, und wir werden ein Timeout definieren, um die Benachrichtigung zu entfernen. Wir sorgen auch dafür, das Timeout beim Entfernen der `Alert`-Komponente zu löschen, um Speicherlecks zu vermeiden.

1. Aktualisieren Sie den `<script>`-Bereich Ihrer `Alert.svelte`-Komponente wie folgt:

   ```js
   import { onDestroy } from "svelte";
   import { alert } from "../stores.js";

   export let ms = 3000;
   let visible;
   let timeout;

   const onMessageChange = (message, ms) => {
     clearTimeout(timeout);
     if (!message) {
       // hide Alert if message is empty
       visible = false;
     } else {
       visible = true; // show alert
       if (ms > 0) timeout = setTimeout(() => (visible = false), ms); // and hide it after ms milliseconds
     }
   };
   $: onMessageChange($alert, ms); // whenever the alert store or the ms props changes run onMessageChange

   onDestroy(() => clearTimeout(timeout)); // make sure we clean-up the timeout
   ```

2. Und aktualisieren Sie den `Alert.svelte`-Markup-Abschnitt wie folgt:

   ```svelte
   {#if visible}
   <div on:click={() => visible = false}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

Hier erstellen wir zuerst die Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine Funktion `onMessageChange()`, die dafür verantwortlich ist, ob die Benachrichtigung sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, diese Funktion aufzurufen, wann immer sich der `$alert` Store oder die `ms` Prop ändert.

Wann immer sich der `$alert` Store ändert, werden wir alle ausstehenden Timeouts löschen. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und die Benachrichtigung wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um die Benachrichtigung nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()`-Lebenszyklusfunktion sicher, dass wir die `clearTimeout()`-Funktion aufrufen.

Wir haben auch ein SVG-Icon über dem Benachrichtigungsabsatz hinzugefügt, um es ein wenig schöner aussehen zu lassen. Probieren Sie es erneut aus und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert einwandfrei, ist jedoch nicht sehr benutzerfreundlich für assistive Technologien. Das Problem sind Elemente, die dynamisch auf der Seite hinzugefügt und entfernt werden. Während sie für Benutzer, die die Seite sehen können, offensichtlich sind, sind sie möglicherweise nicht so offensichtlich für Benutzer von assistiven Technologien wie Bildschirmlesern. Um diese Situationen zu bewältigen, können wir [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch zu exponieren, damit sie von assistiven Technologien erkannt und angekündigt werden können.

Wir können einen Bereich deklarieren, der dynamische Inhalte enthält, die von assistiven Technologien angekündigt werden sollen, mit der Eigenschaft `aria-live` gefolgt von der Höflichkeitsstufe, die verwendet wird, um festzulegen, mit welcher Priorität Bildschirmleser Änderungen in diesem Bereich behandeln sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für häufig auftretende Situationen haben Sie auch mehrere vordefinierte spezialisierte `role`-Werte zur Verfügung, wie `log`, `status` und `alert`.

In unserem Fall genügt es, ein `role="alert"` zu dem `<div>`-Container hinzuzufügen, wie hier:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesern zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch, um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Es gibt mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/vision/) für macOS und iOS, unter anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, lesen Sie unseren Artikel [Umgang mit häufigen Barrierefreiheitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility).

## Den Store-Vertrag verwenden, um unsere To-Dos zu speichern

Unsere kleine App ermöglicht es uns, unsere To-Dos recht einfach zu verwalten, ist jedoch ziemlich nutzlos, wenn wir beim Neuladen immer dieselbe Liste von hartcodierten To-Dos erhalten. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-Dos speichern können.

Zuerst benötigen wir eine Möglichkeit, damit unsere `Todos`-Komponente die aktualisierten To-Dos an ihren Eltern zurückgibt. Wir könnten ein aktualisiertes Ereignis mit der Liste von To-Dos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Lassen Sie uns `App.svelte` öffnen und es versuchen.

1. Fügen Sie zunächst die folgende Zeile unterhalb Ihres `todos`-Arrays hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Als Nächstes aktualisieren Sie die `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist lediglich eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige To-Dos hinzuzufügen, und gehen Sie dann zu Ihrem Entwickler-Tools-Web-Console. Sie werden sehen, dass jede Änderung, die wir an unseren To-Dos vornehmen, dank der `bind`-Direktive im `todos`-Array definiert in `App.svelte` widergespiegelt wird.

Nun müssen wir einen Weg finden, um diese To-Dos zu speichern. Wir könnten etwas Code implementieren in unsere `App.svelte`-Komponente, um unsere To-Dos in den [Webspeicher](/de/docs/Web/API/Web_Storage_API) zu lesen und zu speichern oder zu einem Webdienst.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es erlaubt, seinen Inhalt zu speichern? Dies würde es ermöglichen, ihn wie jeden anderen Store zu verwenden, und den Speichermechanismus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web-Speicher synchronisiert, und später einen anderen entwickeln, der sich gegen einen Web-Service synchronisiert. Zwischen ihnen zu wechseln, wäre trivial und wir müssten `App.svelte` überhaupt nicht berühren.

### Unsere To-Dos speichern

Fangen wir also damit an, einen regulären Writable Store zu verwenden, um unsere To-Dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Nun müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir jetzt mit der `$todos`-reaktiven `$store`-Syntax auf die To-Dos zugreifen müssen.

   Aktualisieren Sie Ihre `App.svelte`-Datei so:

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";
     import Alert from "./components/Alert.svelte";

     import { todos } from "./stores.js";

     $todos = [
       { id: 1, name: "Create a Svelte starter app", completed: true },
       { id: 2, name: "Create your first component", completed: true },
       { id: 3, name: "Complete the rest of the tutorial", completed: false }
     ];
   </script>

   <Alert />
   <Todos bind:todos={$todos} />
   ```

3. Probieren Sie es aus; alles sollte funktionieren. Als nächstes werden wir sehen, wie wir unsere eigenen benutzerdefinierten Stores definieren können.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Seine Funktionen sollten so funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wenn sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die, wenn sie aufgerufen wird, das Abonnement beenden muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und alle aktiven Abonnementfunktionen des Stores synchron aufruft. Ein Store mit einer `set()`-Methode wird als Writable Store bezeichnet.

Fügen wir zunächst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos` Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unterhalb des `todos`-Arrays hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, werden Sie etwas Ähnliches in Ihrer Web-Konsole sehen:

![Web-Konsole, die die Funktionen und Inhalte des todos-Stores zeigt](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das `subscribe()`, `set()` und `update()`-Methoden enthält, und `$todos` ist unser Array von To-Dos.

Nur zu Referenzzwecken ist hier ein grundlegender Arbeits-Store, der von Grund auf implementiert wurde:

```js
export const writable = (initial_value = 0) => {
  let value = initial_value; // content of the store
  let subs = []; // subscriber's handlers

  const subscribe = (handler) => {
    subs = [...subs, handler]; // add handler to the array of subscribers
    handler(value); // call handler with current value
    return () => (subs = subs.filter((sub) => sub !== handler)); // return unsubscribe function
  };

  const set = (new_value) => {
    if (value === new_value) return; // same value, exit
    value = new_value; // update value
    subs.forEach((sub) => sub(value)); // update subscribers
  };

  const update = (update_fn) => set(update_fn(value)); // update function

  return { subscribe, set, update }; // store contract
};
```

Hier erklären wir `subs`, das ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler dem `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, indem wir den neuen Wert als Parameter übergeben.

Normalerweise implementieren Sie Stores nicht von Grund auf neu; stattdessen würden Sie den Writable Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der es nur zulässt, den Zähler um eins zu erhöhen oder seinen Wert zurückzusetzen:

```js
import { writable } from "svelte/store";
function myStore() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    addOne: () => update((n) => n + 1),
    reset: () => set(0),
  };
}
```

Wenn unsere To-Do-Listen-App zu komplex wird, könnten wir unseren To-Dos-Store alle Zustandsänderungen handhaben lassen. Wir könnten alle Methoden, die das `todo`-Array modifizieren (wie `addTodo()`, `removeTodo()`, etc.) aus unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsänderungen angewendet werden, könnten Komponenten nur diese Methoden aufrufen, um den Zustand der App zu ändern, und reaktiv die Informationen anzeigen, die vom Store bereitgestellt werden. Einen einzigartigen Platz zu haben, um Zustandsänderungen zu handhaben, erleichtert es, den Zustandsfluss zu verstehen und Probleme zu erkennen.

Svelte zwingt Sie nicht, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es stellt lediglich die Werkzeuge bereit, um Ihnen die Wahl zu lassen, wie Sie damit umgehen.

### Unseren benutzerdefinierten To-Dos-Store implementieren

Unsere To-Do-Listen-App ist nicht besonders komplex, daher werden wir nicht alle unsere Änderungmethoden in einem zentralen Ort verschieben. Wir werden sie einfach so belassen, wie sie sind, und uns stattdessen darauf konzentrieren, unsere To-Dos zu speichern.

> [!NOTE]
> Wenn Sie dieser Anleitung im Svelte REPL folgen, werden Sie diesen Schritt nicht vollständig abschließen können. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer sandboxed Umgebung, die den Zugriff auf den Webspeicher nicht zulässt, und Sie werden einen „The operation is insecure“-Fehler erhalten. Um diesen Abschnitt zu befolgen, müssen Sie das Repo klonen und in den Ordner `mdn-svelte-tutorial/06-stores` gehen, oder Sie können direkt den Inhalt des Ordners mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Webspeicher speichert, benötigen wir einen Writable Store, der Folgendes tut:

- Liest initial den Wert aus dem Webspeicher und, wenn nicht vorhanden, initialisiert es mit einem Default-Wert
- Wann immer der Wert modifiziert wird, aktualisiert er den Store selbst und auch die Daten im lokalen Speicher

Außerdem unterstützt der Webspeicher nur das Speichern von Zeichenfolgenwerten, daher müssen wir beim Speichern vom Objekt zu Zeichenfolge und umgekehrt beim Laden des Werts aus dem lokalen Speicher konvertieren.

1. Erstellen Sie eine neue Datei namens `localStore.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const localStore = (key, initial) => {
     // receives the key of the local storage and an initial value

     const toString = (value) => JSON.stringify(value, null, 2); // helper function
     const toObj = JSON.parse; // helper function

     if (localStorage.getItem(key) === null) {
       // item not present in local storage
       localStorage.setItem(key, toString(initial)); // initialize local storage with initial value
     }

     const saved = toObj(localStorage.getItem(key)); // convert to object

     const { subscribe, set, update } = writable(saved); // create the underlying writable store

     return {
       subscribe,
       set: (value) => {
         localStorage.setItem(key, toString(value)); // save also to local storage as a string
         return set(value);
       },
       update,
     };
   };
   ```

   - Unser `localStore` wird eine Funktion sein, die bei Ausführung initial ihren Inhalt aus dem Webspeicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()`, und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Webspeichers und einen Anfangswert angeben. Wir überprüfen dann, ob der Wert im Webspeicher vorhanden ist, und, falls nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Webspeicher zu lesen und zu schreiben, sowie die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet), um die Werte zu konvertieren.
   - Als Nächstes konvertieren wir den Zeichenfolgeninhalt, den wir aus dem Webspeicher erhalten, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich, jedes Mal, wenn wir die Inhalte des Stores aktualisieren, aktualisieren wir auch den Webspeicher, wobei der Wert in eine Zeichenfolge konvertiert wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, wobei die Operation zum Speichern des Werts im Webspeicher hinzugefügt wurde. Der Rest des Codes dient hauptsächlich der Initialisierung und Konvertierung.

3. Nun verwenden wir unseren lokalen Store in `stores.js`, um unseren lokal gespeicherten To-Dos-Store zu erstellen.

   Aktualisieren Sie `stores.js` wie folgt:

   ```js
   import { writable } from "svelte/store";
   import { localStore } from "./localStore.js";

   export const alert = writable("Welcome to the to-do list app!");

   const initialTodos = [
     { id: 1, name: "Visit MDN web docs", completed: true },
     { id: 2, name: "Complete the Svelte Tutorial", completed: false },
   ];

   export const todos = localStore("mdn-svelte-todo", initialTodos);
   ```

   Durch die Verwendung von `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store, die Daten im Webspeicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir legen auch ein paar To-Dos als Anfangswerte fest.

4. Lassen Sie uns jetzt die hartcodierten To-Dos in `App.svelte` entfernen. Aktualisieren Sie den Inhalt wie folgt. Wir löschen im Grunde nur das `$todos`-Array und die `console.log()`-Anweisungen:

   ```svelte
   <script>
     import Todos from './components/Todos.svelte'
     import Alert from './components/Alert.svelte'

     import { todos } from './stores.js'
   </script>

   <Alert />
   <Todos bind:todos={$todos} />
   ```

   > [!NOTE]
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist vollständig transparent in Bezug darauf, welche Art von Store wir verwenden.

5. Probieren Sie Ihre App erneut aus. Erstellen Sie ein paar To-Dos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Wenn Sie die URL erneut aufrufen, werden Ihre To-Dos immer noch da sein.
6. Sie können es auch in den DevTools-Konsole inspizieren. Geben Sie in der Web-Konsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, wie z. B. das Drücken der Schaltfläche _Alles deaktivieren_, und überprüfen Sie den Inhalt des Webspeichers noch einmal. Sie werden etwas Ähnliches bekommen:

   ![To-Do-App mit Web-Konsolenansicht daneben, die zeigt, dass wenn ein To-Do in der App geändert wird, der entsprechende Eintrag im Webspeicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte Stores bieten eine sehr einfache und leichte, aber dennoch äußerst leistungsstarke Möglichkeit, komplexe Anwendungszustände von einem globalen Datenspeicher aus auf eine reaktive Weise zu verwalten. Und da Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores genauso einfach wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere eigenen benutzerdefinierten Stores zu erstellen, um die inneren Arbeitsweisen des Stores selbst zu abstrahieren.

## Bonustrack: Transitions

Ändern wir jetzt das Thema und tun etwas Spaßiges und anderes: Fügen wir eine Animation zu unseren Benachrichtigungen hinzu. Svelte stellt ein ganzes Modul bereit, um [Transitions](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, sodass wir unsere Benutzeroberflächen ansprechender gestalten können.

Eine Transition wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird ausgelöst, wenn ein Element durch eine Zustandsänderung in das DOM eingefügt oder daraus entfernt wird. Das Modul `svelte/transition` exportiert sieben Funktionen: `fade`, `blur`, `fly`, `slide`, `scale`, `draw` und `crossfade`.

Geben wir unserer `Alert`-Komponente eine fly `transition`. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Fügen Sie die folgende `import`-Anweisung unterhalb der bestehenden hinzu:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um sie zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag wie folgt:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Transitions können auch Parameter erhalten, so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > Die doppelten geschweiften Klammern sind keine besondere Svelte-Syntax. Es ist einfach ein literales JavaScript-Objekt, das als Parameter zur fly-Transition übergeben wird.

3. Probieren Sie Ihre App erneut aus, und Sie werden sehen, dass die Benachrichtigungen jetzt ein wenig ansprechender aussehen.

> [!NOTE]
> Da Svelte ein Compiler ist, kann es die Größe unseres Bundles optimieren, indem Funktionen ausgeschlossen werden, die nicht verwendet werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wiegt unsere `public/build/bundle.js` Datei etwas weniger als 22 KB. Wenn wir die `transitions:fly`-Direktive entfernen, erkennt Svelte intelligent, dass die fly-Funktion nicht verwendet wird, und die `bundle.js`-Dateigröße sinkt auf nur 18 KB.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen, um mit Animationen und Transitions umzugehen. Svelte unterstützt auch die Angabe verschiedener Transitions, die beim Hinzufügen oder Entfernen eines Elements aus dem DOM mit den Direktiven `in:fn`/`out:fn` angewendet werden, und es ermöglicht Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Transitions zu definieren. Es hat auch mehrere easing Funktionen, um die Änderungsrate über die Zeit anzugeben. Schauen Sie sich den [Ease-Visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen Ease-Funktionen zu erkunden, die verfügbar sind.

## Der Code bisher

### Git

Um den Zustand des Codes anzuzeigen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos zu, so:

```bash
cd mdn-svelte-tutorial/07-next-steps
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und die Speicherung von `todos` im Webspeicher.

- Dadurch konnten wir einige fortgeschrittene Svelte-Techniken demonstrieren. Wir haben die `Alert`-Komponente entwickelt, um zu zeigen, wie man eine komponentenübergreifende Zustandsverwaltung mit Stores implementiert. Wir haben auch gesehen, wie man sich automatisch bei Stores anmelden kann, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann haben wir gesehen, wie wir unseren eigenen Store von Grund auf neu implementieren können, und auch wie man den beschreibbaren Svelte-Store erweitert, um Daten im Webspeicher zu speichern.
- Am Ende haben wir uns mit der Verwendung der Svelte `transition`-Direktive beschäftigt, um Animationen an DOM-Elementen zu implementieren.

Im nächsten Artikel erfahren wir, wie Sie TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügen. Um alle Funktionen optimal nutzen zu können, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
