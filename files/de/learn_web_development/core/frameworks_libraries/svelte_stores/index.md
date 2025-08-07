---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Handhabung von Reaktivität, zur Arbeit mit DOM-Knoten und zum Offenlegen von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir Ihnen eine weitere Möglichkeit, Zustandsmanagement in Svelte zu handhaben: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenspeicher, die Werte enthalten. Komponenten können sich bei Stores anmelden und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sein und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
          >
          besitzen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Erlernen, wie man Svelte-Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Stores erstellen wir eine `Alert`-Komponente, die Benachrichtigungen auf dem Bildschirm zeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist kein Elternteil oder Kind einer anderen — daher passen die Nachrichten nicht in die Komponentenhierarchie.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die Todo-Informationen im [Web Storage](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere Todos bei Seitenaktualisierungen erhalten bleiben.

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Stand der App zu erreichen, führen Sie Folgendes aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit dem REPL mit uns zu programmieren, starten Sie unter:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem Zustand unserer App

Wir haben bereits gesehen, wie unsere Komponenten über Props, Zwei-Wege-Datenbindung und Ereignisse miteinander kommunizieren können. In all diesen Fällen befassten wir uns mit der Kommunikation zwischen übergeordneten und untergeordneten Komponenten.

Aber nicht jeder Anwendungszustand gehört in die Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss der Zustand Ihrer App von mehreren Komponenten abgerufen werden, die nicht hierarchisch verwandt sind, oder von einem regulären JavaScript-Modul.

Darüber hinaus, wenn Ihre App komplizierter wird und Ihre Komponenten-Hierarchie komplex wird, könnte es schwierig werden, dass Komponenten Daten zwischen ihnen weitergeben. In diesem Fall könnte der Wechsel zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, dann sind Sie mit der Funktionsweise eines solchen Stores vertraut. Svelte-Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Store-Wert ändert, und einer optionalen `set()`-Methode, die es Ihnen ermöglicht, neue Werte für den Store zu setzen. Diese minimale API wird als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bezeichnet.

Svelte bietet Funktionen zur Erstellung von [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [derived](https://svelte.dev/docs/svelte-store#derived) Stores im Modul `svelte/store`.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores erstellen, die den Store-Vertrag einhalten, erhalten Sie diese Reaktivitäts-Syntax-Zucker kostenlos.

## Erstellung der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Diese Art von Widgets könnte auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann ihr Benachrichtigungen senden. Immer wenn eine Benachrichtigung eintrifft, wird die `Alert`-Komponente verantwortlich sein, sie auf dem Bildschirm anzuzeigen.

### Einen Store erstellen

Lassen Sie uns beginnen, indem wir einen beschreibbaren Store erstellen. Jede Komponente wird in der Lage sein, in diesen Store zu schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei `stores.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihm den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie auf jede beliebige Weise organisieren können.

Im obigen Code importieren wir die Funktion `writable()` aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Willkommen bei der To-do-Liste-App!" zu erstellen. Dann `exportieren` wir den Store.

### Die eigentliche Komponente erstellen

Erstellen wir nun unsere `Alert`-Komponente und sehen, wie wir Werte aus dem Store lesen können.

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
     color: white;
     font-weight: 700;
     padding: 0.5rem 1.4rem;
     font-size: 1.5rem;
     z-index: 100;
     opacity: 95%;
   }
   div p {
     color: white;
   }
   div svg {
     height: 1.6rem;
     fill: currentColor;
     width: 1.4rem;
     margin-right: 0.5rem;
   }
   </style>
   ```

Gehen wir diesen Codeabschnitt im Detail durch.

- Am Anfang importieren wir den `alert`-Store.
- Als nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, die uns erlaubt, einen Rückruf auszuführen, nachdem die Komponente abmontiert wurde.
- Dann erstellen wir eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf oberster Ebene deklarierte Variablen aus dem Markup abrufen können und dass sich das DOM entsprechend aktualisiert, wenn sie geändert werden.
- Danach rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir einfach den empfangenen Wert der lokalen Variablen zu, was die Aktualisierung des DOM der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Aufräumfunktion zurück, die sich um das Freigeben des Abonnements kümmert. Wir abonnieren also, wenn die Komponente initialisiert wird und verwenden `onDestroy`, um das Abonnement zu beenden, wenn die Komponente abmontiert wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup, und wenn der Benutzer auf die Benachrichtigung klickt, bereinigen wir sie.
- Am Ende fügen wir ein paar CSS-Zeilen ein, um unsere `Alert`-Komponente zu stylen.

Diese Einrichtung ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird die Rückruffunktion ausgeführt. Dort weisen wir einer lokalen Variablen einen neuen Wert zu, und dank Svelte-Reaktivität werden all unser Markup und unsere reaktiven Abhängigkeiten entsprechend aktualisiert.

### Die Komponente verwenden

Jetzt verwenden wir unsere Komponente.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unter den bestehenden ein:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt, und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App mit der Aufschrift "Willkommen bei der To-do-Liste-App"](01-alert-message.png)

## Stores reaktiv machen mit der reaktiven `$store`-Syntax

Das funktioniert, aber Sie müssten diesen Code jedes Mal kopieren und einfügen, wenn Sie einen Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Ressourcen, um uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Abonnement. Einfach ausgedrückt, Sie fügen dem Store nur das `$`-Zeichen hinzu, und Svelte generiert den Code, um ihn automatisch reaktiv zu machen. Also kann unser vorheriger Codeblock mit diesem ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Wenden wir dies auf unsere `Alert`-Komponente an. Aktualisieren Sie die `<script>`- und Markup-Bereiche von `Alert.svelte` wie folgt:

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

Im Hintergrund hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird, und das Abonnement zu entfernen, wenn die Komponente abmontiert wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir `$alert` einen Wert zuweisen.

Das Endergebnis dieses hübschen Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können, wie Sie reaktive lokale Variablen verwenden.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler in die Verantwortung für eine bessere Entwicklerergonomie stellt, uns nicht nur das Tippen von Boilerplate erspart, sondern auch weniger fehleranfälligen Code erzeugt.

## In unseren Store schreiben

In unseren Store zu schreiben ist einfach eine Frage des Importierens und Ausführens von `$store = 'neuer Wert'`. Lassen Sie uns dies in unserer `Todos`-Komponente verwenden.

1. Fügen Sie die folgende `import`-Anweisung unter den bestehenden ein:

   ```js
   import { alert } from "../stores.js";
   ```

2. Aktualisieren Sie Ihre `addTodo()` Funktion wie folgt:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
     $alert = `Todo '${name}' has been added`;
   }
   ```

3. Aktualisieren Sie die `removeTodo()` Funktion wie folgt:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
     $alert = `Todo '${todo.name}' has been deleted`;
   }
   ```

4. Aktualisieren Sie die `updateTodo()` Funktion so:

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

6. Und schließlich, aktualisieren Sie die Blöcke `const checkAllTodos` und `const removeCompletedTodos` wie folgt:

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

7. Grundsätzlich haben wir den Store importiert und ihn bei jedem Ereignis aktualisiert, was dazu führt, dass bei jedem eine neue Benachrichtigung angezeigt wird. Schauen Sie sich Ihre App noch einmal an und versuchen Sie, einige Todos hinzuzufügen/löschen/aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` aufrufen. Unsere `Alert`-Komponente – wie jeder andere Abonnent des Alert-Stores – wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten berührt. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist ein bisschen nervig, jedes Mal klicken zu müssen, um die Benachrichtigung zu entfernen. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwinden würde.

Sehen wir uns an, wie man das macht. Wir spezifizieren eine Prop mit den Millisekunden, die gewartet werden müssen, bevor die Benachrichtigung gelöscht wird, und definieren ein Timeout, um die Benachrichtigung zu entfernen. Wir kümmern uns auch um das Bereinigen des Timeouts, wenn die `Alert`-Komponente abmontiert wird, um Speicherlecks zu vermeiden.

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

Hier erstellen wir zuerst die Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die dafür verantwortlich ist, ob die Alert sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, dass diese Funktion ausgeführt werden soll, wann immer sich der `$alert`-Store oder die `ms`-Prop ändert.

Wann immer sich der `$alert`-Store ändert, bereinigen wir mögliche ausstehende Timeouts. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und die `Alert` wird aus dem DOM entfernt. Wenn sie nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um die Alert nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()`-Lebenszyklusfunktion sicher, dass die `clearTimeout()`-Funktion aufgerufen wird.

Wir haben auch ein SVG-Icon über dem Alert-Absatz hinzugefügt, um es etwas ansprechender aussehen zu lassen. Probieren Sie es aus und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert gut, ist aber nicht sehr zugänglich für unterstützende Technologien. Das Problem sind Elemente, die dynamisch hinzugefügt und entfernt werden. Dies ist für Benutzer, die die Seite sehen können, optisch offensichtlich, jedoch nicht so offensichtlich für Benutzer unterstützender Technologien, wie z.B. Screenreader. Um diese Situationen zu handhaben, können wir [ARIA Live Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmgesteuert offenzulegen, sodass unterstützende Technologien sie erkennen und ankündigen können.

Wir können eine Region deklarieren, die dynamische Inhalte enthält, die von unterstützenden Technologien angekündigt werden sollen, mit dem Attribut `aria-live`, gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Screenreader Updates in diesen Regionen handhaben sollten. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für allgemeine Situationen haben Sie auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall genügt es, ein `role="alert"` zum `<div>`-Container hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Screenreadern zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, unter anderen Optionen.

Um mehr über die Erkennung und Behebung von Barrierefreiheitsproblemen zu erfahren, schauen Sie sich unser [Accessibility](/de/docs/Learn_web_development/Core/Accessibility) Modul an.

## Den Store-Vertrag verwenden, um unsere Todos zu speichern

Unsere kleine App ermöglicht es uns, unsere Todos ziemlich einfach zu verwalten, ist aber ziemlich nutzlos, wenn wir bei jedem Neuladen dieselbe Liste an fest kodierten Todos erhalten. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere Todos speichern können.

Zuerst brauchen wir eine Möglichkeit für unsere `Todos`-Komponente, die aktualisierten Todos an ihren Eltern zurückzugeben. Wir könnten ein aktualisiertes Ereignis mit der Liste der Todos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Öffnen wir `App.svelte` und versuchen es.

1. Fügen Sie zuerst die folgende Zeile unterhalb Ihres `todos`-Arrays hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie als nächstes Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > [!NOTE]
   > `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie einige Todos hinzuzufügen, und gehen Sie dann zu Ihrer Entwicklerwerkzeuge-Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren Todos vornehmen, im `todos`-Array in `App.svelte` dank der `bind`-Direktive widergespiegelt wird.

Jetzt müssen wir einen Weg finden, um diese Todos zu speichern. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere Todos in [Web Storage](/de/docs/Web/API/Web_Storage_API) oder einen Web-Service zu lesen und zu speichern.

Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Das würde uns erlauben, ihn genauso wie jeden anderen Store zu verwenden, und die Persistenzmechanismen zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit Web Storage synchronisiert, und später einen anderen entwickeln, der gegen einen Web-Service synchronisiert. Der Wechsel zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anpassen.

### Unsere Todos speichern

Beginnen wir also damit, einen regulären beschreibbaren Store zu verwenden, um unsere Todos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir zur Zugriff auf die Todos jetzt die reaktive `$todos` `$store`-Syntax verwenden müssen.

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

3. Probieren Sie es aus; alles sollte funktionieren. Als nächstes sehen wir, wie wir unsere eigenen benutzerdefinierten Stores implementieren können.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Seine Funktionen müssen so arbeiten:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die eine Abonnementfunktion als Argument akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die bei Aufruf das Abonnement beendet.
3. Ein Store kann optional eine `set()`-Methode enthalten, die ein neues Wert-Argument für den Store akzeptieren muss und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen wir zunächst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unterhalb des `todos`-Arrays hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie etwas in etwa wie dies in Ihrer Webkonsole:

![Webkonsole, die die Funktionen und Inhalte des Todos-Stores zeigt](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das die `subscribe()`, `set()` und `update()` Methoden enthält, und `$todos` ist unser Array an Todos.

Nur der Vollständigkeit halber, hier ist ein grundlegender funktionierender Store von Grund auf implementiert:

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

Hier erklären wir `subs`, was ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die bei Ausführung den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, der den neuen Wert als Parameter übergeben bekommt.

Normalerweise implementiert man Stores nicht von Grund auf; stattdessen würde man den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domainspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Counter-Store, der uns nur erlaubt, den Zähler um eins zu erhöhen oder seinen Wert zurückzusetzen:

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

Wenn unsere Todo-Liste-App zu komplex wird, könnten wir dem Todos-Store erlauben, jede Statusänderung zu bearbeiten. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, etc.) von unserer `Todos`-Komponente in den Store verschieben. Wenn man einen zentralen Ort hat, an dem alle Statusänderungen angewendet werden, könnten Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern und reaktiv anzuzeigen, was der Store preisgibt. Einen einzigen Ort zu haben, um Statusänderungen zu handhaben, erleichtert es, den Statusfluss zu verstehen und Probleme zu identifizieren.

Svelte wird Sie nicht zwingen, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es bietet Ihnen einfach die Werkzeuge, um zu wählen, wie es behandelt werden soll.

### Implementierung unseres benutzerdefinierten Todos-Stores

Unsere Todo-Liste-App ist nicht besonders komplex, wir werden also nicht alle unsere Änderungsmethoden an einen zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns darauf, unsere Todos zu speichern.

> [!NOTE]
> Wenn Sie diesem Leitfaden mit dem Svelte REPL folgen, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer Sandbox-Umgebung, die Ihnen den Zugriff auf Web Storage nicht erlaubt, und Sie werden einen "The operation is insecure"-Fehler erhalten. Um diesen Abschnitt zu folgen, müssen Sie das Repo klonen und zum Ordner `mdn-svelte-tutorial/06-stores` wechseln, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Content im Web Storage speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest beim Starten den Wert aus dem Web Storage, und initialisiert ihn, wenn er nicht vorhanden ist
- Aktualisiert bei jeder Änderung des Wertes sowohl den Store selbst als auch die Daten im lokalen Speicher

Da der Web Storage nur das Speichern von Zeichenfolgenwerten unterstützt, müssen wir beim Speichern von Objekt zu Zeichenfolge konvertieren und beim Laden des Wertes vom lokalen Speicher umgekehrt.

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

   - Unser `localStore` wird eine Funktion sein, die beim Ausführen zuerst ihren Inhalt aus dem Web Storage liest, und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Web Storage und einen Anfangswert angeben. Dann prüfen wir, ob der Wert im Web Storage existiert und erstellen ihn andernfalls.
   - Wir verwenden die Methodenum [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Web Storage zu lesen und zu schreiben, und die [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)- und `toObj()`-Hilfsfunktionen (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwenden), um die Werte zu konvertieren.
   - Dann konvertieren wir den Zeichenfolgeninhalt, den wir vom Web Storage erhalten, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir bei jeder Aktualisierung des Store-Inhalts auch den Web Storage, und zwar mit dem Wert, der in eine Zeichenfolge umgewandelt wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation zum Speichern des Wertes im Web Storage hinzugefügt haben. Der Rest des Codes besteht größtenteils in Initialisierungen und Umwandlungen.

3. Jetzt werden wir unseren lokalen Store von `stores.js` verwenden, um unseren lokal gespeicherten Todos-Store zu erstellen.

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

   Mit `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store so, dass die Daten im Web Storage unter dem Schlüssel `mdn-svelte-todo` gespeichert werden. Wir setzen auch ein paar Todos als Anfangswerte.

4. Jetzt bereinigen wir die fest kodierten Todos in `App.svelte`. Aktualisieren Sie den Inhalt wie folgt. Wir löschen im Wesentlichen einfach das `$todos`-Array und die `console.log()`-Anweisungen:

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

5. Probieren Sie Ihre App erneut aus. Erstellen Sie einige Todos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Aufrufen der URL werden Ihre Todos noch da sein.
6. Sie können sie auch in den DevTools-Konsole inspizieren. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, wie z.B. das Drücken der Schaltfläche _Uncheck All_, und überprüfen Sie den Inhalt des Web Storage erneut. Sie werden so etwas wie dies erhalten:

   ![Todo-App mit Webkonsole, die zeigt, dass wenn ein Todo in der App geändert wird, der entsprechende Eintrag im Web Storage geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber extrem leistungsfähige Möglichkeit, den komplexen App-Zustand auf globale Datenspeicher in einer reaktiven Weise zu handhaben. Und da Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Abonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores genauso einfach wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Arbeitsweisen des Stores selbst zu abstrahieren.

## Bonusstrecke: Übergänge

Wechseln wir jetzt das Thema und machen etwas Spaßiges und anderes: Fügen wir unseren Alerts eine Animation hinzu. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender machen können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird durch ein Element ausgelöst, das aufgrund einer Statusänderung in das DOM eintritt oder es verlässt.

Geben wir unserer `Alert`-Komponente einen `transition:fly`. Wir öffnen die `Alert.svelte`-Datei und importieren die Funktion `fly` aus dem Modul `svelte/transition`.

1. Fügen Sie die folgende `import`-Anweisung unter die bestehenden ein:

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
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es ist einfach ein literales JavaScript-Objekt, das als Parameter an den fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus, dann werden Sie sehen, dass die Benachrichtigungen jetzt etwas ansprechender aussehen.

> [!NOTE]
> Ein Compiler zu sein, erlaubt es Svelte, die Größe unseres Bundles zu optimieren, indem Funktionen ausgeschlossen werden, die nicht verwendet werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere Datei `public/build/bundle.js` etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte klug genug, um zu erkennen, dass die Fly-Funktion nicht verwendet wird, und die Größe der `bundle.js`-Datei wird auf nur 18 KB sinken.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen, um mit Animationen und Übergängen umzugehen. Svelte unterstützt auch die Spezifikation unterschiedlicher Übergänge, die angewendet werden, wenn das Element mit den Direktiven `in:fn`/`out:fn` in das DOM eingefügt oder daraus entfernt wird, und erlaubt es Ihnen, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript-Übergänge](https://learn.svelte.dev/tutorial/custom-js-transitions) zu definieren. Es gibt auch verschiedene Easing-Funktionen, um die Änderungsrate über die Zeit zu spezifizieren. Werfen Sie einen Blick auf den [Ease-Visualizer](https://svelte.dev/examples/easing), um die verschiedenen verfügbaren Ease-Funktionen zu erkunden.

## Der aktuelle Code

### Git

Um den Stand des Codes so zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/07-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente sowie das Speichern von `todos` im Web Storage.

- Dadurch konnten wir einige fortgeschrittene Svelte-Techniken demonstrieren. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man statusübergreifendes Zustandsmanagement mit Stores implementiert. Wir sahen auch, wie man automatisch Stores abonnieren kann, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann sahen wir, wie man einen Store von Grund auf neu erstellt, und auch, wie Sveltes beschreibbaren Store erweitert, um Daten im Web Storage zu speichern.
- Am Ende hatten wir einen Blick darauf, die Svelte `transition`-Direktive zu verwenden, um Animationen für DOM-Elemente zu implementieren.

Im nächsten Artikel werden wir lernen, wie wir TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügen. Um alle Funktionen zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
