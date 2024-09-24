---
title: "Scheduler: yield() Methode"
short-title: yield()
slug: Web/API/Scheduler/yield
l10n:
  sourceCommit: 79f75809844204ce0dd5a1411095b7851711cdeb
---

{{APIRef('Prioritized Task Scheduling API')}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`yield()`** Methode der [`Scheduler`](/de/docs/Web/API/Scheduler) Schnittstelle wird verwendet, um während einer Aufgabe dem {{Glossary("Main_thread", "Haupt-Thread")}} Vorrang zu gewähren und die Ausführung später fortzusetzen, wobei die Fortsetzung als priorisierte Aufgabe eingeplant wird (siehe die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) für weitere Informationen). Dies ermöglicht es, langwierige Arbeiten zu unterbrechen, so dass der Browser reaktionsfähig bleibt.

Die Aufgabe kann fortgesetzt werden, wenn das von der Methode zurückgegebene Versprechen erfüllt wird. Die Priorität, wann das Versprechen erfüllt wird, ist standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), kann jedoch eine andere Priorität erben, wenn der `yield()`-Aufruf innerhalb eines [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) Rückrufs erfolgt.

Außerdem kann die Fortsetzung der Arbeit nach dem `yield()`-Aufruf abgebrochen werden, wenn sie innerhalb eines `postTask()`-Rückrufs erfolgt und die [Aufgabe abgebrochen wird](/de/docs/Web/API/Scheduler/postTask#aborting_tasks).

## Syntax

```js-nolint
yield()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit {{jsxref('undefined')}} erfüllt oder mit einem [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) abgelehnt wird.

## Beispiele

### Feature-Überprüfung

Prüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie `scheduler.yield` auf {{jsxref('globalThis')}} testen, entweder im Fenster- oder Arbeitsbereich.

Zum Beispiel protokolliert der folgende Code `"scheduler.yield: Supported"`, wenn die API im aktuellen Browser unterstützt wird.

```js
// Check for support before using.
if (globalThis.scheduler?.yield) {
  console.log("scheduler.yield: Supported");
} else {
  console.error("scheduler.yield: NOT Supported");
}
```

### Grundlegende Nutzung

Lange Aufgaben können durch Warten auf `scheduler.yield()` aufgeteilt werden. Die Funktion gibt ein Versprechen zurück, das dem Haupt-Thread Vorrang gewährt, damit der Browser andere anstehende Arbeiten ausführen kann - wie z.B. auf Benutzereingaben reagieren - wenn nötig. Der Browser plant eine Folgetask, die das Versprechen erfüllt, an welchem Punkt die Ausführung des Codes fortgesetzt werden kann, an dem sie unterbrochen wurde.

Wenn zum Beispiel ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Listener auf einer Schaltfläche zu erheblicher Arbeit führt, um neue Seiteninhalte zu laden und anzuzeigen, wird es kein visuelles Feedback für den Benutzer geben, dass sein Klick überhaupt registriert wurde, bis diese Arbeit abgeschlossen ist. Ein `scheduler.yield()` kann in den Ereignis-Listener eingefügt werden, so dass schnelles Feedback wie ein Spinner angezeigt werden kann, und dann kann der Rest der Arbeit erfolgen, wenn die Ausführung nach dem Yield fortgesetzt wird.

```js
button.addEventListener("click", async () => {
  // Provide immediate feedback so the user knows their click was received.
  showSpinner();
  await scheduler.yield();
  // Do longer processing
  doSlowContentSwap();
});
```

Es kann auch ausreichen, schnelles Interaktionsfeedback mit der Standard-Benutzeroberfläche bereitzustellen. Wenn z.B. ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener auf einer Checkbox eine langsame Filterung von Seiteninhalten auslöst, kann ein `scheduler.yield()`-Aufruf eingefügt werden, um den Wechsel des Kontrollkästchenzustandes sofort anzuzeigen, bevor die restliche Ereignisantwort fortgesetzt wird.

```js
checkbox.addEventListener("change", async () => {
  await scheduler.yield();
  doSlowContentFiltering();
});
```

In Situationen, in denen lange Arbeit auf dem Haupt-Thread getan werden muss, die in eine Reihe von Aufgaben aufgeteilt werden kann, kann `scheduler.yield()` wiederholt aufgerufen werden, um die Seite währenddessen reaktionsfähig zu halten.

```js
function doWork(value) {
  console.log(`work chunk ${value}`);
}

const workList = [0, 1, 2, 3, 4];

for (const work of workList) {
  doWork(work);
  await scheduler.yield();
}
```

### Yield-Priorität

Die Reihenfolge, in der das durch `scheduler.yield()` zurückgegebene Versprechen im Verhältnis zu anderen Aufgaben erfüllt wird, basiert auf einer impliziten [Aufgabenpriorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

Standardmäßig wird `scheduler.yield()` mit einer [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) Priorität ausgeführt. Allerdings hat die Fortsetzung nach einem `scheduler.yield()`-Aufruf ein leicht anderes Verhalten als `scheduler.postTask()` Aufgaben der gleichen `priority`.

`scheduler.yield()` reiht seine Aufgabe in eine übergeordnete Aufgabenwarteschlange im Vergleich zu einem `scheduler.postTask()` derselben Prioritätsstufe ein. So wird z.B. eine `scheduler.yield()`-Fortsetzung mit `"user-visible"` Priorität nach `scheduler.postTask()`-Aufgaben der höheren `"user-blocking"` Prioritätsebene priorisiert, aber vor `scheduler.postTask()`-Aufgaben derselben `"user-visible"` Priorität (in der Spezifikation wird dies durch die [effektive Priorität](https://wicg.github.io/scheduling-apis/#scheduler-task-queue-effective-priority) einer Aufgabenwarteschlange definiert).

Dies wird manchmal beschrieben als `scheduler.yield()`, das seine Aufgabe am Anfang der Warteschlange einer Prioritätsstufe einreiht, während `scheduler.postTask()` Aufgaben ans Ende gehen. Dies kann ein nützliches mentales Modell sein. In Situationen mit nur wenigen Aufgaben bedeutet dies, dass bei derselben Priorität die `scheduler.yield()`-Fortsetzung zuerst kommt, was zusätzlichen Spielraum in der Planung von Aufgaben erlaubt. Zum Beispiel:

```js
scheduler.postTask(() => console.log("user-visible postTask"));
scheduler.postTask(() => console.log("user-blocking postTask"), {
  priority: "user-blocking",
});
await scheduler.yield();
console.log("user-visible yield");
```

protokolliert das Folgende:

```plain
user-blocking postTask
user-visible yield
user-visible postTask
```

In Fällen, in denen es mehrere `scheduler.yield()` Aufrufe gibt, wird die Unterscheidung, dass die `scheduler.yield()`-Fortsetzungsaufgaben in eine Warteschlange mit erhöhter Priorität eingehen, wichtig, da eine zweite `scheduler.yield()`-Aufgabe nicht vor einer ausgeführt wird, die bereits in der Warteschlange ist.

Wenn eine Funktion ihre Arbeit vor einer zweiten Funktion unterbricht, wird die erste Funktion, die unterbrochen wurde, zuerst fortgesetzt. Zum Beispiel:

```js
async function first() {
  console.log("starting first function");
  await scheduler.yield();
  console.log("ending first function");
}

async function second() {
  console.log("starting second function");
  await scheduler.yield();
  console.log("ending second function");
}

first();
second();
```

protokolliert das Folgende:

```plain
starting first function
starting second function
ending first function
ending second function
```

### Erben von Aufgabenprioritäten

Ein `scheduler.yield()` Aufruf innerhalb einer `scheduler.postTask()` Aufgabe erbt die Priorität der Aufgabe. Zum Beispiel wird Arbeit nach einem `scheduler.yield()` innerhalb einer niedrig priorisierten [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking) Aufgabe auch standardmäßig als `"background"` eingeplant (aber nochmals in der erhöhten `"background"` Prioritätswarteschlange eingefügt, so dass sie vor allen `"background"` `postTask()` Aufgaben ausgeführt wird).

Zum Beispiel:

```js
async function backgroundWork() {
  scheduler.postTask(() => console.log("background postTask"), {
    priority: "background",
  });
  scheduler.postTask(() => console.log("user-visible postTask"), {
    priority: "user-visible",
  });
  // yield() inherits "background" priority from surrounding task.
  await scheduler.yield();
  console.log("default-background yield");
}

await scheduler.postTask(backgroundWork, { priority: "background" });
```

protokolliert das Folgende:

```plain
user-visible postTask
default-background yield
background postTask
```

`scheduler.yield()` Fortsetzungen erben, welche Priorität auch immer die enthaltene `scheduler.postTask()` Aufgabe hat, einschließlich ob die Priorität der Aufgabe [dynamisch geändert wurde](/de/docs/Web/API/Prioritized_Task_Scheduling_API#changing_task_priorities).

### Abbrechen eines Yields

Ähnlich wie beim Setzen von Prioritäten kann ein `scheduler.yield()` Aufruf nicht direkt abgebrochen werden, aber er wird das Abbruchsignal von einer umgebenden `scheduler.postTask()` Aufgabe erben. Das Abbrechen der Aufgabe wird auch alle anstehenden Yields darin abbrechen.

Dieses Beispiel verwendet einen [`TaskController`](/de/docs/Web/API/TaskController), um eine Aufgabe mit einem `scheduler.yield()` darin [abzubrechen](/de/docs/Web/API/Prioritized_Task_Scheduling_API#aborting_tasks).

```js
const taskController = new TaskController();

function firstHalfOfWork() {
  console.log("first half of work");
  taskController.abort("cancel work");
}

function secondHalfOfWork() {
  // Never runs.
  console.log("second half of work");
}

scheduler.postTask(
  async () => {
    firstHalfOfWork();
    await scheduler.yield();
    secondHalfOfWork();
  },
  { signal: taskController.signal },
);
```

Das Beispiel ist etwas konstruiert, da es immer den `taskController.abort()` Aufruf innerhalb der Aufgabe selbst auslöst, aber der `abort()`-Aufruf könnte von überall her kommen. Zum Beispiel könnte er durch das Drücken einer 'Abbrechen'-Schaltfläche durch den Benutzer ausgelöst werden.

In diesem Fall erfolgt der `abort()` Aufruf, nachdem die `scheduler.postTask()`-Aufgabe bereits begonnen hat (`"first half of work"` wird protokolliert), aber der Yield-Aufruf erbt das [Abbruchsignal](/de/docs/Web/API/AbortSignal), weshalb der `await scheduler.yield()`-Aufruf mit einem Abbruchgrund von `"cancel work"` auslöst.

### Verwendung von `yield()` innerhalb von `requestIdleCallback()`

`scheduler.yield()` Aufrufe erben auch ihre Priorität von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback), wenn sie innerhalb der Rückruffunktion aufgerufen werden. In diesem Fall wird der [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background) Prioritätswert geerbt. Beachten Sie jedoch, dass `scheduler.yield()` Aufrufe innerhalb von `requestIdleCallback()` Rückrufen nicht abbrechbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [`Scheduler`](/de/docs/Web/API/Scheduler)
- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
