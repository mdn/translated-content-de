---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zum Umgang mit Reaktivität, dem Arbeiten mit DOM-Knoten und der Bereitstellung von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir Ihnen eine weitere Möglichkeit, das Zustandsmanagement in Svelte zu handhaben: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte speichern. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse in der Arbeit mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          >haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man Svelte-Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mithilfe von Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm anzeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist kein Eltern- oder Kindteil einer anderen Komponente — daher passen die Nachrichten nicht in die Komponentenhierarchie.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die Todos in [Web Storage](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere Todos über Seitenladevorgänge hinweg erhalten bleiben.

## Begleiten Sie uns beim Kodieren

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie Folgendes aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um gemeinsam mit dem REPL zu kodieren, beginnen Sie hier:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem App-Zustand

Wir haben bereits gesehen, wie unsere Komponenten über Props, bidirektionale Datenbindung und Ereignisse miteinander kommunizieren können. In all diesen Fällen handelte es sich um die Kommunikation zwischen Eltern- und Kindkomponenten.

Aber nicht alle Anwendungszustände gehören in die Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss auf den Zustand Ihrer App durch mehrere Komponenten zugegriffen werden, die nicht hierarchisch verwandt sind, oder durch ein reguläres JavaScript-Modul.

Außerdem kann es, wenn Ihre App kompliziert wird und Ihre Komponentenhierarchie komplex wird, zu schwierig werden, dass Komponenten Daten zwischen sich weitergeben. In diesem Fall könnte der Umzug zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie schon mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, sind Sie mit der Funktionsweise dieses Speichers vertraut. Svelte-Stores bieten ähnliche Funktionen für das Zustandsmanagement.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es den interessierten Parteien ermöglicht, benachrichtigt zu werden, wenn sich der Store-Wert ändert, und einer optionalen `set()`-Methode, mit der Sie neue Werte für den Store festlegen können. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte bietet Funktionen zum Erstellen [lesbarer](https://svelte.dev/docs/svelte-store#readable), [beschreibbarer](https://svelte.dev/docs/svelte-store#writable) und [abgeleiteter](https://svelte.dev/docs/svelte-store#derived) Stores im Modul `svelte/store`.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores gemäß dem Store-Vertrag erstellen, erhalten Sie diese reaktive syntaktische Vereinfachung kostenlos.

## Erstellung der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Diese Arten von Widgets könnten auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Immer wenn eine Benachrichtigung eingeht, übernimmt die `Alert`-Komponente die Aufgabe, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir mit der Erstellung eines beschreibbaren Stores. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird ihn abonnieren und jedes Mal eine Nachricht anzeigen, wenn der Store geändert wird.

1. Erstellen Sie eine neue Datei, `stores.js`, in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie beliebig organisieren können.

Im obigen Code importieren wir die `writable()`-Funktion von `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Willkommen bei der To-Do-Listen-App!" zu erstellen. Wir `exportieren` dann den Store.

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

Lassen Sie uns diesen Code im Detail durchgehen.

- Zunächst importieren wir den `alert`-Store.
- Als Nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, mit der wir einen Rückruf ausführen können, nachdem die Komponente abgebaut wurde.
- Wir erstellen dann eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf oberste Variablen aus dem Markup zugreifen können und sich das DOM jedes Mal entsprechend aktualisiert, wenn sie geändert werden.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir einfach den Wert, den wir erhalten, der lokalen Variable zu, was das Update des DOM der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die sich um das Freigeben des Abonnements kümmert. So abonnieren wir, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu beenden, wenn die Komponente abgebaut wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup, und wenn der Benutzer auf die Warnung klickt, bereinigen wir sie.
- Am Ende fügen wir ein paar CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Dieses Setup ermöglicht es uns, mit Stores auf eine reaktive Weise zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Rückruf ausgeführt. Dort weisen wir einer lokalen Variablen einen neuen Wert zu, und dank der Svelte-Reaktivität werden das gesamte Markup und die reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwendung der Komponente

Verwenden wir jetzt unsere Komponente.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unter der bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die "Willkommen bei der To-Do-Listen-App" sagt](01-alert-message.png)

## Reaktive Stores mit der reaktiven `$store`-Syntax erstellen

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

Das ist zu viel Boilerplate für Svelte! Svelte als Compiler hat mehr Ressourcen, um uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als automatische Abonnierung. Einfach ausgedrückt, Sie müssen den Store nur mit dem `$`-Zeichen voranstellen, und Svelte generiert den Code, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also so ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die Methoden `subscribe()` und `set()` implementieren, wie wir es später tun werden, wird die reaktive `$store`-Syntax auch für Ihre Stores gelten.

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

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` jedes Mal zu aktualisieren, wenn der Inhalt des Stores geändert wird, und das Abonnement zu beenden, wenn die Komponente abgebaut wird. Es wird auch die `alert.set()`-Anweisungen generieren, wenn wir einen Wert `$alert` zuweisen.

Das Endergebnis dieses Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler für eine bessere Entwickler-Ergonomie verantwortlich macht, uns nicht nur das Tippen von Boilerplate erspart, sondern auch weniger anfälligen Code generiert.

## Schreiben in unseren Store

In unseren Store zu schreiben, ist einfach eine Frage des Imports und der Ausführung von `$store = 'neuer Wert'`. Lassen Sie es uns in unserer `Todos`-Komponente verwenden.

1. Fügen Sie die folgende `import`-Anweisung unter den bestehenden ein:

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

4. Aktualisieren Sie die `updateTodo()`-Funktion auf:

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

7. Im Wesentlichen haben wir den Store importiert und ihn bei jedem Ereignis aktualisiert, wodurch jedes Mal eine neue Warnung angezeigt wird. Schauen Sie sich Ihre App erneut an und versuchen Sie, einige Todos hinzuzufügen/löschen/aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb einer beliebigen Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten anfasst. In diesem Fall müssen Sie sich auf die Methoden `store.subscribe()` und `store.set()` verlassen.

## Verbesserung unserer Alert-Komponente

Es ist etwas nervig, jedes Mal auf die Warnung klicken zu müssen, um sie loszuwerden. Es wäre besser, wenn die Benachrichtigung einfach nach ein paar Sekunden verschwinden würde.

Sehen wir, wie das geht. Wir werden eine Eigenschaft mit den Millisekunden angeben, die gewartet werden sollen, bevor die Benachrichtigung gelöscht wird, und wir werden ein Timeout definieren, um die Warnung zu entfernen. Wir kümmern uns auch darum, das Timeout zu löschen, wenn die `Alert`-Komponente deaktiviert wird, um Speicherlecks zu vermeiden.

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

Hier erstellen wir zunächst die Eigenschaft `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine Funktion `onMessageChange()`, die dafür sorgt, ob die Alert sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, diese Funktion jedes Mal auszuführen, wenn sich der `$alert`-Store oder die `ms`-Eigenschaft ändert.

Wann immer sich der `$alert`-Store ändert, bereinigen wir alle ausstehenden Timeouts. Ist `$alert` leer, setzen wir `visible` auf `false` und die `Alert`-Komponente wird aus dem DOM entfernt. Ist sie nicht leer, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um die Warnung nach `ms` Millisekunden zu löschen.

Schließlich rufen wir mit der `onDestroy()`-Lebenszyklusfunktion sicherheitshalber die `clearTimeout()`-Funktion auf.

Wir haben auch ein SVG-Icon über dem Warnparagrafen hinzugefügt, um es ein wenig schöner aussehen zu lassen. Probieren Sie es erneut aus, und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert gut, ist aber nicht sehr freundlich gegenüber unterstützenden Technologien. Das Problem sind Elemente, die dynamisch zur Seite hinzugefügt und entfernt werden. Während sie für visuell fähige Benutzer, die die Seite sehen können, offensichtlich sind, können sie für Benutzer von unterstützenden Technologien wie Bildschirmlesern weniger offensichtlich sein. Um diese Situationen zu meistern, können wir die [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmgesteuert offenzulegen, damit sie von unterstützenden Technologien erkannt und angesagt werden können.

Wir können eine Region deklarieren, die dynamische Inhalte enthält, die von unterstützenden Technologien angesagt werden sollen, mit der Eigenschaft `aria-live` gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmleser Updates dieser Regionen handhaben sollten. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für häufige Situationen gibt es auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall reicht es aus, ein `role="alert"` zum `<div>`-Container hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesern zu testen, nicht nur um Barrierefreiheitsschwierigkeiten zu entdecken, sondern auch, um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Es gibt verschiedene Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, unter anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsschwierigkeiten zu erfahren, schauen Sie sich unser [Barrierefreiheitsmodell](/de/docs/Learn_web_development/Core/Accessibility) an.

## Verwendung des Store-Vertrags, um unsere Todos zu speichern

Unsere kleine App ermöglicht es uns, unsere Todos ziemlich einfach zu verwalten, ist jedoch eher nutzlos, wenn wir bei jedem Neuladen dieselbe hartcodierte Todos-Liste erhalten. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie unsere Todos gespeichert werden können.

Zuerst brauchen wir eine Möglichkeit, wie unsere `Todos`-Komponente die aktualisierten Todos an ihren Elternteil zurückgeben kann. Wir könnten ein aktualisiertes Ereignis mit der Liste der Todos auslösen, es ist jedoch einfacher, die `todos`-Variable zu binden. Öffnen wir `App.svelte` und probieren es aus.

1. Fügen Sie zunächst die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Als Nächstes aktualisieren Sie den `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > [!NOTE] > `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige Todos hinzuzufügen, und wechseln Sie dann zur Webkonsole Ihrer Entwicklerwerkzeuge. Sie werden sehen, dass jede von uns vorgenommene Änderung an unseren Todos im `todos`-Array, das in `App.svelte` definiert ist, dank der `bind`-Anweisung widergespiegelt wird.

Jetzt müssen wir einen Weg finden, diese Todos zu speichern. Wir könnten in unserer `App.svelte`-Komponente etwas Code implementieren, um unsere Todos an [Web Storage](/de/docs/Web/API/Web_Storage_API) zu lesen und zu speichern oder an einen Webdienst.
Aber wäre es nicht besser, wenn wir einige generische Stores entwickeln könnten, die es uns ermöglichen, ihren Inhalt zu speichern? Dies würde es uns ermöglichen, sie genauso wie jeden anderen Store zu verwenden und den Persistenzmechanismus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web-Speicher synchronisiert, und später einen weiteren entwickeln, der gegen einen Webdienst synchronisiert. Das Umschalten zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Speichern unserer Todos

Beginnen wir also mit der Verwendung eines regulären beschreibbaren Stores, um unsere Todos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie einfach daran, dass wir jetzt auf die Todos mit der reaktiven `$todos` `$store`-Syntax zugreifen müssen.

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

3. Probieren Sie es aus; alles sollte funktionieren. Als Nächstes sehen wir, wie wir unsere eigenen benutzerdefinierten Stores implementieren können.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Seine Funktionen müssen wie folgt funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wenn sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die beim Aufruf ihr Abonnement beenden muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und die synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Zuerst fügen wir die folgenden `console.log()`-Anweisungen in unsere `App.svelte`-Komponente ein, um den `todos`-Store und dessen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie etwas wie dies in Ihrer Webkonsole:

![Webkonsole zeigt die Funktionen und Inhalte des todos-Stores](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das `subscribe()`, `set()` und `update()`-Methoden enthält, und `$todos` ist unser Todos-Array.

Zur Referenz hier ein einfach funktionierender Store, der von Grund auf implementiert wurde:

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

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf und übergeben den neuen Wert als Parameter.

Normalerweise implementiert man keine Stores von Grund auf; stattdessen würde man den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere Todo-Listen-App zu komplex wird, könnte unser Todos-Store alle Zustandsmodifikationen behandeln. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, etc.), von unserer `Todos`-Komponente zum Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsmodifikationen angewendet werden, können Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern und reaktiv die Informationen anzuzeigen, die vom Store bereitgestellt werden. Einzigartige Stelle zum Bearbeiten von Zustandsmodifikationen macht es einfacher, den Fluss des Zustands zu verstehen und Probleme zu entdecken.

Svelte zwingt Sie nicht, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es bietet Ihnen einfach die Werkzeuge, um zu entscheiden, wie Sie es handhaben möchten.

### Implementierung unseres benutzerdefinierten Todos-Stores

Unsere Todo-Listen-App ist nicht besonders komplex, wir werden also nicht alle unsere Modifikationsmethoden in einen zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen auf das Persistieren unserer Todos.

> [!NOTE]
> Wenn Sie diese Anleitung mit dem Svelte REPL befolgen, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen funktioniert der Svelte REPL in einer sandbox-Umgebung, die Ihnen nicht erlaubt, auf Web-Storage zuzugreifen, und Sie erhalten einen "The operation is insecure"-Fehler. Um diesen Abschnitt zu folgen, müssen Sie das Repository klonen und zum `mdn-svelte-tutorial/06-stores`-Ordner wechseln, oder Sie können den Ordnerinhalt direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu erstellen, der seinen Inhalt in den Web-Speicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest anfänglich den Wert aus dem Web-Speicher und, wenn er nicht vorhanden ist, initialisiert ihn mit einem Standardwert.
- Wann immer sich der Wert ändert, aktualisiert es den Store selbst und auch die Daten im lokalen Speicher.

Darüber hinaus, da der Web-Speicher nur die Speicherung von Zeichenfolgwerten unterstützt, müssen wir beim Speichern von Objekt in Zeichenfolge umwandeln und umgekehrt, wenn wir den Wert aus dem lokalen Speicher laden.

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

   - Unser `localStore` wird eine Funktion sein, die bei der Ausführung zunächst ihren Inhalt aus dem Web-Speicher liest und ein Objekt mit den drei Methoden `subscribe()`, `set()` und `update()` zurückgibt.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Web-Speichers und einen Anfangswert angeben. Wir checken dann, ob der Wert im Web-Speicher existiert, und, wenn nicht, erstellen wir ihn.
   - Wir verwenden die [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem) Methoden, um Informationen im Web-Speicher zu lesen und zu schreiben, und die [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (welche [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet) Hilfsfunktionen, um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den Zeichenfolgeninhalt, den wir vom Web-Speicher erhalten haben, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir die Inhalte des Stores ändern, auch den Web-Speicher, wobei der Wert in eine Zeichenfolge konvertiert wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten und die Operation hinzugefügt haben, den Wert im Web-Speicher zu speichern. Der Rest des Codes ist überwiegend Initialisierungs- und Konvertierungsstuff.

3. Jetzt werden wir unseren lokalen Store von `stores.js` verwenden, um unseren lokal gespeicherten Todos-Store zu erstellen.

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

   Mit `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store, um die Daten im Web-Speicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir legen auch ein paar Todos als Anfangswerte fest.

4. Befreien wir uns nun von den hartcodierten Todos in `App.svelte`. Aktualisieren Sie den Inhalt wie folgt. Wir löschen im Wesentlichen nur das `$todos`-Array und die `console.log()`-Anweisungen:

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
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist völlig transparent, was die Art von Store betrifft, den wir verwenden.

5. Gehen Sie voraus und probieren Sie Ihre App erneut aus. Erstellen Sie einige Todos und schließen Sie dann den Browser. Sie können den Svelte-Server sogar stoppen und neu starten. Beim erneuten Besuch der URL sind Ihre Todos noch vorhanden.
6. Sie können es auch in den Entwicklerwerkzeugen inspizieren. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen in Ihrer App vor, wie z.B. das Drücken der Schaltfläche _Uncheck All_ und überprüfen Sie den Inhalt des Web-Speichers erneut. Es wird etwas in dieser Art sein:

   ![Todo-App mit Web-<|vq_15904|>anzeigen zur Seite, die zeigt, dass ein Todo in der App geändert wird, und der entsprechende Eintrag im Web-Speicher auch geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber extrem leistungsstarke, Möglichkeit, komplexe Anwendungszustände von einem globalen Datenspeicher in einer reaktiven Weise zu behandeln. Und da Svelte unseren Code kompiliert, kann es die [`$store`-Automatische Abonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores auf dieselbe Weise wie mit lokalen Variablen zu arbeiten. Da Stores ein minimales API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die internen Abläufe des Stores selbst zu abstrahieren.

## Bonus Track: Übergänge

Lassen Sie uns jetzt das Thema wechseln und etwas Spaßiges und Anderes machen: eine Animation zu unseren Alerts hinzufügen. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, sodass wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Anweisung angewendet und wird ausgelöst, wenn ein Element als Ergebnis einer Zustandsänderung in das oder aus dem DOM eintritt.

Lassen Sie uns unserer `Alert`-Komponente einen Fly-`transition`-Effekt hinzufügen. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem Modul `svelte/transition`.

1. Platzieren Sie die folgende `import`-Anweisung unter den bestehenden:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um es zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag wie folgt:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Übergänge können auch Parameter erhalten, wie dies:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > Die doppelten geschweiften Klammern sind keine speziellen Svelte-Syntax. Es ist nur ein literales JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus und Sie werden sehen, dass die Benachrichtigungen jetzt ein bisschen ansprechender aussehen.

> [!NOTE]
> Da Svelte ein Compiler ist, kann es die Größe unseres Bundles optimieren, indem es Funktionen ausschließt, die nicht verwendet werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js`-Datei etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Anweisung entfernen, ist Svelte klug genug zu erkennen, dass die Fly-Funktion nicht verwendet wird, und die `bundle.js`-Dateigröße wird auf nur 18 KB sinken.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen, um mit Animationen und Übergängen umzugehen. Svelte unterstützt auch, unterschiedliche Übergänge anzugeben, die angewendet werden sollen, wenn das Element mit den `in:fn`/`out:fn`-Anweisungen dem DOM hinzugefügt oder daraus entfernt wird, und es ermöglicht Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions)-Übergänge zu definieren. Es hat auch mehrere Easing-Funktionen, um die Änderungsrate im Laufe der Zeit anzugeben. Werfen Sie einen Blick auf den [Easing-Visualizer](https://svelte.dev/examples/easing), um die verschiedenen verfügbaren Easing-Funktionen zu erkunden.

## Der Code bis jetzt

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie so auf Ihre Kopie unseres Repositories zu:

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

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Webspeicher.

- Dies erlaubte uns, einige fortgeschrittene Svelte-Techniken zu präsentieren. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man zustandsübergreifendes Komponentenmanagement mit Stores implementiert. Wir sahen auch, wie man sich automatisch bei Stores abonniert, um sie nahtlos mit dem Svelte-Reaktivitätssystem zu integrieren.
- Dann sahen wir, wie wir unseren eigenen Store von Grund auf neu implementieren und auch den beschreibbaren Store von Svelte erweitern, um Daten im Webspeicher zu speichern.
- Am Ende haben wir uns angeschaut, wie man die Svelte-`transition`-Anweisung verwendet, um Animationen zu DOM-Elementen hinzuzufügen.

Im nächsten Artikel werden wir lernen, wie man TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügt. Um alle Funktionen zu nutzen, werden wir unsere gesamte Anwendung auch auf TypeScript übertragen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
