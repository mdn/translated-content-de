---
title: "Scheduler: yield() Methode"
short-title: yield()
slug: Web/API/Scheduler/yield
l10n:
  sourceCommit: ca5b9476724568c1c748c601bbf5c216b9fac916
---

{{APIRef('Prioritized Task Scheduling API')}}{{AvailableInWorkers}}

Die **`yield()`** Methode des [`Scheduler`](/de/docs/Web/API/Scheduler)-Interfaces wird verwendet, um während einer Aufgabe an den [Hauptthread](/de/docs/Glossary/Main_thread) abzugeben und die Ausführung später fortzusetzen, wobei die Fortsetzung als priorisierte Aufgabe geplant wird (weitere Informationen siehe [Priorisierte Aufgabenplanung-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)). Dies ermöglicht es, langlaufende Arbeiten aufzuteilen, damit der Browser reaktionsfähig bleibt.

Die Aufgabe kann fortgesetzt werden, wenn das von der Methode zurückgegebene Versprechen aufgelöst wird. Die Priorität, wann das Versprechen aufgelöst wird, ist standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), kann jedoch eine andere Priorität erben, wenn der `yield()`-Aufruf innerhalb eines [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)-Callbacks erfolgt.

Zusätzlich kann die Fortsetzung der Arbeit nach dem `yield()`-Aufruf abgebrochen werden, wenn sie innerhalb eines `postTask()`-Callbacks erfolgt und die [Aufgabe abgebrochen wird](/de/docs/Web/API/Scheduler/postTask#aborting_tasks).

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

Überprüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie `scheduler.yield` auf {{jsxref('globalThis')}} testen, entweder im Fenster- oder Worker-Bereich.

Das folgende Beispiel gibt "scheduler.yield: Supported" aus, wenn die API im aktuellen Browser unterstützt wird.

```js
// Check for support before using.
if (globalThis.scheduler?.yield) {
  console.log("scheduler.yield: Supported");
} else {
  console.error("scheduler.yield: NOT Supported");
}
```

### Grundlegende Verwendung

Lange Aufgaben können durch Abwarten von `scheduler.yield()` aufgeteilt werden. Die Funktion gibt ein Versprechen zurück, das an den Hauptthread abgibt, um dem Browser die Möglichkeit zu geben, andere anstehende Aufgaben auszuführen, wie z. B. auf Benutzereingaben zu reagieren. Der Browser plant eine Folgeaufgabe, die das Versprechen auflöst, woraufhin die Ausführung des Codes dort fortgesetzt werden kann, wo sie unterbrochen wurde.

Wenn beispielsweise ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Listener auf einem Button erhebliche Arbeit verursacht, um neue Seiteninhalte zu laden und anzuzeigen, gibt es keine visuelle Rückmeldung für den Benutzer, dass sein Button-Klick von der Seite registriert wurde, bis diese Arbeit abgeschlossen ist. Ein `scheduler.yield()` kann in den Ereignis-Listener eingefügt werden, damit schnelle Rückmeldungen angezeigt werden können (wie ein Ladesymbol), und dann kann der Rest der Arbeit erfolgen, wenn die Ausführung nach dem Yield fortgesetzt wird.

```js
button.addEventListener("click", async () => {
  // Provide immediate feedback so the user knows their click was received.
  showSpinner();
  await scheduler.yield();
  // Do longer processing
  doSlowContentSwap();
});
```

Es kann auch ausreichen, schnelle Interaktionsfeedbacks mit der Standard-Benutzeroberfläche zu liefern. Wenn beispielsweise ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener auf einem Kontrollkästchen eine langsame Filterung von Seiteninhalten auslöst, kann ein `scheduler.yield()`-Aufruf eingefügt werden, um den Statuswechsel sofort anzuzeigen, bevor die restliche Ereignisantwort fortgesetzt wird.

```js
checkbox.addEventListener("change", async () => {
  await scheduler.yield();
  doSlowContentFiltering();
});
```

In Situationen, in denen umfangreiche Arbeiten auf dem Hauptthread durchgeführt werden müssen, die in eine Reihe von Aufgaben aufgeteilt werden können, kann `scheduler.yield()` wiederholt aufgerufen werden, um die Seite währenddessen reaktionsfähig zu halten.

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

Die Reihenfolge, in der das von `scheduler.yield()` zurückgegebene Versprechen relativ zu anderen Aufgaben aufgelöst wird, basiert auf einer impliziten [Aufgabenpriorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

Standardmäßig wird `scheduler.yield()` mit einer [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible)-Priorität ausgeführt. Die Fortsetzung nach einem `scheduler.yield()`-Aufruf hat jedoch ein leicht unterschiedliches Verhalten gegenüber `scheduler.postTask()`-Aufgaben derselben `Priorität`.

`scheduler.yield()` reiht seine Aufgabe in eine priorisierte Aufgabenwarteschlange ein, verglichen mit einem `scheduler.postTask()` der gleichen Prioritätsstufe. So wird z. B. eine `scheduler.yield()`-Fortsetzung mit `"user-visible"`-Priorität nach `scheduler.postTask()`-Aufgaben mit der höheren `"user-blocking"`-Prioritätsstufe priorisiert, aber vor `scheduler.postTask()`-Aufgaben mit derselben `"user-visible"`-Priorität (in der Spezifikation ist dies durch die [effektive Priorität der Aufgabenwarteschlange](https://wicg.github.io/scheduling-apis/#scheduler-task-queue-effective-priority) definiert).

Dies wird manchmal beschrieben, als würde `scheduler.yield()` seine Aufgabe am Anfang der Prioritätsstufenwarteschlange einreihen, während `scheduler.postTask()`-Aufgaben am Ende stehen. Dies kann ein nützliches mentales Modell sein. In Situationen mit nur wenigen Aufgaben bedeutet dies, dass bei derselben Priorität die `scheduler.yield()`-Fortsetzung zuerst kommt und zusätzliche Flexibilität bei der Planung von Aufgaben ermöglicht. Zum Beispiel:

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

In Fällen, in denen es mehrere `scheduler.yield()`-Aufrufe gibt, wird der Unterschied, dass die `scheduler.yield()`-Fortsetzungsaufgaben in eine priorisierte Warteschlange gelangen, wichtig, da eine zweite `scheduler.yield()`-Aufgabe nicht vor einer bereits in der Warteschlange befindlichen ausgeführt wird.

Wenn eine Funktion ihre Arbeit abgibt, bevor eine zweite Funktion dies tut, wird die erste Funktion, die abgibt, zuerst fortgesetzt. Zum Beispiel:

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

Ein `scheduler.yield()`-Aufruf innerhalb einer `scheduler.postTask()`-Aufgabe erbt die Priorität der Aufgabe. Beispielsweise wird Arbeit nach einem `scheduler.yield()` innerhalb einer niedrig priorisierten [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking)-Aufgabe standardmäßig auch als `"background"` geplant (aber, wie zuvor, in der priorisierten `"background"`-Warteschlange eingefügt, um vor allen `"background"`-`postTask()`-Aufgaben ausgeführt zu werden).

Beispiel:

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

`scheduler.yield()`-Fortsetzungen erben die Priorität der umgebenden `scheduler.postTask()`-Aufgabe, einschließlich ob die Priorität der Aufgabe [dynamisch geändert](/de/docs/Web/API/Prioritized_Task_Scheduling_API#changing_task_priorities) wurde.

### Abbrechen eines Yields

Ähnlich wie bei der Festlegung der Priorität kann ein `scheduler.yield()`-Aufruf nicht direkt abgebrochen werden, aber er wird das Abbruchsignal einer umgebenden `scheduler.postTask()`-Aufgabe erben. Der Abbruch der Aufgabe wird auch alle ausstehenden Yields innerhalb dieser abbrechen.

Dieses Beispiel verwendet einen [`TaskController`](/de/docs/Web/API/TaskController), um eine Aufgabe mit einem `scheduler.yield()` darin abzubrechen.

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

Das Beispiel ist etwas konstruiert, da der `taskController.abort()`-Aufruf immer innerhalb der Aufgabe selbst ausgelöst wird, aber der `abort()`-Aufruf könnte von überall kommen. Beispielsweise könnte er durch das Drücken eines 'Abbrechen'-Buttons durch den Benutzer ausgelöst werden.

In diesem Fall erfolgt der `abort()`-Aufruf, nachdem die `scheduler.postTask()`-Aufgabe bereits gestartet ist (`"first half of work"` wird protokolliert), aber der Yield-Aufruf erbt das [Abbruchsignal](/de/docs/Web/API/AbortSignal), daher wird der `await scheduler.yield()`-Aufruf mit einem Abbruchgrund von `"cancel work"` eine Ausnahme auslösen.

### Verwendung von `yield()` innerhalb von `requestIdleCallback()`

`scheduler.yield()`-Aufrufe erben auch ihre Priorität von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback), wenn sie innerhalb der Callback-Funktion aufgerufen werden. In diesem Fall wird der [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background)-Prioritätswert vererbt. Beachten Sie jedoch, dass `scheduler.yield()`-Aufrufe innerhalb von `requestIdleCallback()`-Callbacks nicht abgebrochen werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Priorisierte Aufgabenplanung-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [`Scheduler`](/de/docs/Web/API/Scheduler)
- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
