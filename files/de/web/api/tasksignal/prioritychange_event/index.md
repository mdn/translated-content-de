---
title: "TaskSignal: prioritychange-Ereignis"
short-title: prioritychange
slug: Web/API/TaskSignal/prioritychange_event
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`prioritychange`**-Ereignis wird an ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) gesendet, wenn sich dessen [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

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
    Die neue/aktualisierte Priorität wird von `event.target.priority` ([`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority)) gelesen.

## Beispiele

Das folgende Beispiel zeigt, wie Sie auf das `prioritychange`-Ereignis an einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) hören können.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Zuerst erstellen wir einen Controller und fügen seinem Signal einen Ereignislistener hinzu.
Beim Bearbeiten des Ereignisses verwenden wir [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) für das Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) für das Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, wobei das Signal übergeben wird, und dann ändern wir sofort die Priorität.

```js
if ("scheduler" in this) {
  // Declare a TaskController, setting its signal priority to 'user-blocking'
  const controller = new TaskController({ priority: "user-blocking" });

  // Listen for 'prioritychange' events on the controller's signal.
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    mylog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Post task using the controller's signal.
  // The signal priority sets the initial priority of the task
  scheduler.postTask(
    () => {
      mylog("Task 1");
    },
    { signal: controller.signal },
  );

  // Change the priority to 'background' using the controller
  controller.setPriority("background");
}
```

> [!NOTE]
> Der obige Code verwendet eine benutzerdefinierte Log-Funktion `mylog()`, um in das untenstehende Textfeld zu protokollieren.
> Dies ist ausgeblendet, da es für das Beispiel nicht relevant ist.

Die folgende Ausgabe zeigt, dass sich die [Priorität der Aufgabe](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) von `user-blocking` zu `background` geändert hat.
Dies geschieht, bevor die Aufgabe ausgeführt wird, könnte jedoch auch passieren, während die Aufgabe läuft.

{{EmbedLiveSample("Examples",'400px','130px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
