---
title: "TaskSignal: prioritychange Ereignis"
short-title: prioritychange
slug: Web/API/TaskSignal/prioritychange_event
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`prioritychange`** Ereignis wird an ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) gesendet, wenn dessen [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) geändert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("prioritychange", (event) => {});

onprioritychange = (event) => {};
```

## Ereignistyp

Ein [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TaskPriorityChangeEvent")}}

## Ereigniseigenschaften

- [`TaskPriorityChangeEvent.previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority)
  - : Gibt die vorherige Priorität der Aufgabe an (bevor sie geändert wurde).
    Die neue/aktualisierte Priorität wird von `event.target.priority` ([`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority)) ausgelesen.

## Beispiele

Das folgende Beispiel zeigt, wie man auf das `prioritychange` Ereignis an einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) hört.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Zuerst erstellen wir einen Controller und fügen seinem Signal einen Ereignislistener hinzu. Bei der Behandlung des Ereignisses verwenden wir [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority), um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, indem das Signal übergeben wird, und dann ändern wir sofort die Priorität.

```js
if ("scheduler" in this) {
  // Declare a TaskController, setting its signal priority to 'user-blocking'
  const controller = new TaskController({ priority: "user-blocking" });

  // Listen for 'prioritychange' events on the controller's signal.
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    myLog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Post task using the controller's signal.
  // The signal priority sets the initial priority of the task
  scheduler.postTask(
    () => {
      myLog("Task 1");
    },
    { signal: controller.signal },
  );

  // Change the priority to 'background' using the controller
  controller.setPriority("background");
}
```

> [!NOTE]
> Der obige Code verwendet eine benutzerdefinierte Protokollierungsfunktion `myLog()`, um in das untenstehende Textfeld zu protokollieren.
> Dies ist ausgeblendet, da es für das Beispiel nicht relevant ist.

Die untenstehende Ausgabe zeigt, dass sich die [Priorität der Aufgabe](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) von `user-blocking` zu `background` geändert hat.
Dies passiert, bevor die Aufgabe ausgeführt wird, könnte aber auch passieren, während die Aufgabe läuft.

{{EmbedLiveSample("Examples",'400px','130px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
