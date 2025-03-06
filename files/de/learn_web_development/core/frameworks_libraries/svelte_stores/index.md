---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, ihre Organisation in Komponenten vervollständigt und einige fortgeschrittene Techniken zum Umgang mit Reaktivität, der Arbeit mit DOM-Knoten und dem Freigeben von Komponentenfunktionen diskutiert. In diesem Artikel zeigen wir eine weitere Möglichkeit, das Zustandsmanagement in Svelte zu handhaben: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte halten. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich ihre Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Hauptsprachen
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
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Svelte-Stores nutzt</td>
    </tr>
  </tbody>
</table>

Mit Hilfe von Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm anzeigt, die Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist weder ein Eltern- noch ein Kindteil einer anderen — daher passen die Nachrichten nicht in die Komponenten-Hierarchie.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die To-do-Informationen im [Web Storage](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere To-dos über Seitenaktualisierungen hinweg erhalten bleiben.

## Code zusammen mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie das folgende aus

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL mit zu coden, beginnen Sie bei

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit unserem App-Zustand

Wir haben bereits gesehen, wie unsere Komponenten miteinander über Props, bidirektionales Daten-Binding und Ereignisse kommunizieren können. In all diesen Fällen haben wir mit der Kommunikation zwischen Eltern- und Kindkomponenten gearbeitet.

Aber nicht alle Anwendungszustände gehören innerhalb der Komponenten-Hierarchie Ihrer Anwendung. Zum Beispiel Informationen über den eingeloggten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss auf den Zustand Ihrer App von mehreren Komponenten zugegriffen werden, die hierarchisch nicht miteinander verbunden sind, oder von einem regulären JavaScript-Modul.

Wenn Ihre App zudem komplex wird und die Komponentenstruktur kompliziert wird, kann es schwierig werden, Daten zwischen den Komponenten weiterzuleiten. In diesem Fall kann der Wechsel zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, sind Sie mit der Funktionsweise dieser Art von Store vertraut. Svelte-Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Wert des Stores ändert, und einer optionalen `set()`-Methode, mit der Sie neue Werte für den Store festlegen können. Dieses minimale API wird als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bezeichnet.

Svelte bietet Funktionen zum Erstellen von [lesbaren](https://svelte.dev/docs/svelte-store#readable), [beschreibbaren](https://svelte.dev/docs/svelte-store#writable) und [abgeleiteten](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store` Modul.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores entwickeln, die den Store-Vertrag einhalten, erhalten Sie diese Reaktivitätssyntaktik kostenlos dazu.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Diese Art von Widgets ist auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann ihr Benachrichtigungen senden. Jedes Mal, wenn eine Benachrichtigung ankommt, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir mit der Erstellung eines beschreibbaren Stores. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei mit dem Namen `stores.js` in Ihrem `src` Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die Funktion `writable()` aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert "Welcome to the to-do list app!" zu erstellen. Dann `exportieren` wir den Store.

### Erstellen der eigentlichen Komponente

Lassen Sie uns nun unsere `Alert`-Komponente erstellen und sehen, wie wir Werte aus dem Store lesen können.

1. Erstellen Sie eine weitere neue Datei mit dem Namen `src/components/Alert.svelte`.
2. Geben Sie ihr den folgenden Inhalt:

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

Gehen wir diesen Code im Detail durch.

- Zu Beginn importieren wir den `alert` Store.
- Danach importieren wir die `onDestroy()` Lifecycle-Funktion, mit der wir nach dem Ausblenden der Komponente einen Callback ausführen können.
- Dann erstellen wir eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir von der Markierung auf hochrangige Variablen zugreifen können und wann immer sie geändert werden, sich das DOM entsprechend aktualisiert.
- Dann rufen wir die Methode `alert.subscribe()` auf, indem wir eine Callback-Funktion als Parameter übergeben. Wann immer sich der Wert des Stores ändert, wird die Callback-Funktion mit dem neuen Wert als Parameter aufgerufen. In der Callback-Funktion weisen wir einfach den empfangenen Wert der lokalen Variable zu, was das Update des DOM der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Aufräumfunktion zurück, die sich um die Freigabe des Abonnements kümmert. Daher abonnieren wir, wenn die Komponente initialisiert wird, und verwenden `onDestroy` zum Abbestellen, wenn die Komponente ausgeblendet wird.
- Schließlich verwenden wir die `alertContent`-Variable in unserer Markierung, und wenn der Benutzer auf die Benachrichtigung klickt, leeren wir sie.
- Am Ende fügen wir ein paar CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Diese Einrichtung ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Callback ausgeführt. Dort weisen wir einer lokalen Variablen einen neuen Wert zu, und dank Svelte-Reaktivität wird unsere gesamte Markierung und die reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwenden der Komponente

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` werden wir die Komponente importieren. Fügen Sie die folgende Import-Anweisung unter der bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, wie folgt:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die Willkommen bei der To-do-Liste App sagt](01-alert-message.png)

## Machen von Stores reaktiv mit der reaktiven `$store`-Syntax

Das funktioniert zwar, aber Sie müssten diesen Code jedes Mal kopieren und einfügen, wenn Sie einen Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Ressourcen, um unser Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch als Auto-Abo bekannt. Im einfachen Sinne, Sie setzen einfach das `$` Zeichen vor den Store und Svelte generiert den Code, um es automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Lassen Sie uns dies auf unsere `Alert`-Komponente anwenden. Aktualisieren Sie die `<script>`- und Markierungsabschnitte von `Alert.svelte` wie folgt:

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

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies genauso funktioniert wie zuvor. Das ist viel besser!

Im Hintergrund hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert` Store zu abonnieren, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird, und beim Ausblenden der Komponente das Abonnement zu beenden. Es wird auch die `alert.set()`-Anweisungen generiert, wann immer wir `$alert` einen Wert zuweisen.

Das Endergebnis dieses cleveren Tricks ist, dass Sie auf globale Stores genauso leicht zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler in den Dienst einer besseren Entwicklereffizienz stellt, uns nicht nur vor dem Tippen von Boilerplate-Code bewahrt, sondern auch weniger fehleranfälligen Code generiert.

## Schreiben in unseren Store

In unseren Store zu schreiben ist einfach eine Frage des Importierens und Ausführens von `$store = 'neuer Wert'`. Lassen Sie uns dies in unserer `Todos`-Komponente verwenden.

1. Fügen Sie die folgende `import`-Anweisung unter den bestehenden hinzu:

   ```js
   import { alert } from "../stores.js";
   ```

2. Aktualisieren Sie Ihre `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
     $alert = `Todo '${name}' has been added`;
   }
   ```

3. Aktualisieren Sie `removeTodo()` wie folgt:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
     $alert = `Todo '${todo.name}' has been deleted`;
   }
   ```

4. Aktualisieren Sie die `updateTodo()`-Funktion zu dieser:

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

5. Fügen Sie den folgenden reaktiven Block unter dem Block hinzu, der mit `let filter = 'all'` beginnt:

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

6. Aktualisieren Sie schließlich die Blöcke `const checkAllTodos` und `const removeCompletedTodos` wie folgt:

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

7. Grundsätzlich haben wir den Store importiert und bei jedem Ereignis aktualisiert, was jedes Mal eine neue Benachrichtigung verursacht. Schauen Sie sich Ihre App noch einmal an und versuchen Sie, einige To-dos hinzuzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des alert Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank Svelte-Reaktivität wird ihr Markup aktualisiert.

Das gleiche könnten wir innerhalb einer beliebigen Komponente oder `.js` Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten beeinflusst. In diesem Fall müssen Sie sich auf die `store.subscribe()` und `store.set()` Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist ein bisschen störend, auf die Benachrichtigung klicken zu müssen, um sie loszuwerden. Es wäre besser, wenn die Benachrichtigung einfach nach ein paar Sekunden verschwindet.

Lassen Sie uns sehen, wie wir das tun können. Wir werden eine Prop mit den Millisekunden angeben, die wir warten, bevor wir die Benachrichtigung löschen, und wir werden ein Timeout definieren, um die Benachrichtigung zu entfernen. Wir werden auch darauf achten, das Timeout zu löschen, wenn die `Alert`-Komponente ausgeblendet wird, um Speicherlecks zu vermeiden.

1. Aktualisieren Sie den `<script>` Abschnitt Ihrer `Alert.svelte`-Komponente wie folgt:

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

2. Aktualisieren Sie den Markupsabschnitt von `Alert.svelte` wie folgt:

   ```svelte
   {#if visible}
   <div on:click={() => visible = false}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

Hier erstellen wir zuerst die Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die sich darum kümmert, ob die Benachrichtigung sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, diese Funktion auszuführen, wann immer sich der `$alert`-Store oder die `ms`-Prop ändert.

Wann immer sich der `$alert`-Store ändert, räumen wir jedes ausstehende Timeout auf. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und die `Alert` wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um die Benachrichtigung nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()` Lifecycle-Funktion sicher, dass die `clearTimeout()`-Funktion aufgerufen wird.

Wir haben auch ein SVG-Icon über dem Benachrichtigungsabsatz hinzugefügt, um es etwas ansprechender aussehen zu lassen. Probieren Sie es wieder aus und Sie sollten die Änderungen sehen.

## Machen unserer Alert-Komponente zugänglich

Unsere `Alert`-Komponente funktioniert gut, ist aber nicht besonders benutzerfreundlich für unterstützende Technologien. Das Problem sind Elemente, die dynamisch hinzugefügt und von der Seite entfernt werden. Obwohl sie für Benutzer, die die Seite sehen können, visuell offensichtlich sind, sind sie möglicherweise nicht so offensichtlich für Benutzer unterstützender Technologien, wie Bildschirmlesegeräte. Um diese Situationen zu bewältigen, können wir die [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch offenzulegen, damit sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können eine Region deklarieren, die dynamischen Inhalt enthält, der von unterstützenden Technologien angekündigt werden soll, mit der `aria-live`-Eigenschaft gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmleser Updates für diese Regionen behandeln sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für allgemeine Situationen haben Sie auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall reicht es, wenn wir dem `<div>`-Container ein `role="alert"` hinzufügen, wie folgt:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesegeräten zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch um sich daran zu gewöhnen, wie visuell beeinträchtigte Menschen das Web nutzen. Sie haben verschiedene Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/vision/) für macOS und iOS, unter anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, schauen Sie sich unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) Modul an.

## Anwenden des Store-Vertrags zur Speicherung unserer To-dos

Unsere kleine App ermöglicht es uns zwar, unsere To-dos recht einfach zu verwalten, ist aber ziemlich nutzlos, wenn wir immer dieselbe Liste mit hardcodierten To-dos erhalten, wenn wir sie aktualisieren. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-dos speichern können.

Zuerst benötigen wir eine Möglichkeit, wie unsere `Todos`-Komponente die aktualisierten To-dos an ihr übergeordnetes Element zurückgeben kann. Wir könnten ein aktualisiertes Ereignis mit der Liste der To-dos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Lassen Sie uns `App.svelte` öffnen und es ausprobieren.

1. Fügen Sie zu Beginn die folgende Zeile unter Ihrem `todos` Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie dann Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie einige To-dos hinzuzufügen und gehen Sie dann zu Ihrer Entwicklerwerkzeuge-Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren To-dos vornehmen, dank der `bind` Direktive im `todos` Array definiert in `App.svelte` widergespiegelt wird.

Jetzt müssen wir einen Weg finden, diese To-dos zu speichern. Wir könnten einige Code in unserer `App.svelte`-Komponente implementieren, um unsere To-dos in [web storage](/de/docs/Web/API/Web_Storage_API) oder in einem Webservice zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen allgemeinen Store entwickeln könnten, der es uns erlaubt, seinen Inhalt zu speichern? Dies würde es uns ermöglichen, ihn wie jeden anderen Store zu verwenden und den Mechanismus der Speicherung abzukapseln. Wir könnten einen Store erstellen, der seine Inhalte mit Web-Speicher synchronisiert, und später einen anderen entwickeln, der gegen einen Webservice synchronisiert. Der Wechsel zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anpassen.

### Speichern unserer To-dos

Beginnen wir also mit der Verwendung eines regulären beschreibbaren Stores, um unsere To-dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem bereits existierenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie einfach daran, dass wir jetzt mit der reaktiven `$todos` `$store`-Syntax auf die To-dos zugreifen müssen.

   Aktualisieren Sie Ihre `App.svelte` Datei so:

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

3. Testen Sie es; alles sollte funktionieren. Als Nächstes werden wir sehen, wie wir unsere eigenen benutzerdefinierten Stores definieren können.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Es müssen folgende Funktionen arbeiten:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptiert. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer der Wert des Stores sich ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die, wenn sie aufgerufen wird, ihr Abonnement stoppen muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptiert und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Zuerst fügen wir die folgenden `console.log()` Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos` Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos` Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie etwas ähnliches in Ihrer Web-Konsole:

![Webkonsole, die die Funktionen und Inhalte des todos Stores anzeigt](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das `subscribe()`, `set()` und `update()` Methoden enthält, und `$todos` ist unser To-do-Array.

Nur zur Referenz, hier ist ein grundlegender funktionierender Store, der von Grund auf neu implementiert wurde:

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

Hier erklären wir `subs`, das ein Array von Abonnenten ist. In der `subscribe()` Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf und geben den neuen Wert als Parameter weiter.

In der Regel implementieren Sie Stores nicht von Grund auf neu; stattdessen würden Sie den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domainspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-do-Listen-App zu komplex wird, könnten wir unseren To-dos-Store alle Zustandsmodifikationen bearbeiten lassen. Wir könnten alle Methoden, die das `todo`-Array modifizieren (wie `addTodo()`, `removeTodo()`, etc.), von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsmodifikationen angewendet werden, könnten die Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern und reaktiv die vom Store bereitgestellten Informationen anzuzeigen. Einen einzigartigen Ort zu haben, um Zustandsänderungen zu behandeln, macht es einfacher, den Zustandsablauf zu verstehen und Probleme zu erkennen.

Svelte zwingt Sie nicht, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es bietet Ihnen nur die Werkzeuge, um zu entscheiden, wie Sie es handhaben möchten.

### Implementieren unseres benutzerdefinierten To-dos Stores

Unsere To-do-Listen-App ist nicht besonders komplex, daher werden wir nicht alle unsere Modifikationsmethoden an einem zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere To-dos zu speichern.

> [!NOTE]
> Wenn Sie diesem Leitfaden im Svelte REPL folgen, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer Sandbox-Umgebung, die Ihnen nicht erlaubt, auf Web-Speicher zuzugreifen, und Sie erhalten einen "Der Vorgang ist unsicher"-Fehler. Um diesem Abschnitt zu folgen, müssen Sie das Repository klonen und in den `mdn-svelte-tutorial/06-stores` Ordner gehen, oder Sie können direkt den Inhalt des Ordners mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Web-Speicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Zuerst den Wert aus dem Web-Speicher liest und, falls er nicht vorhanden ist, ihn mit einem Standardwert initialisiert
- Wann immer sich der Wert ändert, den Store selbst aktualisiert und auch die Daten im lokalen Speicher

Darüber hinaus unterstützt der Web-Speicher nur das Speichern von Zeichenfolgenwerten, wir müssen also beim Speichern von Objekt in Zeichenfolge konvertieren und beim Laden des Wertes aus dem lokalen Speicher umgekehrt.

1. Erstellen Sie im `src` Verzeichnis eine neue Datei mit dem Namen `localStore.js`.
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

   - Unser `localStore` wird eine Funktion sein, die beim Ausführen zuerst den Inhalt aus dem Web-Speicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Web-Speichers und einen Anfangswert angeben. Dann prüfen wir, ob der Wert im Web-Speicher existiert, und wenn nicht, erstellen wir ihn.
   - Wir verwenden die [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem) Methoden, um Informationen aus dem Web-Speicher zu lesen und zu schreiben, und die [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet) Hilfsfunktionen, um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den Zeichenfolgeninhalt, den wir vom Web-Speicher erhalten, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir bei jedem Update der Store-Inhalte auch den Web-Speicher, wobei der Wert in eine Zeichenfolge konvertiert wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation zum Speichern des Wertes im Web-Speicher hinzugefügt haben. Der Rest des Codes ist meist Initialisierung und Konvertierung.

3. Jetzt werden wir unseren lokalen Store nutzen, um unseren lokalen persistierten To-dos Store zu erstellen.

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

   Mit `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store so, dass die Daten unter dem Schlüssel `mdn-svelte-todo` im Web-Speicher gespeichert werden. Wir setzen auch ein paar To-dos als Standardwerte.

4. Jetzt lassen Sie uns die hardkodierten To-dos in `App.svelte` loswerden. Aktualisieren Sie den Inhalt wie folgt. Grundsätzlich löschen wir einfach das `$todos` Array und die `console.log()` Anweisungen:

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
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist völlig transparent in Bezug auf die Art des Stores, den wir verwenden.

5. Gehen Sie weiter und probieren Sie Ihre App wieder aus. Erstellen Sie ein paar To-dos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Aufrufen der URL sind Ihre To-dos weiterhin vorhanden.
6. Sie können es auch in den DevTools überprüfen. Geben Sie in der Web-Konsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Machen Sie einige Änderungen an Ihrer App, wie das Drücken der Schaltfläche _Uncheck All_, und überprüfen Sie erneut den Inhalt des Web-Speichers. Sie erhalten etwas Ähnliches wie dieses:

   ![To-do App mit der Webkonsole, die zeigt, dass, wenn ein To-do in der App geändert wird, der entsprechende Eintrag im Web-Speicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber äußerst mächtige Möglichkeit, komplexe App-Zustände von einem globalen Datenspeicher auf reaktive Weise zu verwalten. Und da Svelte unseren Code kompiliert, kann es die [`$store` Auto-Abo-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores genauso wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Abläufe des Stores selbst zu kapseln.

## Bonus: Übergänge

Lassen Sie uns das Thema ändern und etwas Spaßiges und Anderes machen: eine Animation zu unseren Benachrichtigungen hinzufügen. Svelte bietet ein ganzes Modul zur Definition von [Übergängen](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate), sodass wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird durch ein Element ausgelöst, das dem DOM aufgrund einer Zustandsänderung hinzugefügt oder daraus entfernt wird. Das `svelte/transition` Modul exportiert sieben Funktionen: `fade`, `blur`, `fly`, `slide`, `scale`, `draw` und `crossfade`.

Lasst uns unserer `Alert`-Komponente einen `fly` Übergang geben. Wir öffnen die `Alert.svelte` Datei und importieren die `fly` Funktion aus dem `svelte/transition` Modul.

1. Setzen Sie die folgende `import`-Anweisung unter die bestehenden:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um es zu verwenden, aktualisieren Sie Ihren öffnenden `<div>`-Tag so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Übergänge können auch Parameter empfangen, wie folgt:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > Die doppelten geschweiften Klammern sind keine besondere Svelte-Syntax. Es ist einfach ein Literatur-JavaScript-Objekt, das als Parameter an die Fly-Transition übergeben wird.

3. Probieren Sie Ihre App wieder aus, und Sie werden sehen, dass die Benachrichtigungen jetzt ein bisschen ansprechender aussehen.

> [!NOTE]
> Ein Compiler zu sein ermöglicht es Svelte, die Größe unseres Bundles zu optimieren, indem Features ausgeschlossen werden, die nicht verwendet werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js` Datei etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte schlau genug zu erkennen, dass die Fly-Funktion nicht verwendet wird, und die `bundle.js` Dateigröße wird auf nur 18 KB sinken.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen zum Umgang mit Animationen und Übergängen. Svelte unterstützt auch die Angabe verschiedener Übergänge, die angewendet werden sollen, wenn das Element mit den `in:fn`/`out:fn`-Direktiven dem DOM hinzugefügt oder entfernt wird, und es ermöglicht Ihnen auch die Definition Ihrer [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge. Es hat auch mehrere Easing-Funktionen, um die Änderungsrate im Laufe der Zeit zu spezifizieren. Werfen Sie einen Blick auf den [Ease-Visualizer](https://svelte.dev/examples/easing), um die verschiedenen Easing-Funktionen zu erkunden, die verfügbar sind.

## Der Code bisher

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/07-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Zustand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Web-Speicher.

- Damit konnten wir einige fortgeschrittene Svelte-Techniken demonstrieren. Wir haben die `Alert`-Komponente entwickelt, um zu zeigen, wie man Komponentenübergreifendes Zustandsmanagement mit Stores implementiert. Wir haben auch gesehen, wie man automatisch Stores abonniert, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann haben wir gesehen, wie man einen eigenen Store von Grund auf implementiert und wie man Sveltes beschreibbaren Store erweitern kann, um Daten im Web-Speicher zu speichern.
- Am Ende haben wir uns angesehen, wie man die Svelte `transition`-Direktive verwendet, um Animationen auf DOM-Elementen zu implementieren.

Im nächsten Artikel werden wir lernen, wie man TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügt. Um alle seine Funktionen zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
