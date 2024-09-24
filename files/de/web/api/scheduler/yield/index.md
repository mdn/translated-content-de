---
title: "Scheduler: yield() Methode"
short-title: yield()
slug: Web/API/Scheduler/yield
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef('Prioritized Task Scheduling API')}}{{AvailableInWorkers}}

Die **`yield()`** Methode des {{domxref('Scheduler')}}-Interfaces wird verwendet, um während einer Aufgabe an den [Haupt-Thread](/de/docs/Glossary/Main_thread) zu übergeben und die Ausführung später fortzusetzen, wobei die Fortsetzung als priorisierte Aufgabe geplant wird (siehe die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) für weitere Informationen). Dies ermöglicht es, lang andauernde Arbeit aufzuteilen, sodass der Browser reaktionsfähig bleibt.

Die Aufgabe kann fortgesetzt werden, wenn das von der Methode zurückgegebene Versprechen erfüllt wird. Die Priorität dafür, wann das Versprechen erfüllt wird, ist standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), kann jedoch eine andere Priorität erben, wenn der `yield()`-Aufruf innerhalb eines {{domxref('Scheduler.postTask()')}}-Callbacks erfolgt.

Außerdem kann die Fortsetzung der Arbeit nach dem `yield()`-Aufruf abgebrochen werden, wenn sie innerhalb eines `postTask()`-Callbacks erfolgt und die [Aufgabe abgebrochen wird](/de/docs/Web/API/Scheduler/postTask#aborting_tasks).

## Syntax

```js-nolint
yield()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit {{jsxref('undefined')}} erfüllt wird oder mit einem {{domxref('AbortSignal.reason')}} abgelehnt wird.

## Beispiele

### Feature-Prüfung

Überprüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie `scheduler.yield` auf {{jsxref('globalThis')}} entweder im Fenster- oder Worker-Kontext testen.

Zum Beispiel protokolliert der folgende Code `"scheduler.yield: Supported"`, wenn die API im aktuellen Browser unterstützt wird.

```js
// Überprüfen Sie die Unterstützung, bevor Sie die Methode verwenden.
if (globalThis.scheduler?.yield) {
  console.log("scheduler.yield: Supported");
} else {
  console.error("scheduler.yield: NOT Supported");
}
```

### Grundlegende Verwendung

Lange Aufgaben können aufgeteilt werden, indem auf `scheduler.yield()` gewartet wird. Die Funktion gibt ein Versprechen zurück und übergibt an den Haupt-Thread, damit der Browser andere anstehende Arbeiten ausführen kann – wie z.B. auf Benutzereingaben reagieren –, falls erforderlich. Der Browser plant eine Folgetask, die das Versprechen auflöst, woraufhin die Ausführung des Codes an der Stelle fortgesetzt werden kann, an der sie unterbrochen wurde.

Zum Beispiel, wenn ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener auf einen Button wesentliche Arbeit ausführt, um neuen Seiteninhalt zu laden und anzuzeigen, gibt es keine visuelle Rückmeldung für den Benutzer, dass sein Button-Klick von der Seite registriert wurde, bis diese Arbeit abgeschlossen ist. Ein `scheduler.yield()` kann in den Ereignislistener eingefügt werden, um schnelle Rückmeldungen zu zeigen (wie z. B. einen Spinner), und dann kann die restliche Arbeit ausgeführt werden, wenn die Ausführung nach dem Yield fortgesetzt wird.

```js
button.addEventListener("click", async () => {
  // Sofortiges Feedback geben, sodass der Benutzer weiß, dass sein Klick erfasst wurde.
  showSpinner();
  await scheduler.yield();
  // Längere Verarbeitung durchführen
  doSlowContentSwap();
});
```

Es kann auch ausreichend sein, schnelle Interaktionsrückmeldungen mit der Standard-Benutzeroberfläche zu bieten. Zum Beispiel, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener auf ein Kontrollkästchen eine langsame Filterung des Seiteninhalts auslöst, kann ein `scheduler.yield()`-Aufruf eingefügt werden, um den Statuswechsel des Kontrollkästchens sofort anzuzeigen, bevor die verbleibende Reaktion auf das Ereignis fortgesetzt wird.

```js
checkbox.addEventListener("change", async () => {
  await scheduler.yield();
  doSlowContentFiltering();
});
```

In Situationen, in denen es umfangreiche Arbeiten gibt, die auf dem Haupt-Thread erledigt werden müssen und die in eine Reihe von Aufgaben aufgeteilt werden können, kann `scheduler.yield()` wiederholt aufgerufen werden, um die Seite währenddessen reaktionsfähig zu halten.

```js
function doWork(value) {
  console.log(`Arbeitsteil ${value}`);
}

const workList = [0, 1, 2, 3, 4];

for (const work of workList) {
  doWork(work);
  await scheduler.yield();
}
```

### Yield-Priorität

Die Reihenfolge, in der das von `scheduler.yield()` zurückgegebene Versprechen im Vergleich zu anderen Aufgaben erfüllt wird, basiert auf einer impliziten [Aufgabenpriorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

Standardmäßig wird `scheduler.yield()` mit einer [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible)-Priorität ausgeführt. Die Fortsetzung nach einem `scheduler.yield()`-Aufruf hat jedoch ein leicht abweichendes Verhalten im Vergleich zu `scheduler.postTask()`-Aufgaben mit derselben `priority`.

`scheduler.yield()` reiht seine Aufgabe in eine priorisierte Aufgabenwarteschlange ein, verglichen mit einem `scheduler.postTask()` auf demselben Prioritätsniveau. Zum Beispiel wird eine `scheduler.yield()`-Fortsetzung mit `"user-visible"`-Priorität nach `scheduler.postTask()`-Aufgaben auf höherem `"user-blocking"`-Prioritätsniveau priorisiert, jedoch vor `scheduler.postTask()`-Aufgaben mit derselben `"user-visible"`-Priorität (in der Spezifikation wird dies durch die [effektive Priorität einer Aufgabenwarteschlange](https://wicg.github.io/scheduling-apis/#scheduler-task-queue-effective-priority) definiert).

Dies wird manchmal so beschrieben, dass `scheduler.yield()` seine Aufgabe an die Spitze der Warteschlange einer Prioritätsstufe stellt, während `scheduler.postTask()`-Aufgaben ans Ende gehen. Dies kann ein nützliches mentales Modell sein. In Situationen mit nur wenigen Aufgaben bedeutet dies, dass bei gleicher Priorität die `scheduler.yield()`-Fortsetzung zuerst kommt, was zusätzliche Flexibilität bei der Planung von Aufgaben ermöglicht. Zum Beispiel:

```js
scheduler.postTask(() => console.log("user-visible postTask"));
scheduler.postTask(() => console.log("user-blocking postTask"), {
  priority: "user-blocking",
});
await scheduler.yield();
console.log("user-visible yield");
```

wird das folgende protokollieren:

```plain
user-blocking postTask
user-visible yield
user-visible postTask
```

In Fällen mit mehreren `scheduler.yield()`-Aufrufen wird der Unterschied, dass die `scheduler.yield()`-Fortsetzungsaufgaben in eine priorisierte _Warteschlange_ gehen, wichtig, da eine zweite `scheduler.yield()`-Aufgabe nicht vor einer ausgeführt wird, die bereits in der Warteschlange ist.

Wenn eine Funktion ihre Arbeit vor einer zweiten Funktion übergibt, wird die erste Funktion, die übergeben hat, zuerst fortgesetzt. Zum Beispiel:

```js
async function first() {
  console.log("Beginn der ersten Funktion");
  await scheduler.yield();
  console.log("Ende der ersten Funktion");
}

async function second() {
  console.log("Beginn der zweiten Funktion");
  await scheduler.yield();
  console.log("Ende der zweiten Funktion");
}

first();
second();
```

wird das folgende protokollieren:

```plain
Beginn der ersten Funktion
Beginn der zweiten Funktion
Ende der ersten Funktion
Ende der zweiten Funktion
```

### Vererbte Aufgabenprioritäten

Ein `scheduler.yield()`-Aufruf innerhalb einer `scheduler.postTask()`-Aufgabe erbt die Priorität der Aufgabe. Zum Beispiel wird die Arbeit nach einem `scheduler.yield()` innerhalb einer niedrig priorisierten [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking)-Aufgabe standardmäßig ebenfalls als `"background"` geplant (verbleibt jedoch in der erhöhten `"background"`-Prioritätswarteschlange, sodass sie vor jeglichen `"background"` `postTask()`-Aufgaben ausgeführt wird).

Zum Beispiel:

```js
async function backgroundWork() {
  scheduler.postTask(() => console.log("background postTask"), {
    priority: "background",
  });
  scheduler.postTask(() => console.log("user-visible postTask"), {
    priority: "user-visible",
  });
  // yield() erbt die "background"-Priorität von der umgebenden Aufgabe.
  await scheduler.yield();
  console.log("default-background yield");
}

await scheduler.postTask(backgroundWork, { priority: "background" });
```

wird das folgende protokollieren:

```plain
user-visible postTask
default-background yield
background postTask
```

`scheduler.yield()`-Fortsetzungen erben jede Priorität, die die umgebende `scheduler.postTask()`-Aufgabe hat, einschließlich ob die Priorität der Aufgabe [dynamisch verändert wurde](/de/docs/Web/API/Prioritized_Task_Scheduling_API#changing_task_priorities).

### Abbrechen eines Yields

Ähnlich wie beim Einstellen der Priorität kann ein `scheduler.yield()`-Aufruf nicht direkt abgebrochen werden, aber er erbt das Abbruchsignal von einer umgebenden `scheduler.postTask()`-Aufgabe. Das Abbrechen der Aufgabe wird auch alle anhängigen Yields in ihr abbrechen.

Dieses Beispiel verwendet einen {{domxref('TaskController')}}, um eine Aufgabe mit einem `scheduler.yield()` darin [abzubrechen](/de/docs/Web/API/Prioritized_Task_Scheduling_API#aborting_tasks).

```js
const taskController = new TaskController();

function firstHalfOfWork() {
  console.log("Erste Hälfte der Arbeit");
  taskController.abort("Arbeit abbrechen");
}

function secondHalfOfWork() {
  // Wird nie ausgeführt.
  console.log("Zweite Hälfte der Arbeit");
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

Das Beispiel ist bewusst so konstruiert, dass der `taskController.abort()`-Aufruf immer innerhalb der Aufgabe selbst erfolgt, aber der `abort()`-Aufruf könnte von überall kommen. Beispielsweise könnte er durch das Drücken eines 'Abbrechen'-Buttons durch den Benutzer ausgelöst werden.

In diesem Fall erfolgt der `abort()`-Aufruf, nachdem die `scheduler.postTask()`-Aufgabe bereits gestartet wurde (`"erste Hälfte der Arbeit"` wird protokolliert), allerdings erbt der Yield-Aufruf das [Abbruchsignal](/de/docs/Web/API/AbortSignal), sodass der `await scheduler.yield()`-Aufruf mit einem Abbruchgrund von `"Arbeit abbrechen"` wirft.

### Verwendung von `yield()` innerhalb von `requestIdleCallback()`

Auch `scheduler.yield()`-Aufrufe erben ihre Priorität von {{domxref("Window.requestIdleCallback()")}}, wenn sie innerhalb der Rückruffunktion aufgerufen werden. In diesem Fall wird der [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background)-Prioritätswert übernommen. Beachten Sie jedoch, dass `scheduler.yield()`-Aufrufe innerhalb von `requestIdleCallback()`-Rückrufen nicht abbrechbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- {{domxref('Scheduler')}}
- {{domxref('Scheduler.postTask()')}}
