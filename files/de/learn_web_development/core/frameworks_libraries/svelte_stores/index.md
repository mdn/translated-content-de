---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: 1717097c927b0399fd143a6ab22631245e9da1cd
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Behandlung von Reaktivität, dem Arbeiten mit DOM-Knoten und dem Bereitstellen von Komponentenfunktionalität besprochen. In diesem Artikel zeigen wir eine weitere Möglichkeit zur Zustandsverwaltung in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenspeicher, die Werte halten. Komponenten können sich bei Stores anmelden und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie zumindest mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen Sie, wie man Svelte-Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Hilfe von Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm anzeigt, welche Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest – sie ist weder Eltern- noch Kindkomponente – sodass die Nachrichten nicht in die Komponentenhierarchie passen.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die Todo-Informationen im [Web-Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere Todos über Seitenaktualisierungen hinaus bestehen bleiben.

## Mit uns den Code durchgehen

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie dann aus

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den Code mit uns mit der REPL durchzugehen, starten Sie unter

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit unserem App-Zustand

Wir haben bereits gesehen, wie unsere Komponenten mithilfe von Requisiten, zweiseitigen Datenbindungen und Events miteinander kommunizieren können. In all diesen Fällen haben wir es mit der Kommunikation zwischen Eltern- und Kindkomponenten zu tun gehabt.

Aber nicht der gesamte Anwendungszustand gehört in die Komponentenhierarchie Ihrer Anwendung. Beispielsweise Informationen über den eingeloggten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss auf den Zustand Ihrer App von mehreren Komponenten, die hierarchisch nicht verwandt sind, oder von einem regulären JavaScript-Modul zugegriffen werden.

Außerdem kann es zu schwierig werden, wenn Ihre App komplex wird und Ihre Komponentenhierarchie komplex wird, damit Komponenten Daten zwischen einander weiterleiten können. In diesem Fall könnte der Wechsel zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, dann sind Sie mit der Funktionsweise solcher Stores vertraut. Svelte Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Store-Wert ändert und optional eine `set()`-Methode, mit der Sie neue Werte für den Store festlegen können. Diese minimale API ist als [Storevertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte bietet Funktionen zum Erstellen von [lesbaren](https://svelte.dev/docs/svelte-store#readable), [schreibbaren](https://svelte.dev/docs/svelte-store#writable) und [abgeleiteten](https://svelte.dev/docs/svelte-store#derived) Stores im Modul `svelte/store`.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores entwickeln, die den Storevertrag einhalten, erhalten Sie dieses syntaktische Zuckerguss der Reaktivität kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, werden wir eine `Alert`-Komponente erstellen. Diese Art von Widgets könnte auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann ihr Benachrichtigungen senden. Immer wenn eine Benachrichtigung ankommt, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Lassen Sie uns anfangen, indem wir einen beschreibbaren Store erstellen. Jede Komponente wird in der Lage sein, in diesen Store zu schreiben, und die `Alert`-Komponente wird diesem beitreten und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei, `stores.js`, in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die Funktion `writable()` von `svelte/store` und verwenden sie, um einen neuen Store mit dem Namen `alert` mit einem anfänglichen Wert von "Willkommen bei der To-do-Liste-App!" zu erstellen. Wir `exportieren`den Store dann.

### Erstellen der tatsächlichen Komponente

Erstellen wir nun unsere `Alert`-Komponente und sehen, wie wir Werte aus dem Store lesen können.

1. Erstellen Sie eine weitere neue Datei mit dem Namen `src/components/Alert.svelte`.
2. Geben Sie ihr den folgenden Inhalt:

   ```svelte
   <script>
     import { alert } from "../stores.js";
     import { onDestroy } from "svelte";

     let alertContent = "";

     const unsubscribe = alert.subscribe((value) => (alertContent = value));

     onDestroy(unsubscribe);
   </script>

   {#if alertContent}
   <div on:click={() => (alertContent = "")}>
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

Lassen Sie uns diesen Code im Detail durchgehen.

- Am Anfang importieren wir den `alert` Store.
- Als Nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, die uns erlaubt, einen Rückruf auszuführen, nachdem die Komponente entfernt wurde.
- Wir erstellen anschließend eine lokale Variable mit dem Namen `alertContent`. Denken Sie daran, dass wir auf oberste Ebene Variablen aus dem Markup zugreifen können, und wann immer diese geändert werden, aktualisiert sich der DOM entsprechend.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir einfach den empfangenen Wert der lokalen Variable zu, die die Aktualisierung des DOMs der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die sich um das Auflösen des Abonnements kümmert. So abonnieren wir, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu kündigen, wenn die Komponente entfernt wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup und wenn der Benutzer auf die Benachrichtigung klickt, wird diese gelöscht.
- Am Ende fügen wir einige CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu gestalten.

Dieses Setup ermöglicht uns die Arbeit mit Stores auf reaktive Weise. Wenn sich der Wert des Stores ändert, wird der Rückruf ausgeführt. Dort weisen wir eine neue Wert zu einer lokalen Variable zu, und dank der Reaktivität von Svelte wird unser Markup und alle reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwendung der Komponente

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unterhalb der bereits bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt, und Sie sollten jetzt die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu verwerfen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App sagt willkommen zur To-do-Liste-App](01-alert-message.png)

## Stores reaktiv machen mit der reaktiven `$store`-Syntax

Dies funktioniert, aber Sie müssen diesen gesamten Code jedes Mal kopieren und einfügen, wenn Sie einen Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Ressourcen, um uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch Auto-Abonnement genannt. Einfach gesagt, Sie müssen den Store nur mit dem `$`-Zeichen prefixen und Svelte generiert den Code, um es automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die Methoden `subscribe()` und `set()` implementieren, wie wir später sehen werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Lassen Sie uns dies auf unsere `Alert`-Komponente anwenden. Aktualisieren Sie die `<script>` und Markup-Abschnitte von `Alert.svelte` wie folgt:

   ```svelte
   <script>
     import { alert } from "../stores.js";
   </script>

   {#if $alert}
   <div on:click={() => $alert = ""}>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies genauso funktioniert wie zuvor. Das ist viel besser!

Im Hintergrund hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert` Store zu abonnieren, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird, und das Abonnement zu kündigen, wenn die Komponente entfernt wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir einen Wert für `$alert` zuweisen.

Das Endergebnis dieses geschickten Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler in die Verantwortung für eine bessere Entwicklerergonomie nimmt, uns nicht nur von der Eingabe von Boilerplate befreit, sondern auch weniger fehleranfälligen Code generiert.

## In unseren Store schreiben

In unseren Store zu schreiben ist einfach, indem wir ihn importieren und `$store = 'neuer Wert'` ausführen. Lassen Sie es uns in unserer `Todos`-Komponente verwenden.

1. Fügen Sie die folgende Importanweisung unterhalb der bestehenden hinzu:

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

4. Aktualisieren Sie die `updateTodo()`-Funktion so:

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

6. Zu guter Letzt, aktualisieren Sie die Blöcke `const checkAllTodos` und `const removeCompletedTodos` wie folgt:

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

7. Im Wesentlichen haben wir den Store importiert und bei jedem Event aktualisiert, was jedes Mal eine neue Benachrichtigung auslöst. Überprüfen Sie Ihre App erneut und versuchen Sie, einige Todos hinzuzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des Alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Reaktivität von Svelte wird das Markup aktualisiert.

Das gleiche könnten wir auch innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten berührt. In diesem Fall müssen Sie sich auf die Methoden `store.subscribe()` und `store.set()` verlassen.

## Verbesserung unserer Alert-Komponente

Es ist etwas ärgerlich, auf die Benachrichtigung klicken zu müssen, um sie loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwinden würde.

Lassen Sie uns sehen, wie man das macht. Wir geben eine Eigenschaft an mit den Millisekunden, die gewartet werden sollen, bevor die Benachrichtigung gelöscht wird, und wir definieren einen Timeout, um die Benachrichtigung zu entfernen. Wir werden auch darauf achten, den Timeout zu löschen, wenn die `Alert`-Komponente entfernt wird, um Speicherlecks zu vermeiden.

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

Hier erstellen wir zuerst die Eigenschaft `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erzeugen wir eine `onMessageChange()`-Funktion, die dafür verantwortlich ist, ob die Benachrichtigung sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, diese Funktion jedes Mal auszuführen, wenn sich der `$alert`-Store oder die `ms`-Eigenschaft ändert.

Immer wenn sich der `$alert`-Store ändert, bereinigen wir alle ausstehenden Timeouts. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und die Benachrichtigung wird aus dem DOM entfernt. Wenn sie nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um die Benachrichtigung nach `ms` Millisekunden zu löschen.

Schließlich sorgen wir mit der `onDestroy()`-Lebenszyklusfunktion dafür, die `clearTimeout()`-Funktion zu rufen.

Wir haben auch ein SVG-Icon über dem Benachrichtigungsabsatz hinzugefügt, um das Erscheinungsbild etwas zu verbessern. Probieren Sie es noch einmal aus und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert gut, ist aber nicht sehr benutzerfreundlich für unterstützende Technologien. Das Problem besteht bei Elementen, die dynamisch hinzugefügt und von der Seite entfernt werden. Zwar offenkundig für Benutzer, die die Seite sehen können, sie aber möglicherweise nicht so offensichtlich für Benutzer von unterstützenden Technologien, wie Bildschirmlesegeräte, sind. Um diese Situationen zu behandeln, können wir von [ARIA Live-Räumen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) profitieren, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch offenzulegen, damit sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können einen Bereich deklarieren, der dynamische Inhalte enthält, die von unterstützenden Technologien angekündigt werden sollten, mit der `aria-live`-Eigenschaft, gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmlesegeräte Updates für diese Bereiche behandeln sollten. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für gewöhnliche Situationen haben Sie auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall genügt es, der `<div>`-Container das `role="alert"` hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesegeräten zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web verwenden. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, neben anderen Optionen.

Um mehr darüber zu erfahren, wie Sie Barrierefreiheitsprobleme erkennen und beheben können, sehen Sie sich unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul an.

## Den Store-Vertrag verwenden, um unsere Todos zu speichern

Unsere kleine App ermöglicht es uns, unsere Todos ziemlich einfach zu verwalten, ist aber eher nutzlos, wenn wir jedes Mal dieselbe Liste von hartkodierten Todos erhalten, wenn wir sie neu laden. Um wirklich nützlich zu sein, müssen wir herausfinden, wie wir unsere Todos speichern können.

Zuerst brauchen wir eine Möglichkeit für unsere `Todos`-Komponente, die aktualisierten Todos an ihren Eltern zurückzugeben. Wir könnten ein aktualisiertes Ereignis mit der Liste der Todos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Lassen Sie uns `App.svelte` öffnen und es versuchen.

1. Fügen Sie die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie als Nächstes Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > [!NOTE]
   > `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Kehren Sie zu Ihrer App zurück, versuchen Sie einige Todos hinzuzufügen, und gehen Sie dann zu den Entwicklerwerkzeugen auf der Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren Todos vornehmen, dank der `bind`-Richtlinie im `todos`-Array in `App.svelte` reflektiert wird.

Jetzt müssen wir herausfinden, wie wir diese Todos speichern können. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere Todos im [Web-Speicher](/de/docs/Web/API/Web_Storage_API) oder in einem Webdienst zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dies würde uns ermöglichen, ihn wie jeden anderen Store zu verwenden und den Speichermechanismus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web-Speicher synchronisiert, und später einen anderen entwickeln, der sich mit einem Webdienst synchronisiert. Der Wechsel zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht berühren.

### Unsere Todos speichern

Beginnen wir also, indem wir einen regulären schreibbaren Store verwenden, um unsere Todos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir, wenn wir auf die Todos zugreifen, jetzt die reaktive `$todos`-Syntax verwenden müssen.

   Aktualisieren Sie Ihre `App.svelte`-Datei so:

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";
     import Alert from "./components/Alert.svelte";

     import { todos } from "./stores.js";

     $todos = [
       { id: 1, name: "Create a Svelte starter app", completed: true },
       { id: 2, name: "Create your first component", completed: true },
       { id: 3, name: "Complete the rest of the tutorial", completed: false },
     ];
   </script>

   <Alert />
   <Todos bind:todos={$todos} />
   ```

3. Probieren Sie es aus; alles sollte funktionieren. Als Nächstes werden wir sehen, wie man unsere eigenen benutzerdefinierten Stores implementiert.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores ohne Verwendung von `svelte/store` erstellen, indem Sie den Store-Vertrag implementieren. Dessen Funktionen müssen wie folgt funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die, wenn sie aufgerufen wird, das Abonnement beenden muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und alle aktiven Abonnementfunktionen des Stores synchron aufruft. Ein Store mit einer `set()`-Methode wird als schreibbarer Store bezeichnet.

Zuerst lassen Sie uns die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzufügen, um den `todos`-Store und dessen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter das `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, werden Sie etwas wie dies in Ihrer Webkonsole sehen:

![webkonsole zeigt die Funktionen und Inhalte des todos-Stores](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das `subscribe()`, `set()` und `update()` Methoden enthält, und `$todos` ist unser Array von Todos.

Nur als Referenz ist hier ein grundlegender Arbeitsstore, der von Grund auf implementiert ist:

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

Hier deklarieren wir `subs`, das ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, wobei der neue Wert als Parameter übergeben wird.

Normalerweise implementiert man Stores nicht von Grund auf neu; stattdessen würde man den schreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zählerstore, der nur zulässt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-do-Liste-App zu komplex wird, könnten wir unseren Todos-Store alle Zustandsmodifikationen behandeln lassen. Wir könnten alle Methoden, die das `todo`-Array (wie `addTodo()`, `removeTodo()`, etc.) in unserer `Todos`-Komponente ändern, in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsmodifikationen angewendet werden, könnten die Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern und reaktiv die von dem Store bereitgestellten Informationen anzuzeigen. Einen eindeutigen Ort zu haben, um Zustandsmodifikationen zu behandeln, macht es einfacher, den Datenfluss nachzuvollziehen und Probleme zu erkennen.

Svelte zwingt Sie nicht dazu, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es bietet Ihnen einfach die Werkzeuge, um selbst zu entscheiden, wie Sie es handhaben.

### Implementierung unseres benutzerdefinierten Todos-Stores

Unsere To-do-Liste-App ist nicht besonders komplex, daher werden wir nicht alle unsere Modifikationsmethoden an einen zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere Todos zu speichern.

> [!NOTE]
> Wenn Sie diesem Leitfaden folgen und von der Svelte REPL aus arbeitet, werden Sie diesen Schritt nicht abschließen können. Aus Sicherheitsgründen arbeitet die Svelte REPL in einer sandkastenähnlichen Umgebung, die Ihnen nicht erlaubt, auf den Web-Speicher zuzugreifen, und Sie werden einen "The operation is insecure"-Fehler erhalten. Um diesen Abschnitt zu folgen, müssen Sie das Repo klonen und in den `mdn-svelte-tutorial/06-stores` Ordner gehen, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Web-Speicher speichert, benötigen wir einen schreibbaren Store, der Folgendes tut:

- Liest beim Start den Wert aus dem Web-Speicher und initialisiert ihn, falls nicht vorhanden, mit einem Standardwert
- Aktualisiert bei jeder Änderung den Wert im Store als auch die Daten im lokalen Speicher

Darüber hinaus, weil der Web-Speicher nur das Speichern von Zeichenkettenwerten unterstützt, müssen wir beim Speichern vom Objekt zu einer Zeichenkette konvertieren und umgekehrt, wenn wir den Wert aus dem lokalen Speicher laden.

1. Erstellen Sie eine neue Datei namens `localStore.js` in Ihrem `src`-Verzeichnis.
2. Geben sie den folgenden Inhalt:

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
       set(value) {
         localStorage.setItem(key, toString(value)); // save also to local storage as a string
         return set(value);
       },
       update,
     };
   };
   ```

   - Unser `localStore` wird eine Funktion sein, die bei der Ausführung beim Start den Inhalt aus dem Web-Speicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir ein neues `localStore` erstellen, müssen wir den Schlüssel des Web-Speichers und einen Standardwert spezifizieren. Wir überprüfen dann, ob der Wert im Web-Speicher existiert und, falls nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Daten im Web-Speicher zu lesen und zu schreiben, und die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet), um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den Zeichenketteninhalt, den wir aus dem Web-Speicher empfangen, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir den Inhalt des Stores aktualisieren, auch den Web-Speicher, wobei der Wert in eine Zeichenkette konvertiert wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation zum Speichern des Wertes im Web-Speicher hinzugefügt haben. Der restliche Code ist größtenteils Initialisierung und Umwandlung.

3. Wir werden jetzt unseren lokalen Store von `stores.js` verwenden, um unseren lokal gespeicherten Todos-Store zu erstellen.

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

   Indem wir `localStore('mdn-svelte-todo', initialTodos)` verwenden, konfigurieren wir den Store, die Daten im Web-Speicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir setzen auch ein paar Todos als Startwerte.

4. Lassen Sie uns die hartkodierten Todos in `App.svelte` loswerden. Aktualisieren Sie dessen Inhalte wie folgt. Grundsätzlich entfernen wir nur das `$todos`-Array und die `console.log()`-Anweisungen:

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";
     import Alert from "./components/Alert.svelte";

     import { todos } from "./stores.js";
   </script>

   <Alert />
   <Todos bind:todos={$todos} />
   ```

   > [!NOTE]
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist vollständig transparent in Bezug darauf, welche Art von Store wir verwenden.

5. Gehen Sie voran und versuchen Sie Ihre App erneut. Erstellen Sie einige Todos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Aufrufen der URL werden Ihre Todos weiterhin vorhanden sein.
6. Sie können es auch in den DevTools-Konsole überprüfen. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen in Ihrer App vor, z. B. durch Drücken der Schaltfläche _Uncheck All_, und überprüfen Sie den Inhalt des Web-Speichers erneut. Sie werden etwa folgendes erhalten:

   ![to-do-app mit Webkonsole daneben zeigt, dass wenn ein to-do in der App geändert wird, im Webspeicher der entsprechende Eintrag geändert wird](03-persisting-todos-to-local-storage.png)

Svelte Stores bieten eine sehr einfache und leichte, aber äußerst leistungsstarke Möglichkeit, komplexen App-Zustand von einem globalen Datenspeicher aus auf reaktive Weise zu verwalten. Da Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Abonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores genauso umzugehen wie mit lokalen Variablen. Da Stores eine minimale API haben, ist es sehr einfach, unsere eigenen benutzerdefinierten Stores zu erstellen, um die inneren Funktionen des Stores selbst zu abstrahieren.

## Bonus-Track: Übergänge

Wechseln wir jetzt das Thema und machen etwas Spaßiges und Anderes: Fügen wir eine Animation zu unseren Benachrichtigungen hinzu. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Richtlinie angewendet und wird ausgelöst, indem ein Element bei einer Zustandsänderung in den oder aus dem DOM eintritt oder dieses verlässt.

Lassen Sie uns unserer `Alert`-Komponente einen "fly" `transition` hinzufügen. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Setzen Sie die folgende Importanweisung unter die bestehenden:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um sie zu verwenden, aktualisieren Sie Ihr `<div>`-Tag, so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Übergänge können auch Parameter empfangen, wie so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > Die doppelten geschweiften Klammern sind kein spezieller Svelte-Syntax. Es ist einfach ein literales JavaScript-Objekt, das als Parameter für den Fly-Übergang übergeben wird.

3. Versuchen Sie Ihre App erneut und Sie werden sehen, dass die Benachrichtigungen jetzt ein bisschen ansprechender aussehen.

> [!NOTE]
> Als Compiler ermöglicht es Svelte, die Größe unseres Bundles zu optimieren, indem nicht verwendete Funktionen ausgeschlossen werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js` Datei ein wenig weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Richtlinie entfernen, ist Svelte intelligent genug, um zu erkennen, dass die fly-Funktion nicht verwendet wird, und die `bundle.js`-Dateigröße wird auf nur 18 KB heruntergehen.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen für den Umgang mit Animationen und Übergängen. Svelte unterstützt auch die Angabe unterschiedlicher Übergänge, die angewendet werden soll, wenn ein Element zum DOM hinzugefügt oder daraus entfernt wird, mit den Direktiven `in:fn`/`out:fn`, und es ermöglicht Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es hat auch mehrere Easing-Funktionen zum Festlegen der Änderungsrate über die Zeit. Schauen Sie sich den [ease visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbar Easing-Funktionen zu erkunden.

## Der Code bisher

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/07-next-steps
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einer REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Web-Speicher.

- Dies ermöglichte es uns, einige fortgeschrittene Techniken von Svelte zu zeigen. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man mit Stores eine Statusverwaltung über mehrere Komponenten hinweg implementiert. Wir haben auch gesehen, wie man sich automatisch bei Stores anmelden kann, um sie nahtlos in das Reaktivitätssystem von Svelte zu integrieren.
- Dann haben wir gesehen, wie man seinen eigenen Store von Grund auf neu implementiert und auch wie man den schreibbaren Store von Svelte erweitert, um Daten im Web-Speicher zu speichern.
- Am Ende haben wir uns angesehen, wie man die Svelte `transition`-Richtlinie verwenden kann, um Animationen bei DOM-Elementen zu implementieren.

Im nächsten Artikel werden wir lernen, wie man TypeScript-Support zu unserer Svelte-Anwendung hinzufügt. Um alle seine Funktionalitäten zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
