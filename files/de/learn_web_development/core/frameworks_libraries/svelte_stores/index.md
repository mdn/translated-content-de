---
title: Arbeiten mit Svelte Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Reaktivität, Arbeit mit DOM-Knoten und Bereitstellung von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir eine weitere Möglichkeit, das Zustandsmanagement in Svelte zu handhaben: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte speichern. Komponenten können sich bei Stores anmelden und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, mit den Kerntechnologien
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          sowie <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Befehlszeile</a> vertraut zu sein.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Svelte Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Stores erstellen wir eine `Alert`-Komponente, die Benachrichtigungen auf dem Bildschirm anzeigt und Nachrichten von jeder Komponente erhalten kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist weder Eltern- noch Kindkomponente einer anderen —, sodass die Nachrichten nicht in die Komponentenhierarchie passen.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die To-Do-Informationen im [Webspeicher](/de/docs/Web/API/Web_Storage_API) zu speichern, damit unsere To-Dos bei Seitenaktualisierungen erhalten bleiben.

## Coden Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie dann Folgendes aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit der REPL weiter zu coden, starten Sie unter

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem Zustand unserer App

Wir haben bereits gesehen, wie unsere Komponenten über Props, bidirektionale Datenbindung und Ereignisse miteinander kommunizieren können. In all diesen Fällen haben wir mit der Kommunikation zwischen Eltern- und Kindkomponenten gearbeitet.

Aber nicht alle Zustände der Anwendung gehören in die Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder darüber, ob das dunkle Thema ausgewählt ist.

Manchmal muss Ihr Anwendungszustand von mehreren Komponenten, die nicht hierarchisch verwandt sind, oder von einem regulären JavaScript-Modul aus zugänglich sein.

Wenn Ihre App komplex wird und Ihre Komponentenhierarchie kompliziert wird, könnte es zu schwierig sein, dass Komponenten Daten zwischen einander übermitteln. In diesem Fall könnte der Umzug zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, sind Sie vielleicht mit der Funktionsweise dieser Art von Store vertraut. Svelte Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wenn sich der Wert des Stores ändert, und einer optionalen `set()`-Methode, die es Ihnen ermöglicht, neue Werte für den Store festzulegen. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte stellt Funktionen zum Erstellen von [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [derived](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul bereit.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores unter Einhaltung des Store-Vertrags erstellen, erhalten Sie diesen reaktiven syntaktischen Zucker ohne zusätzliche Kosten.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Diese Art von Widgets könnten auch als Pop-up-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Immer wenn eine Benachrichtigung eintrifft, zeigt die `Alert`-Komponente sie auf dem Bildschirm an.

### Erstellen eines Stores

Beginnen wir mit der Erstellung eines beschreibbaren Stores. Jede Komponente wird in der Lage sein, in diesen Store zu schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei `stores.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die Funktion `writable()` aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Welcome to the to-do list app!" zu erstellen. Dann `exportieren` wir den Store.

### Erstellen der tatsächlichen Komponente

Erstellen wir jetzt unsere `Alert`-Komponente und sehen wir, wie wir Werte aus dem Store lesen können.

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

Lassen Sie uns diesen Codeabschnitt im Detail durchgehen.

- Am Anfang importieren wir den `alert` Store.
- Anschließend importieren wir die `onDestroy()`-Lebenszyklusfunktion, mit der wir einen Rückruf ausführen können, nachdem die Komponente demontiert wurde.
- Dann erstellen wir eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf oberster Ebene Variablen aus dem Markup zugreifen können, und wenn sie geändert werden, wird das DOM entsprechend aktualisiert.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Immer wenn sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir einfach den empfangenen Wert der lokalen Variable zu, was die Aktualisierung des DOMs der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die die Abbestellung übernimmt. So abonnieren wir beim Initialisieren der Komponente und verwenden `onDestroy`, um die Abbestellung vorzunehmen, wenn die Komponente demontiert wird.
- Schließlich verwenden wir in unserem Markup die Variable `alertContent`, und wenn der Benutzer auf die Warnung klickt, leeren wir sie.
- Am Ende fügen wir einige CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Dieses Setup ermöglicht es uns, in einem reaktiven Weg mit Stores zu arbeiten. Wenn der Wert des Stores geändert wird, wird der Rückruf ausgeführt. Dort weisen wir einer lokalen Variable einen neuen Wert zu, und dank der Svelte-Reaktivität werden unser gesamtes Markup und die reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwendung der Komponente

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` werden wir die Komponente importieren. Fügen Sie die folgende Import-Anweisung unter der vorhandenen hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt, und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App mit der Nachricht "Welcome to the to-do list app"](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Das funktioniert, aber Sie müssten all diesen Code jedes Mal kopieren und einfügen, wenn Sie sich bei einem Store anmelden möchten:

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

Das ist zu viel Boilerplate für Svelte! Da es ein Compiler ist, hat Svelte mehr Ressourcen, um uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription. In einfachen Worten müssen Sie einfach den Store mit dem `$`-Zeichen prefixen, und Svelte generiert automatisch den Code, um ihn reaktiv zu machen. Unser vorheriger Codeblock kann also mit diesem ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die Methoden `subscribe()` und `set()` implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Wenden wir dies auf unsere `Alert`-Komponente an. Aktualisieren Sie die `<script>`- und Markup-Bereiche von `Alert.svelte` wie folgt:

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

2. Überprüfen Sie Ihre App erneut, und Sie werden sehen, dass dies genauso funktioniert wie zuvor. Das ist viel besser!

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` zu aktualisieren, wann immer der Inhalt des Stores geändert wird, und die Abbestellung vorzunehmen, wenn die Komponente demontiert wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir einen Wert zu `$alert` zuweisen.

Das Endergebnis dieses praktischen Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler verantwortlich für eine bessere Entwicklerergonomie macht, indem es uns nicht nur von Boilerplate-Code verschont, sondern auch weniger fehleranfälligen Code generiert.

## Schreiben in unseren Store

In unseren Store zu schreiben, ist einfach eine Frage des Imports und der Ausführung von `$store = 'neuer Wert'`. Lassen Sie es uns in unserer `Todos`-Komponente verwenden.

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

7. Grundsätzlich haben wir den Store importiert und ihn bei jedem Ereignis aktualisiert, wodurch jedes Mal eine neue Warnung angezeigt wird. Schauen Sie sich Ihre App erneut an und versuchen Sie, einige To-Dos hinzuzufügen/löschen/aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` aufrufen. Unsere `Alert`-Komponente — wie jeder Abonnent des `alert`-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb einer beliebigen Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten anfasst. In diesem Fall müssen Sie sich auf die Methoden `store.subscribe()` und `store.set()` verlassen.

## Verbesserung unserer Alert-Komponente

Es ist etwas störend, dass man auf die Warnung klicken muss, um sie loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwindet.

Sehen wir uns an, wie man das macht. Wir geben eine Eigenschaft mit den Millisekunden an, die vor dem Leeren der Benachrichtigung gewartet werden sollen, und definieren ein Timeout, um die Warnung zu entfernen. Wir kümmern uns auch darum, das Timeout zu löschen, wenn die `Alert`-Komponente demontiert wird, um Speicherlecks zu vermeiden.

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

Hier erstellen wir zuerst die Eigenschaft `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die überprüft, ob die Warnung sichtbar sein soll oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, dass diese Funktion immer dann ausgeführt werden soll, wenn sich der `$alert` Store oder die `ms` Eigenschaft ändert.

Immer wenn sich der `$alert` Store ändert, werden wir alle ausstehenden Timeouts bereinigen. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und die `Alert`-Komponente wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die Funktion `setTimeout()`, um die Warnung nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der Funktion `onDestroy()` sicher, dass die Funktion `clearTimeout()` aufgerufen wird.

Wir haben auch ein SVG-Icon oberhalb des Alert-Absatzes hinzugefügt, um es etwas schöner aussehen zu lassen. Versuchen Sie es erneut und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert einwandfrei, ist jedoch nicht sehr benutzerfreundlich für unterstützende Technologien. Das Problem sind Elemente, die dynamisch hinzugefügt und aus der Seite entfernt werden. Zwar sind sie für Benutzer, die die Seite sehen können, visuell offensichtlich, jedoch möglicherweise nicht so offensichtlich für Benutzer von unterstützenden Technologien wie Bildschirmlesern. Um solche Situationen zu handhaben, können wir von [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) profitieren, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmgesteuert freizugeben, damit sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können einen Bereich deklarieren, der dynamischen Inhalt enthält, der von unterstützenden Technologien angekündigt werden sollte, mit der `aria-live`-Eigenschaft gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmleser Updates in diesen Bereichen handhaben sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für häufige Situationen stehen Ihnen auch mehrere vordefinierte spezialisierte `role`-Werte zur Verfügung, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall genügt es, ein `role="alert"` zum `<div>`-Container hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesern zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch, um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux, und [VoiceOver](https://www.apple.com/accessibility/vision/) für macOS und iOS, unter anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, schauen Sie sich unser [Barrierefreiheits-Modul](/de/docs/Learn_web_development/Core/Accessibility) an.

## Verwenden des Store-Vertrags zum Speichern unserer To-Dos

Unsere kleine App ermöglicht es uns, unsere To-Dos ziemlich einfach zu verwalten, ist jedoch eher nutzlos, wenn wir immer die gleiche Liste von hartcodierten To-Dos erhalten, wenn wir sie neu laden. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-Dos speichern können.

Zuerst brauchen wir eine Möglichkeit für unsere `Todos`-Komponente, die aktualisierten To-Dos an ihre Eltern zurückzugeben. Wir könnten ein aktualisiertes Ereignis mit der Liste der To-Dos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Öffnen wir `App.svelte` und versuchen es.

1. Fügen Sie zuerst die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie als Nächstes Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige To-Dos hinzuzufügen, gehen Sie dann zu Ihrem Entwicklerwerkzeuge-Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren To-Dos vornehmen, im `todos`-Array in `App.svelte` dank der bind-Direktive widergespiegelt wird.

Nun müssen wir einen Weg finden, diese To-Dos zu speichern. Wir könnten einige Codes in unserer `App.svelte`-Komponente implementieren, um unsere To-Dos in den [Webspeicher](/de/docs/Web/API/Web_Storage_API) oder zu einem Webservice zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dadurch könnten wir ihn genauso wie jeden anderen Store verwenden und den Persistenzmechanismus abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt in Webspeicher synchronisiert, und später einen anderen entwickeln, der gegen einen Webservice synchronisiert. Das Umschalten zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anpassen.

### Speichern unserer To-Dos

Beginnen wir also damit, einen regulären beschreibbaren Store zu verwenden, um unsere To-Dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem vorhandenen hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir, um auf die To-Dos zuzugreifen, jetzt die reaktive `$todos`-Syntax verwenden müssen.

   Aktualisieren Sie Ihre Datei `App.svelte` wie folgt:

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

3. Probieren Sie es aus; alles sollte funktionieren. Als Nächstes werden wir sehen, wie man unsere eigenen benutzerdefinierten Stores implementiert.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag umsetzen. Seine Merkmale müssen so funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wenn sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die, wenn sie aufgerufen wird, ihr Abonnement beenden muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen wir zunächst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie im Webkonsole so etwas:

![Webkonsole zeigt die Funktionen und Inhalte des todos-Stores](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das `subscribe()`, `set()` und `update()` Methoden enthält, und `$todos` ist unser Array von To-Dos.

Nur zur Referenz hier ein Basisstore, der von Grund auf neu implementiert wurde:

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

Hier deklarieren wir `subs`, eine Liste von Abonnenten. In der `subscribe()`-Methode fügen wir den Handler zur `subs`-Liste hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus der Liste entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, wobei der neue Wert als Parameter übergeben wird.

Normalerweise implementiert man Stores nicht von Grund auf neu; stattdessen würde man den writable-Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. In dem folgenden Beispiel erstellen wir einen Zähler-Store, der uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-Do-Listen-App zu komplex wird, könnten wir den To-Dos-Store dazu bringen, jede Zustandsänderung zu handhaben. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, etc.), von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsänderungen angewendet werden, könnten Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern, und die Informationen, die vom Store bereitgestellt werden, reaktiv anzeigen. Einen einzigartigen Ort zu haben, um Zustandsänderungen zu handhaben, macht es einfacher, über den Zustandsfluss nachzudenken und Probleme zu erkennen.

Svelte zwingt Sie nicht, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es stellt einfach die Werkzeuge zur Verfügung, damit Sie selbst entscheiden können, wie Sie damit umgehen.

### Implementierung unseres benutzerdefinierten To-Dos-Stores

Unsere To-Do-Listen-App ist nicht besonders komplex, also werden wir nicht alle unsere Änderungsmethoden an einem zentralen Ort ablegen. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere To-Dos zu speichern.

> [!NOTE]
> Wenn Sie dieser Anleitung aus der Svelte REPL folgen, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen arbeitet die Svelte REPL in einer sandboxed-Umgebung, die es Ihnen nicht erlaubt, auf den Webspeicher zuzugreifen, und Sie werden einen "The operation is insecure" Fehler erhalten. Um diesen Abschnitt zu befolgen, müssen Sie das Repo klonen und in den Ordner `mdn-svelte-tutorial/06-stores` gehen, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Webspeicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest zunächst den Wert aus dem Webspeicher und, wenn er nicht vorhanden ist, initialisiert ihn mit einem Standardwert
- Wann immer der Wert modifiziert wird, aktualisiert er den Store selbst und auch die Daten im lokalen Speicher

Darüber hinaus, da der Webspeicher nur das Speichern von Zeichenkettenwerten unterstützt, müssen wir beim Speichern eine Umwandlung von Objekt zu Zeichenkette vornehmen und umgekehrt, wenn wir den Wert aus dem lokalen Speicher laden.

1. Erstellen Sie eine neue Datei `localStore.js` in Ihrem `src`-Verzeichnis.
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

   - Unser `localStore` wird eine Funktion sein, die beim Ausführen zunächst ihren Inhalt aus dem Webspeicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Beim Erstellen eines neuen `localStore` müssen wir den Schlüssel des Webspeichers und einen Anfangswert angeben. Wir prüfen dann, ob der Wert im Webspeicher vorhanden ist und legen ihn andernfalls an.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Webspeicher zu lesen und zu schreiben, sowie die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()`, die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet, um die Werte zu konvertieren.
   - Anschließend konvertieren wir den Zeichenketteninhalt, den wir aus dem Webspeicher erhalten, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir den Inhalt des Stores aktualisieren, auch den Webspeicher mit dem Wert, der in eine Zeichenkette konvertiert wurde.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation zum Speichern des Werts im Webspeicher hinzugefügt haben. Der Rest des Codes dient hauptsächlich der Initialisierung und Konvertierung.

3. Jetzt werden wir unseren lokalen Store von `stores.js` verwenden, um unseren lokal gespeicherten To-Dos-Store zu erstellen.

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

   Durch Verwendung von `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store, um die Daten im Webspeicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir setzen auch ein paar Todos als Anfangswerte.

4. Lassen Sie uns jetzt die hartcodierten To-Dos in `App.svelte` loswerden. Aktualisieren Sie den Inhalt wie folgt. Wir löschen im Grunde einfach das `$todos`-Array und die `console.log()`-Anweisungen:

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
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist völlig transparent in Bezug darauf, welche Art von Store wir verwenden.

5. Gehen Sie nun zu Ihrer App zurück, erstellen Sie ein paar To-Dos und schließen Sie den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Besuch der URL sind Ihre To-Dos immer noch vorhanden.
6. Sie können es auch in den DevTools-Konsole inspizieren. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, wie das Drücken des _Uncheck All_-Buttons, und überprüfen Sie den Inhalt des Webspeichers erneut. Sie erhalten so etwas:

   ![To-do-App mit Webkonsole-Ansicht daneben, zeigt, dass wenn ein To-Do in der App geändert wird, der entsprechende Eintrag im Webspeicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte Stores bieten eine sehr einfache und leichte, aber äußerst leistungsstarke Möglichkeit, einen komplexen Anwendungszustand aus einem globalen Datenspeicher auf reaktive Weise zu handhaben. Und da Svelte unseren Code kompiliert, kann es den [`$store`-Automatischen-Abo-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores genauso einfach wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die Funktionsweise des Stores selbst zu abstrahieren.

## Bonustrack: Übergänge

Lassen Sie uns das Thema wechseln und etwas Spaßiges und anderes machen: eine Animation zu unseren Warnungen hinzufügen. Svelte stellt ein ganzes Modul zur Verfügung, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird von einem Element ausgelöst, das aufgrund einer Zustandsänderung zum DOM hinzugefügt oder aus diesem entfernt wird. Das Modul `svelte/transition` exportiert sieben Funktionen: `fade`, `blur`, `fly`, `slide`, `scale`, `draw` und `crossfade`.

Geben wir unserer `Alert`-Komponente einen `fly`-Übergang. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Setzen Sie die folgende `import`-Anweisung unter die vorhandenen:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um es zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Übergänge können auch Parameter erhalten, zum Beispiel:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es handelt sich einfach um ein literales JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus und Sie werden sehen, dass die Benachrichtigungen jetzt etwas ansprechender aussehen.

> [!NOTE]
> Da Svelte ein Compiler ist, ermöglicht es die Optimierung der Größe unseres Bundles, indem nicht genutzte Funktionen ausgeschlossen werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere Datei `public/build/bundle.js` etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte schlau genug zu erkennen, dass die Fly-Funktion nicht verwendet wird und die Größe der `bundle.js`-Datei auf nur 18 KB sinken wird.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Möglichkeiten, um mit Animationen und Übergängen umzugehen. Svelte unterstützt auch das Spezifizieren unterschiedlicher Übergänge für das Hinzufügen oder Entfernen eines Elements aus dem DOM mit den Direktiven `in:fn`/`out:fn`, und es ermöglicht Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es hat auch mehrere Easing-Funktionen, um die Änderungsrate über die Zeit zu spezifizieren. Werfen Sie einen Blick auf den [Ease-Visualizer](https://svelte.dev/examples/easing), um die verschiedenen verfügbaren Ease-Funktionen zu erkunden.

## Der Code bis jetzt

### Git

Um den Stand des Codes am Ende dieses Artikels zu sehen, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/07-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um den aktuellen Stand des Codes in einer REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Features hinzugefügt: eine `Alert`-Komponente und die Speicherung von `todos` im Webspeicher.

- Dadurch konnten wir einige fortschrittliche Svelte-Techniken demonstrieren. Wir haben die `Alert`-Komponente entwickelt, um zu zeigen, wie man ein komponentenübergreifendes Zustandsmanagement mithilfe von Stores implementiert. Wir haben auch gesehen, wie man diese automatisch abonniert, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann haben wir gesehen, wie man seinen eigenen Store von Grund auf neu implementiert, und auch, wie man Sveltes beschreibbaren Store erweitert, um Daten im Webspeicher zu speichern.
- Am Ende haben wir uns angeschaut, wie man die Svelte `transition`-Direktive verwendet, um Animationen auf DOM-Elementen zu implementieren.

Im nächsten Artikel lernen wir, wie wir unserer Svelte-Anwendung TypeScript-Unterstützung hinzufügen. Um alle Funktionen zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
