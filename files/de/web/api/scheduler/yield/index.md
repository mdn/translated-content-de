---
title: "Scheduler: yield() Methode"
short-title: yield()
slug: Web/API/Scheduler/yield
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`yield()`**-Methode des [`Scheduler`](/de/docs/Web/API/Scheduler)-Interfaces wird verwendet, um während einer Aufgabe an den {{Glossary("Main_thread", "Haupt-Thread")}} abzugeben und die Ausführung später fortzusetzen, wobei die Fortsetzung als priorisierte Aufgabe eingeplant wird (siehe die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) für weitere Informationen). Dies ermöglicht es, lang andauernde Arbeiten aufzuteilen, sodass der Browser reaktionsfähig bleibt.

Die Aufgabe kann fortgesetzt werden, wenn das von der Methode zurückgegebene Promise erfüllt wird. Die Priorität für den Zeitpunkt der Erfüllung des Promises ist standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), kann aber eine andere Priorität erben, wenn der `yield()`-Aufruf innerhalb eines [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)-Callbacks erfolgt.

Außerdem kann die Fortsetzung der Arbeit nach dem `yield()`-Aufruf abgebrochen werden, wenn sie innerhalb eines `postTask()`-Callbacks erfolgt und die [Aufgabe abgebrochen wird](/de/docs/Web/API/Scheduler/postTask#aborting_tasks).

## Syntax

```js-nolint
yield()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit {{jsxref('undefined')}} erfüllt oder mit einem [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) abgelehnt wird.

## Beispiele

### Funktionsüberprüfung

Prüfen, ob die priorisierte Aufgabenplanung unterstützt wird, indem `scheduler.yield` auf {{jsxref('globalThis')}} getestet wird, entweder im Fenster- oder Arbeiterscope.

Zum Beispiel protokolliert der untenstehende Code `"scheduler.yield: Supported"`, wenn die API im aktuellen Browser unterstützt wird.

```js
// Check for support before using.
if (globalThis.scheduler?.yield) {
  console.log("scheduler.yield: Supported");
} else {
  console.error("scheduler.yield: NOT Supported");
}
```

### Grundlegende Anwendung

Lange Aufgaben können durch das Warten auf `scheduler.yield()` aufgeteilt werden. Die Funktion gibt ein Promise zurück, das an den Haupt-Thread abgegeben wird, um dem Browser zu ermöglichen, andere ausstehende Arbeiten auszuführen, z.B. auf Benutzereingaben zu reagieren, falls erforderlich. Der Browser plant eine Folgetätigkeit ein, die das Promise auflöst, woraufhin die Ausführung des Codes dort fortgesetzt wird, wo sie unterbrochen wurde.

Zum Beispiel, wenn ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Listener auf einer Schaltfläche erhebliche Arbeit erfordert, um neue Seiteninhalte zu laden und anzuzeigen, wird es kein visuelles Feedback für den Benutzer geben, dass sein Klick auf die Schaltfläche registriert wurde, bis diese Arbeit abgeschlossen ist. Ein `scheduler.yield()` kann in den Ereignis-Listener eingefügt werden, sodass schnelles Feedback gezeigt werden kann (z.B. ein Spinner), und dann kann der Rest der Arbeit erledigt werden, wenn die Ausführung nach dem Yield fortgesetzt wird.

```js
button.addEventListener("click", async () => {
  // Provide immediate feedback so the user knows their click was received.
  showSpinner();
  await scheduler.yield();
  // Do longer processing
  doSlowContentSwap();
});
```

Es kann auch ausreichend sein, schnelles Interaktionsfeedback mit der Standard-Benutzeroberfläche bereitzustellen. Zum Beispiel, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener auf einer Checkbox eine langsame Filterung von Seiteninhalt auslöst, kann ein `scheduler.yield()`-Aufruf eingefügt werden, um den Änderungszustand sofort anzuzeigen, bevor mit dem Rest der Ereignisantwort fortgefahren wird.

```js
checkbox.addEventListener("change", async () => {
  await scheduler.yield();
  doSlowContentFiltering();
});
```

In Situationen, in denen es umfangreiche Arbeiten gibt, die im Haupt-Thread ausgeführt werden müssen und in eine Reihe von Aufgaben aufgeteilt werden können, kann `scheduler.yield()` wiederholt aufgerufen werden, um die Seite insgesamt reaktionsfähig zu halten.

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

Die Reihenfolge, in der das vom `scheduler.yield()` zurückgegebene Promise im Vergleich zu anderen Aufgaben aufgelöst wird, basiert auf einer impliziten [Aufgabenpriorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

Standardmäßig wird `scheduler.yield()` mit einer [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible)-Priorität ausgeführt. Die Fortsetzung nach einem `scheduler.yield()`-Aufruf verhält sich jedoch etwas anders als `scheduler.postTask()`-Aufgaben mit derselben `priority`.

`scheduler.yield()` reiht seine Aufgabe in eine erhöhte Aufgabenwarteschlange im Vergleich zu einem `scheduler.postTask()` derselben Prioritätsstufe ein. So wird beispielsweise eine `scheduler.yield()`-Fortsetzung mit `"user-visible"`-Priorität nach `scheduler.postTask()`-Aufgaben der höheren `"user-blocking"`-Priorität, aber vor `scheduler.postTask()`-Aufgaben derselben `"user-visible"`-Priorität priorisiert (in der Spezifikation wird dies durch die [effektive Priorität](https://wicg.github.io/scheduling-apis/#scheduler-task-queue-effective-priority) einer Aufgabenwarteschlange definiert).

Manchmal wird beschrieben, dass `scheduler.yield()` seine Aufgabe an den Anfang der Warteschlange einer Prioritätsstufe einreiht, während `scheduler.postTask()`-Aufgaben ans Ende gehen. Dies kann ein nützliches Denkmodell sein. In Situationen mit nur wenigen Aufgaben bedeutet dies, dass bei gleicher Priorität die `scheduler.yield()`-Fortsetzung zuerst kommt, was zusätzliche Flexibilität bei der Aufgabenplanung bietet. Zum Beispiel:

```js
scheduler.postTask(() => console.log("user-visible postTask"));
scheduler.postTask(() => console.log("user-blocking postTask"), {
  priority: "user-blocking",
});
await scheduler.yield();
console.log("user-visible yield");
```

wird Folgendes protokollieren:

```plain
user-blocking postTask
user-visible yield
user-visible postTask
```

In Fällen jedoch, bei denen es mehrere `scheduler.yield()`-Aufrufe gibt, wird die Unterscheidung, dass `scheduler.yield()`-Fortsetzungsaufgaben in eine Warteschlange mit erhöhter Priorität eingereiht werden, wichtig, da eine zweite `scheduler.yield()`-Aufgabe nicht vor einer bereits vorhandenen in der Warteschlange ausgeführt wird.

Wenn eine Funktion ihre Arbeit yieldet, bevor eine zweite Funktion dies tut, wird die erste Funktion, die yieldet, zuerst fortgesetzt. Zum Beispiel:

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

wird Folgendes protokollieren:

```plain
starting first function
starting second function
ending first function
ending second function
```

### Vererbung von Aufgabenprioritäten

Ein `scheduler.yield()`-Aufruf innerhalb einer `scheduler.postTask()`-Aufgabe wird die Priorität der Aufgabe erben. Zum Beispiel wird die Arbeit nach einem `scheduler.yield()` innerhalb einer niedrig-prioritären [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking)-Aufgabe standardmäßig auch als `"background"` geplant (aber, wie gesagt, in die erhöhte `"background"` Prioritätswarteschlange eingefügt, um vor allen `"background"` `postTask()`-Aufgaben ausgeführt zu werden).

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

wird Folgendes protokollieren:

```plain
user-visible postTask
default-background yield
background postTask
```

`scheduler.yield()`-Fortsetzungen werden die Priorität der umgebenden `scheduler.postTask()`-Aufgabe erben, einschließlich ob die Priorität der Aufgabe [dynamisch geändert](/de/docs/Web/API/Prioritized_Task_Scheduling_API#changing_task_priorities) wurde.

### Abbruch eines Yields

Ähnlich wie bei der Prioritätseinstellung kann ein `scheduler.yield()`-Aufruf nicht direkt abgebrochen werden, aber es wird das Abbruchsignal einer umgebenden `scheduler.postTask()`-Aufgabe erben. Das Abbrechen der Aufgabe wird auch alle darin enthaltenen ausstehenden Yields abbrechen.

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

Das Beispiel ist insofern etwas konstruiert, da es immer den `taskController.abort()`-Aufruf innerhalb der Aufgabe selbst auslöst, aber der `abort()`-Aufruf könnte von überall ausgeführt werden. Zum Beispiel könnte er durch das Drücken einer "Abbrechen"-Schaltfläche durch den Benutzer ausgelöst werden.

In diesem Fall tritt das `abort()` nach Beginn der `scheduler.postTask()`-Aufgabe auf ("erster Teil der Arbeit" wird protokolliert), aber der Yield-Aufruf erbt das [Abbruchsignal](/de/docs/Web/API/AbortSignal), daher wird der `await scheduler.yield()`-Aufruf mit einem Abbruchgrund von `"cancel work"` eine Ausnahme auslösen.

### Verwendung von `yield()` innerhalb von `requestIdleCallback()`

`scheduler.yield()`-Aufrufe erben auch ihre Priorität von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback), wenn sie aus der Callback-Funktion heraus aufgerufen werden. In diesem Fall wird der [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background) Prioritätswert geerbt. Beachten Sie jedoch, dass `scheduler.yield()`-Aufrufe innerhalb von `requestIdleCallback()`-Callbacks nicht abgebrochen werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [`Scheduler`](/de/docs/Web/API/Scheduler)
- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
