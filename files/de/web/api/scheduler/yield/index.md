---
title: "Scheduler: yield() Methode"
short-title: yield()
slug: Web/API/Scheduler/yield
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef('Prioritized Task Scheduling API')}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`yield()`**-Methode der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle wird verwendet, um während einer Aufgabe an den {{Glossary("Main_thread", "Haupt-Thread")}} abzugeben und die Ausführung später fortzusetzen, wobei die Fortsetzung als priorisierte Aufgabe geplant wird (weitere Informationen finden Sie in der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)). Dadurch kann lang andauernde Arbeit in Teile aufgeteilt werden, sodass der Browser reaktionsfähig bleibt.

Die Aufgabe kann fortgesetzt werden, wenn das von der Methode zurückgegebene Promise aufgelöst wird. Die Priorität dafür, wann das Promise aufgelöst wird, ist standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), kann jedoch eine andere Priorität erben, wenn der `yield()`-Aufruf innerhalb eines [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)-Callbacks erfolgt.

Darüber hinaus kann die Fortsetzung der Arbeit nach dem `yield()`-Aufruf abgebrochen werden, wenn sie innerhalb eines `postTask()`-Callbacks erfolgt und die [Aufgabe abgebrochen wird](/de/docs/Web/API/Scheduler/postTask#aborting_tasks).

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

Überprüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie `scheduler.yield` auf {{jsxref('globalThis')}} testen, entweder im Fenster- oder im Arbeiterscope.

Das folgende Codebeispiel protokolliert `"scheduler.yield: Supported"`, wenn die API im aktuellen Browser unterstützt wird.

```js
// Check for support before using.
if (globalThis.scheduler?.yield) {
  console.log("scheduler.yield: Supported");
} else {
  console.error("scheduler.yield: NOT Supported");
}
```

### Grundlegende Verwendung

Lange Aufgaben können durch Abwarten von `scheduler.yield()` aufgeteilt werden. Die Funktion gibt ein Promise zurück, das an den Haupt-Thread abgibt, sodass der Browser andere anstehende Arbeiten erledigen kann – wie das Reagieren auf Benutzereingaben – falls erforderlich. Der Browser plant eine Folgeaufgabe, die das Promise auflöst, woraufhin die Ausführung des Codes an der Stelle fortgesetzt wird, an der sie unterbrochen wurde.

Wenn zum Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener auf einem Button zu wesentlicher Arbeit führt, um neue Seiteninhalte zu laden und anzuzeigen, erfolgt keine visuelle Rückmeldung an den Benutzer, dass der Buttonklick überhaupt von der Seite registriert wurde, bis diese Arbeit abgeschlossen ist. Ein `scheduler.yield()` kann in den Ereignislistener eingefügt werden, sodass eine schnelle Rückmeldung gezeigt werden kann (wie ein Spinner), und dann kann die verbleibende Arbeit durchgeführt werden, wenn die Ausführung nach der Übergabe fortgesetzt wird.

```js
button.addEventListener("click", async () => {
  // Provide immediate feedback so the user knows their click was received.
  showSpinner();
  await scheduler.yield();
  // Do longer processing
  doSlowContentSwap();
});
```

Es könnte auch ausreichen, eine schnelle Interaktionsrückmeldung mit dem standardmäßigen UI zu geben. Zum Beispiel: Wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Listener auf einer Checkbox das langsame Filtern von Seiteninhalten auslöst, kann ein `scheduler.yield()`-Aufruf eingefügt werden, um den Änderung des Zustands der Checkbox sofort anzuzeigen, bevor mit dem Rest der Ereignisantwort fortgefahren wird.

```js
checkbox.addEventListener("change", async () => {
  await scheduler.yield();
  doSlowContentFiltering();
});
```

In Situationen, in denen es umfangreiche Arbeiten auf dem Haupt-Thread gibt, die in eine Reihe von Aufgaben unterteilt werden können, kann `scheduler.yield()` wiederholt aufgerufen werden, um die Seite während dieser Zeit reaktionsfähig zu halten.

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

Die Reihenfolge, in der das von `scheduler.yield()` zurückgegebene Promise im Verhältnis zu anderen Aufgaben aufgelöst wird, basiert auf einer impliziten [Aufgaben-Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

Standardmäßig wird `scheduler.yield()` mit einer Priorität von [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) ausgeführt. Die Fortsetzung nach einem `scheduler.yield()`-Aufruf hat jedoch ein leicht abweichendes Verhalten im Vergleich zu `scheduler.postTask()`-Aufgaben derselben `priority`.

`scheduler.yield()` reiht seine Aufgabe in eine verstärkte Aufgabenwarteschlange ein im Vergleich zu einem `scheduler.postTask()` mit derselben Prioritätsstufe. Wenn also eine `scheduler.yield()`-Fortsetzung mit `"user-visible"`-Priorität nach `scheduler.postTask()`-Aufgaben der höheren `"user-blocking"`-Priorität priorisiert wird, aber vor `scheduler.postTask()`-Aufgaben derselben `"user-visible"`-Priorität (im Standard wird dies durch die [effektive Priorität](https://wicg.github.io/scheduling-apis/#scheduler-task-queue-effective-priority) einer Aufgabenschlange definiert).

Dies wird manchmal beschrieben als `scheduler.yield()`, das seine Aufgabe an der Spitze einer Prioritätsstufen-Warteschlange einreiht, während `scheduler.postTask()`-Aufgaben ans Ende gehen. Dies kann ein nützliches mentales Modell sein. In Situationen mit nur wenigen Aufgaben bedeutet das, dass bei gleicher Priorität die `scheduler.yield()`-Fortsetzung zuerst kommt, was zusätzliche Flexibilität darin bietet, wie Aufgaben geplant werden können. Zum Beispiel:

```js
scheduler.postTask(() => console.log("user-visible postTask"));
scheduler.postTask(() => console.log("user-blocking postTask"), {
  priority: "user-blocking",
});
await scheduler.yield();
console.log("user-visible yield");
```

wird folgendes protokollieren:

```plain
user-blocking postTask
user-visible yield
user-visible postTask
```

In Fällen, in denen es mehrere `scheduler.yield()`-Aufrufe gibt, wird die Unterscheidung, dass die `scheduler.yield()`-Fortsetzungsaufgaben in eine verstärkte Prioritätswarteschlange gehen, wichtig, da eine zweite `scheduler.yield()`-Aufgabe nicht vor einer ausgeführt wird, die bereits in der Warteschlange ist.

Wenn eine Funktion ihre Arbeit abgibt, bevor eine zweite Funktion dies tut, wird die erste Funktion, die abgegeben hat, zuerst fortgesetzt. Zum Beispiel:

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

wird folgendes protokollieren:

```plain
starting first function
starting second function
ending first function
ending second function
```

### Vererbung von Aufgabenprioritäten

Ein `scheduler.yield()`-Aufruf innerhalb einer `scheduler.postTask()`-Aufgabe wird die Priorität der Aufgabe erben. Zum Beispiel wird die Arbeit nach einem `scheduler.yield()` innerhalb einer niedrig priorisierten [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking)-Aufgabe standardmäßig auch als `"background"` geplant (aber, wie zuvor erwähnt, in die verstärkte `"background"`-Prioritätswarteschlange eingefügt, sodass sie vor allen `"background"`-`postTask()`-Aufgaben ausgeführt wird).

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

wird folgendes protokollieren:

```plain
user-visible postTask
default-background yield
background postTask
```

`scheduler.yield()`-Fortsetzungen werden jede Priorität der enthaltenen `scheduler.postTask()`-Aufgabe erben, einschließlich ob die Priorität der Aufgabe [dynamisch geändert wurde](/de/docs/Web/API/Prioritized_Task_Scheduling_API#changing_task_priorities).

### Abbrechen einer Übergabe

Ähnlich der Prioritätseinstellung kann ein `scheduler.yield()`-Aufruf nicht direkt abgebrochen werden, aber er wird das Abbruchsignal von einer umgebenden `scheduler.postTask()`-Aufgabe erben. Das Abbrechen der Aufgabe wird auch alle ausstehenden Übergaben darin abbrechen.

Dieses Beispiel verwendet einen [`TaskController`](/de/docs/Web/API/TaskController) zum [Abbrechen einer Aufgabe](/de/docs/Web/API/Prioritized_Task_Scheduling_API#aborting_tasks) mit einem `scheduler.yield()` darin.

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

Das Beispiel ist etwas konstruiert, da es den `taskController.abort()`-Aufruf immer innerhalb der Aufgabe selbst auslöst, aber der `abort()`-Aufruf könnte von überall kommen. Zum Beispiel könnte er durch das Drücken eines 'Abbrechen'-Buttons durch den Benutzer ausgelöst werden.

In diesem Fall erfolgt das `abort()` nach dem Start der `scheduler.postTask()`-Aufgabe (`"erste Hälfte der Arbeit"` wird protokolliert), aber der Übergabeaufruf erbt das [Abbruchsignal](/de/docs/Web/API/AbortSignal), weshalb der `await scheduler.yield()`-Aufruf einen Abbruch mit dem Grund `"Arbeit abbrechen"` auslösen wird.

### Verwendung von `yield()` innerhalb von `requestIdleCallback()`

`scheduler.yield()`-Aufrufe erben auch ihre Priorität von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback), wenn sie innerhalb der Callback-Funktion aufgerufen werden. In diesem Fall wird die [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background) Prioritätswert geerbt. Beachten Sie jedoch, dass `scheduler.yield()`-Aufrufe innerhalb von `requestIdleCallback()`-Callbacks nicht abgebrochen werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [`Scheduler`](/de/docs/Web/API/Scheduler)
- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
