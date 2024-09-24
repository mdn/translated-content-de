---
title: API zur priorisierten Aufgabenplanung
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}} {{AvailableInWorkers}}

Die **API zur priorisierten Aufgabenplanung** bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und Frameworks definiert sind.

Die [Aufgabenprioritäten](#aufgabenprioritäten) sind sehr grob und basieren darauf, ob Aufgaben die Benutzerinteraktion blockieren oder anderweitig die Benutzererfahrung beeinflussen oder im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der durch die API definierten breiten Kategorien feinere Prioritätsschemata implementieren.

Die API basiert auf Promises und unterstützt das Setzen und Ändern von Aufgabenprioritäten, das Verzögern von Aufgaben, die dem Scheduler hinzugefügt werden, das Abbrechen von Aufgaben und das Überwachen von Prioritätsänderungs- und Abbruchereignissen.

Auf dieser Seite finden Sie auch Informationen zur Methode {{domxref("Scheduling.isInputPending", "navigator.scheduling.isInputPending()")}}, die in einer anderen API-Spezifikation definiert wurde, aber in engem Zusammenhang mit der Aufgabenplanung steht. Diese Methode ermöglicht es Ihnen, zu überprüfen, ob Eingabeveranstaltungen in der Ereigniswarteschlange ausstehen, und somit Aufgabenwarteschlangen effizient zu handhaben, indem Sie nur dann zum Hauptthread zurückkehren, wenn es notwendig ist.

## Konzepte und Verwendung

### Priorisierte Aufgabenplanung

Die API zur priorisierten Aufgabenplanung ist sowohl in Fenster- als auch in Worker-Threads über die `scheduler`-Eigenschaft des globalen Objekts verfügbar.

Die Hauptmethode der API ist {{domxref('Scheduler.postTask()')}}, die eine Callback-Funktion ("die Aufgabe") annimmt und ein Versprechen zurückgibt, das sich mit dem Rückgabewert der Funktion auflöst oder mit einem Fehler ablehnt.

Die einfachste Form der API wird unten gezeigt. Dies erstellt eine Aufgabe mit der Standardpriorität [`user-visible`](#user-visible), die eine feste Priorität hat und nicht abgebrochen werden kann.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein Promise zurückgibt, können Sie bei dessen Auflösung asynchron darauf warten, indem Sie `then` verwenden, und Fehler abfangen, die von der Aufgaben-Callback-Funktion (oder wenn die Aufgabe abgebrochen wird) ausgelöst werden, indem Sie `catch` verwenden. Die Callback-Funktion kann jede Art von Funktion sein (unten demonstrieren wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Auf dieselbe Aufgabe kann auch mit `await`/`async` gewartet werden, wie unten gezeigt (beachten Sie, dass dies in einem {{Glossary("IIFE", "Sofortige-funktionale-Ausdruck (IIFE)")}} ausgeführt wird):

```js
(async () => {
  try {
    const result = await scheduler.postTask(() => "Task executing");
    console.log(result);
  } catch (error) {
    // Log AbortError or error thrown in task function
    console.error(`Error: ${error}`);
  }
})();
```

Sie können der `postTask()`-Methode auch ein Optionsobjekt übergeben, wenn Sie das Standardverhalten ändern möchten. Die Optionen sind:

- `priority` Damit können Sie eine bestimmte unveränderliche Priorität festlegen. Sobald festgelegt, kann die Priorität nicht mehr geändert werden.
- `signal` Damit können Sie ein Signal spezifizieren, das entweder ein {{domxref("TaskSignal")}} oder ein {{domxref("AbortSignal")}} sein kann. Das Signal ist mit einem Controller verbunden, der zum Abbrechen der Aufgabe verwendet werden kann. Ein {{domxref("TaskSignal")}} kann auch verwendet werden, um die Aufgabenpriorität festzulegen und zu ändern, wenn die [Aufgabe veränderlich](#veränderliche_und_unveränderliche_aufgabenpriorität) ist.
- `delay` Damit können Sie die Verzögerung angeben, bevor die Aufgabe zur Planung hinzugefügt wird, in Millisekunden.

Dasselbe Beispiel wie oben mit einer Prioritätsoption würde so aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

#### Aufgabenprioritäten

Geplante Aufgaben werden in Prioritätsreihenfolge ausgeführt, gefolgt von der Reihenfolge, in der sie zur Scheduler-Warteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten aufgeführt sind (geordnet von höchster zu niedrigster):

- `user-blocking`

  - : Aufgaben, die Benutzer daran hindern, mit der Seite zu interagieren.
    Dies umfasst das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`

  - : Aufgaben, die für den Benutzer sichtbar sind, aber nicht unbedingt Benutzereingaben blockieren.
    Dies könnte das Rendern von nicht wesentlichen Teilen der Seite umfassen, wie nicht wesentliche Bilder oder Animationen.

    Dies ist die Standardpriorität.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind.
    Dies könnte das Verarbeiten von Protokollen oder das Initialisieren von Drittanbieter-Libraries umfassen, die nicht für das Rendern erforderlich sind.

#### Veränderliche und unveränderliche Aufgabenpriorität

Es gibt viele Anwendungsfälle, bei denen sich die Aufgabenpriorität niemals ändern muss, während sie sich bei anderen ändert.
Zum Beispiel kann das Abrufen eines Bildes von einer `background` Aufgabe zu `user-visible` wechseln, wenn ein Karussell in den sichtbaren Bereich gescrollt wird.

Aufgabenprioritäten können als statisch (unveränderlich) oder dynamisch (änderbar) eingestellt werden, je nach den an {{domxref('Scheduler.postTask()')}} übergebenen Argumenten.

Die Aufgabenpriorität ist unveränderlich, wenn im `options.priority`-Argument ein Wert angegeben ist.
Der angegebene Wert wird für die Aufgabenpriorität verwendet und kann nicht geändert werden.

Die Priorität ist nur änderbar, wenn ein {{domxref("TaskSignal")}} an das `options.signal`-Argument übergeben wird **und** `options.priority` **nicht gesetzt** ist.
In diesem Fall nimmt die Aufgabe ihre anfängliche Priorität von der Signalpriorität an, und die Priorität kann anschließend durch Aufrufen von {{domxref("TaskController.setPriority()")}} auf dem mit dem Signal verbundenen Controller geändert werden.

Wenn die Priorität nicht mit `options.priority` oder durch Übermittlung eines {{domxref("TaskSignal")}} an `options.signal` festgelegt wird, ist sie standardmäßig `user-visible` (und per Definition unveränderlich).

Beachten Sie, dass eine Aufgabe, die abgebrochen werden muss, `options.signal` entweder auf {{domxref("TaskSignal")}} oder {{domxref("AbortSignal")}} setzen muss.
Jedoch zeigt ein {{domxref("AbortSignal")}} bei einer Aufgabe mit unveränderlicher Priorität deutlicher an, dass die Aufgabenpriorität nicht mit dem Signal geändert werden kann.

### isInputPending()

Die {{domxref("Scheduling.isInputPending", "isInputPending()")}} API soll bei der Aufgabenausführung helfen, indem sie Ihnen ermöglicht, Aufgabenläufer effizienter zu gestalten, indem sie dem Hauptthread nur dann weichen, wenn der Benutzer versucht, mit Ihrer Anwendung zu interagieren, anstatt dies in zufälligen Intervallen tun zu müssen.

Lassen Sie uns ein Beispiel durchgehen, um zu demonstrieren, was wir damit meinen. Wenn Sie mehrere Aufgaben haben, die ungefähr die gleiche Priorität haben, macht es Sinn, sie in separate Funktionen zu zerlegen, um die Wartung und das Debugging zu erleichtern und aus vielen anderen Gründen.

Zum Beispiel:

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

Strukturen dieser Art helfen jedoch nicht bei der Blockierung des Hauptthreads. Da alle fünf Aufgaben in einer Hauptfunktion ausgeführt werden, behandelt der Browser sie alle als eine einzige Aufgabe.

Um dies zu handhaben, neigen wir dazu, regelmäßig eine Funktion auszuführen, um den Code _zum Hauptthread "weichen" zu lassen_. Dies bedeutet, dass unser Code in mehrere Aufgaben unterteilt wird, zwischen deren Ausführung der Browser Gelegenheit erhält, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche zu behandeln. Ein häufiges Muster für diese Funktion verwendet {{domxref("setTimeout()")}}, um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann in einem Aufgabenläufermuster wie folgt verwendet werden, um den Hauptthread nach jeder ausgeführten Aufgabe zu entlasten:

```js
async function main() {
  // An array of functions to run
  const tasks = [a, b, c, d, e];

  // Loop over the tasks
  while (tasks.length > 0) {
    // Shift the first task off the tasks array
    const task = tasks.shift();

    // Run the task
    task();

    // Yield to the main thread
    await yield();
  }
}
```

Dies hilft bei dem Problem der Blockierung des Hauptthreads, könnte aber verbessert werden — wir können {{domxref("Scheduling.isInputPending", "navigator.scheduling.isInputPending()")}} verwenden, um die `yield()`-Funktion nur dann auszuführen, wenn der Benutzer versucht, mit der Seite zu interagieren:

```js
async function main() {
  // An array of functions to run
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // Yield to a pending user input
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // Shift the first task off the tasks array
      const task = tasks.shift();

      // Run the task
      task();
    }
  }
}
```

Dies ermöglicht es Ihnen, die Blockierung des Hauptthreads zu vermeiden, wenn der Benutzer aktiv mit der Seite interagiert, was möglicherweise eine reibungslosere Benutzererfahrung bietet. Indem Sie jedoch nur dann nachgeben, wenn es notwendig ist, können Sie die aktuelle Aufgabe fortsetzen, wenn keine Benutzereingaben verarbeitet werden müssen. Dies verhindert auch, dass Aufgaben hinter anderen, weniger wichtigen, vom Browser initiierten Aufgaben eingereiht werden, die nach der aktuellen Aufgabe geplant wurden.

## Schnittstellen

- {{domxref("Scheduler")}}
  - : Enthält die Methode {{domxref('Scheduler.postTask', 'postTask()')}}, mit der priorisierte Aufgaben zur Planung hinzugefügt werden können.
    Eine Instanz dieser Schnittstelle ist auf den globalen Objekten {{domxref("Window")}} oder {{domxref("WorkerGlobalScope")}} verfügbar (`this.scheduler`).
- {{domxref("Scheduling")}}
  - : Enthält die Methode {{domxref('Scheduling.isInputPending', 'isInputPending()')}}, mit der geprüft werden kann, ob Eingabeveranstaltungen in der Ereigniswarteschlange ausstehen.
- {{domxref("TaskController")}}
  - : Unterstützt sowohl das Abbrechen einer Aufgabe als auch das Ändern ihrer Priorität.
- {{domxref("TaskSignal")}}
  - : Ein Signalobjekt, das es Ihnen ermöglicht, eine Aufgabe abzubrechen und ihre Priorität bei Bedarf mit einem {{domxref("TaskController")}}-Objekt zu ändern.
- {{domxref("TaskPriorityChangeEvent")}}
  - : Die Schnittstelle für das Event {{domxref("TaskSignal/prioritychange_event","prioritychange")}}, das gesendet wird, wenn die Priorität einer Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#aufgabenprioritäten) niemals geändert werden muss, können Sie einen {{domxref("AbortController")}} und seinen zugehörigen {{domxref("AbortSignal")}} anstelle eines {{domxref("TaskController")}} und {{domxref("TaskSignal")}} verwenden.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.scheduling")}}
  - : Diese Eigenschaft ist der Einstiegspunkt zur Verwendung der Methode `Scheduling.isInputPending()`.
- {{domxref("Window.scheduler")}} und {{domxref("WorkerGlobalScope.scheduler")}}
  - : Diese Eigenschaften sind die Einstiegspunkte zur Nutzung der Methode `Scheduler.postTask()` in einem Fenster- oder Worker-Bereich.

## Beispiele

Beachten Sie, dass die folgenden Beispiele `mylog()` verwenden, um in ein Textfeld zu schreiben.
Der Code für den Logbereich und die Methode wird im Allgemeinen verborgen, um nicht von relevanterem Code abzulenken.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
```

```js
// hidden logger code - simplifies example
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

### Funktionen prüfen

Überprüfen Sie, ob die priorisierte Aufgabenplanung durch Testen der `scheduler`-Eigenschaft im globalen "`this`", das dem aktuellen Bereich ausgesetzt ist, unterstützt wird.

Der folgende Code druckt "Feature: Supported", wenn die API in diesem Browser unterstützt wird.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
```

```js hidden
//hidden logger code - simplifies example
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

```js
// Check that feature is supported
if ("scheduler" in this) {
  mylog("Feature: Supported");
} else {
  mylog("Feature: NOT Supported");
}
```

{{EmbedLiveSample('Feature checking','400px','70px')}}

### Grundlegende Verwendung

Aufgaben werden mit {{domxref('Scheduler.postTask()')}} eingestellt, wobei eine Callback-Funktion (Aufgabe) im ersten Argument angegeben wird, und ein optionales zweites Argument, das zur Angabe einer Aufgabenpriorität, eines Signals und/oder einer Verzögerung verwendet werden kann.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das sich mit dem Rückgabewert der Callback-Funktion auflöst oder entweder mit einem Abbruchfehler oder einem in der Funktion ausgelösten Fehler abgelehnt wird.

```html hidden
<textarea id="log" style="min-height: 100px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Da es ein Promise zurückgibt, kann {{domxref('Scheduler.postTask()')}} [mit anderen Promises verkettet](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises) werden.
Unten zeigen wir, wie man mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) auf die Auflösung des Versprechens wartet.
Dies verwendet die Standardpriorität (`user-visible`).

```js
// A function that defines a task
function myTask() {
  return "Task 1: user-visible";
}

if ("scheduler" in this) {
  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  scheduler.postTask(myTask).then((taskResult) => mylog(`${taskResult}`));
}
```

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) in einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der untenstehende Code zeigt, wie Sie diesen Ansatz möglicherweise verwenden könnten, um auf eine `user-blocking` Aufgabe zu warten.

```js
function myTask2() {
  return "Task 2: user-blocking";
}

async function runTask2() {
  const result = await scheduler.postTask(myTask2, {
    priority: "user-blocking",
  });
  mylog(result); // Logs 'Task 2: user-blocking'.
}
runTask2();
```

In einigen Fällen müssen Sie möglicherweise gar nicht auf die Ausführung warten.
Zur Einfachheit loggen viele der hier gezeigten Beispiele das Ergebnis einfach während der Aufgabe ausgeführt wird.

```js
// A function that defines a task
function myTask3() {
  mylog("Task 3: user-visible");
}

if ("scheduler" in this) {
  // Post task and log result when it runs
  scheduler.postTask(myTask3);
}
```

Das Protokoll unten zeigt die Ausgabe der drei oben genannten Aufgaben.
Beachten Sie, dass die Reihenfolge ihrer Ausführung zuerst von der Priorität und dann von der Deklarationsreihenfolge abhängt.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Permanente Prioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können mit dem `priority`-Parameter im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise festgelegt werden, sind [unveränderlich](#veränderliche_und_unveränderliche_aufgabenpriorität) (können nicht geändert werden).

Im Folgenden posten wir zwei Gruppen mit jeweils drei Aufgaben, wobei jedes Mitglied in umgekehrter Prioritätsreihenfolge steht.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen loggt jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, weil wir das zur Darstellung der Ausführungsreihenfolge nicht benötigen).

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

```js
if ("scheduler" in this) {
  // drei Aufgaben in umgekehrter Prioritätsreihenfolge
  scheduler.postTask(() => mylog("bckg 1"), { priority: "background" });
  scheduler.postTask(() => mylog("usr-vis 1"), { priority: "user-visible" });
  scheduler.postTask(() => mylog("usr-blk 1"), { priority: "user-blocking" });

  // drei weitere Aufgaben in umgekehrter Prioritätsreihenfolge
  scheduler.postTask(() => mylog("bckg 2"), { priority: "background" });
  scheduler.postTask(() => mylog("usr-vis 2"), { priority: "user-visible" });
  scheduler.postTask(() => mylog("usr-blk 2"), { priority: "user-blocking" });

  // Aufgabe mit Standardpriorität: user-visible
  scheduler.postTask(() => mylog("usr-vis 3 (default)"));
}
```

```html hidden
<textarea id="log" style="min-height: 120px; width: 95%"></textarea>
```

Die Ausgabe unten zeigt, dass die Aufgaben in Prioritätsreihenfolge und dann in Deklarationsreihenfolge ausgeführt werden.

{{EmbedLiveSample("Permanent priorities",'400px','170px')}}

### Ändern von Aufgabenprioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können auch ihren Anfangswert von einem {{domxref("TaskSignal")}}, das im optionalen zweiten Argument an `postTask()` übergeben wird, übernehmen.
Wenn die Priorität auf diese Weise festgelegt wird, kann die Priorität der Aufgabe [dann geändert](#veränderliche_und_unveränderliche_aufgabenpriorität) werden, indem der mit dem Signal verbundene Controller verwendet wird.

> [!NOTE]
> Das Festlegen und Ändern von Aufgabenprioritäten mit einem Signal funktioniert nur, wenn das `options.priority`-Argument von `postTask()` nicht festgelegt ist und wenn `options.signal` ein {{domxref("TaskSignal")}} ist (und kein {{domxref("AbortSignal")}}).

Der untenstehende Code zeigt zunächst, wie man einen {{domxref("TaskController")}} erstellt und die anfängliche Priorität seines Signals im {{domxref("TaskController.TaskController", "TaskController()")}}-Konstruktor auf `user-blocking` setzt.

Der Code verwendet dann `addEventListener()`, um einen Ereignis-Listener für das Signal des Controllers hinzuzufügen (alternativ könnten wir die Eigenschaft `TaskSignal.onprioritychange` verwenden, um einen Ereignis-Handler hinzuzufügen).
Der Ereignis-Handler verwendet {{domxref('TaskPriorityChangeEvent.previousPriority', 'previousPriority')}} des Ereignisses, um die ursprüngliche Priorität zu erhalten, und {{domxref("TaskSignal.priority")}} des Ereignis-Ziels, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, indem das Signal übergeben wird, und wir ändern sofort die Priorität auf `background`, indem wir {{domxref("TaskController.setPriority()")}} auf dem Controller aufrufen.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

```js
if ("scheduler" in this) {
  // Einen TaskController erstellen und die Priorität seines Signals auf 'user-blocking' setzen
  const controller = new TaskController({ priority: "user-blocking" });

  // 'prioritychange' Ereignisse für das Signal des Controllers abhören.
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    mylog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Aufgabe unter Verwendung des Signals des Controllers posten.
  // Die Signalpriorität setzt die anfängliche Priorität der Aufgabe
  scheduler.postTask(() => mylog("Task 1"), { signal: controller.signal });

  // Die Priorität mit dem Controller auf 'background' ändern
  controller.setPriority("background");
}
```

Die Ausgabe unten zeigt, dass die Priorität erfolgreich von `user-blocking` zu `background` geändert wurde.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie hätte auch während der Ausführung der Aufgabe geändert werden können.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Aufgaben abbrechen

Aufgaben können sowohl mit einem {{domxref("TaskController")}} als auch einem {{domxref("AbortController")}} auf genau die gleiche Weise abgebrochen werden.
Der einzige Unterschied besteht darin, dass Sie einen {{domxref("TaskController")}} verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Der untenstehende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch das {{domxref("AbortSignal/abort_event", "abort")}}-Ereignis abhören könnten, das auf dem {{domxref("TaskSignal")}} oder {{domxref("AbortSignal")}} ausgelöst wird und den Abbruch dort protokollieren.

```js
if ("scheduler" in this) {
  // Einen TaskController mit Standardpriorität deklarieren
  const abortTaskController = new TaskController();
  // Aufgabe unter Verwendung des Signals des Controllers posten
  scheduler
    .postTask(() => mylog("Task executing"), {
      signal: abortTaskController.signal,
    })
    .then((taskResult) => mylog(`${taskResult}`)) // Dies wird nicht abgerufen!
    .catch((error) => mylog(`Error: ${error}`)); // Den Fehler protokollieren

  // Die Aufgabe abbrechen
  abortTaskController.abort();
}
```

Das Protokoll unten zeigt die abgebrochene Aufgabe.

{{EmbedLiveSample("Aborting tasks",'400px','100px')}}

### Aufgaben verzögern

Aufgaben können verzögert werden, indem Sie eine ganze Zahl in Millisekunden im Parameter `options.delay` für `postTask()` angeben.
Dies fügt die Aufgabe effektiv zur priorisierten Warteschlange mit einem Timeout hinzu, wie es mit {{domxref("setTimeout()")}} erstellt werden könnte.
Die `delay` ist die minimale Zeit, bevor die Aufgabe dem Scheduler hinzugefügt wird; sie kann länger sein.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Der untenstehende Code zeigt zwei Aufgaben (als Pfeilfunktionen) mit Verzögerung.

```js
if ("scheduler" in this) {
  // Aufgabe als Pfeilfunktion mit Verzögerung von 2 Sekunden posten
  scheduler
    .postTask(() => "Task delayed by 2000ms", { delay: 2000 })
    .then((taskResult) => mylog(`${taskResult}`));
  scheduler
    .postTask(() => "Next task should complete in about 2000ms", { delay: 1 })
    .then((taskResult) => mylog(`${taskResult}`));
}
```

Aktualisieren Sie die Seite.
Beachten Sie, dass die zweite Zeichenfolge nach etwa 2 Sekunden im Protokoll erscheint.

{{EmbedLiveSample("Delaying tasks",'400px','100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) auf dem Airbnb-Blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks#yield_only_when_necessary) auf web.dev (2022)
