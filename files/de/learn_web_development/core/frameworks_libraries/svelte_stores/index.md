---
title: Arbeiten mit Svelte Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken für den Umgang mit Reaktivität, der Arbeit mit DOM-Knoten und der Bereitstellung von Komponentenfunktionalität besprochen. In diesem Artikel zeigen wir eine andere Möglichkeit zur Verwaltung von Zuständen in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositorien, die Werte halten. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich ihre Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          vertraut sein und Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Konsole/Befehlszeile</a
          > haben.
        </p>
        <p>
          Sie benötigen eine Konsole mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Svelte Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Stores erstellen wir eine `Alert`-Komponente, die Benachrichtigungen auf dem Bildschirm anzeigt, welche Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist kein Elternteil oder Kind einer anderen Komponente — daher passen die Nachrichten nicht in die Komponentenhierarchie.

Wir werden auch sehen, wie man unseren eigenen benutzerdefinierten Store entwickelt, um die ToDo-Informationen im [Web-Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere ToDos über Seitenneuladungen hinweg bestehen bleiben.

## Mitmachen beim Coden

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie dann aus

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um gemeinsam mit uns den Code im REPL zu bearbeiten, beginnen Sie unter

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem Anwendungszustand

Wir haben bereits gesehen, wie unsere Komponenten mit Hilfe von Props, beidseitigem Datenabgleich und Ereignissen miteinander kommunizieren können. In all diesen Fällen handelte es sich um die Kommunikation zwischen Eltern- und Kindkomponenten.

Aber nicht jeder Anwendungszustand gehört in die Komponentenhierarchie Ihrer Anwendung. Beispielsweise Informationen über den angemeldeten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss Ihr Anwendungszustand von mehreren Komponenten, die nicht hierarchisch verwandt sind, oder von einem regulären JavaScript-Modul aus zugänglich sein.

Darüber hinaus kann es schwierig werden, wenn Ihre App komplex wird und Ihre Komponentenhierarchie komplex wird, Daten zwischen Komponenten weiterzuleiten. In diesem Fall könnte das Verschieben zu einem globalen Datenstore eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, dann sind Sie mit der Funktionsweise eines solchen Stores vertraut. Svelte Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Store-Wert ändert, und einer optionalen `set()`-Methode, mit der Sie neue Werte für den Store festlegen können. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte bietet Funktionen zum Erstellen von [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [derived](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores erstellen, die dem Store-Vertrag entsprechen, erhalten Sie diesen reaktiven syntaktischen Zucker kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Diese Arten von Widgets können auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Sobald eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir damit, einen beschreibbaren Store zu erstellen. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird diesen abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei, `stores.js`, in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie auf beliebige Weise organisieren können.

Im obigen Code importieren wir die `writable()`-Funktion aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Willkommen bei der To-Do-Liste App!" zu erstellen. Wir exportieren dann den Store.

### Erstellen der eigentlichen Komponente

Lassen Sie uns nun unsere `Alert`-Komponente erstellen und sehen, wie wir Werte aus dem Store lesen können.

1. Erstellen Sie eine weitere neue Datei namens `src/components/Alert.svelte`.
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

Gehen wir diesen Codeblock im Detail durch.

- Zunächst importieren wir den `alert`-Store.
- Als nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, die es uns ermöglicht, einen Rückruf auszuführen, nachdem die Komponente gelöscht wurde.
- Dann erstellen wir eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf oberster Ebene stehende Variablen aus dem Markup heraus zugänglich machen können, und wenn sie geändert werden, wird das DOM entsprechend aktualisiert.
- Anschließend rufen wir die Methode `alert.subscribe()` auf, indem wir ihr eine Rückruffunktion als Parameter übergeben. Wann immer sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir einfach den erhaltenen Wert der lokalen Variable zu, was die Aktualisierung des DOM der Komponente auslösen wird.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die sich um die Freigabe des Abonnements kümmert. Wir abonnieren also, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu kündigen, wenn die Komponente entfernt wird.
- Schließlich verwenden wir die `alertContent`-Variable in unserem Markup und bereinigen sie, wenn der Benutzer auf den Alarm klickt.
- Am Ende fügen wir ein paar CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Diese Einrichtung ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Rückruf ausgeführt. Dort weisen wir einer lokalen Variable einen neuen Wert zu und dank Svelte-Raktivität wird unser gesamtes Markup und die reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwendung der Komponente

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unter der bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, wie folgt:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um es zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die sagt Willkommen bei der To-Do-Liste App](01-alert-message.png)

## Stores reaktiv machen mit der reaktiven `$store`-Syntax

Das funktioniert, aber Sie müssen diesen ganzen Code jedes Mal kopieren und einfügen, wenn Sie ein Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler bietet Svelte mehr Ressourcen, um unseren Alltag zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription. Einfach ausgedrückt, setzen Sie einfach das `$`-Zeichen vor den Store und Svelte wird den Code generieren, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Das gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die Methoden `subscribe()` und `set()` implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Lassen Sie uns dies auf unsere `Alert`-Komponente anwenden. Aktualisieren Sie die `<script>`- und Markup-Bereiche von `Alert.svelte` wie folgt:

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

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies wie zuvor funktioniert. Das ist viel besser!

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, das Abonnement für den `alert`-Store zu übernehmen, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird und das Abonnement zu kündigen, wenn die Komponente entfernt wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir einen Wert an `$alert` zuweisen.

Das Endergebnis dieses raffinierten Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können wie bei reaktiven lokalen Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler in den Dienst der besseren Ergonomie für Entwickler stellt und uns nicht nur mühsame Tipparbeit erspart, sondern auch weniger fehleranfälligen Code generiert.

## In unseren Store schreiben

In unseren Store zu schreiben ist nur eine Frage des Imports und der Ausführung von `$store = 'neuer Wert'`. Lassen Sie es uns in unserer `Todos`-Komponente verwenden.

1. Fügen Sie die folgende `import`-Anweisung unter den vorhandenen ein:

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

4. Aktualisieren Sie die `updateTodo()`-Funktion wie folgt:

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

7. Im Grunde haben wir den Store importiert und bei jedem Ereignis aktualisiert, was jedes Mal eine neue Benachrichtigung anzeigt. Schauen Sie sich Ihre App noch einmal an und versuchen Sie ein paar To-Dos hinzuzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des `alert` Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten verändert. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist ein bisschen lästig, auf die Benachrichtigung klicken zu müssen, um sie loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwindet.

Lassen Sie uns sehen, wie das geht. Wir werden eine Prop mit den Millisekunden angeben, die wir warten sollen, bevor wir die Benachrichtigung löschen, und wir werden ein Timeout festlegen, um den Alarm zu entfernen. Wir werden auch darauf achten, das Timeout zu löschen, wenn die `Alert`-Komponente entfernt wird, um Speicherlecks zu vermeiden.

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

2. Und aktualisieren Sie den Markup-Bereich von `Alert.svelte` wie folgt:

   ```svelte
   {#if visible}
   <div on:click={() => visible = false}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

Hier erstellen wir zunächst die Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine Funktion `onMessageChange()`, die sich darum kümmert, ob der Alarm sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` weisen wir Svelte an, diese Funktion jedes Mal auszuführen, wenn sich der `$alert` Store oder die `ms` Prop ändert.

Sobald sich der `$alert` Store ändert, bereinigen wir ausstehende Timeout. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und der Alarm wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die Funktion `setTimeout()`, um den Alarm nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()` Lebenszyklusfunktion sicher, dass die Funktion `clearTimeout()` aufgerufen wird.

Wir haben auch ein SVG-Icon über dem Alerts-Paragrafen hinzugefügt, um es ein wenig ansprechender aussehen zu lassen. Probieren Sie es erneut und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente barrierefrei machen

Unsere `Alert`-Komponente funktioniert einwandfrei, aber sie ist nicht sehr benutzerfreundlich für unterstützende Technologien. Das Problem sind Elemente, die dynamisch hinzugefügt und von der Seite entfernt werden. Während sie für Benutzer, die die Seite sehen können, visuell offensichtlich sind, sind sie für Benutzer von unterstützenden Technologien wie Bildschirmlesern möglicherweise nicht so offensichtlich. Um diese Situationen zu behandeln, können wir [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmgesteuert zu offenbaren, damit sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können eine Region deklarieren, die dynamischen Inhalt enthält, der von unterstützenden Technologien angekündigt werden soll, indem wir die Eigenschaft `aria-live` gefolgt von der Höflichkeitseinstellung verwenden. Diese wird verwendet, um festzulegen, mit welcher Priorität Bildschirmleser Änderungen an diesen Regionen handhaben sollten. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für gewöhnliche Situationen stehen Ihnen auch mehrere vordefinierte spezialisierte `role` Werte zur Verfügung, wie `log`, `status` und `alert`.

In unserem Fall genügt das Hinzufügen eines `role="alert"` zu dem `<div>`-Container, wie folgt:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesern zu testen, um nicht nur Barrierefreiheitsprobleme zu entdecken, sondern auch, um sich daran zu gewöhnen, wie sehbehinderte Menschen das Netz nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) für Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, neben anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, schauen Sie sich unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul an.

## Verwendung des Store-Vertrags zur Speicherung unserer ToDos

Unsere kleine App ermöglicht es uns, unsere ToDos recht einfach zu verwalten, ist aber ziemlich nutzlos, wenn wir bei einem Neuladen immer dieselbe Liste von festkodierten ToDos erhalten. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere ToDos speichern.

Zuerst benötigen wir eine Möglichkeit, damit unsere `Todos`-Komponente die aktualisierten ToDos an deren Eltern zurückgeben kann. Wir könnten ein aktualisiertes Ereignis mit der Liste der ToDos ausgeben, aber es ist einfacher, einfach die `todos`-Variable zu binden. Öffnen wir `App.svelte` und probieren es aus.

1. Fügen Sie die folgende Zeile unterhalb Ihres `todos`-Arrays hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie als nächstes Ihren Aufruf der `Todos`-Komponente wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie einige ToDos hinzuzufügen, und gehen Sie dann zu Ihrer Developer Tools-Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren ToDos vornehmen, sich dank der `bind`-Direktive im `todos`-Array widerspiegelt, das in `App.svelte` definiert ist.

Jetzt müssen wir einen Weg finden, um diese ToDos zu speichern. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere ToDos in den [Web-Speicher](/de/docs/Web/API/Web_Storage_API) oder einen Web-Dienst zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der uns ermöglicht, seinen Inhalt zu speichern? Dies würde es uns ermöglichen, es wie jeden anderen Store zu verwenden und den Speichermechanismus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web-Speicher synchronisiert, und später noch einen anderen entwickeln, der sich mit einem Web-Dienst synchronisiert. Zwischen ihnen zu wechseln wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Speichern unserer ToDos

Beginnen wir also damit, einen regulären beschreibbaren Store zu verwenden, um unsere ToDos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem vorhandenen hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass Sie, um auf die ToDos zuzugreifen, jetzt die reaktive `$todos`-`$store`-Syntax verwenden müssen.

   Aktualisieren Sie Ihre `App.svelte`-Datei wie folgt:

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

3. Probieren Sie es aus; alles sollte funktionieren. Als Nächstes sehen wir, wie man unsere eigenen benutzerdefinierten Stores definiert.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores ohne die Verwendung von `svelte/store` erstellen, indem Sie den Store-Vertrag implementieren. Dessen Funktionen müssen wie folgt arbeiten:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die bei ihrer Ausführung das Abonnement beendet.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen Sie zunächst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos` Store und dessen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unterhalb des `todos`-Arrays hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, werden Sie etwas Ähnliches wie dies in Ihrer Webkonsole sehen:

![Webkonsole zeigt die Funktionen und Inhalte des todos-Stores](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store nur ein Objekt, das Methoden `subscribe()`, `set()` und `update()` enthält, und `$todos` ist unser Array von ToDos.

Nur zur Referenz hier ist ein grundlegender funktionierender Store, der von Grund auf neu implementiert wurde:

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

Hier deklarieren wir `subs`, das ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernen wird.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, wobei wir den neuen Wert als Parameter übergeben.

Normalerweise implementieren Sie Stores nicht von Grund auf neu; stattdessen würden Sie den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domainspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der es nur erlaubt, den Zähler um eins zu erhöhen oder seinen Wert zurückzusetzen:

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

Wenn unsere ToDo-Listen-App zu komplex wird, könnten wir unseren ToDos-Store alle Zustandsänderungen behandeln lassen. Wir könnten alle Methoden, die das `todo`-Array modifizieren (wie `addTodo()`, `removeTodo()`, etc.), von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsänderungen angewendet werden, könnten Komponenten diese Methoden einfach aufrufen, um den Anwendungszustand zu ändern und reaktiv die Informationen anzuzeigen, die vom Store bereitgestellt werden. Ein einzigartiger Ort zur Behandlung von Zustandsänderungen macht es einfacher, über den Zustandsfluss nachzudenken und Probleme zu erkennen.

Svelte wird Sie nicht zwingen, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es bietet Ihnen nur die Werkzeuge, um auszuwählen, wie Sie es handhaben möchten.

### Implementierung unseres benutzerdefinierten ToDos-Stores

Unsere ToDo-Listen-App ist nicht besonders komplex, daher werden wir nicht alle unsere Änderungsmethoden an einem zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere ToDos zu speichern.

> [!NOTE]
> Wenn Sie dieser Anleitung arbeiten vom Svelte REPL folgen, werden Sie diesen Schritt nicht abschließen können. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer in einer Sandbox ausgeführten Umgebung, die Ihnen den Zugriff auf den Web-Speicher nicht erlaubt, und Sie erhalten einen Fehler "Die Operation ist unsicher". Um diesen Abschnitt zu folgen, müssen Sie das Repo klonen und in den `mdn-svelte-tutorial/06-stores`-Ordner gehen, oder Sie können direkt den Inhalt des Ordners mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Web-Speicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Zuerst liest er den Wert aus dem Web-Speicher, und wenn er nicht vorhanden ist, initialisiert er ihn mit einem Standardwert
- Wann immer der Wert geändert wird, wird sowohl der Store als auch die Daten im Local Storage aktualisiert

Darüber hinaus unterstützt der Web-Speicher nur das Speichern von Zeichenfolgewerten, sodass wir beim Speichern von Objekten in Strings konvertieren müssen und umgekehrt beim Laden des Wertes aus dem Local Storage.

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
       set(value) {
         localStorage.setItem(key, toString(value)); // save also to local storage as a string
         return set(value);
       },
       update,
     };
   };
   ```

   - Unser `localStore` wird eine Funktion sein, die beim Ausführen zunächst ihren Inhalt aus dem Web-Speicher liest und ein Objekt mit drei Methoden: `subscribe()`, `set()`, und `update()` zurückgibt.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Web-Speichers und einen Anfangswert angeben. Dann überprüfen wir, ob der Wert im Web-Speicher vorhanden ist und erstellen ihn andernfalls.
   - Wir verwenden die [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem)-Methoden, um Informationen im Web-Speicher zu lesen und zu schreiben sowie die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()`, die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet, um die Werte zu konvertieren.
   - Als Nächstes konvertieren wir den Zeichenketteninhalt, den wir aus dem Webspeicher erhalten haben, zu einem Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir die Inhalte des Stores aktualisieren, den Webspeicher, wobei der Wert in eine Zeichenfolge konvertiert wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation hinzufügten, um den Wert im Web-Speicher zu speichern. Der Rest des Codes bezieht sich hauptsächlich auf das Initialisieren und Konvertieren von Dingen.

3. Nun werden wir unseren lokalen Store aus `stores.js` verwenden, um unseren lokal gespeicherten ToDos-Store zu erstellen.

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

   Mit `localStore('mdn-svelte-todo', initialTodos)`, konfigurieren wir den Store, um die Daten im Web-Speicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir setzen auch ein paar ToDos als Anfangswerte.

4. Jetzt lassen Sie uns die fest kodierten ToDos in `App.svelte` loswerden. Aktualisieren Sie dessen Inhalt wie folgt. Wir löschen im Grunde nur das `$todos`-Array und die `console.log()`-Anweisungen:

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
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist komplett transparent in Bezug auf welche Art von Store wir verwenden.

5. Gehen Sie voran und probieren Sie Ihre App erneut aus. Erstellen Sie ein paar ToDos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Besuch der URL werden Ihre ToDos immer noch da sein.
6. Sie können es auch in den DevTools-Konsolen inspizieren. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie Änderungen an Ihrer App vor, z.B. drücken Sie den _Uncheck All_ Button, und überprüfen Sie den Webspeicherinhalt noch einmal. Sie erhalten so etwas wie dies:

   ![ToDo-App mit Webkonsole, die zeigt, dass beim Ändern eines ToDos in der App der entsprechende Eintrag im Web-Speicher ebenfalls geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores liefern einen sehr einfachen und leichten, aber gleichzeitig extrem leistungsfähigen Weg, um komplexe Anwendungszustände aus einem globalen Datenspeicher reaktiv zu handhaben. Und weil Svelte unseren Code kompiliert, kann es die [`$store` Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores genauso zu arbeiten wie mit lokalen Variablen. Weil Stores eine minimale API haben, ist es sehr einfach, unsere eigenen benutzerdefinierten Stores zu erstellen, um die inneren Funktionsweisen des Stores selbst zu abstrahieren.

## Bonustrack: Übergänge

Wechseln wir nun das Thema und machen etwas Spaßiges und Anderes: fügen wir eine Animation zu unseren Benachrichtigungen hinzu. Svelte bietet ein ganzes Modul, um [Übergänge zu definieren](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu erstellen, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird dadurch ausgelöst, dass ein Element aufgrund einer Statusänderung in das DOM eingefügt oder daraus entfernt wird.

Geben wir unserer `Alert`-Komponente einen Fly-Übergang. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Fügen Sie die folgende `import`-Anweisung unter den bestehenden ein:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um sie zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag wie folgt:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Übergänge können auch Parameter empfangen, wie dies:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es ist einfach ein JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus, und Sie werden sehen, dass die Benachrichtigungen jetzt ein wenig ansprechender aussehen.

> [!NOTE]
> Als Compiler kann Svelte die Größe unseres Bundles optimieren, indem es nicht verwendete Funktionen ausschließt. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js`-Datei etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly` Direktive entfernen, ist Svelte intelligent genug, um zu erkennen, dass die `fly`-Funktion nicht verwendet wird und die Größe der `bundle.js`-Datei sinkt auf nur noch 18 KB.

Das ist nur die Spitze des Eisbergs. Svelte bietet viele Optionen für den Umgang mit Animationen und Übergängen. Svelte unterstützt auch das Festlegen unterschiedlicher Übergänge, die angewendet werden sollen, wenn das Element dem DOM hinzugefügt oder daraus entfernt wird, mit den `in:fn`/`out:fn`-Direktiven und ermöglicht es Ihnen auch, Ihre [eigenen CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es hat auch mehrere Easing-Funktionen, um die Änderungsrate über die Zeit zu spezifizieren. Schauen Sie sich den [Ease-Visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbaren Ease-Funktionen zu erkunden.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie wie folgt auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/07-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Zustand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und die Speicherung von `todos` im Web-Speicher.

- Dadurch konnten wir einige fortgeschrittene Svelte-Techniken zeigen. Wir haben die `Alert`-Komponente entwickelt, um zu zeigen, wie man zustandsübergreifende Komponentenverwaltung mit Stores implementiert. Wir haben auch gesehen, wie man automatisch auf Stores abonniert, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann haben wir gesehen, wie man unseren eigenen Store von Grund auf implementiert und auch, wie man Sveltes beschreibbaren Store erweitern kann, um Daten im Webspeicher zu speichern.
- Zum Schluss haben wir uns angeschaut, wie man die `transition`-Direktive von Svelte verwendet, um Animationen für DOM-Elemente zu implementieren.

Im nächsten Artikel werden wir lernen, wie man TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügt. Um alle Funktionen voll auszuschöpfen, werden wir auch unsere gesamte Anwendung auf TypeScript übertragen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
