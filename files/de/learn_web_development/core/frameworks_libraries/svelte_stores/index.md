---
title: Arbeiten mit Svelte Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Handhabung von Reaktivität, Arbeit mit DOM-Knoten und Exposition von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir eine andere Möglichkeit, Zustandsverwaltung in Svelte zu handhaben: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte speichern. Komponenten können sich bei Stores registrieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Svelte Stores benutzt</td>
    </tr>
  </tbody>
</table>

Mit Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm zeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist weder Eltern- noch Kindkomponente einer anderen — sodass die Nachrichten nicht in die Komponenten-Hierarchie passen.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln, um die Aufgabeninformationen im [Webspeicher](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere Aufgaben über Seitenaktualisierungen hinweg erhalten bleiben.

## Gemeinsam mit uns programmieren

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Zustand der App zu gelangen, führen Sie

```bash
cd mdn-svelte-tutorial/06-stores
```

aus. Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit dem REPL mit uns zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem Zustand unserer App

Wir haben bereits gesehen, wie unsere Komponenten mit einander über Props, bidirektionale Datenbindung und Events kommunizieren können. In all diesen Fällen haben wir es mit der Kommunikation zwischen Eltern- und Kindkomponenten zu tun gehabt.

Aber nicht jeder Anwendungszustand gehört in die Komponenten-Hierarchie Ihrer Anwendung. Zum Beispiel Informationen über den eingeloggten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss Ihr Anwendungszustand von mehreren Komponenten, die hierarchisch nicht verwandt sind, oder von einem regulären JavaScript-Modul aus zugänglich sein.

Darüber hinaus kann es bei einer komplizierten Anwendung und komplexen Komponenten-Hierarchie schwierig werden, dass Komponenten Daten untereinander weitergeben. In diesem Fall könnte der Wechsel zu einem globalen Datenstore eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, sind Sie mit der Funktionsweise dieser Art von Store vertraut. Svelte Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, das es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Store-Wert ändert, und einer optionalen `set()`-Methode, mit der Sie neue Werte für den Store festlegen können. Dieses minimale API ist bekannt als der [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract).

Svelte bietet Funktionen zur Erstellung von [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [derived](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul.

Svelte bietet auch eine sehr intuitive Möglichkeit zur Integration von Stores in sein Reaktivitäts-System mit der [reaktiven `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values). Wenn Sie Ihre eigenen Stores erstellen, die den Store-Vertrag ehren, erhalten Sie diese Reaktivitäts-Syntax kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, werden wir eine `Alert`-Komponente erstellen. Diese Art von Widgets könnten auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann ihr Benachrichtigungen senden. Wann immer eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, diese auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir mit der Erstellung eines beschreibbaren Stores. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird sich bei diesem anmelden und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei `stores.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie auf beliebige Weise organisieren können.

Im obigen Code importieren wir die `writable()`-Funktion aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Willkommen bei der Aufgabenlisten-App!" zu erstellen. Dann `exportieren` wir den Store.

### Erstellen der eigentlichen Komponente

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

Gehen wir dieses Stück Code im Detail durch.

- Zu Beginn importieren wir den `alert` Store.
- Als nächstes importieren wir die `onDestroy()`-Lifecycle-Funktion, die es uns ermöglicht, einen Rückruf auszuführen, nachdem die Komponente demontiert wurde.
- Dann erstellen wir eine lokale Variable namens `alertContent`. Beachten Sie, dass wir auf Variablen auf oberster Ebene aus dem Markup zugreifen können, und wann immer sie geändert werden, aktualisiert sich das DOM entsprechend.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir den erhaltenen Wert einfach der lokalen Variable zu, was die Aktualisierung des DOMs der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die sich um die Freigabe des Abonnements kümmert. Wir abonnieren also, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu kündigen, wenn die Komponente abgebaut wird.
- Schließlich verwenden wir die `alertContent`-Variable in unserem Markup, und wenn der Benutzer auf den Alarm klickt, löschen wir ihn.
- Am Ende fügen wir ein paar CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Diese Einrichtung ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Rückruf ausgeführt. Dort weisen wir einer lokalen Variablen einen neuen Wert zu, und dank Svelte-Reaktivität werden unser Markup und unsere reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwendung der Komponente

Verwenden wir nun unsere Komponente.

1. In `App.svelte` werden wir die Komponente importieren. Fügen Sie die folgende Importanweisung unter der vorhandenen hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt, und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die willkommen in der Aufgabenlisten-App sagt](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Das funktioniert, aber Sie müssen diesen gesamten Code jedes Mal kopieren und einfügen, wenn Sie sich bei einem Store registrieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Möglichkeiten, uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription. Einfach ausgedrückt, müssen Sie den Store nur mit dem `$`-Zeichen voranstellen, und Svelte generiert automatisch den Code, um ihn reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die Methoden `subscribe()` und `set()` implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Wenden wir das auf unsere `Alert`-Komponente an. Aktualisieren Sie die `<script>`- und Markup-Abschnitte von `Alert.svelte` wie folgt:

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

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies genauso wie zuvor funktioniert. Das ist viel besser!

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird, und das Abonnement zu kündigen, wenn die Komponente abgebaut wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir `$alert` einen Wert zuweisen.

Das Endergebnis dieses geschickten Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler für eine bessere Ergonomie der Entwickler verantwortlich macht, indem wir nicht nur viel Boilerplate-Tippen sparen, sondern auch weniger fehleranfälligen Code erzeugen.

## In unseren Store schreiben

In unseren Store zu schreiben ist einfach eine Frage des Imports und der Ausführung von `$store = 'neuer Wert'`. Verwenden wir es in unserer `Todos`-Komponente.

1. Fügen Sie die folgende `import`-Anweisung unter den vorhandenen hinzu:

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

4. Aktualisieren Sie die `updateTodo()`-Funktion auf Folgendes:

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

6. Und schließlich für jetzt, aktualisieren Sie die Blöcke `const checkAllTodos` und `const removeCompletedTodos` wie folgt:

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

7. Jetzt haben wir im Grunde den Store importiert und bei jedem Event aktualisiert, was jedes Mal einen neuen Alarm auslöst. Sehen Sie sich Ihre App nochmal an und versuchen Sie, ein paar Aufgaben hinzuzufügen/löschen/aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des Alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten berührt. In diesem Fall müssen Sie sich auf die Methoden `store.subscribe()` und `store.set()` verlassen.

## Verbesserung unserer Alert-Komponente

Es ist etwas lästig, immer auf den Alarm klicken zu müssen, um ihn loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwinden würde.

Sehen wir, wie wir das machen können. Wir geben eine Eigenschaft mit der Anzahl der Millisekunden an, die abgewartet werden sollen, bevor die Benachrichtigung gelöscht wird, und wir definieren eine Timeout, um den Alarm zu entfernen. Wir kümmern uns auch darum, den Timeout zu löschen, wenn die `Alert`-Komponente abgebaut wird, um Speicherlecks zu vermeiden.

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

Hier erstellen wir zunächst die Eigenschaft `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die dafür zuständig ist, zu kontrollieren, ob die Benachrichtigung sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, dass diese Funktion immer dann ausgeführt wird, wenn sich der `$alert`-Store oder die `ms`-Eigenschaft ändert.

Wann immer sich der `$alert`-Store ändert, werden wir etwaige Pending-Timeouts bereinigen. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und die Benachrichtigung wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um den Alarm nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()`-Lebenszyklusfunktion sicher, dass die `clearTimeout()`-Funktion aufgerufen wird.

Wir haben auch ein SVG-Icon über dem Alarm-Absatz hinzugefügt, um ihn etwas schöner aussehen zu lassen. Probieren Sie es nochmals aus, und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert einwandfrei, ist aber nicht sehr freundlich zu assistiven Technologien. Das Problem sind Elemente, die dynamisch hinzugefügt und von der Seite entfernt werden. Während dies für sehende Benutzer visuell offensichtlich ist, mag dies für Benutzer assistiver Technologien, wie Bildschirmleser, nicht so offensichtlich sein. Um diese Situationen zu bewältigen, können wir [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmgesteuert freizulegen, sodass sie von assistiven Technologien erkannt und angesagt werden können.

Wir können einen Bereich deklarieren, der dynamische Inhalte enthält, die von assistiven Technologien angesagt werden sollen, indem wir die `aria-live`-Eigenschaft gefolgt von der Höflichkeitsstufe verwenden, um die Priorität festzulegen, mit der Bildschirmlesegeräte Updates in diesen Bereichen behandeln sollten. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für typische Situationen stehen Ihnen auch mehrere vordefinierte spezialisierte `role`-Werte zur Verfügung, wie `log`, `status` und `alert`.

In unserem Fall genügt es, dem `<div>`-Container ein `role="alert"` hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesern zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Es gibt mehrere Optionen wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, unter anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, sehen Sie sich unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul an.

## Verwenden des Store-Vertrags, um unsere Aufgaben zu speichern

Unsere kleine App erlaubt es uns, unsere Aufgaben recht einfach zu verwalten, ist aber ziemlich nutzlos, wenn wir immer dieselbe Liste von hartkodierten Aufgaben erhalten, wenn wir sie neu laden. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere Aufgaben speichern können.

Zuerst brauchen wir eine Möglichkeit für unsere `Todos`-Komponente, die aktualisierten Aufgaben an ihr Elternteil zurückzugeben. Wir könnten ein aktualisiertes Event mit der Liste der Aufgaben auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Öffnen wir `App.svelte` und versuchen es.

1. Fügen Sie zuerst die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie dann Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige Aufgaben hinzuzufügen, und gehen Sie dann zu Ihrer Entwicklertools-Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren Aufgaben vornehmen, im `todos`-Array definiert in `App.svelte` dank der `bind`-Direktive widergespiegelt wird.

Nun müssen wir einen Weg finden, um diese Aufgaben zu speichern. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere Aufgaben im [Webspeicher](/de/docs/Web/API/Web_Storage_API) oder bei einem Webdienst zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dies würde uns ermöglichen, es genau wie jeden anderen Store zu verwenden und den Speichermechanismus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Webspeicher synchronisiert, und später einen anderen entwickeln, der gegen einen Webdienst synchronisiert. Der Wechsel zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anpassen.

### Speichern unserer Aufgaben

Fangen wir also damit an, einen regulären beschreibbaren Store zu verwenden, um unsere Aufgaben zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem vorhandenen hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Nun müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir jetzt auf die Aufgaben mit der reaktiven `$todos`-Syntax zugreifen müssen.

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

3. Probieren Sie es aus; alles sollte funktionieren. Als nächstes sehen wir, wie man unsere eigenen benutzerdefinierten Stores implementiert.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Seine Features sollten wie folgt funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die, wenn sie aufgerufen wird, ihr Abonnement beenden muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und synchron alle aktiven Abonnementfunktionen des Stores aufrufen sollte. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen wir zuerst die folgenden `console.log()`-Anweisungen unserer `App.svelte`-Komponente hinzu, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App nun ausführen, sehen Sie etwas wie dies in Ihrer Webkonsole:

![Webkonsole, die die Funktionen und Inhalte des todos-Stores zeigt](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store nur ein Objekt, das die Methoden `subscribe()`, `set()` und `update()` enthält, und `$todos` ist unser Array von Aufgaben.

Nur zur Referenz, hier ist ein einfacher funktionierender Store, der von Grund auf neu implementiert wurde:

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

Hier deklarieren wir `subs`, ein Array von Abonnenten. In der `subscribe()`-Methode fügen wir den Handler dem `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, wobei der neue Wert als Parameter übergeben wird.

Normalerweise implementiert man Stores nicht von Grund auf neu; stattdessen würde man den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zählerstore, der es uns nur erlaubt, den Zähler um eins zu erhöhen oder seinen Wert zurückzusetzen:

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

Wenn unsere Aufgabenlisten-App zu komplex wird, könnten wir unseren Aufgabenstore jeden Zustandsmodifikation behandeln lassen. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, etc.) von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsmodifikationen angewendet werden, könnten Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern und reaktiv die vom Store bereitgestellten Informationen anzuzeigen. Einen einzigartigen Ort zu haben, an dem Zustandsmodifikationen behandelt werden, erleichtert es, den Zustandsfluss nachzuvollziehen und Probleme zu erkennen.

Svelte zwingt Sie nicht, Ihre Zustandsverwaltung auf eine bestimmte Weise zu organisieren; es bietet Ihnen einfach die Werkzeuge, um zu wählen, wie Sie sie handhaben.

### Implementierung unseres benutzerdefinierten Aufgabenstores

Unsere Aufgabenlisten-App ist nicht besonders komplex, daher werden wir nicht alle unsere Modifikationsmethoden an einem zentralen Ort zusammenführen. Wir lassen sie einfach, wie sie sind, und konzentrieren uns stattdessen auf das Speichern unserer Aufgaben.

> [!NOTE]
> Wenn Sie diese Anleitung im Svelte REPL verfolgen, werden Sie diesen Schritt nicht abschließen können. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer sandboxed Umgebung, die Ihnen nicht erlaubt, auf den Webspeicher zuzugreifen, und Sie erhalten einen "Die Operation ist unsicher"-Fehler. Um in diesem Abschnitt fortzufahren, müssen Sie das Repo klonen und in den `mdn-svelte-tutorial/06-stores`-Ordner gehen, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Webspeicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest zunächst den Wert aus dem Webspeicher und initialisiert ihn mit einem Standardwert, wenn er nicht vorhanden ist.
- Aktualisiert bei jeder Wertänderung den Store selbst und auch die Daten im lokalen Speicher.

Außerdem, da der Webspeicher nur das Speichern von Zeichenfolgenwerten unterstützt, müssen wir beim Speichern die Umwandlung von Objekt in Zeichenfolge durchführen und umgekehrt bei der Laden des Werts aus dem lokalen Speicher.

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

   - Unser `localStore` wird eine Funktion sein, die beim Ausführen zunächst ihren Inhalt aus dem Webspeicher liest und ein Objekt mit den drei Methoden `subscribe()`, `set()` und `update()` zurückgibt.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Webspeichers und einen Anfangswert angeben. Wir prüfen dann, ob der Wert im Webspeicher vorhanden ist, und erzeugen ihn, falls nicht.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen aus dem Webspeicher zu lesen und zu schreiben, und die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (das [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet), um die Werte zu konvertieren.
   - Wir konvertieren den Zeichenfolgeninhalt, den wir aus dem Webspeicher erhalten, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir den Inhalt des Stores aktualisieren, auch den Webspeicher mit dem in eine Zeichenfolge konvertierten Wert.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation zum Speichern des Werts im Webspeicher hinzufügten. Der Rest des Codes besteht größtenteils aus Initialisieren und Konvertieren.

3. Jetzt werden wir unseren lokalen Store aus `stores.js` verwenden, um unsere lokal gespeicherten Aufgaben zu erstellen.

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

   Indem wir `localStore('mdn-svelte-todo', initialTodos)` verwenden, konfigurieren wir den Store, um die Daten im Webspeicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir setzen auch ein paar Aufgaben als Anfangswerte.

4. Nun werden wir die hartkodierten Aufgaben in `App.svelte` los. Aktualisieren Sie den Inhalt wie folgt. Im Wesentlichen löschen wir einfach das `$todos`-Array und die `console.log()`-Anweisungen:

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
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist vollkommen transparent in Bezug darauf, welche Art von Store wir verwenden.

5. Probieren Sie Ihre App nochmal aus. Erstellen Sie ein paar Aufgaben und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Wenn Sie die URL erneut aufrufen, sind Ihre Aufgaben weiterhin vorhanden.
6. Sie können es auch in den DevTools überprüfen. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie ein paar Änderungen an Ihrer App vor, z.B. durch Drücken des _Uncheck All_-Knopfes, und überprüfen Sie den Inhalt des Webspeichers erneut. Sie erhalten etwas wie dies:

   ![Aufgabenapp mit Webkonsole-Ansicht daneben, die zeigt, dass wenn eine Aufgabe in der App geändert wird, der entsprechende Eintrag im Webspeicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber extrem leistungsstarke Möglichkeit, den komplexen Zustand einer App von einem globalen Datenstore aus auf reaktive Weise zu handhaben. Und da Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores auf die gleiche Weise wie mit lokalen Variablen zu arbeiten. Da Stores ein minimales API haben, ist es sehr einfach, unsere eigenen benutzerdefinierten Stores zu erstellen, um die inneren Abläufe des Stores selbst zu abstrahieren.

## Bonusspur: Übergänge

Lassen Sie uns nun das Thema wechseln und etwas Lustiges und Anderes machen: eine Animation zu unseren Alerts hinzufügen. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird ausgelöst, wenn ein Element aufgrund einer Zustandsänderung in das DOM eingefügt oder aus ihm entfernt wird.

Geben wir unserer `Alert`-Komponente einen Fly-`transition`. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Setzen Sie die folgende `import`-Anweisung unter die bestehenden:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um sie zu verwenden, aktualisieren Sie Ihr Eröffnung-`<div>`-Tag so:

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
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es handelt sich lediglich um ein JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App nochmals aus, und Sie werden sehen, dass die Benachrichtigungen jetzt etwas ansprechender aussehen.

> [!NOTE]
> Da Svelte ein Compiler ist, kann es die Größe unseres Bundles optimieren, indem nicht verwendete Funktionen ausgeschlossen werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js`-Datei etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte intelligent genug, um zu erkennen, dass die Fly-Funktion nicht verwendet wird, und die `bundle.js`-Dateigröße wird auf nur 18 KB sinken.

Das ist gerade der Anfang. Svelte hat viele Optionen, um mit Animationen und Übergängen umzugehen. Svelte unterstützt auch die Angabe verschiedener Übergänge, die beim Hinzufügen oder Entfernen eines Elements aus dem DOM mit den `in:fn`/`out:fn`-Direktiven angewendet werden sollen, und es erlaubt Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions)- und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions)-Übergänge zu definieren. Es hat auch mehrere Easing-Funktionen, um die Änderungsrate im Laufe der Zeit zu spezifizieren. Schauen Sie sich den [Ease Visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbaren Easing-Funktionen zu erkunden.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/07-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Webspeicher.

- Dies erlaubte es uns, einige fortgeschrittene Svelte-Techniken zu zeigen. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man die zustandsübergreifende Verwaltung von Komponenten mit Stores umsetzt. Wir haben auch gesehen, wie man automatisch Abonnements von Stores erhält, um sie nahtlos in das Svelte-Reaktivitäts-System zu integrieren.
- Dann haben wir gesehen, wie man unseren eigenen Store von Grund auf neu implementiert und auch, wie man den beschreibbaren Svelte-Store erweitert, um Daten im Webspeicher zu speichern.
- Am Ende haben wir uns angesehen, wie man die Svelte-`transition`-Direktive verwendet, um Animationen auf DOM-Elementen zu implementieren.

Im nächsten Artikel werden wir lernen, wie wir unserer Svelte-Anwendung TypeScript-Unterstützung hinzufügen. Um alle seine Funktionen nutzen zu können, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
