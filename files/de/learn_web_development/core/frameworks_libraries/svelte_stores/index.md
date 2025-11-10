---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Handhabung von Reaktivität, Arbeiten mit DOM-Knoten und zum Offenlegen von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir eine weitere Möglichkeit zur Zustandsverwaltung in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte halten. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, mindestens mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut zu sein, und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > zu haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Svelte-Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Stores erstellen wir eine `Alert`-Komponente, die Benachrichtigungen auf dem Bildschirm anzeigt und von jeder Komponente Nachrichten empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist weder eine Eltern- noch eine Kindkomponente — daher passen die Nachrichten nicht in die Komponentenhierarchie.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln, um die To-do-Informationen in [Web Storage](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere To-dos über Seitenladevorgänge hinweg bestehen bleiben.

## Code mit uns zusammen

### Git

Klonen Sie das GitHub-Repository (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Zustand der App zu gelangen, führen Sie

```bash
cd mdn-svelte-tutorial/06-stores
```

aus oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns über den REPL zu codieren, starten Sie unter

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit unserem App-Zustand

Wir haben bereits gesehen, wie unsere Komponenten mithilfe von Props, bidirektionaler Datenbindung und Ereignissen miteinander kommunizieren können. In allen diesen Fällen haben wir es mit der Kommunikation zwischen Eltern- und Kindkomponenten zu tun gehabt.

Aber nicht alle Anwendungszustände gehören in die Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss Ihr App-Zustand von mehreren Komponenten abgerufen werden, die nicht hierarchisch miteinander verbunden sind, oder von einem regulären JavaScript-Modul.

Außerdem kann es, wenn Ihre App kompliziert wird und Ihre Komponentenhierarchie komplex wird, zu schwierig werden, dass Komponenten Daten zwischen sich weitergeben. In diesem Fall könnte der Wechsel zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, dann sind Sie damit vertraut, wie diese Art von Store funktioniert. Svelte-Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es Interessenten ermöglicht, benachrichtigt zu werden, wann immer sich der Store-Wert ändert, und einer optionalen `set()`-Methode, mit der Sie neue Werte für den Store festlegen können. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte bietet Funktionen zum Erstellen [lesbarer](https://svelte.dev/docs/svelte-store#readable), [beschreibbarer](https://svelte.dev/docs/svelte-store#writable) und [abgeleiteter](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores erstellen, die den Store-Vertrag einhalten, erhalten Sie diesen reaktiven syntaktischen Zucker kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, werden wir eine `Alert`-Komponente erstellen. Diese Art von Widgets könnte auch als Popup-Benachrichtigungen, Toasts oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Wann immer eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür zuständig, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Lassen Sie uns mit der Erstellung eines beschreibbaren Stores beginnen. Jede Komponente wird in der Lage sein, in diesen Store zu schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei, `stores.js`, in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie organisieren können, wie es Ihnen gefällt.

Im obigen Code importieren wir die `writable()`-Funktion von `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem anfänglichen Wert "Willkommen in der To-do-Listen-App!" zu erstellen. Wir `exportieren` dann den Store.

### Erstellen der tatsächlichen Komponente

Lassen Sie uns nun unsere `Alert`-Komponente erstellen und sehen, wie wir Werte aus dem Store lesen können.

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

Lassen Sie uns diesen Codeblock im Detail durchgehen.

- Am Anfang importieren wir den `alert`-Store.
- Als nächstes importieren wir die Lebenszyklusfunktion `onDestroy()`, die es uns ermöglicht, einen Rückruf auszuführen, nachdem die Komponente demontiert wurde.
- Wir erstellen dann eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir von der Markup-Ebene aus auf Variablen zugreifen können, und wann immer sie geändert werden, wird das DOM entsprechend aktualisiert.
- Dann rufen wir die Methode `alert.subscribe()` auf, wobei wir ihr eine Rückruffunktion als Parameter übergeben. Wann immer sich der Wert des Stores ändert, wird die Rückrufunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir den erhaltenen Wert einfach der lokalen Variable zu, was die Aktualisierung des DOM der Komponente auslösen wird.
- Die `subscribe()`-Methode gibt auch eine Aufräumfunktion zurück, die sich um das Freigeben des Abonnements kümmert. Wir melden uns also an, wenn die Komponente initialisiert wird, und nutzen `onDestroy`, um sich abzumelden, wenn die Komponente demontiert wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup, und wenn der Benutzer auf den Alert klickt, reinigen wir ihn.
- Am Ende fügen wir ein paar CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu gestalten.

Diese Einrichtung ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Rückruf ausgeführt. Dort weisen wir einer lokalen Variable einen neuen Wert zu, und dank der Svelte-Reaktivität werden unser gesamtes Markup und die reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwendung der Komponente

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unter der vorhandenen hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, wie folgt:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt, und Sie sollten nun die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um es zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die Willkommen in der To-do-Listen-App sagt](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Dies funktioniert, aber Sie müssen diesen Code jedes Mal kopieren und einfügen, wenn Sie einen Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Ressourcen, um unser Leben einfacher zu machen. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Abonnement. Einfach ausgedrückt, Sie müssen dem Store nur das `$`-Zeichen voranstellen, und Svelte generiert den Code, um ihn automatisch reaktiv zu machen. Der vorherige Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir es später tun werden, wird die reaktive `$store`-Syntax auch auf Ihre Stores angewendet.

1. Wenden wir dies auf unsere `Alert`-Komponente an. Aktualisieren Sie die `<script>`- und Markup-Abschnitte von `Alert.svelte` wie folgt:

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

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` wann immer der Inhalt des Stores geändert wird, zu aktualisieren und sich abzumelden, wenn die Komponente demontiert wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir einen Wert `$alert` zuweisen.

Das Endergebnis dieses raffinierten Tricks ist, dass Sie globalen Stores genauso einfach zugreifen können wie reaktiven lokalen Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler für eine bessere Entwicklerergonomie verantwortlich macht, uns nicht nur von der Eingabe von Boilerplate entbindet, sondern auch fehleranfälligeren Code generiert.

## In unseren Store schreiben

In unseren Store zu schreiben, ist einfach eine Sache des Importierens und Ausführens von `$store = 'neuer Wert'`. Lassen Sie es uns in unserer `Todos`-Komponente verwenden.

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

5. Fügen Sie den folgenden reaktiven Block unter dem Block der mit `let filter = 'all'` beginnen, hinzu:

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

7. Letztendlich haben wir den Store importiert und ihn bei jedem Ereignis aktualisiert, was jedes Mal einen neuen Alert anzeigt. Schauen Sie sich Ihre App wieder an und probieren Sie ein paar To-dos zu hinzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder andere Abonnent des Alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten berühren wird. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist ein bisschen lästig, auf den Alert klicken zu müssen, um ihn loszuwerden. Es wäre besser, wenn die Benachrichtigung einfach nach ein paar Sekunden verschwindet.

Sehen wir uns an, wie man das macht. Wir spezifizieren eine Requisite mit den Millisekunden, bis die Benachrichtigung gelöscht wird, und definieren einen Timeout, um den Alert zu entfernen. Wir werden auch dafür sorgen, den Timeout zu löschen, wenn die `Alert`-Komponente unmontiert wird, um Speicherlecks zu verhindern.

1. Aktualisieren Sie den `<script>`-Abschnitt Ihrer `Alert.svelte`-Komponente so:

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

2. Und aktualisieren Sie den Markup-Abschnitt `Alert.svelte` so:

   ```svelte
   {#if visible}
   <div on:click={() => visible = false}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

Hier erstellen wir zuerst die Requisite `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die dafür sorgt, ob der Alert sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, diese Funktion aufzurufen, wann immer sich der `$alert`-Store oder die `ms`-Requisite ändert.

Wann immer sich der `$alert`-Store ändert, bereinigen wir anstehende Timeouts. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und der Alert wird aus dem DOM entfernt. Wenn er nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um den Alert nach `ms` Millisekunden zu löschen.

Schließlich benutzen wir die `onDestroy()`-Lebenszyklusfunktion, um sicherzustellen, dass wir die `clearTimeout()`-Funktion aufrufen.

Wir haben auch ein SVG-Icon über dem Alert-Absatz hinzugefügt, um es etwas schöner aussehen zu lassen. Probieren Sie es erneut aus, und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert gut, ist aber nicht sehr freundlich zu unterstützenden Technologien. Das Problem sind Elemente, die dynamisch zur Seite hinzugefügt und entfernt werden. Während sie für Benutzer, die die Seite sehen können, offensichtlich sind, sind sie möglicherweise nicht so offensichtlich für Benutzer von unterstützenden Technologien wie Bildschirmlesern. Um mit diesen Situationen umzugehen, können wir von [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Gebrauch machen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch freizulegen, sodass sie von unterstützenden Technologien erkannt und bekanntgegeben werden können.

Wir können eine Region deklarieren, die dynamische Inhalte enthält, die von unterstützenden Technologien bekanntgegeben werden sollen, mit der `aria-live`-Eigenschaft, gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmleser Updates in dieser Region handhaben sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für allgemeine Situationen gibt es auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall reicht es aus, dem `<div>`-Container ein `role="alert"` hinzuzufügen, wie folgt:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesern zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch um zu lernen, wie sehbehinderte Menschen das Web nutzen. Es gibt mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) unter Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, unter anderen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, schauen Sie sich unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul an.

## Den Store-Vertrag verwenden, um unsere To-dos zu speichern

Unsere kleine App ermöglicht es uns, unsere To-dos recht einfach zu verwalten, ist jedoch wenig sinnvoll, wenn wir bei jedem Neuladen derselben Liste mit hartcodierten To-dos konfrontiert sind. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-dos speichern können.

Zuerst müssen wir eine Möglichkeit für unsere `Todos`-Komponente finden, die aktualisierten To-dos an deren Eltern zurückzugeben. Wir könnten ein aktualisiertes Ereignis mit der Liste der To-dos auslösen, aber es ist einfacher, die Variable `todos` zu binden. Lassen Sie uns `App.svelte` öffnen und es versuchen.

1. Fügen Sie zuerst die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie anschließend Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > [!NOTE]
   > `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, probieren Sie einige To-dos hinzuzufügen, und gehen Sie dann zu Ihrem Web-Consolen-Entwicklertools. Sie werden sehen, dass jede von uns vorgenommene Änderungen bei den To-dos in dem in `App.svelte` definierten `todos`-Array dank der `bind`-Directive reflektiert wird.

Jetzt müssen wir einen Weg finden, diese To-dos zu speichern. Wir könnten in unserer `App.svelte` Komponente etwas Code implementieren, um unsere To-dos in [Web Storage](/de/docs/Web/API/Web_Storage_API) oder zu einem Webservice zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einige allgemeinen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dadurch könnten wir es genauso nutzen wie jeden anderen Store und den Persistenz-Mechanismus abstrahieren. Wir könnten einen Store erstellen, der seine Inhalte mit Webspeicher synchronisiert, und später ein anderen entwickeln, der sich mit einem Webdienst synchronisiert. Das Umschalten zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Unsere To-dos speichern

Also lassen Sie uns zuerst einen regulären beschreibbaren Store verwenden, um unsere To-dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie einfach daran, dass wir, um auf die To-dos zuzugreifen, jetzt die reaktive `$todos`-Syntax verwenden müssen.

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

3. Probieren Sie es aus; alles sollte funktionieren. Als Nächstes werden wir sehen, wie man unsere eigenen benutzerdefinierten Stores definiert.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu stützen, indem Sie den Store-Vertrag implementieren. Seine Funktionen müssen wie folgt arbeiten:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptiert. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die, wenn sie aufgerufen wird, ihr Abonnement beenden muss.
3. Ein Store darf optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss, und synchron alle aktiven Abonnementfunktionen des Stores aufrufen muss. Ein Store mit einer `set()`-Methode wird beschreibbarer Store genannt.

Zuerst, lassen Sie uns die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzufügen, um den `todos`-Store und dessen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, werden Sie etwas wie dies in Ihrer Web-Konsole sehen:

![Web-Konsole zeigt die Funktionen und den Inhalt des todos-Stores](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store nur ein Objekt, das die `subscribe()`, `set()` und `update()`-Methoden enthält, und `$todos` ist unser To-do-Array.

Nur zur Referenz, hier ist ein einfacher funktionierender Store, der von Grund auf neu implementiert wurde:

```js
export const writable = (initialValue = 0) => {
  let value = initialValue; // content of the store
  let subs = []; // subscriber's handlers

  const subscribe = (handler) => {
    subs = [...subs, handler]; // add handler to the array of subscribers
    handler(value); // call handler with current value
    return () => (subs = subs.filter((sub) => sub !== handler)); // return unsubscribe function
  };

  const set = (newValue) => {
    if (value === newValue) return; // same value, exit
    value = newValue; // update value
    subs.forEach((sub) => sub(value)); // update subscribers
  };

  const update = (updateFn) => set(updateFn(value)); // update function

  return { subscribe, set, update }; // store contract
};
```

Hier deklarieren wir `subs`, das ist ein Array von Abonnenten. In der `subscribe()`-Methode fügen wir die Handler dem `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf und übergeben den neuen Wert als Parameter.

Normalerweise implementiert man Stores nicht von Grund auf neu; stattdessen würde man den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der es uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-do-Listen-App zu komplex wird, könnten wir unserem To-do-Store erlauben, jede Zustandsmodifikation zu handhaben. Wir könnten alle Methoden, die das `todo`-Array modifizieren (wie `addTodo()`, `removeTodo()`, etc.), von unserer `Todos`-Komponente zum Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsmodifikationen angewendet werden, könnten Komponenten einfach diese Methoden aufrufen, um den Status der App zu ändern, und reaktiv die vom Store bereitgestellten Informationen anzeigen. Einen einzigartigen Ort zu haben, um Zustandsmodifikationen zu handhaben, macht es einfacher, den Zustandsfluss zu verstehen und Probleme zu erkennen.

Svelte zwingt Sie nicht, Ihre Zustandsverwaltung auf eine bestimmte Weise zu organisieren; es bietet Ihnen nur die Werkzeuge, um zu entscheiden, wie Sie sie handhaben möchten.

### Implementieren unseres benutzerdefinierten To-dos-Stores

Unsere To-do-Listen-App ist nicht besonders komplex, daher werden wir nicht alle unsere Modifikationsmethoden in einen zentralen Ort verschieben. Wir lassen sie einfach so wie sie sind und konzentrieren uns stattdessen darauf, unsere To-dos zu speichern.

> [!NOTE]
> Wenn Sie diesen Leitfaden über den Svelte REPL verfolgen, werden Sie diesen Schritt nicht abschließen können. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer sandbox-Umgebung, die Ihnen nicht erlaubt, auf Webspeicher zuzugreifen, und Sie erhalten eine "Die Operation ist unsicher"-Fehler. Um diesen Abschnitt zu folgen, müssen Sie das Repo klonen und in den Ordner `mdn-svelte-tutorial/06-stores` gehen, oder Sie können direkt den Inhalt des Ordners mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Webspeicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest zunächst den Wert aus dem Webspeicher und wenn er nicht vorhanden ist, initialisiert er ihn mit einem Standardwert
- Wann immer der Wert geändert wird, aktualisiert der Store sich selbst und auch die Daten im lokalen Speicher

Darüber hinaus, weil der Webspeicher nur das Speichern von Zeichenfolgenwerten unterstützt, müssen wir beim Speichern von Objekt zu Zeichenfolgen und umgekehrt konvertieren, wenn wir den Wert aus dem lokalen Speicher laden.

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

   - Unser `localStore` wird eine Funktion sein, die bei Ausführung anfänglich seinen Inhalt aus dem Webspeicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Webspeichers und einen Anfangswert angeben. Dann überprüfen wir, ob der Wert im Webspeicher vorhanden ist, und wenn nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Webspeicher zu lesen und zu schreiben, und die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet) um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den Zeichenfolgeninhalt, der vom Webspeicher empfangen wurde, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich, jedes Mal, wenn wir den Inhalt des Stores aktualisieren, aktualisieren wir auch den Webspeicher, mit dem Wert, der in eine Zeichenfolge konvertiert wurde.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation zum Speichern des Werts im Webspeicher hinzufügen. Der Rest des Codes ist hauptsächlich Initialisierung und Konvertierung.

3. Jetzt werden wir unseren lokalen Speicher von `stores.js` aus verwenden, um unser lokal gespeichertes To-dos-Store zu erstellen.

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

   Durch die Verwendung von `localStore('mdn-svelte-todo', initialTodos)`, konfigurieren wir den Store, um die Daten im Webspeicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir setzen auch ein paar To-dos als Anfangswerte.

4. Nun lassen Sie uns die hartcodierten To-dos in `App.svelte` loswerden. Aktualisieren Sie seinen Inhalt wie folgt. Grundsätzlich löschen wir einfach das `$todos`-Array und die `console.log()`-Anweisungen:

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

5. Gehen Sie voran und probieren Sie Ihre App wieder aus. Erstellen Sie ein paar To-dos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Besuch der URL werden Ihre To-dos immer noch da sein.
6. Sie können es auch in den DevTools-Konsole inspizieren. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie ein paar Änderungen an Ihrer App vor, wie das Drücken der _Uncheck All_-Schaltfläche, und überprüfen Sie den Inhalt der Webspeicherung einmal mehr. Sie werden etwas wie dies erhalten:

   ![To-do-App mit Web-Konsole-Anzeige daneben, die zeigt, dass wenn ein To-do in der App geändert wird, wird der entsprechende Eintrag in der Web-Version geändert](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichtgewichtige, aber äußerst leistungsstarke Möglichkeit, komplexe App-Zustände von einem globalen Datenspeicher aus auf reaktive Weise zu handhaben. Und da Svelte unseren Code kompiliert, kann es die [`$store`-Autoabonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores auf die gleiche Weise wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API besitzen, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Mechanismen des Stores selbst zu abstrahieren.

## Bonusstrecke: Übergänge

Lassen Sie uns das Thema wechseln und etwas Spaßiges und anderes tun: Fügen wir unseren Alerts eine Animation hinzu. Svelte bietet ein ganzes Modul, um zu definieren [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate), sodass wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Anweisung angewendet und wird von einem Element ausgelöst, das als Ergebnis einer Zustandsänderung in das DOM eintritt oder es verlässt.

Lassen Sie uns unserer `Alert`-Komponente ein Fliegen-`transition` geben. Wir werden die Datei `Alert.svelte` öffnen und die `fly`-Funktion aus dem `svelte/transition`-Modul importieren.

1. Fügen Sie die folgende `import`-Anweisung unter den bestehenden ein:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um es zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag wie folgt:

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
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es ist nur ein literales JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus, und Sie werden sehen, dass die Benachrichtigungen jetzt ein wenig ansprechender aussehen.

> [!NOTE]
> Ein Compiler zu sein, ermöglicht es Svelte, die Größe unseres Bündels zu optimieren, indem es Funktionen ausschließt, die nicht verwendet werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js`-Datei etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Anweisung entfernen, ist Svelte schlau genug zu erkennen, dass die Fly-Funktion nicht verwendet wird, und die `bundle.js`-Dateigröße wird auf nur 18 KB sinken.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen für den Umgang mit Animationen und Übergängen. Svelte unterstützt auch die Angabe verschiedener Übergänge, die angewendet werden, wenn das Element dem DOM hinzugefügt oder entfernt wird mit den `in:fn`/`out:fn`-Anweisungen, und es ermöglicht Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es gibt auch mehrere Easing-Funktionen, um die Änderungsrate über die Zeit zu spezifizieren. Schauen Sie sich den [Easing-Visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbaren Ease-Funktionen zu erkunden.

## Der bisherige Stand des Codes

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

Um den aktuellen Stand des Codes in einem REPL zu sehen, besuchen Sie:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Webspeicher.

- Dies erlaubte es uns, einige fortgeschrittene Svelte-Techniken zu zeigen. Wir haben die `Alert`-Komponente entwickelt, um zu zeigen, wie man komponentenübergreifendes Zustandsmanagement mit Stores implementiert. Wir haben auch gesehen, wie man automatisch Stores abonniert, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann haben wir gesehen, wie man unsere eigenen Stores von Grund auf neu implementiert und auch wie man Sveltes beschreibbaren Store erweitert, um Daten im Webspeicher zu speichern.
- Am Ende haben wir uns mit der Verwendung der Svelte-Übergangsanweisung für Animationen auf DOM-Elementen vertraut gemacht.

Im nächsten Artikel werden wir lernen, wie man TypeScript-Support zu unserer Svelte-Anwendung hinzufügt. Um alle Funktionen nutzen zu können, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
