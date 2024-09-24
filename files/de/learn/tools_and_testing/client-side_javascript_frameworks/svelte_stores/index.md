---
title: Arbeiten mit Svelte Stores
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir die Entwicklung unserer App abgeschlossen, sie in Komponenten organisiert und einige fortgeschrittene Techniken zur Bewältigung von Reaktivität, zur Arbeit mit DOM-Knoten und zur Exposition von Komponentenfunktionalität diskutiert. In diesem Artikel zeigen wir eine weitere Möglichkeit zur Verwaltung des Zustands in Svelte: [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores sind globale Datenrepositories, die Werte speichern. Komponenten können Stores abonnieren und Benachrichtigungen erhalten, wenn sich deren Werte ändern.

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
          Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/der Befehlszeile</a
          >haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie Svelte Stores verwendet werden</td>
    </tr>
  </tbody>
</table>

Mit Stores werden wir eine `Alert`-Komponente erstellen, die Benachrichtigungen auf dem Bildschirm anzeigt und Nachrichten von jeder Komponente empfangen kann. In diesem Fall ist die `Alert`-Komponente unabhängig vom Rest — sie ist weder Eltern- noch Kindkomponente einer anderen — sodass die Nachrichten nicht in die Komponentenhierarchie passen.

Wir werden auch sehen, wie man einen eigenen benutzerdefinierten Store entwickelt, um Informationen von Aufgabenlisten im [Web Storage](/de/docs/Web/API/Web_Storage_API) zu speichern und so unsere Aufgaben über Seitenladungen hinweg zu bewahren.

## Code mit uns zusammen

### Git

Klonen Sie das GitHub-Repository (wenn Sie es nicht bereits getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie dann aus

```bash
cd mdn-svelte-tutorial/06-stores
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Um zusammen mit uns im REPL zu programmieren, starten Sie unter

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Umgang mit dem Zustand unserer App

Wir haben bereits gesehen, wie unsere Komponenten über Props, Zweiwege-Datenbindung und Ereignisse miteinander kommunizieren können. In all diesen Fällen ging es um die Kommunikation zwischen Eltern- und Kindkomponenten.

Aber nicht jeder Anwendungszustand gehört in die Komponentenhierarchie Ihrer Anwendung. Zum Beispiel Informationen über den angemeldeten Benutzer oder ob das dunkle Thema ausgewählt ist oder nicht.

Manchmal muss auf Ihren Anwendungszustand von mehreren Komponenten zugegriffen werden, die nicht hierarchisch verwandt sind, oder von einem regulären JavaScript-Modul.

Wenn Ihre App kompliziert wird und Ihre Komponentenhierarchie komplex wird, könnte es zu schwierig werden, dass Komponenten Daten zwischen sich weiterleiten. In diesem Fall kann der Wechsel zu einem globalen Datenspeicher eine gute Option sein. Wenn Sie bereits mit [Redux](https://redux.js.org/) oder [Vuex](https://vuex.vuejs.org/) gearbeitet haben, sind Sie mit der Funktionsweise solcher Stores vertraut. Svelte Stores bieten ähnliche Funktionen zur Zustandsverwaltung.

Ein Store ist ein Objekt mit einer `subscribe()`-Methode, die es interessierten Parteien ermöglicht, benachrichtigt zu werden, wann immer sich der Wert des Stores ändert, und einer optionalen `set()`-Methode, mit der Sie neue Werte für den Store festlegen können. Diese minimalistische API wird als [Store-Vertrag](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values-store-contract) bezeichnet.

Svelte bietet Funktionen zur Erstellung von [readable](https://svelte.dev/docs/svelte-store#readable), [writable](https://svelte.dev/docs/svelte-store#writable) und [derived](https://svelte.dev/docs/svelte-store#derived) Stores im Modul `svelte/store`.

Svelte bietet auch eine sehr intuitive Möglichkeit, Stores in sein Reaktivitätssystem zu integrieren, indem die [reaktive `$store`-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) verwendet wird. Wenn Sie Ihre eigenen Stores entwickeln, die den Store-Vertrag einhalten, erhalten Sie diese Reaktivität syntaktischen Zucker kostenlos.

## Erstellen der Alert-Komponente

Um zu zeigen, wie man mit Stores arbeitet, werden wir eine `Alert`-Komponente erstellen. Solche Widgets könnten auch als Popup-Benachrichtigungen, Toast oder Benachrichtigungsblasen bekannt sein.

Unsere `Alert`-Komponente wird von der `App`-Komponente angezeigt, aber jede Komponente kann Benachrichtigungen an diese senden. Immer wenn eine Benachrichtigung eintrifft, wird die `Alert`-Komponente dafür verantwortlich sein, diese auf dem Bildschirm anzuzeigen.

### Erstellen eines Stores

Beginnen wir damit, einen beschreibbaren Store zu erstellen. Jede Komponente wird in der Lage sein, in diesen Store zu schreiben, und die `Alert`-Komponente wird ihn abonnieren und eine Nachricht anzeigen, wann immer der Store geändert wird.

1. Erstellen Sie eine neue Datei `stores.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie den folgenden Inhalt ein:

   ```js
   import { writable } from "svelte/store";

   export const alert = writable("Willkommen in der Aufgabenlisten-App!");
   ```

> [!NOTE]
> Stores können außerhalb von Svelte-Komponenten definiert und verwendet werden, sodass Sie sie nach Belieben organisieren können.

Im obigen Code importieren wir die `writable()`-Funktion aus `svelte/store` und verwenden sie, um einen neuen Store namens `alert` mit einem Anfangswert von "Willkommen in der Aufgabenlisten-App!" zu erstellen. Wir exportieren dann den Store.

### Erstellen der eigentlichen Komponente

Erstellen wir nun unsere `Alert`-Komponente und sehen, wie wir Werte aus dem Store lesen können.

1. Erstellen Sie eine weitere neue Datei namens `src/components/Alert.svelte`.
2. Geben Sie den folgenden Inhalt ein:

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

Lassen Sie uns diesen Code im Detail durchgehen.

- Zu Beginn importieren wir den `alert` Store.
- Dann importieren wir die `onDestroy()` Lebenzzyklusfunktion, die es uns ermöglicht, einen Rückruf auszuführen, nachdem die Komponente entfernt wurde.
- Wir erstellen dann eine lokale Variable namens `alertContent`. Denken Sie daran, dass wir auf Top-Level-Variablen aus dem Markup zugreifen können und dass das DOM jedes Mal aktualisiert wird, wenn sie geändert werden.
- Dann rufen wir die Methode `alert.subscribe()` auf und übergeben ihr eine Rückruffunktion als Parameter. Jedes Mal, wenn sich der Wert des Stores ändert, wird die Rückruffunktion mit dem neuen Wert als Parameter aufgerufen. In der Rückruffunktion weisen wir den empfangenen Wert einfach der lokalen Variable zu, was das Update des DOMs der Komponente auslöst.
- Die `subscribe()`-Methode gibt auch eine Aufräumfunktion zurück, die die Abbestellung übernimmt. Wir abonnieren also, wenn die Komponente initialisiert wird, und verwenden `onDestroy`, um das Abonnement zu beenden, wenn die Komponente entfernt wird.
- Schließlich verwenden wir die Variable `alertContent` in unserem Markup, und wenn der Benutzer auf den Alarm klickt, löschen wir ihn.
- Am Ende fügen wir ein paar CSS-Zeilen hinzu, um unsere `Alert`-Komponente zu stylen.

Diese Einrichtung ermöglicht es uns, auf reaktive Weise mit Stores zu arbeiten. Wenn sich der Wert des Stores ändert, wird die Rückruffunktion ausgeführt. Dort weisen wir einer lokalen Variablen einen neuen Wert zu, und dank der Svelte-Reaktivität werden unser gesamtes Markup und die reaktiven Abhängigkeiten entsprechend aktualisiert.

### Nutzung der Komponente

Verwenden wir nun unsere Komponente.

1. In `App.svelte` importieren wir die Komponente. Fügen Sie die folgende Importanweisung unterhalb der bestehenden hinzu:

   ```js
   import Alert from "./components/Alert.svelte";
   ```

2. Rufen Sie dann die `Alert`-Komponente direkt über dem `Todos`-Aufruf auf, so:

   ```svelte
   <Alert />
   <Todos {todos} />
   ```

3. Laden Sie jetzt Ihre Test-App und Sie sollten nun die `Alert`-Nachricht auf dem Bildschirm sehen können. Sie können darauf klicken, um sie zu schließen.

   ![Eine einfache Benachrichtigung in der oberen rechten Ecke einer App mit der Aufschrift willkommen in der Aufgabenlisten-App](01-alert-message.png)

## Stores reaktiv machen mit der reaktiven `$store`-Syntax

Das funktioniert, aber Sie müssen diesen Code jedes Mal kopieren und einfügen, wenn Sie ein Store abonnieren möchten:

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

Das ist zu viel Boilerplate für Svelte! Da Svelte ein Compiler ist, hat es weitere Möglichkeiten, uns das Leben zu erleichtern. In diesem Fall bietet Svelte die reaktive `$store`-Syntax, auch bekannt als Auto-Subscription. In einfachen Worten, Sie fügen dem Store einfach das Zeichen `$` voran und Svelte generiert den Code, um ihn automatisch reaktiv zu machen. Unser vorheriger Codeblock kann also durch diesen ersetzt werden:

```svelte
<script>
  import myStore from "./stores.js";
</script>

{$myStore}
```

Und `$myStore` wird vollständig reaktiv sein. Dies gilt auch für Ihre eigenen benutzerdefinierten Stores. Wenn Sie die Methoden `subscribe()` und `set()` implementieren, wie wir es später tun werden, wird die reaktive `$store`-Syntax auch für Ihre Stores gelten.

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

2. Überprüfen Sie Ihre App erneut und Sie werden sehen, dass das genauso funktioniert wie zuvor. Das ist viel besser!

Im Hintergrund hat Svelte den Code generiert, um die lokale Variable `$alert` zu deklarieren, den `alert`-Store zu abonnieren, `$alert` wann immer der Inhalt des Stores geändert wird zu aktualisieren, und das Abonnement zu beenden, wenn die Komponente entfernt wird. Es wird auch die `alert.set()`-Anweisungen generieren, wann immer wir einen Wert an `$alert` zuweisen.

Das Endergebnis dieses cleveren Tricks ist, dass Sie aus globalen Stores genauso einfach zugreifen können wie reaktive lokale Variablen.

Dies ist ein perfektes Beispiel dafür, wie Svelte den Compiler nutzt, um die Ergonomie für Entwickler zu verbessern, nicht nur um uns lästige Boilerplate zu ersparen, sondern auch um weniger fehleranfälligen Code zu generieren.

## Schreiben in unseren Store

In unseren Store zu schreiben ist einfach eine Frage des Imports und der Ausführung von `$store = 'new value'`. Lassen Sie es uns in unserer `Todos`-Komponente verwenden.

1. Fügen Sie die folgende Importanweisung unter den bestehenden hinzu:

   ```js
   import { alert } from "../stores.js";
   ```

2. Aktualisieren Sie Ihre `addTodo()`-Funktion wie folgt:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
     $alert = `Todo '${name}' wurde hinzugefügt`;
   }
   ```

3. Aktualisieren Sie `removeTodo()` wie folgt:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // Fokussieren der Statusüberschrift
     $alert = `Todo '${todo.name}' wurde gelöscht`;
   }
   ```

4. Aktualisieren Sie die `updateTodo()`-Funktion zu diesem:

   ```js
   function updateTodo(todo) {
     const i = todos.findIndex((t) => t.id === todo.id);
     if (todos[i].name !== todo.name)
       $alert = `todo '${todos[i].name}' wurde umbenannt in '${todo.name}'`;
     if (todos[i].completed !== todo.completed)
       $alert = `todo '${todos[i].name}' markiert als ${
         todo.completed ? "abgeschlossen" : "aktiv"
       }`;
     todos[i] = { ...todos[i], ...todo };
   }
   ```

5. Fügen Sie den folgenden Reaktivblock unter dem Block hinzu, der mit `let filter = 'all'` beginnt:

   ```js
   $: {
     if (filter === "all") {
       $alert = "Durchsuchen aller Aufgaben";
     } else if (filter === "active") {
       $alert = "Durchsuchen aktiver Aufgaben";
     } else if (filter === "completed") {
       $alert = "Durchsuchen abgeschlossener Aufgaben";
     }
   }
   ```

6. Und zuletzt für jetzt, aktualisieren Sie die Blöcke `const checkAllTodos` und `const removeCompletedTodos` wie folgt:

   ```js
   const checkAllTodos = (completed) => {
     todos = todos.map((t) => ({ ...t, completed }));
     $alert = `${completed ? "Alle" : "Keine"} ${todos.length} Aufgaben markiert`;
   };
   const removeCompletedTodos = () => {
     $alert = `Entfernte ${todos.filter((t) => t.completed).length} Aufgaben`;
     todos = todos.filter((t) => !t.completed);
   };
   ```

7. Grundsätzlich haben wir den Store importiert und auf jedem Ereignis aktualisiert, wodurch jedes Mal ein neuer Alarm angezeigt wird. Schauen Sie sich Ihre App erneut an und versuchen Sie, ein paar Aufgaben hinzuzufügen/zu löschen/zu aktualisieren!

Sobald wir `$alert = ...` ausführen, wird Svelte `alert.set()` ausführen. Unsere `Alert`-Komponente — wie jeder Abonnent des Alert-Stores — wird benachrichtigt, wenn sie einen neuen Wert erhält, und dank der Svelte-Reaktivität wird ihr Markup aktualisiert.

Wir könnten dasselbe innerhalb jeder Komponente oder `.js`-Datei tun.

> [!NOTE]
> Außerhalb von Svelte-Komponenten können Sie die `$store`-Syntax nicht verwenden. Der Grund ist, dass der Svelte-Compiler außerhalb von Svelte-Komponenten nicht aktiv ist. In diesem Fall müssen Sie sich auf `store.subscribe()` und `store.set()`-Methoden verlassen.

## Verbesserung unserer Alert-Komponente

Es ist etwas lästig, auf den Alarm klicken zu müssen, um ihn zu schließen. Es wäre besser, wenn die Benachrichtigung nach ein paar Sekunden automatisch verschwindet.

Sehen wir uns an, wie das geht. Wir werden eine Eigenschaft mit den Millisekunden angeben, die gewartet werden sollen, bevor die Benachrichtigung gelöscht wird, und einen Timeout definieren, um den Alarm zu entfernen. Wir werden auch darauf achten, den Timeout zu löschen, wenn die `Alert`-Komponente entfernt wird, um Speicherlecks zu vermeiden.

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
       // Alarm ausblenden, wenn Nachricht leer ist
       visible = false;
     } else {
       visible = true; // Alarm anzeigen
       if (ms > 0) timeout = setTimeout(() => (visible = false), ms); // und ihn nach ms Millisekunden ausblenden
     }
   };
   $: onMessageChange($alert, ms); // immer wenn der alert store oder die ms props sich ändern, onMessageChange ausführen

   onDestroy(() => clearTimeout(timeout)); // sicherstellen, dass wir den Timeout aufräumen
   ```

2. Und aktualisieren Sie den Markup-Abschnitt von `Alert.svelte` wie folgt:

   ```svelte
   {#if visible}
   <div on:click={() => visible = false}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.880c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
     <p>{ $alert }</p>
   </div>
   {/if}
   ```

Hier erstellen wir zuerst die Eigenschaft `ms` mit einem Standardwert von 3000 (Millisekunden). Dann erstellen wir eine `onMessageChange()`-Funktion, die dafür verantwortlich ist, zu kontrollieren, ob der Alarm sichtbar ist oder nicht. Mit `$: onMessageChange($alert, ms)` weisen wir Svelte an, diese Funktion auszuführen, wann immer sich der `$alert` Store oder die `ms` Eigenschaft ändert.

Immer wenn der `$alert` Store sich ändert, bereinigen wir ausstehende Timeouts. Wenn `$alert` leer ist, setzen wir `visible` auf `false` und der Alarm wird aus dem DOM entfernt. Wenn es nicht leer ist, setzen wir `visible` auf `true` und verwenden die Funktion `setTimeout()`, um den Alarm nach `ms` Millisekunden zu entfernen.

Schließlich sorgen wir mit der `onDestroy()`-Lebenszyklusfunktion dafür, die `clearTimeout()`-Funktion aufzurufen.

Wir haben auch ein SVG-Symbol über dem Alarmabsatz hinzugefügt, damit es etwas hübscher aussieht. Probieren Sie es erneut aus und Sie sollten die Änderungen sehen.

## Unsere Alert-Komponente zugänglich machen

Unsere `Alert`-Komponente funktioniert zwar gut, ist aber nicht sehr freundlich zu unterstützenden Technologien. Das Problem sind Elemente, die dynamisch zur Seite hinzugefügt und von der Seite entfernt werden. Während sie für Benutzer, die die Seite sehen können, visuell offensichtlich sind, sind sie möglicherweise nicht so offensichtlich für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Um diese Situationen zu bewältigen, können wir [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) nutzen, die eine Möglichkeit bieten, dynamische Inhaltsänderungen programmatisch offenzulegen, sodass sie von unterstützenden Technologien erkannt und angekündigt werden können.

Wir können einen Bereich deklarieren, der dynamische Inhalte enthält, die von unterstützenden Technologien angekündigt werden sollen, mit der `aria-live`-Eigenschaft gefolgt von der Höflichkeitseinstellung, die verwendet wird, um die Priorität festzulegen, mit der Bildschirmlesegeräte Updates für diese Bereiche behandeln sollen. Die möglichen Einstellungen sind `off`, `polite` oder `assertive`.

Für häufige Situationen haben Sie auch mehrere vordefinierte spezialisierte `role`-Werte, die verwendet werden können, wie `log`, `status` und `alert`.

In unserem Fall reicht es aus, ein `role="alert"` zum `<div>`-Container hinzuzufügen, so:

```svelte
<div role="alert" on:click={() => visible = false}>
```

Im Allgemeinen ist es eine gute Idee, Ihre Anwendungen mit Bildschirmlesegeräten zu testen, nicht nur um Probleme mit der Barrierefreiheit zu entdecken, sondern auch um zu verstehen, wie sehbehinderte Menschen das Web nutzen. Sie haben mehrere Optionen, wie [NVDA](https://www.nvaccess.org/) für Windows, [ChromeVox](https://support.google.com/chromebook/answer/7031755) für Chrome, [Orca](https://wiki.gnome.org/Projects/Orca) auf Linux und [VoiceOver](https://www.apple.com/accessibility/vision/) für macOS und iOS, unter anderen Optionen.

Um mehr über das Erkennen und Beheben von Barrierefreiheitsproblemen zu erfahren, lesen Sie unseren Artikel [Handling common accessibility problems](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility).

## Verwendung des Store-Vertrags zum Speichern unserer Aufgaben

Unsere kleine App ermöglicht es uns, unsere Aufgaben recht einfach zu verwalten, ist aber ziemlich nutzlos, wenn wir immer dieselbe Liste fest codierter Aufgaben erhalten, wenn wir sie neu laden. Damit es wirklich nützlich ist, müssen wir herausfinden, wie wir unsere Aufgaben speichern können.

Zuerst benötigen wir eine Möglichkeit für unsere `Todos`-Komponente, die aktualisierten Aufgaben an ihren übergeordneten Elternteil zurückzugeben. Wir könnten ein aktualisiertes Ereignis mit der Liste der Aufgaben auslösen, aber es ist einfacher, nur die `todos`-Variable zu binden. Öffnen wir `App.svelte` und versuchen es.

1. Fügen Sie zuerst die folgende Zeile unterhalb Ihres `todos`-Arrays hinzu:

   ```js
   $: console.log("todos", todos);
   ```

2. Aktualisieren Sie dann Ihren `Todos`-Komponentenaufruf wie folgt:

   ```svelte
   <Todos bind:todos />
   ```

   > **Hinweis:** `<Todos bind:todos />` ist nur eine Abkürzung für `<Todos bind:todos={todos} />`.

3. Gehen Sie zurück zu Ihrer App, versuchen Sie, ein paar Aufgaben hinzuzufügen, und gehen Sie dann zu Ihrer Entwicklerwerkzeuge-Webkonsole. Sie werden sehen, dass jede Modifikation, die wir an unseren Aufgaben vornehmen, sich in dem `todos`-Array widerspiegelt, das in `App.svelte` definiert ist, dank der Bindungsrichtlinie.

Jetzt müssen wir einen Weg finden, diese Aufgaben zu speichern. Wir könnten etwas Code in unserer `App.svelte`-Komponente implementieren, um unsere Aufgaben zu lesen und zu speichern im [Web Storage](/de/docs/Web/API/Web_Storage_API) oder bei einem Webdienst.
Aber wäre es nicht besser, wenn wir einen generischen Store entwickeln könnten, der es uns ermöglicht, seinen Inhalt zu speichern? Dies würde es uns ermöglichen, ihn wie jeden anderen Store zu verwenden und den Speichermechanismus abstrahieren. Wir könnten einen Store erstellen, der seinen Inhalt im Web Storage synchronisiert, und später einen anderen entwickeln, der mit einem Webdienst synchronisiert. Das Wechseln zwischen ihnen wäre trivial und wir müssten `App.svelte` überhaupt nicht anfassen.

### Unsere Aufgaben speichern

Beginnen wir also damit, einen regulären schreibbaren Store zu verwenden, um unsere Aufgaben zu speichern.

1. Öffnen Sie die Datei `stores.js` und fügen Sie den folgenden Store unterhalb des bereits bestehenden hinzu:

   ```js
   export const todos = writable([]);
   ```

2. Das war einfach. Jetzt müssen wir den Store importieren und in `App.svelte` verwenden. Denken Sie einfach daran, dass wir jetzt auf die Aufgaben mit der reaktiven `$todos`-`$store`-Syntax zugreifen müssen.

   Aktualisieren Sie Ihre `App.svelte`-Datei so:

   ```svelte
   <script>
     import Todos from "./components/Todos.svelte";
     import Alert from "./components/Alert.svelte";

     import { todos } from "./stores.js";

     $todos = [
       { id: 1, name: "Erstellen Sie eine Svelte-Starter-App", completed: true },
       { id: 2, name: "Erstellen Sie Ihre erste Komponente", completed: true },
       { id: 3, name: "Den Rest des Tutorials abschließen", completed: false }
     ];
   </script>

   <Alert />
   <Todos bind:todos={$todos} />
   ```

3. Probieren Sie es aus; alles sollte funktionieren. Als Nächstes werden wir sehen, wie wir unsere eigenen benutzerdefinierten Stores definieren können.

### Wie man einen Store-Vertrag implementiert: Die Theorie

Sie können Ihre eigenen Stores erstellen, ohne sich auf `svelte/store` zu verlassen, indem Sie den Store-Vertrag implementieren. Die Funktionen müssen so funktionieren:

1. Ein Store muss eine `subscribe()`-Methode enthalten, die eine Abonnementfunktion als Argument akzeptieren muss. Alle aktiven Abonnementfunktionen eines Stores müssen aufgerufen werden, wann immer sich der Wert des Stores ändert.
2. Die `subscribe()`-Methode muss eine `unsubscribe()`-Funktion zurückgeben, die bei Aufruf das Abonnement beenden muss.
3. Ein Store kann optional eine `set()`-Methode enthalten, die einen neuen Wert für den Store als Argument akzeptiert und synchron alle aktiven Abonnementfunktionen des Stores aufruft. Ein Store mit einer `set()`-Methode wird als schreibbarer Store bezeichnet.

Fügen Sie zunächst die folgenden `console.log()`-Anweisungen zu unserer `App.svelte`-Komponente hinzu, um den `todos` Store und seinen Inhalt in Aktion zu sehen. Fügen Sie diese Zeilen unterhalb des `todos`-Arrays hinzu:

```js
console.log("todos store - todos:", todos);
console.log("todos store content - $todos:", $todos);
```

Wenn Sie die App jetzt ausführen, sehen Sie in Ihrer Webkonsole etwas wie dieses:

![web console showing the functions and contents of the todos store](02-svelte-store-in-action.png)

Wie Sie sehen können, ist unser Store einfach ein Objekt, das `subscribe()`, `set()` und `update()` Methoden enthält, und `$todos` ist unser Array von Aufgaben.

Nur als Referenz, hier ist ein grundlegender funktionierender Store, der von Grund auf implementiert wurde:

```js
export const writable = (initial_value = 0) => {
  let value = initial_value; // Inhalt des Stores
  let subs = []; // Abonnenten-Handler

  const subscribe = (handler) => {
    subs = [...subs, handler]; // fügt Handler zum Abonnenten-Array hinzu
    handler(value); // ruft Handler mit aktuellem Wert auf
    return () => (subs = subs.filter((sub) => sub !== handler)); // gibt Unsubscribe-Funktion zurück
  };

  const set = (new_value) => {
    if (value === new_value) return; // gleicher Wert, beenden
    value = new_value; // aktualisiert den Wert
    subs.forEach((sub) => sub(value)); // aktualisiert Abonnenten
  };

  const update = (update_fn) => set(update_fn(value)); // Update-Funktion

  return { subscribe, set, update }; // Store-Vertrag
};
```

Hier deklarieren wir `subs`, was ein Array von Abonnenten ist. In der `subscribe()`-Methode fügen wir den Handler dem `subs`-Array hinzu und geben eine Funktion zurück, die, wenn sie ausgeführt wird, den Handler aus dem Array entfernt.

Wenn wir `set()` aufrufen, aktualisieren wir den Wert des Stores und rufen jeden Handler auf und übergeben den neuen Wert als Parameter.

Normalerweise implementieren Sie Stores nicht von Grund auf neu; stattdessen würden Sie den beschreibbaren Store verwenden, um [benutzerdefinierte Stores](https://learn.svelte.dev/tutorial/custom-stores) mit domänenspezifischer Logik zu erstellen. Im folgenden Beispiel erstellen wir einen Zähler-Store, der es uns nur erlaubt, eine Einheit zum Zähler hinzuzufügen oder seinen Wert zurückzusetzen:

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

Wenn unsere Aufgabenlisten-App zu komplex wird, könnten wir unseren Aufgaben-Store alle Statusänderungen behandeln lassen. Wir könnten alle Methoden, die das `todo`-Array ändern (wie `addTodo()`, `removeTodo()`, usw.), aus unserer `Todos`-Komponente in den Store verschieben. Wenn Sie einen zentralen Ort haben, an dem alle Statusänderungen angewendet werden, könnten die Komponenten einfach diese Methoden aufrufen, um den Anwendungsstatus zu ändern und reaktiv die Informationen anzuzeigen, die der Store bereitstellt. Einen einzigartigen Ort zu haben, um Statusänderungen zu handhaben, macht es einfacher, den Statusfluss zu verstehen und Probleme zu erkennen.

Svelte wird Sie nicht zwingen, Ihr Zustandsmanagement auf eine bestimmte Art und Weise zu organisieren; es bietet Ihnen lediglich die Werkzeuge, um zu entscheiden, wie Sie damit umgehen möchten.

### Implementierung unseres benutzerdefinierten Aufgaben-Stores

Unsere Aufgabenlisten-App ist nicht besonders komplex, daher werden wir nicht alle unsere Modifikationsmethoden an einem zentralen Ort zusammenführen. Wir werden sie einfach lassen, wie sie sind, und uns stattdessen darauf konzentrieren, unsere Aufgaben zu speichern.

> [!NOTE]
> Wenn Sie diesem Leitfaden aus dem Svelte REPL folgen, können Sie diesen Schritt nicht abschließen. Aus Sicherheitsgründen arbeitet der Svelte REPL in einer sandboxed-Umgebung, die Ihnen den Zugriff auf den Web Storage nicht erlaubt, und Sie erhalten einen "Die Operation ist unsicher"-Fehler. Um diesem Abschnitt zu folgen, müssen Sie das Repository klonen und zum Ordner `mdn-svelte-tutorial/06-stores` wechseln, oder Sie können den Inhalt des Ordners direkt herunterladen mit `npx degit opensas/mdn-svelte-tutorial/06-stores`.

Um einen benutzerdefinierten Store zu implementieren, der seinen Inhalt im Web Storage speichert, benötigen wir einen beschreibbaren Store, der Folgendes tut:

- Liest anfangs den Wert aus dem Web Storage und wenn er nicht vorhanden ist, initialisiert er ihn mit einem Standardwert
- Immer wenn der Wert geändert wird, aktualisiert er den Store selbst und auch die Daten im lokalen Speicher

Darüber hinaus, da der Web Storage nur das Speichern von Zeichenfolgenwerten unterstützt, müssen wir bei der Speicherung von Objekt zu Zeichenfolge konvertieren und umgekehrt, wenn wir den Wert aus dem lokalen Speicher laden.

1. Erstellen Sie eine neue Datei namens `localStore.js` in Ihrem `src`-Verzeichnis.
2. Geben Sie den folgenden Inhalt ein:

   ```js
   import { writable } from "svelte/store";

   export const localStore = (key, initial) => {
     // empfängt den Schlüssel des lokalen Speichers und einen Anfangswert

     const toString = (value) => JSON.stringify(value, null, 2); // Hilfsfunktion
     const toObj = JSON.parse; // Hilfsfunktion

     if (localStorage.getItem(key) === null) {
       // Element nicht im lokalen Speicher vorhanden
       localStorage.setItem(key, toString(initial)); // lokale Speicherung mit dem Anfangswert initialisieren
     }

     const saved = toObj(localStorage.getItem(key)); // in ein Objekt umwandeln

     const { subscribe, set, update } = writable(saved); // den zugrunde liegenden beschreibbaren Store erstellen

     return {
       subscribe,
       set: (value) => {
         localStorage.setItem(key, toString(value)); // auch als Zeichenfolge im lokalen Speicher speichern
         return set(value);
       },
       update,
     };
   };
   ```

   - Unser `localStore` wird eine Funktion sein, die bei Ausführung ihren Inhalt aus dem Web Storage liest und ein Objekt mit drei Methoden zurückgibt: `subscribe()`, `set()` und `update()`.
   - Wenn wir einen neuen `localStore` erstellen, müssen wir den Schlüssel des Web Storage und einen Anfangswert angeben. Wir überprüfen dann, ob der Wert im Web Storage vorhanden ist, und erstellen ihn, wenn nicht.
   - Wir verwenden die Methoden [`localStorage.getItem(key)`](/de/docs/Web/API/Storage/getItem) und [`localStorage.setItem(key, value)`](/de/docs/Web/API/Storage/setItem) zum Lesen und Schreiben von Informationen im Web Storage, und die Hilfsfunktionen [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und `toObj()` (die [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) verwendet) zum Konvertieren der Werte.
   - Dann konvertieren wir den Zeichenfolgeninhalt, der vom Web Storage empfangen wurde, in ein Objekt und speichern dieses Objekt in unserem Store.
   - Schließlich, jedes Mal, wenn wir den Inhalt des Stores aktualisieren, aktualisieren wir auch den Web Storage mit dem in eine Zeichenfolge umgewandelten Wert.

   Beachten Sie, dass wir nur die `set()`-Methode neu definieren mussten, um die Operation hinzuzufügen, den Wert im Web Storage zu speichern. Der Rest des Codes besteht hauptsächlich aus Initialisierungs- und Konvertierungsaufgaben.

3. Nun werden wir unseren lokalen Store von `stores.js` aus verwenden, um unseren lokal persistierten Aufgaben-Store zu erstellen.

   Aktualisieren Sie `stores.js` so:

   ```js
   import { writable } from "svelte/store";
   import { localStore } from "./localStore.js";

   export const alert = writable("Willkommen in der Aufgabenlisten-App!");

   const initialTodos = [
     { id: 1, name: "Besuche MDN Web Docs", completed: true },
     { id: 2, name: "Vervollständige das Svelte-Tutorial", completed: false },
   ];

   export const todos = localStore("mdn-svelte-todo", initialTodos);
   ```

   Durch die Verwendung von `localStore('mdn-svelte-todo', initialTodos)` konfigurieren wir den Store so, dass er die Daten im Web Storage unter dem Schlüssel `mdn-svelte-todo` speichert. Wir setzen auch ein paar Aufgaben als Anfangswerte.

4. Lassen Sie uns nun die hartcodierten Aufgaben in `App.svelte` loswerden. Aktualisieren Sie den Inhalt wie folgt. Wir löschen im Grunde nur das `$todos`-Array und die `console.log()`-Anweisungen:

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

5. Probieren Sie Ihre App erneut aus. Erstellen Sie ein paar Aufgaben und schließen Sie dann den Browser. Sie können sogar den Svelte-Server anhalten und neu starten. Beim erneuten Besuch der URL sind Ihre Aufgaben weiterhin vorhanden.
6. Sie können es auch in den DevTools untersuchen. Geben Sie in der Webkonsole den Befehl `localStorage.getItem('mdn-svelte-todo')` ein. Nehmen Sie einige Änderungen an Ihrer App vor, wie das Drücken des _Keine auswählen_-Buttons, und überprüfen Sie den Inhalt des Web Storage erneut. Sie werden etwas wie dieses erhalten:

   ![to-do app with web console view alongside it, showing that when a to-do is changed in the app, the corresponding entry is changed in web storage](03-persisting-todos-to-local-storage.png)

Svelte Stores bieten eine sehr einfache und leichte, aber extrem leistungsstarke Möglichkeit, den komplexen Anwendungszustand über einen globalen Datenspeicher in einer reaktiven Weise zu handhaben. Und da Svelte unseren Code kompiliert, kann es die [`$store`-Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) bereitstellen, die es uns ermöglicht, mit Stores auf die gleiche Weise wie mit lokalen Variablen zu arbeiten. Da Stores eine minimale API haben, ist es sehr einfach, unsere benutzerdefinierten Stores zu erstellen, um die inneren Abläufe des Stores selbst zu abstrahieren.

## Bonus Track: Übergänge

Lassen Sie uns nun das Thema wechseln und etwas Spaßiges und Anderes tun: Wir fügen unseren Alarmen eine Animation hinzu. Svelte bietet ein ganzes Modul, um [Transitions](https://learn.svelte.dev/tutorial/transition) und [Animations](https://learn.svelte.dev/tutorial/animate) zu definieren, sodass wir unsere Benutzeroberflächen ansprechender gestalten können.

Ein Übergang wird mit der [transition:fn](https://svelte.dev/docs/element-directives#transition-fn) Direktive angewendet und wird ausgelöst, wenn ein Element in das DOM eintritt oder es als Ergebnis einer Statusänderung verlässt. Das Modul `svelte/transition` exportiert sieben Funktionen: `fade`, `blur`, `fly`, `slide`, `scale`, `draw` und `crossfade`.

Lassen Sie uns unserer `Alert`-Komponente einen Fly-`transition` hinzufügen. Wir werden die `Alert.svelte`-Datei öffnen und die `fly`-Funktion aus dem Modul `svelte/transition` importieren.

1. Setzen Sie die folgende `import`-Anweisung unter die bestehenden:

   ```js
   import { fly } from "svelte/transition";
   ```

2. Um sie zu verwenden, aktualisieren Sie Ihr öffnendes `<div>`-Tag so:

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
   > Die doppelten geschweiften Klammern sind keine spezielle Svelte-Syntax. Es ist nur ein literales JavaScript-Objekt, das als Parameter für den Fly-Übergang übergeben wird.

3. Probieren Sie Ihre App erneut aus, und Sie werden sehen, dass die Benachrichtigungen jetzt ein bisschen ansprechender aussehen.

> [!NOTE]
> Da Svelte ein Compiler ist, kann es die Größe unseres Bundles optimieren, indem es Funktionen ausschließt, die nicht verwendet werden. In diesem Fall, wenn wir unsere App für die Produktion mit `npm run build` kompilieren, wird unsere Datei `public/build/bundle.js` etwas weniger als 22 KB wiegen. Wenn wir die `transitions:fly`-Direktive entfernen, ist Svelte schlau genug, um zu erkennen, dass die Fly-Funktion nicht verwendet wird und die Datei `bundle.js`-Dateigröße wird auf nur 18 KB sinken.

Dies ist nur die Spitze des Eisbergs. Svelte hat viele Optionen für den Umgang mit Animationen und Übergängen. Svelte unterstützt auch die Angabe verschiedener Übergänge, die angewendet werden, wenn das Element hinzugefügt wird oder das DOM mit den `in:fn`/`out:fn` Direktiven verlässt, und es ermöglicht Ihnen auch, Ihre [eigenen CSS](https://learn.svelte.dev/tutorial/custom-css-transitions) und [JavaScript](https://learn.svelte.dev/tutorial/custom-js-transitions) Übergänge zu definieren. Es hat auch mehrere Easing-Funktionen, um die Änderungsrate im Laufe der Zeit zu bestimmen. Schauen Sie sich den [ease visualizer](https://svelte.dev/examples/easing) an, um die verschiedenen verfügbaren Easing-Funktionen zu erkunden.

## Der Code bisher

### Git

Um den Stand des Codes am Ende dieses Artikels zu sehen, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/07-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Den aktuellen Stand des Codes in einem REPL sehen Sie hier:

<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>

## Zusammenfassung

In diesem Artikel haben wir zwei neue Funktionen hinzugefügt: Eine `Alert`-Komponente und das Speichern der `todos` im Web Storage.

- Dies ermöglichte es uns, einige fortgeschrittene Svelte-Techniken zu demonstrieren. Wir entwickelten die `Alert`-Komponente, um zu zeigen, wie man zustandsübergreifendes Zustandsmanagement mit Stores implementiert. Wir sahen auch, wie man automatisch auf Stores abonniert, um sie nahtlos in das Svelte-Reaktivitätssystem zu integrieren.
- Dann sahen wir, wie man unseren eigenen Store von Grund auf implementiert und auch, wie man Sveltes beschreibbaren Store erweitert, um Daten im Web Storage zu speichern.
- Am Ende schauten wir uns an, wie man die Svelte `transition`-Direktive verwendet, um Animationen auf DOM-Elemente zu implementieren.

Im nächsten Artikel lernen wir, wie man TypeScript-Unterstützung zu unserer Svelte-Anwendung hinzufügt. Um alle Funktionen optimal nutzen zu können, werden wir auch unsere gesamte Anwendung auf TypeScript portieren.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
