---
title: "Scheduler: yield() Methode"
short-title: yield()
slug: Web/API/Scheduler/yield
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

{{APIRef('Prioritized Task Scheduling API')}}{{AvailableInWorkers}}

Die **`yield()`** Methode der [`Scheduler`](/de/docs/Web/API/Scheduler) Schnittstelle wird verwendet, um während einer Aufgabe an den {{Glossary("Main_thread", "Hauptthread")}} abzugeben und die Ausführung später fortzusetzen, wobei die Fortsetzung als priorisierte Aufgabe geplant wird (siehe die [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) für weitere Informationen). Dies ermöglicht es, lang andauernde Arbeiten aufzuteilen, sodass der Browser reaktionsfähig bleibt.

Die Aufgabe kann fortgesetzt werden, wenn das von der Methode zurückgegebene Promise aufgelöst wird. Die Priorität, wann das Promise aufgelöst wird, ist standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), kann jedoch eine andere Priorität erben, wenn der `yield()` Aufruf innerhalb eines [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) Callback auftritt.

Außerdem kann die Fortsetzung der Arbeit nach dem `yield()` Aufruf abgebrochen werden, wenn sie innerhalb eines `postTask()` Callback auftritt und die [Aufgabe abgebrochen wird](/de/docs/Web/API/Scheduler/postTask#aborting_tasks).

## Syntax

```js-nolint
yield()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit {{jsxref('undefined')}} erfüllt oder mit einem [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) abgelehnt wird.

## Beispiele

### Feature-Prüfung

Überprüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie `scheduler.yield` auf {{jsxref('globalThis')}}, entweder im Fenster- oder Worker-Bereich, testen.

Zum Beispiel protokolliert der untenstehende Code `"scheduler.yield: Supported"`, wenn die API im aktuellen Browser unterstützt wird.

```js
// Check for support before using.
if (globalThis.scheduler?.yield) {
  console.log("scheduler.yield: Supported");
} else {
  console.error("scheduler.yield: NOT Supported");
}
```

### Grundlegende Verwendung

Lange Aufgaben können unterbrochen werden, indem `await scheduler.yield()` verwendet wird. Die Funktion gibt ein Promise zurück, das an den Hauptthread abgibt, um dem Browser zu ermöglichen, andere ausstehende Arbeiten auszuführen — beispielsweise auf Benutzereingaben zu reagieren —, wenn nötig. Der Browser plant eine Folgetask, die das Promise auflöst, zu welchem Zeitpunkt die Ausführung des Codes dort fortgesetzt werden kann, wo sie unterbrochen wurde.

Wenn beispielsweise ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Listener auf einen Button dazu führt, dass erhebliche Arbeiten erforderlich sind, um neue Seiteninhalte zu laden und anzuzeigen, gibt es für den Benutzer kein visuelles Feedback, dass der Klick auf den Button überhaupt von der Seite registriert wurde, bis diese Arbeiten abgeschlossen sind. Ein `scheduler.yield()` kann in den Ereignis-Listener eingefügt werden, sodass schnelles Feedback angezeigt werden kann (wie ein Spinner), und dann kann der Rest der Arbeit erledigt werden, wenn die Ausführung nach dem Yield fortgesetzt wird.

```js
button.addEventListener("click", async () => {
  // Provide immediate feedback so the user knows their click was received.
  showSpinner();
  await scheduler.yield();
  // Do longer processing
  doSlowContentSwap();
});
```

Es kann auch ausreichend sein, eine schnelle Interaktionsrückmeldung mit der Standardbenutzeroberfläche bereitzustellen. Wenn beispielsweise ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener auf einem Kontrollkästchen zu einer langsamen Filterung von Seiteninhalten führt, kann ein `scheduler.yield()` Aufruf eingefügt werden, um den Statuswechsel des Kontrollkästchens sofort anzuzeigen, bevor zur restlichen Ereignisantwort fortgefahren wird.

```js
checkbox.addEventListener("change", async () => {
  await scheduler.yield();
  doSlowContentFiltering();
});
```

In Situationen, in denen es langwierige Arbeiten gibt, die im Hauptthread erledigt werden müssen und die in eine Reihe von Aufgaben unterteilt werden können, kann `scheduler.yield()` wiederholt aufgerufen werden, um die Seite währenddessen reaktionsfähig zu halten.

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

Die Reihenfolge, in der das von `scheduler.yield()` zurückgegebene Promise im Vergleich zu anderen Aufgaben aufgelöst wird, basiert auf einer impliziten [Aufgabenpriorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

Standardmäßig wird `scheduler.yield()` mit einer [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) Priorität ausgeführt. Die Fortsetzung nach einem `scheduler.yield()` Aufruf hat jedoch ein etwas anderes Verhalten als `scheduler.postTask()` Aufgaben derselben `priorität`.

`scheduler.yield()` reiht seine Aufgabe in eine erhöhte Task-Warteschlange im Vergleich zu einem `scheduler.postTask()` derselben Prioritätsstufe ein. Ein `scheduler.yield()` Fortsetzungsaufruf mit `"user-visible"` Priorität wird also nach `scheduler.postTask()` Aufgaben der höheren `"user-blocking"` Prioritätsstufe, aber vor `scheduler.postTask()` Aufgaben derselben `"user-visible"` Priorität priorisiert (im Standard definiert durch die effektive Priorität einer Task-Warteschlange).

Dies wird manchmal so beschrieben, dass `scheduler.yield()` seine Aufgabe an den Anfang einer Prioritätsstufen-Warteschlange einreiht, während `scheduler.postTask()` Aufgaben ans Ende gehen. Dies kann ein nützliches mentales Modell sein. In Situationen mit nur wenigen Aufgaben bedeutet dies, dass bei gleicher Priorität die `scheduler.yield()` Fortsetzung zuerst kommt, was zusätzliche Flexibilität bei der Planung von Aufgaben ermöglicht. Zum Beispiel:

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

In Fällen, in denen es mehrere `scheduler.yield()` Aufrufe gibt, wird der Unterschied, dass die `scheduler.yield()` Fortsetzungsaufgaben in eine gesteigerte Prioritäts-Warteschlange eingehen, wichtig, denn eine zweite `scheduler.yield()` Aufgabe wird nicht vor einer ausgeführt, die bereits in der Warteschlange ist.

Wenn eine Funktion ihre Arbeit unterbricht, bevor eine zweite Funktion dies tut, wird die erste Funktion, die unterbrochen hat, zuerst fortgesetzt. Zum Beispiel:

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

Ein `scheduler.yield()` Aufruf innerhalb einer `scheduler.postTask()` Aufgabe erbt die Priorität der Aufgabe. Beispielsweise wird Arbeit nach einem `scheduler.yield()` innerhalb einer niedrig-priorisierten [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking) Aufgabe standardmäßig ebenfalls als `"background"` geplant (aber wiederum in die gesteigerte `"background"` Prioritäts-Warteschlange eingefügt, sodass sie vor allen `"background"` `postTask()` Aufgaben ausgeführt wird).

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

`scheduler.yield()` Fortsetzungen werden die Priorität der umgebenden `scheduler.postTask()` Aufgabe erben, einschließlich ob die Priorität der Aufgabe [dynamisch geändert](/de/docs/Web/API/Prioritized_Task_Scheduling_API#changing_task_priorities) wurde.

### Abbrechen eines Yields

Ähnlich wie bei der Prioritätseinstellung kann ein `scheduler.yield()` Aufruf nicht direkt abgebrochen werden, aber er wird das Abbruchsignal einer umgebenden `scheduler.postTask()` Aufgabe erben. Das Abbrechen der Aufgabe wird auch alle darin ausstehenden Yields abbrechen.

Dieses Beispiel verwendet einen [`TaskController`](/de/docs/Web/API/TaskController), um [eine Aufgabe abzubrechen](/de/docs/Web/API/Prioritized_Task_Scheduling_API#aborting_tasks) mit einem `scheduler.yield()` darin.

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

Das Beispiel ist etwas konstruiert, da es immer den `taskController.abort()` Aufruf innerhalb der Aufgabe selbst auslöst, aber der `abort()` Aufruf kann von überall kommen. Beispielsweise könnte er durch Drücken eines "Abbrechen" Buttons durch den Benutzer ausgelöst werden.

In diesem Fall erfolgt der `abort()` nach dem `scheduler.postTask()` Aufruf, nachdem die Aufgabe bereits gestartet hat (`"first half of work"` wird protokolliert), aber der Yield-Aufruf erbt das [Abbruchsignal](/de/docs/Web/API/AbortSignal), deshalb wird der `await scheduler.yield()` Aufruf mit einem Abbruchgrund von `"cancel work"` geworfen.

### Verwendung von `yield()` innerhalb von `requestIdleCallback()`

`scheduler.yield()` Aufrufe erben auch ihre Priorität von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback), wenn sie innerhalb der Rückruffunktion aufgerufen werden. In diesem Fall wird der [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background) Prioritätswert geerbt. Beachten Sie jedoch, dass `scheduler.yield()` Aufrufe innerhalb von `requestIdleCallback()` Rückrufen nicht abbrechbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [`Scheduler`](/de/docs/Web/API/Scheduler)
- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
