---
title: Arbeiten mit Svelte Stores
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Behandlung von Reaktivität, Arbeit mit DOM-Knoten und zum Bereitstellen von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir eine weitere Möglichkeit zur Verwaltung des Status in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositorien, die Werte speichern. Komponenten können sich bei Stores anmelden und werden benachrichtigt, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandzeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie, wie man Svelte Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm anzeigt, die Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist kein Elternteil oder Kind einer anderen — daher passen die Nachrichten nicht in die Komponentenhierarchie.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die To-Do-Informationen im [web storage](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere To-Dos über Seitenaktualisierungen hinaus bestehen bleiben.

## Programmieren Sie mit uns

### Git

Clonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns mithilfe des REPL zu programmieren, starten Sie unter

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem App-Status

Wir haben bereits gesehen, wie unsere Komponenten mithilfe von Props, bidirektionalen Datenbindungen und Ereignissen miteinander kommunizieren können. In all diesen Fällen haben wir es mit der Kommunikation zwischen Eltern- und Kinderkomponenten zu tun gehabt.

Aber nicht jeder Anwendungsstatus gehört in die Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das Dunkelmodus-Thema ausgewählt ist oder nicht.

Manchmal muss Ihr App-Status von mehreren Komponenten, die nicht hierarchisch verwandt sind, oder von einem regulären JavaScript-Modul abgerufen werden.

Darüber hinaus kann es bei einer komplexen Anwendung und einer komplexen Komponentenhierarchie zu schwierig werden, dass Komponenten Daten untereinander weiterleiten. In diesem Fall könnte der Wechsel zu einem globalen Datenstore eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, wird Ihnen bekannt sein, wie eine solche Art von Store funktioniert. Svelte Stores bieten ähnliche Funktionen zur Statusverwaltung.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Wert des Stores ändert, und einer optionalen `set()`-Methode, die das Setzen neuer Werte für den Store ermöglicht. Diese minimale API ist bekannt als [store contract](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract).

Svelte bietet Funktionen zum Erstellen von [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [derived](https://svelte.dev/docs/svelte-store#derived) Stores im Modul `svelte/store`.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem es die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet. Wenn Sie Ihre eigenen Stores gemäß dem Store Contract erstellen, erhalten Sie diese reaktiven syntaktischen Helfer kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Solche Widgets können auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Jedes Mal, wenn eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir mit der Erstellung eines writable Stores. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei, `stores.js`, in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie so organisieren können, wie Sie möchten.

Im obigen Code importieren wir die Funktion `writable()` aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert "Willkommen bei der To-Do-List-App!" zu erstellen. Wir `exportieren` dann den Store.

### Erstellen der eigentlichen Komponente

Erstellen wir nun unsere `Alert`-Komponente und sehen, wie wir Werte aus dem Store lesen können.

1. Erstellen Sie eine weitere neue Datei namens `src/components/Alert.svelte`.
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

- Am Anfang importieren wir den `alert`-Store.
- Als nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, die es uns ermöglicht, einen Callback auszuführen, nachdem die Komponente unmounted wurde.
- Wir erstellen dann eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf Variablen der obersten Ebene aus dem Markup zugreifen können und dass der DOM entsprechend aktualisiert wird, wann immer sie geändert werden.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Callback-Funktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Callback-Funktion mit dem neuen Wert als Parameter aufgerufen. In der Callback-Funktion weisen wir einfach den empfangenen Wert der lokalen Variable zu, was die Aktualisierung des Komponenten-DOMs auslöst.
- Die Methode `subscribe()` gibt auch eine Cleanup-Funktion zurück, die sich um die Freigabe des Abonnements kümmert. Also abonnieren wir, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu kündigen, wenn die Komponente unmounted wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup, und wenn der Benutzer auf den Alert klickt, löschen wir ihn.
- Am Ende fügen wir ein paar CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Diese Einrichtung ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Callback ausgeführt. Dort weisen wir einer lokalen Variable einen neuen Wert zu, und dank der Svelte-Reaktivität werden all unser Markup und unsere reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwenden der Komponente

Verwenden wir nun unsere Komponente.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Import-Anweisung unter der vorhandenen hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem Aufruf von `Todos` auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie nun Ihre Test-App und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen können. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die "Willkommen bei der To-Do-List-App" sagt](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Dies funktioniert, aber Sie müssten diesen gesamten Code jedes Mal kopieren und einfügen, wenn Sie sich bei einem Store anmelden möchten:

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

Das ist zu viel Boilerplate-Code für Svelte! Als Compiler hat Svelte mehr Ressourcen, um uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Abonnement. Im einfachen Sinne müssen Sie nur das Store mit dem `$`-Zeichen voranstellen, und Svelte generiert den Code, um es automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Wenden wir dies auf unsere `Alert`-Komponente an. Aktualisieren Sie die `<script>`- und Markup-Abschnitte von `Alert.svelte` wie folgt:

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

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies genau wie zuvor funktioniert. Das ist viel besser!

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird, und das Abonnement zu kündigen, wenn die Komponente unmounted wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir einen Wert zu `$alert` zuweisen.

Das Endergebnis dieses raffinierten Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler dafür verantwortlich macht, die Ergonomie für Entwickler zu verbessern, nicht nur indem es uns das Tippen von Boilerplate erspart, sondern auch weniger fehleranfälligen Code generiert.

## In unseren Store schreiben

In unseren Store zu schreiben besteht einfach darin, ihn zu importieren und `$store = 'neuer Wert'` auszuführen. Lassen Sie uns dies in unserer `Todos`-Komponente verwenden.

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

4. Aktualisieren Sie die `updateTodo()`-Funktion mit folgendem Code:

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

5. Fügen Sie den folgenden reaktiven Block unterhalb des Blocks, der mit `let filter = 'all'` beginnt, hinzu:

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

7. Im Grunde haben wir den Store importiert und bei jedem Ereignis aktualisiert, wodurch jedes Mal eine neue Benachrichtigung angezeigt wird. Sehen Sie sich noch einmal Ihre App an und versuchen Sie, einige To-Dos hinzuzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des Alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten anfassen wird. In diesem Fall müssen Sie sich auf die Methoden `store.subscribe()` und `store.set()` verlassen.

## Verbesserung unserer Alert-Komponente

Es ist etwas lästig, auf den Alert klicken zu müssen, um ihn loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwindet.

Sehen wir, wie man das macht. Wir geben eine Prop mit den Millisekunden an, die gewartet werden soll, bevor die Benachrichtigung gelöscht wird, und definieren ein Timeout, um den Alert zu entfernen. Wir kümmern uns auch um die Bereinigung des Timeouts, wenn die `Alert`-Komponente unmounted wird, um Speicherlecks zu vermeiden.

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

2. Und aktualisieren Sie den Markup-Abschnitt in `Alert.svelte` wie folgt:

   ```svelte
   {#if visible}
   <div on:click={() => visible = false}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

Hier erstellen wir zuerst die Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die dafür sorgt, ob das Alert sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, diese Funktion auszuführen, wann immer sich der `$alert`-Store oder die `ms`-Prop ändert.

Wann immer sich der `$alert`-Store ändert, bereinigen wir alle ausstehenden Timeouts. Wenn `$alert` leer ist, setzen wir `visible` auf `false`, und das Alert wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die Funktion `setTimeout()`, um das Alert nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()`-Lebenszyklusfunktion sicher, dass wir die Funktion `clearTimeout()` aufrufen.

Wir haben auch ein SVG-Icon über dem Alert-Absatz hinzugefügt, um es etwas schöner aussehen zu lassen. Versuchen Sie es erneut, und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert gut, ist aber nicht sehr benutzerfreundlich für unterstützende Technologien. Das Problem sind Elemente, die dynamisch zur Seite hinzugefügt und entfernt werden. Obwohl sie für Benutzer, die die Seite sehen können, visuell offensichtlich sind, sind sie möglicherweise nicht so offensichtlich für Benutzer unterstützender Technologien, wie z.B. Screenreader. Um diese Situationen zu behandeln, können wir [ARIA Live Regions](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch offenzulegen, damit sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können einen Bereich deklarieren, der dynamische Inhalte enthält, die von unterstützenden Technologien angekündigt werden sollten, mit der Eigenschaft `aria-live`, gefolgt von der Höflichkeitsstufe, die verwendet wird, um die Priorität festzulegen, mit der Screenreader Updates zu diesen Regionen behandeln sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für allgemeine Situationen gibt es auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie z.B. `log`, `status` und `alert`.

In unserem Fall genügt es, ein `role="alert"` zum `<div>`-Container hinzuzufügen, wie folgt:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Es ist im Allgemeinen eine gute Idee, Ihre Anwendungen mit Screenreadern zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Es gibt verschiedene Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/vision/) auf macOS und iOS, neben anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, schauen Sie sich unseren Artikel [Umgang mit häufigen Barrierefreiheitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) an.

## Verwenden des Store Contracts, um unsere To-Dos zu speichern

Unsere kleine App lässt uns recht einfach unsere To-Dos verwalten, ist aber ziemlich nutzlos, wenn wir immer dieselbe Liste harter To-Dos erhalten, wenn wir sie neu laden. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-Dos speichern können.

Zuerst brauchen wir eine Möglichkeit, damit unsere `Todos`-Komponente die aktualisierten To-Dos an ihre übergeordnete Komponente zurückgibt. Wir könnten ein aktualisiertes Ereignis mit der Liste der To-Dos auslösen, aber es ist einfacher, einfach die Variable `todos` zu binden. Öffnen wir `App.svelte` und versuchen es.

1. Fügen Sie zuerst die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie dann Ihren Aufruf der `Todos`-Komponente wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige To-Dos hinzuzufügen, und gehen Sie dann zu Ihrer Webkonsole der Entwicklerwerkzeuge. Sie werden sehen, dass jede Änderung, die wir an unseren To-Dos vornehmen, dank der `bind`-Direktive im `todos`-Array definiert in `App.svelte` widergespiegelt wird.

Jetzt müssen wir noch einen Weg finden, um diese To-Dos zu speichern. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere To-Dos in [web storage](/de/docs/Web/API/Web_Storage_API) oder in einem Webdienst zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dies würde es uns ermöglichen, ihn wie jeden anderen Store zu verwenden und den Persistenzmechanismus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt im Web Storage synchronisiert, und später einen weiteren entwickeln, der gegen einen Webdienst synchronisiert. Der Wechsel zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anpassen.

### Unsere To-Dos speichern

Beginnen wir also damit, einen regulären writable Store zu verwenden, um unsere To-Dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir jetzt auf die To-Dos mit der reaktiven `$todos`-`$store`-Syntax zugreifen müssen.

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

3. Versuchen Sie es aus, alles sollte funktionieren. Als nächstes werden wir sehen, wie wir unsere eigenen benutzerdefinierten Stores definieren können.

### Implementieren eines Store Contracts: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne auf `svelte/store` zu verzichten, indem Sie den Store Contract implementieren. Seine Funktionen müssen wie folgt arbeiten:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abofunktion akzeptieren muss. Alle aktiven Abofunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die das Abonnement stoppt, wenn sie aufgerufen wird.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und die synchron alle aktiven Abofunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als writable Store bezeichnet.

Fügen Sie zunächst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie so etwas in Ihrer Webkonsole:

![Webkonsole, die die Funktionen und Inhalte des todos-Stores zeigt](02-svelte-store-in-action.png)

Wie Sie sehen, ist unser Store nur ein Objekt, das die Methoden `subscribe()`, `set()` und `update()` enthält, und `$todos` ist unser Array von To-Dos.

Nur zum Referenzieren, hier ist ein grundlegender funktionierender Store, der von Grund auf neu implementiert wurde:

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

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, indem wir den neuen Wert als Parameter übergeben.

Normalerweise implementieren Sie Stores nicht von Grund auf neu; stattdessen würden Sie den writable Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Counter-Store, der uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-Do-Listen-App zu komplex wird, könnten wir den To-Dos-Store erlauben, jede Statusänderung zu handhaben. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, etc.), von unserer `Todos`-Komponente zum Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Statusänderungen angewendet werden, könnten die Komponenten einfach diese Methoden aufrufen, um den App-Status zu ändern und die Informationen darzustellen, die vom Store bereitgestellt werden. Einen einzigartigen Ort zu haben, um Statusänderungen zu handhaben, macht es einfacher, den Statusfluss zu verstehen und Probleme zu erkennen.

Svelte wird Sie nicht dazu zwingen, Ihre Statusverwaltung auf eine bestimmte Weise zu organisieren; es bietet nur die Werkzeuge, damit Sie entscheiden können, wie Sie damit umgehen.

### Implementieren unseres benutzerdefinierten To-Dos-Stores

Unsere To-Do-Listen-App ist nicht besonders komplex, daher werden wir nicht alle unsere Änderungsmethoden an einen zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere To-Dos zu speichern.

> [!NOTE]
> Wenn Sie dieser Anleitung, die im Svelte REPL arbeitet, folgen, werden Sie diesen Schritt nicht ausführen können. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer sandboxed Umgebung, die Ihnen den Zugriff auf Web Storage nicht erlaubt, und Sie werden einen "The operation is insecure"-Fehler bekommen. Um diesen Abschnitt zu absolvieren, müssen Sie das Repo klonen und in den Ordner `mdn-svelte-tutorial/06-stores` gehen, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Web Storage speichert, benötigen wir einen writable Store, der Folgendes tut:

- Liest zunächst den Wert aus dem Web Storage und wenn er nicht vorhanden ist, initialisiert er ihn mit einem Standardwert
- Wann immer der Wert geändert wird, aktualisiert er den Store selbst und auch die Daten im Local Storage

Darüber hinaus, da der Web Storage nur das Speichern von Zeichenfolgen unterstützt, müssen wir beim Speichern von Objekt zu Zeichenfolge und umgekehrt beim Laden des Werts aus dem Local Storage konvertieren.

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

   - Unser `localStore` wird eine Funktion sein, die bei der Ausführung zunächst ihren Inhalt aus dem Web Storage liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir ein neues `localStore` erstellen, müssen wir den Schlüssel des Web Storage und einen Startwert angeben. Dann überprüfen wir, ob der Wert im Web Storage existiert und falls nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Web Storage zu lesen und zu schreiben, sowie die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()`, die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet, um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den Zeichenfolgeninhalt, den wir aus dem Web Storage erhalten, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir den Inhalt des Stores aktualisieren, auch den Web Storage, wobei der Wert in eine Zeichenfolge konvertiert wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten und die Operation zum Speichern des Werts im Web Storage hinzugefügt haben. Der Rest des Codes ist hauptsächlich Initialisierungs- und Konvertierungsaufgaben.

3. Jetzt verwenden wir unseren lokalen Speicher aus `stores.js`, um unseren lokal gespeicherten To-Dos-Store zu erstellen.

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

   Mit `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store, um die Daten im Web Storage unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir setzen auch ein paar To-Dos als Anfangswerte.

4. Jetzt lassen Sie uns die fest codierten To-Dos in `App.svelte` loswerden. Aktualisieren Sie seinen Inhalt wie folgt. Wir löschen im Grunde einfach das `$todos`-Array und die `console.log()`-Anweisungen:

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
   > Das ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu nutzen. `App.svelte` ist in Bezug auf die Art des verwendeten Stores vollständig transparent.

5. Gehen Sie voran und testen Sie Ihre App erneut. Erstellen Sie ein paar To-Dos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Nach dem erneuten Aufrufen der URL werden Ihre To-Dos immer noch da sein.
6. Sie können es auch in den DevTools in der Webkonsole überprüfen. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, wie z.B. die Drücken der Schaltfläche "Alle deaktivieren", und überprüfen Sie den Inhalt des Web Storage noch einmal. Sie werden etwas Ähnliches wie das sehen:

   ![To-Do-App mit Ansicht der Webkonsole daneben, die zeigt, dass, wenn ein To-Do in der App geändert wird, der entsprechende Eintrag im Web Storage ebenfalls geändert wird](03-persisting-todos-to-local-storage.png)

Svelte Stores bieten eine sehr einfache und leichte, aber äußerst leistungsstarke Möglichkeit, komplexe Anwendungszustände aus einem globalen Datenstore auf reaktive Weise zu handhaben. Und da Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Abonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die uns ermöglicht, mit Stores genauso zu arbeiten wie mit lokalen Variablen. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Funktionsweisen des Stores selbst abzuschirmen.

## Bonustrack: Übergänge

Ändern wir nun das Thema und tun etwas Spaßiges und anderes: Fügen wir eine Animation zu unseren Alerts hinzu. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird ausgelöst, wenn ein Element in den DOM eintritt oder ihn verlässt, als Ergebnis einer Statusänderung. Das `svelte/transition`-Modul exportiert sieben Funktionen: `fade`, `blur`, `fly`, `slide`, `scale`, `draw` und `crossfade`.

Geben wir unserer `Alert`-Komponente einen `fly`-Übergang. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Setzen Sie die folgende `import`-Anweisung unter die vorhandenen:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um sie zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag wie folgt:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Übergänge können auch Parameter empfangen, so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es handelt sich einfach um ein literales JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Versuchen Sie Ihre App erneut und Sie werden sehen, dass die Benachrichtigungen jetzt etwas ansprechender aussehen.

> [!NOTE]
> Als Compiler kann Svelte die Größe unseres Bundles dadurch optimieren, dass es nicht verwendete Funktionen ausschließt. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere Datei `public/build/bundle.js` etwas weniger als 22 KB wiegen. Wenn wir die Direktive `transitions:fly` entfernen, erkennt Svelte intelligent, dass die Fly-Funktion nicht verwendet wird, und die `bundle.js`-Dateigröße wird auf nur 18 KB sinken.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen, um mit Animationen und Übergängen umzugehen. Svelte unterstützt auch die Angabe verschiedener Übergänge, die angewendet werden sollen, wenn das Element zum DOM hinzugefügt oder aus ihm entfernt wird, mithilfe der Direktiven `in:fn`/`out:fn`, und es ermöglicht Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [Javascript-Übergänge](https://learn.svelte.dev/tutorial/custom-js-transitions) zu definieren. Es verfügt auch über mehrere Easing-Funktionen, um die Änderungsrate im Laufe der Zeit zu spezifizieren. Schauen Sie sich den [Easing-Visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbaren Easing-Funktionen zu erkunden.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

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

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Web Storage.

- Dies erlaubte es uns, einige fortgeschrittene Svelte-Techniken zu präsentieren. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man eine komponentenübergreifende Statusverwaltung mit Stores implementiert. Wir sahen auch, wie man automatisch Stores abonnieren kann, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann sahen wir, wie man unseren eigenen Store von Grund auf implementiert, und auch, wie man den Svelte writable Store erweitern kann, um Daten im Web Storage zu speichern.
- Am Ende sahen wir, wie man die Svelte-`transition`-Direktive verwendet, um Animationen auf DOM-Elementen zu implementieren.

Im nächsten Artikel werden wir lernen, wie man TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügt. Um alle Funktionen nutzen zu können, werden wir auch unsere gesamte Anwendung zu TypeScript portieren.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
