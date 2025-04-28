---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Behandlung von Reaktivität, zur Arbeit mit DOM-Knoten und zum Offenlegen von Komponentenfunktionen diskutiert. In diesem Artikel zeigen wir eine weitere Möglichkeit, das Zustandsmanagement in Svelte zu behandeln: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositorien, die Werte speichern. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich ihre Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/ die Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen Sie, wie Sie Svelte-Stores verwenden</td>
    </tr>
  </tbody>
</table>

Mit Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm anzeigt und Nachrichten von jeder Komponente erhalten kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest – sie ist weder Eltern- noch Kindkomponente – sodass die Nachrichten nicht in die Komponentenhierarchie passen.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die Todo-Informationen im [Web-Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere To-Dos über Seitenladevorgänge hinweg beständig sind.

## Begleiten Sie uns beim Codieren

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen App-Zustand zu gelangen, führen Sie Folgendes aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um zusammen mit uns mit dem REPL zu codieren, starten Sie bei

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit unserem App-Status

Wir haben bereits gesehen, wie unsere Komponenten über Props, bidirektionale Datenbindung und Ereignisse miteinander kommunizieren können. In all diesen Fällen haben wir es mit der Kommunikation zwischen Eltern- und Kindkomponenten zu tun.

Aber nicht all der Anwendungsstatus gehört innerhalb der Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss Ihr App-Zustand von mehreren Komponenten, die nicht hierarchisch verwandt sind, oder von einem regulären JavaScript-Modul aus zugänglich sein.

Wenn Ihre App komplex wird und Ihre Komponentenhierarchie kompliziert wird, kann es zu schwierig werden, Daten zwischen den Komponenten weiterzuleiten. In diesem Fall kann der Wechsel zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, dann sind Sie mit der Funktionsweise solcher Stores vertraut. Svelte-Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es Interessierten ermöglicht, benachrichtigt zu werden, wann immer sich der Wert des Stores ändert, und einer optionalen `set()`-Methode, die es Ihnen ermöglicht, neue Werte für den Store festzulegen. Diese minimale API ist als das [Store-Contract](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte bietet Funktionen zum Erstellen von [lesbaren](https://svelte.dev/docs/svelte-store#readable), [beschreibbaren](https://svelte.dev/docs/svelte-store#writable) und [abgeleiteten](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem mithilfe der [reaktiven `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) zu integrieren. Wenn Sie Ihre eigenen Stores gemäß dem Store-Contract erstellen, erhalten Sie diese reaktive syntaktische Zuckerung kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, werden wir eine `Alert`-Komponente erstellen. Diese Art von Widgets könnte auch als Popup-Benachrichtigungen, Toasts oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann ihr Benachrichtigungen senden. Wann immer eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir damit, einen beschreibbaren Store zu erstellen. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei, `stores.js`, in Ihrem `src`-Verzeichnis.
2. Füllen Sie sie mit folgendem Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie in beliebiger Weise organisieren können.

Im obigen Code importieren wir die Funktion `writable()` aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem anfänglichen Wert von "Welcome to the to-do list app!" zu erstellen. Dann exportieren wir den Store.

### Die eigentliche Komponente erstellen

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

- Zu Beginn importieren wir den `alert`-Store.
- Als nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, die es uns ermöglicht, einen Rückruf auszuführen, nachdem die Komponente entfernt wurde.
- Dann erstellen wir eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf Variablen oberster Ebene aus dem Markup zugreifen können und wann immer sie geändert werden, das DOM entsprechend aktualisiert wird.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Jedes Mal, wenn sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir den Wert, den wir erhalten haben, einfach der lokalen Variablen zu, was das Update des DOMs der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die sich um das Freigeben des Abonnements kümmert. Wir abonnieren also, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu beenden, wenn die Komponente entfernt wird.
- Schließlich verwenden wir die `alertContent`-Variable in unserem Markup. Wenn der Benutzer auf den Alert klickt, löschen wir ihn.
- Am Ende fügen wir einige CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Dieses Setup ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Rückruf ausgeführt. Dort weisen wir der lokalen Variablen einen neuen Wert zu, und dank der Svelte-Reaktivität werden all unser Markup und unsere reaktiven Abhängigkeiten entsprechend aktualisiert.

### Die Komponente verwenden

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unter der bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über den `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der rechten oberen Ecke einer App, die "Welcome to the to-do list app" sagt](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Das funktioniert, aber Sie müssen diesen ganzen Code jedes Mal kopieren und einfügen, wenn Sie einen Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Ressourcen, um uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription. Einfach ausgedrückt, Sie setzen einfach das `$`-Zeichen vor den Store und Svelte generiert den Code, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die Methoden `subscribe()` und `set()` implementieren, wie wir es später tun werden, gilt auch für Ihre Stores die reaktive `$store`-Syntax.

1. Wenden wir das auf unsere `Alert`-Komponente an. Aktualisieren Sie die `<script>`- und Markup-Abschnitte von `Alert.svelte` wie folgt:

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

2. Überprüfen Sie Ihre App noch einmal, und Sie werden sehen, dass dies genauso funktioniert wie zuvor. Das ist viel besser!

Im Hintergrund hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, das `alert`-Store zu abonnieren, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird, und das Abonnement zu beenden, wenn die Komponente entfernt wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir einen Wert `$alert` zuweisen.

Das Endergebnis dieses geschickten Tricks ist, dass Sie auf globale Stores so leicht zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler für bessere Entwicklerfreundlichkeit verantwortlich macht, uns nicht nur von Boilerplate befreit, sondern auch weniger fehleranfälligen Code generiert.

## In unseren Store schreiben

In unseren Store zu schreiben ist einfach eine Frage des Importierens und Ausführen von `$store = 'neuer Wert'`. Lassen Sie uns dies in unserer `Todos`-Komponente verwenden.

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

6. Und schließlich für jetzt, aktualisieren Sie die `const checkAllTodos` und `const removeCompletedTodos` Blöcke wie folgt:

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

7. Grundsätzlich haben wir den Store importiert und ihn bei jedem Ereignis aktualisiert, wodurch jedes Mal ein neuer Alert angezeigt wird. Schauen Sie sich Ihre App noch einmal an und versuchen Sie, ein paar To-Dos hinzuzufügen/löschen/aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente – wie jeder Abonnent des Alert-Stores – wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Das Gleiche könnten wir innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten berühren wird. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist etwas lästig, auf den Alert klicken zu müssen, um ihn loszuwerden. Es wäre besser, wenn die Benachrichtigung einfach nach ein paar Sekunden verschwindet.

Lassen Sie uns sehen, wie wir das machen. Wir werden eine Prop mit den Millisekunden angeben, die wir warten, bevor die Benachrichtigung gelöscht wird, und wir werden ein Timeout definieren, um den Alert zu entfernen. Wir werden auch darauf achten, das Timeout zu löschen, wenn die `Alert`-Komponente entfernt wird, um Speicherlecks zu verhindern.

1. Aktualisieren Sie den `<script>`-Abschnitt Ihrer `Alert.svelte`-Komponente wie folgt:

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

2. Und aktualisieren Sie den Markup-Abschnitt von `Alert.svelte` wie folgt:

   ```svelte
   {#if visible}
   <div on:click={() => visible = false}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

Hier erstellen wir zuerst die Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die sich darum kümmert, ob der Alert sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, dass diese Funktion ausgeführt werden soll, wann immer der `$alert`-Store oder die `ms`-Prop sich ändert.

Wann immer der `$alert`-Store sich ändert, bereinigen wir jedes noch ausstehende Timeout. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und der Alert wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um den Alert nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()`-Lebenszyklusfunktion sicher, dass die `clearTimeout()`-Funktion aufgerufen wird.

Wir haben auch ein SVG-Icon oberhalb des Alert-Absatzes hinzugefügt, um es etwas ansprechender aussehen zu lassen. Probieren Sie es aus und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente barrierefrei machen

Unsere `Alert`-Komponente funktioniert zwar gut, ist aber nicht sehr freundlich zu unterstützenden Technologien. Das Problem sind Elemente, die dynamisch hinzugefügt und entfernt werden. Während sie visuell offensichtlich sind für Benutzer, die die Seite sehen können, sind sie möglicherweise nicht so offensichtlich für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Um diese Situationen zu handhaben, können wir [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden, die eine Möglichkeit bieten, dynamische Inhaltsänderungen auf programmatischem Wege zu erkennen, sodass sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können eine Region deklarieren, die dynamische Inhalte enthält, die von unterstützenden Technologien angekündigt werden sollen, mit der Eigenschaft `aria-live` gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmlesegeräte Updates dieser Regionen verarbeiten sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für häufige Situationen gibt es auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall reicht es aus, dem `<div>`-Container `role="alert"` hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesegeräten zu testen, um nicht nur Barrierefreiheitsprobleme zu entdecken, sondern auch um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/vision/) für macOS und iOS, neben anderen Optionen.

Um mehr über die Erkennung und Behebung von Barrierefreiheitsproblemen zu erfahren, schauen Sie sich unser [Barrierefreiheitsmodul](/de/docs/Learn_web_development/Core/Accessibility) an.

## Verwendung des Store-Contracts zur Speicherung unserer To-Dos

Unsere kleine App ermöglicht es uns, unsere To-Dos ziemlich einfach zu verwalten, aber sie ist eher nutzlos, wenn wir immer dieselbe Liste von fest codierten To-Dos erhalten, wenn wir sie neu laden. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-Dos speichern können.

Zuerst brauchen wir eine Möglichkeit, wie unsere `Todos`-Komponente die aktualisierten To-Dos ihrem Elternteil zurückgibt. Wir könnten ein Aktualisierungsereignis mit der Liste der To-Dos auslösen, aber es ist einfacher, die `todos`-Variable zu binden. Lassen Sie uns `App.svelte` öffnen und es versuchen.

1. Fügen Sie zuerst die folgende Zeile unterhalb Ihres `todos`-Arrays hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Als Nächstes aktualisieren Sie Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige To-Dos hinzuzufügen, und gehen dann zu Ihrer Entwickler-Werkzeug-Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren To-Dos vornehmen, im `todos`-Array, das in `App.svelte` definiert ist, dank der `bind`-Direktive reflektiert wird.

Nun müssen wir einen Weg finden, um diese To-Dos zu speichern. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere To-Dos in [Web-Speicher](/de/docs/Web/API/Web_Storage_API) oder in einem Webdienst zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Damit könnten wir ihn wie jeden anderen Store verwenden und den Speichermechanismus abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web-Speicher synchronisiert, und später einen anderen entwickeln, der mit einem Webdienst synchronisiert wird. Zwischen ihnen zu wechseln wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Unsere To-Dos speichern

Beginnen wir damit, einen regulären beschreibbaren Store zu verwenden, um unsere To-Dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir nur mit der reaktiven `$todos`-Syntax auf die To-Dos zugreifen müssen.

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

3. Probieren Sie es aus; alles sollte funktionieren. Als Nächstes werden wir sehen, wie wir unsere eigenen benutzerdefinierten Stores definieren.

### Wie man einen Store-Contract implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie das Store-Contract implementieren. Seine Merkmale müssen wie folgt funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die bei Aufruf das Abonnement beendet.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und die synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen wir zuerst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unterhalb des `todos`-Arrays hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, werden Sie in Ihrer Webkonsole so etwas sehen:

![Webkonsole, die die Funktionen und Inhalte des todos-Stores zeigt](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store nur ein Objekt mit `subscribe()`, `set()` und `update()`-Methoden, und `$todos` ist unser Array von To-Dos.

Nur zur Referenz hier ein grundlegender funktionierender Store von Grund auf implementiert:

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

Hier deklarieren wir `subs`, das ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die beim Ausführen den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, wobei der neue Wert als Parameter übergeben wird.

Normalerweise implementieren Sie Stores nicht von Grund auf; stattdessen würden Sie den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der es uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-do-Listen-App zu komplex wird, könnten wir unseren To-Dos Store alle Zustandsänderungen übernehmen lassen. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, etc.) von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsänderungen angewandt werden, könnten Komponenten diese Methoden einfach aufrufen, um den Status der App zu ändern und die von dem Store reaktiv angezeigten Informationen anzuzeigen. Einen einzigartigen Ort zu haben, um Zustandsänderungen zu handhaben, macht es einfacher, über den Zustandfluss nachzudenken und Probleme zu erkennen.

Svelte wird Sie nicht zwingen, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es bietet Ihnen nur die Werkzeuge, um zu entscheiden, wie Sie es handhaben möchten.

### Unseren benutzerdefinierten To-Dos-Store implementieren

Unsere To-do-Listen-App ist nicht besonders komplex, daher werden wir nicht alle unsere Änderungsmethoden an einem zentralen Ort zusammenführen. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere To-Dos zu speichern.

> [!NOTE]
> Wenn Sie diesem Leitfaden mit dem Svelte REPL folgen, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen funktioniert der Svelte REPL in einer Sandbox-Umgebung, die Ihnen den Zugriff auf den Web-Speicher nicht erlaubt, und Sie erhalten einen "Die Operation ist unsicher" Fehler. Um diesen Abschnitt fortzusetzen, müssen Sie das Repo klonen und in den Ordner `mdn-svelte-tutorial/06-stores` gehen, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Web-Speicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Zunächst liest er den Wert aus dem Web-Speicher aus, und wenn er nicht vorhanden ist, initialisiert er ihn mit einem Standardwert
- Wann immer der Wert geändert wird, aktualisiert er den Store selbst und auch die Daten im lokalen Speicher

Außerdem unterstützt der Web-Speicher nur das Speichern von String-Werten, daher müssen wir beim Speichern von einem Objekt zu einem String konvertieren und umgekehrt, wenn wir den Wert aus dem lokalen Speicher laden.

1. Erstellen Sie eine neue Datei namens `localStore.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr folgenden Inhalt:

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

   - Unser `localStore` wird eine Funktion sein, die bei Ausführung zunächst ihren Inhalt aus dem Web-Speicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Web-Speichers und einen anfänglichen Wert angeben. Wir prüfen dann, ob der Wert im Web-Speicher vorhanden ist. Wenn nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Web-Speicher zu lesen und zu schreiben, sowie die Hilfsmethoden [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwenden), um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den als String empfangenen Inhalt vom Web-Speicher in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich, jedes Mal, wenn wir den Inhalt des Stores aktualisieren, aktualisieren wir auch den Web-Speicher, mit dem in einen String konvertierten Wert.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten und die Operationen zum Speichern des Wertes im Web-Speicher hinzugefügt haben. Der Rest des Codes besteht größtenteils aus Initialisierungs- und Konvertierungsoperationen.

3. Nun werden wir unseren lokalen Store aus `stores.js` verwenden, um unseren lokal gespeicherten To-Dos-Store zu erstellen.

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

   Mit `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store so, dass er die Daten unter dem Schlüssel `mdn-svelte-todo` im Web-Speicher speichert. Wir setzen auch ein paar To-Dos als anfängliche Werte.

4. Lassen Sie uns nun die fest codierten To-Dos in `App.svelte` loswerden. Aktualisieren Sie den Inhalt wie folgt. Im Wesentlichen löschen wir einfach das `$todos`-Array und die `console.log()`-Anweisungen:

   ```svelte
   <script>
     import Todos from './components/Todos.svelte'
     import Alert from './components/Alert.svelte'

     import { todos } from './stores.js'
   </script>

   <Alert />
   <Todos bind:todos={$todos} />
   ```

   > **Hinweis**
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist völlig transparent in Bezug darauf, welche Art von Store wir verwenden.

5. Gehen Sie voran und testen Sie Ihre App erneut. Erstellen Sie ein paar To-Dos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Besuch der URL werden Ihre To-Dos immer noch da sein.
6. Sie können sie auch in der DevTools-Konsole inspizieren. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, wie das Drücken der Schaltfläche _Uncheck All_, und überprüfen Sie den Inhalt des Web-Speichers nochmals. Sie werden so etwas wie dieses erhalten:

   ![To-Do-App mit Webkonsole daneben, die zeigt, dass wenn ein To-Do in der App geändert wird, der entsprechende Eintrag im Webspeicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber äußerst leistungsstarke Möglichkeit, komplexe App-Zustände aus einem globalen Datenspeicher auf reaktive Weise zu handhaben. Und weil Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores auf die gleiche Weise wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Arbeitsweisen des Stores selbst zu abstrahieren.

## Bonus-Track: Übergänge

Lassen Sie uns das Thema wechseln und etwas Spaßiges und Anderes tun: Fügen Sie unseren Benachrichtigungen eine Animation hinzu. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird ausgelöst, wenn ein Element als Ergebnis einer Statusänderung in das oder aus dem DOM kommt.

Lassen Sie uns unserer `Alert`-Komponente einen Fly-`transition` hinzufügen. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Setzen Sie die folgende `import`-Anweisung unter die bestehenden:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um es zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Übergänge können auch Parameter erhalten, so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > **Hinweis**
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es ist einfach ein literales JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus und Sie werden sehen, dass die Benachrichtigungen jetzt etwas ansprechender aussehen.

> [!NOTE]
> Als Compiler ermöglicht es Svelte, die Größe unseres Bundles zu optimieren, indem es nicht verwendete Funktionen ausschließt. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js`-Datei etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte schlau genug, um zu erkennen, dass die Fly-Funktion nicht verwendet wird und die Dateigröße der `bundle.js` wird auf nur 18 KB sinken.

Das ist nur die Spitze des Eisbergs. Svelte hat viele Optionen, um mit Animationen und Übergängen umzugehen. Svelte unterstützt auch die Angabe verschiedener Übergänge, die angewendet werden sollen, wenn das Element hinzugefügt oder entfernt wird, mit den `in:fn`/`out:fn`-Direktiven, und es ermöglicht Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es gibt auch mehrere Funktionen, um die Änderungsrate über die Zeit festzulegen. Schauen Sie sich den [Easing-Visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbaren Easing-Funktionen zu erkunden.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

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

In diesem Artikel haben wir zwei neue Features hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Web-Speicher.

- Dies ermöglichte es uns, einige fortgeschrittene Svelte-Techniken zu zeigen. Wir haben die `Alert`-Komponente entwickelt, um zu zeigen, wie man plattformübergreifendes Zustandsmanagement mit Stores implementiert. Wir haben auch gesehen, wie man sich automatisch bei Stores anmeldet, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann haben wir gesehen, wie man unseren eigenen Store von Grund auf implementiert und auch, wie man Sveltes beschreibbaren Store erweitert, um Daten im Web-Speicher zu speichern.
- Am Ende haben wir einen Blick darauf geworfen, die Svelte-`transition`-Direktive zu verwenden, um Animationen für DOM-Elemente zu implementieren.

Im nächsten Artikel werden wir lernen, wie wir TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügen. Um alle Funktionen zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
