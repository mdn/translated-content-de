---
title: Arbeiten mit Svelte-Stores
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_stores
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Svelte Artikel werden nicht mehr gepflegt und von der Website in 3 Monaten entfernt (bis zum 20. August 2026). Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Siehe [diese Diskussion](https://github.com/orgs/mdn/discussions/827) für weitere Informationen.

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Handhabung von Reaktivität, zur Arbeit mit DOM-Knoten und zur Bereitstellung von Komponentenfunktionen besprochen. In diesem Artikel zeigen wir eine weitere Möglichkeit zur Verwaltung von Zuständen in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Daten-Repositorys, die Werte speichern. Komponenten können sich auf Stores abonnieren und Benachrichtigungen erhalten, wenn sich ihre Werte ändern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Svelte-Stores verwendet</td>
    </tr>
  </tbody>
</table>

Mit Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm zeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest - sie ist weder Elternteil noch Kind einer anderen - sodass die Nachrichten nicht in die Komponenten-Hierarchie passen.

Wir werden auch sehen, wie wir unseren eigenen benutzerdefinierten Store entwickeln, um die To-Do-Informationen im [Web-Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, sodass unsere To-Dos bei Seitenaktualisierungen erhalten bleiben.

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Status der App zu gelangen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um mit dem REPL gemeinsam mit uns zu coden, beginnen Sie bei

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit unserem App-Zustand

Wir haben bereits gesehen, wie unsere Komponenten miteinander mit Props, bidirektionaler Datenbindung und Ereignissen kommunizieren können. In all diesen Fällen haben wir es mit der Kommunikation zwischen Eltern- und Kindkomponenten zu tun gehabt.

Aber nicht alle Anwendungszustände gehören in die Komponenten-Hierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das dunkle Thema ausgewählt ist.

Manchmal muss Ihr App-Zustand von mehreren nicht hierarchisch verwandten Komponenten oder von einem regulären JavaScript-Modul aus zugänglich sein.

Außerdem kann es schwierig werden, wenn Ihre App komplex wird und Ihre Komponenten-Hierarchie zu kompliziert wird, um Daten zwischen den Komponenten zu übermitteln. In diesem Fall könnte der Umstieg auf einen globalen Daten-Store eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, werden Sie mit der Funktionsweise eines solchen Stores vertraut sein. Svelte-Stores bieten ähnliche Funktionen zur Zustandsverwaltung.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Wert des Stores ändert, und einer optionalen `set()`-Methode, mit der Sie neue Werte für den Store festlegen können. Diese minimale API ist als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bekannt.

Svelte bietet Funktionen zum Erstellen von [lesbaren](https://svelte.dev/docs/svelte-store#readable), [beschreibbaren](https://svelte.dev/docs/svelte-store#writable) und [abgeleiteten](https://svelte.dev/docs/svelte-store#derived) Stores im `svelte/store`-Modul.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem es die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet. Wenn Sie Ihre eigenen Stores unter Einhaltung des Store-Vertrags erstellen, erhalten Sie dieses reaktive syntaktische Zucker für lau.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, werden wir eine `Alert`-Komponente erstellen. Diese Art von Widgets könnte auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an sie senden. Wann immer eine Benachrichtigung eintrifft, ist die `Alert`-Komponente dafür verantwortlich, sie auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir damit, einen beschreibbaren Store zu erstellen. Jede Komponente kann in diesen Store schreiben, und die `Alert`-Komponente abonniert ihn und zeigt eine Nachricht an, wenn der Store modifiziert wird.

1. Erstellen Sie eine neue Datei `stores.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Welcome to the to-do list app!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die `writable()`-Funktion aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Willkommen zur To-Do-Liste-App!" zu erstellen. Dann `exportieren` wir den Store.

### Die eigentliche Komponente erstellen

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

Lassen Sie uns diesen Codeausschnitt im Detail durchgehen.

- Am Anfang importieren wir den `alert` Store.
- Als nächstes importieren wir die `onDestroy()`-Lebenszyklusfunktion, die es uns ermöglicht, einen Rückruf auszuführen, nachdem die Komponente aus dem Speicher entfernt wurde.
- Wir erstellen dann eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir von der Markup-Ebene aus auf Variablen zugreifen können und wann immer sie modifiziert werden, aktualisiert sich auch das DOM entsprechend.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Wann immer sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir den Wert, den wir erhalten, einfach der lokalen Variable zu, was die Aktualisierung des DOMs der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Bereinigungsfunktion zurück, die für das Aufheben des Abonnements zuständig ist. Daher abonnieren wir, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement aufzuheben, wenn die Komponente aus dem Speicher entfernt wird.
- Schließlich verwenden wir die `alertContent`-Variable in unserem Markup, und wenn der Benutzer auf den Alert klickt, löschen wir ihn.
- Am Ende fügen wir einige CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Dieses Setup ermöglicht es uns, mit Stores auf reaktive Weise zu arbeiten. Wenn sich der Wert des Stores ändert, wird der Rückruf ausgeführt. Dort weisen wir einer lokalen Variable einen neuen Wert zu und dank der Svelte-Reaktivität werden all unser Markup und unsere reaktiven Abhängigkeiten entsprechend aktualisiert.

### Die Komponente verwenden

Lassen Sie uns nun unsere Komponente verwenden.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unterhalb der bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie Ihre Test-App jetzt, und Sie sollten die `Alert`-Nachricht auf dem Bildschirm sehen. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App, die willkommen zur To-Do-Liste-App sagt](01-alert-message.png)

## Reaktive Stores mit der reaktiven `$store`-Syntax erstellen

Das funktioniert, aber Sie müssten all diesen Code jedes Mal kopieren und einfügen, wenn Sie sich auf einen Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Als Compiler hat Svelte mehr Ressourcen, um unser Leben einfacher zu machen. In diesem Fall liefert Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription. Einfach ausgedrückt, Sie setzen nur das `$`-Zeichen vor den Store und Svelte erzeugt den Code, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann so ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollkommen reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die `subscribe()`- und `set()`-Methoden implementieren, wie wir später tun werden, wird die reaktive `$store`-Syntax auch auf Ihre Stores angewendet.

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

Hinter den Kulissen hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert` Store zu abonnieren, `$alert` bei jeder Änderung des Store-Inhalts zu aktualisieren und das Abonnement aufzuheben, wenn die Komponente aus dem Speicher genommen wird. Außerdem werden die `alert.set()`-Anweisungen generiert, wann immer wir einen Wert `$alert` zuweisen.

Das Endergebnis dieses raffinierten Tricks ist, dass Sie auf globale Stores genauso einfach zugreifen können, als ob Sie reaktive lokale Variablen verwenden.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler für bessere Entwickler-Ergonomien verantwortlich macht, uns nicht nur vor der Eingabe von Boilerplate-Code bewahrt, sondern auch weniger fehleranfälligen Code generiert.

## In unseren Store schreiben

In unseren Store zu schreiben ist nur eine Frage des Imports und der Ausführung von `$store = 'neuer Wert'`. Lassen Sie uns es in unserer `Todos`-Komponente verwenden.

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

4. Aktualisieren Sie die `updateTodo()`-Funktion auf diese Weise:

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

7. Grundsätzlich haben wir den Store importiert und ihn bei jedem Ereignis aktualisiert, was dazu führt, dass jedes Mal ein neuer Alert angezeigt wird. Schauen Sie sich Ihre App erneut an und versuchen Sie, einige To-Dos hinzuzufügen/löschen/aktualisieren!

Sobald wir `$alert = …` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Das liegt daran, dass der Svelte-Compiler nichts außerhalb von Svelte-Komponenten berühren wird. In diesem Fall müssen Sie sich auf die `store.subscribe()`- und `store.set()`-Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist ein bisschen nervig, auf den Alert klicken zu müssen, um ihn loszuwerden. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden einfach verschwinden würde.

Lassen Sie uns sehen, wie wir das machen. Wir geben eine Prop mit den Millisekunden an, die vergehen sollen, bevor die Benachrichtigung gelöscht wird, und wir definieren ein Timeout, um den Alert zu entfernen. Wir kümmern uns auch darum, das Timeout zu löschen, wenn die `Alert`-Komponente abmontiert wird, um Speicherlecks zu vermeiden.

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

Hier erstellen wir zuerst die Prop `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die sich darum kümmert, ob der Alert sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` sagen wir Svelte, dass diese Funktion jedes Mal ausgeführt wird, wenn sich der `$alert` Store oder die `ms` Prop ändert.

Wann immer sich der `$alert` Store ändert, löschen wir jedes anstehende Timeout. Wenn `$alert` leer ist, setzen wir `sichtbar` auf `false` und das `Alert` wird aus dem DOM entfernt. Ist er nicht leer, setzen wir `sichtbar` auf `true` und verwenden die `setTimeout()`-Funktion, um den Alert nach `ms` Millisekunden zu löschen.

Schließlich stellen wir mit der `onDestroy()`-Lebenszyklusfunktion sicher, dass wir die `clearTimeout()`-Funktion aufrufen.

Wir haben auch ein SVG-Icon oberhalb des Alert-Paragraphen hinzugefügt, um ihn etwas hübscher aussehen zu lassen. Versuchen Sie es erneut, und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert gut, aber sie ist nicht sehr benutzerfreundlich für unterstützende Technologien. Das Problem sind Elemente, die dynamisch zur und von der Seite hinzugefügt bzw. entfernt werden. Während sie für Benutzer, die die Seite sehen können, visuell offensichtlich sind, sind sie möglicherweise nicht so offensichtlich für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Um diese Situationen zu handhaben, können wir [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch offenzulegen, damit sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können eine Region deklarieren, die dynamischen Inhalt enthält, der von unterstützenden Technologien angekündigt werden sollte, mit der `aria-live`-Eigenschaft gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmlesegeräte Updates für diese Regionen behandeln sollten. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für gängige Situationen haben Sie auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall genügt es, dem `<div>`-Container ein `role="alert"` hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist das Testen Ihrer Anwendungen mit Bildschirmlesern eine gute Idee, nicht nur um Barrierefreiheitsprobleme zu entdecken, sondern auch um sich daran zu gewöhnen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) unter Linux und [VoiceOver](https://www.apple.com/accessibility/features/?vision) für macOS und iOS, unter anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, siehe unser [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul.

## Den Store-Vertrag zur Persistenz unserer To-Dos verwenden

Unsere kleine App erlaubt es uns, unsere To-Dos recht einfach zu verwalten, ist aber ziemlich nutzlos, wenn wir nach jedem Neuladen der Seite dieselbe Liste hartkodierter To-Dos erhalten. Um sie wirklich nützlich zu machen, müssen wir herausfinden, wie wir unsere To-Dos speichern können.

Zuerst brauchen wir eine Möglichkeit, unser `Todos`-Komponente die aktualisierten To-Dos zurück an ihre übergeordnete Komponente zu geben. Wir könnten ein aktualisiertes Ereignis mit der Liste der To-Dos auslösen, aber es ist einfacher, einfach die `todos`-Variable zu binden. Öffnen wir `App.svelte` und probieren es aus.

1. Fügen Sie zuerst die folgende Zeile unter Ihrem `todos`-Array hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Als nächstes aktualisieren Sie Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > [!NOTE]
   > `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie einige To-Dos hinzuzufügen, und gehen Sie dann zu Ihrer Web Developer Tools Konsole. Sie werden sehen, dass jede Änderung, die wir an unseren To-Dos machen, im `todos`-Array, das in `App.svelte` definiert ist, reflektiert wird, dank der `bind`-Richtlinie.

Jetzt müssen wir herausfinden, wie wir diese To-Dos speichern können. Wir könnten einen Code in unserer `App.svelte`-Komponente implementieren, um unsere To-Dos in den [Web-Speicher](/de/docs/Web/API/Web_Storage_API) zu lesen und zu speichern oder bei einem Webdienst.
Wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dies würde es uns ermöglichen, ihn genauso wie jeden anderen Store zu nutzen und den Persistenzmechanismus zu abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt mit dem Web-Speicher synchronisiert, und später einen weiteren entwickeln, der gegen einen Webdienst synchronisiert. Zwischen ihnen zu wechseln wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Unsere To-Dos speichern

Also lassen Sie uns mit einem regulären beschreibbaren Store beginnen, um unsere To-Dos zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie folgenden Store unter dem bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie nur daran, dass wir jetzt die `$todos` reaktive `$store`-Syntax verwenden müssen, um auf die To-Dos zuzugreifen.

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

3. Probieren Sie es aus; alles sollte funktionieren. Als nächstes werden wir sehen, wie man eigene benutzerdefinierte Stores definiert.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können eigene Stores erstellen, ohne auf `svelte/store` zurückzugreifen, indem Sie den Store-Vertrag implementieren. Seine Merkmale müssen so funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die als Argument eine Abonnementfunktion akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die beim Aufruf dafür sorgt, dass ihr Abonnement beendet wird.
3. Ein Store kann optional eine `set()`-Methode enthalten, die als Argument einen neuen Wert für den Store akzeptieren muss und die synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als beschreibbarer Store bezeichnet.

Fügen wir zuerst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos`-Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unterhalb des `todos` Arrays hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie etwa Folgendes in Ihrer Webkonsole:

![web console showing the functions and contents of the todos store](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das die `subscribe()`, `set()` und `update()` Methoden enthält, und `$todos` ist unser To-Dos-Array.

Nur zur Referenz, hier ist ein einfach funktionierender Store, der von Grund auf neu implementiert wurde:

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

Hier deklarieren wir `subs`, das ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler zum `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf, indem wir den neuen Wert als Parameter übergeben.

In der Regel implementiert man Stores nicht von Grund auf neu; stattdessen verwendet man den beschreibbaren Store, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der uns nur erlaubt, eins zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere To-Do-Listen-App zu komplex wird, könnten wir unserem To-Dos-Store erlauben, jede Statusänderung zu handhaben. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, etc.) von unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Statusänderungen angewendet werden, könnten Komponenten einfach diese Methoden aufrufen, um den Zustand der App zu ändern, und die Informationen, die vom Store bereitgestellt werden, reaktiv anzeigen. Einen einzigartigen Ort zu haben, um Statusänderungen zu handhaben, erleichtert es, den Fluss des Zustands zu verstehen und Probleme zu erkennen.

Svelte zwingt Sie nicht dazu, Ihre Zustandsverwaltung auf eine bestimmte Weise zu organisieren; es bietet Ihnen nur die Werkzeuge, um zu entscheiden, wie Sie damit umgehen möchten.

### Implementieren unseres benutzerdefinierten To-Dos-Stores

Unsere To-Do-Listen-App ist nicht besonders komplex, daher werden wir nicht alle unsere Modifikationsmethoden an einem zentralen Ort verschieben. Wir lassen sie einfach so, wie sie sind, und konzentrieren uns stattdessen darauf, unsere To-Dos zu speichern.

> [!NOTE]
> Wenn Sie dieser Anleitung folgen und mit dem Svelte REPL arbeiten, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer Sandbox-Umgebung, die Ihnen den Zugriff auf den Web-Speicher nicht erlaubt, und Sie erhalten einen "Die Operation ist unsicher"-Fehler. Um diesem Abschnitt zu folgen, müssen Sie das Repo klonen und in den `mdn-svelte-tutorial/06-stores` Ordner wechseln, oder Sie können den Inhalt des Ordners mit `npx degit opensas/mdn-svelte-tutorial/06-stores` direkt herunterladen.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt in den Web-Speicher speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest initial den Wert aus dem Web-Speicher und initialisiert ihn mit einem Standardwert, wenn er nicht vorhanden ist
- Aktualisiert bei jeder Änderung des Wertes sowohl den Store selbst als auch die Daten im lokalen Speicher

Außerdem unterstützt der Web-Speicher nur das Speichern von Zeichenfolgenwerten, daher müssen wir von Objekt zu Zeichenfolge konvertieren, wenn wir speichern, und umgekehrt, wenn wir den Wert aus dem lokalen Speicher laden.

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

   - Unser `localStore` wird eine Funktion sein, die bei Ausführung initial ihren Inhalt aus dem Web-Speicher liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Web-Speichers und einen Anfangswert angeben. Dann prüfen wir, ob der Wert im Web-Speicher existiert, und falls nicht, erstellen wir ihn.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem), um Informationen in den Web-Speicher zu lesen und zu schreiben, und die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet), um die Werte zu konvertieren.
   - Als nächstes konvertieren wir den String-Inhalt, der aus dem Web-Speicher empfangen wurde, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich aktualisieren wir bei jeder Aktualisierung des Inhalts des Stores auch den Web-Speicher, wobei der Wert in einen String konvertiert wird.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, indem wir die Operation zum Speichern des Wertes in den Web-Speicher hinzufügten. Der Rest des Codes ist größtenteils Initialisierung und Konvertierung.

3. Nun werden wir unseren lokalen Store aus `stores.js` verwenden, um unseren lokal gespeicherten To-Dos-Store zu erstellen.

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

   Durch die Verwendung von `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store, um die Daten unter dem Schlüssel `mdn-svelte-todo` im Web-Speicher zu speichern. Wir setzen auch ein paar To-Dos als Anfangswerte.

4. Jetzt entfernen wir die hartcodierten To-Dos in `App.svelte`. Aktualisieren Sie deren Inhalt wie folgt. Wir löschen im Grunde nur das `$todos` Array und die `console.log()`-Anweisungen:

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
   > Dies ist die einzige Änderung, die wir vornehmen müssen, um unseren benutzerdefinierten Store zu verwenden. `App.svelte` ist völlig transparent, was für eine Art von Store wir verwenden.

5. Gehen Sie voran und probieren Sie Ihre App erneut aus. Erstellen Sie ein paar To-Dos und schließen Sie dann den Browser. Sie können sogar den Svelte-Server stoppen und neu starten. Beim erneuten Besuch der URL sind Ihre To-Dos noch da.
6. Sie können es auch in den DevTools überprüfen. Geben Sie in der Web-Konsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, wie das Drücken der Schaltfläche _Uncheck All_, und überprüfen Sie den Inhalt des Web-Speichers erneut. Sie werden so etwas wie dieses bekommen:

   ![to-do app with web console view alongside it, showing that when a to-do is changed in the app, the corresponding entry is changed in web storage](03-persisting-todos-to-local-storage.png)

Svelte-Stores bieten eine sehr einfache und leichte, aber äußerst leistungsstarke Möglichkeit, komplexe App-Zustände aus einem globalen Datenspeicher auf reaktive Weise zu verwalten. Und da Svelte unseren Code kompiliert, kann es die [`$store` auto-subscription syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns erlaubt, mit Stores auf die gleiche Weise wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die internen Abläufe des Stores selbst zu abstrahieren.

## Bonusenstück: Übergänge

Ändern wir nun das Thema und machen etwas Spaßiges und anderes: Fügen wir unseren Alerts eine Animation hinzu. Svelte bietet ein ganzes Modul, um [Übergänge](https://learn.svelte.dev/tutorial/transition) und [Animationen](https://learn.svelte.dev/tutorial/animate) zu definieren, damit wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn) Direktive angewendet und wird durch ein Element ausgelöst, das den DOM als Ergebnis eines Statuswechsels betritt oder verlässt.

Geben wir unserer `Alert`-Komponente einen `fly`-Übergang. Wir öffnen die `Alert.svelte`-Datei und importieren die `fly`-Funktion aus dem `svelte/transition`-Modul.

1. Fügen Sie die folgende `import`-Anweisung unter den vorhandenen ein:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um sie zu verwenden, aktualisieren Sie Ihr `<div>`-Öffnungs-Tag wie folgt:

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
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es ist einfach ein literales JavaScript-Objekt, das als Parameter an den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus, und Sie werden sehen, dass die Benachrichtigungen jetzt etwas ansprechender aussehen.

> [!NOTE]
> Ein Compiler zu sein, ermöglicht es Svelte, die Größe unseres Bundles zu optimieren, indem Funktionen ausgeschlossen werden, die nicht verwendet werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere `public/build/bundle.js`-Datei etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly` Direktive entfernen, erkennt Svelte intelligent, dass die Fly-Funktion nicht verwendet wird, und die Größe der `bundle.js`-Datei sinkt auf nur 18 KB.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen zum Umgang mit Animationen und Übergängen. Svelte unterstützt auch das Spezifizieren unterschiedlicher Übergänge, die angewendet werden sollen, wenn das Element dem DOM hinzugefügt oder aus diesem entfernt wird, mit den Direktiven `in:fn`/`out:fn`, und es erlaubt Ihnen auch, Ihre [benutzerdefinierten CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es gibt auch mehrere Easing-Funktionen, um die Geschwindigkeit der Änderung über die Zeit zu spezifizieren. Werfen Sie einen Blick auf den [Ease-Visualizer](https://svelte.dev/examples/easing), um die verschiedenen verfügbaren Ease-Funktionen zu erkunden.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie wie folgt auf Ihre Kopie unseres Repos zu:

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

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: eine `Alert`-Komponente und das Speichern von `todos` im Web-Speicher.

- Dies erlaubte es uns, einige fortgeschrittene Svelte-Techniken zu präsentieren. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man zustandsübergreifendes Komponenten-Management mit Stores implementiert. Wir sahen auch, wie man sich automatisch auf Stores abonniert, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann sahen wir, wie man einen eigenen Store von Grund auf implementiert und wie man den beschreibbaren Store von Svelte erweitern kann, um Daten im Web-Speicher zu speichern.
- Am Ende hatten wir einen Blick darauf, die Svelte `transition` Direktive zu verwenden, um Animationen auf DOM-Elementen zu implementieren.

Im nächsten Artikel werden wir lernen, wie man TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügt. Um alle Funktionen zu nutzen, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility","Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
