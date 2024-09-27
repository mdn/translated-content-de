---
title: "Scheduler: yield() Methode"
short-title: yield()
slug: Web/API/Scheduler/yield
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef('Prioritized Task Scheduling API')}}{{AvailableInWorkers}}

Die **`yield()`** Methode der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle wird verwendet, um während einer Aufgabe an den [Hauptthread](/de/docs/Glossary/Main_thread) zu übergeben und die Ausführung später fortzusetzen. Die Fortsetzung wird als priorisierte Aufgabe geplant (siehe die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) für weitere Informationen). Dies ermöglicht es, langwierige Arbeiten aufzuteilen, damit der Browser reaktionsfähig bleibt.

Die Aufgabe kann fortgesetzt werden, wenn das von der Methode zurückgegebene Promise aufgelöst wird. Die Priorität für die Auflösung des Promises wird standardmäßig auf [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) gesetzt, kann jedoch eine andere Priorität erben, wenn der `yield()`-Aufruf innerhalb eines [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)-Callbacks erfolgt.

Zudem kann die Fortsetzung der Arbeit nach dem `yield()`-Aufruf abgebrochen werden, wenn diese innerhalb eines `postTask()`-Callbacks erfolgt und die [Aufgabe abgebrochen wird](/de/docs/Web/API/Scheduler/postTask#aborting_tasks).

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

Überprüfen Sie, ob eine priorisierte Aufgabenplanung unterstützt wird, indem Sie nach `scheduler.yield` auf {{jsxref('globalThis')}} entweder im Fenster- oder im Worker-Bereich testen.

Zum Beispiel protokolliert der unten stehende Code `"scheduler.yield: Supported"`, wenn die API im aktuellen Browser unterstützt wird.

```js
// Check for support before using.
if (globalThis.scheduler?.yield) {
  console.log("scheduler.yield: Supported");
} else {
  console.error("scheduler.yield: NOT Supported");
}
```

### Grundlegende Verwendung

Lange Aufgaben können durch das Warten auf `scheduler.yield()` aufgeteilt werden. Die Funktion gibt ein Promise zurück, das dem Hauptthread erneut übergibt, um dem Browser zu ermöglichen, andere ausstehende Arbeiten auszuführen – wie etwa auf Benutzereingaben zu reagieren – falls erforderlich. Der Browser plant eine Folgeaufgabe, die das Promise auflöst, woraufhin die Ausführung des Codes dort fortgesetzt werden kann, wo sie aufgehört hat.

Wenn zum Beispiel ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignislisten auf einem Button signifikante Arbeit zum Laden und Anzeigen neuer Seiteninhalte zur Folge hat, wird es kein visuelles Feedback für den Benutzer geben, dass der Button-Klick überhaupt registriert wurde, bis diese Arbeit abgeschlossen ist. Ein `scheduler.yield()` kann in den Ereignislisten eingefügt werden, sodass schnelles Feedback (wie ein Spinner) angezeigt werden kann, und dann kann der Rest der Arbeit ausgeführt werden, wenn die Ausführung nach dem Yield fortgeführt wird.

```js
button.addEventListener("click", async () => {
  // Provide immediate feedback so the user knows their click was received.
  showSpinner();
  await scheduler.yield();
  // Do longer processing
  doSlowContentSwap();
});
```

Es kann auch ausreichend sein, mit der Standard-UI eine schnelle Interaktionsrückmeldung bereitzustellen. Zum Beispiel, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislisten auf einem Kontrollkästchen eine langsame Filterung des Seiteninhalts auslöst, kann ein `scheduler.yield()`-Aufruf eingefügt werden, um den Zustandswechsel des Kontrollkästchens sofort anzuzeigen, bevor zur verbleibenden Antwort auf das Ereignis fortgefahren wird.

```js
checkbox.addEventListener("change", async () => {
  await scheduler.yield();
  doSlowContentFiltering();
});
```

In Situationen, in denen lange Arbeiten auf dem Hauptthread erledigt werden müssen, die in eine Reihe von Aufgaben aufgeteilt werden können, kann `scheduler.yield()` wiederholt aufgerufen werden, um die Seite währenddessen reaktionsfähig zu halten.

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

Die Reihenfolge, in der das von `scheduler.yield()` zurückgegebene Promise im Verhältnis zu anderen Aufgaben aufgelöst wird, basiert auf einer impliziten [Aufgabenpriorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

Standardmäßig wird `scheduler.yield()` mit einer [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible)-Priorität ausgeführt. Die Fortsetzung nach einem `scheduler.yield()`-Aufruf hat jedoch ein etwas anderes Verhalten als `scheduler.postTask()`-Aufgaben mit derselben Priorität.

`scheduler.yield()` stellt seine Aufgabe in eine Vorrang-Aufgabenwarteschlange gegenüber einem `scheduler.postTask()` derselben Priorität. So wird zum Beispiel eine `scheduler.yield()`-Fortsetzung mit `"user-visible"` Priorität nach `scheduler.postTask()`-Aufgaben der höheren `"user-blocking"` Priorität, aber vor `scheduler.postTask()`-Aufgaben derselben `"user-visible"` Priorität priorisiert (in der Spezifikation wird dies durch eine Aufgabenwarteschlange mit [effektiver Priorität](https://wicg.github.io/scheduling-apis/#scheduler-task-queue-effective-priority) definiert).

Dies wird manchmal so beschrieben, dass `scheduler.yield()` seine Aufgabe an die Spitze der Warteschlange einer Prioritätsstufe setzt, während `scheduler.postTask()`-Aufgaben an das Ende gehen. Dies kann ein hilfreiches mentales Modell sein. In Situationen mit nur wenigen Aufgaben bedeutet das bei gleicher Priorität, dass die `scheduler.yield()`-Fortsetzung zuerst kommt, was zusätzliche Flexibilität bei der Planung von Aufgaben ermöglicht. Zum Beispiel:

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

In Fällen, in denen es jedoch mehrere `scheduler.yield()`-Aufrufe gibt, wird der Unterschied, dass die `scheduler.yield()`-Fortsetzungsaufgaben in eine Warteschlange mit höherer Priorität gehen, wichtig, weil eine zweite `scheduler.yield()`-Aufgabe nicht vor einer bereits in der Warteschlange ausgeführten ausgeführt wird.

Wenn eine Funktion ihre Arbeit vor einer zweiten Funktion abgibt, wird die erste Funktion, die yield verwendet, zuerst fortgesetzt. Zum Beispiel:

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

Ein `scheduler.yield()`-Aufruf innerhalb einer `scheduler.postTask()`-Aufgabe erbt die Priorität der Aufgabe. Zum Beispiel wird Arbeit nach einem `scheduler.yield()` innerhalb einer niedrigen Prioritätensaufgabe [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking) standardmäßig auch als `"background"` geplant (aber wieder in der erhöhten `"background"`-Prioritätswarteschlange eingefügt, sodass sie vor allen `"background"`-`postTask()`-Aufgaben ausgeführt wird).

Beispielsweise:

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

`scheduler.yield()`-Fortsetzungen erben jede Priorität, die die umgebende `scheduler.postTask()`-Aufgabe hat, einschließlich der Tatsache, ob die Priorität der Aufgabe [dynamisch geändert wurde](/de/docs/Web/API/Prioritized_Task_Scheduling_API#changing_task_priorities).

### Abbrechen eines Yields

Ähnlich wie das Setzen der Priorität kann ein `scheduler.yield()`-Aufruf nicht direkt abgebrochen werden, er erbt jedoch das Abbruchsignal von einer umgebenden `scheduler.postTask()`-Aufgabe. Das Abbrechen der Aufgabe wird auch alle ausstehenden Yields innerhalb davon abbrechen.

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

Das Beispiel ist etwas konstruiert, da es immer den `taskController.abort()`-Aufruf innerhalb der Aufgabe selbst auslöst, aber der `abort()`-Aufruf könnte von überall her kommen. Zum Beispiel könnte er durch das Drücken eines 'Abbrechen'-Buttons durch den Benutzer ausgelöst werden.

In diesem Fall tritt der `abort()`-Aufruf auf, nachdem die `scheduler.postTask()`-Aufgabe bereits gestartet wurde (`"first half of work"` wird protokolliert), aber der Yield-Aufruf erbt das [Abbruchsignal](/de/docs/Web/API/AbortSignal), daher wird der `await scheduler.yield()`-Aufruf mit einem Abbruchgrund von `"cancel work"` eine Ausnahme auslösen.

### Verwendung von `yield()` innerhalb von `requestIdleCallback()`

`scheduler.yield()`-Aufrufe erben ihre Priorität auch von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback), wenn sie innerhalb der Callback-Funktion aufgerufen werden. In diesem Fall wird der [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background)-Prioritätswert geerbt. Beachten Sie jedoch, dass `scheduler.yield()`-Aufrufe innerhalb von `requestIdleCallback()`-Callbacks nicht abgebrochen werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [`Scheduler`](/de/docs/Web/API/Scheduler)
- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
