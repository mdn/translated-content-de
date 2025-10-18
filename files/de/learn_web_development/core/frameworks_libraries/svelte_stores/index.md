---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Behandlung der Reaktivität, des Arbeitens mit DOM-Knoten und zum Bereitstellen von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir eine weitere Möglichkeit zur Zustandsverwaltung in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenspeicher, die Werte halten. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestanforderung ist die Vertrautheit mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Svelte Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Stores erstellen wir eine `Alert`-Komponente, die Benachrichtigungen auf dem Bildschirm anzeigt, welche Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist weder Eltern- noch Kindkomponente einer anderen — daher passen die Nachrichten nicht in die Komponentenhierarchie.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die Todo-Informationen im [Webspeicher](/de/docs/Web/API/Web_Storage_API) zu speichern, damit unsere To-Dos auch nach einem Seiten-Reload erhalten bleiben.

## Coden Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls noch nicht geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen App-Zustand zu gelangen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns unter Verwendung des REPL zu coden, beginnen Sie bei

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem Zustand unserer App

Wir haben bereits gesehen, wie unsere Komponenten mithilfe von Props, bidirektionaler Datenbindung und Ereignissen miteinander kommunizieren können. In all diesen Fällen haben wir uns mit Kommunikation zwischen Eltern- und Kindkomponenten beschäftigt.

Aber nicht jeder Anwendungszustand gehört in die Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den eingeloggten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal müssen mehrere, nicht hierarchisch verwandte Komponenten oder ein reguläres JavaScript-Modul auf den Zustand Ihrer App zugreifen.

Außerdem, wenn Ihre App kompliziert wird und Ihre Komponentenhierarchie komplex wird, könnte es für Komponenten zu schwierig werden, Daten zwischen sich zu übermitteln. In diesem Fall wäre der Umstieg auf einen globalen Datenspeicher eine gute Option. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, dann sind Sie mit dieser Art von Store vertraut. Svelte-Stores bieten ähnliche Funktionen zur Zustandsverwaltung.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wenn sich der Wert des Stores ändert, und einer optionalen `set()`-Methode, die es Ihnen ermöglicht, neue Werte für den Store festzulegen. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte bietet Funktionen zum Erstellen von [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [derived](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem es die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet. Wenn Sie Ihre eigenen Stores erstellen, die den Store-Vertrag einhalten, erhalten Sie dieses reaktive syntaktische Zuckerwerk kostenlos.

## Die Alert-Komponente erstellen

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Diese Art von Widgets könnte auch als Popup-Benachrichtigungen, Toasts oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Wann immer eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Einen Store erstellen

Lassen Sie uns mit dem Erstellen eines writable Store beginnen. Jede Komponente kann in diesen Store schreiben und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store verändert wird.

1. Erstellen Sie eine neue Datei, `stores.js`, in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die `writable()`-Funktion aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Welcome to the to-do list app!" zu erstellen. Dann `exportieren` wir den Store.

### Die tatsächliche Komponente erstellen

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
     color: white;
     font-weight: bold;
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

Lassen Sie uns diesen Codeabschnitt im Detail durchgehen.

- Am Anfang importieren wir den `alert` Store.
- Als nächstes importieren wir die `onDestroy()` Lebenszyklusfunktion, die es uns ermöglicht, einen Rückruf auszuführen, nachdem die Komponente entfernt wurde.
- Wir erstellen dann eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf Top-Level-Variablen aus dem Markup zugreifen können und wann immer sie geändert werden, wird das DOM entsprechend aktualisiert.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir den empfangenen Wert einfach der lokalen Variable zu, was das Update des DOMs der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Aufräumfunktion zurück, welche die Freigabe des Abonnements übernimmt. Also abonnieren wir, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu kündigen, wenn die Komponente entfernt wird.
- Schließlich verwenden wir die `alertContent`-Variable in unserem Markup und wenn der Benutzer auf den Alert klickt, bereinigen wir ihn.
- Am Ende fügen wir einige CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu gestalten.

Diese Einrichtung ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird die Rückruf-Funktion ausgeführt. Dort weisen wir einer lokalen Variablen einen neuen Wert zu und dank Svelte-Reaktivität wird unser gesamtes Markup und unsere reaktiven Abhängigkeiten entsprechend aktualisiert.

### Die Komponente verwenden

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Import-Anweisung unter der vorhandenen ein:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Dann rufen Sie die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt, und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu verwerfen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die sagt Willkommen zur To-Do-Listen-App](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Das funktioniert, aber Sie müssen jedes Mal diesen gesamten Code kopieren und einfügen, wenn Sie einen Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Da es sich um einen Compiler handelt, hat Svelte mehr Ressourcen, um unser Leben einfacher zu machen. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als automatisches Abonnement. Einfach ausgedrückt, Sie müssen den Store nur mit `$` kennzeichnen und Svelte generiert den Code, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir es später tun werden, wird die reaktive `$store`-Syntax auch für Ihre Stores gelten.

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

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies genauso funktioniert wie zuvor. Das ist viel besser!

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert` Store zu abonnieren, `$alert` zu aktualisieren, wann immer sich der Inhalt des Stores ändert, und das Abonnement zu kündigen, wenn die Komponente entfernt wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir `$alert` einen Wert zuweisen.

Das Endergebnis dieses cleveren Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler für eine bessere Entwicklerergonomie verantwortlich macht, indem es uns nicht nur davor bewahrt, Boilerplate zu tippen, sondern auch weniger fehleranfälligen Code generiert.

## In unseren Store schreiben

In unseren Store zu schreiben ist einfach eine Frage des Importierens und Ausführens von `$store = 'new value'`. Lassen Sie uns es in unserer `Todos`-Komponente verwenden.

1. Fügen Sie die folgende `import`-Anweisung unter den vorhandenen hinzu:

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

7. Grundsätzlich haben wir den Store importiert und bei jedem Ereignis aktualisiert, was jedes Mal zu einer neuen Benachrichtigung führt. Schauen Sie sich Ihre App erneut an und versuchen Sie, einige To-Dos hinzuzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des `alert`-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten anfasst. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Unsere Alert-Komponente verbessern

Es ist ein bisschen nervig, auf den Alert klicken zu müssen, um ihn loszuwerden. Es wäre besser, wenn die Benachrichtigung einfach nach ein paar Sekunden verschwinden würde.

Lassen Sie uns sehen, wie wir das machen. Wir geben eine Prop mit den Millisekunden an, die gewartet werden sollen, bevor die Benachrichtigung gelöscht wird, und definieren einen Timeout, um den Alert zu entfernen. Wir kümmern uns auch darum, den Timeout zu löschen, wenn die `Alert`-Komponente entfernt wird, um Speicherlecks zu vermeiden.

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

Hier erstellen wir zunächst die Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die sich um das Steuern des Sichtbarkeitszustands des Alerts kümmert. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, dass diese Funktion immer dann ausgeführt werden soll, wenn sich der `$alert` Store oder die `ms` Prop ändert.

Immer wenn sich der `$alert` Store ändert, löschen wir alle noch offenen Timeouts. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und der `Alert` wird aus dem DOM entfernt. Ist er nicht leer, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um den Alert nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()`-Lebenszyklusfunktion sicher, dass die `clearTimeout()`-Funktion aufgerufen wird.

Wir haben auch ein SVG-Icon über dem Benachrichtigungs-Absatz hinzugefügt, um es optisch etwas ansprechender zu machen. Probieren Sie es erneut aus und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert einwandfrei, ist jedoch nicht sehr freundlich gegenüber unterstützenden Technologien. Das Problem sind Elemente, die dynamisch hinzugefügt und entfernt werden. Während sie für Benutzer, die die Seite sehen können, offensichtlich sind, sind sie möglicherweise nicht so offensichtlich für Benutzer von unterstützenden Technologien, wie Screenreadern. Um solche Situationen zu behandeln, können wir von [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) profitieren, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch offenzulegen, sodass sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können eine Region deklarieren, die dynamische Inhalte enthält, die von unterstützenden Technologien angekündigt werden sollen, indem Sie die `aria-live`-Eigenschaft gefolgt von der Höflichkeitseinstellung verwenden, die verwendet wird, um die Priorität festzulegen, mit der Screenreader Updates dieser Regionen behandeln sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für allgemeine Situationen gibt es auch mehrere vordefinierte spezialisierte `role`-Werte, wie `log`, `status` und `alert`.

In unserem Fall reicht das Hinzufügen von `role="alert"` zum `<div>`-Container aus:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Screenreadern zu testen, nicht nur, um Barriereprobleme zu erkennen, sondern auch, um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, neben anderen Optionen.

Um mehr über das Erkennen und Beheben von Barriereproblemen zu erfahren, schauen Sie sich unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) Modul an.

## Verwenden des Store-Vertrags, um unsere To-Dos zu speichern

Unsere kleine App ermöglicht es uns, unsere To-Dos ziemlich einfach zu verwalten, ist aber eher nutzlos, wenn wir immer dieselbe Liste von festcodierten To-Dos sehen, wenn wir sie neu laden. Um es wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-Dos speichern.

Zuerst benötigen wir eine Möglichkeit, für unsere `Todos`-Komponente die aktualisierten To-Dos an die übergeordnete Komponente zurückzugeben. Wir könnten ein aktualisiertes Ereignis mit der Liste der To-Dos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Lassen Sie uns `App.svelte` öffnen und es versuchen.

1. Fügen Sie zuerst folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie dann den `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > [!NOTE]
   > `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige To-Dos hinzuzufügen, dann gehen Sie zu Ihrem Web-Konsolen-Entwicklerwerkzeug. Sie werden sehen, dass jede Änderung, die wir an unseren To-Dos vornehmen, dank der `Bind`-Direktive im `todos`-Array in `App.svelte` reflektiert wird.

Jetzt müssen wir eine Möglichkeit finden, diese To-Dos zu speichern. Wir könnten in unserer `App.svelte`-Komponente etwas Code implementieren, um unsere To-Dos in den [Webspeicher](/de/docs/Web/API/Web_Storage_API) oder zu einem Webservice zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dies würde uns erlauben, ihn genauso wie jeden anderen Store zu verwenden und den Persistenzmechanismus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt an den Webspeicher synchronisiert, und später einen weiteren entwickeln, der gegen einen Webservice synchronisiert. Das Umschalten zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Unsere To-Dos speichern

Beginnen wir also damit, einen regulären writable Store zu verwenden, um unsere To-Dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem existierenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir zum Zugriff auf die To-Dos jetzt die reaktive `$todos`-Syntax verwenden müssen.

   Aktualisieren Sie Ihre `App.svelte`-Datei folgendermaßen:

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

3. Probieren Sie es aus; alles sollte funktionieren. Als nächstes werden wir sehen, wie wir unsere eigenen benutzerdefinierten Stores implementieren können.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Seine Funktionen müssen wie folgt funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion annehmen muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wenn sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die bei Aufruf das Abonnement stoppt.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store annehmen muss und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als writable Store bezeichnet.

Zuerst fügen wir die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie etwas Ähnliches wie dies in Ihrer Webkonsole:

![Webkonsole zeigt die Funktionen und Inhalte des Todos-Stores](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store nur ein Objekt, das `subscribe()`, `set()` und `update()`-Methoden enthält, und `$todos` ist unser Array von To-Dos.

Nur zum Referenzieren, hier ist ein grundlegender funktionierender Store, der von Grund auf implementiert wurde:

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

Hier deklarieren wir `subs`, welches ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler dem `subs`-Array hinzu und geben eine Funktion zurück, die bei Ausführung den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, wobei wir den neuen Wert als Parameter übergeben.

Normalerweise implementiert man Stores nicht von Grund auf; stattdessen würde man den writable Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-Do-Liste-App zu komplex wird, könnten wir unseren To-Dos-Store die Modifikation jedes Zustandes verwalten lassen. Wir könnten alle Methoden, die das `todo`-Array modifizieren (wie `addTodo()`, `removeTodo()`, usw.) von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsmodifikationen angewendet werden, könnten die Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern und reaktiv die Informationen anzuzeigen, die vom Store bereitgestellt werden. Einen einzigartigen Ort zu haben, um Zustandsmodifikationen zu verwalten, erleichtert es, den Zustandsfluss zu verstehen und Probleme zu erkennen.

Svelte wird Sie nicht zwingen, Ihre Zustandsverwaltung auf eine bestimmte Weise zu organisieren; es stellt Ihnen nur die Werkzeuge zur Verfügung, um zu wählen, wie Sie damit umgehen wollen.

### Implementierung unseres benutzerdefinierten To-Dos-Stores

Unsere To-Do-Liste-App ist nicht besonders komplex, daher werden wir nicht alle unsere Modifikationsmethoden an einen zentralen Ort verschieben. Wir lassen sie einfach so wie sie sind und konzentrieren uns stattdessen darauf, unsere To-Dos zu speichern.

> [!NOTE]
> Wenn Sie dieser Anleitung folgen und im Svelte REPL arbeiten, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer sandboxed Umgebung, die Ihnen keinen Zugriff auf den Webspeicher ermöglicht, und Sie werden einen "Die Operation ist unsicher"-Fehler erhalten. Um diesen Abschnitt zu verfolgen, müssen Sie das Repo klonen und in den `mdn-svelte-tutorial/06-stores`-Ordner gehen, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Webspeicher speichert, benötigen wir einen writable Store, der Folgendes ausführt:

- Liest zu Beginn den Wert aus dem Webspeicher und initialisiert ihn bei Nichtvorhandensein mit einem Standardwert
- Aktualisiert bei jeder Änderung des Wertes sowohl den Store selbst als auch die Daten im lokalen Speicher

Da der Webspeicher nur das Speichern von String-Werten unterstützt, müssen wir zudem beim Speichern von Objekt auf String und beim Laden von String auf Objekt konvertieren.

1. Erstellen Sie eine neue Datei mit dem Namen `localStore.js` in Ihrem `src`-Verzeichnis.
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

   - Unser `localStore` wird eine Funktion sein, die bei Ausführung ihren Inhalt zunächst aus dem Webspeicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir ein neues `localStore` erstellen, müssen wir den Schlüssel des Webspeichers und einen Initialwert angeben. Dann überprüfen wir, ob der Wert im Webspeicher existiert, und falls nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Webspeicher zu lesen und zu schreiben, und die Helferfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwenden), um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den String-Inhalt, den wir aus dem Webspeicher erhalten haben, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir den Inhalt des Stores aktualisieren, auch den Webspeicher, dabei wird der Wert in einen String konvertiert.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation hinzugefügt haben, den Wert im Webspeicher zu speichern. Der Rest des Codes ist hauptsächlich Initialisieren und Konvertieren von Sachen.

3. Nun werden wir unseren local Store von `stores.js` aus verwenden, um unseren lokal gespeicherten To-Dos-Store zu erstellen.

   Aktualisieren Sie `stores.js` so:

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

   Durch die Verwendung von `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store, um die Daten im Webspeicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir setzen auch ein paar To-Dos als Anfangswerte.

4. Lassen Sie uns jetzt die fest kodierten To-Dos in `App.svelte` loswerden. Aktualisieren Sie den Inhalt folgendermaßen. Wir löschen im Wesentlichen nur das `$todos`-Array und die `console.log()`-Anweisungen:

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
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist völlig transparent in Bezug darauf, welche Art von Store wir verwenden.

5. Probieren Sie Ihre App noch einmal aus. Erstellen Sie ein paar To-Dos und dann schließen Sie den Browser. Sie können sogar den Svelte-Server anhalten und neu starten. Beim erneuten Besuch der URL werden Ihre To-Dos immer noch vorhanden sein.
6. Sie können es auch in der DevTools-Konsole inspizieren. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, zum Beispiel indem Sie die Schaltfläche _Uncheck All_ drücken, und überprüfen Sie den Inhalt des Webspeichers erneut. Sie erhalten so etwas:

   ![To-Do-App mit Webkonsole, die zeigt, dass beim Ändern einer To-Do in der App der entsprechende Eintrag im Webspeicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber äußerst leistungsstarke Möglichkeit, den komplexen Zustand der App aus einem globalen Datenspeicher auf eine reaktive Weise zu verwalten. Und weil Svelte unseren Code kompiliert, kann es die [`$store`-Automatisches-Abonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores genauso wie mit lokalen Variablen zu arbeiten. Da Stores eine Minimal-API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Abläufe des Stores selbst zu abstrahieren.

## Bonus: Übergänge

Lassen Sie uns jetzt das Thema ändern und etwas Spaßiges und Anderes machen: eine Animation zu unseren Alerts hinzufügen. Svelte bietet ein ganzes Modul zur Definition von [Transitions](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate), damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn) Direktive angewendet und wird durch ein Element ausgelöst, das in das DOM eintritt oder es aufgrund einer Zustandsänderung verlässt.

Lassen Sie uns unserer `Alert`-Komponente einen Fly-`transition` geben. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly` Funktion aus dem `svelte/transition` Modul.

1. Setzen Sie die folgende `import` Anweisung unter die bestehenden:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um sie zu verwenden, aktualisieren Sie Ihr öffnendes `<div>` Tag so:

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
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es ist nur ein literales JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus, und Sie werden sehen, dass die Benachrichtigungen jetzt etwas ansprechender aussehen.

> [!NOTE]
> Da Svelte ein Compiler ist, kann es die Größe unseres Bundles optimieren, indem es Funktionen ausschließt, die nicht verwendet werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wiegt unsere `public/build/bundle.js` Datei ein wenig weniger als 22 KB. Wenn wir die `transitions:fly` Direktive entfernen, ist Svelte klug genug, um zu erkennen, dass die fly-Funktion nicht verwendet wird, und die `bundle.js` Datei wird auf nur 18 KB sinken.

Das ist nur die Spitze des Eisbergs. Svelte hat viele Optionen für den Umgang mit Animationen und Übergängen. Svelte unterstützt auch die Festlegung verschiedener Übergänge zum Hinzufügen oder Entfernen von Elementen aus dem DOM mit den `in:fn`/`out:fn` Direktiven, und es erlaubt Ihnen, Ihre [benutzerdefinierte CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es hat auch mehrere Easing-Funktionen, um die Änderungsrate über die Zeit zu spezifizieren. Schauen Sie sich den [Ease Visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbaren Ease-Funktionen zu erkunden.

## Der Code bisher

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

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

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: Eine `Alert`-Komponente und das Speichern von `todos` im Webspeicher.

- Dadurch konnten wir einige fortgeschrittene Svelte-Techniken darstellen. Wir haben die `Alert`-Komponente entwickelt, um zu zeigen, wie man zustandsübergreifendes Komponenten-Management mithilfe von Stores implementieren kann. Wir haben auch gesehen, wie man Stores automatisch abonniert, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann haben wir gesehen, wie man einen eigenen Store von Grund auf implementiert und auch wie man den writable Store von Svelte erweitert, um Daten im Webspeicher zu speichern.
- Am Ende haben wir uns die Verwendung der Svelte-`transition`-Direktive angesehen, um Animationen an DOM-Elementen zu implementieren.

Im nächsten Artikel werden wir lernen, wie man Unterstützung für TypeScript zu unserer Svelte-Anwendung hinzufügt. Um alle Funktionen nutzen zu können, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
