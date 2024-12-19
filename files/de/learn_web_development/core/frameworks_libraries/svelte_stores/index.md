---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Reaktivität, zum Arbeiten mit DOM-Knoten und zum Bereitstellen von Komponenten-Funktionalitäten diskutiert. In diesem Artikel zeigen wir eine weitere Möglichkeit zur Verwaltung des Zustands in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenspeicher, die Werte halten. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

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
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
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

Mit Stores erstellen wir eine `Alert`-Komponente, die Benachrichtigungen auf dem Bildschirm anzeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig von den anderen — sie ist weder eine Eltern- noch eine Kindkomponente — sodass die Nachrichten nicht in die Komponenten-Hierarchie passen.

Wir werden auch sehen, wie man einen eigenen benutzerdefinierten Store entwickelt, um die Todo-Informationen im [web storage](/de/docs/Web/API/Web_Storage_API) zu speichern, damit unsere To-dos über Seitenladezeiten hinweg bestehen bleiben.

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Zustand der App zu gelangen, führen Sie dann aus

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem App-Zustand

Wir haben bereits gesehen, wie unsere Komponenten miteinander kommunizieren können, indem sie Props, Datenbindung in beide Richtungen und Ereignisse verwenden. In diesen Fällen ging es um die Kommunikation zwischen Eltern- und Kindkomponenten.

Aber nicht alle Anwendungszustände gehören zur Hierarchie der Komponenten Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das Dark-Theme aktiviert ist oder nicht.

Manchmal muss Ihr App-Zustand von mehreren nicht hierarchisch zusammenhängenden Komponenten oder von einem regulären JavaScript-Modul zugegriffen werden.

Außerdem, wenn Ihre Anwendung komplex wird und Ihre Komponenten-Hierarchie kompliziert wird, kann es zu schwierig werden, dass Komponenten Daten zwischen sich austauschen. In diesem Fall könnte der Umzug zu einem globalen Datastore eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, werden Sie mit der Funktionsweise dieses Store-Typs vertraut sein. Svelte-Stores bieten ähnliche Funktionen für die Zustandsverwaltung.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Wert des Stores ändert, und einer optionalen `set()`-Methode, die es Ihnen ermöglicht, neue Werte für den Store festzulegen. Diese minimalistische API ist als [store contract](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte stellt Funktionen zur Verfügung, um [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [derived](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store` Modul zu erstellen.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem es die [reactive `$store` syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet. Wenn Sie Ihre eigenen Stores erstellen, die dem Store-Vertrag entsprechen, erhalten Sie diesen syntaktischen Zucker für die Reaktivität kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Diese Art von Widgets könnten auch als Popup-Benachrichtigungen, Toasts oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann ihr Benachrichtigungen senden. Wann immer eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir, indem wir einen beschreibbaren Store erstellen. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei `stores.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die `writable()`-Funktion aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Willkommen zur To-do-Listen-App!" zu erstellen. Wir `exportieren` dann den Store.

### Erstellen der tatsächlichen Komponente

Erstellen Sie jetzt unsere `Alert`-Komponente und sehen Sie, wie wir Werte aus dem Store lesen können.

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

Gehen wir diesen Codeblock im Detail durch.

- Zuerst importieren wir den `alert`-Store.
- Als nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, die es uns ermöglicht, einen Callback auszuführen, nachdem die Komponente entfernt wurde.
- Dann erstellen wir eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf oberster Ebene Variablen aus dem Markup zugreifen können und der DOM entsprechend aktualisiert wird, wann immer sie geändert werden.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Callback-Funktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Callback-Funktion mit dem neuen Wert als ihrem Parameter aufgerufen. In der Callback-Funktion weisen wir den empfangenen Wert einfach der lokalen Variablen zu, was die Aktualisierung des DOM der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die sich um die Freigabe des Abonnements kümmert. Wir abonnieren also, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu kündigen, wenn die Komponente entfernt wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup und löschen sie, wenn der Benutzer auf die Benachrichtigung klickt.
- Am Ende fügen wir einige CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Dieses Setup ermöglicht es uns, reaktiv mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Callback ausgeführt. Dort weisen wir der lokalen Variablen einen neuen Wert zu, und dank der Svelte-Reaktivität werden unser gesamtes Markup und die reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwenden der Komponente

Verwenden wir nun unsere Komponente.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unter der bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt oberhalb des `Todos`-Aufrufs auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt, und Sie sollten nun die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie auszublenden.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die Willkommen zur To-do-Listen-App sagt](01-alert-message.png)

## Stores reaktiv machen mit der reaktiven `$store`-Syntax

Das funktioniert, aber Sie müssten diesen gesamten Code jedes Mal kopieren und einfügen, wenn Sie ein Store abonniert:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Ressourcen, um uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription. Einfach ausgedrückt, Sie fügen dem Store einfach das `$`-Zeichen hinzu und Svelte generiert den Code, um es automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird voll reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir später noch sehen werden, wird die reaktive `$store`-Syntax auch für Ihre Stores gelten.

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

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies genauso wie vorher funktioniert. Das ist viel besser!

Im Hintergrund hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird, und das Abonnement zu kündigen, wenn die Komponente entfernt wird. Außerdem wird es die `alert.set()`-Anweisungen generieren, wann immer wir einen Wert `$alert` zuweisen.

Das Endergebnis dieses cleveren Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler in die Lage versetzt, für eine bessere Entwicklerergonomie zu sorgen, nicht nur, indem uns das Tippen von Boilerplate erspart bleibt, sondern auch, indem weniger fehleranfälliger Code generiert wird.

## In unseren Store schreiben

In unseren Store zu schreiben ist einfach eine Frage des Imports und der Ausführung von `$store = 'neuer Wert'`. Lassen Sie uns das in unserer `Todos`-Komponente verwenden.

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

4. Aktualisieren Sie die `updateTodo()`-Funktion auf diese:

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

5. Fügen Sie den folgenden reaktiven Block unter den Block hinzu, der mit `let filter = 'all'` beginnt:

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

6. Und schließlich aktualisieren Sie die Blöcke `const checkAllTodos` und `const removeCompletedTodos` wie folgt:

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

7. Im Grunde haben wir den Store importiert und bei jedem Ereignis aktualisiert, was jedes Mal eine neue Benachrichtigung auslöst. Schauen Sie sich Ihre App wieder an und versuchen Sie ein paar To-dos hinzuzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — genauso wie jeder Abonnent des Alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten berühren wird. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist ein bisschen lästig, auf die Benachrichtigung klicken zu müssen, um sie loszuwerden. Es wäre besser, wenn die Benachrichtigung einfach nach ein paar Sekunden verschwindet.

Sehen wir uns an, wie man das macht. Wir werden eine Eigenschaft mit den Millisekunden angeben, die gewartet werden sollen, bevor die Benachrichtigung gelöscht wird, und wir werden ein Timeout definieren, um die Benachrichtigung zu entfernen. Wir werden auch darauf achten, das Timeout zu löschen, wenn die `Alert`-Komponente entfernt wird, um Speicherlecks zu vermeiden.

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

Hier erstellen wir zuerst die Eigenschaft `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die dafür verantwortlich ist, ob die Benachrichtigung sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, dass diese Funktion ausgeführt werden soll, wann immer sich der `$alert`-Store oder die `ms`-Eigenschaft ändert.

Immer wenn sich der `$alert`-Store ändert, löschen wir anstehende Timeouts. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und die `Alert` wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um die Benachrichtigung nach `ms` Millisekunden zu löschen.

Schließlich sorgen wir mit der `onDestroy()`-Lebenszyklusfunktion dafür, die `clearTimeout()`-Funktion zu rufen.

Wir haben auch ein SVG-Icon über dem Benachrichtigungsabsatz hinzugefügt, um es etwas schöner zu machen. Probieren Sie es erneut aus, und Sie sollten die Änderungen sehen.

## Machen unserer Alert-Komponente zugänglich

Unsere `Alert`-Komponente funktioniert einwandfrei, ist jedoch nicht sehr freundlich für unterstützende Technologien. Das Problem sind Elemente, die dynamisch zur Seite hinzugefügt oder entfernt werden. Während sie für Benutzer, die die Seite sehen können, optisch offensichtlich sind, sind sie dies möglicherweise nicht für Benutzer unterstützender Technologien, wie Screenreader. Um mit diesen Situationen umzugehen, können wir [ARIA live regions](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmgesteuert zugänglich zu machen, sodass sie von unterstützender Technologie erkannt und angekündigt werden können.

Wir können eine Region deklarieren, die dynamischen Inhalt enthält, der von unterstützender Technologie angekündigt werden sollte, mit der Eigenschaft `aria-live` und der darauf folgenden Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Screenreader Updates in dieser Region handhaben sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

In allgemeinen Situationen haben Sie auch mehrere vordefinierte, spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall genügt es, `role="alert"` zum `<div>`-Container hinzuzufügen, etwa so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Screenreadern zu testen, nicht nur, um Barrierefreiheitsprobleme zu entdecken, sondern auch, um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) unter Linux und [VoiceOver](https://www.apple.com/accessibility/vision/) für macOS und iOS, neben anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, sehen Sie sich unser [Accessibility](/de/docs/Learn_web_development/Core/Accessibility) Modul an.

## Den Store-Vertrag verwenden, um unsere To-dos zu speichern

Unsere kleine App ermöglicht es uns, unsere To-dos recht einfach zu verwalten, ist jedoch ziemlich nutzlos, wenn wir immer dieselbe Liste an fest codierten To-dos erhalten, wenn wir sie neu laden. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-dos speichern können.

Zuerst benötigen wir einen Weg, damit unsere `Todos`-Komponente die aktualisierten To-dos an ihren Elternteil zurückgibt. Wir könnten ein aktualisiertes Ereignis mit der Liste der To-dos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Öffnen wir `App.svelte` und probieren es aus.

1. Fügen Sie zunächst die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Als nächstes aktualisieren Sie Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige To-dos hinzuzufügen, und gehen Sie dann zu Ihrer Entwickler-Tools-Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren To-dos vornehmen, sich im `todos`-Array widerspiegelt, das in `App.svelte` definiert ist, dank der `bind`-Direktive.

Jetzt müssen wir einen Weg finden, diese To-dos zu speichern. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere To-dos in die [Web-Speicher](/de/docs/Web/API/Web_Storage_API) oder in einen Webdienst zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dies würde uns erlauben, ihn genauso wie jeden anderen Store zu verwenden und den Speichermodus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web-Speicher synchronisiert und später einen anderen entwickeln, der sich mit einem Webdienst synchronisiert. Der Wechsel zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Unsere To-dos speichern

Beginnen wir also damit, einen regulären beschreibbaren Store zu verwenden, um unsere To-dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem vorhandenen hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie einfach daran, dass wir jetzt auf die To-dos mit der reaktiven `$todos`-Syntax des `$store` zugreifen müssen.

   Aktualisieren Sie Ihre `App.svelte`-Datei wie folgt:

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

3. Versuchen Sie es aus; alles sollte funktionieren. Als nächstes sehen wir uns an, wie man eigene benutzerdefinierte Stores implementiert.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Seine Funktionen müssen so funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die, wenn sie aufgerufen wird, ihr Abonnement beenden muss.
3. Ein Store kann optional eine `set()`-Methode haben, die als Argument einen neuen Wert für den Store akzeptieren muss und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen wir zunächst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos` Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie etwas Ähnliches wie dies in Ihrer Webkonsole:

![Webkonsole, die die Funktionen und Inhalte des todos-Stores zeigt](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das die Methoden `subscribe()`, `set()` und `update()` enthält, und `$todos` ist unser Array von To-dos.

Nur zur Referenz finden Sie hier einen grundlegenden funktionierenden Store, der von Grund auf neu implementiert wurde:

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

Hier deklarieren wir `subs`, was ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, wobei der neue Wert als Parameter übergeben wird.

Normalerweise implementieren Sie Stores nicht von Grund auf neu; stattdessen würden Sie den writable Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Counter-Store, der es uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-do-Liste-App zu komplex wird, könnten wir unseren To-dos-Store dazu bringen, jede Zustandsänderung zu handhaben. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, usw.) von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsänderungen angewendet werden, könnten Komponenten einfach diese Methoden aufrufen, um den App-Zustand zu ändern und reaktiv die von dem Store bereitgestellten Informationen anzuzeigen. Einen einzigartigen Ort zu haben, um Zustandsänderungen zu behandeln, macht es einfacher, den Zustandsfluss zu verstehen und Probleme zu erkennen.

Svelte wird Sie nicht dazu zwingen, Ihre Zustandsverwaltung auf eine bestimmte Weise zu organisieren; es bietet Ihnen nur die Werkzeuge, um zu wählen, wie Sie damit umgehen möchten.

### Implementierung unseres benutzerdefinierten To-dos-Stores

Unsere To-do-Liste-App ist nicht besonders komplex, daher werden wir nicht alle unsere Änderungsmethoden an einen zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere To-dos zu speichern.

> [!NOTE]
> Wenn Sie diese Anleitung im Svelte REPL befolgen, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer sandboxed-Umgebung, die Ihnen den Zugriff auf den Webspeicher nicht erlaubt, und Sie erhalten einen "Die Operation ist unsicher"-Fehler. Um diesen Abschnitt zu befolgen, müssen Sie das Repo klonen und in den Ordner `mdn-svelte-tutorial/06-stores` gehen, oder Sie können direkt den Inhalt des Ordners mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Webspeicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest initial den Wert aus dem Webspeicher und initialisiert ihn mit einem Standardwert, wenn er nicht vorhanden ist
- Aktualisiert den Store selbst und auch die Daten im lokalen Speicher, wann immer der Wert geändert wird

Darüber hinaus, da der Webspeicher nur das Speichern von Zeichenfolgenwerten unterstützt, müssen wir beim Speichern von Objekt in Zeichenfolge konvertieren und umgekehrt, wenn wir den Wert aus dem lokalen Speicher laden.

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

   - Unser `localStore` wird eine Funktion sein, die bei der Ausführung zunächst ihren Inhalt aus dem Webspeicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Webspeichers und einen Anfangswert angeben. Wir überprüfen dann, ob der Wert im Webspeicher vorhanden ist und, falls nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Webspeicher zu lesen und zu schreiben, sowie die Helferfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet), um die Werte zu konvertieren.
   - Anschließend konvertieren wir den Zeichenfolgeninhalt, den wir aus dem Webspeicher erhalten, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir den Inhalt des Stores aktualisieren, auch den Webspeicher mit dem in eine Zeichenkette konvertierten Wert.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation hinzufügten, um den Wert im Webspeicher zu speichern. Der Rest des Codes dreht sich hauptsächlich um Initialisierung und Konvertierung von Daten.

3. Nun werden wir unseren lokalen Store von `stores.js` verwenden, um unseren lokal gespeicherten To-dos-Store zu erstellen.

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

   Durch die Verwendung von `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store so, dass die Daten unter dem Schlüssel `mdn-svelte-todo` im Web-Speicher gespeichert werden. Wir setzen auch ein paar To-dos als Anfangswerte.

4. Lassen Sie uns jetzt die fest kodierten To-dos in `App.svelte` loswerden. Aktualisieren Sie seinen Inhalt wie folgt. Wir löschen im Grunde nur das `$todos`-Array und die `console.log()`-Anweisungen:

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
   > Dies ist die einzige Änderung, die wir machen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist vollständig transparent in Bezug darauf, welche Art von Store wir verwenden.

5. Versuchen Sie Ihre App erneut. Erstellen Sie ein paar To-dos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Wenn Sie zur URL zurückkehren, werden Ihre To-dos weiterhin vorhanden sein.
6. Sie können es auch in der DevTools-Konsole inspizieren. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Machen Sie einige Änderungen an Ihrer App, wie das Drücken der _Uncheck All_-Taste, und überprüfen Sie den Inhalt des Webspeichers noch einmal. Sie werden etwas wie dies erhalten:

   ![To-do-App mit Webkonsole neben ihr, die zeigt, dass wenn ein To-do in der App geändert wird, der entsprechende Eintrag im Webspeicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber extrem mächtige Möglichkeit, den komplexen App-Zustand von einem globalen Datenspeicher auf reaktive Weise zu handhaben. Und weil Svelte unseren Code kompiliert, kann es die [`$store` Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bieten, die es uns erlaubt, mit Stores auf die gleiche Weise wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere eigenen benutzerdefinierten Stores zu erstellen, um den inneren Betrieb des Stores selbst zu abstrahieren.

## Bonus-Track: Übergänge

Lassen Sie uns jetzt das Thema wechseln und etwas Spaßiges und Anderes machen: Eine Animation zu unseren Benachrichtigungen hinzufügen. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird ausgelöst, wenn ein Element als Ergebnis einer Zustandsänderung in das DOM eintritt oder es verlässt. Das `svelte/transition`-Modul exportiert sieben Funktionen: `fade`, `blur`, `fly`, `slide`, `scale`, `draw` und `crossfade`.

Geben wir unserer `Alert`-Komponente einen `fly`-Übergang. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Fügen Sie die folgende `import`-Anweisung unter den bestehenden hinzu:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um es zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag wie folgt:

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

   > [!NOTE]
   > Die doppelten geschweiften Klammern sind keine besondere Svelte-Syntax. Es ist einfach ein literales JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Versuchen Sie Ihre App erneut, und Sie werden sehen, dass die Benachrichtigungen jetzt ein bisschen ansprechender aussehen.

> [!NOTE]
> Da Svelte ein Compiler ist, kann Svelte die Größe unseres Bundles optimieren, indem Features, die nicht verwendet werden, ausgeschlossen werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js`-Datei etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte intelligent genug, um zu erkennen, dass die Fly-Funktion nicht verwendet wird, und die `bundle.js` Dateigröße wird auf nur 18 KB sinken.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen für den Umgang mit Animationen und Übergängen. Svelte unterstützt auch das Spezifizieren unterschiedlicher Übergänge, die angewendet werden können, wenn das Element mit den `in:fn`/`out:fn`-Direktiven zum DOM hinzugefügt oder davon entfernt wird, und es erlaubt Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es gibt auch mehrere Easing-Funktionen, um die Änderungsrate über die Zeit anzugeben. Werfen Sie einen Blick auf den [Ease-Visualizer](https://svelte.dev/examples/easing), um die verschiedenen verfügbaren Easing-Funktionen zu erkunden.

## Der bisherige Code

### Git

Um den Zustand des Codes am Ende dieses Artikels zu sehen, greifen Sie so auf Ihre Kopie unseres Repos zu:

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

In diesem Artikel haben wir zwei neue Features hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Webspeicher.

- Dies erlaubte es uns, einige fortgeschrittene Svelte-Techniken vorzustellen. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man komponentenübergreifendes Zustandsmanagement mit Stores implementiert. Wir sahen auch, wie man Stores automatisch abonniert, um sie nahtlos mit dem Svelte-Reaktivitätssystem zu integrieren.
- Dann sahen wir, wie man unseren eigenen Store von Grund auf neu implementiert, und auch, wie man Sveltes beschreibbaren Store erweitert, um Daten im Webspeicher zu speichern.
- Am Ende sahen wir, wie man die Svelte-`transition`-Direktive verwendet, um Animationen auf DOM-Elementen zu implementieren.

Im nächsten Artikel werden wir lernen, wie Sie unserer Svelte-Anwendung TypeScript-Unterstützung hinzufügen. Um alle Funktionen zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
