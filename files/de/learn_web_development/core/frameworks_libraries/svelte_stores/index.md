---
title: Arbeiten mit Svelte Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Handhabung der Reaktivität, zur Arbeit mit DOM-Knoten und zur Exposition von Komponentenfunktionen diskutiert. In diesem Artikel zeigen wir eine weitere Möglichkeit zur Zustandsverwaltung in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte speichern. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernpunkten von
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Befehlszeile</a
          > haben.
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

Mit Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm zeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest – sie ist weder Eltern- noch Kindelement einer anderen –, sodass die Nachrichten nicht in die Komponentenhierarchie passen.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln, um die To-Do-Informationen im [Webspeicher](/de/docs/Web/API/Web_Storage_API) zu speichern, damit unsere To-Dos auch nach einem Neuladen der Seite erhalten bleiben.

## Mit uns mitprogrammieren

### Git

Klone das GitHub-Repository (wenn Sie es noch nicht gemacht haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Status der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns mithilfe des REPL zu programmieren, beginnen Sie bei

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit unserem Anwendungszustand

Wir haben bereits gesehen, wie unsere Komponenten mithilfe von Requisiten, bidirektionaler Datenbindung und Ereignissen miteinander kommunizieren können. In all diesen Fällen haben wir uns mit der Kommunikation zwischen Eltern- und Kindkomponenten befasst.

Aber nicht alle Anwendungszustände gehören in die Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder darüber, ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss Ihr Anwendungszustand von mehreren Komponenten, die nicht hierarchisch verwandt sind, oder von einem normalen JavaScript-Modul aus zugänglich sein.

Darüber hinaus kann es schwierig werden, Komponenten dazu zu bringen, Daten zwischen sich weiterzuleiten, wenn Ihre App kompliziert wird und Ihre Komponentenhierarchie komplex wird. In diesem Fall könnte der Umstieg auf einen globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, sind Ihnen die Arbeitsweisen dieser Art von Speichern vertraut. Svelte Stores bieten ähnliche Funktionen für die Zustandsverwaltung.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Store-Wert ändert, und einer optionalen `set()`-Methode, die es Ihnen ermöglicht, neue Werte für den Store festzulegen. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte stellt Funktionen zum Erstellen von [lesbaren](https://svelte.dev/docs/svelte-store#readable), [beschreibbaren](https://svelte.dev/docs/svelte-store#writable) und [abgeleiteten](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul bereit.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores erstellen, die den Store-Vertrag einhalten, erhalten Sie diesen reaktiven syntaktischen Zucker kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, werden wir eine `Alert`-Komponente erstellen. Diese Arten von Widgets könnten auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Jedes Mal, wenn eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Lassen Sie uns damit beginnen, einen beschreibbaren Store zu erstellen. Jede Komponente kann auf diesen Store schreiben, und die `Alert`-Komponente abonniert ihn und zeigt eine Nachricht an, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei, `stores.js`, in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie auf beliebige Weise organisieren können.

Im obigen Code importieren wir die `writable()`-Funktion aus `svelte/store` und verwenden sie, um einen neuen Store mit dem Namen `alert` mit einem Anfangswert von "Welcome to the to-do list app!" zu erstellen. Anschließend `exportieren` wir den Store.

### Erstellen der eigentlichen Komponente

Erstellen Sie nun unsere `Alert`-Komponente und sehen Sie, wie wir Werte aus dem Store lesen können.

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
     fill: currentColor;
     width: 1.4rem;
     margin-right: 0.5rem;
   }
   </style>
   ```

Gehen wir diesen Code im Detail durch.

- Am Anfang importieren wir den `alert`-Store.
- Als nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, die es uns ermöglicht, einen Rückruf auszuführen, nachdem die Komponente entfernt wurde.
- Wir erstellen dann eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf Variablen auf oberster Ebene aus dem Markup zugreifen können und dass sich der DOM entsprechend aktualisiert, wann immer sie geändert werden.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir einfach den empfangenen Wert der lokalen Variable zu, was die Aktualisierung des DOM der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die sich um die Freigabe des Abonnements kümmert. Wir abonnieren also, wenn die Komponente initialisiert wird, und nutzen `onDestroy`, um das Abonnement zu kündigen, wenn die Komponente entfernt wird.
- Schließlich verwenden wir die `alertContent`-Variable in unserem Markup, und wenn der Benutzer auf die Benachrichtigung klickt, löschen wir sie.
- Am Ende fügen wir ein paar CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Dieses Setup ermöglicht es uns, mit Stores auf eine reaktive Weise zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Rückruf ausgeführt. Dort weisen wir einer lokalen Variable einen neuen Wert zu und dank der Svelte-Reaktivität werden all unser Markup und unsere reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwenden der Komponente

Verwenden wir nun unsere Komponente.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unterhalb der bereits bestehenden ein:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Dann rufen Sie die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die sagt: Willkommen bei der To-Do-Liste-App](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Das funktioniert, aber Sie müssen all diesen Code kopieren und einfügen, jedes Mal wenn Sie einen Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Svelte ist ein Compiler und hat mehr Ressourcen zur Verfügung, um uns das Leben leichter zu machen. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Abonnement. Einfach ausgedrückt, Sie fügen dem Store das `$`-Zeichen hinzu, und Svelte generiert den Code, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die Methoden `subscribe()` und `set()` implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

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

2. Überprüfen Sie Ihre App erneut, und Sie werden sehen, dass dies genauso funktioniert wie zuvor. Das ist viel besser!

Hinter den Kulissen hat Svelte den Code erstellt, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` zu aktualisieren wann immer der Inhalt des Stores geändert wird, und das Abonnement zu beenden, wenn die Komponente entfernt wird. Außerdem wird sie die `alert.set()`-Anweisungen generieren, wann immer wir `$alert` einen Wert zuweisen.

Das Endergebnis dieses nützlichen Tricks ist, dass Sie auf globale Stores zugreifen können, genau so einfach, wie Sie reaktive lokale Variablen verwenden.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler in den Dienst der besseren Bedienbarkeit für Entwickler stellt, uns nicht nur das Tippen von Boilerplate erspart, sondern auch weniger fehleranfälligen Code generiert.

## Schreiben in unseren Store

In unseren Store zu schreiben ist nur eine Frage des Imports und der Ausführung von `$store = 'neuer Wert'`. Verwenden wir ihn in unserer `Todos`-Komponente.

1. Fügen Sie die folgende `import`-Anweisung unter den bestehenden hinzu:

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

5. Fügen Sie den folgenden Reaktivblock unterhalb des Blocks hinzu, der mit `let filter = 'all'` beginnt:

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

7. Im Grunde haben wir den Store importiert und ihn bei jedem Ereignis aktualisiert, was jedes Mal eine neue Benachrichtigung auslösen wird. Sehen Sie sich Ihre App erneut an und versuchen Sie, ein paar To-Dos hinzuzufügen/löschen/aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe in jeder Komponente oder `.js`-Datei machen.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte Compiler nichts außerhalb von Svelte-Komponenten verändert. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist etwas nervig, auf die Benachrichtigung klicken zu müssen, um sie loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwinden würde.

Lassen Sie uns sehen, wie wir das machen können. Wir werden ein Prop mitgeben, das die Millisekunden angibt, die vor dem Löschen der Benachrichtigung gewartet werden sollen, und wir definieren einen Timeout, um die Benachrichtigung zu entfernen. Wir werden auch dafür sorgen, dass der Timeout gelöscht wird, wenn die `Alert`-Komponente entfernt wird, um Speicherlecks zu verhindern.

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

Hier erstellen wir zunächst das Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die für die Kontrolle zuständig ist, ob die Benachrichtigung sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, dass diese Funktion immer dann ausgeführt werden soll, wenn sich der `$alert`-Store oder das `ms`-Prop ändert.

Wann immer sich der `$alert`-Store ändert, reinigen wir jeden ausstehenden Timeout. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und die `Alert` wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um die Benachrichtigung nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()`-Lebenszyklusfunktion sicher, dass die `clearTimeout()`-Funktion aufgerufen wird.

Wir haben auch ein SVG-Icon über dem Benachrichtigungsabsatz hinzugefügt, um es etwas schöner aussehen zu lassen. Probieren Sie es erneut aus, und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert einwandfrei, ist jedoch für unterstützende Technologien nicht sehr nutzerfreundlich. Das Problem sind Elemente, die dynamisch zur Seite hinzugefügt und entfernt werden. Obwohl sie für Benutzer, die die Seite sehen können, offensichtlich sind, sind sie möglicherweise nicht so offensichtlich für Benutzer unterstützender Technologien, wie Bildschirmlesegeräte. Um diese Situationen zu handhaben, können wir von [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Gebrauch machen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch zu exponieren, sodass sie von unterstützenden Technologien erkannt und bekannt gegeben werden können.

Wir können einen Bereich deklarieren, der dynamische Inhalte enthält, die von unterstützenden Technologien bekannt gegeben werden sollen, mit dem `aria-live`-Eigenschaft gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmlesegeräte Aktualisierungen an diesen Bereichen behandeln sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für allgemeine Situationen gibt es auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall reicht es aus, dem `<div>`-Container ein `role="alert"` hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesegeräten zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) unter Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, unter anderem.

Um mehr darüber zu erfahren, wie Barrierefreiheitsprobleme erkannt und behoben werden können, sehen Sie sich unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul an.

## Den Store-Vertrag nutzen, um unsere To-Dos zu speichern

Unsere kleine App ermöglicht es uns, unsere To-Dos ziemlich einfach zu verwalten, ist jedoch ziemlich nutzlos, wenn wir bei jedem Neuladen dieselbe Liste vorgefertigter To-Dos bekommen. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-Dos speichern können.

Zuerst brauchen wir eine Möglichkeit, dass unsere `Todos`-Komponente die aktualisierten To-Dos an ihren Eltern zurückgibt. Wir könnten ein aktualisiertes Ereignis mit der Liste der To-Dos aussenden, aber es ist einfacher, einfach die `todos`-Variable zu binden. Öffnen wir `App.svelte` und probieren wir es aus.

1. Fügen Sie zuerst die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Als nächstes aktualisieren Sie den Aufruf der `Todos`-Komponente wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > [!NOTE]
   > `<Todos bind:todos />` ist einfach ein Shortcut für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, einige To-Dos hinzuzufügen, und gehen Sie dann zu Ihrer Entwicklertools-Webkonsole. Sie werden sehen, dass jede Änderung, die wir an unseren To-Dos vornehmen, dank der `bind`-Direktive im `todos`-Array in `App.svelte` widergespiegelt wird.

Jetzt müssen wir einen Weg finden, diese To-Dos zu speichern. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere To-Dos auf [Web Storage](/de/docs/Web/API/Web_Storage_API) oder auf einen Webdienst zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? So könnten wir ihn genauso wie jeden anderen Store verwenden und den Persistenzmechanismus abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web Storage synchronisiert, und später einen anderen entwickeln, der gegen einen Webdienst synchronisiert. Das Wechseln zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Unsere To-Dos speichern

Beginnen wir also damit, einen regulären beschreibbaren Store zu verwenden, um unsere To-Dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir jetzt, um auf die To-Dos zuzugreifen, die reaktive `$todos`-Syntax verwenden müssen.

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

3. Versuchen Sie es auszuprobieren; alles sollte funktionieren. Als nächstes werden wir sehen, wie man unsere eigenen benutzerdefinierten Stores implementiert.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Seine Merkmale müssen so funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die beim Aufruf das Abonnement beenden muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen wir zuerst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unterhalb des `todos`-Arrays hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, werden Sie so etwas in Ihrer Webkonsole sehen:

![Webkonsole, die die Funktionen und Inhalte des todos-Stores zeigt](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das `subscribe()`, `set()` und `update()`-Methoden enthält, und `$todos` ist unser Array von To-Dos.

Nur zur Referenz, hier ist ein grundlegend funktionierender Store, der von Grund auf neu implementiert wurde:

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

Hier deklarieren wir `subs`, was ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die beim Ausführen den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, indem wir den neuen Wert als Parameter übergeben.

Normalerweise implementieren Sie Stores nicht von Grund auf; stattdessen würden Sie den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der es uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-Do-Liste-App zu komplex wird, könnten wir unseren To-Dos-Store jeden Zustandsmodifikation behandeln lassen. Wir könnten alle Methoden, die das `todo`-Array modifizieren (wie `addTodo()`, `removeTodo()`, etc.) von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustände modifiziert werden, könnten Komponenten einfach diese Methoden aufrufen, um den Anwendungszustand zu ändern, und die Informationen, die vom Store bereitgestellt werden, reaktiv anzeigen. Einen einzigartigen Ort zu haben, um Zustandsmodifikationen zu handhaben, macht es einfacher, über den Zustandsfluss nachzudenken und Probleme zu erkennen.

Svelte wird Sie nicht dazu zwingen, Ihre Zustandsverwaltung auf eine bestimmte Weise zu organisieren; es bietet Ihnen lediglich die Werkzeuge, um zu wählen, wie Sie sie handhaben möchten.

### Implementierung unseres benutzerdefinierten To-Dos-Stores

Unsere To-Do-Liste-App ist nicht besonders komplex, daher werden wir nicht alle unsere Modifikationsmethoden an einem zentralen Ort platzieren. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere To-Dos zu speichern.

> [!NOTE]
> Wenn Sie dieser Anleitung anhand des Svelte REPL folgen, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer sandboxed Umgebung, die Ihnen nicht erlaubt, auf Web Storage zuzugreifen, und Sie werden einen "The operation is insecure"-Fehler erhalten. Um diesem Abschnitt zu folgen, müssen Sie das Repository klonen und in den Ordner `mdn-svelte-tutorial/06-stores` gehen, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt in den Webspeicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Zuerst den Wert aus dem Webspeicher liest und, wenn er nicht vorhanden ist, mit einem Standardwert initialisiert
- Jedes Mal, wenn der Wert modifiziert wird, aktualisiert er selbst den Store und auch die Daten im lokalen Speicher

Darüber hinaus unterstützt der Webspeicher nur das Speichern von Zeichenfolgenwerten, wir müssen also beim Speichern von einem Objekt zu einer Zeichenfolge konvertieren und umgekehrt, wenn wir den Wert aus dem lokalen Speicher laden.

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

   - Unser `localStore` wird eine Funktion sein, die beim Ausführen zuerst ihren Inhalt aus dem Webspeicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Webspeichers und einen Anfangswert angeben. Wir überprüfen dann, ob der Wert im Webspeicher vorhanden ist und erstellen ihn andernfalls.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Webspeicher zu lesen und zu schreiben, und die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet), um die Werte zu konvertieren.
   - Als Nächstes konvertieren wir den Zeichenfolgeninhalt, der aus dem Webspeicher empfangen wird, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich, jedes Mal, wenn wir den Inhalt des Stores aktualisieren, aktualisieren wir auch den Webspeicher mit dem Wert, der in eine Zeichenfolge konvertiert wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir den Vorgang zum Speichern des Wertes im Webspeicher hinzufügen. Der Rest des Codes ist hauptsächlich Initialisieren und Konvertieren von Zeugs.

3. Jetzt werden wir unseren lokalen Store aus `stores.js` verwenden, um unseren lokal gespeicherten To-Dos-Store zu erstellen.

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

   Durch die Verwendung von `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store so, dass er die Daten im Webspeicher unter dem Schlüssel `mdn-svelte-todo` speichert. Wir setzen auch ein paar To-Dos als Anfangswerte.

4. Lassen Sie uns nun die hartcodierten To-Dos in `App.svelte` loswerden. Aktualisieren Sie deren Inhalt wie folgt. Im Grunde löschen wir einfach das `$todos`-Array und die `console.log()`-Anweisungen:

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
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist völlig transparent, welche Art von Store wir verwenden.

5. Gehen Sie voran und versuchen Sie Ihre App erneut. Erstellen Sie ein paar To-Dos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Besuch der URL werden Ihre To-Dos immer noch da sein.
6. Sie können es auch in der DevTools-Konsole überprüfen. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Machen Sie einige Änderungen an Ihrer App, wie z.B. den _Alle deaktivieren_-Button zu drücken, und überprüfen Sie den Inhalt des Webspeichers noch einmal. Sie werden etwas wie dies erhalten:

   ![To-Do-App mit Webkonsole neben ihr, die zeigt, dass wenn ein To-Do in der App geändert wird, der entsprechende Eintrag im Webspeicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte Stores bieten eine sehr einfache und leichte, aber extrem leistungsfähige Möglichkeit, komplexe Anwendungszustände aus einem globalen Datenspeicher auf eine reaktive Weise zu handhaben. Und weil Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Abonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores genauso zu arbeiten wie mit lokalen Variablen. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Arbeitsweisen des Stores selbst zu abstrahieren.

## Bonusstrecke: Übergänge

Ändern wir jetzt das Thema und machen etwas Spaßiges und Anderes: eine Animation zu unseren Alerts hinzufügen. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird durch ein Element ausgelöst, das als Ergebnis einer Zustandsänderung in den DOM eintritt oder ihn verlässt.

Lassen Sie uns unserer `Alert`-Komponente einen `fly`-Übergang geben. Wir werden die `Alert.svelte`-Datei öffnen und die `fly`-Funktion aus dem `svelte/transition`-Modul importieren.

1. Setzen Sie die folgende `import`-Anweisung unter die bestehende:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um es zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag so:

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
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es ist einfach ein literales JavaScript-Objekt, das als Parameter an den `fly`-Übergang übergeben wird.

3. Versuchen Sie Ihre App erneut, und Sie werden sehen, dass die Benachrichtigungen nun ein bisschen ansprechender aussehen.

> [!NOTE]
> Als Compiler kann Svelte die Größe unseres Bündels optimieren, indem unbenutzte Funktionen ausgeschlossen werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js`-Datei ein wenig weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte schlau genug, um zu erkennen, dass die `fly`-Funktion nicht verwendet wird, und die `bundle.js`-Dateigröße wird auf nur 18 KB abfallen.

Das ist nur die Spitze des Eisbergs. Svelte bietet viele Optionen für den Umgang mit Animationen und Übergängen. Svelte unterstützt auch die Angabe verschiedener Übergänge, die angewendet werden sollen, wenn das Element mit den `in:fn`/`out:fn`-Direktiven dem DOM hinzugefügt oder daraus entfernt wird, und es erlaubt Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) zu definieren. Es hat auch mehrere Ease-Funktionen, um die Änderungsrate über die Zeit zu spezifizieren. Werfen Sie einen Blick auf den [Ease-Visualizer](https://svelte.dev/examples/easing), um die verschiedenen verfügbaren Ease-Funktionen zu erkunden.

## Der Code bis jetzt

### Git

Um den Codezustand zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

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

- Dadurch konnten wir einige fortgeschrittene Svelte-Techniken zeigen. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man komponentenübergreifende Zustandsverwaltung mit Stores implementiert. Wir sahen auch, wie man automatisch zu Stores abonniert, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann sahen wir, wie man unseren eigenen Store von Grund auf implementiert, und auch, wie man Sveltes beschreibbaren Store erweitert, um Daten im Webspeicher zu speichern.
- Am Ende haben wir uns angesehen, wie man die Svelte-Übergangs-Direktive verwendet, um Animationen auf DOM-Elementen zu implementieren.

Im nächsten Artikel werden wir lernen, wie man TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügt. Um alle Funktionen zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
