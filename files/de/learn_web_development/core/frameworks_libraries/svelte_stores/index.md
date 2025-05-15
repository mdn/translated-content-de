---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Behandlung von Reaktivität, Arbeiten mit DOM-Knoten und Bereitstellen von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir eine weitere Möglichkeit, das State-Management in Svelte zu handhaben: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte speichern. Komponenten können sich bei Stores anmelden und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut zu sein und Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Befehlszeile</a
          > zu haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Erfahren Sie, wie man Svelte-Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Hilfe von Stores erstellen wir eine `Alert`-Komponente, die Benachrichtigungen auf dem Bildschirm anzeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest – sie ist weder Eltern- noch Kindkomponente – daher passen die Nachrichten nicht in die Komponenten-Hierarchie.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln können, um die To-do-Informationen im [Web-Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern und damit über Seiten-Reloads hinweg zu erhalten.

## Coden Sie mit uns

### Git

Klonen Sie das GitHub-Repository (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit uns im REPL zu coden, beginnen Sie bei

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit unserem App-State

Wir haben bereits gesehen, wie unsere Komponenten über Props, bidirektionale Datenbindung und Events miteinander kommunizieren können. In all diesen Fällen haben wir mit der Kommunikation zwischen Eltern- und Kindkomponenten umgegangen.

Aber nicht alle Anwendungszustände gehören in die Komponenten-Hierarchie Ihrer Anwendung. Beispielsweise Informationen über den eingelogten Benutzer oder ob das dunkle Thema ausgewählt ist.

Manchmal muss auf Ihren Anwendungszustand von mehreren Komponenten zugegriffen werden, die nicht hierarchisch verwandt sind, oder von einem regulären JavaScript-Modul.

Wenn Ihre App dann kompliziert wird und Ihre Komponenten-Hierarchie komplex ist, kann es zu schwierig werden, dass Komponenten Daten zwischen sich weiterleiten. In diesem Fall könnte der Wechsel zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, sind Sie mit der Funktionsweise dieser Art von Speicher vertraut. Svelte-Stores bieten ähnliche Funktionen für das State-Management.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Store-Wert ändert, und einer optionalen `set()`-Methode, die es Ihnen ermöglicht, neue Werte für den Store festzulegen. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte bietet Funktionen zum Erstellen von [lesbaren](https://svelte.dev/docs/svelte-store#readable), [beschreibbaren](https://svelte.dev/docs/svelte-store#writable) und [abgeleiteten](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores erstellen und den Store-Vertrag einhalten, erhalten Sie dieses reaktive Syntactic Sugar kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, erstellen wir eine `Alert`-Komponente. Diese Art von Widgets könnte auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Immer wenn eine Benachrichtigung eintrifft, wird die `Alert`-Komponente dafür zuständig sein, sie auf dem Bildschirm darzustellen.

### Erstellen eines Stores

Beginnen wir mit der Erstellung eines beschreibbaren Stores. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente wird sich bei ihm anmelden und eine Nachricht anzeigen, wann immer der Store modifiziert wird.

1. Erstellen Sie eine neue Datei `stores.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, so dass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die Funktion `writable()` aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Willkommen in der To-do-Listen-App!" zu erstellen. Dann `exportieren` wir den Store.

### Erstellen der eigentlichen Komponente

Erstellen wir jetzt unsere `Alert`-Komponente und sehen, wie wir Werte aus dem Store lesen können.

1. Erstellen Sie eine weitere neue Datei mit dem Namen `src/components/Alert.svelte`.
2. Geben Sie ihr folgenden Inhalt:

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

Lassen Sie uns diese Codezeile im Detail durchgehen.

- Am Anfang importieren wir den `alert`-Store.
- Dann importieren wir die `onDestroy()`-Lebenszyklusfunktion, die es uns ermöglicht, einen Callback auszuführen, nachdem die Komponente entladen wurde.
- Wir erstellen dann eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf top-level-Variablen aus dem Markup zugreifen können und wann immer sie modifiziert werden, aktualisiert sich das DOM entsprechend.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Callback-Funktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Callback-Funktion mit dem neuen Wert als Parameter aufgerufen. In der Callback-Funktion weisen wir den empfangenen Wert der lokalen Variable zu, was die Aktualisierung des DOMs der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Aufräumfunktion zurück, die sich um die Beendigung des Abonnements kümmert. So abonnieren wir, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um sich abzumelden, wenn die Komponente entladen wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup, und wenn der Benutzer auf das Alert klickt, löschen wir es.
- Am Ende fügen wir einige CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu gestalten.

Diese Einrichtung ermöglicht es uns, mit Stores auf reaktive Weise zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Callback ausgeführt. Dort weisen wir einer lokalen Variable einen neuen Wert zu und dank der Svelte-Reaktivität werden all unser Markup und alle reaktiven Abhängigkeiten entsprechend aktualisiert.

### Verwenden der Komponente

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Import-Anweisung unter den bestehenden ein:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie jetzt Ihre Test-App neu, und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um es zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App mit dem Text willkommen in der To-do-Listen-App](01-alert-message.png)

## Stores mit der reaktiven `$store`-Syntax reaktiv machen

Das funktioniert, aber Sie müssen diesen Code jedes Mal kopieren und einfügen, wenn Sie sich bei einem Store anmelden möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Mittel, um uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription. Einfach ausgedrückt, Sie setzen einfach das `$`-Zeichen vor den Store, und Svelte generiert den Code, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann so ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` ist vollständig reaktiv. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir es später tun werden, gilt die reaktive `$store`-Syntax auch für Ihre Stores.

1. Wenden wir dies nun auf unsere `Alert`-Komponente an. Aktualisieren Sie die `<script>`- und Markup-Abschnitte von `Alert.svelte` wie folgt:

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

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass dies genauso funktioniert wie zuvor. Das ist viel besser!

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` jedes Mal zu aktualisieren, wenn der Inhalt des Stores modifiziert wird, und sich abzumelden, wenn die Komponente entladen wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir `$alert` einen Wert zuweisen.

Das Endergebnis dieses schlauen Tricks ist, dass Sie auf globale Stores genauso leicht zugreifen können wie auf reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler verantwortlich für eine bessere Entwickler-Ergonomie macht, nicht nur, um uns von der Eingabe von Boilerplate zu befreien, sondern auch weniger fehleranfälligen Code zu generieren.

## Schreiben in unseren Store

In unseren Store zu schreiben ist nur eine Frage des Importierens und Ausführens von `$store = 'neuer Wert'`. Lassen Sie es uns in unserer `Todos`-Komponente verwenden.

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

4. Aktualisieren Sie die `updateTodo()`-Funktion zu folgendem:

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

7. Grundsätzlich haben wir den Store importiert und bei jedem Event aktualisiert, was jedes Mal eine neue Benachrichtigung verursacht. Schauen Sie sich Ihre App erneut an und versuchen Sie, einige To-dos hinzuzufügen/löschen/zu aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des Alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten berühren wird. In diesem Fall müssen Sie auf die `store.subscribe()`- und `store.set()`-Methoden zurückgreifen.

## Verbesserung unserer Alert-Komponente

Es ist ein wenig nervig, auf das Alert klicken zu müssen, um es loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwinden würde.

Sehen wir uns an, wie das geht. Wir werden ein Prop mit den Millisekunden angeben, die gewartet werden sollen, bevor die Benachrichtigung gelöscht wird, und wir definieren einen Timeout, um das Alert zu entfernen. Wir werden auch darauf achten, den Timeout zu löschen, wenn die `Alert`-Komponente entladen wird, um Speicherlecks zu verhindern.

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

Hier erstellen wir zuerst das Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die dafür sorgt, ob das Alert sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, diese Funktion immer dann auszuführen, wenn sich der `$alert`-Store oder das `ms`-Prop ändert.

Wann immer sich der `$alert`-Store ändert, löschen wir alle ausstehenden Timeouts. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und das Alert wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die `setTimeout()`-Funktion, um das Alert nach `ms` Millisekunden zu löschen.

Schließlich verwenden wir mit der `onDestroy()`-Lebenszyklusfunktion die `clearTimeout()`-Funktion.

Wir haben auch ein SVG-Ikon über dem Alert-Absatz hinzugefügt, um es etwas hübscher zu machen. Probieren Sie es erneut aus und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert gut, ist aber nicht sehr benutzerfreundlich für unterstützende Technologien. Das Problem sind Elemente, die dynamisch hinzugefügt und von der Seite entfernt werden. Sie sind visuell offensichtlich für Benutzer, die die Seite sehen können, aber möglicherweise nicht so offensichtlich für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Um diese Situationen zu bewältigen, können wir [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch so offenzulegen, dass sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können einen Bereich deklarieren, der dynamische Inhalte enthält, die von unterstützenden Technologien angekündigt werden sollten, indem wir die Eigenschaft `aria-live` mit der Darstellungsstufe verwenden, die die Priorität festlegt, mit der Bildschirmlesegeräte Aktualisierungen dieses Bereichs behandeln sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für allgemeine Situationen stehen Ihnen auch mehrere vordefinierte spezialisierte `role`-Werte zur Verfügung, die wie `log`, `status` und `alert` verwendet werden können.

In unserem Fall reicht es aus, ein `role="alert"` in den `<div>`-Container einfügen, wie dies:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesern zu testen, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch, um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux, und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, unter anderen Optionen.

Um mehr über die Erkennung und Behebung von Barrierefreiheitsproblemen zu erfahren, schauen Sie sich unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul an.

## Verwenden des Store-Vertrags zur Speicherung unserer To-dos

Unsere kleine App ermöglicht es uns recht einfach, unsere To-dos zu verwalten, ist aber nicht besonders nützlich, wenn wir immer dieselbe festcodierte To-do-Liste erhalten, wenn wir sie neu laden. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-dos speichern können.

Zuerst brauchen wir eine Möglichkeit, für unsere `Todos`-Komponente, die aktualisierten To-dos an ihren Eltern zurückzugeben. Wir könnten ein aktualisiertes Event mit der Liste der To-dos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Öffnen wir `App.svelte` und probieren es aus.

1. Fügen Sie als erstes die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zu Ihrer App zurück, versuchen Sie, einige To-dos hinzuzufügen, und öffnen Sie dann die Konsole der Entwicklerwerkzeuge Ihres Webbrowsers. Sie werden sehen, dass jede Änderung, die wir an unseren To-dos vornehmen, dank der Binddirektive im `todos`-Array in `App.svelte` reflektiert wird.

Jetzt müssen wir eine Möglichkeit finden, diese To-dos zu speichern. Wir könnten in unserer `App.svelte`-Komponente etwas Code implementieren, um unsere To-dos in den [Web-Speicher](/de/docs/Web/API/Web_Storage_API) oder einen Webdienst zu lesen und zu speichern.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der uns erlaubt, seinen Inhalt zu speichern? Dadurch könnten wir ihn wie jeden anderen Store verwenden und den Speichermodus abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web-Speicher synchronisiert, und später einen weiteren entwickeln, der gegen einen Webservice synchronisiert. Das Umschalten zwischen ihnen wäre trivial und wir müssten `App.svelte` gar nicht berühren.

### Speichern unserer To-dos

Fangen wir also damit an, einen regulären beschreibbaren Store zu verwenden, um unsere To-dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unterhalb des bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir zum Zugriff auf die To-dos jetzt die reaktive `$todos`-Syntax verwenden müssen.

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

3. Probieren Sie es aus; alles sollte funktionieren. Als Nächstes schauen wir uns an, wie Sie Ihre eigenen benutzerdefinierten Stores implementieren können.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne auf `svelte/store` angewiesen zu sein, indem Sie den Store-Vertrag implementieren. Ihre Funktionen müssen wie folgt arbeiten:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die eine Abonnementfunktion als Argument akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, sobald sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die beim Aufruf das Abonnement stoppen muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die einen neuen Wert für den Store als Argument akzeptieren muss und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen Sie zunächst die folgenden `console.log()`-Anweisungen in unsere `App.svelte`-Komponente ein, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unter dem `todos`-Array hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie in Ihrer Webkonsole etwas in dieser Art:

![Webkonsole, die die Funktionen und Inhalte des todos-Stores anzeigt](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das die Methoden `subscribe()`, `set()` und `update()` enthält, und `$todos` ist unser Array von To-dos.

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

Hier deklarieren wir `subs`, das ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die beim Ausführen den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf und übergeben den neuen Wert als Parameter.

In der Regel implementiert man Stores nicht von Grund auf neu; stattdessen würde man den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Counter-Store, der es uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-do-Listen-App zu komplex wird, könnten wir unseren To-dos-Store dazu bringen, jede Zustandsänderung zu handhaben. Wir könnten alle Methoden, die das `todo`-Array modifizieren (wie `addTodo()`, `removeTodo()`, etc.), von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Zustandsmodifikationen angewendet werden, könnten Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern und reaktiv die vom Store bereitgestellten Informationen anzuzeigen. Einen einzigartigen Ort zu haben, um Zustandsmodifikationen zu behandeln, macht es einfacher, den Datenfluss zu verstehen und Probleme zu erkennen.

Svelte wird Sie nicht zwingen, Ihr Zustandsmanagement auf eine bestimmte Weise zu organisieren; es bietet nur die Werkzeuge, um Ihnen die Wahl zu lassen, wie Sie es handhaben möchten.

### Implementierung unseres benutzerdefinierten To-dos-Stores

Unsere To-do-Listen-App ist nicht besonders komplex, also werden wir nicht alle unsere Modifikationsmethoden an einen zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen auf das Speichern unserer To-dos.

> [!NOTE]
> Wenn Sie dieser Anleitung im Svelte REPL folgen, werden Sie diesen Schritt nicht abschließen können. Aus Sicherheitsgründen funktioniert der Svelte REPL in einer Sandbox-Umgebung, die Ihnen den Zugriff auf den Web-Speicher nicht erlaubt, und Sie erhalten einen "Die Operation ist unsicher"-Fehler. Um diesem Abschnitt folgen zu können, müssen Sie das Repository klonen und in den `mdn-svelte-tutorial/06-stores`-Ordner gehen, oder Sie können den Inhalt des Ordners direkt mit `npx degit opensas/mdn-svelte-tutorial/06-stores` herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt in den Web-Speicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest zunächst den Wert aus dem Web-Speicher und initialisiert ihn mit einem Standardwert, falls er nicht vorhanden ist
- Jedes Mal, wenn der Wert geändert wird, aktualisiert er sowohl den Store selbst als auch die Daten im lokalen Speicher

Darüber hinaus, da der Web-Speicher nur das Speichern von Zeichenfolgenwerten unterstützt, müssen wir beim Speichern von Objekt zu Zeichenfolge und umgekehrt beim Laden des Wertes aus dem lokalen Speicher konvertieren.

1. Erstellen Sie eine neue Datei namens `localStore.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr folgenden Inhalt:

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

   - Unser `localStore` wird eine Funktion sein, die beim Ausführen zunächst ihren Inhalt aus dem Web-Speicher liest und ein Objekt mit drei Methoden: `subscribe()`, `set()` und `update()` zurückgibt.
   - Wenn wir ein neues `localStore` erstellen, müssen wir den Schlüssel des Web-Speichers und einen Anfangswert angeben. Dann überprüfen wir, ob der Wert im Web-Speicher vorhanden ist und, falls nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen im Web-Speicher zu lesen und zu schreiben, und die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (welche [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet), um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den Zeichenfolgeninhalt, der aus dem Web-Speicher empfangen wird, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir jedes Mal, wenn wir den Inhalt des Stores aktualisieren, auch den Web-Speicher mit dem in eine Zeichenfolge konvertierten Wert.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten und die Operation zum Speichern des Wertes im Web-Speicher hinzugefügt haben. Der Rest des Codes ist größtenteils Initialisierung und Konvertierung.

3. Jetzt verwenden wir unseren lokalen Store von `stores.js`, um unseren lokal gespeicherten To-dos-Store zu erstellen.

   Aktualisieren Sie `stores.js` folgendermaßen:

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

   Mit `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store, die Daten im Web-Speicher unter dem Schlüssel `mdn-svelte-todo` zu speichern. Wir haben auch einige To-dos als anfängliche Werte gesetzt.

4. Lassen Sie uns nun die festcodierten To-dos in `App.svelte` loswerden. Aktualisieren Sie seinen Inhalt wie folgt. Wir löschen im Grunde nur das `$todos`-Array und die `console.log()`-Anweisungen:

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

5. Gehen Sie weiter und testen Sie Ihre App erneut. Erstellen Sie ein paar To-dos und schließen dann den Browser. Sie können sogar den Svelte-Server stoppen und erneut starten. Beim erneuten Besuch der URL werden Ihre To-dos immer noch da sein.
6. Sie können es auch in den DevTools in der Konsole überprüfen. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, zum Beispiel indem Sie auf die Schaltfläche _Uncheck All_ klicken, und überprüfen Sie den Inhalt des Web-Speichers noch einmal. Sie erhalten etwas wie dieses:

   ![To-do-App mit Webkonsole daneben, zeigt, dass wenn ein To-do in der App geändert wird, der entsprechende Eintrag im Web-Speicher geändert wird](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber extrem leistungsfähige Möglichkeit, komplexen App-State aus einem globalen Datenspeicher reaktiv zu handhaben. Und da Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores auf die gleiche Weise wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Funktionalitäten des Stores selbst zu abstrahieren.

## Bonus-Feature: Transitionen

Lassen Sie uns das Thema wechseln und etwas Spaß und anderes machen: eine Animation zu unseren Benachrichtigungen hinzufügen. Svelte bietet ein ganzes Modul, um [Transitionen](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Eine Transition wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn)-Direktive angewendet und wird ausgelöst, wenn ein Element als Ergebnis einer Zustandsänderung in das oder aus dem DOM eintritt oder es verlässt.

Lassen Sie uns unserer `Alert`-Komponente ein Fly-`transition` geben. Wir öffnen die `Alert.svelte`-Datei und importieren die Funktion `fly` aus dem Modul `svelte/transition`.

1. Setzen Sie die folgende `import`-Anweisung unter die bestehende:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um es zu verwenden, aktualisieren Sie Ihren öffnenden `<div>`-Tag wie folgt:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly
   >
   ```

   Transitionen können auch Parameter erhalten, so:

   ```svelte
   <div role="alert" on:click={() => visible = false}
     transition:fly="\{{delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5}}"
   >
   ```

   > [!NOTE]
   > Die doppelte geschweifte Klammern sind keine spezielle Svelte-Syntax. Es handelt sich nur um ein literals JavaScript-Objekt, das als Parameter an die Fly-Transition übergeben wird.

3. Probieren Sie Ihre App erneut aus, und Sie werden sehen, dass die Benachrichtigungen jetzt etwas ansprechender aussehen.

> [!NOTE]
> Da Svelte ein Compiler ist, kann es die Größe unseres Bundles optimieren, indem Funktionen, die nicht verwendet werden, ausgeschlossen werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere Datei `public/build/bundle.js` etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte schlau genug, um zu erkennen, dass die Fly-Funktion nicht verwendet wird, und die Größe der `bundle.js`-Datei sinkt auf nur 18 KB.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen, um mit Animationen und Transitionen umzugehen. Svelte unterstützt auch die Angabe unterschiedlicher Transitionen, die beim Hinzufügen oder Entfernen des Elements aus dem DOM mit den Direktiven `in:fn`/`out:fn` angewendet werden sollen, und es ermöglicht Ihnen auch, Ihre eigenen [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions)- und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions)-Transitionen zu definieren. Es gibt auch eine Vielzahl von Easing-Funktionen, um die Geschwindigkeit der Veränderung im Laufe der Zeit zu spezifizieren. Schauen Sie sich den [Ease-Visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbaren Ease-Funktionen zu erkunden.

## Der Code bis jetzt

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels aussehen muss, greifen Sie auf Ihre Kopie unseres Repos so zu:

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

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Web-Speicher.

- Dies ermöglichte es uns, einige fortgeschrittene Svelte-Techniken zu zeigen. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man komponentenübergreifendes State-Management mit Stores implementiert. Wir haben auch gesehen, wie man sich automatisch bei Stores anmeldet, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann haben wir gesehen, wie man seinen eigenen Store von Grund auf neu implementiert und auch, wie man Sveltes beschreibbaren Store erweitern kann, um Daten im Web-Speicher zu speichern.
- Am Ende haben wir uns angesehen, wie man mit der Svelte-`transition`-Direktive Animationen an DOM-Elementen implementiert.

Im nächsten Artikel lernen wir, wie Sie Ihrer Svelte-Anwendung TypeScript-Unterstützung hinzufügen können. Um alle Funktionen zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript umstellen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
